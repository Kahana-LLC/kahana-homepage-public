#!/usr/bin/env node
// Script to remove redundant image files that have WebP equivalents

const fs = require('fs');
const path = require('path');

const filesToRemove = [
  // PNG files with WebP equivalents
  'public/images/spatial.png',
  'public/images/WIP.png',
  'public/images/in-action.png',
  'public/images/ai-2.png',
  'public/images/ai.png',
  'public/images/visibility.png',
  'public/images/applicaiton .png',
  'public/images/securtiy.png',
  'public/images/data-protection .png',
  'public/images/productivity.png',
  'public/images/cost.png',
  'public/images/analytics.png',
  'public/images/data-protection-2.png',
  'public/figma-imports/Custom Themes.png',
  'public/figma-imports/Personalization Features.png',
  'public/figma-imports/Security 1.png',
  'public/figma-imports/Security 2.png',
  // SVG files with WebP equivalents
  'public/figma-imports/New Tab Page.svg',
  'public/figma-imports/Tab Groups.svg',
  // Unused SVG files (not referenced in code)
  'public/figma-imports/er.svg',
  'public/figma-imports/er2.svg',
  'public/figma-imports/er3.svg',
];

let totalSize = 0;
const deletedFiles = [];
const skippedFiles = [];

filesToRemove.forEach((filePath) => {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
    try {
      fs.unlinkSync(filePath);
      deletedFiles.push({ path: filePath, size: stats.size });
      console.log(`✓ Deleted: ${filePath} (${(stats.size / 1024 / 1024).toFixed(2)}MB)`);
    } catch (error) {
      console.error(`✗ Error deleting ${filePath}:`, error.message);
      skippedFiles.push(filePath);
    }
  } else {
    console.log(`⚠ File not found: ${filePath}`);
    skippedFiles.push(filePath);
  }
});

console.log(`\n=== Summary ===`);
console.log(`Files deleted: ${deletedFiles.length}`);
console.log(`Files skipped: ${skippedFiles.length}`);
console.log(`Total size saved: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
