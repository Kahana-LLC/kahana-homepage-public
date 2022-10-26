// import Head from 'next/head';
// import Image from 'next/image';

import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

//components

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <HeroSection />
        </div>
      </div>
    </>
  );
}
