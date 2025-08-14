import Head from "next/head";
import Script from "next/script";
import HeroSection from "../components/HeroSection";
import FeaturesShowcase from "../components/FeaturesShowcase";
import HowItWorks from "../components/HowItWorks";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ProductSection from "../components/ProductSection";
import VideoSection from "../components/VideoSection";
import FeaturedBlogSection from "../components/FeaturedBlogSection";
import FadeInSection from "../components/FadeInSection";
import SEO from "../components/SEO";
import { getRandomPhoto, getOptimizedPhotoUrl } from "../utils/pexels";
import { blogIndex } from "../data/blog-index";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import { getAuthorDetails } from "../utils/authorUtils";
import React, { useRef, useEffect } from "react";

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Simple cache for development
const imageCache = new Map();

export async function getStaticProps() {
  try {
    // Sort posts by date, newest first
    const sortedPosts = [...blogIndex].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    // Get the 3 most recent posts
    const recentPosts = sortedPosts.slice(0, 3);

    // Don't fetch images during build - let them load on-demand
    const postsWithAuthorDetails = recentPosts.map((post) => ({
      ...post,
      authors: getAuthorDetails(post.authors),
    }));

    return {
      props: {
        blogPosts: postsWithAuthorDetails,
      },
      // Shorter revalidation time in development for easier testing
      revalidate: process.env.NODE_ENV === "development" ? 10 : 86400,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        blogPosts: [],
      },
      revalidate: process.env.NODE_ENV === "development" ? 10 : 86400,
    };
  }
}

export default function Home({ blogPosts }) {
  // Homepage-specific schema
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kahana - Enterprise Browser & Productivity Tools",
    description:
      "Kahana's Oasis Enterprise Browser helps teams stay organized, focused on ideas, and increase productivity while maintaining enterprise-grade security.",
    url: "https://kahana.co",
    publisher: {
      "@type": "Organization",
      name: "Kahana",
      logo: {
        "@type": "ImageObject",
        url: "https://kahana.co/assets/logo.png",
      },
      description:
        "Kahana develops enterprise-grade productivity tools focused on organization, security, and collaboration",
      sameAs: [
        "https://www.linkedin.com/company/kahana",
        "https://twitter.com/kahanaai",
      ],
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Kahana Oasis",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cross-platform",
      description:
        "Enterprise browser with enhanced security, organization tools, and collaboration features for modern teams",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      featureList: [
        "Enterprise-Grade Security",
        "Hub-Based Organization",
        "Multi-View Capabilities",
        "Smart Navigation",
        "AI-Powered Assistant",
        "Collaboration Tools",
      ],
      screenshot: "https://kahana.co/assets/oasis-browser-preview.png",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Latest Blog Posts",
        value: (blogPosts || []).slice(0, 3).map((post) => ({
          title: post.title,
          url: `https://kahana.co/blog/${post.slug}`,
          datePublished: post.date,
        })),
      },
    ],
  };

  const btnRef = useRef();

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.style.setProperty(
        "background-color",
        "transparent",
        "important"
      );
    }
  }, []);

  return (
    <>
      <SEO
        title="Kahana Oasis - Agentic Browser & Productivity Tools"
        description="Stay organized and focused with Kahana's Oasis Enterprise Browser. Features enterprise-grade security, organization tools, and collaboration features for modern teams."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co"
        type="website"
        schema={homepageSchema}
      />
      <Head>
        <title>Kahana - Agentic Browser & Productivity</title>
        <meta
          name="description"
          content="Kahana's Oasis Enterprise Browser helps teams stay organized, focused on ideas, and increase productivity while maintaining enterprise-grade security."
        />
      </Head>

      {/* Load Crisp chat asynchronously and defer until after interactive */}
      <Script
        id="crisp-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="711b6e27-0210-4313-9ea3-75009495e3ec";
            (function(){
              var d=document;
              var s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `,
        }}
      />

      {/* Load Stripe button asynchronously and defer until after interactive */}
      <Script
        id="stripe-button"
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="afterInteractive"
      />

      <div className="relative">
        <main className="scroll-smooth">
          <FadeInSection>
            <section
              id="products"
              className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
            >
              <ProductSection />
            </section>
          </FadeInSection>

          <FadeInSection delay={100}>
            <section
              id="video-demo"
              className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50"
            >
              <VideoSection />
            </section>
          </FadeInSection>

          <FadeInSection delay={200}>
            <section
              id="features"
              className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
            >
              <FeaturesShowcase />
            </section>
          </FadeInSection>

          <FadeInSection delay={400}>
            <section
              id="how-it-works"
              className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50"
            >
              <HowItWorks />
            </section>
          </FadeInSection>

          <FadeInSection delay={600}>
            <section
              id="blog"
              className="flex flex-col items-center justify-center p-4 md:p-8 bg-gray-50"
            >
              <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(blogPosts || []).slice(0, 3).map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/blog"
                  className="bg-kahana-primary text-white font-bold rounded-md px-8 py-3 hover:bg-kahana-primary-dark transition-colors inline-flex items-center justify-center no-underline"
                >
                  All Posts
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </section>
          </FadeInSection>
        </main>
      </div>
    </>
  );
}
