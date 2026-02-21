# OpenQuatt

<img src="docs/assets/openquatt_logo.svg" alt="OpenQuatt logo" width="400" />

OpenQuatt is a modular ESPHome controller for a dual heat pump setup with supervisory control, demand strategy selection, flow regulation, boiler assist gating, and Home Assistant observability.

> [!WARNING]
> This project is currently in an experimental phase.
> The current implementation is specifically built and validated for a Quatt Hybrid Duo with outside unit (ODU) hardware revision v1.5.

## Table of Contents

- [What This Project Does](#what-this-project-does)
- [Feature TODO](#feature-todo)
- [Repository Structure](#repository-structure)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Local Validation Helper](#local-validation-helper)
- [Hardware Profiles](#hardware-profiles)
- [Release Process](#release-process)
- [Documentation](#documentation)
- [Development and Maintenance](#development-and-maintenance)
- [License](#license)

## What This Project Does

- Controls two heat pumps over RS485 Modbus (`HP1`, `HP2`).
- Runs a central Control Mode state machine (`CM0`, `CM1`, `CM2`, `CM3`, `CM98`).
- Supports two heating demand strategies:
  - `Power House`
  - `Water Temperature Control (heating curve)`
- Regulates pump flow using PI control and optional autotune tooling.
- Supports CIC JSON feed ingestion and local-vs-cloud source selection.
- Publishes dashboards and entities for operations, diagnostics, and tuning.

## Feature TODO

- Add cooling mode support.
- Add topology profile support for Quatt Single and Quatt Duo.
- Add hardware revision profile support for v1 and v1.5.

## Repository Structure

```text
.
├── openquatt.yaml                    # Top-level ESPHome config
├── openquatt/
│   ├── oq_substitutions.yaml         # Compile-time constants and hardware profiles
│   ├── oq_packages.yaml              # Ordered package includes
│   ├── oq_supervisory_controlmode.yaml
│   ├── oq_heating_strategy.yaml
│   ├── oq_heat_control.yaml
│   ├── oq_flow_control.yaml
│   ├── oq_flow_autotune.yaml
│   ├── oq_boiler_control.yaml
│   ├── oq_energy.yaml
│   ├── oq_cic.yaml
│   ├── oq_local_sensors.yaml
│   ├── oq_webserver.yaml
│   ├── oq_HP_io.yaml
│   └── includes/hp_perf_map.h
├── docs/
│   ├── README.md
│   ├── getting-started.md
│   ├── system-overview.md
│   ├── control-modes-and-flow.md
│   ├── settings-reference.md
│   ├── tuning-and-troubleshooting.md
│   ├── home-assistant-dashboard.md
│   ├── adaptive-tuner-design.md
│   ├── assets/
│   │   └── openquatt_logo.svg
│   ├── dashboard/
│   │   ├── README.md
│   │   ├── openquatt_ha_dashboard_nl.yaml
│   │   └── openquatt_ha_dashboard_en.yaml
│   ├── specifications/
│   │   ├── functional-specification.md
│   │   └── technical-specification.md
├── scripts/
│   └── validate_local.sh
└── docs/maintenance.md
```

## Requirements

- ESPHome `>= 2025.11.0`
- ESP32 board (default profile: `esp32-s3-devkitc-1`)
- RS485 wiring to both heat pumps
- Home Assistant (recommended)

## Quick Start

1. Clone the repository.
2. Validate config:
```bash
esphome config openquatt.yaml
```

3. Compile:

```bash
esphome compile openquatt.yaml
```

4. Flash/run:

```bash
esphome run openquatt.yaml
```

## Local Validation Helper

```bash
./scripts/validate_local.sh
```

## Hardware Profiles

Hardware-related compile-time settings are defined in:

- `openquatt/oq_substitutions.yaml`

It includes:

- Active hardware profile values (board, variant, pins)
- Reference profile: Waveshare ESP32-S3-Relay-1CH
- Reference profile: [Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/)

## Release Process

- CI workflow (`.github/workflows/ci-build.yml`) runs on push/PR and validates + compiles firmware.
- Release workflow (`.github/workflows/release-build.yml`) runs on tags `v*` and publishes firmware assets plus `openquatt.manifest.json` to GitHub Releases.
- Detailed steps: [Release Process Guide](docs/release-process.md)

## Documentation

Start with:

- [Documentation Index](docs/README.md)

Core docs:

- [Getting Started](docs/getting-started.md)
- [System Overview](docs/system-overview.md)
- [Control Modes and Flow](docs/control-modes-and-flow.md)
- [Settings Reference](docs/settings-reference.md)
- [Tuning and Troubleshooting](docs/tuning-and-troubleshooting.md)
- [Home Assistant Dashboard Guide](docs/home-assistant-dashboard.md)
- [Dashboard Install and NL/EN Variants](docs/dashboard/README.md)
- [Functional Specification](docs/specifications/functional-specification.md)
- [Technical Specification](docs/specifications/technical-specification.md)

## Development and Maintenance

- [Maintenance Guide](docs/maintenance.md)

## License

This project includes a `LICENSE` file in the repository root.
