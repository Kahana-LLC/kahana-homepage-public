import Head from 'next/head';
// import Image from 'next/image';

import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import ProductDemoSection from '../components/ProductDemoSection';
import SimpleHeader from '../components/SimpleHeader';

//components

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
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
}
