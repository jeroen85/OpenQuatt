import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import mqtt
from esphome.const import CONF_ID

CONF_MQTT_ID = "mqtt_id"
CONF_BOOTSTRAP_BROKER = "bootstrap_broker"
CONF_BOOTSTRAP_PORT = "bootstrap_port"
CONF_BOOTSTRAP_USERNAME = "bootstrap_username"
CONF_BOOTSTRAP_PASSWORD = "bootstrap_password"
CONF_BOOTSTRAP_BASE_TOPIC = "bootstrap_base_topic"
CONF_DEFAULT_ENABLED = "default_enabled"
CONF_DEFAULT_PUBLISH_PROFILE = "default_publish_profile"
CONF_DEFAULT_ESSENTIAL_INTERVAL_S = "default_essential_interval_s"
CONF_DEFAULT_STANDARD_INTERVAL_S = "default_standard_interval_s"
CONF_DEFAULT_DIAGNOSTIC_INTERVAL_S = "default_diagnostic_interval_s"
CONF_DEFAULT_RETAIN_SNAPSHOTS = "default_retain_snapshots"

openquatt_mqtt_config_ns = cg.esphome_ns.namespace("openquatt_mqtt_config")
OpenQuattMqttConfig = openquatt_mqtt_config_ns.class_("OpenQuattMqttConfig", cg.Component)
PublishProfile = openquatt_mqtt_config_ns.enum("PublishProfile")

DEPENDENCIES = ["mqtt"]

PUBLISH_PROFILE_ENUM = {
    "off": PublishProfile.OFF,
    "essential": PublishProfile.ESSENTIAL,
    "standard": PublishProfile.STANDARD,
    "diagnostic": PublishProfile.DIAGNOSTIC,
}

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattMqttConfig),
        cv.GenerateID(CONF_MQTT_ID): cv.use_id(mqtt.MQTTClientComponent),
        cv.Optional(CONF_BOOTSTRAP_BROKER, default=""): cv.All(cv.string_strict, cv.Length(max=64)),
        cv.Optional(CONF_BOOTSTRAP_PORT, default=1883): cv.port,
        cv.Optional(CONF_BOOTSTRAP_USERNAME, default=""): cv.All(cv.string_strict, cv.Length(max=64)),
        cv.Optional(CONF_BOOTSTRAP_PASSWORD, default=""): cv.All(cv.string_strict, cv.Length(max=128)),
        cv.Optional(CONF_BOOTSTRAP_BASE_TOPIC, default="openquatt"): cv.All(cv.publish_topic, cv.Length(max=64)),
        cv.Optional(CONF_DEFAULT_ENABLED, default=False): cv.boolean,
        cv.Optional(CONF_DEFAULT_PUBLISH_PROFILE, default="standard"): cv.enum(PUBLISH_PROFILE_ENUM, lower=True),
        cv.Optional(CONF_DEFAULT_ESSENTIAL_INTERVAL_S, default=10): cv.int_range(min=1, max=3600),
        cv.Optional(CONF_DEFAULT_STANDARD_INTERVAL_S, default=30): cv.int_range(min=1, max=3600),
        cv.Optional(CONF_DEFAULT_DIAGNOSTIC_INTERVAL_S, default=60): cv.int_range(min=1, max=3600),
        cv.Optional(CONF_DEFAULT_RETAIN_SNAPSHOTS, default=True): cv.boolean,
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
    cg.add(var.set_bootstrap_base_topic(config[CONF_BOOTSTRAP_BASE_TOPIC]))
    cg.add(var.set_default_enabled(config[CONF_DEFAULT_ENABLED]))
    cg.add(var.set_default_publish_profile(config[CONF_DEFAULT_PUBLISH_PROFILE]))
    cg.add(var.set_default_essential_interval_s(config[CONF_DEFAULT_ESSENTIAL_INTERVAL_S]))
    cg.add(var.set_default_standard_interval_s(config[CONF_DEFAULT_STANDARD_INTERVAL_S]))
    cg.add(var.set_default_diagnostic_interval_s(config[CONF_DEFAULT_DIAGNOSTIC_INTERVAL_S]))
    cg.add(var.set_default_retain_snapshots(config[CONF_DEFAULT_RETAIN_SNAPSHOTS]))
