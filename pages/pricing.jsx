import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing - Plans for Every Creator</title>
        <meta
          name="description"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>
      {/* Move Script tags here */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQHFL9605P');
          `,
        }}
      />
      <Script
        id="reditus-tracking"
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
      <div>
        <header className="sticky top-0 z-50">
          <NavbarDup />
        </header>
        <main className="py-10 px-4">
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
}
