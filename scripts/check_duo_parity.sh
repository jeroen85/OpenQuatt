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

  case "${file_path}" in
    "openquatt/oq_boiler_control.yaml")
      # Boiler module is templated by package vars; validate the rendered Duo
      # variant against main baseline.
      actual_hash="$(sed 's/${heatpump_outlet_temp_id}/hp2_water_out_temp/g' "${abs_path}" | shasum -a 256 | awk '{print $1}')"
      ;;
    "openquatt/oq_heating_strategy.yaml")
      # Heating strategy is templated for single/duo topology IDs; normalize to Duo.
      actual_hash="$(
        sed \
          -e 's/${secondary_outside_temp_id}/hp2_outside_temp/g' \
          -e 's/${secondary_water_out_temp_id}/hp2_water_out_temp/g' \
          -e 's/${secondary_last_applied_level_id}/hp2_last_applied_level/g' \
          -e 's/${secondary_working_mode_id}/hp2_working_mode/g' \
          "${abs_path}" | shasum -a 256 | awk '{print $1}'
      )"
      ;;
    "openquatt/oq_cic.yaml")
      # CIC parser/aggregation can disable secondary HP logic for single topology.
      # Render to Duo form before hashing for parity against main.
      actual_hash="$(
        perl -0pe '
          s/\$\{cic_secondary_enabled\}/1/g;
          s/^\s*const bool hp2_enabled = \(1 != 0\);\n\s*const float hp2_outside_c = hp2_enabled \? id\(hp2_outside_temp_cic\)\.state : NAN;/      const float hp2_outside_c = id(hp2_outside_temp_cic).state;/m;
          s/^\s*if \(1 != 0\) \{\n\s*publish_float_if_changed\(id\(hp2_outside_temp_cic\), NAN\);\n\s*\}/          publish_float_if_changed(id(hp2_outside_temp_cic), NAN);/m;
          s/if \(\(1 != 0\) && root\["hp2"\]\) \{/if (root["hp2"]) {/g;
        ' "${abs_path}" | shasum -a 256 | awk '{print $1}'
      )"
      ;;
    "openquatt/oq_supervisory_controlmode.yaml"|"openquatt/oq_heat_control.yaml")
      # Perf-map helper injection keeps runtime behavior but changes source shape.
      # Normalize injected helper and helper call names to compare with main.
      actual_hash="$(
        sed '/^[[:space:]]*${hp_perf_map_lambda_helpers}[[:space:]]*$/d' "${abs_path}" \
          | sed 's/oq_perf_interp_power_th_w/oq_perf::interp_power_th_w/g' \
          | sed 's/oq_perf_interp_power_el_w/oq_perf::interp_power_el_w/g' \
          | shasum -a 256 | awk '{print $1}'
      )"
      ;;
    *)
      actual_hash="$(shasum -a 256 "${abs_path}" | awk '{print $1}')"
      ;;
  esac
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
