(function () {
  const currentScript = document.currentScript;
  const baseUrl = currentScript ? new URL(".", currentScript.src).toString() : "";
  const officialUrl = "https://oi.esphome.io/v3/www.js";
  const appUrl = baseUrl ? new URL("openquatt-app.js", baseUrl).toString() : "";

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (!src) {
        resolve();
        return;
      }

      const existing = Array.from(document.scripts).find((script) => script.src === src);
      if (existing) {
        if (existing.dataset.loaded === "true") {
          resolve();
          return;
        }

        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", (event) => reject(event), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.addEventListener(
        "load",
        () => {
          script.dataset.loaded = "true";
          resolve();
        },
        { once: true },
      );
      script.addEventListener("error", (event) => reject(event), { once: true });
      document.head.appendChild(script);
    });
  }

  loadScript(officialUrl)
    .then(() => loadScript(appUrl))
    .catch((error) => {
      console.error("OpenQuatt app wrapper failed to load", error);
    });
})();
