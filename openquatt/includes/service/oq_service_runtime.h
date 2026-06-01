#pragma once

#include "oq_service_logic.h"

namespace oq_commissioning {

inline void clear_container(bool keep_cm100,
                            int next_state = TASK_STATE_IDLE) {
  id(oq_commissioning_request_pending) = false;
  id(oq_commissioning_active) = keep_cm100;
  id(oq_commissioning_abort_requested) = false;
  id(oq_commissioning_task_code) = TASK_NONE;
  id(oq_commissioning_state_code) = next_state;
  id(oq_commissioning_started_ms) = 0;
  id(oq_commissioning_state_since_ms) = 0;
  id(oq_commissioning_status).publish_state(keep_cm100 ? "CM100 READY" : "IDLE");
}

inline void reset_task_runtime_state() {
  id(oq_commissioning_boiler_request) = false;
  id(oq_flow_autotune_req) = false;
  id(oq_flow_autotune_abort) = false;
  id(oq_flow_autotune_active) = false;
  id(oq_flow_autotune_state) = 0;
  id(oq_air_purge_active) = false;
  id(oq_air_purge_abort) = false;
  id(oq_air_purge_state) = 0;
  id(oq_air_purge_phase) = 0;
  id(oq_air_purge_target_ipwm) = 1000;
  id(oq_air_purge_started_ms) = 0;
  id(oq_air_purge_remaining_s) = 0;
  id(oq_manual_flow_active) = false;
  id(oq_manual_hp_active) = false;
  id(oq_manual_hp_stop_requested) = false;
  id(oq_manual_hp_mode_allowed) = false;
  id(oq_manual_hp1_mode_code) = 0;
  id(oq_manual_hp2_mode_code) = 0;
}

inline void request_neutral_cm100() {
  clear_container(false);
  reset_task_runtime_state();
  id(oq_commissioning_request_pending) = true;
  id(oq_commissioning_status).publish_state("CM100 REQUESTED");
}

inline bool request_running_task_abort() {
  const int task_code = id(oq_commissioning_task_code);
  if (task_active(id(oq_commissioning_active), task_code, TASK_FLOW_AUTOTUNE)) {
    id(oq_flow_autotune_abort) = true;
  } else if (stop_routes_to_commissioning_abort(id(oq_commissioning_active),
                                                task_code)) {
    id(oq_commissioning_abort_requested) = true;
  } else if (stop_routes_to_autotune_abort(id(oq_commissioning_active),
                                           task_code,
                                           id(oq_flow_autotune_req))) {
    id(oq_flow_autotune_abort) = true;
    id(oq_commissioning_abort_requested) = true;
  } else {
    return false;
  }
  id(oq_commissioning_status).publish_state("ABORT REQUESTED");
  return true;
}

inline void stop_neutral_cm100() {
  clear_container(false);
  reset_task_runtime_state();
}

}  // namespace oq_commissioning
