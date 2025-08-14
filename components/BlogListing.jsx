import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const { getAuthorDetails } = require('../utils/authorUtils');

// Format date helper
function formatDate(dateString) {
  const date = new Date(dateString);
  return `Last Updated: ${date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  })}`;
}

export default function BlogListing({ post }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!post) {
    return null;
  }

  const postAuthors = getAuthorDetails(post.authors);

  return (
    <article className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        {isClient && (
          <>
            <time dateTime={post.date} className="text-sm text-gray-500">
              {formatDate(post.date)}
            </time>
            <span className="text-sm text-gray-500">{post.readingTime} min read</span>
          </>
        )}
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h3 className="text-xl font-semibold hover:text-kahana-accent-sunset transition-colors">
          {post.title}
        </h3>
      </Link>
      <p className="text-gray-600">{post.excerpt}</p>
      {isClient && (
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
      )}
    </article>
  );
} 