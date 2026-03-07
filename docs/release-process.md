# Release Process

This project uses GitHub Actions for automated validation, firmware compilation, and release asset publishing.
Documentation consistency is validated locally via `./scripts/validate_local.sh`.

## Branch Model

- `main`: stable branch for tagged releases and the default OTA/update channel.
- `dev`: integration branch for testers. Validate it like `main`, but do not cut stable tags from it.
- feature branches: short-lived branches merged into `dev`; promote `dev` into `main` only after validation/soak.

Firmware should expose its channel explicitly via `release_channel` so Home Assistant and the ESPHome web UI show whether a device is running `main` or `dev`.

## Workflows

- `/.github/workflows/ci-build.yml`
  - Trigger: push to `main` or `dev`, pull requests
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
- `/.github/workflows/release-build.yml`
  - Trigger: tag push `v*` and manual dispatch
  - Actions:
    - validate + compile all four topology/hardware profiles
    - publish explicit Duo and Single release assets for both hardware targets
    - generate `openquatt-duo-install.manifest.json` and `openquatt-single-install.manifest.json` for first install via `web.esphome.io`
    - generate `openquatt-duo-ota.manifest.json` and `openquatt-single-ota.manifest.json` for OTA update checks
    - create/update GitHub Release
    - attach release firmware binaries and manifests to the release
- `/.github/workflows/dev-build.yml`
  - Trigger: push to `dev`, manual dispatch
  - Actions:
    - compile all four profiles with `release_channel=dev`
    - override `project_version` to `${base_version}-dev.<run_number>+<shortsha>`
    - move the mutable `dev-latest` tag to the newest `dev` commit
    - publish/update a prerelease that contains install + OTA manifests for the dev channel

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

Keep the source-controlled `project_version` aligned with the next intended stable release. Published dev-channel artifacts should override that at build time to `${project_version}-dev.<run_number>+<shortsha>` while also setting `release_channel=dev`. The monotonically increasing prerelease number is important: SemVer ignores everything after `+`, so SHA-only build metadata does not count as a newer OTA version on its own.

## Channel Metadata

- `project_version` in `openquatt/oq_substitutions_common.yaml` remains the user-facing firmware version.
- `release_channel` in `openquatt/oq_substitutions_common.yaml` identifies the running channel (`main` or `dev`).
- `release_manifest_url` selects which OTA manifest the built-in update entity uses.
- `Firmware Update` checks the selected OTA manifest every `4h`.
- `Firmware Update Channel` is a runtime select that switches the OTA manifest between the baked-in `main` and `dev` URLs and immediately refreshes the update entity.

The running firmware exposes both `OpenQuatt Version` and `OpenQuatt Release Channel` in diagnostics, while `Firmware Update Channel` controls which OTA track the device should follow next.

## Building a Dev Channel Firmware

Reuse the existing topology/hardware entrypoints and override channel-specific substitutions at build time:

```bash
BASE_VERSION="$(awk -F'\"' '/^project_version: / { print $2 }' openquatt/oq_substitutions_common.yaml)"
DEV_STAMP="$(date -u +%Y%m%d%H%M%S)"
DEV_VERSION="${BASE_VERSION}-dev.${DEV_STAMP}+local"

esphome \
  -s project_version "${DEV_VERSION}" \
  -s release_channel dev \
  -s release_manifest_url https://github.com/jeroen85/OpenQuatt/releases/download/dev-latest/openquatt-duo-ota.manifest.json \
  compile openquatt_duo_waveshare.yaml
```

Equivalent Single builds should use:

```text
https://github.com/jeroen85/OpenQuatt/releases/download/dev-latest/openquatt-single-ota.manifest.json
```

This keeps the topology/hardware matrix independent from release channel selection.

The repository now backs that URL with `/.github/workflows/dev-build.yml`, which publishes a mutable prerelease/tag named `dev-latest`.

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
   - `openquatt-duo-waveshare.firmware.ota.bin`
   - `openquatt-duo-waveshare.firmware.factory.bin`
   - `openquatt-duo-heatpump-listener.firmware.ota.bin`
   - `openquatt-duo-heatpump-listener.firmware.factory.bin`
   - `openquatt-single-waveshare.firmware.ota.bin`
   - `openquatt-single-waveshare.firmware.factory.bin`
   - `openquatt-single-heatpump-listener.firmware.ota.bin`
   - `openquatt-single-heatpump-listener.firmware.factory.bin`

## Notes

- The baseline `openquatt_duo_waveshare.yaml` is secrets-free and suitable for CI builds.
- `openquatt-duo-install.manifest.json` and `openquatt-single-install.manifest.json` are intended for first install via `web.esphome.io`.
- `openquatt-duo-ota.manifest.json` and `openquatt-single-ota.manifest.json` are intended for OTA update flows.
- Duo firmware reads `${release_manifest_url}` from `openquatt_base.yaml`, Single firmware reads it from `openquatt_base_single.yaml`.
- Workflow files must remain directly under `.github/workflows/` (GitHub does not load workflows from nested subfolders).
