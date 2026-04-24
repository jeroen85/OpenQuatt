  function renderSettingsView() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Regeling aanpassen</h2>
        <p class="oq-helper-section-copy">Hier pas je aan hoe OpenQuatt werkt. Wijzigingen worden direct toegepast.</p>
        <div class="oq-helper-settings-stack">
          ${renderSettingsQuickStartSection()}
          ${renderSettingsGenerationSection()}
          ${renderSettingsFlowSection()}
          ${renderSettingsHeatingSection()}
          ${renderSettingsCoolingSection()}
          ${renderSettingsCiCCompatibilitySection()}
          ${renderSettingsWaterSection()}
          ${renderSettingsCompressorSection()}
          ${renderSettingsSilentSection()}
        </div>
      </section>
    `;
  }

  function renderInitialLoadingView() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">OpenQuatt</p>
        <h2 class="oq-helper-section-title">Interface laden</h2>
        <p class="oq-helper-section-copy">We bepalen eerst even of Quick Start al is afgerond, zodat je direct op de juiste plek binnenkomt.</p>
      </section>
    `;
  }

  function render() {
    if (!state.root) {
      return;
    }

    if (state.nativeOpen) {
      state.root.innerHTML = `
        ${renderDevPanel()}
        ${renderNativeSurfaceShell()}
      `;
      state.settingsRenderSignature = "";
      state.headerRenderSignature = getHeaderRenderSignature();
      stopMotionLoop();
      syncNativeVisibility();
      bindHeaderDevControls();
      syncDocumentTheme();
      syncDocumentTitle();
      return;
    }

    const mainContent = state.loadingEntities || !hasLoadedEntities()
      ? renderInitialLoadingView()
      : state.appView === "overview"
      ? renderOverviewView()
      : state.appView === "energy"
      ? renderEnergyView()
      : renderSettingsView();
    const wideFlushCard = state.appView === "overview" || state.appView === "energy";

    state.root.innerHTML = `
      ${renderDevPanel()}
      <div class="oq-helper-shell${state.overviewTheme === "dark" ? " oq-helper-shell--dark" : ""}">
        <div class="oq-helper-card${wideFlushCard ? " oq-helper-card--wide-flush" : ""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${LOGO_MARKUP}
              <div class="oq-helper-brand-copy">
                  <h1>Regeling, inzicht en tuning</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Alles voor je OpenQuatt op één plek: snel instellen, live meekijken en later verder finetunen.</p>
            </div>
            ${renderHeaderStatus()}
          </div>
      ${renderAppNav()}
      ${mainContent}
        </div>
      </div>
      ${renderQuickStartModal()}
      ${renderUpdateModal()}
      ${renderSystemModal()}
    `;
    state.settingsRenderSignature = state.appView === "settings" ? getSettingsRenderSignature() : "";
    state.headerRenderSignature = getHeaderRenderSignature();
    clearLegacyMotionVariables();
    syncTechTooltipLayers();
    refreshMotionTargets();
    syncNativeVisibility();
    bindHeaderDevControls();
    syncDocumentTheme();
    syncDocumentTitle();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");
  }

  boot();
}());
