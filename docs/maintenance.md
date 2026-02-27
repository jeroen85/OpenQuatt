# OpenQuatt Maintenance Guide

## Table of Contents

- [Purpose](#purpose)
- [Refactor Rules](#refactor-rules)
- [Package Structure Convention](#package-structure-convention)
- [Naming Conventions](#naming-conventions)
- [Comment Policy](#comment-policy)
- [Validation Checklist After Refactor](#validation-checklist-after-refactor)

## Purpose

This guide keeps the configuration maintainable and predictable while preserving runtime behavior.

## Refactor Rules

- Do not change control behavior during structural cleanup.
- Keep ownership boundaries explicit:
  - `oq_supervisory_controlmode`: Control Mode/state machine, caps, low-flow timers/fault state
  - `oq_heating_strategy`: demand source strategy and mapping to `oq_demand_raw`
  - `oq_heat_control`: demand filtering and compressor level allocation/application
  - `oq_flow_control`: pump/flow PI control and flow mode execution
  - `oq_flow_autotune`: flow plant identification and PI gain suggestions
  - `oq_boiler_control`: boiler relay gate and max-temp safety
  - `oq_energy`: electrical/thermal energy integration (daily + total)
  - `oq_cic`: external CIC JSON feed polling/parsing/publish
  - `oq_ha_inputs`: fixed Home Assistant proxy sensor ingest
  - `oq_local_sensors`: local DS18B20 ingest
  - `oq_sensor_sources`: runtime source selectors and selected-source synthesis (`*_selected`)
  - `oq_webserver`: grouping/exposure for ESPHome web UI
  - `oq_HP_io`: per-HP Modbus IO entities and actuators
- Keep one change type per batch: formatting, comments, or logic.
- Preserve package include order in `openquatt/oq_packages.yaml` unless dependencies are intentionally redesigned.
- If you add/remove packages or user-facing entities, update the affected docs in the same PR:
  - `README.md`
  - `docs/system-overview.md`
  - `docs/settings-reference.md`
  - `docs/home-assistant-dashboard.md`
  - `docs/specifications/technical-specification.md`

## Package Structure Convention

Use a consistent order per package where applicable:

1. `substitutions`
2. `globals`
3. Runtime controls (`number`, `select`, `switch`, `button`)
4. Signals (`sensor`, `binary_sensor`, `text_sensor`)
5. `script`
6. `interval`

## Naming Conventions

- IDs:
  - `oq_*` for most system-owned controls/states
  - `hp1_*` / `hp2_*` for per-unit entities
  - `*_selected` for canonical inputs used by control logic
  - `*_cic` for CIC cloud-fed source values
  - `*_ha` for Home Assistant proxy source values
  - `*_esp` for direct controller-local source values
- Use explicit suffixes:
  - `_ms`, `_s`, `_min` for time
  - `_w`, `_c`, `_lph` for units
  - `_mode`, `_state`, `_active` for status flags

## Comment Policy

- Document intent and safety rationale.
- Avoid comments that restate obvious code.
- Keep pin and threshold comments synchronized with implementation.

## Validation Checklist After Refactor

1. `esphome config openquatt.yaml`
2. `esphome compile openquatt.yaml`
3. Verify critical IDs still exist and update:
   - `oq_control_mode`
   - `oq_demand_raw`
   - `flow_rate_selected`
   - `outside_temp_selected`
   - `water_supply_temp_selected`
   - `boiler_relay`
   - `hp1_set_working_mode`, `hp2_set_working_mode`
4. Verify dashboard entity references are still valid.
5. Run `./scripts/validate_local.sh` for combined config+compile validation.
