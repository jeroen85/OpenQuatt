# Water Temperature Control

Deze pagina legt uit hoe `Water Temperature Control` werkt in OpenQuatt. In de praktijk wordt dit vaak ook gewoon de **stooklijnregeling** genoemd.

Het doel is dat je begrijpt:

- hoe de strategie een aanvoertemperatuurdoel maakt;
- hoe de PID-regeling daarop werkt;
- welke instellingen echt belangrijk zijn;
- en hoe `Single` en `Duo` zich in deze modus gedragen.

De uitleg is gebaseerd op de huidige code in:

- `openquatt/oq_strategy_manager.yaml`
- `openquatt/oq_heating_curve_strategy.yaml`
- `openquatt/oq_thermal_request_control.yaml`

## Wat is Water Temperature Control?

`Water Temperature Control` is de verwarmingsstrategie die vooral denkt in **gewenste aanvoertemperatuur**.

In plaats van eerst te berekenen hoeveel watt het huis nodig heeft, zegt deze strategie grofweg:

- hoe koud is het buiten;
- welke aanvoertemperatuur hoort daar volgens de stooklijn bij;
- hoe ver zit de gemeten aanvoer daarvan af;
- hoeveel compressorvraag is nodig om die aanvoer te volgen.

Dat maakt deze strategie herkenbaar voor gebruikers die gewend zijn aan:

- een stooklijn;
- aanvoertemperatuur als hoofddoel;
- of meer klassieke weersafhankelijke regeling.

## Hoofdlijn: zo loopt de regeling

`Water Temperature Control` werkt in de praktijk in deze volgorde:

1. bepaal de gekozen buitentemperatuur;
2. leid daaruit een gewenste aanvoertemperatuur af via de stooklijn;
3. begrens die gewenste aanvoertemperatuur met de gedeelde watertemplogica;
4. laat een PID-regelaar de gemeten aanvoer naar dat doel sturen;
5. vertaal de PID-uitkomst naar demand `0..20`;
6. laat heat-control daar compressorlevels van maken;
7. laat bij `Duo` de tweede warmtepomp pas meedoen als de vraag hoog genoeg en lang genoeg aanhoudt.

## Stap 1: de buitentemperatuur

De stooklijn gebruikt de **gekozen buitentemperatuur**:

- `Outside Temperature (Selected)`

Als die bron niet klopt, klopt de rest ook niet:

- te lage buitenwaarde -> te hoge gevraagde aanvoer;
- te hoge buitenwaarde -> te lage gevraagde aanvoer.

Daarom blijft broncontrole ook hier de eerste stap.

## Stap 2: de stooklijn maakt een supply target

De stooklijn bestaat uit zes instelpunten:

- `Curve Tsupply @ -20°C`
- `Curve Tsupply @ -10°C`
- `Curve Tsupply @ 0°C`
- `Curve Tsupply @ 5°C`
- `Curve Tsupply @ 10°C`
- `Curve Tsupply @ 15°C`

OpenQuatt interpoleert daar lineair tussen. Dat betekent:

- tussen twee punten loopt het doel geleidelijk mee;
- je hoeft dus niet voor elke buitentemperatuur apart iets in te stellen.

Het resultaat is:

- `Heating Curve Supply Target`

Als de buitentemperatuur ontbreekt, gebruikt OpenQuatt:

- `Curve Fallback Tsupply (No Outside Temp)`

## Stap 3: gedeelde watertempbegrenzing

Ook in deze strategie blijft `Water Supply Temp (Selected)` belangrijk.

Met:

- `Maximum water temperature`
- `Water temperature soft band`
- `Maximum water temperature trip`

wordt het target of gedrag begrensd als de aanvoer al te hoog wordt.

In `Water Temperature Control` betekent dat vooral:

- het curve-target wordt geclamped;
- bij een echte trip kan de vraag naar nul gaan;
- de regeling blijft dus niet doorduwen als de aanvoer al te hoog is.

