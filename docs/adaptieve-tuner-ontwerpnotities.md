# OpenQuatt Adaptive Tuner Design (Future Work)

## Table of Contents

- [1. Goal](#1-goal)
- [2. Scope](#2-scope)
- [3. Candidate Tunable Parameters](#3-candidate-tunable-parameters)
- [4. Inputs and Data Quality](#4-inputs-and-data-quality)
- [5. Update Strategy](#5-update-strategy)
- [6. Safety Guardrails](#6-safety-guardrails)
- [7. Observability](#7-observability)
- [8. Integration Plan](#8-integration-plan)
- [9. Validation Criteria](#9-validation-criteria)

## 1. Goal

Define a safe, local-only adaptive tuning mechanism that can improve selected control parameters over time without cloud dependency.

## 2. Scope

In scope:

- Online estimation from existing telemetry.
- Conservative parameter updates with guardrails.
- Operator visibility and manual approval points.

Out of scope:

- Aggressive self-optimizing behavior without safeguards.
- Any cloud-based optimizer dependency.

## 3. Candidate Tunable Parameters

Primary candidates:

- `house_rated_power_w`
- `house_zero_power_temp_c`
- `ph_kp_w_per_k`
- `ph_deadband_k`
- Flow PI (`oq_flow_kp`, `oq_flow_ki`) through controlled workflow

## 4. Inputs and Data Quality

Data sources:

- Selected outdoor temperature
- Selected supply temperature
- Room setpoint and room temperature
- heat pump electrical and thermal power
- Flow and mode context

Data quality filters must reject:

- Defrost intervals (if not explicitly modeled)
- Sensor invalid/unknown/unavailable periods
- Strong transients immediately after mode switches

## 5. Update Strategy

Proposed strategy:

1. Collect rolling windows under stable operating conditions.
2. Fit simple bounded model updates.
3. Compare proposed values against guardrails.
4. Publish proposed values as suggestion entities.
5. Apply only after manual approval (or explicit auto-apply policy).

## 6. Safety Guardrails

- Maximum parameter delta per update cycle.
- Minimum observation window before update.
- Hard value bounds identical to runtime number limits.
- Automatic rollback trigger if post-update KPIs degrade.

## 7. Observability

Recommended entities:

- Tuner state (`idle`, `collecting`, `proposed`, `applied`, `rollback`)
- Last proposal timestamp
- Last applied timestamp
- Confidence score
- Last rollback reason

## 8. Integration Plan

Phased rollout:

1. Offline replay validation with stored traces.
2. Read-only online mode (proposals only).
3. Manual apply mode in controlled testing.
4. Optional guarded auto-apply for small deltas.

## 9. Validation Criteria

A proposed tuner design should demonstrate:

- No regressions in safety behavior.
- Reduced oscillation and/or improved tracking.
- Stable or improved daily efficiency metrics.
- Predictable fallback/rollback behavior.
