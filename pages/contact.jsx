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
        <title>Contact Kahana - Get in Touch with Us</title>
        <meta
          name="description"
          content="Contact Kahana HQ for inquiries, support, or information. Fill out the form, and our team will get back to you. For immediate answers, explore our blog."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kahana.co/contact" />
      </Head>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0 bg-white shadow-md">
          <NavbarDup />
        </div>
        <main className="flex flex-col items-center min-h-screen py-16 bg-white px-6 sm:py-32 lg:px-8">
          <h1 className="text-2xl font-bold text-center mb-8 sm:text-3xl">
            Contact Kahana HQ
          </h1>
          <p className="text-center mb-6 text-base text-gray-700">
            We’re here to help! Please provide your details, and a Kahana team member will reach out to you shortly.<br />
            If you have a quick question, feel free to{' '}
            <span className="text-[#3B675E] underline">
              check out our blog
            </span>{' '}
            for immediate answers.
          </p>
          {/* Embed the form iframe here */}
          <div className="w-full max-w-4xl px-4">
            <iframe
              data-attributer-iframe
              src="https://tally.so/embed/w52BJN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="663"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
            ></iframe>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