## Stap 4: PID op de aanvoer

Daarna gebruikt OpenQuatt een PID-regelaar:

- `Heating Curve PID`

De PID vergelijkt:

- doelwaarde: `Heating Curve Supply Target`
- meetwaarde: de gebruikte systeemaanvoer

De PID-uitkomst wordt daarna omgezet naar demand `0..20`.

Belangrijke instellingen:

- `Heating Curve PID Kp`
- `Heating Curve PID Ki`
- `Heating Curve PID Kd`

Praktisch:

- `Kp` bepaalt hoe sterk de regeling direct op een fout reageert;
- `Ki` bepaalt hoeveel langdurige afwijking wordt weggewerkt;
- `Kd` dempt snelle veranderingen, maar wordt vaak laag of op nul gebruikt.

## Stap 5: niet abrupt naar nul

De huidige curve-regeling heeft extra guardrails rond lage vraag. Dat is belangrijk, want anders krijg je snel onrustig aan/uit-gedrag rond het omslagpunt.

Belangrijke begrippen:

- `Curve Phase`
- `Curve operating regime`
- `Demand Curve (continuous)`
- `Demand curve raw (PID)`
- `Demand raw`
- `Curve restart inhibit`

De regeling kent twee lagen van status:

- `Curve Phase` is de grove fase:
  - `OFF`
  - `HEAT`
  - `COAST`
- `Curve operating regime` is de fijnere low-load toestand:
  - `OFF`
  - `RECOVERY`
  - `MAINTAIN`

### HEAT

De PID stuurt normaal en de warmtepomp volgt de vraag.

### COAST

Als de vraag laag wordt of de aanvoer net boven doel zit, valt de regeling niet direct hard naar nul terug. Ze kan eerst in een lichtere fase blijven lopen.

Dat helpt om:

- pendelen te beperken;
- de aanvoer rustiger te laten uitdempen;
- onnodig vaak opnieuw starten te voorkomen.

### OFF

Pas als de stopvoorwaarde voldoende duidelijk en lang genoeg aanwezig is, valt de vraag echt weg.

Daarna kan nog een korte restart-inhibit actief zijn, zodat het systeem niet direct weer opnieuw begint.

## Stap 6: kamertemperatuur speelt nog steeds mee

Ook al is dit geen kamergerichte strategie zoals `Power House`, de kamer kan nog steeds invloed hebben.

De code gebruikt namelijk ook een warme-kamertrim op het supply target. In gewone taal:

- als de kamer al warm wegdrijft, kan het target iets terughoudender worden;
- de stooklijn werkt dus niet volledig blind op buitentemperatuur alleen.

Dat maakt het gedrag vaak bruikbaarder in echte woningen.

### Hoe sterk is die kamercorrectie?

De huidige kamercorrectie werkt bewust als **rem op overshoot**, niet als tweede hoofdregeling.

Belangrijk:

- de correctie verlaagt het stooklijndoel alleen als de kamer al **boven** setpoint zit;
- de correctie verhoogt het stooklijndoel dus niet extra als de kamer te koud is;
- een te koude kamer helpt in deze modus vooral mee in de **stop/herstartlogica**, niet via een extra opwaartse supply-boost.

In formulevorm:

- `warm_err = room_temp - room_setpoint`
- alleen als `warm_err > trim_start` volgt er een correctie
- `trim = min((warm_err - trim_start) * trim_gain, trim_max)`
- `supply_target = supply_target - trim`

De ingebouwde profielen bepalen hoe vroeg en hoe sterk die trim ingrijpt:

- `Comfort`: trim start vanaf `+0.05°C`, gain `2.0`, max trim `2.0°C`, target-kwantisatie `0.25°C`
- `Balanced`: trim start vanaf `+0.10°C`, gain `1.5`, max trim `2.0°C`, target-kwantisatie `0.5°C`
- `Stable`: trim start vanaf `+0.15°C`, gain `1.0`, max trim `2.5°C`, target-kwantisatie `1.0°C`

