import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import binary_sensor, select, sensor, text_sensor
from esphome.const import CONF_ID

CONF_CONFIG_ID = "config_id"
CONF_HAS_SECONDARY_HP = "has_secondary_hp"
CONF_CONTROL_MODE_TEXT_SENSOR = "control_mode_text_sensor"
CONF_STRATEGY_TEXT_SENSOR = "strategy_text_sensor"
CONF_HEAT_REQUEST_BINARY_SENSOR = "heat_request_binary_sensor"
CONF_COOLING_REQUEST_BINARY_SENSOR = "cooling_request_binary_sensor"
CONF_DEMAND_SENSOR = "demand_sensor"
CONF_OUTSIDE_TEMP_SENSOR = "outside_temp_sensor"
CONF_ROOM_TEMP_SENSOR = "room_temp_sensor"
CONF_ROOM_SETPOINT_SENSOR = "room_setpoint_sensor"
CONF_SUPPLY_TEMP_SENSOR = "supply_temp_sensor"
CONF_SUPPLY_TARGET_SENSOR = "supply_target_sensor"
CONF_FLOW_SENSOR = "flow_sensor"
CONF_TOTAL_POWER_INPUT_SENSOR = "total_power_input_sensor"
CONF_TOTAL_HEAT_POWER_SENSOR = "total_heat_power_sensor"
CONF_TOTAL_COP_SENSOR = "total_cop_sensor"
CONF_LOWFLOW_FAULT_BINARY_SENSOR = "lowflow_fault_binary_sensor"
CONF_STRATEGY_PHASE_TEXT_SENSOR = "strategy_phase_text_sensor"
CONF_STRATEGY_DEBUG_STATE_TEXT_SENSOR = "strategy_debug_state_text_sensor"
CONF_REQUEST_REASON_TEXT_SENSOR = "request_reason_text_sensor"
CONF_HEATING_DEBUG_STATE_TEXT_SENSOR = "heating_debug_state_text_sensor"
CONF_DUO_OPTIMIZER_REASON_TEXT_SENSOR = "duo_optimizer_reason_text_sensor"
CONF_FLOW_CONTROL_MODE_SELECT = "flow_control_mode_select"
CONF_FLOW_MODE_TEXT_SENSOR = "flow_mode_text_sensor"
CONF_FLOW_MISMATCH_BINARY_SENSOR = "flow_mismatch_binary_sensor"
CONF_COMMISSIONING_STATUS_TEXT_SENSOR = "commissioning_status_text_sensor"
CONF_FLOW_AUTOTUNE_STATUS_TEXT_SENSOR = "flow_autotune_status_text_sensor"
CONF_FIRMWARE_UPDATE_STATUS_TEXT_SENSOR = "firmware_update_status_text_sensor"
CONF_FIRMWARE_UPDATE_PROGRESS_SENSOR = "firmware_update_progress_sensor"
CONF_HP1_WORKING_MODE_SENSOR = "hp1_working_mode_sensor"
CONF_HP1_WORKING_MODE_LABEL_TEXT_SENSOR = "hp1_working_mode_label_text_sensor"
CONF_HP1_COMPRESSOR_LEVEL_SENSOR = "hp1_compressor_level_sensor"
CONF_HP1_POWER_INPUT_SENSOR = "hp1_power_input_sensor"
CONF_HP1_HEAT_POWER_SENSOR = "hp1_heat_power_sensor"
CONF_HP1_FLOW_SENSOR = "hp1_flow_sensor"
CONF_HP1_WATER_IN_TEMP_SENSOR = "hp1_water_in_temp_sensor"
CONF_HP1_WATER_OUT_TEMP_SENSOR = "hp1_water_out_temp_sensor"
CONF_HP1_DEFROST_BINARY_SENSOR = "hp1_defrost_binary_sensor"
CONF_HP1_FAULT_BINARY_SENSOR = "hp1_fault_binary_sensor"
CONF_HP2_WORKING_MODE_SENSOR = "hp2_working_mode_sensor"
CONF_HP2_WORKING_MODE_LABEL_TEXT_SENSOR = "hp2_working_mode_label_text_sensor"
CONF_HP2_COMPRESSOR_LEVEL_SENSOR = "hp2_compressor_level_sensor"
CONF_HP2_POWER_INPUT_SENSOR = "hp2_power_input_sensor"
CONF_HP2_HEAT_POWER_SENSOR = "hp2_heat_power_sensor"
CONF_HP2_FLOW_SENSOR = "hp2_flow_sensor"
CONF_HP2_WATER_IN_TEMP_SENSOR = "hp2_water_in_temp_sensor"
CONF_HP2_WATER_OUT_TEMP_SENSOR = "hp2_water_out_temp_sensor"
CONF_HP2_DEFROST_BINARY_SENSOR = "hp2_defrost_binary_sensor"
CONF_HP2_FAULT_BINARY_SENSOR = "hp2_fault_binary_sensor"

