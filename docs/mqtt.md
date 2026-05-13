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