Praktisch voorbeeld:

- stel de stooklijn vraagt `35.0°C` aanvoer
- kamer-setpoint is `20.0°C`
- gemeten kamer is `20.5°C`

Dan wordt de trim ongeveer:

- `Comfort`: `(0.50 - 0.05) * 2.0 = 0.90°C` -> target daalt grofweg naar `34.1°C`
- `Balanced`: `(0.50 - 0.10) * 1.5 = 0.60°C` -> target daalt grofweg naar `34.4°C`
- `Stable`: `(0.50 - 0.15) * 1.0 = 0.35°C` -> target daalt grofweg naar `34.7°C`

Daarna rondt OpenQuatt het target nog af op profielafhankelijke stappen. Daardoor kunnen kleine trims in de praktijk nog iets minder zichtbaar worden:

- `Comfort`: afronding op `0.25°C`
- `Balanced`: afronding op `0.5°C`
- `Stable`: afronding op `1.0°C`

Naast deze target-trim gebruikt de regeling de kamer ook voor stop/herstartgedrag. In `Balanced` betekent dat bijvoorbeeld:

- pas echt richting `OFF` als de kamer warm genoeg is, grofweg vanaf `setpoint + 0.30°C`
- weer makkelijker herstarten als de kamer onder setpoint komt, grofweg vanaf `setpoint - 0.05°C`

## Single: hoe werkt dit?

Bij `Single` is de verdeling simpel:

- demand wordt omgezet naar een compressorlevel;
- guardrails, minimum runtime en andere beveiligingen blijven actief.

De hoofdvraag is dan vooral:

- klopt de stooklijn;
- klopt de PID-afstelling;
- is de aanvoerbron logisch.

## Duo: hoe werkt dit hier?

In `Water Temperature Control` werkt de verdeling anders dan in `Power House`.

De basis is:

- eerst één warmtepomp;
- de tweede warmtepomp mag pas meedoen als de vraag hoog genoeg is en dat ook even blijft;
- er zit dus hysterese en wachttijd in de overgang naar `Duo`.

Belangrijke instellingen:

- `Minimum runtime`
- `Dual HP Enable Level`
- `Dual HP Enable Hold`
- `Dual HP Disable Hold`

Dat betekent praktisch:

- bij oplopende vraag gaat `Duo` niet meteen aan;
- bij dalende vraag gaat `Duo` ook niet meteen weer uit;
- zo voorkom je dat het systeem tussen single en duo gaat stuiteren.

Als `Duo` actief is in deze strategie:

- wordt de vraag in de basis gelijkmatig verdeeld;
- een oneven stap gaat naar de runtime lead warmtepomp.

Dus anders dan in `Power House` is dit hier **geen efficiency-first optimizer** tussen single en duo. Het is hier vooral een meer klassieke opbouw met hysterese.

## Control profiles

`Heating Curve Control Profile` geeft een ingebouwde karakterkeuze voor de curve-regeling.

De opties zijn:

- `Comfort`
- `Balanced`
- `Stable`

In gewone taal:

- `Comfort` reageert wat vlotter;
- `Stable` is terughoudender;
- `Balanced` zit ertussen.

Daarnaast kan OpenQuatt ook:

- de buitentemperatuur gladstrijken;
- het target kwantiseren;
- restartgedrag rustiger maken.

Dat helpt tegen te veel micro-reacties op onrustige signalen.

## Belangrijkste parameters

Voor de meeste gebruikers zijn dit de relevante groepen.

### 1. De stooklijn zelf

- `Curve Tsupply @ -20/-10/0/5/10/15°C`
- `Curve Fallback Tsupply (No Outside Temp)`

Gebruik deze om het basisgedrag van de aanvoer passend te maken bij jouw huis.

### 2. De curve-regelaar

