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
    id(oq_quick_flow_test_active) = false;
    id(oq_quick_flow_test_switch).publish_state(false);
    publish("ACTIVE");
    id(oq_commissioning_status).publish_state("MANUAL FLOW ACTIVE");
  }

  void abort_or_clear() {
    if (id(oq_quick_flow_test_active)) {
      finish_quick_test("STOPPED", oq_commissioning::TASK_STATE_ABORT);
      return;
    }
    id(oq_manual_flow_active) = false;
    oq_commissioning::clear_container(true);
    publish("STOPPED");
    id(oq_commissioning_status).publish_state("CM100 READY");
  }

  void start_quick_test(uint32_t now_ms) {
    if (id(oq_control_mode_code) != 100) {
      id(oq_quick_flow_test_switch).publish_state(false);
      id(oq_commissioning_status).publish_state("REFUSED: CM100 required");
      return;
    }
    if (id(oq_commissioning_task_code) != oq_commissioning::TASK_NONE ||
        id(oq_commissioning_request_pending)) {
      id(oq_quick_flow_test_switch).publish_state(false);
      id(oq_commissioning_status).publish_state("REFUSED: BUSY");
      return;
    }
    if (id(oq_water_temp_hard_trip_active)) {
      id(oq_quick_flow_test_switch).publish_state(false);
      id(oq_commissioning_status).publish_state("REFUSED: water temperature hard trip");
      return;
    }
    if (id(boiler_active).state) {
      id(oq_quick_flow_test_switch).publish_state(false);
      id(oq_commissioning_status).publish_state("REFUSED: boiler active");
      return;
    }
    if (!heat_pumps_idle()) {
      id(oq_quick_flow_test_switch).publish_state(false);
      id(oq_commissioning_status).publish_state("REFUSED: heat pump active");
      return;
    }

    id(oq_commissioning_abort_requested) = false;
    id(oq_commissioning_task_code) = oq_commissioning::TASK_MANUAL_FLOW;
    id(oq_commissioning_active) = true;
    id(oq_commissioning_state_code) = oq_commissioning::TASK_STATE_REQUESTED;
    id(oq_commissioning_started_ms) = now_ms;
    id(oq_commissioning_state_since_ms) = now_ms;
    id(oq_manual_flow_active) = true;
    id(oq_quick_flow_test_active) = true;
    id(oq_quick_flow_test_started_ms) = now_ms;
    id(oq_quick_flow_test_remaining_s) = 30;
    id(oq_quick_flow_test_target_ipwm) = 400;
    id(oq_quick_flow_test_switch).publish_state(true);
    publish("QUICK TEST ACTIVE");
    id(oq_commissioning_status).publish_state("QUICK FLOW TEST ACTIVE");
  }

  void abort_quick_test() {
    if (!id(oq_quick_flow_test_active)) {
      id(oq_quick_flow_test_switch).publish_state(false);
      return;
    }
    finish_quick_test("STOPPED", oq_commissioning::TASK_STATE_ABORT);
  }

  void apply_to_heating() {
    set_number_value(id(oq_flow_setpoint_lph), id(oq_manual_flow_setpoint_lph).state);
    publish("SAVED FOR HEATING");
  }

  void apply_to_cooling() {
    set_number_value(id(oq_cooling_flow_setpoint_lph), id(oq_manual_flow_setpoint_lph).state);
    publish("SAVED FOR COOLING");
  }

  void tick(uint32_t now_ms) {
    if (!id(oq_manual_flow_active)) return;

    if (id(oq_quick_flow_test_active)) {
      const bool owns_task =
          id(oq_commissioning_task_code) == oq_commissioning::TASK_MANUAL_FLOW;
      if (!owns_task || id(oq_control_mode_code) != 100 ||
          id(oq_commissioning_abort_requested)) {
        finish_quick_test("ABORTED", oq_commissioning::TASK_STATE_ABORT);
        return;
      }

      const uint32_t started_ms = id(oq_quick_flow_test_started_ms);
      const int elapsed_s = started_ms == 0
          ? 30
          : (int) ((uint32_t) (now_ms - started_ms) / 1000UL);
      if (elapsed_s >= 30) {
        finish_quick_test("DONE", oq_commissioning::TASK_STATE_DONE);
        return;
      }
      id(oq_quick_flow_test_remaining_s) = 30 - elapsed_s;
      return;
    }

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
  bool hp_active(bool hp1) {
    int level = 0;
    int last_applied = 0;
    float working_mode = NAN;
    if (hp1) {
      if (id(hp1_compressor_level).has_state()) {
        auto idx = id(hp1_compressor_level).active_index();
        level = idx.has_value() ? (int) idx.value() : 0;
      }
      last_applied = id(hp1_last_applied_level);
      working_mode = id(hp1_working_mode).state;
    } else {
      #if OQ_TOPOLOGY_DUO
      if (id(hp2_compressor_level).has_state()) {
        auto idx = id(hp2_compressor_level).active_index();
        level = idx.has_value() ? (int) idx.value() : 0;
      }
      last_applied = id(hp2_last_applied_level);
      working_mode = id(hp2_working_mode).state;
      #endif
    }
    const int mode = isnan(working_mode) ? 0 : (int) roundf(working_mode);
    return level > 0 || last_applied > 0 || mode == 1 || mode == 2;
  }

  bool heat_pumps_idle() {
    if (hp_active(true)) return false;
    #if OQ_TOPOLOGY_DUO
    if (hp_active(false)) return false;
    #endif
    return true;
  }

  void finish_quick_test(const char *status, int next_state) {
    id(oq_quick_flow_test_active) = false;
    id(oq_quick_flow_test_started_ms) = 0;
    id(oq_quick_flow_test_remaining_s) = 0;
    id(oq_manual_flow_active) = false;
    id(oq_quick_flow_test_switch).publish_state(false);
    oq_commissioning::clear_container(false, next_state);
    publish(status);
  }

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
