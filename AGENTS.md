@RTK.md

# OpenQuatt Codex Instructions

## RTK Requirement

- Use `rtk` for all output-producing or inspection shell commands in this repository.
- Before running output-heavy commands, prefer an `rtk`-wrapped form.
- Raw shell commands are allowed only when `rtk` is unavailable or technically incompatible.
- If a raw command is used, explain why before running it.
- This applies to small git inspection commands too, including `git status`, `git diff`, `git rev-parse`, `git branch`, and `git worktree`.

## Scope First

- Start with the files or directories named by the user.
- If context is missing, inspect only the nearest relevant config, README section, or local `AGENTS.md`.
- Use scoped `rtk rg` / `rtk rg --files` instead of broad scans.
- Do not read whole large YAML, logs, bundles, or generated files unless the task explicitly needs them.
- Keep summaries compact; include only findings that affect the current task.

## Repo Map

- `configs/`: ESPHome target entrypoints for hardware/topology/connection combinations.
- `openquatt/`: shared ESPHome packages, profiles, topology, connection and webserver YAML.
- `components/`: custom ESPHome Python/C++ components.
- `openquatt/web/`: embedded web UI source and generated bundles.
- `docs/`: user docs, dashboard/install pages and generated site inputs.
- `scripts/`: local validation, release, docs and build tooling.

## Editing Rules

- Do not make functional code changes unless the user requested them for the task.
- Do not perform broad refactors, architecture changes, or cleanup passes unless explicitly asked.
- Do not make formatting-only changes.
- Preserve existing style, naming, YAML structure, and generated-file conventions.
- Keep edits inside the smallest relevant module, package, component, or document.
- Treat `secrets.yaml` and local reference material as sensitive/local; do not quote values.

## Avoid Reading

- `.git/`, `.esphome/`, `.pio/`, `node_modules/`, `.venv*/`, `.cache/`, `.tmp/`, `tmp/`, `output/`, `__pycache__/`.
- Generated web bundles: `openquatt/web/js/openquatt-app.js` and `openquatt/web/css/openquatt-app.css`.
- Large logs, recordings, debug dumps, firmware binaries, release exports, and local references unless directly requested.

## Tests And Builds

- Run the smallest check that matches the change.
- For firmware/YAML changes, prefer `rtk python3 scripts/dev.py validate --config-only --config <target.yaml>`.
- Run ESPHome compile or full `scripts/dev.py validate` only when explicitly requested or clearly necessary.
- For web source changes, run `rtk npm run build:web`.
- For docs/tooling changes, prefer the specific script touched by the task.
- Summarize build/test output by command, pass/fail, and the few relevant error lines.

## GitHub And PRs

- Do not prefix PR titles with `[codex]`; use a concise human-readable title instead.

## Concise Mode

- Keep progress updates and final responses compact.
- Avoid verbose explanations unless the user asks for them.
- Use concise technical Dutch when explaining changes.
- Do not compress, rename, translate, or simplify code, paths, registers, YAML keys, entity IDs, constants, units, or commands.
- Preserve technical precision over brevity.
- If a detail is safety-critical, control-related, or affects embedded behavior, explain it clearly even if that costs more tokens.

## Progress Updates

- Do not narrate routine steps, commands, staging, commits, or pushes.
- Give progress updates only for meaningful decisions, blockers, risks, or completed milestones.
- For routine edits, prefer no intermediate updates and provide only the final summary.
- Keep progress updates to 1-3 short bullets.

## Final Response

- Mention changed files, behavior change if any, checks run or skipped, and remaining risks.
- Keep the final answer short and task-focused.
- Do not include long reasoning, raw command output, or full diffs unless requested.
- Do not list every command that was run.
- Summarize only relevant commands/checks and their result.
