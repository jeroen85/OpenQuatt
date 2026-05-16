# Control Contract

This document is the stable, public control contract for OpenQuatt runtime
ownership boundaries.

Detailed phase notes and refactor work documents live in
`docs/_local_reference/contracts/`.

## Scope

This contract defines:

- owner boundaries between strategy, supervisory, request, actuator, flow, and commissioning packages
- stable runtime interfaces between those owners
- guard and priority order that affects safety and behavior

This contract does not define:

- detailed implementation notes
- extraction plans
- temporary refactor checkpoints

## Ownership Layers

### Layer 1: Strategy Intent

Owned by strategy packages and manager:

- `oq_strategy_manager`
- `oq_heating_curve_strategy`
- `oq_power_house_strategy`
- `oq_cooling_strategy`

Primary outputs:

- `oq_strategy_active_code`
- `oq_demand_raw`, `oq_cooling_demand_raw`
- strategy-local request intent signals

### Layer 2: Shared Thermal Request

Owned by `oq_thermal_request_control`.

Responsibilities:

- demand filter and cap handling
- mode gating based on supervisory CM state
- shared request publication
- guard preprocessing for actuator consumption

Primary outputs:

- `oq_request_*` shared intent interface
- guarded per-HP request interface (`oq_guarded_*`)

### Layer 3: Applied Actuation

Owned by `oq_thermal_actuator`.

Responsibilities:

- only writer of HP working mode selects
- only writer of HP compressor level selects
- final actuator-local guards (minimum off-time and mode-confirmation gating)
- applied bookkeeping

Primary applied state:

- HP mode/level select writes
- `hp*_last_applied_level`

## Supervisory Contract

Owned by `oq_supervisory_controlmode`.

Responsibilities:

- single owner of control modes `CM0/CM1/CM2/CM3/CM5/CM98/CM100`
- CM demand resolution and flow interlock
- CM1 pre/postflow timer behavior
- frost hysteresis and low-load policy state
- pump run policy publication

Supervisory is not allowed to:

- write compressor levels directly
- run flow PI control

## Flow Control Contract

Owned by `oq_flow_control` with pure helper seams in
`openquatt/includes/oq_flow_control_logic.h`.

Execution priority:

1. CM0 early return
2. CM100 autotune override
3. CM98 frost fixed iPWM
4. manual fixed iPWM
5. AUTO PI control path

Flow control is the owner of pump iPWM output writes.

## Commissioning Contract

Owned by `oq_commissioning` and `oq_flow_autotune`.

Responsibilities:

- CM100 task container ownership
- commissioning task lifecycle and abort routing
- boiler test and flow autotune runtime state machine ownership

Flow control may consume autotune state, but does not own commissioning task
state.

## Safety Priority Rules

The following order must stay explicit and test-covered:

1. hard safety trips (for example water hard-trip) dominate downstream requests
2. startup inhibit and minimum runtime guards apply before final actuator write
3. supervisory mode and flow interlock gate thermal request eligibility
4. actuator-only guards apply at write time and own applied-state bookkeeping

## Change Rules

Any behavior change to this contract requires:

- update of this document
- update of regression coverage
- successful local validation and compile checks

## References

- Architecture map: `docs/system-overview.md`
- Local phase notes: `docs/_local_reference/contracts/`
