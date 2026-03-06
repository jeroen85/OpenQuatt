#pragma once

// Build-time topology selector:
// - OQ_TOPOLOGY_DUO=1 -> Duo installation logic
// - OQ_TOPOLOGY_DUO=0 -> Single installation logic
#ifndef OQ_TOPOLOGY_DUO
#define OQ_TOPOLOGY_DUO 1
#endif

#if (OQ_TOPOLOGY_DUO != 0) && (OQ_TOPOLOGY_DUO != 1)
#error "OQ_TOPOLOGY_DUO must be 0 (Single) or 1 (Duo)"
#endif

namespace oq_topology {
static constexpr bool k_is_duo = (OQ_TOPOLOGY_DUO == 1);
static constexpr int k_hp_count = k_is_duo ? 2 : 1;
}  // namespace oq_topology

