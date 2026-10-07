'use client';

import { useMemo, useState } from 'react';
import { formatCount, formatMoney } from '../../data/libraryInNumbers';

function pathFor(values, width, height) {
  const max = Math.max(...values, 1);
  const step = values.length === 1 ? 0 : width / (values.length - 1);
  return values
    .map((value, index) => {
      const x = index * step;
      const y = height - (value / max) * (height - 28) - 14;
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
}

function pointsFor(values, width, height) {
  const max = Math.max(...values, 1);
  const step = values.length === 1 ? 0 : width / (values.length - 1);
  return values.map((value, index) => ({
    x: index * step,
    y: height - (value / max) * (height - 28) - 14,
  }));
}

export default function LibraryYearChart({ earnings, hubs, earningsTotal = null }) {
  const [metric, setMetric] = useState('earnings');
  const [year, setYear] = useState(null);
  const width = 640;
  const height = 180;
  const series = metric === 'earnings' ? earnings : hubs;
  const values = series.map((item) => (metric === 'earnings' ? item.earnings : item.hubs));
  const total = values.reduce((sum, value) => sum + value, 0);
  const line = useMemo(() => pathFor(values, width, height), [values]);
  const points = useMemo(() => pointsFor(values, width, height), [values]);
  const selected = series.find((item) => item.year === year);
  const format = metric === 'earnings' ? formatMoney : formatCount;
  const headline = format(
    selected
      ? values[series.indexOf(selected)]
      : metric === 'earnings' && earningsTotal != null
        ? earningsTotal
        : total,
  );
  const caption = selected
    ? metric === 'earnings'
      ? `${formatCount(selected.transactions)} purchases in ${selected.year}`
      : `Library hubs created in ${selected.year}`
    : metric === 'earnings'
      ? 'What creators kept, by year'
      : 'Library hubs by the year they were created';

  const chooseMetric = (next) => {
    setMetric(next);
    setYear(null);
  };

  return (
    <aside
      className="overflow-hidden rounded-[20px] bg-white shadow-[0_1px_0_rgba(59,47,26,0.06)]"
      aria-label="Creator earnings and Library hubs by year"
    >
      <div className="border-b border-[#E4D9C4] px-5 py-4 sm:px-6">
        <p className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
          Creator earnings
        </p>
        <p className="mt-1 text-sm text-[#666666]">
          Totals only. No creator or buyer is named.
        </p>
      </div>

      <div className="space-y-4 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => chooseMetric('earnings')}
            className={`library-year-chip${metric === 'earnings' ? ' library-year-chip--on' : ''}`}
            aria-pressed={metric === 'earnings'}
          >
            Creator earnings
          </button>
          <button
            type="button"
            onClick={() => chooseMetric('hubs')}
            className={`library-year-chip${metric === 'hubs' ? ' library-year-chip--on' : ''}`}
            aria-pressed={metric === 'hubs'}
          >
            Hubs created
          </button>
        </div>
        <div className="rounded-2xl bg-[#FFFDF8] px-4 py-4 ring-1 ring-[#E4D9C4]">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8A6622]">
              {caption}
            </p>
            <p className="font-bricolage text-2xl font-semibold text-[#3B2F1A]">{headline}</p>
          </div>
          <svg viewBox={`0 0 ${width} ${height}`} className="mt-3 h-40 w-full" aria-hidden>
            <line x1="0" y1="46" x2={width} y2="46" stroke="#E4D9C4" />
            <line x1="0" y1="92" x2={width} y2="92" stroke="#E4D9C4" />
            <line x1="0" y1="138" x2={width} y2="138" stroke="#E4D9C4" />
            <path d={line} fill="none" stroke="#8A6622" strokeWidth="3" strokeLinejoin="round" />
            {points.map((point, index) => {
              const item = series[index];
              const on = year == null || year === item.year;
              return (
                <circle
                  key={item.year}
                  cx={point.x}
                  cy={point.y}
                  r={year === item.year ? 7 : 5}
                  fill={on ? '#3B2F1A' : '#E4D9C4'}
                />
              );
            })}
          </svg>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Years">
            <button
              type="button"
              onClick={() => setYear(null)}
              className={`library-year-chip${year == null ? ' library-year-chip--on' : ''}`}
            >
              All years
            </button>
            {series.map((item) => (
              <button
                key={item.year}
                type="button"
                onClick={() => setYear(item.year)}
                aria-pressed={year === item.year}
                className={`library-year-chip${year === item.year ? ' library-year-chip--on' : ''}`}
              >
                {item.year}
                <span className="sr-only">
                  {metric === 'earnings'
                    ? `, ${formatMoney(item.earnings)} from ${formatCount(item.transactions)} purchases`
                    : `, ${formatCount(item.hubs)} hubs`}
                </span>
              </button>
            ))}
          </div>
        </div>
        <p className="text-sm text-[#666666]">
          {metric === 'earnings'
            ? 'Each point is what creators kept that year after Kahana’s 5% fee. Purchases under $3 are left out. A few purchases have no year, so this line sits a little under the total. Card processing is not subtracted.'
            : 'Listed hubs, including a few that are no longer active. 409 are in the public Library today.'}
        </p>
      </div>
    </aside>
  );
}
