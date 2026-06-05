/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{const bl=`
    <svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>
  `,Ur={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},xa="https://oi.esphome.io/v3/www.js",$t=2,Tn=4,wl=6e4,Oa="Power House",Fa="Water Temperature Control (heating curve)",Ao=[{id:"generation",kicker:"Stap 1",title:"Kies je Quatt Hybrid",copy:"Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.",fields:[{title:"Quatt Hybrid-versie",copy:"Kies de versie die bij jouw Quatt hoort."}]},{id:"boiler",kicker:"Stap 2",title:"CV-ketel of boiler",copy:"Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.",optionalEntity:"boilerCvAssistEnabled",fields:[{title:"CV-ketel / boiler aanwezig",copy:"Kies of er ondersteuning beschikbaar is en vul eventueel het vermogen in."}]},{id:"strategy",kicker:"Stap 3",title:"Kies de verwarmingsstrategie",copy:"Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",fields:[{title:"Verwarmingsstrategie",copy:"Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn."}]},{id:"heating",kicker:"Stap 4",title:"Werk de regeling uit",copy:"Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",fields:[{title:"Instellingen voor jouw regeling",copy:"Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling."}]},{id:"flow",kicker:"Stap 5",title:"Flowregeling en afstelling",copy:"Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning.",fields:[{title:"Flowregeling en tuning",copy:"Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt. Stel hier ook de flow-instellingen in."}]},{id:"water",kicker:"Stap 6",title:"Watertemperatuur beveiligen",copy:"Controleer de normale bovengrens en de tripgrens voor het watercircuit.",fields:[{title:"Watertemperatuur",copy:"Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt."}]},{id:"silent",kicker:"Stap 7",title:"Stille uren en niveaus",copy:"Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",fields:[{title:"Stille uren",copy:"Hier bepaal je wanneer het systeem rustiger moet werken."}]},{id:"confirm",kicker:"Stap 8",title:"Bevestigen en afronden",copy:"Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.",fields:[{title:"Afronden",copy:"Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is."}]}],j={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},trendHistoryFlashAvailable:{domain:"text_sensor",name:"Trendhistorie beschikbaar",optional:!0},trendHistoryFlashOldest:{domain:"text_sensor",name:"Trendhistorie oudste punt",optional:!0},trendHistoryFlashNewest:{domain:"text_sensor",name:"Trendhistorie nieuwste punt",optional:!0},trendHistoryFlashLastFlush:{domain:"text_sensor",name:"Trendhistorie laatste opslag",optional:!0},trendHistoryFlashSize:{domain:"sensor",name:"Trendhistorie grootte",optional:!0},trendHistoryFlashWrites:{domain:"sensor",name:"Trendhistorie schrijfacties",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}},$n=[{id:"overview",label:"Overzicht"},{id:"trends",label:"Trends"},{id:"energy",label:"Energie"},{id:"settings",label:"Instellingen"}],yl=new Set($n.map(e=>e.id)),be=[{id:"installation",label:"Installatie"},{id:"heating",label:"Verwarmen"},{id:"cooling",label:"Koelen"},{id:"integrations",label:"Bronnen / integraties"},{id:"service",label:"Service"},{id:"system",label:"Systeem"}],Ee=new Set(be.map(e=>e.id)),ql=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],se=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],Eo=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],Zt=["dayMax","silentMax","maxWater"],At=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],Ra=["flowKp","flowKi"],An=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],Da=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],En=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],Sl=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],Pn=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...Da,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],Ia=["cicCompatibilityMode"],Wa=["otEnabled","otLinkProblem"],Ba=["cicPollingEnabled","cicFeedUrl","cicDataStale"],ja=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],Va=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],Mn=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","coolingEnableSource"],_a=["supplyTemp","waterSupplyTempEsp","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","coolingEnableSelected","coolingEnableEffectiveSource","coolingEnableHa","coolingEnableHaValid"],Ka=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],za=[...se.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],Ua=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],Ga=["silentStartTime","silentEndTime","silentMax","dayMax"],Et=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],Ln=[...Et,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],uo=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],Se=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],Po=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Mode","hp1Failures","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Mode","hp2Failures","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay"],po=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","controlModeLabel","flowMode","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Mode","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Mode","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay",...Sl],kl=["coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","hp1Power","hp1Heat","hp1Cooling","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp2Power","hp2Heat","hp2Cooling","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut"],Cl=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],Qa=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...Pn,"manualCoolingEnable","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","webServerLogHistoryEnabled","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites",...Ia,...Wa,...ja,...Ba,...Va,...Mn,..._a,...At,...Ra,...An,...Da,...En,...Ka,...Zt,...Eo,...za,...Ua,...Ga];const Pg=new Set(["installationTopology",...Pn,"trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"]),yt=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","coolingEnableSource",...An]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...se.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],Ya=1,Xt=[...new Set(yt.flatMap(e=>e.keys))],Tl=new Set(Xt),$l=5e3,Al=3e4,El=6e4,Pl=1500,Ml=3e4,Ll=3e4,Hl=1e3,Hn=3e4,Gr=250,Nl=750,xl=22,Ol=xl/1.7,Fl=360/3.2,_t="2000-01-01 00:00:00",qt=24,vo=[3,12,24,72,168,336,720],t={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:Il(),devPanelOpen:Bl(),nativeOpen:Wl()==="native",currentStep:"generation",quickStartModalMode:"wizard",settingsGroup:jl(),appView:"",overviewTheme:Rl(),hpVisualMode:_l(),hpLayoutMode:zl(),trendWindowHours:Gl(),trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:"",updateModalOpen:!1,systemModal:"",authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftBaseTopic:"openquatt",mqttDraftPublishProfile:"standard",mqttDraftEssentialIntervalS:"10",mqttDraftStandardIntervalS:"30",mqttDraftDiagnosticIntervalS:"60",mqttDraftRetainSnapshots:!0,mqttBusy:!1,mqttNotice:"",mqttError:"",updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallMode:"",updateInstallTargetConnection:"",firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",pauseResumeDraft:"",draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:Yl(),motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}};function Rl(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function Dl(e){t.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",t.overviewTheme)}catch{}}function Il(){return!1}function Xo(e){t.interfacePanelOpen=e===!0}function Wl(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function Za(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function Bl(){try{return window.localStorage.getItem("oq-dev-panel-open")==="true"}catch{return!1}}function jl(){try{const e=window.localStorage.getItem("oq-settings-group");return Ee.has(e)?e:be[0].id}catch{return be[0].id}}function mo(e,o={}){t.settingsGroup=Ee.has(e)?e:be[0].id;try{window.localStorage.setItem("oq-settings-group",t.settingsGroup)}catch{}o.syncUrl!==!1&&t.appView==="settings"&&ri(o.syncMode||"replace")}function Vl(e){t.devPanelOpen=e===!0;try{window.localStorage.setItem("oq-dev-panel-open",t.devPanelOpen?"true":"false")}catch{}}function _l(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function Kl(e){t.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",t.hpVisualMode)}catch{}}function zl(){try{const e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function Ul(e){t.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",t.hpLayoutMode)}catch{}}function Gl(){try{const e=Number(window.localStorage.getItem("oq-trend-window-hours"));return vo.includes(e)?e:qt}catch{return qt}}function Xa(){const e=t.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;const o=String(e.state??e.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function Ql(){return Xa()?vo:vo.filter(e=>e<=168)}function Nn(e){const o=Ql(),n=Number(e);return o.includes(n)?n:Number.isFinite(n)&&n>o[o.length-1]?o[o.length-1]:o.includes(qt)?qt:o[0]}function xn(e){t.trendWindowHours=Nn(e);try{window.localStorage.setItem("oq-trend-window-hours",String(t.trendWindowHours))}catch{}}function St(){return"overview"}function Ja(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function Yl(){return!!Ja()?.matches}function Zl(e){if(t.reducedMotion=!!e?.matches,t.reducedMotion){On();return}Wn()}function Xl(){const e=Ja();!e||t.motionPreferenceMedia===e||(t.motionPreferenceMedia=e,t.motionPreferenceListener=Zl,typeof e.addEventListener=="function"?e.addEventListener("change",t.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(t.motionPreferenceListener),t.reducedMotion=!!e.matches)}function Jl(){return Object.keys(t.entities).length>0}function On(){t.motionFrame&&(window.cancelAnimationFrame(t.motionFrame),t.motionFrame=0),t.motionStartedAt=0,Dn()}function ec(){return Gr+Math.floor(Math.random()*(Nl-Gr+1))}function tc(){return(document.hidden?Hn:$l)+ec()}function ei(e=tc()){t.pollTimer||t.nativeOpen||(t.pollTimer=window.setTimeout(async()=>{t.pollTimer=null,await ne(),ei()},e))}function ti(){ei()}function oi(){t.pollTimer&&(window.clearTimeout(t.pollTimer),t.pollTimer=null)}function oc(){t.nativeOpen||(oi(),ti(),document.hidden||ne({forceProbe:!0}))}function Fn(e={}){if(wo(),t.nativeOpen){oi(),On(),t.nativeFrontendLoaded||an();return}if(Wn(),ti(),e.refresh!==!1){if(!Jl()){Gu();return}ne(t.appView==="settings"?{forceBulk:!0}:{forceFast:!0})}}function Kt(e){return!yl.has(e)||e==="trends"&&!xt()?"":e}function bo(e){return String(e||"").trim().toLowerCase()}function Rn(){try{const e=new URL(window.location.href),o=bo(e.searchParams.get("view")||""),n=Kt(o);if(n)return n;const r=bo(e.hash.replace(/^#/,""));return Kt(r)||""}catch{return""}}function ni(){try{const e=new URL(window.location.href),o=bo(e.searchParams.get("section")||"");if(Ee.has(o))return o;const n=bo(e.searchParams.get("group")||"");return Ee.has(n)?n:""}catch{return""}}function ri(e="replace"){try{const o=new URL(window.location.href),n=Kt(t.appView)||St();if(o.searchParams.set("view",n),n==="settings"){const a=Ee.has(t.settingsGroup)?t.settingsGroup:be[0].id;o.searchParams.set("section",a),o.searchParams.delete("group")}else o.searchParams.delete("section"),o.searchParams.delete("group");o.hash&&Kt(o.hash.replace(/^#/,""))&&(o.hash="");const r=e==="push"?"pushState":"replaceState";window.history[r]({oqView:n,oqSettingsSection:n==="settings"?t.settingsGroup:""},"",o.toString())}catch{}}function Xe(e,o={}){const n=Kt(e)||St(),r=o.syncMode||"replace",a=t.appView!==n;t.appView=n,(a||o.forceSync)&&ri(r)}function nc(){const e=Rn()||St(),o=e==="settings"?ni()||t.settingsGroup:"";if(!(e===t.appView&&(e!=="settings"||o===t.settingsGroup))){if(t.appView=e,e==="settings"&&o){t.settingsGroup=o;try{window.localStorage.setItem("oq-settings-group",t.settingsGroup)}catch{}}m(),ne(e==="settings"?{forceBulk:!0}:{forceFast:!0})}}function wo(){t.nativeApp&&(t.nativeApp.classList.add("oq-native-app"),t.nativeApp.classList.toggle("oq-native-app--collapsed",!t.nativeOpen),t.nativeApp.setAttribute("aria-hidden",t.nativeOpen?"false":"true"))}function rc(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qr,{once:!0}):Qr(),window.addEventListener("pointermove",tp),window.addEventListener("pointerup",op),window.addEventListener("popstate",nc),window.addEventListener("oq-mock-updated",ac),window.addEventListener("oq-dev-controls-changed",ic),document.addEventListener("visibilitychange",oc)}function ac(){t.mounted&&ne()}function ic(){t.mounted&&m()}function Qr(){sc();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),t.nativeApp=e,t.nativeFrontendLoaded=Array.from(document.scripts).some(o=>o.src===xa),t.mounted||(lc(e),t.mounted=!0,Fn()),wo(),t.nativeOpen||ne()}function sc(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function lc(e){const o=document.createElement("section");o.id="oq-helper-root",o.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(o,e),o.addEventListener("click",Ju),o.addEventListener("change",Xu),o.addEventListener("input",Zu),o.addEventListener("focusin",pa),o.addEventListener("focusout",pa),o.addEventListener("mouseover",Qu),o.addEventListener("mouseout",Yu),o.addEventListener("pointerdown",ep),t.root=o,Xl();const n=Rn()||St(),r=n==="settings"?ni():"";r&&mo(r,{syncUrl:!1}),Xe(n,{syncMode:"replace",forceSync:!0}),Dn(),m()}function cc(e){return new Promise((o,n)=>{if(!e){o();return}const r=Array.from(document.scripts).find(s=>s.src===e);if(r){if(r.dataset.loaded==="true"){o();return}r.addEventListener("load",()=>o(),{once:!0}),r.addEventListener("error",s=>n(s),{once:!0});return}const a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",o()},{once:!0}),a.addEventListener("error",s=>n(s),{once:!0}),document.head.appendChild(a)})}async function an(){if(!(t.nativeFrontendLoaded||t.nativeFrontendLoading)){t.nativeFrontendLoading=!0,t.nativeOpen&&m();try{await cc(xa),t.nativeFrontendLoaded=!0}catch(e){t.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,t.nativeOpen=!1,Za("app"),m(),Fn()}finally{t.nativeFrontendLoading=!1,t.nativeOpen&&m()}}}function Yr(){if(!t.root)return;const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;!e||typeof e.bind!="function"||e.bind(t.root)}function Dn(){t.root&&(t.root.style.removeProperty("--oq-flow-offset"),t.root.style.removeProperty("--oq-flow-offset-reverse"),t.root.style.removeProperty("--oq-fan-rotation"),t.root.getAttribute("style")||t.root.removeAttribute("style"))}function In(){return t.motionTargets={pipeFlows:[],fanBlades:[]},t.root?(t.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{t.motionTargets.pipeFlows.push(a)})}),t.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(r=>{r.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{t.motionTargets.pipeFlows.push(a)})}),t.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{t.motionTargets.fanBlades.push(a)})}),t.motionTargets.pipeFlows.length+t.motionTargets.fanBlades.length):0}function uc(){return t.motionTargets.pipeFlows.length>0||t.motionTargets.fanBlades.length>0}function ai(e=performance.now()){if(!t.root||t.reducedMotion||!uc()&&In()===0)return!1;t.motionStartedAt||(t.motionStartedAt=e);const o=(e-t.motionStartedAt)/1e3,n=o*Fl%360;return t.motionTargets.pipeFlows.forEach(r=>{const a=r.dataset.oqFlowVariant==="water"?.42:1,s=-(o*Ol*a);r.style.strokeDashoffset=`${s.toFixed(3)}px`}),t.motionTargets.fanBlades.forEach(r=>{r.style.transform=`rotate(${n.toFixed(3)}deg)`}),!0}function ii(e){if(!ai(e)){t.motionFrame=0,t.motionStartedAt=0;return}t.motionFrame=window.requestAnimationFrame(ii)}function Wn(){if(t.motionFrame||t.reducedMotion||In()===0)return;const e=performance.now();if(t.motionStartedAt=e,!ai(e)){t.motionStartedAt=0;return}t.motionFrame=window.requestAnimationFrame(ii)}function Mo(){const e=window.location.pathname.replace(/\/$/,"");return e===""?"":e}function Q(e,o,n=""){const r=n?`/${n}`:"";return`${Mo()}/${e}/${encodeURIComponent(o)}${r}`}function re(e=A("strategy")){return String(e||"").includes("Water Temperature Control")}function pc(e=A("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function rt(){return typeof window<"u"&&window.__OQ_DEV_META&&typeof window.__OQ_DEV_META=="object"?window.__OQ_DEV_META:{}}function dc(){const e=String(A("hpGeneration")||"").trim();return e||""}function sn(e){const o=String(e||"").trim().toLowerCase();return o==="single"||o.includes("quatt single")||o.includes("openquatt single")?"single":o==="duo"||o.includes("quatt duo")||o.includes("openquatt duo")?"duo":""}function mc(){if(!Array.isArray(uo))return"";if(uo.some(o=>w(o)))return"duo";const e=t.optionalMissingEntities||{};return uo.every(o=>e[o])?"single":""}function Jo(e){const o=sn(e);return(o==="single"||o==="duo")&&typeof t<"u"&&t&&typeof t=="object"&&(t.lastKnownInstallationTopology=o),o}function gc(){if(typeof t<"u"&&t&&typeof t=="object"){const e=String(t.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function we(){const e=sn(A("installationTopology"));if(e==="single"||e==="duo")return Jo(e);const o=sn(rt().installation);if(o==="single"||o==="duo")return Jo(o);const n=mc();return n?Jo(n):gc()}function Jt(){const e=we(),o=dc();return e==="single"?o?`Quatt Single ${o}`:"Quatt Single":e==="duo"?o?`Quatt Duo ${o}`:"Quatt Duo":o?`Quatt Hybrid ${o}`:"Quatt Hybrid"}function Be(){return"OpenQuatt"}function si(e){const o=String(e||"").trim().toLowerCase();return o==="wifi"||o==="wi-fi"||o.includes("wifi")||o.includes("wi-fi")?"wifi":o==="eth"||o==="ethernet"||o.includes("ethernet")?"eth":""}function tt(e=eo()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function li(){return String(A("hardwareProfileText")||rt().hardwareProfile||"").trim().toLowerCase()}function eo(){return si(A("connectionText")||rt().connection)}function hc(){const e=eo();return e==="wifi"?"eth":e==="eth"?"wifi":""}function Zr(e=eo()){const o=we(),n=o==="duo"?"Duo":o==="single"?"Single":"Onbekende opstelling";return li()==="heatpump_controller_q"?`Heatpump Controller Q ${n} ${tt(e)}`:`${Be()} ${n} ${tt(e)}`}function Bn(){const e=li(),o=we(),n=eo(),r=hc();return e!=="heatpump_controller_q"||o!=="single"&&o!=="duo"||n!=="wifi"&&n!=="eth"||!r?null:{canSwitch:w("firmwareUpdateTarget")&&w("installFirmwareUpdateTarget"),currentConnection:n,targetConnection:r,currentLabel:tt(n),targetLabel:tt(r),currentBuildLabel:Zr(n),targetBuildLabel:Zr(r)}}function ci(){const e=N("timeValid"),o=String(A("timeNowHhmm")||"").trim();if(o&&o!=="invalid")return o;if(w("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function ui(){return w("timeValid")&&!N("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${ci()}`}function lo(e){if(!Number.isFinite(e)||e<0)return"\u2014";const o=Math.floor(e),n=Math.floor(o/1440),r=Math.floor(o%1440/60),a=o%60;return n>0?`${n}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function fc(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function vc(e){const o=e?.state;if(o!==""&&o!==null&&o!==void 0){const a=Number(o);if(Number.isFinite(a))return a}const n=e?.value,r=Number(n);return Number.isFinite(r)?r:NaN}function jn(){const e=vc(t.entities.uptime);if(Number.isFinite(e)&&e>=0){const r=fc(t.entities.uptime);if(r==="d")return lo(e*1440);if(r==="h")return lo(e*60);if(r==="s")return lo(e/60)}const o=String(t.entities.uptimeReadable?.state??t.entities.uptimeReadable?.value??"").trim();if(o&&o.toLowerCase()!=="unknown")return o;const n=Number(rt().bootedAt);return!Number.isFinite(n)||n<=0?"\u2014":lo((Date.now()-n)/6e4)}function Vn(){const e=String(t.entities.ipAddress?.state??t.entities.ipAddress?.value??"").trim();if(e)return e;const o=String(rt().ipAddress||"").trim();return o||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function to(){if(Ne())return"Controleren";const e=Pt();if(e)return e.phaseLabel;if(zn())return"Bijgewerkt";if(zt())return"Bezig";if(Mt())return"Beschikbaar";const o=di();if(o!==null&&o<=0)return"Actueel";const n=rt();return typeof n.updateLabel=="string"&&n.updateLabel.trim()?n.updateLabel.trim():n.updateAvailable===!0?"Beschikbaar":n.updateAvailable===!1||Qn()?"Actueel":le()?"Nog niet gecontroleerd":"\u2014"}function le(){return t.entities.firmwareUpdate||null}function Lo(){const e=le();return e?String(e.state??e.value??"").trim().toLowerCase():""}function bc(){const e=t.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function Ho(){return bc().toLowerCase()}function pi(){const e=t.entities.firmwareUpdateProgress;if(!e)return Number.NaN;const o=Number(e.value??e.state);return Number.isNaN(o)?Number.NaN:Math.max(0,Math.min(100,o))}function _n(){const e=String(t.updateInstallTargetVersion||"").trim(),o=ge();return!e||!o?!1:oo(o,e)>=0}function wc(e=le()||{}){const o=kt(e),n=ge(e);return!o||!n?!1:oo(n,o)>=0}function Kn(){return(_n()||wc())&&!Ne()&&!yo()&&!Mt()}function zn(){return(t.updateInstallCompleted||Kn())&&!Ne()&&!Pt()&&!Mt()}function Un(){t.updateInstallBusy=!1,t.updateInstallTargetVersion="",t.updateInstallPhaseHint="",t.updateInstallProgressHint=Number.NaN,t.updateInstallMode="",t.updateInstallTargetConnection=""}function Je(){t.updateManualUploadFile=null,t.updateManualUploadFileName="",t.updateManualUploadError=""}function yc(){const e=Ho(),o=pi();if(e==="starting"||e==="uploading"||e==="rebooting"){t.updateInstallPhaseHint=e,Number.isNaN(o)||(t.updateInstallProgressHint=e==="rebooting"?Math.max(o,100):o);return}if(t.updateInstallBusy){if(_n()){t.updateInstallPhaseHint="rebooting",t.updateInstallProgressHint=100;return}t.controlNotice.includes("opnieuw is opgestart")&&(t.updateInstallPhaseHint="rebooting",t.updateInstallProgressHint=100)}}function yo(){const e=Ho();return e==="starting"||e==="uploading"||e==="rebooting"}function Pt(){yc();const e=Ho(),o=e==="starting"||e==="uploading"||e==="rebooting",n=o?e:t.updateInstallPhaseHint,r=pi(),a=Number.isNaN(t.updateInstallProgressHint)?0:Math.round(t.updateInstallProgressHint),s=o&&!Number.isNaN(r)?Math.round(r):a;return!yo()&&!t.updateInstallBusy?null:n==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(s,100),copy:t.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:n==="uploading"?{phaseLabel:"Uploaden",percent:s,copy:t.updateInstallMode==="connection-switch"?`De ${tt(t.updateInstallTargetConnection)}-build wordt nu naar ${Be()} verzonden.`:`Firmware wordt nu naar ${Be()} verzonden.`}:{phaseLabel:"Installeren",percent:s,copy:t.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${tt(t.updateInstallTargetConnection)} is gestart.`:`OTA-update is gestart voor ${Be()}.`}}function kt(e=le()||{}){const o=String(e.latest_version||"").trim();if(o)return o;const n=String(e.value||"").trim(),r=String(e.current_version||"").trim();return n&&n!==r&&/^v/i.test(n)?n:""}function ge(e=le()||{}){const o=String(t.entities.projectVersionText?.state||t.entities.projectVersionText?.value||"").trim();return o||String(e.current_version||"").trim()}function qc(e=le()||{}){const o=ge(e),n=String(e.current_version||"").trim();return!o||!n||o===n?!1:oo(o,n)>0}function Gn(e=le()||{},o=ot()){const n=String(o||"").trim().toLowerCase(),r=String(e.release_url||"").trim().toLowerCase(),a=kt(e).toLowerCase();if(!n||n==="\u2014")return!0;if(n==="dev"){if(r){if(r.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(n==="main"){if(r){if(r.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function Xr(e){const n=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return n?{major:Number(n[1]),minor:Number(n[2]),patch:Number(n[3]),prereleaseTag:n[4]||"",prereleaseNumber:n[5]?Number(n[5]):null}:null}function oo(e,o){const n=Xr(e),r=Xr(o);if(!n||!r)return 0;if(n.major!==r.major)return n.major>r.major?1:-1;if(n.minor!==r.minor)return n.minor>r.minor?1:-1;if(n.patch!==r.patch)return n.patch>r.patch?1:-1;const a=!n.prereleaseTag,s=!r.prereleaseTag;return a!==s?a?1:-1:n.prereleaseTag!==r.prereleaseTag?n.prereleaseTag>r.prereleaseTag?1:-1:n.prereleaseNumber!==r.prereleaseNumber?(n.prereleaseNumber||0)>(r.prereleaseNumber||0)?1:-1:0}function zt(){if(Kn())return!1;const e=Lo();return t.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function Ne(){const e=Lo();return t.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function Mt(){const e=Lo();if(!Gn())return!1;const o=di();return o!==null?o>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:rt().updateAvailable===!0}function Qn(){const e=Lo();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||qc()}function Yn(){const e=le()||{},o=ge(e)||"\u2014";let n=Gn(e)?kt(e):"";const r=n?oo(n,o):null;return!Ne()&&r!==null&&r<=0&&(n=""),{current:o,latest:n||"\u2014"}}function di(){const{current:e,latest:o}=Yn();return e==="\u2014"||o==="\u2014"?null:oo(o,e)}function mi(e=ot()){const o=String(e||"").trim().toLowerCase();return Ur[o]||Ur.main}function Sc(){const e=String((le()||{}).release_url||"").trim(),o=mi();return!e||o.includes("/dev-latest")&&!e.includes("/dev-latest")||!o.includes("/dev-latest")&&e.includes("/dev-latest")?o:e}function kc(){return Be()}function ot(){return String(A("firmwareUpdateChannel")||t.entities.releaseChannelText?.state||t.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function gi(){return Yn().latest!=="\u2014"}function hi(e){return new Promise(o=>window.setTimeout(o,e))}const Cc=1500;function Zn(){t.deviceReconnectRecoveryTimer&&(window.clearTimeout(t.deviceReconnectRecoveryTimer),t.deviceReconnectRecoveryTimer=null)}function at(){return Number(t.deviceReconnectRecoveryStartedAt||0)>0}function Tc(){return at()?Number(t.deviceReconnectRecoveryStartedAt||0):Number(t.deviceReconnectStartedAt||0)}function $c(){return at()?"Gegevens verversen":"Wachten op gegevens"}function Ac(){const e=Tc(),o=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return at()?o>0?`${o}s aan het verversen`:"Net weer online":o>0?`${o}s bezig`:"Net gestart"}function Jr(){if(!t.deviceReconnectMode||at())return!1;Zn(),t.deviceReconnectRecoveryStartedAt=Date.now(),t.deviceReconnectLastError="",t.entitySyncFailureCount=0;const e=t.deviceReconnectRecoveryStartedAt;return t.deviceReconnectRecoveryTimer=window.setTimeout(()=>{t.deviceReconnectMode&&Number(t.deviceReconnectRecoveryStartedAt||0)===e&&(fi(),m())},Cc),m(),!0}function Xn(e="reconnect",o=""){t.deviceReconnectMode||(t.deviceReconnectStartedAt=Date.now()),Zn(),t.deviceReconnectMode=e,t.deviceReconnectRecoveryStartedAt=0,t.deviceReconnectLastError=o?String(o):t.deviceReconnectLastError,t.systemModal="",t.updateModalOpen=!1,t.controlError=""}function fi(){Zn(),!(!t.deviceReconnectMode&&!t.entitySyncFailureCount)&&(t.deviceReconnectMode="",t.deviceReconnectStartedAt=0,t.deviceReconnectRecoveryStartedAt=0,t.deviceReconnectLastError="",t.entitySyncFailureCount=0)}function Ec(){return at()?"OpenQuatt is weer online":t.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":t.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function Pc(){return at()?t.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":t.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":t.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function Mc(){return t.deviceReconnectMode?`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="reconnect">
        <section class="oq-helper-modal oq-helper-modal--reconnect" role="status" aria-live="polite" aria-labelledby="oq-reconnect-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-reconnect-modal-title">${i(Ec())}</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">${i(Pc())}</p>
          <div class="oq-helper-reconnect-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>${i($c())}</strong>
              <span>${i(Ac())}</span>
            </div>
          </div>
        </section>
      </div>
    `:""}function Jn(e=ot()){const o=le()||{},n=ge(o);t.entities.firmwareUpdate={...o,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:mi(e),current_version:n}}async function er(){for(let e=0;e<6;e+=1){await hi(e===0?900:1200),await z(Ln,"all");const o=Gn(),n=gi(),r=Ne(),a=to();if(o&&(n||!r&&a!=="Nog niet gecontroleerd"))return}}async function tr(){let e=!1;for(let o=0;o<45;o+=1){await hi(o===0?700:1e3);try{if(await z(Ln,"all"),Ho()==="rebooting"&&Xn("ota"),m(),t.updateInstallMode==="connection-switch"){const n=si(t.updateInstallTargetConnection);if(n&&eo()===n&&!yo()&&!zt())return!0}else if(_n()||Kn()||Qn()&&!yo()&&!zt())return!0}catch{e||(t.controlNotice="Wachten tot het device opnieuw is opgestart...",m(),e=!0)}}return!1}function Lc(){const e=ot(),o=Pt();if(o)return o.copy;if(zn()){const n=t.updateInstallCompletedVersion||ge()||ot();return`${Be()} draait nu op ${n}.`}return zt()?`OTA-update wordt voorbereid voor ${Be()}. Het device kan kort herstarten.`:Ne()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:Mt()?"Er staat een nieuwere firmware klaar.":Qn()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function Hc(){const e=Bn();if(!e||!t.firmwareConnectionSwitchOpen)return"";const n=!!(Pt()||t.updateInstallBusy||Ne()),r=!!t.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",s=!e.canSwitch,u=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",p=s?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
        <strong>Verbinding wisselen</strong>
        <span>Installeer dezelfde ${i(ot())}-build voor de andere netwerkverbinding.</span>
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
        <p class="oq-helper-modal-note">${i(u)}</p>
        ${p}
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
    `}function Nc(){if(!t.updateManualUploadOpen)return"";const o=!!(Pt()||t.updateInstallBusy||Ne()),n=String(t.updateManualUploadFileName||t.updateManualUploadFile?.name||"").trim();return`
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
    `}function ln(){return[t.interfacePanelOpen?"open":"closed",t.nativeOpen?"native":"app",t.appView,t.complete?"complete":"incomplete",t.overviewTheme,t.hpVisualMode,oe("installationTopology"),oe("hardwareProfileText"),oe("connectionText"),oe("hpGeneration"),oe("projectVersionText"),oe("releaseChannelText"),or()].join("|")}function or(){const e=Math.max(Number(t.lastEntityResponseAt||0),Number(t.lastEntitySyncAt||0)),o=Number(t.deviceReconnectStartedAt||0);return t.entitySyncFailureCount>0&&!t.deviceReconnectMode?"Bezig":e>0&&(!t.deviceReconnectMode||e>=o)?"Verbonden":t.deviceReconnectMode?at()?"Verbonden":t.deviceReconnectMode==="reconnect"?"Offline":"Bezig":w("status")&&!N("status")?"Offline":"Bezig"}function xc(){return String(A("projectVersionText")||"").trim()||"\u2014"}function Oc(){const e=xc();return e&&e!=="\u2014"?e:to()}function vi(){const e=t.entities.espInternalTemp;if(!e)return"\u2014";const o=P("espInternalTemp");return Number.isNaN(o)?B("espInternalTemp"):R(o,1,e.uom||" \xB0C")}function nr(){const e=t.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function Fc(){return"Login"}function Rc(){const e=t.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function rr(){const e=t.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function Dc(){return"ESPHome API encryption"}function Ic(){const e=t.apiSecurityStatus;return e?e.pending_restart?"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.key?"De sleutel blijft opgeslagen, ook wanneer encryptie uit staat. Je kunt hem hier meteen kopi\xEBren of opnieuw inschakelen.":"Er is nog geen API-sleutel opgeslagen. Deze wijziging wordt actief na herstart.":"We halen de huidige API-beveiliging op."}function Wc(){const e=t.apiSecurityStatus;return e?e.enabled?"Uitschakelen":"Inschakelen":"Laden..."}function Bc(){const e=t.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function de(e,o,n="",r=!1){return`
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
    `}function jc(){const e=t.apiSecurityStatus||{},o=e.enabled===!0,n=!!e.key,r=!!e.pending_restart,a=t.apiSecurityNotice,s=t.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${i(t.apiSecurityError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${i(Dc())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${i(Ic())}</p>
          ${a?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${i(a)}</span></div>`:""}
          ${s}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${i(yr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${i(qr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${o?"disable-api-security":"enable-api-security"}"
                ${t.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${i(Wc())}
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
                      ${i(Bc())}
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
    `}function Vc(){const e=t.mqttStatus||{},o=!t.mqttStatus,n=t.mqttNotice,r=t.mqttBusy,a=r||o,s=String(t.mqttDraftBroker||""),u=String(t.mqttDraftBaseTopic||""),p=String(t.mqttDraftUsername||""),c=String(t.mqttDraftPassword||""),l=String(t.mqttDraftEssentialIntervalS||"10"),d=String(t.mqttDraftStandardIntervalS||"30"),f=String(t.mqttDraftDiagnosticIntervalS||"60");return`
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
                ${de("Status","Laden...","MQTT-configuratie wordt opgehaald.",!0)}
                ${de("Broker","Laden...","Even wachten op de actuele brokerinstellingen.",!0)}
                ${de("Base topic","Laden...","Even wachten op de actuele topicinstelling.",!0)}
                ${de("Publish-profiel","Laden...","Even wachten op het actieve publish-profiel.",!0)}
                ${de("Gebruiker","Laden...","Even wachten op de opgeslagen login.",!0)}
                ${de("Retain snapshots","Laden...","Even wachten op de snapshot-instelling.",!0)}
              `:`
                ${de("Status",ur(),pr())}
                ${de("Broker",String(e.broker||"").trim()||"Geen broker",e.connected?"MQTT publiceert en ontvangt via deze broker.":"Nog geen actieve verbinding.")}
                ${de("Base topic",String(e.base_topic||"").trim()||"openquatt","Alle compacte telemetry-topics hangen hieronder.")}
                ${de("Publish-profiel",xi(e.publish_profile),`Essential: ${Number(e.essential_interval_s||10)}s, Standard: ${Number(e.standard_interval_s||30)}s, Diagnostic: ${Number(e.diagnostic_interval_s||60)}s`)}
                ${de("Gebruiker",String(e.username||"").trim()||"Anoniem",e.password_set?"Er is een wachtwoord opgeslagen.":"Er is nog geen wachtwoord opgeslagen.")}
                ${de("Retain snapshots",e.retain_snapshots!==!1?"Aan":"Uit",e.retain_snapshots!==!1?"Nieuwe subscribers zien meteen de laatste snapshot.":"Alleen live berichten worden doorgestuurd.")}
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
                  <input class="oq-helper-input" type="text" autocomplete="off" spellcheck="false" data-oq-mqtt-field="username" value="${i(p)}" placeholder="optioneel" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Wachtwoord</span>
                  <input class="oq-helper-input" type="password" autocomplete="new-password" data-oq-mqtt-field="password" value="${i(c)}" placeholder="${e.password_set?"Leeg laten om te behouden":"optioneel"}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-helper-modal-channel--span-2 oq-mqtt-field">
                  <span class="oq-helper-modal-label">Base topic</span>
                  <input class="oq-helper-input" type="text" autocomplete="off" spellcheck="false" data-oq-mqtt-field="baseTopic" value="${i(u)}" placeholder="openquatt" ${a?"disabled":""}>
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
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="essentialIntervalS" value="${i(l)}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Standard interval</span>
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="standardIntervalS" value="${i(d)}" ${a?"disabled":""}>
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
    `}function _c(){const e=[["Netwerkstatus",or()],["IP-adres",Vn()]],o=String(A("wifiSsid")||"").trim();o&&e.push(["WiFi SSID",o]);const n=t.entities.wifiSignal;if(n){const r=P("wifiSignal");Number.isNaN(r)||e.push(["WiFi signaal",R(r,0,n.uom||" dBm")])}return e}function bi(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="login"?"open-login-modal":""}function wi(){return[["installation","Installatie",Jt()],["uptime","Uptime",jn()],["connectivity","Connectiviteit",or()],["time","Tijd",ci()],["version","Versie",Oc(),!!le()]]}function yi(){return Mt()}function qi(e){return e==="version"&&yi()}function jt(){return`
      <div class="oq-helper-status-grid">
        ${wi().map(([o,n,r,a])=>{const s=bi(o),u=!!(a||s),p=qi(o);return`
          <${u?"button":"div"}
            class="oq-helper-status-item${u?" oq-helper-status-item--button":""}${p?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${i(o)}"
            ${u?`type="button" data-oq-action="${i(s)}"`:""}
          >
            <span class="oq-helper-status-label">${i(n)}</span>
            <strong class="oq-helper-status-value">${p?`<span class="oq-helper-status-value-text">${i(r)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:i(r)}</strong>
          </${u?"button":"div"}>
        `}).join("")}
      </div>
    `}function ea(){if(!t.root)return!1;const e=t.root.querySelector(".oq-helper-status-grid");if(!e)return!!t.root.querySelector(".oq-helper-hub");const o=wi();if(e.querySelectorAll("[data-oq-header-status]").length!==o.length)return e.outerHTML=jt(),!0;for(const[r,a,s,u]of o){const p=e.querySelector(`[data-oq-header-status="${r}"]`);if(!p)return e.outerHTML=jt(),!0;const c=bi(r),l=!!(u||c);if(p.tagName.toLowerCase()!==(l?"button":"div"))return e.outerHTML=jt(),!0;const d=p.querySelector(".oq-helper-status-label"),f=p.querySelector(".oq-helper-status-value");if(!d||!f)return e.outerHTML=jt(),!0;d.textContent!==a&&(d.textContent=a);const g=qi(r),v=g?`<span class="oq-helper-status-value-text">${i(s)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:i(s);f.innerHTML!==v&&(f.innerHTML=v),l?p.setAttribute("data-oq-action",c):p.removeAttribute("data-oq-action"),p.classList.toggle("oq-helper-status-item--button",l),p.classList.toggle("oq-helper-status-item--attention",g)}return!0}function Kc(){const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;return!e||typeof e.render!="function"?"":e.render()}function ta(){const e=Kc();return e?t.devPanelOpen?`
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
      `:""}function zc(){const e=t.nativeOpen?"native":"app",o=yi();return t.interfacePanelOpen?`
      <aside class="oq-helper-hub" aria-label="Weergave en systeem">
        <div class="oq-helper-hub-head">
          <h2 class="oq-helper-hub-title">Weergave en systeem</h2>
          <div class="oq-helper-hub-head-actions">
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
          ${jt()}
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
      `}function Uc(){const e=t.nativeOpen?"native":"app",o=t.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",n=t.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${i(t.controlError)}</p>`:"";return`
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
    `}function Gc(){const e=t.authStatus||{},o=e.enabled===!0,n=e.setup_window_active===!0,r=o||n,a=o?String(e.username||"").trim():"",s=t.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${i(t.authNotice)}</span></div>`:"",u=t.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${i(t.authError)}</div>`:"",c=r?`
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
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${i(Fc())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${i(Rc())}</p>
          ${s}
          ${u}
          <div class="oq-helper-modal-grid">
            ${de("Beveiligingsstatus",nr(),rr())}
            ${de("Gebruiker",o?a||"Geen naam":"Geen login",o?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${c}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.authBusy?"disabled":""}>Gereed</button>
            ${o?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${t.authBusy?"disabled":""}>Uitzetten</button>`:""}
            ${r?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${t.authBusy?"disabled":""}>${o?"Opslaan":"Login opslaan"}</button>`:""}
          </div>
        </section>
      </div>
    `}function Qc(){if(!t.updateModalOpen)return"";const e=le(),o=t.entities.firmwareUpdateChannel||null,{current:n,latest:r}=Yn(),a=Ne(),s=zt(),u=Mt(),p=Lc(),c=Pt(),l=zn(),d=Sc(),f=l?"Firmware-update afgerond":c||s?"Firmware-update bezig":a?"Controleren op firmware-update":kc(),g=o?Array.isArray(o.option)?o.option:Array.isArray(o.options)?o.options:[]:[],v=Bn(),S=!!(v&&!l);return`
      <div class="oq-helper-modal-backdrop${a||s||c?" is-busy":""}${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${i(f)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${i(p)}</p>
          ${l?`
            <div class="oq-helper-modal-success" aria-live="polite">
              <strong>Bijgewerkt</strong>
              <span>De nieuwe firmware draait nu op het device.</span>
            </div>
          `:""}
          ${c?`
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${i(c.phaseLabel)}</strong>
                <span>${i(`${c.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,c.percent))}%"></span>
              </div>
            </div>
          `:""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${i(to())}</strong>
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
              <strong class="oq-helper-modal-value">${i(ot())}</strong>
            </div>
          </div>
          ${g.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${g.map(h=>`
                  <option value="${i(h)}" ${String(A("firmwareUpdateChannel")||"")===h?"selected":""}>${i(h)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||s||c?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${l?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!u||s||a||c||!e?"disabled":""}>
              ${s?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-upload" ${a||s||c?"disabled":""}>
              ${t.updateManualUploadOpen?"Handmatige upload verbergen":"Handmatige upload"}
            </button>
            ${S?`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-connection-switch" ${a||s||c?"disabled":""}>
                ${t.firmwareConnectionSwitchOpen?"Verbinding wisselen verbergen":`Verbinding wisselen naar ${i(v.targetLabel)}`}
              </button>
            `:""}
            ${d?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${i(d)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
          </div>
          ${Hc()}
          ${Nc()}
        </section>
      </div>
    `}function Yc(){if(t.systemModal==="login")return Gc();if(t.systemModal==="api-security")return jc();if(t.systemModal==="mqtt")return Vc();if(t.systemModal==="connectivity"){const e=_c();return`
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
      `}if(t.systemModal==="settings-backup-restore")return Bd();if(t.systemModal==="settings-backup-import")return Wd();if(String(t.systemModal||"").startsWith("service-task-"))return Ed();if(t.systemModal==="settings-backup-success"){const e=t.controlNotice||"Backup hersteld.";return`
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
              ${Kd()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;if(t.systemModal==="webserver-logs")return id();if(t.systemModal==="openquatt-pause"){const e=N("openquattEnabled"),o=t.busyAction==="openquatt-regulation",n=w("openquattResumeAt"),r=t.loadingEntities||t.entitySyncInFlight,a=n||!r,s=ar(),u=ir(A("openquattResumeAt")),p=Ci();return`
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
                  <span>${i(u)}</span>
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
                        value="${i(p)}"
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
      `}return""}function A(e){if(Object.prototype.hasOwnProperty.call(t.drafts,e))return t.drafts[e];const o=t.entities[e];return o?o.value??o.state??"":""}function ze(e){const o=t.entities[e]||{};return{min:Number(o.min_value??0),max:Number(o.max_value??100),step:Number(o.step??1),uom:o.uom||""}}function He(e){return Object.prototype.hasOwnProperty.call(t.inputDrafts,e)?t.inputDrafts[e]:A(e)}function nt(e){if(typeof e=="number")return e;const o=String(e??"").trim().replace(",",".");return!o||o==="-"||o==="."||o==="-."?Number.NaN:Number(o)}function Lt(e){const o=String(e||"").trim();if(!o)return"";const n=o.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!n)return"";const r=Number(n[1]),a=Number(n[2]),s=Number(n[3]||"0");return[r,a,s].some(u=>Number.isNaN(u))||r<0||r>23||a<0||a>59||s<0||s>59?"":`${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function cn(e){const o=Lt(e);return o?o.slice(0,5):""}function xe(e){const o=String(e||"").trim();if(!o)return"";const n=o.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!n)return"";const r=Number(n[1]),a=Number(n[2]),s=Number(n[3]),u=Number(n[4]),p=Number(n[5]),c=Number(n[6]||"0");return[r,a,s,u,p,c].some(l=>Number.isNaN(l))||r<2e3||a<1||a>12||s<1||s>31||u<0||u>23||p<0||p>59||c<0||c>59?"":`${String(r).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(s).padStart(2,"0")} ${String(u).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(c).padStart(2,"0")}`}function un(e){const o=xe(e);return!o||o===_t?"":o.slice(0,16).replace(" ","T")}function Si(e){const o=xe(e);if(!o||o===_t)return null;const n=o.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!n)return null;const r=Number(n[1]),a=Number(n[2]),s=Number(n[3]),u=Number(n[4]),p=Number(n[5]),c=Number(n[6]),l=new Date(r,a-1,s,u,p,c,0);return Number.isNaN(l.getTime())?null:l}function ar(e=A("openquattResumeAt")){return!!Si(e)}function ir(e,o=!1){const n=Si(e);return n?new Intl.DateTimeFormat("nl-NL",o?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(n):""}function oa(e){const o=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return`${o}-${n}-${r}T${a}:${s}`}function Zc(e){const o=new Date(e.getTime());o.setSeconds(0,0);const n=o.getMinutes(),r=n%15;return r!==0&&o.setMinutes(n+(15-r)),o}function ki(e){const o=new Date;if(e==="2h"||e==="8h"){const n=e==="2h"?2:8,r=Zc(new Date(o.getTime()+n*3600*1e3));return oa(r)}if(e==="tomorrow-morning"){const n=new Date(o);return n.setDate(n.getDate()+1),n.setHours(7,0,0,0),oa(n)}return""}function Ci(){const e=un(t.pauseResumeDraft);if(e)return e;const o=un(A("openquattResumeAt"));return o||ki("2h")}function it(){return[...new Set(["setupComplete",...Qa])]}function No(){return t.appView==="settings"&&t.settingsGroup==="system"}function Ti(){return t.appView==="settings"&&t.settingsGroup==="integrations"}function Xc(){const e=typeof window<"u"?Number(window.__OQ_DEV_LOAD_DELAY_MS||0):0;return Number.isFinite(e)&&e>0?e:0}const Jc=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","silentModeOverride","totalHeat","totalCoolingPower"],eu=["strategy","controlModeLabel","hpGeneration"],tu=["totalPower","flowSelected"],ou=["totalHeat","totalCoolingPower"],nu=2e3,ru=250,na={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel"]},au=5e3,iu=250,su=["installationTopology",...uo,"hpGeneration","openquattEnabled","flowControlMode","silentStartTime","silentEndTime","maxWater","minRuntime"],lu={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...At,...Ra,...Ga,...Ua,"maxWater"],service:[...En,...Pn,...An,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...Eo,...za,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...Ka],integrations:[...Wa,...ja,...Ba,...Va,...Mn,..._a,...Ia],system:["setupComplete",...Et,"firmwareUpdateChannel","projectVersionText","releaseChannelText","trendHistoryEnabled","trendHistoryFlashEnabled","webServerLogHistoryEnabled","debugLevel","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites"]};function $i(e=t.settingsGroup){const o=Ee.has(e)?e:be[0].id;return[...new Set(["setupComplete","strategy",...Se,...lu[o]||[]])]}function Ai(){const e=Ee.has(t.settingsGroup)?t.settingsGroup:be[0].id;return[...new Set(na[e]||na.installation)]}function cu(e={}){const o=t.pendingEntitySyncOptions||{},n={...o,...e};o.forceBulk||e.forceBulk?(n.forceBulk=!0,n.forceFast=!1):(o.forceFast||e.forceFast)&&(n.forceFast=!0),t.pendingEntitySyncOptions=n}function sr(e){const o=String(A(e)??"").trim().toLowerCase();return o!==""&&o!=="unknown"&&o!=="unavailable"&&o!=="nan"}function ra(e){return sr(e)&&Number.isFinite(nt(A(e)))}function lr(){return t.appView==="overview"||t.appView==="trends"||t.appView==="energy"}function uu(){return kl.filter(e=>{const o=t.entities[e];return o?!String(o.uom??o.unit_of_measurement??"").trim():!j[e]?.optional})}async function Ei(){if(t.nativeOpen||!lr()||t.overviewMetadataHydrated||t.overviewMetadataHydrating)return!1;const e=uu();if(!e.length)return t.overviewMetadataHydrated=!0,!1;t.overviewMetadataHydrating=!0;try{return await z(e,"all",{concurrency:$t}),t.overviewMetadataHydrated=!0,!0}catch{return!1}finally{t.overviewMetadataHydrating=!1,t.mounted&&!t.nativeOpen&&m()}}function aa(){return lr()?eu.every(sr)&&tu.every(ra)&&ou.some(ra):!0}function pu(){return t.appView==="settings"}function ia(){return pu()?Ai().every(e=>j[e]?.optional&&!t.entities[e]?!0:sr(e)):!0}async function du(){if(aa())return;const e=Date.now()+nu;for(;!t.nativeOpen&&!aa()&&Date.now()<e;){await new Promise(o=>window.setTimeout(o,ru));try{await z(Jc,"state")}catch{return}}}async function mu(){if(ia())return;const e=Date.now()+au;for(;!t.nativeOpen&&!ia()&&Date.now()<e;){await new Promise(o=>window.setTimeout(o,iu));try{await z(Ai(),"all")}catch{return}}}function V(e,o=A(e)){if(o===""||o===null||Number.isNaN(Number(o)))return"\u2014";const n=ze(e),r=n.step<1?Math.min(4,Math.max(1,String(n.step).split(".")[1]?.length||1)):0;return`${Number(o).toFixed(r)}${n.uom?` ${n.uom}`:""}`}function ve(e,o){const n=ze(e),r=nt(o);if(Number.isNaN(r)){const c=nt(t.entities[e]?.value??t.entities[e]?.state??"");return Number.isNaN(c)?n.min:c}const a=Math.min(n.max,Math.max(n.min,r)),s=Math.round((a-n.min)/n.step),u=n.min+s*n.step,p=n.step<1?Math.min(4,Math.max(1,String(n.step).split(".")[1]?.length||1)):0;return Number(u.toFixed(p))}function Pi(){const e=se[Math.floor(se.length/2-1)],o=se[Math.floor(se.length/2)];if(!e||!o||!w("curveFallbackSupply"))return null;const n=ve(e.key,A(e.key)),r=ve(o.key,A(o.key)),a=(n+r)/2,s=ve("curveFallbackSupply",a);return{value:s,label:V("curveFallbackSupply",s),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${o.label}).`,isCurrent:ve("curveFallbackSupply",A("curveFallbackSupply"))===s}}const gu=8e3,Mi=3e3;function hu(){return t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint?Mi:gu}async function fu(e,o="state"){const n=j[e],r=`${Q(n.domain,n.name)}${o==="all"?"?detail=all":""}`,a=hu();if(typeof AbortController=="function"){const u=new AbortController,p=window.setTimeout(()=>u.abort(),a);try{const c=await fetch(r,{signal:u.signal});if(!c.ok)throw new Error(`${n.name} HTTP ${c.status}`);return c.json()}catch(c){throw u.signal.aborted?new Error(`${n.name} request timed out after ${a}ms`):c}finally{window.clearTimeout(p)}}const s=await fetch(r);if(!s.ok)throw new Error(`${n.name} HTTP ${s.status}`);return s.json()}function vu(e){const o=String(e||"").toLowerCase();return o.includes("failed to fetch")||o.includes("load failed")||o.includes("networkerror")||o.includes("network request failed")||o.includes("connection refused")||o.includes("connection reset")||o.includes("err_connection")||o.includes("timeout")}function bu(){const e=Date.now();t.lastEntitySyncAt=e,t.lastEntitySyncSuccessAt=e,t.entitySyncFailureCount=0,!!t.deviceReconnectMode&&typeof Jr=="function"&&Jr()&&(t.lastFastEntitySyncAt=0,t.lastBulkEntitySyncAt=0,t.lastStaticEntitySyncAt=0,t.trendHistoryRaw="",t.trendHistoryError="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=0,typeof ba=="function"?ba():(et(),Fo(),t.webServerLogEnabled=null,t.webServerLogConnected=!1))}function Li(e){if(!vu(e)){t.entitySyncFailureCount=0,fi();return}t.entitySyncFailureCount=Number(t.entitySyncFailureCount||0)+1,t.deviceReconnectLastError=String(e||""),(t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint||t.entitySyncFailureCount>=2)&&Xn(t.updateInstallBusy||t.updateInstallPhaseHint?"ota":t.busyAction==="restartAction"?"restart":"reconnect",e)}function wu(e=Date.now(),o={}){if(o.forceProbe===!0||t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint||Number(t.entitySyncFailureCount||0)>0)return!0;const n=Number(t.lastEntitySyncSuccessAt||t.lastEntitySyncAt||t.lastEntityResponseAt||0);if(!n)return!0;const r=document.hidden?Hn:Ml;return e-n>=r}async function yu(){const e=j.status||j.setupComplete;if(!e)return{ok:!0,message:""};const o=t.deviceReconnectMode?Mi:Pl,n=Q(e.domain,e.name);if(typeof AbortController=="function"){const r=new AbortController,a=window.setTimeout(()=>r.abort(),o);try{const s=await fetch(n,{cache:"no-store",signal:r.signal});return t.lastEntityResponseAt=Date.now(),{ok:s.ok||s.status===404,message:s.ok||s.status===404?"":`${e.name} HTTP ${s.status}`}}catch(s){return{ok:!1,message:r.signal.aborted?`${e.name} request timed out after ${o}ms`:s.message||String(s)}}finally{window.clearTimeout(a)}}try{const r=await fetch(n,{cache:"no-store"});return t.lastEntityResponseAt=Date.now(),{ok:r.ok||r.status===404,message:r.ok||r.status===404?"":`${e.name} HTTP ${r.status}`}}catch(r){return{ok:!1,message:r.message||String(r)}}}async function z(e,o="state",n={}){const r=Number(n.concurrency),a=Number.isFinite(r)&&r>0?Math.floor(r):$t,s=[];for(let p=0;p<e.length;p+=a){const c=e.slice(p,p+a),l=await Promise.allSettled(c.map(async d=>({key:d,payload:await fu(d,o)})));s.push(...l)}s.some(p=>p.status==="fulfilled")&&(t.lastEntityResponseAt=Date.now());let u="";s.forEach((p,c)=>{const l=e[c];if(p.status==="fulfilled"){t.optionalMissingEntities&&delete t.optionalMissingEntities[l];const{payload:d}=p.value;t.entities[l]=qu(l,t.entities[l],d)}else{const d=p.reason.message||String(p.reason);j[l]?.optional?d.includes("HTTP 404")&&(t.optionalMissingEntities[l]=!0):u||(u=d)}}),_u(),gs(jo()),u?(Li(u),t.deviceReconnectMode?t.controlError="":t.controlError=`Niet alle helpervelden konden worden ververst. ${u}`):t.busyAction||(bu(),t.controlError="")}function qu(e,o={},n={}){const r={...o||{},...n||{}};return j[e]?.domain==="select"&&(!String(n.state??"").trim()&&String(o?.state??"").trim()&&(r.state=o.state),!String(n.value??"").trim()&&String(o?.value??"").trim()&&(r.value=o.value),!Array.isArray(n.option)&&Array.isArray(o?.option)&&(r.option=o.option),!Array.isArray(n.options)&&Array.isArray(o?.options)&&(r.options=o.options)),r}function sa(e=t.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Hi(){const e=t.authStatus||{};t.authDraftUsername=e.enabled?String(e.username||"").trim():"",t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword=""}function pn(e=t.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function dn(e=t.mqttStatus||{}){return[e.enabled?"on":"off",e.connected?"connected":"disconnected",String(e.broker||""),String(e.port||""),String(e.username||""),String(e.base_topic||""),String(e.publish_profile||""),String(e.essential_interval_s||""),String(e.standard_interval_s||""),String(e.diagnostic_interval_s||""),e.retain_snapshots?"retain":"volatile",e.password_set?"set":"empty",String(e.source||""),String(e.csrf_token||"")].join(":")}function Ni(){const e=t.mqttStatus||{};t.mqttDraftEnabled=e.enabled===!0,t.mqttDraftBroker=String(e.broker||""),t.mqttDraftPort=String(e.port||1883),t.mqttDraftUsername=String(e.username||""),t.mqttDraftPassword="",t.mqttDraftBaseTopic=String(e.base_topic||"openquatt"),t.mqttDraftPublishProfile=String(e.publish_profile||"standard"),t.mqttDraftEssentialIntervalS=String(e.essential_interval_s??10),t.mqttDraftStandardIntervalS=String(e.standard_interval_s??30),t.mqttDraftDiagnosticIntervalS=String(e.diagnostic_interval_s??60),t.mqttDraftRetainSnapshots=e.retain_snapshots!==!1,t.mqttNotice="",t.mqttError=""}function cr(e,o={},n=Ll){if(o.force===!0)return!0;const r=Number(e||0);return!r||Date.now()-r>=n}function Su(){return t.systemModal==="login"||t.systemModal==="api-security"||No()}function ku(){return t.systemModal==="api-security"||No()}function Cu(){return t.systemModal==="mqtt"||Ti()}function xi(e){const o=String(e||"").trim().toLowerCase();return o==="off"?"Uit":o==="essential"?"Essential":o==="diagnostic"?"Diagnostic":"Standard"}async function Ht(e={}){if(!cr(t.lastAuthStatusRefreshAt,e))return!1;t.lastAuthStatusRefreshAt=Date.now();try{const o=await fetch("/auth/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const n=await o.json(),r={enabled:!!n.enabled,setup_window_active:!!n.setup_window_active,username:String(n.username||""),source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=sa(),s=sa(r);return t.authStatus=r,a!==s&&Hi(),t.systemModal==="login"&&(t.authError=""),a!==s}catch(o){return t.systemModal==="login"&&(t.authError=`Loginstatus kon niet worden geladen. ${o.message}`),!1}}function go(){return t.nativeOpen||t.systemModal!=="login"?!1:(t.authStatus||{}).setup_window_active!==!0}function ho(){t.loginAuthStatusPollTimer&&(window.clearTimeout(t.loginAuthStatusPollTimer),t.loginAuthStatusPollTimer=null)}function Oi(e=Hl){t.loginAuthStatusPollTimer||!go()||(t.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(t.loginAuthStatusPollTimer=null,!go())return;const o=t.authError;(await Ht({force:!0})||t.authError!==o)&&t.systemModal==="login"&&m(),go()&&Oi()},Math.max(0,Number(e)||0)))}async function Tu(e={}){if(t.systemModal!=="login")return!1;const o=t.authError,n=await Ht({force:!0});return(n||t.authError!==o)&&t.systemModal==="login"&&m(),e.poll!==!1&&go()&&Oi(),n}async function Nt(e={}){if(!cr(t.lastApiSecurityStatusRefreshAt,e))return!1;t.lastApiSecurityStatusRefreshAt=Date.now();try{const o=await fetch("/api-security/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const n=await o.json(),r={enabled:!!n.enabled,transport_active:!!n.transport_active,pending_restart:!!n.pending_restart,key:String(n.key||""),source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=pn(),s=pn(r);return t.apiSecurityStatus=r,t.apiSecurityError="",a!==s&&(t.apiSecurityNotice=""),a!==s}catch(o){return t.apiSecurityError=`API-beveiliging kon niet worden geladen. ${o.message}`,!1}}function ur(){const e=t.mqttStatus;return e?e.enabled!==!0?"Uit":e.connected===!0?"Verbonden":String(e.broker||"").trim()?"Verbinding maken":"Geen broker":"Laden..."}function pr(){const e=t.mqttStatus;if(!e)return"MQTT-configuratie wordt geladen.";const o=String(e.broker||"").trim(),n=String(e.base_topic||"").trim(),r=xi(e.publish_profile);return e.enabled!==!0?"MQTT staat uit en maakt geen verbinding.":e.connected===!0?o?`Verbonden met ${o}${n?` en publiceert ${r.toLowerCase()} telemetry via ${n}.`:"."}`:"MQTT is verbonden en publiceert met de opgeslagen instellingen.":o?n?`De broker staat ingesteld op ${o}; het device probeert ${r.toLowerCase()} telemetry via ${n} te publiceren.`:`De broker staat ingesteld op ${o}; het device probeert verbinding te maken.`:"Er is nog geen broker opgeslagen."}async function xo(e={}){if(!cr(t.lastMqttStatusRefreshAt,e))return!1;t.lastMqttStatusRefreshAt=Date.now();try{const o=await fetch("/mqtt/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const n=await o.json(),r={enabled:!!n.enabled,connected:!!n.connected,broker:String(n.broker||""),port:Number(n.port||0),username:String(n.username||""),base_topic:String(n.base_topic||""),publish_profile:String(n.publish_profile||"standard"),essential_interval_s:Number(n.essential_interval_s??10),standard_interval_s:Number(n.standard_interval_s??30),retain_snapshots:n.retain_snapshots!==!1,password_set:!!n.password_set,source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=dn(),s=dn(r);return t.mqttStatus=r,a!==s&&Ni(),t.systemModal==="mqtt"&&(t.mqttError=""),a!==s}catch(o){return t.systemModal==="mqtt"&&(t.mqttError=`MQTT-status kon niet worden geladen. ${o.message}`),!1}}async function $u(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="fixed",o.style.top="-1000px",o.style.opacity="0",document.body.appendChild(o),o.focus(),o.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(o)}return n}async function Au(){await fo("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"})}async function Eu(){const e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",m();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",m();try{const o=new URLSearchParams;o.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await Nt({force:!0}),t.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",t.apiSecurityError="",m()}catch(o){t.apiSecurityError=`Inschakelen is mislukt. ${o.message}`,m()}finally{t.apiSecurityBusy=!1,m()}}async function Pu(){const e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",m();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",m();try{const o=new URLSearchParams;o.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await Nt({force:!0}),t.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",t.apiSecurityError="",m()}catch(o){t.apiSecurityError=`Roteren is mislukt. ${o.message}`,m()}finally{t.apiSecurityBusy=!1,m()}}async function Mu(){const e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",m();return}if(!e.enabled){t.apiSecurityNotice="API-encryptie staat al uit.",t.apiSecurityError="",m();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",m();try{const o=new URLSearchParams;o.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await Nt({force:!0}),t.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",t.apiSecurityError="",m()}catch(o){t.apiSecurityError=`Uitzetten is mislukt. ${o.message}`,m()}finally{t.apiSecurityBusy=!1,m()}}async function Lu(){const e=t.mqttStatus||{},o=!!t.mqttDraftEnabled,n=String(t.mqttDraftBroker||"").trim(),r=Number(String(t.mqttDraftPort||"").trim()),a=String(t.mqttDraftUsername||"").trim(),s=String(t.mqttDraftPassword||""),u=String(t.mqttDraftBaseTopic||"").trim(),p=String(t.mqttDraftPublishProfile||"standard").trim().toLowerCase(),c=Number(String(t.mqttDraftEssentialIntervalS||"").trim()),l=Number(String(t.mqttDraftStandardIntervalS||"").trim()),d=Number(String(t.mqttDraftDiagnosticIntervalS||"").trim()),f=!!t.mqttDraftRetainSnapshots;if(!u){t.mqttError="Vul een base topic in.",m();return}if(!Number.isFinite(r)||r<1||r>65535){t.mqttError="Vul een geldige poort in.",m();return}if(o&&!n){t.mqttError="Vul een broker in als je MQTT inschakelt.",m();return}if(!e.csrf_token){t.mqttError="MQTT-configuratie laden nog. Probeer het zo opnieuw.",m();return}if(!["off","essential","standard","diagnostic"].includes(p)){t.mqttError="Kies een geldig publish-profiel.",m();return}if(!Number.isFinite(c)||c<1||c>3600){t.mqttError="Vul een geldig essential interval in.",m();return}if(!Number.isFinite(l)||l<1||l>3600){t.mqttError="Vul een geldig standard interval in.",m();return}if(!Number.isFinite(d)||d<1||d>3600){t.mqttError="Vul een geldig diagnostic interval in.",m();return}t.mqttBusy=!0,t.mqttError="",t.mqttNotice="",m();try{const g=new URLSearchParams;g.set("csrf_token",e.csrf_token),g.set("enabled",o?"true":"false"),g.set("broker",n),g.set("port",String(r)),g.set("username",a),g.set("password",s),g.set("base_topic",u),g.set("publish_profile",p),g.set("essential_interval_s",String(c)),g.set("standard_interval_s",String(l)),g.set("diagnostic_interval_s",String(d)),g.set("retain_snapshots",f?"true":"false");const v=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:g.toString()}),S=await v.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!v.ok||!S.ok)throw new Error(S.error||`HTTP ${v.status}`);await xo({force:!0}),t.mqttNotice=o?"MQTT staat nu aan.":"MQTT-configuratie opgeslagen.",t.mqttError="",m()}catch(g){t.mqttError=`Opslaan is mislukt. ${g.message}`,m()}finally{t.mqttBusy=!1,m()}}async function Hu(){const e=String(t.apiSecurityStatus?.key||"").trim();if(!e){t.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",m();return}try{if(!await $u(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");t.apiSecurityNotice="API-sleutel gekopieerd.",t.apiSecurityError="",m()}catch(o){t.apiSecurityError=`Kopi\xEBren is mislukt. ${o.message}`,m()}}function mn(){t.settingsBackupDraft=null,t.settingsBackupError="",t.settingsBackupBusy=!1}function Nu(){return{device:Be(),installation:Jt(),topology:typeof we=="function"?we():"",firmware_version:ge(),firmware_channel:String(A("firmwareUpdateChannel")||A("releaseChannelText")||"").trim()}}function Fi(e){const o=j[e];if(!o)return;if(e==="setupComplete")return Ui();const n=A(e);if(n===""||n===null||n===void 0)return;if(o.domain==="switch"||o.domain==="binary_sensor")return N(e);if(o.domain==="number"){const a=nt(n);return Number.isNaN(a)?void 0:a}return o.domain==="time"?Lt(n)||void 0:o.domain==="datetime"?xe(n)||void 0:String(n||"").trim()||void 0}function Ri(){const e={};return yt.forEach(o=>{const n={};o.keys.forEach(r=>{const a=Fi(r);a!==void 0&&(n[r]=a)}),e[o.id]=n}),{schema_version:Ya,exported_at:new Date().toISOString(),source:Nu(),settings:e}}function xu(e=Ri()){const o=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${o}.json`}function Ou(e,o){const n=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function Fu(e){const o=j[e];return o?.name?o.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function la(e,o){if(o==null||o==="")return"\u2014";const n=j[e];return n?n.domain==="number"?V(e,o):n.domain==="time"?Lt(o)?.slice(0,5)||"\u2014":n.domain==="datetime"?xe(o)||"\u2014":n.domain==="switch"||n.domain==="binary_sensor"?o?"Aan":"Uit":String(o).trim()||"\u2014":String(o).trim()||"\u2014"}function Ru(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function Di(e){const o=e?.settings&&typeof e.settings=="object"?e.settings:{},n=e?.source&&typeof e.source=="object"?e.source:{},r=Tl;let a=0,s=0,u=0,p=0,c=0,l=0,d=0,f=0;const g=yt.map(v=>{const S=o[v.id]&&typeof o[v.id]=="object"?o[v.id]:{};let h=0,y=0,b=0,k=0,$=0,q=0,E=0;const O=v.keys.map(F=>{const C=!!j[F]?.optional,T=Object.prototype.hasOwnProperty.call(S,F),L=T?S[F]:void 0,D=Fi(F),_=w(F),H=T?la(F,L):C?"Niet op huidige installatie":"Ontbreekt in backup",I=_?la(F,D):C?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie";let M="same";return!T&&C?M="optional-missing":T?_?JSON.stringify(D)!==JSON.stringify(L)&&(M="different"):M=C?"optional-unavailable":"current-missing":M="missing",_&&(E+=1,f+=1),M!=="same"&&(q+=1,d+=1),C?($+=1,T?(b+=1,u+=1):(k+=1,p+=1)):T?(h+=1,a+=1):(y+=1,s+=1),{key:F,label:Fu(F),optional:C,hasBackupValue:T,backupDisplay:H,currentDisplay:I,status:M,statusLabel:Ru(M)}});return l+=v.keys.filter(F=>!j[F]?.optional).length,{id:v.id,label:v.label,present:h,currentPresent:E,requiredTotal:v.keys.filter(F=>!j[F]?.optional).length,optionalTotal:$,optionalPresent:b,optionalMissing:k,requiredMissing:y,total:v.keys.length,differenceCount:q,rows:O}});return Object.entries(o).forEach(([v,S])=>{if(!yt.some(h=>h.id===v)){c+=1;return}!S||typeof S!="object"||Object.keys(S).forEach(h=>{r.has(h)||(c+=1)})}),{source:n,sectionSummaries:g,requiredPresent:a,requiredMissing:s,requiredAvailable:l,optionalPresent:u,optionalMissing:p,unknown:c,differenceCount:d,currentPresent:f,requiredTotal:l,total:Xt.length}}function Du(e,o=""){const n=JSON.parse(e);if(!n||typeof n!="object")throw new Error("Backupbestand bevat geen JSON-object.");const r=Number(n.schema_version??n.schemaVersion??0);if(!Number.isInteger(r)||r<Ya)throw new Error("Onbekende backupversie.");const a=n.settings&&typeof n.settings=="object"?n.settings:{},s={schema_version:r,exported_at:String(n.exported_at||""),source:n.source&&typeof n.source=="object"?n.source:{},settings:a,file_name:o||""};return s.summary=Di(s),s}async function Iu(){t.settingsBackupBusy=!0,t.controlError="",t.controlNotice="",m();try{return await z(Xt,"all"),Ri()}finally{t.settingsBackupBusy=!1,m()}}async function Wu(){if(!t.settingsBackupBusy)try{const e=await Iu();Ou(xu(e),e),t.controlNotice="Settings-backup gedownload.",m()}catch(e){t.controlError=`Backup exporteren mislukt. ${e.message}`,m()}}async function Bu(e){if(!(!e||t.settingsBackupBusy)){t.settingsBackupBusy=!0,t.settingsBackupDraft=null,t.settingsBackupError="",t.controlError="",t.controlNotice="",m();try{const o=await e.text(),n=Du(o,e.name||"");t.settingsBackupDraft=n,t.systemModal="settings-backup-restore"}catch(o){t.settingsBackupDraft=null,t.settingsBackupError=`Backupbestand kon niet worden gelezen. ${o.message}`}finally{t.settingsBackupBusy=!1,m()}}}async function ca(e,o){const n=j[e];if(!n)throw new Error(`Onbekend veld ${e}.`);if(n.domain==="select"){const r=String(o||"").trim(),a=await fetch(`${Q(n.domain,n.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="number"){const r=ve(e,o),a=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="time"){const r=Lt(o),a=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="datetime"){const r=xe(o),a=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="text"){const r=String(o||"").trim(),a=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="switch"||n.domain==="binary_sensor"){const r=!!o,a=r?"turn_on":"turn_off",s=await fetch(Q(n.domain,n.name,a),{method:"POST"});if(!s.ok)throw new Error(`HTTP ${s.status}`);return r}throw new Error(`${n.name} kan niet worden hersteld.`)}async function ju(){const e=t.settingsBackupDraft;if(!e||t.settingsBackupBusy)return;t.settingsBackupBusy=!0,t.settingsBackupError="",t.controlError="",t.controlNotice="",m();const o=[],n=[];let r=!1;try{await z(Xt,"all");for(const s of yt){const u=e.settings?.[s.id]&&typeof e.settings[s.id]=="object"?e.settings[s.id]:{};for(const p of s.keys){if(!Object.prototype.hasOwnProperty.call(u,p)){n.push(p);continue}const c=u[p];if(p==="setupComplete"){r=c===!0;continue}if(p==="openquattEnabled")continue;if(!j[p]||!w(p)){n.push(p);continue}try{await ca(p,c),o.push(p)}catch{n.push(p)}}}const a=e.settings?.operation?.openquattEnabled;if(Object.prototype.hasOwnProperty.call(e.settings?.operation||{},"openquattEnabled")&&w("openquattEnabled")&&(await ca("openquattEnabled",a),o.push("openquattEnabled")),r&&j.apply){const s=await fetch(Q("button","Complete setup","press"),{method:"POST"});if(!s.ok)throw new Error(`Setup bevestigen mislukt (HTTP ${s.status}).`);o.push("setupComplete")}else Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&n.push("setupComplete");t.systemModal="settings-backup-success",mn(),t.controlNotice=`Backup hersteld (${o.length} toegepast${n.length?`, ${n.length} overgeslagen`:""}).`,await ne()}catch(a){t.settingsBackupError=`Backup herstellen mislukt. ${a.message}`}finally{t.settingsBackupBusy=!1,m()}}function Vu(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}async function dr(e={}){if(!xt()){const r=!!(t.trendHistoryRaw||t.trendHistoryError);return t.trendHistoryRaw="",t.trendHistoryError="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=0,r}if(Vu())return!1;const o=e.force===!0,n=Date.now();if(!o&&t.trendHistoryFetchPromise)return t.trendHistoryFetchPromise;if(!o&&(t.trendHistoryRaw||t.trendHistoryError)&&n-Number(t.trendHistoryLastFetchAt||0)<wl)return!1;t.trendHistoryFetchPromise=(async()=>{const r=Nn(t.trendWindowHours||qt);r!==t.trendWindowHours&&xn(r);const a=await fetch(`${Mo()}/trends/history?hours=${encodeURIComponent(String(r))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const s=await a.text(),u=s.split(/\r?\n/);let p=Number.NaN,c=s;u.length&&u[0].startsWith("@now|")&&(p=Number(u[0].slice(5)),c=u.slice(1).join(`
`));const l=`${r}|${c.length}|${c.slice(0,120)}|${c.slice(-120)}`,d=Number.isFinite(t.trendHistoryNowMs),g=Number.isFinite(p)?!d||t.trendHistoryNowMs!==p:d,v=c!==t.trendHistoryRaw||t.trendHistoryError!==""||t.trendHistorySignature!==l||g;return t.trendHistoryRaw=c,t.trendHistoryError="",t.trendHistorySignature=l,t.trendHistoryNowMs=Number.isFinite(p)?p:Number.NaN,t.trendHistoryLastFetchAt=Date.now(),v})();try{return await t.trendHistoryFetchPromise}catch(r){const a=`Trendhistorie kon niet worden geladen. ${r.message}`,s=t.trendHistoryError!==a;return t.trendHistoryError=a,t.trendHistoryRaw="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=Date.now(),s}finally{t.trendHistoryFetchPromise=null}}function _u(){t.complete=Ui(),t.stage=t.complete===!0?"Gereed":t.complete===!1?"Quick Start":"Laden...",t.summary=fp(),t.appView==="trends"&&!xt()&&Xe(St(),{syncMode:"replace",forceSync:!0}),t.appView||Xe(Rn()||St(),{syncMode:"replace",forceSync:!0})}function Ku(){const e=["setupComplete","strategy",...Se,...su];return t.appView==="settings"?[...new Set([...e,...$i()])]:t.appView==="overview"||t.appView==="trends"||t.appView==="energy"?[...new Set([...e,...po])]:[...new Set(e)]}function zu(e=[]){const o=new Set(e);return(t.appView==="settings"?[...new Set(["setupComplete","strategy",...Se,...it()])]:t.appView==="overview"||t.appView==="trends"||t.appView==="energy"?[...new Set(["setupComplete","strategy",...Se,...Po,...Et])]:[...new Set(["setupComplete","strategy",...Se])]).filter(r=>!o.has(r))}async function Uu(e,o="state"){if(!(!e.length||t.nativeOpen)){t.entitySyncInFlight=!0;try{await z(e,o,{concurrency:o==="all"?$t:Tn})}finally{t.entitySyncInFlight=!1;const n=t.pendingEntitySyncOptions;t.pendingEntitySyncOptions=null,n&&!t.nativeOpen&&window.setTimeout(()=>{ne(n)},0)}t.mounted&&!t.nativeOpen&&m()}}function Ii(){if(t.nativeOpen||t.appView!=="settings")return;const e=()=>{if(!(t.nativeOpen||t.appView!=="settings")){if(t.loadingEntities||t.focusedField||t.draggingCurveKey||t.busyAction||t.settingsInteractionLock){window.setTimeout(Ii,250);return}ne({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}function ua(e=Date.now(),o={}){return o.forceBulk===!0?!0:e-Number(t.lastBulkEntitySyncAt||0)>=Al}async function Wi(){if(!t.nativeOpen)try{lr()&&await Ei(),(t.appView==="overview"||t.appView==="trends")&&await dr({force:!0}),await Ht({force:!0}),No()&&await Nt({force:!0}),Ti()&&await xo({force:!0})}finally{t.mounted&&!t.nativeOpen&&m(),Ii()}}async function Gu(){if(t.nativeOpen)return;t.loadingEntities=!0,m();const e=Xc();e>0&&await new Promise(s=>window.setTimeout(s,e));const o=Ku(),n=zu(o),r=t.appView==="settings"?"all":"state";try{await z(o,r,{concurrency:r==="all"?$t:Tn}),t.appView==="settings"?await mu():await du()}finally{t.loadingEntities=!1,m()}const a=t.appView==="settings"?"all":"state";window.setTimeout(()=>{Uu(n,a),Wi()},0)}async function ne(e={}){if(t.nativeOpen||t.loadingEntities||t.draggingCurveKey||t.busyAction||t.settingsInteractionLock||t.focusedField&&t.appView!=="settings")return;if(t.entitySyncInFlight){cu(e);return}const o=Date.now();if(document.hidden&&o-Number(t.lastEntitySyncAttemptAt||0)<Hn)return;const n=t.appView,r=e.prefetchView==="overview"&&!e.forceBulk&&n==="settings",a=r?"overview":n,s=a==="overview"||a==="trends"||a==="energy",u=e.forceFast===!0&&!e.forceBulk,p=!u&&!r&&ua(o,e),l=o-Number(t.lastStaticEntitySyncAt||0)>=El||t.updateInstallBusy||t.updateInstallPhaseHint?Et:[],d=r?[...po,...Se,"setupComplete",...l]:s?[...u?po:p?Po:po,...Se,"setupComplete",...l]:n==="settings"?[...new Set([...$i(),...l])]:p?["setupComplete",...l,...Se,"strategy",...Zt,...At,...re()?se.map(f=>f.key):Eo]:["setupComplete",...Se,"strategy",...l];t.entitySyncInFlight=!0,t.lastEntitySyncAttemptAt=o;try{const f=t.deviceReconnectMode,g=wu(o,e)?await yu():{ok:!0,message:""};if(!g.ok){Li(g.message),r||m();return}if(await z([...new Set(d)],r?"state":n==="settings"?"all":"state",{concurrency:u&&s?Tn:$t}),t.lastFastEntitySyncAt=Date.now(),p&&(t.lastBulkEntitySyncAt=t.lastFastEntitySyncAt),l.length&&(t.lastStaticEntitySyncAt=t.lastFastEntitySyncAt),r)return;s&&!t.overviewMetadataHydrated&&!t.overviewMetadataHydrating&&Ei();const v=f!==t.deviceReconnectMode,S=u&&s,h=S?!1:s?await dr():!1,y=S||!Su()?!1:await Ht(),b=S||!ku()?!1:await Nt(),k=S||!Cu()?!1:await xo(),$=ln();if(v){m();return}if(h&&t.appView==="trends"&&!t.root?.querySelector(".oq-overview-trends")){m();return}if(y&&(t.systemModal==="login"||No())){m();return}if(b&&t.appView==="settings"){m();return}if(k&&t.appView==="settings"){m();return}const q=!!(t.updateModalOpen||t.systemModal||t.interfacePanelOpen);if($!==t.headerRenderSignature)if(q&&ea())t.headerRenderSignature=$;else{m();return}else ea();if(t.appView==="settings"&&String(t.systemModal||"").startsWith("service-task-")){gn()!==t.settingsRenderSignature&&m();return}if(q)return;if(t.appView==="settings"){const E=gn();if(E!==t.settingsRenderSignature&&!t.focusedField){m();return}if(!hd()){t.focusedField||m();return}t.focusedField&&(t.settingsRenderSignature=E);return}if(t.appView==="trends"){jm()||m();return}if(t.appView==="energy"){Qm()||m();return}Sg()||m(),S&&!t.nativeOpen&&window.setTimeout(()=>{Wi()},0)}catch(f){r||(t.controlError=`Helperstatus kon niet worden geladen. ${f.message}`,m())}finally{t.entitySyncInFlight=!1;const f=t.pendingEntitySyncOptions;t.pendingEntitySyncOptions=null,f&&!t.nativeOpen&&window.setTimeout(()=>{ne(f)},0),u&&s&&!r&&!t.nativeOpen&&!f&&ua(Date.now())&&window.setTimeout(()=>{ne({forceBulk:!0})},0)}}function pa(){window.setTimeout(()=>{const e=document.activeElement;t.focusedField=e&&e.dataset&&e.dataset.oqField||"",t.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function Qu(e){e.target.closest(".oq-ph-concept-hotspot")&&(t.settingsInteractionLock=!0)}function Yu(e){const o=e.target.closest(".oq-ph-concept-hotspot");if(!o||e.relatedTarget&&o.contains(e.relatedTarget))return;const n=t.root&&t.root.querySelector(".oq-ph-concept-hotspot:hover"),r=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;t.settingsInteractionLock=!!(n||r)}function oe(e){const o=t.entities[e];if(!o)return t.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;const n=o.state??o.value??"",r=Array.isArray(o.option)?o.option.join(","):Array.isArray(o.options)?o.options.join(","):"",a=[o.min_value??"",o.max_value??"",o.step??"",o.uom??""].join(",");return`${e}:${n}::${r}::${a}`}function gn(){return[t.appView,t.settingsGroup,t.busyAction,t.loadingEntities?"loading":"ready",pn(),dn(),oe("setupComplete"),...Qa.map(e=>oe(e))].join("|")}function me(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function Bi(){return[t.appView,t.busyAction,oe("openquattEnabled"),oe("openquattResumeAt"),oe("manualCoolingEnable"),oe("silentModeOverride"),oe("controlModeLabel"),oe("coolingPermitted"),oe("coolingRequestActive"),oe("coolingBlockReason"),oe("silentActive")].join("|")}function Zu(e){if(e.target.dataset.oqFirmwareConnectionConfirm){t.firmwareConnectionSwitchConfirmed=!!e.target.checked,m();return}const o=e.target.dataset.oqField;if(!o){const n=e.target.dataset.oqAuthField;if(!n){const r=e.target.dataset.oqMqttField;if(!r)return;t.mqttNotice="",t.mqttError="",r==="enabled"?t.mqttDraftEnabled=!!e.target.checked:r==="broker"?t.mqttDraftBroker=String(e.target.value||""):r==="port"?t.mqttDraftPort=String(e.target.value||""):r==="username"?t.mqttDraftUsername=String(e.target.value||""):r==="password"?t.mqttDraftPassword=String(e.target.value||""):r==="baseTopic"?t.mqttDraftBaseTopic=String(e.target.value||""):r==="publishProfile"?t.mqttDraftPublishProfile=String(e.target.value||""):r==="essentialIntervalS"?t.mqttDraftEssentialIntervalS=String(e.target.value||""):r==="standardIntervalS"?t.mqttDraftStandardIntervalS=String(e.target.value||""):r==="diagnosticIntervalS"?t.mqttDraftDiagnosticIntervalS=String(e.target.value||""):r==="retainSnapshots"&&(t.mqttDraftRetainSnapshots=!!e.target.checked);return}t.authNotice="",t.authError="",n==="username"?t.authDraftUsername=String(e.target.value||""):n==="currentPassword"?t.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?t.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(t.authDraftConfirmPassword=String(e.target.value||""));return}if(e.target.dataset.oqPauseDraft){t.pauseResumeDraft=String(e.target.value||"");return}if(j[o]?.domain==="text"){t.inputDrafts[o]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(t.inputDrafts[o]=e.target.value);const n=nt(e.target.value);if(!Number.isNaN(n)){const r=ve(o,e.target.value);if(t.drafts[o]=r,e.target.type==="range"){const a=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");a&&(a.textContent=V(o,r))}}}}function Xu(e){if(e.target.dataset.oqDevControl==="boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(e.target.value);return}if(e.target.dataset.oqBackupFileInput){const a=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",Bu(a);return}if(e.target.dataset.oqFirmwareUploadFileInput){const a=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",a?(t.updateManualUploadOpen=!0,t.updateManualUploadFile=a,t.updateManualUploadFileName=a.name||"",t.updateManualUploadError=""):Je(),m();return}const o=e.target.dataset.oqField;if(!o)return;const n=j[o];if(!n)return;if(n.domain==="select"){hn(o,String(e.target.value));return}if(n.domain==="number"){gr(o,e.target.value);return}if(n.domain==="text"){cp(o,e.target.value);return}if(n.domain==="time"){const a=Lt(e.target.value);if(!a){t.controlError=`${n.name} verwacht tijd als HH:MM.`,m();return}lp(o,a);return}if(n.domain==="datetime"){const a=xe(e.target.value);if(!a){t.controlError=`${n.name} verwacht datum en tijd.`,m();return}up(o,a);return}const r=e.target.dataset.oqMqttField;r&&(t.mqttNotice="",t.mqttError="",r==="enabled"?t.mqttDraftEnabled=!!e.target.checked:r==="broker"?t.mqttDraftBroker=String(e.target.value||""):r==="port"?t.mqttDraftPort=String(e.target.value||""):r==="username"?t.mqttDraftUsername=String(e.target.value||""):r==="password"?t.mqttDraftPassword=String(e.target.value||""):r==="baseTopic"?t.mqttDraftBaseTopic=String(e.target.value||""):r==="publishProfile"?t.mqttDraftPublishProfile=String(e.target.value||""):r==="essentialIntervalS"?t.mqttDraftEssentialIntervalS=String(e.target.value||""):r==="standardIntervalS"?t.mqttDraftStandardIntervalS=String(e.target.value||""):r==="diagnosticIntervalS"?t.mqttDraftDiagnosticIntervalS=String(e.target.value||""):r==="retainSnapshots"&&(t.mqttDraftRetainSnapshots=!!e.target.checked))}function Ju(e){const o=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(o){const l=o.querySelector("input[data-oq-field]");if(l&&(l.type==="time"||l.type==="datetime-local")&&typeof l.showPicker=="function")try{l.showPicker()}catch{}}const n=e.target.closest('[data-oq-action="toggle-settings-info"]'),r=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),s=e.target.closest("[data-oq-modal]");if(n){const l=n.dataset.infoId||"";t.settingsInfoOpen=t.settingsInfoOpen===l?"":l,m();return}const u=e.target.closest("[data-oq-action]"),p=t.interfacePanelOpen&&!a;if(!u){let l=!1;if(t.settingsInfoOpen&&!r&&(t.settingsInfoOpen="",l=!0),p&&(Xo(!1),l=!0),s&&e.target===s){if(s.dataset.oqModal==="quickstart-forced")return;t.updateModalOpen&&(t.updateModalOpen=!1,l=!0),t.systemModal&&(mn(),ho(),t.systemModal="",l=!0)}l&&m();return}p&&u.dataset.oqAction!=="toggle-interface-panel"&&Xo(!1);const c=u.dataset.oqAction;if(c==="set-mock-boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(u.dataset.boilerMode||"off");return}if(c==="toggle-interface-panel"){Xo(!t.interfacePanelOpen),m();return}if(c==="toggle-dev-panel"){Vl(!t.devPanelOpen),m();return}if(c==="toggle-installation-monitoring-details"){e.preventDefault();const l=u.closest(".oq-settings-monitoring-details");t.installationMonitoringDetailsOpen=!(l&&l.hasAttribute("open")),m();return}if(c==="toggle-integration-diagnostics"){e.preventDefault();const l=u.closest(".oq-settings-integration-diagnostics");t.integrationDiagnosticsOpen=!(l&&l.hasAttribute("open")),m();return}if(c==="select-view"){if((u.dataset.viewId||"")==="trends"&&!xt())return;const l=u.dataset.viewId||"overview";Xe(l,{syncMode:"push"}),m(),ne(l==="settings"?{forceBulk:!0}:{forceFast:!0});return}if(c==="select-trend-window"){if(u.disabled)return;xn(Number(u.dataset.trendHours||24)),m(),dr({force:!0}).then(l=>{l&&m()});return}if(c==="select-settings-group"){mo(u.dataset.groupId||be[0].id),m(),ne({forceBulk:!0});return}if(c==="open-update-modal"){t.updateModalOpen=!0,m(),rp().then(()=>{t.updateModalOpen&&!gi()&&!t.updateCheckBusy&&!t.updateInstallBusy&&da()});return}if(c==="open-webserver-log-modal"){Bp();return}if(c==="open-login-modal"){t.systemModal="login",Hi(),t.authNotice="",t.authError="",m(),Tu({poll:!0});return}if(c==="open-api-security-modal"){t.systemModal="api-security",t.apiSecurityNotice="",t.apiSecurityError="",m(),Nt({force:!0});return}if(c==="open-mqtt-modal"){t.systemModal="mqtt",Ni(),m(),xo({force:!0});return}if(c==="copy-api-security-key"){Hu();return}if(c==="enable-api-security"){Eu();return}if(c==="rotate-api-security"){Pu();return}if(c==="disable-api-security"){Mu();return}if(c==="restart-api-security"){Au();return}if(c==="save-mqtt-config"){Lu();return}if(c==="flush-trend-history"){fo("trendHistoryFlush",{successNotice:"Trendhistorie is opgeslagen in flash.",errorPrefix:"Trendhistorie kon niet worden opgeslagen"});return}if(c==="open-connectivity-modal"){t.systemModal="connectivity",m();return}if(c==="open-restart-confirm"){t.systemModal="restart-confirm",m();return}if(c==="download-settings-backup"){Wu();return}if(c==="open-settings-backup-import"){t.systemModal="settings-backup-import",m();return}if(c==="open-silent-settings-modal"){t.systemModal="silent-settings",m();return}if(c==="open-openquatt-pause-modal"){t.pauseResumeDraft=Ci(),t.systemModal="openquatt-pause",m();return}if(c==="enable-openquatt-now"){mp();return}if(c==="apply-openquatt-preset"){const l=ki(u.dataset.pausePreset||"");t.pauseResumeDraft=l,en(l);return}if(c==="apply-openquatt-indefinite"){en("");return}if(c==="apply-openquatt-custom-pause"){if(!String(t.pauseResumeDraft||"").trim()){t.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",m();return}en(t.pauseResumeDraft||"");return}if(c==="close-update-modal"){t.updateModalOpen=!1,t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.firmwareConnectionSwitchOpen=!1,t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,Je(),m();return}if(c==="close-quickstart-modal"){t.quickStartModalOpen=!1,m();return}if(c==="open-quickstart-modal"){t.currentStep="generation",t.quickStartModalMode="wizard",t.quickStartModalOpen=!0,m();return}if(c==="open-generation-modal"){t.currentStep="generation",t.quickStartModalMode="generation",t.quickStartModalOpen=!0,m();return}if(c==="open-cm100-commissioning-modal"){t.systemModal="",Xe("settings"),mo("service"),m(),ne({forceBulk:!0});return}if(c==="open-installation-monitoring"){t.systemModal="",Xe("settings"),mo("service"),m(),ne({forceBulk:!0});return}if(c==="open-service-task-modal"){const l=String(u.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(l)&&(t.systemModal=`service-task-${l}`,m(),ne({forceBulk:!0}));return}if(c==="press-named-button"){const l=String(u.dataset.oqButtonKey||u.dataset.buttonKey||u.getAttribute("data-oq-button-key")||"").trim();if(l){l==="commissioningCm100Start"?(t.pendingCommissioningCm100Start=!0,t.commissioningTaskLock="cm100",t.commissioningBoilerHeatPowerDisplay=""):l==="commissioningCm100Stop"?(t.pendingCommissioningCm100Start=!1,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="",t.commissioningBoilerHeatPowerDisplay=""):l==="boilerPowerTestStart"?(t.pendingBoilerPowerTestStart=!0,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="boiler",t.commissioningBoilerHeatPowerDisplay=""):l==="boilerPowerTestAbort"||l==="boilerPowerTestApply"?t.commissioningTaskLock="boiler":l==="flowAutotuneStart"?(t.pendingFlowAutotuneStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="autotune"):l==="flowAutotuneAbort"||l==="flowAutotuneApply"?t.commissioningTaskLock="autotune":l==="airPurgeStart"?(t.pendingAirPurgeStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="purge"):l==="airPurgeAbort"?t.commissioningTaskLock="purge":l==="manualFlowStart"?(t.pendingManualFlowStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="manual-flow"):l==="manualFlowAbort"?t.commissioningTaskLock="manual-flow":l==="manualHpStart"?(t.pendingManualHpStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="manual-hp"):l==="hpWaterCalibrationStart"?(t.pendingHpWaterCalibrationStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.commissioningTaskLock="hp-water-calibration"):l==="hpWaterCalibrationAbort"||l==="hpWaterCalibrationApply"?t.commissioningTaskLock="hp-water-calibration":l==="manualHpAbort"&&(t.commissioningTaskLock="manual-hp");const d=[];l==="acknowledgeCompressorCyclingAlert"?d.push(...En):l==="commissioningCm100Start"||l==="commissioningCm100Stop"?d.push("commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive"):l==="boilerPowerTestStart"||l==="boilerPowerTestAbort"||l==="boilerPowerTestApply"?d.push("commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower"):l==="flowAutotuneStart"||l==="flowAutotuneAbort"||l==="flowAutotuneApply"?d.push("commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi"):l==="airPurgeStart"||l==="airPurgeAbort"?d.push("commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode"):l==="hpWaterCalibrationStart"||l==="hpWaterCalibrationAbort"||l==="hpWaterCalibrationApply"?d.push("commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode"):l==="manualFlowStart"||l==="manualFlowAbort"||l==="manualFlowApplyHeating"||l==="manualFlowApplyCooling"?d.push("commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint"):(l==="manualHpStart"||l==="manualHpAbort")&&d.push("commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"),fo(l,d.length?{refreshKeys:d}:{})}return}if(c==="close-system-modal"){ho(),t.systemModal="",t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authNotice="",t.authError="",t.apiSecurityNotice="",t.apiSecurityError="",t.mqttNotice="",t.mqttError="",mn(),m();return}if(c==="clear-webserver-log-output"){Fo();return}if(c==="copy-webserver-log-output"){ad();return}if(c==="confirm-settings-backup-restore"){ju();return}if(c==="confirm-restart"){fo("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"});return}if(c==="select-surface"){const l=u.dataset.surface==="native";if(t.nativeOpen===l){t.nativeOpen&&an();return}t.nativeOpen=l,Za(t.nativeOpen?"native":"app"),t.controlError="",t.controlNotice="",t.settingsInfoOpen="",t.updateModalOpen=!1,ho(),t.systemModal="",t.nativeOpen&&an(),m(),Fn(),window.requestAnimationFrame(()=>{t.nativeOpen?t.nativeApp&&t.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}if(c==="toggle-overview-theme"){Dl(t.overviewTheme==="light"?"dark":"light"),m();return}if(c==="select-hp-visual"){Kl(u.dataset.hpVisual==="compact"?"compact":"schematic"),m();return}if(c==="select-hp-layout"){Ul(u.dataset.hpLayout||"equal"),m();return}if(c==="select-step"){t.currentStep=u.dataset.stepId||"generation",m();return}if(c==="previous-step"){Ma(-1),m();return}if(c==="next-step"){Ma(1),m();return}if(c==="select-settings-option"){const l=u.dataset.selectKey||"",d=u.dataset.selectOption||"";l&&d&&String(A(l)||"")!==d&&hn(l,d);return}if(c==="toggle-overview-control"){const l=u.dataset.controlKey||"",d=(u.dataset.controlState||"").toLowerCase();l&&(d==="on"||d==="off")&&np(l,d==="on");return}if(c==="select-overview-control-option"){const l=u.dataset.controlKey||"",d=u.dataset.controlOption||"";l&&d&&String(A(l)||"")!==d&&hn(l,d);return}if(c==="suggest-curve-fallback"){const l=Pi();l&&gr("curveFallbackSupply",l.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");return}if(c==="apply"||c==="reset"){gp(c);return}if(c==="run-firmware-check"){da();return}if(c==="install-firmware-update"){ap();return}if(c==="install-firmware-connection-switch"){ip();return}if(c==="toggle-firmware-connection-switch"){t.firmwareConnectionSwitchOpen=!t.firmwareConnectionSwitchOpen,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareConnectionSwitchOpen&&(t.updateManualUploadOpen=!1,Je()),m();return}if(c==="toggle-firmware-upload"){t.updateManualUploadOpen?(t.updateManualUploadOpen=!1,Je()):(t.updateManualUploadOpen=!0,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.updateManualUploadError=""),m();return}if(c==="upload-firmware-file"){sp();return}if(c==="save-web-auth"){pp();return}if(c==="disable-web-auth"){dp();return}}function ep(e){const o=e.target.closest("[data-curve-key]");!o||!re()||(t.draggingCurveKey=o.dataset.curveKey||"",_i(e.clientY))}function tp(e){t.draggingCurveKey&&_i(e.clientY)}function op(){if(!t.draggingCurveKey)return;const e=t.draggingCurveKey,o=ve(e,A(e));t.draggingCurveKey="",gr(e,o,"Curvepunt bijgewerkt.")}async function hn(e,o){const n=j[e];t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.entities[e]={...t.entities[e]||{},state:o,value:o},m();try{const r=await fetch(`${Q(n.domain,n.name,"set")}?option=${encodeURIComponent(o)}`,{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=`${n.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.entities.firmwareUpdateChannel={...t.entities.firmwareUpdateChannel||{},state:o,value:o},Jn(o),m(),await er(),t.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(t.controlNotice="Logger level bijgewerkt.",t.systemModal==="webserver-logs"&&So()):e==="webServerLogHistoryEnabled"?(enabled?(t.webServerLogHistoryLoaded=!1,So()):Fo(),t.systemModal==="webserver-logs"&&m()):t.appView==="settings"?await z(it(),"all"):await z(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...At,...Zt],"state"),e==="strategy"&&t.appView!=="settings"&&await z(re(o)?se.map(a=>a.key):Eo,"state")}catch(r){t.controlError=`${n.name} kon niet worden bijgewerkt. ${r.message}`}finally{t.busyAction="",m()}}async function np(e,o){const n=j[e];if(n){t.busyAction=`switch-${e}`,t.controlNotice="",t.controlError="",m();try{const r=o?"turn_on":"turn_off",a=await fetch(Q(n.domain,n.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.entities[e]={...t.entities[e]||{},value:o,state:o},t.controlNotice=`${n.name} ${o?"ingeschakeld":"uitgeschakeld"}.`,t.busyAction="",t.appView==="overview"?await z([...Po,...Se,"setupComplete",...Et],"state"):t.appView==="settings"?await z(it(),"all"):await z(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...At,...Zt],"state"),m()}catch(r){t.controlError=`${n.name} aanpassen mislukt (${r.message}).`,m()}finally{t.busyAction="",m()}}}async function da(){const e=j.checkFirmwareUpdates;if(e){t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateCheckBusy=!0,t.controlError="",t.controlNotice="",m();try{await mr("current build",{poll:!1}),Jn();const o=await fetch(Q(e.domain,e.name,"press"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);await er(),t.controlNotice="Firmwarecontrole bijgewerkt."}catch(o){t.controlError=`Firmwarecontrole mislukte. ${o.message}`}finally{t.updateCheckBusy=!1,m()}}}async function rp(){try{await z(Ln,"all",{concurrency:$t}),t.updateModalOpen&&m()}catch{}}async function mr(e,o={}){const n=j.firmwareUpdateTarget;if(!n||!w("firmwareUpdateTarget"))return!1;const r=String(e||"").trim();if(!r)return!1;t.entities.firmwareUpdateTarget={...t.entities.firmwareUpdateTarget||{},state:r,value:r};const a=await fetch(`${Q(n.domain,n.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.poll!==!1&&(Jn(),await er()),!0}async function ap(){const e=le();if(e){t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,Je(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion=kt(e),t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.updateInstallMode="normal",t.updateInstallTargetConnection="",t.controlError="",t.controlNotice="",m();try{await mr("current build"),t.updateInstallTargetVersion=kt(le()||{})||t.updateInstallTargetVersion;const o=await fetch(Q("update","Firmware Update","install"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);await tr()?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ge()||t.updateInstallTargetVersion,t.controlNotice=""):t.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(o){t.controlError=`OTA-update kon niet worden gestart. ${o.message}`}finally{Un(),m()}}}async function ip(){const e=Bn(),o=j.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!o)){if(!t.firmwareConnectionSwitchConfirmed){t.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",m();return}t.updateManualUploadOpen=!1,Je(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallMode="connection-switch",t.updateInstallTargetConnection=e.targetConnection,t.updateInstallTargetVersion=ge()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.controlError="",t.controlNotice="",m();try{await mr("alternate connection"),t.updateInstallTargetVersion=kt(le()||{})||ge()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,m();const n=await fetch(Q(o.domain,o.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await tr())t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ge()||t.updateInstallTargetVersion||"",t.firmwareConnectionSwitchConfirmed=!1,t.controlNotice="";else{const a=tt(e.targetConnection);t.controlNotice=`Verbindingswissel naar ${a} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(n){t.controlError=`Verbindingswissel kon niet worden gestart. ${n.message}`}finally{Un(),m()}}}async function sp(){const e=t.updateManualUploadFile;if(!e){t.updateManualUploadError="Kies eerst een firmwarebestand.",m();return}t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion=ge()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.controlError="",t.controlNotice="",t.updateManualUploadError="",m();try{const o=new FormData;o.append("update",e,e.name||"firmware.bin");const n=await fetch("/update",{method:"POST",body:o});if(!n.ok)throw new Error(`HTTP ${n.status}`);t.updateManualUploadOpen=!1,Je(),await tr()?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ge()||t.updateInstallTargetVersion||"",t.controlNotice=""):t.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(o){t.updateManualUploadError=`Handmatige upload mislukte. ${o.message}`}finally{Un(),m()}}async function gr(e,o,n=""){const r=j[e],a=ve(e,o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.inputDrafts[e]=String(o??""),t.drafts[e]=a,m();try{const s=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!s.ok)throw new Error(`HTTP ${s.status}`);delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=n||`${r.name} bijgewerkt.`,await z(t.appView==="settings"?it():[...new Set([e,"setupComplete","strategy",...At,...Zt])],"state")}catch(s){t.inputDrafts[e]=String(a).replace(".",","),t.controlError=`${r.name} kon niet worden bijgewerkt. ${s.message}`}finally{t.busyAction="",m()}}async function lp(e,o){const n=j[e],r=Lt(o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",m();try{const a=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.controlNotice=`${n.name} bijgewerkt.`,await z(t.appView==="settings"?it():[e,"setupComplete"],"state")}catch(a){t.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",m()}}async function cp(e,o){const n=j[e],r=String(o||"").trim();t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.inputDrafts[e]=String(o??""),t.drafts[e]=r,m();try{const a=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.entities[e]={...t.entities[e]||{},value:r,state:r},delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=`${n.name} bijgewerkt.`,await z(t.appView==="settings"?it():[e,"setupComplete"],"state")}catch(a){t.inputDrafts[e]=r,t.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",m()}}async function fn(e,o){const n=j[e],r=xe(o)||_t,a=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.entities[e]={...t.entities[e]||{},value:r,state:r},r}async function ji(e,o){const n=j[e],r=o?"turn_on":"turn_off",a=await fetch(Q(n.domain,n.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.entities[e]={...t.entities[e]||{},value:o,state:o},o}async function Vi(){await z([...new Set([...Po,...Se,"setupComplete",...Et])],"state")}async function up(e,o){const n=j[e],r=xe(o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",m();try{await fn(e,r),t.controlNotice=`${n.name} bijgewerkt.`,await z(t.appView==="settings"?it():[e,"setupComplete","openquattEnabled"],"state")}catch(a){t.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",m()}}async function pp(){const e=t.authStatus||{},o=e.enabled===!0,n=e.setup_window_active===!0,r=String(t.authDraftCurrentPassword||""),a=String(t.authDraftUsername||"").trim(),s=String(t.authDraftNewPassword||""),u=String(t.authDraftConfirmPassword||"");if(!a||!s){t.authError="Vul een gebruikersnaam en wachtwoord in.",m();return}if(s!==u){t.authError="De twee wachtwoorden zijn niet gelijk.",m();return}if(o&&!r){t.authError="Vul je huidige wachtwoord in.",m();return}if(!o&&!n){t.authError="Houd de herstelknop 5 seconden vast.",m();return}if(!e.csrf_token){t.authError="Logingegevens laden nog. Probeer het zo opnieuw.",m();return}t.authBusy=!0,t.authError="",t.authNotice="",m();try{const p=new URLSearchParams;p.set("csrf_token",e.csrf_token),p.set("current_password",r),p.set("new_username",a),p.set("new_password",s);const c=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:p.toString()}),l=await c.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!c.ok||!l.ok)throw new Error(l.error||`HTTP ${c.status}`);await Ht({force:!0}),t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authDraftUsername=String(t.authStatus?.username||a).trim(),t.authNotice=o?"Login aangepast.":"Login staat nu aan.",t.authError="",m()}catch(p){t.authError=`Opslaan is mislukt. ${p.message}`,m()}finally{t.authBusy=!1,m()}}async function dp(){const e=t.authStatus||{};if(!e.enabled){t.authNotice="Login staat al uit.",t.authError="",m();return}const o=String(t.authDraftCurrentPassword||"");if(!o){t.authError="Vul je huidige wachtwoord in.",m();return}if(!e.csrf_token){t.authError="Logingegevens laden nog. Probeer het zo opnieuw.",m();return}t.authBusy=!0,t.authError="",t.authNotice="",m();try{const n=new URLSearchParams;n.set("csrf_token",e.csrf_token),n.set("current_password",o);const r=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:n.toString()}),a=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!a.ok)throw new Error(a.error||`HTTP ${r.status}`);await Ht({force:!0}),t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authDraftUsername="",t.authNotice="Login staat nu uit.",t.authError="",m()}catch(n){t.authError=`Uitzetten is mislukt. ${n.message}`,m()}finally{t.authBusy=!1,m()}}async function en(e){const o=xe(e);if(e&&!o){t.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",m();return}if(o&&!w("openquattResumeAt")){t.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",m();return}t.busyAction="openquatt-regulation",t.controlNotice="",t.controlError="",m();let n=!1;try{w("openquattResumeAt")&&(await fn("openquattResumeAt",o||_t),n=!!o),await ji("openquattEnabled",!1),t.pauseResumeDraft=o?un(o):"",t.systemModal="",t.controlNotice=o?`Openquatt regeling is tijdelijk uitgeschakeld tot ${ir(o)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await Vi()}catch(r){if(n&&w("openquattResumeAt"))try{await fn("openquattResumeAt",_t)}catch{}t.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${r.message}`}finally{t.busyAction="",m()}}async function mp(){t.busyAction="openquatt-regulation",t.controlNotice="",t.controlError="",m();try{await ji("openquattEnabled",!0),t.pauseResumeDraft="",t.systemModal="",t.controlNotice="Openquatt regeling is weer actief.",await Vi()}catch(e){t.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{t.busyAction="",m()}}async function gp(e){const o=j[e];t.busyAction=e,t.controlError="",t.controlNotice="",m();try{const n=await fetch(Q(o.domain,o.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);t.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await z(["setupComplete"],"state"),e==="reset"&&(t.currentStep=Ao[0].id,t.quickStartModalMode="wizard",t.quickStartModalOpen=!0),t.quickStartModalOpen=e!=="apply",Xe("overview",{syncMode:"replace"}),ne({forceFast:!0})}catch(n){t.controlError=`Actie mislukt voor "${o.name}". ${n.message}`}finally{t.busyAction="",m()}}function hp(){window.requestAnimationFrame(()=>{if(!t.root||t.systemModal!=="service-task-hp-water-calibration")return;const e=t.root.querySelector("[data-oq-service-task-scroller]"),o=t.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!o)return;const n=e.getBoundingClientRect(),r=o.getBoundingClientRect(),a=e.scrollTop+r.top-n.top-24;e.scrollTop=Math.max(0,a)})}async function fo(e,o={}){const n=j[e];if(n){t.busyAction=e,t.controlError="",t.controlNotice="",m();try{const r=await fetch(Q(n.domain,n.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort"].includes(e)||(ho(),t.systemModal=""),t.controlNotice=o.successNotice||`${n.name} gestart.`,o.reconnectMode&&Xn(o.reconnectMode),Array.isArray(o.refreshKeys)&&o.refreshKeys.length&&await z(o.refreshKeys,"state")}catch(r){e==="commissioningCm100Start"?(t.pendingCommissioningCm100Start=!1,t.commissioningTaskLock=""):e==="boilerPowerTestStart"?(t.pendingBoilerPowerTestStart=!1,t.commissioningTaskLock=""):e==="flowAutotuneStart"?(t.pendingFlowAutotuneStart=!1,t.commissioningTaskLock=""):e==="airPurgeStart"?(t.pendingAirPurgeStart=!1,t.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock=""):e==="manualFlowStart"?(t.pendingManualFlowStart=!1,t.commissioningTaskLock=""):e==="manualHpStart"&&(t.pendingManualHpStart=!1,t.commissioningTaskLock=""),t.controlError=`${o.errorPrefix||`Actie mislukt voor "${n.name}"`}. ${r.message}`}finally{t.busyAction="",m(),e==="hpWaterCalibrationApply"&&hp()}}}function _i(e){const o=t.root?t.root.querySelector(".oq-helper-curve-svg"):null;if(!o||!t.draggingCurveKey)return;const n=o.getBoundingClientRect(),r=22,a=180,s=(e-n.top)/n.height*240,p=70-(Math.min(r+a,Math.max(r,s))-r)/a*50,c=ve(t.draggingCurveKey,p);String(A(t.draggingCurveKey))!==String(c)&&(t.drafts[t.draggingCurveKey]=c,m())}function Oo({key:e,value:o,meta:n,controlClass:r,inputClass:a="oq-helper-input",unitMarkup:s=""}){return`
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
    `}function fp(){const e=[];e.push(re()?"Stooklijn":"Power House");const o=String(A(re()?"curveControlProfile":"phResponseProfile")||"").trim();o&&e.push(`profiel ${o}`);const n=String(A("flowControlMode")||"").trim();return n&&e.push(`flow ${n==="Manual PWM"?"handmatig":"setpoint"}`),n==="Manual PWM"&&w("manualIpwm")?e.push(`iPWM ${V("manualIpwm")}`):w("flowSetpoint")&&e.push(`flow ${V("flowSetpoint")}`),w("dayMax")&&e.push(`dag ${V("dayMax")}`),w("silentMax")&&e.push(`silent ${V("silentMax")}`),w("maxWater")&&e.push(`max water ${V("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function w(e){const o=t.entities[e];return!!(o&&(o.state!==void 0||o.value!==void 0))}function B(e,o="\u2014"){const n=t.entities[e];if(!n)return o;if(typeof n.state=="string"&&n.state.trim()!=="")return n.state;const r=n.value??n.state;return r==null||r===""?o:typeof r=="boolean"?r?"Aan":"Uit":typeof r=="number"&&!Number.isNaN(r)&&n.uom?`${r} ${n.uom}`:String(r)}function P(e){const o=Number(A(e));return Number.isNaN(o)?NaN:o}function Ki(e){const o=String(e||"").toLowerCase();return o.includes("cop")||o.includes("eer")}function zi(e){const o=String(e||"");if(o==="totalEer"){const n=P("totalCoolingPower"),r=P("coolingPowerInput"),a=Number.isNaN(r)?P("totalPower"):r;return!Number.isNaN(n)&&!Number.isNaN(a)&&a>=5?n/a:NaN}if(o==="totalCop"){const n=P("totalHeat"),r=P("heatingPowerInput"),a=Number.isNaN(r)?P("totalPower"):r;return!Number.isNaN(n)&&!Number.isNaN(a)&&a>=5?n/a:NaN}return NaN}function Vt(e,o=""){const n=String(t.entities[e]?.uom||"").trim();return n||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||o}function $e(e){const o=t.entities[e],n=zi(e);if(!o)return Number.isNaN(n)?"\u2014":R(n,1,Vt(e));const r=P(e);if(Number.isNaN(r))return Number.isNaN(n)?B(e):R(n,1,Vt(e));const a=r>0||Number.isNaN(n)?r:n,s=Ki(e)?1:0;return R(a,s,Vt(e))}function N(e){const o=t.entities[e];if(!o)return!1;if(typeof o.value=="boolean")return o.value;const n=String(o.state??o.value??"").toLowerCase();return n==="on"||n==="true"||n==="1"}function xt(){return!w("trendHistoryEnabled")||N("trendHistoryEnabled")}function Ui(){const e=t.entities.setupComplete;if(!e)return null;const o=String(e.state??e.value??"").trim().toLowerCase();return!o||o==="unknown"||o==="unavailable"?null:o==="on"||o==="true"||o==="1"?!0:o==="off"||o==="false"||o==="0"?!1:null}function vp(){return`
      <div class="oq-helper-app-nav">
        ${$n.filter(e=>e.id!=="trends"||xt()).map(e=>`
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
    `}function bp(e=t.appView){return $n.find(o=>o.id===e)?.label||"OpenQuatt"}function ma(){if(typeof document>"u")return;if(t.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}const e=bp();document.title=`${e} \u2022 OpenQuatt`}function ga(){if(typeof document>"u")return;if(t.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");const e=t.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}const ha="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",wp="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==",Gi=250;function Qi(){if(typeof window>"u")return[];const e=window.__OQ_DEV_WEBSERVER_LOGS__,o=typeof e=="function"?e():e;return Array.isArray(o)?o.map(n=>String(n||"")).filter(n=>n.trim()!==""):[]}function Ot(){return typeof window>"u"?!1:window.location.protocol==="file:"&&Qi().length>0}function yp(){return`${Mo()}/events`}function qp(){return`${Mo()}/openquatt/logs/recent`}function qo(){const e=t.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;const o=String(e.state??e.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function Sp(){return t.nativeOpen?"Niet beschikbaar":Ot()?"Voorbeeld":t.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function kp(e){const o=Math.max(0,Math.floor(Number(e)/1e3)),n=Math.floor(o/3600),r=Math.floor(o%3600/60),a=o%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Yi(e){const o=Number(e)||0;if(o>9466848e5){const n=e instanceof Date?e:new Date(o),r={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(n)}catch{return n.toLocaleString("nl-NL",r)}}return kp(o)}function Cp(e){const o=Number(e)||0;if(o>9466848e5)return new Date(o).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});const n=Math.max(0,Math.floor(o/1e3)),r=Math.floor(n/3600),a=Math.floor(n%3600/60),s=n%60;return`Sinds opstart: ${r}u ${a}m ${s}s`}function Tp(){return t.nativeOpen?"Niet beschikbaar":Ot()?qo()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":qo()?"Buffer aan":"Buffer uit"}function $p(){return qo()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function hr(){return t.entities?.debugLevel||null}function Zi(e=hr()){const o=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return o.length?o:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function Ap(e=hr()){const o=String(e?.value??e?.state??"").trim(),n=Zi(e);return n.includes(o)?o:n.includes("INFO")?"INFO":n[0]||""}function Xi(e,o=null){if(!e||!o)return!1;const n=Number(e.seq),r=Number(o.seq);if(Number.isFinite(n)&&Number.isFinite(r)&&n===r)return!0;const a=String(e.raw??e.text??"").trim(),s=String(o.raw??o.text??"").trim();if(!a||a!==s)return!1;const u=Number(e.receivedAt??e.ts??0),p=Number(o.receivedAt??o.ts??0);return Math.abs(u-p)<=2e3}function Ep(e,o){const n=Number(e.receivedAt??e.ts??0),r=Number(o.receivedAt??o.ts??0);if(n!==r)return n-r;const a=Number(e.seq??0),s=Number(o.seq??0);return a!==s?a-s:String(e.raw??"").localeCompare(String(o.raw??""))}function Ji(e,{prepend:o=!1}={}){if(!Array.isArray(e)||e.length===0)return;const n=o?[...e,...t.webServerLogEntries]:[...t.webServerLogEntries,...e];n.sort(Ep);const r=[];for(const a of n){const s=r[r.length-1]||null;Xi(a,s)||r.push(a)}t.webServerLogEntries=r.slice(-Gi)}function fr(e,o={}){const n=Gp(e).trimEnd(),r=Number(o.receivedAt),a=Number(o.seq);return{raw:e,text:n,tone:Qp(e),receivedAt:Number.isFinite(r)?r:Date.now(),seq:Number.isFinite(a)?a:void 0}}function Pp(e,o){const r=Math.max(0,o-e-1)*9e4;return Date.now()-r}function Mp(){const e=Qi(),o=e.length;return e.map((n,r)=>fr(n,{receivedAt:Pp(r,o),seq:r+1}))}function Lp(){const e=Ro();e&&(e.scrollTop=e.scrollHeight)}function Ue(){const e=Ro();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:vr(e)}:null}function Hp(e){if(!e)return;const o=Ro();if(!o)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}const n=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,n)}function _e(e,o=!0){if(!e)return;const n=Number(t.webServerLogScrollRestoreToken||0)+1;t.webServerLogScrollRestoreToken=n;const r=()=>{t.webServerLogScrollRestoreToken!==n||t.systemModal!=="webserver-logs"||Hp(e)};if(o){window.requestAnimationFrame(r);return}r()}function es(){return t.root?t.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}function Np(){const e=es();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:vr(e)}:null}function xp(e){if(!e)return;const o=es();if(!o)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}const n=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,n)}function fa(e,o=!0){if(!e)return;const n=Number(t.cm100CommissioningScrollRestoreToken||0)+1;t.cm100CommissioningScrollRestoreToken=n;const r=()=>{t.cm100CommissioningScrollRestoreToken!==n||t.systemModal!=="cm100-commissioning"||xp(e)};if(o){window.requestAnimationFrame(r);return}r()}function ts(){return t.root?t.root.querySelector("[data-oq-service-task-scroller]"):null}function Op(){const e=ts();return e?{scrollTop:e.scrollTop}:null}function Fp(e){if(!e)return;const o=ts();o&&(o.scrollTop=Math.max(0,e.scrollTop))}function va(e,o=!0){if(!e)return;const n=Number(t.serviceTaskModalScrollRestoreToken||0)+1;t.serviceTaskModalScrollRestoreToken=n;const r=()=>{t.serviceTaskModalScrollRestoreToken!==n||!String(t.systemModal||"").startsWith("service-task-")||Fp(e)};if(o){window.requestAnimationFrame(r);return}r()}async function So(e={}){if(t.nativeOpen||typeof window.fetch!="function")return;const o=e.scrollState||Ue(),n=Number(t.webServerLogHistoryRequestToken||0)+1;t.webServerLogHistoryRequestToken=n,t.webServerLogHistoryLoading=!0,t.webServerLogHistoryError="";try{const r=await window.fetch(qp(),{headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.json();if(t.systemModal!=="webserver-logs"||t.webServerLogHistoryRequestToken!==n)return;const s=Dp(a);t.webServerLogHistoryLoaded=!0,s.length>0&&(Ji(s,{prepend:!0}),t.webServerLogRecentTail=s.slice(-4).map(u=>String(u.raw??u.text??"")),t.webServerLogRecentAnchorAt=Date.now())}catch(r){t.systemModal==="webserver-logs"&&t.webServerLogHistoryRequestToken===n&&(t.webServerLogHistoryError=r instanceof Error?r.message:"Recente logs konden niet worden opgehaald.")}finally{t.webServerLogHistoryRequestToken===n&&(t.webServerLogHistoryLoading=!1),t.systemModal==="webserver-logs"&&t.webServerLogHistoryRequestToken===n&&(m(),_e(o))}}function Rp(e,o=0){if(!e||typeof e!="object")return null;const n=String(e.raw??"").trim()||String(e.message??"").trim();return n?fr(n,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??o)}):null}function Dp(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((n,r)=>Rp(n,r+1)).filter(n=>n!==null)}function Ip(e){if(!e||!Array.isArray(t.webServerLogRecentTail)||t.webServerLogRecentTail.length===0||Date.now()-Number(t.webServerLogRecentAnchorAt||0)>2500)return!1;const n=String(e.raw??e.text??"").trim();return n?t.webServerLogRecentTail.includes(n):!1}function Wp(e,o=t.webServerLogEntries){return!e||!Array.isArray(o)||o.length===0?!1:o.some(n=>Xi(e,n))}function Bp(){Ot()&&t.webServerLogEntries.length===0&&(t.webServerLogEntries=Mp()),t.webServerLogCopyMessage="",t.webServerLogCopyError="",t.systemModal="webserver-logs",m(),z(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(t.systemModal!=="webserver-logs")return;const e=Ue();m(),_e(e)}),Lp(),(!t.webServerLogHistoryLoaded||t.webServerLogEntries.length===0)&&So()}function Fo(){t.webServerLogEntries=[],t.webServerLogError="",t.webServerLogHistoryError="",t.webServerLogHistoryLoading=!1,t.webServerLogHistoryLoaded=!1,t.webServerLogScrollRestoreToken=Number(t.webServerLogScrollRestoreToken||0)+1,t.webServerLogCopyMessage="",t.webServerLogCopyError="",t.webServerLogHistoryRequestToken+=1,t.webServerLogRecentTail=[],t.webServerLogRecentAnchorAt=0,t.systemModal==="webserver-logs"&&m()}function ba(){const e=Ue();et(),t.webServerLogEnabled=null,t.webServerLogConnected=!1,Fo(),t.systemModal==="webserver-logs"&&So({scrollState:e})}function wa(){if(Ot()){et();return}if(!(t.mounted&&!t.nativeOpen&&t.systemModal==="webserver-logs")){et();return}if(t.webServerLogEnabled===!1){et();return}t.webServerLogSource||jp()}function jp(){if(Ot()){t.webServerLogEnabled=!0,t.webServerLogConnected=!1,t.webServerLogError="",m();return}if(typeof window.EventSource!="function"){t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError="Deze browser ondersteunt geen live logstream.",m();return}try{const e=new window.EventSource(yp());t.webServerLogSource=e,e.addEventListener("open",Vp),e.addEventListener("ping",_p),e.addEventListener("log",zp),e.onerror=Kp}catch(e){t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",et(),m()}}function et(){const e=t.webServerLogSource;if(e)try{e.close()}catch{}t.webServerLogSource=null,t.webServerLogConnected=!1}function Vp(){if(!t.webServerLogSource||t.nativeOpen)return;const e=t.systemModal==="webserver-logs"?Ue():null;t.webServerLogEnabled=!0,t.webServerLogConnected=!0,t.webServerLogError="",m(),_e(e)}function _p(){if(!t.webServerLogSource||t.nativeOpen)return;const e=t.systemModal==="webserver-logs"?Ue():null;t.webServerLogEnabled=!0,t.webServerLogConnected||(t.webServerLogConnected=!0,t.webServerLogError="",m(),_e(e))}function Kp(){if(!t.webServerLogSource)return;const e=t.systemModal==="webserver-logs"?Ue():null;t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError="De live logstream kon niet worden geopend.",et(),m(),_e(e)}function zp(e){if(!t.webServerLogSource||!e||typeof e.data!="string")return;const o=Ue(),n=Up(e.data);if(!n)return;const r=n.split(/\r?\n/).filter(c=>c.trim()!=="");if(r.length===0)return;const s=r.map(c=>fr(c)).filter(c=>!Ip(c)&&!Wp(c));if(s.length===0)return;Ji(s);const u=Zp(),p=Ro();Yp(u),Xp(s,u),t.webServerLogEnabled=!0,p&&o&&_e(o,!1)}function Up(e){const o=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!o)return"";const n=o.trim();if(n.startsWith("{")&&n.endsWith("}")||n.startsWith("[")&&n.endsWith("]"))try{const r=JSON.parse(n),a=typeof r=="string"?r:r?.message??r?.msg??r?.text??r?.data??r?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return o}function Gp(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function Qp(e){const o=String(e??""),n=Array.from(o.matchAll(/\x1b\[([0-9;]*)m/g));for(let s=n.length-1;s>=0;s-=1){const u=n[s][1].split(";").map(p=>Number(p)).filter(p=>Number.isFinite(p));for(let p=u.length-1;p>=0;p-=1){const c=u[p];if(c===31||c===91)return"error";if(c===33||c===93)return"warning";if(c===32||c===92)return"info";if(c===36||c===96||c===34||c===35)return"debug";if(c===37||c===90||c===38||c===97)return"verbose"}}const r=o.match(/\[(E|W|I|D|V|VV)\]/i);if(!r)return"plain";const a=r[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function Yp(e){for(;t.webServerLogEntries.length>Gi;)t.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function Zp(){return t.root?t.root.querySelector("[data-oq-webserver-log-output]"):null}function Ro(){return t.root?t.root.querySelector("[data-oq-webserver-log-scroller]"):null}function vr(e){return e?e.scrollHeight-e.scrollTop-e.clientHeight<48:!1}function Xp(e,o){if(!(!o||e.length===0)){o.dataset.webServerLogEmpty==="true"&&(o.dataset.webServerLogEmpty="false",o.innerHTML="");for(const n of e)o.insertAdjacentHTML("beforeend",os(n))}}function os(e){const o=Yi(e.receivedAt),n=Cp(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${i(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${i(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${i(n)}">${i(o)}</time>
      <span class="oq-webserver-log-entry-text">${i(e.text||e.raw||" ")}</span>
    </div>
  `}function Jp(e=t.webServerLogEntries){return e.length?e.map(o=>os(o)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function ed(){const e=[];return t.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),t.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${i(t.webServerLogCopyMessage)}</span>
      </div>
    `),t.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${i(t.webServerLogCopyError)}</p>`),t.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${i(t.webServerLogHistoryError)}</p>`),t.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${i(t.webServerLogError)}</p>`),e.length?e.join(""):""}function td(){const e=qo(),o=t.loadingEntities||t.busyAction==="switch-webServerLogHistoryEnabled",n=Tp(),r=$p(),a=od();return`
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
  `}function od(){const e=hr();if(!e)return"";const o=Zi(e),n=Ap(e),r=t.loadingEntities||t.busyAction==="save-debugLevel";return`
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
  `}function nd(){return t.webServerLogEntries.map(e=>{const o=String(e.raw??e.text??"").trimEnd();return o.trim()?`${Yi(e.receivedAt)} ${o}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function rd(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="fixed",o.style.top="-1000px",o.style.opacity="0",document.body.appendChild(o),o.focus(),o.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(o)}return n}async function ad(){const e=nd();if(t.webServerLogCopyMessage="",t.webServerLogCopyError="",!e){t.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",m();return}try{if(!await rd(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");t.webServerLogCopyMessage=`${t.webServerLogEntries.length} logregel${t.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(o){t.webServerLogCopyError=o instanceof Error?o.message:"Kopi\xEBren naar het klembord is niet gelukt."}t.systemModal==="webserver-logs"&&m()}function id(){const e=Ot();return`
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
        ${td()}
        ${ed()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${t.webServerLogEntries.length===0?"true":"false"}">
            ${Jp()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${t.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `}function Do(e,o,n){return n?`
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
    `:""}function he(e,o,n,r,a="",s=""){return`<article class="oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${i(e)}"><div class="oq-settings-field-head"><h3>${i(o)}</h3>${Do(e,o,n)}</div><div class="oq-settings-field-control">${r}</div>${s}</article>`}function Z(e,o,n,r,a=""){return he(e,o,n,`<div class="oq-settings-static-value">${i(r)}</div>`,a)}function ee(e,o={}){const n=typeof o=="number"?{decimals:o}:o||{},r=t.entities[e];if(!r)return"\u2014";const a=Number(r.value);if(!Number.isNaN(a)){const u=Number.isInteger(a)?0:Number.isFinite(n.decimals)?n.decimals:1;let p=a.toFixed(Math.max(0,u));return n.trimTrailingZeros&&p.includes(".")&&(p=p.replace(/\.?0+$/,"")),`${p}${r.uom?` ${r.uom}`:""}`}return String(r.state??r.value??"").trim()||"\u2014"}function Io(e,o="\u2014"){const n=t.entities[e];if(!n)return o;const r=String(n.state??n.value??"").trim();return!r||r==="0"||r==="\u2014"?o:r}function Ct(e,o="",n=2){const r=Number(e);return Number.isFinite(r)?`${r.toFixed(Math.max(0,n))}${o?` ${o}`:""}`:"\u2014"}function ie(e,o=2){return ee(e,{decimals:o})}function br(e,o,n){const r=P(o),a=P(n);if(Number.isFinite(r)&&Number.isFinite(a))return r-a;const s=P(e);return Number.isFinite(s)?s:NaN}function ya(e,o){const n=P(e),r=P(o),a=Number.isNaN(n)?"Lvl \u2014":`Lvl ${Math.round(n)}`,s=Number.isNaN(r)?"\u2014 Hz":`${Math.round(r)} Hz`;return`${a} (${s})`}function sd(e){const o=String(e||"").trim().toUpperCase();return!o||o==="0"||o==="IDLE"||o==="CM100 READY"||o==="CM100 STOPPED"||o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED")?!1:o.includes("REQUESTED")||o.includes("WAITING")||o.includes("WACHTEN")||o.includes("SETTLING")||o.includes("MEASUR")||o.includes("COOLDOWN")||o.includes("RUNNING")||o.includes("VALIDATING")||o.includes("STARTED")||o.includes("RECOVER")||o.includes("PHASE")||o.includes("STEADY")||o.includes("PULSE")||o.includes("STABILIZE")||o.includes("STEP")}function J(e){const o=String(e||"").trim().toUpperCase();return o?o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED"):!1}function Ye(e){const o=String(e||"").trim().toUpperCase();return o.includes("WAITING_FOR_CM100")||o.includes("CM100 REQUESTED")||o.includes("WACHTEN OP CM100")||o==="WACHTEN"}function mt(e){return sd(e)&&!Ye(e)}function gt(e,o="IDLE"){const n=Io(e,o),r=String(n??"").trim();return!r||r==="0"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN"?o:r}function ns(){const e=Io("commissioningStatus",""),o=N("cm100Active"),n=String(e||"").trim().toUpperCase();return(o||n==="CM100 READY"||n==="CM100 STOPPED"||n.includes("DONE")||n.includes("FAILED")||n.includes("ABORT")||n.includes("APPLIED")||n.includes("REFUSED"))&&(t.pendingCommissioningCm100Start=!1),n&&n!=="0"?n==="IDLE"&&t.pendingCommissioningCm100Start?"CM100 REQUESTED":n:t.pendingCommissioningCm100Start?"CM100 REQUESTED":o?"CM100 READY":"IDLE"}function ld(){if(!N("trendHistoryEnabled")||!N("trendHistoryFlashEnabled"))return"";const e=[{key:"trendHistoryFlashOldest",label:"Oudste punt"},{key:"trendHistoryFlashNewest",label:"Nieuwste punt"},{key:"trendHistoryFlashLastFlush",label:"Laatste opslag"}],o=ee("trendHistoryFlashAvailable"),n=ee("trendHistoryFlashNewest"),r=ee("trendHistoryFlashSize"),a=ee("trendHistoryFlashWrites"),s=`
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
          ${e.map(u=>`
            <div class="oq-settings-trend-stat">
              <span class="oq-settings-trend-stat-label">${i(u.label)}</span>
              <strong class="oq-settings-trend-stat-value">${i(ee(u.key))}</strong>
            </div>
          `).join("")}
        </div>
      </div>
    `;return he("trendHistoryFlashStats","Flashhistorie","Overzicht van wat er nu in flash is opgeslagen.",s,"oq-settings-field--span-2",'<p class="oq-settings-action-note">Wordt ongeveer elk uur opgeslagen en ook bij herstart of OTA.</p>')}function Ae(e){const o=String(e||"").trim();return o?{None:"Geen",Manual:"Handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[Fa]:"Stooklijn",[Oa]:"Power House","Dew point required":"Dauwpunt verplicht","Allow without dew point":"Toestaan zonder dauwpunt",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[o]||o:""}function rs(e){const o=String(e||"").trim();return o?{Ready:"Gereed","Waiting for room request":"Wacht op kamervraag","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Flow too low":"Flow te laag","Fallback cooling active":"Fallback-koeling actief","Fallback corrected by warm night":"Fallback gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Fallback geblokkeerd door tropische nacht"}[o]||o:""}function Wo({key:e,option:o,currentValue:n,busy:r,copy:a="",meta:s="",image:u="",imageAlt:p="",infoTitle:c="",infoCopy:l="",infoId:d=""}){const f=o===n,g=`
      <button
        class="oq-settings-choice-card${f?" is-active":""}${u?" oq-settings-choice-card--with-image":""}${l?" oq-settings-choice-card--has-info":""}"
        type="button"
        data-oq-action="select-settings-option"
        data-select-key="${i(e)}"
        data-select-option="${i(o)}"
        aria-pressed="${f?"true":"false"}"
        ${r?"disabled":""}
      >
        <span class="oq-settings-choice-head">
          <span class="oq-settings-choice-title">${i(Ae(o))}</span>
          ${s?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${i(s)}</span></span>`:""}
        </span>
        ${u?`<span class="oq-settings-choice-media"><img src="${i(u)}" alt="${i(p||Ae(o))}" loading="lazy" decoding="async"></span>`:""}
        ${a?`<span class="oq-settings-choice-copy">${i(a)}</span>`:""}
      </button>
    `;if(!l)return g;const v=c||Ae(o),S=d||`${e}-${o}`;return`
      <article class="oq-settings-choice-card-shell${f?" is-active":""}${u?" oq-settings-choice-card-shell--with-image":""}">
        ${g}
        ${Do(S,v,l)}
      </article>
    `}function Ft(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function Tt(e,o,n,r=""){if(!w(e))return"";const a=t.entities[e]||{},s=String(A(e)||""),u=Ft(a);return he(e,o,n,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${i(e)}" ${t.loadingEntities?"disabled":""}>${u.map(p=>`<option value="${i(p)}" ${p===s?"selected":""}>${i(Ae(p))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,r)}function as(e,o,n="Aan",r="Uit"){return`<span class="oq-settings-integration-pill${o?" is-on":""}" data-oq-switch-pill="${i(e)}" data-on-label="${i(n)}" data-off-label="${i(r)}">${i(o?n:r)}</span>`}function Bo(e,o,n,r,a="Aan",s="Uit",u=!0){const p=(c,l)=>{const d=l===(n?"on":"off");return`
        <button
          class="oq-settings-integration-toggle-button${d?" is-active":""}"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="${i(e)}"
          data-control-state="${i(l)}"
          aria-pressed="${d?"true":"false"}"
          ${r?"disabled":""}
        >
          ${i(c)}
        </button>
      `};return`
      <div class="oq-settings-compact-switch-row">
        ${u?as(e,n,a,s):""}
        <div class="oq-settings-integration-toggle" role="group" aria-label="${i(o)}">
          ${p(s,"off")}
          ${p(a,"on")}
        </div>
      </div>
    `}function cd(e,o,n="",r=""){const a=o?n:r;return a?`<p data-oq-switch-copy="${i(e)}" data-on-copy="${i(n)}" data-off-copy="${i(r)}">${i(a)}</p>`:""}function qa(e,o,n,r="",a="",s=""){if(!w(e))return"";const u=!!A(e),p=t.loadingEntities||t.busyAction===`switch-${e}`;return he(e,o,n,`
        <div class="oq-settings-compact-switch-field">
          ${Bo(e,o,u,p)}
          ${cd(e,u,r,a)}
        </div>
      `,s)}function ud(e,o,n,r,a=""){if(!w(e))return"";const s=!!A(e),u=t.loadingEntities||t.busyAction===`switch-${e}`;return he(e,o,n,`
        <div class="oq-settings-compact-switch-field">
          ${Bo(e,o,s,u)}
          ${r?`<p>${i(r)}</p>`:""}
        </div>
      `,a)}function tn(e,o,n){if(!w(e))return"";const r=!!A(e),a=t.loadingEntities||t.busyAction===`switch-${e}`;return`
      <article class="oq-settings-integration-card" data-oq-settings-field="${i(e)}">
        <div class="oq-settings-integration-card-head">
          <h4>${i(o)}</h4>
          ${as(e,r)}
        </div>
        <p>${i(n)}</p>
        ${Bo(e,o,r,a,"Aan","Uit",!1)}
      </article>
    `}function pd(e,o,n,r,a,s="",u={}){const p=t.loadingEntities||t.busyAction===e,c=u.disabled===!0,l=u.buttonClass||"oq-helper-button oq-helper-button--ghost",d=u.note||"";return he(e,o,n,`
        <div class="oq-settings-action-field">
          <button
            class="${l}"
            type="button"
            data-oq-action="${i(a)}"
            ${u.buttonKey?`data-oq-button-key="${i(u.buttonKey)}"`:""}
            ${p||c?"disabled":""}
          >
            ${i(r)}
          </button>
          ${d?`<p class="oq-settings-action-note">${i(d)}</p>`:""}
        </div>
      `,s)}function Le(e,o,n="oq-helper-button oq-helper-button--ghost",r=!1){return`
      <button
        class="${n}"
        type="button"
        data-oq-action="press-named-button"
        data-oq-button-key="${i(e)}"
        ${r?"disabled":""}
      >
        ${i(o)}
      </button>
    `}function bt({active:e,startKey:o,stopKey:n,startLabel:r,stopLabel:a,startClass:s="oq-helper-button oq-helper-button--primary",stopClass:u="oq-helper-button oq-helper-button--ghost",startDisabled:p=!1,stopDisabled:c=!1}){return Le(e?n:o,e?a:r,e?u:s,e?c:p)}function dd(e,o,n,r,a=""){if(!w(e))return"";const s=t.entities[e]||{},u=String(A(e)||""),p=Ft(s),c=t.loadingEntities||t.busyAction===`save-${e}`,l=`
      <div class="oq-settings-choice-grid">
        ${p.map(d=>{const f=r[d]||"",g=typeof f=="string"?f:f.copy||"",v=typeof f=="string"?"":f.image||"",S=typeof f=="string"?"":f.alt||"";return Wo({key:e,option:d,currentValue:u,busy:c,copy:g,image:v,imageAlt:S})}).join("")}
      </div>
    `;return he(e,o,n,l,a)}function X(e,o,n,r="",a={}){if(!w(e))return"";const s=ze(e),u=He(e),p=a.unitOverride||s.uom||"",c=a.showUnit!==!1&&!!p,l=c&&a.unitMode!=="outside",d=Oo({key:e,value:u,meta:s,controlClass:`oq-helper-control${c&&!l?" oq-helper-control--split":""}${l?" oq-helper-control--suffix":""}`,unitMarkup:c?l?`<span class="oq-helper-unit-chip">${i(p)}</span>`:`<span class="oq-helper-unit">${i(p)}</span>`:""});return he(e,o,n,d,r,a.footerMarkup||"")}function je(e,o,n,r="",a={}){if(!w(e))return"";const s=ze(e),u=ve(e,A(e)),p=a.minLabel||`${s.min}${s.uom||""}`,c=a.maxLabel||`${s.max}${s.uom||""}`,l=a.valueLabel||V(e,u);return he(e,o,n,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${i(p)}</span><strong>${i(l)}</strong><span>${i(c)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${i(e)}" min="${s.min}" max="${s.max}" step="${s.step}" value="${u}" ${t.loadingEntities?"disabled":""}></label>`,r)}function Sa(e,o,n,r={}){if(!w(e))return"";const a=ze(e),s=He(e),u=r.compact===!0,p=r.embedded===!0,c=r.infoId||e,l=r.showCopy!==!1;return`
      <article class="oq-settings-mini-field${u?" oq-settings-mini-field--compact":""}${p?" oq-settings-mini-field--embedded":""}">
        <div class="oq-settings-mini-copy">
          <div class="oq-settings-mini-copy-head">
            <h5>${i(o)}</h5>
            ${n?Do(c,o,n):""}
          </div>
          ${n&&l?`<p>${i(n)}</p>`:""}
        </div>
        ${Oo({key:e,value:s,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${i(a.uom)}</span>`:""})}
      </article>
    `}function ka(e,o,n,r=""){if(!w(e))return"";const a=cn(A(e));return he(e,o,n,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${i(e)}" value="${i(a)}" ${t.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,r||"oq-settings-field--time")}function te(e,o,n,r,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${i(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${i(o)}</h3><p>${i(n)}</p></div>${r}</section>`}function md(){const e=Ee.has(t.settingsGroup)?t.settingsGroup:be[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${be.map(o=>`
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
    `}function gd(){const e=Ee.has(t.settingsGroup)?t.settingsGroup:be[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[Pd(),Md(),qd(),_d(),xd(),Vd()]:e==="service"?[Cd(),Ad()]:e==="heating"?[Nd()]:e==="cooling"?[zd()]:e==="integrations"?[Od(),Fd(),Dd()]:[Ld(),Hd(),Rd(),Id(),jd()]).filter(Boolean).join("")}
      </div>
    `}function hd(){if(!t.root||t.appView!=="settings")return!1;const e=t.root.querySelector(".oq-settings-group-nav"),o=t.root.querySelector(".oq-settings-group-stack");if(!e||!o)return!1;const n=Ee.has(t.settingsGroup)?t.settingsGroup:be[0].id;if(n==="service")return!1;const r=e.querySelectorAll(".oq-settings-group-button");if(r.length!==be.length)return!1;r.forEach(h=>{const b=String(h.dataset.groupId||"")===n;h.classList.toggle("is-active",b),h.setAttribute("aria-pressed",b?"true":"false")}),o.querySelectorAll(".oq-settings-info").forEach(h=>{const y=String(h.dataset.oqSettingsInfo||""),b=t.settingsInfoOpen===y;h.classList.toggle("is-open",b);const k=h.querySelector(".oq-settings-info-popover");k&&(k.hidden=!b);const $=h.querySelector(".oq-settings-info-button");$&&$.setAttribute("aria-expanded",b?"true":"false")}),o.querySelectorAll("[data-oq-settings-field]").forEach(h=>{const y=String(h.dataset.oqSettingsField||"");if(!y)return;const b=h.querySelector(".oq-settings-static-value");if(b){const q=B(y);b.textContent!==q&&(b.textContent=q)}h.querySelectorAll("select[data-oq-field]").forEach(q=>{const E=String(q.dataset.oqField||y),O=String(A(E)||"");q.value!==O&&(q.value=O)});const k=h.querySelector("input[data-oq-field]");if(k){const q=String(k.dataset.oqField||y),E=String(He(q)||"");k.value!==E&&(k.value=E)}const $=h.querySelector(".oq-helper-slider-meta strong");if($&&k&&k.type==="range"){const q=V(y,ve(y,A(y)));$.textContent!==q&&($.textContent=q)}}),o.querySelectorAll("[data-select-key]").forEach(h=>{const y=String(h.dataset.selectKey||""),b=String(h.dataset.selectOption||""),k=String(A(y)||""),$=b===k;h.classList.toggle("is-active",$),h.setAttribute("aria-pressed",$?"true":"false"),y==="strategy"?h.disabled=t.loadingEntities||t.busyAction==="save-strategy":y==="hpGeneration"?h.disabled=t.loadingEntities||t.busyAction==="save-hpGeneration":y==="curveControlProfile"?h.disabled=t.loadingEntities||t.busyAction==="save-curveControlProfile":y==="phResponseProfile"&&(h.disabled=t.loadingEntities||t.busyAction==="save-phResponseProfile");const q=h.closest(".oq-settings-choice-card-shell");q&&q.classList.toggle("is-active",$)});const a=o.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){const h=String(A("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",h),a.querySelectorAll("input[data-oq-field]").forEach(b=>{const k=String(b.dataset.oqField||""),$=String(He(k)||"");b.value!==$&&(b.value=$)})}o.querySelectorAll("[data-control-key]").forEach(h=>{const y=String(h.dataset.controlKey||""),b=String(h.dataset.controlState||""),k=!!A(y),$=b===(k?"on":"off");h.classList.toggle("is-active",$),h.setAttribute("aria-pressed",$?"true":"false"),h.disabled=t.loadingEntities||t.busyAction===`switch-${y}`}),o.querySelectorAll("[data-oq-switch-pill]").forEach(h=>{const y=String(h.dataset.oqSwitchPill||""),b=!!A(y),k=String(h.dataset.onLabel||"Aan"),$=String(h.dataset.offLabel||"Uit"),q=b?k:$;h.classList.toggle("is-on",b),h.textContent!==q&&(h.textContent=q)}),o.querySelectorAll("[data-oq-switch-copy]").forEach(h=>{const y=String(h.dataset.oqSwitchCopy||""),b=!!A(y),k=String(h.dataset.onCopy||""),$=String(h.dataset.offCopy||""),q=b?k:$;h.hidden=!q,h.textContent!==q&&(h.textContent=q)});const s=o.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(s){const h=s.querySelector(".oq-settings-quickstart-status-value"),y=s.querySelector(".oq-settings-quickstart-status-copy"),b=s.querySelector('button[data-oq-action="open-generation-modal"]'),k=Jt(),$=t.entities.hpGeneration||{},q=w("hpGeneration")&&Ft($).length>0;if(h){const E=k||"Onbekend";h.textContent!==E&&(h.textContent=E)}if(y){const E="Pas dit aan als je een andere Quatt Hybrid hebt.";y.textContent!==E&&(y.textContent=E)}b&&(b.disabled=!q||t.loadingEntities||t.busyAction==="save-hpGeneration")}const u=o.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(u){const h=u.querySelector(".oq-settings-quickstart-status-value"),y=u.querySelector(".oq-settings-quickstart-status-copy"),b=u.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),k=ns(),$=N("cm100Active");h&&h.textContent!==k&&(h.textContent=k);const q=$?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";y&&y.textContent!==q&&(y.textContent=q),b&&(b.disabled=t.loadingEntities)}const p=o.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(p){const h=p.querySelector(".oq-settings-quickstart-status-value"),y=p.querySelector(".oq-settings-quickstart-status-copy"),b=p.querySelector('button[data-oq-action="reset"]'),k=t.complete===!0?"Afgerond":t.complete===!1?"Open":"Laden...",$=t.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":t.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";h&&h.textContent!==k&&(h.textContent=k),y&&y.textContent!==$&&(y.textContent=$),b&&(b.disabled=t.busyAction==="reset")}const c=o.querySelectorAll("[data-oq-access-security-item]");c.length&&c.forEach(h=>{const y=String(h.dataset.oqAccessSecurityItem||""),b=h.querySelector(".oq-settings-quickstart-status-value"),k=h.querySelector(".oq-settings-quickstart-status-copy"),$=h.querySelector("button[data-oq-action]");if(y==="login"){const q=nr(),E=rr();b&&b.textContent!==q&&(b.textContent=q),k&&k.textContent!==E&&(k.textContent=E)}else if(y==="api"){const q=yr(),E=qr();b&&b.textContent!==q&&(b.textContent=q),k&&k.textContent!==E&&(k.textContent=E)}$&&($.disabled=!1)});const l=o.querySelectorAll("[data-oq-mqtt-item]");l.length&&l.forEach(h=>{const y=h.querySelector(".oq-settings-quickstart-status-value"),b=h.querySelector(".oq-settings-quickstart-status-copy"),k=h.querySelector('button[data-oq-action="open-mqtt-modal"]'),$=ur(),q=pr();y&&y.textContent!==$&&(y.textContent=$),b&&b.textContent!==q&&(b.textContent=q),k&&(k.disabled=!1)});const d=o.querySelector(".oq-settings-system-summary");if(d){const h=d.querySelectorAll(".oq-settings-system-row"),y={uptime:jn(),ip:Vn(),updates:to(),datetime:ui(),espTemp:vi(),restart:"Opnieuw opstarten"};h.forEach($=>{const q=$.querySelector(".oq-settings-system-row-value"),E=$.dataset.oqDiagnosticsRow||"";if(q&&Object.prototype.hasOwnProperty.call(y,E)){const O=y[E];q.textContent!==O&&(q.textContent=O)}});const b=d.querySelector('button[data-oq-action="open-update-modal"]');b&&(b.disabled=!1);const k=d.querySelector('button[data-oq-action="open-restart-confirm"]');if(k){const $=t.busyAction==="restartAction";k.disabled=$,k.textContent=$?"Herstarten...":"Herstarten"}}o.querySelectorAll(".oq-settings-hp-offset-row").forEach(h=>{const y=String(h.dataset.oqSettingsField||""),b=String(h.dataset.oqHpOffsetRawKey||""),k=String(h.dataset.oqHpOffsetFinalKey||"");if(!y||!b||!k)return;const $=ze(y),q=br(b,k,y),E=nt(He(y)),O=Number.isFinite(q)&&Number.isFinite(E)?Ct(q+E,$.uom||"\xB0C",2):ie(k,2),F=h.querySelector("[data-oq-hp-offset-active]");if(F){const T=`${ie(k,2)} actief`;F.textContent!==T&&(F.textContent=T)}const U=h.querySelector("[data-oq-hp-offset-raw]");if(U){const T=Number.isFinite(q)?Ct(q,$.uom||"\xB0C",2):ie(b,2);U.textContent!==T&&(U.textContent=T)}const C=h.querySelector("[data-oq-hp-offset-final]");C&&C.textContent!==O&&(C.textContent=O)});const f=o.querySelector(".oq-settings-curve-shell"),g=re();if(!!f!==g)return!1;const v=!!a,S=String(A("phResponseProfile")||"")==="Custom";return v===S}function fd(e=!1){const o=Pi();return o?`
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
    `:""}function is(){return`
      <div class="oq-settings-curve-grid">
        ${se.map(e=>X(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${X("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:fd()})}
      </div>
    `}function ss(e="oq-settings-grid"){return`
      <div class="${i(e)}">
        ${Tt("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function ls(e="oq-settings-grid"){const o=[X("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),X("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${i(e)}">
        ${Tt("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${pc()?X("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):o}
      </div>
    `}function vd(e="oq-settings-grid"){const o=[X("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),X("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return o.length?`
      <div class="${i(e)}">
        ${o.join("")}
      </div>
    `:""}function co(e="",o=""){const n=String(e||"").trim().toUpperCase(),r=String(o||"").trim().toLowerCase(),a=n.split(/[^A-Z0-9]+/).filter(Boolean),s=l=>{const d=String(l||"").trim().toUpperCase();return d?n===d||n.startsWith(`${d}:`)||n.startsWith(`${d} `)||a.includes(d):!1},u={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!n||n==="\u2014"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN")return{phase:"Wachten",percent:0};if(n.includes("WAITING")||n.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(r!=="cm100"&&(n==="IDLE"||n==="CM0 - STANDBY"||n==="CM100 READY"||n==="CM100 STOPPED"||n==="GEPAUZEERD"))return{phase:"Wachten",percent:0};const c=(u[r]||[]).find(l=>l.match.some(d=>s(d)));return c||(n.includes("DONE")||n.includes("APPLIED")?{phase:"Klaar",percent:100}:n.includes("ABORT")||n.includes("FAILED")||n.includes("REFUSED")?{phase:"Afgebroken",percent:100}:r==="cm100"&&n.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function ht({taskKey:e,title:o,copy:n,subcopy:r="",status:a,statusCopy:s,progressTask:u,actions:p="",controls:c="",metrics:l="",className:d=""}){return`
      <article class="oq-settings-commissioning-card${d?` ${i(d)}`:""}" data-oq-commissioning-task="${i(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${i(o)}</h3>
            <p>${i(n)}</p>
            ${r?`<p class="oq-settings-commissioning-card-subcopy">${i(r)}</p>`:""}
          </div>
        </div>
        ${p?`<div class="oq-settings-commissioning-card-actions">${p}</div>`:""}
        ${c}
        <div class="oq-settings-quickstart-status oq-settings-quickstart-status--compact oq-settings-commissioning-card-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${i(a)}</strong>
              <p class="oq-settings-quickstart-status-copy">${i(s)}</p>
            </div>
          </div>
        </div>
        ${l?`<div class="oq-settings-grid oq-settings-commissioning-metrics">${l}</div>`:""}
      </article>
    `}function cs(e="oq-settings-grid"){return`
      <div class="${i(e)}">
        ${X("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${X("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${wd()}
      </div>
    `}function us(e="oq-settings-grid"){const o=bd();return`
      <div class="${i(e)}">
        ${X("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${o}
    `}function bd(){const e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(n=>w(n.offsetKey)&&w(n.finalKey));if(!e.length)return"";const o=n=>{const r=ze(n.offsetKey),a=br(n.rawKey,n.finalKey,n.offsetKey),s=nt(He(n.offsetKey)),u=Number.isFinite(a)&&Number.isFinite(s)?Ct(a+s,r.uom||"\xB0C",2):ie(n.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${i(n.offsetKey)}" data-oq-hp-offset-raw-key="${i(n.rawKey)}" data-oq-hp-offset-final-key="${i(n.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${i(n.label)}</strong>
            <span data-oq-hp-offset-active>${i(ie(n.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${i(`${n.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${i(Number.isFinite(a)?Ct(a,r.uom||"\xB0C",2):ie(n.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${Oo({key:n.offsetKey,value:He(n.offsetKey),meta:r,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:r.uom?`<span class="oq-helper-unit-chip">${i(r.uom)}</span>`:""})}
            </label>
            <span class="oq-settings-hp-offset-operator">=</span>
            <div class="oq-settings-hp-offset-readout oq-settings-hp-offset-final">
              <span>Na wijziging</span>
              <strong data-oq-hp-offset-final>${i(u)}</strong>
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
    `}function wr(e="oq-settings-grid"){return`
      <div class="${i(e)}">
        ${ka("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${ka("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${je("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${je("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function ps(){const e=re();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${i(Oa)}"
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
          data-select-option="${i(Fa)}"
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
    `}function wd(){if(!w("phResponseProfile"))return"";const e=String(A("phResponseProfile")||""),o=t.loadingEntities||t.busyAction==="save-phResponseProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{const s=a.value===e;return a.value==="Custom"&&s?`
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${i(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${i(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${i(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${Sa("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${Sa("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:Wo({key:"phResponseProfile",option:a.value,currentValue:e,busy:o,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return he("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",r,"oq-settings-field--span-2")}function ds(){if(!w("curveControlProfile"))return"";const e=String(A("curveControlProfile")||""),o=t.loadingEntities||t.busyAction==="save-curveControlProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>Wo({key:"curveControlProfile",option:a.value,currentValue:e,busy:o,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return he("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",r,"oq-settings-field--span-2")}function yd(){const e=(H,I=0)=>{const M=P(H);return Number.isNaN(M)?I:Math.max(0,M)},n=e("phComfortBelow",.1),r=e("phComfortAbove",.3),a=e("phKp",3e3),s=20-n,u=20+r,p=620,c=184,l=46,d=24,f=18,g=40,v=96,S=p-l-d,h=Math.min(20-1.2,s-.35),y=Math.max(20+1.2,u+.35),b=H=>l+(H-h)/Math.max(.01,y-h)*S,k=b(h),$=b(y),q=b(s),E=b(20),O=b(u),F=Math.abs(s-20)>.001,U=Math.abs(u-20)>.001,C=f+24,T=c-g,L=v-44,D=(H,I,M,x="")=>{const ce=Math.max(k+4,Math.min($-110-4,H-55)),ae=H-14,Y=L,Fe=28,ye=v-L+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${i(`${I} ${M}`)}">
          <rect class="oq-ph-concept-hit" x="${ae}" y="${Y}" width="${Fe}" height="${ye}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${H}" cy="${v}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${x?` oq-ph-concept-tooltip--${x}`:""}" transform="translate(${ce} ${L})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${i(I)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${i(M)}</text>
          </g>
        </g>
      `},_=[`M ${k.toFixed(1)} ${C.toFixed(1)}`,`L ${q.toFixed(1)} ${v.toFixed(1)}`,`L ${O.toFixed(1)} ${v.toFixed(1)}`,`L ${$.toFixed(1)} ${T.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${i(R(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${i(R(s,1,"\xB0C"))} \u2013 ${i(R(u,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${i(R(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${p} ${c}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${k.toFixed(1)}" y="${f}" width="${Math.max(20,q-k).toFixed(1)}" height="${(c-f-g).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${q.toFixed(1)}" y="${f}" width="${Math.max(20,O-q).toFixed(1)}" height="${(c-f-g).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${O.toFixed(1)}" y="${f}" width="${Math.max(20,$-O).toFixed(1)}" height="${(c-f-g).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${k}" y1="${f}" x2="${k}" y2="${c-g}" class="oq-ph-concept-axis"></line>
            <line x1="${k}" y1="${v}" x2="${$}" y2="${v}" class="oq-ph-concept-axis"></line>
            <line x1="${E}" y1="${f}" x2="${E}" y2="${c-g}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${_}" class="oq-ph-concept-curve"></path>

            ${F?`<line x1="${q}" y1="${v-12}" x2="${q}" y2="${v+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${E}" y1="${v-14}" x2="${E}" y2="${v+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${U?`<line x1="${O}" y1="${v-12}" x2="${O}" y2="${v+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${F?`<circle cx="${q}" cy="${v}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${E}" cy="${v}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${U?`<circle cx="${O}" cy="${v}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${F?D(q,"Comfort onder setpoint",R(s,1,"\xB0C"),"below"):""}
            ${D(E,"Setpoint",R(20,1,"\xB0C"),"setpoint")}
            ${U?D(O,"Comfort boven setpoint",R(u,1,"\xB0C"),"above"):""}

            <text x="${k+8}" y="${f+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${k+8}" y="${c-g-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${k}" y="${c-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${$}" y="${c-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${F?`<text x="${q-5}" y="${c-14}" text-anchor="end" class="oq-ph-concept-tick-value">${i(R(s,1,"\xB0C"))}</text>`:""}
            <text x="${E}" y="${c-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${i(R(20,1,"\xB0C"))}</text>
            ${U?`<text x="${O+5}" y="${c-14}" text-anchor="start" class="oq-ph-concept-tick-value">${i(R(u,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${i(R(s,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${i(R(s,1,"\xB0C"))} \u2013 ${i(R(u,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${i(R(u,1,"\xB0C"))}</span>
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
    `}function ms(){const e=[X("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),X("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),X("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${yd()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function Ca(e,o,n){const r=[Tt(o,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),Tt(n,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return r?`
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
    `:""}function qd(){const e=vd();return te("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${ls()}
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
      `)}function K(e){return w(e)&&N(e)}function Ke(e){return!w(e)||N(e)}function Ut(e){return w(e)?To(B(e,"None")):""}function ko(e){const o=Ut(e).trim().toLowerCase();return!!o&&o!=="geen actieve storingen"}function jo(){const e=[],o=K("compressorCyclingWarning2h")||K("compressorCyclingWarning72h")||K("alternatingCompressorStartsWarning"),n=K("compressorCyclingAlertLatched"),r=Ke("cicPollingEnabled"),a=Ke("otEnabled"),s=(p,c)=>{K(p)&&e.push({key:p,label:c})};s("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),s("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),s("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),s("lowflowFaultActive","Te lage flow"),s("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),r&&s("cicDataStale","CIC-data is verouderd"),a&&s("otLinkProblem","OpenTherm-verbinding meldt een probleem"),ko("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${Ut("hp1Failures")}`}),ko("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${Ut("hp2Failures")}`});const u=e.length;return n&&!o&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:n,cyclingAlertActive:o,cyclingAlertRecovered:n&&!o,title:u>0?"Aandacht nodig":n?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:u>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:n?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function Co(e,o="Aandacht",n="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${i(e?o:n)}</span>`}function ft({label:e,value:o,note:n="",active:r=!1}){return`
      <div class="oq-settings-monitoring-row${r?" is-warning":""}">
        <div>
          <p>${i(e)}</p>
          <strong>${i(o)}</strong>
          ${n?`<span>${i(n)}</span>`:""}
        </div>
        ${Co(r)}
      </div>
    `}function We(e){const o=P(e);return Number.isNaN(o)?"\u2014":String(Math.max(0,Math.round(o)))}function Sd(e){const o=P(e);if(Number.isNaN(o))return"Nog niet gemeten";if(o<1)return"Zojuist";if(o<60)return`${Math.round(o)} min geleden`;const n=Math.floor(o/60),r=Math.round(o%60);return`${n}u ${r}m geleden`}function Ta(e){const o=P(e);return Number.isNaN(o)||o<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(o*1e3))}function kd(e){if(!e.cyclingAlertLatched)return"";const o=K("compressorCyclingAlertAlternating"),n=We("compressorCyclingAlertHp1Peak2h"),r=We("compressorCyclingAlertHp1Peak72h"),a=w("compressorCyclingAlertHp2Peak2h")?We("compressorCyclingAlertHp2Peak2h"):"",s=w("compressorCyclingAlertHp2Peak72h")?We("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${Co(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${i(Ta("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${i(Ta("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${i(n)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${i(r)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${i(a)} starts</dd></div>`:""}
          ${s?`<div><dt>HP2 72 uur</dt><dd>${i(s)} starts</dd></div>`:""}
          ${o?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${t.entities.acknowledgeCompressorCyclingAlert?Le("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function $a(e,o){return w(`${o}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${i(e)}</p>
          <span>Laatste start: ${i(Sd(`${o}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${i(We(`${o}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${i(We(`${o}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${i(We(`${o}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${i(We(`${o}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function gs(e){const o=e.active?e.problems.map(n=>n.key).sort().join("|"):"";if(!o){t.installationMonitoringProblemSignature="";return}o!==t.installationMonitoringProblemSignature&&(t.installationMonitoringProblemSignature=o,t.installationMonitoringDetailsOpen=!0)}function Cd(){const e=jo();gs(e);const o=Ke("cicPollingEnabled"),n=Ke("otEnabled"),r=[w("lowflowFaultActive")?ft({label:"Flow",value:K("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:K("lowflowFaultActive")}):"",w("flowMismatch")?ft({label:"Flowvergelijking duo",value:K("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:K("flowMismatch")}):""].filter(Boolean).join(""),a=[w("cicDataStale")?ft({label:"CIC-data",value:o?K("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:o&&K("cicDataStale")}):"",w("otLinkProblem")?ft({label:"OpenTherm",value:n?K("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:n&&K("otLinkProblem")}):""].filter(Boolean).join(""),s=[w("hp1Failures")?ft({label:"Warmtepomp 1",value:Ut("hp1Failures"),active:ko("hp1Failures")}):"",w("hp2Failures")?ft({label:"Warmtepomp 2",value:Ut("hp2Failures"),active:ko("hp2Failures")}):""].filter(Boolean).join(""),u=P("compressorStarts2hWarningLimit"),p=P("compressorStarts72hWarningLimit"),c=K("compressorCyclingWarning2h")||K("compressorCyclingWarning72h")||K("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,l=r?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${r}</div>
      </article>
    `:"",d=s?`
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
          ${Co(e.active,"Aandacht nodig","Alles rustig")}
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
              ${Co(c)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${kd(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${$a("Warmtepomp 1","hp1")}
              ${$a("Warmtepomp 2","hp2")}
            </div>
            ${je("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(u)?"\u2014":`${Math.round(u)} starts / 2 uur`})}
            ${je("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(p)?"\u2014":`${Math.round(p)} starts / 72 uur`})}
          </article>
          ${d}
          </div>
          <div class="oq-settings-monitoring-column">
            ${l}
            ${f}
          </div>
        </div>
        </details>
      `)}function Td({status:e,running:o,resultReady:n,startDisabled:r,abortDisabled:a,applyDisabled:s,busy:u,controlsAvailable:p}){const c=String(e||"").toUpperCase(),l=c.includes("FAILED")||c.includes("REFUSED")||c.includes("ABORT"),d=c.includes("APPLIED"),f=w("hp2WaterIn")||w("hp2WaterOut")||w("hp2WaterInRaw")||w("hp2WaterOutRaw"),g=P("hpWaterCalibrationStableProgress"),v=P("hpWaterCalibrationStableRequired"),S=P("hpWaterCalibrationRemaining"),h=Math.round(P("hpWaterCalibrationPhase")),y=o&&(h===1||c.includes("MIXING")),b=o&&!y,k=300,$=60,q=Number.isFinite(S)?Math.max(0,k-S):NaN,E=Number.isFinite(q)?Math.max(0,$-q):NaN,O=y&&Number.isFinite(q)?Math.max(0,Math.min(100,q/$*100)):b&&Number.isFinite(g)&&Number.isFinite(v)&&v>0?Math.max(0,Math.min(100,g/v*100)):o&&Number.isFinite(S)?Math.max(0,Math.min(100,100-S/k*100)):n?100:0,F=n&&w("hpWaterCalibrationResultSpreadBefore")?ie("hpWaterCalibrationResultSpreadBefore",2):ie("hpWaterCalibrationSpread",2),U=y?"Water mengen":Number.isFinite(g)&&Number.isFinite(v)&&v>0?g>0?`${Math.round(Math.max(0,g))} / ${Math.round(v)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",C=n?3:o?2:1,T=d?"Offsets toegepast":n?`Meting klaar - spreiding ${F}`:o?y?`Water mengen${Number.isFinite(E)&&E>0?` - meting start over ${Math.round(E)} s`:""}`:`Meting bezig - ${Number.isFinite(S)&&S>0?`max. ${Math.round(S)} s resterend`:U}`:l?"Meting niet voltooid":"Voorbereiding",L=d?"De voorgestelde offsets zijn opgeslagen.":n?"Controleer de voorgestelde offsets en pas ze toe.":o?y?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":l?Io("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):f?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",D=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(M=>w(M.liveKey)||w(M.rawKey)||w(M.offsetKey)),_=(M,x)=>{const W=C>M;return`
        <div class="oq-settings-hp-calibration-step${W?" is-done":""}${C===M?" is-active":""}">
          <span>${W?"\u2713":M}</span>
          <strong>${i(x)}</strong>
        </div>
      `},H=M=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${i(M.label)}</span>
          <strong>${i(ie(M.liveKey,2))}</strong>
        </article>
      `,I=M=>{const x=P(M.resultRawKey),W=Number.isFinite(x)?x:br(M.rawKey,M.liveKey,M.offsetKey),G=P(M.suggestedKey),ce=Number.isFinite(W)&&Number.isFinite(G)?Ct(W+G,t.entities[M.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${i(M.label)}</th>
          <td>${i(Number.isFinite(W)?Ct(W,t.entities[M.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${i(ie(M.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${i(ie(M.suggestedKey,2))}</span></td>
          <td>${i(ce)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${_(1,"Voorbereiding")}
          ${_(2,"Meting")}
          ${_(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${n?" is-success":o?" is-active":l?" is-warning":""}">
          <div>
            <strong>${i(T)}</strong>
            <p>${i(L)}</p>
          </div>
          ${o||n?`<span>${i(o?U:"Resultaat beschikbaar")}</span>`:""}
          ${o?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${O.toFixed(0)}%"></i></div>`:""}
        </div>

        ${o?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${D.map(H).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${i(ie("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${i(ie("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${n?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${i(ie("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${i(ie("hpWaterCalibrationSupplyDelta",2))}</span>
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
                  ${D.map(I).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${p?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${bt({active:o,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:u||r,stopDisabled:u||a})}
            ${t.entities.hpWaterCalibrationApply?Le("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",u||s):""}
          </div>
        `:""}
      </div>
    `}function hs(){const e=w("boilerCvAssistEnabled")&&N("boilerCvAssistEnabled"),o=ns(),n=N("cm100Active"),r=String(o||"").trim().toUpperCase(),a=Ye(o),s=!a&&(n||r==="CM100 READY"),u=t.commissioningTaskLock==="cm100",p=t.loadingEntities||t.busyAction==="commissioningCm100Start"||t.busyAction==="commissioningCm100Stop"||u,c=!!t.pendingCommissioningCm100Start,l=p||s||a,d=p||!s,f=gt("boilerPowerTestStatus","IDLE"),g=co(f,"boiler"),v=N("boilerPowerTestActive"),S=t.loadingEntities||t.busyAction==="boilerPowerTestStart"||t.busyAction==="boilerPowerTestAbort"||t.busyAction==="boilerPowerTestApply",h=!!(t.entities.boilerPowerTestStart||t.entities.boilerPowerTestAbort||t.entities.boilerPowerTestApply),y=!!t.pendingBoilerPowerTestStart,b=t.commissioningTaskLock==="boiler",k=Ye(f),q=!J(f)&&(v||y||b||mt(f))&&!k,E=ee("boilerRatedHeatPower"),O=ee("boilerHeatPower"),F=P("boilerHeatPower"),U=F>0?O:q&&t.commissioningBoilerHeatPowerDisplay?t.commissioningBoilerHeatPowerDisplay:O;F>0&&(t.commissioningBoilerHeatPowerDisplay=O);const C=gt("flowAutotuneStatus","IDLE"),T=co(C,"autotune"),L=t.loadingEntities||t.busyAction==="flowAutotuneStart"||t.busyAction==="flowAutotuneAbort"||t.busyAction==="flowAutotuneApply",D=!!(t.entities.flowAutotuneStart||t.entities.flowAutotuneAbort||t.entities.flowAutotuneApply),_=!!t.pendingFlowAutotuneStart,H=t.commissioningTaskLock==="autotune",I=Ye(C),x=!J(C)&&(_||H||mt(C))&&!I,W=gt("airPurgeStatus","IDLE"),G=co(W,"purge"),ce=N("airPurgeActive"),ae=t.loadingEntities||t.busyAction==="airPurgeStart"||t.busyAction==="airPurgeAbort",Y=!!(t.entities.airPurgeStart||t.entities.airPurgeAbort),Fe=!!t.pendingAirPurgeStart,ye=t.commissioningTaskLock==="purge",ue=!J(W)&&(ce||Fe||ye||mt(W)),Uo=/DONE/.test(String(W||"").toUpperCase()),pe=!!(Y||t.entities.airPurgeStatus||t.entities.airPurgeReturnToAuto),Go=ee("airPurgeRemaining",{decimals:0}),It=P("airPurgePhase"),no=It===1?"Rustig":It===2?"Pulsen":It===3?"Stabiliseren":G.phase,Qe=gt("manualFlowStatus","IDLE"),ct=N("manualFlowActive"),Pe=t.loadingEntities||t.busyAction==="manualFlowStart"||t.busyAction==="manualFlowAbort",Wt=!!(t.entities.manualFlowStart||t.entities.manualFlowAbort),ut=!!t.pendingManualFlowStart,ke=t.commissioningTaskLock==="manual-flow",qe=!J(Qe)&&(ct||ut||ke||mt(Qe)),Re=gt("manualHpStatus","IDLE"),Bt=N("manualHpActive"),pt=t.loadingEntities||t.busyAction==="manualHpStart"||t.busyAction==="manualHpAbort",ro=!!(t.entities.manualHpStart||t.entities.manualHpAbort),dt=!!t.pendingManualHpStart,Ce=t.commissioningTaskLock==="manual-hp",Te=!J(Re)&&(Bt||dt||Ce||mt(Re)),Or=/SAFETY STOP/.test(String(Re||"").toUpperCase()),Fr=/STOPPING/.test(String(Re||"").toUpperCase()),De=gt("hpWaterCalibrationStatus","IDLE"),Xs=co(De,"hp-water-calibration"),Rr=N("hpWaterCalibrationActive"),ao=t.loadingEntities||t.busyAction==="hpWaterCalibrationStart"||t.busyAction==="hpWaterCalibrationAbort"||t.busyAction==="hpWaterCalibrationApply",Dr=!!(t.entities.hpWaterCalibrationStart||t.entities.hpWaterCalibrationAbort||t.entities.hpWaterCalibrationApply),io=!!t.pendingHpWaterCalibrationStart,Ie=t.commissioningTaskLock==="hp-water-calibration",fe=!J(De)&&(Rr||io||Ie||mt(De)),so=/DONE|APPLIED/.test(String(De||"").toUpperCase()),Ir=/APPLIED/.test(String(De||"").toUpperCase()),Js=ee("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),el=ee("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),Wr=/DONE|APPLIED/.test(String(f||"").toUpperCase()),Br=/DONE|APPLIED/.test(String(C||"").toUpperCase()),Qo=s?k?"Wachten op CM100":q?g.phase:Wr?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Yo=s?I?"Wachten op CM100":x?T.phase:Br?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Zo=s?ue?G.phase:Uo?"Klaar":"Klaar om te starten":"Wachten op CM100",jr=s?qe?"Actief":"Klaar om te starten":"Wachten op CM100",Vr=s?Te?Fr?"Bezig met stoppen":Or?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",_r=s?fe?Xs.phase:Ir?"Offsets toegepast":so?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Kr=!s||S||!h||x||ue||qe||Te||fe||q||H||ye||ke||Ce||Ie||y,tl=S||!(q||b||y),ol=S||Kr||!Wr||x||ue||fe,zr=!s||L||!D||q||ue||qe||Te||fe||x||b||ye||ke||Ce||Ie||_,nl=L||!(x||H||_),rl=L||zr||!Br||q||ue||fe,al=!s||ae||!Y||q||x||qe||Te||fe||ue||b||H||ke||Ce||Ie||Fe,il=ae||!(ue||ye||Fe),sl=!s||Pe||!Wt||q||x||ue||Te||fe||qe||b||H||ye||Ce||Ie||ut,ll=Pe||!(qe||ke||ut),cl=!s||pt||!ro||q||x||ue||qe||fe||Te||b||H||ye||ke||Ie||dt,ul=pt||!(Te||Ce||dt),pl=!s||ao||!Dr||q||x||ue||qe||Te||fe||b||H||ye||ke||Ce||io,dl=ao||!(fe||Ie||io),ml=ao||fe||!so||Ir;c&&s&&(t.pendingCommissioningCm100Start=!1),u&&(s||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(r))&&(t.commissioningTaskLock=""),y&&(v||J(f))&&(t.pendingBoilerPowerTestStart=!1),b&&J(f)&&(t.commissioningTaskLock=""),_&&J(C)&&(t.pendingFlowAutotuneStart=!1),H&&J(C)&&(t.commissioningTaskLock=""),Fe&&(ce||J(W))&&(t.pendingAirPurgeStart=!1),ye&&J(W)&&(t.commissioningTaskLock=""),ut&&(ct||J(Qe))&&(t.pendingManualFlowStart=!1),ke&&(ct||J(Qe))&&(t.commissioningTaskLock=""),dt&&(Bt||J(Re))&&(t.pendingManualHpStart=!1),Ce&&(Bt||J(Re))&&(t.commissioningTaskLock=""),io&&(Rr||J(De))&&(t.pendingHpWaterCalibrationStart=!1),Ie&&J(De)&&(t.commissioningTaskLock="");const gl=a?"Wachten op CM100":o,hl=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":s?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",fl=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:_r,available:!!(Dr||t.entities.hpWaterCalibrationStatus),openDisabled:!s,cardMarkup:ht({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:_r,statusCopy:fe?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":so?"Controleer de voorgestelde offsets voordat je ze toepast.":s?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:Td({status:De,running:fe,resultReady:so,startDisabled:pl,abortDisabled:dl,applyDisabled:ml,busy:ao,controlsAvailable:!!(t.entities.hpWaterCalibrationStart||t.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:jr,available:!!(Wt||t.entities.manualFlowStatus),openDisabled:!s,cardMarkup:ht({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:jr,statusCopy:qe?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":s?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${je("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${t.entities.manualFlowStart||t.entities.manualFlowAbort?bt({active:qe,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:Pe||sl,stopDisabled:Pe||ll}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${Z("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",ee("flowSelected"),"oq-settings-field--compact")}
            ${Z("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",ee("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${t.entities.manualFlowApplyHeating?Le("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",Pe):""}
          ${t.entities.manualFlowApplyCooling?Le("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",Pe):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:Vr,available:!!(ro||t.entities.manualHpStatus),openDisabled:!s,cardMarkup:ht({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:Vr,statusCopy:Te?Fr?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":Or?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":s?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${t.entities.manualHpStart||t.entities.manualHpAbort?bt({active:Te,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:pt||cl,stopDisabled:pt||ul}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${Tt("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${je("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${w("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${Tt("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${je("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${Z("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",ee("flowSelected"),"oq-settings-field--compact")}
              ${Z("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",ya("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${w("hp2Compressor")?Z("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",ya("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${Z("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",A("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${Z("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",To(B("hp1Failures","None")),"oq-settings-field--compact")}
              ${w("hp2Failures")?Z("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",To(B("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:Yo,available:!0,openDisabled:Ye(Yo),cardMarkup:ht({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:Yo,statusCopy:I?"Wacht totdat CM100 actief is voordat je autotune start.":x?"Autotune draait op dit moment.":s?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${t.entities.flowAutotuneStart||t.entities.flowAutotuneAbort?bt({active:x,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:L||zr,stopDisabled:L||nl}):""}
            ${t.entities.flowAutotuneApply?Le("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",L||rl):""}
          `,metrics:`
            ${Z("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",Js,"oq-settings-field--compact")}
            ${Z("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",el,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:Qo,available:e,openDisabled:Ye(Qo),cardMarkup:ht({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${i(E)}`,status:Qo,statusCopy:k?"Wacht totdat CM100 actief is voordat je de boiler-test start.":q?"De boiler-test draait op dit moment.":s?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${t.entities.boilerPowerTestStart||t.entities.boilerPowerTestAbort?bt({active:q,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:S||Kr,stopDisabled:S||tl}):""}
            ${t.entities.boilerPowerTestApply?Le("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",S||ol):""}
          `,metrics:`
            ${Z("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",U)}
            ${Z("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",ee("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:Zo,available:pe,openDisabled:Ye(Zo),cardMarkup:ht({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:Zo,statusCopy:ue?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":s?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${t.entities.airPurgeStart||t.entities.airPurgeAbort?bt({active:ue,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:ae||al,stopDisabled:ae||il}):""}
          `,metrics:`
            ${Z("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",Go,"oq-settings-field--compact")}
            ${Z("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",no,"oq-settings-field--compact")}
            ${Z("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",ee("flowSelected"),"oq-settings-field--compact")}
            ${ud("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(vl=>vl.available);return{cm100Status:gl,cm100StartDisabled:l,cm100StopDisabled:d,serviceStatusCopy:hl,tasks:fl}}function $d(e){return`
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
    `}function Ad(){const e=hs();return te("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${i(e.cm100Status)}</strong>
              <p>${i(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${t.entities.commissioningCm100Start?Le("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${t.entities.commissioningCm100Stop?Le("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(o=>$d(o)).join("")}
          </div>
        </div>
      `)}function Ed(){const e=String(t.systemModal||"").replace(/^service-task-/,""),n=hs().tasks.find(r=>r.key===e);return n?`
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
    `:""}function Aa(){if(!w("hpGeneration"))return"";const e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:ha,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:ha,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:wp,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},o=t.entities.hpGeneration||{},n=String(A("hpGeneration")||""),r=Ft(o),a=t.loadingEntities||t.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${r.map(s=>{const u=e[s]||{};return Wo({key:"hpGeneration",option:s,currentValue:n,busy:a,copy:u.copy||"",image:u.image||"",imageAlt:u.alt||"",infoTitle:u.infoTitle||"",infoCopy:u.infoCopy||"",infoId:`hp-generation-${String(s).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function Pd(){const e=Jt(),o=t.entities.hpGeneration||{},n=w("hpGeneration")&&Ft(o).length>0;return!e&&!n?"":te("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
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
      `)}function fs(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!w("boilerCvAssistEnabled"))return"";const o=N("boilerCvAssistEnabled"),n=w("boilerRatedHeatPower"),r=ze("boilerRatedHeatPower"),a=He("boilerRatedHeatPower"),s=t.loadingEntities||t.busyAction==="switch-boilerCvAssistEnabled",p=n?Oo({key:"boilerRatedHeatPower",value:a,meta:r,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${i("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,c=o&&n?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${i(e)}">
          ${he("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${Bo("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",o,s)}
              </div>
            `,"oq-settings-field--compact")}

          ${o?he("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${p}
              </div>
            `,o&&n?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",c):""}
        </div>
      `}function Md(){if(!w("boilerCvAssistEnabled"))return"";const e=N("boilerCvAssistEnabled");return te("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",fs())}function Ld(){const e=t.complete===!0?"Afgerond":t.complete===!1?"Open":"Laden...",o=t.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":t.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return te("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
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
      `)}function Hd(){if(!w("trendHistoryEnabled"))return"";const e=N("trendHistoryEnabled"),o=e&&N("trendHistoryFlashEnabled");return te("Trends","Trendopslag","Bewaar de laatste 7 dagen in werkgeheugen en optioneel tot 30 dagen in flash.",`
        <div class="oq-settings-grid">
          ${qa("trendHistoryEnabled","Trendopslag","Schakel de trendopslag voor de grafieken in of uit.","OpenQuatt bewaart live trenddata in het werkgeheugen zodat je de grafieken kunt blijven gebruiken.","OpenQuatt bewaart geen trenddata en verbergt de Trends-tab.")}
          ${e?qa("trendHistoryFlashEnabled","Trendhistorie opslaan in flash","Bewaart trenddata ook na herstart of OTA.","Trendhistorie wordt bewaard in flash zodat je later verder kunt terugkijken.","Trendhistorie blijft alleen in het werkgeheugen en is na herstart weg."):""}
          ${o?pd("trendHistoryFlush","Trendhistorie nu opslaan","Schrijf de huidige trendbuffer direct weg naar flash.","Nu opslaan","flush-trend-history","",{disabled:!o,note:"Handig voor een OTA of een geplande herstart."}):""}
          ${o?ld():""}
        </div>
      `)}function Nd(){const e=re()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${ds()}
          </div>
          <div class="oq-settings-curve-shell">
            ${vs()}
          </div>
          ${is()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${cs()}
          ${ms()}
        </div>
      `;return te("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${ss()}
        ${ps()}
        ${e}
      `)}function xd(){return te("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",us())}function Od(){const e=w("otEnabled"),o=w("cicPollingEnabled")||w("cicFeedUrl"),n=w("cicCompatibilityMode"),r=w("otLinkProblem")||w("cicDataStale")||w("cicJsonFeedOk");if(!e&&!o&&!n&&!r)return"";const a=Ke("cicPollingEnabled"),s=Ke("otEnabled"),u=({label:S,value:h,active:y=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${y?" is-warning":""}">
        <dt>${i(S)}</dt>
        <dd>${i(h)}</dd>
      </div>
    `,p=(S,h,y="Actief",b="Normaal",k={})=>{if(!w(S))return"";const $=K(S);return u({label:h,value:$?y:b,active:k.warningWhenActive?$:!1})},c=(S,h,y={})=>{const b=y.fallbackKey||"";return!w(S)&&!(b&&w(b))?"":u({label:h,value:ee(w(S)?S:b,y)})},l=(S,h)=>{const y=h.filter(Boolean).join("");return y?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${i(S)}</h4>
          <dl>${y}</dl>
        </article>
      `:""},d=w("cicFeedUrl")?`
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
            value="${i(String(He("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${t.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",f=l("OpenTherm",[w("otLinkProblem")?u({label:"OT-link",value:s?K("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:s&&K("otLinkProblem")}):"",p("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),p("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),c("otControlSetpoint","Control setpoint"),c("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),c("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),g=l("CIC-feed",[w("cicJsonFeedOk")?u({label:"JSON-feed",value:a?K("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!K("cicJsonFeedOk")}):"",w("cicDataStale")?u({label:"Data",value:a?K("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&K("cicDataStale")}):"",p("cicChEnabled","CH-vraag","Actief","Normaal"),p("cicCoolingEnabled","Koeling","Actief","Normaal"),c("cicControlSetpoint","Control setpoint"),c("cicRoomSetpoint","Room setpoint"),c("cicRoomTemp","Room temperature"),c("cicFlowrate","Flow"),c("cicLastSuccessAge","Laatste succes")]),v=f||g?`
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
          ${tn("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${tn("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${tn("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${d}
        </div>
        ${v}
      `)}function Fd(){if(!Mn.some(C=>w(C)))return"";const o=Ke("cicPollingEnabled"),n=Ke("otEnabled"),r=(C={})=>C.haValueKey||(C.haKeys||[]).find(T=>!/valid$/i.test(T))||"",a=(C={})=>C.haValidKey||(C.haKeys||[]).find(T=>/valid$/i.test(T))||"",s=(C="",T="")=>!!C&&!!T&&w(C)&&w(T)&&K(T),u=(C={})=>s(r(C),a(C)),p=(C,T={})=>C==="CIC"?o:C==="OT thermostat"?n:C==="HA input"?u(T):C==="CIC or HA input"?o||u(T):C==="Flowmeter HP2"?w("hp2Flow"):C==="Local aggregate HP1/HP2"?w("flowLocal")||w("hp2Flow"):!0,c=(C,T={})=>C==="CIC"&&!o?"CIC-polling staat uit":C==="OT thermostat"&&!n?"OpenTherm staat uit":C==="HA input"&&!u(T)?"HA-bron ongeldig":C==="CIC or HA input"&&!o&&!u(T)?"CIC en HA ontbreken":C==="Flowmeter HP2"&&!w("hp2Flow")?"HP2-flow ontbreekt":C==="Local aggregate HP1/HP2"&&!w("flowLocal")&&!w("hp2Flow")?"Lokale flow ontbreekt":"",l=(C,T="Actief",L="Normaal")=>w(C)?K(C)?T:L:"",d=(C,T={})=>{const L=String(C||"").trim();return L?T.optionLabels?.[L]||Ae(L):""},f=(C,T={})=>{const L=String(A(C)||"").trim();return L?d(L,T):""},g=C=>{const T=Io(C,"");return T?Ae(T):""},v=(...C)=>C.find(T=>String(T||"").trim())||"",S=()=>{const C=f("waterSupplySource");if(String(A("waterSupplySource")||"")==="Local"&&w("localWaterSupplyTempSource")){const T=f("localWaterSupplyTempSource");return T?`${C} - ${T}`:C}return C},h=()=>{const C=String(A("flowSource")||"").trim();if(C==="Outdoor unit"){if(w("qFlowSource")){const T=String(A("qFlowSource")||"").trim(),L=String(A("hpGeneration")||"").trim();return T==="Local"||T==="Auto"&&L==="V1"?T==="Auto"?"Lokaal (auto)":"Lokaal":v(f("outdoorUnitFlowMode"),T==="Auto"?"Buitenunit (auto)":"Buitenunit")}return v(f("outdoorUnitFlowMode"),"Quatt-flow")}return Ae(C)},y=()=>{const C=String(A("outsideTempSource")||"").trim();if(C!=="Auto")return Ae(C);const T=P("outsideTempLocalAggregated"),L=P("outsideTempHa"),D=!Number.isNaN(T),_=w("outsideTempHaValid")?K("outsideTempHaValid")&&!Number.isNaN(L):!Number.isNaN(L);return D&&_?L<=T?"HA-invoer":"Buitenunit":_?"HA-invoer":D?"Buitenunit":"Auto"},b=({label:C,value:T="",key:L="",active:D=!1})=>{const _=T||(L?ee(L):"");return _?`
        <div class="oq-settings-source-row${D?" is-warning":""}">
          <span>${i(C)}</span>
          <strong>${i(_)}</strong>
        </div>
      `:""},k=({label:C="HA input",valueKey:T="",validKey:L="",value:D=""})=>s(T,L)?[b({label:C,key:T,value:D}),b({label:"HA status",value:"Geldig"})]:[],$=(C,T={})=>{if(!w(C))return{markup:"",warning:""};const L=t.entities[C]||{},D=String(A(C)||""),H=Ft(L).filter(G=>p(G,T)),I=D&&!p(D,T),W=(I&&!(D==="HA input")&&!H.includes(D)?[D,...H]:H).map(G=>{const ce=!p(G,T),ae=d(G,T),Y=ce?`${ae} (${c(G,T)||"niet beschikbaar"})`:ae;return`<option value="${i(G)}" ${G===D?"selected":""}>${i(Y)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${i(T.label||"Bron")}</span>
              ${T.infoCopy?Do(T.infoId||C,T.infoTitle||T.label||"Bron",T.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${i(C)}" ${t.loadingEntities?"disabled":""}>
              ${W}
            </select>
          </label>
        `,warning:I?`Huidige bron niet beschikbaar: ${c(D,T)}`:""}},q=({key:C,title:T,select:L,secondarySelect:D=null,secondarySelects:_=null,rows:H=[]})=>{const I=L&&L.when!==!1?$(L.key,L):{markup:"",warning:""},x=(Array.isArray(_)?_:D?[D]:[]).filter(Y=>Y&&Y.when!==!1).map(Y=>$(Y.key,Y)).filter(Y=>Y.markup),W=x.map(Y=>Y.markup).join(""),G=x.map(Y=>Y.warning).find(Boolean)||"",ce=H.filter(Boolean).join(""),ae=`${I.markup}${W}`;return!ae&&!ce?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${i(C||L.key)}">
          <div class="oq-settings-source-card-head">
            <h4>${i(T)}</h4>
          </div>
          ${ae?`
            <div class="oq-settings-source-controls">
              ${ae}
            </div>
          `:""}
          ${I.warning||G?`
            <p class="oq-settings-source-warning">${i(I.warning||G)}</p>
          `:""}
          ${ce?`<div class="oq-settings-source-rows">${ce}</div>`:""}
        </article>
      `},E=String(A("waterSupplySource")||""),O=String(A("flowSource")||""),F=String(A("qFlowSource")||""),U=[q({key:"room-temperature",title:"Kamertemperatuur",select:{key:"roomTempSource",label:"Kamertemperatuur bron",haKeys:["roomTempHa","roomTempHaValid"]},rows:[b({label:"Actieve waarde",key:"roomTemp"}),b({label:"Gebruikte bron",value:g("roomTempEffectiveSource")}),o?b({label:"CIC",key:"cicRoomTemp"}):"",n?b({label:"OpenTherm",key:"otRoomTemp"}):"",...k({valueKey:"roomTempHa",validKey:"roomTempHaValid"})]}),q({key:"room-setpoint",title:"Kamer setpoint",select:{key:"roomSetpointSource",label:"Setpoint bron",haKeys:["roomSetpointHa","roomSetpointHaValid"]},rows:[b({label:"Actieve waarde",key:"roomSetpoint"}),b({label:"Gebruikte bron",value:g("roomSetpointEffectiveSource")}),o?b({label:"CIC",key:"cicRoomSetpoint"}):"",n?b({label:"OpenTherm",key:"otRoomSetpoint"}):"",...k({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"})]}),q({key:"water-supply",title:"Aanvoertemperatuur",select:{key:"waterSupplySource",label:"Aanvoer bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:E==="Local"&&w("localWaterSupplyTempSource")},rows:[b({label:"Actieve waarde",key:"supplyTemp"}),b({label:"Gebruikte bron",value:S()}),b({label:"Lokaal",key:"waterSupplyTempEsp"}),b({label:"DS18B20",key:"waterSupplyTempDs18b20"}),o?b({label:"CIC",key:"cicWaterSupplyTemp"}):"",...k({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),q({key:"flow-source",title:"Flow",select:{key:"flowSource",label:"Flow bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:o||O==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Quatt-flow bron",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:O==="Outdoor unit"&&w("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Flowmeterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:O==="Outdoor unit"&&w("outdoorUnitFlowMode")&&(!w("qFlowSource")||F!=="Local")}],rows:[b({label:"Actieve waarde",key:"flowSelected"}),b({label:"Gebruikte bron",value:h()}),b({label:"Lokaal",key:"controllerFlow"}),b({label:"Gecombineerd",key:"flowLocal"}),b({label:"HP1",key:"hp1Flow"}),b({label:"HP2",key:"hp2Flow"}),o?b({label:"CIC",key:"cicFlowrate"}):""]}),q({key:"outside-temperature",title:"Buitentemperatuur",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],infoId:"outsideTempSource-auto-info",infoCopy:s("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn zowel buitenunit als HA-invoer geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een van beide geldig, dan wordt die gebruikt.":"Auto gebruikt de geldige buitentemperatuur van de buitenunit."},rows:[b({label:"Actieve waarde",key:"outsideTempSelected"}),b({label:"Gebruikte bron",value:y()}),b({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...k({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"})]}),q({key:"cooling-enable",title:"Koeltoestemming",select:{key:"coolingEnableSource",label:"Koeltoestemming bron",haKeys:["coolingEnableHa","coolingEnableHaValid"]},rows:[b({label:"Actieve waarde",value:l("coolingEnableSelected","Actief","Niet actief")}),b({label:"Gebruikte bron",value:g("coolingEnableEffectiveSource")}),b({label:"Handmatig",value:l("manualCoolingEnable","Aan","Uit")}),o?b({label:"CIC",value:l("cicCoolingEnabled","Actief","Normaal")}):"",...k({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:l("coolingEnableHa","Actief","Normaal")})]})].filter(Boolean);return U.length?te("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${U.join("")}</div>`):""}function Rd(){return te("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${i(nr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${i(rr())}</p>
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
                <strong class="oq-settings-quickstart-status-value">${i(yr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${i(qr())}</p>
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
      `)}function Dd(){return te("Integratie","MQTT","Stel hier de broker in voor de experimentele, compacte publish-only telemetry-export van OpenQuatt.",`
        <div class="oq-settings-quickstart-status" data-oq-mqtt-item="mqtt">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">MQTT-status</p>
              <strong class="oq-settings-quickstart-status-value">${i(ur())}</strong>
              <p class="oq-settings-quickstart-status-copy">${i(pr())}</p>
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
      `,'<span class="oq-settings-section-badge oq-settings-section-badge--experimental">Experimenteel</span>')}function yr(){const e=t.apiSecurityStatus;return e?e.pending_restart?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function qr(){const e=t.apiSecurityStatus;return e?e.pending_restart?e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.":"API-encryptie wordt geladen."}function Id(){const e=t.settingsBackupBusy,o=Xt.length,n=yt.length;return te("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
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
      `)}function Wd(){const e=t.settingsBackupBusy;return`
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
    `}function Bd(){const e=t.settingsBackupDraft;if(!e)return"";const o=e.summary||Di(e),n=String(e.source?.installation||e.source?.device||"Onbekend"),r=Jt(),a=String(e.source?.firmware_version||"Onbekend"),s=String(e.source?.firmware_channel||"").trim()||"Onbekend",u=String(e.source?.topology||"").trim()||"Onbekend",p=ge(),c=typeof we=="function"?we():"",l=u!=="Onbekend"&&c&&u!==c,d=n!=="Onbekend"&&n!==r,f=l||d?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":o.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return`
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
              <span class="oq-helper-modal-subvalue">Topo: ${i(u)} \xB7 Firmware: ${i(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${i(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${i(c)} \xB7 Firmware: ${i(p||"Onbekend")}</span>
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
                    ${g.rows.map(v=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${i(v.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${i(v.label)}</strong>
                          <span>${i(v.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${i(v.status)}">
                            <span>Backup</span>
                            <strong>${i(v.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${i(v.status)}">
                            <span>Nu</span>
                            <strong>${i(v.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${o.unknown||o.requiredMissing||d?" oq-settings-action-note--warning":""}">${i(f)}</p>
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${i(t.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.settingsBackupBusy?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${t.settingsBackupBusy?"disabled":""}>${t.settingsBackupBusy?"Herstellen...":"Herstellen"}</button>
          </div>
        </section>
      </div>
    `}function jd(){const e=to(),o=ui(),n=t.busyAction==="restartAction";return te("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          <div class="oq-settings-system-row" data-oq-diagnostics-row="uptime">
            <span class="oq-settings-system-row-label">Uptime</span>
            <strong class="oq-settings-system-row-value">${i(jn())}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="ip">
            <span class="oq-settings-system-row-label">IP-adres</span>
            <strong class="oq-settings-system-row-value">${i(Vn())}</strong>
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
              <strong class="oq-settings-system-row-value">${i(Sp())}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
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
            <strong class="oq-settings-system-row-value">${i(vi())}</strong>
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
      `)}function Vd(){const e=[Ca("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),Ca("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return te("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${X("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${w("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}function _d(){return te("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",wr())}function Kd(){return wr("oq-settings-grid oq-settings-grid--modal")}function zd(){const e=[X("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),je("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${V("coolingDemandMax")} max`}),X("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),X("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."),X("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."),X("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),o=w("coolingWithoutDewPointMode"),n=[w("coolingGuardMode")?Z("coolingGuardMode","Actieve beveiligingsroute","Laat zien of koeling nu via dauwpunt of via de fallback wordt begrensd.",B("coolingGuardMode","Onbekend")):"",w("coolingFallbackNightMinOutdoorTemp")?Z("coolingFallbackNightMinOutdoorTemp","Nachtminimum buitentemperatuur","Minimum buitentemperatuur van de afgelopen nacht. Warme nachten maken fallback-cooling conservatiever of blokkeren die helemaal.",B("coolingFallbackNightMinOutdoorTemp","\u2014")):"",w("coolingFallbackMinSupplyTemp")?Z("coolingFallbackMinSupplyTemp","Fallback minimum watertemperatuur","De conservatieve ondergrens die OpenQuatt gebruikt als er geen dauwpuntbron beschikbaar is en fallback is toegestaan.",B("coolingFallbackMinSupplyTemp","\u2014")):"",w("coolingEffectiveMinSupplyTemp")?Z("coolingEffectiveMinSupplyTemp","Actieve minimum ondergrens","De ondergrens die de koeling nu daadwerkelijk gebruikt: dauwpunt plus marge, of de fallback-ondergrens.",B("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean);if(!e.length&&!o&&!n.length)return"";const r={"Dew point required":"Blokkeer koeling zodra er geen dauwpuntbron beschikbaar is.","Allow without dew point":"Sta een conservatieve fallback toe op basis van buitentemperatuur en de minimum buitentemperatuur van de afgelopen nacht."};return te("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${e.length?`
          <div class="oq-settings-grid">
            ${e.join("")}
          </div>
        `:""}
        ${o||n.length?`
          <div class="oq-settings-grid">
            ${o?dd("coolingWithoutDewPointMode","Koeling zonder dauwpuntbeveiliging","Kies of OpenQuatt zonder dauwpuntbron volledig moet blokkeren, of een conservatieve fallback mag gebruiken.",r,"oq-settings-field--span-2"):""}
            ${o?`
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline">
              <summary>Fallback-regel bekijken</summary>
              <div class="oq-settings-callout-body">
                <p>Onder de 20\xB0C buiten blijft fallback-cooling uit. Daarboven gebruikt OpenQuatt 19/20/21/22\xB0C als minimum water, met extra correctie voor warme nachten.</p>
                <div class="oq-settings-rule-groups">
                  <section class="oq-settings-rule-group">
                    <h4>Buitentemperatuur</h4>
                    <div class="oq-settings-rule-table">
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Onder 20\xB0C</span>
                        <span class="oq-settings-rule-value">Uit</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">20-24\xB0C</span>
                        <span class="oq-settings-rule-value">Min. water 19\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">24-28\xB0C</span>
                        <span class="oq-settings-rule-value">Min. water 20\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">28-32\xB0C</span>
                        <span class="oq-settings-rule-value">Min. water 21\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Boven 32\xB0C</span>
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
                        <span class="oq-settings-rule-value">+1\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">19-20\xB0C</span>
                        <span class="oq-settings-rule-value">+2\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Vanaf 20\xB0C</span>
                        <span class="oq-settings-rule-value">Fallback uit</span>
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
      `)}function vs(){const n={top:22,right:18,bottom:38,left:34},r=560-n.left-n.right,a=240-n.top-n.bottom,s=se[0].outdoor,u=se[se.length-1].outdoor,p=v=>n.left+(v-s)/(u-s)*r,c=v=>n.top+(70-v)/50*a,l=[20,30,40,50,60,70].map(v=>{const S=c(v);return`
          <line x1="${n.left}" y1="${S}" x2="${560-n.right}" y2="${S}" class="oq-helper-curve-grid" />
          <text x="8" y="${S+4}" class="oq-helper-curve-axis-label">${v}\xB0</text>
        `}).join(""),d=se.map(v=>`
        <text x="${p(v.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${i(v.label)}</text>
      `).join(""),f=se.map(v=>`${p(v.outdoor)},${c(ve(v.key,A(v.key)))}`).join(" "),g=se.map(v=>{const S=ve(v.key,A(v.key));return`
          <g>
            <circle
              cx="${p(v.outdoor)}"
              cy="${c(S)}"
              r="7"
              class="oq-helper-curve-point ${t.draggingCurveKey===v.key?"is-dragging":""}"
              data-curve-key="${i(v.key)}"
            />
            <text x="${p(v.outdoor)}" y="${c(S)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${S.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${l}
          <polyline points="${f}" class="oq-helper-curve-line" />
          ${g}
          ${d}
        </svg>
      </div>
    `}function bs(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${Aa()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Ge("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${Aa()}
        ${lt()}
      </section>
    `}function Ud(){return!t.quickStartModalOpen||t.loadingEntities||t.complete===null||t.complete&&t.quickStartModalMode!=="generation"?"":t.quickStartModalMode==="generation"?`
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
            ${bs("picker")}
          </section>
        </div>
      `:`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${i(am().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">\xD7</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${om()}
            ${im()}
          </div>
        </section>
      </div>
    `}function ws(){return t.root?t.root.querySelector("[data-oq-quickstart-scroller]"):null}function Gd(){const e=ws();return e?{stepId:String(e.dataset.oqQuickstartStep||""),scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:vr(e)}:null}function Qd(e){if(!e)return;const o=ws();if(!o||String(o.dataset.oqQuickstartStep||"")!==e.stepId)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}const n=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,n)}function Ea(e,o=!0){if(!e)return;const n=Number(t.quickStartScrollRestoreToken||0)+1;t.quickStartScrollRestoreToken=n;const r=()=>{t.quickStartScrollRestoreToken!==n||!t.quickStartModalOpen||Qd(e)};if(o){window.requestAnimationFrame(r);return}r()}function Pa(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Ge("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${ps()}
        ${ss("oq-settings-grid oq-settings-grid--quickstart")}
        ${lt()}
      </section>
    `}function Yd(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Ge("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${fs("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${lt()}
      </section>
    `}function Zd(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Ge("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${ls("oq-settings-grid oq-settings-grid--quickstart")}
        ${lt()}
      </section>
    `}function Xd(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Ge("heating"))}</p>
        <h2 class="oq-helper-section-title">${i(re()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${i(re()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${re()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${ds()}</div>
            <div class="oq-settings-curve-shell">
              ${vs()}
            </div>
            ${is()}
          `:`
            ${cs("oq-settings-grid oq-settings-grid--quickstart")}
            ${ms()}
          `}
        ${lt()}
      </section>
    `}function Jd(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Ge("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${us("oq-settings-grid oq-settings-grid--quickstart")}
        ${lt()}
      </section>
    `}function em(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Ge("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${wr("oq-settings-grid oq-settings-grid--quickstart")}
        ${lt()}
      </section>
    `}function tm(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${i(Ge("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${sm()}
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
    `}function om(){return t.currentStep==="generation"?bs():t.currentStep==="boiler"?w("boilerCvAssistEnabled")?Yd():Pa():t.currentStep==="flow"?Zd():t.currentStep==="heating"?Xd():t.currentStep==="water"?Jd():t.currentStep==="silent"?em():t.currentStep==="confirm"?tm():Pa()}function st(){return Ao.filter(e=>!e.optionalEntity||w(e.optionalEntity))}function Ge(e){const o=st().findIndex(n=>n.id===e);return`Stap ${Math.max(0,o)+1}`}function nm(e){const o=Vo(),n=e===o,r=t.complete===!0||e<o;return{tone:n?"current":r?"done":"upcoming",label:n?"Actief":r?"Gereed":"Volgend",current:n}}function rm(e=!1){return st().map((o,n)=>{const r=nm(n);return`
        <button
          class="oq-helper-field oq-helper-field--step${e?" oq-helper-field--compact":""} is-${r.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${i(o.id)}"
          aria-current="${r.current?"step":"false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>0${n+1}. ${i(o.title)}</h3>
            <span class="oq-helper-field-step-state">${r.label}</span>
          </div>
          <p>${i(o.copy)}</p>
        </button>
      `}).join("")}function am(){const e=st();return e.find(o=>o.id===t.currentStep)||e[0]||Ao[0]}function Vo(){return Math.max(0,st().findIndex(e=>e.id===t.currentStep))}function Ma(e){const o=st(),n=Math.min(o.length-1,Math.max(0,Vo()+e));t.currentStep=o[n]?.id||Ao[0].id}function lt(){const e=Vo(),o=st(),n=e>0?o[e-1]:null,r=e<o.length-1?o[e+1]:null;return`
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${e+1} van ${o.length}</strong>
          <span>${i(r?`Hierna: ${r.title}`:"Je bent bij de laatste stap")}</span>
        </div>
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${n?"":"disabled"}>
            Vorige
          </button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="next-step" ${r?"":"disabled"}>
            ${r?"Volgende":"Laatste stap"}
          </button>
        </div>
      </div>
    `}function im(){const e=Vo(),o=st();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${o.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${rm(!0)}
        </div>
        ${t.controlNotice?`<p class="oq-helper-notice">${i(t.controlNotice)}</p>`:""}
        ${t.controlError?`<p class="oq-helper-error">${i(t.controlError)}</p>`:""}
      </section>
    `}function sm(){const e=Ae(B("hpGeneration")),o=re()?"Stooklijn":"Power House",n=g=>Ae(B(g)),r=[["Quatt Hybrid-versie",n("hpGeneration")]],a=re()?[["Regelprofiel",n("curveControlProfile")],["Aanvoer bij -20\xB0C",V("curveM20")],["Aanvoer bij -10\xB0C",V("curveM10")],["Aanvoer bij 0\xB0C",V("curve0")],["Aanvoer bij 5\xB0C",V("curve5")],["Aanvoer bij 10\xB0C",V("curve10")],["Aanvoer bij 15\xB0C",V("curve15")],["Fallback-aanvoer",V("curveFallbackSupply")]]:[["Profiel",n("phResponseProfile")],["Rated maximum house power",V("housePower")],["Maximum heating outdoor temperature",V("houseOutdoorMax")],["Temperatuurreactie",V("phKp")],["Comfort onder setpoint",V("phComfortBelow")],["Comfort boven setpoint",V("phComfortAbove")]],s=String(A("flowControlMode")||""),u=[["Flowregeling",s==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],s==="Manual PWM"?["Vaste pompstand",V("manualIpwm")]:["Gewenste flow",V("flowSetpoint")]],p=w("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",N("boilerCvAssistEnabled")?"Ja":"Nee"],...N("boilerCvAssistEnabled")?[["Boiler rated heat power",V("boilerRatedHeatPower")]]:[]]:[],c=[["Maximale watertemperatuur",V("maxWater")]],l=[["Start stille uren",cn(A("silentStartTime"))||"\u2014"],["Einde stille uren",cn(A("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",V("silentMax")],["Maximaal niveau overdag",V("dayMax")]],d=g=>`
      <div class="oq-helper-review-list">
        ${g.filter(v=>v&&v[1]).map(([v,S])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${i(v)}</span>
                <strong class="oq-helper-review-value">${i(S)}</strong>
              </div>
            `).join("")}
      </div>
    `,f=(g,v,S="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${i(g)}</h3>
        ${S?`<p class="oq-helper-review-summary"><strong>${i(S)}</strong></p>`:""}
        ${d(v)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        <div class="oq-helper-review-column">
          ${f("Quatt Hybrid-versie",r,e)}
          ${f("Verwarmingsstrategie",a,o)}
          ${f("Watertemperatuur",c)}
        </div>
        <div class="oq-helper-review-column">
          ${f("Flowregeling",u)}
          ${p.length?f("CV-ketel / boiler",p):""}
          ${f("Stille uren",l)}
        </div>
      </div>
    `}function lm({label:e,value:o,tone:n,note:r,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${i(n)}${a?" oq-overview-stat--status":""}">
        <p>${i(e)}</p>
        <strong>${i(o)}</strong>
        <span>${i(r)}</span>
      </article>
    `}function _o(e,o=!1){return e.map(n=>lm({...n,value:Object.prototype.hasOwnProperty.call(n,"key")?$e(n.key):n.value,status:o})).join("")}function Sr(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${i(e)}</h3>
      </div>
    `}function ys(){const e=jo();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${i(me(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${i(e.title)}</strong>
          <span>${i(e.problems.map(o=>o.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function qs({className:e,title:o,copy:n,body:r,signature:a=""}){const s=a?` data-render-signature="${i(a)}"`:"";return`
      <section class="${i(e)}"${s}>
        ${o?`<div class="oq-overview-system-copy"><h3>${i(o)}</h3><p>${i(n)}</p></div>`:""}
        ${r}
      </section>
    `}function Ss(e,o){return o?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function cm(e,o){const n=o?"active":"neutral",r=Ss(e,o);return`<span class="oq-overview-chip oq-overview-chip--${i(n)}" data-oq-bind="panel-status">${i(r)}</span>`}function um(e){return`
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
    `}function ks(e,o,n,r){return`${n?um(r):""}${cm(e,o)}`}function pm(e,o,n,r,a){if(!e)return;const s=me({mode:o,running:n,warningActive:r,failureText:a});e.dataset.renderSignature!==s&&(Ve(e,ks(o,n,r,a)),e.dataset.renderSignature=s)}function vn(e,o,n=""){return`
      <div class="oq-overview-row">
        <span>${i(e)}</span>
        <strong>${i(n||B(o))}</strong>
      </div>
    `}function dm(e,o,n="blue",r=""){return`
      <article class="oq-overview-metric oq-overview-metric--${i(n)}">
        <span>${i(e)}</span>
        <strong>${i(o)}</strong>
        ${r?`<p>${i(r)}</p>`:""}
      </article>
    `}function mm(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}function R(e,o,n=""){const r=Number(e);return Number.isNaN(r)?"\u2014":`${r.toFixed(o)}${n?` ${n}`:""}`}function gm(e){if(!Number.isFinite(e)||e<0)return"\u2014";const o=Math.floor(e),n=Math.floor(o/1440),r=Math.floor(o%1440/60),a=o%60;return n>0?`${n}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function hm(e){const n=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!n)return Number.NaN;const r=Number(n[1]),a=Number(n[2]);return Number.isNaN(r)||Number.isNaN(a)||r<0||r>23||a<0||a>59?Number.NaN:r*60+a}function fm(e){const o=hm(B("timeNowHhmm",""));if(!Number.isFinite(o))return"";const n=Math.round(e),r=((o-n)%1440+1440)%1440,a=Math.floor(r/60),s=r%60;return`${String(a).padStart(2,"0")}:${String(s).padStart(2,"0")}`}function vm(e,o){const n=Math.max(0,(Number(o)-Number(e))/6e4),r=gm(n),a=w("timeValid")&&N("timeValid")?fm(n):"";return a?{value:a,note:`${r} geleden`}:{value:`${r} geleden`,note:"Geen tijdsync"}}function bm(e){const o=Number(e);return Number.isNaN(o)?"\u2014":`${o>0?"+":o<0?"-":""}${Math.abs(o).toFixed(0)} W`}function Cs(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>w(e))||""}function wm(){return["hp1WaterIn","hp2WaterIn"].find(e=>w(e))||""}function Ts(e=B("controlModeLabel","")){const o=String(e||"").toLowerCase();return o.includes("cm5")||o.includes("cooling")||o.includes("koeling")}function Rt(){return Ts()}function $s(e,o){const n=String(e||"").trim().toLowerCase();return n==="waiting for room request"||n==="wacht op kamervraag"?!0:o?!1:n==="flow too low"||n==="flow te laag"||n==="flow unavailable"}function As(){return Rt()?"Koeling":re()?"Stooklijn":"Power House"}function ym(){const e=["phouseReq","strategyRequestedPower"];for(const o of e){const n=P(o);if(!Number.isNaN(n))return n}return Number.NaN}function Es(){const e=ym(),o=P("phouseHouse"),n=P("totalHeat"),r=P("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(o)?Number.NaN:e-o;let s="Nog aan het opbouwen",u="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(r)&&e>r+150?(s="Capaciteit begrenst",u="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(n)&&n<e-250?(s="Levert minder dan gevraagd",u="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(n)&&n>e+250?(s="Levert meer dan gevraagd",u="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(n)&&(s="In balans",u="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:R(e,0,"W"),houseText:R(o,0,"W"),correctionText:bm(a),capacityText:$e("hpCapacity"),statusTitle:s,statusCopy:u}}function Ps(){const e=P("curveSupplyTarget"),o=P("supplyTemp"),n=Cs(),r=n?P(n):Number.NaN,a=Number.isNaN(e)||Number.isNaN(o)?Number.NaN:o-e,s=!!n&&Number.isNaN(r);let u="Stuurt op buitentemperatuur",p="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return s?(u="Fallback actief",p="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(u="Nog onder doel",p="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(u="Boven doel",p="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(u="Dicht bij doel",p="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:$e("curveSupplyTarget"),supplyText:$e("supplyTemp"),deltaText:mm(a),capacityText:$e("hpCapacity"),statusTitle:u,statusCopy:p}}function Ms(){const e=P("supplyTemp"),o=B("coolingGuardMode",""),n=B("coolingFallbackNightMinOutdoorTemp","\u2014"),r=P("coolingSupplyError"),a=P("coolingDemandRaw"),s=N("coolingPermitted"),u=N("coolingRequestActive"),p=B("coolingBlockReason","Onbekend"),c=rs(p),l=$s(p,u);let d="Wacht op koelvraag",f="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return l?(d="Wacht op koelvraag",f="Koeling staat aan en wacht nog op actieve koelvraag vanuit de kamerregeling."):s?u?!Number.isNaN(a)&&a<=0?(d="Houdt doel vast",f="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(r)&&r>1?(d="Trekt aanvoer omlaag",f="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(r)&&r>.2?(d="Benadert koeldoel",f="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(r)||(d="Koelt rustig door",f="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(d="Koeling gereed",f="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(d="Koeling geblokkeerd",f=`Blokkade: ${c}.`),{targetText:$e("coolingSupplyTarget"),supplyText:$e("supplyTemp"),safeFloorText:$e("coolingEffectiveMinSupplyTemp"),guardMode:o,fallbackNightMin:n,demandText:$e("coolingDemandRaw"),statusTitle:d,statusCopy:f,permitted:s,requestActive:u,blockReason:c,waitingForRoomRequest:l}}function bn(){if(Rt()){const o=Ms(),n=o.guardMode.toLowerCase();return{title:"Koelregeling",copy:"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:o.targetText,focusCopy:o.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:o.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:n.includes("fallback")?"Fallback ondergrens":"Veilige aanvoergrens",value:o.safeFloorText,tone:"blue",note:n.includes("fallback")?`Conservatieve ondergrens zonder dauwpuntmeting. Nachtminimum: ${o.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:o.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(re()){const o=Ps();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:o.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:o.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:o.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:o.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}const e=Es();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function Ls(e){return qs({className:"oq-overview-system",title:e.title,copy:e.copy,signature:me(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${i(e.focusLabel)}</span>
            <strong>${i(e.focusValue)}</strong>
            <p>${i(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(o=>dm(o.label,o.value,o.tone,o.note)).join("")}
        </div>
      `})}function qm(){if(!N("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(Rt()){const r=Ms(),a=r.waitingForRoomRequest?"neutral":r.permitted?r.statusTitle==="Koelt rustig door"||r.statusTitle==="Houdt temperatuur vast"?"green":r.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:r.statusTitle,tone:a}}if(Ym())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};const o=(re()?Ps():Es()).statusTitle;return{label:"Regeling nu",value:o,tone:o==="In balans"||o==="Dicht bij doel"?"green":o==="Nog aan het opbouwen"||o==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function Sm(){return N("openquattEnabled")?Rt()?N("coolingPermitted")?N("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:B("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:N("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:N("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function Hs(e,o){const n=qm(),r=Sm();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:o,tone:"orange",note:"actieve modus"},{label:"Regeling",value:n.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:r.value,tone:"orange",note:"actieve randvoorwaarde"}]}function Ns(e,o){const n=Hs(e,o);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${i(me(n))}">
        ${Sr("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${_o(n,!0)}
        </div>
      </section>
    `}function xs(){const e=Rt();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function km(){const e=N("openquattEnabled"),o=A("openquattResumeAt"),n=ar(o),r=(t.loadingEntities||t.entitySyncInFlight)&&!w("openquattResumeAt"),a=N("manualCoolingEnable"),s=String(A("silentModeOverride")||"Schedule"),u=!N("coolingPermitted"),p=N("coolingRequestActive"),c=Ts(),l=B("coolingBlockReason",""),d=$s(l,p);let f="Uit",g="Koeling staat uit.";a&&c?(f="Actief",g="Koeling draait nu."):a&&d?(f="Aan",g="Koeling staat aan en wacht op koelvraag."):a&&u?(f="Geblokkeerd",g=rs(l||"Koeling wacht nog op veilige condities.")):a&&p?(f="Start bijna",g="Er is koelvraag. Koeling start zodra dat kan."):a&&(f="Aan",g="Koeling staat aan en wacht op koelvraag.");let v="Uit",S="Stille modus staat uit.",h="neutral";return s==="On"?(v="Aan",S="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",h="orange"):s==="Schedule"&&(v="Schema",N("silentActive")?(S="Stille modus staat nu aan via het tijdvenster.",h="violet"):S="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":n?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[r?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:n?"Hervat automatisch":"Hervatten",value:n?ir(o,!0):"Handmatig",tone:n?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:f,copy:g,buttonLabel:a?"Zet uit":"Zet aan",nextState:a?"off":"on",tone:a?c?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:v,copy:S,tone:h,kind:"select",selectedOption:s,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(y=>w(y.key))}function Cm(e=[]){return e.length?`
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
    `:""}function vt({className:e,action:o,label:n,busy:r=!1,loading:a=!1,attrs:s=""}){return`
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
    `}function Tm(e){if(e.kind==="openquatt-control"){const o=t.busyAction==="openquatt-regulation",n=(t.loadingEntities||t.entitySyncInFlight)&&!w("openquattResumeAt");return N("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${vt({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:o})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${vt({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:o})}
            ${vt(n?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:ar()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){const o=t.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(n=>vt({className:`oq-overview-controlpanel-segment${e.selectedOption===n.value?" is-selected":""}`,action:"select-overview-control-option",label:n.label,busy:o,attrs:`data-control-key="${i(e.key)}" data-control-option="${i(n.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${vt({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:t.busyAction===`switch-${e.key}`,attrs:`data-control-key="${i(e.key)}" data-control-state="${i(e.nextState)}"`})}
      </div>
    `}function Os(){const e=km();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${Sr("Bediening")}
        ${e.map(o=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${i(o.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${i(o.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${i(o.tone)}">${i(o.status)}</strong>
            </div>
            <p>${i(o.copy)}</p>
            ${Cm(o.meta)}
            ${Tm(o)}
          </article>
        `).join("")}
      </section>
    `:""}function $m(e){const o=B("controlModeLabel");return`
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
              ${Sr("Kerncijfers")}
              <div class="oq-overview-top">
                ${_o(xs())}
              </div>
            </section>
            ${Ns(e,o)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${i(Bi())}">
            ${Os()}
          </aside>
        </div>
      </section>
    `}function Fs(){const e=Cs(),o=wm();return Rt()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...o?[{label:"Retourtemperatuur",key:o}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function Rs(){const e=Fs();return qs({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:me(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(o=>vn(o.label,o.key,o.value||"")).join("")}
        </div>
      `})}const La=360;function Oe(){const e=Nn(t.trendWindowHours||qt);return e!==t.trendWindowHours&&xn(e),e}function Ds(e=Oe()){return Math.max(1,Number(e)||24)*60*60*1e3}function Am(e=Oe()){const o=Number(e)||24;return o>=72&&o%24===0?`${o/24}d`:`${o}u`}function kr(e=Oe()){const o=Number(e)||24;if(o>=72&&o%24===0){const n=o/24;return`${n} ${n===1?"dag":"dagen"}`}return`${o} uur`}function on(e){if(!Number.isFinite(e))return"\u2014";const o=new Date(e);if(Number.isNaN(o.getTime()))return"\u2014";const n={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(o)}catch{return o.toLocaleString("nl-NL",n)}}function Em(e){const o=String(e||"").trim().split("|");if(o.length<5)return null;const n=Number(o[0]);if(!Number.isFinite(n))return null;const r=a=>{const s=Number(a);return Number.isFinite(s)?s:null};return{t:n,outside:r(o[1]),supply:r(o[2]),room:o.length>=8?r(o[3]):null,roomSetpoint:o.length>=8?r(o[4]):null,flow:o.length>=8?r(o[5]):null,input:o.length>=8?r(o[6]):r(o[3]),output:o.length>=8?r(o[7]):r(o[4])}}function wn(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}function nn(e=Oe()){return typeof window>"u"||!window.__OQ_DEV_TREND_MOCKS__||typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples!="function"?[]:window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(e)}function Is(){const e=Ds(),o=String(t.trendHistoryRaw||"").trim();if(!o)return wn()?nn():[];const n=o.split(/\r?\n/).map(Em).filter(Boolean),r=n.length?n[n.length-1].t:Number.NaN,a=Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:Number.isFinite(r)?r:Number.NaN;if(!Number.isFinite(a))return n.length?n.slice(-La):nn();const s=Math.max(0,a-e),u=n.filter(p=>p.t>=s).slice(-La);return u.length?u:wn()?nn(windowHours):[]}function Ws(){const e=Oe(),o=kr(e),n=Is(),r=wn()&&n.length===0;return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${o}.`,tone:"orange",samples:n,mock:r,windowHours:e,series:[{id:"outside",sampleKey:"outside",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${o}.`,tone:"green",samples:n,mock:r,windowHours:e,series:[{id:"input",sampleKey:"input",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",label:"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${o}.`,tone:"slate",samples:n,mock:r,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",derive:a=>{const s=Number(a?.input),u=Number(a?.output);return!Number.isFinite(s)||!Number.isFinite(u)||s<=0?Number.NaN:u/s}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${o}.`,tone:"blue",samples:n,mock:r,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${o}.`,tone:"sky",samples:n,mock:r,windowHours:e,series:[{id:"flow",sampleKey:"flow",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function Pm(e){const o=e.samples[e.samples.length-1]||null;return me({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:o?.t||0,trendSignature:t.trendHistorySignature||"",latestValues:o?[o.outside,o.supply,o.room,o.roomSetpoint,o.flow,o.input,o.output]:[]})}function Gt(e,o){if(!e||!o)return Number.NaN;const n=typeof e.derive=="function"?e.derive(o):o?.[e.sampleKey],r=Number(n);return Number.isFinite(r)?r:Number.NaN}function Mm(e,o){const n=[];return e.forEach(r=>{o.forEach(a=>{const s=Gt(a,r);Number.isFinite(s)&&n.push(s)})}),n.length?{min:Math.min(...n),max:Math.max(...n)}:{min:0,max:1}}function Lm(e){if(!Number.isFinite(e)||e<=0)return 1;const o=Math.floor(Math.log10(e)),n=e/10**o;let r;return n<=1?r=1:n<=2?r=2:n<=5?r=5:r=10,r*10**o}function Hm(e,o){const n=Number.isFinite(e?.min)?e.min:0,r=Number.isFinite(e?.max)?e.max:1,a=Math.max(r-n,1),s=Array.isArray(o)?o.map(g=>Number(g?.axisMin)).find(g=>Number.isFinite(g)):Number.NaN,u=Array.isArray(o)?o.map(g=>Number(g?.axisMax)).find(g=>Number.isFinite(g)):Number.NaN,p=Array.isArray(o)?o.map(g=>Number(g?.axisTickStep)).find(g=>Number.isFinite(g)&&g>0):Number.NaN,c=Math.max(1,Number.isFinite(p)?p:Lm(a/4)),l=[];if(Number.isFinite(s)||Number.isFinite(u)){const g=Number.isFinite(s)?s:0,v=Number.isFinite(u)?u:Math.ceil(r/c)*c,S=Math.floor(g/c)*c,h=Math.ceil(v/c)*c;for(let y=S;y<=h+c*.5;y+=c)l.push(y)}else{const g=a/c,v=g<=1.8?3:g<=4.25?5:7,S=Math.floor(v/2),h=(n+r)/2,y=Math.round(h/c)*c;for(let b=-S;b<=S;b+=1)l.push(y+b*c)}const d=l[0],f=l[l.length-1];return{ticks:l,axisMin:d,axisMax:f,axisDecimals:0}}function Bs(e,o,n={}){const r=Number(n.windowHours),a=Number.isFinite(r)?r:Oe(),s=Ds(a),u=640,p=220,c=46,l=18,d=18,f=34,g=u-c-l,v=p-d-f,S=e[e.length-1],h=!!n.mockData,y=h?s:Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:S?S.t:0,b=h?0:y-s,k=Math.max(y-b,1),$=k,q=Mm(e,o),E=q.min===q.max?{min:q.min-1,max:q.max+1}:{min:q.min-Math.max((q.max-q.min)*.12,1),max:q.max+Math.max((q.max-q.min)*.12,1)},O=Hm(q,o),F=H=>c+(H-b)/k*g,U=H=>{if(!Number.isFinite(H))return Number.NaN;const I=(H-E.min)/Math.max(E.max-E.min,1);return d+(1-Math.min(1,Math.max(0,I)))*v},C=[0,.5,1].map(H=>c+g*H),T=O.ticks.map(H=>U(H)),L=O.ticks.map((H,I)=>({x:c-10,y:T[I],text:R(H,O.axisDecimals)})),D=e.map(H=>{const I=F(H.t),M=o.map(x=>{const W=Gt(x,H);return Number.isFinite(W)?{seriesId:x.id||x.sampleKey||x.label,tone:x.tone,label:x.label,decimals:x.decimals,unit:x.unit,value:W,x:I,y:U(W)}:null});return{sample:H,x:I,values:M}}),_=o.flatMap(H=>{const I=[];let M=[];return e.forEach(x=>{const W=Gt(H,x);if(!Number.isFinite(W)){M.length&&(I.push(M),M=[]);return}M.push({x:F(x.t),y:U(W)})}),M.length&&I.push(M),I.map(x=>x.length<2?{tone:H.tone,points:x,path:""}:{tone:H.tone,points:x,path:x.map((W,G)=>`${G===0?"M":"L"} ${W.x.toFixed(1)} ${W.y.toFixed(1)}`).join(" ")})});return{width:u,height:p,left:c,right:l,top:d,bottom:f,plotWidth:g,plotHeight:v,latest:S,uptimeMs:$,endTime:y,startTime:b,span:k,windowHours:a,range:q,displayRange:E,gridXs:C,gridYs:T,yAxisLabels:L,points:D,tracks:_,series:o}}function Cr(){return me({windowHours:Oe(),trendSignature:t.trendHistorySignature||"",trendNowMs:Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:0})}function Nm(e){return Ws().find(o=>o.id===e)||null}function xm(e,o){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let n=0,r=Math.abs(e.points[0].x-o);return e.points.forEach((a,s)=>{const u=Math.abs(a.x-o);u<r&&(n=s,r=u)}),n}function Om(e,o){const n=Gt(e,o);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${i(e.tone)}">
        <span>${i(e.label)}</span>
        <strong>${i(R(n,e.decimals,e.unit))}</strong>
      </div>
    `}function Fm(e,o,n=!1,r=Oe()){const a=Bs(e,o,{mockData:n,windowHours:r}),s=kr(r),u=on(a.startTime),p=on(a.startTime+a.span/2),c=on(a.endTime),l=a.tracks.flatMap(d=>{if(d.points.length<2){const f=d.points[0];return f?`
          <circle
            cx="${f.x.toFixed(1)}"
            cy="${f.y.toFixed(1)}"
            r="3.8"
            class="oq-overview-trend-dot oq-overview-trend-dot--${i(d.tone)}"
          ></circle>
        `:[]}return`
        <path d="${d.path}" class="oq-overview-trend-line oq-overview-trend-line--${i(d.tone)}"></path>
        <circle
          cx="${d.points[d.points.length-1].x.toFixed(1)}"
          cy="${d.points[d.points.length-1].y.toFixed(1)}"
          r="3.8"
          class="oq-overview-trend-dot oq-overview-trend-dot--${i(d.tone)}"
        ></circle>
      `}).join("");return`
      <svg class="oq-overview-trend-chart" viewBox="0 0 ${a.width} ${a.height}" role="img" aria-label="Trendgrafiek van de laatste ${s}">
        <rect x="0" y="0" width="${a.width}" height="${a.height}" rx="20" class="oq-overview-trend-chart-bg"></rect>
        ${a.gridXs.map(d=>`<line x1="${d.toFixed(1)}" y1="${a.top}" x2="${d.toFixed(1)}" y2="${a.height-a.bottom}" class="oq-overview-trend-grid oq-overview-trend-grid--vertical"></line>`).join("")}
        ${a.gridYs.map(d=>`<line x1="${a.left}" y1="${d.toFixed(1)}" x2="${a.width-a.right}" y2="${d.toFixed(1)}" class="oq-overview-trend-grid oq-overview-trend-grid--horizontal"></line>`).join("")}
        ${l}
        ${a.yAxisLabels.map(d=>`
          <text
            x="${d.x}"
            y="${d.y.toFixed(1)}"
            class="oq-overview-trend-axis-label oq-overview-trend-axis-label--y"
            text-anchor="end"
            dominant-baseline="middle"
          >${i(d.text)}</text>
        `).join("")}
        <g class="oq-overview-trend-hover-layer" data-oq-trend-hover-layer hidden>
          <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.height-a.bottom}" class="oq-overview-trend-hover-line"></line>
          ${o.map(d=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${i(d.tone)}"
              data-oq-trend-hover-dot="${i(d.id||d.sampleKey||d.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${i(u)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${i(p)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${i(c)}</text>
      </svg>
    `}function Rm(e){const o=e.samples[e.samples.length-1]||null,n=kr(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${i(e.tone)}" data-oq-trend-card="${i(e.id)}" data-render-signature="${i(Pm(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${i(n)}</p>
            <h4>${i(e.title)}</h4>
            <p>${i(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(r=>Om(r,o)).join("")}
            </div>
          </div>
        </div>
        ${Fm(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function Tr(){const e=Ws();return`
      <section class="oq-overview-trends" aria-label="Trends" data-render-signature="${i(Cr())}">
        <div class="oq-overview-trends-grid">
          ${e.map(Rm).join("")}
        </div>
      </section>
    `}function Dm(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function Im(){const e=Oe(),o=Xa();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${vo.map(n=>`
          ${(()=>{const a=n>168&&!o,s=n/24,u=a?`Beschikbaar zodra er minimaal ${s} dagen flashhistorie is opgeslagen.`:"";return`
          <button
            class="oq-overview-controlpanel-segment${e===n?" is-selected":""}${a?" is-disabled":""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${n}"
            aria-pressed="${e===n?"true":"false"}"
            aria-disabled="${a?"true":"false"}"
            ${a?"disabled":""}
            ${u?`title="${i(u)}"`:""}
          >${i(Am(n))}</button>
        `})()}
        `).join("")}
      </div>
    `}function Wm(){const e="overview-trends-history",o=t.settingsInfoOpen===e;return`
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
          <p>${i("Standaard bewaren we trenddata 7 dagen in het werkgeheugen. Met flashopslag blijft historie ook na herstart of OTA beschikbaar, tot 30 dagen terug.")}</p>
        </div>
      </div>
    `}function Bm(){const e=xt(),n=Is().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${i(t.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${Wm()}
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
                  ${Im()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&n?Tr():Dm()}
        </div>
      </section>
    `}function jm(){if(!t.root||t.appView!=="trends")return!1;const e=t.root.querySelector(".oq-overview-board");if(!e)return!1;const o=e.querySelector(".oq-overview-trends");return o?(Ze(o,Cr(),Tr()),Ar(e),!0):!1}function $r(e){if(!e)return null;const o=e.__oqTrendHoverNodes;if(o&&o.chart&&o.hoverLayer&&o.hoverPanel)return o;const n=e.querySelector("[data-oq-trend-hover-layer]"),r={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:n,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:n?n.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return n&&n.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{r.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=r,r}function Ha(e,o,n,r=$r(e)){if(!e||!o||!Array.isArray(o.points)||o.points.length===0)return;const a=Math.max(0,Math.min(o.points.length-1,n)),s=o.points[a];if(!s||!r||!r.chart||!r.hoverLayer||!r.hoverPanel||!r.hoverTime||!r.hoverNote||!r.hoverValues)return;const u=String(a);if(!r.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===u)return;const p=vm(s.sample.t,o.endTime);r.hoverPanel.hidden=!1,r.hoverLayer.removeAttribute("hidden"),r.hoverTime.textContent=p.value,r.hoverNote.textContent=p.note,r.hoverLine&&(r.hoverLine.setAttribute("x1",s.x.toFixed(1)),r.hoverLine.setAttribute("x2",s.x.toFixed(1)));const c=[];o.series.forEach(l=>{const d=Gt(l,s.sample),f=l.id||l.sampleKey||l.label,g=r.hoverDots[f];if(!Number.isFinite(d)){g&&g.setAttribute("display","none");return}const v=s.values.find(S=>S.seriesId===f);g&&v&&(g.removeAttribute("display"),g.setAttribute("cx",v.x.toFixed(1)),g.setAttribute("cy",v.y.toFixed(1))),c.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${i(l.tone)}">
          <span>${i(l.label)}</span>
          <strong>${i(R(d,l.decimals,l.unit))}</strong>
        </div>
      `)}),r.hoverValues.innerHTML=c.join(""),e.dataset.oqTrendHoverIndex=u}function Vm(e){if(!e)return;const o=$r(e);o?.hoverPanel&&(o.hoverPanel.hidden=!0),o?.hoverLayer&&o.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function Ar(e=t.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(n=>{const r=n.dataset.renderSignature||"";if(n.__oqTrendBoundSignature===r)return;typeof n.__oqTrendCleanup=="function"&&n.__oqTrendCleanup(),n.__oqTrendHoverNodes=null,n.__oqTrendBoundSignature=r;const a=n.querySelector(".oq-overview-trend-chart");if(!a)return;const s=Nm(n.dataset.oqTrendCard);if(!s)return;const u=Bs(s.samples,s.series,{mockData:s.mock});n.__oqTrendModel=u;const p=$r(n);let c=0,l=null;const d=()=>{const v=l;l=null,c=0;const S=a.getBoundingClientRect();if(!S.width||!S.height)return;const h=Number(v?.clientX);if(!Number.isFinite(h)){Ha(n,u,u.points.length-1,p);return}const b=Math.min(S.width,Math.max(0,h-S.left))/S.width*u.width,k=xm(u,b);Ha(n,u,k,p)},f=v=>{l=v,c||(c=window.requestAnimationFrame(d))},g=()=>{c&&(window.cancelAnimationFrame(c),c=0),l=null,Vm(n)};a.addEventListener("pointermove",f),a.addEventListener("pointerenter",f),a.addEventListener("pointerleave",g),a.addEventListener("focus",f),a.addEventListener("blur",g),a.addEventListener("touchstart",f,{passive:!0}),n.__oqTrendCleanup=()=>{c&&(window.cancelAnimationFrame(c),c=0),l=null,a.removeEventListener("pointermove",f),a.removeEventListener("pointerenter",f),a.removeEventListener("pointerleave",g),a.removeEventListener("focus",f),a.removeEventListener("blur",g),a.removeEventListener("touchstart",f)}})}function _m([e,o]){const n=zi(o);if(!w(o)&&Number.isNaN(n))return"";const r=Ki(o)?$e(o):B(o);return`
      <div class="oq-overview-energy-row">
        <span>${i(e)}</span>
        <strong>${i(r)}</strong>
      </div>
    `}function Km(e){const o=e.rows.map(_m).filter(Boolean).join("");return o?`
      <section class="oq-overview-energy-group">
        <h5>${i(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${o}
        </div>
      </section>
    `:""}function zm(e){const o=e.groups.map(Km).filter(Boolean).join("");return o?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${i(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${i(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${o}
        </div>
      </section>
    `:""}function Um(e){const o=e.categories.map(zm).filter(Boolean).join("");return o?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${i(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${i(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${o}
        </div>
      </article>
    `:""}function Er(){const e=Cl.map(Um).filter(Boolean),o=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:o}}function js(e=Er()){return me(e)}function Vs(e=Er()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${i(js(e))}">
        <div class="${i(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}function Gm(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${i(t.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Verbruik en rendement</h2>
            <p class="oq-helper-section-copy">Bekijk hier verbruik, warmte of koeling en rendement voor nu, vandaag en cumulatief.</p>
          </div>
          </div>
          ${Vs()}
        </div>
      </section>
    `}function Qm(){if(!t.root||t.appView!=="energy")return!1;const e=t.root.querySelector(".oq-overview-board"),o=e?e.querySelector(".oq-overview-energy"):null;if(!e||!o)return!1;const n=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==n&&(e.className=n);const r=Er();return Ze(o,js(r),Vs(r))||!0}function Pr(e,o,n){const r=zs(B(o.mode,"Unknown")),a=N(o.defrost),s=To(B(o.failures,"None")),u=r==="Verwarmen"||r==="Koelen"||a;return{mode:r,defrostActive:a,failures:s,running:u,thermalKey:r==="Koelen"?o.cooling:o.heat,schematic:rg(e,o,n,r,a,s,u)}}function _s(e,o=null){return`<h3>${i(e)}</h3>${o?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${i(o.layout)}">${ug(o.layout==="equal"?"minus":"plus")}<span>${i(o.label)}</span></button>`:""}`}function yn(e,o,n,r){return`<div class="oq-overview-hp-status">${ks(e,o,n,r)}</div>`}function Ym(){return B("controlModeLabel","").toLowerCase().includes("standby")}function Zm(e,o){return o?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function Ks(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${i(e.map(o=>`${o.title} ${Zm(zs(B(o.keys.mode,"Unknown")),N(o.keys.defrost))}`).join(", "))}</p>`}function Xm(e){const o=t.entities[e];if(!o)return"Positie: \xE2\u20AC\u201D";const n=P(e);return Number.isNaN(n)?`Positie: ${B(e)}`:`Positie: ${R(n,0,o.uom||"")}`}function Jm(e){return w(e)?`Positie: ${N(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \xE2\u20AC\u201D"}function zs(e){const o=String(e||"").trim();return!o||o==="Unknown"?"Onbekend":o==="Standby"?"Stand-by":o==="Heating"?"Verwarmen":o==="Cooling"?"Koelen":o}function To(e){const o=String(e||"").trim();return!o||o==="None"?"Geen actieve storingen":o}function qn(e,o,n,r=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${i(o)}" data-oq-pipe="${i(e)}">
        <path class="oq-hp-tech-pipe-base" d="${i(n)}" />
        <path class="oq-hp-tech-pipe-core" d="${i(n)}" />
        ${r?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${i(a)}" d="${i(n)}" />`:""}
      </g>
    `}function eg(e,o,n){return e==="temperature"?`
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
    `}function Qt({bind:e,modifier:o,x:n,y:r,width:a,kicker:s,detail:u,detailBind:p="",icon:c="heater",direction:l="down"}){const f=n+26,g=r+22,v=p?` data-oq-bind="${i(p)}"`:"";let S="";if(l==="up"){const h=n+Math.round(a*.52);S=`M${h-6} ${r} L${h} ${r-8} L${h+6} ${r} Z`}else if(l==="left"){const h=r+Math.round(22);S=`M${n} ${h-6} L${n-8} ${h} L${n} ${h+6} Z`}else if(l==="right"){const h=r+Math.round(22);S=`M${n+a} ${h-6} L${n+a+8} ${h} L${n+a} ${h+6} Z`}else{const h=n+Math.round(a*.52);S=`M${h-6} ${r+44} L${h} ${r+44+8} L${h+6} ${r+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${i(o)}"
        data-oq-bind="${i(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${n}" y="${r}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${f}" cy="${g}" r="11.5" />
        ${eg(c,f,g)}
        <text class="oq-hp-tech-tooltip-kicker" x="${n+48}" y="${r+16}">${i(s)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${n+48}" y="${r+32}"${v}>${i(u)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${S}" />
      </g>
    `}function Sn({bind:e,x:o,y:n,width:r,value:a,label:s,ariaLabel:u="",align:p="start"}){const c=u||`${s} temperatuur ${a}`,l=p==="end",d=p==="center",f=d?"middle":l?"end":"start",g=d?o+r/2:l?o+r-2:o+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${i(e)}-reading"
        data-oq-tooltip-target="${i(e)}"
        tabindex="0"
        aria-label="${i(c)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${o}" y="${n}" width="${r}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${g}" y="${n+13}" text-anchor="${f}" data-oq-bind="${i(e)}-value">${i(a)}</text>
      </g>
    `}function tg({tooltip:e,...o}){return`${Sn(o)}${Qt({bind:o.bind,...e})}`}function og({bind:e,ariaLabel:o,x:n,y:r,width:a,height:s,rx:u,tooltip:p}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${i(e)}-trigger" data-oq-tooltip-target="${i(e)}" tabindex="0" aria-label="${i(o)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${n}" y="${r}" width="${a}" height="${s}" rx="${u}" />
      </g>
      ${Qt({bind:e,...p})}
    `}function rn({bind:e,className:o,active:n,ariaLabel:r,attrs:a="",activeClass:s="is-active",content:u,tooltip:p}){return`
      <g class="${[o,n&&s?s:""].filter(Boolean).join(" ")}" data-oq-bind="${i(e)}" data-oq-tooltip-target="${i(e)}" tabindex="${n?"0":"-1"}" aria-label="${i(r)}" ${a}>
        ${u}
      </g>
      ${Qt({bind:e,...p})}
    `}function ng({label:e,value:o,bind:n,ariaLabel:r="",valueBind:a="",labelBind:s="",labelMarkup:u=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${r?` aria-label="${i(r)}"`:""}${s?` data-oq-bind="${i(s)}"`:""}>${u||i(e)}</span>
        <strong${a?` data-oq-bind="${i(a)}"`:""}>${i(o)}</strong>
      </div>
    `}function Me(e,o,n=""){const r=P(e);return Number.isNaN(r)?B(e):R(r,o,Vt(e,n))}function rg(e,o,n,r,a,s,u){const p=P(o.freq),c=Number.isNaN(p)?"\u2014":String(Math.round(p)),l=P(o.power),d=P(o.heat),f=P(o.cooling),g=P(o.flow),v=r==="Koelen"?f:d,S=u||!Number.isNaN(p)&&p>0||!Number.isNaN(l)&&l>80||!Number.isNaN(d)&&d>150,h=!Number.isNaN(g)&&g>0,y=Ss(r,S),b=s==="Geen actieve storingen"?"Geen storingen":s,k=b!=="Geen storingen",$=a?"Actief":"Uit",q=Me(o.waterOut,1,"\xB0C"),E=Me(o.waterIn,1,"\xB0C"),O=Number.isNaN(g)?B(o.flow):R(g,0,Vt(o.flow,"L/h")),F=Me(o.evaporatorCoilTemp,1,"\xB0C"),U=Me(o.innerCoilTemp,1,"\xB0C"),C=Me(o.outsideTemp,1,"\xB0C"),T=Me(o.condenserPressure,1,"bar"),L=Me(o.dischargeTemp,1,"\xB0C"),D=Me(o.evaporatorPressure,1,"bar"),_=Me(o.returnTemp,1,"\xB0C"),H=N(o.bottomPlate),I=N(o.crankcase),M=Xm(o.eev),x=Jm(o.fourWay),W=R(l,0,"W"),G=R(v,0,"W"),ce=r==="Koelen"?!Number.isNaN(l)&&l>=5&&!Number.isNaN(f)?f/l:Number.NaN:P(o.cop),ae=R(ce,1),Y=r==="Koelen"?"COP (EER)":"COP",Fe=r==="Koelen"?"Koelafgifte":"Warmteafgifte",ye=r==="Koelen"?"afgegeven koeling":"afgegeven warmte",Dt=P(o.fanSpeed),ue=!Number.isNaN(Dt)&&Dt>0,Uo=Number.isNaN(Dt)?"\u2014":`${Math.round(Dt)} rpm`,pe=a||r==="Koelen",Go=pe?"Verdamper":"Condensor",It=pe?"Condensor":"Verdamper",no=pe?"return":"supply",Qe=pe?"supply":"return",ct=360,Pe=384,Wt=214,ut="M278 220 C278 228 273 234 266 234",ke="M278 220 C278 228 283 234 290 234",Nr="M290 234 C284 234 279 240 278 248",qe="M266 234 C272 234 277 240 278 248",Re=pe?`M290 234 H${ct} Q372 ${Wt} ${Pe} 234 H436 V134 H480`:"M266 234 H180 V134 H164",Bt=pe?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${Pe} Q372 ${Wt} ${ct} 234 H290`,pt="M296 150 H278 V220",ro="M278 248 V268 H372 V150 H356",dt=pe?"M480 294 H337":"M164 294 H315",Ce=pe?"M315 294 H164":"M337 294 H480",xr=["oq-hp-schematic-board",`oq-hp-schematic-board--${n}`,S?"is-running":"",h?"is-water-flowing":"",ue?"is-fan-running":"",pe?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:xr,statusText:y,failureText:b,warningActive:k,waterFlowActive:h,defrostActive:a,defrostText:$,mode:r,reverseCycle:pe,compressorFreqText:`${c} Hz`,leftExchangerTitle:Go,rightExchangerTitle:It,supplyLineTone:no,returnLineTone:Qe,waterOutText:q,waterInText:E,flowText:O,evaporatorCoilTempText:F,innerCoilTempText:U,outsideTempText:C,dischargePressureText:T,dischargeTempText:L,suctionPressureText:D,suctionTempText:_,bottomPlateActive:H,crankcaseActive:I,eevPositionText:M,fourWayPositionText:x,powerText:W,heatText:G,heatLabel:Fe,heatDescription:ye,efficiencyText:ae,efficiencyLabel:Y,fanRpmText:Uo,hotgasValveHeat:ut,hotgasValveCool:ke,suctionValveHeat:Nr,suctionValveCool:qe,leftValveTone:pe?"suction":"hotgas",rightValveTone:pe?"hotgas":"suction",pipes:{supply:{tone:no,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:Qe,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:pt,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:Re,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:dt,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:Ce,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:Bt,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:ro,animated:!0,flowVariant:"default"}}}}function ag(e){const o=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),n=`${o}-cond-water-heat`,r=`${o}-cond-water-cool`,a=`${o}-cond-ref`,s=e.reverseCycle?r:n,u=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],p=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],c=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
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

            ${Object.entries(e.pipes).map(([l,d])=>qn(l.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`),d.tone,d.d,d.animated,d.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${p.map(tg).join("")}
            ${rn({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${rn({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${rn({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
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

            ${c.map(og).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${u.map(ng).join("")}
          </div>
        </div>
      </div>
    `}function Us(e,o,n,r="normal",a=null){if(!w(o.power))return"";const s=Pr(e,o,n),{mode:u,defrostActive:p,running:c,thermalKey:l}=s,d=s.schematic;return t.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${i(n)} oq-overview-hp--${i(r)}" data-oq-hp-panel="${i(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${_s(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${yn(u,c,d.warningActive,d.failureText)}
            </div>
          </div>
          ${ag(d)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${i(n)} oq-overview-hp--${i(r)}" data-oq-hp-panel="${i(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${i(e)}</h3>
          </div>
          ${yn(u,c,d.warningActive,d.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${_o([{key:o.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:l,label:d.heatLabel,tone:"orange",note:d.heatDescription},{label:d.efficiencyLabel,value:d.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${i(u)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${i(B(o.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${p?"Actief":"Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${vn("Water in",o.waterIn)}
          ${vn("Water out",o.waterOut)}
        </div>
      </section>
    `}function Mr(){return N("boilerCvAssistEnabled")&&w("boilerHeatPower")}function ig(){return(typeof we=="function"?we():"")!=="single"&&w("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function sg(){return(typeof we=="function"?we():"")!=="single"&&w("hp2Flow")?"hp2Flow":"hp1Flow"}function Ko(){const e=P("boilerHeatPower"),o=P(sg()),n=w("boilerActive")?N("boilerActive"):!Number.isNaN(e)&&e>20,r=!Number.isNaN(o)&&o>0,a=R(e,0,"W"),s=R(o,0,"L/h"),u=R(P(ig()),1,"\xB0C"),p=R(P("supplyTemp"),1,"\xB0C"),c=n?"Aan":"Uit",l=n?"Levert ondersteuning":"Geen ondersteuning",d=["oq-boiler-card",n?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:n,flowActive:r,heatText:a,flowText:s,returnTempText:u,supplyTempText:p,statusText:c,statusCopy:l,boardClass:d,flowPathClass:r?"is-flowing":"is-static"}}function Lr(e=Ko()){return me({version:"boiler-visual-mode-v1",visualMode:t.hpVisualMode,boardClass:"oq-boiler-card"})}function lg(e,o=Ko()){const n=e.querySelector(".oq-boiler-card");n&&(n.className=["oq-boiler-card",o.active?"is-running":"is-idle",o.flowActive?"is-flowing":"is-static"].join(" "));const r=e.querySelector(".oq-overview-chip");r&&(r.className=`oq-overview-chip oq-overview-chip--${o.active?"active":"neutral"}`,r.textContent!==o.statusText&&(r.textContent=o.statusText));const a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",o.active),a.classList.toggle("is-idle",!o.active));const s=e.querySelector(".oq-boiler-summary-box--support strong");s&&s.textContent!==o.statusCopy&&(s.textContent=o.statusCopy);const u=e.querySelector("[data-oq-boiler-heat-value]");u&&u.textContent!==o.heatText&&(u.textContent=o.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(d=>{d.textContent!==o.flowText&&(d.textContent=o.flowText)});const p=e.querySelector("[data-oq-boiler-status-value]");p&&p.textContent!==o.statusCopy&&(p.textContent=o.statusCopy);const c=e.querySelector('[data-oq-bind="boiler-return-value"]');c&&c.textContent!==o.returnTempText&&(c.textContent=o.returnTempText);const l=e.querySelector('[data-oq-bind="boiler-supply-value"]');l&&l.textContent!==o.supplyTempText&&(l.textContent=o.supplyTempText)}function cg(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${i(Lr(e))}">
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
    `}function kn(){if(!Mr())return"";const e=Ko();return t.hpVisualMode!=="schematic"?cg(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${i(Lr(e))}">
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
                ${qn("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${qn("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${Sn({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${Qt({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${Sn({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
                ${Qt({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"right"})}
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
    `}function Gs(){const e=typeof we=="function"?we():"";return ql.filter(o=>e==="single"&&o.title==="HP2"?!1:w(o.keys.power))}function Hr(e){return!Array.isArray(e)||e.length<2||t.hpVisualMode!=="schematic"?"equal":t.hpLayoutMode==="focus-hp1"||t.hpLayoutMode==="focus-hp2"?t.hpLayoutMode:"equal"}function $o(e,o,n){return!Array.isArray(o)||o.length<2?"normal":n==="focus-hp1"?e===0?"focus":"muted":n==="focus-hp2"?e===1?"focus":"muted":"normal"}function Cn(e,o,n){return!Array.isArray(o)||o.length<2||t.hpVisualMode!=="schematic"?null:$o(e,o,n)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function Qs(e){return!Array.isArray(e)||e.length!==1?Hr(e):Mr()?"equal":"single"}function ug(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function Ys(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${Ks(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${t.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${t.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function pg(e,o){if(!e)return!1;const n=e.querySelector(".oq-overview-hp-tools-copy"),r=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!n||!r||!a?(Ve(e,Ys(o)),!0):(Ve(n,`
      <h3>Warmtepompen</h3>
      ${Ks(o)}
    `),r.classList.toggle("is-active",t.hpVisualMode==="schematic"),a.classList.toggle("is-active",t.hpVisualMode==="compact"),!0)}function dg(){const e=As(),o=Gs(),n=Hr(o),r=Qs(o),a=Ys(o);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${i(t.overviewTheme)}">
          ${ys()}
          ${$m(e)}
          <div class="oq-overview-main">
            ${Ls(bn())}
            ${Rs()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${i(r)}">
            ${o.map((s,u)=>Us(s.title,s.keys,s.accent,$o(u,o,n),Cn(u,o,n))).join("")}
            ${kn()}
          </div>
        </div>
      </section>
    `}function mg(e,o,n){if(!e)return;const r=e.querySelector(o);r&&r.textContent!==n&&(r.textContent=n)}function Ve(e,o){e&&e.innerHTML!==o&&(e.innerHTML=o)}function Ze(e,o,n){return!e||e.dataset.renderSignature===o?!1:(e.outerHTML=n,!0)}function wt(e,o,n){e&&e.getAttribute(o)!==n&&e.setAttribute(o,n)}function gg(e,o){o.forEach(([n,r])=>{mg(e,`[data-oq-bind="${n}"]`,r)})}function hg(e,o){o.forEach(([n,r])=>{wt(e.querySelector(`[data-oq-bind="${n}"]`),"aria-label",r)})}function fg(e,o,n,r=""){const a=e.querySelector(`[data-oq-bind="${o}"]`);a&&(a.classList.toggle("is-active",n),wt(a,"tabindex",n?"0":"-1"),!n&&r&&zo(e.querySelector(`[data-oq-bind="${r}"]`)))}function vg(e,o,n){wt(e.querySelector(`[data-oq-bind="${o}"]`),"fill",n)}function Yt(e,o,n,r){if(!e)return;const a=`${o}${n}`;r.map(u=>`${o}${u}`).find(u=>e.classList.contains(u))!==a&&(r.forEach(u=>e.classList.remove(`${o}${u}`)),e.classList.add(a))}function bg(e,o,n,r){const a=e.querySelector(`[data-oq-pipe="${o}"]`);a&&(Yt(a,"oq-hp-tech-pipe--",n,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(s=>{s.getAttribute("d")!==r&&s.setAttribute("d",r)}))}function zo(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function Na(e,o,n){!e||!o||!n||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(r=>{r!==n&&zo(r)}),o.appendChild(n),n.classList.add("is-active"),n.setAttribute("aria-hidden","false"))}function wg(e,o,n,r){if(!e||!o||!n||!r||n.dataset.oqTooltipWired==="true")return;n.dataset.oqTooltipWired="true";const a=()=>{n.matches(":hover")||document.activeElement===n||zo(r)};n.addEventListener("mouseenter",()=>Na(e,o,r)),n.addEventListener("mouseleave",a),n.addEventListener("focus",()=>Na(e,o,r)),n.addEventListener("blur",a)}function Zs(e){if(!e)return;const o=e.querySelector(".oq-hp-tech-svg");if(!o)return;let n=o.querySelector(".oq-hp-tech-tooltip-layer");n||(n=document.createElementNS("http://www.w3.org/2000/svg","g"),n.setAttribute("class","oq-hp-tech-tooltip-layer"),o.appendChild(n)),Array.from(o.querySelectorAll(".oq-hp-tech-tooltip")).forEach(r=>{n.appendChild(r)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(r=>{const a=r.getAttribute("data-oq-tooltip-target");if(!a)return;const s=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);wg(e,n,r,s)})}function yg(e=t.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(o=>{Zs(o)})}function qg(e,o,n,r,a=null,s=null){if(!e)return;const u=s||Pr(o,n,r),{mode:p,running:c}=u,l=u.schematic,d=e.querySelector(".oq-overview-hp-head-title");d&&Ve(d,_s(o,a));const f=e.querySelector(".oq-overview-hp-head-side");if(f){let y=f.querySelector(".oq-overview-hp-status");y||(Ve(f,yn(p,c,l.warningActive,l.failureText)),y=f.querySelector(".oq-overview-hp-status")),pm(y,p,c,l.warningActive,l.failureText)}const g=e.querySelector("[data-oq-hp-board]");if(!g)return;g.className!==l.boardClass&&(g.className=l.boardClass),gg(g,[["status",l.statusText],["left-exchanger-title",l.leftExchangerTitle],["right-exchanger-title",l.rightExchangerTitle],["compressor-freq",l.compressorFreqText],["flow-value",l.flowText],["inner-coil-temp-value",l.innerCoilTempText],["evaporator-temp-value",l.evaporatorCoilTempText],["outside-temp-value",l.outsideTempText],["discharge-pressure-value",l.dischargePressureText],["discharge-temp-value",l.dischargeTempText],["suction-pressure-value",l.suctionPressureText],["suction-temp-value",l.suctionTempText],["supply-value",l.waterOutText],["return-value",l.waterInText],["footer-mode",l.mode],["footer-power",l.powerText],["footer-heat",l.heatText],["footer-efficiency-label",l.efficiencyLabel],["footer-efficiency",l.efficiencyText],["fan-speed-value",l.fanRpmText],["fourway-detail",l.fourWayPositionText],["eev-detail",l.eevPositionText]]);const v=g.querySelector('[data-oq-bind="footer-heat-label"]');if(v){wt(v,"aria-label",l.heatLabel);const y=l.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";v.innerHTML!==y&&(v.innerHTML=y)}[["bottom-heater",l.bottomPlateActive],["crankcase-heater",l.crankcaseActive]].forEach(([y,b])=>{fg(g,y,b,`${y}-tooltip`)});const S=g.querySelector('[data-oq-bind="defrost-badge"]');S&&(wt(S,"tabindex",l.defrostActive?"0":"-1"),wt(S,"aria-label",l.defrostActive?"Defrost actief":"Defrost uit"),l.defrostActive||zo(g.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",l.supplyLineTone],["return-tooltip",l.returnLineTone]].forEach(([y,b])=>{Yt(g.querySelector(`[data-oq-bind="${y}"]`),"oq-hp-tech-tooltip--",b,["warm","supply","return"])}),hg(g,[["supply-reading",`Aanvoer temperatuur ${l.waterOutText}`],["flow-reading",`Flow ${l.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${l.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${l.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${l.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${l.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${l.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${l.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${l.dischargeTempText}`],["return-reading",`Retour temperatuur ${l.waterInText}`],["suction-pressure-reading",`Zuigdruk ${l.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${l.suctionTempText}`],["fourway-trigger",`4-wegklep, ${l.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${l.eevPositionText}`]]),Yt(g.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",l.returnLineTone,["supply","return"]);const h=String(l.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");vg(g,"cond-water",`url(#${l.reverseCycle?`${h}-cond-water-cool`:`${h}-cond-water-heat`})`),Object.entries(l.pipes).forEach(([y,b])=>{bg(g,y.replace(/[A-Z]/g,k=>`-${k.toLowerCase()}`),b.tone,b.d)}),Zs(g),In()}function Sg(){if(!t.root||t.appView!=="overview")return!1;const e=t.root.querySelector(".oq-overview-board");if(!e)return!1;const o=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==o&&(e.className=o);const n=As(),r=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),s=e.querySelector(".oq-overview-system"),u=e.querySelector(".oq-overview-temps"),p=e.querySelector(".oq-overview-trends"),c=e.querySelector(".oq-overview-hp-tools"),l=e.querySelector(".oq-overview-hp-grid"),d=e.querySelector("[data-oq-boiler-panel]"),f=Gs();if(r){const k=jo();Ze(r,me(k),ys())}if(a){const k=a.querySelector(".oq-overview-top");k&&Ve(k,_o(xs()));const $=a.querySelector(".oq-overview-statuspanel");if($){const E=B("controlModeLabel");Ze($,me(Hs(n,E)),Ns(n,E))}const q=a.querySelector(".oq-overview-summary-side");if(q){const E=Bi();q.dataset.renderSignature!==E&&(Ve(q,Os()),q.dataset.renderSignature=E)}}if(s&&Ze(s,me(bn()),Ls(bn())),u&&Ze(u,me(Fs()),Rs()),p&&t.appView==="overview"&&Ze(p,Cr(),Tr()),Ar(e),!c||!l)return!1;const g=Hr(f),v=Qs(f);if(pg(c,f),Yt(l,"oq-overview-hp-grid--",v,["single","equal","focus-hp1","focus-hp2"]),t.hpVisualMode!=="schematic"){const k=[...f.map((q,E)=>Us(q.title,q.keys,q.accent,$o(E,f,g),Cn(E,f,g))),kn()].join(""),$=me({visualMode:t.hpVisualMode,layout:v,markup:k});return l.dataset.renderSignature!==$&&(Ve(l,k),l.dataset.renderSignature=$),!0}const S=Mr()?Ko():null,h=S?kn():"",y=S?Lr(S):"";return!!d!=!!h||(d&&d.dataset.renderSignature!==y?d.outerHTML=h:d&&S&&lg(d,S),l.querySelectorAll("[data-oq-hp-panel]").length!==f.length)?!1:(f.forEach((k,$)=>{const q=e.querySelector(`[data-oq-hp-panel="${k.title}"]`);if(q){const E=Pr(k.title,k.keys,k.accent);Yt(q,"oq-overview-hp--",$o($,f,g),["normal","focus","muted"]),qg(q,k.title,k.keys,k.accent,Cn($,f,g),E)}}),!0)}function kg(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${md()}
        ${gd()}
      </section>
    `}function Cg(){return`
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
    `}function Tg(){return t.appView==="overview"?dg():t.appView==="trends"?Bm():t.appView==="energy"?Gm():kg()}function $g(){const e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function Ag(e){if(!e||t.deferDevControlSelectRender)return;t.deferDevControlSelectRender=!0;const o=()=>{e.removeEventListener("blur",o),e.removeEventListener("change",o),t.deferDevControlSelectRender=!1,window.setTimeout(()=>m(),0)};e.addEventListener("blur",o,{once:!0}),e.addEventListener("change",o,{once:!0})}function m(){if(!t.root)return;const e=$g();if(e){Ag(e);return}const o=t.systemModal==="webserver-logs"?Ue():null,n=t.systemModal==="cm100-commissioning"?Np():null,r=String(t.systemModal||"").startsWith("service-task-")?Op():null,a=t.quickStartModalOpen?Gd():null;if(t.nativeOpen){t.root.innerHTML=`
        ${ta()}
        ${Uc()}
      `,t.settingsRenderSignature="",t.headerRenderSignature=ln(),On(),wo(),wa(),Yr(),ga(),ma(),_e(o),fa(n),va(r),Ea(a);return}const s=Tg(),u=t.loadingEntities?`${s}${Cg()}`:s,p=t.appView==="overview"||t.appView==="trends"||t.appView==="energy";t.root.innerHTML=`
      ${ta()}
      <div class="oq-helper-shell${t.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${p?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${bl}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${zc()}
          </div>
      ${vp()}
      ${u}
        </div>
      </div>
      ${Ud()}
      ${Qc()}
      ${Yc()}
      ${Mc()}
    `,t.settingsRenderSignature=t.appView==="settings"?gn():"",t.headerRenderSignature=ln(),Dn(),yg(),wa(),Wn(),Ar(),wo(),Yr(),ga(),ma(),_e(o),fa(n),va(r),Ea(a)}function i(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}rc();})();
