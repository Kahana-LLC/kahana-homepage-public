import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useReducedMotion } from 'framer-motion';

const FLAME_COUNT = 8;
/** Percent of container — sits on the soft aura rim around the owl. */
const ORBIT_RADIUS_PCT = 52;
const ORBIT_CENTER_Y_PCT = 48;
const FLAME_SIZE = 24;
const STEP_MS = 360;
const PATTERN_HOLD_MS = 8000;
const HOVER_HUE_STEP = 28;

const PATTERNS = [
  'cw',
  'ccw',
  'alternate',
  'opposite',
  'bloom',
  'pairs',
  'sparkle',
  'pulseAll',
];

function circularDist(a, b) {
  let dist = Math.abs(a - b);
  return Math.min(dist, FLAME_COUNT - dist);
}

function flameOpacity(pattern, index, tick) {
  switch (pattern) {
    case 'alternate': {
      const group = Math.floor(tick / 3) % 2;
      if (index % 2 !== group) return 0;
      const pulse = (tick % 3) / 2;
      return 0.35 + 0.55 * (1 - Math.abs(pulse - 0.5) * 1.2);
    }
    case 'opposite': {
      const a = tick % FLAME_COUNT;
      const b = (a + FLAME_COUNT / 2) % FLAME_COUNT;
      const dist = Math.min(circularDist(index, a), circularDist(index, b));
      if (dist === 0) return 0.95;
      if (dist === 1) return 0.35;
      return 0;
    }
    case 'bloom': {
      // Expand from one seed around the ring, then collapse
      const cycle = tick % (FLAME_COUNT * 2);
      const expanding = cycle < FLAME_COUNT;
      const radius = expanding ? cycle : FLAME_COUNT * 2 - 1 - cycle;
      const seed = Math.floor(tick / (FLAME_COUNT * 2)) % FLAME_COUNT;
      const dist = circularDist(index, seed);
      if (dist > radius) return 0;
      if (dist === radius) return 0.95;
      return 0.45;
    }
    case 'pairs': {
      const pair = Math.floor(tick / 2) % (FLAME_COUNT / 2);
      const a = pair * 2;
      const b = a + 1;
      if (index === a || index === b) return 0.9;
      return 0;
    }
    case 'sparkle': {
      // Pseudo-random slots from tick (deterministic, no flicker)
      const lit = new Set([
        (tick * 3) % FLAME_COUNT,
        (tick * 5 + 2) % FLAME_COUNT,
        (tick * 7 + 5) % FLAME_COUNT,
      ]);
      return lit.has(index) ? 0.9 : 0;
    }
    case 'pulseAll': {
      const wave = 0.5 + 0.5 * Math.sin((tick / 4) * Math.PI);
      return 0.25 + 0.7 * wave;
    }
    case 'ccw': {
      const active = (FLAME_COUNT - (tick % FLAME_COUNT)) % FLAME_COUNT;
      const dist = circularDist(index, active);
      if (dist === 0) return 0.95;
      if (dist === 1) return 0.4;
      return 0;
    }
    case 'cw':
    default: {
      const active = tick % FLAME_COUNT;
      const dist = circularDist(index, active);
      if (dist === 0) return 0.95;
      if (dist === 1) return 0.4;
      return 0;
    }
  }
}

/**
 * Brand owl with Aura-colored silhouette glow and orbiting Aura-mark flames.
 * Patterns cycle around the rim; hover lights the full ring and cycles flame hues.
 */
