import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import time
from esphome.components.esp32 import include_builtin_idf_component
from esphome.const import CONF_ID

AUTO_LOAD = ["time", "web_server_base"]

CONF_CLOCK = "clock"

openquatt_debug_recorder_ns = cg.esphome_ns.namespace("openquatt_debug_recorder")
OpenQuattDebugRecorder = openquatt_debug_recorder_ns.class_(
    "OpenQuattDebugRecorder", cg.Component
)


CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattDebugRecorder),
        cv.Required(CONF_CLOCK): cv.use_id(time.RealTimeClock),
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    include_builtin_idf_component("esp_http_server")

    cg.add_global(openquatt_debug_recorder_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    clock = await cg.get_variable(config[CONF_CLOCK])
    cg.add(var.set_clock(clock))
