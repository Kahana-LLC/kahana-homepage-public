#!/usr/bin/env node
/**
 * Decode the Privacy vs Convenience blog featured image from base64.
 *
 * Option A - From file:
 *   1. Put the base64 image data into: scripts/privacy-convenience-2026.b64
 *   2. Run: node scripts/decode-privacy-convenience-image.js
 *
 * Option B - From stdin (paste base64, then Ctrl+D):
 *   node scripts/decode-privacy-convenience-image.js < /dev/stdin
 *
 * Or on Mac: pbpaste | node scripts/decode-privacy-convenience-image.js
 */
const fs = require('fs');
const path = require('path');

const b64Path = path.join(__dirname, 'privacy-convenience-2026.b64');
const outPath = path.join(__dirname, '..', 'public', 'blog', 'privacy-vs-convenience-ai-browser-era-2026.jpg');

function run(raw) {
  const clean = raw.replace(/^data:image\/[^;]+;base64,/, '').trim();
  if (!clean) {
    console.error('No base64 data found.');
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, Buffer.from(clean, 'base64'));
  console.log('Saved:', outPath);
}

if (fs.existsSync(b64Path)) {
  run(fs.readFileSync(b64Path, 'utf8'));
} else if (!process.stdin.isTTY) {
  const chunks = [];
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (c) => chunks.push(c));
  process.stdin.on('end', () => run(chunks.join('')));
} else {
  console.error('Paste base64 into scripts/privacy-convenience-2026.b64, or pipe it: pbpaste | node scripts/decode-privacy-convenience-image.js');
  process.exit(1);
}
