import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bundles = [
  {
    label: "JS",
    output: path.join(__dirname, "js", "openquatt-app.js"),
    sources: [
      path.join(__dirname, "js", "src", "00-config.js"),
      path.join(__dirname, "js", "src", "01-runtime.js"),
      path.join(__dirname, "js", "src", "02-firmware-header.js"),
      path.join(__dirname, "js", "src", "03-entities-controls.js"),
      path.join(__dirname, "js", "src", "05-app-shared.js"),
      path.join(__dirname, "js", "src", "10-settings.js"),
      path.join(__dirname, "js", "src", "15-quickstart.js"),
      path.join(__dirname, "js", "src", "20-overview.js"),
      path.join(__dirname, "js", "src", "30-energy.js"),
      path.join(__dirname, "js", "src", "40-heatpump.js"),
      path.join(__dirname, "js", "src", "90-shell.js"),
    ],
  },
  {
    label: "CSS",
    output: path.join(__dirname, "css", "openquatt-app.css"),
    sources: [
      path.join(__dirname, "css", "src", "00-base.css"),
      path.join(__dirname, "css", "src", "10-settings.css"),
      path.join(__dirname, "css", "src", "20-overview.css"),
      path.join(__dirname, "css", "src", "30-energy.css"),
      path.join(__dirname, "css", "src", "40-heatpump.css"),
      path.join(__dirname, "css", "src", "90-responsive.css"),
    ],
  },
];

async function buildEmbeddedAssetBlock() {
  const assets = [
    ["HP_GENERATION_IMAGE_V1", path.join(__dirname, "assets", "quatt-hybrid-v1.webp")],
    ["HP_GENERATION_IMAGE_V2", path.join(__dirname, "assets", "quatt-hybrid-v2.webp")],
  ];

  const lines = [
    "/* --- embedded web assets --- */",
  ];

  for (const [name, assetPath] of assets) {
    const bytes = await readFile(assetPath);
    lines.push(`const ${name} = "data:image/webp;base64,${bytes.toString("base64")}";`);
  }

  return lines.join("\n");
}

async function buildBundle(bundle) {
  const parts = await Promise.all(
    bundle.sources.map(async (source) => ({
      source,
      content: await readFile(source, "utf8"),
    })),
  );

  const header = [
    `/* Generated bundle: ${path.relative(__dirname, bundle.output)} */`,
    "/* Source files are in ./js/src and ./css/src. */",
    "/* Rebuild with: node openquatt/web/build-assets.mjs */",
    "",
  ].join("\n");
  const bodySegments = parts.map(({ source, content }) => `/* --- ${path.relative(__dirname, source)} --- */\n${content.trimEnd()}`);
  if (bundle.label === "JS") {
    bodySegments.splice(5, 0, await buildEmbeddedAssetBlock());
  }
  const body = bodySegments.join("\n\n");
  await mkdir(path.dirname(bundle.output), { recursive: true });
  await writeFile(bundle.output, `${header}${body}\n`, "utf8");
  console.log(`${bundle.label} bundle rebuilt: ${path.relative(__dirname, bundle.output)}`);
}

await Promise.all(bundles.map(buildBundle));
