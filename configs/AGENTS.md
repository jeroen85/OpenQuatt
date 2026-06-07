# Config Targets

- Files here are ESPHome target entrypoints; keep changes target-specific.
- When adding/removing targets, update `build_targets.yaml` consistently.
- Prefer validating one affected target with `rtk python3 scripts/dev.py validate --config-only --config configs/<hardware>/<target>.yaml`.
- Do not read or expose `secrets.yaml`.
