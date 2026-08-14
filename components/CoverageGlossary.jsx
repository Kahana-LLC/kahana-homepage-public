import React from 'react';
import { COVERAGE_GLOSSARY } from '../data/coverageGlossary';

/**
 * Collapsed-by-default glossary of coverage-chart rows.
 * Shared across Kahana vs X blogs (and any other page that imports it).
 */
export default function CoverageGlossary({ className = '' }) {
  return (
    <details className={`text-sm text-oasis-green-800 ${className}`.trim()}>
      <summary className="cursor-pointer font-medium text-oasis-green-900">
        What the rows mean
      </summary>
      <p className="mt-3 mb-4 leading-relaxed">
        Yes means the platform has this as a first-class product job, what you open the app to do,
        not something you could theoretically find if you hunt.
      </p>
      <dl className="grid gap-4 sm:grid-cols-2">
        {COVERAGE_GLOSSARY.map((item) => (
          <div key={item.fragmentId}>
            <dt className="font-semibold text-oasis-green-900">{item.label}</dt>
            <dd className="mt-0.5 m-0 leading-relaxed">
              {item.definition}
              {item.yesExample ? (
                <>
                  {' '}
                  <span className="text-oasis-green-700">Yes: {item.yesExample}.</span>
                </>
              ) : null}
              {item.noExample ? (
                <>
                  {' '}
                  <span className="text-gray-600">No: {item.noExample}.</span>
                </>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </details>
  );
}
