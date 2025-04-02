import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomPhoto, getOptimizedPhotoUrl } from '../utils/pexels';

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Add categories array
const categories = [
  'All',
  'White Papers',
  'Videos',
  'Case Studies',
  'Tutorials',
  'Templates',
  'Guides'
];

// This would typically come from a CMS or database
const allResources = {
  'digital-products-guide': {
    title: 'Complete Guide to Digital Products',
    excerpt: 'Learn how to create, market, and sell digital products successfully.',
    category: 'Guides',
    date: 'March 15, 2024',
    type: 'pdf',
    downloadUrl: '/resources/digital-products-guide.pdf',
    customImage: null,
    defaultImageQuery: 'digital products marketing'
  },
  'content-monetization': {
    title: 'Content Monetization Strategies',
    excerpt: 'Discover effective strategies for monetizing your content and building sustainable revenue streams.',
    category: 'White Papers',
    date: 'March 10, 2024',
    type: 'pdf',
    downloadUrl: '/resources/content-monetization.pdf',
    customImage: null,
    defaultImageQuery: 'content monetization business'
  },
  'subscription-model': {
    title: 'Building a Successful Subscription Model',
    excerpt: 'A comprehensive guide to implementing and optimizing subscription-based business models.',
    category: 'Case Studies',
    date: 'March 5, 2024',
    type: 'video',
    videoUrl: 'https://example.com/subscription-model-video',
    customImage: null,
    defaultImageQuery: 'subscription business model'
  },
  'content-creation': {
    title: 'Content Creation Best Practices',
    excerpt: 'Learn the best practices for creating high-quality, engaging content that drives results.',
    category: 'Tutorials',
    date: 'March 1, 2024',
    type: 'video',
    videoUrl: 'https://example.com/content-creation-video',
    customImage: null,
    defaultImageQuery: 'content creation process'
  },
  'marketing-templates': {
    title: 'Marketing Templates Bundle',
    excerpt: 'A collection of ready-to-use templates for your marketing campaigns.',
    category: 'Templates',
    date: 'February 28, 2024',
    type: 'zip',
    downloadUrl: '/resources/marketing-templates.zip',
    customImage: null,
    defaultImageQuery: 'marketing templates design'
  }
};

// Featured resource is the most recent resource
const featuredResource = {
  slug: 'digital-products-guide',
  ...allResources['digital-products-guide']
};

// Recent resources are the next 3 most recent resources
const recentResources = [
  { slug: 'content-monetization', ...allResources['content-monetization'] },
  { slug: 'subscription-model', ...allResources['subscription-model'] },
  { slug: 'content-creation', ...allResources['content-creation'] }
];

export async function getStaticProps() {
  try {
    // Fetch images for all resources
    const allResourcesWithImages = await Promise.all(
      Object.entries(allResources).map(async ([slug, resource]) => {
        try {
          let resourceImage = resource.customImage;
          if (!resourceImage) {
            const photo = await getRandomPhoto(resource.defaultImageQuery);
            resourceImage = photo ? getOptimizedPhotoUrl(photo) : DEFAULT_PLACEHOLDER;
          }
          return [slug, {
            ...resource,
            slug,
            image: resourceImage
          }];
        } catch (error) {
          console.error(`Error fetching image for resource ${slug}:`, error);
          return [slug, {
            ...resource,
            slug,
            image: DEFAULT_PLACEHOLDER
          }];
        }
      })
    );

    // Convert back to object
    const resourcesWithImages = Object.fromEntries(allResourcesWithImages);

    // Get featured resource image
    const featuredImage = resourcesWithImages[featuredResource.slug]?.image || DEFAULT_PLACEHOLDER;

    return {
      props: {
        featuredImage,
        resources: resourcesWithImages,
        recentResources: recentResources.map(resource => ({
          ...resource,
          image: resourcesWithImages[resource.slug]?.image || DEFAULT_PLACEHOLDER
        }))
      },
      revalidate: 86400
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        featuredImage: DEFAULT_PLACEHOLDER,
        resources: Object.fromEntries(
          Object.entries(allResources).map(([slug, resource]) => [
            slug,
            { ...resource, slug, image: DEFAULT_PLACEHOLDER }
          ])
        ),
        recentResources: recentResources.map(resource => ({
          ...resource,
          image: DEFAULT_PLACEHOLDER
        }))
      },
      revalidate: 86400
    };
  }
}

const Resources = ({ 
  featuredImage = DEFAULT_PLACEHOLDER, 
  recentResources = [], 
  resources: resourcesWithImages = {} 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 6;

  // Filter and search resources
  const filteredResources = useMemo(() => {
    if (!resourcesWithImages || Object.keys(resourcesWithImages).length === 0) return [];
    
    return Object.values(resourcesWithImages)
      .filter(resource => {
        const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
        const matchesSearch = searchQuery === '' || 
          resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
  }, [selectedCategory, searchQuery, resourcesWithImages]);

  // Show "No results" message if no resources match the filters
  const showNoResults = filteredResources.length === 0;

  // Calculate pagination
  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);
  const paginatedResources = filteredResources.slice(
    (currentPage - 1) * resourcesPerPage,
    currentPage * resourcesPerPage
  );

  return (
    <div className="bg-white">
      <Head>
        <title>Resources | Kahana</title>
        <meta
          name="description"
          content="Access our comprehensive collection of resources to help you succeed in monetizing your digital content."
        />
      </Head>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Resources</h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore our comprehensive collection of resources designed to help you succeed in monetizing your digital content.
          </p>
        </div>

        {/* Featured Resource */}
        <div className="mt-12">
          <Link href={featuredResource.downloadUrl || featuredResource.videoUrl}>
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-96">
                <Image
                  src={featuredImage}
                  alt={featuredResource.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="text-white">
                  <span className="inline-block bg-kahana-primary px-3 py-1 rounded-full text-sm mb-2">
                    {featuredResource.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-2">{featuredResource.title}</h2>
                  <p className="text-gray-200">{featuredResource.excerpt}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Resources</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentResources.map((resource) => (
              <Link key={resource.slug} href={resource.downloadUrl || resource.videoUrl}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-kahana-primary text-white px-3 py-1 rounded-full text-sm mb-2">
                      {resource.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600">{resource.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-kahana-primary focus:border-kahana-primary"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-kahana-primary focus:border-kahana-primary"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* All Resources Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paginatedResources.map((resource) => (
              <Link key={resource.slug} href={resource.downloadUrl || resource.videoUrl}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-kahana-primary text-white px-3 py-1 rounded-full text-sm mb-2">
                      {resource.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600">{resource.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {showNoResults && (
            <div className="text-center py-12">
              <p className="text-gray-600">No resources found matching your criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === page
                      ? 'bg-kahana-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resources;
