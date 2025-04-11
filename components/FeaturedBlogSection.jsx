import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthorCard from './AuthorCard';
import { authors } from '../config/authors';

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Utility function to truncate text
function truncateExcerpt(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-kahana-primary-light">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <span className="relative z-10 rounded-full bg-kahana-accent-water/10 px-3 py-1.5 font-medium text-kahana-accent-water">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
                      <div className="relative h-full w-full">
                        <Image
                          src={post.image || DEFAULT_PLACEHOLDER}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition duration-300 group-hover:scale-105"
                          priority
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-kahana-primary/0 transition-colors duration-300 group-hover:bg-kahana-primary/10" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-4">
                  <AuthorCard 
                    authors={post.authors || [{
                      name: post.author.name,
                      role: post.author.role,
                      avatar: authors[post.author.name]?.avatar || DEFAULT_PLACEHOLDER
                    }]}
                    variant="default"
                    imageClassName="w-10 h-10 rounded-lg object-cover"
                  />
                </div>
                <div className="group relative mt-4">
                  <h3 className="text-lg font-semibold leading-6 text-kahana-primary group-hover:text-kahana-accent-sunset">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-kahana-primary-light line-clamp-2">{truncateExcerpt(post.excerpt)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#66C2BE] hover:bg-[#55B3AF] focus:outline-none focus:ring-2 focus:ring-[#66C2BE] focus:ring-offset-2 shadow-md shadow-[#E3DFF1]/20 hover:shadow-lg hover:shadow-[#E3DFF1]/30 transition-all duration-300"
          >
            View All Posts
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 