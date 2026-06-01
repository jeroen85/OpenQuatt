#pragma once

namespace oq_commissioning {

enum TaskCode {
  TASK_NONE = 0,
  TASK_BOILER_POWER_TEST = 1,
  TASK_FLOW_AUTOTUNE = 2,
  TASK_AIR_PURGE = 3,
  TASK_MANUAL_FLOW = 4,
  TASK_MANUAL_HP = 5,
};

enum TaskStateCode {
  TASK_STATE_IDLE = 0,
  TASK_STATE_REQUESTED = 1,
  TASK_STATE_FLOW_SETTLE = 2,
  TASK_STATE_BOILER_SETTLE = 3,
  TASK_STATE_MEASURE = 4,
  TASK_STATE_COOLDOWN = 5,
  TASK_STATE_DONE = 6,
  TASK_STATE_ABORT = 7,
  TASK_STATE_FAILED = 8,
};

inline bool is_cm100(int control_mode_code) {
  return control_mode_code == 100;
}

inline bool task_selected(int task_code, TaskCode expected) {
  return task_code == static_cast<int>(expected);
}

inline bool task_running(bool commissioning_active, int task_code) {
  return commissioning_active && task_code != static_cast<int>(TASK_NONE);
}

inline bool task_active(bool commissioning_active, int task_code, TaskCode expected) {
  return commissioning_active && task_selected(task_code, expected);
}

inline bool stop_routes_to_autotune_abort(bool commissioning_active,
                                          int task_code,
                                          bool flow_autotune_req) {
  return task_active(commissioning_active, task_code, TASK_FLOW_AUTOTUNE) ||
         task_selected(task_code, TASK_FLOW_AUTOTUNE) ||
         flow_autotune_req;
}

inline bool stop_routes_to_commissioning_abort(bool commissioning_active,
                                               int task_code) {
  return task_running(commissioning_active, task_code) &&
         !task_selected(task_code, TASK_FLOW_AUTOTUNE);
}

inline bool flow_autotune_mode_valid(int control_mode_code, int task_code) {
  return is_cm100(control_mode_code) &&
         task_selected(task_code, TASK_FLOW_AUTOTUNE);
}

inline bool air_purge_mode_valid(int control_mode_code, int task_code) {
  return is_cm100(control_mode_code) &&
         task_selected(task_code, TASK_AIR_PURGE);
}

inline bool neutral_cm100_requested(bool request_pending, int task_code) {
  return request_pending && task_selected(task_code, TASK_NONE);
}

}  // namespace oq_commissioning
