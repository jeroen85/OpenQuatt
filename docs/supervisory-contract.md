# Supervisory Contract

This document captures the phase-4 supervisory contract for
`openquatt/oq_supervisory_controlmode.yaml`. It documents current behavior
before later refactors move Control Mode logic into smaller C++ helpers.

The goal is not to redesign the state machine in one step. The goal is to make
its inputs, state, outputs, transition reasons and timer semantics explicit so
future extraction can be tested and staged.

## Ownership Boundary

Supervisory is the single owner of Control Mode:

```text
strategy/thermal/cooling/commissioning inputs -> supervisory -> Control Mode + pump policy + diagnostics
```

Supervisory may read strategy, thermal, cooling, flow, HP feedback and
commissioning state. It may publish the active Control Mode, pump on/off policy,
CM0 sticky-pump PWM, silent-mode writes and supervisory diagnostics.

Supervisory must not own compressor request generation. Compressor levels are
selected by the strategy and thermal request chain, then applied by the thermal
actuator. Flow-control owns non-CM0 pump PWM behavior. Commissioning owns task
state inside CM100, but supervisory owns whether CM100 is the active container.

## Control Modes

| Mode | Meaning | Supervisory contract |
|---|---|---|
| `CM0` | idle/standby | No active thermal demand, no frost, no commissioning and no forced holding. CM0 owns pump stop PWM except during sticky circulation or HP-active failsafe. |
| `CM1` | preflow/postflow/holding | Pump-on holding state used before CM2/CM5, after CM2/CM5, or while flow is insufficient for a thermal request. |
| `CM2` | heating, heat pump only | Heating demand active and flow path acceptable. CM3 may demote back to CM2 without a CM1 detour. |
| `CM3` | heating with boiler assist | Power House heating with boiler assist enabled and sustained thermal deficit. |
| `CM5` | cooling | Cooling request active; cooling has priority over heating when both are present. |
| `CM98` | frost circulation | Frost protection when no thermal request is active, or manual force override. |
| `CM100` | commissioning/service container | Explicit commissioning request or active commissioning task while CM override remains Auto. |

## Inputs

Supervisory input categories:

- Operator/service inputs: `oq_cm_override`, `oq_enabled`,
  `oq_openquatt_resume_at`, `oq_boiler_assist_enabled`, silent schedule and
  silent override.
- Strategy demand inputs: `oq_strategy_active_code`,
  `oq_strategy_heat_request_active`, `oq_strategy_requested_power_w`,
  `oq_P_deficit_w`.
- Cooling demand inputs: `cooling_enable_selected`, `cooling_request_active`,
  `cooling_permitted_core`.
- Flow inputs: `flow_rate_selected`, `oq_cm_min_flow_lph`,
  `oq_cm_flow_fault_s`, `oq_cm_flow_recover_s`.
- Frost inputs: `outside_temp_selected`, `oq_cm_frost_on_c`,
  `oq_cm_frost_off_c`, `oq_cm_frost_nan_grace_s`.
- HP feedback and target inputs: `hp*_working_mode`, `hp*_set_working_mode`,
  `hp*_compressor_level`, `hp*_last_applied_level`, `hp*_defrost`.
- Commissioning inputs: `oq_commissioning_request_pending`,
  `oq_commissioning_active`, `oq_commissioning_task_code`.
- Power limiter inputs: total electrical input power, HP generation, mains
  voltage and configured cap timing.

These inputs are sampled in the supervisory interval. Later extraction should
copy them into a single input struct before making a CM decision.

## Internal State

Current supervisory state lives in ESPHome globals:

