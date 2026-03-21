# Passive Cooling Notes

Deze notitie legt de eerste ontwerpkeuzes voor passive cooling in OpenQuatt vast.
De hoofdlijn is eenvoudig: dauwpunt is leidend. Koelen is pas toegestaan als
OpenQuatt voldoende betrouwbare informatie heeft om condensvorming te voorkomen.

## Eerste Principes

- `CM5` wordt de aparte control mode voor passive cooling.
- `ot_cooling_enabled` mag een input zijn, maar niet de enige bron voor
  koeltoestemming.
- De effectieve koeltoestemming moet uit meerdere bronnen kunnen komen.
- `cooling_enable_selected` moet in elk geval de bronnen `CIC` en `HA input`
  ondersteunen.
- `CIC or HA input` is de meest logische voorkeursoptie voor de eerste versie.
- Het ontwerp moet ruimte houden voor een toekomstige eigen OpenTherm-bron,
  zonder het model onnodig complex te maken.
- De minimale veilige aanvoertemperatuur wordt afgeleid van het dauwpunt plus een
  veiligheidsmarge.
- Zonder bruikbare dauwpuntinformatie geen normale cooling mode.
- Flowbewaking hoort net zo serieus mee te lopen als bij heating.

## Waarom Dauwpunt Leidend Is

Bij cooling is condens het belangrijkste risico. Daarom moet OpenQuatt niet
sturen op "zo koud mogelijk", maar op:

`minimum_safe_supply_temp = dew_point + safety_margin`

De veiligheidsmarge hoort instelbaar te zijn. Een goede startwaarde is `2.0 C`.

## Bronvolgorde Voor Dauwpunt

Van best naar slechtst:

1. Directe dauwpuntmeter
2. Afgeleid dauwpunt uit temperatuur + relatieve luchtvochtigheid
3. Geen dauwpuntinformatie

OpenQuatt moet hier expliciet een kwaliteitsvolgorde in krijgen. Direct
gemeten dauwpunt is beter dan afgeleid dauwpunt, en geen dauwpuntinformatie is
in principe onvoldoende voor normale passive cooling.

## Scenario 1: Gebruiker Heeft Een Dauwpuntmeter

Dit is de beste situatie.

Aanpak:

- Gebruik de dauwpuntmeter als primaire bron voor `dew_point_selected`.
- Laat `ot_cooling_enabled` of HA de koeltoestemming leveren, maar laat de
  dauwpuntmeter de veiligheidsgrens bepalen.
- Bereken `minimum_safe_supply_temp` rechtstreeks uit de dauwpuntmeting.
- Gebruik `CM5` alleen als de dauwpuntmeter geldig is.

Aanbevolen gedrag:

- normale passive cooling toegestaan
- lage aanvoertemperaturen mogelijk, zolang ze boven dauwpunt+marge blijven
- duidelijke diagnostics: dauwpuntbron, veiligheidsmarge en block reason

Opmerking:

Als meerdere dauwpuntmeters aanwezig zijn, is voor huisbrede vloerkoeling de
hoogste geldige dauwpuntwaarde het veiligst.

## Scenario 2: Gebruiker Heeft Een Of Meerdere Temperatuurmetingen Met RH

Dit is de meest realistische en prima bruikbare situatie.

Aanpak:

- Bereken per sensor een dauwpunt uit temperatuur + relatieve luchtvochtigheid.
- Kies vervolgens een expliciete aggregatiestrategie:
  - bij een enkele sensor: gebruik die sensor direct
  - bij meerdere sensoren: neem standaard de hoogste geldige dauwpuntwaarde
- Gebruik de hoogste geldige dauwpuntwaarde als `dew_point_selected`.

Waarom de hoogste waarde:

Bij centrale vloerkoeling is de natste ruimte maatgevend. Eén vochtige kamer kan
al condensrisico geven, ook als andere kamers droger zijn.

