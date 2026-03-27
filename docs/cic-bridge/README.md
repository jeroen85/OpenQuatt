# OpenQuatt CiC Bridge

De bridge leest nu direct de bestaande OpenQuatt entities uit Home Assistant.
De scope is bewust beperkt tot:

- write-registers `1999`, `2006`, `2010`, `2015`, `3999`
- read-registers `2099`, `2100`, `2101`, `2102`, `2103`, `2104`, `2105`, `2107`, `2108`, `2110`, `2111`, `2112`, `2113`, `2116`, `2117`, `2118`, `2122`, `2131`, `2132`, `2133`, `2134`, `2135`, `2137`, `2138`
- info-blokken `11160..11179` en `11219..11238`

Deze registers zijn expres weggelaten:

- `2115`
- `2119`
- `2120`
- `2121`
- `2123..2126`
- `2127..2130`

De basis daarvoor staat in [openquatt_cic_bridge.yaml](openquatt_cic_bridge.yaml) via:

- `ha_entity_prefix: openquatt`

In de YAML worden de Modbus-adressen nu consequent in decimale notatie geschreven.

Met die prefix verwacht de bridge onder andere deze entities:

- `sensor.openquatt_hp1_working_mode`
- `sensor.openquatt_hp1_ac_voltage`
- `sensor.openquatt_hp1_ac_current`
- `sensor.openquatt_hp1_compressor_frequency_demand`
- `sensor.openquatt_hp1_compressor_frequency`
- `sensor.openquatt_hp1_fan_speed`
- `sensor.openquatt_hp1_outside_temperature`
- `sensor.openquatt_hp1_water_in_temperature`
- `sensor.openquatt_hp1_water_out_temperature`
- `sensor.openquatt_hp1_flow`
- `binary_sensor.openquatt_hp1_defrost`
- `binary_sensor.openquatt_hp1_4_way_valve`
- `select.openquatt_hp1_set_working_mode`
- `select.openquatt_hp1_set_compressor_level`
- `select.openquatt_hp1_silent_mode`
- `select.openquatt_hp1_set_pump_mode`
- `number.openquatt_hp1_set_pump_speed`

En hetzelfde patroon voor `hp2`.

## Schaling terug naar Modbus raw

De emulator rekent OpenQuatt-waarden intern terug naar de ruwe HP-registers:

- temperatuur: `raw = round(C * 100 + 3000)`
- stroom: `raw = round(A * 10)`
- druk: `raw = round(bar * 10)`
- pompvermogen: `raw = round(W * 10)`
- flow: `raw = round(L/h / 0.618)`

Als een HA-bronwaarde ontbreekt of `NaN` is, retourneert de emulator voor deze meetregisters `0`.

Voor de niet-HA info-blokken geldt:

- `11160..11179` retourneert overal `65535` (`0xFFFF`)
- `11219..11238` retourneert overal `65535` (`0xFFFF`)

Dat volgt het gedrag dat op de echte HP is waargenomen.

## Write-registers

De write-registers volgen nu direct de bestaande OpenQuatt `select`/`number` entities:

- `R1999` <- `select.openquatt_hpx_set_compressor_level`
- `R2006` <- `select.openquatt_hpx_silent_mode`
- `R2010` <- `select.openquatt_hpx_set_pump_mode`
- `R2015` <- `number.openquatt_hpx_set_pump_speed`
- `R3999` <- `select.openquatt_hpx_set_working_mode`

Inkomende Modbus writes van de CiC worden nog wel geaccepteerd, maar Home Assistant is de bron van waarheid voor deze registers.
