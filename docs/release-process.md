# Release Process

This project uses GitHub Actions for automated validation, firmware compilation, and release asset publishing.

## Workflows

- `/.github/workflows/ci-build.yml`
  - Trigger: push to `main`, pull requests
  - Actions:
    - `esphome config openquatt_duo_waveshare.yaml`
    - `esphome compile openquatt_duo_waveshare.yaml`
    - `esphome config openquatt_duo_heatpump_listener.yaml`
    - `esphome compile openquatt_duo_heatpump_listener.yaml`
    - `esphome config openquatt_single_waveshare.yaml`
    - `esphome compile openquatt_single_waveshare.yaml`
    - `esphome config openquatt_single_heatpump_listener.yaml`
    - `esphome compile openquatt_single_heatpump_listener.yaml`
    - Upload compiled firmware artifacts per profile
- `/.github/workflows/docs-consistency.yml`
  - Trigger: push to `main`, pull requests
  - Actions:
    - run `scripts/check_docs_consistency.py --changed-only`
    - emit non-blocking warnings on likely docs drift (does not fail CI)
- `/.github/workflows/release-build.yml`
  - Trigger: tag push `v*` and manual dispatch
  - Actions:
    - validate + compile all four topology/hardware profiles
    - publish explicit Duo and Single release assets for both hardware targets
    - generate `openquatt-duo-install.manifest.json` and `openquatt-single-install.manifest.json` for first install via `web.esphome.io`
    - generate `openquatt-duo-ota.manifest.json` and `openquatt-single-ota.manifest.json` for OTA update checks
    - create/update GitHub Release
    - attach release firmware binaries and manifests to the release

## ESPHome Version Pinning

- CI/release build with a pinned ESPHome version from `/.github/requirements-esphome.txt`.
- Keep release builds deterministic by updating this pin via PR (instead of using floating `latest`).
- A scheduled canary workflow (`/.github/workflows/esphome-canary.yml`) validates compatibility against the latest ESPHome.

## Release Versioning

Use semantic versioning tags:

- `vMAJOR.MINOR.PATCH`
- Examples: `v0.12.3`, `v0.13.0`

Recommended increments:

- Patch: bug fixes, docs, CI changes
- Minor: new backward-compatible functionality
- Major: breaking changes

## How To Cut a Release

1. Update `project_version` in `openquatt/oq_substitutions_common.yaml`.
2. Commit and push to `main`.
3. Create and push a tag:

```bash
git tag v0.13.0
git push origin main --tags
```

4. Check GitHub Actions:
   - CI should be green.
   - Release workflow should publish artifacts.
5. Verify GitHub Release contains:
   - `openquatt-duo-install.manifest.json`
   - `openquatt-duo-ota.manifest.json`
   - `openquatt-single-install.manifest.json`
   - `openquatt-single-ota.manifest.json`
   - `openquatt-duo-waveshare.firmware.bin`
   - `openquatt-duo-waveshare.firmware.ota.bin`
   - `openquatt-duo-waveshare.firmware.factory.bin`
   - `openquatt-duo-heatpump-listener.firmware.bin`
   - `openquatt-duo-heatpump-listener.firmware.ota.bin`
   - `openquatt-duo-heatpump-listener.firmware.factory.bin`
   - `openquatt-single-waveshare.firmware.bin`
   - `openquatt-single-waveshare.firmware.ota.bin`
   - `openquatt-single-waveshare.firmware.factory.bin`
   - `openquatt-single-heatpump-listener.firmware.bin`
   - `openquatt-single-heatpump-listener.firmware.ota.bin`
   - `openquatt-single-heatpump-listener.firmware.factory.bin`

## Notes

- The baseline `openquatt_duo_waveshare.yaml` is secrets-free and suitable for CI builds.
- `openquatt-duo-install.manifest.json` and `openquatt-single-install.manifest.json` are intended for first install via `web.esphome.io`.
- `openquatt-duo-ota.manifest.json` and `openquatt-single-ota.manifest.json` are intended for OTA update flows.
- Duo firmware reads `${release_manifest_url}` from `openquatt_base.yaml`, Single firmware reads it from `openquatt_base_single.yaml`.
- Workflow files must remain directly under `.github/workflows/` (GitHub does not load workflows from nested subfolders).
