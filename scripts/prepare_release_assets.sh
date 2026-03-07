#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 3 ]]; then
  echo "Usage: $0 <version> <base-url> <release-url>" >&2
  exit 64
fi

VERSION="$1"
BASE_URL="$2"
RELEASE_URL="$3"

mkdir -p dist

cp dist/openquatt-duo-waveshare/firmware.ota.bin dist/openquatt-duo-waveshare.firmware.ota.bin
cp dist/openquatt-duo-waveshare/firmware.factory.bin dist/openquatt-duo-waveshare.firmware.factory.bin
cp dist/openquatt-duo-heatpump-listener/firmware.ota.bin dist/openquatt-duo-heatpump-listener.firmware.ota.bin
cp dist/openquatt-duo-heatpump-listener/firmware.factory.bin dist/openquatt-duo-heatpump-listener.firmware.factory.bin
cp dist/openquatt-single-waveshare/firmware.ota.bin dist/openquatt-single-waveshare.firmware.ota.bin
cp dist/openquatt-single-waveshare/firmware.factory.bin dist/openquatt-single-waveshare.firmware.factory.bin
cp dist/openquatt-single-heatpump-listener/firmware.ota.bin dist/openquatt-single-heatpump-listener.firmware.ota.bin
cp dist/openquatt-single-heatpump-listener/firmware.factory.bin dist/openquatt-single-heatpump-listener.firmware.factory.bin

DUO_OTA_S3_BIN="dist/openquatt-duo-waveshare.firmware.ota.bin"
DUO_OTA_ESP32_BIN="dist/openquatt-duo-heatpump-listener.firmware.ota.bin"
SINGLE_OTA_S3_BIN="dist/openquatt-single-waveshare.firmware.ota.bin"
SINGLE_OTA_ESP32_BIN="dist/openquatt-single-heatpump-listener.firmware.ota.bin"

DUO_OTA_S3_MD5="$(md5sum "$DUO_OTA_S3_BIN" | awk '{print $1}')"
DUO_OTA_ESP32_MD5="$(md5sum "$DUO_OTA_ESP32_BIN" | awk '{print $1}')"
SINGLE_OTA_S3_MD5="$(md5sum "$SINGLE_OTA_S3_BIN" | awk '{print $1}')"
SINGLE_OTA_ESP32_MD5="$(md5sum "$SINGLE_OTA_ESP32_BIN" | awk '{print $1}')"

cat > openquatt-duo-ota.manifest.json <<EOF
{
  "name": "OpenQuatt Duo",
  "version": "${VERSION}",
  "builds": [
    {
      "chipFamily": "ESP32-S3",
      "ota": {
        "path": "${BASE_URL}/openquatt-duo-waveshare.firmware.ota.bin",
        "md5": "${DUO_OTA_S3_MD5}",
        "release_url": "${RELEASE_URL}",
        "summary": "OpenQuatt Duo Waveshare firmware ${VERSION}"
      }
    },
    {
      "chipFamily": "ESP32",
      "ota": {
        "path": "${BASE_URL}/openquatt-duo-heatpump-listener.firmware.ota.bin",
        "md5": "${DUO_OTA_ESP32_MD5}",
        "release_url": "${RELEASE_URL}",
        "summary": "OpenQuatt Duo Heatpump Listener firmware ${VERSION}"
      }
    }
  ]
}
EOF

cat > openquatt-single-ota.manifest.json <<EOF
{
  "name": "OpenQuatt Single",
  "version": "${VERSION}",
  "builds": [
    {
      "chipFamily": "ESP32-S3",
      "ota": {
        "path": "${BASE_URL}/openquatt-single-waveshare.firmware.ota.bin",
        "md5": "${SINGLE_OTA_S3_MD5}",
        "release_url": "${RELEASE_URL}",
        "summary": "OpenQuatt Single Waveshare firmware ${VERSION}"
      }
    },
    {
      "chipFamily": "ESP32",
      "ota": {
        "path": "${BASE_URL}/openquatt-single-heatpump-listener.firmware.ota.bin",
        "md5": "${SINGLE_OTA_ESP32_MD5}",
        "release_url": "${RELEASE_URL}",
        "summary": "OpenQuatt Single Heatpump Listener firmware ${VERSION}"
      }
    }
  ]
}
EOF
