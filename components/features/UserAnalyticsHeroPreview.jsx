import React from 'react';

const BAR_TONES = [
  'bg-brand-link/55',
  'bg-brand-link/40',
  'bg-[#7a9200]/45',
  'bg-[#7a9200]/30',
  'bg-oasis-green-800/25',
  'bg-oasis-green-800/18',
];

/** Decorative faux dashboard strip for the user analytics feature hero. */
export default function UserAnalyticsHeroPreview() {
  return (
    <div
      className="mx-auto max-w-4xl rounded-2xl border border-oasis-green-800/15 bg-white p-6 shadow-sm"
      role="img"
      aria-label="Illustrative usage insights preview with sample charts"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((col) => (
          <div
            key={col}
            className="rounded-xl border border-oasis-green-800/10 bg-gradient-to-br from-oasis-green-50 to-white p-4"
          >
            <div className="mb-3 h-2 w-20 rounded bg-oasis-green-800/12" />
            <div className="flex h-24 items-end gap-1">
              {[0, 1, 2, 3, 4, 5].map((bar) => {
                const h = 28 + ((bar + col * 2) % 5) * 14;
                const tone = BAR_TONES[(bar + col) % BAR_TONES.length];
                return (
                  <div
                    key={bar}
                    className={`flex-1 rounded-t ${tone}`}
                    style={{ height: `${h}%` }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-oasis-green-800/65">Illustrative preview—not live data</p>
    </div>
  );
}
