# Single/Duo Refactor Plan + Implementation Contract

Status: dit document is een historisch refactorplan. De tijdelijke fase-1 regressieharness is na merge verwijderd uit `main`.

## 1. Doel en uitgangspunten

Deze refactor voegt compile-time support toe voor zowel:

- Quatt Duo (bestaand gedrag, referentiepad)
- Quatt Single (nieuw pad)

Belangrijkste eisen:

- Minimale impact op de bestaande codebase.
- Zo min mogelijk nieuwe bestanden.
- Geen runtime workarounds; topologie wordt bij compile-time gekozen.
- Niet-relevante duo-functionaliteit moet in Single volledig weggecompileerd zijn.
- Duo mag geen functionele regressie krijgen.

## 2. Architectuurkeuze (definitief)

We gebruiken een **hybride compile-time aanpak**:

1. **YAML/package-selectie** voor topologie (Single vs Duo).
2. **C++ preprocessor (`#if`)** alleen voor beslislogica in headers/lambda-helpers.

Waarom deze keuze:

- ESPHome YAML kan niet direct met C preprocessor volledige entityblokken conditioneel maken.
- Grote hoeveelheden `#ifdef` in YAML-lambda's maken onderhoud moeilijk.
- Package-compositie houdt configuratie schoon en voorspelbaar.

## 3. Technische implementatie van compile-time topologie

Topologiekeuze bestaat uit twee lagen:

1. **YAML-laag (compositie)**
- Aparte package-manifesten voor Duo en Single.
- Duo manifest bevat `heatpump1` + `heatpump2`.
- Single manifest bevat alleen `heatpump1`.

2. **C++-laag (flags)**
- Build flag: `OQ_TOPOLOGY_DUO=1` voor Duo builds.
- Build flag: `OQ_TOPOLOGY_DUO=0` voor Single builds.
- Gebruikt in headers/lambda-helpers om duo-only logica compile-time uit te sluiten.

Geen Python codegen.

## 4. Korte impactanalyse (geraakte modules)

Primair:

- `openquatt_base.yaml`
- `openquatt/oq_substitutions_common.yaml`
- `openquatt/oq_packages.yaml` (+ single variant)
- entrypoints (`openquatt*.yaml`)

Grote functionele impact:

- `openquatt/oq_heat_control.yaml` (grootste)
- `openquatt/oq_supervisory_controlmode.yaml`
- `openquatt/oq_flow_control.yaml`
- `openquatt/oq_heating_strategy.yaml`
- `openquatt/oq_cic.yaml`
- `openquatt/oq_boiler_control.yaml`

Secundair:

- `openquatt/oq_debug_testing.yaml`
- `openquatt/oq_webserver.yaml`
- `.github/workflows/ci-build.yml`
- `scripts/validate_local.sh`
- `README.md` en relevante docs

## 5. Faseplan met regressiegates

### Fase 0: Topologie-plumbing

Doel:

- Build-entrypoints en package-selectie voorbereiden op Single/Duo.

Wijzigingen:

- Topologie-selecteerbare package include in base config.
- Build flags toevoegen voor `OQ_TOPOLOGY_DUO`.
- Single entrypoints toevoegen.
- Duo blijft default-pad.

Gate 0:

- Duo compile groen op:
  - `openquatt_duo_waveshare.yaml`
  - `openquatt_duo_heatpump_listener.yaml`

### Fase 1: Duo baseline regressieharness

Doel:

- Duo gedrag objectief bevriezen vóór functionele refactor.

Aanpak:

- Pure beslislogica naar kleine headers (zonder ESPHome runtime-afhankelijkheden).
- Host-side C++ regressierunner met golden outputs.
- Focus op:
  - power-cap safety stepper
  - frost hysteresis/fail-safe beslislogica
  - dual-HP hold state-machine (enable/disable timers)

Baseline (historisch):

- Tijdens de refactor is tijdelijk een host-side C++ regressieharness gebruikt met golden outputs.
- Die tijdelijke harness/scripts zijn na afronding van de refactor verwijderd uit `main` om onderhoudslast te beperken.
- De structurele gates op `main` zijn compile-validatie per topology/hardware en documentatie-consistentie.

Gate 1 (historisch):

- Tijdelijke regressierunner slaagt op baseline.
- Duo compile blijft groen.
- Golden outputs vormen referentie voor de opvolgende refactorfases.

### Fase 2A: Heat control migratie

Doel:

- `oq_heat_control` geschikt maken voor Single/Duo compile-time.

Single:

