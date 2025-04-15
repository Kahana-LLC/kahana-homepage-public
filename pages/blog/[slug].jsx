import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { searchPhotos } from '../../utils/pexels';
import { suggestNatureImageQuery } from '../../utils/blog-helpers';
import blogIndex from '../../data/blog-index';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorCard from '../../components/AuthorCard';
import { FaLinkedin, FaRegCalendarAlt, FaBookOpen, FaRegClock } from 'react-icons/fa';
import SocialShare from '../../components/SocialShare';
import { authors } from '../../config/authors';

// Add default avatar and placeholder image
const DEFAULT_AVATAR = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

const DEFAULT_COVER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Define post authors outside the component
const POST_AUTHORS = [authors['Adam Kershner'], authors['Jordan Kern'], authors['Vruksha Joshi']];

export default function BlogPost({ post, coverImage }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get the authors for this post
  const postAuthors = post?.authors?.map(author => ({
    ...authors[author.name],
    name: author.name,
    role: author.role,
    bio: author.bio,
    linkedinProfile: author.linkedinProfile
  })) || (post?.author ? [{
    ...authors[post.author.name],
    name: post.author.name,
    role: post.author.role,
    bio: post.author.bio,
    linkedinProfile: post.author.linkedinProfile
  }] : []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{`${post.title} | Kahana Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={postAuthors.map(a => a.name).join(', ')} />
        <meta property="article:section" content={post.category} />
      </Head>

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
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            {/* Article metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {isClient && <AuthorCard authors={postAuthors} variant="header" />}
              <time 
                dateTime={post.date}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm"
              >
                <FaRegCalendarAlt className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-500 mr-1">Published:</span>
                {isClient ? new Date(post.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }).replace(/\//g, '/') : ''}
              </time>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm">
                <FaBookOpen className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-500">{post.category}</span>
              </div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm">
                <FaRegClock className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-500">{post.readingTime} min read</span>
              </div>
            </div>

            {/* Article excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

            {/* Cover Image */}
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
                      console.error('[Debug] Image load error:', e);
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
          </header>

          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {isClient && (
            <SocialShare 
              title={post.title} 
              url={`https://kahana.co/blog/${post.slug}`}
              excerpt={post.excerpt}
            />
          )}
          
          <div className="mt-16 p-8 bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl border border-[#A5DAD8]/30 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Enterprise Browser Experience</h2>
            <p className="text-lg text-gray-600 mb-6">
              Ready to learn how Kahana can help secure and streamline your organization's browsing? Schedule a personalized demo today.
            </p>
            <Link 
              href="/schedule-demo"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#66C2BE] hover:bg-[#4A9E9A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66C2BE] transition-colors duration-200"
            >
              Schedule Demo
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Author Bio Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Authors</h2>
            {isClient && (
              <AuthorCard 
                authors={postAuthors}
                variant="bio" 
              />
            )}
          </div>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  // Generate paths from blog-index.js
  const paths = blogIndex.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // Return 404 for non-existent paths
  };
}

export async function getStaticProps({ params }) {
  try {
    // Load the specific blog post JSON file
    const post = await import(`../../data/blog/${params.slug}.json`);
    let coverImage = null;

    try {
      // First try with the default query
      const primaryQuery = post.default.defaultImageQuery || suggestNatureImageQuery(post.default.category);
      console.log(`[Debug] Trying primary query: "${primaryQuery}"`);
      
      let images = await searchPhotos(primaryQuery, {
        per_page: 1,
        orientation: 'landscape'
      });
      
      // If no results, try with a fallback query
      if (!images || images.length === 0) {
        const fallbackQuery = "cyber security technology";
        console.log(`[Debug] No results with primary query, trying fallback: "${fallbackQuery}"`);
        images = await searchPhotos(fallbackQuery, {
          per_page: 1,
          orientation: 'landscape'
        });
      }
      
      if (images && images.length > 0) {
        coverImage = {
          ...images[0],
          src: images[0].src.large2x || images[0].src.large || images[0].src.original
        };
        console.log(`[Debug] Selected cover image:`, {
          id: coverImage.id,
          photographer: coverImage.photographer,
          url: coverImage.src
        });
      } else {
        console.log(`[Debug] No images found with any query`);
      }
    } catch (error) {
      console.error('[Debug] Error fetching cover image:', {
        error: error.message,
        stack: error.stack,
        query: post.default.defaultImageQuery,
        category: post.default.category
      });
    }

    return {
      props: {
        post: post.default,
        coverImage,
      },
      // Revalidate once per day
      revalidate: 86400,
    };
  } catch (error) {
    console.error(`[Debug] Error loading blog post: ${params.slug}`, error);
    return {
      notFound: true, // Return 404 page
    };
  }
} 