Aanbevolen gedrag:

- normale passive cooling toegestaan
- standaard "max valid dew point" voor meerdere ruimtes
- mogelijkheid om later per zone te verfijnen als OpenQuatt ooit zone-aware wordt

Praktische bronkeuze:

- eerst `dew_point_direct` als die bestaat
- anders `dew_point_computed_max`

## Scenario 3: Gebruiker Heeft Enkel Een Kamerthermostaat

Dit is onvoldoende voor volwaardige, autonome passive cooling.

Aanpak:

- gebruik de thermostaat alleen voor koelvraag of enable, niet voor
  dauwpuntveiligheid
- laat `CM5` standaard niet vrijgeven zonder RH- of dauwpuntbron

Aanbevolen gedrag:

- geen normale passive cooling mode
- hooguit een expliciete "manual/unsafe" experimentele modus voor gevorderde
  gebruikers, met zeer conservatieve ondergrens voor aanvoer
- zo'n modus moet standaard uit staan en duidelijk als onveilig of onbeveiligd
  gelabeld zijn

Waarom zo streng:

Zonder RH of dauwpunt weet OpenQuatt niet of een aanvoertemperatuur veilig is.
Dan wordt cooling meer gokken dan regelen.

## Kan Er Zonder RH Toch Een Veilige Ondergrens Worden Gekozen?

Kort antwoord: niet echt veilig, hooguit conservatief.

Buitentemperatuur en binnentemperatuur zijn samen onvoldoende om het dauwpunt
betrouwbaar af te leiden. De ontbrekende grootheid is relatieve luchtvochtigheid.
Juist die kan in de praktijk sterk schommelen door ventilatie, douchen, koken,
veel mensen in huis of vochtig weer. Daardoor kan een op buitentemperatuur en
binnentemperatuur gebaseerde "veilige" aanvoer in werkelijkheid toch onder het
echte dauwpunt uitkomen.

### Wat Wel Kan Als Noodrem Of Fallback

Als gebruiker alleen een kamerthermostaat heeft, kan OpenQuatt hooguit een
`risk-reduced fallback` aanbieden, niet een echte dauwpuntveilige modus.

Zo'n fallback zou dan aan alle onderstaande voorwaarden moeten voldoen:

- standaard uit
- expliciet als experimenteel/onbeveiligd gelabeld
- alleen beschikbaar als gebruiker dat bewust aanzet
- veel conservatievere aanvoertemperatuurgrenzen dan in normale cooling
- langzame regeling, lage compressorverzoeken en duidelijke block reasons

Een mogelijke conservatieve fallback-aanpak:

- absolute minimale aanvoer niet lager dan `20 C` of `21 C`
- alleen koelen als de kamer duidelijk te warm is, bijvoorbeeld minimaal
  `room_setpoint + 0.8 C`
- alleen koelen als ook buitentemperatuur voldoende hoog is, bijvoorbeeld boven
  `22 C` of `24 C`, zodat onnodig "half koelen" bij randseizoenen wordt vermeden
- direct stoppen bij twijfel over flow, sensoren of bronvaliditeit

### Wat Niet Moet

Dit moet OpenQuatt juist niet doen in thermostat-only modus:

- dauwpunt gokken uit alleen binnen- en buitentemperatuur
- dezelfde lage aanvoer toelaten als bij echte dauwpuntmeting
- CM5 standaard vrijgeven zonder expliciete waarschuwing

Conclusie:

- normale `CM5` vereist een geldige dauwpuntbron
- zonder RH of dauwpunt alleen een optionele, duidelijk begrensde fallback
- de beste productkeuze blijft: voeg minimaal een RH-sensor toe in een
  representatieve of kritische ruimte

## Aanbevolen OpenQuatt-Implementatie

Eerste bronlaag:

