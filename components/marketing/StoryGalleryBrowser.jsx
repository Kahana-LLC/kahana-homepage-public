'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { trackButtonClick } from '../../utils/analytics';

function avatarSrc(image) {
  if (!image) return null;
  if (typeof image === 'string') return image;
  if (typeof image === 'object' && image.src) return image.src;
  return null;
}

function matchesQuery(entry, q) {
  if (!q) return true;
  const hay = [
    entry.story.hubTitle,
    entry.story.name,
    entry.story.aka,
    entry.story.persona,
    entry.story.kind,
    entry.story.summary,
    entry.whyItWorks,
    ...(entry.story.categories || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return hay.includes(q);
}

export default function StoryGalleryBrowser({ entries }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const categories = useMemo(() => {
    const set = new Set();
    entries.forEach((entry) => {
      (entry.story.categories || []).forEach((c) => set.add(c));
    });
    return ['all', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [entries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((entry) => {
      if (category !== 'all' && !(entry.story.categories || []).includes(category)) {
        return false;
      }
      return matchesQuery(entry, q);
    });
  }, [entries, query, category]);

  return (
    <div>
      <div className="rounded-[20px] border border-[#E4D9C4] bg-white p-4 sm:p-5">
        <label className="relative block">
          <span className="sr-only">Search creator stories</span>
          <MagnifyingGlassIcon
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8A6622]"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by hub, creator, or niche…"
            className="w-full rounded-xl border border-[#E4D9C4] bg-[#F7F3EA] py-3 pl-11 pr-4 text-base text-[#3B2F1A] outline-none placeholder:text-[#8A9378] focus:border-[#8A6622]"
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2" role="listbox" aria-label="Filter by category">
          {categories.map((cat) => {
            const active = category === cat;
            const label = cat === 'all' ? 'All niches' : cat;
            return (
              <button
                key={cat}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => setCategory(cat)}
                className={
                  active
                    ? 'rounded-full bg-[#3B2F1A] px-3.5 py-1.5 text-sm font-semibold text-[#F7F3EA]'
                    : 'rounded-full bg-[#F7F3EA] px-3.5 py-1.5 text-sm font-semibold text-[#5C4520] hover:bg-[#EDE6D2]'
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-sm text-[#666666]">
        {filtered.length === entries.length
          ? `${filtered.length} hubs`
          : `${filtered.length} of ${entries.length} hubs`}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-lg text-[#5C4520]">
          No hubs match that search. Try another niche, or{' '}
          <button
            type="button"
            className="font-semibold text-[#8A6622] underline underline-offset-2"
            onClick={() => {
              setQuery('');
              setCategory('all');
            }}
          >
            clear filters
          </button>
          .
        </p>
      ) : (
        <ul className="mt-6 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ story, whyItWorks, posts }) => {
            const avatar = avatarSrc(story.image);
            return (
              <li key={story.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white">
                  <a
                    href={story.hubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[16/10] bg-[#EDE6D2] no-underline"
                    onClick={() => trackButtonClick(`story_gallery_cover_${story.id}`)}
                  >
                    {story.coverSrc ? (
                      <Image
                        src={story.coverSrc}
                        alt={story.coverAlt || ''}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : null}
                    <span className="absolute right-3 top-3 rounded-full bg-[#3B2F1A]/90 px-2.5 py-1 text-xs font-semibold text-[#F7F3EA]">
                      {story.price}
                    </span>
                  </a>

                  <div className="flex flex-1 flex-col px-5 py-5">
                    <div className="flex items-center gap-3">
                      {avatar ? (
                        <Image
                          src={avatar}
                          alt=""
                          width={44}
                          height={44}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                      ) : (
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EDE6D2] text-sm font-semibold text-[#8A6622]">
                          {story.initials}
                        </span>
                      )}
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-[#3B2F1A]">
                          {story.name}
                          {story.aka ? ` (${story.aka})` : ''}
                        </p>
                        <p className="truncate text-sm text-[#666666]">{story.persona}</p>
                      </div>
                    </div>

                    <h2 className="mt-4 text-lg font-semibold leading-snug text-[#3B2F1A]">
                      {story.hubTitle}
                    </h2>
                    <p className="mt-1 text-sm font-semibold tracking-wide text-[#8A6622]">
                      {story.kind}
                    </p>

                    <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-xl bg-[#F7F3EA] px-2 py-2.5">
                        <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#8A6622]">
                          Views
                        </dt>
                        <dd className="mt-1 text-sm font-semibold tabular-nums text-[#3B2F1A]">
                          {story.views || '—'}
                        </dd>
                      </div>
                      <div className="rounded-xl bg-[#F7F3EA] px-2 py-2.5">
                        <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#8A6622]">
                          Subscribers
                        </dt>
                        <dd className="mt-1 text-sm font-semibold tabular-nums text-[#3B2F1A]">
                          {story.subscribers || '—'}
                        </dd>
                      </div>
                      <div className="rounded-xl bg-[#F7F3EA] px-2 py-2.5">
                        <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#8A6622]">
                          Price
                        </dt>
                        <dd className="mt-1 text-sm font-semibold tabular-nums text-[#3B2F1A]">
                          {story.price || '—'}
                        </dd>
                      </div>
                    </dl>

                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-[#666666]">
                      {whyItWorks || story.summary}
                    </p>

                    {(story.categories || []).length > 0 ? (
                      <ul className="mt-4 flex list-none flex-wrap gap-1.5 p-0">
                        {story.categories.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-[#EDE6D2] px-2.5 py-0.5 text-xs font-semibold text-[#5C4520]"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-auto pt-5">
                      <a
                        href={story.hubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A6622] no-underline hover:underline"
                        onClick={() => trackButtonClick(`story_gallery_hub_${story.id}`)}
                      >
                        Open the hub
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden />
                      </a>
                      {posts?.length ? (
                        <div className="mt-3 border-t border-[#E4D9C4] pt-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
                            How to build this
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {posts.slice(0, 2).map((post) => (
                              <li key={post.href}>
                                <Link
                                  href={post.href}
                                  className="text-sm font-medium text-[#3B2F1A] underline decoration-[#E4D9C4] underline-offset-2 hover:decoration-[#8A6622]"
                                >
                                  {post.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
