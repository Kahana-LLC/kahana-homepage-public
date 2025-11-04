import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { getAllDocsMetadata } from '../../utils/docsUtils';
import DocCard from '../../components/DocCard';
import DocFilter from '../../components/DocFilter';
import Breadcrumbs from '../../components/Breadcrumbs';
import DiscordCTA from '../../components/DiscordCTA';
import SEO from '../../components/SEO';
import { docsConfig, isUniversalComponentEnabled, getUniversalComponent } from '../../config/docsConfig';

export async function getStaticProps() {
  const docs = await getAllDocsMetadata();
  const categories = [...new Set(docs.map(doc => doc.category))].sort();
  
  return {
    props: {
      docs,
      categories,
    },
  };
}

export default function DocsIndex({ docs, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter docs based on category and search query
  const filteredDocs = useMemo(() => {
    return docs.filter(doc => {
      const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        (doc.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [docs, activeCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Documentation"
        description="Browse Kahana's documentation to learn about features, security, and best practices."
        url="https://kahana.co/docs"
        type="website"
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Breadcrumbs 
              items={[
                { name: "Home", url: "/" },
                { name: "Documentation", url: "/docs" },
              ]} 
            />
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#011910] mb-4">
              Documentation
            </h1>
            <p className="text-xl text-[#4A5745] max-w-2xl mx-auto">
              Learn how to use Kahana's features, understand our security measures, and follow best practices for your team.
            </p>
          </div>

          {/* Filter Component */}
          <DocFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Documentation Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDocs.map((doc) => (
              <DocCard key={doc.slug} doc={doc} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredDocs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-[#011910] mb-2">No documentation found</h3>
              <p className="text-[#4A5745]">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}

          {/* Discord CTA */}
          {isUniversalComponentEnabled('discordCTA') && (
            <DiscordCTA 
              {...getUniversalComponent('discordCTA')}
            />
          )}
        </div>
      </div>
    </>
  );
} 