| State | Purpose |
|---|---|
| `oq_control_mode_code` and `oq_control_mode` | Last published Control Mode. |
| `oq_cm_frost_prev` | Frost hysteresis latch. |
| `oq_cm1_until_ms`, `oq_cm1_next_after` | CM1 preflow/postflow window and intended next CM. |
| `oq_lowflow_since_ms`, `oq_flow_recover_since_ms`, `oq_lowflow_fault_active` | Flow interlock fault and recovery timers. |
| `oq_cm2_idle_since_ms`, `oq_cm2_reentry_block_until_ms`, `oq_cm2_entered_ms` | Power House CM2 idle-exit, startup grace and re-entry block state. |
| `oq_lowload_heat_latch`, `oq_ph_start_confirm_since_ms` | Power House low-load and start-confirmation filters. |
| `oq_cm_last_change_ms`, `oq_cm3_need_since_ms`, `oq_cm3_demote_since_ms` | CM dwell and CM2/CM3 hysteresis timers. |
| `oq_cm0_since_ms`, `oq_sticky_until_ms` | CM0 sticky-pump protection. |
| `oq_power_cap_f`, `oq_power_over_*_s`, `oq_power_under_ok_s` | Duo power safety cap state. |

State is runtime-only. It must not be persisted across reboot unless a later
phase explicitly documents a reboot-safe reason.

## Decision Order

Current CM selection order is part of the contract:

1. Update duo power safety cap.
2. Resolve raw heating/cooling demand, including OpenQuatt master enable.
3. Apply Power House low-load latch, CM2 idle-exit, re-entry block and start
   confirmation.
4. Update flow interlock timers and low-flow fault state.
5. Resolve frost with hysteresis and startup NaN grace.
6. Resolve base target priority: cooling -> heating -> frost -> standby.
7. Apply flow interlock: any active thermal request with low flow or low-flow
   fault targets CM1.
8. Apply supervisory override. Override beats commissioning.
9. Apply commissioning container when override is Auto.
10. Apply CM1 preflow/postflow timer semantics.
11. Apply HP-active guard that holds CM1 instead of leaving to CM0 while a unit
    still reports or targets thermal activity.
12. Apply Power House CM2/CM3 promote/demote hysteresis.
13. Publish CM, label and transition reason on actual CM changes.
14. Apply silent window writes and CM0 sticky/pump policy.

No later refactor should reorder these steps without targeted regression
coverage and an explicit contract update.

## Transition Reasons

Transition reasons are diagnostics. They must not be control inputs.

Current reason families:

| Family | Current strings |
|---|---|
| Overrides | `supervisory override: Force CM0`, `supervisory override: Force CM1`, `supervisory override: Force CM98` |
| Commissioning | `commissioning task active` |
| CM1 window | `pre/postflow hold for heating`, `pre/postflow hold for cooling`, `pre/postflow hold for frost`, `postflow hold for standby`, `CM1 hold timer active` |
| CM1 expiry | `CM1 hold expired -> heating`, `CM1 hold expired -> cooling`, `CM1 hold expired -> frost`, `CM1 hold expired -> standby` |
| Demand/base target | `cooling request waiting for CM1 hold`, `cooling already active`, `cooling request held by flow interlock`, `heating request waiting for CM1 hold`, `heating already active`, `heating request held by flow interlock`, `postflow before standby`, `frost protection`, `no thermal demand` |
| CM3 hysteresis | `power-house deficit promoted to CM3`, `power-house deficit cleared, demoting to CM2`, `Power House assist disabled, returning to CM2`, `boiler/CV assist disabled, returning to CM2` |

The current code does not publish every hold reason as an entity; it logs the
reason only when the published CM changes. A later helper may return a
structured reason code plus stable text, but should keep existing text stable
until UI/MQTT consumers are checked.

## Timer And Hysteresis Semantics

- CM1 pre/postflow: entering heating/cooling from a non-active state starts
  CM1 for `oq_cm_prepost_s` and records `next_after` as CM2 or CM5. Leaving
  CM2/CM5 to standby starts CM1 with `next_after=0`.
- CM1 expiry: on expiry from CM1, `next_after` is revalidated against current
  demand and base target. Heating-curve postflow may resume CM2 directly if
  demand recovered; Power House postflow deliberately does not auto-resume CM2
  through that path.
- Flow interlock: while thermal demand exists, invalid or below-threshold flow
  starts a low-flow timer. A latched fault clears only after flow has stayed OK
  for `oq_cm_flow_recover_s`. Low flow or a latched fault forces CM1.
- Frost: frost is considered only when there is no thermal request. Invalid
  outside temperature becomes fail-safe frost after startup NaN grace. Frost
  uses ON/OFF hysteresis through `oq_cm_frost_prev`.
