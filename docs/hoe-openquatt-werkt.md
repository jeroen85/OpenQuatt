# Hoe OpenQuatt werkt

Deze pagina beschrijft de rol van OpenQuatt binnen het totale systeem. Het belangrijkste doel is dat je thermostaat, OpenQuatt, warmtepomp en Home Assistant functioneel uit elkaar kunt houden.

## Samengevat

- De thermostaat vraagt warmte voor de woning.
- De warmtepomp maakt de warmte.
- OpenQuatt beoordeelt beschikbare meetwaarden, bewaakt de werking en grijpt in waar dat zinvol en veilig is.
- Home Assistant geeft inzicht, instellingen en diagnose.

## Wie doet wat?

### De thermostaat

De thermostaat blijft het uitgangspunt voor de warmtevraag in huis. In de praktijk gaat het vooral om:

- de gewenste kamertemperatuur;
- de gemeten kamertemperatuur;
- het algemene verwarmingsverzoek.

Gebruik je een OpenTherm-thermostaat, dan zijn setpoint en actuele kamertemperatuur meestal goed beschikbaar. OpenQuatt vervangt de thermostaat niet, maar werkt erop voort.

### OpenQuatt

OpenQuatt is de laag die:

- meetwaarden verzamelt;
- bepaalt welke bronwaarden gebruikt worden;
- beoordeelt hoe terughoudend of actief het systeem moet reageren;
- extra beveiliging en bewaking toevoegt;
- de gegevens ontsluit voor Home Assistant.

OpenQuatt vormt daarmee de schakel tussen warmtevraag, beschikbare data en de manier waarop het systeem daarop reageert.

### De warmtepomp

De warmtepomp doet het feitelijke werk: water verwarmen, vermogen leveren, interne beveiligingen uitvoeren en foutmeldingen afgeven.

OpenQuatt kan de warmtepomp niet buiten zijn eigen grenzen laten werken. De eigen beveiligingen van de warmtepomp blijven altijd leidend.

### Home Assistant

Home Assistant is het bedienings- en inzichtgedeelte:

- dashboard;
- trends;
- instellingen;
- diagnose;
- optioneel extra bronwaarden.

Home Assistant is niet strikt noodzakelijk voor het basisprincipe van OpenQuatt, maar in de praktijk wel de meest bruikbare manier om het systeem te volgen en te beheren.

## Waar komen de meetwaarden vandaan?

OpenQuatt kan waarden uit meerdere bronnen halen:

- lokaal gemeten waarden op de OpenQuatt-controller;
- gegevens uit de CIC-feed;
- waarden uit Home Assistant.

De term `Selected` betekent: dit is de waarde die OpenQuatt op dat moment daadwerkelijk gebruikt voor de regeling.

Als een bron ontbreekt, verouderd is of niet plausibel lijkt, kiest OpenQuatt liever voor terughoudend gedrag dan voor agressief doorverwarmen.

## Flow en flowregeling

`Flow` is de hoeveelheid water die door het systeem stroomt. Die waarde is belangrijk, omdat een warmtepomp niet prettig werkt als de waterdoorstroming te laag of onbetrouwbaar is.

Daarom kijkt OpenQuatt niet alleen naar warmtevraag, maar ook naar de vraag of het systeem hydraulisch stabiel genoeg is om veilig te verwarmen. Als de flow te laag is, te lang ontbreekt of onbetrouwbaar lijkt, reageert OpenQuatt terughoudend.

## Regelstrategieën

OpenQuatt kent twee hoofdstrategieën om warmte op te bouwen:

### Power House

Deze strategie kijkt vooral naar de warmtevraag van de woning. Dat past vaak bij gebruikers die het gedrag vooral aan comfort en kamervraag willen koppelen. Het tempo waarmee de gevraagde warmte op- en afbouwt wordt daarbij gestuurd via een reactieprofiel en aparte opbouw-/afbouwtijd.

### Water Temperature Control

Deze strategie kijkt vooral naar de gewenste watertemperatuur. Dat sluit beter aan bij gebruikers die liever werken met een stooklijn of een aanvoertemperatuurdoel.

### Watertempbegrenzing

