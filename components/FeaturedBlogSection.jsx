import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomPhoto, getOptimizedPhotoUrl } from '../utils/pexels';

// Import team member headshots
import adam from '../assets/headshots/Adam_Kershner.webp';

// Author mapping for blog posts
const authorImages = {
  'Adam Kershner': adam,
};

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Default posts data
const defaultPosts = [
  {
    slug: 'technical-debt',
    title: 'Tackling Technical Debt and Redefining Application Access',
    excerpt: 'How modern enterprises are balancing innovation with system maintenance while revolutionizing their approach to application security.',
    category: 'Engineering',
    date: 'March 15, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'CTO',
    },
    customImage: null,
    defaultImageQuery: 'modern technology office workspace'
  },
  {
    slug: 'zero-trust',
    title: 'Implementing Zero Trust in Modern Enterprises',
    excerpt: 'A comprehensive guide to implementing Zero Trust architecture in your organization.',
    category: 'Security',
    date: 'March 10, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'CTO',
    },
    customImage: null,
    defaultImageQuery: 'network security digital protection'
  },
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration Strategies for 2025',
    excerpt: 'Explore the latest strategies and best practices for successful cloud migration.',
    category: 'Cloud Computing',
    date: 'March 5, 2024',
    author: {
      name: 'Adam Kershner',
      role: 'CTO',
    },
    customImage: null,
    defaultImageQuery: 'cloud computing data center'
  }
];

export default function FeaturedBlogSection({ posts = defaultPosts }) {
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
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-kahana-accent-water/10 px-3 py-1.5 font-medium text-kahana-accent-water">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={post.image || DEFAULT_PLACEHOLDER}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={authorImages[post.author.name]}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full ring-2 ring-kahana-accent-water/20"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-kahana-primary">{post.author.name}</p>
                    <p className="text-xs text-kahana-primary-light">{post.author.role}</p>
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-kahana-primary group-hover:text-kahana-accent-sunset">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-kahana-primary-light">{post.excerpt}</p>
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