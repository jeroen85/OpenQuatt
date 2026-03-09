# OpenQuatt

<img src="docs/assets/openquatt_logo.svg" alt="OpenQuatt logo" width="400" />

OpenQuatt is ESPHome-firmware voor Quatt Single- en Duo-installaties. Het project geeft je meer inzicht, meer regie en een beter uitleesbaar Home Assistant-dashboard bovenop de bestaande Quatt-hardware.

De publieksdocumentatie wordt momenteel herschreven naar duidelijk Nederlands. Deze README is daarom bewust kort en taakgericht opgezet.

> [!WARNING]
> Dit project zit nog in een experimentele fase. Gebruik het bewust en test wijzigingen stap voor stap.

## Wat is OpenQuatt?

OpenQuatt is bedoeld voor gebruikers van een Quatt Single of Quatt Duo die:

- meer inzicht willen in wat de installatie doet;
- een duidelijk Home Assistant-dashboard willen;
- meer grip willen op gedrag, metingen en instellingen;
- willen kunnen kiezen uit de twee ondersteunde OpenQuatt-hardwareprofielen.

Je hoeft voor de eerste installatie niet eerst alle technische achtergronddocumenten te lezen. De hoofdroute is: installeren, koppelen aan Home Assistant en daarna pas verdiepen waar nodig.

## Ondersteunde combinaties

OpenQuatt ondersteunt momenteel deze Quatt-opstellingen en hardwarevarianten.

Quatt-opstellingen (V1 en V1.5):

- Single
- Duo

Ondersteunde hardware:

- Waveshare ESP32-S3-Relay-1CH
- Heatpump Listener

Elke combinatie van bovenstaande Quatt-opstellingen en hardware wordt ondersteund:

- Single + Waveshare ESP32-S3-Relay-1CH
- Single + Heatpump Listener
- Duo + Waveshare ESP32-S3-Relay-1CH
- Duo + Heatpump Listener

## Snel starten

1. Open de [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/).
2. Kies exact de combinatie die past bij jouw installatie en hardware.
3. Flash de firmware via USB in Chrome of Edge.
4. Stel wifi in via de browserflow of via het fallback access point `OpenQuatt` met wachtwoord `openquatt`.
5. Voeg het apparaat toe in Home Assistant.
6. Importeer het dashboard dat past bij jouw taal en opstelling:
   - Duo NL: [docs/dashboard/openquatt_ha_dashboard_duo_nl.yaml](docs/dashboard/openquatt_ha_dashboard_duo_nl.yaml)
   - Duo EN: [docs/dashboard/openquatt_ha_dashboard_duo_en.yaml](docs/dashboard/openquatt_ha_dashboard_duo_en.yaml)
   - Single NL: [docs/dashboard/openquatt_ha_dashboard_single_nl.yaml](docs/dashboard/openquatt_ha_dashboard_single_nl.yaml)
   - Single EN: [docs/dashboard/openquatt_ha_dashboard_single_en.yaml](docs/dashboard/openquatt_ha_dashboard_single_en.yaml)

Alleen de nieuwste stabiele eerste-installatiebestanden worden standaard via de installer aangeboden. Wil je lokaal bouwen of testen, gebruik dan [Installatie en lokaal bouwen](docs/installatie-en-eerste-start.md).

Loopt de eerste installatie vast, kijk dan hier:

- [Dashboard installeren](docs/dashboard/README.md)
- [Problemen oplossen en afstellen](docs/problemen-oplossen-en-afstellen.md)

## Ondersteunde hardware

OpenQuatt richt zich nu bewust op twee hardwareprofielen:

- [Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm)
- [Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/)

## Documentatie

Begin hier:

- [Documentatie-overzicht](docs/README.md)

Belangrijkste pagina's voor gebruikers:

- [Installatie en lokaal bouwen](docs/installatie-en-eerste-start.md) voor installeren of lokaal bouwen
- [Hoe OpenQuatt werkt](docs/hoe-openquatt-werkt.md) voor de rolverdeling tussen thermostaat, OpenQuatt, warmtepomp en Home Assistant
- [Dashboard uitleg](docs/dashboard-uitleg.md) voor uitleg van de dashboardweergaven
- [Dashboard installeren](docs/dashboard/README.md) voor het importeren van dashboards
- [Problemen oplossen en afstellen](docs/problemen-oplossen-en-afstellen.md) voor problemen oplossen en veilig afstellen

Technischere naslag blijft beschikbaar, maar staat niet meer centraal in de publieksroute:

- [Technische uitleg over standen en flow](docs/technische-uitleg-standen-en-flow.md)
- [Instellingen en meetwaarden](docs/instellingen-en-meetwaarden.md)

## Licentie

Dit project bevat een `LICENSE`-bestand in de root van de repository.
