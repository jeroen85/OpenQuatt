# Power House

Deze pagina legt uit hoe `Power House` in OpenQuatt werkt. Het doel is dat je de strategie goed genoeg begrijpt om gedrag te kunnen duiden en gericht te kunnen afstellen, zonder dat je eerst door alle YAML of runtime-debug hoeft.

De uitleg is gebaseerd op de huidige code in:

- `openquatt/oq_strategy_manager.yaml`
- `openquatt/oq_power_house_strategy.yaml`
- `openquatt/oq_thermal_request_control.yaml`
- `openquatt/oq_supervisory_controlmode.yaml`

## Wat is Power House?

`Power House` is de verwarmingsstrategie die vooral denkt in **gevraagde warmte voor de woning** in plaats van in een directe aanvoertemperatuurdoelstelling.

In plaats van te zeggen "ik wil 32 °C aanvoer", zegt `Power House` grofweg:

- hoe koud is het buiten;
- hoe warm of koud is de kamer ten opzichte van de gewenste temperatuur;
- hoeveel warmte heeft het huis dan ongeveer nodig;
- hoe snel mag die gevraagde warmte op- of afbouwen.

Het resultaat daarvan is een gevraagde verwarmingspower in watt:

- `P_house`: de basisvraag van het huis
- `P_req`: de uiteindelijke warmtevraag na kamer- en begrenzingslogica

Daarna vertaalt OpenQuatt die warmtevraag naar compressorlevels voor één of twee warmtepompen.

## Wanneer past Power House goed?

`Power House` past meestal goed als je:

- vooral op comfort en kamertemperatuur wilt sturen;
- de woning als systeem wilt benaderen in plaats van alleen de aanvoer;
- rustige, langere runs wilt;
- bij `Duo` wilt dat OpenQuatt zelf de zuinigste combinatie kiest.

Werk je liever direct met een stooklijn of aanvoertemperatuur, dan past `Water Temperature Control` vaak beter.

## Hoofdlijn: zo loopt de regeling

`Power House` werkt in de praktijk in deze volgorde:

1. bepaal de bronwaarden die echt gebruikt worden;
2. bereken de basis warmtevraag van het huis;
3. corrigeer die vraag met kamerafwijking en comfortlogica;
4. begrens de warmtevraag met opbouw-/afbouwtijd en watertempbegrenzing;
5. vertaal de uitkomst naar compressorvraag;
6. laat thermal request control daar de beste Single- of Duo-verdeling bij zoeken;
7. laat supervisory bewaken of verwarmen in `CM2` logisch actief moet blijven.

Die lagen zijn belangrijk. Vreemd gedrag komt vaak niet uit één losse parameter, maar uit de combinatie van:

- bronwaarden;
- `Power House` zelf;
- de compressorverdeling;
- `CM2`/`CM1`-bewaking.

## Stap 1: welke meetwaarden gebruikt Power House?

`Power House` werkt met de **geselecteerde** waarden. Dat zijn de waarden die OpenQuatt op dat moment echt vertrouwt.

De belangrijkste zijn:

- `Outside Temperature (Selected)`
- `Room Temperature (Selected)`
- `Room Setpoint (Selected)`
- `Water Supply Temp (Selected)`

Als hier een verkeerde bron gekozen is, gaat de hele strategie logisch lijken maar toch verkeerd uitpakken. Daarom is broncontrole altijd stap 1 bij diagnose.

## Stap 2: het huismodel maakt `P_house`

De basis van `Power House` is een eenvoudig huismodel. Dat model kijkt naar:

- `House cold temp`
- `Maximum heating outdoor temperature`
- `Rated maximum house power`
- de actuele buitentemperatuur

De gedachte is:

- bij zachter weer heeft het huis minder warmte nodig;
- bij kouder weer heeft het huis meer warmte nodig;
- bij `House cold temp` zit je ongeveer tegen de volle ontwerpvraag aan.

Daaruit ontstaat `P_house`: de basisvraag van het huis in watt.

Belangrijk om te beseffen: de code rekent hier met de **gekozen buitentemperatuur**, niet met een apart windmodel. In de praktijk kan het huis bij dezelfde gemeten buitentemperatuur toch meer warmte verliezen door:

- wind;
- nat en guur weer;
- zon of juist geen zon;
- open ramen of deuren.

Het gaat hier dus niet om een aparte "gevoelstemperatuur" in de code, maar eerder om **windinvloed op warmteverlies** of **extra afkoeling van de woning door wind**. Het huismodel ziet dat niet direct als aparte grootheid, maar je merkt het wel terug in het gedrag: bij veel wind kan het huis zich "kouder gedragen" dan de kale buitentemperatuur doet vermoeden.

