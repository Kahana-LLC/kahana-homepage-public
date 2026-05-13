import React from 'react';
import Link from 'next/link';
import { IconThumbDown, IconThumbUp } from '@tabler/icons-react';

const FEEDBACK_TAGS = ["Didn't work", 'Wrong result', 'Too slow', 'Safety concern', 'Confusing', 'Suggestion', 'Other'];

/** Illustrative scores 0–100 for Speed, Accuracy, Quality at Day 1 / 30 / 60 / 90 */
const SERIES = [
  { key: 'speed', label: 'Speed', color: '#7a9200', points: [28, 52, 74, 90] },
  { key: 'accuracy', label: 'Accuracy', color: '#489CB5', points: [22, 48, 76, 92] },
  { key: 'quality', label: 'Quality', color: '#495800', points: [24, 50, 78, 94] },
];

const X_LABELS = ['Day 1', 'Day 30', 'Day 60', 'Day 90'];

function FeedbackMocks() {
  return (
    <div className="space-y-3">
      <div
        className="rounded-2xl border border-oasis-green-800/12 bg-white p-4 shadow-sm"
        role="img"
        aria-label="Illustration: simplified structured feedback dialog with category chips (conceptual; in-app Training uses flows such as Train on a good answer)"
      >
        <div className="flex items-start justify-between gap-2 mb-3">
          <p className="text-sm font-semibold text-[#2f3a20]">Help us improve Oasis</p>
          <span className="text-oasis-green-800/45 text-lg leading-none" aria-hidden>
            ×
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {FEEDBACK_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-oasis-green-800/12 bg-oasis-green-50 px-3 py-1.5 text-xs font-medium text-oasis-green-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-oasis-green-800/10 bg-[#fafbf8] px-3 py-2 text-xs text-oasis-green-800/55">
          Add details (optional)…
        </div>
      </div>

      <div
        className="flex items-center justify-between gap-3 rounded-2xl border border-oasis-green-800/10 bg-oasis-green-50 px-4 py-3 shadow-sm"
        role="img"
        aria-label="Illustration: thumbs up and thumbs down after an assistant reply"
      >
        <p className="text-sm text-oasis-green-800/80">Did we get it right?</p>
        <div className="flex items-center gap-3 text-oasis-green-800" aria-hidden>
          <span className="rounded-lg border border-oasis-green-800/15 bg-white p-2">
            <IconThumbUp size={18} stroke={1.5} aria-hidden />
          </span>
          <span className="rounded-lg border border-oasis-green-800/15 bg-white p-2">
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
        className="w-full max-h-[260px] text-oasis-green-800"
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
              stroke="#495800"
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
      <figcaption className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-oasis-green-800/85">
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
    <div className="max-w-md text-oasis-green-800/95">
      <div className="leading-relaxed text-base space-y-4">
        <p>
          Most assistants miss the mark on real work: too slow, too wrong, or tuned for demos.{' '}
          <span className="font-semibold text-oasis-green-800">Training</span> in Oasis is where you react in context—tags,
          notes, thumbs, and flows like training on a specific reply—so we can steer quality toward{' '}
          <span className="font-semibold text-oasis-green-800">smarter, more accurate, and faster</span> answers for you.
          Qualifying training can also add bonus tokens to your daily balance; caps and rules follow your Oasis plan.
        </p>
        <p>
          <span className="font-semibold text-oasis-green-800">Amplifier</span> is the name we use for that whole feedback
          loop: signal grounded in real conversations, not vibes. Today that signal is tied to your account and the
          interaction you rate. Later, we plan explicit <span className="font-semibold text-oasis-green-800">anonymous</span>{' '}
          and <span className="font-semibold text-oasis-green-800">personalized</span> training modes so you can choose how
          much identity rides with the payload—roadmap, not a promise of ship dates.
        </p>
        <p>
          Consistent, specific feedback over <span className="font-semibold text-[#7a9200]">30, 60, and 90 days</span> is
          the shape of the compounding story below. The chart is <span className="font-semibold">illustrative only</span>,
          not a live dashboard or guarantee for your curves.
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
        <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">Train & react</p>
        <p className="text-xs text-oasis-green-800/70 mb-3 leading-relaxed">
          Simplified mock for layout; see the{' '}
          <Link
            href="/features/oasis-amplifier"
            className="font-medium text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
          >
            Amplifier &amp; Training feature page
          </Link>{' '}
          for real in-app captures.
        </p>
        <FeedbackMocks />
      </div>
      <div className="rounded-2xl border border-oasis-green-800/10 bg-white p-4 sm:p-5 shadow-sm lg:min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-1">Illustrative trajectory</p>
        <h3 className="text-lg font-bold text-oasis-green-800 mb-1">Better speed, accuracy, and quality for you</h3>
        <p className="text-sm text-oasis-green-800/80 mb-2">
          Concept only: as Training piles up, we expect the assistant to feel sharper, steadier, and quicker on the work
          you actually do. The three lines are placeholders for speed, accuracy, and overall quality—not a guarantee, live
          dashboard, or your measured trajectory.
        </p>
        <ChartDataTable />
        <GrowthChartSvg />
      </div>
    </div>
  );
}
