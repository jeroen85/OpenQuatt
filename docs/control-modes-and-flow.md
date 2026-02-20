# Control Modes and Flow

This document focuses on runtime behavior: Control Mode transitions, flow behavior, and mode precedence.

## Table of Contents

- [1. Conceptual Layers](#1-conceptual-layers)
- [2. Control Mode (`CM*`)](#2-control-mode-cm)
- [3. Supervisory Override](#3-supervisory-override)
- [4. Power Cap Safety Net](#4-power-cap-safety-net)
- [5. Heating Strategy Modes](#5-heating-strategy-modes)
- [6. Flow Mode](#6-flow-mode)
- [7. Flow Execution Precedence](#7-flow-execution-precedence)
- [8. AUTO PI Flow Behavior](#8-auto-pi-flow-behavior)
- [9. Source Selection and Mode Behavior](#9-source-selection-and-mode-behavior)
- [10. Practical Mode Matrix](#10-practical-mode-matrix)
- [11. Common Misinterpretations](#11-common-misinterpretations)
- [12. Validation Checklist for Mode Logic](#12-validation-checklist-for-mode-logic)

## 1. Conceptual Layers

OpenQuatt has three independent but connected mode concepts:

1. **Control Mode (`CM*`)**: global system state machine.
2. **Heating Strategy mode**: how demand is generated.
3. **Flow Mode**: how pump iPWM is generated.

## 2. Control Mode (`CM*`)

Defined and owned by `oq_supervisory_controlmode`.

| Control Mode | Meaning | Typical outcome |
|---|---|---|
| `CM0` | Standby | No active heating control; pump stop policy owned by supervisory |
| `CM1` | Pre/post-flow hold | Transitional state to protect hydraulics and sequencing |
| `CM2` | Heat pump heating | HP-only heating allowed |
| `CM3` | Heat pump + boiler assist | Boiler assist allowed due to sustained deficit |
| `CM98` | Frost protection | Frost circulation behavior |

### 2.1 Base target logic

Supervisory derives a base target from:

- demand presence (`oq_demand_filtered > 0`)
- frost condition
- low-flow status

Then applies CM1 timing windows and override handling.

### 2.2 Flow interlock impact on Control Mode

If heating is requested but selected flow is low/invalid long enough:

- low-flow fault becomes active
- CM2 progression is blocked
- system is held in safe transitional behavior (CM1 path)

### 2.3 CM2/CM3 promotion and demotion

Promotion to CM3 is driven by `oq_P_deficit_w` and ON threshold + timer.
Demotion back to CM2 is driven by OFF threshold + timer.
Minimum dwell times avoid rapid toggling.

## 3. Supervisory Override

Runtime entity: `select.openquatt_cm_override`

Options:

- `Auto`
- `Force CM0`
- `Force CM1`
- `Force CM98`

`Force CM98` has an automatic maximum duration (`oq_cm98_diag_max_s`).

## 4. Power Cap Safety Net

Supervisory also maintains `oq_power_cap_f` from measured total input power.

Threshold model:

- soft threshold (`oq_power_soft_w`) with slower cap-down
- peak threshold (`oq_power_peak_w`) with faster cap-down
- recovery threshold (`oq_power_recover_w`) for cap-up

`oq_power_cap_f` is applied in heat allocation before level distribution.

## 5. Heating Strategy Modes

Runtime entity: `select.openquatt_heating_mode`

### 5.1 Power House

- Computes `P_house` from outdoor temperature and house model.
- Applies room correction (`Trsp - Tr`) with deadband.
- Applies ramp constraints.
- Maps to demand `0..20`.

### 5.2 Water Temperature Control (heating curve)

- Builds supply target from curve points.
- Runs PID on selected supply temperature.
- Maps PID output to demand `0..20`.
- Resets integral when SP/PV is invalid.

## 6. Flow Mode

Runtime entity: `select.openquatt_flow_mode`

Options:

- `Flow Setpoint` (AUTO PI)
- `Manual PWM`

Effective flow behavior also depends on Control Mode:

- `CM0`: flow loop returns early and does not own pump writes.
- `CM98`: frost iPWM behavior applies.
- `CM1/CM2/CM3`: manual or PI flow behavior applies.

## 7. Flow Execution Precedence

In `oq_flow_control` the execution order is explicit:

1. CM0 early return
2. autotune override (CM1 only)
3. manual/frost fixed PWM
4. AUTO PI

This prevents ambiguous ownership and hidden side effects.

## 8. AUTO PI Flow Behavior

AUTO PI includes:

- setpoint ramping (up/down rates)
- deadband handling
- integrator with clamp
- startup hold with I-term freeze
- asymmetric control action limits
- failsafe fallback when SP/PV invalid

Failsafe behavior forces a conservative iPWM and resets integrator state.

## 9. Source Selection and Mode Behavior

Control behavior relies on selected source values:

- selected flow (`flow_rate_selected`)
- selected outside temperature (`outside_temp_selected`)
- selected supply temperature (`water_supply_temp_selected`)

These are controlled with three CIC/local source switches.

## 10. Practical Mode Matrix

| Situation | Expected mode behavior |
|---|---|
| Demand = 0, no frost | CM0 |
| Demand rises from idle | CM1 pre-flow then CM2 |
| Sustained low flow during heating | CM1 safe hold path / no unsafe CM2 continuation |
| Sustained deficit in CM2 | CM3 promotion after timers |
| Deficit recovery in CM3 | CM2 demotion after timers |
| Frost condition, no demand | CM98 |

## 11. Common Misinterpretations

- High instantaneous flow does not always mean low-flow fault should immediately clear; timers and hysteresis apply.
- Flow Mode (`AUTO`/`MANUAL`) does not replace Control Mode gating.
- Strategy mode changes demand generation, not ownership of safety gates.

## 12. Validation Checklist for Mode Logic

1. Verify `oq_control_mode` transitions are plausible in logs.
2. Verify `oq_flow_mode` aligns with CM and selected Flow Mode.
3. Verify `oq_power_cap_f` changes only on threshold/timer conditions.
4. Verify `CM override` returns cleanly to `Auto` behavior.
5. Verify low-flow fault timing matches configured thresholds.
