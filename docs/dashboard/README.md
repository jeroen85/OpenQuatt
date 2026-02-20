# OpenQuatt Home Assistant Dashboards

This folder contains two dashboard variants:

- `openquatt_ha_dashboard_nl.yaml`: Dutch UI labels/text.
- `openquatt_ha_dashboard_en.yaml`: English UI labels/text.

## Which One To Use

- Choose `NL` if your Home Assistant UI and operations are mainly Dutch.
- Choose `EN` if you prefer an English dashboard for operators or public sharing.

Both dashboards target the same OpenQuatt entities.

## Home Assistant Installation

1. Open Home Assistant.
2. Go to **Settings -> Dashboards**.
3. Create a new dashboard or open an existing one.
4. Open the dashboard menu (**three dots**) and choose **Raw configuration editor**.
5. Replace or paste the YAML from either:
   - `docs/dashboard/openquatt_ha_dashboard_nl.yaml`
   - `docs/dashboard/openquatt_ha_dashboard_en.yaml`
6. Save and reload the dashboard.

## Notes

- These YAML files assume the OpenQuatt entity IDs from this repository.
- If entities are renamed in ESPHome, update dashboard entity references accordingly.
- Keep dashboard changes in this folder, so docs and repo history stay aligned.
