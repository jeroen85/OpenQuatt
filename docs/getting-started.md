# Getting Started

This guide gets OpenQuatt from repository clone to a validated first run.

## Table of Contents

- [1. Prerequisites](#1-prerequisites)
- [2. Repository Layout You Need to Know](#2-repository-layout-you-need-to-know)
- [3. Baseline Runtime](#3-baseline-runtime)
- [4. Select Hardware Profile](#4-select-hardware-profile)
- [5. Validate and Compile](#5-validate-and-compile)
- [6. Flash and Boot](#6-flash-and-boot)
- [7. First Runtime Safety Checks](#7-first-runtime-safety-checks)
- [8. Recommended Initial Defaults](#8-recommended-initial-defaults)
- [9. Common First-Run Issues](#9-common-first-run-issues)
- [10. Next Steps](#10-next-steps)

## 1. Prerequisites

### Software

- ESPHome `>= 2025.11.0`
- A working Python/ESPHome environment on your host machine
- Home Assistant (recommended)

### Hardware

OpenQuatt currently supports two documented hardware profiles:

1. **Waveshare ESP32-S3-Relay-1CH** ([product page](https://www.waveshare.com/esp32-s3-relay-1ch.htm), default active profile)
2. **Heatpump Listener** ([product page](https://electropaultje.nl/product/heatpump-listener/))

Both profiles include:

- board definition
- flash size
- variant
- UART TX/RX/RTS pins for RS485
- DS18B20 1-Wire pin
- boiler relay GPIO

## 2. Repository Layout You Need to Know

Main entrypoint:

- `openquatt.yaml`
- `openquatt_waveshare.yaml`
- `openquatt_heatpump_listener.yaml`

Package include file:

- `openquatt/oq_packages.yaml`

Compile-time constants:

- `openquatt/oq_substitutions_common.yaml`
- `openquatt/profiles/oq_substitutions_waveshare.yaml`
- `openquatt/profiles/oq_substitutions_heatpump_listener.yaml`

Dashboard YAML:

- `docs/dashboard/openquatt_ha_dashboard_nl.yaml` (recommended default)
- `docs/dashboard/openquatt_ha_dashboard_en.yaml`

## 3. Baseline Runtime

The repository baseline runs without `secrets.yaml` and starts in AP mode (`OpenQuatt`).
Adjust `openquatt/oq_common.yaml` if you want environment-specific API encryption, OTA passwording, or fixed Wi-Fi client networking.

## 4. Select Hardware Profile

Select the firmware entrypoint that matches your hardware:

1. `openquatt_waveshare.yaml` for [Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm)
2. `openquatt_heatpump_listener.yaml` for Heatpump Listener

Each entrypoint loads:

- shared constants from `openquatt/oq_substitutions_common.yaml`
- hardware-specific pin mapping from its profile file
3. Recompile and flash.

## 5. Validate and Compile

Run:

```bash
esphome config openquatt.yaml
esphome compile openquatt.yaml
```

Tip: compile each hardware profile via its own entrypoint (`openquatt_waveshare.yaml` or `openquatt_heatpump_listener.yaml`). Each entrypoint has a dedicated `build_path`, which keeps profile caches separate and speeds up repeated profile switching.

Or run the helper script:

```bash
./scripts/validate_local.sh
```

## 6. Flash and Boot

Run:

```bash
esphome run openquatt.yaml
```

After first boot, verify:

1. Device appears in Home Assistant.
2. Modbus HP entities update for both HP1 and HP2.
3. `Control Mode` has a valid value.
4. Selected source sensors (`Water Supply Temp (Selected)`, `Flow average (Selected)`, `Outside Temperature (Selected)`) update.
5. No persistent `unknown` or stale feed state unless expected.

## 7. First Runtime Safety Checks

Before enabling full heating behavior, check:

1. **Flow safety**:
   - `Flow average (Selected)` is realistic.
   - `Lowflow fault active` remains off in normal operation.
2. **Source selection**:
   - CIC source switches match your intended setup.
3. **Mode sanity**:
   - `CM override` is `Auto`.
4. **Boiler safety**:
   - Boiler relay behavior follows CM3 and temperature lockout expectations.

## 8. Recommended Initial Defaults

- Keep `Flow Control Mode` on `Flow Setpoint`.
- Keep `Heating Control Mode` on your validated strategy (usually `Power House` first).
- Keep allowed levels enabled for all HP levels until tuning requires constraints.
- Keep debug log levels moderate unless diagnosing specific issues.

## 9. Common First-Run Issues

### No HP telemetry

Check RS485 wiring, TX/RX mapping, RTS/DE-RE pin, and Modbus address assumptions.

### CIC values remain invalid

Check URL in `CIC - Feed URL`, feed availability, and stale/feed-ok status entities.

### Flow appears valid but heating is blocked

Check selected flow source and low-flow timer/fault logic states, not only instantaneous flow value.

## 10. Next Steps

After successful first run:

1. Import either `docs/dashboard/openquatt_ha_dashboard_nl.yaml` or `docs/dashboard/openquatt_ha_dashboard_en.yaml` into Home Assistant.
2. Optional: install `docs/dashboard/openquatt_ha_dynamic_sources_package.yaml` as HA package for dynamic source entity selection.
3. Read [Control Modes and Flow](control-modes-and-flow.md).
4. Tune using [Settings Reference](settings-reference.md) and [Tuning and Troubleshooting](tuning-and-troubleshooting.md).
