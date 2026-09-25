'use client';

import { useEffect, useState } from 'react';

/**
 * Illustrative UI: Aura counts rising as careful work gets endorsed.
 * Numbers are demo motion, not live totals. Parent owns header/subtext.
 */
export default function AuraQualityRisingMock() {
  const [counts, setCounts] = useState([3, 7, 12]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCounts([18, 41, 64]);
      return undefined;
    }
    const targets = [18, 41, 64];
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1600);
      const eased = 1 - (1 - t) ** 3;
      setCounts(targets.map((n) => Math.round(n * eased)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const rows = [
    { title: 'Internship playbook', subtitle: 'Career guide hub', aura: counts[0] },
    { title: 'Workshop pack', subtitle: 'Session + templates', aura: counts[1] },
    { title: '30-day journal', subtitle: 'Guided questions', aura: counts[2] },
  ];

  return (
    <div className="rounded-[20px] bg-white px-5 py-6 sm:px-6">
      <ul className="space-y-3" aria-label="Example hubs receiving Aura">
        {rows.map((row) => (
          <li
            key={row.title}
            className="flex items-center justify-between gap-4 rounded-2xl bg-[#F7F3EA] px-4 py-3"
          >
            <div>
              <p className="font-semibold text-[#3B2F1A]">{row.title}</p>
              <p className="text-sm text-[#666666]">{row.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 tabular-nums">
              <svg viewBox="0 0 24 36" aria-hidden className="h-7 w-auto">
                <path
                  fill="#489CB5"
                  d="M12 1.2c.4 3.8-2.2 6.4-4.6 9.2-2.6 3-4.6 6.2-3.8 10.4 1 5.2 5.4 8.8 8.4 8.8s7.4-3.6 8.4-8.8c.8-4.2-1.2-7.4-3.8-10.4C14.2 7.6 11.6 5 12 1.2z"
                />
              </svg>
              <span className="text-xl font-semibold text-[#3B2F1A]">{row.aura}</span>
              <span className="sr-only">Aura</span>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-[#666666]">
        Illustrative Aura counts. Open the Library to see live endorsements.
      </p>
    </div>
  );
}
