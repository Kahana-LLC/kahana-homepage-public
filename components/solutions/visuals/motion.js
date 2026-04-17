import { useEffect, useState } from 'react';

export const subtleEase = [0.16, 1, 0.3, 1];

export const subtleTransition = {
  duration: 0.75,
  ease: subtleEase,
};

export const slowLoopTransition = {
  duration: 6,
  ease: subtleEase,
  repeat: Infinity,
  repeatType: 'mirror',
};

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(Boolean(mq.matches));

    update();

    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }

    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return prefersReducedMotion;
}
