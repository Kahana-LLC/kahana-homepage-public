#!/usr/bin/env node
const path = require("path");
const { buildHostMap, isHostAllowed } = require("./lib/image-host-audit");

const workspaceRoot = process.cwd();
const nextConfig = require(path.join(workspaceRoot, "next.config.js"));
const imageConfig = nextConfig.images || {};

const allowedDomains = new Set((imageConfig.domains || []).map((d) => d.toLowerCase()));
const remotePatterns = (imageConfig.remotePatterns || []).map((p) => ({
  protocol: p.protocol || "https",
  hostname: (p.hostname || "").toLowerCase(),
  pathname: p.pathname || "/**",
}));

const inventory = buildHostMap(workspaceRoot);
const missing = [];

inventory.hosts.forEach((host) => {
  if (!isHostAllowed(host.toLowerCase(), allowedDomains, remotePatterns)) {
    missing.push({
      host,
      sources: inventory.byHost[host],
    });
  }
});

if (missing.length === 0) {
  console.log("[images:validate-hosts] PASS");
  console.log(`[images:validate-hosts] Checked ${inventory.hosts.length} hosts from content sources.`);
  process.exit(0);
}

console.error("[images:validate-hosts] FAIL - unconfigured next/image hosts found:");
missing.forEach((item) => {
  console.error(`- ${item.host}`);
  item.sources.forEach((src) => console.error(`  - ${src}`));
});
console.error(
  "\nAdd missing hosts to `images.remotePatterns` or normalize URLs through the Cloudinary mapper."
);
process.exit(1);
