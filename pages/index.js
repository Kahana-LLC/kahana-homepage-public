import Head from "next/head";
import Script from "next/script";
import HeroSection from "../components/HeroSection";
import FeaturesShowcase from "../components/FeaturesShowcase";
import HowItWorks from "../components/HowItWorks";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ProductSection from "../components/ProductSection";
import FeaturedBlogSection from "../components/FeaturedBlogSection";
import FadeInSection from "../components/FadeInSection";
import SEO from "../components/SEO";
import { getRandomPhoto, getOptimizedPhotoUrl } from "../utils/pexels";
import { blogIndex } from "../data/blog-index";

// Author mapping for blog posts
const authorImages = {
  "Adam Kershner": "/assets/headshots/adam_kershner.jpg",
  "Jordan Kern": "/assets/headshots/jordan_kern.jpg",
  "Jescetta Joy": "/assets/headshots/jescetta_joy.jpg",
  "Vruksha Joshi": "/assets/headshots/vruksha_joshi.jpg",
  "Sonakshi Singh": "/assets/headshots/sonakshi_singh.jpg",
};

// Default placeholder for failed image loads
const DEFAULT_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"%2F%3E%3C%2Fsvg%3E';

// Default avatar placeholder
const DEFAULT_AVATAR =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%233C584A"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"%2F%3E%3C%2Fsvg%3E';

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

    // Fetch images for the posts with caching
    const postsWithImages = await Promise.all(
      recentPosts.map(async (post) => {
        try {
          // Check if we already have an image for this post
          if (imageCache.has(post.slug)) {
            return {
              ...post,
              image: imageCache.get(post.slug),
            };
          }

          // Use existing image if available
          let postImage = post.image || null;

          // If no image, fetch from Pexels
          if (!postImage) {
            const searchQuery =
              post.defaultImageQuery || `${post.category} ${post.title}`;
            const photo = await getRandomPhoto(searchQuery);
            postImage = photo
              ? getOptimizedPhotoUrl(photo)
              : DEFAULT_PLACEHOLDER;
          }

          // Cache the image
          imageCache.set(post.slug, postImage);

          // Map author images
          const authorsWithImages =
            post.authors?.map((author) => ({
              ...author,
              avatar: authorImages[author.name] || DEFAULT_AVATAR,
            })) || [];

          // Return post with image and author images
          return {
            ...post,
            image: postImage,
            authors: authorsWithImages,
          };
        } catch (error) {
          console.error(`Error fetching image for post ${post.slug}:`, error);
          return {
            ...post,
            image: DEFAULT_PLACEHOLDER,
            authors:
              post.authors?.map((author) => ({
                ...author,
                avatar: authorImages[author.name] || DEFAULT_AVATAR,
              })) || [],
          };
        }
      })
    );

    return {
      props: {
        blogPosts: postsWithImages,
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
          <FadeInSection>
            <section
              id="products"
              className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
            >
              <ProductSection />
            </section>
          </FadeInSection>

          <FadeInSection delay={200}>
            <section
              id="features"
              className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50"
            >
              <FeaturesShowcase />
            </section>
          </FadeInSection>

          <FadeInSection delay={400}>
            <section
              id="how-it-works"
              className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
            >
              <HowItWorks />
            </section>
          </FadeInSection>

          <FadeInSection delay={600}>
            <section
              id="blog"
              className="flex items-center justify-center p-4 md:p-8 bg-gray-50"
            >
              <FeaturedBlogSection posts={blogPosts} />
            </section>
          </FadeInSection>
        </main>
      </div>
    </>
  );
}
