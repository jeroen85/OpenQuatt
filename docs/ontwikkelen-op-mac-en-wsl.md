# Ontwikkelen Op Mac En WSL

Deze repo werkt het prettigst op een POSIX-omgeving:

- macOS
- Linux
- WSL2 op Windows

De belangrijkste reden is dat de lokale ESPHome-compile beter aansluit op CI en op macOS, en dat native Windows sneller last heeft van padlengte, file-locking en component-cacheconflicten bij parallelle builds.

## Aanbevolen Setup

Voor Windows:

1. Installeer WSL2 met een recente Ubuntu-release.
2. Clone deze repo in het Linux-filesystem, bijvoorbeeld `~/src/OpenQuatt`.
3. Werk vanuit WSL in die map, niet vanuit `/mnt/c/...`.

Voor macOS:

1. Clone de repo in je normale home-directory.
2. Gebruik de Python- en shell-commando's hieronder direct in Terminal.

## Windows Helper

Vanaf een Administrator PowerShell kun je de basisinstallatie starten met:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup_wsl_openquatt.ps1
```

Na de eerste WSL-installatie en je eerste Ubuntu-login kun je pakketten klaarzetten met:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup_wsl_openquatt.ps1 -InstallPackages
```

Als je een schone clone in WSL wilt laten aanmaken:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup_wsl_openquatt.ps1 -InstallPackages -CloneRepo
```

Gebruik `-CloneRepo` alleen als je branch al veilig in git staat. Heb je nog lokale, niet-gecommitte wijzigingen op Windows, commit of push die eerst.

## Codex Op Windows

Gebruik je deze repo vanuit de Codex-desktopapp op Windows, dan is het handiger om WSL-opdrachten via een vaste wrapper te laten lopen:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\wsl_dev.ps1 status
powershell -ExecutionPolicy Bypass -File .\scripts\wsl_dev.ps1 validate --jobs 2
```

Beschikbare subcommands:

- `bootstrap`
- `validate`
- `preview-pages`
- `status`
- `fetch`
- `pull`
- `push`
- `branch`
- `git ...`
- `python ...`

Deze wrapper laat alle WSL-werkzaamheden via een consistente command-prefix lopen. In Codex betekent dat doorgaans minder losse toestemmingsprompts nadat die prefix eenmaal is goedgekeurd.

## Hoofdworkflow

Gebruik deze commando's als primaire lokale workflow:

```bash
python3 scripts/dev.py bootstrap
python3 scripts/dev.py validate
python3 scripts/dev.py validate --config-only
python3 scripts/dev.py preview-pages --no-serve
```

De `bootstrap`-stap maakt een lokale `.venv` aan en installeert de gepinde ESPHome-versie uit de repo.
Voer `python3 scripts/dev.py bootstrap` opnieuw uit nadat `/.github/requirements-esphome.txt`
is aangepast; de bootstrap ververst een bestaande `.venv` dan opnieuw naar de gepinde versie.

## Parallel Bouwen

Op macOS, Linux en WSL kun je parallel bouwen met bijvoorbeeld:

```bash
python3 scripts/dev.py validate --jobs 2
```

Begin bij voorkeur met `--jobs 2`. Meer parallelisme kan sneller zijn, maar gebruikt ook meer CPU, RAM en schijfcache.
De eerste full-validate na een lege of opgeschoonde cache kan tijdelijk sequentieel lopen; de helper doet dat automatisch om ESP-IDF component-cache races te vermijden.

Op native Windows raden we parallel builden niet aan. Gebruik daar liever WSL voor, of draai native Windows-builds sequentieel.

## Native Windows

De PowerShell-wrappers blijven bestaan voor compatibiliteit:

- `.\scripts\bootstrap_esphome_local.ps1`
- `.\scripts\validate_local.ps1`
- `.\scripts\preview_pages_local.ps1`

Native Windows is nog bruikbaar voor lichte checks en voor USB/browser-gerelateerde taken, maar is niet de aanbevolen omgeving voor dagelijkse compile- en validatieruns.

## Flashen En Hardware

Voor browser-based flashen en andere hardwaretaken kan native Windows nog steeds handiger zijn dan WSL.

Een praktische verdeling is:

- ontwikkelen en compileren in macOS of WSL
- flashen en USB-taken in native Windows als dat eenvoudiger is
