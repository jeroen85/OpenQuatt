# OpenQuatt Documentation

This documentation set is organized for fast onboarding and professional maintenance.

## Table of Contents

- [Recommended Reading Paths](#recommended-reading-paths)
- [Documentation Structure](#documentation-structure)
- [What Each Document Covers](#what-each-document-covers)
- [Documentation Rules](#documentation-rules)

## Recommended Reading Paths

### Path A: First install / first run

1. [Getting Started](getting-started.md)
2. [System Overview](system-overview.md)
3. [Home Assistant Dashboard](home-assistant-dashboard.md)

### Path B: Daily operation, tuning, and troubleshooting

1. [Control Modes and Flow](control-modes-and-flow.md)
2. [Settings Reference](settings-reference.md)
3. [Tuning and Troubleshooting](tuning-and-troubleshooting.md)

### Path C: Engineering and code review

1. [System Overview](system-overview.md)
2. [Functional Specification](specifications/functional-specification.md)
3. [Technical Specification](specifications/technical-specification.md)
4. [Maintenance Guide](maintenance.md)

## Documentation Structure

```text
docs/
├── README.md
├── getting-started.md
├── system-overview.md
├── control-modes-and-flow.md
├── settings-reference.md
├── tuning-and-troubleshooting.md
├── home-assistant-dashboard.md
├── adaptive-tuner-design.md
├── assets/
│   └── openquatt_logo.svg
├── dashboard/
│   ├── README.md
│   ├── openquatt_ha_dashboard_nl.yaml
│   └── openquatt_ha_dashboard_en.yaml
└── specifications/
    ├── functional-specification.md
    └── technical-specification.md
```

## What Each Document Covers

- `getting-started.md`: hardware prerequisites, secrets, build/flash flow, first validation.
- `system-overview.md`: package architecture, control ownership, data pipeline, safety model.
- `control-modes-and-flow.md`: CM behavior, Flow Mode semantics, Heating Strategy modes, and precedence.
- `settings-reference.md`: compile-time vs runtime settings and tuning intent.
- `tuning-and-troubleshooting.md`: practical workflows, symptom-driven diagnostics, safe iteration.
- `home-assistant-dashboard.md`: how the dashboard is organized and how to use each tab.
- `dashboard/README.md`: dashboard language variants and Home Assistant import instructions.
- `specifications/functional-specification.md`: what the system must do.
- `specifications/technical-specification.md`: how the current implementation does it.
- `adaptive-tuner-design.md`: future design for local adaptive tuning.

## Documentation Rules

- Keep filenames versionless.
- Keep firmware versioning in `openquatt/oq_substitutions.yaml` (`project_version`).
- Update both specifications when changing control behavior.
- Keep entity names and examples aligned with the current YAML codebase.
