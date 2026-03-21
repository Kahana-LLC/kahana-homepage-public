/**
 * Removes SEO keyword stuffing from blog JSON files.
 * Removes: SEO Keywords paragraphs, Technical Limits, Implementation Challenge,
 * SEO Keyword Cluster sections, inline "Keywords:" text, and similar patterns.
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../data/blog');

function isKeywordStuffingParagraph(obj) {
  if (obj.type !== 'paragraph' || !obj.text) return false;
  const t = obj.text.trim();
  return (
    t.startsWith('<strong>SEO Keywords:</strong>') ||
    t.startsWith('<strong>Technical Limits:</strong>') ||
    t.startsWith('<strong>Implementation Challenge:</strong>')
  );
}

function isKeywordClusterHeading(obj) {
  if (obj.type !== 'heading' || !obj.text) return false;
  const t = obj.text.trim();
  return (
    t === 'SEO Keyword Cluster' ||
    t === 'SEO Keyword Cluster for This Topic' ||
    t === 'Part 2: SEO keyword cluster' ||
    t.toLowerCase().includes('seo keyword cluster')
  );
}

function processArrayContent(content) {
  const result = [];
  let skipNextList = false;

  for (let i = 0; i < content.length; i++) {
    const item = content[i];

    if (skipNextList) {
      if (item.type === 'list') {
        skipNextList = false;
        continue;
      }
      skipNextList = false;
    }

    if (isKeywordStuffingParagraph(item)) continue;
    if (isKeywordClusterHeading(item)) {
      skipNextList = true;
      continue;
    }
    if (item.type === 'list' && skipNextList) continue;

    if (item.type === 'list' && Array.isArray(item.items)) {
      const filteredItems = item.items.filter(
        (listItem) =>
          typeof listItem !== 'string' || !listItem.trim().startsWith('Keywords:')
      );
      if (filteredItems.length === 0) continue;
      if (filteredItems.length < item.items.length) {
        result.push({ ...item, items: filteredItems });
        continue;
      }
    }

    // Strip inline "Keywords: ..." from paragraph text
    if (item.type === 'paragraph' && typeof item.text === 'string') {
      const cleanedText = item.text.replace(/\s+Keywords:\s*[^<]+/g, '').trim();
      if (cleanedText !== item.text) {
        result.push({ ...item, text: cleanedText });
        continue;
      }
    }

    result.push(item);
  }

  return result;
}

function processHtmlContent(html) {
  let result = html;

  const patterns = [
    {
      regex: /<h2[^>]*>\s*<strong>Essential SEO Keywords<\/strong>\s*<\/h2>\s*[\s\S]*?<p>[^<]*<\/p>/gi,
      replacement: '',
    },
    {
      regex: /<h2[^>]*>\s*<strong>High-Value SEO Keywords for Your Strategy<\/strong>\s*<\/h2>\s*[\s\S]*?<p>[^<]*<\/p>/gi,
      replacement: '',
    },
    {
      regex: /<h2[^>]*>\s*<strong>High-Value SEO Keywords<\/strong>\s*<\/h2>\s*[\s\S]*?<p>[^<]*<\/p>/gi,
      replacement: '',
    },
    {
      regex: /<h2[^>]*>\s*<strong>Additional High-Value SEO Keywords<\/strong>\s*<\/h2>\s*[\s\S]*?<p>[^<]*<\/p>/gi,
      replacement: '',
    },
    {
      regex: /<li><strong>SEO Keywords:<\/strong>[\s\S]*?<\/li>\s*/gi,
      replacement: '',
    },
    {
      regex: /<h2>SEO Keyword Cluster<\/h2>\s*<ul>[\s\S]*?<\/ul>/gi,
      replacement: '',
    },
    // Remove inline "Keywords: x, y, z" at end of paragraphs/list items
    {
      regex: /\s+Keywords:\s*[^<]+/g,
      replacement: '',
    },
  ];

  for (const { regex, replacement } of patterns) {
    result = result.replace(regex, replacement);
  }

  return result.replace(/\n{3,}/g, '\n\n').trim();
}

function processFile(filepath) {
  const raw = fs.readFileSync(filepath, 'utf8');
  const data = JSON.parse(raw);

  if (Array.isArray(data.content)) {
    data.content = processArrayContent(data.content);
  } else if (typeof data.content === 'string') {
    data.content = processHtmlContent(data.content);
  }

  fs.writeFileSync(filepath, JSON.stringify(data, null, 2) + '\n');
}

// Process all blog JSON files
const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.json'));
let processed = 0;
files.forEach((file) => {
  const filepath = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(filepath, 'utf8');
  const data = JSON.parse(raw);
  const before = typeof data.content === 'string' ? data.content : JSON.stringify(data.content);
  if (Array.isArray(data.content)) {
    data.content = processArrayContent(data.content);
  } else if (typeof data.content === 'string') {
    data.content = processHtmlContent(data.content);
  }
  const after = typeof data.content === 'string' ? data.content : JSON.stringify(data.content);
  if (before !== after) {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2) + '\n');
    console.log('Processed:', file);
    processed++;
  }
});

console.log(`Done. Modified ${processed} files.`);
