# OpenQuatt

<img src="docs/assets/openquatt_logo.svg" alt="OpenQuatt logo" width="400" />

OpenQuatt is open-source ESPHome-firmware voor Quatt Hybrid `Single`- en `Duo`-installaties. Het project geeft je lokaal inzicht, lokale controle, een uitgebreide web-app en optionele Home Assistant-integratie bovenop de bestaande Quatt-hardware.

> [!WARNING]
> OpenQuatt is community-firmware voor gebruikers met enig technisch inzicht. Gebruik het bewust en test wijzigingen stap voor stap.
>
> Gebruik van OpenQuatt kan gevolgen hebben voor je Quatt-garantie. De standaard commerciële Quatt-garantie vervalt in principe bij gebruik van externe aansturing zoals OpenQuatt. De wettelijke garantie blijft bestaan, maar een garantieclaim kan daardoor in de praktijk wel ingewikkelder worden.

## Wat is OpenQuatt?

OpenQuatt is bedoeld voor gebruikers van een Quatt Hybrid `Single` of `Duo` die:

- meer inzicht willen in wat de installatie doet;
- lokale controle willen via een uitgebreide web-app;
- instellingen en verwarmingsstrategie zelf willen beheren;
- koeling willen kunnen gebruiken waar hun installatie dat ondersteunt;
- optioneel Home Assistant willen gebruiken voor dashboarding en automatisering;
- via de installer de juiste firmware voor hun opstelling, hardware en verbinding willen kiezen.

OpenQuatt richt zich niet op Quatt All-Electric, Quatt Chill of koppeling met Quatt HomeBattery.

Je hoeft voor de eerste installatie niet eerst alle technische achtergronddocumenten te lezen. De hoofdroute is: installer openen, je opstelling, hardware en verbinding kiezen, flashen, `openquatt.local` openen en Quick Start afronden. Home Assistant is optioneel en komt daarna.

## Ondersteunde combinaties

OpenQuatt ondersteunt momenteel Quatt Hybrid `Single` en `Duo` (V1, V1.5 en V2).

