#pragma once

#include "../oq_service_runtime.h"

namespace oq_manual_flow {

class ManualFlowRuntime {
 public:
  void start() {
    if (id(oq_control_mode_code) != 100) {
      publish("REFUSED: CM100 required");
      return;
    }
    if (id(oq_commissioning_task_code) != oq_commissioning::TASK_NONE) {
      publish("REFUSED: BUSY");
      return;
    }

    id(oq_commissioning_abort_requested) = false;
    id(oq_commissioning_task_code) = oq_commissioning::TASK_MANUAL_FLOW;
    id(oq_commissioning_active) = true;
    id(oq_manual_flow_active) = true;
    publish("ACTIVE");
    id(oq_commissioning_status).publish_state("MANUAL FLOW ACTIVE");
  }

  void abort_or_clear() {
    id(oq_manual_flow_active) = false;
    oq_commissioning::clear_container(true);
    publish("STOPPED");
    id(oq_commissioning_status).publish_state("CM100 READY");
  }

  void apply_to_heating() {
    set_number_value(id(oq_flow_setpoint_lph), id(oq_manual_flow_setpoint_lph).state);
    publish("SAVED FOR HEATING");
  }

  void apply_to_cooling() {
    set_number_value(id(oq_cooling_flow_setpoint_lph), id(oq_manual_flow_setpoint_lph).state);
    publish("SAVED FOR COOLING");
  }

  void tick() {
    if (!id(oq_manual_flow_active)) return;

    const bool owns_task =
        id(oq_commissioning_task_code) == oq_commissioning::TASK_MANUAL_FLOW;
    const bool cm100_exited = id(oq_control_mode_code) != 100;
    if (owns_task && !cm100_exited && !id(oq_commissioning_abort_requested)) return;

    id(oq_manual_flow_active) = false;
    if (!owns_task) {
      publish("ABORTED: task ownership lost");
      return;
    }

    if (cm100_exited) {
      oq_commissioning::clear_container(false);
      publish("ABORTED: CM100 exited");
      id(oq_commissioning_status).publish_state("IDLE");
    } else {
      oq_commissioning::clear_container(true);
      publish("ABORTED");
      id(oq_commissioning_status).publish_state("CM100 READY");
    }
  }

 private:
  template <typename NumberEntity>
  void set_number_value(NumberEntity &number_entity, float value) {
    auto call = number_entity.make_call();
    call.set_value(value);
    call.perform();
  }

  void publish(const char *status) {
    id(oq_manual_flow_status).publish_state(status);
  }
};

inline ManualFlowRuntime &runtime() {
  static ManualFlowRuntime instance;
  return instance;
}

}  // namespace oq_manual_flow
