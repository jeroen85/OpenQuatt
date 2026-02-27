# Technical Specification (TSS)

## Table of Contents

- [1. Document Purpose](#1-document-purpose)
- [2. Runtime Platform](#2-runtime-platform)
- [3. Repository Components](#3-repository-components)
- [4. Core Technical Ownership](#4-core-technical-ownership)
- [5. Signal Contracts](#5-signal-contracts)
- [6. Timing and Scheduling](#6-timing-and-scheduling)
- [7. Supervisory Engine (Technical)](#7-supervisory-engine-technical)
- [8. Heating Strategy Engine (Technical)](#8-heating-strategy-engine-technical)
- [9. Heat Allocation Engine (Technical)](#9-heat-allocation-engine-technical)
- [10. Flow Control Engine (Technical)](#10-flow-control-engine-technical)
- [11. CIC Engine (Technical)](#11-cic-engine-technical)
- [12. Sensor Configuration and Local Source Selection Engine](#12-sensor-configuration-and-local-source-selection-engine)
- [13. Boiler Engine (Technical)](#13-boiler-engine-technical)
- [14. HP IO Engine (Technical)](#14-hp-io-engine-technical)
- [15. Energy Engine (Technical)](#15-energy-engine-technical)
- [16. Technical Invariants](#16-technical-invariants)
- [17. Technical Validation Checklist](#17-technical-validation-checklist)

## 1. Document Purpose

This document defines the technical implementation of OpenQuatt.

It describes **how** the current codebase realizes functional behavior.

Companion document:

- [Functional Specification](functional-specification.md)

## 2. Runtime Platform

- ESPHome on ESP32 (default: ESP32-S3 profile)
- Framework: `esp-idf`
- Modbus over RS485 (half duplex, RTS/DE-RE pin)
- Home Assistant API + ESPHome web server

## 3. Repository Components

### Root

- `openquatt.yaml`: default top-level entrypoint (Waveshare profile)
- `openquatt_waveshare.yaml`: explicit [Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm) entrypoint
- `openquatt_heatpump_listener.yaml`: [Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/) entrypoint
- `openquatt_base.yaml`: shared base (project metadata, board/framework, package wiring)
- `openquatt/`: subsystem packages
- `docs/dashboard/openquatt_ha_dashboard_nl.yaml`: HA dashboard definition (Dutch)
- `docs/dashboard/openquatt_ha_dashboard_en.yaml`: HA dashboard definition (English)

### Package include order

Defined in `openquatt/oq_packages.yaml` and must be preserved unless dependencies are intentionally reworked.

## 4. Core Technical Ownership

| Component | Technical ownership |
|---|---|
| `oq_common` | shared runtime services (logger/api/ota/wifi/http/modbus) and service entities |
| `oq_supervisory_controlmode` | Control Mode state machine, low-flow state, power cap factor |
| `oq_heating_strategy` | strategy mode selection, demand generation, curve/PID path |
| `oq_heat_control` | demand filtering, cap application, HP level optimization/application |
| `oq_flow_control` | pump iPWM output logic and mode execution |
| `oq_flow_autotune` | identification + suggested PI gains |
| `oq_boiler_control` | relay command and temperature lockout |
| `oq_cic` | polling scheduler, backoff, parse/publish pipeline |
| `oq_ha_inputs` | ingest of fixed Home Assistant proxy sensors |
| `oq_local_sensors` | DS18B20 ingest |
| `oq_sensor_sources` | source selectors, selected-source synthesis |
| `oq_debug_testing` | manual diagnostics helpers (one-shot Modbus register reads, probe entities) |
| `oq_energy` | integration and daily/total energy entities |
| `oq_HP_io` | Modbus register mapping and per-unit entities |

## 5. Signal Contracts

### 5.1 Mode and gating

- `oq_control_mode` and `oq_control_mode_code` are supervisory-owned.
- Downstream components consume mode state; they do not author it.

### 5.2 Demand chain

- `oq_demand_raw` is strategy-owned.
- `oq_demand_filtered` is heat-control-owned.
- `oq_power_cap_f` is supervisory-owned and consumed by heat control.

### 5.3 Source chain

- Local, CIC, and HA-proxy sources are published separately.
- `*_selected` signals are canonical control inputs.

## 6. Timing and Scheduling

### Supervisory loop

- Interval: `${oq_supervisory_loop_s}`
- Phases include: power limiting, flow interlock, frost detection, mode resolution, silent/sticky behavior.

### Strategy loop

- Interval: `${oq_strategy_loop_s}`
- Computes demand from selected strategy.

### Heat allocation loop

- Interval: `${oq_heat_loop_s}`
- Intentionally slower for stable level decisions.

### Flow loop

- Interval: `${oq_flow_loop_s}`
- Fast execution for hydraulic control.

### CIC scheduler

- Tick interval: `${cic_poll_tick_ms}`
- Request gate based on backoff and URL validity.

## 7. Supervisory Engine (Technical)

Key technical responsibilities:

1. Maintain power cap timer state and cap factor.
2. Maintain low-flow and recovery timers.
3. Evaluate frost hysteresis when applicable.
4. Resolve desired mode with CM1 windowing and override.
5. Apply CM2/CM3 promote-demote timers using deficit input.

Key globals include:

- `oq_lowflow_since_ms`
- `oq_flow_recover_since_ms`
- `oq_lowflow_fault_active`
- `oq_cm1_until_ms`
- `oq_cm1_next_after`
- `oq_power_cap_f`
- `oq_cm2_idle_since_ms`
- `oq_cm2_entered_ms`
- `oq_cm2_reentry_block_until_ms`
- `oq_lowload_heat_latch`

Supervisory low-load/idle-exit technical behavior (Power House mode):

- dynamic low-load threshold estimation via `oq_perf::interp_power_th_w(1, Tamb, Tsup)`
- dynamic threshold clamps:
  - `off`: `0.75 * pmin`, clamped to `500..1600 W`
  - `on`: `1.00 * pmin`, clamped to `700..2200 W`
  - enforce minimum hysteresis gap (`on >= off + 200 W`)
- CM2 idle-exit arming requires:
  - in CM2
  - active heat request
  - both HP levels off
  - both units idle
  - startup-grace inactive
  - high-load idle-exit block inactive
- startup-grace uses `${oq_cm2_min_run_s}` after CM2 entry.
- when idle-exit trips, optional re-entry lockout window is applied.

Supervisory diagnostics exposed:

- `Low-load dynamic thresholds` text (`pmin/off/on`)
- `CM2 idle-exit reason` text
- `CM2 re-entry block active` binary sensor
- `Heat-enable state (shadow)` text state machine

## 8. Heating Strategy Engine (Technical)

Two technical branches:

### 8.1 Power House branch

- uses `outside_temp_selected`, `house_*`, `ph_*`, and room values
- computes and clamps `P_house`, `P_raw`, `P_limited`
- maps to `oq_demand_raw` on `0..demand_max`

### 8.2 Heating-curve branch

- computes `oq_supply_target_temp`
- drives climate PID (`oq_heating_curve_pid`)
- maps PID output (`heating_curve_pid_out`) to demand scale
- applies `Curve Temp Deadband` and `Curve Demand Off Hold` around zero-demand edge
- applies overtemp latch to reduce demand chatter near supply-target crossover

Technical guard:

- invalid SP/PV triggers demand-safe behavior and PID integral reset.
- overtemp latch also triggers PID integral reset to avoid continued push during over-target phase.

## 9. Heat Allocation Engine (Technical)

Execution sequence:

1. Filter demand with asymmetric up/down behavior.
2. Apply `oq_power_cap_f` clamp.
3. Gate non-heating Control Modes to standby/level-0 and return.
4. Select per-strategy allocation path.
5. Apply allowed-level constraints.
6. Apply minimum-runtime stop blocking.
7. Apply mode + level writes with write-on-change discipline.
8. Update runtime counters and start/stop timestamps.

Demand filtering details:

- upward filtering uses runtime control `Demand filter ramp up` (`step/min`)
- downward filtering remains immediate to preserve fast demand release

### Optimizer-specific notes

Power House path evaluates candidate level pairs and cost terms:

- thermal target error
- level-change penalty
- low-load two-HP penalty
- split-balance penalty
- electrical soft/peak guard

Defrost handling is modeled via thermal derating factor and optional compensation boost.

## 10. Flow Control Engine (Technical)

Flow engine uses explicit execution modes and deterministic priority.

Important technical features:

- CM0 early return (no ownership conflict)
- autotune override path
- manual/frost fixed paths
- AUTO PI path with startup hold and failsafe

PI technical elements:

- deadband
- setpoint ramping
- integrator clamp
- asymmetric actuation limit
- stable tracking for `last_good_pwm`

## 11. CIC Engine (Technical)

CIC ingest includes:

- request script (`cic_fetch`)
- success/failure scripts
- exponential backoff scripts
- stale-data invalidation script

Technical guarantees:

- request only when URL length and backoff gate allow
- failed parse/request increments failure path
- stale feed invalidates CIC values and feed health state

## 12. Sensor Configuration and Local Source Selection Engine

`oq_ha_inputs` provides:

- three fixed Home Assistant proxy input sensors:
  - outside temperature
  - thermostat setpoint
  - thermostat room temperature
- runtime-usable HA-backed sources for outside/room signals

`oq_local_sensors` provides:

- DS18B20 sensor (`water_supply_temp_esp`)

`oq_sensor_sources` provides:

- selected abstractions for water supply, flow, outside temperature, room temperature, room setpoint
- five source selectors for local/CIC/HA-input arbitration (per signal)

Selected signals are consumed by strategy/flow logic.

## 13. Boiler Engine (Technical)

`oq_boiler_control` implements:

- relay output ownership
- mode-gated activation policy
- supply-temperature trip/reset hysteresis
- boiler thermal power estimate sensor

## 14. HP IO Engine (Technical)

`oq_HP_io` is instantiated twice (HP1 and HP2) with per-instance substitutions.

It defines:

- Modbus controller
- command entities (working mode, compressor level, pump speed)
- operating telemetry sensors
- binary status/failure bits
- `Active Failures List` text sensor
- `Allowed level 1..10` switches per HP

## 15. Energy Engine (Technical)

`oq_energy` defines:

- electrical daily + total energy
- heat pump thermal daily + total energy
- boiler thermal daily + total energy
- system thermal daily + total energy
- daily heat pump COP KPI

Integration sources use existing power sensors and shared time source (`oq_time`).

## 16. Technical Invariants

1. Preserve ownership boundaries.
2. Keep canonical signal names stable.
3. Keep loop timing semantics unless deliberately retuned.
4. Keep fail-safe fallbacks conservative.
5. Keep write-on-change behavior for Modbus command paths.

## 17. Technical Validation Checklist

After technical changes:

1. `esphome config openquatt.yaml`
2. `esphome compile openquatt.yaml`
3. Verify mode entities and selected sources update.
4. Verify pump and compressor commands behave as expected.
5. Verify dashboard entities still resolve.
6. Verify no unintended source or mode ownership conflicts.
