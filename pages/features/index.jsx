import React, { useEffect, useMemo, useState } from 'react';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import KahanaFeatureCard from '../../components/features/KahanaFeatureCard';
import { APP_URL } from '../../components/nav/navConfig';
import {
  FEATURES_PER_PAGE,
  getKahanaFeatureCategories,
  getKahanaFeaturesSorted,
} from '../../data/kahanaFeaturesCatalog';
import { trackButtonClick } from '../../utils/analytics';

const EXPLORE_URL = `${APP_URL}/explore`;
const CANONICAL = 'https://about.kahana.io/features';
const DEFAULT_FEATURES = getKahanaFeaturesSorted();
const DEFAULT_CATEGORIES = getKahanaFeatureCategories();

export async function getStaticProps() {
  return {
    props: {
      features: DEFAULT_FEATURES,
      categories: DEFAULT_CATEGORIES,
    },
  };
}

function PrimaryCta() {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
      onClick={() => trackButtonClick('features_create')}
    >
      <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
      Create
    </a>
  );
}

function ExploreCta() {
  return (
    <a
      href={EXPLORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
    >
      <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
      Explore
    </a>
  );
}

export default function FeaturesPage({
  features = DEFAULT_FEATURES,
  categories = DEFAULT_CATEGORIES,
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const featureList = Array.isArray(features) ? features : DEFAULT_FEATURES;
  const categoryList = Array.isArray(categories) ? categories : DEFAULT_CATEGORIES;

  const filteredFeatures = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return featureList.filter((feature) => {
      const matchesCategory = activeCategory === 'all' || feature.category === activeCategory;
      const matchesSearch =
        q === '' ||
        (feature.title || '').toLowerCase().includes(q) ||
        (feature.excerpt || '').toLowerCase().includes(q) ||
        (feature.searchText || '').toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [featureList, activeCategory, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    const total = Math.max(1, Math.ceil(filteredFeatures.length / FEATURES_PER_PAGE));
    setCurrentPage((p) => Math.min(p, total));
  }, [filteredFeatures.length]);

  const totalPages = Math.max(1, Math.ceil(filteredFeatures.length / FEATURES_PER_PAGE));
  const startIndex = (currentPage - 1) * FEATURES_PER_PAGE;
  const paginatedFeatures = filteredFeatures.slice(startIndex, startIndex + FEATURES_PER_PAGE);

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
        title="Features | Kahana"
        description="Explore hubs, contribute digital artifacts, give Aura so quality rises, and turn on paid access later if you want."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F8FAF2] text-[#313A00]">
        <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                What Kahana includes
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#495800] sm:text-xl">
                Discovery, curated hubs, and community signal, so shared knowledge is easy to find
                in one place. Earning from access is optional, and came later by request.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryCta />
                <ExploreCta />
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <FadeInSection>
              <div className="mb-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-[#313A00]/20 bg-white px-4 py-3 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7a9200]"
                    aria-label="Search features"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-[#666666]" aria-hidden />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex flex-wrap gap-2" role="group" aria-label="Feature categories">
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
                      className={`btn-sm transition-colors ${
                        activeCategory === category ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {filteredFeatures.length > 0 ? (
                <>
                  <p className="mb-4 text-center text-sm text-[#495800] sm:text-left">
                    Showing {startIndex + 1}–
                    {Math.min(startIndex + FEATURES_PER_PAGE, filteredFeatures.length)} of{' '}
                    {filteredFeatures.length} feature
                    {filteredFeatures.length === 1 ? '' : 's'}
                  </p>
                  <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {paginatedFeatures.map((feature) => (
                      <KahanaFeatureCard key={feature.slug} feature={feature} />
                    ))}
                  </div>

                  {totalPages > 1 ? (
                    <nav
                      className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row"
                      aria-label="Feature pages"
                    >
                      <button
                        type="button"
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className={`rounded-md px-4 py-2 ${
                          currentPage === 1
                            ? 'cursor-not-allowed bg-white/60 text-[#666666]/50'
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
                            className={`min-w-[2.5rem] rounded-md px-4 py-2 ${
                              pageNum === currentPage
                                ? 'btn-primary'
                                : pageNum === '...'
                                  ? 'btn-tertiary btn-sm pointer-events-none !rounded-md !px-3 !py-2 cursor-default'
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
                        className={`rounded-md px-4 py-2 ${
                          currentPage === totalPages
                            ? 'cursor-not-allowed bg-white/60 text-[#666666]/50'
                            : 'btn-primary'
                        }`}
                      >
                        Next
                      </button>
                    </nav>
                  ) : null}
                </>
              ) : (
                <div className="py-12 text-center">
                  <h3 className="mb-2 text-lg font-medium text-[#313A00]">No features found</h3>
                  <p className="text-[#666666]">
                    Try adjusting your search or filter to find what you&apos;re looking for.
                  </p>
                </div>
              )}
            </FadeInSection>
          </div>
        </section>

        <section className="bg-[#313A00] px-6 py-20 text-[#F8FAF2] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F8FAF2] sm:text-4xl">
                Contribute what you know
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#F8FAF2]/85">
                Share on any topic. Get discovered. Help others learn.
              </p>
              <div className="mt-10 flex justify-center">
                <PrimaryCta />
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
