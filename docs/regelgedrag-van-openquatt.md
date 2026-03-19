# Regelgedrag van OpenQuatt

Deze pagina is bedoeld als technische naslag voor wie wil begrijpen waarom OpenQuatt zich tijdens runtime op een bepaalde manier gedraagt. De uitleg gebruikt de echte entiteitsnamen en mode-namen, maar blijft gericht op praktisch begrip in plaats van op een formele specificatie.

## Hoofdmodel

OpenQuatt werkt in de praktijk met drie lagen die met elkaar samenhangen:

1. `Control Mode`: de algemene systeemstand.
2. `Heating Strategy`: de manier waarop warmtevraag wordt opgebouwd.
3. `Flow Mode`: de manier waarop pompaansturing wordt bepaald.

Je kunt het gedrag daarom niet verklaren vanuit alleen een pompstand of alleen een strategie. Het is steeds een combinatie van deze drie lagen.

## Control Mode

`Control Mode` is de globale toestand van het systeem.

| Mode | Betekenis | Praktisch gevolg |
|---|---|---|
| `CM0` | Rust / standby | geen normale verwarmingsactie |
| `CM1` | Tussenstand voor of na verwarmen | korte beschermende overgang |
| `CM2` | Verwarmen met warmtepomp | warmtepompbedrijf toegestaan |
| `CM3` | Warmtepomp plus ketelhulp | ketel mag bijspringen |
| `CM98` | Vorstbeveiliging | circulatie voor vorstbescherming |

Het belangrijkste uitgangspunt is dat OpenQuatt niet direct van "geen vraag" naar "vol verwarmen" springt. Er zitten tussenstappen en veiligheidscontroles in.

## Wanneer gaat het systeem naar een andere mode?

OpenQuatt kijkt daarbij vooral naar:

- of er warmtevraag is;
- of de flow geldig en voldoende is;
- of er een tekort is dat langdurig aanhoudt;
- of er handmatige overrides actief zijn;
- of vorstbescherming nodig is.

### Van rust naar verwarmen

Als er warmtevraag ontstaat, gaat het systeem meestal eerst via `CM1` en daarna naar `CM2`. Die tussenstap is bedoeld om hydrauliek en acties in de juiste volgorde op te bouwen.

### Van `CM2` naar `CM3`

De stap naar `CM3` gebeurt niet op basis van een kort tekort. Drempels en timers voorkomen dat de ketel te snel bijspringt.

### Terug van `CM3` naar `CM2`

Ook terugschakelen gebeurt met drempels en wachttijd, zodat het systeem niet onnodig gaat pendelen.

## Waarom blijft het systeem soms in een tussenstand?

Dat heeft meestal te maken met flow of veiligheid.

Als verwarmen gevraagd wordt, maar de gekozen flow te laag is of te lang ongeldig blijft:

- wordt een low-flow toestand actief;
- wordt verdere opbouw naar normaal verwarmen tegengehouden;
- blijft OpenQuatt in een veiligere tussenroute.

Dat kan voelen alsof het systeem niet doorpakt, maar is meestal bewust beveiligd gedrag.

## Overrides

Met `select.openquatt_cm_override` kun je het gedrag tijdelijk forceren:

- `Auto`
- `Force CM0`
- `Force CM1`
- `Force CM98`

Gebruik dit alleen doelbewust. Voor normaal gebruik hoort deze instelling op `Auto` te staan.

## Begrenzing van totaal vermogen

OpenQuatt kan ook rekening houden met totaal opgenomen vermogen. Dat gebeurt via `oq_power_cap_f`.

Het principe is als volgt:

- bij een zachte overschrijding grijpt het systeem rustig in;
- bij een piek grijpt het sneller in;
- als de situatie weer normaal is, laat het systeem geleidelijk meer toe.

Zo wordt warmtevraag niet los gezien van het totale elektrische gedrag van de installatie.

## Verwarmingsstrategieën

### Power House

Bij `Power House` kijkt OpenQuatt vooral naar wat de woning nodig heeft op basis van onder meer buitentemperatuur en kamerafwijking.

Belangrijke eigenschappen:

- het systeem rekent niet alleen op een instantane kamerfout;
- er zijn dode zones, grenzen en een reactieprofiel met opbouw-/afbouwtijd;
- OpenQuatt probeert laaglastgedrag rustig te houden om pendelen te voorkomen.

Handige diagnose-entiteiten:

- `Low-load dynamic thresholds`
- `CM2 idle-exit reason`
- `CM2 re-entry block active`
- `Heat-enable state (shadow)`

`Low-load dynamic thresholds` toont live of cached `pmin/off/on`; als die dynamische input ontbreekt, valt OpenQuatt terug op interne fallbackdrempels.

#### Duo-keuze in Power House

