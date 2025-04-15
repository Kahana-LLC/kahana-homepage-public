import React from 'react';
import Link from 'next/link';
import AuthorCard from './AuthorCard';
import { authors } from '../config/authors';

// Format date helper
function formatDate(dateString) {
  const date = new Date(dateString);
  return `Last Updated: ${date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  })}`;
}

export default function DocCard({ doc }) {
  // Default to Adam Kershner as the author
  const docAuthors = [{
    ...authors['Adam Kershner'],
    name: 'Adam Kershner',
  }];

  // Calculate reading time based on content length (200 words per minute)
  const readingTime = Math.ceil(doc.content?.replace(/<[^>]*>/g, '').split(/\s+/).length / 200) || 5;

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/docs/${doc.slug}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-kahana-accent-sage capitalize">
              {doc.category}
            </span>
            <time dateTime={doc.date} className="text-sm text-gray-500">
              {formatDate(doc.date)}
            </time>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-kahana-primary transition-colors">
            {doc.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {doc.description}
          </p>
          <div className="flex items-center justify-between">
            <AuthorCard authors={docAuthors} variant="reference" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{readingTime} min read</span>
              <span className="inline-flex items-center text-sm text-kahana-primary hover:text-kahana-primary-dark">
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
} 