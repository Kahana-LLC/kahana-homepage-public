#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const KB = 1024;

const REPORTS = [
  {
    file: "lighthouse-homepage-desktop.json",
    label: "desktop",
    thresholds: {
      score: 85,
      lcpMs: 1800,
      tbtMs: 200,
      cls: 0.1,
    },
  },
  {
    file: "lighthouse-homepage-mobile.json",
    label: "mobile",
    thresholds: {
      score: 85,
      lcpMs: 2500,
      tbtMs: 200,
      cls: 0.1,
    },
  },
];

function loadReport(reportFile) {
  const reportPath = path.join(process.cwd(), reportFile);
  if (!fs.existsSync(reportPath)) return null;
  return JSON.parse(fs.readFileSync(reportPath, "utf8"));
}

function readMetrics(lhr) {
  return {
    score: Math.round((lhr.categories?.performance?.score || 0) * 100),
    lcpMs: Math.round(lhr.audits?.["largest-contentful-paint"]?.numericValue || 0),
    tbtMs: Math.round(lhr.audits?.["total-blocking-time"]?.numericValue || 0),
    cls: Number(lhr.audits?.["cumulative-layout-shift"]?.numericValue || 0),
  };
}

const failures = [];
const missing = [];

REPORTS.forEach(({ file, label, thresholds }) => {
  const lhr = loadReport(file);
  if (!lhr) {
    missing.push(file);
    return;
  }

  const m = readMetrics(lhr);
  console.log(`[lighthouse-thresholds] ${label}: score=${m.score}, lcp=${m.lcpMs}ms, tbt=${m.tbtMs}ms, cls=${m.cls}`);

  if (m.score < thresholds.score) {
    failures.push(`${label} score ${m.score} < ${thresholds.score}`);
  }
  if (m.lcpMs > thresholds.lcpMs) {
    failures.push(`${label} LCP ${m.lcpMs}ms > ${thresholds.lcpMs}ms`);
  }
  if (m.tbtMs > thresholds.tbtMs) {
    failures.push(`${label} TBT ${m.tbtMs}ms > ${thresholds.tbtMs}ms`);
  }
  if (m.cls > thresholds.cls) {
    failures.push(`${label} CLS ${m.cls} > ${thresholds.cls}`);
  }
});

if (missing.length) {
  console.warn("[lighthouse-thresholds] Skipped missing reports:");
  missing.forEach((file) => console.warn(`- ${file}`));
}

if (failures.length) {
  console.error("[lighthouse-thresholds] FAIL");
  failures.forEach((f) => console.error(`- ${f}`));
  process.exit(1);
}

console.log("[lighthouse-thresholds] PASS");
