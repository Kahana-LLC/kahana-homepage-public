#!/usr/bin/env node
/**
 * Find (and optionally fix) HTML <a> tags whose *visible* link text is very long.
 * Long links read like "the whole paragraph is clickable" and hurt UX + trust.
 *
 * Usage:
 *   node scripts/analyze-blog-long-anchor-text.js
 *   node scripts/analyze-blog-long-anchor-text.js --verbose
 *   node scripts/analyze-blog-long-anchor-text.js --min-chars 90 --min-words 18
 *   node scripts/analyze-blog-long-anchor-text.js --write
 *
 * --write: rewrites each long anchor to: PLAIN_TEXT (<a href="...">ShortLabel</a>)
 * Skips: nested <a>, mailto/javascript/#, inner <strong>/<em>/etc., <img inside anchor.
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../data/blog');

const DEFAULT_MIN_CHARS = 100;
const DEFAULT_MIN_WORDS = 22;

/** Hostname (lowercase) -> display label */
const HOST_LABELS = {
  'arxiv.org': 'arXiv',
  'techrepublic.com': 'TechRepublic',
  'theverge.com': 'The Verge',
  'nytimes.com': 'The New York Times',
  'washingtonpost.com': 'The Washington Post',
  'bbc.co.uk': 'BBC',
  'bbc.com': 'BBC',
  'reuters.com': 'Reuters',
  'bloomberg.com': 'Bloomberg',
  'forbes.com': 'Forbes',
  'wired.com': 'Wired',
  'theguardian.com': 'The Guardian',
  'cybernews.com': 'CyberNews',
  'techradar.com': 'TechRadar',
  'pcworld.com': 'PCWorld',
  'zdnet.com': 'ZDNet',
  'cnet.com': 'CNET',
  'engadget.com': 'Engadget',
  'techcrunch.com': 'TechCrunch',
  'searchenginejournal.com': 'Search Engine Journal',
  'gartner.com': 'Gartner',
  'microsoft.com': 'Microsoft',
  'learn.microsoft.com': 'Microsoft',
  'support.google.com': 'Google',
  'blog.google': 'Google',
  'chromium.org': 'Chromium',
  'eff.org': 'EFF',
  'coveryourtracks.eff.org': 'EFF',
  'nature.com': 'Nature',
  'science.org': 'Science',
  'ibm.com': 'IBM',
  'cloudflare.com': 'Cloudflare',
  'zscaler.com': 'Zscaler',
  'netskope.com': 'Netskope',
  'okta.com': 'Okta',
  'crowdstrike.com': 'CrowdStrike',
  'splunk.com': 'Splunk',
  'grandviewresearch.com': 'Grand View Research',
  'mckinsey.com': 'McKinsey',
  'deloitte.com': 'Deloitte',
  'pwc.com': 'PwC',
  'kpmg.com': 'KPMG',
  'backlinko.com': 'Backlinko',
  'statista.com': 'Statista',
  'pewresearch.org': 'Pew Research',
  '9to5google.com': '9to5Google',
  '9to5mac.com': '9to5Mac',
  'laptopmag.com': 'Laptop Mag',
  'socialsamosa.com': 'Social Samosa',
  'toolstack.net': 'Toolstack',
  'tuta.com': 'Tuta',
  'edopedia.com': 'Edopedia',
  'aibrowserrank.com': 'AI Browser Rank',
  'thurrott.com': 'Thurrott',
};