- `Heating Curve Control Profile`
- `Heating Curve PID Kp`
- `Heating Curve PID Ki`
- `Heating Curve PID Kd`

Gebruik deze om te bepalen hoe scherp of rustig de aanvoerregeling het target volgt.

### 3. Duo-opbouw en looptijd

- `Minimum runtime`
- `Dual HP Enable Level`
- `Dual HP Enable Hold`
- `Dual HP Disable Hold`

Gebruik deze vooral als `Duo` te laat, te vroeg of te onrustig inschakelt. `Minimum runtime` werkt per compressor en heeft een ondergrens van `300 s` om korte start/stop-cycli te vermijden.

### 4. Watertempbegrenzing

- `Maximum water temperature`
- `Water temperature soft band`
- `Maximum water temperature trip`

Gebruik deze om te voorkomen dat de aanvoerregeling te lang te hoog blijft mikken.

## Handige meetwaarden en diagnostics

Als je deze strategie wilt begrijpen of afstellen, zijn deze waarden meestal het nuttigst:

- `Heating Curve Supply Target`
- `Water Supply Temp (Selected)`
- `Heating Curve PID`
- `Curve Phase`
- `Curve operating regime`
- `Demand Curve (continuous)`
- `Demand curve raw (PID)`
- `Demand raw`
- `Curve restart inhibit`

Bij `Duo` komen daar vaak bij:

- `Runtime lead HP`
- `HP1 compressor level`
- `HP2 compressor level`
- `HP1 defrost`
- `HP2 defrost`

## Veilige volgorde van afstellen

Een verstandige volgorde is:

1. controleer eerst of de gekozen buitentemperatuur en aanvoer kloppen;
2. stel daarna de stooklijnpunten in;
3. pas daarna PID-instellingen aan;
4. kijk daarna pas naar `Duo`-inschakeling en holds;
5. beoordeel het effect over langere periodes, niet alleen een paar minuten.

Dat voorkomt dat je een verkeerd curvepunt probeert op te lossen met PID-tuning, of andersom.

## Veelvoorkomende misverstanden

### "Als de curve klopt, maakt PID bijna niet uit"

Niet helemaal. De curve bepaalt het doel, maar PID bepaalt nog steeds hoe strak of rustig dat doel gevolgd wordt.

### "Meer Kp is altijd beter"

Nee. Een te hoge `Kp` kan juist onrust, overshoot of snelle vraagwisselingen geven.

### "Duo in stooklijnmodus kiest automatisch de zuinigste combinatie"

Nee. Dat hoort bij de huidige `Power House`-aanpak. In `Water Temperature Control` werkt `Duo` vooral met single-first en hysterese.

### "COAST betekent dat er iets mis is"

Niet per se. `COAST` is juist een bewuste tussenfase om niet te abrupt van verwarmen naar helemaal uit te gaan.

Als je preciezer wilt zien wat de regeling doet, kijk dan ook naar `Curve operating regime`:

- `RECOVERY` betekent dat de regeling nog duidelijk naar target toe werkt;
- `MAINTAIN` betekent dat de regeling rond het huidige werkpunt probeert vast te houden;

## Samenvatting

`Water Temperature Control` is de strategie voor gebruikers die hun systeem vooral via aanvoertemperatuur en stooklijn willen benaderen.

De kern is:

- buitentemperatuur -> stooklijn -> supply target;
- PID laat de aanvoer dat target volgen;
- guardrails houden het gedrag rustig rond lage vraag;
- bij `Duo` wordt de tweede unit met hysterese en wachttijd toegevoegd.

Dat maakt deze strategie vaak goed voorspelbaar voor wie graag met aanvoertemperatuur werkt.

## Gerelateerde pagina's

- [Heating Strategy](heating-strategy.md)
- [Power House](power-house.md)
- [Regelgedrag van OpenQuatt](regelgedrag-van-openquatt.md)
- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
