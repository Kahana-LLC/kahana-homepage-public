import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedBlogSection = ({ posts = [] }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden flex flex-col h-full">
                <div className="relative h-48 w-full">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">No Image</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#66C2BE] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center mb-2 space-x-2">
                    <span className="text-sm text-gray-700">
                      {post.authors.join(', ')}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })} • {post.readingTime || post.readingTime === 0 ? `${post.readingTime} min read` : ''}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.category.map((cat) => (
                      <span key={cat} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog">
            <button className="bg-[#21706c] text-white font-bold px-8 py-3 rounded-md hover:bg-[#15514f] transition-colors">
              View All &rarr;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogSection; 