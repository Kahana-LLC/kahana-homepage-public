import Link from 'next/link';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../SEO';
import FadeInSection from '../FadeInSection';
import RainbowHoverCard from '../home/platform/RainbowHoverCard';
import { USE_CASE_STORIES } from '../../data/use-case-stories';
import { APP_URL } from '../nav/navConfig';
import { trackButtonClick } from '../../utils/analytics';
import {
  getFeature,
  getPersona,
  getUseCase,
} from '../../data/marketingTaxonomy';

function CardLink({ href, title, summary }) {
  return (
    <li className="flex flex-1 min-w-[16rem]">
      <Link href={href} className="flex h-full w-full no-underline">
        <RainbowHoverCard className="h-full w-full" innerClassName="h-full bg-white px-6 py-6">
          <h3 className="text-lg font-semibold text-[#313A00]">{title}</h3>
          <p className="mt-2 text-sm text-[#666666]">{summary}</p>
        </RainbowHoverCard>
      </Link>
    </li>
  );
}

export function CatalogIndex({
  canonical,
  seoTitle,
  seoDescription,
  eyebrow,
  title,
  lead,
  items,
  hrefPrefix,
}) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} url={canonical} type="website" />
      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              {eyebrow ? (
                <p className="text-sm font-semibold tracking-wide text-[#7A9200]">{eyebrow}</p>
              ) : null}
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">{lead}</p>
            </FadeInSection>
          </div>
        </section>
        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <CardLink
                  key={item.slug}
                  href={`${hrefPrefix}/${item.slug}`}
                  title={item.title}
                  summary={item.summary}
                />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default function MarketingLanding({
  canonical,
  seoTitle,
  seoDescription,
  item,
  kind,
}) {
  const featureLinks = (item.features || []).map((slug) => getFeature(slug)).filter(Boolean);
  const personaLinks = (item.personas || []).map((slug) => getPersona(slug)).filter(Boolean);
  const useCaseLinks = (item.useCases || []).map((slug) => getUseCase(slug)).filter(Boolean);
  const stories = (item.stories || [])
    .map((id) => USE_CASE_STORIES.find((story) => story.id === id))
    .filter(Boolean);
  const helpHref = item.helpSlug ? `/help/${item.helpSlug}` : '/help';
  const helpFilterHref =
    kind === 'persona'
      ? `/help?for=${item.slug}`
      : kind === 'use-case'
        ? `/help?use=${item.slug}`
        : kind === 'feature'
          ? `/help?feature=${item.slug}`
          : '/help';
  const trackingId = `${kind}_${item.slug}_cta`;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} url={canonical} type="website" />
      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#7A9200]">{item.eyebrow}</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {item.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">{item.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={item.appHref || APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick(trackingId)}
                >
                  {item.appHref?.includes('explore') || item.appLabel === 'Browse Library' ? (
                    <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  ) : (
                    <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  )}
                  {item.appLabel || 'Open the app'}
                </a>
                <Link href={helpHref} className="btn-secondary inline-flex items-center justify-center no-underline">
                  Help
                </Link>
              </div>
              {helpFilterHref !== '/help' ? (
                <p className="mt-4 mb-0 text-sm text-[#495800]">
                  <Link href={helpFilterHref} className="font-semibold text-brand-link no-underline hover:underline">
                    Browse matching help guides
                  </Link>
                </p>
              ) : null}
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold">How it works</h2>
              <ul className="mt-6 space-y-3 text-lg text-[#666666]">
                {(item.bullets || []).map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7A9200]" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {item.note ? <p className="mt-8 text-base text-[#495800]">{item.note}</p> : null}
            </FadeInSection>
          </div>
        </section>

        {stories.length > 0 ? (
          <section className="border-t border-[#E0E8D4] px-6 py-16 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-semibold">Live examples</h2>
              <ul className="mt-6 space-y-4">
                {stories.map((story) => (
                  <li key={story.id}>
                    <a
                      href={story.hubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                    >
                      {story.hubTitle}
                    </a>
                    <p className="mt-1 text-[#666666]">
                      {story.name}
                      {story.persona ? ` · ${story.persona}` : ''}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <Link
                  href="/success-stories"
                  className="text-base font-medium text-[#617500] no-underline underline-offset-4 hover:underline"
                >
                  More success stories
                </Link>
              </p>
            </div>
          </section>
        ) : null}

        <section className="border-t border-[#E0E8D4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl space-y-12">
            {featureLinks.length > 0 ? (
              <div>
                <h2 className="text-2xl font-semibold">Features</h2>
                <ul className="mt-6 flex flex-wrap gap-6">
                  {featureLinks.map((feature) => (
                    <CardLink
                      key={feature.slug}
                      href={`/features/${feature.slug}`}
                      title={feature.title}
                      summary={feature.summary}
                    />
                  ))}
                </ul>
              </div>
            ) : null}
            {personaLinks.length > 0 ? (
              <div>
                <h2 className="text-2xl font-semibold">Who it is for</h2>
                <ul className="mt-6 flex flex-wrap gap-6">
                  {personaLinks.map((persona) => (
                    <CardLink
                      key={persona.slug}
                      href={`/for/${persona.slug}`}
                      title={persona.title}
                      summary={persona.summary}
                    />
                  ))}
                </ul>
              </div>
            ) : null}
            {useCaseLinks.length > 0 ? (
              <div>
                <h2 className="text-2xl font-semibold">Use cases</h2>
                <ul className="mt-6 flex flex-wrap gap-6">
                  {useCaseLinks.map((useCase) => (
                    <CardLink
                      key={useCase.slug}
                      href={`/use-cases/${useCase.slug}`}
                      title={useCase.title}
                      summary={useCase.summary}
                    />
                  ))}
                </ul>
              </div>
            ) : null}
            <p className="text-[#666666]">
              Browse all{' '}
              <Link href="/features" className="font-medium text-[#617500] no-underline hover:underline">
                features
              </Link>
              {', '}
              <Link href="/for" className="font-medium text-[#617500] no-underline hover:underline">
                who it is for
              </Link>
              {', '}
              <Link href="/use-cases" className="font-medium text-[#617500] no-underline hover:underline">
                use cases
              </Link>
              {', or '}
              <Link href="/help" className="font-medium text-[#617500] no-underline hover:underline">
                Help
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
