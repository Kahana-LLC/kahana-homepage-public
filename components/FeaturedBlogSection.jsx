import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomPhoto, getOptimizedPhotoUrl, getPlaceholderImageUrl } from '../utils/pexels';
import { suggestNatureImageQuery, normalizeBlogCategories, formatBlogPostDate } from '../utils/blog-helpers';
import { getAuthorDetails } from '../utils/authorUtils';
import { getBlogImageUrl } from '../utils/blog-image-url';

const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Individual blog post card with image loading
const FeaturedBlogCard = ({ post }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Fetch image on-demand when component mounts
  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoadingImage(true);
        
        // Check if post has a featuredImage URL - resolve through policy helper
        if (post.featuredImage) {
          setImageUrl(getBlogImageUrl(post.featuredImage));
          setIsLoadingImage(false);
          return;
        }
        
        const primaryCategory = normalizeBlogCategories(post.category)[0] || 'Security';
        const primaryQuery = post.defaultImageQuery || suggestNatureImageQuery(primaryCategory);
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
        const primaryCategory = normalizeBlogCategories(post.category)[0] || 'Security';
        const primaryQuery = post.defaultImageQuery || suggestNatureImageQuery(primaryCategory);
        setImageUrl(getPlaceholderImageUrl(primaryQuery, post.slug));
      } finally {
        setIsLoadingImage(false);
      }
    };

    setImageError(false);
    fetchImage();
  }, [post.defaultImageQuery, post.category, post.slug, post.featuredImage]);

  return (
    <Link href={`/blog/${post.slug}`} className="group no-underline">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden flex flex-col h-full">
        <div className="relative h-48 w-full">
          {isLoadingImage ? (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-oasis-green-800">Loading...</div>
            </div>
          ) : (
            <Image
              src={imageError || !imageUrl || imageUrl.trim() === '' ? DEFAULT_PLACEHOLDER : imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized={imageUrl?.startsWith('data:') === true}
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-oasis-green-800 mb-2 group-hover:text-oasis-green-600 transition-colors line-clamp-2">
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
            <span className="text-sm text-oasis-green-800">
              {getAuthorDetails(post.authors).map(author => author.name).join(', ')}
            </span>
          </div>
          <div className="text-xs text-oasis-green-800 mb-2">
            {formatBlogPostDate(post.date)} • {post.readingTime || post.readingTime === 0 ? `${post.readingTime} min read` : ''}
          </div>
          <p className="text-oasis-green-800 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {normalizeBlogCategories(post.category).map((cat) => (
              <span key={cat} className="bg-[#F3F8E4] text-oasis-green-800 px-3 py-1 rounded-full text-xs font-medium">
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
        <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {posts.map((post) => (
            <FeaturedBlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog">
            <button className="btn-primary px-8 py-3 no-underline hover:no-underline focus:no-underline">
              View All &rarr;
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogSection; 