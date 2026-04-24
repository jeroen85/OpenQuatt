import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import text_sensor
from esphome.const import CONF_ID

AUTO_LOAD = ["text_sensor"]

CONF_BOOTSTRAP_USERNAME = "bootstrap_username"
CONF_BOOTSTRAP_PASSWORD = "bootstrap_password"
CONF_DEFAULT_AUTH_ENABLED = "default_auth_enabled"
CONF_ACTIVE_USERNAME = "active_username"
CONF_CREDENTIAL_SOURCE = "credential_source"

openquatt_web_auth_ns = cg.esphome_ns.namespace("openquatt_web_auth")
OpenQuattWebAuth = openquatt_web_auth_ns.class_("OpenQuattWebAuth", cg.Component)


CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattWebAuth),
        cv.Required(CONF_BOOTSTRAP_USERNAME): cv.All(cv.string_strict, cv.Length(min=1, max=32)),
        cv.Required(CONF_BOOTSTRAP_PASSWORD): cv.All(cv.string_strict, cv.Length(min=1, max=64)),
        cv.Optional(CONF_DEFAULT_AUTH_ENABLED, default=True): cv.boolean,
        cv.Optional(CONF_ACTIVE_USERNAME): cv.use_id(text_sensor.TextSensor),
        cv.Optional(CONF_CREDENTIAL_SOURCE): cv.use_id(text_sensor.TextSensor),
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_web_auth_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    cg.add(var.set_bootstrap_username(config[CONF_BOOTSTRAP_USERNAME]))
    cg.add(var.set_bootstrap_password(config[CONF_BOOTSTRAP_PASSWORD]))
    cg.add(var.set_default_auth_enabled(config[CONF_DEFAULT_AUTH_ENABLED]))

    if CONF_ACTIVE_USERNAME in config:
        active_username = await cg.get_variable(config[CONF_ACTIVE_USERNAME])
        cg.add(var.set_active_username_text_sensor(active_username))

    if CONF_CREDENTIAL_SOURCE in config:
        credential_source = await cg.get_variable(config[CONF_CREDENTIAL_SOURCE])
        cg.add(var.set_credential_source_text_sensor(credential_source))
