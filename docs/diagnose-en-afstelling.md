# Problemen oplossen en afstellen

Deze pagina is bedoeld voor situaties waarin OpenQuatt wel draait, maar niet logisch of niet rustig genoeg reageert. De hoofdregel is simpel: eerst begrijpen wat er gebeurt, pas daarna iets aanpassen.

## Eerst kijken, dan pas wijzigen

Voordat je iets verandert:

- verander maar een ding tegelijk;
- noteer oude en nieuwe waarden;
- beoordeel gedrag over langere tijd, niet over een paar minuten;
- begin bij bronwaarden en flow, niet bij ingewikkelde tuning.

Als het systeem comfortabel en rustig werkt, is extra afstellen meestal niet nodig.

## Veilige diagnosevolgorde

Gebruik in de meeste gevallen deze volgorde:

1. controleer of de juiste meetwaarden gekozen zijn;
2. controleer flow en pompgedrag;
3. kijk daarna pas naar de gekozen verwarmingsstrategie;
4. stel alleen iets bij als het probleem daarna nog steeds duidelijk is.

## Belangrijke begrippen

- `Gekozen` of `Selected`: de waarde die OpenQuatt nu echt gebruikt.
- `Flow`: de waterdoorstroming in het systeem.
- `Verwarmingsstrategie`: de manier waarop OpenQuatt bepaalt hoeveel warmte nodig is.
- `Flipperen`: te snel heen en weer schakelen rond de gewenste temperatuur.

## Veelvoorkomende situaties

### Waarden lijken niet te kloppen

Kijk eerst in het dashboard bij `Sensorconfiguratie`.

Controleer vooral:

- bron voor buitentemperatuur;
- bron voor kamertemperatuur;
- bron voor setpoint;
- bron voor flow.

Als de bronkeuze niet klopt, wordt de rest van het gedrag bijna altijd lastig te verklaren.

### Ik zie geen warmtepompgegevens

Controleer eerst:

- RS485-bekabeling;
- of je het juiste firmwarebestand hebt gekozen;
- of de hardwarekeuze klopt.

Ga niet tunen zolang basisdata ontbreekt.

### Het huis wordt niet warm genoeg

Controleer in deze volgorde:

1. klopt de gevraagde kamertemperatuur;
2. klopt de gemeten kamertemperatuur;
3. klopt de buitentemperatuurbron;
4. lijkt de flow normaal;
5. zie je geen begrenzing of blokkade die het systeem afremt.

Pas als deze basis klopt, heeft het zin om naar verwarmingsinstellingen te kijken.

### Het wordt te warm of het systeem blijft te lang doorgaan

Controleer eerst of kamer- en setpointwaarden logisch zijn. Te warm gedrag komt vaak eerder door een verkeerde meetwaarde dan door te weinig beveiliging.

Kijk daarna pas of de afstelling te agressief is.

### Het systeem schakelt onrustig

Kijk eerst hiernaar:

- passen kamertemperatuur en setpoint bij elkaar;
- lijkt de flow stabiel;
- wisselt het systeem erg snel tussen starten en stoppen;
- heb je kort geleden meerdere instellingen tegelijk veranderd.

Veilige eerste actie:

- draai terug naar de laatste logische instelling en verander daarna alleen kleine stappen.

### Koeling blijft geblokkeerd

Controleer dan:

- is er echt een koelvraag;
- is de flow bruikbaar;
- is dauwpuntinformatie beschikbaar, of heb je bewust een fallback geactiveerd;
- blokkeert de veilige minimale aanvoertemperatuur de koeling niet.

## Als je toch wilt afstellen

Houd deze werkwijze aan:

1. schrijf de oude waarde op;
2. maak een kleine wijziging;
3. wacht lang genoeg;
4. beoordeel comfort, rust en verbruik;
5. draai terug als het slechter wordt.

Voor gewone gebruikers is dit meestal de veiligste volgorde:

- eerst bronwaarden;
- daarna flow;
- daarna pas strategie-instellingen.

## Gebruik energiedata met beleid

Vergelijk afstellingen niet op basis van enkele minuten gedrag. Kijk liever naar:

- een hele ochtend;
- een hele avond;
- of een volledige dag.

Gebruik energiegegevens om trends te zien, niet om op elke kleine schommeling te reageren.

## Wanneer juist niets veranderen?

Verander bij voorkeur niets als:

- de woning comfortabel is;
- het systeem rustig draait;
- de waarden logisch ogen;
- je alleen op een eenmalige piek of dip reageert.

Te veel aanpassen houdt onrust vaak juist in stand.

## Verder lezen

- Uitleg van de basis: [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md)
- Dashboardroute: [Dashboard gebruiken](dashboardoverzicht.md)
- Technische verdieping: [Instellingen en meetwaarden](instellingen-en-meetwaarden.md) en [Regelgedrag van OpenQuatt](regelgedrag-van-openquatt.md)
