#pragma once

#include <cstdint>

// Compile-time setup selection is injected via ESPHome platformio build_flags.
#ifndef OQ_SETUP_SINGLE
#define OQ_SETUP_SINGLE 0
#endif

#ifndef OQ_SETUP_DUO
#define OQ_SETUP_DUO 0
#endif

namespace oq_setup {

static_assert((OQ_SETUP_SINGLE == 0) || (OQ_SETUP_SINGLE == 1), "OQ_SETUP_SINGLE must be 0 or 1");
static_assert((OQ_SETUP_DUO == 0) || (OQ_SETUP_DUO == 1), "OQ_SETUP_DUO must be 0 or 1");
static_assert((OQ_SETUP_SINGLE + OQ_SETUP_DUO) == 1, "Exactly one setup macro must be enabled");

inline constexpr bool is_single() { return OQ_SETUP_SINGLE == 1; }
inline constexpr bool is_duo() { return OQ_SETUP_DUO == 1; }

inline constexpr bool has_hp2() { return is_duo(); }
inline constexpr std::uint8_t hp_count() { return is_duo() ? 2U : 1U; }

inline constexpr const char *setup_name() { return is_duo() ? "duo" : "single"; }

}  // namespace oq_setup
