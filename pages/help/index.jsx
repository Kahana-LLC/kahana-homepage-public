import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChatBubbleLeftRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { getAllDocsMetadata } from '../../utils/docsUtils';
import DocCard from '../../components/DocCard';
import LibraryMission from '../../components/marketing/LibraryMission';
import Breadcrumbs from '../../components/Breadcrumbs';
import SEO from '../../components/SEO';
import HelpFilterBar from '../../components/help/HelpFilterBar';
import { CONTACT_URL } from '../../components/nav/navConfig';
import { withProductUtm } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';
import {
  FEATURES,
  getPersona,
  parseTaxonomyTag,
  personaChipLabel,
  selectHelpDocs,
} from '../../data/marketingTaxonomy';
import { MARKETING_HOME_URL } from '../../lib/marketingHome';

const HELP_CONTACT_HREF = withProductUtm(`${CONTACT_URL}?source=help`, {
  campaign: 'help_contact',
});
const HELP_SUPPORT_HREF = withProductUtm('https://kahana.io/support', {
  campaign: 'help_support',
});

const DOCS_PER_PAGE = 9;

function tagFromQuery(query) {
  if (typeof query.for === 'string' && query.for) return `persona:${query.for}`;
  if (typeof query.use === 'string' && query.use) return `use-case:${query.use}`;
  if (typeof query.feature === 'string' && query.feature) return `feature:${query.feature}`;
  return '';
}

export async function getStaticProps() {
  const docs = await getAllDocsMetadata();
  return {
    props: {
      docs,
    },
  };
}

