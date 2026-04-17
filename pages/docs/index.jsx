import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { getAllDocsMetadata } from '../../utils/docsUtils';
import DocCard from '../../components/DocCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import SEO from '../../components/SEO';

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

export default function DocsIndex({ docs, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter docs based on category and search query
  const filteredDocs = useMemo(() => {
    return docs.filter(doc => {
      const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        (doc.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [docs, activeCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Documentation"
        description="Browse Kahana's documentation to learn about features, security, and best practices."
        url="https://kahana.co/docs"
        type="website"
      />

      <div className="min-h-screen bg-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs - same as blog */}
          <div className="mb-8">
            <Breadcrumbs 
              items={[
                { name: "Home", url: "/" },
                { name: "Documentation", url: "/docs" },
              ]} 
            />
          </div>

          {/* Header - same as blog */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-oasis-green-900 mb-4">
              Documentation
            </h1>
            <p className="text-xl text-oasis-green-800 max-w-2xl mx-auto">
              Learn how to use Kahana&apos;s features, understand our security measures, and follow best practices for your team.
            </p>
          </div>

          {/* Search Bar - same full-width style as blog */}
          <div className="mb-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-kahana-accent-water focus:border-transparent"
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
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`btn-sm transition-colors capitalize ${
                    activeCategory === category ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Documentation Grid - same gap as blog */}
          {filteredDocs.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {filteredDocs.map((doc) => (
                  <DocCard key={doc.slug} doc={doc} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-oasis-green-900 mb-2">No documentation found</h3>
              <p className="text-oasis-green-800">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </main>
      </div>
    </>
  );
} 