Praktisch:

- `Rated maximum house power` bepaalt de schaal;
- `House cold temp` en `Maximum heating outdoor temperature` bepalen hoe steil het model reageert op buitentemperatuur.

Als `P_house` structureel te hoog of te laag ligt, krijg je vaak blijvende over- of ondershoot, ook als de rest van de regeling netjes werkt.

Dat extra warmteverlies wordt in de huidige regeling vooral indirect opgevangen via:

- een dalende `Room Temperature (Selected)`;
- een grotere afwijking ten opzichte van `Room Setpoint (Selected)`;
- en daardoor meer kamercorrectie bovenop `P_house`.

Daarom is het goed om een langere periode te beoordelen met verschillend weer. Een instelling die bij rustig, droog weer goed voelt, kan bij veel wind toch te slap of juist te agressief blijken.

## Stap 3: kamerlogica maakt van `P_house` een echte warmtevraag

Daarna kijkt `Power House` naar de kamer.

### Comfortband rond het setpoint

`Power House` gebruikt twee comfortmarges direct rond het kamer-setpoint:

- `Power House comfort below setpoint`
- `Power House comfort above setpoint`

Daarmee ontstaat een asymmetrische comfortband:

- hoeveel onder setpoint nog acceptabel is;
- hoeveel boven setpoint nog acceptabel is.

Dat is bewust geen pure PID-benadering. Het systeem mag wat terughoudender zijn rond kleine afwijkingen en sterker reageren als de fout duidelijker wordt.

### Temperatuurreactie

De kamerfout wordt daarna omgerekend naar extra of minder warmtevraag met:

- `Power House temperature reaction`

Praktisch:

- Onder de koude comfortgrens telt `Power House temperature reaction` extra warmtevraag op.
- Boven het kamer-setpoint neemt `Power House temperature reaction` warmtevraag weer terug.
- `Comfort above setpoint` blijft de bovenkant van de gewenste comfortband aangeven.

Een hogere waarde maakt het systeem eerder fel. Een lagere waarde maakt het systeem eerder traag of slap.

Als de kamer langere tijd te koud blijft, houdt Power House automatisch wat
langer extra warmtevraag vast. Daardoor blijft de kamertemperatuur beter
binnen de ingestelde comfortband.

Belangrijk:

- dit is interne logica en geen extra gebruikersinstelling;
- de comfortband blijft dus het hoofdmodel;
- `Power House temperature reaction` blijft bepalen hoe sterk de directe reactie is.

## Stap 4: opbouwtijd en afbouwtijd maken het gedrag rustiger

Als `Power House` een ruwe warmtevraag heeft berekend, wordt die niet direct één-op-één doorgezet. Eerst gaat er nog een reactieprofiel overheen:

- `Power House response profile`
- `Power House demand rise time`
- `Power House demand fall time`

Deze tijden beschrijven ongeveer:

- hoe lang `P_req` nodig mag hebben om van `0` naar `Rated maximum house power` te lopen;
- hoe lang `P_req` nodig mag hebben om weer terug naar `0` te zakken.

Belangrijk:

- dit is **geen** opwarmtijd van het huis;
- dit is de interne reactiesnelheid van de regeling.

Een kortere opbouwtijd betekent:

- sneller opschakelen;
- sneller reageren op echte vraag;
- meer kans op onrust als de rest al scherp staat.

Een kortere afbouwtijd betekent:

- sneller terugnemen bij overshoot;
- minder kans dat het systeem te lang door blijft duwen;
- mogelijk wat minder "comfortbuffer".

## Stap 5: watertempbegrenzing kan `P_req` terugnemen

Ook in `Power House` blijft `Water Supply Temp (Selected)` belangrijk.

Met:

- `Maximum water temperature`

doet OpenQuatt drie dingen:

1. al onder de maximale aanvoer voorzichtig terugnemen;
2. in de laatste paar graden onder `max` steeds sterker afremmen;
3. daarboven via een harde trip op `max + 5°C` uiteindelijk naar een harde stop kunnen gaan.

Daardoor kan `Power House` niet onbeperkt blijven vragen als de aanvoer al te hoog wordt.

## Stap 6: van `P_req` naar compressorvraag

Na alle bovenstaande stappen houdt OpenQuatt een begrensde warmtevraag over:

- `P_req`

Die vraag wordt vertaald naar een genormaliseerde demand-schaal (`0..20`) en daarna doorgegeven aan `oq_thermal_request_control`.

