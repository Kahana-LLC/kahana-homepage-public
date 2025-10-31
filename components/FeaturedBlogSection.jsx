import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomPhoto, getOptimizedPhotoUrl, getPlaceholderImageUrl } from '../utils/pexels';
import { suggestNatureImageQuery } from '../utils/blog-helpers';
import { getAuthorDetails } from '../utils/authorUtils';

// Individual blog post card with image loading
const FeaturedBlogCard = ({ post }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  // Fetch image on-demand when component mounts
  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoadingImage(true);
        const primaryQuery = post.defaultImageQuery || suggestNatureImageQuery(post.category);
        // Use the post slug as unique identifier to prevent duplicate images
        const photo = await getRandomPhoto(primaryQuery, post.slug);
        
        if (photo) {
          setImageUrl(getOptimizedPhotoUrl(photo));
        } else {
          // Use placeholder if no photo found
          setImageUrl(getPlaceholderImageUrl(primaryQuery, post.slug));
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        // Use placeholder on error
        const primaryQuery = post.defaultImageQuery || suggestNatureImageQuery(post.category);
        setImageUrl(getPlaceholderImageUrl(primaryQuery, post.slug));
      } finally {
        setIsLoadingImage(false);
      }
    };

    fetchImage();
  }, [post.defaultImageQuery, post.category, post.slug]);

  return (
    <Link href={`/blog/${post.slug}`} className="group no-underline">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden flex flex-col h-full">
        <div className="relative h-48 w-full">
          {isLoadingImage ? (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          ) : (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-[#4A5745] mb-2 group-hover:text-[#728552] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <div className="flex items-center mb-2 space-x-2">
            {/* Author Avatars */}
            <div className="flex -space-x-2">
              {getAuthorDetails(post.authors).map((author) => (
                <div key={author.name} className="relative">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={28}
                    height={28}
                    className="rounded-full border-2 border-white"
                  />
                </div>
              ))}
            </div>
            {/* Author Names */}
            <span className="text-sm text-[#4A5745]">
              {getAuthorDetails(post.authors).map(author => author.name).join(', ')}
            </span>
          </div>
          <div className="text-xs text-[#4A5745] mb-2">
            {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })} • {post.readingTime || post.readingTime === 0 ? `${post.readingTime} min read` : ''}
          </div>
          <p className="text-[#4A5745] text-sm mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {post.category.map((cat) => (
              <span key={cat} className="bg-[#F3F8E4] text-[#4A5745] px-3 py-1 rounded-full text-xs font-medium">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const FeaturedBlogSection = ({ posts = [] }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {posts.map((post) => (
            <FeaturedBlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog">
            <button className="nav-button download bg-[#788B59] text-white font-bold px-8 py-3 rounded-md hover:bg-[#728552] transition-colors no-underline hover:no-underline focus:no-underline shadow-sm" style={{ textDecoration: 'none' }}>
              View All &rarr;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogSection; 