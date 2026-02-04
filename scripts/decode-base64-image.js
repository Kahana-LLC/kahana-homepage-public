#!/usr/bin/env node
const fs = require('fs');
const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node decode-base64-image.js <base64-file> [output.jpg]');
  process.exit(1);
}
const inputPath = args[0];
const outputPath = args[1] || inputPath.replace(/\.(txt|b64)$/, '.jpg');
const raw = fs.readFileSync(inputPath, 'utf8');
const clean = raw.replace(/^data:image\/[^;]+;base64,/, '').trim();
fs.writeFileSync(outputPath, Buffer.from(clean, 'base64'));
console.log('Saved', outputPath);
