function renderSettingsView() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${renderSettingsGroupNav()}
        ${renderSettingsGroupContent()}
      </section>
    `;
  }

  function renderInitialLoadingView() {
    return `
      <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""} oq-helper-modal-backdrop--loading" data-oq-modal="initial-load">
        <section class="oq-helper-modal oq-helper-modal--reconnect oq-helper-modal--loading" role="status" aria-live="polite" aria-labelledby="oq-loading-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OpenQuatt</p>
              <h2 class="oq-helper-modal-title" id="oq-loading-modal-title">OpenQuatt laden</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">We halen de eerste gegevens op en zetten de interface klaar. De rest vullen we meteen daarna aan op de achtergrond.</p>
          <div class="oq-helper-reconnect-status oq-helper-loading-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>Eerste synchronisatie</strong>
              <span>De belangrijkste data wordt nu opgehaald.</span>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  function render() {
    if (!state.root) {
      return;
    }

    const webServerLogScrollState = state.systemModal === "webserver-logs"
      ? captureWebServerLogScrollState()
      : null;

    if (state.nativeOpen) {
      state.root.innerHTML = `
        ${renderDevPanel()}
        ${renderNativeSurfaceShell()}
      `;
      state.settingsRenderSignature = "";
      state.headerRenderSignature = getHeaderRenderSignature();
      stopMotionLoop();
      syncNativeVisibility();
      syncWebServerLogStream();
      bindHeaderDevControls();
      syncDocumentTheme();
      syncDocumentTitle();
      queueWebServerLogScrollRestore(webServerLogScrollState);
      return;
    }

    const mainContent = state.loadingEntities
      ? renderInitialLoadingView()
      : state.appView === "overview"
      ? renderOverviewView()
      : state.appView === "trends"
      ? renderTrendsView()
      : state.appView === "energy"
      ? renderEnergyView()
      : renderSettingsView();
    const wideFlushCard = state.appView === "overview" || state.appView === "trends" || state.appView === "energy";

    state.root.innerHTML = `
      ${renderDevPanel()}
      <div class="oq-helper-shell${state.overviewTheme === "dark" ? " oq-helper-shell--dark" : ""}">
        <div class="oq-helper-card${wideFlushCard ? " oq-helper-card--wide-flush" : ""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${LOGO_MARKUP}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
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
      ${renderDeviceReconnectModal()}
    `;
    state.settingsRenderSignature = state.appView === "settings" ? getSettingsRenderSignature() : "";
    state.headerRenderSignature = getHeaderRenderSignature();
    clearLegacyMotionVariables();
    syncTechTooltipLayers();
    syncWebServerLogStream();
    refreshMotionTargets();
    syncOverviewTrendInteractions();
    syncNativeVisibility();
    bindHeaderDevControls();
    syncDocumentTheme();
    syncDocumentTitle();
    queueWebServerLogScrollRestore(webServerLogScrollState);
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
