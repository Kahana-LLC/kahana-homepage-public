import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import EssaySeriesNav from '../components/marketing/EssaySeriesNav';
import { ABOUT_ORIGIN } from '../config/site';
import { USE_CASE_STORIES } from '../data/use-case-stories';
import { STORY_GALLERY } from '../data/storyGallery';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/story-gallery`;

const storiesById = Object.fromEntries(USE_CASE_STORIES.map((story) => [story.id, story]));

export default function StoryGalleryPage() {
  const entries = STORY_GALLERY.map((entry) => ({
    ...entry,
    story: storiesById[entry.storyId],
  })).filter((entry) => entry.story);

  return (
    <>
      <SEO
        title="Kahana success stories | Hubs with views and earnings"
        description="A gallery of Kahana hubs that already have views, including free and priced hubs, with the guides that explain how they were set up."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Kahana success stories',
          description:
            'Hubs already on Kahana, with the guides that explain how they were set up.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8A6622]">
                Gallery
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Success stories
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Real hubs, and the write-ups that explain how they were set up and why they work.
                Open the hub, then read the guide beside it.
              </p>
              <EssaySeriesNav current="/story-gallery" />
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl font-semibold sm:text-3xl">Hubs already on the Library</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                  Open each hub, then read the guide beside it. These are live listings with real
                  views.
                </p>
              </div>
            </FadeInSection>
            <div className="mt-12 flex flex-col gap-16">
            {entries.map(({ story, whyItWorks, posts }) => (
              <FadeInSection key={story.id}>
                <article className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
                  <a
                    href={story.hubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[16/10] overflow-hidden rounded-[20px] bg-[#EDE6D2] no-underline"
                    onClick={() => trackButtonClick(`story_gallery_cover_${story.id}`)}
                  >
                    {story.coverSrc ? (
                      <Image
                        src={story.coverSrc}
                        alt={story.coverAlt || ''}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover"
                      />
                    ) : null}
                  </a>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-[#8A6622]">
                      {story.kind}
                      {story.price ? ` · ${story.price}` : ''}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{story.hubTitle}</h2>
                    <p className="mt-2 text-base text-[#5C4520]">
                      {story.name}
                      {story.aka ? ` (${story.aka})` : ''} · {story.persona}
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-[#666666]">{story.story}</p>
                    <p className="mt-4 text-base leading-relaxed text-[#3B2F1A]">{whyItWorks}</p>
                    <a
                      href={story.hubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-[#8A6622] no-underline hover:underline"
                      onClick={() => trackButtonClick(`story_gallery_hub_${story.id}`)}
                    >
                      Open the hub
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden />
                    </a>
                    <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                      Read how this kind of hub gets built
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {posts.map((post) => (
                        <li key={post.href}>
                          <Link
                            href={post.href}
                            className="text-base font-semibold text-[#3B2F1A] underline decoration-[#E4D9C4] underline-offset-4 hover:decoration-[#8A6622]"
                          >
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeInSection>
            ))}
            </div>
            <FadeInSection>
              <p className="mt-12 text-center">
                <a
                  href={productHref('/library', 'story_gallery_mid_explore')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                  onClick={() => trackButtonClick('story_gallery_mid_explore')}
                >
                  Explore the Library
                </a>
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[#5C4520]">
                More of the catalog is live. These three are the walkthroughs.
              </p>
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Your hub can be the next one"
          description="Share something you would stand behind. If people find it useful, they will say so with Aura."
          libraryCampaign="story_gallery_library"
          createCampaign="story_gallery_create"
          libraryTrack="story_gallery_library"
          createTrack="story_gallery_create"
          createFirst
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <Link href="/success-stories" className="underline underline-offset-2">
              Shorter story cards
            </Link>
            {' · '}
            <Link href="/do-well" className="underline underline-offset-2">
              How to do well
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}
