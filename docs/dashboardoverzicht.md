# Dashboard gebruiken

Deze pagina beschrijft hoe je het OpenQuatt-dashboard in Home Assistant het best gebruikt. De belangrijkste vraag is steeds: waar kijk je eerst, en wat laat je voorlopig met rust?

## Kies eerst het juiste dashboard

Gebruik altijd de variant die past bij jouw opstelling:

- Duo NL: `docs/dashboard/openquatt_ha_dashboard_duo_nl.yaml`
- Duo EN: `docs/dashboard/openquatt_ha_dashboard_duo_en.yaml`
- Single NL: `docs/dashboard/openquatt_ha_dashboard_single_nl.yaml`
- Single EN: `docs/dashboard/openquatt_ha_dashboard_single_en.yaml`

Twijfel je nog over importeren, begin dan bij [Dashboard installeren](dashboard/README.md).

## Dagelijkse route

Voor dagelijks gebruik is deze volgorde meestal genoeg:

1. kijk naar `Overzicht`;
2. controleer bij twijfel `Sensorconfiguratie`;
3. kijk pas daarna naar `Warmtepompen`, `Flow` of `Diagnostiek`;
4. gebruik `Instellingen` alleen als je bewust iets wilt aanpassen.

## Waar kijk je als eerste?

### `Overzicht`

Dit is de beste eerste pagina voor dagelijks gebruik. Kijk hier vooral naar:

- is het apparaat online;
- lijken de gekozen temperaturen logisch;
- levert het systeem nu warmte of koeling zoals je verwacht;
- is er een handmatige override actief.

Je hoeft hier nog niet alles te begrijpen. Het gaat vooral om de vraag: oogt het systeem logisch en rustig?

### `Sensorconfiguratie`

Dit is meestal de eerste plek als iets onlogisch lijkt.

Hier zie je:

- welke bron voor een waarde gekozen is;
- welke waarde OpenQuatt echt gebruikt;
- of een bron ontbreekt, verouderd is of niet logisch lijkt.

Als hier iets niet klopt, worden de andere tabbladen ook snel verwarrend. Daarom is dit bijna altijd stap 1 bij diagnose.

## Waar kijk je bij problemen?

### `Flow`

Gebruik deze tab als:

- het systeem niet goed lijkt door te verwarmen;
- de waterdoorstroming vreemd lijkt;
- de pomp onrustig reageert.

### `Warmtepompen`

Gebruik deze tab als je per warmtepomp wilt zien:

- of een unit meedoet;
- of er fouten of afwijkingen zichtbaar zijn;
- hoe `HP1` en `HP2` zich gedragen bij `Duo`.

### `Diagnostiek`

Gebruik deze tab als de basis logisch lijkt, maar het gedrag toch vreemd blijft. Bijvoorbeeld:

- het systeem schakelt onrustig;
- de gevraagde warmte lijkt niet goed te passen;
- je wilt begrijpen waarom OpenQuatt wel of niet doorzet.

## Koeling in het dashboard

Gebruik de `Koeling`-tab zodra je cooling gebruikt of voorbereidt.

Kijk daar vooral naar:

- is er een koelvraag;
- is koelen op dit moment toegestaan;
- blokkeert flow of veiligheid de koeling;
- welke veilige minimale aanvoertemperatuur geldt nu.

Belangrijk:

- de bronkeuze doe je meestal op `Sensorconfiguratie`;
- de `Koeling`-tab laat vooral de actuele toestand en beveiliging zien.

## Gebruik `Instellingen` met beleid

De tab `Instellingen` is niet bedoeld als dagelijkse bedieningspagina. Gebruik hem alleen als je:

- duidelijk weet welk probleem je wilt oplossen;
- eerst hebt gecontroleerd dat bronwaarden en flow kloppen;
- maar een kleine wijziging tegelijk doet.

## Tabs voor verdieping

De tabs `Diagnostiek`, `Instellingen` en `Service en test` zijn vooral bedoeld als je bewuster wilt onderzoeken wat er gebeurt.

De technische padnaam `service-test` kan in de YAML nog terugkomen, maar voor gewone dagelijkse controle heb je die pagina meestal niet nodig.

## Snelle controle

Als je in een minuut wilt weten of alles normaal oogt, controleer dan dit:

1. apparaat online;
2. gekozen temperaturen logisch;
3. flow logisch;
4. geen duidelijke fout- of storingssignalen;
5. gedrag past bij de warmtevraag in huis.

Gebruik je koeling, kijk dan ook of de dauwpunt- of koelbeveiliging niet blokkeert.

## Wat betekent `Gekozen`?

`Gekozen` betekent: dit is de waarde die OpenQuatt nu echt gebruikt voor de regeling.

Dat is belangrijk, omdat er meerdere bronnen mogelijk zijn voor dezelfde meting. Uiteindelijk telt alleen de waarde die als `Gekozen` in gebruik is.

## Verder lezen

- Uitleg van verwarmen en koelen: [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md)
- Problemen oplossen: [Problemen oplossen en afstellen](diagnose-en-afstelling.md)
- Technische verdieping: [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
