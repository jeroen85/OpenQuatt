import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import esp32, esp32_rmt, sensor, binary_sensor, switch
from esphome.components.esp32 import include_builtin_idf_component
from esphome.automation import maybe_simple_id
from esphome import pins
from esphome.const import *
from esphome.const import CONF_ID, ENTITY_CATEGORY_CONFIG, CONF_NAME
from esphome.core import CORE
from esphome.core import coroutine_with_priority

from . import const, schema, validate, generate

#CONF_OPENTHERM_ID = "opentherm_id"

openquatt_ot_slave_ns = cg.esphome_ns.namespace("OpenQuattOTSlave")

OpenQuattOTSlaveComponent = openquatt_ot_slave_ns.class_("OpenQuattOTSlave", cg.PollingComponent)

AUTO_LOAD = ['sensor', 'binary_sensor', 'switch']

CONFIG_SCHEMA = cv.All(
    cv.Schema(
        {
            cv.GenerateID(): cv.declare_id(OpenQuattOTSlaveComponent),
            cv.Required("pin_thermostat_in"): pins.internal_gpio_input_pin_number,
            cv.Required("pin_thermostat_out"): pins.internal_gpio_output_pin_number,
            cv.Optional("enabled", True): cv.boolean,
            cv.Optional("response_enabled", True): cv.boolean,
            cv.Optional("ch_enable", True): cv.boolean,
            cv.Optional("cooling_enable", False): cv.boolean,
        }
    ).extend(cv.polling_component_schema("2s")),
    cv.only_on_esp32,
)


def _final_validate(config):
    if CORE.target_framework != "esp-idf":
        raise cv.Invalid(
            "openquatt_ot_slave requires 'esp32.framework.type: esp-idf' because the OpenTherm runtime depends on the ESP-IDF RMT driver"
        )

    variant = esp32.get_esp32_variant()
    if variant in esp32_rmt.VARIANTS_NO_RMT:
        raise cv.Invalid(
            f"openquatt_ot_slave requires ESP32 hardware with RMT support, but '{variant}' does not provide RMT"
        )

    return config


FINAL_VALIDATE_SCHEMA = _final_validate


@coroutine_with_priority(2.0)
async def to_code(config):
    include_builtin_idf_component("esp_driver_rmt")

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
