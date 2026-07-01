/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{const td=`
    <svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>
  `,Ni={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},Ls="https://oi.esphome.io/v3/www.js",At=2,Pn=4,Os=6e4,Ds="Power House",Fs="Water Temperature Control (heating curve)",Nn=[{id:"generation",kicker:"Stap 1",title:"Kies je Quatt Hybrid",copy:"Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.",fields:[{title:"Quatt Hybrid-versie",copy:"Kies de versie die bij jouw Quatt hoort."}]},{id:"flow-source",kicker:"Stap 2",title:"Flowmeting configureren",copy:"Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort.",fields:[{title:"Flowbron",copy:"De Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron OpenQuatt moet gebruiken."}]},{id:"thermostat-source",kicker:"Stap 3",title:"Thermostaatgegevens configureren",copy:"Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt.",fields:[{title:"Thermostaatbron",copy:"Q-edition gebruikt OpenTherm. Listener en Waveshare gebruiken CiC of Home Assistant."}]},{id:"boiler",kicker:"Stap 4",title:"CV-ketel of boiler",copy:"Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.",optionalEntity:"boilerCvAssistEnabled",fields:[{title:"CV-ketel / boiler aanwezig",copy:"Kies of er ondersteuning beschikbaar is en vul eventueel het vermogen in."}]},{id:"strategy",kicker:"Stap 5",title:"Kies de verwarmingsstrategie",copy:"Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",fields:[{title:"Verwarmingsstrategie",copy:"Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn."}]},{id:"heating",kicker:"Stap 6",title:"Werk de regeling uit",copy:"Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",fields:[{title:"Instellingen voor jouw regeling",copy:"Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling."}]},{id:"flow",kicker:"Stap 7",title:"Flowregeling en afstelling",copy:"Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning.",fields:[{title:"Flowregeling en tuning",copy:"Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt. Stel hier ook de flow-instellingen in."}]},{id:"water",kicker:"Stap 8",title:"Watertemperatuur beveiligen",copy:"Controleer de normale bovengrens en de tripgrens voor het watercircuit.",fields:[{title:"Watertemperatuur",copy:"Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt."}]},{id:"silent",kicker:"Stap 9",title:"Stille uren en niveaus",copy:"Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",fields:[{title:"Stille uren",copy:"Hier bepaal je wanneer het systeem rustiger moet werken."}]},{id:"confirm",kicker:"Stap 10",title:"Bevestigen en afronden",copy:"Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.",fields:[{title:"Afronden",copy:"Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is."}]}],Rn=[1,2],Ao=Array.from({length:11},(e,t)=>t),Yr=["cooling","heating"];function od(e){return e==="cooling"?"cooling":"heating"}function nd(e){return e==="cooling"?"Cooling":"Heating"}function Jt(e,t,n){return`hp${e}OduRuntime${nd(t)}F${n}`}function le(e,t){return`hp${e}OduRuntimeFrequency${t}`}function xs(e){return[le(e,"Enable"),le(e,"Load"),le(e,"Apply"),le(e,"Status"),...Yr.flatMap(t=>Ao.map(n=>Jt(e,t,n)))]}function rd(e){const t=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return t?Number(t[1]):0}const Jr=Rn.flatMap(xs),Is=new Set(Rn.flatMap(e=>[le(e,"Load"),le(e,"Apply")])),L={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},trendHistoryFlashAvailable:{domain:"text_sensor",name:"Trendhistorie beschikbaar",optional:!0},trendHistoryFlashOldest:{domain:"text_sensor",name:"Trendhistorie oudste punt",optional:!0},trendHistoryFlashNewest:{domain:"text_sensor",name:"Trendhistorie nieuwste punt",optional:!0},trendHistoryFlashLastFlush:{domain:"text_sensor",name:"Trendhistorie laatste opslag",optional:!0},trendHistoryFlashSize:{domain:"sensor",name:"Trendhistorie grootte",optional:!0},trendHistoryFlashWrites:{domain:"sensor",name:"Trendhistorie schrijfacties",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHourRetention:{domain:"select",name:"Uurdetail bewaren",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},lifetimeEnergyHistoryAvailable:{domain:"text_sensor",name:"Lifetime energiehistorie beschikbaar",optional:!0},lifetimeEnergyHistoryOldest:{domain:"text_sensor",name:"Lifetime energiehistorie oudste dag",optional:!0},lifetimeEnergyHistoryNewest:{domain:"text_sensor",name:"Lifetime energiehistorie nieuwste dag",optional:!0},lifetimeEnergyHistoryLastWrite:{domain:"text_sensor",name:"Lifetime energiehistorie laatste opslag",optional:!0},lifetimeEnergyHistorySize:{domain:"sensor",name:"Lifetime energiehistorie grootte",optional:!0},lifetimeEnergyHistoryWrites:{domain:"sensor",name:"Lifetime energiehistorie schrijfacties",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempPt1000:{domain:"sensor",name:"Water Supply Temp (PT1000)",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};Rn.forEach(e=>{const t=`HP${e} - EXPERIMENTAL`;L[le(e,"Enable")]={domain:"switch",name:`${t} ODU runtime frequency write enable`,optional:!0},L[le(e,"Load")]={domain:"button",name:`${t} load ODU runtime frequency table`,optional:!0},L[le(e,"Apply")]={domain:"button",name:`${t} apply ODU runtime frequency table`,optional:!0},L[le(e,"Status")]={domain:"text_sensor",name:`${t} ODU runtime frequency status`,optional:!0},Yr.forEach(n=>{Ao.forEach(r=>{L[Jt(e,n,r)]={domain:"number",name:`${t} ${od(n)} F${r} runtime Hz`,optional:!0}})})});const Zr=[{id:"overview",label:"Overzicht",icon:"monitor-dashboard"},{id:"energy",label:"Energie",icon:"zap"},{id:"diagnosis",label:"Diagnose",icon:"activity"},{id:"results",label:"Resultaten",icon:"bar-chart"},{id:"settings",label:"Instellingen",icon:"settings"}],ad=new Set(Zr.map(e=>e.id)),id={activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',"bar-chart":'<path d="M4 19V5"/><path d="M20 19H4"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="12" y="7" width="3" height="9" rx="1"/><rect x="17" y="3" width="3" height="13" rx="1"/>',"clipboard-check":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6"/><path d="m9 13 2 2 4-5"/>',flame:'<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.04 -1.77 4.74 -3 6c-1.23 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.53 -1.06 -3.94 -2 -5c-1.79 3 -2.79 3 -4 2z"/>',"home-cog":'<path d="M5 12h-2l9 -9l9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1"/><circle cx="17" cy="18" r="2"/><path d="M17 14.5v1.5"/><path d="M17 20v1.5"/><path d="M13.97 16.25l1.3 .75"/><path d="M18.73 19l1.3 .75"/><path d="M20.03 16.25l-1.3 .75"/><path d="M15.27 19l-1.3 .75"/>',link:'<path d="M9 15l6 -6"/><path d="M11 6l.46 -.54a5 5 0 0 1 7.08 7.08l-.54 .46"/><path d="M13 18l-.46 .54a5 5 0 0 1 -7.08 -7.08l.54 -.46"/>',"monitor-dashboard":'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M6.5 7h7v4h-7z"/><path d="M16 7h2"/><path d="M16 10h2"/><path d="M6.5 13h3"/><path d="M11 13h2.5"/>',"more-horizontal":'<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>',server:'<rect x="3" y="4" width="18" height="8" rx="3"/><rect x="3" y="12" width="18" height="8" rx="3"/><path d="M7 8h.01"/><path d="M7 16h.01"/>',snowflake:'<path d="M12 4v16"/><path d="M4 12h16"/><path d="m6.4 6.4 11.2 11.2"/><path d="m17.6 6.4 -11.2 11.2"/>',tool:'<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8z"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'};function Xr(e,t=""){const n=id[e];return n?`<svg${t?` class="${s(t)}"`:""} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${n}</svg>`:""}const qe=[{id:"installation",label:"Installatie",icon:"home-cog"},{id:"heating",label:"Verwarmen",icon:"flame"},{id:"cooling",label:"Koelen",icon:"snowflake"},{id:"integrations",label:"Bronnen / integraties",icon:"link"},{id:"service",label:"Service",icon:"tool"},{id:"system",label:"Systeem",icon:"server"}],Ve=new Set(qe.map(e=>e.id)),sd=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],pe=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],ao=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],Io=["dayMax","silentMax","maxWater"],gt=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],Ws=["flowKp","flowKi"],bn=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],vn=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],ea=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],ld=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],ta=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...vn,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],Bs=["cicCompatibilityMode"],Vs=["otEnabled","otLinkProblem"],_s=["cicPollingEnabled","cicFeedUrl","cicDataStale"],js=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],Ks=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],oa=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"],Us=["supplyTemp","waterSupplyTempEsp","waterSupplyTempPt1000","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","coolingEnableSelected","coolingEnableEffectiveSource","coolingEnableHa","coolingEnableHaValid"],mt=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],Ln=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","roomSetpointHa","roomSetpointHaValid"],zs=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],On=[...pe.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],Gs=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],Dn=["silentStartTime","silentEndTime","silentMax","dayMax"],cd=1e4;const Ar=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],Gt=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1CondenserPressure","hp1EvaporatorPressure","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2CondenserPressure","hp2EvaporatorPressure","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],io=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],ud=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],na=[...io,...ud,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],dn=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],Pe=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],Wo=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Mode","hp1Failures","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Mode","hp2Failures","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay"],pn=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Mode","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Mode","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay",...ld],dd=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...ao,...On,...gt,"maxWater",...Dn,...mt,...Ln,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","hp1Power","hp1Heat","hp1Cooling","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp2Power","hp2Heat","hp2Cooling","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut"],pd=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],Qs=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...ta,"manualCoolingEnable","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","webServerLogHistoryEnabled","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites",...Bs,...Vs,...js,..._s,...Ks,...oa,...Us,...gt,...Ws,...bn,...vn,...ea,...zs,...Io,...ao,...On,...Gs,...Dn,...Jr];const Ry=new Set(["installationTopology",...ta,...Jr,"trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites","cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"]),Zt=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource",...bn]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...pe.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],Ys=1,Bo=[...new Set(Zt.flatMap(e=>e.keys))],gd=new Set(Bo),md=5e3,hd=3e4,fd=6e4,Vo=12e3,Fn=4e3,bd=1500,vd=3e4,yd=3e4,wd=1e3,ra=3e4,Ri=250,Sd=750,qd=22,kd=qd/1.7,Td=360/3.2,Ho="2000-01-01 00:00:00",Xt=24,yn=[3,12,24,72,168,336,720],o={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:$d(),devPanelOpen:Hd(),nativeOpen:Ad()==="native",currentStep:"generation",quickStartModalMode:"wizard",settingsGroup:Md(),appView:"",overviewTheme:Cd(),hpVisualMode:Nd(),hpLayoutMode:Ld(),trendWindowHours:Dd(),trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryRequestQuery:"",energyHistoryFetchQuery:"",energyHistoryFetchPromise:null,energyHistoryView:"day",energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:"",settingsStorageDetailsOpen:!1,energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""},deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",firmwareOtaQuietUntil:0,firmwareOtaQuietTimer:null,entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:_h(),debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null,complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:"",updateModalOpen:!1,systemModal:"",authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftBaseTopic:"openquatt",mqttDraftPublishProfile:"standard",mqttDraftEssentialIntervalS:"10",mqttDraftStandardIntervalS:"30",mqttDraftDiagnosticIntervalS:"60",mqttDraftRetainSnapshots:!0,mqttBusy:!1,mqttNotice:"",mqttError:"",updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchOpen:!1,firmwareTopologySwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:"",draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:xd(),motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}};function Cd(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function Ed(e){o.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",o.overviewTheme)}catch{}}function $d(){return!1}function fr(e){o.interfacePanelOpen=e===!0}function Ad(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function Js(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function Hd(){try{return window.localStorage.getItem("oq-dev-panel-open")==="true"}catch{return!1}}function Md(){try{const e=window.localStorage.getItem("oq-settings-group");return Ve.has(e)?e:qe[0].id}catch{return qe[0].id}}function gn(e,t={}){o.settingsGroup=Ve.has(e)?e:qe[0].id;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}t.syncUrl!==!1&&o.appView==="settings"&&ol(t.syncMode||"replace")}function Pd(e){o.devPanelOpen=e===!0;try{window.localStorage.setItem("oq-dev-panel-open",o.devPanelOpen?"true":"false")}catch{}}function Nd(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function Rd(e){o.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",o.hpVisualMode)}catch{}}function Ld(){try{const e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function Od(e){o.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",o.hpLayoutMode)}catch{}}function Dd(){try{const e=Number(window.localStorage.getItem("oq-trend-window-hours"));return yn.includes(e)?e:Xt}catch{return Xt}}function Zs(){const e=o.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;const t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function Fd(){return Zs()?yn:yn.filter(e=>e<=168)}function aa(e){const t=Fd(),n=Number(e);return t.includes(n)?n:Number.isFinite(n)&&n>t[t.length-1]?t[t.length-1]:t.includes(Xt)?Xt:t[0]}function ia(e){o.trendWindowHours=aa(e);try{window.localStorage.setItem("oq-trend-window-hours",String(o.trendWindowHours))}catch{}}function eo(){return"overview"}function Xs(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function xd(){return!!Xs()?.matches}function Id(e){if(o.reducedMotion=!!e?.matches,o.reducedMotion){sa();return}ga()}function Wd(){const e=Xs();!e||o.motionPreferenceMedia===e||(o.motionPreferenceMedia=e,o.motionPreferenceListener=Id,typeof e.addEventListener=="function"?e.addEventListener("change",o.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(o.motionPreferenceListener),o.reducedMotion=!!e.matches)}function Bd(){return Object.keys(o.entities).length>0}function sa(){o.motionFrame&&(window.cancelAnimationFrame(o.motionFrame),o.motionFrame=0),o.motionStartedAt=0,da()}function Vd(){return Ri+Math.floor(Math.random()*(Sd-Ri+1))}function _d(){return(document.hidden?ra:md)+Vd()}function el(e=_d()){o.pollTimer||o.nativeOpen||o.updateInstallBusy||gl()||(o.pollTimer=window.setTimeout(async()=>{o.pollTimer=null,await ie(),el()},e))}function xn(){el()}function la(){o.pollTimer&&(window.clearTimeout(o.pollTimer),o.pollTimer=null)}function jd(){o.nativeOpen||(la(),xn(),document.hidden||ie({forceProbe:!0}))}function ca(e={}){if(Sn(),o.nativeOpen){la(),sa(),o.nativeFrontendLoaded||Hr();return}if(ga(),xn(),e.refresh!==!1){if(!Bd()){dm();return}ie(o.appView==="settings"?{forceBulk:!0}:{forceFast:!0})}}function Mo(e){return e==="trends"&&(e="diagnosis"),!ad.has(e)||e==="diagnosis"&&!po()?"":e}function wn(e){return String(e||"").trim().toLowerCase()}function ua(){try{const e=new URL(window.location.href),t=wn(e.searchParams.get("view")||""),n=Mo(t);if(n)return n;const r=wn(e.hash.replace(/^#/,""));return Mo(r)||""}catch{return""}}function tl(){try{const e=new URL(window.location.href),t=wn(e.searchParams.get("section")||"");if(Ve.has(t))return t;const n=wn(e.searchParams.get("group")||"");return Ve.has(n)?n:""}catch{return""}}function ol(e="replace"){try{const t=new URL(window.location.href),n=Mo(o.appView)||eo();if(t.searchParams.set("view",n),n==="settings"){const a=Ve.has(o.settingsGroup)?o.settingsGroup:qe[0].id;t.searchParams.set("section",a),t.searchParams.delete("group")}else t.searchParams.delete("section"),t.searchParams.delete("group");t.hash&&Mo(t.hash.replace(/^#/,""))&&(t.hash="");const r=e==="push"?"pushState":"replaceState";window.history[r]({oqView:n,oqSettingsSection:n==="settings"?o.settingsGroup:""},"",t.toString())}catch{}}function Et(e,t={}){const n=Mo(e)||eo(),r=t.syncMode||"replace",a=o.appView!==n;o.appView=n,(a||t.forceSync)&&ol(r)}function Kd(){const e=ua()||eo(),t=e==="settings"?tl()||o.settingsGroup:"";if(!(e===o.appView&&(e!=="settings"||t===o.settingsGroup))){if(o.appView=e,e==="settings"&&t){o.settingsGroup=t;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}}p(),ie(e==="settings"?{forceBulk:!0}:{forceFast:!0})}}function Sn(){o.nativeApp&&(o.nativeApp.classList.add("oq-native-app"),o.nativeApp.classList.toggle("oq-native-app--collapsed",!o.nativeOpen),o.nativeApp.setAttribute("aria-hidden",o.nativeOpen?"false":"true"))}function Ud(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Li,{once:!0}):Li(),window.addEventListener("pointermove",Sm),window.addEventListener("pointerup",qm),window.addEventListener("popstate",Kd),window.addEventListener("oq-mock-updated",zd),window.addEventListener("oq-dev-controls-changed",Gd),document.addEventListener("visibilitychange",jd)}function zd(){o.mounted&&ie()}function Gd(){o.mounted&&p()}function Li(){Qd();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),o.nativeApp=e,o.nativeFrontendLoaded=Array.from(document.scripts).some(t=>t.src===Ls),o.mounted||(Yd(e),o.mounted=!0,ca()),Sn(),o.nativeOpen||(ie(),Ya({silent:!0}))}function Qd(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function Yd(e){const t=document.createElement("section");t.id="oq-helper-root",t.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(t,e),t.addEventListener("click",ym),t.addEventListener("change",vm),t.addEventListener("input",mm),t.addEventListener("keydown",hm),t.addEventListener("wheel",bm,{passive:!1}),t.addEventListener("focusin",Ji),t.addEventListener("focusout",Ji),t.addEventListener("mouseover",pm),t.addEventListener("mouseout",gm),t.addEventListener("pointerdown",wm),o.root=t,Wd();const n=ua()||eo(),r=n==="settings"?tl():"";r&&gn(r,{syncUrl:!1}),Et(n,{syncMode:"replace",forceSync:!0}),da(),p()}function Jd(e){return new Promise((t,n)=>{if(!e){t();return}const r=Array.from(document.scripts).find(i=>i.src===e);if(r){if(r.dataset.loaded==="true"){t();return}r.addEventListener("load",()=>t(),{once:!0}),r.addEventListener("error",i=>n(i),{once:!0});return}const a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",t()},{once:!0}),a.addEventListener("error",i=>n(i),{once:!0}),document.head.appendChild(a)})}async function Hr(){if(!(o.nativeFrontendLoaded||o.nativeFrontendLoading)){o.nativeFrontendLoading=!0,o.nativeOpen&&p();try{await Jd(Ls),o.nativeFrontendLoaded=!0}catch(e){o.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,o.nativeOpen=!1,Js("app"),p(),ca()}finally{o.nativeFrontendLoading=!1,o.nativeOpen&&p()}}}function Oi(){if(!o.root)return;const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;!e||typeof e.bind!="function"||e.bind(o.root)}function da(){o.root&&(o.root.style.removeProperty("--oq-flow-offset"),o.root.style.removeProperty("--oq-flow-offset-reverse"),o.root.style.removeProperty("--oq-fan-rotation"),o.root.getAttribute("style")||o.root.removeAttribute("style"))}function pa(){return o.motionTargets={pipeFlows:[],fanBlades:[]},o.root?(o.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(r=>{r.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{o.motionTargets.fanBlades.push(a)})}),o.motionTargets.pipeFlows.length+o.motionTargets.fanBlades.length):0}function Zd(){return o.motionTargets.pipeFlows.length>0||o.motionTargets.fanBlades.length>0}function nl(e=performance.now()){if(!o.root||o.reducedMotion||!Zd()&&pa()===0)return!1;o.motionStartedAt||(o.motionStartedAt=e);const t=(e-o.motionStartedAt)/1e3,n=t*Td%360;return o.motionTargets.pipeFlows.forEach(r=>{const a=r.dataset.oqFlowVariant==="water"?.42:1,i=-(t*kd*a);r.style.strokeDashoffset=`${i.toFixed(3)}px`}),o.motionTargets.fanBlades.forEach(r=>{r.style.transform=`rotate(${n.toFixed(3)}deg)`}),!0}function rl(e){if(!nl(e)){o.motionFrame=0,o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(rl)}function ga(){if(o.motionFrame||o.reducedMotion||pa()===0)return;const e=performance.now();if(o.motionStartedAt=e,!nl(e)){o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(rl)}function Pt(){const e=window.location.pathname.replace(/\/$/,"");return e===""?"":e}function z(e,t,n=""){const r=n?`/${n}`:"";return`${Pt()}/${e}/${encodeURIComponent(t)}${r}`}function ce(e=C("strategy")){return String(e||"").includes("Water Temperature Control")}function Xd(e=C("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function ht(){return typeof window<"u"&&window.__OQ_DEV_META&&typeof window.__OQ_DEV_META=="object"?window.__OQ_DEV_META:{}}function ep(){const e=String(C("hpGeneration")||"").trim();return e||""}function qn(e){const t=String(e||"").trim().toLowerCase();return t==="single"||t.includes("quatt single")||t.includes("openquatt single")?"single":t==="duo"||t.includes("quatt duo")||t.includes("openquatt duo")?"duo":""}function tp(){if(!Array.isArray(dn))return"";if(dn.some(t=>y(t)))return"duo";const e=o.optionalMissingEntities||{};return dn.every(t=>e[t])?"single":""}function br(e){const t=qn(e);return(t==="single"||t==="duo")&&typeof o<"u"&&o&&typeof o=="object"&&(o.lastKnownInstallationTopology=t),t}function op(){if(typeof o<"u"&&o&&typeof o=="object"){const e=String(o.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function Z(){const e=qn(C("installationTopology"));if(e==="single"||e==="duo")return br(e);const t=qn(ht().installation);if(t==="single"||t==="duo")return br(t);const n=tp();return n?br(n):op()}function _o(){const e=Z(),t=ep();return e==="single"?t?`Quatt Single ${t}`:"Quatt Single":e==="duo"?t?`Quatt Duo ${t}`:"Quatt Duo":t?`Quatt Hybrid ${t}`:"Quatt Hybrid"}function Me(){return"OpenQuatt"}function al(e){const t=String(e||"").trim().toLowerCase();return t==="wifi"||t==="wi-fi"||t.includes("wifi")||t.includes("wi-fi")?"wifi":t==="eth"||t==="ethernet"||t.includes("ethernet")?"eth":""}function Ie(e=Nt()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function Po(e=Z()){return e==="single"?"Single":e==="duo"?"Duo":"Onbekende opstelling"}function In(){const e=String(C("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(ht().hardwareProfile||e).trim().toLowerCase()}function Nt(){return al(C("connectionText")||ht().connection)}function np(){const e=Nt();return e==="wifi"?"eth":e==="eth"?"wifi":""}function rp(){const e=Z();return e==="single"?"duo":e==="duo"?"single":""}function ap(){const e=o.entities.firmwareUpdateTarget||{};return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function il(e){return ap().includes(e)}function No(e=Z(),t=Nt()){const n=Po(e),r=In();return r==="heatpump_controller_q"?`Heatpump Controller Q ${n} ${Ie(t)}`:r==="heatpump_listener"?`Heatpump Listener ${n} ${Ie(t)}`:r==="waveshare"?`Waveshare ${n} ${Ie(t)}`:`${Me()} ${n} ${Ie(t)}`}function ma(){const e=In(),t=Z(),n=Nt(),r=np();return e!=="heatpump_controller_q"||t!=="single"&&t!=="duo"||n!=="wifi"&&n!=="eth"||!r?null:{canSwitch:y("firmwareUpdateTarget")&&il("alternate connection")&&y("installFirmwareUpdateTarget"),currentConnection:n,targetConnection:r,currentLabel:Ie(n),targetLabel:Ie(r),currentBuildLabel:No(t,n),targetBuildLabel:No(t,r)}}function ha(){const e=In(),t=Z(),n=rp(),r=Nt(),a=e==="heatpump_controller_q"?["wifi","eth"]:["wifi"];return!["heatpump_controller_q","heatpump_listener","waveshare"].includes(e)||t!=="single"&&t!=="duo"||!n||!a.includes(r)?null:{canSwitch:y("firmwareUpdateTarget")&&il("alternate topology")&&y("installFirmwareUpdateTarget"),currentTopology:t,targetTopology:n,currentConnection:r,targetConnection:r,currentLabel:Po(t),targetLabel:Po(n),currentBuildLabel:No(t,r),targetBuildLabel:No(n,r)}}function Ro(e=o.updateTestFirmwarePr){const t=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(t)?t:""}function Wn(){const e=In(),t=Z(),n=Nt(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||t!=="single"&&t!=="duo"||!a.connections.includes(n))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};const i=`openquatt-${a.slug}-${t}-${n}`,l=t==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,md5FileName:`${i}.firmware.ota.bin.md5`,label:`${a.label} ${l} ${Ie(n)}`}}function fa(e=Ro(),t=Wn()){if(!e||!t.available)return null;const r=`${`https://github.com/jeroen85/OpenQuatt/releases/download/pr-${e}`}/${t.otaFileName}`;return{otaUrl:r,md5Url:`${r}.md5`,releaseApiUrl:`https://api.github.com/repos/jeroen85/OpenQuatt/releases/tags/pr-${e}`}}function sl(){const e=A("timeValid"),t=String(C("timeNowHhmm")||"").trim();if(t&&t!=="invalid")return t;if(y("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function ll(){return y("timeValid")&&!A("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${sl()}`}function an(e){if(!Number.isFinite(e)||e<0)return"\u2014";const t=Math.floor(e),n=Math.floor(t/1440),r=Math.floor(t%1440/60),a=t%60;return n>0?`${n}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function ip(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function sp(e){const t=e?.state;if(t!==""&&t!==null&&t!==void 0){const a=Number(t);if(Number.isFinite(a))return a}const n=e?.value,r=Number(n);return Number.isFinite(r)?r:NaN}function ba(){const e=sp(o.entities.uptime);if(Number.isFinite(e)&&e>=0){const r=ip(o.entities.uptime);if(r==="d")return an(e*1440);if(r==="h")return an(e*60);if(r==="s")return an(e/60)}const t=String(o.entities.uptimeReadable?.state??o.entities.uptimeReadable?.value??"").trim();if(t&&t.toLowerCase()!=="unknown")return t;const n=Number(ht().bootedAt);return!Number.isFinite(n)||n<=0?"\u2014":an((Date.now()-n)/6e4)}function va(){const e=String(o.entities.ipAddress?.state??o.entities.ipAddress?.value??"").trim();if(e)return e;const t=String(ht().ipAddress||"").trim();return t||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function jo(){if(Ae())return"Controleren";const e=Je();if(e)return e.phaseLabel;if(Sa())return"Bijgewerkt";if(Qt())return"Bezig";if(so())return"Beschikbaar";const t=ul();if(t!==null&&t<=0)return"Actueel";const n=ht();return typeof n.updateLabel=="string"&&n.updateLabel.trim()?n.updateLabel.trim():n.updateAvailable===!0?"Beschikbaar":n.updateAvailable===!1||ka()?"Actueel":se()?"Nog niet gecontroleerd":"\u2014"}function se(){return o.entities.firmwareUpdate||null}function Bn(){const e=se();return e?String(e.state??e.value??"").trim().toLowerCase():""}function lp(){const e=o.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function Vn(){return lp().toLowerCase()}function cl(){const e=o.entities.firmwareUpdateProgress;if(!e)return Number.NaN;const t=Number(e.value??e.state);return Number.isNaN(t)?Number.NaN:Math.max(0,Math.min(100,t))}function ya(){const e=String(o.updateInstallTargetVersion||"").trim(),t=oe();return!e||!t?!1:Uo(t,e)>=0}function cp(e=se()||{}){const t=Ht(e),n=oe(e);return!t||!n?!1:Uo(n,t)>=0}function wa(){return(ya()||cp())&&!Ae()&&!Co()&&!so()}function Sa(){return(o.updateInstallCompleted||wa())&&!Ae()&&!Je()&&!so()}function Ko(){o.updateInstallBusy=!1,o.updateInstallTargetVersion="",o.updateInstallPhaseHint="",o.updateInstallProgressHint=Number.NaN,o.updateInstallMode="",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",fp()}function be(){o.updateManualUploadFile=null,o.updateManualUploadFileName="",o.updateManualUploadError=""}function xe(e={}){e.clearPr&&(o.updateTestFirmwarePr=""),o.updateTestFirmwareConfirmed=!1,o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null}function up(){const e=Vn(),t=cl();if(e==="starting"||e==="uploading"||e==="rebooting"){o.updateInstallPhaseHint=e,Number.isNaN(t)||(o.updateInstallProgressHint=e==="rebooting"?Math.max(t,100):t);return}if(o.updateInstallBusy){if(ya()){o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100;return}o.controlNotice.includes("opnieuw is opgestart")&&(o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100)}}function Co(){const e=Vn();return e==="starting"||e==="uploading"||e==="rebooting"}function Je(){up();const e=Vn(),t=e==="starting"||e==="uploading"||e==="rebooting",n=t?e:o.updateInstallPhaseHint,r=cl(),a=Number.isNaN(o.updateInstallProgressHint)?0:Math.round(o.updateInstallProgressHint),i=t&&!Number.isNaN(r)?Math.round(r):a;return!Co()&&!o.updateInstallBusy?null:n==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:o.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":o.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":o.updateInstallMode==="topology-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna met de gekozen opstelling terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:n==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${Me()} gedownload en ge\xEFnstalleerd.`:o.updateInstallMode==="connection-switch"?`De ${Ie(o.updateInstallTargetConnection)}-build wordt nu naar ${Me()} verzonden.`:o.updateInstallMode==="topology-switch"?`De ${No(o.updateInstallTargetTopology,o.updateInstallTargetConnection)}-build wordt nu naar ${Me()} verzonden.`:`Firmware wordt nu naar ${Me()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${Me()}.`:o.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${Ie(o.updateInstallTargetConnection)} is gestart.`:o.updateInstallMode==="topology-switch"?`Opstellingswissel naar ${Po(o.updateInstallTargetTopology)} is gestart.`:`OTA-update is gestart voor ${Me()}.`}}function Ht(e=se()||{}){const t=String(e.latest_version||"").trim();if(t)return t;const n=String(e.value||"").trim(),r=String(e.current_version||"").trim();return n&&n!==r&&/^v/i.test(n)?n:""}function oe(e=se()||{}){const t=String(o.entities.projectVersionText?.state||o.entities.projectVersionText?.value||"").trim();return t||String(e.current_version||"").trim()}function dp(e=se()||{}){const t=oe(e),n=String(e.current_version||"").trim();return!t||!n||t===n?!1:Uo(t,n)>0}function qa(e=se()||{},t=ut()){const n=String(t||"").trim().toLowerCase(),r=String(e.release_url||"").trim().toLowerCase(),a=Ht(e).toLowerCase();if(!n||n==="\u2014")return!0;if(n==="dev"){if(r){if(r.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(n==="main"){if(r){if(r.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function Di(e){const n=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return n?{major:Number(n[1]),minor:Number(n[2]),patch:Number(n[3]),prereleaseTag:n[4]||"",prereleaseNumber:n[5]?Number(n[5]):null}:null}function Uo(e,t){const n=Di(e),r=Di(t);if(!n||!r)return 0;if(n.major!==r.major)return n.major>r.major?1:-1;if(n.minor!==r.minor)return n.minor>r.minor?1:-1;if(n.patch!==r.patch)return n.patch>r.patch?1:-1;const a=!n.prereleaseTag,i=!r.prereleaseTag;return a!==i?a?1:-1:n.prereleaseTag!==r.prereleaseTag?n.prereleaseTag>r.prereleaseTag?1:-1:n.prereleaseNumber!==r.prereleaseNumber?(n.prereleaseNumber||0)>(r.prereleaseNumber||0)?1:-1:0}function Qt(){if(wa())return!1;const e=Bn();return o.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function Ae(){const e=Bn();return o.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function so(){const e=Bn();if(!qa())return!1;const t=ul();return t!==null?t>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:ht().updateAvailable===!0}function ka(){const e=Bn();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||dp()}function Ta(){const e=se()||{},t=oe(e)||"\u2014";let n=qa(e)?Ht(e):"";const r=n?Uo(n,t):null;return!Ae()&&r!==null&&r<=0&&(n=""),{current:t,latest:n||"\u2014"}}function ul(){const{current:e,latest:t}=Ta();return e==="\u2014"||t==="\u2014"?null:Uo(t,e)}function dl(e=ut()){const t=String(e||"").trim().toLowerCase();return Ni[t]||Ni.main}function pp(){const e=String((se()||{}).release_url||"").trim(),t=dl();return!e||t.includes("/dev-latest")&&!e.includes("/dev-latest")||!t.includes("/dev-latest")&&e.includes("/dev-latest")?t:e}function gp(){return Me()}function ut(){return String(C("firmwareUpdateChannel")||o.entities.releaseChannelText?.state||o.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function mp(){return Ta().latest!=="\u2014"}function Fi(e){return String(e||"").toLowerCase().replace(/wi[\s-]?fi/g,"wifi").replace(/[^a-z0-9]+/g,"")}function hp(e,t=se()||{}){const n=Fi(e);return n?Fi(`${t.title||""} ${t.summary||""}`).includes(n):!0}function pl(e){return new Promise(t=>window.setTimeout(t,e))}function gl(e=Date.now()){return Number(o.firmwareOtaQuietUntil||0)>e}function _n(e=Vo){const n=Date.now()+e;o.firmwareOtaQuietUntil=Math.max(Number(o.firmwareOtaQuietUntil||0),n),o.pendingEntitySyncOptions=null,la(),typeof Ge=="function"&&Ge(),o.firmwareOtaQuietTimer&&window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=window.setTimeout(()=>{o.firmwareOtaQuietTimer=null,o.firmwareOtaQuietUntil=0,!o.updateInstallBusy&&!o.nativeOpen&&xn()},e)}function fp(){o.firmwareOtaQuietTimer&&(window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=null),o.firmwareOtaQuietUntil=0,o.nativeOpen||xn()}const bp=1500;function Ca(){o.deviceReconnectRecoveryTimer&&(window.clearTimeout(o.deviceReconnectRecoveryTimer),o.deviceReconnectRecoveryTimer=null)}function Rt(){return Number(o.deviceReconnectRecoveryStartedAt||0)>0}function vp(){return Rt()?Number(o.deviceReconnectRecoveryStartedAt||0):Number(o.deviceReconnectStartedAt||0)}function yp(){return Rt()?"Gegevens verversen":"Wachten op gegevens"}function wp(){const e=vp(),t=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return Rt()?t>0?`${t}s aan het verversen`:"Net weer online":t>0?`${t}s bezig`:"Net gestart"}function xi(){if(!o.deviceReconnectMode||Rt())return!1;Ca(),o.deviceReconnectRecoveryStartedAt=Date.now(),o.deviceReconnectLastError="",o.entitySyncFailureCount=0;const e=o.deviceReconnectRecoveryStartedAt;return o.deviceReconnectRecoveryTimer=window.setTimeout(()=>{o.deviceReconnectMode&&Number(o.deviceReconnectRecoveryStartedAt||0)===e&&(ml(),p())},bp),p(),!0}function Ea(e="reconnect",t=""){o.deviceReconnectMode||(o.deviceReconnectStartedAt=Date.now()),Ca(),o.deviceReconnectMode=e,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError=t?String(t):o.deviceReconnectLastError,o.systemModal="",o.updateModalOpen=!1,o.controlError=""}function ml(){Ca(),!(!o.deviceReconnectMode&&!o.entitySyncFailureCount)&&(o.deviceReconnectMode="",o.deviceReconnectStartedAt=0,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError="",o.entitySyncFailureCount=0)}function Sp(){return Rt()?"OpenQuatt is weer online":o.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":o.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function qp(){return Rt()?o.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":o.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":o.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function kp(){return o.deviceReconnectMode?`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="reconnect">
        <section class="oq-helper-modal oq-helper-modal--reconnect" role="status" aria-live="polite" aria-labelledby="oq-reconnect-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-reconnect-modal-title">${s(Sp())}</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">${s(qp())}</p>
          <div class="oq-helper-reconnect-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>${s(yp())}</strong>
              <span>${s(wp())}</span>
            </div>
          </div>
        </section>
      </div>
    `:""}function $a(e=ut()){const t=se()||{},n=oe(t);o.entities.firmwareUpdate={...t,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:dl(e),current_version:n}}async function Aa(e={}){const t=String(e.expectedBuildLabel||"").trim();for(let n=0;n<6;n+=1){await pl(n===0?900:1200),await I(na,"all",{forceMissing:!0});const r=qa(),a=!t||hp(t),i=mp(),l=Ae(),c=jo();if(r&&a&&(i||!l&&c!=="Nog niet gecontroleerd"))return!0}return!1}async function zo(e={}){let t=!1;const n=Number.isFinite(Number(e.initialDelayMs))?Math.max(0,Number(e.initialDelayMs)):700,r=Number.isFinite(Number(e.pollDelayMs))?Math.max(250,Number(e.pollDelayMs)):1e3;for(let a=0;a<45;a+=1){await pl(a===0?n:r);try{if(await I(na,"all",{forceMissing:!0}),Vn()==="rebooting"&&Ea("ota"),p(),o.updateInstallMode==="connection-switch"){const i=al(o.updateInstallTargetConnection);if(i&&Nt()===i&&!Co()&&!Qt())return!0}else if(o.updateInstallMode==="topology-switch"){const i=qn(o.updateInstallTargetTopology);if(i&&Z()===i&&!Co()&&!Qt())return!0}else if(ya()||wa()||ka()&&!Co()&&!Qt())return!0}catch{t||(o.controlNotice="Wachten tot het device opnieuw is opgestart...",p(),t=!0)}}return!1}function Tp(){const e=ut(),t=Je();if(t)return t.copy;if(Sa()){const n=o.updateInstallCompletedVersion||oe()||ut();return`${Me()} draait nu op ${n}.`}return Qt()?`OTA-update wordt voorbereid voor ${Me()}. Het device kan kort herstarten.`:Ae()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:so()?"Er staat een nieuwere firmware klaar.":ka()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function hl(){return!!(o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen)}function sn(e,t,n,r,a=!1){return`
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
    `}function Cp(e,t,n,r){if(!hl())return"";const i=!!(Je()||o.updateInstallBusy||Ae());return`
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
        ${Ep()}
        ${$p()}
        ${Hp()}
        ${Ap()}
      </div>
    `}function Ep(){const e=ma();if(!e||!o.firmwareConnectionSwitchOpen)return"";const n=!!(Je()||o.updateInstallBusy||Ae()),r=!!o.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",c=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s(ut())}-build voor de andere netwerkverbinding.</span>
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
        ${c}
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
    `}function $p(){const e=ha();if(!e||!o.firmwareTopologySwitchOpen)return"";const n=!!(Je()||o.updateInstallBusy||Ae()),r=!!o.firmwareTopologySwitchConfirmed,a=!e.canSwitch,i=e.targetTopology==="duo",l=i?"Controleer eerst dat de tweede warmtepomp is aangesloten en geconfigureerd. Na de herstart bevat deze firmware HP2-regeling en HP2-diagnostiek.":"Na de herstart verdwijnt HP2-regeling en HP2-diagnostiek uit deze firmware. Gebruik dit alleen als deze controller als Single-installatie verder moet draaien.",c=a?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Opstellingswissel vereist firmware met de target-optie alternate topology. Werk eerst normaal bij als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Opstelling wisselen</strong>
          <span>Installeer dezelfde ${s(ut())}-build voor de andere Single/Duo-opstelling.</span>
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
        ${c}
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
    `}function Ap(){if(!o.updateTestFirmwareOpen)return"";const t=!!(Je()||o.updateInstallBusy||Ae()),n=Ro(),r=Wn(),a=fa(n,r),i=!!(r.available&&y("firmwareTestOtaUrl")&&y("firmwareTestOtaMd5Url")&&y("installFirmwareTestOta")),l=!!(n&&i),c=o.updateTestFirmwareBuild||null,u=r.available?r.label:r.error,d=a?r.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
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
            <strong class="oq-helper-modal-value">${s(u)}</strong>
          </div>
          <div class="oq-firmware-advanced-card oq-firmware-test-card--asset">
            <span class="oq-helper-modal-label">OTA-bestand</span>
            <strong class="oq-helper-modal-value" data-oq-firmware-test-asset-note="true">${s(d)}</strong>
          </div>
          ${c?`
            <div class="oq-firmware-advanced-card oq-firmware-test-card--build" data-oq-firmware-test-build-row="true">
              <span class="oq-helper-modal-label">Build</span>
              <strong class="oq-helper-modal-value">${s(c)}</strong>
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
    `}function Hp(){if(!o.updateManualUploadOpen)return"";const t=!!(Je()||o.updateInstallBusy||Ae()),n=String(o.updateManualUploadFileName||o.updateManualUploadFile?.name||"").trim();return`
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
    `}function Mr(){return[o.interfacePanelOpen?"open":"closed",o.nativeOpen?"native":"app",o.appView,o.complete?"complete":"incomplete",o.overviewTheme,o.hpVisualMode,ae("installationTopology"),ae("hardwareProfileText"),ae("connectionText"),o.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",o.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",o.firmwareTopologySwitchOpen?"topology-open":"topology-closed",o.updateManualUploadOpen?"upload-open":"upload-closed",o.updateTestFirmwareOpen?"test-open":"test-closed",o.updateTestFirmwareError,ae("hpGeneration"),ae("projectVersionText"),ae("releaseChannelText"),Ha()].join("|")}function Ha(){const e=Math.max(Number(o.lastEntityResponseAt||0),Number(o.lastEntitySyncAt||0)),t=Number(o.deviceReconnectStartedAt||0);return o.entitySyncFailureCount>0&&!o.deviceReconnectMode?"Bezig":e>0&&(!o.deviceReconnectMode||e>=t)?"Verbonden":o.deviceReconnectMode?Rt()?"Verbonden":o.deviceReconnectMode==="reconnect"?"Offline":"Bezig":y("status")&&!A("status")?"Offline":"Bezig"}function fl(){return String(C("projectVersionText")||"").trim()||"\u2014"}function Mp(){const e=fl();return e&&e!=="\u2014"?e:jo()}function bl(){const e=o.entities.espInternalTemp;if(!e)return"\u2014";const t=M("espInternalTemp");return Number.isNaN(t)?B("espInternalTemp"):x(t,1,e.uom||" \xB0C")}function Ma(){const e=o.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function Pp(){return"Login"}function Np(){const e=o.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function Pa(){const e=o.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function Rp(){return"ESPHome API encryption"}function Lp(){const e=o.apiSecurityStatus;return e?e.pending_restart?"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.key?"De sleutel blijft opgeslagen, ook wanneer encryptie uit staat. Je kunt hem hier meteen kopi\xEBren of opnieuw inschakelen.":"Er is nog geen API-sleutel opgeslagen. Deze wijziging wordt actief na herstart.":"We halen de huidige API-beveiliging op."}function Op(){const e=o.apiSecurityStatus;return e?e.enabled?"Uitschakelen":"Inschakelen":"Laden..."}function Dp(){const e=o.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function fe(e,t,n="",r=!1){return`
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
    `}function Fp(){const e=o.apiSecurityStatus||{},t=e.enabled===!0,n=!!e.key,r=!!e.pending_restart,a=o.apiSecurityNotice,i=o.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.apiSecurityError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${s(Rp())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(Lp())}</p>
          ${a?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(a)}</span></div>`:""}
          ${i}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(Xa())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(ei())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${t?"disable-api-security":"enable-api-security"}"
                ${o.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${s(Op())}
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
                      ${s(Dp())}
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
    `}function xp(){const e=o.mqttStatus||{},t=!o.mqttStatus,n=o.mqttNotice,r=o.mqttBusy,a=r||t,i=String(o.mqttDraftBroker||""),l=String(o.mqttDraftBaseTopic||""),c=String(o.mqttDraftUsername||""),u=String(o.mqttDraftPassword||""),d=String(o.mqttDraftEssentialIntervalS||"10"),g=String(o.mqttDraftStandardIntervalS||"30"),f=String(o.mqttDraftDiagnosticIntervalS||"60");return`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--top${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
          ${n?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(n)}</span></div>`:""}
          ${o.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.mqttError)}</div>`:""}
          <div class="oq-helper-modal-grid oq-mqtt-status-grid">
            ${t?`
                ${fe("Status","Laden...","MQTT-configuratie wordt opgehaald.",!0)}
                ${fe("Broker","Laden...","Even wachten op de actuele brokerinstellingen.",!0)}
                ${fe("Base topic","Laden...","Even wachten op de actuele topicinstelling.",!0)}
                ${fe("Publish-profiel","Laden...","Even wachten op het actieve publish-profiel.",!0)}
                ${fe("Gebruiker","Laden...","Even wachten op de opgeslagen login.",!0)}
                ${fe("Retain snapshots","Laden...","Even wachten op de snapshot-instelling.",!0)}
              `:`
                ${fe("Status",Ia(),Wa())}
                ${fe("Broker",String(e.broker||"").trim()||"Geen broker",e.connected?"MQTT publiceert en ontvangt via deze broker.":"Nog geen actieve verbinding.")}
                ${fe("Base topic",String(e.base_topic||"").trim()||"openquatt","Alle compacte telemetry-topics hangen hieronder.")}
                ${fe("Publish-profiel",Wl(e.publish_profile),`Essential: ${Number(e.essential_interval_s||10)}s, Standard: ${Number(e.standard_interval_s||30)}s, Diagnostic: ${Number(e.diagnostic_interval_s||60)}s`)}
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
                  <input type="checkbox" data-oq-mqtt-field="enabled" ${o.mqttDraftEnabled?"checked":""} ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Broker</span>
                  <input class="oq-helper-input" type="text" inputmode="url" autocomplete="off" spellcheck="false" data-oq-mqtt-field="broker" value="${s(i)}" placeholder="mqtt.example.local" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Poort</span>
                  <input class="oq-helper-input" type="number" min="1" max="65535" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="port" value="${s(String(o.mqttDraftPort||"1883"))}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Gebruiker</span>
                  <input class="oq-helper-input" type="text" autocomplete="off" spellcheck="false" data-oq-mqtt-field="username" value="${s(c)}" placeholder="optioneel" ${a?"disabled":""}>
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
                    <option value="off" ${String(o.mqttDraftPublishProfile||"")==="off"?"selected":""}>Uit</option>
                    <option value="essential" ${String(o.mqttDraftPublishProfile||"")==="essential"?"selected":""}>Essential</option>
                    <option value="standard" ${String(o.mqttDraftPublishProfile||"")==="standard"?"selected":""}>Standard</option>
                    <option value="diagnostic" ${String(o.mqttDraftPublishProfile||"")==="diagnostic"?"selected":""}>Diagnostic</option>
                  </select>
                </label>
                <label class="oq-helper-modal-channel oq-helper-modal-channel--toggle oq-mqtt-setting-card oq-mqtt-setting-card--toggle">
                  <span class="oq-helper-modal-toggle-copy">
                    <span class="oq-helper-modal-label">Retain snapshots</span>
                    <span class="oq-helper-modal-subvalue">Bewaar de laatste schema-, state- en heat_pumps-snapshot op de broker.</span>
                  </span>
                  <input type="checkbox" data-oq-mqtt-field="retainSnapshots" ${o.mqttDraftRetainSnapshots?"checked":""} ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Essential interval</span>
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="essentialIntervalS" value="${s(d)}" ${a?"disabled":""}>
                </label>
                <label class="oq-helper-modal-channel oq-mqtt-field">
                  <span class="oq-helper-modal-label">Standard interval</span>
                  <input class="oq-helper-input" type="number" min="1" max="3600" step="1" inputmode="numeric" autocomplete="off" data-oq-mqtt-field="standardIntervalS" value="${s(g)}" ${a?"disabled":""}>
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
    `}function Ip(){const e=[["Netwerkstatus",Ha()],["IP-adres",va()]],t=String(C("wifiSsid")||"").trim();t&&e.push(["WiFi SSID",t]);const n=o.entities.wifiSignal;if(n){const r=M("wifiSignal");Number.isNaN(r)||e.push(["WiFi signaal",x(r,0,n.uom||" dBm")])}return e}function vl(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="webserverLog"?"open-webserver-log-modal":e==="login"?"open-login-modal":""}function yl(){return[["installation","Installatie",_o()],["uptime","Uptime",ba()],["connectivity","Connectiviteit",Ha()],["time","Tijd",sl()],["version","Versie",Mp(),!!se()],["debugRecording","Debugopname",Ih(),!0],["webserverLog","Logboek",rc(),!0]]}function wl(){return so()}function Sl(e){return e==="version"&&wl()}function ko(){return`
      <div class="oq-helper-status-grid">
        ${yl().map(([t,n,r,a])=>{const i=vl(t),l=!!(a||i),c=Sl(t);return`
          <${l?"button":"div"}
            class="oq-helper-status-item${l?" oq-helper-status-item--button":""}${c?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${s(t)}"
            ${l?`type="button" data-oq-action="${s(i)}"`:""}
          >
            <span class="oq-helper-status-label">${s(n)}</span>
            <strong class="oq-helper-status-value">${c?`<span class="oq-helper-status-value-text">${s(r)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(r)}</strong>
          </${l?"button":"div"}>
        `}).join("")}
      </div>
    `}function Pr(){if(!o.root)return!1;const e=o.root.querySelector(".oq-helper-status-grid");if(!e)return!!o.root.querySelector(".oq-helper-hub");const t=yl();if(e.querySelectorAll("[data-oq-header-status]").length!==t.length)return e.outerHTML=ko(),!0;for(const[r,a,i,l]of t){const c=e.querySelector(`[data-oq-header-status="${r}"]`);if(!c)return e.outerHTML=ko(),!0;const u=vl(r),d=!!(l||u);if(c.tagName.toLowerCase()!==(d?"button":"div"))return e.outerHTML=ko(),!0;const g=c.querySelector(".oq-helper-status-label"),f=c.querySelector(".oq-helper-status-value");if(!g||!f)return e.outerHTML=ko(),!0;g.textContent!==a&&(g.textContent=a);const h=Sl(r),w=h?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);f.innerHTML!==w&&(f.innerHTML=w),d?c.setAttribute("data-oq-action",u):c.removeAttribute("data-oq-action"),c.classList.toggle("oq-helper-status-item--button",d),c.classList.toggle("oq-helper-status-item--attention",h)}return!0}function Wp(){const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;return!e||typeof e.render!="function"?"":e.render()}function Ii(){const e=Wp();return e?o.devPanelOpen?`
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
      `:""}function Bp(){const e=o.nativeOpen?"native":"app",t=wl();return o.interfacePanelOpen?`
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
          ${ko()}
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
            ${vc()}
            <button
              class="oq-helper-hub-toggle${t?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >${Xr("more-horizontal","oq-helper-hub-toggle-icon")}${t?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function Vp(){if(!o.root)return;if(o.interfacePanelOpen){o.root.querySelector(".oq-debug-recording-header-status")?.remove(),Pr();return}const e=o.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;const t=e.querySelector(".oq-debug-recording-header-status"),n=vc();if(!n){t?.remove();return}if(t){t.outerHTML=n;return}e.insertAdjacentHTML("afterbegin",n)}function _p(){const e=o.nativeOpen?"native":"app",t=o.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",n=o.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(o.controlError)}</p>`:"";return`
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
    `}function jp(){const e=o.authStatus||{},t=e.enabled===!0,n=e.setup_window_active===!0,r=t||n,a=t?String(e.username||"").trim():"",i=o.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(o.authNotice)}</span></div>`:"",l=o.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.authError)}</div>`:"",u=r?`
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
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${s(Pp())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(Np())}</p>
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${fe("Beveiligingsstatus",Ma(),Pa())}
            ${fe("Gebruiker",t?a||"Geen naam":"Geen login",t?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${u}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.authBusy?"disabled":""}>Gereed</button>
            ${t?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${o.authBusy?"disabled":""}>Uitzetten</button>`:""}
            ${r?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${o.authBusy?"disabled":""}>${t?"Opslaan":"Login opslaan"}</button>`:""}
          </div>
        </section>
      </div>
    `}function Kp(){if(!o.updateModalOpen)return"";const e=se(),t=o.entities.firmwareUpdateChannel||null,{current:n,latest:r}=Ta(),a=Ae(),i=Qt(),l=so(),c=Tp(),u=Je(),d=Sa(),g=pp(),f=d?"Firmware-update afgerond":u||i?"Firmware-update bezig":a?"Controleren op firmware-update":gp(),h=t?Array.isArray(t.option)?t.option:Array.isArray(t.options)?t.options:[]:[],w=ma(),b=ha(),m=!!(w&&!d),S=!!(b&&!d);return`
      <div class="oq-helper-modal-backdrop${a||i||u?" is-busy":""}${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal oq-helper-modal--firmware oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${s(f)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(c)}</p>
          ${d?`
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
              <strong class="oq-helper-modal-value">${s(ut())}</strong>
            </div>
          </div>
          ${h.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${h.map(v=>`
                  <option value="${s(v)}" ${String(C("firmwareUpdateChannel")||"")===v?"selected":""}>${s(v)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||u?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${d?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||u||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${g?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(g)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${hl()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||u?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${Cp(m,w,S,b)}
        </section>
      </div>
    `}function Up(){if(o.systemModal==="login")return jp();if(o.systemModal==="api-security")return Fp();if(o.systemModal==="mqtt")return xp();if(o.systemModal==="connectivity"){const e=Ip();return`
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
      `}if(o.systemModal==="settings-backup-restore")return ub();if(o.systemModal==="settings-backup-import")return cb();if(o.systemModal==="history-storage")return tb();if(String(o.systemModal||"").startsWith("service-task-"))return Qf();if(o.systemModal==="settings-backup-success"){const e=o.controlNotice||"Backup hersteld.";return`
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
              ${mb()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;if(o.systemModal==="webserver-logs")return xh();if(o.systemModal==="debug-recording")return lf();if(o.systemModal==="openquatt-pause"){const e=A("openquattEnabled"),t=o.busyAction==="openquatt-regulation",n=y("openquattResumeAt"),r=o.loadingEntities||o.entitySyncInFlight,a=n||!r,i=Na(),l=Ra(C("openquattResumeAt")),c=Tl();return`
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
                        value="${s(c)}"
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
      `}return""}function C(e){if(Object.prototype.hasOwnProperty.call(o.drafts,e))return o.drafts[e];const t=o.entities[e];return t?t.value??t.state??"":""}function Ze(e){const t=o.entities[e]||{};return{min:Number(t.min_value??0),max:Number(t.max_value??100),step:Number(t.step??1),uom:t.uom||""}}function Le(e){return Object.prototype.hasOwnProperty.call(o.inputDrafts,e)?o.inputDrafts[e]:C(e)}function Ye(e){if(typeof e=="number")return e;const t=String(e??"").trim().replace(",",".");return!t||t==="-"||t==="."||t==="-."?Number.NaN:Number(t)}function lo(e){const t=String(e||"").trim();if(!t)return"";const n=t.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!n)return"";const r=Number(n[1]),a=Number(n[2]),i=Number(n[3]||"0");return[r,a,i].some(l=>Number.isNaN(l))||r<0||r>23||a<0||a>59||i<0||i>59?"":`${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Nr(e){const t=lo(e);return t?t.slice(0,5):""}function Xe(e){const t=String(e||"").trim();if(!t)return"";const n=t.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!n)return"";const r=Number(n[1]),a=Number(n[2]),i=Number(n[3]),l=Number(n[4]),c=Number(n[5]),u=Number(n[6]||"0");return[r,a,i,l,c,u].some(d=>Number.isNaN(d))||r<2e3||a<1||a>12||i<1||i>31||l<0||l>23||c<0||c>59||u<0||u>59?"":`${String(r).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(u).padStart(2,"0")}`}function Rr(e){const t=Xe(e);return!t||t===Ho?"":t.slice(0,16).replace(" ","T")}function ql(e){const t=Xe(e);if(!t||t===Ho)return null;const n=t.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!n)return null;const r=Number(n[1]),a=Number(n[2]),i=Number(n[3]),l=Number(n[4]),c=Number(n[5]),u=Number(n[6]),d=new Date(r,a-1,i,l,c,u,0);return Number.isNaN(d.getTime())?null:d}function Na(e=C("openquattResumeAt")){return!!ql(e)}function Ra(e,t=!1){const n=ql(e);return n?new Intl.DateTimeFormat("nl-NL",t?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(n):""}function Wi(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${t}-${n}-${r}T${a}:${i}`}function zp(e){const t=new Date(e.getTime());t.setSeconds(0,0);const n=t.getMinutes(),r=n%15;return r!==0&&t.setMinutes(n+(15-r)),t}function kl(e){const t=new Date;if(e==="2h"||e==="8h"){const n=e==="2h"?2:8,r=zp(new Date(t.getTime()+n*3600*1e3));return Wi(r)}if(e==="tomorrow-morning"){const n=new Date(t);return n.setDate(n.getDate()+1),n.setHours(7,0,0,0),Wi(n)}return""}function Tl(){const e=Rr(o.pauseResumeDraft);if(e)return e;const t=Rr(C("openquattResumeAt"));return t||kl("2h")}function Lt(){return[...new Set(["setupComplete",...Qs])]}const La=["trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","trendHistoryFlashAvailable","trendHistoryFlashOldest","trendHistoryFlashNewest","trendHistoryFlashLastFlush","trendHistoryFlashSize","trendHistoryFlashWrites","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear","lifetimeEnergyHistoryAvailable","lifetimeEnergyHistoryOldest","lifetimeEnergyHistoryNewest","lifetimeEnergyHistoryLastWrite","lifetimeEnergyHistorySize","lifetimeEnergyHistoryWrites"];function Eo(){return[...new Set(La)]}async function Oa(e={}){await I(Eo(),"all",{concurrency:Pn,forceMissing:e.forceMissing===!0}),await Mt({force:e.forceEnergyHistory===!0,metaOnly:!0})}function To(e=[250,1e3,2500]){e.forEach(t=>{window.setTimeout(()=>{o.nativeOpen||o.appView!=="settings"||Oa({forceMissing:t===0}).finally(()=>{o.appView==="settings"&&o.mounted&&!o.nativeOpen&&p()})},t)})}const Gp="@schema|openquatt.energy_history_import.v1",Qp=850,Yp={partition_unavailable:"Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",time_unavailable:"De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",empty_records:"Er zijn geen records verstuurd.",payload_too_large:"Deze importbatch is te groot. Probeer het bestand opnieuw te importeren."},wt={electricalInput:["electrical_input_wh","electricalInputWh","energy_hp_electric","hpElectric","hp_electric_wh","totalHpElectric"],heatingInput:["heating_input_wh","heatingInputWh"],coolingInput:["cooling_input_wh","coolingInputWh"],heatpumpHeatOutput:["heatpump_heat_output_wh","heatpumpHeatOutputWh","energy_hp_heat","hpHeat","hp_heat_wh","totalHpHeat"],heatpumpCoolingOutput:["heatpump_cooling_output_wh","heatpumpCoolingOutputWh"],boilerHeatOutput:["boiler_heat_output_wh","boilerHeatOutputWh","energy_boiler_heat","boilerHeat","boiler_heat_wh","totalBoilerHeat"],systemHeatOutput:["system_heat_output_wh","systemHeatOutputWh"]};function Cl(e=!1){const t=e?o.energyHistoryImportNotice:"";o.energyHistoryImportFileName="",o.energyHistoryImportSource="",o.energyHistoryImportRange="",o.energyHistoryImportRecords=[],o.energyHistoryImportHourRecords=[],o.energyHistoryImportDuplicateCount=0,o.energyHistoryImportSkippedCount=0,o.energyHistoryImportInvalidCount=0,o.energyHistoryImportUnsupportedCount=0,o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,o.energyHistoryImportError="",o.energyHistoryImportNotice=t}function Jp(e){if(e==null||e==="")return 0;const t=String(e).trim();let n=0,r=0,a=0;const i=t.match(/^(\d{4})(\d{2})(\d{2})$/),l=t.match(/^(\d{4})-(\d{2})-(\d{2})/);if(i)n=Number(i[1]),r=Number(i[2]),a=Number(i[3]);else if(l)n=Number(l[1]),r=Number(l[2]),a=Number(l[3]);else{const u=new Date(t);if(Number.isNaN(u.getTime()))return 0;n=u.getFullYear(),r=u.getMonth()+1,a=u.getDate()}if(n<2020||n>2099||r<1||r>12||a<1||a>31)return 0;const c=new Date(Date.UTC(n,r-1,a));return c.getUTCFullYear()!==n||c.getUTCMonth()!==r-1||c.getUTCDate()!==a?0:n*1e4+r*100+a}function Bi(e){const t=String(Math.round(Number(e)||0)).padStart(8,"0");return/^\d{8}$/.test(t)?`${t.slice(6,8)}-${t.slice(4,6)}-${t.slice(0,4)}`:""}function El(e){if(e==null||e==="")return null;const t=Number(String(e).trim().replace(",","."));return!Number.isFinite(t)||t<0||t>=4294967295?null:Math.round(t)}function St(e,t,n=null){for(const r of t){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const a=El(e[r]);if(a!==null)return a}return n}function $l(e){const t=Jp(e.date_key??e.dateKey??e.date??e.from??e.timestamp);if(!t)return null;const n=St(e,wt.electricalInput),r=St(e,wt.heatpumpHeatOutput);if(n===null||r===null)return null;const a=St(e,wt.heatingInput,n),i=St(e,wt.coolingInput,0),l=St(e,wt.heatpumpCoolingOutput,0),c=St(e,wt.boilerHeatOutput,0),u=St(e,wt.systemHeatOutput,r+l+c);return[a,i,l,c,u].some(d=>d===null)?null:{dateKey:t,electricalInputWh:n,heatingInputWh:a,coolingInputWh:i,heatpumpHeatOutputWh:r,heatpumpCoolingOutputWh:l,boilerHeatOutputWh:c,systemHeatOutputWh:u}}function Zp(e){const t=El(e.hour??e.hour_of_day??e.hourOfDay);if(t!==null&&t>=0&&t<=23)return t;if(e.timestamp){const n=new Date(String(e.timestamp));if(!Number.isNaN(n.getTime()))return n.getHours()}return-1}function Xp(e){const t=$l(e),n=Zp(e);return!t||n<0||n>23?null:{...t,hour:n}}function eg(e){const t=[];let n=[],r="",a=!1;const i=()=>{n.push(r),r=""},l=()=>{i(),n.some(u=>String(u).trim()!=="")&&t.push(n),n=[]};for(let u=0;u<e.length;u+=1){const d=e[u];a?d==='"'&&e[u+1]==='"'?(r+='"',u+=1):d==='"'?a=!1:r+=d:d==='"'?a=!0:d===","?i():d===`
`?l():d!=="\r"&&(r+=d)}if((r||n.length)&&l(),!t.length)return[];const c=t.shift().map(u=>String(u||"").trim());return t.map(u=>{const d={};return c.forEach((g,f)=>{g&&(d[g]=u[f]??"")}),d})}function tg(e){const t=[],n=[];if(Array.isArray(e))return t.push(...e),{dailyRows:t,hourlyRows:n,source:"JSON"};const r=String(e?.schema||e?.import_schema||"JSON").trim()||"JSON",a=Array.isArray(e?.days)?e.days:Array.isArray(e?.daily)?e.daily:Array.isArray(e?.openquatt_import?.daily)?e.openquatt_import.daily:[],i=Array.isArray(e?.hourly)?e.hourly:Array.isArray(e?.hours)?e.hours:Array.isArray(e?.openquatt_import?.hourly)?e.openquatt_import.hourly:[];return t.push(...a),n.push(...i),a.forEach(l=>{Array.isArray(l?.samples)&&l.samples.forEach(c=>{n.push({...c,date:c.date??l.date})})}),{dailyRows:t,hourlyRows:n,source:r}}function og(e,t){const n=String(t||"").trim();if(!n)throw new Error("Bestand is leeg.");let r=[],a=[],i="";if(n[0]==="{"||n[0]==="["){const b=tg(JSON.parse(n));r=b.dailyRows,a=b.hourlyRows,i=b.source}else{const b=eg(n);b.some(S=>Object.prototype.hasOwnProperty.call(S,"hour")||Object.prototype.hasOwnProperty.call(S,"hour_of_day")||Object.prototype.hasOwnProperty.call(S,"hourOfDay"))||String(e||"").toLowerCase().includes("hour")?a=b:r=b,i="CSV"}const l=new Map,c=new Map;let u=0,d=0;r.forEach(b=>{const m=$l(b);if(!m){d+=1;return}l.has(m.dateKey)&&(u+=1),l.set(m.dateKey,m)}),a.forEach(b=>{const m=Xp(b);if(!m){d+=1;return}const S=`${m.dateKey}:${m.hour}`;c.has(S)&&(u+=1),c.set(S,m)});const g=[...l.values()].sort((b,m)=>b.dateKey-m.dateKey),f=[...c.values()].sort((b,m)=>b.dateKey-m.dateKey||b.hour-m.hour);if(!g.length&&!f.length)throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");const h=[...g.map(b=>b.dateKey),...f.map(b=>b.dateKey)].sort((b,m)=>b-m),w=h.length?`${Bi(h[0])} t/m ${Bi(h[h.length-1])}`:"";return{records:g,hourRecords:f,source:i,range:w,duplicates:u,invalid:d}}function ng(e){return["day",e.dateKey,e.electricalInputWh,e.heatpumpHeatOutputWh,e.boilerHeatOutputWh].join("|")}function rg(e){const t=new Map;return e.forEach(n=>{t.has(n.dateKey)||t.set(n.dateKey,new Map),t.get(n.dateKey).set(n.hour,n)}),[...t.entries()].sort((n,r)=>n[0]-r[0]).map(([n,r])=>{let a=0;const i=[];for(let l=0;l<24;l+=1){const c=r.get(l);c&&(a|=1<<l),i.push(c?.electricalInputWh??0,c?.heatpumpHeatOutputWh??0,c?.boilerHeatOutputWh??0)}return["hourday",n,a,...i].join("|")})}function Al(e){const t=new URLSearchParams;return t.set("records",[Gp,...e].join(`
`)),t}function ag(e){const t=[];let n=[];return e.forEach(r=>{const a=[...n,r];n.length&&String(Al(a)).length>Qp?(t.push(n),n=[r]):n=a}),n.length&&t.push(n),t}function ig(e){const t=[];e.written>0&&t.push(`${e.written} dagrecords`),e.hourWritten>0&&t.push(`${e.hourWritten} uurdagen`);const n=t.length?`${t.join(" en ")} ge\xEFmporteerd.`:"Geen nieuwe records ge\xEFmporteerd.",r=[];return e.duplicates>0&&r.push(`${e.duplicates} al aanwezig`),e.skipped>0&&r.push(`${e.skipped} overgeslagen`),e.invalid>0&&r.push(`${e.invalid} ongeldig`),e.unsupported>0&&r.push(`${e.unsupported} onbekend`),r.length?`${n} (${r.join(", ")}.)`:n}async function sg(e){const t=await fetch(`${Pt()}/energy/history/import`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:Al(e)}),n=await t.text();let r={};try{r=n?JSON.parse(n):{}}catch{r={}}if(!t.ok||r.ok===!1){const a=r.error?String(r.error):"";throw new Error(Yp[a]||a||`HTTP ${t.status}`)}return r}function lg(e,t){o.energyHistoryImportProgressPercent=t>0?Math.min(99,Math.max(1,Math.round(e/t*100))):0,p()}async function cg(e){if(Cl(),!e){p();return}o.energyHistoryImportFileName=e.name||"exportbestand";try{const t=og(e.name||"",await e.text());o.energyHistoryImportRecords=t.records,o.energyHistoryImportHourRecords=t.hourRecords,o.energyHistoryImportSource=t.source,o.energyHistoryImportRange=t.range,o.energyHistoryImportDuplicateCount=t.duplicates,o.energyHistoryImportInvalidCount=t.invalid}catch(t){o.energyHistoryImportError=`Bestand kon niet worden gelezen. ${t.message}`}p()}function ug(){const e=document.createElement("input");e.type="file",e.accept=".json,.csv,application/json,text/csv,text/plain",e.style.position="fixed",e.style.left="-1000px",e.style.top="0",e.addEventListener("change",()=>{const t=e.files&&e.files[0]?e.files[0]:null;window.setTimeout(()=>e.remove(),0),cg(t)},{once:!0}),document.body.appendChild(e),e.click()}async function dg(){if(o.energyHistoryImportBusy)return;const e=[...o.energyHistoryImportRecords.map(ng),...rg(o.energyHistoryImportHourRecords)];if(!e.length){o.energyHistoryImportError="Kies eerst een exportbestand met dag- of uurrecords.",p();return}if(o.energyHistoryImportBusy=!0,o.energyHistoryImportError="",o.energyHistoryImportNotice="",o.energyHistoryImportProgressPercent=1,p(),Ba()){const a=new Set(o.energyHistoryImportHourRecords.map(i=>i.dateKey)).size;o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,o.energyHistoryImportNotice=`Preview: ${o.energyHistoryImportRecords.length} dagrecords en ${a} uurdagen zouden worden ge\xEFmporteerd.`,p();return}const t=ag(e),n={written:0,hourWritten:0,duplicates:0,skipped:0,invalid:0,unsupported:0};let r=0;try{for(const a of t){const i=await sg(a);n.written+=Number(i.written||0),n.hourWritten+=Number(i.hour_written||0),n.duplicates+=Number(i.duplicates||0),n.skipped+=Number(i.skipped||0),n.invalid+=Number(i.invalid||0),n.unsupported+=Number(i.unsupported||0),r+=a.length,lg(r,e.length)}o.energyHistoryImportProgressPercent=100,o.energyHistoryImportNotice=ig(n),o.energyHistoryImportError="",o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,await Oa({forceMissing:!0,forceEnergyHistory:!0})}catch(a){o.energyHistoryImportError=`Importeren mislukt. ${a.message}`}finally{o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,p()}}function jn(){return o.appView==="settings"&&o.settingsGroup==="system"}function Hl(){return o.appView==="settings"&&o.settingsGroup==="integrations"}function pg(){const e=typeof window<"u"?Number(window.__OQ_DEV_LOAD_DELAY_MS||0):0;return Number.isFinite(e)&&e>0?e:0}const gg=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","silentModeOverride","totalHeat","totalCoolingPower"],mg=["strategy","controlModeLabel","hpGeneration"],hg=["totalPower","flowSelected"],fg=["totalHeat","totalCoolingPower"],bg=2e3,vg=250,Vi={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel"]},yg=5e3,wg=250,Sg=["installationTopology",...dn,"hpGeneration","openquattEnabled",...mt,...Ln,"boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...ao,...On,...gt,"maxWater",...Dn,"minRuntime"],qg={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...gt,...Ws,...Dn,...Gs,...bn,...vn,"maxWater",...Jr],service:[...ea,...ta,...bn,...vn,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...ao,...On,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...zs],integrations:[...Vs,...js,..._s,...Ks,...oa,...Us,...Bs],system:["setupComplete",...io,"firmwareUpdateChannel","projectVersionText","releaseChannelText",...La,"webServerLogHistoryEnabled","debugLevel"]};function Ml(e=o.settingsGroup){const t=Ve.has(e)?e:qe[0].id;return[...new Set(["setupComplete","strategy",...Pe,...qg[t]||[]])]}function Pl(){const e=Ve.has(o.settingsGroup)?o.settingsGroup:qe[0].id;return[...new Set(Vi[e]||Vi.installation)]}function kg(e={}){const t=o.pendingEntitySyncOptions||{},n={...t,...e};t.forceBulk||e.forceBulk?(n.forceBulk=!0,n.forceFast=!1):(t.forceFast||e.forceFast)&&(n.forceFast=!0),o.pendingEntitySyncOptions=n}function Da(e){const t=String(C(e)??"").trim().toLowerCase();return t!==""&&t!=="unknown"&&t!=="unavailable"&&t!=="nan"}function _i(e){return Da(e)&&Number.isFinite(Ye(C(e)))}function Fa(){return o.appView==="overview"||o.appView==="diagnosis"||o.appView==="energy"}function Tg(){return dd.filter(e=>{const t=o.entities[e];return t?!String(t.uom??t.unit_of_measurement??"").trim():!L[e]?.optional})}async function Nl(){if(o.nativeOpen||!Fa()||o.overviewMetadataHydrated||o.overviewMetadataHydrating)return!1;const e=Tg();if(!e.length)return o.overviewMetadataHydrated=!0,!1;o.overviewMetadataHydrating=!0;try{return await I(e,"all",{concurrency:At}),o.overviewMetadataHydrated=!0,!0}catch{return!1}finally{o.overviewMetadataHydrating=!1,o.mounted&&!o.nativeOpen&&p()}}function ji(){return Fa()?mg.every(Da)&&hg.every(_i)&&fg.some(_i):!0}function Cg(){return o.appView==="settings"}function Ki(){return Cg()?Pl().every(e=>L[e]?.optional&&!o.entities[e]?!0:Da(e)):!0}async function Eg(){if(ji())return;const e=Date.now()+bg;for(;!o.nativeOpen&&!ji()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,vg));try{await I(gg,"state")}catch{return}}}async function $g(){if(Ki())return;const e=Date.now()+yg;for(;!o.nativeOpen&&!Ki()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,wg));try{await I(Pl(),"all")}catch{return}}}function j(e,t=C(e)){if(t===""||t===null||Number.isNaN(Number(t)))return"\u2014";const n=Ze(e),r=n.step<1?Math.min(4,Math.max(1,String(n.step).split(".")[1]?.length||1)):0;return`${Number(t).toFixed(r)}${n.uom?` ${n.uom}`:""}`}function Se(e,t){const n=Ze(e),r=Ye(t);if(Number.isNaN(r)){const u=Ye(o.entities[e]?.value??o.entities[e]?.state??"");return Number.isNaN(u)?n.min:u}const a=Math.min(n.max,Math.max(n.min,r)),i=Math.round((a-n.min)/n.step),l=n.min+i*n.step,c=n.step<1?Math.min(4,Math.max(1,String(n.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(c))}function Rl(){const e=pe[Math.floor(pe.length/2-1)],t=pe[Math.floor(pe.length/2)];if(!e||!t||!y("curveFallbackSupply"))return null;const n=Se(e.key,C(e.key)),r=Se(t.key,C(t.key)),a=(n+r)/2,i=Se("curveFallbackSupply",a);return{value:i,label:j("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${t.label}).`,isCurrent:Se("curveFallbackSupply",C("curveFallbackSupply"))===i}}const Ag=8e3,Ll=3e3,Ui="/openquatt/entities",Hg=900;function Mg(){return o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint?Ll:Ag}function Ol(e){const t=String(e||"").toLowerCase();return t.includes("failed to fetch")||t.includes("load failed")||t.includes("networkerror")||t.includes("network request failed")||t.includes("connection refused")||t.includes("connection reset")||t.includes("err_connection")||t.includes("timeout")}const Pg=300*1e3;function Ng(){if(o.optionalMissingEntities)for(const e of Object.keys(o.optionalMissingEntities))delete o.optionalMissingEntities[e]}function Rg(){const e=Date.now();o.lastEntitySyncAt=e,o.lastEntitySyncSuccessAt=e,o.entitySyncFailureCount=0,!!o.deviceReconnectMode&&typeof xi=="function"&&xi()&&(o.lastFastEntitySyncAt=0,o.lastBulkEntitySyncAt=0,o.lastStaticEntitySyncAt=0,o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,typeof is=="function"?is():(Ge(),zn(),o.webServerLogEnabled=null,o.webServerLogConnected=!1),Ng())}function Dl(e){if(!Ol(e)){o.entitySyncFailureCount=0,ml();return}o.entitySyncFailureCount=Number(o.entitySyncFailureCount||0)+1,o.deviceReconnectLastError=String(e||""),(o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||o.entitySyncFailureCount>=2)&&Ea(o.updateInstallBusy||o.updateInstallPhaseHint?"ota":o.busyAction==="restartAction"?"restart":"reconnect",e)}function Lg(e=Date.now(),t={}){if(t.forceProbe===!0||o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||Number(o.entitySyncFailureCount||0)>0)return!0;const n=Number(o.lastEntitySyncSuccessAt||o.lastEntitySyncAt||o.lastEntityResponseAt||0);if(!n)return!0;const r=document.hidden?ra:vd;return e-n>=r}async function Og(){const e=L.status||L.setupComplete;if(!e)return{ok:!0,message:""};const t=o.deviceReconnectMode?Ll:bd,n=z(e.domain,e.name);if(typeof AbortController=="function"){const r=new AbortController,a=window.setTimeout(()=>r.abort(),t);try{const i=await fetch(n,{cache:"no-store",signal:r.signal});return o.lastEntityResponseAt=Date.now(),{ok:i.ok||i.status===404,message:i.ok||i.status===404?"":`${e.name} HTTP ${i.status}`}}catch(i){return{ok:!1,message:r.signal.aborted?`${e.name} request timed out after ${t}ms`:i.message||String(i)}}finally{window.clearTimeout(a)}}try{const r=await fetch(n,{cache:"no-store"});return o.lastEntityResponseAt=Date.now(),{ok:r.ok||r.status===404,message:r.ok||r.status===404?"":`${e.name} HTTP ${r.status}`}}catch(r){return{ok:!1,message:r.message||String(r)}}}function Dg(e,t=Date.now()){const n=o.optionalMissingEntities?.[e];return!L[e]?.optional||!n?!1:t-Number(n)<Pg}function Fg(e,t=Date.now()){o.optionalMissingEntities&&(o.optionalMissingEntities[e]=t)}function xg(e){const t=L[e];return t?`${e}	${t.domain}	${t.name}`:""}function zi(e,t){const n=new URLSearchParams;return n.set("detail",t==="all"?"all":"state"),n.set("entities",e.join(`
`)),n.toString()}function Fl(e,t){const n=[];let r=[],a=[],i="";return e.forEach(l=>{const c=xg(l);if(!c)return;const u=[...a,c],d=zi(u,t);if(a.length&&d.length>Hg){n.push({keys:r,body:i}),r=[l],a=[c],i=zi(a,t);return}r=[...r,l],a=u,i=d}),a.length&&n.push({keys:r,body:i}),n}async function Ig(e){const t=Mg(),n={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body};if(typeof AbortController=="function"){const a=new AbortController,i=window.setTimeout(()=>a.abort(),t);try{const l=await fetch(Ui,{...n,signal:a.signal});if(!l.ok)throw new Error(`bulk entities HTTP ${l.status}`);return l.json()}catch(l){throw a.signal.aborted?new Error(`bulk entities request timed out after ${t}ms`):l}finally{window.clearTimeout(i)}}const r=await fetch(Ui,n);if(!r.ok)throw new Error(`bulk entities HTTP ${r.status}`);return r.json()}async function I(e,t="state",n={}){const r=Date.now(),a=n.forceMissing===!0,i=e.filter(h=>a||!Dg(h,r));if(!i.length)return;const l=Number(n.concurrency),c=Number.isFinite(l)&&l>0?Math.floor(l):At,u=Fl(i,t),d=Math.max(1,Math.min(c,At)),g=[];for(let h=0;h<u.length;h+=d){const w=u.slice(h,h+d),b=await Promise.allSettled(w.map(async m=>({chunk:m,payload:await Ig(m)})));g.push(...b)}g.some(h=>h.status==="fulfilled")&&(o.lastEntityResponseAt=Date.now());let f="";g.forEach(h=>{if(h.status!=="fulfilled"){const v=h.reason.message||String(h.reason);f||(f=v);return}const{chunk:w,payload:b}=h.value,m=b?.entities&&typeof b.entities=="object"?b.entities:{},S=new Set(Array.isArray(b?.missing)?b.missing:[]);w.keys.forEach(v=>{if(Object.prototype.hasOwnProperty.call(m,v)){o.optionalMissingEntities&&delete o.optionalMissingEntities[v],o.entities[v]=Wg(v,o.entities[v],m[v]);return}const q=L[v];q?.optional?S.has(v)&&Fg(v,r):f||(f=`${q?.name||v} ontbreekt in bulk response`)})}),sm(),Nc(tr()),f?(Dl(f),o.deviceReconnectMode?o.controlError="":o.controlError=`Niet alle helpervelden konden worden ververst. ${f}`):o.busyAction||(Rg(),o.controlError="")}function Wg(e,t={},n={}){const r={...t||{},...n||{}};return L[e]?.domain==="select"&&(!String(n.state??"").trim()&&String(t?.state??"").trim()&&(r.state=t.state),!String(n.value??"").trim()&&String(t?.value??"").trim()&&(r.value=t.value),!Array.isArray(n.option)&&Array.isArray(t?.option)&&(r.option=t.option),!Array.isArray(n.options)&&Array.isArray(t?.options)&&(r.options=t.options)),r}function Gi(e=o.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function xl(){const e=o.authStatus||{};o.authDraftUsername=e.enabled?String(e.username||"").trim():"",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword=""}function Lr(e=o.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Or(e=o.mqttStatus||{}){return[e.enabled?"on":"off",e.connected?"connected":"disconnected",String(e.broker||""),String(e.port||""),String(e.username||""),String(e.base_topic||""),String(e.publish_profile||""),String(e.essential_interval_s||""),String(e.standard_interval_s||""),String(e.diagnostic_interval_s||""),e.retain_snapshots?"retain":"volatile",e.password_set?"set":"empty",String(e.source||""),String(e.csrf_token||"")].join(":")}function Il(){const e=o.mqttStatus||{};o.mqttDraftEnabled=e.enabled===!0,o.mqttDraftBroker=String(e.broker||""),o.mqttDraftPort=String(e.port||1883),o.mqttDraftUsername=String(e.username||""),o.mqttDraftPassword="",o.mqttDraftBaseTopic=String(e.base_topic||"openquatt"),o.mqttDraftPublishProfile=String(e.publish_profile||"standard"),o.mqttDraftEssentialIntervalS=String(e.essential_interval_s??10),o.mqttDraftStandardIntervalS=String(e.standard_interval_s??30),o.mqttDraftDiagnosticIntervalS=String(e.diagnostic_interval_s??60),o.mqttDraftRetainSnapshots=e.retain_snapshots!==!1,o.mqttNotice="",o.mqttError=""}function xa(e,t={},n=yd){if(t.force===!0)return!0;const r=Number(e||0);return!r||Date.now()-r>=n}function Bg(){return o.systemModal==="login"||o.systemModal==="api-security"||jn()}function Vg(){return o.systemModal==="api-security"||jn()}function _g(){return o.systemModal==="mqtt"||Hl()}function Wl(e){const t=String(e||"").trim().toLowerCase();return t==="off"?"Uit":t==="essential"?"Essential":t==="diagnostic"?"Diagnostic":"Standard"}async function co(e={}){if(!xa(o.lastAuthStatusRefreshAt,e))return!1;o.lastAuthStatusRefreshAt=Date.now();try{const t=await fetch("/auth/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r={enabled:!!n.enabled,setup_window_active:!!n.setup_window_active,username:String(n.username||""),source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=Gi(),i=Gi(r);return o.authStatus=r,a!==i&&xl(),o.systemModal==="login"&&(o.authError=""),a!==i}catch(t){return o.systemModal==="login"&&(o.authError=`Loginstatus kon niet worden geladen. ${t.message}`),!1}}function mn(){return o.nativeOpen||o.systemModal!=="login"?!1:(o.authStatus||{}).setup_window_active!==!0}function hn(){o.loginAuthStatusPollTimer&&(window.clearTimeout(o.loginAuthStatusPollTimer),o.loginAuthStatusPollTimer=null)}function Bl(e=wd){o.loginAuthStatusPollTimer||!mn()||(o.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(o.loginAuthStatusPollTimer=null,!mn())return;const t=o.authError;(await co({force:!0})||o.authError!==t)&&o.systemModal==="login"&&p(),mn()&&Bl()},Math.max(0,Number(e)||0)))}async function jg(e={}){if(o.systemModal!=="login")return!1;const t=o.authError,n=await co({force:!0});return(n||o.authError!==t)&&o.systemModal==="login"&&p(),e.poll!==!1&&mn()&&Bl(),n}async function uo(e={}){if(!xa(o.lastApiSecurityStatusRefreshAt,e))return!1;o.lastApiSecurityStatusRefreshAt=Date.now();try{const t=await fetch("/api-security/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r={enabled:!!n.enabled,transport_active:!!n.transport_active,pending_restart:!!n.pending_restart,key:String(n.key||""),source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=Lr(),i=Lr(r);return o.apiSecurityStatus=r,o.apiSecurityError="",a!==i&&(o.apiSecurityNotice=""),a!==i}catch(t){return o.apiSecurityError=`API-beveiliging kon niet worden geladen. ${t.message}`,!1}}function Ia(){const e=o.mqttStatus;return e?e.enabled!==!0?"Uit":e.connected===!0?"Verbonden":String(e.broker||"").trim()?"Verbinding maken":"Geen broker":"Laden..."}function Wa(){const e=o.mqttStatus;if(!e)return"MQTT-configuratie wordt geladen.";const t=String(e.broker||"").trim(),n=String(e.base_topic||"").trim(),r=Wl(e.publish_profile);return e.enabled!==!0?"MQTT staat uit en maakt geen verbinding.":e.connected===!0?t?`Verbonden met ${t}${n?` en publiceert ${r.toLowerCase()} telemetry via ${n}.`:"."}`:"MQTT is verbonden en publiceert met de opgeslagen instellingen.":t?n?`De broker staat ingesteld op ${t}; het device probeert ${r.toLowerCase()} telemetry via ${n} te publiceren.`:`De broker staat ingesteld op ${t}; het device probeert verbinding te maken.`:"Er is nog geen broker opgeslagen."}async function Kn(e={}){if(!xa(o.lastMqttStatusRefreshAt,e))return!1;o.lastMqttStatusRefreshAt=Date.now();try{const t=await fetch("/mqtt/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r={enabled:!!n.enabled,connected:!!n.connected,broker:String(n.broker||""),port:Number(n.port||0),username:String(n.username||""),base_topic:String(n.base_topic||""),publish_profile:String(n.publish_profile||"standard"),essential_interval_s:Number(n.essential_interval_s??10),standard_interval_s:Number(n.standard_interval_s??30),retain_snapshots:n.retain_snapshots!==!1,password_set:!!n.password_set,source:String(n.source||""),csrf_token:String(n.csrf_token||"")},a=Or(),i=Or(r);return o.mqttStatus=r,a!==i&&Il(),o.systemModal==="mqtt"&&(o.mqttError=""),a!==i}catch(t){return o.systemModal==="mqtt"&&(o.mqttError=`MQTT-status kon niet worden geladen. ${t.message}`),!1}}async function Vl(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(t)}return n}async function Kg(){await Ut("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"})}async function Ug(){const e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",p();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",p();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await uo({force:!0}),o.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",o.apiSecurityError="",p()}catch(t){o.apiSecurityError=`Inschakelen is mislukt. ${t.message}`,p()}finally{o.apiSecurityBusy=!1,p()}}async function zg(){const e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",p();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",p();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await uo({force:!0}),o.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",o.apiSecurityError="",p()}catch(t){o.apiSecurityError=`Roteren is mislukt. ${t.message}`,p()}finally{o.apiSecurityBusy=!1,p()}}async function Gg(){const e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",p();return}if(!e.enabled){o.apiSecurityNotice="API-encryptie staat al uit.",o.apiSecurityError="",p();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",p();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const n=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!r.ok)throw new Error(r.error||`HTTP ${n.status}`);await uo({force:!0}),o.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",o.apiSecurityError="",p()}catch(t){o.apiSecurityError=`Uitzetten is mislukt. ${t.message}`,p()}finally{o.apiSecurityBusy=!1,p()}}async function Qg(){const e=o.mqttStatus||{},t=!!o.mqttDraftEnabled,n=String(o.mqttDraftBroker||"").trim(),r=Number(String(o.mqttDraftPort||"").trim()),a=String(o.mqttDraftUsername||"").trim(),i=String(o.mqttDraftPassword||""),l=String(o.mqttDraftBaseTopic||"").trim(),c=String(o.mqttDraftPublishProfile||"standard").trim().toLowerCase(),u=Number(String(o.mqttDraftEssentialIntervalS||"").trim()),d=Number(String(o.mqttDraftStandardIntervalS||"").trim()),g=Number(String(o.mqttDraftDiagnosticIntervalS||"").trim()),f=!!o.mqttDraftRetainSnapshots;if(!l){o.mqttError="Vul een base topic in.",p();return}if(!Number.isFinite(r)||r<1||r>65535){o.mqttError="Vul een geldige poort in.",p();return}if(t&&!n){o.mqttError="Vul een broker in als je MQTT inschakelt.",p();return}if(!e.csrf_token){o.mqttError="MQTT-configuratie laden nog. Probeer het zo opnieuw.",p();return}if(!["off","essential","standard","diagnostic"].includes(c)){o.mqttError="Kies een geldig publish-profiel.",p();return}if(!Number.isFinite(u)||u<1||u>3600){o.mqttError="Vul een geldig essential interval in.",p();return}if(!Number.isFinite(d)||d<1||d>3600){o.mqttError="Vul een geldig standard interval in.",p();return}if(!Number.isFinite(g)||g<1||g>3600){o.mqttError="Vul een geldig diagnostic interval in.",p();return}o.mqttBusy=!0,o.mqttError="",o.mqttNotice="",p();try{const h=new URLSearchParams;h.set("csrf_token",e.csrf_token),h.set("enabled",t?"true":"false"),h.set("broker",n),h.set("port",String(r)),h.set("username",a),h.set("password",i),h.set("base_topic",l),h.set("publish_profile",c),h.set("essential_interval_s",String(u)),h.set("standard_interval_s",String(d)),h.set("diagnostic_interval_s",String(g)),h.set("retain_snapshots",f?"true":"false");const w=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:h.toString()}),b=await w.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!w.ok||!b.ok)throw new Error(b.error||`HTTP ${w.status}`);await Kn({force:!0}),o.mqttNotice=t?"MQTT staat nu aan.":"MQTT-configuratie opgeslagen.",o.mqttError="",p()}catch(h){o.mqttError=`Opslaan is mislukt. ${h.message}`,p()}finally{o.mqttBusy=!1,p()}}async function Yg(){const e=String(o.apiSecurityStatus?.key||"").trim();if(!e){o.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",p();return}try{if(!await Vl(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.apiSecurityNotice="API-sleutel gekopieerd.",o.apiSecurityError="",p()}catch(t){o.apiSecurityError=`Kopi\xEBren is mislukt. ${t.message}`,p()}}function Dr(){o.settingsBackupDraft=null,o.settingsBackupError="",o.settingsBackupBusy=!1}function Jg(){return{device:Me(),installation:_o(),topology:typeof Z=="function"?Z():"",firmware_version:oe(),firmware_channel:String(C("firmwareUpdateChannel")||C("releaseChannelText")||"").trim()}}function _l(e){const t=L[e];if(!t)return;if(e==="setupComplete")return tc();const n=C(e);if(n===""||n===null||n===void 0)return;if(t.domain==="switch"||t.domain==="binary_sensor")return A(e);if(t.domain==="number"){const a=Ye(n);return Number.isNaN(a)?void 0:a}return t.domain==="time"?lo(n)||void 0:t.domain==="datetime"?Xe(n)||void 0:String(n||"").trim()||void 0}function jl(){const e={};return Zt.forEach(t=>{const n={};t.keys.forEach(r=>{const a=_l(r);a!==void 0&&(n[r]=a)}),e[t.id]=n}),{schema_version:Ys,exported_at:new Date().toISOString(),source:Jg(),settings:e}}function Zg(e=jl()){const t=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${t}.json`}function Xg(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function em(e){const t=L[e];return t?.name?t.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function Qi(e,t){if(t==null||t==="")return"\u2014";const n=L[e];return n?n.domain==="number"?j(e,t):n.domain==="time"?lo(t)?.slice(0,5)||"\u2014":n.domain==="datetime"?Xe(t)||"\u2014":n.domain==="switch"||n.domain==="binary_sensor"?t?"Aan":"Uit":String(t).trim()||"\u2014":String(t).trim()||"\u2014"}function tm(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function Kl(e){const t=e?.settings&&typeof e.settings=="object"?e.settings:{},n=e?.source&&typeof e.source=="object"?e.source:{},r=gd;let a=0,i=0,l=0,c=0,u=0,d=0,g=0,f=0;const h=Zt.map(w=>{const b=t[w.id]&&typeof t[w.id]=="object"?t[w.id]:{};let m=0,S=0,v=0,q=0,E=0,k=0,H=0;const O=w.keys.map(F=>{const T=!!L[F]?.optional,$=Object.prototype.hasOwnProperty.call(b,F),N=$?b[F]:void 0,W=_l(F),K=y(F),R=$?Qi(F,N):T?"Niet op huidige installatie":"Ontbreekt in backup",V=K?Qi(F,W):T?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie";let P="same";return!$&&T?P="optional-missing":$?K?JSON.stringify(W)!==JSON.stringify(N)&&(P="different"):P=T?"optional-unavailable":"current-missing":P="missing",K&&(H+=1,f+=1),P!=="same"&&(k+=1,g+=1),T?(E+=1,$?(v+=1,l+=1):(q+=1,c+=1)):$?(m+=1,a+=1):(S+=1,i+=1),{key:F,label:em(F),optional:T,hasBackupValue:$,backupDisplay:R,currentDisplay:V,status:P,statusLabel:tm(P)}});return d+=w.keys.filter(F=>!L[F]?.optional).length,{id:w.id,label:w.label,present:m,currentPresent:H,requiredTotal:w.keys.filter(F=>!L[F]?.optional).length,optionalTotal:E,optionalPresent:v,optionalMissing:q,requiredMissing:S,total:w.keys.length,differenceCount:k,rows:O}});return Object.entries(t).forEach(([w,b])=>{if(!Zt.some(m=>m.id===w)){u+=1;return}!b||typeof b!="object"||Object.keys(b).forEach(m=>{r.has(m)||(u+=1)})}),{source:n,sectionSummaries:h,requiredPresent:a,requiredMissing:i,requiredAvailable:d,optionalPresent:l,optionalMissing:c,unknown:u,differenceCount:g,currentPresent:f,requiredTotal:d,total:Bo.length}}function om(e,t=""){const n=JSON.parse(e);if(!n||typeof n!="object")throw new Error("Backupbestand bevat geen JSON-object.");const r=Number(n.schema_version??n.schemaVersion??0);if(!Number.isInteger(r)||r<Ys)throw new Error("Onbekende backupversie.");const a=n.settings&&typeof n.settings=="object"?n.settings:{},i={schema_version:r,exported_at:String(n.exported_at||""),source:n.source&&typeof n.source=="object"?n.source:{},settings:a,file_name:t||""};return i.summary=Kl(i),i}async function nm(){o.settingsBackupBusy=!0,o.controlError="",o.controlNotice="",p();try{return await I(Bo,"all"),jl()}finally{o.settingsBackupBusy=!1,p()}}async function rm(){if(!o.settingsBackupBusy)try{const e=await nm();Xg(Zg(e),e),o.controlNotice="Settings-backup gedownload.",p()}catch(e){o.controlError=`Backup exporteren mislukt. ${e.message}`,p()}}async function am(e){if(!(!e||o.settingsBackupBusy)){o.settingsBackupBusy=!0,o.settingsBackupDraft=null,o.settingsBackupError="",o.controlError="",o.controlNotice="",p();try{const t=await e.text(),n=om(t,e.name||"");o.settingsBackupDraft=n,o.systemModal="settings-backup-restore"}catch(t){o.settingsBackupDraft=null,o.settingsBackupError=`Backupbestand kon niet worden gelezen. ${t.message}`}finally{o.settingsBackupBusy=!1,p()}}}async function Lo(e,t){const n=L[e];if(!n)throw new Error(`Onbekend veld ${e}.`);if(n.domain==="select"){const r=String(t||"").trim(),a=await fetch(`${z(n.domain,n.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="number"){const r=Se(e,t),a=await fetch(`${z(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="time"){const r=lo(t),a=await fetch(`${z(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="datetime"){const r=Xe(t),a=await fetch(`${z(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="text"){const r=String(t||"").trim(),a=await fetch(`${z(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(n.domain==="switch"||n.domain==="binary_sensor"){const r=!!t,a=r?"turn_on":"turn_off",i=await fetch(z(n.domain,n.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return r}throw new Error(`${n.name} kan niet worden hersteld.`)}async function im(){const e=o.settingsBackupDraft;if(!e||o.settingsBackupBusy)return;o.settingsBackupBusy=!0,o.settingsBackupError="",o.controlError="",o.controlNotice="",p();const t=[],n=[];let r=!1;try{await I(Bo,"all");for(const i of Zt){const l=e.settings?.[i.id]&&typeof e.settings[i.id]=="object"?e.settings[i.id]:{};for(const c of i.keys){if(!Object.prototype.hasOwnProperty.call(l,c)){n.push(c);continue}const u=l[c];if(c==="setupComplete"){r=u===!0;continue}if(c==="openquattEnabled")continue;if(!L[c]||!y(c)){n.push(c);continue}try{await Lo(c,u),t.push(c)}catch{n.push(c)}}}const a=e.settings?.operation?.openquattEnabled;if(Object.prototype.hasOwnProperty.call(e.settings?.operation||{},"openquattEnabled")&&y("openquattEnabled")&&(await Lo("openquattEnabled",a),t.push("openquattEnabled")),r&&L.apply){const i=await fetch(z("button","Complete setup","press"),{method:"POST"});if(!i.ok)throw new Error(`Setup bevestigen mislukt (HTTP ${i.status}).`);t.push("setupComplete")}else Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&n.push("setupComplete");o.systemModal="settings-backup-success",Dr(),o.controlNotice=`Backup hersteld (${t.length} toegepast${n.length?`, ${n.length} overgeslagen`:""}).`,await ie()}catch(a){o.settingsBackupError=`Backup herstellen mislukt. ${a.message}`}finally{o.settingsBackupBusy=!1,p()}}function Ba(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}async function Va(e={}){if(!po()){const r=!!(o.trendHistoryRaw||o.trendHistoryError);return o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,r}if(Ba())return!1;const t=e.force===!0,n=Date.now();if(!t&&o.trendHistoryFetchPromise)return o.trendHistoryFetchPromise;if(!t&&(o.trendHistoryRaw||o.trendHistoryError)&&n-Number(o.trendHistoryLastFetchAt||0)<Os)return!1;o.trendHistoryFetchPromise=(async()=>{const r=aa(o.trendWindowHours||Xt);r!==o.trendWindowHours&&ia(r);const a=await fetch(`${Pt()}/trends/history?hours=${encodeURIComponent(String(r))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const i=await a.text(),l=i.split(/\r?\n/);let c=Number.NaN,u=i;l.length&&l[0].startsWith("@now|")&&(c=Number(l[0].slice(5)),u=l.slice(1).join(`
`));const d=`${r}|${u.length}|${u.slice(0,120)}|${u.slice(-120)}`,g=Number.isFinite(o.trendHistoryNowMs),h=Number.isFinite(c)?!g||o.trendHistoryNowMs!==c:g,w=u!==o.trendHistoryRaw||o.trendHistoryError!==""||o.trendHistorySignature!==d||h;return o.trendHistoryRaw=u,o.trendHistoryError="",o.trendHistorySignature=d,o.trendHistoryNowMs=Number.isFinite(c)?c:Number.NaN,o.trendHistoryLastFetchAt=Date.now(),w})();try{return await o.trendHistoryFetchPromise}catch(r){const a=`Trendhistorie kon niet worden geladen. ${r.message}`,i=o.trendHistoryError!==a;return o.trendHistoryError=a,o.trendHistoryRaw="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=Date.now(),i}finally{o.trendHistoryFetchPromise=null}}async function Mt(e={}){if(!y("lifetimeEnergyHistoryEnabled")&&!Ba()){const a=!!(o.energyHistoryRaw||o.energyHistoryError);return o.energyHistoryRaw="",o.energyHistoryError="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=0,o.energyHistoryRequestQuery="",o.energyHistoryFetchQuery="",a}const t=e.force===!0,n=Date.now(),r=e.metaOnly===!0?"?meta=1":typeof cn=="function"?cn():"";if(!t&&o.energyHistoryFetchPromise&&o.energyHistoryFetchQuery===r)return o.energyHistoryFetchPromise;if(!t&&o.energyHistoryRequestQuery===r&&(o.energyHistoryRaw||o.energyHistoryError)&&n-Number(o.energyHistoryLastFetchAt||0)<Os)return!1;o.energyHistoryFetchQuery=r,o.energyHistoryFetchPromise=(async()=>{const a=async b=>{const m=await fetch(`${Pt()}/energy/history${b}`,{cache:"no-store"});if(!m.ok)throw new Error(`HTTP ${m.status}`);return m.text()};let i=r,l=await a(i);if(e.metaOnly!==!0&&i.includes("meta=1")&&typeof cn=="function"){const b=o.energyHistoryRaw;o.energyHistoryRaw=l;const m=cn();o.energyHistoryRaw=b,m&&m!==i&&(i=m,l=await a(i))}const c=l.split(/\r?\n/);let u=Number.NaN;c.forEach(b=>{b.startsWith("@now|")&&(u=Number(b.slice(5)))});const d=`${l.length}|${l.slice(0,120)}|${l.slice(-120)}`,g=Number.isFinite(o.energyHistoryNowMs),h=Number.isFinite(u)?!g||o.energyHistoryNowMs!==u:g,w=l!==o.energyHistoryRaw||o.energyHistoryError!==""||o.energyHistorySignature!==d||h;return o.energyHistoryRaw=l,o.energyHistoryError="",o.energyHistorySignature=d,o.energyHistoryNowMs=Number.isFinite(u)?u:Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=i,w})();try{return await o.energyHistoryFetchPromise}catch(a){const i=`Energiehistorie kon niet worden geladen. ${a.message}`,l=o.energyHistoryError!==i;return o.energyHistoryError=i,o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=r,l}finally{o.energyHistoryFetchPromise=null}}function sm(){o.complete=tc(),o.stage=o.complete===!0?"Gereed":o.complete===!1?"Quick Start":"Laden...",o.summary=zm(),o.appView==="diagnosis"&&!po()&&Et(eo(),{syncMode:"replace",forceSync:!0}),o.appView||Et(ua()||eo(),{syncMode:"replace",forceSync:!0})}function lm(){const e=["setupComplete","strategy",...Pe,...Sg];return o.appView==="settings"?[...new Set([...e,...Ml()])]:o.appView==="energy"?[...new Set([...e,...Wo])]:o.appView==="overview"||o.appView==="diagnosis"?[...new Set([...e,...pn])]:[...new Set(e)]}function cm(e=[]){const t=new Set(e);return(o.appView==="settings"?[...new Set(["setupComplete","strategy",...Pe,...Lt()])]:o.appView==="overview"||o.appView==="diagnosis"||o.appView==="energy"||o.appView==="results"?[...new Set(["setupComplete","strategy",...Pe,...Wo,...io])]:[...new Set(["setupComplete","strategy",...Pe])]).filter(r=>!t.has(r))}async function um(e,t="state"){if(!(!e.length||o.nativeOpen)){o.entitySyncInFlight=!0;try{await I(e,t,{concurrency:t==="all"?At:Pn})}finally{o.entitySyncInFlight=!1;const n=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,n&&!o.nativeOpen&&window.setTimeout(()=>{ie(n)},0)}o.mounted&&!o.nativeOpen&&p()}}function Ul(){if(o.nativeOpen||o.appView!=="settings")return;const e=()=>{if(!(o.nativeOpen||o.appView!=="settings")){if(o.loadingEntities||o.focusedField||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock){window.setTimeout(Ul,250);return}ie({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}function Yi(e=Date.now(),t={}){return t.forceBulk===!0?!0:e-Number(o.lastBulkEntitySyncAt||0)>=hd}async function zl(){if(!o.nativeOpen)try{Fa()&&await Nl(),(o.appView==="overview"||o.appView==="diagnosis")&&await Va({force:!0}),o.appView==="results"&&await Mt({force:!0}),await co({force:!0}),jn()&&await uo({force:!0}),Hl()&&await Kn({force:!0})}finally{o.mounted&&!o.nativeOpen&&p(),Ul()}}async function dm(){if(o.nativeOpen)return;o.loadingEntities=!0,p();const e=pg();e>0&&await new Promise(i=>window.setTimeout(i,e));const t=lm(),n=cm(t),r=o.appView==="settings"?"all":"state";try{await I(t,r,{concurrency:r==="all"?At:Pn}),o.appView==="settings"?await $g():await Eg()}finally{o.loadingEntities=!1,p()}const a=o.appView==="settings"?"all":"state";window.setTimeout(()=>{um(n,a),zl()},0)}async function ie(e={}){if(o.nativeOpen||o.loadingEntities||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock)return;if(o.updateInstallBusy||gl()){o.pendingEntitySyncOptions=null;return}if(o.focusedField&&o.appView!=="settings")return;if(o.entitySyncInFlight){kg(e);return}const t=Date.now();if(document.hidden&&t-Number(o.lastEntitySyncAttemptAt||0)<ra)return;const n=o.appView,r=e.prefetchView==="overview"&&!e.forceBulk&&n==="settings",a=r?"overview":n,i=a==="overview"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,c=!l&&!r&&Yi(t,e),d=t-Number(o.lastStaticEntitySyncAt||0)>=fd||o.updateInstallBusy||o.updateInstallPhaseHint?io:[],g=o.quickStartModalOpen&&o.currentStep==="flow-source"?mt:[],f=o.quickStartModalOpen&&o.currentStep==="thermostat-source"?Ln:[],h=o.appView==="settings"&&o.systemModal==="history-storage"?Eo():[],w=r?[...pn,...Pe,"setupComplete",...d]:i?[...l?pn:c?Wo:pn,...Pe,"setupComplete",...d]:n==="settings"?[...new Set([...Ml(),...h,...d])]:c?["setupComplete",...d,...Pe,"strategy",...Io,...gt,...ce()?pe.map(b=>b.key):ao]:["setupComplete",...Pe,"strategy",...d];o.entitySyncInFlight=!0,o.lastEntitySyncAttemptAt=t;try{const b=o.deviceReconnectMode,m=Lg(t,e)?await Og():{ok:!0,message:""};if(!m.ok){Dl(m.message),r||p();return}if(await I([...new Set([...w,...g,...f])],r?"state":n==="settings"?"all":"state",{concurrency:l&&i?Pn:At}),o.lastFastEntitySyncAt=Date.now(),c&&i&&!r&&(o.lastBulkEntitySyncAt=o.lastFastEntitySyncAt),d.length&&(o.lastStaticEntitySyncAt=o.lastFastEntitySyncAt),r)return;i&&!o.overviewMetadataHydrated&&!o.overviewMetadataHydrating&&Nl();const S=b!==o.deviceReconnectMode,v=l&&i,q=v?!1:a==="overview"||a==="diagnosis"?await Va():!1,E=v?!1:o.appView==="results"?await Mt():!1,k=v||!Bg()?!1:await co(),H=v||!Vg()?!1:await uo(),O=v||!_g()?!1:await Kn(),F=Mr();if(S){p();return}if(q&&o.appView==="diagnosis"&&!o.root?.querySelector(".oq-overview-trends")){p();return}if(E&&o.appView==="results"&&!o.root?.querySelector(".oq-energy-history")){p();return}if(k&&(o.systemModal==="login"||jn())){p();return}if(H&&o.appView==="settings"){p();return}if(O&&o.appView==="settings"){p();return}const G=!!(o.updateModalOpen||o.systemModal||o.interfacePanelOpen);if(F!==o.headerRenderSignature)if(G&&Pr())o.headerRenderSignature=F;else{p();return}else Pr();if(o.appView==="settings"&&String(o.systemModal||"").startsWith("service-task-")){Fr()!==o.settingsRenderSignature&&p();return}if(G)return;if(o.appView==="settings"){const T=Fr();if(T!==o.settingsRenderSignature&&!o.focusedField){p();return}if(!Cf()){o.focusedField||p();return}o.focusedField&&(o.settingsRenderSignature=T);return}if(o.appView==="diagnosis"){mv()||p();return}if(o.appView==="energy"){Jv()||p();return}if(o.appView==="results"){Zv()||p();return}Cy()||p(),v&&!o.nativeOpen&&window.setTimeout(()=>{zl()},0)}catch(b){r||(o.controlError=`Helperstatus kon niet worden geladen. ${b.message}`,p())}finally{o.entitySyncInFlight=!1;const b=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,b&&!o.nativeOpen&&window.setTimeout(()=>{ie(b)},0),l&&i&&!r&&!o.nativeOpen&&!b&&Yi(Date.now())&&window.setTimeout(()=>{ie({forceBulk:!0})},0)}}function Ji(){window.setTimeout(()=>{const e=document.activeElement;o.focusedField=e&&e.dataset&&e.dataset.oqField||"",o.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function pm(e){e.target.closest(".oq-ph-concept-hotspot")&&(o.settingsInteractionLock=!0)}function gm(e){const t=e.target.closest(".oq-ph-concept-hotspot");if(!t||e.relatedTarget&&t.contains(e.relatedTarget))return;const n=o.root&&o.root.querySelector(".oq-ph-concept-hotspot:hover"),r=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;o.settingsInteractionLock=!!(n||r)}function ae(e){const t=o.entities[e];if(!t)return o.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;const n=t.state??t.value??"",r=Array.isArray(t.option)?t.option.join(","):Array.isArray(t.options)?t.options.join(","):"",a=[t.min_value??"",t.max_value??"",t.step??"",t.uom??""].join(",");return`${e}:${n}::${r}::${a}`}function Fr(){return[o.appView,o.settingsGroup,o.busyAction,o.loadingEntities?"loading":"ready",Lr(),Or(),ae("setupComplete"),...Qs.map(e=>ae(e))].join("|")}function ve(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function Gl(){return[o.appView,o.busyAction,ae("openquattEnabled"),ae("openquattResumeAt"),ae("manualCoolingEnable"),ae("silentModeOverride"),ae("controlModeLabel"),ae("coolingPermitted"),ae("coolingRequestActive"),ae("coolingBlockReason"),ae("silentActive")].join("|")}function mm(e){if(e.target.dataset.oqFirmwareConnectionConfirm){o.firmwareConnectionSwitchConfirmed=!!e.target.checked,p();return}if(e.target.dataset.oqFirmwareTopologyConfirm){o.firmwareTopologySwitchConfirmed=!!e.target.checked,p();return}if(e.target.dataset.oqFirmwareTestConfirm){o.updateTestFirmwareConfirmed=!!e.target.checked,o.updateTestFirmwareError="";const n=e.target.closest(".oq-helper-modal-callout"),r=n?.querySelector('[data-oq-action="install-firmware-test"]');r&&(r.disabled=!o.updateTestFirmwareConfirmed||!Ro()),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){o.updateTestFirmwarePr=String(e.target.value||""),o.updateTestFirmwareConfirmed=!1,o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null;const n=e.target.closest(".oq-helper-modal-callout"),r=n?.querySelector('[data-oq-firmware-test-confirm="true"]');r&&(r.checked=!1);const a=n?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!0);const i=Wn(),l=fa(Ro(),i),c=n?.querySelector('[data-oq-firmware-test-asset-note="true"]');c&&(c.textContent=l?i.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),n?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}const t=e.target.dataset.oqField;if(!t){if(e.target.dataset.oqQuickstartCicUrl!==void 0){o.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){o.quickStartThermostatSourceDraft=String(e.target.value||""),p();return}const n=e.target.dataset.oqAuthField;if(!n){const r=e.target.dataset.oqMqttField;if(!r)return;o.mqttNotice="",o.mqttError="",r==="enabled"?o.mqttDraftEnabled=!!e.target.checked:r==="broker"?o.mqttDraftBroker=String(e.target.value||""):r==="port"?o.mqttDraftPort=String(e.target.value||""):r==="username"?o.mqttDraftUsername=String(e.target.value||""):r==="password"?o.mqttDraftPassword=String(e.target.value||""):r==="baseTopic"?o.mqttDraftBaseTopic=String(e.target.value||""):r==="publishProfile"?o.mqttDraftPublishProfile=String(e.target.value||""):r==="essentialIntervalS"?o.mqttDraftEssentialIntervalS=String(e.target.value||""):r==="standardIntervalS"?o.mqttDraftStandardIntervalS=String(e.target.value||""):r==="diagnosticIntervalS"?o.mqttDraftDiagnosticIntervalS=String(e.target.value||""):r==="retainSnapshots"&&(o.mqttDraftRetainSnapshots=!!e.target.checked);return}o.authNotice="",o.authError="",n==="username"?o.authDraftUsername=String(e.target.value||""):n==="currentPassword"?o.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?o.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(o.authDraftConfirmPassword=String(e.target.value||""));return}if(e.target.dataset.oqPauseDraft){o.pauseResumeDraft=String(e.target.value||"");return}if(L[t]?.domain==="text"){o.inputDrafts[t]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(o.inputDrafts[t]=e.target.value);const n=Ye(e.target.value);if(!Number.isNaN(n)){const r=Se(t,e.target.value);if(o.drafts[t]=r,e.target.type==="range"){const a=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");a&&(a.textContent=j(t,r))}}}}function hm(e){Lf(e)}function Zi(e,t){return e.deltaMode===1?t*16:e.deltaMode===2?t*window.innerHeight:t}function fm(e){let t=e?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){const n=window.getComputedStyle(t),r=/(auto|scroll)/.test(n.overflowY)&&t.scrollHeight>t.clientHeight,a=/(auto|scroll)/.test(n.overflowX)&&t.scrollWidth>t.clientWidth;if(r||a)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function bm(e){const t=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!t||!o.root||!o.root.contains(t)||document.activeElement!==t)return;e.preventDefault(),t.blur();const n=fm(t);n&&typeof n.scrollBy=="function"&&n.scrollBy({left:Zi(e,e.deltaX||0),top:Zi(e,e.deltaY||0),behavior:"auto"})}function vm(e){if(e.target.dataset.oqDevControl==="boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(e.target.value);return}if(e.target.dataset.oqBackupFileInput){const a=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",am(a);return}if(e.target.dataset.oqFirmwareUploadFileInput){const a=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",a?(o.firmwareAdvancedOpen=!0,o.updateManualUploadOpen=!0,o.updateManualUploadFile=a,o.updateManualUploadFileName=a.name||"",o.updateManualUploadError=""):be(),p();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof Hn=="function"&&Hn(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}const t=e.target.dataset.oqField;if(!t)return;const n=L[t];if(!n)return;if(n.domain==="select"){xr(t,String(e.target.value));return}if(n.domain==="number"){_a(t,e.target.value);return}if(n.domain==="text"){Wm(t,e.target.value);return}if(n.domain==="time"){const a=lo(e.target.value);if(!a){o.controlError=`${n.name} verwacht tijd als HH:MM.`,p();return}Im(t,a);return}if(n.domain==="datetime"){const a=Xe(e.target.value);if(!a){o.controlError=`${n.name} verwacht datum en tijd.`,p();return}Bm(t,a);return}const r=e.target.dataset.oqMqttField;r&&(o.mqttNotice="",o.mqttError="",r==="enabled"?o.mqttDraftEnabled=!!e.target.checked:r==="broker"?o.mqttDraftBroker=String(e.target.value||""):r==="port"?o.mqttDraftPort=String(e.target.value||""):r==="username"?o.mqttDraftUsername=String(e.target.value||""):r==="password"?o.mqttDraftPassword=String(e.target.value||""):r==="baseTopic"?o.mqttDraftBaseTopic=String(e.target.value||""):r==="publishProfile"?o.mqttDraftPublishProfile=String(e.target.value||""):r==="essentialIntervalS"?o.mqttDraftEssentialIntervalS=String(e.target.value||""):r==="standardIntervalS"?o.mqttDraftStandardIntervalS=String(e.target.value||""):r==="diagnosticIntervalS"?o.mqttDraftDiagnosticIntervalS=String(e.target.value||""):r==="retainSnapshots"&&(o.mqttDraftRetainSnapshots=!!e.target.checked))}function ym(e){const t=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(t){const d=t.querySelector("input[data-oq-field]");if(d&&(d.type==="time"||d.type==="datetime-local")&&typeof d.showPicker=="function")try{d.showPicker()}catch{}}const n=e.target.closest('[data-oq-action="toggle-settings-info"]'),r=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-modal]");if(n){const d=n.dataset.infoId||"";o.settingsInfoOpen=o.settingsInfoOpen===d?"":d,p();return}const l=e.target.closest("[data-oq-action]"),c=o.interfacePanelOpen&&!a;if(!l){let d=!1;if(o.settingsInfoOpen&&!r&&(o.settingsInfoOpen="",d=!0),c&&(fr(!1),d=!0),i&&e.target===i){if(i.dataset.oqModal==="quickstart-forced")return;o.updateModalOpen&&(o.updateModalOpen=!1,o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,be(),xe(),d=!0),o.systemModal&&(Dr(),hn(),o.systemModal="",d=!0)}d&&p();return}c&&l.dataset.oqAction!=="toggle-interface-panel"&&fr(!1);const u=l.dataset.oqAction;if(u==="set-mock-boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(l.dataset.boilerMode||"off");return}if(u==="toggle-interface-panel"){fr(!o.interfacePanelOpen),p();return}if(u==="toggle-dev-panel"){Pd(!o.devPanelOpen),p();return}if(u==="toggle-installation-monitoring-details"){e.preventDefault();const d=l.closest(".oq-settings-monitoring-details");o.installationMonitoringDetailsOpen=!(d&&d.hasAttribute("open")),p();return}if(u==="toggle-integration-diagnostics"){e.preventDefault();const d=l.closest(".oq-settings-integration-diagnostics");o.integrationDiagnosticsOpen=!(d&&d.hasAttribute("open")),p();return}if(u==="toggle-odu-runtime-frequency-details"){e.preventDefault();const d=l.closest(".oq-settings-odu-runtime-details");o.oduRuntimeFrequencyDetailsOpen=!(d&&d.hasAttribute("open")),p();return}if(u==="toggle-storage-technical-details"){e.preventDefault();const d=l.closest(".oq-settings-storage-technical");o.settingsStorageDetailsOpen=!(d&&d.hasAttribute("open")),p();return}if(u==="select-view"){if((l.dataset.viewId||"")==="diagnosis"&&!po())return;const d=l.dataset.viewId||"overview";Et(d,{syncMode:"push"}),p(),ie(d==="settings"||d==="energy"||d==="results"?{forceBulk:!0}:{forceFast:!0});return}if(u==="select-trend-window"){if(l.disabled)return;ia(Number(l.dataset.trendHours||24)),p(),Va({force:!0}).then(d=>{d&&p()});return}if(u==="select-energy-history-view"){if(l.disabled||typeof Cs!="function")return;Cs(l.dataset.energyHistoryView||"day");return}if(u==="shift-energy-history-period"){if(l.disabled||typeof Hs!="function")return;Hs(o.energyHistoryView||"day",l.dataset.energyHistoryDirection||"1");return}if(u==="select-energy-history-now"){if(l.disabled||typeof Ms!="function")return;Ms(o.energyHistoryView||"day");return}if(u==="select-settings-group"){gn(l.dataset.groupId||qe[0].id),p(),ie({forceBulk:!0});return}if(u==="open-update-modal"){o.updateModalOpen=!0,p(),Nm();return}if(u==="open-webserver-log-modal"){yh();return}if(u==="open-debug-recording-modal"){o.systemModal="debug-recording",o.debugRecordingError="",o.debugRecordingNotice="",p(),Ya();return}if(u==="open-login-modal"){o.systemModal="login",xl(),o.authNotice="",o.authError="",p(),jg({poll:!0});return}if(u==="open-api-security-modal"){o.systemModal="api-security",o.apiSecurityNotice="",o.apiSecurityError="",p(),uo({force:!0});return}if(u==="open-mqtt-modal"){o.systemModal="mqtt",Il(),p(),Kn({force:!0});return}if(u==="copy-api-security-key"){Yg();return}if(u==="enable-api-security"){Ug();return}if(u==="rotate-api-security"){zg();return}if(u==="disable-api-security"){Gg();return}if(u==="restart-api-security"){Kg();return}if(u==="save-mqtt-config"){Qg();return}if(u==="flush-trend-history"){Ut("trendHistoryFlush",{successNotice:"Diagnosegeschiedenis is opgeslagen.",errorPrefix:"Diagnosegeschiedenis kon niet worden opgeslagen",refreshKeys:Eo(),refreshDelayMs:500}).then(()=>{To()});return}if(u==="save-lifetime-energy-history"){Ut("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:Eo(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,To(),o.appView==="results"&&Mt({force:!0}).then(()=>p())});return}if(u==="clear-lifetime-energy-history"){if(!window.confirm(`Energiehistorie wissen?

Alle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.`))return;Ut("lifetimeEnergyHistoryClear",{successNotice:"Energiehistorie is gewist.",errorPrefix:"Energiehistorie kon niet worden gewist",refreshKeys:Eo(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,To(),o.appView==="results"&&Mt({force:!0}).then(()=>p())});return}if(u==="select-energy-history-import-file"){ug();return}if(u==="clear-energy-history-import-file"){Cl(),p();return}if(u==="import-energy-history-file"){dg();return}if(u==="open-history-storage-modal"){o.systemModal="history-storage",p(),Oa({forceMissing:!0}).finally(()=>{o.systemModal==="history-storage"&&p()}),To([1e3,3e3,7e3]);return}if(u==="open-connectivity-modal"){o.systemModal="connectivity",p();return}if(u==="open-restart-confirm"){o.systemModal="restart-confirm",p();return}if(u==="download-settings-backup"){rm();return}if(u==="open-settings-backup-import"){o.systemModal="settings-backup-import",p();return}if(u==="open-silent-settings-modal"){o.systemModal="silent-settings",p();return}if(u==="open-openquatt-pause-modal"){o.pauseResumeDraft=Tl(),o.systemModal="openquatt-pause",p();return}if(u==="enable-openquatt-now"){jm();return}if(u==="apply-openquatt-preset"){const d=kl(l.dataset.pausePreset||"");o.pauseResumeDraft=d,vr(d);return}if(u==="apply-openquatt-indefinite"){vr("");return}if(u==="apply-openquatt-custom-pause"){if(!String(o.pauseResumeDraft||"").trim()){o.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",p();return}vr(o.pauseResumeDraft||"");return}if(u==="close-update-modal"){o.updateModalOpen=!1,o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,be(),xe(),p();return}if(u==="close-quickstart-modal"){o.quickStartModalOpen=!1,p();return}if(u==="open-quickstart-modal"){o.currentStep="generation",o.quickStartModalMode="wizard",o.quickStartModalOpen=!0,p();return}if(u==="open-generation-modal"){o.currentStep="generation",o.quickStartModalMode="generation",o.quickStartModalOpen=!0,p();return}if(u==="open-cm100-commissioning-modal"){o.systemModal="",Et("settings"),gn("service"),p(),ie({forceBulk:!0});return}if(u==="open-installation-monitoring"){o.systemModal="",Et("settings"),gn("service"),p(),ie({forceBulk:!0});return}if(u==="open-service-task-modal"){const d=String(l.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(d)&&(o.systemModal=`service-task-${d}`,p(),ie({forceBulk:!0}));return}if(u==="press-named-button"){const d=String(l.dataset.oqButtonKey||l.dataset.buttonKey||l.getAttribute("data-oq-button-key")||"").trim();if(d){d==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!0,o.commissioningTaskLock="cm100",o.commissioningBoilerHeatPowerDisplay=""):d==="commissioningCm100Stop"?(o.pendingCommissioningCm100Start=!1,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="",o.commissioningBoilerHeatPowerDisplay=""):d==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!0,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="boiler",o.commissioningBoilerHeatPowerDisplay=""):d==="boilerPowerTestAbort"||d==="boilerPowerTestApply"?o.commissioningTaskLock="boiler":d==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="autotune"):d==="flowAutotuneAbort"||d==="flowAutotuneApply"?o.commissioningTaskLock="autotune":d==="airPurgeStart"?(o.pendingAirPurgeStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="purge"):d==="airPurgeAbort"?o.commissioningTaskLock="purge":d==="manualFlowStart"?(o.pendingManualFlowStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-flow"):d==="manualFlowAbort"?o.commissioningTaskLock="manual-flow":d==="manualHpStart"?(o.pendingManualHpStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-hp"):d==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.commissioningTaskLock="hp-water-calibration"):d==="hpWaterCalibrationAbort"||d==="hpWaterCalibrationApply"?o.commissioningTaskLock="hp-water-calibration":d==="manualHpAbort"&&(o.commissioningTaskLock="manual-hp");const g=[];let f=0,h="",w="";if(d==="acknowledgeCompressorCyclingAlert")g.push(...ea);else if(d==="commissioningCm100Start"||d==="commissioningCm100Stop")g.push("commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive");else if(d==="boilerPowerTestStart"||d==="boilerPowerTestAbort"||d==="boilerPowerTestApply")g.push("commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower");else if(d==="flowAutotuneStart"||d==="flowAutotuneAbort"||d==="flowAutotuneApply")g.push("commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi");else if(d==="airPurgeStart"||d==="airPurgeAbort")g.push("commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode");else if(d==="hpWaterCalibrationStart"||d==="hpWaterCalibrationAbort"||d==="hpWaterCalibrationApply")g.push("commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode");else if(d==="manualFlowStart"||d==="manualFlowAbort"||d==="manualFlowApplyHeating"||d==="manualFlowApplyCooling")g.push("commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint");else if(d==="manualHpStart"||d==="manualHpAbort")g.push("commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode");else if(Is.has(d)){const b=rd(d);b&&(g.push(...xs(b)),f=d.endsWith("Load")?1200:3200,h=d.endsWith("Load")?`HP${b} ODU runtime tabel lezen aangevraagd.`:`HP${b} ODU runtime write aangevraagd; controleer status/readback.`,w=`ODU runtime actie mislukt voor HP${b}`)}Ut(d,{...g.length?{refreshKeys:g}:{},...f?{refreshDelayMs:f}:{},...h?{successNotice:h}:{},...w?{errorPrefix:w}:{}})}return}if(u==="close-system-modal"){hn(),mo(),o.systemModal="",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authNotice="",o.authError="",o.apiSecurityNotice="",o.apiSecurityError="",o.mqttNotice="",o.mqttError="",Dr(),p(),Zn();return}if(u==="clear-webserver-log-output"){zn();return}if(u==="copy-webserver-log-output"){Fh();return}if(u==="start-debug-recording"){Yh(l.dataset.debugMinutes||15);return}if(u==="start-rolling-debug-recording"){Jh();return}if(u==="select-debug-recording-duration"){Bh(l.dataset.debugMinutes||15);return}if(u==="stop-debug-recording"){ef();return}if(u==="freeze-debug-recording"){Xh();return}if(u==="download-debug-recording"){af();return}if(u==="copy-debug-recording"){sf();return}if(u==="confirm-settings-backup-restore"){im();return}if(u==="confirm-restart"){Ut("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"});return}if(u==="select-surface"){const d=l.dataset.surface==="native";if(o.nativeOpen===d){o.nativeOpen&&Hr();return}o.nativeOpen=d,Js(o.nativeOpen?"native":"app"),o.controlError="",o.controlNotice="",o.settingsInfoOpen="",o.updateModalOpen=!1,o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,be(),xe(),hn(),o.systemModal="",o.nativeOpen&&Hr(),p(),ca(),window.requestAnimationFrame(()=>{o.nativeOpen?o.nativeApp&&o.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}if(u==="toggle-overview-theme"){Ed(o.overviewTheme==="light"?"dark":"light"),p();return}if(u==="select-hp-visual"){Rd(l.dataset.hpVisual==="compact"?"compact":"schematic"),p();return}if(u==="select-hp-layout"){Od(l.dataset.hpLayout||"equal"),p();return}if(u==="select-step"){o.currentStep=l.dataset.stepId||"generation",p();return}if(u==="apply-quickstart-flow-source"){Tm();return}if(u==="refresh-quickstart-flow-signal"){Cm();return}if(u==="start-quickstart-flow-test"){Am();return}if(u==="abort-quickstart-flow-test"){Hm();return}if(u==="apply-quickstart-thermostat-source"){Mm();return}if(u==="previous-step"){qs(-1),p();return}if(u==="next-step"){qs(1),p();return}if(u==="select-settings-option"){const d=l.dataset.selectKey||"",g=l.dataset.selectOption||"";d&&g&&String(C(d)||"")!==g&&xr(d,g);return}if(u==="toggle-overview-control"){const d=l.dataset.controlKey||"",g=(l.dataset.controlState||"").toLowerCase();d&&(g==="on"||g==="off")&&km(d,g==="on");return}if(u==="select-overview-control-option"){const d=l.dataset.controlKey||"",g=l.dataset.controlOption||"";d&&g&&String(C(d)||"")!==g&&xr(d,g);return}if(u==="suggest-curve-fallback"){const d=Rl();d&&_a("curveFallbackSupply",d.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");return}if(u==="apply"||u==="reset"){Km(u);return}if(u==="run-firmware-check"){Pm();return}if(u==="install-firmware-update"){Rm();return}if(u==="install-firmware-connection-switch"){Lm();return}if(u==="install-firmware-topology-switch"){Om();return}if(u==="toggle-firmware-advanced"){o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen?(o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,be(),xe()):o.firmwareAdvancedOpen=!0,p();return}if(u==="toggle-firmware-connection-switch"){o.firmwareConnectionSwitchOpen=!o.firmwareConnectionSwitchOpen,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareConnectionSwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,be(),xe()),p();return}if(u==="toggle-firmware-topology-switch"){o.firmwareTopologySwitchOpen=!o.firmwareTopologySwitchOpen,o.firmwareTopologySwitchConfirmed=!1,o.firmwareTopologySwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,be(),xe()),p();return}if(u==="toggle-firmware-upload"){o.updateManualUploadOpen?(o.updateManualUploadOpen=!1,be()):(o.firmwareAdvancedOpen=!0,o.updateManualUploadOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateTestFirmwareOpen=!1,xe(),o.updateManualUploadError=""),p();return}if(u==="upload-firmware-file"){xm();return}if(u==="toggle-firmware-test"){o.updateTestFirmwareOpen?(o.updateTestFirmwareOpen=!1,xe()):(o.firmwareAdvancedOpen=!0,o.updateTestFirmwareOpen=!0,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,be(),o.updateTestFirmwareError=""),p();return}if(u==="install-firmware-test"){Fm();return}if(u==="save-web-auth"){Vm();return}if(u==="disable-web-auth"){_m();return}}function wm(e){const t=e.target.closest("[data-curve-key]");!t||!ce()||(o.draggingCurveKey=t.dataset.curveKey||"",Zl(e.clientY))}function Sm(e){typeof Ns=="function"&&Ns(e),o.draggingCurveKey&&Zl(e.clientY)}function qm(){if(!o.draggingCurveKey)return;const e=o.draggingCurveKey,t=Se(e,C(e));o.draggingCurveKey="",_a(e,t,"Curvepunt bijgewerkt.")}async function xr(e,t){const n=L[e];o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.entities[e]={...o.entities[e]||{},state:t,value:t},p();try{const r=await fetch(`${z(n.domain,n.name,"set")}?option=${encodeURIComponent(t)}`,{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${n.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.entities.firmwareUpdateChannel={...o.entities.firmwareUpdateChannel||{},state:t,value:t},$a(t),p(),await Aa(),o.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(o.controlNotice="Logger level bijgewerkt.",o.systemModal==="webserver-logs"&&Tn()):e==="webServerLogHistoryEnabled"?(enabled?(o.webServerLogHistoryLoaded=!1,Tn()):zn(),o.systemModal==="webserver-logs"&&p()):o.appView==="settings"?await I(Lt(),"all"):await I(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...gt,...Io],"state"),e==="strategy"&&o.appView!=="settings"&&await I(ce(t)?pe.map(a=>a.key):ao,"state")}catch(r){o.controlError=`${n.name} kon niet worden bijgewerkt. ${r.message}`}finally{o.busyAction="",p()}}async function km(e,t){const n=L[e];if(n){o.busyAction=`switch-${e}`,o.controlNotice="",o.controlError="",p();try{const r=t?"turn_on":"turn_off",a=await fetch(z(n.domain,n.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:t,state:t},o.controlNotice=`${n.name} ${t?"ingeschakeld":"uitgeschakeld"}.`,o.busyAction="",o.appView==="overview"?await I([...Wo,...Pe,"setupComplete",...io],"state"):o.appView==="settings"?(await I(Lt(),"all"),La.includes(e)&&To()):await I(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...gt,...Io],"state"),p()}catch(r){o.controlError=`${n.name} aanpassen mislukt (${r.message}).`,p()}finally{o.busyAction="",p()}}}async function Tm(){const e=Yo();if(!e.canApply){o.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",p();return}o.busyAction="quickstart-flow-source",o.controlNotice="",o.controlError="",p();const t=async(n,r)=>{if(!y(n))return;const a=C(n);if(typeof r=="boolean"&&A(n)===r||typeof r!="boolean"&&String(a)===String(r))return;const i=await Lo(n,r);o.entities[n]={...o.entities[n]||{},value:i,state:i}};try{e.requiresCic?(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),await t("flowSource","CIC"),o.quickStartCicFeedUrlDraft=null,o.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await t("qFlowSource",e.qFlowTarget),await t("flowSource","Outdoor unit"),o.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await I(mt,"all")}catch(n){o.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${n.message}`}finally{o.busyAction="",p()}}async function Cm(){o.busyAction="quickstart-flow-refresh",o.controlNotice="",o.controlError="",p();try{await I(mt,"all");const e=Yo();o.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){o.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{o.busyAction="",p()}}async function Ql(e,t){const n=L[e];if(!n||!y(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");const r=await fetch(z(n.domain,n.name,t?"turn_on":"turn_off"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`)}async function Em(){const e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(n=>{o.optionalMissingEntities&&delete o.optionalMissingEntities[n],delete o.entities[n]}),await I(e,"all");const t=e.filter(n=>!o.entities[n]);if(t.length){const n=t.map(r=>L[r]?.name||r).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${n}.`)}}async function $m(){for(let e=0;e<40;e+=1){await new Promise(t=>window.setTimeout(t,1e3));try{await I(mt,"state")}catch{return}if(!A("quickFlowTest")){o.busyAction!=="quickstart-flow-test-abort"&&(o.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),p();return}}}async function Am(){if(!Yo().canRunFlowTest){o.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",p();return}o.busyAction="quickstart-flow-test-start",o.controlNotice="",o.controlError="",p();let t=!1;try{if(await Em(),!A("cm100Active")){const a=L.commissioningCm100Start,i=await fetch(z(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);t=!0}let n=A("cm100Active")&&String(C("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!n&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await I(["commissioningStatus","cm100Active"],"state"),n=A("cm100Active")&&String(C("commissioningStatus")||"").trim()==="CM100 READY";if(!n){const a=String(C("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await Ql("quickFlowTest",!0),await I(mt,"all");const r=String(C("commissioningStatus")||"").trim();if(!A("quickFlowTest"))throw new Error(r||"De waterpomptest kon niet worden gestart.");o.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",$m()}catch(n){if(t&&!A("quickFlowTest"))try{const r=L.commissioningCm100Stop;await fetch(z(r.domain,r.name,"press"),{method:"POST"})}catch{}o.controlError=`Waterpomptest starten mislukt. ${n.message}`}finally{o.busyAction="",p()}}async function Hm(){o.busyAction="quickstart-flow-test-abort",o.controlNotice="",o.controlError="",p();try{await Ql("quickFlowTest",!1),await I(mt,"all"),o.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){o.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{o.busyAction="",p()}}async function Mm(){const e=ti();if(!e.canApply){o.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",p();return}o.busyAction="quickstart-thermostat-source",o.controlNotice="",o.controlError="",p();const t=async(n,r)=>{if(!y(n))return;const a=C(n);if(typeof r=="boolean"&&A(n)===r||typeof r!="boolean"&&String(a)===String(r))return;const i=await Lo(n,r);o.entities[n]={...o.entities[n]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await t("otEnabled",!0):e.selectedSource==="CIC"&&(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),o.quickStartCicFeedUrlDraft=null),await t("roomTempSource",e.selectedSource),await t("roomSetpointSource",e.selectedSource),o.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await I(Ln,"all")}catch(n){o.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${n.message}`}finally{o.busyAction="",p()}}async function Pm(){const e=L.checkFirmwareUpdates;if(e){o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateCheckBusy=!0,o.controlError="",o.controlNotice="",p();try{await Un("current build",{poll:!1,force:!0}),$a();const t=await fetch(z(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);await Aa(),o.controlNotice="Firmwarecontrole bijgewerkt."}catch(t){o.controlError=`Firmwarecontrole mislukte. ${t.message}`}finally{o.updateCheckBusy=!1,p()}}}async function Nm(){try{await I(na,"all",{concurrency:At,forceMissing:!0}),o.updateModalOpen&&p()}catch{}}async function Un(e,t={}){const n=L.firmwareUpdateTarget;if(!n||!y("firmwareUpdateTarget"))return!1;const r=String(e||"").trim();if(!r)return!1;if(!t.force&&String(C("firmwareUpdateTarget")||"").trim()===r)return!0;o.entities.firmwareUpdateTarget={...o.entities.firmwareUpdateTarget||{},state:r,value:r};const a=await fetch(`${z(n.domain,n.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.poll!==!1?($a(),await Aa({expectedBuildLabel:t.expectedBuildLabel||""})):!0}async function Rm(){const e=se();if(e){o.firmwareAdvancedOpen=!1,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,be(),xe(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=Ht(e),o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallMode="normal",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",p();try{await Un("current build",{poll:!1,force:!0}),o.updateInstallTargetVersion=Ht(se()||{})||o.updateInstallTargetVersion,_n();const t=L.installFirmwareUpdateTarget,n=t&&y("installFirmwareUpdateTarget")?z(t.domain,t.name,"press"):z("update","Firmware Update","install"),r=await fetch(n,{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);await zo({initialDelayMs:Vo,pollDelayMs:Fn})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||o.updateInstallTargetVersion,o.controlNotice=""):o.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(t){o.controlError=`OTA-update kon niet worden gestart. ${t.message}`}finally{Ko(),p()}}}async function Lm(){const e=ma(),t=L.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareConnectionSwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",p();return}o.updateManualUploadOpen=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,be(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="connection-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=Z(),o.updateInstallTargetVersion=oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.controlError="",o.controlNotice="",p();try{if(!await Un("alternate connection",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=Ht(se()||{})||oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,p(),_n();const r=await fetch(z(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(await zo({initialDelayMs:Vo,pollDelayMs:Fn}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||o.updateInstallTargetVersion||"",o.firmwareConnectionSwitchConfirmed=!1,o.controlNotice="";else{const i=Ie(e.targetConnection);o.controlNotice=`Verbindingswissel naar ${i} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(n){o.controlError=`Verbindingswissel kon niet worden gestart. ${n.message}`}finally{Ko(),p()}}}async function Om(){const e=ha(),t=L.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareTopologySwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de opstellingswissel.",p();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,be(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="topology-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=e.targetTopology,o.updateInstallTargetVersion=oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.controlError="",o.controlNotice="",p();try{if(!await Un("alternate topology",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=Ht(se()||{})||oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,p(),_n();const r=await fetch(z(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(await zo({initialDelayMs:Vo,pollDelayMs:Fn}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||o.updateInstallTargetVersion||"",o.firmwareTopologySwitchConfirmed=!1,o.controlNotice="";else{const i=Po(e.targetTopology);o.controlNotice=`Opstellingswissel naar ${i} is gestart. Wacht tot het device met die opstelling terugkomt.`}}catch(n){o.controlError=`Opstellingswissel kon niet worden gestart. ${n.message}`}finally{Ko(),p()}}}async function Dm(e,t){const n=fa(e,t);if(!n)throw new Error("Geen geldig PR-target gevonden.");const r=await fetch(n.releaseApiUrl,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});if(r.status===404)throw new Error(`Geen testfirmware gevonden voor PR ${e}. Controleer of het label de build al heeft gepubliceerd.`);if(!r.ok)throw new Error(`GitHub API gaf HTTP ${r.status}`);const a=await r.json(),i=Array.isArray(a.assets)?a.assets:[],l=i.find(g=>g&&g.name===t.otaFileName),c=i.find(g=>g&&g.name===t.md5FileName);if(!l||!l.browser_download_url)throw new Error(`PR ${e} bevat geen OTA-build voor ${t.label}.`);if(!c||!c.browser_download_url)throw new Error(`PR ${e} mist de md5-controle voor ${t.label}.`);const u=String(a.name||a.tag_name||`PR ${e}`).trim(),d=String(l.updated_at||a.published_at||"").trim();return{otaUrl:l.browser_download_url,md5Url:c.browser_download_url,label:d?`${u} \xB7 ${d.replace("T"," ").replace("Z"," UTC")}`:u}}async function Xi(e,t){if(!y(e))throw new Error(`${L[e]?.name||e} is niet beschikbaar op deze firmware.`);const n=await Lo(e,t);o.entities[e]={...o.entities[e]||{},state:n,value:n}}async function Fm(){const e=Ro(),t=Wn(),n=L.installFirmwareTestOta;if(!e){o.updateTestFirmwareError="Vul een geldig PR-nummer in.",p();return}if(!t.available){o.updateTestFirmwareError=t.error||"Dit firmwaretarget wordt niet herkend.",p();return}if(!o.updateTestFirmwareConfirmed){o.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",p();return}if(!n||!y("installFirmwareTestOta")){o.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",p();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,be(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion="",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallMode="test-firmware",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null,p();let r=!1;try{const a=await Dm(e,t);o.updateTestFirmwareBuild=a.label,p(),await Xi("firmwareTestOtaUrl",a.otaUrl),await Xi("firmwareTestOtaMd5Url",a.md5Url),r=!0,_n();const i=await fetch(z(n.domain,n.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);await zo({initialDelayMs:Vo,pollDelayMs:Fn})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||`PR ${e}`,o.updateTestFirmwareOpen=!1,xe(),o.controlNotice=""):o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){r&&Ol(a.message)?o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:o.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{Ko(),p()}}async function xm(){const e=o.updateManualUploadFile;if(!e){o.updateManualUploadError="Kies eerst een firmwarebestand.",p();return}o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=oe()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallMode="",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateManualUploadError="",p();try{const t=new FormData;t.append("update",e,e.name||"firmware.bin");const n=await fetch("/update",{method:"POST",body:t});if(!n.ok)throw new Error(`HTTP ${n.status}`);o.updateManualUploadOpen=!1,be(),await zo()?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=oe()||o.updateInstallTargetVersion||"",o.controlNotice=""):o.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(t){o.updateManualUploadError=`Handmatige upload mislukte. ${t.message}`}finally{Ko(),p()}}async function _a(e,t,n=""){const r=L[e],a=Se(e,t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=a,p();try{const i=await fetch(`${z(r.domain,r.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=n||`${r.name} bijgewerkt.`,await I(o.appView==="settings"?Lt():[...new Set([e,"setupComplete","strategy",...gt,...Io])],"state")}catch(i){o.inputDrafts[e]=String(a).replace(".",","),o.controlError=`${r.name} kon niet worden bijgewerkt. ${i.message}`}finally{o.busyAction="",p()}}async function Im(e,t){const n=L[e],r=lo(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",p();try{const a=await fetch(`${z(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.controlNotice=`${n.name} bijgewerkt.`,await I(o.appView==="settings"?Lt():[e,"setupComplete"],"state")}catch(a){o.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",p()}}async function Wm(e,t){const n=L[e],r=String(t||"").trim();o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=r,p();try{const a=await fetch(`${z(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:r,state:r},delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${n.name} bijgewerkt.`,await I(o.appView==="settings"?Lt():[e,"setupComplete"],"state")}catch(a){o.inputDrafts[e]=r,o.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",p()}}async function Ir(e,t){const n=L[e],r=Xe(t)||Ho,a=await fetch(`${z(n.domain,n.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:r,state:r},r}async function Yl(e,t){const n=L[e],r=t?"turn_on":"turn_off",a=await fetch(z(n.domain,n.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:t,state:t},t}async function Jl(){await I([...new Set([...Wo,...Pe,"setupComplete",...io])],"state")}async function Bm(e,t){const n=L[e],r=Xe(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",p();try{await Ir(e,r),o.controlNotice=`${n.name} bijgewerkt.`,await I(o.appView==="settings"?Lt():[e,"setupComplete","openquattEnabled"],"state")}catch(a){o.controlError=`${n.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",p()}}async function Vm(){const e=o.authStatus||{},t=e.enabled===!0,n=e.setup_window_active===!0,r=String(o.authDraftCurrentPassword||""),a=String(o.authDraftUsername||"").trim(),i=String(o.authDraftNewPassword||""),l=String(o.authDraftConfirmPassword||"");if(!a||!i){o.authError="Vul een gebruikersnaam en wachtwoord in.",p();return}if(i!==l){o.authError="De twee wachtwoorden zijn niet gelijk.",p();return}if(t&&!r){o.authError="Vul je huidige wachtwoord in.",p();return}if(!t&&!n){o.authError="Houd de herstelknop 5 seconden vast.",p();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",p();return}o.authBusy=!0,o.authError="",o.authNotice="",p();try{const c=new URLSearchParams;c.set("csrf_token",e.csrf_token),c.set("current_password",r),c.set("new_username",a),c.set("new_password",i);const u=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:c.toString()}),d=await u.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!u.ok||!d.ok)throw new Error(d.error||`HTTP ${u.status}`);await co({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername=String(o.authStatus?.username||a).trim(),o.authNotice=t?"Login aangepast.":"Login staat nu aan.",o.authError="",p()}catch(c){o.authError=`Opslaan is mislukt. ${c.message}`,p()}finally{o.authBusy=!1,p()}}async function _m(){const e=o.authStatus||{};if(!e.enabled){o.authNotice="Login staat al uit.",o.authError="",p();return}const t=String(o.authDraftCurrentPassword||"");if(!t){o.authError="Vul je huidige wachtwoord in.",p();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",p();return}o.authBusy=!0,o.authError="",o.authNotice="",p();try{const n=new URLSearchParams;n.set("csrf_token",e.csrf_token),n.set("current_password",t);const r=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:n.toString()}),a=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!a.ok)throw new Error(a.error||`HTTP ${r.status}`);await co({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername="",o.authNotice="Login staat nu uit.",o.authError="",p()}catch(n){o.authError=`Uitzetten is mislukt. ${n.message}`,p()}finally{o.authBusy=!1,p()}}async function vr(e){const t=Xe(e);if(e&&!t){o.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",p();return}if(t&&!y("openquattResumeAt")){o.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",p();return}o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",p();let n=!1;try{y("openquattResumeAt")&&(await Ir("openquattResumeAt",t||Ho),n=!!t),await Yl("openquattEnabled",!1),o.pauseResumeDraft=t?Rr(t):"",o.systemModal="",o.controlNotice=t?`Openquatt regeling is tijdelijk uitgeschakeld tot ${Ra(t)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await Jl()}catch(r){if(n&&y("openquattResumeAt"))try{await Ir("openquattResumeAt",Ho)}catch{}o.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${r.message}`}finally{o.busyAction="",p()}}async function jm(){o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",p();try{await Yl("openquattEnabled",!0),o.pauseResumeDraft="",o.systemModal="",o.controlNotice="Openquatt regeling is weer actief.",await Jl()}catch(e){o.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{o.busyAction="",p()}}async function Km(e){const t=L[e];o.busyAction=e,o.controlError="",o.controlNotice="",p();try{const n=await fetch(z(t.domain,t.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);o.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await I(["setupComplete"],"state"),e==="reset"&&(o.currentStep=Nn[0].id,o.quickStartModalMode="wizard",o.quickStartModalOpen=!0),o.quickStartModalOpen=e!=="apply",Et("overview",{syncMode:"replace"}),ie({forceFast:!0})}catch(n){o.controlError=`Actie mislukt voor "${t.name}". ${n.message}`}finally{o.busyAction="",p()}}function Um(){window.requestAnimationFrame(()=>{if(!o.root||o.systemModal!=="service-task-hp-water-calibration")return;const e=o.root.querySelector("[data-oq-service-task-scroller]"),t=o.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!t)return;const n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),a=e.scrollTop+r.top-n.top-24;e.scrollTop=Math.max(0,a)})}async function Ut(e,t={}){const n=L[e];if(n){o.busyAction=e,o.controlError="",o.controlNotice="",p();try{const r=await fetch(z(n.domain,n.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||Is.has(e)||(hn(),o.systemModal=""),o.controlNotice=t.successNotice||`${n.name} gestart.`,t.reconnectMode&&Ea(t.reconnectMode),Array.isArray(t.refreshKeys)&&t.refreshKeys.length){const i=Number(t.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await I(t.refreshKeys,"state")}}catch(r){e==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!1,o.commissioningTaskLock=""):e==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!1,o.commissioningTaskLock=""):e==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!1,o.commissioningTaskLock=""):e==="airPurgeStart"?(o.pendingAirPurgeStart=!1,o.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock=""):e==="manualFlowStart"?(o.pendingManualFlowStart=!1,o.commissioningTaskLock=""):e==="manualHpStart"&&(o.pendingManualHpStart=!1,o.commissioningTaskLock=""),o.controlError=`${t.errorPrefix||`Actie mislukt voor "${n.name}"`}. ${r.message}`}finally{o.busyAction="",p(),e==="hpWaterCalibrationApply"&&Um()}}}function Zl(e){const t=o.root?o.root.querySelector(".oq-helper-curve-svg"):null;if(!t||!o.draggingCurveKey)return;const n=t.getBoundingClientRect(),r=22,a=180,i=(e-n.top)/n.height*240,c=70-(Math.min(r+a,Math.max(r,i))-r)/a*50,u=Se(o.draggingCurveKey,c);String(C(o.draggingCurveKey))!==String(u)&&(o.drafts[o.draggingCurveKey]=u,p())}function Go({key:e,value:t,meta:n,controlClass:r,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
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
    `}function zm(){const e=[];e.push(ce()?"Stooklijn":"Power House");const t=String(C(ce()?"curveControlProfile":"phResponseProfile")||"").trim();t&&e.push(`profiel ${t}`);const n=String(C("flowControlMode")||"").trim();return n&&e.push(`flow ${n==="Manual PWM"?"handmatig":"setpoint"}`),n==="Manual PWM"&&y("manualIpwm")?e.push(`iPWM ${j("manualIpwm")}`):y("flowSetpoint")&&e.push(`flow ${j("flowSetpoint")}`),y("dayMax")&&e.push(`dag ${j("dayMax")}`),y("silentMax")&&e.push(`silent ${j("silentMax")}`),y("maxWater")&&e.push(`max water ${j("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function y(e){return!!o.entities[e]}function B(e,t="\u2014"){const n=o.entities[e];if(!n)return t;if(typeof n.state=="string"&&n.state.trim()!=="")return n.state;const r=n.value??n.state;return r==null||r===""?t:typeof r=="boolean"?r?"Aan":"Uit":typeof r=="number"&&!Number.isNaN(r)&&n.uom?`${r} ${n.uom}`:String(r)}function M(e){const t=Number(C(e));return Number.isNaN(t)?NaN:t}function Xl(e){const t=String(e||"").toLowerCase();return t.includes("cop")||t.includes("eer")}function ec(e){const t=String(e||"");if(t==="totalEer"){const n=M("totalCoolingPower"),r=M("coolingPowerInput"),a=Number.isNaN(r)?M("totalPower"):r;return!Number.isNaN(n)&&!Number.isNaN(a)&&a>=5?n/a:NaN}if(t==="totalCop"){const n=M("totalHeat"),r=M("heatingPowerInput"),a=Number.isNaN(r)?M("totalPower"):r;return!Number.isNaN(n)&&!Number.isNaN(a)&&a>=5?n/a:NaN}return NaN}function $o(e,t=""){const n=String(o.entities[e]?.uom||"").trim();return n||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||t}function We(e){const t=o.entities[e],n=ec(e);if(!t)return Number.isNaN(n)?"\u2014":x(n,1,$o(e));const r=M(e);if(Number.isNaN(r))return Number.isNaN(n)?B(e):x(n,1,$o(e));const a=r>0||Number.isNaN(n)?r:n,i=Xl(e)?1:0;return x(a,i,$o(e))}function A(e){const t=o.entities[e];if(!t)return!1;if(typeof t.value=="boolean")return t.value;const n=String(t.state??t.value??"").toLowerCase();return n==="on"||n==="true"||n==="1"}function po(){return!y("trendHistoryEnabled")||A("trendHistoryEnabled")}function tc(){const e=o.entities.setupComplete;if(!e)return null;const t=String(e.state??e.value??"").trim().toLowerCase();return!t||t==="unknown"||t==="unavailable"?null:t==="on"||t==="true"||t==="1"?!0:t==="off"||t==="false"||t==="0"?!1:null}function Gm(){return`
      <div class="oq-helper-app-nav">
        ${Zr.filter(e=>e.id!=="diagnosis"||po()).map(e=>`
          <button
            class="oq-helper-app-tab ${o.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            ${Xr(e.icon,"oq-helper-app-tab-icon")}
            <span>${s(e.label)}</span>
          </button>
        `).join("")}
      </div>
    `}function Qm(e=o.appView){return Zr.find(t=>t.id===e)?.label||"OpenQuatt"}function es(){if(typeof document>"u")return;if(o.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}const e=Qm();document.title=`${e} \u2022 OpenQuatt`}function ts(){if(typeof document>"u")return;if(o.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");const e=o.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}const os="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",Ym="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==",oc=250;function nc(){if(typeof window>"u")return[];const e=window.__OQ_DEV_WEBSERVER_LOGS__,t=typeof e=="function"?e():e;return Array.isArray(t)?t.map(n=>String(n||"")).filter(n=>n.trim()!==""):[]}function go(){return typeof window>"u"?!1:nc().length>0}function Jm(){return`${Pt()}/events`}function Zm(){return`${Pt()}/openquatt/logs/recent`}function kn(){const e=o.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;const t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function rc(){return o.nativeOpen?"Niet beschikbaar":go()?"Voorbeeld":o.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function Xm(e){const t=Math.max(0,Math.floor(Number(e)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function ac(e){const t=Number(e)||0;if(t>9466848e5){const n=e instanceof Date?e:new Date(t),r={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(n)}catch{return n.toLocaleString("nl-NL",r)}}return Xm(t)}function eh(e){const t=Number(e)||0;if(t>9466848e5)return new Date(t).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});const n=Math.max(0,Math.floor(t/1e3)),r=Math.floor(n/3600),a=Math.floor(n%3600/60),i=n%60;return`Sinds opstart: ${r}u ${a}m ${i}s`}function th(){return o.nativeOpen?"Niet beschikbaar":go()?kn()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":kn()?"Buffer aan":"Buffer uit"}function oh(){return kn()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function ja(){return o.entities?.debugLevel||null}function ic(e=ja()){const t=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return t.length?t:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function nh(e=ja()){const t=String(e?.value??e?.state??"").trim(),n=ic(e);return n.includes(t)?t:n.includes("INFO")?"INFO":n[0]||""}function sc(e,t=null){if(!e||!t)return!1;const n=Number(e.seq),r=Number(t.seq);if(Number.isFinite(n)&&Number.isFinite(r)&&n===r)return!0;const a=String(e.raw??e.text??"").trim(),i=String(t.raw??t.text??"").trim();if(!a||a!==i)return!1;const l=Number(e.receivedAt??e.ts??0),c=Number(t.receivedAt??t.ts??0);return Math.abs(l-c)<=2e3}function rh(e,t){const n=Number(e.receivedAt??e.ts??0),r=Number(t.receivedAt??t.ts??0);if(n!==r)return n-r;const a=Number(e.seq??0),i=Number(t.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(t.raw??""))}function lc(e,{prepend:t=!1}={}){if(!Array.isArray(e)||e.length===0)return;const n=t?[...e,...o.webServerLogEntries]:[...o.webServerLogEntries,...e];n.sort(rh);const r=[];for(const a of n){const i=r[r.length-1]||null;sc(a,i)||r.push(a)}o.webServerLogEntries=r.slice(-oc)}function Ka(e,t={}){const n=Eh(e).trimEnd(),r=Number(t.receivedAt),a=Number(t.seq);return{raw:e,text:n,tone:$h(e),receivedAt:Number.isFinite(r)?r:Date.now(),seq:Number.isFinite(a)?a:void 0}}function ah(e,t){const r=Math.max(0,t-e-1)*9e4;return Date.now()-r}function ih(){const e=nc(),t=e.length;return e.map((n,r)=>Ka(n,{receivedAt:ah(r,t),seq:r+1}))}function sh(){const e=Gn();e&&(e.scrollTop=e.scrollHeight)}function ft(){const e=Gn();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Ua(e)}:null}function lh(e){if(!e)return;const t=Gn();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const n=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,n)}function dt(e,t=!0){if(!e)return;const n=Number(o.webServerLogScrollRestoreToken||0)+1;o.webServerLogScrollRestoreToken=n;const r=()=>{o.webServerLogScrollRestoreToken!==n||o.systemModal!=="webserver-logs"||lh(e)};if(t){window.requestAnimationFrame(r);return}r()}function cc(){return o.root?o.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}function ch(){const e=cc();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Ua(e)}:null}function uh(e){if(!e)return;const t=cc();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const n=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,n)}function ns(e,t=!0){if(!e)return;const n=Number(o.cm100CommissioningScrollRestoreToken||0)+1;o.cm100CommissioningScrollRestoreToken=n;const r=()=>{o.cm100CommissioningScrollRestoreToken!==n||o.systemModal!=="cm100-commissioning"||uh(e)};if(t){window.requestAnimationFrame(r);return}r()}function uc(){return o.root?o.root.querySelector("[data-oq-service-task-scroller]"):null}function dh(){const e=uc();return e?{scrollTop:e.scrollTop}:null}function ph(e){if(!e)return;const t=uc();t&&(t.scrollTop=Math.max(0,e.scrollTop))}function rs(e,t=!0){if(!e)return;const n=Number(o.serviceTaskModalScrollRestoreToken||0)+1;o.serviceTaskModalScrollRestoreToken=n;const r=()=>{o.serviceTaskModalScrollRestoreToken!==n||!String(o.systemModal||"").startsWith("service-task-")||ph(e)};if(t){window.requestAnimationFrame(r);return}r()}function dc(){return o.root?o.root.querySelector("[data-oq-history-storage-scroller]"):null}function gh(){const e=dc();return e?{scrollTop:e.scrollTop}:null}function mh(e){if(!e)return;const t=dc();t&&(t.scrollTop=Math.max(0,e.scrollTop))}function as(e,t=!0){if(!e)return;const n=Number(o.historyStorageModalScrollRestoreToken||0)+1;o.historyStorageModalScrollRestoreToken=n;const r=()=>{o.historyStorageModalScrollRestoreToken!==n||o.systemModal!=="history-storage"||mh(e)};if(t){window.requestAnimationFrame(r);return}r()}async function Tn(e={}){if(o.nativeOpen||typeof window.fetch!="function")return;const t=e.scrollState||ft(),n=Number(o.webServerLogHistoryRequestToken||0)+1;o.webServerLogHistoryRequestToken=n,o.webServerLogHistoryLoading=!0,o.webServerLogHistoryError="";try{const r=await window.fetch(Zm(),{headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.json();if(o.systemModal!=="webserver-logs"||o.webServerLogHistoryRequestToken!==n)return;const i=fh(a);o.webServerLogHistoryLoaded=!0,i.length>0&&(lc(i,{prepend:!0}),o.webServerLogRecentTail=i.slice(-4).map(l=>String(l.raw??l.text??"")),o.webServerLogRecentAnchorAt=Date.now())}catch(r){o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===n&&(o.webServerLogHistoryError=r instanceof Error?r.message:"Recente logs konden niet worden opgehaald.")}finally{o.webServerLogHistoryRequestToken===n&&(o.webServerLogHistoryLoading=!1),o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===n&&(p(),dt(t))}}function hh(e,t=0){if(!e||typeof e!="object")return null;const n=String(e.raw??"").trim()||String(e.message??"").trim();return n?Ka(n,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??t)}):null}function fh(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((n,r)=>hh(n,r+1)).filter(n=>n!==null)}function bh(e){if(!e||!Array.isArray(o.webServerLogRecentTail)||o.webServerLogRecentTail.length===0||Date.now()-Number(o.webServerLogRecentAnchorAt||0)>2500)return!1;const n=String(e.raw??e.text??"").trim();return n?o.webServerLogRecentTail.includes(n):!1}function vh(e,t=o.webServerLogEntries){return!e||!Array.isArray(t)||t.length===0?!1:t.some(n=>sc(e,n))}function yh(){go()&&o.webServerLogEntries.length===0&&(o.webServerLogEntries=ih()),o.webServerLogCopyMessage="",o.webServerLogCopyError="",o.systemModal="webserver-logs",p(),I(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(o.systemModal!=="webserver-logs")return;const e=ft();p(),dt(e)}),sh(),(!o.webServerLogHistoryLoaded||o.webServerLogEntries.length===0)&&Tn()}function zn(){o.webServerLogEntries=[],o.webServerLogError="",o.webServerLogHistoryError="",o.webServerLogHistoryLoading=!1,o.webServerLogHistoryLoaded=!1,o.webServerLogScrollRestoreToken=Number(o.webServerLogScrollRestoreToken||0)+1,o.webServerLogCopyMessage="",o.webServerLogCopyError="",o.webServerLogHistoryRequestToken+=1,o.webServerLogRecentTail=[],o.webServerLogRecentAnchorAt=0,o.systemModal==="webserver-logs"&&p()}function is(){const e=ft();Ge(),o.webServerLogEnabled=null,o.webServerLogConnected=!1,zn(),o.systemModal==="webserver-logs"&&Tn({scrollState:e})}function ss(){if(go()){Ge();return}if(!(o.mounted&&!o.nativeOpen&&o.systemModal==="webserver-logs")){Ge();return}if(o.webServerLogEnabled===!1){Ge();return}o.webServerLogSource||wh()}function wh(){if(go()){o.webServerLogEnabled=!0,o.webServerLogConnected=!1,o.webServerLogError="",p();return}if(typeof window.EventSource!="function"){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="Deze browser ondersteunt geen live logstream.",p();return}try{const e=new window.EventSource(Jm());o.webServerLogSource=e,e.addEventListener("open",Sh),e.addEventListener("ping",qh),e.addEventListener("log",Th),e.onerror=kh}catch(e){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",Ge(),p()}}function Ge(){const e=o.webServerLogSource;if(e)try{e.close()}catch{}o.webServerLogSource=null,o.webServerLogConnected=!1}function Sh(){if(!o.webServerLogSource||o.nativeOpen)return;const e=o.systemModal==="webserver-logs"?ft():null;o.webServerLogEnabled=!0,o.webServerLogConnected=!0,o.webServerLogError="",p(),dt(e)}function qh(){if(!o.webServerLogSource||o.nativeOpen)return;const e=o.systemModal==="webserver-logs"?ft():null;o.webServerLogEnabled=!0,o.webServerLogConnected||(o.webServerLogConnected=!0,o.webServerLogError="",p(),dt(e))}function kh(){if(!o.webServerLogSource)return;const e=o.systemModal==="webserver-logs"?ft():null;o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="De live logstream kon niet worden geopend.",Ge(),p(),dt(e)}function Th(e){if(!o.webServerLogSource||!e||typeof e.data!="string")return;const t=ft(),n=Ch(e.data);if(!n)return;const r=n.split(/\r?\n/).filter(u=>u.trim()!=="");if(r.length===0)return;const i=r.map(u=>Ka(u)).filter(u=>!bh(u)&&!vh(u));if(i.length===0)return;lc(i);const l=Hh(),c=Gn();Ah(l),Mh(i,l),o.webServerLogEnabled=!0,c&&t&&dt(t,!1)}function Ch(e){const t=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!t)return"";const n=t.trim();if(n.startsWith("{")&&n.endsWith("}")||n.startsWith("[")&&n.endsWith("]"))try{const r=JSON.parse(n),a=typeof r=="string"?r:r?.message??r?.msg??r?.text??r?.data??r?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return t}function Eh(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function $h(e){const t=String(e??""),n=Array.from(t.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=n.length-1;i>=0;i-=1){const l=n[i][1].split(";").map(c=>Number(c)).filter(c=>Number.isFinite(c));for(let c=l.length-1;c>=0;c-=1){const u=l[c];if(u===31||u===91)return"error";if(u===33||u===93)return"warning";if(u===32||u===92)return"info";if(u===36||u===96||u===34||u===35)return"debug";if(u===37||u===90||u===38||u===97)return"verbose"}}const r=t.match(/\[(E|W|I|D|V|VV)\]/i);if(!r)return"plain";const a=r[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function Ah(e){for(;o.webServerLogEntries.length>oc;)o.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function Hh(){return o.root?o.root.querySelector("[data-oq-webserver-log-output]"):null}function Gn(){return o.root?o.root.querySelector("[data-oq-webserver-log-scroller]"):null}function Ua(e){return e?e.scrollHeight-e.scrollTop-e.clientHeight<48:!1}function Mh(e,t){if(!(!t||e.length===0)){t.dataset.webServerLogEmpty==="true"&&(t.dataset.webServerLogEmpty="false",t.innerHTML="");for(const n of e)t.insertAdjacentHTML("beforeend",pc(n))}}function pc(e){const t=ac(e.receivedAt),n=eh(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(n)}">${s(t)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function Ph(e=o.webServerLogEntries){return e.length?e.map(t=>pc(t)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function Nh(){const e=[];return o.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),o.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(o.webServerLogCopyMessage)}</span>
      </div>
    `),o.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogCopyError)}</p>`),o.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogHistoryError)}</p>`),o.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogError)}</p>`),e.length?e.join(""):""}function Rh(){const e=kn(),t=o.loadingEntities||o.busyAction==="switch-webServerLogHistoryEnabled",n=th(),r=oh(),a=Lh();return`
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
  `}function Lh(){const e=ja();if(!e)return"";const t=ic(e),n=nh(e),r=o.loadingEntities||o.busyAction==="save-debugLevel";return`
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
  `}function Oh(){return o.webServerLogEntries.map(e=>{const t=String(e.raw??e.text??"").trimEnd();return t.trim()?`${ac(e.receivedAt)} ${t}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function Dh(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(t)}return n}async function Fh(){const e=Oh();if(o.webServerLogCopyMessage="",o.webServerLogCopyError="",!e){o.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",p();return}try{if(!await Dh(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.webServerLogCopyMessage=`${o.webServerLogEntries.length} logregel${o.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(t){o.webServerLogCopyError=t instanceof Error?t.message:"Kopi\xEBren naar het klembord is niet gelukt."}o.systemModal==="webserver-logs"&&p()}function xh(){const e=go();return`
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
        ${Rh()}
        ${Nh()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${o.webServerLogEntries.length===0?"true":"false"}">
            ${Ph()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${o.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `}function Be(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(o.debugRecordingSamples)?o.debugRecordingSamples.length:0}function _e(e=o.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function Qn(e=o.debugRecordingDeviceStatus){return _e(e)&&e?.frozen===!0&&!e?.active}function $t(e){const t=Math.max(0,Math.round(Number(e||0)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return n>0?`${n}u ${String(r).padStart(2,"0")}m`:r>0?`${r}m ${String(a).padStart(2,"0")}s`:`${a}s`}function gc(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):mc()}function mc(){if(o.debugRecordingDeviceStatus)return Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!o.debugRecordingStartedAt)return 0;const e=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(o.debugRecordingStartedAt||e))}function Yn(){return o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":Qn()?"Rolling gestopt":o.debugRecordingActive&&_e()?"Rolling actief":o.debugRecordingActive?"Bezig met opnemen":Be()>0?"Voltooid":"Niet gestart"}function za(){return Qn()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":o.debugRecordingActive&&_e()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":o.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":Be()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function Ih(){return Qn()?"Gestopt":o.debugRecordingActive&&_e()?`Rolling \xB7 ${$t(gc())}`:o.debugRecordingActive?`Loopt \xB7 ${$t(hc())}`:Be()>0?"Klaar":Yn()}function Wh(){const e=Number(o.debugRecordingSelectedMinutes||15);return Ar.map(n=>Number(n.minutes)).includes(e)?e:Number(Ar[0]?.minutes||15)}function Bh(e){o.debugRecordingActive||(o.debugRecordingSelectedMinutes=Math.max(1,Number(e)||15),o.debugRecordingNotice="",o.debugRecordingError="",p())}function hc(){return _e()?0:o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.remaining_s||0)*1e3):o.debugRecordingActive?Math.max(0,Number(o.debugRecordingEndsAt||0)-Date.now()):0}function Vh(){if(o.debugRecordingDeviceStatus){if(_e()){const a=Math.max(1,Number(o.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,Be()/a*100))}const n=Math.max(1,Number(o.debugRecordingDeviceStatus.duration_s||0)),r=Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0));return!o.debugRecordingActive&&Be()>0?100:Math.max(0,Math.min(100,r/n*100))}if(!o.debugRecordingActive||!o.debugRecordingStartedAt||!o.debugRecordingEndsAt)return Be()>0?100:0;const e=Math.max(1,Number(o.debugRecordingEndsAt)-Number(o.debugRecordingStartedAt)),t=Math.max(0,Date.now()-Number(o.debugRecordingStartedAt));return Math.max(0,Math.min(100,t/e*100))}function fc(e=o.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function _h(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}function bc(e){if(e?.recording?.active)return;const t=fc(e);if(t){o.debugRecordingAcknowledgedId=t;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",t)}catch{}}}function vc(){const e=o.debugRecordingDeviceStatus,t=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&t===0)return"";const n=!!e.active;if(!n&&fc(e)===o.debugRecordingAcknowledgedId)return"";const r=_e(e),a=$t(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=$t(Math.max(0,Number(e.remaining_s||0))*1e3),l=n?r?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:r?"Rolling gestopt":"Debug klaar",c=n?r?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:r?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
    <button
      class="oq-debug-recording-header-status${n?" oq-debug-recording-header-status--active":" oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${s(c)}"
      title="${s(c)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${s(l)}</span>
    </button>
  `}function jh(){if(!o.root)return;const e=o.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;const t=e.querySelector(".oq-settings-system-row-value"),n=e.querySelector(".oq-settings-system-row-note");t&&(t.textContent=Yn()),n&&(n.textContent=za())}function Ga(e){const t={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return t[e]||t.status}function Kh(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${Ga(e)}</span>`}function Ue(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${Ga(e)}</span>`}function Uh(){return[...Gt]}function zh(){const e=[];return Gt.forEach((t,n)=>{const r=o.entities?.[t]||{},a=String(r.uom??r.unit_of_measurement??"").trim();a&&e.push([n,a])}),e}function Gh(e){return Array.isArray(e)?e.map((t,n)=>t===null?null:[n,t]).filter(Boolean):[]}function Jn(){o.debugRecordingTimer&&(window.clearTimeout(o.debugRecordingTimer),o.debugRecordingTimer=null)}function mo(){o.debugRecordingDevicePollTimer&&(window.clearTimeout(o.debugRecordingDevicePollTimer),o.debugRecordingDevicePollTimer=null)}function bt(e){return`${Pt()}/openquatt/debug-recording/${e}`}function ho(e){const t=e&&typeof e=="object"?e:{};o.debugRecordingDeviceStatus=t,o.debugRecordingActive=!!t.active,o.debugRecordingStartedAt=t.active||Number(t.sample_count||0)>0?Date.now()-Math.max(0,Number(t.elapsed_s||0)*1e3):0,o.debugRecordingEndsAt=t.active?Date.now()+Math.max(0,Number(t.remaining_s||0)*1e3):0,o.debugRecordingLastSampleAt=Number(t.sample_count||0)>0?Date.now():0}function Qa(){ho({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function Qh(){const e=await window.fetch(bt("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return ho(t),t}function Zn(e=2e3){mo(),o.debugRecordingActive&&(o.debugRecordingDevicePollTimer=window.setTimeout(()=>{Ya({silent:!0})},Math.max(0,Number(o.systemModal==="debug-recording"?e:5e3)||0)))}async function Ya(e={}){e.silent||(o.debugRecordingBusy=!0,o.debugRecordingError="",p());try{await Qh(),!o.debugRecordingActive&&e.silent&&(o.debugRecordingNotice="Debugopname is afgerond."),Zn()}catch(t){Qa(),o.debugRecordingError=`Status kon niet worden opgehaald. ${t.message||String(t)}`}finally{e.silent||(o.debugRecordingBusy=!1),!e.silent||o.systemModal==="debug-recording"?p():(Vp(),jh())}}async function yc(){const e=Fl(Gt,"state");let t=null;for(let n=0;n<e.length;n+=1){const r=await window.fetch(bt(`configure?reset=${n===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[n].body});if(!r.ok)throw new Error(`configuratie HTTP ${r.status}`);t=await r.json()}if(Number(t?.entity_field_count||0)!==Gt.length)throw new Error(`onvolledige debugset (${Number(t?.entity_field_count||0)}/${Gt.length})`);return t}async function Yh(e){const t=Math.max(1,Number(e)||15);Jn(),mo(),o.debugRecordingBusy=!0,o.debugRecordingError="",o.debugRecordingNotice="",o.debugRecordingSamples=[],o.debugRecordingEvents=[],o.debugRecordingInitialValues=null,o.debugRecordingLastValues=null,o.debugRecordingDeviceBundle=null,o.debugRecordingLastSampleAt=0,o.debugRecordingSequence=0,p();try{await yc();const n=await window.fetch(bt(`start?duration_s=${encodeURIComponent(t*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();ho(r),Zn()}catch(n){Qa(),o.debugRecordingError=`Debugopname kon niet worden gestart. ${n.message||String(n)}`}finally{o.debugRecordingBusy=!1,p()}}async function Jh(){Jn(),mo(),o.debugRecordingBusy=!0,o.debugRecordingError="",o.debugRecordingNotice="",o.debugRecordingSamples=[],o.debugRecordingEvents=[],o.debugRecordingInitialValues=null,o.debugRecordingLastValues=null,o.debugRecordingDeviceBundle=null,o.debugRecordingLastSampleAt=0,o.debugRecordingSequence=0,p();try{await yc();const e=await window.fetch(bt("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();ho(t),Zn()}catch(e){Qa(),o.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,p()}}async function Zh(){const e=await window.fetch(bt("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return ho(t),mo(),t}async function Xh(){Jn(),o.debugRecordingBusy=!0,o.debugRecordingError="",p();try{await Zh(),o.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){o.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,p()}}async function ef(e={}){Jn(),mo(),o.debugRecordingBusy=!0,o.debugRecordingError="",p();try{const t=await window.fetch(bt("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();ho(n),o.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(t){o.debugRecordingError=`Debugopname kon niet worden gestopt. ${t.message||String(t)}`}finally{o.debugRecordingBusy=!1,p()}}function ls(e={}){const t=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:o.debugRecordingStartedAt?new Date(Number(o.debugRecordingStartedAt)).toISOString():"",ended_at:t?new Date(t).toISOString():"",active:!!o.debugRecordingActive,duration_s:o.debugRecordingStartedAt?Math.round(Math.max(0,t-Number(o.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(cd/1e3),sample_count:Be(),column_count:Gt.length,storage:"browser"},columns:Uh(),units:zh(),initial:Gh(o.debugRecordingInitialValues),samples:o.debugRecordingSamples||[],events:o.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function Cn(e){return JSON.stringify(e)}function tf(){const e=Number(o.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([Cn(ls())]).size}catch{return Cn(ls()).length}}function of(e){const t=Math.max(0,Number(e)||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${(t/1024).toFixed(1)} kB`:`${Math.round(t)} B`}function nf(e,t){const n=new Blob([t],{type:"application/json"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function rf(e){const t=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),n=String(t).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${n}.oqdebug.json`}async function af(){if(Be()===0){o.debugRecordingError="Er is nog geen debugopname om te downloaden.",p();return}o.debugRecordingBusy=!0,o.debugRecordingError="";const e=o.debugRecordingActive&&_e();p();try{const t=await window.fetch(bt("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();o.debugRecordingDeviceBundle=n,nf(rf(n),Cn(n)),bc(n),o.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{o.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{o.debugRecordingBusy=!1,p()}}async function sf(){if(Be()===0){o.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",p();return}o.debugRecordingBusy=!0,o.debugRecordingError="";const e=o.debugRecordingActive&&_e();p();try{const t=await window.fetch(bt("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();if(o.debugRecordingDeviceBundle=n,!await Vl(Cn(n)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");bc(n),o.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{o.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{o.debugRecordingBusy=!1,p()}}function lf(){const e=o.debugRecordingActive,t=_e(),n=Qn(),r=Be(),a=o.debugRecordingBusy,i=of(tf()),l=Array.isArray(o.debugRecordingDeviceBundle?.events)?o.debugRecordingDeviceBundle.events.length:Array.isArray(o.debugRecordingEvents)?o.debugRecordingEvents.length:0,c=Wh(),u=hc(),d=gc(),g=Vh(),f=r>0,h=`${g.toFixed(1)}%`,w=[{icon:"status",label:"Status",value:Yn()},{icon:"clock",label:t?"Retentie":"Duur",value:$t(t?d:mc())},{icon:"samples",label:"Samples",value:String(r)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:o.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],b=o.debugRecordingError?{kind:"error",icon:"alert",text:o.debugRecordingError}:o.debugRecordingNotice?{kind:"success",icon:"check",text:o.debugRecordingNotice}:null;return`
    <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-debug-recording-modal" role="dialog" aria-modal="true" aria-labelledby="oq-debug-recording-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-debug-recording-modal-title">Debugopname</h2>
          </div>
          <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit debugopname">\xD7</button>
        </div>
        <p class="oq-helper-modal-copy">${s(za())}</p>
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${Ga("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(t?`Laatste ${$t(d)} bewaard`:`Nog ${$t(u)}`)}</span>
                <strong>${s(t?`${r}/${Number(o.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(g)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(h)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${w.map(m=>`
              <div class="oq-debug-recording-stat">
                <dt>${Kh(m.icon)}${s(m.label)}</dt>
                <dd>${s(m.value)}</dd>
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
              ${Ar.map(m=>{const S=Number(m.minutes)===c;return`
                  <button
                    class="oq-debug-recording-segment${S?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${m.minutes}"
                    aria-pressed="${S?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(m.label)}
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
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ue("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ue("activity")}Hervat rolling</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ue("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ue("activity")}Start rolling</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!f||a?"disabled":""}>${Ue("download")}${e&&t?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!f||a?"disabled":""}>${Ue("copy")}${e&&t?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${b?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${b.kind}" role="status">
              ${Ue(b.icon)}
              <span>${s(b.text)}</span>
            </p>
          `:""}
        </div>
      </section>
    </div>
  `}function fo(e,t,n){return n?`
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
    `:""}function ke(e,t,n,r,a="",i=""){return`<article class="oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(t)}</h3>${fo(e,t,n)}</div><div class="oq-settings-field-control">${r}</div>${i}</article>`}function X(e,t,n,r,a=""){return ke(e,t,n,`<div class="oq-settings-static-value">${s(r)}</div>`,a)}function re(e,t={}){const n=typeof t=="number"?{decimals:t}:t||{},r=o.entities[e];if(!r)return"\u2014";const a=Number(r.value);if(!Number.isNaN(a)){const l=Number.isInteger(a)?0:Number.isFinite(n.decimals)?n.decimals:1;let c=a.toFixed(Math.max(0,l));return n.trimTrailingZeros&&c.includes(".")&&(c=c.replace(/\.?0+$/,"")),`${c}${r.uom?` ${r.uom}`:""}`}return String(r.state??r.value??"").trim()||"\u2014"}function Xn(e,t="\u2014"){const n=o.entities[e];if(!n)return t;const r=String(n.state??n.value??"").trim();return!r||r==="0"||r==="\u2014"?t:r}function to(e,t="",n=2){const r=Number(e);return Number.isFinite(r)?`${r.toFixed(Math.max(0,n))}${t?` ${t}`:""}`:"\u2014"}function de(e,t=2){return re(e,{decimals:t})}function Ja(e,t,n){const r=M(t),a=M(n);if(Number.isFinite(r)&&Number.isFinite(a))return r-a;const i=M(e);return Number.isFinite(i)?i:NaN}function cs(e,t){const n=M(e),r=M(t),a=Number.isNaN(n)?"Lvl \u2014":`Lvl ${Math.round(n)}`,i=Number.isNaN(r)?"\u2014 Hz":`${Math.round(r)} Hz`;return`${a} (${i})`}function cf(e){const t=String(e||"").trim().toUpperCase();return!t||t==="0"||t==="IDLE"||t==="CM100 READY"||t==="CM100 STOPPED"||t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED")?!1:t.includes("REQUESTED")||t.includes("WAITING")||t.includes("WACHTEN")||t.includes("SETTLING")||t.includes("MEASUR")||t.includes("COOLDOWN")||t.includes("RUNNING")||t.includes("VALIDATING")||t.includes("STARTED")||t.includes("RECOVER")||t.includes("PHASE")||t.includes("STEADY")||t.includes("PULSE")||t.includes("STABILIZE")||t.includes("STEP")}function te(e){const t=String(e||"").trim().toUpperCase();return t?t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED"):!1}function kt(e){const t=String(e||"").trim().toUpperCase();return t.includes("WAITING_FOR_CM100")||t.includes("CM100 REQUESTED")||t.includes("WACHTEN OP CM100")||t==="WACHTEN"}function Wt(e){return cf(e)&&!kt(e)}function Bt(e,t="IDLE"){const n=Xn(e,t),r=String(n??"").trim();return!r||r==="0"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN"?t:r}function wc(){const e=Xn("commissioningStatus",""),t=A("cm100Active"),n=String(e||"").trim().toUpperCase();return(t||n==="CM100 READY"||n==="CM100 STOPPED"||n.includes("DONE")||n.includes("FAILED")||n.includes("ABORT")||n.includes("APPLIED")||n.includes("REFUSED"))&&(o.pendingCommissioningCm100Start=!1),n&&n!=="0"?n==="IDLE"&&o.pendingCommissioningCm100Start?"CM100 REQUESTED":n:o.pendingCommissioningCm100Start?"CM100 REQUESTED":t?"CM100 READY":"IDLE"}function yr(e,t,n="",r=!1){return`
      <div class="oq-settings-storage-summary-metric${r?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${n?`<em>${s(n)}</em>`:""}
      </div>
    `}function Sc(e){const t=String(e||"").trim(),n=t.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);return n?`${n[1]} ${n[1]==="1"?"dag":"dagen"}`:t}function wr(e,t,n,r="",a="",i=""){if(!y(e))return"";const l=!!C(e),c=o.loadingEntities||o.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(n)}</p>
          ${wf(e,l,r,a)}
        </div>
        ${Qo(e,t,l,c)}
      </article>
    `}function uf(e,t,n,r=""){if(!y(e))return"";const a=o.entities[e],i=Array.isArray(a?.option)?a.option:[],l=String(C(e)||"");return i.length?`
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
            ${i.map(c=>`<option value="${s(c)}" ${c===l?"selected":""}>${s(Ne(c))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `:""}function df(e){return y(e)||!!L[e]&&!o.optionalMissingEntities?.[e]}function Sr(e,t,n,r={}){if(!df(e))return"";const a=y(e),i=a&&(o.loadingEntities||o.busyAction===e),l=r.disabled===!0||!a,c=r.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(c)}"
        type="button"
        data-oq-action="${s(n)}"
        ${i||l?"disabled":""}
      >
        ${s(i&&r.busyLabel||t)}
      </button>
    `}function He(e,t="\u2014"){return y(e)?re(e):t}function pf(e,t="Geen data"){const n=Number(e);return!Number.isFinite(n)||n<=0?t:`${Math.round(n)} ${Math.round(n)===1?"dag":"dagen"}`}function gf(e,t="\u2014"){const n=Number(e);return!Number.isFinite(n)||n<=0?t:`${Math.round(n)} kB`}function mf(e,t="0"){const n=Number(e);return!Number.isFinite(n)||n<=0?t:String(Math.round(n))}function us(e){const t=typeof Q=="function"?Q(e):null;return t?t.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"}):"Geen data"}function hf(e,t="Geen data"){const n=Number(e);if(!Number.isFinite(n)||n<=0)return t;const r=new Date(n*1e3),a=r.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit"}),i=r.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return`${a} ${i}`}function ff(){return typeof An!="function"?{}:An()}function bf(e){const t=Array.isArray(e.items)?e.items:[];return`
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
    `}function vf(e){const t=e.filter(Boolean);return t.length?`
      <details class="oq-settings-storage-technical"${o.settingsStorageDetailsOpen?" open":""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Diagnose, dagtotalen en uurdetail</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${s(t.map(n=>`${n.shortLabel}: ${n.primary}`).join(" \xB7 "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${t.map(bf).join("")}
        </div>
      </details>
    `:""}function Ne(e){const t=String(e||"").trim();return t?{None:"Geen",Manual:"Handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[Fs]:"Stooklijn",[Ds]:"Power House","Dew point required":"Dauwpuntmeting vereist","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[t]||t:""}function qc(e){const t=String(e||"").trim();return t?{Ready:"Gereed","Waiting for room request":"Wacht op kamervraag","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[t]||t:""}function er({key:e,option:t,currentValue:n,busy:r,copy:a="",meta:i="",image:l="",imageAlt:c="",infoTitle:u="",infoCopy:d="",infoId:g=""}){const f=t===n,h=`
      <button
        class="oq-settings-choice-card${f?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${d?" oq-settings-choice-card--has-info":""}"
        type="button"
        data-oq-action="select-settings-option"
        data-select-key="${s(e)}"
        data-select-option="${s(t)}"
        aria-pressed="${f?"true":"false"}"
        ${r?"disabled":""}
      >
        <span class="oq-settings-choice-head">
          <span class="oq-settings-choice-title">${s(Ne(t))}</span>
          ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
        </span>
        ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(c||Ne(t))}" loading="lazy" decoding="async"></span>`:""}
        ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
      </button>
    `;if(!d)return h;const w=u||Ne(t),b=g||`${e}-${t}`;return`
      <article class="oq-settings-choice-card-shell${f?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
        ${h}
        ${fo(b,w,d)}
      </article>
    `}function bo(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function oo(e,t,n,r=""){if(!y(e))return"";const a=o.entities[e]||{},i=String(C(e)||""),l=bo(a);return ke(e,t,n,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${o.loadingEntities?"disabled":""}>${l.map(c=>`<option value="${s(c)}" ${c===i?"selected":""}>${s(Ne(c))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,r)}function yf(e,t,n="Aan",r="Uit"){return`<span class="oq-settings-toggle-state${t?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(n)}" data-off-label="${s(r)}">${s(t?n:r)}</span>`}function Qo(e,t,n,r,a="Aan",i="Uit",l=!0){const c=n?a:i,u=n?"off":"on";return`
      <div class="oq-settings-compact-switch-row">
        ${l?yf(e,n,a,i):""}
        <button
          class="oq-settings-toggle-switch${n?" is-on":""}"
          type="button"
          role="switch"
          data-oq-action="toggle-overview-control"
          data-control-key="${s(e)}"
          data-control-state="${s(u)}"
          data-switch-title="${s(t)}"
          data-on-label="${s(a)}"
          data-off-label="${s(i)}"
          aria-checked="${n?"true":"false"}"
          aria-label="${s(`${t}: ${c}`)}"
          ${r?"disabled":""}
        >
          <span class="oq-settings-toggle-switch-track" aria-hidden="true">
            <span class="oq-settings-toggle-switch-knob"></span>
          </span>
        </button>
      </div>
    `}function wf(e,t,n="",r=""){const a=t?n:r;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(n)}" data-off-copy="${s(r)}">${s(a)}</p>`:""}function Sf(e,t,n,r,a=""){if(!y(e))return"";const i=!!C(e),l=o.loadingEntities||o.busyAction===`switch-${e}`;return ke(e,t,n,`
        <div class="oq-settings-compact-switch-field">
          ${Qo(e,t,i,l)}
          ${r?`<p>${s(r)}</p>`:""}
        </div>
      `,a)}function qr(e,t,n){if(!y(e))return"";const r=!!C(e),a=o.loadingEntities||o.busyAction===`switch-${e}`;return`
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
    `}function zt({active:e,startKey:t,stopKey:n,startLabel:r,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:c=!1,stopDisabled:u=!1}){return Re(e?n:t,e?a:r,e?l:i,e?u:c)}function qf(e,t,n,r,a=""){if(!y(e))return"";const i=o.entities[e]||{},l=String(C(e)||""),c=bo(i),u=o.loadingEntities||o.busyAction===`save-${e}`,d=`
      <div class="oq-settings-choice-grid">
        ${c.map(g=>{const f=r[g]||"",h=typeof f=="string"?f:f.copy||"",w=typeof f=="string"?"":f.image||"",b=typeof f=="string"?"":f.alt||"";return er({key:e,option:g,currentValue:l,busy:u,copy:h,image:w,imageAlt:b})}).join("")}
      </div>
    `;return ke(e,t,n,d,a)}function ee(e,t,n,r="",a={}){if(!y(e))return"";const i=Ze(e),l=Le(e),c=a.unitOverride||i.uom||"",u=a.showUnit!==!1&&!!c,d=u&&a.unitMode!=="outside",g=Go({key:e,value:l,meta:i,controlClass:`oq-helper-control${u&&!d?" oq-helper-control--split":""}${d?" oq-helper-control--suffix":""}`,unitMarkup:u?d?`<span class="oq-helper-unit-chip">${s(c)}</span>`:`<span class="oq-helper-unit">${s(c)}</span>`:""});return ke(e,t,n,g,r,a.footerMarkup||"")}function lt(e,t,n,r="",a={}){if(!y(e))return"";const i=Ze(e),l=Se(e,C(e)),c=a.minLabel||`${i.min}${i.uom||""}`,u=a.maxLabel||`${i.max}${i.uom||""}`,d=a.valueLabel||j(e,l);return ke(e,t,n,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(c)}</span><strong>${s(d)}</strong><span>${s(u)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${o.loadingEntities?"disabled":""}></label>`,r)}function ds(e,t,n,r={}){if(!y(e))return"";const a=Ze(e),i=Le(e),l=r.compact===!0,c=r.embedded===!0,u=r.infoId||e,d=r.showCopy!==!1;return`
      <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${c?" oq-settings-mini-field--embedded":""}">
        <div class="oq-settings-mini-copy">
          <div class="oq-settings-mini-copy-head">
            <h5>${s(t)}</h5>
            ${n?fo(u,t,n):""}
          </div>
          ${n&&d?`<p>${s(n)}</p>`:""}
        </div>
        ${Go({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
      </article>
    `}function ps(e,t,n,r=""){if(!y(e))return"";const a=Nr(C(e));return ke(e,t,n,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${o.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,r||"oq-settings-field--time")}function ne(e,t,n,r,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(t)}</h3><p>${s(n)}</p></div>${r}</section>`}function kf(){const e=Ve.has(o.settingsGroup)?o.settingsGroup:qe[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${qe.map(t=>`
          <button
            class="oq-settings-group-button${t.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(t.id)}"
            aria-pressed="${t.id===e?"true":"false"}"
          >
            ${Xr(t.icon,"oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${s(t.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function Tf(){const e=Ve.has(o.settingsGroup)?o.settingsGroup:qe[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[Yf(),Jf(),Wf(),gb(),nb(),pb(),Df()]:e==="service"?[Kf(),Gf()]:e==="heating"?[ob()]:e==="cooling"?[hb()]:e==="integrations"?[rb(),ab(),sb()]:[Zf(),Xf(),ib(),lb(),db()]).filter(Boolean).join("")}
      </div>
    `}function Cf(){if(!o.root||o.appView!=="settings")return!1;const e=o.root.querySelector(".oq-settings-group-nav"),t=o.root.querySelector(".oq-settings-group-stack");if(!e||!t)return!1;const n=Ve.has(o.settingsGroup)?o.settingsGroup:qe[0].id;if(n==="service")return!1;const r=e.querySelectorAll(".oq-settings-group-button");if(r.length!==qe.length)return!1;r.forEach(m=>{const v=String(m.dataset.groupId||"")===n;m.classList.toggle("is-active",v),m.setAttribute("aria-pressed",v?"true":"false")}),t.querySelectorAll(".oq-settings-info").forEach(m=>{const S=String(m.dataset.oqSettingsInfo||""),v=o.settingsInfoOpen===S;m.classList.toggle("is-open",v);const q=m.querySelector(".oq-settings-info-popover");q&&(q.hidden=!v);const E=m.querySelector(".oq-settings-info-button");E&&E.setAttribute("aria-expanded",v?"true":"false")}),t.querySelectorAll("[data-oq-settings-field]").forEach(m=>{const S=String(m.dataset.oqSettingsField||"");if(!S)return;const v=m.querySelector(".oq-settings-static-value");if(v){const k=B(S);v.textContent!==k&&(v.textContent=k)}m.querySelectorAll("select[data-oq-field]").forEach(k=>{const H=String(k.dataset.oqField||S),O=String(C(H)||"");k.value!==O&&(k.value=O)}),m.querySelectorAll("input[data-oq-field]").forEach(k=>{const H=String(k.dataset.oqField||S),O=String(Le(H)||"");k.value!==O&&(k.value=O)});const q=m.querySelector(".oq-helper-slider-meta strong"),E=m.querySelector('input[type="range"][data-oq-field]');if(q&&E){const k=j(S,Se(S,C(S)));q.textContent!==k&&(q.textContent=k)}}),t.querySelectorAll("[data-select-key]").forEach(m=>{const S=String(m.dataset.selectKey||""),v=String(m.dataset.selectOption||""),q=String(C(S)||""),E=v===q;m.classList.toggle("is-active",E),m.setAttribute("aria-pressed",E?"true":"false"),S==="strategy"?m.disabled=o.loadingEntities||o.busyAction==="save-strategy":S==="hpGeneration"?m.disabled=o.loadingEntities||o.busyAction==="save-hpGeneration":S==="curveControlProfile"?m.disabled=o.loadingEntities||o.busyAction==="save-curveControlProfile":S==="phResponseProfile"&&(m.disabled=o.loadingEntities||o.busyAction==="save-phResponseProfile");const k=m.closest(".oq-settings-choice-card-shell");k&&k.classList.toggle("is-active",E)});const a=t.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){const m=String(C("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",m),a.querySelectorAll("input[data-oq-field]").forEach(v=>{const q=String(v.dataset.oqField||""),E=String(Le(q)||"");v.value!==E&&(v.value=E)})}t.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(m=>{const S=String(m.dataset.controlKey||""),v=!!C(S),q=String(m.dataset.onLabel||"Aan"),E=String(m.dataset.offLabel||"Uit"),k=String(m.dataset.switchTitle||S),H=v?q:E;m.dataset.controlState=v?"off":"on",m.classList.toggle("is-on",v),m.setAttribute("aria-checked",v?"true":"false"),m.setAttribute("aria-label",`${k}: ${H}`),m.disabled=o.loadingEntities||o.busyAction===`switch-${S}`}),t.querySelectorAll("[data-oq-switch-pill]").forEach(m=>{const S=String(m.dataset.oqSwitchPill||""),v=!!C(S),q=String(m.dataset.onLabel||"Aan"),E=String(m.dataset.offLabel||"Uit"),k=v?q:E;m.classList.toggle("is-on",v),m.textContent!==k&&(m.textContent=k)}),t.querySelectorAll("[data-oq-switch-copy]").forEach(m=>{const S=String(m.dataset.oqSwitchCopy||""),v=!!C(S),q=String(m.dataset.onCopy||""),E=String(m.dataset.offCopy||""),k=v?q:E;m.hidden=!k,m.textContent!==k&&(m.textContent=k)});const i=t.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){const m=i.querySelector(".oq-settings-quickstart-status-value"),S=i.querySelector(".oq-settings-quickstart-status-copy"),v=i.querySelector('button[data-oq-action="open-generation-modal"]'),q=_o(),E=o.entities.hpGeneration||{},k=y("hpGeneration")&&bo(E).length>0;if(m){const H=q||"Onbekend";m.textContent!==H&&(m.textContent=H)}if(S){const H="Pas dit aan als je een andere Quatt Hybrid hebt.";S.textContent!==H&&(S.textContent=H)}v&&(v.disabled=!k||o.loadingEntities||o.busyAction==="save-hpGeneration")}const l=t.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){const m=l.querySelector(".oq-settings-quickstart-status-value"),S=l.querySelector(".oq-settings-quickstart-status-copy"),v=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),q=wc(),E=A("cm100Active");m&&m.textContent!==q&&(m.textContent=q);const k=E?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";S&&S.textContent!==k&&(S.textContent=k),v&&(v.disabled=o.loadingEntities)}const c=t.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(c){const m=c.querySelector(".oq-settings-quickstart-status-value"),S=c.querySelector(".oq-settings-quickstart-status-copy"),v=c.querySelector('button[data-oq-action="reset"]'),q=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",E=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";m&&m.textContent!==q&&(m.textContent=q),S&&S.textContent!==E&&(S.textContent=E),v&&(v.disabled=o.busyAction==="reset")}const u=t.querySelectorAll("[data-oq-access-security-item]");u.length&&u.forEach(m=>{const S=String(m.dataset.oqAccessSecurityItem||""),v=m.querySelector(".oq-settings-quickstart-status-value"),q=m.querySelector(".oq-settings-quickstart-status-copy"),E=m.querySelector("button[data-oq-action]");if(S==="login"){const k=Ma(),H=Pa();v&&v.textContent!==k&&(v.textContent=k),q&&q.textContent!==H&&(q.textContent=H)}else if(S==="api"){const k=Xa(),H=ei();v&&v.textContent!==k&&(v.textContent=k),q&&q.textContent!==H&&(q.textContent=H)}E&&(E.disabled=!1)});const d=t.querySelectorAll("[data-oq-mqtt-item]");d.length&&d.forEach(m=>{const S=m.querySelector(".oq-settings-quickstart-status-value"),v=m.querySelector(".oq-settings-quickstart-status-copy"),q=m.querySelector('button[data-oq-action="open-mqtt-modal"]'),E=Ia(),k=Wa();S&&S.textContent!==E&&(S.textContent=E),v&&v.textContent!==k&&(v.textContent=k),q&&(q.disabled=!1)});const g=t.querySelector(".oq-settings-system-summary");if(g){const m=g.querySelectorAll(".oq-settings-system-row"),S={uptime:ba(),ip:va(),updates:jo(),datetime:ll(),espTemp:bl(),restart:"Opnieuw opstarten"};m.forEach(E=>{const k=E.querySelector(".oq-settings-system-row-value"),H=E.dataset.oqDiagnosticsRow||"";if(k&&Object.prototype.hasOwnProperty.call(S,H)){const O=S[H];k.textContent!==O&&(k.textContent=O)}});const v=g.querySelector('button[data-oq-action="open-update-modal"]');v&&(v.disabled=!1);const q=g.querySelector('button[data-oq-action="open-restart-confirm"]');if(q){const E=o.busyAction==="restartAction";q.disabled=E,q.textContent=E?"Herstarten...":"Herstarten"}}t.querySelectorAll(".oq-settings-hp-offset-row").forEach(m=>{const S=String(m.dataset.oqSettingsField||""),v=String(m.dataset.oqHpOffsetRawKey||""),q=String(m.dataset.oqHpOffsetFinalKey||"");if(!S||!v||!q)return;const E=Ze(S),k=Ja(v,q,S),H=Ye(Le(S)),O=Number.isFinite(k)&&Number.isFinite(H)?to(k+H,E.uom||"\xB0C",2):de(q,2),F=m.querySelector("[data-oq-hp-offset-active]");if(F){const $=`${de(q,2)} actief`;F.textContent!==$&&(F.textContent=$)}const G=m.querySelector("[data-oq-hp-offset-raw]");if(G){const $=Number.isFinite(k)?to(k,E.uom||"\xB0C",2):de(v,2);G.textContent!==$&&(G.textContent=$)}const T=m.querySelector("[data-oq-hp-offset-final]");T&&T.textContent!==O&&(T.textContent=O)});const f=t.querySelector(".oq-settings-curve-shell"),h=ce();if(!!f!==h)return!1;const w=!!a,b=String(C("phResponseProfile")||"")==="Custom";return w===b}function Ef(e=!1){const t=Rl();return t?`
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
    `:""}function kc(){return`
      <div class="oq-settings-curve-grid">
        ${pe.map(e=>ee(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${ee("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:Ef()})}
      </div>
    `}function Tc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${oo("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function Cc(e="oq-settings-grid"){const t=[ee("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),ee("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${oo("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${Xd()?ee("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):t}
      </div>
    `}function $f(e="oq-settings-grid"){const t=[ee("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),ee("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return t.length?`
      <div class="${s(e)}">
        ${t.join("")}
      </div>
    `:""}function ln(e="",t=""){const n=String(e||"").trim().toUpperCase(),r=String(t||"").trim().toLowerCase(),a=n.split(/[^A-Z0-9]+/).filter(Boolean),i=d=>{const g=String(d||"").trim().toUpperCase();return g?n===g||n.startsWith(`${g}:`)||n.startsWith(`${g} `)||a.includes(g):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!n||n==="\u2014"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN")return{phase:"Wachten",percent:0};if(n.includes("WAITING")||n.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(r!=="cm100"&&(n==="IDLE"||n==="CM0 - STANDBY"||n==="CM100 READY"||n==="CM100 STOPPED"||n==="GEPAUZEERD"))return{phase:"Wachten",percent:0};const u=(l[r]||[]).find(d=>d.match.some(g=>i(g)));return u||(n.includes("DONE")||n.includes("APPLIED")?{phase:"Klaar",percent:100}:n.includes("ABORT")||n.includes("FAILED")||n.includes("REFUSED")?{phase:"Afgebroken",percent:100}:r==="cm100"&&n.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function Vt({taskKey:e,title:t,copy:n,subcopy:r="",status:a,statusCopy:i,progressTask:l,actions:c="",controls:u="",metrics:d="",className:g=""}){return`
      <article class="oq-settings-commissioning-card${g?` ${s(g)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(t)}</h3>
            <p>${s(n)}</p>
            ${r?`<p class="oq-settings-commissioning-card-subcopy">${s(r)}</p>`:""}
          </div>
        </div>
        ${c?`<div class="oq-settings-commissioning-card-actions">${c}</div>`:""}
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
        ${d?`<div class="oq-settings-grid oq-settings-commissioning-metrics">${d}</div>`:""}
      </article>
    `}function Af(){return Rn.filter(e=>y(le(e,"Status"))||y(le(e,"Load"))||y(Jt(e,"cooling",0)))}function Hf(e){return Ye(Le(e))}function Mf(e){const t=[];return Yr.forEach(n=>{let r=-1/0;Ao.forEach(a=>{const i=Jt(e,n,a),l=Hf(i);(!Number.isFinite(l)||l<0||l>120||l<r)&&t.push(`${n==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(r=l)})}),{valid:t.length===0,invalid:t}}function Pf(e){const t=String(C(`hp${e}Mode`)||"").trim(),n=Ye(C(`hp${e}Freq`)),r=t&&t!=="Onbekend"&&t!=="Unknown",a=Number.isFinite(n),i=r&&/standby|stand-by/i.test(t),l=a&&n<=.5,c=r?i?a?l?"Standby en compressor uit.":`Compressor draait op ${n.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${t}.`:"ODU status is onbekend.";return{mode:r?t:"Onbekend",freq:Number.isFinite(n)?`${n.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:c}}function Nf(e){const t=String(e||"").toUpperCase();return!e||t==="UNKNOWN"||t==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":t.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":t.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":t.includes("WRITE_QUEUED")||t.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":t.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":t.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":t.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":t.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function gs(e,t){return y(e)?Go({key:e,value:Le(e),meta:Ze(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${t}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function Rf(e){const t=Ao.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${Ao.map(n=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${n}</span>
            <div role="cell">${gs(Jt(e,"cooling",n),n)}</div>
            <div role="cell">${gs(Jt(e,"heating",n),t+n)}</div>
          </div>
        `).join("")}
      </div>
    `}function Lf(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;const t=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,n=t?t.closest(".oq-settings-odu-runtime-table"):null;if(!t||!n)return;const r=Array.from(n.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,c)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(c.dataset.oqOduRuntimeTabIndex||0)),a=r.indexOf(t),i=r[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function Of(e){const t=le(e,"Enable"),n=le(e,"Load"),r=le(e,"Apply"),a=le(e,"Status"),i=String(C(a)||"").trim()||"Nog niet geladen",l=Mf(e),c=Pf(e),u=!!C(t),d=o.loadingEntities||o.busyAction===n||o.busyAction===r,g=d||!u||!l.valid||!c.safe||!y(r),f=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(c.reason)} Laatste compressorfrequentie: ${s(c.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${y(n)?Re(n,o.busyAction===n?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",d):""}
      ${y(t)?Qo(t,`HP${e} writes vrijgeven`,u,d,"Enable","Locked"):""}
            ${y(r)?Re(r,o.busyAction===r?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",g):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(Nf(i))}</p>
        </div>
        ${Rf(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&c.safe?" is-ok":" is-warning"}">${s(f)} ${s(c.safe?"":c.reason)}</p>
      </article>
    `}function Df(){const e=Af();return e.length?`
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
            ${e.map(t=>Of(t)).join("")}
          </div>
        </div>
      </details>
    `:""}function Ec(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ee("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${ee("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${xf()}
      </div>
    `}function $c(e="oq-settings-grid"){const t=Ff();return`
      <div class="${s(e)}">
        ${ee("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${t}
    `}function Ff(){const e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(n=>y(n.offsetKey)&&y(n.finalKey));if(!e.length)return"";const t=n=>{const r=Ze(n.offsetKey),a=Ja(n.rawKey,n.finalKey,n.offsetKey),i=Ye(Le(n.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?to(a+i,r.uom||"\xB0C",2):de(n.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(n.offsetKey)}" data-oq-hp-offset-raw-key="${s(n.rawKey)}" data-oq-hp-offset-final-key="${s(n.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(n.label)}</strong>
            <span data-oq-hp-offset-active>${s(de(n.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${n.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?to(a,r.uom||"\xB0C",2):de(n.rawKey,2))}</strong>
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
    `}function Za(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ps("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${ps("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${lt("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${lt("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function Ac(){const e=ce();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(Ds)}"
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
    `}function xf(){if(!y("phResponseProfile"))return"";const e=String(C("phResponseProfile")||""),t=o.loadingEntities||o.busyAction==="save-phResponseProfile",r=`
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
            `:er({key:"phResponseProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return ke("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",r,"oq-settings-field--span-2")}function Hc(){if(!y("curveControlProfile"))return"";const e=String(C("curveControlProfile")||""),t=o.loadingEntities||o.busyAction==="save-curveControlProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>er({key:"curveControlProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return ke("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",r,"oq-settings-field--span-2")}function If(){const e=(R,V=0)=>{const P=M(R);return Number.isNaN(P)?V:Math.max(0,P)},n=e("phComfortBelow",.1),r=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-n,l=20+r,c=620,u=184,d=46,g=24,f=18,h=40,w=96,b=c-d-g,m=Math.min(20-1.2,i-.35),S=Math.max(20+1.2,l+.35),v=R=>d+(R-m)/Math.max(.01,S-m)*b,q=v(m),E=v(S),k=v(i),H=v(20),O=v(l),F=Math.abs(i-20)>.001,G=Math.abs(l-20)>.001,T=f+24,$=u-h,N=w-44,W=(R,V,P,D="")=>{const ge=Math.max(q+4,Math.min(E-110-4,R-55)),ue=R-14,J=N,ot=28,Te=w-N+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${V} ${P}`)}">
          <rect class="oq-ph-concept-hit" x="${ue}" y="${J}" width="${ot}" height="${Te}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${R}" cy="${w}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${D?` oq-ph-concept-tooltip--${D}`:""}" transform="translate(${ge} ${N})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(V)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(P)}</text>
          </g>
        </g>
      `},K=[`M ${q.toFixed(1)} ${T.toFixed(1)}`,`L ${k.toFixed(1)} ${w.toFixed(1)}`,`L ${O.toFixed(1)} ${w.toFixed(1)}`,`L ${E.toFixed(1)} ${$.toFixed(1)}`].join(" ");return`
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
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${c} ${u}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${q.toFixed(1)}" y="${f}" width="${Math.max(20,k-q).toFixed(1)}" height="${(u-f-h).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${k.toFixed(1)}" y="${f}" width="${Math.max(20,O-k).toFixed(1)}" height="${(u-f-h).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${O.toFixed(1)}" y="${f}" width="${Math.max(20,E-O).toFixed(1)}" height="${(u-f-h).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${q}" y1="${f}" x2="${q}" y2="${u-h}" class="oq-ph-concept-axis"></line>
            <line x1="${q}" y1="${w}" x2="${E}" y2="${w}" class="oq-ph-concept-axis"></line>
            <line x1="${H}" y1="${f}" x2="${H}" y2="${u-h}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${K}" class="oq-ph-concept-curve"></path>

            ${F?`<line x1="${k}" y1="${w-12}" x2="${k}" y2="${w+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${H}" y1="${w-14}" x2="${H}" y2="${w+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${G?`<line x1="${O}" y1="${w-12}" x2="${O}" y2="${w+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${F?`<circle cx="${k}" cy="${w}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${H}" cy="${w}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${G?`<circle cx="${O}" cy="${w}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${F?W(k,"Comfort onder setpoint",x(i,1,"\xB0C"),"below"):""}
            ${W(H,"Setpoint",x(20,1,"\xB0C"),"setpoint")}
            ${G?W(O,"Comfort boven setpoint",x(l,1,"\xB0C"),"above"):""}

            <text x="${q+8}" y="${f+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${q+8}" y="${u-h-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${q}" y="${u-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${E}" y="${u-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${F?`<text x="${k-5}" y="${u-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(x(i,1,"\xB0C"))}</text>`:""}
            <text x="${H}" y="${u-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(x(20,1,"\xB0C"))}</text>
            ${G?`<text x="${O+5}" y="${u-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(x(l,1,"\xB0C"))}</text>`:""}
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
    `}function Mc(){const e=[ee("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),ee("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),ee("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${If()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function ms(e,t,n){const r=[oo(t,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),oo(n,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return r?`
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
    `:""}function Wf(){const e=$f();return ne("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${Cc()}
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
      `)}function U(e){return y(e)&&A(e)}function pt(e){return!y(e)||A(e)}function hs(e){return y(e)?Do(B(e,"None")):""}const Bf=new Set(["compressor oil return"]);function Vf(e){const t=Do(e);return t==="Geen actieve storingen"?[]:t.split(",").map(n=>n.trim()).filter(n=>n&&!Bf.has(n.toLowerCase()))}function Pc(e){const t=Vf(e);return t.length>0?t.join(", "):"Geen actieve storingen"}function Wr(e){return y(e)?Pc(B(e,"None")):""}function En(e){const t=Wr(e).trim().toLowerCase();return!!t&&t!=="geen actieve storingen"}function tr(){const e=[],t=U("compressorCyclingWarning2h")||U("compressorCyclingWarning72h")||U("alternatingCompressorStartsWarning"),n=U("compressorCyclingAlertLatched"),r=pt("cicPollingEnabled"),a=pt("otEnabled"),i=(c,u)=>{U(c)&&e.push({key:c,label:u})};i("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),i("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),i("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),i("lowflowFaultActive","Te lage flow"),i("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),r&&i("cicDataStale","CIC-data is verouderd"),a&&i("otLinkProblem","OpenTherm-verbinding meldt een probleem"),En("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${Wr("hp1Failures")}`}),En("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${Wr("hp2Failures")}`});const l=e.length;return n&&!t&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:n,cyclingAlertActive:t,cyclingAlertRecovered:n&&!t,title:l>0?"Aandacht nodig":n?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:l>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:n?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function $n(e,t="Aandacht",n="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${s(e?t:n)}</span>`}function _t({label:e,value:t,note:n="",active:r=!1}){return`
      <div class="oq-settings-monitoring-row${r?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(t)}</strong>
          ${n?`<span>${s(n)}</span>`:""}
        </div>
        ${$n(r)}
      </div>
    `}function st(e){const t=M(e);return Number.isNaN(t)?"\u2014":String(Math.max(0,Math.round(t)))}function _f(e){const t=M(e);if(Number.isNaN(t))return"Nog niet gemeten";if(t<1)return"Zojuist";if(t<60)return`${Math.round(t)} min geleden`;const n=Math.floor(t/60),r=Math.round(t%60);return`${n}u ${r}m geleden`}function fs(e){const t=M(e);return Number.isNaN(t)||t<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t*1e3))}function jf(e){if(!e.cyclingAlertLatched)return"";const t=U("compressorCyclingAlertAlternating"),n=st("compressorCyclingAlertHp1Peak2h"),r=st("compressorCyclingAlertHp1Peak72h"),a=y("compressorCyclingAlertHp2Peak2h")?st("compressorCyclingAlertHp2Peak2h"):"",i=y("compressorCyclingAlertHp2Peak72h")?st("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${$n(e.cyclingAlertActive,"Actief","Hersteld")}
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
    `}function bs(e,t){return y(`${t}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${s(e)}</p>
          <span>Laatste start: ${s(_f(`${t}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${s(st(`${t}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${s(st(`${t}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${s(st(`${t}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${s(st(`${t}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function Nc(e){const t=e.active?e.problems.map(n=>n.key).sort().join("|"):"";if(!t){o.installationMonitoringProblemSignature="";return}t!==o.installationMonitoringProblemSignature&&(o.installationMonitoringProblemSignature=t,o.installationMonitoringDetailsOpen=!0)}function Kf(){const e=tr();Nc(e);const t=pt("cicPollingEnabled"),n=pt("otEnabled"),r=[y("lowflowFaultActive")?_t({label:"Flow",value:U("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:U("lowflowFaultActive")}):"",y("flowMismatch")?_t({label:"Flowvergelijking duo",value:U("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:U("flowMismatch")}):""].filter(Boolean).join(""),a=[y("cicDataStale")?_t({label:"CIC-data",value:t?U("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:t&&U("cicDataStale")}):"",y("otLinkProblem")?_t({label:"OpenTherm",value:n?U("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:n&&U("otLinkProblem")}):""].filter(Boolean).join(""),i=[y("hp1Failures")?_t({label:"Warmtepomp 1",value:hs("hp1Failures"),active:En("hp1Failures")}):"",y("hp2Failures")?_t({label:"Warmtepomp 2",value:hs("hp2Failures"),active:En("hp2Failures")}):""].filter(Boolean).join(""),l=M("compressorStarts2hWarningLimit"),c=M("compressorStarts72hWarningLimit"),u=U("compressorCyclingWarning2h")||U("compressorCyclingWarning72h")||U("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,d=r?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${r}</div>
      </article>
    `:"",g=i?`
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
          ${$n(e.active,"Aandacht nodig","Alles rustig")}
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
              ${$n(u)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${jf(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${bs("Warmtepomp 1","hp1")}
              ${bs("Warmtepomp 2","hp2")}
            </div>
            ${lt("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(l)?"\u2014":`${Math.round(l)} starts / 2 uur`})}
            ${lt("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(c)?"\u2014":`${Math.round(c)} starts / 72 uur`})}
          </article>
          ${g}
          </div>
          <div class="oq-settings-monitoring-column">
            ${d}
            ${f}
          </div>
        </div>
        </details>
      `)}function Uf({status:e,running:t,resultReady:n,startDisabled:r,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:c}){const u=String(e||"").toUpperCase(),d=u.includes("FAILED")||u.includes("REFUSED")||u.includes("ABORT"),g=u.includes("APPLIED"),f=y("hp2WaterIn")||y("hp2WaterOut")||y("hp2WaterInRaw")||y("hp2WaterOutRaw"),h=M("hpWaterCalibrationStableProgress"),w=M("hpWaterCalibrationStableRequired"),b=M("hpWaterCalibrationRemaining"),m=Math.round(M("hpWaterCalibrationPhase")),S=t&&(m===1||u.includes("MIXING")),v=t&&!S,q=300,E=60,k=Number.isFinite(b)?Math.max(0,q-b):NaN,H=Number.isFinite(k)?Math.max(0,E-k):NaN,O=S&&Number.isFinite(k)?Math.max(0,Math.min(100,k/E*100)):v&&Number.isFinite(h)&&Number.isFinite(w)&&w>0?Math.max(0,Math.min(100,h/w*100)):t&&Number.isFinite(b)?Math.max(0,Math.min(100,100-b/q*100)):n?100:0,F=n&&y("hpWaterCalibrationResultSpreadBefore")?de("hpWaterCalibrationResultSpreadBefore",2):de("hpWaterCalibrationSpread",2),G=S?"Water mengen":Number.isFinite(h)&&Number.isFinite(w)&&w>0?h>0?`${Math.round(Math.max(0,h))} / ${Math.round(w)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",T=n?3:t?2:1,$=g?"Offsets toegepast":n?`Meting klaar - spreiding ${F}`:t?S?`Water mengen${Number.isFinite(H)&&H>0?` - meting start over ${Math.round(H)} s`:""}`:`Meting bezig - ${Number.isFinite(b)&&b>0?`max. ${Math.round(b)} s resterend`:G}`:d?"Meting niet voltooid":"Voorbereiding",N=g?"De voorgestelde offsets zijn opgeslagen.":n?"Controleer de voorgestelde offsets en pas ze toe.":t?S?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":d?Xn("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):f?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",W=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(P=>y(P.liveKey)||y(P.rawKey)||y(P.offsetKey)),K=(P,D)=>{const _=T>P;return`
        <div class="oq-settings-hp-calibration-step${_?" is-done":""}${T===P?" is-active":""}">
          <span>${_?"\u2713":P}</span>
          <strong>${s(D)}</strong>
        </div>
      `},R=P=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(P.label)}</span>
          <strong>${s(de(P.liveKey,2))}</strong>
        </article>
      `,V=P=>{const D=M(P.resultRawKey),_=Number.isFinite(D)?D:Ja(P.rawKey,P.liveKey,P.offsetKey),Y=M(P.suggestedKey),ge=Number.isFinite(_)&&Number.isFinite(Y)?to(_+Y,o.entities[P.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(P.label)}</th>
          <td>${s(Number.isFinite(_)?to(_,o.entities[P.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
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

        <div class="oq-settings-hp-calibration-status${n?" is-success":t?" is-active":d?" is-warning":""}">
          <div>
            <strong>${s($)}</strong>
            <p>${s(N)}</p>
          </div>
          ${t||n?`<span>${s(t?G:"Resultaat beschikbaar")}</span>`:""}
          ${t?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${O.toFixed(0)}%"></i></div>`:""}
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

        ${c?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${zt({active:t,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||r,stopDisabled:l||a})}
            ${o.entities.hpWaterCalibrationApply?Re("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function Rc(){const e=y("boilerCvAssistEnabled")&&A("boilerCvAssistEnabled"),t=wc(),n=A("cm100Active"),r=String(t||"").trim().toUpperCase(),a=kt(t),i=!a&&(n||r==="CM100 READY"),l=o.commissioningTaskLock==="cm100",c=o.loadingEntities||o.busyAction==="commissioningCm100Start"||o.busyAction==="commissioningCm100Stop"||l,u=!!o.pendingCommissioningCm100Start,d=c||i||a,g=c||!i,f=Bt("boilerPowerTestStatus","IDLE"),h=ln(f,"boiler"),w=A("boilerPowerTestActive"),b=o.loadingEntities||o.busyAction==="boilerPowerTestStart"||o.busyAction==="boilerPowerTestAbort"||o.busyAction==="boilerPowerTestApply",m=!!(o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort||o.entities.boilerPowerTestApply),S=!!o.pendingBoilerPowerTestStart,v=o.commissioningTaskLock==="boiler",q=kt(f),k=!te(f)&&(w||S||v||Wt(f))&&!q,H=re("boilerRatedHeatPower"),O=re("boilerHeatPower"),F=M("boilerHeatPower"),G=F>0?O:k&&o.commissioningBoilerHeatPowerDisplay?o.commissioningBoilerHeatPowerDisplay:O;F>0&&(o.commissioningBoilerHeatPowerDisplay=O);const T=Bt("flowAutotuneStatus","IDLE"),$=ln(T,"autotune"),N=o.loadingEntities||o.busyAction==="flowAutotuneStart"||o.busyAction==="flowAutotuneAbort"||o.busyAction==="flowAutotuneApply",W=!!(o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort||o.entities.flowAutotuneApply),K=!!o.pendingFlowAutotuneStart,R=o.commissioningTaskLock==="autotune",V=kt(T),D=!te(T)&&(K||R||Wt(T))&&!V,_=Bt("airPurgeStatus","IDLE"),Y=ln(_,"purge"),ge=A("airPurgeActive"),ue=o.loadingEntities||o.busyAction==="airPurgeStart"||o.busyAction==="airPurgeAbort",J=!!(o.entities.airPurgeStart||o.entities.airPurgeAbort),ot=!!o.pendingAirPurgeStart,Te=o.commissioningTaskLock==="purge",me=!te(_)&&(ge||ot||Te||Wt(_)),dr=/DONE/.test(String(_||"").toUpperCase()),he=!!(J||o.entities.airPurgeStatus||o.entities.airPurgeReturnToAuto),pr=re("airPurgeRemaining",{decimals:0}),wo=M("airPurgePhase"),en=wo===1?"Rustig":wo===2?"Pulsen":wo===3?"Stabiliseren":Y.phase,yt=Bt("manualFlowStatus","IDLE"),Dt=A("manualFlowActive"),Ke=o.loadingEntities||o.busyAction==="manualFlowStart"||o.busyAction==="manualFlowAbort",So=!!(o.entities.manualFlowStart||o.entities.manualFlowAbort),Ft=!!o.pendingManualFlowStart,Oe=o.commissioningTaskLock==="manual-flow",Ce=!te(yt)&&(Dt||Ft||Oe||Wt(yt)),nt=Bt("manualHpStatus","IDLE"),qo=A("manualHpActive"),xt=o.loadingEntities||o.busyAction==="manualHpStart"||o.busyAction==="manualHpAbort",tn=!!(o.entities.manualHpStart||o.entities.manualHpAbort),It=!!o.pendingManualHpStart,De=o.commissioningTaskLock==="manual-hp",Fe=!te(nt)&&(qo||It||De||Wt(nt)),wi=/SAFETY STOP/.test(String(nt||"").toUpperCase()),Si=/STOPPING/.test(String(nt||"").toUpperCase()),rt=Bt("hpWaterCalibrationStatus","IDLE"),Ou=ln(rt,"hp-water-calibration"),qi=A("hpWaterCalibrationActive"),on=o.loadingEntities||o.busyAction==="hpWaterCalibrationStart"||o.busyAction==="hpWaterCalibrationAbort"||o.busyAction==="hpWaterCalibrationApply",ki=!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort||o.entities.hpWaterCalibrationApply),nn=!!o.pendingHpWaterCalibrationStart,at=o.commissioningTaskLock==="hp-water-calibration",we=!te(rt)&&(qi||nn||at||Wt(rt)),rn=/DONE|APPLIED/.test(String(rt||"").toUpperCase()),Ti=/APPLIED/.test(String(rt||"").toUpperCase()),Du=re("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),Fu=re("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),Ci=/DONE|APPLIED/.test(String(f||"").toUpperCase()),Ei=/DONE|APPLIED/.test(String(T||"").toUpperCase()),gr=i?q?"Wachten op CM100":k?h.phase:Ci?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",mr=i?V?"Wachten op CM100":D?$.phase:Ei?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",hr=i?me?Y.phase:dr?"Klaar":"Klaar om te starten":"Wachten op CM100",$i=i?Ce?"Actief":"Klaar om te starten":"Wachten op CM100",Ai=i?Fe?Si?"Bezig met stoppen":wi?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",Hi=i?we?Ou.phase:Ti?"Offsets toegepast":rn?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Mi=!i||b||!m||D||me||Ce||Fe||we||k||R||Te||Oe||De||at||S,xu=b||!(k||v||S),Iu=b||Mi||!Ci||D||me||we,Pi=!i||N||!W||k||me||Ce||Fe||we||D||v||Te||Oe||De||at||K,Wu=N||!(D||R||K),Bu=N||Pi||!Ei||k||me||we,Vu=!i||ue||!J||k||D||Ce||Fe||we||me||v||R||Oe||De||at||ot,_u=ue||!(me||Te||ot),ju=!i||Ke||!So||k||D||me||Fe||we||Ce||v||R||Te||De||at||Ft,Ku=Ke||!(Ce||Oe||Ft),Uu=!i||xt||!tn||k||D||me||Ce||we||Fe||v||R||Te||Oe||at||It,zu=xt||!(Fe||De||It),Gu=!i||on||!ki||k||D||me||Ce||Fe||we||v||R||Te||Oe||De||nn,Qu=on||!(we||at||nn),Yu=on||we||!rn||Ti;u&&i&&(o.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(r))&&(o.commissioningTaskLock=""),S&&(w||te(f))&&(o.pendingBoilerPowerTestStart=!1),v&&te(f)&&(o.commissioningTaskLock=""),K&&te(T)&&(o.pendingFlowAutotuneStart=!1),R&&te(T)&&(o.commissioningTaskLock=""),ot&&(ge||te(_))&&(o.pendingAirPurgeStart=!1),Te&&te(_)&&(o.commissioningTaskLock=""),Ft&&(Dt||te(yt))&&(o.pendingManualFlowStart=!1),Oe&&(Dt||te(yt))&&(o.commissioningTaskLock=""),It&&(qo||te(nt))&&(o.pendingManualHpStart=!1),De&&(qo||te(nt))&&(o.commissioningTaskLock=""),nn&&(qi||te(rt))&&(o.pendingHpWaterCalibrationStart=!1),at&&te(rt)&&(o.commissioningTaskLock="");const Ju=a?"Wachten op CM100":t,Zu=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",Xu=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:Hi,available:!!(ki||o.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:Vt({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:Hi,statusCopy:we?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":rn?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:Uf({status:rt,running:we,resultReady:rn,startDisabled:Gu,abortDisabled:Qu,applyDisabled:Yu,busy:on,controlsAvailable:!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:$i,available:!!(So||o.entities.manualFlowStatus),openDisabled:!i,cardMarkup:Vt({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:$i,statusCopy:Ce?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${lt("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${o.entities.manualFlowStart||o.entities.manualFlowAbort?zt({active:Ce,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:Ke||ju,stopDisabled:Ke||Ku}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${X("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",re("flowSelected"),"oq-settings-field--compact")}
            ${X("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",re("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${o.entities.manualFlowApplyHeating?Re("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",Ke):""}
          ${o.entities.manualFlowApplyCooling?Re("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",Ke):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:Ai,available:!!(tn||o.entities.manualHpStatus),openDisabled:!i,cardMarkup:Vt({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:Ai,statusCopy:Fe?Si?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":wi?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${o.entities.manualHpStart||o.entities.manualHpAbort?zt({active:Fe,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:xt||Uu,stopDisabled:xt||zu}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${oo("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${lt("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${y("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${oo("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${lt("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${X("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",re("flowSelected"),"oq-settings-field--compact")}
              ${X("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",cs("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${y("hp2Compressor")?X("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",cs("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${X("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",C("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${X("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Do(B("hp1Failures","None")),"oq-settings-field--compact")}
              ${y("hp2Failures")?X("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Do(B("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:mr,available:!0,openDisabled:kt(mr),cardMarkup:Vt({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:mr,statusCopy:V?"Wacht totdat CM100 actief is voordat je autotune start.":D?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort?zt({active:D,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:N||Pi,stopDisabled:N||Wu}):""}
            ${o.entities.flowAutotuneApply?Re("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",N||Bu):""}
          `,metrics:`
            ${X("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",Du,"oq-settings-field--compact")}
            ${X("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",Fu,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:gr,available:e,openDisabled:kt(gr),cardMarkup:Vt({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s(H)}`,status:gr,statusCopy:q?"Wacht totdat CM100 actief is voordat je de boiler-test start.":k?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort?zt({active:k,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:b||Mi,stopDisabled:b||xu}):""}
            ${o.entities.boilerPowerTestApply?Re("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",b||Iu):""}
          `,metrics:`
            ${X("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",G)}
            ${X("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",re("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:hr,available:he,openDisabled:kt(hr),cardMarkup:Vt({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:hr,statusCopy:me?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${o.entities.airPurgeStart||o.entities.airPurgeAbort?zt({active:me,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:ue||Vu,stopDisabled:ue||_u}):""}
          `,metrics:`
            ${X("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",pr,"oq-settings-field--compact")}
            ${X("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",en,"oq-settings-field--compact")}
            ${X("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",re("flowSelected"),"oq-settings-field--compact")}
            ${Sf("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(ed=>ed.available);return{cm100Status:Ju,cm100StartDisabled:d,cm100StopDisabled:g,serviceStatusCopy:Zu,tasks:Xu}}function zf(e){return`
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
    `}function Gf(){const e=Rc();return ne("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
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
            ${e.tasks.map(t=>zf(t)).join("")}
          </div>
        </div>
      `)}function Qf(){const e=String(o.systemModal||"").replace(/^service-task-/,""),n=Rc().tasks.find(r=>r.key===e);return n?`
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
    `:""}function vs(){if(!y("hpGeneration"))return"";const e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:os,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:os,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:Ym,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},t=o.entities.hpGeneration||{},n=String(C("hpGeneration")||""),r=bo(t),a=o.loadingEntities||o.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${r.map(i=>{const l=e[i]||{};return er({key:"hpGeneration",option:i,currentValue:n,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function Yf(){const e=_o(),t=o.entities.hpGeneration||{},n=y("hpGeneration")&&bo(t).length>0;return!e&&!n?"":ne("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
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
      `)}function Lc(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!y("boilerCvAssistEnabled"))return"";const t=A("boilerCvAssistEnabled"),n=y("boilerRatedHeatPower"),r=Ze("boilerRatedHeatPower"),a=Le("boilerRatedHeatPower"),i=o.loadingEntities||o.busyAction==="switch-boilerCvAssistEnabled",c=n?Go({key:"boilerRatedHeatPower",value:a,meta:r,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,u=t&&n?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${s(e)}">
          ${ke("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${Qo("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",t,i)}
              </div>
            `,"oq-settings-field--compact")}

          ${t?ke("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${c}
              </div>
            `,t&&n?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",u):""}
        </div>
      `}function Jf(){if(!y("boilerCvAssistEnabled"))return"";const e=A("boilerCvAssistEnabled");return ne("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",Lc())}function Zf(){const e=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",t=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return ne("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
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
      `)}function Xf(){if(!y("trendHistoryEnabled")&&!y("lifetimeEnergyHistoryEnabled"))return"";const e=A("trendHistoryEnabled"),t=e&&A("trendHistoryFlashEnabled"),n=e&&y("trendHistoryFlashAvailable"),r=y("lifetimeEnergyHistoryEnabled"),a=r&&A("lifetimeEnergyHistoryEnabled"),i=y("lifetimeEnergyHistoryAvailable"),l=n?re("trendHistoryFlashAvailable"):"Alleen live",c=i?Sc(re("lifetimeEnergyHistoryAvailable")):"Geen data";return ne("Diagnose","Gegevens bewaren","Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${y("trendHistoryEnabled")?yr("Live diagnose",e?"Aan":"Uit","Live",e):""}
            ${y("trendHistoryFlashEnabled")?yr("Diagnosehistorie",l,t?"Permanent geheugen":"Uit",t):""}
            ${r?yr("Energiehistorie",c,a?"Permanent geheugen":"Uit",a):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `)}function eb(){if(!y("lifetimeEnergyHistoryEnabled"))return"";const e=o.energyHistoryImportRecords.length,t=new Set(o.energyHistoryImportHourRecords.map(c=>c.dateKey)).size,n=[];e>0&&n.push(`${e} dagrecords`),t>0&&n.push(`${t} uurdagen`),o.energyHistoryImportRange&&n.push(o.energyHistoryImportRange),o.energyHistoryImportSource&&n.push(o.energyHistoryImportSource),o.energyHistoryImportInvalidCount>0&&n.push(`${o.energyHistoryImportInvalidCount} regels niet gebruikt`);const r=!!o.energyHistoryImportFileName,a=e>0||t>0,i=Number(o.energyHistoryImportProgressPercent||0),l=o.energyHistoryImportBusy?`Importeren...${i>0?` (${i}%)`:""}`:"Importeren";return`
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
    `}function tb(){const e=y("trendHistoryEnabled")&&A("trendHistoryEnabled"),t=e&&y("trendHistoryFlashEnabled")&&A("trendHistoryFlashEnabled"),r=y("lifetimeEnergyHistoryEnabled")&&A("lifetimeEnergyHistoryEnabled"),a=y("lifetimeEnergyHistoryAvailable")?re("lifetimeEnergyHistoryAvailable"):"Geen data",i=y("lifetimeEnergyHistoryClear")&&a!=="Geen data"&&a!=="\u2014",l=Sc(a),c=e&&y("trendHistoryFlush"),d=y("lifetimeEnergyHistoryCapture")||y("lifetimeEnergyHistoryClear"),g=ff(),f=String(o.energyHistoryRaw||"").includes("@hour_retention|"),h=f&&!g.hourPartitionAvailable,w=f?h?"Alleen live":pf(g.hourStoredDayCount,"Geen uurdata"):"Laden...",b=f?h?"Niet beschikbaar":gf(g.hourStorageKb):"Laden...",m=f?h?"Niet beschikbaar":mf(g.hourWriteCount):"Laden...",S=f?h?"Niet beschikbaar":hf(g.hourLastWriteTimestampS):"Laden...",v=us(g.hourOldestDateKey),q=us(g.hourNewestDateKey),E=f?g.hourPartitionAvailable?`${v} t/m ${q}`:"Live beschikbaar; bewaren in Flash vraagt een nieuwere Flash-indeling.":"Uurdetailstatus wordt opgehaald.",k=[{title:"Diagnosegeschiedenis",meta:"Diagnose",shortLabel:"Diagnose",primary:He("trendHistoryFlashAvailable","Alleen live"),note:`Laatste meting: ${He("trendHistoryFlashNewest","Geen data")}`,items:[{label:"Bewaarperiode",value:He("trendHistoryFlashAvailable","Alleen live")},{label:"Opslagruimte",value:He("trendHistoryFlashSize")},{label:"Opslagacties",value:He("trendHistoryFlashWrites","0")},{label:"Laatst opgeslagen",value:He("trendHistoryFlashLastFlush","Geen data")}]},{title:"Dagtotalen",meta:"Resultaten",shortLabel:"Dag",primary:l,note:`${He("lifetimeEnergyHistoryOldest","Geen data")} t/m ${He("lifetimeEnergyHistoryNewest","Geen data")}`,items:[{label:"Dagen bewaard",value:l},{label:"Opslagruimte",value:He("lifetimeEnergyHistorySize")},{label:"Opslagacties",value:He("lifetimeEnergyHistoryWrites","0")},{label:"Laatst opgeslagen",value:He("lifetimeEnergyHistoryLastWrite","Geen data")}]},y("lifetimeEnergyHourRetention")?{title:"Uurdetail",meta:"Resultaten",shortLabel:"Uur",primary:w,note:E,items:[{label:"Dagen bewaard",value:w},{label:"Opslagruimte",value:b},{label:"Opslagacties",value:m},{label:"Laatst opgeslagen",value:S}]}:null];return`
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
                ${wr("trendHistoryEnabled","Recente diagnosegegevens","Bewaar de laatste meetpunten zolang de controller online is.","Na een herstart of update zijn deze tijdelijke gegevens niet meer beschikbaar.","Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.","Tijdelijk")}
                ${wr("trendHistoryFlashEnabled","Diagnosegeschiedenis bewaren","Bewaar recente diagnosegegevens ook na een herstart of update.","OpenQuatt slaat deze gegevens ongeveer elk uur op.","Alleen recente diagnosegegevens; bestaande geschiedenis blijft staan.","Permanent geheugen")}
                ${c?`
                  <div class="oq-settings-storage-inline-action">
                    <div>
                      <h4>Diagnose nu opslaan</h4>
                      <p>Sla de huidige diagnosegegevens direct op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    ${Sr("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!t,busyLabel:"Opslaan..."})}
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
                ${wr("lifetimeEnergyHistoryEnabled","Dagtotalen bewaren","Bewaar elke dag een samenvatting van je energiegegevens.","Zo blijven je resultaten ook na een herstart of update beschikbaar. OpenQuatt slaat dit op aan het einde van de dag en bij een normale afsluiting.","Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.","Permanent geheugen")}
                ${uf("lifetimeEnergyHourRetention","Uurdetail bewaren","Kies hoelang OpenQuatt detail per uur mag bewaren voor de daggrafiek.","Geavanceerd")}
                ${eb()}
                ${d?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--split">
                    <div>
                      <h4>Vandaag alvast opslaan</h4>
                      <p>Sla de gegevens van vandaag nu op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${Sr("lifetimeEnergyHistoryCapture","Vandaag opslaan","save-lifetime-energy-history",{disabled:!r,busyLabel:"Opslaan..."})}
                    </div>
                  </div>
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger">
                    <div>
                      <h4>Energiehistorie wissen</h4>
                      <p>Verwijder alle bewaarde dagtotalen. Je begint daarna opnieuw met het opbouwen van je energiehistorie.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${Sr("lifetimeEnergyHistoryClear","Historie wissen","clear-lifetime-energy-history",{disabled:!i,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}
                    </div>
                  </div>
                `:""}
              </div>
            </section>
          </div>
          ${vf(k)}
          <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> OpenQuatt schrijft deze gegevens niet continu weg, maar alleen op vaste momenten. Zo blijft duidelijk wat er wordt bewaard en hoeveel geheugen daarvoor wordt gebruikt.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `}function ob(){const e=ce()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${Hc()}
          </div>
          <div class="oq-settings-curve-shell">
            ${Oc()}
          </div>
          ${kc()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${Ec()}
          ${Mc()}
        </div>
      `;return ne("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${Tc()}
        ${Ac()}
        ${e}
      `)}function nb(){return ne("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",$c())}function rb(){const e=y("otEnabled"),t=y("cicPollingEnabled")||y("cicFeedUrl"),n=y("cicCompatibilityMode"),r=y("otLinkProblem")||y("cicDataStale")||y("cicJsonFeedOk");if(!e&&!t&&!n&&!r)return"";const a=pt("cicPollingEnabled"),i=pt("otEnabled"),l=({label:b,value:m,active:S=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${S?" is-warning":""}">
        <dt>${s(b)}</dt>
        <dd>${s(m)}</dd>
      </div>
    `,c=(b,m,S="Actief",v="Normaal",q={})=>{if(!y(b))return"";const E=U(b);return l({label:m,value:E?S:v,active:q.warningWhenActive?E:!1})},u=(b,m,S={})=>{const v=S.fallbackKey||"";return!y(b)&&!(v&&y(v))?"":l({label:m,value:re(y(b)?b:v,S)})},d=(b,m)=>{const S=m.filter(Boolean).join("");return S?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(b)}</h4>
          <dl>${S}</dl>
        </article>
      `:""},g=y("cicFeedUrl")?`
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
    `:"",f=d("OpenTherm",[y("otLinkProblem")?l({label:"OT-link",value:i?U("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&U("otLinkProblem")}):"",c("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),c("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),u("otControlSetpoint","Control setpoint"),u("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),u("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),h=d("CIC-feed",[y("cicJsonFeedOk")?l({label:"JSON-feed",value:a?U("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!U("cicJsonFeedOk")}):"",y("cicDataStale")?l({label:"Data",value:a?U("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&U("cicDataStale")}):"",c("cicChEnabled","CH-vraag","Actief","Normaal"),c("cicCoolingEnabled","Koeling","Actief","Normaal"),u("cicControlSetpoint","Control setpoint"),u("cicRoomSetpoint","Room setpoint"),u("cicRoomTemp","Room temperature"),u("cicFlowrate","Flow"),u("cicLastSuccessAge","Laatste succes")]),w=f||h?`
      <details class="oq-settings-integration-diagnostics"${o.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${f}
          ${h}
        </div>
      </details>
    `:"";return ne("Integratie","OpenTherm & CIC-polling","Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          ${qr("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${qr("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${qr("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${g}
        </div>
        ${w}
      `)}function ab(){if(!oa.some(T=>y(T)))return"";const t=pt("cicPollingEnabled"),n=pt("otEnabled"),r=(T={})=>T.haValueKey||(T.haKeys||[]).find($=>!/valid$/i.test($))||"",a=(T={})=>T.haValidKey||(T.haKeys||[]).find($=>/valid$/i.test($))||"",i=(T="",$="")=>!!T&&!!$&&y(T)&&y($)&&U($),l=(T={})=>i(r(T),a(T)),c=(T,$={})=>T==="CIC"?t:T==="OT thermostat"?n:T==="HA input"?l($):T==="CIC or HA input"?t||l($):T==="Flowmeter HP2"?y("hp2Flow"):T==="Local aggregate HP1/HP2"?y("flowLocal")||y("hp2Flow"):!0,u=(T,$={})=>T==="CIC"&&!t?"CIC-polling staat uit":T==="OT thermostat"&&!n?"OpenTherm staat uit":T==="HA input"&&!l($)?"HA-bron ongeldig":T==="CIC or HA input"&&!t&&!l($)?"CIC en HA ontbreken":T==="Flowmeter HP2"&&!y("hp2Flow")?"HP2-flow ontbreekt":T==="Local aggregate HP1/HP2"&&!y("flowLocal")&&!y("hp2Flow")?"Lokale flow ontbreekt":"",d=(T,$="Actief",N="Normaal")=>y(T)?U(T)?$:N:"",g=(T,$={})=>{const N=String(T||"").trim();return N?$.optionLabels?.[N]||Ne(N):""},f=(T,$={})=>{const N=String(C(T)||"").trim();return N?g(N,$):""},h=T=>{const $=Xn(T,"");return $?Ne($):""},w=(...T)=>T.find($=>String($||"").trim())||"",b=()=>{const T=f("waterSupplySource");if(String(C("waterSupplySource")||"")==="Local"&&y("localWaterSupplyTempSource")){const $=f("localWaterSupplyTempSource");return $?`${T} - ${$}`:T}return T},m=()=>{const T=String(C("flowSource")||"").trim();if(T==="Outdoor unit"){if(y("qFlowSource")){const $=String(C("qFlowSource")||"").trim(),N=String(C("hpGeneration")||"").trim();return $==="Local"||$==="Auto"&&N==="V1"?$==="Auto"?"Lokaal (auto)":"Lokaal":w(f("outdoorUnitFlowMode"),$==="Auto"?"Buitenunit (auto)":"Buitenunit")}return w(f("outdoorUnitFlowMode"),"Quatt-flow")}return Ne(T)},S=()=>{const T=String(C("outsideTempSource")||"").trim();if(T!=="Auto")return Ne(T);const $=M("outsideTempLocalAggregated"),N=M("outsideTempHa"),W=!Number.isNaN($),K=y("outsideTempHaValid")?U("outsideTempHaValid")&&!Number.isNaN(N):!Number.isNaN(N);return W&&K?N<=$?"HA-invoer":"Buitenunit":K?"HA-invoer":W?"Buitenunit":"Auto"},v=({label:T,value:$="",key:N="",active:W=!1})=>{const K=$||(N?re(N):"");return K?`
        <div class="oq-settings-source-row${W?" is-warning":""}">
          <span>${s(T)}</span>
          <strong>${s(K)}</strong>
        </div>
      `:""},q=({label:T="HA input",valueKey:$="",validKey:N="",value:W=""})=>i($,N)?[v({label:T,key:$,value:W}),v({label:"HA status",value:"Geldig"})]:[],E=(T,$={})=>{if(!y(T))return{markup:"",warning:""};const N=o.entities[T]||{},W=String(C(T)||""),R=bo(N).filter(Y=>c(Y,$)),V=W&&!c(W,$),P=W==="HA input"&&$.keepUnavailableCurrent!==!0,_=(V&&!P&&!R.includes(W)?[W,...R]:R).map(Y=>{const ge=!c(Y,$),ue=g(Y,$),J=ge?`${ue} (${u(Y,$)||"niet beschikbaar"})`:ue;return`<option value="${s(Y)}" ${Y===W?"selected":""}>${s(J)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s($.label||"Bron")}</span>
              ${$.infoCopy?fo($.infoId||T,$.infoTitle||$.label||"Bron",$.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s(T)}" ${o.loadingEntities?"disabled":""}>
              ${_}
            </select>
          </label>
        `,warning:V?`Huidige bron niet beschikbaar: ${u(W,$)}`:""}},k=({key:T,title:$,select:N,secondarySelect:W=null,secondarySelects:K=null,rows:R=[]})=>{const V=N&&N.when!==!1?E(N.key,N):{markup:"",warning:""},D=(Array.isArray(K)?K:W?[W]:[]).filter(J=>J&&J.when!==!1).map(J=>E(J.key,J)).filter(J=>J.markup),_=D.map(J=>J.markup).join(""),Y=D.map(J=>J.warning).find(Boolean)||"",ge=R.filter(Boolean).join(""),ue=`${V.markup}${_}`;return!ue&&!ge?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s(T||N.key)}">
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
      `},H=String(C("waterSupplySource")||""),O=String(C("flowSource")||""),F=String(C("qFlowSource")||""),G=[k({key:"room-temperature",title:"Kamertemperatuur",select:{key:"roomTempSource",label:"Kamertemperatuur bron",haKeys:["roomTempHa","roomTempHaValid"]},rows:[v({label:"Actieve waarde",key:"roomTemp"}),v({label:"Gebruikte bron",value:h("roomTempEffectiveSource")}),t?v({label:"CIC",key:"cicRoomTemp"}):"",n?v({label:"OpenTherm",key:"otRoomTemp"}):"",...q({valueKey:"roomTempHa",validKey:"roomTempHaValid"})]}),k({key:"room-setpoint",title:"Kamer setpoint",select:{key:"roomSetpointSource",label:"Setpoint bron",haKeys:["roomSetpointHa","roomSetpointHaValid"]},rows:[v({label:"Actieve waarde",key:"roomSetpoint"}),v({label:"Gebruikte bron",value:h("roomSetpointEffectiveSource")}),t?v({label:"CIC",key:"cicRoomSetpoint"}):"",n?v({label:"OpenTherm",key:"otRoomSetpoint"}):"",...q({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"})]}),k({key:"water-supply",title:"Aanvoertemperatuur",select:{key:"waterSupplySource",label:"Aanvoer bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:H==="Local"&&y("localWaterSupplyTempSource")},rows:[v({label:"Actieve waarde",key:"supplyTemp"}),v({label:"Gebruikte bron",value:b()}),v({label:"Lokale selectie",key:"waterSupplyTempEsp"}),v({label:"PT1000",key:"waterSupplyTempPt1000"}),v({label:"DS18B20",key:"waterSupplyTempDs18b20"}),t?v({label:"CIC",key:"cicWaterSupplyTemp"}):"",...q({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),k({key:"flow-source",title:"Flow",select:{key:"flowSource",label:"Flow bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:t||O==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Quatt-flow bron",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:O==="Outdoor unit"&&y("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Flowmeterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:O==="Outdoor unit"&&y("outdoorUnitFlowMode")&&(!y("qFlowSource")||F!=="Local")}],rows:[v({label:"Actieve waarde",key:"flowSelected"}),v({label:"Gebruikte bron",value:m()}),v({label:"Lokaal",key:"controllerFlow"}),v({label:"Gecombineerd",key:"flowLocal"}),v({label:"HP1",key:"hp1Flow"}),v({label:"HP2",key:"hp2Flow"}),t?v({label:"CIC",key:"cicFlowrate"}):""]}),k({key:"outside-temperature",title:"Buitentemperatuur",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],infoId:"outsideTempSource-auto-info",infoCopy:i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn zowel buitenunit als HA-invoer geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een van beide geldig, dan wordt die gebruikt.":"Auto gebruikt de geldige buitentemperatuur van de buitenunit."},rows:[v({label:"Actieve waarde",key:"outsideTempSelected"}),v({label:"Gebruikte bron",value:S()}),v({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...q({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"})]}),k({key:"heating-enable",title:"Warmtetoestemming",select:{key:"heatingEnableSource",label:"Warmtetoestemming bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],keepUnavailableCurrent:!0},rows:[v({label:"Verwarming toegestaan",value:d("heatingEnableSelected","Ja","Nee")}),v({label:"Gebruikte externe bron",value:h("heatingEnableEffectiveSource")}),v({label:"Bronselectie",value:d("heatingEnableValid","Geldig","Ongeldig")}),n?v({label:"OpenTherm",value:d("otThermostatChEnable","Toestemming","Geen toestemming")}):"",t?v({label:"CIC",value:d("cicChEnabled","Toestemming","Geen toestemming")}):"",...q({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:d("heatingEnableHa","Toestemming","Geen toestemming")})]}),k({key:"cooling-enable",title:"Koeltoestemming",select:{key:"coolingEnableSource",label:"Koeltoestemming bron",haKeys:["coolingEnableHa","coolingEnableHaValid"]},rows:[v({label:"Actieve waarde",value:d("coolingEnableSelected","Actief","Niet actief")}),v({label:"Gebruikte bron",value:h("coolingEnableEffectiveSource")}),v({label:"Handmatig",value:d("manualCoolingEnable","Aan","Uit")}),t?v({label:"CIC",value:d("cicCoolingEnabled","Actief","Normaal")}):"",...q({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:d("coolingEnableHa","Actief","Normaal")})]})].filter(Boolean);return G.length?ne("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${G.join("")}</div>`):""}function ib(){return ne("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${s(Ma())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(Pa())}</p>
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
                <strong class="oq-settings-quickstart-status-value">${s(Xa())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(ei())}</p>
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
      `)}function sb(){return ne("Integratie","MQTT","Stel hier de broker in voor de experimentele, compacte publish-only telemetry-export van OpenQuatt.",`
        <div class="oq-settings-quickstart-status" data-oq-mqtt-item="mqtt">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">MQTT-status</p>
              <strong class="oq-settings-quickstart-status-value">${s(Ia())}</strong>
              <p class="oq-settings-quickstart-status-copy">${s(Wa())}</p>
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
      `,'<span class="oq-settings-section-badge oq-settings-section-badge--experimental">Experimenteel</span>')}function Xa(){const e=o.apiSecurityStatus;return e?e.pending_restart?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function ei(){const e=o.apiSecurityStatus;return e?e.pending_restart?e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.":"API-encryptie wordt geladen."}function lb(){const e=o.settingsBackupBusy,t=Bo.length,n=Zt.length;return ne("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
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
      `)}function cb(){const e=o.settingsBackupBusy;return`
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
    `}function ub(){const e=o.settingsBackupDraft;if(!e)return"";const t=e.summary||Kl(e),n=String(e.source?.installation||e.source?.device||"Onbekend"),r=_o(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",c=oe(),u=typeof Z=="function"?Z():"",d=l!=="Onbekend"&&u&&l!==u,g=n!=="Onbekend"&&n!==r,f=d||g?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":t.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return`
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
              <span class="oq-helper-modal-subvalue">Topo: ${s(u)} \xB7 Firmware: ${s(c||"Onbekend")}</span>
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
                    ${h.rows.map(w=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(w.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(w.label)}</strong>
                          <span>${s(w.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(w.status)}">
                            <span>Backup</span>
                            <strong>${s(w.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(w.status)}">
                            <span>Nu</span>
                            <strong>${s(w.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${t.unknown||t.requiredMissing||g?" oq-settings-action-note--warning":""}">${s(f)}</p>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.settingsBackupBusy?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${o.settingsBackupBusy?"disabled":""}>${o.settingsBackupBusy?"Herstellen...":"Herstellen"}</button>
          </div>
        </section>
      </div>
    `}function db(){const e=jo(),t=ll(),n=o.busyAction==="restartAction";return ne("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          <div class="oq-settings-system-row" data-oq-diagnostics-row="uptime">
            <span class="oq-settings-system-row-label">Uptime</span>
            <strong class="oq-settings-system-row-value">${s(ba())}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="ip">
            <span class="oq-settings-system-row-label">IP-adres</span>
            <strong class="oq-settings-system-row-value">${s(va())}</strong>
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
              <strong class="oq-settings-system-row-value">${s(rc())}</strong>
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
              <strong class="oq-settings-system-row-value">${s(Yn())}</strong>
              <p class="oq-settings-system-row-note">${s(za())}</p>
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
      `)}function pb(){const e=[ms("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),ms("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return ne("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
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
          <div class="oq-settings-hp-columns${y("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}function gb(){return ne("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",Za())}function mb(){return Za("oq-settings-grid oq-settings-grid--modal")}function hb(){const e=[ee("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),lt("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${j("coolingDemandMax")} max`}),ee("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),ee("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."),ee("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."),ee("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),t=y("coolingWithoutDewPointMode"),n=[y("coolingGuardMode")?X("coolingGuardMode","Actieve beveiligingsroute","Laat zien of koeling nu via dauwpuntmeting, dauwpuntsbenadering of expliciet toestaan wordt begrensd.",B("coolingGuardMode","Onbekend")):"",y("coolingFallbackNightMinOutdoorTemp")?X("coolingFallbackNightMinOutdoorTemp","Nachtminimum buitentemperatuur","Minimum buitentemperatuur van de afgelopen nacht. Warme nachten maken de dauwpuntsbenadering conservatiever.",B("coolingFallbackNightMinOutdoorTemp","\u2014")):"",y("coolingFallbackMinSupplyTemp")?X("coolingFallbackMinSupplyTemp","Berekende minimum watertemperatuur","De conservatieve ondergrens die OpenQuatt gebruikt bij de dauwpuntsbenadering. Als die grens door warm weer hoger wordt dan zinvol is, houdt OpenQuatt rekening met de kamertemperatuur.",B("coolingFallbackMinSupplyTemp","\u2014")):"",y("coolingEffectiveMinSupplyTemp")?X("coolingEffectiveMinSupplyTemp","Actieve minimum ondergrens","De ondergrens die de koeling nu daadwerkelijk gebruikt: dauwpunt plus marge, dauwpuntsbenadering, of de ingestelde minimumgrens bij expliciet toestaan.",B("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean);if(!e.length&&!t&&!n.length)return"";const r={"Dew point required":"Koel alleen als er een betrouwbare dauwpuntmeting beschikbaar is. Zonder dauwpuntmeting blijft koeling geblokkeerd.","Allow without dew point":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use fallback":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use dew point approximation":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, user responsibility":"Sta koeling expliciet toe zonder dauwpuntgrens. Ook een beschikbare dauwpuntmeting wordt dan genegeerd; alleen de ingestelde minimale koel-aanvoer geldt."};return ne("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${e.length?`
          <div class="oq-settings-grid">
            ${e.join("")}
          </div>
        `:""}
        ${t||n.length?`
          <div class="oq-settings-grid">
            ${t?qf("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",r,"oq-settings-field--span-2"):""}
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
      `)}function Oc(){const n={top:22,right:18,bottom:38,left:34},r=560-n.left-n.right,a=240-n.top-n.bottom,i=pe[0].outdoor,l=pe[pe.length-1].outdoor,c=w=>n.left+(w-i)/(l-i)*r,u=w=>n.top+(70-w)/50*a,d=[20,30,40,50,60,70].map(w=>{const b=u(w);return`
          <line x1="${n.left}" y1="${b}" x2="${560-n.right}" y2="${b}" class="oq-helper-curve-grid" />
          <text x="8" y="${b+4}" class="oq-helper-curve-axis-label">${w}\xB0</text>
        `}).join(""),g=pe.map(w=>`
        <text x="${c(w.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(w.label)}</text>
      `).join(""),f=pe.map(w=>`${c(w.outdoor)},${u(Se(w.key,C(w.key)))}`).join(" "),h=pe.map(w=>{const b=Se(w.key,C(w.key));return`
          <g>
            <circle
              cx="${c(w.outdoor)}"
              cy="${u(b)}"
              r="7"
              class="oq-helper-curve-point ${o.draggingCurveKey===w.key?"is-dragging":""}"
              data-curve-key="${s(w.key)}"
            />
            <text x="${c(w.outdoor)}" y="${u(b)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${b.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${d}
          <polyline points="${f}" class="oq-helper-curve-line" />
          ${h}
          ${g}
        </svg>
      </div>
    `}function Dc(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${vs()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${vs()}
        ${et()}
      </section>
    `}function fb(e){const t=String(e||"").trim();if(!t)return"";try{const n=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`http://${t}`);return n.protocol!=="http:"&&n.protocol!=="https:"?"":(n.port||(n.port="8080"),(!n.pathname||n.pathname==="/")&&(n.pathname="/beta/feed/data.json"),n.toString())}catch{return""}}function Fc(){const e=String(C("cicFeedUrl")||"").trim(),t=o.quickStartCicFeedUrlDraft===null?e:String(o.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:t,normalizedDraftUrl:fb(t)}}function xc(e,t){return`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${fo("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
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
    `}function ys(e){const t=String(e||"").trim().toLowerCase();return t==="heatpump_controller_q"||t.includes("q-edition")||t.includes("controller q")?"heatpump_controller_q":t==="heatpump_listener"||t.includes("listener")?"heatpump_listener":t==="waveshare"||t.includes("waveshare")?"waveshare":""}function Ic(){let e=ys(C("hardwareProfileText")),t=!1;return e||(e=ys(ht().hardwareProfile)),!e&&y("qFlowSource")?(e="heatpump_controller_q",t=!0):!e&&y("flowSource")&&y("cicPollingEnabled")&&(e="remote",t=!0),{profile:e,inferred:t,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function Yo(){const e=String(C("hpGeneration")||"").trim(),t=Ic(),n=e==="V1",{isQEdition:r,isRemoteProfile:a,hardwareKnown:i}=t,l=n&&a,c=r?n?"Local":"Outdoor unit":"",u=l?"CIC":"Outdoor unit",d=String(C("flowSource")||"").trim(),g=String(C("qFlowSource")||"").trim(),f=A("cicPollingEnabled"),h=A("cicJsonFeedOk"),w=A("cicDataStale"),b=Fc(),m=d===u&&(!c||g===c),S=l?m&&f&&!!b.configuredUrl:m,v=l?"cicFlowrate":r&&n?"controllerFlow":Z()==="duo"?"flowLocal":"hp1Flow",q=M(v),E=Number.isFinite(q),k=A("quickFlowTest");let H=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&S?H=h&&E?q>0?"Geldig":"Bron actief, geen circulatie":w?"Geen actuele CiC-data":h?"Verbonden, wacht op flow":"Verbinding controleren":!l&&S&&(H=E?q>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");const O=l?"CiC JSON-feed":r&&n?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",F=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":r&&n?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:t.hardwareLabel,requiresCic:l,qFlowTarget:c,flowSourceTarget:u,configurationApplied:S,sourceLabel:O,explanation:F,status:H,flowValue:q,flowAvailable:E,flowTestActive:k,canRunFlowTest:S,...b,canApply:i&&y("flowSource")&&(!c||y("qFlowSource"))&&(!l||y("cicPollingEnabled")&&y("cicFeedUrl")&&!!b.normalizedDraftUrl)}}function ti(){const e=Ic(),{isQEdition:t,isRemoteProfile:n}=e,r=String(C("roomTempSource")||"").trim(),a=String(C("roomSetpointSource")||"").trim(),i=r===a&&["CIC","OT thermostat","HA input"].includes(r)?r:"",l=t?"OT thermostat":o.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),c=Fc(),d=r===l&&a===l&&(l!=="OT thermostat"||A("otEnabled"))&&(l!=="CIC"||A("cicPollingEnabled")&&!!c.configuredUrl),g=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],f=M(g[0]),h=M(g[1]),w=Number.isFinite(f)&&Number.isFinite(h),b=l==="OT thermostat"?A("otEnabled")&&!A("otLinkProblem")&&w:l==="CIC"?A("cicJsonFeedOk")&&!A("cicDataStale")&&w:A("roomTempHaValid")&&A("roomSetpointHaValid")&&w;let m=t||n?"Nog activeren":"Hardwareprofiel niet herkend";d&&(m=b?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");const S=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",v=t?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:t,isRemoteProfile:n,selectedSource:l,sourceLabel:S,explanation:v,configurationApplied:d,status:m,roomTempValue:f,roomSetpointValue:h,valuesAvailable:w,...c,canApply:(t||n)&&y("roomTempSource")&&y("roomSetpointSource")&&(l!=="OT thermostat"||y("otEnabled"))&&(l!=="CIC"||y("cicPollingEnabled")&&y("cicFeedUrl")&&!!c.normalizedDraftUrl)}}function bb(){const e=Yo(),t=o.busyAction==="quickstart-flow-source"||o.busyAction==="quickstart-flow-refresh",n=o.busyAction==="quickstart-flow-test-start"||o.busyAction==="quickstart-flow-test-abort",r=t||n||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?xc(e,r):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ke("quickStartFlowSource","Vastgestelde flowbron",e.explanation,`
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
        ${et({nextDisabled:!e.configurationApplied||e.flowTestActive||n,nextDisabledLabel:n?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function vb(){const e=ti(),t=o.busyAction==="quickstart-thermostat-source",n=e.status==="Geldig"?" is-active":"",r=e.isRemoteProfile?`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${fo("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
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
    `:"",a=e.selectedSource==="CIC"?xc(e,t):"",i=e.selectedSource==="HA input"?`
      <article class="oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ke("quickStartThermostatSourceStatus",e.isQEdition?"Vastgestelde thermostaatbron":"Gekozen thermostaatbron",e.explanation,`
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
        ${et({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function yb(){return!o.quickStartModalOpen||o.loadingEntities||o.complete===null||o.complete&&o.quickStartModalMode!=="generation"?"":o.quickStartModalMode==="generation"?`
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
            ${Dc("picker")}
          </section>
        </div>
      `:`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${s(Pb().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">\xD7</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${Ab()}
            ${Nb()}
          </div>
        </section>
      </div>
    `}function Wc(){return o.root?o.root.querySelector("[data-oq-quickstart-scroller]"):null}function wb(){const e=Wc();return e?{stepId:String(e.dataset.oqQuickstartStep||""),scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Ua(e)}:null}function Sb(e){if(!e)return;const t=Wc();if(!t||String(t.dataset.oqQuickstartStep||"")!==e.stepId)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const n=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,n)}function ws(e,t=!0){if(!e)return;const n=Number(o.quickStartScrollRestoreToken||0)+1;o.quickStartScrollRestoreToken=n;const r=()=>{o.quickStartScrollRestoreToken!==n||!o.quickStartModalOpen||Sb(e)};if(t){window.requestAnimationFrame(r);return}r()}function Ss(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${Ac()}
        ${Tc("oq-settings-grid oq-settings-grid--quickstart")}
        ${et()}
      </section>
    `}function qb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${Lc("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${et()}
      </section>
    `}function kb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${Cc("oq-settings-grid oq-settings-grid--quickstart")}
        ${et()}
      </section>
    `}function Tb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(ce()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(ce()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${ce()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${Hc()}</div>
            <div class="oq-settings-curve-shell">
              ${Oc()}
            </div>
            ${kc()}
          `:`
            ${Ec("oq-settings-grid oq-settings-grid--quickstart")}
            ${Mc()}
          `}
        ${et()}
      </section>
    `}function Cb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${$c("oq-settings-grid oq-settings-grid--quickstart")}
        ${et()}
      </section>
    `}function Eb(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${Za("oq-settings-grid oq-settings-grid--quickstart")}
        ${et()}
      </section>
    `}function $b(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(je("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${Rb()}
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
    `}function Ab(){return o.currentStep==="generation"?Dc():o.currentStep==="boiler"?y("boilerCvAssistEnabled")?qb():Ss():o.currentStep==="flow-source"?bb():o.currentStep==="thermostat-source"?vb():o.currentStep==="flow"?kb():o.currentStep==="heating"?Tb():o.currentStep==="water"?Cb():o.currentStep==="silent"?Eb():o.currentStep==="confirm"?$b():Ss()}function Ot(){return Nn.filter(e=>!e.optionalEntity||y(e.optionalEntity))}function je(e){const t=Ot().findIndex(n=>n.id===e);return`Stap ${Math.max(0,t)+1}`}function Hb(e){const t=or(),n=e===t,r=o.complete===!0||e<t;return{tone:n?"current":r?"done":"upcoming",label:n?"Actief":r?"Gereed":"Volgend",current:n}}function Mb(e=!1){return Ot().map((t,n)=>{const r=Hb(n);return`
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
      `}).join("")}function Pb(){const e=Ot();return e.find(t=>t.id===o.currentStep)||e[0]||Nn[0]}function or(){return Math.max(0,Ot().findIndex(e=>e.id===o.currentStep))}function qs(e){const t=Ot(),n=Math.min(t.length-1,Math.max(0,or()+e));o.currentStep=t[n]?.id||Nn[0].id}function et(e={}){const t=or(),n=Ot(),r=t>0?n[t-1]:null,a=t<n.length-1?n[t+1]:null;return`
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
    `}function Nb(){const e=or(),t=Ot();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${t.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${Mb(!0)}
        </div>
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
      </section>
    `}function Rb(){const e=Ne(B("hpGeneration")),t=ce()?"Stooklijn":"Power House",n=S=>Ne(B(S)),r=[],a=ce()?[["Regelprofiel",n("curveControlProfile")],["Aanvoer bij -20\xB0C",j("curveM20")],["Aanvoer bij -10\xB0C",j("curveM10")],["Aanvoer bij 0\xB0C",j("curve0")],["Aanvoer bij 5\xB0C",j("curve5")],["Aanvoer bij 10\xB0C",j("curve10")],["Aanvoer bij 15\xB0C",j("curve15")],["Fallback-aanvoer",j("curveFallbackSupply")]]:[["Profiel",n("phResponseProfile")],["Rated maximum house power",j("housePower")],["Maximum heating outdoor temperature",j("houseOutdoorMax")],["Temperatuurreactie",j("phKp")],["Comfort onder setpoint",j("phComfortBelow")],["Comfort boven setpoint",j("phComfortAbove")]],i=String(C("flowControlMode")||""),l=Yo(),c=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],u=ti(),d=[["Status",u.status],["Kamertemperatuur",Number.isFinite(u.roomTempValue)?`${u.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(u.roomSetpointValue)?`${u.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],g=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",j("manualIpwm")]:["Gewenste flow",j("flowSetpoint")]],f=y("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",A("boilerCvAssistEnabled")?"Ja":"Nee"],...A("boilerCvAssistEnabled")?[["Boiler rated heat power",j("boilerRatedHeatPower")]]:[]]:[],h=[["Maximale watertemperatuur",j("maxWater")]],w=[["Start stille uren",Nr(C("silentStartTime"))||"\u2014"],["Einde stille uren",Nr(C("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",j("silentMax")],["Maximaal niveau overdag",j("dayMax")]],b=S=>`
      <div class="oq-helper-review-list">
        ${S.filter(v=>v&&v[1]).map(([v,q])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(v)}</span>
                <strong class="oq-helper-review-value">${s(q)}</strong>
              </div>
            `).join("")}
      </div>
    `,m=(S,v,q="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(S)}</h3>
        ${q?`<p class="oq-helper-review-summary"><strong>${s(q)}</strong></p>`:""}
        ${b(v)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${m("Quatt Hybrid-versie",r,e)}
        ${m("Flowmeting",c,l.sourceLabel)}
        ${m("Verwarmingsstrategie",a,t)}
        ${m("Watertemperatuur",h)}
        ${m("Thermostaatgegevens",d,u.sourceLabel)}
        ${m("Flowregeling",g)}
        ${f.length?m("CV-ketel / boiler",f):""}
        ${m("Stille uren",w)}
      </div>
    `}function Lb({label:e,value:t,tone:n,note:r,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(n)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(t)}</strong>
        <span>${s(r)}</span>
      </article>
    `}function nr(e,t=!1){return e.map(n=>Lb({...n,value:Object.prototype.hasOwnProperty.call(n,"key")?We(n.key):n.value,status:t})).join("")}function oi(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function Bc(){const e=tr();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(ve(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(t=>t.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function Vc({className:e,title:t,copy:n,body:r,signature:a=""}){const i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${t?`<div class="oq-overview-system-copy"><h3>${s(t)}</h3><p>${s(n)}</p></div>`:""}
        ${r}
      </section>
    `}function _c(e,t){return t?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function Ob(e,t){const n=t?"active":"neutral",r=_c(e,t);return`<span class="oq-overview-chip oq-overview-chip--${s(n)}" data-oq-bind="panel-status">${s(r)}</span>`}function Db(e){return`
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
    `}function jc(e,t,n,r){return`${n?Db(r):""}${Ob(e,t)}`}function Fb(e,t,n,r,a){if(!e)return;const i=ve({mode:t,running:n,warningActive:r,failureText:a});e.dataset.renderSignature!==i&&(ct(e,jc(t,n,r,a)),e.dataset.renderSignature=i)}function Br(e,t,n=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(n||B(t))}</strong>
      </div>
    `}function xb(e,t,n="blue",r=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(n)}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </article>
    `}function Ib(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}function x(e,t,n=""){const r=Number(e);return Number.isNaN(r)?"\u2014":`${r.toFixed(t)}${n?` ${n}`:""}`}function Wb(e){if(!Number.isFinite(e)||e<0)return"\u2014";const t=Math.floor(e),n=Math.floor(t/1440),r=Math.floor(t%1440/60),a=t%60;return n>0?`${n}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function Bb(e){const n=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!n)return Number.NaN;const r=Number(n[1]),a=Number(n[2]);return Number.isNaN(r)||Number.isNaN(a)||r<0||r>23||a<0||a>59?Number.NaN:r*60+a}function Vb(e){const t=Bb(B("timeNowHhmm",""));if(!Number.isFinite(t))return"";const n=Math.round(e),r=((t-n)%1440+1440)%1440,a=Math.floor(r/60),i=r%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function _b(e,t){const n=Math.max(0,(Number(t)-Number(e))/6e4),r=Wb(n),a=y("timeValid")&&A("timeValid")?Vb(n):"";return a?{value:a,note:`${r} geleden`}:{value:`${r} geleden`,note:"Geen tijdsync"}}function jb(e){const t=Number(e);return Number.isNaN(t)?"\u2014":`${t>0?"+":t<0?"-":""}${Math.abs(t).toFixed(0)} W`}function Kc(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>y(e))||""}function Kb(){return["hp1WaterIn","hp2WaterIn"].find(e=>y(e))||""}function Uc(e=B("controlModeLabel","")){const t=String(e||"").toLowerCase();return t.includes("cm5")||t.includes("cooling")||t.includes("koeling")}function vt(){return Uc()}function zc(e,t){const n=String(e||"").trim().toLowerCase();return n==="waiting for room request"||n==="wacht op kamervraag"?!0:t?!1:n==="flow too low"||n==="flow te laag"||n==="flow unavailable"}function Gc(){return vt()?"Koeling":ce()?"Stooklijn":"Power House"}function Ub(){const e=["phouseReq","strategyRequestedPower"];for(const t of e){const n=M(t);if(!Number.isNaN(n))return n}return Number.NaN}function Qc(){const e=Ub(),t=M("phouseHouse"),n=M("totalHeat"),r=M("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:e-t;let i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(r)&&e>r+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(n)&&n<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(n)&&n>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(n)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:x(e,0,"W"),houseText:x(t,0,"W"),correctionText:jb(a),capacityText:We("hpCapacity"),statusTitle:i,statusCopy:l}}function Yc(){const e=M("curveSupplyTarget"),t=M("supplyTemp"),n=Kc(),r=n?M(n):Number.NaN,a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:t-e,i=!!n&&Number.isNaN(r);let l="Stuurt op buitentemperatuur",c="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",c="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",c="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",c="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",c="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:We("curveSupplyTarget"),supplyText:We("supplyTemp"),deltaText:Ib(a),capacityText:We("hpCapacity"),statusTitle:l,statusCopy:c}}function Jc(){const e=M("supplyTemp"),t=B("coolingGuardMode",""),n=B("coolingFallbackNightMinOutdoorTemp","\u2014"),r=M("coolingSupplyError"),a=M("coolingDemandRaw"),i=A("coolingPermitted"),l=A("coolingRequestActive"),c=B("coolingBlockReason","Onbekend"),u=qc(c),d=zc(c,l);let g="Wacht op koelvraag",f="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return d?(g="Wacht op koelvraag",f="Koeling staat aan en wacht nog op actieve koelvraag vanuit de kamerregeling."):i?l?!Number.isNaN(a)&&a<=0?(g="Houdt doel vast",f="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(r)&&r>1?(g="Trekt aanvoer omlaag",f="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(r)&&r>.2?(g="Benadert koeldoel",f="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(r)||(g="Koelt rustig door",f="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(g="Koeling gereed",f="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(g="Koeling geblokkeerd",f=`Blokkade: ${u}.`),{targetText:We("coolingSupplyTarget"),supplyText:We("supplyTemp"),safeFloorText:We("coolingEffectiveMinSupplyTemp"),guardMode:t,fallbackNightMin:n,demandText:We("coolingDemandRaw"),statusTitle:g,statusCopy:f,permitted:i,requestActive:l,blockReason:u,waitingForRoomRequest:d}}function Vr(){if(vt()){const t=Jc(),n=t.guardMode.toLowerCase(),r=n.includes("user responsibility"),a=n.includes("fallback");return{title:"Koelregeling",copy:r?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:t.targetText,focusCopy:t.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:r?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:t.safeFloorText,tone:"blue",note:r?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${t.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:t.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(ce()){const t=Yc();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:t.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:t.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:t.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}const e=Qc();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function Zc(e){return Vc({className:"oq-overview-system",title:e.title,copy:e.copy,signature:ve(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(t=>xb(t.label,t.value,t.tone,t.note)).join("")}
        </div>
      `})}function zb(){if(!A("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(vt()){const r=Jc(),a=r.waitingForRoomRequest?"neutral":r.permitted?r.statusTitle==="Koelt rustig door"||r.statusTitle==="Houdt temperatuur vast"?"green":r.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:r.statusTitle,tone:a}}if(Xv())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};const t=(ce()?Yc():Qc()).statusTitle;return{label:"Regeling nu",value:t,tone:t==="In balans"||t==="Dicht bij doel"?"green":t==="Nog aan het opbouwen"||t==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function Gb(){return A("openquattEnabled")?vt()?A("coolingPermitted")?A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:B("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:A("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function Xc(e,t){const n=zb(),r=Gb();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:t,tone:"orange",note:"actieve modus"},{label:"Regeling",value:n.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:r.value,tone:"orange",note:"actieve randvoorwaarde"}]}function eu(e,t){const n=Xc(e,t);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(ve(n))}">
        ${oi("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${nr(n,!0)}
        </div>
      </section>
    `}function tu(){const e=vt();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function Qb(){const e=A("openquattEnabled"),t=C("openquattResumeAt"),n=Na(t),r=(o.loadingEntities||o.entitySyncInFlight)&&!y("openquattResumeAt"),a=A("manualCoolingEnable"),i=String(C("silentModeOverride")||"Schedule"),l=!A("coolingPermitted"),c=A("coolingRequestActive"),u=Uc(),d=B("coolingBlockReason",""),g=zc(d,c);let f="Uit",h="Koeling staat uit.";a&&u?(f="Actief",h="Koeling draait nu."):a&&g?(f="Aan",h="Koeling staat aan en wacht op koelvraag."):a&&l?(f="Geblokkeerd",h=qc(d||"Koeling wacht nog op veilige condities.")):a&&c?(f="Start bijna",h="Er is koelvraag. Koeling start zodra dat kan."):a&&(f="Aan",h="Koeling staat aan en wacht op koelvraag.");let w="Uit",b="Stille modus staat uit.",m="neutral";return i==="On"?(w="Aan",b="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",m="orange"):i==="Schedule"&&(w="Schema",A("silentActive")?(b="Stille modus staat nu aan via het tijdvenster.",m="violet"):b="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":n?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[r?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:n?"Hervat automatisch":"Hervatten",value:n?Ra(t,!0):"Handmatig",tone:n?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:f,copy:h,buttonLabel:a?"Zet uit":"Zet aan",nextState:a?"off":"on",tone:a?u?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:w,copy:b,tone:m,kind:"select",selectedOption:i,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(S=>y(S.key))}function Yb(e=[]){return e.length?`
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
    `}function Jb(e){if(e.kind==="openquatt-control"){const t=o.busyAction==="openquatt-regulation",n=(o.loadingEntities||o.entitySyncInFlight)&&!y("openquattResumeAt");return A("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${jt({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:t})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${jt({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:t})}
            ${jt(n?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:Na()?"Moment wijzigen":"Automatisch hervatten"})}
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
    `}function ou(){const e=Qb();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${oi("Bediening")}
        ${e.map(t=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(t.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(t.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(t.tone)}">${s(t.status)}</strong>
            </div>
            <p>${s(t.copy)}</p>
            ${Yb(t.meta)}
            ${Jb(t)}
          </article>
        `).join("")}
      </section>
    `:""}function Zb(e){const t=B("controlModeLabel");return`
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
              ${oi("Kerncijfers")}
              <div class="oq-overview-top">
                ${nr(tu())}
              </div>
            </section>
            ${eu(e,t)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(Gl())}">
            ${ou()}
          </aside>
        </div>
      </section>
    `}function ni(){const e=Kc(),t=Kb();return vt()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...t?[{label:"Retourtemperatuur",key:t}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function nu(e=ni()){return ve({...e,values:e.rows.map(t=>t.value||B(t.key))})}function ru(){const e=ni();return Vc({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:nu(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(t=>Br(t.label,t.key,t.value||"")).join("")}
        </div>
      `})}const ks=360;function tt(){const e=aa(o.trendWindowHours||Xt);return e!==o.trendWindowHours&&ia(e),e}function au(e=tt()){return Math.max(1,Number(e)||24)*60*60*1e3}function Xb(e=tt()){const t=Number(e)||24;return t>=72&&t%24===0?`${t/24}d`:`${t}u`}function ri(e=tt()){const t=Number(e)||24;if(t>=72&&t%24===0){const n=t/24;return`${n} ${n===1?"dag":"dagen"}`}return`${t} uur`}function kr(e){if(!Number.isFinite(e))return"\u2014";const t=new Date(e);if(Number.isNaN(t.getTime()))return"\u2014";const n={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(t)}catch{return t.toLocaleString("nl-NL",n)}}function ev(e){const t=String(e||"").trim().split("|");if(t.length<5)return null;const n=Number(t[0]);if(!Number.isFinite(n))return null;const r=a=>{const i=Number(a);return Number.isFinite(i)?i:null};return{t:n,outside:r(t[1]),supply:r(t[2]),room:t.length>=8?r(t[3]):null,roomSetpoint:t.length>=8?r(t[4]):null,flow:t.length>=8?r(t[5]):null,input:t.length>=8?r(t[6]):r(t[3]),output:t.length>=8?r(t[7]):r(t[4])}}function _r(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}function Tr(e=tt()){return typeof window>"u"||!window.__OQ_DEV_TREND_MOCKS__||typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples!="function"?[]:window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(e)}function iu(){const e=au(),t=String(o.trendHistoryRaw||"").trim();if(!t)return _r()?Tr():[];const n=t.split(/\r?\n/).map(ev).filter(Boolean),r=n.length?n[n.length-1].t:Number.NaN,a=Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:Number.isFinite(r)?r:Number.NaN;if(!Number.isFinite(a))return n.length?n.slice(-ks):Tr();const i=Math.max(0,a-e),l=n.filter(c=>c.t>=i).slice(-ks);return l.length?l:_r()?Tr(windowHours):[]}function ai(){const e=tt(),t=ri(e),n=iu(),r=_r()&&n.length===0,a=vt();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${t}.`,tone:"orange",samples:n,mock:r,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${t}.`,tone:"green",samples:n,mock:r,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${t}.`,tone:"slate",samples:n,mock:r,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{const l=Number(i?.input),c=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(c)||l<=0?Number.NaN:c/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${t}.`,tone:"blue",samples:n,mock:r,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${t}.`,tone:"sky",samples:n,mock:r,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function tv(e){const t=e.samples[e.samples.length-1]||null;return ve({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:t?.t||0,trendSignature:o.trendHistorySignature||"",latestValues:t?[t.outside,t.supply,t.room,t.roomSetpoint,t.flow,t.input,t.output]:[]})}function Oo(e,t){if(!e||!t)return Number.NaN;const n=typeof e.derive=="function"?e.derive(t):t?.[e.sampleKey],r=Number(n);return Number.isFinite(r)?r:Number.NaN}function ov(e,t){const n=[];return e.forEach(r=>{t.forEach(a=>{const i=Oo(a,r);Number.isFinite(i)&&n.push(i)})}),n.length?{min:Math.min(...n),max:Math.max(...n)}:{min:0,max:1}}function nv(e){if(!Number.isFinite(e)||e<=0)return 1;const t=Math.floor(Math.log10(e)),n=e/10**t;let r;return n<=1?r=1:n<=2?r=2:n<=5?r=5:r=10,r*10**t}function rv(e,t){const n=Number.isFinite(e?.min)?e.min:0,r=Number.isFinite(e?.max)?e.max:1,a=Math.max(r-n,1),i=Array.isArray(t)?t.map(h=>Number(h?.axisMin)).find(h=>Number.isFinite(h)):Number.NaN,l=Array.isArray(t)?t.map(h=>Number(h?.axisMax)).find(h=>Number.isFinite(h)):Number.NaN,c=Array.isArray(t)?t.map(h=>Number(h?.axisTickStep)).find(h=>Number.isFinite(h)&&h>0):Number.NaN,u=Math.max(1,Number.isFinite(c)?c:nv(a/4)),d=[];if(Number.isFinite(i)||Number.isFinite(l)){const h=Number.isFinite(i)?i:0,w=Number.isFinite(l)?l:Math.ceil(r/u)*u,b=Math.floor(h/u)*u,m=Math.ceil(w/u)*u;for(let S=b;S<=m+u*.5;S+=u)d.push(S)}else{const h=a/u,w=h<=1.8?3:h<=4.25?5:7,b=Math.floor(w/2),m=(n+r)/2,S=Math.round(m/u)*u;for(let v=-b;v<=b;v+=1)d.push(S+v*u)}const g=d[0],f=d[d.length-1];return{ticks:d,axisMin:g,axisMax:f,axisDecimals:0}}function su(e,t,n={}){const r=Number(n.windowHours),a=Number.isFinite(r)?r:tt(),i=au(a),l=640,c=220,u=46,d=18,g=18,f=34,h=l-u-d,w=c-g-f,b=e[e.length-1],m=!!n.mockData,S=m?i:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:b?b.t:0,v=m?0:S-i,q=Math.max(S-v,1),E=q,k=ov(e,t),H=k.min===k.max?{min:k.min-1,max:k.max+1}:{min:k.min-Math.max((k.max-k.min)*.12,1),max:k.max+Math.max((k.max-k.min)*.12,1)},O=rv(k,t),F=R=>u+(R-v)/q*h,G=R=>{if(!Number.isFinite(R))return Number.NaN;const V=(R-H.min)/Math.max(H.max-H.min,1);return g+(1-Math.min(1,Math.max(0,V)))*w},T=[0,.5,1].map(R=>u+h*R),$=O.ticks.map(R=>G(R)),N=O.ticks.map((R,V)=>({x:u-10,y:$[V],text:x(R,O.axisDecimals)})),W=e.map(R=>{const V=F(R.t),P=t.map(D=>{const _=Oo(D,R);return Number.isFinite(_)?{seriesId:D.id||D.sampleKey||D.label,tone:D.tone,label:D.label,decimals:D.decimals,unit:D.unit,value:_,x:V,y:G(_)}:null});return{sample:R,x:V,values:P}}),K=t.flatMap(R=>{const V=[];let P=[];return e.forEach(D=>{const _=Oo(R,D);if(!Number.isFinite(_)){P.length&&(V.push(P),P=[]);return}P.push({x:F(D.t),y:G(_)})}),P.length&&V.push(P),V.map(D=>D.length<2?{tone:R.tone,points:D,path:""}:{tone:R.tone,points:D,path:D.map((_,Y)=>`${Y===0?"M":"L"} ${_.x.toFixed(1)} ${_.y.toFixed(1)}`).join(" ")})});return{width:l,height:c,left:u,right:d,top:g,bottom:f,plotWidth:h,plotHeight:w,latest:b,uptimeMs:E,endTime:S,startTime:v,span:q,windowHours:a,range:k,displayRange:H,gridXs:T,gridYs:$,yAxisLabels:N,points:W,tracks:K,series:t}}function ii(){return ve({windowHours:tt(),trendSignature:o.trendHistorySignature||"",trendNowMs:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:0,coolingActive:vt()})}function av(e){return ai().find(t=>t.id===e)||null}function iv(e,t){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let n=0,r=Math.abs(e.points[0].x-t);return e.points.forEach((a,i)=>{const l=Math.abs(a.x-t);l<r&&(n=i,r=l)}),n}function sv(e,t){const n=lu(e,t);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(x(n,e.decimals,e.unit))}</strong>
      </div>
    `}function lu(e,t){if(e?.currentKey&&y(e.currentKey)){const n=M(e.currentKey);if(Number.isFinite(n))return n}return Oo(e,t)}function cu(e){e&&ai().forEach(t=>{const n=e.querySelector(`[data-oq-trend-card="${t.id}"]`),r=t.samples[t.samples.length-1]||null;n&&t.series.forEach(a=>{const l=n.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),c=x(lu(a,r),a.decimals,a.unit);l&&l.textContent!==c&&(l.textContent=c)})})}function lv(e,t,n=!1,r=tt()){const a=su(e,t,{mockData:n,windowHours:r}),i=ri(r),l=kr(a.startTime),c=kr(a.startTime+a.span/2),u=kr(a.endTime),d=a.tracks.flatMap(g=>{if(g.points.length<2){const f=g.points[0];return f?`
          <circle
            cx="${f.x.toFixed(1)}"
            cy="${f.y.toFixed(1)}"
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
        ${d}
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
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${s(c)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(u)}</text>
      </svg>
    `}function cv(e){const t=e.samples[e.samples.length-1]||null,n=ri(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(tv(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(n)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(r=>sv(r,t)).join("")}
            </div>
          </div>
        </div>
        ${lv(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function si(){const e=ai();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(ii())}">
        <div class="oq-overview-trends-grid">
          ${e.map(cv).join("")}
        </div>
      </section>
    `}function uv(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function dv(){const e=tt(),t=Zs();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${yn.map(n=>`
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
          >${s(Xb(n))}</button>
        `})()}
        `).join("")}
      </div>
    `}function pv(){const e="overview-trends-history",t=o.settingsInfoOpen===e;return`
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
    `}function gv(){const e=po(),n=iu().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${pv()}
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
                  ${dv()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&n?si():uv()}
        </div>
      </section>
    `}function mv(){if(!o.root||o.appView!=="diagnosis")return!1;const e=o.root.querySelector(".oq-overview-board");if(!e)return!1;const t=e.querySelector(".oq-overview-trends");return t?(it(t,ii(),si()),cu(e),ci(e),!0):!1}function li(e){if(!e)return null;const t=e.__oqTrendHoverNodes;if(t&&t.chart&&t.hoverLayer&&t.hoverPanel)return t;const n=e.querySelector("[data-oq-trend-hover-layer]"),r={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:n,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:n?n.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return n&&n.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{r.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=r,r}function Ts(e,t,n,r=li(e)){if(!e||!t||!Array.isArray(t.points)||t.points.length===0)return;const a=Math.max(0,Math.min(t.points.length-1,n)),i=t.points[a];if(!i||!r||!r.chart||!r.hoverLayer||!r.hoverPanel||!r.hoverTime||!r.hoverNote||!r.hoverValues)return;const l=String(a);if(!r.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;const c=_b(i.sample.t,t.endTime);r.hoverPanel.hidden=!1,r.hoverLayer.removeAttribute("hidden"),r.hoverTime.textContent=c.value,r.hoverNote.textContent=c.note,r.hoverLine&&(r.hoverLine.setAttribute("x1",i.x.toFixed(1)),r.hoverLine.setAttribute("x2",i.x.toFixed(1)));const u=[];t.series.forEach(d=>{const g=Oo(d,i.sample),f=d.id||d.sampleKey||d.label,h=r.hoverDots[f];if(!Number.isFinite(g)){h&&h.setAttribute("display","none");return}const w=i.values.find(b=>b.seriesId===f);h&&w&&(h.removeAttribute("display"),h.setAttribute("cx",w.x.toFixed(1)),h.setAttribute("cy",w.y.toFixed(1))),u.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(d.tone)}">
          <span>${s(d.label)}</span>
          <strong>${s(x(g,d.decimals,d.unit))}</strong>
        </div>
      `)}),r.hoverValues.innerHTML=u.join(""),e.dataset.oqTrendHoverIndex=l}function hv(e){if(!e)return;const t=li(e);t?.hoverPanel&&(t.hoverPanel.hidden=!0),t?.hoverLayer&&t.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function ci(e=o.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(n=>{const r=n.dataset.renderSignature||"";if(n.__oqTrendBoundSignature===r)return;typeof n.__oqTrendCleanup=="function"&&n.__oqTrendCleanup(),n.__oqTrendHoverNodes=null,n.__oqTrendBoundSignature=r;const a=n.querySelector(".oq-overview-trend-chart");if(!a)return;const i=av(n.dataset.oqTrendCard);if(!i)return;const l=su(i.samples,i.series,{mockData:i.mock});n.__oqTrendModel=l;const c=li(n);let u=0,d=null;const g=()=>{const w=d;d=null,u=0;const b=a.getBoundingClientRect();if(!b.width||!b.height)return;const m=Number(w?.clientX);if(!Number.isFinite(m)){Ts(n,l,l.points.length-1,c);return}const v=Math.min(b.width,Math.max(0,m-b.left))/b.width*l.width,q=iv(l,v);Ts(n,l,q,c)},f=w=>{d=w,u||(u=window.requestAnimationFrame(g))},h=()=>{u&&(window.cancelAnimationFrame(u),u=0),d=null,hv(n)};a.addEventListener("pointermove",f),a.addEventListener("pointerenter",f),a.addEventListener("pointerleave",h),a.addEventListener("focus",f),a.addEventListener("blur",h),a.addEventListener("touchstart",f,{passive:!0}),n.__oqTrendCleanup=()=>{u&&(window.cancelAnimationFrame(u),u=0),d=null,a.removeEventListener("pointermove",f),a.removeEventListener("pointerenter",f),a.removeEventListener("pointerleave",h),a.removeEventListener("focus",f),a.removeEventListener("blur",h),a.removeEventListener("touchstart",f)}})}function fv([e,t]){const n=ec(t);if(!y(t)&&Number.isNaN(n))return"";const r=Xl(t)?We(t):B(t);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(r)}</strong>
      </div>
    `}function bv(e){const t=e.rows.map(fv).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${t}
        </div>
      </section>
    `:""}function vv(e){const t=e.groups.map(bv).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${t}
        </div>
      </section>
    `:""}function yv(e){const t=e.categories.map(vv).filter(Boolean).join("");return t?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${t}
        </div>
      </article>
    `:""}function ui(){const e=pd.map(yv).filter(Boolean),t=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:t}}function uu(e=ui()){return ve(e)}function du(e=ui()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(uu(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}const rr=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],pu=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],wv=new Set(["day","week","month","year"]),Sv=["Zo","Ma","Di","Wo","Do","Vr","Za"];function ye(e){const t=String(e||"").trim();return pu.some(n=>n.id===t)?t:"day"}function Cs(e){const t=ye(e);o.energyHistoryView!==t&&(o.energyHistoryView=t,o.energyHistoryLastFetchAt=0,p(),gu())}function gu(){typeof Mt=="function"&&Mt({force:!0}).then(e=>{e&&p()})}function vo(e){return wv.has(ye(e))}function ar(){const e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function An(){const e=String(o.energyHistoryRaw||""),t={storedDayCount:0,oldestDateKey:null,newestDateKey:null,hourStoredDayCount:0,hourOldestDateKey:null,hourNewestDateKey:null,hourRequestedRetentionDays:0,hourSlotCount:0,hourPartitionAvailable:!1,hourRecordCount:0,hourWriteCount:0,hourStorageKb:0,hourLastWriteTimestampS:0};return e.split(/\r?\n/).forEach(n=>{if(!n.startsWith("@bounds|")&&!n.startsWith("@hour_retention|"))return;const r=n.split("|");n.startsWith("@bounds|")?(t.storedDayCount=Number(r[1])||0,t.oldestDateKey=Number(r[2])||null,t.newestDateKey=Number(r[3])||null,t.hourStoredDayCount=Number(r[4])||0,t.hourOldestDateKey=Number(r[5])||null,t.hourNewestDateKey=Number(r[6])||null):n.startsWith("@hour_retention|")&&(t.hourRequestedRetentionDays=Number(r[1])||0,t.hourSlotCount=Number(r[2])||0,t.hourPartitionAvailable=Number(r[3])===1,t.hourRecordCount=Number(r[4])||0,t.hourWriteCount=Number(r[5])||0,t.hourStorageKb=Number(r[6])||0,t.hourLastWriteTimestampS=Number(r[7])||0)}),t}function di(){const e=String(o.energyHistoryRaw||"");let t=null;return e.split(/\r?\n/).forEach(n=>{const r=Su(n);r&&(t=r.dateKey)}),t}function qv(e=[],t=!0){const n=di(),r=An(),a=(Array.isArray(e)?e:[]).map(i=>Number(i?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(r.newestDateKey))&&a.push(Number(r.newestDateKey)),Number.isFinite(Number(n))&&a.push(Number(n)),t&&ir().forEach(i=>{const l=Number(i?.dateKey);Number.isFinite(l)&&a.push(l)}),a.length?Math.max(...a):ar()}function $e(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function mu(e,t,n){return new Date(e,t-1,n,12,0,0)}function hu(e,t){return new Date(e,t,0).getDate()}function Es(e){return String(e).padStart(2,"0")}function Cr(e){const t=Q(e);return t?`${t.year}-${Es(t.month)}-${Es(t.day)}`:""}function fu(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!t)return null;const n=Number(t[1]),r=Number(t[2]),a=Number(t[3]),i=mu(n,r,a);return i.getFullYear()!==n||i.getMonth()+1!==r||i.getDate()!==a?null:Q($e(i))}function bu(e,t){return Number(e)*100+Number(t)}function jr(e){return bu(e.getFullYear(),e.getMonth()+1)}function no(e){const t=Number(e);if(!Number.isFinite(t)||t<=0)return null;const n=Math.floor(t/100),r=t%100;return n<2020||r<1||r>12?null:{key:t,year:n,month:r,date:new Date(n,r-1,1,12,0,0)}}function kv(e){const t=String(e||"").trim(),n=/^(\d{4})-(\d{2})$/.exec(t);return no(n?bu(Number(n[1]),Number(n[2])):t)}function vu(e,t){const n=no(e);if(!n)return"";const r=new Date(n.year,n.month-1+Number(t||0),1,12,0,0);return String(jr(r))}function Jo(e){const t=new Date(e.getTime()),n=t.getDay(),r=n===0?-6:1-n;return t.setDate(t.getDate()+r),t.setHours(12,0,0,0),t}function ro(e,t){const n=new Date(e.getTime());return n.setDate(n.getDate()+t),n.setHours(12,0,0,0),n}function $s(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function yu(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),n=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-n+3);const r=t.getUTCFullYear(),a=new Date(Date.UTC(r,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((t-a)/(10080*60*1e3)),year:r}}function As(e){return $e(Jo(e))}function Tv(e){const n=fu(e)||Q(e);if(!n)return null;const r=Jo(n.date);return Q($e(r))}function wu(e){const t=Q(e);if(!t)return"Week";const n=Jo(t.date),r=ro(n,6);return`Week ${yu(n).week} (${$s(n)} - ${$s(r)})`}function Q(e){const t=Number(e);if(!Number.isFinite(t)||t<=0)return null;const n=Math.floor(t/1e4),r=Math.floor(t/100)%100,a=t%100;return n<2020||r<1||r>12||a<1||a>31?null:{key:t,year:n,month:r,day:a,date:new Date(n,r-1,a,12,0,0)}}function Qe(e,t="day"){const n=Q(e);return n?t==="weekday"?Sv[n.date.getDay()]||"":t==="month"?n.date.toLocaleDateString("nl-NL",{month:"short"}):t==="year"?String(n.year):n.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function qt(e){const t=M(e);return!Number.isFinite(t)||t<0?null:Math.round(t*1e3)}function Cv(e){const t=Number(e);return Number.isFinite(t)&&t>=0?t:null}function pi(e,t=0){const n={};return rr.forEach((r,a)=>{n[r]=Cv(e[t+a])}),n}function Ev(e){const t=String(e||"").trim();if(!t||t.startsWith("@"))return null;const n=t.split("|");if(n.length<10)return null;const r=Number(n[0]),a=Number(n[1]),i=Number(n[2]),l=Q(a);return!Number.isFinite(r)||!l?null:{sequence:r,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...pi(n,3)}}function Su(e){const t=String(e||"").trim();if(!t.startsWith("@current|"))return null;const n=t.split("|");if(n.length<9)return null;const r=Number(n[1]),a=Q(r);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:r,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...pi(n,2)}:null}function $v(e){const t=String(e||"").trim();if(!t.startsWith("@hour|"))return null;const n=t.split("|");if(n.length<11)return null;const r=Number(n[1]),a=Number(n[2]),i=Number(n[3]),l=Q(a);return!Number.isFinite(r)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:r,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...pi(n,4)}}function Av(){const e=di()||ar(),t=Q(e);if(!t)return null;const n={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:t.year,month:t.month,day:t.day,partial:!0,source:"sensors",electricalInputWh:qt("electricalEnergyDaily"),heatingInputWh:qt("heatingElectricalEnergyDaily"),coolingInputWh:qt("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:qt("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:qt("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:qt("boilerThermalEnergyDaily"),systemHeatOutputWh:qt("systemThermalEnergyDaily")};return rr.some(r=>Number.isFinite(n[r]))?n:null}function Zo(e,t){const n=Number(e?.[t]);return Number.isFinite(n)&&n>=0?n:0}function Xo(){const e=new Map;String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(i=>{const l=Ev(i)||Su(i);if(!l)return;const c=e.get(l.dateKey);(!c||l.sequence>=c.sequence)&&e.set(l.dateKey,l)});const n=Av();n&&e.set(n.dateKey,n);const r=new Set(e.keys()),a=new Map;return ir().forEach(i=>{if(r.has(i.dateKey))return;let l=a.get(i.dateKey);if(!l){const c=Q(i.dateKey);if(!c)return;l=Tt({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:Qe(c.key),sortKey:c.key,source:"hour-summary"}),l.tooltipLabel=`${Qe(i.dateKey)} \xB7 uurdata sinds herstart`,a.set(i.dateKey,l)}Ct(l,i)}),a.forEach((i,l)=>{e.set(l,i)}),[...e.values()].sort((i,l)=>i.dateKey-l.dateKey)}function ir(){const e=new Map;return String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(n=>{const r=$v(n);if(!r)return;const a=`${r.dateKey}:${r.hour}`,i=e.get(a);(!i||r.sequence>=i.sequence)&&e.set(a,r)}),[...e.values()].sort((n,r)=>n.sortKey-r.sortKey)}function Hv(e){return ir().filter(t=>t.dateKey===Number(e))}function Kt(e,t){return e.reduce((n,r)=>n+Zo(r,t),0)}function qu(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((t,n)=>t+Zo(e,n),0)}function Mv(e){return Zo(e,"electricalInputWh")+qu(e)}function fn(e,t){const n=Number(e),r=Number(t);return!Number.isFinite(n)||!Number.isFinite(r)||r<=0?"\u2014":(n/r).toFixed(2)}function Ee(e,t=1){const n=Number(e);return Number.isFinite(n)?Math.abs(n)>=999500?`${(n/1e6).toFixed(2)} MWh`:Math.abs(n)<1e3?`${Math.round(n)} Wh`:`${(n/1e3).toFixed(t)} kWh`:"\u2014"}function Tt({dateKey:e,year:t,month:n,day:r,hour:a=null,label:i,tooltipLabel:l="",sortKey:c,source:u="bucket"}){return{sequence:0,dateKey:e,year:t,month:n,day:r,hour:a,label:i,tooltipLabel:l,sortKey:c??e,partial:!1,source:u,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function Ct(e,t){return rr.forEach(n=>{e[n]+=Zo(t,n)}),e.partial=e.partial||!!t?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(t?.sequence||0)),e}function Pv(e){const t=new Map;return e.forEach(n=>{t.set(n.dateKey,n)}),t}function ku(e,t){const n=ye(e);if(n==="day"){const r=fu(t)||Q(t);return r?String(r.key):""}if(n==="week"){const r=Tv(t);return r?String(r.key):""}if(n==="month"){const r=kv(t);return r?String(r.key):""}if(n==="year"){const r=Number(t);return Number.isInteger(r)&&r>=2020&&r<=2200?String(r):""}return""}function sr(e,t){const n=ye(t),r=Q(qv(e,!0)),a=An(),i=ir(),l=[...e.map(w=>w.dateKey),...i.map(w=>w.dateKey)].filter(w=>Number.isFinite(Number(w)));Number.isFinite(Number(a.oldestDateKey))&&l.push(Number(a.oldestDateKey)),Number.isFinite(Number(a.newestDateKey))&&l.push(Number(a.newestDateKey));const c=l.length?Math.min(...l.map(Number)):r?.key,d=(c?Q(c):r)?.date||r?.date||new Date,g=r?.date||new Date;let f=r?.key||ar(),h=f;return n==="week"?(f=As(d),h=As(g)):n==="month"?(f=jr(d),h=jr(g)):n==="year"?(f=d.getFullYear(),h=g.getFullYear()):(f=$e(d),h=$e(g)),Number(f)>Number(h)&&(f=h),{min:String(f),max:String(h)}}function Tu(e,t){const n=Number(e);return Number.isFinite(n)?n<Number(t.min)?String(t.min):n>Number(t.max)?String(t.max):String(e):String(t.max)}function Nv(e,t,n=sr(e,t)){const r=ye(t),a=o.energyHistoryPeriodSelection?.[r],i=ku(r,a);return Tu(i||n.max,n)}function Rv(e,t){const n=ye(e),r=[];let a=0;if(n==="week"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<6e3;){const l=Q(i);r.push({value:i,label:wu(i),group:l?String(yu(l.date).year):""}),i=l?String($e(ro(l.date,-7))):"",a+=1}return r}if(n==="month"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<1200;){const l=no(i);if(!l)break;r.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=vu(i,-1),a+=1}return r}if(n==="year")for(let i=Number(t.max);i>=Number(t.min);i-=1)r.push({value:String(i),label:String(i)});return r}function lr(e,t){const n=ye(t);if(!vo(n))return{view:n,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};const r=sr(e,n),a=Nv(e,n,r);return{view:n,selectedValue:a,minValue:r.min,maxValue:r.max,canPrevious:Number(a)>Number(r.min),canNext:Number(a)<Number(r.max),isNow:Number(a)===Number(r.max),options:Rv(n,r)}}function Lv(e,t){const n=ye(t);if(!vo(n))return{from:"",to:"",hours:"0"};const r=lr(e,n);if(n==="day")return{from:r.selectedValue,to:r.selectedValue,hours:"1"};if(n==="week"){const a=Q(r.selectedValue);if(!a)return{from:"",to:"",hours:"0"};const i=Jo(a.date),l=ro(i,6);return{from:String($e(i)),to:String($e(l)),hours:"0"}}if(n==="month"){const a=no(r.selectedValue);return a?{from:String(a.year*1e4+a.month*100+1),to:String(a.year*1e4+a.month*100+hu(a.year,a.month)),hours:"0"}:{from:"",to:"",hours:"0"}}if(n==="year"){const a=Number(r.selectedValue);return Number.isInteger(a)?{from:`${a}0101`,to:`${a}1231`,hours:"0"}:{from:"",to:"",hours:"0"}}return{from:"",to:"",hours:"0"}}function cn(){if(!String(o.energyHistoryRaw||"").trim())return"?meta=1";const e=Xo(),t=Lv(e,o.energyHistoryView||"day"),n=new URLSearchParams;t.from&&n.set("from",t.from),t.to&&n.set("to",t.to),n.set("hours",t.hours);const r=n.toString();return r?`?${r}`:""}function Hn(e,t){const n=ye(e);if(!vo(n))return;const r=Xo(),a=sr(r,n),i=ku(n,t),l=Tu(i||a.max,a);o.energyHistoryPeriodSelection={...o.energyHistoryPeriodSelection,[n]:l},o.energyHistoryLastFetchAt=0,p(),gu()}function Hs(e,t){const n=ye(e);if(!vo(n))return;const r=Xo(),a=lr(r,n),i=Number(t)<0?-1:1;let l=a.selectedValue;if(n==="day"){const c=Q(a.selectedValue);l=c?String($e(ro(c.date,i))):l}else if(n==="week"){const c=Q(a.selectedValue);l=c?String($e(ro(c.date,i*7))):l}else n==="month"?l=vu(a.selectedValue,i):n==="year"&&(l=String(Number(a.selectedValue)+i));Hn(n,l)}function Ms(e){const t=ye(e);if(!vo(t))return;const n=Xo(),r=sr(n,t);Hn(t,r.max)}function Ov(e,t,n=lr(e,t)){const r=ye(t),a=Pv(e);if(!e.length&&r==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(r==="day"){const c=Q(n.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const u=Hv(c.key);if(u.length){const w=new Map(u.map(m=>[m.hour,m])),b=[];for(let m=0;m<24;m+=1){const S=String(m),v=`${c.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(m).padStart(2,"0")}:00 - ${String((m+1)%24).padStart(2,"0")}:00`,q=Tt({dateKey:c.key,year:c.year,month:c.month,day:c.day,hour:m,label:S,tooltipLabel:v,sortKey:m,source:"hour"}),E=w.get(m);E&&Ct(q,E),b.push(q)}return{buckets:b,title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}const d=a.get(c.key),g=di()||ar(),f=c.key===g?"Vandaag":Qe(c.key),h=Tt({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:f,sortKey:c.key,source:"day"});return d&&Ct(h,d),{buckets:[h],title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(r==="week"){const c=Q(n.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const u=Jo(c.date),d=[];for(let g=0;g<7;g+=1){const f=ro(u,g),h=$e(f),w=Q(h),b=Tt({dateKey:h,year:w.year,month:w.month,day:w.day,label:Qe(h,"weekday"),sortKey:h}),m=a.get(h);m&&Ct(b,m),d.push(b)}return{buckets:d,title:"Week",detail:wu(n.selectedValue)}}if(r==="month"){const c=no(n.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const u=hu(c.year,c.month),d=[];for(let g=1;g<=u;g+=1){const f=mu(c.year,c.month,g),h=$e(f),w=Tt({dateKey:h,year:c.year,month:c.month,day:g,label:String(g),sortKey:h}),b=a.get(h);b&&Ct(w,b),d.push(w)}return{buckets:d,title:"Maand",detail:c.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(r==="year"){const c=Number(n.selectedValue);if(!Number.isInteger(c))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const u=[];for(let d=1;d<=12;d+=1){const g=c*1e4+d*100+1,f=Tt({dateKey:g,year:c,month:d,day:1,label:Qe(g,"month"),sortKey:d,source:"month"});e.filter(h=>h.year===c&&h.month===d).forEach(h=>Ct(f,h)),u.push(f)}return{buckets:u,title:"Jaar",detail:String(c)}}const i=new Map;e.forEach(c=>{i.has(c.year)||i.set(c.year,Tt({dateKey:c.year*1e4+101,year:c.year,month:1,day:1,label:String(c.year),sortKey:c.year,source:"year"})),Ct(i.get(c.year),c)});const l=[...i.values()].sort((c,u)=>c.sortKey-u.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function Dv(e){const t=Kt(e,"heatpumpHeatOutputWh"),n=Kt(e,"heatpumpCoolingOutputWh"),r=Kt(e,"boilerHeatOutputWh");return{electricalInputWh:Kt(e,"electricalInputWh"),heatingInputWh:Kt(e,"heatingInputWh"),coolingInputWh:Kt(e,"coolingInputWh"),heatOutputWh:t,coolingOutputWh:n,boilerOutputWh:r,outputWh:t+n+r}}function Fv(e){const t=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),n=Number(e.boilerOutputWh||0),r=t+n;return!Number.isFinite(r)||r<=0?Number.NaN:t/r*100}function un(e,t,n=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${n?`<p>${s(n)}</p>`:""}
      </div>
    `}function Er(e,t,n){const r=[];n.forEach(i=>{const l=String(i.group||"");let c=r[r.length-1];(!c||c.label!==l)&&(c={label:l,options:[]},r.push(c)),c.options.push(i)});const a=r.some(i=>i.label)?r.map(i=>i.label?`
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
            value="${s(Cr(e.selectedValue))}"
            min="${s(Cr(e.minValue))}"
            max="${s(Cr(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?Er(e,"Week",e.options):e.view==="month"?Er(e,"Maand",e.options):e.view==="year"?Er(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function xv(e){return vo(e.view)?`
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
      `}function Iv(){const e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function Wv(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${pu.map(t=>{const n=t.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${n?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(t.id)}"
              aria-selected="${n?"true":"false"}"
            >${s(t.label)}</button>
          `}).join("")}
      </div>
    `}function Bv(e){const t=Number(e.electricalInputWh||0),n=Number(e.heatOutputWh||0),r=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,t+n+r+a),c=d=>`${Math.max(0,Number(d||0)/l*100).toFixed(2)}%`,u=Fv(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${c(t)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${c(n)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${c(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${c(a)}"></span>
          <strong>${Number.isFinite(u)?`${Math.round(u)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s(Ee(n,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s(Ee(t,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s(Ee(r,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s(Ee(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function Vv(e){const t=Math.max(1,Number(e||0)/1e3),n=Math.pow(10,Math.floor(Math.log10(t))),r=t/n;return(r<=1.5?1.5:r<=3?3:r<=6?6:10)*n*1e3}function _v(e){const t=Number(e);return Number.isFinite(t)?t>=999500?`${Number((t/1e6).toFixed(1))}`:`${Number((t/1e3).toFixed(1))}`:""}function jv(e){return e>=999500?"MWh":"kWh"}function Kv(e){const d=Math.max(1e3,...e.map(Mv)),g=Vv(d),f=e.length?1218/e.length:1218,h=Math.max(6,Math.min(38,f*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:g,barSlot:f,barWidth:h,yOf:b=>26+(1-Math.min(1,Math.max(0,Number(b||0)/g)))*196}}function Uv(e){const t=fn(e.heatpumpHeatOutputWh,e.heatingInputWh),n=fn(e.heatpumpCoolingOutputWh,e.coolingInputWh),r=fn(qu(e),e.electricalInputWh);return[e.tooltipLabel||e.label||Qe(e.dateKey),`Elektrisch: ${Ee(e.electricalInputWh,1)}`,`Warmtepomp warmte: ${Ee(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${Ee(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel: ${Ee(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${t}`,`EER koelen: ${n}`,`Output / elektrisch: ${r}`].join(`
`)}function zv(e,t=""){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;const n=Kv(e),r=jv(n.axisMax),a=[0,.25,.5,.75,1].map(l=>n.axisMax*l),i=e.map((l,c)=>{const u=n.left+n.barSlot*c+n.barSlot/2,d=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}];let g=n.height-n.bottom;const f=d.map(m=>{const S=Zo(l,m.key);if(S<=0)return"";const v=S/n.axisMax*n.plotHeight;return g-=v,`
          <rect
            x="${(u-n.barWidth/2).toFixed(1)}"
            y="${g.toFixed(1)}"
            width="${n.barWidth.toFixed(1)}"
            height="${Math.max(1.4,v).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${m.className}"
          >
            <title>${s(`${l.label} \xB7 ${m.label}: ${Ee(S,1)}`)}</title>
          </rect>
        `}).join(""),w=e.length<=12||c===0||c===e.length-1||c%3===0?`<text x="${u.toFixed(1)}" y="${n.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(l.label||Qe(l.dateKey))}</text>`:"",b=Uv(l);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(b)}" tabindex="0">
          <title>${s(b)}</title>
          <rect
            x="${(u-n.barWidth/2-4).toFixed(1)}"
            y="${n.top.toFixed(1)}"
            width="${(n.barWidth+8).toFixed(1)}"
            height="${n.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${f}
        </g>
        ${w}
      `}).join("");return`
      <svg class="oq-energy-history-chart oq-energy-history-chart--${s(ye(t))}" viewBox="0 0 ${n.width} ${n.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${n.width}" height="${n.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${n.left}" y="18" class="oq-energy-history-axis-unit">${s(r)}</text>
        ${a.map(l=>{const c=n.yOf(l);return`
            <line x1="${n.left}" y1="${c.toFixed(1)}" x2="${n.width-n.right}" y2="${c.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${n.left-10}" y="${c.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(_v(l))}</text>
          `}).join("")}
        ${i}
      </svg>
    `}function Gv(e=null){const t=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[t,"Ketel"]].map(([r,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(r)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function gi(){const e=Xo(),t=ye(o.energyHistoryView),n=lr(e,t),r=Ov(e,t,n),a=Dv(r.buckets);return{records:e,buckets:r.buckets,viewModel:r,periodControl:n,summary:a,activeView:t}}function Cu(e=gi()){return ve({energyHistorySignature:o.energyHistorySignature||"",energyHistoryError:o.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,currentValues:rr.map(t=>e.buckets[e.buckets.length-1]?.[t]??null)})}function Eu(e=gi()){const t=e.summary,n=e.buckets[0]?.dateKey?Qe(e.buckets[0].dateKey):"\u2014",r=e.buckets[e.buckets.length-1]?.dateKey?Qe(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(Cu(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${Wv(e.activeView)}
          ${xv(e.periodControl)}
        </div>
        ${o.energyHistoryError?`<p class="oq-energy-history-error">${s(o.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${un("Gemiddelde COP",fn(t.heatOutputWh,t.heatingInputWh),`${s(n)} - ${s(r)}`)}
          ${un("Elektrisch",Ee(t.electricalInputWh,1),"verbruikt")}
          ${un("Warmtepomp",Ee(t.heatOutputWh+t.coolingOutputWh,1),"warmte en koeling")}
          ${un("Cv-ketel",Ee(t.boilerOutputWh,1),"thermisch")}
        </div>
        ${Bv(t)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${zv(e.buckets,e.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${Gv(t)}
      </section>
    `}function Ns(e){if(o.appView!=="results"||!o.root)return;const t=e.target.closest?.("[data-oq-energy-history-tip]"),n=t?.closest?.(".oq-energy-history-chart-wrap")||o.root.querySelector(".oq-energy-history-chart-wrap"),r=n?.querySelector(".oq-energy-history-tooltip");if(!t||!n||!r){r&&r.classList.remove("is-visible");return}const a=String(t.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){r.classList.remove("is-visible");return}r.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(d=>`<span>${s(d)}</span>`).join("")}
    `;const i=n.getBoundingClientRect();r.classList.add("is-visible");const l=r.getBoundingClientRect(),c=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),u=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));r.style.transform=`translate(${c.toFixed(0)}px, ${u.toFixed(0)}px)`}function Qv(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${du()}
        </div>
      </section>
    `}function Yv(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${Eu()}
        </div>
      </section>
    `}function Jv(){if(!o.root||o.appView!=="energy")return!1;const e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-overview-energy"):null;if(!e||!t)return!1;const n=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==n&&(e.className=n);const r=ui();return it(t,uu(r),du(r))}function Zv(){if(!o.root||o.appView!=="results")return!1;const e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-energy-history"):null;if(!e||!t)return!1;const n=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==n&&(e.className=n);const r=gi(),a=Iv();return(a?!1:it(t,Cu(r),Eu(r)))||a}function mi(e,t,n){const r=Hu(B(t.mode,"Unknown")),a=A(t.defrost),i=Do(B(t.failures,"None")),l=Pc(i),c=r==="Verwarmen"||r==="Koelen"||a;return{mode:r,defrostActive:a,failures:i,warningFailures:l,running:c,thermalKey:r==="Koelen"?t.cooling:t.heat,schematic:sy(e,t,n,r,a,l,c)}}function $u(e,t=null){return`<h3>${s(e)}</h3>${t?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(t.layout)}">${gy(t.layout==="equal"?"minus":"plus")}<span>${s(t.label)}</span></button>`:""}`}function Kr(e,t,n,r){return`<div class="oq-overview-hp-status">${jc(e,t,n,r)}</div>`}function Xv(){return B("controlModeLabel","").toLowerCase().includes("standby")}function ey(e,t){return t?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function Au(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(t=>`${t.title} ${ey(Hu(B(t.keys.mode,"Unknown")),A(t.keys.defrost))}`).join(", "))}</p>`}function ty(e){const t=o.entities[e];if(!t)return"Positie: \xE2\u20AC\u201D";const n=M(e);return Number.isNaN(n)?`Positie: ${B(e)}`:`Positie: ${x(n,0,t.uom||"")}`}function oy(e){return y(e)?`Positie: ${A(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \xE2\u20AC\u201D"}function Hu(e){const t=String(e||"").trim();return!t||t==="Unknown"?"Onbekend":t==="Standby"?"Stand-by":t==="Heating"?"Verwarmen":t==="Cooling"?"Koelen":t}function Do(e){const t=String(e||"").trim();return!t||t==="None"?"Geen actieve storingen":t}function Ur(e,t,n,r=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(t)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(n)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(n)}" />
        ${r?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(n)}" />`:""}
      </g>
    `}function ny(e,t,n){return e==="temperature"?`
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
    `}function Fo({bind:e,modifier:t,x:n,y:r,width:a,kicker:i,detail:l,detailBind:c="",icon:u="heater",direction:d="down"}){const f=n+26,h=r+22,w=c?` data-oq-bind="${s(c)}"`:"";let b="";if(d==="up"){const m=n+Math.round(a*.52);b=`M${m-6} ${r} L${m} ${r-8} L${m+6} ${r} Z`}else if(d==="left"){const m=r+Math.round(22);b=`M${n} ${m-6} L${n-8} ${m} L${n} ${m+6} Z`}else if(d==="right"){const m=r+Math.round(22);b=`M${n+a} ${m-6} L${n+a+8} ${m} L${n+a} ${m+6} Z`}else{const m=n+Math.round(a*.52);b=`M${m-6} ${r+44} L${m} ${r+44+8} L${m+6} ${r+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(t)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${n}" y="${r}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${f}" cy="${h}" r="11.5" />
        ${ny(u,f,h)}
        <text class="oq-hp-tech-tooltip-kicker" x="${n+48}" y="${r+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${n+48}" y="${r+32}"${w}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${b}" />
      </g>
    `}function zr({bind:e,x:t,y:n,width:r,value:a,label:i,ariaLabel:l="",align:c="start"}){const u=l||`${i} temperatuur ${a}`,d=c==="end",g=c==="center",f=g?"middle":d?"end":"start",h=g?t+r/2:d?t+r-2:t+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(u)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${t}" y="${n}" width="${r}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${h}" y="${n+13}" text-anchor="${f}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function ry({tooltip:e,...t}){return`${zr(t)}${Fo({bind:t.bind,...e})}`}function ay({bind:e,ariaLabel:t,x:n,y:r,width:a,height:i,rx:l,tooltip:c}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(t)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${n}" y="${r}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${Fo({bind:e,...c})}
    `}function $r({bind:e,className:t,active:n,ariaLabel:r,attrs:a="",activeClass:i="is-active",content:l,tooltip:c}){return`
      <g class="${[t,n&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${n?"0":"-1"}" aria-label="${s(r)}" ${a}>
        ${l}
      </g>
      ${Fo({bind:e,...c})}
    `}function iy({label:e,value:t,bind:n,ariaLabel:r="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${r?` aria-label="${s(r)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(t)}</strong>
      </div>
    `}function ze(e,t,n=""){const r=M(e);return Number.isNaN(r)?B(e):x(r,t,$o(e,n))}function sy(e,t,n,r,a,i,l){const c=M(t.freq),u=Number.isNaN(c)?"\u2014":String(Math.round(c)),d=M(t.power),g=M(t.heat),f=M(t.cooling),h=M(t.flow),w=r==="Koelen"?f:g,b=l||!Number.isNaN(c)&&c>0||!Number.isNaN(d)&&d>80||!Number.isNaN(g)&&g>150,m=!Number.isNaN(h)&&h>0,S=_c(r,b),v=i==="Geen actieve storingen"?"Geen storingen":i,q=v!=="Geen storingen",E=a?"Actief":"Uit",k=ze(t.waterOut,1,"\xB0C"),H=ze(t.waterIn,1,"\xB0C"),O=Number.isNaN(h)?B(t.flow):x(h,0,$o(t.flow,"L/h")),F=ze(t.evaporatorCoilTemp,1,"\xB0C"),G=ze(t.innerCoilTemp,1,"\xB0C"),T=ze(t.outsideTemp,1,"\xB0C"),$=ze(t.condenserPressure,1,"bar"),N=ze(t.dischargeTemp,1,"\xB0C"),W=ze(t.evaporatorPressure,1,"bar"),K=ze(t.returnTemp,1,"\xB0C"),R=A(t.bottomPlate),V=A(t.crankcase),P=ty(t.eev),D=oy(t.fourWay),_=x(d,0,"W"),Y=x(w,0,"W"),ge=r==="Koelen"?!Number.isNaN(d)&&d>=5&&!Number.isNaN(f)?f/d:Number.NaN:M(t.cop),ue=x(ge,1),J=r==="Koelen"?"COP (EER)":"COP",ot=r==="Koelen"?"Koelafgifte":"Warmteafgifte",Te=r==="Koelen"?"afgegeven koeling":"afgegeven warmte",yo=M(t.fanSpeed),me=!Number.isNaN(yo)&&yo>0,dr=Number.isNaN(yo)?"\u2014":`${Math.round(yo)} rpm`,he=a||r==="Koelen",pr=he?"Verdamper":"Condensor",wo=he?"Condensor":"Verdamper",en=he?"return":"supply",yt=he?"supply":"return",Dt=360,Ke=384,So=214,Ft="M278 220 C278 228 273 234 266 234",Oe="M278 220 C278 228 283 234 290 234",vi="M290 234 C284 234 279 240 278 248",Ce="M266 234 C272 234 277 240 278 248",nt=he?`M290 234 H${Dt} Q372 ${So} ${Ke} 234 H436 V134 H480`:"M266 234 H180 V134 H164",qo=he?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${Ke} Q372 ${So} ${Dt} 234 H290`,xt="M296 150 H278 V220",tn="M278 248 V268 H372 V150 H356",It=he?"M480 294 H337":"M164 294 H315",De=he?"M315 294 H164":"M337 294 H480",yi=["oq-hp-schematic-board",`oq-hp-schematic-board--${n}`,b?"is-running":"",m?"is-water-flowing":"",me?"is-fan-running":"",he?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:yi,statusText:S,failureText:v,warningActive:q,waterFlowActive:m,defrostActive:a,defrostText:E,mode:r,reverseCycle:he,compressorFreqText:`${u} Hz`,leftExchangerTitle:pr,rightExchangerTitle:wo,supplyLineTone:en,returnLineTone:yt,waterOutText:k,waterInText:H,flowText:O,evaporatorCoilTempText:F,innerCoilTempText:G,outsideTempText:T,dischargePressureText:$,dischargeTempText:N,suctionPressureText:W,suctionTempText:K,bottomPlateActive:R,crankcaseActive:V,eevPositionText:P,fourWayPositionText:D,powerText:_,heatText:Y,heatLabel:ot,heatDescription:Te,efficiencyText:ue,efficiencyLabel:J,fanRpmText:dr,hotgasValveHeat:Ft,hotgasValveCool:Oe,suctionValveHeat:vi,suctionValveCool:Ce,leftValveTone:he?"suction":"hotgas",rightValveTone:he?"hotgas":"suction",pipes:{supply:{tone:en,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:yt,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:xt,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:nt,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:It,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:De,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:qo,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:tn,animated:!0,flowVariant:"default"}}}}function ly(e){const t=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),n=`${t}-cond-water-heat`,r=`${t}-cond-water-cool`,a=`${t}-cond-ref`,i=e.reverseCycle?r:n,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],c=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],u=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
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

            ${Object.entries(e.pipes).map(([d,g])=>Ur(d.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`),g.tone,g.d,g.animated,g.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${c.map(ry).join("")}
            ${$r({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${$r({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${$r({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
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

            ${u.map(ay).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(iy).join("")}
          </div>
        </div>
      </div>
    `}function Mu(e,t,n,r="normal",a=null){if(!y(t.power))return"";const i=mi(e,t,n),{mode:l,defrostActive:c,running:u,thermalKey:d}=i,g=i.schematic;return o.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(n)} oq-overview-hp--${s(r)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${$u(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${Kr(l,u,g.warningActive,g.failureText)}
            </div>
          </div>
          ${ly(g)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(n)} oq-overview-hp--${s(r)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${Kr(l,u,g.warningActive,g.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${nr([{key:t.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:d,label:g.heatLabel,tone:"orange",note:g.heatDescription},{label:g.efficiencyLabel,value:g.efficiencyText,tone:"green",note:"actueel"}])}
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
            <strong>${c?"Actief":"Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${Br("Water in",t.waterIn)}
          ${Br("Water out",t.waterOut)}
        </div>
      </section>
    `}function hi(){return A("boilerCvAssistEnabled")&&y("boilerHeatPower")}function cy(){return(typeof Z=="function"?Z():"")!=="single"&&y("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function uy(){return(typeof Z=="function"?Z():"")!=="single"&&y("hp2Flow")?"hp2Flow":"hp1Flow"}function cr(){const e=M("boilerHeatPower"),t=M(uy()),n=y("boilerActive")?A("boilerActive"):!Number.isNaN(e)&&e>20,r=!Number.isNaN(t)&&t>0,a=x(e,0,"W"),i=x(t,0,"L/h"),l=x(M(cy()),1,"\xB0C"),c=x(M("supplyTemp"),1,"\xB0C"),u=n?"Aan":"Uit",d=n?"Levert ondersteuning":"Geen ondersteuning",g=["oq-boiler-card",n?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:n,flowActive:r,heatText:a,flowText:i,returnTempText:l,supplyTempText:c,statusText:u,statusCopy:d,boardClass:g,flowPathClass:r?"is-flowing":"is-static"}}function fi(e=cr()){return ve({version:"boiler-visual-mode-v1",visualMode:o.hpVisualMode,boardClass:"oq-boiler-card"})}function dy(e,t=cr()){const n=e.querySelector(".oq-boiler-card");n&&(n.className=["oq-boiler-card",t.active?"is-running":"is-idle",t.flowActive?"is-flowing":"is-static"].join(" "));const r=e.querySelector(".oq-overview-chip");r&&(r.className=`oq-overview-chip oq-overview-chip--${t.active?"active":"neutral"}`,r.textContent!==t.statusText&&(r.textContent=t.statusText));const a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",t.active),a.classList.toggle("is-idle",!t.active));const i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==t.statusCopy&&(i.textContent=t.statusCopy);const l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==t.heatText&&(l.textContent=t.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(g=>{g.textContent!==t.flowText&&(g.textContent=t.flowText)});const c=e.querySelector("[data-oq-boiler-status-value]");c&&c.textContent!==t.statusCopy&&(c.textContent=t.statusCopy);const u=e.querySelector('[data-oq-bind="boiler-return-value"]');u&&u.textContent!==t.returnTempText&&(u.textContent=t.returnTempText);const d=e.querySelector('[data-oq-bind="boiler-supply-value"]');d&&d.textContent!==t.supplyTempText&&(d.textContent=t.supplyTempText)}function py(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(fi(e))}">
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
    `}function Gr(){if(!hi())return"";const e=cr();return o.hpVisualMode!=="schematic"?py(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(fi(e))}">
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
                ${Ur("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${Ur("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${zr({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${Fo({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${zr({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
                ${Fo({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"right"})}
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
    `}function Pu(){const e=typeof Z=="function"?Z():"";return sd.filter(t=>e==="single"&&t.title==="HP2"?!1:y(t.keys.power))}function bi(e){return!Array.isArray(e)||e.length<2||o.hpVisualMode!=="schematic"?"equal":o.hpLayoutMode==="focus-hp1"||o.hpLayoutMode==="focus-hp2"?o.hpLayoutMode:"equal"}function Mn(e,t,n){return!Array.isArray(t)||t.length<2?"normal":n==="focus-hp1"?e===0?"focus":"muted":n==="focus-hp2"?e===1?"focus":"muted":"normal"}function Qr(e,t,n){return!Array.isArray(t)||t.length<2||o.hpVisualMode!=="schematic"?null:Mn(e,t,n)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function Nu(e){return!Array.isArray(e)||e.length!==1?bi(e):hi()?"equal":"single"}function gy(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function Ru(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${Au(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function my(e,t){if(!e)return!1;const n=e.querySelector(".oq-overview-hp-tools-copy"),r=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!n||!r||!a?(ct(e,Ru(t)),!0):(ct(n,`
      <h3>Warmtepompen</h3>
      ${Au(t)}
    `),r.classList.toggle("is-active",o.hpVisualMode==="schematic"),a.classList.toggle("is-active",o.hpVisualMode==="compact"),!0)}function hy(){const e=Gc(),t=Pu(),n=bi(t),r=Nu(t),a=Ru(t);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${Bc()}
          ${Zb(e)}
          <div class="oq-overview-main">
            ${Zc(Vr())}
            ${ru()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(r)}">
            ${t.map((i,l)=>Mu(i.title,i.keys,i.accent,Mn(l,t,n),Qr(l,t,n))).join("")}
            ${Gr()}
          </div>
        </div>
      </section>
    `}function fy(e,t,n){if(!e)return;const r=e.querySelector(t);r&&r.textContent!==n&&(r.textContent=n)}function ct(e,t){e&&e.innerHTML!==t&&(e.innerHTML=t)}function it(e,t,n){return!e||e.dataset.renderSignature===t?!1:(e.outerHTML=n,!0)}function Yt(e,t,n){e&&e.getAttribute(t)!==n&&e.setAttribute(t,n)}function by(e,t){t.forEach(([n,r])=>{fy(e,`[data-oq-bind="${n}"]`,r)})}function vy(e,t){t.forEach(([n,r])=>{Yt(e.querySelector(`[data-oq-bind="${n}"]`),"aria-label",r)})}function yy(e,t,n,r=""){const a=e.querySelector(`[data-oq-bind="${t}"]`);a&&(a.classList.toggle("is-active",n),Yt(a,"tabindex",n?"0":"-1"),!n&&r&&ur(e.querySelector(`[data-oq-bind="${r}"]`)))}function wy(e,t,n){Yt(e.querySelector(`[data-oq-bind="${t}"]`),"fill",n)}function xo(e,t,n,r){if(!e)return;const a=`${t}${n}`;r.map(l=>`${t}${l}`).find(l=>e.classList.contains(l))!==a&&(r.forEach(l=>e.classList.remove(`${t}${l}`)),e.classList.add(a))}function Sy(e,t,n,r){const a=e.querySelector(`[data-oq-pipe="${t}"]`);a&&(xo(a,"oq-hp-tech-pipe--",n,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==r&&i.setAttribute("d",r)}))}function ur(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function Rs(e,t,n){!e||!t||!n||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(r=>{r!==n&&ur(r)}),t.appendChild(n),n.classList.add("is-active"),n.setAttribute("aria-hidden","false"))}function qy(e,t,n,r){if(!e||!t||!n||!r||n.dataset.oqTooltipWired==="true")return;n.dataset.oqTooltipWired="true";const a=()=>{n.matches(":hover")||document.activeElement===n||ur(r)};n.addEventListener("mouseenter",()=>Rs(e,t,r)),n.addEventListener("mouseleave",a),n.addEventListener("focus",()=>Rs(e,t,r)),n.addEventListener("blur",a)}function Lu(e){if(!e)return;const t=e.querySelector(".oq-hp-tech-svg");if(!t)return;let n=t.querySelector(".oq-hp-tech-tooltip-layer");n||(n=document.createElementNS("http://www.w3.org/2000/svg","g"),n.setAttribute("class","oq-hp-tech-tooltip-layer"),t.appendChild(n)),Array.from(t.querySelectorAll(".oq-hp-tech-tooltip")).forEach(r=>{n.appendChild(r)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(r=>{const a=r.getAttribute("data-oq-tooltip-target");if(!a)return;const i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);qy(e,n,r,i)})}function ky(e=o.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(t=>{Lu(t)})}function Ty(e,t,n,r,a=null,i=null){if(!e)return;const l=i||mi(t,n,r),{mode:c,running:u}=l,d=l.schematic,g=e.querySelector(".oq-overview-hp-head-title");g&&ct(g,$u(t,a));const f=e.querySelector(".oq-overview-hp-head-side");if(f){let S=f.querySelector(".oq-overview-hp-status");S||(ct(f,Kr(c,u,d.warningActive,d.failureText)),S=f.querySelector(".oq-overview-hp-status")),Fb(S,c,u,d.warningActive,d.failureText)}const h=e.querySelector("[data-oq-hp-board]");if(!h)return;h.className!==d.boardClass&&(h.className=d.boardClass),by(h,[["status",d.statusText],["left-exchanger-title",d.leftExchangerTitle],["right-exchanger-title",d.rightExchangerTitle],["compressor-freq",d.compressorFreqText],["flow-value",d.flowText],["inner-coil-temp-value",d.innerCoilTempText],["evaporator-temp-value",d.evaporatorCoilTempText],["outside-temp-value",d.outsideTempText],["discharge-pressure-value",d.dischargePressureText],["discharge-temp-value",d.dischargeTempText],["suction-pressure-value",d.suctionPressureText],["suction-temp-value",d.suctionTempText],["supply-value",d.waterOutText],["return-value",d.waterInText],["footer-mode",d.mode],["footer-power",d.powerText],["footer-heat",d.heatText],["footer-efficiency-label",d.efficiencyLabel],["footer-efficiency",d.efficiencyText],["fan-speed-value",d.fanRpmText],["fourway-detail",d.fourWayPositionText],["eev-detail",d.eevPositionText]]);const w=h.querySelector('[data-oq-bind="footer-heat-label"]');if(w){Yt(w,"aria-label",d.heatLabel);const S=d.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";w.innerHTML!==S&&(w.innerHTML=S)}[["bottom-heater",d.bottomPlateActive],["crankcase-heater",d.crankcaseActive]].forEach(([S,v])=>{yy(h,S,v,`${S}-tooltip`)});const b=h.querySelector('[data-oq-bind="defrost-badge"]');b&&(Yt(b,"tabindex",d.defrostActive?"0":"-1"),Yt(b,"aria-label",d.defrostActive?"Defrost actief":"Defrost uit"),d.defrostActive||ur(h.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",d.supplyLineTone],["return-tooltip",d.returnLineTone]].forEach(([S,v])=>{xo(h.querySelector(`[data-oq-bind="${S}"]`),"oq-hp-tech-tooltip--",v,["warm","supply","return"])}),vy(h,[["supply-reading",`Aanvoer temperatuur ${d.waterOutText}`],["flow-reading",`Flow ${d.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${d.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${d.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${d.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${d.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${d.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${d.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${d.dischargeTempText}`],["return-reading",`Retour temperatuur ${d.waterInText}`],["suction-pressure-reading",`Zuigdruk ${d.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${d.suctionTempText}`],["fourway-trigger",`4-wegklep, ${d.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${d.eevPositionText}`]]),xo(h.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",d.returnLineTone,["supply","return"]);const m=String(d.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");wy(h,"cond-water",`url(#${d.reverseCycle?`${m}-cond-water-cool`:`${m}-cond-water-heat`})`),Object.entries(d.pipes).forEach(([S,v])=>{Sy(h,S.replace(/[A-Z]/g,q=>`-${q.toLowerCase()}`),v.tone,v.d)}),Lu(h),pa()}function Cy(){if(!o.root||o.appView!=="overview")return!1;const e=o.root.querySelector(".oq-overview-board");if(!e)return!1;const t=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==t&&(e.className=t);const n=Gc(),r=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),c=e.querySelector(".oq-overview-trends"),u=e.querySelector(".oq-overview-hp-tools"),d=e.querySelector(".oq-overview-hp-grid"),g=e.querySelector("[data-oq-boiler-panel]"),f=Pu();if(r){const q=tr();it(r,ve(q),Bc())}if(a){const q=a.querySelector(".oq-overview-top");q&&ct(q,nr(tu()));const E=a.querySelector(".oq-overview-statuspanel");if(E){const H=B("controlModeLabel");it(E,ve(Xc(n,H)),eu(n,H))}const k=a.querySelector(".oq-overview-summary-side");if(k){const H=Gl();k.dataset.renderSignature!==H&&(ct(k,ou()),k.dataset.renderSignature=H)}}if(i&&it(i,ve(Vr()),Zc(Vr())),l){const q=ni();it(l,nu(q),ru())}if(c&&o.appView==="overview"&&(it(c,ii(),si()),cu(e)),ci(e),!u||!d)return!1;const h=bi(f),w=Nu(f);if(my(u,f),xo(d,"oq-overview-hp-grid--",w,["single","equal","focus-hp1","focus-hp2"]),o.hpVisualMode!=="schematic"){const q=[...f.map((k,H)=>Mu(k.title,k.keys,k.accent,Mn(H,f,h),Qr(H,f,h))),Gr()].join(""),E=ve({visualMode:o.hpVisualMode,layout:w,markup:q});return d.dataset.renderSignature!==E&&(ct(d,q),d.dataset.renderSignature=E),!0}const b=hi()?cr():null,m=b?Gr():"",S=b?fi(b):"";return!!g!=!!m||(g&&g.dataset.renderSignature!==S?g.outerHTML=m:g&&b&&dy(g,b),d.querySelectorAll("[data-oq-hp-panel]").length!==f.length)?!1:(f.forEach((q,E)=>{const k=e.querySelector(`[data-oq-hp-panel="${q.title}"]`);if(k){const H=mi(q.title,q.keys,q.accent);xo(k,"oq-overview-hp--",Mn(E,f,h),["normal","focus","muted"]),Ty(k,q.title,q.keys,q.accent,Qr(E,f,h),H)}}),!0)}function Ey(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${kf()}
        ${Tf()}
      </section>
    `}function $y(){return`
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
    `}function Ay(){return o.appView==="overview"?hy():o.appView==="energy"?Qv():o.appView==="diagnosis"?gv():o.appView==="results"?Yv():Ey()}function Hy(){const e=fl();return`
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
    `}function My(){const e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function Py(e){if(!e||o.deferDevControlSelectRender)return;o.deferDevControlSelectRender=!0;const t=()=>{e.removeEventListener("blur",t),e.removeEventListener("change",t),o.deferDevControlSelectRender=!1,window.setTimeout(()=>p(),0)};e.addEventListener("blur",t,{once:!0}),e.addEventListener("change",t,{once:!0})}function p(){if(!o.root)return;const e=My();if(e){Py(e);return}const t=o.systemModal==="webserver-logs"?ft():null,n=o.systemModal==="cm100-commissioning"?ch():null,r=String(o.systemModal||"").startsWith("service-task-")?dh():null,a=o.systemModal==="history-storage"?gh():null,i=o.quickStartModalOpen?wb():null;if(o.nativeOpen){o.root.innerHTML=`
        ${Ii()}
        ${_p()}
      `,o.settingsRenderSignature="",o.headerRenderSignature=Mr(),sa(),Sn(),ss(),Oi(),ts(),es(),dt(t),ns(n),rs(r),as(a),ws(i);return}const l=Ay(),c=o.loadingEntities?`${l}${$y()}`:l,u=o.appView==="overview"||o.appView==="energy"||o.appView==="diagnosis"||o.appView==="results";o.root.innerHTML=`
      ${Ii()}
      <div class="oq-helper-shell${o.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${u?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${td}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${Bp()}
          </div>
      ${Gm()}
      ${c}
      ${Hy()}
        </div>
      </div>
      ${yb()}
      ${Kp()}
      ${Up()}
      ${kp()}
    `,o.settingsRenderSignature=o.appView==="settings"?Fr():"",o.headerRenderSignature=Mr(),da(),ky(),ss(),ga(),ci(),Sn(),Oi(),ts(),es(),dt(t),ns(n),rs(r),as(a),ws(i)}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}Ud();})();
