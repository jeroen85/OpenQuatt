`openquatt/web/css/src/` contains the source fragments for the bundled stylesheet.

Current split:
- `00-base.css`: app shell, helper primitives, native surface, modal and shared controls
- `10-settings.css`: settings and form-specific styling
- `20-overview.css`: overview summary, control and temperature styling
- `30-energy.css`: energy board styling
- `40-heatpump.css`: heat pump cards, schematic and tooltips
- `90-responsive.css`: responsive overrides and compact breakpoints

The deployed/runtime file remains:
- `openquatt/web/css/openquatt-app.css`

Rebuild the bundle with:
- `node openquatt/web/build-assets.mjs`
