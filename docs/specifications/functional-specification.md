# Functional Specification (FSS)

## Table of Contents

- [1. Document Purpose](#1-document-purpose)
- [2. Scope](#2-scope)
- [3. Functional Actors and Interfaces](#3-functional-actors-and-interfaces)
- [4. Functional Architecture](#4-functional-architecture)
- [5. Functional Modes](#5-functional-modes)
- [6. Functional Precedence and Safety](#6-functional-precedence-and-safety)
- [7. Functional Requirements](#7-functional-requirements)
- [8. Functional Truth-Table Style Expectations](#8-functional-truth-table-style-expectations)
- [9. Functional Acceptance Criteria](#9-functional-acceptance-criteria)
- [10. Traceability](#10-traceability)

## 1. Document Purpose

This document defines the required functional behavior of OpenQuatt.

It describes **what** the system must do, independent of low-level implementation details.

## 2. Scope

OpenQuatt functionally covers:

- dual heat pump supervisory operation
- demand generation and allocation
- flow safety and pump regulation
- boiler assist gating
- external feed ingest and source selection
- runtime observability through entities

Out of scope:

- cloud-side CIC service internals
- vendor firmware internals of heat pump units
- utility billing logic

## 3. Functional Actors and Interfaces

### External actors

- Home Assistant user/operator
- CIC JSON feed endpoint
- Heat pump units (HP1, HP2) over Modbus

### Functional IO

Inputs:

- temperatures, pressures, flow, status bits, failure bits
- room setpoint/room temperature
- runtime settings and toggles

Outputs:

- Control Mode state
- HP working mode and compressor level commands
- pump iPWM commands
- boiler relay command
- telemetry and diagnostic entities

## 4. Functional Architecture

OpenQuatt is partitioned into these functional domains:

1. Supervisory Control Mode management
2. Heating demand strategy
3. Heat allocation
4. Flow regulation
5. Boiler control
6. Source ingestion and selection
7. Energy and KPI telemetry

## 5. Functional Modes

### 5.1 Control Mode set

| Mode | Functional meaning |
|---|---|
| CM0 | Idle/standby |
| CM1 | Transitional pre/post-flow state |
| CM2 | Heat-pump heating |
| CM3 | Heat-pump heating + boiler assist |
| CM98 | Frost protection behavior |

### 5.2 Heating Strategy set

| Strategy | Functional meaning |
|---|---|
| Power House | Demand derived from house model and room error |
| Water Temperature Control | Demand derived from heating curve + PID |

### 5.3 Flow Mode set

| Mode | Functional meaning |
|---|---|
| Flow Setpoint | PI-regulated flow |
| Manual PWM | Fixed manual pump output |

## 6. Functional Precedence and Safety

Functional precedence order:

1. Safety constraints
2. Supervisory Control Mode decisions
3. Strategy demand intent
4. Allocation optimization
5. Convenience/diagnostic overrides

Normative safety principles:

- low-flow conditions must prevent unsafe compressor continuation
- invalid critical signals must trigger conservative fallback behavior
- boiler command must not remain active outside valid assist conditions

## 7. Functional Requirements

### 7.1 Supervisory behavior

- FR-SUP-001: System shall expose a single authoritative Control Mode state.
- FR-SUP-002: System shall support Auto and explicit CM override modes.
- FR-SUP-003: System shall include hysteresis/timers to avoid mode chatter.
- FR-SUP-004: System shall enforce low-flow safety behavior when heating is requested.
- FR-SUP-005: System shall support frost protection behavior when appropriate.
- FR-SUP-006: System shall maintain a power-cap factor derived from electrical limits.

### 7.2 Heating Strategy behavior

- FR-STR-001: Strategy shall publish raw demand on a bounded scale.
- FR-STR-002: Strategy shall support Power House and heating-curve modes.
- FR-STR-003: Power House path shall include room-error correction and ramp limiting.
- FR-STR-004: Heating-curve path shall include PID-based demand generation.
- FR-STR-005: Invalid strategy inputs shall not produce uncontrolled demand.

### 7.3 Heat allocation behavior

- FR-HEAT-001: Allocation shall consume bounded demand and apply filtering.
- FR-HEAT-002: Allocation shall apply supervisory cap constraints.
- FR-HEAT-003: Allocation shall only command active heating in allowed Control Modes.
- FR-HEAT-004: Allocation shall honor per-HP allowed-level switches.
- FR-HEAT-005: Allocation shall enforce minimum-runtime anti-short-cycle behavior.
- FR-HEAT-006: Allocation shall expose capacity/deficit telemetry.

### 7.4 Flow behavior

- FR-FLOW-001: Flow subsystem shall support setpoint and manual modes.
- FR-FLOW-002: Flow subsystem shall behave consistently with Control Mode context.
- FR-FLOW-003: PI behavior shall include practical anti-instability measures.
- FR-FLOW-004: Invalid flow/SP input shall trigger a safe fallback output.
- FR-FLOW-005: Flow mismatch diagnostics shall be available.

### 7.5 Boiler behavior

- FR-BOIL-001: Boiler assist shall be gated by Control Mode policy.
- FR-BOIL-002: Boiler shall include a temperature lockout hysteresis.
- FR-BOIL-003: Boiler contribution telemetry shall be exposed.

### 7.6 CIC/source behavior

- FR-CIC-001: CIC ingest shall expose feed health and staleness.
- FR-CIC-002: Source selection switches shall define control input origin.
- FR-CIC-003: Stale/unhealthy feed data shall not be treated as valid control input.

### 7.7 Energy behavior

- FR-EN-001: System shall expose daily and cumulative energy metrics.
- FR-EN-002: Metrics shall be separated for heat pump, boiler, and total system thermal domains.
- FR-EN-003: Heat pump electrical and COP-style KPI telemetry shall be available.

## 8. Functional Truth-Table Style Expectations

### 8.1 Boiler gate

| Condition | Expected result |
|---|---|
| CM not in assist-capable state | Boiler off |
| Assist mode valid and no trip lockout | Boiler may run |
| Trip lockout active | Boiler forced off |

### 8.2 Flow safety

| Condition | Expected result |
|---|---|
| Heating requested + flow valid | Heating can proceed |
| Heating requested + sustained low/invalid flow | safe constrained behavior |
| No heating demand | low-flow fault logic resets/relaxes contextually |

### 8.3 Source selection

| Switch state | Selected signal source |
|---|---|
| Use CIC switch ON | CIC feed value |
| Use CIC switch OFF | local/controller-derived value |

## 9. Functional Acceptance Criteria

- AC-001: CM transitions are stable and explainable from inputs.
- AC-002: Low-flow safety blocks unsafe heating behavior.
- AC-003: Strategy switch changes demand path without uncontrolled jumps.
- AC-004: Allocation respects allowed-level constraints and minimum runtime.
- AC-005: Boiler lockout behaves with hysteresis.
- AC-006: CIC stale/feed-fault conditions are observable and safely handled.
- AC-007: Daily/cumulative energy counters evolve plausibly over runtime.

## 10. Traceability

Implementation details and invariants are specified in:

- [Technical Specification](technical-specification.md)
