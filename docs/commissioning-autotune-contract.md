# Commissioning And Flow Autotune Contract

This document captures the phase-7 contract for the current boundary between
`openquatt/oq_commissioning.yaml`, `openquatt/oq_flow_autotune.yaml` and
`openquatt/oq_flow_control.yaml`.

The goal is not to rewrite CM100 or autotune in one step. The goal is to make
the current ownership, task interface, state, outputs and terminal paths
explicit before later helper or C++ extraction.

## Ownership Boundary

Current control flow:

```text
commissioning supervisor -> selected task -> task state machine -> outputs/results
```

Commissioning owns the CM100 service container, task selection and shared task
bookkeeping. Flow autotune owns the flow-identification and validation task.
Flow control remains the only writer of non-CM0 pump iPWM; autotune only
requests a temporary override through `oq_flow_autotune_active` and
`oq_flow_autotune_pwm`.

Supervisory owns whether CM100 becomes the active Control Mode. Commissioning
may request or hold CM100, but it does not publish Control Mode directly.

## Task Interface

Current task codes:

| Code | Meaning | Owner |
|---:|---|---|
| `0` | no selected task / neutral CM100 | commissioning |
| `1` | boiler power test | commissioning |
| `2` | flow autotune | flow autotune task inside commissioning container |

Current commissioning state codes:

| Code | Meaning |
|---:|---|
| `0` | idle / neutral |
| `1` | requested |
| `2` | flow settle |
| `3` | boiler settle |
| `4` | measure |
| `5` | cooldown |
| `6` | done |
| `7` | abort |
| `8` | failed |

For flow autotune, `oq_commissioning_state_code` is currently only a coarse
container marker. The detailed task state lives in `oq_flow_autotune_state`.

## Commissioning Supervisor Contract

Commissioning may:

- accept a neutral CM100 request only while the override selector is Auto
- refuse neutral CM100 start while another task is active
- set `oq_commissioning_request_pending=true` for neutral CM100 start
- mark `oq_commissioning_active=true` once supervisory has reached CM100
- keep `oq_commissioning_active=true` after a task releases back to neutral
  CM100
- clear task state and return to `IDLE` when CM100 is stopped without an
  active task
- delegate abort to the selected task when a task is active

Commissioning must not:

- own flow PI calculations or pump iPWM writes
- own autotune identification/validation state
- change Control Mode directly
- move the system out of CM100 after task success by default

Current stop/abort nuance is part of the contract:

- Active boiler task: `oq_commissioning_abort_requested=true`.
- Active flow-autotune task: `oq_flow_autotune_abort=true` and
  `oq_commissioning_abort_requested` stays false.
- Pending flow-autotune request: both abort flags are set.

## Boiler Power Test Task Contract

Boiler power test may start only when:

- current Control Mode is CM100
- no other commissioning task is running
- flow control mode is `Flow Setpoint`
- `oq_flow_setpoint_lph` is available
- boiler/CV assist is enabled

On accepted start, the task claims code `1`, marks commissioning active,
stores the previous flow setpoint, writes a temporary `800 L/h` flow target and
enters commissioning state `2` (`FLOW_SETTLE`).

Boiler-task ownership is currently split like this:

- commissioning supervisor owns:
  - CM100 container entry/exit
  - saved/restored flow setpoint
  - `oq_commissioning_boiler_request`
  - task finish/release semantics
  - status publication and entity writes
- boiler task owns:
  - flow-settle readiness
  - boiler-settle readiness
  - measurement plateau progression
  - average/confidence result calculation

Detailed task phases still use `oq_commissioning_state_code`:

| State | Meaning | Primary effect |
|---:|---|---|
| `2` | flow settle | wait for stable flow before enabling boiler |
| `3` | boiler settle | boiler relay requested, wait for stable active heat |
| `4` | measure | accumulate plateau-filtered heat samples |
| `5` | cooldown | boiler request released, result retained |
| `6` | done | result visible, CM100 released to neutral |
| `7` | abort | flow restored, result preserved |
| `8` | failed | flow restored, result cleared |

Boiler task abort/failure/success paths are currently:

- abort:
  - manual abort while task is active
  - CM100 exited during task
- failure:
  - overall timeout
  - hard trip active
  - boiler inhibit active
  - boiler/CV assist disabled during task
  - boiler did not start within settle window
- success:
  - measurement window reached minimum time and sample count
  - result publishes `DONE: <W> (conf <%%>)`
  - commissioning releases back to neutral `CM100 READY`

## Flow Autotune Task Contract

Autotune may start only when:

- current Control Mode is CM100
- no commissioning task is running
- `oq_flow_autotune_state == 0`
- `oq_flow_autotune_active == false`
- `oq_flow_autotune_req == false`

On accepted start, autotune claims task code `2`, marks commissioning active,
sets commissioning state code `1`, queues `oq_flow_autotune_req=true`, clears
abort and measurement memory, and publishes:

- commissioning status: `FLOW AUTOTUNE STARTED`
- autotune status: `REQUESTED`

The detailed autotune states are:

| State | Meaning | Primary output |
|---:|---|---|
| `0` | idle | no override |
| `1` | baseline arm/settle | baseline PWM override |
| `2` | step 1 measure | step PWM override |
| `3` | recover / step 2 arm | baseline PWM override |
| `4` | step 2 measure | step PWM override |
| `5` | closed-loop validation | normal PI, temporary seed gains/setpoint |
| `6` | abort cleanup | restore saved values, release task |

