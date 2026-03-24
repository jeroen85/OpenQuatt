from typing import Any, Awaitable, Callable, Dict, List, Set, Tuple, TypeVar

import esphome.codegen as cg
from esphome.const import CONF_ID

from . import const, schema

openquatt_ot_slave_ns = cg.esphome_ns.namespace("OpenQuattOTSlave")
openquatt_ot_slave = openquatt_ot_slave_ns.class_("OpenQuattOTSlave", cg.Component)

def define_has_component(component_type: str, keys: List[str]) -> None:
    cg.add_define(
        f"OPENQUATT_OT_SLAVE_{component_type.upper()}_LIST(F, sep)", 
        cg.RawExpression(" sep ".join(map(lambda key: f"F({key}_{component_type.lower()})", keys)))
    )
    for key in keys:
        cg.add_define(f"OPENQUATT_OT_SLAVE_HAS_{component_type.upper()}_{key}")

TSchema = TypeVar("TSchema", bound=schema.EntitySchema)

def define_readers(component_type: str, keys: List[str]) -> None:
    for key in keys:
        cg.add_define(f"OPENQUATT_OT_SLAVE_READ_{key}", cg.RawExpression(f"this->{key}_{component_type.lower()}->state"))

def add_property_set(var: cg.MockObj, config_key: str, config: Dict[str, Any]) -> None:
    if config_key in config:
        cg.add(getattr(var, f"set_{config_key}")(config[config_key]))

Create = Callable[[Dict[str, Any], str, cg.MockObj], Awaitable[cg.Pvariable]]

def create_only_conf(create: Callable[[Dict[str, Any]], Awaitable[cg.Pvariable]]) -> Create:
    return lambda conf, _key, _hub: create(conf)

async def component_to_code(component_type: str, schema_: schema.Schema[TSchema], type: cg.MockObjClass, create: Create, config: Dict[str, Any]) -> List[str]:
    """Generate the code for each configured component in the schema of a component type.
    
    Parameters:
    - component_type: The type of component, e.g. "sensor" or "binary_sensor"
    - schema_: The schema for that component type, a list of available components
    - type: The type of the component, e.g. sensor.Sensor or OpenthermOutput
    - create: A constructor function for the component, which receives the config, 
      the key and the hub and should asynchronously return the new component
    - config: The configuration for this component type

    Returns: The list of keys for the created components
    """
    cg.add_define(f"OPENQUATT_OT_SLAVE_USE_{component_type.upper()}")

    hub = await cg.get_variable(config[const.CONF_OPENQUATT_OT_SLAVE_ID])

    keys: List[str] = []
    for key, conf in config.items():
        if not isinstance(conf, dict):
            continue
        id = conf[CONF_ID]
        if id and id.type == type:
            entity = await create(conf, key, hub)
            cg.add(getattr(hub, f"set_{key}_{component_type.lower()}")(entity))
            keys.append(key)

    define_has_component(component_type, keys)
    return keys
