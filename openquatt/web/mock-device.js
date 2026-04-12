(function () {
  const DOMAINS = new Set(["select", "number", "sensor", "text_sensor", "binary_sensor", "button", "time", "update"]);
  const entities = new Map();
  const state = {
    scenario: "dual",
    installation: "duo",
    complete: true,
    tick: 0,
    autoAnimate: true,
    bootedAt: Date.now() - ((2 * 3600) + (13 * 60)) * 1000,
  };

  const HP2_ENTITIES = [
    ["select", "HP2 - Excluded compressor level A", { value: "None", state: "None", option: ["None", "L1 (H30/C30)", "L2 (H39/C36)", "L3 (H49/C42)", "L4 (H55/C47)", "L5 (H61/C52)", "L6 (H67/C56)", "L7 (H72/C61)", "L8 (H79/C66)", "L9 (H85/C71)", "L10 (H90/C74)"] }],
    ["select", "HP2 - Excluded compressor level B", { value: "None", state: "None", option: ["None", "L1 (H30/C30)", "L2 (H39/C36)", "L3 (H49/C42)", "L4 (H55/C47)", "L5 (H61/C52)", "L6 (H67/C56)", "L7 (H72/C61)", "L8 (H79/C66)", "L9 (H85/C71)", "L10 (H90/C74)"] }],
    ["sensor", "HP2 - Power Input", { value: 0, uom: "W" }],
    ["sensor", "HP2 - Heat Power", { value: 0, uom: "W" }],
    ["sensor", "HP2 - COP", { value: 0, uom: "" }],
    ["sensor", "HP2 - Compressor frequency", { value: 0, uom: "Hz" }],
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
    entity.value = Number(value);
    entity.state = "";
    if (uom) {
      entity.uom = uom;
    }
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
    entity.state = "";
  }

  function seedEntities() {
    syncDevMeta();
    setEntity("text_sensor", "Summary", { state: "" });
    setEntity("button", "Check Firmware Updates", { state: "" });
    setEntity("update", "Firmware Update", {
      state: "available",
      value: "available",
      current_version: "v0.26.0",
      latest_version: "v0.26.1-dev3",
      title: "OpenQuatt firmware",
      summary: "Nieuwe firmware met verdere UI- en regelingverbeteringen staat klaar voor deze preview.",
      release_url: "https://github.com/jeroen85/OpenQuatt/releases",
    });
    setEntity("binary_sensor", "Setup Complete", { value: state.complete });
    setEntity("select", "Heating Control Mode", {
      value: "Power House",
      state: "Power House",
      option: ["Power House", "Water Temperature Control (heating curve)"],
    });
    setEntity("select", "Flow Control Mode", {
      value: "Flow Setpoint",
      state: "Flow Setpoint",
      option: ["Flow Setpoint", "Manual PWM"],
    });
    setEntity("text_sensor", "Control Mode (Label)", { state: "CM98" });
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
    setEntity("select", "Firmware Update Channel", {
      value: "dev",
      state: "dev",
      option: ["main", "dev"],
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
      ["Manual iPWM", 400, 50, 850, 1, "iPWM"],
      ["Day max level", 10, 0, 10, 1, ""],
      ["Silent max level", 6, 0, 10, 1, ""],
      ["Maximum water temperature", 56, 25, 75, 1, "°C"],
      ["Maximum water temperature trip", 65, 30, 85, 0.5, "°C"],
      ["Minimum runtime", 300, 300, 3600, 30, "s"],
      ["Rated maximum house power", 4500, 500, 12000, 100, "W"],
      ["House cold temp", -10, -25, 5, 0.5, "°C"],
      ["Maximum heating outdoor temperature", 16, -10, 25, 1, "°C"],
      ["Power House temperature reaction", 3000, 0, 4000, 10, "W/K"],
      ["Power House comfort below setpoint", 0.1, 0, 2, 0.05, "°C"],
      ["Power House comfort above setpoint", 0.3, 0, 2, 0.05, "°C"],
      ["Power House demand rise time", 8, 2, 20, 1, "min"],
      ["Power House demand fall time", 3, 1, 10, 1, "min"],
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

    [
      ["Total Power Input", 0, "W"],
      ["Total COP", 0, ""],
      ["Total Heat Power", 0, "W"],
      ["Flow average (Selected)", 0, "L/h"],
      ["Room Temperature (Selected)", 20.6, "°C"],
      ["Room Setpoint (Selected)", 21.0, "°C"],
      ["Water Supply Temp (Selected)", 29.5, "°C"],
      ["Heating Curve Supply Target", 33.0, "°C"],
      ["HP1 - Power Input", 0, "W"],
      ["HP1 - Heat Power", 0, "W"],
      ["HP1 - COP", 0, ""],
      ["HP1 - Compressor frequency", 0, "Hz"],
      ["HP1 - Fan speed", 0, "rpm"],
      ["HP1 - Flow", 0, "L/h"],
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
    ].forEach(([name, value, uom]) => {
      setEntity("sensor", name, { value, uom });
    });

    [
      ["HP1 - Working Mode Label", "Standby"],
      ["HP1 - Active Failures List", "None"],
    ].forEach(([name, value]) => {
      setEntity("text_sensor", name, { state: value, value });
    });

    [
      ["Silent active", false],
      ["Sticky pump active", false],
      ["HP1 - Defrost", false],
      ["HP1 - 4-Way valve", false],
      ["HP1 - Bottom plate heater", false],
      ["HP1 - Crankcase heater", false],
    ].forEach(([name, value]) => {
      setEntity("binary_sensor", name, { value });
    });

    seedHp2Entities();

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
    if (state.installation === "single") {
      clearHp2Entities();
      if (state.scenario === "dual") {
        state.scenario = "heating";
      }
    } else {
      seedHp2Entities();
    }
  }

  function syncDevMeta() {
    const updateEntity = getEntity("update", "Firmware Update");
    const updateAvailable = Boolean(
      updateEntity
      && String(updateEntity.latest_version || "").trim()
      && String(updateEntity.current_version || "").trim()
      && String(updateEntity.latest_version).trim() !== String(updateEntity.current_version).trim()
    );
    window.__OQ_DEV_META = {
      installation: state.installation,
      ipAddress: "192.168.2.123",
      bootedAt: state.bootedAt,
      updateAvailable,
      updateLabel: updateAvailable ? "Beschikbaar" : "Actueel",
    };
  }

  function notifyMockUpdated() {
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
      return;
    }

    if (name === "heating") {
      setText("text_sensor", "Control Mode (Label)", "CM98");
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
      return;
    }

    if (name === "dual") {
      setText("text_sensor", "Control Mode (Label)", "CM99");
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
      return;
    }

    if (name === "defrost") {
      setText("text_sensor", "Control Mode (Label)", "CM99");
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
      return;
    }
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
    setText("select", name, value);
    if (name === "Preset") {
      applyPreset(value);
    } else if (name === "Firmware Update Channel") {
      const updateEntity = getEntity("update", "Firmware Update");
      if (updateEntity) {
        if (value === "main") {
          updateEntity.current_version = "v0.26.0";
          updateEntity.latest_version = "v0.26.0";
          updateEntity.state = "up_to_date";
          updateEntity.value = "up_to_date";
          updateEntity.summary = "Je preview gebruikt nu het stabiele kanaal. Er staat op dit moment geen nieuwere stable release klaar.";
        } else {
          updateEntity.current_version = "v0.26.0";
          updateEntity.latest_version = "v0.26.1-dev3";
          updateEntity.state = "available";
          updateEntity.value = "available";
          updateEntity.summary = "Het dev-kanaal heeft een nieuwere OTA-build beschikbaar voor deze preview.";
        }
      }
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
    updateSummary();
    notifyMockUpdated();
  }

  function handleNumberSet(name, value) {
    setNumber(name, Number(value));
    updateSummary();
    notifyMockUpdated();
  }

  function handleTimeSet(name, value) {
    const normalized = String(value || "").trim().length === 5 ? `${value}:00` : String(value || "");
    setText("time", name, normalized);
    updateSummary();
    notifyMockUpdated();
  }

  function handleButtonPress(name) {
    if (name === "Complete setup") {
      state.complete = true;
    } else if (name === "Reset setup state") {
      state.complete = false;
    } else if (name === "Check Firmware Updates") {
      const channel = String(getEntity("select", "Firmware Update Channel")?.value || "dev");
      const updateEntity = getEntity("update", "Firmware Update");
      if (updateEntity) {
        updateEntity.current_version = "v0.26.0";
        updateEntity.latest_version = channel === "main" ? "v0.26.0" : "v0.26.1-dev3";
        updateEntity.state = channel === "main" ? "up_to_date" : "available";
        updateEntity.value = updateEntity.state;
      }
    }
    updateSummary();
    notifyMockUpdated();
    notifyDevControlsChanged();
  }

  function handleUpdateInstall(name) {
    if (name !== "Firmware Update") {
      return;
    }
    const updateEntity = getEntity("update", name);
    if (!updateEntity) {
      return;
    }
    updateEntity.state = "installed";
    updateEntity.value = "installed";
    updateEntity.current_version = String(updateEntity.latest_version || updateEntity.current_version || "v0.26.0");
    updateEntity.summary = "De OTA-update is in deze preview als afgerond gemarkeerd.";
    notifyMockUpdated();
  }

  function parseMockRequest(input) {
    const url = new URL(String(typeof input === "string" ? input : input.url), window.location.href);
    const parts = url.pathname.split("/").filter(Boolean);
    const maybeAction = parts.at(-1);
    const action = maybeAction === "set" || maybeAction === "press" || maybeAction === "install" ? parts.pop() : "";
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

  function installFetchMock() {
    const realFetch = window.fetch ? window.fetch.bind(window) : null;
    window.fetch = async function fetchMock(input, init) {
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
        }
        return mockResponse(200, entity);
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
            <span class="oq-helper-hub-dev-label">Scenario</span>
            <select class="oq-helper-hub-dev-select" data-oq-dev-control="scenario">
              <option value="idle">Idle</option>
              <option value="heating">HP1 heating</option>
              ${state.installation === "duo" ? '<option value="dual">HP1 heat + HP2 cool</option>' : ""}
              <option value="defrost">Defrost</option>
            </select>
          </label>
        </div>
        <div class="oq-helper-hub-dev-actions">
          <button class="oq-helper-hub-dev-button" type="button" data-oq-dev-control="toggle-animate">${state.autoAnimate ? "Pauzeer mockdata" : "Start mockdata"}</button>
          <button class="oq-helper-hub-dev-button" type="button" data-oq-dev-control="step">1 tick</button>
        </div>
        <div class="oq-helper-hub-dev-meta">
          <span class="oq-helper-hub-dev-badge">Quick Start ${state.complete ? "afgerond" : "actief"}</span>
          <span class="oq-helper-hub-dev-badge">Datastroom ${state.autoAnimate ? "live mock" : "gepauzeerd"}</span>
        </div>
      </section>
    `;
  }

  function bindDevControls(root) {
    const controlsRoot = root.querySelector("[data-oq-dev-controls]");
    if (!controlsRoot) {
      return;
    }

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

    const toggle = controlsRoot.querySelector('[data-oq-dev-control="toggle-animate"]');
    if (toggle) {
      toggle.onclick = () => {
        state.autoAnimate = !state.autoAnimate;
        notifyDevControlsChanged();
      };
    }

    const step = controlsRoot.querySelector('[data-oq-dev-control="step"]');
    if (step) {
      step.onclick = () => {
        stepSimulation(true);
        notifyDevControlsChanged();
      };
    }
  }

  window.__OQ_DEV_CONTROLS__ = {
    render: renderDevControls,
    bind: bindDevControls,
  };

  seedEntities();
  setInstallationMode(state.installation);
  applyScenario(state.scenario);
  updateSummary();
  installFetchMock();
  window.setInterval(() => {
    stepSimulation();
  }, 1600);
}());
