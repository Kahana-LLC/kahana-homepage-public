import React from 'react';
import Link from 'next/link';
import { APP_NAME } from '../../config/brand';

/** Corne bonsai path — same vector as the product app lockup. */
const BONSAI_PATH =
  'M19.45,18.54H16.51c-3.25-.61-3.67-1.43-3.7-1.76-.05-.6.93-1.43,2.35-2h1.12a1.67,1.67,0,0,0,0-3.33A1.79,1.79,0,0,0,14.51,10a1.76,1.76,0,0,0-1.52.85,1.92,1.92,0,0,0-1.36.35,8,8,0,0,1-.81-1.84H18a1.86,1.86,0,1,0,0-3.71,1.75,1.75,0,0,0-.78.18,2.51,2.51,0,0,0-3.14-1.87,2.69,2.69,0,0,0-2.62-2.08,2.46,2.46,0,0,0-1,.24,3.72,3.72,0,0,0-7,.89H3.18a3.18,3.18,0,0,0,0,6.36H5.05a5.73,5.73,0,0,1,2.79,3.85l-.11.06a5.46,5.46,0,0,0-2.51,2.58c-1,.22-2,1-3.18,2.72H.4a.38.38,0,0,0-.34.22.39.39,0,0,0,.05.4A7.75,7.75,0,0,1,1.8,23.05a.37.37,0,0,0,.37.32H4.31a.36.36,0,0,0,.35-.24l.25-.68h10l.25.68a.36.36,0,0,0,.35.24h2.14a.37.37,0,0,0,.37-.32,7.75,7.75,0,0,1,1.69-3.89.39.39,0,0,0,.05-.4A.38.38,0,0,0,19.45,18.54Zm-6.67-7a1.27,1.27,0,0,1,.32,0,.37.37,0,0,0,.44-.22,1,1,0,0,1,2,.38.46.46,0,0,0,.12.42.36.36,0,0,0,.34.07.87.87,0,0,1,.26,0,.92.92,0,0,1,0,1.83h-3.5a1.24,1.24,0,0,1,0-2.48Zm-9.6-3a2.43,2.43,0,1,1,.47-4.82.37.37,0,0,0,.29-.06.35.35,0,0,0,.15-.26,3,3,0,0,1,5.77-.69A.39.39,0,0,0,10.1,3a.37.37,0,0,0,.32,0,1.88,1.88,0,0,1,1-.34,2,2,0,0,1,1.94,1.88.37.37,0,0,0,.18.31.38.38,0,0,0,.36,0,1.7,1.7,0,0,1,.8-.22A1.77,1.77,0,0,1,16.5,6.37a1,1,0,0,1,0,.15.38.38,0,0,0,.67.27A1.08,1.08,0,0,1,18,6.37a1.11,1.11,0,1,1,0,2.21Zm3.15.75H8c.83,1.19,1.19,2.05,1.08,2.62a1.39,1.39,0,0,1-.57.77A6.3,6.3,0,0,0,6.33,9.33Zm1.79,4.55c.78-.48,1.52-.93,1.7-1.78a3.94,3.94,0,0,0-.91-2.77H10a8.81,8.81,0,0,0,1.07,2.41,2,2,0,0,0-.31,1.06,2,2,0,0,0,.9,1.66,9.24,9.24,0,0,1-1.33.91.37.37,0,0,0-.14.51.39.39,0,0,0,.33.19.41.41,0,0,0,.18-.05,6.62,6.62,0,0,0,1.72-1.27,1.86,1.86,0,0,0,.33,0h.73c-.87.56-1.52,1.27-1.45,2.06s.63,1.24,1.69,1.69h0A9.07,9.07,0,0,1,9.18,17a7.57,7.57,0,0,0-3.11-1.22A5.22,5.22,0,0,1,8.12,13.88Zm.69,3.76c.55.3,1.13.62,1.74.9H2.94C5.08,15.53,6.59,16.38,8.81,17.64Zm8.55,5H15.8L15.55,22a.39.39,0,0,0-.35-.25H4.65A.37.37,0,0,0,4.3,22l-.25.67H2.49a8.35,8.35,0,0,0-1.35-3.33H18.7A8.48,8.48,0,0,0,17.36,22.62Z';

const BRAND_OLIVE = '#3D4F2A';

/**
 * Product-parity lockup: bonsai ~78% of size, word ~62%, weight 500.
 * Matches kahana-web KahanaLogoMark wordmark (APP_NAME).
 */
export default function KahanaWordmark({
  href = '/',
  size = 28,
  className = '',
}) {
  const markSize = Math.max(16, Math.round(size * 0.78));
  const fontSize = Math.max(14, Math.round(size * 0.62));
  const gap = Math.max(5, Math.round(size * 0.16));

  const content = (
    <span
      className={`inline-flex shrink-0 items-center ${className}`}
      style={{ gap }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.84 23.37"
        aria-hidden
        focusable="false"
        className="block shrink-0 overflow-visible"
        style={{ height: markSize, width: 'auto', color: BRAND_OLIVE }}
      >
        <path fill="currentColor" d={BONSAI_PATH} />
      </svg>
      <span
        className="font-bricolage whitespace-nowrap font-medium leading-none tracking-[0.01em]"
        style={{ fontSize, color: BRAND_OLIVE }}
      >
        {APP_NAME}
      </span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="inline-flex shrink-0 no-underline" aria-label={`${APP_NAME} home`}>
      {content}
    </Link>
  );
}
