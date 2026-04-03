# System Overview

This document explains the current OpenQuatt architecture as implemented in the YAML codebase.

## Table of Contents

- [1. Top-Level Composition](#1-top-level-composition)
- [2. Ownership Model](#2-ownership-model)
- [3. Core Runtime Loops](#3-core-runtime-loops)
- [4. Data Pipeline](#4-data-pipeline)
- [5. Heating Strategy Mechanics](#5-heating-strategy-mechanics)
- [6. Allocation and Optimization Mechanics](#6-allocation-and-optimization-mechanics)
- [7. Flow Control Mechanics](#7-flow-control-mechanics)
- [8. Safety Model](#8-safety-model)
- [9. Hardware Profiles and Pin Strategy](#9-hardware-profiles-and-pin-strategy)
- [10. UI and Observability Organization](#10-ui-and-observability-organization)
- [11. Engineering Notes](#11-engineering-notes)

## 1. Top-Level Composition

OpenQuatt is driven from explicit topology/hardware entrypoints:

- `openquatt_duo_waveshare.yaml`
- `openquatt_duo_heatpump_listener.yaml`
- `openquatt_single_waveshare.yaml`
- `openquatt_single_heatpump_listener.yaml`

Each entrypoint includes:

- global project/board/framework config
- package includes via `openquatt/oq_packages.yaml` (Duo) or `openquatt/oq_packages_single.yaml` (Single)

Shared runtime services are loaded from `openquatt/oq_common.yaml`, including:

- logging, API, and OTA
- Improv Serial Wi-Fi provisioning plus captive portal fallback
- HTTP client and Modbus transport

Package include order is intentional:

1. `oq_common`
2. `oq_supervisory_controlmode`
3. `oq_thermal_limits`
4. `oq_heating_strategy`
5. `oq_cooling_control`
6. `oq_heating_curve_control`
7. `oq_power_house_control`
8. `oq_heat_control`
9. `oq_thermal_actuator`
10. `oq_flow_control`
11. `oq_flow_autotune`
12. `oq_boiler_control`
13. `oq_energy`
14. `oq_cic`
15. `oq_ha_inputs`
16. `oq_local_sensors`
17. `oq_sensor_sources`
18. `oq_ot_slave`
19. `oq_debug_testing`
20. `oq_webserver`
21. `oq_HP_io` (HP1 always; HP2 only on Duo)

This order mirrors data dependencies and ownership boundaries.

## 2. Ownership Model

OpenQuatt follows strict subsystem ownership:

- **Control Mode state machine**: `oq_supervisory_controlmode`
- **Shared heating strategy contract (`oq_heat_mode_code`, `oq_strategy_*`)**: `oq_heating_strategy`
- **Heating-curve demand and dispatch**: `oq_heating_curve_control`
- **Power House demand and dispatch**: `oq_power_house_control`
- **Cooling demand and dispatch**: `oq_cooling_control`
- **Compressor level allocation**: `oq_heat_control`
- **Safe HP mode/level writes**: `oq_thermal_actuator`
- **Pump iPWM regulation**: `oq_flow_control`
- **Boiler relay control**: `oq_boiler_control`
- **External feed ingest**: `oq_cic`
- **External HA proxy ingest**: `oq_ha_inputs`
- **Local DS18B20 ingest**: `oq_local_sensors`
- **Source selection and selected-source synthesis**: `oq_sensor_sources`
- **Shared runtime services and service entities**: `oq_common`
- **Manual debug/testing probes**: `oq_debug_testing`

This prevents hidden control coupling and keeps debugging deterministic.

## 3. Core Runtime Loops

| Subsystem | Interval | Purpose |
|---|---:|---|
| Supervisory | `${oq_supervisory_loop_s}` (default 5s) | Mode decisions, flow interlock, frost logic, power-cap safety net |
| Strategy manager | `${oq_strategy_loop_s}` (default 5s) | Active strategy selection plus shared `oq_strategy_*` contract state |
| Heating curve | `${oq_strategy_loop_s}` plus `${oq_heat_loop_tick_s}` | Curve target generation, PID demand, and curve dispatch |
| Power House | `${oq_heat_loop_tick_s}` with effective cadence `${oq_heat_loop_powerhouse_s}` | Power model, filtered demand, and Power House dispatch |
| Cooling | `${oq_heat_loop_tick_s}` | Cooling target, PI demand, and cooling dispatch |
| Heat allocation | Tick `${oq_heat_loop_tick_s}` (default 5s), effective cadence `${oq_heat_loop_curve_s}` (Curve) / `${oq_heat_loop_powerhouse_s}` (Power House) | Shared post-dispatch shaping and actuator handoff |
| Flow control | `${oq_flow_loop_s}` (default 5s) | Pump iPWM control (AUTO/MANUAL/FROST/autotune override) |
| Boiler control | `${oq_boiler_loop_s}` (default 5s) | CM3 gating under the shared water-temperature guardrail |
| CIC polling tick | `${cic_poll_tick_ms}` (default 5s) | Poll scheduler, stale detection, feed invalidation |

## 4. Data Pipeline

### 4.1 Input layer

- HP telemetry and status from `oq_HP_io` (Modbus registers)
- CIC cloud feed from `oq_cic`
- Home Assistant proxy inputs from `oq_ha_inputs`
- Local DS18B20 from `oq_local_sensors`

### 4.2 Source abstraction layer

`oq_sensor_sources` produces selected control inputs:

- `water_supply_temp_selected`
- `flow_rate_selected`
- `outside_temp_selected`
- `room_temp_selected`
- `room_setpoint_selected`

Runtime selectors decide per signal whether selected values come from local, CIC, or HA-input sources.

### 4.3 Demand layer

Strategy packages compute:

- `oq_demand_raw` (`0..20`) for the selected heating strategy
- `oq_cooling_demand_raw` (`0..20`) for cooling
- explicit `oq_strategy_*` status for downstream diagnostics and supervisory logic

### 4.4 Allocation layer

`oq_heat_control` computes:

- `oq_demand_filtered`
- HP level requests and applied levels
- `oq_P_hp_cap_w` and `oq_P_deficit_w`

### 4.5 Supervisory and safety layer

`oq_supervisory_controlmode` resolves:

- `oq_control_mode` / `oq_control_mode_code`
- low-flow fault timing and state
- power cap factor (`oq_power_cap_f`)
- silent window state

### 4.6 Actuation layer

- Compressor level writes via HP select entities
- Pump iPWM writes to HP1 (and HP2 on Duo control paths)
- Boiler relay writes via GPIO output

### 4.7 Telemetry and energy layer

`oq_energy` derives:

- electrical energy daily/total
- heat pump thermal energy daily/total
- boiler thermal energy daily/total
- system thermal energy daily/total
- daily heat pump COP metric

### 4.8 Service and diagnostics layer

`oq_common`, `oq_debug_testing`, and `oq_heat_control` provide:

- firmware update entities, runtime update-channel select, and manual check trigger
- runtime logger level controls
- one-shot Modbus register read tools (HP1 always; HP2 only surfaced on Duo)
- runtime balancing service entities from heat control (`Runtime lead HP`, runtime counter reset)

## 5. Heating Strategy Mechanics

### Power House mode

Computes requested power from:

- outdoor temperature model (`Tc`, `T0`, `Pr`)
- room error (`room_setpoint - room_temp`) with deadband
- response profile plus rise/fall times scaled to rated house power (`Pr`)

Then maps requested power to demand scale `0..20`.

Power House stability guards in supervisory:

- short start confirmation before a new Power House heating request may leave idle
- dynamic low-load thresholds from performance map level-1 thermal power (`pmin/off/on`)
- last-known-good dynamic thresholds across short telemetry dropouts
- internal fallback low-load OFF/ON thresholds when dynamic input is unavailable
- low-load heat-request latch (OFF/ON hysteresis on `P_req`)
- temporary CM2 re-entry block after CM2 idle-exit trip
- CM2 startup-grace and high-load guard on idle-exit path
- shared water-temperature limiter on effective `P_req` using `water_supply_temp_selected`
- per-compressor minimum runtime once a compressor has started (user-tunable, lower bound `300 s`)

### Water Temperature Control mode

Uses:

- heating-curve interpolation to derive supply target
- PID climate loop to track supply temperature
- PID output mapped to demand `0..20` with phased output behavior (`HEAT`/`COAST`/`OFF`)

When PID SP/PV is invalid, demand falls back to 0 and integral is reset.

Heating-curve stability guards around zero-demand edge:

- profile-based outside-temperature smoothing and target quantization
- start/stop gating with OFF-confirmation and low-PID requirement
- near-target `COAST` phase (low modulation instead of immediate drop to `0`)
- room-temperature coupling trims supply target when room drifts warm
- target clamp at `Maximum water temperature`
- explicit per-HP slew-rate limiting with slower up and faster down behavior
- in heating-curve mode: single-HP-first allocation with dual-enable hysteresis and sequential HP step changes

## 6. Allocation and Optimization Mechanics

`oq_heat_control` enforces, in order:

1. demand filter and clamp
2. power cap clamp (`oq_power_cap_f`)
3. Control Mode gating (CM2/CM3 only)
4. strategy-specific level logic
5. allowed-level switch constraints
6. min-runtime stop blocking (all strategies)
7. write-on-change application and runtime counters

Demand filter behavior is asymmetric:

- downward path follows demand immediately
- upward path is rate-limited by runtime control `Demand filter ramp up` (step/min, Power House path)

Power House duo dispatch works in simple steps:

- compare the best valid single-HP and dual-HP candidates separately
- prefer the topology with the lower electrical input by default
- allow a less-efficient topology only when it has a clear heat-match advantage
- keep the current combination unless a switch gives clear heat or power benefit
- after a recent single<->duo change, keep the current topology a bit longer if the alternative gives only a small advantage
- if two single-HP options are equally good, choose the runtime lead HP
- defrost derating now follows the real `4-Way valve` phase, and extra compensation is only added if the chosen combination would otherwise still underdeliver

## 7. Flow Control Mechanics

Flow control execution priority:

1. CM0 early return
2. autotune override (CM1 only)
3. manual/frost fixed iPWM
4. AUTO PI path

Key behaviors:

- startup hold phase with integrator freeze
- setpoint ramping
- asymmetric action limits
- validity-based failsafe (`iPWM=850`)
- stable-flow tracking for `last_good_pwm`

## 8. Safety Model

Safety is distributed but coordinated:

- flow safety and CM gating in supervisory
- compressor-zero enforcement outside CM2/CM3 in heat control
- shared water-temperature limiter/trip across heating strategy, heat control, and boiler control
- stale feed invalidation in CIC ingest
- conservative fallback on invalid numeric inputs

## 9. Hardware Profiles and Pin Strategy

Hardware profile substitutions are split into dedicated files:

- `openquatt/profiles/oq_substitutions_waveshare.yaml` ([Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm))
- `openquatt/profiles/oq_substitutions_heatpump_listener.yaml` ([Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/))

Shared non-hardware constants are in `openquatt/oq_substitutions_common.yaml`.

Compile-time profile selection is done by choosing the firmware entrypoint:

- `openquatt_duo_waveshare.yaml`
- `openquatt_duo_heatpump_listener.yaml`
- `openquatt_single_waveshare.yaml`
- `openquatt_single_heatpump_listener.yaml`

## 10. UI and Observability Organization

`oq_webserver.yaml` defines stable sorting groups used across packages:

- Overview, Control, Temperatures, Flow & Pump, Performance, Boiler, CIC
- HP1, HP2
- Tuning groups
- Diagnostics groups
- Debug and testing groups surfaced in the dedicated dashboard tab (`oq_debug_testing.yaml` exposes the HP2 debug probe only on Duo)

This keeps ESPHome web UI and Home Assistant mapping coherent.

## 11. Engineering Notes

- Keep ownership boundaries intact when refactoring.
- Preserve entity IDs unless migration is documented.
- Keep loop intervals and hysteresis semantics stable unless retuning intentionally.
- Always run config + compile validation after structural changes.
