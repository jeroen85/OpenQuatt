# Dashboard installeren

In deze map staan de dashboardbestanden voor OpenQuatt.

## Welk bestand kies je?

Kies het bestand dat past bij jouw opstelling en taal:

- `openquatt_ha_dashboard_duo_nl.yaml`
- `openquatt_ha_dashboard_duo_en.yaml`
- `openquatt_ha_dashboard_single_nl.yaml`
- `openquatt_ha_dashboard_single_en.yaml`

Gebruik `duo` voor Duo en `single` voor Single. Kies daarna `nl` of `en` op basis van je voorkeurstaal.

## Importeren in Home Assistant

1. Open Home Assistant.
2. Ga naar **Instellingen -> Dashboards**.
3. Maak een nieuw dashboard aan of open een bestaand dashboard.
4. Open het menu met de drie puntjes.
5. Kies **Raw configuration editor**.
6. Plak de inhoud van het gekozen YAML-bestand.
7. Sla op en laad het dashboard opnieuw.

## Wat als importeren mislukt?

- Controleer of je echt het juiste `single`- of `duo`-bestand hebt.
- Controleer of je de volledige YAML hebt geplakt.
- Controleer of de OpenQuatt-entiteiten al in Home Assistant bestaan.

## Optioneel: dynamische bronselectie via Home Assistant

Gebruik `openquatt_ha_dynamic_sources_package.yaml` alleen als je tijdens runtime zelf Home Assistant-bronnen wilt kunnen aanwijzen zonder opnieuw te flashen.

Dat pakket maakt extra helper-entiteiten aan, zoals:

- `input_text.openquatt_source_outdoor_temperature`
- `input_text.openquatt_source_room_setpoint`
- `input_text.openquatt_source_room_temperature`

Installatie in Home Assistant:

1. Zet packages aan in `/config/configuration.yaml`.
2. Kopieer het pakket naar `/config/packages/openquatt_dynamic_sources.yaml`.
3. Herlaad de template-entiteiten of herstart Home Assistant.

## Belangrijk om te onthouden

- De dashboards gaan uit van de entiteitsnamen uit deze repository.
- Als je zelf entiteitsnamen wijzigt, moet je ook het dashboard aanpassen.
- Het NL-dashboard is voor de meeste gebruikers de logischste start.
