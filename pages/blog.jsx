import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import { getRandomPhoto, getOptimizedPhotoUrl } from '../utils/pexels';
import { authors } from '../config/authors';
import { getAuthorHeadshot } from '../utils/blog-utils';

// Function to convert author name to image filename format
function getHeadshotFilename(authorName) {
  // Try both lowercase and original case versions
  const lowercaseVersion = authorName.toLowerCase().replace(/\s+/g, '_');
  const originalCaseVersion = authorName.replace(/\s+/g, '_');
  return [lowercaseVersion, originalCaseVersion];
}

// Function to get author data including avatar
function getAuthorImageUrl(authorName) {
  return authors[authorName]?.avatar || getAuthorHeadshot(authorName);
}

// Default avatar placeholder
const DEFAULT_AVATAR = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Add categories array
const categories = [
  'All',
  'Security',
  'Browsers',
  'Enterprise',
  'Deployment & Installation',
  'Performance',
  'Privacy',
  'Guides & Tutorials',
  'Research & Trends',
  'Comparisons'
];

// Use a simple object for caching instead of Map to avoid Fast Refresh issues
let imageCache = {};

// Utility function to truncate text
function truncateExcerpt(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Utility function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  }).toUpperCase();
}

export async function getStaticProps() {
  try {
    // Import the blog index
    const blogPosts = require('../data/blog-index.js');
    
    // Fetch images for all blog posts in both development and production
    const allBlogPostsWithImages = await Promise.all(
      blogPosts.map(async (post) => {
        try {
          // Check if we already have an image for this post
          if (imageCache[post.slug]) {
            return {
              ...post,
              image: imageCache[post.slug],
            };
          }

          // Use existing image if available
          let postImage = post.image || null;

          // If no image, fetch from Pexels with multiple attempts
          if (!postImage) {
            // Try primary query first
            const primaryQuery = post.defaultImageQuery || `${post.category} ${post.title}`;
            let photo = await getRandomPhoto(primaryQuery);
            
            // If no result, try category-specific query
            if (!photo && post.category) {
              const categoryQuery = `${post.category} technology`;
              photo = await getRandomPhoto(categoryQuery);
            }
            
            // If still no result, try a general tech query
            if (!photo) {
              photo = await getRandomPhoto("technology business");
            }

            postImage = photo ? getOptimizedPhotoUrl(photo) : DEFAULT_PLACEHOLDER;
          }

          // Cache the image
          imageCache[post.slug] = postImage;

          // Map author images
          const mappedAuthors = post.authors?.map(author => ({
            ...author,
            avatar: getAuthorImageUrl(author.name)
          })) || [];

          return {
            ...post,
            image: postImage,
            authors: mappedAuthors
          };
        } catch (error) {
          return {
            ...post,
            image: DEFAULT_PLACEHOLDER,
            authors: post.authors?.map(author => ({
              ...author,
              avatar: getAuthorImageUrl(author.name)
            })) || []
          };
        }
      })
    );

    // Sort posts by date, newest first
    const sortedPosts = allBlogPostsWithImages.sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );

    // Get featured post (most recent)
    const featuredPost = sortedPosts[0] || null;
    
    // Get recent posts (next 3)
    const recentPosts = sortedPosts.slice(1, 4);

    return {
      props: {
        featuredPost,
        recentPosts,
        blogPosts: sortedPosts.reduce((acc, post) => {
          acc[post.slug] = post;
          return acc;
        }, {})
      },
      revalidate: process.env.NODE_ENV === 'development' ? 60 : 3600
    };
  } catch (error) {
    return {
      props: {
        featuredPost: null,
        recentPosts: [],
        blogPosts: {}
      },
      revalidate: process.env.NODE_ENV === 'development' ? 60 : 3600
    };
  }
}

