import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useConsent } from '../../contexts/ConsentContext';

const STORAGE_KEY = 'kahana_affiliate_nudge_dismissed';
const SHOW_UNTIL = '2026-11-15T00:00:00Z';

export default function AffiliateNudge() {
  const router = useRouter();
  const { showBanner, isLoading } = useConsent();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isLoading || showBanner) return undefined;
    if (router.pathname === '/affiliates') return undefined;
    if (Date.now() >= Date.parse(SHOW_UNTIL)) return undefined;
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === '1') return undefined;
    } catch {
      return undefined;
    }
    const timer = window.setTimeout(() => setOpen(true), 8000);
    return () => window.clearTimeout(timer);
  }, [router.pathname, showBanner, isLoading]);

  if (!open) return null;

  const dismiss = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Private mode can block storage. Closing for this view is enough.
    }
  };

  return (
    <aside
      className="fixed right-4 z-40 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-[#E4D9C4] bg-white p-4 text-[#3B2F1A] shadow-lg"
      style={{ bottom: 'calc(1rem + var(--consent-banner-offset, 0px))' }}
      aria-label="Affiliate program"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm leading-relaxed">
          Invite someone to Kahana. They get 30% off Growth forever. You earn 30% of what they pay.
        </p>
        <button
          type="button"
          className="shrink-0 rounded-md px-1 text-lg leading-none text-[#5C4520] hover:bg-[#F7F3EA]"
          onClick={dismiss}
          aria-label="Dismiss affiliate note"
        >
          ×
        </button>
      </div>
      <Link
        href="/affiliates"
        className="mt-3 inline-flex text-sm font-semibold text-[#8A6622] underline-offset-2 hover:underline"
        onClick={dismiss}
      >
        See how the affiliate link works
      </Link>
    </aside>
  );
}
