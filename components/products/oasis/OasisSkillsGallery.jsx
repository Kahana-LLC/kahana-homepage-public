import React, { useEffect, useId, useMemo, useState } from 'react';
import { oasisSkillsCatalog, getOasisSkillCategories } from '../../../data/oasisSkillsCatalog';
import { searchOasisSkills } from './oasisSkillsSearch';

const DEFAULT_PAGE_SIZE = 6;

const STARTER_QUERIES = [
  'Find an article I read last week',
  'Summarize this page',
  'Add this tab to a research group',
  'What tabs do I have open?',
  'Search my history for that docs link',
];

function SkillCard({ skill }) {
  return (
    <article
      className="flex h-full flex-col rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 p-5 shadow-sm transition-shadow hover:shadow-md"
      aria-labelledby={`${skill.id}-title`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#7a9200]">{skill.category}</p>
      <h3 id={`${skill.id}-title`} className="mt-1 text-lg font-semibold text-oasis-green-800">
        {skill.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-oasis-green-800/90 leading-relaxed">{skill.description}</p>
      {skill.platformNotes && (
        <p className="mt-2 text-xs text-oasis-green-800/75 italic">{skill.platformNotes}</p>
      )}
      <div className="mt-4 border-t border-oasis-green-800/10 pt-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-oasis-green-800/60 mb-2">Example prompts</p>
        <ul className="flex flex-wrap gap-2">
          {skill.examplePrompts.map((ex) => (
            <li
              key={ex}
              className="rounded-full border border-[#7a9200]/35 bg-white px-3 py-1 text-xs text-[#2f3a20]"
            >
              {ex}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/**
 * Searchable/filterable gallery of Oasis assistant capabilities (static catalog).
 */
export function OasisSkillsGallery({
  skills = oasisSkillsCatalog,
  className = '',
  id = 'oasis-skills-gallery',
  pageSize = DEFAULT_PAGE_SIZE,
}) {
  const baseId = useId();
  const searchId = `${baseId}-search`;
  const filterLegendId = `${baseId}-filters`;
  const paginationNavId = `${baseId}-pagination`;

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);

  const categories = useMemo(() => getOasisSkillCategories(skills), [skills]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) {
      let list = skills;
      if (category && category !== 'all') {
        list = skills.filter((s) => s.category === category);
      }
      return list.map((skill) => ({ skill, score: 0 }));
    }
    return searchOasisSkills(skills, { query: q, category: category === 'all' ? null : category });
  }, [skills, query, category]);

  const showEmpty = query.trim().length > 0 && results.length === 0;

  const totalPages = useMemo(() => {
    if (results.length === 0) return 1;
    return Math.ceil(results.length / pageSize);
  }, [results.length, pageSize]);

  useEffect(() => {
    setPage(1);
  }, [query, category, skills]);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const safePage = Math.min(Math.max(1, page), totalPages);
  const pageSlice = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return results.slice(start, start + pageSize);
  }, [results, safePage, pageSize]);

  const showPagination = !showEmpty && results.length > pageSize;

  return (
    <div className={className} id={id}>
      <p className="text-sm font-medium text-oasis-green-800 mb-2">What can Oasis do?</p>
      <p className="text-sm text-oasis-green-800/85 mb-4 max-w-2xl">
        Search in plain language to match ideas like &quot;that article from Tuesday&quot; or &quot;clean up my
        tabs&quot;, then browse example prompts for each area.
      </p>

      <div className="mb-4">
        <label htmlFor={searchId} className="sr-only">
          Search commands and skills
        </label>
        <div className="relative max-w-xl">
          <input
            id={searchId}
            type="search"
            autoComplete="off"
            placeholder="Try: find something I read about remote work…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-oasis-green-800/20 bg-white px-4 py-3 pr-11 text-sm text-[#2f3a20] shadow-sm placeholder:text-oasis-green-800/45 focus:border-[#7a9200]/55 focus:outline-none focus:ring-2 focus:ring-[#7a9200]/25"
          />
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-oasis-green-800/55" aria-hidden>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold text-oasis-green-800/70 mb-2">Try asking</p>
        <div className="flex flex-wrap gap-2">
          {STARTER_QUERIES.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => setQuery(q)}
              className="rounded-full border border-[#7a9200]/35 bg-white px-3 py-1.5 text-left text-xs font-medium text-[#2f3a20] hover:bg-[#f2f4e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a9200]"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8" role="group" aria-labelledby={filterLegendId}>
        <p id={filterLegendId} className="text-xs font-semibold text-oasis-green-800/70 mb-2">
          Filter by category
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={category === 'all'}
            onClick={() => setCategory('all')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a9200] ${
              category === 'all' ? 'bg-[#7a9200] text-white' : 'bg-white text-oasis-green-800 border border-oasis-green-800/15 hover:bg-oasis-green-50'
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a9200] ${
                category === c ? 'bg-[#7a9200] text-white' : 'bg-white text-oasis-green-800 border border-oasis-green-800/15 hover:bg-oasis-green-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {showEmpty ? (
        <div
          className="rounded-xl border border-dashed border-oasis-green-800/25 bg-white p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-base font-semibold text-oasis-green-800 mb-2">No strong matches yet</p>
          <p className="text-sm text-oasis-green-800/85 mb-4 max-w-lg mx-auto">
            Try a shorter phrase, pick a category above, or use one of the starter searches. This list is illustrative; not
            every phrasing maps 1:1 to a shipped tool.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              className="rounded-full border border-oasis-green-800/20 bg-oasis-green-50 px-4 py-2 text-sm font-semibold text-oasis-green-800 hover:bg-[#eef1e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a9200]"
              onClick={() => {
                setQuery('');
                setCategory('all');
                setPage(1);
              }}
            >
              Clear search and filters
            </button>
          </div>
        </div>
      ) : (
        <>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 list-none p-0 m-0">
            {pageSlice.map(({ skill }) => (
              <li key={skill.id}>
                <SkillCard skill={skill} />
              </li>
            ))}
          </ul>
          {showPagination && (
            <nav
              id={paginationNavId}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between"
              aria-label="Skills results pages"
            >
              <p className="text-sm text-oasis-green-800/80">
                Showing {(safePage - 1) * pageSize + 1}–{Math.min(safePage * pageSize, results.length)} of{' '}
                {results.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={safePage <= 1}
                  className="rounded-full border border-oasis-green-800/20 bg-white px-4 py-2 text-sm font-semibold text-oasis-green-800 hover:bg-oasis-green-50 disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a9200]"
                >
                  Previous
                </button>
                <span className="text-sm tabular-nums text-oasis-green-800/90 px-2">
                  Page {safePage} of {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage >= totalPages}
                  className="rounded-full border border-oasis-green-800/20 bg-white px-4 py-2 text-sm font-semibold text-oasis-green-800 hover:bg-oasis-green-50 disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a9200]"
                >
                  Next
                </button>
              </div>
            </nav>
          )}
        </>
      )}
    </div>
  );
}
