import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { blogIndex } from '../../data/blog-index';
import BlogCard from '../../components/BlogCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import { searchPhotos } from '../../utils/pexels';
import { suggestNatureImageQuery } from '../../utils/blog-helpers';

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Get unique categories from blog posts
const getAllCategories = () => {
  const categories = new Set();
  blogIndex.forEach(post => {
    if (Array.isArray(post.category)) {
      post.category.forEach(cat => categories.add(cat));
    } else if (post.category) {
      categories.add(post.category);
    }
  });
  return Array.from(categories).sort();
};

const POSTS_PER_PAGE = 9;

export default function BlogIndex({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const categories = ['All', ...getAllCategories()];

  useEffect(() => {
    const filtered = posts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || 
        (Array.isArray(post.category) ? 
          post.category.includes(selectedCategory) : 
          post.category === selectedCategory);

      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchQuery, posts]);

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

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-kahana-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                <BlogCard key={post.slug} post={post} />
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
                      : 'bg-kahana-primary text-white hover:bg-kahana-primary-dark'
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
                          ? 'bg-kahana-primary text-white'
                          : pageNum === '...'
                          ? 'cursor-default'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                      : 'bg-kahana-primary text-white hover:bg-kahana-primary-dark'
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
  try {
    // Step 1: Gather all unique search terms
    const searchTerms = new Set();
    blogIndex.forEach(post => {
      if (post.defaultImageQuery) searchTerms.add(post.defaultImageQuery);
      if (Array.isArray(post.category)) {
        post.category.forEach(cat => searchTerms.add(`${cat} technology security`));
      } else if (post.category) {
        searchTerms.add(`${post.category} technology security`);
      }
      // Add first 3 words of title as a search term
      searchTerms.add(post.title.split(' ').slice(0, 3).join(' '));
    });

    // Step 2: Create an image pool by fetching images for all search terms
    const imagePool = new Map();
    await Promise.all(Array.from(searchTerms).map(async (term) => {
      try {
        const photos = await searchPhotos(term, {
          per_page: 15,
          orientation: 'landscape'
        });
        if (photos && photos.length > 0) {
          photos.forEach(photo => {
            const imageUrl = photo.src.large2x || photo.src.large || photo.src.original;
            if (!imagePool.has(imageUrl)) {
              imagePool.set(imageUrl, {
                url: imageUrl,
                quality: (photo.width / photo.height - 1.5) ** 2 + (photo.rating || 0),
                relevance: {}, // Will store relevance scores for each post
              });
            }
          });
        }
      } catch (error) {
        console.error(`Error fetching images for term "${term}":`, error);
      }
    }));

    // Step 3: Calculate relevance scores for each image-post pair
    const availableImages = Array.from(imagePool.values());
    const postsNeedingImages = blogIndex.filter(post => !post.image);

    postsNeedingImages.forEach(post => {
      const postTerms = [
        post.defaultImageQuery,
        Array.isArray(post.category) ? post.category.join(' ') : post.category,
        post.title.split(' ').slice(0, 3).join(' ')
      ].filter(Boolean).join(' ').toLowerCase();

      availableImages.forEach(image => {
        // Calculate relevance score based on search term matches
        let relevanceScore = 0;
        postTerms.split(' ').forEach(term => {
          if (term.length > 3) { // Only consider meaningful terms
            const termRegex = new RegExp(term, 'i');
            if (image.url.match(termRegex)) {
              relevanceScore += 1;
            }
          }
        });
        image.relevance[post.slug] = relevanceScore;
      });
    });

    // Step 4: Assign images to posts using Hungarian algorithm (maximize total relevance)
    const assignments = new Map();
    const usedImages = new Set();

    // Sort posts by most specific requirements first
    postsNeedingImages.sort((a, b) => {
      const aTerms = [a.defaultImageQuery, a.category].filter(Boolean).length;
      const bTerms = [b.defaultImageQuery, b.category].filter(Boolean).length;
      return bTerms - aTerms;
    });

    // Assign images to posts
    postsNeedingImages.forEach(post => {
      const availableImagesForPost = availableImages
        .filter(image => !usedImages.has(image.url))
        .sort((a, b) => {
          // Sort by combination of quality and relevance
          const scoreA = a.quality + (a.relevance[post.slug] * 2);
          const scoreB = b.quality + (b.relevance[post.slug] * 2);
          return scoreB - scoreA;
        });

      if (availableImagesForPost.length > 0) {
        const selectedImage = availableImagesForPost[0];
        assignments.set(post.slug, selectedImage.url);
        usedImages.add(selectedImage.url);
      }
    });

    // Step 5: Create final posts array with assigned images
    const postsWithImages = blogIndex.map(post => {
      if (post.image) {
        return post;
      }
      return {
        ...post,
        image: assignments.get(post.slug) || DEFAULT_PLACEHOLDER
      };
    });

    return {
      props: {
        posts: postsWithImages
      },
      revalidate: process.env.NODE_ENV === 'development' ? 60 : 86400,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        posts: blogIndex.map(post => ({
          ...post,
          image: DEFAULT_PLACEHOLDER
        }))
      },
      revalidate: process.env.NODE_ENV === 'development' ? 60 : 86400,
    };
  }
} 