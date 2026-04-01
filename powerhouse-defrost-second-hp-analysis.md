# Power House defrost-triggered second HP start

## Observation

In the analysed Power House run from `history (2).csv`, HP2 still starts during real HP1 defrost, even after commit `085ad23e99e877ae38340d4d8102c013cf0ab292` ("Restrict defrost support to active duo").

This is visible multiple times in the history:

- `02:02:33` HP1 `4-way valve` goes `on`, `02:02:41` HP2 starts to level `6`
- `03:55:05` HP1 `4-way valve` goes `on`, `03:55:53` HP2 starts to level `6`
- `06:44:58` HP1 `4-way valve` goes `on`, `06:45:01` HP2 starts to level `6`
- `07:40:48` HP1 `4-way valve` goes `on`, `07:41:12` HP2 starts to level `6`

Across the full file there are `7` such events. The logged optimizer/apply reason around the HP2 start is typically `defrost_protect_hold`.

## Why commit 085ad23 did not fully eliminate this

Commit `085ad23` removed the explicit Power House defrost pre-arm behavior and limited `defrost_boost` to already-active duo topologies.

That change did **not** stop the normal Power House optimizer from doing this sequence:

1. Detect real valve defrost on HP1
2. Apply thermal derating to HP1 capacity
3. Re-evaluate single vs duo topology under the reduced effective capacity
4. Choose a duo candidate because it thermally fits better
5. Start HP2

So the direct "start HP2 for defrost support" shortcut was removed, but the same practical effect could still happen indirectly through the normal topology optimizer.

## Intended behavior

For Power House:

- If a run is already `single` and one HP enters real `4-way-valve` defrost, do **not** start the second HP just to compensate that defrost event.
- If a run is already `duo`, keep the existing duo behavior, including limited `defrost_boost`.

This matches the intent behind `085ad23`: defrost support is allowed for active duo, not for expanding a single run into duo.

## Implemented fix

Add a hard guard in the Power House duo optimizer:

- Detect `valve_defrost_active = hp1_valve_def || hp2_valve_def`
- Detect `single_topology_active` from the last applied topology
- If both are true, and the optimizer would otherwise switch from single to duo, force it to stay on the best single candidate

In effect:

- `single -> duo` expansion is blocked during real valve defrost
- `duo -> duo` and `duo` defrost compensation stay intact

## Why this is the preferred fix

- Small, local change
- Matches the documented intent
- Avoids reintroducing early/pre-arm behavior
- Leaves existing duo defrost compensation untouched
- Easy to reason about from history traces

## Expected impact

After this change, similar future Power House runs should show:

- HP1 enters real defrost
- HP2 does **not** start if the system was on a single topology
- Heat output may dip temporarily during defrost, which is acceptable by design
- Existing duo runs can still remain duo and use the existing defrost handling
