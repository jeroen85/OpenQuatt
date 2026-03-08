# Hoe OpenQuatt werkt

Deze pagina legt in gewone taal uit wat OpenQuatt doet, en vooral ook wat OpenQuatt niet doet. Het doel is dat je de rollen van thermostaat, OpenQuatt, warmtepomp en Home Assistant uit elkaar kunt houden.

## In 30 seconden

- De thermostaat vraagt warmte voor de woning.
- De warmtepomp maakt de warmte.
- OpenQuatt kijkt naar beschikbare meetwaarden, bewaakt de werking en stuurt bij waar dat zinvol en veilig is.
- Home Assistant laat alles zien en geeft je toegang tot instellingen en diagnose.

## Wie doet wat?

### De thermostaat

De thermostaat blijft het startpunt voor de warmtevraag in huis. In de praktijk gaat het vooral om:

- de gewenste kamertemperatuur;
- de gemeten kamertemperatuur;
- het algemene verwarmingsverzoek.

Heb je een OpenTherm-thermostaat, dan is dat vooral nuttig omdat setpoint en actuele temperatuur netjes beschikbaar komen. OpenQuatt vervangt de thermostaat dus niet; het bouwt er bovenop.

### OpenQuatt

OpenQuatt is de laag die:

- meetwaarden verzamelt;
- kiest welke bronwaarde gebruikt moet worden;
- bepaalt hoe rustig of actief het systeem moet reageren;
- extra beveiliging en bewaking toevoegt;
- de gegevens begrijpelijk toont in Home Assistant.

OpenQuatt zit dus tussen "er is warmtevraag" en "hoe laten we het systeem daar verstandig op reageren".

### De warmtepomp

De warmtepomp doet het echte werk: water verwarmen, vermogen leveren, eigen beveiligingen uitvoeren en eventuele foutmeldingen geven.

OpenQuatt kan de warmtepomp niet buiten zijn eigen grenzen laten werken. De eigen beveiligingen van de warmtepomp blijven altijd leidend.

### Home Assistant

Home Assistant is het bedienings- en inzichtstuk:

- dashboard;
- trends;
- instellingen;
- diagnose;
- optioneel extra bronwaarden.

Home Assistant is dus geen vereiste voor het basisidee van OpenQuatt, maar in de praktijk wel de fijnste manier om het systeem te gebruiken.

## Waar komen de meetwaarden vandaan?

OpenQuatt kan waarden uit meerdere bronnen halen:

- lokaal gemeten waardes op de OpenQuatt-controller;
- gegevens uit de CIC-feed;
- waarden uit Home Assistant.

De term `Selected` betekent simpelweg: dit is de waarde die OpenQuatt op dit moment echt gebruikt voor de regeling.

Als een bron ontbreekt, oud is of onlogisch lijkt, kiest OpenQuatt liever voor voorzichtig gedrag dan voor agressief doorverwarmen.

## Wat betekent flowregeling?

`Flow` is de hoeveelheid water die door het systeem stroomt. Die waarde is belangrijk, omdat een warmtepomp niet prettig werkt als de waterdoorstroming te laag of onbetrouwbaar is.

Daarom bewaakt OpenQuatt niet alleen of er warmtevraag is, maar ook of het systeem hydraulisch gezond genoeg lijkt om veilig te verwarmen. Als de flow te laag is, te lang ontbreekt of niet betrouwbaar is, zal OpenQuatt terughoudend reageren.

## Twee manieren van regelen

OpenQuatt kent twee hoofdmanieren om warmte te sturen:

### Power House

Deze manier kijkt vooral naar de warmtevraag van het huis. Dat is handig als je gedrag wilt dat dicht bij comfort en kamervraag blijft.

### Water Temperature Control

Deze manier kijkt vooral naar de gewenste watertemperatuur. Dat past beter bij gebruikers die liever in termen van een stooklijn of aanvoertemperatuur denken.

Je hoeft niet direct te weten welke interne formule daarachter zit. Belangrijker is dat je begrijpt welke manier het rustigst en prettigst werkt in jouw huis.

## Single en Duo

Bij `Single` is er een warmtepomp. Bij `Duo` zijn het er twee.

Het doel bij `Duo` is niet om altijd meteen beide units hard te laten werken. Juist rustige, langere runs zijn vaak wenselijk. In de praktijk betekent dat:

- waar mogelijk eerst een rustige inzet;
- de tweede unit alleen laten bijspringen als dat echt nodig is;
- onnodig aan-uitgedrag beperken.

## Hoe voorkomt OpenQuatt onrustig gedrag?

Veel gebruikers noemen snel schakelen rond de kamertemperatuur "flipperen". OpenQuatt probeert dat te beperken door:

- niet op elke kleine meetverandering direct te reageren;
- grenzen en wachttijden te gebruiken;
- flow en andere randvoorwaarden mee te nemen;
- bij `Duo` het vermogen rustiger op te bouwen.

Als een installatie toch blijft pendelen, is dat meestal een combinatie van bronwaarden, verwarmingsstrategie en te agressieve afstelling, niet van een enkel getal.

## Wat doet OpenQuatt bij storingen of herstart?

Bij een herstart of tijdelijke storing gebeurt in grote lijnen dit:

1. OpenQuatt start opnieuw op.
2. Het systeem leest de actuele waarden opnieuw in.
3. De regeling bouwt zijn toestand opnieuw op.
4. Tijdens die opstartfase kan het gedrag kort voorzichtiger zijn.

Belangrijk om te onthouden:

- de warmtepomp heeft eigen beveiligingen;
- OpenQuatt voegt daar extra controle bovenop toe;
- bij ongeldige of verouderde data kiest OpenQuatt liever voor een veilige tussenstap dan voor hard doorduwen.

## Begrippen in gewone taal

- `OpenTherm (OT)`: een manier waarop thermostaat en verwarmingssysteem gegevens kunnen uitwisselen.
- `CIC`: een externe gegevensbron die bepaalde waarden kan aanleveren.
- `Selected`: de waarde die op dit moment echt gebruikt wordt.
- `Runtime`: looptijd.
- `KPI`: kengetal, bijvoorbeeld COP of energieverbruik.
- `Hardwareprofiel`: de ondersteunde print waarop OpenQuatt draait. Op dit moment dus gewoon een keuze tussen de twee ondersteunde borden.

## Wanneer moet je verder lezen?

- Installeren of lokaal bouwen: [Installatie en eerste start](installatie-en-eerste-start.md)
- Dashboard begrijpen: [Dashboard uitleg](dashboard-uitleg.md)
- Problemen oplossen: [Problemen oplossen en afstellen](problemen-oplossen-en-afstellen.md)
- Meer technische naslag: [Technische uitleg over standen en flow](technische-uitleg-standen-en-flow.md) en [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)

## Technische bijlage voor ontwikkelaars

Voor gewone gebruikers is deze bijlage niet nodig. Voor onderhoud aan de codebase is het wel handig om te weten dat de package-volgorde bewust is opgebouwd.

Package include order is intentional:

1. `oq_common`
2. `oq_supervisory_controlmode`
3. `oq_heating_strategy`
4. `oq_heat_control`
5. `oq_flow_control`
6. `oq_flow_autotune`
7. `oq_boiler_control`
8. `oq_energy`
9. `oq_cic`
10. `oq_ha_inputs`
11. `oq_local_sensors`
12. `oq_sensor_sources`
13. `oq_debug_testing`
14. `oq_debug_testing_duo`
15. `oq_webserver`
16. `oq_HP_io`
