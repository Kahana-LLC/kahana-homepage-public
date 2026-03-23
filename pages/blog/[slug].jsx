import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getRandomPhoto, getOptimizedPhotoUrl, getPlaceholderImageUrl } from '../../utils/pexels';
import { suggestNatureImageQuery } from '../../utils/blog-helpers';
import { blogIndex } from '../../data/blog-index';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorCard from '../../components/AuthorCard';
import BlogBrowserComparison from '../../components/BlogBrowserComparison';
import ComparisonTable from '../../components/ComparisonTable';
import BlogCard from '../../components/BlogCard';
import { FaLinkedin, FaRegCalendarAlt, FaBookOpen, FaRegClock } from 'react-icons/fa';
import SocialShare from '../../components/SocialShare';
import { trackBlogPageViewDirect } from '../../utils/directMixpanel';
import { getBlogPostSeo, getBlogKeywords } from '../../utils/blogSeo';
import { getBlogImageUrl } from '../../utils/blog-image-url';
const { getAuthorDetails } = require('../../utils/authorUtils');

// Function to parse HTML content and convert component tags to React components
function parseHtmlWithComponents(htmlContent) {
  if (!htmlContent) return null;
  
  // Split content by component tags
  const componentRegex = /<component name="([^"]+)"(?:\s+([^>]*))?\/>/g;
  const parts = htmlContent.split(componentRegex);
  
  const elements = [];
  let key = 0;
  
  for (let i = 0; i < parts.length; i += 3) {
    // Add HTML content before component
    if (parts[i]) {
      elements.push(
        <div 
          key={key++} 
          dangerouslySetInnerHTML={{ __html: parts[i] }} 
        />
      );
    }
    
    // Add component if it exists
    if (parts[i + 1]) {
      const componentName = parts[i + 1];
      const props = parts[i + 2] ? parseProps(parts[i + 2]) : {};
      
      switch (componentName) {
        case 'BlogBrowserComparison':
          elements.push(<BlogBrowserComparison key={key++} {...props} />);
          break;
        case 'ComparisonTable':
        case 'MaterialComparisonTable':
          elements.push(<ComparisonTable key={key++} {...props} />);
          break;
        default:
          // If component not found, render as HTML
          elements.push(
            <div 
              key={key++} 
              dangerouslySetInnerHTML={{ 
                __html: `<component name="${componentName}"${parts[i + 2] ? ' ' + parts[i + 2] : ''}/>` 
              }} 
            />
          );
      }
    }
  }
  
  return elements;
}

// Helper function to parse component props from string
function parseProps(propsString) {
  if (!propsString) return {};
  
  const props = {};
  const propRegex = /(\w+)="([^"]*)"/g;
  let match;
  
  while ((match = propRegex.exec(propsString)) !== null) {
    props[match[1]] = match[2];
  }
  
  return props;
}

// Add default avatar and placeholder image
const DEFAULT_AVATAR = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

const DEFAULT_COVER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

