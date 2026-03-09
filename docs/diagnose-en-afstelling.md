# Diagnose en afstelling

Deze pagina is bedoeld voor situaties waarin OpenQuatt wel draait, maar niet stabiel of niet logisch genoeg reageert. Pas alleen iets aan als duidelijk is welk probleem je wilt oplossen.

## Basisregel

Voordat je gaat afstellen:

- verander maar een ding tegelijk;
- noteer oude en nieuwe waarden;
- beoordeel niet alleen een paar minuten, maar een langere periode;
- begin bij bronwaarden en flow, niet meteen bij moeilijke regelparameters.

Als het systeem stabiel werkt, is tunen meestal niet nodig.

## Diagnosevolgorde

Gebruik in de meeste gevallen deze volgorde:

1. controleer of de juiste meetwaarden geselecteerd zijn;
2. controleer flow en pompgedrag;
3. kijk pas daarna naar verwarmingsstrategie;
4. kijk daarna pas naar Duo-gedrag, boilerhulp of fijnere tuning;
5. beoordeel energie en comfort pas over een langere periode.

## Begrippen

- `Selected`: de waarde die OpenQuatt echt gebruikt.
- `Flow`: de waterdoorstroming in het systeem.
- `Verwarmingsstrategie`: de manier waarop OpenQuatt bepaalt hoeveel warmte nodig is.
- `Flipperen`: te snel heen-en-weer schakelen rond de gewenste temperatuur.
- `Runtime`: looptijd.

## Veelvoorkomende situaties

### Ik zie geen warmtepompgegevens

Controleer eerst:

- RS485-bekabeling;
- het gekozen firmwarebestand;
- of de juiste hardware is gebruikt.

Pas geen tuning toe zolang basisdata ontbreekt.

### Waarden lijken niet te kloppen

Kijk eerst in het dashboard bij `Sensor Configuration`.

Controleer:

- welke bron voor flow is gekozen;
- welke bron voor buitentemperatuur is gekozen;
- welke bron voor kamertemperatuur en setpoint is gekozen.

Als de bronkeuze niet klopt, wordt het gedrag in de rest van het systeem vrijwel altijd lastig te verklaren.

### Het systeem schakelt onrustig rond de kamertemperatuur

Kijk eerst hiernaar:

- zijn kamertemperatuur en setpoint logisch;
- is de gekozen verwarmingsstrategie passend;
- lijkt de flow stabiel;
- zie je dat het systeem steeds net te snel opnieuw begint of stopt.

Veilige eerste acties:

- verander niet meteen meerdere parameters;
- kies eerst een terughoudende wijziging, niet direct "meer vermogen";
- beoordeel het effect pas na voldoende tijd.

Bij `Duo` is het meestal wenselijk dat niet meteen beide units hard starten, maar dat het systeem rustig opbouwt.

### Het huis wordt niet warm genoeg

Controleer in deze volgorde:

1. klopt de gevraagde kamertemperatuur;
2. klopt de gemeten kamertemperatuur;
3. klopt de buitentemperatuurbron;
4. wordt de flow niet tegengehouden;
5. staan er geen begrenzingen actief die het gedrag afremmen.

Pas als deze basis klopt, heeft het zin om verwarmingsinstellingen te wijzigen.

### Het wordt te warm of het systeem blijft te lang doorgaan

Controleer eerst of de gebruikte kamer- en setpointwaarden kloppen. Te warm gedrag ontstaat vaak niet door te weinig beveiliging, maar doordat OpenQuatt met een verkeerde of verouderde bronwaarde rekent.

Daarna kun je pas kijken naar een minder agressieve afstelling.

### De flow lijkt goed, maar verwarmen blijft toch geblokkeerd

Dan is de kans groot dat een timer, veiligheid of bronkeuze meespeelt. Kijk naar:

- de gekozen flowbron;
- of de flow wel lang genoeg stabiel is;
- of er een low-flow toestand actief is geweest.

Kijk dus niet alleen naar een losse momentwaarde, maar naar het verloop over tijd.

### De ketel springt sneller bij dan verwacht

Controleer eerst:

- of de warmtevraag echt groot genoeg is;
- of er begrenzingen of tekorten zichtbaar zijn;
- of bronwaarden kloppen.

Pas daarna heeft het zin om naar de grens voor boilerhulp te kijken.

### Na een herstart of storing voelt alles even vreemd

Dat kan normaal zijn. OpenQuatt moet na een herstart weer actuele waarden inlezen en opnieuw stabiliseren.

Controleer eerst:

- staat `CM override` weer op `Auto`;
- komen de gekozen waarden weer logisch binnen;
- verdwijnen tijdelijke vreemde waarden na korte tijd.

## Afstellen

Hanteer een eenvoudige werkwijze:

1. schrijf de oude waarde op;
2. wijzig een kleine stap;
3. wacht;
4. beoordeel comfort, rust en energieverbruik;
5. draai terug als het slechter wordt.

Voor complexere tuning is deze volgorde het veiligst:

- eerst bronwaarden;
- daarna flow;
- daarna verwarmingsstrategie;
- pas als laatste geavanceerde fijnregeling.

## Gebruik energiedata met beleid

Vergelijk afstellingen niet op basis van enkele minuten gedrag. Kijk liever naar:

- een hele ochtend;
- een hele avond;
- of een volledige dag.

Gebruik de energietab in het dashboard om trends te beoordelen, niet om op elk klein verschil te reageren.

## Wanneer juist niets veranderen?

Verander bij voorkeur niets als:

- de woning comfortabel is;
- het systeem rustig draait;
- de waarden logisch zijn;
- je alleen op een enkele piek of dip reageert.

Te veel aanpassen is een van de snelste manieren om onrust in het systeem te houden.

## Verder lezen

- Installatie en basiscontrole: [Installatie en ingebruikname](installatie-en-ingebruikname.md)
- Uitleg van rollen en begrippen: [Hoe OpenQuatt werkt](hoe-openquatt-werkt.md)
- Dashboard lezen: [Dashboardoverzicht](dashboardoverzicht.md)
- Meer technische naslag: [Regelgedrag van OpenQuatt](regelgedrag-van-openquatt.md) en [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
