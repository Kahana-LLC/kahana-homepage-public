import Head from 'next/head';
// import Image from 'next/image';

import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import ProductDemoSection from '../components/ProductDemoSection';
import RealitySection from '../components/RealitySection';
import SimpleHeader from '../components/SimpleHeader';
import { Testimonial } from '../components/Testimonial';

//components
//images
import avatarImage1 from '../assets/images/avatars/avatar-10.png';
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
        <div className="sticky top-0">
          <Navbar />
        </div>
        <main>
          <HeroSection />
          <ProductDemoSection />
          <SimpleHeader />
          <RealitySection />
          <Testimonial
            id="testimonial-from-kahana-user"
            author={{
              name: 'Someone Lastname',
              role: 'Front-end developer',
              image: avatarImage1,
            }}
          >
            <p>
              “ I am creating, monetizing, and collaborating so effortlessly
              that people think I am a sorcerer!”
            </p>
          </Testimonial>
          <Pricing />
          <Faq />
        </main>
        <Footer />
      </div>
    </>
  );
}
