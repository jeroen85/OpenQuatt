#pragma once

#include <math.h>

namespace oq_ph {

struct DuoCandidate {
  bool valid = false;
  int l1 = 0;
  int l2 = 0;
  float p_th_w = 0.0f;
  float p_el_w = 0.0f;
  float err_w = 1.0e9f;
  float over_soft_w = 0.0f;
  int level_moves = 0;
  int active_hp_count = 0;
  int balance_steps = 0;
  bool single_on_lead = false;
};

inline DuoCandidate invalid_duo_candidate() {
  return DuoCandidate{};
}

inline bool better_duo_candidate(const DuoCandidate &a, const DuoCandidate &b) {
  const float soft_eps_w = 1.0f;
  const float pel_eps_w = 1.0f;
  const float err_eps_w = 1.0f;
  if (fabsf(a.over_soft_w - b.over_soft_w) > soft_eps_w) return a.over_soft_w < b.over_soft_w;
  if (fabsf(a.p_el_w - b.p_el_w) > pel_eps_w) return a.p_el_w < b.p_el_w;
  if (fabsf(a.err_w - b.err_w) > err_eps_w) return a.err_w < b.err_w;
  if (a.level_moves != b.level_moves) return a.level_moves < b.level_moves;
  if (a.active_hp_count == 2 && b.active_hp_count == 2 && a.balance_steps != b.balance_steps) {
    return a.balance_steps < b.balance_steps;
  }
  if (a.active_hp_count == 1 && b.active_hp_count == 1) {
    const int a_single = (a.l1 > 0) ? a.l1 : a.l2;
    const int b_single = (b.l1 > 0) ? b.l1 : b.l2;
    if (a_single == b_single && a.single_on_lead != b.single_on_lead) return a.single_on_lead;
  }
  if (a.l1 != b.l1) return a.l1 < b.l1;
  return a.l2 < b.l2;
}

inline bool choose_preferred_candidate(const DuoCandidate &best_single,
                                       bool have_best_single,
                                       const DuoCandidate &best_duo,
                                       bool have_best_duo,
                                       float topology_heat_advantage_w,
                                       DuoCandidate &best_candidate) {
  if (have_best_single && have_best_duo) {
    const DuoCandidate *preferred_candidate = &best_single;
    const DuoCandidate *alternate_candidate = &best_duo;
    if (best_duo.p_el_w < best_single.p_el_w) {
      preferred_candidate = &best_duo;
      alternate_candidate = &best_single;
    }
    best_candidate = *preferred_candidate;
    if (alternate_candidate->err_w + topology_heat_advantage_w < preferred_candidate->err_w) {
      best_candidate = *alternate_candidate;
    }
    return true;
  }
  if (have_best_single) {
    best_candidate = best_single;
    return true;
  }
  if (have_best_duo) {
    best_candidate = best_duo;
    return true;
  }
  best_candidate = invalid_duo_candidate();
  return false;
}

inline int request_owner_hp(int hp1_req, int hp2_req) {
  if (hp1_req > 0 && hp2_req == 0) return 1;
  if (hp2_req > 0 && hp1_req == 0) return 2;
  return 0;
}

inline bool runtime_lead_override_allowed(bool single_req,
                                          bool both_idle_prev,
                                          bool hp1_def,
                                          bool hp2_def,
                                          bool hp1_valve_def,
                                          bool hp2_valve_def,
                                          bool lead_can,
                                          bool lag_can) {
  return single_req &&
         both_idle_prev &&
         !hp1_def &&
         !hp2_def &&
         !hp1_valve_def &&
         !hp2_valve_def &&
         lead_can &&
         lag_can;
}

inline void assign_single_owner_request(int req_single,
                                        bool lead_is_hp1,
                                        int &hp1_req,
                                        int &hp2_req,
                                        int &request_owner_hp) {
  if (lead_is_hp1) {
    hp1_req = req_single;
    hp2_req = 0;
    request_owner_hp = 1;
  } else {
    hp2_req = req_single;
    hp1_req = 0;
    request_owner_hp = 2;
  }
}

}  // namespace oq_ph
