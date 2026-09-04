import { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useReducedMotion } from 'framer-motion';

/** Time to reach full flame while hovering. */
const LINGER_MS = 2800;
/** Time for the flame to collapse after leaving. */
const DECAY_MS = 900;
const IDLE_BREATH_MS = 2400;
const COLOR_CYCLE_IDLE_MS = 5600;
const COLOR_CYCLE_HOVER_MS = 1100;

const IDLE_COLORS = [
  [166, 124, 42],
  [217, 107, 4],
  [138, 102, 34],
  [79, 81, 64],
  [92, 69, 32],
];

const HOT_COLORS = [
  [255, 246, 220],
  [255, 148, 42],
  [217, 107, 4],
  [190, 48, 8],
  [166, 124, 42],
];

const STATIC_GLOW =
  'drop-shadow(0 -2px 8px rgba(166, 124, 42, 0.32)) drop-shadow(0 0 16px rgba(138, 102, 34, 0.2))';

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function mixRgb(a, b, t) {
  return [
    Math.round(lerp(a[0], b[0], t)),
    Math.round(lerp(a[1], b[1], t)),
    Math.round(lerp(a[2], b[2], t)),
  ];
}

function colorAt(ms, period, palette) {
  const n = palette.length;
  const x = ((((ms % period) + period) % period) / period) * n;
  const i = Math.floor(x) % n;
  const f = x - Math.floor(x);
  return mixRgb(palette[i], palette[(i + 1) % n], f);
}

function rgba(c, a) {
  return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;
}

/**
 * Brand phoenix with a silhouette-hugging flame glow.
 * Idle: slow breath. Hover: hotter flame that grows and color-shifts
 * the longer you linger, then collapses on leave.
 */
export default function HeroOwlLottie({ className = '' }) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  /** True when the device has real hover (desktop). Avoids sticky :hover after touch. */
  const [fineHover, setFineHover] = useState(false);
  const glowRef = useRef(null);
  const hoveredRef = useRef(false);
  const lingerRef = useRef(0);
  const lastNowRef = useRef(null);

  hoveredRef.current = hovered;

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setFineHover(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return undefined;

    if (reduceMotion) {
      el.style.filter = STATIC_GLOW;
      el.style.transform = 'scale(1)';
      lingerRef.current = 0;
      lastNowRef.current = null;
      return undefined;
    }

    let rafId = 0;
    const tick = (now) => {
      const last = lastNowRef.current ?? now;
      const dt = Math.min(64, now - last);
      lastNowRef.current = now;

      const hovering = hoveredRef.current;
      const rate = hovering ? 1 / LINGER_MS : -1 / DECAY_MS;
      lingerRef.current = Math.max(0, Math.min(1, lingerRef.current + rate * dt));
      const linger = easeOutCubic(lingerRef.current);

      const breath = 0.5 + 0.5 * Math.sin((now / IDLE_BREATH_MS) * Math.PI * 2);
      const breathMix = 1 - linger * 0.75;
      const size = linger + breath * 0.22 * breathMix;

      const core = 7 + size * 18 + linger * 12;
      const mid = 14 + size * 32 + linger * 14;
      const halo = 22 + size * 50 + linger * 16;
      const rise = 3 + linger * 28 + breath * 5 * breathMix;
      const shimmer = hovering ? Math.sin(now / 85) * linger * 1.4 : 0;
      const scale = 1 + linger * 0.16 + breath * 0.014 * breathMix;

      const idleA = colorAt(now, COLOR_CYCLE_IDLE_MS, IDLE_COLORS);
      const idleB = colorAt(now + COLOR_CYCLE_IDLE_MS * 0.35, COLOR_CYCLE_IDLE_MS, IDLE_COLORS);
      const hotA = colorAt(now, COLOR_CYCLE_HOVER_MS, HOT_COLORS);
      const hotB = colorAt(now + COLOR_CYCLE_HOVER_MS * 0.35, COLOR_CYCLE_HOVER_MS, HOT_COLORS);
      const c1 = mixRgb(idleA, hotA, linger);
      const c2 = mixRgb(idleB, hotB, linger);
      const white = [255, 246, 220];
      const aCore = 0.42 + linger * 0.46;
      const aMid = 0.26 + linger * 0.34;
      const aHalo = 0.14 + linger * 0.22;
      const aHot = linger * linger * 0.62;

      el.style.filter = [
        `brightness(${1 + linger * 0.22}) saturate(${1 + linger * 0.35})`,
        `drop-shadow(0 ${-rise * 1.15}px ${5 + linger * 12}px ${rgba(white, aHot)})`,
        `drop-shadow(0 ${-rise}px ${core}px ${rgba(c1, aCore)})`,
        `drop-shadow(0 ${-rise * 0.45}px ${mid}px ${rgba(c2, aMid)})`,
        `drop-shadow(0 4px ${halo}px ${rgba(c1, aHalo)})`,
      ].join(' ');
      el.style.transform = `translateX(${shimmer}px) scale(${scale})`;

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [reduceMotion]);

  const activate = () => setHovered(true);
  const deactivate = () => setHovered(false);

  return (
    <div
      className={`relative mx-auto w-full max-w-[220px] cursor-pointer touch-manipulation overflow-visible outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#8A6622] sm:max-w-[260px] lg:ml-auto lg:mr-0 lg:max-w-[300px] ${className}`}
      onPointerEnter={() => fineHover && activate()}
      onPointerLeave={() => fineHover && deactivate()}
      onMouseEnter={() => fineHover && activate()}
      onMouseLeave={() => fineHover && deactivate()}
      onFocus={activate}
      onBlur={deactivate}
      onTouchStart={activate}
      onTouchEnd={deactivate}
      onTouchCancel={deactivate}
      tabIndex={0}
      role="img"
      aria-label="Kahana phoenix with Aura"
    >
      <div ref={glowRef} className="relative z-10 will-change-[filter,transform]">
        <DotLottieReact
          src="/images/hero-phoenix.json"
          loop={!reduceMotion}
          autoplay={!reduceMotion}
          style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1' }}
        />
      </div>
    </div>
  );
}
