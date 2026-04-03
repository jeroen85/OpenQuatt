# Thermal Control Refactor - Overdracht voor vervolg op macOS

## Huidige status

- Branch: `codex/thermal-control-refactor`
- Huidige branch bevat inmiddels fase 1 t/m 5 van de thermal-control refactor.
- Er is bewust nog geen PR gemaakt.

## Wat al is gedaan

### Fase 1 - grenzen expliciet gemaakt

Doel van fase 1 was de huidige gemengde thermal-control code leesbaar en splitsbaar maken zonder gedrag te wijzigen.

Dat is gedaan in:

- `openquatt/oq_heat_control.yaml`
- `openquatt/oq_heating_strategy.yaml`
- `docs/thermal-control-architectuur.md`

Concreet:

- de logische blokken zijn scherper gemarkeerd
- de toekomstige seams zijn expliciet gemaakt:
  - strategy manager
  - shared thermal guardrails
  - strategy-specific dispatch
  - actuator apply path
  - runtime bookkeeping

### Fase 2 - dispatch contract ingevoerd

Doel van fase 2 was een expliciete contractlaag tussen dispatch en actuatorpad invoeren, zonder de file-splitsing al te doen.

Dat is gedaan in:

- `openquatt/oq_heat_control.yaml`
- `openquatt/oq_packages.yaml`
- `openquatt/oq_packages_single.yaml`
- `scripts/check_style_consistency.py`

Concreet:

- er is een expliciet dispatch-contract ingevoerd
- dat contract woont nu compact in `oq_heat_control.yaml`
- `oq_heat_control.yaml` publiceert nu een expliciet contract voordat actuatorprotecties worden toegepast
- dit contract bleef in fase 2 nog in hetzelfde bestand gekoppeld aan actuatorlogica

## Betekenis van het dispatch contract

Nieuwe contractvelden:

- `oq_dispatch_mode_code`
- `oq_dispatch_hp1_req`
- `oq_dispatch_hp2_req`
- `oq_dispatch_owner_hp`
- `oq_dispatch_topology_code`
- `oq_dispatch_strategy_code`
- `oq_dispatch_reason`

Huidige codering:

- `oq_dispatch_mode_code`
  - `0 = Standby`
  - `1 = Cooling`
  - `2 = Heating`

- `oq_dispatch_topology_code`
  - `0 = None`
  - `1 = HP1`
  - `2 = HP2`
  - `3 = Duo`

- `oq_dispatch_owner_hp`
  - `0 = None`
  - `1 = HP1`
  - `2 = HP2`

- `oq_dispatch_strategy_code`
  - `0 = Inactive`
  - `1 = Cooling`
  - `2 = Heating Curve`
  - `3 = Power House`

Belangrijk:

- het contract wordt nu nog geproduceerd in `oq_heat_control.yaml`
- dat is bewust een tussenstap
- de volgende refactorstappen moeten de producers van dit contract fysiek uit `oq_heat_control.yaml` trekken

## Belangrijke ontwerpkeuzes tot nu toe

### 1. Geen big bang refactor

De refactor is bewust in kleine veilige stappen opgezet:

- eerst leesbare grenzen
- daarna een expliciet handoff contract
- pas daarna file-splitsing

### 2. Contract wordt gepubliceerd voor actuatorprotecties

`oq_dispatch_hp1_req` en `oq_dispatch_hp2_req` zijn nu pre-protection requests.

Dat betekent:

- exclusions horen conceptueel niet bij de strategylaag
- min-runtime hoort conceptueel niet bij de strategylaag
- startup inhibit hoort conceptueel niet bij de strategylaag
- mode writes naar HP1/HP2 horen conceptueel niet bij de strategylaag

### 3. Inactieve CM blijft nog een speciale fast-exit

De `!cm_allows_hp` branch doet nu nog direct standby/hold gedrag en publiceert daarna wel de dispatch state.

