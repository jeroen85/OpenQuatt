# Installatie en ingebruikname

Deze handleiding beschrijft de eerste installatie van OpenQuatt. Voor de meeste gebruikers is de web installer de juiste en enige normale route. Na het flashen ga je eerst naar de lokale web-app via `http://openquatt.local`; Home Assistant komt daarna.

## Installatieroute

Voor een eerste installatie gebruik je de web installer uit de [README](../README.md). Daarmee flash je de juiste firmware en kun je direct daarna de Wi-Fi-configuratie afronden.

De route is:

1. installer openen;
2. opstelling en hardware kiezen;
3. verbinding kiezen;
4. firmware flashen;
5. Wi-Fi instellen;
6. `openquatt.local` openen;
7. Quick Start afronden;
8. Home Assistant-dashboard importeren.

Gebruik [Handmatige installatie](handmatige-installatie.md) alleen als fallback.

## Wat zie je onderweg?

| Moment | Wat zie je? | Volgende actie |
|---|---|---|
| Installer | Keuzes voor `Single` of `Duo`, ESP-module en verbinding | Kies nu `Wi-Fi`; Ethernet verschijnt pas zodra er een stabiele releasebuild is. |
| ESP Web Tools | Browserdialoog voor verbinden, wissen en flashen | Laat het tabblad open tot de Wi-Fi-configuratie is afgerond. |
| Web-app | `http://openquatt.local` met Quick Start | Kies Quatt Hybrid V1, V1.5 of V2 en rond de basisinstellingen af. |
| Home Assistant | ESPHome-apparaat en dashboard | Voeg OpenQuatt toe en importeer daarna het juiste `Single`- of `Duo`-dashboard. |

## Benodigdheden

- een ondersteund ESP32-bord:
  - Electropaultje Heatpump Controller Q-edition, aanbevolen voor nieuwe installaties
  - Waveshare ESP32-S3-Relay-1CH
  - Electropaultje Heatpump Listener
- een USB-kabel voor de eerste flash
- een werkend Wi-Fi-netwerk
- Chrome of Edge voor de web installer
- Home Assistant wordt sterk aanbevolen

## Kies het juiste profiel in de installer

Kies in de installer altijd exact de combinatie van je opstelling, hardware en verbinding. Voor nieuwe installaties is de Heatpump Controller Q-edition de voorkeursmodule.

OpenQuatt ondersteunt Quatt Hybrid V1, V1.5 en V2. Die versie kies je na het flashen in de Quick Start van de web-app.

| Opstelling | Hardware | Verbinding | Installerkeuze |
|---|---|---|---|
| Single | Heatpump Controller Q | Wi-Fi | `Single` + `Heatpump Controller Q` + `Wi-Fi` |
| Duo | Heatpump Controller Q | Wi-Fi | `Duo` + `Heatpump Controller Q` + `Wi-Fi` |
| Single | Heatpump Listener | Wi-Fi | `Single` + `Heatpump Listener` + `Wi-Fi` |
| Duo | Heatpump Listener | Wi-Fi | `Duo` + `Heatpump Listener` + `Wi-Fi` |
| Single | Waveshare | Wi-Fi | `Single` + `Waveshare` + `Wi-Fi` |
| Duo | Waveshare | Wi-Fi | `Duo` + `Waveshare` + `Wi-Fi` |

De Ethernet-configs voor de Heatpump Controller Q staan al in de matrix als planned targets, maar worden nog niet door CI/release gebouwd. Voor gewone gebruikers is Wi-Fi voorlopig de duidelijke route.

Zodra er een stabiele Ethernet-factorybuild voor de Heatpump Controller Q wordt gepubliceerd, toont de installer `Ethernet` als extra verbindingskeuze bij die module.

## Installatie via de web installer

> Let op: gebruik van OpenQuatt kan gevolgen hebben voor je Quatt-garantie. De standaard commerciële Quatt-garantie vervalt in principe bij gebruik van externe aansturing zoals OpenQuatt. De wettelijke garantie blijft bestaan, maar een garantieclaim kan daardoor in de praktijk wel ingewikkelder worden.

