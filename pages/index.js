import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CustomerSuccessSection from '../components/CustomerSuccessSection';
import NavbarDup from '../components/NavbarDup';
import Pricing from '../components/Pricing';
import Reviews from '../components/Reviews';
import ProductDemoSection from '../components/ProductDemoSection';
//import RealitySection from '../components/RealitySection';
//import SimpleHeader from '../components/SimpleHeader';
//import { Testimonial } from '../components/Testimonial';

//components
//images
import avatarImage1 from '../assets/images/avatars/avatar-10.jpeg';
import Faq from '../components/Faq';
//
export default function Home() {
  return (
    <>
      <Head>
        <title>Kahana - Earn passive income for free</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to turn your knowledge into subscription revenue. Sign up for free today!"
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"></script>
        <script
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
        <script
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
        <script
          type="text/javascript"
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
        <script async
          src="https://js.stripe.com/v3/buy-button.js">
        </script>
      </Head>
      <div>
        <div style={{ zIndex: '100' }} className="sticky top-0">
          <NavbarDup />
        </div>
        <main>
          <HeroSection />
          <CustomerSuccessSection />
          <ProductDemoSection />
          <Reviews />
          <Pricing />
          
          <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white`}>
            <div className="max-w-7xl mx-auto text-center">
              <h2 className={`text-3xl font-bold text-gray-900`}>
                Want a passive income stream but don&apos;t have the time or energy to make one?
              </h2>
              <p className="mt-4 text-gray-700 large-text">
                We&apos;ve got you covered: our team will build it for you.
              </p>
              <Link href="/order-hubs-on-demand">
                <a className="block mt-8">
                  <button className="px-6 py-2 bg-[#3B675E] text-white rounded-md shadow-md hover:bg-[#046856]">
                    Learn more
                  </button>
                </a>
              </Link>
            </div>
          </section> 

          <Faq />
        </main>
        <Footer />
      </div>
    </>
  );
}
