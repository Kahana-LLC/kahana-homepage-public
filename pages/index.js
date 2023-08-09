import Head from 'next/head';
// import Image from 'next/image';

import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
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
        <title>Kahana - Collaborate and monetize together</title>
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
      <script> (function(w, d, s, p, t) { w.gr = w.gr || function() { w.gr.q = w.gr.q || []; w.gr.q.push(arguments); }; p = d.getElementsByTagName(s)[0]; t = d.createElement(s); t.async = true; t.src = "https://app.getreditus.com/gr.js?_ce=90"; p.parentNode.insertBefore(t, p); })(window, document, "script"); gr("track", "pageview"); </script>
      </Head>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0">
          <NavbarDup />
        </div>
        <main>
          <HeroSection />
          <ProductDemoSection />
          {/* <SimpleHeader /> */}
          {/* <RealitySection /> */}
          <Reviews />
            {/* <Testimonial
            id="testimonial-from-kahana-user"
            author={{
              name: 'Fantasy Flock Network',
              role: 'YouTuber - 147K subscribers',
              image: avatarImage1,
            }}
          >
            <p>
              “ The flexibility is a huge differentiator in that you can just
              have monetized hubs and put them anywhere as opposed to Patreon,
              which is a whole thing.”
            </p>
          </Testimonial> */}
          <Pricing />

          <Faq />
        </main>
        <Footer />
      </div>
    </>
  );
}
