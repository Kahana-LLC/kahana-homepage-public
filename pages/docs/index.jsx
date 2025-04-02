import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomPhoto, getOptimizedPhotoUrl } from '../../utils/pexels';

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Add categories array
const categories = [
  'All',
  'Getting Started',
  'User Guide',
  'API Reference',
  'Best Practices',
  'Updates'
];

// This would typically come from a CMS or database
const allDocs = {
  'getting-started': {
    title: 'Getting Started with Kahana Browser',
    excerpt: 'Learn how to set up and start using Kahana Browser for your enterprise needs.',
    content: `
      <h2>Introduction</h2>
      <p>Welcome to Kahana Browser, your enterprise-grade solution for secure and productive browsing. This guide will help you get started with installation, basic configuration, and essential features.</p>

      <h2>System Requirements</h2>
      <p>Before installing Kahana Browser, ensure your system meets these requirements:</p>
      <ul>
        <li>Operating System: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 20.04+)</li>
        <li>Processor: Intel Core i5/AMD Ryzen 5 or better</li>
        <li>Memory: 8GB RAM minimum (16GB recommended)</li>
        <li>Storage: 500MB free space</li>
        <li>Network: Stable internet connection</li>
      </ul>

      <h2>Installation</h2>
      <p>Follow these steps to install Kahana Browser:</p>
      <ol>
        <li>Download the installer from your enterprise portal</li>
        <li>Run the installer with administrator privileges</li>
        <li>Follow the installation wizard prompts</li>
        <li>Launch Kahana Browser and sign in with your enterprise credentials</li>
      </ol>

      <h2>Initial Setup</h2>
      <p>After installation, complete these setup steps:</p>
      <ul>
        <li>Configure your enterprise SSO settings</li>
        <li>Set up your security preferences</li>
        <li>Customize your workspace layout</li>
        <li>Import your bookmarks and settings</li>
      </ul>

      <h2>Essential Features</h2>
      <p>Get familiar with these key features:</p>
      <ul>
        <li><strong>Multi-View:</strong> Work with multiple windows simultaneously</li>
        <li><strong>Smart Navigation:</strong> Access frequently used sites quickly</li>
        <li><strong>Security Controls:</strong> Manage enterprise security settings</li>
        <li><strong>AI Assistant:</strong> Get help with common tasks</li>
      </ul>

      <h2>Next Steps</h2>
      <p>After completing the basic setup:</p>
      <ul>
        <li>Explore advanced features in our <a href="/docs/advanced-features" className="text-[#66C2BE] hover:text-[#55B3AF]">Advanced Features Guide</a></li>
        <li>Learn about security best practices in our <a href="/docs/security-guide" className="text-[#66C2BE] hover:text-[#55B3AF]">Security Guide</a></li>
        <li>Check our <a href="/faq" className="text-[#66C2BE] hover:text-[#55B3AF]">FAQ section</a> for common questions</li>
      </ul>
    `,
    category: 'Getting Started',
    date: 'March 15, 2024'
  },
  'advanced-features': {
    title: 'Advanced Features Guide',
    excerpt: 'Explore the advanced capabilities of Kahana Browser for power users.',
    content: `
      <h2>Advanced Features Overview</h2>
      <p>Kahana Browser offers powerful features for enterprise users who need more control and customization options. This guide covers advanced features and configurations.</p>

      <h2>Custom Workspace Layouts</h2>
      <p>Create and manage custom workspace layouts:</p>
      <ul>
        <li>Save multiple layout configurations</li>
        <li>Set up automatic layout switching</li>
        <li>Configure workspace shortcuts</li>
        <li>Manage layout permissions</li>
      </ul>

      <h2>Advanced Security Settings</h2>
      <p>Configure detailed security controls:</p>
      <ul>
        <li>Set up custom security policies</li>
        <li>Configure advanced threat protection</li>
        <li>Manage certificate handling</li>
        <li>Set up custom content filtering</li>
      </ul>

      <h2>Integration Capabilities</h2>
      <p>Connect Kahana with your enterprise tools:</p>
      <ul>
        <li>Configure SSO integrations</li>
        <li>Set up API connections</li>
        <li>Manage third-party extensions</li>
        <li>Configure custom protocols</li>
      </ul>

      <h2>Performance Optimization</h2>
      <p>Optimize Kahana for your needs:</p>
      <ul>
        <li>Configure memory management</li>
        <li>Set up caching preferences</li>
        <li>Manage resource allocation</li>
        <li>Optimize network settings</li>
      </ul>

      <h2>Additional Resources</h2>
      <p>For more information:</p>
      <ul>
        <li>Visit our <a href="/faq" className="text-[#66C2BE] hover:text-[#55B3AF]">FAQ section</a> for common questions</li>
        <li>Check our <a href="/docs/security-guide" className="text-[#66C2BE] hover:text-[#55B3AF]">Security Guide</a> for best practices</li>
        <li>Contact support for specific issues</li>
      </ul>
    `,
    category: 'Advanced',
    date: 'March 15, 2024'
  },
  'security-guide': {
    title: 'Security Guide',
    excerpt: 'Learn about security features and best practices in Kahana Browser.',
    content: `
      <h2>Security Overview</h2>
      <p>Kahana Browser provides comprehensive security features to protect your enterprise data and users. This guide covers security features and best practices.</p>

      <h2>Core Security Features</h2>
      <p>Essential security capabilities include:</p>
      <ul>
        <li>Enterprise-grade encryption</li>
        <li>Advanced threat protection</li>
        <li>Secure browsing sessions</li>
        <li>Content filtering</li>
        <li>Access controls</li>
      </ul>

      <h2>Security Best Practices</h2>
      <p>Follow these guidelines for optimal security:</p>
      <ul>
        <li>Regular security audits</li>
        <li>Policy enforcement</li>
        <li>User training</li>
        <li>Incident response planning</li>
        <li>Compliance monitoring</li>
      </ul>

      <h2>Compliance Features</h2>
      <p>Maintain compliance with:</p>
      <ul>
        <li>HIPAA requirements</li>
        <li>FedRAMP standards</li>
        <li>Industry regulations</li>
        <li>Data protection laws</li>
      </ul>

      <h2>Additional Resources</h2>
      <p>For more security information:</p>
      <ul>
        <li>Check our <a href="/faq" className="text-[#66C2BE] hover:text-[#55B3AF]">FAQ section</a> for security-related questions</li>
        <li>Review our <a href="/docs/advanced-features" className="text-[#66C2BE] hover:text-[#55B3AF]">Advanced Features Guide</a> for security configurations</li>
        <li>Contact our security team for specific concerns</li>
      </ul>
    `,
    category: 'Security',
    date: 'March 15, 2024'
  },
  'hubs': {
    title: 'Understanding Hubs',
    excerpt: 'A comprehensive guide to Kahana\'s powerful Hubs system for organizing and collaborating on web content.',
    category: 'User Guide',
    date: 'March 10, 2024',
    author: {
      name: 'Kahana Team',
      role: 'Documentation',
    },
    customImage: null,
    defaultImageQuery: 'organization management system'
  },
  'ai-assistant': {
    title: 'Using the AI Assistant',
    excerpt: 'Master Kahana\'s AI Assistant to enhance your browsing experience with natural language commands.',
    category: 'User Guide',
    date: 'March 5, 2024',
    author: {
      name: 'Kahana Team',
      role: 'Documentation',
    },
    customImage: null,
    defaultImageQuery: 'artificial intelligence assistant'
  },
  'multi-view': {
    title: 'Multi-View Features',
    excerpt: 'Learn how to use Kahana\'s powerful multi-view features for efficient multitasking.',
    category: 'User Guide',
    date: 'March 1, 2024',
    author: {
      name: 'Kahana Team',
      role: 'Documentation',
    },
    customImage: null,
    defaultImageQuery: 'multi screen workspace'
  }
};

