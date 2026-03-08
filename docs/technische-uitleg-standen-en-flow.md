# Technische uitleg over standen en flow

Deze pagina is bedoeld als technische naslag voor mensen die willen begrijpen waarom OpenQuatt zich op runtime op een bepaalde manier gedraagt. De uitleg is bewuster eenvoudiger gehouden dan een specificatie, maar gebruikt nog wel de echte entiteitsnamen en mode-namen.

## Eerst het hoofdidee

OpenQuatt werkt in de praktijk met drie lagen die met elkaar samenhangen:

1. `Control Mode`: de algemene systeemstand.
2. `Heating Strategy`: de manier waarop warmtevraag wordt opgebouwd.
3. `Flow Mode`: de manier waarop pompaansturing wordt bepaald.

Je kunt dus niet naar alleen een pompstand of alleen een strategie kijken. Het gedrag is altijd een combinatie van deze drie.

## Control Mode in gewone taal

`Control Mode` is de globale toestand van het systeem.

| Mode | Betekenis | Praktisch gevolg |
|---|---|---|
| `CM0` | Rust / standby | geen normale verwarmingsactie |
| `CM1` | Tussenstand voor of na verwarmen | korte beschermende overgang |
| `CM2` | Verwarmen met warmtepomp | warmtepompbedrijf toegestaan |
| `CM3` | Warmtepomp plus ketelhulp | ketel mag bijspringen |
| `CM98` | Vorstbeveiliging | circulatie voor vorstbescherming |

De belangrijkste gedachte is: OpenQuatt gaat niet zomaar direct van "geen vraag" naar "vol verwarmen". Er zitten tussenstappen en veiligheidschecks in.

## Wanneer gaat het systeem naar een andere mode?

OpenQuatt kijkt daarbij vooral naar:

- of er warmtevraag is;
- of de flow geldig en voldoende is;
- of er een tekort is dat langdurig aanhoudt;
- of er handmatige overrides actief zijn;
- of vorstbescherming nodig is.

### Van rust naar verwarmen

Als er warmtevraag ontstaat, gaat het systeem meestal eerst via `CM1` en daarna naar `CM2`. Die tussenstap is bedoeld om de hydrauliek en de volgorde van acties netjes te houden.

### Van `CM2` naar `CM3`

De stap naar `CM3` gebeurt niet op een klein momentje tekort. Er zijn drempels en timers, zodat de ketel niet te snel bijspringt.

### Terug van `CM3` naar `CM2`

Ook terugschakelen gebeurt met drempels en wachttijd, zodat het systeem niet gaat pendelen.

## Waarom blijft het systeem soms hangen in een tussenstand?

Dat heeft vaak te maken met flow of veiligheid.

Als verwarmen gevraagd wordt, maar de gekozen flow te laag is of te lang ongeldig blijft:

- wordt een low-flow toestand actief;
- wordt verdere opbouw naar normaal verwarmen tegengehouden;
- blijft OpenQuatt in een veiligere tussenroute.

Dat voelt soms alsof het systeem "niet doorpakt", maar is meestal bewust gedrag.

## Overrides

Met `select.openquatt_cm_override` kun je het gedrag tijdelijk forceren:

- `Auto`
- `Force CM0`
- `Force CM1`
- `Force CM98`

Gebruik dit alleen bewust. Voor normaal gebruik hoort deze instelling op `Auto` te staan.

## Begrenzing op totaal vermogen

OpenQuatt kan ook rekening houden met totaal opgenomen vermogen. Dat gebeurt via `oq_power_cap_f`.

Het idee is eenvoudig:

- bij een zachte overschrijding grijpt het systeem rustig in;
- bij een piek grijpt het sneller in;
- als de situatie weer normaal is, laat het systeem geleidelijk meer toe.

Zo wordt de warmtevraag niet los gezien van het totale elektrische gedrag.

## Verwarmingsstrategieën

### Power House

