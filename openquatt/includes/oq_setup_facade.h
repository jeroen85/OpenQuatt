#pragma once

#include "oq_setup_mode.h"

// Setup facade entry-point for shared YAML lambdas.
//
// Phase A scope:
// - provide a stable topology API and compile-time setup validation.
// - no behavior changes in existing control logic yet.
//
// Later phases will move HP read/write access behind this namespace.
namespace oq_setup {

inline constexpr bool is_valid_hp_index(std::uint8_t hp_idx) {
  return hp_idx < hp_count();
}

}  // namespace oq_setup
