# Instellingen en meetwaarden

Deze pagina is bedoeld als praktische naslag. Niet om alles tegelijk te tunen, maar om sneller te zien welke instellingen en meetwaarden er echt toe doen.

## Begin met dit onderscheid

OpenQuatt heeft grofweg twee soorten instellingen:

### Runtime-instellingen

Dit zijn de instellingen die je tijdens normaal gebruik kunt aanpassen via Home Assistant of de webinterface.

Hier begin je bijna altijd mee als je iets wilt afstellen.

### Compile-time instellingen

Dit zijn firmware-instellingen die pas veranderen na opnieuw compileren en flashen.

Hier kom je meestal pas aan als:

- je hardware anders is;
- je een ontwikkelaar bent;
- of een runtime-instelling het probleem duidelijk niet kan oplossen.

Voor gewone gebruikers geldt dus meestal: eerst runtime, bijna nooit compile-time.

Voor flowdiagnose zijn er wel twee compile-time constanten die je soms in discussies of issues terugziet:

- `oq_flow_mismatch_threshold_lph`
- `oq_flow_mismatch_hyst_lph`

Die bepalen wanneer OpenQuatt een flowafwijking serieus genoeg vindt. Voor normale gebruikers zijn dit zelden de eerste knoppen om aan te raken.

## Welke runtime-instellingen zijn het belangrijkst?

### 1. Basisbediening en begrenzing

Deze groep bepaalt hoeveel ruimte OpenQuatt krijgt:

- `OpenQuatt Enabled`
- `Manual Cooling Enable`
- `Silent Mode Override`
- `Day max level`
- `Silent max level`
- `Silent start time`
- `Silent end time`
- `CM Override`

Gebruik deze groep vooral om gedrag te begrenzen of te verklaren, niet om fijn te tunen.

### 2. Verwarmingsstrategie

Deze groep bepaalt hoe OpenQuatt verwarmingsvraag opbouwt.

Belangrijke keuze:

- `Heating Control Mode`

Daarna hangt het ervan af welke strategie je gebruikt.

Voor `Power House` zijn vooral belangrijk:

- `House cold temp`
- `Rated maximum house power`
- `Maximum heating outdoor temperature`
- `Power House temperature reaction`
- `Power House comfort below setpoint`
- `Power House comfort above setpoint`
- `Power House demand rise time`
- `Power House demand fall time`

Voor `Water Temperature Control` zijn vooral belangrijk:

- `Curve Tsupply @ -20/-10/0/5/10/15°C`
- `Curve Fallback Tsupply (No Outside Temp)`
- `Heating Curve PID Kp/Ki/Kd`

Voor beide strategieën blijft belangrijk:

- `Maximum water temperature`

### 3. Duo en looptijdgedrag

Deze groep speelt vooral mee als je twee warmtepompen gebruikt of onrustig compressorgedrag ziet.

Belangrijke instellingen:

- `Minimum runtime`
- `Demand filter ramp up`
- `Dual HP Enable Level`
- `Dual HP Enable Hold`
- `Dual HP Disable Hold`

Raak deze groep pas aan nadat de strategie zelf logisch voelt.

### 4. Flow en pomp

Deze groep bepaalt hoe de circulatiepomp wordt aangestuurd.

Belangrijke instellingen:

- `Flow Setpoint`
- `Flow Control Mode`
- `Manual iPWM`
- `Frost Circulation iPWM`
- `Flow AUTO start iPWM`
- `Flow PI Kp`
- `Flow PI Ki`

Gebruik deze groep voorzichtig. Bij verkeerde bronwaarden of hydraulische problemen maak je hier snel meer ruis dan winst.

### 5. Bronselectie

Deze groep is vaak belangrijker dan gebruikers denken.

Belangrijke keuzes:

- `Room Temperature Source`
- `Room Setpoint Source`

En indirect alles wat bepaalt waar buiten-, kamer- en waterwaarden vandaan komen.

## Welke meetwaarden wil je meestal zien?

### Voor comfort en strategie

Begin bijna altijd met:

- `Room Temperature (Selected)`
- `Room Setpoint (Selected)`
- `Outside Temperature (Selected)`
- `Heating Control Mode`

### Voor aanvoer en begrenzing

Controleer daarna:

- `Water Supply Temp (Selected)`
- `Maximum water temperature`
- `Heating Curve Supply Target` als je stooklijn gebruikt

### Voor flow en systeemgedrag

Kijk bij twijfel ook naar:

- `flow_rate_selected`
- actieve `Control Mode`
- pompstand of flowregeling

### Voor energie en belasting

Alleen als het probleem daar lijkt te zitten:

- opgenomen vermogen;
- power cap;
- gedrag rond stille uren of begrenzing.

## Wanneer zit je waarschijnlijk in de verkeerde laag?

Gebruik deze vuistregels:

- kamercomfort niet goed -> kijk eerst naar strategie en bronkeuze;
- aanvoer volgt doel niet -> kijk eerst naar stooklijn of PID;
- systeem blijft hangen of schakelt vreemd -> kijk eerst naar `Control Mode`, flow en begrenzingen;
- probleem blijft terugkomen ondanks goede runtime-afstelling -> pas dan aan compile-time denken.

## Wat hoef je meestal niet meteen te veranderen?

Voor de meeste gebruikers zijn dit geen eerste knoppen:

- compile-time constanten;
- flow autotune-details;
- lage-level optimizer- of guardrailinstellingen;
- meerdere groepen instellingen tegelijk.

Als je te veel tegelijk wijzigt, wordt het juist moeilijker om te begrijpen wat er verandert.

## Veilige manier van aanpassen

1. Controleer eerst of de gebruikte meetwaarden logisch zijn.
2. Verander één groep tegelijk.
3. Beoordeel het effect over tijd en bij verschillend weer.
4. Pas pas daarna een tweede groep aan.
5. Ga alleen naar compile-time als runtime echt niet genoeg blijkt.

## Verder lezen

- [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md)
- [Power House](power-house.md)
- [Water Temperature Control](water-temperature-control.md)
- [Regelgedrag van OpenQuatt](regelgedrag-van-openquatt.md)
- [Problemen oplossen en afstellen](diagnose-en-afstelling.md)
