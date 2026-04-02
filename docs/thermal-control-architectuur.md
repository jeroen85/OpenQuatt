# Thermal Control Doelarchitectuur

Deze notitie bundelt twee lijnen tot een geconsolideerd doelontwerp:

- de eerder opgestelde thermal-control-refactor richting
- de extra wens om nieuwe heating strategies later ook overzichtelijk en met zo min mogelijk actuatorkennis te kunnen toevoegen

Het doel is dus niet alleen een schonere scheiding tussen heating en cooling, maar ook een stabiele architectuur waarin:

- strategy-code thermische intent bepaalt
- dispatch-code die intent omzet naar expliciete warmtepompverzoeken
- actuator-code als enige laag veilig naar hardware schrijft

## Huidige stand van de refactor

De doelarchitectuur hieronder is deels al fysiek ingevoerd in de branch die deze notitie gebruikt:

- `openquatt/oq_thermal_limits.yaml` bestaat als eigen package
- `openquatt/oq_dispatch_contract.yaml` bestaat als expliciete handoff-laag
- `openquatt/oq_thermal_actuator.yaml` bestaat als enige writer naar HP mode/level
- `openquatt/oq_cooling_dispatch.yaml` en `openquatt/oq_heating_curve_control.yaml` dragen al producer-logica
- `openquatt/oq_power_house_control.yaml` draagt nu ook de Power House-producerlogica

De belangrijkste resterende stap is nu beoordelen of de resterende generieke dispatch-shaping in `openquatt/oq_heat_control.yaml` nog verder opgesplitst moet worden.

## Kernprincipe

De belangrijkste grens in de architectuur is:

- thermal strategy
- thermal dispatch
- thermal actuation

Of in gewone taal:

- strategy bepaalt wat thermisch gewenst is
- dispatch bepaalt welke HP-request daarbij hoort
- actuation bepaalt hoe dat veilig op de hardware wordt toegepast

Dat is een betere scheiding dan:

- een heating-bestand
- een cooling-bestand

want de veilige actuatorpaden moeten juist zo veel mogelijk gedeeld blijven.

## Ontwerpdoelen

Dit doelontwerp probeert tegelijk vier dingen te bereiken:

1. Cooling mag nooit meer impliciet een heating-strategypad erven.
2. De actuatorlaag blijft de enige plek die HP-mode en compressorlevels schrijft.
3. Bestaande Power House- en curve-logica kunnen zonder gedragswijziging inpasbaar blijven.
4. Een extra heating strategy moet later toegevoegd kunnen worden zonder eerst de hele actuatorlaag te hoeven begrijpen.

## Doellagen

### 1. Thermal limits and abstractions

Deze laag bevat gedeelde thermische abstraheringen en guardrails, zoals:

- `oq_system_supply_temp`
- water-temperature limiter
- water-temperature trip / hard trip

Dit zijn geen strategy-specifieke keuzes, maar systeembeleid dat meerdere strategies en de actuatorlaag nodig hebben.

### 2. Thermal strategy manager

Deze laag kiest welke heating strategy actief is en publiceert heating-side gemeenschappelijke status.

Deze laag:

- kent de beschikbare heating strategies
- bewaakt de actieve selection
- houdt compatibiliteitsaliases tijdelijk in stand tijdens migratie

Deze laag hoort geen compressorlevels of HP-modes te kiezen.

### 3. Strategy implementations

Elke strategy-implementatie bepaalt thermische intent binnen zijn eigen domein:

- `oq_heating_curve_control.yaml`
- `oq_power_house_control.yaml`
- `oq_cooling_control.yaml`

Deze laag:

- leest canonical inputs zoals `*_selected`
- bepaalt targets, hystereses, owner/topology-keuze en optimizerbeslissingen
- publiceert strategy-status en dispatch-output

Deze laag schrijft niet direct naar HP-actuatoren.

### 4. Dispatch contract

Deze laag vormt de expliciete handoff tussen strategy en actuator.

Hiermee hoeft de actuatorlaag geen verborgen kennis meer te hebben van de strategy die het verzoek produceerde.

### 5. Thermal actuator

Deze laag is de enige plek die HP’s daadwerkelijk aanstuurt.

Deze laag:

- leest dispatch-output
- past safety en runtime-bescherming toe
- schrijft veilige mode- en level-updates naar hardware

## Voorgestelde bestandsstructuur

Doelstructuur:

