#!/usr/bin/env bash
set -euo pipefail

CONFIG_FILE="openquatt.yaml"

if ! command -v esphome >/dev/null 2>&1; then
  echo "Error: 'esphome' is niet gevonden in PATH." >&2
  echo "Installeer ESPHome lokaal en probeer opnieuw." >&2
  exit 127
fi

echo "[1/2] Valideren: esphome config ${CONFIG_FILE}"
esphome config "${CONFIG_FILE}"

echo "[2/2] Compileren: esphome compile ${CONFIG_FILE}"
esphome compile "${CONFIG_FILE}"

echo "Klaar: validatie en compile succesvol."
