'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { SiInstagram, SiYoutube } from 'react-icons/si';
import RainbowHoverCard from '../home/platform/RainbowHoverCard';
import AuraCountChip, { resolveStoryAuraCount } from '../marketing/AuraCountChip';
import { USE_CASE_STORIES } from '../../data/use-case-stories';
import { getStoryBlogHref } from '../../data/successStoryBlogs';
import { trackButtonClick } from '../../utils/analytics';

const PAGE_SIZE = 3;

function StorySocialLinks({ story }) {
  const links = [];
  if (story.youtubeUrl) {
    links.push({
      href: story.youtubeUrl,
      label: 'YouTube',
      Icon: SiYoutube,
      track: `success_story_youtube_${story.id}`,
    });
  }
  if (story.websiteUrl) {
    links.push({
      href: story.websiteUrl,
      label: 'Website',
      Icon: GlobeAltIcon,
      track: `success_story_website_${story.id}`,
    });
  }
  if (story.instagramUrl) {
    links.push({
      href: story.instagramUrl,
      label: 'Instagram',
      Icon: SiInstagram,
      track: `success_story_instagram_${story.id}`,
    });
  }
  if (!links.length) return null;

  return (
    <div className="mt-1.5 flex flex-wrap items-center gap-2">
      {links.map(({ href, label, Icon, track }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F7F3EA] text-[#5C4520] no-underline ring-1 ring-[#E4D9C4] transition hover:bg-[#EDE6D2] hover:text-[#3B2F1A]"
          aria-label={`${story.name} on ${label}`}
          title={label}
          onClick={() => trackButtonClick(track)}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden />
        </a>
      ))}
    </div>
  );
}

function Avatar({ story }) {
  const compact = Boolean(story.compactAvatar);
  const size = compact ? 40 : 56;
  const sizeClass = compact ? 'h-10 w-10' : 'h-14 w-14';
  if (story.image) {
    return (
      <Image
        src={story.image}
        alt=""
        width={size}
        height={size}
        className={`${sizeClass} rounded-full object-cover`}
      />
    );
  }
  return (
    <span
      className={`flex ${sizeClass} items-center justify-center rounded-full bg-[#D9DACB] font-semibold text-[#4F5140] ${
        compact ? 'text-sm' : 'text-base'
      }`}
      aria-hidden
    >
      {story.initials}
    </span>
  );
}

function HubCover({ story, compact }) {
  if (!story.coverSrc) return null;
  const blogHref = getStoryBlogHref(story.id);
  const className = `relative block overflow-hidden bg-[#EDE6D2] no-underline ${
    compact ? 'aspect-[16/9] w-full' : 'aspect-[16/10] w-full rounded-xl'
  }`;
  const image = (
    <Image
      src={story.coverSrc}
      alt={story.coverAlt || ''}
      fill
      sizes={compact ? '(min-width: 1024px) 360px, 100vw' : '(min-width: 1024px) 380px, 100vw'}
      className="object-cover"
      style={story.coverPosition ? { objectPosition: story.coverPosition } : undefined}
    />
  );

  if (blogHref) {
    return (
      <Link
        href={blogHref}
        className={className}
        aria-label={`${story.hubTitle} success story`}
        onClick={() => trackButtonClick(`success_story_cover_${story.id}`)}
      >
        {image}
      </Link>
    );
  }

  return (
    <a
      href={story.hubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`${story.hubTitle} hub cover`}
      onClick={() => trackButtonClick(`success_story_cover_${story.id}`)}
    >
      {image}
    </a>
  );
}