Daar begint de verdeling over de warmtepomp(en).

## Single: hoe kiest OpenQuatt dan?

Bij `Single` is dit relatief eenvoudig:

- OpenQuatt vertaalt de gevraagde warmte naar een compressorlevel;
- de vraag wordt gefilterd en begrensd;
- de bestaande guards tegen te snel stoppen en starten blijven actief.

Daar zit dus nog steeds rust- en beveiligingslogica omheen, maar er is geen keuze tussen één of twee units.

## Duo: de optimizer in Power House

Bij `Duo` wordt het interessanter. Dan moet OpenQuatt niet alleen bepalen **hoeveel** warmte nodig is, maar ook **welke combinatie van twee warmtepompen** dat het beste levert.

De huidige code doet dat niet met een vaste regel als:

- altijd eerst 1 warmtepomp;
- of juist altijd liever 2 op lage levels.

In plaats daarvan kijkt OpenQuatt per kandidaatcombinatie naar:

- hoeveel thermisch vermogen die combinatie levert;
- hoeveel elektrisch vermogen die combinatie vraagt;
- of die combinatie toegestaan is;
- of die combinatie logisch is ten opzichte van de huidige situatie.

### In gewone taal

De Duo-keuze loopt in `Power House` grofweg zo:

1. zoek geldige Single- en Duo-combinaties;
2. bepaal per topology wat de beste kandidaat is;
3. kies normaal de topology met het laagste elektrische verbruik;
4. laat een minder zuinige topology alleen winnen als die de warmtevraag duidelijk beter volgt;
5. wissel niet voor mini-verschillen;
6. rem single-versus-duowissels af als het alternatief maar een klein voordeel heeft.

Dat betekent:

- soms wint `Single`;
- soms wint `Duo`;
- dat hangt af van de perf-map, buitentemperatuur, aanvoer en gevraagde warmte.

### Runtime lead

Als twee single-HP-keuzes verder gelijkwaardig zijn, krijgt de runtime lead warmtepomp voorrang.

Het doel daarvan is:

- looptijd eerlijker verdelen;
- geen onnodige willekeur tussen HP1 en HP2.

### Defrost

Tijdens defrost wordt een warmtepomp niet als "normaal beschikbaar" gezien. OpenQuatt houdt rekening met:

- lager effectief thermisch vermogen van een defrostende unit, maar pas zodra de `4-Way valve` aangeeft dat de echte defrost loopt;
- geen extra start van de tweede warmtepomp alleen voor een defrostdip als het systeem op dat moment nog single draait;
- alleen een extra stapje op de andere unit als beide warmtepompen al actief zijn en de gekozen combinatie anders nog duidelijk tekortkomt;
- terughoudender wisselgedrag tijdens echte defrost, met snellere terugkeer naar normaal gedrag zodra die fase voorbij is.

Dat voorkomt dat de optimizer een defrostende unit te optimistisch inschat zonder onrustige single-naar-duo starts te introduceren.

## Laaglastgedrag en anti-pendelen

Een belangrijk deel van `Power House` zit niet alleen in de warmtevraag, maar ook in de bewaking rond lage load.

Belangrijke signalen:

- `Low-load dynamic thresholds` (standaard verborgen)

Wat daar gebeurt:

- voordat een nieuwe warmtevraag echt mag starten, moet die vraag kort stabiel blijven;
- OpenQuatt schat een dynamische ondergrens in voor zinvol warmtepompbedrijf;
- bij heel lage vraag mag `CM2` niet meteen blijven herstarten;
- er zit hysterese tussen "uit laten" en "weer duidelijk genoeg vraag";
- er zit een re-entry block tussen om `CM1 <-> CM2`-flipperen te beperken.
- na een compressorstart geldt per compressor een instelbare minimale draaitijd, met een ondergrens van `300 s`.

Dit deel is juist belangrijk in zacht weer of bij installaties die op lage load snel te veel warmte leveren.

## Belangrijkste parameters

Niet alles is even belangrijk. Voor de meeste gebruikers zijn dit de relevante groepen.

### 1. Huismodel

- `House cold temp`
- `Maximum heating outdoor temperature`
- `Rated maximum house power`

Gebruik deze om het basisgedrag van het huis te laten kloppen.

### 2. Kamercorrectie en comfort

- `Power House temperature reaction`
- `Power House comfort below setpoint`
- `Power House comfort above setpoint`

Gebruik deze om te bepalen hoe strak of ruim de regeling zich rond setpoint gedraagt, en hoe sterk de kamercorrectie buiten die comfortband ingrijpt.

