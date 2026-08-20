import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const raw = readFileSync(join(root, "src/liquid-glass.css"), "utf8");
const css = raw.replace(/\/\*[\s\S]*?\*\//g, "");

const forbidden = [
  "feDisplacementMap",
  "feTurbulence",
  "feSpecularLighting",
  "url(#",
  "webgl",
];

const hits = forbidden.filter((token) => css.toLowerCase().includes(token.toLowerCase()));

if (hits.length > 0) {
  console.error("Refraction-related tokens found in CSS:", hits.join(", "));
  process.exit(1);
}

const required = ["backdrop-filter", "-webkit-backdrop-filter", "--lg-blur", "::before", "::after"];
const missing = required.filter((token) => !css.includes(token));

if (missing.length > 0) {
  console.error("Missing expected glass tokens:", missing.join(", "));
  process.exit(1);
}

console.log("ok: CSS kit is blur + highlight only, no refraction.");
