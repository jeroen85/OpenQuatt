#!/usr/bin/env bash
set -euo pipefail

ALL_CONFIGS=(
  "openquatt_duo_waveshare.yaml"
  "openquatt_duo_heatpump_listener.yaml"
  "openquatt_single_waveshare.yaml"
  "openquatt_single_heatpump_listener.yaml"
)

DUO_CONFIGS=(
  "openquatt_duo_waveshare.yaml"
  "openquatt_duo_heatpump_listener.yaml"
)

SINGLE_CONFIGS=(
  "openquatt_single_waveshare.yaml"
  "openquatt_single_heatpump_listener.yaml"
)

WAVESHARE_CONFIGS=(
  "openquatt_duo_waveshare.yaml"
  "openquatt_single_waveshare.yaml"
)

HEATPUMP_LISTENER_CONFIGS=(
  "openquatt_duo_heatpump_listener.yaml"
  "openquatt_single_heatpump_listener.yaml"
)

MODE="${1:-quick}"
QUICK_CONFIG="${OQ_QUICK_CONFIG:-openquatt_duo_waveshare.yaml}"

usage() {
  cat <<'USAGE'
Gebruik:
  ./scripts/validate_local.sh [quick|changed|full]

Modes:
  quick    Pre-checks + config-check voor alle targets + compile van 1 target.
  changed  Pre-checks + alleen impacted targets (obv lokale git wijzigingen).
  full     Pre-checks + config-check + compile voor alle 4 targets.

Optionele env vars:
  OQ_QUICK_CONFIG   Compile-target voor quick mode (default: openquatt_duo_waveshare.yaml)
  OQ_CHANGED_FILES  Override changed-bestanden (spatie- of newline-gescheiden)
USAGE
}

array_contains() {
  local needle="$1"
  shift
  local item
  for item in "$@"; do
    if [[ "$item" == "$needle" ]]; then
      return 0
    fi
  done
  return 1
}

append_unique() {
  local var_name="$1"
  local value="$2"
  eval "local current=(\"\${${var_name}[@]-}\")"
  if array_contains "$value" "${current[@]}"; then
    return 0
  fi
  eval "${var_name}+=(\"${value}\")"
}

add_configs() {
  local target_var="$1"
  shift
  local cfg
  for cfg in "$@"; do
    append_unique "${target_var}" "${cfg}"
  done
}

collect_changed_files() {
  if [[ -n "${OQ_CHANGED_FILES:-}" ]]; then
    printf '%s\n' "${OQ_CHANGED_FILES}" | tr ' ' '\n' | sed '/^$/d' | sort -u
    return 0
  fi

  {
    git diff --name-only
    git diff --cached --name-only
    git ls-files --others --exclude-standard
  } | sed '/^$/d' | sort -u
}

