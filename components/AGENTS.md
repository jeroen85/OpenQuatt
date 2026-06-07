# Custom Components

- Custom ESPHome components mix Python codegen/validation with C++ runtime code.
- Inspect only the touched component directory plus `openquatt_common` when shared helpers are needed.
- Be conservative with RAM/flash use; avoid unnecessary dynamic allocation on ESP targets.
- Keep Python schemas/codegen aligned with C++ headers and runtime behavior.
- Prefer target-specific config validation before any full compile.
