import Head from "next/head";
import Script from "next/script";
import ProductSection, {
  OASIS_HERO_MASCOT_PATH,
  OASIS_HERO_MASCOT_PATH_SM,
} from "../components/ProductSection";
import DeferredHomeProductLanes from "../components/home/DeferredHomeProductLanes";
import FadeInSection from "../components/FadeInSection";
import SEO from "../components/SEO";
import { blogIndex } from "../data/blog-index";
import { getAuthorDetails } from "../utils/authorUtils";
import React, { useEffect, useState } from "react";
import { getCloudinaryImageUrl } from "../utils/cloudinary-mapper";

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
  const [loadAuxScripts, setLoadAuxScripts] = useState(false);
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

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    let done = false;
    const onIntent = () => {
      if (done) return;
      done = true;
      setLoadAuxScripts(true);
      window.removeEventListener("pointerdown", onIntent);
      window.removeEventListener("keydown", onIntent);
      window.removeEventListener("scroll", onIntent);
    };
    const timer = window.setTimeout(onIntent, 6000);
    window.addEventListener("pointerdown", onIntent, { once: true, passive: true });
    window.addEventListener("keydown", onIntent, { once: true });
    window.addEventListener("scroll", onIntent, { once: true, passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", onIntent);
      window.removeEventListener("keydown", onIntent);
      window.removeEventListener("scroll", onIntent);
    };
  }, []);
  // Homepage-specific schema
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Oasis Browser: Calm, secure browsing with AI",
    description:
      "Oasis Browser by Kahana is a calm, secure browser with built-in AI that understands your tabs and workflow, with focused work and enterprise-grade protection.",
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
      name: "Oasis Browser",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cross-platform",
      description:
        "Calm, secure browser with AI in your real browsing context, plus organization and collaboration for modern teams",
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

  return (
    <>
      <SEO
        title="Oasis Browser: Calm, secure browsing with AI | Kahana"
        description="Oasis Browser by Kahana offers calm, secure browsing with AI that understands your tabs and workflow, with focused work and enterprise-grade protection."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co"
        type="website"
        schema={homepageSchema}
      />
      <Head>
        <title>Oasis Browser: Calm, secure browsing with AI | Kahana</title>
        <meta
          name="description"
          content="Oasis Browser by Kahana offers calm, secure browsing with AI that understands your tabs and workflow, with focused work and enterprise-grade protection."
        />
        <link
          rel="preload"
          as="image"
          href={OASIS_HERO_MASCOT_PATH_SM}
          imageSizes="180px"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          as="image"
          href={OASIS_HERO_MASCOT_PATH}
          imageSizes="(max-width: 1024px) 220px, 260px"
          media="(min-width: 768px)"
        />
      </Head>

      {/* Load Crisp chat after page is idle to improve initial load (target &lt;5.3s interactive) */}
      {loadAuxScripts ? (
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
      ) : null}

      {/* Load Stripe button after page is idle to improve initial load (target &lt;5.3s interactive) */}
      {loadAuxScripts ? (
        <Script
          id="stripe-button"
          src="https://js.stripe.com/v3/buy-button.js"
          strategy="lazyOnLoad"
        />
      ) : null}

      <div className="relative bg-white shadow-[0_0_40px_rgba(0,0,0,0.08)] overflow-x-hidden w-full overflow-y-visible">
        {/* Keep heavy blur effects desktop-only to avoid mobile paint cost. */}
        <div className="absolute md:fixed inset-0 overflow-hidden pointer-events-none z-0 hidden md:block">
          <div
            className="absolute top-20 -left-20 w-[600px] h-[600px] rounded-full filter blur-[220px] opacity-40"
            style={{
              background: "radial-gradient(circle, #FCDD9F 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-60 right-0 w-[700px] h-[700px] rounded-full filter blur-[260px] opacity-30"
            style={{
              background: "radial-gradient(circle, #617500 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] rounded-full filter blur-[220px] opacity-35"
            style={{
              background: "radial-gradient(circle, #8BA500 0%, transparent 70%)",
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
              <div className="pointer-events-none absolute inset-0 hidden lg:block">
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

          <DeferredHomeProductLanes />

          {/* Elegant section divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

        </div>
      </div>
    </>
  );
}
