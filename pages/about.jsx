import Head from 'next/head';
import Script from 'next/script'; // Import the Script component
import AboutCard from '../components/AboutCard';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import TeamSection from '../components/TeamSection';

export default function About() {
  return (
    <>
      <Head>
        <title>Why we built Kahana - About</title>
        <meta
          name="description" // Change the meta name to 'description' for better SEO
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive" // Load the script after the page is interactive
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0">
          <NavbarDup />
        </div>
        <main>
          <AboutCard className="relative" /> {/* Fixed typo from classnName to className */}
          {/* <FriendsOfKahana /> */}
          <TeamSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
