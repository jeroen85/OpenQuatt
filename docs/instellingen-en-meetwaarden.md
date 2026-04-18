# Instellingen en meetwaarden

Deze pagina is de praktische naslag voor instellingen en belangrijke meetwaarden in OpenQuatt. Begin altijd met de vraag of iets compile-time of runtime wordt bepaald; pas daarna heeft het zin om een instelling te wijzigen.

## Compile-time of runtime

OpenQuatt heeft grofweg twee soorten instellingen:

### 1. Compile-time instellingen

Dit zijn firmware-instellingen die pas veranderen na opnieuw compileren en flashen.

Belangrijke bestanden:

- `openquatt/oq_substitutions_common.yaml`
- `openquatt/profiles/oq_substitutions_waveshare.yaml`
- `openquatt/profiles/oq_substitutions_heatpump_listener.yaml`

Gebruik compile-time instellingen vooral voor:

- hardwarekeuze;
- pinnen en boardconfiguratie;
- vaste grenzen en onderliggende regelconstanten.

### 2. Runtime instellingen

Dit zijn instellingen die je tijdens gebruik via Home Assistant of de ESPHome-interface kunt aanpassen.

Gebruik runtime instellingen vooral voor:

- afstellen;
- diagnose;
- begrenzen;
- bronkeuze.

## Hardwareprofielen

De documentatie gaat bewust uit van twee ondersteunde hardwareprofielen:

- `Waveshare ESP32-S3-Relay-1CH`
- `Heatpump Listener`

Belangrijke compile-time profielvelden zijn:

- `esp_board`
- `esp_flash_size`
- `esp_variant`
- `uart_tx_pin`
- `uart_rx_pin`
- `uart_rts_pin`
- `ds18b20_pin`
- `oq_boiler_relay_pin`

Let op bij `ds18b20_pin`: de DS18B20 wordt tijdens het opstarten van OpenQuatt gedetecteerd. Sluit je de sensor pas later aan, dan is een reboot nodig voordat hij beschikbaar komt.

## Belangrijkste compile-time instellingen

Niet elke instelling is even relevant. In de praktijk bepalen vooral deze groepen het gedrag:

### Vermogen en systeemgedrag

- `oq_power_soft_w`
- `oq_power_peak_w`
- `oq_power_recover_w`
- `oq_cm_min_flow_lph`

### Overgangen tussen modi

- `oq_cm3_promote_s`
- `oq_cm3_demote_s`
- `oq_cm3_min_run_s`
- `oq_cm2_min_run_s`

### Verwarmingsstrategie

- `oq_strategy_demand_max_f`
- `oq_temp_guard_delta_c`

### Compressor guardrails

- `oq_hp_min_off_s`

### Flow en pomp

- `oq_flow_mismatch_threshold_lph`
- `oq_flow_mismatch_hyst_lph`
- `oq_flow_kp_min`
- `oq_flow_kp_max`
- `oq_flow_ki_min`
- `oq_flow_ki_max`

Belangrijk: `oq_flow_mismatch_threshold_lph` en `oq_flow_mismatch_hyst_lph` zijn compile-time constanten. Daarvoor is dus opnieuw compileren en flashen nodig.

### Ketel en hulpcircuit

- `oq_boiler_loop_s`

### Externe bronnen

- `cic_backoff_start_ms`
- `cic_backoff_max_ms`
- `cic_stale_after_ms`
- `cic_feed_error_trip_n`
- `ha_outside_temp_entity_id`
- `ha_room_setpoint_entity_id`
- `ha_room_temp_entity_id`

## Belangrijkste runtime-instellingen

### Systeemstanden en begrenzing

Deze instellingen gebruik je als eerste als je gedrag wilt begrenzen of verklaren:

- `OpenQuatt Enabled`
- `Manual Cooling Enable`
- `Silent Mode Override`
- `CM Override`
- `Day max level`
- `Silent max level`
- `Silent start time`
- `Silent end time`
- `CM3 deficit ON threshold`
- `CM3 deficit OFF threshold`
- `Low-load dynamic OFF factor`
- `Low-load dynamic ON factor`
- `Low-load minimum hysteresis`
- `Low-load CM2 re-entry block`

