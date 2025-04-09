import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomPhoto, getOptimizedPhotoUrl, searchPhotos } from '../../utils/pexels';
import { suggestNatureImageQuery } from '../../utils/blog-helpers';
import blogIndex from '../../data/blog-index';
import Breadcrumbs from '../../components/Breadcrumbs';

// Import team member headshots
import adamHeadshot from '../../assets/headshots/Adam_Kershner.webp';

// Add author images mapping
const authorImages = {
  'Adam Kershner': adamHeadshot,
};

// Add default avatar
const DEFAULT_AVATAR = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

export default function BlogPost({ post }) {
  const [contentImages, setContentImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true);
        // Try the post's category-specific query first
        const searchQuery = post.defaultImageQuery || suggestNatureImageQuery(post.category);
        console.log('Trying primary query:', searchQuery);
        
        const images = await searchPhotos(searchQuery, {
          per_page: 1,
          orientation: 'landscape'
        });
        
        if (images && images.length > 0) {
          console.log('Found images for primary query');
          setContentImages(images);
        } else {
          console.log('No images found for primary query, trying fallback');
          // Try a series of fallback nature queries
          const fallbackQueries = [
            'serene forest landscape',
            'peaceful mountain vista',
            'tranquil nature scene',
            'calm wilderness'
          ];
          
          for (const fallbackQuery of fallbackQueries) {
            console.log('Trying fallback query:', fallbackQuery);
            const fallbackImages = await searchPhotos(fallbackQuery, {
              per_page: 1,
              orientation: 'landscape'
            });
            
            if (fallbackImages && fallbackImages.length > 0) {
              console.log('Found images for fallback query');
              setContentImages(fallbackImages);
              break;
            }
          }
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [post.defaultImageQuery, post.category]);

  // Ensure author object is properly structured
  const author = {
    name: post.author?.name || "Author",
    role: post.author?.role || "Contributor",
    bio: post.author?.bio || `${post.author?.name || "The author"} is a contributor to the Kahana blog, sharing insights and expertise in enterprise browser solutions and security.`,
    avatar: authorImages[post.author?.name] || DEFAULT_AVATAR
  };

  return (
    <>
      <Head>
        <title>{post.title} | Kahana Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={author.name} />
        <meta property="article:section" content={post.category} />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <Breadcrumbs 
              items={[
                { name: "Home", url: "/" },
                { name: "Blog", url: "/blog" },
                { name: post.title, url: `/blog/${post.slug}` },
              ]} 
            />
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            {/* Cover Image */}
            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden bg-gray-100">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse text-gray-400">Loading cover image...</div>
                </div>
              ) : contentImages.length > 0 && contentImages[0].src ? (
                <>
              <Image
                    src={contentImages[0].src.landscape || contentImages[0].src.large2x || contentImages[0].src.large}
                    alt={`Cover image for ${post.title}`}
                fill
                className="object-cover"
                priority
              />
                  <div className="absolute bottom-4 right-4 text-xs text-white bg-black/50 px-2 py-1 rounded">
                    Photo by <a href={contentImages[0].photographer_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{contentImages[0].photographer}</a> on Pexels
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400">Loading alternative nature image...</div>
                </div>
              )}
            </div>

            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center">
                <div className="relative w-16 h-auto mr-4">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={64}
                    height={64}
                    className="rounded-md"
                    priority
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{author.name}</div>
                  <div className="text-sm">{author.role}</div>
                </div>
              </div>
              <span className="mx-4">•</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}</span>
              <span className="mx-4">•</span>
              <span>{post.category}</span>
              <span className="mx-4">•</span>
              <span>{post.readingTime} min read</span>
            </div>
            <p className="text-xl text-gray-600">{post.excerpt}</p>
          </header>

          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
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
          <div className="mt-12 p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-start">
              <div className="relative w-32 h-auto mr-6 flex-shrink-0">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={128}
                  height={128}
                  className="rounded-md"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{author.name}</h3>
                <p className="text-gray-600 mb-4">{author.role}</p>
                <p className="text-gray-600">
                  {author.bio}
                </p>
              </div>
            </div>
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

    return {
      props: {
        post: post.default,
      },
      // Revalidate every 10 seconds in development
      revalidate: 10,
    };
  } catch (error) {
    console.error(`Error loading blog post: ${params.slug}`, error);
    return {
      notFound: true, // Return 404 page
    };
  }
} 