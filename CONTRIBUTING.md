# Contributing

This guide is intended for repo maintenance and reviews. Its goal is not to enforce generic YAML style, but to keep ESPHome packages predictable and quick to review.

## Purpose

- Keep high-churn control packages logically organized.
- Make runtime state and ownership easy to find.
- Enforce only rules that create little noise and genuinely help reviews.

## Scope

The automatic style check is intentionally narrow, but now fully applies to all ESPHome YAML entrypoints and package-related files:

- For all main configs, base configs, profile files, and package YAML files:
  - no tabs
  - no trailing whitespace
  - consistent banner header at the top
- For all package YAML files in `openquatt/*.yaml`:
  - fixed top-level group order
  - structured lambda layout for larger blocks
- For all main configs and base configs:
  - fixed top-level order of `substitutions`, `packages`, `esphome`, `esp32` where applicable
  - fixed child order inside small wiring mappings such as `packages:`
- For package include manifests and substitution files:
  - fixed include order in `oq_packages*.yaml`
  - fixed section order in `oq_substitutions_common.yaml`
  - fixed key order in hardware-profile `substitutions:`

## Package Layout

Use this group order when a package contains these blocks:

1. banner + responsibility block
2. infrastructure such as `logger:`, `api:`, `ota:`, `wifi:`, `http_request:`, `uart:`, `modbus:`, `modbus_controller:`, `modbus_server:`, `one_wire:`, `time:`, `web_server:`
3. internal state via `globals:`
4. control/helper blocks such as `script:`, `output:`, `climate:`, `switch:`, `select:`, `number:`, `datetime:`, `text:`, `button:`
5. published entities via `binary_sensor:`, `sensor:`, `text_sensor:`, `update:`
6. periodic loop via `interval:`

Rationale:

- infrastructure at the top makes external dependencies and board/runtime setup immediately visible
- `globals:` early in the file makes latches, timers, and ownership easy to find
- control/helper blocks come before published entities, so the package first shows what it drives and manages
- `datetime`, `climate`, and `output` explicitly belong in the control/helper layer, not scattered through the file
- `interval:` at the bottom keeps the main loop close to the executing logic

Within a group, exact order matters less than readability and cohesion.

## Review Rules

Not everything is checked automatically. These rules remain leading during reviews:

- Keep lambdas phased: read inputs, compute state, apply outputs, publish diagnostics.
- Use short section headers above top-level blocks.
- Keep single-writer ownership explicit; avoid hidden writers to the same state.
- Add comments only where intent is not immediately clear.
- Write new and changed code comments in English, including YAML comments and `//` comments inside ESPHome lambdas.

## Lambda Style

For ESPHome lambdas, we use a narrow but strict style:

- always use `lambda: |-`, not inline one-liners
- keep the lambda body clearly indented below the `lambda:` line
- use at most one blank line between logical blocks
- add at least one short `//` phase or intent comment to lambdas with 12 or more non-empty lines

For larger lambdas, prefer this structure:

1. read / validate inputs
2. internal calculation or state updates
3. publish output or return value

If a lambda has multiple responsibilities, give those blocks explicit names with short comments.

## Local Validation

Use the project helper for normal local checks:

- `python3 scripts/dev.py bootstrap`
- `python3 scripts/dev.py validate`
- `python3 scripts/dev.py validate --config-only`
- `python3 scripts/dev.py validate --jobs 2`

For quick iterations, the standalone checks remain useful:

- `python3 scripts/check_style_consistency.py`
- `python3 scripts/check_docs_consistency.py`

The checker is intended as a local quality gate. Add new rules only once the current codebase can satisfy them consistently.
