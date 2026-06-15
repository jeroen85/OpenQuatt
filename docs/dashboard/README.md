# Dashboard installeren

In deze map staan de dashboardbestanden voor OpenQuatt in Home Assistant.

## Welk bestand kies je?

Kies het bestand dat past bij je opstelling en voorkeurstaal:

- `openquatt_ha_dashboard_duo_nl.yaml`
- `openquatt_ha_dashboard_duo_en.yaml`
- `openquatt_ha_dashboard_single_nl.yaml`
- `openquatt_ha_dashboard_single_en.yaml`

Gebruik `duo` voor Duo en `single` voor Single. Kies daarna `nl` of `en`.

## Importeren in Home Assistant

> [!IMPORTANT]
> Selecteer bij het toevoegen van OpenQuatt nog geen Home Assistant-area. Sinds Home Assistant 2026.6 kan de area tijdens de eerste aanmaak onderdeel worden van de `entity_id`, bijvoorbeeld `sensor.zolder_openquatt_flow`. Deze dashboards gebruiken de vaste vorm `sensor.openquatt_...`. Laat de area daarom eerst leeg, wacht tot alle OpenQuatt-entiteiten zijn aangemaakt en ken daarna pas de area toe. Home Assistant wijzigt de bestaande entity-ID's dan niet meer.

1. Open Home Assistant.
2. Ga naar **Instellingen -> Dashboards**.
3. Maak een nieuw dashboard aan of open een bestaand dashboard.
4. Open het menu met de drie puntjes.
5. Kies **Raw configuration editor**.
6. Plak de inhoud van het gekozen YAML-bestand.
7. Sla op en laad het dashboard opnieuw.

## Bij importproblemen

- Controleer of je echt het juiste `single`- of `duo`-bestand hebt.
- Controleer of je de volledige YAML hebt geplakt.
- Controleer of de OpenQuatt-entiteiten al in Home Assistant bestaan.
- Controleer of de entity-ID's beginnen met `openquatt_` en niet met een area-prefix zoals `zolder_openquatt_`.

### Area was al geselecteerd

Als Home Assistant de area al in de entity-ID's heeft verwerkt, zijn er twee herstelroutes:

1. Hernoem de betrokken entity-ID's in Home Assistant en verwijder alleen de area-prefix. Wijzig bijvoorbeeld `sensor.zolder_openquatt_flow` in `sensor.openquatt_flow`. De area zelf mag daarna toegewezen blijven.
2. Is dit nog een verse installatie zonder gebruikte historie of automatiseringen, verwijder OpenQuatt dan uit Home Assistant en voeg het opnieuw toe zonder area. Wacht tot de entiteiten bestaan en wijs daarna de area toe.

Pas niet de dashboard-YAML aan naar een specifieke area. Zo'n dashboard werkt dan alleen voor die ene Home Assistant-installatie.

## Optioneel: dynamische bronselectie via Home Assistant

Gebruik `openquatt_ha_dynamic_sources_package.yaml` alleen als je tijdens runtime zelf Home Assistant-bronnen wilt kunnen aanwijzen zonder opnieuw te flashen.

Dat pakket maakt extra helper-entiteiten aan, zoals:

- `input_text.openquatt_source_outdoor_temperature`
- `input_text.openquatt_source_water_supply_temperature`
- `input_text.openquatt_source_room_setpoint`
- `input_text.openquatt_source_room_temperature`
- `input_text.openquatt_source_heating_enable`
- `input_text.openquatt_source_cooling_enable`

Installatie in Home Assistant:

1. Zet packages aan in `/config/configuration.yaml`.
2. Kopieer het pakket naar `/config/packages/openquatt_dynamic_sources.yaml`.
3. Herlaad de template-entiteiten of herstart Home Assistant.

Vul in de helpers de entiteit in die je wilt gebruiken. Een gewone sensor ziet er zo uit:

```text
sensor.buitentemperatuur
```

Als de waarde in een attribuut van een entiteit zit, gebruik je:

```text
climate.woonkamer|current_temperature
```

De algemene dynamische bronnen publiceren stabiele proxy-entiteiten, bijvoorbeeld `sensor.openquatt_ext_outdoor_temperature`, `binary_sensor.openquatt_ext_heating_enable` en `binary_sensor.openquatt_ext_cooling_enable`. OpenQuatt kan die vervolgens als Home Assistant-bron gebruiken.

## Optioneel: dynamische koelbronnen via Home Assistant

Gebruik `openquatt_ha_dynamic_cooling_package.yaml` als je voor koeling een of meer dauwpuntbronnen vanuit Home Assistant wilt gebruiken.

Dit pakket is vooral nuttig als:

- je in meerdere kamers wilt koelen;
- je per kamer een eigen dauwpunt, temperatuur of luchtvochtigheid hebt;
- je OpenQuatt het hoogste geldige dauwpunt wilt laten gebruiken;
- je dauwpuntbronnen wilt aanpassen zonder opnieuw te flashen.

Installatie in Home Assistant:

1. Zet packages aan in `/config/configuration.yaml`.
2. Kopieer het pakket naar `/config/packages/openquatt_dynamic_cooling.yaml`.
3. Herlaad de template-entiteiten of herstart Home Assistant.
4. Zet `input_number.openquatt_cooling_room_count` op het aantal kamers dat je wilt gebruiken.
5. Vul per kamer de bronhelpers in.

Per kamer heb je twee keuzes.

Gebruik bij voorkeur een directe dauwpuntentity:

```text
sensor.woonkamer_dauwpunt
```

Vul die waarde in bij `input_text.openquatt_source_cooling_room_1_dew_point`.

Heb je geen directe dauwpuntentity, gebruik dan temperatuur plus relatieve luchtvochtigheid. Vul bijvoorbeeld `sensor.woonkamer_temperatuur` in bij `input_text.openquatt_source_cooling_room_1_temperature` en `sensor.woonkamer_luchtvochtigheid` bij `input_text.openquatt_source_cooling_room_1_humidity`:

```text
sensor.woonkamer_temperatuur
sensor.woonkamer_luchtvochtigheid
```

Ook hier mag een attribuut:

```text
climate.woonkamer|current_temperature
climate.woonkamer|current_humidity
```

Het pakket publiceert daarna:

- `sensor.openquatt_ext_cooling_dew_point`
- `binary_sensor.openquatt_ext_cooling_dew_point_valid`
- `sensor.openquatt_ha_cooling_room_1_dew_point_effective` tot en met room 6

OpenQuatt gebruikt het hoogste geldige dauwpunt als veilige grens. Als er geen geldige dauwpuntbron is, blijft koeling standaard geblokkeerd tenzij je in OpenQuatt bewust de fallback zonder dauwpunt toestaat.

## Belangrijk om te onthouden

- De dashboards gaan uit van de entiteitsnamen uit deze repository.
- Ken de Home Assistant-area pas toe nadat de OpenQuatt-entiteiten zijn aangemaakt.
- Als je zelf entiteitsnamen wijzigt, moet je ook het dashboard aanpassen.
- Het Nederlandstalige dashboard is voor de meeste gebruikers de beste start.
- De dynamische bronpakketten zijn optioneel. Zonder package werken de normale OpenQuatt-entiteiten en dashboards nog steeds.
