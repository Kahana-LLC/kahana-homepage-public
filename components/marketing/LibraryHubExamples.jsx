import Image from 'next/image';
import { USE_CASE_STORIES } from '../../data/use-case-stories';
import { trackButtonClick } from '../../utils/analytics';
import {
  ExploreLibraryButton,
  ShareUniqueKnowledgeButton,
} from './LibraryActionButtons';

const EXAMPLES = USE_CASE_STORIES.filter((s) => ['amy', 'kelsey', 'rashmi'].includes(s.id));

/**
 * Live hub example cards (covers + unique knowledge).
 * Heading/subtext live on the parent section when omitIntro is set.
 */
export default function LibraryHubExamples({
  omitIntro = false,
  heading = 'Unique work already on the Library',
  exploreHref,
  exploreTrack = 'why_aura_examples_explore',
  createHref,
  createTrack = 'why_aura_examples_create',
  createLabel = 'Share your unique knowledge',
}) {
  return (
    <div>
      {!omitIntro ? (
        <>
          <h2 className="text-2xl font-semibold sm:text-3xl">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#666666]">
            These hubs highlight knowledge only their creators could package this way. That is the
            unique content the Library is built to surface.
          </p>
        </>
      ) : null}
      <ul className={`${omitIntro ? '' : 'mt-8 '}grid gap-4 sm:grid-cols-3`}>
        {EXAMPLES.map((story) => (
          <li key={story.id}>
            <a
              href={story.hubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white no-underline hover:bg-[#D9DACB]"
              onClick={() => trackButtonClick(`why_aura_example_${story.id}`)}
            >
              {story.coverSrc ? (
                <Image
                  src={story.coverSrc}
                  alt={story.coverAlt || ''}
                  width={640}
                  height={360}
                  className="h-36 w-full object-cover"
                />
              ) : null}
              <div className="flex flex-1 flex-col px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                  {story.kind}
                  {story.price ? ` · ${story.price}` : ''}
                </p>
                <p className="mt-2 text-base font-semibold text-[#3B2F1A]">{story.hubTitle}</p>
                <p className="mt-1 text-sm text-[#666666]">
                  {story.name}
                  {story.stats?.[0] ? ` · ${story.stats[0]}` : ''}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      {exploreHref || createHref ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {exploreHref ? (
            <ExploreLibraryButton
              href={exploreHref}
              onClick={() => trackButtonClick(exploreTrack)}
            />
          ) : null}
          {createHref ? (
            <ShareUniqueKnowledgeButton
              href={createHref}
              onClick={() => trackButtonClick(createTrack)}
            >
              {createLabel}
            </ShareUniqueKnowledgeButton>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
