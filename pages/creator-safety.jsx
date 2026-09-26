import Link from 'next/link';
import {
  CheckBadgeIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  EyeSlashIcon,
  FlagIcon,
  LockClosedIcon,
  NoSymbolIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import { ABOUT_ORIGIN } from '../config/site';
import { PARTNERSHIP_CONTACT_URL } from '../components/nav/navConfig';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/creator-safety`;

const PROTOCOLS = [
  {
    id: 'reporting',
    Icon: FlagIcon,
    title: 'Reporting that reaches a human',
    lead: 'Anyone can report a hub, file, or profile. We review those reports.',
    body: 'Reasons include copyright, adult content that was not flagged, graphic violence, hate or harassment, harmful or dangerous material, spam or scam, AI slop, and other. Rights holders can use Report, then Copyright in the app, or Support. The point is a path when something is wrong, not a silent feed.',
    links: [
      { href: '/help/content-rights', label: 'Content rights' },
      { href: '/community-guidelines', label: 'Community guidelines' },
      { href: '/blog/against-ai-slop', label: 'Against AI slop' },
    ],
  },
  {
    id: 'in-hub-viewing',
    Icon: NoSymbolIcon,
    title: 'Built for viewing in the hub, not a zip dump',
    lead: 'Access is a license to view through Kahana, not ownership of the files to resell.',
    body: 'Buyers and members open work inside the hub. Video and audio players disable the browser download control. Paid access is personal and non-transferable under our terms: no bulk scraping, no account sharing for redistribution, no re-uploading creator packs elsewhere. Short-lived file links and access logging help us investigate unusual patterns. This is not military-grade DRM. Determined screen recording still exists. It is a platform that treats your work as a shelf, not a free file locker.',
    links: [
      { href: '/terms-and-conditions', label: 'Terms' },
      { href: '/help/buying-and-access', label: 'Buying & access' },
    ],
  },
  {
    id: 'attestation',
    Icon: DocumentCheckIcon,
    title: 'Rights attestation before you publish',
    lead: 'Before a hub goes unlisted, listed on Library, or monetized, you confirm you have the right to share it.',
    body: 'Private drafts can stay drafts. When you are ready to share or sell access, Kahana asks for an explicit check: you have the right to share (and, if priced, to sell access to) everything in the hub, with attribution where required. Finding a file online is not permission. Public-domain and open-license works are allowed when the license actually permits redistribution.',
    links: [
      { href: '/help/content-rights', label: 'Content rights guide' },
      { href: '/help/list-hub-on-explore', label: 'List a hub on Library' },
    ],
  },
  {
    id: 'ai-crawl',
    Icon: CpuChipIcon,
    title: 'AI crawl is off unless you turn it on',
    lead: 'Listed hubs default to noai / noimageai signals. You choose if AI indexing is allowed.',
    body: 'When AI indexing is off, hub pages advertise noai and noimageai to reputable crawlers. Search indexing for Library-listed non-adult hubs is separate: you can be findable in search without opting into AI training scrapes. Opting in is an explicit setting with acknowledgment. These are signals, not a guarantee against every bot on the internet.',
    links: [
      { href: '/help/list-hub-on-explore', label: 'Listing readiness' },
      { href: '/blog/against-ai-slop', label: 'Not a home for AI slop' },
    ],
  },
  {
    id: 'adult',
    Icon: EyeSlashIcon,
    title: 'Adult content is flagged and gated',
    lead: 'Creators declare 18+. Library hides adult hubs by default. Access needs login and date of birth.',
    body: "There is no anonymous \"I'm 18\" unlock. Adult hubs can list, but they sit behind filters and are not SEO-indexed like general listings. Guests cannot complete the adult path. Paid adult hubs still need purchase on top of the age gate.",
    links: [
      { href: '/help/adult-content-and-age-verification', label: 'Adult content & age verification' },
      { href: '/help/trust', label: 'Trust & intentional access' },
    ],
  },
  {
    id: 'visibility',
    Icon: LockClosedIcon,
    title: 'You choose who can find the hub',
    lead: 'Private, invite, unlisted, or Library. Monetization is optional on top.',
    body: 'A hub can stay with people you invite. Unlisted hubs work by link. Library listing is a separate step with readiness checks (title, cover, description, category, adult yes/no, rights). Free hubs are first-class. When you charge, Stripe Connect handles payouts; the verified seller badge means charge-ready, not a content-safety certification.',
    links: [
      { href: '/help/list-hub-on-explore', label: 'List on Library' },
      { href: '/help/turn-on-paid-access', label: 'Turn on paid access' },
      { href: '/earn-money', label: 'Earn money' },
    ],
  },
  {
    id: 'aura-quality',
    Icon: CheckBadgeIcon,
    title: 'Aura and reports against low-effort filler',
    lead: 'Scarce daily Aura is how careful work rises. AI slop can be reported.',
    body: 'Likes are free; Aura is limited. That makes endorsement costly and harder to farm. Combined with AI-slop reports, the Library is built so unique human work has a better chance of staying visible than another dump of generated filler.',
    links: [
      { href: '/aura', label: 'How Aura works' },
      { href: '/why-the-aura-library-matters', label: 'Our mission' },
    ],
  },
  {
    id: 'community',
    Icon: UserGroupIcon,
    title: 'Discussion stays next to the work',
    lead: 'Hub and file discussions, plus Clubs, so conversation does not leave your shelf.',
    body: 'Comments live on the hub or file, not only in a disappearing feed. Clubs are separate rooms for groups. That keeps context with the knowledge people came for.',
    links: [
      { href: '/features/discussions', label: 'Discussions' },
      { href: '/help/clubs', label: 'Clubs' },
    ],
  },
];

const RELATED = [
  { kind: 'Benefits', title: 'Benefits for creators', href: '/creator-benefits' },
  { kind: 'Product', title: 'Suggestion engine', href: '/suggestion-engine' },
  { kind: 'Partnerships', title: 'Partnerships', href: PARTNERSHIP_CONTACT_URL, external: true },
  { kind: 'Help', title: 'Content rights', href: '/help/content-rights' },
  { kind: 'Help', title: 'Trust', href: '/help/trust' },
  { kind: 'Help', title: 'Adult content', href: '/help/adult-content-and-age-verification' },
  { kind: 'Policy', title: 'Community guidelines', href: '/community-guidelines' },
  { kind: 'Security', title: 'Security overview', href: '/security' },
];

export default function CreatorSafetyPage() {
  return (
    <>
      <SEO
        title="Content Safety Protocols | Kahana creators"
        description="What Kahana does to protect creator work: reporting, in-hub viewing, rights attestation, AI crawl defaults, adult gating, and visibility controls. Built for collaboration decisions."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Content Safety Protocols',
          description:
            'Reporting, in-hub viewing, content rights attestation, AI indexing defaults, adult content gates, and visibility controls.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                For creators
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Content Safety Protocols
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                When someone asks you to collaborate on a platform, the first questions are fair:
                are there safety protocols, and will your content be protected from misuse? This is
                how Kahana answers.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/creator-benefits"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('creator_safety_to_benefits')}
                >
                  Benefits for creators
                </Link>
                <a
                  href={productHref('/', 'creator_safety_create')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('creator_safety_create')}
                >
                  Open the app
                </a>
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
                What "protected" means here
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Kahana is a library of hubs. You keep ownership of your work. People view it through
                access you control. We ask for rights confirmation before listing or monetizing. We
                take reports. We default AI crawl off. Adult material is intentional and age-gated.
                Nothing on the open web is perfectly leak-proof. These protocols are the floor we
                hold so collaboration is not a leap of faith into a dump folder.
              </p>
            </FadeInSection>
          </div>
        </section>

        {PROTOCOLS.map((item) => {
          const { Icon } = item;
          return (
            <section
              key={item.id}
              id={item.id}
              className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
            >
              <div className="mx-auto max-w-3xl">
                <FadeInSection>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{item.title}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-[#666666]">{item.lead}</p>
                  <p className="mt-4 text-base leading-relaxed text-[#5C4520]">{item.body}</p>
                  {item.links?.length ? (
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm font-semibold text-[#8A6622] underline underline-offset-2"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </FadeInSection>
              </div>
            </section>
          );
        })}

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Then look at what you get</h2>
              <p className="mt-3 text-lg leading-relaxed text-[#666666]">
                Safety is the gate. Reach, followers, earnings, community, and traffic back to your
                other socials are on the benefits page.
              </p>
              <p className="mt-6">
                <Link
                  href="/creator-benefits"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('creator_safety_benefits_mid')}
                >
                  Benefits for creators
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
                {RELATED.map((item) => {
                  const linkClass =
                    'flex items-baseline justify-between gap-4 py-4 no-underline hover:opacity-80';
                  const body = (
                    <span>
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                        {item.kind}
                      </span>
                      <span className="mt-1 block font-semibold text-[#3B2F1A]">
                        {item.title}
                      </span>
                    </span>
                  );
                  return (
                    <li key={item.href}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {body}
                        </a>
                      ) : (
                        <Link href={item.href} className={linkClass}>
                          {body}
                        </Link>
                      )}
                    </li>
                  );
                })}              </ul>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Publish with protocols in place"
          description="Start a hub, attest rights when you share it, and choose who can find it."
          libraryCampaign="creator_safety_library"
          createCampaign="creator_safety_create_cta"
          libraryTrack="creator_safety_library"
          createTrack="creator_safety_create_cta"
          createFirst
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/creator-benefits" className="underline underline-offset-2">
              Benefits for creators
            </Link>
            {' · '}
            <a
              href={PARTNERSHIP_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Partnerships
            </a>
            {' · '}
            <Link href="/creators" className="underline underline-offset-2">
              Kahana for creators
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
