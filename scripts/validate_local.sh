#!/usr/bin/env bash
set -euo pipefail

CONFIGS=(
  "openquatt_waveshare.yaml"
  "openquatt_heatpump_listener.yaml"
  "openquatt_single_waveshare.yaml"
  "openquatt_single_heatpump_listener.yaml"
)

if ! command -v esphome >/dev/null 2>&1; then
  echo "Error: 'esphome' is niet gevonden in PATH." >&2
  echo "Installeer ESPHome lokaal en probeer opnieuw." >&2
  exit 127
fi

echo "[pre] Controleren setup-isolatie"
python3 scripts/check_setup_isolation.py

echo "[pre] Controleren docs-consistentie"
python3 scripts/check_docs_consistency.py

total="${#CONFIGS[@]}"
for i in "${!CONFIGS[@]}"; do
  cfg="${CONFIGS[$i]}"
  n=$((i + 1))
  echo "[${n}/${total}] Valideren: esphome config ${cfg}"
  esphome config "${cfg}"
done

for i in "${!CONFIGS[@]}"; do
  cfg="${CONFIGS[$i]}"
  n=$((i + 1))
  echo "[${n}/${total}] Compileren: esphome compile ${cfg}"
  esphome compile "${cfg}"
done

echo "Klaar: validatie en compile succesvol voor duo + single setups."
