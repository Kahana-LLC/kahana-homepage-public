import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import FaqAccordion from './FaqAccordion';
import {
  FAQ_SECTIONS,
  getAllFaqItems,
  getFaqTeaserItems,
} from '../../data/platformFaq';

const PAGE_SIZE = 8;

function matchesQuery(item, query) {
  if (!query) return true;
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
  );
}

function FaqHomeTeaser() {
  return (
    <div className="w-full max-w-3xl">
      <FaqAccordion key="home-teaser" items={getFaqTeaserItems()} />
      <p className="mt-6">
        <Link
          href="/faq"
          className="text-base font-medium text-[#8A6622] no-underline hover:text-[#5C4520]"
        >
          See all FAQs
        </Link>
      </p>
    </div>
  );
}

/**
 * Searchable FAQ browser.
 * @param {{ variant?: 'page' | 'home' }} props
 */
export default function FaqBrowse({ variant = 'page' }) {
  if (variant === 'home') {
    return <FaqHomeTeaser />;
  }

  return <FaqBrowsePage />;
}

function FaqBrowsePage() {
  const searchId = 'faq-search';
  const [query, setQuery] = useState('');
  const [topicId, setTopicId] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && FAQ_SECTIONS.some((s) => s.id === hash)) {
      setTopicId(hash);
    }
  }, []);

  const filtered = useMemo(() => {
    const source =
      topicId !== 'all'
        ? FAQ_SECTIONS.find((s) => s.id === topicId)?.items || []
        : getAllFaqItems();
    return source.filter((item) => matchesQuery(item, query));
  }, [query, topicId]);

  const showPager = filtered.length > PAGE_SIZE;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = showPager ? Math.min(page, totalPages) : 1;
  const pageItems = showPager
    ? filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
    : filtered;

  useEffect(() => {
    setPage(1);
  }, [query, topicId]);

  const selectTopic = (id) => {
    setTopicId(id);
    if (typeof window !== 'undefined') {
      const next = id === 'all' ? '/faq' : `/faq#${id}`;
      window.history.replaceState(null, '', next);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <label htmlFor={searchId} className="sr-only">
        Search FAQs
      </label>
      <input
        id={searchId}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search questions and answers"
        className="w-full rounded-full border border-[#E4D9C4] bg-white px-5 py-3 text-base text-[#3B2F1A] placeholder:text-[#5C4520]/60 focus:border-[#8A6622] focus:outline-none focus:ring-2 focus:ring-[#8A6622]/30"
      />

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="FAQ topics">
        <button
          type="button"
          onClick={() => selectTopic('all')}
          className={`faq-topic-chip rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6622] ${
            topicId === 'all'
              ? 'faq-topic-chip--active bg-[#3B2F1A] text-[#F7F3EA]'
              : 'bg-[#D9DACB] text-[#4F5140] hover:bg-[#C5C6B5]'
          }`}
        >
          All
        </button>
        {FAQ_SECTIONS.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => selectTopic(section.id)}
            className={`faq-topic-chip rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6622] ${
              topicId === section.id
                ? 'faq-topic-chip--active bg-[#3B2F1A] text-[#F7F3EA]'
                : 'bg-[#D9DACB] text-[#4F5140] hover:bg-[#C5C6B5]'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-[#5C4520]" aria-live="polite">
        {filtered.length === 0
          ? 'No matches'
          : `${filtered.length} result${filtered.length === 1 ? '' : 's'}`}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-6 text-base text-[#5C4520]">
          No matches. Try another term or clear filters.
        </p>
      ) : (
        <>
          <div className="mt-4">
            <FaqAccordion
              key={`${topicId}-${safePage}-${query}`}
              items={pageItems}
            />
          </div>

          {showPager && totalPages > 1 && (
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="btn-secondary inline-flex items-center justify-center no-underline disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <p className="text-sm font-medium text-[#5C4520]">
                Page {safePage} of {totalPages}
              </p>
              <button
                type="button"
                disabled={safePage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="btn-secondary inline-flex items-center justify-center no-underline disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