export default function HeroOwlLottie({ className = '' }) {
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);
  const [patternIndex, setPatternIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  /** True when the device has real hover (desktop). Avoids sticky :hover after touch. */
  const [fineHover, setFineHover] = useState(false);
  const pattern = PATTERNS[patternIndex];

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setFineHover(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const stepId = window.setInterval(() => {
      setTick((t) => t + 1);
    }, STEP_MS);
    return () => window.clearInterval(stepId);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || hovered) return undefined;
    const patternId = window.setInterval(() => {
      setPatternIndex((i) => (i + 1) % PATTERNS.length);
      setTick(0);
    }, PATTERN_HOLD_MS);
    return () => window.clearInterval(patternId);
  }, [reduceMotion, hovered]);

  const activate = () => {
    if (!reduceMotion) setHovered(true);
  };
  const deactivate = () => setHovered(false);

  return (
    <div
      className={`relative mx-auto w-full max-w-[220px] cursor-pointer touch-manipulation overflow-visible sm:max-w-[260px] lg:ml-auto lg:mr-0 lg:max-w-[300px] ${className}`}
      onMouseEnter={() => fineHover && activate()}
      onMouseLeave={() => fineHover && deactivate()}
      onFocus={activate}
      onBlur={deactivate}
      onTouchStart={activate}
      onTouchEnd={deactivate}
      onTouchCancel={deactivate}
      tabIndex={0}
      role="img"
      aria-label="Kahana owl with Aura"
    >
      {/* Soft color wash behind the owl — brightens on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[filter,opacity] duration-500"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(123, 108, 255, 0.16) 0%, rgba(48, 112, 240, 0.12) 35%, rgba(16, 160, 128, 0.1) 55%, transparent 72%)',
          filter: hovered ? 'blur(14px) saturate(1.45) brightness(1.15)' : 'blur(16px)',
          opacity: hovered ? 1 : 0.95,
        }}
      />

      {/* Orbital Aura flames on the glow border */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-visible" aria-hidden>
        {Array.from({ length: FLAME_COUNT }, (_, i) => {
          const angle = (i / FLAME_COUNT) * Math.PI * 2 - Math.PI / 2;
          const left = 50 + Math.cos(angle) * ORBIT_RADIUS_PCT;
          const top = ORBIT_CENTER_Y_PCT + Math.sin(angle) * ORBIT_RADIUS_PCT;

          let opacity;
          let filter;
          if (reduceMotion) {
            opacity = i === 0 || i === 4 ? 0.45 : 0;
            filter = undefined;
          } else if (hovered) {
            opacity = 0.88;
            // Full ring; hue ripples around the circle over time
            const hue = (tick * HOVER_HUE_STEP + i * (360 / FLAME_COUNT)) % 360;
            filter = `hue-rotate(${hue}deg) saturate(1.35) brightness(1.08)`;
          } else {
            opacity = flameOpacity(pattern, i, tick);
            filter = undefined;
          }

          return (
            <img
              key={`flame-${i}`}
              src="/images/aura-mark-transparent.png"
              alt=""
              width={FLAME_SIZE}
              height={Math.round(FLAME_SIZE * 1.57)}
              decoding="async"
              className="pointer-events-none absolute object-contain drop-shadow-sm"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: FLAME_SIZE,
                height: 'auto',
                transform: hovered
                  ? 'translate(-50%, -50%) scale(1.12)'
                  : 'translate(-50%, -50%) scale(1)',
                opacity,
                filter,
                transition: reduceMotion
                  ? undefined
                  : 'opacity 300ms ease-in-out, transform 300ms ease-in-out, filter 280ms linear',
              }}
            />
          );
        })}
      </div>

      <div
        className="relative z-10"
        style={{
          filter: reduceMotion
            ? 'drop-shadow(0 0 8px rgba(48, 128, 240, 0.28)) drop-shadow(0 0 14px rgba(123, 108, 255, 0.18))'
            : hovered
              ? 'drop-shadow(0 0 12px rgba(48, 128, 240, 0.55)) drop-shadow(0 0 22px rgba(123, 108, 255, 0.4)) drop-shadow(0 0 18px rgba(0, 176, 96, 0.3))'
              : 'drop-shadow(0 0 10px rgba(48, 128, 240, 0.4)) drop-shadow(0 0 18px rgba(123, 108, 255, 0.28)) drop-shadow(0 0 14px rgba(0, 176, 96, 0.22))',
          transition: 'filter 400ms ease',
        }}
      >
        <DotLottieReact
          src="/images/hero-owl-brand.lottie"
          loop
          autoplay
          style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1' }}
        />
      </div>
    </div>
  );
}
