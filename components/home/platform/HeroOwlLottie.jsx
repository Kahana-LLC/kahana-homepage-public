import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useReducedMotion } from 'framer-motion';

/**
 * Brand owl with a subtle Aura-colored silhouette glow (purple → blue → teal).
 * No separate jagged flame graphic — the drop-shadow hugs the bird.
 */
export default function HeroOwlLottie({ className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`relative mx-auto w-full max-w-[220px] overflow-visible sm:max-w-[260px] lg:ml-auto lg:mr-0 lg:max-w-[300px] ${className}`}
    >
      {/* Soft color wash behind the owl (static; supports the rim without a shape) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(123, 108, 255, 0.16) 0%, rgba(48, 112, 240, 0.12) 35%, rgba(16, 160, 128, 0.1) 55%, transparent 72%)',
          filter: 'blur(16px)',
        }}
      />

      <div
        className="relative z-10"
        style={{
          filter: reduceMotion
            ? 'drop-shadow(0 0 8px rgba(48, 128, 240, 0.28)) drop-shadow(0 0 14px rgba(123, 108, 255, 0.18))'
            : 'drop-shadow(0 0 10px rgba(48, 128, 240, 0.4)) drop-shadow(0 0 18px rgba(123, 108, 255, 0.28)) drop-shadow(0 0 14px rgba(0, 176, 96, 0.22))',
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
