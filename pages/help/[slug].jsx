import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDocBySlug, getAllDocs } from '../../utils/docsUtils';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorCard from '../../components/AuthorCard';
import { FaRegCalendarAlt, FaBookOpen, FaRegClock } from 'react-icons/fa';
import { getAuthorDetails } from '../../utils/authorUtils';
import SEO from '../../components/SEO';
import TechnicalInteractionDataDoc from '../../components/docs/TechnicalInteractionDataDoc';
import TrainingDoc from '../../components/docs/TrainingDoc';
import AssistantThemesDoc from '../../components/docs/AssistantThemesDoc';
import DeleteAccountDoc from '../../components/docs/DeleteAccountDoc';
import { docsConfig, getSectionDisplayName } from '../../config/docsConfig';
import { HELP_RELATED_DOC_SLUGS } from '../../data/helpRelatedDocSlugs';
import { parseTaxonomyTag } from '../../data/marketingTaxonomy';
import fs from 'fs';
import path from 'path';

// Generate static paths for help articles
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

    const docSection = doc.section || doc.category;
    const mappedRelated = (HELP_RELATED_DOC_SLUGS[doc.slug] || [])
      .map((slug) => allDocs.find((d) => d.slug === slug))
      .filter(Boolean);
    const sectionRelated = allDocs.filter(
      (d) => (d.section || d.category) === docSection && d.slug !== doc.slug,
    );
    const seen = new Set(mappedRelated.map((d) => d.slug));
    const relatedDocs = [
      ...mappedRelated,
      ...sectionRelated.filter((d) => !seen.has(d.slug)),
    ].slice(0, docsConfig.defaults.relatedDocsCount);

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

export default function HelpArticlePage({ doc, relatedDocs }) {
  const router = useRouter();
  const [readingTime, setReadingTime] = useState(5);

  useEffect(() => {
    if (doc?.content) {
      const wordCount = doc.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
      setReadingTime(Math.ceil(wordCount / docsConfig.defaults.readingTimeWordsPerMinute));
    }
  }, [doc]);

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-white px-4 py-12 text-center text-oasis-green-800">
        Loading…
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="min-h-screen bg-white px-4 py-12 text-center text-oasis-green-800">
        Article not found
      </div>
    );
  }

  // Get authors for this document, default to Adam Kershner if no authors specified
  const docAuthors = doc.authors ? getAuthorDetails(doc.authors) : getAuthorDetails(['Adam Kershner']);

  return (
    <>
      <SEO
        title={`${doc.title} | Help`}
        description={doc.description}
        url={`https://help.kahana.io/help/${doc.slug}`}
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
                  { name: "Help", url: "/help" },
                  { name: doc.title, url: `/help/${doc.slug}` },
                ]} 
              />
            </nav>

            <div className="flex flex-col space-y-6">
              {/* Title */}
              <h1 className="text-4xl font-bold text-oasis-green-800">{doc.title}</h1>
              <p className="text-sm font-medium text-oasis-green-700">
                {getSectionDisplayName(doc.section || doc.category)}
              </p>
              {(doc.tags || []).length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {(doc.tags || []).map((tag) => {
                    const parsed = parseTaxonomyTag(tag);
                    if (!parsed) return null;
                    return (
                      <Link
                        key={tag}
                        href={parsed.href}
                        className="rounded-full bg-[#EEF3D8] px-3 py-1 text-sm text-[#495800] no-underline hover:underline"
                      >
                        {parsed.label}
                      </Link>
                    );
                  })}
                </div>
              ) : null}

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3">
                <AuthorCard authors={docAuthors} variant="header" />
                <time 
                  dateTime={doc.date}
                  className="inline-flex items-center px-3 py-1.5 text-oasis-green-800 text-sm"
                >
                  <FaRegCalendarAlt className="w-4 h-4 mr-2" />
                  <span className="mr-1">Last updated:</span>
                  {formatDate(doc.date)}
                </time>
                <div className="inline-flex items-center px-3 py-1.5 text-oasis-green-800 text-sm">
                  <FaRegClock className="w-4 h-4 mr-2" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          {doc.content ? (
            <div
              className="prose prose-lg max-w-none no-underline"
              dangerouslySetInnerHTML={{ __html: doc.content }}
              suppressHydrationWarning={true}
            />
          ) : doc.slug === 'delete-my-account' ? (
            <DeleteAccountDoc />
          ) : doc.slug === 'assistant-themes' ? (
            <AssistantThemesDoc gallery={doc.gallery || []} />
          ) : doc.slug === 'training' ? (
            <TrainingDoc doc={doc} />
          ) : doc.slug === 'technical-and-interaction-data' ? (
            <TechnicalInteractionDataDoc />
          ) : (
            <div
              className="prose prose-lg max-w-none no-underline"
              dangerouslySetInnerHTML={{ __html: doc.content }}
              suppressHydrationWarning={true}
            />
          )}

          {/* Related Help */}
          {relatedDocs.length > 0 && (
            <div className="mt-16 pt-8 border-t border-oasis-green-600/30">
              <h2 className="text-2xl font-bold text-oasis-green-800 mb-6">Related Help</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedDocs.map((relatedDoc) => (
                  <Link
                    key={relatedDoc.slug}
                    href={`/help/${relatedDoc.slug}`}
                    className="block group doc-card-link no-underline"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transition-all duration-200">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-oasis-green-600">
                        {relatedDoc.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
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
            <h2 className="text-2xl font-bold text-oasis-green-800 mb-6">About the Author</h2>
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
