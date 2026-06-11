import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import ProductSection, {
  OASIS_HERO_MASCOT_PATH,
  OASIS_HERO_MASCOT_PATH_SM,
} from "../components/ProductSection";
import DeferredHomeProductLanes from "../components/home/DeferredHomeProductLanes";
import DeferredHomeDataTransparency from "../components/home/DeferredHomeDataTransparency";
import HomeTestimonialsSection from "../components/home/HomeTestimonialsSection";
import FadeInSection from "../components/FadeInSection";
import ProductHuntLaunchSection from "../components/ProductHuntLaunchSection";
import { isProductHuntLaunchActive } from "../data/product-hunt-launch";
import SEO from "../components/SEO";
import { blogIndex } from "../data/blog-index";
import { getAuthorDetails } from "../utils/authorUtils";
import React, { useEffect, useState } from "react";
import { getCloudinaryImageUrl } from "../utils/cloudinary-mapper";
import { FaCheckCircle, FaGlobeAmericas, FaSmile } from "react-icons/fa";
import { trackButtonClick } from "../utils/analytics";

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
  const customerLogos = [
    { src: "/company-logos/metisOSlogo.webp", alt: "Metis OS logo" },
    { src: "/company-logos/jhpmclogo.webp", alt: "JHPMC logo" },
    { src: "/company-logos/bestlifeeverlogo.webp", alt: "Best Life Ever logo" },
    { src: "/company-logos/everydaybusinessleaderslogo.webp", alt: "Everyday Business Leaders logo" },
    { src: "/company-logos/cascadelogo.webp", alt: "Cascade logo" },
    { src: "/company-logos/rekoglogo.webp", alt: "Rekog logo" },
    { src: "/company-logos/parklifelogo.webp", alt: "Parklife logo" },
  ];
  const marqueeLogos = [...customerLogos, ...customerLogos];
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

  // Refuge mission section
  const RefugeMissionSection = () => (
    <section
      id="mission"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute top-[-30%] left-[-40%] h-[800px] w-[1200px] rounded-full bg-[#FCDD9F]/20 blur-[300px] md:blur-[500px] opacity-70" />
        <div className="absolute bottom-[-40%] right-[-30%] h-[700px] w-[1000px] rounded-full bg-[#617500]/15 blur-[250px] md:blur-[450px] opacity-60" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#30400D]">
          Your Online Refuge. Your Terms.
        </h2>
        <p className="text-lg sm:text-xl text-[#30400D]/70 mb-8 leading-relaxed">
          In a noisy, insecure web, we've built a sanctuary where your privacy is paramount, your focus is protected, and your data remains yours.
        </p>
        <p className="text-base sm:text-lg text-[#30400D]/70 mb-10 leading-relaxed">
          Our promise: keep browsing calm, secure, and private so your focus stays on what matters. Forever.
        </p>
        <a
          href="/about"
          className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold text-center"
        >
          About Us
        </a>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base text-[#30400D]/80">
          <Link
            href="/products/oasis-browser"
            onClick={() => trackButtonClick("refuge_link_product_details", "refuge_section")}
            className="font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
          >
            Product details
          </Link>
          <span className="text-brand-link/50" aria-hidden>
            ·
          </span>
          <Link
            href="/products/oasis-enterprise-browser"
            onClick={() => trackButtonClick("refuge_link_enterprise", "refuge_section")}
            className="font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
          >
            For IT &amp; teams
          </Link>
        </p>
      </div>
    </section>
  );

  // Trust section
  const TrustSection = () => (
    <section
      id="trust"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 hidden md:block opacity-70">
        <div className="absolute left-[6%] top-16 h-20 w-12 rotate-[-20deg] rounded-[60%_0_60%_0] bg-[#8BA500]/20 blur-[1px]" />
        <div className="absolute left-[12%] top-24 h-16 w-10 rotate-[24deg] rounded-[60%_0_60%_0] bg-[#617500]/20 blur-[1px]" />
        <div className="absolute right-[8%] bottom-16 h-24 w-14 rotate-[12deg] rounded-[60%_0_60%_0] bg-[#FCDD9F]/35 blur-[1px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:gap-5">
          <div className="relative rounded-2xl border border-[#30400D]/10 bg-white/95 p-5 shadow-[0_6px_20px_rgba(48,64,13,0.06)] sm:p-6">
            <div className="pointer-events-none absolute right-4 top-4 text-[#617500]/35">
              <FaSmile className="h-8 w-8" aria-hidden />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-[#30400D] mb-2">
              7,000+
            </div>
            <div className="text-[#30400D]/70 font-medium tracking-wide">
              Trusted Users Worldwide
            </div>
          </div>
          <div className="relative rounded-2xl border border-[#30400D]/10 bg-white/95 p-5 shadow-[0_6px_20px_rgba(48,64,13,0.06)] sm:p-6">
            <div className="pointer-events-none absolute right-4 top-4 text-[#617500]/35">
              <FaGlobeAmericas className="h-8 w-8" aria-hidden />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-[#30400D] mb-2">
              108+
            </div>
            <div className="text-[#30400D]/70 font-medium tracking-wide">
              Countries served, and growing!
            </div>
          </div>
          <div className="relative rounded-2xl border border-[#30400D]/10 bg-white/95 p-5 shadow-[0_6px_20px_rgba(48,64,13,0.06)] sm:p-6">
            <div className="pointer-events-none absolute right-4 top-4 text-[#617500]/35">
              <FaCheckCircle className="h-8 w-8" aria-hidden />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-[#30400D] mb-2">
              100%
            </div>
            <div className="text-[#30400D]/70 font-medium tracking-wide">
              Ad-Blocking Controls
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-sm sm:text-base text-[#30400D]/65">
          Built for people who want transparency, peace of mind, and control over their data.
        </p>
        <p className="mt-5 text-center text-sm font-semibold tracking-[0.08em] text-[#30400D]/80 sm:text-base">
          Trusted by teams and organizations, large and small
        </p>
        <div
          className="logo-stripe-shell group mt-5 overflow-hidden rounded-[2rem] border border-[#30400D]/10 bg-white/95 px-4 py-3 shadow-[0_10px_28px_rgba(48,64,13,0.05)] sm:px-6 sm:py-4"
          aria-label="Trusted company logos"
        >
          <div
            className="logo-stripe-fade logo-stripe-lane group-hover:[animation-play-state:paused] flex flex-row flex-nowrap items-center whitespace-nowrap"
            style={{ display: "flex", flexWrap: "nowrap", whiteSpace: "nowrap" }}
          >
            {marqueeLogos.map((logo, idx) => (
              <div
                key={`${logo.src}-${idx}`}
                className="logo-stripe-item inline-flex flex-none shrink-0 items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width="172"
                  height="44"
                  loading="lazy"
                  decoding="async"
                  className="logo-stripe-img block object-contain grayscale opacity-55 transition duration-300 group-hover:opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Privacy assurance section
  const PrivacyAssuranceSection = () => (
    <section
      id="privacy-assurance"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute top-[-10%] left-[-16%] h-[560px] w-[780px] rounded-full bg-[#8BA500]/16 blur-[220px] md:blur-[380px] opacity-60" />
        <div className="absolute bottom-[-25%] right-[-12%] h-[500px] w-[700px] rounded-full bg-[#FCDD9F]/20 blur-[200px] md:blur-[340px] opacity-65" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-[#30400D]/12 bg-white/80 p-8 sm:p-12 shadow-[0_18px_80px_rgba(48,64,13,0.08)] backdrop-blur-sm">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#617500]">
            Privacy First by Design
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-[#30400D]">
            Ad-free browsing, built-in protection, complete peace of mind.
          </h2>
          <p className="text-lg text-[#30400D]/75 max-w-3xl leading-relaxed">
            Oasis includes built-in ad blocking and a privacy-first architecture that keeps your
            browsing behavior in your control. We do not sell your browsing data. We collect
            minimal, anonymized interaction data by default to improve the assistant. Identifying
            information (like email or user ID) is only included if you opt in to personalization in
            Settings.
          </p>
          <p className="mt-5 text-base sm:text-lg text-[#30400D]/72 max-w-3xl leading-relaxed">
            When people ask whether Oasis is secure enough, our goal is to make the answer obvious through product behavior and clear policies: private by default, transparent by design, and always under your control.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/privacy-policy"
              className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold text-center"
            >
              Read Privacy Policy
            </a>
            <a
              href="/security"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold text-center"
            >
              Explore Security Approach
            </a>
            <a
              href="/docs/technical-and-interaction-data"
              className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold text-center"
            >
              What data we collect
            </a>
          </div>
          <p className="mt-4">
            <a
              href="/data-leakage-consortium"
              className="text-brand-link text-sm font-semibold underline decoration-2 underline-offset-2 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
            >
              Join the Data Leakage Consortium →
            </a>
          </p>
          <div className="pointer-events-none absolute bottom-5 right-5 text-[#6B7280]/20">
            <svg
              viewBox="0 0 24 24"
              className="h-12 w-12 sm:h-14 sm:w-14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M12 3L5 6V11C5 15.4183 7.69402 19.4305 12 21C16.306 19.4305 19 15.4183 19 11V6L12 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9 12.5L11 14.5L15 10.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="relative mt-6 w-full overflow-hidden rounded-2xl border border-[#30400D]/18 bg-[#F8FAF2] px-5 py-5 shadow-[0_8px_26px_rgba(48,64,13,0.10)] sm:px-6 sm:py-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 -top-14 h-44 w-52 rounded-full bg-[#8BA500]/14 blur-2xl" />
            <div className="absolute right-[-10%] top-[-25%] h-40 w-56 rounded-full bg-[#FBDC8E]/20 blur-2xl" />
            <div className="absolute -bottom-14 right-8 h-36 w-48 rounded-full bg-[#49BCB5]/14 blur-2xl" />
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute right-0 top-0 text-[#3A7C91]/35" aria-hidden>
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.5C9.3 6.2 6 9.7 6 13.3C6 16.9 8.7 19.5 12 19.5C15.3 19.5 18 16.9 18 13.3C18 9.7 14.7 6.2 12 2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="pr-10 text-lg font-bold tracking-tight text-[#30400D] sm:text-xl">
              Data Leakage Consortium
            </h3>
            <div className="mt-3 grid gap-4 md:grid-cols-[1.25fr_minmax(0,1fr)] md:items-start">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#617500] sm:text-sm">
                  How much data are you leaking?
                </p>
                <p className="pr-2 text-sm sm:text-base font-medium leading-relaxed text-[#30400D]/82">
                  Join our community of problem solvers dedicated to preventing data leakage
                  through AI tools. The consortium operates like a think tank: hosting events,
                  sharing ideas, and collaborating on practical solutions.
                </p>
                <a
                  href="/data-leakage-consortium"
                  className="btn-primary btn-nav mt-4 inline-flex items-center justify-center no-underline hover:no-underline focus:no-underline"
                >
                  Learn More
                </a>
              </div>
              <div className="rounded-xl border border-[#30400D]/12 bg-white/60 px-4 py-3">
                <blockquote className="border-l-2 border-[#3A7C91]/45 pl-3">
                  <p className="text-sm italic leading-relaxed text-[#30400D]/88 sm:text-base">
                    &ldquo;Only 17% of companies have technical controls capable of preventing
                    employees from uploading confidential data to public AI tools.&rdquo;
                  </p>
                  <cite className="mt-2 block text-xs not-italic font-semibold uppercase tracking-[0.08em] text-[#30400D]/70 sm:text-sm">
                    Kiteworks 2025
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Oasis Browser: Calm, secure browsing with AI",
    url: "https://kahana.io",
    description:
      "Oasis Browser by Kahana offers calm, secure browsing with AI that understands your tabs and workflow, with focused work and enterprise-grade protection.",
    isPartOf: { "@type": "WebSite", name: "Kahana", url: "https://kahana.io" },
  };

  return (
    <>
      <SEO
        title="Oasis Browser: Calm, secure browsing with AI | Kahana"
        description="Oasis Browser by Kahana offers calm, secure browsing with AI that understands your tabs and workflow, with focused work and enterprise-grade protection."
        image="https://kahana.io/assets/oasis-browser-preview.png"
        url="https://kahana.io"
        type="website"
        schema={homepageSchema}
      />
      <Head>
        <title>Oasis Browser: Calm, secure browsing with AI | Kahana</title>
        <meta
          name="description"
          content="Oasis Browser by Kahana offers calm, secure browsing with AI that understands your tabs and workflow, with focused work and enterprise-grade protection."
        />
      </Head>

      {/* Load Stripe buy button after first interaction (keeps initial load lighter) */}
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

          {isProductHuntLaunchActive() && (
            <FadeInSection>
              <section className="relative z-10 border-b border-[#30400D]/10 bg-white py-12 sm:py-16">
                <div className="mx-auto flex max-w-5xl flex-col items-center px-4 sm:px-6 lg:px-8">
                  <ProductHuntLaunchSection />
                </div>
              </section>
            </FadeInSection>
          )}

          {/* Refuge Mission Section */}
          <RefugeMissionSection />

          <FadeInSection>
            <DeferredHomeDataTransparency />
          </FadeInSection>

          {/* Trust Section */}
          <TrustSection />

          <FadeInSection>
            <HomeTestimonialsSection />
          </FadeInSection>

          {/* Privacy assurance section */}
          <PrivacyAssuranceSection />

          {/* Elegant section divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#30400D]/20 to-transparent mx-auto max-w-4xl"></div>

          <DeferredHomeProductLanes />

        </div>
      </div>
      <style jsx>{`
        .logo-stripe-shell {
          position: relative;
          max-width: 100%;
        }

        .logo-stripe-lane {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          gap: 1rem;
          width: max-content;
          min-width: 200%;
          height: 3rem;
          overflow: hidden;
          will-change: transform;
          animation: logoMarqueeRight 22s linear infinite;
        }

        .logo-stripe-fade {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .logo-stripe-item {
          position: relative;
          width: 10.5rem;
          min-width: 10.5rem;
          height: 2.8rem;
          min-height: 2.8rem;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(48, 64, 13, 0.08);
          background: rgba(255, 255, 255, 0.35);
          padding: 0.35rem 0.75rem;
        }

        .logo-stripe-img {
          max-width: 8.5rem;
          max-height: 1.7rem;
          width: auto;
          height: auto;
        }

        @keyframes logoMarqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-stripe-lane {
            animation: none;
            width: 100%;
            min-width: 0;
            overflow-x: auto;
            scrollbar-width: none;
          }

          .logo-stripe-fade {
            mask-image: none;
            -webkit-mask-image: none;
          }

          .logo-stripe-lane::-webkit-scrollbar {
            display: none;
          }

          .logo-stripe-item {
            width: 10.5rem;
            min-width: 10.5rem;
            height: 2.8rem;
            min-height: 2.8rem;
          }

          .logo-stripe-img {
            max-width: 8rem;
            max-height: 1.6rem;
          }
        }
      `}</style>
    </>
  );
}