- `openquatt/oq_thermal_limits.yaml`
- `openquatt/oq_heating_strategy.yaml`
- `openquatt/oq_dispatch_contract.yaml`
- `openquatt/oq_heating_curve_control.yaml`
- `openquatt/oq_power_house_control.yaml`
- `openquatt/oq_cooling_control.yaml`
- `openquatt/oq_thermal_actuator.yaml`

### `oq_thermal_limits.yaml`

Verantwoordelijkheden:

- gedeelde thermische abstraheringen
- gedeelde water-temperature guardrail
- supply-temperature abstractions

### `oq_heating_strategy.yaml`

Verantwoordelijkheden:

- actieve heating strategy kiezen
- heating-side common status en compatibiliteit
- geen directe dispatch- of actuatorwrites

### `oq_heating_curve_control.yaml`

Verantwoordelijkheden:

- heating curve target generation
- curve PID
- curve-specific hysterese
- single-HP-first / dual-enable logica
- curve-dispatch output

### `oq_power_house_control.yaml`

Verantwoordelijkheden:

- Power House warmtevraag en `P_req`
- low-load latch / re-entry block
- start confirmation
- perf-map optimizer
- topology hold
- Power House dispatch output

### `oq_cooling_control.yaml`

Verantwoordelijkheden:

- dew-point-safe cooling target
- cooling PI
- cooling owner selection
- cooling dispatch output

Cooling hoort geen implicitiete afhankelijkheid meer te hebben van:

- `oq_heat_mode_code`
- `oq_phouse_req_w`
- heating curve dispatch-heuristieken

### `oq_dispatch_contract.yaml`

Verantwoordelijkheden:

- centrale definitie van dispatch-signalen
- gedeelde diagnostiek rond dispatch-output

### `oq_thermal_actuator.yaml`

Verantwoordelijkheden:

- veilige toepassing van dispatch-output op hardware
- level allow-list handling
- silent/day caps
- min off-time
- minimum runtime hold
- startup inhibit after reboot
- defrost hold / pre-arm support
- start/stop bookkeeping
- runtime bookkeeping
- measured/target mode reconciliation
- finale writes naar HP mode en compressorlevels

Deze laag bepaalt niet:

- welke heating strategy actief is
- welke thermische target wenselijk is
- welke owner/topology uit comfort- of optimizerredenen gekozen wordt

## Contract 1: strategy-status

Voor debugging, supervisory en uitbreidbaarheid is een expliciet strategy-statuscontract wenselijk.

Voorgestelde velden:

- `oq_strategy_active_code`
- `oq_strategy_phase_code`
- `oq_strategy_phase_text`
- `oq_strategy_requested_power_w`
- `oq_strategy_supply_target_temp`
- `oq_strategy_heat_request_active`
- `oq_strategy_water_limit_factor`
- `oq_strategy_water_trip_active`
- `oq_strategy_water_hard_trip_active`
- `oq_strategy_debug_state`

Niet elke strategy hoeft elk veld inhoudelijk te gebruiken.

Voorbeelden:

- Power House gebruikt vooral `oq_strategy_requested_power_w`
- Heating curve gebruikt vooral `oq_strategy_supply_target_temp`
- Cooling publiceert vergelijkbare status, maar met een cooling-specifieke targetinterpretatie

## Contract 2: dispatch

De dispatchlaag vormt de harde handoff naar de actuatorlaag.

Voorgestelde velden:

- `oq_dispatch_mode_code`
- `oq_dispatch_hp1_req`
- `oq_dispatch_hp2_req`
- `oq_dispatch_reason`
- `oq_dispatch_owner_hp`
- `oq_dispatch_topology_code`
- `oq_dispatch_strategy_code`

### Betekenis

`oq_dispatch_mode_code`

- `0 = standby`
- `1 = cooling`
- `2 = heating`

`oq_dispatch_hp1_req`, `oq_dispatch_hp2_req`

- requested compressor levels voor finale actuatorprotectie
- nog steeds onderworpen aan:
- excluded levels
- min off-time
- startup inhibit
- minimum runtime hold
- caps

`oq_dispatch_reason`

- human-readable diagnostic
- voorbeelden:
- `curve_single_owner`
- `curve_dual_enable`
- `ph_best_single`
- `ph_keep_current`
- `cooling_owner_hp1`
- `cooling_restart_blocked`

## Regels voor strategies

Een strategy mag:

- canonical inputs lezen zoals `outside_temp_selected`, `room_temp_selected`, `room_setpoint_selected`, `water_supply_temp_selected`
- eigen tuning-controls en diagnostiek publiceren
- `oq_strategy_*` en `oq_dispatch_*` schrijven

