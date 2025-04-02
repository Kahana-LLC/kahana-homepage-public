import Head from "next/head";
import Script from "next/script";
import HeroSection from "../components/HeroSection";
import FeaturesShowcase from "../components/FeaturesShowcase";
import HowItWorks from "../components/HowItWorks";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ProductSection from "../components/ProductSection";
import FeaturedBlogSection from "../components/FeaturedBlogSection";
import SEO from "../components/SEO";
import { getRandomPhoto, getOptimizedPhotoUrl } from "../utils/pexels";

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Featured blog posts data
const featuredPosts = [
  {
    slug: "technical-debt",
    title: "Tackling Technical Debt and Redefining Application Access",
    excerpt:
      "How modern enterprises are balancing innovation with system maintenance while revolutionizing their approach to application security.",
    category: "Engineering",
    date: "March 15, 2024",
    author: {
      name: "Adam Kershner",
      role: "CTO",
    },
    defaultImageQuery: "modern technology office workspace",
  },
  {
    slug: "zero-trust",
    title: "Implementing Zero Trust in Modern Enterprises",
    excerpt:
      "A comprehensive guide to implementing Zero Trust architecture in your organization.",
    category: "Security",
    date: "March 10, 2024",
    author: {
      name: "Adam Kershner",
      role: "CTO",
    },
    defaultImageQuery: "network security digital protection",
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration Strategies for 2025",
    excerpt:
      "Explore the latest strategies and best practices for successful cloud migration.",
    category: "Cloud Computing",
    date: "March 5, 2024",
    author: {
      name: "Adam Kershner",
      role: "CTO",
    },
    defaultImageQuery: "cloud computing data center",
  },
];

export async function getStaticProps() {
  try {
    // Fetch images for featured blog posts
    const postsWithImages = await Promise.all(
      featuredPosts.map(async (post) => {
        try {
          let postImage = post.customImage;
          if (!postImage) {
            const photo = await getRandomPhoto(post.defaultImageQuery);
            postImage = photo
              ? getOptimizedPhotoUrl(photo)
              : DEFAULT_PLACEHOLDER;
          }
          return {
            ...post,
            image: postImage,
          };
        } catch (error) {
          console.error(`Error fetching image for post ${post.slug}:`, error);
          return {
            ...post,
            image: DEFAULT_PLACEHOLDER,
          };
        }
      })
    );

    return {
      props: {
        blogPosts: postsWithImages,
      },
      revalidate: 86400, // Revalidate once per day
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        blogPosts: featuredPosts.map((post) => ({
          ...post,
          image: DEFAULT_PLACEHOLDER,
        })),
      },
      revalidate: 86400,
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
        value: blogPosts.slice(0, 3).map((post) => ({
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
        title="Kahana Oasis - Enterprise Browser for Secure Productivity"
        description="Stay organized and focused with Kahana's Oasis Enterprise Browser. Features enterprise-grade security, organization tools, and collaboration features for modern teams."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co"
        type="website"
        schema={homepageSchema}
      />
      <Head>
        <title>Kahana - Enterprise Browser & Productivity Tools</title>
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
          <section
            id="products"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
          >
            <ProductSection />
          </section>
          <section
            id="features"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50"
          >
            <FeaturesShowcase />
          </section>
          <section
            id="how-it-works"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
          >
            <HowItWorks />
          </section>
          <section
            id="blog"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50"
          >
            <FeaturedBlogSection posts={blogPosts} />
          </section>
        </main>
      </div>
    </>
  );
}
