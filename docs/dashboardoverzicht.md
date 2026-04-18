# Dashboardoverzicht

Deze pagina beschrijft hoe je het OpenQuatt-dashboard in Home Assistant gebruikt. De nadruk ligt op dagelijkse controle, diagnose en de volgorde waarin je schermen raadpleegt.

## Kies eerst het juiste dashboard

Gebruik altijd de variant die past bij jouw opstelling:

- Duo NL: `docs/dashboard/openquatt_ha_dashboard_duo_nl.yaml`
- Duo EN: `docs/dashboard/openquatt_ha_dashboard_duo_en.yaml`
- Single NL: `docs/dashboard/openquatt_ha_dashboard_single_nl.yaml`
- Single EN: `docs/dashboard/openquatt_ha_dashboard_single_en.yaml`

Twijfel je nog over importeren, begin dan bij [Dashboard installeren](dashboard/README.md).

## Dagelijkse controle

Voor dagelijks gebruik zijn vooral deze onderdelen relevant:

### Overzicht

Kijk hier als eerste naar:

- of het systeem online is;
- welke temperatuurwaarden geselecteerd zijn;
- hoeveel vermogen en warmte nu geleverd wordt;
- of het systeem rustig en logisch reageert.

### Thermostaat en hoofdstanden

Hier zie je onder meer:

- welke verwarmingsstrategie actief is;
- of er een override actief is;
- of stille uren of niveaubegrenzingen meespelen.

### Energie

De energieweergave is vooral bruikbaar om veranderingen over langere tijd te beoordelen. Vergelijk liever dagdelen of volledige dagen dan enkele minuten.

## Diagnosevolgorde

### Sensorconfiguratie

Dit is meestal de eerste plek bij onlogische waarden. Hier zie je:

- welke bron per meetwaarde gekozen is;
- welke waarde uiteindelijk gebruikt wordt;
- of een bron ontbreekt of verouderd is.

Als hier de verkeerde bron gekozen is, raken ook andere schermen al snel misleidend. Daarom is dit meestal de eerste controle.

Bij cooling is deze tab extra belangrijk. Daar configureer je ook:

- de cooling enable bron;
- het aantal koelruimtes;
- de dauwpunt-, temperatuur- en RH-bronnen die via Home Assistant-proxy's worden ingelezen.

Gebruik je bewust de fallback zonder dauwpunt, dan configureer je die niet hier maar via `Instellingen`. De sensorconfiguratie-tab blijft dan leeg voor koelruimtes, en OpenQuatt schakelt over op de conservatieve fallback-route.

Als deze bronlaag niet klopt, is ook de cooling-tab niet betrouwbaar.

### Flow

Gebruik deze tab als:

- het debiet vreemd lijkt;
- het systeem niet wil doorverwarmen;
- de pomp onrustig lijkt te regelen.

### Warmtepompen

Gebruik deze tab voor diagnose per unit:

- hoe HP1 zich gedraagt;
- hoe HP2 zich gedraagt bij een Duo-opstelling;
- welke fouten of afwijkingen per unit zichtbaar zijn.

### Diagnostiek

Deze tab is bedoeld voor gedrag dat niet direct verklaarbaar is. Bijvoorbeeld wanneer:

- waarden wel lijken te kloppen, maar het gedrag toch vreemd is;
- het systeem snel schakelt;
- je wilt begrijpen waarom OpenQuatt juist wel of niet doorzet.

### Koeling

Gebruik deze tab zodra je cooling gebruikt of voorbereidt. Hier zie je onder meer:

- of cooling request actief is;
- of cooling op dit moment toegestaan is;
- waarom cooling eventueel geblokkeerd wordt;
- welk dauwpunt en welke minimale veilige aanvoer actief zijn;
- welk cooling-target en welke ruwe cooling demand OpenQuatt nu gebruikt.

De cooling-tab is dus vooral een runtime- en veiligheidsweergave. De bronkeuze zelf doe je op `Sensorconfiguratie`.

Gebruik je de fallback zonder dauwpunt, dan zie je hier ook:

- welke beveiligingsroute actief is (`Dew point`, `Fallback` of `Blocked`);
- wat het nachtminimum van de afgelopen nacht was;
- welke fallback minimale aanvoer OpenQuatt daaruit heeft afgeleid.

De fallback werkt bewust simpel:

- buiten `< 20°C`: cooling uit;
- `20–24°C`: minimum water `19°C`;
- `24–28°C`: minimum water `20°C`;
- `28–32°C`: minimum water `21°C`;
- `> 32°C`: minimum water `22°C`;
- nachtminimum `18–19°C`: `+1°C`;
- nachtminimum `19–20°C`: `+2°C`;
- nachtminimum `>= 20°C`: fallback uit.

De gewone dauwpuntmarge komt daar niet nog eens extra bovenop. Die conservatieve staffel is in de fallbackmodus zelf al de veiligheidsmarge.

## Tabs voor gevorderden

### Instellingen

Deze tab is niet bedoeld voor dagelijks gebruik. Gebruik hem alleen als je gericht instellingen wilt aanpassen en vooraf duidelijk hebt welk probleem je wilt beïnvloeden.

### Service en test

Deze tab is bedoeld voor service, testen en diepere diagnose. Voor dagelijks gebruik is hij meestal niet nodig.

De technische padnaam `service-test` blijft in de YAML bestaan, maar de zichtbare tabnamen in de NL-dashboards zijn nu ook gewoon Nederlandstalig.

## Snelle controle

Als je snel wilt beoordelen of alles normaal werkt, controleer dan deze vijf punten:

1. apparaat online;
2. gekozen temperaturen logisch;
3. debiet logisch;
4. geen duidelijke fout- of storingssignalen;
5. gedrag past bij de warmtevraag in huis.

Gebruik je cooling, voeg dan ook deze twee controles toe:

6. dauwpuntbron geldig;
7. cooling niet geblokkeerd door flow of veilige aanvoergrens.

## Wat betekent `Gekozen`?

`Gekozen` betekent: dit is de waarde die OpenQuatt op dat moment daadwerkelijk gebruikt. Dat is belangrijk, omdat er voor dezelfde meting meerdere bronnen beschikbaar kunnen zijn.

Voorbeelden:

- een buitentemperatuur uit Home Assistant;
- een lokale meting;
- een waarde uit een externe bron.

Voor de regeling telt uiteindelijk alleen de gekozen waarde.

## Als het dashboard onrustig of onduidelijk oogt

Werk dan in deze volgorde:

1. `Sensorconfiguratie`
2. `Flow`
3. `Warmtepompen` of `HP1`
4. `Diagnostiek`
5. pas daarna `Instellingen`

Zo voorkom je dat je instellingen wijzigt terwijl de oorzaak in de bronkeuze of een ontbrekende meting zit.
