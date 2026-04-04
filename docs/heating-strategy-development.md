# Heating Strategy Development

Deze pagina legt vast hoe het nieuwe heating-strategy principe in OpenQuatt werkt, en hoe je veilig een nieuwe heating strategy toevoegt zonder de rest van de thermal stack te vervuilen.

Het doel van de huidige architectuur is:

- strategies uitwisselbaar maken;
- strategy-logica los houden van request guards en actuator-logica;
- nieuwe strategies kunnen toevoegen zonder opnieuw alles in `oq_thermal_request_control` of `oq_thermal_actuator` te moeten verstoppen.

## Architectuur in een zin

De keten is:

`oq_strategy_manager -> strategy module -> oq_thermal_request_control -> oq_thermal_actuator`

Dat betekent:

- `oq_strategy_manager` kiest welke heating strategy actief is en owns de gedeelde strategy interface;
- een strategy module berekent vraag en strategy-status voor precies een strategy;
- `oq_thermal_request_control` verwerkt strategy outputs naar geldige compressor requests;
- `oq_thermal_actuator` schrijft die requests pas echt naar de units.

## Wat hoort waar?

### `oq_strategy_manager`

Dit bestand owns:

- de selector `Heating Control Mode`
- `oq_heat_mode_code`
- de gedeelde strategy interface `oq_strategy_*`
- de algemene reset bij strategy-switches

Dit bestand hoort niet te ownen:

- strategy-specifieke demand-opbouw
- strategy-specifieke topology-keuze
- strategy-specifieke compressor-requestlogica

### Een strategy module

Een strategy module owns:

- de eigen berekening van demand of supply target
- de eigen phase/state/diagnostics
- de eigen compressor-request output
- het invullen van de gedeelde `oq_strategy_*` status zolang die strategy actief is
- de zichtbare YAML-structuur van de strategy: globals, intervals, selectors, tekstsensoren en publicatievolgorde

Voorbeelden in de huidige codebase:

- `openquatt/oq_power_house_strategy.yaml`
- `openquatt/oq_heating_curve_strategy.yaml`
- `openquatt/oq_cooling_strategy.yaml`

## YAML en `.h` helpers

De huidige thermal stack gebruikt bewust beide:

- YAML voor strategy-structuur en publicatie
- `.h` helpers voor pure herbruikbare logica

De vuistregel is:

- YAML owns de module-opbouw
- `.h` owns pure functies en kleine value objects

Dat betekent in de praktijk:

- YAML bevat de `globals`, `interval` loops, `text_sensor` wiring en de expliciete `publish_state(...)` of shared-status publicatie
- YAML laat zichtbaar zien welke inputs een strategy leest, welke state ze bijhoudt en welke `..._request_*` outputs eruit komen
- `.h` files bevatten alleen rekenlogica, keuzehelpers en normalisatie die door meerdere packages gedeeld kan worden

Goede kandidaten voor `.h` helpers:

- herhaalde level- of topology-keuze
- pure demand- of bias-berekeningen
- state-machine helpers zonder side effects
- gedeelde status- of resethelpers

Slechte kandidaten voor `.h` helpers:

- verborgen `publish_state(...)` calls
- actuator writes
- strategy-selectie
- code die de YAML-flow onleesbaar maakt doordat alle hoofdlogica uit beeld verdwijnt

Belangrijk ontwerpprincipe:

- een nieuwe strategy moet nog steeds te begrijpen zijn door alleen het YAML-bestand te lezen
- de `.h` helper mag de strategy ondersteunen, maar niet verbergen

Kort samengevat:

- YAML owns structure and publication
- `.h` owns pure reusable logic

### `oq_thermal_request_control`

Dit bestand owns:

- gedeelde request interface `oq_request_*`
- caps en level restrictions
- runtime/startup/hard-trip guards
- actuator input `oq_actuator_hp1_req` / `oq_actuator_hp2_req`

Dit bestand hoort niet te ownen:

