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

- Official GitHub releases provide firmware assets and manifests for all four topology/hardware combinations.
- Stable users should stay on the `main` release channel.
- Testers can switch `Firmware Update Channel` to `dev` for prerelease OTA builds, or build locally from the `dev` branch with explicit dev-version overrides.

## Quick Start

### 1. Pick the right setup

Choose the installer that matches your setup:

- Duo install: [web.esphome.io + `openquatt-duo-install.manifest.json`](https://web.esphome.io/?manifest=https://github.com/jeroen85/OpenQuatt/releases/latest/download/openquatt-duo-install.manifest.json)
- Single install: [web.esphome.io + `openquatt-single-install.manifest.json`](https://web.esphome.io/?manifest=https://github.com/jeroen85/OpenQuatt/releases/latest/download/openquatt-single-install.manifest.json)

If you want custom changes, build from source via [Getting Started](docs/getting-started.md).

### 2. Flash the firmware with `web.esphome.io`

1. Open the Duo or Single installer link above.
2. Connect your ESP board over USB.
3. `web.esphome.io` will select the correct board image inside that setup:
   - ESP32-S3 -> Waveshare firmware
   - ESP32 -> Heatpump Listener firmware
4. Complete the install flow and wait for the first boot to finish.

Manifest roles:

- `openquatt-duo-install.manifest.json` and `openquatt-single-install.manifest.json` are for first install via `web.esphome.io` and use the release `*.firmware.factory.bin` images.
- `openquatt-duo-ota.manifest.json` and `openquatt-single-ota.manifest.json` are the OTA update manifests used by firmware.

Manual fallback:

- If you want to flash manually, download the matching `*.firmware.factory.bin` from the [latest release](https://github.com/jeroen85/OpenQuatt/releases/latest) and select it in `web.esphome.io`:
  - Duo + Waveshare ESP32-S3-Relay-1CH: `openquatt-duo-waveshare.firmware.factory.bin`
  - Duo + Heatpump Listener: `openquatt-duo-heatpump-listener.firmware.factory.bin`
  - Single + Waveshare ESP32-S3-Relay-1CH: `openquatt-single-waveshare.firmware.factory.bin`
  - Single + Heatpump Listener: `openquatt-single-heatpump-listener.firmware.factory.bin`

### 3. Configure Wi-Fi after first boot

After flashing, OpenQuatt starts its fallback access point:

- SSID: `OpenQuatt`
- Password: `openquatt`

Connect to that access point and complete the captive portal flow to enter your Wi-Fi credentials.

Note:

- Wi-Fi provisioning currently happens through the fallback AP and captive portal.
- `web.esphome.io` is therefore used for flashing first, not for the final Wi-Fi setup flow.

### 4. Finish setup in Home Assistant

After the device joins your network:

1. Add the discovered ESPHome device in Home Assistant.
2. Verify that HP telemetry updates and the device reports a valid control mode.
3. Import the matching dashboard if you want the full UI.
4. Verify `OpenQuatt Release Channel` in diagnostics so you know whether the running build is `main` or `dev`.
5. Use `Firmware Update Channel` if you want OTA checks to follow `main` or `dev` without reflashing first.

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
