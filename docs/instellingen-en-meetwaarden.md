# Instellingen en meetwaarden

Deze pagina is de praktische naslag voor instellingen en belangrijke meetwaarden in OpenQuatt. De insteek is: eerst begrijpen of iets tijdens runtime aanpasbaar is, en pas daarna kijken welke instelling je eventueel wilt veranderen.

## Eerst het belangrijkste onderscheid

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

## Welke compile-time instellingen zijn het belangrijkst?

Niet alles is even vaak relevant. In de praktijk zijn dit de groepen die het meeste gedrag bepalen:

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

### Flow en pomp

- `oq_flow_mismatch_threshold_lph`
- `oq_flow_mismatch_hyst_lph`
- `oq_flow_kp_min`
- `oq_flow_kp_max`
- `oq_flow_ki_min`
- `oq_flow_ki_max`

Belangrijk: `oq_flow_mismatch_threshold_lph` en `oq_flow_mismatch_hyst_lph` zijn compile-time constanten. Deze pas je dus niet even live aan in een dashboard; daarvoor is opnieuw compileren en flashen nodig.

### Ketel en veiligheid

- `oq_boiler_trip_c`
- `oq_boiler_reset_c`

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

- `CM Override`
- `Day max level`
- `Silent max level`
- `Silent start time`
- `Silent end time`
- `CM3 deficit ON threshold`
- `CM3 deficit OFF threshold`
- `Low-load OFF fallback`
- `Low-load ON fallback`
- `Low-load CM2 re-entry block`

In gewone taal: hiermee bepaal je hoeveel ruimte OpenQuatt krijgt, wanneer stille uren gelden en hoe snel het systeem naar ketelhulp of terugschakelen beweegt.

### Verwarmingsstrategie

Belangrijke runtime-instellingen hier zijn:

- `Heating Control Mode`
- `House cold temp`
- `Rated maximum house power`
- `Maximum heating outdoor temperature`
- `Power House Kp (W-K)`
- `Power House deadband`
- `Power House comfort below setpoint`
- `Power House comfort above setpoint`
- `Power House comfort bias base`
- `Power House comfort bias max`
- `Power House comfort bias up`
- `Power House comfort bias down`
- `Power House room error avg tau`
- `Power House ramp up`
- `Power House ramp down`
- `Curve Tsupply @ -20/-10/0/5/10/15°C`
- `Heating Curve Control Profile`
- `Heating Curve PID Kp/Ki/Kd`
- `Curve Fallback Tsupply (No Outside Temp)`

Praktisch:

- `Power House` is meer huis- en kamervraaggericht;
- `Water Temperature Control` is meer stooklijn- en aanvoertemperatuurgericht.

Verander niet meteen meerdere instellingen uit deze groep tegelijk.

### Verdeling bij Duo en looptijdgedrag

Belangrijke instellingen:

- `Minimum runtime`
- `Demand filter ramp up`
- `Dual HP Enable Level`
- `Dual HP Enable Hold`
- `Dual HP Disable Hold`

Deze groep bepaalt vooral:

- hoe snel vraag mag oplopen;
- hoe lang units blijven lopen;
- wanneer een tweede unit bij een Duo-opstelling mag meedoen.

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

Zie autotune als hulpmiddel, niet als magische knop. Controleer altijd eerst of de omstandigheden kloppen en of de gemeten flow zelf betrouwbaar is.

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

Dit is vaak de belangrijkste groep bij onverklaarbaar gedrag. Als de gekozen bron niet klopt, helpt fijnregelen bijna nooit.

### Service en diagnose

Belangrijke hulpmiddelen:

- `Firmware Update Channel`
- `Firmware Update`
- `Check Firmware Updates`
- `Debug Level`
- `Debug Level Modbus`
- `Runtime lead HP`
- `Reset Runtime Counters (HP1+HP2)`
- `Debug Modbus register`
- `Debug Read HP1 register`
- `Debug Read HP2 register`

Gebruik deze groep vooral voor onderhoud en diagnose, niet voor dagelijks bedienen.

## Belangrijkste meetwaarden

### Voor gedrag en comfort

- `Power House – P_house`
- `Power House – P_req`
- `Demand raw`
- `Demand filtered`
- `Heating Curve Supply Target`
- `Power House effective room target`
- `Power House comfort bias`
- `Power House room error avg`

### Voor flow en veiligheid

- `Flow average (local)`
- `Flow average (Selected)`
- `Flow mismatch (HP1 vs HP2)`
- `Flow Mode`
- `Flow Debug State`

### Voor vermogen en prestaties

- `Total Power Input`
- `Total Heat Power`
- `Total COP`
- `HP capacity (W)`
- `HP deficit (W)`

### Voor broncontrole

- `HA - Outside Temperature`
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

Een veelgemaakte fout is een runtimeprobleem proberen op te lossen met compile-time aanpassingen, of andersom.

Vuistregel:

- hardware, pinnen en basisgrenzen: compile-time;
- gedrag, bronkeuze en afstelling: runtime.

## Gerelateerde pagina's

- [Installatie en eerste start](installatie-en-eerste-start.md)
- [Hoe OpenQuatt werkt](hoe-openquatt-werkt.md)
- [Technische uitleg over standen en flow](technische-uitleg-standen-en-flow.md)
- [Problemen oplossen en afstellen](problemen-oplossen-en-afstellen.md)
- [Dashboard uitleg](dashboard-uitleg.md)
