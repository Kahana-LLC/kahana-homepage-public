import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDocBySlug, getAllDocs } from '../../utils/docsUtils';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorCard from '../../components/AuthorCard';
import { FaRegCalendarAlt, FaBookOpen, FaRegClock } from 'react-icons/fa';
import { authors } from '../../config/authors';
import SEO from '../../components/SEO';

export async function getStaticPaths() {
  const docs = await getAllDocs();
  const paths = docs.map((doc) => ({
    params: { slug: doc.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const doc = await getDocBySlug(params.slug);
  const allDocs = await getAllDocs();

  // Get related docs from the same category
  const relatedDocs = allDocs
    .filter(d => d.category === doc.category && d.slug !== doc.slug)
    .slice(0, 3);

  return {
    props: {
      doc,
      relatedDocs,
    },
  };
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
      setReadingTime(Math.ceil(wordCount / 200));
    }
  }, [doc]);

  if (!doc) {
    return <div>Document not found</div>;
  }

  // Default to Adam Kershner as the author
  const docAuthors = [{
    ...authors['Adam Kershner'],
    name: 'Adam Kershner',
  }];

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
              <h1 className="text-4xl font-bold text-gray-900">{doc.title}</h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3">
                <AuthorCard authors={docAuthors} variant="header" />
                <time 
                  dateTime={doc.date}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm"
                >
                  <FaRegCalendarAlt className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-500 mr-1">Last updated:</span>
                  {formatDate(doc.date)}
                </time>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm">
                  <FaRegClock className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-500">{readingTime} min read</span>
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

          {/* Related Docs */}
          {relatedDocs.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Documentation</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedDocs.map((relatedDoc) => (
                  <Link
                    key={relatedDoc.slug}
                    href={`/docs/${relatedDoc.slug}`}
                    className="block group"
                  >
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-kahana-primary">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Author</h2>
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