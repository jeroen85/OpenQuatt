# Scripts

- Scripts support validation, docs/site generation, release assets, and local dev helpers.
- Inspect the specific script and its direct imports before changing behavior.
- Many scripts write to `.tmp/`, `.esphome/`, or `output/`; avoid reading those outputs unless debugging a failure.
- Do not run release/preparation scripts unless the user requested that workflow.
