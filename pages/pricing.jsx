import Head from 'next/head';
// import Image from 'next/image';

import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Pricing from '../components/Pricing';

//components

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Kahana - Get paid for your best stuff</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today! "
        />
      </Head>
      <div>
        <div className="sticky top-0">
          <NavbarDup />
        </div>
        <main>
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
}
