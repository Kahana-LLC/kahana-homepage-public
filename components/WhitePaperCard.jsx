import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCalendarAlt, FaRegClock, FaDownload, FaFilePdf } from 'react-icons/fa';
import { getAuthorDetails } from '../utils/authorUtils';

export default function WhitePaperCard({ whitePaper }) {
  const authors = getAuthorDetails(whitePaper.authors);
  const readingTime = whitePaper.readingTime || 15;
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-48 w-full">
        <Image
          src={whitePaper.coverImage || '/assets/kahana_blog_image.jpg'}
          alt={whitePaper.title}
          fill
          className="object-cover"
          onError={(e) => {
            e.target.src = '/assets/kahana_blog_image.jpg';
          }}
        />
        {whitePaper.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#21706c] text-white px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <FaFilePdf className="w-4 h-4 text-red-600" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="mb-3">
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {whitePaper.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#21706c] transition-colors">
          <Link href={`/white-papers/${whitePaper.slug}`}>
            {whitePaper.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {whitePaper.excerpt}
        </p>

        {/* Tags */}
        {whitePaper.tags && whitePaper.tags.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {whitePaper.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
              {whitePaper.tags.length > 3 && (
                <span className="text-oasis-green-800 text-xs px-2 py-1">
                  +{whitePaper.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-oasis-green-800 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaRegCalendarAlt className="w-4 h-4 mr-1" />
              <span>{formatDate(whitePaper.date)}</span>
            </div>
            <div className="flex items-center">
              <FaRegClock className="w-4 h-4 mr-1" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>

        {/* Author */}
        {authors && authors.length > 0 && (
          <div className="flex items-center mb-4">
            <div className="flex -space-x-2">
              {authors.slice(0, 2).map((author, index) => (
                <div key={index} className="relative">
                  <Image
                    src={author.avatar || '/assets/headshots/adam-kershner.jpg'}
                    alt={author.name}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                    onError={(e) => {
                      e.target.src = '/assets/headshots/adam-kershner.jpg';
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {authors.length === 1 
                  ? authors[0].name 
                  : `${authors[0].name}${authors.length > 1 ? ` +${authors.length - 1}` : ''}`
                }
              </p>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <Link
            href={`/white-papers/${whitePaper.slug}`}
            className="inline-flex items-center text-[#21706c] hover:text-[#1a5a57] font-medium text-sm transition-colors"
          >
            Read White Paper
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <Link
            href={whitePaper.downloadUrl || `/white-papers/${whitePaper.slug}`}
            className="inline-flex items-center bg-[#21706c] hover:bg-[#1a5a57] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <FaDownload className="w-4 h-4 mr-2" />
            Download PDF
          </Link>
        </div>
      </div>
    </div>
  );
}
