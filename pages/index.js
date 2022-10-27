import Head from 'next/head';
// import Image from 'next/image';

import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ProductDemoSection from '../components/ProductDemoSection';

//components

export default function Home() {
  return (
    <>
      <Head>
        <title>Kahana - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <div>
        <div className="sticky top-0">
          <Navbar />
        </div>
        <main>
          <HeroSection />
          <ProductDemoSection />
        </main>
      </div>
    </>
  );
}
