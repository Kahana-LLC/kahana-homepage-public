'use client';

import { useMemo, useState } from 'react';

const LINKS = [
  {
    id: 'pinterest',
    name: 'Pinterest Success Session',
    price: '$97',
    rate: '20%',
    weeks: [40, 80, 120, 90, 160, 210, 180, 260],
    views: [18, 24, 31, 22, 40, 48, 36, 52],
  },
  {
    id: 'intern',
    name: 'Internship guide',
    price: '$24',
    rate: '15%',
    weeks: [12, 28, 20, 36, 44, 30, 52, 48],
    views: [40, 55, 48, 70, 66, 58, 80, 74],
  },
  {
    id: 'philosophy',
    name: 'Philosophy library',
    price: '$12',
    rate: '25%',
    weeks: [8, 8, 16, 24, 20, 32, 28, 40],
    views: [22, 18, 30, 36, 28, 42, 38, 50],
  },
];

const COLORS = {
  pinterest: '#8A6622',
  intern: '#3B2F1A',
  philosophy: '#C4A15A',
};

const PERIODS = [
  { id: 'day', label: 'Today' },
  { id: 'month', label: 'This month' },
  { id: 'all', label: 'All time' },
];

function sliceFor(period, series) {
  if (period === 'day') return series.slice(-1);
  if (period === 'month') return series.slice(-4);
  return series;
}

function sum(list) {
  return list.reduce((total, value) => total + value, 0);
}

function money(cents) {
  return `$${(cents / 100).toFixed(0)}`;
}

function pathFor(values, width, height) {
  if (!values.length) return '';
  const max = Math.max(...values, 1);
  const step = values.length === 1 ? 0 : width / (values.length - 1);
  return values
    .map((value, index) => {
      const x = index * step;
      const y = height - (value / max) * (height - 16) - 8;
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
}

export default function AffiliateEarningsMock() {
  const [picked, setPicked] = useState(null);
  const [period, setPeriod] = useState('all');
  const [metric, setMetric] = useState('earnings');

  const selected = picked == null ? LINKS : LINKS.filter((link) => picked.includes(link.id));

  const toggle = (id) => {
    setPicked((current) => {
      const base = current == null ? LINKS.map((link) => link.id) : current;
      const next = base.includes(id) ? base.filter((item) => item !== id) : [...base, id];
      if (next.length === LINKS.length) return null;
      if (next.length === 0) return null;
      return next;
    });
  };

  const series = useMemo(
    () =>
      selected.map((link) => ({
        ...link,
        points: sliceFor(period, metric === 'earnings' ? link.weeks : link.views),
      })),
    [selected, period, metric]
  );

  const total = series.reduce((acc, link) => acc + sum(link.points), 0);
  const width = 640;
  const height = 160;

  return (
    <aside
      className="overflow-hidden rounded-[20px] bg-white shadow-[0_1px_0_rgba(59,47,26,0.06)]"
      aria-label="Example earnings dashboard for hub affiliate links"
    >
      <div className="border-b border-[#E4D9C4] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
            My affiliate campaign results
          </p>
          <span className="rounded-full bg-[#EDE6D2] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5C4520]">
            Demo
          </span>
        </div>
        <p className="mt-1 text-sm text-[#666666]">
          All links, one link, or a mix. The line is what you keep from affiliate sales.
        </p>
      </div>

      <div className="space-y-4 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setPicked(null)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              picked == null ? 'bg-[#3B2F1A] text-[#F7F3EA]' : 'bg-[#F7F3EA] text-[#5C4520]'
            }`}
          >
            All links
          </button>
          {LINKS.map((link) => {
            const on = picked == null || picked.includes(link.id);
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => toggle(link.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  on && picked != null ? 'bg-[#3B2F1A] text-[#F7F3EA]' : 'bg-[#F7F3EA] text-[#5C4520]'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex rounded-full bg-[#F7F3EA] p-1 text-xs font-semibold">
            {PERIODS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPeriod(item.id)}
                className={`rounded-full px-3 py-1.5 ${
                  period === item.id ? 'bg-white text-[#3B2F1A] shadow-sm' : 'text-[#8A6622]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex rounded-full bg-[#F7F3EA] p-1 text-xs font-semibold">
            {[
              { id: 'earnings', label: 'Earnings' },
              { id: 'views', label: 'Views' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMetric(item.id)}
                className={`rounded-full px-3 py-1.5 ${
                  metric === item.id ? 'bg-white text-[#3B2F1A] shadow-sm' : 'text-[#8A6622]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#FFFDF8] px-4 py-4 ring-1 ring-[#E4D9C4]">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8A6622]">
              {metric === 'earnings' ? 'You keep' : 'Link views'}
            </p>
            <p className="font-bricolage text-2xl font-semibold text-[#3B2F1A]">
              {metric === 'earnings' ? money(total * 100) : `${total} views`}
            </p>
          </div>
          <svg viewBox={`0 0 ${width} ${height}`} className="mt-3 h-40 w-full" aria-hidden>
            <line x1="0" y1="40" x2={width} y2="40" stroke="#E4D9C4" />
            <line x1="0" y1="80" x2={width} y2="80" stroke="#E4D9C4" />
            <line x1="0" y1="120" x2={width} y2="120" stroke="#E4D9C4" />
            {series.map((link) => (
              <path
                key={link.id}
                d={pathFor(link.points, width, height)}
                fill="none"
                stroke={COLORS[link.id]}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>
          <ul className="mt-2 flex flex-wrap gap-3 text-xs text-[#5C4520]">
            {series.map((link) => (
              <li key={link.id} className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[link.id] }} />
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        <ul className="divide-y divide-[#E4D9C4] overflow-hidden rounded-2xl ring-1 ring-[#E4D9C4]">
          {series.map((link) => (
            <li key={link.id} className="flex items-center justify-between gap-3 bg-[#FFFDF8] px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-[#3B2F1A]">{link.name}</p>
                <p className="text-xs text-[#666666]">
                  {link.price} · {link.rate} affiliate
                </p>
              </div>
              <p className="text-sm font-semibold text-[#3B2F1A]">
                {metric === 'earnings' ? money(sum(link.points) * 100) : `${sum(link.points)} views`}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-center text-[10px] text-[#8A9378]">
          Illustrative demo. Not live campaign data.
        </p>
      </div>
    </aside>
  );
}
