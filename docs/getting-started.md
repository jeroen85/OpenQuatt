# Getting Started

This guide gets OpenQuatt from repository clone to a validated first run.

## Table of Contents

- [1. Prerequisites](#1-prerequisites)
- [2. Repository Layout You Need to Know](#2-repository-layout-you-need-to-know)
- [3. Configure Secrets](#3-configure-secrets)
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

OpenQuatt currently supports two documented profile templates in `openquatt/oq_substitutions.yaml`:

1. **Waveshare ESP32-S3-Relay-1CH** (default active profile)
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

Package include file:

- `openquatt/oq_packages.yaml`

Compile-time constants:

- `openquatt/oq_substitutions.yaml`

Dashboard YAML:

- `docs/dashboard/openquatt_ha_dashboard.yaml`

## 3. Configure Secrets

Create `secrets.yaml` with at least:

```yaml
api_key: "<32-byte API encryption key>"
ota_password: "<ota-password>"

wifi_ssid: "<ssid>"
wifi_password: "<wifi-password>"

wifi_gateway: 192.168.1.1
wifi_subnet: 255.255.255.0
ip_openquatt: 192.168.1.50
```

## 4. Select Hardware Profile

Open `openquatt/oq_substitutions.yaml`.

The active profile fields are:

- `esp_board`
- `esp_flash_size`
- `esp_variant`
- `uart_tx_pin`
- `uart_rx_pin`
- `uart_rts_pin`
- `ds18b20_pin`
- `oq_boiler_relay_pin`

To switch hardware:

1. Copy values from the desired reference profile block.
2. Paste them into the active profile block.
3. Recompile and flash.

## 5. Validate and Compile

Run:

```bash
esphome config openquatt.yaml
esphome compile openquatt.yaml
```

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

1. Import `docs/dashboard/openquatt_ha_dashboard.yaml` into Home Assistant.
2. Read [Control Modes and Flow](control-modes-and-flow.md).
3. Tune using [Settings Reference](settings-reference.md) and [Tuning and Troubleshooting](tuning-and-troubleshooting.md).