Welke strategie je ook gebruikt, OpenQuatt kijkt daarnaast naar `Water Supply Temp (Selected)`. Daarmee kan het systeem:

- in stooklijnmodus de gevraagde aanvoertemperatuur begrenzen;
- in `Power House` de warmtevraag geleidelijk terugnemen als de aanvoer te hoog wordt;
- in `CM3` de boiler blokkeren als de aanvoer op de ingestelde bovengrens komt.

Die geselecteerde aanvoertemperatuur kan uit de lokale ESP-sensor, uit CIC of uit een Home Assistant-input komen, afhankelijk van jouw bronkeuze.

Je hoeft daarvoor niet eerst de interne berekening te kennen. Relevanter is welke strategie in jouw installatie het meest stabiele en voorspelbare gedrag geeft.

## Single en Duo

Bij `Single` is er een warmtepomp. Bij `Duo` zijn het er twee.

Het doel bij `Duo` is niet om direct beide units maximaal te laten werken. Rustige, langere runs zijn vaak gunstiger. In de praktijk betekent dat:

- waar mogelijk eerst een rustige inzet;
- de tweede unit alleen laten bijspringen als dat echt nodig is;
- onnodig aan-uitgedrag beperken.

Hoe dat precies gebeurt, hangt af van de gekozen verwarmingsstrategie:

- in `Water Temperature Control` werkt OpenQuatt in de basis single-HP-first; de tweede warmtepomp mag pas meedoen als de vraag hoog genoeg blijft;
- in `Power House` rekent OpenQuatt meerdere geldige combinaties door en kiest daarna de combinatie die de warmtevraag goed genoeg volgt met het laagste elektrische verbruik.

Bij `Power House` betekent dat dus niet automatisch "eerst 1 warmtepomp" of "liever altijd 2 warmtepompen". Soms is 1 warmtepomp zuiniger, soms 2 op lagere levels. OpenQuatt wisselt alleen als dat echt voordeel geeft en houdt een single-/duokeuze kort vast om onrust te beperken.

## Stabiliteit en pendelgedrag

Snel schakelen rond de kamertemperatuur wordt vaak omschreven als "flipperen" of pendelen. OpenQuatt probeert dat te beperken door:

- niet op elke kleine meetverandering direct te reageren;
- grenzen en wachttijden te gebruiken;
- flow en andere randvoorwaarden mee te nemen;
- bij `Duo` het vermogen rustiger op te bouwen.

Als een installatie toch blijft pendelen, is dat meestal het gevolg van bronwaarden, regelstrategie en afstelling samen, niet van een los getal.

## Gedrag na herstart of storing

Na een herstart of tijdelijke storing gebeurt in grote lijnen dit:

1. OpenQuatt start opnieuw op.
2. Het systeem leest de actuele waarden opnieuw in.
3. De regeling bouwt zijn toestand opnieuw op.
4. Tijdens die opstartfase kan het systeem tijdelijk voorzichtiger reageren.

Belangrijk daarbij is:

- de warmtepomp heeft eigen beveiligingen;
- OpenQuatt voegt daar extra controle bovenop toe;
- bij ongeldige of verouderde data kiest OpenQuatt liever voor een veilige tussenstap dan voor forceren.

## Begrippen

- `OpenTherm (OT)`: een manier waarop thermostaat en verwarmingssysteem gegevens kunnen uitwisselen.
- `CIC`: een externe gegevensbron die bepaalde waarden kan aanleveren.
- `Selected`: de waarde die op dit moment echt gebruikt wordt.
- `Runtime`: looptijd.
- `KPI`: kengetal, bijvoorbeeld COP of energieverbruik.
- `Hardwareprofiel`: de ondersteunde print waarop OpenQuatt draait. Op dit moment is dat een keuze tussen de twee ondersteunde borden.

## Verder lezen

- Installeren en eerste controle: [Installatie en ingebruikname](installatie-en-ingebruikname.md)
- Dashboard begrijpen: [Dashboardoverzicht](dashboardoverzicht.md)
- Problemen oplossen: [Diagnose en afstelling](diagnose-en-afstelling.md)
- Meer technische naslag: [Regelgedrag van OpenQuatt](regelgedrag-van-openquatt.md) en [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
