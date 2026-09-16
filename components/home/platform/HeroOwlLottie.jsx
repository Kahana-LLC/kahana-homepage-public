import { useEffect, useId, useRef, useState } from 'react';
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
  [255, 176, 48],
  [255, 106, 16],
  [220, 48, 32],
  [190, 32, 28],
  [255, 140, 32],
];

const HOT_COLORS = [
  [255, 246, 200],
  [255, 176, 48],
  [255, 106, 16],
  [220, 40, 24],
  [255, 148, 32],
];

/** Peak heat: real flame — white core, then blue (no cyan/lime). */
const BLUE_HOT_COLORS = [
  [255, 255, 255],
  [240, 248, 255],
  [170, 200, 255],
  [70, 110, 230],
  [40, 70, 200],
];

const STATIC_GLOW =
  'drop-shadow(0 -2px 8px rgba(255, 140, 32, 0.42)) drop-shadow(0 0 16px rgba(220, 48, 32, 0.24))';

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

/** Recolor opaque pixels only (no square). t=0 identity, t=1 white-blue fire. */
function blueWhiteMatrix(t) {
  const i = 1 - t;
  const lr = 0.2126 * t;
  const lg = 0.7152 * t;
  const lb = 0.0722 * t;
  return [
    i + lr * 0.88, lg * 0.88, lb * 0.88, 0, 0.22 * t,
    lr * 0.94, i + lg * 0.94, lb * 0.94, 0, 0.28 * t,
    lr * 1.12, lg * 1.12, i + lb * 1.12, 0, 0.48 * t,
    0, 0, 0, 1, 0,
  ]
    .map((n) => n.toFixed(4))
    .join(' ');
}

function rand(min, max) {
  return min + Math.random() * (max - min);
}

/**
 * Subtle Super-Saiyan-style rising streaks and cinders.
 * Colors follow linger (ember → white-blue). Radial mask avoids a square.
 */