Dat is bewust nog niet volledig losgetrokken.

De echte actuatorisolatie hoort bij een latere fase.

### 4. Thermal limits zijn nu een eigen package

De gedeelde supply/water guardrail zit niet meer in `oq_heating_strategy.yaml`.

Die policy woont nu in:

- `openquatt/oq_thermal_limits.yaml`

Dat betekent:

- `oq_system_supply_temp` is nu expliciet een gedeelde abstrahering
- water-temperature limiter / trip / hard-trip state hebben nu een eigen eigenaar
- `oq_heating_strategy.yaml` leest deze shared state nu alleen nog als input

### 5. Thermal actuator is nu een eigen package

De directe HP mode/level writes zitten niet meer in `oq_heat_control.yaml`.

Die laag woont nu in:

- `openquatt/oq_thermal_actuator.yaml`

Dat betekent:

- `oq_heat_control.yaml` eindigt nu bij finalized actuator requests
- `oq_thermal_actuator.yaml` consumeert `oq_dispatch_mode_code`
- `oq_thermal_actuator.yaml` consumeert `oq_actuator_hp1_req` en `oq_actuator_hp2_req`
- alleen `oq_thermal_actuator.yaml` schrijft nog naar:
  - `hp1_set_working_mode`
  - `hp2_set_working_mode`
  - `hp1_compressor_level`
  - `hp2_compressor_level`
- post-apply bookkeeping en runtime-accumulatie hebben nu ook een expliciete eigenaar

### 6. Cooling, heating-curve en Power House dispatch zijn nu eigen producers

De directe curve- en cooling-dispatchlogica woont niet meer volledig in `oq_heat_control.yaml`.

Nieuwe producer-files:

- `openquatt/oq_cooling_control.yaml`
- `openquatt/oq_heating_curve_control.yaml`
- `openquatt/oq_power_house_control.yaml`

Dat betekent:

- cooling demand, owner-keuze en cooling request generation wonen nu in `oq_cooling_control.yaml`
- heating-curve targetvorming, PID, demand generation en single-vs-dual dispatch wonen nu in `oq_heating_curve_control.yaml`
- Power House demand filtering en topology-keuze wonen nu in `oq_power_house_control.yaml`
- `oq_heating_strategy.yaml` is nu teruggebracht tot strategy manager/shared contract
- `oq_heat_control.yaml` leest deze producer-output nu terug en publiceert daarna nog steeds het dispatch contract
- `oq_heat_control.yaml` houdt nu vooral de generieke post-dispatch shaping en actuator-handoff over

### 7. Compacting pass op package-count

De laatste stap heeft de refactor weer iets compacter gemaakt, zonder de hoofdgrenzen terug te draaien.

Concreet:

- `openquatt/oq_dispatch_contract.yaml` is teruggevouwen in `openquatt/oq_heat_control.yaml`
- `openquatt/oq_cooling_dispatch.yaml` is teruggevouwen in `openquatt/oq_cooling_control.yaml`
- `openquatt/oq_ha_cooling_inputs.yaml` is teruggevouwen in `openquatt/oq_ha_inputs.yaml`
- `openquatt/oq_debug_testing_duo.yaml` is teruggevouwen in `openquatt/oq_debug_testing.yaml`
- de grote architectuurgrenzen blijven staan:
  - thermal limits
  - heating strategy
  - cooling control
  - heating-curve producer
  - Power House producer
  - heat-control shaping + contract
  - thermal actuator

### 8. Strategy-statuscontract afgerond

De expliciete `oq_strategy_*` laag uit de architectuurnotitie is nu ook fysiek aanwezig.

Concreet:

- `openquatt/oq_heating_strategy.yaml` declareert nu het gedeelde contract
- curve, Power House en cooling publiceren elk hun eigen strategy-status in dat contract
- `oq_supervisory_controlmode.yaml` en `oq_heat_control.yaml` lezen nu waar passend het generieke contract in plaats van losse strategy-specifieke signalen
- water-limit/trip/hard-trip state is nu ook als gedeelde strategy-status beschikbaar