- de inhoud van een specifieke strategy
- strategy-specifieke tuning
- strategy-specifieke demand-modellen

### `oq_thermal_actuator`

Dit bestand owns:

- mode-writes
- compressor-level writes
- mode-transition gedrag
- min-off en post-apply runtime bookkeeping

## Verplicht strategy contract

Elke heating strategy moet, wanneer actief, de gedeelde strategy interface invullen in `oq_strategy_manager`.

Verplichte gedeelde outputs:

- `oq_demand_raw`
- `oq_strategy_active_code`
- `oq_strategy_phase_code`
- `oq_strategy_requested_power_w`
- `oq_strategy_supply_target_temp`
- `oq_strategy_heat_request_active`

Voor heating strategies gelden nu deze codes:

- `2` = heating curve
- `3` = Power House

`1` is gereserveerd voor cooling tijdens `CM5`, en wordt dus niet door een heating strategy gebruikt.

### Semantiek van de gedeelde outputs

- `oq_demand_raw`
  - genormaliseerde strategy-output op schaal `0..20`
  - input voor `oq_thermal_request_control`
- `oq_strategy_active_code`
  - welke strategy momenteel eigenaar is van de gedeelde strategy interface
- `oq_strategy_phase_code`
  - strategy-lokale phase/status code
- `oq_strategy_requested_power_w`
  - alleen invullen als de strategy echt met requested power werkt
  - anders `NAN`
- `oq_strategy_supply_target_temp`
  - alleen invullen als de strategy echt met een supply target werkt
  - anders `NAN`
- `oq_strategy_heat_request_active`
  - generiek boolean signaal dat supervisory gebruikt om te bepalen of er echte heating-vraag is

## Verplichte strategy-local request outputs

Naast de gedeelde strategy interface moet een strategy module ook eigen request outputs publiceren voor `oq_thermal_request_control`.

Gebruik per strategy een eigen namespace, bijvoorbeeld:

- `oq_curve_request_*`
- `oq_ph_request_*`
- `oq_my_strategy_request_*`

Minimaal:

- `..._request_hp1_level`
- `..._request_hp2_level`
- `..._request_owner_hp`
- `..._request_reason_code`

Optioneel maar aanbevolen:

- `..._request_last_loop_ms`

Belangrijke regel:

- een strategy publiceert compressor-level intent
- niet direct actuator writes
- een strategy mag daarnaast ook een abstracter totaalrequest of topology-hints publiceren, zolang `oq_thermal_request_control` de gedeelde request-interface blijft ownen

Dus:

- goed: `hp1_level = 4`, `hp2_level = 0`
- ook goed: `total_level = 4` plus voldoende hints zodat `oq_thermal_request_control` de per-HP requestsplit kan afmaken
- niet goed: zelf `hp1_set_working_mode` of `hp1_compressor_level` schrijven

## Checklist: nieuwe heating strategy toevoegen

### 1. Maak een nieuw strategy-bestand

Voeg een nieuw package-bestand toe in `openquatt/`, bijvoorbeeld:

- `openquatt/oq_my_strategy.yaml`

Gebruik als startpunt:

- `docs/templates/heating-strategy-template.yaml`

Optioneel:

- gebruik de bestaande helperheader `openquatt/includes/oq_thermal_request_logic.h` voor gedeelde request-logica
- maak alleen een extra strategy-helper als de pure logica echt herhaald of te groot wordt
- hou helpercode side-effectvrij

### 2. Kies een nieuwe strategy code

Reserveer een nieuwe `oq_strategy_active_code` voor de strategy.

Huidige bezetting:

- `0` inactive
- `1` cooling
- `2` heating_curve
- `3` power_house

De eerstvolgende vrije code is dus op dit moment `4`.

### 3. Breid `oq_strategy_manager` uit

Pas in `openquatt/oq_strategy_manager.yaml` aan:

- `Heating Control Mode` opties uitbreiden
- mapping naar `oq_heat_mode_code`
- reset logica bij strategy-switch

Belangrijk:

