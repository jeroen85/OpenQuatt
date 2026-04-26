import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.const import CONF_ID

AUTO_LOAD = ["web_server_base"]

CONF_HISTORY = "history"

openquatt_trends_ns = cg.esphome_ns.namespace("openquatt_trends")
OpenQuattTrends = openquatt_trends_ns.class_("OpenQuattTrends", cg.Component)


CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattTrends),
        cv.Required(CONF_HISTORY): cv.string_strict,
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_trends_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    cg.add(var.set_history(cg.RawExpression(f"&id({config[CONF_HISTORY]})")))
