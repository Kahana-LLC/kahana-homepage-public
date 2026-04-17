'use client';

import React from 'react';

const btnClass =
  'rounded-lg border border-oasis-green-800/25 bg-white px-4 py-2 text-sm font-semibold text-oasis-green-800 shadow-sm transition-colors hover:border-oasis-green-700 hover:bg-oasis-green-50 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2';

export default function GalleryPaginationControls({
  page,
  totalPages,
  onPrev,
  onNext,
  className = '',
}) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className={`flex flex-wrap items-center justify-center gap-4 pt-8 ${className}`}
      aria-label="Results pagination"
    >
      <button type="button" className={btnClass} disabled={page <= 1} onClick={onPrev}>
        Previous
      </button>
      <span className="text-sm tabular-nums text-oasis-green-800/90">
        Page {page} of {totalPages}
      </span>
      <button type="button" className={btnClass} disabled={page >= totalPages} onClick={onNext}>
        Next
      </button>
    </nav>
  );
}
