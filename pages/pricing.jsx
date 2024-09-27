import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <>
      <Head>
      <title>Pricing Plans - Kahana | Untether Your Knowledge</title>
<meta
  name="description"
  content="Explore Kahana's flexible pricing plans designed for a variety of use cases. Start for free today!" 
/>

      </Head>
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
