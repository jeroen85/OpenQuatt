`openquatt/web/js/src/` contains the source fragments for the bundled web app.

Current split:
- `00-config.js`: bootstrap-adjacent constants, entity definitions and shared config
- `01-runtime.js`: state storage, mount/runtime wiring, surface switching and motion bootstrapping
- `02-firmware-header.js`: firmware, header, native surface and modal rendering helpers
- `03-entities-controls.js`: entity state access, signatures, syncing, input handling and commit helpers
- `05-app-shared.js`: cross-view app helpers such as entity state access, nav and document sync
- `10-settings.js`: settings helpers and settings section rendering
- `15-quickstart.js`: Quick Start workspaces, sidebar and review rendering
- `20-overview.js`: overview models and overview panel rendering
- `30-energy.js`: energy view rendering
- `40-heatpump.js`: heat pump rendering, overview assembly and patching
- `90-shell.js`: settings view shell, loading view, root render, boot close-out

The deployed/runtime file remains:
- `openquatt/web/js/openquatt-app.js`

Rebuild the bundle with:
- `node openquatt/web/build-assets.mjs`
