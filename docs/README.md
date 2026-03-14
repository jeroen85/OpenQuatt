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
- [OpenTherm-thermostaten](opentherm-thermostaten.md): OT-profiel, T6-mapping en welke OT-velden echt, proxy of compatibiliteitswaarden zijn.
- [Heating Strategy](heating-strategy.md): overzicht van `Power House` en `Water Temperature Control`, en wanneer welke aanpak past.
- [Power House](power-house.md): uitleg van de Power House-strategie, belangrijke parameters en Single/Duo-gedrag.
- [Water Temperature Control](water-temperature-control.md): uitleg van stooklijn, PID, curvegedrag en Duo-opbouw in watercurve-modus.
- [Dashboard installeren](dashboard/README.md): keuze van het juiste dashboardbestand en import in Home Assistant.
- [Dashboardoverzicht](dashboardoverzicht.md): de belangrijkste dashboardtabs en de volgorde waarin je ze gebruikt.
- [Diagnose en afstelling](diagnose-en-afstelling.md): diagnose, werkvolgorde en terughoudend afstellen.

## Naslag

- [Heating Strategy](heating-strategy.md): bovenliggende uitleg van beide verwarmingsstrategieën.
- [Power House](power-house.md): aparte uitleg van huismodel, comfortlogica, rise/fall time, laaglastgedrag en Duo-keuze.
- [Water Temperature Control](water-temperature-control.md): aparte uitleg van stooklijn, PID, COAST/OFF-gedrag en Duo-hysterese.
- [Regelgedrag van OpenQuatt](regelgedrag-van-openquatt.md): systeemstanden, overgangen en flowregeling.
- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md): compile-time en runtime instellingen, plus de belangrijkste meetwaarden.
- [OpenTherm-thermostaten](opentherm-thermostaten.md): aparte naslag voor lokale OT-thermostaatintegratie en compatibiliteit.
- [Ontwikkelen op Mac en WSL](ontwikkelen-op-mac-en-wsl.md): aanbevolen lokale ontwikkelworkflow voor onderhoud en builds.
