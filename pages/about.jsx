import Head from 'next/head';
import AboutCard from '../components/AboutCard';
// import Image from 'next/image';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TeamSection from '../components/TeamSection';

//components

export default function About() {
  return (
    <>
      <Head>
        <title>Kahana - Helping Creators Monetize</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0">
          <Navbar />
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
