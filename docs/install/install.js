const FACTORY_ROOT = new URL("../firmware/main/", window.location.href).toString().replace(/\/$/, "");
const VERSION_URL = new URL("../firmware/main/version.json", window.location.href).toString();
const FACTORY_FILES_URL = new URL("../firmware/main/factory_files.json", window.location.href).toString();
const FALLBACK_RELEASE_URL = "https://github.com/jeroen85/OpenQuatt/releases/latest";

const PROFILES = {
  duo: {
    label: "Duo",
    waveshare: {
      title: "OpenQuatt Duo / Waveshare / Wi-Fi",
      chipFamily: "ESP32-S3",
      hardwareLabel: "Waveshare ESP32-S3-Relay-1CH",
      fileName: "openquatt-waveshare-duo-wifi.firmware.factory.bin",
      legacyFileNames: ["openquatt-duo-waveshare.firmware.factory.bin"],
    },
    heatpump_listener: {
      title: "OpenQuatt Duo / Heatpump Listener / Wi-Fi",
      chipFamily: "ESP32",
      hardwareLabel: "Electropaultje Heatpump Listener",
      fileName: "openquatt-heatpump-listener-duo-wifi.firmware.factory.bin",
      legacyFileNames: ["openquatt-duo-heatpump-listener.firmware.factory.bin"],
    },
    heatpump_controller_q: {
      title: "OpenQuatt Duo / Heatpump Controller Q / Wi-Fi",
      chipFamily: "ESP32-S3",
      hardwareLabel: "Electropaultje Heatpump Controller Q-edition",
      fileName: "openquatt-heatpump-controller-q-duo-wifi.firmware.factory.bin",
    },
  },
  single: {
    label: "Single",
    waveshare: {
      title: "OpenQuatt Single / Waveshare / Wi-Fi",
      chipFamily: "ESP32-S3",
      hardwareLabel: "Waveshare ESP32-S3-Relay-1CH",
      fileName: "openquatt-waveshare-single-wifi.firmware.factory.bin",
      legacyFileNames: ["openquatt-single-waveshare.firmware.factory.bin"],
    },
    heatpump_listener: {
      title: "OpenQuatt Single / Heatpump Listener / Wi-Fi",
      chipFamily: "ESP32",
      hardwareLabel: "Electropaultje Heatpump Listener",
      fileName: "openquatt-heatpump-listener-single-wifi.firmware.factory.bin",
      legacyFileNames: ["openquatt-single-heatpump-listener.firmware.factory.bin"],
    },
    heatpump_controller_q: {
      title: "OpenQuatt Single / Heatpump Controller Q / Wi-Fi",
      chipFamily: "ESP32-S3",
      hardwareLabel: "Electropaultje Heatpump Controller Q-edition",
      fileName: "openquatt-heatpump-controller-q-single-wifi.firmware.factory.bin",
    },
  },
};

const selectionTitle = document.getElementById("selection-title");
const selectionCopy = document.getElementById("selection-copy");
const selectionVersion = document.getElementById("selection-version");
const selectionTopology = document.getElementById("selection-topology");
const selectionHardware = document.getElementById("selection-hardware");
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

function getSelectedProfile() {
  const topology = document.querySelector('input[name="topology"]:checked')?.value;
  const hardware = document.querySelector('input[name="hardware"]:checked')?.value;

  if (!topology || !hardware) {
    return null;
  }

  return {
    topology,
    hardware,
    ...PROFILES[topology][hardware],
  };
}

function getProfileFileCandidates(profile) {
  return [profile.fileName, ...(profile.legacyFileNames || [])];
}

function resolveFactoryFile(profile) {
  const candidates = getProfileFileCandidates(profile);
  if (!availableFactoryFiles) {
    return candidates[0];
  }
  return candidates.find((fileName) => availableFactoryFiles.has(fileName)) || "";
}

function isProfileAvailable(profile) {
  return Boolean(resolveFactoryFile(profile));
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

function updateSummary() {
  const profile = getSelectedProfile();
  const stableVersionLabel = getStableVersionLabel();

  releaseLink.href = releaseInfo.releaseUrl;

  if (!profile) {
    selectionTitle.textContent = "Kies eerst je opstelling en hardware";
    selectionCopy.textContent =
      "Deze installatiehulp maakt automatisch een eenmalig ESP Web Tools-manifest voor het profiel dat je hier kiest.";
    selectionVersion.textContent = stableVersionLabel;
    selectionTopology.textContent = "Niet gekozen";
    selectionHardware.textContent = "Niet gekozen";
    selectionChip.textContent = "Niet gekozen";
    selectionFile.textContent = "Niet gekozen";
    installPanel.dataset.ready = "false";
    installState.textContent = "Kies eerst beide opties om de installatieknop te activeren.";
    installButton.manifest = "";
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
  selectionChip.textContent = profile.chipFamily;
  selectionFile.textContent = factoryFile;
  installPanel.dataset.ready = "true";
  installState.textContent =
    "Klaar om te flashen. Laat deze pagina na de herstart open zodat ESP Web Tools wifi-instelling via USB kan aanbieden; anders kun je terugvallen op het OpenQuatt access point.";
}

document.querySelectorAll('input[name="topology"], input[name="hardware"]').forEach((input) => {
  input.addEventListener("change", () => {
    updateAvailability();
    updateSummary();
  });
});

function updateAvailability() {
  const topology = document.querySelector('input[name="topology"]:checked')?.value;
  const hardwareOptions = document.querySelectorAll('input[name="hardware"]');

  hardwareOptions.forEach((input) => {
    const profiles = topology
      ? [PROFILES[topology][input.value]]
      : Object.values(PROFILES).map((topologyProfiles) => topologyProfiles[input.value]);
    const available = profiles.some((profile) => profile && isProfileAvailable(profile));
    input.disabled = !available;
    input.closest(".choice-card")?.toggleAttribute("data-unavailable", !available);
    if (!available && input.checked) {
      input.checked = false;
    }
  });
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
loadReleaseInfo();