- Geen dual split logica.
- Geen runtime lead balancing.
- Geen duo-specifieke draaitijdbalancering.

Duo:

- Gedrag functioneel gelijk aan baseline.

Gate 2A:

- Duo golden exact gelijk.
- Duo compile groen.
- Single compile groen zonder `hp2_*` afhankelijkheid in heat-control pad.

### Fase 2B: Supervisory migratie

Doel:

- `oq_supervisory_controlmode` Single/Duo compile-time structureren.

Single:

- 16A/power-cap safety net compile-time uitgesloten.
- Geen HP2 active-guard of HP2 actuator writes.

Duo:

- Bestaand gedrag behouden.

Gate 2B:

- Duo golden exact gelijk.
- Single compile groen.
- Bevestigd dat 16A/duo-guard code niet in Single build zit.

### Fase 2C: Flow + strategy + CIC + boiler

Doel:

- Overige aggregatie- en ketenmodules topologie-safe maken.

Modules:

- `oq_flow_control`
- `oq_heating_strategy`
- `oq_cic`
- `oq_boiler_control`

Single:

- HP1-only aggregaties waar van toepassing.
- Geen HP2 required references.

Gate 2C:

- Duo golden exact gelijk.
- Single compile groen.

### Fase 3: Debug/UI/CI/docs afronding

Doel:

- Topologieconsistentie in tooling, UI en documentatie.

Modules:

- `oq_debug_testing`
- `oq_webserver`
- CI matrix
- README + specs

Gate 3:

- Duo + Single compile matrix groen.
- Regressierunner groen.
- Documentatie compleet en consistent.

## 6. Implementation Contract

### 6.1 Scope

In scope:

- Compile-time Single/Duo support.
- Compile-time eliminatie van single-irrelevante duo-functionaliteit.
- Duo gedrag functioneel equivalent.

Out of scope:

- Runtime omschakelen tussen Single en Duo.
- Nieuwe control-strategieën buiten benodigde refactor.

### 6.2 Niet-onderhandelbare eisen

- Duo gedrag blijft functioneel gelijk aan pre-refactor baseline.
- Single build compileert zonder actieve code voor:
  - 16A beveiligingslogica
  - dual HP allocatie/logica
  - draaitijd lead/balancing logica
- Geen verborgen runtime workarounds voor topologie.

### 6.3 Bestandscontract

- Duo entrypoints blijven bestaan en blijven default.
- Nieuwe bestanden blijven beperkt tot:
  - single entrypoints
  - single package-manifest
  - 1-2 logic headers
  - regressierunner + golden files
- Geen onnodige file-proliferatie.

### 6.4 Regressiecontract (Duo)

- Golden scenario set is verplicht.
- Duo parity-check tegen vastgelegde main-baseline is verplicht.
- Na elke modulefase:
  - duo parity check exact match
  - golden compare exact match
  - compile must pass
- Bij mismatch: fase niet mergebaar.

### 6.5 Single-contract

- Geen unresolved `hp2_*` references in Single.
- Duo-only features zijn compile-time uitgesloten, niet alleen runtime geskipt.

### 6.6 CI-contract

Minimaal in CI:

- Duo waveshare config+compile
- Duo heatpump-listener config+compile
- Single waveshare config+compile
- Single heatpump-listener config+compile
- Regressierunner

PR faalt op elke compilefout of regressie.

### 6.7 Definition of Done

- Alle CI checks groen.
- Duo golden scenarios exact gelijk aan baseline.
- Single firmware compileert op beide hardwareprofielen.
- Single-irrelevante duo-functies compile-time uitgesloten.
- Documentatie en build-instructies bijgewerkt.

## 7. Risico's en mitigaties

Risico:

- Grote all-at-once refactor geeft regressiekans.

Mitigatie:

- Gefaseerde uitvoering met gates per module.

Risico:

- Onleesbare mix van YAML + preprocessor.

Mitigatie:

- Preprocessor alleen voor pure logica; YAML blijft eigenaar van entities.

Risico:

- Testharnas wordt onderhoudslast.

Mitigatie:

- Kleine set kritieke scenarios en compacte runner; alleen beslislogica testen.

## 8. Executiestrategie in commits

Aanbevolen commitvolgorde:

1. Topologie-plumbing (zonder gedragswijziging).
2. Regressierunner + golden baseline.
3. Heat control refactor.
4. Supervisory refactor.
5. Flow/Strategy/CIC/Boiler refactor.
6. Debug/UI/CI/docs afronding.

Elke commitreeks eindigt met gate-checks.
