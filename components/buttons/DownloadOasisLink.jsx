import Link from 'next/link';
import clsx from 'clsx';

/** Stroke download arrow — inherits `currentColor` from `.btn-primary` / `.btn-secondary` rules in globals. */
export function DownloadIcon({ className = 'h-4 w-4 shrink-0' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
}

/**
 * Download CTA with dual icons (Figma library pattern). Use only for explicit download actions.
 */
export default function DownloadOasisLink({
  href = '/download',
  children = 'Download Oasis',
  className,
  variant = 'primary',
  layout,
}) {
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  return (
    <Link
      href={href}
      className={clsx(
        variantClass,
        layout === 'footer' && 'btn-nav',
        'no-underline hover:no-underline focus:no-underline',
        layout === 'footer' && 'download-oasis-cta',
        className
      )}
    >
      <DownloadIcon />
      {children}
      <DownloadIcon />
    </Link>
  );
}
