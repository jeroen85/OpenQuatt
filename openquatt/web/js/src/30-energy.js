  function renderOverviewEnergyRow([label, key]) {
    if (!hasEntity(key)) {
      return "";
    }
    return `
      <div class="oq-overview-energy-row">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(getEntityStateText(key))}</strong>
      </div>
    `;
  }

  function renderOverviewEnergyGroup(group) {
    const filledRows = group.rows.map(renderOverviewEnergyRow).filter(Boolean).join("");
    if (!filledRows) {
      return "";
    }
    return `
      <section class="oq-overview-energy-group">
        <h5>${escapeHtml(group.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${filledRows}
        </div>
      </section>
    `;
  }

  function renderOverviewEnergyCategory(category) {
    const filledGroups = category.groups.map(renderOverviewEnergyGroup).filter(Boolean).join("");
    if (!filledGroups) {
      return "";
    }
    return `
      <section class="oq-overview-energy-category oq-overview-energy-category--${escapeHtml(category.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${escapeHtml(category.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${filledGroups}
        </div>
      </section>
    `;
  }

  function renderOverviewEnergyColumn(column) {
    const filledGroups = column.categories.map(renderOverviewEnergyCategory).filter(Boolean).join("");
    if (!filledGroups) {
      return "";
    }
    return `
      <article class="oq-overview-energy-column oq-overview-energy-column--${escapeHtml(column.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${escapeHtml(column.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${filledGroups}
        </div>
      </article>
    `;
  }

  function renderEnergyView() {
    const renderedColumns = OVERVIEW_ENERGY_COLUMN_CONFIGS.map(renderOverviewEnergyColumn).filter(Boolean);
    const gridClassName = [
      "oq-overview-energy-grid",
      renderedColumns.length === 1 ? "oq-overview-energy-grid--single" : "",
      renderedColumns.length === 2 ? "oq-overview-energy-grid--two" : "",
    ].filter(Boolean).join(" ");

    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Verbruik en rendement</h2>
            <p class="oq-helper-section-copy">Bekijk hier verbruik, warmte of koeling en rendement voor nu, vandaag en cumulatief.</p>
          </div>
          </div>
          <section class="oq-overview-energy oq-overview-energy--solo">
            <div class="${escapeHtml(gridClassName)}">
              ${renderedColumns.join("")}
            </div>
          </section>
        </div>
      </section>
    `;
  }
