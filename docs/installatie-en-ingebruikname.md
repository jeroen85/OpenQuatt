# Installatie en ingebruikname

Deze handleiding beschrijft de eerste installatie van OpenQuatt en de eerste controle daarna. Voor de meeste gebruikers is de web installer de juiste route.

## Installatieroute

Voor een eerste installatie gebruik je bij voorkeur de web installer uit de [README](../README.md). Daarmee flash je de juiste firmware en kun je direct daarna de wifi-configuratie afronden.

## Benodigdheden

- een ondersteund ESP32-bord:
  - Waveshare ESP32-S3-Relay-1CH
  - Heatpump Listener
- een USB-kabel voor de eerste flash
- een werkend wifi-netwerk
- Chrome of Edge voor de web installer
- Home Assistant wordt sterk aanbevolen

## Kies het juiste firmwareprofiel

Kies altijd exact de combinatie van je opstelling en je hardware:

| Opstelling | Hardware | Bestand |
|---|---|---|
| Duo | Waveshare | `openquatt_duo_waveshare.yaml` |
| Duo | Heatpump Listener | `openquatt_duo_heatpump_listener.yaml` |
| Single | Waveshare | `openquatt_single_waveshare.yaml` |
| Single | Heatpump Listener | `openquatt_single_heatpump_listener.yaml` |

## Installatie via de web installer

> Let op: gebruik van OpenQuatt kan gevolgen hebben voor je Quatt-garantie. De standaard commerciële Quatt-garantie vervalt in principe bij gebruik van externe aansturing zoals OpenQuatt. De wettelijke garantie blijft bestaan, maar een garantieclaim kan daardoor in de praktijk wel ingewikkelder worden.

1. Open de [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/).
2. Kies de combinatie die past bij je opstelling en hardware.
3. Sluit het ESP32-bord via USB aan.
4. Flash de firmware.
5. Laat het browsertabblad open, zodat de wifi-configuratie direct daarna kan worden aangeboden.
6. Voeg het apparaat na de eerste start toe in Home Assistant.

Praktisch voor een DS18B20: sluit die sensor bij voorkeur aan voordat OpenQuatt opstart. De 1-Wire sensor wordt tijdens het opstarten gedetecteerd; als je hem later aansluit, moet je het bord eerst herstarten voordat de sensor zichtbaar wordt.

Als de browserflow voor wifi niet werkt, start OpenQuatt een fallback access point:

- SSID: `OpenQuatt`
- wachtwoord: `openquatt`

## Eerste controle in Home Assistant

Controleer na de eerste start bij voorkeur in deze volgorde:

1. Het apparaat is online en zichtbaar in Home Assistant.
2. De firmwareversie is zichtbaar.
3. De warmtepompdata ververst.
4. De gekozen meetwaarden lijken logisch:
   - aanvoertemperatuur
   - flow
   - buitentemperatuur
5. `CM override` staat op `Auto`.
6. Het juiste dashboard is geimporteerd.

Zie voor het dashboard:

- [Dashboard installeren](dashboard/README.md)
- [Dashboardoverzicht](dashboardoverzicht.md)

## Bij problemen

### Het apparaat verschijnt niet in Home Assistant

- Controleer of wifi echt is ingesteld.
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
