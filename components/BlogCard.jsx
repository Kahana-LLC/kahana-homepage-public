import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomPhoto, getOptimizedPhotoUrl, getPlaceholderImageUrl } from '../utils/pexels';
import { suggestNatureImageQuery } from '../utils/blog-helpers';
const { getAuthorDetails } = require('../utils/authorUtils');

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Format date helper
function formatDate(dateString) {
  const date = new Date(dateString);
  return `Last Updated: ${date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  })}`;
}

export default function BlogCard({ post }) {
  const [isClient, setIsClient] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch image on-demand when component mounts
  useEffect(() => {
    const fetchImage = async () => {
      try {
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
      fetchImage();
    }
  }, [isClient, post.defaultImageQuery, post.category, post.slug]);

  if (!post) {
    return null;
  }

  const postAuthors = getAuthorDetails(post.authors);

  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-52 md:h-56 lg:h-48 w-full">
          {isLoadingImage ? (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          ) : (
            <Image
              src={imageUrl || DEFAULT_PLACEHOLDER}
              alt={post.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col flex-grow px-6 pt-6 pb-4 gap-4">
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 hover:text-kahana-accent-sunset transition-colors line-clamp-2 mb-2">
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
            <div className="text-sm text-gray-600">
              {postAuthors.map(author => author.name).join(', ')}
            </div>
          </div>

          {/* Date and Read Time */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
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

          {/* Bottom metadata */}
          <div className="flex flex-col gap-4 mt-auto">
            {/* Categories */}
            <div className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap max-w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-1">
              {Array.isArray(post.category)
                ? post.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors inline-block"
                    >
                      {cat}
                    </span>
                  ))
                : post.category && (
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors inline-block">
                      {post.category}
                    </span>
                  )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
} 