/**
 * Import Oasis help-center markdown into data/docs/*.json
 *
 * Usage:
 *   node scripts/sync-oasis-help-stubs.mjs [FIREFOX_OASIS_REPO_ROOT]     # legacy: help-center-stubs
 *   node scripts/sync-oasis-help-stubs.mjs --migrate [FIREFOX_OASIS_REPO_ROOT]   # recommended: help-center-migrate
 *
 * Env:
 *   OASIS_FIREFOX_ROOT — path to firefox-oasis repository root
 *
 * Production content: refresh firefox-oasis with
 *   python3 docs/scripts/apply_help_center_article_bodies.py
 *   python3 docs/scripts/export_help_center_for_migration.py
 * then run `npm run sync:oasis-help-migrate`.
 */

import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'data', 'docs');
const INITIAL_DATE = '2026-05-13';
const AUTHORS = ['Adam Kershner'];
const MARKER_STUBS = 'help-center-stubs';
const MARKER_MIGRATE = 'help-center-migrate';

function parseArgs(argv) {
  const rest = argv.slice(2).filter((a) => a !== '--migrate');
  const migrate = argv.slice(2).includes('--migrate');
  const rootArg = rest[0]?.trim();
  return { migrate, rootArg: rootArg || null };
}

function resolveFirefoxRoot(rootArg, migrateMode) {
  const fromEnv = process.env.OASIS_FIREFOX_ROOT?.trim();
  if (fromEnv) return path.resolve(fromEnv);
  if (rootArg) return path.resolve(rootArg);
  const candidates = [
    path.resolve(REPO_ROOT, '../firefox-oasis-6/firefox-oasis'),
    path.resolve(REPO_ROOT, '../../firefox-oasis-6/firefox-oasis'),
    path.resolve(REPO_ROOT, '../firefox-oasis'),
  ];
  const manifestRel = migrateMode
    ? ['docs', 'help-center-migrate', 'manifest.json']
    : ['docs', 'help-center-stubs', 'manifest.json'];
  for (const c of candidates) {
    if (existsSync(path.join(c, ...manifestRel))) return c;
  }
  return candidates[0];
}

/** Map manifest section folder to docs index category */
function mapCategory(manifestCategory) {
  if (manifestCategory === 'privacy-and-data-oasis-specific-defaults') return 'privacy';
  return 'guides';
}

/**
 * Parse YAML frontmatter (string fields, quoted values). Returns body after closing ---.
 */
function parseFrontmatter(source) {
  if (!source.startsWith('---\n')) {
    return { body: source, fields: {} };
  }
  const end = source.indexOf('\n---\n', 4);
  if (end === -1) {
    return { body: source, fields: {} };
  }
  const fmRaw = source.slice(4, end);
  const body = source.slice(end + 5);
  const fields = {};
  for (const line of fmRaw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || !trimmed.includes(':')) continue;
    const idx = trimmed.indexOf(':');
    const key = trimmed.slice(0, idx).trim();
    let val = trimmed.slice(idx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val
        .slice(1, -1)
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, '\\');
    } else if (val === 'null') {
      val = '';
    }
    fields[key] = val;
  }
  return { body: body.trimStart(), fields };
}

const STUB_BANNER = `<aside class="my-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r"><strong class="text-amber-900">Stub article</strong><p class="text-amber-800 text-sm m-0 mt-1">Imported from Oasis help-center stubs. Screenshots and step-by-step detail will be added in a later pass.</p></aside>`;

function buildHtml(markdownBody, { showStubBanner }) {
  const inner = marked.parse(markdownBody, { async: false, gfm: true });
  const prefix = showStubBanner ? STUB_BANNER : '';
  return `<div class='doc-content'><article class='prose prose-slate max-w-none'>${prefix}${inner}</article></div>`;
}

function docDateFromFields(fields) {
  const lr = fields.last_reviewed?.trim();
  if (lr && /^\d{4}-\d{2}-\d{2}$/.test(lr)) return lr;
  return INITIAL_DATE;
}

async function shouldSkipExisting(outPath, migrateMode) {
  try {
    const raw = await fs.readFile(outPath, 'utf8');
    const doc = JSON.parse(raw);
    const gf = doc.generatedFrom;
    if (migrateMode) {
      if (gf === MARKER_STUBS || gf === MARKER_MIGRATE) return false;
      return true;
    }
    if (gf === MARKER_STUBS) return false;
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const { migrate: migrateMode, rootArg } = parseArgs(process.argv);
  const firefoxRoot = resolveFirefoxRoot(rootArg, migrateMode);

  const manifestPath = migrateMode
    ? path.join(firefoxRoot, 'docs', 'help-center-migrate', 'manifest.json')
    : path.join(firefoxRoot, 'docs', 'help-center-stubs', 'manifest.json');

  const generatedMarker = migrateMode ? MARKER_MIGRATE : MARKER_STUBS;

  let manifestRaw;
  try {
    manifestRaw = await fs.readFile(manifestPath, 'utf8');
  } catch (e) {
    console.error(`Cannot read manifest at ${manifestPath}`);
    console.error('Set OASIS_FIREFOX_ROOT or pass repo root as argument (after --migrate if used).');
    console.error(e.message);
    process.exit(1);
  }

  const entries = JSON.parse(manifestRaw);
  if (!Array.isArray(entries)) {
    console.error('manifest.json must be an array');
    process.exit(1);
  }

  let written = 0;
  let skippedCollision = 0;
  let skippedMissing = 0;

  for (const entry of entries) {
    const { path: relPath, title, slug, category, summary } = entry;
    if (!slug || !relPath) {
      console.warn('Skipping entry without slug/path', entry);
      continue;
    }

    const mdPath = migrateMode
      ? path.join(firefoxRoot, 'docs', 'help-center-migrate', relPath)
      : path.join(firefoxRoot, relPath);

    let mdSource;
    try {
      mdSource = await fs.readFile(mdPath, 'utf8');
    } catch {
      console.warn(`Missing markdown, skip: ${relPath}`);
      skippedMissing += 1;
      continue;
    }

    const { body, fields } = parseFrontmatter(mdSource);
    const published = fields.status === 'published';
    const content = buildHtml(body, { showStubBanner: !published });
    const date = docDateFromFields(fields);
    const outPath = path.join(DOCS_DIR, `${slug}.json`);

    if (await shouldSkipExisting(outPath, migrateMode)) {
      console.warn(`Skip collision (existing doc not from ${migrateMode ? 'stubs/migrate' : 'stubs'}): ${slug}.json`);
      skippedCollision += 1;
      continue;
    }

    const doc = {
      title,
      description: summary || title,
      slug,
      category: mapCategory(category),
      date,
      authors: AUTHORS,
      content,
      generatedFrom: generatedMarker,
    };

    await fs.writeFile(outPath, `${JSON.stringify(doc, null, 2)}\n`, 'utf8');
    written += 1;
  }

  console.log(`Wrote ${written} doc(s) to data/docs/ (${migrateMode ? MARKER_MIGRATE : MARKER_STUBS})`);
  if (skippedCollision) console.log(`Skipped ${skippedCollision} existing non-import file(s).`);
  if (skippedMissing) console.log(`Skipped ${skippedMissing} missing markdown file(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