export default function BlogPost({ post }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  // Simplified: Direct Mixpanel tracking only (no GTM/dataLayer). Client-side only. Safe guard if no params/slug.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const slug = router?.query?.slug ?? post?.slug;
    if (!slug) return;
    trackBlogPageViewDirect({
      post_slug: slug,
      post_title: document.title,
      ...(post?.category && { blog_category: post.category }),
    });
  }, [router?.query?.slug, post?.slug, post?.category]);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch image on-demand when component mounts
  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoadingImage(true);
        
        // Check if post has a featuredImage URL - resolve via Cloudinary for local paths
        if (post.featuredImage) {
          setCoverImage({
            src: getBlogImageUrl(post.featuredImage),
            photographer: null,
            photographer_url: null
          });
          setIsLoadingImage(false);
          return;
        }
        
        const primaryQuery = post.defaultImageQuery || suggestNatureImageQuery(post.category);
        // Use the post slug as unique identifier to prevent duplicate images
        const photo = await getRandomPhoto(primaryQuery, post.slug);
        
        if (photo) {
          setCoverImage(photo);
        } else {
          // Use placeholder if no photo found
          setCoverImage({
            src: getPlaceholderImageUrl(primaryQuery, post.slug),
            photographer: null,
            photographer_url: null
          });
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        // Use placeholder on error
        const primaryQuery = post.defaultImageQuery || suggestNatureImageQuery(post.category);
        setCoverImage({
          src: getPlaceholderImageUrl(primaryQuery, post.slug),
          photographer: null,
          photographer_url: null
        });
      } finally {
        setIsLoadingImage(false);
      }
    };

    if (isClient) {
      fetchImage();
    }
  }, [isClient, post.defaultImageQuery, post.category, post.slug, post.featuredImage]);

  // Get the authors for this post using getAuthorDetails
  const postAuthors = post?.authors ? getAuthorDetails(post.authors) : [];
  const hasAuthors = postAuthors && postAuthors.length > 0;

  // Format category for display (now single string)
  const categoryDisplay = post?.category || '';
  const postCategory = categoryDisplay;

  // Get related blogs from the same category (excluding current post)
  const relatedBlogs = blogIndex
    .filter(blog => blog.slug !== post.slug && blog.category === postCategory)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center" role="status" aria-live="polite">
          <p className="text-2xl font-bold text-gray-900">Loading...</p>
        </div>
      </div>
    );
  }

  const { titleTag, metaDescription, canonicalUrl } = getBlogPostSeo(post);
  const keywordsMeta = getBlogKeywords(post);
  const isBrowserPost = post.title.toLowerCase().includes('browser');

  return (
    <>
      <Head>
        <title>{titleTag}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {keywordsMeta && <meta name="keywords" content={keywordsMeta} />}
        {isBrowserPost && <meta name="robots" content="index, follow" />}

        {/* Open Graph — CTR-friendly title/description, full URL, image dimensions */}
        <meta property="og:title" content={titleTag.replace(/\s*\|\s*Kahana Blog$/, '')} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={hasAuthors ? postAuthors.map(a => a.name).join(', ') : ''} />
        <meta property="article:section" content={postCategory} />
        {post.featuredImage && getBlogImageUrl(post.featuredImage) && (
          <>
            <meta property="og:image" content={getBlogImageUrl(post.featuredImage)} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </>
        )}

        {/* Twitter Card — same as OG for consistent social CTR */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={titleTag.replace(/\s*\|\s*Kahana Blog$/, '')} />
        <meta name="twitter:description" content={metaDescription} />
        {post.featuredImage && getBlogImageUrl(post.featuredImage) && <meta name="twitter:image" content={getBlogImageUrl(post.featuredImage)} />}

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              description: metaDescription,
              image: getBlogImageUrl(post.featuredImage) || '',
              datePublished: post.date,
              dateModified: post.date,
              author: hasAuthors ? postAuthors.map(author => ({
                '@type': 'Person',
                name: author.name,
                url: author.linkedinProfile || '',
              })) : [],
              publisher: {
                '@type': 'Organization',
                name: 'Kahana',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://kahana.co/assets/kahana_logo_transparent.svg',
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': canonicalUrl,
              },
              articleSection: postCategory,
              keywords: keywordsMeta || postCategory,
            }),
          }}
        />
      </Head>

      {/* Scroll Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-2 bg-[#F3F8E4] z-40">
        <div 
          id="scroll-progress-bar"
          className="h-full bg-gradient-to-r from-[#E0D48C] via-[#728552] to-[#788B59] transition-all duration-150 ease-out"
          style={{ width: '0%' }}
        ></div>
      </div>

      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg max-w-none">
          <header className="mb-12">
            {/* Breadcrumbs for navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <Breadcrumbs 
                items={[
                  { name: "Home", url: "/" },
                  { name: "Blog", url: "/blog" },
                  { name: post.title, url: `/blog/${post.slug}` },
                ]} 
              />
            </nav>

            {/* Main title */}
            <h1 className="text-4xl font-bold mb-6 text-[#4A5745]">{post.title}</h1>

            {/* Article metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {isClient && hasAuthors && <AuthorCard authors={postAuthors} variant="header" />}
              <time 
                dateTime={post.date}
                className="inline-flex items-center px-3 py-1.5 text-[#4A5745] text-sm"
              >
                <FaRegCalendarAlt className="w-4 h-4 mr-2" />
                <span className="mr-1">Published:</span>
                {isClient ? new Date(post.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }).replace(/\//g, '/') : ''}
              </time>
              {postCategory && (
                <Link 
                  href={`/blog?category=${encodeURIComponent(postCategory)}`}
                  className="inline-flex items-center px-3 py-1.5 text-[#4A5745] text-sm hover:text-[#617500] transition-colors rounded-md hover:bg-[#F3F8E4]"
                >
                  <FaBookOpen className="w-4 h-4 mr-2" />
                  <span>{postCategory}</span>
                </Link>
              )}
              <div className="inline-flex items-center px-3 py-1.5 text-[#4A5745] text-sm">
                <FaRegClock className="w-4 h-4 mr-2" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            {/* Article excerpt */}
            <p className="text-xl text-[#4A5745] mb-8 leading-relaxed">{post.excerpt}</p>

            {/* Cover Image */}
            {/*
            <figure className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden bg-gray-100">
              {isClient && coverImage?.src ? (
                <>
                  <Image
                    src={coverImage.src}
                    alt={`Cover image for ${post.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-cover"
                    priority
                    onError={(e) => {
                      e.target.src = DEFAULT_COVER;
                    }}
                  />
                  {coverImage.photographer && (
                    <figcaption className="absolute bottom-4 right-4 text-sm text-white bg-black/70 px-3 py-2 rounded-md backdrop-blur-sm">
                      Photo by <a href={coverImage.photographer_url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-kahana-accent-water transition-colors">{coverImage.photographer}</a> on Pexels
                    </figcaption>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="text-gray-500">Loading cover image...</div>
                </div>
              )}
            </figure>
            */}
          </header>

          <div 
            className="prose prose-lg max-w-none"
          >
            {post.content ? (
              Array.isArray(post.content) ? (
                post.content.map((block, index) => {
                  if (!block || !block.type) return null;
                  
                  switch (block.type) {
                    case 'heading':
                      return block.text ? (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{block.text}</h2>
                      ) : null;
                    case 'paragraph':
                      return block.text ? (
                        <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: block.text }} />
                      ) : null;
                    case 'list':
                      return block.items && Array.isArray(block.items) ? (
                        <ul key={index} className="list-disc pl-6 mb-4">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="mb-2">{item}</li>
                          ))}
                        </ul>
                      ) : null;
                    case 'component':
                      if (block.name === 'BlogBrowserComparison') {
                        return (
                          <div key={index}>
                            <BlogBrowserComparison
                              {...block.props}
                            />
                          </div>
                        );
                      }
                      if (block.name === 'ComparisonTable' || block.name === 'MaterialComparisonTable') {
                        return (
                          <ComparisonTable
                            key={index}
                            {...block.props}
                          />
                        );
                      }
                      return null;
                    default:
                      return null;
                  }
                })
              ) : (
                <div className="prose prose-lg max-w-none">
                  {parseHtmlWithComponents(post.content)}
                </div>
              )
            ) : (
              <div className="text-gray-600">
                <p>No content available for this post.</p>
              </div>
            )}
          </div>
          
          {isClient && (
            <SocialShare 
              title={post.title} 
              url={`https://kahana.co/blog/${post.slug}`}
              excerpt={post.excerpt}
            />
          )}

          <div className="mt-16 p-8 bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#011910] mb-4">Ready to Elevate Your Work Experience?</h2>
            <p className="text-lg text-[#4A5745] mb-6">
              We'd love to understand your unique challenges and explore how our solutions can help you achieve a more fluid way of working now and in the future. Let's discuss your specific needs and see how we can work together to create a more ergonomic future of work.
            </p>
            <Link 
              href="/contact"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
            >
              <span>Contact us</span>
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Related Blogs Section */}
          {relatedBlogs.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 style={{fontWeight: 'bold', fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem'}} className="text-2xl font-bold text-[#4A5745] mb-6">
                <strong>More {postCategory} articles</strong>
              </h2>
              <p className="text-lg text-[#4A5745] mb-6">
                Explore more articles about <Link href={`/blog?category=${encodeURIComponent(postCategory)}`} className="text-[#617500] hover:text-[#4A5F00] font-semibold underline">{postCategory}</Link>
              </p>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {relatedBlogs.map((relatedPost) => (
                  <div key={relatedPost.slug}>
                    <BlogCard 
                      post={{ ...relatedPost, authors: getAuthorDetails(relatedPost.authors) }} 
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link 
                  href={`/blog?category=${encodeURIComponent(postCategory)}`}
                  className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                >
                  <span>View All {postCategory} Articles</span>
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* Author Bio Section */}
          {hasAuthors && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#4A5745] mb-6">About the Authors</h2>
              {isClient && (
                <AuthorCard 
                  authors={postAuthors}
                  variant="bio" 
                />
              )}
            </div>
          )}
        </article>
      </main>
      </div>

      {/* Scroll Progress Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            function updateProgress() {
              const scrollTop = window.pageYOffset;
              const docHeight = document.documentElement.scrollHeight - window.innerHeight;
              const scrollPercent = (scrollTop / docHeight) * 100;
              
              // Update scroll progress bar
              const progressBar = document.getElementById('scroll-progress-bar');
              if (progressBar) {
                progressBar.style.width = Math.min(scrollPercent, 100) + '%';
              }
            }
            
            window.addEventListener('scroll', updateProgress);
            updateProgress(); // Initial call
          });
        `
      }} />
    </>
  );
}

export async function getStaticPaths() {
  try {
    // Generate paths from blog-index.js
    const paths = blogIndex.map((post) => ({
      params: { slug: post.slug },
    }));

    return {
      paths,
      fallback: 'blocking', // Changed from false to 'blocking' for on-demand static generation
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    // First check if the post exists in the blog index
    const postInIndex = blogIndex.find(post => post.slug === params.slug);
    if (!postInIndex) {
      return { notFound: true };
    }

    // Load the specific blog post JSON file using require
    let postContent;
    try {
      postContent = require(`../../data/blog/${params.slug}.json`);
    } catch (error) {
      console.error(`Error loading blog content for ${params.slug}:`, error);
      // If we can't load the content, use the index data
      postContent = postInIndex;
    }

    // Don't fetch images during build - let them load on-demand
    return {
      props: {
        post: postContent,
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        post: postInIndex,
      },
      revalidate: 3600,
    };
  }
} 