select_changed_compile_configs() {
  local changed_list="$1"
  local unknown_firmware_file=0
  local file

  while IFS= read -r file; do
    [[ -z "$file" ]] && continue
    case "$file" in
      README.md|docs/*|.github/*|LICENSE|tmp/*|scripts/check_setup_isolation.py|scripts/check_docs_consistency.py|scripts/validate_local.sh)
        ;;
      openquatt.yaml|openquatt_duo_waveshare.yaml)
        append_unique COMPILE_CONFIGS "openquatt_duo_waveshare.yaml"
        ;;
      openquatt_duo_heatpump_listener.yaml)
        append_unique COMPILE_CONFIGS "openquatt_duo_heatpump_listener.yaml"
        ;;
      openquatt_single_waveshare.yaml)
        append_unique COMPILE_CONFIGS "openquatt_single_waveshare.yaml"
        ;;
      openquatt_single_heatpump_listener.yaml)
        append_unique COMPILE_CONFIGS "openquatt_single_heatpump_listener.yaml"
        ;;
      openquatt_base.yaml|openquatt/oq_packages_duo.yaml|openquatt/oq_heat_control_duo_policy.yaml|openquatt/oq_debug_testing_duo.yaml)
        add_configs COMPILE_CONFIGS "${DUO_CONFIGS[@]}"
        ;;
      openquatt_base_single.yaml|openquatt/oq_packages_single.yaml|openquatt/oq_heat_control_single_policy.yaml)
        add_configs COMPILE_CONFIGS "${SINGLE_CONFIGS[@]}"
        ;;
      openquatt/profiles/oq_substitutions_waveshare.yaml)
        add_configs COMPILE_CONFIGS "${WAVESHARE_CONFIGS[@]}"
        ;;
      openquatt/profiles/oq_substitutions_heatpump_listener.yaml)
        add_configs COMPILE_CONFIGS "${HEATPUMP_LISTENER_CONFIGS[@]}"
        ;;
      openquatt/oq_packages_shared_pre_policy.yaml|openquatt/oq_packages_shared_post_policy.yaml|openquatt/oq_packages_shared_tail.yaml|openquatt/oq_substitutions_common.yaml|openquatt/includes/*|openquatt/oq_*.yaml|openquatt/oq_HP_io.yaml)
        add_configs COMPILE_CONFIGS "${ALL_CONFIGS[@]}"
        ;;
      *)
        unknown_firmware_file=1
        ;;
    esac
  done <<< "${changed_list}"

  if [[ "${unknown_firmware_file}" -eq 1 ]]; then
    add_configs COMPILE_CONFIGS "${ALL_CONFIGS[@]}"
  fi

  local ordered=()
  local cfg
  for cfg in "${ALL_CONFIGS[@]}"; do
    if array_contains "$cfg" "${COMPILE_CONFIGS[@]-}"; then
      ordered+=("$cfg")
    fi
  done
  if [[ "${#ordered[@]}" -eq 0 ]]; then
    COMPILE_CONFIGS=()
  else
    COMPILE_CONFIGS=("${ordered[@]}")
  fi
}

if [[ "${MODE}" == "--help" || "${MODE}" == "-h" ]]; then
  usage
  exit 0
fi

if [[ "$#" -gt 1 ]]; then
  echo "Error: te veel argumenten." >&2
  usage
  exit 2
fi

if [[ "${MODE}" != "quick" && "${MODE}" != "changed" && "${MODE}" != "full" ]]; then
  echo "Error: ongeldige mode '${MODE}'." >&2
  usage
  exit 2
fi

if ! array_contains "${QUICK_CONFIG}" "${ALL_CONFIGS[@]}"; then
  echo "Error: OQ_QUICK_CONFIG='${QUICK_CONFIG}' is geen ondersteunde config." >&2
  exit 2
fi

if ! command -v esphome >/dev/null 2>&1; then
  echo "Error: 'esphome' is niet gevonden in PATH." >&2
  echo "Installeer ESPHome lokaal en probeer opnieuw." >&2
  exit 127
fi

echo "[mode] ${MODE}"

echo "[pre] Controleren setup-isolatie"
python3 scripts/check_setup_isolation.py

echo "[pre] Controleren docs-consistentie"
python3 scripts/check_docs_consistency.py

VALIDATE_CONFIGS=()
COMPILE_CONFIGS=()

if [[ "${MODE}" == "full" ]]; then
  VALIDATE_CONFIGS=("${ALL_CONFIGS[@]}")
  COMPILE_CONFIGS=("${ALL_CONFIGS[@]}")
elif [[ "${MODE}" == "quick" ]]; then
  VALIDATE_CONFIGS=("${ALL_CONFIGS[@]}")
  COMPILE_CONFIGS=("${QUICK_CONFIG}")
else
  CHANGED_FILES="$(collect_changed_files)"
  if [[ -z "${CHANGED_FILES}" ]]; then
    echo "[changed] Geen lokale git-wijzigingen gevonden."
  else
    echo "[changed] Gewijzigde bestanden:"
    while IFS= read -r file; do
      [[ -z "${file}" ]] && continue
      echo "  - ${file}"
    done <<< "${CHANGED_FILES}"
  fi
  select_changed_compile_configs "${CHANGED_FILES}"
  if [[ "${#COMPILE_CONFIGS[@]}" -eq 0 ]]; then
    VALIDATE_CONFIGS=()
  else
    VALIDATE_CONFIGS=("${COMPILE_CONFIGS[@]}")
  fi
fi

if [[ "${#VALIDATE_CONFIGS[@]}" -eq 0 ]]; then
  echo "[info] Geen config-validaties nodig voor deze mode/wijzigingen."
else
  total="${#VALIDATE_CONFIGS[@]}"
  for i in "${!VALIDATE_CONFIGS[@]}"; do
    cfg="${VALIDATE_CONFIGS[$i]}"
    n=$((i + 1))
    echo "[${n}/${total}] Valideren: esphome config ${cfg}"
    esphome config "${cfg}"
  done
fi

if [[ "${#COMPILE_CONFIGS[@]}" -eq 0 ]]; then
  echo "[info] Geen firmware-relevante wijzigingen; compile overgeslagen."
  echo "Klaar: pre-checks en selectieve validatie succesvol."
  exit 0
fi

total="${#COMPILE_CONFIGS[@]}"
for i in "${!COMPILE_CONFIGS[@]}"; do
  cfg="${COMPILE_CONFIGS[$i]}"
  n=$((i + 1))
  echo "[${n}/${total}] Compileren: esphome compile ${cfg}"
  esphome compile "${cfg}"
done

echo "Klaar: validatie en compile succesvol (${MODE})."
