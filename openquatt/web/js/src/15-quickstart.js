  function renderGenerationWorkspace(mode = "wizard") {
    const pickerMode = mode === "picker";
    if (pickerMode) {
      return `
        <section class="oq-helper-panel">
          ${renderHpGenerationField()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `;
    }

    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${renderHpGenerationField()}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function normalizeQuickStartCicFeedUrl(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }

    try {
      const parsed = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(value) ? value : `http://${value}`);
      if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
        return "";
      }
      if (!parsed.port) {
        parsed.port = "8080";
      }
      if (!parsed.pathname || parsed.pathname === "/") {
        parsed.pathname = "/beta/feed/data.json";
      }
      return parsed.toString();
    } catch (_error) {
      return "";
    }
  }

  function getQuickStartCicFeedUrlModel() {
    const configuredUrl = String(getEntityValue("cicFeedUrl") || "").trim();
    const draftUrl = state.quickStartCicFeedUrlDraft === null
      ? configuredUrl
      : String(state.quickStartCicFeedUrlDraft || "");
    return {
      configuredUrl,
      draftUrl,
      normalizedDraftUrl: normalizeQuickStartCicFeedUrl(draftUrl),
    };
  }

  function renderQuickStartCicFeedUrlField(model, busy) {
    return `
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${renderSettingsInfoToggle("quickStartCicFeedUrl", "CiC JSON-feed", "Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--text">
            <input
              class="oq-helper-input oq-settings-integration-url-input"
              type="text"
              data-oq-quickstart-cic-url
              value="${escapeHtml(model.draftUrl)}"
              placeholder="192.168.2.117"
              autocomplete="off"
              spellcheck="false"
              ${busy ? "disabled" : ""}
            >
          </label>
          ${model.draftUrl && !model.normalizedDraftUrl ? `<p class="oq-settings-source-warning">Vul een geldig IP-adres, hostname of een geldige HTTP(S)-URL in.</p>` : ""}
          ${model.normalizedDraftUrl ? `<p class="oq-settings-action-note">Wordt ingesteld als ${escapeHtml(model.normalizedDraftUrl)}</p>` : ""}
        </div>
      </article>
    `;
  }

  function getQuickStartFlowSourceModel() {
    const generation = String(getEntityValue("hpGeneration") || "").trim();
    const hardware = String(getEntityValue("hardwareProfileText") || "").trim().toLowerCase();
    const isV1 = generation === "V1";
    const isQEdition = hardware === "heatpump_controller_q";
    const isRemoteProfile = hardware === "heatpump_listener" || hardware === "waveshare";
    const hardwareKnown = isQEdition || isRemoteProfile;
    const requiresCic = isV1 && isRemoteProfile;
    const qFlowTarget = isQEdition ? (isV1 ? "Local" : "Outdoor unit") : "";
    const flowSourceTarget = requiresCic ? "CIC" : "Outdoor unit";
    const currentFlowSource = String(getEntityValue("flowSource") || "").trim();
    const currentQFlowSource = String(getEntityValue("qFlowSource") || "").trim();
    const cicEnabled = isEntityActive("cicPollingEnabled");
    const cicFeedOk = isEntityActive("cicJsonFeedOk");
    const cicStale = isEntityActive("cicDataStale");
    const cicUrl = getQuickStartCicFeedUrlModel();
    const sourceApplied = currentFlowSource === flowSourceTarget
      && (!qFlowTarget || currentQFlowSource === qFlowTarget);
    const configurationApplied = requiresCic
      ? sourceApplied && cicEnabled && Boolean(cicUrl.configuredUrl)
      : sourceApplied;
    const sensorKey = requiresCic
      ? "cicFlowrate"
      : isQEdition && isV1
        ? "controllerFlow"
        : getInstallationTopology() === "duo"
          ? "flowLocal"
          : "hp1Flow";
    const flowValue = getEntityNumericValue(sensorKey);
    const flowAvailable = Number.isFinite(flowValue);

    let status = hardwareKnown ? requiresCic ? "Nog configureren" : "Nog activeren" : "Hardwareprofiel niet herkend";
    if (requiresCic && configurationApplied) {
      status = cicFeedOk && flowAvailable
        ? "Geldig"
        : cicStale
          ? "Geen actuele CiC-data"
          : cicFeedOk
            ? "Verbonden, wacht op flow"
            : "Verbinding controleren";
    } else if (!requiresCic && configurationApplied) {
      status = flowAvailable ? "Geldig" : "Wacht op actuele flow";
    }

    const hardwareLabel = hardware === "heatpump_controller_q"
      ? "Heatpump Controller Q-edition"
      : hardware === "heatpump_listener"
        ? "Heatpump Listener"
        : hardware === "waveshare"
          ? "Waveshare"
          : hardware || "Onbekend hardwareprofiel";
    const sourceLabel = requiresCic
      ? "CiC JSON-feed"
      : isQEdition && isV1
        ? "Lokale flowmeter op de controller"
        : "Flowmeter in de buitenunit via Modbus";
    const explanation = requiresCic
      ? "Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed."
      : isQEdition && isV1
        ? "Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller."
        : `Bij Quatt ${generation || "V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;

    return {
      generation,
      hardwareLabel,
      requiresCic,
      qFlowTarget,
      flowSourceTarget,
      configurationApplied,
      sourceLabel,
      explanation,
      status,
      flowValue,
      flowAvailable,
      ...cicUrl,
      canApply: hardwareKnown
        && hasEntity("flowSource")
        && (!qFlowTarget || hasEntity("qFlowSource"))
        && (!requiresCic || (hasEntity("cicPollingEnabled") && hasEntity("cicFeedUrl") && Boolean(cicUrl.normalizedDraftUrl))),
    };
  }

  function getQuickStartThermostatSourceModel() {
    const hardware = String(getEntityValue("hardwareProfileText") || "").trim().toLowerCase();
    const isQEdition = hardware === "heatpump_controller_q";
    const isRemoteProfile = hardware === "heatpump_listener" || hardware === "waveshare";
    const currentRoomTempSource = String(getEntityValue("roomTempSource") || "").trim();
    const currentRoomSetpointSource = String(getEntityValue("roomSetpointSource") || "").trim();
    const pairedCurrentSource = currentRoomTempSource === currentRoomSetpointSource
      && ["CIC", "OT thermostat", "HA input"].includes(currentRoomTempSource)
      ? currentRoomTempSource
      : "";
    const selectedSource = isQEdition
      ? "OT thermostat"
      : state.quickStartThermostatSourceDraft || (pairedCurrentSource === "CIC" || pairedCurrentSource === "HA input" ? pairedCurrentSource : "CIC");
    const cicUrl = getQuickStartCicFeedUrlModel();
    const sourceApplied = currentRoomTempSource === selectedSource && currentRoomSetpointSource === selectedSource;
    const configurationApplied = sourceApplied
      && (selectedSource !== "OT thermostat" || isEntityActive("otEnabled"))
      && (selectedSource !== "CIC" || (isEntityActive("cicPollingEnabled") && Boolean(cicUrl.configuredUrl)));
    const sourceValueKeys = selectedSource === "OT thermostat"
      ? ["otRoomTemp", "otRoomSetpoint"]
      : selectedSource === "CIC"
        ? ["cicRoomTemp", "cicRoomSetpoint"]
        : ["roomTempHa", "roomSetpointHa"];
    const roomTempValue = getEntityNumericValue(sourceValueKeys[0]);
    const roomSetpointValue = getEntityNumericValue(sourceValueKeys[1]);
    const valuesAvailable = Number.isFinite(roomTempValue) && Number.isFinite(roomSetpointValue);
    const sourceHealthy = selectedSource === "OT thermostat"
      ? isEntityActive("otEnabled") && !isEntityActive("otLinkProblem") && valuesAvailable
      : selectedSource === "CIC"
        ? isEntityActive("cicJsonFeedOk") && !isEntityActive("cicDataStale") && valuesAvailable
        : isEntityActive("roomTempHaValid") && isEntityActive("roomSetpointHaValid") && valuesAvailable;

    let status = isQEdition || isRemoteProfile ? "Nog activeren" : "Hardwareprofiel niet herkend";
    if (configurationApplied) {
      status = sourceHealthy ? "Geldig" : selectedSource === "OT thermostat"
        ? "OpenTherm-verbinding controleren"
        : selectedSource === "CIC"
          ? "CiC-feed controleren"
          : "HA-proxy's controleren";
    }

    const hardwareLabel = hardware === "heatpump_controller_q"
      ? "Heatpump Controller Q-edition"
      : hardware === "heatpump_listener"
        ? "Heatpump Listener"
        : hardware === "waveshare"
          ? "Waveshare"
          : hardware || "Onbekend hardwareprofiel";
    const sourceLabel = selectedSource === "OT thermostat"
      ? "OpenTherm-thermostaat"
      : selectedSource === "CIC"
        ? "CiC JSON-feed"
        : "Home Assistant-proxy's";
    const explanation = isQEdition
      ? "De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm."
      : selectedSource === "CIC"
        ? "OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed."
        : "OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";

    return {
      hardwareLabel,
      isQEdition,
      isRemoteProfile,
      selectedSource,
      sourceLabel,
      explanation,
      configurationApplied,
      status,
      roomTempValue,
      roomSetpointValue,
      valuesAvailable,
      ...cicUrl,
      canApply: (isQEdition || isRemoteProfile)
        && hasEntity("roomTempSource")
        && hasEntity("roomSetpointSource")
        && (selectedSource !== "OT thermostat" || hasEntity("otEnabled"))
        && (selectedSource !== "CIC" || (hasEntity("cicPollingEnabled") && hasEntity("cicFeedUrl") && Boolean(cicUrl.normalizedDraftUrl))),
    };
  }

  function renderFlowSourceWorkspace() {
    const model = getQuickStartFlowSourceModel();
    const busy = state.busyAction === "quickstart-flow-source";
    const statusClass = model.status === "Geldig" ? " is-active" : "";
    const flowLabel = model.flowAvailable ? `${Math.round(model.flowValue)} L/h` : "Nog geen actuele waarde";
    const cicField = model.requiresCic ? renderQuickStartCicFeedUrlField(model, busy) : "";

    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${renderSettingsFieldCard(
            "quickStartFlowSource",
            "Vastgestelde flowbron",
            model.explanation,
            `
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${escapeHtml(model.hardwareLabel)} · Quatt ${escapeHtml(model.generation || "onbekend")}</p>
                    <strong class="oq-settings-quickstart-status-value">${escapeHtml(model.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${escapeHtml(model.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${statusClass}"><span>Status</span><strong>${escapeHtml(model.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Actuele flow</span><strong>${escapeHtml(flowLabel)}</strong></div>
                </div>
              </div>
            `,
            "oq-settings-field--span-2",
          )}
          ${cicField}
        </div>
        <div class="oq-helper-actions">
          <button
            class="oq-helper-button oq-helper-button--primary"
            type="button"
            data-oq-action="apply-quickstart-flow-source"
            ${busy || !model.canApply ? "disabled" : ""}
          >
            ${busy ? "Flowconfiguratie opslaan..." : model.configurationApplied ? "Flowconfiguratie opnieuw opslaan" : model.requiresCic ? "CiC-flowconfiguratie opslaan" : "Flowconfiguratie activeren"}
          </button>
        </div>
        ${renderQuickStartStepNav({
          nextDisabled: !model.configurationApplied,
          nextDisabledLabel: model.requiresCic ? "Sla eerst op" : "Activeer eerst",
        })}
      </section>
    `;
  }

  function renderThermostatSourceWorkspace() {
    const model = getQuickStartThermostatSourceModel();
    const busy = state.busyAction === "quickstart-thermostat-source";
    const statusClass = model.status === "Geldig" ? " is-active" : "";
    const sourceSelector = model.isRemoteProfile ? `
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${renderSettingsInfoToggle("quickStartThermostatSource", "Gegevensbron", "Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--select">
            <select data-oq-quickstart-thermostat-source ${busy ? "disabled" : ""}>
              <option value="CIC" ${model.selectedSource === "CIC" ? "selected" : ""}>CiC JSON-feed</option>
              <option value="HA input" ${model.selectedSource === "HA input" ? "selected" : ""}>Home Assistant</option>
            </select>
          </label>
          <p class="oq-settings-action-note">Deze keuze geldt altijd voor zowel kamertemperatuur als kamer-setpoint.</p>
        </div>
      </article>
    ` : "";
    const cicField = model.selectedSource === "CIC" ? renderQuickStartCicFeedUrlField(model, busy) : "";
    const haNote = model.selectedSource === "HA input" ? `
      <article class="oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    ` : "";

    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${renderSettingsFieldCard(
            "quickStartThermostatSourceStatus",
            model.isQEdition ? "Vastgestelde thermostaatbron" : "Gekozen thermostaatbron",
            model.explanation,
            `
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${escapeHtml(model.hardwareLabel)}</p>
                    <strong class="oq-settings-quickstart-status-value">${escapeHtml(model.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${escapeHtml(model.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${statusClass}"><span>Status</span><strong>${escapeHtml(model.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamertemperatuur</span><strong>${Number.isFinite(model.roomTempValue) ? `${model.roomTempValue.toFixed(1)} °C` : "Nog geen actuele waarde"}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamer-setpoint</span><strong>${Number.isFinite(model.roomSetpointValue) ? `${model.roomSetpointValue.toFixed(1)} °C` : "Nog geen actuele waarde"}</strong></div>
                </div>
              </div>
            `,
            "oq-settings-field--span-2",
          )}
          ${sourceSelector}
          ${cicField}
          ${haNote}
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-quickstart-thermostat-source" ${busy || !model.canApply ? "disabled" : ""}>
            ${busy ? "Thermostaatconfiguratie opslaan..." : model.configurationApplied ? "Thermostaatconfiguratie opnieuw opslaan" : model.selectedSource === "OT thermostat" ? "OpenTherm-configuratie activeren" : "Thermostaatconfiguratie opslaan"}
          </button>
        </div>
        ${renderQuickStartStepNav({
          nextDisabled: !model.configurationApplied,
          nextDisabledLabel: model.isQEdition ? "Activeer eerst" : "Sla eerst op",
        })}
      </section>
    `;
  }

  function renderQuickStartModal() {
    if (!state.quickStartModalOpen || state.loadingEntities || state.complete === null || (state.complete && state.quickStartModalMode !== "generation")) {
      return "";
    }

    if (state.quickStartModalMode === "generation") {
      return `
        <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
          <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart oq-helper-modal--generation" data-oq-quickstart-scroller data-oq-quickstart-step="generation" role="dialog" aria-modal="true" aria-labelledby="oq-generation-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Installatie</p>
                <h2 class="oq-helper-modal-title" id="oq-generation-modal-title">Quatt Hybrid-versie aanpassen</h2>
                <p class="oq-helper-modal-copy">Kies de versie die bij jouw Quatt hoort. Deze keuze bepaalt de basis van de regeling.</p>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit versie-popup">×</button>
            </div>
            ${renderGenerationWorkspace("picker")}
          </section>
        </div>
      `;
    }

    return `
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${escapeHtml(getCurrentQuickStep().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">×</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${renderActiveStep()}
            ${renderQuickStartSidebar()}
          </div>
        </section>
      </div>
    `;
  }

  function getQuickStartModalScrollerElement() {
    if (!state.root) {
      return null;
    }
    return state.root.querySelector("[data-oq-quickstart-scroller]");
  }

  function captureQuickStartScrollState() {
    const scroller = getQuickStartModalScrollerElement();
    if (!scroller) {
      return null;
    }

    return {
      stepId: String(scroller.dataset.oqQuickstartStep || ""),
      scrollHeight: scroller.scrollHeight,
      scrollTop: scroller.scrollTop,
      stickToBottom: isWebServerLogScrollerNearBottom(scroller),
    };
  }

  function restoreQuickStartScrollState(scrollState) {
    if (!scrollState) {
      return;
    }

    const scroller = getQuickStartModalScrollerElement();
    if (!scroller || String(scroller.dataset.oqQuickstartStep || "") !== scrollState.stepId) {
      return;
    }

    if (scrollState.stickToBottom) {
      scroller.scrollTop = scroller.scrollHeight;
      return;
    }

    const restoredScrollTop = scrollState.scrollTop + (scroller.scrollHeight - scrollState.scrollHeight);
    scroller.scrollTop = Math.max(0, restoredScrollTop);
  }

  function queueQuickStartScrollRestore(scrollState, defer = true) {
    if (!scrollState) {
      return;
    }

    const restoreToken = Number(state.quickStartScrollRestoreToken || 0) + 1;
    state.quickStartScrollRestoreToken = restoreToken;
    const applyScrollState = () => {
      if (state.quickStartScrollRestoreToken !== restoreToken || !state.quickStartModalOpen) {
        return;
      }
      restoreQuickStartScrollState(scrollState);
    };

    if (defer) {
      window.requestAnimationFrame(applyScrollState);
      return;
    }

    applyScrollState();
  }

  function renderStrategyWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${renderHeatingStrategyExplainCards()}
        ${renderStrategySelectionFields("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderBoilerWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${renderBoilerCvFields("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderFlowWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen → Installatie → Flowregeling en Service & commissioning.</p>
        ${renderFlowSettingsFields("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderHeatingWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("heating"))}</p>
        <h2 class="oq-helper-section-title">${escapeHtml(isCurveMode() ? "Stooklijn instellen" : "Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${escapeHtml(
            isCurveMode()
              ? "Stel hier je stooklijn en fallback-aanvoertemperatuur in."
              : "Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.",
          )}
        </p>
        ${isCurveMode()
          ? `
            <div class="oq-settings-grid oq-settings-grid--quickstart">${renderHeatingCurveProfileField()}</div>
            <div class="oq-settings-curve-shell">
              ${renderCurveGraph()}
            </div>
            ${renderSettingsCurveInputs()}
          `
          : `
            ${renderPowerHouseBaseFields("oq-settings-grid oq-settings-grid--quickstart")}
            ${renderPowerHouseAdvancedField()}
          `}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderWaterWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5°C erboven hard in.</p>
        ${renderWaterSettingsFields("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderSilentWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${renderSilentSettingsGrid("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderConfirmWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${escapeHtml(getQuickStepKicker("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog één keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${renderConfirmReviewCards()}
        ${state.controlNotice ? `<p class="oq-helper-notice">${escapeHtml(state.controlNotice)}</p>` : ""}
        ${state.controlError ? `<p class="oq-helper-error">${escapeHtml(state.controlError)}</p>` : ""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${state.busyAction ? "disabled" : ""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${state.busyAction ? "disabled" : ""}>
            ${state.busyAction === "apply" ? "Afronden..." : "Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${state.busyAction ? "disabled" : ""}>
            ${state.busyAction === "reset" ? "Resetten..." : "Setup-status resetten"}
          </button>
        </div>
      </section>
    `;
  }

  function renderActiveStep() {
    if (state.currentStep === "generation") {
      return renderGenerationWorkspace();
    }
    if (state.currentStep === "boiler") {
      return hasEntity("boilerCvAssistEnabled") ? renderBoilerWorkspace() : renderStrategyWorkspace();
    }
    if (state.currentStep === "flow-source") {
      return renderFlowSourceWorkspace();
    }
    if (state.currentStep === "thermostat-source") {
      return renderThermostatSourceWorkspace();
    }
    if (state.currentStep === "flow") {
      return renderFlowWorkspace();
    }
    if (state.currentStep === "heating") {
      return renderHeatingWorkspace();
    }
    if (state.currentStep === "water") {
      return renderWaterWorkspace();
    }
    if (state.currentStep === "silent") {
      return renderSilentWorkspace();
    }
    if (state.currentStep === "confirm") {
      return renderConfirmWorkspace();
    }
    return renderStrategyWorkspace();
  }

  function getQuickSteps() {
    return QUICK_STEPS.filter((step) => !step.optionalEntity || hasEntity(step.optionalEntity));
  }

  function getQuickStepKicker(stepId) {
    const index = getQuickSteps().findIndex((step) => step.id === stepId);
    return `Stap ${Math.max(0, index) + 1}`;
  }

  function getQuickStepStatus(index) {
    const currentIndex = getCurrentQuickStepIndex();
    const isSelected = index === currentIndex;
    const isDone = state.complete === true || index < currentIndex;
    return {
      tone: isSelected ? "current" : isDone ? "done" : "upcoming",
      label: isSelected ? "Actief" : isDone ? "Gereed" : "Volgend",
      current: isSelected,
    };
  }

  function renderStepOverview(compact = false) {
    return getQuickSteps().map((step, index) => {
      const stepStatus = getQuickStepStatus(index);
      return `
        <button
          class="oq-helper-field oq-helper-field--step${compact ? " oq-helper-field--compact" : ""} is-${stepStatus.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${escapeHtml(step.id)}"
          aria-current="${stepStatus.current ? "step" : "false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>${String(index + 1).padStart(2, "0")}. ${escapeHtml(step.title)}</h3>
            <span class="oq-helper-field-step-state">${stepStatus.label}</span>
          </div>
          <p>${escapeHtml(step.copy)}</p>
        </button>
      `;
    }).join("");
  }

  function getCurrentQuickStep() {
    const steps = getQuickSteps();
    return steps.find((step) => step.id === state.currentStep) || steps[0] || QUICK_STEPS[0];
  }

  function getCurrentQuickStepIndex() {
    return Math.max(0, getQuickSteps().findIndex((step) => step.id === state.currentStep));
  }

  function selectQuickStepByOffset(offset) {
    const steps = getQuickSteps();
    const nextIndex = Math.min(steps.length - 1, Math.max(0, getCurrentQuickStepIndex() + offset));
    state.currentStep = steps[nextIndex]?.id || QUICK_STEPS[0].id;
  }

  function renderQuickStartStepNav(options = {}) {
    const index = getCurrentQuickStepIndex();
    const steps = getQuickSteps();
    const previousStep = index > 0 ? steps[index - 1] : null;
    const nextStep = index < steps.length - 1 ? steps[index + 1] : null;

    return `
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${index + 1} van ${steps.length}</strong>
          <span>${escapeHtml(nextStep ? `Hierna: ${nextStep.title}` : "Je bent bij de laatste stap")}</span>
        </div>
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${previousStep ? "" : "disabled"}>
            Vorige
          </button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="next-step" ${nextStep && !options.nextDisabled ? "" : "disabled"}>
            ${nextStep ? options.nextDisabled ? options.nextDisabledLabel || "Configureer eerst" : "Volgende" : "Laatste stap"}
          </button>
        </div>
      </div>
    `;
  }

  function renderQuickStartSidebar() {
    const stepIndex = getCurrentQuickStepIndex();
    const steps = getQuickSteps();
    return `
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${stepIndex + 1} van ${steps.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${renderStepOverview(true)}
        </div>
        ${state.controlNotice ? `<p class="oq-helper-notice">${escapeHtml(state.controlNotice)}</p>` : ""}
        ${state.controlError ? `<p class="oq-helper-error">${escapeHtml(state.controlError)}</p>` : ""}
      </section>
    `;
  }

  function renderConfirmReviewCards() {
    const generationTitle = formatSettingsOptionLabel(getEntityStateText("hpGeneration"));
    const strategyTitle = isCurveMode() ? "Stooklijn" : "Power House";
    const formatReviewOption = (key) => formatSettingsOptionLabel(getEntityStateText(key));
    const generationLines = [
      ["Quatt Hybrid-versie", formatReviewOption("hpGeneration")],
    ];
    const strategyLines = isCurveMode()
      ? [
          ["Regelprofiel", formatReviewOption("curveControlProfile")],
          ["Aanvoer bij -20°C", formatValue("curveM20")],
          ["Aanvoer bij -10°C", formatValue("curveM10")],
          ["Aanvoer bij 0°C", formatValue("curve0")],
          ["Aanvoer bij 5°C", formatValue("curve5")],
          ["Aanvoer bij 10°C", formatValue("curve10")],
          ["Aanvoer bij 15°C", formatValue("curve15")],
          ["Fallback-aanvoer", formatValue("curveFallbackSupply")],
        ]
      : [
          ["Profiel", formatReviewOption("phResponseProfile")],
          ["Rated maximum house power", formatValue("housePower")],
          ["Maximum heating outdoor temperature", formatValue("houseOutdoorMax")],
          ["Temperatuurreactie", formatValue("phKp")],
          ["Comfort onder setpoint", formatValue("phComfortBelow")],
          ["Comfort boven setpoint", formatValue("phComfortAbove")],
        ];

    const flowMode = String(getEntityValue("flowControlMode") || "");
    const flowSourceModel = getQuickStartFlowSourceModel();
    const flowSourceLines = [
      ["Flowmeting", flowSourceModel.sourceLabel],
      ["Hardware", flowSourceModel.hardwareLabel],
      ["Status", flowSourceModel.status],
      ["Actuele flow", flowSourceModel.flowAvailable ? `${Math.round(flowSourceModel.flowValue)} L/h` : "Nog geen actuele waarde"],
    ];
    const thermostatSourceModel = getQuickStartThermostatSourceModel();
    const thermostatSourceLines = [
      ["Thermostaatgegevens", thermostatSourceModel.sourceLabel],
      ["Hardware", thermostatSourceModel.hardwareLabel],
      ["Status", thermostatSourceModel.status],
      ["Kamertemperatuur", Number.isFinite(thermostatSourceModel.roomTempValue) ? `${thermostatSourceModel.roomTempValue.toFixed(1)} °C` : "Nog geen actuele waarde"],
      ["Kamer-setpoint", Number.isFinite(thermostatSourceModel.roomSetpointValue) ? `${thermostatSourceModel.roomSetpointValue.toFixed(1)} °C` : "Nog geen actuele waarde"],
    ];
    const flowLines = [
      ["Flowregeling", flowMode === "Manual PWM" ? "Vaste pompstand" : "Gewenste flow"],
      flowMode === "Manual PWM"
        ? ["Vaste pompstand", formatValue("manualIpwm")]
        : ["Gewenste flow", formatValue("flowSetpoint")],
    ];

    const boilerLines = hasEntity("boilerCvAssistEnabled")
      ? [
          ["CV-ketel/boiler aanwezig", isEntityActive("boilerCvAssistEnabled") ? "Ja" : "Nee"],
          ...(isEntityActive("boilerCvAssistEnabled")
            ? [["Boiler rated heat power", formatValue("boilerRatedHeatPower")]]
            : []),
        ]
      : [];

    const waterLines = [
      ["Maximale watertemperatuur", formatValue("maxWater")],
    ];

    const silentLines = [
      ["Start stille uren", toTimeInputValue(getEntityValue("silentStartTime")) || "—"],
      ["Einde stille uren", toTimeInputValue(getEntityValue("silentEndTime")) || "—"],
      ["Maximaal niveau tijdens stille uren", formatValue("silentMax")],
      ["Maximaal niveau overdag", formatValue("dayMax")],
    ];

    const renderReviewList = (lines) => `
      <div class="oq-helper-review-list">
        ${lines
          .filter((line) => line && line[1])
          .map(
            ([label, value]) => `
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${escapeHtml(label)}</span>
                <strong class="oq-helper-review-value">${escapeHtml(value)}</strong>
              </div>
            `,
          )
          .join("")}
      </div>
    `;
    const renderReviewCard = (title, lines, summary = "") => `
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${escapeHtml(title)}</h3>
        ${summary ? `<p class="oq-helper-review-summary"><strong>${escapeHtml(summary)}</strong></p>` : ""}
        ${renderReviewList(lines)}
      </article>
    `;

    return `
      <div class="oq-helper-fields oq-helper-fields--review">
        <div class="oq-helper-review-column">
          ${renderReviewCard("Quatt Hybrid-versie", generationLines, generationTitle)}
          ${renderReviewCard("Flowmeting", flowSourceLines, flowSourceModel.sourceLabel)}
          ${renderReviewCard("Thermostaatgegevens", thermostatSourceLines, thermostatSourceModel.sourceLabel)}
          ${renderReviewCard("Verwarmingsstrategie", strategyLines, strategyTitle)}
          ${renderReviewCard("Watertemperatuur", waterLines)}
        </div>
        <div class="oq-helper-review-column">
          ${renderReviewCard("Flowregeling", flowLines)}
          ${boilerLines.length ? renderReviewCard("CV-ketel / boiler", boilerLines) : ""}
          ${renderReviewCard("Stille uren", silentLines)}
        </div>
      </div>
    `;
  }