### 3. Reactiesnelheid

- `Power House response profile`
- `Power House demand rise time`
- `Power House demand fall time`

Gebruik deze om te bepalen hoe snel `P_req` intern op en neer mag bewegen.

### 4. Laaglaststabiliteit

- `Low-load dynamic OFF factor`
- `Low-load dynamic ON factor`
- `Low-load minimum hysteresis`
- `Low-load CM2 re-entry block`

Gebruik deze vooral als het systeem in zacht weer te snel stopt en weer wil starten.

### 5. Watertempbegrenzing

- `Maximum water temperature`

Gebruik deze om te voorkomen dat `Power House` te lang blijft duwen terwijl de aanvoer al te hoog wordt.

## Welke parameters zijn niet voor de meeste gebruikers?

Er zijn ook compile-time of interne marges die wel bestaan, maar meestal niet bedoeld zijn voor normale tuning. Bijvoorbeeld:

- `oq_optimizer_topology_power_margin_w`
- `oq_optimizer_topology_heat_advantage_w`
- `oq_defrost_power_factor`
- `oq_hp_min_off_s`

Die horen meer bij onderliggende beschermings- en optimizerlogica dan bij normale comfortafstelling.

## Handige meetwaarden en diagnostics

Als je `Power House` wilt begrijpen of tunen, zijn deze meetwaarden meestal het nuttigst:

- `Power House – P_house`
- `Power House – P_req`
- `Demand raw`
- `Demand filtered`
- `Water Supply Temp (Selected)`
- `Total Heat Power`
- `Total Power Input`

Bij `Duo` komen daar vaak bij:

- `Runtime lead HP`
- `Duo optimizer reason` (diagnostic, standaard verborgen)
- `HP1 defrost`
- `HP2 defrost`

En voor laaglastgedrag:

- `Low-load dynamic thresholds` (standaard verborgen)

## Veilige volgorde van afstellen

Gebruik bij `Power House` bij voorkeur deze volgorde:

1. controleer of de gekozen bronwaarden kloppen;
2. controleer flow en algemeen systeemgedrag;
3. laat eerst het huismodel ongeveer kloppen;
4. stel daarna comfortmarges en `Power House temperature reaction` bij;
5. kijk pas daarna naar response profile en rise/fall time;
6. kijk pas als laatste naar laaglastgedrag en dieper Duo-gedrag.

Dat voorkomt dat je symptomen oplost in de verkeerde laag.

## Veelvoorkomende misverstanden

### "Power House is gewoon een kamer-PID"

Niet echt. Er zit wel kamerfout in, maar ook:

- een huismodel;
- comfortlogica;
- opbouw-/afbouwtijd;
- watertempbegrenzing;
- laaglastbewaking;
- bij `Duo` een aparte Single/Duo-keuze.

### "Duo moet altijd liever 2 warmtepompen op lage levels kiezen"

Ook niet. Soms is dat efficiënter, soms niet. Daarom gebruikt de huidige code geen vaste voorkeur "altijd 1" of "altijd 2", maar vergelijkt hij geldige kandidaten.

### "Rise time en fall time zijn de opwarmtijd van het huis"

Nee. Dat zijn interne reactiesnelheden van de regeling, niet de fysieke opwarmtijd van de woning.

### "Als `P_req` laag is, hoort de warmtepomp direct uit te gaan"

Niet automatisch. Er kan juist bewust hysterese en wachttijd actief zijn om onrustig starten en stoppen te voorkomen.

## Samenvatting

`Power House` is een warmtevraagstrategie die:

- begint met een huismodel op basis van buitencondities;
- daar kamer- en comfortlogica overheen legt;
- de uitkomst begrenst met respons- en watertemplogica;
- en die warmtevraag daarna laat verdelen over één of twee warmtepompen.

Bij `Duo` kiest de huidige code niet op basis van een simpele voorkeur, maar op basis van:

- geldige combinaties;
- warmtematch;
- elektrisch verbruik;
- en rust in het schakelen.

Dat maakt `Power House` krachtig, maar ook gelaagd. Juist daarom helpt het om eerst het huismodel en de bronwaarden te laten kloppen, en pas daarna aan fijnregeling te beginnen.

## Gerelateerde pagina's

- [Hoe OpenQuatt werkt](hoe-openquatt-werkt.md)
- [Regelgedrag van OpenQuatt](regelgedrag-van-openquatt.md)
- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
- [Diagnose en afstelling](diagnose-en-afstelling.md)
