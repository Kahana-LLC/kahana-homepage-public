import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDocBySlug, getAllDocs } from '../../utils/docsUtils';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorCard from '../../components/AuthorCard';
import DiscordCTA from '../../components/DiscordCTA';
import { FaRegCalendarAlt, FaBookOpen, FaRegClock } from 'react-icons/fa';
import { getAuthorDetails } from '../../utils/authorUtils';
import SEO from '../../components/SEO';
import { docsConfig, isUniversalComponentEnabled, getUniversalComponent } from '../../config/docsConfig';
import fs from 'fs';
import path from 'path';

// Generate static paths for documentation
export async function getStaticPaths() {
  const docsDir = path.join(process.cwd(), "data/docs");
  const files = fs.readdirSync(docsDir);
  const paths = [];
  
  for (const file of files) {
    if (file.endsWith(".json")) {
      try {
        const filePath = path.join(docsDir, file);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const doc = JSON.parse(fileContents);
        
        // Use the slug field from the JSON if available, otherwise use filename
        const slug = doc.slug || file.replace(/\.json$/, "");
        paths.push({
          params: { slug },
        });
      } catch (error) {
        console.error(`Error reading ${file}:`, error);
        // Fallback to filename
        paths.push({
          params: { slug: file.replace(/\.json$/, "") },
        });
      }
    }
  }

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  try {
    const doc = await getDocBySlug(params.slug);
    const allDocs = await getAllDocs();

    if (!doc) {
      return {
        notFound: true,
      };
    }

    // Get related docs from the same category
    const relatedDocs = allDocs
      .filter(d => d.category === doc.category && d.slug !== doc.slug)
      .slice(0, docsConfig.defaults.relatedDocsCount);

    return {
      props: {
        doc,
        relatedDocs,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
}

function formatDate(dateString) {
  // Use a fixed format that will be consistent between server and client
  const date = new Date(dateString);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export default function DocPage({ doc, relatedDocs }) {
  const router = useRouter();
  const [readingTime, setReadingTime] = useState(5);

  useEffect(() => {
    if (doc?.content) {
      const wordCount = doc.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
      setReadingTime(Math.ceil(wordCount / docsConfig.defaults.readingTimeWordsPerMinute));
    }
  }, [doc]);

  if (!doc) {
    return <div>Document not found</div>;
  }

  // Get authors for this document, default to Adam Kershner if no authors specified
  const docAuthors = doc.authors ? getAuthorDetails(doc.authors) : getAuthorDetails(['Adam Kershner']);

  return (
    <>
      <SEO
        title={`${doc.title} | Documentation`}
        description={doc.description}
        url={`https://kahana.co/docs/${doc.slug}`}
        type="article"
      />

      <div className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <header className="mb-12">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <Breadcrumbs 
                items={[
                  { name: "Home", url: "/" },
                  { name: "Documentation", url: "/docs" },
                  { name: doc.title, url: `/docs/${doc.slug}` },
                ]} 
              />
            </nav>

            <div className="flex flex-col space-y-6">
              {/* Title */}
              <h1 className="text-4xl font-bold text-[#4A5745]">{doc.title}</h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3">
                <AuthorCard authors={docAuthors} variant="header" />
                <time 
                  dateTime={doc.date}
                  className="inline-flex items-center px-3 py-1.5 text-[#4A5745] text-sm"
                >
                  <FaRegCalendarAlt className="w-4 h-4 mr-2" />
                  <span className="mr-1">Last updated:</span>
                  {formatDate(doc.date)}
                </time>
                <div className="inline-flex items-center px-3 py-1.5 text-[#4A5745] text-sm">
                  <FaRegClock className="w-4 h-4 mr-2" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: doc.content }}
            suppressHydrationWarning={true}
          />

          {/* Discord CTA */}
          {isUniversalComponentEnabled('discordCTA') && (
            <DiscordCTA 
              {...getUniversalComponent('discordCTA')}
            />
          )}

          {/* Related Docs */}
          {relatedDocs.length > 0 && (
            <div className="mt-16 pt-8 border-t border-[#728552]/30">
              <h2 className="text-2xl font-bold text-[#4A5745] mb-6">Related Documentation</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedDocs.map((relatedDoc) => (
                  <Link
                    key={relatedDoc.slug}
                    href={`/docs/${relatedDoc.slug}`}
                    className="block group"
                  >
                    <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                      <h3 className="text-lg font-semibold text-[#4A5745] group-hover:text-[#728552]">
                        {relatedDoc.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#4A5745] line-clamp-2">
                        {relatedDoc.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#4A5745] mb-6">About the Author</h2>
            <AuthorCard 
              authors={docAuthors}
              variant="bio" 
            />
          </div>
        </article>
      </div>
    </>
  );
} 