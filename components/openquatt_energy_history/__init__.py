import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import select, switch, time
from esphome.const import CONF_ID

AUTO_LOAD = ["select", "switch", "time", "web_server_base"]

CONF_ENABLED_SWITCH = "enabled_switch"
CONF_CLOCK = "clock"
CONF_HOURLY_RETENTION_SELECT = "hourly_retention_select"

openquatt_energy_history_ns = cg.esphome_ns.namespace("openquatt_energy_history")
OpenQuattEnergyHistory = openquatt_energy_history_ns.class_(
    "OpenQuattEnergyHistory", cg.Component
)


CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattEnergyHistory),
        cv.Required(CONF_ENABLED_SWITCH): cv.use_id(switch.Switch),
        cv.Required(CONF_CLOCK): cv.use_id(time.RealTimeClock),
        cv.Optional(CONF_HOURLY_RETENTION_SELECT): cv.use_id(select.Select),
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_energy_history_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    enabled_switch = await cg.get_variable(config[CONF_ENABLED_SWITCH])
    cg.add(var.set_enabled_switch(enabled_switch))

    clock = await cg.get_variable(config[CONF_CLOCK])
    cg.add(var.set_clock(clock))

    if CONF_HOURLY_RETENTION_SELECT in config:
        hourly_retention_select = await cg.get_variable(config[CONF_HOURLY_RETENTION_SELECT])
        cg.add(var.set_hourly_retention_select(hourly_retention_select))
