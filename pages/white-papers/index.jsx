import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { getAllWhitePapers, getAllCategories } from '../../data/white-papers-index';
import WhitePaperCard from '../../components/WhitePaperCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import SEO from '../../components/SEO';

export async function getStaticProps() {
  const whitePapers = getAllWhitePapers();
  const categories = getAllCategories();
  
  return {
    props: {
      whitePapers,
      categories,
    },
    revalidate: 3600, // Revalidate every hour
  };
}

export default function WhitePapersIndex({ whitePapers, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter white papers based on category and search query
  const filteredWhitePapers = useMemo(() => {
    return whitePapers.filter(whitePaper => {
      const matchesCategory = selectedCategory === 'All' || whitePaper.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        (whitePaper.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (whitePaper.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (whitePaper.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [whitePapers, selectedCategory, searchQuery]);

  // Get featured white papers
  const featuredWhitePapers = whitePapers.filter(wp => wp.featured);
  const regularWhitePapers = filteredWhitePapers.filter(wp => !wp.featured);

  return (
    <>
      <SEO
        title="White Papers"
        description="Explore Kahana's comprehensive white papers on enterprise browser security, productivity, and technology trends. In-depth research and analysis for business leaders."
        url="https://kahana.com/white-papers"
        type="website"
      />

      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Breadcrumbs 
              items={[
                { name: "Home", url: "/" },
                { name: "White Papers", url: "/white-papers" },
              ]} 
            />
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              White Papers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth research and analysis on enterprise browser security, productivity, and emerging technology trends. 
              Comprehensive insights for business leaders and decision makers.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative w-full max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#21706c] focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-[#21706c] text-white font-bold'
                    : 'bg-white text-[#21706c] font-bold hover:bg-gray-100 border border-[#21706c]'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#21706c] text-white font-bold'
                      : 'bg-white text-[#21706c] font-bold hover:bg-gray-100 border border-[#21706c]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured White Papers */}
          {featuredWhitePapers.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Featured White Papers
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredWhitePapers.map((whitePaper) => (
                  <WhitePaperCard key={whitePaper.slug} whitePaper={whitePaper} />
                ))}
              </div>
            </div>
          )}

          {/* All White Papers */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {selectedCategory === 'All' ? 'All White Papers' : `${selectedCategory} White Papers`}
            </h2>
            
            {regularWhitePapers.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {regularWhitePapers.map((whitePaper) => (
                  <WhitePaperCard key={whitePaper.slug} whitePaper={whitePaper} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No white papers found</h3>
                  <p className="mt-1 text-gray-600">
                    {searchQuery 
                      ? `No white papers match your search for "${searchQuery}".`
                      : `No white papers found in the ${selectedCategory} category.`
                    }
                  </p>
                  {(searchQuery || selectedCategory !== 'All') && (
                    <div className="mt-4">
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('All');
                        }}
                        className="text-[#21706c] hover:text-[#1a5a57] font-medium"
                      >
                        Clear filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-[#21706c] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated with Our Latest Research
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Get notified when we publish new white papers and research insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900 placeholder-gray-500"
                />
                <button className="bg-white text-[#21706c] px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
