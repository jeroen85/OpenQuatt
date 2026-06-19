/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{const tc=`
    <svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>
  `,ba={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},si="https://oi.esphome.io/v3/www.js",st=2,Vn=4,oc=6e4,li="Power House",ci="Water Temperature Control (heating curve)",Bo=[{id:"generation",kicker:"Stap 1",title:"Kies je Quatt Hybrid",copy:"Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.",fields:[{title:"Quatt Hybrid-versie",copy:"Kies de versie die bij jouw Quatt hoort."}]},{id:"flow-source",kicker:"Stap 2",title:"Flowmeting configureren",copy:"Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort.",fields:[{title:"Flowbron",copy:"De Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron OpenQuatt moet gebruiken."}]},{id:"thermostat-source",kicker:"Stap 3",title:"Thermostaatgegevens configureren",copy:"Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt.",fields:[{title:"Thermostaatbron",copy:"Q-edition gebruikt OpenTherm. Listener en Waveshare gebruiken CiC of Home Assistant."}]},{id:"boiler",kicker:"Stap 4",title:"CV-ketel of boiler",copy:"Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.",optionalEntity:"boilerCvAssistEnabled",fields:[{title:"CV-ketel / boiler aanwezig",copy:"Kies of er ondersteuning beschikbaar is en vul eventueel het vermogen in."}]},{id:"strategy",kicker:"Stap 5",title:"Kies de verwarmingsstrategie",copy:"Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",fields:[{title:"Verwarmingsstrategie",copy:"Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn."}]},{id:"heating",kicker:"Stap 6",title:"Werk de regeling uit",copy:"Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",fields:[{title:"Instellingen voor jouw regeling",copy:"Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling."}]},{id:"flow",kicker:"Stap 7",title:"Flowregeling en afstelling",copy:"Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning.",fields:[{title:"Flowregeling en tuning",copy:"Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt. Stel hier ook de flow-instellingen in."}]},{id:"water",kicker:"Stap 8",title:"Watertemperatuur beveiligen",copy:"Controleer de normale bovengrens en de tripgrens voor het watercircuit.",fields:[{title:"Watertemperatuur",copy:"Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt."}]},{id:"silent",kicker:"Stap 9",title:"Stille uren en niveaus",copy:"Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",fields:[{title:"Stille uren",copy:"Hier bepaal je wanneer het systeem rustiger moet werken."}]},{id:"confirm",kicker:"Stap 10",title:"Bevestigen en afronden",copy:"Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.",fields:[{title:"Afronden",copy:"Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is."}]}],D={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},trendHistoryFlashAvailable:{domain:"text_sensor",name:"Trendhistorie beschikbaar",optional:!0},trendHistoryFlashOldest:{domain:"text_sensor",name:"Trendhistorie oudste punt",optional:!0},trendHistoryFlashNewest:{domain:"text_sensor",name:"Trendhistorie nieuwste punt",optional:!0},trendHistoryFlashLastFlush:{domain:"text_sensor",name:"Trendhistorie laatste opslag",optional:!0},trendHistoryFlashSize:{domain:"sensor",name:"Trendhistorie grootte",optional:!0},trendHistoryFlashWrites:{domain:"sensor",name:"Trendhistorie schrijfacties",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}},jn=[{id:"overview",label:"Overzicht"},{id:"trends",label:"Trends"},{id:"energy",label:"Energie"},{id:"settings",label:"Instellingen"}],nc=new Set(jn.map(e=>e.id)),we=[{id:"installation",label:"Installatie"},{id:"heating",label:"Verwarmen"},{id:"cooling",label:"Koelen"},{id:"integrations",label:"Bronnen / integraties"},{id:"service",label:"Service"},{id:"system",label:"Systeem"}],Ae=new Set(we.map(e=>e.id)),rc=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],le=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],Ht=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],ro=["dayMax","silentMax","maxWater"],Qe=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],ui=["flowKp","flowKi"],Eo=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],Ao=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],_n=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],ac=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],Kn=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...Ao,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],di=["cicCompatibilityMode"],pi=["otEnabled","otLinkProblem"],mi=["cicPollingEnabled","cicFeedUrl","cicDataStale"],gi=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],hi=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],zn=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"],fi=["supplyTemp","waterSupplyTempEsp","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","coolingEnableSelected","coolingEnableEffectiveSource","coolingEnableHa","coolingEnableHaValid"],Ye=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],Vo=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","roomSetpointHa","roomSetpointHaValid"],bi=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],jo=[...le.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],vi=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],_o=["silentStartTime","silentEndTime","silentMax","dayMax"],ic=1e4;const Sn=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],Ct=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText","uptime","uptimeReadable","timeNowHhmm","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","silentStatus","silentWindow","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","cicDataStale","otLinkProblem"],Rt=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],Un=[...Rt,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],So=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],qe=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],ao=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Mode","hp1Failures","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Mode","hp2Failures","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay"],qo=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Mode","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Mode","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay",...ac],sc=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...Ht,...jo,...Qe,"maxWater",..._o,...Ye,...Vo,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","hp1Power","hp1Heat","hp1Cooling","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp2Power","hp2Heat","hp2Cooling","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut"],lc=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],wi=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...Kn,"manualCoolingEnable","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","webServerLogHistoryEnabled","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites",...di,...pi,...gi,...mi,...hi,...zn,...fi,...Qe,...ui,...Eo,...Ao,..._n,...bi,...ro,...Ht,...jo,...vi,..._o];const Zh=new Set(["installationTopology",...Kn,"trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"]),$t=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource",...Eo]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...le.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],yi=1,io=[...new Set($t.flatMap(e=>e.keys))],cc=new Set(io),uc=5e3,dc=3e4,pc=6e4,mc=1500,gc=3e4,hc=3e4,fc=1e3,Gn=3e4,va=250,bc=750,vc=22,wc=vc/1.7,yc=360/3.2,Zt="2000-01-01 00:00:00",Et=24,Mo=[3,12,24,72,168,336,720],t={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:kc(),devPanelOpen:Tc(),nativeOpen:Cc()==="native",currentStep:"generation",quickStartModalMode:"wizard",settingsGroup:$c(),appView:"",overviewTheme:Sc(),hpVisualMode:Ac(),hpLayoutMode:Pc(),trendWindowHours:Hc(),trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:lm(),debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null,complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:"",updateModalOpen:!1,systemModal:"",authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftBaseTopic:"openquatt",mqttDraftPublishProfile:"standard",mqttDraftEssentialIntervalS:"10",mqttDraftStandardIntervalS:"30",mqttDraftDiagnosticIntervalS:"60",mqttDraftRetainSnapshots:!0,mqttBusy:!1,mqttNotice:"",mqttError:"",updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallMode:"",updateInstallTargetConnection:"",firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",pauseResumeDraft:"",draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:Nc(),motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}};function Sc(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function qc(e){t.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",t.overviewTheme)}catch{}}function kc(){return!1}function gn(e){t.interfacePanelOpen=e===!0}function Cc(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function Si(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function Tc(){try{return window.localStorage.getItem("oq-dev-panel-open")==="true"}catch{return!1}}function $c(){try{const e=window.localStorage.getItem("oq-settings-group");return Ae.has(e)?e:we[0].id}catch{return we[0].id}}function ko(e,o={}){t.settingsGroup=Ae.has(e)?e:we[0].id;try{window.localStorage.setItem("oq-settings-group",t.settingsGroup)}catch{}o.syncUrl!==!1&&t.appView==="settings"&&Ai(o.syncMode||"replace")}function Ec(e){t.devPanelOpen=e===!0;try{window.localStorage.setItem("oq-dev-panel-open",t.devPanelOpen?"true":"false")}catch{}}function Ac(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function Mc(e){t.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",t.hpVisualMode)}catch{}}function Pc(){try{const e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function Lc(e){t.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",t.hpLayoutMode)}catch{}}function Hc(){try{const e=Number(window.localStorage.getItem("oq-trend-window-hours"));return Mo.includes(e)?e:Et}catch{return Et}}function qi(){const e=t.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;const o=String(e.state??e.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function Rc(){return qi()?Mo:Mo.filter(e=>e<=168)}function Qn(e){const o=Rc(),n=Number(e);return o.includes(n)?n:Number.isFinite(n)&&n>o[o.length-1]?o[o.length-1]:o.includes(Et)?Et:o[0]}function Yn(e){t.trendWindowHours=Qn(e);try{window.localStorage.setItem("oq-trend-window-hours",String(t.trendWindowHours))}catch{}}function At(){return"overview"}function ki(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function Nc(){return!!ki()?.matches}function xc(e){if(t.reducedMotion=!!e?.matches,t.reducedMotion){Zn();return}or()}function Oc(){const e=ki();!e||t.motionPreferenceMedia===e||(t.motionPreferenceMedia=e,t.motionPreferenceListener=xc,typeof e.addEventListener=="function"?e.addEventListener("change",t.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(t.motionPreferenceListener),t.reducedMotion=!!e.matches)}function Dc(){return Object.keys(t.entities).length>0}function Zn(){t.motionFrame&&(window.cancelAnimationFrame(t.motionFrame),t.motionFrame=0),t.motionStartedAt=0,er()}function Fc(){return va+Math.floor(Math.random()*(bc-va+1))}function Ic(){return(document.hidden?Gn:uc)+Fc()}function Ci(e=Ic()){t.pollTimer||t.nativeOpen||(t.pollTimer=window.setTimeout(async()=>{t.pollTimer=null,await ne(),Ci()},e))}function Ti(){Ci()}function $i(){t.pollTimer&&(window.clearTimeout(t.pollTimer),t.pollTimer=null)}function Wc(){t.nativeOpen||($i(),Ti(),document.hidden||ne({forceProbe:!0}))}function Jn(e={}){if(Lo(),t.nativeOpen){$i(),Zn(),t.nativeFrontendLoaded||qn();return}if(or(),Ti(),e.refresh!==!1){if(!Dc()){Dd();return}ne(t.appView==="settings"?{forceBulk:!0}:{forceFast:!0})}}function Jt(e){return!nc.has(e)||e==="trends"&&!It()?"":e}function Po(e){return String(e||"").trim().toLowerCase()}function Xn(){try{const e=new URL(window.location.href),o=Po(e.searchParams.get("view")||""),n=Jt(o);if(n)return n;const r=Po(e.hash.replace(/^#/,""));return Jt(r)||""}catch{return""}}function Ei(){try{const e=new URL(window.location.href),o=Po(e.searchParams.get("section")||"");if(Ae.has(o))return o;const n=Po(e.searchParams.get("group")||"");return Ae.has(n)?n:""}catch{return""}}function Ai(e="replace"){try{const o=new URL(window.location.href),n=Jt(t.appView)||At();if(o.searchParams.set("view",n),n==="settings"){const a=Ae.has(t.settingsGroup)?t.settingsGroup:we[0].id;o.searchParams.set("section",a),o.searchParams.delete("group")}else o.searchParams.delete("section"),o.searchParams.delete("group");o.hash&&Jt(o.hash.replace(/^#/,""))&&(o.hash="");const r=e==="push"?"pushState":"replaceState";window.history[r]({oqView:n,oqSettingsSection:n==="settings"?t.settingsGroup:""},"",o.toString())}catch{}}function rt(e,o={}){const n=Jt(e)||At(),r=o.syncMode||"replace",a=t.appView!==n;t.appView=n,(a||o.forceSync)&&Ai(r)}function Bc(){const e=Xn()||At(),o=e==="settings"?Ei()||t.settingsGroup:"";if(!(e===t.appView&&(e!=="settings"||o===t.settingsGroup))){if(t.appView=e,e==="settings"&&o){t.settingsGroup=o;try{window.localStorage.setItem("oq-settings-group",t.settingsGroup)}catch{}}p(),ne(e==="settings"?{forceBulk:!0}:{forceFast:!0})}}function Lo(){t.nativeApp&&(t.nativeApp.classList.add("oq-native-app"),t.nativeApp.classList.toggle("oq-native-app--collapsed",!t.nativeOpen),t.nativeApp.setAttribute("aria-hidden",t.nativeOpen?"false":"true"))}function Vc(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",wa,{once:!0}):wa(),window.addEventListener("pointermove",_d),window.addEventListener("pointerup",Kd),window.addEventListener("popstate",Bc),window.addEventListener("oq-mock-updated",jc),window.addEventListener("oq-dev-controls-changed",_c),document.addEventListener("visibilitychange",Wc)}function jc(){t.mounted&&ne()}function _c(){t.mounted&&p()}function wa(){Kc();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),t.nativeApp=e,t.nativeFrontendLoaded=Array.from(document.scripts).some(o=>o.src===si),t.mounted||(zc(e),t.mounted=!0,Jn()),Lo(),t.nativeOpen||(ne(),Fr({silent:!0}))}function Kc(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function zc(e){const o=document.createElement("section");o.id="oq-helper-root",o.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(o,e),o.addEventListener("click",Vd),o.addEventListener("change",Bd),o.addEventListener("input",Wd),o.addEventListener("focusin",Oa),o.addEventListener("focusout",Oa),o.addEventListener("mouseover",Fd),o.addEventListener("mouseout",Id),o.addEventListener("pointerdown",jd),t.root=o,Oc();const n=Xn()||At(),r=n==="settings"?Ei():"";r&&ko(r,{syncUrl:!1}),rt(n,{syncMode:"replace",forceSync:!0}),er(),p()}function Uc(e){return new Promise((o,n)=>{if(!e){o();return}const r=Array.from(document.scripts).find(s=>s.src===e);if(r){if(r.dataset.loaded==="true"){o();return}r.addEventListener("load",()=>o(),{once:!0}),r.addEventListener("error",s=>n(s),{once:!0});return}const a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",o()},{once:!0}),a.addEventListener("error",s=>n(s),{once:!0}),document.head.appendChild(a)})}async function qn(){if(!(t.nativeFrontendLoaded||t.nativeFrontendLoading)){t.nativeFrontendLoading=!0,t.nativeOpen&&p();try{await Uc(si),t.nativeFrontendLoaded=!0}catch(e){t.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,t.nativeOpen=!1,Si("app"),p(),Jn()}finally{t.nativeFrontendLoading=!1,t.nativeOpen&&p()}}}function ya(){if(!t.root)return;const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;!e||typeof e.bind!="function"||e.bind(t.root)}function er(){t.root&&(t.root.style.removeProperty("--oq-flow-offset"),t.root.style.removeProperty("--oq-flow-offset-reverse"),t.root.style.removeProperty("--oq-fan-rotation"),t.root.getAttribute("style")||t.root.removeAttribute("style"))}function tr(){return t.motionTargets={pipeFlows:[],fanBlades:[]},t.root?(t.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{t.motionTargets.pipeFlows.push(a)})}),t.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(r=>{r.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{t.motionTargets.pipeFlows.push(a)})}),t.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{t.motionTargets.fanBlades.push(a)})}),t.motionTargets.pipeFlows.length+t.motionTargets.fanBlades.length):0}function Gc(){return t.motionTargets.pipeFlows.length>0||t.motionTargets.fanBlades.length>0}function Mi(e=performance.now()){if(!t.root||t.reducedMotion||!Gc()&&tr()===0)return!1;t.motionStartedAt||(t.motionStartedAt=e);const o=(e-t.motionStartedAt)/1e3,n=o*yc%360;return t.motionTargets.pipeFlows.forEach(r=>{const a=r.dataset.oqFlowVariant==="water"?.42:1,s=-(o*wc*a);r.style.strokeDashoffset=`${s.toFixed(3)}px`}),t.motionTargets.fanBlades.forEach(r=>{r.style.transform=`rotate(${n.toFixed(3)}deg)`}),!0}function Pi(e){if(!Mi(e)){t.motionFrame=0,t.motionStartedAt=0;return}t.motionFrame=window.requestAnimationFrame(Pi)}function or(){if(t.motionFrame||t.reducedMotion||tr()===0)return;const e=performance.now();if(t.motionStartedAt=e,!Mi(e)){t.motionStartedAt=0;return}t.motionFrame=window.requestAnimationFrame(Pi)}function so(){const e=window.location.pathname.replace(/\/$/,"");return e===""?"":e}function U(e,o,n=""){const r=n?`/${n}`:"";return`${so()}/${e}/${encodeURIComponent(o)}${r}`}function re(e=E("strategy")){return String(e||"").includes("Water Temperature Control")}function Qc(e=E("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function Ze(){return typeof window<"u"&&window.__OQ_DEV_META&&typeof window.__OQ_DEV_META=="object"?window.__OQ_DEV_META:{}}function Yc(){const e=String(E("hpGeneration")||"").trim();return e||""}function kn(e){const o=String(e||"").trim().toLowerCase();return o==="single"||o.includes("quatt single")||o.includes("openquatt single")?"single":o==="duo"||o.includes("quatt duo")||o.includes("openquatt duo")?"duo":""}function Zc(){if(!Array.isArray(So))return"";if(So.some(o=>y(o)))return"duo";const e=t.optionalMissingEntities||{};return So.every(o=>e[o])?"single":""}function hn(e){const o=kn(e);return(o==="single"||o==="duo")&&typeof t<"u"&&t&&typeof t=="object"&&(t.lastKnownInstallationTopology=o),o}function Jc(){if(typeof t<"u"&&t&&typeof t=="object"){const e=String(t.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function he(){const e=kn(E("installationTopology"));if(e==="single"||e==="duo")return hn(e);const o=kn(Ze().installation);if(o==="single"||o==="duo")return hn(o);const n=Zc();return n?hn(n):Jc()}function lo(){const e=he(),o=Yc();return e==="single"?o?`Quatt Single ${o}`:"Quatt Single":e==="duo"?o?`Quatt Duo ${o}`:"Quatt Duo":o?`Quatt Hybrid ${o}`:"Quatt Hybrid"}function je(){return"OpenQuatt"}function Li(e){const o=String(e||"").trim().toLowerCase();return o==="wifi"||o==="wi-fi"||o.includes("wifi")||o.includes("wi-fi")?"wifi":o==="eth"||o==="ethernet"||o.includes("ethernet")?"eth":""}function lt(e=co()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function Hi(){const e=String(E("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(Ze().hardwareProfile||e).trim().toLowerCase()}function co(){return Li(E("connectionText")||Ze().connection)}function Xc(){const e=co();return e==="wifi"?"eth":e==="eth"?"wifi":""}function Sa(e=co()){const o=he(),n=o==="duo"?"Duo":o==="single"?"Single":"Onbekende opstelling";return Hi()==="heatpump_controller_q"?`Heatpump Controller Q ${n} ${lt(e)}`:`${je()} ${n} ${lt(e)}`}function nr(){const e=Hi(),o=he(),n=co(),r=Xc();return e!=="heatpump_controller_q"||o!=="single"&&o!=="duo"||n!=="wifi"&&n!=="eth"||!r?null:{canSwitch:y("firmwareUpdateTarget")&&y("installFirmwareUpdateTarget"),currentConnection:n,targetConnection:r,currentLabel:lt(n),targetLabel:lt(r),currentBuildLabel:Sa(n),targetBuildLabel:Sa(r)}}function Ri(){const e=A("timeValid"),o=String(E("timeNowHhmm")||"").trim();if(o&&o!=="invalid")return o;if(y("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function Ni(){return y("timeValid")&&!A("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${Ri()}`}function wo(e){if(!Number.isFinite(e)||e<0)return"\u2014";const o=Math.floor(e),n=Math.floor(o/1440),r=Math.floor(o%1440/60),a=o%60;return n>0?`${n}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function eu(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function tu(e){const o=e?.state;if(o!==""&&o!==null&&o!==void 0){const a=Number(o);if(Number.isFinite(a))return a}const n=e?.value,r=Number(n);return Number.isFinite(r)?r:NaN}function rr(){const e=tu(t.entities.uptime);if(Number.isFinite(e)&&e>=0){const r=eu(t.entities.uptime);if(r==="d")return wo(e*1440);if(r==="h")return wo(e*60);if(r==="s")return wo(e/60)}const o=String(t.entities.uptimeReadable?.state??t.entities.uptimeReadable?.value??"").trim();if(o&&o.toLowerCase()!=="unknown")return o;const n=Number(Ze().bootedAt);return!Number.isFinite(n)||n<=0?"\u2014":wo((Date.now()-n)/6e4)}function ar(){const e=String(t.entities.ipAddress?.state??t.entities.ipAddress?.value??"").trim();if(e)return e;const o=String(Ze().ipAddress||"").trim();return o||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function uo(){if(Ne())return"Controleren";const e=Nt();if(e)return e.phaseLabel;if(lr())return"Bijgewerkt";if(Xt())return"Bezig";if(xt())return"Beschikbaar";const o=Oi();if(o!==null&&o<=0)return"Actueel";const n=Ze();return typeof n.updateLabel=="string"&&n.updateLabel.trim()?n.updateLabel.trim():n.updateAvailable===!0?"Beschikbaar":n.updateAvailable===!1||dr()?"Actueel":ce()?"Nog niet gecontroleerd":"\u2014"}function ce(){return t.entities.firmwareUpdate||null}function Ko(){const e=ce();return e?String(e.state??e.value??"").trim().toLowerCase():""}function ou(){const e=t.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function zo(){return ou().toLowerCase()}function xi(){const e=t.entities.firmwareUpdateProgress;if(!e)return Number.NaN;const o=Number(e.value??e.state);return Number.isNaN(o)?Number.NaN:Math.max(0,Math.min(100,o))}function ir(){const e=String(t.updateInstallTargetVersion||"").trim(),o=ge();return!e||!o?!1:po(o,e)>=0}function nu(e=ce()||{}){const o=Mt(e),n=ge(e);return!o||!n?!1:po(n,o)>=0}function sr(){return(ir()||nu())&&!Ne()&&!Ho()&&!xt()}function lr(){return(t.updateInstallCompleted||sr())&&!Ne()&&!Nt()&&!xt()}function cr(){t.updateInstallBusy=!1,t.updateInstallTargetVersion="",t.updateInstallPhaseHint="",t.updateInstallProgressHint=Number.NaN,t.updateInstallMode="",t.updateInstallTargetConnection=""}function at(){t.updateManualUploadFile=null,t.updateManualUploadFileName="",t.updateManualUploadError=""}function ru(){const e=zo(),o=xi();if(e==="starting"||e==="uploading"||e==="rebooting"){t.updateInstallPhaseHint=e,Number.isNaN(o)||(t.updateInstallProgressHint=e==="rebooting"?Math.max(o,100):o);return}if(t.updateInstallBusy){if(ir()){t.updateInstallPhaseHint="rebooting",t.updateInstallProgressHint=100;return}t.controlNotice.includes("opnieuw is opgestart")&&(t.updateInstallPhaseHint="rebooting",t.updateInstallProgressHint=100)}}function Ho(){const e=zo();return e==="starting"||e==="uploading"||e==="rebooting"}function Nt(){ru();const e=zo(),o=e==="starting"||e==="uploading"||e==="rebooting",n=o?e:t.updateInstallPhaseHint,r=xi(),a=Number.isNaN(t.updateInstallProgressHint)?0:Math.round(t.updateInstallProgressHint),s=o&&!Number.isNaN(r)?Math.round(r):a;return!Ho()&&!t.updateInstallBusy?null:n==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(s,100),copy:t.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:n==="uploading"?{phaseLabel:"Uploaden",percent:s,copy:t.updateInstallMode==="connection-switch"?`De ${lt(t.updateInstallTargetConnection)}-build wordt nu naar ${je()} verzonden.`:`Firmware wordt nu naar ${je()} verzonden.`}:{phaseLabel:"Installeren",percent:s,copy:t.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${lt(t.updateInstallTargetConnection)} is gestart.`:`OTA-update is gestart voor ${je()}.`}}function Mt(e=ce()||{}){const o=String(e.latest_version||"").trim();if(o)return o;const n=String(e.value||"").trim(),r=String(e.current_version||"").trim();return n&&n!==r&&/^v/i.test(n)?n:""}function ge(e=ce()||{}){const o=String(t.entities.projectVersionText?.state||t.entities.projectVersionText?.value||"").trim();return o||String(e.current_version||"").trim()}function au(e=ce()||{}){const o=ge(e),n=String(e.current_version||"").trim();return!o||!n||o===n?!1:po(o,n)>0}function ur(e=ce()||{},o=ct()){const n=String(o||"").trim().toLowerCase(),r=String(e.release_url||"").trim().toLowerCase(),a=Mt(e).toLowerCase();if(!n||n==="\u2014")return!0;if(n==="dev"){if(r){if(r.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(n==="main"){if(r){if(r.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function qa(e){const n=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return n?{major:Number(n[1]),minor:Number(n[2]),patch:Number(n[3]),prereleaseTag:n[4]||"",prereleaseNumber:n[5]?Number(n[5]):null}:null}function po(e,o){const n=qa(e),r=qa(o);if(!n||!r)return 0;if(n.major!==r.major)return n.major>r.major?1:-1;if(n.minor!==r.minor)return n.minor>r.minor?1:-1;if(n.patch!==r.patch)return n.patch>r.patch?1:-1;const a=!n.prereleaseTag,s=!r.prereleaseTag;return a!==s?a?1:-1:n.prereleaseTag!==r.prereleaseTag?n.prereleaseTag>r.prereleaseTag?1:-1:n.prereleaseNumber!==r.prereleaseNumber?(n.prereleaseNumber||0)>(r.prereleaseNumber||0)?1:-1:0}function Xt(){if(sr())return!1;const e=Ko();return t.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function Ne(){const e=Ko();return t.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function xt(){const e=Ko();if(!ur())return!1;const o=Oi();return o!==null?o>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:Ze().updateAvailable===!0}function dr(){const e=Ko();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||au()}function pr(){const e=ce()||{},o=ge(e)||"\u2014";let n=ur(e)?Mt(e):"";const r=n?po(n,o):null;return!Ne()&&r!==null&&r<=0&&(n=""),{current:o,latest:n||"\u2014"}}function Oi(){const{current:e,latest:o}=pr();return e==="\u2014"||o==="\u2014"?null:po(o,e)}function Di(e=ct()){const o=String(e||"").trim().toLowerCase();return ba[o]||ba.main}function iu(){const e=String((ce()||{}).release_url||"").trim(),o=Di();return!e||o.includes("/dev-latest")&&!e.includes("/dev-latest")||!o.includes("/dev-latest")&&e.includes("/dev-latest")?o:e}function su(){return je()}function ct(){return String(E("firmwareUpdateChannel")||t.entities.releaseChannelText?.state||t.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function Fi(){return pr().latest!=="\u2014"}function Ii(e){return new Promise(o=>window.setTimeout(o,e))}const lu=1500;function mr(){t.deviceReconnectRecoveryTimer&&(window.clearTimeout(t.deviceReconnectRecoveryTimer),t.deviceReconnectRecoveryTimer=null)}function dt(){return Number(t.deviceReconnectRecoveryStartedAt||0)>0}function cu(){return dt()?Number(t.deviceReconnectRecoveryStartedAt||0):Number(t.deviceReconnectStartedAt||0)}function uu(){return dt()?"Gegevens verversen":"Wachten op gegevens"}function du(){const e=cu(),o=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return dt()?o>0?`${o}s aan het verversen`:"Net weer online":o>0?`${o}s bezig`:"Net gestart"}function ka(){if(!t.deviceReconnectMode||dt())return!1;mr(),t.deviceReconnectRecoveryStartedAt=Date.now(),t.deviceReconnectLastError="",t.entitySyncFailureCount=0;const e=t.deviceReconnectRecoveryStartedAt;return t.deviceReconnectRecoveryTimer=window.setTimeout(()=>{t.deviceReconnectMode&&Number(t.deviceReconnectRecoveryStartedAt||0)===e&&(Wi(),p())},lu),p(),!0}function gr(e="reconnect",o=""){t.deviceReconnectMode||(t.deviceReconnectStartedAt=Date.now()),mr(),t.deviceReconnectMode=e,t.deviceReconnectRecoveryStartedAt=0,t.deviceReconnectLastError=o?String(o):t.deviceReconnectLastError,t.systemModal="",t.updateModalOpen=!1,t.controlError=""}function Wi(){mr(),!(!t.deviceReconnectMode&&!t.entitySyncFailureCount)&&(t.deviceReconnectMode="",t.deviceReconnectStartedAt=0,t.deviceReconnectRecoveryStartedAt=0,t.deviceReconnectLastError="",t.entitySyncFailureCount=0)}function pu(){return dt()?"OpenQuatt is weer online":t.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":t.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function mu(){return dt()?t.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":t.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":t.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function gu(){return t.deviceReconnectMode?`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="reconnect">
        <section class="oq-helper-modal oq-helper-modal--reconnect" role="status" aria-live="polite" aria-labelledby="oq-reconnect-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-reconnect-modal-title">${i(pu())}</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">${i(mu())}</p>
          <div class="oq-helper-reconnect-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>${i(uu())}</strong>
              <span>${i(du())}</span>
            </div>
          </div>
        </section>
      </div>
    `:""}function hr(e=ct()){const o=ce()||{},n=ge(o);t.entities.firmwareUpdate={...o,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:Di(e),current_version:n}}async function fr(){for(let e=0;e<6;e+=1){await Ii(e===0?900:1200),await W(Un,"all");const o=ur(),n=Fi(),r=Ne(),a=uo();if(o&&(n||!r&&a!=="Nog niet gecontroleerd"))return}}async function br(){let e=!1;for(let o=0;o<45;o+=1){await Ii(o===0?700:1e3);try{if(await W(Un,"all"),zo()==="rebooting"&&gr("ota"),p(),t.updateInstallMode==="connection-switch"){const n=Li(t.updateInstallTargetConnection);if(n&&co()===n&&!Ho()&&!Xt())return!0}else if(ir()||sr()||dr()&&!Ho()&&!Xt())return!0}catch{e||(t.controlNotice="Wachten tot het device opnieuw is opgestart...",p(),e=!0)}}return!1}function hu(){const e=ct(),o=Nt();if(o)return o.copy;if(lr()){const n=t.updateInstallCompletedVersion||ge()||ct();return`${je()} draait nu op ${n}.`}return Xt()?`OTA-update wordt voorbereid voor ${je()}. Het device kan kort herstarten.`:Ne()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:xt()?"Er staat een nieuwere firmware klaar.":dr()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function fu(){const e=nr();if(!e||!t.firmwareConnectionSwitchOpen)return"";const n=!!(Nt()||t.updateInstallBusy||Ne()),r=!!t.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",s=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",d=s?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
        <strong>Verbinding wisselen</strong>
        <span>Installeer dezelfde ${i(ct())}-build voor de andere netwerkverbinding.</span>
        <div class="oq-helper-modal-grid">
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Huidige build</span>
            <strong class="oq-helper-modal-value">${i(e.currentBuildLabel)}</strong>
          </div>
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Alternatief</span>
            <strong class="oq-helper-modal-value">${i(e.targetBuildLabel)}</strong>
          </div>
        </div>
        <p class="oq-helper-modal-note">${i(l)}</p>
        ${d}
        <label class="oq-helper-modal-check">
          <input type="checkbox" data-oq-firmware-connection-confirm="true" ${r?"checked":""} ${n||s?"disabled":""}>
          <span>${i(a?"De netwerkkabel is aangesloten.":"Ik begrijp dat Ethernet na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-helper-modal-actions">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-connection-switch"
            ${n||s||!r?"disabled":""}
          >
            ${i(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function bu(){if(!t.updateManualUploadOpen)return"";const o=!!(Nt()||t.updateInstallBusy||Ne()),n=String(t.updateManualUploadFileName||t.updateManualUploadFile?.name||"").trim();return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
        <strong>Handmatige upload</strong>
        <span>Gebruik dit alleen als je een geschikte OTA-firmware hebt gedownload, bij voorkeur een <code>*.firmware.ota.bin</code> uit de release.</span>
        <div class="oq-helper-modal-row">
          <span class="oq-helper-modal-label">Firmwarebestand</span>
          <input
            class="oq-settings-backup-input oq-settings-backup-import-input"
            type="file"
            accept=".bin,application/octet-stream"
            data-oq-firmware-upload-file-input="true"
            ${o?"disabled":""}
          >
          <span class="oq-helper-modal-subvalue">${i(n?`Gekozen bestand: ${n}`:"Nog geen bestand gekozen")}</span>
        </div>
        <p class="oq-helper-modal-note">De upload gebruikt dezelfde OTA-flow als de normale update. Laat deze pagina open tot het device weer terug is.</p>
        ${t.updateManualUploadError?`<p class="oq-helper-modal-note oq-helper-modal-note--error">${i(t.updateManualUploadError)}</p>`:""}
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button" type="button" data-oq-action="upload-firmware-file" ${o||!t.updateManualUploadFile?"disabled":""}>Upload en installeer</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-upload" ${o?"disabled":""}>Verbergen</button>
        </div>
      </div>
    `}function Cn(){return[t.interfacePanelOpen?"open":"closed",t.nativeOpen?"native":"app",t.appView,t.complete?"complete":"incomplete",t.overviewTheme,t.hpVisualMode,oe("installationTopology"),oe("hardwareProfileText"),oe("connectionText"),oe("hpGeneration"),oe("projectVersionText"),oe("releaseChannelText"),vr()].join("|")}function vr(){const e=Math.max(Number(t.lastEntityResponseAt||0),Number(t.lastEntitySyncAt||0)),o=Number(t.deviceReconnectStartedAt||0);return t.entitySyncFailureCount>0&&!t.deviceReconnectMode?"Bezig":e>0&&(!t.deviceReconnectMode||e>=o)?"Verbonden":t.deviceReconnectMode?dt()?"Verbonden":t.deviceReconnectMode==="reconnect"?"Offline":"Bezig":y("status")&&!A("status")?"Offline":"Bezig"}function Bi(){return String(E("projectVersionText")||"").trim()||"\u2014"}function vu(){const e=Bi();return e&&e!=="\u2014"?e:uo()}function Vi(){const e=t.entities.espInternalTemp;if(!e)return"\u2014";const o=P("espInternalTemp");return Number.isNaN(o)?V("espInternalTemp"):F(o,1,e.uom||" \xB0C")}function wr(){const e=t.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function wu(){return"Login"}function yu(){const e=t.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function yr(){const e=t.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function Su(){return"ESPHome API encryption"}function qu(){const e=t.apiSecurityStatus;return e?e.pending_restart?"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.key?"De sleutel blijft opgeslagen, ook wanneer encryptie uit staat. Je kunt hem hier meteen kopi\xEBren of opnieuw inschakelen.":"Er is nog geen API-sleutel opgeslagen. Deze wijziging wordt actief na herstart.":"We halen de huidige API-beveiliging op."}function ku(){const e=t.apiSecurityStatus;return e?e.enabled?"Uitschakelen":"Inschakelen":"Laden..."}function Cu(){const e=t.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function me(e,o,n="",r=!1){return`
      <div class="oq-helper-modal-row${r?" oq-helper-modal-row--loading":""}">
        <span class="oq-helper-modal-label">${i(e)}</span>
        <strong class="oq-helper-modal-value">${r?`
          <span class="oq-helper-modal-loading">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <span>${i(o)}</span>
          </span>
        `:i(o)}</strong>
      ${n?`<span class="oq-helper-modal-subvalue">${i(n)}</span>`:""}
    </div>
    `}function Tu(){const e=t.apiSecurityStatus||{},o=e.enabled===!0,n=!!e.key,r=!!e.pending_restart,a=t.apiSecurityNotice,s=t.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${i(t.apiSecurityError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${i(Su())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${i(qu())}</p>
          ${a?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${i(a)}</span></div>`:""}
          ${s}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${i(Br())}</strong>
                <p class="oq-settings-quickstart-status-copy">${i(Vr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${o?"disable-api-security":"enable-api-security"}"
                ${t.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${i(ku())}
              </button>
            </div>
            <div class="oq-settings-api-security-key">
              <div class="oq-settings-field-head">
                <h3>API-sleutel</h3>
              </div>
              <p class="oq-settings-action-note">${i(r?n?"Deze sleutel is opgeslagen. Kopieer hem nu en kies daarna Opslaan en herstarten.":"Inschakelen maakt direct een nieuwe sleutel aan. Deze wijziging wordt actief na herstart.":e.transport_active?"Gebruik deze sleutel in Home Assistant voor de ESPHome-integratie.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.")}</p>
              ${n?`<div class="oq-settings-api-security-key-row"><div class="oq-settings-api-security-key-value">${i(e.key)}</div></div>`:""}
              ${n?`
                  <div class="oq-settings-api-security-actions">
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="rotate-api-security"
                      ${t.apiSecurityBusy||!e.csrf_token?"disabled":""}
                    >
                      ${i(Cu())}
                    </button>
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="copy-api-security-key"
                      ${t.apiSecurityBusy?"disabled":""}
                    >
                      Kopieer sleutel
                    </button>
                  </div>
                `:""}
            </div>
          </div>
          <div class="oq-helper-modal-actions">
            ${r?`
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="restart-api-security"
                ${t.apiSecurityBusy?"disabled":""}
              >
                Opslaan en herstarten
              </button>
            `:""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.apiSecurityBusy?"disabled":""}>Gereed</button>
          </div>
        </section>
      </div>
    `}function $u(){const e=t.mqttStatus||{},o=!t.mqttStatus,n=t.mqttNotice,r=t.mqttBusy,a=r||o,s=String(t.mqttDraftBroker||""),l=String(t.mqttDraftBaseTopic||""),d=String(t.mqttDraftUsername||""),u=String(t.mqttDraftPassword||""),c=String(t.mqttDraftEssentialIntervalS||"10"),m=String(t.mqttDraftStandardIntervalS||"30"),f=String(t.mqttDraftDiagnosticIntervalS||"60");return`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--top${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-mqtt-modal${o?" oq-mqtt-modal--loading":""}" role="dialog" aria-modal="true" aria-labelledby="oq-mqtt-modal-title">
          <div class="oq-helper-modal-head">
            <div class="oq-mqtt-modal-head-copy">
              <div class="oq-mqtt-modal-head-meta">
                <p class="oq-helper-modal-kicker">Integratie</p>
                <span class="oq-settings-section-badge oq-settings-section-badge--experimental">Experimenteel</span>
              </div>
              <h2 class="oq-helper-modal-title" id="oq-mqtt-modal-title">MQTT-configuratie</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit MQTT-popup" ${r?"disabled":""}>\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">MQTT is een experimentele, compacte publish-only telemetry-export. Gebruik voor Home Assistant de native ESPHome API.</p>
          ${n?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${i(n)}</span></div>`:""}
          ${t.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${i(t.mqttError)}</div>`:""}
          <div class="oq-helper-modal-grid oq-mqtt-status-grid">
            ${o?`
                ${me("Status","Laden...","MQTT-configuratie wordt opgehaald.",!0)}
                ${me("Broker","Laden...","Even wachten op de actuele brokerinstellingen.",!0)}
                ${me("Base topic","Laden...","Even wachten op de actuele topicinstelling.",!0)}
                ${me("Publish-profiel","Laden...","Even wachten op het actieve publish-profiel.",!0)}
                ${me("Gebruiker","Laden...","Even wachten op de opgeslagen login.",!0)}
                ${me("Retain snapshots","Laden...","Even wachten op de snapshot-instelling.",!0)}
              `:`
                ${me("Status",$r(),Er())}
                ${me("Broker",String(e.broker||"").trim()||"Geen broker",e.connected?"MQTT publiceert en ontvangt via deze broker.":"Nog geen actieve verbinding.")}
                ${me("Base topic",String(e.base_topic||"").trim()||"openquatt","Alle compacte telemetry-topics hangen hieronder.")}
                ${me("Publish-profiel",is(e.publish_profile),`Essential: ${Number(e.essential_interval_s||10)}s, Standard: ${Number(e.standard_interval_s||30)}s, Diagnostic: ${Number(e.diagnostic_interval_s||60)}s`)}
                ${me("Gebruiker",String(e.username||"").trim()||"Anoniem",e.password_set?"Er is een wachtwoord opgeslagen.":"Er is nog geen wachtwoord opgeslagen.")}
                ${me("Retain snapshots",e.retain_snapshots!==!1?"Aan":"Uit",e.retain_snapshots!==!1?"Nieuwe subscribers zien meteen de laatste snapshot.":"Alleen live berichten worden doorgestuurd.")}
              `}
          </div>
          <div class="oq-mqtt-form${o?" oq-mqtt-form--loading":""}">
            <div class="oq-mqtt-section">
              <p class="oq-mqtt-section-title">Verbinding</p>
              <div class="oq-helper-modal-form-grid oq-mqtt-form-grid">
                <label class="oq-helper-modal-channel oq-helper-modal-channel--toggle oq-helper-modal-channel--span-2 oq-mqtt-setting-card oq-mqtt-setting-card--toggle">
                  <span class="oq-helper-modal-toggle-copy">
                    <span class="oq-helper-modal-label">MQTT inschakelen</span>
                    <span class="oq-helper-modal-subvalue">Als dit aan staat, probeert OpenQuatt direct met de broker te verbinden.</span>
                  </span>
                  <input type="checkbox" data-oq-mqtt-field="enabled" ${t.mqttDraftEnabled?"checked":""} ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Broker</span>
                  <input class="oq-helper-input" type="text" inputmode="url" autocomplete="off" spellcheck="false" data-oq-mqtt-field="broker" value="${i(s)}" placeholder="mqtt.example.local" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Poort</span>
                  <input class="oq-helper-input" type="number" min="1" max="65535" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="port" value="${i(String(t.mqttDraftPort||"1883"))}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Gebruiker</span>
                  <input class="oq-helper-input" type="text" autocomplete="off" spellcheck="false" data-oq-mqtt-field="username" value="${i(d)}" placeholder="optioneel" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Wachtwoord</span>
                  <input class="oq-helper-input" type="password" autocomplete="new-password" data-oq-mqtt-field="password" value="${i(u)}" placeholder="${e.password_set?"Leeg laten om te behouden":"optioneel"}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-helper-modal-channel--span-2 oq-mqtt-field">
                  <span class="oq-helper-modal-label">Base topic</span>
                  <input class="oq-helper-input" type="text" autocomplete="off" spellcheck="false" data-oq-mqtt-field="baseTopic" value="${i(l)}" placeholder="openquatt" ${a?"disabled":""}>
                </label>
              </div>
            </div>
            <div class="oq-mqtt-section">
              <p class="oq-mqtt-section-title">Publicatie</p>
              <div class="oq-helper-modal-form-grid oq-mqtt-form-grid">
                <label class="oq-helper-modal-channel oq-mqtt-setting-card">
                  <span class="oq-helper-modal-toggle-copy">
                    <span class="oq-helper-modal-label">Publish-profiel</span>
                    <span class="oq-helper-modal-subvalue">Kies hoeveel telemetry OpenQuatt periodiek publiceert.</span>
                  </span>
                  <select class="oq-helper-select" data-oq-mqtt-field="publishProfile" ${a?"disabled":""}>
                    <option value="off" ${String(t.mqttDraftPublishProfile||"")==="off"?"selected":""}>Uit</option>
                    <option value="essential" ${String(t.mqttDraftPublishProfile||"")==="essential"?"selected":""}>Essential</option>
                    <option value="standard" ${String(t.mqttDraftPublishProfile||"")==="standard"?"selected":""}>Standard</option>
                    <option value="diagnostic" ${String(t.mqttDraftPublishProfile||"")==="diagnostic"?"selected":""}>Diagnostic</option>
                  </select>
                </label>
                <label class="oq-helper-modal-channel oq-helper-modal-channel--toggle oq-mqtt-setting-card oq-mqtt-setting-card--toggle">
                  <span class="oq-helper-modal-toggle-copy">
                    <span class="oq-helper-modal-label">Retain snapshots</span>
                    <span class="oq-helper-modal-subvalue">Bewaar de laatste schema-, state- en heat_pumps-snapshot op de broker.</span>
                  </span>
                  <input type="checkbox" data-oq-mqtt-field="retainSnapshots" ${t.mqttDraftRetainSnapshots?"checked":""} ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Essential interval</span>
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="essentialIntervalS" value="${i(c)}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Standard interval</span>
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="standardIntervalS" value="${i(m)}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Diagnostic interval</span>
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="diagnosticIntervalS" value="${i(f)}" ${a?"disabled":""}>
                </label>
              </div>
            </div>
          </div>
          <p class="oq-helper-modal-note">Laat het wachtwoord leeg als je alleen broker, topic of gebruikersnaam wijzigt. De opgeslagen waarde blijft dan behouden.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${r?"disabled":""}>Gereed</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-mqtt-config" ${a?"disabled":""}>Toepassen</button>
          </div>
        </section>
      </div>
    `}function Eu(){const e=[["Netwerkstatus",vr()],["IP-adres",ar()]],o=String(E("wifiSsid")||"").trim();o&&e.push(["WiFi SSID",o]);const n=t.entities.wifiSignal;if(n){const r=P("wifiSignal");Number.isNaN(r)||e.push(["WiFi signaal",F(r,0,n.uom||" dBm")])}return e}function ji(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="login"?"open-login-modal":""}function _i(){return[["installation","Installatie",lo()],["uptime","Uptime",rr()],["connectivity","Connectiviteit",vr()],["time","Tijd",Ri()],["version","Versie",vu(),!!ce()]]}function Ki(){return xt()}function zi(e){return e==="version"&&Ki()}function Qt(){return`
      <div class="oq-helper-status-grid">
        ${_i().map(([o,n,r,a])=>{const s=ji(o),l=!!(a||s),d=zi(o);return`
          <${l?"button":"div"}
            class="oq-helper-status-item${l?" oq-helper-status-item--button":""}${d?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${i(o)}"
            ${l?`type="button" data-oq-action="${i(s)}"`:""}
          >
            <span class="oq-helper-status-label">${i(n)}</span>
            <strong class="oq-helper-status-value">${d?`<span class="oq-helper-status-value-text">${i(r)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:i(r)}</strong>
          </${l?"button":"div"}>
        `}).join("")}
      </div>
    `}function Ca(){if(!t.root)return!1;const e=t.root.querySelector(".oq-helper-status-grid");if(!e)return!!t.root.querySelector(".oq-helper-hub");const o=_i();if(e.querySelectorAll("[data-oq-header-status]").length!==o.length)return e.outerHTML=Qt(),!0;for(const[r,a,s,l]of o){const d=e.querySelector(`[data-oq-header-status="${r}"]`);if(!d)return e.outerHTML=Qt(),!0;const u=ji(r),c=!!(l||u);if(d.tagName.toLowerCase()!==(c?"button":"div"))return e.outerHTML=Qt(),!0;const m=d.querySelector(".oq-helper-status-label"),f=d.querySelector(".oq-helper-status-value");if(!m||!f)return e.outerHTML=Qt(),!0;m.textContent!==a&&(m.textContent=a);const g=zi(r),b=g?`<span class="oq-helper-status-value-text">${i(s)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:i(s);f.innerHTML!==b&&(f.innerHTML=b),c?d.setAttribute("data-oq-action",u):d.removeAttribute("data-oq-action"),d.classList.toggle("oq-helper-status-item--button",c),d.classList.toggle("oq-helper-status-item--attention",g)}return!0}function Au(){const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;return!e||typeof e.render!="function"?"":e.render()}function Ta(){const e=Au();return e?t.devPanelOpen?`
      <aside class="oq-helper-devdock" aria-label="Preview en test">
        <div class="oq-helper-devdock-head">
          <div>
            <p class="oq-helper-devdock-kicker">Preview en test</p>
            <h2 class="oq-helper-devdock-title">Mockbediening</h2>
          </div>
          <button
            class="oq-helper-devdock-toggle oq-helper-devdock-toggle--close"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="true"
            aria-label="Sluit previewpaneel"
          >\xD7</button>
        </div>
        ${e}
      </aside>
    `:`
        <aside class="oq-helper-devdock oq-helper-devdock--collapsed" aria-label="Preview en test">
          <button
            class="oq-helper-devdock-toggle"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="false"
            aria-label="Open previewpaneel"
          >Preview</button>
        </aside>
      `:""}function Mu(){const e=t.nativeOpen?"native":"app",o=Ki(),n=Rs();return t.interfacePanelOpen?`
      <aside class="oq-helper-hub" aria-label="Weergave en systeem">
        <div class="oq-helper-hub-head">
          <h2 class="oq-helper-hub-title">Weergave en systeem</h2>
          <div class="oq-helper-hub-head-actions">
            ${n}
            <button
              class="oq-helper-hub-toggle oq-helper-hub-toggle--close"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="true"
              aria-label="Sluit interfacepaneel"
              title="Sluit interfacepaneel"
            >\xD7</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Weergave</p>
          <div class="oq-helper-hub-switches">
            <button class="oq-helper-hub-chip${e==="app"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
            <button class="oq-helper-hub-chip${e==="native"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Uiterlijk en overzicht</p>
          <div class="oq-helper-hub-actions">
            <button class="oq-helper-button oq-helper-button--ghost oq-helper-hub-action" type="button" data-oq-action="toggle-overview-theme">
              ${t.overviewTheme==="light"?"Donkere modus":"Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${Qt()}
          <div class="oq-helper-hub-actions oq-helper-hub-actions--single">
            <button class="oq-helper-hub-action oq-helper-hub-action--warning" type="button" data-oq-action="open-restart-confirm">
              Herstart OpenQuatt
            </button>
          </div>
        </div>
      </aside>
    `:`
        <aside class="oq-helper-hub oq-helper-hub--collapsed" aria-label="Weergave en systeem">
          <div class="oq-helper-hub-head-actions">
            ${n}
            <button
              class="oq-helper-hub-toggle${o?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >\u2699${o?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function Pu(){if(!t.root)return;const e=t.root.querySelector(".oq-helper-hub .oq-helper-hub-head-actions");if(!e)return;const o=e.querySelector(".oq-debug-recording-header-status"),n=Rs();if(!n){o?.remove();return}if(o){o.outerHTML=n;return}e.insertAdjacentHTML("afterbegin",n)}function Lu(){const e=t.nativeOpen?"native":"app",o=t.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",n=t.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${i(t.controlError)}</p>`:"";return`
      <div class="oq-helper-shell oq-native-surface-shell">
        <div class="oq-helper-card oq-native-surface-card">
          <div class="oq-native-surface-head">
            <div class="oq-native-surface-copy">
              <p class="oq-helper-kicker">Weergave</p>
              <h1>ESPHome fallback actief</h1>
              <p>${i(o)}</p>
            </div>
            <div class="oq-native-surface-controls">
              <div class="oq-helper-hub-switches">
                <button class="oq-helper-hub-chip${e==="app"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
                <button class="oq-helper-hub-chip${e==="native"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
              </div>
            </div>
          </div>
          <p class="oq-native-surface-note">Schakel terug naar OpenQuatt-app om tuning, live overzicht en instellingen weer te activeren.</p>
          ${n}
        </div>
      </div>
    `}function Hu(){const e=t.authStatus||{},o=e.enabled===!0,n=e.setup_window_active===!0,r=o||n,a=o?String(e.username||"").trim():"",s=t.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${i(t.authNotice)}</span></div>`:"",l=t.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${i(t.authError)}</div>`:"",u=r?`
        ${r?`<p class="oq-helper-modal-intro">${o?"Pas hier je login aan.":"Vul hier je nieuwe login in."}</p>`:""}
        <div class="oq-helper-modal-auth-stack">
          ${o?`
              <label class="oq-helper-modal-auth-field">
                <span>Huidig wachtwoord</span>
                <input
                  class="oq-helper-input"
                  type="password"
                  autocomplete="current-password"
                  data-oq-auth-field="currentPassword"
                  value="${i(t.authDraftCurrentPassword)}"
                  ${t.authBusy?"disabled":""}
                >
              </label>
            `:""}
          <label class="oq-helper-modal-auth-field">
            <span>Nieuwe gebruikersnaam</span>
            <input
              class="oq-helper-input"
              type="text"
              autocomplete="username"
              maxlength="32"
              data-oq-auth-field="username"
              value="${i(t.authDraftUsername)}"
              ${t.authBusy?"disabled":""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="newPassword"
              value="${i(t.authDraftNewPassword)}"
              ${t.authBusy?"disabled":""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Herhaal nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="confirmPassword"
              value="${i(t.authDraftConfirmPassword)}"
              ${t.authBusy?"disabled":""}
            >
          </label>
        </div>
      `:`
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-login-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${i(wu())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${i(yu())}</p>
          ${s}
          ${l}
          <div class="oq-helper-modal-grid">
            ${me("Beveiligingsstatus",wr(),yr())}
            ${me("Gebruiker",o?a||"Geen naam":"Geen login",o?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${u}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.authBusy?"disabled":""}>Gereed</button>
            ${o?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${t.authBusy?"disabled":""}>Uitzetten</button>`:""}
            ${r?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${t.authBusy?"disabled":""}>${o?"Opslaan":"Login opslaan"}</button>`:""}
          </div>
        </section>
      </div>
    `}function Ru(){if(!t.updateModalOpen)return"";const e=ce(),o=t.entities.firmwareUpdateChannel||null,{current:n,latest:r}=pr(),a=Ne(),s=Xt(),l=xt(),d=hu(),u=Nt(),c=lr(),m=iu(),f=c?"Firmware-update afgerond":u||s?"Firmware-update bezig":a?"Controleren op firmware-update":su(),g=o?Array.isArray(o.option)?o.option:Array.isArray(o.options)?o.options:[]:[],b=nr(),k=!!(b&&!c);return`
      <div class="oq-helper-modal-backdrop${a||s||u?" is-busy":""}${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${i(f)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${i(d)}</p>
          ${c?`
            <div class="oq-helper-modal-success" aria-live="polite">
              <strong>Bijgewerkt</strong>
              <span>De nieuwe firmware draait nu op het device.</span>
            </div>
          `:""}
          ${u?`
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${i(u.phaseLabel)}</strong>
                <span>${i(`${u.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,u.percent))}%"></span>
              </div>
            </div>
          `:""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${i(uo())}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige versie</span>
              <strong class="oq-helper-modal-value">${i(n)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Beschikbare versie</span>
              <strong class="oq-helper-modal-value">${i(r)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Kanaal</span>
              <strong class="oq-helper-modal-value">${i(ct())}</strong>
            </div>
          </div>
          ${g.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${g.map(h=>`
                  <option value="${i(h)}" ${String(E("firmwareUpdateChannel")||"")===h?"selected":""}>${i(h)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||s||u?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${c?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||s||a||u||!e?"disabled":""}>
              ${s?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-upload" ${a||s||u?"disabled":""}>
              ${t.updateManualUploadOpen?"Handmatige upload verbergen":"Handmatige upload"}
            </button>
            ${k?`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-connection-switch" ${a||s||u?"disabled":""}>
                ${t.firmwareConnectionSwitchOpen?"Verbinding wisselen verbergen":`Verbinding wisselen naar ${i(b.targetLabel)}`}
              </button>
            `:""}
            ${m?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${i(m)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
          </div>
          ${fu()}
          ${bu()}
        </section>
      </div>
    `}function Nu(){if(t.systemModal==="login")return Hu();if(t.systemModal==="api-security")return Tu();if(t.systemModal==="mqtt")return $u();if(t.systemModal==="connectivity"){const e=Eu();return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-system-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-system-modal-title">Connectiviteit</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit systeem-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">Status en details van de actieve netwerkverbinding van OpenQuatt.</p>
            <div class="oq-helper-modal-grid">
              ${e.map(([o,n])=>`
                <div class="oq-helper-modal-row">
                  <span class="oq-helper-modal-label">${i(o)}</span>
                  <strong class="oq-helper-modal-value">${i(n)}</strong>
                </div>
              `).join("")}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(t.systemModal==="settings-backup-restore")return ag();if(t.systemModal==="settings-backup-import")return rg();if(String(t.systemModal||"").startsWith("service-task-"))return zm();if(t.systemModal==="settings-backup-success"){const e=t.controlNotice||"Backup hersteld.";return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-backup-success-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Beheer</p>
                <h2 class="oq-helper-modal-title" id="oq-backup-success-modal-title">Backup hersteld</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit bevestiging">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">${i(e)}</p>
            <p class="oq-helper-modal-copy">Je kunt nu terug naar het overzicht of OpenQuatt gewoon verder gebruiken.</p>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(t.systemModal==="restart-confirm"){const e=t.busyAction==="restartAction";return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-restart-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-restart-modal-title">OpenQuatt herstarten?</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit herstart-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">De webinterface en regeling zijn tijdens de herstart kort niet bereikbaar. Daarna komt OpenQuatt vanzelf terug.</p>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-restart" ${e?"disabled":""}>${e?"Herstarten...":"Herstarten"}</button>
            </div>
          </section>
        </div>
      `}if(t.systemModal==="silent-settings")return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-silent-settings-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Stille uren</p>
                <h2 class="oq-helper-modal-title" id="oq-silent-settings-modal-title">Stille uren instellen</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit stille-uren-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen. Wijzigingen worden direct toegepast.</p>
            <div class="oq-helper-modal-body">
              ${cg()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;if(t.systemModal==="webserver-logs")return om();if(t.systemModal==="debug-recording")return Cm();if(t.systemModal==="openquatt-pause"){const e=A("openquattEnabled"),o=t.busyAction==="openquatt-regulation",n=y("openquattResumeAt"),r=t.loadingEntities||t.entitySyncInFlight,a=n||!r,s=Sr(),l=qr(E("openquattResumeAt")),d=Qi();return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-openquatt-pause-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Bediening</p>
                <h2 class="oq-helper-modal-title" id="oq-openquatt-pause-modal-title">Openquatt regeling</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit regeling-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">${e?"Kies hoe lang de regeling uit moet blijven. Verwarmen en koelen stoppen dan, maar beveiligingen blijven actief.":"De regeling staat nu tijdelijk uit. Je kunt meteen weer inschakelen of een nieuw hervatmoment plannen."}</p>
            ${s?`<div class="oq-helper-modal-success oq-helper-modal-success--compact">
                  <strong>Hervat nu automatisch</strong>
                  <span>${i(l)}</span>
                </div>`:""}
            ${a?n?`
                <div class="oq-helper-modal-presets">
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="2h" ${o?"disabled":""}>2 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="8h" ${o?"disabled":""}>8 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="tomorrow-morning" ${o?"disabled":""}>Tot morgenochtend</button>
                </div>
                <div class="oq-helper-modal-channel oq-helper-modal-channel--datetime">
                  <span class="oq-helper-modal-label">Hervatten op</span>
                  <div class="oq-helper-modal-inline">
                    <label class="oq-settings-control oq-settings-control--datetime">
                      <input
                        class="oq-helper-input"
                        type="datetime-local"
                        step="60"
                        lang="nl-NL"
                        data-oq-field="openquattPauseDraft"
                        data-oq-pause-draft="resume"
                        value="${i(d)}"
                        ${o?"disabled":""}
                      >
                      <span class="oq-settings-time-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" focusable="false">
                          <rect x="3.2" y="4.2" width="13.6" height="12.6" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.5" />
                          <path d="M6.2 2.9V5.4M13.8 2.9V5.4M3.8 8.1H16.2M10 10.3V13.1L12.3 14.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </label>
                    <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-openquatt-custom-pause" ${o?"disabled":""}>Plan moment</button>
                  </div>
                </div>
              `:'<p class="oq-helper-modal-note">Automatisch hervatten is nog niet beschikbaar op deze firmware. Je kunt de regeling wel zonder eindtijd uitschakelen.</p>':'<p class="oq-helper-modal-note" aria-live="polite">Hervatopties laden...</p>'}
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o?"disabled":""}>Annuleren</button>
              ${e?"":`<button class="oq-helper-button" type="button" data-oq-action="enable-openquatt-now" ${o?"disabled":""}>Nu inschakelen</button>`}
              <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-indefinite" ${o?"disabled":""}>${e?"Zonder eindtijd uitschakelen":"Zonder eindtijd"}</button>
            </div>
          </section>
        </div>
      `}return""}function E(e){if(Object.prototype.hasOwnProperty.call(t.drafts,e))return t.drafts[e];const o=t.entities[e];return o?o.value??o.state??"":""}function Je(e){const o=t.entities[e]||{};return{min:Number(o.min_value??0),max:Number(o.max_value??100),step:Number(o.step??1),uom:o.uom||""}}function Re(e){return Object.prototype.hasOwnProperty.call(t.inputDrafts,e)?t.inputDrafts[e]:E(e)}function ut(e){if(typeof e=="number")return e;const o=String(e??"").trim().replace(",",".");return!o||o==="-"||o==="."||o==="-."?Number.NaN:Number(o)}function Ot(e){const o=String(e||"").trim();if(!o)return"";const n=o.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!n)return"";const r=Number(n[1]),a=Number(n[2]),s=Number(n[3]||"0");return[r,a,s].some(l=>Number.isNaN(l))||r<0||r>23||a<0||a>59||s<0||s>59?"":`${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function Tn(e){const o=Ot(e);return o?o.slice(0,5):""}function xe(e){const o=String(e||"").trim();if(!o)return"";const n=o.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!n)return"";const r=Number(n[1]),a=Number(n[2]),s=Number(n[3]),l=Number(n[4]),d=Number(n[5]),u=Number(n[6]||"0");return[r,a,s,l,d,u].some(c=>Number.isNaN(c))||r<2e3||a<1||a>12||s<1||s>31||l<0||l>23||d<0||d>59||u<0||u>59?"":`${String(r).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(s).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(d).padStart(2,"0")}:${String(u).padStart(2,"0")}`}function $n(e){const o=xe(e);return!o||o===Zt?"":o.slice(0,16).replace(" ","T")}function Ui(e){const o=xe(e);if(!o||o===Zt)return null;const n=o.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!n)return null;const r=Number(n[1]),a=Number(n[2]),s=Number(n[3]),l=Number(n[4]),d=Number(n[5]),u=Number(n[6]),c=new Date(r,a-1,s,l,d,u,0);return Number.isNaN(c.getTime())?null:c}function Sr(e=E("openquattResumeAt")){return!!Ui(e)}function qr(e,o=!1){const n=Ui(e);return n?new Intl.DateTimeFormat("nl-NL",o?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(n):""}function $a(e){const o=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return`${o}-${n}-${r}T${a}:${s}`}function xu(e){const o=new Date(e.getTime());o.setSeconds(0,0);const n=o.getMinutes(),r=n%15;return r!==0&&o.setMinutes(n+(15-r)),o}function Gi(e){const o=new Date;if(e==="2h"||e==="8h"){const n=e==="2h"?2:8,r=xu(new Date(o.getTime()+n*3600*1e3));return $a(r)}if(e==="tomorrow-morning"){const n=new Date(o);return n.setDate(n.getDate()+1),n.setHours(7,0,0,0),$a(n)}return""}function Qi(){const e=$n(t.pauseResumeDraft);if(e)return e;const o=$n(E("openquattResumeAt"));return o||Gi("2h")}function pt(){return[...new Set(["setupComplete",...wi])]}function Uo(){return t.appView==="settings"&&t.settingsGroup==="system"}function Yi(){return t.appView==="settings"&&t.settingsGroup==="integrations"}function Ou(){const e=typeof window<"u"?Number(window.__OQ_DEV_LOAD_DELAY_MS||0):0;return Number.isFinite(e)&&e>0?e:0}const Du=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","silentModeOverride","totalHeat","totalCoolingPower"],Fu=["strategy","controlModeLabel","hpGeneration"],Iu=["totalPower","flowSelected"],Wu=["totalHeat","totalCoolingPower"],Bu=2e3,Vu=250,Ea={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel"]},ju=5e3,_u=250,Ku=["installationTopology",...So,"hpGeneration","openquattEnabled",...Ye,...Vo,"boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...Ht,...jo,...Qe,"maxWater",..._o,"minRuntime"],zu={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Qe,...ui,..._o,...vi,...Eo,...Ao,"maxWater"],service:[..._n,...Kn,...Eo,...Ao,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...Ht,...jo,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...bi],integrations:[...pi,...gi,...mi,...hi,...zn,...fi,...di],system:["setupComplete",...Rt,"firmwareUpdateChannel","projectVersionText","releaseChannelText","trendHistoryEnabled","trendHistoryFlashEnabled","webServerLogHistoryEnabled","debugLevel","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites"]};function Zi(e=t.settingsGroup){const o=Ae.has(e)?e:we[0].id;return[...new Set(["setupComplete","strategy",...qe,...zu[o]||[]])]}function Ji(){const e=Ae.has(t.settingsGroup)?t.settingsGroup:we[0].id;return[...new Set(Ea[e]||Ea.installation)]}function Uu(e={}){const o=t.pendingEntitySyncOptions||{},n={...o,...e};o.forceBulk||e.forceBulk?(n.forceBulk=!0,n.forceFast=!1):(o.forceFast||e.forceFast)&&(n.forceFast=!0),t.pendingEntitySyncOptions=n}function kr(e){const o=String(E(e)??"").trim().toLowerCase();return o!==""&&o!=="unknown"&&o!=="unavailable"&&o!=="nan"}function Aa(e){return kr(e)&&Number.isFinite(ut(E(e)))}function Cr(){return t.appView==="overview"||t.appView==="trends"||t.appView==="energy"}function Gu(){return sc.filter(e=>{const o=t.entities[e];return o?!String(o.uom??o.unit_of_measurement??"").trim():!D[e]?.optional})}async function Xi(){if(t.nativeOpen||!Cr()||t.overviewMetadataHydrated||t.overviewMetadataHydrating)return!1;const e=Gu();if(!e.length)return t.overviewMetadataHydrated=!0,!1;t.overviewMetadataHydrating=!0;try{return await W(e,"all",{concurrency:st}),t.overviewMetadataHydrated=!0,!0}catch{return!1}finally{t.overviewMetadataHydrating=!1,t.mounted&&!t.nativeOpen&&p()}}function Ma(){return Cr()?Fu.every(kr)&&Iu.every(Aa)&&Wu.some(Aa):!0}function Qu(){return t.appView==="settings"}function Pa(){return Qu()?Ji().every(e=>D[e]?.optional&&!t.entities[e]?!0:kr(e)):!0}async function Yu(){if(Ma())return;const e=Date.now()+Bu;for(;!t.nativeOpen&&!Ma()&&Date.now()<e;){await new Promise(o=>window.setTimeout(o,Vu));try{await W(Du,"state")}catch{return}}}async function Zu(){if(Pa())return;const e=Date.now()+ju;for(;!t.nativeOpen&&!Pa()&&Date.now()<e;){await new Promise(o=>window.setTimeout(o,_u));try{await W(Ji(),"all")}catch{return}}}function _(e,o=E(e)){if(o===""||o===null||Number.isNaN(Number(o)))return"\u2014";const n=Je(e),r=n.step<1?Math.min(4,Math.max(1,String(n.step).split(".")[1]?.length||1)):0;return`${Number(o).toFixed(r)}${n.uom?` ${n.uom}`:""}`}function be(e,o){const n=Je(e),r=ut(o);if(Number.isNaN(r)){const u=ut(t.entities[e]?.value??t.entities[e]?.state??"");return Number.isNaN(u)?n.min:u}const a=Math.min(n.max,Math.max(n.min,r)),s=Math.round((a-n.min)/n.step),l=n.min+s*n.step,d=n.step<1?Math.min(4,Math.max(1,String(n.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(d))}function es(){const e=le[Math.floor(le.length/2-1)],o=le[Math.floor(le.length/2)];if(!e||!o||!y("curveFallbackSupply"))return null;const n=be(e.key,E(e.key)),r=be(o.key,E(o.key)),a=(n+r)/2,s=be("curveFallbackSupply",a);return{value:s,label:_("curveFallbackSupply",s),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${o.label}).`,isCurrent:be("curveFallbackSupply",E("curveFallbackSupply"))===s}}const Ju=8e3,ts=3e3,La="/openquatt/entities",Xu=900;function ed(){return t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint?ts:Ju}function td(e){const o=String(e||"").toLowerCase();return o.includes("failed to fetch")||o.includes("load failed")||o.includes("networkerror")||o.includes("network request failed")||o.includes("connection refused")||o.includes("connection reset")||o.includes("err_connection")||o.includes("timeout")}const od=300*1e3;function nd(){if(t.optionalMissingEntities)for(const e of Object.keys(t.optionalMissingEntities))delete t.optionalMissingEntities[e]}function rd(){const e=Date.now();t.lastEntitySyncAt=e,t.lastEntitySyncSuccessAt=e,t.entitySyncFailureCount=0,!!t.deviceReconnectMode&&typeof ka=="function"&&ka()&&(t.lastFastEntitySyncAt=0,t.lastBulkEntitySyncAt=0,t.lastStaticEntitySyncAt=0,t.trendHistoryRaw="",t.trendHistoryError="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=0,typeof ja=="function"?ja():(it(),Yo(),t.webServerLogEnabled=null,t.webServerLogConnected=!1),nd())}function os(e){if(!td(e)){t.entitySyncFailureCount=0,Wi();return}t.entitySyncFailureCount=Number(t.entitySyncFailureCount||0)+1,t.deviceReconnectLastError=String(e||""),(t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint||t.entitySyncFailureCount>=2)&&gr(t.updateInstallBusy||t.updateInstallPhaseHint?"ota":t.busyAction==="restartAction"?"restart":"reconnect",e)}function ad(e=Date.now(),o={}){if(o.forceProbe===!0||t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint||Number(t.entitySyncFailureCount||0)>0)return!0;const n=Number(t.lastEntitySyncSuccessAt||t.lastEntitySyncAt||t.lastEntityResponseAt||0);if(!n)return!0;const r=document.hidden?Gn:gc;return e-n>=r}async function id(){const e=D.status||D.setupComplete;if(!e)return{ok:!0,message:""};const o=t.deviceReconnectMode?ts:mc,n=U(e.domain,e.name);if(typeof AbortController=="function"){const r=new AbortController,a=window.setTimeout(()=>r.abort(),o);try{const s=await fetch(n,{cache:"no-store",signal:r.signal});return t.lastEntityResponseAt=Date.now(),{ok:s.ok||s.status===404,message:s.ok||s.status===404?"":`${e.name} HTTP ${s.status}`}}catch(s){return{ok:!1,message:r.signal.aborted?`${e.name} request timed out after ${o}ms`:s.message||String(s)}}finally{window.clearTimeout(a)}}try{const r=await fetch(n,{cache:"no-store"});return t.lastEntityResponseAt=Date.now(),{ok:r.ok||r.status===404,message:r.ok||r.status===404?"":`${e.name} HTTP ${r.status}`}}catch(r){return{ok:!1,message:r.message||String(r)}}}function sd(e,o=Date.now()){const n=t.optionalMissingEntities?.[e];return!D[e]?.optional||!n?!1:o-Number(n)<od}function ld(e,o=Date.now()){t.optionalMissingEntities&&(t.optionalMissingEntities[e]=o)}function cd(e){const o=D[e];return o?`${e}	${o.domain}	${o.name}`:""}function Ha(e,o){const n=new URLSearchParams;return n.set("detail",o==="all"?"all":"state"),n.set("entities",e.join(`
`)),n.toString()}function ns(e,o){const n=[];let r=[],a=[],s="";return e.forEach(l=>{const d=cd(l);if(!d)return;const u=[...a,d],c=Ha(u,o);if(a.length&&c.length>Xu){n.push({keys:r,body:s}),r=[l],a=[d],s=Ha(a,o);return}r=[...r,l],a=u,s=c}),a.length&&n.push({keys:r,body:s}),n}async function ud(e){const o=ed(),n={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body};if(typeof AbortController=="function"){const a=new AbortController,s=window.setTimeout(()=>a.abort(),o);try{const l=await fetch(La,{...n,signal:a.signal});if(!l.ok)throw new Error(`bulk entities HTTP ${l.status}`);return l.json()}catch(l){throw a.signal.aborted?new Error(`bulk entities request timed out after ${o}ms`):l}finally{window.clearTimeout(s)}}const r=await fetch(La,n);if(!r.ok)throw new Error(`bulk entities HTTP ${r.status}`);return r.json()}async function W(e,o="state",n={}){const r=Date.now(),a=e.filter(f=>!sd(f,r));if(!a.length)return;const s=Number(n.concurrency),l=Number.isFinite(s)&&s>0?Math.floor(s):st,d=ns(a,o),u=Math.max(1,Math.min(l,st)),c=[];for(let f=0;f<d.length;f+=u){const g=d.slice(f,f+u),b=await Promise.allSettled(g.map(async k=>({chunk:k,payload:await ud(k)})));c.push(...b)}c.some(f=>f.status==="fulfilled")&&(t.lastEntityResponseAt=Date.now());let m="";c.forEach(f=>{if(f.status!=="fulfilled"){const w=f.reason.message||String(f.reason);m||(m=w);return}const{chunk:g,payload:b}=f.value,k=b?.entities&&typeof b.entities=="object"?b.entities:{},h=new Set(Array.isArray(b?.missing)?b.missing:[]);g.keys.forEach(w=>{if(Object.prototype.hasOwnProperty.call(k,w)){t.optionalMissingEntities&&delete t.optionalMissingEntities[w],t.entities[w]=dd(w,t.entities[w],k[w]);return}const v=D[w];v?.optional?h.has(w)&&ld(w,r):m||(m=`${v?.name||w} ontbreekt in bulk response`)})}),Rd(),Us(nn()),m?(os(m),t.deviceReconnectMode?t.controlError="":t.controlError=`Niet alle helpervelden konden worden ververst. ${m}`):t.busyAction||(rd(),t.controlError="")}function dd(e,o={},n={}){const r={...o||{},...n||{}};return D[e]?.domain==="select"&&(!String(n.state??"").trim()&&String(o?.state??"").trim()&&(r.state=o.state),!String(n.value??"").trim()&&String(o?.value??"").trim()&&(r.value=o.value),!Array.isArray(n.option)&&Array.isArray(o?.option)&&(r.option=o.option),!Array.isArray(n.options)&&Array.isArray(o?.options)&&(r.options=o.options)),r}function Ra(e=t.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function rs(){const e=t.authStatus||{};t.authDraftUsername=e.enabled?String(e.username||"").trim():"",t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword=""}function En(e=t.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function An(e=t.mqttStatus||{}){return[e.enabled?"on":"off",e.connected?"connected":"disconnected",String(e.broker||""),String(e.port||""),String(e.username||""),String(e.base_topic||""),String(e.publish_profile||""),String(e.essential_interval_s||""),String(e.standard_interval_s||""),String(e.diagnostic_interval_s||""),e.retain_snapshots?"retain":"volatile",e.password_set?"set":"empty",String(e.source||""),String(e.csrf_token||"")].join(":")}function as(){const e=t.mqttStatus||{};t.mqttDraftEnabled=e.enabled===!0,t.mqttDraftBroker=String(e.broker||""),t.mqttDraftPort=String(e.port||1883),t.mqttDraftUsername=String(e.username||""),t.mqttDraftPassword="",t.mqttDraftBaseTopic=String(e.base_topic||"openquatt"),t.mqttDraftPublishProfile=String(e.publish_profile||"standard"),t.mqttDraftEssentialIntervalS=String(e.essential_interval_s??10),t.mqttDraftStandardIntervalS=String(e.standard_interval_s??30),t.mqttDraftDiagnosticIntervalS=String(e.diagnostic_interval_s??60),t.mqttDraftRetainSnapshots=e.retain_snapshots!==!1,t.mqttNotice="",t.mqttError=""}function Tr(e,o={},n=hc){if(o.force===!0)return!0;const r=Number(e||0);return!r||Date.now()-r>=n}function pd(){return t.systemModal==="login"||t.systemModal==="api-security"||Uo()}function md(){return t.systemModal==="api-security"||Uo()}function gd(){return t.systemModal==="mqtt"||Yi()}function is(e){const o=String(e||"").trim().toLowerCase();return o==="off"?"Uit":o==="essential"?"Essential":o==="diagnostic"?"Diagnostic":"Standard"}async function Dt(e={}){if(!Tr(t.lastAuthStatusRefreshAt,e))return!1;t.lastAuthStatusRefreshAt=Date.now();try{const o=await fetch("/auth/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const n=await o.json(),r={enabled:!!n.enabled,setup_window_active:!!n.setup_window_active,username:String(n.username||""),source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=Ra(),s=Ra(r);return t.authStatus=r,a!==s&&rs(),t.systemModal==="login"&&(t.authError=""),a!==s}catch(o){return t.systemModal==="login"&&(t.authError=`Loginstatus kon niet worden geladen. ${o.message}`),!1}}function Co(){return t.nativeOpen||t.systemModal!=="login"?!1:(t.authStatus||{}).setup_window_active!==!0}function To(){t.loginAuthStatusPollTimer&&(window.clearTimeout(t.loginAuthStatusPollTimer),t.loginAuthStatusPollTimer=null)}function ss(e=fc){t.loginAuthStatusPollTimer||!Co()||(t.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(t.loginAuthStatusPollTimer=null,!Co())return;const o=t.authError;(await Dt({force:!0})||t.authError!==o)&&t.systemModal==="login"&&p(),Co()&&ss()},Math.max(0,Number(e)||0)))}async function hd(e={}){if(t.systemModal!=="login")return!1;const o=t.authError,n=await Dt({force:!0});return(n||t.authError!==o)&&t.systemModal==="login"&&p(),e.poll!==!1&&Co()&&ss(),n}async function Ft(e={}){if(!Tr(t.lastApiSecurityStatusRefreshAt,e))return!1;t.lastApiSecurityStatusRefreshAt=Date.now();try{const o=await fetch("/api-security/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const n=await o.json(),r={enabled:!!n.enabled,transport_active:!!n.transport_active,pending_restart:!!n.pending_restart,key:String(n.key||""),source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=En(),s=En(r);return t.apiSecurityStatus=r,t.apiSecurityError="",a!==s&&(t.apiSecurityNotice=""),a!==s}catch(o){return t.apiSecurityError=`API-beveiliging kon niet worden geladen. ${o.message}`,!1}}function $r(){const e=t.mqttStatus;return e?e.enabled!==!0?"Uit":e.connected===!0?"Verbonden":String(e.broker||"").trim()?"Verbinding maken":"Geen broker":"Laden..."}function Er(){const e=t.mqttStatus;if(!e)return"MQTT-configuratie wordt geladen.";const o=String(e.broker||"").trim(),n=String(e.base_topic||"").trim(),r=is(e.publish_profile);return e.enabled!==!0?"MQTT staat uit en maakt geen verbinding.":e.connected===!0?o?`Verbonden met ${o}${n?` en publiceert ${r.toLowerCase()} telemetry via ${n}.`:"."}`:"MQTT is verbonden en publiceert met de opgeslagen instellingen.":o?n?`De broker staat ingesteld op ${o}; het device probeert ${r.toLowerCase()} telemetry via ${n} te publiceren.`:`De broker staat ingesteld op ${o}; het device probeert verbinding te maken.`:"Er is nog geen broker opgeslagen."}async function Go(e={}){if(!Tr(t.lastMqttStatusRefreshAt,e))return!1;t.lastMqttStatusRefreshAt=Date.now();try{const o=await fetch("/mqtt/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const n=await o.json(),r={enabled:!!n.enabled,connected:!!n.connected,broker:String(n.broker||""),port:Number(n.port||0),username:String(n.username||""),base_topic:String(n.base_topic||""),publish_profile:String(n.publish_profile||"standard"),essential_interval_s:Number(n.essential_interval_s??10),standard_interval_s:Number(n.standard_interval_s??30),retain_snapshots:n.retain_snapshots!==!1,password_set:!!n.password_set,source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=An(),s=An(r);return t.mqttStatus=r,a!==s&&as(),t.systemModal==="mqtt"&&(t.mqttError=""),a!==s}catch(o){return t.systemModal==="mqtt"&&(t.mqttError=`MQTT-status kon niet worden geladen. ${o.message}`),!1}}async function ls(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="fixed",o.style.top="-1000px",o.style.opacity="0",document.body.appendChild(o),o.focus(),o.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(o)}return n}async function fd(){await $o("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"})}async function bd(){const e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",p();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",p();try{const o=new URLSearchParams;o.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await Ft({force:!0}),t.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",t.apiSecurityError="",p()}catch(o){t.apiSecurityError=`Inschakelen is mislukt. ${o.message}`,p()}finally{t.apiSecurityBusy=!1,p()}}async function vd(){const e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",p();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",p();try{const o=new URLSearchParams;o.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await Ft({force:!0}),t.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",t.apiSecurityError="",p()}catch(o){t.apiSecurityError=`Roteren is mislukt. ${o.message}`,p()}finally{t.apiSecurityBusy=!1,p()}}async function wd(){const e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",p();return}if(!e.enabled){t.apiSecurityNotice="API-encryptie staat al uit.",t.apiSecurityError="",p();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",p();try{const o=new URLSearchParams;o.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await Ft({force:!0}),t.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",t.apiSecurityError="",p()}catch(o){t.apiSecurityError=`Uitzetten is mislukt. ${o.message}`,p()}finally{t.apiSecurityBusy=!1,p()}}async function yd(){const e=t.mqttStatus||{},o=!!t.mqttDraftEnabled,n=String(t.mqttDraftBroker||"").trim(),r=Number(String(t.mqttDraftPort||"").trim()),a=String(t.mqttDraftUsername||"").trim(),s=String(t.mqttDraftPassword||""),l=String(t.mqttDraftBaseTopic||"").trim(),d=String(t.mqttDraftPublishProfile||"standard").trim().toLowerCase(),u=Number(String(t.mqttDraftEssentialIntervalS||"").trim()),c=Number(String(t.mqttDraftStandardIntervalS||"").trim()),m=Number(String(t.mqttDraftDiagnosticIntervalS||"").trim()),f=!!t.mqttDraftRetainSnapshots;if(!l){t.mqttError="Vul een base topic in.",p();return}if(!Number.isFinite(r)||r<1||r>65535){t.mqttError="Vul een geldige poort in.",p();return}if(o&&!n){t.mqttError="Vul een broker in als je MQTT inschakelt.",p();return}if(!e.csrf_token){t.mqttError="MQTT-configuratie laden nog. Probeer het zo opnieuw.",p();return}if(!["off","essential","standard","diagnostic"].includes(d)){t.mqttError="Kies een geldig publish-profiel.",p();return}if(!Number.isFinite(u)||u<1||u>3600){t.mqttError="Vul een geldig essential interval in.",p();return}if(!Number.isFinite(c)||c<1||c>3600){t.mqttError="Vul een geldig standard interval in.",p();return}if(!Number.isFinite(m)||m<1||m>3600){t.mqttError="Vul een geldig diagnostic interval in.",p();return}t.mqttBusy=!0,t.mqttError="",t.mqttNotice="",p();try{const g=new URLSearchParams;g.set("csrf_token",e.csrf_token),g.set("enabled",o?"true":"false"),g.set("broker",n),g.set("port",String(r)),g.set("username",a),g.set("password",s),g.set("base_topic",l),g.set("publish_profile",d),g.set("essential_interval_s",String(u)),g.set("standard_interval_s",String(c)),g.set("diagnostic_interval_s",String(m)),g.set("retain_snapshots",f?"true":"false");const b=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:g.toString()}),k=await b.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!b.ok||!k.ok)throw new Error(k.error||`HTTP ${b.status}`);await Go({force:!0}),t.mqttNotice=o?"MQTT staat nu aan.":"MQTT-configuratie opgeslagen.",t.mqttError="",p()}catch(g){t.mqttError=`Opslaan is mislukt. ${g.message}`,p()}finally{t.mqttBusy=!1,p()}}async function Sd(){const e=String(t.apiSecurityStatus?.key||"").trim();if(!e){t.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",p();return}try{if(!await ls(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");t.apiSecurityNotice="API-sleutel gekopieerd.",t.apiSecurityError="",p()}catch(o){t.apiSecurityError=`Kopi\xEBren is mislukt. ${o.message}`,p()}}function Mn(){t.settingsBackupDraft=null,t.settingsBackupError="",t.settingsBackupBusy=!1}function qd(){return{device:je(),installation:lo(),topology:typeof he=="function"?he():"",firmware_version:ge(),firmware_channel:String(E("firmwareUpdateChannel")||E("releaseChannelText")||"").trim()}}function cs(e){const o=D[e];if(!o)return;if(e==="setupComplete")return Ss();const n=E(e);if(n===""||n===null||n===void 0)return;if(o.domain==="switch"||o.domain==="binary_sensor")return A(e);if(o.domain==="number"){const a=ut(n);return Number.isNaN(a)?void 0:a}return o.domain==="time"?Ot(n)||void 0:o.domain==="datetime"?xe(n)||void 0:String(n||"").trim()||void 0}function us(){const e={};return $t.forEach(o=>{const n={};o.keys.forEach(r=>{const a=cs(r);a!==void 0&&(n[r]=a)}),e[o.id]=n}),{schema_version:yi,exported_at:new Date().toISOString(),source:qd(),settings:e}}function kd(e=us()){const o=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${o}.json`}function Cd(e,o){const n=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function Td(e){const o=D[e];return o?.name?o.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function Na(e,o){if(o==null||o==="")return"\u2014";const n=D[e];return n?n.domain==="number"?_(e,o):n.domain==="time"?Ot(o)?.slice(0,5)||"\u2014":n.domain==="datetime"?xe(o)||"\u2014":n.domain==="switch"||n.domain==="binary_sensor"?o?"Aan":"Uit":String(o).trim()||"\u2014":String(o).trim()||"\u2014"}function $d(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function ds(e){const o=e?.settings&&typeof e.settings=="object"?e.settings:{},n=e?.source&&typeof e.source=="object"?e.source:{},r=cc;let a=0,s=0,l=0,d=0,u=0,c=0,m=0,f=0;const g=$t.map(b=>{const k=o[b.id]&&typeof o[b.id]=="object"?o[b.id]:{};let h=0,w=0,v=0,S=0,$=0,q=0,M=0;const x=b.keys.map(O=>{const C=!!D[O]?.optional,T=Object.prototype.hasOwnProperty.call(k,O),H=T?k[O]:void 0,I=cs(O),K=y(O),R=T?Na(O,H):C?"Niet op huidige installatie":"Ontbreekt in backup",B=K?Na(O,I):C?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie";let L="same";return!T&&C?L="optional-missing":T?K?JSON.stringify(I)!==JSON.stringify(H)&&(L="different"):L=C?"optional-unavailable":"current-missing":L="missing",K&&(M+=1,f+=1),L!=="same"&&(q+=1,m+=1),C?($+=1,T?(v+=1,l+=1):(S+=1,d+=1)):T?(h+=1,a+=1):(w+=1,s+=1),{key:O,label:Td(O),optional:C,hasBackupValue:T,backupDisplay:R,currentDisplay:B,status:L,statusLabel:$d(L)}});return c+=b.keys.filter(O=>!D[O]?.optional).length,{id:b.id,label:b.label,present:h,currentPresent:M,requiredTotal:b.keys.filter(O=>!D[O]?.optional).length,optionalTotal:$,optionalPresent:v,optionalMissing:S,requiredMissing:w,total:b.keys.length,differenceCount:q,rows:x}});return Object.entries(o).forEach(([b,k])=>{if(!$t.some(h=>h.id===b)){u+=1;return}!k||typeof k!="object"||Object.keys(k).forEach(h=>{r.has(h)||(u+=1)})}),{source:n,sectionSummaries:g,requiredPresent:a,requiredMissing:s,requiredAvailable:c,optionalPresent:l,optionalMissing:d,unknown:u,differenceCount:m,currentPresent:f,requiredTotal:c,total:io.length}}function Ed(e,o=""){const n=JSON.parse(e);if(!n||typeof n!="object")throw new Error("Backupbestand bevat geen JSON-object.");const r=Number(n.schema_version??n.schemaVersion??0);if(!Number.isInteger(r)||r<yi)throw new Error("Onbekende backupversie.");const a=n.settings&&typeof n.settings=="object"?n.settings:{},s={schema_version:r,exported_at:String(n.exported_at||""),source:n.source&&typeof n.source=="object"?n.source:{},settings:a,file_name:o||""};return s.summary=ds(s),s}async function Ad(){t.settingsBackupBusy=!0,t.controlError="",t.controlNotice="",p();try{return await W(io,"all"),us()}finally{t.settingsBackupBusy=!1,p()}}async function Md(){if(!t.settingsBackupBusy)try{const e=await Ad();Cd(kd(e),e),t.controlNotice="Settings-backup gedownload.",p()}catch(e){t.controlError=`Backup exporteren mislukt. ${e.message}`,p()}}async function Pd(e){if(!(!e||t.settingsBackupBusy)){t.settingsBackupBusy=!0,t.settingsBackupDraft=null,t.settingsBackupError="",t.controlError="",t.controlNotice="",p();try{const o=await e.text(),n=Ed(o,e.name||"");t.settingsBackupDraft=n,t.systemModal="settings-backup-restore"}catch(o){t.settingsBackupDraft=null,t.settingsBackupError=`Backupbestand kon niet worden gelezen. ${o.message}`}finally{t.settingsBackupBusy=!1,p()}}}async function Ro(e,o){const n=D[e];if(!n)throw new Error(`Onbekend veld ${e}.`);if(n.domain==="select"){const r=String(o||"").trim(),a=await fetch(`${U(n.domain,n.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="number"){const r=be(e,o),a=await fetch(`${U(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="time"){const r=Ot(o),a=await fetch(`${U(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="datetime"){const r=xe(o),a=await fetch(`${U(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="text"){const r=String(o||"").trim(),a=await fetch(`${U(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="switch"||n.domain==="binary_sensor"){const r=!!o,a=r?"turn_on":"turn_off",s=await fetch(U(n.domain,n.name,a),{method:"POST"});if(!s.ok)throw new Error(`HTTP ${s.status}`);return r}throw new Error(`${n.name} kan niet worden hersteld.`)}async function Ld(){const e=t.settingsBackupDraft;if(!e||t.settingsBackupBusy)return;t.settingsBackupBusy=!0,t.settingsBackupError="",t.controlError="",t.controlNotice="",p();const o=[],n=[];let r=!1;try{await W(io,"all");for(const s of $t){const l=e.settings?.[s.id]&&typeof e.settings[s.id]=="object"?e.settings[s.id]:{};for(const d of s.keys){if(!Object.prototype.hasOwnProperty.call(l,d)){n.push(d);continue}const u=l[d];if(d==="setupComplete"){r=u===!0;continue}if(d==="openquattEnabled")continue;if(!D[d]||!y(d)){n.push(d);continue}try{await Ro(d,u),o.push(d)}catch{n.push(d)}}}const a=e.settings?.operation?.openquattEnabled;if(Object.prototype.hasOwnProperty.call(e.settings?.operation||{},"openquattEnabled")&&y("openquattEnabled")&&(await Ro("openquattEnabled",a),o.push("openquattEnabled")),r&&D.apply){const s=await fetch(U("button","Complete setup","press"),{method:"POST"});if(!s.ok)throw new Error(`Setup bevestigen mislukt (HTTP ${s.status}).`);o.push("setupComplete")}else Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&n.push("setupComplete");t.systemModal="settings-backup-success",Mn(),t.controlNotice=`Backup hersteld (${o.length} toegepast${n.length?`, ${n.length} overgeslagen`:""}).`,await ne()}catch(a){t.settingsBackupError=`Backup herstellen mislukt. ${a.message}`}finally{t.settingsBackupBusy=!1,p()}}function Hd(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}async function Ar(e={}){if(!It()){const r=!!(t.trendHistoryRaw||t.trendHistoryError);return t.trendHistoryRaw="",t.trendHistoryError="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=0,r}if(Hd())return!1;const o=e.force===!0,n=Date.now();if(!o&&t.trendHistoryFetchPromise)return t.trendHistoryFetchPromise;if(!o&&(t.trendHistoryRaw||t.trendHistoryError)&&n-Number(t.trendHistoryLastFetchAt||0)<oc)return!1;t.trendHistoryFetchPromise=(async()=>{const r=Qn(t.trendWindowHours||Et);r!==t.trendWindowHours&&Yn(r);const a=await fetch(`${so()}/trends/history?hours=${encodeURIComponent(String(r))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const s=await a.text(),l=s.split(/\r?\n/);let d=Number.NaN,u=s;l.length&&l[0].startsWith("@now|")&&(d=Number(l[0].slice(5)),u=l.slice(1).join(`
`));const c=`${r}|${u.length}|${u.slice(0,120)}|${u.slice(-120)}`,m=Number.isFinite(t.trendHistoryNowMs),g=Number.isFinite(d)?!m||t.trendHistoryNowMs!==d:m,b=u!==t.trendHistoryRaw||t.trendHistoryError!==""||t.trendHistorySignature!==c||g;return t.trendHistoryRaw=u,t.trendHistoryError="",t.trendHistorySignature=c,t.trendHistoryNowMs=Number.isFinite(d)?d:Number.NaN,t.trendHistoryLastFetchAt=Date.now(),b})();try{return await t.trendHistoryFetchPromise}catch(r){const a=`Trendhistorie kon niet worden geladen. ${r.message}`,s=t.trendHistoryError!==a;return t.trendHistoryError=a,t.trendHistoryRaw="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=Date.now(),s}finally{t.trendHistoryFetchPromise=null}}function Rd(){t.complete=Ss(),t.stage=t.complete===!0?"Gereed":t.complete===!1?"Quick Start":"Laden...",t.summary=pp(),t.appView==="trends"&&!It()&&rt(At(),{syncMode:"replace",forceSync:!0}),t.appView||rt(Xn()||At(),{syncMode:"replace",forceSync:!0})}function Nd(){const e=["setupComplete","strategy",...qe,...Ku];return t.appView==="settings"?[...new Set([...e,...Zi()])]:t.appView==="energy"?[...new Set([...e,...ao])]:t.appView==="overview"||t.appView==="trends"?[...new Set([...e,...qo])]:[...new Set(e)]}function xd(e=[]){const o=new Set(e);return(t.appView==="settings"?[...new Set(["setupComplete","strategy",...qe,...pt()])]:t.appView==="overview"||t.appView==="trends"||t.appView==="energy"?[...new Set(["setupComplete","strategy",...qe,...ao,...Rt])]:[...new Set(["setupComplete","strategy",...qe])]).filter(r=>!o.has(r))}async function Od(e,o="state"){if(!(!e.length||t.nativeOpen)){t.entitySyncInFlight=!0;try{await W(e,o,{concurrency:o==="all"?st:Vn})}finally{t.entitySyncInFlight=!1;const n=t.pendingEntitySyncOptions;t.pendingEntitySyncOptions=null,n&&!t.nativeOpen&&window.setTimeout(()=>{ne(n)},0)}t.mounted&&!t.nativeOpen&&p()}}function ps(){if(t.nativeOpen||t.appView!=="settings")return;const e=()=>{if(!(t.nativeOpen||t.appView!=="settings")){if(t.loadingEntities||t.focusedField||t.draggingCurveKey||t.busyAction||t.settingsInteractionLock){window.setTimeout(ps,250);return}ne({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}function xa(e=Date.now(),o={}){return o.forceBulk===!0?!0:e-Number(t.lastBulkEntitySyncAt||0)>=dc}async function ms(){if(!t.nativeOpen)try{Cr()&&await Xi(),(t.appView==="overview"||t.appView==="trends")&&await Ar({force:!0}),await Dt({force:!0}),Uo()&&await Ft({force:!0}),Yi()&&await Go({force:!0})}finally{t.mounted&&!t.nativeOpen&&p(),ps()}}async function Dd(){if(t.nativeOpen)return;t.loadingEntities=!0,p();const e=Ou();e>0&&await new Promise(s=>window.setTimeout(s,e));const o=Nd(),n=xd(o),r=t.appView==="settings"?"all":"state";try{await W(o,r,{concurrency:r==="all"?st:Vn}),t.appView==="settings"?await Zu():await Yu()}finally{t.loadingEntities=!1,p()}const a=t.appView==="settings"?"all":"state";window.setTimeout(()=>{Od(n,a),ms()},0)}async function ne(e={}){if(t.nativeOpen||t.loadingEntities||t.draggingCurveKey||t.busyAction||t.settingsInteractionLock||t.focusedField&&t.appView!=="settings")return;if(t.entitySyncInFlight){Uu(e);return}const o=Date.now();if(document.hidden&&o-Number(t.lastEntitySyncAttemptAt||0)<Gn)return;const n=t.appView,r=e.prefetchView==="overview"&&!e.forceBulk&&n==="settings",a=r?"overview":n,s=a==="overview"||a==="trends"||a==="energy",l=e.forceFast===!0&&!e.forceBulk,d=!l&&!r&&xa(o,e),c=o-Number(t.lastStaticEntitySyncAt||0)>=pc||t.updateInstallBusy||t.updateInstallPhaseHint?Rt:[],m=t.quickStartModalOpen&&t.currentStep==="flow-source"?Ye:[],f=t.quickStartModalOpen&&t.currentStep==="thermostat-source"?Vo:[],g=r?[...qo,...qe,"setupComplete",...c]:s?[...l?qo:d?ao:qo,...qe,"setupComplete",...c]:n==="settings"?[...new Set([...Zi(),...c])]:d?["setupComplete",...c,...qe,"strategy",...ro,...Qe,...re()?le.map(b=>b.key):Ht]:["setupComplete",...qe,"strategy",...c];t.entitySyncInFlight=!0,t.lastEntitySyncAttemptAt=o;try{const b=t.deviceReconnectMode,k=ad(o,e)?await id():{ok:!0,message:""};if(!k.ok){os(k.message),r||p();return}if(await W([...new Set([...g,...m,...f])],r?"state":n==="settings"?"all":"state",{concurrency:l&&s?Vn:st}),t.lastFastEntitySyncAt=Date.now(),d&&s&&!r&&(t.lastBulkEntitySyncAt=t.lastFastEntitySyncAt),c.length&&(t.lastStaticEntitySyncAt=t.lastFastEntitySyncAt),r)return;s&&!t.overviewMetadataHydrated&&!t.overviewMetadataHydrating&&Xi();const h=b!==t.deviceReconnectMode,w=l&&s,v=w?!1:s?await Ar():!1,S=w||!pd()?!1:await Dt(),$=w||!md()?!1:await Ft(),q=w||!gd()?!1:await Go(),M=Cn();if(h){p();return}if(v&&t.appView==="trends"&&!t.root?.querySelector(".oq-overview-trends")){p();return}if(S&&(t.systemModal==="login"||Uo())){p();return}if($&&t.appView==="settings"){p();return}if(q&&t.appView==="settings"){p();return}const x=!!(t.updateModalOpen||t.systemModal||t.interfacePanelOpen);if(M!==t.headerRenderSignature)if(x&&Ca())t.headerRenderSignature=M;else{p();return}else Ca();if(t.appView==="settings"&&String(t.systemModal||"").startsWith("service-task-")){Pn()!==t.settingsRenderSignature&&p();return}if(x)return;if(t.appView==="settings"){const O=Pn();if(O!==t.settingsRenderSignature&&!t.focusedField){p();return}if(!Rm()){t.focusedField||p();return}t.focusedField&&(t.settingsRenderSignature=O);return}if(t.appView==="trends"){ch()||p();return}if(t.appView==="energy"){fh()||p();return}jh()||p(),w&&!t.nativeOpen&&window.setTimeout(()=>{ms()},0)}catch(b){r||(t.controlError=`Helperstatus kon niet worden geladen. ${b.message}`,p())}finally{t.entitySyncInFlight=!1;const b=t.pendingEntitySyncOptions;t.pendingEntitySyncOptions=null,b&&!t.nativeOpen&&window.setTimeout(()=>{ne(b)},0),l&&s&&!r&&!t.nativeOpen&&!b&&xa(Date.now())&&window.setTimeout(()=>{ne({forceBulk:!0})},0)}}function Oa(){window.setTimeout(()=>{const e=document.activeElement;t.focusedField=e&&e.dataset&&e.dataset.oqField||"",t.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function Fd(e){e.target.closest(".oq-ph-concept-hotspot")&&(t.settingsInteractionLock=!0)}function Id(e){const o=e.target.closest(".oq-ph-concept-hotspot");if(!o||e.relatedTarget&&o.contains(e.relatedTarget))return;const n=t.root&&t.root.querySelector(".oq-ph-concept-hotspot:hover"),r=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;t.settingsInteractionLock=!!(n||r)}function oe(e){const o=t.entities[e];if(!o)return t.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;const n=o.state??o.value??"",r=Array.isArray(o.option)?o.option.join(","):Array.isArray(o.options)?o.options.join(","):"",a=[o.min_value??"",o.max_value??"",o.step??"",o.uom??""].join(",");return`${e}:${n}::${r}::${a}`}function Pn(){return[t.appView,t.settingsGroup,t.busyAction,t.loadingEntities?"loading":"ready",En(),An(),oe("setupComplete"),...wi.map(e=>oe(e))].join("|")}function ve(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function gs(){return[t.appView,t.busyAction,oe("openquattEnabled"),oe("openquattResumeAt"),oe("manualCoolingEnable"),oe("silentModeOverride"),oe("controlModeLabel"),oe("coolingPermitted"),oe("coolingRequestActive"),oe("coolingBlockReason"),oe("silentActive")].join("|")}function Wd(e){if(e.target.dataset.oqFirmwareConnectionConfirm){t.firmwareConnectionSwitchConfirmed=!!e.target.checked,p();return}const o=e.target.dataset.oqField;if(!o){if(e.target.dataset.oqQuickstartCicUrl!==void 0){t.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){t.quickStartThermostatSourceDraft=String(e.target.value||""),p();return}const n=e.target.dataset.oqAuthField;if(!n){const r=e.target.dataset.oqMqttField;if(!r)return;t.mqttNotice="",t.mqttError="",r==="enabled"?t.mqttDraftEnabled=!!e.target.checked:r==="broker"?t.mqttDraftBroker=String(e.target.value||""):r==="port"?t.mqttDraftPort=String(e.target.value||""):r==="username"?t.mqttDraftUsername=String(e.target.value||""):r==="password"?t.mqttDraftPassword=String(e.target.value||""):r==="baseTopic"?t.mqttDraftBaseTopic=String(e.target.value||""):r==="publishProfile"?t.mqttDraftPublishProfile=String(e.target.value||""):r==="essentialIntervalS"?t.mqttDraftEssentialIntervalS=String(e.target.value||""):r==="standardIntervalS"?t.mqttDraftStandardIntervalS=String(e.target.value||""):r==="diagnosticIntervalS"?t.mqttDraftDiagnosticIntervalS=String(e.target.value||""):r==="retainSnapshots"&&(t.mqttDraftRetainSnapshots=!!e.target.checked);return}t.authNotice="",t.authError="",n==="username"?t.authDraftUsername=String(e.target.value||""):n==="currentPassword"?t.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?t.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(t.authDraftConfirmPassword=String(e.target.value||""));return}if(e.target.dataset.oqPauseDraft){t.pauseResumeDraft=String(e.target.value||"");return}if(D[o]?.domain==="text"){t.inputDrafts[o]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(t.inputDrafts[o]=e.target.value);const n=ut(e.target.value);if(!Number.isNaN(n)){const r=be(o,e.target.value);if(t.drafts[o]=r,e.target.type==="range"){const a=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");a&&(a.textContent=_(o,r))}}}}function Bd(e){if(e.target.dataset.oqDevControl==="boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(e.target.value);return}if(e.target.dataset.oqBackupFileInput){const a=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",Pd(a);return}if(e.target.dataset.oqFirmwareUploadFileInput){const a=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",a?(t.updateManualUploadOpen=!0,t.updateManualUploadFile=a,t.updateManualUploadFileName=a.name||"",t.updateManualUploadError=""):at(),p();return}const o=e.target.dataset.oqField;if(!o)return;const n=D[o];if(!n)return;if(n.domain==="select"){Ln(o,String(e.target.value));return}if(n.domain==="number"){Pr(o,e.target.value);return}if(n.domain==="text"){ap(o,e.target.value);return}if(n.domain==="time"){const a=Ot(e.target.value);if(!a){t.controlError=`${n.name} verwacht tijd als HH:MM.`,p();return}rp(o,a);return}if(n.domain==="datetime"){const a=xe(e.target.value);if(!a){t.controlError=`${n.name} verwacht datum en tijd.`,p();return}ip(o,a);return}const r=e.target.dataset.oqMqttField;r&&(t.mqttNotice="",t.mqttError="",r==="enabled"?t.mqttDraftEnabled=!!e.target.checked:r==="broker"?t.mqttDraftBroker=String(e.target.value||""):r==="port"?t.mqttDraftPort=String(e.target.value||""):r==="username"?t.mqttDraftUsername=String(e.target.value||""):r==="password"?t.mqttDraftPassword=String(e.target.value||""):r==="baseTopic"?t.mqttDraftBaseTopic=String(e.target.value||""):r==="publishProfile"?t.mqttDraftPublishProfile=String(e.target.value||""):r==="essentialIntervalS"?t.mqttDraftEssentialIntervalS=String(e.target.value||""):r==="standardIntervalS"?t.mqttDraftStandardIntervalS=String(e.target.value||""):r==="diagnosticIntervalS"?t.mqttDraftDiagnosticIntervalS=String(e.target.value||""):r==="retainSnapshots"&&(t.mqttDraftRetainSnapshots=!!e.target.checked))}function Vd(e){const o=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(o){const c=o.querySelector("input[data-oq-field]");if(c&&(c.type==="time"||c.type==="datetime-local")&&typeof c.showPicker=="function")try{c.showPicker()}catch{}}const n=e.target.closest('[data-oq-action="toggle-settings-info"]'),r=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),s=e.target.closest("[data-oq-modal]");if(n){const c=n.dataset.infoId||"";t.settingsInfoOpen=t.settingsInfoOpen===c?"":c,p();return}const l=e.target.closest("[data-oq-action]"),d=t.interfacePanelOpen&&!a;if(!l){let c=!1;if(t.settingsInfoOpen&&!r&&(t.settingsInfoOpen="",c=!0),d&&(gn(!1),c=!0),s&&e.target===s){if(s.dataset.oqModal==="quickstart-forced")return;t.updateModalOpen&&(t.updateModalOpen=!1,c=!0),t.systemModal&&(Mn(),To(),t.systemModal="",c=!0)}c&&p();return}d&&l.dataset.oqAction!=="toggle-interface-panel"&&gn(!1);const u=l.dataset.oqAction;if(u==="set-mock-boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(l.dataset.boilerMode||"off");return}if(u==="toggle-interface-panel"){gn(!t.interfacePanelOpen),p();return}if(u==="toggle-dev-panel"){Ec(!t.devPanelOpen),p();return}if(u==="toggle-installation-monitoring-details"){e.preventDefault();const c=l.closest(".oq-settings-monitoring-details");t.installationMonitoringDetailsOpen=!(c&&c.hasAttribute("open")),p();return}if(u==="toggle-integration-diagnostics"){e.preventDefault();const c=l.closest(".oq-settings-integration-diagnostics");t.integrationDiagnosticsOpen=!(c&&c.hasAttribute("open")),p();return}if(u==="select-view"){if((l.dataset.viewId||"")==="trends"&&!It())return;const c=l.dataset.viewId||"overview";rt(c,{syncMode:"push"}),p(),ne(c==="settings"||c==="energy"?{forceBulk:!0}:{forceFast:!0});return}if(u==="select-trend-window"){if(l.disabled)return;Yn(Number(l.dataset.trendHours||24)),p(),Ar({force:!0}).then(c=>{c&&p()});return}if(u==="select-settings-group"){ko(l.dataset.groupId||we[0].id),p(),ne({forceBulk:!0});return}if(u==="open-update-modal"){t.updateModalOpen=!0,p(),ep().then(()=>{t.updateModalOpen&&!Fi()&&!t.updateCheckBusy&&!t.updateInstallBusy&&Da()});return}if(u==="open-webserver-log-modal"){Dp();return}if(u==="open-debug-recording-modal"){t.systemModal="debug-recording",t.debugRecordingError="",t.debugRecordingNotice="",p(),Fr();return}if(u==="open-login-modal"){t.systemModal="login",rs(),t.authNotice="",t.authError="",p(),hd({poll:!0});return}if(u==="open-api-security-modal"){t.systemModal="api-security",t.apiSecurityNotice="",t.apiSecurityError="",p(),Ft({force:!0});return}if(u==="open-mqtt-modal"){t.systemModal="mqtt",as(),p(),Go({force:!0});return}if(u==="copy-api-security-key"){Sd();return}if(u==="enable-api-security"){bd();return}if(u==="rotate-api-security"){vd();return}if(u==="disable-api-security"){wd();return}if(u==="restart-api-security"){fd();return}if(u==="save-mqtt-config"){yd();return}if(u==="flush-trend-history"){$o("trendHistoryFlush",{successNotice:"Trendhistorie is opgeslagen in flash.",errorPrefix:"Trendhistorie kon niet worden opgeslagen"});return}if(u==="open-connectivity-modal"){t.systemModal="connectivity",p();return}if(u==="open-restart-confirm"){t.systemModal="restart-confirm",p();return}if(u==="download-settings-backup"){Md();return}if(u==="open-settings-backup-import"){t.systemModal="settings-backup-import",p();return}if(u==="open-silent-settings-modal"){t.systemModal="silent-settings",p();return}if(u==="open-openquatt-pause-modal"){t.pauseResumeDraft=Qi(),t.systemModal="openquatt-pause",p();return}if(u==="enable-openquatt-now"){cp();return}if(u==="apply-openquatt-preset"){const c=Gi(l.dataset.pausePreset||"");t.pauseResumeDraft=c,fn(c);return}if(u==="apply-openquatt-indefinite"){fn("");return}if(u==="apply-openquatt-custom-pause"){if(!String(t.pauseResumeDraft||"").trim()){t.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",p();return}fn(t.pauseResumeDraft||"");return}if(u==="close-update-modal"){t.updateModalOpen=!1,t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.firmwareConnectionSwitchOpen=!1,t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,at(),p();return}if(u==="close-quickstart-modal"){t.quickStartModalOpen=!1,p();return}if(u==="open-quickstart-modal"){t.currentStep="generation",t.quickStartModalMode="wizard",t.quickStartModalOpen=!0,p();return}if(u==="open-generation-modal"){t.currentStep="generation",t.quickStartModalMode="generation",t.quickStartModalOpen=!0,p();return}if(u==="open-cm100-commissioning-modal"){t.systemModal="",rt("settings"),ko("service"),p(),ne({forceBulk:!0});return}if(u==="open-installation-monitoring"){t.systemModal="",rt("settings"),ko("service"),p(),ne({forceBulk:!0});return}if(u==="open-service-task-modal"){const c=String(l.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(c)&&(t.systemModal=`service-task-${c}`,p(),ne({forceBulk:!0}));return}if(u==="press-named-button"){const c=String(l.dataset.oqButtonKey||l.dataset.buttonKey||l.getAttribute("data-oq-button-key")||"").trim();if(c){c==="commissioningCm100Start"?(t.pendingCommissioningCm100Start=!0,t.commissioningTaskLock="cm100",t.commissioningBoilerHeatPowerDisplay=""):c==="commissioningCm100Stop"?(t.pendingCommissioningCm100Start=!1,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="",t.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestStart"?(t.pendingBoilerPowerTestStart=!0,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="boiler",t.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestAbort"||c==="boilerPowerTestApply"?t.commissioningTaskLock="boiler":c==="flowAutotuneStart"?(t.pendingFlowAutotuneStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="autotune"):c==="flowAutotuneAbort"||c==="flowAutotuneApply"?t.commissioningTaskLock="autotune":c==="airPurgeStart"?(t.pendingAirPurgeStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="purge"):c==="airPurgeAbort"?t.commissioningTaskLock="purge":c==="manualFlowStart"?(t.pendingManualFlowStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="manual-flow"):c==="manualFlowAbort"?t.commissioningTaskLock="manual-flow":c==="manualHpStart"?(t.pendingManualHpStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="manual-hp"):c==="hpWaterCalibrationStart"?(t.pendingHpWaterCalibrationStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.commissioningTaskLock="hp-water-calibration"):c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply"?t.commissioningTaskLock="hp-water-calibration":c==="manualHpAbort"&&(t.commissioningTaskLock="manual-hp");const m=[];c==="acknowledgeCompressorCyclingAlert"?m.push(..._n):c==="commissioningCm100Start"||c==="commissioningCm100Stop"?m.push("commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive"):c==="boilerPowerTestStart"||c==="boilerPowerTestAbort"||c==="boilerPowerTestApply"?m.push("commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower"):c==="flowAutotuneStart"||c==="flowAutotuneAbort"||c==="flowAutotuneApply"?m.push("commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi"):c==="airPurgeStart"||c==="airPurgeAbort"?m.push("commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode"):c==="hpWaterCalibrationStart"||c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply"?m.push("commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode"):c==="manualFlowStart"||c==="manualFlowAbort"||c==="manualFlowApplyHeating"||c==="manualFlowApplyCooling"?m.push("commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint"):(c==="manualHpStart"||c==="manualHpAbort")&&m.push("commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"),$o(c,m.length?{refreshKeys:m}:{})}return}if(u==="close-system-modal"){To(),Jo(),t.systemModal="",t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authNotice="",t.authError="",t.apiSecurityNotice="",t.apiSecurityError="",t.mqttNotice="",t.mqttError="",Mn(),p(),Dr();return}if(u==="clear-webserver-log-output"){Yo();return}if(u==="copy-webserver-log-output"){tm();return}if(u==="start-debug-recording"){fm(l.dataset.debugMinutes||15);return}if(u==="select-debug-recording-duration"){am(l.dataset.debugMinutes||15);return}if(u==="stop-debug-recording"){bm();return}if(u==="download-debug-recording"){qm();return}if(u==="copy-debug-recording"){km();return}if(u==="confirm-settings-backup-restore"){Ld();return}if(u==="confirm-restart"){$o("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"});return}if(u==="select-surface"){const c=l.dataset.surface==="native";if(t.nativeOpen===c){t.nativeOpen&&qn();return}t.nativeOpen=c,Si(t.nativeOpen?"native":"app"),t.controlError="",t.controlNotice="",t.settingsInfoOpen="",t.updateModalOpen=!1,To(),t.systemModal="",t.nativeOpen&&qn(),p(),Jn(),window.requestAnimationFrame(()=>{t.nativeOpen?t.nativeApp&&t.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}if(u==="toggle-overview-theme"){qc(t.overviewTheme==="light"?"dark":"light"),p();return}if(u==="select-hp-visual"){Mc(l.dataset.hpVisual==="compact"?"compact":"schematic"),p();return}if(u==="select-hp-layout"){Lc(l.dataset.hpLayout||"equal"),p();return}if(u==="select-step"){t.currentStep=l.dataset.stepId||"generation",p();return}if(u==="apply-quickstart-flow-source"){Ud();return}if(u==="refresh-quickstart-flow-signal"){Gd();return}if(u==="start-quickstart-flow-test"){Zd();return}if(u==="abort-quickstart-flow-test"){Jd();return}if(u==="apply-quickstart-thermostat-source"){Xd();return}if(u==="previous-step"){ni(-1),p();return}if(u==="next-step"){ni(1),p();return}if(u==="select-settings-option"){const c=l.dataset.selectKey||"",m=l.dataset.selectOption||"";c&&m&&String(E(c)||"")!==m&&Ln(c,m);return}if(u==="toggle-overview-control"){const c=l.dataset.controlKey||"",m=(l.dataset.controlState||"").toLowerCase();c&&(m==="on"||m==="off")&&zd(c,m==="on");return}if(u==="select-overview-control-option"){const c=l.dataset.controlKey||"",m=l.dataset.controlOption||"";c&&m&&String(E(c)||"")!==m&&Ln(c,m);return}if(u==="suggest-curve-fallback"){const c=es();c&&Pr("curveFallbackSupply",c.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");return}if(u==="apply"||u==="reset"){up(u);return}if(u==="run-firmware-check"){Da();return}if(u==="install-firmware-update"){tp();return}if(u==="install-firmware-connection-switch"){op();return}if(u==="toggle-firmware-connection-switch"){t.firmwareConnectionSwitchOpen=!t.firmwareConnectionSwitchOpen,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareConnectionSwitchOpen&&(t.updateManualUploadOpen=!1,at()),p();return}if(u==="toggle-firmware-upload"){t.updateManualUploadOpen?(t.updateManualUploadOpen=!1,at()):(t.updateManualUploadOpen=!0,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.updateManualUploadError=""),p();return}if(u==="upload-firmware-file"){np();return}if(u==="save-web-auth"){sp();return}if(u==="disable-web-auth"){lp();return}}function jd(e){const o=e.target.closest("[data-curve-key]");!o||!re()||(t.draggingCurveKey=o.dataset.curveKey||"",vs(e.clientY))}function _d(e){t.draggingCurveKey&&vs(e.clientY)}function Kd(){if(!t.draggingCurveKey)return;const e=t.draggingCurveKey,o=be(e,E(e));t.draggingCurveKey="",Pr(e,o,"Curvepunt bijgewerkt.")}async function Ln(e,o){const n=D[e];t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.entities[e]={...t.entities[e]||{},state:o,value:o},p();try{const r=await fetch(`${U(n.domain,n.name,"set")}?option=${encodeURIComponent(o)}`,{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=`${n.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.entities.firmwareUpdateChannel={...t.entities.firmwareUpdateChannel||{},state:o,value:o},hr(o),p(),await fr(),t.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(t.controlNotice="Logger level bijgewerkt.",t.systemModal==="webserver-logs"&&xo()):e==="webServerLogHistoryEnabled"?(enabled?(t.webServerLogHistoryLoaded=!1,xo()):Yo(),t.systemModal==="webserver-logs"&&p()):t.appView==="settings"?await W(pt(),"all"):await W(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Qe,...ro],"state"),e==="strategy"&&t.appView!=="settings"&&await W(re(o)?le.map(a=>a.key):Ht,"state")}catch(r){t.controlError=`${n.name} kon niet worden bijgewerkt. ${r.message}`}finally{t.busyAction="",p()}}async function zd(e,o){const n=D[e];if(n){t.busyAction=`switch-${e}`,t.controlNotice="",t.controlError="",p();try{const r=o?"turn_on":"turn_off",a=await fetch(U(n.domain,n.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.entities[e]={...t.entities[e]||{},value:o,state:o},t.controlNotice=`${n.name} ${o?"ingeschakeld":"uitgeschakeld"}.`,t.busyAction="",t.appView==="overview"?await W([...ao,...qe,"setupComplete",...Rt],"state"):t.appView==="settings"?await W(pt(),"all"):await W(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Qe,...ro],"state"),p()}catch(r){t.controlError=`${n.name} aanpassen mislukt (${r.message}).`,p()}finally{t.busyAction="",p()}}}async function Ud(){const e=mo();if(!e.canApply){t.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",p();return}t.busyAction="quickstart-flow-source",t.controlNotice="",t.controlError="",p();const o=async(n,r)=>{if(!y(n))return;const a=E(n);if(typeof r=="boolean"&&A(n)===r||typeof r!="boolean"&&String(a)===String(r))return;const s=await Ro(n,r);t.entities[n]={...t.entities[n]||{},value:s,state:s}};try{e.requiresCic?(await o("cicFeedUrl",e.normalizedDraftUrl),await o("cicPollingEnabled",!0),await o("flowSource","CIC"),t.quickStartCicFeedUrlDraft=null,t.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await o("qFlowSource",e.qFlowTarget),await o("flowSource","Outdoor unit"),t.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await W(Ye,"all")}catch(n){t.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${n.message}`}finally{t.busyAction="",p()}}async function Gd(){t.busyAction="quickstart-flow-refresh",t.controlNotice="",t.controlError="",p();try{await W(Ye,"all");const e=mo();t.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){t.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{t.busyAction="",p()}}async function hs(e,o){const n=D[e];if(!n||!y(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");const r=await fetch(U(n.domain,n.name,o?"turn_on":"turn_off"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`)}async function Qd(){const e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(n=>{t.optionalMissingEntities&&delete t.optionalMissingEntities[n],delete t.entities[n]}),await W(e,"all");const o=e.filter(n=>!t.entities[n]);if(o.length){const n=o.map(r=>D[r]?.name||r).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${n}.`)}}async function Yd(){for(let e=0;e<40;e+=1){await new Promise(o=>window.setTimeout(o,1e3));try{await W(Ye,"state")}catch{return}if(!A("quickFlowTest")){t.busyAction!=="quickstart-flow-test-abort"&&(t.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),p();return}}}async function Zd(){if(!mo().canRunFlowTest){t.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",p();return}t.busyAction="quickstart-flow-test-start",t.controlNotice="",t.controlError="",p();let o=!1;try{if(await Qd(),!A("cm100Active")){const a=D.commissioningCm100Start,s=await fetch(U(a.domain,a.name,"press"),{method:"POST"});if(!s.ok)throw new Error(`CM100 starten gaf HTTP ${s.status}`);o=!0}let n=A("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!n&&a<20;a+=1)await new Promise(s=>window.setTimeout(s,500)),await W(["commissioningStatus","cm100Active"],"state"),n=A("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";if(!n){const a=String(E("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await hs("quickFlowTest",!0),await W(Ye,"all");const r=String(E("commissioningStatus")||"").trim();if(!A("quickFlowTest"))throw new Error(r||"De waterpomptest kon niet worden gestart.");t.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",Yd()}catch(n){if(o&&!A("quickFlowTest"))try{const r=D.commissioningCm100Stop;await fetch(U(r.domain,r.name,"press"),{method:"POST"})}catch{}t.controlError=`Waterpomptest starten mislukt. ${n.message}`}finally{t.busyAction="",p()}}async function Jd(){t.busyAction="quickstart-flow-test-abort",t.controlNotice="",t.controlError="",p();try{await hs("quickFlowTest",!1),await W(Ye,"all"),t.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){t.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{t.busyAction="",p()}}async function Xd(){const e=jr();if(!e.canApply){t.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",p();return}t.busyAction="quickstart-thermostat-source",t.controlNotice="",t.controlError="",p();const o=async(n,r)=>{if(!y(n))return;const a=E(n);if(typeof r=="boolean"&&A(n)===r||typeof r!="boolean"&&String(a)===String(r))return;const s=await Ro(n,r);t.entities[n]={...t.entities[n]||{},value:s,state:s}};try{e.selectedSource==="OT thermostat"?await o("otEnabled",!0):e.selectedSource==="CIC"&&(await o("cicFeedUrl",e.normalizedDraftUrl),await o("cicPollingEnabled",!0),t.quickStartCicFeedUrlDraft=null),await o("roomTempSource",e.selectedSource),await o("roomSetpointSource",e.selectedSource),t.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await W(Vo,"all")}catch(n){t.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${n.message}`}finally{t.busyAction="",p()}}async function Da(){const e=D.checkFirmwareUpdates;if(e){t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateCheckBusy=!0,t.controlError="",t.controlNotice="",p();try{await Mr("current build",{poll:!1}),hr();const o=await fetch(U(e.domain,e.name,"press"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);await fr(),t.controlNotice="Firmwarecontrole bijgewerkt."}catch(o){t.controlError=`Firmwarecontrole mislukte. ${o.message}`}finally{t.updateCheckBusy=!1,p()}}}async function ep(){try{await W(Un,"all",{concurrency:st}),t.updateModalOpen&&p()}catch{}}async function Mr(e,o={}){const n=D.firmwareUpdateTarget;if(!n||!y("firmwareUpdateTarget"))return!1;const r=String(e||"").trim();if(!r)return!1;t.entities.firmwareUpdateTarget={...t.entities.firmwareUpdateTarget||{},state:r,value:r};const a=await fetch(`${U(n.domain,n.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.poll!==!1&&(hr(),await fr()),!0}async function tp(){const e=ce();if(e){t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,at(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion=Mt(e),t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.updateInstallMode="normal",t.updateInstallTargetConnection="",t.controlError="",t.controlNotice="",p();try{await Mr("current build"),t.updateInstallTargetVersion=Mt(ce()||{})||t.updateInstallTargetVersion;const o=await fetch(U("update","Firmware Update","install"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);await br()?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ge()||t.updateInstallTargetVersion,t.controlNotice=""):t.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(o){t.controlError=`OTA-update kon niet worden gestart. ${o.message}`}finally{cr(),p()}}}async function op(){const e=nr(),o=D.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!o)){if(!t.firmwareConnectionSwitchConfirmed){t.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",p();return}t.updateManualUploadOpen=!1,at(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallMode="connection-switch",t.updateInstallTargetConnection=e.targetConnection,t.updateInstallTargetVersion=ge()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.controlError="",t.controlNotice="",p();try{await Mr("alternate connection"),t.updateInstallTargetVersion=Mt(ce()||{})||ge()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,p();const n=await fetch(U(o.domain,o.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await br())t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ge()||t.updateInstallTargetVersion||"",t.firmwareConnectionSwitchConfirmed=!1,t.controlNotice="";else{const a=lt(e.targetConnection);t.controlNotice=`Verbindingswissel naar ${a} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(n){t.controlError=`Verbindingswissel kon niet worden gestart. ${n.message}`}finally{cr(),p()}}}async function np(){const e=t.updateManualUploadFile;if(!e){t.updateManualUploadError="Kies eerst een firmwarebestand.",p();return}t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion=ge()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.controlError="",t.controlNotice="",t.updateManualUploadError="",p();try{const o=new FormData;o.append("update",e,e.name||"firmware.bin");const n=await fetch("/update",{method:"POST",body:o});if(!n.ok)throw new Error(`HTTP ${n.status}`);t.updateManualUploadOpen=!1,at(),await br()?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ge()||t.updateInstallTargetVersion||"",t.controlNotice=""):t.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(o){t.updateManualUploadError=`Handmatige upload mislukte. ${o.message}`}finally{cr(),p()}}async function Pr(e,o,n=""){const r=D[e],a=be(e,o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.inputDrafts[e]=String(o??""),t.drafts[e]=a,p();try{const s=await fetch(`${U(r.domain,r.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!s.ok)throw new Error(`HTTP ${s.status}`);delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=n||`${r.name} bijgewerkt.`,await W(t.appView==="settings"?pt():[...new Set([e,"setupComplete","strategy",...Qe,...ro])],"state")}catch(s){t.inputDrafts[e]=String(a).replace(".",","),t.controlError=`${r.name} kon niet worden bijgewerkt. ${s.message}`}finally{t.busyAction="",p()}}async function rp(e,o){const n=D[e],r=Ot(o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",p();try{const a=await fetch(`${U(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.controlNotice=`${n.name} bijgewerkt.`,await W(t.appView==="settings"?pt():[e,"setupComplete"],"state")}catch(a){t.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",p()}}async function ap(e,o){const n=D[e],r=String(o||"").trim();t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.inputDrafts[e]=String(o??""),t.drafts[e]=r,p();try{const a=await fetch(`${U(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.entities[e]={...t.entities[e]||{},value:r,state:r},delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=`${n.name} bijgewerkt.`,await W(t.appView==="settings"?pt():[e,"setupComplete"],"state")}catch(a){t.inputDrafts[e]=r,t.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",p()}}async function Hn(e,o){const n=D[e],r=xe(o)||Zt,a=await fetch(`${U(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.entities[e]={...t.entities[e]||{},value:r,state:r},r}async function fs(e,o){const n=D[e],r=o?"turn_on":"turn_off",a=await fetch(U(n.domain,n.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.entities[e]={...t.entities[e]||{},value:o,state:o},o}async function bs(){await W([...new Set([...ao,...qe,"setupComplete",...Rt])],"state")}async function ip(e,o){const n=D[e],r=xe(o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",p();try{await Hn(e,r),t.controlNotice=`${n.name} bijgewerkt.`,await W(t.appView==="settings"?pt():[e,"setupComplete","openquattEnabled"],"state")}catch(a){t.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",p()}}async function sp(){const e=t.authStatus||{},o=e.enabled===!0,n=e.setup_window_active===!0,r=String(t.authDraftCurrentPassword||""),a=String(t.authDraftUsername||"").trim(),s=String(t.authDraftNewPassword||""),l=String(t.authDraftConfirmPassword||"");if(!a||!s){t.authError="Vul een gebruikersnaam en wachtwoord in.",p();return}if(s!==l){t.authError="De twee wachtwoorden zijn niet gelijk.",p();return}if(o&&!r){t.authError="Vul je huidige wachtwoord in.",p();return}if(!o&&!n){t.authError="Houd de herstelknop 5 seconden vast.",p();return}if(!e.csrf_token){t.authError="Logingegevens laden nog. Probeer het zo opnieuw.",p();return}t.authBusy=!0,t.authError="",t.authNotice="",p();try{const d=new URLSearchParams;d.set("csrf_token",e.csrf_token),d.set("current_password",r),d.set("new_username",a),d.set("new_password",s);const u=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:d.toString()}),c=await u.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!u.ok||!c.ok)throw new Error(c.error||`HTTP ${u.status}`);await Dt({force:!0}),t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authDraftUsername=String(t.authStatus?.username||a).trim(),t.authNotice=o?"Login aangepast.":"Login staat nu aan.",t.authError="",p()}catch(d){t.authError=`Opslaan is mislukt. ${d.message}`,p()}finally{t.authBusy=!1,p()}}async function lp(){const e=t.authStatus||{};if(!e.enabled){t.authNotice="Login staat al uit.",t.authError="",p();return}const o=String(t.authDraftCurrentPassword||"");if(!o){t.authError="Vul je huidige wachtwoord in.",p();return}if(!e.csrf_token){t.authError="Logingegevens laden nog. Probeer het zo opnieuw.",p();return}t.authBusy=!0,t.authError="",t.authNotice="",p();try{const n=new URLSearchParams;n.set("csrf_token",e.csrf_token),n.set("current_password",o);const r=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:n.toString()}),a=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!a.ok)throw new Error(a.error||`HTTP ${r.status}`);await Dt({force:!0}),t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authDraftUsername="",t.authNotice="Login staat nu uit.",t.authError="",p()}catch(n){t.authError=`Uitzetten is mislukt. ${n.message}`,p()}finally{t.authBusy=!1,p()}}async function fn(e){const o=xe(e);if(e&&!o){t.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",p();return}if(o&&!y("openquattResumeAt")){t.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",p();return}t.busyAction="openquatt-regulation",t.controlNotice="",t.controlError="",p();let n=!1;try{y("openquattResumeAt")&&(await Hn("openquattResumeAt",o||Zt),n=!!o),await fs("openquattEnabled",!1),t.pauseResumeDraft=o?$n(o):"",t.systemModal="",t.controlNotice=o?`Openquatt regeling is tijdelijk uitgeschakeld tot ${qr(o)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await bs()}catch(r){if(n&&y("openquattResumeAt"))try{await Hn("openquattResumeAt",Zt)}catch{}t.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${r.message}`}finally{t.busyAction="",p()}}async function cp(){t.busyAction="openquatt-regulation",t.controlNotice="",t.controlError="",p();try{await fs("openquattEnabled",!0),t.pauseResumeDraft="",t.systemModal="",t.controlNotice="Openquatt regeling is weer actief.",await bs()}catch(e){t.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{t.busyAction="",p()}}async function up(e){const o=D[e];t.busyAction=e,t.controlError="",t.controlNotice="",p();try{const n=await fetch(U(o.domain,o.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);t.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await W(["setupComplete"],"state"),e==="reset"&&(t.currentStep=Bo[0].id,t.quickStartModalMode="wizard",t.quickStartModalOpen=!0),t.quickStartModalOpen=e!=="apply",rt("overview",{syncMode:"replace"}),ne({forceFast:!0})}catch(n){t.controlError=`Actie mislukt voor "${o.name}". ${n.message}`}finally{t.busyAction="",p()}}function dp(){window.requestAnimationFrame(()=>{if(!t.root||t.systemModal!=="service-task-hp-water-calibration")return;const e=t.root.querySelector("[data-oq-service-task-scroller]"),o=t.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!o)return;const n=e.getBoundingClientRect(),r=o.getBoundingClientRect(),a=e.scrollTop+r.top-n.top-24;e.scrollTop=Math.max(0,a)})}async function $o(e,o={}){const n=D[e];if(n){t.busyAction=e,t.controlError="",t.controlNotice="",p();try{const r=await fetch(U(n.domain,n.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort"].includes(e)||(To(),t.systemModal=""),t.controlNotice=o.successNotice||`${n.name} gestart.`,o.reconnectMode&&gr(o.reconnectMode),Array.isArray(o.refreshKeys)&&o.refreshKeys.length&&await W(o.refreshKeys,"state")}catch(r){e==="commissioningCm100Start"?(t.pendingCommissioningCm100Start=!1,t.commissioningTaskLock=""):e==="boilerPowerTestStart"?(t.pendingBoilerPowerTestStart=!1,t.commissioningTaskLock=""):e==="flowAutotuneStart"?(t.pendingFlowAutotuneStart=!1,t.commissioningTaskLock=""):e==="airPurgeStart"?(t.pendingAirPurgeStart=!1,t.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock=""):e==="manualFlowStart"?(t.pendingManualFlowStart=!1,t.commissioningTaskLock=""):e==="manualHpStart"&&(t.pendingManualHpStart=!1,t.commissioningTaskLock=""),t.controlError=`${o.errorPrefix||`Actie mislukt voor "${n.name}"`}. ${r.message}`}finally{t.busyAction="",p(),e==="hpWaterCalibrationApply"&&dp()}}}function vs(e){const o=t.root?t.root.querySelector(".oq-helper-curve-svg"):null;if(!o||!t.draggingCurveKey)return;const n=o.getBoundingClientRect(),r=22,a=180,s=(e-n.top)/n.height*240,d=70-(Math.min(r+a,Math.max(r,s))-r)/a*50,u=be(t.draggingCurveKey,d);String(E(t.draggingCurveKey))!==String(u)&&(t.drafts[t.draggingCurveKey]=u,p())}function Qo({key:e,value:o,meta:n,controlClass:r,inputClass:a="oq-helper-input",unitMarkup:s=""}){return`
      <label class="${r}">
        <input
          class="${a}"
          type="number"
          data-oq-field="${i(e)}"
          min="${n.min}"
          max="${n.max}"
          step="${n.step}"
          value="${i(o)}"
          ${t.loadingEntities?"disabled":""}
        >
        ${s}
      </label>
    `}function pp(){const e=[];e.push(re()?"Stooklijn":"Power House");const o=String(E(re()?"curveControlProfile":"phResponseProfile")||"").trim();o&&e.push(`profiel ${o}`);const n=String(E("flowControlMode")||"").trim();return n&&e.push(`flow ${n==="Manual PWM"?"handmatig":"setpoint"}`),n==="Manual PWM"&&y("manualIpwm")?e.push(`iPWM ${_("manualIpwm")}`):y("flowSetpoint")&&e.push(`flow ${_("flowSetpoint")}`),y("dayMax")&&e.push(`dag ${_("dayMax")}`),y("silentMax")&&e.push(`silent ${_("silentMax")}`),y("maxWater")&&e.push(`max water ${_("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function y(e){const o=t.entities[e];return!!(o&&(o.state!==void 0||o.value!==void 0))}function V(e,o="\u2014"){const n=t.entities[e];if(!n)return o;if(typeof n.state=="string"&&n.state.trim()!=="")return n.state;const r=n.value??n.state;return r==null||r===""?o:typeof r=="boolean"?r?"Aan":"Uit":typeof r=="number"&&!Number.isNaN(r)&&n.uom?`${r} ${n.uom}`:String(r)}function P(e){const o=Number(E(e));return Number.isNaN(o)?NaN:o}function ws(e){const o=String(e||"").toLowerCase();return o.includes("cop")||o.includes("eer")}function ys(e){const o=String(e||"");if(o==="totalEer"){const n=P("totalCoolingPower"),r=P("coolingPowerInput"),a=Number.isNaN(r)?P("totalPower"):r;return!Number.isNaN(n)&&!Number.isNaN(a)&&a>=5?n/a:NaN}if(o==="totalCop"){const n=P("totalHeat"),r=P("heatingPowerInput"),a=Number.isNaN(r)?P("totalPower"):r;return!Number.isNaN(n)&&!Number.isNaN(a)&&a>=5?n/a:NaN}return NaN}function Yt(e,o=""){const n=String(t.entities[e]?.uom||"").trim();return n||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||o}function $e(e){const o=t.entities[e],n=ys(e);if(!o)return Number.isNaN(n)?"\u2014":F(n,1,Yt(e));const r=P(e);if(Number.isNaN(r))return Number.isNaN(n)?V(e):F(n,1,Yt(e));const a=r>0||Number.isNaN(n)?r:n,s=ws(e)?1:0;return F(a,s,Yt(e))}function A(e){const o=t.entities[e];if(!o)return!1;if(typeof o.value=="boolean")return o.value;const n=String(o.state??o.value??"").toLowerCase();return n==="on"||n==="true"||n==="1"}function It(){return!y("trendHistoryEnabled")||A("trendHistoryEnabled")}function Ss(){const e=t.entities.setupComplete;if(!e)return null;const o=String(e.state??e.value??"").trim().toLowerCase();return!o||o==="unknown"||o==="unavailable"?null:o==="on"||o==="true"||o==="1"?!0:o==="off"||o==="false"||o==="0"?!1:null}function mp(){return`
      <div class="oq-helper-app-nav">
        ${jn.filter(e=>e.id!=="trends"||It()).map(e=>`
          <button
            class="oq-helper-app-tab ${t.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${i(e.id)}"
          >
            <span>${i(e.label)}</span>
          </button>
        `).join("")}
      </div>
    `}function gp(e=t.appView){return jn.find(o=>o.id===e)?.label||"OpenQuatt"}function Fa(){if(typeof document>"u")return;if(t.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}const e=gp();document.title=`${e} \u2022 OpenQuatt`}function Ia(){if(typeof document>"u")return;if(t.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");const e=t.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}const Wa="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",hp="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==",qs=250;function ks(){if(typeof window>"u")return[];const e=window.__OQ_DEV_WEBSERVER_LOGS__,o=typeof e=="function"?e():e;return Array.isArray(o)?o.map(n=>String(n||"")).filter(n=>n.trim()!==""):[]}function Wt(){return typeof window>"u"?!1:ks().length>0}function fp(){return`${so()}/events`}function bp(){return`${so()}/openquatt/logs/recent`}function No(){const e=t.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;const o=String(e.state??e.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function vp(){return t.nativeOpen?"Niet beschikbaar":Wt()?"Voorbeeld":t.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function wp(e){const o=Math.max(0,Math.floor(Number(e)/1e3)),n=Math.floor(o/3600),r=Math.floor(o%3600/60),a=o%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Cs(e){const o=Number(e)||0;if(o>9466848e5){const n=e instanceof Date?e:new Date(o),r={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(n)}catch{return n.toLocaleString("nl-NL",r)}}return wp(o)}function yp(e){const o=Number(e)||0;if(o>9466848e5)return new Date(o).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});const n=Math.max(0,Math.floor(o/1e3)),r=Math.floor(n/3600),a=Math.floor(n%3600/60),s=n%60;return`Sinds opstart: ${r}u ${a}m ${s}s`}function Sp(){return t.nativeOpen?"Niet beschikbaar":Wt()?No()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":No()?"Buffer aan":"Buffer uit"}function qp(){return No()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function Lr(){return t.entities?.debugLevel||null}function Ts(e=Lr()){const o=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return o.length?o:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function kp(e=Lr()){const o=String(e?.value??e?.state??"").trim(),n=Ts(e);return n.includes(o)?o:n.includes("INFO")?"INFO":n[0]||""}function $s(e,o=null){if(!e||!o)return!1;const n=Number(e.seq),r=Number(o.seq);if(Number.isFinite(n)&&Number.isFinite(r)&&n===r)return!0;const a=String(e.raw??e.text??"").trim(),s=String(o.raw??o.text??"").trim();if(!a||a!==s)return!1;const l=Number(e.receivedAt??e.ts??0),d=Number(o.receivedAt??o.ts??0);return Math.abs(l-d)<=2e3}function Cp(e,o){const n=Number(e.receivedAt??e.ts??0),r=Number(o.receivedAt??o.ts??0);if(n!==r)return n-r;const a=Number(e.seq??0),s=Number(o.seq??0);return a!==s?a-s:String(e.raw??"").localeCompare(String(o.raw??""))}function Es(e,{prepend:o=!1}={}){if(!Array.isArray(e)||e.length===0)return;const n=o?[...e,...t.webServerLogEntries]:[...t.webServerLogEntries,...e];n.sort(Cp);const r=[];for(const a of n){const s=r[r.length-1]||null;$s(a,s)||r.push(a)}t.webServerLogEntries=r.slice(-qs)}function Hr(e,o={}){const n=_p(e).trimEnd(),r=Number(o.receivedAt),a=Number(o.seq);return{raw:e,text:n,tone:Kp(e),receivedAt:Number.isFinite(r)?r:Date.now(),seq:Number.isFinite(a)?a:void 0}}function Tp(e,o){const r=Math.max(0,o-e-1)*9e4;return Date.now()-r}function $p(){const e=ks(),o=e.length;return e.map((n,r)=>Hr(n,{receivedAt:Tp(r,o),seq:r+1}))}function Ep(){const e=Zo();e&&(e.scrollTop=e.scrollHeight)}function Xe(){const e=Zo();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Rr(e)}:null}function Ap(e){if(!e)return;const o=Zo();if(!o)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}const n=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,n)}function ze(e,o=!0){if(!e)return;const n=Number(t.webServerLogScrollRestoreToken||0)+1;t.webServerLogScrollRestoreToken=n;const r=()=>{t.webServerLogScrollRestoreToken!==n||t.systemModal!=="webserver-logs"||Ap(e)};if(o){window.requestAnimationFrame(r);return}r()}function As(){return t.root?t.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}function Mp(){const e=As();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Rr(e)}:null}function Pp(e){if(!e)return;const o=As();if(!o)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}const n=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,n)}function Ba(e,o=!0){if(!e)return;const n=Number(t.cm100CommissioningScrollRestoreToken||0)+1;t.cm100CommissioningScrollRestoreToken=n;const r=()=>{t.cm100CommissioningScrollRestoreToken!==n||t.systemModal!=="cm100-commissioning"||Pp(e)};if(o){window.requestAnimationFrame(r);return}r()}function Ms(){return t.root?t.root.querySelector("[data-oq-service-task-scroller]"):null}function Lp(){const e=Ms();return e?{scrollTop:e.scrollTop}:null}function Hp(e){if(!e)return;const o=Ms();o&&(o.scrollTop=Math.max(0,e.scrollTop))}function Va(e,o=!0){if(!e)return;const n=Number(t.serviceTaskModalScrollRestoreToken||0)+1;t.serviceTaskModalScrollRestoreToken=n;const r=()=>{t.serviceTaskModalScrollRestoreToken!==n||!String(t.systemModal||"").startsWith("service-task-")||Hp(e)};if(o){window.requestAnimationFrame(r);return}r()}async function xo(e={}){if(t.nativeOpen||typeof window.fetch!="function")return;const o=e.scrollState||Xe(),n=Number(t.webServerLogHistoryRequestToken||0)+1;t.webServerLogHistoryRequestToken=n,t.webServerLogHistoryLoading=!0,t.webServerLogHistoryError="";try{const r=await window.fetch(bp(),{headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.json();if(t.systemModal!=="webserver-logs"||t.webServerLogHistoryRequestToken!==n)return;const s=Np(a);t.webServerLogHistoryLoaded=!0,s.length>0&&(Es(s,{prepend:!0}),t.webServerLogRecentTail=s.slice(-4).map(l=>String(l.raw??l.text??"")),t.webServerLogRecentAnchorAt=Date.now())}catch(r){t.systemModal==="webserver-logs"&&t.webServerLogHistoryRequestToken===n&&(t.webServerLogHistoryError=r instanceof Error?r.message:"Recente logs konden niet worden opgehaald.")}finally{t.webServerLogHistoryRequestToken===n&&(t.webServerLogHistoryLoading=!1),t.systemModal==="webserver-logs"&&t.webServerLogHistoryRequestToken===n&&(p(),ze(o))}}function Rp(e,o=0){if(!e||typeof e!="object")return null;const n=String(e.raw??"").trim()||String(e.message??"").trim();return n?Hr(n,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??o)}):null}function Np(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((n,r)=>Rp(n,r+1)).filter(n=>n!==null)}function xp(e){if(!e||!Array.isArray(t.webServerLogRecentTail)||t.webServerLogRecentTail.length===0||Date.now()-Number(t.webServerLogRecentAnchorAt||0)>2500)return!1;const n=String(e.raw??e.text??"").trim();return n?t.webServerLogRecentTail.includes(n):!1}function Op(e,o=t.webServerLogEntries){return!e||!Array.isArray(o)||o.length===0?!1:o.some(n=>$s(e,n))}function Dp(){Wt()&&t.webServerLogEntries.length===0&&(t.webServerLogEntries=$p()),t.webServerLogCopyMessage="",t.webServerLogCopyError="",t.systemModal="webserver-logs",p(),W(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(t.systemModal!=="webserver-logs")return;const e=Xe();p(),ze(e)}),Ep(),(!t.webServerLogHistoryLoaded||t.webServerLogEntries.length===0)&&xo()}function Yo(){t.webServerLogEntries=[],t.webServerLogError="",t.webServerLogHistoryError="",t.webServerLogHistoryLoading=!1,t.webServerLogHistoryLoaded=!1,t.webServerLogScrollRestoreToken=Number(t.webServerLogScrollRestoreToken||0)+1,t.webServerLogCopyMessage="",t.webServerLogCopyError="",t.webServerLogHistoryRequestToken+=1,t.webServerLogRecentTail=[],t.webServerLogRecentAnchorAt=0,t.systemModal==="webserver-logs"&&p()}function ja(){const e=Xe();it(),t.webServerLogEnabled=null,t.webServerLogConnected=!1,Yo(),t.systemModal==="webserver-logs"&&xo({scrollState:e})}function _a(){if(Wt()){it();return}if(!(t.mounted&&!t.nativeOpen&&t.systemModal==="webserver-logs")){it();return}if(t.webServerLogEnabled===!1){it();return}t.webServerLogSource||Fp()}function Fp(){if(Wt()){t.webServerLogEnabled=!0,t.webServerLogConnected=!1,t.webServerLogError="",p();return}if(typeof window.EventSource!="function"){t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError="Deze browser ondersteunt geen live logstream.",p();return}try{const e=new window.EventSource(fp());t.webServerLogSource=e,e.addEventListener("open",Ip),e.addEventListener("ping",Wp),e.addEventListener("log",Vp),e.onerror=Bp}catch(e){t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",it(),p()}}function it(){const e=t.webServerLogSource;if(e)try{e.close()}catch{}t.webServerLogSource=null,t.webServerLogConnected=!1}function Ip(){if(!t.webServerLogSource||t.nativeOpen)return;const e=t.systemModal==="webserver-logs"?Xe():null;t.webServerLogEnabled=!0,t.webServerLogConnected=!0,t.webServerLogError="",p(),ze(e)}function Wp(){if(!t.webServerLogSource||t.nativeOpen)return;const e=t.systemModal==="webserver-logs"?Xe():null;t.webServerLogEnabled=!0,t.webServerLogConnected||(t.webServerLogConnected=!0,t.webServerLogError="",p(),ze(e))}function Bp(){if(!t.webServerLogSource)return;const e=t.systemModal==="webserver-logs"?Xe():null;t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError="De live logstream kon niet worden geopend.",it(),p(),ze(e)}function Vp(e){if(!t.webServerLogSource||!e||typeof e.data!="string")return;const o=Xe(),n=jp(e.data);if(!n)return;const r=n.split(/\r?\n/).filter(u=>u.trim()!=="");if(r.length===0)return;const s=r.map(u=>Hr(u)).filter(u=>!xp(u)&&!Op(u));if(s.length===0)return;Es(s);const l=Up(),d=Zo();zp(l),Gp(s,l),t.webServerLogEnabled=!0,d&&o&&ze(o,!1)}function jp(e){const o=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!o)return"";const n=o.trim();if(n.startsWith("{")&&n.endsWith("}")||n.startsWith("[")&&n.endsWith("]"))try{const r=JSON.parse(n),a=typeof r=="string"?r:r?.message??r?.msg??r?.text??r?.data??r?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return o}function _p(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function Kp(e){const o=String(e??""),n=Array.from(o.matchAll(/\x1b\[([0-9;]*)m/g));for(let s=n.length-1;s>=0;s-=1){const l=n[s][1].split(";").map(d=>Number(d)).filter(d=>Number.isFinite(d));for(let d=l.length-1;d>=0;d-=1){const u=l[d];if(u===31||u===91)return"error";if(u===33||u===93)return"warning";if(u===32||u===92)return"info";if(u===36||u===96||u===34||u===35)return"debug";if(u===37||u===90||u===38||u===97)return"verbose"}}const r=o.match(/\[(E|W|I|D|V|VV)\]/i);if(!r)return"plain";const a=r[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function zp(e){for(;t.webServerLogEntries.length>qs;)t.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function Up(){return t.root?t.root.querySelector("[data-oq-webserver-log-output]"):null}function Zo(){return t.root?t.root.querySelector("[data-oq-webserver-log-scroller]"):null}function Rr(e){return e?e.scrollHeight-e.scrollTop-e.clientHeight<48:!1}function Gp(e,o){if(!(!o||e.length===0)){o.dataset.webServerLogEmpty==="true"&&(o.dataset.webServerLogEmpty="false",o.innerHTML="");for(const n of e)o.insertAdjacentHTML("beforeend",Ps(n))}}function Ps(e){const o=Cs(e.receivedAt),n=yp(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${i(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${i(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${i(n)}">${i(o)}</time>
      <span class="oq-webserver-log-entry-text">${i(e.text||e.raw||" ")}</span>
    </div>
  `}function Qp(e=t.webServerLogEntries){return e.length?e.map(o=>Ps(o)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function Yp(){const e=[];return t.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),t.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${i(t.webServerLogCopyMessage)}</span>
      </div>
    `),t.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${i(t.webServerLogCopyError)}</p>`),t.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${i(t.webServerLogHistoryError)}</p>`),t.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${i(t.webServerLogError)}</p>`),e.length?e.join(""):""}function Zp(){const e=No(),o=t.loadingEntities||t.busyAction==="switch-webServerLogHistoryEnabled",n=Sp(),r=qp(),a=Jp();return`
    <div class="oq-webserver-log-history-shell">
      <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="webserverLogHistory">
        <div class="oq-settings-system-row-copy">
          <p class="oq-settings-system-row-label">RAM log history</p>
          <strong class="oq-settings-system-row-value">${i(n)}</strong>
          <p class="oq-settings-system-row-note">${i(r)}</p>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="webServerLogHistoryEnabled"
          data-control-state="${e?"off":"on"}"
          aria-pressed="${e?"true":"false"}"
          ${o?"disabled":""}
        >
          ${e?"Uitschakelen":"Inschakelen"}
        </button>
      </div>
      ${a}
    </div>
  `}function Jp(){const e=Lr();if(!e)return"";const o=Ts(e),n=kp(e),r=t.loadingEntities||t.busyAction==="save-debugLevel";return`
    <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="debugLevel">
      <div class="oq-settings-system-row-copy">
        <p class="oq-settings-system-row-label">Logger level</p>
        <strong class="oq-settings-system-row-value">${i(n||"Onbekend")}</strong>
        <p class="oq-settings-system-row-note">Past het runtime logniveau aan voor nieuwe firmwaremeldingen.</p>
      </div>
      <label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${r?"disabled":""}>
          ${o.map(a=>`<option value="${i(a)}" ${a===n?"selected":""}>${i(a)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>
    </div>
  `}function Xp(){return t.webServerLogEntries.map(e=>{const o=String(e.raw??e.text??"").trimEnd();return o.trim()?`${Cs(e.receivedAt)} ${o}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function em(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="fixed",o.style.top="-1000px",o.style.opacity="0",document.body.appendChild(o),o.focus(),o.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(o)}return n}async function tm(){const e=Xp();if(t.webServerLogCopyMessage="",t.webServerLogCopyError="",!e){t.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",p();return}try{if(!await em(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");t.webServerLogCopyMessage=`${t.webServerLogEntries.length} logregel${t.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(o){t.webServerLogCopyError=o instanceof Error?o.message:"Kopi\xEBren naar het klembord is niet gelukt."}t.systemModal==="webserver-logs"&&p()}function om(){const e=Wt();return`
    <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal" role="dialog" aria-modal="true" aria-labelledby="oq-webserver-log-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-webserver-log-modal-title">OpenQuatt log</h2>
          </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit logboek">&times;</button>
        </div>
        <p class="oq-helper-modal-copy">${e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde."}</p>
        ${Zp()}
        ${Yp()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${t.webServerLogEntries.length===0?"true":"false"}">
            ${Qp()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${t.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `}function Ue(){return t.debugRecordingDeviceStatus?Math.max(0,Number(t.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(t.debugRecordingSamples)?t.debugRecordingSamples.length:0}function Rn(e){const o=Math.max(0,Math.round(Number(e||0)/1e3)),n=Math.floor(o/3600),r=Math.floor(o%3600/60),a=o%60;return n>0?`${n}u ${String(r).padStart(2,"0")}m`:r>0?`${r}m ${String(a).padStart(2,"0")}s`:`${a}s`}function nm(){if(t.debugRecordingDeviceStatus)return Math.max(0,Number(t.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!t.debugRecordingStartedAt)return 0;const e=t.debugRecordingActive?Date.now():Number(t.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(t.debugRecordingStartedAt||e))}function Nr(){return t.debugRecordingDeviceStatus&&t.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":t.debugRecordingActive?"Bezig met opnemen":Ue()>0?"Voltooid":"Niet gestart"}function xr(){return t.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":Ue()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":t.debugRecordingDeviceStatus&&t.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function rm(){const e=Number(t.debugRecordingSelectedMinutes||15);return Sn.map(n=>Number(n.minutes)).includes(e)?e:Number(Sn[0]?.minutes||15)}function am(e){t.debugRecordingActive||(t.debugRecordingSelectedMinutes=Math.max(1,Number(e)||15),t.debugRecordingNotice="",t.debugRecordingError="",p())}function im(){return t.debugRecordingDeviceStatus?Math.max(0,Number(t.debugRecordingDeviceStatus.remaining_s||0)*1e3):t.debugRecordingActive?Math.max(0,Number(t.debugRecordingEndsAt||0)-Date.now()):0}function sm(){if(t.debugRecordingDeviceStatus){const n=Math.max(1,Number(t.debugRecordingDeviceStatus.duration_s||0)),r=Math.max(0,Number(t.debugRecordingDeviceStatus.elapsed_s||0));return!t.debugRecordingActive&&Ue()>0?100:Math.max(0,Math.min(100,r/n*100))}if(!t.debugRecordingActive||!t.debugRecordingStartedAt||!t.debugRecordingEndsAt)return Ue()>0?100:0;const e=Math.max(1,Number(t.debugRecordingEndsAt)-Number(t.debugRecordingStartedAt)),o=Math.max(0,Date.now()-Number(t.debugRecordingStartedAt));return Math.max(0,Math.min(100,o/e*100))}function Ls(e=t.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function lm(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}function Hs(e){if(e?.recording?.active)return;const o=Ls(e);if(o){t.debugRecordingAcknowledgedId=o;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",o)}catch{}}}function Rs(){const e=t.debugRecordingDeviceStatus,o=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&o===0)return"";const n=!!e.active;if(!n&&Ls(e)===t.debugRecordingAcknowledgedId)return"";const r=Rn(Math.max(0,Number(e.remaining_s||0))*1e3),a=n?`Debug loopt \xB7 ${r}`:"Debug klaar",s=n?`Debugopname loopt, nog ${r}`:"Debugopname klaar om te downloaden";return`
    <button
      class="oq-debug-recording-header-status${n?" oq-debug-recording-header-status--active":" oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${i(s)}"
      title="${i(s)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${i(a)}</span>
    </button>
  `}function cm(){if(!t.root)return;const e=t.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;const o=e.querySelector(".oq-settings-system-row-value"),n=e.querySelector(".oq-settings-system-row-note");o&&(o.textContent=Nr()),n&&(n.textContent=xr())}function Or(e){const o={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return o[e]||o.status}function um(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${Or(e)}</span>`}function Gt(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${Or(e)}</span>`}function dm(){return[...Ct]}function pm(){const e=[];return Ct.forEach((o,n)=>{const r=t.entities?.[o]||{},a=String(r.uom??r.unit_of_measurement??"").trim();a&&e.push([n,a])}),e}function mm(e){return Array.isArray(e)?e.map((o,n)=>o===null?null:[n,o]).filter(Boolean):[]}function Ns(){t.debugRecordingTimer&&(window.clearTimeout(t.debugRecordingTimer),t.debugRecordingTimer=null)}function Jo(){t.debugRecordingDevicePollTimer&&(window.clearTimeout(t.debugRecordingDevicePollTimer),t.debugRecordingDevicePollTimer=null)}function Bt(e){return`${so()}/openquatt/debug-recording/${e}`}function Xo(e){const o=e&&typeof e=="object"?e:{};t.debugRecordingDeviceStatus=o,t.debugRecordingActive=!!o.active,t.debugRecordingStartedAt=o.active||Number(o.sample_count||0)>0?Date.now()-Math.max(0,Number(o.elapsed_s||0)*1e3):0,t.debugRecordingEndsAt=o.active?Date.now()+Math.max(0,Number(o.remaining_s||0)*1e3):0,t.debugRecordingLastSampleAt=Number(o.sample_count||0)>0?Date.now():0}function xs(){Xo({ok:!1,available:!1,active:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function gm(){const e=await window.fetch(Bt("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const o=await e.json();return Xo(o),o}function Dr(e=2e3){Jo(),t.debugRecordingActive&&(t.debugRecordingDevicePollTimer=window.setTimeout(()=>{Fr({silent:!0})},Math.max(0,Number(t.systemModal==="debug-recording"?e:5e3)||0)))}async function Fr(e={}){e.silent||(t.debugRecordingBusy=!0,t.debugRecordingError="",p());try{await gm(),!t.debugRecordingActive&&e.silent&&(t.debugRecordingNotice="Debugopname is afgerond."),Dr()}catch(o){xs(),t.debugRecordingError=`Status kon niet worden opgehaald. ${o.message||String(o)}`}finally{e.silent||(t.debugRecordingBusy=!1),!e.silent||t.systemModal==="debug-recording"?p():(Pu(),cm())}}async function hm(){const e=ns(Ct,"state");let o=null;for(let n=0;n<e.length;n+=1){const r=await window.fetch(Bt(`configure?reset=${n===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[n].body});if(!r.ok)throw new Error(`configuratie HTTP ${r.status}`);o=await r.json()}if(Number(o?.entity_field_count||0)!==Ct.length)throw new Error(`onvolledige debugset (${Number(o?.entity_field_count||0)}/${Ct.length})`);return o}async function fm(e){const o=Math.max(1,Number(e)||15);Ns(),Jo(),t.debugRecordingBusy=!0,t.debugRecordingError="",t.debugRecordingNotice="",t.debugRecordingSamples=[],t.debugRecordingEvents=[],t.debugRecordingInitialValues=null,t.debugRecordingLastValues=null,t.debugRecordingDeviceBundle=null,t.debugRecordingLastSampleAt=0,t.debugRecordingSequence=0,p();try{await hm();const n=await window.fetch(Bt(`start?duration_s=${encodeURIComponent(o*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();Xo(r),Dr()}catch(n){xs(),t.debugRecordingError=`Debugopname kon niet worden gestart. ${n.message||String(n)}`}finally{t.debugRecordingBusy=!1,p()}}async function bm(e={}){Ns(),Jo(),t.debugRecordingBusy=!0,t.debugRecordingError="",p();try{const o=await window.fetch(Bt("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);const n=await o.json();Xo(n),t.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(o){t.debugRecordingError=`Debugopname kon niet worden gestopt. ${o.message||String(o)}`}finally{t.debugRecordingBusy=!1,p()}}function Ka(e={}){const o=t.debugRecordingActive?Date.now():Number(t.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:t.debugRecordingStartedAt?new Date(Number(t.debugRecordingStartedAt)).toISOString():"",ended_at:o?new Date(o).toISOString():"",active:!!t.debugRecordingActive,duration_s:t.debugRecordingStartedAt?Math.round(Math.max(0,o-Number(t.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(ic/1e3),sample_count:Ue(),column_count:Ct.length,storage:"browser"},columns:dm(),units:pm(),initial:mm(t.debugRecordingInitialValues),samples:t.debugRecordingSamples||[],events:t.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function Oo(e){return JSON.stringify(e)}function vm(){const e=Number(t.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([Oo(Ka())]).size}catch{return Oo(Ka()).length}}function wm(e){const o=Math.max(0,Number(e)||0);return o>=1024*1024?`${(o/1024/1024).toFixed(1)} MB`:o>=1024?`${(o/1024).toFixed(1)} kB`:`${Math.round(o)} B`}function ym(e,o){const n=new Blob([o],{type:"application/json"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function Sm(e){const o=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),n=String(o).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${n}.oqdebug.json`}async function qm(){if(Ue()===0){t.debugRecordingError="Er is nog geen debugopname om te downloaden.",p();return}t.debugRecordingBusy=!0,t.debugRecordingError="",p();try{const e=await window.fetch(Bt("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const o=await e.json();t.debugRecordingDeviceBundle=o,ym(Sm(o),Oo(o)),Hs(o),t.debugRecordingNotice="Supportbestand gedownload."}catch{t.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{t.debugRecordingBusy=!1,p()}}async function km(){if(Ue()===0){t.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",p();return}t.debugRecordingBusy=!0,t.debugRecordingError="",p();try{const e=await window.fetch(Bt("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const o=await e.json();if(t.debugRecordingDeviceBundle=o,!await ls(Oo(o)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");Hs(o),t.debugRecordingNotice="Supportbestand gekopieerd."}catch{t.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{t.debugRecordingBusy=!1,p()}}function Cm(){const e=t.debugRecordingActive,o=Ue(),n=t.debugRecordingBusy,r=wm(vm()),a=Array.isArray(t.debugRecordingDeviceBundle?.events)?t.debugRecordingDeviceBundle.events.length:Array.isArray(t.debugRecordingEvents)?t.debugRecordingEvents.length:0,s=rm(),l=im(),d=sm(),u=o>0,c=`${d.toFixed(1)}%`,m=[{icon:"status",label:"Status",value:Nr()},{icon:"clock",label:"Duur",value:Rn(nm())},{icon:"samples",label:"Samples",value:String(o)},{icon:"changes",label:"Statuswijzigingen",value:String(a)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${r}`},{icon:"storage",label:"Opslag",value:t.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],f=t.debugRecordingError?{kind:"error",icon:"alert",text:t.debugRecordingError}:t.debugRecordingNotice?{kind:"success",icon:"check",text:t.debugRecordingNotice}:null;return`
    <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-debug-recording-modal" role="dialog" aria-modal="true" aria-labelledby="oq-debug-recording-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-debug-recording-modal-title">Debugopname</h2>
          </div>
          <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit debugopname">\xD7</button>
        </div>
        <p class="oq-helper-modal-copy">${i(xr())}</p>
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${Or("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>Nog ${i(Rn(l))}</span>
                <strong>${i(Math.round(d).toString())}%</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${i(c)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${m.map(g=>`
              <div class="oq-debug-recording-stat">
                <dt>${um(g.icon)}${i(g.label)}</dt>
                <dd>${i(g.value)}</dd>
              </div>
            `).join("")}
          </dl>
        </section>
        <section class="oq-debug-recording-duration" aria-label="Duur">
          <h3>Duur</h3>
          <div class="oq-debug-recording-segments" role="group" aria-label="Kies opnameduur">
            ${Sn.map(g=>{const b=Number(g.minutes)===s;return`
                <button
                  class="oq-debug-recording-segment${b?" oq-debug-recording-segment--selected":""}"
                  type="button"
                  data-oq-action="select-debug-recording-duration"
                  data-debug-minutes="${g.minutes}"
                  aria-pressed="${b?"true":"false"}"
                  ${e||n?"disabled":""}
                >
                  ${i(g.label)}
                </button>
              `}).join("")}
          </div>
        </section>
        <div class="oq-debug-recording-actions">
          ${e?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${n?"disabled":""}>${Gt("stop")}Stop opname</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${s}" ${n||t.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Gt("play")}Start opname</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!u||n?"disabled":""}>${Gt("download")}Download supportbestand</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!u||n?"disabled":""}>${Gt("copy")}Kopieer data</button>
          ${f?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${f.kind}" role="status">
              ${Gt(f.icon)}
              <span>${i(f.text)}</span>
            </p>
          `:""}
        </div>
      </section>
    </div>
  `}function Vt(e,o,n){return n?`
      <div class="oq-settings-info${t.settingsInfoOpen===e?" is-open":""}" data-oq-settings-info="${i(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${i(e)}"
          aria-label="${i(`Uitleg bij ${o}`)}"
          aria-expanded="${t.settingsInfoOpen===e?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${t.settingsInfoOpen===e?"":"hidden"}>
          <p>${i(n)}</p>
        </div>
      </div>
    `:""}function ae(e,o,n,r,a="",s=""){return`<article class="oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${i(e)}"><div class="oq-settings-field-head"><h3>${i(o)}</h3>${Vt(e,o,n)}</div><div class="oq-settings-field-control">${r}</div>${s}</article>`}function Z(e,o,n,r,a=""){return ae(e,o,n,`<div class="oq-settings-static-value">${i(r)}</div>`,a)}function ee(e,o={}){const n=typeof o=="number"?{decimals:o}:o||{},r=t.entities[e];if(!r)return"\u2014";const a=Number(r.value);if(!Number.isNaN(a)){const l=Number.isInteger(a)?0:Number.isFinite(n.decimals)?n.decimals:1;let d=a.toFixed(Math.max(0,l));return n.trimTrailingZeros&&d.includes(".")&&(d=d.replace(/\.?0+$/,"")),`${d}${r.uom?` ${r.uom}`:""}`}return String(r.state??r.value??"").trim()||"\u2014"}function en(e,o="\u2014"){const n=t.entities[e];if(!n)return o;const r=String(n.state??n.value??"").trim();return!r||r==="0"||r==="\u2014"?o:r}function Pt(e,o="",n=2){const r=Number(e);return Number.isFinite(r)?`${r.toFixed(Math.max(0,n))}${o?` ${o}`:""}`:"\u2014"}function se(e,o=2){return ee(e,{decimals:o})}function Ir(e,o,n){const r=P(o),a=P(n);if(Number.isFinite(r)&&Number.isFinite(a))return r-a;const s=P(e);return Number.isFinite(s)?s:NaN}function za(e,o){const n=P(e),r=P(o),a=Number.isNaN(n)?"Lvl \u2014":`Lvl ${Math.round(n)}`,s=Number.isNaN(r)?"\u2014 Hz":`${Math.round(r)} Hz`;return`${a} (${s})`}function Tm(e){const o=String(e||"").trim().toUpperCase();return!o||o==="0"||o==="IDLE"||o==="CM100 READY"||o==="CM100 STOPPED"||o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED")?!1:o.includes("REQUESTED")||o.includes("WAITING")||o.includes("WACHTEN")||o.includes("SETTLING")||o.includes("MEASUR")||o.includes("COOLDOWN")||o.includes("RUNNING")||o.includes("VALIDATING")||o.includes("STARTED")||o.includes("RECOVER")||o.includes("PHASE")||o.includes("STEADY")||o.includes("PULSE")||o.includes("STABILIZE")||o.includes("STEP")}function X(e){const o=String(e||"").trim().toUpperCase();return o?o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED"):!1}function ot(e){const o=String(e||"").trim().toUpperCase();return o.includes("WAITING_FOR_CM100")||o.includes("CM100 REQUESTED")||o.includes("WACHTEN OP CM100")||o==="WACHTEN"}function vt(e){return Tm(e)&&!ot(e)}function wt(e,o="IDLE"){const n=en(e,o),r=String(n??"").trim();return!r||r==="0"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN"?o:r}function Os(){const e=en("commissioningStatus",""),o=A("cm100Active"),n=String(e||"").trim().toUpperCase();return(o||n==="CM100 READY"||n==="CM100 STOPPED"||n.includes("DONE")||n.includes("FAILED")||n.includes("ABORT")||n.includes("APPLIED")||n.includes("REFUSED"))&&(t.pendingCommissioningCm100Start=!1),n&&n!=="0"?n==="IDLE"&&t.pendingCommissioningCm100Start?"CM100 REQUESTED":n:t.pendingCommissioningCm100Start?"CM100 REQUESTED":o?"CM100 READY":"IDLE"}function $m(){if(!A("trendHistoryEnabled")||!y("trendHistoryFlashAvailable"))return"";const e=[{key:"trendHistoryFlashOldest",label:"Oudste punt"},{key:"trendHistoryFlashNewest",label:"Nieuwste punt"},{key:"trendHistoryFlashLastFlush",label:"Laatste opslag"}],o=ee("trendHistoryFlashAvailable"),n=ee("trendHistoryFlashNewest"),r=ee("trendHistoryFlashSize"),a=ee("trendHistoryFlashWrites"),s=`
        <div class="oq-settings-trend-stats-shell">
        <div class="oq-settings-trend-stats-summary">
          <div class="oq-settings-trend-stats-summary-copy">
            <span class="oq-settings-trend-stats-summary-label">Flashhistorie</span>
            <strong class="oq-settings-trend-stats-summary-value">${i(o)}</strong>
            <p class="oq-settings-trend-stats-summary-note">Nieuwste punt in flash: ${i(n)}.</p>
          </div>
          <div class="oq-settings-trend-stats-badges" aria-label="Flashhistorie statistieken">
            <div class="oq-settings-trend-stats-badge">
              <span class="oq-settings-trend-stats-badge-label">Grootte</span>
              <strong class="oq-settings-trend-stats-badge-value">${i(r)}</strong>
            </div>
            <div class="oq-settings-trend-stats-badge">
              <span class="oq-settings-trend-stats-badge-label">Schrijfacties</span>
              <strong class="oq-settings-trend-stats-badge-value">${i(a)}</strong>
            </div>
          </div>
        </div>
        <div class="oq-settings-trend-stats-grid">
          ${e.map(l=>`
            <div class="oq-settings-trend-stat">
              <span class="oq-settings-trend-stat-label">${i(l.label)}</span>
              <strong class="oq-settings-trend-stat-value">${i(ee(l.key))}</strong>
            </div>
          `).join("")}
        </div>
      </div>
    `;return ae("trendHistoryFlashStats","Flashhistorie","Overzicht van wat er nu in flash is opgeslagen.",s,"oq-settings-field--span-2",A("trendHistoryFlashEnabled")?'<p class="oq-settings-action-note">Wordt ongeveer elk uur opgeslagen en ook bij herstart of OTA.</p>':'<p class="oq-settings-action-note">Nieuwe opslag in flash staat uit; bestaande flashhistorie blijft beschikbaar.</p>')}function Ee(e){const o=String(e||"").trim();return o?{None:"Geen",Manual:"Handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[ci]:"Stooklijn",[li]:"Power House","Dew point required":"Dauwpuntmeting vereist","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[o]||o:""}function Ds(e){const o=String(e||"").trim();return o?{Ready:"Gereed","Waiting for room request":"Wacht op kamervraag","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[o]||o:""}function tn({key:e,option:o,currentValue:n,busy:r,copy:a="",meta:s="",image:l="",imageAlt:d="",infoTitle:u="",infoCopy:c="",infoId:m=""}){const f=o===n,g=`
      <button
        class="oq-settings-choice-card${f?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${c?" oq-settings-choice-card--has-info":""}"
        type="button"
        data-oq-action="select-settings-option"
        data-select-key="${i(e)}"
        data-select-option="${i(o)}"
        aria-pressed="${f?"true":"false"}"
        ${r?"disabled":""}
      >
        <span class="oq-settings-choice-head">
          <span class="oq-settings-choice-title">${i(Ee(o))}</span>
          ${s?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${i(s)}</span></span>`:""}
        </span>
        ${l?`<span class="oq-settings-choice-media"><img src="${i(l)}" alt="${i(d||Ee(o))}" loading="lazy" decoding="async"></span>`:""}
        ${a?`<span class="oq-settings-choice-copy">${i(a)}</span>`:""}
      </button>
    `;if(!c)return g;const b=u||Ee(o),k=m||`${e}-${o}`;return`
      <article class="oq-settings-choice-card-shell${f?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
        ${g}
        ${Vt(k,b,c)}
      </article>
    `}function jt(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function Lt(e,o,n,r=""){if(!y(e))return"";const a=t.entities[e]||{},s=String(E(e)||""),l=jt(a);return ae(e,o,n,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${i(e)}" ${t.loadingEntities?"disabled":""}>${l.map(d=>`<option value="${i(d)}" ${d===s?"selected":""}>${i(Ee(d))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,r)}function Fs(e,o,n="Aan",r="Uit"){return`<span class="oq-settings-integration-pill${o?" is-on":""}" data-oq-switch-pill="${i(e)}" data-on-label="${i(n)}" data-off-label="${i(r)}">${i(o?n:r)}</span>`}function on(e,o,n,r,a="Aan",s="Uit",l=!0){const d=(u,c)=>{const m=c===(n?"on":"off");return`
        <button
          class="oq-settings-integration-toggle-button${m?" is-active":""}"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="${i(e)}"
          data-control-state="${i(c)}"
          aria-pressed="${m?"true":"false"}"
          ${r?"disabled":""}
        >
          ${i(u)}
        </button>
      `};return`
      <div class="oq-settings-compact-switch-row">
        ${l?Fs(e,n,a,s):""}
        <div class="oq-settings-integration-toggle" role="group" aria-label="${i(o)}">
          ${d(s,"off")}
          ${d(a,"on")}
        </div>
      </div>
    `}function Em(e,o,n="",r=""){const a=o?n:r;return a?`<p data-oq-switch-copy="${i(e)}" data-on-copy="${i(n)}" data-off-copy="${i(r)}">${i(a)}</p>`:""}function Ua(e,o,n,r="",a="",s=""){if(!y(e))return"";const l=!!E(e),d=t.loadingEntities||t.busyAction===`switch-${e}`;return ae(e,o,n,`
        <div class="oq-settings-compact-switch-field">
          ${on(e,o,l,d)}
          ${Em(e,l,r,a)}
        </div>
      `,s)}function Am(e,o,n,r,a=""){if(!y(e))return"";const s=!!E(e),l=t.loadingEntities||t.busyAction===`switch-${e}`;return ae(e,o,n,`
        <div class="oq-settings-compact-switch-field">
          ${on(e,o,s,l)}
          ${r?`<p>${i(r)}</p>`:""}
        </div>
      `,a)}function bn(e,o,n){if(!y(e))return"";const r=!!E(e),a=t.loadingEntities||t.busyAction===`switch-${e}`;return`
      <article class="oq-settings-integration-card" data-oq-settings-field="${i(e)}">
        <div class="oq-settings-integration-card-head">
          <h4>${i(o)}</h4>
          ${Fs(e,r)}
        </div>
        <p>${i(n)}</p>
        ${on(e,o,r,a,"Aan","Uit",!1)}
      </article>
    `}function Mm(e,o,n,r,a,s="",l={}){const d=t.loadingEntities||t.busyAction===e,u=l.disabled===!0,c=l.buttonClass||"oq-helper-button oq-helper-button--ghost",m=l.note||"";return ae(e,o,n,`
        <div class="oq-settings-action-field">
          <button
            class="${c}"
            type="button"
            data-oq-action="${i(a)}"
            ${l.buttonKey?`data-oq-button-key="${i(l.buttonKey)}"`:""}
            ${d||u?"disabled":""}
          >
            ${i(r)}
          </button>
          ${m?`<p class="oq-settings-action-note">${i(m)}</p>`:""}
        </div>
      `,s)}function He(e,o,n="oq-helper-button oq-helper-button--ghost",r=!1){return`
      <button
        class="${n}"
        type="button"
        data-oq-action="press-named-button"
        data-oq-button-key="${i(e)}"
        ${r?"disabled":""}
      >
        ${i(o)}
      </button>
    `}function kt({active:e,startKey:o,stopKey:n,startLabel:r,stopLabel:a,startClass:s="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:d=!1,stopDisabled:u=!1}){return He(e?n:o,e?a:r,e?l:s,e?u:d)}function Pm(e,o,n,r,a=""){if(!y(e))return"";const s=t.entities[e]||{},l=String(E(e)||""),d=jt(s),u=t.loadingEntities||t.busyAction===`save-${e}`,c=`
      <div class="oq-settings-choice-grid">
        ${d.map(m=>{const f=r[m]||"",g=typeof f=="string"?f:f.copy||"",b=typeof f=="string"?"":f.image||"",k=typeof f=="string"?"":f.alt||"";return tn({key:e,option:m,currentValue:l,busy:u,copy:g,image:b,imageAlt:k})}).join("")}
      </div>
    `;return ae(e,o,n,c,a)}function J(e,o,n,r="",a={}){if(!y(e))return"";const s=Je(e),l=Re(e),d=a.unitOverride||s.uom||"",u=a.showUnit!==!1&&!!d,c=u&&a.unitMode!=="outside",m=Qo({key:e,value:l,meta:s,controlClass:`oq-helper-control${u&&!c?" oq-helper-control--split":""}${c?" oq-helper-control--suffix":""}`,unitMarkup:u?c?`<span class="oq-helper-unit-chip">${i(d)}</span>`:`<span class="oq-helper-unit">${i(d)}</span>`:""});return ae(e,o,n,m,r,a.footerMarkup||"")}function _e(e,o,n,r="",a={}){if(!y(e))return"";const s=Je(e),l=be(e,E(e)),d=a.minLabel||`${s.min}${s.uom||""}`,u=a.maxLabel||`${s.max}${s.uom||""}`,c=a.valueLabel||_(e,l);return ae(e,o,n,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${i(d)}</span><strong>${i(c)}</strong><span>${i(u)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${i(e)}" min="${s.min}" max="${s.max}" step="${s.step}" value="${l}" ${t.loadingEntities?"disabled":""}></label>`,r)}function Ga(e,o,n,r={}){if(!y(e))return"";const a=Je(e),s=Re(e),l=r.compact===!0,d=r.embedded===!0,u=r.infoId||e,c=r.showCopy!==!1;return`
      <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${d?" oq-settings-mini-field--embedded":""}">
        <div class="oq-settings-mini-copy">
          <div class="oq-settings-mini-copy-head">
            <h5>${i(o)}</h5>
            ${n?Vt(u,o,n):""}
          </div>
          ${n&&c?`<p>${i(n)}</p>`:""}
        </div>
        ${Qo({key:e,value:s,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${i(a.uom)}</span>`:""})}
      </article>
    `}function Qa(e,o,n,r=""){if(!y(e))return"";const a=Tn(E(e));return ae(e,o,n,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${i(e)}" value="${i(a)}" ${t.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,r||"oq-settings-field--time")}function te(e,o,n,r,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${i(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${i(o)}</h3><p>${i(n)}</p></div>${r}</section>`}function Lm(){const e=Ae.has(t.settingsGroup)?t.settingsGroup:we[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${we.map(o=>`
          <button
            class="oq-settings-group-button${o.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${i(o.id)}"
            aria-pressed="${o.id===e?"true":"false"}"
          >
            <span class="oq-settings-group-button-label">${i(o.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function Hm(){const e=Ae.has(t.settingsGroup)?t.settingsGroup:we[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[Um(),Gm(),Im(),lg(),Jm(),sg()]:e==="service"?[Vm(),Km()]:e==="heating"?[Zm()]:e==="cooling"?[ug()]:e==="integrations"?[Xm(),eg(),og()]:[Qm(),Ym(),tg(),ng(),ig()]).filter(Boolean).join("")}
      </div>
    `}function Rm(){if(!t.root||t.appView!=="settings")return!1;const e=t.root.querySelector(".oq-settings-group-nav"),o=t.root.querySelector(".oq-settings-group-stack");if(!e||!o)return!1;const n=Ae.has(t.settingsGroup)?t.settingsGroup:we[0].id;if(n==="service")return!1;const r=e.querySelectorAll(".oq-settings-group-button");if(r.length!==we.length)return!1;r.forEach(h=>{const v=String(h.dataset.groupId||"")===n;h.classList.toggle("is-active",v),h.setAttribute("aria-pressed",v?"true":"false")}),o.querySelectorAll(".oq-settings-info").forEach(h=>{const w=String(h.dataset.oqSettingsInfo||""),v=t.settingsInfoOpen===w;h.classList.toggle("is-open",v);const S=h.querySelector(".oq-settings-info-popover");S&&(S.hidden=!v);const $=h.querySelector(".oq-settings-info-button");$&&$.setAttribute("aria-expanded",v?"true":"false")}),o.querySelectorAll("[data-oq-settings-field]").forEach(h=>{const w=String(h.dataset.oqSettingsField||"");if(!w)return;const v=h.querySelector(".oq-settings-static-value");if(v){const q=V(w);v.textContent!==q&&(v.textContent=q)}h.querySelectorAll("select[data-oq-field]").forEach(q=>{const M=String(q.dataset.oqField||w),x=String(E(M)||"");q.value!==x&&(q.value=x)});const S=h.querySelector("input[data-oq-field]");if(S){const q=String(S.dataset.oqField||w),M=String(Re(q)||"");S.value!==M&&(S.value=M)}const $=h.querySelector(".oq-helper-slider-meta strong");if($&&S&&S.type==="range"){const q=_(w,be(w,E(w)));$.textContent!==q&&($.textContent=q)}}),o.querySelectorAll("[data-select-key]").forEach(h=>{const w=String(h.dataset.selectKey||""),v=String(h.dataset.selectOption||""),S=String(E(w)||""),$=v===S;h.classList.toggle("is-active",$),h.setAttribute("aria-pressed",$?"true":"false"),w==="strategy"?h.disabled=t.loadingEntities||t.busyAction==="save-strategy":w==="hpGeneration"?h.disabled=t.loadingEntities||t.busyAction==="save-hpGeneration":w==="curveControlProfile"?h.disabled=t.loadingEntities||t.busyAction==="save-curveControlProfile":w==="phResponseProfile"&&(h.disabled=t.loadingEntities||t.busyAction==="save-phResponseProfile");const q=h.closest(".oq-settings-choice-card-shell");q&&q.classList.toggle("is-active",$)});const a=o.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){const h=String(E("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",h),a.querySelectorAll("input[data-oq-field]").forEach(v=>{const S=String(v.dataset.oqField||""),$=String(Re(S)||"");v.value!==$&&(v.value=$)})}o.querySelectorAll("[data-control-key]").forEach(h=>{const w=String(h.dataset.controlKey||""),v=String(h.dataset.controlState||""),S=!!E(w),$=v===(S?"on":"off");h.classList.toggle("is-active",$),h.setAttribute("aria-pressed",$?"true":"false"),h.disabled=t.loadingEntities||t.busyAction===`switch-${w}`}),o.querySelectorAll("[data-oq-switch-pill]").forEach(h=>{const w=String(h.dataset.oqSwitchPill||""),v=!!E(w),S=String(h.dataset.onLabel||"Aan"),$=String(h.dataset.offLabel||"Uit"),q=v?S:$;h.classList.toggle("is-on",v),h.textContent!==q&&(h.textContent=q)}),o.querySelectorAll("[data-oq-switch-copy]").forEach(h=>{const w=String(h.dataset.oqSwitchCopy||""),v=!!E(w),S=String(h.dataset.onCopy||""),$=String(h.dataset.offCopy||""),q=v?S:$;h.hidden=!q,h.textContent!==q&&(h.textContent=q)});const s=o.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(s){const h=s.querySelector(".oq-settings-quickstart-status-value"),w=s.querySelector(".oq-settings-quickstart-status-copy"),v=s.querySelector('button[data-oq-action="open-generation-modal"]'),S=lo(),$=t.entities.hpGeneration||{},q=y("hpGeneration")&&jt($).length>0;if(h){const M=S||"Onbekend";h.textContent!==M&&(h.textContent=M)}if(w){const M="Pas dit aan als je een andere Quatt Hybrid hebt.";w.textContent!==M&&(w.textContent=M)}v&&(v.disabled=!q||t.loadingEntities||t.busyAction==="save-hpGeneration")}const l=o.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){const h=l.querySelector(".oq-settings-quickstart-status-value"),w=l.querySelector(".oq-settings-quickstart-status-copy"),v=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),S=Os(),$=A("cm100Active");h&&h.textContent!==S&&(h.textContent=S);const q=$?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";w&&w.textContent!==q&&(w.textContent=q),v&&(v.disabled=t.loadingEntities)}const d=o.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(d){const h=d.querySelector(".oq-settings-quickstart-status-value"),w=d.querySelector(".oq-settings-quickstart-status-copy"),v=d.querySelector('button[data-oq-action="reset"]'),S=t.complete===!0?"Afgerond":t.complete===!1?"Open":"Laden...",$=t.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":t.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";h&&h.textContent!==S&&(h.textContent=S),w&&w.textContent!==$&&(w.textContent=$),v&&(v.disabled=t.busyAction==="reset")}const u=o.querySelectorAll("[data-oq-access-security-item]");u.length&&u.forEach(h=>{const w=String(h.dataset.oqAccessSecurityItem||""),v=h.querySelector(".oq-settings-quickstart-status-value"),S=h.querySelector(".oq-settings-quickstart-status-copy"),$=h.querySelector("button[data-oq-action]");if(w==="login"){const q=wr(),M=yr();v&&v.textContent!==q&&(v.textContent=q),S&&S.textContent!==M&&(S.textContent=M)}else if(w==="api"){const q=Br(),M=Vr();v&&v.textContent!==q&&(v.textContent=q),S&&S.textContent!==M&&(S.textContent=M)}$&&($.disabled=!1)});const c=o.querySelectorAll("[data-oq-mqtt-item]");c.length&&c.forEach(h=>{const w=h.querySelector(".oq-settings-quickstart-status-value"),v=h.querySelector(".oq-settings-quickstart-status-copy"),S=h.querySelector('button[data-oq-action="open-mqtt-modal"]'),$=$r(),q=Er();w&&w.textContent!==$&&(w.textContent=$),v&&v.textContent!==q&&(v.textContent=q),S&&(S.disabled=!1)});const m=o.querySelector(".oq-settings-system-summary");if(m){const h=m.querySelectorAll(".oq-settings-system-row"),w={uptime:rr(),ip:ar(),updates:uo(),datetime:Ni(),espTemp:Vi(),restart:"Opnieuw opstarten"};h.forEach($=>{const q=$.querySelector(".oq-settings-system-row-value"),M=$.dataset.oqDiagnosticsRow||"";if(q&&Object.prototype.hasOwnProperty.call(w,M)){const x=w[M];q.textContent!==x&&(q.textContent=x)}});const v=m.querySelector('button[data-oq-action="open-update-modal"]');v&&(v.disabled=!1);const S=m.querySelector('button[data-oq-action="open-restart-confirm"]');if(S){const $=t.busyAction==="restartAction";S.disabled=$,S.textContent=$?"Herstarten...":"Herstarten"}}o.querySelectorAll(".oq-settings-hp-offset-row").forEach(h=>{const w=String(h.dataset.oqSettingsField||""),v=String(h.dataset.oqHpOffsetRawKey||""),S=String(h.dataset.oqHpOffsetFinalKey||"");if(!w||!v||!S)return;const $=Je(w),q=Ir(v,S,w),M=ut(Re(w)),x=Number.isFinite(q)&&Number.isFinite(M)?Pt(q+M,$.uom||"\xB0C",2):se(S,2),O=h.querySelector("[data-oq-hp-offset-active]");if(O){const T=`${se(S,2)} actief`;O.textContent!==T&&(O.textContent=T)}const G=h.querySelector("[data-oq-hp-offset-raw]");if(G){const T=Number.isFinite(q)?Pt(q,$.uom||"\xB0C",2):se(v,2);G.textContent!==T&&(G.textContent=T)}const C=h.querySelector("[data-oq-hp-offset-final]");C&&C.textContent!==x&&(C.textContent=x)});const f=o.querySelector(".oq-settings-curve-shell"),g=re();if(!!f!==g)return!1;const b=!!a,k=String(E("phResponseProfile")||"")==="Custom";return b===k}function Nm(e=!1){const o=es();return o?`
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside${e?" oq-curve-fallback-suggest--helper":""}">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${i(o.label)}</strong>
          <span>${i(o.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${t.loadingEntities||t.busyAction==="save-curveFallbackSupply"||o.isCurrent?"disabled":""}
        >
          ${o.isCurrent?"Actief":"Gebruik suggestie"}
        </button>
      </div>
    `:""}function Is(){return`
      <div class="oq-settings-curve-grid">
        ${le.map(e=>J(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${J("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:Nm()})}
      </div>
    `}function Ws(e="oq-settings-grid"){return`
      <div class="${i(e)}">
        ${Lt("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function Bs(e="oq-settings-grid"){const o=[J("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),J("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${i(e)}">
        ${Lt("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${Qc()?J("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):o}
      </div>
    `}function xm(e="oq-settings-grid"){const o=[J("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),J("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return o.length?`
      <div class="${i(e)}">
        ${o.join("")}
      </div>
    `:""}function yo(e="",o=""){const n=String(e||"").trim().toUpperCase(),r=String(o||"").trim().toLowerCase(),a=n.split(/[^A-Z0-9]+/).filter(Boolean),s=c=>{const m=String(c||"").trim().toUpperCase();return m?n===m||n.startsWith(`${m}:`)||n.startsWith(`${m} `)||a.includes(m):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!n||n==="\u2014"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN")return{phase:"Wachten",percent:0};if(n.includes("WAITING")||n.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(r!=="cm100"&&(n==="IDLE"||n==="CM0 - STANDBY"||n==="CM100 READY"||n==="CM100 STOPPED"||n==="GEPAUZEERD"))return{phase:"Wachten",percent:0};const u=(l[r]||[]).find(c=>c.match.some(m=>s(m)));return u||(n.includes("DONE")||n.includes("APPLIED")?{phase:"Klaar",percent:100}:n.includes("ABORT")||n.includes("FAILED")||n.includes("REFUSED")?{phase:"Afgebroken",percent:100}:r==="cm100"&&n.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function yt({taskKey:e,title:o,copy:n,subcopy:r="",status:a,statusCopy:s,progressTask:l,actions:d="",controls:u="",metrics:c="",className:m=""}){return`
      <article class="oq-settings-commissioning-card${m?` ${i(m)}`:""}" data-oq-commissioning-task="${i(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${i(o)}</h3>
            <p>${i(n)}</p>
            ${r?`<p class="oq-settings-commissioning-card-subcopy">${i(r)}</p>`:""}
          </div>
        </div>
        ${d?`<div class="oq-settings-commissioning-card-actions">${d}</div>`:""}
        ${u}
        <div class="oq-settings-quickstart-status oq-settings-quickstart-status--compact oq-settings-commissioning-card-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${i(a)}</strong>
              <p class="oq-settings-quickstart-status-copy">${i(s)}</p>
            </div>
          </div>
        </div>
        ${c?`<div class="oq-settings-grid oq-settings-commissioning-metrics">${c}</div>`:""}
      </article>
    `}function Vs(e="oq-settings-grid"){return`
      <div class="${i(e)}">
        ${J("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${J("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${Dm()}
      </div>
    `}function js(e="oq-settings-grid"){const o=Om();return`
      <div class="${i(e)}">
        ${J("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${o}
    `}function Om(){const e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(n=>y(n.offsetKey)&&y(n.finalKey));if(!e.length)return"";const o=n=>{const r=Je(n.offsetKey),a=Ir(n.rawKey,n.finalKey,n.offsetKey),s=ut(Re(n.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(s)?Pt(a+s,r.uom||"\xB0C",2):se(n.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${i(n.offsetKey)}" data-oq-hp-offset-raw-key="${i(n.rawKey)}" data-oq-hp-offset-final-key="${i(n.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${i(n.label)}</strong>
            <span data-oq-hp-offset-active>${i(se(n.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${i(`${n.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${i(Number.isFinite(a)?Pt(a,r.uom||"\xB0C",2):se(n.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${Qo({key:n.offsetKey,value:Re(n.offsetKey),meta:r,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:r.uom?`<span class="oq-helper-unit-chip">${i(r.uom)}</span>`:""})}
            </label>
            <span class="oq-settings-hp-offset-operator">=</span>
            <div class="oq-settings-hp-offset-readout oq-settings-hp-offset-final">
              <span>Na wijziging</span>
              <strong data-oq-hp-offset-final>${i(l)}</strong>
            </div>
          </div>
        </article>
      `};return`
      <div class="oq-settings-subpanel oq-settings-hp-offset-panel">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Sensorcorrecties</p>
          <h4>Water in/out offsets</h4>
          <p>Raw is de ongecorrigeerde sensorwaarde. Actief is de temperatuur die OpenQuatt nu gebruikt: raw plus correctie.</p>
        </div>
        <div class="oq-settings-hp-offset-list">
          ${e.map(o).join("")}
        </div>
      </div>
    `}function Wr(e="oq-settings-grid"){return`
      <div class="${i(e)}">
        ${Qa("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${Qa("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${_e("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${_e("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function _s(){const e=re();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${i(li)}"
          aria-pressed="${e?"false":"true"}"
          ${t.loadingEntities||t.busyAction==="save-strategy"?"disabled":""}
        >
          <p class="oq-helper-label">Power House</p>
          <h4>Automatisch op basis van je woning</h4>
          <p>Power House schat hoeveel warmte je woning nodig heeft. Dit is meestal de beste keuze als je zonder veel finetuning wilt starten.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt vooral het geschatte warmteverlies van je woning en de buitentemperatuur waarbij verwarmen meestal niet meer nodig is.</li>
            <li>Reageert meer op het gedrag van je woning dan op een vaste temperatuurcurve.</li>
            <li>Handig als je vooral comfort wilt en zo min mogelijk handmatig wilt instellen.</li>
          </ul>
        </button>
        <button
          class="oq-settings-strategy-card${e?" is-active":""}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${i(ci)}"
          aria-pressed="${e?"true":"false"}"
          ${t.loadingEntities||t.busyAction==="save-strategy"?"disabled":""}
        >
          <p class="oq-helper-label">Stooklijn</p>
          <h4>Regelen met een stooklijn</h4>
          <p>Met een stooklijn kies je per buitentemperatuur welke aanvoertemperatuur nodig is. Handig als je dit bewust zelf wilt instellen.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt de curvepunten van <strong>-20\xB0C t/m 15\xB0C</strong> als basis.</li>
            <li>Voelt herkenbaar voor wie gewend is aan een klassieke stooklijn.</li>
            <li>Handig als je de aanvoertemperatuur per buitentemperatuur zelf wilt finetunen.</li>
          </ul>
        </button>
      </div>
    `}function Dm(){if(!y("phResponseProfile"))return"";const e=String(E("phResponseProfile")||""),o=t.loadingEntities||t.busyAction==="save-phResponseProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{const s=a.value===e;return a.value==="Custom"&&s?`
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${i(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${i(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${i(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${Ga("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${Ga("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:tn({key:"phResponseProfile",option:a.value,currentValue:e,busy:o,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return ae("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",r,"oq-settings-field--span-2")}function Ks(){if(!y("curveControlProfile"))return"";const e=String(E("curveControlProfile")||""),o=t.loadingEntities||t.busyAction==="save-curveControlProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>tn({key:"curveControlProfile",option:a.value,currentValue:e,busy:o,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return ae("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",r,"oq-settings-field--span-2")}function Fm(){const e=(R,B=0)=>{const L=P(R);return Number.isNaN(L)?B:Math.max(0,L)},n=e("phComfortBelow",.1),r=e("phComfortAbove",.3),a=e("phKp",3e3),s=20-n,l=20+r,d=620,u=184,c=46,m=24,f=18,g=40,b=96,k=d-c-m,h=Math.min(20-1.2,s-.35),w=Math.max(20+1.2,l+.35),v=R=>c+(R-h)/Math.max(.01,w-h)*k,S=v(h),$=v(w),q=v(s),M=v(20),x=v(l),O=Math.abs(s-20)>.001,G=Math.abs(l-20)>.001,C=f+24,T=u-g,H=b-44,I=(R,B,L,N="")=>{const ue=Math.max(S+4,Math.min($-110-4,R-55)),ie=R-14,Y=H,Fe=28,ye=b-H+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${i(`${B} ${L}`)}">
          <rect class="oq-ph-concept-hit" x="${ie}" y="${Y}" width="${Fe}" height="${ye}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${R}" cy="${b}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${N?` oq-ph-concept-tooltip--${N}`:""}" transform="translate(${ue} ${H})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${i(B)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${i(L)}</text>
          </g>
        </g>
      `},K=[`M ${S.toFixed(1)} ${C.toFixed(1)}`,`L ${q.toFixed(1)} ${b.toFixed(1)}`,`L ${x.toFixed(1)} ${b.toFixed(1)}`,`L ${$.toFixed(1)} ${T.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${i(F(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${i(F(s,1,"\xB0C"))} \u2013 ${i(F(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${i(F(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${d} ${u}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${S.toFixed(1)}" y="${f}" width="${Math.max(20,q-S).toFixed(1)}" height="${(u-f-g).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${q.toFixed(1)}" y="${f}" width="${Math.max(20,x-q).toFixed(1)}" height="${(u-f-g).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${x.toFixed(1)}" y="${f}" width="${Math.max(20,$-x).toFixed(1)}" height="${(u-f-g).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${S}" y1="${f}" x2="${S}" y2="${u-g}" class="oq-ph-concept-axis"></line>
            <line x1="${S}" y1="${b}" x2="${$}" y2="${b}" class="oq-ph-concept-axis"></line>
            <line x1="${M}" y1="${f}" x2="${M}" y2="${u-g}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${K}" class="oq-ph-concept-curve"></path>

            ${O?`<line x1="${q}" y1="${b-12}" x2="${q}" y2="${b+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${M}" y1="${b-14}" x2="${M}" y2="${b+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${G?`<line x1="${x}" y1="${b-12}" x2="${x}" y2="${b+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${O?`<circle cx="${q}" cy="${b}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${M}" cy="${b}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${G?`<circle cx="${x}" cy="${b}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${O?I(q,"Comfort onder setpoint",F(s,1,"\xB0C"),"below"):""}
            ${I(M,"Setpoint",F(20,1,"\xB0C"),"setpoint")}
            ${G?I(x,"Comfort boven setpoint",F(l,1,"\xB0C"),"above"):""}

            <text x="${S+8}" y="${f+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${S+8}" y="${u-g-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${S}" y="${u-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${$}" y="${u-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${O?`<text x="${q-5}" y="${u-14}" text-anchor="end" class="oq-ph-concept-tick-value">${i(F(s,1,"\xB0C"))}</text>`:""}
            <text x="${M}" y="${u-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${i(F(20,1,"\xB0C"))}</text>
            ${G?`<text x="${x+5}" y="${u-14}" text-anchor="start" class="oq-ph-concept-tick-value">${i(F(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${i(F(s,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${i(F(s,1,"\xB0C"))} \u2013 ${i(F(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${i(F(l,1,"\xB0C"))}</span>
          </span>
        </div>
        <div class="oq-ph-concept-notes">
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfort onder</span>
            <p>Bepaalt wanneer extra opwarming begint onder het setpoint.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfortband</span>
            <p>Binnen deze band blijft de directe temperatuurreactie vlak. Een opgebouwde comfort memory kan hier nog wel even doorwerken en loopt daarna rustig af.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Temperatuurreactie</span>
            <p>Bepaalt hoe sterk Power House buiten de comfortband extra of minder warmtevraag als kamercorrectie toevoegt boven op de berekende huisvraag.</p>
          </article>
        </div>
      </div>
    `}function zs(){const e=[J("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),J("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),J("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${Fm()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function Ya(e,o,n){const r=[Lt(o,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),Lt(n,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return r?`
      <article class="oq-settings-hp-group">
        <header>
          <p class="oq-helper-label">Warmtepomp</p>
          <h4>${i(e)}</h4>
          <p>Stel hier de standen in die OpenQuatt niet hoeft te gebruiken.</p>
        </header>
        <div class="oq-settings-hp-group-grid">
          ${r}
        </div>
      </article>
    `:""}function Im(){const e=xm();return te("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${Bs()}
        ${e?`
          <div class="oq-settings-subpanel oq-settings-subpanel--nested">
            <div class="oq-settings-subpanel-head">
              <p class="oq-helper-label">Flow afstelling</p>
              <h4>Flow Kp en Ki</h4>
              <p>Deze waarden bepalen hoe stevig de flowregeling corrigeert op afwijkingen. Autotune vult hier later een voorstel voor in.</p>
            </div>
            ${e}
          </div>
        `:""}
      `)}function z(e){return y(e)&&A(e)}function Ge(e){return!y(e)||A(e)}function eo(e){return y(e)?Io(V(e,"None")):""}function Do(e){const o=eo(e).trim().toLowerCase();return!!o&&o!=="geen actieve storingen"}function nn(){const e=[],o=z("compressorCyclingWarning2h")||z("compressorCyclingWarning72h")||z("alternatingCompressorStartsWarning"),n=z("compressorCyclingAlertLatched"),r=Ge("cicPollingEnabled"),a=Ge("otEnabled"),s=(d,u)=>{z(d)&&e.push({key:d,label:u})};s("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),s("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),s("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),s("lowflowFaultActive","Te lage flow"),s("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),r&&s("cicDataStale","CIC-data is verouderd"),a&&s("otLinkProblem","OpenTherm-verbinding meldt een probleem"),Do("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${eo("hp1Failures")}`}),Do("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${eo("hp2Failures")}`});const l=e.length;return n&&!o&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:n,cyclingAlertActive:o,cyclingAlertRecovered:n&&!o,title:l>0?"Aandacht nodig":n?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:l>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:n?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function Fo(e,o="Aandacht",n="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${i(e?o:n)}</span>`}function St({label:e,value:o,note:n="",active:r=!1}){return`
      <div class="oq-settings-monitoring-row${r?" is-warning":""}">
        <div>
          <p>${i(e)}</p>
          <strong>${i(o)}</strong>
          ${n?`<span>${i(n)}</span>`:""}
        </div>
        ${Fo(r)}
      </div>
    `}function Ve(e){const o=P(e);return Number.isNaN(o)?"\u2014":String(Math.max(0,Math.round(o)))}function Wm(e){const o=P(e);if(Number.isNaN(o))return"Nog niet gemeten";if(o<1)return"Zojuist";if(o<60)return`${Math.round(o)} min geleden`;const n=Math.floor(o/60),r=Math.round(o%60);return`${n}u ${r}m geleden`}function Za(e){const o=P(e);return Number.isNaN(o)||o<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(o*1e3))}function Bm(e){if(!e.cyclingAlertLatched)return"";const o=z("compressorCyclingAlertAlternating"),n=Ve("compressorCyclingAlertHp1Peak2h"),r=Ve("compressorCyclingAlertHp1Peak72h"),a=y("compressorCyclingAlertHp2Peak2h")?Ve("compressorCyclingAlertHp2Peak2h"):"",s=y("compressorCyclingAlertHp2Peak72h")?Ve("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${Fo(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${i(Za("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${i(Za("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${i(n)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${i(r)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${i(a)} starts</dd></div>`:""}
          ${s?`<div><dt>HP2 72 uur</dt><dd>${i(s)} starts</dd></div>`:""}
          ${o?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${t.entities.acknowledgeCompressorCyclingAlert?He("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function Ja(e,o){return y(`${o}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${i(e)}</p>
          <span>Laatste start: ${i(Wm(`${o}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${i(Ve(`${o}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${i(Ve(`${o}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${i(Ve(`${o}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${i(Ve(`${o}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function Us(e){const o=e.active?e.problems.map(n=>n.key).sort().join("|"):"";if(!o){t.installationMonitoringProblemSignature="";return}o!==t.installationMonitoringProblemSignature&&(t.installationMonitoringProblemSignature=o,t.installationMonitoringDetailsOpen=!0)}function Vm(){const e=nn();Us(e);const o=Ge("cicPollingEnabled"),n=Ge("otEnabled"),r=[y("lowflowFaultActive")?St({label:"Flow",value:z("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:z("lowflowFaultActive")}):"",y("flowMismatch")?St({label:"Flowvergelijking duo",value:z("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:z("flowMismatch")}):""].filter(Boolean).join(""),a=[y("cicDataStale")?St({label:"CIC-data",value:o?z("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:o&&z("cicDataStale")}):"",y("otLinkProblem")?St({label:"OpenTherm",value:n?z("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:n&&z("otLinkProblem")}):""].filter(Boolean).join(""),s=[y("hp1Failures")?St({label:"Warmtepomp 1",value:eo("hp1Failures"),active:Do("hp1Failures")}):"",y("hp2Failures")?St({label:"Warmtepomp 2",value:eo("hp2Failures"),active:Do("hp2Failures")}):""].filter(Boolean).join(""),l=P("compressorStarts2hWarningLimit"),d=P("compressorStarts72hWarningLimit"),u=z("compressorCyclingWarning2h")||z("compressorCyclingWarning72h")||z("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,c=r?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${r}</div>
      </article>
    `:"",m=s?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${s}</div>
      </article>
    `:"",f=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"";return te("Bewaking","Installatiebewaking","Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${i(e.title)}</strong>
            <span>${i(e.copy)}</span>
          </div>
          ${Fo(e.active,"Aandacht nodig","Alles rustig")}
        </div>
        <details class="oq-settings-monitoring-details"${t.installationMonitoringDetailsOpen?" open":""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Geef details weer</strong>
          </summary>
        ${e.active?`
          <div class="oq-settings-monitoring-active-list">
            ${e.problems.map(g=>`<span>${i(g.label)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${Fo(u)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${Bm(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${Ja("Warmtepomp 1","hp1")}
              ${Ja("Warmtepomp 2","hp2")}
            </div>
            ${_e("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(l)?"\u2014":`${Math.round(l)} starts / 2 uur`})}
            ${_e("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(d)?"\u2014":`${Math.round(d)} starts / 72 uur`})}
          </article>
          ${m}
          </div>
          <div class="oq-settings-monitoring-column">
            ${c}
            ${f}
          </div>
        </div>
        </details>
      `)}function jm({status:e,running:o,resultReady:n,startDisabled:r,abortDisabled:a,applyDisabled:s,busy:l,controlsAvailable:d}){const u=String(e||"").toUpperCase(),c=u.includes("FAILED")||u.includes("REFUSED")||u.includes("ABORT"),m=u.includes("APPLIED"),f=y("hp2WaterIn")||y("hp2WaterOut")||y("hp2WaterInRaw")||y("hp2WaterOutRaw"),g=P("hpWaterCalibrationStableProgress"),b=P("hpWaterCalibrationStableRequired"),k=P("hpWaterCalibrationRemaining"),h=Math.round(P("hpWaterCalibrationPhase")),w=o&&(h===1||u.includes("MIXING")),v=o&&!w,S=300,$=60,q=Number.isFinite(k)?Math.max(0,S-k):NaN,M=Number.isFinite(q)?Math.max(0,$-q):NaN,x=w&&Number.isFinite(q)?Math.max(0,Math.min(100,q/$*100)):v&&Number.isFinite(g)&&Number.isFinite(b)&&b>0?Math.max(0,Math.min(100,g/b*100)):o&&Number.isFinite(k)?Math.max(0,Math.min(100,100-k/S*100)):n?100:0,O=n&&y("hpWaterCalibrationResultSpreadBefore")?se("hpWaterCalibrationResultSpreadBefore",2):se("hpWaterCalibrationSpread",2),G=w?"Water mengen":Number.isFinite(g)&&Number.isFinite(b)&&b>0?g>0?`${Math.round(Math.max(0,g))} / ${Math.round(b)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",C=n?3:o?2:1,T=m?"Offsets toegepast":n?`Meting klaar - spreiding ${O}`:o?w?`Water mengen${Number.isFinite(M)&&M>0?` - meting start over ${Math.round(M)} s`:""}`:`Meting bezig - ${Number.isFinite(k)&&k>0?`max. ${Math.round(k)} s resterend`:G}`:c?"Meting niet voltooid":"Voorbereiding",H=m?"De voorgestelde offsets zijn opgeslagen.":n?"Controleer de voorgestelde offsets en pas ze toe.":o?w?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":c?en("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):f?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",I=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(L=>y(L.liveKey)||y(L.rawKey)||y(L.offsetKey)),K=(L,N)=>{const j=C>L;return`
        <div class="oq-settings-hp-calibration-step${j?" is-done":""}${C===L?" is-active":""}">
          <span>${j?"\u2713":L}</span>
          <strong>${i(N)}</strong>
        </div>
      `},R=L=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${i(L.label)}</span>
          <strong>${i(se(L.liveKey,2))}</strong>
        </article>
      `,B=L=>{const N=P(L.resultRawKey),j=Number.isFinite(N)?N:Ir(L.rawKey,L.liveKey,L.offsetKey),Q=P(L.suggestedKey),ue=Number.isFinite(j)&&Number.isFinite(Q)?Pt(j+Q,t.entities[L.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${i(L.label)}</th>
          <td>${i(Number.isFinite(j)?Pt(j,t.entities[L.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${i(se(L.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${i(se(L.suggestedKey,2))}</span></td>
          <td>${i(ue)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${K(1,"Voorbereiding")}
          ${K(2,"Meting")}
          ${K(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${n?" is-success":o?" is-active":c?" is-warning":""}">
          <div>
            <strong>${i(T)}</strong>
            <p>${i(H)}</p>
          </div>
          ${o||n?`<span>${i(o?G:"Resultaat beschikbaar")}</span>`:""}
          ${o?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${x.toFixed(0)}%"></i></div>`:""}
        </div>

        ${o?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${I.map(R).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${i(se("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${i(se("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${n?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${i(se("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${i(se("hpWaterCalibrationSupplyDelta",2))}</span>
            </div>
            <div class="oq-settings-hp-calibration-table-wrap">
              <table class="oq-settings-hp-calibration-table">
                <thead>
                  <tr>
                    <th scope="col">Sensor</th>
                    <th scope="col">Raw gemiddelde</th>
                    <th scope="col">Huidig actief</th>
                    <th scope="col">Voorstel</th>
                    <th scope="col">Na toepassen</th>
                  </tr>
                </thead>
                <tbody>
                  ${I.map(B).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${d?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${kt({active:o,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||r,stopDisabled:l||a})}
            ${t.entities.hpWaterCalibrationApply?He("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||s):""}
          </div>
        `:""}
      </div>
    `}function Gs(){const e=y("boilerCvAssistEnabled")&&A("boilerCvAssistEnabled"),o=Os(),n=A("cm100Active"),r=String(o||"").trim().toUpperCase(),a=ot(o),s=!a&&(n||r==="CM100 READY"),l=t.commissioningTaskLock==="cm100",d=t.loadingEntities||t.busyAction==="commissioningCm100Start"||t.busyAction==="commissioningCm100Stop"||l,u=!!t.pendingCommissioningCm100Start,c=d||s||a,m=d||!s,f=wt("boilerPowerTestStatus","IDLE"),g=yo(f,"boiler"),b=A("boilerPowerTestActive"),k=t.loadingEntities||t.busyAction==="boilerPowerTestStart"||t.busyAction==="boilerPowerTestAbort"||t.busyAction==="boilerPowerTestApply",h=!!(t.entities.boilerPowerTestStart||t.entities.boilerPowerTestAbort||t.entities.boilerPowerTestApply),w=!!t.pendingBoilerPowerTestStart,v=t.commissioningTaskLock==="boiler",S=ot(f),q=!X(f)&&(b||w||v||vt(f))&&!S,M=ee("boilerRatedHeatPower"),x=ee("boilerHeatPower"),O=P("boilerHeatPower"),G=O>0?x:q&&t.commissioningBoilerHeatPowerDisplay?t.commissioningBoilerHeatPowerDisplay:x;O>0&&(t.commissioningBoilerHeatPowerDisplay=x);const C=wt("flowAutotuneStatus","IDLE"),T=yo(C,"autotune"),H=t.loadingEntities||t.busyAction==="flowAutotuneStart"||t.busyAction==="flowAutotuneAbort"||t.busyAction==="flowAutotuneApply",I=!!(t.entities.flowAutotuneStart||t.entities.flowAutotuneAbort||t.entities.flowAutotuneApply),K=!!t.pendingFlowAutotuneStart,R=t.commissioningTaskLock==="autotune",B=ot(C),N=!X(C)&&(K||R||vt(C))&&!B,j=wt("airPurgeStatus","IDLE"),Q=yo(j,"purge"),ue=A("airPurgeActive"),ie=t.loadingEntities||t.busyAction==="airPurgeStart"||t.busyAction==="airPurgeAbort",Y=!!(t.entities.airPurgeStart||t.entities.airPurgeAbort),Fe=!!t.pendingAirPurgeStart,ye=t.commissioningTaskLock==="purge",de=!X(j)&&(ue||Fe||ye||vt(j)),cn=/DONE/.test(String(j||"").toUpperCase()),pe=!!(Y||t.entities.airPurgeStatus||t.entities.airPurgeReturnToAuto),un=ee("airPurgeRemaining",{decimals:0}),Kt=P("airPurgePhase"),go=Kt===1?"Rustig":Kt===2?"Pulsen":Kt===3?"Stabiliseren":Q.phase,tt=wt("manualFlowStatus","IDLE"),gt=A("manualFlowActive"),Pe=t.loadingEntities||t.busyAction==="manualFlowStart"||t.busyAction==="manualFlowAbort",zt=!!(t.entities.manualFlowStart||t.entities.manualFlowAbort),ht=!!t.pendingManualFlowStart,ke=t.commissioningTaskLock==="manual-flow",Se=!X(tt)&&(gt||ht||ke||vt(tt)),Ie=wt("manualHpStatus","IDLE"),Ut=A("manualHpActive"),ft=t.loadingEntities||t.busyAction==="manualHpStart"||t.busyAction==="manualHpAbort",ho=!!(t.entities.manualHpStart||t.entities.manualHpAbort),bt=!!t.pendingManualHpStart,Ce=t.commissioningTaskLock==="manual-hp",Te=!X(Ie)&&(Ut||bt||Ce||vt(Ie)),aa=/SAFETY STOP/.test(String(Ie||"").toUpperCase()),ia=/STOPPING/.test(String(Ie||"").toUpperCase()),We=wt("hpWaterCalibrationStatus","IDLE"),xl=yo(We,"hp-water-calibration"),sa=A("hpWaterCalibrationActive"),fo=t.loadingEntities||t.busyAction==="hpWaterCalibrationStart"||t.busyAction==="hpWaterCalibrationAbort"||t.busyAction==="hpWaterCalibrationApply",la=!!(t.entities.hpWaterCalibrationStart||t.entities.hpWaterCalibrationAbort||t.entities.hpWaterCalibrationApply),bo=!!t.pendingHpWaterCalibrationStart,Be=t.commissioningTaskLock==="hp-water-calibration",fe=!X(We)&&(sa||bo||Be||vt(We)),vo=/DONE|APPLIED/.test(String(We||"").toUpperCase()),ca=/APPLIED/.test(String(We||"").toUpperCase()),Ol=ee("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),Dl=ee("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),ua=/DONE|APPLIED/.test(String(f||"").toUpperCase()),da=/DONE|APPLIED/.test(String(C||"").toUpperCase()),dn=s?S?"Wachten op CM100":q?g.phase:ua?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",pn=s?B?"Wachten op CM100":N?T.phase:da?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",mn=s?de?Q.phase:cn?"Klaar":"Klaar om te starten":"Wachten op CM100",pa=s?Se?"Actief":"Klaar om te starten":"Wachten op CM100",ma=s?Te?ia?"Bezig met stoppen":aa?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",ga=s?fe?xl.phase:ca?"Offsets toegepast":vo?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",ha=!s||k||!h||N||de||Se||Te||fe||q||R||ye||ke||Ce||Be||w,Fl=k||!(q||v||w),Il=k||ha||!ua||N||de||fe,fa=!s||H||!I||q||de||Se||Te||fe||N||v||ye||ke||Ce||Be||K,Wl=H||!(N||R||K),Bl=H||fa||!da||q||de||fe,Vl=!s||ie||!Y||q||N||Se||Te||fe||de||v||R||ke||Ce||Be||Fe,jl=ie||!(de||ye||Fe),_l=!s||Pe||!zt||q||N||de||Te||fe||Se||v||R||ye||Ce||Be||ht,Kl=Pe||!(Se||ke||ht),zl=!s||ft||!ho||q||N||de||Se||fe||Te||v||R||ye||ke||Be||bt,Ul=ft||!(Te||Ce||bt),Gl=!s||fo||!la||q||N||de||Se||Te||fe||v||R||ye||ke||Ce||bo,Ql=fo||!(fe||Be||bo),Yl=fo||fe||!vo||ca;u&&s&&(t.pendingCommissioningCm100Start=!1),l&&(s||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(r))&&(t.commissioningTaskLock=""),w&&(b||X(f))&&(t.pendingBoilerPowerTestStart=!1),v&&X(f)&&(t.commissioningTaskLock=""),K&&X(C)&&(t.pendingFlowAutotuneStart=!1),R&&X(C)&&(t.commissioningTaskLock=""),Fe&&(ue||X(j))&&(t.pendingAirPurgeStart=!1),ye&&X(j)&&(t.commissioningTaskLock=""),ht&&(gt||X(tt))&&(t.pendingManualFlowStart=!1),ke&&(gt||X(tt))&&(t.commissioningTaskLock=""),bt&&(Ut||X(Ie))&&(t.pendingManualHpStart=!1),Ce&&(Ut||X(Ie))&&(t.commissioningTaskLock=""),bo&&(sa||X(We))&&(t.pendingHpWaterCalibrationStart=!1),Be&&X(We)&&(t.commissioningTaskLock="");const Zl=a?"Wachten op CM100":o,Jl=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":s?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",Xl=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:ga,available:!!(la||t.entities.hpWaterCalibrationStatus),openDisabled:!s,cardMarkup:yt({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:ga,statusCopy:fe?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":vo?"Controleer de voorgestelde offsets voordat je ze toepast.":s?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:jm({status:We,running:fe,resultReady:vo,startDisabled:Gl,abortDisabled:Ql,applyDisabled:Yl,busy:fo,controlsAvailable:!!(t.entities.hpWaterCalibrationStart||t.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:pa,available:!!(zt||t.entities.manualFlowStatus),openDisabled:!s,cardMarkup:yt({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:pa,statusCopy:Se?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":s?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${_e("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${t.entities.manualFlowStart||t.entities.manualFlowAbort?kt({active:Se,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:Pe||_l,stopDisabled:Pe||Kl}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${Z("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",ee("flowSelected"),"oq-settings-field--compact")}
            ${Z("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",ee("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${t.entities.manualFlowApplyHeating?He("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",Pe):""}
          ${t.entities.manualFlowApplyCooling?He("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",Pe):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:ma,available:!!(ho||t.entities.manualHpStatus),openDisabled:!s,cardMarkup:yt({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:ma,statusCopy:Te?ia?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":aa?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":s?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${t.entities.manualHpStart||t.entities.manualHpAbort?kt({active:Te,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:ft||zl,stopDisabled:ft||Ul}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${Lt("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${_e("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${y("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${Lt("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${_e("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${Z("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",ee("flowSelected"),"oq-settings-field--compact")}
              ${Z("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",za("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${y("hp2Compressor")?Z("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",za("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${Z("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",E("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${Z("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Io(V("hp1Failures","None")),"oq-settings-field--compact")}
              ${y("hp2Failures")?Z("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Io(V("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:pn,available:!0,openDisabled:ot(pn),cardMarkup:yt({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:pn,statusCopy:B?"Wacht totdat CM100 actief is voordat je autotune start.":N?"Autotune draait op dit moment.":s?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${t.entities.flowAutotuneStart||t.entities.flowAutotuneAbort?kt({active:N,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:H||fa,stopDisabled:H||Wl}):""}
            ${t.entities.flowAutotuneApply?He("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",H||Bl):""}
          `,metrics:`
            ${Z("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",Ol,"oq-settings-field--compact")}
            ${Z("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",Dl,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:dn,available:e,openDisabled:ot(dn),cardMarkup:yt({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${i(M)}`,status:dn,statusCopy:S?"Wacht totdat CM100 actief is voordat je de boiler-test start.":q?"De boiler-test draait op dit moment.":s?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${t.entities.boilerPowerTestStart||t.entities.boilerPowerTestAbort?kt({active:q,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:k||ha,stopDisabled:k||Fl}):""}
            ${t.entities.boilerPowerTestApply?He("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",k||Il):""}
          `,metrics:`
            ${Z("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",G)}
            ${Z("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",ee("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:mn,available:pe,openDisabled:ot(mn),cardMarkup:yt({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:mn,statusCopy:de?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":s?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${t.entities.airPurgeStart||t.entities.airPurgeAbort?kt({active:de,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:ie||Vl,stopDisabled:ie||jl}):""}
          `,metrics:`
            ${Z("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",un,"oq-settings-field--compact")}
            ${Z("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",go,"oq-settings-field--compact")}
            ${Z("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",ee("flowSelected"),"oq-settings-field--compact")}
            ${Am("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(ec=>ec.available);return{cm100Status:Zl,cm100StartDisabled:c,cm100StopDisabled:m,serviceStatusCopy:Jl,tasks:Xl}}function _m(e){return`
      <div class="oq-settings-system-row oq-settings-system-row--with-action oq-settings-service-row" data-oq-service-task="${i(e.key)}">
        <div class="oq-settings-system-row-copy">
          <p class="oq-settings-system-row-label">${i(e.label)}</p>
          <strong class="oq-settings-system-row-value">${i(e.status)}</strong>
          <p class="oq-settings-system-row-note">${i(e.summary)}</p>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${i(e.key)}"
          ${e.openDisabled?"disabled":""}
        >
          ${e.openDisabled?"Wachten op CM100":"Openen"}
        </button>
      </div>
    `}function Km(){const e=Gs();return te("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${i(e.cm100Status)}</strong>
              <p>${i(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${t.entities.commissioningCm100Start?He("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${t.entities.commissioningCm100Stop?He("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(o=>_m(o)).join("")}
          </div>
        </div>
      `)}function zm(){const e=String(t.systemModal||"").replace(/^service-task-/,""),n=Gs().tasks.find(r=>r.key===e);return n?`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task" data-oq-service-task-scroller role="dialog" aria-modal="true" aria-labelledby="oq-service-task-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Service</p>
              <h2 class="oq-helper-modal-title" id="oq-service-task-modal-title">${i(n.title)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit ${i(n.title)}">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${i(n.summary)}</p>
          <div class="oq-settings-service-task-modal-body">
            ${n.cardMarkup}
          </div>
          <div class="oq-helper-modal-actions">
            ${n.modalActions||""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
          </div>
        </section>
      </div>
    `:""}function Xa(){if(!y("hpGeneration"))return"";const e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:Wa,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:Wa,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:hp,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},o=t.entities.hpGeneration||{},n=String(E("hpGeneration")||""),r=jt(o),a=t.loadingEntities||t.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${r.map(s=>{const l=e[s]||{};return tn({key:"hpGeneration",option:s,currentValue:n,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(s).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function Um(){const e=lo(),o=t.entities.hpGeneration||{},n=y("hpGeneration")&&jt(o).length>0;return!e&&!n?"":te("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige versie</p>
              <strong class="oq-settings-quickstart-status-value">${i(e||"Onbekend")}</strong>
            </div>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="open-generation-modal"
            ${!n||t.loadingEntities||t.busyAction==="save-hpGeneration"?"disabled":""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `)}function Qs(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!y("boilerCvAssistEnabled"))return"";const o=A("boilerCvAssistEnabled"),n=y("boilerRatedHeatPower"),r=Je("boilerRatedHeatPower"),a=Re("boilerRatedHeatPower"),s=t.loadingEntities||t.busyAction==="switch-boilerCvAssistEnabled",d=n?Qo({key:"boilerRatedHeatPower",value:a,meta:r,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${i("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,u=o&&n?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${i(e)}">
          ${ae("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${on("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",o,s)}
              </div>
            `,"oq-settings-field--compact")}

          ${o?ae("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${d}
              </div>
            `,o&&n?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",u):""}
        </div>
      `}function Gm(){if(!y("boilerCvAssistEnabled"))return"";const e=A("boilerCvAssistEnabled");return te("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",Qs())}function Qm(){const e=t.complete===!0?"Afgerond":t.complete===!1?"Open":"Laden...",o=t.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":t.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return te("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${i(e)}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="reset"
              ${t.busyAction==="reset"?"disabled":""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${i(o)}</p>
        </div>
      `)}function Ym(){if(!y("trendHistoryEnabled"))return"";const e=A("trendHistoryEnabled"),o=e&&A("trendHistoryFlashEnabled"),n=e&&y("trendHistoryFlashAvailable");return te("Trends","Trendopslag","Bewaar de laatste 7 dagen in werkgeheugen en optioneel tot 30 dagen in flash.",`
        <div class="oq-settings-grid">
          ${Ua("trendHistoryEnabled","Trendopslag","Schakel de trendopslag voor de grafieken in of uit.","OpenQuatt bewaart live trenddata in het werkgeheugen zodat je de grafieken kunt blijven gebruiken.","OpenQuatt stopt met nieuwe trenddata bijhouden en verbergt de Trends-tab. Bestaande flashhistorie blijft bewaard.")}
          ${e?Ua("trendHistoryFlashEnabled","Trendhistorie opslaan in flash","Bewaart trenddata ook na herstart of OTA.","Trendhistorie wordt bewaard in flash zodat je later verder kunt terugkijken.","Bestaande flashhistorie blijft bewaard, maar nieuwe trenddata wordt alleen in het werkgeheugen bijgehouden."):""}
          ${o?Mm("trendHistoryFlush","Trendhistorie nu opslaan","Schrijf de huidige trendbuffer direct weg naar flash.","Nu opslaan","flush-trend-history","",{disabled:!o,note:"Handig voor een OTA of een geplande herstart."}):""}
          ${n?$m():""}
        </div>
      `)}function Zm(){const e=re()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${Ks()}
          </div>
          <div class="oq-settings-curve-shell">
            ${Ys()}
          </div>
          ${Is()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${Vs()}
          ${zs()}
        </div>
      `;return te("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${Ws()}
        ${_s()}
        ${e}
      `)}function Jm(){return te("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",js())}function Xm(){const e=y("otEnabled"),o=y("cicPollingEnabled")||y("cicFeedUrl"),n=y("cicCompatibilityMode"),r=y("otLinkProblem")||y("cicDataStale")||y("cicJsonFeedOk");if(!e&&!o&&!n&&!r)return"";const a=Ge("cicPollingEnabled"),s=Ge("otEnabled"),l=({label:k,value:h,active:w=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${w?" is-warning":""}">
        <dt>${i(k)}</dt>
        <dd>${i(h)}</dd>
      </div>
    `,d=(k,h,w="Actief",v="Normaal",S={})=>{if(!y(k))return"";const $=z(k);return l({label:h,value:$?w:v,active:S.warningWhenActive?$:!1})},u=(k,h,w={})=>{const v=w.fallbackKey||"";return!y(k)&&!(v&&y(v))?"":l({label:h,value:ee(y(k)?k:v,w)})},c=(k,h)=>{const w=h.filter(Boolean).join("");return w?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${i(k)}</h4>
          <dl>${w}</dl>
        </article>
      `:""},m=y("cicFeedUrl")?`
      <article class="oq-settings-integration-card oq-settings-integration-card--wide" data-oq-settings-field="cicFeedUrl">
        <div class="oq-settings-integration-card-head">
          <h4>CIC feed URL</h4>
          <span class="oq-settings-integration-pill">Lokaal</span>
        </div>
        <label class="oq-settings-control oq-settings-control--text">
          <input
            class="oq-helper-input oq-settings-integration-url-input"
            type="url"
            data-oq-field="cicFeedUrl"
            value="${i(String(Re("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${t.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",f=c("OpenTherm",[y("otLinkProblem")?l({label:"OT-link",value:s?z("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:s&&z("otLinkProblem")}):"",d("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),d("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),u("otControlSetpoint","Control setpoint"),u("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),u("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),g=c("CIC-feed",[y("cicJsonFeedOk")?l({label:"JSON-feed",value:a?z("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!z("cicJsonFeedOk")}):"",y("cicDataStale")?l({label:"Data",value:a?z("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&z("cicDataStale")}):"",d("cicChEnabled","CH-vraag","Actief","Normaal"),d("cicCoolingEnabled","Koeling","Actief","Normaal"),u("cicControlSetpoint","Control setpoint"),u("cicRoomSetpoint","Room setpoint"),u("cicRoomTemp","Room temperature"),u("cicFlowrate","Flow"),u("cicLastSuccessAge","Laatste succes")]),b=f||g?`
      <details class="oq-settings-integration-diagnostics"${t.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${f}
          ${g}
        </div>
      </details>
    `:"";return te("Integratie","OpenTherm & CIC-polling","Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          ${bn("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${bn("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${bn("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${m}
        </div>
        ${b}
      `)}function eg(){if(!zn.some(C=>y(C)))return"";const o=Ge("cicPollingEnabled"),n=Ge("otEnabled"),r=(C={})=>C.haValueKey||(C.haKeys||[]).find(T=>!/valid$/i.test(T))||"",a=(C={})=>C.haValidKey||(C.haKeys||[]).find(T=>/valid$/i.test(T))||"",s=(C="",T="")=>!!C&&!!T&&y(C)&&y(T)&&z(T),l=(C={})=>s(r(C),a(C)),d=(C,T={})=>C==="CIC"?o:C==="OT thermostat"?n:C==="HA input"?l(T):C==="CIC or HA input"?o||l(T):C==="Flowmeter HP2"?y("hp2Flow"):C==="Local aggregate HP1/HP2"?y("flowLocal")||y("hp2Flow"):!0,u=(C,T={})=>C==="CIC"&&!o?"CIC-polling staat uit":C==="OT thermostat"&&!n?"OpenTherm staat uit":C==="HA input"&&!l(T)?"HA-bron ongeldig":C==="CIC or HA input"&&!o&&!l(T)?"CIC en HA ontbreken":C==="Flowmeter HP2"&&!y("hp2Flow")?"HP2-flow ontbreekt":C==="Local aggregate HP1/HP2"&&!y("flowLocal")&&!y("hp2Flow")?"Lokale flow ontbreekt":"",c=(C,T="Actief",H="Normaal")=>y(C)?z(C)?T:H:"",m=(C,T={})=>{const H=String(C||"").trim();return H?T.optionLabels?.[H]||Ee(H):""},f=(C,T={})=>{const H=String(E(C)||"").trim();return H?m(H,T):""},g=C=>{const T=en(C,"");return T?Ee(T):""},b=(...C)=>C.find(T=>String(T||"").trim())||"",k=()=>{const C=f("waterSupplySource");if(String(E("waterSupplySource")||"")==="Local"&&y("localWaterSupplyTempSource")){const T=f("localWaterSupplyTempSource");return T?`${C} - ${T}`:C}return C},h=()=>{const C=String(E("flowSource")||"").trim();if(C==="Outdoor unit"){if(y("qFlowSource")){const T=String(E("qFlowSource")||"").trim(),H=String(E("hpGeneration")||"").trim();return T==="Local"||T==="Auto"&&H==="V1"?T==="Auto"?"Lokaal (auto)":"Lokaal":b(f("outdoorUnitFlowMode"),T==="Auto"?"Buitenunit (auto)":"Buitenunit")}return b(f("outdoorUnitFlowMode"),"Quatt-flow")}return Ee(C)},w=()=>{const C=String(E("outsideTempSource")||"").trim();if(C!=="Auto")return Ee(C);const T=P("outsideTempLocalAggregated"),H=P("outsideTempHa"),I=!Number.isNaN(T),K=y("outsideTempHaValid")?z("outsideTempHaValid")&&!Number.isNaN(H):!Number.isNaN(H);return I&&K?H<=T?"HA-invoer":"Buitenunit":K?"HA-invoer":I?"Buitenunit":"Auto"},v=({label:C,value:T="",key:H="",active:I=!1})=>{const K=T||(H?ee(H):"");return K?`
        <div class="oq-settings-source-row${I?" is-warning":""}">
          <span>${i(C)}</span>
          <strong>${i(K)}</strong>
        </div>
      `:""},S=({label:C="HA input",valueKey:T="",validKey:H="",value:I=""})=>s(T,H)?[v({label:C,key:T,value:I}),v({label:"HA status",value:"Geldig"})]:[],$=(C,T={})=>{if(!y(C))return{markup:"",warning:""};const H=t.entities[C]||{},I=String(E(C)||""),R=jt(H).filter(Q=>d(Q,T)),B=I&&!d(I,T),L=I==="HA input"&&T.keepUnavailableCurrent!==!0,j=(B&&!L&&!R.includes(I)?[I,...R]:R).map(Q=>{const ue=!d(Q,T),ie=m(Q,T),Y=ue?`${ie} (${u(Q,T)||"niet beschikbaar"})`:ie;return`<option value="${i(Q)}" ${Q===I?"selected":""}>${i(Y)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${i(T.label||"Bron")}</span>
              ${T.infoCopy?Vt(T.infoId||C,T.infoTitle||T.label||"Bron",T.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${i(C)}" ${t.loadingEntities?"disabled":""}>
              ${j}
            </select>
          </label>
        `,warning:B?`Huidige bron niet beschikbaar: ${u(I,T)}`:""}},q=({key:C,title:T,select:H,secondarySelect:I=null,secondarySelects:K=null,rows:R=[]})=>{const B=H&&H.when!==!1?$(H.key,H):{markup:"",warning:""},N=(Array.isArray(K)?K:I?[I]:[]).filter(Y=>Y&&Y.when!==!1).map(Y=>$(Y.key,Y)).filter(Y=>Y.markup),j=N.map(Y=>Y.markup).join(""),Q=N.map(Y=>Y.warning).find(Boolean)||"",ue=R.filter(Boolean).join(""),ie=`${B.markup}${j}`;return!ie&&!ue?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${i(C||H.key)}">
          <div class="oq-settings-source-card-head">
            <h4>${i(T)}</h4>
          </div>
          ${ie?`
            <div class="oq-settings-source-controls">
              ${ie}
            </div>
          `:""}
          ${B.warning||Q?`
            <p class="oq-settings-source-warning">${i(B.warning||Q)}</p>
          `:""}
          ${ue?`<div class="oq-settings-source-rows">${ue}</div>`:""}
        </article>
      `},M=String(E("waterSupplySource")||""),x=String(E("flowSource")||""),O=String(E("qFlowSource")||""),G=[q({key:"room-temperature",title:"Kamertemperatuur",select:{key:"roomTempSource",label:"Kamertemperatuur bron",haKeys:["roomTempHa","roomTempHaValid"]},rows:[v({label:"Actieve waarde",key:"roomTemp"}),v({label:"Gebruikte bron",value:g("roomTempEffectiveSource")}),o?v({label:"CIC",key:"cicRoomTemp"}):"",n?v({label:"OpenTherm",key:"otRoomTemp"}):"",...S({valueKey:"roomTempHa",validKey:"roomTempHaValid"})]}),q({key:"room-setpoint",title:"Kamer setpoint",select:{key:"roomSetpointSource",label:"Setpoint bron",haKeys:["roomSetpointHa","roomSetpointHaValid"]},rows:[v({label:"Actieve waarde",key:"roomSetpoint"}),v({label:"Gebruikte bron",value:g("roomSetpointEffectiveSource")}),o?v({label:"CIC",key:"cicRoomSetpoint"}):"",n?v({label:"OpenTherm",key:"otRoomSetpoint"}):"",...S({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"})]}),q({key:"water-supply",title:"Aanvoertemperatuur",select:{key:"waterSupplySource",label:"Aanvoer bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:M==="Local"&&y("localWaterSupplyTempSource")},rows:[v({label:"Actieve waarde",key:"supplyTemp"}),v({label:"Gebruikte bron",value:k()}),v({label:"Lokaal",key:"waterSupplyTempEsp"}),v({label:"DS18B20",key:"waterSupplyTempDs18b20"}),o?v({label:"CIC",key:"cicWaterSupplyTemp"}):"",...S({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),q({key:"flow-source",title:"Flow",select:{key:"flowSource",label:"Flow bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:o||x==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Quatt-flow bron",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:x==="Outdoor unit"&&y("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Flowmeterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:x==="Outdoor unit"&&y("outdoorUnitFlowMode")&&(!y("qFlowSource")||O!=="Local")}],rows:[v({label:"Actieve waarde",key:"flowSelected"}),v({label:"Gebruikte bron",value:h()}),v({label:"Lokaal",key:"controllerFlow"}),v({label:"Gecombineerd",key:"flowLocal"}),v({label:"HP1",key:"hp1Flow"}),v({label:"HP2",key:"hp2Flow"}),o?v({label:"CIC",key:"cicFlowrate"}):""]}),q({key:"outside-temperature",title:"Buitentemperatuur",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],infoId:"outsideTempSource-auto-info",infoCopy:s("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn zowel buitenunit als HA-invoer geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een van beide geldig, dan wordt die gebruikt.":"Auto gebruikt de geldige buitentemperatuur van de buitenunit."},rows:[v({label:"Actieve waarde",key:"outsideTempSelected"}),v({label:"Gebruikte bron",value:w()}),v({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...S({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"})]}),q({key:"heating-enable",title:"Warmtetoestemming",select:{key:"heatingEnableSource",label:"Warmtetoestemming bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],keepUnavailableCurrent:!0},rows:[v({label:"Verwarming toegestaan",value:c("heatingEnableSelected","Ja","Nee")}),v({label:"Gebruikte externe bron",value:g("heatingEnableEffectiveSource")}),v({label:"Bronselectie",value:c("heatingEnableValid","Geldig","Ongeldig")}),n?v({label:"OpenTherm",value:c("otThermostatChEnable","Toestemming","Geen toestemming")}):"",o?v({label:"CIC",value:c("cicChEnabled","Toestemming","Geen toestemming")}):"",...S({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:c("heatingEnableHa","Toestemming","Geen toestemming")})]}),q({key:"cooling-enable",title:"Koeltoestemming",select:{key:"coolingEnableSource",label:"Koeltoestemming bron",haKeys:["coolingEnableHa","coolingEnableHaValid"]},rows:[v({label:"Actieve waarde",value:c("coolingEnableSelected","Actief","Niet actief")}),v({label:"Gebruikte bron",value:g("coolingEnableEffectiveSource")}),v({label:"Handmatig",value:c("manualCoolingEnable","Aan","Uit")}),o?v({label:"CIC",value:c("cicCoolingEnabled","Actief","Normaal")}):"",...S({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:c("coolingEnableHa","Actief","Normaal")})]})].filter(Boolean);return G.length?te("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${G.join("")}</div>`):""}function tg(){return te("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${i(wr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${i(yr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-login-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="api">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">ESPHome API encryption</p>
                <strong class="oq-settings-quickstart-status-value">${i(Br())}</strong>
                <p class="oq-settings-quickstart-status-copy">${i(Vr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-api-security-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
        </div>
      `)}function og(){return te("Integratie","MQTT","Stel hier de broker in voor de experimentele, compacte publish-only telemetry-export van OpenQuatt.",`
        <div class="oq-settings-quickstart-status" data-oq-mqtt-item="mqtt">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">MQTT-status</p>
              <strong class="oq-settings-quickstart-status-value">${i($r())}</strong>
              <p class="oq-settings-quickstart-status-copy">${i(Er())}</p>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-mqtt-modal"
            >
              Aanpassen
            </button>
          </div>
        </div>
      `,'<span class="oq-settings-section-badge oq-settings-section-badge--experimental">Experimenteel</span>')}function Br(){const e=t.apiSecurityStatus;return e?e.pending_restart?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function Vr(){const e=t.apiSecurityStatus;return e?e.pending_restart?e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.":"API-encryptie wordt geladen."}function ng(){const e=t.settingsBackupBusy,o=io.length,n=$t.length;return te("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${i(String(o))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Secties</span>
              <strong class="oq-settings-backup-stat-value">${i(String(n))}</strong>
            </div>
          </div>
          <div class="oq-settings-backup-actions">
            <button
              class="oq-helper-button oq-helper-button--primary"
              type="button"
              data-oq-action="download-settings-backup"
              ${e?"disabled":""}
            >
              ${e?"Bezig...":"Backup downloaden"}
            </button>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-settings-backup-import"
              ${e?"disabled":""}
            >
              Backup herstellen
            </button>
          </div>
          <p class="oq-settings-action-note">Ontbrekende velden houden hun firmware-default. Onbekende velden uit een backup worden overgeslagen.</p>
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${i(t.settingsBackupError)}</p>`:""}
        </div>
      `)}function rg(){const e=t.settingsBackupBusy;return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-backup-import-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Beheer</p>
              <h2 class="oq-helper-modal-title" id="oq-backup-import-modal-title">Backup herstellen</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit backup import popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Kies een JSON-backup om de instellingen te vergelijken en daarna gericht terug te zetten.</p>
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Backupbestand</span>
            <input
              class="oq-settings-backup-input oq-settings-backup-import-input"
              type="file"
              accept=".json,application/json"
              data-oq-backup-file-input="true"
              ${e?"disabled":""}
            >
            <span class="oq-helper-modal-subvalue">Na selectie openen we automatisch het vergelijkingsoverzicht.</span>
          </div>
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${i(t.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
          </div>
        </section>
      </div>
    `}function ag(){const e=t.settingsBackupDraft;if(!e)return"";const o=e.summary||ds(e),n=String(e.source?.installation||e.source?.device||"Onbekend"),r=lo(),a=String(e.source?.firmware_version||"Onbekend"),s=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",d=ge(),u=typeof he=="function"?he():"",c=l!=="Onbekend"&&u&&l!==u,m=n!=="Onbekend"&&n!==r,f=c||m?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":o.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-backup-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Beheer</p>
              <h2 class="oq-helper-modal-title" id="oq-backup-modal-title">Backup herstellen</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit backup-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Deze backup zet alleen de instellingen terug die OpenQuatt in de web-app beheert. Klap een sectie open om backup- en huidige waarden naast elkaar te vergelijken.</p>
          <div class="oq-helper-modal-grid oq-settings-backup-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backup van</span>
              <strong class="oq-helper-modal-value">${i(n)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${i(l)} \xB7 Firmware: ${i(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${i(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${i(u)} \xB7 Firmware: ${i(d||"Onbekend")}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupkanaal</span>
              <strong class="oq-helper-modal-value">${i(s)}</strong>
              <span class="oq-helper-modal-subvalue">Schema v${i(String(e.schema_version||1))}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupinstellingen</span>
              <strong class="oq-helper-modal-value">${i(`${o.total} instellingen`)}</strong>
              <span class="oq-helper-modal-subvalue">${i(o.differenceCount?`${o.differenceCount} ${o.differenceCount===1?"verschil":"verschillen"} \xB7 ${o.currentPresent} op huidige installatie \xB7 ${o.unknown} onbekend`:`Alles komt overeen \xB7 ${o.currentPresent} op huidige installatie \xB7 ${o.unknown} onbekend`)}</span>
            </div>
          </div>
          <div class="oq-settings-backup-modal-sections">
            ${o.sectionSummaries.map(g=>`
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${i(g.label)}</strong>
                    <em>${i(`${g.total} ${g.total===1?"instelling":"instellingen"} \xB7 ${g.differenceCount?`${g.differenceCount} ${g.differenceCount===1?"verschil":"verschillen"}`:"Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${i(g.differenceCount?`${g.differenceCount} instelling${g.differenceCount===1?"":"en"} wijkt af of ontbreekt.`:"Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${g.rows.map(b=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${i(b.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${i(b.label)}</strong>
                          <span>${i(b.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${i(b.status)}">
                            <span>Backup</span>
                            <strong>${i(b.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${i(b.status)}">
                            <span>Nu</span>
                            <strong>${i(b.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${o.unknown||o.requiredMissing||m?" oq-settings-action-note--warning":""}">${i(f)}</p>
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${i(t.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.settingsBackupBusy?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${t.settingsBackupBusy?"disabled":""}>${t.settingsBackupBusy?"Herstellen...":"Herstellen"}</button>
          </div>
        </section>
      </div>
    `}function ig(){const e=uo(),o=Ni(),n=t.busyAction==="restartAction";return te("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          <div class="oq-settings-system-row" data-oq-diagnostics-row="uptime">
            <span class="oq-settings-system-row-label">Uptime</span>
            <strong class="oq-settings-system-row-value">${i(rr())}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="ip">
            <span class="oq-settings-system-row-label">IP-adres</span>
            <strong class="oq-settings-system-row-value">${i(ar())}</strong>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="updates">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Updates</p>
              <strong class="oq-settings-system-row-value">${i(e)}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="webserverLog">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Logboek</p>
              <strong class="oq-settings-system-row-value">${i(vp())}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="debugRecording">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Debugopname</p>
              <strong class="oq-settings-system-row-value">${i(Nr())}</strong>
              <p class="oq-settings-system-row-note">${i(xr())}</p>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="datetime">
            <span class="oq-settings-system-row-label">Datum/tijd</span>
            <strong class="oq-settings-system-row-value">${i(o)}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="espTemp">
            <span class="oq-settings-system-row-label">ESP-temp</span>
            <strong class="oq-settings-system-row-value">${i(Vi())}</strong>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="restart">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Herstart OpenQuatt</p>
              <strong class="oq-settings-system-row-value">Opnieuw opstarten</strong>
              <p class="oq-settings-system-row-note">Dit onderbreekt de webinterface kort.</p>
            </div>
            <button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${n?"disabled":""}
            >
              ${n?"Herstarten...":"Herstarten"}
            </button>
          </div>
        </div>
      `)}function sg(){const e=[Ya("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),Ya("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return te("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${J("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${y("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}function lg(){return te("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",Wr())}function cg(){return Wr("oq-settings-grid oq-settings-grid--modal")}function ug(){const e=[J("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),_e("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${_("coolingDemandMax")} max`}),J("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),J("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."),J("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."),J("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),o=y("coolingWithoutDewPointMode"),n=[y("coolingGuardMode")?Z("coolingGuardMode","Actieve beveiligingsroute","Laat zien of koeling nu via dauwpuntmeting, dauwpuntsbenadering of expliciet toestaan wordt begrensd.",V("coolingGuardMode","Onbekend")):"",y("coolingFallbackNightMinOutdoorTemp")?Z("coolingFallbackNightMinOutdoorTemp","Nachtminimum buitentemperatuur","Minimum buitentemperatuur van de afgelopen nacht. Warme nachten maken de dauwpuntsbenadering conservatiever.",V("coolingFallbackNightMinOutdoorTemp","\u2014")):"",y("coolingFallbackMinSupplyTemp")?Z("coolingFallbackMinSupplyTemp","Berekende minimum watertemperatuur","De conservatieve ondergrens die OpenQuatt gebruikt bij de dauwpuntsbenadering. Als die grens door warm weer hoger wordt dan zinvol is, houdt OpenQuatt rekening met de kamertemperatuur.",V("coolingFallbackMinSupplyTemp","\u2014")):"",y("coolingEffectiveMinSupplyTemp")?Z("coolingEffectiveMinSupplyTemp","Actieve minimum ondergrens","De ondergrens die de koeling nu daadwerkelijk gebruikt: dauwpunt plus marge, dauwpuntsbenadering, of de ingestelde minimumgrens bij expliciet toestaan.",V("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean);if(!e.length&&!o&&!n.length)return"";const r={"Dew point required":"Koel alleen als er een betrouwbare dauwpuntmeting beschikbaar is. Zonder dauwpuntmeting blijft koeling geblokkeerd.","Allow without dew point":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use fallback":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use dew point approximation":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, user responsibility":"Sta koeling expliciet toe zonder dauwpuntgrens. Ook een beschikbare dauwpuntmeting wordt dan genegeerd; alleen de ingestelde minimale koel-aanvoer geldt."};return te("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${e.length?`
          <div class="oq-settings-grid">
            ${e.join("")}
          </div>
        `:""}
        ${o||n.length?`
          <div class="oq-settings-grid">
            ${o?Pm("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",r,"oq-settings-field--span-2"):""}
            ${o?`
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline">
              <summary>Dauwpuntsbenadering bekijken</summary>
              <div class="oq-settings-callout-body">
                <p>Zonder dauwpuntmeting weet OpenQuatt niet zeker hoe koud het water mag worden zonder condensrisico. De dauwpuntsbenadering gebruikt daarom een voorzichtige minimum watertemperatuur.</p>
                <p>Onder de 20\xB0C buiten blijft koeling via deze benadering uit. Daarboven loopt de ondergrens geleidelijk op van 19\xB0C bij 20\xB0C buiten naar 22\xB0C bij 32\xB0C buiten. Warme nachten verhogen die grens nog iets.</p>
                <p>Wordt die grens hoger dan zinvol is voor de kamer, dan verlaagt OpenQuatt hem beperkt: ongeveer 1\xB0C onder de kamertemperatuur, maar nooit lager dan 20\xB0C. Voorbeeld: bij 22\xB0C kamer en een berekende grens van 23,5\xB0C wordt de grens ongeveer 21\xB0C. Zo kan OpenQuatt nog voorzichtig koelen. Een echte dauwpuntmeting blijft veiliger.</p>
                <p>Kies je expliciet toestaan, dan gebruikt OpenQuatt geen dauwpuntgrens: ook een beschikbare dauwpuntmeting wordt genegeerd. Koeling mag dan doorgaan op basis van de ingestelde minimale koel-aanvoer. Dat kan nuttig zijn bij een installatie die je zelf goed bewaakt, maar het condensrisico ligt dan volledig bij jou.</p>
                <div class="oq-settings-rule-groups">
                  <section class="oq-settings-rule-group">
                    <h4>Buitentemperatuur</h4>
                    <div class="oq-settings-rule-table">
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Onder 20\xB0C</span>
                        <span class="oq-settings-rule-value">Uit</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">20-32\xB0C</span>
                        <span class="oq-settings-rule-value">19\xB0C \u2192 22\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Vanaf 32\xB0C</span>
                        <span class="oq-settings-rule-value">Min. water 22\xB0C</span>
                      </div>
                    </div>
                  </section>
                  <section class="oq-settings-rule-group">
                    <h4>Nachtcorrectie</h4>
                    <div class="oq-settings-rule-table">
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Onder 18\xB0C</span>
                        <span class="oq-settings-rule-value">+0\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">18-19\xB0C</span>
                        <span class="oq-settings-rule-value">+0,5\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">19-20\xB0C</span>
                        <span class="oq-settings-rule-value">+1,0\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Vanaf 20\xB0C</span>
                        <span class="oq-settings-rule-value">+1,5\xB0C</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </details>
            `:""}
            ${n.join("")}
          </div>
        `:""}
      `)}function Ys(){const n={top:22,right:18,bottom:38,left:34},r=560-n.left-n.right,a=240-n.top-n.bottom,s=le[0].outdoor,l=le[le.length-1].outdoor,d=b=>n.left+(b-s)/(l-s)*r,u=b=>n.top+(70-b)/50*a,c=[20,30,40,50,60,70].map(b=>{const k=u(b);return`
          <line x1="${n.left}" y1="${k}" x2="${560-n.right}" y2="${k}" class="oq-helper-curve-grid" />
          <text x="8" y="${k+4}" class="oq-helper-curve-axis-label">${b}\xB0</text>
        `}).join(""),m=le.map(b=>`
        <text x="${d(b.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${i(b.label)}</text>
      `).join(""),f=le.map(b=>`${d(b.outdoor)},${u(be(b.key,E(b.key)))}`).join(" "),g=le.map(b=>{const k=be(b.key,E(b.key));return`
          <g>
            <circle
              cx="${d(b.outdoor)}"
              cy="${u(k)}"
              r="7"
              class="oq-helper-curve-point ${t.draggingCurveKey===b.key?"is-dragging":""}"
              data-curve-key="${i(b.key)}"
            />
            <text x="${d(b.outdoor)}" y="${u(k)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${k.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${c}
          <polyline points="${f}" class="oq-helper-curve-line" />
          ${g}
          ${m}
        </svg>
      </div>
    `}function Zs(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${Xa()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${Xa()}
        ${Oe()}
      </section>
    `}function dg(e){const o=String(e||"").trim();if(!o)return"";try{const n=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(o)?o:`http://${o}`);return n.protocol!=="http:"&&n.protocol!=="https:"?"":(n.port||(n.port="8080"),(!n.pathname||n.pathname==="/")&&(n.pathname="/beta/feed/data.json"),n.toString())}catch{return""}}function Js(){const e=String(E("cicFeedUrl")||"").trim(),o=t.quickStartCicFeedUrlDraft===null?e:String(t.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:o,normalizedDraftUrl:dg(o)}}function Xs(e,o){return`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${Vt("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--text">
            <input
              class="oq-helper-input oq-settings-integration-url-input"
              type="text"
              data-oq-quickstart-cic-url
              value="${i(e.draftUrl)}"
              placeholder="192.168.2.117"
              autocomplete="off"
              spellcheck="false"
              ${o?"disabled":""}
            >
          </label>
          ${e.draftUrl&&!e.normalizedDraftUrl?'<p class="oq-settings-source-warning">Vul een geldig IP-adres, hostname of een geldige HTTP(S)-URL in.</p>':""}
          ${e.normalizedDraftUrl?`<p class="oq-settings-action-note">Wordt ingesteld als ${i(e.normalizedDraftUrl)}</p>`:""}
        </div>
      </article>
    `}function ei(e){const o=String(e||"").trim().toLowerCase();return o==="heatpump_controller_q"||o.includes("q-edition")||o.includes("controller q")?"heatpump_controller_q":o==="heatpump_listener"||o.includes("listener")?"heatpump_listener":o==="waveshare"||o.includes("waveshare")?"waveshare":""}function el(){let e=ei(E("hardwareProfileText")),o=!1;return e||(e=ei(Ze().hardwareProfile)),!e&&y("qFlowSource")?(e="heatpump_controller_q",o=!0):!e&&y("flowSource")&&y("cicPollingEnabled")&&(e="remote",o=!0),{profile:e,inferred:o,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function mo(){const e=String(E("hpGeneration")||"").trim(),o=el(),n=e==="V1",{isQEdition:r,isRemoteProfile:a,hardwareKnown:s}=o,l=n&&a,d=r?n?"Local":"Outdoor unit":"",u=l?"CIC":"Outdoor unit",c=String(E("flowSource")||"").trim(),m=String(E("qFlowSource")||"").trim(),f=A("cicPollingEnabled"),g=A("cicJsonFeedOk"),b=A("cicDataStale"),k=Js(),h=c===u&&(!d||m===d),w=l?h&&f&&!!k.configuredUrl:h,v=l?"cicFlowrate":r&&n?"controllerFlow":he()==="duo"?"flowLocal":"hp1Flow",S=P(v),$=Number.isFinite(S),q=A("quickFlowTest");let M=s?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&w?M=g&&$?S>0?"Geldig":"Bron actief, geen circulatie":b?"Geen actuele CiC-data":g?"Verbonden, wacht op flow":"Verbinding controleren":!l&&w&&(M=$?S>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");const x=l?"CiC JSON-feed":r&&n?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",O=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":r&&n?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:o.hardwareLabel,requiresCic:l,qFlowTarget:d,flowSourceTarget:u,configurationApplied:w,sourceLabel:x,explanation:O,status:M,flowValue:S,flowAvailable:$,flowTestActive:q,canRunFlowTest:w,...k,canApply:s&&y("flowSource")&&(!d||y("qFlowSource"))&&(!l||y("cicPollingEnabled")&&y("cicFeedUrl")&&!!k.normalizedDraftUrl)}}function jr(){const e=el(),{isQEdition:o,isRemoteProfile:n}=e,r=String(E("roomTempSource")||"").trim(),a=String(E("roomSetpointSource")||"").trim(),s=r===a&&["CIC","OT thermostat","HA input"].includes(r)?r:"",l=o?"OT thermostat":t.quickStartThermostatSourceDraft||(s==="CIC"||s==="HA input"?s:"CIC"),d=Js(),c=r===l&&a===l&&(l!=="OT thermostat"||A("otEnabled"))&&(l!=="CIC"||A("cicPollingEnabled")&&!!d.configuredUrl),m=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],f=P(m[0]),g=P(m[1]),b=Number.isFinite(f)&&Number.isFinite(g),k=l==="OT thermostat"?A("otEnabled")&&!A("otLinkProblem")&&b:l==="CIC"?A("cicJsonFeedOk")&&!A("cicDataStale")&&b:A("roomTempHaValid")&&A("roomSetpointHaValid")&&b;let h=o||n?"Nog activeren":"Hardwareprofiel niet herkend";c&&(h=k?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");const w=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",v=o?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:o,isRemoteProfile:n,selectedSource:l,sourceLabel:w,explanation:v,configurationApplied:c,status:h,roomTempValue:f,roomSetpointValue:g,valuesAvailable:b,...d,canApply:(o||n)&&y("roomTempSource")&&y("roomSetpointSource")&&(l!=="OT thermostat"||y("otEnabled"))&&(l!=="CIC"||y("cicPollingEnabled")&&y("cicFeedUrl")&&!!d.normalizedDraftUrl)}}function pg(){const e=mo(),o=t.busyAction==="quickstart-flow-source"||t.busyAction==="quickstart-flow-refresh",n=t.busyAction==="quickstart-flow-test-start"||t.busyAction==="quickstart-flow-test-abort",r=o||n||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",s=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?Xs(e,r):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ae("quickStartFlowSource","Vastgestelde flowbron",e.explanation,`
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${i(e.hardwareLabel)} \xB7 Quatt ${i(e.generation||"onbekend")}</p>
                    <strong class="oq-settings-quickstart-status-value">${i(e.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${i(e.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${a}"><span>Status</span><strong>${i(e.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Actuele flow</span><strong>${i(s)}</strong></div>
                </div>
              </div>
            `,"oq-settings-field--span-2")}
          ${l}
        </div>
        <div class="oq-helper-actions">
          <button
            class="oq-helper-button oq-helper-button--primary"
            type="button"
            data-oq-action="apply-quickstart-flow-source"
            ${r||!e.canApply?"disabled":""}
          >
            ${t.busyAction==="quickstart-flow-source"?"Flowconfiguratie opslaan...":e.configurationApplied?"Flowconfiguratie opnieuw opslaan":e.requiresCic?"CiC-flowconfiguratie opslaan":"Flowconfiguratie activeren"}
          </button>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="refresh-quickstart-flow-signal"
            ${r||!e.configurationApplied?"disabled":""}
          >
            ${t.busyAction==="quickstart-flow-refresh"?"Signaal controleren...":"Signaal opnieuw controleren"}
          </button>
          ${e.canRunFlowTest?`
            <button
              class="oq-helper-button ${e.flowTestActive?"":"oq-helper-button--ghost"}"
              type="button"
              data-oq-action="${e.flowTestActive?"abort-quickstart-flow-test":"start-quickstart-flow-test"}"
              ${o||n?"disabled":""}
            >
              ${n?e.flowTestActive?"Waterpomptest stoppen...":"Waterpomptest starten...":e.flowTestActive?"Waterpomptest stoppen":"Waterpomptest starten (30 sec)"}
            </button>
          `:""}
        </div>
        <p class="oq-settings-action-note">${e.flowTestActive?"Alleen de waterpomp draait op 400 iPWM. Het kan enkele seconden duren voordat de circulatie op gang komt en de flowmeter een waarde toont. De firmware stopt de test automatisch na maximaal 30 seconden.":"0 L/h kan normaal zijn als de circulatiepomp stilstaat. De waterpomptest gebruikt 400 iPWM, start geen compressor en stopt automatisch na 30 seconden."}</p>
        ${Oe({nextDisabled:!e.configurationApplied||e.flowTestActive||n,nextDisabledLabel:n?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function mg(){const e=jr(),o=t.busyAction==="quickstart-thermostat-source",n=e.status==="Geldig"?" is-active":"",r=e.isRemoteProfile?`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${Vt("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--select">
            <select data-oq-quickstart-thermostat-source ${o?"disabled":""}>
              <option value="CIC" ${e.selectedSource==="CIC"?"selected":""}>CiC JSON-feed</option>
              <option value="HA input" ${e.selectedSource==="HA input"?"selected":""}>Home Assistant</option>
            </select>
          </label>
          <p class="oq-settings-action-note">Deze keuze geldt altijd voor zowel kamertemperatuur als kamer-setpoint.</p>
        </div>
      </article>
    `:"",a=e.selectedSource==="CIC"?Xs(e,o):"",s=e.selectedSource==="HA input"?`
      <article class="oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ae("quickStartThermostatSourceStatus",e.isQEdition?"Vastgestelde thermostaatbron":"Gekozen thermostaatbron",e.explanation,`
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${i(e.hardwareLabel)}</p>
                    <strong class="oq-settings-quickstart-status-value">${i(e.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${i(e.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${n}"><span>Status</span><strong>${i(e.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamertemperatuur</span><strong>${Number.isFinite(e.roomTempValue)?`${e.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamer-setpoint</span><strong>${Number.isFinite(e.roomSetpointValue)?`${e.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                </div>
              </div>
            `,"oq-settings-field--span-2")}
          ${r}
          ${a}
          ${s}
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-quickstart-thermostat-source" ${o||!e.canApply?"disabled":""}>
            ${o?"Thermostaatconfiguratie opslaan...":e.configurationApplied?"Thermostaatconfiguratie opnieuw opslaan":e.selectedSource==="OT thermostat"?"OpenTherm-configuratie activeren":"Thermostaatconfiguratie opslaan"}
          </button>
        </div>
        ${Oe({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function gg(){return!t.quickStartModalOpen||t.loadingEntities||t.complete===null||t.complete&&t.quickStartModalMode!=="generation"?"":t.quickStartModalMode==="generation"?`
        <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
          <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart oq-helper-modal--generation" data-oq-quickstart-scroller data-oq-quickstart-step="generation" role="dialog" aria-modal="true" aria-labelledby="oq-generation-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Installatie</p>
                <h2 class="oq-helper-modal-title" id="oq-generation-modal-title">Quatt Hybrid-versie aanpassen</h2>
                <p class="oq-helper-modal-copy">Kies de versie die bij jouw Quatt hoort. Deze keuze bepaalt de basis van de regeling.</p>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit versie-popup">\xD7</button>
            </div>
            ${Zs("picker")}
          </section>
        </div>
      `:`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${i($g().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">\xD7</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${kg()}
            ${Eg()}
          </div>
        </section>
      </div>
    `}function tl(){return t.root?t.root.querySelector("[data-oq-quickstart-scroller]"):null}function hg(){const e=tl();return e?{stepId:String(e.dataset.oqQuickstartStep||""),scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Rr(e)}:null}function fg(e){if(!e)return;const o=tl();if(!o||String(o.dataset.oqQuickstartStep||"")!==e.stepId)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}const n=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,n)}function ti(e,o=!0){if(!e)return;const n=Number(t.quickStartScrollRestoreToken||0)+1;t.quickStartScrollRestoreToken=n;const r=()=>{t.quickStartScrollRestoreToken!==n||!t.quickStartModalOpen||fg(e)};if(o){window.requestAnimationFrame(r);return}r()}function oi(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${_s()}
        ${Ws("oq-settings-grid oq-settings-grid--quickstart")}
        ${Oe()}
      </section>
    `}function bg(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${Qs("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${Oe()}
      </section>
    `}function vg(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${Bs("oq-settings-grid oq-settings-grid--quickstart")}
        ${Oe()}
      </section>
    `}function wg(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("heating"))}</p>
        <h2 class="oq-helper-section-title">${i(re()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${i(re()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${re()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${Ks()}</div>
            <div class="oq-settings-curve-shell">
              ${Ys()}
            </div>
            ${Is()}
          `:`
            ${Vs("oq-settings-grid oq-settings-grid--quickstart")}
            ${zs()}
          `}
        ${Oe()}
      </section>
    `}function yg(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${js("oq-settings-grid oq-settings-grid--quickstart")}
        ${Oe()}
      </section>
    `}function Sg(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${Wr("oq-settings-grid oq-settings-grid--quickstart")}
        ${Oe()}
      </section>
    `}function qg(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Me("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${Ag()}
        ${t.controlNotice?`<p class="oq-helper-notice">${i(t.controlNotice)}</p>`:""}
        ${t.controlError?`<p class="oq-helper-error">${i(t.controlError)}</p>`:""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${t.busyAction?"disabled":""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${t.busyAction?"disabled":""}>
            ${t.busyAction==="apply"?"Afronden...":"Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${t.busyAction?"disabled":""}>
            ${t.busyAction==="reset"?"Resetten...":"Setup-status resetten"}
          </button>
        </div>
      </section>
    `}function kg(){return t.currentStep==="generation"?Zs():t.currentStep==="boiler"?y("boilerCvAssistEnabled")?bg():oi():t.currentStep==="flow-source"?pg():t.currentStep==="thermostat-source"?mg():t.currentStep==="flow"?vg():t.currentStep==="heating"?wg():t.currentStep==="water"?yg():t.currentStep==="silent"?Sg():t.currentStep==="confirm"?qg():oi()}function mt(){return Bo.filter(e=>!e.optionalEntity||y(e.optionalEntity))}function Me(e){const o=mt().findIndex(n=>n.id===e);return`Stap ${Math.max(0,o)+1}`}function Cg(e){const o=rn(),n=e===o,r=t.complete===!0||e<o;return{tone:n?"current":r?"done":"upcoming",label:n?"Actief":r?"Gereed":"Volgend",current:n}}function Tg(e=!1){return mt().map((o,n)=>{const r=Cg(n);return`
        <button
          class="oq-helper-field oq-helper-field--step${e?" oq-helper-field--compact":""} is-${r.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${i(o.id)}"
          aria-current="${r.current?"step":"false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>${String(n+1).padStart(2,"0")}. ${i(o.title)}</h3>
            <span class="oq-helper-field-step-state">${r.label}</span>
          </div>
          <p>${i(o.copy)}</p>
        </button>
      `}).join("")}function $g(){const e=mt();return e.find(o=>o.id===t.currentStep)||e[0]||Bo[0]}function rn(){return Math.max(0,mt().findIndex(e=>e.id===t.currentStep))}function ni(e){const o=mt(),n=Math.min(o.length-1,Math.max(0,rn()+e));t.currentStep=o[n]?.id||Bo[0].id}function Oe(e={}){const o=rn(),n=mt(),r=o>0?n[o-1]:null,a=o<n.length-1?n[o+1]:null;return`
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${o+1} van ${n.length}</strong>
          <span>${i(a?`Hierna: ${a.title}`:"Je bent bij de laatste stap")}</span>
        </div>
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${r?"":"disabled"}>
            Vorige
          </button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="next-step" ${a&&!e.nextDisabled?"":"disabled"}>
            ${a?e.nextDisabled?e.nextDisabledLabel||"Configureer eerst":"Volgende":"Laatste stap"}
          </button>
        </div>
      </div>
    `}function Eg(){const e=rn(),o=mt();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${o.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${Tg(!0)}
        </div>
        ${t.controlNotice?`<p class="oq-helper-notice">${i(t.controlNotice)}</p>`:""}
        ${t.controlError?`<p class="oq-helper-error">${i(t.controlError)}</p>`:""}
      </section>
    `}function Ag(){const e=Ee(V("hpGeneration")),o=re()?"Stooklijn":"Power House",n=w=>Ee(V(w)),r=[],a=re()?[["Regelprofiel",n("curveControlProfile")],["Aanvoer bij -20\xB0C",_("curveM20")],["Aanvoer bij -10\xB0C",_("curveM10")],["Aanvoer bij 0\xB0C",_("curve0")],["Aanvoer bij 5\xB0C",_("curve5")],["Aanvoer bij 10\xB0C",_("curve10")],["Aanvoer bij 15\xB0C",_("curve15")],["Fallback-aanvoer",_("curveFallbackSupply")]]:[["Profiel",n("phResponseProfile")],["Rated maximum house power",_("housePower")],["Maximum heating outdoor temperature",_("houseOutdoorMax")],["Temperatuurreactie",_("phKp")],["Comfort onder setpoint",_("phComfortBelow")],["Comfort boven setpoint",_("phComfortAbove")]],s=String(E("flowControlMode")||""),l=mo(),d=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],u=jr(),c=[["Status",u.status],["Kamertemperatuur",Number.isFinite(u.roomTempValue)?`${u.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(u.roomSetpointValue)?`${u.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],m=[["Flowregeling",s==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],s==="Manual PWM"?["Vaste pompstand",_("manualIpwm")]:["Gewenste flow",_("flowSetpoint")]],f=y("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",A("boilerCvAssistEnabled")?"Ja":"Nee"],...A("boilerCvAssistEnabled")?[["Boiler rated heat power",_("boilerRatedHeatPower")]]:[]]:[],g=[["Maximale watertemperatuur",_("maxWater")]],b=[["Start stille uren",Tn(E("silentStartTime"))||"\u2014"],["Einde stille uren",Tn(E("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",_("silentMax")],["Maximaal niveau overdag",_("dayMax")]],k=w=>`
      <div class="oq-helper-review-list">
        ${w.filter(v=>v&&v[1]).map(([v,S])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${i(v)}</span>
                <strong class="oq-helper-review-value">${i(S)}</strong>
              </div>
            `).join("")}
      </div>
    `,h=(w,v,S="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${i(w)}</h3>
        ${S?`<p class="oq-helper-review-summary"><strong>${i(S)}</strong></p>`:""}
        ${k(v)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${h("Quatt Hybrid-versie",r,e)}
        ${h("Flowmeting",d,l.sourceLabel)}
        ${h("Verwarmingsstrategie",a,o)}
        ${h("Watertemperatuur",g)}
        ${h("Thermostaatgegevens",c,u.sourceLabel)}
        ${h("Flowregeling",m)}
        ${f.length?h("CV-ketel / boiler",f):""}
        ${h("Stille uren",b)}
      </div>
    `}function Mg({label:e,value:o,tone:n,note:r,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${i(n)}${a?" oq-overview-stat--status":""}">
        <p>${i(e)}</p>
        <strong>${i(o)}</strong>
        <span>${i(r)}</span>
      </article>
    `}function an(e,o=!1){return e.map(n=>Mg({...n,value:Object.prototype.hasOwnProperty.call(n,"key")?$e(n.key):n.value,status:o})).join("")}function _r(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${i(e)}</h3>
      </div>
    `}function ol(){const e=nn();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${i(ve(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${i(e.title)}</strong>
          <span>${i(e.problems.map(o=>o.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function nl({className:e,title:o,copy:n,body:r,signature:a=""}){const s=a?` data-render-signature="${i(a)}"`:"";return`
      <section class="${i(e)}"${s}>
        ${o?`<div class="oq-overview-system-copy"><h3>${i(o)}</h3><p>${i(n)}</p></div>`:""}
        ${r}
      </section>
    `}function rl(e,o){return o?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function Pg(e,o){const n=o?"active":"neutral",r=rl(e,o);return`<span class="oq-overview-chip oq-overview-chip--${i(n)}" data-oq-bind="panel-status">${i(r)}</span>`}function Lg(e){return`
      <span
        class="oq-overview-chip oq-overview-chip--warning"
        data-oq-bind="panel-warning"
        tabindex="0"
        aria-label="${i(`Waarschuwing: ${e}`)}"
      >
        <svg class="oq-overview-chip-warning-icon" viewBox="0 0 20 18" aria-hidden="true">
          <path d="M10 1.6 L18.2 16.4 H1.8 Z" />
          <rect x="9.1" y="5.4" width="1.8" height="5.8" rx="0.9" />
          <circle cx="10" cy="13.6" r="1.1" />
        </svg>
        <span>Waarschuwing</span>
        <span class="oq-overview-chip-warning-tooltip" role="tooltip">${i(e)}</span>
      </span>
    `}function al(e,o,n,r){return`${n?Lg(r):""}${Pg(e,o)}`}function Hg(e,o,n,r,a){if(!e)return;const s=ve({mode:o,running:n,warningActive:r,failureText:a});e.dataset.renderSignature!==s&&(Ke(e,al(o,n,r,a)),e.dataset.renderSignature=s)}function Nn(e,o,n=""){return`
      <div class="oq-overview-row">
        <span>${i(e)}</span>
        <strong>${i(n||V(o))}</strong>
      </div>
    `}function Rg(e,o,n="blue",r=""){return`
      <article class="oq-overview-metric oq-overview-metric--${i(n)}">
        <span>${i(e)}</span>
        <strong>${i(o)}</strong>
        ${r?`<p>${i(r)}</p>`:""}
      </article>
    `}function Ng(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}function F(e,o,n=""){const r=Number(e);return Number.isNaN(r)?"\u2014":`${r.toFixed(o)}${n?` ${n}`:""}`}function xg(e){if(!Number.isFinite(e)||e<0)return"\u2014";const o=Math.floor(e),n=Math.floor(o/1440),r=Math.floor(o%1440/60),a=o%60;return n>0?`${n}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function Og(e){const n=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!n)return Number.NaN;const r=Number(n[1]),a=Number(n[2]);return Number.isNaN(r)||Number.isNaN(a)||r<0||r>23||a<0||a>59?Number.NaN:r*60+a}function Dg(e){const o=Og(V("timeNowHhmm",""));if(!Number.isFinite(o))return"";const n=Math.round(e),r=((o-n)%1440+1440)%1440,a=Math.floor(r/60),s=r%60;return`${String(a).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function Fg(e,o){const n=Math.max(0,(Number(o)-Number(e))/6e4),r=xg(n),a=y("timeValid")&&A("timeValid")?Dg(n):"";return a?{value:a,note:`${r} geleden`}:{value:`${r} geleden`,note:"Geen tijdsync"}}function Ig(e){const o=Number(e);return Number.isNaN(o)?"\u2014":`${o>0?"+":o<0?"-":""}${Math.abs(o).toFixed(0)} W`}function il(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>y(e))||""}function Wg(){return["hp1WaterIn","hp2WaterIn"].find(e=>y(e))||""}function sl(e=V("controlModeLabel","")){const o=String(e||"").toLowerCase();return o.includes("cm5")||o.includes("cooling")||o.includes("koeling")}function et(){return sl()}function ll(e,o){const n=String(e||"").trim().toLowerCase();return n==="waiting for room request"||n==="wacht op kamervraag"?!0:o?!1:n==="flow too low"||n==="flow te laag"||n==="flow unavailable"}function cl(){return et()?"Koeling":re()?"Stooklijn":"Power House"}function Bg(){const e=["phouseReq","strategyRequestedPower"];for(const o of e){const n=P(o);if(!Number.isNaN(n))return n}return Number.NaN}function ul(){const e=Bg(),o=P("phouseHouse"),n=P("totalHeat"),r=P("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(o)?Number.NaN:e-o;let s="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(r)&&e>r+150?(s="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(n)&&n<e-250?(s="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(n)&&n>e+250?(s="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(n)&&(s="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:F(e,0,"W"),houseText:F(o,0,"W"),correctionText:Ig(a),capacityText:$e("hpCapacity"),statusTitle:s,statusCopy:l}}function dl(){const e=P("curveSupplyTarget"),o=P("supplyTemp"),n=il(),r=n?P(n):Number.NaN,a=Number.isNaN(e)||Number.isNaN(o)?Number.NaN:o-e,s=!!n&&Number.isNaN(r);let l="Stuurt op buitentemperatuur",d="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return s?(l="Fallback actief",d="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",d="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",d="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",d="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:$e("curveSupplyTarget"),supplyText:$e("supplyTemp"),deltaText:Ng(a),capacityText:$e("hpCapacity"),statusTitle:l,statusCopy:d}}function pl(){const e=P("supplyTemp"),o=V("coolingGuardMode",""),n=V("coolingFallbackNightMinOutdoorTemp","\u2014"),r=P("coolingSupplyError"),a=P("coolingDemandRaw"),s=A("coolingPermitted"),l=A("coolingRequestActive"),d=V("coolingBlockReason","Onbekend"),u=Ds(d),c=ll(d,l);let m="Wacht op koelvraag",f="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return c?(m="Wacht op koelvraag",f="Koeling staat aan en wacht nog op actieve koelvraag vanuit de kamerregeling."):s?l?!Number.isNaN(a)&&a<=0?(m="Houdt doel vast",f="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(r)&&r>1?(m="Trekt aanvoer omlaag",f="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(r)&&r>.2?(m="Benadert koeldoel",f="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(r)||(m="Koelt rustig door",f="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(m="Koeling gereed",f="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(m="Koeling geblokkeerd",f=`Blokkade: ${u}.`),{targetText:$e("coolingSupplyTarget"),supplyText:$e("supplyTemp"),safeFloorText:$e("coolingEffectiveMinSupplyTemp"),guardMode:o,fallbackNightMin:n,demandText:$e("coolingDemandRaw"),statusTitle:m,statusCopy:f,permitted:s,requestActive:l,blockReason:u,waitingForRoomRequest:c}}function xn(){if(et()){const o=pl(),n=o.guardMode.toLowerCase(),r=n.includes("user responsibility"),a=n.includes("fallback");return{title:"Koelregeling",copy:r?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:o.targetText,focusCopy:o.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:o.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:r?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:o.safeFloorText,tone:"blue",note:r?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${o.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:o.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(re()){const o=dl();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:o.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:o.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:o.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:o.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}const e=ul();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function ml(e){return nl({className:"oq-overview-system",title:e.title,copy:e.copy,signature:ve(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${i(e.focusLabel)}</span>
            <strong>${i(e.focusValue)}</strong>
            <p>${i(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(o=>Rg(o.label,o.value,o.tone,o.note)).join("")}
        </div>
      `})}function Vg(){if(!A("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(et()){const r=pl(),a=r.waitingForRoomRequest?"neutral":r.permitted?r.statusTitle==="Koelt rustig door"||r.statusTitle==="Houdt temperatuur vast"?"green":r.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:r.statusTitle,tone:a}}if(bh())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};const o=(re()?dl():ul()).statusTitle;return{label:"Regeling nu",value:o,tone:o==="In balans"||o==="Dicht bij doel"?"green":o==="Nog aan het opbouwen"||o==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function jg(){return A("openquattEnabled")?et()?A("coolingPermitted")?A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:V("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:A("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function gl(e,o){const n=Vg(),r=jg();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:o,tone:"orange",note:"actieve modus"},{label:"Regeling",value:n.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:r.value,tone:"orange",note:"actieve randvoorwaarde"}]}function hl(e,o){const n=gl(e,o);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${i(ve(n))}">
        ${_r("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${an(n,!0)}
        </div>
      </section>
    `}function fl(){const e=et();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function _g(){const e=A("openquattEnabled"),o=E("openquattResumeAt"),n=Sr(o),r=(t.loadingEntities||t.entitySyncInFlight)&&!y("openquattResumeAt"),a=A("manualCoolingEnable"),s=String(E("silentModeOverride")||"Schedule"),l=!A("coolingPermitted"),d=A("coolingRequestActive"),u=sl(),c=V("coolingBlockReason",""),m=ll(c,d);let f="Uit",g="Koeling staat uit.";a&&u?(f="Actief",g="Koeling draait nu."):a&&m?(f="Aan",g="Koeling staat aan en wacht op koelvraag."):a&&l?(f="Geblokkeerd",g=Ds(c||"Koeling wacht nog op veilige condities.")):a&&d?(f="Start bijna",g="Er is koelvraag. Koeling start zodra dat kan."):a&&(f="Aan",g="Koeling staat aan en wacht op koelvraag.");let b="Uit",k="Stille modus staat uit.",h="neutral";return s==="On"?(b="Aan",k="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",h="orange"):s==="Schedule"&&(b="Schema",A("silentActive")?(k="Stille modus staat nu aan via het tijdvenster.",h="violet"):k="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":n?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[r?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:n?"Hervat automatisch":"Hervatten",value:n?qr(o,!0):"Handmatig",tone:n?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:f,copy:g,buttonLabel:a?"Zet uit":"Zet aan",nextState:a?"off":"on",tone:a?u?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:b,copy:k,tone:h,kind:"select",selectedOption:s,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(w=>y(w.key))}function Kg(e=[]){return e.length?`
      <div class="oq-overview-controlpanel-meta">
        ${e.map(o=>`
          <div class="oq-overview-controlpanel-meta-item oq-overview-controlpanel-meta-item--${i(o.tone||"neutral")}${o.loading?" oq-overview-controlpanel-meta-item--loading":""}">
            <span>${i(o.label)}</span>
            <strong>${o.loading?`
              <span class="oq-overview-controlpanel-loading">
                <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
                <span>${i(o.value)}</span>
              </span>
            `:i(o.value)}</strong>
          </div>
        `).join("")}
      </div>
    `:""}function qt({className:e,action:o,label:n,busy:r=!1,loading:a=!1,attrs:s=""}){return`
      <button
        class="${e}${r?" is-busy":""}"
        type="button"
        ${o?`data-oq-action="${i(o)}"`:""}
        ${s}
        ${t.busyAction||a?"disabled":""}
      >${a?`
        <span class="oq-overview-controlpanel-loading">
          <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
          <span>${i(n)}</span>
        </span>
      `:i(r?"Bezig...":n)}</button>
    `}function zg(e){if(e.kind==="openquatt-control"){const o=t.busyAction==="openquatt-regulation",n=(t.loadingEntities||t.entitySyncInFlight)&&!y("openquattResumeAt");return A("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${qt({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:o})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${qt({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:o})}
            ${qt(n?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:Sr()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){const o=t.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(n=>qt({className:`oq-overview-controlpanel-segment${e.selectedOption===n.value?" is-selected":""}`,action:"select-overview-control-option",label:n.label,busy:o,attrs:`data-control-key="${i(e.key)}" data-control-option="${i(n.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${qt({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:t.busyAction===`switch-${e.key}`,attrs:`data-control-key="${i(e.key)}" data-control-state="${i(e.nextState)}"`})}
      </div>
    `}function bl(){const e=_g();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${_r("Bediening")}
        ${e.map(o=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${i(o.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${i(o.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${i(o.tone)}">${i(o.status)}</strong>
            </div>
            <p>${i(o.copy)}</p>
            ${Kg(o.meta)}
            ${zg(o)}
          </article>
        `).join("")}
      </section>
    `:""}function Ug(e){const o=V("controlModeLabel");return`
      <section class="oq-overview-summary-shell">
        <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Overzicht</p>
            <h2 class="oq-helper-section-title">Live regeling</h2>
            <p class="oq-helper-section-copy">Hier zie je in \xE9\xE9n oogopslag hoe OpenQuatt nu werkt.</p>
          </div>
        </div>
        <div class="oq-overview-summary-layout">
          <div class="oq-overview-summary-main">
            <section class="oq-overview-kpis" aria-label="Kerncijfers">
              ${_r("Kerncijfers")}
              <div class="oq-overview-top">
                ${an(fl())}
              </div>
            </section>
            ${hl(e,o)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${i(gs())}">
            ${bl()}
          </aside>
        </div>
      </section>
    `}function Kr(){const e=il(),o=Wg();return et()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...o?[{label:"Retourtemperatuur",key:o}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function vl(e=Kr()){return ve({...e,values:e.rows.map(o=>o.value||V(o.key))})}function wl(){const e=Kr();return nl({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:vl(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(o=>Nn(o.label,o.key,o.value||"")).join("")}
        </div>
      `})}const ri=360;function De(){const e=Qn(t.trendWindowHours||Et);return e!==t.trendWindowHours&&Yn(e),e}function yl(e=De()){return Math.max(1,Number(e)||24)*60*60*1e3}function Gg(e=De()){const o=Number(e)||24;return o>=72&&o%24===0?`${o/24}d`:`${o}u`}function zr(e=De()){const o=Number(e)||24;if(o>=72&&o%24===0){const n=o/24;return`${n} ${n===1?"dag":"dagen"}`}return`${o} uur`}function vn(e){if(!Number.isFinite(e))return"\u2014";const o=new Date(e);if(Number.isNaN(o.getTime()))return"\u2014";const n={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(o)}catch{return o.toLocaleString("nl-NL",n)}}function Qg(e){const o=String(e||"").trim().split("|");if(o.length<5)return null;const n=Number(o[0]);if(!Number.isFinite(n))return null;const r=a=>{const s=Number(a);return Number.isFinite(s)?s:null};return{t:n,outside:r(o[1]),supply:r(o[2]),room:o.length>=8?r(o[3]):null,roomSetpoint:o.length>=8?r(o[4]):null,flow:o.length>=8?r(o[5]):null,input:o.length>=8?r(o[6]):r(o[3]),output:o.length>=8?r(o[7]):r(o[4])}}function On(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}function wn(e=De()){return typeof window>"u"||!window.__OQ_DEV_TREND_MOCKS__||typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples!="function"?[]:window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(e)}function Sl(){const e=yl(),o=String(t.trendHistoryRaw||"").trim();if(!o)return On()?wn():[];const n=o.split(/\r?\n/).map(Qg).filter(Boolean),r=n.length?n[n.length-1].t:Number.NaN,a=Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:Number.isFinite(r)?r:Number.NaN;if(!Number.isFinite(a))return n.length?n.slice(-ri):wn();const s=Math.max(0,a-e),l=n.filter(d=>d.t>=s).slice(-ri);return l.length?l:On()?wn(windowHours):[]}function Ur(){const e=De(),o=zr(e),n=Sl(),r=On()&&n.length===0,a=et();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${o}.`,tone:"orange",samples:n,mock:r,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${o}.`,tone:"green",samples:n,mock:r,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${o}.`,tone:"slate",samples:n,mock:r,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:s=>{const l=Number(s?.input),d=Number(s?.output);return!Number.isFinite(l)||!Number.isFinite(d)||l<=0?Number.NaN:d/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${o}.`,tone:"blue",samples:n,mock:r,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${o}.`,tone:"sky",samples:n,mock:r,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function Yg(e){const o=e.samples[e.samples.length-1]||null;return ve({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:o?.t||0,trendSignature:t.trendHistorySignature||"",latestValues:o?[o.outside,o.supply,o.room,o.roomSetpoint,o.flow,o.input,o.output]:[]})}function to(e,o){if(!e||!o)return Number.NaN;const n=typeof e.derive=="function"?e.derive(o):o?.[e.sampleKey],r=Number(n);return Number.isFinite(r)?r:Number.NaN}function Zg(e,o){const n=[];return e.forEach(r=>{o.forEach(a=>{const s=to(a,r);Number.isFinite(s)&&n.push(s)})}),n.length?{min:Math.min(...n),max:Math.max(...n)}:{min:0,max:1}}function Jg(e){if(!Number.isFinite(e)||e<=0)return 1;const o=Math.floor(Math.log10(e)),n=e/10**o;let r;return n<=1?r=1:n<=2?r=2:n<=5?r=5:r=10,r*10**o}function Xg(e,o){const n=Number.isFinite(e?.min)?e.min:0,r=Number.isFinite(e?.max)?e.max:1,a=Math.max(r-n,1),s=Array.isArray(o)?o.map(g=>Number(g?.axisMin)).find(g=>Number.isFinite(g)):Number.NaN,l=Array.isArray(o)?o.map(g=>Number(g?.axisMax)).find(g=>Number.isFinite(g)):Number.NaN,d=Array.isArray(o)?o.map(g=>Number(g?.axisTickStep)).find(g=>Number.isFinite(g)&&g>0):Number.NaN,u=Math.max(1,Number.isFinite(d)?d:Jg(a/4)),c=[];if(Number.isFinite(s)||Number.isFinite(l)){const g=Number.isFinite(s)?s:0,b=Number.isFinite(l)?l:Math.ceil(r/u)*u,k=Math.floor(g/u)*u,h=Math.ceil(b/u)*u;for(let w=k;w<=h+u*.5;w+=u)c.push(w)}else{const g=a/u,b=g<=1.8?3:g<=4.25?5:7,k=Math.floor(b/2),h=(n+r)/2,w=Math.round(h/u)*u;for(let v=-k;v<=k;v+=1)c.push(w+v*u)}const m=c[0],f=c[c.length-1];return{ticks:c,axisMin:m,axisMax:f,axisDecimals:0}}function ql(e,o,n={}){const r=Number(n.windowHours),a=Number.isFinite(r)?r:De(),s=yl(a),l=640,d=220,u=46,c=18,m=18,f=34,g=l-u-c,b=d-m-f,k=e[e.length-1],h=!!n.mockData,w=h?s:Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:k?k.t:0,v=h?0:w-s,S=Math.max(w-v,1),$=S,q=Zg(e,o),M=q.min===q.max?{min:q.min-1,max:q.max+1}:{min:q.min-Math.max((q.max-q.min)*.12,1),max:q.max+Math.max((q.max-q.min)*.12,1)},x=Xg(q,o),O=R=>u+(R-v)/S*g,G=R=>{if(!Number.isFinite(R))return Number.NaN;const B=(R-M.min)/Math.max(M.max-M.min,1);return m+(1-Math.min(1,Math.max(0,B)))*b},C=[0,.5,1].map(R=>u+g*R),T=x.ticks.map(R=>G(R)),H=x.ticks.map((R,B)=>({x:u-10,y:T[B],text:F(R,x.axisDecimals)})),I=e.map(R=>{const B=O(R.t),L=o.map(N=>{const j=to(N,R);return Number.isFinite(j)?{seriesId:N.id||N.sampleKey||N.label,tone:N.tone,label:N.label,decimals:N.decimals,unit:N.unit,value:j,x:B,y:G(j)}:null});return{sample:R,x:B,values:L}}),K=o.flatMap(R=>{const B=[];let L=[];return e.forEach(N=>{const j=to(R,N);if(!Number.isFinite(j)){L.length&&(B.push(L),L=[]);return}L.push({x:O(N.t),y:G(j)})}),L.length&&B.push(L),B.map(N=>N.length<2?{tone:R.tone,points:N,path:""}:{tone:R.tone,points:N,path:N.map((j,Q)=>`${Q===0?"M":"L"} ${j.x.toFixed(1)} ${j.y.toFixed(1)}`).join(" ")})});return{width:l,height:d,left:u,right:c,top:m,bottom:f,plotWidth:g,plotHeight:b,latest:k,uptimeMs:$,endTime:w,startTime:v,span:S,windowHours:a,range:q,displayRange:M,gridXs:C,gridYs:T,yAxisLabels:H,points:I,tracks:K,series:o}}function Gr(){return ve({windowHours:De(),trendSignature:t.trendHistorySignature||"",trendNowMs:Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:0,coolingActive:et()})}function eh(e){return Ur().find(o=>o.id===e)||null}function th(e,o){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let n=0,r=Math.abs(e.points[0].x-o);return e.points.forEach((a,s)=>{const l=Math.abs(a.x-o);l<r&&(n=s,r=l)}),n}function oh(e,o){const n=kl(e,o);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${i(e.tone)}" data-oq-trend-current="${i(e.id)}">
        <span>${i(e.label)}</span>
        <strong>${i(F(n,e.decimals,e.unit))}</strong>
      </div>
    `}function kl(e,o){if(e?.currentKey&&y(e.currentKey)){const n=P(e.currentKey);if(Number.isFinite(n))return n}return to(e,o)}function Cl(e){e&&Ur().forEach(o=>{const n=e.querySelector(`[data-oq-trend-card="${o.id}"]`),r=o.samples[o.samples.length-1]||null;n&&o.series.forEach(a=>{const l=n.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),d=F(kl(a,r),a.decimals,a.unit);l&&l.textContent!==d&&(l.textContent=d)})})}function nh(e,o,n=!1,r=De()){const a=ql(e,o,{mockData:n,windowHours:r}),s=zr(r),l=vn(a.startTime),d=vn(a.startTime+a.span/2),u=vn(a.endTime),c=a.tracks.flatMap(m=>{if(m.points.length<2){const f=m.points[0];return f?`
          <circle
            cx="${f.x.toFixed(1)}"
            cy="${f.y.toFixed(1)}"
            r="3.8"
            class="oq-overview-trend-dot oq-overview-trend-dot--${i(m.tone)}"
          ></circle>
        `:[]}return`
        <path d="${m.path}" class="oq-overview-trend-line oq-overview-trend-line--${i(m.tone)}"></path>
        <circle
          cx="${m.points[m.points.length-1].x.toFixed(1)}"
          cy="${m.points[m.points.length-1].y.toFixed(1)}"
          r="3.8"
          class="oq-overview-trend-dot oq-overview-trend-dot--${i(m.tone)}"
        ></circle>
      `}).join("");return`
      <svg class="oq-overview-trend-chart" viewBox="0 0 ${a.width} ${a.height}" role="img" aria-label="Trendgrafiek van de laatste ${s}">
        <rect x="0" y="0" width="${a.width}" height="${a.height}" rx="20" class="oq-overview-trend-chart-bg"></rect>
        ${a.gridXs.map(m=>`<line x1="${m.toFixed(1)}" y1="${a.top}" x2="${m.toFixed(1)}" y2="${a.height-a.bottom}" class="oq-overview-trend-grid oq-overview-trend-grid--vertical"></line>`).join("")}
        ${a.gridYs.map(m=>`<line x1="${a.left}" y1="${m.toFixed(1)}" x2="${a.width-a.right}" y2="${m.toFixed(1)}" class="oq-overview-trend-grid oq-overview-trend-grid--horizontal"></line>`).join("")}
        ${c}
        ${a.yAxisLabels.map(m=>`
          <text
            x="${m.x}"
            y="${m.y.toFixed(1)}"
            class="oq-overview-trend-axis-label oq-overview-trend-axis-label--y"
            text-anchor="end"
            dominant-baseline="middle"
          >${i(m.text)}</text>
        `).join("")}
        <g class="oq-overview-trend-hover-layer" data-oq-trend-hover-layer hidden>
          <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.height-a.bottom}" class="oq-overview-trend-hover-line"></line>
          ${o.map(m=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${i(m.tone)}"
              data-oq-trend-hover-dot="${i(m.id||m.sampleKey||m.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${i(l)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${i(d)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${i(u)}</text>
      </svg>
    `}function rh(e){const o=e.samples[e.samples.length-1]||null,n=zr(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${i(e.tone)}" data-oq-trend-card="${i(e.id)}" data-render-signature="${i(Yg(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${i(n)}</p>
            <h4>${i(e.title)}</h4>
            <p>${i(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(r=>oh(r,o)).join("")}
            </div>
          </div>
        </div>
        ${nh(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function Qr(){const e=Ur();return`
      <section class="oq-overview-trends" aria-label="Trends" data-render-signature="${i(Gr())}">
        <div class="oq-overview-trends-grid">
          ${e.map(rh).join("")}
        </div>
      </section>
    `}function ah(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function ih(){const e=De(),o=qi();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${Mo.map(n=>`
          ${(()=>{const a=n>168&&!o,s=n/24,l=a?`Beschikbaar zodra er minimaal ${s} dagen flashhistorie is opgeslagen.`:"";return`
          <button
            class="oq-overview-controlpanel-segment${e===n?" is-selected":""}${a?" is-disabled":""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${n}"
            aria-pressed="${e===n?"true":"false"}"
            aria-disabled="${a?"true":"false"}"
            ${a?"disabled":""}
            ${l?`title="${i(l)}"`:""}
          >${i(Gg(n))}</button>
        `})()}
        `).join("")}
      </div>
    `}function sh(){const e="overview-trends-history",o=t.settingsInfoOpen===e;return`
      <div class="oq-settings-info oq-overview-trends-info${o?" is-open":""}" data-oq-settings-info="${i(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${i(e)}"
          aria-label="${i("Uitleg bij Trendoverzicht")}"
          aria-expanded="${o?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${o?"":"hidden"}>
          <p>${i("De waarden boven de grafieken zijn live. De grafieken bewaren elke 5 minuten een meetpunt, standaard 7 dagen in het werkgeheugen. Met flashopslag blijft historie ook na herstart of OTA beschikbaar, tot 30 dagen terug.")}</p>
        </div>
      </div>
    `}function lh(){const e=It(),n=Sl().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${i(t.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${sh()}
          </div>
          <div class="oq-overview-head oq-overview-trends-head">
            <div>
              <p class="oq-helper-label">Trends</p>
              <h2 class="oq-helper-section-title">Trendoverzicht</h2>
              <p class="oq-helper-section-copy">Bekijk temperatuur, vermogen, rendement, comfort en flow tot 30 dagen terug.</p>
            </div>
            <div class="oq-overview-trends-meta">
              ${e?`
                <div class="oq-overview-trends-window">
                  <span>Venster</span>
                  ${ih()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&n?Qr():ah()}
        </div>
      </section>
    `}function ch(){if(!t.root||t.appView!=="trends")return!1;const e=t.root.querySelector(".oq-overview-board");if(!e)return!1;const o=e.querySelector(".oq-overview-trends");return o?(nt(o,Gr(),Qr()),Cl(e),Zr(e),!0):!1}function Yr(e){if(!e)return null;const o=e.__oqTrendHoverNodes;if(o&&o.chart&&o.hoverLayer&&o.hoverPanel)return o;const n=e.querySelector("[data-oq-trend-hover-layer]"),r={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:n,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:n?n.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return n&&n.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{r.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=r,r}function ai(e,o,n,r=Yr(e)){if(!e||!o||!Array.isArray(o.points)||o.points.length===0)return;const a=Math.max(0,Math.min(o.points.length-1,n)),s=o.points[a];if(!s||!r||!r.chart||!r.hoverLayer||!r.hoverPanel||!r.hoverTime||!r.hoverNote||!r.hoverValues)return;const l=String(a);if(!r.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;const d=Fg(s.sample.t,o.endTime);r.hoverPanel.hidden=!1,r.hoverLayer.removeAttribute("hidden"),r.hoverTime.textContent=d.value,r.hoverNote.textContent=d.note,r.hoverLine&&(r.hoverLine.setAttribute("x1",s.x.toFixed(1)),r.hoverLine.setAttribute("x2",s.x.toFixed(1)));const u=[];o.series.forEach(c=>{const m=to(c,s.sample),f=c.id||c.sampleKey||c.label,g=r.hoverDots[f];if(!Number.isFinite(m)){g&&g.setAttribute("display","none");return}const b=s.values.find(k=>k.seriesId===f);g&&b&&(g.removeAttribute("display"),g.setAttribute("cx",b.x.toFixed(1)),g.setAttribute("cy",b.y.toFixed(1))),u.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${i(c.tone)}">
          <span>${i(c.label)}</span>
          <strong>${i(F(m,c.decimals,c.unit))}</strong>
        </div>
      `)}),r.hoverValues.innerHTML=u.join(""),e.dataset.oqTrendHoverIndex=l}function uh(e){if(!e)return;const o=Yr(e);o?.hoverPanel&&(o.hoverPanel.hidden=!0),o?.hoverLayer&&o.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function Zr(e=t.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(n=>{const r=n.dataset.renderSignature||"";if(n.__oqTrendBoundSignature===r)return;typeof n.__oqTrendCleanup=="function"&&n.__oqTrendCleanup(),n.__oqTrendHoverNodes=null,n.__oqTrendBoundSignature=r;const a=n.querySelector(".oq-overview-trend-chart");if(!a)return;const s=eh(n.dataset.oqTrendCard);if(!s)return;const l=ql(s.samples,s.series,{mockData:s.mock});n.__oqTrendModel=l;const d=Yr(n);let u=0,c=null;const m=()=>{const b=c;c=null,u=0;const k=a.getBoundingClientRect();if(!k.width||!k.height)return;const h=Number(b?.clientX);if(!Number.isFinite(h)){ai(n,l,l.points.length-1,d);return}const v=Math.min(k.width,Math.max(0,h-k.left))/k.width*l.width,S=th(l,v);ai(n,l,S,d)},f=b=>{c=b,u||(u=window.requestAnimationFrame(m))},g=()=>{u&&(window.cancelAnimationFrame(u),u=0),c=null,uh(n)};a.addEventListener("pointermove",f),a.addEventListener("pointerenter",f),a.addEventListener("pointerleave",g),a.addEventListener("focus",f),a.addEventListener("blur",g),a.addEventListener("touchstart",f,{passive:!0}),n.__oqTrendCleanup=()=>{u&&(window.cancelAnimationFrame(u),u=0),c=null,a.removeEventListener("pointermove",f),a.removeEventListener("pointerenter",f),a.removeEventListener("pointerleave",g),a.removeEventListener("focus",f),a.removeEventListener("blur",g),a.removeEventListener("touchstart",f)}})}function dh([e,o]){const n=ys(o);if(!y(o)&&Number.isNaN(n))return"";const r=ws(o)?$e(o):V(o);return`
      <div class="oq-overview-energy-row">
        <span>${i(e)}</span>
        <strong>${i(r)}</strong>
      </div>
    `}function ph(e){const o=e.rows.map(dh).filter(Boolean).join("");return o?`
      <section class="oq-overview-energy-group">
        <h5>${i(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${o}
        </div>
      </section>
    `:""}function mh(e){const o=e.groups.map(ph).filter(Boolean).join("");return o?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${i(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${i(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${o}
        </div>
      </section>
    `:""}function gh(e){const o=e.categories.map(mh).filter(Boolean).join("");return o?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${i(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${i(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${o}
        </div>
      </article>
    `:""}function Jr(){const e=lc.map(gh).filter(Boolean),o=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:o}}function Tl(e=Jr()){return ve(e)}function $l(e=Jr()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${i(Tl(e))}">
        <div class="${i(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}function hh(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${i(t.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Verbruik en rendement</h2>
            <p class="oq-helper-section-copy">Bekijk hier verbruik, warmte of koeling en rendement voor nu, vandaag en cumulatief.</p>
          </div>
          </div>
          ${$l()}
        </div>
      </section>
    `}function fh(){if(!t.root||t.appView!=="energy")return!1;const e=t.root.querySelector(".oq-overview-board"),o=e?e.querySelector(".oq-overview-energy"):null;if(!e||!o)return!1;const n=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==n&&(e.className=n);const r=Jr();return nt(o,Tl(r),$l(r))||!0}function Xr(e,o,n){const r=Ml(V(o.mode,"Unknown")),a=A(o.defrost),s=Io(V(o.failures,"None")),l=r==="Verwarmen"||r==="Koelen"||a;return{mode:r,defrostActive:a,failures:s,running:l,thermalKey:r==="Koelen"?o.cooling:o.heat,schematic:Th(e,o,n,r,a,s,l)}}function El(e,o=null){return`<h3>${i(e)}</h3>${o?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${i(o.layout)}">${Lh(o.layout==="equal"?"minus":"plus")}<span>${i(o.label)}</span></button>`:""}`}function Dn(e,o,n,r){return`<div class="oq-overview-hp-status">${al(e,o,n,r)}</div>`}function bh(){return V("controlModeLabel","").toLowerCase().includes("standby")}function vh(e,o){return o?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function Al(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${i(e.map(o=>`${o.title} ${vh(Ml(V(o.keys.mode,"Unknown")),A(o.keys.defrost))}`).join(", "))}</p>`}function wh(e){const o=t.entities[e];if(!o)return"Positie: \xE2\u20AC\u201D";const n=P(e);return Number.isNaN(n)?`Positie: ${V(e)}`:`Positie: ${F(n,0,o.uom||"")}`}function yh(e){return y(e)?`Positie: ${A(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \xE2\u20AC\u201D"}function Ml(e){const o=String(e||"").trim();return!o||o==="Unknown"?"Onbekend":o==="Standby"?"Stand-by":o==="Heating"?"Verwarmen":o==="Cooling"?"Koelen":o}function Io(e){const o=String(e||"").trim();return!o||o==="None"?"Geen actieve storingen":o}function Fn(e,o,n,r=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${i(o)}" data-oq-pipe="${i(e)}">
        <path class="oq-hp-tech-pipe-base" d="${i(n)}" />
        <path class="oq-hp-tech-pipe-core" d="${i(n)}" />
        ${r?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${i(a)}" d="${i(n)}" />`:""}
      </g>
    `}function Sh(e,o,n){return e==="temperature"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${o-10}"
          y="${n-10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-mdi" d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V12H11V5A1 1 0 0 1 12 4Z" />
        </svg>
      `:e==="pressure"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${o-10}"
          y="${n-10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z"
          />
        </svg>
      `:e==="defrost"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${o-10}"
          y="${n-10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z"
          />
        </svg>
      `:e==="flow"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${o-10}"
          y="${n-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 8.2 C5.1 6.8 6.8 6.8 8.4 8.2 C10 9.6 11.7 9.6 13.3 8.2 C14.4 7.2 15.6 7 16.5 7.1" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 12.1 C5.1 10.7 6.8 10.7 8.4 12.1 C10 13.5 11.7 13.5 13.3 12.1 C14.4 11.1 15.6 10.9 16.5 11" />
        </svg>
      `:e==="fan"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${o-10}"
          y="${n-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.7" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 3.1 C12.1 5 12.4 6.7 10.9 9.1 C9 8.9 8.1 7.7 8.2 6.1 C8.3 4.7 8.9 3.7 10 3.1 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M16.9 10 C15 12.1 13.3 12.4 10.9 10.9 C11.1 9 12.3 8.1 13.9 8.2 C15.3 8.3 16.3 8.9 16.9 10 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 16.9 C7.9 15 7.6 13.3 9.1 10.9 C11 11.1 11.9 12.3 11.8 13.9 C11.7 15.3 11.1 16.3 10 16.9 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M3.1 10 C5 7.9 6.7 7.6 9.1 9.1 C8.9 11 7.7 11.9 6.1 11.8 C4.7 11.7 3.7 11.1 3.1 10 Z" />
        </svg>
      `:e==="eev"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${o-10}"
          y="${n-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="4.5,5.1 10,10 4.5,14.9" />
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="15.5,5.1 10,10 15.5,14.9" />
        </svg>
      `:e==="fourway"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${o-10}"
          y="${n-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <rect class="oq-hp-tech-tooltip-icon-stroke" x="7" y="7" width="6" height="6" rx="1.8" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M10 3.5 V7 M10 13 V16.5 M3.5 10 H7 M13 10 H16.5" />
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.5" />
        </svg>
      `:`
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${o-10} ${n-10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `}function oo({bind:e,modifier:o,x:n,y:r,width:a,kicker:s,detail:l,detailBind:d="",icon:u="heater",direction:c="down"}){const f=n+26,g=r+22,b=d?` data-oq-bind="${i(d)}"`:"";let k="";if(c==="up"){const h=n+Math.round(a*.52);k=`M${h-6} ${r} L${h} ${r-8} L${h+6} ${r} Z`}else if(c==="left"){const h=r+Math.round(22);k=`M${n} ${h-6} L${n-8} ${h} L${n} ${h+6} Z`}else if(c==="right"){const h=r+Math.round(22);k=`M${n+a} ${h-6} L${n+a+8} ${h} L${n+a} ${h+6} Z`}else{const h=n+Math.round(a*.52);k=`M${h-6} ${r+44} L${h} ${r+44+8} L${h+6} ${r+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${i(o)}"
        data-oq-bind="${i(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${n}" y="${r}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${f}" cy="${g}" r="11.5" />
        ${Sh(u,f,g)}
        <text class="oq-hp-tech-tooltip-kicker" x="${n+48}" y="${r+16}">${i(s)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${n+48}" y="${r+32}"${b}>${i(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${k}" />
      </g>
    `}function In({bind:e,x:o,y:n,width:r,value:a,label:s,ariaLabel:l="",align:d="start"}){const u=l||`${s} temperatuur ${a}`,c=d==="end",m=d==="center",f=m?"middle":c?"end":"start",g=m?o+r/2:c?o+r-2:o+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${i(e)}-reading"
        data-oq-tooltip-target="${i(e)}"
        tabindex="0"
        aria-label="${i(u)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${o}" y="${n}" width="${r}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${g}" y="${n+13}" text-anchor="${f}" data-oq-bind="${i(e)}-value">${i(a)}</text>
      </g>
    `}function qh({tooltip:e,...o}){return`${In(o)}${oo({bind:o.bind,...e})}`}function kh({bind:e,ariaLabel:o,x:n,y:r,width:a,height:s,rx:l,tooltip:d}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${i(e)}-trigger" data-oq-tooltip-target="${i(e)}" tabindex="0" aria-label="${i(o)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${n}" y="${r}" width="${a}" height="${s}" rx="${l}" />
      </g>
      ${oo({bind:e,...d})}
    `}function yn({bind:e,className:o,active:n,ariaLabel:r,attrs:a="",activeClass:s="is-active",content:l,tooltip:d}){return`
      <g class="${[o,n&&s?s:""].filter(Boolean).join(" ")}" data-oq-bind="${i(e)}" data-oq-tooltip-target="${i(e)}" tabindex="${n?"0":"-1"}" aria-label="${i(r)}" ${a}>
        ${l}
      </g>
      ${oo({bind:e,...d})}
    `}function Ch({label:e,value:o,bind:n,ariaLabel:r="",valueBind:a="",labelBind:s="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${r?` aria-label="${i(r)}"`:""}${s?` data-oq-bind="${i(s)}"`:""}>${l||i(e)}</span>
        <strong${a?` data-oq-bind="${i(a)}"`:""}>${i(o)}</strong>
      </div>
    `}function Le(e,o,n=""){const r=P(e);return Number.isNaN(r)?V(e):F(r,o,Yt(e,n))}function Th(e,o,n,r,a,s,l){const d=P(o.freq),u=Number.isNaN(d)?"\u2014":String(Math.round(d)),c=P(o.power),m=P(o.heat),f=P(o.cooling),g=P(o.flow),b=r==="Koelen"?f:m,k=l||!Number.isNaN(d)&&d>0||!Number.isNaN(c)&&c>80||!Number.isNaN(m)&&m>150,h=!Number.isNaN(g)&&g>0,w=rl(r,k),v=s==="Geen actieve storingen"?"Geen storingen":s,S=v!=="Geen storingen",$=a?"Actief":"Uit",q=Le(o.waterOut,1,"\xB0C"),M=Le(o.waterIn,1,"\xB0C"),x=Number.isNaN(g)?V(o.flow):F(g,0,Yt(o.flow,"L/h")),O=Le(o.evaporatorCoilTemp,1,"\xB0C"),G=Le(o.innerCoilTemp,1,"\xB0C"),C=Le(o.outsideTemp,1,"\xB0C"),T=Le(o.condenserPressure,1,"bar"),H=Le(o.dischargeTemp,1,"\xB0C"),I=Le(o.evaporatorPressure,1,"bar"),K=Le(o.returnTemp,1,"\xB0C"),R=A(o.bottomPlate),B=A(o.crankcase),L=wh(o.eev),N=yh(o.fourWay),j=F(c,0,"W"),Q=F(b,0,"W"),ue=r==="Koelen"?!Number.isNaN(c)&&c>=5&&!Number.isNaN(f)?f/c:Number.NaN:P(o.cop),ie=F(ue,1),Y=r==="Koelen"?"COP (EER)":"COP",Fe=r==="Koelen"?"Koelafgifte":"Warmteafgifte",ye=r==="Koelen"?"afgegeven koeling":"afgegeven warmte",_t=P(o.fanSpeed),de=!Number.isNaN(_t)&&_t>0,cn=Number.isNaN(_t)?"\u2014":`${Math.round(_t)} rpm`,pe=a||r==="Koelen",un=pe?"Verdamper":"Condensor",Kt=pe?"Condensor":"Verdamper",go=pe?"return":"supply",tt=pe?"supply":"return",gt=360,Pe=384,zt=214,ht="M278 220 C278 228 273 234 266 234",ke="M278 220 C278 228 283 234 290 234",na="M290 234 C284 234 279 240 278 248",Se="M266 234 C272 234 277 240 278 248",Ie=pe?`M290 234 H${gt} Q372 ${zt} ${Pe} 234 H436 V134 H480`:"M266 234 H180 V134 H164",Ut=pe?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${Pe} Q372 ${zt} ${gt} 234 H290`,ft="M296 150 H278 V220",ho="M278 248 V268 H372 V150 H356",bt=pe?"M480 294 H337":"M164 294 H315",Ce=pe?"M315 294 H164":"M337 294 H480",ra=["oq-hp-schematic-board",`oq-hp-schematic-board--${n}`,k?"is-running":"",h?"is-water-flowing":"",de?"is-fan-running":"",pe?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:ra,statusText:w,failureText:v,warningActive:S,waterFlowActive:h,defrostActive:a,defrostText:$,mode:r,reverseCycle:pe,compressorFreqText:`${u} Hz`,leftExchangerTitle:un,rightExchangerTitle:Kt,supplyLineTone:go,returnLineTone:tt,waterOutText:q,waterInText:M,flowText:x,evaporatorCoilTempText:O,innerCoilTempText:G,outsideTempText:C,dischargePressureText:T,dischargeTempText:H,suctionPressureText:I,suctionTempText:K,bottomPlateActive:R,crankcaseActive:B,eevPositionText:L,fourWayPositionText:N,powerText:j,heatText:Q,heatLabel:Fe,heatDescription:ye,efficiencyText:ie,efficiencyLabel:Y,fanRpmText:cn,hotgasValveHeat:ht,hotgasValveCool:ke,suctionValveHeat:na,suctionValveCool:Se,leftValveTone:pe?"suction":"hotgas",rightValveTone:pe?"hotgas":"suction",pipes:{supply:{tone:go,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:tt,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:ft,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:Ie,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:bt,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:Ce,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:Ut,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:ho,animated:!0,flowVariant:"default"}}}}function $h(e){const o=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),n=`${o}-cond-water-heat`,r=`${o}-cond-water-cool`,a=`${o}-cond-ref`,s=e.reverseCycle?r:n,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],d=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],u=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
      <div class="${i(e.boardClass)}" data-oq-hp-board="${i(e.title)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-visual">
            <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${i(e.title)} technische schematic">
              <defs>
              <linearGradient id="${i(n)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${i(r)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#ef4444" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${i(a)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#16a34a" stop-opacity="0.12"></stop>
                <stop offset="52%" stop-color="#86efac" stop-opacity="0.08"></stop>
                <stop offset="100%" stop-color="#4ade80" stop-opacity="0.22"></stop>
              </linearGradient>
              </defs>
              <rect class="oq-hp-tech-frame" x="18" y="28" width="584" height="314" rx="22" />

            <text class="oq-hp-tech-title" x="134" y="76" data-oq-bind="left-exchanger-title">${i(e.leftExchangerTitle)}</text>
            <text class="oq-hp-tech-title" x="326" y="76">Compressor</text>
            <text class="oq-hp-tech-title" x="510" y="76" data-oq-bind="right-exchanger-title">${i(e.rightExchangerTitle)}</text>

            <g class="oq-hp-tech-condensor">
              <rect class="oq-hp-tech-condensor-shell" x="104" y="118" width="60" height="192" rx="18" />
              <rect class="oq-hp-tech-condensor-water" x="112" y="124" width="20" height="180" rx="10" fill="url(#${i(s)})" data-oq-bind="cond-water" />
              <rect class="oq-hp-tech-condensor-ref-column" x="136" y="124" width="20" height="180" rx="10" fill="url(#${i(a)})" />
              <path class="oq-hp-tech-condensor-divider" d="M134 128 V300" />
            </g>

            <g class="oq-hp-tech-compressor">
              <rect class="oq-hp-tech-compressor-body" x="306" y="118" width="40" height="70" rx="17" />
              <rect class="oq-hp-tech-compressor-port" x="296" y="140" width="10" height="20" rx="5" />
              <rect class="oq-hp-tech-compressor-port" x="346" y="140" width="10" height="20" rx="5" />
              <path class="oq-hp-tech-compressor-lines" d="M316 134 H336 M316 148 H336 M316 162 H336" />
              <text class="oq-hp-tech-compressor-freq" x="326" y="166" data-oq-bind="compressor-freq">${i(e.compressorFreqText)}</text>
            </g>

            <g class="oq-hp-tech-4way">
              <rect class="oq-hp-tech-4way-body" x="264" y="220" width="28" height="28" rx="9" />
              <rect class="oq-hp-tech-4way-actuator" x="259" y="229" width="5" height="10" rx="2.5" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${e.leftValveTone}" cx="266" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--hotgas" cx="278" cy="220" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${e.rightValveTone}" cx="290" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--suction" cx="278" cy="248" r="3.2" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--hotgas" d="${i(e.hotgasValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--suction" d="${i(e.suctionValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--hotgas" d="${i(e.hotgasValveCool)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--suction" d="${i(e.suctionValveCool)}" />
            </g>

            <g class="oq-hp-tech-valve">
              <rect class="oq-hp-tech-eev-mask" x="311" y="283" width="30" height="22" rx="4" />
              <polygon class="oq-hp-tech-eev-shape" points="315,284 326,294 315,304" />
              <polygon class="oq-hp-tech-eev-shape" points="337,284 326,294 337,304" />
            </g>

            <g class="oq-hp-tech-evaporator">
              <rect class="oq-hp-tech-evaporator-shell" x="480" y="118" width="60" height="192" rx="18" />
              <path class="oq-hp-tech-evaporator-lines" d="M492 130 H526 M492 142 H526 M492 154 H526 M492 166 H526 M492 178 H526 M492 190 H526 M492 202 H526 M492 214 H526 M492 226 H526 M492 238 H526 M492 250 H526 M492 262 H526 M492 274 H526 M492 286 H526 M492 298 H526" />
            </g>

            <g class="oq-hp-tech-fan">
              <circle class="oq-hp-tech-fan-ring" cx="550" cy="214" r="34" />
              <circle class="oq-hp-tech-fan-core" cx="550" cy="214" r="8" />
              <g class="oq-hp-tech-fan-blades">
                <path d="M550 180 C561 192 562 203 550 214 C538 203 539 192 550 180 Z" />
                <path d="M584 214 C572 225 561 226 550 214 C561 202 572 203 584 214 Z" />
                <path d="M550 248 C539 236 538 225 550 214 C562 225 561 236 550 248 Z" />
                <path d="M516 214 C528 203 539 202 550 214 C539 226 528 225 516 214 Z" />
              </g>
            </g>

            ${Object.entries(e.pipes).map(([c,m])=>Fn(c.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`),m.tone,m.d,m.animated,m.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${d.map(qh).join("")}
            ${yn({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${yn({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${yn({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
                <circle class="oq-hp-tech-defrost-hit" cx="0" cy="0" r="12" />
                <g class="oq-hp-tech-defrost-icon">
                  <path class="oq-hp-tech-defrost-glyph" d="M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5" />
                  <g class="oq-hp-tech-defrost-drips">
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--left" d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--right" d="M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--center" d="M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z" />
                  </g>
                  <g class="oq-hp-tech-defrost-mists">
                    <g transform="translate(6 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--left">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.18" cy="0.34" r="0.58" />
                        <circle cx="1.16" cy="0.38" r="0.54" />
                      </g>
                    </g>
                    <g transform="translate(12 23.4)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--center">
                        <circle cx="0" cy="0" r="1.08" />
                        <circle cx="-1.42" cy="0.42" r="0.66" />
                        <circle cx="1.38" cy="0.46" r="0.62" />
                      </g>
                    </g>
                    <g transform="translate(18 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--right">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.16" cy="0.38" r="0.54" />
                        <circle cx="1.18" cy="0.34" r="0.58" />
                      </g>
                    </g>
                  </g>
                </g>
              `,tooltip:{modifier:"return",icon:"defrost",x:398,y:266,width:118,kicker:"Defrost",detail:"Actief",direction:"left"}})}

            ${u.map(kh).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(Ch).join("")}
          </div>
        </div>
      </div>
    `}function Pl(e,o,n,r="normal",a=null){if(!y(o.power))return"";const s=Xr(e,o,n),{mode:l,defrostActive:d,running:u,thermalKey:c}=s,m=s.schematic;return t.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${i(n)} oq-overview-hp--${i(r)}" data-oq-hp-panel="${i(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${El(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${Dn(l,u,m.warningActive,m.failureText)}
            </div>
          </div>
          ${$h(m)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${i(n)} oq-overview-hp--${i(r)}" data-oq-hp-panel="${i(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${i(e)}</h3>
          </div>
          ${Dn(l,u,m.warningActive,m.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${an([{key:o.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:c,label:m.heatLabel,tone:"orange",note:m.heatDescription},{label:m.efficiencyLabel,value:m.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${i(l)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${i(V(o.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${d?"Actief":"Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${Nn("Water in",o.waterIn)}
          ${Nn("Water out",o.waterOut)}
        </div>
      </section>
    `}function ea(){return A("boilerCvAssistEnabled")&&y("boilerHeatPower")}function Eh(){return(typeof he=="function"?he():"")!=="single"&&y("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function Ah(){return(typeof he=="function"?he():"")!=="single"&&y("hp2Flow")?"hp2Flow":"hp1Flow"}function sn(){const e=P("boilerHeatPower"),o=P(Ah()),n=y("boilerActive")?A("boilerActive"):!Number.isNaN(e)&&e>20,r=!Number.isNaN(o)&&o>0,a=F(e,0,"W"),s=F(o,0,"L/h"),l=F(P(Eh()),1,"\xB0C"),d=F(P("supplyTemp"),1,"\xB0C"),u=n?"Aan":"Uit",c=n?"Levert ondersteuning":"Geen ondersteuning",m=["oq-boiler-card",n?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:n,flowActive:r,heatText:a,flowText:s,returnTempText:l,supplyTempText:d,statusText:u,statusCopy:c,boardClass:m,flowPathClass:r?"is-flowing":"is-static"}}function ta(e=sn()){return ve({version:"boiler-visual-mode-v1",visualMode:t.hpVisualMode,boardClass:"oq-boiler-card"})}function Mh(e,o=sn()){const n=e.querySelector(".oq-boiler-card");n&&(n.className=["oq-boiler-card",o.active?"is-running":"is-idle",o.flowActive?"is-flowing":"is-static"].join(" "));const r=e.querySelector(".oq-overview-chip");r&&(r.className=`oq-overview-chip oq-overview-chip--${o.active?"active":"neutral"}`,r.textContent!==o.statusText&&(r.textContent=o.statusText));const a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",o.active),a.classList.toggle("is-idle",!o.active));const s=e.querySelector(".oq-boiler-summary-box--support strong");s&&s.textContent!==o.statusCopy&&(s.textContent=o.statusCopy);const l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==o.heatText&&(l.textContent=o.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(m=>{m.textContent!==o.flowText&&(m.textContent=o.flowText)});const d=e.querySelector("[data-oq-boiler-status-value]");d&&d.textContent!==o.statusCopy&&(d.textContent=o.statusCopy);const u=e.querySelector('[data-oq-bind="boiler-return-value"]');u&&u.textContent!==o.returnTempText&&(u.textContent=o.returnTempText);const c=e.querySelector('[data-oq-bind="boiler-supply-value"]');c&&c.textContent!==o.supplyTempText&&(c.textContent=o.supplyTempText)}function Ph(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${i(ta(e))}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>CV-ketel / boiler</h3>
          </div>
          <span class="oq-overview-chip oq-overview-chip--${e.active?"active":"neutral"}">${i(e.statusText)}</span>
        </div>
        <div class="oq-overview-hp-stats">
          <article class="oq-overview-stat oq-overview-stat--orange">
            <p>Warmteafgifte</p>
            <strong data-oq-boiler-heat-value>${i(e.heatText)}</strong>
            <span>afgegeven warmte</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--blue">
            <p>Water in</p>
            <strong data-oq-bind="boiler-return-value">${i(e.returnTempText)}</strong>
            <span>retour naar boiler</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--sky">
            <p>Water out</p>
            <strong data-oq-bind="boiler-supply-value">${i(e.supplyTempText)}</strong>
            <span>naar het systeem</span>
          </article>
        </div>
      </section>
    `}function Wn(){if(!ea())return"";const e=sn();return t.hpVisualMode!=="schematic"?Ph(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${i(ta(e))}">
        <div class="${i([e.boardClass,e.flowPathClass].filter(Boolean).join(" "))}">
          <div class="oq-boiler-card-main">
            <div class="oq-boiler-card-head">
              <div>
                <span class="oq-boiler-eyebrow">Ondersteuning</span>
                <h3>CV-ketel / boiler</h3>
              </div>
              <span class="oq-overview-chip oq-overview-chip--${e.active?"active":"neutral"}">${i(e.statusText)}</span>
            </div>
            <p class="oq-boiler-copy">De boiler geeft ondersteuning wanneer de warmtepomp extra hulp nodig heeft.</p>
            <div class="oq-boiler-mini-schematic">
              <svg class="oq-boiler-mini-svg" viewBox="0 0 420 132" role="img" aria-label="Schematische weergave CV-ketel of boiler">
                <defs>
                  <linearGradient id="oq-boiler-card-body" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#111827"></stop>
                    <stop offset="62%" stop-color="#7f1d1d"></stop>
                    <stop offset="100%" stop-color="#fb923c"></stop>
                  </linearGradient>
                  <linearGradient id="oq-boiler-card-flame" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#f97316"></stop>
                    <stop offset="48%" stop-color="#facc15"></stop>
                    <stop offset="100%" stop-color="#fee2e2"></stop>
                  </linearGradient>
                </defs>
                ${Fn("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${Fn("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${In({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${oo({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${In({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
                ${oo({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"right"})}
              </svg>
              <div class="oq-boiler-summary-grid">
                <div class="oq-boiler-summary-box oq-boiler-summary-box--power">
                  <span>Geleverd vermogen</span>
                  <strong data-oq-boiler-heat-value>${i(e.heatText)}</strong>
                </div>
                <div class="oq-boiler-summary-box oq-boiler-summary-box--support ${e.active?"is-active":"is-idle"}">
                  <span>Ondersteuning</span>
                  <strong data-oq-boiler-status-value>${i(e.statusCopy)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}function Ll(){const e=typeof he=="function"?he():"";return rc.filter(o=>e==="single"&&o.title==="HP2"?!1:y(o.keys.power))}function oa(e){return!Array.isArray(e)||e.length<2||t.hpVisualMode!=="schematic"?"equal":t.hpLayoutMode==="focus-hp1"||t.hpLayoutMode==="focus-hp2"?t.hpLayoutMode:"equal"}function Wo(e,o,n){return!Array.isArray(o)||o.length<2?"normal":n==="focus-hp1"?e===0?"focus":"muted":n==="focus-hp2"?e===1?"focus":"muted":"normal"}function Bn(e,o,n){return!Array.isArray(o)||o.length<2||t.hpVisualMode!=="schematic"?null:Wo(e,o,n)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function Hl(e){return!Array.isArray(e)||e.length!==1?oa(e):ea()?"equal":"single"}function Lh(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function Rl(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${Al(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${t.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${t.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function Hh(e,o){if(!e)return!1;const n=e.querySelector(".oq-overview-hp-tools-copy"),r=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!n||!r||!a?(Ke(e,Rl(o)),!0):(Ke(n,`
      <h3>Warmtepompen</h3>
      ${Al(o)}
    `),r.classList.toggle("is-active",t.hpVisualMode==="schematic"),a.classList.toggle("is-active",t.hpVisualMode==="compact"),!0)}function Rh(){const e=cl(),o=Ll(),n=oa(o),r=Hl(o),a=Rl(o);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${i(t.overviewTheme)}">
          ${ol()}
          ${Ug(e)}
          <div class="oq-overview-main">
            ${ml(xn())}
            ${wl()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${i(r)}">
            ${o.map((s,l)=>Pl(s.title,s.keys,s.accent,Wo(l,o,n),Bn(l,o,n))).join("")}
            ${Wn()}
          </div>
        </div>
      </section>
    `}function Nh(e,o,n){if(!e)return;const r=e.querySelector(o);r&&r.textContent!==n&&(r.textContent=n)}function Ke(e,o){e&&e.innerHTML!==o&&(e.innerHTML=o)}function nt(e,o,n){return!e||e.dataset.renderSignature===o?!1:(e.outerHTML=n,!0)}function Tt(e,o,n){e&&e.getAttribute(o)!==n&&e.setAttribute(o,n)}function xh(e,o){o.forEach(([n,r])=>{Nh(e,`[data-oq-bind="${n}"]`,r)})}function Oh(e,o){o.forEach(([n,r])=>{Tt(e.querySelector(`[data-oq-bind="${n}"]`),"aria-label",r)})}function Dh(e,o,n,r=""){const a=e.querySelector(`[data-oq-bind="${o}"]`);a&&(a.classList.toggle("is-active",n),Tt(a,"tabindex",n?"0":"-1"),!n&&r&&ln(e.querySelector(`[data-oq-bind="${r}"]`)))}function Fh(e,o,n){Tt(e.querySelector(`[data-oq-bind="${o}"]`),"fill",n)}function no(e,o,n,r){if(!e)return;const a=`${o}${n}`;r.map(l=>`${o}${l}`).find(l=>e.classList.contains(l))!==a&&(r.forEach(l=>e.classList.remove(`${o}${l}`)),e.classList.add(a))}function Ih(e,o,n,r){const a=e.querySelector(`[data-oq-pipe="${o}"]`);a&&(no(a,"oq-hp-tech-pipe--",n,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(s=>{s.getAttribute("d")!==r&&s.setAttribute("d",r)}))}function ln(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function ii(e,o,n){!e||!o||!n||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(r=>{r!==n&&ln(r)}),o.appendChild(n),n.classList.add("is-active"),n.setAttribute("aria-hidden","false"))}function Wh(e,o,n,r){if(!e||!o||!n||!r||n.dataset.oqTooltipWired==="true")return;n.dataset.oqTooltipWired="true";const a=()=>{n.matches(":hover")||document.activeElement===n||ln(r)};n.addEventListener("mouseenter",()=>ii(e,o,r)),n.addEventListener("mouseleave",a),n.addEventListener("focus",()=>ii(e,o,r)),n.addEventListener("blur",a)}function Nl(e){if(!e)return;const o=e.querySelector(".oq-hp-tech-svg");if(!o)return;let n=o.querySelector(".oq-hp-tech-tooltip-layer");n||(n=document.createElementNS("http://www.w3.org/2000/svg","g"),n.setAttribute("class","oq-hp-tech-tooltip-layer"),o.appendChild(n)),Array.from(o.querySelectorAll(".oq-hp-tech-tooltip")).forEach(r=>{n.appendChild(r)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(r=>{const a=r.getAttribute("data-oq-tooltip-target");if(!a)return;const s=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);Wh(e,n,r,s)})}function Bh(e=t.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(o=>{Nl(o)})}function Vh(e,o,n,r,a=null,s=null){if(!e)return;const l=s||Xr(o,n,r),{mode:d,running:u}=l,c=l.schematic,m=e.querySelector(".oq-overview-hp-head-title");m&&Ke(m,El(o,a));const f=e.querySelector(".oq-overview-hp-head-side");if(f){let w=f.querySelector(".oq-overview-hp-status");w||(Ke(f,Dn(d,u,c.warningActive,c.failureText)),w=f.querySelector(".oq-overview-hp-status")),Hg(w,d,u,c.warningActive,c.failureText)}const g=e.querySelector("[data-oq-hp-board]");if(!g)return;g.className!==c.boardClass&&(g.className=c.boardClass),xh(g,[["status",c.statusText],["left-exchanger-title",c.leftExchangerTitle],["right-exchanger-title",c.rightExchangerTitle],["compressor-freq",c.compressorFreqText],["flow-value",c.flowText],["inner-coil-temp-value",c.innerCoilTempText],["evaporator-temp-value",c.evaporatorCoilTempText],["outside-temp-value",c.outsideTempText],["discharge-pressure-value",c.dischargePressureText],["discharge-temp-value",c.dischargeTempText],["suction-pressure-value",c.suctionPressureText],["suction-temp-value",c.suctionTempText],["supply-value",c.waterOutText],["return-value",c.waterInText],["footer-mode",c.mode],["footer-power",c.powerText],["footer-heat",c.heatText],["footer-efficiency-label",c.efficiencyLabel],["footer-efficiency",c.efficiencyText],["fan-speed-value",c.fanRpmText],["fourway-detail",c.fourWayPositionText],["eev-detail",c.eevPositionText]]);const b=g.querySelector('[data-oq-bind="footer-heat-label"]');if(b){Tt(b,"aria-label",c.heatLabel);const w=c.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";b.innerHTML!==w&&(b.innerHTML=w)}[["bottom-heater",c.bottomPlateActive],["crankcase-heater",c.crankcaseActive]].forEach(([w,v])=>{Dh(g,w,v,`${w}-tooltip`)});const k=g.querySelector('[data-oq-bind="defrost-badge"]');k&&(Tt(k,"tabindex",c.defrostActive?"0":"-1"),Tt(k,"aria-label",c.defrostActive?"Defrost actief":"Defrost uit"),c.defrostActive||ln(g.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",c.supplyLineTone],["return-tooltip",c.returnLineTone]].forEach(([w,v])=>{no(g.querySelector(`[data-oq-bind="${w}"]`),"oq-hp-tech-tooltip--",v,["warm","supply","return"])}),Oh(g,[["supply-reading",`Aanvoer temperatuur ${c.waterOutText}`],["flow-reading",`Flow ${c.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${c.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${c.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${c.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${c.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${c.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${c.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${c.dischargeTempText}`],["return-reading",`Retour temperatuur ${c.waterInText}`],["suction-pressure-reading",`Zuigdruk ${c.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${c.suctionTempText}`],["fourway-trigger",`4-wegklep, ${c.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${c.eevPositionText}`]]),no(g.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",c.returnLineTone,["supply","return"]);const h=String(c.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");Fh(g,"cond-water",`url(#${c.reverseCycle?`${h}-cond-water-cool`:`${h}-cond-water-heat`})`),Object.entries(c.pipes).forEach(([w,v])=>{Ih(g,w.replace(/[A-Z]/g,S=>`-${S.toLowerCase()}`),v.tone,v.d)}),Nl(g),tr()}function jh(){if(!t.root||t.appView!=="overview")return!1;const e=t.root.querySelector(".oq-overview-board");if(!e)return!1;const o=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==o&&(e.className=o);const n=cl(),r=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),s=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),d=e.querySelector(".oq-overview-trends"),u=e.querySelector(".oq-overview-hp-tools"),c=e.querySelector(".oq-overview-hp-grid"),m=e.querySelector("[data-oq-boiler-panel]"),f=Ll();if(r){const S=nn();nt(r,ve(S),ol())}if(a){const S=a.querySelector(".oq-overview-top");S&&Ke(S,an(fl()));const $=a.querySelector(".oq-overview-statuspanel");if($){const M=V("controlModeLabel");nt($,ve(gl(n,M)),hl(n,M))}const q=a.querySelector(".oq-overview-summary-side");if(q){const M=gs();q.dataset.renderSignature!==M&&(Ke(q,bl()),q.dataset.renderSignature=M)}}if(s&&nt(s,ve(xn()),ml(xn())),l){const S=Kr();nt(l,vl(S),wl())}if(d&&t.appView==="overview"&&(nt(d,Gr(),Qr()),Cl(e)),Zr(e),!u||!c)return!1;const g=oa(f),b=Hl(f);if(Hh(u,f),no(c,"oq-overview-hp-grid--",b,["single","equal","focus-hp1","focus-hp2"]),t.hpVisualMode!=="schematic"){const S=[...f.map((q,M)=>Pl(q.title,q.keys,q.accent,Wo(M,f,g),Bn(M,f,g))),Wn()].join(""),$=ve({visualMode:t.hpVisualMode,layout:b,markup:S});return c.dataset.renderSignature!==$&&(Ke(c,S),c.dataset.renderSignature=$),!0}const k=ea()?sn():null,h=k?Wn():"",w=k?ta(k):"";return!!m!=!!h||(m&&m.dataset.renderSignature!==w?m.outerHTML=h:m&&k&&Mh(m,k),c.querySelectorAll("[data-oq-hp-panel]").length!==f.length)?!1:(f.forEach((S,$)=>{const q=e.querySelector(`[data-oq-hp-panel="${S.title}"]`);if(q){const M=Xr(S.title,S.keys,S.accent);no(q,"oq-overview-hp--",Wo($,f,g),["normal","focus","muted"]),Vh(q,S.title,S.keys,S.accent,Bn($,f,g),M)}}),!0)}function _h(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${Lm()}
        ${Hm()}
      </section>
    `}function Kh(){return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""} oq-helper-modal-backdrop--loading" data-oq-modal="initial-load">
        <section class="oq-helper-modal oq-helper-modal--reconnect oq-helper-modal--loading" role="status" aria-live="polite" aria-labelledby="oq-loading-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OpenQuatt</p>
              <h2 class="oq-helper-modal-title" id="oq-loading-modal-title">OpenQuatt laden</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">We wachten tot de zichtbare gegevens compleet zijn, zodat de interface niet half gevuld verschijnt. Dit kan enkele seconden duren.</p>
          <div class="oq-helper-reconnect-status oq-helper-loading-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>Eerste synchronisatie</strong>
              <span>De velden op dit scherm worden compleet klaargezet.</span>
            </div>
          </div>
        </section>
      </div>
    `}function zh(){return t.appView==="overview"?Rh():t.appView==="trends"?lh():t.appView==="energy"?hh():_h()}function Uh(){const e=Bi();return`
      <footer class="oq-helper-powered-by" aria-label="Platform">
        ${e&&e!=="\u2014"?`<span class="oq-helper-footer-version">OpenQuatt ${i(e)}</span>`:""}
        <nav class="oq-helper-footer-links" aria-label="OpenQuatt links">
          <a href="https://jeroen85.github.io/OpenQuatt/" target="_blank" rel="noreferrer">Docs</a>
          <a href="https://github.com/jeroen85/OpenQuatt" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <a class="oq-helper-powered-by-link" href="https://esphome.io/" target="_blank" rel="noreferrer" aria-label="Built with ESPHome">
          <span>Built with</span>
          <img class="oq-helper-powered-by-logo" src="https://media.esphome.io/logo/logo-text-on-light.svg" alt="ESPHome" loading="lazy" decoding="async">
        </a>
      </footer>
    `}function Gh(){const e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function Qh(e){if(!e||t.deferDevControlSelectRender)return;t.deferDevControlSelectRender=!0;const o=()=>{e.removeEventListener("blur",o),e.removeEventListener("change",o),t.deferDevControlSelectRender=!1,window.setTimeout(()=>p(),0)};e.addEventListener("blur",o,{once:!0}),e.addEventListener("change",o,{once:!0})}function p(){if(!t.root)return;const e=Gh();if(e){Qh(e);return}const o=t.systemModal==="webserver-logs"?Xe():null,n=t.systemModal==="cm100-commissioning"?Mp():null,r=String(t.systemModal||"").startsWith("service-task-")?Lp():null,a=t.quickStartModalOpen?hg():null;if(t.nativeOpen){t.root.innerHTML=`
        ${Ta()}
        ${Lu()}
      `,t.settingsRenderSignature="",t.headerRenderSignature=Cn(),Zn(),Lo(),_a(),ya(),Ia(),Fa(),ze(o),Ba(n),Va(r),ti(a);return}const s=zh(),l=t.loadingEntities?`${s}${Kh()}`:s,d=t.appView==="overview"||t.appView==="trends"||t.appView==="energy";t.root.innerHTML=`
      ${Ta()}
      <div class="oq-helper-shell${t.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${d?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${tc}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${Mu()}
          </div>
      ${mp()}
      ${l}
      ${Uh()}
        </div>
      </div>
      ${gg()}
      ${Ru()}
      ${Nu()}
      ${gu()}
    `,t.settingsRenderSignature=t.appView==="settings"?Pn():"",t.headerRenderSignature=Cn(),er(),Bh(),_a(),or(),Zr(),Lo(),ya(),Ia(),Fa(),ze(o),Ba(n),Va(r),ti(a)}function i(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}Vc();})();
