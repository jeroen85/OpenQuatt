import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import mqtt
from esphome.const import CONF_ID

CONF_MQTT_ID = "mqtt_id"
CONF_BOOTSTRAP_BROKER = "bootstrap_broker"
CONF_BOOTSTRAP_PORT = "bootstrap_port"
CONF_BOOTSTRAP_USERNAME = "bootstrap_username"
CONF_BOOTSTRAP_PASSWORD = "bootstrap_password"
CONF_BOOTSTRAP_TOPIC_PREFIX = "bootstrap_topic_prefix"
CONF_DEFAULT_ENABLED = "default_enabled"

openquatt_mqtt_config_ns = cg.esphome_ns.namespace("openquatt_mqtt_config")
OpenQuattMqttConfig = openquatt_mqtt_config_ns.class_("OpenQuattMqttConfig", cg.Component)

DEPENDENCIES = ["mqtt"]

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattMqttConfig),
        cv.GenerateID(CONF_MQTT_ID): cv.use_id(mqtt.MQTTClientComponent),
        cv.Optional(CONF_BOOTSTRAP_BROKER, default=""): cv.All(cv.string_strict, cv.Length(max=64)),
        cv.Optional(CONF_BOOTSTRAP_PORT, default=1883): cv.port,
        cv.Optional(CONF_BOOTSTRAP_USERNAME, default=""): cv.All(cv.string_strict, cv.Length(max=64)),
        cv.Optional(CONF_BOOTSTRAP_PASSWORD, default=""): cv.All(cv.string_strict, cv.Length(max=128)),
        cv.Optional(CONF_BOOTSTRAP_TOPIC_PREFIX, default="openquatt"): cv.All(cv.publish_topic, cv.Length(max=64)),
        cv.Optional(CONF_DEFAULT_ENABLED, default=False): cv.boolean,
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_mqtt_config_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    mqtt_client = await cg.get_variable(config[CONF_MQTT_ID])
    cg.add(var.set_mqtt_client(mqtt_client))
    cg.add(var.set_bootstrap_broker(config[CONF_BOOTSTRAP_BROKER]))
    cg.add(var.set_bootstrap_port(config[CONF_BOOTSTRAP_PORT]))
    cg.add(var.set_bootstrap_username(config[CONF_BOOTSTRAP_USERNAME]))
    cg.add(var.set_bootstrap_password(config[CONF_BOOTSTRAP_PASSWORD]))
    cg.add(var.set_bootstrap_topic_prefix(config[CONF_BOOTSTRAP_TOPIC_PREFIX]))
    cg.add(var.set_default_enabled(config[CONF_DEFAULT_ENABLED]))
