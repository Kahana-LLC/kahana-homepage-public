#!/usr/bin/env node
/**
 * Decode base64 image to blog featured image.
 * Usage: 
 *   cat base64.txt | node scripts/decode-base64-to-blog-image.js
 *   pbpaste | node scripts/decode-base64-to-blog-image.js   # Mac clipboard
 * Or: node scripts/decode-base64-to-blog-image.js < base64.txt
 */
const fs = require('fs');
const path = require('path');

const BLOG_IMAGE_PATH = path.join(__dirname, '../public/blog/drm-privacy-innovation-browsers-locked-down-2026.jpg');

let data = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { data += chunk; });
process.stdin.on('end', () => {
  const clean = data.replace(/^data:image\/[^;]+;base64,/, '').trim();
  if (!clean) {
    console.error('No base64 data received');
    process.exit(1);
  }
  try {
    fs.writeFileSync(BLOG_IMAGE_PATH, Buffer.from(clean, 'base64'));
    console.log('Saved:', BLOG_IMAGE_PATH);
  } catch (err) {
    console.error('Decode error:', err.message);
    process.exit(1);
  }
});
