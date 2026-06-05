import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import web_server
from esphome.const import CONF_ID, CONF_WEB_SERVER_ID

AUTO_LOAD = ["json", "web_server_base"]
DEPENDENCIES = ["web_server"]

openquatt_entities_ns = cg.esphome_ns.namespace("openquatt_entities")
OpenQuattEntities = openquatt_entities_ns.class_("OpenQuattEntities", cg.Component)

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattEntities),
        cv.GenerateID(CONF_WEB_SERVER_ID): cv.use_id(web_server.WebServer),
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_entities_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    web_server_var = await cg.get_variable(config[CONF_WEB_SERVER_ID])
    cg.add(var.set_web_server(web_server_var))
