`openquatt/web/js/src/` contains the source fragments for the bundled web app.

Current split:
- `00-core.js`: bootstrap-adjacent constants, state, entity helpers, shared utilities
- `10-settings-quickstart.js`: settings helpers and Quick Start rendering
- `20-overview.js`: overview models and overview panel rendering
- `30-energy-heatpump.js`: energy view and heat pump rendering/patching
- `90-shell.js`: settings view shell, loading view, root render, boot close-out

The deployed/runtime file remains:
- `openquatt/web/js/openquatt-app.js`

Rebuild the bundle with:
- `node openquatt/web/build-assets.mjs`
