# V2 High-Temperature Continuation

This note describes how OpenQuatt should handle the new Quatt V2 high-temperature heating data that sits above the main rectangular V2 map.

## Goal

Keep the existing V2 main map stable and predictable, while adding a separate model for the truly high supply-temperature continuation.

The main map remains the default source for:

- power-house level selection
- normal supply-temperature estimation
- existing supervisory logic

The continuation is only used when the requested or observed supply temperature moves into the high-temperature range.

## Model Layout

### 1. Main V2 map

Use the current rectangular V2 surface as the canonical base map:

- `T_sup <= 55 C`
- regular `T_amb x T_sup x level` grid
- normal dispatch path for all existing performance logic

This is the map already represented by `hp_v2_performance_data.json`.

### 2. High-temperature continuation

Add a separate native V2 continuation map for the ragged high-temperature data:

- W55 continuation
- W65 continuation
- W70 continuation

This continuation should not be forced into the rectangular base map format. It has different row counts, masks, and ambient coverage.

## Proposed File Split

Recommended source files:

- `openquatt/includes/hp_perf_map.h`
  - keeps the main V1/V1.5 and V2 base maps
  - exposes a small dispatch layer
- `openquatt/includes/hp_perf_map_v2_high.h`
  - contains the high-temperature continuation data and lookup helpers

Recommended source exports:

- `hp_v2_performance_data.json`
  - canonical rectangular base surface
- `hp_v2_high_temp_continuation.json`
  - canonical ragged continuation surface

## Dispatch Rule

Recommended runtime rule:

- `Tsup <= 55.0 C` -> use the main V2 map
- `Tsup > 55.0 C` -> use the high-temperature continuation

First implementation detail:

- the continuation is split into discrete `55 C`, `65 C`, and `70 C` bands
- each band uses the cold-side ambient subset that best matches the ragged row count
- the handoff between the main V2 map and the continuation is blended over roughly `54..56 C`
- if a continuation lookup is incomplete, we fall back to the base `55 C` map instead of failing control logic

This keeps the handoff simple and avoids mixing the two models in the same data structure.

If we want to avoid a hard seam in readouts, we can later add a small display-only blend window around `55 C`. That should not be part of the control path on the first iteration.

## Recommended API Shape

Keep the existing base API stable:

- `oq_perf::interp_power_th_w(...)`
- `oq_perf::interp_cop(...)`
- `oq_perf::interp_power_el_w(...)`

Add a separate high-temperature API instead of changing the existing one implicitly:

- `oq_perf_v2_high::interp_power_th_w(...)`
- `oq_perf_v2_high::interp_cop(...)`
- `oq_perf_v2_high::interp_power_el_w(...)`

Then add an explicit wrapper only where the caller really needs the extended model.

## Control-Loop Usage

Recommended usage split:

- Power House and compressor-level selection stay on the main map by default
- supervisory limiters can consult the continuation when `Tsup` enters the high-temperature range
- diagnostics and telemetry may expose both base-map and continuation estimates

That means the continuation is initially a support layer, not the primary control model.

## Fallback Behavior

If the high-temperature map is missing or incomplete:

- clamp to the main map at `55 C`
- keep the current control logic running
- log the fallback clearly so the mismatch is visible

## Why This Split Works

- preserves the current validated V2 base behavior
- avoids forcing ragged data into a rectangular format
- keeps level-selection logic deterministic
- makes the high-temperature work independently testable

## Implementation Order

1. Add the new high-temperature source file and export.
2. Add a dedicated runtime helper for the continuation.
3. Wire only the high-temperature-aware callers to the new helper.
4. Leave the existing main-map callers untouched unless we explicitly decide otherwise.

## Open Decision

The main remaining product decision is whether the continuation should only influence limit/backup behavior, or whether specific high-temperature control paths should eventually use it for active level selection as well.
