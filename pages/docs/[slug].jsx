import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDocBySlug, getAllDocs } from '../../utils/docsUtils';

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

  return {
    props: {
      doc,
      allDocs,
    },
  };
}

export default function DocPage({ doc, allDocs }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!doc) {
    return <div>Document not found</div>;
  }

  return (
    <>
      <Head>
        <title>{doc.title} | Kahana Browser Documentation</title>
        <meta name="description" content={doc.excerpt} />
      </Head>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1>{doc.title}</h1>
            <p className="lead">{doc.excerpt}</p>
            
            <div dangerouslySetInnerHTML={{ __html: doc.content }} />

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Related Topics</h3>
              <ul>
                {allDocs
                  .filter((d) => d.slug !== slug)
                  .slice(0, 3)
                  .map((relatedDoc) => (
                    <li key={relatedDoc.slug}>
                      <Link href={`/docs/${relatedDoc.slug}`}>{relatedDoc.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 