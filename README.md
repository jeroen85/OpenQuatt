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

- Official GitHub releases provide firmware assets for Duo and Single on both supported hardware profiles.

## Quick Start

### 1. Pick the right firmware

Choose the factory image that matches your topology and hardware:

- Duo + Waveshare ESP32-S3-Relay-1CH: `openquatt-waveshare.firmware.factory.bin`
- Duo + Heatpump Listener: `openquatt-heatpump-listener.firmware.factory.bin`
- Single + Waveshare ESP32-S3-Relay-1CH: `openquatt-single-waveshare.firmware.factory.bin`
- Single + Heatpump Listener: `openquatt-single-heatpump-listener.firmware.factory.bin`

If you want custom changes, build from source via [Getting Started](docs/getting-started.md).

### 2. Flash the firmware with `web.esphome.io`

1. Download the matching `*.firmware.factory.bin` from the [latest release](https://github.com/jeroen85/OpenQuatt/releases/latest).
2. Open [web.esphome.io](https://web.esphome.io/).
3. Connect your ESP board over USB.
4. Choose the manual install flow and select the downloaded `*.firmware.factory.bin`.
5. Wait for the first boot to complete.

Why `factory.bin`:

- `*.firmware.factory.bin` is the correct first-flash image for ESP Web Tools / `web.esphome.io`.
- The release also includes `*.firmware.ota.bin` and `openquatt.manifest.json`, but those are intended for the firmware's OTA update flow after the device is already installed.
- The current published manifest is OTA-oriented, so manual selection of the `factory.bin` is the recommended install path today.

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

## License

This project includes a `LICENSE` file in the repository root.