Praktisch bepaal je hiermee hoeveel ruimte OpenQuatt krijgt, wanneer stille uren gelden en hoe snel het systeem naar ketelhulp of terugschakelen beweegt. De vaste low-load fallbackdrempels zitten intern in substitutions; tijdens runtime tune je vooral de dynamische factoren, hysterese en re-entry block.

De runtime-bediening heeft drie duidelijke onderdelen:

- `OpenQuatt Enabled`: pauzeert of hervat de normale warmte- en koelregeling. Bewaking en vorstbeveiliging blijven actief.
- `Manual Cooling Enable`: telt mee als extra koeltoestemming bovenop CIC en/of HA-invoer.
- `Silent Mode Override`: zet stille modus op `Schedule`, `On` of `Off`.

### Bronselectie

Belangrijke runtime-instellingen in deze groep zijn:

- `Room Temperature Source`
- `Room Setpoint Source`

### Cooling en fallback zonder dauwpunt

Belangrijke runtime-instellingen en signalen in deze groep zijn:

- `Cooling Without Dew Point`
- `Cooling Guard Mode`
- `Cooling Fallback Night Minimum Outdoor Temp`
- `Cooling Fallback Minimum Supply Temp`
- `Cooling Effective Minimum Supply Temp`

Normaal verwacht OpenQuatt bij cooling een geldige dauwpuntbron. Ontbreekt die, dan blijft cooling geblokkeerd.

`Manual Cooling Enable` staat hier los van. Die switch geeft OpenQuatt expliciet extra koeltoestemming, maar vervangt nog steeds geen koelvraag, flowbewaking of dauwpunt-/fallbackbeveiliging.

Met `Cooling Without Dew Point` kun je expliciet een fallback toestaan. Die fallback gebruikt een conservatieve staffel op basis van buitentemperatuur:

- `< 20°C`: cooling uit
- `20–24°C`: minimum water `19°C`
- `24–28°C`: minimum water `20°C`
- `28–32°C`: minimum water `21°C`
- `> 32°C`: minimum water `22°C`

Daarbovenop telt de minimum buitentemperatuur van de afgelopen nacht mee:

- `< 18°C`: `+0°C`
- `18–19°C`: `+1°C`
- `19–20°C`: `+2°C`
- `>= 20°C`: fallback uit

Belangrijk: in deze fallback-route wordt de gewone dauwpuntmarge niet nog eens extra bovenop de staffel gezet. De staffel zelf ís hier de conservatieve marge.

### Verwarmingsstrategie

Belangrijke runtime-instellingen in deze groep zijn:

- `Heating Control Mode`
- `House cold temp`
- `Rated maximum house power`
- `Maximum heating outdoor temperature`
- `Power House temperature reaction`
- `Power House comfort below setpoint`
- `Power House comfort above setpoint`
- `Power House response profile`
- `Power House demand rise time`
- `Power House demand fall time`
- `Maximum water temperature`
- `Curve Tsupply @ -20/-10/0/5/10/15°C`
- `Heating Curve Control Profile`
- `Heating Curve PID Kp/Ki/Kd`
- `Curve Fallback Tsupply (No Outside Temp)`

Samengevat:

- `Power House` is meer huis- en kamervraaggericht;
- `Water Temperature Control` is meer stooklijn- en aanvoertemperatuurgericht.

Voor `Power House` geldt: `Power House response profile` is een snelle voorkeuze die `Power House demand rise time` en `Power House demand fall time` samen zet. De opbouwtijd geeft ongeveer aan hoe lang `P_req` nodig mag hebben om van `0` naar `Rated maximum house power` te lopen; de afbouwtijd doet hetzelfde voor `Rated maximum house power` terug naar `0`. Kleinere tijden reageren sneller. Zodra de tijden niet meer precies bij een preset horen, toont het profiel `Custom`.

Deze tijden schalen mee met `Rated maximum house power` en zijn daardoor beter overdraagbaar tussen installaties dan oude absolute `W/min`-rampen.

De watertempbegrenzing werkt op `water_supply_temp_selected`. In `Water Temperature Control` wordt `Heating Curve Supply Target` begrensd op `Maximum water temperature`. In `Power House` wordt `P_req` progressief teruggenomen, met de sterkste afbouw in de laatste paar graden onder die grens. In `CM3` wordt de boiler vanaf `Maximum water temperature` geblokkeerd. OpenQuatt bewaakt daarboven een harde trip op `max + 5°C`.

