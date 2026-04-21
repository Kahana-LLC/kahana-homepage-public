#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { buildHostMap } = require("./lib/image-host-audit");

const workspaceRoot = process.cwd();
const reportDir = path.join(workspaceRoot, "reports");
const jsonPath = path.join(reportDir, "image-host-inventory.json");
const mdPath = path.join(reportDir, "image-host-inventory.md");

const inventory = buildHostMap(workspaceRoot);

if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

const report = {
  generatedAt: new Date().toISOString(),
  totalHosts: inventory.hosts.length,
  hosts: inventory.hosts,
  byHost: inventory.byHost,
  sourceFiles: inventory.sourceFiles,
};

fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));

const hostLines = inventory.hosts
  .map((host) => {
    const files = inventory.byHost[host].map((f) => `\`${f}\``).join(", ");
    return `- \`${host}\` -> ${files}`;
  })
  .join("\n");

const md = `# Image Host Inventory

Generated: ${report.generatedAt}

Total hosts found: ${report.totalHosts}

## Host to source mapping
${hostLines || "- (none)"}
`;

fs.writeFileSync(mdPath, md);

console.log(`[image-hosts] Wrote ${path.relative(workspaceRoot, jsonPath)}`);
console.log(`[image-hosts] Wrote ${path.relative(workspaceRoot, mdPath)}`);
console.log(`[image-hosts] Hosts found: ${report.totalHosts}`);
