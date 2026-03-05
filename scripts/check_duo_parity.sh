#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BASELINE_FILE="${ROOT_DIR}/tests/golden/duo_main_sha256.txt"

if [[ ! -f "${BASELINE_FILE}" ]]; then
  echo "Missing baseline file: ${BASELINE_FILE}" >&2
  exit 1
fi

failed=0
while IFS= read -r line; do
  [[ -z "${line}" ]] && continue
  [[ "${line}" =~ ^# ]] && continue

  expected_hash="$(awk '{print $1}' <<< "${line}")"
  file_path="$(awk '{print $2}' <<< "${line}")"
  abs_path="${ROOT_DIR}/${file_path}"

  if [[ ! -f "${abs_path}" ]]; then
    echo "[FAIL] missing file: ${file_path}" >&2
    failed=1
    continue
  fi

  if [[ "${file_path}" == "openquatt/oq_boiler_control.yaml" ]]; then
    # Boiler module is templated by package vars; validate the rendered Duo
    # variant against main baseline.
    actual_hash="$(sed 's/${heatpump_outlet_temp_id}/hp2_water_out_temp/g' "${abs_path}" | shasum -a 256 | awk '{print $1}')"
  else
    actual_hash="$(shasum -a 256 "${abs_path}" | awk '{print $1}')"
  fi
  if [[ "${actual_hash}" != "${expected_hash}" ]]; then
    echo "[FAIL] duo parity mismatch: ${file_path}" >&2
    echo "       expected=${expected_hash}" >&2
    echo "       actual  =${actual_hash}" >&2
    failed=1
  else
    echo "[OK] ${file_path}"
  fi
done < "${BASELINE_FILE}"

if [[ "${failed}" -ne 0 ]]; then
  exit 1
fi

echo "Duo parity check passed."
