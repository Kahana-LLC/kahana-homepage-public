import { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import {
  AppStoreBadge,
  GooglePlayBadge,
  StoreWaitlistMarks,
} from '../components/StoreWaitlistMarks';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/app-waitlist`;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AppWaitlistPage() {
  const [email, setEmail] = useState('');
  const [ios, setIos] = useState(true);
  const [android, setAndroid] = useState(true);
  const [note, setNote] = useState('');
  const [website, setWebsite] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const canSubmit = EMAIL_PATTERN.test(email.trim()) && (ios || android) && !submitting;

  async function handleSubmit(event) {
    event.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError('');
    const platforms = [];
    if (ios) platforms.push('ios');
    if (android) platforms.push('android');
    try {
      const response = await fetch('/api/app-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          platforms,
          note,
          website,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.message || 'Something went wrong. Try again.');
        return;
      }
      trackButtonClick('app_waitlist_submitted', 'app_waitlist', {
        platforms: platforms.join(','),
      });
      setDone(true);
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <SEO
        title="iOS and Android waitlist | Kahana"
        description="Kahana is a mobile web library today. Join the waitlist to hear when native iOS and Android apps are ready."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">Apps</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                iOS and Android waitlist
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Kahana works in a mobile browser today. Native apps are on the way (
                <Link
                  href="/faq#mobile-app"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  FAQ
                </Link>
                ). Leave your email and we will notify you when iOS, Android, or both are ready.
                This is a waitlist, not a newsletter.
              </p>
              <StoreWaitlistMarks />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 pb-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-xl">
            <FadeInSection>
              {done ? (
                <div className="rounded-[28px] bg-white px-6 py-10 sm:px-8">
                  <StoreWaitlistMarks className="mt-0" />
                  <h2 className="mt-6 text-2xl font-semibold">You are on the list</h2>
                  <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                    We will email you when the apps you chose are ready. Until then, the library is
                    open in the browser.
                  </p>
                  <a
                    href={productHref('/library', 'app_waitlist_explore')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-8 inline-flex items-center justify-center gap-2 no-underline"
                    onClick={() => trackButtonClick('app_waitlist_explore')}
                  >
                    <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                    Browse Library
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative rounded-[28px] bg-white px-6 py-8 sm:px-8"
                >
                  <label className="block text-sm font-semibold" htmlFor="waitlist-email">
                    Email
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#E4D9C4] bg-[#F7F3EA] px-4 py-3 text-base text-[#3B2F1A] outline-none focus:border-[#8A6622]"
                    placeholder="you@email.com"
                  />

                  <fieldset className="mt-6">
                    <legend className="text-sm font-semibold">Notify me for</legend>
                    <div className="mt-3 flex flex-col gap-3">
                      <label className="flex cursor-pointer items-center gap-3 text-base">
                        <input
                          type="checkbox"
                          checked={ios}
                          onChange={(e) => setIos(e.target.checked)}
                          className="h-4 w-4 shrink-0 accent-[#8A6622]"
                        />
                        <AppStoreBadge
                          className={`h-9 w-auto shrink-0 ${ios ? '' : 'opacity-35'}`}
                        />
                        <span className="sr-only">iOS (App Store)</span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-3 text-base">
                        <input
                          type="checkbox"
                          checked={android}
                          onChange={(e) => setAndroid(e.target.checked)}
                          className="h-4 w-4 shrink-0 accent-[#8A6622]"
                        />
                        <GooglePlayBadge
                          className={`h-9 w-auto shrink-0 ${android ? '' : 'opacity-35'}`}
                        />
                        <span className="sr-only">Android (Google Play)</span>
                      </label>
                    </div>
                  </fieldset>

                  <label className="mt-6 block text-sm font-semibold" htmlFor="waitlist-note">
                    Anything we should know <span className="font-normal text-[#666666]">(optional)</span>
                  </label>
                  <textarea
                    id="waitlist-note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                    maxLength={1000}
                    className="mt-2 w-full rounded-xl border border-[#E4D9C4] bg-[#F7F3EA] px-4 py-3 text-base text-[#3B2F1A] outline-none focus:border-[#8A6622]"
                    placeholder="Device, what you want first in the app…"
                  />

                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                    <label htmlFor="waitlist-company">Company</label>
                    <input
                      id="waitlist-company"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>

                  {error ? (
                    <p className="mt-4 text-sm text-red-700" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="btn-primary mt-8 w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? 'Joining…' : 'Join the waitlist'}
                  </button>
                  <p className="mt-4 text-sm leading-relaxed text-[#666666]">
                    By joining you agree we may email you about the Kahana apps. See the{' '}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
