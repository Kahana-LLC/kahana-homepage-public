import Link from 'next/link';
import { productHref } from '../../lib/productLinks';

const DEFAULT_TRIAL_HREF = productHref(
  '/billing?intent=sell&trial=growth',
  'growth_trial_pill',
);

/**
 * Small “New” callout for the 14-day Growth free trial.
 * Use next to CTAs, pricing, and footer links.
 */
export default function GrowthTrialPill({
  href = DEFAULT_TRIAL_HREF,
  className = '',
  onClick,
  dark = false,
}) {
  const base =
    'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide no-underline transition';
  const tone = dark
    ? 'bg-[#F7F3EA]/15 text-[#F7F3EA] ring-1 ring-[#F7F3EA]/25 hover:bg-[#F7F3EA]/25'
    : 'bg-[#EDE6D2] text-[#5C4520] ring-1 ring-[#E4D9C4] hover:bg-[#E8DCC4]';

  const inner = (
    <>
      <span
        className={
          dark
            ? 'rounded-full bg-[#F7F3EA] px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-[#3B2F1A]'
            : 'rounded-full bg-[#8A6622] px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-[#F7F3EA]'
        }
      >
        New
      </span>
      <span>14-day Growth trial</span>
    </>
  );

  const classNames = `${base} ${tone} ${className}`.trim();

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
        onClick={onClick}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames} onClick={onClick}>
      {inner}
    </Link>
  );
}
