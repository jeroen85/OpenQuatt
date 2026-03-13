import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import sensor, binary_sensor, switch, number, text_sensor
from esphome.automation import maybe_simple_id
from esphome import pins
from esphome.const import *
from esphome.const import CONF_ID, ENTITY_CATEGORY_CONFIG, CONF_NAME
from esphome.core import coroutine_with_priority

from . import const, schema, validate, generate

#CONF_OPENTHERM_ID = "opentherm_id"

openquatt_ot_slave_ns = cg.esphome_ns.namespace("OpenQuattOTSlave")

OpenQuattOTSlaveComponent = openquatt_ot_slave_ns.class_("OpenQuattOTSlave", cg.PollingComponent)

AUTO_LOAD = ['sensor', 'binary_sensor', 'switch', 'number', 'text_sensor']

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattOTSlaveComponent),
        cv.Required("pin_thermostat_in"): pins.internal_gpio_input_pin_number,
        cv.Required("pin_thermostat_out"): pins.internal_gpio_output_pin_number,
        cv.Optional("enabled", True): cv.boolean,
        cv.Optional("ch_enable", True): cv.boolean,
        cv.Optional("cooling_enable", False): cv.boolean,
    }
).extend(cv.COMPONENT_SCHEMA)


@coroutine_with_priority(2.0)
async def to_code(config):
    cg.add_global(openquatt_ot_slave_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    for key, value in config.items():
        if key != CONF_ID:
            cg.add(getattr(var, f"set_{key}")(value))
            

def openquatt_ot_slave_component_schema():
    """Create a schema for an OpenQuatt OT slave component.
    :return: The component schema, `extend` this in your config schema.
    """
    component_schema = {
        cv.GenerateID(const.CONF_OPENQUATT_OT_SLAVE_ID): cv.use_id(OpenQuattOTSlaveComponent),
    }
    return cv.Schema(component_schema)
