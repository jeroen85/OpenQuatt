const FACTORY_ROOT = new URL("../firmware/main/", window.location.href).toString().replace(/\/$/, "");
const VERSION_URL = new URL("../firmware/main/version.json", window.location.href).toString();
const FALLBACK_RELEASE_URL = "https://github.com/jeroen85/OpenQuatt/releases/latest";

const PROFILES = {
  duo: {
    label: "Duo",
    waveshare: {
      title: "OpenQuatt Duo / Waveshare",
      chipFamily: "ESP32-S3",
      hardwareLabel: "Waveshare ESP32-S3-Relay-1CH",
      fileName: "openquatt-duo-waveshare.firmware.factory.bin",
    },
    "heatpump-listener": {
      title: "OpenQuatt Duo / Heatpump Listener",
      chipFamily: "ESP32",
      hardwareLabel: "Heatpump Listener",
      fileName: "openquatt-duo-heatpump-listener.firmware.factory.bin",
    },
  },
  single: {
    label: "Single",
    waveshare: {
      title: "OpenQuatt Single / Waveshare",
      chipFamily: "ESP32-S3",
      hardwareLabel: "Waveshare ESP32-S3-Relay-1CH",
      fileName: "openquatt-single-waveshare.firmware.factory.bin",
    },
    "heatpump-listener": {
      title: "OpenQuatt Single / Heatpump Listener",
      chipFamily: "ESP32",
      hardwareLabel: "Heatpump Listener",
      fileName: "openquatt-single-heatpump-listener.firmware.factory.bin",
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

function buildManifest(profile) {
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
            path: `${FACTORY_ROOT}/${profile.fileName}`,
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

  updateInstallManifest(profile);

  selectionTitle.textContent = profile.title;
  selectionCopy.textContent =
    `Deze installatiehulp wijst naar de stabiele versie ${stableVersionLabel} die voor dit profiel op deze site beschikbaar is.`;
  selectionVersion.textContent = stableVersionLabel;
  selectionTopology.textContent = PROFILES[profile.topology].label;
  selectionHardware.textContent = profile.hardwareLabel;
  selectionChip.textContent = profile.chipFamily;
  selectionFile.textContent = profile.fileName;
  installPanel.dataset.ready = "true";
  installState.textContent =
    "Klaar om te flashen. Laat deze pagina na de herstart open zodat ESP Web Tools wifi-instelling via USB kan aanbieden; anders kun je terugvallen op het OpenQuatt access point.";
}

document.querySelectorAll('input[name="topology"], input[name="hardware"]').forEach((input) => {
  input.addEventListener("change", updateSummary);
});

async function loadReleaseInfo() {
  try {
    const response = await fetch(VERSION_URL, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const metadata = await response.json();
    if (typeof metadata.version === "string" && metadata.version) {
      releaseInfo.version = metadata.version;
    }
    if (typeof metadata.release_url === "string" && metadata.release_url) {
      releaseInfo.releaseUrl = metadata.release_url;
    }
  } catch (error) {
    console.warn("Kon de gespiegelde release-metadata niet laden", error);
  } finally {
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
