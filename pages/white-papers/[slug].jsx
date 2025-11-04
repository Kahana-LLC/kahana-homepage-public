import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllWhitePapers, getWhitePaperBySlug } from '../../data/white-papers-index';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorCard from '../../components/AuthorCard';
import SEO from '../../components/SEO';
import { getAuthorDetails } from '../../utils/authorUtils';
import { FaRegCalendarAlt, FaRegClock, FaDownload, FaFilePdf } from 'react-icons/fa';

// Generate static paths for white papers
export async function getStaticPaths() {
  const whitePapers = getAllWhitePapers();
  const paths = whitePapers.map((whitePaper) => ({
    params: { slug: whitePaper.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const whitePaper = getWhitePaperBySlug(params.slug);
  const allWhitePapers = getAllWhitePapers();

  if (!whitePaper) {
    return {
      notFound: true,
    };
  }

  // Get related white papers from the same category
  const relatedWhitePapers = allWhitePapers
    .filter(wp => wp.category === whitePaper.category && wp.slug !== whitePaper.slug)
    .slice(0, 3);

  return {
    props: {
      whitePaper,
      relatedWhitePapers,
    },
    revalidate: 3600,
  };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export default function WhitePaperPage({ whitePaper, relatedWhitePapers }) {
  const router = useRouter();
  const authors = getAuthorDetails(whitePaper.authors);
  const readingTime = whitePaper.readingTime || 15;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SEO
        title={whitePaper.seo?.title || whitePaper.title}
        description={whitePaper.seo?.description || whitePaper.description}
        url={`https://kahana.com/white-papers/${whitePaper.slug}`}
        type="article"
        keywords={whitePaper.seo?.keywords}
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
                  { name: "White Papers", url: "/white-papers" },
                  { name: whitePaper.title, url: `/white-papers/${whitePaper.slug}` },
                ]} 
              />
            </nav>

            <div className="flex flex-col space-y-6">
              {/* Category and Featured Badge */}
              <div className="flex items-center gap-3">
                <span className="inline-block bg-[#F3F8E4] text-[#4A5745] px-3 py-1 rounded-full text-sm font-medium">
                  {whitePaper.category}
                </span>
                {whitePaper.featured && (
                  <span className="inline-block bg-[#788B59] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-[#4A5745]">{whitePaper.title}</h1>

              {/* Description */}
              <p className="text-xl text-[#4A5745] leading-relaxed">
                {whitePaper.description}
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4">
                {authors && authors.length > 0 && (
                  <AuthorCard authors={authors} variant="header" />
                )}
                <time 
                  dateTime={whitePaper.date}
                  className="inline-flex items-center px-3 py-1.5 text-[#4A5745] text-sm"
                >
                  <FaRegCalendarAlt className="w-4 h-4 mr-2" />
                  <span className="mr-1">Published:</span>
                  {formatDate(whitePaper.date)}
                </time>
                <div className="inline-flex items-center px-3 py-1.5 text-[#4A5745] text-sm">
                  <FaRegClock className="w-4 h-4 mr-2" />
                  <span>{readingTime} min read</span>
                </div>
              </div>

              {/* Tags */}
              {whitePaper.tags && whitePaper.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {whitePaper.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#F3F8E4] text-[#4A5745] px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Download Button */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#728552]/30">
                <a
                  href={whitePaper.downloadUrl || `/white-papers/${whitePaper.slug}`}
                  className="nav-button download inline-flex items-center justify-center rounded-md text-white font-bold shadow-sm px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                  style={{ textDecoration: 'none', backgroundColor: '#788B59' }}
                >
                  <FaDownload className="w-5 h-5 mr-2" />
                  Download PDF
                </a>
                <div className="flex items-center text-[#4A5745]">
                  <FaFilePdf className="w-5 h-5 mr-2 text-red-600" />
                  <span className="text-sm">PDF Document</span>
                </div>
              </div>
            </div>
          </header>

          {/* Content - This would typically be the white paper content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg">
              <FaFilePdf className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#4A5745] mb-2">
                White Paper Content
              </h3>
              <p className="text-[#4A5745] mb-4">
                This white paper contains comprehensive research and analysis. 
                Click the download button above to access the full PDF document.
              </p>
              <p className="text-sm text-[#4A5745]">
                The white paper includes detailed sections on methodology, findings, 
                recommendations, and supporting data.
              </p>
            </div>
          </div>

          {/* Related White Papers */}
          {relatedWhitePapers.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-[#4A5745] mb-8">
                Related White Papers
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedWhitePapers.map((relatedWP) => (
                  <div key={relatedWP.slug} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center mb-3">
                      <FaFilePdf className="w-5 h-5 text-red-600 mr-2" />
                      <span className="text-sm font-medium text-[#4A5745]">
                        {relatedWP.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#4A5745] mb-2 line-clamp-2">
                      <a 
                        href={`/white-papers/${relatedWP.slug}`}
                        className="hover:text-[#728552] transition-colors"
                      >
                        {relatedWP.title}
                      </a>
                    </h3>
                    <p className="text-[#4A5745] text-sm line-clamp-3 mb-4">
                      {relatedWP.excerpt}
                    </p>
                    <a
                      href={`/white-papers/${relatedWP.slug}`}
                      className="text-[#788B59] hover:text-[#728552] font-medium text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </>
  );
}
