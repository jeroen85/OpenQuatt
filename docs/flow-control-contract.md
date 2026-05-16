# Flow Control Contract

This document captures the phase-8 contract for the current boundary around
`openquatt/oq_flow_control.yaml`.

The goal is not to change hydraulic behavior in this phase. The goal is to
make the current mode-routing, PI boundary, output ownership and runtime state
explicit before later helper or C++ extraction.

## Ownership Boundary

Current control flow:

```text
mode selection -> selected flow mode -> control calculation -> pwm output/result
```

Flow control owns pump iPWM writes for all non-CM0 modes. Supervisory owns
Control Mode selection and CM0 pump policy. Flow control does not decide heat
production, compressor levels, boiler assist or whether CM100 is active.

Flow control may:

- publish `oq_flow_mode`
- write `hp1_pump_speed`
- write the secondary pump speed when `${flow_secondary_enabled}` is enabled
- run AUTO PI against `flow_rate_selected`
- apply fixed iPWM for manual and frost modes
- apply a temporary autotune iPWM request while the CM100 flow-autotune task is active
- update runtime PI memory and learned `oq_flow_last_good_pwm`

Flow control must not:

- write pump iPWM in CM0
- own CM0 stop/sticky pump policy
- select or change Control Mode
- own commissioning task state
- own flow autotune state progression
- change `flow_rate_hp_avg`

## Mode Selection Contract

The current execution priority is:

| Priority | Selected mode | Conditions | Output behavior |
|---:|---|---|---|
| 1 | `CM0` | `oq_control_mode_code == 0` | publish `CM0`, return without pump iPWM writes |
| 2 | `AUTOTUNE` | `oq_flow_autotune_active == true`, CM100, task code `2` | write clamped `oq_flow_autotune_pwm`, publish `AUTOTUNE`, skip manual/frost/PI |
| 3 | `CM98` | `oq_control_mode_code == 98` | write clamped frost iPWM, publish `CM98` |
| 4 | `MANUAL` | flow control mode is `Manual PWM` and not CM98 | write clamped manual iPWM, publish `MANUAL` |
| 5 | `AUTO (failsafe)` | AUTO path with invalid setpoint or invalid flow signal | write failsafe `iPWM=850`, publish `AUTO (failsafe)` |
| 6 | `AUTO (starting)` | AUTO path while startup hold remains after the current tick | hold current start iPWM, publish `AUTO (starting)` |
| 7 | `AUTO` | normal AUTO PI path | write PI result, publish `AUTO` |

Important priority details:

- CM0 is a hard early return. Even if manual or autotune state is present,
  this loop does not write pump iPWM in CM0.
- Autotune override is valid only for CM100 plus commissioning task code `2`.
  A stale `oq_flow_autotune_active` flag outside that task is ignored by
  flow control.
- CM98 frost circulation takes fixed-output ownership before manual mode.
  Selecting `Manual PWM` does not override frost iPWM.
- AUTO failsafe status has priority over AUTO startup status.
- The published `AUTO (starting)` label is based on the startup hold count
  after the current AUTO tick has run.

## PI Core Boundary

The current AUTO PI core begins after mode routing has selected AUTO and ends
when it returns a clamped iPWM value plus PI/failsafe state.

Current AUTO PI inputs:

- `oq_flow_setpoint_lph`
- `flow_rate_selected`
- `oq_flow_kp`
- `oq_flow_ki`
- previous `oq_flow_last_pwm`
- runtime memory: setpoint filter, integral, last error, startup hold and stability counter

Current AUTO PI outputs:

- next pump iPWM
- `oq_flow_i`
- `oq_flow_last_pwm`
- runtime setpoint filter and last error
- `oq_flow_last_good_pwm` after stable tracking
- mode status family: normal, starting or failsafe

The PI core currently includes:

- invalid-input failsafe to `iPWM=850`
- startup hold with integrator freeze
- setpoint ramping
- deadband
- proportional and integral action
- anti-windup decay and clamping
- asymmetric action limiting
- final iPWM clamp to `50..850`
- stable-flow tracking for learned `oq_flow_last_good_pwm`

## State Contract

Runtime-only state:

- `oq_flow_i`
- `oq_flow_last_pwm`
- `oq_flow_last_mode`
- `oq_flow_commissioning_start_pwm`
- `oq_flow_control_mode_code`
- `oq_flow_autotune_active`
- `oq_flow_autotune_pwm`
- lambda-local startup hold, stability counter, setpoint filter and previous PI error

Persistent state:

- `oq_flow_last_good_pwm`: learned AUTO restart seed
- `oq_flow_setpoint_lph`: user setting
- `oq_flow_manual_pwm`: user setting
- `oq_flow_frost_pwm`: user setting
- `oq_flow_auto_start_pwm`: user setting
- `oq_flow_kp`: user setting
- `oq_flow_ki`: user setting
- `oq_flow_control_mode`: user setting

Contractually visible outputs:

- `oq_flow_mode`
- pump iPWM number entities for HP1 and optional HP2
- `oq_flow_mismatch`
- `flow_rate_hp_avg`

`flow_rate_hp_avg` and `oq_flow_mismatch` are diagnostics/sensor logic in the
same package, but they are outside the phase-8 PI/mode-routing extraction
scope unless explicitly covered first.

## Extraction Rules

Before moving any flow-control logic:

- preserve the mode priority table above
- add or keep regression scenarios for changed mode paths
- keep CM0 pump policy in supervisory
- keep ESPHome entity writes in YAML until a side-effect boundary is explicit
- do not move PI/fallback logic without covering invalid-input, startup-hold,
  clamp and `last_good_pwm` behavior
- keep `flow_rate_hp_avg` unchanged

## Current Phase-8 Helper Boundary

The current phase-8 helper seam is centralized in
`openquatt/includes/oq_flow_control_logic.h`.

Centralized there:

- mode-route selection (`CM0`, `AUTOTUNE`, `CM98`, `MANUAL`, `AUTO`)
- execution-mode naming and AUTO status-family mapping
- iPWM clamping
- AUTO start seed selection for normal vs commissioning entry
- pure AUTO PI arithmetic
- startup-hold step behavior
- invalid-input failsafe behavior
- stable-flow tracking and `last_good_pwm` update decision

YAML still owns:

- ESPHome globals/statics and their storage locations
- CM0 and manual edge bookkeeping
- number/entity reads and writes
- pump iPWM mirroring to HP1 and optional HP2
- flow-mode text publication
- logging
- `flow_rate_hp_avg` and `oq_flow_mismatch` diagnostics

That means the current phase-8 boundary is now:

- helpers decide route, AUTO start seed and pure PI outputs
- YAML applies side effects, stores runtime memory and publishes entities
