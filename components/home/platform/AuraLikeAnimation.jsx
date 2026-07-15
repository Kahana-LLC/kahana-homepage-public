import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const HEARTS = [
  { x: -48, delay: 0, size: 14 },
  { x: 36, delay: 0.15, size: 12 },
  { x: -20, delay: 0.35, size: 16 },
  { x: 52, delay: 0.5, size: 11 },
  { x: 8, delay: 0.65, size: 13 },
];

function Heart({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21s-6.7-4.35-9.33-8.1C.55 9.7 1.6 6.2 4.55 5.1 6.4 4.4 8.55 5 9.7 6.5L12 9.2l2.3-2.7c1.15-1.5 3.3-2.1 5.15-1.4 2.95 1.1 4 4.6 1.88 7.8C18.7 16.65 12 21 12 21z" />
    </svg>
  );
}

/**
 * Product Aura chip: balance climbs as floating hearts pulse outward (likes / endorsements).
 */
export default function AuraLikeAnimation() {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(2);
  const [burstId, setBurstId] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setCount((n) => (n >= 48 ? 2 : n + 1));
      setBurstId((b) => b + 1);
    }, 1400);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div
      className="relative mx-auto flex h-[160px] w-[200px] items-center justify-center lg:mx-0"
      aria-hidden
    >
      <AnimatePresence>
        {!reduceMotion &&
          HEARTS.map((h, i) => (
            <motion.span
              key={`${burstId}-${i}`}
              className="pointer-events-none absolute text-[#ff6b8a]"
              initial={{ opacity: 0, y: 12, x: h.x, scale: 0.6 }}
              animate={{ opacity: [0, 1, 0], y: -56, x: h.x + (i % 2 === 0 ? -8 : 8), scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.15, delay: h.delay, ease: 'easeOut' }}
            >
              <Heart size={h.size} />
            </motion.span>
          ))}
      </AnimatePresence>

      <div className="relative z-10 flex items-center gap-3 rounded-2xl bg-[#1a1a1a] px-6 py-5 shadow-lg">
        <motion.img
          src="/images/aura-mark.png"
          alt=""
          width={56}
          height={88}
          decoding="async"
          className="h-14 w-auto object-contain"
          animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          key={count}
          className="min-w-[2ch] text-4xl font-semibold tabular-nums text-white"
          initial={reduceMotion ? false : { y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {count}
        </motion.span>
      </div>
    </div>
  );
}
