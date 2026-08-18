import React from 'react';
import Link from 'next/link';
import AuthorCard from './AuthorCard';
import { getAuthorDetails } from '../utils/authorUtils';
import { getSectionDisplayName } from '../config/docsConfig';

// Format date helper
function formatDate(dateString) {
  const date = new Date(dateString);
  return `Last Updated: ${date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  })}`;
}

export default function DocCard({ doc, compact = false }) {
  // Get authors for this document, default to Adam Kershner if no authors specified
  const docAuthors = doc.authors ? getAuthorDetails(doc.authors) : getAuthorDetails(['Adam Kershner']);

  // Calculate reading time based on word count (200 words per minute)
  const readingTime = Math.ceil((doc.wordCount || 0) / 200) || 5;

  if (compact) {
    return (
      <article className="bg-white rounded-lg border border-gray-200 hover:border-oasis-green-600/40 hover:shadow-md transition-shadow duration-200 overflow-hidden h-full">
        <Link href={`/help/${doc.slug}`} className="block p-4 h-full no-underline doc-card-link">
          <span className="text-xs font-medium text-oasis-green-700">
            {getSectionDisplayName(doc.section || doc.category)}
          </span>
          <h3 className="text-base font-semibold mt-1 mb-1 text-gray-900 line-clamp-2">
            {doc.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-0">
            {doc.description}
          </p>
        </Link>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col h-full">
      <Link href={`/help/${doc.slug}`} className="flex flex-col h-full doc-card-link no-underline">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-oasis-green-600">
              {getSectionDisplayName(doc.section || doc.category)}
            </span>
            <time dateTime={doc.date} className="text-sm text-oasis-green-800">
              {formatDate(doc.date)}
            </time>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-oasis-green-600 transition-colors line-clamp-2">
            {doc.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {doc.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <AuthorCard authors={docAuthors} variant="reference" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-oasis-green-800">{readingTime} min read</span>
              <span className="inline-flex items-center text-sm text-oasis-green-500 hover:text-oasis-green-600">
                Read more
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