- rauwe bronnen:
  - `ot_cooling_enabled`
  - `cooling_enable_ha`
  - toekomstige extra OT-bron voor cooling enable
  - `dew_point_direct`
  - `dew_point_computed_*`
- afgeleide bronnen:
  - `dew_point_selected`
  - `minimum_safe_supply_temp`
  - `cooling_enable_selected`
  - `cooling_permitted`
  - `cooling_block_reason`

Aanbevolen defaults:

- cooling enable source:
  - minimaal `CIC`
  - `HA input`
  - `CIC or HA input`
  - later uitbreidbaar met een eigen OT-bron
- dew point source:
  - direct gemeten dauwpunt als beschikbaar
  - anders hoogste geldige berekende dauwpunt
- als er geen geldige dauwpuntbron is:
  - `cooling_permitted = false`

## Dashboard- En UX-Richting

De gebruiker wil cooling-invoer via Home Assistant configureren. Daarvoor is een
duidelijke scheiding nodig tussen bronconfiguratie en runtime-cooling.

### Waar Hoort De Dauwpuntconfiguratie Thuis?

Voorkeursrichting:

- bronconfiguratie op een bestaand of nieuw `sensor configuratie`-tabblad
- runtime, permissies en actuele cooling-status op een apart `Koeling`-tabblad

Waarom die splitsing logisch is:

- bronconfiguratie is infrastructuur, geen dagelijkse bediening
- de dynamic source helpers horen conceptueel bij sensorselectie
- het cooling-tabblad blijft daardoor overzichtelijk en gericht op actuele
  toestand, blokkades en tuning

Aanbevolen indeling:

- `Sensorconfiguratie`
  - aantal koelruimtes
  - per ruimte bronkeuze en entity-id helpers
  - validatie van de gekozen bronnen
- `Koeling`
  - `cooling_enable_selected`
  - `dew_point_selected`
  - `minimum_safe_supply_temp`
  - `CM5` status
  - `cooling_request_active`
  - `cooling_permitted`
  - `cooling_block_reason`
  - `safety_margin`

### Aantal Ruimtes

Aanbevolen helper:

- `cooling_room_count` van `0` tot `6`, stap `1`

Waarom `0..6` logisch is:

- `0` betekent: geen koelruimtes geconfigureerd
- daarmee blijft het model expliciet en kan normale cooling automatisch
  geblokkeerd worden als er geen dauwpuntbron is
- `6` is ruim genoeg voor de meeste installaties zonder de UX te zwaar te maken

### Per-Ruimte Configuratie

Per koelruimte hoort de gebruiker in HA te kunnen aangeven:

- ruimte actief of niet
- optionele weergavenaam
- source type:
  - `Disabled`
  - `Dew point`
  - `Temp + RH`
- entity-id voor directe dauwpuntbron
- entity-id voor temperatuursensor
- entity-id voor RH-sensor

Conditionele zichtbaarheid in het dashboard:

- op basis van `cooling_room_count` verschijnen ruimtekaarten `1..6`
- binnen een ruimte bepaalt `source type` welke entity-velden zichtbaar zijn

### Safety Margin

Aanbevolen runtime instelling:

- `safety_margin` als number helper van `0.0` tot `4.0`
- stapgrootte `0.1 C`
- default `2.0 C`

Productkeuze:

- technisch mag `0.0`
- waardes onder `1.0 C` moeten als verhoogd risico beschouwd worden in docs of
  diagnostics

## Dynamic HA Proxy Model

De cooling-ingangen moeten via hetzelfde proxyprincipe lopen als de bestaande
HA dynamic sources. Dus:

- gebruiker vult in HA helpers entity-id's in
- Home Assistant publiceert stabiele proxy-sensors
- OpenQuatt leest alleen die vaste proxy-entities in

### Waarom Via Het Bestaande Proxy-Pad

- geen herflash nodig bij bronwissel
- minder compile-time complexiteit in ESPHome
- beter testbaar
- sluit aan op het bestaande OpenQuatt-patroon

