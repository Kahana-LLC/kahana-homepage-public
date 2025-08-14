import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import { blogIndex } from '../../data/blog-index';
import BlogCard from '../../components/BlogCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import { getRandomPhoto, getOptimizedPhotoUrl, getPlaceholderImageUrl } from '../../utils/pexels';
import { suggestNatureImageQuery } from '../../utils/blog-helpers';
import { getAuthorDetails } from '../../utils/authorUtils';

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Get unique categories from blog posts
const getAllCategories = (posts) => {
  if (!Array.isArray(posts)) return [];
  const categories = new Set();
  posts.forEach(post => {
    if (Array.isArray(post.category)) {
      post.category.forEach(cat => categories.add(cat));
    } else if (post.category) {
      categories.add(post.category);
    }
  });
  return Array.from(categories).sort();
};

const POSTS_PER_PAGE = 9;

export default function BlogIndex({ posts = [] }) {
  // Sort posts by date descending
  const sortedPosts = useMemo(
    () => posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date)),
    [posts]
  );

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const categories = ['All', ...getAllCategories(sortedPosts)];

  // Filtered posts based on category and search
  const filteredPosts = useMemo(() => {
    return sortedPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' ||
        (Array.isArray(post.category)
          ? post.category.includes(selectedCategory)
          : post.category === selectedCategory);

      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [sortedPosts, selectedCategory, searchQuery]);

  // Reset to first page when filters change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Calculate pagination values
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Generate page numbers for pagination
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

    for (let i of range) {
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
      <Head>
        <title>Blog | Kahana</title>
        <meta name="description" content="Latest insights and updates from the Kahana team on enterprise browser security, productivity, and technology trends." />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs 
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
            ]} 
          />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kahana Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and updates on enterprise browser security, productivity, and technology trends
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-kahana-accent-water focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
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

        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {currentPosts.map((post) => (
                <BlogCard key={post.slug} post={{ ...post, authors: getAuthorDetails(post.authors) }} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-[#21706c] text-white font-bold hover:bg-[#15514f]'
                  }`}
                >
                  Previous
                </button>

                <div className="flex space-x-2">
                  {getPageNumbers().map((pageNum, index) => (
                    <button
                      key={index}
                      onClick={() => typeof pageNum === 'number' && setCurrentPage(pageNum)}
                      className={`px-4 py-2 rounded-md ${
                        pageNum === currentPage
                          ? 'bg-[#21706c] text-white font-bold'
                          : pageNum === '...'
                          ? 'cursor-default'
                          : 'bg-white text-[#21706c] font-bold hover:bg-gray-100 border border-[#21706c]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-[#21706c] text-white font-bold hover:bg-[#15514f]'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Don't fetch images during build - let them load on-demand
  return {
    props: {
      posts: blogIndex
    },
    revalidate: 3600, // Revalidate every hour
  };
} 