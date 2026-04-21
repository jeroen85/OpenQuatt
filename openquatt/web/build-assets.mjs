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
      path.join(__dirname, "js", "src", "00-core.js"),
      path.join(__dirname, "js", "src", "10-settings-quickstart.js"),
      path.join(__dirname, "js", "src", "20-overview.js"),
      path.join(__dirname, "js", "src", "30-energy-heatpump.js"),
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
      path.join(__dirname, "css", "src", "90-responsive.css"),
    ],
  },
];

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
  const body = parts.map(({ source, content }) => `/* --- ${path.relative(__dirname, source)} --- */\n${content.trimEnd()}`).join("\n\n");
  await mkdir(path.dirname(bundle.output), { recursive: true });
  await writeFile(bundle.output, `${header}${body}\n`, "utf8");
  console.log(`${bundle.label} bundle rebuilt: ${path.relative(__dirname, bundle.output)}`);
}

await Promise.all(bundles.map(buildBundle));
