# OpenQuatt

<img src="docs/assets/openquatt_logo.svg" alt="OpenQuatt logo" width="400" />

OpenQuatt is a modular ESPHome controller for Quatt Single and Quatt Duo topologies with supervisory control, demand strategy selection, flow regulation, boiler assist gating, and Home Assistant observability.

> [!WARNING]
> This project is currently in an experimental phase.
> The Duo topology remains the behavioral reference path; Single support is compile-time selectable via dedicated entrypoints.

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

- Controls one or two heat pumps over RS485 Modbus (`HP1`, optional `HP2`).
- Runs a central Control Mode state machine (`CM0`, `CM1`, `CM2`, `CM3`, `CM98`).
- Supports two heating demand strategies:
  - `Power House`
  - `Water Temperature Control (heating curve)`
- Regulates pump flow using PI control and optional autotune tooling.
- Supports CIC JSON feed ingestion and local-vs-cloud source selection.
- Publishes dashboards and entities for operations, diagnostics, and tuning.
- Includes built-in service utilities (firmware update checks, debug log controls, manual Modbus probe tools).

## Feature TODO

- Add cooling mode support.
- Add hardware revision profile support for v1 and v1.5.

## Repository Structure

```text
.
├── openquatt_duo_waveshare.yaml             # Duo topology + Waveshare hardware
├── openquatt_duo_heatpump_listener.yaml     # Duo topology + Heatpump Listener hardware
├── openquatt_single_waveshare.yaml          # Single topology + Waveshare hardware
├── openquatt_single_heatpump_listener.yaml  # Single topology + Heatpump Listener hardware
├── openquatt_base.yaml                      # Shared base (Duo topology)
├── openquatt_base_single.yaml               # Shared base (Single topology)
├── openquatt/
│   ├── oq_substitutions_common.yaml  # Compile-time constants shared by all profiles
│   ├── profiles/
│   │   ├── oq_substitutions_waveshare.yaml
│   │   └── oq_substitutions_heatpump_listener.yaml
│   ├── oq_packages.yaml              # Ordered package includes (Duo)
│   ├── oq_packages_single.yaml       # Ordered package includes (Single)
│   ├── oq_common.yaml                # Shared runtime (logger/api/ota/wifi/http/modbus/diagnostics)
│   ├── oq_supervisory_controlmode.yaml
│   ├── oq_supervisory_controlmode_single.yaml
│   ├── oq_heating_strategy.yaml
│   ├── oq_heating_strategy_single.yaml
│   ├── oq_heat_control.yaml
│   ├── oq_heat_control_single.yaml
│   ├── oq_flow_control.yaml
│   ├── oq_flow_control_single.yaml
│   ├── oq_flow_autotune.yaml
│   ├── oq_boiler_control.yaml
│   ├── oq_boiler_control_single.yaml
│   ├── oq_energy.yaml
│   ├── oq_cic.yaml
│   ├── oq_cic_single.yaml
│   ├── oq_ha_inputs.yaml
│   ├── oq_local_sensors.yaml
│   ├── oq_debug_testing.yaml         # Manual diagnostic/testing tools (one-shot Modbus reads)
│   ├── oq_debug_testing_duo.yaml     # Duo-only HP2 debug read button
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
│   │   ├── openquatt_ha_dashboard_duo_nl.yaml
│   │   ├── openquatt_ha_dashboard_duo_en.yaml
│   │   ├── openquatt_ha_dashboard_single_nl.yaml
│   │   └── openquatt_ha_dynamic_sources_package.yaml
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
- RS485 wiring to at least one heat pump (HP2 only required for Duo topology)
- Home Assistant (recommended)

## Quick Start

1. Clone the repository.
2. Choose your topology + hardware entrypoint:
   - `openquatt_duo_waveshare.yaml`
   - `openquatt_duo_heatpump_listener.yaml`
   - `openquatt_single_waveshare.yaml`
   - `openquatt_single_heatpump_listener.yaml`
3. Validate config (example):
```bash
esphome config openquatt_duo_waveshare.yaml
```

4. Compile (example):

```bash
esphome compile openquatt_duo_waveshare.yaml
```

Note: each entrypoint has its own ESPHome `build_path`, so switching between topology/hardware combinations does not invalidate the other profile caches.

5. Flash/run:

```bash
esphome run openquatt_duo_waveshare.yaml
```

## Local Validation Helper

```bash
./scripts/validate_local.sh
```

## Hardware Profiles

Hardware-related compile-time settings are defined in:

- `openquatt/oq_substitutions_common.yaml`
- `openquatt/profiles/oq_substitutions_waveshare.yaml`
- `openquatt/profiles/oq_substitutions_heatpump_listener.yaml`

It includes:

- Shared compile-time constants (`project_version`, control constants, CIC/flow/modbus constants)
- [Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm) hardware mapping
- [Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/) hardware mapping

## Release Process

- CI workflow (`.github/workflows/ci-build.yml`) runs on push/PR and enforces:
  - control-logic regression tests (`./scripts/run_regression_tests.sh`)
  - config + compile for all four topology/hardware entrypoints
- Release workflow (`.github/workflows/release-build.yml`) runs on tags `v*` and publishes Duo firmware release assets plus `openquatt.manifest.json`.
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
- [Dashboard Install and Topology/Language Variants](docs/dashboard/README.md)
- [Functional Specification](docs/specifications/functional-specification.md)
- [Technical Specification](docs/specifications/technical-specification.md)

## Development and Maintenance

- [Maintenance Guide](docs/maintenance.md)

## License

This project includes a `LICENSE` file in the repository root.
