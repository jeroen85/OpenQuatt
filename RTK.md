# RTK For OpenQuatt

Every shell command in this repository must be run through `rtk`.

## RTK Requirement

- Before using `exec_command`, verify the command starts with `rtk`.
- Raw shell commands are allowed only when `rtk` is unavailable or technically incompatible.
- If a raw command is used, explain why before running it.
- This applies to small git inspection commands too, including `git status`, `git diff`, `git rev-parse`, `git branch`, and `git worktree`.

## Required Patterns

```bash
rtk ls
rtk rg "pattern" path/
rtk rg --files path/
rtk cat small-file.md
rtk git status
rtk git diff -- path/to/file
```

## Avoid

- Raw `find .`, broad `grep`, broad `cat`, full `git diff`, and long logs.
- Reading `.esphome/`, `.pio/`, `node_modules/`, `.venv*/`, `.cache/`, `.tmp/`, `tmp/`, `output/`, generated bundles, firmware binaries, and debug dumps.
- Full ESPHome compile or full validation unless the user asks or the task clearly requires it.

## OpenQuatt Checks

```bash
rtk python3 scripts/dev.py validate --config-only --config configs/<hardware>/<target>.yaml
rtk npm run build:web
rtk python3 scripts/check_docs_consistency.py
```

Use `rtk gain` occasionally to confirm savings tracking. If RTK hides needed details, rerun a narrower command rather than dumping broader output.
