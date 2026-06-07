# ESPHome Packages

- This tree contains shared ESPHome YAML packages and profile/topology/connection layers.
- Read only the package chain needed for the touched target or feature.
- Keep compile-time substitutions and runtime settings distinct.
- Avoid expanding large strategy/control YAML unless the task points there.
- For changes that affect a target, validate one representative config first.
