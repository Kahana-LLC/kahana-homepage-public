/**
 * Product Aura flame + count (matches kahana-web SpiritTokenIcon / hub card chrome).
 * Blue filled flame when Aura > 0; outline when 0.
 */
'use client';

import { useId } from 'react';

const OUTER_FLAME_PATH =
  'M12 2.5C14.5 6.5 19 9 19 14A7 7 0 1 1 5 14C5 9.8 7.6 8 9 6.8C8.7 9 9.7 10.2 11 10.4C10 7 10.8 4.4 12 2.5Z';
const INNER_FLAME_PATH =
  'M12 10C13.2 11.6 15 12.6 15 15A3 3 0 1 1 9 15C9 13.2 10 12.4 10.8 11.8C10.9 12.7 11.4 13.1 12 13.2C11.6 12 11.7 11 12 10Z';

export function AuraFlameIcon({
  size = 16,
  stroke = 2,
  filled = false,
  tone = 'community',
  showInnerFlame = true,
  className = '',
}) {
  const uid = useId().replace(/:/g, '');
  const flameGradientId = `story-aura-flame-${uid}`;
  const innerGradientId = `story-aura-flame-inner-${uid}`;
  const isGrantedTone = tone === 'granted';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
      data-aura-tone={filled ? (isGrantedTone ? 'granted' : 'community') : 'outline'}
    >
      {filled ? (
        <defs>
          {isGrantedTone ? (
            <>
              <linearGradient
                id={flameGradientId}
                x1="12"
                y1="2"
                x2="12"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#C084FC" />
                <stop offset="0.5" stopColor="#A855F7" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
              <linearGradient
                id={innerGradientId}
                x1="12"
                y1="10"
                x2="12"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#F3E8FF" />
                <stop offset="1" stopColor="#DDD6FE" />
              </linearGradient>
            </>
          ) : (
            <>
              <linearGradient
                id={flameGradientId}
                x1="12"
                y1="2"
                x2="12"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#60A5FA" />
                <stop offset="0.5" stopColor="#3B82F6" />
                <stop offset="1" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient
                id={innerGradientId}
                x1="12"
                y1="10"
                x2="12"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#DBEAFE" />
                <stop offset="1" stopColor="#93C5FD" />
              </linearGradient>
            </>
          )}
        </defs>
      ) : null}

      {filled ? (
        <>
          <path d={OUTER_FLAME_PATH} fill={`url(#${flameGradientId})`} />
          {showInnerFlame ? <path d={INNER_FLAME_PATH} fill={`url(#${innerGradientId})`} /> : null}
        </>
      ) : (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d={OUTER_FLAME_PATH} />
          {showInnerFlame ? (
            <path d={INNER_FLAME_PATH} strokeWidth={stroke * 0.85} opacity="0.7" />
          ) : null}
        </g>
      )}
    </svg>
  );
}

/**
 * Compact Aura stat pill for story cards — same flame + count cluster as Library hub cards.
 */
export default function AuraCountChip({ count, className = '' }) {
  const value = Math.max(0, Number(count) || 0);
  const hasAura = value > 0;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-[#1C1917] px-2.5 py-1 text-sm font-semibold tabular-nums text-white ${className}`.trim()}
      aria-label={`${value} Aura`}
      title={`${value} Aura`}
    >
      <AuraFlameIcon
        size={14}
        stroke={2}
        filled={hasAura}
        tone="community"
        showInnerFlame
        className={hasAura ? undefined : 'text-[#A8A29E]'}
      />
      <span>{value}</span>
    </span>
  );
}

export function resolveStoryAuraCount(story) {
  if (typeof story?.auraCount === 'number') return Math.max(0, story.auraCount);
  const hit = (story?.stats || []).find((stat) => /aura/i.test(stat));
  if (!hit) return null;
  const n = parseInt(String(hit).replace(/,/g, ''), 10);
  return Number.isFinite(n) ? Math.max(0, n) : null;
}
