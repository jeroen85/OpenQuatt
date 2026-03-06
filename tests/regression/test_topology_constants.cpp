#include <stdio.h>
#include <stdlib.h>

#include "openquatt/includes/oq_topology.h"

int main() {
#if OQ_TOPOLOGY_DUO == 1
  if (!oq_topology::k_is_duo || oq_topology::k_hp_count != 2) {
    fprintf(stderr, "FAILED: expected Duo topology constants (is_duo=true, hp_count=2)\n");
    return 1;
  }
#else
  if (oq_topology::k_is_duo || oq_topology::k_hp_count != 1) {
    fprintf(stderr, "FAILED: expected Single topology constants (is_duo=false, hp_count=1)\n");
    return 1;
  }
#endif

  printf("Topology constants regression passed (OQ_TOPOLOGY_DUO=%d).\n", OQ_TOPOLOGY_DUO);
  return 0;
}
