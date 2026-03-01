# Settings Reference

This is the primary settings reference for OpenQuatt.

It separates compile-time firmware constants from runtime-operational entities and explains tuning intent.

## Table of Contents

- [1. Settings Layers](#1-settings-layers)
- [2. Hardware Profile Settings (Compile-Time)](#2-hardware-profile-settings-compile-time)
- [3. Compile-Time Parameter Categories](#3-compile-time-parameter-categories)
- [4. High-Impact Compile-Time Constants](#4-high-impact-compile-time-constants)
- [5. Runtime Control Entities by Domain](#5-runtime-control-entities-by-domain)
- [6. Operational Telemetry Entities (Key)](#6-operational-telemetry-entities-key)
- [7. Tuning Safety Rules](#7-tuning-safety-rules)
- [8. Change Management Recommendations](#8-change-management-recommendations)
- [9. Related Documents](#9-related-documents)

## 1. Settings Layers

### 1.1 Compile-time (firmware constants)

File:

- `openquatt/oq_substitutions_common.yaml`
- `openquatt/profiles/oq_substitutions_waveshare.yaml` or `openquatt/profiles/oq_substitutions_heatpump_listener.yaml`

Characteristics:

- Applied only after compile/flash.
- Best for hardware mapping and structural control constants.
- Good for defaults that should be tracked in version control.

### 1.2 Runtime (live entities)

Files:

- `openquatt.yaml`
- `openquatt/*.yaml`

Characteristics:

- Applied immediately at runtime.
- Best for tuning and diagnostics.
- Should be adjusted carefully and logged.

## 2. Hardware Profile Settings (Compile-Time)

Active profile fields used by firmware:

- `esp_board`
- `esp_flash_size`
- `esp_variant`
- `uart_tx_pin`
- `uart_rx_pin`
- `uart_rts_pin`
- `ds18b20_pin`
- `oq_boiler_relay_pin`

Hardware profile files:

- `openquatt/profiles/oq_substitutions_waveshare.yaml` ([Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm))
- `openquatt/profiles/oq_substitutions_heatpump_listener.yaml` ([Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/))

## 3. Compile-Time Parameter Categories

`oq_substitutions_common.yaml` is grouped into:

1. Core project metadata
2. Supervisory control constants
3. Heating Strategy constants
4. Heat control / optimizer constants
5. Flow control constants
6. Flow autotune constants
7. Boiler constants
8. CIC polling/backoff constants
9. HA input entity mapping
10. HP IO Modbus polling skip constants

## 4. High-Impact Compile-Time Constants

These are typically most relevant for behavior shaping:

- Supervisory power/CM:
  - `oq_power_soft_w`, `oq_power_peak_w`, `oq_power_recover_w`
  - `oq_cm_min_flow_lph`
  - `oq_cm3_promote_s`, `oq_cm3_demote_s`, `oq_cm3_min_run_s`, `oq_cm2_min_run_s`
- Strategy:
  - `oq_strategy_demand_max_f`
  - `oq_temp_guard_delta_c`
- Optimizer:
  - `oq_optimizer_soft_w`
  - `oq_optimizer_penalty_per_w`
  - `oq_optimizer_twohp_penalty`
  - `oq_optimizer_balance_penalty_per_step`
  - `oq_defrost_power_factor`
  - `oq_defrost_comp_min_f`
  - `oq_defrost_comp_boost_steps`
- Flow:
  - `oq_flow_mismatch_threshold_lph`
  - `oq_flow_mismatch_hyst_lph`
  - `oq_flow_kp_min`, `oq_flow_kp_max`
  - `oq_flow_ki_min`, `oq_flow_ki_max`
- Boiler:
  - `oq_boiler_trip_c`, `oq_boiler_reset_c`
- CIC:
  - `cic_backoff_start_ms`, `cic_backoff_max_ms`, `cic_stale_after_ms`, `cic_feed_error_trip_n`
- HA input mapping:
  - `ha_outside_temp_entity_id`
  - `ha_room_setpoint_entity_id`
  - `ha_room_temp_entity_id`

## 5. Runtime Control Entities by Domain

### 5.1 Supervisory and mode control

Key entities:

- `CM Override`
- `Day max level`
- `Silent max level`
- `Silent start time`
- `Silent end time`
- `CM3 deficit ON threshold`
- `CM3 deficit OFF threshold`
- `Low-load OFF fallback`
- `Low-load ON fallback`
- `Low-load CM2 re-entry block`

Intent:

- define operational level ceilings
- configure day/night behavior
- shape CM2 <-> CM3 escalation behavior

### 5.2 Heating Strategy

Key entities:

- `Heating Control Mode`
- `House cold temp`
- `Rated maximum house power`
- `Maximum heating outdoor temperature`
- `Power House Kp (W-K)`
- `Power House deadband`
- `Power House comfort below setpoint`
- `Power House comfort above setpoint`
- `Power House comfort bias base`
- `Power House comfort bias max`
- `Power House comfort bias up`
- `Power House comfort bias down`
- `Power House room error avg tau`
- `Power House ramp up`
- `Power House ramp down`
- `Curve Tsupply @ -20/-10/0/5/10/15°C`
- `Heating Curve Control Profile` (`Comfort` / `Balanced` / `Stable`)
- `Heating Curve PID Kp/Ki/Kd`
- `Curve Fallback Tsupply (No Outside Temp)`

Intent:

- define demand generation function
- control aggressiveness and stability
- tune adaptive warm-bias behavior around room setpoint

Behavior summary (Power House comfort loop):

- `Power House comfort bias` is adaptive and shifts the effective room target:
  `effective_target = room_setpoint + comfort_bias`.
- `comfort_bias` adapts from filtered room error (`Power House room error avg`):
  - ramps up when average room error is sufficiently cold.
  - ramps down when average room error is sufficiently warm.
- `comfort_bias` is clamped between:
  - `Power House comfort bias base` (minimum warm shift)
  - `Power House comfort bias max` (maximum warm shift)
- Asymmetric comfort window is built around `effective_target`:
  - lower edge: `effective_target - comfort below setpoint`
  - upper edge (final): `min(effective_target + comfort above setpoint, room_setpoint + comfort bias max)`
- `Power House deadband` then suppresses tiny corrections around these edges.

How the three comfort knobs work together:

- `Power House comfort bias base`: minimum upward shift that is always active.
  If this is `0.1`, the controller never targets below `setpoint + 0.1`.
- `Power House comfort bias max`: maximum upward shift, and also the hard cap
  for the warm-side correction edge (`setpoint + bias max`).
- `Power House comfort above setpoint`: extra warm margin above `effective_target`
  before negative room correction starts, but still subject to the cap above.

Example:

- setpoint `20.0`, bias base `0.1`, bias max `0.4`, comfort above `0.5`
- `effective_target` can move between `20.1` and `20.4`
- warm-side edge is:
  `min(effective_target + 0.5, 20.4)` and therefore never above `20.4`
- practical effect: warm correction may start relatively late; if this feels
  too warm, reduce `comfort above setpoint` and/or lower `bias base` and
  `bias max`.

### 5.3 Heat allocation

Key entities:

- `Minimum runtime`
- `Demand filter ramp up`
- `Single HP Assist ON Level`
- `Single HP Assist ON Hold`
- `Single HP Assist OFF Hold`
- HP level allow switches (`HP1/HP2 Allowed level 1..10`)

Intent:

- control how demand is split and persisted
- avoid short-cycling
- keep dual-HP assist in low-demand band predictable (OFF level is derived as `ON - 2`)
- optionally restrict level availability

### 5.4 Flow and pump

Key entities:

- `Flow Setpoint`
- `Flow Control Mode`
- `Manual iPWM`
- `Frost Circulation iPWM`
- `Flow AUTO start iPWM`
- `Flow PI Kp`
- `Flow PI Ki`

Intent:

- regulate hydraulic behavior and pump output stability
- on AUTO entry, `last_good_pwm` has priority; `Flow AUTO start iPWM` is fallback when no valid `last_good_pwm` is available
- monitor mismatch with compile-time thresholds (`oq_flow_mismatch_threshold_lph`, `oq_flow_mismatch_hyst_lph`)

### 5.5 Flow autotune

Key entities:

- `Flow Autotune Enable`
- `Flow Autotune Start`
- `Flow Autotune Abort`
- `Apply Flow Autotune Kp-Ki`
- `Flow Autotune u_step (iPWM)`
- `Flow Autotune max duration (s)`
- `Flow Autotune Kp suggested`
- `Flow Autotune Ki suggested`
- `Flow Autotune status`

Intent:

- derive PI suggestions from controlled open-loop step response

### 5.6 CIC and source selection

Key entities:

- `CIC - Enable polling`
- `CIC - Feed URL`
- `CIC - JSON Feed OK`
- `CIC - Data stale`
- `CIC - Last success age`
- `CIC - Polling interval`
- `Water Supply Source` (`Local` / `CIC`)
- `Flow Source` (`Outdoor unit` / `CIC`)
- `Outside Temperature Source` (`Outdoor unit` / `HA input`)
- `Room Temperature Source` (`CIC` / `HA input`)
- `Room Setpoint Source` (`CIC` / `HA input`)

Intent:

- control cloud ingest and source arbitration for control inputs

### 5.7 HA proxy ingest (phase 1)

Key entities:

- `input_text.openquatt_source_outdoor_temperature` (HA side)
- `input_text.openquatt_source_room_setpoint` (HA side)
- `input_text.openquatt_source_room_temperature` (HA side)
- `HA - Outside Temperature`
- `HA - Thermostat Setpoint`
- `HA - Thermostat Room Temperature`

Intent:

- ingest stable Home Assistant proxy signals in ESPHome
- support runtime room/outside source selection via HA-backed values
- optional reference package: `docs/dashboard/openquatt_ha_dynamic_sources_package.yaml`

### 5.8 Service and diagnostics utilities

Key entities:

- `Firmware Update`
- `Check Firmware Updates`
- `Debug Level`
- `Debug Level Modbus`
- `Runtime lead HP`
- `Reset Runtime Counters (HP1+HP2)`
- `Debug Modbus register`
- `Debug Read HP1 register`
- `Debug Read HP2 register`

Intent:

- provide service operations and low-level diagnostics without changing control ownership

## 6. Operational Telemetry Entities (Key)

### Demand and strategy telemetry

- `Power House – P_house`
- `Power House – P_req`
- `Demand raw`
- `Demand filtered`
- `Demand Curve (raw)`
- `Low-load dynamic thresholds`
- `Heat-enable state (shadow)`
- `CM2 idle-exit reason`
- `CM2 re-entry block active`
- `Power House effective room target`
- `Power House comfort bias`
- `Power House room error avg`

### Flow telemetry

- `Flow average (local)`
- `Flow average (Selected)`
- `Flow mismatch (HP1 vs HP2)`
- `Flow Mode`
- `Flow Debug State`

### Thermal and power telemetry

- `Total Power Input`
- `Total Heat Power`
- `Total COP`
- `HP capacity (W)`
- `HP deficit (W)`

### External HA input telemetry

- `HA - Outside Temperature`
- `HA - Thermostat Setpoint`
- `HA - Thermostat Room Temperature`

### Energy telemetry

- `Electrical Energy Daily/Total`
- `HeatPump Thermal Energy Daily/Total`
- `Boiler Thermal Energy Daily/Total`
- `System Thermal Energy Daily/Total`
- `HeatPump COP Daily`

## 7. Tuning Safety Rules

- Keep `CM override` on `Auto` except explicit tests.
- Do not tune flow PI and strategy parameters simultaneously.
- Avoid lowering flow safety thresholds without hydraulic evidence.
- Keep ON/OFF hysteresis pairs separated enough to prevent chatter.
- Validate with trends before and after each change.

## 8. Change Management Recommendations

For every change, record:

- parameter
- old value
- new value
- reason
- observed impact after 1h and 24h

For compile-time constant changes, also record:

- firmware build hash or tag
- flash timestamp
- rollback baseline

## 9. Related Documents

- [Getting Started](getting-started.md)
- [System Overview](system-overview.md)
- [Control Modes and Flow](control-modes-and-flow.md)
- [Tuning and Troubleshooting](tuning-and-troubleshooting.md)
- [Functional Specification](specifications/functional-specification.md)
- [Technical Specification](specifications/technical-specification.md)
