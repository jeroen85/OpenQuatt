#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="${ROOT_DIR}/tmp/regression"
BIN="${BUILD_DIR}/test_power_cap"
CXX_BIN="${CXX:-c++}"

mkdir -p "${BUILD_DIR}"

if [[ "$(uname -s)" == "Darwin" ]]; then
  SDKROOT="$(xcrun --show-sdk-path)"
  "${CXX_BIN}" -std=c++17 -Wall -Wextra -pedantic \
    -isysroot "${SDKROOT}" \
    -I"${ROOT_DIR}" \
    "${ROOT_DIR}/tests/regression/test_power_cap.cpp" \
    -o "${BIN}"
else
  "${CXX_BIN}" -std=c++17 -Wall -Wextra -pedantic \
    -I"${ROOT_DIR}" \
    "${ROOT_DIR}/tests/regression/test_power_cap.cpp" \
    -o "${BIN}"
fi

"${BIN}"