Belangrijk gevolg:

- de refactor is nu niet meer alleen een filesplit, maar ook een expliciete extensielaag voor toekomstige strategies

## Relevante bestanden om als eerste te lezen op de Mac

In deze volgorde:

1. `docs/thermal-control-architectuur.md`
2. `docs/thermal-control-overdracht.md`
3. `openquatt/oq_thermal_limits.yaml`
4. `openquatt/oq_heating_strategy.yaml`
5. `openquatt/oq_cooling_control.yaml`
6. `openquatt/oq_heating_curve_control.yaml`
7. `openquatt/oq_power_house_control.yaml`
8. `openquatt/oq_heat_control.yaml`
9. `openquatt/oq_thermal_actuator.yaml`
10. `openquatt/oq_packages.yaml`
11. `openquatt/oq_packages_single.yaml`

## Aanbevolen vervolgstappen

Er is op dit moment geen verplichte volgende refactorfase meer open uit `thermal-control-architectuur.md`.

De resterende keuze is nu vooral pragmatisch:

- `oq_heat_control.yaml` laten staan als compacte gedeelde shaping-laag
- of later alsnog verder opsplitsen als er in de praktijk concrete lees- of reviewpijn ontstaat

Dan wordt:

- strategy/dispatch producer
- actuator consumer

eindelijk ook fysiek gescheiden.

Concreet wat nog in `oq_heat_control.yaml` zit en kandidaat is voor extractie:

- gedeelde demand filtering en pre-actuator request shaping
- dispatch-contract publicatie
- curve-specifieke slew limiting
- gedeelde debug/diagnostics rond dispatch en actuator-input

Waarschijnlijke tussenstap:

- `oq_heat_control.yaml` bewust compact houden als gedeelde shaping-laag
- alleen verder opsplitsen als daar later concrete lees- of reviewpijn voor ontstaat

## Praktische start op macOS

Aanbevolen stappen:

1. Clone of fetch de repo
2. Checkout branch `codex/thermal-control-refactor`
3. Lees eerst de twee docs
4. Draai daarna de validatie

Indicatieve commands:

```bash
git fetch origin
git checkout codex/thermal-control-refactor
git pull --ff-only origin codex/thermal-control-refactor
```

Als `rg` nog niet beschikbaar is:

```bash
brew install ripgrep
```

Validatie:

```bash
python3 scripts/dev.py validate --jobs 1
```

## Bekende validatiecontext

De laatst gedraaide validatie gaf geen nieuwe fase-3-specifieke fouten meer.

Er zijn wel bestaande repo-brede style/config meldingen buiten deze refactor, onder meer in:

- `openquatt/oq_HP_io.yaml`
- `openquatt/oq_sensor_sources.yaml`
- `openquatt/profiles/oq_substitutions_heatpump_listener.yaml`
- `openquatt/profiles/oq_substitutions_waveshare.yaml`

Die meldingen bestonden al of horen niet direct bij deze thermal-control branchstap.

## Aanbevolen mindset voor vervolg

Hou de volgende regel aan:

- eerst een seam expliciet maken
- daarna pas logica verplaatsen
- pas daarna consumers omzetten

Dus:

- geen grote hernoemactie
- geen meerdere conceptuele migraties tegelijk
- bestaande behavior zoveel mogelijk per stap behouden

## Kortste route vooruit

Als er maar een beperkte sessie op de Mac beschikbaar is, pak dan alleen dit op:

1. Isoleer actuatorwrites in `oq_thermal_actuator.yaml`
2. Laat `oq_heat_control.yaml` alleen dispatch en pre-actuator policy bepalen
3. Laat downstream runtime/safety writes door de actuatorlaag doen
4. Valideer
5. Commit als fase 4

Dat is nu de veiligste volgende stap.