export default function HelpIndex({ docs = [] }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('all');
  const [activeTag, setActiveTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const didInitQuery = useRef(false);
  const skipNextQueryWrite = useRef(true);
  const allowUrlClear = useRef(false);
  const searchInputRef = useRef(null);
  const routerRef = useRef(router);
  routerRef.current = router;

  const handleSearchChange = (value) => {
    allowUrlClear.current = true;
    setSearchQuery(value);
  };

  const docList = Array.isArray(docs) ? docs : [];
  const parsedTag = parseTaxonomyTag(activeTag);
  const selectedPersona = parsedTag?.kind === 'persona' ? getPersona(parsedTag.slug) : null;

  useEffect(() => {
    if (!router.isReady) return;
    const { q, section } = router.query;
    const nextQuery = typeof q === 'string' ? q : '';
    const nextSection = typeof section === 'string' && section ? section : 'all';
    const nextTag = tagFromQuery(router.query);
    if (!didInitQuery.current) {
      didInitQuery.current = true;
      skipNextQueryWrite.current = true;
      if (nextQuery) setSearchQuery(nextQuery);
      if (nextSection !== 'all') setActiveSection(nextSection);
      if (nextTag) setActiveTag(nextTag);
      return;
    }
    const input = searchInputRef.current;
    if (input && document.activeElement === input) return;
    setSearchQuery((current) => (current === nextQuery ? current : nextQuery));
    setActiveSection((current) => (current === nextSection ? current : nextSection));
    setActiveTag((current) => (current === nextTag ? current : nextTag));
  }, [router.isReady, router.query]);

  useEffect(() => {
    const liveRouter = routerRef.current;
    if (!didInitQuery.current || !liveRouter.isReady) return undefined;
    if (skipNextQueryWrite.current) {
      skipNextQueryWrite.current = false;
      return undefined;
    }
    const handle = window.setTimeout(() => {
      const nextTag = parseTaxonomyTag(activeTag);
      const query = {};
      if (searchQuery.trim()) query.q = searchQuery.trim();
      if (activeSection !== 'all') query.section = activeSection;
      if (nextTag?.kind === 'persona') query.for = nextTag.slug;
      if (nextTag?.kind === 'use-case') query.use = nextTag.slug;
      if (nextTag?.kind === 'feature') query.feature = nextTag.slug;
      const routeQuery = routerRef.current.query;
      const current = {
        q: typeof routeQuery.q === 'string' ? routeQuery.q : undefined,
        section: typeof routeQuery.section === 'string' ? routeQuery.section : undefined,
        for: typeof routeQuery.for === 'string' ? routeQuery.for : undefined,
        use: typeof routeQuery.use === 'string' ? routeQuery.use : undefined,
        feature: typeof routeQuery.feature === 'string' ? routeQuery.feature : undefined,
      };
      const same =
        current.q === query.q &&
        current.section === query.section &&
        current.for === query.for &&
        current.use === query.use &&
        current.feature === query.feature;
      if (same) return;
      if (!query.q && current.q && !allowUrlClear.current) return;
      const input = searchInputRef.current;
      const hadFocus = Boolean(input && document.activeElement === input);
      const caret = hadFocus ? input.selectionStart : null;
      routerRef.current.replace({ pathname: '/help', query }, undefined, {
        shallow: true,
        scroll: false,
      }).finally(() => {
        const node = searchInputRef.current;
        if (!hadFocus || !node) return;
        node.focus({ preventScroll: true });
        if (typeof caret === 'number') {
          const pos = Math.min(caret, node.value.length);
          node.setSelectionRange(pos, pos);
        }
      });
    }, searchQuery ? 350 : 0);
    return () => window.clearTimeout(handle);
  }, [activeSection, activeTag, searchQuery]);

  const helpSelection = useMemo(
    () => selectHelpDocs(docList, {
      section: activeSection,
      tag: activeTag,
      query: searchQuery,
    }),
    [docList, activeSection, activeTag, searchQuery],
  );
  const filteredDocs = helpSelection.docs;

  useEffect(() => {
    setCurrentPage(1);
  }, [activeSection, activeTag, searchQuery]);

  useEffect(() => {
    const tp = Math.max(1, Math.ceil(filteredDocs.length / DOCS_PER_PAGE));
    setCurrentPage((p) => Math.min(p, tp));
  }, [filteredDocs.length]);

  const totalPages = Math.max(1, Math.ceil(filteredDocs.length / DOCS_PER_PAGE));
  const startIndex = (currentPage - 1) * DOCS_PER_PAGE;
  const paginatedDocs = filteredDocs.slice(startIndex, startIndex + DOCS_PER_PAGE);
  const hasFilters = activeSection !== 'all' || Boolean(activeTag) || Boolean(searchQuery.trim());

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    range.push(1);
    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i < totalPages && i > 1) {
        range.push(i);
      }
    }
    if (totalPages > 1) {
      range.push(totalPages);
    }
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  };

  const relatedFeatureLinks = (selectedPersona?.features || [])
    .map((slug) => FEATURES.find((feature) => feature.slug === slug))
    .filter(Boolean);

  return (
    <>
      <SEO
        title="Help"
        description="Guides and answers for Kahana: hubs, Library, Clubs, Aura, and more. New articles are added as product help ships."
        url="https://help.kahana.io/help"
        type="website"
      />

      <div className="min-h-screen bg-[#F7F3EA]">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <Breadcrumbs
              items={[
                { name: "Home", url: MARKETING_HOME_URL },
                { name: "Help", url: "/help" },
              ]}
            />
            <a
              href={MARKETING_HOME_URL}
              className="text-sm font-semibold text-[#8A6622] no-underline hover:underline"
            >
              Kahana home
            </a>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-oasis-green-900 mb-4">
              Help
            </h1>
            <p className="text-xl text-oasis-green-800 max-w-2xl mx-auto">
              Search guides, then filter by who you are or what you are trying to do.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={HELP_CONTACT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                onClick={() => trackButtonClick('help_contact')}
              >
                <EnvelopeIcon className="h-5 w-5 shrink-0" aria-hidden />
                Contact us
              </a>
              <a
                href={HELP_SUPPORT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
                onClick={() => trackButtonClick('help_support')}
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5 shrink-0" aria-hidden />
                Support
              </a>
            </div>
          </div>

          {docList.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-oasis-green-900 mb-2">
                New Kahana platform help coming soon
              </h3>
              <p className="text-oasis-green-800 max-w-xl mx-auto">
                We’re adding more Kahana library guides. For now, see{' '}
                <Link href="/faq" className="font-semibold text-brand-link no-underline hover:underline">
                  FAQ
                </Link>
                {' '}or{' '}
                <Link href="/support" className="font-semibold text-brand-link no-underline hover:underline">
                  Support
                </Link>
                .
              </p>
            </div>
          ) : (
            <>
          <HelpFilterBar
            section={activeSection}
            onSectionChange={setActiveSection}
            tag={activeTag}
            onTagChange={setActiveTag}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            searchInputRef={searchInputRef}
          />

          {selectedPersona ? (
            <p className="help-for-you">
              Guides for {personaChipLabel(selectedPersona).toLowerCase()}. Start with{' '}
              {relatedFeatureLinks.map((feature, index) => (
                <span key={feature.slug}>
                  {index > 0 ? ' · ' : null}
                  <Link href={`/features/${feature.slug}`} className="font-semibold text-brand-link no-underline hover:underline">
                    {feature.title}
                  </Link>
                </span>
              ))}
              {relatedFeatureLinks.length ? ' · ' : null}
              <Link href={`/for/${selectedPersona.slug}`} className="font-semibold text-brand-link no-underline hover:underline">
                {selectedPersona.title}
              </Link>
            </p>
          ) : (
            <p className="help-for-you">
              Also see{' '}
              <Link href="/features" className="font-semibold text-brand-link no-underline hover:underline">
                Features
              </Link>
              {', '}
              <Link href="/for" className="font-semibold text-brand-link no-underline hover:underline">
                who Kahana is for
              </Link>
              {', and '}
              <Link href="/use-cases" className="font-semibold text-brand-link no-underline hover:underline">
                use cases
              </Link>
              .
            </p>
          )}

          {filteredDocs.length > 0 ? (
            <>
              <p className="text-sm text-oasis-green-800/90 mb-4 text-center sm:text-left">
                {helpSelection.relaxed
                  ? 'Closest guides for that search. '
                  : null}
                Showing {startIndex + 1}–{Math.min(startIndex + DOCS_PER_PAGE, filteredDocs.length)} of{' '}
                {filteredDocs.length} article{filteredDocs.length === 1 ? '' : 's'}
                {hasFilters ? (
                  <>
                    {' · '}
                    <button
                      type="button"
                      className="help-clear-filters"
                      onClick={() => {
                        allowUrlClear.current = true;
                        setActiveSection('all');
                        setActiveTag('');
                        setSearchQuery('');
                      }}
                    >
                      Clear filters
                    </button>
                  </>
                ) : null}
              </p>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {paginatedDocs.map((doc) => (
                  <DocCard key={doc.slug || doc.title} doc={doc} compact />
                ))}
              </div>

              {totalPages > 1 && (
                <nav
                  className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4"
                  aria-label="Help pages"
                >
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                  >
                    Previous
                  </button>

                  <div className="flex flex-wrap justify-center gap-2">
                    {getPageNumbers().map((pageNum, index) => (
                      <button
                        key={`${pageNum}-${index}`}
                        onClick={() => typeof pageNum === 'number' && setCurrentPage(pageNum)}
                        disabled={pageNum === '...'}
                        className={`px-4 py-2 rounded-md min-w-[2.5rem] ${
                          pageNum === currentPage
                            ? 'btn-primary'
                            : pageNum === '...'
                              ? 'btn-tertiary btn-sm !rounded-md cursor-default pointer-events-none !px-3 !py-2'
                              : 'btn-secondary'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                  >
                    Next
                  </button>
                </nav>
              )}
            </>
          ) : null}
            </>
          )}
        </main>
        <LibraryMission />
      </div>
    </>
  );
}
