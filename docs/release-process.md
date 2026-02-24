# Release Process

This project uses GitHub Actions for automated validation, firmware compilation, and release asset publishing.

## Workflows

- `/.github/workflows/ci-build.yml`
  - Trigger: push to `main`, pull requests
  - Actions:
    - `esphome config openquatt_waveshare.yaml`
    - `esphome compile openquatt_waveshare.yaml`
    - `esphome config openquatt_heatpump_listener.yaml`
    - `esphome compile openquatt_heatpump_listener.yaml`
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
    - validate + compile duo/single across both hardware profiles
    - generate `openquatt.manifest.json` (duo) and `openquatt-single.manifest.json` (single) for OTA update checks
    - create/update GitHub Release
    - attach all setup/profile firmware binaries and manifests to the release

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
   - `openquatt-waveshare.firmware.bin`
   - `openquatt-waveshare.firmware.ota.bin`
   - `openquatt-waveshare.firmware.factory.bin`
   - `openquatt-heatpump-listener.firmware.bin`
   - `openquatt-heatpump-listener.firmware.ota.bin`
   - `openquatt-heatpump-listener.firmware.factory.bin`
   - `openquatt-single-waveshare.firmware.bin`
   - `openquatt-single-waveshare.firmware.ota.bin`
   - `openquatt-single-waveshare.firmware.factory.bin`
   - `openquatt-single-heatpump-listener.firmware.bin`
   - `openquatt-single-heatpump-listener.firmware.ota.bin`
   - `openquatt-single-heatpump-listener.firmware.factory.bin`
   - `openquatt.manifest.json`
   - `openquatt-single.manifest.json`

## Notes

- The baseline `openquatt.yaml` is secrets-free and suitable for CI builds.
- OTA update entity in firmware reads `${release_manifest_url}`:
  - duo profile defaults to `openquatt.manifest.json`
  - single profile overrides this to `openquatt-single.manifest.json`
- Workflow files must remain directly under `.github/workflows/` (GitHub does not load workflows from nested subfolders).
