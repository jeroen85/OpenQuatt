# Dashboard uitleg

Deze pagina legt uit hoe je het OpenQuatt-dashboard in Home Assistant leest. Het doel is niet om elke kaart technisch uit te pluizen, maar om snel te weten waar je moet kijken bij dagelijks gebruik en bij storingen.

## Kies eerst het juiste dashboard

Gebruik altijd de variant die past bij jouw opstelling:

- Duo NL: `docs/dashboard/openquatt_ha_dashboard_duo_nl.yaml`
- Duo EN: `docs/dashboard/openquatt_ha_dashboard_duo_en.yaml`
- Single NL: `docs/dashboard/openquatt_ha_dashboard_single_nl.yaml`
- Single EN: `docs/dashboard/openquatt_ha_dashboard_single_en.yaml`

Twijfel je nog over importeren, begin dan bij [Dashboard installeren](dashboard/README.md).

## Wat zie je dagelijks?

Voor dagelijks gebruik zijn vooral deze onderdelen belangrijk:

### Overzicht

Hier kijk je als eerste naar:

- of het systeem online is;
- welke temperatuurwaarden gekozen zijn;
- hoeveel vermogen en warmte er nu geleverd wordt;
- of het systeem rustig en logisch reageert.

### Thermostaat en hoofdstanden

Belangrijk is dat je hier snel kunt zien:

- welke verwarmingsstrategie actief is;
- of er een override actief is;
- of stille uren of niveaubegrenzingen meespelen.

### Energie

De energieweergave is vooral handig om veranderingen over een hele dag te beoordelen. Kijk niet te veel naar een paar minuten; vergelijk liever complete dagdelen of een volledige dag.

## Waar kijk je als iets niet klopt?

### Sensorconfiguratie

Dit is meestal de eerste plek bij rare waarden. Hier zie je:

- welke bron per meetwaarde gekozen is;
- welke waarde uiteindelijk gebruikt wordt;
- of een bron ontbreekt of verouderd is.

Als de verkeerde bron gekozen is, lijken andere schermen vaak ook onlogisch. Daarom is dit meestal de beste eerste controle.

### Debiet

Gebruik deze tab als:

- het debiet vreemd lijkt;
- het systeem niet wil doorverwarmen;
- de pomp onrustig lijkt te regelen.

### Warmtepompen

Gebruik deze tab voor unit-specifieke diagnose:

- hoe HP1 zich gedraagt;
- hoe HP2 zich gedraagt bij een Duo-opstelling;
- welke fouten of afwijkingen per unit zichtbaar zijn.

### Diagnostiek

Deze tab is bedoeld voor moeilijker uit te leggen gedrag. Denk aan gevallen waarin:

- waarden wel lijken te kloppen, maar het gedrag toch vreemd is;
- het systeem snel schakelt;
- je wilt begrijpen waarom OpenQuatt juist wel of niet doorzet.

## Wat is alleen voor gevorderden?

### Afstellen

Deze tab is niet bedoeld voor dagelijks gebruik. Gebruik hem alleen als je bewust iets wilt afstellen en je vooraf weet welk probleem je probeert op te lossen.

### Service en test

Deze tab is bedoeld voor service, testen en diepere diagnose. Voor gewone dagelijkse bediening kun je hem meestal negeren.

De technische padnaam `service-test` blijft in de YAML bestaan, maar de zichtbare tabnamen in de NL-dashboards zijn nu ook gewoon Nederlandstalig.

## Handige dagelijkse routine

Als je maar een minuut hebt, kijk dan naar deze vijf dingen:

1. apparaat online;
2. gekozen temperaturen logisch;
3. debiet logisch;
4. geen duidelijke fout- of storingssignalen;
5. gedrag past bij de warmtevraag in huis.

## Wat betekent `Gekozen` op het dashboard?

`Gekozen` betekent: dit is de waarde die OpenQuatt nu echt gebruikt. Dat is belangrijk, want je kunt soms meerdere mogelijke bronnen hebben voor dezelfde meting.

Voorbeelden:

- een buitentemperatuur uit Home Assistant;
- een lokale meting;
- een waarde uit een externe bron.

De gekozen waarde is dan de enige die echt telt voor de regeling.

## Wat als het dashboard onrustig of onduidelijk voelt?

Loop dan in deze volgorde:

1. `Sensorconfiguratie`
2. `Debiet`
3. `Warmtepompen` of `HP1`
4. `Diagnostiek`
5. pas daarna `Afstellen`

Zo voorkom je dat je instellingen gaat veranderen terwijl het echte probleem gewoon een verkeerde bronwaarde of een ontbrekende meting is.