// Featured doc is the most recent doc
const featuredDoc = {
  slug: 'getting-started',
  ...allDocs['getting-started']
};

// Recent docs are the next 3 most recent docs
const recentDocs = [
  { slug: 'hubs', ...allDocs['hubs'] },
  { slug: 'ai-assistant', ...allDocs['ai-assistant'] },
  { slug: 'multi-view', ...allDocs['multi-view'] }
];

export async function getStaticProps() {
  try {
    // Fetch images for all docs
    const allDocsWithImages = await Promise.all(
      Object.entries(allDocs).map(async ([slug, doc]) => {
        try {
          let docImage = doc.customImage;
          if (!docImage) {
            const photo = await getRandomPhoto(doc.defaultImageQuery);
            docImage = photo ? getOptimizedPhotoUrl(photo) : DEFAULT_PLACEHOLDER;
          }
          return [slug, {
            ...doc,
            slug,
            image: docImage
          }];
        } catch (error) {
          console.error(`Error fetching image for doc ${slug}:`, error);
          return [slug, {
            ...doc,
            slug,
            image: DEFAULT_PLACEHOLDER
          }];
        }
      })
    );

    // Convert back to object
    const docsWithImages = Object.fromEntries(allDocsWithImages);

    // Get featured doc image
    const featuredImage = docsWithImages[featuredDoc.slug]?.image || DEFAULT_PLACEHOLDER;

    return {
      props: {
        featuredImage,
        docs: docsWithImages,
        recentDocs: recentDocs.map(doc => ({
          ...doc,
          image: docsWithImages[doc.slug]?.image || DEFAULT_PLACEHOLDER
        }))
      },
      revalidate: 86400
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        featuredImage: DEFAULT_PLACEHOLDER,
        docs: Object.fromEntries(
          Object.entries(allDocs).map(([slug, doc]) => [
            slug,
            { ...doc, slug, image: DEFAULT_PLACEHOLDER }
          ])
        ),
        recentDocs: recentDocs.map(doc => ({
          ...doc,
          image: DEFAULT_PLACEHOLDER
        }))
      },
      revalidate: 86400
    };
  }
}

