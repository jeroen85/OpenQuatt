import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import switch, time
from esphome.const import CONF_ID

AUTO_LOAD = ["web_server_base", "time", "switch"]

CONF_CAPTURE_SWITCH = "capture_switch"
CONF_FLASH_SWITCH = "flash_switch"
CONF_CLOCK = "clock"

openquatt_trends_ns = cg.esphome_ns.namespace("openquatt_trends")
OpenQuattTrends = openquatt_trends_ns.class_("OpenQuattTrends", cg.Component)


CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattTrends),
        cv.Required(CONF_CAPTURE_SWITCH): cv.use_id(switch.Switch),
        cv.Required(CONF_FLASH_SWITCH): cv.use_id(switch.Switch),
        cv.Required(CONF_CLOCK): cv.use_id(time.RealTimeClock),
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_trends_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    capture_switch = await cg.get_variable(config[CONF_CAPTURE_SWITCH])
    cg.add(var.set_capture_switch(capture_switch))

    flash_switch = await cg.get_variable(config[CONF_FLASH_SWITCH])
    cg.add(var.set_flash_switch(flash_switch))

    clock = await cg.get_variable(config[CONF_CLOCK])
    cg.add(var.set_clock(clock))
