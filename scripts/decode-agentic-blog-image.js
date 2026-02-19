#!/usr/bin/env node
/**
 * Decode the Agentic AI blog featured image from base64.
 *
 * 1. Put the base64 image data into: scripts/agentic-ai-browser-autonomous-task-execution-2026.b64
 *    (with or without the "data:image/png;base64," prefix)
 * 2. Run: node scripts/decode-agentic-blog-image.js
 */
const fs = require('fs');
const path = require('path');

const b64Path = path.join(__dirname, 'agentic-ai-browser-autonomous-task-execution-2026.b64');
const outPath = path.join(__dirname, '..', 'public', 'blog', 'agentic-ai-browser-autonomous-task-execution-2026.png');

if (!fs.existsSync(b64Path)) {
  console.error('Missing base64 file. Create scripts/agentic-ai-browser-autonomous-task-execution-2026.b64 and paste the base64 image data, then run this script again.');
  process.exit(1);
}

const raw = fs.readFileSync(b64Path, 'utf8');
const clean = raw.replace(/^data:image\/[^;]+;base64,/, '').trim();
if (!clean) {
  console.error('No base64 data in', b64Path);
  process.exit(1);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, Buffer.from(clean, 'base64'));
console.log('Saved:', outPath);
