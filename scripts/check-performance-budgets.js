#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const buildManifestPath = path.join(process.cwd(), ".next", "build-manifest.json");

if (!fs.existsSync(buildManifestPath)) {
  console.error(
    "[perf-budget] Missing .next/build-manifest.json. Run `npm run build` before checking budgets."
  );
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(buildManifestPath, "utf8"));
const pages = manifest.pages || {};
const assetPrefix = (manifest.assetPrefix || "").replace(/\/$/, "");

const homepageFiles = pages["/"] || [];
const allFiles = [...new Set([...(pages["/_app"] || []), ...homepageFiles])];

const jsFiles = allFiles.filter((file) => file.endsWith(".js"));
const cssFiles = allFiles.filter((file) => file.endsWith(".css"));

function byteSize(file) {
  const normalized = file.startsWith("/") ? file.slice(1) : file;
  const filePath = path.join(process.cwd(), ".next", normalized);
  if (!fs.existsSync(filePath)) return 0;
  return fs.statSync(filePath).size;
}

const jsBytes = jsFiles.reduce((sum, file) => sum + byteSize(file), 0);
const cssBytes = cssFiles.reduce((sum, file) => sum + byteSize(file), 0);
const totalBytes = jsBytes + cssBytes;

const KB = 1024;
const budgets = {
  js: 430 * KB,
  css: 180 * KB,
  total: 600 * KB,
};

const failures = [];
if (jsBytes > budgets.js) failures.push(`JS budget exceeded: ${Math.round(jsBytes / KB)}KB > ${Math.round(budgets.js / KB)}KB`);
if (cssBytes > budgets.css) failures.push(`CSS budget exceeded: ${Math.round(cssBytes / KB)}KB > ${Math.round(budgets.css / KB)}KB`);
if (totalBytes > budgets.total) failures.push(`Total budget exceeded: ${Math.round(totalBytes / KB)}KB > ${Math.round(budgets.total / KB)}KB`);

console.log("[perf-budget] Home route assets");
console.log(`- JS: ${Math.round(jsBytes / KB)}KB`);
console.log(`- CSS: ${Math.round(cssBytes / KB)}KB`);
console.log(`- Total: ${Math.round(totalBytes / KB)}KB`);
console.log(`- Files: ${assetPrefix}/_app + /`);

if (failures.length) {
  console.error("[perf-budget] FAIL");
  failures.forEach((f) => console.error(`  - ${f}`));
  process.exit(1);
}

console.log("[perf-budget] PASS");