function StoryBody({ story, t, compact }) {
  const blogHref = getStoryBlogHref(story.id);
  const akaCompact = Boolean(story.compactAvatar);
  const auraCount = resolveStoryAuraCount(story);
  const otherStats = (story.stats || []).filter(
    (stat) => !/subscribers?|members?|aura/i.test(stat),
  );

  return (
    <div className="flex h-full flex-1 flex-col">
      <div className="flex items-center gap-4">
        <Avatar story={story} />
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-[#3B2F1A]">
            {story.name}
            {story.aka ? (
              <span
                className={`ml-2 font-normal text-[#666666] ${
                  akaCompact ? 'text-xs' : 'text-base'
                }`}
              >
                ({story.aka})
              </span>
            ) : null}
          </h3>
          <p className="mt-0.5 text-sm text-[#5C4520]">{story.persona}</p>
          <StorySocialLinks story={story} />
        </div>
      </div>
      {story.hook ? (
        <p className="mt-4 text-sm font-semibold tracking-wide text-[#8A6622]">{story.hook}</p>
      ) : null}
      <p
        className={
          story.hook
            ? 'mt-1 text-sm font-semibold tracking-wide text-[#8A6622]'
            : 'mt-4 text-sm font-semibold tracking-wide text-[#8A6622]'
        }
      >
        {story.kind}
      </p>
      <p className="mt-2 text-lg font-semibold text-[#3B2F1A]">{story.hubTitle}</p>
      <p className="mt-2 text-[#666666]">{compact ? story.summary : story.story}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {auraCount != null ? <AuraCountChip count={auraCount} /> : null}
        {story.price ? (
          <span className="rounded-full bg-[#3B2F1A] px-3 py-1 text-sm font-semibold text-[#F7F3EA]">
            {story.price}
          </span>
        ) : null}
        {story.subscribers ? (
          <span className="rounded-full bg-[#D9DACB] px-3 py-1 text-sm font-semibold text-[#4F5140]">
            {story.subscribers} members
          </span>
        ) : null}
        {otherStats.map((stat) => (
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
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {blogHref ? (
          <Link
            href={blogHref}
            className="inline-flex min-h-[2.5rem] items-center gap-1.5 rounded-full bg-[#F7F3EA] px-3.5 py-2 text-sm font-semibold text-[#5C4520] no-underline ring-1 ring-[#E4D9C4] transition hover:bg-[#EDE6D2]"
            onClick={() => trackButtonClick(`success_story_read_${story.id}`)}
          >
            {t('home.storiesReadStory')}
            <ArrowRightIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
          </Link>
        ) : (
          <span className="inline-flex min-h-[2.5rem] min-w-[8.5rem] items-center rounded-full px-3.5 py-2 opacity-0" aria-hidden>
            {t('home.storiesReadStory')}
          </span>
        )}
        <a
          href={story.hubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[2.5rem] items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-[#8A6622] no-underline ring-1 ring-[#E4D9C4] transition hover:bg-[#FFFDF8]"
          onClick={() => trackButtonClick(`success_story_open_${story.id}`)}
        >
          {t('home.storiesOpenHub')}
          <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
        </a>
      </div>
    </div>
  );
}

function StoryCard({ story, t, compact }) {
  if (compact) {
    return (
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
    );
  }

  return (
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
  );
}

export function ExploreLibraryEnd({ t, exploreHref, trackId = 'home_stories_explore_library' }) {
  return (
    <div className="mt-8 overflow-hidden rounded-[16px] bg-[#3B2F1A] px-5 py-5 text-[#F7F3EA] sm:px-8 sm:py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="min-w-0 max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#C4B89A]">
            {t('home.storiesExploreEyebrow')}
          </p>
          <h3 className="mt-1 text-lg font-semibold sm:text-xl">
            {t('home.storiesExploreTitle')}
          </h3>
          <p className="mt-1.5 text-sm leading-snug text-[#F7F3EA]/80">
            {t('home.storiesExploreBody')}
          </p>
        </div>
        <a
          href={exploreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 self-start no-underline sm:self-center"
          onClick={() => trackButtonClick(trackId)}
        >
          <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
          {t('home.storiesExploreCta')}
        </a>
      </div>
    </div>
  );
}

function PaginationControls({ page, totalPages, onPrev, onNext, t }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
      <button
        type="button"
        onClick={onPrev}
        disabled={page === 0}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#E4D9C4] bg-white px-4 py-2 text-sm font-medium text-[#3B2F1A] transition enabled:hover:bg-[#F7F3EA] disabled:cursor-not-allowed disabled:opacity-40"
        aria-label={t('home.storiesPrev')}
      >
        <ChevronLeftIcon className="h-4 w-4" aria-hidden />
        {t('home.storiesPrev')}
      </button>

      <div className="flex items-center gap-2" role="tablist" aria-label={t('home.storiesTitle')}>
        {Array.from({ length: totalPages }, (_, i) => {
          const selected = i === page;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={t('home.storiesPageOf')
                .replace('{current}', String(i + 1))
                .replace('{total}', String(totalPages))}
              onClick={() => onNext(i, true)}
              className={`h-2.5 rounded-full transition ${
                selected ? 'w-6 bg-[#3B2F1A]' : 'w-2.5 bg-[#D9DACB] hover:bg-[#C4B89A]'
              }`}
            />
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => onNext()}
        disabled={page >= totalPages - 1}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#E4D9C4] bg-white px-4 py-2 text-sm font-medium text-[#3B2F1A] transition enabled:hover:bg-[#F7F3EA] disabled:cursor-not-allowed disabled:opacity-40"
        aria-label={t('home.storiesNext')}
      >
        {t('home.storiesNext')}
        <ChevronRightIcon className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}

/**
 * Creator story cards. Optional pagination. An Explore Library nudge sits below so
 * scrolling past the walkthroughs leads into the live, evolving catalog.
 * Cover + "Read the story" go to the dedicated story blog; Open hub stays available.
 */
export default function UseCaseStoryCards({
  t,
  compact = false,
  paginated = false,
  exploreHref = 'https://kahana.io/library',
  showExploreNudge = true,
  exploreTrackId = 'home_stories_explore_library',
}) {
  const storyPageCount = Math.max(1, Math.ceil(USE_CASE_STORIES.length / PAGE_SIZE));
  const totalPages = paginated && compact ? storyPageCount : 1;
  const [page, setPage] = useState(0);

  const pageStories = useMemo(() => {
    if (!(paginated && compact)) return USE_CASE_STORIES;
    const start = page * PAGE_SIZE;
    return USE_CASE_STORIES.slice(start, start + PAGE_SIZE);
  }, [paginated, compact, page]);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = (target, absolute = false) => {
    if (absolute && typeof target === 'number') {
      setPage(Math.max(0, Math.min(totalPages - 1, target)));
      return;
    }
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  return (
    <div>
      <ul
        className={`mt-10 grid list-none gap-6 ${compact ? 'lg:grid-cols-3' : 'lg:grid-cols-1'}`}
      >
        {pageStories.map((story) => (
          <li key={story.id}>
            <StoryCard story={story} t={t} compact={compact} />
          </li>
        ))}
      </ul>

      {paginated && compact && totalPages > 1 ? (
        <PaginationControls
          page={page}
          totalPages={totalPages}
          onPrev={goPrev}
          onNext={goNext}
          t={t}
        />
      ) : null}

      {showExploreNudge ? (
        <ExploreLibraryEnd t={t} exploreHref={exploreHref} trackId={exploreTrackId} />
      ) : null}
    </div>
  );
}
