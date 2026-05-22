# OpenQuatt

<img src="docs/assets/openquatt_logo.svg" alt="OpenQuatt logo" width="400" />

OpenQuatt is ESPHome-firmware voor Quatt Single- en Duo-installaties. Het project geeft je meer inzicht, meer regie, een lokale web-app en een beter uitleesbaar Home Assistant-dashboard bovenop de bestaande Quatt-hardware.

> [!WARNING]
> Dit project zit nog in een experimentele fase. Gebruik het bewust en test wijzigingen stap voor stap.
>
> Gebruik van OpenQuatt kan gevolgen hebben voor je Quatt-garantie. De standaard commerciële Quatt-garantie vervalt in principe bij gebruik van externe aansturing zoals OpenQuatt. De wettelijke garantie blijft bestaan, maar een garantieclaim kan daardoor in de praktijk wel ingewikkelder worden.

## Wat is OpenQuatt?

OpenQuatt is bedoeld voor gebruikers van een Quatt Single of Quatt Duo die:

- meer inzicht willen in wat de installatie doet;
- een lokale web-app willen voor installatie, instellingen en beheer;
- een duidelijk Home Assistant-dashboard willen;
- meer grip willen op gedrag, metingen en instellingen;
- via de installer de juiste firmware voor hun opstelling, hardware en verbinding willen kiezen.

Je hoeft voor de eerste installatie niet eerst alle technische achtergronddocumenten te lezen. De hoofdroute is: installer openen, je opstelling, hardware en verbinding kiezen, flashen, `openquatt.local` openen, Quick Start afronden en daarna pas Home Assistant toevoegen.

## Ondersteunde combinaties

OpenQuatt ondersteunt momenteel:

- Quatt `Single` en `Duo` (V1, V1.5 en V2)
- `Electropaultje Heatpump Controller Q-edition` als voorkeursmodule voor nieuwe installaties
- `Waveshare ESP32-S3-Relay-1CH`
- `Electropaultje Heatpump Listener`

Alle Wi-Fi-combinaties van bovenstaande opstelling en hardware worden ondersteund. Ethernet is alvast als build-as voorbereid voor de Heatpump Controller Q, maar nog niet vrijgegeven als releasebuild. De installer toont alleen verbindingen waarvoor in de stabiele release een factory-image beschikbaar is.

## Snel starten

1. Open de [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/).
2. Kies exact de combinatie die past bij jouw Quatt-opstelling, hardware en verbinding.
3. Flash de firmware via USB in Chrome of Edge.
4. Rond Wi-Fi-configuratie af.
5. Open `http://openquatt.local` en loop de Quick Start door.
6. Voeg OpenQuatt daarna toe in Home Assistant en importeer het dashboard.

Alleen de nieuwste stabiele eerste-installatiebestanden worden standaard via de installer aangeboden.

Voor de volledige installatiestappen en eerste controle:

- [Installatie en ingebruikname](docs/installatie-en-ingebruikname.md)
- [Web-app gebruiken](docs/web-app.md)
- [Dashboard installeren](docs/dashboard/README.md)
- [Dashboard gebruiken](docs/dashboardoverzicht.md)
- [Problemen oplossen](docs/problemen-oplossen.md)

## Ondersteunde hardware

OpenQuatt richt zich nu bewust op drie hardwareprofielen:

- Electropaultje Heatpump Controller Q-edition
- [Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm)
- [Electropaultje Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/)

Voor nieuwe installaties is de Heatpump Controller Q-edition de voorkeursmodule.

## Documentatie

Belangrijkste pagina's voor gebruikers:

- [Installatie en ingebruikname](docs/installatie-en-ingebruikname.md) voor installeren en controle na de eerste start
- [Web-app gebruiken](docs/web-app.md) voor Quick Start, instellingen, updates, backup en MQTT
- [Dashboard installeren](docs/dashboard/README.md) voor het importeren van dashboards
- [Dashboard gebruiken](docs/dashboardoverzicht.md) voor dagelijkse controle in Home Assistant
- [Verwarmen en koelen uitgelegd](docs/verwarmen-en-koelen.md) voor een eenvoudige uitleg van `Power House`, stooklijnregeling, koeling, `Single` en `Duo`
- [MQTT gebruiken](docs/mqtt.md) voor de experimentele publish-only telemetry-export
- [Problemen oplossen](docs/problemen-oplossen.md) voor diagnose zonder meteen te gaan tunen

Meer heb je voor normaal gebruik meestal niet nodig.

## Licentie

Dit project bevat een `LICENSE`-bestand in de root van de repository.