### HA Helpers Die Nodig Zijn

Globaal:

- `input_number.openquatt_cooling_room_count`
- `input_select.openquatt_cooling_enable_source`
- `input_text.openquatt_source_cooling_enable`
- `input_number.openquatt_cooling_safety_margin`

Per ruimte `1..6`:

- `input_select.openquatt_cooling_room_<n>_source_type`
- `input_text.openquatt_cooling_room_<n>_name`
- `input_text.openquatt_cooling_room_<n>_dew_point_entity`
- `input_text.openquatt_cooling_room_<n>_temperature_entity`
- `input_text.openquatt_cooling_room_<n>_humidity_entity`

### HA Proxy's Die Daaruit Volgen

Per ruimte `1..6`:

- `sensor.openquatt_ext_cooling_room_<n>_dew_point_direct`
- `sensor.openquatt_ext_cooling_room_<n>_temperature`
- `sensor.openquatt_ext_cooling_room_<n>_humidity`
- `sensor.openquatt_ext_cooling_room_<n>_dew_point_effective`
- `sensor.openquatt_ext_cooling_room_<n>_source_quality`
- `binary_sensor.openquatt_ext_cooling_room_<n>_valid`

Globaal:

- `binary_sensor.openquatt_ext_cooling_enable`
- `sensor.openquatt_ext_cooling_dew_point_selected`
- `sensor.openquatt_ext_cooling_dew_point_max`
- `sensor.openquatt_ext_cooling_valid_room_count`

### Aggregatie In HA Of In ESPHome

Aanbevolen verdeling:

- per ruimte:
  - source type evalueren in HA
  - directe dauwpuntbron voorrang geven boven temp+RH
  - `dew_point_effective` per ruimte al in HA maken
- globaal:
  - aggregatie naar `max(valid dew_point_effective)` mag in HA of ESPHome

Voorkeur:

- per-ruimte normalisatie in HA
- uiteindelijke globale selectie mag in ESPHome, zodat cooling-control dicht bij
  de firmwarelogica blijft

## Gedetailleerd Entitymodel Voor Cooling Enable

De toekomstige effectieve koeltoestemming moet op een uitbreidbaar bronmodel
rusten.

### Rauwe Bronnen

- `ot_cooling_enabled`
  - huidige CIC/OpenTherm-bron
- `cooling_enable_ha`
  - HA-proxybron
- toekomstige bron:
  - eigen OT component of een extra ruwe OT cooling-enable

### Afgeleide Selectie

Aanbevolen eerste opties voor `cooling_enable_source`:

- `CIC`
- `HA input`
- `CIC or HA input`

Latere uitbreidbare opties:

- `OT component`
- combinaties met extra OT-bronnen

Aanbevolen eerste default:

- `CIC or HA input`

Waarom:

- praktisch en begrijpelijk
- sluit goed aan op het idee dat CIC en HA beide een geldige enable-bron mogen zijn
- houdt de eerste versie eenvoudiger dan extra autorisatie- of beschikbaarheidslagen

### Afgeleide Signalen

- `cooling_enable_selected`
- `cooling_enable_effective_source`
- `cooling_request_active`
- `cooling_permitted`
- `cooling_block_reason`

## Gedetailleerd Implementatieplan

De uitwerking hieronder beschrijft de gewenste volgorde. Dit is bewust nog een
ontwerpplan en geen codeplan.

### Fase 1: Bronnen En Kwaliteit Modelleren

Doel:

- onderscheid maken tussen rauwe inputs en afgeleide cooling-beslissingen

Te modelleren bronsoorten:

- koeltoestemming
  - `ot_cooling_enabled`
  - `cooling_enable_ha`
  - toekomstig OT-component signaal
- dauwpunt
  - direct gemeten dauwpunt
  - berekend dauwpunt uit temp + RH
