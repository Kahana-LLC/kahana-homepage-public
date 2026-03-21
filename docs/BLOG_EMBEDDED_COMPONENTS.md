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
