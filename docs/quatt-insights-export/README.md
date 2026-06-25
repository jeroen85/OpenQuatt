# Quatt Insights Export

Voor historische Quatt CiC insights is Home Assistant de juiste plek om de cloud-koppeling te laten draaien.
Daarmee blijven Quatt-tokenbeheer, API-rate-limiting, JSON-normalisatie en bestandsuitvoer buiten de ESP.

De voorbeeldbestanden staan hier:

- [openquatt_quatt_insights_export.py](openquatt_quatt_insights_export.py): Pyscript-service die `quatt.get_cic_insights` aanroept en JSON/CSV exporteert.
- [openquatt_quatt_insights_export.yaml](openquatt_quatt_insights_export.yaml): Home Assistant script om de export handmatig te starten.

Benodigd:

- `home-assistant-quatt` met de action `quatt.get_cic_insights`.
- HACS Pyscript.
- Kopieer `openquatt_quatt_insights_export.py` naar `/config/pyscript/openquatt_quatt_insights_export.py`.
- Voeg de YAML toe als HA package.
- Gebruik je `scripts.yaml`, kopieer dan alleen het blok onder `script:`.

Er is geen automation nodig voor een eenmalige import.

Pyscript-instellingen bij het aanmaken/configureren van de integratie:

- `Allow All Imports?`: aanzetten.
- `Access hass as a global variable?`: uit laten.
- `Use legacy decorators?`: uit laten.

`Allow All Imports?` is nodig omdat de exporter Python modules zoals `json`, `csv` en `os` gebruikt om de importbestanden te schrijven.

Waarom Pyscript en niet de ingebouwde `python_script` integratie?

- De Quatt-voorbeelden gebruiken `python_script` als kleine helper om een HA-sensor te vullen met `insights_json`.
- Dat is prima voor ApexCharts binnen Home Assistant.
- Deze OpenQuatt-export schrijft echte JSON/CSV-bestanden naar `/config/www/openquatt-insights`.
- Daarvoor is Pyscript praktischer, omdat de ingebouwde `python_script` integratie sandboxed is en geen normale Python imports ondersteunt.

Als het doel alleen is om een HA-sensor te vullen, kan dezelfde aanpak als `examples/set_cic_insights.py` gebruikt worden.
Voor een importbestand voor OpenQuatt is de Pyscript-variant bedoeld.

De Pyscript-service schrijft standaard naar:

- `/config/www/openquatt-insights/openquatt-quatt-insights-daily-<from>-<to>.json`
- `/config/www/openquatt-insights/openquatt-quatt-insights-daily-<from>-<to>.csv`

Via Home Assistant zijn die bestanden bereikbaar als:

- `/local/openquatt-insights/openquatt-quatt-insights-daily-<from>-<to>.json`
- `/local/openquatt-insights/openquatt-quatt-insights-daily-<from>-<to>.csv`

Handmatig aanroepen kan via Developer Tools -> Actions:

```yaml
action: pyscript.openquatt_export_quatt_insights
data:
  from_date: "2024-01-01"
  to_date: "2024-01-31"
  timeframe: month
  daily: true
  daily_source: month
  advanced_insights: true
  output_dir: /config/www/openquatt-insights
  base_name: openquatt-quatt-insights-daily-2024-01-01-2024-01-31
  include_raw: false
  day_delay_ms: 750
  local_timezone: Europe/Amsterdam
```

Of via het voorbeeldscript:

```yaml
action: script.openquatt_export_quatt_insights_daily
data:
  from_date: "2024-01-01"
  to_date: "2024-01-31"
```

Als `to_date` leeg blijft, gebruikt het voorbeeldscript vandaag.

De exporter haalt standaard per maand op met:

```yaml
timeframe: month
advanced_insights: true
```

De Quatt month-response bevat dagregels in `graph`, plus dagtemperaturen in `outsideTemperatureGraph`.
De exporter zet die maandresponse om naar losse `days` in één OpenQuatt JSON-bestand.

Voor elke maand wordt dus één `quatt.get_cic_insights` call gedaan.
Met `day_delay_ms` blijft er standaard 750 ms tussen de maandcalls.
Een grote periode blijft daardoor relatief licht voor de Quatt API.

De output is één JSON-bestand met alle data per dag:

```json
{
  "schema": "openquatt.quatt_insights_daily.v1",
  "query": {
    "timeframe": "month",
    "daily_source": "month"
  },
  "missing_days": [],
  "days": [
    {
      "date": "2024-01-01",
      "energy_hp_electric": 0,
      "energy_hp_heat": 0,
      "energy_boiler_heat": 0
    }
  ]
}
```

Per dag bevat de JSON:

- `date`: de opgevraagde dag.
- de minimale dagwaarden uit de Quatt `graph`.
- `raw_sample`: optioneel, alleen als `include_raw: true` wordt meegegeven.

Belangrijke veldnamen en units:

- `energy_hp_electric`: elektriciteitsverbruik warmtepomp in Wh.
- `energy_hp_heat`: warmteproductie warmtepomp in Wh.
- `energy_boiler_heat`: warmteproductie ketel in Wh.

`missing_days` bevat dagen in de gevraagde periode waarvoor Quatt geen dagregel teruggeeft.
Toekomstige dagen worden niet als ontbrekend gemarkeerd.

De CSV bevat dezelfde dagregels als platte tabel.
Een toekomstige OpenQuatt-import kan eerst dit JSON-schema ondersteunen; CSV blijft vooral handig voor analyse en debugging.
