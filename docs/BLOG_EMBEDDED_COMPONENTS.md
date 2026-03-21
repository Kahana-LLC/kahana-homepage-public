# Blog embedded components

Array-format posts (`data/blog/*.json` with `"content": [ ... ]`) can embed React components.

## `ComparisonTable`

**Name in JSON:** `"ComparisonTable"` (legacy: `"MaterialComparisonTable"` is still accepted in `pages/blog/[slug].jsx`).

**Router:** `components/ComparisonTable.jsx` chooses the UI based on props.

### Data-driven table (most posts)

Use when you want a simple HTML table from the JSON.

```json
{
  "type": "component",
  "name": "ComparisonTable",
  "props": {
    "headers": ["Column A", "Column B", "Column C"],
    "rows": [
      ["row1 a", "row1 b", "row1 c"],
      ["row2 a", "row2 b", "row2 c"]
    ],
    "title": "Optional caption above the table"
  }
}
```

Rules:

- `headers` — non-empty array of strings.
- `rows` — non-empty array of rows; each row is an array with **the same length** as `headers`.
- `title` — optional string.

Implementation: `components/BlogDataComparisonTable.jsx`.

### Thermal materials explorer (AR glasses post)

Use empty props to show the interactive thermal-material comparison (filters, CSV export, data from `data/materialComparisonData.js`).

```json
{
  "type": "component",
  "name": "ComparisonTable",
  "props": {}
}
```

Implementation: `components/ThermalMaterialsComparisonTable.jsx`.

## `BlogBrowserComparison`

Used in HTML-string posts via `<component name="BlogBrowserComparison" />`. See existing posts for examples.

---

## HTML-string posts: avoid “whole paragraph” links

In `content` HTML, keep `<a href="...">` **short** (source name or a brief phrase). If the entire summary sentence is inside one anchor, the UI looks like a giant clickable block and reads as low-quality / AI-ish.

**Analyze / fix (repo root):**

- `npm run analyze-blog-long-anchors:dry-run` — count matches (default: visible text ≥ 100 chars **or** ≥ 22 words).
- `npm run analyze-blog-long-anchors` — same with `--verbose` per hit.
- `npm run fix-blog-long-anchors` — rewrite **safe** cases only: plain-text link bodies become `Plain text (<a>ShortLabel</a>)`. Skips anchors that contain nested links, images, or inline tags like `<strong>` (those need a manual edit).

Flags: `--min-chars=80` `--min-words=15` to tighten or loosen the threshold.

Script: `scripts/analyze-blog-long-anchor-text.js`.
