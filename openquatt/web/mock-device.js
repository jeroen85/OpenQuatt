(function () {
  const DOMAINS = new Set(["select", "number", "sensor", "text_sensor", "binary_sensor", "button"]);
  const entities = new Map();
  const state = {
    scenario: "dual",
    installation: "duo",
    complete: true,
    tick: 0,
    autoAnimate: true,
  };

  const HP2_ENTITIES = [
    ["sensor", "HP2 - Power Input", { value: 0, uom: "W" }],
    ["sensor", "HP2 - Heat Power", { value: 0, uom: "W" }],
    ["sensor", "HP2 - COP", { value: 0, uom: "" }],
    ["sensor", "HP2 - Compressor frequency", { value: 0, uom: "Hz" }],
    ["sensor", "HP2 - Water in temperature", { value: 25.4, uom: "°C" }],
    ["sensor", "HP2 - Water out temperature", { value: 29.1, uom: "°C" }],
    ["text_sensor", "HP2 - Working Mode Label", { state: "Standby", value: "Standby" }],
    ["text_sensor", "HP2 - Active Failures List", { state: "None", value: "None" }],
    ["binary_sensor", "HP2 - Defrost", { value: false }],
    ["binary_sensor", "HP2 - Bottom plate heater", { value: true }],
    ["binary_sensor", "HP2 - Crankcase heater", { value: true }],
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
    setEntity("text_sensor", "Summary", { state: "" });
    setEntity("select", "Heating Control Mode", {
      value: "Power House",
      state: "Power House",
      option: ["Power House", "Water Temperature Control (heating curve)"],
    });
    setEntity("text_sensor", "Control Mode (Label)", { state: "CM98" });
    setEntity("text_sensor", "Flow Mode", { state: "Adaptive" });
    setEntity("select", "Behavior", {
      value: "Balanced",
      state: "Balanced",
      option: ["Quiet", "Balanced", "Fast response"],
    });
    setEntity("select", "Preset", {
      value: "Balanced",
      state: "Balanced",
      option: ["Quiet", "Balanced", "High output", "Custom"],
    });

    [
      ["Day max level", 10, 0, 20, 1, ""],
      ["Silent max level", 6, 0, 20, 1, ""],
      ["Maximum water temperature", 56, 25, 75, 1, "°C"],
      ["Rated maximum house power", 4500, 500, 12000, 100, "W"],
      ["Maximum heating outdoor temperature", 16, -10, 25, 1, "°C"],
      ["Curve Tsupply @ -20°C", 48, 20, 70, 1, "°C"],
      ["Curve Tsupply @ -10°C", 43, 20, 70, 1, "°C"],
      ["Curve Tsupply @ 0°C", 38, 20, 70, 1, "°C"],
      ["Curve Tsupply @ 5°C", 34, 20, 70, 1, "°C"],
      ["Curve Tsupply @ 10°C", 30, 20, 70, 1, "°C"],
      ["Curve Tsupply @ 15°C", 27, 20, 70, 1, "°C"],
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
      ["HP1 - Bottom plate heater", false],
      ["HP1 - Crankcase heater", false],
    ].forEach(([name, value]) => {
      setEntity("binary_sensor", name, { value });
    });

    seedHp2Entities();

    setEntity("button", "Apply & Finish", {});
    setEntity("button", "Start Over", {});
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

  function notifyMockUpdated() {
    window.dispatchEvent(new Event("oq-mock-updated"));
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
    setBinary("HP1 - Bottom plate heater", false);
    setBinary("HP1 - Crankcase heater", false);
    if (!single) {
      setBinary("HP2 - Defrost", false);
      setBinary("HP2 - Bottom plate heater", false);
      setBinary("HP2 - Crankcase heater", false);
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
      setNumber("HP1 - Water in temperature", 25.6, "°C");
      setNumber("HP1 - Water out temperature", 26.0, "°C");
      setText("text_sensor", "HP1 - Working Mode Label", "Standby");
      if (!single) {
        setNumber("HP2 - Power Input", 5.1, "W");
        setNumber("HP2 - Heat Power", 0, "W");
        setNumber("HP2 - COP", 0);
        setNumber("HP2 - Compressor frequency", 0, "Hz");
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
      setNumber("HP1 - Water in temperature", wave(25.0, 0.4), "°C");
      setNumber("HP1 - Water out temperature", wave(30.5, 0.5), "°C");
      setText("text_sensor", "HP1 - Working Mode Label", "Heating");
      if (!single) {
        setNumber("HP2 - Power Input", wave(110, 12, 0.7), "W");
        setNumber("HP2 - Heat Power", wave(520, 60, 0.7), "W");
        setNumber("HP2 - COP", Number((4.1 + Math.sin(t + 0.7) * 0.14).toFixed(2)));
        setNumber("HP2 - Compressor frequency", waveInt(12, 2, 0.5), "Hz");
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
      setNumber("HP1 - Water in temperature", wave(25.2, 0.3), "°C");
      setNumber("HP1 - Water out temperature", wave(31.8, 0.5), "°C");
      setText("text_sensor", "HP1 - Working Mode Label", "Heating");
      setNumber("HP2 - Power Input", wave(420, 18, 0.4), "W");
      setNumber("HP2 - Heat Power", wave(-260, 40, 0.4), "W");
      setNumber("HP2 - COP", Number((2.05 + Math.sin(t + 0.4) * 0.08).toFixed(2)));
      setNumber("HP2 - Compressor frequency", waveInt(31, 2, 0.4), "Hz");
      setNumber("HP2 - Water in temperature", wave(31.0, 0.4), "°C");
      setNumber("HP2 - Water out temperature", wave(25.2, 0.3), "°C");
      setText("text_sensor", "HP2 - Working Mode Label", "Cooling");
      setBinary("HP2 - Bottom plate heater", true);
      setBinary("HP2 - Crankcase heater", true);
      return;
    }

    if (name === "defrost") {
      setText("text_sensor", "Control Mode (Label)", "CM99");
      setText("text_sensor", "Flow Mode", "Defrost recovery");
      setBinary("Sticky pump active", true);
      setBinary("HP1 - Defrost", true);
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
        setNumber("HP2 - Water in temperature", wave(26.1, 0.2), "°C");
        setNumber("HP2 - Water out temperature", wave(26.8, 0.2), "°C");
        setText("text_sensor", "HP2 - Working Mode Label", "Standby");
        setBinary("HP2 - Bottom plate heater", false);
        setBinary("HP2 - Crankcase heater", true);
      }
      return;
    }
  }

  function stepSimulation() {
    state.tick += 1;
    if (state.autoAnimate) {
      applyScenario(state.scenario);
      updateSummary();
      notifyMockUpdated();
    }
  }

  function handleSelectSet(name, value) {
    setText("select", name, value);
    if (name === "Preset") {
      applyPreset(value);
    }
    updateSummary();
    notifyMockUpdated();
  }

  function handleNumberSet(name, value) {
    setNumber(name, Number(value));
    updateSummary();
    notifyMockUpdated();
  }

  function handleButtonPress(name) {
    if (name === "Apply & Finish") {
      state.complete = true;
    } else if (name === "Start Over") {
      state.complete = false;
    }
    updateSummary();
    renderToolbar();
    notifyMockUpdated();
  }

  function parseMockRequest(input) {
    const url = new URL(String(typeof input === "string" ? input : input.url), window.location.href);
    const parts = url.pathname.split("/").filter(Boolean);
    const maybeAction = parts.at(-1);
    const action = maybeAction === "set" || maybeAction === "press" ? parts.pop() : "";
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
        if (request.domain === "select") {
          handleSelectSet(request.name, rawValue || "");
        } else if (request.domain === "number") {
          handleNumberSet(request.name, rawValue || "0");
        }
        return mockResponse(200, entity);
      }

      if (request.action === "press") {
        handleButtonPress(request.name);
        return mockResponse(200, { ok: true });
      }

      return mockResponse(200, entity);
    };
  }

  function renderToolbar() {
    const root = document.getElementById("oq-dev-toolbar");
    if (!root) {
      return;
    }

    root.innerHTML = `
      <div class="oq-dev-toolbar-head">
        <div>
          <h1>OpenQuatt lokale UI-preview</h1>
          <p>Deze pagina laadt dezelfde <code>openquatt-app.js</code> en <code>openquatt-app.css</code> als het device, maar voedt ze met mockdata. Zo kunnen we layout, wording en states lokaal uitwerken zonder compile + OTA op elke iteratie.</p>
        </div>
        <div class="oq-dev-toolbar-actions">
          <select id="oq-dev-installation">
            <option value="single">Installatie: Single Quatt</option>
            <option value="duo">Installatie: Duo Quatt</option>
          </select>
          <select id="oq-dev-scenario">
            <option value="idle">Scenario: Idle</option>
            <option value="heating">Scenario: HP1 heating</option>
            ${state.installation === "duo" ? '<option value="dual">Scenario: HP1 heat + HP2 cool</option>' : ""}
            <option value="defrost">Scenario: Defrost</option>
          </select>
          <button type="button" id="oq-dev-toggle-animate">${state.autoAnimate ? "Pauzeer mockdata" : "Start mockdata"}</button>
          <button type="button" id="oq-dev-step">1 tick</button>
        </div>
      </div>
      <div class="oq-dev-toolbar-status">
        <span class="oq-dev-pill"><strong>Installatie</strong> ${state.installation === "single" ? "Single Quatt" : "Duo Quatt"}</span>
        <span class="oq-dev-pill"><strong>Scenario</strong> ${state.scenario}</span>
        <span class="oq-dev-pill"><strong>Quick Start</strong> ${state.complete ? "afgerond" : "actief"}</span>
        <span class="oq-dev-pill"><strong>Datastroom</strong> ${state.autoAnimate ? "live mock" : "gepauzeerd"}</span>
      </div>
    `;

    const installation = root.querySelector("#oq-dev-installation");
    if (installation) {
      installation.value = state.installation;
      installation.onchange = () => {
        setInstallationMode(installation.value);
        applyScenario(state.scenario);
        updateSummary();
        renderToolbar();
        notifyMockUpdated();
      };
    }

    const select = root.querySelector("#oq-dev-scenario");
    if (select) {
      select.value = state.scenario;
      select.onchange = () => {
        state.scenario = select.value;
        applyScenario(state.scenario);
        updateSummary();
        renderToolbar();
        notifyMockUpdated();
      };
    }

    const toggle = root.querySelector("#oq-dev-toggle-animate");
    if (toggle) {
      toggle.onclick = () => {
        state.autoAnimate = !state.autoAnimate;
        renderToolbar();
      };
    }

    const step = root.querySelector("#oq-dev-step");
    if (step) {
      step.onclick = () => {
        stepSimulation();
        renderToolbar();
      };
    }
  }

  seedEntities();
  setInstallationMode(state.installation);
  applyScenario(state.scenario);
  updateSummary();
  installFetchMock();
  document.addEventListener("DOMContentLoaded", renderToolbar, { once: true });
  window.setInterval(() => {
    stepSimulation();
  }, 1600);
}());