const Docs = ({ 
  featuredImage = DEFAULT_PLACEHOLDER, 
  recentDocs = [], 
  docs: docsWithImages = {} 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const docsPerPage = 6;

  // Filter and search docs
  const filteredDocs = useMemo(() => {
    if (!docsWithImages || Object.keys(docsWithImages).length === 0) return [];
    
    return Object.values(docsWithImages)
      .filter(doc => {
        const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
        const matchesSearch = searchQuery === '' || 
          doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
  }, [selectedCategory, searchQuery, docsWithImages]);

  // Show "No results" message if no docs match the filters
  const showNoResults = filteredDocs.length === 0;

  // Calculate pagination
  const totalPages = Math.ceil(filteredDocs.length / docsPerPage);
  const paginatedDocs = filteredDocs.slice(
    (currentPage - 1) * docsPerPage,
    currentPage * docsPerPage
  );

  return (
    <>
      <Head>
        <title>Documentation | Kahana Browser</title>
        <meta
          name="description"
          content="Comprehensive documentation and guides for Kahana Browser."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Documentation</h1>
            <p className="mt-4 text-xl text-gray-600">
              Find guides, tutorials, and reference materials to help you get the most out of Kahana Browser.
            </p>
          </div>

          {/* Featured Doc */}
          <div className="mt-12">
            <Link href={`/docs/${featuredDoc.slug}`}>
              <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-96">
                  <Image
                    src={featuredImage}
                    alt={featuredDoc.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="text-white">
                    <span className="inline-block bg-kahana-primary px-3 py-1 rounded-full text-sm mb-2">
                      {featuredDoc.category}
                    </span>
                    <h2 className="text-2xl font-bold mb-2">{featuredDoc.title}</h2>
                    <p className="text-gray-200">{featuredDoc.excerpt}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Recent Docs */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Documentation</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentDocs.map((doc) => (
                <Link key={doc.slug} href={`/docs/${doc.slug}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={doc.image}
                        alt={doc.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-kahana-primary text-white px-3 py-1 rounded-full text-sm mb-2">
                        {doc.category}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-600">{doc.excerpt}</p>
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
                placeholder="Search documentation..."
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

            {/* All Docs Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedDocs.map((doc) => (
                <Link key={doc.slug} href={`/docs/${doc.slug}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={doc.image}
                        alt={doc.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-kahana-primary text-white px-3 py-1 rounded-full text-sm mb-2">
                        {doc.category}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-600">{doc.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results Message */}
            {showNoResults && (
              <div className="text-center py-12">
                <p className="text-gray-600">No documentation found matching your criteria.</p>
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
    </>
  );
}

export default Docs; 