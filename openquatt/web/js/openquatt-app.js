/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{const Au=`
    <svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>
  `,gi={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},ms="https://oi.esphome.io/v3/www.js",St=2,Nr=4,hs=6e4,fs="Power House",bs="Water Temperature Control (heating curve)",ho=[{id:"generation",kicker:"Stap 1",title:"Kies je Quatt Hybrid",copy:"Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.",fields:[{title:"Quatt Hybrid-versie",copy:"Kies de versie die bij jouw Quatt hoort."}]},{id:"flow-source",kicker:"Stap 2",title:"Flowmeting configureren",copy:"Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort.",fields:[{title:"Flowbron",copy:"De Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron OpenQuatt moet gebruiken."}]},{id:"thermostat-source",kicker:"Stap 3",title:"Thermostaatgegevens configureren",copy:"Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt.",fields:[{title:"Thermostaatbron",copy:"Q-edition gebruikt OpenTherm. Listener en Waveshare gebruiken CiC of Home Assistant."}]},{id:"boiler",kicker:"Stap 4",title:"CV-ketel of boiler",copy:"Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.",optionalEntity:"boilerCvAssistEnabled",fields:[{title:"CV-ketel / boiler aanwezig",copy:"Kies of er ondersteuning beschikbaar is en vul eventueel het vermogen in."}]},{id:"strategy",kicker:"Stap 5",title:"Kies de verwarmingsstrategie",copy:"Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",fields:[{title:"Verwarmingsstrategie",copy:"Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn."}]},{id:"heating",kicker:"Stap 6",title:"Werk de regeling uit",copy:"Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",fields:[{title:"Instellingen voor jouw regeling",copy:"Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling."}]},{id:"flow",kicker:"Stap 7",title:"Flowregeling en afstelling",copy:"Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning.",fields:[{title:"Flowregeling en tuning",copy:"Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt. Stel hier ook de flow-instellingen in."}]},{id:"water",kicker:"Stap 8",title:"Watertemperatuur beveiligen",copy:"Controleer de normale bovengrens en de tripgrens voor het watercircuit.",fields:[{title:"Watertemperatuur",copy:"Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt."}]},{id:"silent",kicker:"Stap 9",title:"Stille uren en niveaus",copy:"Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",fields:[{title:"Stille uren",copy:"Hier bepaal je wanneer het systeem rustiger moet werken."}]},{id:"confirm",kicker:"Stap 10",title:"Bevestigen en afronden",copy:"Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.",fields:[{title:"Afronden",copy:"Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is."}]}],fo=[1,2],bn=Array.from({length:11},(e,t)=>t),Rr=["cooling","heating"];function Hu(e){return e==="cooling"?"cooling":"heating"}function Mu(e){return e==="cooling"?"Cooling":"Heating"}function jt(e,t,o){return`hp${e}OduRuntime${Mu(t)}F${o}`}function ae(e,t){return`hp${e}OduRuntimeFrequency${t}`}function vs(e){return[ae(e,"Enable"),ae(e,"Load"),ae(e,"Apply"),ae(e,"Status"),...Rr.flatMap(t=>bn.map(o=>jt(e,t,o)))]}function Pu(e){const t=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return t?Number(t[1]):0}const Lr=fo.flatMap(vs),ws=new Set(fo.flatMap(e=>[ae(e,"Load"),ae(e,"Apply")])),O={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},trendHistoryFlashAvailable:{domain:"text_sensor",name:"Trendhistorie beschikbaar",optional:!0},trendHistoryFlashOldest:{domain:"text_sensor",name:"Trendhistorie oudste punt",optional:!0},trendHistoryFlashNewest:{domain:"text_sensor",name:"Trendhistorie nieuwste punt",optional:!0},trendHistoryFlashLastFlush:{domain:"text_sensor",name:"Trendhistorie laatste opslag",optional:!0},trendHistoryFlashSize:{domain:"sensor",name:"Trendhistorie grootte",optional:!0},trendHistoryFlashWrites:{domain:"sensor",name:"Trendhistorie schrijfacties",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},lifetimeEnergyHistoryAvailable:{domain:"text_sensor",name:"Lifetime energiehistorie beschikbaar",optional:!0},lifetimeEnergyHistoryOldest:{domain:"text_sensor",name:"Lifetime energiehistorie oudste dag",optional:!0},lifetimeEnergyHistoryNewest:{domain:"text_sensor",name:"Lifetime energiehistorie nieuwste dag",optional:!0},lifetimeEnergyHistoryLastWrite:{domain:"text_sensor",name:"Lifetime energiehistorie laatste opslag",optional:!0},lifetimeEnergyHistorySize:{domain:"sensor",name:"Lifetime energiehistorie grootte",optional:!0},lifetimeEnergyHistoryWrites:{domain:"sensor",name:"Lifetime energiehistorie schrijfacties",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};fo.forEach(e=>{const t=`HP${e} - EXPERIMENTAL`;O[ae(e,"Enable")]={domain:"switch",name:`${t} ODU runtime frequency write enable`,optional:!0},O[ae(e,"Load")]={domain:"button",name:`${t} load ODU runtime frequency table`,optional:!0},O[ae(e,"Apply")]={domain:"button",name:`${t} apply ODU runtime frequency table`,optional:!0},O[ae(e,"Status")]={domain:"text_sensor",name:`${t} ODU runtime frequency status`,optional:!0},Rr.forEach(o=>{bn.forEach(r=>{O[jt(e,o,r)]={domain:"number",name:`${t} ${Hu(o)} F${r} runtime Hz`,optional:!0}})})});const Or=[{id:"overview",label:"Overzicht"},{id:"energy",label:"Energie"},{id:"diagnosis",label:"Diagnose"},{id:"results",label:"Resultaten"},{id:"settings",label:"Instellingen"}],Nu=new Set(Or.map(e=>e.id)),ye=[{id:"installation",label:"Installatie"},{id:"heating",label:"Verwarmen"},{id:"cooling",label:"Koelen"},{id:"integrations",label:"Bronnen / integraties"},{id:"service",label:"Service"},{id:"system",label:"Systeem"}],xe=new Set(ye.map(e=>e.id)),Ru=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],ce=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],Yt=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],Hn=["dayMax","silentMax","maxWater"],lt=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],ys=["flowKp","flowKi"],eo=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],to=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],Dr=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],Lu=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],Fr=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...to,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],qs=["cicCompatibilityMode"],Ss=["otEnabled","otLinkProblem"],ks=["cicPollingEnabled","cicFeedUrl","cicDataStale"],Cs=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],Ts=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],xr=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"],Es=["supplyTemp","waterSupplyTempEsp","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","coolingEnableSelected","coolingEnableEffectiveSource","coolingEnableHa","coolingEnableHaValid"],ct=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],bo=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","roomSetpointHa","roomSetpointHaValid"],$s=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],vo=[...ce.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],As=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],wo=["silentStartTime","silentEndTime","silentMax","dayMax"],Ou=1e4;const cr=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],Bt=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],Zt=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],Du=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],Ir=[...Zt,...Du,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],Gn=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],$e=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],Mn=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Mode","hp1Failures","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Mode","hp2Failures","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay"],Qn=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Mode","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Mode","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay",...Lu],Fu=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...Yt,...vo,...lt,"maxWater",...wo,...ct,...bo,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","hp1Power","hp1Heat","hp1Cooling","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp2Power","hp2Heat","hp2Cooling","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut"],xu=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],Hs=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...Fr,"manualCoolingEnable","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","webServerLogHistoryEnabled","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","lifetimeEnergyHistoryEnabled","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites",...qs,...Ss,...Cs,...ks,...Ts,...xr,...Es,...lt,...ys,...eo,...to,...Dr,...$s,...Hn,...Yt,...vo,...As,...wo,...Lr];const Sv=new Set(["installationTopology",...Fr,...Lr,"trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites","cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"]),_t=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource",...eo]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...ce.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","lifetimeEnergyHistoryEnabled","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],Ms=1,Pn=[...new Set(_t.flatMap(e=>e.keys))],Iu=new Set(Pn),Wu=5e3,Bu=3e4,Vu=6e4,ju=1500,_u=3e4,Ku=3e4,Uu=1e3,Wr=3e4,mi=250,zu=750,Gu=22,Qu=Gu/1.7,Yu=360/3.2,vn="2000-01-01 00:00:00",Kt=24,no=[3,12,24,72,168,336,720],n={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:Xu(),devPanelOpen:td(),nativeOpen:ed()==="native",currentStep:"generation",quickStartModalMode:"wizard",settingsGroup:nd(),appView:"",overviewTheme:Zu(),hpVisualMode:rd(),hpLayoutMode:id(),trendWindowHours:ld(),trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryFetchPromise:null,energyHistoryView:"day",energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""},deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:Vm(),debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null,complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:"",updateModalOpen:!1,systemModal:"",authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftBaseTopic:"openquatt",mqttDraftPublishProfile:"standard",mqttDraftEssentialIntervalS:"10",mqttDraftStandardIntervalS:"30",mqttDraftDiagnosticIntervalS:"60",mqttDraftRetainSnapshots:!0,mqttBusy:!1,mqttNotice:"",mqttError:"",updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallMode:"",updateInstallTargetConnection:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:"",draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:ud(),motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}};function Zu(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function Ju(e){n.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",n.overviewTheme)}catch{}}function Xu(){return!1}function Yo(e){n.interfacePanelOpen=e===!0}function ed(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function Ps(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function td(){try{return window.localStorage.getItem("oq-dev-panel-open")==="true"}catch{return!1}}function nd(){try{const e=window.localStorage.getItem("oq-settings-group");return xe.has(e)?e:ye[0].id}catch{return ye[0].id}}function Yn(e,t={}){n.settingsGroup=xe.has(e)?e:ye[0].id;try{window.localStorage.setItem("oq-settings-group",n.settingsGroup)}catch{}t.syncUrl!==!1&&n.appView==="settings"&&xs(t.syncMode||"replace")}function od(e){n.devPanelOpen=e===!0;try{window.localStorage.setItem("oq-dev-panel-open",n.devPanelOpen?"true":"false")}catch{}}function rd(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function ad(e){n.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",n.hpVisualMode)}catch{}}function id(){try{const e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function sd(e){n.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",n.hpLayoutMode)}catch{}}function ld(){try{const e=Number(window.localStorage.getItem("oq-trend-window-hours"));return no.includes(e)?e:Kt}catch{return Kt}}function Ns(){const e=n.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;const t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function cd(){return Ns()?no:no.filter(e=>e<=168)}function Br(e){const t=cd(),o=Number(e);return t.includes(o)?o:Number.isFinite(o)&&o>t[t.length-1]?t[t.length-1]:t.includes(Kt)?Kt:t[0]}function Vr(e){n.trendWindowHours=Br(e);try{window.localStorage.setItem("oq-trend-window-hours",String(n.trendWindowHours))}catch{}}function Ut(){return"overview"}function Rs(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function ud(){return!!Rs()?.matches}function dd(e){if(n.reducedMotion=!!e?.matches,n.reducedMotion){jr();return}Gr()}function pd(){const e=Rs();!e||n.motionPreferenceMedia===e||(n.motionPreferenceMedia=e,n.motionPreferenceListener=dd,typeof e.addEventListener=="function"?e.addEventListener("change",n.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(n.motionPreferenceListener),n.reducedMotion=!!e.matches)}function gd(){return Object.keys(n.entities).length>0}function jr(){n.motionFrame&&(window.cancelAnimationFrame(n.motionFrame),n.motionFrame=0),n.motionStartedAt=0,Ur()}function md(){return mi+Math.floor(Math.random()*(zu-mi+1))}function hd(){return(document.hidden?Wr:Wu)+md()}function Ls(e=hd()){n.pollTimer||n.nativeOpen||(n.pollTimer=window.setTimeout(async()=>{n.pollTimer=null,await re(),Ls()},e))}function Os(){Ls()}function Ds(){n.pollTimer&&(window.clearTimeout(n.pollTimer),n.pollTimer=null)}function fd(){n.nativeOpen||(Ds(),Os(),document.hidden||re({forceProbe:!0}))}function _r(e={}){if(ro(),n.nativeOpen){Ds(),jr(),n.nativeFrontendLoaded||ur();return}if(Gr(),Os(),e.refresh!==!1){if(!gd()){gg();return}re(n.appView==="settings"?{forceBulk:!0}:{forceFast:!0})}}function wn(e){return e==="trends"&&(e="diagnosis"),!Nu.has(e)||e==="diagnosis"&&!rn()?"":e}function oo(e){return String(e||"").trim().toLowerCase()}function Kr(){try{const e=new URL(window.location.href),t=oo(e.searchParams.get("view")||""),o=wn(t);if(o)return o;const r=oo(e.hash.replace(/^#/,""));return wn(r)||""}catch{return""}}function Fs(){try{const e=new URL(window.location.href),t=oo(e.searchParams.get("section")||"");if(xe.has(t))return t;const o=oo(e.searchParams.get("group")||"");return xe.has(o)?o:""}catch{return""}}function xs(e="replace"){try{const t=new URL(window.location.href),o=wn(n.appView)||Ut();if(t.searchParams.set("view",o),o==="settings"){const a=xe.has(n.settingsGroup)?n.settingsGroup:ye[0].id;t.searchParams.set("section",a),t.searchParams.delete("group")}else t.searchParams.delete("section"),t.searchParams.delete("group");t.hash&&wn(t.hash.replace(/^#/,""))&&(t.hash="");const r=e==="push"?"pushState":"replaceState";window.history[r]({oqView:o,oqSettingsSection:o==="settings"?n.settingsGroup:""},"",t.toString())}catch{}}function vt(e,t={}){const o=wn(e)||Ut(),r=t.syncMode||"replace",a=n.appView!==o;n.appView=o,(a||t.forceSync)&&xs(r)}function bd(){const e=Kr()||Ut(),t=e==="settings"?Fs()||n.settingsGroup:"";if(!(e===n.appView&&(e!=="settings"||t===n.settingsGroup))){if(n.appView=e,e==="settings"&&t){n.settingsGroup=t;try{window.localStorage.setItem("oq-settings-group",n.settingsGroup)}catch{}}g(),re(e==="settings"?{forceBulk:!0}:{forceFast:!0})}}function ro(){n.nativeApp&&(n.nativeApp.classList.add("oq-native-app"),n.nativeApp.classList.toggle("oq-native-app--collapsed",!n.nativeOpen),n.nativeApp.setAttribute("aria-hidden",n.nativeOpen?"false":"true"))}function vd(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hi,{once:!0}):hi(),window.addEventListener("pointermove",kg),window.addEventListener("pointerup",Cg),window.addEventListener("popstate",bd),window.addEventListener("oq-mock-updated",wd),window.addEventListener("oq-dev-controls-changed",yd),document.addEventListener("visibilitychange",fd)}function wd(){n.mounted&&re()}function yd(){n.mounted&&g()}function hi(){qd();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),n.nativeApp=e,n.nativeFrontendLoaded=Array.from(document.scripts).some(t=>t.src===ms),n.mounted||(Sd(e),n.mounted=!0,_r()),ro(),n.nativeOpen||(re(),Ha({silent:!0}))}function qd(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function Sd(e){const t=document.createElement("section");t.id="oq-helper-root",t.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(t,e),t.addEventListener("click",qg),t.addEventListener("change",yg),t.addEventListener("input",fg),t.addEventListener("keydown",bg),t.addEventListener("wheel",wg,{passive:!1}),t.addEventListener("focusin",Pi),t.addEventListener("focusout",Pi),t.addEventListener("mouseover",mg),t.addEventListener("mouseout",hg),t.addEventListener("pointerdown",Sg),n.root=t,pd();const o=Kr()||Ut(),r=o==="settings"?Fs():"";r&&Yn(r,{syncUrl:!1}),vt(o,{syncMode:"replace",forceSync:!0}),Ur(),g()}function kd(e){return new Promise((t,o)=>{if(!e){t();return}const r=Array.from(document.scripts).find(i=>i.src===e);if(r){if(r.dataset.loaded==="true"){t();return}r.addEventListener("load",()=>t(),{once:!0}),r.addEventListener("error",i=>o(i),{once:!0});return}const a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",t()},{once:!0}),a.addEventListener("error",i=>o(i),{once:!0}),document.head.appendChild(a)})}async function ur(){if(!(n.nativeFrontendLoaded||n.nativeFrontendLoading)){n.nativeFrontendLoading=!0,n.nativeOpen&&g();try{await kd(ms),n.nativeFrontendLoaded=!0}catch(e){n.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,n.nativeOpen=!1,Ps("app"),g(),_r()}finally{n.nativeFrontendLoading=!1,n.nativeOpen&&g()}}}function fi(){if(!n.root)return;const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;!e||typeof e.bind!="function"||e.bind(n.root)}function Ur(){n.root&&(n.root.style.removeProperty("--oq-flow-offset"),n.root.style.removeProperty("--oq-flow-offset-reverse"),n.root.style.removeProperty("--oq-fan-rotation"),n.root.getAttribute("style")||n.root.removeAttribute("style"))}function zr(){return n.motionTargets={pipeFlows:[],fanBlades:[]},n.root?(n.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{n.motionTargets.pipeFlows.push(a)})}),n.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(r=>{r.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{n.motionTargets.pipeFlows.push(a)})}),n.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{n.motionTargets.fanBlades.push(a)})}),n.motionTargets.pipeFlows.length+n.motionTargets.fanBlades.length):0}function Cd(){return n.motionTargets.pipeFlows.length>0||n.motionTargets.fanBlades.length>0}function Is(e=performance.now()){if(!n.root||n.reducedMotion||!Cd()&&zr()===0)return!1;n.motionStartedAt||(n.motionStartedAt=e);const t=(e-n.motionStartedAt)/1e3,o=t*Yu%360;return n.motionTargets.pipeFlows.forEach(r=>{const a=r.dataset.oqFlowVariant==="water"?.42:1,i=-(t*Qu*a);r.style.strokeDashoffset=`${i.toFixed(3)}px`}),n.motionTargets.fanBlades.forEach(r=>{r.style.transform=`rotate(${o.toFixed(3)}deg)`}),!0}function Ws(e){if(!Is(e)){n.motionFrame=0,n.motionStartedAt=0;return}n.motionFrame=window.requestAnimationFrame(Ws)}function Gr(){if(n.motionFrame||n.reducedMotion||zr()===0)return;const e=performance.now();if(n.motionStartedAt=e,!Is(e)){n.motionStartedAt=0;return}n.motionFrame=window.requestAnimationFrame(Ws)}function Jt(){const e=window.location.pathname.replace(/\/$/,"");return e===""?"":e}function G(e,t,o=""){const r=o?`/${o}`:"";return`${Jt()}/${e}/${encodeURIComponent(t)}${r}`}function ie(e=T("strategy")){return String(e||"").includes("Water Temperature Control")}function Td(e=T("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function ut(){return typeof window<"u"&&window.__OQ_DEV_META&&typeof window.__OQ_DEV_META=="object"?window.__OQ_DEV_META:{}}function Ed(){const e=String(T("hpGeneration")||"").trim();return e||""}function dr(e){const t=String(e||"").trim().toLowerCase();return t==="single"||t.includes("quatt single")||t.includes("openquatt single")?"single":t==="duo"||t.includes("quatt duo")||t.includes("openquatt duo")?"duo":""}function $d(){if(!Array.isArray(Gn))return"";if(Gn.some(t=>b(t)))return"duo";const e=n.optionalMissingEntities||{};return Gn.every(t=>e[t])?"single":""}function Zo(e){const t=dr(e);return(t==="single"||t==="duo")&&typeof n<"u"&&n&&typeof n=="object"&&(n.lastKnownInstallationTopology=t),t}function Ad(){if(typeof n<"u"&&n&&typeof n=="object"){const e=String(n.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function de(){const e=dr(T("installationTopology"));if(e==="single"||e==="duo")return Zo(e);const t=dr(ut().installation);if(t==="single"||t==="duo")return Zo(t);const o=$d();return o?Zo(o):Ad()}function Nn(){const e=de(),t=Ed();return e==="single"?t?`Quatt Single ${t}`:"Quatt Single":e==="duo"?t?`Quatt Duo ${t}`:"Quatt Duo":t?`Quatt Hybrid ${t}`:"Quatt Hybrid"}function Le(){return"OpenQuatt"}function Bs(e){const t=String(e||"").trim().toLowerCase();return t==="wifi"||t==="wi-fi"||t.includes("wifi")||t.includes("wi-fi")?"wifi":t==="eth"||t==="ethernet"||t.includes("ethernet")?"eth":""}function at(e=Xt()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function Qr(){const e=String(T("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(ut().hardwareProfile||e).trim().toLowerCase()}function Xt(){return Bs(T("connectionText")||ut().connection)}function Hd(){const e=Xt();return e==="wifi"?"eth":e==="eth"?"wifi":""}function bi(e=Xt()){const t=de(),o=t==="duo"?"Duo":t==="single"?"Single":"Onbekende opstelling";return Qr()==="heatpump_controller_q"?`Heatpump Controller Q ${o} ${at(e)}`:`${Le()} ${o} ${at(e)}`}function Yr(){const e=Qr(),t=de(),o=Xt(),r=Hd();return e!=="heatpump_controller_q"||t!=="single"&&t!=="duo"||o!=="wifi"&&o!=="eth"||!r?null:{canSwitch:b("firmwareUpdateTarget")&&b("installFirmwareUpdateTarget"),currentConnection:o,targetConnection:r,currentLabel:at(o),targetLabel:at(r),currentBuildLabel:bi(o),targetBuildLabel:bi(r)}}function yn(e=n.updateTestFirmwarePr){const t=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(t)?t:""}function yo(){const e=Qr(),t=de(),o=Xt(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||t!=="single"&&t!=="duo"||!a.connections.includes(o))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};const i=`openquatt-${a.slug}-${t}-${o}`,l=t==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,md5FileName:`${i}.firmware.ota.bin.md5`,label:`${a.label} ${l} ${at(o)}`}}function Zr(e=yn(),t=yo()){if(!e||!t.available)return null;const r=`${`https://github.com/jeroen85/OpenQuatt/releases/download/pr-${e}`}/${t.otaFileName}`;return{otaUrl:r,md5Url:`${r}.md5`,releaseApiUrl:`https://api.github.com/repos/jeroen85/OpenQuatt/releases/tags/pr-${e}`}}function Vs(){const e=A("timeValid"),t=String(T("timeNowHhmm")||"").trim();if(t&&t!=="invalid")return t;if(b("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function js(){return b("timeValid")&&!A("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${Vs()}`}function Kn(e){if(!Number.isFinite(e)||e<0)return"\u2014";const t=Math.floor(e),o=Math.floor(t/1440),r=Math.floor(t%1440/60),a=t%60;return o>0?`${o}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function Md(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function Pd(e){const t=e?.state;if(t!==""&&t!==null&&t!==void 0){const a=Number(t);if(Number.isFinite(a))return a}const o=e?.value,r=Number(o);return Number.isFinite(r)?r:NaN}function Jr(){const e=Pd(n.entities.uptime);if(Number.isFinite(e)&&e>=0){const r=Md(n.entities.uptime);if(r==="d")return Kn(e*1440);if(r==="h")return Kn(e*60);if(r==="s")return Kn(e/60)}const t=String(n.entities.uptimeReadable?.state??n.entities.uptimeReadable?.value??"").trim();if(t&&t.toLowerCase()!=="unknown")return t;const o=Number(ut().bootedAt);return!Number.isFinite(o)||o<=0?"\u2014":Kn((Date.now()-o)/6e4)}function Xr(){const e=String(n.entities.ipAddress?.state??n.entities.ipAddress?.value??"").trim();if(e)return e;const t=String(ut().ipAddress||"").trim();return t||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function Rn(){if(Me())return"Controleren";const e=dt();if(e)return e.phaseLabel;if(na())return"Bijgewerkt";if(qn())return"Bezig";if(en())return"Beschikbaar";const t=Ks();if(t!==null&&t<=0)return"Actueel";const o=ut();return typeof o.updateLabel=="string"&&o.updateLabel.trim()?o.updateLabel.trim():o.updateAvailable===!0?"Beschikbaar":o.updateAvailable===!1||ra()?"Actueel":pe()?"Nog niet gecontroleerd":"\u2014"}function pe(){return n.entities.firmwareUpdate||null}function qo(){const e=pe();return e?String(e.state??e.value??"").trim().toLowerCase():""}function Nd(){const e=n.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function So(){return Nd().toLowerCase()}function _s(){const e=n.entities.firmwareUpdateProgress;if(!e)return Number.NaN;const t=Number(e.value??e.state);return Number.isNaN(t)?Number.NaN:Math.max(0,Math.min(100,t))}function ea(){const e=String(n.updateInstallTargetVersion||"").trim(),t=ue();return!e||!t?!1:Ln(t,e)>=0}function Rd(e=pe()||{}){const t=zt(e),o=ue(e);return!t||!o?!1:Ln(o,t)>=0}function ta(){return(ea()||Rd())&&!Me()&&!ao()&&!en()}function na(){return(n.updateInstallCompleted||ta())&&!Me()&&!dt()&&!en()}function ko(){n.updateInstallBusy=!1,n.updateInstallTargetVersion="",n.updateInstallPhaseHint="",n.updateInstallProgressHint=Number.NaN,n.updateInstallMode="",n.updateInstallTargetConnection=""}function Ce(){n.updateManualUploadFile=null,n.updateManualUploadFileName="",n.updateManualUploadError=""}function Ke(e={}){e.clearPr&&(n.updateTestFirmwarePr=""),n.updateTestFirmwareConfirmed=!1,n.updateTestFirmwareError="",n.updateTestFirmwareBuild=null}function Ld(){const e=So(),t=_s();if(e==="starting"||e==="uploading"||e==="rebooting"){n.updateInstallPhaseHint=e,Number.isNaN(t)||(n.updateInstallProgressHint=e==="rebooting"?Math.max(t,100):t);return}if(n.updateInstallBusy){if(ea()){n.updateInstallPhaseHint="rebooting",n.updateInstallProgressHint=100;return}n.controlNotice.includes("opnieuw is opgestart")&&(n.updateInstallPhaseHint="rebooting",n.updateInstallProgressHint=100)}}function ao(){const e=So();return e==="starting"||e==="uploading"||e==="rebooting"}function dt(){Ld();const e=So(),t=e==="starting"||e==="uploading"||e==="rebooting",o=t?e:n.updateInstallPhaseHint,r=_s(),a=Number.isNaN(n.updateInstallProgressHint)?0:Math.round(n.updateInstallProgressHint),i=t&&!Number.isNaN(r)?Math.round(r):a;return!ao()&&!n.updateInstallBusy?null:o==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:n.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":n.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:o==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:n.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${Le()} gedownload en ge\xEFnstalleerd.`:n.updateInstallMode==="connection-switch"?`De ${at(n.updateInstallTargetConnection)}-build wordt nu naar ${Le()} verzonden.`:`Firmware wordt nu naar ${Le()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:n.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${Le()}.`:n.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${at(n.updateInstallTargetConnection)} is gestart.`:`OTA-update is gestart voor ${Le()}.`}}function zt(e=pe()||{}){const t=String(e.latest_version||"").trim();if(t)return t;const o=String(e.value||"").trim(),r=String(e.current_version||"").trim();return o&&o!==r&&/^v/i.test(o)?o:""}function ue(e=pe()||{}){const t=String(n.entities.projectVersionText?.state||n.entities.projectVersionText?.value||"").trim();return t||String(e.current_version||"").trim()}function Od(e=pe()||{}){const t=ue(e),o=String(e.current_version||"").trim();return!t||!o||t===o?!1:Ln(t,o)>0}function oa(e=pe()||{},t=kt()){const o=String(t||"").trim().toLowerCase(),r=String(e.release_url||"").trim().toLowerCase(),a=zt(e).toLowerCase();if(!o||o==="\u2014")return!0;if(o==="dev"){if(r){if(r.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(o==="main"){if(r){if(r.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function vi(e){const o=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return o?{major:Number(o[1]),minor:Number(o[2]),patch:Number(o[3]),prereleaseTag:o[4]||"",prereleaseNumber:o[5]?Number(o[5]):null}:null}function Ln(e,t){const o=vi(e),r=vi(t);if(!o||!r)return 0;if(o.major!==r.major)return o.major>r.major?1:-1;if(o.minor!==r.minor)return o.minor>r.minor?1:-1;if(o.patch!==r.patch)return o.patch>r.patch?1:-1;const a=!o.prereleaseTag,i=!r.prereleaseTag;return a!==i?a?1:-1:o.prereleaseTag!==r.prereleaseTag?o.prereleaseTag>r.prereleaseTag?1:-1:o.prereleaseNumber!==r.prereleaseNumber?(o.prereleaseNumber||0)>(r.prereleaseNumber||0)?1:-1:0}function qn(){if(ta())return!1;const e=qo();return n.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function Me(){const e=qo();return n.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function en(){const e=qo();if(!oa())return!1;const t=Ks();return t!==null?t>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:ut().updateAvailable===!0}function ra(){const e=qo();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||Od()}function aa(){const e=pe()||{},t=ue(e)||"\u2014";let o=oa(e)?zt(e):"";const r=o?Ln(o,t):null;return!Me()&&r!==null&&r<=0&&(o=""),{current:t,latest:o||"\u2014"}}function Ks(){const{current:e,latest:t}=aa();return e==="\u2014"||t==="\u2014"?null:Ln(t,e)}function Us(e=kt()){const t=String(e||"").trim().toLowerCase();return gi[t]||gi.main}function Dd(){const e=String((pe()||{}).release_url||"").trim(),t=Us();return!e||t.includes("/dev-latest")&&!e.includes("/dev-latest")||!t.includes("/dev-latest")&&e.includes("/dev-latest")?t:e}function Fd(){return Le()}function kt(){return String(T("firmwareUpdateChannel")||n.entities.releaseChannelText?.state||n.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function zs(){return aa().latest!=="\u2014"}function Gs(e){return new Promise(t=>window.setTimeout(t,e))}const xd=1500;function ia(){n.deviceReconnectRecoveryTimer&&(window.clearTimeout(n.deviceReconnectRecoveryTimer),n.deviceReconnectRecoveryTimer=null)}function Ct(){return Number(n.deviceReconnectRecoveryStartedAt||0)>0}function Id(){return Ct()?Number(n.deviceReconnectRecoveryStartedAt||0):Number(n.deviceReconnectStartedAt||0)}function Wd(){return Ct()?"Gegevens verversen":"Wachten op gegevens"}function Bd(){const e=Id(),t=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return Ct()?t>0?`${t}s aan het verversen`:"Net weer online":t>0?`${t}s bezig`:"Net gestart"}function wi(){if(!n.deviceReconnectMode||Ct())return!1;ia(),n.deviceReconnectRecoveryStartedAt=Date.now(),n.deviceReconnectLastError="",n.entitySyncFailureCount=0;const e=n.deviceReconnectRecoveryStartedAt;return n.deviceReconnectRecoveryTimer=window.setTimeout(()=>{n.deviceReconnectMode&&Number(n.deviceReconnectRecoveryStartedAt||0)===e&&(Qs(),g())},xd),g(),!0}function sa(e="reconnect",t=""){n.deviceReconnectMode||(n.deviceReconnectStartedAt=Date.now()),ia(),n.deviceReconnectMode=e,n.deviceReconnectRecoveryStartedAt=0,n.deviceReconnectLastError=t?String(t):n.deviceReconnectLastError,n.systemModal="",n.updateModalOpen=!1,n.controlError=""}function Qs(){ia(),!(!n.deviceReconnectMode&&!n.entitySyncFailureCount)&&(n.deviceReconnectMode="",n.deviceReconnectStartedAt=0,n.deviceReconnectRecoveryStartedAt=0,n.deviceReconnectLastError="",n.entitySyncFailureCount=0)}function Vd(){return Ct()?"OpenQuatt is weer online":n.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":n.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function jd(){return Ct()?n.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":n.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":n.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function _d(){return n.deviceReconnectMode?`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="reconnect">
        <section class="oq-helper-modal oq-helper-modal--reconnect" role="status" aria-live="polite" aria-labelledby="oq-reconnect-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-reconnect-modal-title">${s(Vd())}</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">${s(jd())}</p>
          <div class="oq-helper-reconnect-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>${s(Wd())}</strong>
              <span>${s(Bd())}</span>
            </div>
          </div>
        </section>
      </div>
    `:""}function la(e=kt()){const t=pe()||{},o=ue(t);n.entities.firmwareUpdate={...t,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:Us(e),current_version:o}}async function ca(){for(let e=0;e<6;e+=1){await Gs(e===0?900:1200),await B(Ir,"all",{forceMissing:!0});const t=oa(),o=zs(),r=Me(),a=Rn();if(t&&(o||!r&&a!=="Nog niet gecontroleerd"))return}}async function Co(){let e=!1;for(let t=0;t<45;t+=1){await Gs(t===0?700:1e3);try{if(await B(Ir,"all",{forceMissing:!0}),So()==="rebooting"&&sa("ota"),g(),n.updateInstallMode==="connection-switch"){const o=Bs(n.updateInstallTargetConnection);if(o&&Xt()===o&&!ao()&&!qn())return!0}else if(ea()||ta()||ra()&&!ao()&&!qn())return!0}catch{e||(n.controlNotice="Wachten tot het device opnieuw is opgestart...",g(),e=!0)}}return!1}function Kd(){const e=kt(),t=dt();if(t)return t.copy;if(na()){const o=n.updateInstallCompletedVersion||ue()||kt();return`${Le()} draait nu op ${o}.`}return qn()?`OTA-update wordt voorbereid voor ${Le()}. Het device kan kort herstarten.`:Me()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:en()?"Er staat een nieuwere firmware klaar.":ra()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function Ys(){return!!(n.firmwareAdvancedOpen||n.firmwareConnectionSwitchOpen||n.updateManualUploadOpen||n.updateTestFirmwareOpen)}function Jo(e,t,o,r,a=!1){return`
      <button
        class="oq-firmware-advanced-option${r?" is-active":""}"
        type="button"
        data-oq-action="${s(e)}"
        aria-pressed="${r?"true":"false"}"
        ${a?"disabled":""}
      >
        <strong>${s(t)}</strong>
        <span>${s(o)}</span>
      </button>
    `}function Ud(e,t){if(!Ys())return"";const r=!!(dt()||n.updateInstallBusy||Me());return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle oq-firmware-advanced-panel">
        <div class="oq-firmware-advanced-head">
          <div>
            <strong>Geavanceerd</strong>
            <span>Gebruik deze opties alleen als je bewust van de normale OTA-flow afwijkt.</span>
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-firmware-advanced-hide" type="button" data-oq-action="toggle-firmware-advanced" ${r?"disabled":""}>Verbergen</button>
        </div>
        <div class="oq-firmware-advanced-options">
          ${e?Jo("toggle-firmware-connection-switch","Verbinding wisselen",`Naar ${t.targetLabel}`,n.firmwareConnectionSwitchOpen,r):""}
          ${Jo("toggle-firmware-upload","Handmatige upload","Lokaal OTA-bestand",n.updateManualUploadOpen,r)}
          ${Jo("toggle-firmware-test","Testfirmware","PR-release installeren",n.updateTestFirmwareOpen,r)}
        </div>
        ${zd()}
        ${Qd()}
        ${Gd()}
      </div>
    `}function zd(){const e=Yr();if(!e||!n.firmwareConnectionSwitchOpen)return"";const o=!!(dt()||n.updateInstallBusy||Me()),r=!!n.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",d=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s(kt())}-build voor de andere netwerkverbinding.</span>
        </div>
        <div class="oq-helper-modal-grid">
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Huidige build</span>
            <strong class="oq-helper-modal-value">${s(e.currentBuildLabel)}</strong>
          </div>
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Alternatief</span>
            <strong class="oq-helper-modal-value">${s(e.targetBuildLabel)}</strong>
          </div>
        </div>
        <p class="oq-helper-modal-note">${s(l)}</p>
        ${d}
        <label class="oq-helper-modal-check">
          <input type="checkbox" data-oq-firmware-connection-confirm="true" ${r?"checked":""} ${o||i?"disabled":""}>
          <span>${s(a?"De netwerkkabel is aangesloten.":"Ik begrijp dat Ethernet na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-firmware-advanced-footer">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-connection-switch"
            ${o||i||!r?"disabled":""}
          >
            ${s(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function Gd(){if(!n.updateTestFirmwareOpen)return"";const t=!!(dt()||n.updateInstallBusy||Me()),o=yn(),r=yo(),a=Zr(o,r),i=!!(r.available&&b("firmwareTestOtaUrl")&&b("firmwareTestOtaMd5Url")&&b("installFirmwareTestOta")),l=!!(o&&i),d=n.updateTestFirmwareBuild||null,u=r.available?r.label:r.error,c=a?r.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Testfirmware</strong>
          <span>PR-release voor gericht testen. Gebruik dit alleen als iemand je expliciet vraagt om een PR te testen.</span>
        </div>
        <div class="oq-firmware-test-grid">
          <label class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">PR-nummer</span>
            <input
              class="oq-helper-input oq-helper-input--compact-number oq-firmware-test-pr-input"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              placeholder="244"
              value="${s(n.updateTestFirmwarePr||"")}"
              data-oq-firmware-test-pr="true"
              ${t?"disabled":""}
            >
          </label>
          <div class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">Doelbuild</span>
            <strong class="oq-helper-modal-value">${s(u)}</strong>
          </div>
          <div class="oq-firmware-advanced-card oq-firmware-test-card--asset">
            <span class="oq-helper-modal-label">OTA-bestand</span>
            <strong class="oq-helper-modal-value" data-oq-firmware-test-asset-note="true">${s(c)}</strong>
          </div>
          ${d?`
            <div class="oq-firmware-advanced-card oq-firmware-test-card--build" data-oq-firmware-test-build-row="true">
              <span class="oq-helper-modal-label">Build</span>
              <strong class="oq-helper-modal-value">${s(d)}</strong>
            </div>
          `:""}
        </div>
        <p class="oq-helper-modal-note oq-firmware-test-note">De webapp zet alleen de URL klaar; het device downloadt en flasht daarna zelf via dezelfde OTA-backend.</p>
        ${i?"":`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(r.available?"Deze firmware mist de testfirmware-bediening. Installeer eerst een nieuwere build.":r.error)}</p>`}
        ${n.updateTestFirmwareError?`<p class="oq-helper-modal-note oq-helper-modal-note--error" data-oq-firmware-test-runtime-error="true">${s(n.updateTestFirmwareError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <label class="oq-helper-modal-check oq-firmware-advanced-check">
            <input type="checkbox" data-oq-firmware-test-confirm="true" ${n.updateTestFirmwareConfirmed?"checked":""} ${t||!i?"disabled":""}>
            <span>Ik begrijp dat dit testfirmware uit een PR is.</span>
          </label>
          <button class="oq-helper-button" type="button" data-oq-action="install-firmware-test" ${t||!l||!n.updateTestFirmwareConfirmed?"disabled":""}>PR-firmware installeren</button>
        </div>
      </div>
    `}function Qd(){if(!n.updateManualUploadOpen)return"";const t=!!(dt()||n.updateInstallBusy||Me()),o=String(n.updateManualUploadFileName||n.updateManualUploadFile?.name||"").trim();return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Handmatige upload</strong>
          <span>Gebruik dit alleen als je een geschikte OTA-firmware hebt gedownload, bij voorkeur een *.firmware.ota.bin uit de release.</span>
        </div>
        <div class="oq-firmware-advanced-card">
          <span class="oq-helper-modal-label">Firmwarebestand</span>
          <input
            class="oq-settings-backup-input oq-settings-backup-import-input"
            type="file"
            accept=".bin,application/octet-stream"
            data-oq-firmware-upload-file-input="true"
            ${t?"disabled":""}
          >
          <span class="oq-helper-modal-subvalue">${s(o?`Gekozen bestand: ${o}`:"Nog geen bestand gekozen")}</span>
        </div>
        <p class="oq-helper-modal-note">De upload gebruikt dezelfde OTA-flow als de normale update. Laat deze pagina open tot het device weer terug is.</p>
        ${n.updateManualUploadError?`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.updateManualUploadError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <button class="oq-helper-button" type="button" data-oq-action="upload-firmware-file" ${t||!n.updateManualUploadFile?"disabled":""}>Upload en installeer</button>
        </div>
      </div>
    `}function pr(){return[n.interfacePanelOpen?"open":"closed",n.nativeOpen?"native":"app",n.appView,n.complete?"complete":"incomplete",n.overviewTheme,n.hpVisualMode,oe("installationTopology"),oe("hardwareProfileText"),oe("connectionText"),n.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",n.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",n.updateManualUploadOpen?"upload-open":"upload-closed",n.updateTestFirmwareOpen?"test-open":"test-closed",n.updateTestFirmwareError,oe("hpGeneration"),oe("projectVersionText"),oe("releaseChannelText"),ua()].join("|")}function ua(){const e=Math.max(Number(n.lastEntityResponseAt||0),Number(n.lastEntitySyncAt||0)),t=Number(n.deviceReconnectStartedAt||0);return n.entitySyncFailureCount>0&&!n.deviceReconnectMode?"Bezig":e>0&&(!n.deviceReconnectMode||e>=t)?"Verbonden":n.deviceReconnectMode?Ct()?"Verbonden":n.deviceReconnectMode==="reconnect"?"Offline":"Bezig":b("status")&&!A("status")?"Offline":"Bezig"}function Zs(){return String(T("projectVersionText")||"").trim()||"\u2014"}function Yd(){const e=Zs();return e&&e!=="\u2014"?e:Rn()}function Js(){const e=n.entities.espInternalTemp;if(!e)return"\u2014";const t=M("espInternalTemp");return Number.isNaN(t)?W("espInternalTemp"):x(t,1,e.uom||" \xB0C")}function da(){const e=n.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function Zd(){return"Login"}function Jd(){const e=n.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function pa(){const e=n.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function Xd(){return"ESPHome API encryption"}function ep(){const e=n.apiSecurityStatus;return e?e.pending_restart?"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.key?"De sleutel blijft opgeslagen, ook wanneer encryptie uit staat. Je kunt hem hier meteen kopi\xEBren of opnieuw inschakelen.":"Er is nog geen API-sleutel opgeslagen. Deze wijziging wordt actief na herstart.":"We halen de huidige API-beveiliging op."}function tp(){const e=n.apiSecurityStatus;return e?e.enabled?"Uitschakelen":"Inschakelen":"Laden..."}function np(){const e=n.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function fe(e,t,o="",r=!1){return`
      <div class="oq-helper-modal-row${r?" oq-helper-modal-row--loading":""}">
        <span class="oq-helper-modal-label">${s(e)}</span>
        <strong class="oq-helper-modal-value">${r?`
          <span class="oq-helper-modal-loading">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <span>${s(t)}</span>
          </span>
        `:s(t)}</strong>
      ${o?`<span class="oq-helper-modal-subvalue">${s(o)}</span>`:""}
    </div>
    `}function op(){const e=n.apiSecurityStatus||{},t=e.enabled===!0,o=!!e.key,r=!!e.pending_restart,a=n.apiSecurityNotice,i=n.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(n.apiSecurityError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${s(Xd())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(ep())}</p>
          ${a?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(a)}</span></div>`:""}
          ${i}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(Na())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(Ra())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${t?"disable-api-security":"enable-api-security"}"
                ${n.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${s(tp())}
              </button>
            </div>
            <div class="oq-settings-api-security-key">
              <div class="oq-settings-field-head">
                <h3>API-sleutel</h3>
              </div>
              <p class="oq-settings-action-note">${s(r?o?"Deze sleutel is opgeslagen. Kopieer hem nu en kies daarna Opslaan en herstarten.":"Inschakelen maakt direct een nieuwe sleutel aan. Deze wijziging wordt actief na herstart.":e.transport_active?"Gebruik deze sleutel in Home Assistant voor de ESPHome-integratie.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.")}</p>
              ${o?`<div class="oq-settings-api-security-key-row"><div class="oq-settings-api-security-key-value">${s(e.key)}</div></div>`:""}
              ${o?`
                  <div class="oq-settings-api-security-actions">
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="rotate-api-security"
                      ${n.apiSecurityBusy||!e.csrf_token?"disabled":""}
                    >
                      ${s(np())}
                    </button>
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="copy-api-security-key"
                      ${n.apiSecurityBusy?"disabled":""}
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
                ${n.apiSecurityBusy?"disabled":""}
              >
                Opslaan en herstarten
              </button>
            `:""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${n.apiSecurityBusy?"disabled":""}>Gereed</button>
          </div>
        </section>
      </div>
    `}function rp(){const e=n.mqttStatus||{},t=!n.mqttStatus,o=n.mqttNotice,r=n.mqttBusy,a=r||t,i=String(n.mqttDraftBroker||""),l=String(n.mqttDraftBaseTopic||""),d=String(n.mqttDraftUsername||""),u=String(n.mqttDraftPassword||""),c=String(n.mqttDraftEssentialIntervalS||"10"),p=String(n.mqttDraftStandardIntervalS||"30"),f=String(n.mqttDraftDiagnosticIntervalS||"60");return`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--top${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-mqtt-modal${t?" oq-mqtt-modal--loading":""}" role="dialog" aria-modal="true" aria-labelledby="oq-mqtt-modal-title">
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
          ${o?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(o)}</span></div>`:""}
          ${n.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(n.mqttError)}</div>`:""}
          <div class="oq-helper-modal-grid oq-mqtt-status-grid">
            ${t?`
                ${fe("Status","Laden...","MQTT-configuratie wordt opgehaald.",!0)}
                ${fe("Broker","Laden...","Even wachten op de actuele brokerinstellingen.",!0)}
                ${fe("Base topic","Laden...","Even wachten op de actuele topicinstelling.",!0)}
                ${fe("Publish-profiel","Laden...","Even wachten op het actieve publish-profiel.",!0)}
                ${fe("Gebruiker","Laden...","Even wachten op de opgeslagen login.",!0)}
                ${fe("Retain snapshots","Laden...","Even wachten op de snapshot-instelling.",!0)}
              `:`
                ${fe("Status",va(),wa())}
                ${fe("Broker",String(e.broker||"").trim()||"Geen broker",e.connected?"MQTT publiceert en ontvangt via deze broker.":"Nog geen actieve verbinding.")}
                ${fe("Base topic",String(e.base_topic||"").trim()||"openquatt","Alle compacte telemetry-topics hangen hieronder.")}
                ${fe("Publish-profiel",bl(e.publish_profile),`Essential: ${Number(e.essential_interval_s||10)}s, Standard: ${Number(e.standard_interval_s||30)}s, Diagnostic: ${Number(e.diagnostic_interval_s||60)}s`)}
                ${fe("Gebruiker",String(e.username||"").trim()||"Anoniem",e.password_set?"Er is een wachtwoord opgeslagen.":"Er is nog geen wachtwoord opgeslagen.")}
                ${fe("Retain snapshots",e.retain_snapshots!==!1?"Aan":"Uit",e.retain_snapshots!==!1?"Nieuwe subscribers zien meteen de laatste snapshot.":"Alleen live berichten worden doorgestuurd.")}
              `}
          </div>
          <div class="oq-mqtt-form${t?" oq-mqtt-form--loading":""}">
            <div class="oq-mqtt-section">
              <p class="oq-mqtt-section-title">Verbinding</p>
              <div class="oq-helper-modal-form-grid oq-mqtt-form-grid">
                <label class="oq-helper-modal-channel oq-helper-modal-channel--toggle oq-helper-modal-channel--span-2 oq-mqtt-setting-card oq-mqtt-setting-card--toggle">
                  <span class="oq-helper-modal-toggle-copy">
                    <span class="oq-helper-modal-label">MQTT inschakelen</span>
                    <span class="oq-helper-modal-subvalue">Als dit aan staat, probeert OpenQuatt direct met de broker te verbinden.</span>
                  </span>
                  <input type="checkbox" data-oq-mqtt-field="enabled" ${n.mqttDraftEnabled?"checked":""} ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Broker</span>
                  <input class="oq-helper-input" type="text" inputmode="url" autocomplete="off" spellcheck="false" data-oq-mqtt-field="broker" value="${s(i)}" placeholder="mqtt.example.local" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Poort</span>
                  <input class="oq-helper-input" type="number" min="1" max="65535" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="port" value="${s(String(n.mqttDraftPort||"1883"))}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Gebruiker</span>
                  <input class="oq-helper-input" type="text" autocomplete="off" spellcheck="false" data-oq-mqtt-field="username" value="${s(d)}" placeholder="optioneel" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Wachtwoord</span>
                  <input class="oq-helper-input" type="password" autocomplete="new-password" data-oq-mqtt-field="password" value="${s(u)}" placeholder="${e.password_set?"Leeg laten om te behouden":"optioneel"}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-helper-modal-channel--span-2 oq-mqtt-field">
                  <span class="oq-helper-modal-label">Base topic</span>
                  <input class="oq-helper-input" type="text" autocomplete="off" spellcheck="false" data-oq-mqtt-field="baseTopic" value="${s(l)}" placeholder="openquatt" ${a?"disabled":""}>
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
                    <option value="off" ${String(n.mqttDraftPublishProfile||"")==="off"?"selected":""}>Uit</option>
                    <option value="essential" ${String(n.mqttDraftPublishProfile||"")==="essential"?"selected":""}>Essential</option>
                    <option value="standard" ${String(n.mqttDraftPublishProfile||"")==="standard"?"selected":""}>Standard</option>
                    <option value="diagnostic" ${String(n.mqttDraftPublishProfile||"")==="diagnostic"?"selected":""}>Diagnostic</option>
                  </select>
                </label>
                <label class="oq-helper-modal-channel oq-helper-modal-channel--toggle oq-mqtt-setting-card oq-mqtt-setting-card--toggle">
                  <span class="oq-helper-modal-toggle-copy">
                    <span class="oq-helper-modal-label">Retain snapshots</span>
                    <span class="oq-helper-modal-subvalue">Bewaar de laatste schema-, state- en heat_pumps-snapshot op de broker.</span>
                  </span>
                  <input type="checkbox" data-oq-mqtt-field="retainSnapshots" ${n.mqttDraftRetainSnapshots?"checked":""} ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Essential interval</span>
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="essentialIntervalS" value="${s(c)}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Standard interval</span>
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="standardIntervalS" value="${s(p)}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Diagnostic interval</span>
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="diagnosticIntervalS" value="${s(f)}" ${a?"disabled":""}>
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
    `}function ap(){const e=[["Netwerkstatus",ua()],["IP-adres",Xr()]],t=String(T("wifiSsid")||"").trim();t&&e.push(["WiFi SSID",t]);const o=n.entities.wifiSignal;if(o){const r=M("wifiSignal");Number.isNaN(r)||e.push(["WiFi signaal",x(r,0,o.uom||" dBm")])}return e}function Xs(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="login"?"open-login-modal":""}function el(){return[["installation","Installatie",Nn()],["uptime","Uptime",Jr()],["connectivity","Connectiviteit",ua()],["time","Tijd",Vs()],["version","Versie",Yd(),!!pe()],["debugRecording","Debugopname",xm(),!0]]}function tl(){return en()}function nl(e){return e==="version"&&tl()}function hn(){return`
      <div class="oq-helper-status-grid">
        ${el().map(([t,o,r,a])=>{const i=Xs(t),l=!!(a||i),d=nl(t);return`
          <${l?"button":"div"}
            class="oq-helper-status-item${l?" oq-helper-status-item--button":""}${d?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${s(t)}"
            ${l?`type="button" data-oq-action="${s(i)}"`:""}
          >
            <span class="oq-helper-status-label">${s(o)}</span>
            <strong class="oq-helper-status-value">${d?`<span class="oq-helper-status-value-text">${s(r)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(r)}</strong>
          </${l?"button":"div"}>
        `}).join("")}
      </div>
    `}function gr(){if(!n.root)return!1;const e=n.root.querySelector(".oq-helper-status-grid");if(!e)return!!n.root.querySelector(".oq-helper-hub");const t=el();if(e.querySelectorAll("[data-oq-header-status]").length!==t.length)return e.outerHTML=hn(),!0;for(const[r,a,i,l]of t){const d=e.querySelector(`[data-oq-header-status="${r}"]`);if(!d)return e.outerHTML=hn(),!0;const u=Xs(r),c=!!(l||u);if(d.tagName.toLowerCase()!==(c?"button":"div"))return e.outerHTML=hn(),!0;const p=d.querySelector(".oq-helper-status-label"),f=d.querySelector(".oq-helper-status-value");if(!p||!f)return e.outerHTML=hn(),!0;p.textContent!==a&&(p.textContent=a);const m=nl(r),v=m?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);f.innerHTML!==v&&(f.innerHTML=v),c?d.setAttribute("data-oq-action",u):d.removeAttribute("data-oq-action"),d.classList.toggle("oq-helper-status-item--button",c),d.classList.toggle("oq-helper-status-item--attention",m)}return!0}function ip(){const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;return!e||typeof e.render!="function"?"":e.render()}function yi(){const e=ip();return e?n.devPanelOpen?`
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
      `:""}function sp(){const e=n.nativeOpen?"native":"app",t=tl();return n.interfacePanelOpen?`
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
              ${n.overviewTheme==="light"?"Donkere modus":"Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${hn()}
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
            ${Gl()}
            <button
              class="oq-helper-hub-toggle${t?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >\u2699${t?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function lp(){if(!n.root)return;if(n.interfacePanelOpen){n.root.querySelector(".oq-debug-recording-header-status")?.remove(),gr();return}const e=n.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;const t=e.querySelector(".oq-debug-recording-header-status"),o=Gl();if(!o){t?.remove();return}if(t){t.outerHTML=o;return}e.insertAdjacentHTML("afterbegin",o)}function cp(){const e=n.nativeOpen?"native":"app",t=n.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",o=n.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(n.controlError)}</p>`:"";return`
      <div class="oq-helper-shell oq-native-surface-shell">
        <div class="oq-helper-card oq-native-surface-card">
          <div class="oq-native-surface-head">
            <div class="oq-native-surface-copy">
              <p class="oq-helper-kicker">Weergave</p>
              <h1>ESPHome fallback actief</h1>
              <p>${s(t)}</p>
            </div>
            <div class="oq-native-surface-controls">
              <div class="oq-helper-hub-switches">
                <button class="oq-helper-hub-chip${e==="app"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
                <button class="oq-helper-hub-chip${e==="native"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
              </div>
            </div>
          </div>
          <p class="oq-native-surface-note">Schakel terug naar OpenQuatt-app om tuning, live overzicht en instellingen weer te activeren.</p>
          ${o}
        </div>
      </div>
    `}function up(){const e=n.authStatus||{},t=e.enabled===!0,o=e.setup_window_active===!0,r=t||o,a=t?String(e.username||"").trim():"",i=n.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(n.authNotice)}</span></div>`:"",l=n.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(n.authError)}</div>`:"",u=r?`
        ${r?`<p class="oq-helper-modal-intro">${t?"Pas hier je login aan.":"Vul hier je nieuwe login in."}</p>`:""}
        <div class="oq-helper-modal-auth-stack">
          ${t?`
              <label class="oq-helper-modal-auth-field">
                <span>Huidig wachtwoord</span>
                <input
                  class="oq-helper-input"
                  type="password"
                  autocomplete="current-password"
                  data-oq-auth-field="currentPassword"
                  value="${s(n.authDraftCurrentPassword)}"
                  ${n.authBusy?"disabled":""}
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
              value="${s(n.authDraftUsername)}"
              ${n.authBusy?"disabled":""}
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
              value="${s(n.authDraftNewPassword)}"
              ${n.authBusy?"disabled":""}
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
              value="${s(n.authDraftConfirmPassword)}"
              ${n.authBusy?"disabled":""}
            >
          </label>
        </div>
      `:`
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-login-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${s(Zd())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(Jd())}</p>
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${fe("Beveiligingsstatus",da(),pa())}
            ${fe("Gebruiker",t?a||"Geen naam":"Geen login",t?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${u}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${n.authBusy?"disabled":""}>Gereed</button>
            ${t?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${n.authBusy?"disabled":""}>Uitzetten</button>`:""}
            ${r?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${n.authBusy?"disabled":""}>${t?"Opslaan":"Login opslaan"}</button>`:""}
          </div>
        </section>
      </div>
    `}function dp(){if(!n.updateModalOpen)return"";const e=pe(),t=n.entities.firmwareUpdateChannel||null,{current:o,latest:r}=aa(),a=Me(),i=qn(),l=en(),d=Kd(),u=dt(),c=na(),p=Dd(),f=c?"Firmware-update afgerond":u||i?"Firmware-update bezig":a?"Controleren op firmware-update":Fd(),m=t?Array.isArray(t.option)?t.option:Array.isArray(t.options)?t.options:[]:[],v=Yr(),q=!!(v&&!c);return`
      <div class="oq-helper-modal-backdrop${a||i||u?" is-busy":""}${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal oq-helper-modal--firmware oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${s(f)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(d)}</p>
          ${c?`
            <div class="oq-helper-modal-success" aria-live="polite">
              <strong>Bijgewerkt</strong>
              <span>De nieuwe firmware draait nu op het device.</span>
            </div>
          `:""}
          ${u?`
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${s(u.phaseLabel)}</strong>
                <span>${s(`${u.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,u.percent))}%"></span>
              </div>
            </div>
          `:""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${s(Rn())}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige versie</span>
              <strong class="oq-helper-modal-value">${s(o)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Beschikbare versie</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Kanaal</span>
              <strong class="oq-helper-modal-value">${s(kt())}</strong>
            </div>
          </div>
          ${m.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${m.map(h=>`
                  <option value="${s(h)}" ${String(T("firmwareUpdateChannel")||"")===h?"selected":""}>${s(h)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||u?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${c?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||u||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${p?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(p)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${Ys()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||u?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${Ud(q,v)}
        </section>
      </div>
    `}function pp(){if(n.systemModal==="login")return up();if(n.systemModal==="api-security")return op();if(n.systemModal==="mqtt")return rp();if(n.systemModal==="connectivity"){const e=ap();return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              ${e.map(([t,o])=>`
                <div class="oq-helper-modal-row">
                  <span class="oq-helper-modal-label">${s(t)}</span>
                  <strong class="oq-helper-modal-value">${s(o)}</strong>
                </div>
              `).join("")}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(n.systemModal==="settings-backup-restore")return Jh();if(n.systemModal==="settings-backup-import")return Zh();if(n.systemModal==="history-storage")return jh();if(String(n.systemModal||"").startsWith("service-task-"))return xh();if(n.systemModal==="settings-backup-success"){const e=n.controlNotice||"Backup hersteld.";return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-backup-success-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Beheer</p>
                <h2 class="oq-helper-modal-title" id="oq-backup-success-modal-title">Backup hersteld</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit bevestiging">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">${s(e)}</p>
            <p class="oq-helper-modal-copy">Je kunt nu terug naar het overzicht of OpenQuatt gewoon verder gebruiken.</p>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(n.systemModal==="restart-confirm"){const e=n.busyAction==="restartAction";return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
      `}if(n.systemModal==="silent-settings")return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              ${nf()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;if(n.systemModal==="webserver-logs")return Fm();if(n.systemModal==="debug-recording")return ih();if(n.systemModal==="openquatt-pause"){const e=A("openquattEnabled"),t=n.busyAction==="openquatt-regulation",o=b("openquattResumeAt"),r=n.loadingEntities||n.entitySyncInFlight,a=o||!r,i=ga(),l=ma(T("openquattResumeAt")),d=al();return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-openquatt-pause-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Bediening</p>
                <h2 class="oq-helper-modal-title" id="oq-openquatt-pause-modal-title">Openquatt regeling</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit regeling-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">${e?"Kies hoe lang de regeling uit moet blijven. Verwarmen en koelen stoppen dan, maar beveiligingen blijven actief.":"De regeling staat nu tijdelijk uit. Je kunt meteen weer inschakelen of een nieuw hervatmoment plannen."}</p>
            ${i?`<div class="oq-helper-modal-success oq-helper-modal-success--compact">
                  <strong>Hervat nu automatisch</strong>
                  <span>${s(l)}</span>
                </div>`:""}
            ${a?o?`
                <div class="oq-helper-modal-presets">
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="2h" ${t?"disabled":""}>2 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="8h" ${t?"disabled":""}>8 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="tomorrow-morning" ${t?"disabled":""}>Tot morgenochtend</button>
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
                        value="${s(d)}"
                        ${t?"disabled":""}
                      >
                      <span class="oq-settings-time-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" focusable="false">
                          <rect x="3.2" y="4.2" width="13.6" height="12.6" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.5" />
                          <path d="M6.2 2.9V5.4M13.8 2.9V5.4M3.8 8.1H16.2M10 10.3V13.1L12.3 14.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </label>
                    <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-openquatt-custom-pause" ${t?"disabled":""}>Plan moment</button>
                  </div>
                </div>
              `:'<p class="oq-helper-modal-note">Automatisch hervatten is nog niet beschikbaar op deze firmware. Je kunt de regeling wel zonder eindtijd uitschakelen.</p>':'<p class="oq-helper-modal-note" aria-live="polite">Hervatopties laden...</p>'}
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t?"disabled":""}>Annuleren</button>
              ${e?"":`<button class="oq-helper-button" type="button" data-oq-action="enable-openquatt-now" ${t?"disabled":""}>Nu inschakelen</button>`}
              <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-indefinite" ${t?"disabled":""}>${e?"Zonder eindtijd uitschakelen":"Zonder eindtijd"}</button>
            </div>
          </section>
        </div>
      `}return""}function T(e){if(Object.prototype.hasOwnProperty.call(n.drafts,e))return n.drafts[e];const t=n.entities[e];return t?t.value??t.state??"":""}function ze(e){const t=n.entities[e]||{};return{min:Number(t.min_value??0),max:Number(t.max_value??100),step:Number(t.step??1),uom:t.uom||""}}function He(e){return Object.prototype.hasOwnProperty.call(n.inputDrafts,e)?n.inputDrafts[e]:T(e)}function Ue(e){if(typeof e=="number")return e;const t=String(e??"").trim().replace(",",".");return!t||t==="-"||t==="."||t==="-."?Number.NaN:Number(t)}function tn(e){const t=String(e||"").trim();if(!t)return"";const o=t.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!o)return"";const r=Number(o[1]),a=Number(o[2]),i=Number(o[3]||"0");return[r,a,i].some(l=>Number.isNaN(l))||r<0||r>23||a<0||a>59||i<0||i>59?"":`${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function mr(e){const t=tn(e);return t?t.slice(0,5):""}function Ge(e){const t=String(e||"").trim();if(!t)return"";const o=t.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!o)return"";const r=Number(o[1]),a=Number(o[2]),i=Number(o[3]),l=Number(o[4]),d=Number(o[5]),u=Number(o[6]||"0");return[r,a,i,l,d,u].some(c=>Number.isNaN(c))||r<2e3||a<1||a>12||i<1||i>31||l<0||l>23||d<0||d>59||u<0||u>59?"":`${String(r).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(d).padStart(2,"0")}:${String(u).padStart(2,"0")}`}function hr(e){const t=Ge(e);return!t||t===vn?"":t.slice(0,16).replace(" ","T")}function ol(e){const t=Ge(e);if(!t||t===vn)return null;const o=t.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!o)return null;const r=Number(o[1]),a=Number(o[2]),i=Number(o[3]),l=Number(o[4]),d=Number(o[5]),u=Number(o[6]),c=new Date(r,a-1,i,l,d,u,0);return Number.isNaN(c.getTime())?null:c}function ga(e=T("openquattResumeAt")){return!!ol(e)}function ma(e,t=!1){const o=ol(e);return o?new Intl.DateTimeFormat("nl-NL",t?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(o):""}function qi(e){const t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${t}-${o}-${r}T${a}:${i}`}function gp(e){const t=new Date(e.getTime());t.setSeconds(0,0);const o=t.getMinutes(),r=o%15;return r!==0&&t.setMinutes(o+(15-r)),t}function rl(e){const t=new Date;if(e==="2h"||e==="8h"){const o=e==="2h"?2:8,r=gp(new Date(t.getTime()+o*3600*1e3));return qi(r)}if(e==="tomorrow-morning"){const o=new Date(t);return o.setDate(o.getDate()+1),o.setHours(7,0,0,0),qi(o)}return""}function al(){const e=hr(n.pauseResumeDraft);if(e)return e;const t=hr(T("openquattResumeAt"));return t||rl("2h")}function Tt(){return[...new Set(["setupComplete",...Hs])]}function To(){return n.appView==="settings"&&n.settingsGroup==="system"}function il(){return n.appView==="settings"&&n.settingsGroup==="integrations"}function mp(){const e=typeof window<"u"?Number(window.__OQ_DEV_LOAD_DELAY_MS||0):0;return Number.isFinite(e)&&e>0?e:0}const hp=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","silentModeOverride","totalHeat","totalCoolingPower"],fp=["strategy","controlModeLabel","hpGeneration"],bp=["totalPower","flowSelected"],vp=["totalHeat","totalCoolingPower"],wp=2e3,yp=250,Si={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel"]},qp=5e3,Sp=250,kp=["installationTopology",...Gn,"hpGeneration","openquattEnabled",...ct,...bo,"boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...Yt,...vo,...lt,"maxWater",...wo,"minRuntime"],Cp={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...lt,...ys,...wo,...As,...eo,...to,"maxWater",...Lr],service:[...Dr,...Fr,...eo,...to,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...Yt,...vo,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...$s],integrations:[...Ss,...Cs,...ks,...Ts,...xr,...Es,...qs],system:["setupComplete",...Zt,"firmwareUpdateChannel","projectVersionText","releaseChannelText","trendHistoryEnabled","trendHistoryFlashEnabled","webServerLogHistoryEnabled","debugLevel","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites"]};function sl(e=n.settingsGroup){const t=xe.has(e)?e:ye[0].id;return[...new Set(["setupComplete","strategy",...$e,...Cp[t]||[]])]}function ll(){const e=xe.has(n.settingsGroup)?n.settingsGroup:ye[0].id;return[...new Set(Si[e]||Si.installation)]}function Tp(e={}){const t=n.pendingEntitySyncOptions||{},o={...t,...e};t.forceBulk||e.forceBulk?(o.forceBulk=!0,o.forceFast=!1):(t.forceFast||e.forceFast)&&(o.forceFast=!0),n.pendingEntitySyncOptions=o}function ha(e){const t=String(T(e)??"").trim().toLowerCase();return t!==""&&t!=="unknown"&&t!=="unavailable"&&t!=="nan"}function ki(e){return ha(e)&&Number.isFinite(Ue(T(e)))}function fa(){return n.appView==="overview"||n.appView==="diagnosis"||n.appView==="energy"}function Ep(){return Fu.filter(e=>{const t=n.entities[e];return t?!String(t.uom??t.unit_of_measurement??"").trim():!O[e]?.optional})}async function cl(){if(n.nativeOpen||!fa()||n.overviewMetadataHydrated||n.overviewMetadataHydrating)return!1;const e=Ep();if(!e.length)return n.overviewMetadataHydrated=!0,!1;n.overviewMetadataHydrating=!0;try{return await B(e,"all",{concurrency:St}),n.overviewMetadataHydrated=!0,!0}catch{return!1}finally{n.overviewMetadataHydrating=!1,n.mounted&&!n.nativeOpen&&g()}}function Ci(){return fa()?fp.every(ha)&&bp.every(ki)&&vp.some(ki):!0}function $p(){return n.appView==="settings"}function Ti(){return $p()?ll().every(e=>O[e]?.optional&&!n.entities[e]?!0:ha(e)):!0}async function Ap(){if(Ci())return;const e=Date.now()+wp;for(;!n.nativeOpen&&!Ci()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,yp));try{await B(hp,"state")}catch{return}}}async function Hp(){if(Ti())return;const e=Date.now()+qp;for(;!n.nativeOpen&&!Ti()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,Sp));try{await B(ll(),"all")}catch{return}}}function _(e,t=T(e)){if(t===""||t===null||Number.isNaN(Number(t)))return"\u2014";const o=ze(e),r=o.step<1?Math.min(4,Math.max(1,String(o.step).split(".")[1]?.length||1)):0;return`${Number(t).toFixed(r)}${o.uom?` ${o.uom}`:""}`}function we(e,t){const o=ze(e),r=Ue(t);if(Number.isNaN(r)){const u=Ue(n.entities[e]?.value??n.entities[e]?.state??"");return Number.isNaN(u)?o.min:u}const a=Math.min(o.max,Math.max(o.min,r)),i=Math.round((a-o.min)/o.step),l=o.min+i*o.step,d=o.step<1?Math.min(4,Math.max(1,String(o.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(d))}function ul(){const e=ce[Math.floor(ce.length/2-1)],t=ce[Math.floor(ce.length/2)];if(!e||!t||!b("curveFallbackSupply"))return null;const o=we(e.key,T(e.key)),r=we(t.key,T(t.key)),a=(o+r)/2,i=we("curveFallbackSupply",a);return{value:i,label:_("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${t.label}).`,isCurrent:we("curveFallbackSupply",T("curveFallbackSupply"))===i}}const Mp=8e3,dl=3e3,Ei="/openquatt/entities",Pp=900;function Np(){return n.deviceReconnectMode||n.busyAction==="restartAction"||n.updateInstallBusy||n.updateInstallPhaseHint?dl:Mp}function pl(e){const t=String(e||"").toLowerCase();return t.includes("failed to fetch")||t.includes("load failed")||t.includes("networkerror")||t.includes("network request failed")||t.includes("connection refused")||t.includes("connection reset")||t.includes("err_connection")||t.includes("timeout")}const Rp=300*1e3;function Lp(){if(n.optionalMissingEntities)for(const e of Object.keys(n.optionalMissingEntities))delete n.optionalMissingEntities[e]}function Op(){const e=Date.now();n.lastEntitySyncAt=e,n.lastEntitySyncSuccessAt=e,n.entitySyncFailureCount=0,!!n.deviceReconnectMode&&typeof wi=="function"&&wi()&&(n.lastFastEntitySyncAt=0,n.lastBulkEntitySyncAt=0,n.lastStaticEntitySyncAt=0,n.trendHistoryRaw="",n.trendHistoryError="",n.trendHistorySignature="",n.trendHistoryNowMs=Number.NaN,n.trendHistoryLastFetchAt=0,typeof Wi=="function"?Wi():(wt(),$o(),n.webServerLogEnabled=null,n.webServerLogConnected=!1),Lp())}function gl(e){if(!pl(e)){n.entitySyncFailureCount=0,Qs();return}n.entitySyncFailureCount=Number(n.entitySyncFailureCount||0)+1,n.deviceReconnectLastError=String(e||""),(n.deviceReconnectMode||n.busyAction==="restartAction"||n.updateInstallBusy||n.updateInstallPhaseHint||n.entitySyncFailureCount>=2)&&sa(n.updateInstallBusy||n.updateInstallPhaseHint?"ota":n.busyAction==="restartAction"?"restart":"reconnect",e)}function Dp(e=Date.now(),t={}){if(t.forceProbe===!0||n.deviceReconnectMode||n.busyAction==="restartAction"||n.updateInstallBusy||n.updateInstallPhaseHint||Number(n.entitySyncFailureCount||0)>0)return!0;const o=Number(n.lastEntitySyncSuccessAt||n.lastEntitySyncAt||n.lastEntityResponseAt||0);if(!o)return!0;const r=document.hidden?Wr:_u;return e-o>=r}async function Fp(){const e=O.status||O.setupComplete;if(!e)return{ok:!0,message:""};const t=n.deviceReconnectMode?dl:ju,o=G(e.domain,e.name);if(typeof AbortController=="function"){const r=new AbortController,a=window.setTimeout(()=>r.abort(),t);try{const i=await fetch(o,{cache:"no-store",signal:r.signal});return n.lastEntityResponseAt=Date.now(),{ok:i.ok||i.status===404,message:i.ok||i.status===404?"":`${e.name} HTTP ${i.status}`}}catch(i){return{ok:!1,message:r.signal.aborted?`${e.name} request timed out after ${t}ms`:i.message||String(i)}}finally{window.clearTimeout(a)}}try{const r=await fetch(o,{cache:"no-store"});return n.lastEntityResponseAt=Date.now(),{ok:r.ok||r.status===404,message:r.ok||r.status===404?"":`${e.name} HTTP ${r.status}`}}catch(r){return{ok:!1,message:r.message||String(r)}}}function xp(e,t=Date.now()){const o=n.optionalMissingEntities?.[e];return!O[e]?.optional||!o?!1:t-Number(o)<Rp}function Ip(e,t=Date.now()){n.optionalMissingEntities&&(n.optionalMissingEntities[e]=t)}function Wp(e){const t=O[e];return t?`${e}	${t.domain}	${t.name}`:""}function $i(e,t){const o=new URLSearchParams;return o.set("detail",t==="all"?"all":"state"),o.set("entities",e.join(`
`)),o.toString()}function ml(e,t){const o=[];let r=[],a=[],i="";return e.forEach(l=>{const d=Wp(l);if(!d)return;const u=[...a,d],c=$i(u,t);if(a.length&&c.length>Pp){o.push({keys:r,body:i}),r=[l],a=[d],i=$i(a,t);return}r=[...r,l],a=u,i=c}),a.length&&o.push({keys:r,body:i}),o}async function Bp(e){const t=Np(),o={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body};if(typeof AbortController=="function"){const a=new AbortController,i=window.setTimeout(()=>a.abort(),t);try{const l=await fetch(Ei,{...o,signal:a.signal});if(!l.ok)throw new Error(`bulk entities HTTP ${l.status}`);return l.json()}catch(l){throw a.signal.aborted?new Error(`bulk entities request timed out after ${t}ms`):l}finally{window.clearTimeout(i)}}const r=await fetch(Ei,o);if(!r.ok)throw new Error(`bulk entities HTTP ${r.status}`);return r.json()}async function B(e,t="state",o={}){const r=Date.now(),a=o.forceMissing===!0,i=e.filter(m=>a||!xp(m,r));if(!i.length)return;const l=Number(o.concurrency),d=Number.isFinite(l)&&l>0?Math.floor(l):St,u=ml(i,t),c=Math.max(1,Math.min(d,St)),p=[];for(let m=0;m<u.length;m+=c){const v=u.slice(m,m+c),q=await Promise.allSettled(v.map(async h=>({chunk:h,payload:await Bp(h)})));p.push(...q)}p.some(m=>m.status==="fulfilled")&&(n.lastEntityResponseAt=Date.now());let f="";p.forEach(m=>{if(m.status!=="fulfilled"){const w=m.reason.message||String(m.reason);f||(f=w);return}const{chunk:v,payload:q}=m.value,h=q?.entities&&typeof q.entities=="object"?q.entities:{},y=new Set(Array.isArray(q?.missing)?q.missing:[]);v.keys.forEach(w=>{if(Object.prototype.hasOwnProperty.call(h,w)){n.optionalMissingEntities&&delete n.optionalMissingEntities[w],n.entities[w]=Vp(w,n.entities[w],h[w]);return}const S=O[w];S?.optional?y.has(w)&&Ip(w,r):f||(f=`${S?.name||w} ontbreekt in bulk response`)})}),cg(),sc(Oo()),f?(gl(f),n.deviceReconnectMode?n.controlError="":n.controlError=`Niet alle helpervelden konden worden ververst. ${f}`):n.busyAction||(Op(),n.controlError="")}function Vp(e,t={},o={}){const r={...t||{},...o||{}};return O[e]?.domain==="select"&&(!String(o.state??"").trim()&&String(t?.state??"").trim()&&(r.state=t.state),!String(o.value??"").trim()&&String(t?.value??"").trim()&&(r.value=t.value),!Array.isArray(o.option)&&Array.isArray(t?.option)&&(r.option=t.option),!Array.isArray(o.options)&&Array.isArray(t?.options)&&(r.options=t.options)),r}function Ai(e=n.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function hl(){const e=n.authStatus||{};n.authDraftUsername=e.enabled?String(e.username||"").trim():"",n.authDraftCurrentPassword="",n.authDraftNewPassword="",n.authDraftConfirmPassword=""}function fr(e=n.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function br(e=n.mqttStatus||{}){return[e.enabled?"on":"off",e.connected?"connected":"disconnected",String(e.broker||""),String(e.port||""),String(e.username||""),String(e.base_topic||""),String(e.publish_profile||""),String(e.essential_interval_s||""),String(e.standard_interval_s||""),String(e.diagnostic_interval_s||""),e.retain_snapshots?"retain":"volatile",e.password_set?"set":"empty",String(e.source||""),String(e.csrf_token||"")].join(":")}function fl(){const e=n.mqttStatus||{};n.mqttDraftEnabled=e.enabled===!0,n.mqttDraftBroker=String(e.broker||""),n.mqttDraftPort=String(e.port||1883),n.mqttDraftUsername=String(e.username||""),n.mqttDraftPassword="",n.mqttDraftBaseTopic=String(e.base_topic||"openquatt"),n.mqttDraftPublishProfile=String(e.publish_profile||"standard"),n.mqttDraftEssentialIntervalS=String(e.essential_interval_s??10),n.mqttDraftStandardIntervalS=String(e.standard_interval_s??30),n.mqttDraftDiagnosticIntervalS=String(e.diagnostic_interval_s??60),n.mqttDraftRetainSnapshots=e.retain_snapshots!==!1,n.mqttNotice="",n.mqttError=""}function ba(e,t={},o=Ku){if(t.force===!0)return!0;const r=Number(e||0);return!r||Date.now()-r>=o}function jp(){return n.systemModal==="login"||n.systemModal==="api-security"||To()}function _p(){return n.systemModal==="api-security"||To()}function Kp(){return n.systemModal==="mqtt"||il()}function bl(e){const t=String(e||"").trim().toLowerCase();return t==="off"?"Uit":t==="essential"?"Essential":t==="diagnostic"?"Diagnostic":"Standard"}async function nn(e={}){if(!ba(n.lastAuthStatusRefreshAt,e))return!1;n.lastAuthStatusRefreshAt=Date.now();try{const t=await fetch("/auth/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json(),r={enabled:!!o.enabled,setup_window_active:!!o.setup_window_active,username:String(o.username||""),source:String(o.source||""),csrf_token:String(o.csrf_token||"")},a=Ai(),i=Ai(r);return n.authStatus=r,a!==i&&hl(),n.systemModal==="login"&&(n.authError=""),a!==i}catch(t){return n.systemModal==="login"&&(n.authError=`Loginstatus kon niet worden geladen. ${t.message}`),!1}}function Zn(){return n.nativeOpen||n.systemModal!=="login"?!1:(n.authStatus||{}).setup_window_active!==!0}function Jn(){n.loginAuthStatusPollTimer&&(window.clearTimeout(n.loginAuthStatusPollTimer),n.loginAuthStatusPollTimer=null)}function vl(e=Uu){n.loginAuthStatusPollTimer||!Zn()||(n.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(n.loginAuthStatusPollTimer=null,!Zn())return;const t=n.authError;(await nn({force:!0})||n.authError!==t)&&n.systemModal==="login"&&g(),Zn()&&vl()},Math.max(0,Number(e)||0)))}async function Up(e={}){if(n.systemModal!=="login")return!1;const t=n.authError,o=await nn({force:!0});return(o||n.authError!==t)&&n.systemModal==="login"&&g(),e.poll!==!1&&Zn()&&vl(),o}async function on(e={}){if(!ba(n.lastApiSecurityStatusRefreshAt,e))return!1;n.lastApiSecurityStatusRefreshAt=Date.now();try{const t=await fetch("/api-security/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json(),r={enabled:!!o.enabled,transport_active:!!o.transport_active,pending_restart:!!o.pending_restart,key:String(o.key||""),source:String(o.source||""),csrf_token:String(o.csrf_token||"")},a=fr(),i=fr(r);return n.apiSecurityStatus=r,n.apiSecurityError="",a!==i&&(n.apiSecurityNotice=""),a!==i}catch(t){return n.apiSecurityError=`API-beveiliging kon niet worden geladen. ${t.message}`,!1}}function va(){const e=n.mqttStatus;return e?e.enabled!==!0?"Uit":e.connected===!0?"Verbonden":String(e.broker||"").trim()?"Verbinding maken":"Geen broker":"Laden..."}function wa(){const e=n.mqttStatus;if(!e)return"MQTT-configuratie wordt geladen.";const t=String(e.broker||"").trim(),o=String(e.base_topic||"").trim(),r=bl(e.publish_profile);return e.enabled!==!0?"MQTT staat uit en maakt geen verbinding.":e.connected===!0?t?`Verbonden met ${t}${o?` en publiceert ${r.toLowerCase()} telemetry via ${o}.`:"."}`:"MQTT is verbonden en publiceert met de opgeslagen instellingen.":t?o?`De broker staat ingesteld op ${t}; het device probeert ${r.toLowerCase()} telemetry via ${o} te publiceren.`:`De broker staat ingesteld op ${t}; het device probeert verbinding te maken.`:"Er is nog geen broker opgeslagen."}async function Eo(e={}){if(!ba(n.lastMqttStatusRefreshAt,e))return!1;n.lastMqttStatusRefreshAt=Date.now();try{const t=await fetch("/mqtt/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json(),r={enabled:!!o.enabled,connected:!!o.connected,broker:String(o.broker||""),port:Number(o.port||0),username:String(o.username||""),base_topic:String(o.base_topic||""),publish_profile:String(o.publish_profile||"standard"),essential_interval_s:Number(o.essential_interval_s??10),standard_interval_s:Number(o.standard_interval_s??30),retain_snapshots:o.retain_snapshots!==!1,password_set:!!o.password_set,source:String(o.source||""),csrf_token:String(o.csrf_token||"")},a=br(),i=br(r);return n.mqttStatus=r,a!==i&&fl(),n.systemModal==="mqtt"&&(n.mqttError=""),a!==i}catch(t){return n.systemModal==="mqtt"&&(n.mqttError=`MQTT-status kon niet worden geladen. ${t.message}`),!1}}async function wl(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();let o=!1;try{o=document.execCommand("copy")}finally{document.body.removeChild(t)}return o}async function zp(){await It("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"})}async function Gp(){const e=n.apiSecurityStatus||{};if(!e.csrf_token){n.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",g();return}n.apiSecurityBusy=!0,n.apiSecurityNotice="",n.apiSecurityError="",g();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const o=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await o.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!o.ok||!r.ok)throw new Error(r.error||`HTTP ${o.status}`);await on({force:!0}),n.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",n.apiSecurityError="",g()}catch(t){n.apiSecurityError=`Inschakelen is mislukt. ${t.message}`,g()}finally{n.apiSecurityBusy=!1,g()}}async function Qp(){const e=n.apiSecurityStatus||{};if(!e.csrf_token){n.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",g();return}n.apiSecurityBusy=!0,n.apiSecurityNotice="",n.apiSecurityError="",g();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const o=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await o.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!o.ok||!r.ok)throw new Error(r.error||`HTTP ${o.status}`);await on({force:!0}),n.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",n.apiSecurityError="",g()}catch(t){n.apiSecurityError=`Roteren is mislukt. ${t.message}`,g()}finally{n.apiSecurityBusy=!1,g()}}async function Yp(){const e=n.apiSecurityStatus||{};if(!e.csrf_token){n.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",g();return}if(!e.enabled){n.apiSecurityNotice="API-encryptie staat al uit.",n.apiSecurityError="",g();return}n.apiSecurityBusy=!0,n.apiSecurityNotice="",n.apiSecurityError="",g();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const o=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await o.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!o.ok||!r.ok)throw new Error(r.error||`HTTP ${o.status}`);await on({force:!0}),n.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",n.apiSecurityError="",g()}catch(t){n.apiSecurityError=`Uitzetten is mislukt. ${t.message}`,g()}finally{n.apiSecurityBusy=!1,g()}}async function Zp(){const e=n.mqttStatus||{},t=!!n.mqttDraftEnabled,o=String(n.mqttDraftBroker||"").trim(),r=Number(String(n.mqttDraftPort||"").trim()),a=String(n.mqttDraftUsername||"").trim(),i=String(n.mqttDraftPassword||""),l=String(n.mqttDraftBaseTopic||"").trim(),d=String(n.mqttDraftPublishProfile||"standard").trim().toLowerCase(),u=Number(String(n.mqttDraftEssentialIntervalS||"").trim()),c=Number(String(n.mqttDraftStandardIntervalS||"").trim()),p=Number(String(n.mqttDraftDiagnosticIntervalS||"").trim()),f=!!n.mqttDraftRetainSnapshots;if(!l){n.mqttError="Vul een base topic in.",g();return}if(!Number.isFinite(r)||r<1||r>65535){n.mqttError="Vul een geldige poort in.",g();return}if(t&&!o){n.mqttError="Vul een broker in als je MQTT inschakelt.",g();return}if(!e.csrf_token){n.mqttError="MQTT-configuratie laden nog. Probeer het zo opnieuw.",g();return}if(!["off","essential","standard","diagnostic"].includes(d)){n.mqttError="Kies een geldig publish-profiel.",g();return}if(!Number.isFinite(u)||u<1||u>3600){n.mqttError="Vul een geldig essential interval in.",g();return}if(!Number.isFinite(c)||c<1||c>3600){n.mqttError="Vul een geldig standard interval in.",g();return}if(!Number.isFinite(p)||p<1||p>3600){n.mqttError="Vul een geldig diagnostic interval in.",g();return}n.mqttBusy=!0,n.mqttError="",n.mqttNotice="",g();try{const m=new URLSearchParams;m.set("csrf_token",e.csrf_token),m.set("enabled",t?"true":"false"),m.set("broker",o),m.set("port",String(r)),m.set("username",a),m.set("password",i),m.set("base_topic",l),m.set("publish_profile",d),m.set("essential_interval_s",String(u)),m.set("standard_interval_s",String(c)),m.set("diagnostic_interval_s",String(p)),m.set("retain_snapshots",f?"true":"false");const v=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:m.toString()}),q=await v.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!v.ok||!q.ok)throw new Error(q.error||`HTTP ${v.status}`);await Eo({force:!0}),n.mqttNotice=t?"MQTT staat nu aan.":"MQTT-configuratie opgeslagen.",n.mqttError="",g()}catch(m){n.mqttError=`Opslaan is mislukt. ${m.message}`,g()}finally{n.mqttBusy=!1,g()}}async function Jp(){const e=String(n.apiSecurityStatus?.key||"").trim();if(!e){n.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",g();return}try{if(!await wl(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");n.apiSecurityNotice="API-sleutel gekopieerd.",n.apiSecurityError="",g()}catch(t){n.apiSecurityError=`Kopi\xEBren is mislukt. ${t.message}`,g()}}function vr(){n.settingsBackupDraft=null,n.settingsBackupError="",n.settingsBackupBusy=!1}function Xp(){return{device:Le(),installation:Nn(),topology:typeof de=="function"?de():"",firmware_version:ue(),firmware_channel:String(T("firmwareUpdateChannel")||T("releaseChannelText")||"").trim()}}function yl(e){const t=O[e];if(!t)return;if(e==="setupComplete")return Rl();const o=T(e);if(o===""||o===null||o===void 0)return;if(t.domain==="switch"||t.domain==="binary_sensor")return A(e);if(t.domain==="number"){const a=Ue(o);return Number.isNaN(a)?void 0:a}return t.domain==="time"?tn(o)||void 0:t.domain==="datetime"?Ge(o)||void 0:String(o||"").trim()||void 0}function ql(){const e={};return _t.forEach(t=>{const o={};t.keys.forEach(r=>{const a=yl(r);a!==void 0&&(o[r]=a)}),e[t.id]=o}),{schema_version:Ms,exported_at:new Date().toISOString(),source:Xp(),settings:e}}function eg(e=ql()){const t=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${t}.json`}function tg(e,t){const o=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(o),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function ng(e){const t=O[e];return t?.name?t.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function Hi(e,t){if(t==null||t==="")return"\u2014";const o=O[e];return o?o.domain==="number"?_(e,t):o.domain==="time"?tn(t)?.slice(0,5)||"\u2014":o.domain==="datetime"?Ge(t)||"\u2014":o.domain==="switch"||o.domain==="binary_sensor"?t?"Aan":"Uit":String(t).trim()||"\u2014":String(t).trim()||"\u2014"}function og(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function Sl(e){const t=e?.settings&&typeof e.settings=="object"?e.settings:{},o=e?.source&&typeof e.source=="object"?e.source:{},r=Iu;let a=0,i=0,l=0,d=0,u=0,c=0,p=0,f=0;const m=_t.map(v=>{const q=t[v.id]&&typeof t[v.id]=="object"?t[v.id]:{};let h=0,y=0,w=0,S=0,$=0,k=0,H=0;const L=v.keys.map(F=>{const C=!!O[F]?.optional,E=Object.prototype.hasOwnProperty.call(q,F),N=E?q[F]:void 0,I=yl(F),K=b(F),R=E?Hi(F,N):C?"Niet op huidige installatie":"Ontbreekt in backup",V=K?Hi(F,I):C?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie";let P="same";return!E&&C?P="optional-missing":E?K?JSON.stringify(I)!==JSON.stringify(N)&&(P="different"):P=C?"optional-unavailable":"current-missing":P="missing",K&&(H+=1,f+=1),P!=="same"&&(k+=1,p+=1),C?($+=1,E?(w+=1,l+=1):(S+=1,d+=1)):E?(h+=1,a+=1):(y+=1,i+=1),{key:F,label:ng(F),optional:C,hasBackupValue:E,backupDisplay:R,currentDisplay:V,status:P,statusLabel:og(P)}});return c+=v.keys.filter(F=>!O[F]?.optional).length,{id:v.id,label:v.label,present:h,currentPresent:H,requiredTotal:v.keys.filter(F=>!O[F]?.optional).length,optionalTotal:$,optionalPresent:w,optionalMissing:S,requiredMissing:y,total:v.keys.length,differenceCount:k,rows:L}});return Object.entries(t).forEach(([v,q])=>{if(!_t.some(h=>h.id===v)){u+=1;return}!q||typeof q!="object"||Object.keys(q).forEach(h=>{r.has(h)||(u+=1)})}),{source:o,sectionSummaries:m,requiredPresent:a,requiredMissing:i,requiredAvailable:c,optionalPresent:l,optionalMissing:d,unknown:u,differenceCount:p,currentPresent:f,requiredTotal:c,total:Pn.length}}function rg(e,t=""){const o=JSON.parse(e);if(!o||typeof o!="object")throw new Error("Backupbestand bevat geen JSON-object.");const r=Number(o.schema_version??o.schemaVersion??0);if(!Number.isInteger(r)||r<Ms)throw new Error("Onbekende backupversie.");const a=o.settings&&typeof o.settings=="object"?o.settings:{},i={schema_version:r,exported_at:String(o.exported_at||""),source:o.source&&typeof o.source=="object"?o.source:{},settings:a,file_name:t||""};return i.summary=Sl(i),i}async function ag(){n.settingsBackupBusy=!0,n.controlError="",n.controlNotice="",g();try{return await B(Pn,"all"),ql()}finally{n.settingsBackupBusy=!1,g()}}async function ig(){if(!n.settingsBackupBusy)try{const e=await ag();tg(eg(e),e),n.controlNotice="Settings-backup gedownload.",g()}catch(e){n.controlError=`Backup exporteren mislukt. ${e.message}`,g()}}async function sg(e){if(!(!e||n.settingsBackupBusy)){n.settingsBackupBusy=!0,n.settingsBackupDraft=null,n.settingsBackupError="",n.controlError="",n.controlNotice="",g();try{const t=await e.text(),o=rg(t,e.name||"");n.settingsBackupDraft=o,n.systemModal="settings-backup-restore"}catch(t){n.settingsBackupDraft=null,n.settingsBackupError=`Backupbestand kon niet worden gelezen. ${t.message}`}finally{n.settingsBackupBusy=!1,g()}}}async function Sn(e,t){const o=O[e];if(!o)throw new Error(`Onbekend veld ${e}.`);if(o.domain==="select"){const r=String(t||"").trim(),a=await fetch(`${G(o.domain,o.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="number"){const r=we(e,t),a=await fetch(`${G(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="time"){const r=tn(t),a=await fetch(`${G(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="datetime"){const r=Ge(t),a=await fetch(`${G(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="text"){const r=String(t||"").trim(),a=await fetch(`${G(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="switch"||o.domain==="binary_sensor"){const r=!!t,a=r?"turn_on":"turn_off",i=await fetch(G(o.domain,o.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return r}throw new Error(`${o.name} kan niet worden hersteld.`)}async function lg(){const e=n.settingsBackupDraft;if(!e||n.settingsBackupBusy)return;n.settingsBackupBusy=!0,n.settingsBackupError="",n.controlError="",n.controlNotice="",g();const t=[],o=[];let r=!1;try{await B(Pn,"all");for(const i of _t){const l=e.settings?.[i.id]&&typeof e.settings[i.id]=="object"?e.settings[i.id]:{};for(const d of i.keys){if(!Object.prototype.hasOwnProperty.call(l,d)){o.push(d);continue}const u=l[d];if(d==="setupComplete"){r=u===!0;continue}if(d==="openquattEnabled")continue;if(!O[d]||!b(d)){o.push(d);continue}try{await Sn(d,u),t.push(d)}catch{o.push(d)}}}const a=e.settings?.operation?.openquattEnabled;if(Object.prototype.hasOwnProperty.call(e.settings?.operation||{},"openquattEnabled")&&b("openquattEnabled")&&(await Sn("openquattEnabled",a),t.push("openquattEnabled")),r&&O.apply){const i=await fetch(G("button","Complete setup","press"),{method:"POST"});if(!i.ok)throw new Error(`Setup bevestigen mislukt (HTTP ${i.status}).`);t.push("setupComplete")}else Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&o.push("setupComplete");n.systemModal="settings-backup-success",vr(),n.controlNotice=`Backup hersteld (${t.length} toegepast${o.length?`, ${o.length} overgeslagen`:""}).`,await re()}catch(a){n.settingsBackupError=`Backup herstellen mislukt. ${a.message}`}finally{n.settingsBackupBusy=!1,g()}}function kl(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}async function ya(e={}){if(!rn()){const r=!!(n.trendHistoryRaw||n.trendHistoryError);return n.trendHistoryRaw="",n.trendHistoryError="",n.trendHistorySignature="",n.trendHistoryNowMs=Number.NaN,n.trendHistoryLastFetchAt=0,r}if(kl())return!1;const t=e.force===!0,o=Date.now();if(!t&&n.trendHistoryFetchPromise)return n.trendHistoryFetchPromise;if(!t&&(n.trendHistoryRaw||n.trendHistoryError)&&o-Number(n.trendHistoryLastFetchAt||0)<hs)return!1;n.trendHistoryFetchPromise=(async()=>{const r=Br(n.trendWindowHours||Kt);r!==n.trendWindowHours&&Vr(r);const a=await fetch(`${Jt()}/trends/history?hours=${encodeURIComponent(String(r))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const i=await a.text(),l=i.split(/\r?\n/);let d=Number.NaN,u=i;l.length&&l[0].startsWith("@now|")&&(d=Number(l[0].slice(5)),u=l.slice(1).join(`
`));const c=`${r}|${u.length}|${u.slice(0,120)}|${u.slice(-120)}`,p=Number.isFinite(n.trendHistoryNowMs),m=Number.isFinite(d)?!p||n.trendHistoryNowMs!==d:p,v=u!==n.trendHistoryRaw||n.trendHistoryError!==""||n.trendHistorySignature!==c||m;return n.trendHistoryRaw=u,n.trendHistoryError="",n.trendHistorySignature=c,n.trendHistoryNowMs=Number.isFinite(d)?d:Number.NaN,n.trendHistoryLastFetchAt=Date.now(),v})();try{return await n.trendHistoryFetchPromise}catch(r){const a=`Trendhistorie kon niet worden geladen. ${r.message}`,i=n.trendHistoryError!==a;return n.trendHistoryError=a,n.trendHistoryRaw="",n.trendHistorySignature="",n.trendHistoryNowMs=Number.NaN,n.trendHistoryLastFetchAt=Date.now(),i}finally{n.trendHistoryFetchPromise=null}}async function io(e={}){if(!b("lifetimeEnergyHistoryEnabled")&&!kl()){const r=!!(n.energyHistoryRaw||n.energyHistoryError);return n.energyHistoryRaw="",n.energyHistoryError="",n.energyHistorySignature="",n.energyHistoryNowMs=Number.NaN,n.energyHistoryLastFetchAt=0,r}const t=e.force===!0,o=Date.now();if(!t&&n.energyHistoryFetchPromise)return n.energyHistoryFetchPromise;if(!t&&(n.energyHistoryRaw||n.energyHistoryError)&&o-Number(n.energyHistoryLastFetchAt||0)<hs)return!1;n.energyHistoryFetchPromise=(async()=>{const r=await fetch(`${Jt()}/energy/history`,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.text(),i=a.split(/\r?\n/);let l=Number.NaN;i.forEach(m=>{m.startsWith("@now|")&&(l=Number(m.slice(5)))});const d=`${a.length}|${a.slice(0,120)}|${a.slice(-120)}`,u=Number.isFinite(n.energyHistoryNowMs),p=Number.isFinite(l)?!u||n.energyHistoryNowMs!==l:u,f=a!==n.energyHistoryRaw||n.energyHistoryError!==""||n.energyHistorySignature!==d||p;return n.energyHistoryRaw=a,n.energyHistoryError="",n.energyHistorySignature=d,n.energyHistoryNowMs=Number.isFinite(l)?l:Number.NaN,n.energyHistoryLastFetchAt=Date.now(),f})();try{return await n.energyHistoryFetchPromise}catch(r){const a=`Energiehistorie kon niet worden geladen. ${r.message}`,i=n.energyHistoryError!==a;return n.energyHistoryError=a,n.energyHistoryRaw="",n.energyHistorySignature="",n.energyHistoryNowMs=Number.NaN,n.energyHistoryLastFetchAt=Date.now(),i}finally{n.energyHistoryFetchPromise=null}}function cg(){n.complete=Rl(),n.stage=n.complete===!0?"Gereed":n.complete===!1?"Quick Start":"Laden...",n.summary=zg(),n.appView==="diagnosis"&&!rn()&&vt(Ut(),{syncMode:"replace",forceSync:!0}),n.appView||vt(Kr()||Ut(),{syncMode:"replace",forceSync:!0})}function ug(){const e=["setupComplete","strategy",...$e,...kp];return n.appView==="settings"?[...new Set([...e,...sl()])]:n.appView==="energy"?[...new Set([...e,...Mn])]:n.appView==="overview"||n.appView==="diagnosis"?[...new Set([...e,...Qn])]:[...new Set(e)]}function dg(e=[]){const t=new Set(e);return(n.appView==="settings"?[...new Set(["setupComplete","strategy",...$e,...Tt()])]:n.appView==="overview"||n.appView==="diagnosis"||n.appView==="energy"||n.appView==="results"?[...new Set(["setupComplete","strategy",...$e,...Mn,...Zt])]:[...new Set(["setupComplete","strategy",...$e])]).filter(r=>!t.has(r))}async function pg(e,t="state"){if(!(!e.length||n.nativeOpen)){n.entitySyncInFlight=!0;try{await B(e,t,{concurrency:t==="all"?St:Nr})}finally{n.entitySyncInFlight=!1;const o=n.pendingEntitySyncOptions;n.pendingEntitySyncOptions=null,o&&!n.nativeOpen&&window.setTimeout(()=>{re(o)},0)}n.mounted&&!n.nativeOpen&&g()}}function Cl(){if(n.nativeOpen||n.appView!=="settings")return;const e=()=>{if(!(n.nativeOpen||n.appView!=="settings")){if(n.loadingEntities||n.focusedField||n.draggingCurveKey||n.busyAction||n.settingsInteractionLock){window.setTimeout(Cl,250);return}re({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}function Mi(e=Date.now(),t={}){return t.forceBulk===!0?!0:e-Number(n.lastBulkEntitySyncAt||0)>=Bu}async function Tl(){if(!n.nativeOpen)try{fa()&&await cl(),(n.appView==="overview"||n.appView==="diagnosis")&&await ya({force:!0}),n.appView==="results"&&await io({force:!0}),await nn({force:!0}),To()&&await on({force:!0}),il()&&await Eo({force:!0})}finally{n.mounted&&!n.nativeOpen&&g(),Cl()}}async function gg(){if(n.nativeOpen)return;n.loadingEntities=!0,g();const e=mp();e>0&&await new Promise(i=>window.setTimeout(i,e));const t=ug(),o=dg(t),r=n.appView==="settings"?"all":"state";try{await B(t,r,{concurrency:r==="all"?St:Nr}),n.appView==="settings"?await Hp():await Ap()}finally{n.loadingEntities=!1,g()}const a=n.appView==="settings"?"all":"state";window.setTimeout(()=>{pg(o,a),Tl()},0)}async function re(e={}){if(n.nativeOpen||n.loadingEntities||n.draggingCurveKey||n.busyAction||n.settingsInteractionLock||n.focusedField&&n.appView!=="settings")return;if(n.entitySyncInFlight){Tp(e);return}const t=Date.now();if(document.hidden&&t-Number(n.lastEntitySyncAttemptAt||0)<Wr)return;const o=n.appView,r=e.prefetchView==="overview"&&!e.forceBulk&&o==="settings",a=r?"overview":o,i=a==="overview"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,d=!l&&!r&&Mi(t,e),c=t-Number(n.lastStaticEntitySyncAt||0)>=Vu||n.updateInstallBusy||n.updateInstallPhaseHint?Zt:[],p=n.quickStartModalOpen&&n.currentStep==="flow-source"?ct:[],f=n.quickStartModalOpen&&n.currentStep==="thermostat-source"?bo:[],m=r?[...Qn,...$e,"setupComplete",...c]:i?[...l?Qn:d?Mn:Qn,...$e,"setupComplete",...c]:o==="settings"?[...new Set([...sl(),...c])]:d?["setupComplete",...c,...$e,"strategy",...Hn,...lt,...ie()?ce.map(v=>v.key):Yt]:["setupComplete",...$e,"strategy",...c];n.entitySyncInFlight=!0,n.lastEntitySyncAttemptAt=t;try{const v=n.deviceReconnectMode,q=Dp(t,e)?await Fp():{ok:!0,message:""};if(!q.ok){gl(q.message),r||g();return}if(await B([...new Set([...m,...p,...f])],r?"state":o==="settings"?"all":"state",{concurrency:l&&i?Nr:St}),n.lastFastEntitySyncAt=Date.now(),d&&i&&!r&&(n.lastBulkEntitySyncAt=n.lastFastEntitySyncAt),c.length&&(n.lastStaticEntitySyncAt=n.lastFastEntitySyncAt),r)return;i&&!n.overviewMetadataHydrated&&!n.overviewMetadataHydrating&&cl();const h=v!==n.deviceReconnectMode,y=l&&i,w=y?!1:a==="overview"||a==="diagnosis"?await ya():!1,S=y?!1:n.appView==="results"?await io():!1,$=y||!jp()?!1:await nn(),k=y||!_p()?!1:await on(),H=y||!Kp()?!1:await Eo(),L=pr();if(h){g();return}if(w&&n.appView==="diagnosis"&&!n.root?.querySelector(".oq-overview-trends")){g();return}if(S&&n.appView==="results"&&!n.root?.querySelector(".oq-energy-history")){g();return}if($&&(n.systemModal==="login"||To())){g();return}if(k&&n.appView==="settings"){g();return}if(H&&n.appView==="settings"){g();return}const F=!!(n.updateModalOpen||n.systemModal||n.interfacePanelOpen);if(L!==n.headerRenderSignature)if(F&&gr())n.headerRenderSignature=L;else{g();return}else gr();if(n.appView==="settings"&&String(n.systemModal||"").startsWith("service-task-")){wr()!==n.settingsRenderSignature&&g();return}if(F)return;if(n.appView==="settings"){const U=wr();if(U!==n.settingsRenderSignature&&!n.focusedField){g();return}if(!mh()){n.focusedField||g();return}n.focusedField&&(n.settingsRenderSignature=U);return}if(n.appView==="diagnosis"){ob()||g();return}if(n.appView==="energy"){Wb()||g();return}if(n.appView==="results"){Bb()||g();return}mv()||g(),y&&!n.nativeOpen&&window.setTimeout(()=>{Tl()},0)}catch(v){r||(n.controlError=`Helperstatus kon niet worden geladen. ${v.message}`,g())}finally{n.entitySyncInFlight=!1;const v=n.pendingEntitySyncOptions;n.pendingEntitySyncOptions=null,v&&!n.nativeOpen&&window.setTimeout(()=>{re(v)},0),l&&i&&!r&&!n.nativeOpen&&!v&&Mi(Date.now())&&window.setTimeout(()=>{re({forceBulk:!0})},0)}}function Pi(){window.setTimeout(()=>{const e=document.activeElement;n.focusedField=e&&e.dataset&&e.dataset.oqField||"",n.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function mg(e){e.target.closest(".oq-ph-concept-hotspot")&&(n.settingsInteractionLock=!0)}function hg(e){const t=e.target.closest(".oq-ph-concept-hotspot");if(!t||e.relatedTarget&&t.contains(e.relatedTarget))return;const o=n.root&&n.root.querySelector(".oq-ph-concept-hotspot:hover"),r=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;n.settingsInteractionLock=!!(o||r)}function oe(e){const t=n.entities[e];if(!t)return n.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;const o=t.state??t.value??"",r=Array.isArray(t.option)?t.option.join(","):Array.isArray(t.options)?t.options.join(","):"",a=[t.min_value??"",t.max_value??"",t.step??"",t.uom??""].join(",");return`${e}:${o}::${r}::${a}`}function wr(){return[n.appView,n.settingsGroup,n.busyAction,n.loadingEntities?"loading":"ready",fr(),br(),oe("setupComplete"),...Hs.map(e=>oe(e))].join("|")}function be(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function El(){return[n.appView,n.busyAction,oe("openquattEnabled"),oe("openquattResumeAt"),oe("manualCoolingEnable"),oe("silentModeOverride"),oe("controlModeLabel"),oe("coolingPermitted"),oe("coolingRequestActive"),oe("coolingBlockReason"),oe("silentActive")].join("|")}function fg(e){if(e.target.dataset.oqFirmwareConnectionConfirm){n.firmwareConnectionSwitchConfirmed=!!e.target.checked,g();return}if(e.target.dataset.oqFirmwareTestConfirm){n.updateTestFirmwareConfirmed=!!e.target.checked,n.updateTestFirmwareError="";const o=e.target.closest(".oq-helper-modal-callout"),r=o?.querySelector('[data-oq-action="install-firmware-test"]');r&&(r.disabled=!n.updateTestFirmwareConfirmed||!yn()),o?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){n.updateTestFirmwarePr=String(e.target.value||""),n.updateTestFirmwareConfirmed=!1,n.updateTestFirmwareError="",n.updateTestFirmwareBuild=null;const o=e.target.closest(".oq-helper-modal-callout"),r=o?.querySelector('[data-oq-firmware-test-confirm="true"]');r&&(r.checked=!1);const a=o?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!0);const i=yo(),l=Zr(yn(),i),d=o?.querySelector('[data-oq-firmware-test-asset-note="true"]');d&&(d.textContent=l?i.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),o?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),o?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}const t=e.target.dataset.oqField;if(!t){if(e.target.dataset.oqQuickstartCicUrl!==void 0){n.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){n.quickStartThermostatSourceDraft=String(e.target.value||""),g();return}const o=e.target.dataset.oqAuthField;if(!o){const r=e.target.dataset.oqMqttField;if(!r)return;n.mqttNotice="",n.mqttError="",r==="enabled"?n.mqttDraftEnabled=!!e.target.checked:r==="broker"?n.mqttDraftBroker=String(e.target.value||""):r==="port"?n.mqttDraftPort=String(e.target.value||""):r==="username"?n.mqttDraftUsername=String(e.target.value||""):r==="password"?n.mqttDraftPassword=String(e.target.value||""):r==="baseTopic"?n.mqttDraftBaseTopic=String(e.target.value||""):r==="publishProfile"?n.mqttDraftPublishProfile=String(e.target.value||""):r==="essentialIntervalS"?n.mqttDraftEssentialIntervalS=String(e.target.value||""):r==="standardIntervalS"?n.mqttDraftStandardIntervalS=String(e.target.value||""):r==="diagnosticIntervalS"?n.mqttDraftDiagnosticIntervalS=String(e.target.value||""):r==="retainSnapshots"&&(n.mqttDraftRetainSnapshots=!!e.target.checked);return}n.authNotice="",n.authError="",o==="username"?n.authDraftUsername=String(e.target.value||""):o==="currentPassword"?n.authDraftCurrentPassword=String(e.target.value||""):o==="newPassword"?n.authDraftNewPassword=String(e.target.value||""):o==="confirmPassword"&&(n.authDraftConfirmPassword=String(e.target.value||""));return}if(e.target.dataset.oqPauseDraft){n.pauseResumeDraft=String(e.target.value||"");return}if(O[t]?.domain==="text"){n.inputDrafts[t]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(n.inputDrafts[t]=e.target.value);const o=Ue(e.target.value);if(!Number.isNaN(o)){const r=we(t,e.target.value);if(n.drafts[t]=r,e.target.type==="range"){const a=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");a&&(a.textContent=_(t,r))}}}}function bg(e){kh(e)}function Ni(e,t){return e.deltaMode===1?t*16:e.deltaMode===2?t*window.innerHeight:t}function vg(e){let t=e?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){const o=window.getComputedStyle(t),r=/(auto|scroll)/.test(o.overflowY)&&t.scrollHeight>t.clientHeight,a=/(auto|scroll)/.test(o.overflowX)&&t.scrollWidth>t.clientWidth;if(r||a)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function wg(e){const t=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!t||!n.root||!n.root.contains(t)||document.activeElement!==t)return;e.preventDefault(),t.blur();const o=vg(t);o&&typeof o.scrollBy=="function"&&o.scrollBy({left:Ni(e,e.deltaX||0),top:Ni(e,e.deltaY||0),behavior:"auto"})}function yg(e){if(e.target.dataset.oqDevControl==="boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(e.target.value);return}if(e.target.dataset.oqBackupFileInput){const a=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",sg(a);return}if(e.target.dataset.oqFirmwareUploadFileInput){const a=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",a?(n.firmwareAdvancedOpen=!0,n.updateManualUploadOpen=!0,n.updateManualUploadFile=a,n.updateManualUploadFileName=a.name||"",n.updateManualUploadError=""):Ce(),g();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof go=="function"&&go(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}const t=e.target.dataset.oqField;if(!t)return;const o=O[t];if(!o)return;if(o.domain==="select"){yr(t,String(e.target.value));return}if(o.domain==="number"){Sa(t,e.target.value);return}if(o.domain==="text"){Wg(t,e.target.value);return}if(o.domain==="time"){const a=tn(e.target.value);if(!a){n.controlError=`${o.name} verwacht tijd als HH:MM.`,g();return}Ig(t,a);return}if(o.domain==="datetime"){const a=Ge(e.target.value);if(!a){n.controlError=`${o.name} verwacht datum en tijd.`,g();return}Bg(t,a);return}const r=e.target.dataset.oqMqttField;r&&(n.mqttNotice="",n.mqttError="",r==="enabled"?n.mqttDraftEnabled=!!e.target.checked:r==="broker"?n.mqttDraftBroker=String(e.target.value||""):r==="port"?n.mqttDraftPort=String(e.target.value||""):r==="username"?n.mqttDraftUsername=String(e.target.value||""):r==="password"?n.mqttDraftPassword=String(e.target.value||""):r==="baseTopic"?n.mqttDraftBaseTopic=String(e.target.value||""):r==="publishProfile"?n.mqttDraftPublishProfile=String(e.target.value||""):r==="essentialIntervalS"?n.mqttDraftEssentialIntervalS=String(e.target.value||""):r==="standardIntervalS"?n.mqttDraftStandardIntervalS=String(e.target.value||""):r==="diagnosticIntervalS"?n.mqttDraftDiagnosticIntervalS=String(e.target.value||""):r==="retainSnapshots"&&(n.mqttDraftRetainSnapshots=!!e.target.checked))}function qg(e){const t=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(t){const c=t.querySelector("input[data-oq-field]");if(c&&(c.type==="time"||c.type==="datetime-local")&&typeof c.showPicker=="function")try{c.showPicker()}catch{}}const o=e.target.closest('[data-oq-action="toggle-settings-info"]'),r=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-modal]");if(o){const c=o.dataset.infoId||"";n.settingsInfoOpen=n.settingsInfoOpen===c?"":c,g();return}const l=e.target.closest("[data-oq-action]"),d=n.interfacePanelOpen&&!a;if(!l){let c=!1;if(n.settingsInfoOpen&&!r&&(n.settingsInfoOpen="",c=!0),d&&(Yo(!1),c=!0),i&&e.target===i){if(i.dataset.oqModal==="quickstart-forced")return;n.updateModalOpen&&(n.updateModalOpen=!1,n.firmwareAdvancedOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,Ce(),Ke(),c=!0),n.systemModal&&(vr(),Jn(),n.systemModal="",c=!0)}c&&g();return}d&&l.dataset.oqAction!=="toggle-interface-panel"&&Yo(!1);const u=l.dataset.oqAction;if(u==="set-mock-boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(l.dataset.boilerMode||"off");return}if(u==="toggle-interface-panel"){Yo(!n.interfacePanelOpen),g();return}if(u==="toggle-dev-panel"){od(!n.devPanelOpen),g();return}if(u==="toggle-installation-monitoring-details"){e.preventDefault();const c=l.closest(".oq-settings-monitoring-details");n.installationMonitoringDetailsOpen=!(c&&c.hasAttribute("open")),g();return}if(u==="toggle-integration-diagnostics"){e.preventDefault();const c=l.closest(".oq-settings-integration-diagnostics");n.integrationDiagnosticsOpen=!(c&&c.hasAttribute("open")),g();return}if(u==="toggle-odu-runtime-frequency-details"){e.preventDefault();const c=l.closest(".oq-settings-odu-runtime-details");n.oduRuntimeFrequencyDetailsOpen=!(c&&c.hasAttribute("open")),g();return}if(u==="select-view"){if((l.dataset.viewId||"")==="diagnosis"&&!rn())return;const c=l.dataset.viewId||"overview";vt(c,{syncMode:"push"}),g(),re(c==="settings"||c==="energy"||c==="results"?{forceBulk:!0}:{forceFast:!0});return}if(u==="select-trend-window"){if(l.disabled)return;Vr(Number(l.dataset.trendHours||24)),g(),ya({force:!0}).then(c=>{c&&g()});return}if(u==="select-energy-history-view"){if(l.disabled||typeof as!="function")return;as(l.dataset.energyHistoryView||"day");return}if(u==="shift-energy-history-period"){if(l.disabled||typeof cs!="function")return;cs(n.energyHistoryView||"day",l.dataset.energyHistoryDirection||"1");return}if(u==="select-energy-history-now"){if(l.disabled||typeof us!="function")return;us(n.energyHistoryView||"day");return}if(u==="select-settings-group"){Yn(l.dataset.groupId||ye[0].id),g(),re({forceBulk:!0});return}if(u==="open-update-modal"){n.updateModalOpen=!0,g(),Rg().then(()=>{n.updateModalOpen&&!zs()&&!n.updateCheckBusy&&!n.updateInstallBusy&&Ri()});return}if(u==="open-webserver-log-modal"){vm();return}if(u==="open-debug-recording-modal"){n.systemModal="debug-recording",n.debugRecordingError="",n.debugRecordingNotice="",g(),Ha();return}if(u==="open-login-modal"){n.systemModal="login",hl(),n.authNotice="",n.authError="",g(),Up({poll:!0});return}if(u==="open-api-security-modal"){n.systemModal="api-security",n.apiSecurityNotice="",n.apiSecurityError="",g(),on({force:!0});return}if(u==="open-mqtt-modal"){n.systemModal="mqtt",fl(),g(),Eo({force:!0});return}if(u==="copy-api-security-key"){Jp();return}if(u==="enable-api-security"){Gp();return}if(u==="rotate-api-security"){Qp();return}if(u==="disable-api-security"){Yp();return}if(u==="restart-api-security"){zp();return}if(u==="save-mqtt-config"){Zp();return}if(u==="flush-trend-history"){It("trendHistoryFlush",{successNotice:"Trendhistorie is opgeslagen in flash.",errorPrefix:"Trendhistorie kon niet worden opgeslagen",refreshKeys:["trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites"],refreshDelayMs:1e3});return}if(u==="save-lifetime-energy-history"){It("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:["lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites"],refreshDelayMs:1e3}).then(()=>{n.energyHistoryRaw="",n.energyHistorySignature="",n.energyHistoryLastFetchAt=0,n.appView==="results"&&io({force:!0}).then(()=>g())});return}if(u==="clear-lifetime-energy-history"){It("lifetimeEnergyHistoryClear",{successNotice:"Lifetime energiehistorie is gewist.",errorPrefix:"Lifetime energiehistorie kon niet worden gewist"}).then(()=>{n.energyHistoryRaw="",n.energyHistorySignature="",n.energyHistoryLastFetchAt=0,n.appView==="results"&&io({force:!0}).then(()=>g())});return}if(u==="open-history-storage-modal"){n.systemModal="history-storage",g();return}if(u==="open-connectivity-modal"){n.systemModal="connectivity",g();return}if(u==="open-restart-confirm"){n.systemModal="restart-confirm",g();return}if(u==="download-settings-backup"){ig();return}if(u==="open-settings-backup-import"){n.systemModal="settings-backup-import",g();return}if(u==="open-silent-settings-modal"){n.systemModal="silent-settings",g();return}if(u==="open-openquatt-pause-modal"){n.pauseResumeDraft=al(),n.systemModal="openquatt-pause",g();return}if(u==="enable-openquatt-now"){_g();return}if(u==="apply-openquatt-preset"){const c=rl(l.dataset.pausePreset||"");n.pauseResumeDraft=c,Xo(c);return}if(u==="apply-openquatt-indefinite"){Xo("");return}if(u==="apply-openquatt-custom-pause"){if(!String(n.pauseResumeDraft||"").trim()){n.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",g();return}Xo(n.pauseResumeDraft||"");return}if(u==="close-update-modal"){n.updateModalOpen=!1,n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.firmwareAdvancedOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,Ce(),Ke(),g();return}if(u==="close-quickstart-modal"){n.quickStartModalOpen=!1,g();return}if(u==="open-quickstart-modal"){n.currentStep="generation",n.quickStartModalMode="wizard",n.quickStartModalOpen=!0,g();return}if(u==="open-generation-modal"){n.currentStep="generation",n.quickStartModalMode="generation",n.quickStartModalOpen=!0,g();return}if(u==="open-cm100-commissioning-modal"){n.systemModal="",vt("settings"),Yn("service"),g(),re({forceBulk:!0});return}if(u==="open-installation-monitoring"){n.systemModal="",vt("settings"),Yn("service"),g(),re({forceBulk:!0});return}if(u==="open-service-task-modal"){const c=String(l.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(c)&&(n.systemModal=`service-task-${c}`,g(),re({forceBulk:!0}));return}if(u==="press-named-button"){const c=String(l.dataset.oqButtonKey||l.dataset.buttonKey||l.getAttribute("data-oq-button-key")||"").trim();if(c){c==="commissioningCm100Start"?(n.pendingCommissioningCm100Start=!0,n.commissioningTaskLock="cm100",n.commissioningBoilerHeatPowerDisplay=""):c==="commissioningCm100Stop"?(n.pendingCommissioningCm100Start=!1,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="",n.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestStart"?(n.pendingBoilerPowerTestStart=!0,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="boiler",n.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestAbort"||c==="boilerPowerTestApply"?n.commissioningTaskLock="boiler":c==="flowAutotuneStart"?(n.pendingFlowAutotuneStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="autotune"):c==="flowAutotuneAbort"||c==="flowAutotuneApply"?n.commissioningTaskLock="autotune":c==="airPurgeStart"?(n.pendingAirPurgeStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="purge"):c==="airPurgeAbort"?n.commissioningTaskLock="purge":c==="manualFlowStart"?(n.pendingManualFlowStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="manual-flow"):c==="manualFlowAbort"?n.commissioningTaskLock="manual-flow":c==="manualHpStart"?(n.pendingManualHpStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="manual-hp"):c==="hpWaterCalibrationStart"?(n.pendingHpWaterCalibrationStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.commissioningTaskLock="hp-water-calibration"):c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply"?n.commissioningTaskLock="hp-water-calibration":c==="manualHpAbort"&&(n.commissioningTaskLock="manual-hp");const p=[];let f=0,m="",v="";if(c==="acknowledgeCompressorCyclingAlert")p.push(...Dr);else if(c==="commissioningCm100Start"||c==="commissioningCm100Stop")p.push("commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive");else if(c==="boilerPowerTestStart"||c==="boilerPowerTestAbort"||c==="boilerPowerTestApply")p.push("commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower");else if(c==="flowAutotuneStart"||c==="flowAutotuneAbort"||c==="flowAutotuneApply")p.push("commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi");else if(c==="airPurgeStart"||c==="airPurgeAbort")p.push("commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode");else if(c==="hpWaterCalibrationStart"||c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply")p.push("commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode");else if(c==="manualFlowStart"||c==="manualFlowAbort"||c==="manualFlowApplyHeating"||c==="manualFlowApplyCooling")p.push("commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint");else if(c==="manualHpStart"||c==="manualHpAbort")p.push("commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode");else if(ws.has(c)){const q=Pu(c);q&&(p.push(...vs(q)),f=c.endsWith("Load")?1200:3200,m=c.endsWith("Load")?`HP${q} ODU runtime tabel lezen aangevraagd.`:`HP${q} ODU runtime write aangevraagd; controleer status/readback.`,v=`ODU runtime actie mislukt voor HP${q}`)}It(c,{...p.length?{refreshKeys:p}:{},...f?{refreshDelayMs:f}:{},...m?{successNotice:m}:{},...v?{errorPrefix:v}:{}})}return}if(u==="close-system-modal"){Jn(),sn(),n.systemModal="",n.authDraftCurrentPassword="",n.authDraftNewPassword="",n.authDraftConfirmPassword="",n.authNotice="",n.authError="",n.apiSecurityNotice="",n.apiSecurityError="",n.mqttNotice="",n.mqttError="",vr(),g(),No();return}if(u==="clear-webserver-log-output"){$o();return}if(u==="copy-webserver-log-output"){Dm();return}if(u==="start-debug-recording"){Qm(l.dataset.debugMinutes||15);return}if(u==="start-rolling-debug-recording"){Ym();return}if(u==="select-debug-recording-duration"){Wm(l.dataset.debugMinutes||15);return}if(u==="stop-debug-recording"){Xm();return}if(u==="freeze-debug-recording"){Jm();return}if(u==="download-debug-recording"){rh();return}if(u==="copy-debug-recording"){ah();return}if(u==="confirm-settings-backup-restore"){lg();return}if(u==="confirm-restart"){It("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"});return}if(u==="select-surface"){const c=l.dataset.surface==="native";if(n.nativeOpen===c){n.nativeOpen&&ur();return}n.nativeOpen=c,Ps(n.nativeOpen?"native":"app"),n.controlError="",n.controlNotice="",n.settingsInfoOpen="",n.updateModalOpen=!1,n.firmwareAdvancedOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,Ce(),Ke(),Jn(),n.systemModal="",n.nativeOpen&&ur(),g(),_r(),window.requestAnimationFrame(()=>{n.nativeOpen?n.nativeApp&&n.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}if(u==="toggle-overview-theme"){Ju(n.overviewTheme==="light"?"dark":"light"),g();return}if(u==="select-hp-visual"){ad(l.dataset.hpVisual==="compact"?"compact":"schematic"),g();return}if(u==="select-hp-layout"){sd(l.dataset.hpLayout||"equal"),g();return}if(u==="select-step"){n.currentStep=l.dataset.stepId||"generation",g();return}if(u==="apply-quickstart-flow-source"){Eg();return}if(u==="refresh-quickstart-flow-signal"){$g();return}if(u==="start-quickstart-flow-test"){Mg();return}if(u==="abort-quickstart-flow-test"){Pg();return}if(u==="apply-quickstart-thermostat-source"){Ng();return}if(u==="previous-step"){ns(-1),g();return}if(u==="next-step"){ns(1),g();return}if(u==="select-settings-option"){const c=l.dataset.selectKey||"",p=l.dataset.selectOption||"";c&&p&&String(T(c)||"")!==p&&yr(c,p);return}if(u==="toggle-overview-control"){const c=l.dataset.controlKey||"",p=(l.dataset.controlState||"").toLowerCase();c&&(p==="on"||p==="off")&&Tg(c,p==="on");return}if(u==="select-overview-control-option"){const c=l.dataset.controlKey||"",p=l.dataset.controlOption||"";c&&p&&String(T(c)||"")!==p&&yr(c,p);return}if(u==="suggest-curve-fallback"){const c=ul();c&&Sa("curveFallbackSupply",c.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");return}if(u==="apply"||u==="reset"){Kg(u);return}if(u==="run-firmware-check"){Ri();return}if(u==="install-firmware-update"){Lg();return}if(u==="install-firmware-connection-switch"){Og();return}if(u==="toggle-firmware-advanced"){n.firmwareAdvancedOpen||n.firmwareConnectionSwitchOpen||n.updateManualUploadOpen||n.updateTestFirmwareOpen?(n.firmwareAdvancedOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,Ce(),Ke()):n.firmwareAdvancedOpen=!0,g();return}if(u==="toggle-firmware-connection-switch"){n.firmwareConnectionSwitchOpen=!n.firmwareConnectionSwitchOpen,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareConnectionSwitchOpen&&(n.firmwareAdvancedOpen=!0,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,Ce(),Ke()),g();return}if(u==="toggle-firmware-upload"){n.updateManualUploadOpen?(n.updateManualUploadOpen=!1,Ce()):(n.firmwareAdvancedOpen=!0,n.updateManualUploadOpen=!0,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.updateTestFirmwareOpen=!1,Ke(),n.updateManualUploadError=""),g();return}if(u==="upload-firmware-file"){xg();return}if(u==="toggle-firmware-test"){n.updateTestFirmwareOpen?(n.updateTestFirmwareOpen=!1,Ke()):(n.firmwareAdvancedOpen=!0,n.updateTestFirmwareOpen=!0,n.updateManualUploadOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,Ce(),n.updateTestFirmwareError=""),g();return}if(u==="install-firmware-test"){Fg();return}if(u==="save-web-auth"){Vg();return}if(u==="disable-web-auth"){jg();return}}function Sg(e){const t=e.target.closest("[data-curve-key]");!t||!ie()||(n.draggingCurveKey=t.dataset.curveKey||"",Ml(e.clientY))}function kg(e){typeof ps=="function"&&ps(e),n.draggingCurveKey&&Ml(e.clientY)}function Cg(){if(!n.draggingCurveKey)return;const e=n.draggingCurveKey,t=we(e,T(e));n.draggingCurveKey="",Sa(e,t,"Curvepunt bijgewerkt.")}async function yr(e,t){const o=O[e];n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",n.entities[e]={...n.entities[e]||{},state:t,value:t},g();try{const r=await fetch(`${G(o.domain,o.name,"set")}?option=${encodeURIComponent(t)}`,{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);delete n.drafts[e],delete n.inputDrafts[e],n.controlNotice=`${o.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.entities.firmwareUpdateChannel={...n.entities.firmwareUpdateChannel||{},state:t,value:t},la(t),g(),await ca(),n.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(n.controlNotice="Logger level bijgewerkt.",n.systemModal==="webserver-logs"&&lo()):e==="webServerLogHistoryEnabled"?(enabled?(n.webServerLogHistoryLoaded=!1,lo()):$o(),n.systemModal==="webserver-logs"&&g()):n.appView==="settings"?await B(Tt(),"all"):await B(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...lt,...Hn],"state"),e==="strategy"&&n.appView!=="settings"&&await B(ie(t)?ce.map(a=>a.key):Yt,"state")}catch(r){n.controlError=`${o.name} kon niet worden bijgewerkt. ${r.message}`}finally{n.busyAction="",g()}}async function Tg(e,t){const o=O[e];if(o){n.busyAction=`switch-${e}`,n.controlNotice="",n.controlError="",g();try{const r=t?"turn_on":"turn_off",a=await fetch(G(o.domain,o.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);n.entities[e]={...n.entities[e]||{},value:t,state:t},n.controlNotice=`${o.name} ${t?"ingeschakeld":"uitgeschakeld"}.`,n.busyAction="",n.appView==="overview"?await B([...Mn,...$e,"setupComplete",...Zt],"state"):n.appView==="settings"?await B(Tt(),"all"):await B(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...lt,...Hn],"state"),g()}catch(r){n.controlError=`${o.name} aanpassen mislukt (${r.message}).`,g()}finally{n.busyAction="",g()}}}async function Eg(){const e=Fn();if(!e.canApply){n.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",g();return}n.busyAction="quickstart-flow-source",n.controlNotice="",n.controlError="",g();const t=async(o,r)=>{if(!b(o))return;const a=T(o);if(typeof r=="boolean"&&A(o)===r||typeof r!="boolean"&&String(a)===String(r))return;const i=await Sn(o,r);n.entities[o]={...n.entities[o]||{},value:i,state:i}};try{e.requiresCic?(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),await t("flowSource","CIC"),n.quickStartCicFeedUrlDraft=null,n.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await t("qFlowSource",e.qFlowTarget),await t("flowSource","Outdoor unit"),n.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await B(ct,"all")}catch(o){n.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${o.message}`}finally{n.busyAction="",g()}}async function $g(){n.busyAction="quickstart-flow-refresh",n.controlNotice="",n.controlError="",g();try{await B(ct,"all");const e=Fn();n.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){n.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{n.busyAction="",g()}}async function $l(e,t){const o=O[e];if(!o||!b(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");const r=await fetch(G(o.domain,o.name,t?"turn_on":"turn_off"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`)}async function Ag(){const e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(o=>{n.optionalMissingEntities&&delete n.optionalMissingEntities[o],delete n.entities[o]}),await B(e,"all");const t=e.filter(o=>!n.entities[o]);if(t.length){const o=t.map(r=>O[r]?.name||r).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${o}.`)}}async function Hg(){for(let e=0;e<40;e+=1){await new Promise(t=>window.setTimeout(t,1e3));try{await B(ct,"state")}catch{return}if(!A("quickFlowTest")){n.busyAction!=="quickstart-flow-test-abort"&&(n.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),g();return}}}async function Mg(){if(!Fn().canRunFlowTest){n.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",g();return}n.busyAction="quickstart-flow-test-start",n.controlNotice="",n.controlError="",g();let t=!1;try{if(await Ag(),!A("cm100Active")){const a=O.commissioningCm100Start,i=await fetch(G(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);t=!0}let o=A("cm100Active")&&String(T("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!o&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await B(["commissioningStatus","cm100Active"],"state"),o=A("cm100Active")&&String(T("commissioningStatus")||"").trim()==="CM100 READY";if(!o){const a=String(T("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await $l("quickFlowTest",!0),await B(ct,"all");const r=String(T("commissioningStatus")||"").trim();if(!A("quickFlowTest"))throw new Error(r||"De waterpomptest kon niet worden gestart.");n.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",Hg()}catch(o){if(t&&!A("quickFlowTest"))try{const r=O.commissioningCm100Stop;await fetch(G(r.domain,r.name,"press"),{method:"POST"})}catch{}n.controlError=`Waterpomptest starten mislukt. ${o.message}`}finally{n.busyAction="",g()}}async function Pg(){n.busyAction="quickstart-flow-test-abort",n.controlNotice="",n.controlError="",g();try{await $l("quickFlowTest",!1),await B(ct,"all"),n.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){n.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{n.busyAction="",g()}}async function Ng(){const e=La();if(!e.canApply){n.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",g();return}n.busyAction="quickstart-thermostat-source",n.controlNotice="",n.controlError="",g();const t=async(o,r)=>{if(!b(o))return;const a=T(o);if(typeof r=="boolean"&&A(o)===r||typeof r!="boolean"&&String(a)===String(r))return;const i=await Sn(o,r);n.entities[o]={...n.entities[o]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await t("otEnabled",!0):e.selectedSource==="CIC"&&(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),n.quickStartCicFeedUrlDraft=null),await t("roomTempSource",e.selectedSource),await t("roomSetpointSource",e.selectedSource),n.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await B(bo,"all")}catch(o){n.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${o.message}`}finally{n.busyAction="",g()}}async function Ri(){const e=O.checkFirmwareUpdates;if(e){n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateCheckBusy=!0,n.controlError="",n.controlNotice="",g();try{await qa("current build",{poll:!1}),la();const t=await fetch(G(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);await ca(),n.controlNotice="Firmwarecontrole bijgewerkt."}catch(t){n.controlError=`Firmwarecontrole mislukte. ${t.message}`}finally{n.updateCheckBusy=!1,g()}}}async function Rg(){try{await B(Ir,"all",{concurrency:St,forceMissing:!0}),n.updateModalOpen&&g()}catch{}}async function qa(e,t={}){const o=O.firmwareUpdateTarget;if(!o||!b("firmwareUpdateTarget"))return!1;const r=String(e||"").trim();if(!r)return!1;n.entities.firmwareUpdateTarget={...n.entities.firmwareUpdateTarget||{},state:r,value:r};const a=await fetch(`${G(o.domain,o.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.poll!==!1&&(la(),await ca()),!0}async function Lg(){const e=pe();if(e){n.firmwareAdvancedOpen=!1,n.updateManualUploadOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.updateTestFirmwareOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,Ce(),Ke(),n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateInstallBusy=!0,n.updateInstallTargetVersion=zt(e),n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,n.updateInstallMode="normal",n.updateInstallTargetConnection="",n.controlError="",n.controlNotice="",g();try{await qa("current build"),n.updateInstallTargetVersion=zt(pe()||{})||n.updateInstallTargetVersion;const t=await fetch(G("update","Firmware Update","install"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);await Co()?(n.updateInstallCompleted=!0,n.updateInstallCompletedVersion=ue()||n.updateInstallTargetVersion,n.controlNotice=""):n.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(t){n.controlError=`OTA-update kon niet worden gestart. ${t.message}`}finally{ko(),g()}}}async function Og(){const e=Yr(),t=O.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!n.firmwareConnectionSwitchConfirmed){n.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",g();return}n.updateManualUploadOpen=!1,Ce(),n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateInstallBusy=!0,n.updateInstallMode="connection-switch",n.updateInstallTargetConnection=e.targetConnection,n.updateInstallTargetVersion=ue()||"",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,n.controlError="",n.controlNotice="",g();try{await qa("alternate connection"),n.updateInstallTargetVersion=zt(pe()||{})||ue()||"",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,g();const o=await fetch(G(t.domain,t.name,"press"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);if(await Co())n.updateInstallCompleted=!0,n.updateInstallCompletedVersion=ue()||n.updateInstallTargetVersion||"",n.firmwareConnectionSwitchConfirmed=!1,n.controlNotice="";else{const a=at(e.targetConnection);n.controlNotice=`Verbindingswissel naar ${a} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(o){n.controlError=`Verbindingswissel kon niet worden gestart. ${o.message}`}finally{ko(),g()}}}async function Dg(e,t){const o=Zr(e,t);if(!o)throw new Error("Geen geldig PR-target gevonden.");const r=await fetch(o.releaseApiUrl,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});if(r.status===404)throw new Error(`Geen testfirmware gevonden voor PR ${e}. Controleer of het label de build al heeft gepubliceerd.`);if(!r.ok)throw new Error(`GitHub API gaf HTTP ${r.status}`);const a=await r.json(),i=Array.isArray(a.assets)?a.assets:[],l=i.find(p=>p&&p.name===t.otaFileName),d=i.find(p=>p&&p.name===t.md5FileName);if(!l||!l.browser_download_url)throw new Error(`PR ${e} bevat geen OTA-build voor ${t.label}.`);if(!d||!d.browser_download_url)throw new Error(`PR ${e} mist de md5-controle voor ${t.label}.`);const u=String(a.name||a.tag_name||`PR ${e}`).trim(),c=String(l.updated_at||a.published_at||"").trim();return{otaUrl:l.browser_download_url,md5Url:d.browser_download_url,label:c?`${u} \xB7 ${c.replace("T"," ").replace("Z"," UTC")}`:u}}async function Li(e,t){if(!b(e))throw new Error(`${O[e]?.name||e} is niet beschikbaar op deze firmware.`);const o=await Sn(e,t);n.entities[e]={...n.entities[e]||{},state:o,value:o}}async function Fg(){const e=yn(),t=yo(),o=O.installFirmwareTestOta;if(!e){n.updateTestFirmwareError="Vul een geldig PR-nummer in.",g();return}if(!t.available){n.updateTestFirmwareError=t.error||"Dit firmwaretarget wordt niet herkend.",g();return}if(!n.updateTestFirmwareConfirmed){n.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",g();return}if(!o||!b("installFirmwareTestOta")){n.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",g();return}n.updateManualUploadOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,Ce(),n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateInstallBusy=!0,n.updateInstallTargetVersion="",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,n.updateInstallMode="test-firmware",n.updateInstallTargetConnection="",n.controlError="",n.controlNotice="",n.updateTestFirmwareError="",n.updateTestFirmwareBuild=null,g();let r=!1;try{const a=await Dg(e,t);n.updateTestFirmwareBuild=a.label,g(),await Li("firmwareTestOtaUrl",a.otaUrl),await Li("firmwareTestOtaMd5Url",a.md5Url),r=!0;const i=await fetch(G(o.domain,o.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);await Co()?(n.updateInstallCompleted=!0,n.updateInstallCompletedVersion=ue()||`PR ${e}`,n.updateTestFirmwareOpen=!1,Ke(),n.controlNotice=""):n.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){r&&pl(a.message)?n.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:n.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{ko(),g()}}async function xg(){const e=n.updateManualUploadFile;if(!e){n.updateManualUploadError="Kies eerst een firmwarebestand.",g();return}n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateInstallBusy=!0,n.updateInstallTargetVersion=ue()||"",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,n.controlError="",n.controlNotice="",n.updateManualUploadError="",g();try{const t=new FormData;t.append("update",e,e.name||"firmware.bin");const o=await fetch("/update",{method:"POST",body:t});if(!o.ok)throw new Error(`HTTP ${o.status}`);n.updateManualUploadOpen=!1,Ce(),await Co()?(n.updateInstallCompleted=!0,n.updateInstallCompletedVersion=ue()||n.updateInstallTargetVersion||"",n.controlNotice=""):n.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(t){n.updateManualUploadError=`Handmatige upload mislukte. ${t.message}`}finally{ko(),g()}}async function Sa(e,t,o=""){const r=O[e],a=we(e,t);n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",n.inputDrafts[e]=String(t??""),n.drafts[e]=a,g();try{const i=await fetch(`${G(r.domain,r.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);delete n.drafts[e],delete n.inputDrafts[e],n.controlNotice=o||`${r.name} bijgewerkt.`,await B(n.appView==="settings"?Tt():[...new Set([e,"setupComplete","strategy",...lt,...Hn])],"state")}catch(i){n.inputDrafts[e]=String(a).replace(".",","),n.controlError=`${r.name} kon niet worden bijgewerkt. ${i.message}`}finally{n.busyAction="",g()}}async function Ig(e,t){const o=O[e],r=tn(t);n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",g();try{const a=await fetch(`${G(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);n.controlNotice=`${o.name} bijgewerkt.`,await B(n.appView==="settings"?Tt():[e,"setupComplete"],"state")}catch(a){n.controlError=`${o.name} kon niet worden bijgewerkt. ${a.message}`}finally{n.busyAction="",g()}}async function Wg(e,t){const o=O[e],r=String(t||"").trim();n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",n.inputDrafts[e]=String(t??""),n.drafts[e]=r,g();try{const a=await fetch(`${G(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);n.entities[e]={...n.entities[e]||{},value:r,state:r},delete n.drafts[e],delete n.inputDrafts[e],n.controlNotice=`${o.name} bijgewerkt.`,await B(n.appView==="settings"?Tt():[e,"setupComplete"],"state")}catch(a){n.inputDrafts[e]=r,n.controlError=`${o.name} kon niet worden bijgewerkt. ${a.message}`}finally{n.busyAction="",g()}}async function qr(e,t){const o=O[e],r=Ge(t)||vn,a=await fetch(`${G(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n.entities[e]={...n.entities[e]||{},value:r,state:r},r}async function Al(e,t){const o=O[e],r=t?"turn_on":"turn_off",a=await fetch(G(o.domain,o.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n.entities[e]={...n.entities[e]||{},value:t,state:t},t}async function Hl(){await B([...new Set([...Mn,...$e,"setupComplete",...Zt])],"state")}async function Bg(e,t){const o=O[e],r=Ge(t);n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",g();try{await qr(e,r),n.controlNotice=`${o.name} bijgewerkt.`,await B(n.appView==="settings"?Tt():[e,"setupComplete","openquattEnabled"],"state")}catch(a){n.controlError=`${o.name} kon niet worden bijgewerkt. ${a.message}`}finally{n.busyAction="",g()}}async function Vg(){const e=n.authStatus||{},t=e.enabled===!0,o=e.setup_window_active===!0,r=String(n.authDraftCurrentPassword||""),a=String(n.authDraftUsername||"").trim(),i=String(n.authDraftNewPassword||""),l=String(n.authDraftConfirmPassword||"");if(!a||!i){n.authError="Vul een gebruikersnaam en wachtwoord in.",g();return}if(i!==l){n.authError="De twee wachtwoorden zijn niet gelijk.",g();return}if(t&&!r){n.authError="Vul je huidige wachtwoord in.",g();return}if(!t&&!o){n.authError="Houd de herstelknop 5 seconden vast.",g();return}if(!e.csrf_token){n.authError="Logingegevens laden nog. Probeer het zo opnieuw.",g();return}n.authBusy=!0,n.authError="",n.authNotice="",g();try{const d=new URLSearchParams;d.set("csrf_token",e.csrf_token),d.set("current_password",r),d.set("new_username",a),d.set("new_password",i);const u=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:d.toString()}),c=await u.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!u.ok||!c.ok)throw new Error(c.error||`HTTP ${u.status}`);await nn({force:!0}),n.authDraftCurrentPassword="",n.authDraftNewPassword="",n.authDraftConfirmPassword="",n.authDraftUsername=String(n.authStatus?.username||a).trim(),n.authNotice=t?"Login aangepast.":"Login staat nu aan.",n.authError="",g()}catch(d){n.authError=`Opslaan is mislukt. ${d.message}`,g()}finally{n.authBusy=!1,g()}}async function jg(){const e=n.authStatus||{};if(!e.enabled){n.authNotice="Login staat al uit.",n.authError="",g();return}const t=String(n.authDraftCurrentPassword||"");if(!t){n.authError="Vul je huidige wachtwoord in.",g();return}if(!e.csrf_token){n.authError="Logingegevens laden nog. Probeer het zo opnieuw.",g();return}n.authBusy=!0,n.authError="",n.authNotice="",g();try{const o=new URLSearchParams;o.set("csrf_token",e.csrf_token),o.set("current_password",t);const r=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),a=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!a.ok)throw new Error(a.error||`HTTP ${r.status}`);await nn({force:!0}),n.authDraftCurrentPassword="",n.authDraftNewPassword="",n.authDraftConfirmPassword="",n.authDraftUsername="",n.authNotice="Login staat nu uit.",n.authError="",g()}catch(o){n.authError=`Uitzetten is mislukt. ${o.message}`,g()}finally{n.authBusy=!1,g()}}async function Xo(e){const t=Ge(e);if(e&&!t){n.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",g();return}if(t&&!b("openquattResumeAt")){n.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",g();return}n.busyAction="openquatt-regulation",n.controlNotice="",n.controlError="",g();let o=!1;try{b("openquattResumeAt")&&(await qr("openquattResumeAt",t||vn),o=!!t),await Al("openquattEnabled",!1),n.pauseResumeDraft=t?hr(t):"",n.systemModal="",n.controlNotice=t?`Openquatt regeling is tijdelijk uitgeschakeld tot ${ma(t)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await Hl()}catch(r){if(o&&b("openquattResumeAt"))try{await qr("openquattResumeAt",vn)}catch{}n.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${r.message}`}finally{n.busyAction="",g()}}async function _g(){n.busyAction="openquatt-regulation",n.controlNotice="",n.controlError="",g();try{await Al("openquattEnabled",!0),n.pauseResumeDraft="",n.systemModal="",n.controlNotice="Openquatt regeling is weer actief.",await Hl()}catch(e){n.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{n.busyAction="",g()}}async function Kg(e){const t=O[e];n.busyAction=e,n.controlError="",n.controlNotice="",g();try{const o=await fetch(G(t.domain,t.name,"press"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);n.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await B(["setupComplete"],"state"),e==="reset"&&(n.currentStep=ho[0].id,n.quickStartModalMode="wizard",n.quickStartModalOpen=!0),n.quickStartModalOpen=e!=="apply",vt("overview",{syncMode:"replace"}),re({forceFast:!0})}catch(o){n.controlError=`Actie mislukt voor "${t.name}". ${o.message}`}finally{n.busyAction="",g()}}function Ug(){window.requestAnimationFrame(()=>{if(!n.root||n.systemModal!=="service-task-hp-water-calibration")return;const e=n.root.querySelector("[data-oq-service-task-scroller]"),t=n.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!t)return;const o=e.getBoundingClientRect(),r=t.getBoundingClientRect(),a=e.scrollTop+r.top-o.top-24;e.scrollTop=Math.max(0,a)})}async function It(e,t={}){const o=O[e];if(o){n.busyAction=e,n.controlError="",n.controlNotice="",g();try{const r=await fetch(G(o.domain,o.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||ws.has(e)||(Jn(),n.systemModal=""),n.controlNotice=t.successNotice||`${o.name} gestart.`,t.reconnectMode&&sa(t.reconnectMode),Array.isArray(t.refreshKeys)&&t.refreshKeys.length){const i=Number(t.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await B(t.refreshKeys,"state")}}catch(r){e==="commissioningCm100Start"?(n.pendingCommissioningCm100Start=!1,n.commissioningTaskLock=""):e==="boilerPowerTestStart"?(n.pendingBoilerPowerTestStart=!1,n.commissioningTaskLock=""):e==="flowAutotuneStart"?(n.pendingFlowAutotuneStart=!1,n.commissioningTaskLock=""):e==="airPurgeStart"?(n.pendingAirPurgeStart=!1,n.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock=""):e==="manualFlowStart"?(n.pendingManualFlowStart=!1,n.commissioningTaskLock=""):e==="manualHpStart"&&(n.pendingManualHpStart=!1,n.commissioningTaskLock=""),n.controlError=`${t.errorPrefix||`Actie mislukt voor "${o.name}"`}. ${r.message}`}finally{n.busyAction="",g(),e==="hpWaterCalibrationApply"&&Ug()}}}function Ml(e){const t=n.root?n.root.querySelector(".oq-helper-curve-svg"):null;if(!t||!n.draggingCurveKey)return;const o=t.getBoundingClientRect(),r=22,a=180,i=(e-o.top)/o.height*240,d=70-(Math.min(r+a,Math.max(r,i))-r)/a*50,u=we(n.draggingCurveKey,d);String(T(n.draggingCurveKey))!==String(u)&&(n.drafts[n.draggingCurveKey]=u,g())}function On({key:e,value:t,meta:o,controlClass:r,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
      <label class="${r}">
        <input
          class="${a}"
          type="number"
          data-oq-field="${s(e)}"
          min="${o.min}"
          max="${o.max}"
          step="${o.step}"
          value="${s(t)}"
          ${i}
          ${n.loadingEntities?"disabled":""}
        >
        ${l}
      </label>
    `}function zg(){const e=[];e.push(ie()?"Stooklijn":"Power House");const t=String(T(ie()?"curveControlProfile":"phResponseProfile")||"").trim();t&&e.push(`profiel ${t}`);const o=String(T("flowControlMode")||"").trim();return o&&e.push(`flow ${o==="Manual PWM"?"handmatig":"setpoint"}`),o==="Manual PWM"&&b("manualIpwm")?e.push(`iPWM ${_("manualIpwm")}`):b("flowSetpoint")&&e.push(`flow ${_("flowSetpoint")}`),b("dayMax")&&e.push(`dag ${_("dayMax")}`),b("silentMax")&&e.push(`silent ${_("silentMax")}`),b("maxWater")&&e.push(`max water ${_("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function b(e){return!!n.entities[e]}function W(e,t="\u2014"){const o=n.entities[e];if(!o)return t;if(typeof o.state=="string"&&o.state.trim()!=="")return o.state;const r=o.value??o.state;return r==null||r===""?t:typeof r=="boolean"?r?"Aan":"Uit":typeof r=="number"&&!Number.isNaN(r)&&o.uom?`${r} ${o.uom}`:String(r)}function M(e){const t=Number(T(e));return Number.isNaN(t)?NaN:t}function Pl(e){const t=String(e||"").toLowerCase();return t.includes("cop")||t.includes("eer")}function Nl(e){const t=String(e||"");if(t==="totalEer"){const o=M("totalCoolingPower"),r=M("coolingPowerInput"),a=Number.isNaN(r)?M("totalPower"):r;return!Number.isNaN(o)&&!Number.isNaN(a)&&a>=5?o/a:NaN}if(t==="totalCop"){const o=M("totalHeat"),r=M("heatingPowerInput"),a=Number.isNaN(r)?M("totalPower"):r;return!Number.isNaN(o)&&!Number.isNaN(a)&&a>=5?o/a:NaN}return NaN}function fn(e,t=""){const o=String(n.entities[e]?.uom||"").trim();return o||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||t}function Oe(e){const t=n.entities[e],o=Nl(e);if(!t)return Number.isNaN(o)?"\u2014":x(o,1,fn(e));const r=M(e);if(Number.isNaN(r))return Number.isNaN(o)?W(e):x(o,1,fn(e));const a=r>0||Number.isNaN(o)?r:o,i=Pl(e)?1:0;return x(a,i,fn(e))}function A(e){const t=n.entities[e];if(!t)return!1;if(typeof t.value=="boolean")return t.value;const o=String(t.state??t.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function rn(){return!b("trendHistoryEnabled")||A("trendHistoryEnabled")}function Rl(){const e=n.entities.setupComplete;if(!e)return null;const t=String(e.state??e.value??"").trim().toLowerCase();return!t||t==="unknown"||t==="unavailable"?null:t==="on"||t==="true"||t==="1"?!0:t==="off"||t==="false"||t==="0"?!1:null}function Gg(){return`
      <div class="oq-helper-app-nav">
        ${Or.filter(e=>e.id!=="diagnosis"||rn()).map(e=>`
          <button
            class="oq-helper-app-tab ${n.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            <span>${s(e.label)}</span>
          </button>
        `).join("")}
      </div>
    `}function Qg(e=n.appView){return Or.find(t=>t.id===e)?.label||"OpenQuatt"}function Oi(){if(typeof document>"u")return;if(n.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}const e=Qg();document.title=`${e} \u2022 OpenQuatt`}function Di(){if(typeof document>"u")return;if(n.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");const e=n.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}const Fi="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",Yg="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==",Ll=250;function Ol(){if(typeof window>"u")return[];const e=window.__OQ_DEV_WEBSERVER_LOGS__,t=typeof e=="function"?e():e;return Array.isArray(t)?t.map(o=>String(o||"")).filter(o=>o.trim()!==""):[]}function an(){return typeof window>"u"?!1:Ol().length>0}function Zg(){return`${Jt()}/events`}function Jg(){return`${Jt()}/openquatt/logs/recent`}function so(){const e=n.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;const t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function Xg(){return n.nativeOpen?"Niet beschikbaar":an()?"Voorbeeld":n.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function em(e){const t=Math.max(0,Math.floor(Number(e)/1e3)),o=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return`${String(o).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Dl(e){const t=Number(e)||0;if(t>9466848e5){const o=e instanceof Date?e:new Date(t),r={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(o)}catch{return o.toLocaleString("nl-NL",r)}}return em(t)}function tm(e){const t=Number(e)||0;if(t>9466848e5)return new Date(t).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});const o=Math.max(0,Math.floor(t/1e3)),r=Math.floor(o/3600),a=Math.floor(o%3600/60),i=o%60;return`Sinds opstart: ${r}u ${a}m ${i}s`}function nm(){return n.nativeOpen?"Niet beschikbaar":an()?so()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":so()?"Buffer aan":"Buffer uit"}function om(){return so()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function ka(){return n.entities?.debugLevel||null}function Fl(e=ka()){const t=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return t.length?t:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function rm(e=ka()){const t=String(e?.value??e?.state??"").trim(),o=Fl(e);return o.includes(t)?t:o.includes("INFO")?"INFO":o[0]||""}function xl(e,t=null){if(!e||!t)return!1;const o=Number(e.seq),r=Number(t.seq);if(Number.isFinite(o)&&Number.isFinite(r)&&o===r)return!0;const a=String(e.raw??e.text??"").trim(),i=String(t.raw??t.text??"").trim();if(!a||a!==i)return!1;const l=Number(e.receivedAt??e.ts??0),d=Number(t.receivedAt??t.ts??0);return Math.abs(l-d)<=2e3}function am(e,t){const o=Number(e.receivedAt??e.ts??0),r=Number(t.receivedAt??t.ts??0);if(o!==r)return o-r;const a=Number(e.seq??0),i=Number(t.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(t.raw??""))}function Il(e,{prepend:t=!1}={}){if(!Array.isArray(e)||e.length===0)return;const o=t?[...e,...n.webServerLogEntries]:[...n.webServerLogEntries,...e];o.sort(am);const r=[];for(const a of o){const i=r[r.length-1]||null;xl(a,i)||r.push(a)}n.webServerLogEntries=r.slice(-Ll)}function Ca(e,t={}){const o=Tm(e).trimEnd(),r=Number(t.receivedAt),a=Number(t.seq);return{raw:e,text:o,tone:Em(e),receivedAt:Number.isFinite(r)?r:Date.now(),seq:Number.isFinite(a)?a:void 0}}function im(e,t){const r=Math.max(0,t-e-1)*9e4;return Date.now()-r}function sm(){const e=Ol(),t=e.length;return e.map((o,r)=>Ca(o,{receivedAt:im(r,t),seq:r+1}))}function lm(){const e=Ao();e&&(e.scrollTop=e.scrollHeight)}function pt(){const e=Ao();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Ta(e)}:null}function cm(e){if(!e)return;const t=Ao();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const o=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,o)}function it(e,t=!0){if(!e)return;const o=Number(n.webServerLogScrollRestoreToken||0)+1;n.webServerLogScrollRestoreToken=o;const r=()=>{n.webServerLogScrollRestoreToken!==o||n.systemModal!=="webserver-logs"||cm(e)};if(t){window.requestAnimationFrame(r);return}r()}function Wl(){return n.root?n.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}function um(){const e=Wl();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Ta(e)}:null}function dm(e){if(!e)return;const t=Wl();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const o=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,o)}function xi(e,t=!0){if(!e)return;const o=Number(n.cm100CommissioningScrollRestoreToken||0)+1;n.cm100CommissioningScrollRestoreToken=o;const r=()=>{n.cm100CommissioningScrollRestoreToken!==o||n.systemModal!=="cm100-commissioning"||dm(e)};if(t){window.requestAnimationFrame(r);return}r()}function Bl(){return n.root?n.root.querySelector("[data-oq-service-task-scroller]"):null}function pm(){const e=Bl();return e?{scrollTop:e.scrollTop}:null}function gm(e){if(!e)return;const t=Bl();t&&(t.scrollTop=Math.max(0,e.scrollTop))}function Ii(e,t=!0){if(!e)return;const o=Number(n.serviceTaskModalScrollRestoreToken||0)+1;n.serviceTaskModalScrollRestoreToken=o;const r=()=>{n.serviceTaskModalScrollRestoreToken!==o||!String(n.systemModal||"").startsWith("service-task-")||gm(e)};if(t){window.requestAnimationFrame(r);return}r()}async function lo(e={}){if(n.nativeOpen||typeof window.fetch!="function")return;const t=e.scrollState||pt(),o=Number(n.webServerLogHistoryRequestToken||0)+1;n.webServerLogHistoryRequestToken=o,n.webServerLogHistoryLoading=!0,n.webServerLogHistoryError="";try{const r=await window.fetch(Jg(),{headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.json();if(n.systemModal!=="webserver-logs"||n.webServerLogHistoryRequestToken!==o)return;const i=hm(a);n.webServerLogHistoryLoaded=!0,i.length>0&&(Il(i,{prepend:!0}),n.webServerLogRecentTail=i.slice(-4).map(l=>String(l.raw??l.text??"")),n.webServerLogRecentAnchorAt=Date.now())}catch(r){n.systemModal==="webserver-logs"&&n.webServerLogHistoryRequestToken===o&&(n.webServerLogHistoryError=r instanceof Error?r.message:"Recente logs konden niet worden opgehaald.")}finally{n.webServerLogHistoryRequestToken===o&&(n.webServerLogHistoryLoading=!1),n.systemModal==="webserver-logs"&&n.webServerLogHistoryRequestToken===o&&(g(),it(t))}}function mm(e,t=0){if(!e||typeof e!="object")return null;const o=String(e.raw??"").trim()||String(e.message??"").trim();return o?Ca(o,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??t)}):null}function hm(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((o,r)=>mm(o,r+1)).filter(o=>o!==null)}function fm(e){if(!e||!Array.isArray(n.webServerLogRecentTail)||n.webServerLogRecentTail.length===0||Date.now()-Number(n.webServerLogRecentAnchorAt||0)>2500)return!1;const o=String(e.raw??e.text??"").trim();return o?n.webServerLogRecentTail.includes(o):!1}function bm(e,t=n.webServerLogEntries){return!e||!Array.isArray(t)||t.length===0?!1:t.some(o=>xl(e,o))}function vm(){an()&&n.webServerLogEntries.length===0&&(n.webServerLogEntries=sm()),n.webServerLogCopyMessage="",n.webServerLogCopyError="",n.systemModal="webserver-logs",g(),B(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(n.systemModal!=="webserver-logs")return;const e=pt();g(),it(e)}),lm(),(!n.webServerLogHistoryLoaded||n.webServerLogEntries.length===0)&&lo()}function $o(){n.webServerLogEntries=[],n.webServerLogError="",n.webServerLogHistoryError="",n.webServerLogHistoryLoading=!1,n.webServerLogHistoryLoaded=!1,n.webServerLogScrollRestoreToken=Number(n.webServerLogScrollRestoreToken||0)+1,n.webServerLogCopyMessage="",n.webServerLogCopyError="",n.webServerLogHistoryRequestToken+=1,n.webServerLogRecentTail=[],n.webServerLogRecentAnchorAt=0,n.systemModal==="webserver-logs"&&g()}function Wi(){const e=pt();wt(),n.webServerLogEnabled=null,n.webServerLogConnected=!1,$o(),n.systemModal==="webserver-logs"&&lo({scrollState:e})}function Bi(){if(an()){wt();return}if(!(n.mounted&&!n.nativeOpen&&n.systemModal==="webserver-logs")){wt();return}if(n.webServerLogEnabled===!1){wt();return}n.webServerLogSource||wm()}function wm(){if(an()){n.webServerLogEnabled=!0,n.webServerLogConnected=!1,n.webServerLogError="",g();return}if(typeof window.EventSource!="function"){n.webServerLogEnabled=!1,n.webServerLogConnected=!1,n.webServerLogError="Deze browser ondersteunt geen live logstream.",g();return}try{const e=new window.EventSource(Zg());n.webServerLogSource=e,e.addEventListener("open",ym),e.addEventListener("ping",qm),e.addEventListener("log",km),e.onerror=Sm}catch(e){n.webServerLogEnabled=!1,n.webServerLogConnected=!1,n.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",wt(),g()}}function wt(){const e=n.webServerLogSource;if(e)try{e.close()}catch{}n.webServerLogSource=null,n.webServerLogConnected=!1}function ym(){if(!n.webServerLogSource||n.nativeOpen)return;const e=n.systemModal==="webserver-logs"?pt():null;n.webServerLogEnabled=!0,n.webServerLogConnected=!0,n.webServerLogError="",g(),it(e)}function qm(){if(!n.webServerLogSource||n.nativeOpen)return;const e=n.systemModal==="webserver-logs"?pt():null;n.webServerLogEnabled=!0,n.webServerLogConnected||(n.webServerLogConnected=!0,n.webServerLogError="",g(),it(e))}function Sm(){if(!n.webServerLogSource)return;const e=n.systemModal==="webserver-logs"?pt():null;n.webServerLogEnabled=!1,n.webServerLogConnected=!1,n.webServerLogError="De live logstream kon niet worden geopend.",wt(),g(),it(e)}function km(e){if(!n.webServerLogSource||!e||typeof e.data!="string")return;const t=pt(),o=Cm(e.data);if(!o)return;const r=o.split(/\r?\n/).filter(u=>u.trim()!=="");if(r.length===0)return;const i=r.map(u=>Ca(u)).filter(u=>!fm(u)&&!bm(u));if(i.length===0)return;Il(i);const l=Am(),d=Ao();$m(l),Hm(i,l),n.webServerLogEnabled=!0,d&&t&&it(t,!1)}function Cm(e){const t=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!t)return"";const o=t.trim();if(o.startsWith("{")&&o.endsWith("}")||o.startsWith("[")&&o.endsWith("]"))try{const r=JSON.parse(o),a=typeof r=="string"?r:r?.message??r?.msg??r?.text??r?.data??r?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return t}function Tm(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function Em(e){const t=String(e??""),o=Array.from(t.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=o.length-1;i>=0;i-=1){const l=o[i][1].split(";").map(d=>Number(d)).filter(d=>Number.isFinite(d));for(let d=l.length-1;d>=0;d-=1){const u=l[d];if(u===31||u===91)return"error";if(u===33||u===93)return"warning";if(u===32||u===92)return"info";if(u===36||u===96||u===34||u===35)return"debug";if(u===37||u===90||u===38||u===97)return"verbose"}}const r=t.match(/\[(E|W|I|D|V|VV)\]/i);if(!r)return"plain";const a=r[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function $m(e){for(;n.webServerLogEntries.length>Ll;)n.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function Am(){return n.root?n.root.querySelector("[data-oq-webserver-log-output]"):null}function Ao(){return n.root?n.root.querySelector("[data-oq-webserver-log-scroller]"):null}function Ta(e){return e?e.scrollHeight-e.scrollTop-e.clientHeight<48:!1}function Hm(e,t){if(!(!t||e.length===0)){t.dataset.webServerLogEmpty==="true"&&(t.dataset.webServerLogEmpty="false",t.innerHTML="");for(const o of e)t.insertAdjacentHTML("beforeend",Vl(o))}}function Vl(e){const t=Dl(e.receivedAt),o=tm(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(o)}">${s(t)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function Mm(e=n.webServerLogEntries){return e.length?e.map(t=>Vl(t)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function Pm(){const e=[];return n.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),n.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(n.webServerLogCopyMessage)}</span>
      </div>
    `),n.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.webServerLogCopyError)}</p>`),n.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.webServerLogHistoryError)}</p>`),n.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.webServerLogError)}</p>`),e.length?e.join(""):""}function Nm(){const e=so(),t=n.loadingEntities||n.busyAction==="switch-webServerLogHistoryEnabled",o=nm(),r=om(),a=Rm();return`
    <div class="oq-webserver-log-history-shell">
      <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="webserverLogHistory">
        <div class="oq-settings-system-row-copy">
          <p class="oq-settings-system-row-label">RAM log history</p>
          <strong class="oq-settings-system-row-value">${s(o)}</strong>
          <p class="oq-settings-system-row-note">${s(r)}</p>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="webServerLogHistoryEnabled"
          data-control-state="${e?"off":"on"}"
          aria-pressed="${e?"true":"false"}"
          ${t?"disabled":""}
        >
          ${e?"Uitschakelen":"Inschakelen"}
        </button>
      </div>
      ${a}
    </div>
  `}function Rm(){const e=ka();if(!e)return"";const t=Fl(e),o=rm(e),r=n.loadingEntities||n.busyAction==="save-debugLevel";return`
    <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="debugLevel">
      <div class="oq-settings-system-row-copy">
        <p class="oq-settings-system-row-label">Logger level</p>
        <strong class="oq-settings-system-row-value">${s(o||"Onbekend")}</strong>
        <p class="oq-settings-system-row-note">Past het runtime logniveau aan voor nieuwe firmwaremeldingen.</p>
      </div>
      <label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${r?"disabled":""}>
          ${t.map(a=>`<option value="${s(a)}" ${a===o?"selected":""}>${s(a)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>
    </div>
  `}function Lm(){return n.webServerLogEntries.map(e=>{const t=String(e.raw??e.text??"").trimEnd();return t.trim()?`${Dl(e.receivedAt)} ${t}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function Om(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();let o=!1;try{o=document.execCommand("copy")}finally{document.body.removeChild(t)}return o}async function Dm(){const e=Lm();if(n.webServerLogCopyMessage="",n.webServerLogCopyError="",!e){n.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",g();return}try{if(!await Om(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");n.webServerLogCopyMessage=`${n.webServerLogEntries.length} logregel${n.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(t){n.webServerLogCopyError=t instanceof Error?t.message:"Kopi\xEBren naar het klembord is niet gelukt."}n.systemModal==="webserver-logs"&&g()}function Fm(){const e=an();return`
    <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal" role="dialog" aria-modal="true" aria-labelledby="oq-webserver-log-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-webserver-log-modal-title">OpenQuatt log</h2>
          </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit logboek">&times;</button>
        </div>
        <p class="oq-helper-modal-copy">${e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde."}</p>
        ${Nm()}
        ${Pm()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${n.webServerLogEntries.length===0?"true":"false"}">
            ${Mm()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${n.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `}function Fe(){return n.debugRecordingDeviceStatus?Math.max(0,Number(n.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(n.debugRecordingSamples)?n.debugRecordingSamples.length:0}function We(e=n.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function Ho(e=n.debugRecordingDeviceStatus){return We(e)&&e?.frozen===!0&&!e?.active}function yt(e){const t=Math.max(0,Math.round(Number(e||0)/1e3)),o=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return o>0?`${o}u ${String(r).padStart(2,"0")}m`:r>0?`${r}m ${String(a).padStart(2,"0")}s`:`${a}s`}function jl(){return n.debugRecordingDeviceStatus?Math.max(0,Number(n.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):_l()}function _l(){if(n.debugRecordingDeviceStatus)return Math.max(0,Number(n.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!n.debugRecordingStartedAt)return 0;const e=n.debugRecordingActive?Date.now():Number(n.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(n.debugRecordingStartedAt||e))}function Mo(){return n.debugRecordingDeviceStatus&&n.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":Ho()?"Rolling gestopt":n.debugRecordingActive&&We()?"Rolling actief":n.debugRecordingActive?"Bezig met opnemen":Fe()>0?"Voltooid":"Niet gestart"}function Ea(){return Ho()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":n.debugRecordingActive&&We()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":n.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":Fe()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":n.debugRecordingDeviceStatus&&n.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function xm(){return Ho()?"Gestopt":n.debugRecordingActive&&We()?`Rolling \xB7 ${yt(jl())}`:n.debugRecordingActive?`Loopt \xB7 ${yt(Kl())}`:Fe()>0?"Klaar":Mo()}function Im(){const e=Number(n.debugRecordingSelectedMinutes||15);return cr.map(o=>Number(o.minutes)).includes(e)?e:Number(cr[0]?.minutes||15)}function Wm(e){n.debugRecordingActive||(n.debugRecordingSelectedMinutes=Math.max(1,Number(e)||15),n.debugRecordingNotice="",n.debugRecordingError="",g())}function Kl(){return We()?0:n.debugRecordingDeviceStatus?Math.max(0,Number(n.debugRecordingDeviceStatus.remaining_s||0)*1e3):n.debugRecordingActive?Math.max(0,Number(n.debugRecordingEndsAt||0)-Date.now()):0}function Bm(){if(n.debugRecordingDeviceStatus){if(We()){const a=Math.max(1,Number(n.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,Fe()/a*100))}const o=Math.max(1,Number(n.debugRecordingDeviceStatus.duration_s||0)),r=Math.max(0,Number(n.debugRecordingDeviceStatus.elapsed_s||0));return!n.debugRecordingActive&&Fe()>0?100:Math.max(0,Math.min(100,r/o*100))}if(!n.debugRecordingActive||!n.debugRecordingStartedAt||!n.debugRecordingEndsAt)return Fe()>0?100:0;const e=Math.max(1,Number(n.debugRecordingEndsAt)-Number(n.debugRecordingStartedAt)),t=Math.max(0,Date.now()-Number(n.debugRecordingStartedAt));return Math.max(0,Math.min(100,t/e*100))}function Ul(e=n.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function Vm(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}function zl(e){if(e?.recording?.active)return;const t=Ul(e);if(t){n.debugRecordingAcknowledgedId=t;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",t)}catch{}}}function Gl(){const e=n.debugRecordingDeviceStatus,t=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&t===0)return"";const o=!!e.active;if(!o&&Ul(e)===n.debugRecordingAcknowledgedId)return"";const r=We(e),a=yt(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=yt(Math.max(0,Number(e.remaining_s||0))*1e3),l=o?r?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:r?"Rolling gestopt":"Debug klaar",d=o?r?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:r?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
    <button
      class="oq-debug-recording-header-status${o?" oq-debug-recording-header-status--active":" oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${s(d)}"
      title="${s(d)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${s(l)}</span>
    </button>
  `}function jm(){if(!n.root)return;const e=n.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;const t=e.querySelector(".oq-settings-system-row-value"),o=e.querySelector(".oq-settings-system-row-note");t&&(t.textContent=Mo()),o&&(o.textContent=Ea())}function $a(e){const t={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return t[e]||t.status}function _m(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${$a(e)}</span>`}function je(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${$a(e)}</span>`}function Km(){return[...Bt]}function Um(){const e=[];return Bt.forEach((t,o)=>{const r=n.entities?.[t]||{},a=String(r.uom??r.unit_of_measurement??"").trim();a&&e.push([o,a])}),e}function zm(e){return Array.isArray(e)?e.map((t,o)=>t===null?null:[o,t]).filter(Boolean):[]}function Po(){n.debugRecordingTimer&&(window.clearTimeout(n.debugRecordingTimer),n.debugRecordingTimer=null)}function sn(){n.debugRecordingDevicePollTimer&&(window.clearTimeout(n.debugRecordingDevicePollTimer),n.debugRecordingDevicePollTimer=null)}function gt(e){return`${Jt()}/openquatt/debug-recording/${e}`}function ln(e){const t=e&&typeof e=="object"?e:{};n.debugRecordingDeviceStatus=t,n.debugRecordingActive=!!t.active,n.debugRecordingStartedAt=t.active||Number(t.sample_count||0)>0?Date.now()-Math.max(0,Number(t.elapsed_s||0)*1e3):0,n.debugRecordingEndsAt=t.active?Date.now()+Math.max(0,Number(t.remaining_s||0)*1e3):0,n.debugRecordingLastSampleAt=Number(t.sample_count||0)>0?Date.now():0}function Aa(){ln({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function Gm(){const e=await window.fetch(gt("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return ln(t),t}function No(e=2e3){sn(),n.debugRecordingActive&&(n.debugRecordingDevicePollTimer=window.setTimeout(()=>{Ha({silent:!0})},Math.max(0,Number(n.systemModal==="debug-recording"?e:5e3)||0)))}async function Ha(e={}){e.silent||(n.debugRecordingBusy=!0,n.debugRecordingError="",g());try{await Gm(),!n.debugRecordingActive&&e.silent&&(n.debugRecordingNotice="Debugopname is afgerond."),No()}catch(t){Aa(),n.debugRecordingError=`Status kon niet worden opgehaald. ${t.message||String(t)}`}finally{e.silent||(n.debugRecordingBusy=!1),!e.silent||n.systemModal==="debug-recording"?g():(lp(),jm())}}async function Ql(){const e=ml(Bt,"state");let t=null;for(let o=0;o<e.length;o+=1){const r=await window.fetch(gt(`configure?reset=${o===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[o].body});if(!r.ok)throw new Error(`configuratie HTTP ${r.status}`);t=await r.json()}if(Number(t?.entity_field_count||0)!==Bt.length)throw new Error(`onvolledige debugset (${Number(t?.entity_field_count||0)}/${Bt.length})`);return t}async function Qm(e){const t=Math.max(1,Number(e)||15);Po(),sn(),n.debugRecordingBusy=!0,n.debugRecordingError="",n.debugRecordingNotice="",n.debugRecordingSamples=[],n.debugRecordingEvents=[],n.debugRecordingInitialValues=null,n.debugRecordingLastValues=null,n.debugRecordingDeviceBundle=null,n.debugRecordingLastSampleAt=0,n.debugRecordingSequence=0,g();try{await Ql();const o=await window.fetch(gt(`start?duration_s=${encodeURIComponent(t*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);const r=await o.json();ln(r),No()}catch(o){Aa(),n.debugRecordingError=`Debugopname kon niet worden gestart. ${o.message||String(o)}`}finally{n.debugRecordingBusy=!1,g()}}async function Ym(){Po(),sn(),n.debugRecordingBusy=!0,n.debugRecordingError="",n.debugRecordingNotice="",n.debugRecordingSamples=[],n.debugRecordingEvents=[],n.debugRecordingInitialValues=null,n.debugRecordingLastValues=null,n.debugRecordingDeviceBundle=null,n.debugRecordingLastSampleAt=0,n.debugRecordingSequence=0,g();try{await Ql();const e=await window.fetch(gt("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();ln(t),No()}catch(e){Aa(),n.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{n.debugRecordingBusy=!1,g()}}async function Zm(){const e=await window.fetch(gt("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return ln(t),sn(),t}async function Jm(){Po(),n.debugRecordingBusy=!0,n.debugRecordingError="",g();try{await Zm(),n.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){n.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{n.debugRecordingBusy=!1,g()}}async function Xm(e={}){Po(),sn(),n.debugRecordingBusy=!0,n.debugRecordingError="",g();try{const t=await window.fetch(gt("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json();ln(o),n.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(t){n.debugRecordingError=`Debugopname kon niet worden gestopt. ${t.message||String(t)}`}finally{n.debugRecordingBusy=!1,g()}}function Vi(e={}){const t=n.debugRecordingActive?Date.now():Number(n.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:n.debugRecordingStartedAt?new Date(Number(n.debugRecordingStartedAt)).toISOString():"",ended_at:t?new Date(t).toISOString():"",active:!!n.debugRecordingActive,duration_s:n.debugRecordingStartedAt?Math.round(Math.max(0,t-Number(n.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(Ou/1e3),sample_count:Fe(),column_count:Bt.length,storage:"browser"},columns:Km(),units:Um(),initial:zm(n.debugRecordingInitialValues),samples:n.debugRecordingSamples||[],events:n.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function co(e){return JSON.stringify(e)}function eh(){const e=Number(n.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([co(Vi())]).size}catch{return co(Vi()).length}}function th(e){const t=Math.max(0,Number(e)||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${(t/1024).toFixed(1)} kB`:`${Math.round(t)} B`}function nh(e,t){const o=new Blob([t],{type:"application/json"}),r=URL.createObjectURL(o),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function oh(e){const t=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),o=String(t).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${o}.oqdebug.json`}async function rh(){if(Fe()===0){n.debugRecordingError="Er is nog geen debugopname om te downloaden.",g();return}n.debugRecordingBusy=!0,n.debugRecordingError="";const e=n.debugRecordingActive&&We();g();try{const t=await window.fetch(gt("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json();n.debugRecordingDeviceBundle=o,nh(oh(o),co(o)),zl(o),n.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{n.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{n.debugRecordingBusy=!1,g()}}async function ah(){if(Fe()===0){n.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",g();return}n.debugRecordingBusy=!0,n.debugRecordingError="";const e=n.debugRecordingActive&&We();g();try{const t=await window.fetch(gt("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json();if(n.debugRecordingDeviceBundle=o,!await wl(co(o)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");zl(o),n.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{n.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{n.debugRecordingBusy=!1,g()}}function ih(){const e=n.debugRecordingActive,t=We(),o=Ho(),r=Fe(),a=n.debugRecordingBusy,i=th(eh()),l=Array.isArray(n.debugRecordingDeviceBundle?.events)?n.debugRecordingDeviceBundle.events.length:Array.isArray(n.debugRecordingEvents)?n.debugRecordingEvents.length:0,d=Im(),u=Kl(),c=jl(),p=Bm(),f=r>0,m=`${p.toFixed(1)}%`,v=[{icon:"status",label:"Status",value:Mo()},{icon:"clock",label:t?"Retentie":"Duur",value:yt(t?c:_l())},{icon:"samples",label:"Samples",value:String(r)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:n.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],q=n.debugRecordingError?{kind:"error",icon:"alert",text:n.debugRecordingError}:n.debugRecordingNotice?{kind:"success",icon:"check",text:n.debugRecordingNotice}:null;return`
    <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-debug-recording-modal" role="dialog" aria-modal="true" aria-labelledby="oq-debug-recording-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-debug-recording-modal-title">Debugopname</h2>
          </div>
          <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit debugopname">\xD7</button>
        </div>
        <p class="oq-helper-modal-copy">${s(Ea())}</p>
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${$a("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(t?`Laatste ${yt(c)} bewaard`:`Nog ${yt(u)}`)}</span>
                <strong>${s(t?`${r}/${Number(n.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(p)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(m)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${v.map(h=>`
              <div class="oq-debug-recording-stat">
                <dt>${_m(h.icon)}${s(h.label)}</dt>
                <dd>${s(h.value)}</dd>
              </div>
            `).join("")}
          </dl>
        </section>
        ${e&&t?`
          <section class="oq-debug-recording-duration" aria-label="Rolling debug">
            <h3>Rolling debug</h3>
            <p class="oq-helper-modal-copy">Download of kopieer maakt een momentopname van de huidige buffer. Stop rolling zet de buffer vast.</p>
          </section>
        `:`
          <section class="oq-debug-recording-duration" aria-label="Duur">
            <h3>Duur</h3>
            <div class="oq-debug-recording-segments" role="group" aria-label="Kies opnameduur">
              ${cr.map(h=>{const y=Number(h.minutes)===d;return`
                  <button
                    class="oq-debug-recording-segment${y?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${h.minutes}"
                    aria-pressed="${y?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(h.label)}
                  </button>
                `}).join("")}
            </div>
          </section>
        `}
        <div class="oq-debug-recording-actions">
          ${e&&t?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="freeze-debug-recording" ${a?"disabled":""}>${je("stop")}Stop rolling</button>
          `:e?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${a?"disabled":""}>${je("stop")}Stop opname</button>
          `:o?`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${d}" ${a||n.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${je("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||n.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${je("activity")}Hervat rolling</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${d}" ${a||n.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${je("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||n.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${je("activity")}Start rolling</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!f||a?"disabled":""}>${je("download")}${e&&t?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!f||a?"disabled":""}>${je("copy")}${e&&t?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${q?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${q.kind}" role="status">
              ${je(q.icon)}
              <span>${s(q.text)}</span>
            </p>
          `:""}
        </div>
      </section>
    </div>
  `}function cn(e,t,o){return o?`
      <div class="oq-settings-info${n.settingsInfoOpen===e?" is-open":""}" data-oq-settings-info="${s(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${s(e)}"
          aria-label="${s(`Uitleg bij ${t}`)}"
          aria-expanded="${n.settingsInfoOpen===e?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${n.settingsInfoOpen===e?"":"hidden"}>
          <p>${s(o)}</p>
        </div>
      </div>
    `:""}function qe(e,t,o,r,a="",i=""){return`<article class="oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(t)}</h3>${cn(e,t,o)}</div><div class="oq-settings-field-control">${r}</div>${i}</article>`}function Z(e,t,o,r,a=""){return qe(e,t,o,`<div class="oq-settings-static-value">${s(r)}</div>`,a)}function te(e,t={}){const o=typeof t=="number"?{decimals:t}:t||{},r=n.entities[e];if(!r)return"\u2014";const a=Number(r.value);if(!Number.isNaN(a)){const l=Number.isInteger(a)?0:Number.isFinite(o.decimals)?o.decimals:1;let d=a.toFixed(Math.max(0,l));return o.trimTrailingZeros&&d.includes(".")&&(d=d.replace(/\.?0+$/,"")),`${d}${r.uom?` ${r.uom}`:""}`}return String(r.state??r.value??"").trim()||"\u2014"}function Ro(e,t="\u2014"){const o=n.entities[e];if(!o)return t;const r=String(o.state??o.value??"").trim();return!r||r==="0"||r==="\u2014"?t:r}function Gt(e,t="",o=2){const r=Number(e);return Number.isFinite(r)?`${r.toFixed(Math.max(0,o))}${t?` ${t}`:""}`:"\u2014"}function le(e,t=2){return te(e,{decimals:t})}function Ma(e,t,o){const r=M(t),a=M(o);if(Number.isFinite(r)&&Number.isFinite(a))return r-a;const i=M(e);return Number.isFinite(i)?i:NaN}function ji(e,t){const o=M(e),r=M(t),a=Number.isNaN(o)?"Lvl \u2014":`Lvl ${Math.round(o)}`,i=Number.isNaN(r)?"\u2014 Hz":`${Math.round(r)} Hz`;return`${a} (${i})`}function sh(e){const t=String(e||"").trim().toUpperCase();return!t||t==="0"||t==="IDLE"||t==="CM100 READY"||t==="CM100 STOPPED"||t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED")?!1:t.includes("REQUESTED")||t.includes("WAITING")||t.includes("WACHTEN")||t.includes("SETTLING")||t.includes("MEASUR")||t.includes("COOLDOWN")||t.includes("RUNNING")||t.includes("VALIDATING")||t.includes("STARTED")||t.includes("RECOVER")||t.includes("PHASE")||t.includes("STEADY")||t.includes("PULSE")||t.includes("STABILIZE")||t.includes("STEP")}function ee(e){const t=String(e||"").trim().toUpperCase();return t?t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED"):!1}function bt(e){const t=String(e||"").trim().toUpperCase();return t.includes("WAITING_FOR_CM100")||t.includes("CM100 REQUESTED")||t.includes("WACHTEN OP CM100")||t==="WACHTEN"}function Pt(e){return sh(e)&&!bt(e)}function Nt(e,t="IDLE"){const o=Ro(e,t),r=String(o??"").trim();return!r||r==="0"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN"?t:r}function Yl(){const e=Ro("commissioningStatus",""),t=A("cm100Active"),o=String(e||"").trim().toUpperCase();return(t||o==="CM100 READY"||o==="CM100 STOPPED"||o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED"))&&(n.pendingCommissioningCm100Start=!1),o&&o!=="0"?o==="IDLE"&&n.pendingCommissioningCm100Start?"CM100 REQUESTED":o:n.pendingCommissioningCm100Start?"CM100 REQUESTED":t?"CM100 READY":"IDLE"}function er(e,t,o="",r=!1){return`
      <div class="oq-settings-storage-summary-metric${r?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${o?`<em>${s(o)}</em>`:""}
      </div>
    `}function tr(e,t,o,r="",a="",i=""){if(!b(e))return"";const l=!!T(e),d=n.loadingEntities||n.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(o)}</p>
          ${ch(e,l,r,a)}
        </div>
        ${Dn(e,t,l,d)}
      </article>
    `}function nr(e,t,o,r={}){if(!b(e))return"";const a=n.loadingEntities||n.busyAction===e,i=r.disabled===!0,l=r.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(l)}"
        type="button"
        data-oq-action="${s(o)}"
        ${a||i?"disabled":""}
      >
        ${s(a&&r.busyLabel||t)}
      </button>
    `}function _i(e){const t=e.filter(o=>o.value||b(o.key));return t.length?`
      <div class="oq-settings-storage-stat-grid">
        ${t.map(o=>{const r=o.value||te(o.key);return`
            <div>
              <span>${s(o.label)}</span>
              <strong>${s(r)}</strong>
              ${o.note?`<em>${s(o.note)}</em>`:""}
            </div>
          `}).join("")}
      </div>
    `:""}function De(e){const t=String(e||"").trim();return t?{None:"Geen",Manual:"Handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[bs]:"Stooklijn",[fs]:"Power House","Dew point required":"Dauwpuntmeting vereist","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[t]||t:""}function Zl(e){const t=String(e||"").trim();return t?{Ready:"Gereed","Waiting for room request":"Wacht op kamervraag","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[t]||t:""}function Lo({key:e,option:t,currentValue:o,busy:r,copy:a="",meta:i="",image:l="",imageAlt:d="",infoTitle:u="",infoCopy:c="",infoId:p=""}){const f=t===o,m=`
      <button
        class="oq-settings-choice-card${f?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${c?" oq-settings-choice-card--has-info":""}"
        type="button"
        data-oq-action="select-settings-option"
        data-select-key="${s(e)}"
        data-select-option="${s(t)}"
        aria-pressed="${f?"true":"false"}"
        ${r?"disabled":""}
      >
        <span class="oq-settings-choice-head">
          <span class="oq-settings-choice-title">${s(De(t))}</span>
          ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
        </span>
        ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(d||De(t))}" loading="lazy" decoding="async"></span>`:""}
        ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
      </button>
    `;if(!c)return m;const v=u||De(t),q=p||`${e}-${t}`;return`
      <article class="oq-settings-choice-card-shell${f?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
        ${m}
        ${cn(q,v,c)}
      </article>
    `}function un(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function Qt(e,t,o,r=""){if(!b(e))return"";const a=n.entities[e]||{},i=String(T(e)||""),l=un(a);return qe(e,t,o,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${n.loadingEntities?"disabled":""}>${l.map(d=>`<option value="${s(d)}" ${d===i?"selected":""}>${s(De(d))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,r)}function lh(e,t,o="Aan",r="Uit"){return`<span class="oq-settings-toggle-state${t?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(o)}" data-off-label="${s(r)}">${s(t?o:r)}</span>`}function Dn(e,t,o,r,a="Aan",i="Uit",l=!0){const d=o?a:i,u=o?"off":"on";return`
      <div class="oq-settings-compact-switch-row">
        ${l?lh(e,o,a,i):""}
        <button
          class="oq-settings-toggle-switch${o?" is-on":""}"
          type="button"
          role="switch"
          data-oq-action="toggle-overview-control"
          data-control-key="${s(e)}"
          data-control-state="${s(u)}"
          data-switch-title="${s(t)}"
          data-on-label="${s(a)}"
          data-off-label="${s(i)}"
          aria-checked="${o?"true":"false"}"
          aria-label="${s(`${t}: ${d}`)}"
          ${r?"disabled":""}
        >
          <span class="oq-settings-toggle-switch-track" aria-hidden="true">
            <span class="oq-settings-toggle-switch-knob"></span>
          </span>
        </button>
      </div>
    `}function ch(e,t,o="",r=""){const a=t?o:r;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(o)}" data-off-copy="${s(r)}">${s(a)}</p>`:""}function uh(e,t,o,r,a=""){if(!b(e))return"";const i=!!T(e),l=n.loadingEntities||n.busyAction===`switch-${e}`;return qe(e,t,o,`
        <div class="oq-settings-compact-switch-field">
          ${Dn(e,t,i,l)}
          ${r?`<p>${s(r)}</p>`:""}
        </div>
      `,a)}function or(e,t,o){if(!b(e))return"";const r=!!T(e),a=n.loadingEntities||n.busyAction===`switch-${e}`;return`
      <article class="oq-settings-integration-card" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-integration-card-head">
          <h4>${s(t)}</h4>
        </div>
        <p>${s(o)}</p>
        ${Dn(e,t,r,a)}
      </article>
    `}function Ae(e,t,o="oq-helper-button oq-helper-button--ghost",r=!1){return`
      <button
        class="${o}"
        type="button"
        data-oq-action="press-named-button"
        data-oq-button-key="${s(e)}"
        ${r?"disabled":""}
      >
        ${s(t)}
      </button>
    `}function Wt({active:e,startKey:t,stopKey:o,startLabel:r,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:d=!1,stopDisabled:u=!1}){return Ae(e?o:t,e?a:r,e?l:i,e?u:d)}function dh(e,t,o,r,a=""){if(!b(e))return"";const i=n.entities[e]||{},l=String(T(e)||""),d=un(i),u=n.loadingEntities||n.busyAction===`save-${e}`,c=`
      <div class="oq-settings-choice-grid">
        ${d.map(p=>{const f=r[p]||"",m=typeof f=="string"?f:f.copy||"",v=typeof f=="string"?"":f.image||"",q=typeof f=="string"?"":f.alt||"";return Lo({key:e,option:p,currentValue:l,busy:u,copy:m,image:v,imageAlt:q})}).join("")}
      </div>
    `;return qe(e,t,o,c,a)}function J(e,t,o,r="",a={}){if(!b(e))return"";const i=ze(e),l=He(e),d=a.unitOverride||i.uom||"",u=a.showUnit!==!1&&!!d,c=u&&a.unitMode!=="outside",p=On({key:e,value:l,meta:i,controlClass:`oq-helper-control${u&&!c?" oq-helper-control--split":""}${c?" oq-helper-control--suffix":""}`,unitMarkup:u?c?`<span class="oq-helper-unit-chip">${s(d)}</span>`:`<span class="oq-helper-unit">${s(d)}</span>`:""});return qe(e,t,o,p,r,a.footerMarkup||"")}function ot(e,t,o,r="",a={}){if(!b(e))return"";const i=ze(e),l=we(e,T(e)),d=a.minLabel||`${i.min}${i.uom||""}`,u=a.maxLabel||`${i.max}${i.uom||""}`,c=a.valueLabel||_(e,l);return qe(e,t,o,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(d)}</span><strong>${s(c)}</strong><span>${s(u)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${n.loadingEntities?"disabled":""}></label>`,r)}function Ki(e,t,o,r={}){if(!b(e))return"";const a=ze(e),i=He(e),l=r.compact===!0,d=r.embedded===!0,u=r.infoId||e,c=r.showCopy!==!1;return`
      <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${d?" oq-settings-mini-field--embedded":""}">
        <div class="oq-settings-mini-copy">
          <div class="oq-settings-mini-copy-head">
            <h5>${s(t)}</h5>
            ${o?cn(u,t,o):""}
          </div>
          ${o&&c?`<p>${s(o)}</p>`:""}
        </div>
        ${On({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
      </article>
    `}function Ui(e,t,o,r=""){if(!b(e))return"";const a=mr(T(e));return qe(e,t,o,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${n.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,r||"oq-settings-field--time")}function ne(e,t,o,r,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(t)}</h3><p>${s(o)}</p></div>${r}</section>`}function ph(){const e=xe.has(n.settingsGroup)?n.settingsGroup:ye[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${ye.map(t=>`
          <button
            class="oq-settings-group-button${t.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(t.id)}"
            aria-pressed="${t.id===e?"true":"false"}"
          >
            <span class="oq-settings-group-button-label">${s(t.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function gh(){const e=xe.has(n.settingsGroup)?n.settingsGroup:ye[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[Ih(),Wh(),Hh(),tf(),Kh(),ef(),Th()]:e==="service"?[Lh(),Fh()]:e==="heating"?[_h()]:e==="cooling"?[of()]:e==="integrations"?[Uh(),zh(),Qh()]:[Bh(),Vh(),Gh(),Yh(),Xh()]).filter(Boolean).join("")}
      </div>
    `}function mh(){if(!n.root||n.appView!=="settings")return!1;const e=n.root.querySelector(".oq-settings-group-nav"),t=n.root.querySelector(".oq-settings-group-stack");if(!e||!t)return!1;const o=xe.has(n.settingsGroup)?n.settingsGroup:ye[0].id;if(o==="service")return!1;const r=e.querySelectorAll(".oq-settings-group-button");if(r.length!==ye.length)return!1;r.forEach(h=>{const w=String(h.dataset.groupId||"")===o;h.classList.toggle("is-active",w),h.setAttribute("aria-pressed",w?"true":"false")}),t.querySelectorAll(".oq-settings-info").forEach(h=>{const y=String(h.dataset.oqSettingsInfo||""),w=n.settingsInfoOpen===y;h.classList.toggle("is-open",w);const S=h.querySelector(".oq-settings-info-popover");S&&(S.hidden=!w);const $=h.querySelector(".oq-settings-info-button");$&&$.setAttribute("aria-expanded",w?"true":"false")}),t.querySelectorAll("[data-oq-settings-field]").forEach(h=>{const y=String(h.dataset.oqSettingsField||"");if(!y)return;const w=h.querySelector(".oq-settings-static-value");if(w){const k=W(y);w.textContent!==k&&(w.textContent=k)}h.querySelectorAll("select[data-oq-field]").forEach(k=>{const H=String(k.dataset.oqField||y),L=String(T(H)||"");k.value!==L&&(k.value=L)}),h.querySelectorAll("input[data-oq-field]").forEach(k=>{const H=String(k.dataset.oqField||y),L=String(He(H)||"");k.value!==L&&(k.value=L)});const S=h.querySelector(".oq-helper-slider-meta strong"),$=h.querySelector('input[type="range"][data-oq-field]');if(S&&$){const k=_(y,we(y,T(y)));S.textContent!==k&&(S.textContent=k)}}),t.querySelectorAll("[data-select-key]").forEach(h=>{const y=String(h.dataset.selectKey||""),w=String(h.dataset.selectOption||""),S=String(T(y)||""),$=w===S;h.classList.toggle("is-active",$),h.setAttribute("aria-pressed",$?"true":"false"),y==="strategy"?h.disabled=n.loadingEntities||n.busyAction==="save-strategy":y==="hpGeneration"?h.disabled=n.loadingEntities||n.busyAction==="save-hpGeneration":y==="curveControlProfile"?h.disabled=n.loadingEntities||n.busyAction==="save-curveControlProfile":y==="phResponseProfile"&&(h.disabled=n.loadingEntities||n.busyAction==="save-phResponseProfile");const k=h.closest(".oq-settings-choice-card-shell");k&&k.classList.toggle("is-active",$)});const a=t.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){const h=String(T("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",h),a.querySelectorAll("input[data-oq-field]").forEach(w=>{const S=String(w.dataset.oqField||""),$=String(He(S)||"");w.value!==$&&(w.value=$)})}t.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(h=>{const y=String(h.dataset.controlKey||""),w=!!T(y),S=String(h.dataset.onLabel||"Aan"),$=String(h.dataset.offLabel||"Uit"),k=String(h.dataset.switchTitle||y),H=w?S:$;h.dataset.controlState=w?"off":"on",h.classList.toggle("is-on",w),h.setAttribute("aria-checked",w?"true":"false"),h.setAttribute("aria-label",`${k}: ${H}`),h.disabled=n.loadingEntities||n.busyAction===`switch-${y}`}),t.querySelectorAll("[data-oq-switch-pill]").forEach(h=>{const y=String(h.dataset.oqSwitchPill||""),w=!!T(y),S=String(h.dataset.onLabel||"Aan"),$=String(h.dataset.offLabel||"Uit"),k=w?S:$;h.classList.toggle("is-on",w),h.textContent!==k&&(h.textContent=k)}),t.querySelectorAll("[data-oq-switch-copy]").forEach(h=>{const y=String(h.dataset.oqSwitchCopy||""),w=!!T(y),S=String(h.dataset.onCopy||""),$=String(h.dataset.offCopy||""),k=w?S:$;h.hidden=!k,h.textContent!==k&&(h.textContent=k)});const i=t.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){const h=i.querySelector(".oq-settings-quickstart-status-value"),y=i.querySelector(".oq-settings-quickstart-status-copy"),w=i.querySelector('button[data-oq-action="open-generation-modal"]'),S=Nn(),$=n.entities.hpGeneration||{},k=b("hpGeneration")&&un($).length>0;if(h){const H=S||"Onbekend";h.textContent!==H&&(h.textContent=H)}if(y){const H="Pas dit aan als je een andere Quatt Hybrid hebt.";y.textContent!==H&&(y.textContent=H)}w&&(w.disabled=!k||n.loadingEntities||n.busyAction==="save-hpGeneration")}const l=t.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){const h=l.querySelector(".oq-settings-quickstart-status-value"),y=l.querySelector(".oq-settings-quickstart-status-copy"),w=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),S=Yl(),$=A("cm100Active");h&&h.textContent!==S&&(h.textContent=S);const k=$?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";y&&y.textContent!==k&&(y.textContent=k),w&&(w.disabled=n.loadingEntities)}const d=t.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(d){const h=d.querySelector(".oq-settings-quickstart-status-value"),y=d.querySelector(".oq-settings-quickstart-status-copy"),w=d.querySelector('button[data-oq-action="reset"]'),S=n.complete===!0?"Afgerond":n.complete===!1?"Open":"Laden...",$=n.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":n.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";h&&h.textContent!==S&&(h.textContent=S),y&&y.textContent!==$&&(y.textContent=$),w&&(w.disabled=n.busyAction==="reset")}const u=t.querySelectorAll("[data-oq-access-security-item]");u.length&&u.forEach(h=>{const y=String(h.dataset.oqAccessSecurityItem||""),w=h.querySelector(".oq-settings-quickstart-status-value"),S=h.querySelector(".oq-settings-quickstart-status-copy"),$=h.querySelector("button[data-oq-action]");if(y==="login"){const k=da(),H=pa();w&&w.textContent!==k&&(w.textContent=k),S&&S.textContent!==H&&(S.textContent=H)}else if(y==="api"){const k=Na(),H=Ra();w&&w.textContent!==k&&(w.textContent=k),S&&S.textContent!==H&&(S.textContent=H)}$&&($.disabled=!1)});const c=t.querySelectorAll("[data-oq-mqtt-item]");c.length&&c.forEach(h=>{const y=h.querySelector(".oq-settings-quickstart-status-value"),w=h.querySelector(".oq-settings-quickstart-status-copy"),S=h.querySelector('button[data-oq-action="open-mqtt-modal"]'),$=va(),k=wa();y&&y.textContent!==$&&(y.textContent=$),w&&w.textContent!==k&&(w.textContent=k),S&&(S.disabled=!1)});const p=t.querySelector(".oq-settings-system-summary");if(p){const h=p.querySelectorAll(".oq-settings-system-row"),y={uptime:Jr(),ip:Xr(),updates:Rn(),datetime:js(),espTemp:Js(),restart:"Opnieuw opstarten"};h.forEach($=>{const k=$.querySelector(".oq-settings-system-row-value"),H=$.dataset.oqDiagnosticsRow||"";if(k&&Object.prototype.hasOwnProperty.call(y,H)){const L=y[H];k.textContent!==L&&(k.textContent=L)}});const w=p.querySelector('button[data-oq-action="open-update-modal"]');w&&(w.disabled=!1);const S=p.querySelector('button[data-oq-action="open-restart-confirm"]');if(S){const $=n.busyAction==="restartAction";S.disabled=$,S.textContent=$?"Herstarten...":"Herstarten"}}t.querySelectorAll(".oq-settings-hp-offset-row").forEach(h=>{const y=String(h.dataset.oqSettingsField||""),w=String(h.dataset.oqHpOffsetRawKey||""),S=String(h.dataset.oqHpOffsetFinalKey||"");if(!y||!w||!S)return;const $=ze(y),k=Ma(w,S,y),H=Ue(He(y)),L=Number.isFinite(k)&&Number.isFinite(H)?Gt(k+H,$.uom||"\xB0C",2):le(S,2),F=h.querySelector("[data-oq-hp-offset-active]");if(F){const E=`${le(S,2)} actief`;F.textContent!==E&&(F.textContent=E)}const U=h.querySelector("[data-oq-hp-offset-raw]");if(U){const E=Number.isFinite(k)?Gt(k,$.uom||"\xB0C",2):le(w,2);U.textContent!==E&&(U.textContent=E)}const C=h.querySelector("[data-oq-hp-offset-final]");C&&C.textContent!==L&&(C.textContent=L)});const f=t.querySelector(".oq-settings-curve-shell"),m=ie();if(!!f!==m)return!1;const v=!!a,q=String(T("phResponseProfile")||"")==="Custom";return v===q}function hh(e=!1){const t=ul();return t?`
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside${e?" oq-curve-fallback-suggest--helper":""}">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${s(t.label)}</strong>
          <span>${s(t.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${n.loadingEntities||n.busyAction==="save-curveFallbackSupply"||t.isCurrent?"disabled":""}
        >
          ${t.isCurrent?"Actief":"Gebruik suggestie"}
        </button>
      </div>
    `:""}function Jl(){return`
      <div class="oq-settings-curve-grid">
        ${ce.map(e=>J(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${J("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:hh()})}
      </div>
    `}function Xl(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${Qt("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function ec(e="oq-settings-grid"){const t=[J("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),J("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${Qt("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${Td()?J("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):t}
      </div>
    `}function fh(e="oq-settings-grid"){const t=[J("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),J("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return t.length?`
      <div class="${s(e)}">
        ${t.join("")}
      </div>
    `:""}function Un(e="",t=""){const o=String(e||"").trim().toUpperCase(),r=String(t||"").trim().toLowerCase(),a=o.split(/[^A-Z0-9]+/).filter(Boolean),i=c=>{const p=String(c||"").trim().toUpperCase();return p?o===p||o.startsWith(`${p}:`)||o.startsWith(`${p} `)||a.includes(p):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!o||o==="\u2014"||o==="UNKNOWN"||o==="UNAVAILABLE"||o==="NAN")return{phase:"Wachten",percent:0};if(o.includes("WAITING")||o.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(r!=="cm100"&&(o==="IDLE"||o==="CM0 - STANDBY"||o==="CM100 READY"||o==="CM100 STOPPED"||o==="GEPAUZEERD"))return{phase:"Wachten",percent:0};const u=(l[r]||[]).find(c=>c.match.some(p=>i(p)));return u||(o.includes("DONE")||o.includes("APPLIED")?{phase:"Klaar",percent:100}:o.includes("ABORT")||o.includes("FAILED")||o.includes("REFUSED")?{phase:"Afgebroken",percent:100}:r==="cm100"&&o.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function Rt({taskKey:e,title:t,copy:o,subcopy:r="",status:a,statusCopy:i,progressTask:l,actions:d="",controls:u="",metrics:c="",className:p=""}){return`
      <article class="oq-settings-commissioning-card${p?` ${s(p)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(t)}</h3>
            <p>${s(o)}</p>
            ${r?`<p class="oq-settings-commissioning-card-subcopy">${s(r)}</p>`:""}
          </div>
        </div>
        ${d?`<div class="oq-settings-commissioning-card-actions">${d}</div>`:""}
        ${u}
        <div class="oq-settings-quickstart-status oq-settings-quickstart-status--compact oq-settings-commissioning-card-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${s(a)}</strong>
              <p class="oq-settings-quickstart-status-copy">${s(i)}</p>
            </div>
          </div>
        </div>
        ${c?`<div class="oq-settings-grid oq-settings-commissioning-metrics">${c}</div>`:""}
      </article>
    `}function bh(){return fo.filter(e=>b(ae(e,"Status"))||b(ae(e,"Load"))||b(jt(e,"cooling",0)))}function vh(e){return Ue(He(e))}function wh(e){const t=[];return Rr.forEach(o=>{let r=-1/0;bn.forEach(a=>{const i=jt(e,o,a),l=vh(i);(!Number.isFinite(l)||l<0||l>120||l<r)&&t.push(`${o==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(r=l)})}),{valid:t.length===0,invalid:t}}function yh(e){const t=String(T(`hp${e}Mode`)||"").trim(),o=Ue(T(`hp${e}Freq`)),r=t&&t!=="Onbekend"&&t!=="Unknown",a=Number.isFinite(o),i=r&&/standby|stand-by/i.test(t),l=a&&o<=.5,d=r?i?a?l?"Standby en compressor uit.":`Compressor draait op ${o.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${t}.`:"ODU status is onbekend.";return{mode:r?t:"Onbekend",freq:Number.isFinite(o)?`${o.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:d}}function qh(e){const t=String(e||"").toUpperCase();return!e||t==="UNKNOWN"||t==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":t.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":t.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":t.includes("WRITE_QUEUED")||t.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":t.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":t.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":t.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":t.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function zi(e,t){return b(e)?On({key:e,value:He(e),meta:ze(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${t}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function Sh(e){const t=bn.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${bn.map(o=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${o}</span>
            <div role="cell">${zi(jt(e,"cooling",o),o)}</div>
            <div role="cell">${zi(jt(e,"heating",o),t+o)}</div>
          </div>
        `).join("")}
      </div>
    `}function kh(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;const t=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,o=t?t.closest(".oq-settings-odu-runtime-table"):null;if(!t||!o)return;const r=Array.from(o.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,d)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(d.dataset.oqOduRuntimeTabIndex||0)),a=r.indexOf(t),i=r[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function Ch(e){const t=ae(e,"Enable"),o=ae(e,"Load"),r=ae(e,"Apply"),a=ae(e,"Status"),i=String(T(a)||"").trim()||"Nog niet geladen",l=wh(e),d=yh(e),u=!!T(t),c=n.loadingEntities||n.busyAction===o||n.busyAction===r,p=c||!u||!l.valid||!d.safe||!b(r),f=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(d.reason)} Laatste compressorfrequentie: ${s(d.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${b(o)?Ae(o,n.busyAction===o?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",c):""}
      ${b(t)?Dn(t,`HP${e} writes vrijgeven`,u,c,"Enable","Locked"):""}
            ${b(r)?Ae(r,n.busyAction===r?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",p):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(qh(i))}</p>
        </div>
        ${Sh(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&d.safe?" is-ok":" is-warning"}">${s(f)} ${s(d.safe?"":d.reason)}</p>
      </article>
    `}function Th(){const e=bh();return e.length?`
      <details class="oq-settings-section oq-settings-section--collapsible oq-settings-odu-runtime-details"${n.oduRuntimeFrequencyDetailsOpen?" open":""}>
        <summary class="oq-settings-section-summary" data-oq-action="toggle-odu-runtime-frequency-details">
          <div class="oq-settings-section-head">
            <div class="oq-settings-section-head-meta">
              <p class="oq-helper-label">Experimenteel</p>
              <div class="oq-settings-section-head-meta-badge">
                <span class="oq-settings-section-badge oq-settings-section-badge--experimental">Runtime only</span>
              </div>
            </div>
            <h3>ODU runtime frequentietabel</h3>
            <p>Lees en schrijf de ODU frequentietabel alleen runtime; waarden worden niet opgeslagen in EEPROM.</p>
          </div>
          <span class="oq-settings-section-summary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="oq-settings-section-collapsible-body oq-settings-odu-runtime">
          <div class="oq-settings-odu-runtime-warning" role="alert">
            <strong>Schrijft direct naar ODU runtime registers.</strong>
            <p>Gebruik dit alleen voor gecontroleerde tests. Apply werkt alleen wanneer de HP in standby staat, de compressor uit is en de enable-schakelaar bewust aan staat.</p>
          </div>
          <div class="oq-settings-odu-runtime-panels">
            ${e.map(t=>Ch(t)).join("")}
          </div>
        </div>
      </details>
    `:""}function tc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${J("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${J("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${$h()}
      </div>
    `}function nc(e="oq-settings-grid"){const t=Eh();return`
      <div class="${s(e)}">
        ${J("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${t}
    `}function Eh(){const e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(o=>b(o.offsetKey)&&b(o.finalKey));if(!e.length)return"";const t=o=>{const r=ze(o.offsetKey),a=Ma(o.rawKey,o.finalKey,o.offsetKey),i=Ue(He(o.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?Gt(a+i,r.uom||"\xB0C",2):le(o.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(o.offsetKey)}" data-oq-hp-offset-raw-key="${s(o.rawKey)}" data-oq-hp-offset-final-key="${s(o.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(o.label)}</strong>
            <span data-oq-hp-offset-active>${s(le(o.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${o.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?Gt(a,r.uom||"\xB0C",2):le(o.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${On({key:o.offsetKey,value:He(o.offsetKey),meta:r,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:r.uom?`<span class="oq-helper-unit-chip">${s(r.uom)}</span>`:""})}
            </label>
            <span class="oq-settings-hp-offset-operator">=</span>
            <div class="oq-settings-hp-offset-readout oq-settings-hp-offset-final">
              <span>Na wijziging</span>
              <strong data-oq-hp-offset-final>${s(l)}</strong>
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
          ${e.map(t).join("")}
        </div>
      </div>
    `}function Pa(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${Ui("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${Ui("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${ot("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${ot("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function oc(){const e=ie();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(fs)}"
          aria-pressed="${e?"false":"true"}"
          ${n.loadingEntities||n.busyAction==="save-strategy"?"disabled":""}
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
          data-select-option="${s(bs)}"
          aria-pressed="${e?"true":"false"}"
          ${n.loadingEntities||n.busyAction==="save-strategy"?"disabled":""}
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
    `}function $h(){if(!b("phResponseProfile"))return"";const e=String(T("phResponseProfile")||""),t=n.loadingEntities||n.busyAction==="save-phResponseProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{const i=a.value===e;return a.value==="Custom"&&i?`
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${s(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${s(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${s(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${Ki("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${Ki("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:Lo({key:"phResponseProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return qe("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",r,"oq-settings-field--span-2")}function rc(){if(!b("curveControlProfile"))return"";const e=String(T("curveControlProfile")||""),t=n.loadingEntities||n.busyAction==="save-curveControlProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>Lo({key:"curveControlProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return qe("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",r,"oq-settings-field--span-2")}function Ah(){const e=(R,V=0)=>{const P=M(R);return Number.isNaN(P)?V:Math.max(0,P)},o=e("phComfortBelow",.1),r=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-o,l=20+r,d=620,u=184,c=46,p=24,f=18,m=40,v=96,q=d-c-p,h=Math.min(20-1.2,i-.35),y=Math.max(20+1.2,l+.35),w=R=>c+(R-h)/Math.max(.01,y-h)*q,S=w(h),$=w(y),k=w(i),H=w(20),L=w(l),F=Math.abs(i-20)>.001,U=Math.abs(l-20)>.001,C=f+24,E=u-m,N=v-44,I=(R,V,P,D="")=>{const ge=Math.max(S+4,Math.min($-110-4,R-55)),se=R-14,Y=N,Ze=28,Se=v-N+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${V} ${P}`)}">
          <rect class="oq-ph-concept-hit" x="${se}" y="${Y}" width="${Ze}" height="${Se}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${R}" cy="${v}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${D?` oq-ph-concept-tooltip--${D}`:""}" transform="translate(${ge} ${N})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(V)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(P)}</text>
          </g>
        </g>
      `},K=[`M ${S.toFixed(1)} ${C.toFixed(1)}`,`L ${k.toFixed(1)} ${v.toFixed(1)}`,`L ${L.toFixed(1)} ${v.toFixed(1)}`,`L ${$.toFixed(1)} ${E.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${s(x(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${s(x(i,1,"\xB0C"))} \u2013 ${s(x(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${s(x(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${d} ${u}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${S.toFixed(1)}" y="${f}" width="${Math.max(20,k-S).toFixed(1)}" height="${(u-f-m).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${k.toFixed(1)}" y="${f}" width="${Math.max(20,L-k).toFixed(1)}" height="${(u-f-m).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${L.toFixed(1)}" y="${f}" width="${Math.max(20,$-L).toFixed(1)}" height="${(u-f-m).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${S}" y1="${f}" x2="${S}" y2="${u-m}" class="oq-ph-concept-axis"></line>
            <line x1="${S}" y1="${v}" x2="${$}" y2="${v}" class="oq-ph-concept-axis"></line>
            <line x1="${H}" y1="${f}" x2="${H}" y2="${u-m}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${K}" class="oq-ph-concept-curve"></path>

            ${F?`<line x1="${k}" y1="${v-12}" x2="${k}" y2="${v+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${H}" y1="${v-14}" x2="${H}" y2="${v+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${U?`<line x1="${L}" y1="${v-12}" x2="${L}" y2="${v+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${F?`<circle cx="${k}" cy="${v}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${H}" cy="${v}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${U?`<circle cx="${L}" cy="${v}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${F?I(k,"Comfort onder setpoint",x(i,1,"\xB0C"),"below"):""}
            ${I(H,"Setpoint",x(20,1,"\xB0C"),"setpoint")}
            ${U?I(L,"Comfort boven setpoint",x(l,1,"\xB0C"),"above"):""}

            <text x="${S+8}" y="${f+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${S+8}" y="${u-m-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${S}" y="${u-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${$}" y="${u-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${F?`<text x="${k-5}" y="${u-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(x(i,1,"\xB0C"))}</text>`:""}
            <text x="${H}" y="${u-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(x(20,1,"\xB0C"))}</text>
            ${U?`<text x="${L+5}" y="${u-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(x(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${s(x(i,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${s(x(i,1,"\xB0C"))} \u2013 ${s(x(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${s(x(l,1,"\xB0C"))}</span>
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
    `}function ac(){const e=[J("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),J("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),J("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${Ah()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function Gi(e,t,o){const r=[Qt(t,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),Qt(o,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return r?`
      <article class="oq-settings-hp-group">
        <header>
          <p class="oq-helper-label">Warmtepomp</p>
          <h4>${s(e)}</h4>
          <p>Stel hier de standen in die OpenQuatt niet hoeft te gebruiken.</p>
        </header>
        <div class="oq-settings-hp-group-grid">
          ${r}
        </div>
      </article>
    `:""}function Hh(){const e=fh();return ne("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${ec()}
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
      `)}function z(e){return b(e)&&A(e)}function st(e){return!b(e)||A(e)}function Qi(e){return b(e)?En(W(e,"None")):""}const Mh=new Set(["compressor oil return"]);function Ph(e){const t=En(e);return t==="Geen actieve storingen"?[]:t.split(",").map(o=>o.trim()).filter(o=>o&&!Mh.has(o.toLowerCase()))}function ic(e){const t=Ph(e);return t.length>0?t.join(", "):"Geen actieve storingen"}function Sr(e){return b(e)?ic(W(e,"None")):""}function uo(e){const t=Sr(e).trim().toLowerCase();return!!t&&t!=="geen actieve storingen"}function Oo(){const e=[],t=z("compressorCyclingWarning2h")||z("compressorCyclingWarning72h")||z("alternatingCompressorStartsWarning"),o=z("compressorCyclingAlertLatched"),r=st("cicPollingEnabled"),a=st("otEnabled"),i=(d,u)=>{z(d)&&e.push({key:d,label:u})};i("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),i("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),i("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),i("lowflowFaultActive","Te lage flow"),i("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),r&&i("cicDataStale","CIC-data is verouderd"),a&&i("otLinkProblem","OpenTherm-verbinding meldt een probleem"),uo("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${Sr("hp1Failures")}`}),uo("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${Sr("hp2Failures")}`});const l=e.length;return o&&!t&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:o,cyclingAlertActive:t,cyclingAlertRecovered:o&&!t,title:l>0?"Aandacht nodig":o?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:l>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:o?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function po(e,t="Aandacht",o="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${s(e?t:o)}</span>`}function Lt({label:e,value:t,note:o="",active:r=!1}){return`
      <div class="oq-settings-monitoring-row${r?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(t)}</strong>
          ${o?`<span>${s(o)}</span>`:""}
        </div>
        ${po(r)}
      </div>
    `}function nt(e){const t=M(e);return Number.isNaN(t)?"\u2014":String(Math.max(0,Math.round(t)))}function Nh(e){const t=M(e);if(Number.isNaN(t))return"Nog niet gemeten";if(t<1)return"Zojuist";if(t<60)return`${Math.round(t)} min geleden`;const o=Math.floor(t/60),r=Math.round(t%60);return`${o}u ${r}m geleden`}function Yi(e){const t=M(e);return Number.isNaN(t)||t<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t*1e3))}function Rh(e){if(!e.cyclingAlertLatched)return"";const t=z("compressorCyclingAlertAlternating"),o=nt("compressorCyclingAlertHp1Peak2h"),r=nt("compressorCyclingAlertHp1Peak72h"),a=b("compressorCyclingAlertHp2Peak2h")?nt("compressorCyclingAlertHp2Peak2h"):"",i=b("compressorCyclingAlertHp2Peak72h")?nt("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${po(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${s(Yi("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${s(Yi("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${s(o)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${s(r)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${s(a)} starts</dd></div>`:""}
          ${i?`<div><dt>HP2 72 uur</dt><dd>${s(i)} starts</dd></div>`:""}
          ${t?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${n.entities.acknowledgeCompressorCyclingAlert?Ae("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function Zi(e,t){return b(`${t}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${s(e)}</p>
          <span>Laatste start: ${s(Nh(`${t}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${s(nt(`${t}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${s(nt(`${t}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${s(nt(`${t}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${s(nt(`${t}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function sc(e){const t=e.active?e.problems.map(o=>o.key).sort().join("|"):"";if(!t){n.installationMonitoringProblemSignature="";return}t!==n.installationMonitoringProblemSignature&&(n.installationMonitoringProblemSignature=t,n.installationMonitoringDetailsOpen=!0)}function Lh(){const e=Oo();sc(e);const t=st("cicPollingEnabled"),o=st("otEnabled"),r=[b("lowflowFaultActive")?Lt({label:"Flow",value:z("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:z("lowflowFaultActive")}):"",b("flowMismatch")?Lt({label:"Flowvergelijking duo",value:z("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:z("flowMismatch")}):""].filter(Boolean).join(""),a=[b("cicDataStale")?Lt({label:"CIC-data",value:t?z("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:t&&z("cicDataStale")}):"",b("otLinkProblem")?Lt({label:"OpenTherm",value:o?z("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:o&&z("otLinkProblem")}):""].filter(Boolean).join(""),i=[b("hp1Failures")?Lt({label:"Warmtepomp 1",value:Qi("hp1Failures"),active:uo("hp1Failures")}):"",b("hp2Failures")?Lt({label:"Warmtepomp 2",value:Qi("hp2Failures"),active:uo("hp2Failures")}):""].filter(Boolean).join(""),l=M("compressorStarts2hWarningLimit"),d=M("compressorStarts72hWarningLimit"),u=z("compressorCyclingWarning2h")||z("compressorCyclingWarning72h")||z("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,c=r?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${r}</div>
      </article>
    `:"",p=i?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${i}</div>
      </article>
    `:"",f=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"";return ne("Bewaking","Installatiebewaking","Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${s(e.title)}</strong>
            <span>${s(e.copy)}</span>
          </div>
          ${po(e.active,"Aandacht nodig","Alles rustig")}
        </div>
        <details class="oq-settings-monitoring-details"${n.installationMonitoringDetailsOpen?" open":""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Geef details weer</strong>
          </summary>
        ${e.active?`
          <div class="oq-settings-monitoring-active-list">
            ${e.problems.map(m=>`<span>${s(m.label)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${po(u)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${Rh(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${Zi("Warmtepomp 1","hp1")}
              ${Zi("Warmtepomp 2","hp2")}
            </div>
            ${ot("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(l)?"\u2014":`${Math.round(l)} starts / 2 uur`})}
            ${ot("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(d)?"\u2014":`${Math.round(d)} starts / 72 uur`})}
          </article>
          ${p}
          </div>
          <div class="oq-settings-monitoring-column">
            ${c}
            ${f}
          </div>
        </div>
        </details>
      `)}function Oh({status:e,running:t,resultReady:o,startDisabled:r,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:d}){const u=String(e||"").toUpperCase(),c=u.includes("FAILED")||u.includes("REFUSED")||u.includes("ABORT"),p=u.includes("APPLIED"),f=b("hp2WaterIn")||b("hp2WaterOut")||b("hp2WaterInRaw")||b("hp2WaterOutRaw"),m=M("hpWaterCalibrationStableProgress"),v=M("hpWaterCalibrationStableRequired"),q=M("hpWaterCalibrationRemaining"),h=Math.round(M("hpWaterCalibrationPhase")),y=t&&(h===1||u.includes("MIXING")),w=t&&!y,S=300,$=60,k=Number.isFinite(q)?Math.max(0,S-q):NaN,H=Number.isFinite(k)?Math.max(0,$-k):NaN,L=y&&Number.isFinite(k)?Math.max(0,Math.min(100,k/$*100)):w&&Number.isFinite(m)&&Number.isFinite(v)&&v>0?Math.max(0,Math.min(100,m/v*100)):t&&Number.isFinite(q)?Math.max(0,Math.min(100,100-q/S*100)):o?100:0,F=o&&b("hpWaterCalibrationResultSpreadBefore")?le("hpWaterCalibrationResultSpreadBefore",2):le("hpWaterCalibrationSpread",2),U=y?"Water mengen":Number.isFinite(m)&&Number.isFinite(v)&&v>0?m>0?`${Math.round(Math.max(0,m))} / ${Math.round(v)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",C=o?3:t?2:1,E=p?"Offsets toegepast":o?`Meting klaar - spreiding ${F}`:t?y?`Water mengen${Number.isFinite(H)&&H>0?` - meting start over ${Math.round(H)} s`:""}`:`Meting bezig - ${Number.isFinite(q)&&q>0?`max. ${Math.round(q)} s resterend`:U}`:c?"Meting niet voltooid":"Voorbereiding",N=p?"De voorgestelde offsets zijn opgeslagen.":o?"Controleer de voorgestelde offsets en pas ze toe.":t?y?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":c?Ro("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):f?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",I=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(P=>b(P.liveKey)||b(P.rawKey)||b(P.offsetKey)),K=(P,D)=>{const j=C>P;return`
        <div class="oq-settings-hp-calibration-step${j?" is-done":""}${C===P?" is-active":""}">
          <span>${j?"\u2713":P}</span>
          <strong>${s(D)}</strong>
        </div>
      `},R=P=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(P.label)}</span>
          <strong>${s(le(P.liveKey,2))}</strong>
        </article>
      `,V=P=>{const D=M(P.resultRawKey),j=Number.isFinite(D)?D:Ma(P.rawKey,P.liveKey,P.offsetKey),Q=M(P.suggestedKey),ge=Number.isFinite(j)&&Number.isFinite(Q)?Gt(j+Q,n.entities[P.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(P.label)}</th>
          <td>${s(Number.isFinite(j)?Gt(j,n.entities[P.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${s(le(P.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${s(le(P.suggestedKey,2))}</span></td>
          <td>${s(ge)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${K(1,"Voorbereiding")}
          ${K(2,"Meting")}
          ${K(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${o?" is-success":t?" is-active":c?" is-warning":""}">
          <div>
            <strong>${s(E)}</strong>
            <p>${s(N)}</p>
          </div>
          ${t||o?`<span>${s(t?U:"Resultaat beschikbaar")}</span>`:""}
          ${t?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${L.toFixed(0)}%"></i></div>`:""}
        </div>

        ${t?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${I.map(R).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${s(le("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${s(le("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${o?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${s(le("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${s(le("hpWaterCalibrationSupplyDelta",2))}</span>
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
                  ${I.map(V).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${d?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${Wt({active:t,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||r,stopDisabled:l||a})}
            ${n.entities.hpWaterCalibrationApply?Ae("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function lc(){const e=b("boilerCvAssistEnabled")&&A("boilerCvAssistEnabled"),t=Yl(),o=A("cm100Active"),r=String(t||"").trim().toUpperCase(),a=bt(t),i=!a&&(o||r==="CM100 READY"),l=n.commissioningTaskLock==="cm100",d=n.loadingEntities||n.busyAction==="commissioningCm100Start"||n.busyAction==="commissioningCm100Stop"||l,u=!!n.pendingCommissioningCm100Start,c=d||i||a,p=d||!i,f=Nt("boilerPowerTestStatus","IDLE"),m=Un(f,"boiler"),v=A("boilerPowerTestActive"),q=n.loadingEntities||n.busyAction==="boilerPowerTestStart"||n.busyAction==="boilerPowerTestAbort"||n.busyAction==="boilerPowerTestApply",h=!!(n.entities.boilerPowerTestStart||n.entities.boilerPowerTestAbort||n.entities.boilerPowerTestApply),y=!!n.pendingBoilerPowerTestStart,w=n.commissioningTaskLock==="boiler",S=bt(f),k=!ee(f)&&(v||y||w||Pt(f))&&!S,H=te("boilerRatedHeatPower"),L=te("boilerHeatPower"),F=M("boilerHeatPower"),U=F>0?L:k&&n.commissioningBoilerHeatPowerDisplay?n.commissioningBoilerHeatPowerDisplay:L;F>0&&(n.commissioningBoilerHeatPowerDisplay=L);const C=Nt("flowAutotuneStatus","IDLE"),E=Un(C,"autotune"),N=n.loadingEntities||n.busyAction==="flowAutotuneStart"||n.busyAction==="flowAutotuneAbort"||n.busyAction==="flowAutotuneApply",I=!!(n.entities.flowAutotuneStart||n.entities.flowAutotuneAbort||n.entities.flowAutotuneApply),K=!!n.pendingFlowAutotuneStart,R=n.commissioningTaskLock==="autotune",V=bt(C),D=!ee(C)&&(K||R||Pt(C))&&!V,j=Nt("airPurgeStatus","IDLE"),Q=Un(j,"purge"),ge=A("airPurgeActive"),se=n.loadingEntities||n.busyAction==="airPurgeStart"||n.busyAction==="airPurgeAbort",Y=!!(n.entities.airPurgeStart||n.entities.airPurgeAbort),Ze=!!n.pendingAirPurgeStart,Se=n.commissioningTaskLock==="purge",me=!ee(j)&&(ge||Ze||Se||Pt(j)),Ko=/DONE/.test(String(j||"").toUpperCase()),he=!!(Y||n.entities.airPurgeStatus||n.entities.airPurgeReturnToAuto),Uo=te("airPurgeRemaining",{decimals:0}),pn=M("airPurgePhase"),Wn=pn===1?"Rustig":pn===2?"Pulsen":pn===3?"Stabiliseren":Q.phase,ht=Nt("manualFlowStatus","IDLE"),$t=A("manualFlowActive"),Ve=n.loadingEntities||n.busyAction==="manualFlowStart"||n.busyAction==="manualFlowAbort",gn=!!(n.entities.manualFlowStart||n.entities.manualFlowAbort),At=!!n.pendingManualFlowStart,Pe=n.commissioningTaskLock==="manual-flow",ke=!ee(ht)&&($t||At||Pe||Pt(ht)),Je=Nt("manualHpStatus","IDLE"),mn=A("manualHpActive"),Ht=n.loadingEntities||n.busyAction==="manualHpStart"||n.busyAction==="manualHpAbort",Bn=!!(n.entities.manualHpStart||n.entities.manualHpAbort),Mt=!!n.pendingManualHpStart,Ne=n.commissioningTaskLock==="manual-hp",Re=!ee(Je)&&(mn||Mt||Ne||Pt(Je)),ti=/SAFETY STOP/.test(String(Je||"").toUpperCase()),ni=/STOPPING/.test(String(Je||"").toUpperCase()),Xe=Nt("hpWaterCalibrationStatus","IDLE"),lu=Un(Xe,"hp-water-calibration"),oi=A("hpWaterCalibrationActive"),Vn=n.loadingEntities||n.busyAction==="hpWaterCalibrationStart"||n.busyAction==="hpWaterCalibrationAbort"||n.busyAction==="hpWaterCalibrationApply",ri=!!(n.entities.hpWaterCalibrationStart||n.entities.hpWaterCalibrationAbort||n.entities.hpWaterCalibrationApply),jn=!!n.pendingHpWaterCalibrationStart,et=n.commissioningTaskLock==="hp-water-calibration",ve=!ee(Xe)&&(oi||jn||et||Pt(Xe)),_n=/DONE|APPLIED/.test(String(Xe||"").toUpperCase()),ai=/APPLIED/.test(String(Xe||"").toUpperCase()),cu=te("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),uu=te("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),ii=/DONE|APPLIED/.test(String(f||"").toUpperCase()),si=/DONE|APPLIED/.test(String(C||"").toUpperCase()),zo=i?S?"Wachten op CM100":k?m.phase:ii?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Go=i?V?"Wachten op CM100":D?E.phase:si?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Qo=i?me?Q.phase:Ko?"Klaar":"Klaar om te starten":"Wachten op CM100",li=i?ke?"Actief":"Klaar om te starten":"Wachten op CM100",ci=i?Re?ni?"Bezig met stoppen":ti?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",ui=i?ve?lu.phase:ai?"Offsets toegepast":_n?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",di=!i||q||!h||D||me||ke||Re||ve||k||R||Se||Pe||Ne||et||y,du=q||!(k||w||y),pu=q||di||!ii||D||me||ve,pi=!i||N||!I||k||me||ke||Re||ve||D||w||Se||Pe||Ne||et||K,gu=N||!(D||R||K),mu=N||pi||!si||k||me||ve,hu=!i||se||!Y||k||D||ke||Re||ve||me||w||R||Pe||Ne||et||Ze,fu=se||!(me||Se||Ze),bu=!i||Ve||!gn||k||D||me||Re||ve||ke||w||R||Se||Ne||et||At,vu=Ve||!(ke||Pe||At),wu=!i||Ht||!Bn||k||D||me||ke||ve||Re||w||R||Se||Pe||et||Mt,yu=Ht||!(Re||Ne||Mt),qu=!i||Vn||!ri||k||D||me||ke||Re||ve||w||R||Se||Pe||Ne||jn,Su=Vn||!(ve||et||jn),ku=Vn||ve||!_n||ai;u&&i&&(n.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(r))&&(n.commissioningTaskLock=""),y&&(v||ee(f))&&(n.pendingBoilerPowerTestStart=!1),w&&ee(f)&&(n.commissioningTaskLock=""),K&&ee(C)&&(n.pendingFlowAutotuneStart=!1),R&&ee(C)&&(n.commissioningTaskLock=""),Ze&&(ge||ee(j))&&(n.pendingAirPurgeStart=!1),Se&&ee(j)&&(n.commissioningTaskLock=""),At&&($t||ee(ht))&&(n.pendingManualFlowStart=!1),Pe&&($t||ee(ht))&&(n.commissioningTaskLock=""),Mt&&(mn||ee(Je))&&(n.pendingManualHpStart=!1),Ne&&(mn||ee(Je))&&(n.commissioningTaskLock=""),jn&&(oi||ee(Xe))&&(n.pendingHpWaterCalibrationStart=!1),et&&ee(Xe)&&(n.commissioningTaskLock="");const Cu=a?"Wachten op CM100":t,Tu=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",Eu=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:ui,available:!!(ri||n.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:Rt({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:ui,statusCopy:ve?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":_n?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:Oh({status:Xe,running:ve,resultReady:_n,startDisabled:qu,abortDisabled:Su,applyDisabled:ku,busy:Vn,controlsAvailable:!!(n.entities.hpWaterCalibrationStart||n.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:li,available:!!(gn||n.entities.manualFlowStatus),openDisabled:!i,cardMarkup:Rt({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:li,statusCopy:ke?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${ot("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${n.entities.manualFlowStart||n.entities.manualFlowAbort?Wt({active:ke,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:Ve||bu,stopDisabled:Ve||vu}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${Z("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",te("flowSelected"),"oq-settings-field--compact")}
            ${Z("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",te("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${n.entities.manualFlowApplyHeating?Ae("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",Ve):""}
          ${n.entities.manualFlowApplyCooling?Ae("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",Ve):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:ci,available:!!(Bn||n.entities.manualHpStatus),openDisabled:!i,cardMarkup:Rt({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:ci,statusCopy:Re?ni?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":ti?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${n.entities.manualHpStart||n.entities.manualHpAbort?Wt({active:Re,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:Ht||wu,stopDisabled:Ht||yu}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${Qt("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${ot("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${b("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${Qt("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${ot("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${Z("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",te("flowSelected"),"oq-settings-field--compact")}
              ${Z("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",ji("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${b("hp2Compressor")?Z("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",ji("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${Z("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",T("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${Z("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",En(W("hp1Failures","None")),"oq-settings-field--compact")}
              ${b("hp2Failures")?Z("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",En(W("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:Go,available:!0,openDisabled:bt(Go),cardMarkup:Rt({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:Go,statusCopy:V?"Wacht totdat CM100 actief is voordat je autotune start.":D?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${n.entities.flowAutotuneStart||n.entities.flowAutotuneAbort?Wt({active:D,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:N||pi,stopDisabled:N||gu}):""}
            ${n.entities.flowAutotuneApply?Ae("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",N||mu):""}
          `,metrics:`
            ${Z("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",cu,"oq-settings-field--compact")}
            ${Z("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",uu,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:zo,available:e,openDisabled:bt(zo),cardMarkup:Rt({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s(H)}`,status:zo,statusCopy:S?"Wacht totdat CM100 actief is voordat je de boiler-test start.":k?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${n.entities.boilerPowerTestStart||n.entities.boilerPowerTestAbort?Wt({active:k,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:q||di,stopDisabled:q||du}):""}
            ${n.entities.boilerPowerTestApply?Ae("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",q||pu):""}
          `,metrics:`
            ${Z("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",U)}
            ${Z("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",te("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:Qo,available:he,openDisabled:bt(Qo),cardMarkup:Rt({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:Qo,statusCopy:me?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${n.entities.airPurgeStart||n.entities.airPurgeAbort?Wt({active:me,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:se||hu,stopDisabled:se||fu}):""}
          `,metrics:`
            ${Z("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",Uo,"oq-settings-field--compact")}
            ${Z("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",Wn,"oq-settings-field--compact")}
            ${Z("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",te("flowSelected"),"oq-settings-field--compact")}
            ${uh("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter($u=>$u.available);return{cm100Status:Cu,cm100StartDisabled:c,cm100StopDisabled:p,serviceStatusCopy:Tu,tasks:Eu}}function Dh(e){return`
      <div class="oq-settings-system-row oq-settings-system-row--with-action oq-settings-service-row" data-oq-service-task="${s(e.key)}">
        <div class="oq-settings-system-row-copy">
          <p class="oq-settings-system-row-label">${s(e.label)}</p>
          <strong class="oq-settings-system-row-value">${s(e.status)}</strong>
          <p class="oq-settings-system-row-note">${s(e.summary)}</p>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${s(e.key)}"
          ${e.openDisabled?"disabled":""}
        >
          ${e.openDisabled?"Wachten op CM100":"Openen"}
        </button>
      </div>
    `}function Fh(){const e=lc();return ne("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${s(e.cm100Status)}</strong>
              <p>${s(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${n.entities.commissioningCm100Start?Ae("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${n.entities.commissioningCm100Stop?Ae("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(t=>Dh(t)).join("")}
          </div>
        </div>
      `)}function xh(){const e=String(n.systemModal||"").replace(/^service-task-/,""),o=lc().tasks.find(r=>r.key===e);return o?`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task" data-oq-service-task-scroller role="dialog" aria-modal="true" aria-labelledby="oq-service-task-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Service</p>
              <h2 class="oq-helper-modal-title" id="oq-service-task-modal-title">${s(o.title)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit ${s(o.title)}">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(o.summary)}</p>
          <div class="oq-settings-service-task-modal-body">
            ${o.cardMarkup}
          </div>
          <div class="oq-helper-modal-actions">
            ${o.modalActions||""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
          </div>
        </section>
      </div>
    `:""}function Ji(){if(!b("hpGeneration"))return"";const e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:Fi,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:Fi,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:Yg,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},t=n.entities.hpGeneration||{},o=String(T("hpGeneration")||""),r=un(t),a=n.loadingEntities||n.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${r.map(i=>{const l=e[i]||{};return Lo({key:"hpGeneration",option:i,currentValue:o,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function Ih(){const e=Nn(),t=n.entities.hpGeneration||{},o=b("hpGeneration")&&un(t).length>0;return!e&&!o?"":ne("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige versie</p>
              <strong class="oq-settings-quickstart-status-value">${s(e||"Onbekend")}</strong>
            </div>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="open-generation-modal"
            ${!o||n.loadingEntities||n.busyAction==="save-hpGeneration"?"disabled":""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `)}function cc(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!b("boilerCvAssistEnabled"))return"";const t=A("boilerCvAssistEnabled"),o=b("boilerRatedHeatPower"),r=ze("boilerRatedHeatPower"),a=He("boilerRatedHeatPower"),i=n.loadingEntities||n.busyAction==="switch-boilerCvAssistEnabled",d=o?On({key:"boilerRatedHeatPower",value:a,meta:r,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,u=t&&o?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${s(e)}">
          ${qe("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${Dn("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",t,i)}
              </div>
            `,"oq-settings-field--compact")}

          ${t?qe("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${d}
              </div>
            `,t&&o?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",u):""}
        </div>
      `}function Wh(){if(!b("boilerCvAssistEnabled"))return"";const e=A("boilerCvAssistEnabled");return ne("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",cc())}function Bh(){const e=n.complete===!0?"Afgerond":n.complete===!1?"Open":"Laden...",t=n.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":n.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return ne("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${s(e)}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="reset"
              ${n.busyAction==="reset"?"disabled":""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${s(t)}</p>
        </div>
      `)}function Vh(){if(!b("trendHistoryEnabled")&&!b("lifetimeEnergyHistoryEnabled"))return"";const e=A("trendHistoryEnabled"),t=e&&A("trendHistoryFlashEnabled"),o=e&&b("trendHistoryFlashAvailable"),r=b("lifetimeEnergyHistoryEnabled"),a=r&&A("lifetimeEnergyHistoryEnabled"),i=b("lifetimeEnergyHistoryAvailable"),l=o?te("trendHistoryFlashAvailable"):"Alleen RAM",d=i?te("lifetimeEnergyHistoryAvailable"):"Geen data";return ne("Diagnose","Opslagbeheer","Beheer trendbuffers, flashhistorie en lifetime energiehistorie vanuit \xE9\xE9n overzicht.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Geheugen en flash</h3>
            <p>Beheer wat tijdelijk in RAM blijft en welke historie bewust naar flash wordt geschreven.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${b("trendHistoryEnabled")?er("Trenddata",e?"Aan":"Uit","RAM",e):""}
            ${b("trendHistoryFlashEnabled")?er("Trendflash",l,t?"Aan":"Uit",t):""}
            ${r?er("Energie",d,a?"Aan":"Uit",a):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Aanpassen
          </button>
        </article>
      `)}function jh(){const e=b("trendHistoryEnabled")&&A("trendHistoryEnabled"),t=e&&b("trendHistoryFlashEnabled")&&A("trendHistoryFlashEnabled"),r=b("lifetimeEnergyHistoryEnabled")&&A("lifetimeEnergyHistoryEnabled"),a=b("lifetimeEnergyHistoryAvailable")?te("lifetimeEnergyHistoryAvailable"):"Geen data",i=b("lifetimeEnergyHistoryClear")&&a!=="Geen data"&&a!=="\u2014",l=b("trendHistoryFlashAvailable")?te("trendHistoryFlashAvailable"):"Geen flashdata",d=e&&b("trendHistoryFlush"),c=b("lifetimeEnergyHistoryCapture")||b("lifetimeEnergyHistoryClear"),p=[{key:"trendHistoryFlashAvailable",label:"Omvang",note:"opgeslagen"},{key:"trendHistoryFlashSize",label:"Grootte"},{key:"trendHistoryFlashWrites",label:"Schrijfacties"},{key:"trendHistoryFlashOldest",label:"Oudste punt"},{key:"trendHistoryFlashNewest",label:"Nieuwste punt"},{key:"trendHistoryFlashLastFlush",label:"Laatste opslag"}],f=[{key:"lifetimeEnergyHistoryAvailable",label:"Records",note:"lifetime"},{key:"lifetimeEnergyHistorySize",label:"Grootte"},{key:"lifetimeEnergyHistoryWrites",label:"Schrijfacties"},{key:"lifetimeEnergyHistoryOldest",label:"Oudste dag"},{key:"lifetimeEnergyHistoryNewest",label:"Nieuwste dag"},{key:"lifetimeEnergyHistoryLastWrite",label:"Laatste opslag"}];return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-settings-storage-modal" role="dialog" aria-modal="true" aria-labelledby="oq-history-storage-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Diagnose</p>
              <h2 class="oq-helper-modal-title" id="oq-history-storage-modal-title">Opslagbeheer</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit opslagbeheer">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Beheer welke historie tijdelijk in RAM blijft en wat bewust naar flash mag. Handmatig opslaan is vooral nuttig vlak voor OTA of herstart.</p>
          <div class="oq-settings-storage-domain-grid">
            <section class="oq-settings-storage-domain oq-settings-storage-domain--trend">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">RAM + optionele flash</p>
                <h3>Trenddata</h3>
                <p>Technische signalen voor Diagnose, zoals temperatuur, flow en vermogen.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${tr("trendHistoryEnabled","Trenddata in RAM","Houdt technische signalen vast voor Diagnose-grafieken zolang de controller online is.","Diagnose blijft live beschikbaar.","Nieuwe trendpunten worden niet bijgehouden.","vluchtig")}
                ${tr("trendHistoryFlashEnabled","Trenddata in flash","Maakt technische trendhistorie beschikbaar na herstart of OTA.","Wordt periodiek opgeslagen.","Alleen RAM; bestaande flashdata blijft staan.",l)}
                ${d?`
                  <div class="oq-settings-storage-inline-action">
                    <div>
                      <h4>Trendbuffer nu opslaan</h4>
                      <p>Schrijf de huidige trendbuffer direct naar flash.</p>
                    </div>
                    ${nr("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!t,busyLabel:"Opslaan..."})}
                  </div>
                `:""}
              </div>
              ${_i(p)}
            </section>
            <section class="oq-settings-storage-domain oq-settings-storage-domain--energy">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Dagrecords in flash</p>
                <h3>Energiehistorie</h3>
                <p>Dagtotalen voor Resultaten: opbrengst, verbruik, COP/EER en besparing.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${tr("lifetimeEnergyHistoryEnabled","Energiehistorie in flash","Bewaart dagtotalen voor langere energiegrafieken.","Dagrecords bij dagwissel en nette shutdown.","Nieuwe dagrecords worden niet opgeslagen.",a)}
                ${c?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--split">
                    <div>
                      <h4>Energiehistorie nu opslaan</h4>
                      <p>Leg het huidige dagrecord direct vast.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${nr("lifetimeEnergyHistoryCapture","Nu opslaan","save-lifetime-energy-history",{disabled:!r,busyLabel:"Opslaan..."})}
                    </div>
                  </div>
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger">
                    <div>
                      <h4>Energiehistorie wissen</h4>
                      <p>Verwijder alle opgeslagen dagrecords uit flash.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${nr("lifetimeEnergyHistoryClear","Wissen","clear-lifetime-energy-history",{disabled:!i,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}
                    </div>
                  </div>
                `:""}
              </div>
              ${_i(f)}
            </section>
          </div>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `}function _h(){const e=ie()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${rc()}
          </div>
          <div class="oq-settings-curve-shell">
            ${uc()}
          </div>
          ${Jl()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${tc()}
          ${ac()}
        </div>
      `;return ne("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${Xl()}
        ${oc()}
        ${e}
      `)}function Kh(){return ne("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",nc())}function Uh(){const e=b("otEnabled"),t=b("cicPollingEnabled")||b("cicFeedUrl"),o=b("cicCompatibilityMode"),r=b("otLinkProblem")||b("cicDataStale")||b("cicJsonFeedOk");if(!e&&!t&&!o&&!r)return"";const a=st("cicPollingEnabled"),i=st("otEnabled"),l=({label:q,value:h,active:y=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${y?" is-warning":""}">
        <dt>${s(q)}</dt>
        <dd>${s(h)}</dd>
      </div>
    `,d=(q,h,y="Actief",w="Normaal",S={})=>{if(!b(q))return"";const $=z(q);return l({label:h,value:$?y:w,active:S.warningWhenActive?$:!1})},u=(q,h,y={})=>{const w=y.fallbackKey||"";return!b(q)&&!(w&&b(w))?"":l({label:h,value:te(b(q)?q:w,y)})},c=(q,h)=>{const y=h.filter(Boolean).join("");return y?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(q)}</h4>
          <dl>${y}</dl>
        </article>
      `:""},p=b("cicFeedUrl")?`
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
            value="${s(String(He("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${n.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",f=c("OpenTherm",[b("otLinkProblem")?l({label:"OT-link",value:i?z("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&z("otLinkProblem")}):"",d("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),d("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),u("otControlSetpoint","Control setpoint"),u("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),u("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),m=c("CIC-feed",[b("cicJsonFeedOk")?l({label:"JSON-feed",value:a?z("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!z("cicJsonFeedOk")}):"",b("cicDataStale")?l({label:"Data",value:a?z("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&z("cicDataStale")}):"",d("cicChEnabled","CH-vraag","Actief","Normaal"),d("cicCoolingEnabled","Koeling","Actief","Normaal"),u("cicControlSetpoint","Control setpoint"),u("cicRoomSetpoint","Room setpoint"),u("cicRoomTemp","Room temperature"),u("cicFlowrate","Flow"),u("cicLastSuccessAge","Laatste succes")]),v=f||m?`
      <details class="oq-settings-integration-diagnostics"${n.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${f}
          ${m}
        </div>
      </details>
    `:"";return ne("Integratie","OpenTherm & CIC-polling","Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          ${or("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${or("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${or("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${p}
        </div>
        ${v}
      `)}function zh(){if(!xr.some(C=>b(C)))return"";const t=st("cicPollingEnabled"),o=st("otEnabled"),r=(C={})=>C.haValueKey||(C.haKeys||[]).find(E=>!/valid$/i.test(E))||"",a=(C={})=>C.haValidKey||(C.haKeys||[]).find(E=>/valid$/i.test(E))||"",i=(C="",E="")=>!!C&&!!E&&b(C)&&b(E)&&z(E),l=(C={})=>i(r(C),a(C)),d=(C,E={})=>C==="CIC"?t:C==="OT thermostat"?o:C==="HA input"?l(E):C==="CIC or HA input"?t||l(E):C==="Flowmeter HP2"?b("hp2Flow"):C==="Local aggregate HP1/HP2"?b("flowLocal")||b("hp2Flow"):!0,u=(C,E={})=>C==="CIC"&&!t?"CIC-polling staat uit":C==="OT thermostat"&&!o?"OpenTherm staat uit":C==="HA input"&&!l(E)?"HA-bron ongeldig":C==="CIC or HA input"&&!t&&!l(E)?"CIC en HA ontbreken":C==="Flowmeter HP2"&&!b("hp2Flow")?"HP2-flow ontbreekt":C==="Local aggregate HP1/HP2"&&!b("flowLocal")&&!b("hp2Flow")?"Lokale flow ontbreekt":"",c=(C,E="Actief",N="Normaal")=>b(C)?z(C)?E:N:"",p=(C,E={})=>{const N=String(C||"").trim();return N?E.optionLabels?.[N]||De(N):""},f=(C,E={})=>{const N=String(T(C)||"").trim();return N?p(N,E):""},m=C=>{const E=Ro(C,"");return E?De(E):""},v=(...C)=>C.find(E=>String(E||"").trim())||"",q=()=>{const C=f("waterSupplySource");if(String(T("waterSupplySource")||"")==="Local"&&b("localWaterSupplyTempSource")){const E=f("localWaterSupplyTempSource");return E?`${C} - ${E}`:C}return C},h=()=>{const C=String(T("flowSource")||"").trim();if(C==="Outdoor unit"){if(b("qFlowSource")){const E=String(T("qFlowSource")||"").trim(),N=String(T("hpGeneration")||"").trim();return E==="Local"||E==="Auto"&&N==="V1"?E==="Auto"?"Lokaal (auto)":"Lokaal":v(f("outdoorUnitFlowMode"),E==="Auto"?"Buitenunit (auto)":"Buitenunit")}return v(f("outdoorUnitFlowMode"),"Quatt-flow")}return De(C)},y=()=>{const C=String(T("outsideTempSource")||"").trim();if(C!=="Auto")return De(C);const E=M("outsideTempLocalAggregated"),N=M("outsideTempHa"),I=!Number.isNaN(E),K=b("outsideTempHaValid")?z("outsideTempHaValid")&&!Number.isNaN(N):!Number.isNaN(N);return I&&K?N<=E?"HA-invoer":"Buitenunit":K?"HA-invoer":I?"Buitenunit":"Auto"},w=({label:C,value:E="",key:N="",active:I=!1})=>{const K=E||(N?te(N):"");return K?`
        <div class="oq-settings-source-row${I?" is-warning":""}">
          <span>${s(C)}</span>
          <strong>${s(K)}</strong>
        </div>
      `:""},S=({label:C="HA input",valueKey:E="",validKey:N="",value:I=""})=>i(E,N)?[w({label:C,key:E,value:I}),w({label:"HA status",value:"Geldig"})]:[],$=(C,E={})=>{if(!b(C))return{markup:"",warning:""};const N=n.entities[C]||{},I=String(T(C)||""),R=un(N).filter(Q=>d(Q,E)),V=I&&!d(I,E),P=I==="HA input"&&E.keepUnavailableCurrent!==!0,j=(V&&!P&&!R.includes(I)?[I,...R]:R).map(Q=>{const ge=!d(Q,E),se=p(Q,E),Y=ge?`${se} (${u(Q,E)||"niet beschikbaar"})`:se;return`<option value="${s(Q)}" ${Q===I?"selected":""}>${s(Y)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s(E.label||"Bron")}</span>
              ${E.infoCopy?cn(E.infoId||C,E.infoTitle||E.label||"Bron",E.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s(C)}" ${n.loadingEntities?"disabled":""}>
              ${j}
            </select>
          </label>
        `,warning:V?`Huidige bron niet beschikbaar: ${u(I,E)}`:""}},k=({key:C,title:E,select:N,secondarySelect:I=null,secondarySelects:K=null,rows:R=[]})=>{const V=N&&N.when!==!1?$(N.key,N):{markup:"",warning:""},D=(Array.isArray(K)?K:I?[I]:[]).filter(Y=>Y&&Y.when!==!1).map(Y=>$(Y.key,Y)).filter(Y=>Y.markup),j=D.map(Y=>Y.markup).join(""),Q=D.map(Y=>Y.warning).find(Boolean)||"",ge=R.filter(Boolean).join(""),se=`${V.markup}${j}`;return!se&&!ge?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s(C||N.key)}">
          <div class="oq-settings-source-card-head">
            <h4>${s(E)}</h4>
          </div>
          ${se?`
            <div class="oq-settings-source-controls">
              ${se}
            </div>
          `:""}
          ${V.warning||Q?`
            <p class="oq-settings-source-warning">${s(V.warning||Q)}</p>
          `:""}
          ${ge?`<div class="oq-settings-source-rows">${ge}</div>`:""}
        </article>
      `},H=String(T("waterSupplySource")||""),L=String(T("flowSource")||""),F=String(T("qFlowSource")||""),U=[k({key:"room-temperature",title:"Kamertemperatuur",select:{key:"roomTempSource",label:"Kamertemperatuur bron",haKeys:["roomTempHa","roomTempHaValid"]},rows:[w({label:"Actieve waarde",key:"roomTemp"}),w({label:"Gebruikte bron",value:m("roomTempEffectiveSource")}),t?w({label:"CIC",key:"cicRoomTemp"}):"",o?w({label:"OpenTherm",key:"otRoomTemp"}):"",...S({valueKey:"roomTempHa",validKey:"roomTempHaValid"})]}),k({key:"room-setpoint",title:"Kamer setpoint",select:{key:"roomSetpointSource",label:"Setpoint bron",haKeys:["roomSetpointHa","roomSetpointHaValid"]},rows:[w({label:"Actieve waarde",key:"roomSetpoint"}),w({label:"Gebruikte bron",value:m("roomSetpointEffectiveSource")}),t?w({label:"CIC",key:"cicRoomSetpoint"}):"",o?w({label:"OpenTherm",key:"otRoomSetpoint"}):"",...S({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"})]}),k({key:"water-supply",title:"Aanvoertemperatuur",select:{key:"waterSupplySource",label:"Aanvoer bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:H==="Local"&&b("localWaterSupplyTempSource")},rows:[w({label:"Actieve waarde",key:"supplyTemp"}),w({label:"Gebruikte bron",value:q()}),w({label:"Lokaal",key:"waterSupplyTempEsp"}),w({label:"DS18B20",key:"waterSupplyTempDs18b20"}),t?w({label:"CIC",key:"cicWaterSupplyTemp"}):"",...S({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),k({key:"flow-source",title:"Flow",select:{key:"flowSource",label:"Flow bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:t||L==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Quatt-flow bron",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:L==="Outdoor unit"&&b("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Flowmeterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:L==="Outdoor unit"&&b("outdoorUnitFlowMode")&&(!b("qFlowSource")||F!=="Local")}],rows:[w({label:"Actieve waarde",key:"flowSelected"}),w({label:"Gebruikte bron",value:h()}),w({label:"Lokaal",key:"controllerFlow"}),w({label:"Gecombineerd",key:"flowLocal"}),w({label:"HP1",key:"hp1Flow"}),w({label:"HP2",key:"hp2Flow"}),t?w({label:"CIC",key:"cicFlowrate"}):""]}),k({key:"outside-temperature",title:"Buitentemperatuur",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],infoId:"outsideTempSource-auto-info",infoCopy:i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn zowel buitenunit als HA-invoer geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een van beide geldig, dan wordt die gebruikt.":"Auto gebruikt de geldige buitentemperatuur van de buitenunit."},rows:[w({label:"Actieve waarde",key:"outsideTempSelected"}),w({label:"Gebruikte bron",value:y()}),w({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...S({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"})]}),k({key:"heating-enable",title:"Warmtetoestemming",select:{key:"heatingEnableSource",label:"Warmtetoestemming bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],keepUnavailableCurrent:!0},rows:[w({label:"Verwarming toegestaan",value:c("heatingEnableSelected","Ja","Nee")}),w({label:"Gebruikte externe bron",value:m("heatingEnableEffectiveSource")}),w({label:"Bronselectie",value:c("heatingEnableValid","Geldig","Ongeldig")}),o?w({label:"OpenTherm",value:c("otThermostatChEnable","Toestemming","Geen toestemming")}):"",t?w({label:"CIC",value:c("cicChEnabled","Toestemming","Geen toestemming")}):"",...S({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:c("heatingEnableHa","Toestemming","Geen toestemming")})]}),k({key:"cooling-enable",title:"Koeltoestemming",select:{key:"coolingEnableSource",label:"Koeltoestemming bron",haKeys:["coolingEnableHa","coolingEnableHaValid"]},rows:[w({label:"Actieve waarde",value:c("coolingEnableSelected","Actief","Niet actief")}),w({label:"Gebruikte bron",value:m("coolingEnableEffectiveSource")}),w({label:"Handmatig",value:c("manualCoolingEnable","Aan","Uit")}),t?w({label:"CIC",value:c("cicCoolingEnabled","Actief","Normaal")}):"",...S({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:c("coolingEnableHa","Actief","Normaal")})]})].filter(Boolean);return U.length?ne("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${U.join("")}</div>`):""}function Gh(){return ne("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${s(da())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(pa())}</p>
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
                <strong class="oq-settings-quickstart-status-value">${s(Na())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(Ra())}</p>
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
      `)}function Qh(){return ne("Integratie","MQTT","Stel hier de broker in voor de experimentele, compacte publish-only telemetry-export van OpenQuatt.",`
        <div class="oq-settings-quickstart-status" data-oq-mqtt-item="mqtt">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">MQTT-status</p>
              <strong class="oq-settings-quickstart-status-value">${s(va())}</strong>
              <p class="oq-settings-quickstart-status-copy">${s(wa())}</p>
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
      `,'<span class="oq-settings-section-badge oq-settings-section-badge--experimental">Experimenteel</span>')}function Na(){const e=n.apiSecurityStatus;return e?e.pending_restart?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function Ra(){const e=n.apiSecurityStatus;return e?e.pending_restart?e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.":"API-encryptie wordt geladen."}function Yh(){const e=n.settingsBackupBusy,t=Pn.length,o=_t.length;return ne("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${s(String(t))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Secties</span>
              <strong class="oq-settings-backup-stat-value">${s(String(o))}</strong>
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
          ${n.settingsBackupError?`<p class="oq-settings-backup-error">${s(n.settingsBackupError)}</p>`:""}
        </div>
      `)}function Zh(){const e=n.settingsBackupBusy;return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
          ${n.settingsBackupError?`<p class="oq-settings-backup-error">${s(n.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
          </div>
        </section>
      </div>
    `}function Jh(){const e=n.settingsBackupDraft;if(!e)return"";const t=e.summary||Sl(e),o=String(e.source?.installation||e.source?.device||"Onbekend"),r=Nn(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",d=ue(),u=typeof de=="function"?de():"",c=l!=="Onbekend"&&u&&l!==u,p=o!=="Onbekend"&&o!==r,f=c||p?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":t.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              <strong class="oq-helper-modal-value">${s(o)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(l)} \xB7 Firmware: ${s(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(u)} \xB7 Firmware: ${s(d||"Onbekend")}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupkanaal</span>
              <strong class="oq-helper-modal-value">${s(i)}</strong>
              <span class="oq-helper-modal-subvalue">Schema v${s(String(e.schema_version||1))}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupinstellingen</span>
              <strong class="oq-helper-modal-value">${s(`${t.total} instellingen`)}</strong>
              <span class="oq-helper-modal-subvalue">${s(t.differenceCount?`${t.differenceCount} ${t.differenceCount===1?"verschil":"verschillen"} \xB7 ${t.currentPresent} op huidige installatie \xB7 ${t.unknown} onbekend`:`Alles komt overeen \xB7 ${t.currentPresent} op huidige installatie \xB7 ${t.unknown} onbekend`)}</span>
            </div>
          </div>
          <div class="oq-settings-backup-modal-sections">
            ${t.sectionSummaries.map(m=>`
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${s(m.label)}</strong>
                    <em>${s(`${m.total} ${m.total===1?"instelling":"instellingen"} \xB7 ${m.differenceCount?`${m.differenceCount} ${m.differenceCount===1?"verschil":"verschillen"}`:"Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${s(m.differenceCount?`${m.differenceCount} instelling${m.differenceCount===1?"":"en"} wijkt af of ontbreekt.`:"Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${m.rows.map(v=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(v.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(v.label)}</strong>
                          <span>${s(v.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(v.status)}">
                            <span>Backup</span>
                            <strong>${s(v.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(v.status)}">
                            <span>Nu</span>
                            <strong>${s(v.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${t.unknown||t.requiredMissing||p?" oq-settings-action-note--warning":""}">${s(f)}</p>
          ${n.settingsBackupError?`<p class="oq-settings-backup-error">${s(n.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${n.settingsBackupBusy?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${n.settingsBackupBusy?"disabled":""}>${n.settingsBackupBusy?"Herstellen...":"Herstellen"}</button>
          </div>
        </section>
      </div>
    `}function Xh(){const e=Rn(),t=js(),o=n.busyAction==="restartAction";return ne("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          <div class="oq-settings-system-row" data-oq-diagnostics-row="uptime">
            <span class="oq-settings-system-row-label">Uptime</span>
            <strong class="oq-settings-system-row-value">${s(Jr())}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="ip">
            <span class="oq-settings-system-row-label">IP-adres</span>
            <strong class="oq-settings-system-row-value">${s(Xr())}</strong>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="updates">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Updates</p>
              <strong class="oq-settings-system-row-value">${s(e)}</strong>
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
              <strong class="oq-settings-system-row-value">${s(Xg())}</strong>
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
              <strong class="oq-settings-system-row-value">${s(Mo())}</strong>
              <p class="oq-settings-system-row-note">${s(Ea())}</p>
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
            <strong class="oq-settings-system-row-value">${s(t)}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="espTemp">
            <span class="oq-settings-system-row-label">ESP-temp</span>
            <strong class="oq-settings-system-row-value">${s(Js())}</strong>
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
              ${o?"disabled":""}
            >
              ${o?"Herstarten...":"Herstarten"}
            </button>
          </div>
        </div>
      `)}function ef(){const e=[Gi("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),Gi("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return ne("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
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
          <div class="oq-settings-hp-columns${b("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}function tf(){return ne("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",Pa())}function nf(){return Pa("oq-settings-grid oq-settings-grid--modal")}function of(){const e=[J("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),ot("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${_("coolingDemandMax")} max`}),J("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),J("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."),J("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."),J("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),t=b("coolingWithoutDewPointMode"),o=[b("coolingGuardMode")?Z("coolingGuardMode","Actieve beveiligingsroute","Laat zien of koeling nu via dauwpuntmeting, dauwpuntsbenadering of expliciet toestaan wordt begrensd.",W("coolingGuardMode","Onbekend")):"",b("coolingFallbackNightMinOutdoorTemp")?Z("coolingFallbackNightMinOutdoorTemp","Nachtminimum buitentemperatuur","Minimum buitentemperatuur van de afgelopen nacht. Warme nachten maken de dauwpuntsbenadering conservatiever.",W("coolingFallbackNightMinOutdoorTemp","\u2014")):"",b("coolingFallbackMinSupplyTemp")?Z("coolingFallbackMinSupplyTemp","Berekende minimum watertemperatuur","De conservatieve ondergrens die OpenQuatt gebruikt bij de dauwpuntsbenadering. Als die grens door warm weer hoger wordt dan zinvol is, houdt OpenQuatt rekening met de kamertemperatuur.",W("coolingFallbackMinSupplyTemp","\u2014")):"",b("coolingEffectiveMinSupplyTemp")?Z("coolingEffectiveMinSupplyTemp","Actieve minimum ondergrens","De ondergrens die de koeling nu daadwerkelijk gebruikt: dauwpunt plus marge, dauwpuntsbenadering, of de ingestelde minimumgrens bij expliciet toestaan.",W("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean);if(!e.length&&!t&&!o.length)return"";const r={"Dew point required":"Koel alleen als er een betrouwbare dauwpuntmeting beschikbaar is. Zonder dauwpuntmeting blijft koeling geblokkeerd.","Allow without dew point":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use fallback":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use dew point approximation":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, user responsibility":"Sta koeling expliciet toe zonder dauwpuntgrens. Ook een beschikbare dauwpuntmeting wordt dan genegeerd; alleen de ingestelde minimale koel-aanvoer geldt."};return ne("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${e.length?`
          <div class="oq-settings-grid">
            ${e.join("")}
          </div>
        `:""}
        ${t||o.length?`
          <div class="oq-settings-grid">
            ${t?dh("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",r,"oq-settings-field--span-2"):""}
            ${t?`
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
            ${o.join("")}
          </div>
        `:""}
      `)}function uc(){const o={top:22,right:18,bottom:38,left:34},r=560-o.left-o.right,a=240-o.top-o.bottom,i=ce[0].outdoor,l=ce[ce.length-1].outdoor,d=v=>o.left+(v-i)/(l-i)*r,u=v=>o.top+(70-v)/50*a,c=[20,30,40,50,60,70].map(v=>{const q=u(v);return`
          <line x1="${o.left}" y1="${q}" x2="${560-o.right}" y2="${q}" class="oq-helper-curve-grid" />
          <text x="8" y="${q+4}" class="oq-helper-curve-axis-label">${v}\xB0</text>
        `}).join(""),p=ce.map(v=>`
        <text x="${d(v.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(v.label)}</text>
      `).join(""),f=ce.map(v=>`${d(v.outdoor)},${u(we(v.key,T(v.key)))}`).join(" "),m=ce.map(v=>{const q=we(v.key,T(v.key));return`
          <g>
            <circle
              cx="${d(v.outdoor)}"
              cy="${u(q)}"
              r="7"
              class="oq-helper-curve-point ${n.draggingCurveKey===v.key?"is-dragging":""}"
              data-curve-key="${s(v.key)}"
            />
            <text x="${d(v.outdoor)}" y="${u(q)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${q.toFixed(1)}\xB0</text>
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
          ${m}
          ${p}
        </svg>
      </div>
    `}function dc(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${Ji()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${Ji()}
        ${Qe()}
      </section>
    `}function rf(e){const t=String(e||"").trim();if(!t)return"";try{const o=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`http://${t}`);return o.protocol!=="http:"&&o.protocol!=="https:"?"":(o.port||(o.port="8080"),(!o.pathname||o.pathname==="/")&&(o.pathname="/beta/feed/data.json"),o.toString())}catch{return""}}function pc(){const e=String(T("cicFeedUrl")||"").trim(),t=n.quickStartCicFeedUrlDraft===null?e:String(n.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:t,normalizedDraftUrl:rf(t)}}function gc(e,t){return`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${cn("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--text">
            <input
              class="oq-helper-input oq-settings-integration-url-input"
              type="text"
              data-oq-quickstart-cic-url
              value="${s(e.draftUrl)}"
              placeholder="192.168.2.117"
              autocomplete="off"
              spellcheck="false"
              ${t?"disabled":""}
            >
          </label>
          ${e.draftUrl&&!e.normalizedDraftUrl?'<p class="oq-settings-source-warning">Vul een geldig IP-adres, hostname of een geldige HTTP(S)-URL in.</p>':""}
          ${e.normalizedDraftUrl?`<p class="oq-settings-action-note">Wordt ingesteld als ${s(e.normalizedDraftUrl)}</p>`:""}
        </div>
      </article>
    `}function Xi(e){const t=String(e||"").trim().toLowerCase();return t==="heatpump_controller_q"||t.includes("q-edition")||t.includes("controller q")?"heatpump_controller_q":t==="heatpump_listener"||t.includes("listener")?"heatpump_listener":t==="waveshare"||t.includes("waveshare")?"waveshare":""}function mc(){let e=Xi(T("hardwareProfileText")),t=!1;return e||(e=Xi(ut().hardwareProfile)),!e&&b("qFlowSource")?(e="heatpump_controller_q",t=!0):!e&&b("flowSource")&&b("cicPollingEnabled")&&(e="remote",t=!0),{profile:e,inferred:t,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function Fn(){const e=String(T("hpGeneration")||"").trim(),t=mc(),o=e==="V1",{isQEdition:r,isRemoteProfile:a,hardwareKnown:i}=t,l=o&&a,d=r?o?"Local":"Outdoor unit":"",u=l?"CIC":"Outdoor unit",c=String(T("flowSource")||"").trim(),p=String(T("qFlowSource")||"").trim(),f=A("cicPollingEnabled"),m=A("cicJsonFeedOk"),v=A("cicDataStale"),q=pc(),h=c===u&&(!d||p===d),y=l?h&&f&&!!q.configuredUrl:h,w=l?"cicFlowrate":r&&o?"controllerFlow":de()==="duo"?"flowLocal":"hp1Flow",S=M(w),$=Number.isFinite(S),k=A("quickFlowTest");let H=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&y?H=m&&$?S>0?"Geldig":"Bron actief, geen circulatie":v?"Geen actuele CiC-data":m?"Verbonden, wacht op flow":"Verbinding controleren":!l&&y&&(H=$?S>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");const L=l?"CiC JSON-feed":r&&o?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",F=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":r&&o?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:t.hardwareLabel,requiresCic:l,qFlowTarget:d,flowSourceTarget:u,configurationApplied:y,sourceLabel:L,explanation:F,status:H,flowValue:S,flowAvailable:$,flowTestActive:k,canRunFlowTest:y,...q,canApply:i&&b("flowSource")&&(!d||b("qFlowSource"))&&(!l||b("cicPollingEnabled")&&b("cicFeedUrl")&&!!q.normalizedDraftUrl)}}function La(){const e=mc(),{isQEdition:t,isRemoteProfile:o}=e,r=String(T("roomTempSource")||"").trim(),a=String(T("roomSetpointSource")||"").trim(),i=r===a&&["CIC","OT thermostat","HA input"].includes(r)?r:"",l=t?"OT thermostat":n.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),d=pc(),c=r===l&&a===l&&(l!=="OT thermostat"||A("otEnabled"))&&(l!=="CIC"||A("cicPollingEnabled")&&!!d.configuredUrl),p=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],f=M(p[0]),m=M(p[1]),v=Number.isFinite(f)&&Number.isFinite(m),q=l==="OT thermostat"?A("otEnabled")&&!A("otLinkProblem")&&v:l==="CIC"?A("cicJsonFeedOk")&&!A("cicDataStale")&&v:A("roomTempHaValid")&&A("roomSetpointHaValid")&&v;let h=t||o?"Nog activeren":"Hardwareprofiel niet herkend";c&&(h=q?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");const y=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",w=t?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:t,isRemoteProfile:o,selectedSource:l,sourceLabel:y,explanation:w,configurationApplied:c,status:h,roomTempValue:f,roomSetpointValue:m,valuesAvailable:v,...d,canApply:(t||o)&&b("roomTempSource")&&b("roomSetpointSource")&&(l!=="OT thermostat"||b("otEnabled"))&&(l!=="CIC"||b("cicPollingEnabled")&&b("cicFeedUrl")&&!!d.normalizedDraftUrl)}}function af(){const e=Fn(),t=n.busyAction==="quickstart-flow-source"||n.busyAction==="quickstart-flow-refresh",o=n.busyAction==="quickstart-flow-test-start"||n.busyAction==="quickstart-flow-test-abort",r=t||o||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?gc(e,r):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${qe("quickStartFlowSource","Vastgestelde flowbron",e.explanation,`
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${s(e.hardwareLabel)} \xB7 Quatt ${s(e.generation||"onbekend")}</p>
                    <strong class="oq-settings-quickstart-status-value">${s(e.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${s(e.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${a}"><span>Status</span><strong>${s(e.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Actuele flow</span><strong>${s(i)}</strong></div>
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
            ${n.busyAction==="quickstart-flow-source"?"Flowconfiguratie opslaan...":e.configurationApplied?"Flowconfiguratie opnieuw opslaan":e.requiresCic?"CiC-flowconfiguratie opslaan":"Flowconfiguratie activeren"}
          </button>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="refresh-quickstart-flow-signal"
            ${r||!e.configurationApplied?"disabled":""}
          >
            ${n.busyAction==="quickstart-flow-refresh"?"Signaal controleren...":"Signaal opnieuw controleren"}
          </button>
          ${e.canRunFlowTest?`
            <button
              class="oq-helper-button ${e.flowTestActive?"":"oq-helper-button--ghost"}"
              type="button"
              data-oq-action="${e.flowTestActive?"abort-quickstart-flow-test":"start-quickstart-flow-test"}"
              ${t||o?"disabled":""}
            >
              ${o?e.flowTestActive?"Waterpomptest stoppen...":"Waterpomptest starten...":e.flowTestActive?"Waterpomptest stoppen":"Waterpomptest starten (30 sec)"}
            </button>
          `:""}
        </div>
        <p class="oq-settings-action-note">${e.flowTestActive?"Alleen de waterpomp draait op 400 iPWM. Het kan enkele seconden duren voordat de circulatie op gang komt en de flowmeter een waarde toont. De firmware stopt de test automatisch na maximaal 30 seconden.":"0 L/h kan normaal zijn als de circulatiepomp stilstaat. De waterpomptest gebruikt 400 iPWM, start geen compressor en stopt automatisch na 30 seconden."}</p>
        ${Qe({nextDisabled:!e.configurationApplied||e.flowTestActive||o,nextDisabledLabel:o?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function sf(){const e=La(),t=n.busyAction==="quickstart-thermostat-source",o=e.status==="Geldig"?" is-active":"",r=e.isRemoteProfile?`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${cn("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--select">
            <select data-oq-quickstart-thermostat-source ${t?"disabled":""}>
              <option value="CIC" ${e.selectedSource==="CIC"?"selected":""}>CiC JSON-feed</option>
              <option value="HA input" ${e.selectedSource==="HA input"?"selected":""}>Home Assistant</option>
            </select>
          </label>
          <p class="oq-settings-action-note">Deze keuze geldt altijd voor zowel kamertemperatuur als kamer-setpoint.</p>
        </div>
      </article>
    `:"",a=e.selectedSource==="CIC"?gc(e,t):"",i=e.selectedSource==="HA input"?`
      <article class="oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${qe("quickStartThermostatSourceStatus",e.isQEdition?"Vastgestelde thermostaatbron":"Gekozen thermostaatbron",e.explanation,`
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${s(e.hardwareLabel)}</p>
                    <strong class="oq-settings-quickstart-status-value">${s(e.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${s(e.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${o}"><span>Status</span><strong>${s(e.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamertemperatuur</span><strong>${Number.isFinite(e.roomTempValue)?`${e.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamer-setpoint</span><strong>${Number.isFinite(e.roomSetpointValue)?`${e.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                </div>
              </div>
            `,"oq-settings-field--span-2")}
          ${r}
          ${a}
          ${i}
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-quickstart-thermostat-source" ${t||!e.canApply?"disabled":""}>
            ${t?"Thermostaatconfiguratie opslaan...":e.configurationApplied?"Thermostaatconfiguratie opnieuw opslaan":e.selectedSource==="OT thermostat"?"OpenTherm-configuratie activeren":"Thermostaatconfiguratie opslaan"}
          </button>
        </div>
        ${Qe({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function lf(){return!n.quickStartModalOpen||n.loadingEntities||n.complete===null||n.complete&&n.quickStartModalMode!=="generation"?"":n.quickStartModalMode==="generation"?`
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
            ${dc("picker")}
          </section>
        </div>
      `:`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${s(yf().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">\xD7</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${bf()}
            ${qf()}
          </div>
        </section>
      </div>
    `}function hc(){return n.root?n.root.querySelector("[data-oq-quickstart-scroller]"):null}function cf(){const e=hc();return e?{stepId:String(e.dataset.oqQuickstartStep||""),scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Ta(e)}:null}function uf(e){if(!e)return;const t=hc();if(!t||String(t.dataset.oqQuickstartStep||"")!==e.stepId)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const o=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,o)}function es(e,t=!0){if(!e)return;const o=Number(n.quickStartScrollRestoreToken||0)+1;n.quickStartScrollRestoreToken=o;const r=()=>{n.quickStartScrollRestoreToken!==o||!n.quickStartModalOpen||uf(e)};if(t){window.requestAnimationFrame(r);return}r()}function ts(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${oc()}
        ${Xl("oq-settings-grid oq-settings-grid--quickstart")}
        ${Qe()}
      </section>
    `}function df(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${cc("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${Qe()}
      </section>
    `}function pf(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${ec("oq-settings-grid oq-settings-grid--quickstart")}
        ${Qe()}
      </section>
    `}function gf(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(ie()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(ie()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${ie()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${rc()}</div>
            <div class="oq-settings-curve-shell">
              ${uc()}
            </div>
            ${Jl()}
          `:`
            ${tc("oq-settings-grid oq-settings-grid--quickstart")}
            ${ac()}
          `}
        ${Qe()}
      </section>
    `}function mf(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${nc("oq-settings-grid oq-settings-grid--quickstart")}
        ${Qe()}
      </section>
    `}function hf(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${Pa("oq-settings-grid oq-settings-grid--quickstart")}
        ${Qe()}
      </section>
    `}function ff(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Be("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${Sf()}
        ${n.controlNotice?`<p class="oq-helper-notice">${s(n.controlNotice)}</p>`:""}
        ${n.controlError?`<p class="oq-helper-error">${s(n.controlError)}</p>`:""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${n.busyAction?"disabled":""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${n.busyAction?"disabled":""}>
            ${n.busyAction==="apply"?"Afronden...":"Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${n.busyAction?"disabled":""}>
            ${n.busyAction==="reset"?"Resetten...":"Setup-status resetten"}
          </button>
        </div>
      </section>
    `}function bf(){return n.currentStep==="generation"?dc():n.currentStep==="boiler"?b("boilerCvAssistEnabled")?df():ts():n.currentStep==="flow-source"?af():n.currentStep==="thermostat-source"?sf():n.currentStep==="flow"?pf():n.currentStep==="heating"?gf():n.currentStep==="water"?mf():n.currentStep==="silent"?hf():n.currentStep==="confirm"?ff():ts()}function Et(){return ho.filter(e=>!e.optionalEntity||b(e.optionalEntity))}function Be(e){const t=Et().findIndex(o=>o.id===e);return`Stap ${Math.max(0,t)+1}`}function vf(e){const t=Do(),o=e===t,r=n.complete===!0||e<t;return{tone:o?"current":r?"done":"upcoming",label:o?"Actief":r?"Gereed":"Volgend",current:o}}function wf(e=!1){return Et().map((t,o)=>{const r=vf(o);return`
        <button
          class="oq-helper-field oq-helper-field--step${e?" oq-helper-field--compact":""} is-${r.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${s(t.id)}"
          aria-current="${r.current?"step":"false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>${String(o+1).padStart(2,"0")}. ${s(t.title)}</h3>
            <span class="oq-helper-field-step-state">${r.label}</span>
          </div>
          <p>${s(t.copy)}</p>
        </button>
      `}).join("")}function yf(){const e=Et();return e.find(t=>t.id===n.currentStep)||e[0]||ho[0]}function Do(){return Math.max(0,Et().findIndex(e=>e.id===n.currentStep))}function ns(e){const t=Et(),o=Math.min(t.length-1,Math.max(0,Do()+e));n.currentStep=t[o]?.id||ho[0].id}function Qe(e={}){const t=Do(),o=Et(),r=t>0?o[t-1]:null,a=t<o.length-1?o[t+1]:null;return`
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${t+1} van ${o.length}</strong>
          <span>${s(a?`Hierna: ${a.title}`:"Je bent bij de laatste stap")}</span>
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
    `}function qf(){const e=Do(),t=Et();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${t.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${wf(!0)}
        </div>
        ${n.controlNotice?`<p class="oq-helper-notice">${s(n.controlNotice)}</p>`:""}
        ${n.controlError?`<p class="oq-helper-error">${s(n.controlError)}</p>`:""}
      </section>
    `}function Sf(){const e=De(W("hpGeneration")),t=ie()?"Stooklijn":"Power House",o=y=>De(W(y)),r=[],a=ie()?[["Regelprofiel",o("curveControlProfile")],["Aanvoer bij -20\xB0C",_("curveM20")],["Aanvoer bij -10\xB0C",_("curveM10")],["Aanvoer bij 0\xB0C",_("curve0")],["Aanvoer bij 5\xB0C",_("curve5")],["Aanvoer bij 10\xB0C",_("curve10")],["Aanvoer bij 15\xB0C",_("curve15")],["Fallback-aanvoer",_("curveFallbackSupply")]]:[["Profiel",o("phResponseProfile")],["Rated maximum house power",_("housePower")],["Maximum heating outdoor temperature",_("houseOutdoorMax")],["Temperatuurreactie",_("phKp")],["Comfort onder setpoint",_("phComfortBelow")],["Comfort boven setpoint",_("phComfortAbove")]],i=String(T("flowControlMode")||""),l=Fn(),d=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],u=La(),c=[["Status",u.status],["Kamertemperatuur",Number.isFinite(u.roomTempValue)?`${u.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(u.roomSetpointValue)?`${u.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],p=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",_("manualIpwm")]:["Gewenste flow",_("flowSetpoint")]],f=b("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",A("boilerCvAssistEnabled")?"Ja":"Nee"],...A("boilerCvAssistEnabled")?[["Boiler rated heat power",_("boilerRatedHeatPower")]]:[]]:[],m=[["Maximale watertemperatuur",_("maxWater")]],v=[["Start stille uren",mr(T("silentStartTime"))||"\u2014"],["Einde stille uren",mr(T("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",_("silentMax")],["Maximaal niveau overdag",_("dayMax")]],q=y=>`
      <div class="oq-helper-review-list">
        ${y.filter(w=>w&&w[1]).map(([w,S])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(w)}</span>
                <strong class="oq-helper-review-value">${s(S)}</strong>
              </div>
            `).join("")}
      </div>
    `,h=(y,w,S="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(y)}</h3>
        ${S?`<p class="oq-helper-review-summary"><strong>${s(S)}</strong></p>`:""}
        ${q(w)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${h("Quatt Hybrid-versie",r,e)}
        ${h("Flowmeting",d,l.sourceLabel)}
        ${h("Verwarmingsstrategie",a,t)}
        ${h("Watertemperatuur",m)}
        ${h("Thermostaatgegevens",c,u.sourceLabel)}
        ${h("Flowregeling",p)}
        ${f.length?h("CV-ketel / boiler",f):""}
        ${h("Stille uren",v)}
      </div>
    `}function kf({label:e,value:t,tone:o,note:r,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(o)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(t)}</strong>
        <span>${s(r)}</span>
      </article>
    `}function Fo(e,t=!1){return e.map(o=>kf({...o,value:Object.prototype.hasOwnProperty.call(o,"key")?Oe(o.key):o.value,status:t})).join("")}function Oa(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function fc(){const e=Oo();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(be(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(t=>t.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function bc({className:e,title:t,copy:o,body:r,signature:a=""}){const i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${t?`<div class="oq-overview-system-copy"><h3>${s(t)}</h3><p>${s(o)}</p></div>`:""}
        ${r}
      </section>
    `}function vc(e,t){return t?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function Cf(e,t){const o=t?"active":"neutral",r=vc(e,t);return`<span class="oq-overview-chip oq-overview-chip--${s(o)}" data-oq-bind="panel-status">${s(r)}</span>`}function Tf(e){return`
      <span
        class="oq-overview-chip oq-overview-chip--warning"
        data-oq-bind="panel-warning"
        tabindex="0"
        aria-label="${s(`Waarschuwing: ${e}`)}"
      >
        <svg class="oq-overview-chip-warning-icon" viewBox="0 0 20 18" aria-hidden="true">
          <path d="M10 1.6 L18.2 16.4 H1.8 Z" />
          <rect x="9.1" y="5.4" width="1.8" height="5.8" rx="0.9" />
          <circle cx="10" cy="13.6" r="1.1" />
        </svg>
        <span>Waarschuwing</span>
        <span class="oq-overview-chip-warning-tooltip" role="tooltip">${s(e)}</span>
      </span>
    `}function wc(e,t,o,r){return`${o?Tf(r):""}${Cf(e,t)}`}function Ef(e,t,o,r,a){if(!e)return;const i=be({mode:t,running:o,warningActive:r,failureText:a});e.dataset.renderSignature!==i&&(rt(e,wc(t,o,r,a)),e.dataset.renderSignature=i)}function kr(e,t,o=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(o||W(t))}</strong>
      </div>
    `}function $f(e,t,o="blue",r=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(o)}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </article>
    `}function Af(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}function x(e,t,o=""){const r=Number(e);return Number.isNaN(r)?"\u2014":`${r.toFixed(t)}${o?` ${o}`:""}`}function Hf(e){if(!Number.isFinite(e)||e<0)return"\u2014";const t=Math.floor(e),o=Math.floor(t/1440),r=Math.floor(t%1440/60),a=t%60;return o>0?`${o}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function Mf(e){const o=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!o)return Number.NaN;const r=Number(o[1]),a=Number(o[2]);return Number.isNaN(r)||Number.isNaN(a)||r<0||r>23||a<0||a>59?Number.NaN:r*60+a}function Pf(e){const t=Mf(W("timeNowHhmm",""));if(!Number.isFinite(t))return"";const o=Math.round(e),r=((t-o)%1440+1440)%1440,a=Math.floor(r/60),i=r%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Nf(e,t){const o=Math.max(0,(Number(t)-Number(e))/6e4),r=Hf(o),a=b("timeValid")&&A("timeValid")?Pf(o):"";return a?{value:a,note:`${r} geleden`}:{value:`${r} geleden`,note:"Geen tijdsync"}}function Rf(e){const t=Number(e);return Number.isNaN(t)?"\u2014":`${t>0?"+":t<0?"-":""}${Math.abs(t).toFixed(0)} W`}function yc(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>b(e))||""}function Lf(){return["hp1WaterIn","hp2WaterIn"].find(e=>b(e))||""}function qc(e=W("controlModeLabel","")){const t=String(e||"").toLowerCase();return t.includes("cm5")||t.includes("cooling")||t.includes("koeling")}function mt(){return qc()}function Sc(e,t){const o=String(e||"").trim().toLowerCase();return o==="waiting for room request"||o==="wacht op kamervraag"?!0:t?!1:o==="flow too low"||o==="flow te laag"||o==="flow unavailable"}function kc(){return mt()?"Koeling":ie()?"Stooklijn":"Power House"}function Of(){const e=["phouseReq","strategyRequestedPower"];for(const t of e){const o=M(t);if(!Number.isNaN(o))return o}return Number.NaN}function Cc(){const e=Of(),t=M("phouseHouse"),o=M("totalHeat"),r=M("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:e-t;let i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(r)&&e>r+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(o)&&o<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(o)&&o>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(o)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:x(e,0,"W"),houseText:x(t,0,"W"),correctionText:Rf(a),capacityText:Oe("hpCapacity"),statusTitle:i,statusCopy:l}}function Tc(){const e=M("curveSupplyTarget"),t=M("supplyTemp"),o=yc(),r=o?M(o):Number.NaN,a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:t-e,i=!!o&&Number.isNaN(r);let l="Stuurt op buitentemperatuur",d="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",d="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",d="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",d="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",d="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:Oe("curveSupplyTarget"),supplyText:Oe("supplyTemp"),deltaText:Af(a),capacityText:Oe("hpCapacity"),statusTitle:l,statusCopy:d}}function Ec(){const e=M("supplyTemp"),t=W("coolingGuardMode",""),o=W("coolingFallbackNightMinOutdoorTemp","\u2014"),r=M("coolingSupplyError"),a=M("coolingDemandRaw"),i=A("coolingPermitted"),l=A("coolingRequestActive"),d=W("coolingBlockReason","Onbekend"),u=Zl(d),c=Sc(d,l);let p="Wacht op koelvraag",f="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return c?(p="Wacht op koelvraag",f="Koeling staat aan en wacht nog op actieve koelvraag vanuit de kamerregeling."):i?l?!Number.isNaN(a)&&a<=0?(p="Houdt doel vast",f="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(r)&&r>1?(p="Trekt aanvoer omlaag",f="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(r)&&r>.2?(p="Benadert koeldoel",f="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(r)||(p="Koelt rustig door",f="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(p="Koeling gereed",f="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(p="Koeling geblokkeerd",f=`Blokkade: ${u}.`),{targetText:Oe("coolingSupplyTarget"),supplyText:Oe("supplyTemp"),safeFloorText:Oe("coolingEffectiveMinSupplyTemp"),guardMode:t,fallbackNightMin:o,demandText:Oe("coolingDemandRaw"),statusTitle:p,statusCopy:f,permitted:i,requestActive:l,blockReason:u,waitingForRoomRequest:c}}function Cr(){if(mt()){const t=Ec(),o=t.guardMode.toLowerCase(),r=o.includes("user responsibility"),a=o.includes("fallback");return{title:"Koelregeling",copy:r?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:t.targetText,focusCopy:t.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:r?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:t.safeFloorText,tone:"blue",note:r?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${t.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:t.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(ie()){const t=Tc();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:t.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:t.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:t.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}const e=Cc();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function $c(e){return bc({className:"oq-overview-system",title:e.title,copy:e.copy,signature:be(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(t=>$f(t.label,t.value,t.tone,t.note)).join("")}
        </div>
      `})}function Df(){if(!A("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(mt()){const r=Ec(),a=r.waitingForRoomRequest?"neutral":r.permitted?r.statusTitle==="Koelt rustig door"||r.statusTitle==="Houdt temperatuur vast"?"green":r.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:r.statusTitle,tone:a}}if(Vb())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};const t=(ie()?Tc():Cc()).statusTitle;return{label:"Regeling nu",value:t,tone:t==="In balans"||t==="Dicht bij doel"?"green":t==="Nog aan het opbouwen"||t==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function Ff(){return A("openquattEnabled")?mt()?A("coolingPermitted")?A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:W("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:A("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function Ac(e,t){const o=Df(),r=Ff();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:t,tone:"orange",note:"actieve modus"},{label:"Regeling",value:o.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:r.value,tone:"orange",note:"actieve randvoorwaarde"}]}function Hc(e,t){const o=Ac(e,t);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(be(o))}">
        ${Oa("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${Fo(o,!0)}
        </div>
      </section>
    `}function Mc(){const e=mt();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function xf(){const e=A("openquattEnabled"),t=T("openquattResumeAt"),o=ga(t),r=(n.loadingEntities||n.entitySyncInFlight)&&!b("openquattResumeAt"),a=A("manualCoolingEnable"),i=String(T("silentModeOverride")||"Schedule"),l=!A("coolingPermitted"),d=A("coolingRequestActive"),u=qc(),c=W("coolingBlockReason",""),p=Sc(c,d);let f="Uit",m="Koeling staat uit.";a&&u?(f="Actief",m="Koeling draait nu."):a&&p?(f="Aan",m="Koeling staat aan en wacht op koelvraag."):a&&l?(f="Geblokkeerd",m=Zl(c||"Koeling wacht nog op veilige condities.")):a&&d?(f="Start bijna",m="Er is koelvraag. Koeling start zodra dat kan."):a&&(f="Aan",m="Koeling staat aan en wacht op koelvraag.");let v="Uit",q="Stille modus staat uit.",h="neutral";return i==="On"?(v="Aan",q="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",h="orange"):i==="Schedule"&&(v="Schema",A("silentActive")?(q="Stille modus staat nu aan via het tijdvenster.",h="violet"):q="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":o?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[r?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:o?"Hervat automatisch":"Hervatten",value:o?ma(t,!0):"Handmatig",tone:o?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:f,copy:m,buttonLabel:a?"Zet uit":"Zet aan",nextState:a?"off":"on",tone:a?u?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:v,copy:q,tone:h,kind:"select",selectedOption:i,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(y=>b(y.key))}function If(e=[]){return e.length?`
      <div class="oq-overview-controlpanel-meta">
        ${e.map(t=>`
          <div class="oq-overview-controlpanel-meta-item oq-overview-controlpanel-meta-item--${s(t.tone||"neutral")}${t.loading?" oq-overview-controlpanel-meta-item--loading":""}">
            <span>${s(t.label)}</span>
            <strong>${t.loading?`
              <span class="oq-overview-controlpanel-loading">
                <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
                <span>${s(t.value)}</span>
              </span>
            `:s(t.value)}</strong>
          </div>
        `).join("")}
      </div>
    `:""}function Ot({className:e,action:t,label:o,busy:r=!1,loading:a=!1,attrs:i=""}){return`
      <button
        class="${e}${r?" is-busy":""}"
        type="button"
        ${t?`data-oq-action="${s(t)}"`:""}
        ${i}
        ${n.busyAction||a?"disabled":""}
      >${a?`
        <span class="oq-overview-controlpanel-loading">
          <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
          <span>${s(o)}</span>
        </span>
      `:s(r?"Bezig...":o)}</button>
    `}function Wf(e){if(e.kind==="openquatt-control"){const t=n.busyAction==="openquatt-regulation",o=(n.loadingEntities||n.entitySyncInFlight)&&!b("openquattResumeAt");return A("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${Ot({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:t})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${Ot({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:t})}
            ${Ot(o?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:ga()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){const t=n.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(o=>Ot({className:`oq-overview-controlpanel-segment${e.selectedOption===o.value?" is-selected":""}`,action:"select-overview-control-option",label:o.label,busy:t,attrs:`data-control-key="${s(e.key)}" data-control-option="${s(o.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${Ot({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:n.busyAction===`switch-${e.key}`,attrs:`data-control-key="${s(e.key)}" data-control-state="${s(e.nextState)}"`})}
      </div>
    `}function Pc(){const e=xf();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${Oa("Bediening")}
        ${e.map(t=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(t.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(t.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(t.tone)}">${s(t.status)}</strong>
            </div>
            <p>${s(t.copy)}</p>
            ${If(t.meta)}
            ${Wf(t)}
          </article>
        `).join("")}
      </section>
    `:""}function Bf(e){const t=W("controlModeLabel");return`
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
              ${Oa("Kerncijfers")}
              <div class="oq-overview-top">
                ${Fo(Mc())}
              </div>
            </section>
            ${Hc(e,t)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(El())}">
            ${Pc()}
          </aside>
        </div>
      </section>
    `}function Da(){const e=yc(),t=Lf();return mt()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...t?[{label:"Retourtemperatuur",key:t}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function Nc(e=Da()){return be({...e,values:e.rows.map(t=>t.value||W(t.key))})}function Rc(){const e=Da();return bc({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:Nc(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(t=>kr(t.label,t.key,t.value||"")).join("")}
        </div>
      `})}const os=360;function Ye(){const e=Br(n.trendWindowHours||Kt);return e!==n.trendWindowHours&&Vr(e),e}function Lc(e=Ye()){return Math.max(1,Number(e)||24)*60*60*1e3}function Vf(e=Ye()){const t=Number(e)||24;return t>=72&&t%24===0?`${t/24}d`:`${t}u`}function Fa(e=Ye()){const t=Number(e)||24;if(t>=72&&t%24===0){const o=t/24;return`${o} ${o===1?"dag":"dagen"}`}return`${t} uur`}function rr(e){if(!Number.isFinite(e))return"\u2014";const t=new Date(e);if(Number.isNaN(t.getTime()))return"\u2014";const o={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",o).format(t)}catch{return t.toLocaleString("nl-NL",o)}}function jf(e){const t=String(e||"").trim().split("|");if(t.length<5)return null;const o=Number(t[0]);if(!Number.isFinite(o))return null;const r=a=>{const i=Number(a);return Number.isFinite(i)?i:null};return{t:o,outside:r(t[1]),supply:r(t[2]),room:t.length>=8?r(t[3]):null,roomSetpoint:t.length>=8?r(t[4]):null,flow:t.length>=8?r(t[5]):null,input:t.length>=8?r(t[6]):r(t[3]),output:t.length>=8?r(t[7]):r(t[4])}}function Tr(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}function ar(e=Ye()){return typeof window>"u"||!window.__OQ_DEV_TREND_MOCKS__||typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples!="function"?[]:window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(e)}function Oc(){const e=Lc(),t=String(n.trendHistoryRaw||"").trim();if(!t)return Tr()?ar():[];const o=t.split(/\r?\n/).map(jf).filter(Boolean),r=o.length?o[o.length-1].t:Number.NaN,a=Number.isFinite(n.trendHistoryNowMs)?n.trendHistoryNowMs:Number.isFinite(r)?r:Number.NaN;if(!Number.isFinite(a))return o.length?o.slice(-os):ar();const i=Math.max(0,a-e),l=o.filter(d=>d.t>=i).slice(-os);return l.length?l:Tr()?ar(windowHours):[]}function xa(){const e=Ye(),t=Fa(e),o=Oc(),r=Tr()&&o.length===0,a=mt();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${t}.`,tone:"orange",samples:o,mock:r,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${t}.`,tone:"green",samples:o,mock:r,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${t}.`,tone:"slate",samples:o,mock:r,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{const l=Number(i?.input),d=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(d)||l<=0?Number.NaN:d/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${t}.`,tone:"blue",samples:o,mock:r,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${t}.`,tone:"sky",samples:o,mock:r,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function _f(e){const t=e.samples[e.samples.length-1]||null;return be({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:t?.t||0,trendSignature:n.trendHistorySignature||"",latestValues:t?[t.outside,t.supply,t.room,t.roomSetpoint,t.flow,t.input,t.output]:[]})}function kn(e,t){if(!e||!t)return Number.NaN;const o=typeof e.derive=="function"?e.derive(t):t?.[e.sampleKey],r=Number(o);return Number.isFinite(r)?r:Number.NaN}function Kf(e,t){const o=[];return e.forEach(r=>{t.forEach(a=>{const i=kn(a,r);Number.isFinite(i)&&o.push(i)})}),o.length?{min:Math.min(...o),max:Math.max(...o)}:{min:0,max:1}}function Uf(e){if(!Number.isFinite(e)||e<=0)return 1;const t=Math.floor(Math.log10(e)),o=e/10**t;let r;return o<=1?r=1:o<=2?r=2:o<=5?r=5:r=10,r*10**t}function zf(e,t){const o=Number.isFinite(e?.min)?e.min:0,r=Number.isFinite(e?.max)?e.max:1,a=Math.max(r-o,1),i=Array.isArray(t)?t.map(m=>Number(m?.axisMin)).find(m=>Number.isFinite(m)):Number.NaN,l=Array.isArray(t)?t.map(m=>Number(m?.axisMax)).find(m=>Number.isFinite(m)):Number.NaN,d=Array.isArray(t)?t.map(m=>Number(m?.axisTickStep)).find(m=>Number.isFinite(m)&&m>0):Number.NaN,u=Math.max(1,Number.isFinite(d)?d:Uf(a/4)),c=[];if(Number.isFinite(i)||Number.isFinite(l)){const m=Number.isFinite(i)?i:0,v=Number.isFinite(l)?l:Math.ceil(r/u)*u,q=Math.floor(m/u)*u,h=Math.ceil(v/u)*u;for(let y=q;y<=h+u*.5;y+=u)c.push(y)}else{const m=a/u,v=m<=1.8?3:m<=4.25?5:7,q=Math.floor(v/2),h=(o+r)/2,y=Math.round(h/u)*u;for(let w=-q;w<=q;w+=1)c.push(y+w*u)}const p=c[0],f=c[c.length-1];return{ticks:c,axisMin:p,axisMax:f,axisDecimals:0}}function Dc(e,t,o={}){const r=Number(o.windowHours),a=Number.isFinite(r)?r:Ye(),i=Lc(a),l=640,d=220,u=46,c=18,p=18,f=34,m=l-u-c,v=d-p-f,q=e[e.length-1],h=!!o.mockData,y=h?i:Number.isFinite(n.trendHistoryNowMs)?n.trendHistoryNowMs:q?q.t:0,w=h?0:y-i,S=Math.max(y-w,1),$=S,k=Kf(e,t),H=k.min===k.max?{min:k.min-1,max:k.max+1}:{min:k.min-Math.max((k.max-k.min)*.12,1),max:k.max+Math.max((k.max-k.min)*.12,1)},L=zf(k,t),F=R=>u+(R-w)/S*m,U=R=>{if(!Number.isFinite(R))return Number.NaN;const V=(R-H.min)/Math.max(H.max-H.min,1);return p+(1-Math.min(1,Math.max(0,V)))*v},C=[0,.5,1].map(R=>u+m*R),E=L.ticks.map(R=>U(R)),N=L.ticks.map((R,V)=>({x:u-10,y:E[V],text:x(R,L.axisDecimals)})),I=e.map(R=>{const V=F(R.t),P=t.map(D=>{const j=kn(D,R);return Number.isFinite(j)?{seriesId:D.id||D.sampleKey||D.label,tone:D.tone,label:D.label,decimals:D.decimals,unit:D.unit,value:j,x:V,y:U(j)}:null});return{sample:R,x:V,values:P}}),K=t.flatMap(R=>{const V=[];let P=[];return e.forEach(D=>{const j=kn(R,D);if(!Number.isFinite(j)){P.length&&(V.push(P),P=[]);return}P.push({x:F(D.t),y:U(j)})}),P.length&&V.push(P),V.map(D=>D.length<2?{tone:R.tone,points:D,path:""}:{tone:R.tone,points:D,path:D.map((j,Q)=>`${Q===0?"M":"L"} ${j.x.toFixed(1)} ${j.y.toFixed(1)}`).join(" ")})});return{width:l,height:d,left:u,right:c,top:p,bottom:f,plotWidth:m,plotHeight:v,latest:q,uptimeMs:$,endTime:y,startTime:w,span:S,windowHours:a,range:k,displayRange:H,gridXs:C,gridYs:E,yAxisLabels:N,points:I,tracks:K,series:t}}function Ia(){return be({windowHours:Ye(),trendSignature:n.trendHistorySignature||"",trendNowMs:Number.isFinite(n.trendHistoryNowMs)?n.trendHistoryNowMs:0,coolingActive:mt()})}function Gf(e){return xa().find(t=>t.id===e)||null}function Qf(e,t){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let o=0,r=Math.abs(e.points[0].x-t);return e.points.forEach((a,i)=>{const l=Math.abs(a.x-t);l<r&&(o=i,r=l)}),o}function Yf(e,t){const o=Fc(e,t);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(x(o,e.decimals,e.unit))}</strong>
      </div>
    `}function Fc(e,t){if(e?.currentKey&&b(e.currentKey)){const o=M(e.currentKey);if(Number.isFinite(o))return o}return kn(e,t)}function xc(e){e&&xa().forEach(t=>{const o=e.querySelector(`[data-oq-trend-card="${t.id}"]`),r=t.samples[t.samples.length-1]||null;o&&t.series.forEach(a=>{const l=o.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),d=x(Fc(a,r),a.decimals,a.unit);l&&l.textContent!==d&&(l.textContent=d)})})}function Zf(e,t,o=!1,r=Ye()){const a=Dc(e,t,{mockData:o,windowHours:r}),i=Fa(r),l=rr(a.startTime),d=rr(a.startTime+a.span/2),u=rr(a.endTime),c=a.tracks.flatMap(p=>{if(p.points.length<2){const f=p.points[0];return f?`
          <circle
            cx="${f.x.toFixed(1)}"
            cy="${f.y.toFixed(1)}"
            r="3.8"
            class="oq-overview-trend-dot oq-overview-trend-dot--${s(p.tone)}"
          ></circle>
        `:[]}return`
        <path d="${p.path}" class="oq-overview-trend-line oq-overview-trend-line--${s(p.tone)}"></path>
        <circle
          cx="${p.points[p.points.length-1].x.toFixed(1)}"
          cy="${p.points[p.points.length-1].y.toFixed(1)}"
          r="3.8"
          class="oq-overview-trend-dot oq-overview-trend-dot--${s(p.tone)}"
        ></circle>
      `}).join("");return`
      <svg class="oq-overview-trend-chart" viewBox="0 0 ${a.width} ${a.height}" role="img" aria-label="Trendgrafiek van de laatste ${i}">
        <rect x="0" y="0" width="${a.width}" height="${a.height}" rx="20" class="oq-overview-trend-chart-bg"></rect>
        ${a.gridXs.map(p=>`<line x1="${p.toFixed(1)}" y1="${a.top}" x2="${p.toFixed(1)}" y2="${a.height-a.bottom}" class="oq-overview-trend-grid oq-overview-trend-grid--vertical"></line>`).join("")}
        ${a.gridYs.map(p=>`<line x1="${a.left}" y1="${p.toFixed(1)}" x2="${a.width-a.right}" y2="${p.toFixed(1)}" class="oq-overview-trend-grid oq-overview-trend-grid--horizontal"></line>`).join("")}
        ${c}
        ${a.yAxisLabels.map(p=>`
          <text
            x="${p.x}"
            y="${p.y.toFixed(1)}"
            class="oq-overview-trend-axis-label oq-overview-trend-axis-label--y"
            text-anchor="end"
            dominant-baseline="middle"
          >${s(p.text)}</text>
        `).join("")}
        <g class="oq-overview-trend-hover-layer" data-oq-trend-hover-layer hidden>
          <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.height-a.bottom}" class="oq-overview-trend-hover-line"></line>
          ${t.map(p=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${s(p.tone)}"
              data-oq-trend-hover-dot="${s(p.id||p.sampleKey||p.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${s(l)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${s(d)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(u)}</text>
      </svg>
    `}function Jf(e){const t=e.samples[e.samples.length-1]||null,o=Fa(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(_f(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(o)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(r=>Yf(r,t)).join("")}
            </div>
          </div>
        </div>
        ${Zf(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function Wa(){const e=xa();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(Ia())}">
        <div class="oq-overview-trends-grid">
          ${e.map(Jf).join("")}
        </div>
      </section>
    `}function Xf(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function eb(){const e=Ye(),t=Ns();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${no.map(o=>`
          ${(()=>{const a=o>168&&!t,i=o/24,l=a?`Beschikbaar zodra er minimaal ${i} dagen flashhistorie is opgeslagen.`:"";return`
          <button
            class="oq-overview-controlpanel-segment${e===o?" is-selected":""}${a?" is-disabled":""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${o}"
            aria-pressed="${e===o?"true":"false"}"
            aria-disabled="${a?"true":"false"}"
            ${a?"disabled":""}
            ${l?`title="${s(l)}"`:""}
          >${s(Vf(o))}</button>
        `})()}
        `).join("")}
      </div>
    `}function tb(){const e="overview-trends-history",t=n.settingsInfoOpen===e;return`
      <div class="oq-settings-info oq-overview-trends-info${t?" is-open":""}" data-oq-settings-info="${s(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${s(e)}"
          aria-label="${s("Uitleg bij Diagnose")}"
          aria-expanded="${t?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${t?"":"hidden"}>
          <p>${s("De waarden boven de grafieken zijn live. De grafieken bewaren elke 5 minuten een meetpunt, standaard 7 dagen in het werkgeheugen. Met flashopslag blijft historie ook na herstart of OTA beschikbaar, tot 30 dagen terug.")}</p>
        </div>
      </div>
    `}function nb(){const e=rn(),o=Oc().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(n.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${tb()}
          </div>
          <div class="oq-overview-head oq-overview-trends-head">
            <div>
              <p class="oq-helper-label">Diagnose</p>
              <h2 class="oq-helper-section-title">Technische trends</h2>
              <p class="oq-helper-section-copy">Analyseer temperaturen, vermogen, flow en statuslijnen voor troubleshooting.</p>
            </div>
            <div class="oq-overview-trends-meta">
              ${e?`
                <div class="oq-overview-trends-window">
                  <span>Venster</span>
                  ${eb()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&o?Wa():Xf()}
        </div>
      </section>
    `}function ob(){if(!n.root||n.appView!=="diagnosis")return!1;const e=n.root.querySelector(".oq-overview-board");if(!e)return!1;const t=e.querySelector(".oq-overview-trends");return t?(tt(t,Ia(),Wa()),xc(e),Va(e),!0):!1}function Ba(e){if(!e)return null;const t=e.__oqTrendHoverNodes;if(t&&t.chart&&t.hoverLayer&&t.hoverPanel)return t;const o=e.querySelector("[data-oq-trend-hover-layer]"),r={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:o,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:o?o.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return o&&o.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{r.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=r,r}function rs(e,t,o,r=Ba(e)){if(!e||!t||!Array.isArray(t.points)||t.points.length===0)return;const a=Math.max(0,Math.min(t.points.length-1,o)),i=t.points[a];if(!i||!r||!r.chart||!r.hoverLayer||!r.hoverPanel||!r.hoverTime||!r.hoverNote||!r.hoverValues)return;const l=String(a);if(!r.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;const d=Nf(i.sample.t,t.endTime);r.hoverPanel.hidden=!1,r.hoverLayer.removeAttribute("hidden"),r.hoverTime.textContent=d.value,r.hoverNote.textContent=d.note,r.hoverLine&&(r.hoverLine.setAttribute("x1",i.x.toFixed(1)),r.hoverLine.setAttribute("x2",i.x.toFixed(1)));const u=[];t.series.forEach(c=>{const p=kn(c,i.sample),f=c.id||c.sampleKey||c.label,m=r.hoverDots[f];if(!Number.isFinite(p)){m&&m.setAttribute("display","none");return}const v=i.values.find(q=>q.seriesId===f);m&&v&&(m.removeAttribute("display"),m.setAttribute("cx",v.x.toFixed(1)),m.setAttribute("cy",v.y.toFixed(1))),u.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(c.tone)}">
          <span>${s(c.label)}</span>
          <strong>${s(x(p,c.decimals,c.unit))}</strong>
        </div>
      `)}),r.hoverValues.innerHTML=u.join(""),e.dataset.oqTrendHoverIndex=l}function rb(e){if(!e)return;const t=Ba(e);t?.hoverPanel&&(t.hoverPanel.hidden=!0),t?.hoverLayer&&t.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function Va(e=n.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(o=>{const r=o.dataset.renderSignature||"";if(o.__oqTrendBoundSignature===r)return;typeof o.__oqTrendCleanup=="function"&&o.__oqTrendCleanup(),o.__oqTrendHoverNodes=null,o.__oqTrendBoundSignature=r;const a=o.querySelector(".oq-overview-trend-chart");if(!a)return;const i=Gf(o.dataset.oqTrendCard);if(!i)return;const l=Dc(i.samples,i.series,{mockData:i.mock});o.__oqTrendModel=l;const d=Ba(o);let u=0,c=null;const p=()=>{const v=c;c=null,u=0;const q=a.getBoundingClientRect();if(!q.width||!q.height)return;const h=Number(v?.clientX);if(!Number.isFinite(h)){rs(o,l,l.points.length-1,d);return}const w=Math.min(q.width,Math.max(0,h-q.left))/q.width*l.width,S=Qf(l,w);rs(o,l,S,d)},f=v=>{c=v,u||(u=window.requestAnimationFrame(p))},m=()=>{u&&(window.cancelAnimationFrame(u),u=0),c=null,rb(o)};a.addEventListener("pointermove",f),a.addEventListener("pointerenter",f),a.addEventListener("pointerleave",m),a.addEventListener("focus",f),a.addEventListener("blur",m),a.addEventListener("touchstart",f,{passive:!0}),o.__oqTrendCleanup=()=>{u&&(window.cancelAnimationFrame(u),u=0),c=null,a.removeEventListener("pointermove",f),a.removeEventListener("pointerenter",f),a.removeEventListener("pointerleave",m),a.removeEventListener("focus",f),a.removeEventListener("blur",m),a.removeEventListener("touchstart",f)}})}function ab([e,t]){const o=Nl(t);if(!b(t)&&Number.isNaN(o))return"";const r=Pl(t)?Oe(t):W(t);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(r)}</strong>
      </div>
    `}function ib(e){const t=e.rows.map(ab).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${t}
        </div>
      </section>
    `:""}function sb(e){const t=e.groups.map(ib).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${t}
        </div>
      </section>
    `:""}function lb(e){const t=e.categories.map(sb).filter(Boolean).join("");return t?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${t}
        </div>
      </article>
    `:""}function ja(){const e=xu.map(lb).filter(Boolean),t=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:t}}function Ic(e=ja()){return be(e)}function Wc(e=ja()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(Ic(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}const xo=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],Bc=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],cb=new Set(["day","week","month","year"]),ub=["Zo","Ma","Di","Wo","Do","Vr","Za"];function Ee(e){const t=String(e||"").trim();return Bc.some(o=>o.id===t)?t:"day"}function as(e){const t=Ee(e);n.energyHistoryView!==t&&(n.energyHistoryView=t,g())}function xn(e){return cb.has(Ee(e))}function Io(){const e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function _a(){const e=String(n.energyHistoryRaw||"");let t=null;return e.split(/\r?\n/).forEach(o=>{const r=Gc(o);r&&(t=r.dateKey)}),t}function db(e=[],t=!0){const o=_a(),r=(Array.isArray(e)?e:[]).map(a=>Number(a?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(o))&&r.push(Number(o)),t&&Ua().forEach(a=>{const i=Number(a?.dateKey);Number.isFinite(i)&&r.push(i)}),r.length?Math.max(...r):Io()}function Ie(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Vc(e,t,o){return new Date(e,t-1,o,12,0,0)}function pb(e,t){return new Date(e,t,0).getDate()}function is(e){return String(e).padStart(2,"0")}function ir(e){const t=X(e);return t?`${t.year}-${is(t.month)}-${is(t.day)}`:""}function jc(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!t)return null;const o=Number(t[1]),r=Number(t[2]),a=Number(t[3]),i=Vc(o,r,a);return i.getFullYear()!==o||i.getMonth()+1!==r||i.getDate()!==a?null:X(Ie(i))}function _c(e,t){return Number(e)*100+Number(t)}function Er(e){return _c(e.getFullYear(),e.getMonth()+1)}function Cn(e){const t=Number(e);if(!Number.isFinite(t)||t<=0)return null;const o=Math.floor(t/100),r=t%100;return o<2020||r<1||r>12?null:{key:t,year:o,month:r,date:new Date(o,r-1,1,12,0,0)}}function gb(e){const t=String(e||"").trim(),o=/^(\d{4})-(\d{2})$/.exec(t);return Cn(o?_c(Number(o[1]),Number(o[2])):t)}function Kc(e,t){const o=Cn(e);if(!o)return"";const r=new Date(o.year,o.month-1+Number(t||0),1,12,0,0);return String(Er(r))}function Wo(e){const t=new Date(e.getTime()),o=t.getDay(),r=o===0?-6:1-o;return t.setDate(t.getDate()+r),t.setHours(12,0,0,0),t}function Tn(e,t){const o=new Date(e.getTime());return o.setDate(o.getDate()+t),o.setHours(12,0,0,0),o}function ss(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function Uc(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),o=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-o+3);const r=t.getUTCFullYear(),a=new Date(Date.UTC(r,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((t-a)/(10080*60*1e3)),year:r}}function ls(e){return Ie(Wo(e))}function mb(e){const o=jc(e)||X(e);if(!o)return null;const r=Wo(o.date);return X(Ie(r))}function zc(e){const t=X(e);if(!t)return"Week";const o=Wo(t.date),r=Tn(o,6);return`Week ${Uc(o).week} (${ss(o)} - ${ss(r)})`}function X(e){const t=Number(e);if(!Number.isFinite(t)||t<=0)return null;const o=Math.floor(t/1e4),r=Math.floor(t/100)%100,a=t%100;return o<2020||r<1||r>12||a<1||a>31?null:{key:t,year:o,month:r,day:a,date:new Date(o,r-1,a,12,0,0)}}function qt(e,t="day"){const o=X(e);return o?t==="weekday"?ub[o.date.getDay()]||"":t==="month"?o.date.toLocaleDateString("nl-NL",{month:"short"}):t==="year"?String(o.year):o.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function ft(e){const t=M(e);return!Number.isFinite(t)||t<0?null:Math.round(t*1e3)}function hb(e){const t=Number(e);return Number.isFinite(t)&&t>=0?t:null}function Ka(e,t=0){const o={};return xo.forEach((r,a)=>{o[r]=hb(e[t+a])}),o}function fb(e){const t=String(e||"").trim();if(!t||t.startsWith("@"))return null;const o=t.split("|");if(o.length<10)return null;const r=Number(o[0]),a=Number(o[1]),i=Number(o[2]),l=X(a);return!Number.isFinite(r)||!l?null:{sequence:r,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...Ka(o,3)}}function Gc(e){const t=String(e||"").trim();if(!t.startsWith("@current|"))return null;const o=t.split("|");if(o.length<9)return null;const r=Number(o[1]),a=X(r);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:r,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...Ka(o,2)}:null}function bb(e){const t=String(e||"").trim();if(!t.startsWith("@hour|"))return null;const o=t.split("|");if(o.length<11)return null;const r=Number(o[1]),a=Number(o[2]),i=Number(o[3]),l=X(a);return!Number.isFinite(r)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:r,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...Ka(o,4)}}function vb(){const e=_a()||Io(),t=X(e);if(!t)return null;const o={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:t.year,month:t.month,day:t.day,partial:!0,source:"sensors",electricalInputWh:ft("electricalEnergyDaily"),heatingInputWh:ft("heatingElectricalEnergyDaily"),coolingInputWh:ft("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:ft("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:ft("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:ft("boilerThermalEnergyDaily"),systemHeatOutputWh:ft("systemThermalEnergyDaily")};return xo.some(r=>Number.isFinite(o[r]))?o:null}function In(e,t){const o=Number(e?.[t]);return Number.isFinite(o)&&o>=0?o:0}function Bo(){const e=new Map;String(n.energyHistoryRaw||"").split(/\r?\n/).forEach(r=>{const a=fb(r)||Gc(r);if(!a)return;const i=e.get(a.dateKey);(!i||a.sequence>=i.sequence)&&e.set(a.dateKey,a)});const o=vb();return o&&e.set(o.dateKey,o),[...e.values()].sort((r,a)=>r.dateKey-a.dateKey)}function Ua(){const e=new Map;return String(n.energyHistoryRaw||"").split(/\r?\n/).forEach(o=>{const r=bb(o);if(!r)return;const a=`${r.dateKey}:${r.hour}`,i=e.get(a);(!i||r.sequence>=i.sequence)&&e.set(a,r)}),[...e.values()].sort((o,r)=>o.sortKey-r.sortKey)}function wb(e){return Ua().filter(t=>t.dateKey===Number(e))}function Dt(e,t){return e.reduce((o,r)=>o+In(r,t),0)}function Qc(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((t,o)=>t+In(e,o),0)}function yb(e){return In(e,"electricalInputWh")+Qc(e)}function Xn(e,t){const o=Number(e),r=Number(t);return!Number.isFinite(o)||!Number.isFinite(r)||r<=0?"\u2014":(o/r).toFixed(2)}function Te(e,t=1){const o=Number(e);return Number.isFinite(o)?Math.abs(o)>=999500?`${(o/1e6).toFixed(2)} MWh`:Math.abs(o)<1e3?`${Math.round(o)} Wh`:`${(o/1e3).toFixed(t)} kWh`:"\u2014"}function Ft({dateKey:e,year:t,month:o,day:r,hour:a=null,label:i,tooltipLabel:l="",sortKey:d,source:u="bucket"}){return{sequence:0,dateKey:e,year:t,month:o,day:r,hour:a,label:i,tooltipLabel:l,sortKey:d??e,partial:!1,source:u,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function xt(e,t){return xo.forEach(o=>{e[o]+=In(t,o)}),e.partial=e.partial||!!t?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(t?.sequence||0)),e}function qb(e){const t=new Map;return e.forEach(o=>{t.set(o.dateKey,o)}),t}function Yc(e,t){const o=Ee(e);if(o==="day"){const r=jc(t)||X(t);return r?String(r.key):""}if(o==="week"){const r=mb(t);return r?String(r.key):""}if(o==="month"){const r=gb(t);return r?String(r.key):""}if(o==="year"){const r=Number(t);return Number.isInteger(r)&&r>=2020&&r<=2200?String(r):""}return""}function Vo(e,t){const o=Ee(t),r=X(db(e,!0)),a=Ua(),i=[...e.map(m=>m.dateKey),...a.map(m=>m.dateKey)].filter(m=>Number.isFinite(Number(m))),l=i.length?Math.min(...i.map(Number)):r?.key,u=(l?X(l):r)?.date||r?.date||new Date,c=r?.date||new Date;let p=r?.key||Io(),f=p;return o==="week"?(p=ls(u),f=ls(c)):o==="month"?(p=Er(u),f=Er(c)):o==="year"?(p=u.getFullYear(),f=c.getFullYear()):(p=Ie(u),f=Ie(c)),Number(p)>Number(f)&&(p=f),{min:String(p),max:String(f)}}function Zc(e,t){const o=Number(e);return Number.isFinite(o)?o<Number(t.min)?String(t.min):o>Number(t.max)?String(t.max):String(e):String(t.max)}function Sb(e,t,o=Vo(e,t)){const r=Ee(t),a=n.energyHistoryPeriodSelection?.[r],i=Yc(r,a);return Zc(i||o.max,o)}function kb(e,t){const o=Ee(e),r=[];let a=0;if(o==="week"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<6e3;){const l=X(i);r.push({value:i,label:zc(i),group:l?String(Uc(l.date).year):""}),i=l?String(Ie(Tn(l.date,-7))):"",a+=1}return r}if(o==="month"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<1200;){const l=Cn(i);if(!l)break;r.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=Kc(i,-1),a+=1}return r}if(o==="year")for(let i=Number(t.max);i>=Number(t.min);i-=1)r.push({value:String(i),label:String(i)});return r}function za(e,t){const o=Ee(t);if(!xn(o))return{view:o,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};const r=Vo(e,o),a=Sb(e,o,r);return{view:o,selectedValue:a,minValue:r.min,maxValue:r.max,canPrevious:Number(a)>Number(r.min),canNext:Number(a)<Number(r.max),isNow:Number(a)===Number(r.max),options:kb(o,r)}}function go(e,t){const o=Ee(e);if(!xn(o))return;const r=Bo(),a=Vo(r,o),i=Yc(o,t),l=Zc(i||a.max,a);n.energyHistoryPeriodSelection={...n.energyHistoryPeriodSelection,[o]:l},g()}function cs(e,t){const o=Ee(e);if(!xn(o))return;const r=Bo(),a=za(r,o),i=Number(t)<0?-1:1;let l=a.selectedValue;if(o==="day"){const d=X(a.selectedValue);l=d?String(Ie(Tn(d.date,i))):l}else if(o==="week"){const d=X(a.selectedValue);l=d?String(Ie(Tn(d.date,i*7))):l}else o==="month"?l=Kc(a.selectedValue,i):o==="year"&&(l=String(Number(a.selectedValue)+i));go(o,l)}function us(e){const t=Ee(e);if(!xn(t))return;const o=Bo(),r=Vo(o,t);go(t,r.max)}function Cb(e,t,o=za(e,t)){const r=Ee(t),a=qb(e);if(!e.length&&r==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(r==="day"){const d=X(o.selectedValue);if(!d)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const u=wb(d.key);if(u.length){const v=new Map(u.map(h=>[h.hour,h])),q=[];for(let h=0;h<24;h+=1){const y=String(h),w=`${d.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(h).padStart(2,"0")}:00 - ${String((h+1)%24).padStart(2,"0")}:00`,S=Ft({dateKey:d.key,year:d.year,month:d.month,day:d.day,hour:h,label:y,tooltipLabel:w,sortKey:h,source:"hour"}),$=v.get(h);$&&xt(S,$),q.push(S)}return{buckets:q,title:"Dag",detail:`${d.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}const c=a.get(d.key),p=_a()||Io(),f=d.key===p?"Vandaag":qt(d.key),m=Ft({dateKey:d.key,year:d.year,month:d.month,day:d.day,label:f,sortKey:d.key,source:"day"});return c&&xt(m,c),{buckets:[m],title:"Dag",detail:`${d.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(r==="week"){const d=X(o.selectedValue);if(!d)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const u=Wo(d.date),c=[];for(let p=0;p<7;p+=1){const f=Tn(u,p),m=Ie(f),v=X(m),q=Ft({dateKey:m,year:v.year,month:v.month,day:v.day,label:qt(m,"weekday"),sortKey:m}),h=a.get(m);h&&xt(q,h),c.push(q)}return{buckets:c,title:"Week",detail:zc(o.selectedValue)}}if(r==="month"){const d=Cn(o.selectedValue);if(!d)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const u=pb(d.year,d.month),c=[];for(let p=1;p<=u;p+=1){const f=Vc(d.year,d.month,p),m=Ie(f),v=Ft({dateKey:m,year:d.year,month:d.month,day:p,label:String(p),sortKey:m}),q=a.get(m);q&&xt(v,q),c.push(v)}return{buckets:c,title:"Maand",detail:d.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(r==="year"){const d=Number(o.selectedValue);if(!Number.isInteger(d))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const u=[];for(let c=1;c<=12;c+=1){const p=d*1e4+c*100+1,f=Ft({dateKey:p,year:d,month:c,day:1,label:qt(p,"month"),sortKey:c,source:"month"});e.filter(m=>m.year===d&&m.month===c).forEach(m=>xt(f,m)),u.push(f)}return{buckets:u,title:"Jaar",detail:String(d)}}const i=new Map;e.forEach(d=>{i.has(d.year)||i.set(d.year,Ft({dateKey:d.year*1e4+101,year:d.year,month:1,day:1,label:String(d.year),sortKey:d.year,source:"year"})),xt(i.get(d.year),d)});const l=[...i.values()].sort((d,u)=>d.sortKey-u.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function Tb(e){const t=Dt(e,"heatpumpHeatOutputWh"),o=Dt(e,"heatpumpCoolingOutputWh"),r=Dt(e,"boilerHeatOutputWh");return{electricalInputWh:Dt(e,"electricalInputWh"),heatingInputWh:Dt(e,"heatingInputWh"),coolingInputWh:Dt(e,"coolingInputWh"),heatOutputWh:t,coolingOutputWh:o,boilerOutputWh:r,outputWh:t+o+r}}function Eb(e){const t=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),o=Number(e.boilerOutputWh||0),r=t+o;return!Number.isFinite(r)||r<=0?Number.NaN:t/r*100}function zn(e,t,o=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${o?`<p>${s(o)}</p>`:""}
      </div>
    `}function sr(e,t,o){const r=[];o.forEach(i=>{const l=String(i.group||"");let d=r[r.length-1];(!d||d.label!==l)&&(d={label:l,options:[]},r.push(d)),d.options.push(i)});const a=r.some(i=>i.label)?r.map(i=>i.label?`
          <optgroup label="${s(i.label)}">
            ${i.options.map(l=>`
              <option value="${s(l.value)}" ${String(l.value)===String(e.selectedValue)?"selected":""}>
                ${s(l.label)}
              </option>
            `).join("")}
          </optgroup>
        `:i.options.map(l=>`
          <option value="${s(l.value)}" ${String(l.value)===String(e.selectedValue)?"selected":""}>
            ${s(l.label)}
          </option>
        `).join("")).join(""):o.map(i=>`
        <option value="${s(i.value)}" ${String(i.value)===String(e.selectedValue)?"selected":""}>
          ${s(i.label)}
        </option>
      `).join("");return`
      <label class="oq-energy-history-period-field">
        <span>${s(t)}</span>
        <select
          class="oq-energy-history-period-input"
          data-oq-energy-history-period-input="${s(e.view)}"
        >
          ${a}
        </select>
      </label>
    `}function ds(e){return e.view==="day"?`
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${s(ir(e.selectedValue))}"
            min="${s(ir(e.minValue))}"
            max="${s(ir(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?sr(e,"Week",e.options):e.view==="month"?sr(e,"Maand",e.options):e.view==="year"?sr(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function $b(e){return xn(e.view)?`
      <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
        ${ds(e)}
        <div class="oq-energy-history-period-nav" aria-label="Periode navigatie">
          <button
            type="button"
            class="oq-energy-history-period-button"
            data-oq-action="shift-energy-history-period"
            data-energy-history-direction="-1"
            ${e.canPrevious?"":"disabled"}
          >&lt; Vorige</button>
          <button
            type="button"
            class="oq-energy-history-period-button oq-energy-history-period-button--now"
            data-oq-action="select-energy-history-now"
            ${e.isNow?"disabled":""}
          >Nu</button>
          <button
            type="button"
            class="oq-energy-history-period-button"
            data-oq-action="shift-energy-history-period"
            data-energy-history-direction="1"
            ${e.canNext?"":"disabled"}
          >Volgende &gt;</button>
        </div>
      </div>
    `:`
        <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
          ${ds(e)}
        </div>
      `}function Ab(){const e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function Hb(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${Bc.map(t=>{const o=t.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${o?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(t.id)}"
              aria-selected="${o?"true":"false"}"
            >${s(t.label)}</button>
          `}).join("")}
      </div>
    `}function Mb(e){const t=Number(e.electricalInputWh||0),o=Number(e.heatOutputWh||0),r=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,t+o+r+a),d=c=>`${Math.max(0,Number(c||0)/l*100).toFixed(2)}%`,u=Eb(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${d(t)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${d(o)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${d(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${d(a)}"></span>
          <strong>${Number.isFinite(u)?`${Math.round(u)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s(Te(o,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s(Te(t,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s(Te(r,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s(Te(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function Pb(e){const t=Math.max(1,Number(e||0)/1e3),o=Math.pow(10,Math.floor(Math.log10(t))),r=t/o;return(r<=1.5?1.5:r<=3?3:r<=6?6:10)*o*1e3}function Nb(e){const t=Number(e);return Number.isFinite(t)?t>=999500?`${Number((t/1e6).toFixed(1))}`:`${Number((t/1e3).toFixed(1))}`:""}function Rb(e){return e>=999500?"MWh":"kWh"}function Lb(e){const c=Math.max(1e3,...e.map(yb)),p=Pb(c),f=e.length?1218/e.length:1218,m=Math.max(6,Math.min(38,f*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:p,barSlot:f,barWidth:m,yOf:q=>26+(1-Math.min(1,Math.max(0,Number(q||0)/p)))*196}}function Ob(e){const t=Xn(e.heatpumpHeatOutputWh,e.heatingInputWh),o=Xn(e.heatpumpCoolingOutputWh,e.coolingInputWh),r=Xn(Qc(e),e.electricalInputWh);return[e.tooltipLabel||e.label||qt(e.dateKey),`Elektrisch: ${Te(e.electricalInputWh,1)}`,`Warmtepomp warmte: ${Te(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${Te(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel: ${Te(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${t}`,`EER koelen: ${o}`,`Output / elektrisch: ${r}`].join(`
`)}function Db(e){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;const t=Lb(e),o=Rb(t.axisMax),r=[0,.25,.5,.75,1].map(i=>t.axisMax*i),a=e.map((i,l)=>{const d=t.left+t.barSlot*l+t.barSlot/2,u=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}];let c=t.height-t.bottom;const p=u.map(q=>{const h=In(i,q.key);if(h<=0)return"";const y=h/t.axisMax*t.plotHeight;return c-=y,`
          <rect
            x="${(d-t.barWidth/2).toFixed(1)}"
            y="${c.toFixed(1)}"
            width="${t.barWidth.toFixed(1)}"
            height="${Math.max(1.4,y).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${q.className}"
          >
            <title>${s(`${i.label} \xB7 ${q.label}: ${Te(h,1)}`)}</title>
          </rect>
        `}).join(""),m=e.length<=12||l===0||l===e.length-1||l%3===0?`<text x="${d.toFixed(1)}" y="${t.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(i.label||qt(i.dateKey))}</text>`:"",v=Ob(i);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(v)}" tabindex="0">
          <title>${s(v)}</title>
          <rect
            x="${(d-t.barWidth/2-4).toFixed(1)}"
            y="${t.top.toFixed(1)}"
            width="${(t.barWidth+8).toFixed(1)}"
            height="${t.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${p}
        </g>
        ${m}
      `}).join("");return`
      <svg class="oq-energy-history-chart" viewBox="0 0 ${t.width} ${t.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${t.width}" height="${t.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${t.left}" y="18" class="oq-energy-history-axis-unit">${s(o)}</text>
        ${r.map(i=>{const l=t.yOf(i);return`
            <line x1="${t.left}" y1="${l.toFixed(1)}" x2="${t.width-t.right}" y2="${l.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${t.left-10}" y="${l.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(Nb(i))}</text>
          `}).join("")}
        ${a}
      </svg>
    `}function Fb(e=null){const t=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[t,"Ketel"]].map(([r,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(r)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function Ga(){const e=Bo(),t=Ee(n.energyHistoryView),o=za(e,t),r=Cb(e,t,o),a=Tb(r.buckets);return{records:e,buckets:r.buckets,viewModel:r,periodControl:o,summary:a,activeView:t}}function Jc(e=Ga()){return be({energyHistorySignature:n.energyHistorySignature||"",energyHistoryError:n.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,currentValues:xo.map(t=>e.buckets[e.buckets.length-1]?.[t]??null)})}function Xc(e=Ga()){const t=e.summary,o=e.buckets[0]?.dateKey?qt(e.buckets[0].dateKey):"\u2014",r=e.buckets[e.buckets.length-1]?.dateKey?qt(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(Jc(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${Hb(e.activeView)}
          ${$b(e.periodControl)}
        </div>
        ${n.energyHistoryError?`<p class="oq-energy-history-error">${s(n.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${zn("Gemiddelde COP",Xn(t.heatOutputWh,t.heatingInputWh),`${s(o)} - ${s(r)}`)}
          ${zn("Elektrisch",Te(t.electricalInputWh,1),"verbruikt")}
          ${zn("Warmtepomp",Te(t.heatOutputWh+t.coolingOutputWh,1),"warmte en koeling")}
          ${zn("Cv-ketel",Te(t.boilerOutputWh,1),"thermisch")}
        </div>
        ${Mb(t)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${Db(e.buckets)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${Fb(t)}
      </section>
    `}function ps(e){if(n.appView!=="results"||!n.root)return;const t=e.target.closest?.("[data-oq-energy-history-tip]"),o=t?.closest?.(".oq-energy-history-chart-wrap")||n.root.querySelector(".oq-energy-history-chart-wrap"),r=o?.querySelector(".oq-energy-history-tooltip");if(!t||!o||!r){r&&r.classList.remove("is-visible");return}const a=String(t.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){r.classList.remove("is-visible");return}r.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(c=>`<span>${s(c)}</span>`).join("")}
    `;const i=o.getBoundingClientRect();r.classList.add("is-visible");const l=r.getBoundingClientRect(),d=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),u=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));r.style.transform=`translate(${d.toFixed(0)}px, ${u.toFixed(0)}px)`}function xb(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(n.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${Wc()}
        </div>
      </section>
    `}function Ib(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(n.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${Xc()}
        </div>
      </section>
    `}function Wb(){if(!n.root||n.appView!=="energy")return!1;const e=n.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-overview-energy"):null;if(!e||!t)return!1;const o=`oq-overview-board oq-overview-board--${n.overviewTheme}`;e.className!==o&&(e.className=o);const r=ja();return tt(t,Ic(r),Wc(r))}function Bb(){if(!n.root||n.appView!=="results")return!1;const e=n.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-energy-history"):null;if(!e||!t)return!1;const o=`oq-overview-board oq-overview-board--${n.overviewTheme}`;e.className!==o&&(e.className=o);const r=Ga(),a=Ab();return(a?!1:tt(t,Jc(r),Xc(r)))||a}function Qa(e,t,o){const r=nu(W(t.mode,"Unknown")),a=A(t.defrost),i=En(W(t.failures,"None")),l=ic(i),d=r==="Verwarmen"||r==="Koelen"||a;return{mode:r,defrostActive:a,failures:i,warningFailures:l,running:d,thermalKey:r==="Koelen"?t.cooling:t.heat,schematic:Yb(e,t,o,r,a,l,d)}}function eu(e,t=null){return`<h3>${s(e)}</h3>${t?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(t.layout)}">${nv(t.layout==="equal"?"minus":"plus")}<span>${s(t.label)}</span></button>`:""}`}function $r(e,t,o,r){return`<div class="oq-overview-hp-status">${wc(e,t,o,r)}</div>`}function Vb(){return W("controlModeLabel","").toLowerCase().includes("standby")}function jb(e,t){return t?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function tu(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(t=>`${t.title} ${jb(nu(W(t.keys.mode,"Unknown")),A(t.keys.defrost))}`).join(", "))}</p>`}function _b(e){const t=n.entities[e];if(!t)return"Positie: \xE2\u20AC\u201D";const o=M(e);return Number.isNaN(o)?`Positie: ${W(e)}`:`Positie: ${x(o,0,t.uom||"")}`}function Kb(e){return b(e)?`Positie: ${A(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \xE2\u20AC\u201D"}function nu(e){const t=String(e||"").trim();return!t||t==="Unknown"?"Onbekend":t==="Standby"?"Stand-by":t==="Heating"?"Verwarmen":t==="Cooling"?"Koelen":t}function En(e){const t=String(e||"").trim();return!t||t==="None"?"Geen actieve storingen":t}function Ar(e,t,o,r=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(t)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(o)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(o)}" />
        ${r?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(o)}" />`:""}
      </g>
    `}function Ub(e,t,o){return e==="temperature"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${t-10}"
          y="${o-10}"
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
          x="${t-10}"
          y="${o-10}"
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
          x="${t-10}"
          y="${o-10}"
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
          x="${t-10}"
          y="${o-10}"
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
          x="${t-10}"
          y="${o-10}"
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
          x="${t-10}"
          y="${o-10}"
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
          x="${t-10}"
          y="${o-10}"
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
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${t-10} ${o-10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `}function $n({bind:e,modifier:t,x:o,y:r,width:a,kicker:i,detail:l,detailBind:d="",icon:u="heater",direction:c="down"}){const f=o+26,m=r+22,v=d?` data-oq-bind="${s(d)}"`:"";let q="";if(c==="up"){const h=o+Math.round(a*.52);q=`M${h-6} ${r} L${h} ${r-8} L${h+6} ${r} Z`}else if(c==="left"){const h=r+Math.round(22);q=`M${o} ${h-6} L${o-8} ${h} L${o} ${h+6} Z`}else if(c==="right"){const h=r+Math.round(22);q=`M${o+a} ${h-6} L${o+a+8} ${h} L${o+a} ${h+6} Z`}else{const h=o+Math.round(a*.52);q=`M${h-6} ${r+44} L${h} ${r+44+8} L${h+6} ${r+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(t)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${o}" y="${r}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${f}" cy="${m}" r="11.5" />
        ${Ub(u,f,m)}
        <text class="oq-hp-tech-tooltip-kicker" x="${o+48}" y="${r+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${o+48}" y="${r+32}"${v}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${q}" />
      </g>
    `}function Hr({bind:e,x:t,y:o,width:r,value:a,label:i,ariaLabel:l="",align:d="start"}){const u=l||`${i} temperatuur ${a}`,c=d==="end",p=d==="center",f=p?"middle":c?"end":"start",m=p?t+r/2:c?t+r-2:t+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(u)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${t}" y="${o}" width="${r}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${m}" y="${o+13}" text-anchor="${f}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function zb({tooltip:e,...t}){return`${Hr(t)}${$n({bind:t.bind,...e})}`}function Gb({bind:e,ariaLabel:t,x:o,y:r,width:a,height:i,rx:l,tooltip:d}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(t)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${o}" y="${r}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${$n({bind:e,...d})}
    `}function lr({bind:e,className:t,active:o,ariaLabel:r,attrs:a="",activeClass:i="is-active",content:l,tooltip:d}){return`
      <g class="${[t,o&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${o?"0":"-1"}" aria-label="${s(r)}" ${a}>
        ${l}
      </g>
      ${$n({bind:e,...d})}
    `}function Qb({label:e,value:t,bind:o,ariaLabel:r="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${r?` aria-label="${s(r)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(t)}</strong>
      </div>
    `}function _e(e,t,o=""){const r=M(e);return Number.isNaN(r)?W(e):x(r,t,fn(e,o))}function Yb(e,t,o,r,a,i,l){const d=M(t.freq),u=Number.isNaN(d)?"\u2014":String(Math.round(d)),c=M(t.power),p=M(t.heat),f=M(t.cooling),m=M(t.flow),v=r==="Koelen"?f:p,q=l||!Number.isNaN(d)&&d>0||!Number.isNaN(c)&&c>80||!Number.isNaN(p)&&p>150,h=!Number.isNaN(m)&&m>0,y=vc(r,q),w=i==="Geen actieve storingen"?"Geen storingen":i,S=w!=="Geen storingen",$=a?"Actief":"Uit",k=_e(t.waterOut,1,"\xB0C"),H=_e(t.waterIn,1,"\xB0C"),L=Number.isNaN(m)?W(t.flow):x(m,0,fn(t.flow,"L/h")),F=_e(t.evaporatorCoilTemp,1,"\xB0C"),U=_e(t.innerCoilTemp,1,"\xB0C"),C=_e(t.outsideTemp,1,"\xB0C"),E=_e(t.condenserPressure,1,"bar"),N=_e(t.dischargeTemp,1,"\xB0C"),I=_e(t.evaporatorPressure,1,"bar"),K=_e(t.returnTemp,1,"\xB0C"),R=A(t.bottomPlate),V=A(t.crankcase),P=_b(t.eev),D=Kb(t.fourWay),j=x(c,0,"W"),Q=x(v,0,"W"),ge=r==="Koelen"?!Number.isNaN(c)&&c>=5&&!Number.isNaN(f)?f/c:Number.NaN:M(t.cop),se=x(ge,1),Y=r==="Koelen"?"COP (EER)":"COP",Ze=r==="Koelen"?"Koelafgifte":"Warmteafgifte",Se=r==="Koelen"?"afgegeven koeling":"afgegeven warmte",dn=M(t.fanSpeed),me=!Number.isNaN(dn)&&dn>0,Ko=Number.isNaN(dn)?"\u2014":`${Math.round(dn)} rpm`,he=a||r==="Koelen",Uo=he?"Verdamper":"Condensor",pn=he?"Condensor":"Verdamper",Wn=he?"return":"supply",ht=he?"supply":"return",$t=360,Ve=384,gn=214,At="M278 220 C278 228 273 234 266 234",Pe="M278 220 C278 228 283 234 290 234",Xa="M290 234 C284 234 279 240 278 248",ke="M266 234 C272 234 277 240 278 248",Je=he?`M290 234 H${$t} Q372 ${gn} ${Ve} 234 H436 V134 H480`:"M266 234 H180 V134 H164",mn=he?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${Ve} Q372 ${gn} ${$t} 234 H290`,Ht="M296 150 H278 V220",Bn="M278 248 V268 H372 V150 H356",Mt=he?"M480 294 H337":"M164 294 H315",Ne=he?"M315 294 H164":"M337 294 H480",ei=["oq-hp-schematic-board",`oq-hp-schematic-board--${o}`,q?"is-running":"",h?"is-water-flowing":"",me?"is-fan-running":"",he?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:ei,statusText:y,failureText:w,warningActive:S,waterFlowActive:h,defrostActive:a,defrostText:$,mode:r,reverseCycle:he,compressorFreqText:`${u} Hz`,leftExchangerTitle:Uo,rightExchangerTitle:pn,supplyLineTone:Wn,returnLineTone:ht,waterOutText:k,waterInText:H,flowText:L,evaporatorCoilTempText:F,innerCoilTempText:U,outsideTempText:C,dischargePressureText:E,dischargeTempText:N,suctionPressureText:I,suctionTempText:K,bottomPlateActive:R,crankcaseActive:V,eevPositionText:P,fourWayPositionText:D,powerText:j,heatText:Q,heatLabel:Ze,heatDescription:Se,efficiencyText:se,efficiencyLabel:Y,fanRpmText:Ko,hotgasValveHeat:At,hotgasValveCool:Pe,suctionValveHeat:Xa,suctionValveCool:ke,leftValveTone:he?"suction":"hotgas",rightValveTone:he?"hotgas":"suction",pipes:{supply:{tone:Wn,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:ht,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:Ht,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:Je,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:Mt,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:Ne,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:mn,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:Bn,animated:!0,flowVariant:"default"}}}}function Zb(e){const t=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),o=`${t}-cond-water-heat`,r=`${t}-cond-water-cool`,a=`${t}-cond-ref`,i=e.reverseCycle?r:o,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],d=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],u=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
      <div class="${s(e.boardClass)}" data-oq-hp-board="${s(e.title)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-visual">
            <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${s(e.title)} technische schematic">
              <defs>
              <linearGradient id="${s(o)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${s(r)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#ef4444" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${s(a)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#16a34a" stop-opacity="0.12"></stop>
                <stop offset="52%" stop-color="#86efac" stop-opacity="0.08"></stop>
                <stop offset="100%" stop-color="#4ade80" stop-opacity="0.22"></stop>
              </linearGradient>
              </defs>
              <rect class="oq-hp-tech-frame" x="18" y="28" width="584" height="314" rx="22" />

            <text class="oq-hp-tech-title" x="134" y="76" data-oq-bind="left-exchanger-title">${s(e.leftExchangerTitle)}</text>
            <text class="oq-hp-tech-title" x="326" y="76">Compressor</text>
            <text class="oq-hp-tech-title" x="510" y="76" data-oq-bind="right-exchanger-title">${s(e.rightExchangerTitle)}</text>

            <g class="oq-hp-tech-condensor">
              <rect class="oq-hp-tech-condensor-shell" x="104" y="118" width="60" height="192" rx="18" />
              <rect class="oq-hp-tech-condensor-water" x="112" y="124" width="20" height="180" rx="10" fill="url(#${s(i)})" data-oq-bind="cond-water" />
              <rect class="oq-hp-tech-condensor-ref-column" x="136" y="124" width="20" height="180" rx="10" fill="url(#${s(a)})" />
              <path class="oq-hp-tech-condensor-divider" d="M134 128 V300" />
            </g>

            <g class="oq-hp-tech-compressor">
              <rect class="oq-hp-tech-compressor-body" x="306" y="118" width="40" height="70" rx="17" />
              <rect class="oq-hp-tech-compressor-port" x="296" y="140" width="10" height="20" rx="5" />
              <rect class="oq-hp-tech-compressor-port" x="346" y="140" width="10" height="20" rx="5" />
              <path class="oq-hp-tech-compressor-lines" d="M316 134 H336 M316 148 H336 M316 162 H336" />
              <text class="oq-hp-tech-compressor-freq" x="326" y="166" data-oq-bind="compressor-freq">${s(e.compressorFreqText)}</text>
            </g>

            <g class="oq-hp-tech-4way">
              <rect class="oq-hp-tech-4way-body" x="264" y="220" width="28" height="28" rx="9" />
              <rect class="oq-hp-tech-4way-actuator" x="259" y="229" width="5" height="10" rx="2.5" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${e.leftValveTone}" cx="266" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--hotgas" cx="278" cy="220" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${e.rightValveTone}" cx="290" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--suction" cx="278" cy="248" r="3.2" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--hotgas" d="${s(e.hotgasValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--suction" d="${s(e.suctionValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--hotgas" d="${s(e.hotgasValveCool)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--suction" d="${s(e.suctionValveCool)}" />
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

            ${Object.entries(e.pipes).map(([c,p])=>Ar(c.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`),p.tone,p.d,p.animated,p.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${d.map(zb).join("")}
            ${lr({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${lr({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${lr({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
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

            ${u.map(Gb).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(Qb).join("")}
          </div>
        </div>
      </div>
    `}function ou(e,t,o,r="normal",a=null){if(!b(t.power))return"";const i=Qa(e,t,o),{mode:l,defrostActive:d,running:u,thermalKey:c}=i,p=i.schematic;return n.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(o)} oq-overview-hp--${s(r)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${eu(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${$r(l,u,p.warningActive,p.failureText)}
            </div>
          </div>
          ${Zb(p)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(o)} oq-overview-hp--${s(r)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${$r(l,u,p.warningActive,p.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${Fo([{key:t.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:c,label:p.heatLabel,tone:"orange",note:p.heatDescription},{label:p.efficiencyLabel,value:p.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${s(l)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${s(W(t.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${d?"Actief":"Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${kr("Water in",t.waterIn)}
          ${kr("Water out",t.waterOut)}
        </div>
      </section>
    `}function Ya(){return A("boilerCvAssistEnabled")&&b("boilerHeatPower")}function Jb(){return(typeof de=="function"?de():"")!=="single"&&b("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function Xb(){return(typeof de=="function"?de():"")!=="single"&&b("hp2Flow")?"hp2Flow":"hp1Flow"}function jo(){const e=M("boilerHeatPower"),t=M(Xb()),o=b("boilerActive")?A("boilerActive"):!Number.isNaN(e)&&e>20,r=!Number.isNaN(t)&&t>0,a=x(e,0,"W"),i=x(t,0,"L/h"),l=x(M(Jb()),1,"\xB0C"),d=x(M("supplyTemp"),1,"\xB0C"),u=o?"Aan":"Uit",c=o?"Levert ondersteuning":"Geen ondersteuning",p=["oq-boiler-card",o?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:o,flowActive:r,heatText:a,flowText:i,returnTempText:l,supplyTempText:d,statusText:u,statusCopy:c,boardClass:p,flowPathClass:r?"is-flowing":"is-static"}}function Za(e=jo()){return be({version:"boiler-visual-mode-v1",visualMode:n.hpVisualMode,boardClass:"oq-boiler-card"})}function ev(e,t=jo()){const o=e.querySelector(".oq-boiler-card");o&&(o.className=["oq-boiler-card",t.active?"is-running":"is-idle",t.flowActive?"is-flowing":"is-static"].join(" "));const r=e.querySelector(".oq-overview-chip");r&&(r.className=`oq-overview-chip oq-overview-chip--${t.active?"active":"neutral"}`,r.textContent!==t.statusText&&(r.textContent=t.statusText));const a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",t.active),a.classList.toggle("is-idle",!t.active));const i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==t.statusCopy&&(i.textContent=t.statusCopy);const l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==t.heatText&&(l.textContent=t.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(p=>{p.textContent!==t.flowText&&(p.textContent=t.flowText)});const d=e.querySelector("[data-oq-boiler-status-value]");d&&d.textContent!==t.statusCopy&&(d.textContent=t.statusCopy);const u=e.querySelector('[data-oq-bind="boiler-return-value"]');u&&u.textContent!==t.returnTempText&&(u.textContent=t.returnTempText);const c=e.querySelector('[data-oq-bind="boiler-supply-value"]');c&&c.textContent!==t.supplyTempText&&(c.textContent=t.supplyTempText)}function tv(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(Za(e))}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>CV-ketel / boiler</h3>
          </div>
          <span class="oq-overview-chip oq-overview-chip--${e.active?"active":"neutral"}">${s(e.statusText)}</span>
        </div>
        <div class="oq-overview-hp-stats">
          <article class="oq-overview-stat oq-overview-stat--orange">
            <p>Warmteafgifte</p>
            <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
            <span>afgegeven warmte</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--blue">
            <p>Water in</p>
            <strong data-oq-bind="boiler-return-value">${s(e.returnTempText)}</strong>
            <span>retour naar boiler</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--sky">
            <p>Water out</p>
            <strong data-oq-bind="boiler-supply-value">${s(e.supplyTempText)}</strong>
            <span>naar het systeem</span>
          </article>
        </div>
      </section>
    `}function Mr(){if(!Ya())return"";const e=jo();return n.hpVisualMode!=="schematic"?tv(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(Za(e))}">
        <div class="${s([e.boardClass,e.flowPathClass].filter(Boolean).join(" "))}">
          <div class="oq-boiler-card-main">
            <div class="oq-boiler-card-head">
              <div>
                <span class="oq-boiler-eyebrow">Ondersteuning</span>
                <h3>CV-ketel / boiler</h3>
              </div>
              <span class="oq-overview-chip oq-overview-chip--${e.active?"active":"neutral"}">${s(e.statusText)}</span>
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
                ${Ar("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${Ar("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${Hr({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${$n({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${Hr({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
                ${$n({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"right"})}
              </svg>
              <div class="oq-boiler-summary-grid">
                <div class="oq-boiler-summary-box oq-boiler-summary-box--power">
                  <span>Geleverd vermogen</span>
                  <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
                </div>
                <div class="oq-boiler-summary-box oq-boiler-summary-box--support ${e.active?"is-active":"is-idle"}">
                  <span>Ondersteuning</span>
                  <strong data-oq-boiler-status-value>${s(e.statusCopy)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}function ru(){const e=typeof de=="function"?de():"";return Ru.filter(t=>e==="single"&&t.title==="HP2"?!1:b(t.keys.power))}function Ja(e){return!Array.isArray(e)||e.length<2||n.hpVisualMode!=="schematic"?"equal":n.hpLayoutMode==="focus-hp1"||n.hpLayoutMode==="focus-hp2"?n.hpLayoutMode:"equal"}function mo(e,t,o){return!Array.isArray(t)||t.length<2?"normal":o==="focus-hp1"?e===0?"focus":"muted":o==="focus-hp2"?e===1?"focus":"muted":"normal"}function Pr(e,t,o){return!Array.isArray(t)||t.length<2||n.hpVisualMode!=="schematic"?null:mo(e,t,o)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function au(e){return!Array.isArray(e)||e.length!==1?Ja(e):Ya()?"equal":"single"}function nv(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function iu(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${tu(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${n.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${n.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function ov(e,t){if(!e)return!1;const o=e.querySelector(".oq-overview-hp-tools-copy"),r=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!o||!r||!a?(rt(e,iu(t)),!0):(rt(o,`
      <h3>Warmtepompen</h3>
      ${tu(t)}
    `),r.classList.toggle("is-active",n.hpVisualMode==="schematic"),a.classList.toggle("is-active",n.hpVisualMode==="compact"),!0)}function rv(){const e=kc(),t=ru(),o=Ja(t),r=au(t),a=iu(t);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(n.overviewTheme)}">
          ${fc()}
          ${Bf(e)}
          <div class="oq-overview-main">
            ${$c(Cr())}
            ${Rc()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(r)}">
            ${t.map((i,l)=>ou(i.title,i.keys,i.accent,mo(l,t,o),Pr(l,t,o))).join("")}
            ${Mr()}
          </div>
        </div>
      </section>
    `}function av(e,t,o){if(!e)return;const r=e.querySelector(t);r&&r.textContent!==o&&(r.textContent=o)}function rt(e,t){e&&e.innerHTML!==t&&(e.innerHTML=t)}function tt(e,t,o){return!e||e.dataset.renderSignature===t?!1:(e.outerHTML=o,!0)}function Vt(e,t,o){e&&e.getAttribute(t)!==o&&e.setAttribute(t,o)}function iv(e,t){t.forEach(([o,r])=>{av(e,`[data-oq-bind="${o}"]`,r)})}function sv(e,t){t.forEach(([o,r])=>{Vt(e.querySelector(`[data-oq-bind="${o}"]`),"aria-label",r)})}function lv(e,t,o,r=""){const a=e.querySelector(`[data-oq-bind="${t}"]`);a&&(a.classList.toggle("is-active",o),Vt(a,"tabindex",o?"0":"-1"),!o&&r&&_o(e.querySelector(`[data-oq-bind="${r}"]`)))}function cv(e,t,o){Vt(e.querySelector(`[data-oq-bind="${t}"]`),"fill",o)}function An(e,t,o,r){if(!e)return;const a=`${t}${o}`;r.map(l=>`${t}${l}`).find(l=>e.classList.contains(l))!==a&&(r.forEach(l=>e.classList.remove(`${t}${l}`)),e.classList.add(a))}function uv(e,t,o,r){const a=e.querySelector(`[data-oq-pipe="${t}"]`);a&&(An(a,"oq-hp-tech-pipe--",o,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==r&&i.setAttribute("d",r)}))}function _o(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function gs(e,t,o){!e||!t||!o||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(r=>{r!==o&&_o(r)}),t.appendChild(o),o.classList.add("is-active"),o.setAttribute("aria-hidden","false"))}function dv(e,t,o,r){if(!e||!t||!o||!r||o.dataset.oqTooltipWired==="true")return;o.dataset.oqTooltipWired="true";const a=()=>{o.matches(":hover")||document.activeElement===o||_o(r)};o.addEventListener("mouseenter",()=>gs(e,t,r)),o.addEventListener("mouseleave",a),o.addEventListener("focus",()=>gs(e,t,r)),o.addEventListener("blur",a)}function su(e){if(!e)return;const t=e.querySelector(".oq-hp-tech-svg");if(!t)return;let o=t.querySelector(".oq-hp-tech-tooltip-layer");o||(o=document.createElementNS("http://www.w3.org/2000/svg","g"),o.setAttribute("class","oq-hp-tech-tooltip-layer"),t.appendChild(o)),Array.from(t.querySelectorAll(".oq-hp-tech-tooltip")).forEach(r=>{o.appendChild(r)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(r=>{const a=r.getAttribute("data-oq-tooltip-target");if(!a)return;const i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);dv(e,o,r,i)})}function pv(e=n.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(t=>{su(t)})}function gv(e,t,o,r,a=null,i=null){if(!e)return;const l=i||Qa(t,o,r),{mode:d,running:u}=l,c=l.schematic,p=e.querySelector(".oq-overview-hp-head-title");p&&rt(p,eu(t,a));const f=e.querySelector(".oq-overview-hp-head-side");if(f){let y=f.querySelector(".oq-overview-hp-status");y||(rt(f,$r(d,u,c.warningActive,c.failureText)),y=f.querySelector(".oq-overview-hp-status")),Ef(y,d,u,c.warningActive,c.failureText)}const m=e.querySelector("[data-oq-hp-board]");if(!m)return;m.className!==c.boardClass&&(m.className=c.boardClass),iv(m,[["status",c.statusText],["left-exchanger-title",c.leftExchangerTitle],["right-exchanger-title",c.rightExchangerTitle],["compressor-freq",c.compressorFreqText],["flow-value",c.flowText],["inner-coil-temp-value",c.innerCoilTempText],["evaporator-temp-value",c.evaporatorCoilTempText],["outside-temp-value",c.outsideTempText],["discharge-pressure-value",c.dischargePressureText],["discharge-temp-value",c.dischargeTempText],["suction-pressure-value",c.suctionPressureText],["suction-temp-value",c.suctionTempText],["supply-value",c.waterOutText],["return-value",c.waterInText],["footer-mode",c.mode],["footer-power",c.powerText],["footer-heat",c.heatText],["footer-efficiency-label",c.efficiencyLabel],["footer-efficiency",c.efficiencyText],["fan-speed-value",c.fanRpmText],["fourway-detail",c.fourWayPositionText],["eev-detail",c.eevPositionText]]);const v=m.querySelector('[data-oq-bind="footer-heat-label"]');if(v){Vt(v,"aria-label",c.heatLabel);const y=c.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";v.innerHTML!==y&&(v.innerHTML=y)}[["bottom-heater",c.bottomPlateActive],["crankcase-heater",c.crankcaseActive]].forEach(([y,w])=>{lv(m,y,w,`${y}-tooltip`)});const q=m.querySelector('[data-oq-bind="defrost-badge"]');q&&(Vt(q,"tabindex",c.defrostActive?"0":"-1"),Vt(q,"aria-label",c.defrostActive?"Defrost actief":"Defrost uit"),c.defrostActive||_o(m.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",c.supplyLineTone],["return-tooltip",c.returnLineTone]].forEach(([y,w])=>{An(m.querySelector(`[data-oq-bind="${y}"]`),"oq-hp-tech-tooltip--",w,["warm","supply","return"])}),sv(m,[["supply-reading",`Aanvoer temperatuur ${c.waterOutText}`],["flow-reading",`Flow ${c.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${c.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${c.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${c.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${c.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${c.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${c.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${c.dischargeTempText}`],["return-reading",`Retour temperatuur ${c.waterInText}`],["suction-pressure-reading",`Zuigdruk ${c.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${c.suctionTempText}`],["fourway-trigger",`4-wegklep, ${c.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${c.eevPositionText}`]]),An(m.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",c.returnLineTone,["supply","return"]);const h=String(c.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");cv(m,"cond-water",`url(#${c.reverseCycle?`${h}-cond-water-cool`:`${h}-cond-water-heat`})`),Object.entries(c.pipes).forEach(([y,w])=>{uv(m,y.replace(/[A-Z]/g,S=>`-${S.toLowerCase()}`),w.tone,w.d)}),su(m),zr()}function mv(){if(!n.root||n.appView!=="overview")return!1;const e=n.root.querySelector(".oq-overview-board");if(!e)return!1;const t=`oq-overview-board oq-overview-board--${n.overviewTheme}`;e.className!==t&&(e.className=t);const o=kc(),r=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),d=e.querySelector(".oq-overview-trends"),u=e.querySelector(".oq-overview-hp-tools"),c=e.querySelector(".oq-overview-hp-grid"),p=e.querySelector("[data-oq-boiler-panel]"),f=ru();if(r){const S=Oo();tt(r,be(S),fc())}if(a){const S=a.querySelector(".oq-overview-top");S&&rt(S,Fo(Mc()));const $=a.querySelector(".oq-overview-statuspanel");if($){const H=W("controlModeLabel");tt($,be(Ac(o,H)),Hc(o,H))}const k=a.querySelector(".oq-overview-summary-side");if(k){const H=El();k.dataset.renderSignature!==H&&(rt(k,Pc()),k.dataset.renderSignature=H)}}if(i&&tt(i,be(Cr()),$c(Cr())),l){const S=Da();tt(l,Nc(S),Rc())}if(d&&n.appView==="overview"&&(tt(d,Ia(),Wa()),xc(e)),Va(e),!u||!c)return!1;const m=Ja(f),v=au(f);if(ov(u,f),An(c,"oq-overview-hp-grid--",v,["single","equal","focus-hp1","focus-hp2"]),n.hpVisualMode!=="schematic"){const S=[...f.map((k,H)=>ou(k.title,k.keys,k.accent,mo(H,f,m),Pr(H,f,m))),Mr()].join(""),$=be({visualMode:n.hpVisualMode,layout:v,markup:S});return c.dataset.renderSignature!==$&&(rt(c,S),c.dataset.renderSignature=$),!0}const q=Ya()?jo():null,h=q?Mr():"",y=q?Za(q):"";return!!p!=!!h||(p&&p.dataset.renderSignature!==y?p.outerHTML=h:p&&q&&ev(p,q),c.querySelectorAll("[data-oq-hp-panel]").length!==f.length)?!1:(f.forEach((S,$)=>{const k=e.querySelector(`[data-oq-hp-panel="${S.title}"]`);if(k){const H=Qa(S.title,S.keys,S.accent);An(k,"oq-overview-hp--",mo($,f,m),["normal","focus","muted"]),gv(k,S.title,S.keys,S.accent,Pr($,f,m),H)}}),!0)}function hv(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${ph()}
        ${gh()}
      </section>
    `}function fv(){return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""} oq-helper-modal-backdrop--loading" data-oq-modal="initial-load">
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
    `}function bv(){return n.appView==="overview"?rv():n.appView==="energy"?xb():n.appView==="diagnosis"?nb():n.appView==="results"?Ib():hv()}function vv(){const e=Zs();return`
      <footer class="oq-helper-powered-by" aria-label="Platform">
        ${e&&e!=="\u2014"?`<span class="oq-helper-footer-version">OpenQuatt ${s(e)}</span>`:""}
        <nav class="oq-helper-footer-links" aria-label="OpenQuatt links">
          <a href="https://jeroen85.github.io/OpenQuatt/" target="_blank" rel="noreferrer">Docs</a>
          <a href="https://github.com/jeroen85/OpenQuatt" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <a class="oq-helper-powered-by-link" href="https://esphome.io/" target="_blank" rel="noreferrer" aria-label="Built with ESPHome">
          <span>Built with</span>
          <img class="oq-helper-powered-by-logo" src="https://media.esphome.io/logo/logo-text-on-light.svg" alt="ESPHome" loading="lazy" decoding="async">
        </a>
      </footer>
    `}function wv(){const e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function yv(e){if(!e||n.deferDevControlSelectRender)return;n.deferDevControlSelectRender=!0;const t=()=>{e.removeEventListener("blur",t),e.removeEventListener("change",t),n.deferDevControlSelectRender=!1,window.setTimeout(()=>g(),0)};e.addEventListener("blur",t,{once:!0}),e.addEventListener("change",t,{once:!0})}function g(){if(!n.root)return;const e=wv();if(e){yv(e);return}const t=n.systemModal==="webserver-logs"?pt():null,o=n.systemModal==="cm100-commissioning"?um():null,r=String(n.systemModal||"").startsWith("service-task-")?pm():null,a=n.quickStartModalOpen?cf():null;if(n.nativeOpen){n.root.innerHTML=`
        ${yi()}
        ${cp()}
      `,n.settingsRenderSignature="",n.headerRenderSignature=pr(),jr(),ro(),Bi(),fi(),Di(),Oi(),it(t),xi(o),Ii(r),es(a);return}const i=bv(),l=n.loadingEntities?`${i}${fv()}`:i,d=n.appView==="overview"||n.appView==="energy"||n.appView==="diagnosis"||n.appView==="results";n.root.innerHTML=`
      ${yi()}
      <div class="oq-helper-shell${n.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${d?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${Au}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${sp()}
          </div>
      ${Gg()}
      ${l}
      ${vv()}
        </div>
      </div>
      ${lf()}
      ${dp()}
      ${pp()}
      ${_d()}
    `,n.settingsRenderSignature=n.appView==="settings"?wr():"",n.headerRenderSignature=pr(),Ur(),pv(),Bi(),Gr(),Va(),ro(),fi(),Di(),Oi(),it(t),xi(o),Ii(r),es(a)}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}vd();})();