function decodeBasicEntities(s) {
  return s
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripTags(html) {
  return decodeBasicEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function wordCount(s) {
  const w = s.trim().split(/\s+/).filter(Boolean);
  return w.length;
}

function shortLabelForHref(href) {
  const h = href.trim();
  if (!h || h.startsWith('javascript:') || h.startsWith('mailto:')) return 'source';
  if (h === '#' || h.startsWith('#')) return 'source';

  if (h.startsWith('/') || (!h.startsWith('http') && !h.includes('://'))) {
    if (/\/(blog|products)\b/i.test(h) || /kahana/i.test(h)) return 'Kahana';
    return 'this article';
  }

  try {
    const u = new URL(h);
    const host = u.hostname.replace(/^www\./i, '').toLowerCase();
    if (host === 'arxiv.org' || host.endsWith('.arxiv.org')) return 'arXiv';
    if (host.endsWith('wikipedia.org')) return 'Wikipedia';
    if (HOST_LABELS[host]) return HOST_LABELS[host];
    const parts = host.split('.').filter(Boolean);
    const leaf = parts.length >= 2 ? parts[parts.length - 2] : parts[0];
    if (!leaf) return 'source';
    return leaf
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  } catch {
    return 'source';
  }
}

/** Match <a ...>...</a>; not 100% HTML5-safe but matches our blog JSON. */
const ANCHOR_RE = /<a\s([^>]*)>([\s\S]*?)<\/a>/gi;

function extractHref(openAttrs) {
  const m = /\bhref\s*=\s*["']([^"']*)["']/i.exec(openAttrs);
  return m ? m[1].trim() : null;
}

function extractAttr(openAttrs, name) {
  const re = new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i');
  const m = re.exec(openAttrs);
  return m ? m[1] : null;
}

function isLongAnchor(plain, minChars, minWords) {
  return plain.length >= minChars || wordCount(plain) >= minWords;
}

function shouldSkipInnerForFix(inner) {
  if (/<a\s/i.test(inner)) return 'nested <a>';
  if (/<img\b/i.test(inner)) return '<img> in anchor';
  const withoutBr = inner.replace(/<br\s*\/?>/gi, '');
  if (/<\s*(strong|em|b|i|u|span|mark|code|pre|ul|ol|li|table|div|p)\b/i.test(withoutBr)) {
    return 'inner HTML markup (not plain text)';
  }
  return null;
}

function rewriteLongAnchors(html, minChars, minWords) {
  let replacements = 0;
  const out = html.replace(ANCHOR_RE, (full, openAttrs, inner) => {
    const href = extractHref(openAttrs);
    if (!href) return full;
    if (/^javascript:/i.test(href) || /^mailto:/i.test(href)) return full;
    if (href === '#' || href.startsWith('#')) return full;

    const plain = stripTags(inner);
    if (!plain || !isLongAnchor(plain, minChars, minWords)) return full;

    const skip = shouldSkipInnerForFix(inner);
    if (skip) return full;

    const target = extractAttr(openAttrs, 'target') || '_blank';
    const rel = extractAttr(openAttrs, 'rel') || 'noopener noreferrer';
    const label = shortLabelForHref(href);
    replacements += 1;
    const safeHref = href.replace(/"/g, '&quot;');
    const safeTarget = target.replace(/"/g, '&quot;');
    const safeRel = rel.replace(/"/g, '&quot;');
    return `${plain} (<a href="${safeHref}" target="${safeTarget}" rel="${safeRel}">${label}</a>)`;
  });
  return { html: out, replacements };
}

function analyzeHtml(html, minChars, minWords, file, findings) {
  let m;
  const re = new RegExp(ANCHOR_RE.source, 'gi');
  while ((m = re.exec(html)) !== null) {
    const openAttrs = m[1];
    const inner = m[2];
    const href = extractHref(openAttrs);
    if (!href) continue;
    const plain = stripTags(inner);
    if (!isLongAnchor(plain, minChars, minWords)) continue;

    const skip = shouldSkipInnerForFix(inner);
    findings.push({
      file,
      href: href.length > 80 ? `${href.slice(0, 77)}…` : href,
      chars: plain.length,
      words: wordCount(plain),
      fixable: !skip,
      skipReason: skip || null,
      preview: plain.length > 120 ? `${plain.slice(0, 117)}…` : plain,
    });
  }
}

function processFile(filePath, minChars, minWords, write, findings) {
  const raw = fs.readFileSync(filePath, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error('JSON parse error:', path.basename(filePath), e.message);
    return { changed: false, fileReplacements: 0 };
  }

  let fileReplacements = 0;

  const visitor = (str) => {
    if (typeof str !== 'string' || !str.includes('<a ') || !str.includes('href=')) {
      return str;
    }
    if (!write) {
      analyzeHtml(str, minChars, minWords, path.basename(filePath), findings);
      return str;
    }
    const { html, replacements } = rewriteLongAnchors(str, minChars, minWords);
    fileReplacements += replacements;
    return html;
  };

  const walkAndReplace = (obj) => {
    if (typeof obj === 'string') {
      return visitor(obj);
    }
    if (Array.isArray(obj)) {
      return obj.map(walkAndReplace);
    }
    if (obj && typeof obj === 'object') {
      const out = {};
      for (const key of Object.keys(obj)) {
        out[key] = walkAndReplace(obj[key]);
      }
      return out;
    }
    return obj;
  };

  const next = walkAndReplace(data);
  if (write && fileReplacements > 0) {
    fs.writeFileSync(filePath, JSON.stringify(next, null, 2) + '\n');
  }
  return { changed: write && fileReplacements > 0, fileReplacements };
}

function parseArgs() {
  const argv = process.argv.slice(2);
  const write = argv.includes('--write');
  const verbose = argv.includes('--verbose');
  let minChars = DEFAULT_MIN_CHARS;
  let minWords = DEFAULT_MIN_WORDS;
  const mc = argv.find((a) => a.startsWith('--min-chars='));
  if (mc) minChars = Math.max(20, parseInt(mc.split('=')[1], 10) || DEFAULT_MIN_CHARS);
  const mw = argv.find((a) => a.startsWith('--min-words='));
  if (mw) minWords = Math.max(5, parseInt(mw.split('=')[1], 10) || DEFAULT_MIN_WORDS);
  return { write, verbose, minChars, minWords };
}

function main() {
  const { write, verbose, minChars, minWords } = parseArgs();
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.json'));
  const findings = [];
  let totalWritten = 0;
  let totalRepl = 0;

  for (const file of files) {
    const full = path.join(BLOG_DIR, file);
    const { changed, fileReplacements } = processFile(full, minChars, minWords, write, findings);
    if (changed) {
      totalWritten += 1;
      totalRepl += fileReplacements;
    }
  }

  if (write) {
    console.log(`Wrote ${totalWritten} file(s), ${totalRepl} anchor(s) shortened.\n`);
    const post = [];
    for (const file of files) {
      processFile(path.join(BLOG_DIR, file), minChars, minWords, false, post);
    }
    console.log(
      `Re-scan (same threshold): ${post.length} long anchor(s) remaining. Run without --write --verbose to list them.\n`
    );
    if (verbose && post.length) {
      findings.length = 0;
      findings.push(...post);
    }
  } else {
    console.log(
      `DRY RUN (no files modified). Threshold: >= ${minChars} chars OR >= ${minWords} words of visible link text.\n` +
        'Use --write to apply automated fixes (safe cases only).\n'
    );
  }

  const byFile = {};
  findings.forEach((f) => {
    if (!byFile[f.file]) byFile[f.file] = [];
    byFile[f.file].push(f);
  });
  const fileCount = Object.keys(byFile).length;
  if (!write || verbose) {
    console.log(`Long anchors found: ${findings.length} across ${fileCount} file(s).`);
    const fixable = findings.filter((f) => f.fixable).length;
    const manual = findings.length - fixable;
    console.log(`  Fixable automatically: ${fixable}`);
    console.log(`  Needs manual review (inner HTML / nested links): ${manual}\n`);
  }

  if (verbose && findings.length) {
    const sorted = Object.entries(byFile).sort((a, b) => b[1].length - a[1].length);
    for (const [fname, list] of sorted.slice(0, 40)) {
      console.log(`--- ${fname} (${list.length}) ---`);
      list.slice(0, 5).forEach((x) => {
        console.log(
          `  [${x.fixable ? 'auto' : 'manual'}] ${x.chars}c / ${x.words}w  ${x.skipReason || ''}\n    ${x.href}\n    ${x.preview}`
        );
      });
      if (list.length > 5) console.log(`  … +${list.length - 5} more in this file`);
      console.log('');
    }
    if (sorted.length > 40) console.log(`… +${sorted.length - 40} more files (omit --verbose top cap by reading report)`);
  }
}

main();
