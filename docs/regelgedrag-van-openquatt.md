# Regelgedrag van OpenQuatt

Deze pagina helpt je begrijpen waarom OpenQuatt tijdens gebruik soms anders reageert dan je op het eerste gezicht verwacht.

Het gaat hier niet om afstellen, maar om het herkennen van normaal systeemgedrag.

## Het hoofdidee

OpenQuatt beslist niet op basis van één knop of één meetwaarde. Het gedrag ontstaat uit drie lagen tegelijk:

1. `Control Mode`
2. `Heating Strategy`
3. `Flow Mode`

Daardoor kun je vreemd gedrag bijna nooit verklaren vanuit alleen een pompstand of alleen een verwarmingsstrategie.

## Wat betekenen de Control Modes?

| Mode | In gewone taal |
|---|---|
| `CM0` | rust of standby |
| `CM1` | korte tussenstap voor of na verwarmen |
| `CM2` | normaal verwarmen met warmtepomp |
| `CM3` | warmtepomp met ketelhulp |
| `CM98` | vorstbeveiliging |

Voor gebruikers zijn vooral deze twee dingen belangrijk:

- OpenQuatt springt niet altijd direct van uit naar vol verwarmen;
- tussenstanden zijn vaak normaal beveiligd gedrag, geen storing.

## Waarom gaat het systeem niet altijd meteen naar verwarmen?

Dat gebeurt meestal om één van deze redenen:

- flow is nog niet logisch of nog te laag;
- de vraag is nog niet stabiel genoeg;
- een beveiliging of wachttijd is actief;
- er is een overgang bezig tussen systeemstanden.

Daardoor kan het soms voelen alsof OpenQuatt aarzelend reageert, terwijl het juist bewust voorkomt dat het systeem te snel schakelt.

## Wanneer komt de ketel erbij?

`CM3` betekent niet automatisch dat er iets mis is.

In gewone taal:

- OpenQuatt ziet dat de warmtepomp het tekort niet goed genoeg opvangt;
- dat tekort moet meestal duidelijk genoeg en lang genoeg aanwezig zijn;
- pas dan mag ketelhulp actief worden.

De ketel springt dus normaal niet op elk kort dipje direct bij.

## Waarom blijft het systeem soms juist te lang in een tussenstand?

Dat heeft vaak te maken met flow, bronkeuze of beveiliging.

Praktische oorzaken zijn vaak:

- onlogische of onstabiele flowmeting;
- verkeerde geselecteerde bron;
- minimum looptijd of wachttijd;
- begrenzing op totaal vermogen of aanvoertemperatuur.

Als je dat niet eerst controleert, lijkt het al snel alsof de strategie zelf fout zit.

## Welke rol speelt de verwarmingsstrategie?

De gekozen strategie bepaalt hoe warmtevraag wordt opgebouwd.

### Bij Power House

Dan kijkt OpenQuatt vooral naar:

- buitentemperatuur;
- kamerafwijking;
- geschatte warmtevraag van het huis.

Lees verder in [Power House](power-house.md).

### Bij Water Temperature Control

Dan kijkt OpenQuatt vooral naar:

- buitentemperatuur;
- stooklijn;
- gewenste en gemeten aanvoertemperatuur.

Lees verder in [Water Temperature Control](water-temperature-control.md).

## Welke rol speelt Flow Mode?

`Flow Mode` bepaalt hoe de pompregeling werkt, maar vervangt de rest van het systeem niet.

Belangrijk om te onthouden:

- een handmatige pompstand zet veiligheidslogica niet uit;
- `Flow Mode` verklaart dus niet alleen waarom het systeem wel of niet verwarmt;
- kijk altijd samen naar `Control Mode`, strategie en flow.

## Bronkeuze is vaak de echte oorzaak

Veel klachten blijken uiteindelijk geen regelprobleem, maar een bronprobleem.

Controleer daarom altijd eerst:

- `flow_rate_selected`
- `outside_temp_selected`
- `water_supply_temp_selected`
- `Room Temperature (Selected)`
- `Room Setpoint (Selected)`

Als deze bronnen niet kloppen, gaat OpenQuatt logisch reageren op verkeerde informatie.

## Snelle controle bij twijfel

1. Kijk welke `Control Mode` actief is.
2. Kijk welke `Heating Control Mode` actief is.
3. Controleer of de geselecteerde bronwaarden logisch zijn.
4. Kijk of flow en aanvoer zich normaal gedragen.
5. Pas daarna pas instellingen of strategie aan.

## Veelvoorkomende misverstanden

- Een tussenstand betekent niet automatisch een fout.
- `CM3` betekent niet automatisch dat de warmtepomp faalt.
- Een andere verwarmingsstrategie verandert niet alle beveiligingen eromheen.
- Een handmatige pompstand verklaart niet het hele systeemgedrag.

## Verder lezen

- [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md)
- [Power House](power-house.md)
- [Water Temperature Control](water-temperature-control.md)
- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
- [Problemen oplossen en afstellen](diagnose-en-afstelling.md)
