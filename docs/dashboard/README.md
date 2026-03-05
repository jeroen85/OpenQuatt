# OpenQuatt Home Assistant Dashboards

This folder contains dashboard variants per topology/language:

- `openquatt_ha_dashboard_duo_nl.yaml`: Dutch UI labels/text (Duo).
- `openquatt_ha_dashboard_duo_en.yaml`: English UI labels/text (Duo).
- `openquatt_ha_dashboard_single_nl.yaml`: Dutch UI labels/text (Single).
- `openquatt_ha_dashboard_single_en.yaml`: English UI labels/text (Single).
- `openquatt_ha_dynamic_sources_package.yaml`: optional HA package for dynamic source proxies.

## Which One To Use

- Use a `duo` file for Duo firmware entrypoints.
- Use a `single` file for Single firmware entrypoints.
- Choose `NL` or `EN` based on preferred UI language.

## Home Assistant Installation

1. Open Home Assistant.
2. Go to **Settings -> Dashboards**.
3. Create a new dashboard or open an existing one.
4. Open the dashboard menu (**three dots**) and choose **Raw configuration editor**.
5. Replace or paste the YAML from either:
   - `docs/dashboard/openquatt_ha_dashboard_duo_nl.yaml`
   - `docs/dashboard/openquatt_ha_dashboard_duo_en.yaml`
   - `docs/dashboard/openquatt_ha_dashboard_single_nl.yaml`
   - `docs/dashboard/openquatt_ha_dashboard_single_en.yaml`
6. Save and reload the dashboard.

## Optional Dynamic Source Proxies (HA package)

If you want users to choose source entities at runtime, use:

- `docs/dashboard/openquatt_ha_dynamic_sources_package.yaml`

This package creates:

- `input_text.openquatt_source_outdoor_temperature`
- `input_text.openquatt_source_room_setpoint`
- `input_text.openquatt_source_room_temperature`
- proxy sensors consumed by OpenQuatt ESPHome:
  - `sensor.openquatt_ext_outdoor_temperature`
  - `sensor.openquatt_ext_room_setpoint`
  - `sensor.openquatt_ext_room_temperature`

Install in Home Assistant:

1. Enable packages in `/config/configuration.yaml`:
   - `homeassistant:`
   - `  packages: !include_dir_named packages`
2. Copy the package file to `/config/packages/openquatt_dynamic_sources.yaml`.
3. Reload Template Entities (or restart HA).

## Notes

- These YAML files assume the OpenQuatt entity IDs from this repository.
- If entities are renamed in ESPHome, update dashboard entity references accordingly.
- Keep dashboard changes in this folder, so docs and repo history stay aligned.
