import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../solutions/visuals/motion';

const BAR_COUNT = 28;
const BAR_HEIGHT_PX = 56;
/** Slower, calmer motion than v1 (plan: subtle idle). */
const DURATION_SCALE = 2.35;
const DELAY_PER_BAR = 0.095;

export default function OasisVoiceWaveform() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="mx-auto flex h-16 max-w-[min(100%,280px)] items-end justify-center gap-0.5 px-1 sm:h-[72px] sm:max-w-[320px]"
      aria-hidden
    >
      {Array.from({ length: BAR_COUNT }, (_, i) => {
        const durationJitter = 0.92 + (i % 5) * 0.05;
        const duration = (1.05 + (i % 7) * 0.1) * durationJitter * DURATION_SCALE;

        if (prefersReducedMotion) {
          const h = 32 + ((i * 7) % 24);
          return (
            <div
              key={i}
              className="w-[3px] shrink-0 rounded-full opacity-80"
              style={{
                height: h,
                background: 'linear-gradient(to top, #5a6b18, #9aad3a)',
 }}
            />
          );
        }

        return (
          <motion.div
            key={i}
            className="w-[3px] shrink-0 rounded-full"
            style={{
              height: BAR_HEIGHT_PX,
              transformOrigin: 'bottom',
              background: 'linear-gradient(to top, #4a5a14, #94A833)',
            }}
            animate={{ scaleY: [0.32, 0.95, 0.48, 0.82, 0.38, 0.9, 0.32] }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * DELAY_PER_BAR,
            }}
          />
        );
      })}
    </div>
  );
}
