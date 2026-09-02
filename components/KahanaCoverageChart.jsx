import React from 'react';
import CoverageGlossary from './CoverageGlossary';
import { getCoverageGlossaryEntry } from '../data/coverageGlossary';

function PresenceCell({ value }) {
  const supported = value === 'yes';
  return (
    <span
      className={`inline-flex min-w-[2.25rem] items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold ${
        supported
          ? 'bg-oasis-green-100 text-oasis-green-900'
          : 'bg-gray-100 text-gray-500'
      }`}
      title={supported ? 'Supported, first-class product job' : 'Not a first-class product job'}
    >
      {supported ? 'Yes' : '—'}
    </span>
  );
}

/**
 * Landscape coverage chart: Kahana vs one company across 11 library modalities.
 * Data is baked onto the post as `coverage: { companyName, columns }`.
 */
export default function KahanaCoverageChart({ coverage, companyName: companyNameProp }) {
  const columns = Array.isArray(coverage?.columns)
    ? coverage.columns
    : Array.isArray(coverage)
      ? coverage
      : [];
  if (!columns.length) return null;

  const companyName = companyNameProp || coverage?.companyName || 'This platform';

  return (
    <section
      className="not-prose my-10 overflow-hidden rounded-xl border border-oasis-green-100 bg-white shadow-sm"
      aria-label={`Coverage: Kahana vs ${companyName}`}
    >
      <div className="border-b border-oasis-green-100 bg-[#EDE6D2]/50 px-5 py-4">
        <h2 className="m-0 text-lg font-semibold text-oasis-green-900">
          Coverage: Kahana vs {companyName}
        </h2>
      </div>

      <p className="px-5 pt-4 pb-3 text-sm leading-relaxed text-oasis-green-800">
        Each row is a feature Kahana aims to unify in one Aura-powered library.
        Kahana supports all of them; {companyName} shows which of those it supports
        as a <strong>first-class, easy product job</strong>, not something you could
        theoretically find if you hunt.
      </p>

      <div className="px-2 pb-2">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-y border-oasis-green-100 bg-oasis-green-50/60">
              <th scope="col" className="px-4 py-3 font-semibold text-oasis-green-900">
                Feature
              </th>
              <th scope="col" className="w-24 px-3 py-3 text-center font-semibold text-oasis-green-800">
                Kahana
              </th>
              <th scope="col" className="w-36 px-3 py-3 text-center font-semibold text-oasis-green-800">
                {companyName}
              </th>
            </tr>
          </thead>
          <tbody>
            {columns.map((col) => {
              const glossary = getCoverageGlossaryEntry(col.fragmentId, col);
              return (
                <tr key={col.fragmentId} className="border-b border-oasis-green-50 last:border-b-0">
                  <th
                    scope="row"
                    title={glossary.definition || glossary.label}
                    className="px-4 py-2.5 font-medium text-oasis-green-900"
                  >
                    {col.label}
                  </th>
                  <td className="px-3 py-2.5 text-center">
                    <PresenceCell value={col.kahana} />
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    <PresenceCell value={col.company} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="border-t border-oasis-green-100 px-5 py-3">
        <CoverageGlossary />
      </div>
    </section>
  );
}
