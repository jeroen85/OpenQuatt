/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{const rd=`
    <svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>
  `,Pi={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},Ls="https://oi.esphome.io/v3/www.js",At=2,Ln=4,Os=6e4,xs="Power House",Fs="Water Temperature Control (heating curve)",On=[{id:"generation",kicker:"Stap 1",title:"Kies je Quatt Hybrid",copy:"Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.",fields:[{title:"Quatt Hybrid-versie",copy:"Kies de versie die bij jouw Quatt hoort."}]},{id:"flow-source",kicker:"Stap 2",title:"Flowmeting configureren",copy:"Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort.",fields:[{title:"Flowbron",copy:"De Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron OpenQuatt moet gebruiken."}]},{id:"thermostat-source",kicker:"Stap 3",title:"Thermostaatgegevens configureren",copy:"Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt.",fields:[{title:"Thermostaatbron",copy:"Q-edition gebruikt OpenTherm. Listener en Waveshare gebruiken CiC of Home Assistant."}]},{id:"boiler",kicker:"Stap 4",title:"CV-ketel of boiler",copy:"Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.",optionalEntity:"boilerCvAssistEnabled",fields:[{title:"CV-ketel / boiler aanwezig",copy:"Kies of er ondersteuning beschikbaar is en vul eventueel het vermogen in."}]},{id:"strategy",kicker:"Stap 5",title:"Kies de verwarmingsstrategie",copy:"Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",fields:[{title:"Verwarmingsstrategie",copy:"Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn."}]},{id:"heating",kicker:"Stap 6",title:"Werk de regeling uit",copy:"Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",fields:[{title:"Instellingen voor jouw regeling",copy:"Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling."}]},{id:"flow",kicker:"Stap 7",title:"Flowregeling en afstelling",copy:"Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning.",fields:[{title:"Flowregeling en tuning",copy:"Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt. Stel hier ook de flow-instellingen in."}]},{id:"water",kicker:"Stap 8",title:"Watertemperatuur beveiligen",copy:"Controleer de normale bovengrens en de tripgrens voor het watercircuit.",fields:[{title:"Watertemperatuur",copy:"Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt."}]},{id:"silent",kicker:"Stap 9",title:"Stille uren en niveaus",copy:"Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",fields:[{title:"Stille uren",copy:"Hier bepaal je wanneer het systeem rustiger moet werken."}]},{id:"confirm",kicker:"Stap 10",title:"Bevestigen en afronden",copy:"Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.",fields:[{title:"Afronden",copy:"Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is."}]}],xn=[1,2],$o=Array.from({length:11},(e,t)=>t),Xr=["cooling","heating"];function ad(e){return e==="cooling"?"cooling":"heating"}function id(e){return e==="cooling"?"Cooling":"Heating"}function Yt(e,t,n){return`hp${e}OduRuntime${id(t)}F${n}`}function le(e,t){return`hp${e}OduRuntimeFrequency${t}`}function Ds(e){return[le(e,"Enable"),le(e,"Load"),le(e,"Apply"),le(e,"Status"),...Xr.flatMap(t=>$o.map(n=>Yt(e,t,n)))]}function sd(e){const t=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return t?Number(t[1]):0}const ea=xn.flatMap(Ds),Is=new Set(xn.flatMap(e=>[le(e,"Load"),le(e,"Apply")])),L={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},trendHistoryFlashAvailable:{domain:"text_sensor",name:"Trendhistorie beschikbaar",optional:!0},trendHistoryFlashOldest:{domain:"text_sensor",name:"Trendhistorie oudste punt",optional:!0},trendHistoryFlashNewest:{domain:"text_sensor",name:"Trendhistorie nieuwste punt",optional:!0},trendHistoryFlashLastFlush:{domain:"text_sensor",name:"Trendhistorie laatste opslag",optional:!0},trendHistoryFlashSize:{domain:"sensor",name:"Trendhistorie grootte",optional:!0},trendHistoryFlashWrites:{domain:"sensor",name:"Trendhistorie schrijfacties",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHourRetention:{domain:"select",name:"Uurdetail bewaren",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},lifetimeEnergyHistoryAvailable:{domain:"text_sensor",name:"Lifetime energiehistorie beschikbaar",optional:!0},lifetimeEnergyHistoryOldest:{domain:"text_sensor",name:"Lifetime energiehistorie oudste dag",optional:!0},lifetimeEnergyHistoryNewest:{domain:"text_sensor",name:"Lifetime energiehistorie nieuwste dag",optional:!0},lifetimeEnergyHistoryLastWrite:{domain:"text_sensor",name:"Lifetime energiehistorie laatste opslag",optional:!0},lifetimeEnergyHistorySize:{domain:"sensor",name:"Lifetime energiehistorie grootte",optional:!0},lifetimeEnergyHistoryWrites:{domain:"sensor",name:"Lifetime energiehistorie schrijfacties",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempPt1000:{domain:"sensor",name:"Water Supply Temp (PT1000)",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};xn.forEach(e=>{const t=`HP${e} - EXPERIMENTAL`;L[le(e,"Enable")]={domain:"switch",name:`${t} ODU runtime frequency write enable`,optional:!0},L[le(e,"Load")]={domain:"button",name:`${t} load ODU runtime frequency table`,optional:!0},L[le(e,"Apply")]={domain:"button",name:`${t} apply ODU runtime frequency table`,optional:!0},L[le(e,"Status")]={domain:"text_sensor",name:`${t} ODU runtime frequency status`,optional:!0},Xr.forEach(n=>{$o.forEach(r=>{L[Yt(e,n,r)]={domain:"number",name:`${t} ${ad(n)} F${r} runtime Hz`,optional:!0}})})});const ta=[{id:"overview",label:"Overzicht",icon:"monitor-dashboard"},{id:"energy",label:"Energie",icon:"zap"},{id:"diagnosis",label:"Diagnose",icon:"activity"},{id:"results",label:"Resultaten",icon:"bar-chart"},{id:"settings",label:"Instellingen",icon:"settings"}],ld=new Set(ta.map(e=>e.id)),cd={activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',"bar-chart":'<path d="M4 19V5"/><path d="M20 19H4"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="12" y="7" width="3" height="9" rx="1"/><rect x="17" y="3" width="3" height="13" rx="1"/>',"clipboard-check":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6"/><path d="m9 13 2 2 4-5"/>',flame:'<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.04 -1.77 4.74 -3 6c-1.23 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.53 -1.06 -3.94 -2 -5c-1.79 3 -2.79 3 -4 2z"/>',"home-cog":'<path d="M5 12h-2l9 -9l9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1"/><circle cx="17" cy="18" r="2"/><path d="M17 14.5v1.5"/><path d="M17 20v1.5"/><path d="M13.97 16.25l1.3 .75"/><path d="M18.73 19l1.3 .75"/><path d="M20.03 16.25l-1.3 .75"/><path d="M15.27 19l-1.3 .75"/>',link:'<path d="M9 15l6 -6"/><path d="M11 6l.46 -.54a5 5 0 0 1 7.08 7.08l-.54 .46"/><path d="M13 18l-.46 .54a5 5 0 0 1 -7.08 -7.08l.54 -.46"/>',"monitor-dashboard":'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M6.5 7h7v4h-7z"/><path d="M16 7h2"/><path d="M16 10h2"/><path d="M6.5 13h3"/><path d="M11 13h2.5"/>',"more-horizontal":'<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>',server:'<rect x="3" y="4" width="18" height="8" rx="3"/><rect x="3" y="12" width="18" height="8" rx="3"/><path d="M7 8h.01"/><path d="M7 16h.01"/>',snowflake:'<path d="M12 4v16"/><path d="M4 12h16"/><path d="m6.4 6.4 11.2 11.2"/><path d="m17.6 6.4 -11.2 11.2"/>',tool:'<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8z"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'};function oa(e,t=""){const n=cd[e];return n?`<svg${t?` class="${s(t)}"`:""} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${n}</svg>`:""}const Se=[{id:"installation",label:"Installatie",icon:"home-cog"},{id:"heating",label:"Verwarmen",icon:"flame"},{id:"cooling",label:"Koelen",icon:"snowflake"},{id:"integrations",label:"Bronnen / integraties",icon:"link"},{id:"service",label:"Service",icon:"tool"},{id:"system",label:"Systeem",icon:"server"}],Ve=new Set(Se.map(e=>e.id)),ud=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],pe=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],ro=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],Do=["dayMax","silentMax","maxWater"],ht=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],Ws=["flowKp","flowKi"],yn=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],wn=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],na=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],dd=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],ra=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...wn,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],Bs=["cicCompatibilityMode"],Vs=["otEnabled","otLinkProblem"],js=["cicPollingEnabled","cicFeedUrl","cicDataStale"],_s=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],Ks=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],aa=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"],Us=["supplyTemp","waterSupplyTempEsp","waterSupplyTempPt1000","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","coolingEnableSelected","coolingEnableEffectiveSource","coolingEnableHa","coolingEnableHaValid"],ft=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],Fn=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","roomSetpointHa","roomSetpointHaValid"],zs=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],Dn=[...pe.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],Gs=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],In=["silentStartTime","silentEndTime","silentMax","dayMax"],pd=1e4;const Nr=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],zt=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1CondenserPressure","hp1EvaporatorPressure","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2CondenserPressure","hp2EvaporatorPressure","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],ao=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],gd=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],ia=[...ao,...gd,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],gn=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],Pe=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],Io=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Mode","hp1Failures","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Mode","hp2Failures","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay"],mn=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Mode","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Mode","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay",...dd],md=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...ro,...Dn,...ht,"maxWater",...In,...ft,...Fn,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","hp1Power","hp1Heat","hp1Cooling","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp2Power","hp2Heat","hp2Cooling","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut"],hd=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],Qs=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...ra,"manualCoolingEnable","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","webServerLogHistoryEnabled","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites",...Bs,...Vs,..._s,...js,...Ks,...aa,...Us,...ht,...Ws,...yn,...wn,...na,...zs,...Do,...ro,...Dn,...Gs,...In,...ea];const Iy=new Set(["installationTopology",...ra,...ea,"trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites","cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"]),Jt=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource",...yn]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...pe.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],Ys=1,Wo=[...new Set(Jt.flatMap(e=>e.keys))],fd=new Set(Wo),bd=5e3,vd=3e4,yd=6e4,Bo=12e3,Wn=4e3,wd=1500,Sd=3e4,qd=3e4,kd=1e3,sa=3e4,Ni=250,Cd=750,Td=22,Ed=Td/1.7,$d=360/3.2,Ao="2000-01-01 00:00:00",Zt=24,Sn=[3,12,24,72,168,336,720],o={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:Md(),devPanelOpen:Nd(),nativeOpen:Pd()==="native",currentStep:"generation",quickStartModalMode:"wizard",settingsGroup:Rd(),appView:"",overviewTheme:Ad(),hpVisualMode:Od(),hpLayoutMode:Fd(),trendWindowHours:Id(),trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryRequestQuery:"",energyHistoryFetchQuery:"",energyHistoryFetchPromise:null,energyHistoryCsrfToken:"",energyHistoryView:"day",energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:"",energyHistoryExportMode:"days_and_hours",energyHistoryExportBusy:!1,energyHistoryExportError:"",energyHistoryExportNotice:"",settingsStorageDetailsOpen:!1,energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""},deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",firmwareOtaQuietUntil:0,firmwareOtaQuietTimer:null,entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:Qh(),debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null,complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:"",updateModalOpen:!1,systemModal:"",authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchOpen:!1,firmwareTopologySwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:"",draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:Bd(),motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}};function Ad(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function Hd(e){o.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",o.overviewTheme)}catch{}}function Md(){return!1}function wr(e){o.interfacePanelOpen=e===!0}function Pd(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function Js(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function Nd(){try{return window.localStorage.getItem("oq-dev-panel-open")==="true"}catch{return!1}}function Rd(){try{const e=window.localStorage.getItem("oq-settings-group");return Ve.has(e)?e:Se[0].id}catch{return Se[0].id}}function hn(e,t={}){o.settingsGroup=Ve.has(e)?e:Se[0].id;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}t.syncUrl!==!1&&o.appView==="settings"&&ol(t.syncMode||"replace")}function Ld(e){o.devPanelOpen=e===!0;try{window.localStorage.setItem("oq-dev-panel-open",o.devPanelOpen?"true":"false")}catch{}}function Od(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function xd(e){o.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",o.hpVisualMode)}catch{}}function Fd(){try{const e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function Dd(e){o.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",o.hpLayoutMode)}catch{}}function Id(){try{const e=Number(window.localStorage.getItem("oq-trend-window-hours"));return Sn.includes(e)?e:Zt}catch{return Zt}}function Zs(){const e=o.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;const t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function Wd(){return Zs()?Sn:Sn.filter(e=>e<=168)}function la(e){const t=Wd(),n=Number(e);return t.includes(n)?n:Number.isFinite(n)&&n>t[t.length-1]?t[t.length-1]:t.includes(Zt)?Zt:t[0]}function ca(e){o.trendWindowHours=la(e);try{window.localStorage.setItem("oq-trend-window-hours",String(o.trendWindowHours))}catch{}}function Xt(){return"overview"}function Xs(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function Bd(){return!!Xs()?.matches}function Vd(e){if(o.reducedMotion=!!e?.matches,o.reducedMotion){ua();return}fa()}function jd(){const e=Xs();!e||o.motionPreferenceMedia===e||(o.motionPreferenceMedia=e,o.motionPreferenceListener=Vd,typeof e.addEventListener=="function"?e.addEventListener("change",o.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(o.motionPreferenceListener),o.reducedMotion=!!e.matches)}function _d(){return Object.keys(o.entities).length>0}function ua(){o.motionFrame&&(window.cancelAnimationFrame(o.motionFrame),o.motionFrame=0),o.motionStartedAt=0,ma()}function Kd(){return Ni+Math.floor(Math.random()*(Cd-Ni+1))}function Ud(){return(document.hidden?sa:bd)+Kd()}function el(e=Ud()){o.pollTimer||o.nativeOpen||o.updateInstallBusy||gl()||(o.pollTimer=window.setTimeout(async()=>{o.pollTimer=null,await ae(),el()},e))}function Bn(){el()}function da(){o.pollTimer&&(window.clearTimeout(o.pollTimer),o.pollTimer=null)}function zd(){o.nativeOpen||(da(),Bn(),document.hidden||ae({forceProbe:!0}))}function pa(e={}){if(kn(),o.nativeOpen){da(),ua(),o.nativeFrontendLoaded||Rr();return}if(fa(),Bn(),e.refresh!==!1){if(!_d()){bm();return}ae(o.appView==="settings"?{forceBulk:!0}:{forceFast:!0})}}function Ho(e){return e==="trends"&&(e="diagnosis"),!ld.has(e)||e==="diagnosis"&&!uo()?"":e}function qn(e){return String(e||"").trim().toLowerCase()}function ga(){try{const e=new URL(window.location.href),t=qn(e.searchParams.get("view")||""),n=Ho(t);if(n)return n;const r=qn(e.hash.replace(/^#/,""));return Ho(r)||""}catch{return""}}function tl(){try{const e=new URL(window.location.href),t=qn(e.searchParams.get("section")||"");if(Ve.has(t))return t;const n=qn(e.searchParams.get("group")||"");return Ve.has(n)?n:""}catch{return""}}function ol(e="replace"){try{const t=new URL(window.location.href),n=Ho(o.appView)||Xt();if(t.searchParams.set("view",n),n==="settings"){const a=Ve.has(o.settingsGroup)?o.settingsGroup:Se[0].id;t.searchParams.set("section",a),t.searchParams.delete("group")}else t.searchParams.delete("section"),t.searchParams.delete("group");t.hash&&Ho(t.hash.replace(/^#/,""))&&(t.hash="");const r=e==="push"?"pushState":"replaceState";window.history[r]({oqView:n,oqSettingsSection:n==="settings"?o.settingsGroup:""},"",t.toString())}catch{}}function Et(e,t={}){const n=Ho(e)||Xt(),r=t.syncMode||"replace",a=o.appView!==n;o.appView=n,(a||t.forceSync)&&ol(r)}function Gd(){const e=ga()||Xt(),t=e==="settings"?tl()||o.settingsGroup:"";if(!(e===o.appView&&(e!=="settings"||t===o.settingsGroup))){if(o.appView=e,e==="settings"&&t){o.settingsGroup=t;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}}m(),ae(e==="settings"?{forceBulk:!0}:{forceFast:!0})}}function kn(){o.nativeApp&&(o.nativeApp.classList.add("oq-native-app"),o.nativeApp.classList.toggle("oq-native-app--collapsed",!o.nativeOpen),o.nativeApp.setAttribute("aria-hidden",o.nativeOpen?"false":"true"))}function Qd(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ri,{once:!0}):Ri(),window.addEventListener("pointermove",$m),window.addEventListener("pointerup",Am),window.addEventListener("popstate",Gd),window.addEventListener("oq-mock-updated",Yd),window.addEventListener("oq-dev-controls-changed",Jd),document.addEventListener("visibilitychange",zd)}function Yd(){o.mounted&&ae()}function Jd(){o.mounted&&m()}function Ri(){Zd();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),o.nativeApp=e,o.nativeFrontendLoaded=Array.from(document.scripts).some(t=>t.src===Ls),o.mounted||(Xd(e),o.mounted=!0,pa()),kn(),o.nativeOpen||(ae(),Qa({silent:!0}))}function Zd(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function Xd(e){const t=document.createElement("section");t.id="oq-helper-root",t.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(t,e),t.addEventListener("click",Tm),t.addEventListener("change",Cm),t.addEventListener("input",wm),t.addEventListener("keydown",Sm),t.addEventListener("wheel",km,{passive:!1}),t.addEventListener("focusin",Ji),t.addEventListener("focusout",Ji),t.addEventListener("mouseover",vm),t.addEventListener("mouseout",ym),t.addEventListener("pointerdown",Em),o.root=t,jd();const n=ga()||Xt(),r=n==="settings"?tl():"";r&&hn(r,{syncUrl:!1}),Et(n,{syncMode:"replace",forceSync:!0}),ma(),m()}function ep(e){return new Promise((t,n)=>{if(!e){t();return}const r=Array.from(document.scripts).find(i=>i.src===e);if(r){if(r.dataset.loaded==="true"){t();return}r.addEventListener("load",()=>t(),{once:!0}),r.addEventListener("error",i=>n(i),{once:!0});return}const a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",t()},{once:!0}),a.addEventListener("error",i=>n(i),{once:!0}),document.head.appendChild(a)})}async function Rr(){if(!(o.nativeFrontendLoaded||o.nativeFrontendLoading)){o.nativeFrontendLoading=!0,o.nativeOpen&&m();try{await ep(Ls),o.nativeFrontendLoaded=!0}catch(e){o.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,o.nativeOpen=!1,Js("app"),m(),pa()}finally{o.nativeFrontendLoading=!1,o.nativeOpen&&m()}}}function Li(){if(!o.root)return;const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;!e||typeof e.bind!="function"||e.bind(o.root)}function ma(){o.root&&(o.root.style.removeProperty("--oq-flow-offset"),o.root.style.removeProperty("--oq-flow-offset-reverse"),o.root.style.removeProperty("--oq-fan-rotation"),o.root.getAttribute("style")||o.root.removeAttribute("style"))}function ha(){return o.motionTargets={pipeFlows:[],fanBlades:[]},o.root?(o.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(r=>{r.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{o.motionTargets.fanBlades.push(a)})}),o.motionTargets.pipeFlows.length+o.motionTargets.fanBlades.length):0}function tp(){return o.motionTargets.pipeFlows.length>0||o.motionTargets.fanBlades.length>0}function nl(e=performance.now()){if(!o.root||o.reducedMotion||!tp()&&ha()===0)return!1;o.motionStartedAt||(o.motionStartedAt=e);const t=(e-o.motionStartedAt)/1e3,n=t*$d%360;return o.motionTargets.pipeFlows.forEach(r=>{const a=r.dataset.oqFlowVariant==="water"?.42:1,i=-(t*Ed*a);r.style.strokeDashoffset=`${i.toFixed(3)}px`}),o.motionTargets.fanBlades.forEach(r=>{r.style.transform=`rotate(${n.toFixed(3)}deg)`}),!0}function rl(e){if(!nl(e)){o.motionFrame=0,o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(rl)}function fa(){if(o.motionFrame||o.reducedMotion||ha()===0)return;const e=performance.now();if(o.motionStartedAt=e,!nl(e)){o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(rl)}function Je(){const e=window.location.pathname.replace(/\/$/,"");return e===""?"":e}function G(e,t,n=""){const r=n?`/${n}`:"";return`${Je()}/${e}/${encodeURIComponent(t)}${r}`}function ce(e=E("strategy")){return String(e||"").includes("Water Temperature Control")}function op(e=E("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function bt(){return typeof window<"u"&&window.__OQ_DEV_META&&typeof window.__OQ_DEV_META=="object"?window.__OQ_DEV_META:{}}function np(){const e=String(E("hpGeneration")||"").trim();return e||""}function Cn(e){const t=String(e||"").trim().toLowerCase();return t==="single"||t.includes("quatt single")||t.includes("openquatt single")?"single":t==="duo"||t.includes("quatt duo")||t.includes("openquatt duo")?"duo":""}function rp(){if(!Array.isArray(gn))return"";if(gn.some(t=>v(t)))return"duo";const e=o.optionalMissingEntities||{};return gn.every(t=>e[t])?"single":""}function Sr(e){const t=Cn(e);return(t==="single"||t==="duo")&&typeof o<"u"&&o&&typeof o=="object"&&(o.lastKnownInstallationTopology=t),t}function ap(){if(typeof o<"u"&&o&&typeof o=="object"){const e=String(o.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function Z(){const e=Cn(E("installationTopology"));if(e==="single"||e==="duo")return Sr(e);const t=Cn(bt().installation);if(t==="single"||t==="duo")return Sr(t);const n=rp();return n?Sr(n):ap()}function Vo(){const e=Z(),t=np();return e==="single"?t?`Quatt Single ${t}`:"Quatt Single":e==="duo"?t?`Quatt Duo ${t}`:"Quatt Duo":t?`Quatt Hybrid ${t}`:"Quatt Hybrid"}function Me(){return"OpenQuatt"}function al(e){const t=String(e||"").trim().toLowerCase();return t==="wifi"||t==="wi-fi"||t.includes("wifi")||t.includes("wi-fi")?"wifi":t==="eth"||t==="ethernet"||t.includes("ethernet")?"eth":""}function Ie(e=Pt()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function Mo(e=Z()){return e==="single"?"Single":e==="duo"?"Duo":"Onbekende opstelling"}function Vn(){const e=String(E("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(bt().hardwareProfile||e).trim().toLowerCase()}function Pt(){return al(E("connectionText")||bt().connection)}function ip(){const e=Pt();return e==="wifi"?"eth":e==="eth"?"wifi":""}function sp(){const e=Z();return e==="single"?"duo":e==="duo"?"single":""}function lp(){const e=o.entities.firmwareUpdateTarget||{};return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function il(e){return lp().includes(e)}function Po(e=Z(),t=Pt()){const n=Mo(e),r=Vn();return r==="heatpump_controller_q"?`Heatpump Controller Q ${n} ${Ie(t)}`:r==="heatpump_listener"?`Heatpump Listener ${n} ${Ie(t)}`:r==="waveshare"?`Waveshare ${n} ${Ie(t)}`:`${Me()} ${n} ${Ie(t)}`}function ba(){const e=Vn(),t=Z(),n=Pt(),r=ip();return e!=="heatpump_controller_q"||t!=="single"&&t!=="duo"||n!=="wifi"&&n!=="eth"||!r?null:{canSwitch:v("firmwareUpdateTarget")&&il("alternate connection")&&v("installFirmwareUpdateTarget"),currentConnection:n,targetConnection:r,currentLabel:Ie(n),targetLabel:Ie(r),currentBuildLabel:Po(t,n),targetBuildLabel:Po(t,r)}}function va(){const e=Vn(),t=Z(),n=sp(),r=Pt(),a=e==="heatpump_controller_q"?["wifi","eth"]:["wifi"];return!["heatpump_controller_q","heatpump_listener","waveshare"].includes(e)||t!=="single"&&t!=="duo"||!n||!a.includes(r)?null:{canSwitch:v("firmwareUpdateTarget")&&il("alternate topology")&&v("installFirmwareUpdateTarget"),currentTopology:t,targetTopology:n,currentConnection:r,targetConnection:r,currentLabel:Mo(t),targetLabel:Mo(n),currentBuildLabel:Po(t,r),targetBuildLabel:Po(n,r)}}function No(e=o.updateTestFirmwarePr){const t=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(t)?t:""}function jn(){const e=Vn(),t=Z(),n=Pt(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||t!=="single"&&t!=="duo"||!a.connections.includes(n))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};const i=`openquatt-${a.slug}-${t}-${n}`,l=t==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,md5FileName:`${i}.firmware.ota.bin.md5`,label:`${a.label} ${l} ${Ie(n)}`}}function ya(e=No(),t=jn()){if(!e||!t.available)return null;const r=`${`https://github.com/jeroen85/OpenQuatt/releases/download/pr-${e}`}/${t.otaFileName}`;return{otaUrl:r,md5Url:`${r}.md5`,releaseApiUrl:`https://api.github.com/repos/jeroen85/OpenQuatt/releases/tags/pr-${e}`}}function sl(){const e=A("timeValid"),t=String(E("timeNowHhmm")||"").trim();if(t&&t!=="invalid")return t;if(v("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function ll(){return v("timeValid")&&!A("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${sl()}`}function an(e){if(!Number.isFinite(e)||e<0)return"\u2014";const t=Math.floor(e),n=Math.floor(t/1440),r=Math.floor(t%1440/60),a=t%60;return n>0?`${n}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function cp(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function up(e){const t=e?.state;if(t!==""&&t!==null&&t!==void 0){const a=Number(t);if(Number.isFinite(a))return a}const n=e?.value,r=Number(n);return Number.isFinite(r)?r:NaN}function wa(){const e=up(o.entities.uptime);if(Number.isFinite(e)&&e>=0){const r=cp(o.entities.uptime);if(r==="d")return an(e*1440);if(r==="h")return an(e*60);if(r==="s")return an(e/60)}const t=String(o.entities.uptimeReadable?.state??o.entities.uptimeReadable?.value??"").trim();if(t&&t.toLowerCase()!=="unknown")return t;const n=Number(bt().bootedAt);return!Number.isFinite(n)||n<=0?"\u2014":an((Date.now()-n)/6e4)}function Sa(){const e=String(o.entities.ipAddress?.state??o.entities.ipAddress?.value??"").trim();if(e)return e;const t=String(bt().ipAddress||"").trim();return t||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function jo(){if($e())return"Controleren";const e=Ze();if(e)return e.phaseLabel;if(Ca())return"Bijgewerkt";if(Gt())return"Bezig";if(io())return"Beschikbaar";const t=ul();if(t!==null&&t<=0)return"Actueel";const n=bt();return typeof n.updateLabel=="string"&&n.updateLabel.trim()?n.updateLabel.trim():n.updateAvailable===!0?"Beschikbaar":n.updateAvailable===!1||Ea()?"Actueel":ie()?"Nog niet gecontroleerd":"\u2014"}function ie(){return o.entities.firmwareUpdate||null}function _n(){const e=ie();return e?String(e.state??e.value??"").trim().toLowerCase():""}function dp(){const e=o.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function Kn(){return dp().toLowerCase()}function cl(){const e=o.entities.firmwareUpdateProgress;if(!e)return Number.NaN;const t=Number(e.value??e.state);return Number.isNaN(t)?Number.NaN:Math.max(0,Math.min(100,t))}function qa(){const e=String(o.updateInstallTargetVersion||"").trim(),t=oe();return!e||!t?!1:Ko(t,e)>=0}function pp(e=ie()||{}){const t=Ht(e),n=oe(e);return!t||!n?!1:Ko(n,t)>=0}function ka(){return(qa()||pp())&&!$e()&&!Co()&&!io()}function Ca(){return(o.updateInstallCompleted||ka())&&!$e()&&!Ze()&&!io()}function _o(){o.updateInstallBusy=!1,o.updateInstallTargetVersion="",o.updateInstallPhaseHint="",o.updateInstallProgressHint=Number.NaN,o.updateInstallMode="",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",yp()}function fe(){o.updateManualUploadFile=null,o.updateManualUploadFileName="",o.updateManualUploadError=""}function De(e={}){e.clearPr&&(o.updateTestFirmwarePr=""),o.updateTestFirmwareConfirmed=!1,o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null}function gp(){const e=Kn(),t=cl();if(e==="starting"||e==="uploading"||e==="rebooting"){o.updateInstallPhaseHint=e,Number.isNaN(t)||(o.updateInstallProgressHint=e==="rebooting"?Math.max(t,100):t);return}if(o.updateInstallBusy){if(qa()){o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100;return}o.controlNotice.includes("opnieuw is opgestart")&&(o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100)}}function Co(){const e=Kn();return e==="starting"||e==="uploading"||e==="rebooting"}function Ze(){gp();const e=Kn(),t=e==="starting"||e==="uploading"||e==="rebooting",n=t?e:o.updateInstallPhaseHint,r=cl(),a=Number.isNaN(o.updateInstallProgressHint)?0:Math.round(o.updateInstallProgressHint),i=t&&!Number.isNaN(r)?Math.round(r):a;return!Co()&&!o.updateInstallBusy?null:n==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:o.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":o.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":o.updateInstallMode==="topology-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna met de gekozen opstelling terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:n==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${Me()} gedownload en ge\xEFnstalleerd.`:o.updateInstallMode==="connection-switch"?`De ${Ie(o.updateInstallTargetConnection)}-build wordt nu naar ${Me()} verzonden.`:o.updateInstallMode==="topology-switch"?`De ${Po(o.updateInstallTargetTopology,o.updateInstallTargetConnection)}-build wordt nu naar ${Me()} verzonden.`:`Firmware wordt nu naar ${Me()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${Me()}.`:o.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${Ie(o.updateInstallTargetConnection)} is gestart.`:o.updateInstallMode==="topology-switch"?`Opstellingswissel naar ${Mo(o.updateInstallTargetTopology)} is gestart.`:`OTA-update is gestart voor ${Me()}.`}}function Ht(e=ie()||{}){const t=String(e.latest_version||"").trim();if(t)return t;const n=String(e.value||"").trim(),r=String(e.current_version||"").trim();return n&&n!==r&&/^v/i.test(n)?n:""}function oe(e=ie()||{}){const t=String(o.entities.projectVersionText?.state||o.entities.projectVersionText?.value||"").trim();return t||String(e.current_version||"").trim()}function mp(e=ie()||{}){const t=oe(e),n=String(e.current_version||"").trim();return!t||!n||t===n?!1:Ko(t,n)>0}function Ta(e=ie()||{},t=pt()){const n=String(t||"").trim().toLowerCase(),r=String(e.release_url||"").trim().toLowerCase(),a=Ht(e).toLowerCase();if(!n||n==="\u2014")return!0;if(n==="dev"){if(r){if(r.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(n==="main"){if(r){if(r.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function Oi(e){const n=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return n?{major:Number(n[1]),minor:Number(n[2]),patch:Number(n[3]),prereleaseTag:n[4]||"",prereleaseNumber:n[5]?Number(n[5]):null}:null}function Ko(e,t){const n=Oi(e),r=Oi(t);if(!n||!r)return 0;if(n.major!==r.major)return n.major>r.major?1:-1;if(n.minor!==r.minor)return n.minor>r.minor?1:-1;if(n.patch!==r.patch)return n.patch>r.patch?1:-1;const a=!n.prereleaseTag,i=!r.prereleaseTag;return a!==i?a?1:-1:n.prereleaseTag!==r.prereleaseTag?n.prereleaseTag>r.prereleaseTag?1:-1:n.prereleaseNumber!==r.prereleaseNumber?(n.prereleaseNumber||0)>(r.prereleaseNumber||0)?1:-1:0}function Gt(){if(ka())return!1;const e=_n();return o.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function $e(){const e=_n();return o.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function io(){const e=_n();if(!Ta())return!1;const t=ul();return t!==null?t>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:bt().updateAvailable===!0}function Ea(){const e=_n();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||mp()}function $a(){const e=ie()||{},t=oe(e)||"\u2014";let n=Ta(e)?Ht(e):"";const r=n?Ko(n,t):null;return!$e()&&r!==null&&r<=0&&(n=""),{current:t,latest:n||"\u2014"}}function ul(){const{current:e,latest:t}=$a();return e==="\u2014"||t==="\u2014"?null:Ko(t,e)}function dl(e=pt()){const t=String(e||"").trim().toLowerCase();return Pi[t]||Pi.main}function hp(){const e=String((ie()||{}).release_url||"").trim(),t=dl();return!e||t.includes("/dev-latest")&&!e.includes("/dev-latest")||!t.includes("/dev-latest")&&e.includes("/dev-latest")?t:e}function fp(){return Me()}function pt(){return String(E("firmwareUpdateChannel")||o.entities.releaseChannelText?.state||o.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function bp(){return $a().latest!=="\u2014"}function xi(e){return String(e||"").toLowerCase().replace(/wi[\s-]?fi/g,"wifi").replace(/[^a-z0-9]+/g,"")}function vp(e,t=ie()||{}){const n=xi(e);return n?xi(`${t.title||""} ${t.summary||""}`).includes(n):!0}function pl(e){return new Promise(t=>window.setTimeout(t,e))}function gl(e=Date.now()){return Number(o.firmwareOtaQuietUntil||0)>e}function Un(e=Bo){const n=Date.now()+e;o.firmwareOtaQuietUntil=Math.max(Number(o.firmwareOtaQuietUntil||0),n),o.pendingEntitySyncOptions=null,da(),typeof Ge=="function"&&Ge(),o.firmwareOtaQuietTimer&&window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=window.setTimeout(()=>{o.firmwareOtaQuietTimer=null,o.firmwareOtaQuietUntil=0,!o.updateInstallBusy&&!o.nativeOpen&&Bn()},e)}function yp(){o.firmwareOtaQuietTimer&&(window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=null),o.firmwareOtaQuietUntil=0,o.nativeOpen||Bn()}const wp=1500;function Aa(){o.deviceReconnectRecoveryTimer&&(window.clearTimeout(o.deviceReconnectRecoveryTimer),o.deviceReconnectRecoveryTimer=null)}function Nt(){return Number(o.deviceReconnectRecoveryStartedAt||0)>0}function Sp(){return Nt()?Number(o.deviceReconnectRecoveryStartedAt||0):Number(o.deviceReconnectStartedAt||0)}function qp(){return Nt()?"Gegevens verversen":"Wachten op gegevens"}function kp(){const e=Sp(),t=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return Nt()?t>0?`${t}s aan het verversen`:"Net weer online":t>0?`${t}s bezig`:"Net gestart"}function Fi(){if(!o.deviceReconnectMode||Nt())return!1;Aa(),o.deviceReconnectRecoveryStartedAt=Date.now(),o.deviceReconnectLastError="",o.entitySyncFailureCount=0;const e=o.deviceReconnectRecoveryStartedAt;return o.deviceReconnectRecoveryTimer=window.setTimeout(()=>{o.deviceReconnectMode&&Number(o.deviceReconnectRecoveryStartedAt||0)===e&&(ml(),m())},wp),m(),!0}function Ha(e="reconnect",t=""){o.deviceReconnectMode||(o.deviceReconnectStartedAt=Date.now()),Aa(),o.deviceReconnectMode=e,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError=t?String(t):o.deviceReconnectLastError,o.systemModal="",o.updateModalOpen=!1,o.controlError=""}function ml(){Aa(),!(!o.deviceReconnectMode&&!o.entitySyncFailureCount)&&(o.deviceReconnectMode="",o.deviceReconnectStartedAt=0,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError="",o.entitySyncFailureCount=0)}function Cp(){return Nt()?"OpenQuatt is weer online":o.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":o.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function Tp(){return Nt()?o.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":o.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":o.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function Ep(){return o.deviceReconnectMode?`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="reconnect">
        <section class="oq-helper-modal oq-helper-modal--reconnect" role="status" aria-live="polite" aria-labelledby="oq-reconnect-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-reconnect-modal-title">${s(Cp())}</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">${s(Tp())}</p>
          <div class="oq-helper-reconnect-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>${s(qp())}</strong>
              <span>${s(kp())}</span>
            </div>
          </div>
        </section>
      </div>
    `:""}function Ma(e=pt()){const t=ie()||{},n=oe(t);o.entities.firmwareUpdate={...t,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:dl(e),current_version:n}}async function Pa(e={}){const t=String(e.expectedBuildLabel||"").trim();for(let n=0;n<6;n+=1){await pl(n===0?900:1200),await I(ia,"all",{forceMissing:!0});const r=Ta(),a=!t||vp(t),i=bp(),l=$e(),u=jo();if(r&&a&&(i||!l&&u!=="Nog niet gecontroleerd"))return!0}return!1}async function Uo(e={}){let t=!1;const n=Number.isFinite(Number(e.initialDelayMs))?Math.max(0,Number(e.initialDelayMs)):700,r=Number.isFinite(Number(e.pollDelayMs))?Math.max(250,Number(e.pollDelayMs)):1e3;for(let a=0;a<45;a+=1){await pl(a===0?n:r);try{if(await I(ia,"all",{forceMissing:!0}),Kn()==="rebooting"&&Ha("ota"),m(),o.updateInstallMode==="connection-switch"){const i=al(o.updateInstallTargetConnection);if(i&&Pt()===i&&!Co()&&!Gt())return!0}else if(o.updateInstallMode==="topology-switch"){const i=Cn(o.updateInstallTargetTopology);if(i&&Z()===i&&!Co()&&!Gt())return!0}else if(qa()||ka()||Ea()&&!Co()&&!Gt())return!0}catch{t||(o.controlNotice="Wachten tot het device opnieuw is opgestart...",m(),t=!0)}}return!1}function $p(){const e=pt(),t=Ze();if(t)return t.copy;if(Ca()){const n=o.updateInstallCompletedVersion||oe()||pt();return`${Me()} draait nu op ${n}.`}return Gt()?`OTA-update wordt voorbereid voor ${Me()}. Het device kan kort herstarten.`:$e()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:io()?"Er staat een nieuwere firmware klaar.":Ea()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function hl(){return!!(o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen)}function sn(e,t,n,r,a=!1){return`
      <button
        class="oq-firmware-advanced-option${r?" is-active":""}"
        type="button"
        data-oq-action="${s(e)}"
        aria-pressed="${r?"true":"false"}"
        ${a?"disabled":""}
      >
        <strong>${s(t)}</strong>
        <span>${s(n)}</span>
      </button>
    `}function Ap(e,t,n,r){if(!hl())return"";const i=!!(Ze()||o.updateInstallBusy||$e());return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle oq-firmware-advanced-panel">
        <div class="oq-firmware-advanced-head">
          <div>
            <strong>Geavanceerd</strong>
            <span>Gebruik deze opties alleen als je bewust van de normale OTA-flow afwijkt.</span>
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-firmware-advanced-hide" type="button" data-oq-action="toggle-firmware-advanced" ${i?"disabled":""}>Verbergen</button>
        </div>
        <div class="oq-firmware-advanced-options">
          ${e?sn("toggle-firmware-connection-switch","Verbinding wisselen",`Naar ${t.targetLabel}`,o.firmwareConnectionSwitchOpen,i):""}
          ${n?sn("toggle-firmware-topology-switch","Opstelling wisselen",`Naar ${r.targetLabel}`,o.firmwareTopologySwitchOpen,i):""}
          ${sn("toggle-firmware-upload","Handmatige upload","Lokaal OTA-bestand",o.updateManualUploadOpen,i)}
          ${sn("toggle-firmware-test","Testfirmware","PR-release installeren",o.updateTestFirmwareOpen,i)}
        </div>
        ${Hp()}
        ${Mp()}
        ${Np()}
        ${Pp()}
      </div>
    `}function Hp(){const e=ba();if(!e||!o.firmwareConnectionSwitchOpen)return"";const n=!!(Ze()||o.updateInstallBusy||$e()),r=!!o.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",u=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s(pt())}-build voor de andere netwerkverbinding.</span>
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
        ${u}
        <label class="oq-helper-modal-check">
          <input type="checkbox" data-oq-firmware-connection-confirm="true" ${r?"checked":""} ${n||i?"disabled":""}>
          <span>${s(a?"De netwerkkabel is aangesloten.":"Ik begrijp dat Ethernet na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-firmware-advanced-footer">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-connection-switch"
            ${n||i||!r?"disabled":""}
          >
            ${s(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function Mp(){const e=va();if(!e||!o.firmwareTopologySwitchOpen)return"";const n=!!(Ze()||o.updateInstallBusy||$e()),r=!!o.firmwareTopologySwitchConfirmed,a=!e.canSwitch,i=e.targetTopology==="duo",l=i?"Controleer eerst dat de tweede warmtepomp is aangesloten en geconfigureerd. Na de herstart bevat deze firmware HP2-regeling en HP2-diagnostiek.":"Na de herstart verdwijnt HP2-regeling en HP2-diagnostiek uit deze firmware. Gebruik dit alleen als deze controller als Single-installatie verder moet draaien.",u=a?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Opstellingswissel vereist firmware met de target-optie alternate topology. Werk eerst normaal bij als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Opstelling wisselen</strong>
          <span>Installeer dezelfde ${s(pt())}-build voor de andere Single/Duo-opstelling.</span>
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
        ${u}
        <label class="oq-helper-modal-check">
          <input type="checkbox" data-oq-firmware-topology-confirm="true" ${r?"checked":""} ${n||a?"disabled":""}>
          <span>${s(i?"De tweede warmtepomp is aangesloten en hoort bij deze controller.":"Ik begrijp dat HP2-bediening na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-firmware-advanced-footer">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-topology-switch"
            ${n||a||!r?"disabled":""}
          >
            ${s(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function Pp(){if(!o.updateTestFirmwareOpen)return"";const t=!!(Ze()||o.updateInstallBusy||$e()),n=No(),r=jn(),a=ya(n,r),i=!!(r.available&&v("firmwareTestOtaUrl")&&v("firmwareTestOtaMd5Url")&&v("installFirmwareTestOta")),l=!!(n&&i),u=o.updateTestFirmwareBuild||null,d=r.available?r.label:r.error,c=a?r.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
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
              value="${s(o.updateTestFirmwarePr||"")}"
              data-oq-firmware-test-pr="true"
              ${t?"disabled":""}
            >
          </label>
          <div class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">Doelbuild</span>
            <strong class="oq-helper-modal-value">${s(d)}</strong>
          </div>
          <div class="oq-firmware-advanced-card oq-firmware-test-card--asset">
            <span class="oq-helper-modal-label">OTA-bestand</span>
            <strong class="oq-helper-modal-value" data-oq-firmware-test-asset-note="true">${s(c)}</strong>
          </div>
          ${u?`
            <div class="oq-firmware-advanced-card oq-firmware-test-card--build" data-oq-firmware-test-build-row="true">
              <span class="oq-helper-modal-label">Build</span>
              <strong class="oq-helper-modal-value">${s(u)}</strong>
            </div>
          `:""}
        </div>
        <p class="oq-helper-modal-note oq-firmware-test-note">De webapp zet alleen de URL klaar; het device downloadt en flasht daarna zelf via dezelfde OTA-backend.</p>
        ${i?"":`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(r.available?"Deze firmware mist de testfirmware-bediening. Installeer eerst een nieuwere build.":r.error)}</p>`}
        ${o.updateTestFirmwareError?`<p class="oq-helper-modal-note oq-helper-modal-note--error" data-oq-firmware-test-runtime-error="true">${s(o.updateTestFirmwareError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <label class="oq-helper-modal-check oq-firmware-advanced-check">
            <input type="checkbox" data-oq-firmware-test-confirm="true" ${o.updateTestFirmwareConfirmed?"checked":""} ${t||!i?"disabled":""}>
            <span>Ik begrijp dat dit testfirmware uit een PR is.</span>
          </label>
          <button class="oq-helper-button" type="button" data-oq-action="install-firmware-test" ${t||!l||!o.updateTestFirmwareConfirmed?"disabled":""}>PR-firmware installeren</button>
        </div>
      </div>
    `}function Np(){if(!o.updateManualUploadOpen)return"";const t=!!(Ze()||o.updateInstallBusy||$e()),n=String(o.updateManualUploadFileName||o.updateManualUploadFile?.name||"").trim();return`
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
          <span class="oq-helper-modal-subvalue">${s(n?`Gekozen bestand: ${n}`:"Nog geen bestand gekozen")}</span>
        </div>
        <p class="oq-helper-modal-note">De upload gebruikt dezelfde OTA-flow als de normale update. Laat deze pagina open tot het device weer terug is.</p>
        ${o.updateManualUploadError?`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.updateManualUploadError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <button class="oq-helper-button" type="button" data-oq-action="upload-firmware-file" ${t||!o.updateManualUploadFile?"disabled":""}>Upload en installeer</button>
        </div>
      </div>
    `}function Lr(){return[o.interfacePanelOpen?"open":"closed",o.nativeOpen?"native":"app",o.appView,o.complete?"complete":"incomplete",o.overviewTheme,o.hpVisualMode,re("installationTopology"),re("hardwareProfileText"),re("connectionText"),o.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",o.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",o.firmwareTopologySwitchOpen?"topology-open":"topology-closed",o.updateManualUploadOpen?"upload-open":"upload-closed",o.updateTestFirmwareOpen?"test-open":"test-closed",o.updateTestFirmwareError,re("hpGeneration"),re("projectVersionText"),re("releaseChannelText"),Na()].join("|")}function Na(){const e=Math.max(Number(o.lastEntityResponseAt||0),Number(o.lastEntitySyncAt||0)),t=Number(o.deviceReconnectStartedAt||0);return o.entitySyncFailureCount>0&&!o.deviceReconnectMode?"Bezig":e>0&&(!o.deviceReconnectMode||e>=t)?"Verbonden":o.deviceReconnectMode?Nt()?"Verbonden":o.deviceReconnectMode==="reconnect"?"Offline":"Bezig":v("status")&&!A("status")?"Offline":"Bezig"}function fl(){return String(E("projectVersionText")||"").trim()||"\u2014"}function Rp(){const e=fl();return e&&e!=="\u2014"?e:jo()}function bl(){const e=o.entities.espInternalTemp;if(!e)return"\u2014";const t=H("espInternalTemp");return Number.isNaN(t)?B("espInternalTemp"):D(t,1,e.uom||" \xB0C")}function Ra(){const e=o.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function Lp(){return"Login"}function Op(){const e=o.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function La(){const e=o.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function xp(){return"ESPHome API encryption"}function Fp(){const e=o.apiSecurityStatus;return e?e.pending_restart?"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.key?"De sleutel blijft opgeslagen, ook wanneer encryptie uit staat. Je kunt hem hier meteen kopi\xEBren of opnieuw inschakelen.":"Er is nog geen API-sleutel opgeslagen. Deze wijziging wordt actief na herstart.":"We halen de huidige API-beveiliging op."}function Dp(){const e=o.apiSecurityStatus;return e?e.enabled?"Uitschakelen":"Inschakelen":"Laden..."}function Ip(){const e=o.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function Di(e,t,n="",r=!1){return`
      <div class="oq-helper-modal-row${r?" oq-helper-modal-row--loading":""}">
        <span class="oq-helper-modal-label">${s(e)}</span>
        <strong class="oq-helper-modal-value">${r?`
          <span class="oq-helper-modal-loading">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <span>${s(t)}</span>
          </span>
        `:s(t)}</strong>
      ${n?`<span class="oq-helper-modal-subvalue">${s(n)}</span>`:""}
    </div>
    `}function Wp(){const e=o.apiSecurityStatus||{},t=e.enabled===!0,n=!!e.key,r=!!e.pending_restart,a=o.apiSecurityNotice,i=o.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.apiSecurityError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${s(xp())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(Fp())}</p>
          ${a?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(a)}</span></div>`:""}
          ${i}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(Za())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(Xa())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${t?"disable-api-security":"enable-api-security"}"
                ${o.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${s(Dp())}
              </button>
            </div>
            <div class="oq-settings-api-security-key">
              <div class="oq-settings-field-head">
                <h3>API-sleutel</h3>
              </div>
              <p class="oq-settings-action-note">${s(r?n?"Deze sleutel is opgeslagen. Kopieer hem nu en kies daarna Opslaan en herstarten.":"Inschakelen maakt direct een nieuwe sleutel aan. Deze wijziging wordt actief na herstart.":e.transport_active?"Gebruik deze sleutel in Home Assistant voor de ESPHome-integratie.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.")}</p>
              ${n?`<div class="oq-settings-api-security-key-row"><div class="oq-settings-api-security-key-value">${s(e.key)}</div></div>`:""}
              ${n?`
                  <div class="oq-settings-api-security-actions">
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="rotate-api-security"
                      ${o.apiSecurityBusy||!e.csrf_token?"disabled":""}
                    >
                      ${s(Ip())}
                    </button>
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="copy-api-security-key"
                      ${o.apiSecurityBusy?"disabled":""}
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
                ${o.apiSecurityBusy?"disabled":""}
              >
                Opslaan en herstarten
              </button>
            `:""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.apiSecurityBusy?"disabled":""}>Gereed</button>
          </div>
        </section>
      </div>
    `}function Bp(){const e=[["Netwerkstatus",Na()],["IP-adres",Sa()]],t=String(E("wifiSsid")||"").trim();t&&e.push(["WiFi SSID",t]);const n=o.entities.wifiSignal;if(n){const r=H("wifiSignal");Number.isNaN(r)||e.push(["WiFi signaal",D(r,0,n.uom||" dBm")])}return e}function vl(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="webserverLog"?"open-webserver-log-modal":e==="login"?"open-login-modal":""}function yl(){return[["installation","Installatie",Vo()],["uptime","Uptime",wa()],["connectivity","Connectiviteit",Na()],["time","Tijd",sl()],["version","Versie",Rp(),!!ie()],["debugRecording","Debugopname",Kh(),!0],["webserverLog","Logboek",sc(),!0]]}function wl(){return io()}function Sl(e){return e==="version"&&wl()}function qo(){return`
      <div class="oq-helper-status-grid">
        ${yl().map(([t,n,r,a])=>{const i=vl(t),l=!!(a||i),u=Sl(t);return`
          <${l?"button":"div"}
            class="oq-helper-status-item${l?" oq-helper-status-item--button":""}${u?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${s(t)}"
            ${l?`type="button" data-oq-action="${s(i)}"`:""}
          >
            <span class="oq-helper-status-label">${s(n)}</span>
            <strong class="oq-helper-status-value">${u?`<span class="oq-helper-status-value-text">${s(r)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(r)}</strong>
          </${l?"button":"div"}>
        `}).join("")}
      </div>
    `}function Or(){if(!o.root)return!1;const e=o.root.querySelector(".oq-helper-status-grid");if(!e)return!!o.root.querySelector(".oq-helper-hub");const t=yl();if(e.querySelectorAll("[data-oq-header-status]").length!==t.length)return e.outerHTML=qo(),!0;for(const[r,a,i,l]of t){const u=e.querySelector(`[data-oq-header-status="${r}"]`);if(!u)return e.outerHTML=qo(),!0;const d=vl(r),c=!!(l||d);if(u.tagName.toLowerCase()!==(c?"button":"div"))return e.outerHTML=qo(),!0;const g=u.querySelector(".oq-helper-status-label"),b=u.querySelector(".oq-helper-status-value");if(!g||!b)return e.outerHTML=qo(),!0;g.textContent!==a&&(g.textContent=a);const h=Sl(r),y=h?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);b.innerHTML!==y&&(b.innerHTML=y),c?u.setAttribute("data-oq-action",d):u.removeAttribute("data-oq-action"),u.classList.toggle("oq-helper-status-item--button",c),u.classList.toggle("oq-helper-status-item--attention",h)}return!0}function Vp(){const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;return!e||typeof e.render!="function"?"":e.render()}function Ii(){const e=Vp();return e?o.devPanelOpen?`
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
      `:""}function jp(){const e=o.nativeOpen?"native":"app",t=wl();return o.interfacePanelOpen?`
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
              ${o.overviewTheme==="light"?"Donkere modus":"Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${qo()}
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
            ${Sc()}
            <button
              class="oq-helper-hub-toggle${t?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >${oa("more-horizontal","oq-helper-hub-toggle-icon")}${t?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function _p(){if(!o.root)return;if(o.interfacePanelOpen){o.root.querySelector(".oq-debug-recording-header-status")?.remove(),Or();return}const e=o.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;const t=e.querySelector(".oq-debug-recording-header-status"),n=Sc();if(!n){t?.remove();return}if(t){t.outerHTML=n;return}e.insertAdjacentHTML("afterbegin",n)}function Kp(){const e=o.nativeOpen?"native":"app",t=o.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",n=o.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(o.controlError)}</p>`:"";return`
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
          ${n}
        </div>
      </div>
    `}function Up(){const e=o.authStatus||{},t=e.enabled===!0,n=e.setup_window_active===!0,r=t||n,a=t?String(e.username||"").trim():"",i=o.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(o.authNotice)}</span></div>`:"",l=o.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.authError)}</div>`:"",d=r?`
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
                  value="${s(o.authDraftCurrentPassword)}"
                  ${o.authBusy?"disabled":""}
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
              value="${s(o.authDraftUsername)}"
              ${o.authBusy?"disabled":""}
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
              value="${s(o.authDraftNewPassword)}"
              ${o.authBusy?"disabled":""}
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
              value="${s(o.authDraftConfirmPassword)}"
              ${o.authBusy?"disabled":""}
            >
          </label>
        </div>
      `:`
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-login-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${s(Lp())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(Op())}</p>
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${Di("Beveiligingsstatus",Ra(),La())}
            ${Di("Gebruiker",t?a||"Geen naam":"Geen login",t?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${d}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.authBusy?"disabled":""}>Gereed</button>
            ${t?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${o.authBusy?"disabled":""}>Uitzetten</button>`:""}
            ${r?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${o.authBusy?"disabled":""}>${t?"Opslaan":"Login opslaan"}</button>`:""}
          </div>
        </section>
      </div>
    `}function zp(){if(!o.updateModalOpen)return"";const e=ie(),t=o.entities.firmwareUpdateChannel||null,{current:n,latest:r}=$a(),a=$e(),i=Gt(),l=io(),u=$p(),d=Ze(),c=Ca(),g=hp(),b=c?"Firmware-update afgerond":d||i?"Firmware-update bezig":a?"Controleren op firmware-update":fp(),h=t?Array.isArray(t.option)?t.option:Array.isArray(t.options)?t.options:[]:[],y=ba(),p=va(),f=!!(y&&!c),S=!!(p&&!c);return`
      <div class="oq-helper-modal-backdrop${a||i||d?" is-busy":""}${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal oq-helper-modal--firmware oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${s(b)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(u)}</p>
          ${c?`
            <div class="oq-helper-modal-success" aria-live="polite">
              <strong>Bijgewerkt</strong>
              <span>De nieuwe firmware draait nu op het device.</span>
            </div>
          `:""}
          ${d?`
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${s(d.phaseLabel)}</strong>
                <span>${s(`${d.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,d.percent))}%"></span>
              </div>
            </div>
          `:""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${s(jo())}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige versie</span>
              <strong class="oq-helper-modal-value">${s(n)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Beschikbare versie</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Kanaal</span>
              <strong class="oq-helper-modal-value">${s(pt())}</strong>
            </div>
          </div>
          ${h.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${h.map(w=>`
                  <option value="${s(w)}" ${String(E("firmwareUpdateChannel")||"")===w?"selected":""}>${s(w)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||d?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${c?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||d||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${g?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(g)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${hl()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||d?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${Ap(f,y,S,p)}
        </section>
      </div>
    `}function Gp(){if(o.systemModal==="login")return Up();if(o.systemModal==="api-security")return Wp();if(o.systemModal==="connectivity"){const e=Bp();return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              ${e.map(([t,n])=>`
                <div class="oq-helper-modal-row">
                  <span class="oq-helper-modal-label">${s(t)}</span>
                  <strong class="oq-helper-modal-value">${s(n)}</strong>
                </div>
              `).join("")}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(o.systemModal==="settings-backup-restore")return fb();if(o.systemModal==="settings-backup-import")return hb();if(o.systemModal==="history-storage")return lb();if(String(o.systemModal||"").startsWith("service-task-"))return tb();if(o.systemModal==="settings-backup-success"){const e=o.controlNotice||"Backup hersteld.";return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
      `}if(o.systemModal==="restart-confirm"){const e=o.busyAction==="restartAction";return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
      `}if(o.systemModal==="silent-settings")return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              ${wb()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;if(o.systemModal==="webserver-logs")return _h();if(o.systemModal==="debug-recording")return mf();if(o.systemModal==="openquatt-pause"){const e=A("openquattEnabled"),t=o.busyAction==="openquatt-regulation",n=v("openquattResumeAt"),r=o.loadingEntities||o.entitySyncInFlight,a=n||!r,i=Oa(),l=xa(E("openquattResumeAt")),u=Cl();return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
            ${a?n?`
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
                        value="${s(u)}"
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
      `}return""}function E(e){if(Object.prototype.hasOwnProperty.call(o.drafts,e))return o.drafts[e];const t=o.entities[e];return t?t.value??t.state??"":""}function Xe(e){const t=o.entities[e]||{};return{min:Number(t.min_value??0),max:Number(t.max_value??100),step:Number(t.step??1),uom:t.uom||""}}function Le(e){return Object.prototype.hasOwnProperty.call(o.inputDrafts,e)?o.inputDrafts[e]:E(e)}function Ye(e){if(typeof e=="number")return e;const t=String(e??"").trim().replace(",",".");return!t||t==="-"||t==="."||t==="-."?Number.NaN:Number(t)}function so(e){const t=String(e||"").trim();if(!t)return"";const n=t.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!n)return"";const r=Number(n[1]),a=Number(n[2]),i=Number(n[3]||"0");return[r,a,i].some(l=>Number.isNaN(l))||r<0||r>23||a<0||a>59||i<0||i>59?"":`${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function xr(e){const t=so(e);return t?t.slice(0,5):""}function et(e){const t=String(e||"").trim();if(!t)return"";const n=t.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!n)return"";const r=Number(n[1]),a=Number(n[2]),i=Number(n[3]),l=Number(n[4]),u=Number(n[5]),d=Number(n[6]||"0");return[r,a,i,l,u,d].some(c=>Number.isNaN(c))||r<2e3||a<1||a>12||i<1||i>31||l<0||l>23||u<0||u>59||d<0||d>59?"":`${String(r).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(u).padStart(2,"0")}:${String(d).padStart(2,"0")}`}function Fr(e){const t=et(e);return!t||t===Ao?"":t.slice(0,16).replace(" ","T")}function ql(e){const t=et(e);if(!t||t===Ao)return null;const n=t.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!n)return null;const r=Number(n[1]),a=Number(n[2]),i=Number(n[3]),l=Number(n[4]),u=Number(n[5]),d=Number(n[6]),c=new Date(r,a-1,i,l,u,d,0);return Number.isNaN(c.getTime())?null:c}function Oa(e=E("openquattResumeAt")){return!!ql(e)}function xa(e,t=!1){const n=ql(e);return n?new Intl.DateTimeFormat("nl-NL",t?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(n):""}function Wi(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${t}-${n}-${r}T${a}:${i}`}function Qp(e){const t=new Date(e.getTime());t.setSeconds(0,0);const n=t.getMinutes(),r=n%15;return r!==0&&t.setMinutes(n+(15-r)),t}function kl(e){const t=new Date;if(e==="2h"||e==="8h"){const n=e==="2h"?2:8,r=Qp(new Date(t.getTime()+n*3600*1e3));return Wi(r)}if(e==="tomorrow-morning"){const n=new Date(t);return n.setDate(n.getDate()+1),n.setHours(7,0,0,0),Wi(n)}return""}function Cl(){const e=Fr(o.pauseResumeDraft);if(e)return e;const t=Fr(E("openquattResumeAt"));return t||kl("2h")}function Rt(){return[...new Set(["setupComplete",...Qs])]}const Fa=["trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites"];function To(){return[...new Set(Fa)]}async function Da(e={}){await I(To(),"all",{concurrency:Ln,forceMissing:e.forceMissing===!0}),await Mt({force:e.forceEnergyHistory===!0,metaOnly:!0})}function ko(e=[250,1e3,2500]){e.forEach(t=>{window.setTimeout(()=>{o.nativeOpen||o.appView!=="settings"||Da({forceMissing:t===0}).finally(()=>{o.appView==="settings"&&o.mounted&&!o.nativeOpen&&m()})},t)})}const Yp="@schema|openquatt.energy_history_import.v1",Jp=850,Tn=[{id:"days",label:"Alleen dagtotalen",fileLabel:"daily"},{id:"days_and_hours",label:"Dagtotalen + uurdetail",fileLabel:"daily-hourly"},{id:"hours",label:"Alleen uurdetail",fileLabel:"hourly"}],Zp={forbidden:"Beveiligingstoken ontbreekt of is verlopen. Vernieuw de pagina en probeer opnieuw.",partition_unavailable:"Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",time_unavailable:"De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",empty_records:"Er zijn geen records verstuurd.",payload_too_large:"Deze importbatch is te groot. Probeer het bestand opnieuw te importeren."},Ae={electricalInput:["electrical_input_wh","electricalInputWh","energy_hp_electric","hpElectric","hp_electric_wh","total_hp_electric_wh","totalHpElectric"],heatingInput:["heating_input_wh","heatingInputWh"],coolingInput:["cooling_input_wh","coolingInputWh"],heatpumpHeatOutput:["heatpump_heat_output_wh","heatpumpHeatOutputWh","energy_hp_heat","hpHeat","hp_heat_wh","total_hp_heat_wh","totalHpHeat"],heatpumpCoolingOutput:["heatpump_cooling_output_wh","heatpumpCoolingOutputWh","energy_hp_cooling","hpCooling","hp_cooling_wh","total_hp_cooling_wh","totalHpCooling"],boilerHeatOutput:["boiler_heat_output_wh","boilerHeatOutputWh","energy_boiler_heat","boilerHeat","boiler_heat_wh","total_boiler_heat_wh","totalBoilerHeat"],systemHeatOutput:["system_heat_output_wh","systemHeatOutputWh"]};function zn(e){const t=String(e||"").trim();return Tn.some(n=>n.id===t)?t:"days_and_hours"}function Tl(e){const t=zn(e);return Tn.find(n=>n.id===t)||Tn[1]}function Xp(e){const t=Tl(e),n=new Date().toISOString().slice(0,10);return`openquatt-energy-history-${t.fileLabel}-${n}.json`}function eg(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.style.display="none",document.body.appendChild(r),r.click(),window.setTimeout(()=>{URL.revokeObjectURL(n),r.remove()},0)}async function tg(){if(o.energyHistoryExportBusy)return;const e=zn(o.energyHistoryExportMode),t=Tl(e);if(o.energyHistoryExportMode=e,o.energyHistoryExportBusy=!0,o.energyHistoryExportError="",o.energyHistoryExportNotice="",m(),zo()){o.energyHistoryExportBusy=!1,o.energyHistoryExportNotice=`Preview: ${t.label.toLowerCase()} zou als JSON worden gedownload.`,m();return}try{const n=await fetch(`${Je()}/energy/history/export?mode=${encodeURIComponent(e)}`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.blob();eg(r,Xp(e)),o.energyHistoryExportNotice=`${t.label} ge\xEBxporteerd.`}catch(n){o.energyHistoryExportError=`Exporteren mislukt. ${n.message}`}finally{o.energyHistoryExportBusy=!1,m()}}function El(e=!1){const t=e?o.energyHistoryImportNotice:"";o.energyHistoryImportFileName="",o.energyHistoryImportSource="",o.energyHistoryImportRange="",o.energyHistoryImportRecords=[],o.energyHistoryImportHourRecords=[],o.energyHistoryImportDuplicateCount=0,o.energyHistoryImportSkippedCount=0,o.energyHistoryImportInvalidCount=0,o.energyHistoryImportUnsupportedCount=0,o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,o.energyHistoryImportError="",o.energyHistoryImportNotice=t}function $l(e){if(e==null||e==="")return 0;const t=String(e).trim();let n=0,r=0,a=0;const i=t.match(/^(\d{4})(\d{2})(\d{2})$/),l=Al(t),u=t.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(i)n=Number(i[1]),r=Number(i[2]),a=Number(i[3]);else{if(l)return l.dateKey;if(u)n=Number(u[1]),r=Number(u[2]),a=Number(u[3]);else{const c=new Date(t);if(Number.isNaN(c.getTime()))return 0;n=c.getFullYear(),r=c.getMonth()+1,a=c.getDate()}}if(n<2020||n>2099||r<1||r>12||a<1||a>31)return 0;const d=new Date(Date.UTC(n,r-1,a));return d.getUTCFullYear()!==n||d.getUTCMonth()!==r-1||d.getUTCDate()!==a?0:n*1e4+r*100+a}function Bi(e){const t=String(Math.round(Number(e)||0)).padStart(8,"0");return/^\d{8}$/.test(t)?`${t.slice(6,8)}-${t.slice(4,6)}-${t.slice(0,4)}`:""}function Gn(e){return e.timestamp??e.time??e.datetime??e.date_time??e.dateTime}function Al(e){if(e==null||e==="")return null;const t=String(e).trim(),n=t.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{1,2})(?::(\d{2}))?(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i);if(!n)return null;const r=/(?:Z|[+-]\d{2}:?\d{2})$/i.test(t),a=Number(n[1]),i=Number(n[2]),l=Number(n[3]),u=Number(n[4]),d=Number(n[5]||"0"),c=Number(n[6]||"0");if([a,i,l,u,d,c].some(f=>Number.isNaN(f)))return null;const g=r?new Date(t):new Date(a,i-1,l,u,d,c,0);if(Number.isNaN(g.getTime()))return null;const b=g.getFullYear(),h=g.getMonth()+1,y=g.getDate(),p=g.getHours();return b<2020||b>2099||h<1||h>12||y<1||y>31?null:{dateKey:b*1e4+h*100+y,hour:p}}function Hl(e){if(e==null||e==="")return null;const t=Number(String(e).trim().replace(",","."));return!Number.isFinite(t)||t<0||t>=4294967295?null:Math.round(t)}function st(e,t,n=null){for(const r of t){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const a=Hl(e[r]);if(a!==null)return a}return n}function ln(e,t){return st(e,t)!==null}function Ml(e){const t=$l(e.date_key??e.dateKey??e.date??e.from??Gn(e));if(!t)return null;const n=st(e,Ae.electricalInput),r=st(e,Ae.heatpumpHeatOutput);if(n===null||r===null)return null;const a=st(e,Ae.heatingInput,n),i=st(e,Ae.coolingInput,0),l=st(e,Ae.heatpumpCoolingOutput,0),u=st(e,Ae.boilerHeatOutput,0),d=st(e,Ae.systemHeatOutput,r+u),c=ln(e,Ae.heatingInput)||ln(e,Ae.coolingInput)||ln(e,Ae.heatpumpCoolingOutput)||ln(e,Ae.systemHeatOutput);return[a,i,l,u,d].some(g=>g===null)?null:{dateKey:t,electricalInputWh:n,heatingInputWh:a,coolingInputWh:i,heatpumpHeatOutputWh:r,heatpumpCoolingOutputWh:l,boilerHeatOutputWh:u,systemHeatOutputWh:d,hasFullImportFields:c}}function og(e){const t=Hl(e.hour??e.hour_of_day??e.hourOfDay);if(t!==null&&t>=0&&t<=23)return t;const n=Gn(e);if(n){const r=String(n).trim(),a=Al(r);if(a)return a.hour;const i=new Date(r);if(!Number.isNaN(i.getTime()))return i.getHours();const l=r.match(/^(\d{1,2})(?::\d{2})/);if(l){const u=Number(l[1]);if(u>=0&&u<=23)return u}}return-1}function ng(e){const t=Ml(e),n=og(e);return!t||n<0||n>23?null:{...t,hour:n}}function rg(e){const t=[];let n=[],r="",a=!1;const i=()=>{n.push(r),r=""},l=()=>{i(),n.some(d=>String(d).trim()!=="")&&t.push(n),n=[]};for(let d=0;d<e.length;d+=1){const c=e[d];a?c==='"'&&e[d+1]==='"'?(r+='"',d+=1):c==='"'?a=!1:r+=c:c==='"'?a=!0:c===","?i():c===`
`?l():c!=="\r"&&(r+=c)}if((r||n.length)&&l(),!t.length)return[];const u=t.shift().map(d=>String(d||"").trim());return t.map(d=>{const c={};return u.forEach((g,b)=>{g&&(c[g]=d[b]??"")}),c})}function cn(e){return!e||typeof e!="object"||Array.isArray(e)||!e.summary||typeof e.summary!="object"||Array.isArray(e.summary)?e:{...e.summary,...e}}function ag(e){return Object.prototype.hasOwnProperty.call(e,"hour")||Object.prototype.hasOwnProperty.call(e,"hour_of_day")||Object.prototype.hasOwnProperty.call(e,"hourOfDay")}function ig(e){return e.some(t=>Gn(t)!==void 0)}function sg(e){const t=new Set;for(const n of e){const r=$l(n.date_key??n.dateKey??n.date??n.from??Gn(n));if(r){if(t.has(r))return!0;t.add(r)}}return!1}function Pl(e){return e.some(ag)||ig(e)&&sg(e)}function lg(e){const t=[],n=[];if(Array.isArray(e)){const l=e.map(cn);return Pl(l)?n.push(...l):t.push(...l),{dailyRows:t,hourlyRows:n,source:"JSON"}}const r=String(e?.schema||e?.import_schema||"JSON").trim()||"JSON",a=Array.isArray(e?.days)?e.days:Array.isArray(e?.daily)?e.daily:Array.isArray(e?.openquatt_import?.daily)?e.openquatt_import.daily:[],i=Array.isArray(e?.hourly)?e.hourly:Array.isArray(e?.hours)?e.hours:Array.isArray(e?.openquatt_import?.hourly)?e.openquatt_import.hourly:[];return t.push(...a.map(cn)),n.push(...i.map(cn)),a.forEach(l=>{Array.isArray(l?.samples)&&l.samples.forEach(u=>{n.push(cn({...u,date:u.date??l.date}))})}),{dailyRows:t,hourlyRows:n,source:r}}function cg(e,t){const n=String(t||"").trim();if(!n)throw new Error("Bestand is leeg.");let r=[],a=[],i="";if(n[0]==="{"||n[0]==="["){const p=lg(JSON.parse(n));r=p.dailyRows,a=p.hourlyRows,i=p.source}else{const p=rg(n);Pl(p)||String(e||"").toLowerCase().includes("hour")?a=p:r=p,i="CSV"}const l=new Map,u=new Map;let d=0,c=0;r.forEach(p=>{const f=Ml(p);if(!f){c+=1;return}l.has(f.dateKey)&&(d+=1),l.set(f.dateKey,f)}),a.forEach(p=>{const f=ng(p);if(!f){c+=1;return}const S=`${f.dateKey}:${f.hour}`;u.has(S)&&(d+=1),u.set(S,f)});const g=[...l.values()].sort((p,f)=>p.dateKey-f.dateKey),b=[...u.values()].sort((p,f)=>p.dateKey-f.dateKey||p.hour-f.hour);if(!g.length&&!b.length)throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");const h=[...g.map(p=>p.dateKey),...b.map(p=>p.dateKey)].sort((p,f)=>p-f),y=h.length?`${Bi(h[0])} t/m ${Bi(h[h.length-1])}`:"";return{records:g,hourRecords:b,source:i,range:y,duplicates:d,invalid:c}}function ug(e){return e.hasFullImportFields?["day",e.dateKey,e.electricalInputWh,e.heatingInputWh,e.coolingInputWh,e.heatpumpHeatOutputWh,e.heatpumpCoolingOutputWh,e.boilerHeatOutputWh,e.systemHeatOutputWh].join("|"):["day",e.dateKey,e.electricalInputWh,e.heatpumpHeatOutputWh,e.boilerHeatOutputWh].join("|")}function dg(e){const t=new Map;return e.forEach(n=>{t.has(n.dateKey)||t.set(n.dateKey,new Map),t.get(n.dateKey).set(n.hour,n)}),[...t.entries()].sort((n,r)=>n[0]-r[0]).map(([n,r])=>{let a=0;const i=[],l=[...r.values()].some(u=>u.hasFullImportFields);for(let u=0;u<24;u+=1){const d=r.get(u);d&&(a|=1<<u),l?i.push(d?.electricalInputWh??0,d?.heatingInputWh??0,d?.coolingInputWh??0,d?.heatpumpHeatOutputWh??0,d?.heatpumpCoolingOutputWh??0,d?.boilerHeatOutputWh??0,d?.systemHeatOutputWh??0):i.push(d?.electricalInputWh??0,d?.heatpumpHeatOutputWh??0,d?.boilerHeatOutputWh??0)}return["hourday",n,a,...i].join("|")})}function Nl(e){const t=new URLSearchParams;return t.set("records",[Yp,...e].join(`
`)),o.energyHistoryCsrfToken&&t.set("csrf_token",o.energyHistoryCsrfToken),t}function pg(e){const t=[];let n=[];return e.forEach(r=>{const a=[...n,r];n.length&&String(Nl(a)).length>Jp?(t.push(n),n=[r]):n=a}),n.length&&t.push(n),t}function gg(e){const t=[];e.written>0&&t.push(`${e.written} dagrecords`),e.hourWritten>0&&t.push(`${e.hourWritten} uurdagen`);const n=t.length?`${t.join(" en ")} ge\xEFmporteerd.`:"Geen nieuwe records ge\xEFmporteerd.",r=[];return e.duplicates>0&&r.push(`${e.duplicates} al aanwezig`),e.skipped>0&&r.push(`${e.skipped} overgeslagen`),e.invalid>0&&r.push(`${e.invalid} ongeldig`),e.unsupported>0&&r.push(`${e.unsupported} onbekend`),r.length?`${n} (${r.join(", ")}.)`:n}async function mg(e){const t=await fetch(`${Je()}/energy/history/import`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:Nl(e)}),n=await t.text();let r={};try{r=n?JSON.parse(n):{}}catch{r={}}if(!t.ok||r.ok===!1){const a=r.error?String(r.error):"";throw new Error(Zp[a]||a||`HTTP ${t.status}`)}return r}function Rl(e){const t=String(e||"").split(/\r?\n/).find(n=>n.startsWith("@csrf|"));return t?t.slice(6):""}async function hg(){if(zo())return;const e=await fetch(`${Je()}/energy/history?meta=1`,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=Rl(await e.text());if(!t)throw new Error("Beveiligingstoken ontbreekt. Vernieuw de pagina en probeer opnieuw.");o.energyHistoryCsrfToken=t}function fg(e,t){o.energyHistoryImportProgressPercent=t>0?Math.min(99,Math.max(1,Math.round(e/t*100))):0,m()}async function bg(e){if(El(),!e){m();return}o.energyHistoryImportFileName=e.name||"exportbestand";try{const t=cg(e.name||"",await e.text());o.energyHistoryImportRecords=t.records,o.energyHistoryImportHourRecords=t.hourRecords,o.energyHistoryImportSource=t.source,o.energyHistoryImportRange=t.range,o.energyHistoryImportDuplicateCount=t.duplicates,o.energyHistoryImportInvalidCount=t.invalid}catch(t){o.energyHistoryImportError=`Bestand kon niet worden gelezen. ${t.message}`}m()}function vg(){const e=document.createElement("input");e.type="file",e.accept=".json,.csv,application/json,text/csv,text/plain",e.style.position="fixed",e.style.left="-1000px",e.style.top="0",e.addEventListener("change",()=>{const t=e.files&&e.files[0]?e.files[0]:null;window.setTimeout(()=>e.remove(),0),bg(t)},{once:!0}),document.body.appendChild(e),e.click()}async function yg(){if(o.energyHistoryImportBusy)return;const e=[...o.energyHistoryImportRecords.map(ug),...dg(o.energyHistoryImportHourRecords)];if(!e.length){o.energyHistoryImportError="Kies eerst een exportbestand met dag- of uurrecords.",m();return}if(o.energyHistoryImportBusy=!0,o.energyHistoryImportError="",o.energyHistoryImportNotice="",o.energyHistoryImportProgressPercent=1,m(),zo()){const r=new Set(o.energyHistoryImportHourRecords.map(a=>a.dateKey)).size;o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,o.energyHistoryImportNotice=`Preview: ${o.energyHistoryImportRecords.length} dagrecords en ${r} uurdagen zouden worden ge\xEFmporteerd.`,m();return}const t={written:0,hourWritten:0,duplicates:0,skipped:0,invalid:0,unsupported:0};let n=0;try{await hg();const r=pg(e);for(const a of r){const i=await mg(a);t.written+=Number(i.written||0),t.hourWritten+=Number(i.hour_written||0),t.duplicates+=Number(i.duplicates||0),t.skipped+=Number(i.skipped||0),t.invalid+=Number(i.invalid||0),t.unsupported+=Number(i.unsupported||0),n+=a.length,fg(n,e.length)}o.energyHistoryImportProgressPercent=100,o.energyHistoryImportNotice=gg(t),o.energyHistoryImportError="",o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,await Da({forceMissing:!0,forceEnergyHistory:!0})}catch(r){o.energyHistoryImportError=`Importeren mislukt. ${r.message}`}finally{o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,m()}}function Qn(){return o.appView==="settings"&&o.settingsGroup==="system"}function wg(){const e=typeof window<"u"?Number(window.__OQ_DEV_LOAD_DELAY_MS||0):0;return Number.isFinite(e)&&e>0?e:0}const Sg=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","silentModeOverride","totalHeat","totalCoolingPower"],qg=["strategy","controlModeLabel","hpGeneration"],kg=["totalPower","flowSelected"],Cg=["totalHeat","totalCoolingPower"],Tg=2e3,Eg=250,Vi={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel"]},$g=5e3,Ag=250,Hg=["installationTopology",...gn,"hpGeneration","openquattEnabled",...ft,...Fn,"boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...ro,...Dn,...ht,"maxWater",...In,"minRuntime"],Mg={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...ht,...Ws,...In,...Gs,...yn,...wn,"maxWater",...ea],service:[...na,...ra,...yn,...wn,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...ro,...Dn,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...zs],integrations:[...Vs,..._s,...js,...Ks,...aa,...Us,...Bs],system:["setupComplete",...ao,"firmwareUpdateChannel","projectVersionText","releaseChannelText",...Fa,"webServerLogHistoryEnabled","debugLevel"]};function Ll(e=o.settingsGroup){const t=Ve.has(e)?e:Se[0].id;return[...new Set(["setupComplete","strategy",...Pe,...Mg[t]||[]])]}function Ol(){const e=Ve.has(o.settingsGroup)?o.settingsGroup:Se[0].id;return[...new Set(Vi[e]||Vi.installation)]}function Pg(e={}){const t=o.pendingEntitySyncOptions||{},n={...t,...e};t.forceBulk||e.forceBulk?(n.forceBulk=!0,n.forceFast=!1):(t.forceFast||e.forceFast)&&(n.forceFast=!0),o.pendingEntitySyncOptions=n}function Ia(e){const t=String(E(e)??"").trim().toLowerCase();return t!==""&&t!=="unknown"&&t!=="unavailable"&&t!=="nan"}function ji(e){return Ia(e)&&Number.isFinite(Ye(E(e)))}function Wa(){return o.appView==="overview"||o.appView==="diagnosis"||o.appView==="energy"}function Ng(){return md.filter(e=>{const t=o.entities[e];return t?!String(t.uom??t.unit_of_measurement??"").trim():!L[e]?.optional})}async function xl(){if(o.nativeOpen||!Wa()||o.overviewMetadataHydrated||o.overviewMetadataHydrating)return!1;const e=Ng();if(!e.length)return o.overviewMetadataHydrated=!0,!1;o.overviewMetadataHydrating=!0;try{return await I(e,"all",{concurrency:At}),o.overviewMetadataHydrated=!0,!0}catch{return!1}finally{o.overviewMetadataHydrating=!1,o.mounted&&!o.nativeOpen&&m()}}function _i(){return Wa()?qg.every(Ia)&&kg.every(ji)&&Cg.some(ji):!0}function Rg(){return o.appView==="settings"}function Ki(){return Rg()?Ol().every(e=>L[e]?.optional&&!o.entities[e]?!0:Ia(e)):!0}async function Lg(){if(_i())return;const e=Date.now()+Tg;for(;!o.nativeOpen&&!_i()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,Eg));try{await I(Sg,"state")}catch{return}}}async function Og(){if(Ki())return;const e=Date.now()+$g;for(;!o.nativeOpen&&!Ki()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,Ag));try{await I(Ol(),"all")}catch{return}}}function _(e,t=E(e)){if(t===""||t===null||Number.isNaN(Number(t)))return"\u2014";const n=Xe(e),r=n.step<1?Math.min(4,Math.max(1,String(n.step).split(".")[1]?.length||1)):0;return`${Number(t).toFixed(r)}${n.uom?` ${n.uom}`:""}`}function we(e,t){const n=Xe(e),r=Ye(t);if(Number.isNaN(r)){const d=Ye(o.entities[e]?.value??o.entities[e]?.state??"");return Number.isNaN(d)?n.min:d}const a=Math.min(n.max,Math.max(n.min,r)),i=Math.round((a-n.min)/n.step),l=n.min+i*n.step,u=n.step<1?Math.min(4,Math.max(1,String(n.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(u))}function Fl(){const e=pe[Math.floor(pe.length/2-1)],t=pe[Math.floor(pe.length/2)];if(!e||!t||!v("curveFallbackSupply"))return null;const n=we(e.key,E(e.key)),r=we(t.key,E(t.key)),a=(n+r)/2,i=we("curveFallbackSupply",a);return{value:i,label:_("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${t.label}).`,isCurrent:we("curveFallbackSupply",E("curveFallbackSupply"))===i}}const xg=8e3,Dl=3e3,Ui="/openquatt/entities",Fg=900;function Dg(){return o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint?Dl:xg}function Il(e){const t=String(e||"").toLowerCase();return t.includes("failed to fetch")||t.includes("load failed")||t.includes("networkerror")||t.includes("network request failed")||t.includes("connection refused")||t.includes("connection reset")||t.includes("err_connection")||t.includes("timeout")}const Ig=300*1e3;function Wg(){if(o.optionalMissingEntities)for(const e of Object.keys(o.optionalMissingEntities))delete o.optionalMissingEntities[e]}function Bg(){const e=Date.now();o.lastEntitySyncAt=e,o.lastEntitySyncSuccessAt=e,o.entitySyncFailureCount=0,!!o.deviceReconnectMode&&typeof Fi=="function"&&Fi()&&(o.lastFastEntitySyncAt=0,o.lastBulkEntitySyncAt=0,o.lastStaticEntitySyncAt=0,o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,typeof is=="function"?is():(Ge(),Jn(),o.webServerLogEnabled=null,o.webServerLogConnected=!1),Wg())}function Wl(e){if(!Il(e)){o.entitySyncFailureCount=0,ml();return}o.entitySyncFailureCount=Number(o.entitySyncFailureCount||0)+1,o.deviceReconnectLastError=String(e||""),(o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||o.entitySyncFailureCount>=2)&&Ha(o.updateInstallBusy||o.updateInstallPhaseHint?"ota":o.busyAction==="restartAction"?"restart":"reconnect",e)}function Vg(e=Date.now(),t={}){if(t.forceProbe===!0||o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||Number(o.entitySyncFailureCount||0)>0)return!0;const n=Number(o.lastEntitySyncSuccessAt||o.lastEntitySyncAt||o.lastEntityResponseAt||0);if(!n)return!0;const r=document.hidden?sa:Sd;return e-n>=r}async function jg(){const e=L.status||L.setupComplete;if(!e)return{ok:!0,message:""};const t=o.deviceReconnectMode?Dl:wd,n=G(e.domain,e.name);if(typeof AbortController=="function"){const r=new AbortController,a=window.setTimeout(()=>r.abort(),t);try{const i=await fetch(n,{cache:"no-store",signal:r.signal});return o.lastEntityResponseAt=Date.now(),{ok:i.ok||i.status===404,message:i.ok||i.status===404?"":`${e.name} HTTP ${i.status}`}}catch(i){return{ok:!1,message:r.signal.aborted?`${e.name} request timed out after ${t}ms`:i.message||String(i)}}finally{window.clearTimeout(a)}}try{const r=await fetch(n,{cache:"no-store"});return o.lastEntityResponseAt=Date.now(),{ok:r.ok||r.status===404,message:r.ok||r.status===404?"":`${e.name} HTTP ${r.status}`}}catch(r){return{ok:!1,message:r.message||String(r)}}}function _g(e,t=Date.now()){const n=o.optionalMissingEntities?.[e];return!L[e]?.optional||!n?!1:t-Number(n)<Ig}function Kg(e,t=Date.now()){o.optionalMissingEntities&&(o.optionalMissingEntities[e]=t)}function Ug(e){const t=L[e];return t?`${e}	${t.domain}	${t.name}`:""}function zi(e,t){const n=new URLSearchParams;return n.set("detail",t==="all"?"all":"state"),n.set("entities",e.join(`
`)),n.toString()}function Bl(e,t){const n=[];let r=[],a=[],i="";return e.forEach(l=>{const u=Ug(l);if(!u)return;const d=[...a,u],c=zi(d,t);if(a.length&&c.length>Fg){n.push({keys:r,body:i}),r=[l],a=[u],i=zi(a,t);return}r=[...r,l],a=d,i=c}),a.length&&n.push({keys:r,body:i}),n}async function zg(e){const t=Dg(),n={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body};if(typeof AbortController=="function"){const a=new AbortController,i=window.setTimeout(()=>a.abort(),t);try{const l=await fetch(Ui,{...n,signal:a.signal});if(!l.ok)throw new Error(`bulk entities HTTP ${l.status}`);return l.json()}catch(l){throw a.signal.aborted?new Error(`bulk entities request timed out after ${t}ms`):l}finally{window.clearTimeout(i)}}const r=await fetch(Ui,n);if(!r.ok)throw new Error(`bulk entities HTTP ${r.status}`);return r.json()}async function I(e,t="state",n={}){const r=Date.now(),a=n.forceMissing===!0,i=e.filter(h=>a||!_g(h,r));if(!i.length)return;const l=Number(n.concurrency),u=Number.isFinite(l)&&l>0?Math.floor(l):At,d=Bl(i,t),c=Math.max(1,Math.min(u,At)),g=[];for(let h=0;h<d.length;h+=c){const y=d.slice(h,h+c),p=await Promise.allSettled(y.map(async f=>({chunk:f,payload:await zg(f)})));g.push(...p)}g.some(h=>h.status==="fulfilled")&&(o.lastEntityResponseAt=Date.now());let b="";g.forEach(h=>{if(h.status!=="fulfilled"){const w=h.reason.message||String(h.reason);b||(b=w);return}const{chunk:y,payload:p}=h.value,f=p?.entities&&typeof p.entities=="object"?p.entities:{},S=new Set(Array.isArray(p?.missing)?p.missing:[]);y.keys.forEach(w=>{if(Object.prototype.hasOwnProperty.call(f,w)){o.optionalMissingEntities&&delete o.optionalMissingEntities[w],o.entities[w]=Gg(w,o.entities[w],f[w]);return}const q=L[w];q?.optional?S.has(w)&&Kg(w,r):b||(b=`${q?.name||w} ontbreekt in bulk response`)})}),gm(),Oc(ar()),b?(Wl(b),o.deviceReconnectMode?o.controlError="":o.controlError=`Niet alle helpervelden konden worden ververst. ${b}`):o.busyAction||(Bg(),o.controlError="")}function Gg(e,t={},n={}){const r={...t||{},...n||{}};return L[e]?.domain==="select"&&(!String(n.state??"").trim()&&String(t?.state??"").trim()&&(r.state=t.state),!String(n.value??"").trim()&&String(t?.value??"").trim()&&(r.value=t.value),!Array.isArray(n.option)&&Array.isArray(t?.option)&&(r.option=t.option),!Array.isArray(n.options)&&Array.isArray(t?.options)&&(r.options=t.options)),r}function Gi(e=o.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Vl(){const e=o.authStatus||{};o.authDraftUsername=e.enabled?String(e.username||"").trim():"",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword=""}function Dr(e=o.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function jl(e,t={},n=qd){if(t.force===!0)return!0;const r=Number(e||0);return!r||Date.now()-r>=n}function Qg(){return o.systemModal==="login"||o.systemModal==="api-security"||Qn()}function Yg(){return o.systemModal==="api-security"||Qn()}async function lo(e={}){if(!jl(o.lastAuthStatusRefreshAt,e))return!1;o.lastAuthStatusRefreshAt=Date.now();try{const t=await fetch("/auth/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r={enabled:!!n.enabled,setup_window_active:!!n.setup_window_active,username:String(n.username||""),source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=Gi(),i=Gi(r);return o.authStatus=r,a!==i&&Vl(),o.systemModal==="login"&&(o.authError=""),a!==i}catch(t){return o.systemModal==="login"&&(o.authError=`Loginstatus kon niet worden geladen. ${t.message}`),!1}}function fn(){return o.nativeOpen||o.systemModal!=="login"?!1:(o.authStatus||{}).setup_window_active!==!0}function bn(){o.loginAuthStatusPollTimer&&(window.clearTimeout(o.loginAuthStatusPollTimer),o.loginAuthStatusPollTimer=null)}function _l(e=kd){o.loginAuthStatusPollTimer||!fn()||(o.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(o.loginAuthStatusPollTimer=null,!fn())return;const t=o.authError;(await lo({force:!0})||o.authError!==t)&&o.systemModal==="login"&&m(),fn()&&_l()},Math.max(0,Number(e)||0)))}async function Jg(e={}){if(o.systemModal!=="login")return!1;const t=o.authError,n=await lo({force:!0});return(n||o.authError!==t)&&o.systemModal==="login"&&m(),e.poll!==!1&&fn()&&_l(),n}async function co(e={}){if(!jl(o.lastApiSecurityStatusRefreshAt,e))return!1;o.lastApiSecurityStatusRefreshAt=Date.now();try{const t=await fetch("/api-security/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r={enabled:!!n.enabled,transport_active:!!n.transport_active,pending_restart:!!n.pending_restart,key:String(n.key||""),source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=Dr(),i=Dr(r);return o.apiSecurityStatus=r,o.apiSecurityError="",a!==i&&(o.apiSecurityNotice=""),a!==i}catch(t){return o.apiSecurityError=`API-beveiliging kon niet worden geladen. ${t.message}`,!1}}async function Kl(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(t)}return n}async function Zg(){await Kt("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"})}async function Xg(){const e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",m();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",m();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await co({force:!0}),o.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",o.apiSecurityError="",m()}catch(t){o.apiSecurityError=`Inschakelen is mislukt. ${t.message}`,m()}finally{o.apiSecurityBusy=!1,m()}}async function em(){const e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",m();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",m();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await co({force:!0}),o.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",o.apiSecurityError="",m()}catch(t){o.apiSecurityError=`Roteren is mislukt. ${t.message}`,m()}finally{o.apiSecurityBusy=!1,m()}}async function tm(){const e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",m();return}if(!e.enabled){o.apiSecurityNotice="API-encryptie staat al uit.",o.apiSecurityError="",m();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",m();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await co({force:!0}),o.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",o.apiSecurityError="",m()}catch(t){o.apiSecurityError=`Uitzetten is mislukt. ${t.message}`,m()}finally{o.apiSecurityBusy=!1,m()}}async function om(){const e=String(o.apiSecurityStatus?.key||"").trim();if(!e){o.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",m();return}try{if(!await Kl(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.apiSecurityNotice="API-sleutel gekopieerd.",o.apiSecurityError="",m()}catch(t){o.apiSecurityError=`Kopi\xEBren is mislukt. ${t.message}`,m()}}function Ir(){o.settingsBackupDraft=null,o.settingsBackupError="",o.settingsBackupBusy=!1}function nm(){return{device:Me(),installation:Vo(),topology:typeof Z=="function"?Z():"",firmware_version:oe(),firmware_channel:String(E("firmwareUpdateChannel")||E("releaseChannelText")||"").trim()}}function Ul(e){const t=L[e];if(!t)return;if(e==="setupComplete")return rc();const n=E(e);if(n===""||n===null||n===void 0)return;if(t.domain==="switch"||t.domain==="binary_sensor")return A(e);if(t.domain==="number"){const a=Ye(n);return Number.isNaN(a)?void 0:a}return t.domain==="time"?so(n)||void 0:t.domain==="datetime"?et(n)||void 0:String(n||"").trim()||void 0}function zl(){const e={};return Jt.forEach(t=>{const n={};t.keys.forEach(r=>{const a=Ul(r);a!==void 0&&(n[r]=a)}),e[t.id]=n}),{schema_version:Ys,exported_at:new Date().toISOString(),source:nm(),settings:e}}function rm(e=zl()){const t=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${t}.json`}function am(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function im(e){const t=L[e];return t?.name?t.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function Qi(e,t){if(t==null||t==="")return"\u2014";const n=L[e];return n?n.domain==="number"?_(e,t):n.domain==="time"?so(t)?.slice(0,5)||"\u2014":n.domain==="datetime"?et(t)||"\u2014":n.domain==="switch"||n.domain==="binary_sensor"?t?"Aan":"Uit":String(t).trim()||"\u2014":String(t).trim()||"\u2014"}function sm(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function Gl(e){const t=e?.settings&&typeof e.settings=="object"?e.settings:{},n=e?.source&&typeof e.source=="object"?e.source:{},r=fd;let a=0,i=0,l=0,u=0,d=0,c=0,g=0,b=0;const h=Jt.map(y=>{const p=t[y.id]&&typeof t[y.id]=="object"?t[y.id]:{};let f=0,S=0,w=0,q=0,T=0,k=0,M=0;const F=y.keys.map(x=>{const C=!!L[x]?.optional,$=Object.prototype.hasOwnProperty.call(p,x),N=$?p[x]:void 0,W=Ul(x),K=v(x),R=$?Qi(x,N):C?"Niet op huidige installatie":"Ontbreekt in backup",V=K?Qi(x,W):C?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie";let P="same";return!$&&C?P="optional-missing":$?K?JSON.stringify(W)!==JSON.stringify(N)&&(P="different"):P=C?"optional-unavailable":"current-missing":P="missing",K&&(M+=1,b+=1),P!=="same"&&(k+=1,g+=1),C?(T+=1,$?(w+=1,l+=1):(q+=1,u+=1)):$?(f+=1,a+=1):(S+=1,i+=1),{key:x,label:im(x),optional:C,hasBackupValue:$,backupDisplay:R,currentDisplay:V,status:P,statusLabel:sm(P)}});return c+=y.keys.filter(x=>!L[x]?.optional).length,{id:y.id,label:y.label,present:f,currentPresent:M,requiredTotal:y.keys.filter(x=>!L[x]?.optional).length,optionalTotal:T,optionalPresent:w,optionalMissing:q,requiredMissing:S,total:y.keys.length,differenceCount:k,rows:F}});return Object.entries(t).forEach(([y,p])=>{if(!Jt.some(f=>f.id===y)){d+=1;return}!p||typeof p!="object"||Object.keys(p).forEach(f=>{r.has(f)||(d+=1)})}),{source:n,sectionSummaries:h,requiredPresent:a,requiredMissing:i,requiredAvailable:c,optionalPresent:l,optionalMissing:u,unknown:d,differenceCount:g,currentPresent:b,requiredTotal:c,total:Wo.length}}function lm(e,t=""){const n=JSON.parse(e);if(!n||typeof n!="object")throw new Error("Backupbestand bevat geen JSON-object.");const r=Number(n.schema_version??n.schemaVersion??0);if(!Number.isInteger(r)||r<Ys)throw new Error("Onbekende backupversie.");const a=n.settings&&typeof n.settings=="object"?n.settings:{},i={schema_version:r,exported_at:String(n.exported_at||""),source:n.source&&typeof n.source=="object"?n.source:{},settings:a,file_name:t||""};return i.summary=Gl(i),i}async function cm(){o.settingsBackupBusy=!0,o.controlError="",o.controlNotice="",m();try{return await I(Wo,"all"),zl()}finally{o.settingsBackupBusy=!1,m()}}async function um(){if(!o.settingsBackupBusy)try{const e=await cm();am(rm(e),e),o.controlNotice="Settings-backup gedownload.",m()}catch(e){o.controlError=`Backup exporteren mislukt. ${e.message}`,m()}}async function dm(e){if(!(!e||o.settingsBackupBusy)){o.settingsBackupBusy=!0,o.settingsBackupDraft=null,o.settingsBackupError="",o.controlError="",o.controlNotice="",m();try{const t=await e.text(),n=lm(t,e.name||"");o.settingsBackupDraft=n,o.systemModal="settings-backup-restore"}catch(t){o.settingsBackupDraft=null,o.settingsBackupError=`Backupbestand kon niet worden gelezen. ${t.message}`}finally{o.settingsBackupBusy=!1,m()}}}async function Ro(e,t){const n=L[e];if(!n)throw new Error(`Onbekend veld ${e}.`);if(n.domain==="select"){const r=String(t||"").trim(),a=await fetch(`${G(n.domain,n.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="number"){const r=we(e,t),a=await fetch(`${G(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="time"){const r=so(t),a=await fetch(`${G(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="datetime"){const r=et(t),a=await fetch(`${G(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="text"){const r=String(t||"").trim(),a=await fetch(`${G(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="switch"||n.domain==="binary_sensor"){const r=!!t,a=r?"turn_on":"turn_off",i=await fetch(G(n.domain,n.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return r}throw new Error(`${n.name} kan niet worden hersteld.`)}async function pm(){const e=o.settingsBackupDraft;if(!e||o.settingsBackupBusy)return;o.settingsBackupBusy=!0,o.settingsBackupError="",o.controlError="",o.controlNotice="",m();const t=[],n=[];let r=!1;try{await I(Wo,"all");for(const i of Jt){const l=e.settings?.[i.id]&&typeof e.settings[i.id]=="object"?e.settings[i.id]:{};for(const u of i.keys){if(!Object.prototype.hasOwnProperty.call(l,u)){n.push(u);continue}const d=l[u];if(u==="setupComplete"){r=d===!0;continue}if(u==="openquattEnabled")continue;if(!L[u]||!v(u)){n.push(u);continue}try{await Ro(u,d),t.push(u)}catch{n.push(u)}}}const a=e.settings?.operation?.openquattEnabled;if(Object.prototype.hasOwnProperty.call(e.settings?.operation||{},"openquattEnabled")&&v("openquattEnabled")&&(await Ro("openquattEnabled",a),t.push("openquattEnabled")),r&&L.apply){const i=await fetch(G("button","Complete setup","press"),{method:"POST"});if(!i.ok)throw new Error(`Setup bevestigen mislukt (HTTP ${i.status}).`);t.push("setupComplete")}else Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&n.push("setupComplete");o.systemModal="settings-backup-success",Ir(),o.controlNotice=`Backup hersteld (${t.length} toegepast${n.length?`, ${n.length} overgeslagen`:""}).`,await ae()}catch(a){o.settingsBackupError=`Backup herstellen mislukt. ${a.message}`}finally{o.settingsBackupBusy=!1,m()}}function zo(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}async function Ba(e={}){if(!uo()){const r=!!(o.trendHistoryRaw||o.trendHistoryError);return o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,r}if(zo())return!1;const t=e.force===!0,n=Date.now();if(!t&&o.trendHistoryFetchPromise)return o.trendHistoryFetchPromise;if(!t&&(o.trendHistoryRaw||o.trendHistoryError)&&n-Number(o.trendHistoryLastFetchAt||0)<Os)return!1;o.trendHistoryFetchPromise=(async()=>{const r=la(o.trendWindowHours||Zt);r!==o.trendWindowHours&&ca(r);const a=await fetch(`${Je()}/trends/history?hours=${encodeURIComponent(String(r))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const i=await a.text(),l=i.split(/\r?\n/);let u=Number.NaN,d=i;l.length&&l[0].startsWith("@now|")&&(u=Number(l[0].slice(5)),d=l.slice(1).join(`
`));const c=`${r}|${d.length}|${d.slice(0,120)}|${d.slice(-120)}`,g=Number.isFinite(o.trendHistoryNowMs),h=Number.isFinite(u)?!g||o.trendHistoryNowMs!==u:g,y=d!==o.trendHistoryRaw||o.trendHistoryError!==""||o.trendHistorySignature!==c||h;return o.trendHistoryRaw=d,o.trendHistoryError="",o.trendHistorySignature=c,o.trendHistoryNowMs=Number.isFinite(u)?u:Number.NaN,o.trendHistoryLastFetchAt=Date.now(),y})();try{return await o.trendHistoryFetchPromise}catch(r){const a=`Trendhistorie kon niet worden geladen. ${r.message}`,i=o.trendHistoryError!==a;return o.trendHistoryError=a,o.trendHistoryRaw="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=Date.now(),i}finally{o.trendHistoryFetchPromise=null}}async function Mt(e={}){if(!v("lifetimeEnergyHistoryEnabled")&&!zo()){const a=!!(o.energyHistoryRaw||o.energyHistoryError);return o.energyHistoryRaw="",o.energyHistoryError="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=0,o.energyHistoryRequestQuery="",o.energyHistoryFetchQuery="",o.energyHistoryCsrfToken="",a}const t=e.force===!0,n=Date.now(),r=e.metaOnly===!0?"?meta=1":typeof dn=="function"?dn():"";if(!t&&o.energyHistoryFetchPromise&&o.energyHistoryFetchQuery===r)return o.energyHistoryFetchPromise;if(!t&&o.energyHistoryRequestQuery===r&&(o.energyHistoryRaw||o.energyHistoryError)&&n-Number(o.energyHistoryLastFetchAt||0)<Os)return!1;o.energyHistoryFetchQuery=r,o.energyHistoryFetchPromise=(async()=>{const a=async f=>{const S=await fetch(`${Je()}/energy/history${f}`,{cache:"no-store"});if(!S.ok)throw new Error(`HTTP ${S.status}`);return S.text()};let i=r,l=await a(i);if(e.metaOnly!==!0&&i.includes("meta=1")&&typeof dn=="function"){const f=o.energyHistoryRaw;o.energyHistoryRaw=l;const S=dn();o.energyHistoryRaw=f,S&&S!==i&&(i=S,l=await a(i))}const u=l.split(/\r?\n/),d=Rl(l)||o.energyHistoryCsrfToken;let c=Number.NaN;u.forEach(f=>{f.startsWith("@now|")&&(c=Number(f.slice(5)))});const g=`${l.length}|${l.slice(0,120)}|${l.slice(-120)}`,b=Number.isFinite(o.energyHistoryNowMs),y=Number.isFinite(c)?!b||o.energyHistoryNowMs!==c:b,p=l!==o.energyHistoryRaw||o.energyHistoryError!==""||o.energyHistorySignature!==g||y||d!==o.energyHistoryCsrfToken;return o.energyHistoryRaw=l,o.energyHistoryError="",o.energyHistorySignature=g,o.energyHistoryNowMs=Number.isFinite(c)?c:Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=i,o.energyHistoryCsrfToken=d,p})();try{return await o.energyHistoryFetchPromise}catch(a){const i=`Energiehistorie kon niet worden geladen. ${a.message}`,l=o.energyHistoryError!==i;return o.energyHistoryError=i,o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=r,o.energyHistoryCsrfToken="",l}finally{o.energyHistoryFetchPromise=null}}function gm(){o.complete=rc(),o.stage=o.complete===!0?"Gereed":o.complete===!1?"Quick Start":"Laden...",o.summary=Xm(),o.appView==="diagnosis"&&!uo()&&Et(Xt(),{syncMode:"replace",forceSync:!0}),o.appView||Et(ga()||Xt(),{syncMode:"replace",forceSync:!0})}function mm(){const e=["setupComplete","strategy",...Pe,...Hg];return o.appView==="settings"?[...new Set([...e,...Ll()])]:o.appView==="energy"?[...new Set([...e,...Io])]:o.appView==="overview"||o.appView==="diagnosis"?[...new Set([...e,...mn])]:[...new Set(e)]}function hm(e=[]){const t=new Set(e);return(o.appView==="settings"?[...new Set(["setupComplete","strategy",...Pe,...Rt()])]:o.appView==="overview"||o.appView==="diagnosis"||o.appView==="energy"||o.appView==="results"?[...new Set(["setupComplete","strategy",...Pe,...Io,...ao])]:[...new Set(["setupComplete","strategy",...Pe])]).filter(r=>!t.has(r))}async function fm(e,t="state"){if(!(!e.length||o.nativeOpen)){o.entitySyncInFlight=!0;try{await I(e,t,{concurrency:t==="all"?At:Ln})}finally{o.entitySyncInFlight=!1;const n=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,n&&!o.nativeOpen&&window.setTimeout(()=>{ae(n)},0)}o.mounted&&!o.nativeOpen&&m()}}function Ql(){if(o.nativeOpen||o.appView!=="settings")return;const e=()=>{if(!(o.nativeOpen||o.appView!=="settings")){if(o.loadingEntities||o.focusedField||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock){window.setTimeout(Ql,250);return}ae({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}function Yi(e=Date.now(),t={}){return t.forceBulk===!0?!0:e-Number(o.lastBulkEntitySyncAt||0)>=vd}async function Yl(){if(!o.nativeOpen)try{Wa()&&await xl(),(o.appView==="overview"||o.appView==="diagnosis")&&await Ba({force:!0}),o.appView==="results"&&await Mt({force:!0}),await lo({force:!0}),Qn()&&await co({force:!0})}finally{o.mounted&&!o.nativeOpen&&m(),Ql()}}async function bm(){if(o.nativeOpen)return;o.loadingEntities=!0,m();const e=wg();e>0&&await new Promise(i=>window.setTimeout(i,e));const t=mm(),n=hm(t),r=o.appView==="settings"?"all":"state";try{await I(t,r,{concurrency:r==="all"?At:Ln}),o.appView==="settings"?await Og():await Lg()}finally{o.loadingEntities=!1,m()}const a=o.appView==="settings"?"all":"state";window.setTimeout(()=>{fm(n,a),Yl()},0)}async function ae(e={}){if(o.nativeOpen||o.loadingEntities||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock)return;if(o.updateInstallBusy||gl()){o.pendingEntitySyncOptions=null;return}if(o.focusedField&&o.appView!=="settings")return;if(o.entitySyncInFlight){Pg(e);return}const t=Date.now();if(document.hidden&&t-Number(o.lastEntitySyncAttemptAt||0)<sa)return;const n=o.appView,r=e.prefetchView==="overview"&&!e.forceBulk&&n==="settings",a=r?"overview":n,i=a==="overview"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,u=!l&&!r&&Yi(t,e),c=t-Number(o.lastStaticEntitySyncAt||0)>=yd||o.updateInstallBusy||o.updateInstallPhaseHint?ao:[],g=o.quickStartModalOpen&&o.currentStep==="flow-source"?ft:[],b=o.quickStartModalOpen&&o.currentStep==="thermostat-source"?Fn:[],h=o.appView==="settings"&&o.systemModal==="history-storage"?To():[],y=r?[...mn,...Pe,"setupComplete",...c]:i?[...l?mn:u?Io:mn,...Pe,"setupComplete",...c]:n==="settings"?[...new Set([...Ll(),...h,...c])]:u?["setupComplete",...c,...Pe,"strategy",...Do,...ht,...ce()?pe.map(p=>p.key):ro]:["setupComplete",...Pe,"strategy",...c];o.entitySyncInFlight=!0,o.lastEntitySyncAttemptAt=t;try{const p=o.deviceReconnectMode,f=Vg(t,e)?await jg():{ok:!0,message:""};if(!f.ok){Wl(f.message),r||m();return}if(await I([...new Set([...y,...g,...b])],r?"state":n==="settings"?"all":"state",{concurrency:l&&i?Ln:At}),o.lastFastEntitySyncAt=Date.now(),u&&i&&!r&&(o.lastBulkEntitySyncAt=o.lastFastEntitySyncAt),c.length&&(o.lastStaticEntitySyncAt=o.lastFastEntitySyncAt),r)return;i&&!o.overviewMetadataHydrated&&!o.overviewMetadataHydrating&&xl();const S=p!==o.deviceReconnectMode,w=l&&i,q=w?!1:a==="overview"||a==="diagnosis"?await Ba():!1,T=w?!1:o.appView==="results"?await Mt():!1,k=w||!Qg()?!1:await lo(),M=w||!Yg()?!1:await co(),F=Lr();if(S){m();return}if(q&&o.appView==="diagnosis"&&!o.root?.querySelector(".oq-overview-trends")){m();return}if(T&&o.appView==="results"&&!o.root?.querySelector(".oq-energy-history")){m();return}if(k&&(o.systemModal==="login"||Qn())){m();return}if(M&&o.appView==="settings"){m();return}const x=!!(o.updateModalOpen||o.systemModal||o.interfacePanelOpen);if(F!==o.headerRenderSignature)if(x&&Or())o.headerRenderSignature=F;else{m();return}else Or();if(o.appView==="settings"&&String(o.systemModal||"").startsWith("service-task-")){Wr()!==o.settingsRenderSignature&&m();return}if(x)return;if(o.appView==="settings"){const U=Wr();if(U!==o.settingsRenderSignature&&!o.focusedField){m();return}if(!Pf()){o.focusedField||m();return}o.focusedField&&(o.settingsRenderSignature=U);return}if(o.appView==="diagnosis"){wv()||m();return}if(o.appView==="energy"){ny()||m();return}if(o.appView==="results"){ry()||m();return}Py()||m(),w&&!o.nativeOpen&&window.setTimeout(()=>{Yl()},0)}catch(p){r||(o.controlError=`Helperstatus kon niet worden geladen. ${p.message}`,m())}finally{o.entitySyncInFlight=!1;const p=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,p&&!o.nativeOpen&&window.setTimeout(()=>{ae(p)},0),l&&i&&!r&&!o.nativeOpen&&!p&&Yi(Date.now())&&window.setTimeout(()=>{ae({forceBulk:!0})},0)}}function Ji(){window.setTimeout(()=>{const e=document.activeElement;o.focusedField=e&&e.dataset&&e.dataset.oqField||"",o.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function vm(e){e.target.closest(".oq-ph-concept-hotspot")&&(o.settingsInteractionLock=!0)}function ym(e){const t=e.target.closest(".oq-ph-concept-hotspot");if(!t||e.relatedTarget&&t.contains(e.relatedTarget))return;const n=o.root&&o.root.querySelector(".oq-ph-concept-hotspot:hover"),r=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;o.settingsInteractionLock=!!(n||r)}function re(e){const t=o.entities[e];if(!t)return o.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;const n=t.state??t.value??"",r=Array.isArray(t.option)?t.option.join(","):Array.isArray(t.options)?t.options.join(","):"",a=[t.min_value??"",t.max_value??"",t.step??"",t.uom??""].join(",");return`${e}:${n}::${r}::${a}`}function Wr(){return[o.appView,o.settingsGroup,o.busyAction,o.loadingEntities?"loading":"ready",Dr(),re("setupComplete"),...Qs.map(e=>re(e))].join("|")}function be(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function Jl(){return[o.appView,o.busyAction,re("openquattEnabled"),re("openquattResumeAt"),re("manualCoolingEnable"),re("silentModeOverride"),re("controlModeLabel"),re("coolingPermitted"),re("coolingRequestActive"),re("coolingBlockReason"),re("silentActive")].join("|")}function wm(e){if(e.target.dataset.oqFirmwareConnectionConfirm){o.firmwareConnectionSwitchConfirmed=!!e.target.checked,m();return}if(e.target.dataset.oqFirmwareTopologyConfirm){o.firmwareTopologySwitchConfirmed=!!e.target.checked,m();return}if(e.target.dataset.oqFirmwareTestConfirm){o.updateTestFirmwareConfirmed=!!e.target.checked,o.updateTestFirmwareError="";const n=e.target.closest(".oq-helper-modal-callout"),r=n?.querySelector('[data-oq-action="install-firmware-test"]');r&&(r.disabled=!o.updateTestFirmwareConfirmed||!No()),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){o.updateTestFirmwarePr=String(e.target.value||""),o.updateTestFirmwareConfirmed=!1,o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null;const n=e.target.closest(".oq-helper-modal-callout"),r=n?.querySelector('[data-oq-firmware-test-confirm="true"]');r&&(r.checked=!1);const a=n?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!0);const i=jn(),l=ya(No(),i),u=n?.querySelector('[data-oq-firmware-test-asset-note="true"]');u&&(u.textContent=l?i.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),n?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}const t=e.target.dataset.oqField;if(!t){if(e.target.dataset.oqQuickstartCicUrl!==void 0){o.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){o.quickStartThermostatSourceDraft=String(e.target.value||""),m();return}const n=e.target.dataset.oqAuthField;if(!n)return;o.authNotice="",o.authError="",n==="username"?o.authDraftUsername=String(e.target.value||""):n==="currentPassword"?o.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?o.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(o.authDraftConfirmPassword=String(e.target.value||""));return}if(e.target.dataset.oqPauseDraft){o.pauseResumeDraft=String(e.target.value||"");return}if(L[t]?.domain==="text"){o.inputDrafts[t]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(o.inputDrafts[t]=e.target.value);const n=Ye(e.target.value);if(!Number.isNaN(n)){const r=we(t,e.target.value);if(o.drafts[t]=r,e.target.type==="range"){const a=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");a&&(a.textContent=_(t,r))}}}}function Sm(e){Wf(e)}function Zi(e,t){return e.deltaMode===1?t*16:e.deltaMode===2?t*window.innerHeight:t}function qm(e){let t=e?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){const n=window.getComputedStyle(t),r=/(auto|scroll)/.test(n.overflowY)&&t.scrollHeight>t.clientHeight,a=/(auto|scroll)/.test(n.overflowX)&&t.scrollWidth>t.clientWidth;if(r||a)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function km(e){const t=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!t||!o.root||!o.root.contains(t)||document.activeElement!==t)return;e.preventDefault(),t.blur();const n=qm(t);n&&typeof n.scrollBy=="function"&&n.scrollBy({left:Zi(e,e.deltaX||0),top:Zi(e,e.deltaY||0),behavior:"auto"})}function Cm(e){if(e.target.dataset.oqDevControl==="boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(e.target.value);return}if(e.target.dataset.oqBackupFileInput){const r=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",dm(r);return}if(e.target.dataset.oqFirmwareUploadFileInput){const r=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",r?(o.firmwareAdvancedOpen=!0,o.updateManualUploadOpen=!0,o.updateManualUploadFile=r,o.updateManualUploadFileName=r.name||"",o.updateManualUploadError=""):fe(),m();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof Nn=="function"&&Nn(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}if(e.target.dataset.oqEnergyHistoryExportMode!==void 0){o.energyHistoryExportMode=zn(e.target.value),o.energyHistoryExportError="",o.energyHistoryExportNotice="",m();return}const t=e.target.dataset.oqField;if(!t)return;const n=L[t];if(n){if(n.domain==="select"){Br(t,String(e.target.value));return}if(n.domain==="number"){Va(t,e.target.value);return}if(n.domain==="text"){Um(t,e.target.value);return}if(n.domain==="time"){const r=so(e.target.value);if(!r){o.controlError=`${n.name} verwacht tijd als HH:MM.`,m();return}Km(t,r);return}if(n.domain==="datetime"){const r=et(e.target.value);if(!r){o.controlError=`${n.name} verwacht datum en tijd.`,m();return}zm(t,r);return}}}function Tm(e){const t=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(t){const c=t.querySelector("input[data-oq-field]");if(c&&(c.type==="time"||c.type==="datetime-local")&&typeof c.showPicker=="function")try{c.showPicker()}catch{}}const n=e.target.closest('[data-oq-action="toggle-settings-info"]'),r=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-modal]");if(n){const c=n.dataset.infoId||"";o.settingsInfoOpen=o.settingsInfoOpen===c?"":c,m();return}const l=e.target.closest("[data-oq-action]"),u=o.interfacePanelOpen&&!a;if(!l){let c=!1;if(o.settingsInfoOpen&&!r&&(o.settingsInfoOpen="",c=!0),u&&(wr(!1),c=!0),i&&e.target===i){if(i.dataset.oqModal==="quickstart-forced")return;o.updateModalOpen&&(o.updateModalOpen=!1,o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,fe(),De(),c=!0),o.systemModal&&(Ir(),bn(),o.systemModal="",c=!0)}c&&m();return}u&&l.dataset.oqAction!=="toggle-interface-panel"&&wr(!1);const d=l.dataset.oqAction;if(d==="set-mock-boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(l.dataset.boilerMode||"off");return}if(d==="toggle-interface-panel"){wr(!o.interfacePanelOpen),m();return}if(d==="toggle-dev-panel"){Ld(!o.devPanelOpen),m();return}if(d==="toggle-installation-monitoring-details"){e.preventDefault();const c=l.closest(".oq-settings-monitoring-details");o.installationMonitoringDetailsOpen=!(c&&c.hasAttribute("open")),m();return}if(d==="toggle-integration-diagnostics"){e.preventDefault();const c=l.closest(".oq-settings-integration-diagnostics");o.integrationDiagnosticsOpen=!(c&&c.hasAttribute("open")),m();return}if(d==="toggle-odu-runtime-frequency-details"){e.preventDefault();const c=l.closest(".oq-settings-odu-runtime-details");o.oduRuntimeFrequencyDetailsOpen=!(c&&c.hasAttribute("open")),m();return}if(d==="toggle-storage-technical-details"){e.preventDefault();const c=l.closest(".oq-settings-storage-technical");o.settingsStorageDetailsOpen=!(c&&c.hasAttribute("open")),m();return}if(d==="select-view"){if((l.dataset.viewId||"")==="diagnosis"&&!uo())return;const c=l.dataset.viewId||"overview";Et(c,{syncMode:"push"}),m(),ae(c==="settings"||c==="energy"||c==="results"?{forceBulk:!0}:{forceFast:!0});return}if(d==="select-trend-window"){if(l.disabled)return;ca(Number(l.dataset.trendHours||24)),m(),Ba({force:!0}).then(c=>{c&&m()});return}if(d==="select-energy-history-view"){if(l.disabled||typeof Ts!="function")return;Ts(l.dataset.energyHistoryView||"day");return}if(d==="shift-energy-history-period"){if(l.disabled||typeof Hs!="function")return;Hs(o.energyHistoryView||"day",l.dataset.energyHistoryDirection||"1");return}if(d==="select-energy-history-now"){if(l.disabled||typeof Ms!="function")return;Ms(o.energyHistoryView||"day");return}if(d==="select-settings-group"){hn(l.dataset.groupId||Se[0].id),m(),ae({forceBulk:!0});return}if(d==="open-update-modal"){o.updateModalOpen=!0,m(),Dm();return}if(d==="open-webserver-log-modal"){Th();return}if(d==="open-debug-recording-modal"){o.systemModal="debug-recording",o.debugRecordingError="",o.debugRecordingNotice="",m(),Qa();return}if(d==="open-login-modal"){o.systemModal="login",Vl(),o.authNotice="",o.authError="",m(),Jg({poll:!0});return}if(d==="open-api-security-modal"){o.systemModal="api-security",o.apiSecurityNotice="",o.apiSecurityError="",m(),co({force:!0});return}if(d==="copy-api-security-key"){om();return}if(d==="enable-api-security"){Xg();return}if(d==="rotate-api-security"){em();return}if(d==="disable-api-security"){tm();return}if(d==="restart-api-security"){Zg();return}if(d==="flush-trend-history"){Kt("trendHistoryFlush",{successNotice:"Diagnosegeschiedenis is opgeslagen.",errorPrefix:"Diagnosegeschiedenis kon niet worden opgeslagen",refreshKeys:To(),refreshDelayMs:500}).then(()=>{ko()});return}if(d==="save-lifetime-energy-history"){Kt("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:To(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,ko(),o.appView==="results"&&Mt({force:!0}).then(()=>m())});return}if(d==="clear-lifetime-energy-history"){if(!window.confirm(`Energiehistorie wissen?

Alle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.`))return;Kt("lifetimeEnergyHistoryClear",{successNotice:"Energiehistorie is gewist.",errorPrefix:"Energiehistorie kon niet worden gewist",refreshKeys:To(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,ko(),o.appView==="results"&&Mt({force:!0}).then(()=>m())});return}if(d==="select-energy-history-import-file"){vg();return}if(d==="clear-energy-history-import-file"){El(),m();return}if(d==="import-energy-history-file"){yg();return}if(d==="export-energy-history"){tg();return}if(d==="open-history-storage-modal"){o.systemModal="history-storage",m(),Da({forceMissing:!0}).finally(()=>{o.systemModal==="history-storage"&&m()}),ko([1e3,3e3,7e3]);return}if(d==="open-connectivity-modal"){o.systemModal="connectivity",m();return}if(d==="open-restart-confirm"){o.systemModal="restart-confirm",m();return}if(d==="download-settings-backup"){um();return}if(d==="open-settings-backup-import"){o.systemModal="settings-backup-import",m();return}if(d==="open-silent-settings-modal"){o.systemModal="silent-settings",m();return}if(d==="open-openquatt-pause-modal"){o.pauseResumeDraft=Cl(),o.systemModal="openquatt-pause",m();return}if(d==="enable-openquatt-now"){Ym();return}if(d==="apply-openquatt-preset"){const c=kl(l.dataset.pausePreset||"");o.pauseResumeDraft=c,qr(c);return}if(d==="apply-openquatt-indefinite"){qr("");return}if(d==="apply-openquatt-custom-pause"){if(!String(o.pauseResumeDraft||"").trim()){o.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",m();return}qr(o.pauseResumeDraft||"");return}if(d==="close-update-modal"){o.updateModalOpen=!1,o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,fe(),De(),m();return}if(d==="close-quickstart-modal"){o.quickStartModalOpen=!1,m();return}if(d==="open-quickstart-modal"){o.currentStep="generation",o.quickStartModalMode="wizard",o.quickStartModalOpen=!0,m();return}if(d==="open-generation-modal"){o.currentStep="generation",o.quickStartModalMode="generation",o.quickStartModalOpen=!0,m();return}if(d==="open-cm100-commissioning-modal"){o.systemModal="",Et("settings"),hn("service"),m(),ae({forceBulk:!0});return}if(d==="open-installation-monitoring"){o.systemModal="",Et("settings"),hn("service"),m(),ae({forceBulk:!0});return}if(d==="open-service-task-modal"){const c=String(l.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(c)&&(o.systemModal=`service-task-${c}`,m(),ae({forceBulk:!0}));return}if(d==="press-named-button"){const c=String(l.dataset.oqButtonKey||l.dataset.buttonKey||l.getAttribute("data-oq-button-key")||"").trim();if(c){c==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!0,o.commissioningTaskLock="cm100",o.commissioningBoilerHeatPowerDisplay=""):c==="commissioningCm100Stop"?(o.pendingCommissioningCm100Start=!1,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="",o.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!0,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="boiler",o.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestAbort"||c==="boilerPowerTestApply"?o.commissioningTaskLock="boiler":c==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="autotune"):c==="flowAutotuneAbort"||c==="flowAutotuneApply"?o.commissioningTaskLock="autotune":c==="airPurgeStart"?(o.pendingAirPurgeStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="purge"):c==="airPurgeAbort"?o.commissioningTaskLock="purge":c==="manualFlowStart"?(o.pendingManualFlowStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-flow"):c==="manualFlowAbort"?o.commissioningTaskLock="manual-flow":c==="manualHpStart"?(o.pendingManualHpStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-hp"):c==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.commissioningTaskLock="hp-water-calibration"):c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply"?o.commissioningTaskLock="hp-water-calibration":c==="manualHpAbort"&&(o.commissioningTaskLock="manual-hp");const g=[];let b=0,h="",y="";if(c==="acknowledgeCompressorCyclingAlert")g.push(...na);else if(c==="commissioningCm100Start"||c==="commissioningCm100Stop")g.push("commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive");else if(c==="boilerPowerTestStart"||c==="boilerPowerTestAbort"||c==="boilerPowerTestApply")g.push("commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower");else if(c==="flowAutotuneStart"||c==="flowAutotuneAbort"||c==="flowAutotuneApply")g.push("commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi");else if(c==="airPurgeStart"||c==="airPurgeAbort")g.push("commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode");else if(c==="hpWaterCalibrationStart"||c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply")g.push("commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode");else if(c==="manualFlowStart"||c==="manualFlowAbort"||c==="manualFlowApplyHeating"||c==="manualFlowApplyCooling")g.push("commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint");else if(c==="manualHpStart"||c==="manualHpAbort")g.push("commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode");else if(Is.has(c)){const p=sd(c);p&&(g.push(...Ds(p)),b=c.endsWith("Load")?1200:3200,h=c.endsWith("Load")?`HP${p} ODU runtime tabel lezen aangevraagd.`:`HP${p} ODU runtime write aangevraagd; controleer status/readback.`,y=`ODU runtime actie mislukt voor HP${p}`)}Kt(c,{...g.length?{refreshKeys:g}:{},...b?{refreshDelayMs:b}:{},...h?{successNotice:h}:{},...y?{errorPrefix:y}:{}})}return}if(d==="close-system-modal"){bn(),go(),o.systemModal="",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authNotice="",o.authError="",o.apiSecurityNotice="",o.apiSecurityError="",Ir(),m(),or();return}if(d==="clear-webserver-log-output"){Jn();return}if(d==="copy-webserver-log-output"){jh();return}if(d==="start-debug-recording"){of(l.dataset.debugMinutes||15);return}if(d==="start-rolling-debug-recording"){nf();return}if(d==="select-debug-recording-duration"){zh(l.dataset.debugMinutes||15);return}if(d==="stop-debug-recording"){sf();return}if(d==="freeze-debug-recording"){af();return}if(d==="download-debug-recording"){pf();return}if(d==="copy-debug-recording"){gf();return}if(d==="confirm-settings-backup-restore"){pm();return}if(d==="confirm-restart"){Kt("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"});return}if(d==="select-surface"){const c=l.dataset.surface==="native";if(o.nativeOpen===c){o.nativeOpen&&Rr();return}o.nativeOpen=c,Js(o.nativeOpen?"native":"app"),o.controlError="",o.controlNotice="",o.settingsInfoOpen="",o.updateModalOpen=!1,o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,fe(),De(),bn(),o.systemModal="",o.nativeOpen&&Rr(),m(),pa(),window.requestAnimationFrame(()=>{o.nativeOpen?o.nativeApp&&o.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}if(d==="toggle-overview-theme"){Hd(o.overviewTheme==="light"?"dark":"light"),m();return}if(d==="select-hp-visual"){xd(l.dataset.hpVisual==="compact"?"compact":"schematic"),m();return}if(d==="select-hp-layout"){Dd(l.dataset.hpLayout||"equal"),m();return}if(d==="select-step"){o.currentStep=l.dataset.stepId||"generation",m();return}if(d==="apply-quickstart-flow-source"){Mm();return}if(d==="refresh-quickstart-flow-signal"){Pm();return}if(d==="start-quickstart-flow-test"){Lm();return}if(d==="abort-quickstart-flow-test"){Om();return}if(d==="apply-quickstart-thermostat-source"){xm();return}if(d==="previous-step"){qs(-1),m();return}if(d==="next-step"){qs(1),m();return}if(d==="select-settings-option"){const c=l.dataset.selectKey||"",g=l.dataset.selectOption||"";c&&g&&String(E(c)||"")!==g&&Br(c,g);return}if(d==="toggle-overview-control"){const c=l.dataset.controlKey||"",g=(l.dataset.controlState||"").toLowerCase();c&&(g==="on"||g==="off")&&Hm(c,g==="on");return}if(d==="select-overview-control-option"){const c=l.dataset.controlKey||"",g=l.dataset.controlOption||"";c&&g&&String(E(c)||"")!==g&&Br(c,g);return}if(d==="suggest-curve-fallback"){const c=Fl();c&&Va("curveFallbackSupply",c.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");return}if(d==="apply"||d==="reset"){Jm(d);return}if(d==="run-firmware-check"){Fm();return}if(d==="install-firmware-update"){Im();return}if(d==="install-firmware-connection-switch"){Wm();return}if(d==="install-firmware-topology-switch"){Bm();return}if(d==="toggle-firmware-advanced"){o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen?(o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,fe(),De()):o.firmwareAdvancedOpen=!0,m();return}if(d==="toggle-firmware-connection-switch"){o.firmwareConnectionSwitchOpen=!o.firmwareConnectionSwitchOpen,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareConnectionSwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,fe(),De()),m();return}if(d==="toggle-firmware-topology-switch"){o.firmwareTopologySwitchOpen=!o.firmwareTopologySwitchOpen,o.firmwareTopologySwitchConfirmed=!1,o.firmwareTopologySwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,fe(),De()),m();return}if(d==="toggle-firmware-upload"){o.updateManualUploadOpen?(o.updateManualUploadOpen=!1,fe()):(o.firmwareAdvancedOpen=!0,o.updateManualUploadOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateTestFirmwareOpen=!1,De(),o.updateManualUploadError=""),m();return}if(d==="upload-firmware-file"){_m();return}if(d==="toggle-firmware-test"){o.updateTestFirmwareOpen?(o.updateTestFirmwareOpen=!1,De()):(o.firmwareAdvancedOpen=!0,o.updateTestFirmwareOpen=!0,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,fe(),o.updateTestFirmwareError=""),m();return}if(d==="install-firmware-test"){jm();return}if(d==="save-web-auth"){Gm();return}if(d==="disable-web-auth"){Qm();return}}function Em(e){const t=e.target.closest("[data-curve-key]");!t||!ce()||(o.draggingCurveKey=t.dataset.curveKey||"",tc(e.clientY))}function $m(e){typeof Ns=="function"&&Ns(e),o.draggingCurveKey&&tc(e.clientY)}function Am(){if(!o.draggingCurveKey)return;const e=o.draggingCurveKey,t=we(e,E(e));o.draggingCurveKey="",Va(e,t,"Curvepunt bijgewerkt.")}async function Br(e,t){const n=L[e];o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.entities[e]={...o.entities[e]||{},state:t,value:t},m();try{const r=await fetch(`${G(n.domain,n.name,"set")}?option=${encodeURIComponent(t)}`,{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${n.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.entities.firmwareUpdateChannel={...o.entities.firmwareUpdateChannel||{},state:t,value:t},Ma(t),m(),await Pa(),o.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(o.controlNotice="Logger level bijgewerkt.",o.systemModal==="webserver-logs"&&$n()):e==="webServerLogHistoryEnabled"?(enabled?(o.webServerLogHistoryLoaded=!1,$n()):Jn(),o.systemModal==="webserver-logs"&&m()):o.appView==="settings"?await I(Rt(),"all"):await I(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...ht,...Do],"state"),e==="strategy"&&o.appView!=="settings"&&await I(ce(t)?pe.map(a=>a.key):ro,"state")}catch(r){o.controlError=`${n.name} kon niet worden bijgewerkt. ${r.message}`}finally{o.busyAction="",m()}}async function Hm(e,t){const n=L[e];if(n){o.busyAction=`switch-${e}`,o.controlNotice="",o.controlError="",m();try{const r=t?"turn_on":"turn_off",a=await fetch(G(n.domain,n.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:t,state:t},o.controlNotice=`${n.name} ${t?"ingeschakeld":"uitgeschakeld"}.`,o.busyAction="",o.appView==="overview"?await I([...Io,...Pe,"setupComplete",...ao],"state"):o.appView==="settings"?(await I(Rt(),"all"),Fa.includes(e)&&ko()):await I(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...ht,...Do],"state"),m()}catch(r){o.controlError=`${n.name} aanpassen mislukt (${r.message}).`,m()}finally{o.busyAction="",m()}}}async function Mm(){const e=Yo();if(!e.canApply){o.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",m();return}o.busyAction="quickstart-flow-source",o.controlNotice="",o.controlError="",m();const t=async(n,r)=>{if(!v(n))return;const a=E(n);if(typeof r=="boolean"&&A(n)===r||typeof r!="boolean"&&String(a)===String(r))return;const i=await Ro(n,r);o.entities[n]={...o.entities[n]||{},value:i,state:i}};try{e.requiresCic?(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),await t("flowSource","CIC"),o.quickStartCicFeedUrlDraft=null,o.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await t("qFlowSource",e.qFlowTarget),await t("flowSource","Outdoor unit"),o.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await I(ft,"all")}catch(n){o.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${n.message}`}finally{o.busyAction="",m()}}async function Pm(){o.busyAction="quickstart-flow-refresh",o.controlNotice="",o.controlError="",m();try{await I(ft,"all");const e=Yo();o.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){o.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{o.busyAction="",m()}}async function Zl(e,t){const n=L[e];if(!n||!v(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");const r=await fetch(G(n.domain,n.name,t?"turn_on":"turn_off"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`)}async function Nm(){const e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(n=>{o.optionalMissingEntities&&delete o.optionalMissingEntities[n],delete o.entities[n]}),await I(e,"all");const t=e.filter(n=>!o.entities[n]);if(t.length){const n=t.map(r=>L[r]?.name||r).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${n}.`)}}async function Rm(){for(let e=0;e<40;e+=1){await new Promise(t=>window.setTimeout(t,1e3));try{await I(ft,"state")}catch{return}if(!A("quickFlowTest")){o.busyAction!=="quickstart-flow-test-abort"&&(o.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),m();return}}}async function Lm(){if(!Yo().canRunFlowTest){o.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",m();return}o.busyAction="quickstart-flow-test-start",o.controlNotice="",o.controlError="",m();let t=!1;try{if(await Nm(),!A("cm100Active")){const a=L.commissioningCm100Start,i=await fetch(G(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);t=!0}let n=A("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!n&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await I(["commissioningStatus","cm100Active"],"state"),n=A("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";if(!n){const a=String(E("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await Zl("quickFlowTest",!0),await I(ft,"all");const r=String(E("commissioningStatus")||"").trim();if(!A("quickFlowTest"))throw new Error(r||"De waterpomptest kon niet worden gestart.");o.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",Rm()}catch(n){if(t&&!A("quickFlowTest"))try{const r=L.commissioningCm100Stop;await fetch(G(r.domain,r.name,"press"),{method:"POST"})}catch{}o.controlError=`Waterpomptest starten mislukt. ${n.message}`}finally{o.busyAction="",m()}}async function Om(){o.busyAction="quickstart-flow-test-abort",o.controlNotice="",o.controlError="",m();try{await Zl("quickFlowTest",!1),await I(ft,"all"),o.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){o.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{o.busyAction="",m()}}async function xm(){const e=ei();if(!e.canApply){o.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",m();return}o.busyAction="quickstart-thermostat-source",o.controlNotice="",o.controlError="",m();const t=async(n,r)=>{if(!v(n))return;const a=E(n);if(typeof r=="boolean"&&A(n)===r||typeof r!="boolean"&&String(a)===String(r))return;const i=await Ro(n,r);o.entities[n]={...o.entities[n]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await t("otEnabled",!0):e.selectedSource==="CIC"&&(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),o.quickStartCicFeedUrlDraft=null),await t("roomTempSource",e.selectedSource),await t("roomSetpointSource",e.selectedSource),o.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await I(Fn,"all")}catch(n){o.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${n.message}`}finally{o.busyAction="",m()}}async function Fm(){const e=L.checkFirmwareUpdates;if(e){o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateCheckBusy=!0,o.controlError="",o.controlNotice="",m();try{await Yn("current build",{poll:!1,force:!0}),Ma();const t=await fetch(G(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);await Pa(),o.controlNotice="Firmwarecontrole bijgewerkt."}catch(t){o.controlError=`Firmwarecontrole mislukte. ${t.message}`}finally{o.updateCheckBusy=!1,m()}}}async function Dm(){try{await I(ia,"all",{concurrency:At,forceMissing:!0}),o.updateModalOpen&&m()}catch{}}async function Yn(e,t={}){const n=L.firmwareUpdateTarget;if(!n||!v("firmwareUpdateTarget"))return!1;const r=String(e||"").trim();if(!r)return!1;if(!t.force&&String(E("firmwareUpdateTarget")||"").trim()===r)return!0;o.entities.firmwareUpdateTarget={...o.entities.firmwareUpdateTarget||{},state:r,value:r};const a=await fetch(`${G(n.domain,n.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.poll!==!1?(Ma(),await Pa({expectedBuildLabel:t.expectedBuildLabel||""})):!0}async function Im(){const e=ie();if(e){o.firmwareAdvancedOpen=!1,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,fe(),De(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=Ht(e),o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallMode="normal",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",m();try{await Yn("current build",{poll:!1,force:!0}),o.updateInstallTargetVersion=Ht(ie()||{})||o.updateInstallTargetVersion,Un();const t=L.installFirmwareUpdateTarget,n=t&&v("installFirmwareUpdateTarget")?G(t.domain,t.name,"press"):G("update","Firmware Update","install"),r=await fetch(n,{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);await Uo({initialDelayMs:Bo,pollDelayMs:Wn})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||o.updateInstallTargetVersion,o.controlNotice=""):o.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(t){o.controlError=`OTA-update kon niet worden gestart. ${t.message}`}finally{_o(),m()}}}async function Wm(){const e=ba(),t=L.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareConnectionSwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",m();return}o.updateManualUploadOpen=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,fe(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="connection-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=Z(),o.updateInstallTargetVersion=oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.controlError="",o.controlNotice="",m();try{if(!await Yn("alternate connection",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=Ht(ie()||{})||oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,m(),Un();const r=await fetch(G(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(await Uo({initialDelayMs:Bo,pollDelayMs:Wn}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||o.updateInstallTargetVersion||"",o.firmwareConnectionSwitchConfirmed=!1,o.controlNotice="";else{const i=Ie(e.targetConnection);o.controlNotice=`Verbindingswissel naar ${i} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(n){o.controlError=`Verbindingswissel kon niet worden gestart. ${n.message}`}finally{_o(),m()}}}async function Bm(){const e=va(),t=L.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareTopologySwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de opstellingswissel.",m();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,fe(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="topology-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=e.targetTopology,o.updateInstallTargetVersion=oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.controlError="",o.controlNotice="",m();try{if(!await Yn("alternate topology",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=Ht(ie()||{})||oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,m(),Un();const r=await fetch(G(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(await Uo({initialDelayMs:Bo,pollDelayMs:Wn}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||o.updateInstallTargetVersion||"",o.firmwareTopologySwitchConfirmed=!1,o.controlNotice="";else{const i=Mo(e.targetTopology);o.controlNotice=`Opstellingswissel naar ${i} is gestart. Wacht tot het device met die opstelling terugkomt.`}}catch(n){o.controlError=`Opstellingswissel kon niet worden gestart. ${n.message}`}finally{_o(),m()}}}async function Vm(e,t){const n=ya(e,t);if(!n)throw new Error("Geen geldig PR-target gevonden.");const r=await fetch(n.releaseApiUrl,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});if(r.status===404)throw new Error(`Geen testfirmware gevonden voor PR ${e}. Controleer of het label de build al heeft gepubliceerd.`);if(!r.ok)throw new Error(`GitHub API gaf HTTP ${r.status}`);const a=await r.json(),i=Array.isArray(a.assets)?a.assets:[],l=i.find(g=>g&&g.name===t.otaFileName),u=i.find(g=>g&&g.name===t.md5FileName);if(!l||!l.browser_download_url)throw new Error(`PR ${e} bevat geen OTA-build voor ${t.label}.`);if(!u||!u.browser_download_url)throw new Error(`PR ${e} mist de md5-controle voor ${t.label}.`);const d=String(a.name||a.tag_name||`PR ${e}`).trim(),c=String(l.updated_at||a.published_at||"").trim();return{otaUrl:l.browser_download_url,md5Url:u.browser_download_url,label:c?`${d} \xB7 ${c.replace("T"," ").replace("Z"," UTC")}`:d}}async function Xi(e,t){if(!v(e))throw new Error(`${L[e]?.name||e} is niet beschikbaar op deze firmware.`);const n=await Ro(e,t);o.entities[e]={...o.entities[e]||{},state:n,value:n}}async function jm(){const e=No(),t=jn(),n=L.installFirmwareTestOta;if(!e){o.updateTestFirmwareError="Vul een geldig PR-nummer in.",m();return}if(!t.available){o.updateTestFirmwareError=t.error||"Dit firmwaretarget wordt niet herkend.",m();return}if(!o.updateTestFirmwareConfirmed){o.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",m();return}if(!n||!v("installFirmwareTestOta")){o.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",m();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,fe(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion="",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallMode="test-firmware",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null,m();let r=!1;try{const a=await Vm(e,t);o.updateTestFirmwareBuild=a.label,m(),await Xi("firmwareTestOtaUrl",a.otaUrl),await Xi("firmwareTestOtaMd5Url",a.md5Url),r=!0,Un();const i=await fetch(G(n.domain,n.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);await Uo({initialDelayMs:Bo,pollDelayMs:Wn})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||`PR ${e}`,o.updateTestFirmwareOpen=!1,De(),o.controlNotice=""):o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){r&&Il(a.message)?o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:o.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{_o(),m()}}async function _m(){const e=o.updateManualUploadFile;if(!e){o.updateManualUploadError="Kies eerst een firmwarebestand.",m();return}o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallMode="",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateManualUploadError="",m();try{const t=new FormData;t.append("update",e,e.name||"firmware.bin");const n=await fetch("/update",{method:"POST",body:t});if(!n.ok)throw new Error(`HTTP ${n.status}`);o.updateManualUploadOpen=!1,fe(),await Uo()?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||o.updateInstallTargetVersion||"",o.controlNotice=""):o.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(t){o.updateManualUploadError=`Handmatige upload mislukte. ${t.message}`}finally{_o(),m()}}async function Va(e,t,n=""){const r=L[e],a=we(e,t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=a,m();try{const i=await fetch(`${G(r.domain,r.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=n||`${r.name} bijgewerkt.`,await I(o.appView==="settings"?Rt():[...new Set([e,"setupComplete","strategy",...ht,...Do])],"state")}catch(i){o.inputDrafts[e]=String(a).replace(".",","),o.controlError=`${r.name} kon niet worden bijgewerkt. ${i.message}`}finally{o.busyAction="",m()}}async function Km(e,t){const n=L[e],r=so(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",m();try{const a=await fetch(`${G(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.controlNotice=`${n.name} bijgewerkt.`,await I(o.appView==="settings"?Rt():[e,"setupComplete"],"state")}catch(a){o.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",m()}}async function Um(e,t){const n=L[e],r=String(t||"").trim();o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=r,m();try{const a=await fetch(`${G(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:r,state:r},delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${n.name} bijgewerkt.`,await I(o.appView==="settings"?Rt():[e,"setupComplete"],"state")}catch(a){o.inputDrafts[e]=r,o.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",m()}}async function Vr(e,t){const n=L[e],r=et(t)||Ao,a=await fetch(`${G(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:r,state:r},r}async function Xl(e,t){const n=L[e],r=t?"turn_on":"turn_off",a=await fetch(G(n.domain,n.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:t,state:t},t}async function ec(){await I([...new Set([...Io,...Pe,"setupComplete",...ao])],"state")}async function zm(e,t){const n=L[e],r=et(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",m();try{await Vr(e,r),o.controlNotice=`${n.name} bijgewerkt.`,await I(o.appView==="settings"?Rt():[e,"setupComplete","openquattEnabled"],"state")}catch(a){o.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",m()}}async function Gm(){const e=o.authStatus||{},t=e.enabled===!0,n=e.setup_window_active===!0,r=String(o.authDraftCurrentPassword||""),a=String(o.authDraftUsername||"").trim(),i=String(o.authDraftNewPassword||""),l=String(o.authDraftConfirmPassword||"");if(!a||!i){o.authError="Vul een gebruikersnaam en wachtwoord in.",m();return}if(i!==l){o.authError="De twee wachtwoorden zijn niet gelijk.",m();return}if(t&&!r){o.authError="Vul je huidige wachtwoord in.",m();return}if(!t&&!n){o.authError="Houd de herstelknop 5 seconden vast.",m();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",m();return}o.authBusy=!0,o.authError="",o.authNotice="",m();try{const u=new URLSearchParams;u.set("csrf_token",e.csrf_token),u.set("current_password",r),u.set("new_username",a),u.set("new_password",i);const d=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:u.toString()}),c=await d.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!d.ok||!c.ok)throw new Error(c.error||`HTTP ${d.status}`);await lo({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername=String(o.authStatus?.username||a).trim(),o.authNotice=t?"Login aangepast.":"Login staat nu aan.",o.authError="",m()}catch(u){o.authError=`Opslaan is mislukt. ${u.message}`,m()}finally{o.authBusy=!1,m()}}async function Qm(){const e=o.authStatus||{};if(!e.enabled){o.authNotice="Login staat al uit.",o.authError="",m();return}const t=String(o.authDraftCurrentPassword||"");if(!t){o.authError="Vul je huidige wachtwoord in.",m();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",m();return}o.authBusy=!0,o.authError="",o.authNotice="",m();try{const n=new URLSearchParams;n.set("csrf_token",e.csrf_token),n.set("current_password",t);const r=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:n.toString()}),a=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!a.ok)throw new Error(a.error||`HTTP ${r.status}`);await lo({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername="",o.authNotice="Login staat nu uit.",o.authError="",m()}catch(n){o.authError=`Uitzetten is mislukt. ${n.message}`,m()}finally{o.authBusy=!1,m()}}async function qr(e){const t=et(e);if(e&&!t){o.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",m();return}if(t&&!v("openquattResumeAt")){o.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",m();return}o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",m();let n=!1;try{v("openquattResumeAt")&&(await Vr("openquattResumeAt",t||Ao),n=!!t),await Xl("openquattEnabled",!1),o.pauseResumeDraft=t?Fr(t):"",o.systemModal="",o.controlNotice=t?`Openquatt regeling is tijdelijk uitgeschakeld tot ${xa(t)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await ec()}catch(r){if(n&&v("openquattResumeAt"))try{await Vr("openquattResumeAt",Ao)}catch{}o.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${r.message}`}finally{o.busyAction="",m()}}async function Ym(){o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",m();try{await Xl("openquattEnabled",!0),o.pauseResumeDraft="",o.systemModal="",o.controlNotice="Openquatt regeling is weer actief.",await ec()}catch(e){o.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{o.busyAction="",m()}}async function Jm(e){const t=L[e];o.busyAction=e,o.controlError="",o.controlNotice="",m();try{const n=await fetch(G(t.domain,t.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);o.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await I(["setupComplete"],"state"),e==="reset"&&(o.currentStep=On[0].id,o.quickStartModalMode="wizard",o.quickStartModalOpen=!0),o.quickStartModalOpen=e!=="apply",Et("overview",{syncMode:"replace"}),ae({forceFast:!0})}catch(n){o.controlError=`Actie mislukt voor "${t.name}". ${n.message}`}finally{o.busyAction="",m()}}function Zm(){window.requestAnimationFrame(()=>{if(!o.root||o.systemModal!=="service-task-hp-water-calibration")return;const e=o.root.querySelector("[data-oq-service-task-scroller]"),t=o.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!t)return;const n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),a=e.scrollTop+r.top-n.top-24;e.scrollTop=Math.max(0,a)})}async function Kt(e,t={}){const n=L[e];if(n){o.busyAction=e,o.controlError="",o.controlNotice="",m();try{const r=await fetch(G(n.domain,n.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||Is.has(e)||(bn(),o.systemModal=""),o.controlNotice=t.successNotice||`${n.name} gestart.`,t.reconnectMode&&Ha(t.reconnectMode),Array.isArray(t.refreshKeys)&&t.refreshKeys.length){const i=Number(t.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await I(t.refreshKeys,"state")}}catch(r){e==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!1,o.commissioningTaskLock=""):e==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!1,o.commissioningTaskLock=""):e==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!1,o.commissioningTaskLock=""):e==="airPurgeStart"?(o.pendingAirPurgeStart=!1,o.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock=""):e==="manualFlowStart"?(o.pendingManualFlowStart=!1,o.commissioningTaskLock=""):e==="manualHpStart"&&(o.pendingManualHpStart=!1,o.commissioningTaskLock=""),o.controlError=`${t.errorPrefix||`Actie mislukt voor "${n.name}"`}. ${r.message}`}finally{o.busyAction="",m(),e==="hpWaterCalibrationApply"&&Zm()}}}function tc(e){const t=o.root?o.root.querySelector(".oq-helper-curve-svg"):null;if(!t||!o.draggingCurveKey)return;const n=t.getBoundingClientRect(),r=22,a=180,i=(e-n.top)/n.height*240,u=70-(Math.min(r+a,Math.max(r,i))-r)/a*50,d=we(o.draggingCurveKey,u);String(E(o.draggingCurveKey))!==String(d)&&(o.drafts[o.draggingCurveKey]=d,m())}function Go({key:e,value:t,meta:n,controlClass:r,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
      <label class="${r}">
        <input
          class="${a}"
          type="number"
          data-oq-field="${s(e)}"
          min="${n.min}"
          max="${n.max}"
          step="${n.step}"
          value="${s(t)}"
          ${i}
          ${o.loadingEntities?"disabled":""}
        >
        ${l}
      </label>
    `}function Xm(){const e=[];e.push(ce()?"Stooklijn":"Power House");const t=String(E(ce()?"curveControlProfile":"phResponseProfile")||"").trim();t&&e.push(`profiel ${t}`);const n=String(E("flowControlMode")||"").trim();return n&&e.push(`flow ${n==="Manual PWM"?"handmatig":"setpoint"}`),n==="Manual PWM"&&v("manualIpwm")?e.push(`iPWM ${_("manualIpwm")}`):v("flowSetpoint")&&e.push(`flow ${_("flowSetpoint")}`),v("dayMax")&&e.push(`dag ${_("dayMax")}`),v("silentMax")&&e.push(`silent ${_("silentMax")}`),v("maxWater")&&e.push(`max water ${_("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function v(e){return!!o.entities[e]}function B(e,t="\u2014"){const n=o.entities[e];if(!n)return t;if(typeof n.state=="string"&&n.state.trim()!=="")return n.state;const r=n.value??n.state;return r==null||r===""?t:typeof r=="boolean"?r?"Aan":"Uit":typeof r=="number"&&!Number.isNaN(r)&&n.uom?`${r} ${n.uom}`:String(r)}function H(e){const t=Number(E(e));return Number.isNaN(t)?NaN:t}function oc(e){const t=String(e||"").toLowerCase();return t.includes("cop")||t.includes("eer")}function nc(e){const t=String(e||"");if(t==="totalEer"){const n=H("totalCoolingPower"),r=H("coolingPowerInput"),a=Number.isNaN(r)?H("totalPower"):r;return!Number.isNaN(n)&&!Number.isNaN(a)&&a>=5?n/a:NaN}if(t==="totalCop"){const n=H("totalHeat"),r=H("heatingPowerInput"),a=Number.isNaN(r)?H("totalPower"):r;return!Number.isNaN(n)&&!Number.isNaN(a)&&a>=5?n/a:NaN}return NaN}function Eo(e,t=""){const n=String(o.entities[e]?.uom||"").trim();return n||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||t}function We(e){const t=o.entities[e],n=nc(e);if(!t)return Number.isNaN(n)?"\u2014":D(n,1,Eo(e));const r=H(e);if(Number.isNaN(r))return Number.isNaN(n)?B(e):D(n,1,Eo(e));const a=r>0||Number.isNaN(n)?r:n,i=oc(e)?1:0;return D(a,i,Eo(e))}function A(e){const t=o.entities[e];if(!t)return!1;if(typeof t.value=="boolean")return t.value;const n=String(t.state??t.value??"").toLowerCase();return n==="on"||n==="true"||n==="1"}function uo(){return!v("trendHistoryEnabled")||A("trendHistoryEnabled")}function rc(){const e=o.entities.setupComplete;if(!e)return null;const t=String(e.state??e.value??"").trim().toLowerCase();return!t||t==="unknown"||t==="unavailable"?null:t==="on"||t==="true"||t==="1"?!0:t==="off"||t==="false"||t==="0"?!1:null}function eh(){return`
      <div class="oq-helper-app-nav">
        ${ta.filter(e=>e.id!=="diagnosis"||uo()).map(e=>`
          <button
            class="oq-helper-app-tab ${o.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            ${oa(e.icon,"oq-helper-app-tab-icon")}
            <span>${s(e.label)}</span>
          </button>
        `).join("")}
      </div>
    `}function th(e=o.appView){return ta.find(t=>t.id===e)?.label||"OpenQuatt"}function es(){if(typeof document>"u")return;if(o.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}const e=th();document.title=`${e} \u2022 OpenQuatt`}function ts(){if(typeof document>"u")return;if(o.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");const e=o.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}const os="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",oh="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==",ac=250;function ic(){if(typeof window>"u")return[];const e=window.__OQ_DEV_WEBSERVER_LOGS__,t=typeof e=="function"?e():e;return Array.isArray(t)?t.map(n=>String(n||"")).filter(n=>n.trim()!==""):[]}function po(){return typeof window>"u"?!1:ic().length>0}function nh(){return`${Je()}/events`}function rh(){return`${Je()}/openquatt/logs/recent`}function En(){const e=o.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;const t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function sc(){return o.nativeOpen?"Niet beschikbaar":po()?"Voorbeeld":o.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function ah(e){const t=Math.max(0,Math.floor(Number(e)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function lc(e){const t=Number(e)||0;if(t>9466848e5){const n=e instanceof Date?e:new Date(t),r={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(n)}catch{return n.toLocaleString("nl-NL",r)}}return ah(t)}function ih(e){const t=Number(e)||0;if(t>9466848e5)return new Date(t).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});const n=Math.max(0,Math.floor(t/1e3)),r=Math.floor(n/3600),a=Math.floor(n%3600/60),i=n%60;return`Sinds opstart: ${r}u ${a}m ${i}s`}function sh(){return o.nativeOpen?"Niet beschikbaar":po()?En()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":En()?"Buffer aan":"Buffer uit"}function lh(){return En()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function ja(){return o.entities?.debugLevel||null}function cc(e=ja()){const t=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return t.length?t:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function ch(e=ja()){const t=String(e?.value??e?.state??"").trim(),n=cc(e);return n.includes(t)?t:n.includes("INFO")?"INFO":n[0]||""}function uc(e,t=null){if(!e||!t)return!1;const n=Number(e.seq),r=Number(t.seq);if(Number.isFinite(n)&&Number.isFinite(r)&&n===r)return!0;const a=String(e.raw??e.text??"").trim(),i=String(t.raw??t.text??"").trim();if(!a||a!==i)return!1;const l=Number(e.receivedAt??e.ts??0),u=Number(t.receivedAt??t.ts??0);return Math.abs(l-u)<=2e3}function uh(e,t){const n=Number(e.receivedAt??e.ts??0),r=Number(t.receivedAt??t.ts??0);if(n!==r)return n-r;const a=Number(e.seq??0),i=Number(t.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(t.raw??""))}function dc(e,{prepend:t=!1}={}){if(!Array.isArray(e)||e.length===0)return;const n=t?[...e,...o.webServerLogEntries]:[...o.webServerLogEntries,...e];n.sort(uh);const r=[];for(const a of n){const i=r[r.length-1]||null;uc(a,i)||r.push(a)}o.webServerLogEntries=r.slice(-ac)}function _a(e,t={}){const n=Nh(e).trimEnd(),r=Number(t.receivedAt),a=Number(t.seq);return{raw:e,text:n,tone:Rh(e),receivedAt:Number.isFinite(r)?r:Date.now(),seq:Number.isFinite(a)?a:void 0}}function dh(e,t){const r=Math.max(0,t-e-1)*9e4;return Date.now()-r}function ph(){const e=ic(),t=e.length;return e.map((n,r)=>_a(n,{receivedAt:dh(r,t),seq:r+1}))}function gh(){const e=Zn();e&&(e.scrollTop=e.scrollHeight)}function vt(){const e=Zn();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Ka(e)}:null}function mh(e){if(!e)return;const t=Zn();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const n=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,n)}function gt(e,t=!0){if(!e)return;const n=Number(o.webServerLogScrollRestoreToken||0)+1;o.webServerLogScrollRestoreToken=n;const r=()=>{o.webServerLogScrollRestoreToken!==n||o.systemModal!=="webserver-logs"||mh(e)};if(t){window.requestAnimationFrame(r);return}r()}function pc(){return o.root?o.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}function hh(){const e=pc();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Ka(e)}:null}function fh(e){if(!e)return;const t=pc();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const n=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,n)}function ns(e,t=!0){if(!e)return;const n=Number(o.cm100CommissioningScrollRestoreToken||0)+1;o.cm100CommissioningScrollRestoreToken=n;const r=()=>{o.cm100CommissioningScrollRestoreToken!==n||o.systemModal!=="cm100-commissioning"||fh(e)};if(t){window.requestAnimationFrame(r);return}r()}function gc(){return o.root?o.root.querySelector("[data-oq-service-task-scroller]"):null}function bh(){const e=gc();return e?{scrollTop:e.scrollTop}:null}function vh(e){if(!e)return;const t=gc();t&&(t.scrollTop=Math.max(0,e.scrollTop))}function rs(e,t=!0){if(!e)return;const n=Number(o.serviceTaskModalScrollRestoreToken||0)+1;o.serviceTaskModalScrollRestoreToken=n;const r=()=>{o.serviceTaskModalScrollRestoreToken!==n||!String(o.systemModal||"").startsWith("service-task-")||vh(e)};if(t){window.requestAnimationFrame(r);return}r()}function mc(){return o.root?o.root.querySelector("[data-oq-history-storage-scroller]"):null}function yh(){const e=mc();return e?{scrollTop:e.scrollTop}:null}function wh(e){if(!e)return;const t=mc();t&&(t.scrollTop=Math.max(0,e.scrollTop))}function as(e,t=!0){if(!e)return;const n=Number(o.historyStorageModalScrollRestoreToken||0)+1;o.historyStorageModalScrollRestoreToken=n;const r=()=>{o.historyStorageModalScrollRestoreToken!==n||o.systemModal!=="history-storage"||wh(e)};if(t){window.requestAnimationFrame(r);return}r()}async function $n(e={}){if(o.nativeOpen||typeof window.fetch!="function")return;const t=e.scrollState||vt(),n=Number(o.webServerLogHistoryRequestToken||0)+1;o.webServerLogHistoryRequestToken=n,o.webServerLogHistoryLoading=!0,o.webServerLogHistoryError="";try{const r=await window.fetch(rh(),{headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.json();if(o.systemModal!=="webserver-logs"||o.webServerLogHistoryRequestToken!==n)return;const i=qh(a);o.webServerLogHistoryLoaded=!0,i.length>0&&(dc(i,{prepend:!0}),o.webServerLogRecentTail=i.slice(-4).map(l=>String(l.raw??l.text??"")),o.webServerLogRecentAnchorAt=Date.now())}catch(r){o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===n&&(o.webServerLogHistoryError=r instanceof Error?r.message:"Recente logs konden niet worden opgehaald.")}finally{o.webServerLogHistoryRequestToken===n&&(o.webServerLogHistoryLoading=!1),o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===n&&(m(),gt(t))}}function Sh(e,t=0){if(!e||typeof e!="object")return null;const n=String(e.raw??"").trim()||String(e.message??"").trim();return n?_a(n,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??t)}):null}function qh(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((n,r)=>Sh(n,r+1)).filter(n=>n!==null)}function kh(e){if(!e||!Array.isArray(o.webServerLogRecentTail)||o.webServerLogRecentTail.length===0||Date.now()-Number(o.webServerLogRecentAnchorAt||0)>2500)return!1;const n=String(e.raw??e.text??"").trim();return n?o.webServerLogRecentTail.includes(n):!1}function Ch(e,t=o.webServerLogEntries){return!e||!Array.isArray(t)||t.length===0?!1:t.some(n=>uc(e,n))}function Th(){po()&&o.webServerLogEntries.length===0&&(o.webServerLogEntries=ph()),o.webServerLogCopyMessage="",o.webServerLogCopyError="",o.systemModal="webserver-logs",m(),I(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(o.systemModal!=="webserver-logs")return;const e=vt();m(),gt(e)}),gh(),(!o.webServerLogHistoryLoaded||o.webServerLogEntries.length===0)&&$n()}function Jn(){o.webServerLogEntries=[],o.webServerLogError="",o.webServerLogHistoryError="",o.webServerLogHistoryLoading=!1,o.webServerLogHistoryLoaded=!1,o.webServerLogScrollRestoreToken=Number(o.webServerLogScrollRestoreToken||0)+1,o.webServerLogCopyMessage="",o.webServerLogCopyError="",o.webServerLogHistoryRequestToken+=1,o.webServerLogRecentTail=[],o.webServerLogRecentAnchorAt=0,o.systemModal==="webserver-logs"&&m()}function is(){const e=vt();Ge(),o.webServerLogEnabled=null,o.webServerLogConnected=!1,Jn(),o.systemModal==="webserver-logs"&&$n({scrollState:e})}function ss(){if(po()){Ge();return}if(!(o.mounted&&!o.nativeOpen&&o.systemModal==="webserver-logs")){Ge();return}if(o.webServerLogEnabled===!1){Ge();return}o.webServerLogSource||Eh()}function Eh(){if(po()){o.webServerLogEnabled=!0,o.webServerLogConnected=!1,o.webServerLogError="",m();return}if(typeof window.EventSource!="function"){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="Deze browser ondersteunt geen live logstream.",m();return}try{const e=new window.EventSource(nh());o.webServerLogSource=e,e.addEventListener("open",$h),e.addEventListener("ping",Ah),e.addEventListener("log",Mh),e.onerror=Hh}catch(e){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",Ge(),m()}}function Ge(){const e=o.webServerLogSource;if(e)try{e.close()}catch{}o.webServerLogSource=null,o.webServerLogConnected=!1}function $h(){if(!o.webServerLogSource||o.nativeOpen)return;const e=o.systemModal==="webserver-logs"?vt():null;o.webServerLogEnabled=!0,o.webServerLogConnected=!0,o.webServerLogError="",m(),gt(e)}function Ah(){if(!o.webServerLogSource||o.nativeOpen)return;const e=o.systemModal==="webserver-logs"?vt():null;o.webServerLogEnabled=!0,o.webServerLogConnected||(o.webServerLogConnected=!0,o.webServerLogError="",m(),gt(e))}function Hh(){if(!o.webServerLogSource)return;const e=o.systemModal==="webserver-logs"?vt():null;o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="De live logstream kon niet worden geopend.",Ge(),m(),gt(e)}function Mh(e){if(!o.webServerLogSource||!e||typeof e.data!="string")return;const t=vt(),n=Ph(e.data);if(!n)return;const r=n.split(/\r?\n/).filter(d=>d.trim()!=="");if(r.length===0)return;const i=r.map(d=>_a(d)).filter(d=>!kh(d)&&!Ch(d));if(i.length===0)return;dc(i);const l=Oh(),u=Zn();Lh(l),xh(i,l),o.webServerLogEnabled=!0,u&&t&&gt(t,!1)}function Ph(e){const t=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!t)return"";const n=t.trim();if(n.startsWith("{")&&n.endsWith("}")||n.startsWith("[")&&n.endsWith("]"))try{const r=JSON.parse(n),a=typeof r=="string"?r:r?.message??r?.msg??r?.text??r?.data??r?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return t}function Nh(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function Rh(e){const t=String(e??""),n=Array.from(t.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=n.length-1;i>=0;i-=1){const l=n[i][1].split(";").map(u=>Number(u)).filter(u=>Number.isFinite(u));for(let u=l.length-1;u>=0;u-=1){const d=l[u];if(d===31||d===91)return"error";if(d===33||d===93)return"warning";if(d===32||d===92)return"info";if(d===36||d===96||d===34||d===35)return"debug";if(d===37||d===90||d===38||d===97)return"verbose"}}const r=t.match(/\[(E|W|I|D|V|VV)\]/i);if(!r)return"plain";const a=r[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function Lh(e){for(;o.webServerLogEntries.length>ac;)o.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function Oh(){return o.root?o.root.querySelector("[data-oq-webserver-log-output]"):null}function Zn(){return o.root?o.root.querySelector("[data-oq-webserver-log-scroller]"):null}function Ka(e){return e?e.scrollHeight-e.scrollTop-e.clientHeight<48:!1}function xh(e,t){if(!(!t||e.length===0)){t.dataset.webServerLogEmpty==="true"&&(t.dataset.webServerLogEmpty="false",t.innerHTML="");for(const n of e)t.insertAdjacentHTML("beforeend",hc(n))}}function hc(e){const t=lc(e.receivedAt),n=ih(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(n)}">${s(t)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function Fh(e=o.webServerLogEntries){return e.length?e.map(t=>hc(t)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function Dh(){const e=[];return o.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),o.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(o.webServerLogCopyMessage)}</span>
      </div>
    `),o.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogCopyError)}</p>`),o.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogHistoryError)}</p>`),o.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogError)}</p>`),e.length?e.join(""):""}function Ih(){const e=En(),t=o.loadingEntities||o.busyAction==="switch-webServerLogHistoryEnabled",n=sh(),r=lh(),a=Wh();return`
    <div class="oq-webserver-log-history-shell">
      <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="webserverLogHistory">
        <div class="oq-settings-system-row-copy">
          <p class="oq-settings-system-row-label">RAM log history</p>
          <strong class="oq-settings-system-row-value">${s(n)}</strong>
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
  `}function Wh(){const e=ja();if(!e)return"";const t=cc(e),n=ch(e),r=o.loadingEntities||o.busyAction==="save-debugLevel";return`
    <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="debugLevel">
      <div class="oq-settings-system-row-copy">
        <p class="oq-settings-system-row-label">Logger level</p>
        <strong class="oq-settings-system-row-value">${s(n||"Onbekend")}</strong>
        <p class="oq-settings-system-row-note">Past het runtime logniveau aan voor nieuwe firmwaremeldingen.</p>
      </div>
      <label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${r?"disabled":""}>
          ${t.map(a=>`<option value="${s(a)}" ${a===n?"selected":""}>${s(a)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>
    </div>
  `}function Bh(){return o.webServerLogEntries.map(e=>{const t=String(e.raw??e.text??"").trimEnd();return t.trim()?`${lc(e.receivedAt)} ${t}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function Vh(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(t)}return n}async function jh(){const e=Bh();if(o.webServerLogCopyMessage="",o.webServerLogCopyError="",!e){o.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",m();return}try{if(!await Vh(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.webServerLogCopyMessage=`${o.webServerLogEntries.length} logregel${o.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(t){o.webServerLogCopyError=t instanceof Error?t.message:"Kopi\xEBren naar het klembord is niet gelukt."}o.systemModal==="webserver-logs"&&m()}function _h(){const e=po();return`
    <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal" role="dialog" aria-modal="true" aria-labelledby="oq-webserver-log-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-webserver-log-modal-title">OpenQuatt log</h2>
          </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit logboek">&times;</button>
        </div>
        <p class="oq-helper-modal-copy">${e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde."}</p>
        ${Ih()}
        ${Dh()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${o.webServerLogEntries.length===0?"true":"false"}">
            ${Fh()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${o.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `}function Be(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(o.debugRecordingSamples)?o.debugRecordingSamples.length:0}function je(e=o.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function Xn(e=o.debugRecordingDeviceStatus){return je(e)&&e?.frozen===!0&&!e?.active}function $t(e){const t=Math.max(0,Math.round(Number(e||0)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return n>0?`${n}u ${String(r).padStart(2,"0")}m`:r>0?`${r}m ${String(a).padStart(2,"0")}s`:`${a}s`}function fc(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):bc()}function bc(){if(o.debugRecordingDeviceStatus)return Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!o.debugRecordingStartedAt)return 0;const e=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(o.debugRecordingStartedAt||e))}function er(){return o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":Xn()?"Rolling gestopt":o.debugRecordingActive&&je()?"Rolling actief":o.debugRecordingActive?"Bezig met opnemen":Be()>0?"Voltooid":"Niet gestart"}function Ua(){return Xn()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":o.debugRecordingActive&&je()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":o.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":Be()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function Kh(){return Xn()?"Gestopt":o.debugRecordingActive&&je()?`Rolling \xB7 ${$t(fc())}`:o.debugRecordingActive?`Loopt \xB7 ${$t(vc())}`:Be()>0?"Klaar":er()}function Uh(){const e=Number(o.debugRecordingSelectedMinutes||15);return Nr.map(n=>Number(n.minutes)).includes(e)?e:Number(Nr[0]?.minutes||15)}function zh(e){o.debugRecordingActive||(o.debugRecordingSelectedMinutes=Math.max(1,Number(e)||15),o.debugRecordingNotice="",o.debugRecordingError="",m())}function vc(){return je()?0:o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.remaining_s||0)*1e3):o.debugRecordingActive?Math.max(0,Number(o.debugRecordingEndsAt||0)-Date.now()):0}function Gh(){if(o.debugRecordingDeviceStatus){if(je()){const a=Math.max(1,Number(o.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,Be()/a*100))}const n=Math.max(1,Number(o.debugRecordingDeviceStatus.duration_s||0)),r=Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0));return!o.debugRecordingActive&&Be()>0?100:Math.max(0,Math.min(100,r/n*100))}if(!o.debugRecordingActive||!o.debugRecordingStartedAt||!o.debugRecordingEndsAt)return Be()>0?100:0;const e=Math.max(1,Number(o.debugRecordingEndsAt)-Number(o.debugRecordingStartedAt)),t=Math.max(0,Date.now()-Number(o.debugRecordingStartedAt));return Math.max(0,Math.min(100,t/e*100))}function yc(e=o.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function Qh(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}function wc(e){if(e?.recording?.active)return;const t=yc(e);if(t){o.debugRecordingAcknowledgedId=t;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",t)}catch{}}}function Sc(){const e=o.debugRecordingDeviceStatus,t=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&t===0)return"";const n=!!e.active;if(!n&&yc(e)===o.debugRecordingAcknowledgedId)return"";const r=je(e),a=$t(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=$t(Math.max(0,Number(e.remaining_s||0))*1e3),l=n?r?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:r?"Rolling gestopt":"Debug klaar",u=n?r?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:r?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
    <button
      class="oq-debug-recording-header-status${n?" oq-debug-recording-header-status--active":" oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${s(u)}"
      title="${s(u)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${s(l)}</span>
    </button>
  `}function Yh(){if(!o.root)return;const e=o.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;const t=e.querySelector(".oq-settings-system-row-value"),n=e.querySelector(".oq-settings-system-row-note");t&&(t.textContent=er()),n&&(n.textContent=Ua())}function za(e){const t={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return t[e]||t.status}function Jh(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${za(e)}</span>`}function Ue(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${za(e)}</span>`}function Zh(){return[...zt]}function Xh(){const e=[];return zt.forEach((t,n)=>{const r=o.entities?.[t]||{},a=String(r.uom??r.unit_of_measurement??"").trim();a&&e.push([n,a])}),e}function ef(e){return Array.isArray(e)?e.map((t,n)=>t===null?null:[n,t]).filter(Boolean):[]}function tr(){o.debugRecordingTimer&&(window.clearTimeout(o.debugRecordingTimer),o.debugRecordingTimer=null)}function go(){o.debugRecordingDevicePollTimer&&(window.clearTimeout(o.debugRecordingDevicePollTimer),o.debugRecordingDevicePollTimer=null)}function yt(e){return`${Je()}/openquatt/debug-recording/${e}`}function mo(e){const t=e&&typeof e=="object"?e:{};o.debugRecordingDeviceStatus=t,o.debugRecordingActive=!!t.active,o.debugRecordingStartedAt=t.active||Number(t.sample_count||0)>0?Date.now()-Math.max(0,Number(t.elapsed_s||0)*1e3):0,o.debugRecordingEndsAt=t.active?Date.now()+Math.max(0,Number(t.remaining_s||0)*1e3):0,o.debugRecordingLastSampleAt=Number(t.sample_count||0)>0?Date.now():0}function Ga(){mo({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function tf(){const e=await window.fetch(yt("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return mo(t),t}function or(e=2e3){go(),o.debugRecordingActive&&(o.debugRecordingDevicePollTimer=window.setTimeout(()=>{Qa({silent:!0})},Math.max(0,Number(o.systemModal==="debug-recording"?e:5e3)||0)))}async function Qa(e={}){e.silent||(o.debugRecordingBusy=!0,o.debugRecordingError="",m());try{await tf(),!o.debugRecordingActive&&e.silent&&(o.debugRecordingNotice="Debugopname is afgerond."),or()}catch(t){Ga(),o.debugRecordingError=`Status kon niet worden opgehaald. ${t.message||String(t)}`}finally{e.silent||(o.debugRecordingBusy=!1),!e.silent||o.systemModal==="debug-recording"?m():(_p(),Yh())}}async function qc(){const e=Bl(zt,"state");let t=null;for(let n=0;n<e.length;n+=1){const r=await window.fetch(yt(`configure?reset=${n===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[n].body});if(!r.ok)throw new Error(`configuratie HTTP ${r.status}`);t=await r.json()}if(Number(t?.entity_field_count||0)!==zt.length)throw new Error(`onvolledige debugset (${Number(t?.entity_field_count||0)}/${zt.length})`);return t}async function of(e){const t=Math.max(1,Number(e)||15);tr(),go(),o.debugRecordingBusy=!0,o.debugRecordingError="",o.debugRecordingNotice="",o.debugRecordingSamples=[],o.debugRecordingEvents=[],o.debugRecordingInitialValues=null,o.debugRecordingLastValues=null,o.debugRecordingDeviceBundle=null,o.debugRecordingLastSampleAt=0,o.debugRecordingSequence=0,m();try{await qc();const n=await window.fetch(yt(`start?duration_s=${encodeURIComponent(t*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();mo(r),or()}catch(n){Ga(),o.debugRecordingError=`Debugopname kon niet worden gestart. ${n.message||String(n)}`}finally{o.debugRecordingBusy=!1,m()}}async function nf(){tr(),go(),o.debugRecordingBusy=!0,o.debugRecordingError="",o.debugRecordingNotice="",o.debugRecordingSamples=[],o.debugRecordingEvents=[],o.debugRecordingInitialValues=null,o.debugRecordingLastValues=null,o.debugRecordingDeviceBundle=null,o.debugRecordingLastSampleAt=0,o.debugRecordingSequence=0,m();try{await qc();const e=await window.fetch(yt("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();mo(t),or()}catch(e){Ga(),o.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,m()}}async function rf(){const e=await window.fetch(yt("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return mo(t),go(),t}async function af(){tr(),o.debugRecordingBusy=!0,o.debugRecordingError="",m();try{await rf(),o.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){o.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,m()}}async function sf(e={}){tr(),go(),o.debugRecordingBusy=!0,o.debugRecordingError="",m();try{const t=await window.fetch(yt("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();mo(n),o.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(t){o.debugRecordingError=`Debugopname kon niet worden gestopt. ${t.message||String(t)}`}finally{o.debugRecordingBusy=!1,m()}}function ls(e={}){const t=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:o.debugRecordingStartedAt?new Date(Number(o.debugRecordingStartedAt)).toISOString():"",ended_at:t?new Date(t).toISOString():"",active:!!o.debugRecordingActive,duration_s:o.debugRecordingStartedAt?Math.round(Math.max(0,t-Number(o.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(pd/1e3),sample_count:Be(),column_count:zt.length,storage:"browser"},columns:Zh(),units:Xh(),initial:ef(o.debugRecordingInitialValues),samples:o.debugRecordingSamples||[],events:o.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function An(e){return JSON.stringify(e)}function lf(){const e=Number(o.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([An(ls())]).size}catch{return An(ls()).length}}function cf(e){const t=Math.max(0,Number(e)||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${(t/1024).toFixed(1)} kB`:`${Math.round(t)} B`}function uf(e,t){const n=new Blob([t],{type:"application/json"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function df(e){const t=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),n=String(t).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${n}.oqdebug.json`}async function pf(){if(Be()===0){o.debugRecordingError="Er is nog geen debugopname om te downloaden.",m();return}o.debugRecordingBusy=!0,o.debugRecordingError="";const e=o.debugRecordingActive&&je();m();try{const t=await window.fetch(yt("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();o.debugRecordingDeviceBundle=n,uf(df(n),An(n)),wc(n),o.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{o.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{o.debugRecordingBusy=!1,m()}}async function gf(){if(Be()===0){o.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",m();return}o.debugRecordingBusy=!0,o.debugRecordingError="";const e=o.debugRecordingActive&&je();m();try{const t=await window.fetch(yt("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();if(o.debugRecordingDeviceBundle=n,!await Kl(An(n)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");wc(n),o.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{o.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{o.debugRecordingBusy=!1,m()}}function mf(){const e=o.debugRecordingActive,t=je(),n=Xn(),r=Be(),a=o.debugRecordingBusy,i=cf(lf()),l=Array.isArray(o.debugRecordingDeviceBundle?.events)?o.debugRecordingDeviceBundle.events.length:Array.isArray(o.debugRecordingEvents)?o.debugRecordingEvents.length:0,u=Uh(),d=vc(),c=fc(),g=Gh(),b=r>0,h=`${g.toFixed(1)}%`,y=[{icon:"status",label:"Status",value:er()},{icon:"clock",label:t?"Retentie":"Duur",value:$t(t?c:bc())},{icon:"samples",label:"Samples",value:String(r)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:o.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],p=o.debugRecordingError?{kind:"error",icon:"alert",text:o.debugRecordingError}:o.debugRecordingNotice?{kind:"success",icon:"check",text:o.debugRecordingNotice}:null;return`
    <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-debug-recording-modal" role="dialog" aria-modal="true" aria-labelledby="oq-debug-recording-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-debug-recording-modal-title">Debugopname</h2>
          </div>
          <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit debugopname">\xD7</button>
        </div>
        <p class="oq-helper-modal-copy">${s(Ua())}</p>
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${za("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(t?`Laatste ${$t(c)} bewaard`:`Nog ${$t(d)}`)}</span>
                <strong>${s(t?`${r}/${Number(o.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(g)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(h)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${y.map(f=>`
              <div class="oq-debug-recording-stat">
                <dt>${Jh(f.icon)}${s(f.label)}</dt>
                <dd>${s(f.value)}</dd>
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
              ${Nr.map(f=>{const S=Number(f.minutes)===u;return`
                  <button
                    class="oq-debug-recording-segment${S?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${f.minutes}"
                    aria-pressed="${S?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(f.label)}
                  </button>
                `}).join("")}
            </div>
          </section>
        `}
        <div class="oq-debug-recording-actions">
          ${e&&t?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="freeze-debug-recording" ${a?"disabled":""}>${Ue("stop")}Stop rolling</button>
          `:e?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${a?"disabled":""}>${Ue("stop")}Stop opname</button>
          `:n?`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${u}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ue("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ue("activity")}Hervat rolling</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${u}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ue("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ue("activity")}Start rolling</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!b||a?"disabled":""}>${Ue("download")}${e&&t?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!b||a?"disabled":""}>${Ue("copy")}${e&&t?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${p?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${p.kind}" role="status">
              ${Ue(p.icon)}
              <span>${s(p.text)}</span>
            </p>
          `:""}
        </div>
      </section>
    </div>
  `}function ho(e,t,n){return n?`
      <div class="oq-settings-info${o.settingsInfoOpen===e?" is-open":""}" data-oq-settings-info="${s(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${s(e)}"
          aria-label="${s(`Uitleg bij ${t}`)}"
          aria-expanded="${o.settingsInfoOpen===e?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${o.settingsInfoOpen===e?"":"hidden"}>
          <p>${s(n)}</p>
        </div>
      </div>
    `:""}function qe(e,t,n,r,a="",i=""){return`<article class="oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(t)}</h3>${ho(e,t,n)}</div><div class="oq-settings-field-control">${r}</div>${i}</article>`}function X(e,t,n,r,a=""){return qe(e,t,n,`<div class="oq-settings-static-value">${s(r)}</div>`,a)}function ne(e,t={}){const n=typeof t=="number"?{decimals:t}:t||{},r=o.entities[e];if(!r)return"\u2014";const a=Number(r.value);if(!Number.isNaN(a)){const l=Number.isInteger(a)?0:Number.isFinite(n.decimals)?n.decimals:1;let u=a.toFixed(Math.max(0,l));return n.trimTrailingZeros&&u.includes(".")&&(u=u.replace(/\.?0+$/,"")),`${u}${r.uom?` ${r.uom}`:""}`}return String(r.state??r.value??"").trim()||"\u2014"}function nr(e,t="\u2014"){const n=o.entities[e];if(!n)return t;const r=String(n.state??n.value??"").trim();return!r||r==="0"||r==="\u2014"?t:r}function eo(e,t="",n=2){const r=Number(e);return Number.isFinite(r)?`${r.toFixed(Math.max(0,n))}${t?` ${t}`:""}`:"\u2014"}function de(e,t=2){return ne(e,{decimals:t})}function Ya(e,t,n){const r=H(t),a=H(n);if(Number.isFinite(r)&&Number.isFinite(a))return r-a;const i=H(e);return Number.isFinite(i)?i:NaN}function cs(e,t){const n=H(e),r=H(t),a=Number.isNaN(n)?"Lvl \u2014":`Lvl ${Math.round(n)}`,i=Number.isNaN(r)?"\u2014 Hz":`${Math.round(r)} Hz`;return`${a} (${i})`}function hf(e){const t=String(e||"").trim().toUpperCase();return!t||t==="0"||t==="IDLE"||t==="CM100 READY"||t==="CM100 STOPPED"||t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED")?!1:t.includes("REQUESTED")||t.includes("WAITING")||t.includes("WACHTEN")||t.includes("SETTLING")||t.includes("MEASUR")||t.includes("COOLDOWN")||t.includes("RUNNING")||t.includes("VALIDATING")||t.includes("STARTED")||t.includes("RECOVER")||t.includes("PHASE")||t.includes("STEADY")||t.includes("PULSE")||t.includes("STABILIZE")||t.includes("STEP")}function te(e){const t=String(e||"").trim().toUpperCase();return t?t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED"):!1}function kt(e){const t=String(e||"").trim().toUpperCase();return t.includes("WAITING_FOR_CM100")||t.includes("CM100 REQUESTED")||t.includes("WACHTEN OP CM100")||t==="WACHTEN"}function It(e){return hf(e)&&!kt(e)}function Wt(e,t="IDLE"){const n=nr(e,t),r=String(n??"").trim();return!r||r==="0"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN"?t:r}function kc(){const e=nr("commissioningStatus",""),t=A("cm100Active"),n=String(e||"").trim().toUpperCase();return(t||n==="CM100 READY"||n==="CM100 STOPPED"||n.includes("DONE")||n.includes("FAILED")||n.includes("ABORT")||n.includes("APPLIED")||n.includes("REFUSED"))&&(o.pendingCommissioningCm100Start=!1),n&&n!=="0"?n==="IDLE"&&o.pendingCommissioningCm100Start?"CM100 REQUESTED":n:o.pendingCommissioningCm100Start?"CM100 REQUESTED":t?"CM100 READY":"IDLE"}function kr(e,t,n="",r=!1){return`
      <div class="oq-settings-storage-summary-metric${r?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${n?`<em>${s(n)}</em>`:""}
      </div>
    `}function Cc(e){const t=String(e||"").trim(),n=t.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);return n?`${n[1]} ${n[1]==="1"?"dag":"dagen"}`:t}function Cr(e,t,n,r="",a="",i=""){if(!v(e))return"";const l=!!E(e),u=o.loadingEntities||o.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(n)}</p>
          ${Ef(e,l,r,a)}
        </div>
        ${Qo(e,t,l,u)}
      </article>
    `}function ff(e,t,n,r=""){if(!v(e))return"";const a=o.entities[e],i=Array.isArray(a?.option)?a.option:[],l=String(E(e)||"");return i.length?`
      <article class="oq-settings-storage-row oq-settings-storage-row--select" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${r?`<span>${s(r)}</span>`:""}
          </div>
          <p>${s(n)}</p>
        </div>
        <label class="oq-settings-storage-select">
          <select class="oq-helper-select" data-oq-field="${s(e)}" ${o.loadingEntities?"disabled":""}>
            ${i.map(u=>`<option value="${s(u)}" ${u===l?"selected":""}>${s(Ne(u))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `:""}function bf(e){return v(e)||!!L[e]&&!o.optionalMissingEntities?.[e]}function Tr(e,t,n,r={}){if(!bf(e))return"";const a=v(e),i=a&&(o.loadingEntities||o.busyAction===e),l=r.disabled===!0||!a,u=r.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(u)}"
        type="button"
        data-oq-action="${s(n)}"
        ${i||l?"disabled":""}
      >
        ${s(i&&r.busyLabel||t)}
      </button>
    `}function He(e,t="\u2014"){return v(e)?ne(e):t}function vf(e,t="Geen data"){const n=Number(e);return!Number.isFinite(n)||n<=0?t:`${Math.round(n)} ${Math.round(n)===1?"dag":"dagen"}`}function yf(e,t="\u2014"){const n=Number(e);return!Number.isFinite(n)||n<=0?t:`${Math.round(n)} kB`}function wf(e,t="0"){const n=Number(e);return!Number.isFinite(n)||n<=0?t:String(Math.round(n))}function us(e){const t=typeof Q=="function"?Q(e):null;return t?t.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"}):"Geen data"}function Sf(e,t="Geen data"){const n=Number(e);if(!Number.isFinite(n)||n<=0)return t;const r=new Date(n*1e3),a=r.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit"}),i=r.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return`${a} ${i}`}function qf(){return typeof Pn!="function"?{}:Pn()}function kf(e){const t=Array.isArray(e.items)?e.items:[];return`
      <article class="oq-settings-storage-technical-row">
        <div class="oq-settings-storage-technical-row-head">
          <span>${s(e.meta||"")}</span>
          <strong>${s(e.title)}</strong>
          ${e.note?`<em>${s(e.note)}</em>`:""}
        </div>
        <div class="oq-settings-storage-technical-metrics">
          ${t.map(n=>`
            <div>
              <span>${s(n.label)}</span>
              <strong>${s(n.value)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `}function Cf(e){const t=e.filter(Boolean);return t.length?`
      <details class="oq-settings-storage-technical"${o.settingsStorageDetailsOpen?" open":""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Diagnose, dagtotalen en uurdetail</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${s(t.map(n=>`${n.shortLabel}: ${n.primary}`).join(" \xB7 "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${t.map(kf).join("")}
        </div>
      </details>
    `:""}function Ne(e){const t=String(e||"").trim();return t?{None:"Geen",Manual:"Handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[Fs]:"Stooklijn",[xs]:"Power House","Dew point required":"Dauwpuntmeting vereist","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[t]||t:""}function Tc(e){const t=String(e||"").trim();return t?{Ready:"Gereed","Waiting for room request":"Wacht op kamervraag","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[t]||t:""}function rr({key:e,option:t,currentValue:n,busy:r,copy:a="",meta:i="",image:l="",imageAlt:u="",infoTitle:d="",infoCopy:c="",infoId:g=""}){const b=t===n,h=`
      <button
        class="oq-settings-choice-card${b?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${c?" oq-settings-choice-card--has-info":""}"
        type="button"
        data-oq-action="select-settings-option"
        data-select-key="${s(e)}"
        data-select-option="${s(t)}"
        aria-pressed="${b?"true":"false"}"
        ${r?"disabled":""}
      >
        <span class="oq-settings-choice-head">
          <span class="oq-settings-choice-title">${s(Ne(t))}</span>
          ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
        </span>
        ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(u||Ne(t))}" loading="lazy" decoding="async"></span>`:""}
        ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
      </button>
    `;if(!c)return h;const y=d||Ne(t),p=g||`${e}-${t}`;return`
      <article class="oq-settings-choice-card-shell${b?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
        ${h}
        ${ho(p,y,c)}
      </article>
    `}function fo(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function to(e,t,n,r=""){if(!v(e))return"";const a=o.entities[e]||{},i=String(E(e)||""),l=fo(a);return qe(e,t,n,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${o.loadingEntities?"disabled":""}>${l.map(u=>`<option value="${s(u)}" ${u===i?"selected":""}>${s(Ne(u))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,r)}function Tf(e,t,n="Aan",r="Uit"){return`<span class="oq-settings-toggle-state${t?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(n)}" data-off-label="${s(r)}">${s(t?n:r)}</span>`}function Qo(e,t,n,r,a="Aan",i="Uit",l=!0){const u=n?a:i,d=n?"off":"on";return`
      <div class="oq-settings-compact-switch-row">
        ${l?Tf(e,n,a,i):""}
        <button
          class="oq-settings-toggle-switch${n?" is-on":""}"
          type="button"
          role="switch"
          data-oq-action="toggle-overview-control"
          data-control-key="${s(e)}"
          data-control-state="${s(d)}"
          data-switch-title="${s(t)}"
          data-on-label="${s(a)}"
          data-off-label="${s(i)}"
          aria-checked="${n?"true":"false"}"
          aria-label="${s(`${t}: ${u}`)}"
          ${r?"disabled":""}
        >
          <span class="oq-settings-toggle-switch-track" aria-hidden="true">
            <span class="oq-settings-toggle-switch-knob"></span>
          </span>
        </button>
      </div>
    `}function Ef(e,t,n="",r=""){const a=t?n:r;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(n)}" data-off-copy="${s(r)}">${s(a)}</p>`:""}function $f(e,t,n,r,a=""){if(!v(e))return"";const i=!!E(e),l=o.loadingEntities||o.busyAction===`switch-${e}`;return qe(e,t,n,`
        <div class="oq-settings-compact-switch-field">
          ${Qo(e,t,i,l)}
          ${r?`<p>${s(r)}</p>`:""}
        </div>
      `,a)}function Er(e,t,n){if(!v(e))return"";const r=!!E(e),a=o.loadingEntities||o.busyAction===`switch-${e}`;return`
      <article class="oq-settings-integration-card" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-integration-card-head">
          <h4>${s(t)}</h4>
        </div>
        <p>${s(n)}</p>
        ${Qo(e,t,r,a)}
      </article>
    `}function Re(e,t,n="oq-helper-button oq-helper-button--ghost",r=!1){return`
      <button
        class="${n}"
        type="button"
        data-oq-action="press-named-button"
        data-oq-button-key="${s(e)}"
        ${r?"disabled":""}
      >
        ${s(t)}
      </button>
    `}function Ut({active:e,startKey:t,stopKey:n,startLabel:r,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:u=!1,stopDisabled:d=!1}){return Re(e?n:t,e?a:r,e?l:i,e?d:u)}function Af(e,t,n,r,a=""){if(!v(e))return"";const i=o.entities[e]||{},l=String(E(e)||""),u=fo(i),d=o.loadingEntities||o.busyAction===`save-${e}`,c=`
      <div class="oq-settings-choice-grid">
        ${u.map(g=>{const b=r[g]||"",h=typeof b=="string"?b:b.copy||"",y=typeof b=="string"?"":b.image||"",p=typeof b=="string"?"":b.alt||"";return rr({key:e,option:g,currentValue:l,busy:d,copy:h,image:y,imageAlt:p})}).join("")}
      </div>
    `;return qe(e,t,n,c,a)}function ee(e,t,n,r="",a={}){if(!v(e))return"";const i=Xe(e),l=Le(e),u=a.unitOverride||i.uom||"",d=a.showUnit!==!1&&!!u,c=d&&a.unitMode!=="outside",g=Go({key:e,value:l,meta:i,controlClass:`oq-helper-control${d&&!c?" oq-helper-control--split":""}${c?" oq-helper-control--suffix":""}`,unitMarkup:d?c?`<span class="oq-helper-unit-chip">${s(u)}</span>`:`<span class="oq-helper-unit">${s(u)}</span>`:""});return qe(e,t,n,g,r,a.footerMarkup||"")}function ut(e,t,n,r="",a={}){if(!v(e))return"";const i=Xe(e),l=we(e,E(e)),u=a.minLabel||`${i.min}${i.uom||""}`,d=a.maxLabel||`${i.max}${i.uom||""}`,c=a.valueLabel||_(e,l);return qe(e,t,n,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(u)}</span><strong>${s(c)}</strong><span>${s(d)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${o.loadingEntities?"disabled":""}></label>`,r)}function ds(e,t,n,r={}){if(!v(e))return"";const a=Xe(e),i=Le(e),l=r.compact===!0,u=r.embedded===!0,d=r.infoId||e,c=r.showCopy!==!1;return`
      <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${u?" oq-settings-mini-field--embedded":""}">
        <div class="oq-settings-mini-copy">
          <div class="oq-settings-mini-copy-head">
            <h5>${s(t)}</h5>
            ${n?ho(d,t,n):""}
          </div>
          ${n&&c?`<p>${s(n)}</p>`:""}
        </div>
        ${Go({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
      </article>
    `}function ps(e,t,n,r=""){if(!v(e))return"";const a=xr(E(e));return qe(e,t,n,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${o.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,r||"oq-settings-field--time")}function se(e,t,n,r,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(t)}</h3><p>${s(n)}</p></div>${r}</section>`}function Hf(){const e=Ve.has(o.settingsGroup)?o.settingsGroup:Se[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${Se.map(t=>`
          <button
            class="oq-settings-group-button${t.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(t.id)}"
            aria-pressed="${t.id===e?"true":"false"}"
          >
            ${oa(t.icon,"oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${s(t.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function Mf(){const e=Ve.has(o.settingsGroup)?o.settingsGroup:Se[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[ob(),nb(),Uf(),yb(),ub(),vb(),Vf()]:e==="service"?[Jf(),eb()]:e==="heating"?[cb()]:e==="cooling"?[Sb()]:e==="integrations"?[db(),pb()]:[rb(),ab(),gb(),mb(),bb()]).filter(Boolean).join("")}
      </div>
    `}function Pf(){if(!o.root||o.appView!=="settings")return!1;const e=o.root.querySelector(".oq-settings-group-nav"),t=o.root.querySelector(".oq-settings-group-stack");if(!e||!t)return!1;const n=Ve.has(o.settingsGroup)?o.settingsGroup:Se[0].id;if(n==="service")return!1;const r=e.querySelectorAll(".oq-settings-group-button");if(r.length!==Se.length)return!1;r.forEach(p=>{const S=String(p.dataset.groupId||"")===n;p.classList.toggle("is-active",S),p.setAttribute("aria-pressed",S?"true":"false")}),t.querySelectorAll(".oq-settings-info").forEach(p=>{const f=String(p.dataset.oqSettingsInfo||""),S=o.settingsInfoOpen===f;p.classList.toggle("is-open",S);const w=p.querySelector(".oq-settings-info-popover");w&&(w.hidden=!S);const q=p.querySelector(".oq-settings-info-button");q&&q.setAttribute("aria-expanded",S?"true":"false")}),t.querySelectorAll("[data-oq-settings-field]").forEach(p=>{const f=String(p.dataset.oqSettingsField||"");if(!f)return;const S=p.querySelector(".oq-settings-static-value");if(S){const T=B(f);S.textContent!==T&&(S.textContent=T)}p.querySelectorAll("select[data-oq-field]").forEach(T=>{const k=String(T.dataset.oqField||f),M=String(E(k)||"");T.value!==M&&(T.value=M)}),p.querySelectorAll("input[data-oq-field]").forEach(T=>{const k=String(T.dataset.oqField||f),M=String(Le(k)||"");T.value!==M&&(T.value=M)});const w=p.querySelector(".oq-helper-slider-meta strong"),q=p.querySelector('input[type="range"][data-oq-field]');if(w&&q){const T=_(f,we(f,E(f)));w.textContent!==T&&(w.textContent=T)}}),t.querySelectorAll("[data-select-key]").forEach(p=>{const f=String(p.dataset.selectKey||""),S=String(p.dataset.selectOption||""),w=String(E(f)||""),q=S===w;p.classList.toggle("is-active",q),p.setAttribute("aria-pressed",q?"true":"false"),f==="strategy"?p.disabled=o.loadingEntities||o.busyAction==="save-strategy":f==="hpGeneration"?p.disabled=o.loadingEntities||o.busyAction==="save-hpGeneration":f==="curveControlProfile"?p.disabled=o.loadingEntities||o.busyAction==="save-curveControlProfile":f==="phResponseProfile"&&(p.disabled=o.loadingEntities||o.busyAction==="save-phResponseProfile");const T=p.closest(".oq-settings-choice-card-shell");T&&T.classList.toggle("is-active",q)});const a=t.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){const p=String(E("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",p),a.querySelectorAll("input[data-oq-field]").forEach(S=>{const w=String(S.dataset.oqField||""),q=String(Le(w)||"");S.value!==q&&(S.value=q)})}t.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(p=>{const f=String(p.dataset.controlKey||""),S=!!E(f),w=String(p.dataset.onLabel||"Aan"),q=String(p.dataset.offLabel||"Uit"),T=String(p.dataset.switchTitle||f),k=S?w:q;p.dataset.controlState=S?"off":"on",p.classList.toggle("is-on",S),p.setAttribute("aria-checked",S?"true":"false"),p.setAttribute("aria-label",`${T}: ${k}`),p.disabled=o.loadingEntities||o.busyAction===`switch-${f}`}),t.querySelectorAll("[data-oq-switch-pill]").forEach(p=>{const f=String(p.dataset.oqSwitchPill||""),S=!!E(f),w=String(p.dataset.onLabel||"Aan"),q=String(p.dataset.offLabel||"Uit"),T=S?w:q;p.classList.toggle("is-on",S),p.textContent!==T&&(p.textContent=T)}),t.querySelectorAll("[data-oq-switch-copy]").forEach(p=>{const f=String(p.dataset.oqSwitchCopy||""),S=!!E(f),w=String(p.dataset.onCopy||""),q=String(p.dataset.offCopy||""),T=S?w:q;p.hidden=!T,p.textContent!==T&&(p.textContent=T)});const i=t.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){const p=i.querySelector(".oq-settings-quickstart-status-value"),f=i.querySelector(".oq-settings-quickstart-status-copy"),S=i.querySelector('button[data-oq-action="open-generation-modal"]'),w=Vo(),q=o.entities.hpGeneration||{},T=v("hpGeneration")&&fo(q).length>0;if(p){const k=w||"Onbekend";p.textContent!==k&&(p.textContent=k)}if(f){const k="Pas dit aan als je een andere Quatt Hybrid hebt.";f.textContent!==k&&(f.textContent=k)}S&&(S.disabled=!T||o.loadingEntities||o.busyAction==="save-hpGeneration")}const l=t.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){const p=l.querySelector(".oq-settings-quickstart-status-value"),f=l.querySelector(".oq-settings-quickstart-status-copy"),S=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),w=kc(),q=A("cm100Active");p&&p.textContent!==w&&(p.textContent=w);const T=q?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";f&&f.textContent!==T&&(f.textContent=T),S&&(S.disabled=o.loadingEntities)}const u=t.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(u){const p=u.querySelector(".oq-settings-quickstart-status-value"),f=u.querySelector(".oq-settings-quickstart-status-copy"),S=u.querySelector('button[data-oq-action="reset"]'),w=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",q=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";p&&p.textContent!==w&&(p.textContent=w),f&&f.textContent!==q&&(f.textContent=q),S&&(S.disabled=o.busyAction==="reset")}const d=t.querySelectorAll("[data-oq-access-security-item]");d.length&&d.forEach(p=>{const f=String(p.dataset.oqAccessSecurityItem||""),S=p.querySelector(".oq-settings-quickstart-status-value"),w=p.querySelector(".oq-settings-quickstart-status-copy"),q=p.querySelector("button[data-oq-action]");if(f==="login"){const T=Ra(),k=La();S&&S.textContent!==T&&(S.textContent=T),w&&w.textContent!==k&&(w.textContent=k)}else if(f==="api"){const T=Za(),k=Xa();S&&S.textContent!==T&&(S.textContent=T),w&&w.textContent!==k&&(w.textContent=k)}q&&(q.disabled=!1)});const c=t.querySelector(".oq-settings-system-summary");if(c){const p=c.querySelectorAll(".oq-settings-system-row"),f={uptime:wa(),ip:Sa(),updates:jo(),datetime:ll(),espTemp:bl(),restart:"Opnieuw opstarten"};p.forEach(q=>{const T=q.querySelector(".oq-settings-system-row-value"),k=q.dataset.oqDiagnosticsRow||"";if(T&&Object.prototype.hasOwnProperty.call(f,k)){const M=f[k];T.textContent!==M&&(T.textContent=M)}});const S=c.querySelector('button[data-oq-action="open-update-modal"]');S&&(S.disabled=!1);const w=c.querySelector('button[data-oq-action="open-restart-confirm"]');if(w){const q=o.busyAction==="restartAction";w.disabled=q,w.textContent=q?"Herstarten...":"Herstarten"}}t.querySelectorAll(".oq-settings-hp-offset-row").forEach(p=>{const f=String(p.dataset.oqSettingsField||""),S=String(p.dataset.oqHpOffsetRawKey||""),w=String(p.dataset.oqHpOffsetFinalKey||"");if(!f||!S||!w)return;const q=Xe(f),T=Ya(S,w,f),k=Ye(Le(f)),M=Number.isFinite(T)&&Number.isFinite(k)?eo(T+k,q.uom||"\xB0C",2):de(w,2),F=p.querySelector("[data-oq-hp-offset-active]");if(F){const C=`${de(w,2)} actief`;F.textContent!==C&&(F.textContent=C)}const x=p.querySelector("[data-oq-hp-offset-raw]");if(x){const C=Number.isFinite(T)?eo(T,q.uom||"\xB0C",2):de(S,2);x.textContent!==C&&(x.textContent=C)}const U=p.querySelector("[data-oq-hp-offset-final]");U&&U.textContent!==M&&(U.textContent=M)});const g=t.querySelector(".oq-settings-curve-shell"),b=ce();if(!!g!==b)return!1;const h=!!a,y=String(E("phResponseProfile")||"")==="Custom";return h===y}function Nf(e=!1){const t=Fl();return t?`
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside${e?" oq-curve-fallback-suggest--helper":""}">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${s(t.label)}</strong>
          <span>${s(t.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${o.loadingEntities||o.busyAction==="save-curveFallbackSupply"||t.isCurrent?"disabled":""}
        >
          ${t.isCurrent?"Actief":"Gebruik suggestie"}
        </button>
      </div>
    `:""}function Ec(){return`
      <div class="oq-settings-curve-grid">
        ${pe.map(e=>ee(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${ee("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:Nf()})}
      </div>
    `}function $c(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${to("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function Ac(e="oq-settings-grid"){const t=[ee("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),ee("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${to("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${op()?ee("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):t}
      </div>
    `}function Rf(e="oq-settings-grid"){const t=[ee("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),ee("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return t.length?`
      <div class="${s(e)}">
        ${t.join("")}
      </div>
    `:""}function un(e="",t=""){const n=String(e||"").trim().toUpperCase(),r=String(t||"").trim().toLowerCase(),a=n.split(/[^A-Z0-9]+/).filter(Boolean),i=c=>{const g=String(c||"").trim().toUpperCase();return g?n===g||n.startsWith(`${g}:`)||n.startsWith(`${g} `)||a.includes(g):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!n||n==="\u2014"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN")return{phase:"Wachten",percent:0};if(n.includes("WAITING")||n.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(r!=="cm100"&&(n==="IDLE"||n==="CM0 - STANDBY"||n==="CM100 READY"||n==="CM100 STOPPED"||n==="GEPAUZEERD"))return{phase:"Wachten",percent:0};const d=(l[r]||[]).find(c=>c.match.some(g=>i(g)));return d||(n.includes("DONE")||n.includes("APPLIED")?{phase:"Klaar",percent:100}:n.includes("ABORT")||n.includes("FAILED")||n.includes("REFUSED")?{phase:"Afgebroken",percent:100}:r==="cm100"&&n.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function Bt({taskKey:e,title:t,copy:n,subcopy:r="",status:a,statusCopy:i,progressTask:l,actions:u="",controls:d="",metrics:c="",className:g=""}){return`
      <article class="oq-settings-commissioning-card${g?` ${s(g)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(t)}</h3>
            <p>${s(n)}</p>
            ${r?`<p class="oq-settings-commissioning-card-subcopy">${s(r)}</p>`:""}
          </div>
        </div>
        ${u?`<div class="oq-settings-commissioning-card-actions">${u}</div>`:""}
        ${d}
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
    `}function Lf(){return xn.filter(e=>v(le(e,"Status"))||v(le(e,"Load"))||v(Yt(e,"cooling",0)))}function Of(e){return Ye(Le(e))}function xf(e){const t=[];return Xr.forEach(n=>{let r=-1/0;$o.forEach(a=>{const i=Yt(e,n,a),l=Of(i);(!Number.isFinite(l)||l<0||l>120||l<r)&&t.push(`${n==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(r=l)})}),{valid:t.length===0,invalid:t}}function Ff(e){const t=String(E(`hp${e}Mode`)||"").trim(),n=Ye(E(`hp${e}Freq`)),r=t&&t!=="Onbekend"&&t!=="Unknown",a=Number.isFinite(n),i=r&&/standby|stand-by/i.test(t),l=a&&n<=.5,u=r?i?a?l?"Standby en compressor uit.":`Compressor draait op ${n.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${t}.`:"ODU status is onbekend.";return{mode:r?t:"Onbekend",freq:Number.isFinite(n)?`${n.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:u}}function Df(e){const t=String(e||"").toUpperCase();return!e||t==="UNKNOWN"||t==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":t.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":t.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":t.includes("WRITE_QUEUED")||t.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":t.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":t.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":t.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":t.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function gs(e,t){return v(e)?Go({key:e,value:Le(e),meta:Xe(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${t}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function If(e){const t=$o.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${$o.map(n=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${n}</span>
            <div role="cell">${gs(Yt(e,"cooling",n),n)}</div>
            <div role="cell">${gs(Yt(e,"heating",n),t+n)}</div>
          </div>
        `).join("")}
      </div>
    `}function Wf(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;const t=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,n=t?t.closest(".oq-settings-odu-runtime-table"):null;if(!t||!n)return;const r=Array.from(n.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,u)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(u.dataset.oqOduRuntimeTabIndex||0)),a=r.indexOf(t),i=r[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function Bf(e){const t=le(e,"Enable"),n=le(e,"Load"),r=le(e,"Apply"),a=le(e,"Status"),i=String(E(a)||"").trim()||"Nog niet geladen",l=xf(e),u=Ff(e),d=!!E(t),c=o.loadingEntities||o.busyAction===n||o.busyAction===r,g=c||!d||!l.valid||!u.safe||!v(r),b=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(u.reason)} Laatste compressorfrequentie: ${s(u.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${v(n)?Re(n,o.busyAction===n?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",c):""}
      ${v(t)?Qo(t,`HP${e} writes vrijgeven`,d,c,"Enable","Locked"):""}
            ${v(r)?Re(r,o.busyAction===r?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",g):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(Df(i))}</p>
        </div>
        ${If(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&u.safe?" is-ok":" is-warning"}">${s(b)} ${s(u.safe?"":u.reason)}</p>
      </article>
    `}function Vf(){const e=Lf();return e.length?`
      <details class="oq-settings-section oq-settings-section--collapsible oq-settings-odu-runtime-details"${o.oduRuntimeFrequencyDetailsOpen?" open":""}>
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
            ${e.map(t=>Bf(t)).join("")}
          </div>
        </div>
      </details>
    `:""}function Hc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ee("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${ee("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${_f()}
      </div>
    `}function Mc(e="oq-settings-grid"){const t=jf();return`
      <div class="${s(e)}">
        ${ee("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${t}
    `}function jf(){const e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(n=>v(n.offsetKey)&&v(n.finalKey));if(!e.length)return"";const t=n=>{const r=Xe(n.offsetKey),a=Ya(n.rawKey,n.finalKey,n.offsetKey),i=Ye(Le(n.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?eo(a+i,r.uom||"\xB0C",2):de(n.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(n.offsetKey)}" data-oq-hp-offset-raw-key="${s(n.rawKey)}" data-oq-hp-offset-final-key="${s(n.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(n.label)}</strong>
            <span data-oq-hp-offset-active>${s(de(n.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${n.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?eo(a,r.uom||"\xB0C",2):de(n.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${Go({key:n.offsetKey,value:Le(n.offsetKey),meta:r,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:r.uom?`<span class="oq-helper-unit-chip">${s(r.uom)}</span>`:""})}
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
    `}function Ja(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ps("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${ps("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${ut("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${ut("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function Pc(){const e=ce();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(xs)}"
          aria-pressed="${e?"false":"true"}"
          ${o.loadingEntities||o.busyAction==="save-strategy"?"disabled":""}
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
          data-select-option="${s(Fs)}"
          aria-pressed="${e?"true":"false"}"
          ${o.loadingEntities||o.busyAction==="save-strategy"?"disabled":""}
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
    `}function _f(){if(!v("phResponseProfile"))return"";const e=String(E("phResponseProfile")||""),t=o.loadingEntities||o.busyAction==="save-phResponseProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{const i=a.value===e;return a.value==="Custom"&&i?`
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${s(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${s(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${s(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${ds("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${ds("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:rr({key:"phResponseProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return qe("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",r,"oq-settings-field--span-2")}function Nc(){if(!v("curveControlProfile"))return"";const e=String(E("curveControlProfile")||""),t=o.loadingEntities||o.busyAction==="save-curveControlProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>rr({key:"curveControlProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return qe("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",r,"oq-settings-field--span-2")}function Kf(){const e=(R,V=0)=>{const P=H(R);return Number.isNaN(P)?V:Math.max(0,P)},n=e("phComfortBelow",.1),r=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-n,l=20+r,u=620,d=184,c=46,g=24,b=18,h=40,y=96,p=u-c-g,f=Math.min(20-1.2,i-.35),S=Math.max(20+1.2,l+.35),w=R=>c+(R-f)/Math.max(.01,S-f)*p,q=w(f),T=w(S),k=w(i),M=w(20),F=w(l),x=Math.abs(i-20)>.001,U=Math.abs(l-20)>.001,C=b+24,$=d-h,N=y-44,W=(R,V,P,O="")=>{const ge=Math.max(q+4,Math.min(T-110-4,R-55)),ue=R-14,J=N,nt=28,ke=y-N+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${V} ${P}`)}">
          <rect class="oq-ph-concept-hit" x="${ue}" y="${J}" width="${nt}" height="${ke}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${R}" cy="${y}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${O?` oq-ph-concept-tooltip--${O}`:""}" transform="translate(${ge} ${N})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(V)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(P)}</text>
          </g>
        </g>
      `},K=[`M ${q.toFixed(1)} ${C.toFixed(1)}`,`L ${k.toFixed(1)} ${y.toFixed(1)}`,`L ${F.toFixed(1)} ${y.toFixed(1)}`,`L ${T.toFixed(1)} ${$.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${s(D(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${s(D(i,1,"\xB0C"))} \u2013 ${s(D(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${s(D(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${u} ${d}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${q.toFixed(1)}" y="${b}" width="${Math.max(20,k-q).toFixed(1)}" height="${(d-b-h).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${k.toFixed(1)}" y="${b}" width="${Math.max(20,F-k).toFixed(1)}" height="${(d-b-h).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${F.toFixed(1)}" y="${b}" width="${Math.max(20,T-F).toFixed(1)}" height="${(d-b-h).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${q}" y1="${b}" x2="${q}" y2="${d-h}" class="oq-ph-concept-axis"></line>
            <line x1="${q}" y1="${y}" x2="${T}" y2="${y}" class="oq-ph-concept-axis"></line>
            <line x1="${M}" y1="${b}" x2="${M}" y2="${d-h}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${K}" class="oq-ph-concept-curve"></path>

            ${x?`<line x1="${k}" y1="${y-12}" x2="${k}" y2="${y+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${M}" y1="${y-14}" x2="${M}" y2="${y+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${U?`<line x1="${F}" y1="${y-12}" x2="${F}" y2="${y+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${x?`<circle cx="${k}" cy="${y}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${M}" cy="${y}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${U?`<circle cx="${F}" cy="${y}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${x?W(k,"Comfort onder setpoint",D(i,1,"\xB0C"),"below"):""}
            ${W(M,"Setpoint",D(20,1,"\xB0C"),"setpoint")}
            ${U?W(F,"Comfort boven setpoint",D(l,1,"\xB0C"),"above"):""}

            <text x="${q+8}" y="${b+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${q+8}" y="${d-h-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${q}" y="${d-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${T}" y="${d-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${x?`<text x="${k-5}" y="${d-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(D(i,1,"\xB0C"))}</text>`:""}
            <text x="${M}" y="${d-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(D(20,1,"\xB0C"))}</text>
            ${U?`<text x="${F+5}" y="${d-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(D(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${s(D(i,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${s(D(i,1,"\xB0C"))} \u2013 ${s(D(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${s(D(l,1,"\xB0C"))}</span>
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
    `}function Rc(){const e=[ee("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),ee("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),ee("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${Kf()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function ms(e,t,n){const r=[to(t,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),to(n,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return r?`
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
    `:""}function Uf(){const e=Rf();return se("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${Ac()}
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
      `)}function z(e){return v(e)&&A(e)}function mt(e){return!v(e)||A(e)}function hs(e){return v(e)?Oo(B(e,"None")):""}const zf=new Set(["compressor oil return"]);function Gf(e){const t=Oo(e);return t==="Geen actieve storingen"?[]:t.split(",").map(n=>n.trim()).filter(n=>n&&!zf.has(n.toLowerCase()))}function Lc(e){const t=Gf(e);return t.length>0?t.join(", "):"Geen actieve storingen"}function jr(e){return v(e)?Lc(B(e,"None")):""}function Hn(e){const t=jr(e).trim().toLowerCase();return!!t&&t!=="geen actieve storingen"}function ar(){const e=[],t=z("compressorCyclingWarning2h")||z("compressorCyclingWarning72h")||z("alternatingCompressorStartsWarning"),n=z("compressorCyclingAlertLatched"),r=mt("cicPollingEnabled"),a=mt("otEnabled"),i=(u,d)=>{z(u)&&e.push({key:u,label:d})};i("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),i("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),i("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),i("lowflowFaultActive","Te lage flow"),i("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),r&&i("cicDataStale","CIC-data is verouderd"),a&&i("otLinkProblem","OpenTherm-verbinding meldt een probleem"),Hn("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${jr("hp1Failures")}`}),Hn("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${jr("hp2Failures")}`});const l=e.length;return n&&!t&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:n,cyclingAlertActive:t,cyclingAlertRecovered:n&&!t,title:l>0?"Aandacht nodig":n?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:l>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:n?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function Mn(e,t="Aandacht",n="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${s(e?t:n)}</span>`}function Vt({label:e,value:t,note:n="",active:r=!1}){return`
      <div class="oq-settings-monitoring-row${r?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(t)}</strong>
          ${n?`<span>${s(n)}</span>`:""}
        </div>
        ${Mn(r)}
      </div>
    `}function ct(e){const t=H(e);return Number.isNaN(t)?"\u2014":String(Math.max(0,Math.round(t)))}function Qf(e){const t=H(e);if(Number.isNaN(t))return"Nog niet gemeten";if(t<1)return"Zojuist";if(t<60)return`${Math.round(t)} min geleden`;const n=Math.floor(t/60),r=Math.round(t%60);return`${n}u ${r}m geleden`}function fs(e){const t=H(e);return Number.isNaN(t)||t<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t*1e3))}function Yf(e){if(!e.cyclingAlertLatched)return"";const t=z("compressorCyclingAlertAlternating"),n=ct("compressorCyclingAlertHp1Peak2h"),r=ct("compressorCyclingAlertHp1Peak72h"),a=v("compressorCyclingAlertHp2Peak2h")?ct("compressorCyclingAlertHp2Peak2h"):"",i=v("compressorCyclingAlertHp2Peak72h")?ct("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${Mn(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${s(fs("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${s(fs("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${s(n)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${s(r)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${s(a)} starts</dd></div>`:""}
          ${i?`<div><dt>HP2 72 uur</dt><dd>${s(i)} starts</dd></div>`:""}
          ${t?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${o.entities.acknowledgeCompressorCyclingAlert?Re("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function bs(e,t){return v(`${t}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${s(e)}</p>
          <span>Laatste start: ${s(Qf(`${t}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${s(ct(`${t}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${s(ct(`${t}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${s(ct(`${t}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${s(ct(`${t}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function Oc(e){const t=e.active?e.problems.map(n=>n.key).sort().join("|"):"";if(!t){o.installationMonitoringProblemSignature="";return}t!==o.installationMonitoringProblemSignature&&(o.installationMonitoringProblemSignature=t,o.installationMonitoringDetailsOpen=!0)}function Jf(){const e=ar();Oc(e);const t=mt("cicPollingEnabled"),n=mt("otEnabled"),r=[v("lowflowFaultActive")?Vt({label:"Flow",value:z("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:z("lowflowFaultActive")}):"",v("flowMismatch")?Vt({label:"Flowvergelijking duo",value:z("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:z("flowMismatch")}):""].filter(Boolean).join(""),a=[v("cicDataStale")?Vt({label:"CIC-data",value:t?z("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:t&&z("cicDataStale")}):"",v("otLinkProblem")?Vt({label:"OpenTherm",value:n?z("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:n&&z("otLinkProblem")}):""].filter(Boolean).join(""),i=[v("hp1Failures")?Vt({label:"Warmtepomp 1",value:hs("hp1Failures"),active:Hn("hp1Failures")}):"",v("hp2Failures")?Vt({label:"Warmtepomp 2",value:hs("hp2Failures"),active:Hn("hp2Failures")}):""].filter(Boolean).join(""),l=H("compressorStarts2hWarningLimit"),u=H("compressorStarts72hWarningLimit"),d=z("compressorCyclingWarning2h")||z("compressorCyclingWarning72h")||z("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,c=r?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${r}</div>
      </article>
    `:"",g=i?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${i}</div>
      </article>
    `:"",b=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"";return se("Bewaking","Installatiebewaking","Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${s(e.title)}</strong>
            <span>${s(e.copy)}</span>
          </div>
          ${Mn(e.active,"Aandacht nodig","Alles rustig")}
        </div>
        <details class="oq-settings-monitoring-details"${o.installationMonitoringDetailsOpen?" open":""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Geef details weer</strong>
          </summary>
        ${e.active?`
          <div class="oq-settings-monitoring-active-list">
            ${e.problems.map(h=>`<span>${s(h.label)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${Mn(d)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${Yf(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${bs("Warmtepomp 1","hp1")}
              ${bs("Warmtepomp 2","hp2")}
            </div>
            ${ut("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(l)?"\u2014":`${Math.round(l)} starts / 2 uur`})}
            ${ut("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(u)?"\u2014":`${Math.round(u)} starts / 72 uur`})}
          </article>
          ${g}
          </div>
          <div class="oq-settings-monitoring-column">
            ${c}
            ${b}
          </div>
        </div>
        </details>
      `)}function Zf({status:e,running:t,resultReady:n,startDisabled:r,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:u}){const d=String(e||"").toUpperCase(),c=d.includes("FAILED")||d.includes("REFUSED")||d.includes("ABORT"),g=d.includes("APPLIED"),b=v("hp2WaterIn")||v("hp2WaterOut")||v("hp2WaterInRaw")||v("hp2WaterOutRaw"),h=H("hpWaterCalibrationStableProgress"),y=H("hpWaterCalibrationStableRequired"),p=H("hpWaterCalibrationRemaining"),f=Math.round(H("hpWaterCalibrationPhase")),S=t&&(f===1||d.includes("MIXING")),w=t&&!S,q=300,T=60,k=Number.isFinite(p)?Math.max(0,q-p):NaN,M=Number.isFinite(k)?Math.max(0,T-k):NaN,F=S&&Number.isFinite(k)?Math.max(0,Math.min(100,k/T*100)):w&&Number.isFinite(h)&&Number.isFinite(y)&&y>0?Math.max(0,Math.min(100,h/y*100)):t&&Number.isFinite(p)?Math.max(0,Math.min(100,100-p/q*100)):n?100:0,x=n&&v("hpWaterCalibrationResultSpreadBefore")?de("hpWaterCalibrationResultSpreadBefore",2):de("hpWaterCalibrationSpread",2),U=S?"Water mengen":Number.isFinite(h)&&Number.isFinite(y)&&y>0?h>0?`${Math.round(Math.max(0,h))} / ${Math.round(y)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",C=n?3:t?2:1,$=g?"Offsets toegepast":n?`Meting klaar - spreiding ${x}`:t?S?`Water mengen${Number.isFinite(M)&&M>0?` - meting start over ${Math.round(M)} s`:""}`:`Meting bezig - ${Number.isFinite(p)&&p>0?`max. ${Math.round(p)} s resterend`:U}`:c?"Meting niet voltooid":"Voorbereiding",N=g?"De voorgestelde offsets zijn opgeslagen.":n?"Controleer de voorgestelde offsets en pas ze toe.":t?S?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":c?nr("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):b?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",W=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(P=>v(P.liveKey)||v(P.rawKey)||v(P.offsetKey)),K=(P,O)=>{const j=C>P;return`
        <div class="oq-settings-hp-calibration-step${j?" is-done":""}${C===P?" is-active":""}">
          <span>${j?"\u2713":P}</span>
          <strong>${s(O)}</strong>
        </div>
      `},R=P=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(P.label)}</span>
          <strong>${s(de(P.liveKey,2))}</strong>
        </article>
      `,V=P=>{const O=H(P.resultRawKey),j=Number.isFinite(O)?O:Ya(P.rawKey,P.liveKey,P.offsetKey),Y=H(P.suggestedKey),ge=Number.isFinite(j)&&Number.isFinite(Y)?eo(j+Y,o.entities[P.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(P.label)}</th>
          <td>${s(Number.isFinite(j)?eo(j,o.entities[P.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${s(de(P.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${s(de(P.suggestedKey,2))}</span></td>
          <td>${s(ge)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${K(1,"Voorbereiding")}
          ${K(2,"Meting")}
          ${K(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${n?" is-success":t?" is-active":c?" is-warning":""}">
          <div>
            <strong>${s($)}</strong>
            <p>${s(N)}</p>
          </div>
          ${t||n?`<span>${s(t?U:"Resultaat beschikbaar")}</span>`:""}
          ${t?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${F.toFixed(0)}%"></i></div>`:""}
        </div>

        ${t?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${W.map(R).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${s(de("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${s(de("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${n?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${s(de("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${s(de("hpWaterCalibrationSupplyDelta",2))}</span>
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
                  ${W.map(V).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${u?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${Ut({active:t,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||r,stopDisabled:l||a})}
            ${o.entities.hpWaterCalibrationApply?Re("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function xc(){const e=v("boilerCvAssistEnabled")&&A("boilerCvAssistEnabled"),t=kc(),n=A("cm100Active"),r=String(t||"").trim().toUpperCase(),a=kt(t),i=!a&&(n||r==="CM100 READY"),l=o.commissioningTaskLock==="cm100",u=o.loadingEntities||o.busyAction==="commissioningCm100Start"||o.busyAction==="commissioningCm100Stop"||l,d=!!o.pendingCommissioningCm100Start,c=u||i||a,g=u||!i,b=Wt("boilerPowerTestStatus","IDLE"),h=un(b,"boiler"),y=A("boilerPowerTestActive"),p=o.loadingEntities||o.busyAction==="boilerPowerTestStart"||o.busyAction==="boilerPowerTestAbort"||o.busyAction==="boilerPowerTestApply",f=!!(o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort||o.entities.boilerPowerTestApply),S=!!o.pendingBoilerPowerTestStart,w=o.commissioningTaskLock==="boiler",q=kt(b),k=!te(b)&&(y||S||w||It(b))&&!q,M=ne("boilerRatedHeatPower"),F=ne("boilerHeatPower"),x=H("boilerHeatPower"),U=x>0?F:k&&o.commissioningBoilerHeatPowerDisplay?o.commissioningBoilerHeatPowerDisplay:F;x>0&&(o.commissioningBoilerHeatPowerDisplay=F);const C=Wt("flowAutotuneStatus","IDLE"),$=un(C,"autotune"),N=o.loadingEntities||o.busyAction==="flowAutotuneStart"||o.busyAction==="flowAutotuneAbort"||o.busyAction==="flowAutotuneApply",W=!!(o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort||o.entities.flowAutotuneApply),K=!!o.pendingFlowAutotuneStart,R=o.commissioningTaskLock==="autotune",V=kt(C),O=!te(C)&&(K||R||It(C))&&!V,j=Wt("airPurgeStatus","IDLE"),Y=un(j,"purge"),ge=A("airPurgeActive"),ue=o.loadingEntities||o.busyAction==="airPurgeStart"||o.busyAction==="airPurgeAbort",J=!!(o.entities.airPurgeStart||o.entities.airPurgeAbort),nt=!!o.pendingAirPurgeStart,ke=o.commissioningTaskLock==="purge",me=!te(j)&&(ge||nt||ke||It(j)),hr=/DONE/.test(String(j||"").toUpperCase()),he=!!(J||o.entities.airPurgeStatus||o.entities.airPurgeReturnToAuto),fr=ne("airPurgeRemaining",{decimals:0}),yo=H("airPurgePhase"),en=yo===1?"Rustig":yo===2?"Pulsen":yo===3?"Stabiliseren":Y.phase,St=Wt("manualFlowStatus","IDLE"),Ot=A("manualFlowActive"),Ke=o.loadingEntities||o.busyAction==="manualFlowStart"||o.busyAction==="manualFlowAbort",wo=!!(o.entities.manualFlowStart||o.entities.manualFlowAbort),xt=!!o.pendingManualFlowStart,Oe=o.commissioningTaskLock==="manual-flow",Ce=!te(St)&&(Ot||xt||Oe||It(St)),rt=Wt("manualHpStatus","IDLE"),So=A("manualHpActive"),Ft=o.loadingEntities||o.busyAction==="manualHpStart"||o.busyAction==="manualHpAbort",tn=!!(o.entities.manualHpStart||o.entities.manualHpAbort),Dt=!!o.pendingManualHpStart,xe=o.commissioningTaskLock==="manual-hp",Fe=!te(rt)&&(So||Dt||xe||It(rt)),yi=/SAFETY STOP/.test(String(rt||"").toUpperCase()),wi=/STOPPING/.test(String(rt||"").toUpperCase()),at=Wt("hpWaterCalibrationStatus","IDLE"),Du=un(at,"hp-water-calibration"),Si=A("hpWaterCalibrationActive"),on=o.loadingEntities||o.busyAction==="hpWaterCalibrationStart"||o.busyAction==="hpWaterCalibrationAbort"||o.busyAction==="hpWaterCalibrationApply",qi=!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort||o.entities.hpWaterCalibrationApply),nn=!!o.pendingHpWaterCalibrationStart,it=o.commissioningTaskLock==="hp-water-calibration",ye=!te(at)&&(Si||nn||it||It(at)),rn=/DONE|APPLIED/.test(String(at||"").toUpperCase()),ki=/APPLIED/.test(String(at||"").toUpperCase()),Iu=ne("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),Wu=ne("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),Ci=/DONE|APPLIED/.test(String(b||"").toUpperCase()),Ti=/DONE|APPLIED/.test(String(C||"").toUpperCase()),br=i?q?"Wachten op CM100":k?h.phase:Ci?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",vr=i?V?"Wachten op CM100":O?$.phase:Ti?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",yr=i?me?Y.phase:hr?"Klaar":"Klaar om te starten":"Wachten op CM100",Ei=i?Ce?"Actief":"Klaar om te starten":"Wachten op CM100",$i=i?Fe?wi?"Bezig met stoppen":yi?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",Ai=i?ye?Du.phase:ki?"Offsets toegepast":rn?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Hi=!i||p||!f||O||me||Ce||Fe||ye||k||R||ke||Oe||xe||it||S,Bu=p||!(k||w||S),Vu=p||Hi||!Ci||O||me||ye,Mi=!i||N||!W||k||me||Ce||Fe||ye||O||w||ke||Oe||xe||it||K,ju=N||!(O||R||K),_u=N||Mi||!Ti||k||me||ye,Ku=!i||ue||!J||k||O||Ce||Fe||ye||me||w||R||Oe||xe||it||nt,Uu=ue||!(me||ke||nt),zu=!i||Ke||!wo||k||O||me||Fe||ye||Ce||w||R||ke||xe||it||xt,Gu=Ke||!(Ce||Oe||xt),Qu=!i||Ft||!tn||k||O||me||Ce||ye||Fe||w||R||ke||Oe||it||Dt,Yu=Ft||!(Fe||xe||Dt),Ju=!i||on||!qi||k||O||me||Ce||Fe||ye||w||R||ke||Oe||xe||nn,Zu=on||!(ye||it||nn),Xu=on||ye||!rn||ki;d&&i&&(o.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(r))&&(o.commissioningTaskLock=""),S&&(y||te(b))&&(o.pendingBoilerPowerTestStart=!1),w&&te(b)&&(o.commissioningTaskLock=""),K&&te(C)&&(o.pendingFlowAutotuneStart=!1),R&&te(C)&&(o.commissioningTaskLock=""),nt&&(ge||te(j))&&(o.pendingAirPurgeStart=!1),ke&&te(j)&&(o.commissioningTaskLock=""),xt&&(Ot||te(St))&&(o.pendingManualFlowStart=!1),Oe&&(Ot||te(St))&&(o.commissioningTaskLock=""),Dt&&(So||te(rt))&&(o.pendingManualHpStart=!1),xe&&(So||te(rt))&&(o.commissioningTaskLock=""),nn&&(Si||te(at))&&(o.pendingHpWaterCalibrationStart=!1),it&&te(at)&&(o.commissioningTaskLock="");const ed=a?"Wachten op CM100":t,td=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",od=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:Ai,available:!!(qi||o.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:Bt({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:Ai,statusCopy:ye?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":rn?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:Zf({status:at,running:ye,resultReady:rn,startDisabled:Ju,abortDisabled:Zu,applyDisabled:Xu,busy:on,controlsAvailable:!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:Ei,available:!!(wo||o.entities.manualFlowStatus),openDisabled:!i,cardMarkup:Bt({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:Ei,statusCopy:Ce?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${ut("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${o.entities.manualFlowStart||o.entities.manualFlowAbort?Ut({active:Ce,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:Ke||zu,stopDisabled:Ke||Gu}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${X("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",ne("flowSelected"),"oq-settings-field--compact")}
            ${X("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",ne("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${o.entities.manualFlowApplyHeating?Re("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",Ke):""}
          ${o.entities.manualFlowApplyCooling?Re("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",Ke):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:$i,available:!!(tn||o.entities.manualHpStatus),openDisabled:!i,cardMarkup:Bt({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:$i,statusCopy:Fe?wi?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":yi?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${o.entities.manualHpStart||o.entities.manualHpAbort?Ut({active:Fe,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:Ft||Qu,stopDisabled:Ft||Yu}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${to("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${ut("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${v("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${to("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${ut("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${X("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",ne("flowSelected"),"oq-settings-field--compact")}
              ${X("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",cs("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${v("hp2Compressor")?X("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",cs("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${X("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",E("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${X("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Oo(B("hp1Failures","None")),"oq-settings-field--compact")}
              ${v("hp2Failures")?X("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Oo(B("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:vr,available:!0,openDisabled:kt(vr),cardMarkup:Bt({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:vr,statusCopy:V?"Wacht totdat CM100 actief is voordat je autotune start.":O?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort?Ut({active:O,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:N||Mi,stopDisabled:N||ju}):""}
            ${o.entities.flowAutotuneApply?Re("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",N||_u):""}
          `,metrics:`
            ${X("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",Iu,"oq-settings-field--compact")}
            ${X("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",Wu,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:br,available:e,openDisabled:kt(br),cardMarkup:Bt({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s(M)}`,status:br,statusCopy:q?"Wacht totdat CM100 actief is voordat je de boiler-test start.":k?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort?Ut({active:k,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:p||Hi,stopDisabled:p||Bu}):""}
            ${o.entities.boilerPowerTestApply?Re("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",p||Vu):""}
          `,metrics:`
            ${X("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",U)}
            ${X("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",ne("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:yr,available:he,openDisabled:kt(yr),cardMarkup:Bt({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:yr,statusCopy:me?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${o.entities.airPurgeStart||o.entities.airPurgeAbort?Ut({active:me,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:ue||Ku,stopDisabled:ue||Uu}):""}
          `,metrics:`
            ${X("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",fr,"oq-settings-field--compact")}
            ${X("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",en,"oq-settings-field--compact")}
            ${X("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",ne("flowSelected"),"oq-settings-field--compact")}
            ${$f("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(nd=>nd.available);return{cm100Status:ed,cm100StartDisabled:c,cm100StopDisabled:g,serviceStatusCopy:td,tasks:od}}function Xf(e){return`
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
    `}function eb(){const e=xc();return se("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${s(e.cm100Status)}</strong>
              <p>${s(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${o.entities.commissioningCm100Start?Re("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${o.entities.commissioningCm100Stop?Re("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(t=>Xf(t)).join("")}
          </div>
        </div>
      `)}function tb(){const e=String(o.systemModal||"").replace(/^service-task-/,""),n=xc().tasks.find(r=>r.key===e);return n?`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task" data-oq-service-task-scroller role="dialog" aria-modal="true" aria-labelledby="oq-service-task-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Service</p>
              <h2 class="oq-helper-modal-title" id="oq-service-task-modal-title">${s(n.title)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit ${s(n.title)}">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(n.summary)}</p>
          <div class="oq-settings-service-task-modal-body">
            ${n.cardMarkup}
          </div>
          <div class="oq-helper-modal-actions">
            ${n.modalActions||""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
          </div>
        </section>
      </div>
    `:""}function vs(){if(!v("hpGeneration"))return"";const e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:os,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:os,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:oh,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},t=o.entities.hpGeneration||{},n=String(E("hpGeneration")||""),r=fo(t),a=o.loadingEntities||o.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${r.map(i=>{const l=e[i]||{};return rr({key:"hpGeneration",option:i,currentValue:n,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function ob(){const e=Vo(),t=o.entities.hpGeneration||{},n=v("hpGeneration")&&fo(t).length>0;return!e&&!n?"":se("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
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
            ${!n||o.loadingEntities||o.busyAction==="save-hpGeneration"?"disabled":""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `)}function Fc(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!v("boilerCvAssistEnabled"))return"";const t=A("boilerCvAssistEnabled"),n=v("boilerRatedHeatPower"),r=Xe("boilerRatedHeatPower"),a=Le("boilerRatedHeatPower"),i=o.loadingEntities||o.busyAction==="switch-boilerCvAssistEnabled",u=n?Go({key:"boilerRatedHeatPower",value:a,meta:r,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,d=t&&n?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${s(e)}">
          ${qe("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${Qo("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",t,i)}
              </div>
            `,"oq-settings-field--compact")}

          ${t?qe("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${u}
              </div>
            `,t&&n?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",d):""}
        </div>
      `}function nb(){if(!v("boilerCvAssistEnabled"))return"";const e=A("boilerCvAssistEnabled");return se("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",Fc())}function rb(){const e=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",t=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return se("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
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
              ${o.busyAction==="reset"?"disabled":""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${s(t)}</p>
        </div>
      `)}function ab(){if(!v("trendHistoryEnabled")&&!v("lifetimeEnergyHistoryEnabled"))return"";const e=A("trendHistoryEnabled"),t=e&&A("trendHistoryFlashEnabled"),n=e&&v("trendHistoryFlashAvailable"),r=v("lifetimeEnergyHistoryEnabled"),a=r&&A("lifetimeEnergyHistoryEnabled"),i=v("lifetimeEnergyHistoryAvailable"),l=n?ne("trendHistoryFlashAvailable"):"Alleen live",u=i?Cc(ne("lifetimeEnergyHistoryAvailable")):"Geen data";return se("Diagnose","Gegevens bewaren","Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${v("trendHistoryEnabled")?kr("Live diagnose",e?"Aan":"Uit","Live",e):""}
            ${v("trendHistoryFlashEnabled")?kr("Diagnosehistorie",l,t?"Permanent geheugen":"Uit",t):""}
            ${r?kr("Energiehistorie",u,a?"Permanent geheugen":"Uit",a):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `)}function ib(){if(!v("lifetimeEnergyHistoryEnabled"))return"";const e=o.energyHistoryImportRecords.length,t=new Set(o.energyHistoryImportHourRecords.map(u=>u.dateKey)).size,n=[];e>0&&n.push(`${e} dagrecords`),t>0&&n.push(`${t} uurdagen`),o.energyHistoryImportRange&&n.push(o.energyHistoryImportRange),o.energyHistoryImportSource&&n.push(o.energyHistoryImportSource),o.energyHistoryImportInvalidCount>0&&n.push(`${o.energyHistoryImportInvalidCount} regels niet gebruikt`);const r=!!o.energyHistoryImportFileName,a=e>0||t>0,i=Number(o.energyHistoryImportProgressPercent||0),l=o.energyHistoryImportBusy?`Importeren...${i>0?` (${i}%)`:""}`:"Importeren";return`
      <div class="oq-settings-storage-import">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie importeren</h4>
            <p>Vul ontbrekende dagtotalen en uurdetail aan vanuit een OpenQuatt- of Quatt-exportbestand.</p>
          </div>
          ${r?"":`
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-energy-history-import-file">
              Bestand kiezen
            </button>
          `}
        </div>
        ${r?`
          <div class="oq-settings-storage-import-card">
            <div class="oq-settings-storage-import-file">
              <strong>${s(o.energyHistoryImportFileName)}</strong>
              ${n.length?`<p>${s(n.join(" \xB7 "))}</p>`:""}
              ${o.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(o.energyHistoryImportNotice)}</p>`:""}
              ${o.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(o.energyHistoryImportError)}</p>`:""}
            </div>
            <div class="oq-settings-storage-import-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-energy-history-import-file" ${o.energyHistoryImportBusy?"disabled":""}>
                Wissen
              </button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="import-energy-history-file" ${o.energyHistoryImportBusy||!a?"disabled":""}>
                ${s(l)}
              </button>
            </div>
          </div>
        `:`
          ${o.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(o.energyHistoryImportNotice)}</p>`:""}
          ${o.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(o.energyHistoryImportError)}</p>`:""}
        `}
      </div>
    `}function sb(){if(!v("lifetimeEnergyHistoryEnabled"))return"";const e=zn(o.energyHistoryExportMode),t=Tn.map(r=>`
      <option value="${s(r.id)}" ${r.id===e?"selected":""}>
        ${s(r.label)}
      </option>
    `).join(""),n=o.energyHistoryExportBusy?"Exporteren...":"Exporteren";return`
      <div class="oq-settings-storage-import oq-settings-storage-export">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie exporteren</h4>
            <p>Download bewaarde energiegegevens om ze later op een andere OpenQuatt te importeren.</p>
          </div>
          <div class="oq-settings-storage-export-controls">
            <select class="oq-helper-select oq-settings-storage-export-select" data-oq-energy-history-export-mode="true" ${o.energyHistoryExportBusy?"disabled":""}>
              ${t}
            </select>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="export-energy-history" ${o.energyHistoryExportBusy?"disabled":""}>
              ${s(n)}
            </button>
          </div>
        </div>
        ${o.energyHistoryExportNotice?`<p class="oq-settings-storage-import-notice">${s(o.energyHistoryExportNotice)}</p>`:""}
        ${o.energyHistoryExportError?`<p class="oq-settings-storage-import-error">${s(o.energyHistoryExportError)}</p>`:""}
      </div>
    `}function lb(){const e=v("trendHistoryEnabled")&&A("trendHistoryEnabled"),t=e&&v("trendHistoryFlashEnabled")&&A("trendHistoryFlashEnabled"),r=v("lifetimeEnergyHistoryEnabled")&&A("lifetimeEnergyHistoryEnabled"),a=v("lifetimeEnergyHistoryAvailable")?ne("lifetimeEnergyHistoryAvailable"):"Geen data",i=v("lifetimeEnergyHistoryClear")&&a!=="Geen data"&&a!=="\u2014",l=Cc(a),u=e&&v("trendHistoryFlush"),d=v("lifetimeEnergyHistoryCapture"),c=qf(),g=String(o.energyHistoryRaw||"").includes("@hour_retention|"),b=g&&!c.hourPartitionAvailable,h=g?b?"Alleen live":vf(c.hourStoredDayCount,"Geen uurdata"):"Laden...",y=g?b?"Niet beschikbaar":yf(c.hourStorageKb):"Laden...",p=g?b?"Niet beschikbaar":wf(c.hourWriteCount):"Laden...",f=g?b?"Niet beschikbaar":Sf(c.hourLastWriteTimestampS):"Laden...",S=us(c.hourOldestDateKey),w=us(c.hourNewestDateKey),q=g?c.hourPartitionAvailable?`${S} t/m ${w}`:"Live beschikbaar; bewaren in Flash vraagt een nieuwere Flash-indeling.":"Uurdetailstatus wordt opgehaald.",T=[{title:"Diagnosegeschiedenis",meta:"Diagnose",shortLabel:"Diagnose",primary:He("trendHistoryFlashAvailable","Alleen live"),note:`Laatste meting: ${He("trendHistoryFlashNewest","Geen data")}`,items:[{label:"Bewaarperiode",value:He("trendHistoryFlashAvailable","Alleen live")},{label:"Opslagruimte",value:He("trendHistoryFlashSize")},{label:"Opslagacties",value:He("trendHistoryFlashWrites","0")},{label:"Laatst opgeslagen",value:He("trendHistoryFlashLastFlush","Geen data")}]},{title:"Dagtotalen",meta:"Resultaten",shortLabel:"Dag",primary:l,note:`${He("lifetimeEnergyHistoryOldest","Geen data")} t/m ${He("lifetimeEnergyHistoryNewest","Geen data")}`,items:[{label:"Dagen bewaard",value:l},{label:"Opslagruimte",value:He("lifetimeEnergyHistorySize")},{label:"Opslagacties",value:He("lifetimeEnergyHistoryWrites","0")},{label:"Laatst opgeslagen",value:He("lifetimeEnergyHistoryLastWrite","Geen data")}]},v("lifetimeEnergyHourRetention")?{title:"Uurdetail",meta:"Resultaten",shortLabel:"Uur",primary:h,note:q,items:[{label:"Dagen bewaard",value:h},{label:"Opslagruimte",value:y},{label:"Opslagacties",value:p},{label:"Laatst opgeslagen",value:f}]}:null];return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-settings-storage-modal" data-oq-history-storage-scroller role="dialog" aria-modal="true" aria-labelledby="oq-history-storage-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Gegevens</p>
              <h2 class="oq-helper-modal-title" id="oq-history-storage-modal-title">Gegevens bewaren</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit gegevens bewaren">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen. Dit scherm verandert niets aan de werking of aansturing van je warmtepomp.</p>
          <div class="oq-settings-storage-domain-grid">
            <section class="oq-settings-storage-domain oq-settings-storage-domain--trend">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Diagnose</p>
                <h3>Diagnosegegevens</h3>
                <p>Technische metingen zoals temperatuur, doorstroming en vermogen. Deze gegevens zijn vooral bedoeld voor diagnosegrafieken en hulp bij problemen.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${Cr("trendHistoryEnabled","Recente diagnosegegevens","Bewaar de laatste meetpunten zolang de controller online is.","Na een herstart of update zijn deze tijdelijke gegevens niet meer beschikbaar.","Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.","Tijdelijk")}
                ${Cr("trendHistoryFlashEnabled","Diagnosegeschiedenis bewaren","Bewaar recente diagnosegegevens ook na een herstart of update.","OpenQuatt slaat deze gegevens ongeveer elk uur op.","Alleen recente diagnosegegevens; bestaande geschiedenis blijft staan.","Permanent geheugen")}
                ${u?`
                  <div class="oq-settings-storage-inline-action">
                    <div>
                      <h4>Diagnose nu opslaan</h4>
                      <p>Sla de huidige diagnosegegevens direct op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    ${Tr("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!t,busyLabel:"Opslaan..."})}
                  </div>
                `:""}
              </div>
            </section>
            <section class="oq-settings-storage-domain oq-settings-storage-domain--energy">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Resultaten</p>
                <h3>Energiehistorie</h3>
                <p>Dagtotalen voor de Resultatenpagina, zoals opbrengst, verbruik, rendement en besparing. Hiermee kun je prestaties over langere tijd terugkijken.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${Cr("lifetimeEnergyHistoryEnabled","Dagtotalen bewaren","Bewaar elke dag een samenvatting van je energiegegevens.","Zo blijven je resultaten ook na een herstart of update beschikbaar. OpenQuatt slaat dit op aan het einde van de dag en bij een normale afsluiting.","Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.","Permanent geheugen")}
                ${ff("lifetimeEnergyHourRetention","Uurdetail bewaren","Kies hoelang OpenQuatt detail per uur mag bewaren voor de daggrafiek.","Geavanceerd")}
                ${d?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--split">
                    <div>
                      <h4>Vandaag alvast opslaan</h4>
                      <p>Sla de gegevens van vandaag nu op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${Tr("lifetimeEnergyHistoryCapture","Vandaag opslaan","save-lifetime-energy-history",{disabled:!r,busyLabel:"Opslaan..."})}
                    </div>
                  </div>
                `:""}
                ${sb()}
                ${ib()}
                ${v("lifetimeEnergyHistoryClear")?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger">
                    <div>
                      <h4>Energiehistorie wissen</h4>
                      <p>Verwijder alle bewaarde dagtotalen. Je begint daarna opnieuw met het opbouwen van je energiehistorie.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${Tr("lifetimeEnergyHistoryClear","Historie wissen","clear-lifetime-energy-history",{disabled:!i,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}
                    </div>
                  </div>
                `:""}
              </div>
            </section>
          </div>
          ${Cf(T)}
          <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> OpenQuatt schrijft deze gegevens niet continu weg, maar alleen op vaste momenten. Zo blijft duidelijk wat er wordt bewaard en hoeveel geheugen daarvoor wordt gebruikt.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `}function cb(){const e=ce()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${Nc()}
          </div>
          <div class="oq-settings-curve-shell">
            ${Dc()}
          </div>
          ${Ec()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${Hc()}
          ${Rc()}
        </div>
      `;return se("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${$c()}
        ${Pc()}
        ${e}
      `)}function ub(){return se("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",Mc())}function db(){const e=v("otEnabled"),t=v("cicPollingEnabled")||v("cicFeedUrl"),n=v("cicCompatibilityMode"),r=v("otLinkProblem")||v("cicDataStale")||v("cicJsonFeedOk");if(!e&&!t&&!n&&!r)return"";const a=mt("cicPollingEnabled"),i=mt("otEnabled"),l=({label:p,value:f,active:S=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${S?" is-warning":""}">
        <dt>${s(p)}</dt>
        <dd>${s(f)}</dd>
      </div>
    `,u=(p,f,S="Actief",w="Normaal",q={})=>{if(!v(p))return"";const T=z(p);return l({label:f,value:T?S:w,active:q.warningWhenActive?T:!1})},d=(p,f,S={})=>{const w=S.fallbackKey||"";return!v(p)&&!(w&&v(w))?"":l({label:f,value:ne(v(p)?p:w,S)})},c=(p,f)=>{const S=f.filter(Boolean).join("");return S?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(p)}</h4>
          <dl>${S}</dl>
        </article>
      `:""},g=v("cicFeedUrl")?`
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
            value="${s(String(Le("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${o.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",b=c("OpenTherm",[v("otLinkProblem")?l({label:"OT-link",value:i?z("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&z("otLinkProblem")}):"",u("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),u("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),d("otControlSetpoint","Control setpoint"),d("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),d("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),h=c("CIC-feed",[v("cicJsonFeedOk")?l({label:"JSON-feed",value:a?z("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!z("cicJsonFeedOk")}):"",v("cicDataStale")?l({label:"Data",value:a?z("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&z("cicDataStale")}):"",u("cicChEnabled","CH-vraag","Actief","Normaal"),u("cicCoolingEnabled","Koeling","Actief","Normaal"),d("cicControlSetpoint","Control setpoint"),d("cicRoomSetpoint","Room setpoint"),d("cicRoomTemp","Room temperature"),d("cicFlowrate","Flow"),d("cicLastSuccessAge","Laatste succes")]),y=b||h?`
      <details class="oq-settings-integration-diagnostics"${o.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${b}
          ${h}
        </div>
      </details>
    `:"";return se("Integratie","OpenTherm & CIC-polling","Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          ${Er("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${Er("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${Er("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${g}
        </div>
        ${y}
      `)}function pb(){if(!aa.some(C=>v(C)))return"";const t=mt("cicPollingEnabled"),n=mt("otEnabled"),r=(C={})=>C.haValueKey||(C.haKeys||[]).find($=>!/valid$/i.test($))||"",a=(C={})=>C.haValidKey||(C.haKeys||[]).find($=>/valid$/i.test($))||"",i=(C="",$="")=>!!C&&!!$&&v(C)&&v($)&&z($),l=(C={})=>i(r(C),a(C)),u=(C,$={})=>C==="CIC"?t:C==="OT thermostat"?n:C==="HA input"?l($):C==="CIC or HA input"?t||l($):C==="Flowmeter HP2"?v("hp2Flow"):C==="Local aggregate HP1/HP2"?v("flowLocal")||v("hp2Flow"):!0,d=(C,$={})=>C==="CIC"&&!t?"CIC-polling staat uit":C==="OT thermostat"&&!n?"OpenTherm staat uit":C==="HA input"&&!l($)?"HA-bron ongeldig":C==="CIC or HA input"&&!t&&!l($)?"CIC en HA ontbreken":C==="Flowmeter HP2"&&!v("hp2Flow")?"HP2-flow ontbreekt":C==="Local aggregate HP1/HP2"&&!v("flowLocal")&&!v("hp2Flow")?"Lokale flow ontbreekt":"",c=(C,$="Actief",N="Normaal")=>v(C)?z(C)?$:N:"",g=(C,$={})=>{const N=String(C||"").trim();return N?$.optionLabels?.[N]||Ne(N):""},b=(C,$={})=>{const N=String(E(C)||"").trim();return N?g(N,$):""},h=C=>{const $=nr(C,"");return $?Ne($):""},y=(...C)=>C.find($=>String($||"").trim())||"",p=()=>{const C=b("waterSupplySource");if(String(E("waterSupplySource")||"")==="Local"&&v("localWaterSupplyTempSource")){const $=b("localWaterSupplyTempSource");return $?`${C} - ${$}`:C}return C},f=()=>{const C=String(E("flowSource")||"").trim();if(C==="Outdoor unit"){if(v("qFlowSource")){const $=String(E("qFlowSource")||"").trim(),N=String(E("hpGeneration")||"").trim();return $==="Local"||$==="Auto"&&N==="V1"?$==="Auto"?"Lokaal (auto)":"Lokaal":y(b("outdoorUnitFlowMode"),$==="Auto"?"Buitenunit (auto)":"Buitenunit")}return y(b("outdoorUnitFlowMode"),"Quatt-flow")}return Ne(C)},S=()=>{const C=String(E("outsideTempSource")||"").trim();if(C!=="Auto")return Ne(C);const $=H("outsideTempLocalAggregated"),N=H("outsideTempHa"),W=!Number.isNaN($),K=v("outsideTempHaValid")?z("outsideTempHaValid")&&!Number.isNaN(N):!Number.isNaN(N);return W&&K?N<=$?"HA-invoer":"Buitenunit":K?"HA-invoer":W?"Buitenunit":"Auto"},w=({label:C,value:$="",key:N="",active:W=!1})=>{const K=$||(N?ne(N):"");return K?`
        <div class="oq-settings-source-row${W?" is-warning":""}">
          <span>${s(C)}</span>
          <strong>${s(K)}</strong>
        </div>
      `:""},q=({label:C="HA input",valueKey:$="",validKey:N="",value:W=""})=>i($,N)?[w({label:C,key:$,value:W}),w({label:"HA status",value:"Geldig"})]:[],T=(C,$={})=>{if(!v(C))return{markup:"",warning:""};const N=o.entities[C]||{},W=String(E(C)||""),R=fo(N).filter(Y=>u(Y,$)),V=W&&!u(W,$),P=W==="HA input"&&$.keepUnavailableCurrent!==!0,j=(V&&!P&&!R.includes(W)?[W,...R]:R).map(Y=>{const ge=!u(Y,$),ue=g(Y,$),J=ge?`${ue} (${d(Y,$)||"niet beschikbaar"})`:ue;return`<option value="${s(Y)}" ${Y===W?"selected":""}>${s(J)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s($.label||"Bron")}</span>
              ${$.infoCopy?ho($.infoId||C,$.infoTitle||$.label||"Bron",$.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s(C)}" ${o.loadingEntities?"disabled":""}>
              ${j}
            </select>
          </label>
        `,warning:V?`Huidige bron niet beschikbaar: ${d(W,$)}`:""}},k=({key:C,title:$,select:N,secondarySelect:W=null,secondarySelects:K=null,rows:R=[]})=>{const V=N&&N.when!==!1?T(N.key,N):{markup:"",warning:""},O=(Array.isArray(K)?K:W?[W]:[]).filter(J=>J&&J.when!==!1).map(J=>T(J.key,J)).filter(J=>J.markup),j=O.map(J=>J.markup).join(""),Y=O.map(J=>J.warning).find(Boolean)||"",ge=R.filter(Boolean).join(""),ue=`${V.markup}${j}`;return!ue&&!ge?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s(C||N.key)}">
          <div class="oq-settings-source-card-head">
            <h4>${s($)}</h4>
          </div>
          ${ue?`
            <div class="oq-settings-source-controls">
              ${ue}
            </div>
          `:""}
          ${V.warning||Y?`
            <p class="oq-settings-source-warning">${s(V.warning||Y)}</p>
          `:""}
          ${ge?`<div class="oq-settings-source-rows">${ge}</div>`:""}
        </article>
      `},M=String(E("waterSupplySource")||""),F=String(E("flowSource")||""),x=String(E("qFlowSource")||""),U=[k({key:"room-temperature",title:"Kamertemperatuur",select:{key:"roomTempSource",label:"Kamertemperatuur bron",haKeys:["roomTempHa","roomTempHaValid"]},rows:[w({label:"Actieve waarde",key:"roomTemp"}),w({label:"Gebruikte bron",value:h("roomTempEffectiveSource")}),t?w({label:"CIC",key:"cicRoomTemp"}):"",n?w({label:"OpenTherm",key:"otRoomTemp"}):"",...q({valueKey:"roomTempHa",validKey:"roomTempHaValid"})]}),k({key:"room-setpoint",title:"Kamer setpoint",select:{key:"roomSetpointSource",label:"Setpoint bron",haKeys:["roomSetpointHa","roomSetpointHaValid"]},rows:[w({label:"Actieve waarde",key:"roomSetpoint"}),w({label:"Gebruikte bron",value:h("roomSetpointEffectiveSource")}),t?w({label:"CIC",key:"cicRoomSetpoint"}):"",n?w({label:"OpenTherm",key:"otRoomSetpoint"}):"",...q({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"})]}),k({key:"water-supply",title:"Aanvoertemperatuur",select:{key:"waterSupplySource",label:"Aanvoer bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:M==="Local"&&v("localWaterSupplyTempSource")},rows:[w({label:"Actieve waarde",key:"supplyTemp"}),w({label:"Gebruikte bron",value:p()}),w({label:"Lokale selectie",key:"waterSupplyTempEsp"}),w({label:"PT1000",key:"waterSupplyTempPt1000"}),w({label:"DS18B20",key:"waterSupplyTempDs18b20"}),t?w({label:"CIC",key:"cicWaterSupplyTemp"}):"",...q({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),k({key:"flow-source",title:"Flow",select:{key:"flowSource",label:"Flow bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:t||F==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Quatt-flow bron",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:F==="Outdoor unit"&&v("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Flowmeterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:F==="Outdoor unit"&&v("outdoorUnitFlowMode")&&(!v("qFlowSource")||x!=="Local")}],rows:[w({label:"Actieve waarde",key:"flowSelected"}),w({label:"Gebruikte bron",value:f()}),w({label:"Lokaal",key:"controllerFlow"}),w({label:"Gecombineerd",key:"flowLocal"}),w({label:"HP1",key:"hp1Flow"}),w({label:"HP2",key:"hp2Flow"}),t?w({label:"CIC",key:"cicFlowrate"}):""]}),k({key:"outside-temperature",title:"Buitentemperatuur",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],infoId:"outsideTempSource-auto-info",infoCopy:i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn zowel buitenunit als HA-invoer geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een van beide geldig, dan wordt die gebruikt.":"Auto gebruikt de geldige buitentemperatuur van de buitenunit."},rows:[w({label:"Actieve waarde",key:"outsideTempSelected"}),w({label:"Gebruikte bron",value:S()}),w({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...q({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"})]}),k({key:"heating-enable",title:"Warmtetoestemming",select:{key:"heatingEnableSource",label:"Warmtetoestemming bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],keepUnavailableCurrent:!0},rows:[w({label:"Verwarming toegestaan",value:c("heatingEnableSelected","Ja","Nee")}),w({label:"Gebruikte externe bron",value:h("heatingEnableEffectiveSource")}),w({label:"Bronselectie",value:c("heatingEnableValid","Geldig","Ongeldig")}),n?w({label:"OpenTherm",value:c("otThermostatChEnable","Toestemming","Geen toestemming")}):"",t?w({label:"CIC",value:c("cicChEnabled","Toestemming","Geen toestemming")}):"",...q({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:c("heatingEnableHa","Toestemming","Geen toestemming")})]}),k({key:"cooling-enable",title:"Koeltoestemming",select:{key:"coolingEnableSource",label:"Koeltoestemming bron",haKeys:["coolingEnableHa","coolingEnableHaValid"]},rows:[w({label:"Actieve waarde",value:c("coolingEnableSelected","Actief","Niet actief")}),w({label:"Gebruikte bron",value:h("coolingEnableEffectiveSource")}),w({label:"Handmatig",value:c("manualCoolingEnable","Aan","Uit")}),t?w({label:"CIC",value:c("cicCoolingEnabled","Actief","Normaal")}):"",...q({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:c("coolingEnableHa","Actief","Normaal")})]})].filter(Boolean);return U.length?se("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${U.join("")}</div>`):""}function gb(){return se("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${s(Ra())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(La())}</p>
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
                <strong class="oq-settings-quickstart-status-value">${s(Za())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(Xa())}</p>
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
      `)}function Za(){const e=o.apiSecurityStatus;return e?e.pending_restart?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function Xa(){const e=o.apiSecurityStatus;return e?e.pending_restart?e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.":"API-encryptie wordt geladen."}function mb(){const e=o.settingsBackupBusy,t=Wo.length,n=Jt.length;return se("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${s(String(t))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Secties</span>
              <strong class="oq-settings-backup-stat-value">${s(String(n))}</strong>
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
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}
        </div>
      `)}function hb(){const e=o.settingsBackupBusy;return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
          </div>
        </section>
      </div>
    `}function fb(){const e=o.settingsBackupDraft;if(!e)return"";const t=e.summary||Gl(e),n=String(e.source?.installation||e.source?.device||"Onbekend"),r=Vo(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",u=oe(),d=typeof Z=="function"?Z():"",c=l!=="Onbekend"&&d&&l!==d,g=n!=="Onbekend"&&n!==r,b=c||g?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":t.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              <strong class="oq-helper-modal-value">${s(n)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(l)} \xB7 Firmware: ${s(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(d)} \xB7 Firmware: ${s(u||"Onbekend")}</span>
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
            ${t.sectionSummaries.map(h=>`
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${s(h.label)}</strong>
                    <em>${s(`${h.total} ${h.total===1?"instelling":"instellingen"} \xB7 ${h.differenceCount?`${h.differenceCount} ${h.differenceCount===1?"verschil":"verschillen"}`:"Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${s(h.differenceCount?`${h.differenceCount} instelling${h.differenceCount===1?"":"en"} wijkt af of ontbreekt.`:"Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${h.rows.map(y=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(y.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(y.label)}</strong>
                          <span>${s(y.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(y.status)}">
                            <span>Backup</span>
                            <strong>${s(y.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(y.status)}">
                            <span>Nu</span>
                            <strong>${s(y.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${t.unknown||t.requiredMissing||g?" oq-settings-action-note--warning":""}">${s(b)}</p>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.settingsBackupBusy?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${o.settingsBackupBusy?"disabled":""}>${o.settingsBackupBusy?"Herstellen...":"Herstellen"}</button>
          </div>
        </section>
      </div>
    `}function bb(){const e=jo(),t=ll(),n=o.busyAction==="restartAction";return se("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          <div class="oq-settings-system-row" data-oq-diagnostics-row="uptime">
            <span class="oq-settings-system-row-label">Uptime</span>
            <strong class="oq-settings-system-row-value">${s(wa())}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="ip">
            <span class="oq-settings-system-row-label">IP-adres</span>
            <strong class="oq-settings-system-row-value">${s(Sa())}</strong>
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
              <strong class="oq-settings-system-row-value">${s(sc())}</strong>
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
              <strong class="oq-settings-system-row-value">${s(er())}</strong>
              <p class="oq-settings-system-row-note">${s(Ua())}</p>
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
            <strong class="oq-settings-system-row-value">${s(bl())}</strong>
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
      `)}function vb(){const e=[ms("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),ms("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return se("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${ee("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${v("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}function yb(){return se("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",Ja())}function wb(){return Ja("oq-settings-grid oq-settings-grid--modal")}function Sb(){const e=[ee("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),ut("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${_("coolingDemandMax")} max`}),ee("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),ee("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."),ee("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."),ee("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),t=v("coolingWithoutDewPointMode"),n=[v("coolingGuardMode")?X("coolingGuardMode","Actieve beveiligingsroute","Laat zien of koeling nu via dauwpuntmeting, dauwpuntsbenadering of expliciet toestaan wordt begrensd.",B("coolingGuardMode","Onbekend")):"",v("coolingFallbackNightMinOutdoorTemp")?X("coolingFallbackNightMinOutdoorTemp","Nachtminimum buitentemperatuur","Minimum buitentemperatuur van de afgelopen nacht. Warme nachten maken de dauwpuntsbenadering conservatiever.",B("coolingFallbackNightMinOutdoorTemp","\u2014")):"",v("coolingFallbackMinSupplyTemp")?X("coolingFallbackMinSupplyTemp","Berekende minimum watertemperatuur","De conservatieve ondergrens die OpenQuatt gebruikt bij de dauwpuntsbenadering. Als die grens door warm weer hoger wordt dan zinvol is, houdt OpenQuatt rekening met de kamertemperatuur.",B("coolingFallbackMinSupplyTemp","\u2014")):"",v("coolingEffectiveMinSupplyTemp")?X("coolingEffectiveMinSupplyTemp","Actieve minimum ondergrens","De ondergrens die de koeling nu daadwerkelijk gebruikt: dauwpunt plus marge, dauwpuntsbenadering, of de ingestelde minimumgrens bij expliciet toestaan.",B("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean);if(!e.length&&!t&&!n.length)return"";const r={"Dew point required":"Koel alleen als er een betrouwbare dauwpuntmeting beschikbaar is. Zonder dauwpuntmeting blijft koeling geblokkeerd.","Allow without dew point":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use fallback":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use dew point approximation":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, user responsibility":"Sta koeling expliciet toe zonder dauwpuntgrens. Ook een beschikbare dauwpuntmeting wordt dan genegeerd; alleen de ingestelde minimale koel-aanvoer geldt."};return se("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${e.length?`
          <div class="oq-settings-grid">
            ${e.join("")}
          </div>
        `:""}
        ${t||n.length?`
          <div class="oq-settings-grid">
            ${t?Af("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",r,"oq-settings-field--span-2"):""}
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
            ${n.join("")}
          </div>
        `:""}
      `)}function Dc(){const n={top:22,right:18,bottom:38,left:34},r=560-n.left-n.right,a=240-n.top-n.bottom,i=pe[0].outdoor,l=pe[pe.length-1].outdoor,u=y=>n.left+(y-i)/(l-i)*r,d=y=>n.top+(70-y)/50*a,c=[20,30,40,50,60,70].map(y=>{const p=d(y);return`
          <line x1="${n.left}" y1="${p}" x2="${560-n.right}" y2="${p}" class="oq-helper-curve-grid" />
          <text x="8" y="${p+4}" class="oq-helper-curve-axis-label">${y}\xB0</text>
        `}).join(""),g=pe.map(y=>`
        <text x="${u(y.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(y.label)}</text>
      `).join(""),b=pe.map(y=>`${u(y.outdoor)},${d(we(y.key,E(y.key)))}`).join(" "),h=pe.map(y=>{const p=we(y.key,E(y.key));return`
          <g>
            <circle
              cx="${u(y.outdoor)}"
              cy="${d(p)}"
              r="7"
              class="oq-helper-curve-point ${o.draggingCurveKey===y.key?"is-dragging":""}"
              data-curve-key="${s(y.key)}"
            />
            <text x="${u(y.outdoor)}" y="${d(p)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${p.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${c}
          <polyline points="${b}" class="oq-helper-curve-line" />
          ${h}
          ${g}
        </svg>
      </div>
    `}function Ic(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${vs()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${vs()}
        ${tt()}
      </section>
    `}function qb(e){const t=String(e||"").trim();if(!t)return"";try{const n=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`http://${t}`);return n.protocol!=="http:"&&n.protocol!=="https:"?"":(n.port||(n.port="8080"),(!n.pathname||n.pathname==="/")&&(n.pathname="/beta/feed/data.json"),n.toString())}catch{return""}}function Wc(){const e=String(E("cicFeedUrl")||"").trim(),t=o.quickStartCicFeedUrlDraft===null?e:String(o.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:t,normalizedDraftUrl:qb(t)}}function Bc(e,t){return`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${ho("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
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
    `}function ys(e){const t=String(e||"").trim().toLowerCase();return t==="heatpump_controller_q"||t.includes("q-edition")||t.includes("controller q")?"heatpump_controller_q":t==="heatpump_listener"||t.includes("listener")?"heatpump_listener":t==="waveshare"||t.includes("waveshare")?"waveshare":""}function Vc(){let e=ys(E("hardwareProfileText")),t=!1;return e||(e=ys(bt().hardwareProfile)),!e&&v("qFlowSource")?(e="heatpump_controller_q",t=!0):!e&&v("flowSource")&&v("cicPollingEnabled")&&(e="remote",t=!0),{profile:e,inferred:t,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function Yo(){const e=String(E("hpGeneration")||"").trim(),t=Vc(),n=e==="V1",{isQEdition:r,isRemoteProfile:a,hardwareKnown:i}=t,l=n&&a,u=r?n?"Local":"Outdoor unit":"",d=l?"CIC":"Outdoor unit",c=String(E("flowSource")||"").trim(),g=String(E("qFlowSource")||"").trim(),b=A("cicPollingEnabled"),h=A("cicJsonFeedOk"),y=A("cicDataStale"),p=Wc(),f=c===d&&(!u||g===u),S=l?f&&b&&!!p.configuredUrl:f,w=l?"cicFlowrate":r&&n?"controllerFlow":Z()==="duo"?"flowLocal":"hp1Flow",q=H(w),T=Number.isFinite(q),k=A("quickFlowTest");let M=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&S?M=h&&T?q>0?"Geldig":"Bron actief, geen circulatie":y?"Geen actuele CiC-data":h?"Verbonden, wacht op flow":"Verbinding controleren":!l&&S&&(M=T?q>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");const F=l?"CiC JSON-feed":r&&n?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",x=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":r&&n?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:t.hardwareLabel,requiresCic:l,qFlowTarget:u,flowSourceTarget:d,configurationApplied:S,sourceLabel:F,explanation:x,status:M,flowValue:q,flowAvailable:T,flowTestActive:k,canRunFlowTest:S,...p,canApply:i&&v("flowSource")&&(!u||v("qFlowSource"))&&(!l||v("cicPollingEnabled")&&v("cicFeedUrl")&&!!p.normalizedDraftUrl)}}function ei(){const e=Vc(),{isQEdition:t,isRemoteProfile:n}=e,r=String(E("roomTempSource")||"").trim(),a=String(E("roomSetpointSource")||"").trim(),i=r===a&&["CIC","OT thermostat","HA input"].includes(r)?r:"",l=t?"OT thermostat":o.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),u=Wc(),c=r===l&&a===l&&(l!=="OT thermostat"||A("otEnabled"))&&(l!=="CIC"||A("cicPollingEnabled")&&!!u.configuredUrl),g=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],b=H(g[0]),h=H(g[1]),y=Number.isFinite(b)&&Number.isFinite(h),p=l==="OT thermostat"?A("otEnabled")&&!A("otLinkProblem")&&y:l==="CIC"?A("cicJsonFeedOk")&&!A("cicDataStale")&&y:A("roomTempHaValid")&&A("roomSetpointHaValid")&&y;let f=t||n?"Nog activeren":"Hardwareprofiel niet herkend";c&&(f=p?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");const S=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",w=t?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:t,isRemoteProfile:n,selectedSource:l,sourceLabel:S,explanation:w,configurationApplied:c,status:f,roomTempValue:b,roomSetpointValue:h,valuesAvailable:y,...u,canApply:(t||n)&&v("roomTempSource")&&v("roomSetpointSource")&&(l!=="OT thermostat"||v("otEnabled"))&&(l!=="CIC"||v("cicPollingEnabled")&&v("cicFeedUrl")&&!!u.normalizedDraftUrl)}}function kb(){const e=Yo(),t=o.busyAction==="quickstart-flow-source"||o.busyAction==="quickstart-flow-refresh",n=o.busyAction==="quickstart-flow-test-start"||o.busyAction==="quickstart-flow-test-abort",r=t||n||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?Bc(e,r):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("flow-source"))}</p>
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
            ${o.busyAction==="quickstart-flow-source"?"Flowconfiguratie opslaan...":e.configurationApplied?"Flowconfiguratie opnieuw opslaan":e.requiresCic?"CiC-flowconfiguratie opslaan":"Flowconfiguratie activeren"}
          </button>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="refresh-quickstart-flow-signal"
            ${r||!e.configurationApplied?"disabled":""}
          >
            ${o.busyAction==="quickstart-flow-refresh"?"Signaal controleren...":"Signaal opnieuw controleren"}
          </button>
          ${e.canRunFlowTest?`
            <button
              class="oq-helper-button ${e.flowTestActive?"":"oq-helper-button--ghost"}"
              type="button"
              data-oq-action="${e.flowTestActive?"abort-quickstart-flow-test":"start-quickstart-flow-test"}"
              ${t||n?"disabled":""}
            >
              ${n?e.flowTestActive?"Waterpomptest stoppen...":"Waterpomptest starten...":e.flowTestActive?"Waterpomptest stoppen":"Waterpomptest starten (30 sec)"}
            </button>
          `:""}
        </div>
        <p class="oq-settings-action-note">${e.flowTestActive?"Alleen de waterpomp draait op 400 iPWM. Het kan enkele seconden duren voordat de circulatie op gang komt en de flowmeter een waarde toont. De firmware stopt de test automatisch na maximaal 30 seconden.":"0 L/h kan normaal zijn als de circulatiepomp stilstaat. De waterpomptest gebruikt 400 iPWM, start geen compressor en stopt automatisch na 30 seconden."}</p>
        ${tt({nextDisabled:!e.configurationApplied||e.flowTestActive||n,nextDisabledLabel:n?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function Cb(){const e=ei(),t=o.busyAction==="quickstart-thermostat-source",n=e.status==="Geldig"?" is-active":"",r=e.isRemoteProfile?`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${ho("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
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
    `:"",a=e.selectedSource==="CIC"?Bc(e,t):"",i=e.selectedSource==="HA input"?`
      <article class="oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("thermostat-source"))}</p>
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
                  <div class="oq-settings-source-row${n}"><span>Status</span><strong>${s(e.status)}</strong></div>
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
        ${tt({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function Tb(){return!o.quickStartModalOpen||o.loadingEntities||o.complete===null||o.complete&&o.quickStartModalMode!=="generation"?"":o.quickStartModalMode==="generation"?`
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
            ${Ic("picker")}
          </section>
        </div>
      `:`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${s(Fb().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">\xD7</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${Lb()}
            ${Db()}
          </div>
        </section>
      </div>
    `}function jc(){return o.root?o.root.querySelector("[data-oq-quickstart-scroller]"):null}function Eb(){const e=jc();return e?{stepId:String(e.dataset.oqQuickstartStep||""),scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Ka(e)}:null}function $b(e){if(!e)return;const t=jc();if(!t||String(t.dataset.oqQuickstartStep||"")!==e.stepId)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const n=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,n)}function ws(e,t=!0){if(!e)return;const n=Number(o.quickStartScrollRestoreToken||0)+1;o.quickStartScrollRestoreToken=n;const r=()=>{o.quickStartScrollRestoreToken!==n||!o.quickStartModalOpen||$b(e)};if(t){window.requestAnimationFrame(r);return}r()}function Ss(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${Pc()}
        ${$c("oq-settings-grid oq-settings-grid--quickstart")}
        ${tt()}
      </section>
    `}function Ab(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${Fc("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${tt()}
      </section>
    `}function Hb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${Ac("oq-settings-grid oq-settings-grid--quickstart")}
        ${tt()}
      </section>
    `}function Mb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(ce()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(ce()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${ce()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${Nc()}</div>
            <div class="oq-settings-curve-shell">
              ${Dc()}
            </div>
            ${Ec()}
          `:`
            ${Hc("oq-settings-grid oq-settings-grid--quickstart")}
            ${Rc()}
          `}
        ${tt()}
      </section>
    `}function Pb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${Mc("oq-settings-grid oq-settings-grid--quickstart")}
        ${tt()}
      </section>
    `}function Nb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${Ja("oq-settings-grid oq-settings-grid--quickstart")}
        ${tt()}
      </section>
    `}function Rb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(_e("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${Ib()}
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${o.busyAction?"disabled":""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${o.busyAction?"disabled":""}>
            ${o.busyAction==="apply"?"Afronden...":"Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${o.busyAction?"disabled":""}>
            ${o.busyAction==="reset"?"Resetten...":"Setup-status resetten"}
          </button>
        </div>
      </section>
    `}function Lb(){return o.currentStep==="generation"?Ic():o.currentStep==="boiler"?v("boilerCvAssistEnabled")?Ab():Ss():o.currentStep==="flow-source"?kb():o.currentStep==="thermostat-source"?Cb():o.currentStep==="flow"?Hb():o.currentStep==="heating"?Mb():o.currentStep==="water"?Pb():o.currentStep==="silent"?Nb():o.currentStep==="confirm"?Rb():Ss()}function Lt(){return On.filter(e=>!e.optionalEntity||v(e.optionalEntity))}function _e(e){const t=Lt().findIndex(n=>n.id===e);return`Stap ${Math.max(0,t)+1}`}function Ob(e){const t=ir(),n=e===t,r=o.complete===!0||e<t;return{tone:n?"current":r?"done":"upcoming",label:n?"Actief":r?"Gereed":"Volgend",current:n}}function xb(e=!1){return Lt().map((t,n)=>{const r=Ob(n);return`
        <button
          class="oq-helper-field oq-helper-field--step${e?" oq-helper-field--compact":""} is-${r.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${s(t.id)}"
          aria-current="${r.current?"step":"false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>${String(n+1).padStart(2,"0")}. ${s(t.title)}</h3>
            <span class="oq-helper-field-step-state">${r.label}</span>
          </div>
          <p>${s(t.copy)}</p>
        </button>
      `}).join("")}function Fb(){const e=Lt();return e.find(t=>t.id===o.currentStep)||e[0]||On[0]}function ir(){return Math.max(0,Lt().findIndex(e=>e.id===o.currentStep))}function qs(e){const t=Lt(),n=Math.min(t.length-1,Math.max(0,ir()+e));o.currentStep=t[n]?.id||On[0].id}function tt(e={}){const t=ir(),n=Lt(),r=t>0?n[t-1]:null,a=t<n.length-1?n[t+1]:null;return`
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${t+1} van ${n.length}</strong>
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
    `}function Db(){const e=ir(),t=Lt();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${t.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${xb(!0)}
        </div>
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
      </section>
    `}function Ib(){const e=Ne(B("hpGeneration")),t=ce()?"Stooklijn":"Power House",n=S=>Ne(B(S)),r=[],a=ce()?[["Regelprofiel",n("curveControlProfile")],["Aanvoer bij -20\xB0C",_("curveM20")],["Aanvoer bij -10\xB0C",_("curveM10")],["Aanvoer bij 0\xB0C",_("curve0")],["Aanvoer bij 5\xB0C",_("curve5")],["Aanvoer bij 10\xB0C",_("curve10")],["Aanvoer bij 15\xB0C",_("curve15")],["Fallback-aanvoer",_("curveFallbackSupply")]]:[["Profiel",n("phResponseProfile")],["Rated maximum house power",_("housePower")],["Maximum heating outdoor temperature",_("houseOutdoorMax")],["Temperatuurreactie",_("phKp")],["Comfort onder setpoint",_("phComfortBelow")],["Comfort boven setpoint",_("phComfortAbove")]],i=String(E("flowControlMode")||""),l=Yo(),u=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],d=ei(),c=[["Status",d.status],["Kamertemperatuur",Number.isFinite(d.roomTempValue)?`${d.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(d.roomSetpointValue)?`${d.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],g=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",_("manualIpwm")]:["Gewenste flow",_("flowSetpoint")]],b=v("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",A("boilerCvAssistEnabled")?"Ja":"Nee"],...A("boilerCvAssistEnabled")?[["Boiler rated heat power",_("boilerRatedHeatPower")]]:[]]:[],h=[["Maximale watertemperatuur",_("maxWater")]],y=[["Start stille uren",xr(E("silentStartTime"))||"\u2014"],["Einde stille uren",xr(E("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",_("silentMax")],["Maximaal niveau overdag",_("dayMax")]],p=S=>`
      <div class="oq-helper-review-list">
        ${S.filter(w=>w&&w[1]).map(([w,q])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(w)}</span>
                <strong class="oq-helper-review-value">${s(q)}</strong>
              </div>
            `).join("")}
      </div>
    `,f=(S,w,q="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(S)}</h3>
        ${q?`<p class="oq-helper-review-summary"><strong>${s(q)}</strong></p>`:""}
        ${p(w)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${f("Quatt Hybrid-versie",r,e)}
        ${f("Flowmeting",u,l.sourceLabel)}
        ${f("Verwarmingsstrategie",a,t)}
        ${f("Watertemperatuur",h)}
        ${f("Thermostaatgegevens",c,d.sourceLabel)}
        ${f("Flowregeling",g)}
        ${b.length?f("CV-ketel / boiler",b):""}
        ${f("Stille uren",y)}
      </div>
    `}function Wb({label:e,value:t,tone:n,note:r,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(n)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(t)}</strong>
        <span>${s(r)}</span>
      </article>
    `}function sr(e,t=!1){return e.map(n=>Wb({...n,value:Object.prototype.hasOwnProperty.call(n,"key")?We(n.key):n.value,status:t})).join("")}function ti(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function _c(){const e=ar();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(be(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(t=>t.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function Kc({className:e,title:t,copy:n,body:r,signature:a=""}){const i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${t?`<div class="oq-overview-system-copy"><h3>${s(t)}</h3><p>${s(n)}</p></div>`:""}
        ${r}
      </section>
    `}function Uc(e,t){return t?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function Bb(e,t){const n=t?"active":"neutral",r=Uc(e,t);return`<span class="oq-overview-chip oq-overview-chip--${s(n)}" data-oq-bind="panel-status">${s(r)}</span>`}function Vb(e){return`
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
    `}function zc(e,t,n,r){return`${n?Vb(r):""}${Bb(e,t)}`}function jb(e,t,n,r,a){if(!e)return;const i=be({mode:t,running:n,warningActive:r,failureText:a});e.dataset.renderSignature!==i&&(dt(e,zc(t,n,r,a)),e.dataset.renderSignature=i)}function _r(e,t,n=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(n||B(t))}</strong>
      </div>
    `}function _b(e,t,n="blue",r=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(n)}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </article>
    `}function Kb(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}function D(e,t,n=""){const r=Number(e);return Number.isNaN(r)?"\u2014":`${r.toFixed(t)}${n?` ${n}`:""}`}function Ub(e){if(!Number.isFinite(e)||e<0)return"\u2014";const t=Math.floor(e),n=Math.floor(t/1440),r=Math.floor(t%1440/60),a=t%60;return n>0?`${n}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function zb(e){const n=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!n)return Number.NaN;const r=Number(n[1]),a=Number(n[2]);return Number.isNaN(r)||Number.isNaN(a)||r<0||r>23||a<0||a>59?Number.NaN:r*60+a}function Gb(e){const t=zb(B("timeNowHhmm",""));if(!Number.isFinite(t))return"";const n=Math.round(e),r=((t-n)%1440+1440)%1440,a=Math.floor(r/60),i=r%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Qb(e,t){const n=Math.max(0,(Number(t)-Number(e))/6e4),r=Ub(n),a=v("timeValid")&&A("timeValid")?Gb(n):"";return a?{value:a,note:`${r} geleden`}:{value:`${r} geleden`,note:"Geen tijdsync"}}function Yb(e){const t=Number(e);return Number.isNaN(t)?"\u2014":`${t>0?"+":t<0?"-":""}${Math.abs(t).toFixed(0)} W`}function Gc(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>v(e))||""}function Jb(){return["hp1WaterIn","hp2WaterIn"].find(e=>v(e))||""}function Qc(e=B("controlModeLabel","")){const t=String(e||"").toLowerCase();return t.includes("cm5")||t.includes("cooling")||t.includes("koeling")}function wt(){return Qc()}function Yc(e,t){const n=String(e||"").trim().toLowerCase();return n==="waiting for room request"||n==="wacht op kamervraag"?!0:t?!1:n==="flow too low"||n==="flow te laag"||n==="flow unavailable"}function Jc(){return wt()?"Koeling":ce()?"Stooklijn":"Power House"}function Zb(){const e=["phouseReq","strategyRequestedPower"];for(const t of e){const n=H(t);if(!Number.isNaN(n))return n}return Number.NaN}function Zc(){const e=Zb(),t=H("phouseHouse"),n=H("totalHeat"),r=H("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:e-t;let i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(r)&&e>r+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(n)&&n<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(n)&&n>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(n)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:D(e,0,"W"),houseText:D(t,0,"W"),correctionText:Yb(a),capacityText:We("hpCapacity"),statusTitle:i,statusCopy:l}}function Xc(){const e=H("curveSupplyTarget"),t=H("supplyTemp"),n=Gc(),r=n?H(n):Number.NaN,a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:t-e,i=!!n&&Number.isNaN(r);let l="Stuurt op buitentemperatuur",u="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",u="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",u="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",u="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",u="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:We("curveSupplyTarget"),supplyText:We("supplyTemp"),deltaText:Kb(a),capacityText:We("hpCapacity"),statusTitle:l,statusCopy:u}}function eu(){const e=H("supplyTemp"),t=B("coolingGuardMode",""),n=B("coolingFallbackNightMinOutdoorTemp","\u2014"),r=H("coolingSupplyError"),a=H("coolingDemandRaw"),i=A("coolingPermitted"),l=A("coolingRequestActive"),u=B("coolingBlockReason","Onbekend"),d=Tc(u),c=Yc(u,l);let g="Wacht op koelvraag",b="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return c?(g="Wacht op koelvraag",b="Koeling staat aan en wacht nog op actieve koelvraag vanuit de kamerregeling."):i?l?!Number.isNaN(a)&&a<=0?(g="Houdt doel vast",b="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(r)&&r>1?(g="Trekt aanvoer omlaag",b="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(r)&&r>.2?(g="Benadert koeldoel",b="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(r)||(g="Koelt rustig door",b="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(g="Koeling gereed",b="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(g="Koeling geblokkeerd",b=`Blokkade: ${d}.`),{targetText:We("coolingSupplyTarget"),supplyText:We("supplyTemp"),safeFloorText:We("coolingEffectiveMinSupplyTemp"),guardMode:t,fallbackNightMin:n,demandText:We("coolingDemandRaw"),statusTitle:g,statusCopy:b,permitted:i,requestActive:l,blockReason:d,waitingForRoomRequest:c}}function Kr(){if(wt()){const t=eu(),n=t.guardMode.toLowerCase(),r=n.includes("user responsibility"),a=n.includes("fallback");return{title:"Koelregeling",copy:r?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:t.targetText,focusCopy:t.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:r?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:t.safeFloorText,tone:"blue",note:r?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${t.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:t.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(ce()){const t=Xc();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:t.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:t.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:t.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}const e=Zc();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function tu(e){return Kc({className:"oq-overview-system",title:e.title,copy:e.copy,signature:be(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(t=>_b(t.label,t.value,t.tone,t.note)).join("")}
        </div>
      `})}function Xb(){if(!A("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(wt()){const r=eu(),a=r.waitingForRoomRequest?"neutral":r.permitted?r.statusTitle==="Koelt rustig door"||r.statusTitle==="Houdt temperatuur vast"?"green":r.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:r.statusTitle,tone:a}}if(ay())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};const t=(ce()?Xc():Zc()).statusTitle;return{label:"Regeling nu",value:t,tone:t==="In balans"||t==="Dicht bij doel"?"green":t==="Nog aan het opbouwen"||t==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function ev(){return A("openquattEnabled")?wt()?A("coolingPermitted")?A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:B("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:A("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function ou(e,t){const n=Xb(),r=ev();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:t,tone:"orange",note:"actieve modus"},{label:"Regeling",value:n.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:r.value,tone:"orange",note:"actieve randvoorwaarde"}]}function nu(e,t){const n=ou(e,t);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(be(n))}">
        ${ti("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${sr(n,!0)}
        </div>
      </section>
    `}function ru(){const e=wt();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function tv(){const e=A("openquattEnabled"),t=E("openquattResumeAt"),n=Oa(t),r=(o.loadingEntities||o.entitySyncInFlight)&&!v("openquattResumeAt"),a=A("manualCoolingEnable"),i=String(E("silentModeOverride")||"Schedule"),l=!A("coolingPermitted"),u=A("coolingRequestActive"),d=Qc(),c=B("coolingBlockReason",""),g=Yc(c,u);let b="Uit",h="Koeling staat uit.";a&&d?(b="Actief",h="Koeling draait nu."):a&&g?(b="Aan",h="Koeling staat aan en wacht op koelvraag."):a&&l?(b="Geblokkeerd",h=Tc(c||"Koeling wacht nog op veilige condities.")):a&&u?(b="Start bijna",h="Er is koelvraag. Koeling start zodra dat kan."):a&&(b="Aan",h="Koeling staat aan en wacht op koelvraag.");let y="Uit",p="Stille modus staat uit.",f="neutral";return i==="On"?(y="Aan",p="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",f="orange"):i==="Schedule"&&(y="Schema",A("silentActive")?(p="Stille modus staat nu aan via het tijdvenster.",f="violet"):p="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":n?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[r?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:n?"Hervat automatisch":"Hervatten",value:n?xa(t,!0):"Handmatig",tone:n?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:b,copy:h,buttonLabel:a?"Zet uit":"Zet aan",nextState:a?"off":"on",tone:a?d?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:y,copy:p,tone:f,kind:"select",selectedOption:i,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(S=>v(S.key))}function ov(e=[]){return e.length?`
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
    `:""}function jt({className:e,action:t,label:n,busy:r=!1,loading:a=!1,attrs:i=""}){return`
      <button
        class="${e}${r?" is-busy":""}"
        type="button"
        ${t?`data-oq-action="${s(t)}"`:""}
        ${i}
        ${o.busyAction||a?"disabled":""}
      >${a?`
        <span class="oq-overview-controlpanel-loading">
          <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
          <span>${s(n)}</span>
        </span>
      `:s(r?"Bezig...":n)}</button>
    `}function nv(e){if(e.kind==="openquatt-control"){const t=o.busyAction==="openquatt-regulation",n=(o.loadingEntities||o.entitySyncInFlight)&&!v("openquattResumeAt");return A("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${jt({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:t})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${jt({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:t})}
            ${jt(n?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:Oa()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){const t=o.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(n=>jt({className:`oq-overview-controlpanel-segment${e.selectedOption===n.value?" is-selected":""}`,action:"select-overview-control-option",label:n.label,busy:t,attrs:`data-control-key="${s(e.key)}" data-control-option="${s(n.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${jt({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:o.busyAction===`switch-${e.key}`,attrs:`data-control-key="${s(e.key)}" data-control-state="${s(e.nextState)}"`})}
      </div>
    `}function au(){const e=tv();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${ti("Bediening")}
        ${e.map(t=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(t.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(t.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(t.tone)}">${s(t.status)}</strong>
            </div>
            <p>${s(t.copy)}</p>
            ${ov(t.meta)}
            ${nv(t)}
          </article>
        `).join("")}
      </section>
    `:""}function rv(e){const t=B("controlModeLabel");return`
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
              ${ti("Kerncijfers")}
              <div class="oq-overview-top">
                ${sr(ru())}
              </div>
            </section>
            ${nu(e,t)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(Jl())}">
            ${au()}
          </aside>
        </div>
      </section>
    `}function oi(){const e=Gc(),t=Jb();return wt()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...t?[{label:"Retourtemperatuur",key:t}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function iu(e=oi()){return be({...e,values:e.rows.map(t=>t.value||B(t.key))})}function su(){const e=oi();return Kc({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:iu(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(t=>_r(t.label,t.key,t.value||"")).join("")}
        </div>
      `})}const ks=360;function ot(){const e=la(o.trendWindowHours||Zt);return e!==o.trendWindowHours&&ca(e),e}function lu(e=ot()){return Math.max(1,Number(e)||24)*60*60*1e3}function av(e=ot()){const t=Number(e)||24;return t>=72&&t%24===0?`${t/24}d`:`${t}u`}function ni(e=ot()){const t=Number(e)||24;if(t>=72&&t%24===0){const n=t/24;return`${n} ${n===1?"dag":"dagen"}`}return`${t} uur`}function $r(e){if(!Number.isFinite(e))return"\u2014";const t=new Date(e);if(Number.isNaN(t.getTime()))return"\u2014";const n={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(t)}catch{return t.toLocaleString("nl-NL",n)}}function iv(e){const t=String(e||"").trim().split("|");if(t.length<5)return null;const n=Number(t[0]);if(!Number.isFinite(n))return null;const r=a=>{const i=Number(a);return Number.isFinite(i)?i:null};return{t:n,outside:r(t[1]),supply:r(t[2]),room:t.length>=8?r(t[3]):null,roomSetpoint:t.length>=8?r(t[4]):null,flow:t.length>=8?r(t[5]):null,input:t.length>=8?r(t[6]):r(t[3]),output:t.length>=8?r(t[7]):r(t[4])}}function Ur(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}function Ar(e=ot()){return typeof window>"u"||!window.__OQ_DEV_TREND_MOCKS__||typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples!="function"?[]:window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(e)}function cu(){const e=lu(),t=String(o.trendHistoryRaw||"").trim();if(!t)return Ur()?Ar():[];const n=t.split(/\r?\n/).map(iv).filter(Boolean),r=n.length?n[n.length-1].t:Number.NaN,a=Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:Number.isFinite(r)?r:Number.NaN;if(!Number.isFinite(a))return n.length?n.slice(-ks):Ar();const i=Math.max(0,a-e),l=n.filter(u=>u.t>=i).slice(-ks);return l.length?l:Ur()?Ar(windowHours):[]}function ri(){const e=ot(),t=ni(e),n=cu(),r=Ur()&&n.length===0,a=wt();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${t}.`,tone:"orange",samples:n,mock:r,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${t}.`,tone:"green",samples:n,mock:r,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${t}.`,tone:"slate",samples:n,mock:r,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{const l=Number(i?.input),u=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(u)||l<=0?Number.NaN:u/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${t}.`,tone:"blue",samples:n,mock:r,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${t}.`,tone:"sky",samples:n,mock:r,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function sv(e){const t=e.samples[e.samples.length-1]||null;return be({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:t?.t||0,trendSignature:o.trendHistorySignature||"",latestValues:t?[t.outside,t.supply,t.room,t.roomSetpoint,t.flow,t.input,t.output]:[]})}function Lo(e,t){if(!e||!t)return Number.NaN;const n=typeof e.derive=="function"?e.derive(t):t?.[e.sampleKey],r=Number(n);return Number.isFinite(r)?r:Number.NaN}function lv(e,t){const n=[];return e.forEach(r=>{t.forEach(a=>{const i=Lo(a,r);Number.isFinite(i)&&n.push(i)})}),n.length?{min:Math.min(...n),max:Math.max(...n)}:{min:0,max:1}}function cv(e){if(!Number.isFinite(e)||e<=0)return 1;const t=Math.floor(Math.log10(e)),n=e/10**t;let r;return n<=1?r=1:n<=2?r=2:n<=5?r=5:r=10,r*10**t}function uv(e,t){const n=Number.isFinite(e?.min)?e.min:0,r=Number.isFinite(e?.max)?e.max:1,a=Math.max(r-n,1),i=Array.isArray(t)?t.map(h=>Number(h?.axisMin)).find(h=>Number.isFinite(h)):Number.NaN,l=Array.isArray(t)?t.map(h=>Number(h?.axisMax)).find(h=>Number.isFinite(h)):Number.NaN,u=Array.isArray(t)?t.map(h=>Number(h?.axisTickStep)).find(h=>Number.isFinite(h)&&h>0):Number.NaN,d=Math.max(1,Number.isFinite(u)?u:cv(a/4)),c=[];if(Number.isFinite(i)||Number.isFinite(l)){const h=Number.isFinite(i)?i:0,y=Number.isFinite(l)?l:Math.ceil(r/d)*d,p=Math.floor(h/d)*d,f=Math.ceil(y/d)*d;for(let S=p;S<=f+d*.5;S+=d)c.push(S)}else{const h=a/d,y=h<=1.8?3:h<=4.25?5:7,p=Math.floor(y/2),f=(n+r)/2,S=Math.round(f/d)*d;for(let w=-p;w<=p;w+=1)c.push(S+w*d)}const g=c[0],b=c[c.length-1];return{ticks:c,axisMin:g,axisMax:b,axisDecimals:0}}function uu(e,t,n={}){const r=Number(n.windowHours),a=Number.isFinite(r)?r:ot(),i=lu(a),l=640,u=220,d=46,c=18,g=18,b=34,h=l-d-c,y=u-g-b,p=e[e.length-1],f=!!n.mockData,S=f?i:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:p?p.t:0,w=f?0:S-i,q=Math.max(S-w,1),T=q,k=lv(e,t),M=k.min===k.max?{min:k.min-1,max:k.max+1}:{min:k.min-Math.max((k.max-k.min)*.12,1),max:k.max+Math.max((k.max-k.min)*.12,1)},F=uv(k,t),x=R=>d+(R-w)/q*h,U=R=>{if(!Number.isFinite(R))return Number.NaN;const V=(R-M.min)/Math.max(M.max-M.min,1);return g+(1-Math.min(1,Math.max(0,V)))*y},C=[0,.5,1].map(R=>d+h*R),$=F.ticks.map(R=>U(R)),N=F.ticks.map((R,V)=>({x:d-10,y:$[V],text:D(R,F.axisDecimals)})),W=e.map(R=>{const V=x(R.t),P=t.map(O=>{const j=Lo(O,R);return Number.isFinite(j)?{seriesId:O.id||O.sampleKey||O.label,tone:O.tone,label:O.label,decimals:O.decimals,unit:O.unit,value:j,x:V,y:U(j)}:null});return{sample:R,x:V,values:P}}),K=t.flatMap(R=>{const V=[];let P=[];return e.forEach(O=>{const j=Lo(R,O);if(!Number.isFinite(j)){P.length&&(V.push(P),P=[]);return}P.push({x:x(O.t),y:U(j)})}),P.length&&V.push(P),V.map(O=>O.length<2?{tone:R.tone,points:O,path:""}:{tone:R.tone,points:O,path:O.map((j,Y)=>`${Y===0?"M":"L"} ${j.x.toFixed(1)} ${j.y.toFixed(1)}`).join(" ")})});return{width:l,height:u,left:d,right:c,top:g,bottom:b,plotWidth:h,plotHeight:y,latest:p,uptimeMs:T,endTime:S,startTime:w,span:q,windowHours:a,range:k,displayRange:M,gridXs:C,gridYs:$,yAxisLabels:N,points:W,tracks:K,series:t}}function ai(){return be({windowHours:ot(),trendSignature:o.trendHistorySignature||"",trendNowMs:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:0,coolingActive:wt()})}function dv(e){return ri().find(t=>t.id===e)||null}function pv(e,t){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let n=0,r=Math.abs(e.points[0].x-t);return e.points.forEach((a,i)=>{const l=Math.abs(a.x-t);l<r&&(n=i,r=l)}),n}function gv(e,t){const n=du(e,t);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(D(n,e.decimals,e.unit))}</strong>
      </div>
    `}function du(e,t){if(e?.currentKey&&v(e.currentKey)){const n=H(e.currentKey);if(Number.isFinite(n))return n}return Lo(e,t)}function pu(e){e&&ri().forEach(t=>{const n=e.querySelector(`[data-oq-trend-card="${t.id}"]`),r=t.samples[t.samples.length-1]||null;n&&t.series.forEach(a=>{const l=n.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),u=D(du(a,r),a.decimals,a.unit);l&&l.textContent!==u&&(l.textContent=u)})})}function mv(e,t,n=!1,r=ot()){const a=uu(e,t,{mockData:n,windowHours:r}),i=ni(r),l=$r(a.startTime),u=$r(a.startTime+a.span/2),d=$r(a.endTime),c=a.tracks.flatMap(g=>{if(g.points.length<2){const b=g.points[0];return b?`
          <circle
            cx="${b.x.toFixed(1)}"
            cy="${b.y.toFixed(1)}"
            r="3.8"
            class="oq-overview-trend-dot oq-overview-trend-dot--${s(g.tone)}"
          ></circle>
        `:[]}return`
        <path d="${g.path}" class="oq-overview-trend-line oq-overview-trend-line--${s(g.tone)}"></path>
        <circle
          cx="${g.points[g.points.length-1].x.toFixed(1)}"
          cy="${g.points[g.points.length-1].y.toFixed(1)}"
          r="3.8"
          class="oq-overview-trend-dot oq-overview-trend-dot--${s(g.tone)}"
        ></circle>
      `}).join("");return`
      <svg class="oq-overview-trend-chart" viewBox="0 0 ${a.width} ${a.height}" role="img" aria-label="Trendgrafiek van de laatste ${i}">
        <rect x="0" y="0" width="${a.width}" height="${a.height}" rx="20" class="oq-overview-trend-chart-bg"></rect>
        ${a.gridXs.map(g=>`<line x1="${g.toFixed(1)}" y1="${a.top}" x2="${g.toFixed(1)}" y2="${a.height-a.bottom}" class="oq-overview-trend-grid oq-overview-trend-grid--vertical"></line>`).join("")}
        ${a.gridYs.map(g=>`<line x1="${a.left}" y1="${g.toFixed(1)}" x2="${a.width-a.right}" y2="${g.toFixed(1)}" class="oq-overview-trend-grid oq-overview-trend-grid--horizontal"></line>`).join("")}
        ${c}
        ${a.yAxisLabels.map(g=>`
          <text
            x="${g.x}"
            y="${g.y.toFixed(1)}"
            class="oq-overview-trend-axis-label oq-overview-trend-axis-label--y"
            text-anchor="end"
            dominant-baseline="middle"
          >${s(g.text)}</text>
        `).join("")}
        <g class="oq-overview-trend-hover-layer" data-oq-trend-hover-layer hidden>
          <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.height-a.bottom}" class="oq-overview-trend-hover-line"></line>
          ${t.map(g=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${s(g.tone)}"
              data-oq-trend-hover-dot="${s(g.id||g.sampleKey||g.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${s(l)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${s(u)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(d)}</text>
      </svg>
    `}function hv(e){const t=e.samples[e.samples.length-1]||null,n=ni(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(sv(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(n)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(r=>gv(r,t)).join("")}
            </div>
          </div>
        </div>
        ${mv(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function ii(){const e=ri();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(ai())}">
        <div class="oq-overview-trends-grid">
          ${e.map(hv).join("")}
        </div>
      </section>
    `}function fv(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function bv(){const e=ot(),t=Zs();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${Sn.map(n=>`
          ${(()=>{const a=n>168&&!t,i=n/24,l=a?`Beschikbaar zodra er minimaal ${i} dagen flashhistorie is opgeslagen.`:"";return`
          <button
            class="oq-overview-controlpanel-segment${e===n?" is-selected":""}${a?" is-disabled":""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${n}"
            aria-pressed="${e===n?"true":"false"}"
            aria-disabled="${a?"true":"false"}"
            ${a?"disabled":""}
            ${l?`title="${s(l)}"`:""}
          >${s(av(n))}</button>
        `})()}
        `).join("")}
      </div>
    `}function vv(){const e="overview-trends-history",t=o.settingsInfoOpen===e;return`
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
    `}function yv(){const e=uo(),n=cu().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${vv()}
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
                  ${bv()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&n?ii():fv()}
        </div>
      </section>
    `}function wv(){if(!o.root||o.appView!=="diagnosis")return!1;const e=o.root.querySelector(".oq-overview-board");if(!e)return!1;const t=e.querySelector(".oq-overview-trends");return t?(lt(t,ai(),ii()),pu(e),li(e),!0):!1}function si(e){if(!e)return null;const t=e.__oqTrendHoverNodes;if(t&&t.chart&&t.hoverLayer&&t.hoverPanel)return t;const n=e.querySelector("[data-oq-trend-hover-layer]"),r={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:n,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:n?n.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return n&&n.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{r.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=r,r}function Cs(e,t,n,r=si(e)){if(!e||!t||!Array.isArray(t.points)||t.points.length===0)return;const a=Math.max(0,Math.min(t.points.length-1,n)),i=t.points[a];if(!i||!r||!r.chart||!r.hoverLayer||!r.hoverPanel||!r.hoverTime||!r.hoverNote||!r.hoverValues)return;const l=String(a);if(!r.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;const u=Qb(i.sample.t,t.endTime);r.hoverPanel.hidden=!1,r.hoverLayer.removeAttribute("hidden"),r.hoverTime.textContent=u.value,r.hoverNote.textContent=u.note,r.hoverLine&&(r.hoverLine.setAttribute("x1",i.x.toFixed(1)),r.hoverLine.setAttribute("x2",i.x.toFixed(1)));const d=[];t.series.forEach(c=>{const g=Lo(c,i.sample),b=c.id||c.sampleKey||c.label,h=r.hoverDots[b];if(!Number.isFinite(g)){h&&h.setAttribute("display","none");return}const y=i.values.find(p=>p.seriesId===b);h&&y&&(h.removeAttribute("display"),h.setAttribute("cx",y.x.toFixed(1)),h.setAttribute("cy",y.y.toFixed(1))),d.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(c.tone)}">
          <span>${s(c.label)}</span>
          <strong>${s(D(g,c.decimals,c.unit))}</strong>
        </div>
      `)}),r.hoverValues.innerHTML=d.join(""),e.dataset.oqTrendHoverIndex=l}function Sv(e){if(!e)return;const t=si(e);t?.hoverPanel&&(t.hoverPanel.hidden=!0),t?.hoverLayer&&t.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function li(e=o.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(n=>{const r=n.dataset.renderSignature||"";if(n.__oqTrendBoundSignature===r)return;typeof n.__oqTrendCleanup=="function"&&n.__oqTrendCleanup(),n.__oqTrendHoverNodes=null,n.__oqTrendBoundSignature=r;const a=n.querySelector(".oq-overview-trend-chart");if(!a)return;const i=dv(n.dataset.oqTrendCard);if(!i)return;const l=uu(i.samples,i.series,{mockData:i.mock});n.__oqTrendModel=l;const u=si(n);let d=0,c=null;const g=()=>{const y=c;c=null,d=0;const p=a.getBoundingClientRect();if(!p.width||!p.height)return;const f=Number(y?.clientX);if(!Number.isFinite(f)){Cs(n,l,l.points.length-1,u);return}const w=Math.min(p.width,Math.max(0,f-p.left))/p.width*l.width,q=pv(l,w);Cs(n,l,q,u)},b=y=>{c=y,d||(d=window.requestAnimationFrame(g))},h=()=>{d&&(window.cancelAnimationFrame(d),d=0),c=null,Sv(n)};a.addEventListener("pointermove",b),a.addEventListener("pointerenter",b),a.addEventListener("pointerleave",h),a.addEventListener("focus",b),a.addEventListener("blur",h),a.addEventListener("touchstart",b,{passive:!0}),n.__oqTrendCleanup=()=>{d&&(window.cancelAnimationFrame(d),d=0),c=null,a.removeEventListener("pointermove",b),a.removeEventListener("pointerenter",b),a.removeEventListener("pointerleave",h),a.removeEventListener("focus",b),a.removeEventListener("blur",h),a.removeEventListener("touchstart",b)}})}function qv([e,t]){const n=nc(t);if(!v(t)&&Number.isNaN(n))return"";const r=oc(t)?We(t):B(t);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(r)}</strong>
      </div>
    `}function kv(e){const t=e.rows.map(qv).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${t}
        </div>
      </section>
    `:""}function Cv(e){const t=e.groups.map(kv).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${t}
        </div>
      </section>
    `:""}function Tv(e){const t=e.categories.map(Cv).filter(Boolean).join("");return t?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${t}
        </div>
      </article>
    `:""}function ci(){const e=hd.map(Tv).filter(Boolean),t=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:t}}function gu(e=ci()){return be(e)}function mu(e=ci()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(gu(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}const lr=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],hu=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],Ev=new Set(["day","week","month","year"]),$v=["Zo","Ma","Di","Wo","Do","Vr","Za"];function ve(e){const t=String(e||"").trim();return hu.some(n=>n.id===t)?t:"day"}function Ts(e){const t=ve(e);o.energyHistoryView!==t&&(o.energyHistoryView=t,o.energyHistoryLastFetchAt=0,m(),fu())}function fu(){typeof Mt=="function"&&Mt({force:!0}).then(e=>{e&&m()})}function bo(e){return Ev.has(ve(e))}function cr(){const e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Pn(){const e=String(o.energyHistoryRaw||""),t={storedDayCount:0,oldestDateKey:null,newestDateKey:null,hourStoredDayCount:0,hourOldestDateKey:null,hourNewestDateKey:null,hourRequestedRetentionDays:0,hourSlotCount:0,hourPartitionAvailable:!1,hourRecordCount:0,hourWriteCount:0,hourStorageKb:0,hourLastWriteTimestampS:0};return e.split(/\r?\n/).forEach(n=>{if(!n.startsWith("@bounds|")&&!n.startsWith("@hour_retention|"))return;const r=n.split("|");n.startsWith("@bounds|")?(t.storedDayCount=Number(r[1])||0,t.oldestDateKey=Number(r[2])||null,t.newestDateKey=Number(r[3])||null,t.hourStoredDayCount=Number(r[4])||0,t.hourOldestDateKey=Number(r[5])||null,t.hourNewestDateKey=Number(r[6])||null):n.startsWith("@hour_retention|")&&(t.hourRequestedRetentionDays=Number(r[1])||0,t.hourSlotCount=Number(r[2])||0,t.hourPartitionAvailable=Number(r[3])===1,t.hourRecordCount=Number(r[4])||0,t.hourWriteCount=Number(r[5])||0,t.hourStorageKb=Number(r[6])||0,t.hourLastWriteTimestampS=Number(r[7])||0)}),t}function ui(){const e=String(o.energyHistoryRaw||"");let t=null;return e.split(/\r?\n/).forEach(n=>{const r=Cu(n);r&&(t=r.dateKey)}),t}function Av(e=[],t=!0){const n=ui(),r=Pn(),a=(Array.isArray(e)?e:[]).map(i=>Number(i?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(r.newestDateKey))&&a.push(Number(r.newestDateKey)),Number.isFinite(Number(n))&&a.push(Number(n)),t&&ur().forEach(i=>{const l=Number(i?.dateKey);Number.isFinite(l)&&a.push(l)}),a.length?Math.max(...a):cr()}function Ee(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function bu(e,t,n){return new Date(e,t-1,n,12,0,0)}function vu(e,t){return new Date(e,t,0).getDate()}function Es(e){return String(e).padStart(2,"0")}function Hr(e){const t=Q(e);return t?`${t.year}-${Es(t.month)}-${Es(t.day)}`:""}function yu(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!t)return null;const n=Number(t[1]),r=Number(t[2]),a=Number(t[3]),i=bu(n,r,a);return i.getFullYear()!==n||i.getMonth()+1!==r||i.getDate()!==a?null:Q(Ee(i))}function wu(e,t){return Number(e)*100+Number(t)}function zr(e){return wu(e.getFullYear(),e.getMonth()+1)}function oo(e){const t=Number(e);if(!Number.isFinite(t)||t<=0)return null;const n=Math.floor(t/100),r=t%100;return n<2020||r<1||r>12?null:{key:t,year:n,month:r,date:new Date(n,r-1,1,12,0,0)}}function Hv(e){const t=String(e||"").trim(),n=/^(\d{4})-(\d{2})$/.exec(t);return oo(n?wu(Number(n[1]),Number(n[2])):t)}function Su(e,t){const n=oo(e);if(!n)return"";const r=new Date(n.year,n.month-1+Number(t||0),1,12,0,0);return String(zr(r))}function Jo(e){const t=new Date(e.getTime()),n=t.getDay(),r=n===0?-6:1-n;return t.setDate(t.getDate()+r),t.setHours(12,0,0,0),t}function no(e,t){const n=new Date(e.getTime());return n.setDate(n.getDate()+t),n.setHours(12,0,0,0),n}function $s(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function qu(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),n=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-n+3);const r=t.getUTCFullYear(),a=new Date(Date.UTC(r,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((t-a)/(10080*60*1e3)),year:r}}function As(e){return Ee(Jo(e))}function Mv(e){const n=yu(e)||Q(e);if(!n)return null;const r=Jo(n.date);return Q(Ee(r))}function ku(e){const t=Q(e);if(!t)return"Week";const n=Jo(t.date),r=no(n,6);return`Week ${qu(n).week} (${$s(n)} - ${$s(r)})`}function Q(e){const t=Number(e);if(!Number.isFinite(t)||t<=0)return null;const n=Math.floor(t/1e4),r=Math.floor(t/100)%100,a=t%100;return n<2020||r<1||r>12||a<1||a>31?null:{key:t,year:n,month:r,day:a,date:new Date(n,r-1,a,12,0,0)}}function Qe(e,t="day"){const n=Q(e);return n?t==="weekday"?$v[n.date.getDay()]||"":t==="month"?n.date.toLocaleDateString("nl-NL",{month:"short"}):t==="year"?String(n.year):n.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function qt(e){const t=H(e);return!Number.isFinite(t)||t<0?null:Math.round(t*1e3)}function Pv(e){const t=Number(e);return Number.isFinite(t)&&t>=0?t:null}function di(e,t=0){const n={};return lr.forEach((r,a)=>{n[r]=Pv(e[t+a])}),n}function Nv(e){const t=String(e||"").trim();if(!t||t.startsWith("@"))return null;const n=t.split("|");if(n.length<10)return null;const r=Number(n[0]),a=Number(n[1]),i=Number(n[2]),l=Q(a);return!Number.isFinite(r)||!l?null:{sequence:r,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...di(n,3)}}function Cu(e){const t=String(e||"").trim();if(!t.startsWith("@current|"))return null;const n=t.split("|");if(n.length<9)return null;const r=Number(n[1]),a=Q(r);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:r,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...di(n,2)}:null}function Rv(e){const t=String(e||"").trim();if(!t.startsWith("@hour|"))return null;const n=t.split("|");if(n.length<11)return null;const r=Number(n[1]),a=Number(n[2]),i=Number(n[3]),l=Q(a);return!Number.isFinite(r)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:r,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...di(n,4)}}function Lv(){const e=ui()||cr(),t=Q(e);if(!t)return null;const n={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:t.year,month:t.month,day:t.day,partial:!0,source:"sensors",electricalInputWh:qt("electricalEnergyDaily"),heatingInputWh:qt("heatingElectricalEnergyDaily"),coolingInputWh:qt("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:qt("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:qt("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:qt("boilerThermalEnergyDaily"),systemHeatOutputWh:qt("systemThermalEnergyDaily")};return lr.some(r=>Number.isFinite(n[r]))?n:null}function Zo(e,t){const n=Number(e?.[t]);return Number.isFinite(n)&&n>=0?n:0}function Xo(){const e=new Map;String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(i=>{const l=Nv(i)||Cu(i);if(!l)return;const u=e.get(l.dateKey);(!u||l.sequence>=u.sequence)&&e.set(l.dateKey,l)});const n=Lv();n&&e.set(n.dateKey,n);const r=new Set(e.keys()),a=new Map;return ur().forEach(i=>{if(r.has(i.dateKey))return;let l=a.get(i.dateKey);if(!l){const u=Q(i.dateKey);if(!u)return;l=Ct({dateKey:u.key,year:u.year,month:u.month,day:u.day,label:Qe(u.key),sortKey:u.key,source:"hour-summary"}),l.tooltipLabel=`${Qe(i.dateKey)} \xB7 uurdata sinds herstart`,a.set(i.dateKey,l)}Tt(l,i)}),a.forEach((i,l)=>{e.set(l,i)}),[...e.values()].sort((i,l)=>i.dateKey-l.dateKey)}function ur(){const e=new Map;return String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(n=>{const r=Rv(n);if(!r)return;const a=`${r.dateKey}:${r.hour}`,i=e.get(a);(!i||r.sequence>=i.sequence)&&e.set(a,r)}),[...e.values()].sort((n,r)=>n.sortKey-r.sortKey)}function Ov(e){return ur().filter(t=>t.dateKey===Number(e))}function _t(e,t){return e.reduce((n,r)=>n+Zo(r,t),0)}function Tu(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((t,n)=>t+Zo(e,n),0)}function xv(e){return Zo(e,"electricalInputWh")+Tu(e)}function vn(e,t){const n=Number(e),r=Number(t);return!Number.isFinite(n)||!Number.isFinite(r)||r<=0?"\u2014":(n/r).toFixed(2)}function Te(e,t=1){const n=Number(e);return Number.isFinite(n)?Math.abs(n)>=999500?`${(n/1e6).toFixed(2)} MWh`:Math.abs(n)<1e3?`${Math.round(n)} Wh`:`${(n/1e3).toFixed(t)} kWh`:"\u2014"}function Ct({dateKey:e,year:t,month:n,day:r,hour:a=null,label:i,tooltipLabel:l="",sortKey:u,source:d="bucket"}){return{sequence:0,dateKey:e,year:t,month:n,day:r,hour:a,label:i,tooltipLabel:l,sortKey:u??e,partial:!1,source:d,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function Tt(e,t){return lr.forEach(n=>{e[n]+=Zo(t,n)}),e.partial=e.partial||!!t?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(t?.sequence||0)),e}function Fv(e){const t=new Map;return e.forEach(n=>{t.set(n.dateKey,n)}),t}function Eu(e,t){const n=ve(e);if(n==="day"){const r=yu(t)||Q(t);return r?String(r.key):""}if(n==="week"){const r=Mv(t);return r?String(r.key):""}if(n==="month"){const r=Hv(t);return r?String(r.key):""}if(n==="year"){const r=Number(t);return Number.isInteger(r)&&r>=2020&&r<=2200?String(r):""}return""}function dr(e,t){const n=ve(t),r=Q(Av(e,!0)),a=Pn(),i=ur(),l=[...e.map(y=>y.dateKey),...i.map(y=>y.dateKey)].filter(y=>Number.isFinite(Number(y)));Number.isFinite(Number(a.oldestDateKey))&&l.push(Number(a.oldestDateKey)),Number.isFinite(Number(a.newestDateKey))&&l.push(Number(a.newestDateKey));const u=l.length?Math.min(...l.map(Number)):r?.key,c=(u?Q(u):r)?.date||r?.date||new Date,g=r?.date||new Date;let b=r?.key||cr(),h=b;return n==="week"?(b=As(c),h=As(g)):n==="month"?(b=zr(c),h=zr(g)):n==="year"?(b=c.getFullYear(),h=g.getFullYear()):(b=Ee(c),h=Ee(g)),Number(b)>Number(h)&&(b=h),{min:String(b),max:String(h)}}function $u(e,t){const n=Number(e);return Number.isFinite(n)?n<Number(t.min)?String(t.min):n>Number(t.max)?String(t.max):String(e):String(t.max)}function Dv(e,t,n=dr(e,t)){const r=ve(t),a=o.energyHistoryPeriodSelection?.[r],i=Eu(r,a);return $u(i||n.max,n)}function Iv(e,t){const n=ve(e),r=[];let a=0;if(n==="week"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<6e3;){const l=Q(i);r.push({value:i,label:ku(i),group:l?String(qu(l.date).year):""}),i=l?String(Ee(no(l.date,-7))):"",a+=1}return r}if(n==="month"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<1200;){const l=oo(i);if(!l)break;r.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=Su(i,-1),a+=1}return r}if(n==="year")for(let i=Number(t.max);i>=Number(t.min);i-=1)r.push({value:String(i),label:String(i)});return r}function pr(e,t){const n=ve(t);if(!bo(n))return{view:n,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};const r=dr(e,n),a=Dv(e,n,r);return{view:n,selectedValue:a,minValue:r.min,maxValue:r.max,canPrevious:Number(a)>Number(r.min),canNext:Number(a)<Number(r.max),isNow:Number(a)===Number(r.max),options:Iv(n,r)}}function Wv(e,t){const n=ve(t);if(!bo(n))return{from:"",to:"",hours:"0"};const r=pr(e,n);if(n==="day")return{from:r.selectedValue,to:r.selectedValue,hours:"1"};if(n==="week"){const a=Q(r.selectedValue);if(!a)return{from:"",to:"",hours:"0"};const i=Jo(a.date),l=no(i,6);return{from:String(Ee(i)),to:String(Ee(l)),hours:"0"}}if(n==="month"){const a=oo(r.selectedValue);return a?{from:String(a.year*1e4+a.month*100+1),to:String(a.year*1e4+a.month*100+vu(a.year,a.month)),hours:"0"}:{from:"",to:"",hours:"0"}}if(n==="year"){const a=Number(r.selectedValue);return Number.isInteger(a)?{from:`${a}0101`,to:`${a}1231`,hours:"0"}:{from:"",to:"",hours:"0"}}return{from:"",to:"",hours:"0"}}function dn(){if(!String(o.energyHistoryRaw||"").trim())return"?meta=1";const e=Xo(),t=Wv(e,o.energyHistoryView||"day"),n=new URLSearchParams;t.from&&n.set("from",t.from),t.to&&n.set("to",t.to),n.set("hours",t.hours);const r=n.toString();return r?`?${r}`:""}function Nn(e,t){const n=ve(e);if(!bo(n))return;const r=Xo(),a=dr(r,n),i=Eu(n,t),l=$u(i||a.max,a);o.energyHistoryPeriodSelection={...o.energyHistoryPeriodSelection,[n]:l},o.energyHistoryLastFetchAt=0,m(),fu()}function Hs(e,t){const n=ve(e);if(!bo(n))return;const r=Xo(),a=pr(r,n),i=Number(t)<0?-1:1;let l=a.selectedValue;if(n==="day"){const u=Q(a.selectedValue);l=u?String(Ee(no(u.date,i))):l}else if(n==="week"){const u=Q(a.selectedValue);l=u?String(Ee(no(u.date,i*7))):l}else n==="month"?l=Su(a.selectedValue,i):n==="year"&&(l=String(Number(a.selectedValue)+i));Nn(n,l)}function Ms(e){const t=ve(e);if(!bo(t))return;const n=Xo(),r=dr(n,t);Nn(t,r.max)}function Bv(e,t,n=pr(e,t)){const r=ve(t),a=Fv(e);if(!e.length&&r==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(r==="day"){const u=Q(n.selectedValue);if(!u)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const d=Ov(u.key);if(d.length){const y=new Map(d.map(f=>[f.hour,f])),p=[];for(let f=0;f<24;f+=1){const S=String(f),w=`${u.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(f).padStart(2,"0")}:00 - ${String((f+1)%24).padStart(2,"0")}:00`,q=Ct({dateKey:u.key,year:u.year,month:u.month,day:u.day,hour:f,label:S,tooltipLabel:w,sortKey:f,source:"hour"}),T=y.get(f);T&&Tt(q,T),p.push(q)}return{buckets:p,title:"Dag",detail:`${u.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}const c=a.get(u.key),g=ui()||cr(),b=u.key===g?"Vandaag":Qe(u.key),h=Ct({dateKey:u.key,year:u.year,month:u.month,day:u.day,label:b,sortKey:u.key,source:"day"});return c&&Tt(h,c),{buckets:[h],title:"Dag",detail:`${u.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(r==="week"){const u=Q(n.selectedValue);if(!u)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const d=Jo(u.date),c=[];for(let g=0;g<7;g+=1){const b=no(d,g),h=Ee(b),y=Q(h),p=Ct({dateKey:h,year:y.year,month:y.month,day:y.day,label:Qe(h,"weekday"),sortKey:h}),f=a.get(h);f&&Tt(p,f),c.push(p)}return{buckets:c,title:"Week",detail:ku(n.selectedValue)}}if(r==="month"){const u=oo(n.selectedValue);if(!u)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const d=vu(u.year,u.month),c=[];for(let g=1;g<=d;g+=1){const b=bu(u.year,u.month,g),h=Ee(b),y=Ct({dateKey:h,year:u.year,month:u.month,day:g,label:String(g),sortKey:h}),p=a.get(h);p&&Tt(y,p),c.push(y)}return{buckets:c,title:"Maand",detail:u.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(r==="year"){const u=Number(n.selectedValue);if(!Number.isInteger(u))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const d=[];for(let c=1;c<=12;c+=1){const g=u*1e4+c*100+1,b=Ct({dateKey:g,year:u,month:c,day:1,label:Qe(g,"month"),sortKey:c,source:"month"});e.filter(h=>h.year===u&&h.month===c).forEach(h=>Tt(b,h)),d.push(b)}return{buckets:d,title:"Jaar",detail:String(u)}}const i=new Map;e.forEach(u=>{i.has(u.year)||i.set(u.year,Ct({dateKey:u.year*1e4+101,year:u.year,month:1,day:1,label:String(u.year),sortKey:u.year,source:"year"})),Tt(i.get(u.year),u)});const l=[...i.values()].sort((u,d)=>u.sortKey-d.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function Vv(e){const t=_t(e,"heatpumpHeatOutputWh"),n=_t(e,"heatpumpCoolingOutputWh"),r=_t(e,"boilerHeatOutputWh");return{electricalInputWh:_t(e,"electricalInputWh"),heatingInputWh:_t(e,"heatingInputWh"),coolingInputWh:_t(e,"coolingInputWh"),heatOutputWh:t,coolingOutputWh:n,boilerOutputWh:r,outputWh:t+n+r}}function jv(e){const t=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),n=Number(e.boilerOutputWh||0),r=t+n;return!Number.isFinite(r)||r<=0?Number.NaN:t/r*100}function pn(e,t,n=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${n?`<p>${s(n)}</p>`:""}
      </div>
    `}function Mr(e,t,n){const r=[];n.forEach(i=>{const l=String(i.group||"");let u=r[r.length-1];(!u||u.label!==l)&&(u={label:l,options:[]},r.push(u)),u.options.push(i)});const a=r.some(i=>i.label)?r.map(i=>i.label?`
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
        `).join("")).join(""):n.map(i=>`
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
    `}function Ps(e){return e.view==="day"?`
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${s(Hr(e.selectedValue))}"
            min="${s(Hr(e.minValue))}"
            max="${s(Hr(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?Mr(e,"Week",e.options):e.view==="month"?Mr(e,"Maand",e.options):e.view==="year"?Mr(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function _v(e){return bo(e.view)?`
      <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
        ${Ps(e)}
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
          ${Ps(e)}
        </div>
      `}function Kv(){const e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function Uv(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${hu.map(t=>{const n=t.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${n?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(t.id)}"
              aria-selected="${n?"true":"false"}"
            >${s(t.label)}</button>
          `}).join("")}
      </div>
    `}function zv(e){const t=Number(e.electricalInputWh||0),n=Number(e.heatOutputWh||0),r=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,t+n+r+a),u=c=>`${Math.max(0,Number(c||0)/l*100).toFixed(2)}%`,d=jv(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${u(t)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${u(n)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${u(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${u(a)}"></span>
          <strong>${Number.isFinite(d)?`${Math.round(d)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s(Te(n,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s(Te(t,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s(Te(r,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s(Te(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function Gv(e){const t=Math.max(1,Number(e||0)/1e3),n=Math.pow(10,Math.floor(Math.log10(t))),r=t/n;return(r<=1.5?1.5:r<=3?3:r<=6?6:10)*n*1e3}function Qv(e){const t=Number(e);return Number.isFinite(t)?t>=999500?`${Number((t/1e6).toFixed(1))}`:`${Number((t/1e3).toFixed(1))}`:""}function Yv(e){return e>=999500?"MWh":"kWh"}function Jv(e){const c=Math.max(1e3,...e.map(xv)),g=Gv(c),b=e.length?1218/e.length:1218,h=Math.max(6,Math.min(38,b*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:g,barSlot:b,barWidth:h,yOf:p=>26+(1-Math.min(1,Math.max(0,Number(p||0)/g)))*196}}function Zv(e){const t=vn(e.heatpumpHeatOutputWh,e.heatingInputWh),n=vn(e.heatpumpCoolingOutputWh,e.coolingInputWh),r=vn(Tu(e),e.electricalInputWh);return[e.tooltipLabel||e.label||Qe(e.dateKey),`Elektrisch: ${Te(e.electricalInputWh,1)}`,`Warmtepomp warmte: ${Te(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${Te(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel: ${Te(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${t}`,`EER koelen: ${n}`,`Output / elektrisch: ${r}`].join(`
`)}function Xv(e,t=""){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;const n=Jv(e),r=Yv(n.axisMax),a=[0,.25,.5,.75,1].map(l=>n.axisMax*l),i=e.map((l,u)=>{const d=n.left+n.barSlot*u+n.barSlot/2,c=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}];let g=n.height-n.bottom;const b=c.map(f=>{const S=Zo(l,f.key);if(S<=0)return"";const w=S/n.axisMax*n.plotHeight;return g-=w,`
          <rect
            x="${(d-n.barWidth/2).toFixed(1)}"
            y="${g.toFixed(1)}"
            width="${n.barWidth.toFixed(1)}"
            height="${Math.max(1.4,w).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${f.className}"
          >
            <title>${s(`${l.label} \xB7 ${f.label}: ${Te(S,1)}`)}</title>
          </rect>
        `}).join(""),y=e.length<=12||u===0||u===e.length-1||u%3===0?`<text x="${d.toFixed(1)}" y="${n.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(l.label||Qe(l.dateKey))}</text>`:"",p=Zv(l);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(p)}" tabindex="0">
          <title>${s(p)}</title>
          <rect
            x="${(d-n.barWidth/2-4).toFixed(1)}"
            y="${n.top.toFixed(1)}"
            width="${(n.barWidth+8).toFixed(1)}"
            height="${n.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${b}
        </g>
        ${y}
      `}).join("");return`
      <svg class="oq-energy-history-chart oq-energy-history-chart--${s(ve(t))}" viewBox="0 0 ${n.width} ${n.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${n.width}" height="${n.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${n.left}" y="18" class="oq-energy-history-axis-unit">${s(r)}</text>
        ${a.map(l=>{const u=n.yOf(l);return`
            <line x1="${n.left}" y1="${u.toFixed(1)}" x2="${n.width-n.right}" y2="${u.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${n.left-10}" y="${u.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(Qv(l))}</text>
          `}).join("")}
        ${i}
      </svg>
    `}function ey(e=null){const t=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[t,"Ketel"]].map(([r,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(r)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function pi(){const e=Xo(),t=ve(o.energyHistoryView),n=pr(e,t),r=Bv(e,t,n),a=Vv(r.buckets);return{records:e,buckets:r.buckets,viewModel:r,periodControl:n,summary:a,activeView:t}}function Au(e=pi()){return be({energyHistorySignature:o.energyHistorySignature||"",energyHistoryError:o.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,currentValues:lr.map(t=>e.buckets[e.buckets.length-1]?.[t]??null)})}function Hu(e=pi()){const t=e.summary,n=e.buckets[0]?.dateKey?Qe(e.buckets[0].dateKey):"\u2014",r=e.buckets[e.buckets.length-1]?.dateKey?Qe(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(Au(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${Uv(e.activeView)}
          ${_v(e.periodControl)}
        </div>
        ${o.energyHistoryError?`<p class="oq-energy-history-error">${s(o.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${pn("Gemiddelde COP",vn(t.heatOutputWh,t.heatingInputWh),`${s(n)} - ${s(r)}`)}
          ${pn("Elektrisch",Te(t.electricalInputWh,1),"verbruikt")}
          ${pn("Warmtepomp",Te(t.heatOutputWh+t.coolingOutputWh,1),"warmte en koeling")}
          ${pn("Cv-ketel",Te(t.boilerOutputWh,1),"thermisch")}
        </div>
        ${zv(t)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${Xv(e.buckets,e.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${ey(t)}
      </section>
    `}function Ns(e){if(o.appView!=="results"||!o.root)return;const t=e.target.closest?.("[data-oq-energy-history-tip]"),n=t?.closest?.(".oq-energy-history-chart-wrap")||o.root.querySelector(".oq-energy-history-chart-wrap"),r=n?.querySelector(".oq-energy-history-tooltip");if(!t||!n||!r){r&&r.classList.remove("is-visible");return}const a=String(t.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){r.classList.remove("is-visible");return}r.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(c=>`<span>${s(c)}</span>`).join("")}
    `;const i=n.getBoundingClientRect();r.classList.add("is-visible");const l=r.getBoundingClientRect(),u=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),d=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));r.style.transform=`translate(${u.toFixed(0)}px, ${d.toFixed(0)}px)`}function ty(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${mu()}
        </div>
      </section>
    `}function oy(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${Hu()}
        </div>
      </section>
    `}function ny(){if(!o.root||o.appView!=="energy")return!1;const e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-overview-energy"):null;if(!e||!t)return!1;const n=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==n&&(e.className=n);const r=ci();return lt(t,gu(r),mu(r))}function ry(){if(!o.root||o.appView!=="results")return!1;const e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-energy-history"):null;if(!e||!t)return!1;const n=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==n&&(e.className=n);const r=pi(),a=Kv();return(a?!1:lt(t,Au(r),Hu(r)))||a}function gi(e,t,n){const r=Nu(B(t.mode,"Unknown")),a=A(t.defrost),i=Oo(B(t.failures,"None")),l=Lc(i),u=r==="Verwarmen"||r==="Koelen"||a;return{mode:r,defrostActive:a,failures:i,warningFailures:l,running:u,thermalKey:r==="Koelen"?t.cooling:t.heat,schematic:gy(e,t,n,r,a,l,u)}}function Mu(e,t=null){return`<h3>${s(e)}</h3>${t?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(t.layout)}">${yy(t.layout==="equal"?"minus":"plus")}<span>${s(t.label)}</span></button>`:""}`}function Gr(e,t,n,r){return`<div class="oq-overview-hp-status">${zc(e,t,n,r)}</div>`}function ay(){return B("controlModeLabel","").toLowerCase().includes("standby")}function iy(e,t){return t?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function Pu(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(t=>`${t.title} ${iy(Nu(B(t.keys.mode,"Unknown")),A(t.keys.defrost))}`).join(", "))}</p>`}function sy(e){const t=o.entities[e];if(!t)return"Positie: \xE2\u20AC\u201D";const n=H(e);return Number.isNaN(n)?`Positie: ${B(e)}`:`Positie: ${D(n,0,t.uom||"")}`}function ly(e){return v(e)?`Positie: ${A(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \xE2\u20AC\u201D"}function Nu(e){const t=String(e||"").trim();return!t||t==="Unknown"?"Onbekend":t==="Standby"?"Stand-by":t==="Heating"?"Verwarmen":t==="Cooling"?"Koelen":t}function Oo(e){const t=String(e||"").trim();return!t||t==="None"?"Geen actieve storingen":t}function Qr(e,t,n,r=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(t)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(n)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(n)}" />
        ${r?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(n)}" />`:""}
      </g>
    `}function cy(e,t,n){return e==="temperature"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${t-10}"
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
          x="${t-10}"
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
          x="${t-10}"
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
          x="${t-10}"
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
          x="${t-10}"
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
          x="${t-10}"
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
          x="${t-10}"
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
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${t-10} ${n-10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `}function xo({bind:e,modifier:t,x:n,y:r,width:a,kicker:i,detail:l,detailBind:u="",icon:d="heater",direction:c="down"}){const b=n+26,h=r+22,y=u?` data-oq-bind="${s(u)}"`:"";let p="";if(c==="up"){const f=n+Math.round(a*.52);p=`M${f-6} ${r} L${f} ${r-8} L${f+6} ${r} Z`}else if(c==="left"){const f=r+Math.round(22);p=`M${n} ${f-6} L${n-8} ${f} L${n} ${f+6} Z`}else if(c==="right"){const f=r+Math.round(22);p=`M${n+a} ${f-6} L${n+a+8} ${f} L${n+a} ${f+6} Z`}else{const f=n+Math.round(a*.52);p=`M${f-6} ${r+44} L${f} ${r+44+8} L${f+6} ${r+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(t)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${n}" y="${r}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${b}" cy="${h}" r="11.5" />
        ${cy(d,b,h)}
        <text class="oq-hp-tech-tooltip-kicker" x="${n+48}" y="${r+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${n+48}" y="${r+32}"${y}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${p}" />
      </g>
    `}function Yr({bind:e,x:t,y:n,width:r,value:a,label:i,ariaLabel:l="",align:u="start"}){const d=l||`${i} temperatuur ${a}`,c=u==="end",g=u==="center",b=g?"middle":c?"end":"start",h=g?t+r/2:c?t+r-2:t+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(d)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${t}" y="${n}" width="${r}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${h}" y="${n+13}" text-anchor="${b}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function uy({tooltip:e,...t}){return`${Yr(t)}${xo({bind:t.bind,...e})}`}function dy({bind:e,ariaLabel:t,x:n,y:r,width:a,height:i,rx:l,tooltip:u}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(t)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${n}" y="${r}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${xo({bind:e,...u})}
    `}function Pr({bind:e,className:t,active:n,ariaLabel:r,attrs:a="",activeClass:i="is-active",content:l,tooltip:u}){return`
      <g class="${[t,n&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${n?"0":"-1"}" aria-label="${s(r)}" ${a}>
        ${l}
      </g>
      ${xo({bind:e,...u})}
    `}function py({label:e,value:t,bind:n,ariaLabel:r="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${r?` aria-label="${s(r)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(t)}</strong>
      </div>
    `}function ze(e,t,n=""){const r=H(e);return Number.isNaN(r)?B(e):D(r,t,Eo(e,n))}function gy(e,t,n,r,a,i,l){const u=H(t.freq),d=Number.isNaN(u)?"\u2014":String(Math.round(u)),c=H(t.power),g=H(t.heat),b=H(t.cooling),h=H(t.flow),y=r==="Koelen"?b:g,p=l||!Number.isNaN(u)&&u>0||!Number.isNaN(c)&&c>80||!Number.isNaN(g)&&g>150,f=!Number.isNaN(h)&&h>0,S=Uc(r,p),w=i==="Geen actieve storingen"?"Geen storingen":i,q=w!=="Geen storingen",T=a?"Actief":"Uit",k=ze(t.waterOut,1,"\xB0C"),M=ze(t.waterIn,1,"\xB0C"),F=Number.isNaN(h)?B(t.flow):D(h,0,Eo(t.flow,"L/h")),x=ze(t.evaporatorCoilTemp,1,"\xB0C"),U=ze(t.innerCoilTemp,1,"\xB0C"),C=ze(t.outsideTemp,1,"\xB0C"),$=ze(t.condenserPressure,1,"bar"),N=ze(t.dischargeTemp,1,"\xB0C"),W=ze(t.evaporatorPressure,1,"bar"),K=ze(t.returnTemp,1,"\xB0C"),R=A(t.bottomPlate),V=A(t.crankcase),P=sy(t.eev),O=ly(t.fourWay),j=D(c,0,"W"),Y=D(y,0,"W"),ge=r==="Koelen"?!Number.isNaN(c)&&c>=5&&!Number.isNaN(b)?b/c:Number.NaN:H(t.cop),ue=D(ge,1),J=r==="Koelen"?"COP (EER)":"COP",nt=r==="Koelen"?"Koelafgifte":"Warmteafgifte",ke=r==="Koelen"?"afgegeven koeling":"afgegeven warmte",vo=H(t.fanSpeed),me=!Number.isNaN(vo)&&vo>0,hr=Number.isNaN(vo)?"\u2014":`${Math.round(vo)} rpm`,he=a||r==="Koelen",fr=he?"Verdamper":"Condensor",yo=he?"Condensor":"Verdamper",en=he?"return":"supply",St=he?"supply":"return",Ot=360,Ke=384,wo=214,xt="M278 220 C278 228 273 234 266 234",Oe="M278 220 C278 228 283 234 290 234",bi="M290 234 C284 234 279 240 278 248",Ce="M266 234 C272 234 277 240 278 248",rt=he?`M290 234 H${Ot} Q372 ${wo} ${Ke} 234 H436 V134 H480`:"M266 234 H180 V134 H164",So=he?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${Ke} Q372 ${wo} ${Ot} 234 H290`,Ft="M296 150 H278 V220",tn="M278 248 V268 H372 V150 H356",Dt=he?"M480 294 H337":"M164 294 H315",xe=he?"M315 294 H164":"M337 294 H480",vi=["oq-hp-schematic-board",`oq-hp-schematic-board--${n}`,p?"is-running":"",f?"is-water-flowing":"",me?"is-fan-running":"",he?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:vi,statusText:S,failureText:w,warningActive:q,waterFlowActive:f,defrostActive:a,defrostText:T,mode:r,reverseCycle:he,compressorFreqText:`${d} Hz`,leftExchangerTitle:fr,rightExchangerTitle:yo,supplyLineTone:en,returnLineTone:St,waterOutText:k,waterInText:M,flowText:F,evaporatorCoilTempText:x,innerCoilTempText:U,outsideTempText:C,dischargePressureText:$,dischargeTempText:N,suctionPressureText:W,suctionTempText:K,bottomPlateActive:R,crankcaseActive:V,eevPositionText:P,fourWayPositionText:O,powerText:j,heatText:Y,heatLabel:nt,heatDescription:ke,efficiencyText:ue,efficiencyLabel:J,fanRpmText:hr,hotgasValveHeat:xt,hotgasValveCool:Oe,suctionValveHeat:bi,suctionValveCool:Ce,leftValveTone:he?"suction":"hotgas",rightValveTone:he?"hotgas":"suction",pipes:{supply:{tone:en,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:St,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:Ft,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:rt,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:Dt,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:xe,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:So,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:tn,animated:!0,flowVariant:"default"}}}}function my(e){const t=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),n=`${t}-cond-water-heat`,r=`${t}-cond-water-cool`,a=`${t}-cond-ref`,i=e.reverseCycle?r:n,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],u=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],d=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
      <div class="${s(e.boardClass)}" data-oq-hp-board="${s(e.title)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-visual">
            <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${s(e.title)} technische schematic">
              <defs>
              <linearGradient id="${s(n)}" x1="0" y1="1" x2="0" y2="0">
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

            ${Object.entries(e.pipes).map(([c,g])=>Qr(c.replace(/[A-Z]/g,b=>`-${b.toLowerCase()}`),g.tone,g.d,g.animated,g.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${u.map(uy).join("")}
            ${Pr({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${Pr({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${Pr({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
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

            ${d.map(dy).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(py).join("")}
          </div>
        </div>
      </div>
    `}function Ru(e,t,n,r="normal",a=null){if(!v(t.power))return"";const i=gi(e,t,n),{mode:l,defrostActive:u,running:d,thermalKey:c}=i,g=i.schematic;return o.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(n)} oq-overview-hp--${s(r)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${Mu(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${Gr(l,d,g.warningActive,g.failureText)}
            </div>
          </div>
          ${my(g)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(n)} oq-overview-hp--${s(r)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${Gr(l,d,g.warningActive,g.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${sr([{key:t.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:c,label:g.heatLabel,tone:"orange",note:g.heatDescription},{label:g.efficiencyLabel,value:g.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${s(l)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${s(B(t.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${u?"Actief":"Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${_r("Water in",t.waterIn)}
          ${_r("Water out",t.waterOut)}
        </div>
      </section>
    `}function mi(){return A("boilerCvAssistEnabled")&&v("boilerHeatPower")}function hy(){return(typeof Z=="function"?Z():"")!=="single"&&v("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function fy(){return(typeof Z=="function"?Z():"")!=="single"&&v("hp2Flow")?"hp2Flow":"hp1Flow"}function gr(){const e=H("boilerHeatPower"),t=H(fy()),n=v("boilerActive")?A("boilerActive"):!Number.isNaN(e)&&e>20,r=!Number.isNaN(t)&&t>0,a=D(e,0,"W"),i=D(t,0,"L/h"),l=D(H(hy()),1,"\xB0C"),u=D(H("supplyTemp"),1,"\xB0C"),d=n?"Aan":"Uit",c=n?"Levert ondersteuning":"Geen ondersteuning",g=["oq-boiler-card",n?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:n,flowActive:r,heatText:a,flowText:i,returnTempText:l,supplyTempText:u,statusText:d,statusCopy:c,boardClass:g,flowPathClass:r?"is-flowing":"is-static"}}function hi(e=gr()){return be({version:"boiler-visual-mode-v1",visualMode:o.hpVisualMode,boardClass:"oq-boiler-card"})}function by(e,t=gr()){const n=e.querySelector(".oq-boiler-card");n&&(n.className=["oq-boiler-card",t.active?"is-running":"is-idle",t.flowActive?"is-flowing":"is-static"].join(" "));const r=e.querySelector(".oq-overview-chip");r&&(r.className=`oq-overview-chip oq-overview-chip--${t.active?"active":"neutral"}`,r.textContent!==t.statusText&&(r.textContent=t.statusText));const a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",t.active),a.classList.toggle("is-idle",!t.active));const i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==t.statusCopy&&(i.textContent=t.statusCopy);const l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==t.heatText&&(l.textContent=t.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(g=>{g.textContent!==t.flowText&&(g.textContent=t.flowText)});const u=e.querySelector("[data-oq-boiler-status-value]");u&&u.textContent!==t.statusCopy&&(u.textContent=t.statusCopy);const d=e.querySelector('[data-oq-bind="boiler-return-value"]');d&&d.textContent!==t.returnTempText&&(d.textContent=t.returnTempText);const c=e.querySelector('[data-oq-bind="boiler-supply-value"]');c&&c.textContent!==t.supplyTempText&&(c.textContent=t.supplyTempText)}function vy(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(hi(e))}">
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
    `}function Jr(){if(!mi())return"";const e=gr();return o.hpVisualMode!=="schematic"?vy(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(hi(e))}">
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
                ${Qr("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${Qr("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${Yr({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${xo({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${Yr({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
                ${xo({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"right"})}
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
    `}function Lu(){const e=typeof Z=="function"?Z():"";return ud.filter(t=>e==="single"&&t.title==="HP2"?!1:v(t.keys.power))}function fi(e){return!Array.isArray(e)||e.length<2||o.hpVisualMode!=="schematic"?"equal":o.hpLayoutMode==="focus-hp1"||o.hpLayoutMode==="focus-hp2"?o.hpLayoutMode:"equal"}function Rn(e,t,n){return!Array.isArray(t)||t.length<2?"normal":n==="focus-hp1"?e===0?"focus":"muted":n==="focus-hp2"?e===1?"focus":"muted":"normal"}function Zr(e,t,n){return!Array.isArray(t)||t.length<2||o.hpVisualMode!=="schematic"?null:Rn(e,t,n)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function Ou(e){return!Array.isArray(e)||e.length!==1?fi(e):mi()?"equal":"single"}function yy(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function xu(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${Pu(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function wy(e,t){if(!e)return!1;const n=e.querySelector(".oq-overview-hp-tools-copy"),r=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!n||!r||!a?(dt(e,xu(t)),!0):(dt(n,`
      <h3>Warmtepompen</h3>
      ${Pu(t)}
    `),r.classList.toggle("is-active",o.hpVisualMode==="schematic"),a.classList.toggle("is-active",o.hpVisualMode==="compact"),!0)}function Sy(){const e=Jc(),t=Lu(),n=fi(t),r=Ou(t),a=xu(t);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${_c()}
          ${rv(e)}
          <div class="oq-overview-main">
            ${tu(Kr())}
            ${su()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(r)}">
            ${t.map((i,l)=>Ru(i.title,i.keys,i.accent,Rn(l,t,n),Zr(l,t,n))).join("")}
            ${Jr()}
          </div>
        </div>
      </section>
    `}function qy(e,t,n){if(!e)return;const r=e.querySelector(t);r&&r.textContent!==n&&(r.textContent=n)}function dt(e,t){e&&e.innerHTML!==t&&(e.innerHTML=t)}function lt(e,t,n){return!e||e.dataset.renderSignature===t?!1:(e.outerHTML=n,!0)}function Qt(e,t,n){e&&e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ky(e,t){t.forEach(([n,r])=>{qy(e,`[data-oq-bind="${n}"]`,r)})}function Cy(e,t){t.forEach(([n,r])=>{Qt(e.querySelector(`[data-oq-bind="${n}"]`),"aria-label",r)})}function Ty(e,t,n,r=""){const a=e.querySelector(`[data-oq-bind="${t}"]`);a&&(a.classList.toggle("is-active",n),Qt(a,"tabindex",n?"0":"-1"),!n&&r&&mr(e.querySelector(`[data-oq-bind="${r}"]`)))}function Ey(e,t,n){Qt(e.querySelector(`[data-oq-bind="${t}"]`),"fill",n)}function Fo(e,t,n,r){if(!e)return;const a=`${t}${n}`;r.map(l=>`${t}${l}`).find(l=>e.classList.contains(l))!==a&&(r.forEach(l=>e.classList.remove(`${t}${l}`)),e.classList.add(a))}function $y(e,t,n,r){const a=e.querySelector(`[data-oq-pipe="${t}"]`);a&&(Fo(a,"oq-hp-tech-pipe--",n,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==r&&i.setAttribute("d",r)}))}function mr(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function Rs(e,t,n){!e||!t||!n||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(r=>{r!==n&&mr(r)}),t.appendChild(n),n.classList.add("is-active"),n.setAttribute("aria-hidden","false"))}function Ay(e,t,n,r){if(!e||!t||!n||!r||n.dataset.oqTooltipWired==="true")return;n.dataset.oqTooltipWired="true";const a=()=>{n.matches(":hover")||document.activeElement===n||mr(r)};n.addEventListener("mouseenter",()=>Rs(e,t,r)),n.addEventListener("mouseleave",a),n.addEventListener("focus",()=>Rs(e,t,r)),n.addEventListener("blur",a)}function Fu(e){if(!e)return;const t=e.querySelector(".oq-hp-tech-svg");if(!t)return;let n=t.querySelector(".oq-hp-tech-tooltip-layer");n||(n=document.createElementNS("http://www.w3.org/2000/svg","g"),n.setAttribute("class","oq-hp-tech-tooltip-layer"),t.appendChild(n)),Array.from(t.querySelectorAll(".oq-hp-tech-tooltip")).forEach(r=>{n.appendChild(r)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(r=>{const a=r.getAttribute("data-oq-tooltip-target");if(!a)return;const i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);Ay(e,n,r,i)})}function Hy(e=o.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(t=>{Fu(t)})}function My(e,t,n,r,a=null,i=null){if(!e)return;const l=i||gi(t,n,r),{mode:u,running:d}=l,c=l.schematic,g=e.querySelector(".oq-overview-hp-head-title");g&&dt(g,Mu(t,a));const b=e.querySelector(".oq-overview-hp-head-side");if(b){let S=b.querySelector(".oq-overview-hp-status");S||(dt(b,Gr(u,d,c.warningActive,c.failureText)),S=b.querySelector(".oq-overview-hp-status")),jb(S,u,d,c.warningActive,c.failureText)}const h=e.querySelector("[data-oq-hp-board]");if(!h)return;h.className!==c.boardClass&&(h.className=c.boardClass),ky(h,[["status",c.statusText],["left-exchanger-title",c.leftExchangerTitle],["right-exchanger-title",c.rightExchangerTitle],["compressor-freq",c.compressorFreqText],["flow-value",c.flowText],["inner-coil-temp-value",c.innerCoilTempText],["evaporator-temp-value",c.evaporatorCoilTempText],["outside-temp-value",c.outsideTempText],["discharge-pressure-value",c.dischargePressureText],["discharge-temp-value",c.dischargeTempText],["suction-pressure-value",c.suctionPressureText],["suction-temp-value",c.suctionTempText],["supply-value",c.waterOutText],["return-value",c.waterInText],["footer-mode",c.mode],["footer-power",c.powerText],["footer-heat",c.heatText],["footer-efficiency-label",c.efficiencyLabel],["footer-efficiency",c.efficiencyText],["fan-speed-value",c.fanRpmText],["fourway-detail",c.fourWayPositionText],["eev-detail",c.eevPositionText]]);const y=h.querySelector('[data-oq-bind="footer-heat-label"]');if(y){Qt(y,"aria-label",c.heatLabel);const S=c.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";y.innerHTML!==S&&(y.innerHTML=S)}[["bottom-heater",c.bottomPlateActive],["crankcase-heater",c.crankcaseActive]].forEach(([S,w])=>{Ty(h,S,w,`${S}-tooltip`)});const p=h.querySelector('[data-oq-bind="defrost-badge"]');p&&(Qt(p,"tabindex",c.defrostActive?"0":"-1"),Qt(p,"aria-label",c.defrostActive?"Defrost actief":"Defrost uit"),c.defrostActive||mr(h.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",c.supplyLineTone],["return-tooltip",c.returnLineTone]].forEach(([S,w])=>{Fo(h.querySelector(`[data-oq-bind="${S}"]`),"oq-hp-tech-tooltip--",w,["warm","supply","return"])}),Cy(h,[["supply-reading",`Aanvoer temperatuur ${c.waterOutText}`],["flow-reading",`Flow ${c.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${c.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${c.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${c.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${c.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${c.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${c.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${c.dischargeTempText}`],["return-reading",`Retour temperatuur ${c.waterInText}`],["suction-pressure-reading",`Zuigdruk ${c.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${c.suctionTempText}`],["fourway-trigger",`4-wegklep, ${c.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${c.eevPositionText}`]]),Fo(h.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",c.returnLineTone,["supply","return"]);const f=String(c.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");Ey(h,"cond-water",`url(#${c.reverseCycle?`${f}-cond-water-cool`:`${f}-cond-water-heat`})`),Object.entries(c.pipes).forEach(([S,w])=>{$y(h,S.replace(/[A-Z]/g,q=>`-${q.toLowerCase()}`),w.tone,w.d)}),Fu(h),ha()}function Py(){if(!o.root||o.appView!=="overview")return!1;const e=o.root.querySelector(".oq-overview-board");if(!e)return!1;const t=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==t&&(e.className=t);const n=Jc(),r=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),u=e.querySelector(".oq-overview-trends"),d=e.querySelector(".oq-overview-hp-tools"),c=e.querySelector(".oq-overview-hp-grid"),g=e.querySelector("[data-oq-boiler-panel]"),b=Lu();if(r){const q=ar();lt(r,be(q),_c())}if(a){const q=a.querySelector(".oq-overview-top");q&&dt(q,sr(ru()));const T=a.querySelector(".oq-overview-statuspanel");if(T){const M=B("controlModeLabel");lt(T,be(ou(n,M)),nu(n,M))}const k=a.querySelector(".oq-overview-summary-side");if(k){const M=Jl();k.dataset.renderSignature!==M&&(dt(k,au()),k.dataset.renderSignature=M)}}if(i&&lt(i,be(Kr()),tu(Kr())),l){const q=oi();lt(l,iu(q),su())}if(u&&o.appView==="overview"&&(lt(u,ai(),ii()),pu(e)),li(e),!d||!c)return!1;const h=fi(b),y=Ou(b);if(wy(d,b),Fo(c,"oq-overview-hp-grid--",y,["single","equal","focus-hp1","focus-hp2"]),o.hpVisualMode!=="schematic"){const q=[...b.map((k,M)=>Ru(k.title,k.keys,k.accent,Rn(M,b,h),Zr(M,b,h))),Jr()].join(""),T=be({visualMode:o.hpVisualMode,layout:y,markup:q});return c.dataset.renderSignature!==T&&(dt(c,q),c.dataset.renderSignature=T),!0}const p=mi()?gr():null,f=p?Jr():"",S=p?hi(p):"";return!!g!=!!f||(g&&g.dataset.renderSignature!==S?g.outerHTML=f:g&&p&&by(g,p),c.querySelectorAll("[data-oq-hp-panel]").length!==b.length)?!1:(b.forEach((q,T)=>{const k=e.querySelector(`[data-oq-hp-panel="${q.title}"]`);if(k){const M=gi(q.title,q.keys,q.accent);Fo(k,"oq-overview-hp--",Rn(T,b,h),["normal","focus","muted"]),My(k,q.title,q.keys,q.accent,Zr(T,b,h),M)}}),!0)}function Ny(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${Hf()}
        ${Mf()}
      </section>
    `}function Ry(){return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""} oq-helper-modal-backdrop--loading" data-oq-modal="initial-load">
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
    `}function Ly(){return o.appView==="overview"?Sy():o.appView==="energy"?ty():o.appView==="diagnosis"?yv():o.appView==="results"?oy():Ny()}function Oy(){const e=fl();return`
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
    `}function xy(){const e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function Fy(e){if(!e||o.deferDevControlSelectRender)return;o.deferDevControlSelectRender=!0;const t=()=>{e.removeEventListener("blur",t),e.removeEventListener("change",t),o.deferDevControlSelectRender=!1,window.setTimeout(()=>m(),0)};e.addEventListener("blur",t,{once:!0}),e.addEventListener("change",t,{once:!0})}function m(){if(!o.root)return;const e=xy();if(e){Fy(e);return}const t=o.systemModal==="webserver-logs"?vt():null,n=o.systemModal==="cm100-commissioning"?hh():null,r=String(o.systemModal||"").startsWith("service-task-")?bh():null,a=o.systemModal==="history-storage"?yh():null,i=o.quickStartModalOpen?Eb():null;if(o.nativeOpen){o.root.innerHTML=`
        ${Ii()}
        ${Kp()}
      `,o.settingsRenderSignature="",o.headerRenderSignature=Lr(),ua(),kn(),ss(),Li(),ts(),es(),gt(t),ns(n),rs(r),as(a),ws(i);return}const l=Ly(),u=o.loadingEntities?`${l}${Ry()}`:l,d=o.appView==="overview"||o.appView==="energy"||o.appView==="diagnosis"||o.appView==="results";o.root.innerHTML=`
      ${Ii()}
      <div class="oq-helper-shell${o.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${d?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${rd}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${jp()}
          </div>
      ${eh()}
      ${u}
      ${Oy()}
        </div>
      </div>
      ${Tb()}
      ${zp()}
      ${Gp()}
      ${Ep()}
    `,o.settingsRenderSignature=o.appView==="settings"?Wr():"",o.headerRenderSignature=Lr(),ma(),Hy(),ss(),fa(),li(),kn(),Li(),ts(),es(),gt(t),ns(n),rs(r),as(a),ws(i)}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}Qd();})();
