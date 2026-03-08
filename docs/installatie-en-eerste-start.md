# Installatie en eerste start

Deze handleiding is bedoeld voor de eerste installatie van OpenQuatt. De nadruk ligt op een werkende start, niet op alle technische details erachter.

## Kies eerst je route

Gebruik de route die past bij wat je wilt doen:

- Alleen installeren en gebruiken: neem de web installer uit de [README](../README.md).
- Zelf bouwen of testen: volg de lokale build-stappen in deze pagina.

Als je geen eigen wijzigingen wilt maken, is de web installer bijna altijd de beste keuze.

## Wat heb je nodig?

- een ondersteund ESP32-bord:
  - Waveshare ESP32-S3-Relay-1CH
  - Heatpump Listener
- een USB-kabel voor de eerste flash
- wifi in huis
- Chrome of Edge voor de web installer
- Home Assistant is sterk aanbevolen

## Kies het juiste firmwarebestand

Kies altijd exact de combinatie van jouw opstelling en jouw hardware:

| Opstelling | Hardware | Bestand |
|---|---|---|
| Duo | Waveshare | `openquatt_duo_waveshare.yaml` |
| Duo | Heatpump Listener | `openquatt_duo_heatpump_listener.yaml` |
| Single | Waveshare | `openquatt_single_waveshare.yaml` |
| Single | Heatpump Listener | `openquatt_single_heatpump_listener.yaml` |

Twijfel je over `Single` of `Duo`, los dat eerst op. Een verkeerde combinatie geeft onduidelijke fouten en verkeerde entiteiten in Home Assistant.

## Snelle installatie via de web installer

1. Open de [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/).
2. Kies jouw combinatie van opstelling en hardware.
3. Sluit het ESP-bord via USB aan.
4. Flash de firmware.
5. Laat het browsertabblad open, zodat wifi-instelling direct daarna kan worden aangeboden.
6. Voeg het apparaat na de eerste start toe in Home Assistant.

Werkt de browserflow voor wifi niet, dan start OpenQuatt een fallback access point:

- SSID: `OpenQuatt`
- wachtwoord: `openquatt`

## Lokaal bouwen

Deze route is alleen nodig als je zelf wilt testen, aanpassen of valideren.

### Stap 1: controleer de configuratie

Vervang in het commando hieronder het bestand door jouw eigen combinatie:

```bash
esphome config openquatt_duo_waveshare.yaml
```

### Stap 2: compileer de firmware

```bash
esphome compile openquatt_duo_waveshare.yaml
```

### Stap 3: flash de firmware

```bash
esphome run openquatt_duo_waveshare.yaml
```

Wil je alle vier de ondersteunde combinaties in een keer controleren, gebruik dan:

```bash
./scripts/validate_local.sh
```

## Eerste controle in Home Assistant

Controleer na de eerste start in deze volgorde:

1. Het apparaat is online en zichtbaar in Home Assistant.
2. De firmwareversie is zichtbaar.
3. De warmtepompdata ververst.
4. De gekozen meetwaarden lijken logisch:
   - aanvoertemperatuur
   - flow
   - buitentemperatuur
5. `CM override` staat op `Auto`.
6. Het juiste dashboard is geimporteerd.

Voor het dashboard zie:

- [Dashboard installeren](dashboard/README.md)
- [Dashboard uitleg](dashboard-uitleg.md)

## Wat als het misgaat?

### Het apparaat verschijnt niet in Home Assistant

- Controleer of wifi echt is ingesteld.
- Kijk of het apparaat nog op het fallback access point zit.
- Herstart het bord een keer.

### Ik zie geen warmtepompgegevens

- Controleer RS485-bekabeling.
- Controleer of je echt het juiste hardwareprofiel hebt gekozen.
- Kijk of je per ongeluk een `Single`-bestand gebruikt op een `Duo`-opstelling, of andersom.

### Waarden zijn zichtbaar, maar lijken onlogisch

- Controleer in Home Assistant eerst welke bron is gekozen voor flow, buitenlucht, kamer- en setpointwaarden.
- Kijk daarna pas naar tuning.

### Het dashboard wil niet importeren

- Gebruik de ruwe YAML-editor in Home Assistant.
- Controleer of je het juiste dashboardbestand voor `Single` of `Duo` hebt gekozen.

## Wat doe je hierna?

Als de eerste start goed is gegaan:

1. Importeer het juiste dashboard.
2. Lees [Hoe OpenQuatt werkt](hoe-openquatt-werkt.md).
3. Verander pas instellingen als daar een duidelijke reden voor is.
4. Gebruik [Problemen oplossen en afstellen](problemen-oplossen-en-afstellen.md) als iets onrustig of onduidelijk gedrag laat zien.
