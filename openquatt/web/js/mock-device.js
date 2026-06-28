(function () {
  const DOMAINS = new Set(["select", "number", "sensor", "text", "text_sensor", "binary_sensor", "button", "time", "datetime", "update", "switch"]);
  const OPENQUATT_RESUME_CLEAR_VALUE = "2000-01-01 00:00:00";
  const OPENQUATT_AUTH_RECOVERY_WINDOW_MS = 600000;
  const DEBUG_RECORDING_BUFFER_BYTES = 1024 * 1024;
  const DEBUG_RECORDING_SAMPLE_BYTES = 516;
  const DEBUG_RECORDING_SAMPLE_CAPACITY = Math.floor(DEBUG_RECORDING_BUFFER_BYTES / DEBUG_RECORDING_SAMPLE_BYTES);
  const entities = new Map();
  let devControlsRoot = null;
  const state = {
    scenario: "heating",
    installation: "duo",
    hardware: "heatpump_controller_q",
    connection: "wifi",
    boiler: "off",
    diagnostics: "clear",
    complete: true,
    tick: 0,
    autoAnimate: true,
    compressorCyclingAlert: {
      latched: false,
      firstSeenAt: 0,
      lastSeenAt: 0,
      hp1Peak2h: 0,
      hp1Peak72h: 0,
      hp2Peak2h: 0,
      hp2Peak72h: 0,
      alternating: false,
    },
    commissioningTimers: [],
    quickFlowTestTimer: null,
    bootedAt: Date.now() - ((2 * 3600) + (13 * 60)) * 1000,
    commissioning: {
      cm100Active: false,
      task: "none",
      phase: "idle",
      globalStatus: "CM0 - Standby",
      boilerStatusText: "IDLE",
      autotuneStatusText: "IDLE",
      airPurgeStatusText: "IDLE",
      airPurgeRemaining: 0,
      airPurgePhase: 0,
      airPurgeTargetIpwm: 0,
      manualFlowStatusText: "IDLE",
      manualFlowSetpoint: 800,
      manualFlowTargetIpwm: 400,
      manualHpStatusText: "IDLE",
      manualHpGuardStatusText: "Vrijgegeven",
      manualHp1Level: 0,
      manualHp2Level: 0,
      hpWaterCalibrationStatusText: "IDLE",
      hpWaterCalibrationRemaining: 0,
      hpWaterCalibrationPhase: 0,
      hpWaterCalibrationSpread: NaN,
      hpWaterCalibrationSupplyDelta: NaN,
      hpWaterCalibrationStableProgress: 0,
      hpWaterCalibrationStableRequired: 60,
      hpWaterCalibrationResultReference: NaN,
      hpWaterCalibrationResultSpreadBefore: NaN,
      hpWaterCalibrationResultExpectedSpread: NaN,
      hpWaterCalibrationResultRawAverages: {
        hp1In: NaN,
        hp1Out: NaN,
        hp2In: NaN,
        hp2Out: NaN,
      },
      hpWaterCalibrationSuggested: {
        hp1In: 0,
        hp1Out: 0,
        hp2In: 0,
        hp2Out: 0,
      },
      boilerResult: 0,
      boilerConfidence: 0,
      flowKpSuggested: 0,
      flowKiSuggested: 0,
    },
    otaTimers: [],
    auth: {
      enabled: false,
      username: "",
      password: "",
      source: "bootstrap-open",
      csrfToken: "",
      recoveryUntil: 0,
    },
    apiSecurity: {
      enabled: false,
      transportActive: false,
      pendingRestart: false,
      key: "",
      source: "bootstrap-disabled",
      csrfToken: "",
    },
    trendFlashWrites: 437,
    trendFlashStoredKiB: 182.5,
    trendFlashOldestAt: Date.now() - Math.round(18.4 * 24 * 60 * 60 * 1000),
    trendFlashNewestAt: Date.now() - (2 * 60 * 1000),
    trendFlashLastFlushAt: Date.now() - (12 * 60 * 1000),
    energyHistoryRecords: [],
    energyHistoryHourRecords: [],
    energyHistoryStoredKiB: 1024,
    energyHistoryWrites: 0,
    energyHistoryLastWriteAt: Date.now() - (9 * 60 * 60 * 1000),
    energyHistoryHourRetention: "180 dagen",
    logHistoryEnabled: true,
    logHistoryEntries: [],
    debugRecording: {
      active: false,
      mode: "manual",
      frozen: false,
      startedAt: 0,
      stoppedAt: 0,
      durationS: 15 * 60,
      nextOffsetS: 0,
      fields: [],
      samples: [],
    },
    oduRuntimeFrequency: {
      HP1: {
        cooling: [0, 30, 36, 42, 47, 52, 56, 61, 66, 71, 74],
        heating: [0, 30, 39, 49, 55, 61, 67, 72, 79, 85, 90],
      },
      HP2: {
        cooling: [0, 30, 36, 42, 47, 52, 56, 61, 66, 71, 74],
        heating: [0, 30, 39, 49, 55, 61, 67, 72, 79, 85, 90],
      },
    },
  };

  const HP2_ENTITIES = [
    ["select", "HP2 - Excluded compressor level A", { value: "None", state: "None", option: ["None", "L1 (H30/C30)", "L2 (H39/C36)", "L3 (H49/C42)", "L4 (H55/C47)", "L5 (H61/C52)", "L6 (H67/C56)", "L7 (H72/C61)", "L8 (H79/C66)", "L9 (H85/C71)", "L10 (H90/C74)"] }],
    ["select", "HP2 - Excluded compressor level B", { value: "None", state: "None", option: ["None", "L1 (H30/C30)", "L2 (H39/C36)", "L3 (H49/C42)", "L4 (H55/C47)", "L5 (H61/C52)", "L6 (H67/C56)", "L7 (H72/C61)", "L8 (H79/C66)", "L9 (H85/C71)", "L10 (H90/C74)"] }],
    ["sensor", "HP2 - Power Input", { value: 0, uom: "W" }],
    ["sensor", "HP2 - Heat Power", { value: 0, uom: "W" }],
    ["sensor", "HP2 - Cooling Power", { value: 0, uom: "W" }],
    ["sensor", "HP2 - COP", { value: 0, uom: "" }],
    ["sensor", "HP2 compressor level", { value: 0, uom: "" }],
    ["sensor", "HP2 - Compressor frequency", { value: 0, uom: "Hz" }],
    ["sensor", "HP2 - Compressor starts 2h", { value: 3 }],
    ["sensor", "HP2 - Compressor starts 6h", { value: 9 }],
    ["sensor", "HP2 - Compressor starts 24h", { value: 24 }],
    ["sensor", "HP2 - Compressor starts 72h", { value: 40 }],
    ["sensor", "HP2 - Compressor last start age", { value: 18, uom: "min" }],
    ["sensor", "HP2 - Fan speed", { value: 0, uom: "rpm" }],
    ["sensor", "HP2 - Flow", { value: 0, uom: "L/h" }],
    ["sensor", "HP2 - Evaporator coil temperature", { value: 0, uom: "\u00B0C" }],
    ["sensor", "HP2 - Inner coil temperature", { value: 0, uom: "\u00B0C" }],
    ["sensor", "HP2 - Outside temperature", { value: 0, uom: "\u00B0C" }],
    ["sensor", "HP2 - Condenser pressure", { value: 0, uom: "bar" }],
    ["sensor", "HP2 - Gas discharge temperature", { value: 0, uom: "\u00B0C" }],
    ["sensor", "HP2 - Evaporator pressure", { value: 0, uom: "bar" }],
    ["sensor", "HP2 - Gas return temperature", { value: 0, uom: "\u00B0C" }],
    ["sensor", "HP2 - EEV steps", { value: 0, uom: "p" }],
    ["sensor", "HP2 - Water in temperature", { value: 25.4, uom: "°C" }],
    ["sensor", "HP2 - Water out temperature", { value: 29.1, uom: "°C" }],
    ["sensor", "HP2 - Water in temperature raw", { value: 25.4, uom: "\u00B0C" }],
    ["sensor", "HP2 - Water out temperature raw", { value: 29.1, uom: "\u00B0C" }],
    ["text_sensor", "HP2 - Working Mode Label", { state: "Standby", value: "Standby" }],
    ["text_sensor", "HP2 - Active Failures List", { state: "None", value: "None" }],
    ["binary_sensor", "HP2 - Defrost", { value: false }],
    ["binary_sensor", "HP2 - 4-Way valve", { value: false }],
    ["binary_sensor", "HP2 - Bottom plate heater", { value: true }],
    ["binary_sensor", "HP2 - Crankcase heater", { value: true }],
  ];

  const COMPRESSOR_LEVEL_OPTIONS = [
    "None",
    "L1 (H30/C30)",
    "L2 (H39/C36)",
    "L3 (H49/C42)",
    "L4 (H55/C47)",
    "L5 (H61/C52)",
    "L6 (H67/C56)",
    "L7 (H72/C61)",
    "L8 (H79/C66)",
    "L9 (H85/C71)",
    "L10 (H90/C74)",
  ];
  const ODU_RUNTIME_FREQUENCY_LEVELS = Array.from({ length: 11 }, (_item, index) => index);
  const ODU_RUNTIME_FREQUENCY_MODES = ["cooling", "heating"];

  function oduRuntimePrefix(hp) {
    return `${hp} - EXPERIMENTAL`;
  }

  function oduRuntimeControlName(hp, suffix) {
    const prefix = oduRuntimePrefix(hp);
    if (suffix === "enable") return `${prefix} ODU runtime frequency write enable`;
    if (suffix === "load") return `${prefix} load ODU runtime frequency table`;
    if (suffix === "apply") return `${prefix} apply ODU runtime frequency table`;
    return `${prefix} ODU runtime frequency status`;
  }

  function oduRuntimeValueName(hp, mode, level) {
    return `${oduRuntimePrefix(hp)} ${mode} F${level} runtime Hz`;
  }

  function parseOduRuntimeButtonName(name) {
    const match = String(name || "").match(/^(HP[12]) - EXPERIMENTAL (load|apply) ODU runtime frequency table$/);
    return match ? { hp: match[1], action: match[2] } : null;
  }

  function clearOduRuntimeFrequencyEntities(hp) {
    ["enable", "load", "apply", "status"].forEach((suffix) => {
      const domain = suffix === "enable" ? "switch" : suffix === "status" ? "text_sensor" : "button";
      entities.delete(entityKey(domain, oduRuntimeControlName(hp, suffix)));
    });
    ODU_RUNTIME_FREQUENCY_MODES.forEach((mode) => {
      ODU_RUNTIME_FREQUENCY_LEVELS.forEach((level) => {
        entities.delete(entityKey("number", oduRuntimeValueName(hp, mode, level)));
      });
    });
  }

  function seedOduRuntimeFrequencyEntities(hp) {
    const table = state.oduRuntimeFrequency[hp];
    if (!table) {
      return;
    }
    setEntity("switch", oduRuntimeControlName(hp, "enable"), { value: false, state: false });
    setEntity("button", oduRuntimeControlName(hp, "load"), {});
    setEntity("button", oduRuntimeControlName(hp, "apply"), {});
    setEntity("text_sensor", oduRuntimeControlName(hp, "status"), {
      state: "IDLE: runtime values are mock data",
      value: "IDLE: runtime values are mock data",
    });
    ODU_RUNTIME_FREQUENCY_MODES.forEach((mode) => {
      ODU_RUNTIME_FREQUENCY_LEVELS.forEach((level) => {
        setEntity("number", oduRuntimeValueName(hp, mode, level), {
          value: table[mode][level],
          min_value: 0,
          max_value: 120,
          step: 1,
          uom: "Hz",
        });
      });
    });
  }

  function entityKey(domain, name) {
    return `${domain}/${name}`;
  }

  function clone(value) {
    if (typeof structuredClone === "function") {
      return structuredClone(value);
    }
    return JSON.parse(JSON.stringify(value));
  }

  function setEntity(domain, name, payload) {
    entities.set(entityKey(domain, name), {
      domain,
      name,
      state: "",
      value: "",
      ...payload,
    });
  }

  function getEntity(domain, name) {
    return entities.get(entityKey(domain, name));
  }

  function setNumber(name, value, uom) {
    const entity = getEntity("number", name) || getEntity("sensor", name);
    if (!entity) {
      return;
    }
    let nextValue = Number(value);
    const hpWaterMatch = /^HP([12]) - Water (in|out) temperature$/.exec(name);
    if (hpWaterMatch) {
      const hp = `HP${hpWaterMatch[1]}`;
      const side = hpWaterMatch[2];
      const rawEntity = getEntity("sensor", `${hp} - Water ${side} temperature raw`);
      const offsetEntity = getEntity("number", `${hp} water ${side} temperature offset`);
      if (rawEntity) {
        rawEntity.value = nextValue;
        rawEntity.state = "";
        rawEntity.uom = uom || rawEntity.uom;
      }
      const offset = Number(offsetEntity?.value || 0);
      nextValue = Number.isFinite(nextValue) ? Number((nextValue + offset).toFixed(2)) : nextValue;
    }
    entity.value = nextValue;
    entity.state = "";
    if (uom) {
      entity.uom = uom;
    }
  }

  function syncUptimeEntity() {
    const uptimeHours = Math.max(0, (Date.now() - state.bootedAt) / 3600000);
    setNumber("Uptime", Number(uptimeHours.toFixed(2)), "h");
  }

  function setText(domain, name, value) {
    const entity = getEntity(domain, name);
    if (!entity) {
      return;
    }
    entity.state = String(value);
    entity.value = String(value);
  }

  function setBinary(name, value) {
    const entity = getEntity("binary_sensor", name);
    if (!entity) {
      return;
    }
    entity.value = Boolean(value);
    entity.state = Boolean(value);
  }

  function parseDemoLogEntry(raw, index, total) {
    const normalized = String(raw || "").trim();
    const match = normalized.match(/^\[([A-Z]+)\]\[([^\]]+)\]\s*:?\s*(?:\[([^\]]+)\]\s*:?\s*)?(.*)$/);
    const level = match ? String(match[1] || "I").slice(0, 2) : "I";
    const header = match ? String(match[2] || "") : "";
    const body = match ? String(match[4] || normalized) : normalized;
    const tag = header.includes(":") ? header.slice(0, header.indexOf(":")) : header;
    const spacingMs = 45 * 1000;
    const offset = Math.max(0, total - index - 1) * spacingMs;
    return {
      seq: index + 1,
      ts: Date.now() - offset,
      level,
      tag,
      message: body,
      raw: normalized,
    };
  }

  function seedLogHistoryEntries() {
    const source = Array.isArray(window.__OQ_DEV_WEBSERVER_LOGS__) ? window.__OQ_DEV_WEBSERVER_LOGS__ : [];
    state.logHistoryEntries = source.map((entry, index) => parseDemoLogEntry(entry, index, source.length));
  }

  function appendLogHistoryEntry(raw) {
    const entry = parseDemoLogEntry(raw, state.logHistoryEntries.length, state.logHistoryEntries.length + 1);
    entry.seq = state.logHistoryEntries.length + 1;
    entry.ts = Date.now();
    state.logHistoryEntries = [...state.logHistoryEntries, entry].slice(-250);
  }

  function isSwitchEnabled(name) {
    return Boolean(getEntity("switch", name)?.value);
  }

  function clearOtaSimulation() {
    state.otaTimers.forEach((timer) => window.clearTimeout(timer));
    state.otaTimers = [];
  }

  function clearCommissioningTimers() {
    state.commissioningTimers.forEach((timer) => window.clearTimeout(timer));
    state.commissioningTimers = [];
  }

  function clearQuickFlowTestTimer() {
    if (state.quickFlowTestTimer) {
      window.clearTimeout(state.quickFlowTestTimer);
      state.quickFlowTestTimer = null;
    }
  }

  function resetHpWaterCalibrationMock(status = "IDLE") {
    state.commissioning.hpWaterCalibrationStatusText = status;
    state.commissioning.hpWaterCalibrationRemaining = 0;
    state.commissioning.hpWaterCalibrationPhase = 0;
    state.commissioning.hpWaterCalibrationSpread = NaN;
    state.commissioning.hpWaterCalibrationSupplyDelta = NaN;
    state.commissioning.hpWaterCalibrationStableProgress = 0;
    state.commissioning.hpWaterCalibrationStableRequired = 60;
    state.commissioning.hpWaterCalibrationResultReference = NaN;
    state.commissioning.hpWaterCalibrationResultSpreadBefore = NaN;
    state.commissioning.hpWaterCalibrationResultExpectedSpread = NaN;
    state.commissioning.hpWaterCalibrationResultRawAverages.hp1In = NaN;
    state.commissioning.hpWaterCalibrationResultRawAverages.hp1Out = NaN;
    state.commissioning.hpWaterCalibrationResultRawAverages.hp2In = NaN;
    state.commissioning.hpWaterCalibrationResultRawAverages.hp2Out = NaN;
    setBinary("HP water calibration active", false);
    setText("text_sensor", "HP water calibration status", status);
    setNumber("HP water calibration remaining", 0, "s");
    setNumber("HP water calibration phase", 0, "");
    setNumber("HP water calibration spread", NaN, "\u00B0C");
    setNumber("HP water calibration supply delta", NaN, "\u00B0C");
    setNumber("HP water calibration stable window progress", 0, "s");
    setNumber("HP water calibration stable window required", 60, "s");
    setNumber("HP water calibration result reference", NaN, "\u00B0C");
    setNumber("HP water calibration result spread before", NaN, "\u00B0C");
    setNumber("HP water calibration result expected spread", NaN, "\u00B0C");
    setNumber("HP water calibration result HP1 water in raw average", NaN, "\u00B0C");
    setNumber("HP water calibration result HP1 water out raw average", NaN, "\u00B0C");
    setNumber("HP water calibration result HP2 water in raw average", NaN, "\u00B0C");
    setNumber("HP water calibration result HP2 water out raw average", NaN, "\u00B0C");
  }

  function scheduleCommissioningStep(delay, callback) {
    const timer = window.setTimeout(() => {
      callback();
      applyScenario(state.scenario);
      updateSummary();
      notifyMockUpdated();
    }, delay);
    state.commissioningTimers.push(timer);
    return timer;
  }

  function roundToHundred(value) {
    return Math.max(0, Math.round(Number(value || 0) / 100) * 100);
  }

  function setCommissioningPhase(task, phase, extra = {}) {
    state.commissioning.task = task;
    state.commissioning.phase = phase;
    if (Number.isFinite(extra.boilerResult)) {
      state.commissioning.boilerResult = Number(extra.boilerResult);
    }
    if (Number.isFinite(extra.boilerConfidence)) {
      state.commissioning.boilerConfidence = Number(extra.boilerConfidence);
    }
    if (Number.isFinite(extra.flowKpSuggested)) {
      state.commissioning.flowKpSuggested = Number(extra.flowKpSuggested);
    }
    if (Number.isFinite(extra.flowKiSuggested)) {
      state.commissioning.flowKiSuggested = Number(extra.flowKiSuggested);
    }
  }

  function syncCommissioningEntities(single) {
    const cm100Active = Boolean(state.commissioning.cm100Active);
    if (!cm100Active) {
      return;
    }
    const task = String(state.commissioning.task || "none");
    const phase = String(state.commissioning.phase || "idle");
    const boilerTaskActive = task === "boiler" && cm100Active && !["done", "applied", "aborted", "refused"].includes(phase.toLowerCase());
    const autotuneTaskActive = task === "autotune" && cm100Active && !["done", "applied", "aborted", "refused"].includes(phase.toLowerCase());
    const airPurgeTaskActive = task === "purge" && cm100Active && !["done", "aborted", "refused"].includes(phase.toLowerCase());
    const manualFlowTaskActive = task === "manual-flow" && cm100Active && !["done", "aborted", "refused"].includes(phase.toLowerCase());
    const manualHpTaskActive = task === "manual-hp" && cm100Active && !["done", "aborted", "refused"].includes(phase.toLowerCase());
    const hpWaterCalibrationTaskActive = task === "hp-water-calibration" && cm100Active && !["done", "applied", "aborted", "refused"].includes(phase.toLowerCase());
    const commissioningLabel = "CM100 - Commissioning";
    const commissioningStatus = String(state.commissioning.globalStatus || "CM100 READY");

    setText("text_sensor", "Control Mode (Label)", commissioningLabel);
    setText("text_sensor", "Commissioning status", commissioningStatus);
    setBinary("CM100 active", cm100Active);
    setText("text_sensor", "Flow Mode", cm100Active
      ? (boilerTaskActive
        ? "CM100 boiler test"
        : autotuneTaskActive
          ? "CM100 flow autotune"
          : airPurgeTaskActive
            ? "CM100 air purge"
            : manualFlowTaskActive
              ? "MANUAL FLOW"
              : manualHpTaskActive
                ? "MANUAL HP"
                : hpWaterCalibrationTaskActive
                  ? "HP WATER CAL"
            : "CM100 idle")
      : "Gepauzeerd");

    if (cm100Active) {
      const purgeFlow = airPurgeTaskActive
        ? (phase === "pulse_hard" ? 980 : phase === "stabilize" ? 760 : 680)
        : 0;
      setNumber("Flow average (Selected)", boilerTaskActive ? 800 : autotuneTaskActive ? 790 : manualFlowTaskActive ? state.commissioning.manualFlowSetpoint - 8 : manualHpTaskActive ? 792 : hpWaterCalibrationTaskActive ? 735 : purgeFlow, "L/h");
      setNumber("Total Heat Power", boilerTaskActive ? Number(getEntity("sensor", "Boiler Heat Power")?.value || 0) : 0, "W");
      setNumber("Total Power Input", boilerTaskActive ? (single ? 560 : 640) : airPurgeTaskActive ? (single ? 48 : 78) : hpWaterCalibrationTaskActive ? (single ? 34 : 52) : single ? 12 : 18, "W");
      setBinary("Boiler active", task === "boiler" && ["boiler settling", "measuring"].includes(phase.toLowerCase()));
    }

    setBinary("Boiler power test active", boilerTaskActive);
    setText("text_sensor", "Boiler power test status", cm100Active
      ? String(state.commissioning.boilerStatusText || "IDLE")
      : "IDLE");
    setNumber("Boiler power test result", state.commissioning.boilerResult, "W");
    setNumber("Boiler power test confidence", state.commissioning.boilerConfidence, "%");

    setText("text_sensor", "Flow Autotune status", cm100Active
      ? String(state.commissioning.autotuneStatusText || "IDLE")
      : "IDLE");
    setNumber("Flow Autotune Kp suggested", state.commissioning.flowKpSuggested, "");
    setNumber("Flow Autotune Ki suggested", state.commissioning.flowKiSuggested, "");

    setBinary("Air purge active", airPurgeTaskActive);
    setText("text_sensor", "Air purge status", cm100Active
      ? String(state.commissioning.airPurgeStatusText || "IDLE")
      : String(state.commissioning.airPurgeStatusText || "IDLE"));
    setNumber("Air purge remaining", state.commissioning.airPurgeRemaining, "s");
    setNumber("Air purge phase", state.commissioning.airPurgePhase, "");
    setNumber("Air purge target iPWM", state.commissioning.airPurgeTargetIpwm, "iPWM");
    setBinary("Manual flow active", manualFlowTaskActive);
    setText("text_sensor", "Manual flow status", String(state.commissioning.manualFlowStatusText || "IDLE"));
    setNumber("Manual flow target iPWM", state.commissioning.manualFlowTargetIpwm, "iPWM");
    setBinary("Manual HP active", manualHpTaskActive);
    setText("text_sensor", "Manual HP status", String(state.commissioning.manualHpStatusText || "IDLE"));
    setText("text_sensor", "Manual HP guard status", String(state.commissioning.manualHpGuardStatusText || "Vrijgegeven"));
    const manualHp1Mode = String(getEntity("select", "Manual HP1 service mode")?.value || "Standby");
    const manualHp2Mode = String(getEntity("select", "Manual HP2 service mode")?.value || "Standby");
    setNumber("HP1 compressor level", manualHpTaskActive && manualHp1Mode !== "Standby" ? state.commissioning.manualHp1Level : 0, "");
    setNumber("HP2 compressor level", manualHpTaskActive && manualHp2Mode !== "Standby" ? state.commissioning.manualHp2Level : 0, "");
    if (manualHpTaskActive) {
      setText("text_sensor", "HP1 - Working Mode Label", manualHp1Mode);
      setText("text_sensor", "HP2 - Working Mode Label", manualHp2Mode);
    }
    setBinary("HP water calibration active", hpWaterCalibrationTaskActive);
    setText("text_sensor", "HP water calibration status", String(state.commissioning.hpWaterCalibrationStatusText || "IDLE"));
    setNumber("HP water calibration remaining", state.commissioning.hpWaterCalibrationRemaining, "s");
    setNumber("HP water calibration phase", state.commissioning.hpWaterCalibrationPhase, "");
    setNumber("HP water calibration spread", state.commissioning.hpWaterCalibrationSpread, "\u00B0C");
    setNumber("HP water calibration supply delta", state.commissioning.hpWaterCalibrationSupplyDelta, "\u00B0C");
    setNumber("HP water calibration stable window progress", state.commissioning.hpWaterCalibrationStableProgress, "s");
    setNumber("HP water calibration stable window required", state.commissioning.hpWaterCalibrationStableRequired, "s");
    setNumber("HP water calibration result reference", state.commissioning.hpWaterCalibrationResultReference, "\u00B0C");
    setNumber("HP water calibration result spread before", state.commissioning.hpWaterCalibrationResultSpreadBefore, "\u00B0C");
    setNumber("HP water calibration result expected spread", state.commissioning.hpWaterCalibrationResultExpectedSpread, "\u00B0C");
    setNumber("HP water calibration result HP1 water in raw average", state.commissioning.hpWaterCalibrationResultRawAverages.hp1In, "\u00B0C");
    setNumber("HP water calibration result HP1 water out raw average", state.commissioning.hpWaterCalibrationResultRawAverages.hp1Out, "\u00B0C");
    setNumber("HP water calibration result HP2 water in raw average", state.commissioning.hpWaterCalibrationResultRawAverages.hp2In, "\u00B0C");
    setNumber("HP water calibration result HP2 water out raw average", state.commissioning.hpWaterCalibrationResultRawAverages.hp2Out, "\u00B0C");
    setNumber("HP calibration HP1 water in offset suggested", state.commissioning.hpWaterCalibrationSuggested.hp1In, "\u00B0C");
    setNumber("HP calibration HP1 water out offset suggested", state.commissioning.hpWaterCalibrationSuggested.hp1Out, "\u00B0C");
    setNumber("HP calibration HP2 water in offset suggested", state.commissioning.hpWaterCalibrationSuggested.hp2In, "\u00B0C");
    setNumber("HP calibration HP2 water out offset suggested", state.commissioning.hpWaterCalibrationSuggested.hp2Out, "\u00B0C");
  }

  function generateAuthToken() {
    const bytes = new Uint8Array(12);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function isAuthRecoveryWindowActive() {
    return Date.now() < Number(state.auth.recoveryUntil || 0);
  }

  function refreshAuthToken() {
    state.auth.csrfToken = generateAuthToken();
  }

  function refreshApiSecurityToken() {
    state.apiSecurity.csrfToken = generateAuthToken();
  }

  function getAuthStatusPayload() {
    return {
      enabled: Boolean(state.auth.enabled),
      setup_window_active: isAuthRecoveryWindowActive(),
      username: String(state.auth.username || ""),
      source: String(state.auth.source || ""),
      csrf_token: String(state.auth.csrfToken || ""),
    };
  }

  function armAuthRecoveryWindow(durationMs = OPENQUATT_AUTH_RECOVERY_WINDOW_MS) {
    state.auth.recoveryUntil = Date.now() + Math.max(0, Number(durationMs) || 0);
    refreshAuthToken();
  }

  function parseAuthFormBody(init) {
    const body = init && typeof init === "object" ? init.body : "";
    if (typeof body === "string") {
      return new URLSearchParams(body);
    }
    if (body instanceof URLSearchParams) {
      return body;
    }
    return new URLSearchParams();
  }

  function parseBulkEntityFormBody(init) {
    return parseAuthFormBody(init);
  }

  function handleBulkEntities(init) {
    const params = parseBulkEntityFormBody(init || {});
    const lines = String(params.get("entities") || "").split(/\r?\n/);
    const responseEntities = {};
    const missing = [];

    lines.forEach((line) => {
      const [key, domain, name] = String(line || "").split("\t");
      const normalizedKey = String(key || "").trim();
      const normalizedDomain = String(domain || "").trim();
      const normalizedName = String(name || "").trim();
      if (!normalizedKey || !normalizedDomain || !normalizedName) {
        return;
      }

      const entity = getEntity(normalizedDomain, normalizedName);
      if (entity) {
        responseEntities[normalizedKey] = clone(entity);
      } else {
        missing.push(normalizedKey);
      }
    });

    return mockResponse(200, {
      entities: responseEntities,
      missing,
    });
  }

  function makeAuthResponse(status, payload) {
    return mockResponse(status, payload);
  }

  function handleAuthStatus() {
    return makeAuthResponse(200, getAuthStatusPayload());
  }

  function handleAuthChange(init) {
    const params = parseAuthFormBody(init);
    const status = getAuthStatusPayload();
    if (params.get("csrf_token") !== status.csrf_token) {
      return makeAuthResponse(403, { ok: false, error: "forbidden" });
    }

    const currentPassword = String(params.get("current_password") || "");
    const newUsername = String(params.get("new_username") || "").trim();
    const newPassword = String(params.get("new_password") || "");

    if (!state.auth.enabled && !status.setup_window_active) {
      return makeAuthResponse(403, { ok: false, error: "setup_window_required" });
    }
    if (state.auth.enabled && currentPassword !== state.auth.password) {
      return makeAuthResponse(403, { ok: false, error: "invalid_current_password" });
    }
    if (!newUsername || !newPassword) {
      return makeAuthResponse(400, { ok: false, error: "missing_fields" });
    }

    state.auth.enabled = true;
    state.auth.username = newUsername;
    state.auth.password = newPassword;
    state.auth.source = "runtime-credentials";
    state.auth.recoveryUntil = 0;
    refreshAuthToken();
    return makeAuthResponse(200, {
      ok: true,
      status: getAuthStatusPayload(),
    });
  }

  function handleAuthDisable(init) {
    const params = parseAuthFormBody(init);
    const status = getAuthStatusPayload();
    if (params.get("csrf_token") !== status.csrf_token) {
      return makeAuthResponse(403, { ok: false, error: "forbidden" });
    }
    if (!state.auth.enabled) {
      return makeAuthResponse(409, { ok: false, error: "already_disabled" });
    }
    if (String(params.get("current_password") || "") !== state.auth.password) {
      return makeAuthResponse(403, { ok: false, error: "invalid_current_password" });
    }

    state.auth.enabled = false;
    state.auth.username = "";
    state.auth.password = "";
    state.auth.source = "runtime-disabled";
    state.auth.recoveryUntil = 0;
    refreshAuthToken();
    return makeAuthResponse(200, {
      ok: true,
      status: getAuthStatusPayload(),
    });
  }

  function generateApiKey() {
    const bytes = new Uint8Array(32);
    window.crypto.getRandomValues(bytes);
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return window.btoa(binary);
  }

  function getApiSecurityStatusPayload() {
    return {
      enabled: Boolean(state.apiSecurity.enabled),
      transport_active: Boolean(state.apiSecurity.transportActive),
      pending_restart: Boolean(state.apiSecurity.pendingRestart),
      key: String(state.apiSecurity.key || ""),
      source: String(state.apiSecurity.source || ""),
      csrf_token: String(state.apiSecurity.csrfToken || ""),
    };
  }

  function handleApiSecurityStatus() {
    return makeAuthResponse(200, getApiSecurityStatusPayload());
  }

  function handleApiSecurityEnable(init) {
    const params = parseAuthFormBody(init);
    const status = getApiSecurityStatusPayload();
    if (params.get("csrf_token") !== status.csrf_token) {
      return makeAuthResponse(403, { ok: false, error: "forbidden" });
    }

    if (!state.apiSecurity.key) {
      state.apiSecurity.key = generateApiKey();
    }
    state.apiSecurity.enabled = true;
    state.apiSecurity.pendingRestart = true;
    state.apiSecurity.source = "runtime-enabled";
    refreshApiSecurityToken();
    return makeAuthResponse(200, {
      ok: true,
      status: getApiSecurityStatusPayload(),
    });
  }

  function handleApiSecurityRotate(init) {
    const params = parseAuthFormBody(init);
    const status = getApiSecurityStatusPayload();
    if (params.get("csrf_token") !== status.csrf_token) {
      return makeAuthResponse(403, { ok: false, error: "forbidden" });
    }

    state.apiSecurity.key = generateApiKey();
    state.apiSecurity.enabled = true;
    state.apiSecurity.pendingRestart = true;
    state.apiSecurity.source = "runtime-rotated";
    refreshApiSecurityToken();
    return makeAuthResponse(200, {
      ok: true,
      status: getApiSecurityStatusPayload(),
    });
  }

  function handleApiSecurityDisable(init) {
    const params = parseAuthFormBody(init);
    const status = getApiSecurityStatusPayload();
    if (params.get("csrf_token") !== status.csrf_token) {
      return makeAuthResponse(403, { ok: false, error: "forbidden" });
    }

    state.apiSecurity.enabled = false;
    state.apiSecurity.pendingRestart = true;
    state.apiSecurity.source = "runtime-disabled";
    refreshApiSecurityToken();
    return makeAuthResponse(200, {
      ok: true,
      status: getApiSecurityStatusPayload(),
    });
  }

  function getMockReleaseUrl(channel) {
    return channel === "dev"
      ? "https://github.com/jeroen85/OpenQuatt/releases/download/dev-latest/manifest.json"
      : "https://github.com/jeroen85/OpenQuatt/releases/latest";
  }

  function syncOverviewTelemetry(single) {
    const hp1Outside = Number(getEntity("sensor", "HP1 - Outside temperature")?.value);
    const hp2Outside = Number(getEntity("sensor", "HP2 - Outside temperature")?.value);
    const hpOutlet = Number(getEntity("sensor", single ? "HP1 - Water out temperature" : "HP2 - Water out temperature")?.value);
    const supplyTemp = Number(getEntity("sensor", "Water Supply Temp (Selected)")?.value);
    const flowLph = Number(getEntity("sensor", "Flow average (Selected)")?.value);
    const totalHeat = Number(getEntity("sensor", "Total Heat Power")?.value);
    const totalPower = Number(getEntity("sensor", "Total Power Input")?.value);
    const strategy = String(getEntity("select", "Heating Control Mode")?.value || "");
    const roomTemp = Number(getEntity("sensor", "Room Temperature (Selected)")?.value);
    const roomSetpoint = Number(getEntity("sensor", "Room Setpoint (Selected)")?.value);
    const housePower = Number(getEntity("number", "Rated maximum house power")?.value);
    const houseCold = Number(getEntity("number", "House cold temp")?.value);
    const outdoorMax = Number(getEntity("number", "Maximum heating outdoor temperature")?.value);
    const kp = Number(getEntity("number", "Power House temperature reaction")?.value);
    const selectedOutside = single || Number.isNaN(hp2Outside)
      ? hp1Outside
      : Number(((hp1Outside + hp2Outside) / 2).toFixed(1));

    let houseModel = 0;
    if (
      !Number.isNaN(selectedOutside)
      && !Number.isNaN(houseCold)
      && !Number.isNaN(outdoorMax)
      && !Number.isNaN(housePower)
      && outdoorMax > houseCold
    ) {
      const ratio = Math.max(0, Math.min(1, (outdoorMax - selectedOutside) / (outdoorMax - houseCold)));
      houseModel = Math.round(housePower * ratio);
    }

    const roomDelta = Number.isNaN(roomSetpoint) || Number.isNaN(roomTemp) ? 0 : roomSetpoint - roomTemp;
    const roomCorrection = Number.isNaN(kp) ? 0 : Math.round(Math.max(-1500, Math.min(1500, roomDelta * kp)));
    const powerHouseRequested = Math.max(0, Math.round(houseModel + roomCorrection));
    const strategyRequested = state.scenario === "cooling"
      ? 0
      : Math.max(0, Math.round(strategy === "Power House" ? powerHouseRequested : totalHeat || 0));

    let capacity = 0;
    if (state.scenario === "idle") {
      capacity = single ? 2800 : 5200;
    } else if (state.scenario === "heating") {
      capacity = single ? 3200 : 5200;
    } else if (state.scenario === "dual") {
      capacity = 5200;
    } else if (state.scenario === "defrost") {
      capacity = single ? 1800 : 3200;
    } else if (state.scenario === "cooling") {
      capacity = single ? 2600 : 4200;
    }

    setNumber("Outside Temperature (Selected)", selectedOutside, "°C");
    setNumber("Power House – P_house", state.scenario === "cooling" ? 0 : houseModel, "W");
    setNumber("Power House – P_req", state.scenario === "cooling" ? 0 : powerHouseRequested, "W");
    setNumber("Strategy requested power", strategyRequested, "W");
    setNumber("HP capacity (W)", capacity, "W");
    setNumber("HP deficit (W)", Math.max(0, strategyRequested - capacity), "W");

    const boilerAssistEnabled = isSwitchEnabled("Boiler assist enabled");
    const boilerActive = boilerAssistEnabled && state.boiler === "on";
    const boilerDelta = Number.isNaN(supplyTemp) || Number.isNaN(hpOutlet) ? 0 : supplyTemp - hpOutlet;
    const boilerHeat = boilerActive && !Number.isNaN(flowLph)
      ? Number(Math.max(0, (flowLph / 3600) * 4186 * boilerDelta).toFixed(1))
      : 0;
    const systemHeat = Math.max(0, Number((Number(totalHeat || 0) + boilerHeat).toFixed(0)));
    const electricalDaily = state.scenario === "idle" ? 3.1 : state.scenario === "defrost" ? 6.4 : state.scenario === "cooling" ? (single ? 6.8 : 8.1) : single ? 7.2 : 8.6;
    const heatpumpDaily = state.scenario === "idle" ? 9.4 : state.scenario === "defrost" ? 18.2 : state.scenario === "cooling" ? (single ? 24.6 : 31.8) : single ? 28.4 : 36.9;
    const coolingElectricalDaily = state.scenario === "cooling" ? (single ? 1.8 : 2.4) : 0.0;
    const coolingDaily = state.scenario === "cooling" ? (single ? 7.1 : 9.3) : 0.0;
    const boilerDaily = boilerActive ? 2.7 : 0.0;
    const systemDaily = Number((heatpumpDaily + boilerDaily).toFixed(1));
    const heatpumpCopDaily = electricalDaily > 0 ? Number((heatpumpDaily / electricalDaily).toFixed(2)) : 0;
    const heatpumpEerDaily = coolingElectricalDaily > 0 ? Number((coolingDaily / coolingElectricalDaily).toFixed(2)) : 0;
    const electricalCumulative = single ? 286.4 : 469.5;
    const heatpumpCumulative = single ? 1208.7 : 2048.6;
    const coolingElectricalCumulative = state.scenario === "cooling" ? (single ? 28.6 : 41.9) : 0.0;
    const coolingCumulative = state.scenario === "cooling" ? (single ? 109.4 : 163.7) : 0.0;
    const boilerCumulative = boilerActive ? 114.8 : 0.0;
    const systemCumulative = Number((heatpumpCumulative + boilerCumulative).toFixed(1));
    const heatpumpCopCumulative = electricalCumulative > 0 ? Number((heatpumpCumulative / electricalCumulative).toFixed(2)) : 0;
    const heatpumpEerCumulative = coolingElectricalCumulative > 0 ? Number((coolingCumulative / coolingElectricalCumulative).toFixed(2)) : 0;
    const heatingElectricalDaily = Math.max(0, Number((electricalDaily - coolingElectricalDaily).toFixed(1)));
    const heatingElectricalCumulative = Math.max(0, Number((electricalCumulative - coolingElectricalCumulative).toFixed(1)));
    const totalCoolingPower = state.scenario === "cooling" ? Math.max(0, Number(totalHeat || 0)) : 0;
    const totalEer = (state.scenario === "cooling" && coolingElectricalDaily > 0)
      ? Number((coolingDaily / coolingElectricalDaily).toFixed(2))
      : 0;

    setNumber("Boiler Heat Power", boilerHeat, "W");
    setBinary("Boiler active", boilerActive);
    setNumber("System Heat Power", systemHeat, "W");
    setNumber("Heating Power Input", state.scenario === "cooling" ? 0 : (Number.isNaN(totalPower) ? 0 : totalPower), "W");
    setNumber("Cooling Power Input", state.scenario === "cooling" ? (Number.isNaN(totalPower) ? 0 : totalPower) : 0, "W");
    setNumber("Electrical Energy Daily", electricalDaily, "kWh");
    setNumber("Electrical Energy Cumulative", electricalCumulative, "kWh");
    setNumber("Heating Electrical Energy Daily", heatingElectricalDaily, "kWh");
    setNumber("Heating Electrical Energy Cumulative", heatingElectricalCumulative, "kWh");
    setNumber("Cooling Electrical Energy Daily", coolingElectricalDaily, "kWh");
    setNumber("Cooling Electrical Energy Cumulative", coolingElectricalCumulative, "kWh");
    setNumber("HeatPump Thermal Energy Daily", heatpumpDaily, "kWh");
    setNumber("HeatPump Thermal Energy Cumulative", heatpumpCumulative, "kWh");
    setNumber("HeatPump Cooling Energy Daily", coolingDaily, "kWh");
    setNumber("HeatPump Cooling Energy Cumulative", coolingCumulative, "kWh");
    setNumber("HeatPump COP Daily", heatpumpCopDaily, "");
    setNumber("HeatPump COP Cumulative", heatpumpCopCumulative, "");
    setNumber("HeatPump EER Daily", heatpumpEerDaily, "");
    setNumber("HeatPump EER Cumulative", heatpumpEerCumulative, "");
    setNumber("Total Cooling Power", totalCoolingPower, "W");
    setNumber("Total EER", totalEer, "");
    setNumber("Boiler Thermal Energy Daily", boilerDaily, "kWh");
    setNumber("Boiler Thermal Energy Cumulative", boilerCumulative, "kWh");
    setNumber("System Thermal Energy Daily", systemDaily, "kWh");
    setNumber("System Thermal Energy Cumulative", systemCumulative, "kWh");
  }

  function seedEntities() {
    syncDevMeta();
    setEntity("text_sensor", "Summary", { state: "" });
    setEntity("text_sensor", "OpenQuatt Installation Topology", { state: state.installation, value: state.installation });
    setEntity("text_sensor", "OpenQuatt Hardware Profile", { state: state.hardware, value: state.hardware });
    setEntity("text_sensor", "OpenQuatt Connection", { state: state.connection, value: state.connection });
    setEntity("button", "Check Firmware Updates", { state: "" });
    setEntity("button", "Install Firmware Test OTA", { state: "" });
    setEntity("button", "Install Firmware Update Target", { state: "" });
    setEntity("button", "Restart", { state: "" });
    setEntity("button", "Acknowledge compressor cycling alert", { state: "" });
    setEntity("text", "Firmware Test OTA URL", { state: "", value: "" });
    setEntity("text", "Firmware Test OTA MD5 URL", { state: "", value: "" });
    setEntity("text_sensor", "OpenQuatt Version", { state: "v0.26.0", value: "v0.26.0" });
    setEntity("text_sensor", "OpenQuatt Release Channel", { state: "dev", value: "dev" });
    setEntity("sensor", "Uptime", { value: 0, uom: "h" });
    syncUptimeEntity();
    setEntity("sensor", "ESP Internal Temperature", { value: 37.8, uom: "°C" });
    setEntity("sensor", "Firmware Update Progress", { value: 0, uom: "%" });
    setEntity("text_sensor", "Firmware Update Status", { state: "Idle", value: "Idle" });
    setEntity("button", "Trendhistorie nu opslaan", { state: "" });
    setEntity("text_sensor", "Trendhistorie beschikbaar", { state: "18,4 dagen", value: "18,4 dagen" });
    setEntity("text_sensor", "Trendhistorie oudste punt", { state: "14-04 06:00", value: "14-04 06:00" });
    setEntity("text_sensor", "Trendhistorie nieuwste punt", { state: "2 min geleden", value: "2 min geleden" });
    setEntity("text_sensor", "Trendhistorie laatste opslag", { state: "02-05 11:35", value: "02-05 11:35" });
    setEntity("sensor", "Trendhistorie grootte", { value: 182.5, uom: "kB" });
    setEntity("sensor", "Trendhistorie schrijfacties", { value: 437 });
    if (!state.energyHistoryRecords.length) {
      state.energyHistoryRecords = buildEnergyHistoryRecords();
      state.energyHistoryWrites = state.energyHistoryRecords.length;
    }
    if (!state.energyHistoryHourRecords.length) {
      state.energyHistoryHourRecords = buildEnergyHistoryHourRecords();
    }
    setEntity("button", "Lifetime energiehistorie nu opslaan", { state: "" });
    setEntity("button", "Lifetime energiehistorie wissen", { state: "" });
    setEntity("select", "Uurdetail bewaren", {
      value: state.energyHistoryHourRetention,
      state: state.energyHistoryHourRetention,
      option: ["30 dagen", "90 dagen", "180 dagen", "365 dagen"],
    });
    const energyHistoryRecordCountText = `${state.energyHistoryRecords.length} records`;
    setEntity("text_sensor", "Lifetime energiehistorie beschikbaar", {
      state: energyHistoryRecordCountText,
      value: energyHistoryRecordCountText,
    });
    setEntity("text_sensor", "Lifetime energiehistorie oudste dag", { state: "", value: "" });
    setEntity("text_sensor", "Lifetime energiehistorie nieuwste dag", { state: "", value: "" });
    setEntity("text_sensor", "Lifetime energiehistorie laatste opslag", { state: "", value: "" });
    setEntity("sensor", "Lifetime energiehistorie grootte", { value: state.energyHistoryStoredKiB, uom: "kB" });
    setEntity("sensor", "Lifetime energiehistorie schrijfacties", { value: state.energyHistoryWrites });
    setEntity("update", "Firmware Update", {
      state: "available",
      value: "available",
      current_version: "v0.26.0",
      latest_version: "v0.26.1-dev3",
      title: "OpenQuatt firmware",
      summary: "Nieuwe firmware met verdere UI- en regelingverbeteringen staat klaar voor deze preview.",
      release_url: getMockReleaseUrl("dev"),
    });
    setEntity("binary_sensor", "Setup Complete", { value: state.complete, state: state.complete });
    setEntity("select", "Heating Control Mode", {
      value: "Power House",
      state: "Power House",
      option: ["Power House", "Water Temperature Control (heating curve)"],
    });
    setEntity("switch", "OpenQuatt Enabled", { value: true, state: true });
    setEntity("switch", "Boiler assist enabled", { value: true, state: true });
    setEntity("switch", "Manual Cooling Enable", { value: false, state: false });
    setEntity("switch", "CIC - Enable polling", { value: false, state: false });
    setEntity("text", "CIC - Feed URL", { value: "http://192.168.2.117:8080/beta/feed/data.json", state: "http://192.168.2.117:8080/beta/feed/data.json" });
    setEntity("switch", "OpenTherm Enabled", { value: false, state: false });
    setEntity("switch", "CiC Compatibility Mode", { value: false, state: false });
    setEntity("switch", "Trendopslag", { value: true, state: true });
    setEntity("switch", "Trendhistorie opslaan in flash", { value: true, state: true });
    setEntity("switch", "Lifetime energiehistorie opslaan", { value: true, state: true });
    setEntity("switch", "RAM log history", { value: true, state: true });
    updateEnergyHistoryStats();
    setEntity("select", "Debug Level", {
      value: "INFO",
      state: "INFO",
      option: ["NONE", "ERROR", "WARN", "INFO", "CONFIG", "DEBUG"],
    });
    setEntity("select", "Silent Mode Override", {
      value: "Schedule",
      state: "Schedule",
      option: ["Schedule", "On", "Off"],
    });
    setEntity("select", "Flow Control Mode", {
      value: "Flow Setpoint",
      state: "Flow Setpoint",
      option: ["Flow Setpoint", "Manual PWM"],
    });
    setEntity("text_sensor", "Commissioning status", { state: "IDLE", value: "IDLE" });
    setEntity("binary_sensor", "CM100 active", { value: false, state: false });
    setEntity("button", "CM100 Start", {});
    setEntity("button", "CM100 Stop", {});
    setEntity("button", "Boiler Power Test Start", {});
    setEntity("button", "Boiler Power Test Abort", {});
    setEntity("button", "Boiler Power Test Apply", {});
    setEntity("button", "Flow Autotune Start", {});
    setEntity("button", "Flow Autotune Abort", {});
    setEntity("button", "Apply Flow Autotune Kp-Ki", {});
    setEntity("button", "Air Purge Start", {});
    setEntity("button", "Air Purge Abort", {});
    setEntity("button", "Manual Flow Start", {});
    setEntity("button", "Manual Flow Abort", {});
    setEntity("button", "Apply Manual Flow To Heating", {});
    setEntity("button", "Apply Manual Flow To Cooling", {});
    setEntity("switch", "Quick flow test", { value: false, state: false });
    setEntity("button", "Manual HP Start", {});
    setEntity("button", "Manual HP Abort", {});
    setEntity("button", "HP Water Calibration Start", {});
    setEntity("button", "HP Water Calibration Abort", {});
    setEntity("button", "Apply HP Water Calibration Offsets", {});
    setEntity("switch", "Air purge return to Auto", { value: true, state: true });
    setEntity("binary_sensor", "Boiler power test active", { value: false, state: false });
    setEntity("text_sensor", "Boiler power test status", { state: "IDLE", value: "IDLE" });
    setEntity("sensor", "Boiler power test result", { value: 0, uom: "W" });
    setEntity("sensor", "Boiler power test confidence", { value: 0, uom: "%" });
    setEntity("text_sensor", "Flow Autotune status", { state: "IDLE", value: "IDLE" });
    setEntity("number", "Flow Autotune Kp suggested", { value: 0, min_value: 0, max_value: 5, step: 0.01, uom: "" });
    setEntity("number", "Flow Autotune Ki suggested", { value: 0, min_value: 0, max_value: 5, step: 0.01, uom: "" });
    setEntity("binary_sensor", "Air purge active", { value: false, state: false });
    setEntity("text_sensor", "Air purge status", { state: "IDLE", value: "IDLE" });
    setEntity("sensor", "Air purge remaining", { value: 0, uom: "s" });
    setEntity("sensor", "Air purge phase", { value: 0, uom: "" });
    setEntity("sensor", "Air purge target iPWM", { value: 0, uom: "iPWM" });
    setEntity("binary_sensor", "Manual flow active", { value: false, state: false });
    setEntity("text_sensor", "Manual flow status", { state: "IDLE", value: "IDLE" });
    setEntity("sensor", "Manual flow target iPWM", { value: 400, uom: "iPWM" });
    setEntity("binary_sensor", "Manual HP active", { value: false, state: false });
    setEntity("text_sensor", "Manual HP status", { state: "IDLE", value: "IDLE" });
    setEntity("text_sensor", "Manual HP guard status", { state: "Vrijgegeven", value: "Vrijgegeven" });
    setEntity("select", "Manual HP1 service mode", { value: "Standby", state: "Standby", option: ["Standby", "Heating", "Cooling"] });
    setEntity("select", "Manual HP2 service mode", { value: "Standby", state: "Standby", option: ["Standby", "Heating", "Cooling"] });
    setEntity("binary_sensor", "HP water calibration active", { value: false, state: false });
    setEntity("text_sensor", "HP water calibration status", { state: "IDLE", value: "IDLE" });
    setEntity("sensor", "HP water calibration remaining", { value: 0, uom: "s" });
    setEntity("sensor", "HP water calibration phase", { value: 0, uom: "" });
    setEntity("sensor", "HP water calibration spread", { value: NaN, uom: "\u00B0C" });
    setEntity("sensor", "HP water calibration supply delta", { value: NaN, uom: "\u00B0C" });
    setEntity("sensor", "HP water calibration stable window progress", { value: 0, uom: "s" });
    setEntity("sensor", "HP water calibration stable window required", { value: 60, uom: "s" });
    setEntity("sensor", "HP water calibration result reference", { value: NaN, uom: "\u00B0C" });
    setEntity("sensor", "HP water calibration result spread before", { value: NaN, uom: "\u00B0C" });
    setEntity("sensor", "HP water calibration result expected spread", { value: NaN, uom: "\u00B0C" });
    setEntity("sensor", "HP water calibration result HP1 water in raw average", { value: NaN, uom: "\u00B0C" });
    setEntity("sensor", "HP water calibration result HP1 water out raw average", { value: NaN, uom: "\u00B0C" });
    setEntity("sensor", "HP water calibration result HP2 water in raw average", { value: NaN, uom: "\u00B0C" });
    setEntity("sensor", "HP water calibration result HP2 water out raw average", { value: NaN, uom: "\u00B0C" });
    setEntity("number", "HP1 water in temperature offset", { value: 0, min_value: -5, max_value: 5, step: 0.01, uom: "\u00B0C" });
    setEntity("number", "HP1 water out temperature offset", { value: 0, min_value: -5, max_value: 5, step: 0.01, uom: "\u00B0C" });
    setEntity("number", "HP2 water in temperature offset", { value: 0, min_value: -5, max_value: 5, step: 0.01, uom: "\u00B0C" });
    setEntity("number", "HP2 water out temperature offset", { value: 0, min_value: -5, max_value: 5, step: 0.01, uom: "\u00B0C" });
    setEntity("number", "HP calibration HP1 water in offset suggested", { value: 0, min_value: -5, max_value: 5, step: 0.01, uom: "\u00B0C" });
    setEntity("number", "HP calibration HP1 water out offset suggested", { value: 0, min_value: -5, max_value: 5, step: 0.01, uom: "\u00B0C" });
    setEntity("number", "HP calibration HP2 water in offset suggested", { value: 0, min_value: -5, max_value: 5, step: 0.01, uom: "\u00B0C" });
    setEntity("number", "HP calibration HP2 water out offset suggested", { value: 0, min_value: -5, max_value: 5, step: 0.01, uom: "\u00B0C" });
    setEntity("select", "Quatt Hybrid version", {
      value: "V1.5",
      state: "V1.5",
      option: ["V1", "V1.5", "V2"],
    });
    setEntity("text_sensor", "Control Mode (Label)", { state: "CM98" });
    setEntity("text_sensor", "Cooling Block Reason", { state: "Ready", value: "Ready" });
    setEntity("text_sensor", "Cooling Guard Mode", { state: "Dew point", value: "Dew point" });
    setEntity("text_sensor", "Flow Mode", { state: "Adaptive" });
    setEntity("select", "Behavior", {
      value: "Balanced",
      state: "Balanced",
      option: ["Quiet", "Balanced", "Fast response"],
    });
    setEntity("select", "Power House response profile", {
      value: "Balanced",
      state: "Balanced",
      option: ["Calm", "Balanced", "Responsive", "Custom"],
    });
    setEntity("select", "Heating Curve Control Profile", {
      value: "Balanced",
      state: "Balanced",
      option: ["Comfort", "Balanced", "Stable"],
    });
    setEntity("select", "Cooling Without Dew Point", {
      value: "Dew point required",
      state: "Dew point required",
      option: [
        "Dew point required",
        "Allow without dew point, use dew point approximation",
        "Allow without dew point, user responsibility",
      ],
    });
    setEntity("select", "Water Supply Source", {
      value: "Local",
      state: "Local",
      option: ["Local", "CIC", "HA input"],
    });
    setEntity("select", "Local Water Supply Temp Source", {
      value: "PT1000",
      state: "PT1000",
      option: ["PT1000", "DS18B20"],
    });
    setEntity("select", "Flow Source", {
      value: "Outdoor unit",
      state: "Outdoor unit",
      option: ["Outdoor unit", "CIC"],
    });
    setEntity("select", "Q Flow Source", {
      value: "Auto",
      state: "Auto",
      option: ["Auto", "Local", "Outdoor unit"],
    });
    setEntity("select", "Outdoor Unit Flow Mode", {
      value: "Local aggregate HP1/HP2",
      state: "Local aggregate HP1/HP2",
      option: ["Flowmeter HP1", "Flowmeter HP2", "Local aggregate HP1/HP2"],
    });
    setEntity("select", "Outside Temperature Source", {
      value: "Auto",
      state: "Auto",
      option: ["Auto", "Outdoor unit", "HA input"],
    });
    setEntity("select", "Room Temperature Source", {
      value: "OT thermostat",
      state: "OT thermostat",
      option: ["CIC", "OT thermostat", "HA input"],
    });
    setEntity("select", "Room Setpoint Source", {
      value: "OT thermostat",
      state: "OT thermostat",
      option: ["CIC", "OT thermostat", "HA input"],
    });
    setEntity("select", "Cooling Enable Source", {
      value: "HA input",
      state: "HA input",
      option: ["CIC", "HA input", "CIC or HA input"],
    });
    setEntity("select", "Heating Enable Source", {
      value: "Disabled",
      state: "Disabled",
      option: ["Disabled", "OT thermostat", "CIC", "HA input"],
    });
    setEntity("select", "Firmware Update Channel", {
      value: "dev",
      state: "dev",
      option: ["main", "dev"],
    });
    setEntity("select", "Firmware Update Target", {
      value: "current build",
      state: "current build",
      option: ["current build", "alternate connection"],
    });
    setEntity("select", "Preset", {
      value: "Balanced",
      state: "Balanced",
      option: ["Quiet", "Balanced", "High output", "Custom"],
    });
    setEntity("select", "HP1 - Excluded compressor level A", {
      value: "None",
      state: "None",
      option: COMPRESSOR_LEVEL_OPTIONS,
    });
    setEntity("select", "HP1 - Excluded compressor level B", {
      value: "None",
      state: "None",
      option: COMPRESSOR_LEVEL_OPTIONS,
    });

    [
      ["Flow Setpoint", 800, 0, 1500, 10, "L/h"],
      ["Cooling Flow Setpoint", 800, 0, 1500, 10, "L/h"],
      ["Manual flow service setpoint", 800, 0, 1500, 10, "L/h"],
      ["Manual HP1 compressor level", 0, 0, 10, 1, ""],
      ["Manual HP2 compressor level", 0, 0, 10, 1, ""],
      ["Manual iPWM", 400, 50, 850, 1, "iPWM"],
      ["Flow PI Kp", 0.35, 0, 5, 0.01, ""],
      ["Flow PI Ki", 0.05, 0, 5, 0.01, ""],
      ["Boiler rated heat power", 1800, 500, 10000, 100, "W"],
      ["Day max level", 10, 0, 10, 1, ""],
      ["Silent max level", 6, 0, 10, 1, ""],
      ["Maximum water temperature", 56, 25, 75, 1, "°C"],
      ["Minimum runtime", 300, 300, 3600, 30, "s"],
      ["Compressor starts 2h warning limit", 6, 1, 20, 1, ""],
      ["Compressor starts 72h warning limit", 40, 1, 120, 1, ""],
      ["Rated maximum house power", 4500, 500, 12000, 100, "W"],
      ["House cold temp", -10, -25, 5, 0.5, "°C"],
      ["Maximum heating outdoor temperature", 16, -10, 25, 1, "°C"],
      ["Power House temperature reaction", 3000, 0, 4000, 10, "W/K"],
      ["Power House comfort below setpoint", 0.1, 0, 2, 0.05, "°C"],
      ["Power House comfort above setpoint", 0.3, 0, 2, 0.05, "°C"],
      ["Power House demand rise time", 8, 2, 20, 1, "min"],
      ["Power House demand fall time", 3, 1, 10, 1, "min"],
      ["Cooling Minimum Supply Temp", 18, 5, 24, 0.5, "°C"],
      ["Cooling Demand Max", 4, 1, 10, 1, "step"],
      ["Cooling Restart Delta", 1.0, 0, 2, 0.1, "°C"],
      ["Cooling Request On Delta", 0.4, 0, 2, 0.1, "°C"],
      ["Cooling Request Off Delta", 0.1, 0, 2, 0.1, "°C"],
      ["Cooling Safety Margin", 2, 0, 4, 0.1, "°C"],
      ["Curve Tsupply @ -20°C", 48, 20, 70, 1, "°C"],
      ["Curve Tsupply @ -10°C", 43, 20, 70, 1, "°C"],
      ["Curve Tsupply @ 0°C", 38, 20, 70, 1, "°C"],
      ["Curve Tsupply @ 5°C", 34, 20, 70, 1, "°C"],
      ["Curve Tsupply @ 10°C", 30, 20, 70, 1, "°C"],
      ["Curve Tsupply @ 15°C", 27, 20, 70, 1, "°C"],
      ["Curve Fallback Tsupply (No Outside Temp)", 40, 25, 70, 0.5, "°C"],
    ].forEach(([name, value, min, max, step, uom]) => {
      setEntity("number", name, {
        value,
        min_value: min,
        max_value: max,
        step,
        uom,
      });
    });

    [
      ["Silent start time", "19:00:00"],
      ["Silent end time", "07:00:00"],
    ].forEach(([name, value]) => {
      setEntity("time", name, {
        value,
        state: value,
      });
    });
    setEntity("datetime", "OpenQuatt resume at", {
      value: OPENQUATT_RESUME_CLEAR_VALUE,
      state: OPENQUATT_RESUME_CLEAR_VALUE,
    });

    [
      ["Total Power Input", 0, "W"],
      ["Heating Power Input", 0, "W"],
      ["Cooling Power Input", 0, "W"],
      ["Total COP", 0, ""],
      ["Total EER", 0, ""],
      ["Total Heat Power", 0, "W"],
      ["Total Cooling Power", 0, "W"],
      ["Boiler Heat Power", 0, "W"],
      ["System Heat Power", 0, "W"],
      ["Strategy requested power", 0, "W"],
      ["HP capacity (W)", 0, "W"],
      ["HP deficit (W)", 0, "W"],
      ["Electrical Energy Daily", 0, "kWh"],
      ["Electrical Energy Cumulative", 0, "kWh"],
      ["Heating Electrical Energy Daily", 0, "kWh"],
      ["Heating Electrical Energy Cumulative", 0, "kWh"],
      ["Cooling Electrical Energy Daily", 0, "kWh"],
      ["Cooling Electrical Energy Cumulative", 0, "kWh"],
      ["HeatPump Thermal Energy Daily", 0, "kWh"],
      ["HeatPump Thermal Energy Cumulative", 0, "kWh"],
      ["HeatPump Cooling Energy Daily", 0, "kWh"],
      ["HeatPump Cooling Energy Cumulative", 0, "kWh"],
      ["HeatPump COP Daily", 0, ""],
      ["HeatPump COP Cumulative", 0, ""],
      ["HeatPump EER Daily", 0, ""],
      ["HeatPump EER Cumulative", 0, ""],
      ["Boiler Thermal Energy Daily", 0, "kWh"],
      ["Boiler Thermal Energy Cumulative", 0, "kWh"],
      ["System Thermal Energy Daily", 0, "kWh"],
      ["System Thermal Energy Cumulative", 0, "kWh"],
      ["Flow average (Selected)", 0, "L/h"],
      ["Flow average (local)", 0, "L/h"],
      ["Controller Flow", 0, "L/h"],
      ["OT - Control Setpoint", 30.0, "\u00B0C"],
      ["OT - Room Setpoint", 20.0, "\u00B0C"],
      ["OT - Room Temperature", 20.9, "\u00B0C"],
      ["CIC - Water Supply Temp", 29.5, "\u00B0C"],
      ["CIC - Control setpoint", 30.0, "\u00B0C"],
      ["CIC - Room setpoint", 20.0, "\u00B0C"],
      ["CIC - Room temperature", 20.9, "\u00B0C"],
      ["CIC - Flowrate (filtered)", 785, "L/h"],
      ["CIC - Last success age", 12, "s"],
      ["HA - Outside Temperature", 15.5, "\u00B0C"],
      ["HA - Water Supply Temperature", 28.9, "\u00B0C"],
      ["HA - Thermostat Setpoint", 20.0, "\u00B0C"],
      ["HA - Thermostat Room Temperature", 21.2, "\u00B0C"],
      ["Room Temperature (Selected)", 20.6, "°C"],
      ["Room Setpoint (Selected)", 21.0, "°C"],
      ["Water Supply Temp (Selected)", 29.5, "°C"],
      ["Outside Temperature (Selected)", 8.2, "°C"],
      ["Heating Curve Supply Target", 33.0, "°C"],
      ["Power House – P_house", 2500, "W"],
      ["Power House – P_req", 2800, "W"],
      ["Cooling Dew Point (Selected)", 16.1, "°C"],
      ["Cooling Minimum Safe Supply Temp", 18.1, "°C"],
      ["Cooling Effective Minimum Supply Temp", 18.1, "°C"],
      ["Cooling Fallback Night Minimum Outdoor Temp", 14.3, "°C"],
      ["Cooling Fallback Minimum Supply Temp", 19.0, "°C"],
      ["Cooling Supply Target", 18.0, "°C"],
      ["Cooling Supply Error", 0.9, "°C"],
      ["Cooling Demand (raw)", 2, ""],
      ["HP1 - Power Input", 0, "W"],
      ["HP1 - Heat Power", 0, "W"],
      ["HP1 - Cooling Power", 0, "W"],
      ["HP1 - COP", 0, ""],
      ["HP1 compressor level", 0, ""],
      ["HP1 - Compressor frequency", 0, "Hz"],
      ["HP1 - Compressor starts 2h", 3, ""],
      ["HP1 - Compressor starts 6h", 11, ""],
      ["HP1 - Compressor starts 24h", 29, ""],
      ["HP1 - Compressor starts 72h", 40, ""],
      ["HP1 - Compressor last start age", 12, "min"],
      ["Compressor cycling alert first seen", 0, "s"],
      ["Compressor cycling alert last seen", 0, "s"],
      ["Compressor cycling alert HP1 peak 2h", 0, ""],
      ["Compressor cycling alert HP1 peak 72h", 0, ""],
      ["Compressor cycling alert HP2 peak 2h", 0, ""],
      ["Compressor cycling alert HP2 peak 72h", 0, ""],
      ["HP1 - Fan speed", 0, "rpm"],
      ["HP1 - Flow", 0, "L/h"],
      ["Water Supply Temp", 29.5, "\u00B0C"],
      ["Water Supply Temp (PT1000)", 29.5, "\u00B0C"],
      ["Water Supply Temp (DS18B20)", 29.2, "\u00B0C"],
      ["Outside Temperature (Local aggregated)", 15.8, "\u00B0C"],
      ["HP1 - Evaporator coil temperature", 0, "\u00B0C"],
      ["HP1 - Inner coil temperature", 0, "\u00B0C"],
      ["HP1 - Outside temperature", 0, "\u00B0C"],
      ["HP1 - Condenser pressure", 0, "bar"],
      ["HP1 - Gas discharge temperature", 0, "\u00B0C"],
      ["HP1 - Evaporator pressure", 0, "bar"],
      ["HP1 - Gas return temperature", 0, "\u00B0C"],
      ["HP1 - EEV steps", 0, "p"],
      ["HP1 - Water in temperature", 25.5, "°C"],
      ["HP1 - Water out temperature", 29.5, "°C"],
      ["HP1 - Water in temperature raw", 25.5, "°C"],
      ["HP1 - Water out temperature raw", 29.5, "°C"],
    ].forEach(([name, value, uom]) => {
      setEntity("sensor", name, { value, uom });
    });

    [
      ["HP1 - Working Mode Label", "Standby"],
      ["HP1 - Active Failures List", "None"],
      ["Room Temperature Effective Source", "OT thermostat"],
      ["Room Setpoint Effective Source", "OT thermostat"],
      ["Heating Enable Effective Source", "None"],
      ["Cooling Enable Effective Source", "HA input"],
    ].forEach(([name, value]) => {
      setEntity("text_sensor", name, { state: value, value });
    });

    [
      ["Silent active", false],
      ["Sticky pump active", false],
      ["Cooling Enable (Selected)", false],
      ["Heating Enable (Selected)", true],
      ["Heating Enable Valid", true],
      ["Heating blocked by thermostat", false],
      ["Cooling Request Active", false],
      ["Cooling Permitted", false],
      ["Boiler active", false],
      ["Compressor cycling warning 2h", false],
      ["Compressor cycling warning 72h", false],
      ["Alternating compressor starts warning", false],
      ["Compressor cycling alert latched", false],
      ["Compressor cycling alert alternating", false],
      ["Lowflow fault active", false],
      ["Flow mismatch (HP1 vs HP2)", false],
      ["OT - Thermostat CH Enable", false],
      ["OT - Thermostat Status Valid", true],
      ["OT - Thermostat Cooling Enable", false],
      ["CIC - CH enabled", false],
      ["CIC - CH enable valid", true],
      ["CIC - Cooling enabled", false],
      ["CIC - JSON Feed OK", true],
      ["HA - Outside Temperature Valid", true],
      ["HA - Water Supply Temperature Valid", true],
      ["HA - Room Setpoint Valid", true],
      ["HA - Room Temperature Valid", true],
      ["HA - Heating Enable", false],
      ["HA - Heating Enable Valid", true],
      ["HA - Cooling Enable", false],
      ["HA - Cooling Enable Valid", true],
      ["CIC - Data stale", false],
      ["OT - Link Problem", false],
      ["HP1 - Defrost", false],
      ["HP1 - 4-Way valve", false],
      ["HP1 - Bottom plate heater", false],
      ["HP1 - Crankcase heater", false],
    ].forEach(([name, value]) => {
      setEntity("binary_sensor", name, { value });
    });

    seedOduRuntimeFrequencyEntities("HP1");
    seedHp2Entities();
    seedOduRuntimeFrequencyEntities("HP2");

    setEntity("button", "Complete setup", {});
    setEntity("button", "Reset setup state", {});
  }

  function seedHp2Entities() {
    HP2_ENTITIES.forEach(([domain, name, payload]) => {
      setEntity(domain, name, clone(payload));
    });
  }

  function clearHp2Entities() {
    HP2_ENTITIES.forEach(([domain, name]) => {
      entities.delete(entityKey(domain, name));
    });
  }

  function setInstallationMode(mode) {
    state.installation = mode === "single" ? "single" : "duo";
    setText("text_sensor", "OpenQuatt Installation Topology", state.installation);
    if (state.installation === "single") {
      clearHp2Entities();
      clearOduRuntimeFrequencyEntities("HP2");
      if (state.scenario === "dual") {
        state.scenario = "heating";
      }
    } else {
      seedHp2Entities();
      seedOduRuntimeFrequencyEntities("HP2");
    }
  }

  function syncDevMeta() {
    syncUptimeEntity();
    const updateEntity = getEntity("update", "Firmware Update");
    const updateAvailable = Boolean(
      updateEntity
      && String(updateEntity.latest_version || "").trim()
      && String(updateEntity.current_version || "").trim()
      && String(updateEntity.latest_version).trim() !== String(updateEntity.current_version).trim()
    );
    window.__OQ_DEV_META = {
      installation: state.installation,
      hardwareProfile: state.hardware,
      connection: state.connection,
      ipAddress: "192.168.2.123",
      bootedAt: state.bootedAt,
      updateAvailable,
      updateLabel: updateAvailable ? "Beschikbaar" : "Actueel",
    };
    window.__OQ_DEV_WEBSERVER_LOGS__ = [
      "[I][main:41] OpenQuatt web_server gestart",
      "[I][wifi:28] Verbonden met lokaal netwerk",
      "[D][web_server:91] Event stream beschikbaar op /events",
      "[I][control:77] Regeling actief",
      "[W][heatpump:203] Defrost actief, compressor tijdelijk uit",
      "[I][automation:118] Hervatmoment gepland",
      "[D][logger:65] Debuglog opgebouwd voor preview",
    ];
    if (!state.logHistoryEntries.length) {
      seedLogHistoryEntries();
    }
  }

  function notifyMockUpdated() {
    updateTrendFlashStats();
    updateEnergyHistoryStats();
    syncDevMeta();
    window.dispatchEvent(new Event("oq-mock-updated"));
  }

  function notifyDevControlsChanged() {
    window.dispatchEvent(new Event("oq-dev-controls-changed"));
  }

  function computePreset() {
    const behavior = getEntity("select", "Behavior").value;
    const day = Number(getEntity("number", "Day max level").value);
    const silent = Number(getEntity("number", "Silent max level").value);
    const near = (a, b) => Math.abs(a - b) < 0.25;

    if (near(day, 7) && near(silent, 5) && behavior === "Quiet") {
      return "Quiet";
    }
    if (near(day, 10) && near(silent, 6) && behavior === "Balanced") {
      return "Balanced";
    }
    if (near(day, 10) && near(silent, 8) && behavior === "Fast response") {
      return "High output";
    }
    return "Custom";
  }

  function updateSummary() {
    const mode = getEntity("select", "Heating Control Mode").value.includes("Water Temperature Control")
      ? "Water Temperature Control"
      : "Power House";
    const behavior = getEntity("select", "Behavior").value || "Balanced";
    const preset = computePreset();
    const day = Number(getEntity("number", "Day max level").value);
    const silent = Number(getEntity("number", "Silent max level").value);
    const water = Number(getEntity("number", "Maximum water temperature").value);
    const text = `${mode}, ${behavior}, ${preset} preset, day ${day.toFixed(0)}, silent ${silent.toFixed(0)}, max ${water.toFixed(1)} C${state.complete ? ", setup complete" : ""}`;

    setBinary("Setup Complete", state.complete);
    setText("text_sensor", "Summary", text);
    setText("select", "Preset", preset);
    applyDiagnosticScenario();
  }

  function applyDiagnosticScenario() {
    const single = state.installation === "single";
    setBinary("Compressor cycling warning 2h", false);
    setBinary("Compressor cycling warning 72h", false);
    setBinary("Alternating compressor starts warning", false);
    setBinary("Lowflow fault active", false);
    setBinary("Flow mismatch (HP1 vs HP2)", false);
    setBinary("OT - Thermostat CH Enable", state.scenario !== "idle");
    setBinary("OT - Thermostat Cooling Enable", state.scenario === "cooling");
    setBinary("CIC - CH enabled", state.scenario !== "idle");
    setBinary("CIC - CH enable valid", true);
    setBinary("CIC - Cooling enabled", state.scenario === "cooling");
    setBinary("CIC - JSON Feed OK", true);
    setBinary("HA - Heating Enable", state.scenario !== "idle");
    setBinary("HA - Cooling Enable", state.scenario === "cooling");
    setBinary("CIC - Data stale", !isSwitchEnabled("CIC - Enable polling"));
    setBinary("OT - Link Problem", false);
    setBinary("OT - Thermostat Status Valid", true);
    const heatingEnableSource = String(getEntity("select", "Heating Enable Source")?.value || "Disabled");
    const heatingEnableValid = heatingEnableSource === "Disabled"
      || (heatingEnableSource === "OT thermostat" && Boolean(getEntity("binary_sensor", "OT - Thermostat Status Valid")?.value))
      || (heatingEnableSource === "CIC" && Boolean(getEntity("binary_sensor", "CIC - CH enable valid")?.value))
      || (heatingEnableSource === "HA input" && Boolean(getEntity("binary_sensor", "HA - Heating Enable Valid")?.value));
    const heatingEnableSelected = heatingEnableSource === "Disabled"
      || (heatingEnableValid && heatingEnableSource === "OT thermostat" && Boolean(getEntity("binary_sensor", "OT - Thermostat CH Enable")?.value))
      || (heatingEnableValid && heatingEnableSource === "CIC" && Boolean(getEntity("binary_sensor", "CIC - CH enabled")?.value))
      || (heatingEnableValid && heatingEnableSource === "HA input" && Boolean(getEntity("binary_sensor", "HA - Heating Enable")?.value));
    setBinary("Heating Enable Valid", heatingEnableValid);
    setBinary("Heating Enable (Selected)", heatingEnableSelected);
    setBinary("Heating blocked by thermostat", state.scenario !== "idle" && !heatingEnableSelected);
    setText("text_sensor", "Room Temperature Effective Source", String(getEntity("select", "Room Temperature Source")?.value || "Unknown"));
    setText("text_sensor", "Room Setpoint Effective Source", String(getEntity("select", "Room Setpoint Source")?.value || "Unknown"));
    setText("text_sensor", "Heating Enable Effective Source", heatingEnableSource === "Disabled" ? "None" : heatingEnableSource);
    setText("text_sensor", "Cooling Enable Effective Source", String(getEntity("select", "Cooling Enable Source")?.value || "Unknown"));
    setNumber("OT - Control Setpoint", state.scenario === "cooling" ? 18.0 : 30.0, "\u00B0C");
    setNumber("OT - Room Setpoint", state.scenario === "cooling" ? 23.0 : 21.0, "\u00B0C");
    setNumber("OT - Room Temperature", Number(getEntity("sensor", "Room Temperature (Selected)")?.value || 20.6), "\u00B0C");
    setNumber("CIC - Control setpoint", state.scenario === "cooling" ? 18.0 : 30.0, "\u00B0C");
    setNumber("CIC - Room setpoint", Number(getEntity("sensor", "Room Setpoint (Selected)")?.value || 21.0), "\u00B0C");
    setNumber("CIC - Room temperature", Number(getEntity("sensor", "Room Temperature (Selected)")?.value || 20.6), "\u00B0C");
    setNumber("CIC - Flowrate (filtered)", Number(getEntity("sensor", "Flow average (Selected)")?.value || 0), "L/h");
    {
      const selectedFlow = Number(getEntity("sensor", "Flow average (Selected)")?.value || 0);
      setNumber("Controller Flow", Math.max(0, selectedFlow - 10), "L/h");
      setNumber("Flow average (local)", selectedFlow, "L/h");
    }
    setNumber("CIC - Last success age", isSwitchEnabled("CIC - Enable polling") ? 12 : 0, "s");
    setNumber("HP1 - Compressor starts 2h", 3);
    setNumber("HP1 - Compressor starts 6h", 11);
    setNumber("HP1 - Compressor starts 24h", 29);
    setNumber("HP1 - Compressor starts 72h", 40);
    setNumber("HP1 - Compressor last start age", 12, "min");
    if (!single) {
      setNumber("HP2 - Compressor starts 2h", 3);
      setNumber("HP2 - Compressor starts 6h", 9);
      setNumber("HP2 - Compressor starts 24h", 24);
      setNumber("HP2 - Compressor starts 72h", 40);
      setNumber("HP2 - Compressor last start age", 18, "min");
    }

    if (state.diagnostics === "cycling") {
      setBinary("Compressor cycling warning 2h", true);
      setBinary("Compressor cycling warning 72h", true);
      setBinary("Alternating compressor starts warning", !single);
      setNumber("HP1 - Compressor starts 2h", 8);
      setNumber("HP1 - Compressor starts 6h", 18);
      setNumber("HP1 - Compressor starts 24h", 33);
      setNumber("HP1 - Compressor starts 72h", 48);
      setNumber("HP1 - Compressor last start age", 3, "min");
      if (!single) {
        setNumber("HP2 - Compressor starts 2h", 8);
        setNumber("HP2 - Compressor starts 6h", 16);
        setNumber("HP2 - Compressor starts 24h", 30);
        setNumber("HP2 - Compressor starts 72h", 44);
        setNumber("HP2 - Compressor last start age", 7, "min");
      }
      recordMockCompressorCyclingAlert({
        hp1Peak2h: 8,
        hp1Peak72h: 48,
        hp2Peak2h: single ? 0 : 8,
        hp2Peak72h: single ? 0 : 44,
        alternating: !single,
        ongoing: true,
      });
    } else if (state.diagnostics === "cycling-recovered") {
      recordMockCompressorCyclingAlert({
        hp1Peak2h: 8,
        hp1Peak72h: 48,
        hp2Peak2h: single ? 0 : 8,
        hp2Peak72h: single ? 0 : 44,
        alternating: !single,
      });
    } else if (state.diagnostics === "hydraulics") {
      setBinary("Lowflow fault active", true);
      setBinary("Flow mismatch (HP1 vs HP2)", !single);
    } else if (state.diagnostics === "connections") {
      setEntity("switch", "CIC - Enable polling", { value: true, state: true });
      setEntity("switch", "OpenTherm Enabled", { value: true, state: true });
      setBinary("CIC - JSON Feed OK", false);
      setBinary("CIC - Data stale", true);
      setBinary("OT - Link Problem", true);
    } else if (state.diagnostics === "hp-fault") {
      setText("text_sensor", "HP1 - Active Failures List", "Condenser pressure sensor failure");
    }
    syncMockCompressorCyclingAlertEntities();
  }

  function recordMockCompressorCyclingAlert({ hp1Peak2h, hp1Peak72h, hp2Peak2h, hp2Peak72h, alternating, ongoing = false }) {
    const alert = state.compressorCyclingAlert;
    const now = Date.now();
    if (!alert.latched) {
      alert.latched = true;
      alert.firstSeenAt = now - (52 * 60 * 1000);
      alert.lastSeenAt = ongoing ? now : now - (11 * 60 * 1000);
    } else if (ongoing) {
      alert.lastSeenAt = now;
    }
    alert.hp1Peak2h = Math.max(alert.hp1Peak2h, hp1Peak2h);
    alert.hp1Peak72h = Math.max(alert.hp1Peak72h, hp1Peak72h);
    alert.hp2Peak2h = Math.max(alert.hp2Peak2h, hp2Peak2h);
    alert.hp2Peak72h = Math.max(alert.hp2Peak72h, hp2Peak72h);
    alert.alternating = alert.alternating || alternating;
  }

  function clearMockCompressorCyclingAlert() {
    Object.assign(state.compressorCyclingAlert, {
      latched: false,
      firstSeenAt: 0,
      lastSeenAt: 0,
      hp1Peak2h: 0,
      hp1Peak72h: 0,
      hp2Peak2h: 0,
      hp2Peak72h: 0,
      alternating: false,
    });
  }

  function syncMockCompressorCyclingAlertEntities() {
    const alert = state.compressorCyclingAlert;
    setBinary("Compressor cycling alert latched", alert.latched);
    setBinary("Compressor cycling alert alternating", alert.alternating);
    setNumber("Compressor cycling alert first seen", Math.round(alert.firstSeenAt / 1000), "s");
    setNumber("Compressor cycling alert last seen", Math.round(alert.lastSeenAt / 1000), "s");
    setNumber("Compressor cycling alert HP1 peak 2h", alert.hp1Peak2h);
    setNumber("Compressor cycling alert HP1 peak 72h", alert.hp1Peak72h);
    setNumber("Compressor cycling alert HP2 peak 2h", alert.hp2Peak2h);
    setNumber("Compressor cycling alert HP2 peak 72h", alert.hp2Peak72h);
  }

  function buildTrendPreviewSamples(windowHours = 24) {
    const safeWindowHours = Number.isFinite(Number(windowHours)) && Number(windowHours) > 0 ? Number(windowHours) : 24;
    const windowMs = safeWindowHours * 60 * 60 * 1000;
    const points = Math.max(12, Math.round(safeWindowHours * 12));
    const endTime = Date.now();
    const startTime = endTime - windowMs;
    const span = Math.max(points - 1, 1);
    const samples = [];

    for (let index = 0; index < points; index += 1) {
      const fraction = index / span;
      const dayWave = Math.sin((fraction * Math.PI * 2) - 1.1);
      const detailWave = Math.sin(fraction * Math.PI * 10);
      const driftWave = Math.cos((fraction * Math.PI * 2) + 0.45);

      samples.push({
        t: startTime + Math.round(fraction * windowMs),
        outside: 8.5 + (dayWave * 3.4) + (detailWave * 0.5),
        supply: 35.5 + (Math.sin((fraction * Math.PI * 2) - 0.35) * 4.8) + (detailWave * 0.9),
        room: 20.2 + (Math.sin((fraction * Math.PI * 2) - 0.22) * 0.35) + (detailWave * 0.08),
        roomSetpoint: 20.6 + (Math.cos((fraction * Math.PI * 2) - 0.1) * 0.10),
        flow: Math.max(0, 760 + (Math.cos((fraction * Math.PI * 2) + 0.1) * 110) + (detailWave * 18)),
        input: Math.max(280, 1180 + (dayWave * 380) + (detailWave * 150) + (driftWave * 110)),
        output: Math.max(1000, 4250 + (dayWave * 860) + (detailWave * 260)),
      });
    }

    return samples;
  }

  function formatTrendFlashDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}-${month} ${hours}:${minutes}`;
  }

  function formatTrendFlashAge(fromMs, toMs = Date.now()) {
    const deltaMinutes = Math.max(0, Math.round((toMs - fromMs) / 60000));
    if (deltaMinutes < 1) {
      return "Zojuist";
    }
    if (deltaMinutes < 60) {
      return `${deltaMinutes} min geleden`;
    }
    const deltaHours = Math.round(deltaMinutes / 60);
    if (deltaHours < 24) {
      return `${deltaHours} u geleden`;
    }
    return `${Math.round(deltaHours / 24)} d geleden`;
  }

  function updateTrendFlashStats() {
    if (!getEntity("text_sensor", "Trendhistorie beschikbaar")) {
      return;
    }

    if (!isSwitchEnabled("Trendhistorie opslaan in flash")) {
      setText("text_sensor", "Trendhistorie beschikbaar", "Nog leeg");
      setText("text_sensor", "Trendhistorie oudste punt", "Nog niet");
      setText("text_sensor", "Trendhistorie nieuwste punt", "Nog leeg");
      setText("text_sensor", "Trendhistorie laatste opslag", "Nog niet");
      setNumber("Trendhistorie grootte", 0, "kB");
      setNumber("Trendhistorie schrijfacties", 0, "");
      return;
    }

    setText("text_sensor", "Trendhistorie beschikbaar", "18,4 dagen");
    setText("text_sensor", "Trendhistorie oudste punt", formatTrendFlashDate(new Date(state.trendFlashOldestAt)));
    setText("text_sensor", "Trendhistorie nieuwste punt", formatTrendFlashAge(state.trendFlashNewestAt));
    setText("text_sensor", "Trendhistorie laatste opslag", formatTrendFlashDate(new Date(state.trendFlashLastFlushAt)));
    setNumber("Trendhistorie grootte", state.trendFlashStoredKiB, "kB");
    setNumber("Trendhistorie schrijfacties", state.trendFlashWrites, "");
  }

  function dateKeyFromDate(date) {
    return (date.getFullYear() * 10000) + ((date.getMonth() + 1) * 100) + date.getDate();
  }

  function formatEnergyHistoryDate(dateKey) {
    const year = Math.floor(dateKey / 10000);
    const month = Math.floor(dateKey / 100) % 100;
    const day = dateKey % 100;
    return `${String(day).padStart(2, "0")}-${String(month).padStart(2, "0")}-${year}`;
  }

  function buildEnergyHistoryRecords() {
    const records = [];
    const recordCount = 900;
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const start = new Date(today.getTime());
    start.setDate(start.getDate() - recordCount);
    for (let index = 0; index < recordCount; index += 1) {
      const date = new Date(start.getTime());
      date.setDate(start.getDate() + index);
      const month = date.getMonth();
      const winter = month <= 2 || month >= 10;
      const shoulder = month === 3 || month === 4 || month === 8 || month === 9;
      const summer = month >= 5 && month <= 7;
      const wave = 0.65 + (Math.sin(index / 8) * 0.18) + (Math.sin(index / 23) * 0.11);
      const heatingInput = winter
        ? Math.max(2600, Math.round((6600 + (month === 0 ? 1800 : 0)) * wave))
        : shoulder
          ? Math.max(600, Math.round(2600 * wave))
          : Math.round(180 * Math.max(0, Math.sin(index / 5)));
      const coolingInput = summer ? Math.max(0, Math.round((900 + (month === 6 ? 850 : 0)) * (0.55 + Math.sin(index / 6) * 0.28))) : 0;
      const boilerHeat = winter && index % 9 === 0 ? Math.round((1800 + (index % 5) * 260) * wave) : 0;
      const heatOutput = Math.round(heatingInput * (3.2 + Math.sin(index / 17) * 0.38));
      const coolingOutput = Math.round(coolingInput * (3.5 + Math.cos(index / 13) * 0.42));
      records.push({
        sequence: index,
        dateKey: dateKeyFromDate(date),
        flags: 0,
        electricalInputWh: heatingInput + coolingInput,
        heatingInputWh: heatingInput,
        coolingInputWh: coolingInput,
        heatpumpHeatOutputWh: heatingInput > 0 ? heatOutput : 0,
        heatpumpCoolingOutputWh: coolingInput > 0 ? coolingOutput : 0,
        boilerHeatOutputWh: boilerHeat,
        systemHeatOutputWh: (heatingInput > 0 ? heatOutput : 0) + boilerHeat,
      });
    }
    return records;
  }

  function buildEnergyHistoryHourRecords(days = 7) {
    const records = [];
    const now = new Date();
    now.setMinutes(30, 0, 0);
    let sequence = 0;
    for (let dayOffset = days - 1; dayOffset >= 0; dayOffset -= 1) {
      const date = new Date(now.getTime());
      date.setDate(now.getDate() - dayOffset);
      const dateKey = dateKeyFromDate(date);
      const month = date.getMonth();
      const summer = month >= 5 && month <= 7;
      for (let hour = 0; hour < 24; hour += 1) {
        if (dayOffset === 0 && hour > now.getHours()) {
          continue;
        }
        const morning = Math.exp(-Math.pow((hour - 7) / 3.2, 2));
        const evening = Math.exp(-Math.pow((hour - 19) / 4.0, 2));
        const coolingPeak = Math.exp(-Math.pow((hour - 15) / 3.6, 2));
        const dayWave = 0.78 + (Math.sin((sequence + 8) / 11) * 0.14);
        const heatingInput = summer
          ? Math.round(Math.max(0, 80 * morning * dayWave))
          : Math.round(Math.max(0, (520 * morning + 760 * evening + 120) * dayWave));
        const coolingInput = summer ? Math.round(Math.max(0, (320 * coolingPeak + 35) * dayWave)) : 0;
        const boilerHeat = !summer && hour >= 6 && hour <= 8 && sequence % 13 === 0 ? 360 : 0;
        const heatOutput = Math.round(heatingInput * (3.5 + Math.sin(sequence / 9) * 0.32));
        const coolingOutput = Math.round(coolingInput * (3.2 + Math.cos(sequence / 7) * 0.25));
        records.push({
          sequence,
          dateKey,
          hour,
          electricalInputWh: heatingInput + coolingInput,
          heatingInputWh: heatingInput,
          coolingInputWh: coolingInput,
          heatpumpHeatOutputWh: heatingInput > 0 ? heatOutput : 0,
          heatpumpCoolingOutputWh: coolingInput > 0 ? coolingOutput : 0,
          boilerHeatOutputWh: boilerHeat,
          systemHeatOutputWh: (heatingInput > 0 ? heatOutput : 0) + boilerHeat,
        });
        sequence += 1;
      }
    }
    return records;
  }

  function updateEnergyHistoryStats() {
    if (!getEntity("text_sensor", "Lifetime energiehistorie beschikbaar")) {
      return;
    }
    const records = state.energyHistoryRecords || [];
    const oldest = records[0];
    const newest = records[records.length - 1];
    setText("text_sensor", "Lifetime energiehistorie beschikbaar", records.length ? `${records.length} records` : "Geen data");
    setText("text_sensor", "Lifetime energiehistorie oudste dag", oldest ? formatEnergyHistoryDate(oldest.dateKey) : "Geen data");
    setText("text_sensor", "Lifetime energiehistorie nieuwste dag", newest ? formatEnergyHistoryDate(newest.dateKey) : "Geen data");
    setText("text_sensor", "Lifetime energiehistorie laatste opslag", records.length ? formatTrendFlashDate(new Date(state.energyHistoryLastWriteAt)) : "Geen data");
    setNumber("Lifetime energiehistorie grootte", state.energyHistoryStoredKiB, "kB");
    setNumber("Lifetime energiehistorie schrijfacties", state.energyHistoryWrites, "");
  }

  function getCurrentEnergyHistoryValues() {
    const readKwh = (name) => {
      const entity = getEntity("sensor", name);
      const value = Number(entity?.value ?? entity?.state);
      return Number.isFinite(value) && value >= 0 ? Math.round(value * 1000) : -1;
    };
    return {
      dateKey: dateKeyFromDate(new Date()),
      electricalInputWh: readKwh("Electrical Energy Daily"),
      heatingInputWh: readKwh("Heating Electrical Energy Daily"),
      coolingInputWh: readKwh("Cooling Electrical Energy Daily"),
      heatpumpHeatOutputWh: readKwh("HeatPump Thermal Energy Daily"),
      heatpumpCoolingOutputWh: readKwh("HeatPump Cooling Energy Daily"),
      boilerHeatOutputWh: readKwh("Boiler Thermal Energy Daily"),
      systemHeatOutputWh: readKwh("System Thermal Energy Daily"),
    };
  }

  function captureCurrentEnergyHistoryRecord() {
    const current = getCurrentEnergyHistoryValues();
    const records = Array.isArray(state.energyHistoryRecords) ? state.energyHistoryRecords : [];
    const existingIndex = records.findIndex((record) => record.dateKey === current.dateKey);
    const nextSequence = records.length
      ? Math.max(...records.map((record) => Number(record.sequence) || 0)) + 1
      : 0;
    const record = {
      sequence: existingIndex >= 0 ? records[existingIndex].sequence : nextSequence,
      dateKey: current.dateKey,
      flags: 0,
      electricalInputWh: current.electricalInputWh,
      heatingInputWh: current.heatingInputWh,
      coolingInputWh: current.coolingInputWh,
      heatpumpHeatOutputWh: current.heatpumpHeatOutputWh,
      heatpumpCoolingOutputWh: current.heatpumpCoolingOutputWh,
      boilerHeatOutputWh: current.boilerHeatOutputWh,
      systemHeatOutputWh: current.systemHeatOutputWh,
    };

    if (existingIndex >= 0) {
      records[existingIndex] = record;
    } else {
      records.push(record);
      records.sort((left, right) => left.dateKey - right.dateKey);
    }

    state.energyHistoryRecords = records;
    state.energyHistoryWrites += 1;
    state.energyHistoryStoredKiB = Math.max(1, Number((state.energyHistoryStoredKiB + 0.04).toFixed(2)));
    state.energyHistoryLastWriteAt = Date.now();
    updateEnergyHistoryStats();
  }

  function buildEnergyHistoryTextPayload(url = null) {
    const records = state.energyHistoryRecords || [];
    const hourRecords = state.energyHistoryHourRecords || [];
    const current = getCurrentEnergyHistoryValues();
    const fromDate = Number(url?.searchParams?.get("from")) || 0;
    const toDate = Number(url?.searchParams?.get("to")) || 0;
    const includeHours = url?.searchParams?.get("hours") !== "0";
    const metaOnly = url?.searchParams?.get("meta") === "1";
    const inRange = (dateKey) => {
      const key = Number(dateKey);
      return Number.isFinite(key) && (!fromDate || key >= fromDate) && (!toDate || key <= toDate);
    };
    const filteredRecords = metaOnly ? [] : records.filter((record) => inRange(record.dateKey));
    const filteredHours = includeHours && !metaOnly ? hourRecords.filter((record) => inRange(record.dateKey)) : [];
    const oldest = records[0]?.dateKey || 0;
    const newest = records[records.length - 1]?.dateKey || 0;
    const hourDates = [...new Set(hourRecords.map((record) => Number(record.dateKey)).filter(Number.isFinite))].sort((a, b) => a - b);
    const retentionDays = Number.parseInt(state.energyHistoryHourRetention, 10) || 180;
    const hourLastWriteTimestampS = hourDates.length ? Math.floor(Date.now() / 1000) : 0;
    const lines = [
      "@schema|3",
      `@enabled|${isSwitchEnabled("Lifetime energiehistorie opslaan") ? 1 : 0}`,
      `@now|${Date.now()}`,
      `@records|${records.length}`,
      `@hours|${hourRecords.length}|7`,
      `@range|${fromDate}|${toDate}|${includeHours ? 1 : 0}`,
      `@bounds|${records.length}|${oldest}|${newest}|${hourDates.length}|${hourDates[0] || 0}|${hourDates[hourDates.length - 1] || 0}`,
      `@hour_retention|${retentionDays}|${retentionDays}|1|${hourDates.length}|${hourDates.length}|${retentionDays}|${hourLastWriteTimestampS}`,
      ...filteredRecords.map((record) => [
        record.sequence,
        record.dateKey,
        record.flags || 0,
        record.electricalInputWh,
        record.heatingInputWh,
        record.coolingInputWh,
        record.heatpumpHeatOutputWh,
        record.heatpumpCoolingOutputWh,
        record.boilerHeatOutputWh,
        record.systemHeatOutputWh,
      ].join("|")),
      [
        "@current",
        current.dateKey,
        current.electricalInputWh,
        current.heatingInputWh,
        current.coolingInputWh,
        current.heatpumpHeatOutputWh,
        current.heatpumpCoolingOutputWh,
        current.boilerHeatOutputWh,
        current.systemHeatOutputWh,
      ].join("|"),
      ...filteredHours.map((record) => [
        "@hour",
        record.sequence,
        record.dateKey,
        record.hour,
        record.electricalInputWh,
        record.heatingInputWh,
        record.coolingInputWh,
        record.heatpumpHeatOutputWh,
        record.heatpumpCoolingOutputWh,
        record.boilerHeatOutputWh,
        record.systemHeatOutputWh,
      ].join("|")),
    ];
    return `${lines.join("\n")}\n`;
  }

  function applyPreset(value) {
    if (value === "Quiet") {
      setText("select", "Behavior", "Quiet");
      setNumber("Day max level", 7);
      setNumber("Silent max level", 5);
    } else if (value === "Balanced") {
      setText("select", "Behavior", "Balanced");
      setNumber("Day max level", 10);
      setNumber("Silent max level", 6);
    } else if (value === "High output") {
      setText("select", "Behavior", "Fast response");
      setNumber("Day max level", 10);
      setNumber("Silent max level", 8);
    }
  }

  function syncBoilerDevControlFromDom() {
    if (typeof document === "undefined") {
      return;
    }
    const boilerControl = devControlsRoot?.querySelector('[data-oq-dev-control="boiler"]')
      || document.querySelector('[data-oq-dev-control="boiler"]');
    if (!boilerControl) {
      return;
    }
    state.boiler = boilerControl.value === "on" ? "on" : "off";
  }

  function setConnectionMode(value) {
    state.connection = value === "eth" ? "eth" : "wifi";
    setText("text_sensor", "OpenQuatt Connection", state.connection);
    setText("select", "Firmware Update Target", "current build");
    syncDevMeta();
  }

  function applyScenario(name) {
    if (state.installation === "single" && name === "dual") {
      name = "heating";
    }
    state.scenario = name;
    const t = state.tick / 5;
    const wave = (base, amp, offset = 0) => Number((base + Math.sin(t + offset) * amp).toFixed(1));
    const waveInt = (base, amp, offset = 0) => Math.round(base + Math.sin(t + offset) * amp);
    const single = state.installation === "single";

    setBinary("Silent active", false);
    setBinary("Sticky pump active", false);
    setBinary("HP1 - Defrost", false);
    setBinary("HP1 - 4-Way valve", false);
    setBinary("HP1 - Bottom plate heater", false);
    setBinary("HP1 - Crankcase heater", false);
    setNumber("HP1 - EEV steps", 0, "p");
    if (!single) {
      setBinary("HP2 - Defrost", false);
      setBinary("HP2 - 4-Way valve", false);
      setBinary("HP2 - Bottom plate heater", false);
      setBinary("HP2 - Crankcase heater", false);
      setNumber("HP2 - EEV steps", 0, "p");
    }
    setText("text_sensor", "HP1 - Active Failures List", "None");
    if (!single) {
      setText("text_sensor", "HP2 - Active Failures List", "None");
    }

    if (name === "idle") {
      setText("text_sensor", "Control Mode (Label)", "CM98");
      setBinary("Cooling Enable (Selected)", false);
      setBinary("Cooling Request Active", false);
      setBinary("Cooling Permitted", false);
      setText("text_sensor", "Cooling Block Reason", "Ready");
      setText("text_sensor", "Flow Mode", "Adaptive");
      setNumber("Total Power Input", single ? 5.2 : 10.3, "W");
      setNumber("Total Heat Power", 0, "W");
      setNumber("Total COP", 0);
      setNumber("Flow average (Selected)", 0, "L/h");
      setNumber("Room Temperature (Selected)", 20.9, "°C");
      setNumber("Room Setpoint (Selected)", 21.0, "°C");
      setNumber("Water Supply Temp (Selected)", 26.1, "°C");
      setNumber("HP1 - Power Input", 5.2, "W");
      setNumber("HP1 - Heat Power", 0, "W");
      setNumber("HP1 - COP", 0);
      setNumber("HP1 - Compressor frequency", 0, "Hz");
      setNumber("HP1 - Fan speed", 0, "rpm");
      setNumber("HP1 - Flow", 0, "L/h");
      setNumber("HP1 - Evaporator coil temperature", 25.4, "\u00B0C");
      setNumber("HP1 - Inner coil temperature", 27.1, "\u00B0C");
      setNumber("HP1 - Outside temperature", 11.8, "\u00B0C");
      setNumber("HP1 - Condenser pressure", 7.8, "bar");
      setNumber("HP1 - Gas discharge temperature", 26.7, "\u00B0C");
      setNumber("HP1 - Evaporator pressure", 7.6, "bar");
      setNumber("HP1 - Gas return temperature", 25.8, "\u00B0C");
      setNumber("HP1 - EEV steps", 0, "p");
      setNumber("HP1 - Water in temperature", 25.6, "°C");
      setNumber("HP1 - Water out temperature", 26.0, "°C");
      setText("text_sensor", "HP1 - Working Mode Label", "Standby");
      if (!single) {
        setNumber("HP2 - Power Input", 5.1, "W");
        setNumber("HP2 - Heat Power", 0, "W");
        setNumber("HP2 - COP", 0);
        setNumber("HP2 - Compressor frequency", 0, "Hz");
        setNumber("HP2 - Fan speed", 0, "rpm");
        setNumber("HP2 - Flow", 0, "L/h");
        setNumber("HP2 - Evaporator coil temperature", 25.1, "\u00B0C");
        setNumber("HP2 - Inner coil temperature", 26.5, "\u00B0C");
        setNumber("HP2 - Outside temperature", 11.5, "\u00B0C");
        setNumber("HP2 - Condenser pressure", 7.7, "bar");
        setNumber("HP2 - Gas discharge temperature", 26.4, "\u00B0C");
        setNumber("HP2 - Evaporator pressure", 7.5, "bar");
        setNumber("HP2 - Gas return temperature", 25.5, "\u00B0C");
        setNumber("HP2 - EEV steps", 0, "p");
        setNumber("HP2 - Water in temperature", 25.4, "°C");
        setNumber("HP2 - Water out temperature", 25.8, "°C");
        setText("text_sensor", "HP2 - Working Mode Label", "Standby");
        setBinary("HP2 - Bottom plate heater", true);
        setBinary("HP2 - Crankcase heater", true);
      }
      applyRuntimeControlOverlay(single);
      syncCommissioningEntities(single);
      return;
    }

    if (name === "heating") {
      setText("text_sensor", "Control Mode (Label)", "CM2 - Heating - Heat Pump Only");
      setBinary("Cooling Enable (Selected)", false);
      setBinary("Cooling Request Active", false);
      setBinary("Cooling Permitted", false);
      setText("text_sensor", "Cooling Block Reason", "Ready");
      setText("text_sensor", "Flow Mode", "Adaptive");
      const hp1Power = wave(418, 22);
      const hp1Heat = wave(1880, 120);
      const hp1Cop = Number((4.55 + Math.sin(t) * 0.18).toFixed(2));
      setNumber("Total Power Input", single ? hp1Power : wave(560, 55), "W");
      setNumber("Total Heat Power", single ? hp1Heat : wave(2430, 190), "W");
      setNumber("Total COP", single ? hp1Cop : Number((4.4 + Math.sin(t) * 0.22).toFixed(2)));
      setNumber("Flow average (Selected)", wave(780, 40), "L/h");
      setNumber("Room Temperature (Selected)", wave(20.2, 0.12), "°C");
      setNumber("Room Setpoint (Selected)", 21.0, "°C");
      setNumber("Water Supply Temp (Selected)", wave(31.4, 0.8), "°C");
      setNumber("HP1 - Power Input", hp1Power, "W");
      setNumber("HP1 - Heat Power", hp1Heat, "W");
      setNumber("HP1 - COP", hp1Cop);
      setNumber("HP1 - Compressor frequency", waveInt(30, 3), "Hz");
      setNumber("HP1 - Fan speed", wave(562, 18), "rpm");
      setNumber("HP1 - Flow", wave(790, 34), "L/h");
      setNumber("HP1 - Evaporator coil temperature", wave(3.8, 0.7), "\u00B0C");
      setNumber("HP1 - Inner coil temperature", wave(7.6, 0.6, 0.1), "\u00B0C");
      setNumber("HP1 - Outside temperature", wave(4.9, 0.25, 0.12), "\u00B0C");
      setNumber("HP1 - Condenser pressure", wave(22.8, 0.7), "bar");
      setNumber("HP1 - Gas discharge temperature", wave(67.2, 1.6), "\u00B0C");
      setNumber("HP1 - Evaporator pressure", wave(7.8, 0.2), "bar");
      setNumber("HP1 - Gas return temperature", wave(8.2, 0.5), "\u00B0C");
      setNumber("HP1 - EEV steps", waveInt(286, 18), "p");
      setNumber("HP1 - Water in temperature", wave(25.0, 0.4), "°C");
      setNumber("HP1 - Water out temperature", wave(30.5, 0.5), "°C");
      setText("text_sensor", "HP1 - Working Mode Label", "Heating");
      if (!single) {
        setNumber("HP2 - Power Input", wave(110, 12, 0.7), "W");
        setNumber("HP2 - Heat Power", wave(520, 60, 0.7), "W");
        setNumber("HP2 - COP", Number((4.1 + Math.sin(t + 0.7) * 0.14).toFixed(2)));
        setNumber("HP2 - Compressor frequency", waveInt(12, 2, 0.5), "Hz");
        setNumber("HP2 - Fan speed", wave(186, 10, 0.5), "rpm");
        setNumber("HP2 - Flow", wave(180, 20, 0.5), "L/h");
        setNumber("HP2 - Evaporator coil temperature", wave(25.0, 0.4, 0.5), "\u00B0C");
        setNumber("HP2 - Inner coil temperature", wave(26.6, 0.35, 0.2), "\u00B0C");
        setNumber("HP2 - Outside temperature", wave(4.7, 0.22, 0.18), "\u00B0C");
        setNumber("HP2 - Condenser pressure", wave(8.4, 0.2, 0.4), "bar");
        setNumber("HP2 - Gas discharge temperature", wave(30.4, 0.6, 0.4), "\u00B0C");
        setNumber("HP2 - Evaporator pressure", wave(8.1, 0.2, 0.4), "bar");
        setNumber("HP2 - Gas return temperature", wave(24.6, 0.4, 0.4), "\u00B0C");
        setNumber("HP2 - EEV steps", waveInt(32, 6, 0.5), "p");
        setNumber("HP2 - Water in temperature", wave(25.3, 0.3), "°C");
        setNumber("HP2 - Water out temperature", wave(29.4, 0.4), "°C");
        setText("text_sensor", "HP2 - Working Mode Label", "Standby");
        setBinary("HP2 - Bottom plate heater", false);
        setBinary("HP2 - Crankcase heater", true);
      }
      applyRuntimeControlOverlay(single);
      syncCommissioningEntities(single);
      return;
    }

    if (name === "dual") {
      setText("text_sensor", "Control Mode (Label)", "CM99");
      setBinary("Cooling Enable (Selected)", false);
      setBinary("Cooling Request Active", false);
      setBinary("Cooling Permitted", false);
      setText("text_sensor", "Cooling Block Reason", "Ready");
      setText("text_sensor", "Flow Mode", "Mixed test");
      setBinary("Silent active", true);
      setText("text_sensor", "HP2 - Active Failures List", "Compressor oil return");
      setNumber("Total Power Input", wave(980, 60), "W");
      setNumber("Total Heat Power", wave(2260, 180), "W");
      setNumber("Total COP", Number((2.28 + Math.sin(t) * 0.12).toFixed(2)));
      setNumber("Flow average (Selected)", wave(1220, 50), "L/h");
      setNumber("Room Temperature (Selected)", wave(19.8, 0.12), "°C");
      setNumber("Room Setpoint (Selected)", 21.0, "°C");
      setNumber("Water Supply Temp (Selected)", wave(29.8, 0.6), "°C");
      setNumber("HP1 - Power Input", wave(470, 18), "W");
      setNumber("HP1 - Heat Power", wave(2080, 110), "W");
      setNumber("HP1 - COP", Number((4.42 + Math.sin(t) * 0.11).toFixed(2)));
      setNumber("HP1 - Compressor frequency", waveInt(34, 2), "Hz");
      setNumber("HP1 - Fan speed", wave(629, 14), "rpm");
      setNumber("HP1 - Flow", wave(608, 22), "L/h");
      setNumber("HP1 - Evaporator coil temperature", wave(1.6, 0.6), "\u00B0C");
      setNumber("HP1 - Inner coil temperature", wave(6.2, 0.5, 0.2), "\u00B0C");
      setNumber("HP1 - Outside temperature", wave(5.2, 0.2, 0.05), "\u00B0C");
      setNumber("HP1 - Condenser pressure", wave(23.4, 0.8), "bar");
      setNumber("HP1 - Gas discharge temperature", wave(69.4, 1.8), "\u00B0C");
      setNumber("HP1 - Evaporator pressure", wave(8.1, 0.2), "bar");
      setNumber("HP1 - Gas return temperature", wave(9.1, 0.5), "\u00B0C");
      setNumber("HP1 - EEV steps", waveInt(302, 16), "p");
      setNumber("HP1 - Water in temperature", wave(25.2, 0.3), "°C");
      setNumber("HP1 - Water out temperature", wave(31.8, 0.5), "°C");
      setText("text_sensor", "HP1 - Working Mode Label", "Heating");
      setNumber("HP2 - Power Input", wave(420, 18, 0.4), "W");
      setNumber("HP2 - Heat Power", wave(-260, 40, 0.4), "W");
      setNumber("HP2 - COP", Number((2.05 + Math.sin(t + 0.4) * 0.08).toFixed(2)));
      setNumber("HP2 - Compressor frequency", waveInt(31, 2, 0.4), "Hz");
      setNumber("HP2 - Fan speed", wave(185, 8, 0.4), "rpm");
      setNumber("HP2 - Flow", wave(590, 18, 0.4), "L/h");
      setNumber("HP2 - Evaporator coil temperature", wave(12.3, 0.5, 0.4), "\u00B0C");
      setNumber("HP2 - Inner coil temperature", wave(8.7, 0.45, 0.15), "\u00B0C");
      setNumber("HP2 - Outside temperature", wave(5.0, 0.18, 0.2), "\u00B0C");
      setNumber("HP2 - Condenser pressure", wave(18.6, 0.6, 0.4), "bar");
      setNumber("HP2 - Gas discharge temperature", wave(58.1, 1.5, 0.4), "\u00B0C");
      setNumber("HP2 - Evaporator pressure", wave(6.9, 0.2, 0.4), "bar");
      setNumber("HP2 - Gas return temperature", wave(11.2, 0.4, 0.4), "\u00B0C");
      setNumber("HP2 - EEV steps", waveInt(338, 18, 0.4), "p");
      setNumber("HP2 - Water in temperature", wave(31.0, 0.4), "°C");
      setNumber("HP2 - Water out temperature", wave(25.2, 0.3), "°C");
      setText("text_sensor", "HP2 - Working Mode Label", "Cooling");
      setBinary("HP2 - 4-Way valve", true);
      setBinary("HP2 - Bottom plate heater", true);
      setBinary("HP2 - Crankcase heater", true);
      applyRuntimeControlOverlay(single);
      syncCommissioningEntities(single);
      return;
    }

    if (name === "defrost") {
      setText("text_sensor", "Control Mode (Label)", "CM99");
      setBinary("Cooling Enable (Selected)", false);
      setBinary("Cooling Request Active", false);
      setBinary("Cooling Permitted", false);
      setText("text_sensor", "Cooling Block Reason", "Ready");
      setText("text_sensor", "Flow Mode", "Defrost recovery");
      setBinary("Sticky pump active", true);
      setBinary("HP1 - Defrost", true);
      setBinary("HP1 - 4-Way valve", true);
      const hp1Power = wave(520, 16);
      const hp1Heat = wave(160, 30);
      const hp1Cop = Number((0.31 + Math.sin(t) * 0.03).toFixed(2));
      setNumber("Total Power Input", single ? hp1Power : wave(610, 50), "W");
      setNumber("Total Heat Power", single ? hp1Heat : wave(350, 40), "W");
      setNumber("Total COP", single ? hp1Cop : Number((0.62 + Math.sin(t) * 0.08).toFixed(2)));
      setNumber("Flow average (Selected)", wave(920, 50), "L/h");
      setNumber("Room Temperature (Selected)", wave(20.0, 0.08), "°C");
      setNumber("Room Setpoint (Selected)", 21.0, "°C");
      setNumber("Water Supply Temp (Selected)", wave(27.4, 0.4), "°C");
      setNumber("HP1 - Power Input", hp1Power, "W");
      setNumber("HP1 - Heat Power", hp1Heat, "W");
      setNumber("HP1 - COP", hp1Cop);
      setNumber("HP1 - Compressor frequency", waveInt(39, 2), "Hz");
      setNumber("HP1 - Fan speed", wave(676, 12), "rpm");
      setNumber("HP1 - Flow", wave(530, 20), "L/h");
      setNumber("HP1 - Evaporator coil temperature", wave(-4.4, 0.6), "\u00B0C");
      setNumber("HP1 - Inner coil temperature", wave(22.4, 0.4, 0.25), "\u00B0C");
      setNumber("HP1 - Outside temperature", wave(2.3, 0.18, 0.15), "\u00B0C");
      setNumber("HP1 - Condenser pressure", wave(15.4, 0.5), "bar");
      setNumber("HP1 - Gas discharge temperature", wave(47.8, 1.1), "\u00B0C");
      setNumber("HP1 - Evaporator pressure", wave(4.8, 0.2), "bar");
      setNumber("HP1 - Gas return temperature", wave(-1.8, 0.4), "\u00B0C");
      setNumber("HP1 - EEV steps", waveInt(188, 14), "p");
      setNumber("HP1 - Water in temperature", wave(29.8, 0.3), "°C");
      setNumber("HP1 - Water out temperature", wave(26.5, 0.3), "°C");
      setText("text_sensor", "HP1 - Working Mode Label", "Heating");
      setBinary("HP1 - Bottom plate heater", true);
      setBinary("HP1 - Crankcase heater", true);
      if (!single) {
        setNumber("HP2 - Power Input", wave(55, 4), "W");
        setNumber("HP2 - Heat Power", 0, "W");
        setNumber("HP2 - COP", 0);
        setNumber("HP2 - Compressor frequency", 0, "Hz");
        setNumber("HP2 - Fan speed", 0, "rpm");
        setNumber("HP2 - Flow", wave(120, 12), "L/h");
        setNumber("HP2 - Evaporator coil temperature", wave(24.8, 0.3), "\u00B0C");
        setNumber("HP2 - Inner coil temperature", wave(26.2, 0.25, 0.1), "\u00B0C");
        setNumber("HP2 - Outside temperature", wave(2.1, 0.15, 0.1), "\u00B0C");
        setNumber("HP2 - Condenser pressure", wave(8.2, 0.2), "bar");
        setNumber("HP2 - Gas discharge temperature", wave(29.1, 0.4), "\u00B0C");
        setNumber("HP2 - Evaporator pressure", wave(7.9, 0.2), "bar");
        setNumber("HP2 - Gas return temperature", wave(25.0, 0.3), "\u00B0C");
        setNumber("HP2 - EEV steps", waveInt(24, 4), "p");
        setNumber("HP2 - Water in temperature", wave(26.1, 0.2), "°C");
        setNumber("HP2 - Water out temperature", wave(26.8, 0.2), "°C");
        setText("text_sensor", "HP2 - Working Mode Label", "Standby");
        setBinary("HP2 - Bottom plate heater", false);
        setBinary("HP2 - Crankcase heater", true);
      }
      applyRuntimeControlOverlay(single);
      syncCommissioningEntities(single);
      return;
    }

    if (name === "cooling") {
      setText("text_sensor", "Control Mode (Label)", "CM5 - Cooling");
      setText("text_sensor", "Flow Mode", "Adaptive");
      setBinary("Cooling Enable (Selected)", true);
      setBinary("Cooling Request Active", true);
      setBinary("Cooling Permitted", true);
      setText("text_sensor", "Cooling Block Reason", "Ready");
      setText("text_sensor", "Cooling Guard Mode", "Dew point");
      setNumber("Cooling Dew Point (Selected)", wave(16.0, 0.15), "°C");
      setNumber("Cooling Minimum Safe Supply Temp", wave(18.0, 0.15), "°C");
      setNumber("Cooling Effective Minimum Supply Temp", wave(18.0, 0.15), "°C");
      setNumber("Cooling Fallback Night Minimum Outdoor Temp", wave(15.4, 0.1), "°C");
      setNumber("Cooling Fallback Minimum Supply Temp", wave(19.0, 0.1), "°C");
      setNumber("Cooling Supply Target", wave(18.0, 0.12), "°C");
      setNumber("Cooling Supply Error", wave(1.0, 0.2), "°C");
      setNumber("Cooling Demand (raw)", waveInt(2.2, 0.6), "");
      setNumber("Cooling Power Input", wave(455, 18), "W");
      setNumber("Total Power Input", wave(455, 18), "W");
      setNumber("Total Heat Power", 0, "W");
      setNumber("Total Cooling Power", wave(1720, 90), "W");
      setNumber("Total COP", 0);
      setNumber("Total EER", Number((3.9 + Math.sin(t) * 0.08).toFixed(2)));
      setNumber("Flow average (Selected)", wave(845, 26), "L/h");
      setNumber("Room Temperature (Selected)", wave(24.2, 0.08), "°C");
      setNumber("Room Setpoint (Selected)", 23.0, "°C");
      setNumber("Water Supply Temp (Selected)", wave(19.6, 0.2), "°C");
      setNumber("HP1 - Power Input", 5.4, "W");
      setNumber("HP1 - Heat Power", 0, "W");
      setNumber("HP1 - Cooling Power", 0, "W");
      setNumber("HP1 - COP", 0);
      setNumber("HP1 - Compressor frequency", 0, "Hz");
      setNumber("HP1 - Fan speed", 0, "rpm");
      setNumber("HP1 - Flow", 0, "L/h");
      setNumber("HP1 - Evaporator coil temperature", wave(24.8, 0.2), "\u00B0C");
      setNumber("HP1 - Inner coil temperature", wave(25.7, 0.2), "\u00B0C");
      setNumber("HP1 - Outside temperature", wave(26.1, 0.2), "\u00B0C");
      setNumber("HP1 - Condenser pressure", wave(8.0, 0.1), "bar");
      setNumber("HP1 - Gas discharge temperature", wave(27.6, 0.2), "\u00B0C");
      setNumber("HP1 - Evaporator pressure", wave(7.8, 0.1), "bar");
      setNumber("HP1 - Gas return temperature", wave(25.3, 0.2), "\u00B0C");
      setNumber("HP1 - EEV steps", 0, "p");
      setNumber("HP1 - Water in temperature", wave(20.8, 0.2), "°C");
      setNumber("HP1 - Water out temperature", wave(20.1, 0.2), "°C");
      setText("text_sensor", "HP1 - Working Mode Label", "Standby");
      if (!single) {
        setNumber("HP2 - Power Input", wave(448, 18, 0.3), "W");
        setNumber("HP2 - Heat Power", 0, "W");
        setNumber("HP2 - Cooling Power", wave(1710, 90, 0.3), "W");
        setNumber("HP2 - COP", Number((3.82 + Math.sin(t + 0.3) * 0.08).toFixed(2)));
        setNumber("HP2 - Compressor frequency", waveInt(33, 2, 0.3), "Hz");
        setNumber("HP2 - Fan speed", wave(602, 14, 0.3), "rpm");
        setNumber("HP2 - Flow", wave(842, 18, 0.3), "L/h");
        setNumber("HP2 - Evaporator coil temperature", wave(8.2, 0.3, 0.3), "\u00B0C");
        setNumber("HP2 - Inner coil temperature", wave(12.0, 0.3, 0.2), "\u00B0C");
        setNumber("HP2 - Outside temperature", wave(25.9, 0.2, 0.2), "\u00B0C");
        setNumber("HP2 - Condenser pressure", wave(17.8, 0.3, 0.3), "bar");
        setNumber("HP2 - Gas discharge temperature", wave(47.0, 0.8, 0.3), "\u00B0C");
        setNumber("HP2 - Evaporator pressure", wave(6.0, 0.15, 0.3), "bar");
        setNumber("HP2 - Gas return temperature", wave(10.4, 0.2, 0.3), "\u00B0C");
        setNumber("HP2 - EEV steps", waveInt(268, 12, 0.3), "p");
        setNumber("HP2 - Water in temperature", wave(21.0, 0.2, 0.3), "°C");
        setNumber("HP2 - Water out temperature", wave(19.3, 0.2, 0.3), "°C");
        setText("text_sensor", "HP2 - Working Mode Label", "Cooling");
        setBinary("HP2 - 4-Way valve", true);
      }
      applyRuntimeControlOverlay(single);
      syncCommissioningEntities(single);
      return;
    }
  }

  function normalizeDateTimeValue(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }
    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);
    if (!match) {
      return "";
    }
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const hour = Number(match[4]);
    const minute = Number(match[5]);
    const second = Number(match[6] || "0");
    if ([year, month, day, hour, minute, second].some((part) => Number.isNaN(part))) {
      return "";
    }
    return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  }

  function parseDateTimeValue(rawValue) {
    const normalized = normalizeDateTimeValue(rawValue);
    if (!normalized || normalized === OPENQUATT_RESUME_CLEAR_VALUE) {
      return null;
    }
    const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);
    if (!match) {
      return null;
    }
    const date = new Date(
      Number(match[1]),
      Number(match[2]) - 1,
      Number(match[3]),
      Number(match[4]),
      Number(match[5]),
      Number(match[6]),
      0
    );
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function applyOpenQuattResumeSchedule() {
    const resumeAt = parseDateTimeValue(getEntity("datetime", "OpenQuatt resume at")?.value || "");
    if (!resumeAt || isSwitchEnabled("OpenQuatt Enabled")) {
      return;
    }
    if (Date.now() >= resumeAt.getTime()) {
      const enabledEntity = getEntity("switch", "OpenQuatt Enabled");
      if (enabledEntity) {
        enabledEntity.value = true;
        enabledEntity.state = true;
      }
      setText("datetime", "OpenQuatt resume at", OPENQUATT_RESUME_CLEAR_VALUE);
    }
  }

  function applyRuntimeControlOverlay(single) {
    applyOpenQuattResumeSchedule();
    const openquattEnabled = isSwitchEnabled("OpenQuatt Enabled");
    const manualCoolingEnabled = isSwitchEnabled("Manual Cooling Enable");
    const silentModeOverride = String(getEntity("select", "Silent Mode Override")?.value || "Schedule");
    const commissioningActive = Boolean(state.commissioning.cm100Active);

    if (silentModeOverride === "On") {
      setBinary("Silent active", true);
    } else if (silentModeOverride === "Off") {
      setBinary("Silent active", false);
    }

    if (manualCoolingEnabled) {
      setBinary("Cooling Enable (Selected)", true);
      if (!getEntity("text_sensor", "Cooling Block Reason")?.state || getEntity("text_sensor", "Cooling Block Reason")?.state === "Ready") {
        setText("text_sensor", "Cooling Block Reason", state.scenario === "cooling" ? "Ready" : "Wacht op kamervraag");
      }
    }

    if (!openquattEnabled && !commissioningActive) {
      setText("text_sensor", "Control Mode (Label)", "CM0 - Standby");
      setBinary("Cooling Request Active", false);
      setBinary("Cooling Permitted", false);
      setText("text_sensor", "Cooling Block Reason", manualCoolingEnabled ? "OpenQuatt gepauzeerd" : "Koeling uitgeschakeld");
      setText("text_sensor", "Flow Mode", "Gepauzeerd");

      setNumber("Total Power Input", single ? 5.2 : 10.3, "W");
      setNumber("Heating Power Input", 0, "W");
      setNumber("Cooling Power Input", 0, "W");
      setNumber("Total Heat Power", 0, "W");
      setNumber("Total Cooling Power", 0, "W");
      setNumber("Total COP", 0, "");
      setNumber("Total EER", 0, "");
      setNumber("Flow average (Selected)", 0, "L/h");

      setNumber("HP1 - Power Input", 5.2, "W");
      setNumber("HP1 - Heat Power", 0, "W");
      setNumber("HP1 - Cooling Power", 0, "W");
      setNumber("HP1 - COP", 0, "");
      setNumber("HP1 - Compressor frequency", 0, "Hz");
      setNumber("HP1 - Fan speed", 0, "rpm");
      setNumber("HP1 - Flow", 0, "L/h");
      setText("text_sensor", "HP1 - Working Mode Label", "Standby");
      setBinary("HP1 - Defrost", false);
      setBinary("HP1 - 4-Way valve", false);

      if (!single) {
        setNumber("HP2 - Power Input", 5.1, "W");
        setNumber("HP2 - Heat Power", 0, "W");
        setNumber("HP2 - Cooling Power", 0, "W");
        setNumber("HP2 - COP", 0, "");
        setNumber("HP2 - Compressor frequency", 0, "Hz");
        setNumber("HP2 - Fan speed", 0, "rpm");
        setNumber("HP2 - Flow", 0, "L/h");
        setText("text_sensor", "HP2 - Working Mode Label", "Standby");
        setBinary("HP2 - Defrost", false);
        setBinary("HP2 - 4-Way valve", false);
      }
    }

    syncOverviewTelemetry(single);
  }

  function stepSimulation(force = false) {
    state.tick += 1;
    if (state.autoAnimate || force) {
      applyScenario(state.scenario);
      updateSummary();
      notifyMockUpdated();
    }
  }

  function handleSelectSet(name, value) {
    if (name === "Manual HP1 service mode" || name === "Manual HP2 service mode") {
      const hp = name.includes("HP1") ? "HP1" : "HP2";
      const otherName = hp === "HP1" ? "Manual HP2 service mode" : "Manual HP1 service mode";
      const flow = Number(getEntity("sensor", "Flow average (Selected)")?.value || 0);
      const otherMode = String(getEntity("select", otherName)?.value || "Standby");
      const requestedMode = String(value || "Standby");
      if (requestedMode !== "Standby" && state.commissioning.task !== "manual-hp") {
        state.commissioning.manualHpGuardStatusText = `${hp}: start de bediening eerst`;
        syncCommissioningEntities(state.installation === "single");
        updateSummary();
        notifyMockUpdated();
        return;
      }
      if (requestedMode !== "Standby" && flow < 250) {
        state.commissioning.manualHpGuardStatusText = `${hp}: wacht op voldoende flow`;
        syncCommissioningEntities(state.installation === "single");
        updateSummary();
        notifyMockUpdated();
        return;
      }
      if (requestedMode !== "Standby" && otherMode !== "Standby" && otherMode !== requestedMode) {
        state.commissioning.manualHpGuardStatusText = `${hp}: conflicterende werkmodus met ${hp === "HP1" ? "HP2" : "HP1"}`;
        syncCommissioningEntities(state.installation === "single");
        updateSummary();
        notifyMockUpdated();
        return;
      }
      const levelName = `Manual ${hp} compressor level`;
      state.commissioning[hp === "HP1" ? "manualHp1Level" : "manualHp2Level"] = 0;
      state.commissioning.manualHpGuardStatusText = "Vrijgegeven";
      setNumber(levelName, 0, "");
    }
    setText("select", name, value);
    if (name === "Preset") {
      applyPreset(value);
    } else if (name === "Firmware Update Channel") {
      clearOtaSimulation();
      setText("text_sensor", "OpenQuatt Release Channel", value);
      setText("text_sensor", "Firmware Update Status", "Idle");
      setNumber("Firmware Update Progress", 0, "%");
      const updateEntity = getEntity("update", "Firmware Update");
      const currentVersion = String(getEntity("text_sensor", "OpenQuatt Version")?.value || "v0.26.0");
      const latestVersion = value === "main" ? "v0.26.0" : "v0.26.1-dev3";
      if (updateEntity) {
        updateEntity.current_version = currentVersion;
        updateEntity.latest_version = latestVersion;
        updateEntity.release_url = getMockReleaseUrl(value);
        if (value === "main" || currentVersion === latestVersion) {
          updateEntity.state = "up_to_date";
          updateEntity.value = "up_to_date";
          updateEntity.summary = "Je preview gebruikt nu het stabiele kanaal. Er staat op dit moment geen nieuwere stable release klaar.";
        } else {
          updateEntity.state = "available";
          updateEntity.value = "available";
          updateEntity.summary = "Het dev-kanaal heeft een nieuwere OTA-build beschikbaar voor deze preview.";
        }
      }
    } else if (name === "Firmware Update Target") {
      clearOtaSimulation();
      setText("text_sensor", "Firmware Update Status", "Idle");
      setNumber("Firmware Update Progress", 0, "%");
      const updateEntity = getEntity("update", "Firmware Update");
      const currentVersion = String(getEntity("text_sensor", "OpenQuatt Version")?.value || "v0.26.0");
      if (updateEntity) {
        updateEntity.current_version = currentVersion;
        updateEntity.latest_version = value === "alternate connection" ? currentVersion : "v0.26.1-dev3";
        updateEntity.release_url = getMockReleaseUrl(String(getEntity("select", "Firmware Update Channel")?.value || "dev"));
        updateEntity.state = value === "alternate connection" ? "up_to_date" : "available";
        updateEntity.value = updateEntity.state;
        updateEntity.summary = value === "alternate connection"
          ? "Alternatieve verbindingsbuild geselecteerd voor deze preview."
          : "Normale firmware-update geselecteerd voor deze preview.";
      }
    } else if (name === "Debug Level") {
      appendLogHistoryEntry(`[I][oq_fw:376]: Runtime logger level updated to ${value}`);
    } else if (name === "Uurdetail bewaren") {
      state.energyHistoryHourRetention = value;
    } else if (name === "Power House response profile") {
      if (value === "Calm") {
        setNumber("Power House demand rise time", 12);
        setNumber("Power House demand fall time", 5);
      } else if (value === "Balanced") {
        setNumber("Power House demand rise time", 8);
        setNumber("Power House demand fall time", 3);
      } else if (value === "Responsive") {
        setNumber("Power House demand rise time", 5);
        setNumber("Power House demand fall time", 2);
      }
    }
    applyScenario(state.scenario);
    updateSummary();
    notifyMockUpdated();
  }

  function handleNumberSet(name, value) {
    setNumber(name, Number(value));
    if (name === "Manual flow service setpoint") {
      state.commissioning.manualFlowSetpoint = Number(value);
    } else if (name === "Manual HP1 compressor level") {
      state.commissioning.manualHp1Level = Number(value);
      setNumber("HP1 compressor level", Number(value), "");
    } else if (name === "Manual HP2 compressor level") {
      state.commissioning.manualHp2Level = Number(value);
      setNumber("HP2 compressor level", Number(value), "");
    }
    syncOverviewTelemetry(state.installation === "single");
    syncCommissioningEntities(state.installation === "single");
    updateSummary();
    notifyMockUpdated();
  }

  function handleTimeSet(name, value) {
    const normalized = String(value || "").trim().length === 5 ? `${value}:00` : String(value || "");
    setText("time", name, normalized);
    updateSummary();
    notifyMockUpdated();
  }

  function handleDateTimeSet(name, value) {
    const normalized = normalizeDateTimeValue(value) || OPENQUATT_RESUME_CLEAR_VALUE;
    setText("datetime", name, normalized);
    updateSummary();
    notifyMockUpdated();
  }

  function handleTextSet(name, value) {
    setText("text", name, String(value || "").trim());
    updateSummary();
    notifyMockUpdated();
  }

  function handleSwitchSet(name, enabled) {
    const entity = getEntity("switch", name);
    if (!entity) {
      return;
    }
    entity.value = Boolean(enabled);
    entity.state = Boolean(enabled);
    if (name === "Quick flow test") {
      handleButtonPress(enabled ? "Quick Flow Test Start" : "Quick Flow Test Abort");
      updateSummary();
      notifyMockUpdated();
      return;
    }
    if (name === "OpenQuatt Enabled" && enabled && getEntity("datetime", "OpenQuatt resume at")) {
      setText("datetime", "OpenQuatt resume at", OPENQUATT_RESUME_CLEAR_VALUE);
    }
    if (name === "RAM log history") {
      state.logHistoryEnabled = Boolean(enabled);
    }
    applyScenario(state.scenario);
    updateSummary();
    notifyMockUpdated();
  }

  function getOduRuntimeDesiredTable(hp, mode) {
    return ODU_RUNTIME_FREQUENCY_LEVELS.map((level) => (
      Number(getEntity("number", oduRuntimeValueName(hp, mode, level))?.value)
    ));
  }

  function validateOduRuntimeTable(values) {
    let previous = -Infinity;
    for (const value of values) {
      if (!Number.isFinite(value) || value < 0 || value > 120 || value < previous) {
        return false;
      }
      previous = value;
    }
    return true;
  }

  function setOduRuntimeStatus(hp, status) {
    setText("text_sensor", oduRuntimeControlName(hp, "status"), status);
  }

  function handleOduRuntimeLoad(hp) {
    const table = state.oduRuntimeFrequency[hp];
    if (!table) {
      return;
    }
    setOduRuntimeStatus(hp, "LOAD_REQUESTED");
    window.setTimeout(() => {
      ODU_RUNTIME_FREQUENCY_MODES.forEach((mode) => {
        ODU_RUNTIME_FREQUENCY_LEVELS.forEach((level) => {
          setNumber(oduRuntimeValueName(hp, mode, level), table[mode][level], "Hz");
        });
      });
      setOduRuntimeStatus(hp, "LOADED: 22/22 runtime registers");
      notifyMockUpdated();
    }, 320);
  }

  function handleOduRuntimeApply(hp) {
    const enable = getEntity("switch", oduRuntimeControlName(hp, "enable"));
    if (!enable?.value) {
      setOduRuntimeStatus(hp, "BLOCKED: enable switch is off");
      return;
    }

    setOduRuntimeStatus(hp, "GUARD_READ_REQUESTED: checking ODU state");
    const mode = String(getEntity("text_sensor", `${hp} - Working Mode Label`)?.value || "").trim();
    const compressorHz = Number(getEntity("sensor", `${hp} - Compressor frequency`)?.value);
    if (!mode || /unknown|onbekend/i.test(mode)) {
      setOduRuntimeStatus(hp, "BLOCKED: ODU mode unknown");
      return;
    }
    if (!/standby|stand-by/i.test(mode)) {
      setOduRuntimeStatus(hp, "BLOCKED: ODU is not in standby");
      return;
    }
    if (!Number.isFinite(compressorHz)) {
      setOduRuntimeStatus(hp, "BLOCKED: compressor frequency unknown");
      return;
    }
    if (compressorHz > 0.5) {
      setOduRuntimeStatus(hp, "BLOCKED: compressor is running");
      return;
    }

    const cooling = getOduRuntimeDesiredTable(hp, "cooling");
    const heating = getOduRuntimeDesiredTable(hp, "heating");
    if (!validateOduRuntimeTable(cooling)) {
      setOduRuntimeStatus(hp, "BLOCKED: invalid cooling table");
      return;
    }
    if (!validateOduRuntimeTable(heating)) {
      setOduRuntimeStatus(hp, "BLOCKED: invalid heating table");
      return;
    }

    state.oduRuntimeFrequency[hp].cooling = cooling;
    state.oduRuntimeFrequency[hp].heating = heating;
    enable.value = false;
    enable.state = false;
    setOduRuntimeStatus(hp, "WRITE_QUEUED: runtime table write requested");
    window.setTimeout(() => {
      setOduRuntimeStatus(hp, "WRITE_CONFIRMED: runtime write acknowledged");
      window.setTimeout(() => {
        setOduRuntimeStatus(hp, "APPLIED: runtime table written and read back");
        notifyMockUpdated();
      }, 320);
      notifyMockUpdated();
    }, 320);
  }

  function handleButtonPress(name) {
    const oduRuntimeButton = parseOduRuntimeButtonName(name);
    if (oduRuntimeButton) {
      if (oduRuntimeButton.action === "load") {
        handleOduRuntimeLoad(oduRuntimeButton.hp);
      } else {
        handleOduRuntimeApply(oduRuntimeButton.hp);
      }
      updateSummary();
      notifyMockUpdated();
      notifyDevControlsChanged();
      return;
    }

    if (name === "CM100 Start") {
      clearQuickFlowTestTimer();
      clearCommissioningTimers();
      state.commissioning.cm100Active = true;
      state.commissioning.globalStatus = "CM100 READY";
      setCommissioningPhase("none", "idle", {
        boilerResult: state.commissioning.boilerResult || 0,
        boilerConfidence: state.commissioning.boilerConfidence || 0,
        flowKpSuggested: state.commissioning.flowKpSuggested || 0,
        flowKiSuggested: state.commissioning.flowKiSuggested || 0,
      });
      setText("text_sensor", "Control Mode (Label)", "CM100 - Commissioning");
      setText("text_sensor", "Flow Mode", "CM100 idle");
      setText("text_sensor", "Commissioning status", "CM100 READY");
      state.commissioning.boilerStatusText = "IDLE";
      state.commissioning.autotuneStatusText = "IDLE";
      state.commissioning.airPurgeStatusText = "IDLE";
      state.commissioning.airPurgeRemaining = 0;
      state.commissioning.airPurgePhase = 0;
      state.commissioning.airPurgeTargetIpwm = 0;
      state.commissioning.manualFlowStatusText = "IDLE";
      state.commissioning.manualHpStatusText = "IDLE";
      state.commissioning.manualHpGuardStatusText = "Vrijgegeven";
      state.commissioning.manualHp1Level = 0;
      state.commissioning.manualHp2Level = 0;
      resetHpWaterCalibrationMock();
      setText("text_sensor", "Boiler power test status", "IDLE");
      setText("text_sensor", "Flow Autotune status", "IDLE");
      setText("text_sensor", "Air purge status", "IDLE");
      setText("text_sensor", "Manual flow status", "IDLE");
      setText("text_sensor", "Manual HP status", "IDLE");
      setText("text_sensor", "Manual HP guard status", "Vrijgegeven");
      setNumber("Air purge remaining", 0, "s");
      setNumber("Air purge phase", 0, "");
      setNumber("Air purge target iPWM", 0, "iPWM");
      setNumber("Manual HP1 compressor level", 0, "");
      setNumber("Manual HP2 compressor level", 0, "");
      setText("select", "Manual HP1 service mode", "Standby");
      setText("select", "Manual HP2 service mode", "Standby");
      setNumber("Flow average (Selected)", 0, "L/h");
      setBinary("Boiler power test active", false);
      setBinary("Air purge active", false);
      setBinary("Manual flow active", false);
      const quickFlowTest = getEntity("switch", "Quick flow test");
      if (quickFlowTest) {
        quickFlowTest.value = false;
        quickFlowTest.state = false;
      }
      setBinary("Manual HP active", false);
      setBinary("Boiler active", false);
    } else if (name === "CM100 Stop") {
      clearQuickFlowTestTimer();
      clearCommissioningTimers();
      state.commissioning.cm100Active = false;
      state.commissioning.globalStatus = "CM100 STOPPED";
      setCommissioningPhase("none", "idle");
      setText("text_sensor", "Control Mode (Label)", "CM0 - Standby");
      setText("text_sensor", "Flow Mode", "Gepauzeerd");
      setText("text_sensor", "Commissioning status", "CM100 STOPPED");
      state.commissioning.boilerStatusText = "IDLE";
      state.commissioning.autotuneStatusText = "IDLE";
      state.commissioning.airPurgeStatusText = "IDLE";
      state.commissioning.airPurgeRemaining = 0;
      state.commissioning.airPurgePhase = 0;
      state.commissioning.airPurgeTargetIpwm = 0;
      state.commissioning.manualFlowStatusText = "IDLE";
      state.commissioning.manualHpStatusText = "IDLE";
      state.commissioning.manualHpGuardStatusText = "Vrijgegeven";
      state.commissioning.manualHp1Level = 0;
      state.commissioning.manualHp2Level = 0;
      resetHpWaterCalibrationMock();
      setText("text_sensor", "Boiler power test status", "IDLE");
      setText("text_sensor", "Flow Autotune status", "IDLE");
      setText("text_sensor", "Air purge status", "IDLE");
      setText("text_sensor", "Manual flow status", "IDLE");
      setText("text_sensor", "Manual HP status", "IDLE");
      setText("text_sensor", "Manual HP guard status", "Vrijgegeven");
      setNumber("Air purge remaining", 0, "s");
      setNumber("Air purge phase", 0, "");
      setNumber("Air purge target iPWM", 0, "iPWM");
      setNumber("Manual HP1 compressor level", 0, "");
      setNumber("Manual HP2 compressor level", 0, "");
      setText("select", "Manual HP1 service mode", "Standby");
      setText("select", "Manual HP2 service mode", "Standby");
      setBinary("CM100 active", false);
      setBinary("Boiler power test active", false);
      setBinary("Air purge active", false);
      setBinary("Manual flow active", false);
      const quickFlowTest = getEntity("switch", "Quick flow test");
      if (quickFlowTest) {
        quickFlowTest.value = false;
        quickFlowTest.state = false;
      }
      setBinary("Manual HP active", false);
      setBinary("Boiler active", false);
    } else if (name === "Boiler Power Test Start") {
      if (!state.commissioning.cm100Active) {
        state.commissioning.boilerStatusText = "REFUSED: CM100 required";
        setText("text_sensor", "Boiler power test status", "REFUSED: CM100 required");
      } else {
        clearQuickFlowTestTimer();
        clearCommissioningTimers();
        state.commissioning.globalStatus = "BOILER TEST STARTED";
        setCommissioningPhase("boiler", "requested", {
          boilerResult: state.commissioning.boilerResult || 0,
          boilerConfidence: state.commissioning.boilerConfidence || 0,
        });
        setText("text_sensor", "Control Mode (Label)", "CM100 - Commissioning");
        setText("text_sensor", "Flow Mode", "CM100 boiler test");
        setNumber("Flow average (Selected)", 800, "L/h");
        setBinary("Boiler power test active", true);
        state.commissioning.boilerStatusText = "REQUESTED";
        setText("text_sensor", "Boiler power test status", "REQUESTED");
        setText("text_sensor", "Commissioning status", "BOILER TEST STARTED");
        scheduleCommissioningStep(700, () => {
          setCommissioningPhase("boiler", "flow_settling");
          state.commissioning.boilerStatusText = "FLOW_SETTLING";
          setText("text_sensor", "Boiler power test status", "FLOW_SETTLING");
        });
        scheduleCommissioningStep(1700, () => {
          setCommissioningPhase("boiler", "boiler_settling");
          state.commissioning.boilerStatusText = "BOILER_SETTLING";
          setText("text_sensor", "Boiler power test status", "BOILER_SETTLING");
          setBinary("Boiler active", true);
          setNumber("Boiler Heat Power", 0, "W");
        });
        scheduleCommissioningStep(2900, () => {
          setCommissioningPhase("boiler", "measuring");
          state.commissioning.boilerStatusText = "MEASURING";
          setText("text_sensor", "Boiler power test status", "MEASURING");
          setBinary("Boiler active", true);
          setNumber("Boiler Heat Power", 1803, "W");
          setNumber("Flow average (Selected)", 802, "L/h");
        });
        scheduleCommissioningStep(4300, () => {
          setCommissioningPhase("boiler", "done", {
            boilerResult: 1803,
            boilerConfidence: 65,
          });
          state.commissioning.boilerStatusText = "DONE: 1803W (conf 65%)";
          setText("text_sensor", "Boiler power test status", "DONE: 1803W (conf 65%)");
          setText("text_sensor", "Commissioning status", "CM100 READY");
          setBinary("Boiler power test active", false);
          setBinary("Boiler active", false);
          setNumber("Boiler Heat Power", 0, "W");
          state.commissioning.globalStatus = "CM100 READY";
        });
      }
    } else if (name === "Boiler Power Test Abort") {
      clearCommissioningTimers();
      state.commissioning.globalStatus = state.commissioning.cm100Active ? "CM100 READY" : "CM0 - Standby";
      setCommissioningPhase("boiler", "aborted");
      state.commissioning.boilerStatusText = "ABORTED";
      setText("text_sensor", "Boiler power test status", "ABORTED");
      setText("text_sensor", "Commissioning status", state.commissioning.globalStatus);
      setBinary("Boiler power test active", false);
      setBinary("Boiler active", false);
      setNumber("Boiler Heat Power", 0, "W");
    } else if (name === "Boiler Power Test Apply") {
      const rounded = roundToHundred(state.commissioning.boilerResult || Number(getEntity("sensor", "Boiler power test result")?.value || 0));
      setNumber("Boiler rated heat power", rounded, "W");
      state.commissioning.boilerStatusText = `APPLIED: ${rounded}W`;
      setText("text_sensor", "Boiler power test status", `APPLIED: ${rounded}W`);
      setCommissioningPhase("boiler", "applied", {
        boilerResult: rounded,
      });
      state.commissioning.globalStatus = "CM100 READY";
    } else if (name === "Flow Autotune Start") {
      if (!state.commissioning.cm100Active) {
        state.commissioning.autotuneStatusText = "REFUSED: CM100 required";
        setText("text_sensor", "Flow Autotune status", "REFUSED: CM100 required");
      } else {
        clearCommissioningTimers();
        state.commissioning.globalStatus = "FLOW AUTOTUNE STARTED";
        setCommissioningPhase("autotune", "requested", {
          flowKpSuggested: state.commissioning.flowKpSuggested || 0,
          flowKiSuggested: state.commissioning.flowKiSuggested || 0,
        });
        setText("text_sensor", "Control Mode (Label)", "CM100 - Commissioning");
        setText("text_sensor", "Flow Mode", "CM100 flow autotune");
        setNumber("Flow average (Selected)", 790, "L/h");
        state.commissioning.autotuneStatusText = "REQUESTED";
        setText("text_sensor", "Flow Autotune status", "REQUESTED");
        setText("text_sensor", "Commissioning status", "FLOW AUTOTUNE STARTED");
        scheduleCommissioningStep(700, () => {
          setCommissioningPhase("autotune", "baseline_settling");
          state.commissioning.autotuneStatusText = "BASELINE_SETTLING";
          setText("text_sensor", "Flow Autotune status", "BASELINE_SETTLING");
        });
        scheduleCommissioningStep(1700, () => {
          setCommissioningPhase("autotune", "step_test");
          state.commissioning.autotuneStatusText = "STEP_TEST";
          setText("text_sensor", "Flow Autotune status", "STEP_TEST");
          setNumber("Flow average (Selected)", 798, "L/h");
        });
        scheduleCommissioningStep(2900, () => {
          setCommissioningPhase("autotune", "measuring", {
            flowKpSuggested: 0.42,
            flowKiSuggested: 0.08,
          });
          state.commissioning.autotuneStatusText = "MEASURING";
          setText("text_sensor", "Flow Autotune status", "MEASURING");
        });
        scheduleCommissioningStep(4200, () => {
          setCommissioningPhase("autotune", "done", {
            flowKpSuggested: 0.42,
            flowKiSuggested: 0.08,
          });
          state.commissioning.autotuneStatusText = "DONE: Kp 0.42 Ki 0.08";
          setText("text_sensor", "Flow Autotune status", "DONE: Kp 0.42 Ki 0.08");
          setText("text_sensor", "Commissioning status", "CM100 READY");
          state.commissioning.globalStatus = "CM100 READY";
        });
      }
    } else if (name === "Flow Autotune Abort") {
      clearCommissioningTimers();
      state.commissioning.globalStatus = state.commissioning.cm100Active ? "CM100 READY" : "CM0 - Standby";
      setCommissioningPhase("autotune", "aborted");
      state.commissioning.autotuneStatusText = "ABORTED";
      setText("text_sensor", "Flow Autotune status", "ABORTED");
      setText("text_sensor", "Commissioning status", state.commissioning.globalStatus);
    } else if (name === "Apply Flow Autotune Kp-Ki") {
      const kp = Number(state.commissioning.flowKpSuggested || getEntity("number", "Flow Autotune Kp suggested")?.value || 0);
      const ki = Number(state.commissioning.flowKiSuggested || getEntity("number", "Flow Autotune Ki suggested")?.value || 0);
      setNumber("Flow PI Kp", kp, "");
      setNumber("Flow PI Ki", ki, "");
      state.commissioning.autotuneStatusText = `APPLIED: Kp ${kp.toFixed(2)} Ki ${ki.toFixed(2)}`;
      setText("text_sensor", "Flow Autotune status", `APPLIED: Kp ${kp.toFixed(2)} Ki ${ki.toFixed(2)}`);
      setCommissioningPhase("autotune", "applied", {
        flowKpSuggested: kp,
        flowKiSuggested: ki,
      });
      state.commissioning.globalStatus = "CM100 READY";
    } else if (name === "Air Purge Start") {
      if (!state.commissioning.cm100Active) {
        state.commissioning.airPurgeStatusText = "REFUSED: CM100 required";
        setText("text_sensor", "Air purge status", "REFUSED: CM100 required");
      } else {
        clearCommissioningTimers();
        state.commissioning.globalStatus = "AIR PURGE STARTED";
        state.commissioning.airPurgeStatusText = "PHASE1_STEADY";
        state.commissioning.airPurgeRemaining = 300;
        state.commissioning.airPurgePhase = 1;
        state.commissioning.airPurgeTargetIpwm = 800;
        setCommissioningPhase("purge", "steady");
        setText("text_sensor", "Control Mode (Label)", "CM100 - Commissioning");
        setText("text_sensor", "Flow Mode", "CM100 air purge");
        setText("text_sensor", "Commissioning status", "AIR PURGE STARTED");
        setText("text_sensor", "Air purge status", "PHASE1_STEADY");
        setBinary("Air purge active", true);
        setNumber("Air purge remaining", 300, "s");
        setNumber("Air purge phase", 1, "");
        setNumber("Air purge target iPWM", 800, "iPWM");
        setNumber("Flow average (Selected)", 680, "L/h");
        scheduleCommissioningStep(1200, () => {
          setCommissioningPhase("purge", "pulse_hard");
          state.commissioning.airPurgeStatusText = "PHASE2_PULSE_HARD";
          state.commissioning.airPurgeRemaining = 220;
          state.commissioning.airPurgePhase = 2;
          state.commissioning.airPurgeTargetIpwm = 300;
          setText("text_sensor", "Air purge status", "PHASE2_PULSE_HARD");
        });
        scheduleCommissioningStep(2300, () => {
          setCommissioningPhase("purge", "pulse_rest");
          state.commissioning.airPurgeStatusText = "PHASE2_PULSE_REST";
          state.commissioning.airPurgeRemaining = 150;
          state.commissioning.airPurgePhase = 2;
          state.commissioning.airPurgeTargetIpwm = 800;
          setText("text_sensor", "Air purge status", "PHASE2_PULSE_REST");
        });
        scheduleCommissioningStep(3400, () => {
          setCommissioningPhase("purge", "stabilize");
          state.commissioning.airPurgeStatusText = "PHASE3_STABILIZE";
          state.commissioning.airPurgeRemaining = 55;
          state.commissioning.airPurgePhase = 3;
          state.commissioning.airPurgeTargetIpwm = 650;
          setText("text_sensor", "Air purge status", "PHASE3_STABILIZE");
        });
        scheduleCommissioningStep(4700, () => {
          const returnToAuto = isSwitchEnabled("Air purge return to Auto");
          setCommissioningPhase("purge", "done");
          state.commissioning.airPurgeStatusText = "DONE";
          state.commissioning.airPurgeRemaining = 0;
          state.commissioning.airPurgePhase = 0;
          state.commissioning.airPurgeTargetIpwm = 0;
          setText("text_sensor", "Air purge status", "DONE");
          setBinary("Air purge active", false);
          setNumber("Air purge remaining", 0, "s");
          setNumber("Air purge phase", 0, "");
          setNumber("Air purge target iPWM", 0, "iPWM");
          if (returnToAuto) {
            state.commissioning.cm100Active = false;
            state.commissioning.globalStatus = "IDLE";
            setBinary("CM100 active", false);
            setText("text_sensor", "Commissioning status", "IDLE");
          } else {
            state.commissioning.globalStatus = "CM100 READY";
            setText("text_sensor", "Commissioning status", "CM100 READY");
            setText("text_sensor", "Flow Mode", "CM100 idle");
          }
        });
      }
    } else if (name === "Air Purge Abort") {
      clearCommissioningTimers();
      setCommissioningPhase("purge", "aborted");
      state.commissioning.airPurgeStatusText = "ABORTED";
      state.commissioning.airPurgeRemaining = 0;
      state.commissioning.airPurgePhase = 0;
      state.commissioning.airPurgeTargetIpwm = 0;
      state.commissioning.globalStatus = state.commissioning.cm100Active ? "CM100 READY" : "CM0 - Standby";
      setText("text_sensor", "Air purge status", "ABORTED");
      setText("text_sensor", "Commissioning status", state.commissioning.globalStatus);
      setBinary("Air purge active", false);
      setNumber("Air purge remaining", 0, "s");
      setNumber("Air purge phase", 0, "");
      setNumber("Air purge target iPWM", 0, "iPWM");
      if (state.commissioning.cm100Active) {
        setText("text_sensor", "Flow Mode", "CM100 idle");
      }
    } else if (name === "HP Water Calibration Start") {
      if (!state.commissioning.cm100Active) {
        state.commissioning.hpWaterCalibrationStatusText = "REFUSED: CM100 required";
        setText("text_sensor", "HP water calibration status", "REFUSED: CM100 required");
      } else {
        clearCommissioningTimers();
        state.commissioning.globalStatus = "HP WATER CAL STARTED";
        state.commissioning.hpWaterCalibrationStatusText = "REQUESTED";
        state.commissioning.hpWaterCalibrationRemaining = 420;
        state.commissioning.hpWaterCalibrationPhase = 1;
        state.commissioning.hpWaterCalibrationSpread = NaN;
        state.commissioning.hpWaterCalibrationSupplyDelta = NaN;
        state.commissioning.hpWaterCalibrationStableProgress = 0;
        state.commissioning.hpWaterCalibrationStableRequired = 60;
        state.commissioning.hpWaterCalibrationResultReference = NaN;
        state.commissioning.hpWaterCalibrationResultSpreadBefore = NaN;
        state.commissioning.hpWaterCalibrationResultExpectedSpread = NaN;
        setCommissioningPhase("hp-water-calibration", "requested");
        setText("text_sensor", "Control Mode (Label)", "CM100 - Commissioning");
        setText("text_sensor", "Flow Mode", "HP WATER CAL");
        setText("text_sensor", "Commissioning status", "HP WATER CAL STARTED");
        setText("text_sensor", "HP water calibration status", "REQUESTED");
        setBinary("HP water calibration active", true);
        setNumber("HP water calibration remaining", 420, "s");
        setNumber("HP water calibration phase", 1, "");
        setNumber("HP water calibration stable window progress", 0, "s");
        setNumber("HP water calibration stable window required", 60, "s");
        setNumber("Flow average (Selected)", 735, "L/h");
        scheduleCommissioningStep(800, () => {
          setCommissioningPhase("hp-water-calibration", "mixing");
          state.commissioning.hpWaterCalibrationStatusText = "MIXING";
          state.commissioning.hpWaterCalibrationRemaining = 300;
          state.commissioning.hpWaterCalibrationPhase = 2;
          setText("text_sensor", "HP water calibration status", "MIXING");
        });
        scheduleCommissioningStep(2200, () => {
          setCommissioningPhase("hp-water-calibration", "measuring");
          state.commissioning.hpWaterCalibrationStatusText = "MEASURING";
          state.commissioning.hpWaterCalibrationRemaining = 120;
          state.commissioning.hpWaterCalibrationPhase = 3;
          state.commissioning.hpWaterCalibrationSpread = 0.16;
          state.commissioning.hpWaterCalibrationStableProgress = 24;
          setText("text_sensor", "HP water calibration status", "MEASURING");
        });
        scheduleCommissioningStep(3900, () => {
          const single = state.installation === "single";
          const hp1In = Number(getEntity("sensor", "HP1 - Water in temperature raw")?.value || getEntity("sensor", "HP1 - Water in temperature")?.value || 25.08);
          const hp1Out = Number(getEntity("sensor", "HP1 - Water out temperature raw")?.value || getEntity("sensor", "HP1 - Water out temperature")?.value || 25.34);
          const hp2In = Number(getEntity("sensor", "HP2 - Water in temperature raw")?.value || getEntity("sensor", "HP2 - Water in temperature")?.value || hp1In + 0.07);
          const hp2Out = Number(getEntity("sensor", "HP2 - Water out temperature raw")?.value || getEntity("sensor", "HP2 - Water out temperature")?.value || hp1Out - 0.05);
          const values = single ? [hp1In, hp1Out] : [hp1In, hp1Out, hp2In, hp2Out];
          const reference = values.reduce((sum, value) => sum + value, 0) / values.length;
          const supply = Number(getEntity("sensor", "Water Supply Temp (Selected)")?.value);
          state.commissioning.hpWaterCalibrationSuggested.hp1In = Number((reference - hp1In).toFixed(2));
          state.commissioning.hpWaterCalibrationSuggested.hp1Out = Number((reference - hp1Out).toFixed(2));
          state.commissioning.hpWaterCalibrationSuggested.hp2In = single ? 0 : Number((reference - hp2In).toFixed(2));
          state.commissioning.hpWaterCalibrationSuggested.hp2Out = single ? 0 : Number((reference - hp2Out).toFixed(2));
          state.commissioning.hpWaterCalibrationSpread = Number((Math.max(...values) - Math.min(...values)).toFixed(2));
          state.commissioning.hpWaterCalibrationSupplyDelta = Number.isFinite(supply) ? Number((reference - supply).toFixed(2)) : NaN;
          state.commissioning.hpWaterCalibrationStableProgress = 60;
          state.commissioning.hpWaterCalibrationResultReference = Number(reference.toFixed(2));
          state.commissioning.hpWaterCalibrationResultSpreadBefore = state.commissioning.hpWaterCalibrationSpread;
          state.commissioning.hpWaterCalibrationResultExpectedSpread = 0;
          state.commissioning.hpWaterCalibrationResultRawAverages.hp1In = Number(hp1In.toFixed(2));
          state.commissioning.hpWaterCalibrationResultRawAverages.hp1Out = Number(hp1Out.toFixed(2));
          state.commissioning.hpWaterCalibrationResultRawAverages.hp2In = single ? NaN : Number(hp2In.toFixed(2));
          state.commissioning.hpWaterCalibrationResultRawAverages.hp2Out = single ? NaN : Number(hp2Out.toFixed(2));
          state.commissioning.hpWaterCalibrationRemaining = 0;
          state.commissioning.hpWaterCalibrationPhase = 4;
          state.commissioning.hpWaterCalibrationStatusText = single ? "DONE: HP1 relative offsets" : "DONE: 4 sensor offsets";
          state.commissioning.globalStatus = "CM100 READY";
          setCommissioningPhase("hp-water-calibration", "done");
          setText("text_sensor", "HP water calibration status", state.commissioning.hpWaterCalibrationStatusText);
          setText("text_sensor", "Commissioning status", "CM100 READY");
          setBinary("HP water calibration active", false);
          setText("text_sensor", "Flow Mode", "CM100 idle");
        });
      }
    } else if (name === "HP Water Calibration Abort") {
      clearCommissioningTimers();
      setCommissioningPhase("hp-water-calibration", "aborted");
      state.commissioning.globalStatus = state.commissioning.cm100Active ? "CM100 READY" : "CM0 - Standby";
      resetHpWaterCalibrationMock("ABORTED");
      setText("text_sensor", "Commissioning status", state.commissioning.globalStatus);
      setText("text_sensor", "Flow Mode", state.commissioning.cm100Active ? "CM100 idle" : "Gepauzeerd");
      setNumber("Flow average (Selected)", 0, "L/h");
    } else if (name === "Apply HP Water Calibration Offsets") {
      const suggested = state.commissioning.hpWaterCalibrationSuggested;
      setNumber("HP1 water in temperature offset", suggested.hp1In, "\u00B0C");
      setNumber("HP1 water out temperature offset", suggested.hp1Out, "\u00B0C");
      setNumber("HP2 water in temperature offset", suggested.hp2In, "\u00B0C");
      setNumber("HP2 water out temperature offset", suggested.hp2Out, "\u00B0C");
      [
        ["HP1", "in"],
        ["HP1", "out"],
        ["HP2", "in"],
        ["HP2", "out"],
      ].forEach(([hp, side]) => {
        const raw = getEntity("sensor", `${hp} - Water ${side} temperature raw`);
        if (raw) {
          setNumber(`${hp} - Water ${side} temperature`, raw.value, raw.uom || "\u00B0C");
        }
      });
      state.commissioning.hpWaterCalibrationStatusText = "APPLIED";
      state.commissioning.globalStatus = "CM100 READY";
      setCommissioningPhase("hp-water-calibration", "applied");
      setText("text_sensor", "HP water calibration status", "APPLIED");
      setText("text_sensor", "Commissioning status", "CM100 READY");
    } else if (name === "Manual Flow Start") {
      if (!state.commissioning.cm100Active) {
        state.commissioning.manualFlowStatusText = "REFUSED: CM100 required";
        setText("text_sensor", "Manual flow status", "REFUSED: CM100 required");
      } else {
        state.commissioning.globalStatus = "MANUAL FLOW ACTIVE";
        state.commissioning.manualFlowStatusText = "ACTIVE";
        state.commissioning.manualFlowSetpoint = Number(getEntity("number", "Manual flow service setpoint")?.value || 800);
        setCommissioningPhase("manual-flow", "active");
        setText("text_sensor", "Commissioning status", "MANUAL FLOW ACTIVE");
        setText("text_sensor", "Manual flow status", "ACTIVE");
        setText("text_sensor", "Flow Mode", "MANUAL FLOW");
        setBinary("Manual flow active", true);
        setNumber("Flow average (Selected)", state.commissioning.manualFlowSetpoint - 8, "L/h");
        setNumber("Manual flow target iPWM", state.commissioning.manualFlowTargetIpwm, "iPWM");
      }
    } else if (name === "Manual Flow Abort") {
      state.commissioning.globalStatus = state.commissioning.cm100Active ? "CM100 READY" : "CM0 - Standby";
      state.commissioning.manualFlowStatusText = "STOPPED";
      setCommissioningPhase("manual-flow", "aborted");
      setText("text_sensor", "Commissioning status", state.commissioning.globalStatus);
      setText("text_sensor", "Manual flow status", "STOPPED");
      setText("text_sensor", "Flow Mode", state.commissioning.cm100Active ? "CM100 idle" : "Gepauzeerd");
      setBinary("Manual flow active", false);
      setNumber("Flow average (Selected)", 0, "L/h");
    } else if (name === "Quick Flow Test Start") {
      if (!state.commissioning.cm100Active) {
        setText("text_sensor", "Commissioning status", "REFUSED: CM100 required");
        const quickFlowTest = getEntity("switch", "Quick flow test");
        if (quickFlowTest) {
          quickFlowTest.value = false;
          quickFlowTest.state = false;
        }
      } else {
        clearQuickFlowTestTimer();
        clearCommissioningTimers();
        state.commissioning.globalStatus = "QUICK FLOW TEST ACTIVE";
        setCommissioningPhase("manual-flow", "active");
        setText("text_sensor", "Commissioning status", "QUICK FLOW TEST ACTIVE");
        setText("text_sensor", "Flow Mode", "QUICK FLOW TEST");
        setBinary("Manual flow active", true);
        setNumber("Flow average (Selected)", 640, "L/h");
        state.quickFlowTestTimer = window.setTimeout(() => {
          state.quickFlowTestTimer = null;
          state.commissioning.cm100Active = false;
          state.commissioning.globalStatus = "IDLE";
          setCommissioningPhase("none", "idle");
          setText("text_sensor", "Control Mode (Label)", "CM0 - Standby");
          setText("text_sensor", "Commissioning status", "IDLE");
          setText("text_sensor", "Flow Mode", "Gepauzeerd");
          setBinary("CM100 active", false);
          setBinary("Manual flow active", false);
          const quickFlowTest = getEntity("switch", "Quick flow test");
          if (quickFlowTest) {
            quickFlowTest.value = false;
            quickFlowTest.state = false;
          }
          setNumber("Flow average (Selected)", 0, "L/h");
          applyScenario(state.scenario);
          updateSummary();
          notifyMockUpdated();
        }, 3000);
      }
    } else if (name === "Quick Flow Test Abort") {
      clearQuickFlowTestTimer();
      clearCommissioningTimers();
      state.commissioning.cm100Active = false;
      state.commissioning.globalStatus = "IDLE";
      setCommissioningPhase("none", "idle");
      setText("text_sensor", "Control Mode (Label)", "CM0 - Standby");
      setText("text_sensor", "Commissioning status", "IDLE");
      setText("text_sensor", "Flow Mode", "Gepauzeerd");
      setBinary("CM100 active", false);
      setBinary("Manual flow active", false);
      const quickFlowTest = getEntity("switch", "Quick flow test");
      if (quickFlowTest) {
        quickFlowTest.value = false;
        quickFlowTest.state = false;
      }
      setNumber("Flow average (Selected)", 0, "L/h");
    } else if (name === "Apply Manual Flow To Heating") {
      setNumber("Flow Setpoint", Number(getEntity("number", "Manual flow service setpoint")?.value || 0), "L/h");
      state.commissioning.manualFlowStatusText = "SAVED FOR HEATING";
      setText("text_sensor", "Manual flow status", "SAVED FOR HEATING");
    } else if (name === "Apply Manual Flow To Cooling") {
      setNumber("Cooling Flow Setpoint", Number(getEntity("number", "Manual flow service setpoint")?.value || 0), "L/h");
      state.commissioning.manualFlowStatusText = "SAVED FOR COOLING";
      setText("text_sensor", "Manual flow status", "SAVED FOR COOLING");
    } else if (name === "Manual HP Start") {
      if (!state.commissioning.cm100Active) {
        state.commissioning.manualHpStatusText = "REFUSED: CM100 required";
        setText("text_sensor", "Manual HP status", "REFUSED: CM100 required");
      } else {
        state.commissioning.globalStatus = "MANUAL HP ACTIVE";
        state.commissioning.manualHpStatusText = "ACTIVE: select mode and compressor level";
        state.commissioning.manualHpGuardStatusText = "Vrijgegeven";
        state.commissioning.manualHp1Level = 0;
        state.commissioning.manualHp2Level = 0;
        setNumber("Manual HP1 compressor level", 0, "");
        setNumber("Manual HP2 compressor level", 0, "");
        setText("select", "Manual HP1 service mode", "Standby");
        setText("select", "Manual HP2 service mode", "Standby");
        setCommissioningPhase("manual-hp", "active");
        setText("text_sensor", "Commissioning status", "MANUAL HP ACTIVE");
        setText("text_sensor", "Manual HP status", state.commissioning.manualHpStatusText);
        setText("text_sensor", "Manual HP guard status", state.commissioning.manualHpGuardStatusText);
        setText("text_sensor", "Flow Mode", "MANUAL HP");
        setBinary("Manual HP active", true);
        setNumber("Flow average (Selected)", 792, "L/h");
      }
    } else if (name === "Manual HP Abort") {
      state.commissioning.globalStatus = state.commissioning.cm100Active ? "CM100 READY" : "CM0 - Standby";
      state.commissioning.manualHpStatusText = "STOPPED";
      state.commissioning.manualHpGuardStatusText = "Vrijgegeven";
      state.commissioning.manualHp1Level = 0;
      state.commissioning.manualHp2Level = 0;
      setNumber("Manual HP1 compressor level", 0, "");
      setNumber("Manual HP2 compressor level", 0, "");
      setText("select", "Manual HP1 service mode", "Standby");
      setText("select", "Manual HP2 service mode", "Standby");
      setCommissioningPhase("manual-hp", "aborted");
      setText("text_sensor", "Commissioning status", state.commissioning.globalStatus);
      setText("text_sensor", "Manual HP status", "STOPPED");
      setText("text_sensor", "Manual HP guard status", "Vrijgegeven");
      setText("text_sensor", "Flow Mode", state.commissioning.cm100Active ? "CM100 idle" : "Gepauzeerd");
      setBinary("Manual HP active", false);
      setNumber("HP1 compressor level", 0, "");
      setNumber("HP2 compressor level", 0, "");
    } else if (name === "Complete setup") {
      state.complete = true;
    } else if (name === "Reset setup state") {
      state.complete = false;
    } else if (name === "Acknowledge compressor cycling alert") {
      if (state.diagnostics !== "cycling") {
        clearMockCompressorCyclingAlert();
        if (state.diagnostics === "cycling-recovered") {
          state.diagnostics = "clear";
        }
      }
    } else if (name === "Check Firmware Updates") {
      const channel = String(getEntity("select", "Firmware Update Channel")?.value || "dev");
      const target = String(getEntity("select", "Firmware Update Target")?.value || "current build");
      const updateEntity = getEntity("update", "Firmware Update");
      const currentVersion = String(getEntity("text_sensor", "OpenQuatt Version")?.value || "v0.26.0");
      const latestVersion = target === "alternate connection" ? currentVersion : channel === "main" ? "v0.26.0" : "v0.26.1-dev3";
      clearOtaSimulation();
      setText("text_sensor", "Firmware Update Status", "Idle");
      setNumber("Firmware Update Progress", 0, "%");
      if (updateEntity) {
        updateEntity.current_version = currentVersion;
        updateEntity.latest_version = latestVersion;
        updateEntity.release_url = getMockReleaseUrl(channel);
        updateEntity.state = currentVersion === latestVersion ? "up_to_date" : "available";
        updateEntity.value = updateEntity.state;
      }
    } else if (name === "Install Firmware Update Target") {
      handleUpdateInstall("Firmware Update");
    } else if (name === "Install Firmware Test OTA") {
      handleUpdateInstall("Firmware Test OTA");
    } else if (name === "Trendhistorie nu opslaan") {
      state.trendFlashLastFlushAt = Date.now();
      state.trendFlashNewestAt = Date.now() - (2 * 60 * 1000);
      state.trendFlashWrites += 1;
      state.trendFlashStoredKiB = Math.min(360, Number((state.trendFlashStoredKiB + 0.5).toFixed(1)));
    } else if (name === "Lifetime energiehistorie nu opslaan") {
      captureCurrentEnergyHistoryRecord();
    } else if (name === "Lifetime energiehistorie wissen") {
      state.energyHistoryRecords = [];
      state.energyHistoryHourRecords = [];
      state.energyHistoryWrites = 0;
      state.energyHistoryLastWriteAt = Date.now();
      updateEnergyHistoryStats();
    } else if (name === "Restart") {
      state.apiSecurity.transportActive = Boolean(state.apiSecurity.enabled);
      state.apiSecurity.pendingRestart = false;
      state.apiSecurity.source = state.apiSecurity.enabled ? "stored" : "bootstrap-disabled";
    }
    updateSummary();
    notifyMockUpdated();
    notifyDevControlsChanged();
  }

  function handleUpdateInstall(name) {
    if (name !== "Firmware Update" && name !== "Firmware Test OTA") {
      return;
    }
    const testFirmware = name === "Firmware Test OTA";
    const updateEntity = getEntity("update", "Firmware Update");
    if (!updateEntity) {
      return;
    }
    clearOtaSimulation();

    const updateTarget = String(getEntity("select", "Firmware Update Target")?.value || "current build");
    const targetConnection = updateTarget === "alternate connection"
      ? state.connection === "wifi" ? "eth" : "wifi"
      : state.connection;
    const targetVersion = testFirmware
      ? "v0.26.0-pr.test"
      : String(updateEntity.latest_version || updateEntity.current_version || "v0.26.0");
    const scheduleStep = (delay, callback) => {
      const timer = window.setTimeout(() => {
        callback();
        updateSummary();
        notifyMockUpdated();
      }, delay);
      state.otaTimers.push(timer);
    };

    updateEntity.state = "installing";
    updateEntity.value = "installing";
    updateEntity.summary = testFirmware
      ? "Testfirmware wordt voorbereid in deze preview."
      : "Firmware wordt voorbereid voor upload in deze preview.";
    setText("text_sensor", "Firmware Update Status", "Starting");
    setNumber("Firmware Update Progress", 0, "%");
    notifyMockUpdated();

    scheduleStep(700, () => {
      updateEntity.summary = testFirmware
        ? "Testfirmware wordt gedownload in deze preview."
        : "Firmware wordt geüpload in deze preview.";
      setText("text_sensor", "Firmware Update Status", "Uploading");
      setNumber("Firmware Update Progress", 18, "%");
    });

    scheduleStep(1500, () => {
      setNumber("Firmware Update Progress", 44, "%");
    });

    scheduleStep(2400, () => {
      setNumber("Firmware Update Progress", 73, "%");
    });

    scheduleStep(3300, () => {
      updateEntity.summary = "Firmware is geplaatst. Device start opnieuw op in deze preview.";
      setText("text_sensor", "Firmware Update Status", "Rebooting");
      setNumber("Firmware Update Progress", 100, "%");
    });

    scheduleStep(4800, () => {
      updateEntity.state = "up_to_date";
      updateEntity.value = "up_to_date";
      updateEntity.current_version = targetVersion;
      updateEntity.latest_version = targetVersion;
      updateEntity.summary = testFirmware
        ? "De preview draait nu op testfirmware."
        : "De preview draait nu op de nieuwste firmware.";
      setText("text_sensor", "OpenQuatt Version", targetVersion);
      state.connection = targetConnection;
      setText("text_sensor", "OpenQuatt Connection", state.connection);
      setText("select", "Firmware Update Target", "current build");
      setText("text_sensor", "Firmware Update Status", "Idle");
      setNumber("Firmware Update Progress", 0, "%");
      clearOtaSimulation();
    });
  }

  function getDebugRecordingElapsedS(recording = state.debugRecording) {
    const endAt = recording.active ? Date.now() : Number(recording.stoppedAt || 0);
    if (!recording.startedAt || !endAt) {
      return 0;
    }
    return Math.max(0, Math.floor((endAt - recording.startedAt) / 1000));
  }

  function makeDebugRecordingSample(offsetS) {
    const uptimeMs = Math.max(0, Math.round(Date.now() - state.bootedAt));
    const wobble = Math.round(Math.sin(offsetS / 17) * 4200);
    const systemValues = [
      uptimeMs,
      192000 - Math.round(offsetS * 7) + wobble,
      5148000 - Math.round(offsetS * 13),
      184000 - Math.round(offsetS * 5),
    ];
    return {
      offset_s: offsetS,
      values: state.debugRecording.fields.map((field, index) => {
        if (index < systemValues.length) {
          return systemValues[index];
        }
        const entity = getEntity(field.domain, field.name);
        const value = entity?.value ?? entity?.state ?? null;
        if (field.domain === "binary_sensor" || field.domain === "switch") {
          return value === true || value === "ON" || value === "on";
        }
        if (field.domain === "sensor" || field.domain === "number") {
          const numeric = Number(value);
          return Number.isFinite(numeric) ? numeric : null;
        }
        return value == null ? null : String(value);
      }),
    };
  }

  function syncDebugRecordingSamples() {
    const recording = state.debugRecording;
    if (!recording.startedAt) {
      return;
    }
    const rolling = recording.mode === "rolling";
    const elapsedS = rolling ? getDebugRecordingElapsedS(recording) : Math.min(getDebugRecordingElapsedS(recording), Number(recording.durationS || 0));
    if (!Number.isFinite(Number(recording.nextOffsetS))) {
      recording.nextOffsetS = 0;
    }
    while (Number(recording.nextOffsetS || 0) <= elapsedS) {
      recording.samples.push(makeDebugRecordingSample(Number(recording.nextOffsetS || 0)));
      recording.nextOffsetS = Number(recording.nextOffsetS || 0) + 10;
      if (recording.samples.length > DEBUG_RECORDING_SAMPLE_CAPACITY) {
        recording.samples.shift();
      }
    }
    if (!rolling && recording.active && elapsedS >= Number(recording.durationS || 0)) {
      recording.active = false;
      recording.stoppedAt = recording.startedAt + Number(recording.durationS || 0) * 1000;
    }
  }

  function getDebugRecordingStatusPayload() {
    syncDebugRecordingSamples();
    const recording = state.debugRecording;
    const rolling = recording.mode === "rolling";
    const elapsedS = rolling ? getDebugRecordingElapsedS(recording) : Math.min(getDebugRecordingElapsedS(recording), Number(recording.durationS || 0));
    const remainingS = recording.active && !rolling ? Math.max(0, Number(recording.durationS || 0) - elapsedS) : 0;
    const firstSample = recording.samples[0] || null;
    const lastSample = recording.samples[recording.samples.length - 1] || null;
    const retainedDurationS = firstSample && lastSample ? Math.max(0, lastSample.offset_s - firstSample.offset_s) : 0;
    return {
      ok: true,
      available: true,
      active: Boolean(recording.active),
      mode: rolling ? "rolling" : "manual",
      rolling,
      frozen: Boolean(recording.frozen),
      recording_id: Number(recording.startedAt || 0),
      storage: "psram",
      interval_s: 10,
      duration_s: Number(recording.durationS || 0),
      elapsed_s: elapsedS,
      remaining_s: remainingS,
      retained_duration_s: retainedDurationS,
      retention_capacity_s: (DEBUG_RECORDING_SAMPLE_CAPACITY - 1) * 10,
      sample_count: recording.samples.length,
      sample_capacity: DEBUG_RECORDING_SAMPLE_CAPACITY,
      field_count: recording.fields.length,
      entity_field_count: Math.max(0, recording.fields.length - 4),
      missing_field_count: 0,
      buffer_size: DEBUG_RECORDING_BUFFER_BYTES,
      estimated_size: 2048 + recording.samples.length * (16 + recording.fields.length * 3),
      buffer: "psram",
    };
  }

  function handleDebugRecordingConfigure(url, init) {
    const params = new URLSearchParams(String(init?.body || ""));
    if (url.searchParams.get("reset") === "1") {
      state.debugRecording.fields = [
        { key: "uptimeMs", domain: "system", name: "uptimeMs", unit: "ms" },
        { key: "freeHeap", domain: "system", name: "freeHeap", unit: "B" },
        { key: "freePsram", domain: "system", name: "freePsram", unit: "B" },
        { key: "minFreeHeap", domain: "system", name: "minFreeHeap", unit: "B" },
      ];
    }
    String(params.get("entities") || "").split("\n").forEach((line) => {
      const [key, domain, name] = line.split("\t");
      if (key && domain && name) {
        state.debugRecording.fields.push({ key, domain, name, unit: getEntity(domain, name)?.uom || "" });
      }
    });
    return mockResponse(200, getDebugRecordingStatusPayload());
  }

  function handleDebugRecordingStart(url) {
    const rolling = url.searchParams.get("rolling") === "1";
    const durationS = rolling ? 0 : Math.max(60, Math.min(3600, Number(url.searchParams.get("duration_s") || 15 * 60)));
    state.debugRecording = {
      active: true,
      mode: rolling ? "rolling" : "manual",
      frozen: false,
      startedAt: Date.now(),
      stoppedAt: 0,
      durationS,
      nextOffsetS: 0,
      fields: [...state.debugRecording.fields],
      samples: [],
    };
    syncDebugRecordingSamples();
    return mockResponse(200, getDebugRecordingStatusPayload());
  }

  function handleDebugRecordingFreeze() {
    const recording = state.debugRecording;
    syncDebugRecordingSamples();
    if (recording.active) {
      recording.active = false;
      recording.frozen = recording.mode === "rolling";
      recording.stoppedAt = Date.now();
    }
    return mockResponse(200, getDebugRecordingStatusPayload());
  }

  function handleDebugRecordingStop() {
    const recording = state.debugRecording;
    syncDebugRecordingSamples();
    if (recording.active) {
      recording.active = false;
      recording.frozen = recording.mode === "rolling";
      recording.stoppedAt = Date.now();
    }
    return mockResponse(200, getDebugRecordingStatusPayload());
  }

  function buildDebugRecordingDownloadPayload() {
    syncDebugRecordingSamples();
    const recording = state.debugRecording;
    const startedAtMs = Number(recording.startedAt || Date.now());
    const endedAtMs = recording.active ? Date.now() : Number(recording.stoppedAt || startedAtMs);
    const initial = recording.samples[0] || null;
    const samples = recording.samples.map((sample, index) => {
      const previous = index > 0 ? recording.samples[index - 1] : initial;
      const deltas = [];
      sample.values.forEach((value, valueIndex) => {
        if (previous && !Object.is(value, previous.values[valueIndex])) {
          deltas.push([valueIndex, value]);
        }
      });
      return [sample.offset_s, deltas];
    });
    return {
      format: "openquatt-debug-device-v1",
      schema_version: 1,
      kind: "openquatt_debug_recording",
      encoding: "device-psram-delta-json-v1",
      exported_at_ms: Date.now(),
      source: {
        device: "OpenQuatt",
        storage: "psram",
      },
      recording: {
        started_at_ms: startedAtMs,
        recording_id: Number(recording.startedAt || 0),
        ended_at_ms: endedAtMs,
        active: Boolean(recording.active),
        mode: recording.mode === "rolling" ? "rolling" : "manual",
        rolling: recording.mode === "rolling",
        frozen: Boolean(recording.frozen),
        duration_s: Math.max(0, Math.floor((endedAtMs - startedAtMs) / 1000)),
        retained_duration_s: initial && recording.samples.length
          ? Math.max(0, recording.samples[recording.samples.length - 1].offset_s - initial.offset_s)
          : 0,
        retention_capacity_s: (DEBUG_RECORDING_SAMPLE_CAPACITY - 1) * 10,
        interval_s: 10,
        sample_count: recording.samples.length,
        sample_capacity: DEBUG_RECORDING_SAMPLE_CAPACITY,
        buffer_size: DEBUG_RECORDING_BUFFER_BYTES,
        column_count: recording.fields.length,
        storage: "psram",
      },
      columns: recording.fields.map((field) => field.key),
      units: recording.fields.flatMap((field, index) => field.unit ? [[index, field.unit]] : []),
      initial: initial ? initial.values.flatMap((value, index) => value == null ? [] : [[index, value]]) : [],
      samples,
      events: [],
    };
  }

  function handleDebugRecordingDownload() {
    return mockResponse(200, buildDebugRecordingDownloadPayload());
  }

  function parseMockRequest(input) {
    const url = new URL(String(typeof input === "string" ? input : input.url), window.location.href);
    const parts = url.pathname.split("/").filter(Boolean);
    const maybeAction = parts.at(-1);
    const action = ["set", "press", "install", "turn_on", "turn_off"].includes(maybeAction) ? parts.pop() : "";
    const name = decodeURIComponent(parts.pop() || "");
    const domain = parts.pop() || "";
    if (!DOMAINS.has(domain)) {
      return null;
    }
    return { url, domain, name, action };
  }

  function mockResponse(status, payload) {
    return Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: async () => clone(payload),
      text: async () => JSON.stringify(payload),
    });
  }

  function mockTextResponse(status, text) {
    return Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: async () => ({ text }),
      text: async () => String(text || ""),
    });
  }

  function installFetchMock() {
    const realFetch = window.fetch ? window.fetch.bind(window) : null;
    window.fetch = async function fetchMock(input, init) {
      const url = new URL(String(typeof input === "string" ? input : input.url), window.location.href);
      const method = String(init?.method || "GET").toUpperCase();
      if (url.pathname === "/auth/status" && (!init || !init.method || String(init.method).toUpperCase() === "GET")) {
        return handleAuthStatus();
      }
      if (url.pathname === "/auth/change" && String(init?.method || "GET").toUpperCase() === "POST") {
        return handleAuthChange(init || {});
      }
      if (url.pathname === "/auth/disable" && String(init?.method || "GET").toUpperCase() === "POST") {
        return handleAuthDisable(init || {});
      }
      if (url.pathname === "/api-security/status" && (!init || !init.method || String(init.method).toUpperCase() === "GET")) {
        return handleApiSecurityStatus();
      }
      if (url.pathname === "/api-security/enable" && String(init?.method || "GET").toUpperCase() === "POST") {
        return handleApiSecurityEnable(init || {});
      }
      if (url.pathname === "/api-security/rotate" && String(init?.method || "GET").toUpperCase() === "POST") {
        return handleApiSecurityRotate(init || {});
      }
      if (url.pathname === "/api-security/disable" && String(init?.method || "GET").toUpperCase() === "POST") {
        return handleApiSecurityDisable(init || {});
      }
      if (url.pathname.endsWith("/openquatt/logs/recent") && String(init?.method || "GET").toUpperCase() === "GET") {
        return mockResponse(200, {
          enabled: Boolean(state.logHistoryEnabled),
          entries: clone(state.logHistoryEntries),
        });
      }
      if (url.pathname.endsWith("/energy/history") && method === "GET") {
        return mockTextResponse(200, buildEnergyHistoryTextPayload(url));
      }
      if (url.pathname.endsWith("/openquatt/debug-recording/status") && method === "GET") {
        return mockResponse(200, getDebugRecordingStatusPayload());
      }
      if (url.pathname.endsWith("/openquatt/debug-recording/configure") && method === "POST") {
        return handleDebugRecordingConfigure(url, init || {});
      }
      if (url.pathname.endsWith("/openquatt/debug-recording/start") && method === "POST") {
        return handleDebugRecordingStart(url);
      }
      if (url.pathname.endsWith("/openquatt/debug-recording/freeze") && method === "POST") {
        return handleDebugRecordingFreeze();
      }
      if (url.pathname.endsWith("/openquatt/debug-recording/stop") && method === "POST") {
        return handleDebugRecordingStop();
      }
      if (url.pathname.endsWith("/openquatt/debug-recording/download") && method === "GET") {
        return handleDebugRecordingDownload();
      }
      if (url.pathname.endsWith("/openquatt/entities") && String(init?.method || "GET").toUpperCase() === "POST") {
        return handleBulkEntities(init || {});
      }
      if (url.pathname === "/update" && String(init?.method || "GET").toUpperCase() === "POST") {
        handleUpdateInstall("Firmware Update");
        return mockResponse(200, { ok: true });
      }

      const request = parseMockRequest(input);
      if (!request) {
        if (realFetch) {
          return realFetch(input, init);
        }
        throw new Error("No real fetch available");
      }

      const entity = getEntity(request.domain, request.name);
      if (!entity) {
        return mockResponse(404, { error: "Not found" });
      }

      if (request.action === "set") {
        const rawValue = request.url.searchParams.get("value");
        const optionValue = request.url.searchParams.get("option");
        if (request.domain === "select") {
          handleSelectSet(request.name, optionValue || rawValue || "");
        } else if (request.domain === "number") {
          handleNumberSet(request.name, rawValue || "0");
        } else if (request.domain === "time") {
          handleTimeSet(request.name, rawValue || "");
        } else if (request.domain === "datetime") {
          handleDateTimeSet(request.name, rawValue || "");
        } else if (request.domain === "text") {
          handleTextSet(request.name, rawValue || "");
        }
        return mockResponse(200, entity);
      }

      if (request.action === "turn_on" || request.action === "turn_off") {
        if (request.domain === "switch") {
          handleSwitchSet(request.name, request.action === "turn_on");
        }
        return mockResponse(200, { ok: true });
      }

      if (request.action === "press") {
        handleButtonPress(request.name);
        return mockResponse(200, { ok: true });
      }

      if (request.action === "install" && request.domain === "update") {
        handleUpdateInstall(request.name);
        return mockResponse(200, { ok: true });
      }

      return mockResponse(200, entity);
    };
  }

  function renderDevControls() {
    return `
      <section class="oq-helper-hub-block oq-helper-hub-dev" data-oq-dev-controls>
        <p class="oq-helper-hub-kicker">Preview en test</p>
        <div class="oq-helper-hub-dev-grid">
          <label class="oq-helper-hub-dev-row">
            <span class="oq-helper-hub-dev-label">Installatie</span>
            <select class="oq-helper-hub-dev-select" data-oq-dev-control="installation">
              <option value="single">Quatt Single</option>
              <option value="duo">Quatt Duo</option>
            </select>
          </label>
          <label class="oq-helper-hub-dev-row">
            <span class="oq-helper-hub-dev-label">Hardware</span>
            <select class="oq-helper-hub-dev-select" data-oq-dev-control="hardware">
              <option value="heatpump_controller_q">Q-edition</option>
              <option value="heatpump_listener">Listener</option>
              <option value="waveshare">Waveshare</option>
            </select>
          </label>
          <label class="oq-helper-hub-dev-row">
            <span class="oq-helper-hub-dev-label">Verbinding</span>
            <select class="oq-helper-hub-dev-select" data-oq-dev-control="connection">
              <option value="wifi">Wi-Fi</option>
              <option value="eth">Ethernet</option>
            </select>
          </label>
          <label class="oq-helper-hub-dev-row">
            <span class="oq-helper-hub-dev-label">Scenario</span>
            <select class="oq-helper-hub-dev-select" data-oq-dev-control="scenario">
              <option value="idle">Idle</option>
              <option value="heating">HP1 heating</option>
              ${state.installation === "duo" ? '<option value="dual">HP1 heat + HP2 cool</option>' : ""}
              ${state.installation === "duo" ? '<option value="cooling">HP1 standby + HP2 cooling</option>' : ""}
              <option value="defrost">Defrost</option>
            </select>
          </label>
          <label class="oq-helper-hub-dev-row">
            <span class="oq-helper-hub-dev-label">CV-ketel</span>
            <select class="oq-helper-hub-dev-select" data-oq-dev-control="boiler">
              <option value="off">Uit</option>
              <option value="on">Aan</option>
            </select>
          </label>
          <label class="oq-helper-hub-dev-row">
            <span class="oq-helper-hub-dev-label">Diagnose</span>
            <select class="oq-helper-hub-dev-select" data-oq-dev-control="diagnostics">
              <option value="clear">Geen bijzonderheden</option>
              <option value="cycling">Pendelen actief</option>
              <option value="cycling-recovered">Pendelen hersteld, melding open</option>
              <option value="hydraulics">Hydrauliek</option>
              <option value="connections">Verbindingen</option>
              <option value="hp-fault">Warmtepompstoring</option>
            </select>
          </label>
        </div>
      </section>
    `;
  }

  function bindDevControls(root) {
    const controlsRoot = root.querySelector("[data-oq-dev-controls]");
    if (!controlsRoot) {
      return;
    }
    devControlsRoot = controlsRoot;

    const installation = controlsRoot.querySelector('[data-oq-dev-control="installation"]');
    if (installation) {
      installation.value = state.installation;
      installation.onchange = () => {
        setInstallationMode(installation.value);
        applyScenario(state.scenario);
        updateSummary();
        notifyMockUpdated();
        notifyDevControlsChanged();
      };
    }

    const hardware = controlsRoot.querySelector('[data-oq-dev-control="hardware"]');
    if (hardware) {
      hardware.value = state.hardware;
      hardware.onchange = () => {
        state.hardware = hardware.value;
        setEntity("text_sensor", "OpenQuatt Hardware Profile", { state: state.hardware, value: state.hardware });
        syncDevMeta();
        notifyMockUpdated();
        notifyDevControlsChanged();
      };
    }

    const connection = controlsRoot.querySelector('[data-oq-dev-control="connection"]');
    if (connection) {
      connection.value = state.connection;
      connection.onchange = () => {
        setConnectionMode(connection.value);
        notifyMockUpdated();
        notifyDevControlsChanged();
      };
    }

    const scenario = controlsRoot.querySelector('[data-oq-dev-control="scenario"]');
    if (scenario) {
      scenario.value = state.scenario;
      scenario.onchange = () => {
        state.scenario = scenario.value;
        applyScenario(state.scenario);
        updateSummary();
        notifyMockUpdated();
        notifyDevControlsChanged();
      };
    }

    const boiler = controlsRoot.querySelector('[data-oq-dev-control="boiler"]');
    if (boiler) {
      const handleBoilerChange = () => {
        state.boiler = boiler.value === "on" ? "on" : "off";
        applyScenario(state.scenario);
        updateSummary();
        notifyMockUpdated();
        notifyDevControlsChanged();
      };
      boiler.value = state.boiler;
      boiler.onchange = handleBoilerChange;
      boiler.oninput = handleBoilerChange;
    }

    const diagnostics = controlsRoot.querySelector('[data-oq-dev-control="diagnostics"]');
    if (diagnostics) {
      diagnostics.value = state.diagnostics;
      diagnostics.onchange = () => {
        state.diagnostics = diagnostics.value;
        applyScenario(state.scenario);
        updateSummary();
        notifyMockUpdated();
        notifyDevControlsChanged();
      };
    }

  }

  window.__OQ_DEV_CONTROLS__ = {
    render: renderDevControls,
    bind: bindDevControls,
  };
  window.__OQ_DEV_TREND_MOCKS__ = {
    buildTrendPreviewSamples,
  };
  window.__OQ_SET_MOCK_BOILER__ = applyBoilerDevMode;

  function getDevControlFromEvent(event) {
    const path = typeof event.composedPath === "function" ? event.composedPath() : [];
    return path.find((item) => item?.dataset?.oqDevControl) || event.target?.closest?.("[data-oq-dev-control]");
  }

  function applyBoilerDevMode(value) {
    state.boiler = value === "on" ? "on" : "off";
    const boilerControl = devControlsRoot?.querySelector('[data-oq-dev-control="boiler"]');
    if (boilerControl) {
      boilerControl.value = state.boiler;
    }
    applyScenario(state.scenario);
    updateSummary();
    notifyMockUpdated();
    notifyDevControlsChanged();
  }

  window.addEventListener("click", (event) => {
    const control = getDevControlFromEvent(event);
    const action = control?.dataset?.oqDevControl;
    if (action === "boiler-on") {
      applyBoilerDevMode("on");
    } else if (action === "boiler-off") {
      applyBoilerDevMode("off");
    }
  });

  window.addEventListener("change", (event) => {
    const control = getDevControlFromEvent(event);
    if (control?.dataset?.oqDevControl === "boiler") {
      applyBoilerDevMode(control.value);
    }
  });

  seedEntities();
  refreshAuthToken();
  refreshApiSecurityToken();
  setInstallationMode(state.installation);
  applyScenario(state.scenario);
  updateSummary();
  installFetchMock();
  window.setInterval(() => {
    stepSimulation();
  }, 1600);
}());
