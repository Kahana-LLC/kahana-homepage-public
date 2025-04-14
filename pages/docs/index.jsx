import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllDocs } from '../../utils/docsUtils';

export async function getStaticProps() {
  const docs = await getAllDocs();
  return {
    props: {
      docs,
    },
  };
}

export default function DocsIndex({ docs }) {
  // Group docs by category
  const docsByCategory = docs.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {});

  return (
    <>
      <Head>
        <title>Documentation | Kahana Browser</title>
        <meta name="description" content="Browse our comprehensive documentation to learn how to use Kahana Browser effectively." />
      </Head>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Documentation</h1>
          
          {Object.entries(docsByCategory).map(([category, docs]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{category}</h2>
              <div className="grid gap-4">
                {docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                    <p className="mt-2 text-gray-600">{doc.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 