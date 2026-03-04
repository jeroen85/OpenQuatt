#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

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

echo "[1/5] Regressietests draaien"
./scripts/run_regression_tests.sh

step=2
for config in "${CONFIG_FILES[@]}"; do
  echo "[${step}/5] Valideren en compileren: ${config}"
  esphome config "${config}"
  esphome compile "${config}"
  ((step++))
done

echo "Klaar: regressie + alle topology/hardware compilaties succesvol."
