#!/usr/bin/env node
/**
 * Replace Unicode em dashes (U+2014 "—") in blog JSON with comma phrasing.
 * Does NOT alter en dashes (U+2013 "–") used in ranges (e.g. 2025–2026).
 *
 * Usage:
 *   node scripts/normalize-blog-em-dashes.js           # dry-run: counts only
 *   node scripts/normalize-blog-em-dashes.js --write   # apply changes
 *
 * Example:
 *   "leakage — such as paste — until" → "leakage, such as paste, until"
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../data/blog');
const EM_DASH = '\u2014';

function normalizeEmDashesInString(str) {
  if (typeof str !== 'string' || !str.includes(EM_DASH)) {
    return { text: str, count: 0 };
  }
  const count = (str.match(/\u2014/g) || []).length;
  let s = str.replace(/\s*\u2014\s*/g, ', ');
  s = s.replace(/,\s*,+/g, ', ');
  // Fix "word., Next" from em-dash replacement; do NOT touch "e.g., " / "i.e., " / "etc., "
  s = s.replace(/\.,\s+/g, (match, offset, full) => {
    const prefix = full.slice(0, offset);
    if (/\be\.g$/i.test(prefix) || /\bi\.e$/i.test(prefix) || /\betc$/i.test(prefix) || /\bet al$/i.test(prefix)) {
      return match;
    }
    return '. ';
  });
  s = s.replace(/\(\s*,/g, '(');
  s = s.replace(/,\s*\)/g, ')');
  return { text: s, count };
}

function walkStrings(obj, visitor) {
  if (typeof obj === 'string') {
    return visitor(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => walkStrings(item, visitor));
  }
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const key of Object.keys(obj)) {
      out[key] = walkStrings(obj[key], visitor);
    }
    return out;
  }
  return obj;
}

function processFile(filePath, dryRun) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  let replacements = 0;

  const visitor = (str) => {
    const { text, count } = normalizeEmDashesInString(str);
    replacements += count;
    return text;
  };

  const next = walkStrings(data, visitor);

  if (!dryRun && replacements > 0) {
    fs.writeFileSync(filePath, JSON.stringify(next, null, 2) + '\n');
  }

  return replacements;
}

function main() {
  const dryRun = !process.argv.includes('--write');
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.json'));

  let total = 0;
  const touched = [];

  for (const file of files) {
    const full = path.join(BLOG_DIR, file);
    try {
      const n = processFile(full, dryRun);
      if (n > 0) {
        total += n;
        touched.push({ file, emDashes: n });
      }
    } catch (e) {
      console.error('Error:', file, e.message);
      process.exitCode = 1;
    }
  }

  touched.sort((a, b) => b.emDashes - a.emDashes);
  console.log(dryRun ? 'DRY RUN (no files modified). Use --write to apply.\n' : 'Wrote changes.\n');
  console.log(`Files with em dashes: ${touched.length}`);
  console.log(`Total em dash characters replaced: ${total}`);
  if (touched.length && process.argv.includes('--verbose')) {
    console.log('\nPer file:');
    touched.forEach(({ file, emDashes }) => console.log(`  ${emDashes}\t${file}`));
  }
}

main();
