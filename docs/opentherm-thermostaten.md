# OpenTherm-thermostaten

Deze pagina beschrijft hoe OpenQuatt momenteel met lokale OpenTherm-thermostaten werkt, welke OT-velden gebruikt worden en welke antwoorden OpenQuatt richting de thermostaat terugstuurt.

De focus ligt op de huidige OpenQuatt-implementatie en op praktische compatibiliteit. OpenQuatt gedraagt zich daarbij niet als volledige cv-ketel-emulatie, maar als een geloofwaardige, beperkt geprofileerde OT-slave voor verwarming.

## Samengevat

- OpenQuatt kan lokaal als OpenTherm-slave richting een thermostaat werken.
- De OT-laag is runtime-optioneel en standaard uitgeschakeld.
- OpenQuatt presenteert zich als modulerend verwarmingssysteem zonder cooling en zonder tweede verwarmingscircuit.
- Waar mogelijk stuurt OpenQuatt echte runtimewaarden terug.
- Waar OpenQuatt geen eerlijke waarde heeft, kiest het bewust voor een compatibiliteitsantwoord of voor `DATA_INVALID`.

## Wat OpenQuatt uit OT gebruikt

De belangrijkste inkomende thermostaatsignalen zijn:

- `ID 0 Status`: algemene enable/status-bits van de master
- `ID 1 Control Setpoint`: gevraagde aanvoertemperatuur
- `ID 16 TrSet`: kamer-setpoint
- `ID 24 Tr`: gemeten kamertemperatuur
- `ID 14 MaxRelModLevelSetting`: master-side low-load / max relatieve modulatie

In Home Assistant zie je daarvan vooral:

- `OT - Thermostat CH Enable`
- `OT - Thermostat Cooling Enable`
- `OT - Control Setpoint`
- `OT - Room Setpoint`
- `OT - Room Temperature`

Niet elke thermostaat gebruikt alle OT-velden even intensief. In de praktijk zagen we bij de Honeywell T6 dat `Control Setpoint` altijd belangrijk is, terwijl `Tr` en `TrSet` wel beschikbaar kunnen zijn maar niet per sessie even prominent hoeven terug te komen.

## ID 0 statusbits

`ID 0` is binnen OpenTherm extra belangrijk, omdat hierin de basis-status en enable-bits van master en slave zitten.

### Master bits

OpenQuatt leest nu deze master-bits uit `ID 0`:

- bit 0 `CH enable`
- bit 1 `DHW enable`
- bit 2 `cooling enable`
- bit 3 `OTC active`
- bit 4 `CH2 enable`

Daarvan gebruikt OpenQuatt functioneel nu vooral:

- `CH enable`
- `cooling enable`

De andere drie worden nu wel intern geparsed en bijgehouden, zodat de OT-statusverwerking beter aansluit op de standaardbitdefinitie en later makkelijker uit te breiden is.

### Slave bits

OpenQuatt stuurt in de slave-status nu deze bits terug:

- bit 0 `fault indication`
- bit 1 `CH mode`
- bit 2 `DHW mode`
- bit 3 `flame status`
- bit 4 `cooling status`
- bit 5 `CH2 mode`
- bit 6 `diagnostic indication`

Concreet betekent dat in OpenQuatt nu:

- bit 0 `fault indication`: uit `oq_ot_fault_active`
- bit 1 `CH mode`: `true` als HP1, HP2 of boiler werkelijk warmte levert
- bit 2 `DHW mode`: altijd `false`
- bit 3 `flame status`: volgt dezelfde actieve warmtelevering
- bit 4 `cooling status`: altijd `false`
- bit 5 `CH2 mode`: altijd `false`
- bit 6 `diagnostic indication`: uit `oq_ot_diagnostic_active`

## Wat OpenQuatt terugmeldt

OpenQuatt vult zijn slave-antwoorden vanuit de actuele runtime en uit een kleine compatibiliteitslaag.

### Echte runtimewaarden

Deze OT-antwoorden komen direct uit OpenQuatt-state:

- `ID 25 Tboiler`: `water_supply_temp_selected`
- `ID 28 Tret`: `hp1_water_in_temp`
- `ID 27 Toutside`: `outside_temp_selected`
- `ID 57 MaxTSet`: `max_water_temp_limit_c`
- `ID 0 slave status`: actuele fault/active/diagnostic-bits

De slave-statusbits worden nu zo ingevuld:

