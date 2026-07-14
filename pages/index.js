import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import PlatformHome from '../components/home/platform/PlatformHome';

export default function Home() {
  const [loadAuxScripts, setLoadAuxScripts] = useState(false);

  // Handle OAuth callback redirects from root URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const search = window.location.search;
      if (hash && (hash.includes('access_token=') || hash.includes('code=') || hash.includes('error='))) {
        window.location.href = `/oauth-callback${search}${hash}`;
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    let done = false;
    const onIntent = () => {
      if (done) return;
      done = true;
      setLoadAuxScripts(true);
      window.removeEventListener('pointerdown', onIntent);
      window.removeEventListener('keydown', onIntent);
      window.removeEventListener('scroll', onIntent);
    };
    const timer = window.setTimeout(onIntent, 6000);
    window.addEventListener('pointerdown', onIntent, { once: true, passive: true });
    window.addEventListener('keydown', onIntent, { once: true });
    window.addEventListener('scroll', onIntent, { once: true, passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('pointerdown', onIntent);
      window.removeEventListener('keydown', onIntent);
      window.removeEventListener('scroll', onIntent);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link
          rel="preload"
          as="image"
          href="/kahana_logo_transparent.svg"
          type="image/svg+xml"
        />
      </Head>
      <SEO
        title="Kahana — Put your knowledge in hubs"
        description="Kahana is the knowledge marketplace for hubs, experts, and digital products. Publish what you know, get discovered with Aura, and earn when people unlock your work."
        url="https://kahana.io/"
        type="website"
      />
      <PlatformHome />
      {loadAuxScripts ? (
        <Script
          id="homepage-aux"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: '' }}
        />
      ) : null}
    </>
  );
}
