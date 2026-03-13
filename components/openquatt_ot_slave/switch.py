from typing import Any, Dict

import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import switch
from esphome.const import CONF_ID

from . import const, schema, validate, generate

DEPENDENCIES = [ const.OPENQUATT_OT_SLAVE ]
COMPONENT_TYPE = const.SWITCH

OpenQuattOTSlaveSwitch = generate.openquatt_ot_slave_ns.class_("OpenQuattOTSlaveSwitch", switch.Switch, cg.Component)

#CONF_MODE = "mode"

async def new_openquatt_ot_slaveswitch(config: Dict[str, Any]) -> cg.Pvariable:
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)
    await switch.register_switch(var, config)
#    cg.add(getattr(var, "set_mode")(config[CONF_MODE]))
    return var

def get_entity_validation_schema(entity: schema.SwitchSchema) -> cv.Schema:
    return switch.switch_schema(
        OpenQuattOTSlaveSwitch,
        default_restore_mode=entity["restore_mode"] if "restore_mode" in entity else "RESTORE_DEFAULT_ON",
        icon=entity["icon"] if "icon" in entity else "",
        entity_category=entity["entity_category"] if "entity_category" in entity else ""
    ).extend({
        cv.GenerateID(): cv.declare_id(OpenQuattOTSlaveSwitch),
    }).extend(cv.COMPONENT_SCHEMA)

CONFIG_SCHEMA = validate.create_component_schema(schema.SWITCHES, get_entity_validation_schema)

async def to_code(config: Dict[str, Any]) -> None:
    keys = await generate.component_to_code(
        COMPONENT_TYPE, 
        schema.SWITCHES,
        OpenQuattOTSlaveSwitch, 
        generate.create_only_conf(new_openquatt_ot_slaveswitch), 
        config
    )
    generate.define_readers(COMPONENT_TYPE, keys)
