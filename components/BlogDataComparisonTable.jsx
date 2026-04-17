import React from 'react';

/**
 * Renders a simple data table from blog JSON.
 *
 * Blog block shape:
 *   { "type": "component", "name": "ComparisonTable", "props": {
 *       "headers": ["Col A", "Col B"],
 *       "rows": [["a1", "b1"], ["a2", "b2"]],
 *       "title": "Optional caption above the table"
 *   }}
 *
 * Each row must have the same number of cells as headers.
 */
export default function BlogDataComparisonTable({ headers, rows, title }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      {title ? (
        <div className="border-b border-gray-100 bg-[#F3F8E4]/40 px-4 py-3">
          <p className="text-sm font-semibold text-oasis-green-900">{title}</p>
        </div>
      ) : null}
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50/90">
            {headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="px-4 py-3 font-semibold text-oasis-green-800 whitespace-normal"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-oasis-green-50/20">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-oasis-green-800 align-top whitespace-normal">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function hasValidBlogTableProps(props) {
  if (!props || typeof props !== 'object') return false;
  const { headers, rows } = props;
  if (!Array.isArray(headers) || headers.length === 0) return false;
  if (!Array.isArray(rows) || rows.length === 0) return false;
  return rows.every((r) => Array.isArray(r) && r.length === headers.length);
}
