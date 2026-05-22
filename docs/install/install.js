const FACTORY_ROOT = new URL("../firmware/main/", window.location.href).toString().replace(/\/$/, "");
const VERSION_URL = new URL("../firmware/main/version.json", window.location.href).toString();
const FACTORY_FILES_URL = new URL("../firmware/main/factory_files.json", window.location.href).toString();
const FALLBACK_RELEASE_URL = "https://github.com/jeroen85/OpenQuatt/releases/latest";

const HARDWARE_LABELS = {
  waveshare: "Waveshare ESP32-S3-Relay-1CH",
  heatpump_listener: "Electropaultje Heatpump Listener",
  heatpump_controller_q: "Electropaultje Heatpump Controller Q-edition",
};

const CONNECTION_LABELS = {
  wifi: "Wi-Fi",
  eth: "Ethernet",
};

const PROFILES = {
  duo: {
    label: "Duo",
    waveshare: {
      wifi: {
        title: "OpenQuatt Duo / Waveshare / Wi-Fi",
        chipFamily: "ESP32-S3",
        hardwareLabel: HARDWARE_LABELS.waveshare,
        connectionLabel: CONNECTION_LABELS.wifi,
        fileName: "openquatt-waveshare-duo-wifi.firmware.factory.bin",
        legacyFileNames: ["openquatt-duo-waveshare.firmware.factory.bin"],
        releaseFallback: true,
      },
    },
    heatpump_listener: {
      wifi: {
        title: "OpenQuatt Duo / Heatpump Listener / Wi-Fi",
        chipFamily: "ESP32",
        hardwareLabel: HARDWARE_LABELS.heatpump_listener,
        connectionLabel: CONNECTION_LABELS.wifi,
        fileName: "openquatt-heatpump-listener-duo-wifi.firmware.factory.bin",
        legacyFileNames: ["openquatt-duo-heatpump-listener.firmware.factory.bin"],
        releaseFallback: true,
      },
    },
    heatpump_controller_q: {
      wifi: {
        title: "OpenQuatt Duo / Heatpump Controller Q / Wi-Fi",
        chipFamily: "ESP32-S3",
        hardwareLabel: HARDWARE_LABELS.heatpump_controller_q,
        connectionLabel: CONNECTION_LABELS.wifi,
        fileName: "openquatt-heatpump-controller-q-duo-wifi.firmware.factory.bin",
        releaseFallback: true,
      },
      eth: {
        title: "OpenQuatt Duo / Heatpump Controller Q / Ethernet",
        chipFamily: "ESP32-S3",
        hardwareLabel: HARDWARE_LABELS.heatpump_controller_q,
        connectionLabel: CONNECTION_LABELS.eth,
        fileName: "openquatt-heatpump-controller-q-duo-eth.firmware.factory.bin",
      },
    },
  },
  single: {
    label: "Single",
    waveshare: {
      wifi: {
        title: "OpenQuatt Single / Waveshare / Wi-Fi",
        chipFamily: "ESP32-S3",
        hardwareLabel: HARDWARE_LABELS.waveshare,
        connectionLabel: CONNECTION_LABELS.wifi,
        fileName: "openquatt-waveshare-single-wifi.firmware.factory.bin",
        legacyFileNames: ["openquatt-single-waveshare.firmware.factory.bin"],
        releaseFallback: true,
      },
    },
    heatpump_listener: {
      wifi: {
        title: "OpenQuatt Single / Heatpump Listener / Wi-Fi",
        chipFamily: "ESP32",
        hardwareLabel: HARDWARE_LABELS.heatpump_listener,
        connectionLabel: CONNECTION_LABELS.wifi,
        fileName: "openquatt-heatpump-listener-single-wifi.firmware.factory.bin",
        legacyFileNames: ["openquatt-single-heatpump-listener.firmware.factory.bin"],
        releaseFallback: true,
      },
    },
    heatpump_controller_q: {
      wifi: {
        title: "OpenQuatt Single / Heatpump Controller Q / Wi-Fi",
        chipFamily: "ESP32-S3",
        hardwareLabel: HARDWARE_LABELS.heatpump_controller_q,
        connectionLabel: CONNECTION_LABELS.wifi,
        fileName: "openquatt-heatpump-controller-q-single-wifi.firmware.factory.bin",
        releaseFallback: true,
      },
      eth: {
        title: "OpenQuatt Single / Heatpump Controller Q / Ethernet",
        chipFamily: "ESP32-S3",
        hardwareLabel: HARDWARE_LABELS.heatpump_controller_q,
        connectionLabel: CONNECTION_LABELS.eth,
        fileName: "openquatt-heatpump-controller-q-single-eth.firmware.factory.bin",
      },
    },
  },
};

