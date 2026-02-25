# Tuning and Troubleshooting

This guide provides a practical workflow for stable tuning and fast fault isolation.

## Table of Contents

- [1. Tuning Philosophy](#1-tuning-philosophy)
- [2. Recommended Tuning Order](#2-recommended-tuning-order)
- [3. Pre-Tuning Baseline Capture](#3-pre-tuning-baseline-capture)
- [4. Heating Strategy Tuning](#4-heating-strategy-tuning)
- [5. Heat Allocation Tuning](#5-heat-allocation-tuning)
- [6. Flow and Pump Tuning](#6-flow-and-pump-tuning)
- [7. Supervisory and Silent Window Tuning](#7-supervisory-and-silent-window-tuning)
- [8. CIC Feed Troubleshooting](#8-cic-feed-troubleshooting)
- [9. Flow Safety Troubleshooting](#9-flow-safety-troubleshooting)
- [10. Symptom -> Action Map](#10-symptom---action-map)
- [11. Safe Change Logging Template](#11-safe-change-logging-template)
- [12. Final Validation Before “Done”](#12-final-validation-before-done)

## 1. Tuning Philosophy

- Tune in small steps.
- Change one domain at a time.
- Validate behavior over sufficient runtime (preferably >= 24h for comfort/efficiency changes).
- Keep safety thresholds conservative unless you have measured evidence.

## 2. Recommended Tuning Order

1. **Signal and source sanity**
2. **Heating Strategy behavior**
3. **Heat allocation and assist thresholds**
4. **Flow control PI behavior**
5. **Supervisory limits and silent windows**
6. **Energy trend validation**

## 3. Pre-Tuning Baseline Capture

Before changing anything, record:

- `Control Mode (Label)`
- `Flow average (Selected)`
- `Power House – P_house`
- `Power House – P_req`
- `Demand raw`
- `Demand filtered`
- `Low-load dynamic thresholds`
- `CM2 idle-exit reason`
- `CM2 re-entry block active`
- `Total Power Input`
- `Total Heat Power`
- `Total COP`
- `HP capacity (W)`
- `HP deficit (W)`

Also note source switch states:

- `Use CIC JSON Water Supply Temp`
- `Use CIC JSON Flow Rate`
- `Use CIC JSON Outside Temp`

## 4. Heating Strategy Tuning

### 4.1 Power House path

Primary knobs:

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

What to watch:

- `P_house` vs `P_req`
- `Demand raw` and `Demand filtered`
- CM2/CM3 stability
- `Low-load dynamic thresholds`
- `CM2 idle-exit reason`
- `CM2 re-entry block active`
- `Power House effective room target`
- `Power House comfort bias`
- `Power House room error avg`

Typical adjustments:

- Too aggressive demand swings: increase deadband or reduce ramp-up.
- Slow recovery after setback: increase ramp-up or Kp.
- Overreaction around setpoint: reduce Kp or increase deadband.
- Persistent undershoot with stable low-load behavior: raise `comfort bias base` or `comfort bias max`.
- Too warm for prolonged periods: reduce `comfort bias base` or increase `comfort bias down`.

Low-load anti-flip controls (Power House):

- `Low-load OFF fallback` and `Low-load ON fallback` are fallback thresholds when dynamic values are unavailable.
- `Low-load CM2 re-entry block` defines how long CM2 re-entry is blocked after an idle-exit trip.
- Dynamic thresholds (`pmin/off/on`) are clamped; this is expected and protects portability across installations.

Adaptive comfort-bias guardrail:

- Upper room correction edge is capped at `setpoint + comfort bias max`, so the configured max bias is the hard overshoot ceiling for the room loop.

### 4.2 Heating-curve path

Primary knobs:

- curve setpoints (`Curve Tsupply @ ...`)
- `Heating Curve PID Kp/Ki/Kd`
- `Curve Fallback Tsupply`

What to watch:

- `Heating Curve Supply Target`
- selected supply temperature
- `Demand Curve (raw)`
- `Demand raw` and `Demand filtered` near zero edge

Low-demand stabilization controls (Heating Curve):

- `Curve Temp Deadband` reduces hunting around `Supply target`.
- `Curve Demand Off Hold` delays final `1 -> 0` demand drop to avoid CM1/CM2 flip.

## 5. Heat Allocation Tuning

Primary knobs:

- `Minimum runtime`
- `Demand filter ramp up`
- `Single HP Assist ON Deficit`
- `Single HP Assist OFF Deficit`
- `Single HP Assist ON Hold`
- `Single HP Assist OFF Hold`

What to watch:

- HP1/HP2 compressor levels
- `HP capacity (W)` and `HP deficit (W)`
- short-cycling behavior

Use allowed level switches if you need temporary level band limitations per HP.

## 6. Flow and Pump Tuning

Primary knobs:

- `Flow Setpoint`
- `Flow PI Kp`
- `Flow PI Ki`
- `Flow AUTO start iPWM`

Compile-time flow mismatch guardrails:

- `oq_flow_mismatch_threshold_lph`
- `oq_flow_mismatch_hyst_lph`

These are firmware constants in `openquatt/oq_substitutions_common.yaml` and require compile/flash after changes.

What to watch:

- `Flow average (Selected)` vs setpoint
- `Flow mismatch (HP1 vs HP2)`
- `Flow Mode`
- `Flow Debug State`

Flow autotune workflow (controlled):

1. Enable autotune.
2. Start autotune under suitable conditions.
3. Review suggested Kp/Ki.
4. Apply suggestions only if behavior and context are valid.

## 7. Supervisory and Silent Window Tuning

Primary knobs:

- `Day max level`
- `Silent max level`
- `Silent start time`
- `Silent end time`
- `CM3 deficit ON/OFF thresholds`

What to watch:

- `Control Mode (Label)`
- `Silent active`
- cap behavior (`Power cap demand`, step-based cap)

## 8. CIC Feed Troubleshooting

Key entities:

- `CIC - JSON Feed OK`
- `CIC - Data stale`
- `CIC - Last success age`
- `CIC - Polling interval`
- `CIC - Feed URL`

Common patterns:

- `Feed OK = Off` + rising polling interval: repeated failures with backoff.
- `Data stale = On`: selected CIC values may be invalidated to NaN/false.
- Values present in CIC but not used in control: source switches likely still set to local.

## 9. Flow Safety Troubleshooting

If behavior looks contradictory:

- Check the selected flow source first.
- Check low-flow fault timers/hysteresis, not only current flow value.
- Check whether heating demand was active when low-flow state occurred.
- Use the `Debug & Testing` dashboard view for one-shot Modbus validation if HP flow telemetry looks inconsistent.

Remember: fault state logic is timer-based and mode-context-dependent.

## 10. Symptom -> Action Map

| Symptom | First checks | Typical corrective action |
|---|---|---|
| Demand jumps too hard | `Demand raw`, strategy params | increase deadband / lower ramp-up |
| CM1<->CM2 flips at low load | `Low-load dynamic thresholds`, `CM2 idle-exit reason`, `CM2 re-entry block active` | increase re-entry block or retune Power House ramp/deadband; verify `P_req` stays structurally below `off` when no sustained heat is needed |
| Long periods below room setpoint | `Power House effective room target`, `Power House comfort bias`, `Power House room error avg` | increase comfort bias base/max, or lower deadband if correction starts too late |
| Curve mode drops to 0 demand too quickly | `Curve Temp Deadband`, `Curve Demand Off Hold`, `Supply target` vs actual | increase deadband slightly or extend off-hold |
| CM3 toggles often | deficit thresholds/timers | widen ON/OFF gap, increase hold times |
| Flow oscillates | flow PI and setpoint | reduce Kp/Ki, verify hydraulics |
| COP looks implausible | power and heat inputs | validate source values and power integration |
| CIC-dependent values unstable | feed health entities | fix URL/feed source, review backoff/stale behavior |

## 11. Safe Change Logging Template

Use a simple log per change:

- Date/time
- Parameter changed
- Old value -> new value
- Reason
- 1h outcome
- 24h outcome
- Keep/revert decision

## 12. Final Validation Before “Done”

1. No persistent safety faults under normal operation.
2. No mode chatter beyond expected transitions.
3. Flow tracks target with acceptable settling.
4. Energy counters increase plausibly.
5. Dashboard reflects intended source and mode states.
