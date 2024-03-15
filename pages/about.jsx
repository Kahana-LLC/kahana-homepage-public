import Head from 'next/head';
import AboutCard from '../components/AboutCard';
// import Image from 'next/image';

import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import TeamSection from '../components/TeamSection';

//components

export default function About() {
  return (
    <>
      <Head>
        <title>Why we built Kahana - About</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KQHFL9605P');
            `,
          }}
        />
      </Head>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0">
          <NavbarDup />
        </div>
        <main>
          <AboutCard classnName="relative" />
          {/* <FriendsOfKahana /> */}
          <TeamSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
