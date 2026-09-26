'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const RISE_MS = 2200;

/**
 * Parse marketing stat strings like 28k, $6,300, 851k, 5%, 210.
 * Non-numeric values return null (shown as-is).
 */
function parseStatValue(raw) {
  if (raw == null) return null;
  const text = String(raw).trim();
  if (!text) return null;

  const match = text.match(/^([^0-9]*?)([\d,]+(?:\.\d+)?)(k|m|b)?([^0-9]*)$/i);
  if (!match) return null;

  const [, prefix, digits, suffixLetter, trailing] = match;
  const n = Number(digits.replace(/,/g, ''));
  if (!Number.isFinite(n)) return null;

  const mult =
    suffixLetter?.toLowerCase() === 'k'
      ? 1_000
      : suffixLetter?.toLowerCase() === 'm'
        ? 1_000_000
        : suffixLetter?.toLowerCase() === 'b'
          ? 1_000_000_000
          : 1;

  return {
    target: n * mult,
    prefix: prefix || '',
    suffix: `${suffixLetter || ''}${trailing || ''}`,
    compact: Boolean(suffixLetter),
    decimals: digits.includes('.') ? digits.split('.')[1].length : 0,
  };
}

function formatStatProgress(parsed, progress) {
  const value = parsed.target * progress;

  if (parsed.compact) {
    const letter = parsed.suffix.match(/^[kmb]/i)?.[0] || '';
    const div =
      letter.toLowerCase() === 'k'
        ? 1_000
        : letter.toLowerCase() === 'm'
          ? 1_000_000
          : letter.toLowerCase() === 'b'
            ? 1_000_000_000
            : 1;
    const compact = value / div;
    const rounded =
      parsed.decimals > 0
        ? compact.toFixed(parsed.decimals)
        : String(Math.round(compact));
    return `${parsed.prefix}${rounded}${parsed.suffix}`;
  }

  const rounded =
    parsed.decimals > 0
      ? value.toFixed(parsed.decimals)
      : String(Math.round(value));
  const withCommas = rounded.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${parsed.prefix}${withCommas}${parsed.suffix}`;
}

function AnimatedStatValue({ value, reduceMotion }) {
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const finalText = String(value ?? '');
  const [display, setDisplay] = useState(() =>
    reduceMotion || !parsed ? finalText : formatStatProgress(parsed, 0),
  );
  const [started, setStarted] = useState(Boolean(reduceMotion) || !parsed);
  const ref = useRef(null);

  useEffect(() => {
    if (!parsed || reduceMotion) {
      setDisplay(finalText);
      setStarted(true);
      return undefined;
    }

    setDisplay(formatStatProgress(parsed, 0));
    setStarted(false);

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [parsed, reduceMotion, finalText]);

  useEffect(() => {
    if (!started || !parsed || reduceMotion) return undefined;

    let frame;
    const start = performance.now();
    let cancelled = false;

    const tick = (now) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / RISE_MS);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(formatStatProgress(parsed, eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [started, parsed, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

/**
 * Result / benefit stats for marketing benefit sections.
 * Values use Bricolage (site display); labels use Geist via body styles.
 * Prefer short values (28k, $6,300, 5%) and one-line labels.
 * Always 2 columns so cards fit the narrow left column beside callouts.
 * Numeric values count up when the grid scrolls into view.
 */
export default function BenefitStats({ items, className = '' }) {
  const reduceMotion = useReducedMotion();
  if (!items?.length) return null;

  return (
    <dl
      className={`mt-8 grid min-w-0 grid-cols-2 gap-3 ${className}`.trim()}
      aria-label="Results"
    >
      {items.map((item) => {
        const Icon = item.Icon;
        return (
          <div
            key={item.label}
            className="flex min-w-0 flex-col overflow-hidden rounded-[20px] bg-white px-4 py-5 sm:px-5"
          >
            {Icon ? (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
            ) : null}
            <dt
              className={`truncate text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622] ${
                Icon ? 'mt-3' : ''
              }`}
            >
              {item.label}
            </dt>
            <dd className="mt-2 break-words font-bricolage text-xl font-semibold tracking-tight text-[#3B2F1A] sm:text-2xl">
              <AnimatedStatValue value={item.value} reduceMotion={reduceMotion} />
            </dd>
            {item.hint ? (
              <p className="mt-1.5 truncate text-sm leading-snug text-[#666666]">{item.hint}</p>
            ) : null}
          </div>
        );
      })}
    </dl>
  );
}
