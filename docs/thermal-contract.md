# Thermal Contract

This document captures the phase-3 thermal contract introduced after PR158.
It is intentionally conservative: it documents current behavior and naming
semantics before later refactors move logic between request control, guards and
the actuator.

## Contract Layers

The thermal chain is:

```text
strategy-local output -> intent -> guarded -> applied
```

### Intent

Intent is what the active strategy thermally wants.

It contains the thermal mode, requested HP1/HP2 levels, owner/topology hints,
strategy code and strategy reason. Intent does not imply that the request is
safe or physically writeable.

Current intent producers:

- `oq_cooling_request_*`
- `oq_curve_dispatch_*`
- `oq_ph_request_*`

Current shared intent interface:

- `oq_request_mode_code`
- `oq_request_hp1_level`
- `oq_request_hp2_level`
- `oq_request_owner_hp`
- `oq_request_topology_code`
- `oq_request_strategy_code`
- `oq_request_reason`

During phase 3 these names stay stable. Conceptually, `oq_request_*` means
intent, even if a later refactor introduces `oq_intent_*` aliases or names.

### Guarded

Guarded is what shared physical and safety constraints allow downstream.

Guarded processing currently covers or prepares:

- Control Mode gating
- startup inhibit after controller reboot
- water-temperature hard trip
- excluded compressor levels
- slew limiting
- minimum runtime floor
- topology hold
- silent/day cap where it affects request shaping
- defrost stop-hold where a stop request cannot safely land immediately

Current guarded interface:

- `oq_guarded_mode_code`
- `oq_guarded_hp1_level`
- `oq_guarded_hp2_level`
- `oq_guarded_hp1_keep_mode_active_on_zero`
- `oq_guarded_hp2_keep_mode_active_on_zero`

Important: `oq_guarded_*` is not applied state. It is guarded request state
that can still be limited by actuator-local checks such as minimum off-time,
mode confirmation and defrost retain.

### Applied

Applied is what was actually commanded to the heat pump selects or stored as
actuator-owned applied bookkeeping.

Applied includes:

- `hp*_set_working_mode` calls
- `hp*_compressor_level` calls
- `hp*_last_applied_level`
- `hp*_last_start_ms`
- `hp*_last_stop_ms`
- runtime-minute bookkeeping

Applied is owned by `oq_thermal_actuator`. Strategies and request-control logic
may read applied state for guards, but must not directly write HP mode or level
selects.

Later naming direction:

- `oq_applied_hp1_level`
- `oq_applied_hp2_level`
- optional applied mode diagnostics

## Current Name Mapping

| Current name | Contract layer | Note |
|---|---|---|
| `oq_cooling_request_*` | strategy-local intent | Cooling chooses owner and levels for CM5. |
| `oq_curve_dispatch_*` | strategy-local intent | Heating curve publishes dispatch/owner/topology. |
| `oq_ph_request_*` | strategy-local intent | Power House publishes optimizer output. |
| `oq_request_*` | intent | Explicit pre-guard/pre-actuator request interface. |
| `oq_guarded_mode_code` | guarded | Guard-owned mode carrier consumed by the actuator. |
| `oq_guarded_hp*_level` | guarded | Guard-owned per-HP compressor request consumed by the actuator. |
| `oq_guarded_hp*_keep_mode_active_on_zero` | guarded | Preserves thermal mode command when a guard soft-zeroes a request. |
| `hp*_set_working_mode` | applied write | Only `oq_thermal_actuator` may write. |
| `hp*_compressor_level` | applied write | Only `oq_thermal_actuator` may write. |
| `hp*_last_applied_level` | applied state | Actuator-owned bookkeeping and guard input. |

## Current Guard Order

The code is not yet split into pure layers. For regression tests, the current
order below is the behavior to preserve:

1. Strategy-local outputs are selected based on Control Mode and strategy.
2. `oq_request_*` publishes intent.
3. Excluded levels are mapped to an allowed alternative.
4. Non-Power-House modes get slew limiting.
5. Water hard-trip forces request levels to 0.
6. Startup inhibit forces request levels to 0.
7. Minimum runtime may re-arm a zero request to level 1, except during hard-trip
   and cooling floor trip.
8. Silent/day cap is applied after runtime floor, with soft-zero semantics that
   may keep the thermal mode command active.
9. `oq_guarded_*` publishes guarded mode and levels.
10. The actuator applies min off-time, mode-confirmation gating and defrost
    retain around the actual writes.

This split-location of guards is current semantics. Phase 3 may add tests and
clarifying names/comments, but must not change this ordering without regression
coverage.

## Phase 5 Guard Boundary

Phase 5 makes the guard boundary explicit before moving more behavior:

```text
strategy -> intent -> thermal guards -> guarded request -> actuator -> applied
```

Thermal guards are strategy-independent physical and safety constraints between
intent and actuator input. They own the final guarded compressor request and the
guard diagnostics that explain why intent changed.

Guard-owned behavior:

