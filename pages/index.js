import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CustomerSuccessSection from "../components/CustomerSuccessSection";
import NavbarDup from "../components/NavbarDup";
import Pricing from "../components/Pricing";
import Reviews from "../components/Reviews";
import ProductDemoSection from "../components/ProductDemoSection";
import Faq from "../components/Faq";

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
        <div style={{ zIndex: "100" }} className="sticky top-0">
          <NavbarDup />
        </div>
        <main className="scroll-smooth">
          <section
            id="hero"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-100"
          >
            <HeroSection />
          </section>
          <section
            id="customer-success"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
          >
            <CustomerSuccessSection />
          </section>
          <section
            id="product-demo"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-100"
          >
            <ProductDemoSection />
          </section>
          <section
            id="reviews"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
          >
            <Reviews />
          </section>
          <section
            id="pricing"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-100"
          >
            <Pricing />
          </section>
          <section
            id="faq"
            className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
          >
            <Faq />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
