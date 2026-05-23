# Web-app gebruiken

De OpenQuatt web-app is de lokale bedienings- en instellingenpagina van je OpenQuatt-module. Na de installer is dit de eerste plek waar je naartoe gaat: open `http://openquatt.local`, rond Quick Start af en voeg daarna pas Home Assistant toe.

## Wanneer gebruik je de web-app?

Gebruik de web-app voor alles wat direct op OpenQuatt zelf hoort:

- eerste ingebruikname via Quick Start;
- controleren of OpenQuatt online is en logisch meet;
- verwarmingsstrategie en flowregeling kiezen;
- koeling en dauwpuntbeveiliging instellen;
- firmware-updatekanaal en updates beheren;
- backup en restore van OpenQuatt-instellingen;
- MQTT-configuratie;
- web-login, API-beveiliging, logboek en herstarten.

Home Assistant blijft de prettigste plek voor dagelijks meekijken en dashboards. De web-app is de plek waar je de module zelf inricht, beheert en veilig terugvindt als er iets niet klopt.

## Wat doe je waar?

| Plek | Gebruik je vooral voor |
|---|---|
| Installer | Eerste flash, keuze voor `Single` of `Duo`, hardwareprofiel en verbinding. |
| Web-app | Quick Start, installatiekeuzes, instellingen, updates, backup, beveiliging en MQTT. |
| Home Assistant | Dagelijks meekijken, dashboards, bronselectie en optionele dynamische bronnen. |
| MQTT | Extra publish-only telemetrie voor Node-RED, logging, scripts of eigen dashboards. |

De normale volgorde is dus: installer, web-app, daarna Home Assistant. MQTT komt alleen erbij als je naast Home Assistant nog een extra datastroom nodig hebt.

## Openen

Probeer eerst:

```text
http://openquatt.local
```

Lukt dat niet, zoek dan het IP-adres van OpenQuatt in je router of in Home Assistant en open:

```text
http://<ip-adres>
```

De web-app draait lokaal op je eigen netwerk. Je gebruikt dus geen cloudaccount en hoeft niets externs open te zetten.