- final 0..10 level normalization
- final excluded-level mapping
- single topology HP2 force-zero
- curve/cooling slew limiting and one-HP-per-cycle shaping
- water hard-trip application
- startup inhibit application
- minimum runtime hold, including its priority against hard-trip, startup
  inhibit and cooling floor trip
- silent/day cap, including soft-zero mode preservation

Strategy-owned behavior remains:

- comfort, demand and target calculation
- curve dispatch and Power House candidate scoring
- strategy-specific topology preference
- demand caps such as `oq_power_cap_f`
- soft water-temperature limit factor as an input to strategy demand shaping

Actuator-owned behavior remains:

- hardware-facing working-mode and compressor-level writes
- minimum off-time after a real stop
- mode-confirmation gate around write latency
- defrost retain / active mode hold around a zero request
- applied state and runtime bookkeeping

The first extraction target is a pure helper seam,
`openquatt/includes/oq_thermal_guard_logic.h`. YAML should keep ESPHome state,
timestamps, logging and publication while delegating pure guard decisions. A
later `oq_thermal_guards.yaml` package can own guard wiring once behavior and
diagnostics are stable.

Current phase-5 implementation status:

- guarded shaping is centralized in `openquatt/includes/oq_thermal_guard_logic.h`
- `oq_thermal_request_control.yaml` now publishes explicit `oq_guarded_*`
  actuator inputs after exclusions, slew, hard-trip, startup inhibit,
  minimum-runtime and cap shaping
- `oq_thermal_actuator.yaml` now consumes `oq_guarded_*` and focuses on write
  path behavior, applied bookkeeping and runtime counters

Important phase-5 nuance: current startup inhibit zeroes requests before the
minimum runtime floor, so a compressor that is already measured active may still
be re-armed to level 1 by minimum runtime. That behavior is explicitly covered
and must not change unless the regression harness is updated with an intentional
contract change.

## Topology Contract

Single topology:

- HP2 request, guarded and applied values are always 0 or diagnostic `NAN`.
- Owner collapses to HP1 for non-zero single requests.
- Duo optimizer reasons must not depend on HP2 state.

Duo topology:

- HP1 and HP2 can independently have intent, guarded and applied levels.
- Topology transitions between single and duo may arm hold state.
- Runtime lead may influence owner/topology, but applied writes remain
  actuator-owned.

## Reason Contract

Reason strings are diagnostics, not control inputs. They must not be required
for correct behavior.

Current reason families:

- Strategy request reasons: `cooling_*`, `curve_*`, `ph_*`
- Duo optimizer reasons: `keep_current`, `hold_active`, `defrost_hold`,
  `better_heat`, `soft_guard`, `less_power`, `no_candidate`,
  `defrost_boost`, `runtime_lead`, `single_topology`, `oil_return_hold`
- Guard/block reasons: startup inhibit, hard trip, min runtime, min off-time,
  excluded levels, cap to zero, waiting for thermal mode confirmation,
  defrost protect hold
- Supervisory transition reasons: CM override, commissioning, CM1 hold,
  flow interlock, cooling/heating demand, frost and CM3 promote/demote

Phase-3 migration path:

1. Keep existing strings stable for MQTT/UI compatibility.
2. Centralize code-to-string mapping in a helper or explicit mapping table.
3. Add mapping tests before moving switch-statements.
4. Introduce new canonical reason codes only if existing consumers keep working.

Current phase-3 status:

- request-reason mapping is centralized in `openquatt/includes/oq_thermal_request_logic.h`
- Power House optimizer-reason names are centralized in the same helper
- regression coverage asserts the current string outputs
- dynamic actuator block messages remain local to the actuator because they carry
  runtime numbers and are not code-driven enums

## Regression Anchors

Thermal scenarios for the regression harness:

- startup inhibit zeroes guarded request before later guard stages
- startup inhibit currently does not suppress a later min-runtime hold re-arm
- min-runtime re-arms level 1 after real measured thermal start
- cooling floor trip blocks min-runtime re-arm
- water hard-trip wins over min-runtime
- min off-time blocks restart in the actuator from previous applied 0
- defrost hold retains last non-zero applied level only outside cooling
- cooling transition may apply level once target mode matches
- excluded requested level searches down first, then up
- silent/day cap can soft-zero a guarded request while preserving thermal mode intent
- single topology never produces HP2 guarded/applied level
- duo topology can arm single/duo hold on non-idle topology transition

Supervisory scenarios for the regression harness:

- CM0 idle from no thermal demand
- CM1 preflow/postflow expiry to CM0/CM2/CM5/CM98
- CM2 heating when flow and heat demand are valid
- CM3 promote/demote hysteresis from Power House deficit
- CM5 cooling has priority over heating strategy dispatch
- CM98 frost and diagnostic force expiry
- CM100 commissioning entry/exit
- flow interlock blocks heating/cooling into CM1

## Out Of Scope For This PR

- no big-bang thermal refactor
- no Supervisory C++ extraction
- no flow PI conversion to C++
- no dashboard or UX work
- no `flow_rate_hp_avg` changes
- no work in `oq_HP_io.yaml`
- no breaking rename of existing HA/MQTT-facing entities
