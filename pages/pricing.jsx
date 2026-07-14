import Head from 'next/head';
import Script from 'next/script';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Plans &amp; billing - Kahana</title>
        <meta
          name="description"
          content="Choose the Kahana plan that fits your hubs. Start free, upgrade to Growth for unlimited hubs and storage, or contact us for Enterprise."
        />
      </Head>
      <div>
        <main className="py-10 px-4">
          <Pricing />
        </main>
      </div>
    </>
  );
}
