import Link from 'next/link';
import {
  DocumentCheckIcon,
  EyeSlashIcon,
  FlagIcon,
  LockClosedIcon,
  NoSymbolIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import AiIndexingControlMock from '../components/marketing/AiIndexingControlMock';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/ai-content-safety`;

const SAFETY = [
  {
    Icon: LockClosedIcon,
    title: 'You choose who can find the hub',
    body: 'Private, invite, unlisted, or Library. Listing is a separate step from creating a hub. Paid access is optional on top.',
  },
  {
    Icon: DocumentCheckIcon,
    title: 'Rights before you publish',
    body: 'Before a hub is unlisted, listed, or monetized, you confirm you have the right to share (and, if priced, sell access to) everything in it.',
  },
  {
    Icon: NoSymbolIcon,
    title: 'Viewed in the hub, not dumped as a zip',
    body: 'Buyers open work inside Kahana. Media download controls are off. File links are short-lived. This is not military DRM; it is a shelf, not a locker.',
  },
  {
    Icon: EyeSlashIcon,
    title: 'Adult content is flagged and gated',
    body: 'Creators declare 18+. Library hides adult hubs by default. Access needs login and date of birth. Guests cannot complete the adult path.',
  },
  {
    Icon: FlagIcon,
    title: 'Reports reach a human',
    body: 'Anyone can report a hub, file, or profile: copyright, unmarked adult content, violence, hate, spam, AI slop, and more.',
  },
];

export default function AiContentSafetyPage() {
  return (
    <>
      <SEO
        title="AI indexing and content safety | Kahana"
        description="Kahana defaults AI crawl off. Creators choose whether a hub can appear in AI searches. Search listing is separate. Content safety protocols for rights, access, and reports."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'AI indexing and content safety',
          description:
            'Opt-in AI indexing, noai and noimageai defaults, and creator content safety controls on Kahana.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                Creators
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Your work is not training data unless you say so
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Kahana listed hubs default to asking AI crawlers not to use them. You can allow AI
                discovery, or keep it off. Ordinary Library search is a different switch.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">The control in the app</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Open a hub you own → Settings → Policies → AI indexing. Choose{' '}
                <strong className="font-semibold text-[#3B2F1A]">Keep off AI searches</strong> or{' '}
                <strong className="font-semibold text-[#3B2F1A]">Show in AI searches</strong>, then
                confirm. New hubs start off. Try the same choice here:
              </p>
              <div className="mt-8">
                <AiIndexingControlMock />
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <ShieldCheckIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Search discovery is not AI training
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                A Library-listed, non-adult hub can be findable in Google-style search while still
                advertising <span className="font-mono text-sm">noai</span> and{' '}
                <span className="font-mono text-sm">noimageai</span>. Opting into AI indexing
                removes those signals. Opting in is explicit and requires a confirmation checkbox.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5C4520]">
                These are robots signals reputable crawlers are asked to honor. They are not a
                guarantee against every scraper on the internet. Kahana still prohibits bulk
                scraping in the terms.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Content safety around that choice</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                AI indexing sits next to the rest of how Kahana treats creator work.
              </p>
              <ul className="mt-8 space-y-6">
                {SAFETY.map((item) => {
                  const { Icon } = item;
                  return (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-semibold text-[#3B2F1A]">{item.title}</p>
                        <p className="mt-1 text-base leading-relaxed text-[#5C4520]">{item.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-8">
                <Link
                  href="/creator-safety"
                  className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                >
                  Full Content Safety Protocols
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Keep reading</h2>
              <ul className="mt-6 divide-y divide-[#E4D9C4]">
                {[
                  { kind: 'Safety', title: 'Content Safety Protocols', href: '/creator-safety' },
                  { kind: 'Help', title: 'Content rights', href: '/help/content-rights' },
                  { kind: 'Help', title: 'Trust', href: '/help/trust' },
                  { kind: 'Security', title: 'Security overview', href: '/security' },
                  { kind: 'Policy', title: 'Terms (no bulk scraping)', href: '/terms-and-conditions' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-baseline justify-between gap-4 py-4 no-underline hover:opacity-80"
                    >
                      <span>
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                          {item.kind}
                        </span>
                        <span className="mt-1 block font-semibold text-[#3B2F1A]">{item.title}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Set AI indexing on your hubs"
          description="Create a hub, then choose whether AI tools may find it. Default is off."
          libraryCampaign="ai_content_safety_library"
          createCampaign="ai_content_safety_create"
          libraryTrack="ai_content_safety_library"
          createTrack="ai_content_safety_create"
          createFirst
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <a
              href={productHref('/', 'ai_content_safety_open_app')}
              className="underline underline-offset-2"
              onClick={() => trackButtonClick('ai_content_safety_open_app')}
            >
              Open the app
            </a>
            {' · '}
            <Link href="/creator-safety" className="underline underline-offset-2">
              Content safety
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