- Manual CM98 override: Force CM98 remains active until the operator returns
  the override selector to Auto or chooses another override.
- CM2/CM3: CM3 promotion requires Power House, boiler assist enabled, current
  CM2 dwell >= `oq_cm2_min_run_s`, deficit >= ON threshold for
  `oq_cm3_promote_s`. CM3 demotion requires CM3 dwell >= `oq_cm3_min_run_s` and
  deficit <= OFF threshold or invalid for `oq_cm3_demote_s`.
- CM2 idle-exit: Power House can drop heat demand when CM2 has demand but both
  HPs are commanded/measured idle for `oq_cm2_idle_exit_s`, unless blocked by
  curve mode, startup grace or high requested load.
- CM0 sticky pump: after `oq_cm0_sticky_wait_s` in CM0, run sticky circulation
  for `oq_cm0_sticky_run_s` using `oq_sticky_pwm`, then restart the CM0 wait.

All timer comparisons are millis-based and should preserve unsigned rollover
semantics.

## Outputs

Supervisory outputs:

- `oq_control_mode` and `oq_control_mode_code`
- `oq_control_mode_label`
- low-flow, time, silent and sticky diagnostics
- HP pump mode on/off writes
- CM0 sticky/stop pump PWM writes
- silent low-noise mode writes
- low-flow emergency standby/level-zero writes, except when defrost stop-hold
  says a unit must keep its non-zero command until defrost clears

Pump ownership boundary:

- In CM0, supervisory writes stop/sticky PWM.
- In CM1/CM2/CM3/CM5/CM98, supervisory keeps pump mode on, while flow-control
  owns non-CM0 PWM behavior.
- In idle CM100, pump may be off. During a CM100 task, pump is on.
- Pump remains on as a failsafe while any HP still reports or targets thermal
  activity.

## Extraction Path

Safe extraction should proceed in small slices:

1. Keep YAML as the wiring layer and copy all decision inputs into explicit
   structs.
2. Centralize CM enum/code/name/label helpers.
3. Extract pure base-target and override/commissioning resolution first.
4. Extract CM1 timer result calculation with regression coverage.
5. Extract CM2/CM3 hysteresis with explicit timer state.
6. Extract sticky pump policy as a separate output decision.
7. Only after those helpers are covered, reduce the YAML lambda to input
   collection, helper calls, writes and diagnostics publication.

Current phase-4 helper status:

- centralized in `openquatt/includes/oq_supervisory_logic.h`:
  CM enum/code/name/label, frost computation, base-target resolution,
  override-mode normalization, override/commissioning resolution, CM1 expiry
  target resolution, normal transition resolution, standby-hold guard, CM3
  transition resolution and pump-policy helpers
- still local in YAML:
  CM1 timer running/expired state ownership, CM1 start side effects, CM3 timer
  accumulation/reason publication, silent window publication and sticky-timer
  state

Out of scope for phase 4:

- no big-bang supervisory rewrite
- no full C++ migration of `oq_supervisory_controlmode.yaml`
- no thermal guard refactor
- no flow PI conversion
- no dashboard/UX work
- no `flow_rate_hp_avg` changes
- no work in `oq_HP_io.yaml`

## Regression Anchors

The current regression harness already covers the first supervisory anchors:

- base target priority: cooling before heating before frost before standby
- flow interlock forcing CM1
- override priority over commissioning
- CM100 selection from commissioning while override is Auto
- CM1 preflow/postflow entry and selected expiry paths
- CM1 timer running vs expired as explicit state
- HP-active guard holding CM1 before standby
- direct CM3 -> CM2 heating demotion without a CM1 detour
- frost hysteresis and startup NaN grace in the CM target path
- CM2/CM3 promote/demote hysteresis when timers are elapsed
- CM2 idle-exit and Power House re-entry block interaction
- sticky pump output policy
- CM100 task-active pump policy

Phase-4 status:

- supervisory contract is documented
- CM transition regressions run outside ESPHome
- pure supervisory CM decision helpers live in shared C++
- YAML remains the owner of ESPHome entity wiring, timer storage and
  side-effectful publication
