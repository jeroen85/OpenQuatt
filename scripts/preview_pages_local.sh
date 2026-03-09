#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

FACTORY_FILES=(
  "openquatt-duo-waveshare.firmware.factory.bin"
  "openquatt-duo-heatpump-listener.firmware.factory.bin"
  "openquatt-single-waveshare.firmware.factory.bin"
  "openquatt-single-heatpump-listener.firmware.factory.bin"
)

PORT=8000
HOST="127.0.0.1"
FIRMWARE_DIR=""
KEEP_TMP=0

usage() {
  cat <<EOF
Usage: $0 [--port PORT] [--host HOST] [--firmware-dir DIR] [--keep]

Build a local GitHub Pages preview and serve it over HTTP.

Options:
  --port PORT          HTTP port to use (default: 8000)
  --host HOST          Bind host for python http.server (default: 127.0.0.1)
  --firmware-dir DIR   Directory with real *.firmware.factory.bin files
  --keep               Keep the temporary preview directory after exit
  -h, --help           Show this help

Without --firmware-dir the script creates placeholder firmware files, which is
enough to test layout, navigation and generated HTML, but not actual flashing.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --port)
      [[ $# -ge 2 ]] || { echo "Missing value for --port" >&2; exit 64; }
      PORT="$2"
      shift 2
      ;;
    --host)
      [[ $# -ge 2 ]] || { echo "Missing value for --host" >&2; exit 64; }
      HOST="$2"
      shift 2
      ;;
    --firmware-dir)
      [[ $# -ge 2 ]] || { echo "Missing value for --firmware-dir" >&2; exit 64; }
      FIRMWARE_DIR="$2"
      shift 2
      ;;
    --keep)
      KEEP_TMP=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 64
      ;;
  esac
done

TMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/openquatt-pages-preview.XXXXXX")"
SITE_DIR="${TMP_DIR}/site"
WORK_FIRMWARE_DIR="${TMP_DIR}/firmware"

cleanup() {
  if [[ ${KEEP_TMP} -eq 0 ]]; then
    rm -rf "${TMP_DIR}"
  else
    echo "Preview directory kept at: ${TMP_DIR}"
  fi
}
trap cleanup EXIT

mkdir -p "${WORK_FIRMWARE_DIR}"

if [[ -n "${FIRMWARE_DIR}" ]]; then
  if [[ ! -d "${FIRMWARE_DIR}" ]]; then
    echo "Firmware directory does not exist: ${FIRMWARE_DIR}" >&2
    exit 66
  fi
  for file in "${FACTORY_FILES[@]}"; do
    if [[ ! -f "${FIRMWARE_DIR}/${file}" ]]; then
      echo "Missing firmware file: ${FIRMWARE_DIR}/${file}" >&2
      exit 66
    fi
    install -m 0644 "${FIRMWARE_DIR}/${file}" "${WORK_FIRMWARE_DIR}/${file}"
  done
else
  for file in "${FACTORY_FILES[@]}"; do
    : > "${WORK_FIRMWARE_DIR}/${file}"
  done
fi

"${ROOT_DIR}/scripts/prepare_pages_site.sh" "${SITE_DIR}" "${WORK_FIRMWARE_DIR}"

VERSION_LABEL="$(
  git -C "${ROOT_DIR}" describe --tags --always --dirty 2>/dev/null || echo "local-preview"
)"

cat > "${SITE_DIR}/firmware/main/version.json" <<EOF
{
  "version": "${VERSION_LABEL}",
  "release_url": "https://github.com/jeroen85/OpenQuatt/releases/latest"
}
EOF

echo "Local Pages preview ready."
echo "Preview directory: ${SITE_DIR}"
echo "Open:"
echo "  http://${HOST}:${PORT}/"
echo "  http://${HOST}:${PORT}/documentatie.html"
echo "  http://${HOST}:${PORT}/install/index.html"
if [[ -z "${FIRMWARE_DIR}" ]]; then
  echo
  echo "Using placeholder firmware binaries."
  echo "Use --firmware-dir <dir> if you want to test with real factory images."
fi
echo
echo "Stop with Ctrl+C."

exec python3 -m http.server "${PORT}" --bind "${HOST}" --directory "${SITE_DIR}"