Voor nieuwe installaties is de [`Electropaultje Heatpump Controller Q-edition`](https://electropaultje.nl/product/heatpump-controller-q-edition/) de aanbevolen en volledig ondersteunde module. Deze hardware is speciaal voor OpenQuatt gemaakt en is de primaire focus voor support en nieuwe ontwikkeling.

`Waveshare ESP32-S3-Relay-1CH` en `Electropaultje Heatpump Listener` blijven beschikbaar met limited/best-effort support. Ze blijven waarschijnlijk gewoon functioneren, maar actieve ontwikkeling en support richten zich op Q-edition.

Alle Wi-Fi-combinaties van bovenstaande opstelling en hardware zijn beschikbaar. Voor de Heatpump Controller Q zijn daarnaast Ethernet-builds beschikbaar voor `Single` en `Duo`. Ethernet en Wi-Fi zijn nu nog aparte firmware-builds; een Ethernet-build verwacht dus een werkende kabel/netwerkroute en heeft geen automatische Wi-Fi fallback of captive portal.

## Snel starten

1. Open de [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/).
2. Kies exact de combinatie die past bij jouw Quatt-opstelling, hardware en verbinding.
3. Flash de firmware via USB in Chrome of Edge.
4. Rond Wi-Fi-configuratie af, of sluit bij een Ethernet-build de netwerkkabel aan.
5. Open `http://openquatt.local` en loop de Quick Start door.
6. Gebruik OpenQuatt daarna via de geïntegreerde web-app.
7. Optioneel: voeg OpenQuatt toe in Home Assistant. Selecteer tijdens het toevoegen nog geen area; wacht tot de entiteiten zijn aangemaakt, ken daarna de area toe en importeer eventueel het dashboard.

Alleen de nieuwste stabiele eerste-installatiebestanden worden standaard via de installer aangeboden.

Voor de volledige installatiestappen en eerste controle:

- [Installatie en ingebruikname](docs/installatie-en-ingebruikname.md)
- [Web-app gebruiken](docs/web-app.md)
- [Web-app demo](https://jeroen85.github.io/OpenQuatt/demo/)
- [Dashboard installeren](docs/dashboard/README.md)
- [Dashboard gebruiken](docs/dashboardoverzicht.md)
- [Problemen oplossen](docs/problemen-oplossen.md)

## Mogelijkheden

OpenQuatt biedt:

- lokale controle en inzicht zonder afhankelijk te zijn van een cloud-dashboard;
- een uitgebreide geïntegreerde web-app voor installatie, instellingen, updates, backup en beheer;
- `Power House` als aanbevolen verwarmingsstrategie voor normale ingebruikname;
- koeling als bewuste OpenQuatt-functie waar de installatie dat ondersteunt;
- optionele Home Assistant-integratie met dashboards;
- OpenTherm-thermostaatuitlezing op Heatpump Controller Q-edition.

## Ondersteunde hardware

OpenQuatt richt zich nu bewust op drie hardwareprofielen:

- [Electropaultje Heatpump Controller Q-edition](https://electropaultje.nl/product/heatpump-controller-q-edition/)
- [Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm)
- [Electropaultje Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/)

Voor nieuwe installaties is de Heatpump Controller Q-edition de voorkeursmodule. Waveshare en Heatpump Listener zijn beschikbaar met limited/best-effort support.

Alle ondersteunde OpenQuatt-profielen gebruiken PSRAM. De firmware zet `psram.ignore_not_found: false`, zodat ontbrekende PSRAM direct zichtbaar wordt als hardware- of profielprobleem in plaats van stil tot beperkte functionaliteit te leiden.

## Beperkingen

Belangrijke beperkingen voor deze fase:

- OpenQuatt is bedoeld voor Quatt Hybrid `Single` en `Duo`, niet voor Quatt All-Electric, Quatt Chill of Quatt HomeBattery.
- Q-edition is de support- en ontwikkelfocus; Waveshare en Heatpump Listener zijn limited/best-effort.
- OpenTherm betekent nu: thermostaat uitlezen op Q-edition. OpenTherm-aansturing van de ketel staat op de roadmap.
- Ethernet en Wi-Fi zijn nu nog aparte firmware-builds.
- CV-assist in Heating Curve, CV/boiler-only mode en uitgebreidere storingsafhandeling staan op de roadmap.
- OpenQuatt is geen officiële Quatt-helpdesk of individuele installatieservice.

## Roadmap

Compacte roadmap:

- OpenTherm-aansturing van de ketel;
- gecombineerde Ethernet/Wi-Fi firmware, afhankelijk van ESPHome-ontwikkelingen;
- CV-assist in Heating Curve;
- CV/boiler-only mode;
- betere storingsafhandeling en herstelroutes.

## Documentatie

Belangrijkste pagina's voor gebruikers:

- [Installatie en ingebruikname](docs/installatie-en-ingebruikname.md) voor installeren en controle na de eerste start
- [Web-app gebruiken](docs/web-app.md) voor Quick Start, instellingen, updates, backup en beveiliging
- [Dashboard installeren](docs/dashboard/README.md) voor het importeren van dashboards
- [Dashboard gebruiken](docs/dashboardoverzicht.md) voor dagelijkse controle in Home Assistant
- [Verwarmen en koelen uitgelegd](docs/verwarmen-en-koelen.md) voor een eenvoudige uitleg van `Power House`, stooklijnregeling, koeling, `Single` en `Duo`
- [Problemen oplossen](docs/problemen-oplossen.md) voor diagnose zonder meteen te gaan tunen

Meer heb je voor normaal gebruik meestal niet nodig.

## Licentie

Dit project bevat een `LICENSE`-bestand in de root van de repository.

Built with <a href="https://esphome.io/"><img src="https://media.esphome.io/logo/logo-text-on-light.svg" alt="ESPHome" height="24" align="absmiddle" /></a>