- hou `oq_strategy_manager` dom
- hij selecteert en reset
- hij berekent de strategy zelf niet

### 4. Voeg de strategy module toe aan de packages

Neem het nieuwe bestand op in:

- `openquatt/oq_packages.yaml`
- `openquatt/oq_packages_single.yaml`

Plaats hem bij de andere strategy modules, dus voor `oq_thermal_request_control`.

### 5. Laat `oq_thermal_request_control` de nieuwe requests lezen

Breid in `openquatt/oq_thermal_request_control.yaml` de selectie uit:

- wanneer is deze strategy actief?
- welke `..._request_hp1_level`
- welke `..._request_hp2_level`
- welke `..._request_owner_hp`
- welke `..._request_reason_code`

Let op:

- `oq_thermal_request_control` verwerkt requests
- hij hoort de strategy niet opnieuw uit te vinden

### 6. Check supervisory-aannames

Controleer in `openquatt/oq_supervisory_controlmode.yaml` of de nieuwe strategy goed past bij:

- `oq_strategy_heat_request_active`
- eventuele requested power logica
- eventuele `CM2 <-> CM3` promotie/demotie

Als de strategy geen requested power gebruikt:

- publiceer `oq_strategy_requested_power_w = NAN`
- en forceer supervisory niet om met fake power-signalen te werken

### 7. Voeg strategy-specifieke diagnostics toe

Voeg alleen diagnostics toe die echt helpen om de strategy te begrijpen:

- phase
- eigen debug state
- eventueel strategy-specifieke targets of requested power

Stop generieke guards of actuator-diagnostiek niet terug in de strategy module.

### 8. Werk docs en dashboards bij

Bij een nieuwe strategy horen minimaal updates in:

- `docs/heating-strategy.md`
- eventueel een eigen detailpagina
- dashboards als er een nieuwe user-facing selector of status bijkomt

### 9. Trek pure logica pas later uit naar helpers

Begin een nieuwe strategy eerst leesbaar in YAML.

Pas als er echt herhaling of complexe pure logica ontstaat, trek die uit naar:

- `openquatt/includes/oq_thermal_request_logic.h` als het gedeelde request/actuator-logica is
- eventueel `openquatt/includes/oq_<your_strategy>_logic.h` als het echt strategy-specifieke pure logica is

Hou daarbij vast aan deze grens:

- YAML blijft eigenaar van publication en flow
- helpercode blijft side-effectvrij

## Ontwerpregels voor nieuwe strategies

Hou een nieuwe strategy aan deze regels:

- produceer compressor requests, geen actuator writes
- gebruik `oq_strategy_*` als gedeelde interface, niet losse ad-hoc globals
- publiceer alleen strategy-eigen state in de strategy module
- laat guards en limits in `oq_thermal_request_control`
- laat echte mode/level writes in `oq_thermal_actuator`
- hou de strategy-flow zichtbaar in YAML, ook als je helpers gebruikt
- gebruik helperheaders alleen voor pure logica, niet voor verborgen control-flow

Goede vraag om steeds te stellen:

- "Is dit echt strategy-logica?"

Zo ja:

- strategy module

Zo nee, en het is een gedeelde begrenzing of runtime-regel:

- `oq_thermal_request_control`

Zo nee, en het is een echte write naar hardware:

- `oq_thermal_actuator`

## Minimale acceptatiecriteria

Een nieuwe strategy is pas merge-klaar als:

1. de strategy selector hem kan kiezen
2. `oq_strategy_*` consistent gevuld wordt
3. de strategy compressor requests publiceert
4. `oq_thermal_request_control` die requests verwerkt
5. alle 4 configs compilen
6. `python3 scripts/dev.py validate --jobs 1` groen is

## Template

Gebruik dit bestand als startpunt:

- [Heating strategy template](templates/heating-strategy-template.yaml)

Dit template is expres minimaal en niet direct in de package-load opgenomen. Het is bedoeld als skeleton voor nieuwe strategy-modules.
