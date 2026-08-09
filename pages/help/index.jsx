import React, { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllDocsMetadata } from '../../utils/docsUtils';
import DocCard from '../../components/DocCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import SEO from '../../components/SEO';
import { getCategoryDisplayName } from '../../config/docsConfig';
const DOCS_PER_PAGE = 9;

export async function getStaticProps() {
  const docs = await getAllDocsMetadata();
  const categories = [...new Set(docs.map(doc => doc.category))].sort();
  
  return {
    props: {
      docs,
      categories,
    },
  };
}

export default function HelpIndex({ docs = [], categories = [] }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const docList = Array.isArray(docs) ? docs : [];
  const categoryList = Array.isArray(categories) ? categories : [];

  const filteredDocs = useMemo(() => {
    return docList.filter((doc) => {
      const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        (doc.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [docList, activeCategory, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    const tp = Math.max(1, Math.ceil(filteredDocs.length / DOCS_PER_PAGE));
    setCurrentPage((p) => Math.min(p, tp));
  }, [filteredDocs.length]);

  const totalPages = Math.max(1, Math.ceil(filteredDocs.length / DOCS_PER_PAGE));
  const startIndex = (currentPage - 1) * DOCS_PER_PAGE;
  const paginatedDocs = filteredDocs.slice(startIndex, startIndex + DOCS_PER_PAGE);

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

  return (
    <>
      <SEO
        title="Help"
        description="Guides and answers for the Aura Library platform—hubs, Explore, Aura, and more. New articles are added as product help ships."
        url="https://help.kahana.io/help"
        type="website"
      />

      <div className="min-h-screen bg-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs - same as blog */}
          <div className="mb-8">
            <Breadcrumbs 
              items={[
                { name: "Home", url: "/" },
                { name: "Help", url: "/help" },
              ]} 
            />
          </div>

          {/* Header - same as blog */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-oasis-green-900 mb-4">
              Help
            </h1>
            <p className="text-xl text-oasis-green-800 max-w-2xl mx-auto">
              Search guides for Aura Library: hubs, Explore, Aura, profiles, earning, and trust. New articles land here as they ship.
            </p>
          </div>

          {docList.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-oasis-green-900 mb-2">
                New Aura Library platform help coming soon
              </h3>
              <p className="text-oasis-green-800 max-w-xl mx-auto">
                We’re adding more Aura Library library guides. For now, see{' '}
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
          {/* Search Bar - same full-width style as blog */}
          <div className="mb-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-oasis-green-600 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filters - same button style as blog */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`btn-sm transition-colors ${
                  activeCategory === 'all' ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                All
              </button>
                  {categoryList.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`btn-sm transition-colors capitalize ${
                    activeCategory === category ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {getCategoryDisplayName(category)}
                </button>
              ))}
            </div>
          </div>

          {/* Help Grid - same gap as blog */}
          {filteredDocs.length > 0 ? (
            <>
              <p className="text-sm text-oasis-green-800/90 mb-4 text-center sm:text-left">
                Showing {startIndex + 1}–{Math.min(startIndex + DOCS_PER_PAGE, filteredDocs.length)} of{' '}
                {filteredDocs.length} article{filteredDocs.length === 1 ? '' : 's'}
              </p>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {paginatedDocs.map((doc) => (
                  <DocCard key={doc.slug || doc.title} doc={doc} />
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
                        type="button"
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-oasis-green-900 mb-2">No help articles found</h3>
              <p className="text-oasis-green-800">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
            </div>
          )}
            </>
          )}
        </main>
      </div>
    </>
  );
}
