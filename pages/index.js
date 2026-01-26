import Head from "next/head";
import Script from "next/script";
import HeroSection from "../components/HeroSection";
import FeaturesShowcase from "../components/FeaturesShowcase";
import HowItWorks from "../components/HowItWorks";
import ProductTourCard from "../components/ProductTourCard";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ProductSection from "../components/ProductSection";
import VideoSection from "../components/VideoSection";
import FadeInSection from "../components/FadeInSection";
import SEO from "../components/SEO";
import { getRandomPhoto, getOptimizedPhotoUrl } from "../utils/pexels";
import { blogIndex } from "../data/blog-index";
import Link from "next/link";
import { getAuthorDetails } from "../utils/authorUtils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getCloudinaryImageUrl } from "../utils/cloudinary-mapper";
import InteractiveSloth from "../components/InteractiveSloth";

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
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle OAuth callback redirects from root URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      // Check if we have OAuth tokens in the hash (Supabase redirects to root sometimes)
      if (hash && (hash.includes('access_token=') || hash.includes('code=') || hash.includes('error='))) {
        // Redirect to oauth-callback page with the hash
        window.location.href = `/oauth-callback${hash}`;
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

  const whyOasisCards = [
    {
      title: "Created to bring calm and focus back to browsing",
      image: getCloudinaryImageUrl("/figma-imports/er.webp", { width: 1000, quality: 'auto:good' }),
      imageAlt: "Serene illustration representing focused Oasis browsing",
      loading: "eager",
    },
    {
      title: "Makes browsing beautiful and natural",
      image: getCloudinaryImageUrl("/figma-imports/Frame 1321315005.webp", { width: 1000, quality: 'auto:good' }),
      imageAlt: "Screenshot showcasing clutter-free Oasis browsing",
      loading: "eager",
    },
    {
      title: "Artificial Intelligence (AI) browser that adapts to you",
      image: getCloudinaryImageUrl("/figma-imports/Summarize with AI 3.webp", { width: 1000, quality: 'auto:good' }),
      imageAlt: "Illustration of Oasis adapting to the user",
      loading: "eager",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount and resize
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
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
        {/* Preload critical hero image for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/Welcome to Oasis.webp"
          fetchPriority="high"
        />
        {/* Preconnect to external image domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
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

      <div className="relative bg-white shadow-[0_0_40px_rgba(0,0,0,0.08)] overflow-x-hidden w-full overflow-y-visible">
        {/* Background gradients - fixed on desktop, absolute on mobile for better performance */}
        <div className={`${isMobile ? 'absolute' : 'fixed'} inset-0 overflow-hidden pointer-events-none z-0`}>
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
          <FadeInSection>
            <section
              id="products"
              className="relative overflow-hidden py-24 sm:py-32"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-[-50%] left-[-55%] h-[660px] w-[1080px] rounded-full bg-[#FCDD9F]/28 blur-[420px]" />
                <div className="absolute bottom-[-55%] right-[-55%] h-[720px] w-[1120px] rounded-full bg-[#617500]/15 blur-[420px]" />
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
                <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-4">
                  Personalize Your Experience
                </h2>
                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-[#313A00] mb-10">
                  Oasis adapts to your unique way of working
                </h1>
                <div className="relative mx-auto max-w-4xl">
                  <ProductTourCard />
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Elegant section divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

          <FadeInSection delay={150}>
            <section
              id="why-oasis"
              className="py-16 sm:py-24 bg-white relative"
            >
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">
                    Rediscover Browsing
                  </h2>
                  <h1 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl">
                  Unlock a New Level of Browsing with Oasis
                  </h1>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:justify-items-center">
                  {whyOasisCards.map((card) => (
                    <div
                      key={card.title}
                      className="relative bg-white/90 border border-white/80 rounded-[26px] px-5 py-6 shadow-[0_25px_70px_rgba(32,47,0,0.14)] flex flex-col gap-5 w-full max-w-[340px] mx-auto backdrop-blur-lg"
                    >
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[18px] border border-[#F6F3E7] bg-white/70 shadow-[0_25px_70px_rgba(27,33,0,0.18)]">
                        <Image
                          src={card.image}
                          alt={card.imageAlt || `${card.title} illustration`}
                          fill
                          sizes="(max-width: 640px) 340px, (max-width: 1024px) 340px, 340px"
                          className="object-cover"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      <div className="flex flex-col gap-3 text-left">
                       
                        <h3 className="text-2xl font-semibold leading-tight text-[#1F2D00]">
                          {card.title}
                        </h3>
                        {card.description && (
                          <p className="text-base text-[#4E5534]">
                            {card.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
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
                <div className="absolute top-[-50%] left-[-55%] h-[660px] w-[1080px] rounded-full bg-[#FCDD9F]/28 blur-[420px]" />
                <div className="absolute bottom-[-55%] right-[-55%] h-[720px] w-[1120px] rounded-full bg-[#617500]/15 blur-[420px]" />
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

      {/* Interactive Sloth Mascot */}
      <InteractiveSloth />
    </>
  );
}
