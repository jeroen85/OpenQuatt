import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import binary_sensor, sensor, text_sensor
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
        cv.Required(CONF_CONTROL_MODE_TEXT_SENSOR): cv.use_id(text_sensor.TextSensor),
        cv.Required(CONF_STRATEGY_TEXT_SENSOR): cv.use_id(text_sensor.TextSensor),
        cv.Required(CONF_HEAT_REQUEST_BINARY_SENSOR): cv.use_id(binary_sensor.BinarySensor),
        cv.Required(CONF_COOLING_REQUEST_BINARY_SENSOR): cv.use_id(binary_sensor.BinarySensor),
        cv.Required(CONF_DEMAND_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_OUTSIDE_TEMP_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_ROOM_TEMP_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_ROOM_SETPOINT_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_SUPPLY_TEMP_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_SUPPLY_TARGET_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_FLOW_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_TOTAL_POWER_INPUT_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_TOTAL_HEAT_POWER_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_TOTAL_COP_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_LOWFLOW_FAULT_BINARY_SENSOR): cv.use_id(binary_sensor.BinarySensor),
        cv.Required(CONF_HP1_WORKING_MODE_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP1_WORKING_MODE_LABEL_TEXT_SENSOR): cv.use_id(text_sensor.TextSensor),
        cv.Required(CONF_HP1_COMPRESSOR_LEVEL_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP1_POWER_INPUT_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP1_HEAT_POWER_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP1_FLOW_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP1_WATER_IN_TEMP_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP1_WATER_OUT_TEMP_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP1_DEFROST_BINARY_SENSOR): cv.use_id(binary_sensor.BinarySensor),
        cv.Required(CONF_HP1_FAULT_BINARY_SENSOR): cv.use_id(binary_sensor.BinarySensor),
        cv.Required(CONF_HP2_WORKING_MODE_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP2_WORKING_MODE_LABEL_TEXT_SENSOR): cv.use_id(text_sensor.TextSensor),
        cv.Required(CONF_HP2_COMPRESSOR_LEVEL_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP2_POWER_INPUT_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP2_HEAT_POWER_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP2_FLOW_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP2_WATER_IN_TEMP_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP2_WATER_OUT_TEMP_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_HP2_DEFROST_BINARY_SENSOR): cv.use_id(binary_sensor.BinarySensor),
        cv.Required(CONF_HP2_FAULT_BINARY_SENSOR): cv.use_id(binary_sensor.BinarySensor),
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_mqtt_publisher_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    setter_pairs = [
        (CONF_CONFIG_ID, "set_config"),
        (CONF_CONTROL_MODE_TEXT_SENSOR, "set_control_mode_text_sensor"),
        (CONF_STRATEGY_TEXT_SENSOR, "set_strategy_text_sensor"),
        (CONF_HEAT_REQUEST_BINARY_SENSOR, "set_heat_request_binary_sensor"),
        (CONF_COOLING_REQUEST_BINARY_SENSOR, "set_cooling_request_binary_sensor"),
        (CONF_DEMAND_SENSOR, "set_demand_sensor"),
        (CONF_OUTSIDE_TEMP_SENSOR, "set_outside_temp_sensor"),
        (CONF_ROOM_TEMP_SENSOR, "set_room_temp_sensor"),
        (CONF_ROOM_SETPOINT_SENSOR, "set_room_setpoint_sensor"),
        (CONF_SUPPLY_TEMP_SENSOR, "set_supply_temp_sensor"),
        (CONF_SUPPLY_TARGET_SENSOR, "set_supply_target_sensor"),
        (CONF_FLOW_SENSOR, "set_flow_sensor"),
        (CONF_TOTAL_POWER_INPUT_SENSOR, "set_total_power_input_sensor"),
        (CONF_TOTAL_HEAT_POWER_SENSOR, "set_total_heat_power_sensor"),
        (CONF_TOTAL_COP_SENSOR, "set_total_cop_sensor"),
        (CONF_LOWFLOW_FAULT_BINARY_SENSOR, "set_lowflow_fault_binary_sensor"),
        (CONF_HP1_WORKING_MODE_SENSOR, "set_hp1_working_mode_sensor"),
        (CONF_HP1_WORKING_MODE_LABEL_TEXT_SENSOR, "set_hp1_working_mode_label_text_sensor"),
        (CONF_HP1_COMPRESSOR_LEVEL_SENSOR, "set_hp1_compressor_level_sensor"),
        (CONF_HP1_POWER_INPUT_SENSOR, "set_hp1_power_input_sensor"),
        (CONF_HP1_HEAT_POWER_SENSOR, "set_hp1_heat_power_sensor"),
        (CONF_HP1_FLOW_SENSOR, "set_hp1_flow_sensor"),
        (CONF_HP1_WATER_IN_TEMP_SENSOR, "set_hp1_water_in_temp_sensor"),
        (CONF_HP1_WATER_OUT_TEMP_SENSOR, "set_hp1_water_out_temp_sensor"),
        (CONF_HP1_DEFROST_BINARY_SENSOR, "set_hp1_defrost_binary_sensor"),
        (CONF_HP1_FAULT_BINARY_SENSOR, "set_hp1_fault_binary_sensor"),
        (CONF_HP2_WORKING_MODE_SENSOR, "set_hp2_working_mode_sensor"),
        (CONF_HP2_WORKING_MODE_LABEL_TEXT_SENSOR, "set_hp2_working_mode_label_text_sensor"),
        (CONF_HP2_COMPRESSOR_LEVEL_SENSOR, "set_hp2_compressor_level_sensor"),
        (CONF_HP2_POWER_INPUT_SENSOR, "set_hp2_power_input_sensor"),
        (CONF_HP2_HEAT_POWER_SENSOR, "set_hp2_heat_power_sensor"),
        (CONF_HP2_FLOW_SENSOR, "set_hp2_flow_sensor"),
        (CONF_HP2_WATER_IN_TEMP_SENSOR, "set_hp2_water_in_temp_sensor"),
        (CONF_HP2_WATER_OUT_TEMP_SENSOR, "set_hp2_water_out_temp_sensor"),
        (CONF_HP2_DEFROST_BINARY_SENSOR, "set_hp2_defrost_binary_sensor"),
        (CONF_HP2_FAULT_BINARY_SENSOR, "set_hp2_fault_binary_sensor"),
    ]

    for key, setter_name in setter_pairs:
        entity = await cg.get_variable(config[key])
        cg.add(getattr(var, setter_name)(entity))

    cg.add(var.set_has_secondary_hp(bool(config[CONF_HAS_SECONDARY_HP])))