Verander niet meerdere instellingen uit deze groep tegelijk.

### Verdeling bij Duo en looptijdgedrag

Belangrijke instellingen:

- `Minimum runtime`
- `Demand filter ramp up`
- `Dual HP Enable Level`
- `Dual HP Enable Hold`
- `Dual HP Disable Hold`

Deze groep bepaalt vooral:

- hoe snel vraag mag oplopen;
- hoe lang een al gestarte compressor minimaal moet blijven lopen;
- wanneer een tweede unit bij een Duo-opstelling mag meedoen.

Belangrijk onderscheid:

- `Dual HP Enable Level`, `Dual HP Enable Hold` en `Dual HP Disable Hold` horen bij de verdeling in `Water Temperature Control`;
- in `Power House` wordt de Duo-keuze juist automatisch bepaald op basis van geldige combinaties, met een efficiency-first single-versus-duokeuze en alleen een warmte-override als het verschil echt duidelijk is.
- `Minimum runtime` is een runtime slider in seconden. De ondergrens is `300 s`, en die ondergrens wordt ook in de regeling zelf afgedwongen zodat een oudere bewaarde waarde zoals `60` geen korte compressor-runs kan blijven veroorzaken.
- `oq_hp_min_off_s` is juist wel compile-time en bepaalt de minimale uit-tijd per compressor voor elke restart, ook in `Power House`.
- `oq_optimizer_topology_power_margin_w` en `oq_optimizer_topology_heat_advantage_w` zijn compile-time marges voor de single-versus-duokeuze in `Power House`.

Je hoeft in `Power House` dus geen aparte single-versus-duo voorkeur af te stellen. De bedoeling is juist dat OpenQuatt zelf eerst naar efficientie kijkt, een minder zuinige topology alleen laat winnen bij duidelijk betere warmtematch, en een recente topologywissel niet laat plaatsvinden voor een klein voordeel. Rond defrost en compressor oil return worden topology- en ownerwissels tijdelijk vastgehouden, zodat korte verstoringen niet als normale plantrespons worden behandeld. Alleen als duo al actief is mag de gezonde unit tijdens echte `4-Way valve`-defrost beperkt extra ondersteunen.

### Flow en pompregeling

Belangrijke instellingen:

- `Flow Setpoint`
- `Flow Control Mode`
- `Manual iPWM`
- `Frost Circulation iPWM`
- `Flow AUTO start iPWM`
- `Flow PI Kp`
- `Flow PI Ki`

Gebruik deze instellingen voorzichtig. Als bronwaarden of hydrauliek niet kloppen, kun je met extra tuning eerder meer verwarring maken dan oplossen.

### Flow autotune

Beschikbare hulpmiddelen:

- `Flow Autotune Enable`
- `Flow Autotune Start`
- `Flow Autotune Abort`
- `Apply Flow Autotune Kp-Ki`
- `Flow Autotune u_step (iPWM)`
- `Flow Autotune max duration (s)`
- `Flow Autotune Kp suggested`
- `Flow Autotune Ki suggested`
- `Flow Autotune status`

Zie autotune als hulpmiddel, niet als automatische oplossing. Controleer eerst of de omstandigheden kloppen en of de gemeten flow zelf betrouwbaar is.

### Bronkeuze en externe data

Belangrijke instellingen en signalen:

- `CIC - Enable polling`
- `CIC - Feed URL`
- `CIC - JSON Feed OK`
- `CIC - Data stale`
- `CIC - Last success age`
- `CIC - Polling interval`
- `Water Supply Source`
- `Flow Source`
- `Outside Temperature Source`
- `Room Temperature Source`
- `Room Setpoint Source`
- `Room Temperature Effective Source`
- `Room Setpoint Effective Source`

Dit is vaak de belangrijkste groep bij onverklaarbaar gedrag. Als de geselecteerde bron niet klopt, helpt fijnregelen vrijwel nooit.

Voor `Outside Temperature Source` is `Auto` de aanbevolen optie. OpenQuatt kiest dan de laagste geldige bron uit de beschikbare buitenmetingen. Daarmee blijft de regeling robuust tegen een bron die tijdelijk te warm uitvalt door zon, stilstand of lokale opwarming.

