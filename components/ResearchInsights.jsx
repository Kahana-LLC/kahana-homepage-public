import React from 'react';

function sourceHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'source';
  }
}

function InsightColumn({ heading, items, emptyLabel }) {
  return (
    <div className="rounded-lg border border-oasis-green-100 bg-white px-4 py-4">
      <h3 className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-oasis-green-900">
        {heading}
      </h3>
      {items.length ? (
        <ul className="m-0 list-none space-y-3 p-0">
          {items.map((item, index) => (
            <li key={`${item.title || 'item'}-${index}`} className="text-sm leading-relaxed text-oasis-green-800">
              {item.title ? <strong className="font-semibold text-oasis-green-900">{item.title}. </strong> : null}
              {item.detail}
            </li>
          ))}
        </ul>
      ) : (
        <p className="m-0 text-sm text-gray-500">{emptyLabel}</p>
      )}
    </div>
  );
}

/**
 * Perplexity-sourced scale facts plus a two-column Strengths / Weaknesses layout
 * for Kahana vs X comparison posts.
 */
export default function ResearchInsights({ insights }) {
  if (!insights) return null;

  const scaleFacts = Array.isArray(insights.scaleFacts) ? insights.scaleFacts.filter(Boolean) : [];
  const strengths = Array.isArray(insights.strengths) ? insights.strengths : [];
  const weaknesses = Array.isArray(insights.weaknesses) ? insights.weaknesses : [];
  const sources = Array.isArray(insights.sources) ? insights.sources.filter(Boolean) : [];
  const companyName = insights.companyName || 'this platform';
  const hasTable = strengths.length > 0 || weaknesses.length > 0;

  if (!scaleFacts.length && !hasTable) return null;

  return (
    <section
      className="not-prose my-10 overflow-hidden rounded-xl border border-oasis-green-100 bg-white shadow-sm"
      aria-label={`Research notes on ${companyName}`}
    >
      <div className="border-b border-oasis-green-100 bg-[#F3F8E4]/50 px-5 py-4">
        <h2 className="m-0 text-lg font-semibold text-oasis-green-900">
          Research notes on {companyName}
        </h2>
      </div>

      <div className="px-5 py-4">
        <p className="m-0 mb-5 text-sm leading-relaxed text-oasis-green-800">
          The notes below are directional public signals we aggregated through{' '}
          <strong>Perplexity searches</strong> of company sites, press, and secondary write-ups.
          Treat them as context, not an audit. Products and numbers change.
        </p>

        {scaleFacts.length ? (
          <div className="mb-6">
            <h3 className="m-0 mb-2 text-sm font-semibold uppercase tracking-wide text-oasis-green-900">
              Scale, in public numbers
            </h3>
            <ul className="m-0 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-oasis-green-800">
              {scaleFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasTable ? (
          <div className="grid gap-4 md:grid-cols-2">
            <InsightColumn
              heading="Strengths"
              items={strengths}
              emptyLabel="None noted in this research pass."
            />
            <InsightColumn
              heading="Weaknesses"
              items={weaknesses}
              emptyLabel="None noted in this research pass."
            />
          </div>
        ) : null}

        {sources.length ? (
          <p className="mb-0 mt-5 text-sm leading-relaxed text-oasis-green-800">
            <em>Sources used for {companyName} facts:</em>{' '}
            {sources.map((url, index) => (
              <React.Fragment key={url}>
                {index > 0 ? ' · ' : null}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#617500] underline hover:text-oasis-green-800"
                >
                  {sourceHost(url)}
                </a>
              </React.Fragment>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
