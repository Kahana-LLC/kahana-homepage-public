import Link from 'next/link';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { APP_URL } from '../../components/nav/navConfig';
import { trackButtonClick } from '../../utils/analytics';

const EXPLORE_URL = `${APP_URL}/explore`;
const CANONICAL = 'https://about.kahana.io/features';

const CAPABILITIES = [
  {
    title: 'Explore',
    body: 'Public discovery with search and categories. Find hubs contributed by experts worldwide.',
  },
  {
    title: 'Hubs',
    body: 'Digital artifacts (files, videos, images, PDFs, documents, links, and more) plus collaborators in one curated place. Easy to open and easy to find.',
  },
  {
    title: 'Profiles',
    body: 'One link for your presence: hubs you have shared and the reputation you grow.',
  },
  {
    title: 'Aura',
    body: 'The spirit of the library. Give Aura, see who gave it, and help the best contributions rise.',
  },
  {
    title: 'Optional earning',
    body: 'Kahana began as knowledge sharing. Paid access came later, after a user asked for it. When your hubs earn demand, you can charge for access if you want. 5% platform take rate.',
  },
  {
    title: 'Plans',
    body: 'Start free so you can contribute. Growth removes hub and upload limits when you need more room.',
    href: '/pricing',
    linkLabel: 'See pricing',
  },
  {
    title: 'Trust',
    body: 'Adult content flags, age verification, and verified creators via Stripe Identity.',
  },
];

function PrimaryCta() {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
      onClick={() => trackButtonClick('features_create')}
    >
      <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
      Create
    </a>
  );
}

function ExploreCta() {
  return (
    <a
      href={EXPLORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
    >
      <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
      Explore
    </a>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <SEO
        title="Features | Kahana"
        description="Explore hubs, contribute digital artifacts, give Aura so quality rises, and turn on paid access later if you want."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                What Kahana includes
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">
                Discovery, curated hubs, and community signal, so shared knowledge is easy to find
                in one place. Earning from access is optional, and came later by request.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCta />
                <ExploreCta />
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <ul className="flex flex-col gap-12">
                {CAPABILITIES.map((item) => (
                  <li key={item.title}>
                    <h2 className="text-2xl font-semibold sm:text-3xl">{item.title}</h2>
                    <p className="mt-3 text-lg text-[#666666]">{item.body}</p>
                    {item.href ? (
                      <p className="mt-3">
                        <Link
                          href={item.href}
                          className="font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                        >
                          {item.linkLabel}
                        </Link>
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#313A00] px-6 py-20 text-[#F8FAF2] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
                Contribute what you know
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#F8FAF2]/85">
                Share on any topic. Get discovered. Help others learn.
              </p>
              <div className="mt-10 flex justify-center">
                <PrimaryCta />
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
