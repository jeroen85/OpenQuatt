#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

# Keep PlatformIO state inside the repository to avoid host-specific
# ~/.platformio ownership/permission issues.
PIO_CORE_DIR="${PLATFORMIO_CORE_DIR:-${ROOT_DIR}/.cache/platformio}"
mkdir -p "${PIO_CORE_DIR}"

CONFIG_FILES=(
  "openquatt_duo_waveshare.yaml"
  "openquatt_duo_heatpump_listener.yaml"
  "openquatt_single_waveshare.yaml"
  "openquatt_single_heatpump_listener.yaml"
)

if ! command -v esphome >/dev/null 2>&1; then
  echo "Error: 'esphome' is niet gevonden in PATH." >&2
  echo "Installeer ESPHome lokaal en probeer opnieuw." >&2
  exit 127
fi

run_esphome() {
  PLATFORMIO_CORE_DIR="${PIO_CORE_DIR}" esphome "$@"
}

echo "PlatformIO core dir: ${PIO_CORE_DIR}"

echo "[1/5] Regressietests draaien"
./scripts/run_regression_tests.sh

step=2
for config in "${CONFIG_FILES[@]}"; do
  echo "[${step}/5] Valideren en compileren: ${config}"
  run_esphome config "${config}"
  run_esphome compile "${config}"
  ((step++))
done

echo "Klaar: regressie + alle topology/hardware compilaties succesvol."
