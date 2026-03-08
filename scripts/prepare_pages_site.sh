#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "Usage: $0 <site-dir> <factory-bin-dir>" >&2
  exit 64
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE_DIR="$1"
FACTORY_DIR="$2"

FACTORY_FILES=(
  "openquatt-duo-waveshare.firmware.factory.bin"
  "openquatt-duo-heatpump-listener.firmware.factory.bin"
  "openquatt-single-waveshare.firmware.factory.bin"
  "openquatt-single-heatpump-listener.firmware.factory.bin"
)

rm -rf "${SITE_DIR}"
mkdir -p "${SITE_DIR}/firmware/main"

cp -R "${ROOT_DIR}/docs/." "${SITE_DIR}/"
python3 "${ROOT_DIR}/scripts/build_pages_docs.py" "${SITE_DIR}"
touch "${SITE_DIR}/.nojekyll"

for file in "${FACTORY_FILES[@]}"; do
  install -m 0644 "${FACTORY_DIR}/${file}" "${SITE_DIR}/firmware/main/${file}"
done
