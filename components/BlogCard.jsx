import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!post) {
    return null;
  }

  const postAuthors = getAuthorDetails(post.authors);

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-48">
          <Image
            src={post.image || DEFAULT_PLACEHOLDER}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 pb-4">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-4 text-gray-900 hover:text-kahana-accent-sunset transition-colors line-clamp-2">
            {post.title}
          </h3>
        </div>

        <div className="p-6 pt-0 flex-grow flex flex-col">
          {/* Excerpt with gradient fade */}
          <div className="relative mb-6 flex-grow">
            <p className="text-gray-600 line-clamp-4">
              {post.excerpt}
            </p>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          {/* Bottom metadata */}
          <div className="flex flex-col gap-4">
            {/* Authors */}
            <div className="flex items-center space-x-4">
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

            {/* Categories and Date */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {Array.isArray(post.category) ? 
                  post.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-sm font-medium text-kahana-accent-water bg-kahana-accent-water/10 px-2.5 py-1 rounded-full"
                    >
                      {cat}
                    </span>
                  ))
                  : 
                  <span className="text-sm font-medium text-kahana-accent-water bg-kahana-accent-water/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                }
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
} 