import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomPhoto, getOptimizedPhotoUrl, getPlaceholderImageUrl } from '../utils/pexels';
import { getBlogImageUrl } from '../utils/blog-image-url';
import { suggestNatureImageQuery } from '../utils/blog-helpers';
import { trackBlogEngagement, trackCategoryClick } from '../utils/userIntentTracking';
const { getAuthorDetails } = require('../utils/authorUtils');

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233B2F1A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Format date helper
function formatDate(dateString) {
  const date = new Date(dateString);
  return `Last Updated: ${date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  })}`;
}

function resolveFeaturedImage(featuredImage) {
  if (!featuredImage) return null;
  return getBlogImageUrl(featuredImage) || null;
}

function isUnoptimizedSrc(src) {
  if (!src) return false;
  // Local public files skip /_next/image — fill + 100vw can request w=3840 and
  // the optimizer hangs or returns an empty jpeg for these covers.
  return src.startsWith('data:') || src.startsWith('/');
}

export default function BlogCard({ post }) {
  const [isClient, setIsClient] = useState(false);
  const [imageUrl, setImageUrl] = useState(() => resolveFeaturedImage(post.featuredImage));
  const [isLoadingImage, setIsLoadingImage] = useState(() => !post.featuredImage);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch image on-demand when component mounts
  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (post.featuredImage) {
          setImageUrl(resolveFeaturedImage(post.featuredImage));
          setIsLoadingImage(false);
          return;
        }

        setIsLoadingImage(true);

        const primaryQuery = post.defaultImageQuery || suggestNatureImageQuery(post.category);
        // Use the post slug as unique identifier to prevent duplicate images
        const photo = await getRandomPhoto(primaryQuery, post.slug);
        
        if (photo) {
          setImageUrl(getOptimizedPhotoUrl(photo));
        } else {
          // Use placeholder if no photo found
          setImageUrl(getPlaceholderImageUrl(primaryQuery, post.slug));
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        // Use placeholder on error
        const primaryQuery = post.defaultImageQuery || suggestNatureImageQuery(post.category);
        setImageUrl(getPlaceholderImageUrl(primaryQuery, post.slug));
      } finally {
        setIsLoadingImage(false);
      }
    };

    if (isClient) {
      setImageError(false);
      fetchImage();
    }
  }, [isClient, post.defaultImageQuery, post.category, post.slug, post.featuredImage]);

  if (!post) {
    return null;
  }

  const postAuthors = getAuthorDetails(post.authors ?? []);

  return (
    <article className="bg-white rounded-xl border border-[#E4D9C4] shadow-[0_10px_28px_rgba(59,47,26,0.08)] hover:shadow-[0_16px_40px_rgba(59,47,26,0.12)] transition-shadow duration-200 overflow-hidden flex flex-col h-full">
      <div className="flex flex-col h-full">
        <Link
          href={`/blog/${post.slug}`}
          className="flex flex-col flex-grow blog-card-link"
          onClick={() => {
            trackBlogEngagement(post.slug, post.category, 'card_click');
          }}
        >
          {/* Image */}
          <div className="relative h-52 md:h-56 lg:h-48 w-full overflow-hidden bg-[#EDE6D2]">
            {isLoadingImage ? (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center" style={{ minHeight: '13rem' }}>
                <span className="text-oasis-green-800">Loading...</span>
              </div>
            ) : (
              <Image
                src={imageError || !imageUrl || imageUrl.trim() === '' ? DEFAULT_PLACEHOLDER : imageUrl}
                alt={post.title ?? 'Blog post'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized={isUnoptimizedSrc(imageUrl)}
                onError={() => setImageError(true)}
              />
            )}
          </div>

          <div className="flex flex-col flex-grow px-6 pt-6 pb-4 gap-4">
            {/* Title */}
            <h3 className="text-xl font-semibold text-[#3B2F1A] hover:text-[#8A6622] transition-colors line-clamp-2 mb-2">
              {post.title}
            </h3>

            {/* Authors */}
            <div className="flex items-center space-x-4 mb-1">
              <div className="flex -space-x-2">
                {postAuthors.map((author) => (
                  <div key={author.name} className="relative">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#8A6622]">
                {postAuthors.map(author => author.name).join(', ')}
              </div>
            </div>

            {/* Date and Read Time */}
            <div className="flex items-center gap-2 text-sm text-oasis-green-800 mb-2">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>

            {/* Excerpt with gradient fade */}
            <div className="relative mb-3">
              <p className="text-gray-600 line-clamp-4">
                {post.excerpt}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
        </Link>

        {/* Bottom metadata - outside Link to avoid nested anchors */}
        <div className="flex flex-col gap-4 mt-auto px-6 pb-4">
          <div className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap max-w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-1">
            {post.category && (() => {
              // Handle both string and array categories - display only the first one
              const categoryToDisplay = Array.isArray(post.category) ? post.category[0] : post.category;
              const categoryForUrl = Array.isArray(post.category) ? post.category[0] : post.category;
              
              return (
                <Link
                  href={`/blog?category=${encodeURIComponent(categoryForUrl)}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    trackCategoryClick(categoryForUrl, post.slug);
                  }}
                  className="text-sm font-medium px-3 py-1 rounded-full bg-[#EDE6D2] text-[#8A6622] border border-[#E4D9C4] hover:bg-[#8A6622] hover:text-white hover:border-[#8A6622] transition-colors inline-block"
                >
                  {categoryToDisplay}
                </Link>
              );
            })()}
          </div>
        </div>
      </div>
    </article>
  );
} 