In een `Duo`-opstelling gebruikt `Power House` geen vaste regel als "altijd eerst 1 warmtepomp" of "liever altijd 2". De keuze gaat in eenvoudige stappen:

1. kijk welke levelcombinaties toegestaan en geldig zijn;
2. bepaal apart de beste single-HP en beste dual-HP kandidaat;
3. kies normaal de topology met het laagste elektrische verbruik;
4. laat een minder zuinige topology alleen winnen als die de warmtevraag duidelijk beter volgt;
5. wissel alleen als dat echt voordeel geeft;
6. houd een recente single-versus-duowissel wat langer vast als het alternatief maar een klein voordeel geeft.

Als twee single-HP-keuzes verder gelijk zijn, krijgt de runtime lead warmtepomp voorrang. Tijdens defrost blijft OpenQuatt voorzichtiger, maar nu pas zodra de `4-Way valve` aangeeft dat de echte defrost loopt. Daarmee wordt te vroege voorbelasting voorkomen en komt extra steun alleen in beeld als de gekozen combinatie anders nog duidelijk tekort zou komen.

### Water Temperature Control

Bij deze strategie kijkt OpenQuatt vooral naar de gewenste aanvoertemperatuur via een stooklijn.

Belangrijke eigenschappen:

- de regeling gebruikt de gekozen aanvoertemperatuurbron (`Local`, `CIC` of `HA input`);
- er zijn profielen en PID-instellingen;
- rond lage vraag probeert het systeem niet abrupt naar nul te springen.

Deze strategie past vaak beter bij gebruikers die hun installatie benaderen vanuit aanvoertemperatuur of stooklijn.

### Watertempbegrenzing

OpenQuatt heeft daarnaast een gedeelde begrenzing op basis van `water_supply_temp_selected`.

Belangrijke eigenschappen:

- `Maximum water temperature` is het normale bovendoel voor de gemeten aanvoer;
- `Water temperature soft band` bepaalt vanaf hoeveel graden daaronder OpenQuatt al terughoudend wordt;
- `Maximum water temperature trip` is de absolute bovengrens.

Praktisch betekent dit:

- in `Water Temperature Control` wordt `Heating Curve Supply Target` geclampt op `Maximum water temperature`;
- in `Power House` wordt de effectieve warmtevraag progressief verlaagd, met de sterkste afbouw tussen `max - soft band` en `max`;
- in `CM3` wordt de boiler vanaf `Maximum water temperature` geblokkeerd;
- bij `Maximum water temperature trip` kan een harde stop volgen zonder dat OpenQuatt de `Control Mode` zelf herschrijft.

## Flow Mode

`Flow Mode` bepaalt hoe de pompregeling werkt.

Beschikbare keuzes:

- `Flow Setpoint`
- `Manual PWM`

De uiteindelijke pompaansturing hangt nog steeds samen met `Control Mode`. Een handmatige pompstand overschrijft dus niet alle veiligheidslogica.

## Volgorde binnen de flowregeling

In technische termen is de volgorde:

1. `CM0` stopt normale flowactie vroegtijdig.
2. autotune kan tijdelijk voorrang krijgen.
3. handmatige of vorst-PWM kan gelden.
4. anders werkt de automatische regeling.

Die volgorde voorkomt dat meerdere delen van het systeem tegelijk dezelfde pompactie proberen te bepalen.

## AUTO PI in hoofdlijnen

De automatische flowregeling gebruikt een regelaar die probeert de flow rond de gewenste waarde te houden.

Praktisch betekent dat:

- niet elke kleine afwijking geeft direct een grote reactie;
- er is een opstartfase;
- er zijn grenzen om te agressief regelen te voorkomen;
- bij ongeldige meetwaarden kiest OpenQuatt voor een voorzichtige fallback.

## Bronkeuze is vaak de werkelijke oorzaak

Veel vreemd gedrag ontstaat niet door de regelstrategie zelf, maar door een onjuiste geselecteerde bron.

Voor de regeling zijn vooral belangrijk:

- `flow_rate_selected`
- `outside_temp_selected`
- `water_supply_temp_selected`

Als deze geselecteerde waarden niet kloppen, lijkt het alsof modes verkeerd werken terwijl de bronkeuze het eigenlijke probleem is.

## Veelvoorkomende misverstanden

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

## Controle bij twijfel

1. Kijk welke `Control Mode` actief is.
2. Kijk welke bronwaarden daadwerkelijk geselecteerd zijn.
3. Kijk of de flow logisch en stabiel is.
4. Kijk pas daarna naar strategie- of tuninginstellingen.

## Verder lezen

- [Heating Strategy](heating-strategy.md)
- [Power House](power-house.md)
- [Water Temperature Control](water-temperature-control.md)
- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
- [Diagnose en afstelling](diagnose-en-afstelling.md)
