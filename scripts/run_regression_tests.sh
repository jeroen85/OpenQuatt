#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="${ROOT_DIR}/tmp/regression"
CXX_BIN="${CXX:-c++}"

mkdir -p "${BUILD_DIR}"

compile_and_run() {
  local source_file="$1"
  local output_bin="$2"
  shift 2
  local extra_flags=("$@")
  local cmd=("${CXX_BIN}" -std=c++17 -Wall -Wextra -pedantic -I"${ROOT_DIR}")

  if [[ "$(uname -s)" == "Darwin" ]]; then
    SDKROOT="$(xcrun --show-sdk-path)"
    cmd+=(-isysroot "${SDKROOT}")
  fi

  if [[ ${#extra_flags[@]} -gt 0 ]]; then
    cmd+=("${extra_flags[@]}")
  fi

  cmd+=("${source_file}" -o "${output_bin}")
  "${cmd[@]}"

  "${output_bin}"
}

echo "[regression] control-logic golden scenarios"
compile_and_run \
  "${ROOT_DIR}/tests/regression/test_power_cap.cpp" \
  "${BUILD_DIR}/test_power_cap"

echo "[regression] topology constants (duo)"
compile_and_run \
  "${ROOT_DIR}/tests/regression/test_topology_constants.cpp" \
  "${BUILD_DIR}/test_topology_constants_duo" \
  -DOQ_TOPOLOGY_DUO=1

echo "[regression] topology constants (single)"
compile_and_run \
  "${ROOT_DIR}/tests/regression/test_topology_constants.cpp" \
  "${BUILD_DIR}/test_topology_constants_single" \
  -DOQ_TOPOLOGY_DUO=0
