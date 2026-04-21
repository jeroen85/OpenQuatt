# OpenQuatt

<img src="docs/assets/openquatt_logo.svg" alt="OpenQuatt logo" width="400" />

OpenQuatt is ESPHome-firmware voor Quatt Single- en Duo-installaties. Het project geeft je meer inzicht, meer regie en een beter uitleesbaar Home Assistant-dashboard bovenop de bestaande Quatt-hardware.

> [!WARNING]
> Dit project zit nog in een experimentele fase. Gebruik het bewust en test wijzigingen stap voor stap.
>
> Gebruik van OpenQuatt kan gevolgen hebben voor je Quatt-garantie. De standaard commerciële Quatt-garantie vervalt in principe bij gebruik van externe aansturing zoals OpenQuatt. De wettelijke garantie blijft bestaan, maar een garantieclaim kan daardoor in de praktijk wel ingewikkelder worden.

## Wat is OpenQuatt?

OpenQuatt is bedoeld voor gebruikers van een Quatt Single of Quatt Duo die:

- meer inzicht willen in wat de installatie doet;
- een duidelijk Home Assistant-dashboard willen;
- meer grip willen op gedrag, metingen en instellingen;
- willen kunnen kiezen uit de twee ondersteunde OpenQuatt-hardwareprofielen.

Je hoeft voor de eerste installatie niet eerst alle technische achtergronddocumenten te lezen. De hoofdroute is: installeren, koppelen aan Home Assistant en daarna pas verdiepen waar nodig.

## Ondersteunde combinaties

OpenQuatt ondersteunt momenteel:

- Quatt `Single` en `Duo` (V1 en V1.5)
- `Waveshare ESP32-S3-Relay-1CH`
- `Heatpump Listener`

Alle combinaties van bovenstaande opstelling en hardware worden ondersteund.

## Snel starten

1. Open de [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/).
2. Kies exact de combinatie die past bij jouw installatie en hardware.
3. Flash de firmware via USB in Chrome of Edge.
4. Rond wifi-configuratie af en voeg het apparaat toe in Home Assistant.
5. Volg daarna de documentatieroute voor dashboard en eerste controle.

Alleen de nieuwste stabiele eerste-installatiebestanden worden standaard via de installer aangeboden.

Voor de volledige installatiestappen en eerste controle:

- [Installatie en ingebruikname](docs/installatie-en-ingebruikname.md)
- [Dashboard installeren](docs/dashboard/README.md)
- [Dashboard gebruiken](docs/dashboardoverzicht.md)
- [Problemen oplossen en afstellen](docs/diagnose-en-afstelling.md)

## Ondersteunde hardware

OpenQuatt richt zich nu bewust op twee hardwareprofielen:

- [Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm)
- [Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/)

## Documentatie

Belangrijkste pagina's voor gebruikers:

- [Installatie en ingebruikname](docs/installatie-en-ingebruikname.md) voor installeren en controle na de eerste start
- [Verwarmen en koelen uitgelegd](docs/verwarmen-en-koelen.md) voor een eenvoudige uitleg van `Power House`, stooklijnregeling, koeling, `Single` en `Duo`
- [Dashboard gebruiken](docs/dashboardoverzicht.md) voor dagelijkse controle en de juiste diagnosevolgorde in Home Assistant
- [Dashboard installeren](docs/dashboard/README.md) voor het importeren van dashboards
- [Problemen oplossen en afstellen](docs/diagnose-en-afstelling.md) voor diagnose en gerichte afstelling

Meer heb je voor normaal gebruik meestal niet nodig.

## Licentie

Dit project bevat een `LICENSE`-bestand in de root van de repository.