Wil je de interface eerst rustig bekijken zonder echte hardware, open dan de [web-app demo op GitHub Pages](https://jeroen85.github.io/OpenQuatt/demo/). Die gebruikt dezelfde look-and-feel in mockmodus.

## Eerste keer: Quick Start

Na de eerste installatie opent de web-app Quick Start zolang de basisinstallatie nog niet is afgerond.

Quick Start bestaat uit zeven stappen:

| Stap | Wat kies je? | Waarom? |
|---|---|---|
| `Kies je Quatt Hybrid` | V1, V1.5 of V2 | OpenQuatt gebruikt hiermee de juiste basislogica. |
| `Kies de verwarmingsstrategie` | `Power House` of `Water Temperature Control` | Dit bepaalt hoe OpenQuatt warmtevraag maakt. |
| `Werk de regeling uit` | Strategie-instellingen | Je ziet alleen velden die bij de gekozen strategie horen. |
| `Flowregeling en afstelling` | Automatische flow of vaste pompstand, plus Kp/Ki | Hiermee blijft de waterdoorstroming beheersbaar. |
| `Watertemperatuur beveiligen` | Maximale watertemperatuur | OpenQuatt regelt terug voordat water te warm wordt. |
| `Stille uren en niveaus` | Tijdvenster en maximale compressorstand | Handig voor nacht of geluidsgevoelige momenten. |
| `Bevestigen en afronden` | Controle en afronden | Daarna ziet OpenQuatt de basisconfiguratie als klaar. |

Je hoeft niet meteen perfecte waardes te kiezen. Het doel van Quick Start is een veilige, begrijpelijke basis. Fijnregelen kan later.

## Hoofdschermen

De web-app heeft vier hoofdschermen.

| Scherm | Gebruik |
|---|---|
| `Overzicht` | Live zien wat OpenQuatt nu doet en of de belangrijkste waarden logisch zijn. |
| `Trends` | Korte historie bekijken als trendopslag beschikbaar is. |
| `Energie` | Vermogen, energie, COP en EER bekijken. |
| `Instellingen` | OpenQuatt configureren, bijwerken en beheren. |

Voor dagelijks kijken is `Overzicht` meestal genoeg. Ga pas naar `Instellingen` als je bewust iets wilt veranderen.

## Overzicht

Begin hier als je wilt weten of alles normaal oogt.

Let vooral op:

- OpenQuatt is online;
- Quatt-data wordt ververst;
- flow, aanvoertemperatuur, buitentemperatuur en kamertemperatuur zijn geloofwaardig;
- er is geen onverwachte override actief;
- de gekozen strategie past bij wat je in huis verwacht.

Zie je hier al vreemde waarden, ga dan niet meteen tunen. Controleer eerst de bronkeuze in Home Assistant of in de instellingen.

## Trends

`Trends` is bedoeld voor korte historie. Dat helpt bij vragen zoals:

- loopt de aanvoertemperatuur rustig op;
- blijft de flow stabiel;
- schakelt het systeem vaak;
- reageert de regeling logisch op setpoint en kamertemperatuur.

Trendopslag kan onder `Instellingen -> Systeem` worden beheerd. Als trendopslag uit staat, kan de tab minder of geen historie tonen.

## Energie

`Energie` geeft inzicht in vermogen en rendement. Gebruik dit vooral om richting te krijgen, niet als gecertificeerde energiemeter.

Voorbeelden:

- elektrisch vermogen van de warmtepomp;
- thermisch vermogen;
- COP bij verwarmen;
- EER bij koelen, als koeling actief en ondersteund is;
- dag- en totaalwaarden wanneer die entiteiten beschikbaar zijn.

## Instellingen

Onder `Instellingen` staan de onderdelen bewust gescheiden. Het idee is: eerst de gewone installatie-instellingen, daarna pas de scherpere gereedschappen.

### Installatie

Hier staan basiskeuzes zoals Quatt Hybrid-versie, flowregeling, service & commissioning, boiler- of CV-ondersteuning, stille uren en watergrenzen.

Gebruik dit deel vooral tijdens de eerste inrichting of als je installatie later verandert.

### Verwarmen

Hier kies en verfijn je de verwarmingsstrategie:

- `Power House`;
- `Water Temperature Control`.

`Power House` probeert de warmtevraag van je woning te schatten. `Water Temperature Control` werkt meer als een stooklijnregeling. Begin bij [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md) als je nog niet zeker weet welke strategie bij je past.

### Koelen

Hier staan de instellingen voor koeling en dauwpuntbeveiliging.

Koeling is gevoeliger dan verwarming, omdat condensrisico een echte beperking is. Normaal gebruikt OpenQuatt een dauwpuntbron plus veiligheidsmarge. Zonder goede dauwpuntinformatie blijft koeling standaard geblokkeerd.

De optie `Koeling zonder dauwpuntbeveiliging` is bewust een opt-in. Gebruik die alleen als je begrijpt dat OpenQuatt dan met een conservatieve fallback werkt en geen echte dauwpuntmeting heeft.

Wil je dauwpuntbronnen uit Home Assistant gebruiken, kijk dan bij [Dashboard installeren](dashboard/README.md#optioneel-dynamische-koelbronnen-via-home-assistant). De bronselectie zelf gebeurt in Home Assistant; de web-app toont en beheert vooral de OpenQuatt-kant van de koelveiligheid.

### Geavanceerd

Hier staan instellingen die je meestal niet nodig hebt bij normaal gebruik, zoals compressoruitsluitingen, minimale runtime en compatibiliteitsopties.

Laat dit met rust zolang OpenQuatt logisch werkt. Verander liever een instelling per keer en kijk daarna wat het systeem doet.

### Systeem

Hier vind je beheerfuncties:

- Quick Start opnieuw openen;
- trendopslag;
- firmware-updates en updatekanaal;
- web-login en API-beveiliging;
- MQTT;
- backup en restore;
- systeemstatus;
- logboek;
- herstarten.

## Backup en restore

Maak een backup voordat je grotere wijzigingen doet of voordat je een factory-update uitvoert.

De backup bevat de instellingen die de web-app beheert. Bij restore vergelijkt OpenQuatt de backup met de huidige installatie, zodat je verschillen kunt controleren voordat je ze terugzet.

Een backup is vooral handig bij:

- nieuwe release testen;
- overstap naar een nieuw bordje;
- factory-bin update;
- terugzetten na experimenteren met instellingen.

## Updates

De web-app toont update-informatie via de firmware-updatefunctie. Normaal volg je het stabiele kanaal.

Gebruik een dev-kanaal alleen als je bewust test en weet dat de firmware nog kan veranderen. Voor releasegebruik is het stabiele kanaal de route.

Bij de Heatpump Controller Q kan de OTA-modal ook de verbinding wisselen tussen Wi-Fi en Ethernet. Dat is geen gewone update: de web-app installeert dan dezelfde `Single`- of `Duo`-build voor de andere netwerkverbinding. Controleer bij `Wi-Fi -> Ethernet` eerst of de netwerkkabel is aangesloten. Bij `Ethernet -> Wi-Fi` verdwijnt Ethernet na de herstart; als er geen Wi-Fi-gegevens bekend zijn, start de Wi-Fi-build het OpenQuatt fallback access point.

## MQTT instellen

MQTT stel je in via:

```text
Instellingen -> Systeem -> MQTT
```

Daar vul je broker, poort, gebruiker, wachtwoord, base topic, publish-profiel en intervals in. MQTT staat standaard uit en probeert pas te verbinden nadat je de configuratie opslaat en inschakelt.

Gebruik voor Home Assistant normaal de native ESPHome API. MQTT is vooral bedoeld voor extra dashboards, Node-RED, logging of eigen scripts.

Lees verder in [MQTT gebruiken](mqtt.md).

## Web-login en API-beveiliging

Onder `Instellingen -> Systeem -> Toegang & Beveiliging` kun je de web-login en ESPHome API-encryptie aanpassen.

Wijzigingen aan beveiliging kunnen een herstart nodig hebben. Bewaar nieuwe gegevens goed, want Home Assistant moet dezelfde API-sleutel gebruiken als API-encryptie actief is.

## Bij problemen

Als de web-app niet opent:

- controleer of OpenQuatt online is in je router;
- probeer het IP-adres in plaats van `openquatt.local`;
- controleer of je telefoon of laptop op hetzelfde netwerk zit;
- kijk of OpenQuatt nog op het fallback access point zit;
- herstart OpenQuatt als het apparaat wel online is maar de web-app niet reageert.

Als Quick Start niet verschijnt terwijl je nog niet klaar bent, open `Instellingen -> Systeem -> Quick Start` en reset de setupstatus.

Ga daarna verder met [Dashboard installeren](dashboard/README.md) en [Dashboard gebruiken](dashboardoverzicht.md).