const selectionTitle = document.getElementById("selection-title");
const selectionCopy = document.getElementById("selection-copy");
const selectionVersion = document.getElementById("selection-version");
const selectionTopology = document.getElementById("selection-topology");
const selectionHardware = document.getElementById("selection-hardware");
const selectionConnection = document.getElementById("selection-connection");
const selectionChip = document.getElementById("selection-chip");
const selectionFile = document.getElementById("selection-file");
const releaseLink = document.getElementById("release-link");
const installPanel = document.getElementById("install-panel");
const installState = document.getElementById("install-state");
const installButton = document.getElementById("install-button");

let activeManifestUrl;
let availableFactoryFiles;
let releaseInfo = {
  version: "latest",
  releaseUrl: FALLBACK_RELEASE_URL,
};

function getStableVersionLabel() {
  return releaseInfo.version === "latest" ? "Nieuwste stabiele" : releaseInfo.version;
}

function getSelectedValues() {
  return {
    topology: document.querySelector('input[name="topology"]:checked')?.value || "",
    hardware: document.querySelector('input[name="hardware"]:checked')?.value || "",
    connection: document.querySelector('input[name="connection"]:checked')?.value || "",
  };
}

function getProfile(topology, hardware, connection) {
  return PROFILES[topology]?.[hardware]?.[connection] || null;
}

function getSelectedProfile() {
  const { topology, hardware, connection } = getSelectedValues();
  const profile = getProfile(topology, hardware, connection);

  if (!topology || !hardware || !connection || !profile) {
    return null;
  }

  return {
    topology,
    hardware,
    connection,
    ...profile,
  };
}

function getProfileFileCandidates(profile) {
  return [profile.fileName, ...(profile.legacyFileNames || [])];
}

function resolveFactoryFile(profile) {
  const candidates = getProfileFileCandidates(profile);
  if (!availableFactoryFiles) {
    return profile.releaseFallback ? candidates[0] : "";
  }
  return candidates.find((fileName) => availableFactoryFiles.has(fileName)) || "";
}

function isProfileAvailable(profile) {
  return Boolean(profile && resolveFactoryFile(profile));
}

function buildManifest(profile) {
  const factoryFile = resolveFactoryFile(profile);
  return {
    name: profile.title,
    version: releaseInfo.version,
    new_install_prompt_erase: true,
    new_install_improv_wait_time: 30,
    builds: [
      {
        chipFamily: profile.chipFamily,
        parts: [
          {
            path: `${FACTORY_ROOT}/${factoryFile}`,
            offset: 0,
          },
        ],
      },
    ],
  };
}

function updateInstallManifest(profile) {
  if (activeManifestUrl) {
    URL.revokeObjectURL(activeManifestUrl);
  }

  const manifest = buildManifest(profile);
  activeManifestUrl = URL.createObjectURL(
    new Blob([JSON.stringify(manifest)], { type: "application/json" }),
  );

  installButton.manifest = activeManifestUrl;
}

function updateEmptySummary() {
  const { topology, hardware, connection } = getSelectedValues();
  const stableVersionLabel = getStableVersionLabel();

  selectionTitle.textContent = "Kies eerst je opstelling, module en verbinding";
  selectionCopy.textContent =
    "Deze installatiehulp maakt automatisch een eenmalig ESP Web Tools-manifest voor het profiel dat je hier kiest.";
  selectionVersion.textContent = stableVersionLabel;
  selectionTopology.textContent = topology ? PROFILES[topology]?.label || topology : "Niet gekozen";
  selectionHardware.textContent = hardware ? HARDWARE_LABELS[hardware] || hardware : "Niet gekozen";
  selectionConnection.textContent = connection ? CONNECTION_LABELS[connection] || connection : "Niet gekozen";
  selectionChip.textContent = "Niet gekozen";
  selectionFile.textContent = "Niet gekozen";
  installPanel.dataset.ready = "false";
  installState.textContent = "Kies opstelling, module en verbinding om de installatieknop te activeren.";
  installButton.manifest = "";
}

function getReadyStateText(profile) {
  if (profile.connection === "eth") {
    return "Klaar om te flashen. Sluit na de herstart Ethernet aan en open daarna http://openquatt.local voor de Quick Start.";
  }

  return "Klaar om te flashen. Laat deze pagina na de herstart open zodat ESP Web Tools Wi-Fi-instelling via USB kan aanbieden. Open daarna http://openquatt.local voor de Quick Start.";
}