- kamerinput voor koelvraag
  - kamerthermostaatsetpoint
  - kamertemperatuur

Te publiceren afgeleiden:

- `cooling_enable_selected`
- `cooling_enable_effective_source`
- `dew_point_selected`
- `dew_point_source_quality`
- `minimum_safe_supply_temp`
- `cooling_request_active`
- `cooling_permitted`
- `cooling_block_reason`

Bronkwaliteitsmodel:

- `direct`: beste kwaliteit
- `computed`: goed genoeg voor normale cooling
- `fallback`: alleen conservatieve noodmodus
- `missing`: cooling niet toegestaan

### Fase 2: Dauwpuntselectie Vastleggen

Doel:

- één eenduidig `dew_point_selected` signaal maken dat overal in cooling wordt
  gebruikt

Per ruimte:

1. `source type = Disabled` betekent: ruimte telt niet mee
2. `source type = Dew point` betekent:
   - directe dauwpuntproxy gebruiken
3. `source type = Temp + RH` betekent:
   - dauwpunt uit temperatuur en RH gebruiken
4. elke ruimte krijgt een eigen validiteitsstatus en kwaliteitslabel

Selectieregels:

1. per ruimte eerst `dew_point_effective` bepalen
2. daarna over alle actieve ruimtes de hoogste geldige waarde kiezen
3. als geen enkele actieve ruimte geldig is: markeer dauwpunt als ongeldig

Waarom standaard op hoogste dauwpunt:

- centrale vloerkoeling moet veilig zijn voor de vochtigste relevante ruimte
- dit is conservatiever en daardoor productmatig verstandiger dan middelen

Optionele latere verfijning:

- zones of ruimteselectie
- uitsluiten van niet-relevante ruimtes
- natte ruimtes apart wegen

### Fase 3: Veilige Aanvoertemperatuur Afleiden

Doel:

- het dauwpunt vertalen naar een concrete koelgrens voor OpenQuatt

Basisformule:

`minimum_safe_supply_temp = dew_point_selected + safety_margin`

Aanbevolen eerste defaults:

- `safety_margin = 2.0 C`
- minimale absolute cooling-aanvoer voor normale modus:
  - conservatief starten rond `19 C` of `20 C`

Extra begrenzingen:

- als dauwpunt ongeldig is:
  - normale cooling blokkeren
- als gebruiker alleen fallback-modus heeft:
  - nog hogere ondergrens gebruiken, bijvoorbeeld `20-21 C`

Belangrijke ontwerpkeuze:

- `minimum_safe_supply_temp` is een safety floor
- de uiteindelijke cooling target mag daar nooit onder komen

### Fase 4: Cooling Request Apart Modelleren

Doel:

- cooling niet als negatieve heating-vraag modelleren, maar als eigen vraagpad

Ingangssignalen:

- `room_temp_selected`
- `room_setpoint_selected`
- `cooling_enable_selected`
- `cooling_permitted`

Aanbevolen eerste logica:

- koelvraag actief als:
  - `room_temp > room_setpoint + deadband_on`
- koelvraag uit als:
  - `room_temp < room_setpoint + deadband_off`

Aanbevolen eerste hysterese:

- `deadband_on`: `0.4-0.5 C`
- `deadband_off`: `0.1-0.2 C`

Extra stabilisatie:

- minimum on-time
- minimum off-time
- cooldown voordat opnieuw gestart mag worden

### Fase 4b: `cooling_permitted` Eenvoudig Houden

Doel:

- de eerste versie begrijpelijk en uitlegbaar houden

Voor de eerste versie zijn deze kernsignalen voldoende:

- `cooling_enable_selected`
- `cooling_request_active`
- `cooling_permitted`

Waarbij `cooling_permitted` alleen de echte safety- en geldigheidschecks bevat:

- flow OK
- dauwpunt geldig
- `minimum_safe_supply_temp` geldig
- geen stale/fault-conditie