ENTITY_SPECS = [
    (CONF_CONTROL_MODE_TEXT_SENSOR, text_sensor.TextSensor, "set_control_mode_text_sensor"),
    (CONF_STRATEGY_TEXT_SENSOR, text_sensor.TextSensor, "set_strategy_text_sensor"),
    (CONF_HEAT_REQUEST_BINARY_SENSOR, binary_sensor.BinarySensor, "set_heat_request_binary_sensor"),
    (CONF_COOLING_REQUEST_BINARY_SENSOR, binary_sensor.BinarySensor, "set_cooling_request_binary_sensor"),
    (CONF_DEMAND_SENSOR, sensor.Sensor, "set_demand_sensor"),
    (CONF_OUTSIDE_TEMP_SENSOR, sensor.Sensor, "set_outside_temp_sensor"),
    (CONF_ROOM_TEMP_SENSOR, sensor.Sensor, "set_room_temp_sensor"),
    (CONF_ROOM_SETPOINT_SENSOR, sensor.Sensor, "set_room_setpoint_sensor"),
    (CONF_SUPPLY_TEMP_SENSOR, sensor.Sensor, "set_supply_temp_sensor"),
    (CONF_SUPPLY_TARGET_SENSOR, sensor.Sensor, "set_supply_target_sensor"),
    (CONF_FLOW_SENSOR, sensor.Sensor, "set_flow_sensor"),
    (CONF_TOTAL_POWER_INPUT_SENSOR, sensor.Sensor, "set_total_power_input_sensor"),
    (CONF_TOTAL_HEAT_POWER_SENSOR, sensor.Sensor, "set_total_heat_power_sensor"),
    (CONF_TOTAL_COP_SENSOR, sensor.Sensor, "set_total_cop_sensor"),
    (CONF_LOWFLOW_FAULT_BINARY_SENSOR, binary_sensor.BinarySensor, "set_lowflow_fault_binary_sensor"),
    (CONF_STRATEGY_PHASE_TEXT_SENSOR, text_sensor.TextSensor, "set_strategy_phase_text_sensor"),
    (CONF_STRATEGY_DEBUG_STATE_TEXT_SENSOR, text_sensor.TextSensor, "set_strategy_debug_state_text_sensor"),
    (CONF_REQUEST_REASON_TEXT_SENSOR, text_sensor.TextSensor, "set_request_reason_text_sensor"),
    (CONF_HEATING_DEBUG_STATE_TEXT_SENSOR, text_sensor.TextSensor, "set_heating_debug_state_text_sensor"),
    (CONF_DUO_OPTIMIZER_REASON_TEXT_SENSOR, text_sensor.TextSensor, "set_duo_optimizer_reason_text_sensor"),
    (CONF_FLOW_CONTROL_MODE_SELECT, select.Select, "set_flow_control_mode_select"),
    (CONF_FLOW_MODE_TEXT_SENSOR, text_sensor.TextSensor, "set_flow_mode_text_sensor"),
    (CONF_FLOW_MISMATCH_BINARY_SENSOR, binary_sensor.BinarySensor, "set_flow_mismatch_binary_sensor"),
    (CONF_COMMISSIONING_STATUS_TEXT_SENSOR, text_sensor.TextSensor, "set_commissioning_status_text_sensor"),
    (CONF_FLOW_AUTOTUNE_STATUS_TEXT_SENSOR, text_sensor.TextSensor, "set_flow_autotune_status_text_sensor"),
    (CONF_FIRMWARE_UPDATE_STATUS_TEXT_SENSOR, text_sensor.TextSensor, "set_firmware_update_status_text_sensor"),
    (CONF_FIRMWARE_UPDATE_PROGRESS_SENSOR, sensor.Sensor, "set_firmware_update_progress_sensor"),
    (CONF_HP1_WORKING_MODE_SENSOR, sensor.Sensor, "set_hp1_working_mode_sensor"),
    (CONF_HP1_WORKING_MODE_LABEL_TEXT_SENSOR, text_sensor.TextSensor, "set_hp1_working_mode_label_text_sensor"),
    (CONF_HP1_COMPRESSOR_LEVEL_SENSOR, sensor.Sensor, "set_hp1_compressor_level_sensor"),
    (CONF_HP1_POWER_INPUT_SENSOR, sensor.Sensor, "set_hp1_power_input_sensor"),
    (CONF_HP1_HEAT_POWER_SENSOR, sensor.Sensor, "set_hp1_heat_power_sensor"),
    (CONF_HP1_FLOW_SENSOR, sensor.Sensor, "set_hp1_flow_sensor"),
    (CONF_HP1_WATER_IN_TEMP_SENSOR, sensor.Sensor, "set_hp1_water_in_temp_sensor"),
    (CONF_HP1_WATER_OUT_TEMP_SENSOR, sensor.Sensor, "set_hp1_water_out_temp_sensor"),
    (CONF_HP1_DEFROST_BINARY_SENSOR, binary_sensor.BinarySensor, "set_hp1_defrost_binary_sensor"),
    (CONF_HP1_FAULT_BINARY_SENSOR, binary_sensor.BinarySensor, "set_hp1_fault_binary_sensor"),
    (CONF_HP2_WORKING_MODE_SENSOR, sensor.Sensor, "set_hp2_working_mode_sensor"),
    (CONF_HP2_WORKING_MODE_LABEL_TEXT_SENSOR, text_sensor.TextSensor, "set_hp2_working_mode_label_text_sensor"),
    (CONF_HP2_COMPRESSOR_LEVEL_SENSOR, sensor.Sensor, "set_hp2_compressor_level_sensor"),
    (CONF_HP2_POWER_INPUT_SENSOR, sensor.Sensor, "set_hp2_power_input_sensor"),
    (CONF_HP2_HEAT_POWER_SENSOR, sensor.Sensor, "set_hp2_heat_power_sensor"),
    (CONF_HP2_FLOW_SENSOR, sensor.Sensor, "set_hp2_flow_sensor"),
    (CONF_HP2_WATER_IN_TEMP_SENSOR, sensor.Sensor, "set_hp2_water_in_temp_sensor"),
    (CONF_HP2_WATER_OUT_TEMP_SENSOR, sensor.Sensor, "set_hp2_water_out_temp_sensor"),
    (CONF_HP2_DEFROST_BINARY_SENSOR, binary_sensor.BinarySensor, "set_hp2_defrost_binary_sensor"),
    (CONF_HP2_FAULT_BINARY_SENSOR, binary_sensor.BinarySensor, "set_hp2_fault_binary_sensor"),
]

