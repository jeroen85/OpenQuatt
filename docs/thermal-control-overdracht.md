# Thermal Control Refactor - Overdracht voor vervolg op macOS

## Huidige status

- Branch: `codex/thermal-control-refactor`
- Laatste commit op dit moment: `2d0f2f1` (`Introduce thermal dispatch contract`)
- Vorige mijlpaal: `5c8abd1` (`Refactor thermal control phase 1 boundaries`)
- Er is bewust nog geen PR gemaakt.
- De worktree was clean na het pushen van fase 2.

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

- `openquatt/oq_dispatch_contract.yaml`
- `openquatt/oq_heat_control.yaml`
- `openquatt/oq_packages.yaml`
- `openquatt/oq_packages_single.yaml`
- `scripts/check_style_consistency.py`

Concreet:

- er is een nieuw packagebestand toegevoegd: `oq_dispatch_contract.yaml`
- de package-load-order kent nu expliciet een dispatch-laag tussen strategy en heat-control/apply
- `oq_heat_control.yaml` publiceert nu een expliciet contract voordat actuatorprotecties worden toegepast
- hetzelfde bestand leest daarna dat contract weer terug voor:
  - exclusions
  - slew limiting
  - hard trip
  - startup inhibit
  - min-runtime
  - working mode apply

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

## Relevante bestanden om als eerste te lezen op de Mac

In deze volgorde:

1. `docs/thermal-control-architectuur.md`
2. `docs/thermal-control-overdracht.md`
3. `openquatt/oq_dispatch_contract.yaml`
4. `openquatt/oq_heat_control.yaml`
5. `openquatt/oq_heating_strategy.yaml`
6. `openquatt/oq_packages.yaml`
7. `openquatt/oq_packages_single.yaml`

## Aanbevolen vervolgstappen

### Fase 3 - gedeelde thermal limits los trekken

Doel:

- shared thermal guardrails uit `oq_heating_strategy.yaml` halen
- daar een eigen system/policy laag van maken

Voorgestelde nieuwe file:

- `openquatt/oq_thermal_limits.yaml`

Wat daarheen moet:

- `oq_system_supply_temp`
- water temperature soft limit logic
- boiler inhibit state
- trip state
- hard trip state
- `oq_water_temp_limit_factor`

Wat voorlopig compatibel mag blijven:

- bestaande ID-namen mogen in eerste instantie hetzelfde blijven
- consumers hoeven in deze stap nog niet allemaal om

Succescriterium:

- `oq_heating_strategy.yaml` bevat geen gedeelde thermal limit policy meer
- curve en Power House gebruiken die gedeelde laag alleen nog als input

### Fase 4 - actuatorlaag fysiek isoleren

Doel:

- alles wat direct naar HP mode/level schrijft uit `oq_heat_control.yaml` halen

Voorgestelde nieuwe file:

- `openquatt/oq_thermal_actuator.yaml`

Wat daarheen moet:

- `set_mode`
- `apply_level`
- mode gate logic
- min off-time
- defrost retain/hold behavior
- runtime logging
- transition bookkeeping

Succescriterium:

- alleen `oq_thermal_actuator.yaml` schrijft nog naar:
  - `hp1_set_working_mode`
  - `hp2_set_working_mode`
  - `hp1_compressor_level`
  - `hp2_compressor_level`

### Fase 5 - strategy dispatch fysiek splitsen

Doel:

- Power House, heating curve en cooling uit `oq_heat_control.yaml` halen

Voorgestelde files:

- `openquatt/oq_heating_curve_control.yaml`
- `openquatt/oq_power_house_control.yaml`
- `openquatt/oq_cooling_control.yaml`

Dan wordt:

- strategy/dispatch producer
- actuator consumer

eindelijk ook fysiek gescheiden.

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

De laatst gedraaide validatie gaf geen nieuwe fase-1/fase-2-specifieke fouten meer.

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

1. Maak `oq_thermal_limits.yaml`
2. Verplaats de gedeelde water/supply guardrail daarheen
3. Laat `oq_heating_strategy.yaml` die nieuwe shared outputs lezen
4. Valideer
5. Commit als fase 3

Dat is de veiligste volgende stap.
