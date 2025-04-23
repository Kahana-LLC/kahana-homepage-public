import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Utility function to truncate text
function truncateExcerpt(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Helper function to get author headshot
function getAuthorHeadshot(authorName) {
  const formattedName = authorName.toLowerCase().replace(/\s+/g, '_');
  return `/assets/headshots/${formattedName}.jpg`;
}

export default function FeaturedBlogSection({ posts = [] }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-kahana-primary sm:text-4xl">
            Latest from Our Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-kahana-primary-light">
            Insights and updates from the Kahana team
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group flex flex-col">
              {/* Categories */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {Array.isArray(post.category) ? 
                  post.category.map((cat) => (
                    <span
                      key={cat}
                      className="inline-block px-2.5 py-1 text-sm bg-gray-50 text-gray-800 rounded-full border border-gray-200"
                    >
                      {cat}
                    </span>
                  ))
                  : typeof post.category === 'string' ?
                    post.category.split(/(?=[A-Z]|\s&\s|&(?=[A-Z]))/g)
                      .filter(Boolean)
                      .map((cat, index) => (
                        <span
                          key={index}
                          className="inline-block px-2.5 py-1 text-sm bg-gray-50 text-gray-800 rounded-full border border-gray-200"
                        >
                          {cat.trim().replace(/^&\s*/, '')}
                        </span>
                      ))
                  : null
                }
              </div>

              {/* Image */}
              <Link href={`/blog/${post.slug}`} className="block mb-4">
                <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={post.image || DEFAULT_PLACEHOLDER}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </Link>

              {/* Title and Excerpt */}
              <div className="flex-grow">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-kahana-accent-water transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {truncateExcerpt(post.excerpt)}
                  </p>
                </Link>
              </div>

              {/* Authors and Date */}
              <div className="flex items-start gap-2">
                <div className="flex -space-x-1.5">
                  {post.authors?.slice(0, 3).map((author) => (
                    <div key={author.name} className="relative">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white bg-white">
                        <Image
                          src={getAuthorHeadshot(author.name)}
                          alt={author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 truncate">
                    {post.authors?.map(author => author.name).join(', ')}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readingTime}m read</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-[#66C2BE] hover:bg-[#55B3AF] transition-all duration-200"
          >
            View All Posts
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 