openquatt_mqtt_config_ns = cg.esphome_ns.namespace("openquatt_mqtt_config")
OpenQuattMqttConfig = openquatt_mqtt_config_ns.class_("OpenQuattMqttConfig")

openquatt_mqtt_publisher_ns = cg.esphome_ns.namespace("openquatt_mqtt_publisher")
OpenQuattMqttPublisher = openquatt_mqtt_publisher_ns.class_("OpenQuattMqttPublisher", cg.Component)

DEPENDENCIES = ["mqtt"]

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattMqttPublisher),
        cv.Required(CONF_CONFIG_ID): cv.use_id(OpenQuattMqttConfig),
        cv.Optional(CONF_HAS_SECONDARY_HP, default=False): cv.Any(cv.boolean, cv.int_range(min=0, max=1)),
        **{cv.Required(conf): cv.use_id(entity_type) for conf, entity_type, _ in ENTITY_SPECS},
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_mqtt_publisher_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    setter_pairs = [(CONF_CONFIG_ID, "set_config")] + [(conf, setter) for conf, _, setter in ENTITY_SPECS]

    for key, setter_name in setter_pairs:
        entity = await cg.get_variable(config[key])
        cg.add(getattr(var, setter_name)(entity))

    cg.add(var.set_has_secondary_hp(bool(config[CONF_HAS_SECONDARY_HP])))
