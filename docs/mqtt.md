# MQTT integratie

MQTT in OpenQuatt is momenteel **experimenteel**.

De bedoeling is niet om Home Assistant te vervangen. Home Assistant blijft de primaire integratie via de native ESPHome API. MQTT is een compacte, publish-only exportlaag voor systemen zoals Node-RED, dashboards, logging, scripts en andere tooling die graag een vaste JSON-stroom leest.

## Wat doet MQTT wel?

- publiceert compacte status- en telemetry-snapshots;
- bewaart optioneel laatste snapshots via retained topics;
- laat je broker, gebruiker, wachtwoord, base topic en publish-profiel instellen via de web-app;
- biedt een aparte diagnostics-laag voor meer interne context als je die bewust inschakelt.

## Wat doet MQTT niet?

- geen Home Assistant discovery;
- geen entity mirror van alle ESPHome-entiteiten;
- geen command-interface in deze fase;
- geen vervanging van de native ESPHome API.

## Topics

De huidige basis is:

- `openquatt/status`
- `openquatt/schema`
- `openquatt/state`
- `openquatt/heat_pumps`
- `openquatt/diagnostics`

`status`, `schema`, `state` en `heat_pumps` zijn bedoeld als de compacte hoofdlaag. `diagnostics` is optioneel en zwaarder van aard.

## Voorbeeld JSON

Een typische hoofd-snapshot ziet er ongeveer zo uit:

```json
{
  "schema": "openquatt.state.v1",
  "control_mode": "CM3 - Heating",
  "strategy": "Power House",
  "heat_request": true,
  "cool_request": false,
  "demand_f": 8,
  "outside_temp_c": 4.8,
  "room_temp_c": 19.9,
  "room_setpoint_c": 20.0,
  "supply_temp_c": 31.2,
  "supply_target_c": 32.0,
  "flow_lph": 780,
  "total_power_input_w": 980,
  "total_heat_power_w": 4200,
  "cop": 4.3,
  "fault_active": false
}
```

De warmtepompdetails komen in een aparte snapshot:

```json
{
  "schema": "openquatt.heat_pumps.v1",
  "hp1": {
    "working_mode": 1,
    "working_mode_text": "Heating",
    "compressor_level": 5,
    "power_input_w": 490,
    "heat_power_w": 2100,
    "flow_lph": 390,
    "water_in_c": 29.6,
    "water_out_c": 31.4,
    "defrost": false,
    "fault_active": false
  },
  "hp2": {
    "working_mode": 1,
    "working_mode_text": "Heating",
    "compressor_level": 5,
    "power_input_w": 500,
    "heat_power_w": 2080,
    "flow_lph": 395,
    "water_in_c": 29.2,
    "water_out_c": 31.1,
    "defrost": false,
    "fault_active": false
  }
}
```

En de optionele diagnostics-laag kan extra interne context geven:

```json
{
  "schema": "openquatt.diagnostics.v1",
  "strategy_phase": "heat",
  "strategy_debug_state": "normal",
  "request_reason": "active_cm",
  "heating_debug_state": "target_following",
  "duo_optimizer_reason": "balanced_load",
  "flow_control_mode": "AUTO",
  "flow_mode": "selected",
  "flow_mismatch": false,
  "commissioning_status": "ready",
  "flow_autotune_status": "idle",
  "firmware_update_status": "idle",
  "firmware_update_progress": 0
}
```

## Publish-profielen

OpenQuatt ondersteunt vier profielen:

- `off`
- `essential`
- `standard`
- `diagnostic`

De basisregel is:

- `essential` publiceert alleen de hoofdlijn;
- `standard` voegt warmtepompdetails toe;
- `diagnostic` voegt de interne diagnostiek toe.

## Web-app configuratie

In de web-app stel je minimaal in:

- broker;
- poort;
- gebruikersnaam;
- wachtwoord;
- base topic;
- publish-profiel;
- retain snapshots;
- intervals per profiel.

MQTT start standaard uit. Pas na opslaan en expliciet inschakelen probeert OpenQuatt verbinding te maken.

## Waarom experimenteel?

Omdat deze laag bewust compact is gehouden en nog verder kan veranderen op basis van praktijkgebruik. Dat is beter dan doen alsof de interface al definitief is.

De focus ligt nu op:

- stabiliteit;
- beperkte berichtvolume;
- heldere JSON-contracten;
- veilige scheiding tussen telemetry en regeling.

## Verder lezen

- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
- [Problemen oplossen en afstellen](diagnose-en-afstelling.md)
- [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md)
