import Head from 'next/head';
import { useEffect } from 'react'; // Import useEffect for client-side script handling
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';

export default function About() {
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
        <title>Kahana Sales</title>
        <meta
          name="description"
          content="Fill out your information and a Kahana representative will reach out to you. Have a simple question? Search our library of articles."
        />
      </Head>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0">
          <NavbarDup />
        </div>
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh', padding: '40px 20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', fontWeight: 'bold' }}>
            Contact Kahana HQ
          </h1>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>
            Fill out your information and a Kahana team member will reach out to you. Have a simple question?{' '} 
            <span style={{ textDecoration: 'underline' }}>
            <a href="https://blog.kahana.co" target="_blank" rel="noopener noreferrer">
              Search our existing articles.
            </a>
            </span>
          </p>
          {/* Embed the form iframe here */}
          <div style={{ width: '100%', maxWidth: '800px', padding: '0 20px' }}>
            <iframe
              data-attributer-iframe
              src="https://tally.so/embed/w52BJN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="663"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Sales"
            ></iframe>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
