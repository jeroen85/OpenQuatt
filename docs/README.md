# OpenQuatt documentatie

Deze documentatie is bedoeld voor gebruikers die OpenQuatt willen installeren, koppelen aan Home Assistant en daarna gericht willen afstellen of verdiepen.

## Begin hier

1. [README in de repo](../README.md)
2. [Installatie en ingebruikname](installatie-en-ingebruikname.md)
3. [Dashboard installeren](dashboard/README.md)
4. [Dashboardoverzicht](dashboardoverzicht.md)

Gebruik je de standaardfirmware, dan is de web installer uit de README meestal de snelste route. Daarna volg je de documentatieroute voor dashboard, uitleg en diagnose.

## Hoofdroute

- [Installatie en ingebruikname](installatie-en-ingebruikname.md): eerste installatie en controle na de eerste start.
- [Hoe OpenQuatt werkt](hoe-openquatt-werkt.md): rolverdeling tussen thermostaat, OpenQuatt, warmtepomp en Home Assistant.
- [Heating Strategy](heating-strategy.md): overzicht van `Power House` en `Water Temperature Control`, en wanneer welke aanpak past.
- [Power House](power-house.md): uitleg van de Power House-strategie, belangrijke parameters en Single/Duo-gedrag.
- [Water Temperature Control](water-temperature-control.md): uitleg van stooklijn, PID, curvegedrag en Duo-opbouw in watercurve-modus.
- [Dashboard installeren](dashboard/README.md): keuze van het juiste dashboardbestand en import in Home Assistant.
- [Dashboardoverzicht](dashboardoverzicht.md): de belangrijkste dashboardtabs en de volgorde waarin je ze gebruikt.
- [Diagnose en afstelling](diagnose-en-afstelling.md): diagnose, werkvolgorde en terughoudend afstellen.

Cooling wordt nu in hoofdlijnen beschreven in:

- [Hoe OpenQuatt werkt](hoe-openquatt-werkt.md): wat koeling wel en niet van OpenQuatt vraagt.
- [Dashboardoverzicht](dashboardoverzicht.md): waar je de cooling-tab en sensorconfiguratie gebruikt.

## Naslag

- [Heating Strategy](heating-strategy.md): bovenliggende uitleg van beide verwarmingsstrategieën.
- [Heating Strategy Development](heating-strategy-development.md): developer-uitleg van de strategy-interface, uitbreidregels, YAML-template en de grens tussen YAML-structuur en pure `.h` helpers.
- [Power House](power-house.md): aparte uitleg van huismodel, comfortlogica, rise/fall time, laaglastgedrag en Duo-keuze.
- [Water Temperature Control](water-temperature-control.md): aparte uitleg van stooklijn, PID, curve phase/operating regime en Duo-hysterese.
- [Regelgedrag van OpenQuatt](regelgedrag-van-openquatt.md): systeemstanden, overgangen en flowregeling.
- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md): compile-time en runtime instellingen, plus de belangrijkste meetwaarden.
- [Ontwikkelen op Mac en WSL](ontwikkelen-op-mac-en-wsl.md): aanbevolen lokale ontwikkelworkflow voor onderhoud en builds.
- [OpenQuatt CiC Bridge](cic-bridge/README.md): aanvullende bridge-docs en een ESPHome-config om CiC-Modbusverkeer uit bestaande OpenQuatt-entities te emuleren.
