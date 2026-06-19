# Problemen oplossen

Deze pagina helpt je rustig zoeken als OpenQuatt niet zichtbaar is, waarden vreemd lijken of het systeem anders reageert dan verwacht. De hoofdregel: eerst kijken welke informatie OpenQuatt gebruikt, pas daarna instellingen aanpassen.

## Eerst dit controleren

Controleer in deze volgorde:

1. OpenQuatt is online.
2. De web-app opent via `openquatt.local` of via het IP-adres.
3. Home Assistant ziet het apparaat.
4. De juiste dashboardvariant is gebruikt: `Single` of `Duo`.
5. De gekozen bronwaarden lijken logisch.
6. Flow en aanvoertemperatuur verversen.
7. Er is geen handmatige override actief.

Als een stap niet klopt, los die eerst op voordat je naar tuning kijkt.

## OpenQuatt is niet bereikbaar

Probeer dit:

- controleer of het apparaat stroom heeft;
- kijk in je router of OpenQuatt een IP-adres heeft;
- open de web-app via het IP-adres in plaats van `openquatt.local`;
- controleer of je computer of telefoon op hetzelfde netwerk zit;
- herstart de OpenQuatt-module.

Net na het flashen kan OpenQuatt ook nog op het fallback access point zitten:

- SSID: `OpenQuatt`
- wachtwoord: `openquatt`

## Home Assistant ziet OpenQuatt niet

Controleer eerst of de web-app wel bereikbaar is. Als de web-app werkt maar Home Assistant niets ziet:

- controleer of Home Assistant op hetzelfde netwerk zit;
- voeg de ESPHome-integratie handmatig toe met het IP-adres;
- controleer of API-encryptie in Home Assistant overeenkomt met de web-app;
- herstart Home Assistant of herlaad de ESPHome-integratie.

## Dashboardkaarten melden ontbrekende entiteiten

Controleer een ontbrekende OpenQuatt-entiteit via **Instellingen -> Apparaten & diensten -> Entiteiten**. Begint de `entity_id` met een area, zoals `sensor.zolder_openquatt_flow`, dan is die area waarschijnlijk geselecteerd tijdens de eerste toevoeging in Home Assistant 2026.6 of nieuwer. Het dashboard verwacht `sensor.openquatt_flow`.

Hernoem de betrokken entity-ID's en verwijder alleen de area-prefix. De area mag toegewezen blijven, omdat Home Assistant bestaande entity-ID's niet opnieuw wijzigt wanneer je een area later aanpast. Zie [Dashboard installeren](dashboard/README.md#area-was-al-geselecteerd) voor de volledige herstelroute.

## Ik zie geen warmtepompgegevens

Ga niet afstellen zolang basisdata ontbreekt.

Controleer:

- RS485-bekabeling;
- gekozen hardwareprofiel;
- `Single` of `Duo`;
- voeding en massa;
- of de gebruikte module past bij de installatie.

Als de warmtepompdata ontbreekt, kunnen dashboard en regeling niet betrouwbaar verklaren wat er gebeurt.

## Waarden lijken niet logisch

Kijk eerst naar de gekozen bronnen. In het Home Assistant-dashboard heet dat vaak `Sensorconfiguratie`; in de web-app zie je de gebruikte waarden vooral in `Overzicht` en `Instellingen`.

Controleer vooral:

- buitentemperatuur;
- kamertemperatuur;
- setpoint;
- aanvoertemperatuur;
- flow.

De waarde met `Gekozen` of `Selected` is de waarde die OpenQuatt echt gebruikt. Als die niet klopt, reageert OpenQuatt logisch op verkeerde informatie.

## Het huis wordt niet warm genoeg

Controleer eerst:

1. klopt het setpoint;
2. klopt de gemeten kamertemperatuur;
3. klopt de buitentemperatuur;
4. is er voldoende flow;
5. is de maximale watertemperatuur niet te laag;
6. is stille modus of een maximum level actief.

Pas daarna heeft het zin om naar `Power House`, stooklijn of PID-instellingen te kijken.

## Het wordt te warm

Te warm gedrag komt vaak door bronwaarden of te agressieve instellingen.

Controleer:

- kamerwaarde en setpoint;
- of de gekozen verwarmingsstrategie past bij je verwachting;
- of `Power House temperature reaction` niet te sterk staat;
- of de stooklijn niet te hoog staat;
- of het systeem niet nog in minimum runtime zit.

Wijzig daarna hooguit een instelling tegelijk.

## Het systeem schakelt onrustig

Onrust komt meestal door een combinatie van bronwaarden, flow, minimum runtime en strategie.

Kijk eerst:

- wisselt de flow sterk;
- wisselt de warmtevraag snel;
- klopt de geselecteerde kamertemperatuur;
- is er kort geleden veel aangepast;
- staat `CM Override` op `Auto`.

Draai bij twijfel terug naar de laatste instelling waarbij het systeem logisch werkte.

## Koeling blijft geblokkeerd

Controleer:

- is er echt een koelvraag;
- staat `Manual Cooling Enable` goed;
- is flow beschikbaar;
- is dauwpuntinformatie beschikbaar;
- blokkeert de veilige minimale watertemperatuur;
- staat de koelbeveiliging bewust op `Dauwpuntmeting vereist`, `Dauwpuntsbenadering` of `Expliciet toestaan`.

Koeling is bewust terughoudend. Zonder goede dauwpuntinformatie kan blokkeren precies het veilige gedrag zijn.

Gebruik je dauwpuntbronnen uit Home Assistant, controleer dan ook:

- staat `openquatt_ha_dynamic_cooling_package.yaml` in `/config/packages/`;
- is `input_number.openquatt_cooling_room_count` groter dan `0`;
- is per kamer een directe dauwpuntbron ingevuld, of temperatuur plus luchtvochtigheid;
- staat `binary_sensor.openquatt_ext_cooling_dew_point_valid` op `on`;
- lijkt `sensor.openquatt_ext_cooling_dew_point` logisch.

Zie [Dashboard installeren](dashboard/README.md#optioneel-dynamische-koelbronnen-via-home-assistant) voor de dynamische koelbronnen in Home Assistant.

## Wanneer niets veranderen?

Verander bij voorkeur niets als:

- de woning comfortabel is;
- OpenQuatt rustig draait;
- de bronwaarden logisch zijn;
- je alleen een korte piek of dip ziet;
- je niet weet welke instelling bij het probleem hoort.

Te veel wijzigen maakt diagnose vaak moeilijker.

## Als je toch iets aanpast

Gebruik deze werkwijze:

1. schrijf de oude waarde op;
2. wijzig een instelling;
3. wacht lang genoeg;
4. kijk naar comfort, rust en energie;
5. draai terug als het slechter wordt.

Begin bijna altijd met bronkeuze en flow. Strategie-instellingen komen daarna pas.

## Verder lezen

- [Web-app gebruiken](web-app.md)
- [Dashboard gebruiken](dashboardoverzicht.md)
- [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md)
- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
