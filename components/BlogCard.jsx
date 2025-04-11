import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-kahana-accent-water">
              {post.category}
            </span>
            <time dateTime={post.date} className="text-sm text-gray-500">
              {formatDate(post.date)}
            </time>
          </div>
          <h3 className="text-xl font-semibold mb-2 hover:text-kahana-accent-sunset transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {post.authors?.map((author) => (
                <span key={author.name} className="text-sm text-gray-500">
                  {author.name}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">{post.readingTime} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
} 