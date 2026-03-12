# Contributing

Deze gids is bedoeld voor repo-onderhoud en reviews. Het doel is niet om generieke YAML-stijl af te dwingen, maar om ESPHome-packages voorspelbaar en snel leesbaar te houden.

## Doel

- Houd high-churn control-packages logisch opgebouwd.
- Maak runtime state en ownership snel vindbaar.
- Forceer alleen regels die weinig ruis geven en echt helpen bij reviews.

## Scope

De automatische style-check is bewust smal, maar geldt nu volledig voor alle ESPHome YAML-entrypoints en package-gerelateerde bestanden:

- Voor alle hoofdconfiguraties, base-configs, profile-files en package YAML's:
  - geen tabs
  - geen trailing whitespace
  - consistente banner header bovenaan
- Voor alle package YAML's in `openquatt/*.yaml`:
  - vaste top-level groepsvolgorde
  - lambda-opbouw voor grotere blokken
- Voor alle hoofdconfiguraties en base-configs:
  - vaste top-level volgorde van `substitutions`, `packages`, `esphome`, `esp32` waar van toepassing
  - vaste child-volgorde binnen kleine wiring-mappings zoals `packages:`
- Voor package include manifests en substitution-bestanden:
  - vaste include-volgorde in `oq_packages*.yaml`
  - vaste section-volgorde in `oq_substitutions_common.yaml`
  - vaste key-volgorde in hardware-profile `substitutions:`

## Package Layout

Gebruik deze groepsvolgorde wanneer een package deze blokken bevat:

1. banner + verantwoordelijkheidsblok
2. infrastructuur zoals `logger:`, `api:`, `ota:`, `wifi:`, `http_request:`, `uart:`, `modbus:`, `modbus_controller:`, `one_wire:`, `time:`, `web_server:`
3. interne state via `globals:`
4. control/helper-blokken zoals `script:`, `output:`, `climate:`, `switch:`, `select:`, `number:`, `datetime:`, `text:`, `button:`
5. gepubliceerde entities via `binary_sensor:`, `sensor:`, `text_sensor:`, `update:`
6. periodieke loop via `interval:`

Rationale:

- infrastructuur bovenaan maakt externe afhankelijkheden en board/runtime setup direct zichtbaar
- `globals:` vroeg in het bestand maakt latches, timers en ownership snel vindbaar
- control/helper-blokken staan voor gepubliceerde entities, zodat eerst duidelijk is wat het package aanstuurt en beheert
- `datetime`, `climate` en `output` horen expliciet in die control/helper-laag en niet ad hoc verspreid door het bestand
- `interval:` onderaan houdt de hoofdloop bij de uitvoerende logica

Binnen een groep is de exacte volgorde minder belangrijk dan leesbaarheid en samenhang.

## Reviewregels

Niet alles wordt automatisch gecontroleerd. Bij reviews blijven deze regels leidend:

- Houd lambda's gefaseerd: inputs lezen, state berekenen, outputs toepassen, diagnostics publiceren.
- Gebruik korte sectieheaders boven top-level blokken.
- Houd single-writer ownership expliciet; vermijd verborgen schrijvers naar dezelfde state.
- Voeg alleen comments toe waar de intentie anders niet direct duidelijk is.

## Lambda Style

Voor ESPHome-lambda's gebruiken we een smalle maar harde stijl:

- gebruik altijd `lambda: |-`, niet inline one-liners
- houd de lambda-body als blok duidelijk onder de `lambda:`-regel ingesprongen
- gebruik maximaal één lege regel tussen logische blokken
- voeg bij lambda's van 12 of meer niet-lege regels minimaal één korte `//` fase- of intentiecomment toe

Voor grotere lambda's is de voorkeursopbouw:

1. inputs lezen / valideren
2. interne berekening of state updates
3. output of returnwaarde publiceren

Als een lambda meerdere verantwoordelijkheden heeft, geef die blokken dan expliciet namen met korte comments.

## Lokale Validatie

Aanbevolen ontwikkelomgeving:

- macOS
- Linux
- WSL2 op Windows

Gebruik op Windows bij voorkeur WSL en clone de repo in het Linux-filesystem, niet onder `C:\...` of `/mnt/c/...`. Native Windows blijft bruikbaar voor lichte checks en compatibiliteit, maar is niet de voorkeursroute voor dagelijkse compile-runs of parallel builds.

Gebruik:

- `python3 scripts/dev.py bootstrap`
- `python3 scripts/dev.py validate`
- `python3 scripts/dev.py validate --config-only`
- `python3 scripts/dev.py validate --jobs 2`

Convenience wrappers blijven beschikbaar:

- `./scripts/bootstrap_esphome_local.sh`
- `.\scripts\wsl_dev.ps1 bootstrap`
- `.\scripts\wsl_dev.ps1 validate --jobs 2`
- `./scripts/validate_local.sh`
- `.\scripts\bootstrap_esphome_local.ps1`
- `.\scripts\validate_local.ps1`

Losse checks blijven bruikbaar voor snelle iteraties:

- `python3 scripts/check_style_consistency.py`
- `python3 scripts/check_docs_consistency.py`

Meer achtergrond en een concrete WSL/macOS workflow staan in [docs/ontwikkelen-op-mac-en-wsl.md](docs/ontwikkelen-op-mac-en-wsl.md).

De checker is bedoeld als lokale kwaliteitsgate. Nieuwe regels horen pas toegevoegd te worden als de huidige codebase er stabiel mee om kan gaan.
