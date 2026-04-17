import React from 'react';
import { motion } from 'framer-motion';
import { slowLoopTransition, usePrefersReducedMotion } from './motion';

export default function ProductVisualFrame({ title, children }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.figure
      className="relative overflow-hidden rounded-xl border border-oasis-green-800/15 bg-[#f7faf9] p-4 shadow-sm"
      animate={
        prefersReducedMotion
          ? undefined
          : {
              opacity: [0.985, 1, 0.985],
              boxShadow: [
                '0 1px 2px rgba(74, 87, 69, 0.06)',
                '0 2px 6px rgba(74, 87, 69, 0.08)',
                '0 1px 2px rgba(74, 87, 69, 0.06)',
              ],
            }
      }
      transition={prefersReducedMotion ? undefined : { ...slowLoopTransition, duration: 8 }}
    >
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-link/35 to-transparent"
          initial={{ x: '-40%' }}
          animate={{ x: '140%' }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
        />
      )}
      <div className="mb-2 rounded-md border border-oasis-green-800/10 bg-white px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#d4dedb]" />
            <span className="h-2 w-2 rounded-full bg-[#d4dedb]" />
            <span className="h-2 w-2 rounded-full bg-[#d4dedb]" />
          </div>
          <figcaption className="text-[11px] font-semibold uppercase tracking-wide text-oasis-green-800/70">
            {title}
          </figcaption>
          <span className="text-[10px] text-oasis-green-800/50" aria-hidden />
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-oasis-green-800/10 bg-white">{children}</div>
    </motion.figure>
  );
}
