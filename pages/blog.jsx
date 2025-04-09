import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../components/SEO';
import { getRandomPhoto, getOptimizedPhotoUrl } from '../utils/pexels';

// Import team member headshots
import adamHeadshot from '../assets/headshots/adam_kershner.jpg';
import emilio from '../assets/headshots/Emilio_Abelmann.webp';
import eugene from '../assets/headshots/eugene_kaminsky.webp';
import hugh from '../assets/headshots/hugh_molotsi.webp';
import jonathan from '../assets/headshots/Jonathan_Gans.webp';
import william from '../assets/headshots/william_reehil.webp';
import greg from '../assets/headshots/Gregory_Gray.webp';
import denali from '../assets/headshots/Denali_Keefe.webp';
import benjamin from '../assets/headshots/Benjamin_St_Juste.webp';
import aparna from '../assets/headshots/Aparna_Chaturvedula.webp';
import kelsie from '../assets/headshots/Kelsie_Exley.webp';
import jyoti from '../assets/headshots/Jyoti_Vashist.webp';
import kirtana from '../assets/headshots/Kirtana_Sridharan.webp';
import monty from '../assets/headshots/Monty_Lans.webp';
import saumya from '../assets/headshots/Saumya Roy.webp';
import shivani from '../assets/headshots/Shivani_Chandrashekar.webp';
import sinchana from '../assets/headshots/Sinchana_Thippeswamy.webp';
import jordan from '../assets/headshots/Jordan_Kern.webp';
import veda from '../assets/headshots/veda_kanduri.webp';
import siddhartha from '../assets/headshots/siddhartha_roy.webp';
import rj from '../assets/headshots/rj_gan.webp';
import mahendra from '../assets/headshots/mahendra_shahi.webp';

// Author mapping for blog posts
const authorImages = {
  'Adam Kershner': adamHeadshot,
};

// Default avatar placeholder
const DEFAULT_AVATAR = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Add categories array
const categories = [
  'All',
  'Engineering',
  'Security',
  'Cloud Computing',
  'Development',
  'Company News',
  'Product Updates'
];

// Utility function to truncate text
function truncateExcerpt(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export async function getStaticProps() {
  try {
    // Import the blog index
    const blogPosts = require('../data/blog-index.js');
    
    // Fetch images for all blog posts
    const allBlogPostsWithImages = await Promise.all(
      blogPosts.map(async (post) => {
        try {
          // Use the post's image if available, otherwise fetch a random one
          let postImage = post.image || null;
          if (!postImage) {
            const photo = await getRandomPhoto(post.title);
            postImage = photo ? getOptimizedPhotoUrl(photo) : DEFAULT_PLACEHOLDER;
          }
          return {
            ...post,
            image: postImage
          };
        } catch (error) {
          console.error(`Error fetching image for post ${post.slug}:`, error);
          return {
            ...post,
            image: DEFAULT_PLACEHOLDER
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

    // Convert to object format for easier lookup
    const blogPostsObject = sortedPosts.reduce((acc, post) => {
      acc[post.slug] = post;
      return acc;
    }, {});

    return {
      props: {
        featuredPost,
        recentPosts,
        blogPosts: blogPostsObject
      },
      // Revalidate every 10 seconds in development, 1 hour in production
      revalidate: process.env.NODE_ENV === 'development' ? 10 : 3600
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        featuredPost: null,
        recentPosts: [],
        blogPosts: {}
      },
      revalidate: 60
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
      .map(post => {
        // Ensure author object is properly structured
        const author = {
          name: post.author?.name || "Author",
          role: post.author?.role || "Contributor",
          avatar: authorImages[post.author?.name] || DEFAULT_AVATAR
        };
        return {
          ...post,
          author
        };
      })
      .filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = searchQuery === '' || 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.category && post.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
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
    blogPost: recentPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author.name,
        jobTitle: post.author.role
      },
      image: post.image || featuredPost?.image || DEFAULT_PLACEHOLDER,
      url: `https://kahana.co/blog/${post.slug}`
    }))
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
            <div className="relative flex flex-col md:flex-row rounded-2xl overflow-hidden bg-kahana-ui-background shadow-lg">
              <div className="relative w-full md:w-1/2 h-[400px]">
                <Image
                  src={featuredPost?.image || DEFAULT_PLACEHOLDER}
                  alt={featuredPost?.title || 'Featured Post'}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-kahana-accent-water/10 text-kahana-accent-water rounded-full mb-4">
                  {featuredPost?.category || 'Featured'}
                </span>
                <h1 className="text-3xl font-bold text-kahana-primary mb-4">
                  {featuredPost?.title || 'Featured Post'}
                </h1>
                <p className="text-kahana-primary-light text-lg mb-6 line-clamp-2">
                  {truncateExcerpt(featuredPost?.excerpt) || 'No excerpt available'}
                </p>
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 mr-3">
                      <Image
                        src={authorImages[featuredPost?.author?.name] || DEFAULT_AVATAR}
                        alt={featuredPost?.author?.name || "Author"}
                        width={40}
                        height={40}
                        className="rounded-lg"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        priority
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{featuredPost?.author?.name || "Author"}</p>
                      <p className="text-sm text-gray-600">
                        {featuredPost?.date ? new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }) : 'Date not available'}
                      </p>
                    </div>
                  </div>
                  <span className="mx-4 text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{featuredPost?.readingTime} min read</span>
                </div>
                <Link 
                  href={`/blog/${featuredPost?.slug}`}
                  className="inline-flex items-center text-kahana-accent-sunset hover:text-kahana-accent-flower transition-colors duration-200"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Search and Categories Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Category Buttons */}
              <div className="relative w-full md:w-auto">
                <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-3 -mx-4 px-4 md:mx-0 md:px-0">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex-none px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-kahana-primary text-white'
                          : 'bg-[#ECEEF2] hover:bg-[#E2E4EA] text-[#36394A]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                {/* Fade indicator for scrollable content on mobile */}
                <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-96 order-first md:order-last">
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
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <article key={post.slug} className="bg-kahana-ui-background rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="transition-transform duration-500 hover:scale-105 object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-kahana-accent-water/10 text-kahana-accent-water rounded-full mb-4">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-semibold text-kahana-primary mb-4 hover:text-kahana-accent-sunset transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-kahana-primary-light mb-6 line-clamp-2">
                          {truncateExcerpt(post.excerpt)}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <div className="relative w-10 h-10 mr-3">
                              <Image
                                src={post.author?.avatar || authorImages[post.author?.name] || DEFAULT_AVATAR}
                                alt={post.author?.name || "Author"}
                                width={40}
                                height={40}
                                className="rounded-lg"
                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                priority
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{post.author?.name || "Author"}</p>
                              <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600">•</span>
                            <span className="ml-2 text-sm text-gray-600">{post.readingTime} min read</span>
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