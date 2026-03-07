# OpenQuatt

<img src="docs/assets/openquatt_logo.svg" alt="OpenQuatt logo" width="400" />

OpenQuatt is ESPHome firmware for Quatt Single and Quatt Duo installations. It adds supervisory control, demand-based heat pump control, flow regulation, boiler assist logic, and Home Assistant visibility on top of the underlying Quatt hardware.

> [!WARNING]
> This project is currently in an experimental phase.

## Table of Contents

- [What OpenQuatt Offers](#what-openquatt-offers)
- [Supported Setups](#supported-setups)
- [Quick Start](#quick-start)
- [Hardware Profiles](#hardware-profiles)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## What OpenQuatt Offers

- Supervisory control for Quatt Single and Quatt Duo layouts.
- Control Mode state handling for idle, pre/post-flow, heat pump heating, boiler assist, and frost protection.
- Two heating demand strategies:
  - `Power House`
  - `Water Temperature Control (heating curve)`
- Pump flow regulation with PI control and built-in autotune tooling.
- Boiler assist gating with safety lockouts and control mode integration.
- Runtime source selection between local sensors, CIC feed data, and Home Assistant inputs.
- Energy, COP, runtime, fault, and update diagnostics in Home Assistant and the ESPHome web UI.
- Built-in service utilities such as firmware update checks, runtime debug level control, and one-shot Modbus test actions.

## Supported Setups

OpenQuatt supports these topology and hardware combinations:

- `openquatt_duo_waveshare.yaml`
- `openquatt_duo_heatpump_listener.yaml`
- `openquatt_single_waveshare.yaml`
- `openquatt_single_heatpump_listener.yaml`

Requirements:

- ESPHome `>= 2025.11.0`
- ESP32 hardware matching one of the supported profiles
- RS485 wiring to at least one heat pump
- Home Assistant (recommended)

Release coverage:

- Official GitHub releases provide firmware assets for all four topology/hardware combinations.
- Stable users should stay on the `main` release channel.
- Testers can switch `Firmware Update Channel` to `dev` for prerelease OTA builds, or build locally from the `dev` branch with explicit dev-version overrides.

## Quick Start

### 1. Open the web installer

Open the [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/) and choose your exact combination:

- Duo + Waveshare ESP32-S3-Relay-1CH
- Duo + Heatpump Listener
- Single + Waveshare ESP32-S3-Relay-1CH
- Single + Heatpump Listener

The installer always flashes the latest stable `factory.bin` from the current GitHub release.

If you want custom changes, build from source via [Getting Started](docs/getting-started.md).

### 2. Install the firmware over USB

1. Open the installer page in Chrome or Edge.
2. Connect your ESP board over USB.
3. Select the matching setup and hardware profile.
4. Start the installation flow and wait for the board to reboot.

Firmware file types:

- `*.firmware.factory.bin` is for the first installation on a board over USB.
- `*.firmware.ota.bin` is for updating a device that is already running OpenQuatt.

Manual fallback:

- Open the [latest OpenQuatt release](https://github.com/jeroen85/OpenQuatt/releases/latest) and download the matching `*.firmware.factory.bin`.
- Flash it manually with [web.esphome.io](https://web.esphome.io/).

### 3. Configure Wi-Fi after first boot

After flashing, OpenQuatt starts its fallback access point:

- SSID: `OpenQuatt`
- Password: `openquatt`

Connect to that access point and complete the captive portal flow to enter your Wi-Fi credentials.

Note:

- Wi-Fi provisioning currently happens through the fallback AP and captive portal.
- The installer page only handles flashing; network setup still happens on the device itself after reboot.

### 4. Finish setup in Home Assistant

After the device joins your network:

1. Add the discovered OpenQuatt device in Home Assistant.
2. Verify the basic integration state:
   - the device is online
   - `Status` is available
   - the firmware version is visible
   - HP telemetry updates
   - the device reports a valid control mode
3. Import the dashboard that matches your topology and preferred language:
   - Duo NL: [docs/dashboard/openquatt_ha_dashboard_duo_nl.yaml](docs/dashboard/openquatt_ha_dashboard_duo_nl.yaml)
   - Duo EN: [docs/dashboard/openquatt_ha_dashboard_duo_en.yaml](docs/dashboard/openquatt_ha_dashboard_duo_en.yaml)
   - Single NL: [docs/dashboard/openquatt_ha_dashboard_single_nl.yaml](docs/dashboard/openquatt_ha_dashboard_single_nl.yaml)
   - Single EN: [docs/dashboard/openquatt_ha_dashboard_single_en.yaml](docs/dashboard/openquatt_ha_dashboard_single_en.yaml)
4. Follow the dashboard import instructions in [Dashboard Install and Topology/Language Variants](docs/dashboard/README.md).
5. If you want the full dashboard structure explained, see [Home Assistant Dashboard Guide](docs/home-assistant-dashboard.md).
6. If you want runtime-selectable Home Assistant source entities, also review the optional dynamic source package in [docs/dashboard/README.md](docs/dashboard/README.md).

Channel diagnostics:

- Verify `OpenQuatt Release Channel` in diagnostics so you know whether the running build is `main` or `dev`.
- Use `Firmware Update Channel` if you want OTA checks to follow `main` or `dev` without reflashing first.

## Hardware Profiles

Hardware-specific compile-time settings are defined in:

- `openquatt/oq_substitutions_common.yaml`
- `openquatt/profiles/oq_substitutions_waveshare.yaml`
- `openquatt/profiles/oq_substitutions_heatpump_listener.yaml`

Supported hardware profiles:

- [Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm)
- [Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/)

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

## Development

- [Maintenance Guide](docs/maintenance.md)
- Build-from-source workflow: [Getting Started](docs/getting-started.md)
- Release and branch flow: [Release Process](docs/release-process.md)

## License

This project includes a `LICENSE` file in the repository root.
