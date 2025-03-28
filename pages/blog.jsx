import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// This would typically come from a CMS or database
const featuredPost = {
  slug: 'technical-debt',
  title: 'Tackling Technical Debt and Redefining Application Access',
  excerpt: 'How modern enterprises are balancing innovation with system maintenance while revolutionizing their approach to application security.',
  category: 'Enterprise Technology',
  date: 'March 15, 2024',
  author: {
    name: 'Adam Kershner',
    role: 'Chief Technology Officer',
    initials: 'AK'
  },
  image: '/blog/technical-debt-hero.jpg'
};

const recentPosts = [
  {
    slug: 'zero-trust',
    title: 'Implementing Zero Trust in Modern Enterprises',
    excerpt: 'A comprehensive guide to implementing zero trust architecture in your organization.',
    category: 'Security',
    date: 'March 10, 2024',
    image: '/blog/placeholder.jpg'
  },
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration Strategies for 2024',
    excerpt: 'Best practices and strategies for successful cloud migration in the modern era.',
    category: 'Cloud Computing',
    date: 'March 5, 2024',
    image: '/blog/placeholder.jpg'
  },
  {
    slug: 'devsecops',
    title: 'DevSecOps: Bridging Development and Security',
    excerpt: 'How to integrate security practices into your development pipeline effectively.',
    category: 'Development',
    date: 'March 1, 2024',
    image: '/blog/placeholder.jpg'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-kahana-ui-background">
      <Head>
        <title>Blog - Kahana</title>
        <meta name="description" content="Insights and updates from the Kahana team" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-kahana-ui-surface rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/blog/technical-debt-hero.jpg"
                  alt="Technical Debt"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-kahana-accent-mint text-kahana-primary-dark rounded-full mb-4">
                  Engineering
                </span>
                <h1 className="text-3xl font-bold text-kahana-primary-dark mb-4">
                  Tackling Technical Debt and Redefining Application Access
                </h1>
                <p className="text-kahana-primary mb-6">
                  Explore our journey in addressing technical debt while revolutionizing how users interact with our platform.
                </p>
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/team/author-avatar.jpg"
                      alt="Author"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-kahana-primary-dark">Adam Kershner</p>
                    <p className="text-sm text-kahana-primary">March 15, 2024</p>
                  </div>
                </div>
                <Link href="/blog/technical-debt" className="inline-block px-6 py-3 bg-kahana-primary text-white rounded-lg hover:bg-kahana-primary-dark transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-bold text-kahana-primary-dark mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="bg-kahana-ui-surface rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-kahana-accent-sage text-kahana-primary-dark rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold text-kahana-primary-dark mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#3B675E]">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-kahana-primary mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-kahana-primary">{post.date}</span>
                    <span className="text-sm font-medium text-kahana-primary-dark">5 min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog; 