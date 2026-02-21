# Release Process

This project uses GitHub Actions for automated validation, firmware compilation, and release asset publishing.

## Workflows

- `/.github/workflows/ci-build.yml`
  - Trigger: push to `main`, pull requests
  - Actions:
    - `esphome config openquatt.yaml`
    - `esphome compile openquatt.yaml`
    - Upload compiled firmware artifacts
- `/.github/workflows/release-build.yml`
  - Trigger: tag push `v*` and manual dispatch
  - Actions:
    - validate + compile
    - create/update GitHub Release
    - attach firmware binaries to the release

## Release Versioning

Use semantic versioning tags:

- `vMAJOR.MINOR.PATCH`
- Examples: `v0.12.1`, `v0.12.2`

Recommended increments:

- Patch: bug fixes, docs, CI changes
- Minor: new backward-compatible functionality
- Major: breaking changes

## How To Cut a Release

1. Update `project_version` in `openquatt/oq_substitutions.yaml`.
2. Commit and push to `main`.
3. Create and push a tag:

```bash
git tag v0.12.2
git push origin main --tags
```

4. Check GitHub Actions:
   - CI should be green.
   - Release workflow should publish artifacts.
5. Verify GitHub Release contains:
   - `firmware.bin`
   - `firmware.ota.bin`
   - `firmware.factory.bin`

## Notes

- The baseline `openquatt.yaml` is secrets-free and suitable for CI builds.
- Workflow files must remain directly under `.github/workflows/` (GitHub does not load workflows from nested subfolders).