1. Open de [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/).
2. Kies de combinatie die past bij je opstelling, hardware en verbinding.
3. Sluit het ESP32-bord via USB aan.
4. Flash de firmware.
5. Laat het browsertabblad open, zodat de Wi-Fi-configuratie direct daarna kan worden aangeboden.
6. Open na de eerste start `http://openquatt.local`.
7. Rond de Quick Start in de web-app af.
8. Voeg het apparaat daarna toe in Home Assistant.

Praktisch voor een DS18B20: sluit die sensor bij voorkeur aan voordat OpenQuatt opstart. De 1-Wire sensor wordt tijdens het opstarten gedetecteerd; als je hem later aansluit, moet je het bord eerst herstarten voordat de sensor zichtbaar wordt.

Als de browserflow voor Wi-Fi niet werkt, start OpenQuatt een fallback access point:

- SSID: `OpenQuatt`
- wachtwoord: `openquatt`

## Eerste start: openquatt.local

De eerste plek na het flashen is de web-app:

```text
http://openquatt.local
```

Als die naam niet werkt, zoek dan het IP-adres van OpenQuatt in je router en open `http://<ip-adres>`.

De web-app toont Quick Start zolang de basisinstellingen nog niet zijn afgerond. Loop die eerst rustig door. Quick Start zet de belangrijkste keuzes klaar:

1. Quatt Hybrid-versie;
2. verwarmingsstrategie;
3. instellingen voor de gekozen strategie;
4. flowregeling;
5. watertemperatuurbeveiliging;
6. stille uren;
7. bevestigen en afronden.

Gebruik daarna pas Home Assistant voor dashboard, dagelijkse controle en optionele dynamische bronselectie.

Zie voor de lokale web-app:

- [Web-app gebruiken](web-app.md)

## Daarna: Home Assistant

Controleer na Quick Start bij voorkeur in deze volgorde:

1. Het apparaat is online en zichtbaar in Home Assistant.
2. De firmwareversie is zichtbaar.
3. De warmtepompdata ververst.
4. De gekozen meetwaarden lijken logisch:
   - aanvoertemperatuur
   - flow
   - buitentemperatuur
5. `CM override` staat op `Auto`.
6. Het juiste dashboard is geïmporteerd.

Zie voor het dashboard:

- [Dashboard installeren](dashboard/README.md)
- [Dashboard gebruiken](dashboardoverzicht.md)

## Bij problemen

### Het apparaat verschijnt niet in Home Assistant

- Controleer of Wi-Fi echt is ingesteld.
- Kijk of het apparaat nog op het fallback access point zit.
- Herstart het bord een keer.

### Ik zie geen warmtepompgegevens

- Controleer RS485-bekabeling.
- Controleer of het gekozen hardwareprofiel klopt.
- Controleer of je niet per ongeluk een `Single`-bestand gebruikt op een `Duo`-opstelling, of andersom.

### Waarden zijn zichtbaar, maar lijken onlogisch

Controleer in Home Assistant eerst welke bron is geselecteerd voor flow, buitentemperatuur, kamertemperatuur en setpoint. Kijk pas daarna naar afstelling of tuning.

### Een aangesloten DS18B20 verschijnt niet

- Controleer of de sensor op de juiste `ds18b20_pin` van het gekozen hardwareprofiel zit.
- Herstart OpenQuatt nadat je de sensor hebt aangesloten. Zonder reboot wordt een later aangesloten DS18B20 niet ontdekt.

### Het dashboard wil niet importeren

- Gebruik de ruwe YAML-editor in Home Assistant.
- Controleer of je het juiste dashboardbestand voor `Single` of `Duo` hebt gekozen.

## Als de installer niet werkt

Gebruik dan pas de fallbackroute: [Handmatige installatie](handmatige-installatie.md).
