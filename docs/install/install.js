const FACTORY_ROOT = new URL("../firmware/main/", window.location.href).toString().replace(/\/$/, "");

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
const selectionTopology = document.getElementById("selection-topology");
const selectionHardware = document.getElementById("selection-hardware");
const selectionChip = document.getElementById("selection-chip");
const selectionFile = document.getElementById("selection-file");
const installPanel = document.getElementById("install-panel");
const installState = document.getElementById("install-state");
const installButton = document.getElementById("install-button");

let activeManifestUrl;

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
    version: "latest",
    new_install_prompt_erase: true,
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

  if (!profile) {
    selectionTitle.textContent = "Choose setup and hardware first";
    selectionCopy.textContent =
      "The installer will generate a one-off ESP Web Tools manifest for the exact profile you pick here.";
    selectionTopology.textContent = "Not selected";
    selectionHardware.textContent = "Not selected";
    selectionChip.textContent = "Not selected";
    selectionFile.textContent = "Not selected";
    installPanel.dataset.ready = "false";
    installState.textContent = "Finish both selections to unlock the installer.";
    installButton.manifest = "";
    return;
  }

  updateInstallManifest(profile);

  selectionTitle.textContent = profile.title;
  selectionCopy.textContent =
    "This installer points at the stable factory image mirrored on this site for the selected profile.";
  selectionTopology.textContent = PROFILES[profile.topology].label;
  selectionHardware.textContent = profile.hardwareLabel;
  selectionChip.textContent = profile.chipFamily;
  selectionFile.textContent = profile.fileName;
  installPanel.dataset.ready = "true";
  installState.textContent =
    "Ready to flash. After the install completes, let the board reboot and continue setup on the OpenQuatt access point.";
}

document.querySelectorAll('input[name="topology"], input[name="hardware"]').forEach((input) => {
  input.addEventListener("change", updateSummary);
});

window.addEventListener("beforeunload", () => {
  if (activeManifestUrl) {
    URL.revokeObjectURL(activeManifestUrl);
  }
});

updateSummary();
