import Head from "next/head";
import Script from "next/script";
import HeroSection from "../components/HeroSection";
import FeaturesShowcase from "../components/FeaturesShowcase";
import HowItWorks from "../components/HowItWorks";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ProductSection from "../components/ProductSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kahana - A New Oasis for Knowledge</title>
        <meta
          name="description"
          content="With Kahana, anyone can curate unique hubs of digital products, resources, files, and links and share them directly with hungry knowledge seekers. Collaborate within hubs to go even faster."
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
            id="hero"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-100"
          >
            <HeroSection />
          </section>
          <section
            id="features"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
          >
            <FeaturesShowcase />
          </section>
          <section
            id="how-it-works"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-50"
          >
            <HowItWorks />
          </section>
          <section
            id="testimonials"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
          >
            <TestimonialsCarousel />
          </section>
          <section
            id="products"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-100"
          >
            <ProductSection />
          </section>
        </main>
      </div>
    </>
  );
}