Bij `Power House` kijkt OpenQuatt vooral naar wat het huis ongeveer nodig heeft op basis van onder andere buitentemperatuur en kamerafwijking.

Belangrijk om te onthouden:

- het systeem rekent niet alleen op een instantane kamerfout;
- er zijn dode zones, grenzen en op- en afbouwsnelheden;
- OpenQuatt probeert laaglast-gedrag rustig te houden om flipperen te voorkomen.

Handige diagnose-entiteiten:

- `Low-load dynamic thresholds`
- `CM2 idle-exit reason`
- `CM2 re-entry block active`
- `Heat-enable state (shadow)`

### Water Temperature Control

Bij deze strategie kijkt OpenQuatt vooral naar de gewenste aanvoertemperatuur via een stooklijn.

Belangrijk om te onthouden:

- de regeling gebruikt de gekozen aanvoertemperatuurbron;
- er zijn profielen en PID-instellingen;
- rond lage vraag probeert het systeem niet te abrupt naar nul te springen.

Deze strategie past vaak beter bij gebruikers die in termen van aanvoertemperatuur of stooklijn denken.

## Flow Mode

`Flow Mode` bepaalt hoe de pompregeling werkt.

Beschikbare keuzes:

- `Flow Setpoint`
- `Manual PWM`

Maar de uiteindelijke pompaansturing hangt nog steeds ook af van `Control Mode`. Een handmatige pompstand overschrijft dus niet alle veiligheidslogica van het systeem.

## Volgorde in de flowregeling

In technische termen is de volgorde:

1. `CM0` stopt normale flowactie vroegtijdig.
2. autotune kan tijdelijk voorrang krijgen.
3. handmatige of vorst-PWM kan gelden.
4. anders werkt de automatische regeling.

Die volgorde voorkomt dat meerdere delen van het systeem tegelijk "eigenaar" van dezelfde pompactie proberen te zijn.

## Wat betekent AUTO PI grofweg?

De automatische flowregeling gebruikt een regelaar die probeert de flow rond de gewenste waarde te houden.

Praktisch betekent dat:

- niet elke kleine afwijking geeft direct een grote reactie;
- er is een opstartfase;
- er zijn grenzen om te agressief regelen te voorkomen;
- bij ongeldige meetwaarden kiest OpenQuatt voor een voorzichtige fallback.

## Bronkeuze is vaak de echte oorzaak

Veel vreemd gedrag ontstaat niet door een slechte regelstrategie, maar door een verkeerde gekozen bron.

Voor de regeling zijn vooral belangrijk:

- `flow_rate_selected`
- `outside_temp_selected`
- `water_supply_temp_selected`

Als deze gekozen waarden niet kloppen, lijkt het alsof de modes verkeerd werken terwijl de bronkeuze het echte probleem is.

## Veelgemaakte misverstanden

- Een hoge flow op één moment betekent niet automatisch dat een low-flow toestand meteen moet verdwijnen.
- `Flow Mode` vervangt `Control Mode` niet.
- Een andere verwarmingsstrategie verandert niet de onderliggende veiligheidslogica.
- `CM3` betekent niet automatisch dat er iets stuk is; het betekent dat ketelhulp volgens de ingestelde regels nodig was.

## Snelle controletabel

| Situatie | Verwacht gedrag |
|---|---|
| geen vraag, geen vorst | `CM0` |
| warmtevraag start | meestal eerst `CM1`, daarna `CM2` |
| te lage of ongeldige flow | veilig gedrag, geen normale doorbouw |
| langdurig tekort in `CM2` | mogelijk door naar `CM3` |
| tekort herstelt in `CM3` | terug naar `CM2` |
| vorstgevaar zonder normale warmtevraag | `CM98` |

## Wat controleer je bij twijfel?

1. Kijk welke `Control Mode` actief is.
2. Kijk welke bronwaarden daadwerkelijk geselecteerd zijn.
3. Kijk of de flow logisch en stabiel is.
4. Kijk pas daarna naar strategie- of tuninginstellingen.
