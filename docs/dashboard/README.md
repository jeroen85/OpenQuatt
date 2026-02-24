# OpenQuatt Home Assistant Dashboards

This folder contains four dashboard variants:

- `openquatt_ha_dashboard_nl.yaml`: Dutch UI labels/text (duo setup).
- `openquatt_ha_dashboard_en.yaml`: English UI labels/text (duo setup).
- `openquatt_ha_dashboard_nl_single.yaml`: Dutch UI labels/text (single setup).
- `openquatt_ha_dashboard_en_single.yaml`: English UI labels/text (single setup).

## Which One To Use

- Choose setup first:
  - `duo` -> use `openquatt_ha_dashboard_nl.yaml` or `openquatt_ha_dashboard_en.yaml`
  - `single` -> use `openquatt_ha_dashboard_nl_single.yaml` or `openquatt_ha_dashboard_en_single.yaml`
- Then choose language:
  - `NL` for Dutch UI labels
  - `EN` for English UI labels

All dashboards target OpenQuatt entities for their matching setup.

## Home Assistant Installation

1. Open Home Assistant.
2. Go to **Settings -> Dashboards**.
3. Create a new dashboard or open an existing one.
4. Open the dashboard menu (**three dots**) and choose **Raw configuration editor**.
5. Replace or paste the YAML from either:
   - `docs/dashboard/openquatt_ha_dashboard_nl.yaml`
   - `docs/dashboard/openquatt_ha_dashboard_en.yaml`
   - `docs/dashboard/openquatt_ha_dashboard_nl_single.yaml`
   - `docs/dashboard/openquatt_ha_dashboard_en_single.yaml`
6. Save and reload the dashboard.

## Notes

- These YAML files assume the OpenQuatt entity IDs from this repository.
- If entities are renamed in ESPHome, update dashboard entity references accordingly.
- Keep dashboard changes in this folder, so docs and repo history stay aligned.
