import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import RainbowHoverCard from '../home/platform/RainbowHoverCard';
import { USE_CASE_STORIES } from '../../data/use-case-stories';
import { trackButtonClick } from '../../utils/analytics';

function Avatar({ story }) {
  if (story.image) {
    return (
      <Image
        src={story.image}
        alt=""
        width={56}
        height={56}
        className="h-14 w-14 rounded-full object-cover"
      />
    );
  }
  return (
    <span
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D9DACB] text-base font-semibold text-[#4F5140]"
      aria-hidden
    >
      {story.initials}
    </span>
  );
}

function HubCover({ story, compact }) {
  if (!story.coverSrc) return null;
  return (
    <a
      href={story.hubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block overflow-hidden bg-[#EDE6D2] no-underline ${
        compact ? 'aspect-[16/9] w-full' : 'aspect-[16/10] w-full rounded-xl'
      }`}
      aria-label={`${story.hubTitle} hub cover`}
      onClick={() => trackButtonClick(`success_story_cover_${story.id}`)}
    >
      <Image
        src={story.coverSrc}
        alt={story.coverAlt || ''}
        fill
        sizes={compact ? '(min-width: 1024px) 360px, 100vw' : '(min-width: 1024px) 380px, 100vw'}
        className="object-cover"
        style={story.coverPosition ? { objectPosition: story.coverPosition } : undefined}
      />
    </a>
  );
}

function StoryBody({ story, t, compact }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Avatar story={story} />
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-[#3B2F1A]">
            {story.name}
            {story.aka ? (
              <span className="ml-2 text-base font-normal text-[#666666]">({story.aka})</span>
            ) : null}
          </h3>
          <p className="mt-0.5 text-sm text-[#5C4520]">{story.persona}</p>
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold tracking-wide text-[#8A6622]">{story.kind}</p>
      <p className="mt-2 text-lg font-semibold text-[#3B2F1A]">{story.hubTitle}</p>
      <p className="mt-2 text-[#666666]">{compact ? story.summary : story.story}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-[#D9DACB] px-3 py-1 text-sm text-[#4F5140]">{story.price}</span>
        {story.stats.map((stat) => (
          <span key={stat} className="rounded-full bg-[#F7F3EA] px-3 py-1 text-sm text-[#666666]">
            {stat}
          </span>
        ))}
      </div>
      {story.quote && !compact ? (
        <blockquote className="mt-6 border-l-2 border-[#8A6622] pl-4 text-[#5C4520]">
          <p className="text-base leading-relaxed">“{story.quote}”</p>
        </blockquote>
      ) : null}
      <p className="mt-6">
        <a
          href={story.hubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-base font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
          onClick={() => trackButtonClick(`success_story_open_${story.id}`)}
        >
          {t('home.storiesOpenHub')}
          <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden />
        </a>
      </p>
    </div>
  );
}

export default function UseCaseStoryCards({ t, compact = false }) {
  return (
    <ul className={`mt-10 grid list-none gap-6 ${compact ? 'lg:grid-cols-3' : 'lg:grid-cols-1'}`}>
      {USE_CASE_STORIES.map((story) => (
        <li key={story.id}>
          {compact ? (
            <RainbowHoverCard
              className="h-full"
              innerClassName="flex h-full flex-col overflow-hidden bg-white p-0"
            >
              <article className="flex h-full flex-col">
                <HubCover story={story} compact />
                <div className="flex flex-1 flex-col px-6 py-7 sm:px-8">
                  <StoryBody story={story} t={t} compact />
                </div>
              </article>
            </RainbowHoverCard>
          ) : (
            <RainbowHoverCard className="h-full" innerClassName="h-full bg-white px-6 py-7 sm:px-8">
              <article className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,360px)] lg:items-start lg:gap-10">
                <StoryBody story={story} t={t} compact={false} />
                <div>
                  <HubCover story={story} compact={false} />
                  <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#8A6622]">
                    {t('home.storiesInside')}
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[#666666]">
                    {story.inside.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </RainbowHoverCard>
          )}
        </li>
      ))}
    </ul>
  );
}