Autotune is valid only while `oq_control_mode_code == 100` and
`oq_commissioning_task_code == 2`. Leaving that combination aborts the task.

## Output Contract

Contractually visible outputs:

- `oq_commissioning_status`
- `oq_boiler_power_test_status`
- `oq_flow_autotune_status`
- `oq_commissioning_result_w`
- `oq_commissioning_result_confidence`
- `oq_flow_kp_suggested`
- `oq_flow_ki_suggested`
- `oq_commissioning_cm100_active`
- `oq_boiler_power_test_active`

Runtime-only task state:

- `oq_commissioning_request_pending`
- `oq_commissioning_active`
- `oq_commissioning_abort_requested`
- `oq_commissioning_task_code`
- `oq_commissioning_state_code`
- `oq_commissioning_started_ms`
- `oq_commissioning_state_since_ms`
- all `oq_flow_at_*` measurement memory
- `oq_flow_autotune_state`
- `oq_flow_autotune_req`
- `oq_flow_autotune_abort`
- `oq_flow_autotune_active`
- `oq_flow_autotune_pwm`

These are intentionally `restore_value: false`.

## Autotune Terminal Paths

Abort paths end in state `6`, restore temporary runtime effects, publish
`ABORTED`, clear task code and release back to neutral CM100:

- abort button or CM100 stop
- no longer in CM100/task 2
- invalid flow during step or validation
- no baseline/recovery flow by timeout
- no steady-state response

Failure/refusal paths still use the same state-6 cleanup path, but preserve
the status text that explains the reason until cleanup publishes `ABORTED`:

- `FAILED: INVALID_GAIN`
- `FAILED: INVALID_VALIDATION_STEP`
- `FAILED: INVALID_VALIDATION_STATE`
- `REFUSED: STEP_HEADROOM`

Successful validation:

- computes suggested Kp/Ki
- restores live `oq_flow_kp`, `oq_flow_ki` and `oq_flow_setpoint_lph`
- clears temporary validation memory
- publishes one of:
  - `DONE (CLOSED-LOOP): ...`
  - `DONE (CLAMPED): ...`
  - `DONE (LIMITED): ...`
- releases commissioning back to `CM100 READY`

The apply button is separate from task success. It writes suggested values to
the live/persistent flow tuning numbers only when both suggestions are valid.

## Flow-Control Boundary

Flow control owns pump iPWM in all non-CM0 modes. The autotune override has
priority only when:

- `oq_flow_autotune_active == true`
- Control Mode is CM100
- commissioning task code is `2`
- frost mode is not active

In that case flow control writes the requested autotune PWM, publishes flow
mode `AUTOTUNE`, resets stability tracking and returns before manual/frost/PI
paths run.

When autotune disables `oq_flow_autotune_active` during validation, normal PI
owns the pump again using the temporary seed gains and validation setpoint.

## Regression Anchors

The regression harness now covers these phase-7 anchors:

- neutral CM100 start arms only the service container
- CM100 start refuses while override is not Auto
- active autotune abort is delegated to autotune
- pending autotune abort marks both abort flags
- autotune start claims task code 2 only in CM100
- autotune start refuses outside CM100
- queued autotune task enters baseline settling
- autotune release clears the task while keeping CM100 ready
- autotune abort restores saved PI gains and setpoint
- invalid step gain remains a failed path
- successful validation may scale gains up slightly
- validation timeout publishes a limited done result
- boiler flow-on-target uses the commissioning settle band
- boiler settle requires both consecutive stable samples and minimum dwell time
- boiler plateau gating delays sample accumulation until heat has stabilized
- boiler measurement completion requires both minimum samples and minimum runtime
- boiler finalize computes the published average and confidence

## Extraction Path

Safe phase-7 extraction should proceed in this order:

1. Keep this contract and the harness green.
2. Add a narrow task-interface helper for task codes, release semantics and
   abort routing.
3. Move only pure autotune calculations first: gain classification, validation
   scaling and status-family selection.
4. Move state transitions only after each transition has a scenario anchor.
5. Leave ESPHome entity writes, number calls, status publication and interval
   wiring in YAML until the helper boundary is proven stable.

Current phase-7 helper status:

- centralized in `openquatt/includes/oq_commissioning_logic.h`:
  task codes, task state codes, CM100/task predicates and stop/abort routing
- centralized in `openquatt/includes/oq_flow_autotune_logic.h`:
  autotune state codes, iPWM clamp, rolling-window helpers, arm/recover/open-loop
  step decisions, validation-settle/measure decisions, and validation
  gain/status adjustment
- centralized in `openquatt/includes/oq_boiler_task_logic.h`:
  boiler flow-valid/on-target checks, settle decisions, plateau-filtered
  measurement progression and result/confidence finalization
- still local in YAML:
  task timers, saved-flow ownership, number/entity writes, status publication,
  commissioning release semantics, logging and other side effects

This means the current phase-7 boundary is now:

- helpers decide task-phase progression and pure task outputs
- YAML applies side effects, persists runtime fields and publishes entities

Out of scope for this phase:

- no big-bang commissioning rewrite
- no flow PI conversion to C++
- no dashboard/UX work
- no changes to `flow_rate_hp_avg`
- no work in `oq_HP_io.yaml`
