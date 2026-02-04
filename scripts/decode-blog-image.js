#!/usr/bin/env node
const fs = require('fs');
const base64 = process.argv[2] || process.env.B64;
if (!base64) process.exit(1);
const clean = base64.replace(/^data:image\/[^;]+;base64,/, '');
fs.writeFileSync(
  'public/blog/enterprise-browsers-new-perimeter-saas-2026.jpg',
  Buffer.from(clean, 'base64')
);
console.log('Image saved');