In de lokale Duo-aggregatie kijkt OpenQuatt sinds `dev` explicieter naar de kwaliteit van de twee HP-metingen:

- een buitenmeting van een HP die actief in `Heating` of `Cooling` draait krijgt in de lokale Duo-aggregatie voorrang boven een idle HP-meting
- als beide HP's actief zijn, gebruikt OpenQuatt lokaal de laagste van de twee actieve metingen
- als alle HP's idle zijn, gebruikt de lokale Duo-aggregatie het gemiddelde van de geldige lokale metingen
- een lokale HP-buitenwaarde telt tijdelijk niet mee als die te lang exact stil blijft staan terwijl diezelfde warmtepomp verder nog wel verse activiteit laat zien

Daarna kiest `Auto` de laagste geldige bron tussen die lokale aggregatie en de HA-buitentemperatuur, als HA beschikbaar is.

Bij een Duo-installatie en `Flow Source = Outdoor unit` is er ook een extra keuze voor de lokale flowbepaling:

- `Flowmeter HP1`
- `Flowmeter HP2`
- `Local aggregate HP1/HP2`

Die laatste gebruikt de bestaande lokale duo-aggregatie. In normale gevallen is dat het gemiddelde van HP1 en HP2, maar bij een duidelijke mismatch gebruikt OpenQuatt bewust een plausibele hogere waarde om onderschatting te voorkomen.
### Service en diagnose

Belangrijke hulpmiddelen:

- `Firmware Update Channel`
- `Firmware Update`
- `Check Firmware Updates`
- `Debug Level`
- `Debug Level Modbus`
- `Runtime lead HP`
- `Reset Runtime Counters (HP1+HP2)`

Gebruik deze groep vooral voor onderhoud en diagnose, niet voor dagelijks gebruik.

## Belangrijkste meetwaarden

### Voor gedrag en comfort

- `Power House – P_house`
- `Power House – P_req`
- `Demand raw`
- `Demand filtered`
- `Heating Curve Supply Target`
- `Water Supply Temp (Selected)`
- `Cooling Supply Target`
- `Cooling Demand (raw)`

### Voor flow en veiligheid

- `Flow average (local)`
- `Flow average (Selected)`
- `Flow mismatch (HP1 vs HP2)`
- `Flow Mode`
- `Cooling Block Reason`
- `Cooling Guard Mode`
- `Cooling Effective Minimum Supply Temp`
- `Cooling Fallback Night Minimum Outdoor Temp`
- `Cooling Fallback Minimum Supply Temp`

### Voor vermogen en prestaties

- `Total Power Input`
- `Total Heat Power`
- `Total COP`
- `HP capacity (W)`
- `HP deficit (W)`

### Voor broncontrole

- `HA - Outside Temperature`
- `HA - Water Supply Temperature`
- `HA - Thermostat Setpoint`
- `HA - Thermostat Room Temperature`

### Voor energie

- `Electrical Energy Daily/Total`
- `HeatPump Thermal Energy Daily/Total`
- `Boiler Thermal Energy Daily/Total`
- `System Thermal Energy Daily/Total`
- `HeatPump COP Daily`

## Veilige manier van aanpassen

Gebruik deze werkwijze:

1. bepaal eerst welk probleem je echt ziet;
2. controleer eerst bronwaarden en flow;
3. verander maar een instelling tegelijk;
4. noteer oude en nieuwe waarde;
5. beoordeel het effect pas na voldoende tijd;
6. draai terug als het slechter wordt.

## Wanneer zit je in de verkeerde laag?

Een veelgemaakte fout is een runtimeprobleem oplossen met compile-time aanpassingen, of andersom.

Vuistregel:

- hardware, pinnen en basisgrenzen: compile-time;
- gedrag, bronkeuze en afstelling: runtime.

## Gerelateerde pagina's

- [Installatie en ingebruikname](installatie-en-ingebruikname.md)
- [Heating Strategy](heating-strategy.md)
- [Power House](power-house.md)
- [Water Temperature Control](water-temperature-control.md)
- [Hoe OpenQuatt werkt](hoe-openquatt-werkt.md)
- [Regelgedrag van OpenQuatt](regelgedrag-van-openquatt.md)
- [Diagnose en afstelling](diagnose-en-afstelling.md)
- [Dashboardoverzicht](dashboardoverzicht.md)