Bewuste ontwerpkeuze:

- geen extra abstractielaag zoals `cooling_request_authorized`
- geen extra abstractielaag zoals `cooling_runtime_available`

Waarom:

- minder concepten
- makkelijker te begrijpen in dashboard en docs
- sluit beter aan op het bestaande interlock-model van heating

### Fase 5: `CM5` In Supervisory Invoeren

Doel:

- passive cooling een expliciete control mode geven

`CM5` entry-voorwaarden:

- `cooling_enable_selected = true`
- `cooling_request_active = true`
- `cooling_permitted = true`
- geldige dauwpuntbron of expliciete fallback-modus
- flow OK
- geen safety fault of stale input

`CM5` exit-voorwaarden:

- koelvraag weg
- koeltoestemming weg
- dauwpunt ongeldig geworden
- flow fault
- gebruiker schakelt cooling uit

Fail-safe gedrag:

- bij twijfel niet in `CM5`
- bij verlies van safety direct terug naar veilige mode, waarschijnlijk `CM1`
  of `CM0` afhankelijk van de bestaande flow-/prepostlogica

### Fase 6: Cooling Control Apart Van Heating Control

Doel:

- daadwerkelijke koelactuatie uit heating packages houden

Richting:

- aparte cooling-control package
- working mode naar `Cooling`
- conservatief starten
- compressor rustig opbouwen

Eerste versie:

- low-level modulation
- single-HP-first gedrag
- begrenzen op `minimum_safe_supply_temp`
- niet maximaliseren op comfort, maar eerst op veiligheid en stabiliteit

Latere uitbreidingen:

- duo-optimalisatie
- koelcurve of koelvermogen op basis van overshoot
- slimmere ramp-up/ramp-down

### Fase 7: Thermostat-Only Fallback Als Bewuste Optie

Doel:

- gebruikers zonder RH niet volledig buitensluiten, maar ook niet doen alsof het
  dauwpuntveilig is

Voorwaarden:

- alleen handmatig inschakelbaar
- standaard uit
- duidelijke waarschuwing in diagnostics en docs

Gedrag:

- hogere minimum-aanvoer
- grotere deadband
- lagere compressorverzoeken
- strengere stopvoorwaarden

Belangrijk:

- dit is een comfortbeperkte risicoreductie
- dit is geen volwaardige dauwpuntbeveiligde cooling

### Fase 8: Diagnostics En UX

Doel:

- verklaren waarom cooling wel of niet actief is

Nodige diagnostiek:

- `dew_point_selected`
- `dew_point_source_quality`
- `minimum_safe_supply_temp`
- `cooling_enable_selected`
- `cooling_enable_effective_source`
- `flow_for_cooling_ok`
- `cooling_request_active`
- `cooling_permitted`
- `cooling_block_reason`
- indicatie of systeem in normale of fallback cooling draait

Belangrijke UX-principes:

- block reasons moeten menselijk leesbaar zijn
- fallback-modus moet zichtbaar anders gelabeld zijn dan normale cooling
- bronselectie moet uitlegbaar zijn in dashboard en docs
- sensorbronconfiguratie hoort niet verstopt te zitten tussen runtime cooling
  diagnostics

## Samenvattende Productbeslissing

De aanbevolen lijn voor OpenQuatt is:

1. normale `CM5` alleen met geldige dauwpuntbron
2. directe dauwpuntmeting heeft voorrang
3. anders dauwpunt berekenen uit temp+RH
4. bij meerdere ruimtes standaard de hoogste geldige dauwpuntwaarde nemen
5. zonder dauwpuntinformatie alleen optionele, expliciet conservatieve fallback
6. flowbewaking net zo serieus behandelen als bij heating
7. `cooling_enable_selected`, `cooling_request_active` en `cooling_permitted`
   als eenvoudige kernsignalen gebruiken
8. cooling als aparte control mode en apart regelpad behandelen