- `fault`: uit geaggregeerde OpenQuatt-faults
- `CH active`: `true` als HP1, HP2 of boiler werkelijk warmte levert
- `flame on`: volgt dezelfde actieve warmtelevering
- `cooling active`: altijd `false`
- `diagnostic`: uit OpenQuatt-diagnostic/waarschuwingstoestand

### Proxies en compatibiliteitswaarden

Sommige OT-velden zijn nuttig voor thermostaatcompatibiliteit, maar hebben in OpenQuatt geen één-op-één bron.

- `ID 17 RelModLevel`: proxy op basis van `oq_demand_filtered`, geschaald van `0..20` naar `0..100%`
- `ID 18 CHPressure`: vaste compatibiliteitswaarde `1.5 bar`
- `ID 26 Tdhw`: vaste compatibiliteitswaarde
- `ID 32 Tdhw2`: vaste compatibiliteitswaarde
- `ID 48 TdhwSetUB/TdhwSetLB`: conservatieve DHW-bounds
- `ID 56 TdhwSet`: vaste compatibiliteitswaarde
- `ID 9 TrOverride`: neutrale waarde `0.0 C`

Deze waarden zijn vooral toegevoegd omdat sommige thermostaten, met name de Honeywell T6, deze velden actief pollen of in hun OT-infoscherm tonen.

### Bewust ongeldig

Voor OT-velden waar OpenQuatt geen betrouwbare of nette compatibiliteitswaarde heeft, blijft `DATA_INVALID` de voorkeur boven nepdata.

Dat geldt nu bijvoorbeeld nog voor:

- `Texhaust`
- een aantal onbekende of niet-geïdentificeerde T6 probe-IDs

## Honeywell T6-mapping

Bij de Honeywell T6 zagen we OT-benamingen die zeer waarschijnlijk met deze standaard OpenTherm Data-IDs overeenkomen:

| T6 benaming | Waarschijnlijke OT Data-ID | Opmerking |
| --- | ---: | --- |
| Status / enable bits | `0` | CH enable en slave-statusbits |
| Control Setpoint | `1` | gevraagde aanvoertemperatuur |
| Low Load Control | `14` | max relatieve modulatie / low-load gedrag |
| Actual Power | `17` | relatieve modulatie / actueel vermogen |
| Water Pressure | `18` | cv-waterdruk |
| Supply Water Temperature | `25` | aanvoer/supply temperatuur |
| Hot Water Temperature | `26` | DHW temperatuur |
| Return Water Temperature | `28` | retourtemperatuur |
| Hot Water Setpoint | `56` | DHW setpoint |
| Max Supply Water Temperature | `57` | max CH water setpoint |

Belangrijke nuance:

- `25`, `27`, `28` en `57` zijn bij OpenQuatt echte runtimewaarden
- `17`, `18`, `26` en `56` zijn nu proxies of compatibiliteitswaarden

## Verdachte T6 probe-IDs

Tijdens tests met de Honeywell T6 zagen we ook OT-IDs die niet direct uit de standaard gebruikersweergave te herleiden waren:

- `70`
- `72`
- `82`

Voor deze IDs gebruikt OpenQuatt nu bewust `DATA_INVALID` in plaats van `UNKNOWN_DATA_ID`. Dat is een zachtere en meestal compatibeler respons zolang de precieze semantiek niet bevestigd is.

## Wat OpenQuatt nu adverteert

OpenQuatt presenteert zich momenteel als:

- modulerend verwarmingssysteem
- geen cooling
- geen tweede verwarmingscircuit
- een smalle OT-capabilityset met nadruk op verwarming

Daarbij meldt OpenQuatt een conservatieve OpenTherm slave-versie en een beperkte set remote boiler parameter flags, zodat de thermostaat geen rijker OT-profiel verwacht dan werkelijk ondersteund wordt.

## Praktische conclusie

De OT-laag in OpenQuatt is in de eerste plaats bedoeld om:

- thermostaatvraag lokaal in OpenQuatt beschikbaar te maken
- relevante verwarmingsinformatie geloofwaardig terug te melden
- compatibel genoeg te blijven met praktische thermostaten zoals de Honeywell T6

Dat betekent ook dat sommige OT-antwoorden bewust pragmatisch zijn. Niet alles is een echte ketelmeting, maar alles is erop gericht om als verwarming-systeem geloofwaardig, stabiel en uitlegbaar te blijven.

## Verder lezen

- [Hoe OpenQuatt werkt](hoe-openquatt-werkt.md)
- [Dashboardoverzicht](dashboardoverzicht.md)
- [Diagnose en afstelling](diagnose-en-afstelling.md)
