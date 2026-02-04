#!/usr/bin/env node
const fs = require('fs');
const [inPath, outPath] = process.argv.slice(2);
if (!inPath || !outPath) process.exit(1);
const raw = fs.readFileSync(inPath, 'utf8');
const clean = raw.replace(/^data:image\/[^;]+;base64,/, '').trim();
fs.writeFileSync(outPath, Buffer.from(clean, 'base64'));
console.log('Saved', outPath);
