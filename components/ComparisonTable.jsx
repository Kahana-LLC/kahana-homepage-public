import React from 'react';
import BlogDataComparisonTable, { hasValidBlogTableProps } from './BlogDataComparisonTable';
import ThermalMaterialsComparisonTable from './ThermalMaterialsComparisonTable';

/**
 * Blog-embedded comparison UI router.
 *
 * - If `headers` + `rows` are valid → {@link BlogDataComparisonTable} (any topic).
 * - Else → {@link ThermalMaterialsComparisonTable} (AR thermal materials post; props usually `{}`).
 *
 * In blog JSON (`content` array): `{ "type": "component", "name": "ComparisonTable", "props": { ... } }`
 * Legacy name `MaterialComparisonTable` is still accepted in pages/blog/[slug].jsx.
 */
export default function ComparisonTable(props) {
  if (hasValidBlogTableProps(props)) {
    return (
      <BlogDataComparisonTable headers={props.headers} rows={props.rows} title={props.title} />
    );
  }
  return <ThermalMaterialsComparisonTable />;
}

export { hasValidBlogTableProps };
