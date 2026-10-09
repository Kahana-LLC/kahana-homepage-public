import Link from 'next/link';
import {
  CheckCircleIcon,
  FolderPlusIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import FaqAccordion from '../components/faq/FaqAccordion';
import ExplainerRelatedLinks from '../components/home/platform/ExplainerRelatedLinks';
import AffiliateEarningsMock from '../components/marketing/AffiliateEarningsMock';
import { APP_URL, EXPLORE_URL } from '../components/nav/navConfig';
import { ABOUT_ORIGIN } from '../config/site';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/hub-affiliates`;

const POINTS = [
  {
    title: 'Your price, their share',
    body: 'The hub price stays yours to set. Affiliates earn a percent of what is left after fees, not a cut of the sticker price.',
  },
  {
    title: 'Open, or approval required',
    body: 'Anyone with a Kahana account can use an open link. Approval-required links stay pending until you say yes.',
  },
  {
    title: 'Drafts on Free, live on Growth',
    body: 'You can save a link on the free plan. It starts paying affiliates only after you are on Growth and the hub has a price.',
  },
  {
    title: 'Separate from the signup program',
    body: 'This is for hubs you already sell. The platform referral on Earn is a different program.',
  },
];

const FAQS = [
  {
    id: 'hub-aff-vs-earn',
    question: 'Is this the same as Become an affiliate?',
    answer:
      'No. Earn is Kahana’s signup program: you invite people to the platform. My affiliates is for a hub you own. Someone else shares that hub, and a sale through their link pays them a share of what you keep after fees.',
  },
  {
    id: 'hub-aff-who',
    question: 'Who can use a hub affiliate link?',
    answer:
      'The affiliate needs a Kahana account. They do not need to be a member of the hub. You choose whether anyone can use the link or new affiliates need your approval.',
  },
  {
    id: 'hub-aff-live',
    question: 'When does a link start paying?',
    answer:
      'You can draft a link on Free. It goes live when you are on Growth (including a trial), the hub has a price above zero, and you turn the link on.',
  },
];

const RELATED = [
  { kind: 'Earn', title: 'Earn money', href: '/earn-money' },
  { kind: 'Program', title: 'Become an affiliate', href: '/affiliates' },
  { kind: 'Benefits', title: 'Benefits for creators', href: '/creator-benefits' },
  { kind: 'Pricing', title: 'Plans', href: '/pricing' },
  { kind: 'Help', title: 'Hub affiliate links', href: '/help/hub-affiliate-links' },
  { kind: 'Help', title: 'Turn on paid access', href: '/help/turn-on-paid-access' },
  { kind: 'Help', title: 'Optional earning', href: '/help/earning' },
  { kind: 'Feature', title: 'Paid access', href: '/features/earning' },
];

export default function HubAffiliatesPage() {
  const myAffiliatesHref = productHref('/my-affiliates', 'hub_affiliates');

  return (
    <>
      <SEO
        title="My affiliates: let others share your paid hubs | Kahana"
        description="Give your community a link to your priced hub. They earn a percentage after fees. You keep setting the price. Drafts on Free, live on Growth."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                My affiliates
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Affiliates for your own hubs
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Let your community share your work and earn a percentage. You set the price. They
                send buyers. Everyone wins.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={myAffiliatesHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('hub_affiliates_open_app')}
                >
                  Open My affiliates
                </a>
                <Link
                  href="/help/hub-affiliate-links"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  How it works
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                <UserPlusIcon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Campaign results</h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#666666]">
                Same chart as in the app. Filter by link, today / this month / all time, and
                earnings vs views. This demo is illustrative.
              </p>
            </FadeInSection>
            <FadeInSection>
              <div className="mt-10">
                <AffiliateEarningsMock />
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <ul className="grid gap-3 sm:grid-cols-2">
              {POINTS.map((item) => (
                <li key={item.title}>
                  <FadeInSection>
                    <article className="flex h-full gap-3 rounded-[20px] bg-white px-4 py-5 sm:gap-4 sm:px-5">
                      <CheckCircleIcon
                        className="mt-0.5 h-6 w-6 shrink-0 text-[#8A6622]"
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <h3 className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#666666]">{item.body}</p>
                      </div>
                    </article>
                  </FadeInSection>
                </li>
              ))}
            </ul>
            <FadeInSection>
              <p className="mt-8 text-base leading-relaxed text-[#5C4520]">
                Kahana takes 5%. Stripe&apos;s card fee is estimated on top. The affiliate
                percentage applies to what you would keep after those fees. Commission sits 14 days
                before it is treated as available.
              </p>
              <p className="mt-4 text-sm font-semibold">
                <Link
                  href="/affiliates"
                  className="text-[#8A6622] underline underline-offset-2"
                >
                  Looking to invite people to Kahana instead? Become an affiliate
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Questions</h2>
              <FaqAccordion className="mt-8" items={FAQS} />
            </FadeInSection>
          </div>
        </section>

        <ExplainerRelatedLinks
          lead="Paid access, the signup affiliate program, and how to turn a hub on for sale."
          items={RELATED}
        />

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Add a link for a hub you sell
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Draft it on Free. Turn it on when you are on Growth and the hub has a price.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={myAffiliatesHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('hub_affiliates_cta_app')}
                >
                  <UserPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Open My affiliates
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('hub_affiliates_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create a hub
                </a>
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('hub_affiliates_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Library
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
