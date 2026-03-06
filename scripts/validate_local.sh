#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

# Keep PlatformIO state inside the repository to avoid host-specific
# ~/.platformio ownership/permission issues.
PIO_CORE_DIR="${PLATFORMIO_CORE_DIR:-${ROOT_DIR}/.cache/platformio}"
JOBS="${JOBS:-2}"
LOG_DIR="${ROOT_DIR}/.tmp/validate_local_logs"
mkdir -p "${PIO_CORE_DIR}"
mkdir -p "${LOG_DIR}"

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

if ! command -v python3 >/dev/null 2>&1; then
  echo "Error: 'python3' is niet gevonden in PATH." >&2
  echo "Installeer Python 3 lokaal en probeer opnieuw." >&2
  exit 127
fi

run_esphome() {
  PLATFORMIO_CORE_DIR="${PIO_CORE_DIR}" esphome "$@"
}

echo "PlatformIO core dir: ${PIO_CORE_DIR}"
echo "Parallel compile jobs: ${JOBS}"

if ! [[ "${JOBS}" =~ ^[1-9][0-9]*$ ]]; then
  echo "Error: JOBS moet een positief geheel getal zijn." >&2
  exit 2
fi

echo "[docs] Valideren: docs consistency"
python3 scripts/check_docs_consistency.py

step=1
for config in "${CONFIG_FILES[@]}"; do
  echo "[config ${step}/4] Valideren: ${config}"
  run_esphome config "${config}"
  ((step++))
done

COMPILE_FILES=("${CONFIG_FILES[@]}")

# On a cold cache, warm shared PlatformIO/toolchain state first to reduce the
# chance of parallel package-install races.
if (( JOBS > 1 )) && { [[ ! -d "${PIO_CORE_DIR}/packages" ]] || ! compgen -G "${PIO_CORE_DIR}/packages/*" >/dev/null; }; then
  warm_config="${COMPILE_FILES[0]}"
  warm_log="${LOG_DIR}/${warm_config%.yaml}.log"
  echo "[warmup] Koude PlatformIO-cache gedetecteerd, compile eerst sequentieel: ${warm_config}"
  run_esphome compile "${warm_config}" >"${warm_log}" 2>&1
  echo "[ok] ${warm_config}"
  COMPILE_FILES=("${COMPILE_FILES[@]:1}")
fi

compile_one() {
  local config="$1"
  local stem="${config%.yaml}"
  local log_file="${LOG_DIR}/${stem}.log"
  local status_file="${LOG_DIR}/${stem}.status"

  rm -f "${status_file}"
  echo "[compile] ${config} -> ${log_file}"
  if run_esphome compile "${config}" >"${log_file}" 2>&1; then
    echo "0" >"${status_file}"
  else
    local rc=$?
    echo "${rc}" >"${status_file}"
  fi
}

export PIO_CORE_DIR LOG_DIR
export -f run_esphome
export -f compile_one

if ((${#COMPILE_FILES[@]} > 0)); then
  if ! printf '%s\n' "${COMPILE_FILES[@]}" | xargs -P "${JOBS}" -I {} bash -lc 'compile_one "$1"' _ {}; then
    true
  fi
fi

failures=0
for config in "${COMPILE_FILES[@]}"; do
  stem="${config%.yaml}"
  status_file="${LOG_DIR}/${stem}.status"
  log_file="${LOG_DIR}/${stem}.log"
  if [[ ! -f "${status_file}" ]]; then
    echo "[FAIL] ${config}: geen statusbestand aangemaakt." >&2
    ((failures++))
    continue
  fi

  rc="$(<"${status_file}")"
  if [[ "${rc}" != "0" ]]; then
    echo "[FAIL] ${config} (exit ${rc}), log: ${log_file}" >&2
    tail -n 80 "${log_file}" >&2 || true
    ((failures++))
    continue
  fi

  echo "[ok] ${config}"
done

if (( failures > 0 )); then
  echo "Klaar met fouten: ${failures} compile(s) mislukt." >&2
  exit 1
fi

echo "Klaar: alle topology/hardware compilaties succesvol."
