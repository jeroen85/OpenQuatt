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

## Quick Start

### 1. Download the correct firmware from the latest release

Open the [latest OpenQuatt release](https://github.com/jeroen85/OpenQuatt/releases/latest) and download the `*.firmware.factory.bin` file that matches your setup:

- Duo + Waveshare ESP32-S3-Relay-1CH: `openquatt-duo-waveshare.firmware.factory.bin`
- Duo + Heatpump Listener: `openquatt-duo-heatpump-listener.firmware.factory.bin`
- Single + Waveshare ESP32-S3-Relay-1CH: `openquatt-single-waveshare.firmware.factory.bin`
- Single + Heatpump Listener: `openquatt-single-heatpump-listener.firmware.factory.bin`

Use the `factory.bin` file for first installation.

If you want custom changes, build from source via [Getting Started](docs/getting-started.md).

### 2. Install the firmware with `web.esphome.io`

1. Open [web.esphome.io](https://web.esphome.io/).
2. Connect your ESP board over USB.
3. Start the manual installation flow.
4. Select the `*.firmware.factory.bin` file you downloaded from the latest release.
5. Complete the flashing process and wait for the board to reboot.

Note:

- The manifest-based install link is currently not the recommended route.
- For now, the reliable path is: download the correct `factory.bin` from the latest release, then install it manually through `web.esphome.io`.

Firmware file types:

- `*.firmware.factory.bin` is for the first installation on a board over USB.
- `*.firmware.ota.bin` is for updating a device that is already running OpenQuatt.

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
