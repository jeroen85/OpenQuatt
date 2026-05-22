# Handmatige installatie

De normale installatieroute is de [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/). Gebruik handmatige installatie alleen als de installer niet werkt of als je bewust een firmwarebestand uit een release wilt flashen.

## Wanneer gebruik je dit?

Gebruik deze route alleen bij:

- een browser of computer waarop de installer niet goed werkt;
- een herstelactie na een mislukte flash;
- testen met een specifiek releasebestand;
- gevorderde diagnose.

Voor de meeste gebruikers is dit niet de eerste keuze.

## Wat heb je nodig?

- Chrome of Edge op desktop;
- een USB-datakabel;
- het juiste `*.firmware.factory.bin` bestand uit een OpenQuatt-release;
- zekerheid over je opstelling: `Single` of `Duo`;
- zekerheid over je hardwareprofiel.

## Het juiste bestand kiezen

Kies een factory-bestand dat precies past bij je installatie.

De bestandsnaam bevat normaal:

- `openquatt`;
- het hardwareprofiel;
- `single` of `duo`;
- `wifi`;
- `firmware.factory.bin`.

Voorbeelden:

```text
openquatt-heatpump-controller-q-single-wifi.firmware.factory.bin
openquatt-heatpump-controller-q-duo-wifi.firmware.factory.bin
```

Gebruik geen `ota.bin` voor een eerste installatie via USB. Voor de eerste flash heb je een factory-binary nodig.

## Flashen

1. Download het juiste factory-bestand uit de GitHub Release.
2. Open [ESP Web Tools](https://web.esphome.io/).
3. Sluit de OpenQuatt-module via USB aan.
4. Kies `Connect`.
5. Kies het gedownloade factory-bestand.
6. Flash de module.
7. Stel daarna Wi-Fi in via de browserflow of via het fallback access point.

## Na het flashen

Als Wi-Fi niet direct via de browserflow lukt, gebruikt OpenQuatt het fallback access point:

- SSID: `OpenQuatt`
- wachtwoord: `openquatt`

Open daarna de web-app via:

```text
http://openquatt.local
```

Loop vervolgens de Quick Start in de web-app door.

## Veelgemaakte fouten

- `Single` flashen op een `Duo`-installatie, of andersom.
- Een firmwarebestand voor het verkeerde hardwareprofiel kiezen.
- Een OTA-bestand gebruiken voor de eerste USB-installatie.
- De browser sluiten voordat Wi-Fi is ingesteld.
- Verwachten dat Ethernet-builds beschikbaar zijn terwijl die nog niet als releasebuild zijn vrijgegeven.

Als je twijfelt, ga terug naar [Installatie en ingebruikname](installatie-en-ingebruikname.md) en gebruik de normale installer.
