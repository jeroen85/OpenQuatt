  function renderGenerationWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 1</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${renderHpGenerationField()}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderQuickStartModal() {
    if (state.complete || !state.quickStartModalOpen || state.loadingEntities) {
      return "";
    }

    return `
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
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

  function renderStrategyWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 2</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${renderHeatingStrategyExplainCards()}
        ${renderStrategySelectionFields("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderFlowWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 4</p>
        <h2 class="oq-helper-section-title">Flow en pompregeling</h2>
        <p class="oq-helper-section-copy">Kies hier of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt.</p>
        ${renderFlowSettingsFields("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderHeatingWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 3</p>
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
        <p class="oq-helper-label">Stap 5</p>
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
        <p class="oq-helper-label">Stap 6</p>
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
        <p class="oq-helper-label">Stap 7</p>
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

  function getQuickStepStatus(index) {
    const currentIndex = getCurrentQuickStepIndex();
    const isSelected = index === currentIndex;
    const isDone = state.complete || index < currentIndex;
    return {
      tone: isSelected ? "current" : isDone ? "done" : "upcoming",
      label: isSelected ? "Actief" : isDone ? "Gereed" : "Volgend",
      current: isSelected,
    };
  }

  function renderStepOverview(compact = false) {
    return QUICK_STEPS.map((step, index) => {
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
            <h3>0${index + 1}. ${escapeHtml(step.title)}</h3>
            <span class="oq-helper-field-step-state">${stepStatus.label}</span>
          </div>
          <p>${escapeHtml(step.copy)}</p>
        </button>
      `;
    }).join("");
  }

  function getCurrentQuickStep() {
    return QUICK_STEPS.find((step) => step.id === state.currentStep) || QUICK_STEPS[0];
  }

  function getCurrentQuickStepIndex() {
    return Math.max(0, QUICK_STEPS.findIndex((step) => step.id === state.currentStep));
  }

  function selectQuickStepByOffset(offset) {
    const nextIndex = Math.min(QUICK_STEPS.length - 1, Math.max(0, getCurrentQuickStepIndex() + offset));
    state.currentStep = QUICK_STEPS[nextIndex]?.id || QUICK_STEPS[0].id;
  }

  function renderQuickStartStepNav() {
    const index = getCurrentQuickStepIndex();
    const previousStep = index > 0 ? QUICK_STEPS[index - 1] : null;
    const nextStep = index < QUICK_STEPS.length - 1 ? QUICK_STEPS[index + 1] : null;

    return `
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${index + 1} van ${QUICK_STEPS.length}</strong>
          <span>${escapeHtml(nextStep ? `Hierna: ${nextStep.title}` : "Je bent bij de laatste stap")}</span>
        </div>
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${previousStep ? "" : "disabled"}>
            Vorige
          </button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="next-step" ${nextStep ? "" : "disabled"}>
            ${nextStep ? "Volgende" : "Laatste stap"}
          </button>
        </div>
      </div>
    `;
  }

  function renderQuickStartSidebar() {
    const stepIndex = getCurrentQuickStepIndex();
    return `
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${stepIndex + 1} van ${QUICK_STEPS.length}</h3>
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
    const flowLines = [
      ["Flowregeling", flowMode === "Manual PWM" ? "Vaste pompstand" : "Gewenste flow"],
      flowMode === "Manual PWM"
        ? ["Vaste pompstand", formatValue("manualIpwm")]
        : ["Gewenste flow", formatValue("flowSetpoint")],
    ];

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
          ${renderReviewCard("Verwarmingsstrategie", strategyLines, strategyTitle)}
          ${renderReviewCard("Watertemperatuur", waterLines)}
        </div>
        <div class="oq-helper-review-column">
          ${renderReviewCard("Flowregeling", flowLines)}
          ${renderReviewCard("Stille uren", silentLines)}
        </div>
      </div>
    `;
  }
