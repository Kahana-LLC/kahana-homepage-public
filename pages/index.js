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
        <title>Build a secure knowledge business in minutes</title>
        <meta
          name="description"
          content="Kahana is the easiest way to turn your knowledge into subscription revenue. Sign up for free today!"
        />
      </Head>

      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQHFL9605P');
          `,
        }}
      />

      {/* Reditus affiliate tracking script */}
      <Script
        id="reditus-affiliate"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, s, p, t) {
              w.gr = w.gr || function() {
                w.gr.q = w.gr.q || [];
                w.gr.q.push(arguments);
              };
              p = d.getElementsByTagName(s)[0];
              t = d.createElement(s);
              t.async = true;
              t.src = "https://app.getreditus.com/gr.js?_ce=90";
              p.parentNode.insertBefore(t, p);
            })(window, document, "script");
            gr("track", "pageview");
          `,
        }}
      />

      {/* Crisp chat script */}
      <Script
        id="crisp-chat"
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

      {/* Stripe button script */}
      <Script
        id="stripe-button"
        async
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
