import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import ProductSection, {
  OASIS_HERO_IMAGE_PATH,
  OASIS_HERO_PRELOAD_WIDTH,
  OASIS_HERO_SIZES,
  OASIS_HERO_WIDTHS,
} from "../components/ProductSection";
import FadeInSection from "../components/FadeInSection";
import SEO from "../components/SEO";
import { blogIndex } from "../data/blog-index";
import Link from "next/link";
import { getAuthorDetails } from "../utils/authorUtils";
import React, { useEffect, useState } from "react";
import {
  getCloudinaryImageUrl,
  getCloudinaryImageProps,
} from "../utils/cloudinary-mapper";

const FeaturesShowcase = dynamic(() => import("../components/FeaturesShowcase"));
const HowItWorks = dynamic(() => import("../components/HowItWorks"));
const ProductTourCard = dynamic(() => import("../components/ProductTourCard"));
const HomeWhyOasisSection = dynamic(
  () => import("../components/HomeWhyOasisSection"),
  { ssr: true }
);

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
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle OAuth callback redirects from root URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const search = window.location.search;
      // Check if we have OAuth tokens in the hash (Supabase redirects to root sometimes)
      if (hash && (hash.includes('access_token=') || hash.includes('code=') || hash.includes('error='))) {
        // Preserve query markers so callback mode selection survives the bounce.
        window.location.href = `/oauth-callback${search}${hash}`;
        return;
      }
    }
  }, []);
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
        url: getCloudinaryImageUrl("/assets/kahana_logo_transparent.svg"),
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
      screenshot: getCloudinaryImageUrl("/assets/oasis-browser-preview.png"),
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

  useEffect(() => {
    const isMobileViewport = () => window.innerWidth < 768;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    let scrollAttached = false;

    const syncLayout = () => {
      const mobile = isMobileViewport();
      setIsMobile(mobile);
      if (!mobile && !scrollAttached) {
        window.addEventListener("scroll", handleScroll, { passive: true });
        scrollAttached = true;
        handleScroll();
      } else if (mobile && scrollAttached) {
        window.removeEventListener("scroll", handleScroll);
        scrollAttached = false;
        setScrollY(0);
      }
    };

    syncLayout();
    window.addEventListener("resize", syncLayout);

    return () => {
      window.removeEventListener("resize", syncLayout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroLcpPreload = getCloudinaryImageProps(OASIS_HERO_IMAGE_PATH, {
    widths: OASIS_HERO_WIDTHS,
    quality: "auto:good",
  });

  return (
    <>
      <SEO
        title="Kahana Oasis – Agentic Browser & Productivity | Kahana"
        description="Stay organized and focused with Kahana's Oasis Enterprise Browser. Features enterprise-grade security, organization tools, and collaboration features for modern teams."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co"
        type="website"
        schema={homepageSchema}
      />
      <Head>
        <title>Kahana Oasis – Agentic Browser & Productivity | Kahana</title>
        <meta
          name="description"
          content="Kahana's Oasis Enterprise Browser helps teams stay organized, focused on ideas, and increase productivity while maintaining enterprise-grade security."
        />
        {/* LCP hero: responsive preload (imagesrcset + imagesizes) + href fallback — aligns with ProductSection HeroImage */}
        {heroLcpPreload.srcSet && heroLcpPreload.src ? (
          <link
            rel="preload"
            as="image"
            href={heroLcpPreload.src}
            imageSrcSet={heroLcpPreload.srcSet}
            imageSizes={OASIS_HERO_SIZES}
            fetchPriority="high"
          />
        ) : (
          <link
            rel="preload"
            as="image"
            href={getCloudinaryImageUrl(OASIS_HERO_IMAGE_PATH, {
              width: OASIS_HERO_PRELOAD_WIDTH,
              quality: "auto:good",
            })}
            fetchPriority="high"
          />
        )}
      </Head>

      {/* Load Crisp chat after page is idle to improve initial load (target &lt;5.3s interactive) */}
      <Script
        id="crisp-script"
        strategy="lazyOnLoad"
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

      {/* Load Stripe button after page is idle to improve initial load (target &lt;5.3s interactive) */}
      <Script
        id="stripe-button"
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="lazyOnLoad"
      />

      <div className="relative bg-white shadow-[0_0_40px_rgba(0,0,0,0.08)] overflow-x-hidden w-full overflow-y-visible">
        {/* Background gradients — absolute below md, fixed on desktop. Use CSS breakpoints only (no isMobile flip) to avoid CLS from fixed→absolute after hydration. */}
        <div className="absolute md:fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute top-20 -left-20 w-[600px] h-[600px] rounded-full filter blur-[220px] opacity-40 animate-pulse"
            style={{
              background: "radial-gradient(circle, #FCDD9F 0%, transparent 70%)",
              transform: isMobile ? 'none' : `translateY(${scrollY * 0.1}px)`,
            }}
          />
          <div
            className="absolute top-60 right-0 w-[700px] h-[700px] rounded-full filter blur-[260px] opacity-30 animate-pulse"
            style={{
              background: "radial-gradient(circle, #617500 0%, transparent 70%)",
              transform: isMobile ? 'none' : `translateY(${scrollY * 0.15}px)`,
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] rounded-full filter blur-[220px] opacity-35 animate-pulse"
            style={{
              background: "radial-gradient(circle, #8BA500 0%, transparent 70%)",
              transform: isMobile ? 'none' : `translateY(${scrollY * 0.05}px)`,
              animationDelay: "2s",
            }}
          />
        </div>
        {/* Elegant accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#30400D] to-transparent opacity-20 z-10"></div>
        
        <div className="scroll-smooth bg-white relative z-10">
          <FadeInSection eager>
            <section
              id="products"
              className="relative overflow-hidden py-24 sm:py-32"
            >
              <div className="pointer-events-none absolute inset-0 hidden md:block">
                <div className="absolute top-[-50%] left-[-55%] h-[660px] w-[1080px] rounded-full bg-[#FCDD9F]/28 blur-[200px] md:blur-[420px] opacity-80 md:opacity-100" />
                <div className="absolute bottom-[-55%] right-[-55%] h-[720px] w-[1120px] rounded-full bg-[#617500]/15 blur-[200px] md:blur-[420px] opacity-80 md:opacity-100" />
              </div>
              <div className="relative z-10">
                <ProductSection />
              </div>
            </section>
          </FadeInSection>

          {/* Elegant section divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

          <FadeInSection delay={100}>
            <section
              id="video"
              className="relative overflow-hidden bg-white py-20 sm:py-28"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#FCDD9F]/40 blur-[220px]" />
                <div className="absolute bottom-0 right-6 h-96 w-96 rounded-full bg-[#617500]/20 blur-[250px]" />
              </div>
              <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center">
                <p className="text-xl font-semibold leading-8 text-[#5C5F2E] mb-4" role="doc-subtitle">
                  Personalize Your Experience
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-[#313A00] mb-10">
                  Oasis adapts to your unique way of working
                </h2>
                <div className="relative mx-auto max-w-4xl">
                  <ProductTourCard />
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Elegant section divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

          <FadeInSection delay={150}>
            <HomeWhyOasisSection />
          </FadeInSection>

          {/* Elegant section divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

          <FadeInSection delay={200}>
            <section
              id="features"
              className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white relative"
            >
              {/* Subtle decorative corner accent */}
              <div className="hidden lg:block absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#30400D]/15"></div>
              <FeaturesShowcase />
            </section>
          </FadeInSection>

          {/* Elegant section divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

          <FadeInSection delay={400}>
            <section
              id="how-it-works"
              className="relative overflow-hidden py-24 sm:py-32"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-[-50%] left-[-55%] h-[660px] w-[1080px] rounded-full bg-[#FCDD9F]/28 blur-[200px] md:blur-[420px] opacity-80 md:opacity-100" />
                <div className="absolute bottom-[-55%] right-[-55%] h-[720px] w-[1120px] rounded-full bg-[#617500]/15 blur-[200px] md:blur-[420px] opacity-80 md:opacity-100" />
              </div>
              <div className="relative z-10">
                <HowItWorks />
              </div>
            </section>
          </FadeInSection>

          {/* Elegant section divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

        </div>
      </div>
    </>
  );
}
