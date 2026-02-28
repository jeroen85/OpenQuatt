# Home Assistant Dashboard

Dashboard source:

- `docs/dashboard/openquatt_ha_dashboard_nl.yaml`
- `docs/dashboard/openquatt_ha_dashboard_en.yaml`
- `docs/dashboard/README.md`

The dashboard is designed as a practical operations console with the **Sections** layout.

## Table of Contents

- [1. Current View Set](#1-current-view-set)
- [2. Design Rules Used](#2-design-rules-used)
- [3. Overview View (Overzicht)](#3-overview-view-overzicht)
- [4. Flow View](#4-flow-view)
- [5. Warmtecontrol View](#5-warmtecontrol-view)
- [6. HPs View](#6-hps-view)
- [7. Sensor Configuration View](#7-sensor-configuration-view)
- [8. Energy View](#8-energy-view)
- [9. Advanced Settings View](#9-advanced-settings-view)
- [10. Debug & Testing View](#10-debug--testing-view)
- [11. Diagnostics View](#11-diagnostics-view)
- [12. Practical Maintenance Checklist](#12-practical-maintenance-checklist)

## 1. Current View Set

| View | Path | Primary purpose |
|---|---|---|
| Overzicht | `overzicht` | Daily status, quick controls, and top-level trends |
| Flow | `flow` | Hydraulic status, flow control, pump tuning |
| Warmtecontrol | `warmtecontrol` | Demand and heat allocation behavior |
| HPs | `HPs` | HP1/HP2 deep diagnostics and visualization |
| Sensor Configuration | `sensor-configuration` | Source setup (CIC/HA/selectors) plus per-signal diagnostics and feedback |
| Energy | `energy` | Daily/cumulative energy and efficiency metrics |
| Advanced settings | `advanced-settings` | Expert tuning parameters with explanations |
| Debug & Testing | `debug-testing` | Service utilities, runtime balancing checks, and manual probe tools |
| Diagnostics | `diagnostics` | Controller and firmware diagnostics |

## 2. Design Rules Used

- Keep daily-operation controls close to top-level status.
- Separate advanced tuning from fast operational controls.
- Use tile cards for quick scanning and trend snippets.
- Use markdown details blocks for contextual explanation.
- Keep source controls grouped in the Sensor Configuration tab so source origin is always explicit.

## 3. Overview View (Overzicht)

Contains four practical clusters:

1. **Live prestaties**
   - selected flow
   - total electrical power
   - total thermal power
   - total COP
   - selected outdoor temperature
   - selected water supply temperature
2. **Supervisory status**
   - Control Mode
   - Flow Mode
   - Heating Strategy
   - boiler active
   - silent active
3. **Thermostaat**
   - selected room setpoint
   - selected room temperature
4. **Dagelijkse bediening**
   - CM override
   - day/silent level caps
   - silent start/end time

Plus a 24h performance chart section.

## 4. Flow View

Expected content pattern:

- flow status tiles
- mode and setpoint controls
- PI controls and mismatch diagnostics
- source and measurement trends
- explanatory markdown for safe usage

Operational rule:

- Keep flow diagnostics and flow control tuning in this tab to avoid mixing with Heating Strategy tuning.

## 5. Warmtecontrol View

Expected content pattern:

- compact explanation block ("Heat control in 30 seconds")
- inline heating mode control tile
- inline heating-curve control profile tile
- core KPI tile grid (`P_house`, `P_req`, `HP capacity`, `HP deficit`)
- demand and cap tile row (`Demand raw`, `Demand filtered`, `Power cap demand`)
- capacity gauges with visual deficit severity
- trend charts for demand/power behavior
- heat allocation ramp control (`Demand filter ramp up`)

Operational rule:

- For fast diagnosis, check in order: mode source -> `P_req` vs `P_house` -> `Deficit` and `Power cap demand` (step cap).

## 6. HPs View

Expected content pattern:

- HP1 and HP2 picture-elements cards
- key operating telemetry per unit
- `Active Failures List` visibility per HP

Operational rule:

- Use this tab for unit-specific diagnostics and balancing checks.

## 7. Sensor Configuration View

Expected content pattern:

- configuration blocks:
  - HA source mapping (`input_text` selectors)
  - CIC feed settings
- per-signal diagnostics cards for:
  - water supply
  - flow
  - outside temperature
  - room temperature
  - room setpoint
- each signal card includes:
  - source selector
  - selected value
  - both source values
  - validity/feed feedback

Optional helper package:

- `docs/dashboard/openquatt_ha_dynamic_sources_package.yaml` provides runtime entity-id input fields and stable proxy sensors.

Operational rule:

- Use this tab first when source selection, mapping, or selected values look wrong.

## 8. Energy View

Expected content pattern:

- daily + cumulative counters for:
  - heat pump thermal energy
  - boiler thermal energy
  - system thermal energy
  - electrical energy
- daily COP-style KPI
- trend charts for historical interpretation

Operational rule:

- Validate tuning changes with this tab over full day windows.

## 9. Advanced Settings View

Expected content pattern:

- grouped parameter sections
- explanatory markdown per section
- expert controls (strategy, flow PI, limits, allocation behavior)

Operational rule:

- Treat this as engineering configuration, not a daily operations tab.

## 10. Debug & Testing View

Expected content pattern:

- runtime balancing aids (`Runtime lead HP`, `Reset Runtime Counters (HP1+HP2)`)
- manual Modbus probe controls (`Debug Modbus register`, `Debug Read HP1 register`, `Debug Read HP2 register`)
- platform service utilities (`Firmware Update`, `Check Firmware Updates`)
- runtime logger controls (`Debug Level`, `Debug Level Modbus`)

Operational rule:

- Use this tab for guided diagnostics and service actions, not for daily control tuning.

## 11. Diagnostics View

Expected content pattern:

- debug-oriented status entities
- low-level inspection cards that are too noisy for main operations
- Power House low-load diagnostics:
  - `Low-load dynamic thresholds`
  - `CM2 idle-exit reason`
  - `CM2 re-entry block active`
  - `Low-load OFF fallback`, `Low-load ON fallback`, `Low-load CM2 re-entry block`
- migration diagnostics:
  - `Heat-enable state (shadow)` (`IDLE/PREHEAT/HEATING/POSTFLOW/LOCKOUT`)

Operational rule:

- Prefer this tab when symptoms are ambiguous and source path must be proven.

## 12. Practical Maintenance Checklist

When editing the dashboard YAML:

1. Keep entity IDs aligned with current codebase names.
2. Keep source-selection controls centralized in Sensor Configuration.
3. Avoid duplicate controls across tabs unless intentional.
4. Keep warning-prone entities out of primary overview where possible.
5. Preserve section headings and explanation style consistency.
