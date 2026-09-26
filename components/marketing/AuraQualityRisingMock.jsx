'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import RainbowHoverCard from '../home/platform/RainbowHoverCard';

const ROWS = [
  { title: 'Internship playbook', subtitle: 'Career guide hub', target: 18 },
  { title: 'Workshop pack', subtitle: 'Session + templates', target: 41 },
  { title: '30-day journal', subtitle: 'Guided questions', target: 64 },
];

const CYCLE_MS = 9000;
const RISE_MS = 4200;

function AuraCountChip({ value, reduceMotion }) {
  return (
    <RainbowHoverCard
      alwaysOn
      className="rainbow-hover-card--aura shrink-0"
      innerClassName="flex items-center gap-2.5 px-3.5 py-2.5"
    >
      <motion.img
        src="/images/aura-mark.png"
        alt=""
        width={36}
        height={56}
        decoding="async"
        className="h-9 w-auto object-contain"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        key={value}
        className="min-w-[2ch] text-2xl font-semibold tabular-nums text-white"
        initial={reduceMotion ? false : { y: 6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.span>
    </RainbowHoverCard>
  );
}

/**
 * Illustrative UI: Aura counts rising as careful work gets endorsed.
 * Styled like the homepage Aura chip. Parent owns header/subtext.
 */
export default function AuraQualityRisingMock() {
  const reduceMotion = useReducedMotion();
  const [counts, setCounts] = useState(ROWS.map((r) => (reduceMotion ? r.target : 0)));

  useEffect(() => {
    if (reduceMotion) {
      setCounts(ROWS.map((r) => r.target));
      return undefined;
    }

    let frame;
    let start = performance.now();
    let cancelled = false;

    const tick = (now) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / RISE_MS);
      const eased = 1 - (1 - t) ** 3;
      setCounts(ROWS.map((row) => Math.round(row.target * eased)));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    setCounts(ROWS.map(() => 0));
    frame = requestAnimationFrame(tick);

    const loop = window.setInterval(() => {
      start = performance.now();
      setCounts(ROWS.map(() => 0));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    }, CYCLE_MS);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearInterval(loop);
    };
  }, [reduceMotion]);

  return (
    <div className="rounded-[20px] bg-white px-5 py-6 sm:px-6">
      <ul className="space-y-3" aria-label="Example hubs receiving Aura">
        {ROWS.map((row, i) => (
          <li
            key={row.title}
            className="flex items-center justify-between gap-4 rounded-2xl bg-[#F7F3EA] px-4 py-3"
          >
            <div className="min-w-0">
              <p className="font-semibold text-[#3B2F1A]">{row.title}</p>
              <p className="text-sm text-[#666666]">{row.subtitle}</p>
            </div>
            <AuraCountChip value={counts[i]} reduceMotion={reduceMotion} />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-[#666666]">
        Illustrative Aura counts. Open the Library to see live endorsements.
      </p>
    </div>
  );
}