function updateSummary() {
  const profile = getSelectedProfile();
  const stableVersionLabel = getStableVersionLabel();

  releaseLink.href = releaseInfo.releaseUrl;

  if (!profile) {
    updateEmptySummary();
    return;
  }

  const factoryFile = resolveFactoryFile(profile);
  if (!factoryFile) {
    selectionTitle.textContent = `${profile.title} is nog niet beschikbaar`;
    selectionCopy.textContent =
      "Deze keuze staat al in de installer, maar de nieuwste stabiele release bevat hiervoor nog geen factory-image.";
    selectionVersion.textContent = stableVersionLabel;
    selectionTopology.textContent = PROFILES[profile.topology].label;
    selectionHardware.textContent = profile.hardwareLabel;
    selectionConnection.textContent = profile.connectionLabel;
    selectionChip.textContent = profile.chipFamily;
    selectionFile.textContent = "Nog niet gepubliceerd";
    installPanel.dataset.ready = "false";
    installState.textContent =
      "Kies een profiel waarvoor al een stabiel factory-image beschikbaar is, of wacht op de volgende release.";
    installButton.manifest = "";
    return;
  }

  updateInstallManifest(profile);

  selectionTitle.textContent = profile.title;
  selectionCopy.textContent =
    `Deze installatiehulp wijst naar de stabiele versie ${stableVersionLabel} die voor dit profiel op deze site beschikbaar is.`;
  selectionVersion.textContent = stableVersionLabel;
  selectionTopology.textContent = PROFILES[profile.topology].label;
  selectionHardware.textContent = profile.hardwareLabel;
  selectionConnection.textContent = profile.connectionLabel;
  selectionChip.textContent = profile.chipFamily;
  selectionFile.textContent = factoryFile;
  installPanel.dataset.ready = "true";
  installState.textContent = getReadyStateText(profile);
}

document.querySelectorAll('input[name="topology"], input[name="hardware"], input[name="connection"]').forEach((input) => {
  input.addEventListener("change", () => {
    updateAvailability();
    updateSummary();
  });
});

function getHardwareProfiles(topology, hardware) {
  if (topology) {
    return Object.values(PROFILES[topology]?.[hardware] || {});
  }

  return Object.values(PROFILES).flatMap((topologyProfiles) => Object.values(topologyProfiles[hardware] || {}));
}

function updateHardwareAvailability() {
  const { topology } = getSelectedValues();
  const hardwareOptions = document.querySelectorAll('input[name="hardware"]');

  hardwareOptions.forEach((input) => {
    const profiles = getHardwareProfiles(topology, input.value);
    const available = profiles.some((profile) => isProfileAvailable(profile));
    input.disabled = !available;
    input.closest(".choice-card")?.toggleAttribute("data-unavailable", !available);
    if (!available && input.checked) {
      input.checked = false;
    }
  });
}

function updateConnectionAvailability() {
  const { topology, hardware } = getSelectedValues();
  const connectionOptions = document.querySelectorAll('input[name="connection"]');

  connectionOptions.forEach((input) => {
    const profile = topology && hardware ? getProfile(topology, hardware, input.value) : null;
    const available = isProfileAvailable(profile);
    input.disabled = !available;
    input.closest(".choice-card")?.toggleAttribute("data-unavailable", !available);
    if (!available && input.checked) {
      input.checked = false;
    }
  });
}

function updateAvailability() {
  updateHardwareAvailability();
  updateConnectionAvailability();
}

async function loadReleaseInfo() {
  try {
    const [versionResponse, factoryFilesResponse] = await Promise.all([
      fetch(VERSION_URL, { cache: "no-cache" }),
      fetch(FACTORY_FILES_URL, { cache: "no-cache" }),
    ]);
    if (!versionResponse.ok) {
      throw new Error(`version HTTP ${versionResponse.status}`);
    }

    const metadata = await versionResponse.json();
    if (factoryFilesResponse.ok) {
      const factoryMetadata = await factoryFilesResponse.json();
      if (Array.isArray(factoryMetadata.factory_files)) {
        availableFactoryFiles = new Set(factoryMetadata.factory_files);
      }
    }

    if (typeof metadata.version === "string" && metadata.version) {
      releaseInfo.version = metadata.version;
    }
    if (typeof metadata.release_url === "string" && metadata.release_url) {
      releaseInfo.releaseUrl = metadata.release_url;
    }
  } catch (error) {
    console.warn("Kon de gespiegelde release-metadata niet laden", error);
  } finally {
    updateAvailability();
    updateSummary();
  }
}

window.addEventListener("beforeunload", () => {
  if (activeManifestUrl) {
    URL.revokeObjectURL(activeManifestUrl);
  }
});

updateSummary();
updateAvailability();
loadReleaseInfo();
