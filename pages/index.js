import Head from 'next/head';
// import Image from 'next/image';

import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import ProductDemoSection from '../components/ProductDemoSection';
//import RealitySection from '../components/RealitySection';
//import SimpleHeader from '../components/SimpleHeader';
import { Testimonial } from '../components/Testimonial';

//components
//images
import avatarImage1 from '../assets/images/avatars/avatar-10.jpeg';
import Faq from '../components/Faq';
//
export default function Home() {
  return (
    <>
      <Head>
        <title>Kahana - Helping Creators Monetize</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today! "
        />
      </Head>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0">
          <Navbar />
        </div>
        <main>
          <HeroSection />
          <ProductDemoSection />
          //<SimpleHeader />
          //<RealitySection />
          <Testimonial
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
          </Testimonial>
          <Pricing />
          {/* <Reviews /> */}

          <Faq />
        </main>
        <Footer />
      </div>
    </>
  );
}