function RisingAuraCanvas({ lingerRef, reduceMotion }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduceMotion) return undefined;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    const parent = canvas.parentElement;
    let w = 0;
    let h = 0;
    let rafId = 0;
    let last = performance.now();

    const streaks = [];
    const cinders = [];

    const seedStreak = (warm) => {
      const side = Math.random() < 0.5 ? -1 : 1;
      const along = rand(0.08, 0.42);
      return {
        x: w * 0.5 + side * w * along,
        y: rand(h * 0.38, h * 0.88),
        len: rand(28, 86) * (0.75 + warm * 0.4),
        width: rand(1.2, 2.6),
        speed: rand(55, 130) * (0.9 + warm * 0.5),
        wobble: rand(-18, 18),
        phase: rand(0, Math.PI * 2),
        life: rand(0, 0.85),
        maxLife: rand(0.7, 1.35),
      };
    };

    const seedCinder = (warm) => ({
      x: w * 0.5 + rand(-w * 0.4, w * 0.4),
      y: rand(h * 0.42, h * 0.92),
      r: rand(1.1, 2.4),
      speed: rand(50, 140) * (0.85 + warm * 0.6),
      drift: rand(-22, 22),
      life: rand(0, 0.85),
      maxLife: rand(0.55, 1.2),
    });

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const scale = 1.65;
      w = Math.max(1, rect.width * scale);
      h = Math.max(1, rect.height * scale);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const linger = () => easeOutCubic(lingerRef.current || 0);

    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const heat = linger();
      const toBlue = heat * heat * heat;
      const intensity = 0.72 + heat * 0.28;

      const ember = [255, 150, 48];
      const white = [255, 255, 255];
      const blue = [120, 170, 255];
      const col = mixRgb(mixRgb(ember, white, heat), blue, toBlue * 0.85);

      const streakTarget = Math.round(22 + heat * 14);
      const cinderTarget = Math.round(26 + heat * 18);
      while (streaks.length < streakTarget) streaks.push(seedStreak(heat));
      while (cinders.length < cinderTarget) cinders.push(seedCinder(heat));
      if (streaks.length > streakTarget) streaks.length = streakTarget;
      if (cinders.length > cinderTarget) cinders.length = cinderTarget;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      for (const s of streaks) {
        s.life += dt / s.maxLife;
        s.y -= s.speed * dt * (0.7 + heat);
        s.x += Math.sin(now / 420 + s.phase) * s.wobble * dt;
        if (s.life >= 1 || s.y < h * 0.04) Object.assign(s, seedStreak(heat), { y: h * 0.78 + rand(0, h * 0.16), life: 0 });

        const fade = Math.sin(Math.min(1, s.life) * Math.PI) * intensity * 0.7;
        const g = ctx.createLinearGradient(s.x, s.y + s.len, s.x, s.y);
        g.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},0)`);
        g.addColorStop(0.45, `rgba(${col[0]},${col[1]},${col[2]},${fade})`);
        g.addColorStop(1, `rgba(255,255,255,${fade * 0.35})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = s.width;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(s.x, s.y + s.len);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
      }

      for (const c of cinders) {
        c.life += dt / c.maxLife;
        c.y -= c.speed * dt * (0.75 + heat);
        c.x += c.drift * dt;
        if (c.life >= 1 || c.y < h * 0.06) Object.assign(c, seedCinder(heat), { y: h * 0.82 + rand(0, h * 0.12), life: 0 });
        const fade = Math.sin(Math.min(1, c.life) * Math.PI) * intensity * 0.85;
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${fade})`;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [lingerRef, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[165%] w-[165%] -translate-x-1/2 -translate-y-[46%]"
      style={{
        mixBlendMode: 'screen',
        maskImage: 'radial-gradient(ellipse 62% 72% at 50% 48%, black 12%, black 58%, transparent 82%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 62% 72% at 50% 48%, black 12%, black 58%, transparent 82%)',
      }}
      aria-hidden
    />
  );
}

/**
 * Brand phoenix with a silhouette-hugging flame glow.
 * Idle: slow breath. Hover: hotter flame that grows and color-shifts
 * the longer you linger — ember, white-hot, then blue — then collapses on leave.
 */
export default function HeroOwlLottie({ className = '' }) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  /** True when the device has real hover (desktop). Avoids sticky :hover after touch. */
  const [fineHover, setFineHover] = useState(false);
  const filterId = useId().replace(/:/g, '');
  const glowRef = useRef(null);
  const birdRef = useRef(null);
  const matrixRef = useRef(null);
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
    const bird = birdRef.current;
    const matrixEl = matrixRef.current;
    if (!el) return undefined;

    if (reduceMotion) {
      el.style.filter = STATIC_GLOW;
      el.style.transform = 'scale(1)';
      if (bird) bird.style.filter = '';
      if (matrixEl) matrixEl.setAttribute('values', blueWhiteMatrix(0));
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
      const blueA = colorAt(now, COLOR_CYCLE_HOVER_MS, BLUE_HOT_COLORS);
      const blueB = colorAt(now + COLOR_CYCLE_HOVER_MS * 0.35, COLOR_CYCLE_HOVER_MS, BLUE_HOT_COLORS);
      // Ember through mid-hover, then white-hot into blue.
      const toBlue = linger * linger * linger;
      const fireA = mixRgb(idleA, hotA, linger);
      const fireB = mixRgb(idleB, hotB, linger);
      const c1 = mixRgb(fireA, blueA, toBlue);
      const c2 = mixRgb(fireB, blueB, toBlue);
      const white = mixRgb([255, 246, 220], [255, 255, 255], toBlue);
      const aCore = 0.42 + linger * 0.46;
      const aMid = 0.26 + linger * 0.34;
      const aHalo = 0.14 + linger * 0.22;
      const aHot = linger * linger * 0.72;

      el.style.filter = [
        `drop-shadow(0 ${-rise * 1.15}px ${5 + linger * 12}px ${rgba(white, aHot)})`,
        `drop-shadow(0 ${-rise}px ${core}px ${rgba(c1, aCore)})`,
        `drop-shadow(0 ${-rise * 0.45}px ${mid}px ${rgba(c2, aMid)})`,
        `drop-shadow(0 4px ${halo}px ${rgba(c1, aHalo)})`,
      ].join(' ');
      el.style.transform = `translateX(${shimmer}px) scale(${scale})`;
      if (bird) {
        const bright = 1 + linger * 0.28 + toBlue * 0.22;
        bird.style.filter = `url(#${filterId}) brightness(${bright})`;
      }
      if (matrixEl) matrixEl.setAttribute('values', blueWhiteMatrix(toBlue));

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [reduceMotion, filterId]);

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
      <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden>
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feColorMatrix ref={matrixRef} type="matrix" values={blueWhiteMatrix(0)} />
        </filter>
      </svg>
      <RisingAuraCanvas lingerRef={lingerRef} reduceMotion={reduceMotion} />
      <div ref={glowRef} className="relative z-10 overflow-visible will-change-[filter,transform]">
        <div ref={birdRef} className="overflow-visible will-change-[filter] [&_canvas]:bg-transparent">
          <DotLottieReact
            src="/images/hero-phoenix.json?v=fire"
            loop={!reduceMotion}
            autoplay={!reduceMotion}
            style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1', overflow: 'visible' }}
          />
        </div>
      </div>
    </div>
  );
}