const Blog = ({ 
  featuredPost = null, 
  recentPosts = [], 
  blogPosts = {} 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    if (!blogPosts || Object.keys(blogPosts).length === 0) return [];
    
    return Object.values(blogPosts)
      .filter(post => {
        const matchesCategory = selectedCategory === 'All' || 
          (Array.isArray(post.category) ? post.category.includes(selectedCategory) : post.category === selectedCategory);
        const matchesSearch = searchQuery === '' || 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.category && (Array.isArray(post.category) 
            ? post.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
            : post.category.toLowerCase().includes(searchQuery.toLowerCase()))) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [selectedCategory, searchQuery, blogPosts]);

  // Show "No results" message if no posts match the filters
  const showNoResults = filteredPosts.length === 0;

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Blog page schema
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Kahana Blog',
    description: 'Insights, guides, and updates from the Kahana team on sales enablement, AI technology, and enterprise solutions.',
    url: 'https://kahana.co/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Kahana',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kahana.co/logo.png'
      }
    },
    blogPost: recentPosts.map(post => {
      // Get the first author, whether from authors array or single author
      const primaryAuthor = post.authors?.[0] || post.author || { name: "Author", role: "Contributor" };
      
      return {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: {
          '@type': 'Person',
          name: primaryAuthor.name,
          jobTitle: primaryAuthor.role
        },
        image: post.image || featuredPost?.image || DEFAULT_PLACEHOLDER,
        publisher: {
          '@type': 'Organization',
          name: 'Kahana',
          logo: {
            '@type': 'ImageObject',
            url: 'https://kahana.co/logo.png'
          }
        }
      };
    })
  };

  return (
    <>
      <SEO 
        title="Blog - Insights & Updates from Kahana"
        description="Explore insights, guides, and updates from the Kahana team on sales enablement, AI technology, and enterprise solutions."
        image={featuredPost?.image || DEFAULT_PLACEHOLDER}
        url="https://kahana.co/blog"
        type="blog"
        schema={blogSchema}
      />
      <div className="min-h-screen bg-white">
        <Head>
          <title>Blog - Kahana</title>
          <meta name="description" content="Insights and updates from the Kahana team" />
        </Head>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Featured Post */}
          <section className="mb-20">
            {featuredPost?.slug && (
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="relative flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="relative w-full md:w-1/2 h-[400px]">
                    <Image
                      src={featuredPost?.image || DEFAULT_PLACEHOLDER}
                      alt={featuredPost?.title || 'Featured Post'}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:hidden" />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-kahana-accent-sunset/10 text-kahana-accent-sunset rounded-lg border border-kahana-accent-sunset/20">
                        Featured
                      </span>
                      {featuredPost?.category && (
                        Array.isArray(featuredPost.category) ? 
                          featuredPost.category.map((cat) => (
                            <span
                              key={cat}
                              className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-kahana-accent-water/10 text-kahana-accent-water rounded-lg border border-kahana-accent-water/20"
                            >
                              {cat}
                            </span>
                          ))
                        : typeof featuredPost.category === 'string' ? 
                          featuredPost.category.split(/(?=[A-Z&])/g).filter(Boolean).map((cat, index, array) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-kahana-accent-water/10 text-kahana-accent-water rounded-lg border border-kahana-accent-water/20"
                            >
                              {cat.trim().replace(/^&\s*/, '')}
                            </span>
                          ))
                        : null
                      )}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-kahana-primary mb-4 line-clamp-3 group-hover:text-kahana-accent-water transition-colors duration-200">
                      {featuredPost?.title || 'Featured Post'}
                    </h1>
                    <p className="text-kahana-primary-light text-base md:text-lg mb-6 line-clamp-3">
                      {truncateExcerpt(featuredPost?.excerpt, 180) || 'No excerpt available'}
                    </p>
                    <div className="flex items-center mb-6 mt-auto">
                      <div className="flex items-center">
                        <div className="flex -space-x-3 mr-4">
                          {featuredPost?.authors?.map((author, index) => (
                            <div key={author.name} className="relative w-10 h-10 rounded-lg border-2 border-white shadow-sm">
                              <Image
                                src={author.avatar || DEFAULT_AVATAR}
                                alt={author.name}
                                width={40}
                                height={40}
                                className="rounded-lg"
                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                priority
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {featuredPost?.authors?.map(author => author.name).join(', ')}
                          </p>
                          <div className="flex items-center gap-3 mt-1">
                            <time className="text-sm text-gray-500" dateTime={featuredPost?.date}>
                              {featuredPost?.date ? formatDate(featuredPost.date) : 'Date not available'}
                            </time>
                            <span className="text-sm text-gray-500">
                              {featuredPost?.readingTime}m read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-kahana-accent-water group-hover:translate-x-1 transition-transform duration-200">
                      Read Article
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </section>

          {/* Search and Categories Section */}
          <section className="mb-12">
            <div className="flex flex-col gap-6">
              {/* Search Bar */}
              <div className="w-full px-4 md:px-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2.5 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-kahana-accent-water/20 focus:border-kahana-accent-water"
                  />
                  <svg
                    className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Category Buttons */}
              <div className="relative">
                <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-2 px-4 md:px-0">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-kahana-accent-water text-white shadow-sm'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-kahana-accent-water border border-gray-200'
                      }`}
                    >
                      {category === 'All' ? (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                          {category}
                        </span>
                      ) : category}
                    </button>
                  ))}
                </div>
                {/* Fade indicator for scrollable content on mobile */}
                <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
              </div>
            </div>
          </section>

          {/* Recent Posts */}
          <section>
            <h2 className="text-2xl font-bold text-kahana-primary mb-12">Recent Articles</h2>
            
            {showNoResults ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 text-sm font-medium text-kahana-accent-water hover:text-kahana-accent-flower transition-colors duration-200"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <article key={post.slug} className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative h-48">
                        <Image
                          src={post.image || DEFAULT_PLACEHOLDER}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {Array.isArray(post.category) ? (
                            post.category.map((cat) => (
                              <span
                                key={cat}
                                className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-kahana-accent-water/10 text-kahana-accent-water rounded-lg border border-kahana-accent-water/20 hover:bg-kahana-accent-water/15 transition-colors duration-200"
                              >
                                {cat}
                              </span>
                            ))
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-kahana-accent-water/10 text-kahana-accent-water rounded-lg border border-kahana-accent-water/20 hover:bg-kahana-accent-water/15 transition-colors duration-200">
                              {post.category}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-kahana-primary mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-kahana-primary-light mb-4 line-clamp-2">
                          {truncateExcerpt(post.excerpt)}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center">
                            <div className="flex -space-x-2 mr-2">
                              {post.authors?.map((author) => (
                                <div key={author.name} className="relative w-8 h-8">
                                  <Image
                                    src={author.avatar || DEFAULT_AVATAR}
                                    alt={author.name}
                                    width={32}
                                    height={32}
                                    className="rounded-lg border-2 border-white"
                                    style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">
                                {post.authors?.map(author => author.name).join(', ')}
                              </p>
                              <div className="flex items-center gap-2">
                                <time className="text-gray-500" dateTime={post.date}>
                                  {formatDate(post.date)}
                                </time>
                                <span className="text-gray-500">{post.readingTime}m read</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-kahana-primary text-white hover:bg-kahana-primary/90'
                  }`}
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-kahana-primary text-white hover:bg-kahana-primary/90'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </section>
        </main>

        <style jsx global>{`
          /* Hide scrollbar but keep functionality */
          .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;  /* Chrome, Safari and Opera */
          }
        `}</style>
      </div>
    </>
  );
};

export default Blog; 