Een strategy mag niet:

- `hp1_set_working_mode` of `hp2_set_working_mode` schrijven
- `hp1_compressor_level` of `hp2_compressor_level` schrijven
- `hp*_pump_speed` schrijven
- boiler direct schakelen
- Control Mode direct bepalen

## Regels voor de actuatorlaag

`oq_thermal_actuator.yaml` leest alleen:

- dispatch-output
- control mode
- actuator-safety state
- excluded levels / caps / runtime constraints / defrost state

`oq_thermal_actuator.yaml` schrijft alleen:

- `hp1_set_working_mode`, `hp2_set_working_mode`
- `hp1_compressor_level`, `hp2_compressor_level`
- applied diagnostics
- runtime/start-stop bookkeeping

## Supervisory, flow en boiler

Deze subsystemen blijven aparte owners:

- `oq_supervisory_controlmode.yaml` blijft eigenaar van CM-keuze
- `oq_flow_control.yaml` blijft eigenaar van pompregeling
- `oq_boiler_control.yaml` blijft eigenaar van boiler-relay gating

Wel is het wenselijk dat ze minder leunen op strategy-specifieke kennis en meer op het expliciete contract.

Bij voorkeur lezen ze vooral:

- `oq_strategy_heat_request_active`
- `oq_strategy_water_trip_active`
- `oq_strategy_water_hard_trip_active`
- dispatch- en post-actuation status waar relevant

## Migratie van de huidige code

Uit `oq_heating_strategy.yaml` verhuizen op termijn:

- curve PID en curve targetlogica naar `oq_heating_curve_control.yaml`
- Power House-specifieke warmtevraaglogica naar `oq_power_house_control.yaml`
- gedeelde supply abstraction en water-temp model naar `oq_thermal_limits.yaml`
- strategy-selectie en heating-common state blijven in afgeslankte `oq_heating_strategy.yaml`

Uit `oq_heat_control.yaml` verhuizen op termijn:

- curve dispatch naar `oq_heating_curve_control.yaml`
- Power House optimizer/dispatch naar `oq_power_house_control.yaml`
- cooling dispatch naar `oq_cooling_control.yaml`
- veilige HP-apply logic naar `oq_thermal_actuator.yaml`

## Voorgesteld fasemodel

### Fase 1: grenzen expliciet maken in bestaande bestanden

Doel:

- shared actuatorlogica zichtbaar isoleren
- curve dispatch zichtbaar isoleren
- Power House dispatch zichtbaar isoleren
- cooling dispatch zichtbaar isoleren
- strategy leakage naar cooling verwijderen

Deliverable:

- zelfde bestandsaantal
- helderder mentaal model
- lager reviewrisico

### Fase 2: dispatch-contract invoeren

Doel:

- strategyblokken schrijven alleen `oq_dispatch_*`
- actuatorblok leest alleen `oq_dispatch_*`

Deliverable:

- expliciet handoff-punt
- betere debugbaarheid
- minder verborgen koppeling

### Fase 3: gedeelde thermal limits expliciet maken

Doel:

- supply abstractions en water-temp guardrails los trekken uit strategy-specifieke code

Deliverable:

- duidelijker onderscheid tussen systeembeleid en strategybeleid

### Fase 4: fysieke filesplit

Doel:

- curve naar `oq_heating_curve_control.yaml`
- Power House naar `oq_power_house_control.yaml`
- cooling in `oq_cooling_control.yaml`
- shared command application naar `oq_thermal_actuator.yaml`

Deliverable:

- kleinere files
- duidelijkere ownership
- minder regressierisico bij ongerelateerde edits

### Fase 5: strategy-statuscontract en uitbreidbaarheid

Doel:

- `oq_strategy_*` statusvelden consistent maken
- nieuwe heating strategies later mogelijk maken zonder actuatorkennis

Deliverable:

- schonere extensielaag
- betere diagnostics
- foundation voor toekomstige custom strategies

## Praktische ontwerpkeuze

De eerdere thermal-control-refactor blijft de ruggengraat:

- shared actuator
- losse curve strategy
- losse Power House strategy
- losse cooling strategy

De extra toevoeging in dit geconsolideerde ontwerp is:

- een expliciete `oq_strategy_*` laag voor status en uitbreidbaarheid
- een expliciete `oq_thermal_limits.yaml` laag voor gedeelde thermische guardrails

Daarmee ontstaat een architectuur die niet alleen beter is voor heating/cooling-scheiding, maar ook beter schaalbaar is voor toekomstige strategies.
