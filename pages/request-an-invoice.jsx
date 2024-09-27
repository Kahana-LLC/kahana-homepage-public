import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';

export default function Contact() {
  useEffect(() => {
    // Function to load Tally embeds script dynamically on the client side
    const loadTallyEmbeds = () => {
      const d = document;
      const w = "https://tally.so/widgets/embed.js";
      const v = () => {
        if (typeof Tally !== 'undefined') {
          Tally.loadEmbeds();
        } else {
          d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
            e.src = e.dataset.tallySrc;
          });
        }
      };

      if (typeof Tally !== 'undefined') {
        v();
      } else {
        if (d.querySelector(`script[src="${w}"]`) === null) {
          const s = d.createElement('script');
          s.src = w;
          s.onload = v;
          s.onerror = v;
          d.body.appendChild(s);
        }
      }
    };

    loadTallyEmbeds(); // Execute once on component mount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <Head>
        <title>Request an Invoice for Kahana Enterpise</title>
        <meta
          name="description"
          content="Request an Invoice for Kahana Enterprise."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kahana.co/request-an-invoice" />
      </Head>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0 bg-white shadow-md">
          <NavbarDup />
        </div>
        <main className="flex flex-col items-center min-h-screen py-16 bg-white px-6 sm:py-32 lg:px-8">
          <h1 className="text-2xl font-bold text-center mb-8 sm:text-3xl">
            Request an Invoice for Kahana Enterprise
          </h1>
          
          {/* Embed the form iframe here */}
          <div className="w-full max-w-4xl px-4">
            <iframe
              data-attributer-iframe
              src="https://tally.so/embed/n0vpJB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="663"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Request a demo form"
            ></iframe>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
