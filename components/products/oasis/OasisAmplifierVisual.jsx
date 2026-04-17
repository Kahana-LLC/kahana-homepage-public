import React from 'react';
import { IconThumbDown, IconThumbUp } from '@tabler/icons-react';

const FEEDBACK_TAGS = ["Didn't work", 'Wrong result', 'Too slow', 'Safety concern', 'Confusing', 'Suggestion', 'Other'];

/** Illustrative scores 0–100 for Speed, Accuracy, Quality at Day 1 / 30 / 60 / 90 */
const SERIES = [
  { key: 'speed', label: 'Speed', color: '#7a9200', points: [28, 52, 74, 90] },
  { key: 'accuracy', label: 'Accuracy', color: '#66C2BE', points: [22, 48, 76, 92] },
  { key: 'quality', label: 'Quality', color: '#4A5745', points: [24, 50, 78, 94] },
];

const X_LABELS = ['Day 1', 'Day 30', 'Day 60', 'Day 90'];

function FeedbackMocks() {
  return (
    <div className="space-y-3">
      <div
        className="rounded-2xl border border-[#4A5745]/12 bg-white p-4 shadow-sm"
        role="img"
        aria-label="Illustration: structured feedback dialog titled Help us improve Oasis with category chips"
      >
        <div className="flex items-start justify-between gap-2 mb-3">
          <p className="text-sm font-semibold text-[#2f3a20]">Help us improve Oasis</p>
          <span className="text-[#4A5745]/45 text-lg leading-none" aria-hidden>
            ×
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {FEEDBACK_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#4A5745]/12 bg-[#f8faf9] px-3 py-1.5 text-xs font-medium text-[#4A5745]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-[#4A5745]/10 bg-[#fafbf8] px-3 py-2 text-xs text-[#4A5745]/55">
          Add details (optional)…
        </div>
      </div>

      <div
        className="flex items-center justify-between gap-3 rounded-2xl border border-[#4A5745]/10 bg-[#f8faf9] px-4 py-3 shadow-sm"
        role="img"
        aria-label="Illustration: thumbs up and thumbs down after an assistant reply"
      >
        <p className="text-sm text-[#4A5745]/80">Did we get it right?</p>
        <div className="flex items-center gap-3 text-[#4A5745]" aria-hidden>
          <span className="rounded-lg border border-[#4A5745]/15 bg-white p-2">
            <IconThumbUp size={18} stroke={1.5} aria-hidden />
          </span>
          <span className="rounded-lg border border-[#4A5745]/15 bg-white p-2">
            <IconThumbDown size={18} stroke={1.5} aria-hidden />
          </span>
        </div>
      </div>
    </div>
  );
}

function GrowthChartSvg() {
  const w = 420;
  const h = 220;
  const padL = 44;
  const padR = 16;
  const padT = 16;
  const padB = 36;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const xAt = (i) => padL + (i / 3) * plotW;
  const yAt = (v) => padT + plotH - (v / 100) * plotH;

  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full max-h-[260px] text-[#4A5745]"
        role="img"
        aria-labelledby="amplifier-chart-title amplifier-chart-desc"
      >
        <title id="amplifier-chart-title">Illustrative improvement of speed, accuracy, and quality over time</title>
        <desc id="amplifier-chart-desc">
          Concept chart showing three lines rising from day 1 through day 90. Values are illustrative, not measured
          guarantees.
        </desc>
        {[0, 25, 50, 75, 100].map((tick) => (
          <g key={tick}>
            <line
              x1={padL}
              y1={yAt(tick)}
              x2={w - padR}
              y2={yAt(tick)}
              stroke="#4A5745"
              strokeOpacity={tick === 0 || tick === 100 ? 0.12 : 0.06}
              strokeWidth={1}
            />
            <text x={padL - 8} y={yAt(tick) + 4} textAnchor="end" fontSize="10" fill="currentColor" opacity={0.55}>
              {tick}
            </text>
          </g>
        ))}
        {X_LABELS.map((label, i) => (
          <text
            key={label}
            x={xAt(i)}
            y={h - 10}
            textAnchor="middle"
            fontSize="11"
            fontWeight={600}
            fill="currentColor"
            opacity={0.75}
          >
            {label}
          </text>
        ))}
        <text x={padL} y={12} fontSize="11" fill="currentColor" opacity={0.65}>
          Relative score (illustrative)
        </text>
        {SERIES.map(({ key, color, points }) => {
          const d = points
            .map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i).toFixed(1)} ${yAt(v).toFixed(1)}`)
            .join(' ');
          return (
            <g key={key}>
              <path d={d} fill="none" stroke={color} strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
              {points.map((v, i) => (
                <circle key={`${key}-${i}`} cx={xAt(i)} cy={yAt(v)} r={4} fill={color} stroke="#fff" strokeWidth={1.5} />
              ))}
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#4A5745]/85">
        {SERIES.map((s) => (
          <span key={s.key} className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: s.color }} aria-hidden />
            {s.label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}

/** Screen-reader summary of chart data */
function ChartDataTable() {
  return (
    <table className="sr-only">
      <caption>Illustrative scores by day</caption>
      <thead>
        <tr>
          <th scope="col">Day</th>
          {SERIES.map((s) => (
            <th key={s.key} scope="col">
              {s.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {X_LABELS.map((day, i) => (
          <tr key={day}>
            <th scope="row">{day}</th>
            {SERIES.map((s) => (
              <td key={s.key}>{s.points[i]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Narrative paragraph for the Amplifier section (left column beside `OasisAmplifierVisuals`). */
export function OasisAmplifierStory() {
  return (
    <div className="max-w-md text-[#4A5745]/95">
      <div className="leading-relaxed text-base">
        <p>
          Most assistants miss the mark on real work: too slow, too wrong, or built for demos.{' '}
          <span className="font-semibold text-[#4A5745]">Amplifier</span> is our planned layer that learns from{' '}
          <span className="font-semibold text-[#4A5745]">your</span> tags, notes, and thumbs: session signal, not hype,
          so speed, accuracy, and quality can move the way you care about. Consistent feedback over{' '}
          <span className="font-semibold text-[#7a9200]">30, 60, and 90 days</span> can compound; the chart is{' '}
          <span className="font-semibold">illustrative only</span>, not a live metric or guarantee for your curves.
        </p>
      </div>
    </div>
  );
}

/** Feedback mocks + illustrative trajectory chart (right column; top-align with section heading on large screens). */
export function OasisAmplifierVisuals() {
  return (
    <div className="space-y-4 lg:min-w-0">
      <div className="lg:min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">Your signal</p>
        <FeedbackMocks />
      </div>
      <div className="rounded-2xl border border-[#4A5745]/10 bg-white p-4 sm:p-5 shadow-sm lg:min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-1">Illustrative trajectory</p>
        <h3 className="text-lg font-bold text-[#4A5745] mb-1">Training correlates with better outcomes</h3>
        <p className="text-sm text-[#4A5745]/80 mb-2">
          Concept only: tags, thumbs, and notes feed a loop we plan to turn into steadier answers over time. Three
          dimensions rising here as feedback piles up. Not a guarantee, live dashboard, or your actual trajectory.
        </p>
        <ChartDataTable />
        <GrowthChartSvg />
      </div>
    </div>
  );
}
