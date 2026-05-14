import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import SEO from '../components/SEO';
import SharedCTA from '../components/SharedCTA';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const PREVIEW_IMAGE = getCloudinaryImageUrl('/assets/oasis-browser-preview.png', { width: 1200, quality: 'auto:good' });
const ADAM_HEADSHOT_URL = getCloudinaryImageUrl('/assets/headshots/adam_kershner.jpg', {
  width: 800,
  height: 800,
  quality: 'auto:good',
});

const productB2C = {
  title: 'Oasis Browser',
  subtitle: 'Get started here.',
  description:
    'Experience fully secure, private browsing with a modern, elegant AI assistant that connects deeply into the browser core — not just sitting on top as a summarization tool. Natural language, voice, and AI that actually understand your tabs, history, and pages.',
  features: [
    'Built-in AI assistant with full browser context',
    'Voice input and dictation for hands-free browsing',
    'Natural language search across tabs, history, and bookmarks',
    'One-click import from Chrome, Edge, Firefox, and more',
    'Privacy-first: your browsing data stays yours',
  ],
  href: '/products/oasis-browser',
  cta: 'Download Oasis',
};

const productB2B = {
  title: 'Oasis Enterprise Browser',
  subtitle: 'Includes everything in Oasis, plus policy management for IT.',
  description:
    'Oasis Enterprise Browser includes every capability of the consumer browser, extended with enterprise policy management. IT teams can govern sessions, identity, and data protection for employees, contractors, and partners on any device.',
  features: [
    'Browser-level governance that follows the session, not the device',
    'Integration with enterprise identity providers (IdP)',
    'Data protection controls aligned with your DLP program',
    'Centralized policy management for IT and security teams',
    'Works on corporate and third-party devices',
  ],
  href: '/products/oasis-enterprise-browser',
  cta: 'Schedule a demo',
};

const userStats = [
  { value: '7,000+', label: 'users trust our products' },
  { value: '108+', label: 'countries worldwide' },
];

const problemProductivity = {
  title: 'Browsing should feel effortless',
  description:
    'The browser is the workspace for everyone: creators, employees, contractors. Yet navigating the web is still clunky, fragmented, and time-consuming. We believe natural language and voice should make browsing feel as simple as having a conversation.',
};

const problemSecurity = {
  title: 'Security can\'t stop at the device anymore',
  description:
    'SaaS is everywhere. Devices are diverse. Browser-based attack surfaces keep growing. Endpoint control alone can\'t protect how work actually happens. If governance lives in the browser instead, you can secure contractor access, enforce policy consistently, and protect data. No laptop shipping required.',
};

const pillars = [
  {
    title: 'Natural, effortless browsing',
    description: 'AI and voice that work alongside you in the browser instead of as a chat window you have to switch to.',
  },
  {
    title: 'Privacy for individuals',
    description: 'Your browsing data stays yours. No tracking. No selling. No third-party ads built into the browser.',
  },
  {
    title: 'Governance in the session',
    description: 'Enterprise policy that follows every browser session. IT can enforce rules wherever work happens.',
  },
  {
    title: 'Integration-first design',
    description: 'Works with your existing IdP, DLP, and productivity stack. No rip-and-replace required.',
  },
];

const audiences = [
  {
    title: 'Individuals & creators',
    description: 'Browse faster with AI and voice. Protect your personal data from trackers and exploits.',
  },
  {
    title: 'Security & IT teams',
    description: 'Govern SaaS access without laptop shipping or VDI sprawl. Policy enforcement that works on any device.',
  },
  {
    title: 'Contractors & partners',
    description: 'Get productive access from your own machine, with the policy and security your organization needs.',
  },
];

const founderBio = `Adam built his career inside IT teams at a billion-dollar CPG company. He first witnessed how quickly security gaps compound when the tools people rely on aren't built with security in mind. That experience shaped everything Kahana builds next.`;

export default function About() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://kahana.co/#organization',
        name: 'Kahana',
        url: 'https://kahana.co',
        description: 'Kahana builds Oasis: a personal browser and a managed enterprise browser. Kahana makes browsing faster, more private, and more secure.',
        logo: PREVIEW_IMAGE,
        sameAs: ['https://www.linkedin.com/company/kahana-llc'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kahana.co/#website',
        url: 'https://kahana.co',
        name: 'Kahana',
        publisher: { '@id': 'https://kahana.co/#organization' },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://kahana.co/about#webpage',
        url: 'https://kahana.co/about',
        name: 'About Kahana: Oasis, named for a refuge. Built for productivity and security.',
        isPartOf: { '@id': 'https://kahana.co/#website' },
        about: { '@id': 'https://kahana.co/#organization' },
        description: 'Kahana builds two products under the Oasis name. One is a personal browser with AI assistant. The other is a managed enterprise browser. 7,000+ users across 108+ countries.',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://kahana.co/about#software-b2c',
        name: 'Oasis Browser',
        description: productB2C.description,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Cross-platform',
        featureList: productB2C.features.join('; '),
        publisher: { '@id': 'https://kahana.co/#organization' },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://kahana.co/about#software-b2b',
        name: 'Oasis Enterprise Browser',
        description: productB2B.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Cross-platform',
        featureList: productB2B.features.join('; '),
        publisher: { '@id': 'https://kahana.co/#organization' },
      },
    ],
  };

  return (
    <>
      <SEO
        title="About Kahana: Oasis, named for a refuge. Built for productivity and security."
        description="Kahana builds two products under the Oasis name: a personal browser with AI assistant for individuals, and a managed enterprise browser for organizations. 7,000+ users across 108+ countries."
        image={PREVIEW_IMAGE}
        url="https://kahana.co/about"
        type="website"
        schema={organizationSchema}
      />
      <Head>
        <title>About Kahana: Oasis | Kahana</title>
        <meta name="description" content="Kahana builds two products under the Oasis name: a personal browser with AI assistant for individuals, and a managed enterprise browser for organizations. 7,000+ users across 108+ countries." />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      {/* ===== Hero ===== */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 lg:px-8 lg:pt-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-oasis-green-600">Kahana</p>
            <h1 className="mt-2 bg-gradient-to-r from-oasis-green-600 to-oasis-green-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              Oasis: named for a refuge. Built for productivity and security.
            </h1>
            <p className="mt-6 text-lg text-oasis-green-800 leading-relaxed">
              Kahana builds two products under the Oasis name. One is a personal browser with a built-in AI assistant for individuals. The other is a managed enterprise browser for organizations. Both share one mission: make browsing faster, more private, and more secure.
            </p>
            <p className="mt-4 text-base text-oasis-green-700 italic">
              7,000+ users trust our products across 108+ countries. Yes, we counted because we're curious.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/oasis-pricing"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Download Oasis
              </Link>
              <Link
                href="/schedule-demo"
                className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Schedule a demo
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-base text-oasis-green-800">
              <Link
                href="#mission"
                className="font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
              >
                Why Oasis?
              </Link>
              <Link
                href="#founder"
                className="font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
              >
                Founder
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Social proof bar ===== */}
      <section className="border-b border-oasis-green-800/8 bg-[#F3F8E4]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {userStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold tracking-tight text-oasis-green-800">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-oasis-green-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Mission / "It's called Oasis for a reason" ===== */}
      <section id="mission" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-oasis-green-800 sm:text-4xl">
              It's called Oasis for a reason
            </h2>
            <p className="mt-4 text-lg text-oasis-green-800 leading-relaxed">
              An oasis is a refuge: a place of shelter and calm in the middle of a harsh landscape. That's exactly what the modern web needs. Fragmentation, spyware, data leaks, and AI-driven threats have turned browsing into a gauntlet. We built Kahana. We named our products Oasis. We believe the browser should be a safe place to work, create, and explore.
            </p>
            <blockquote className="mt-8 border-l-4 border-oasis-green-600/35 bg-oasis-green-50/60 py-5 pl-5 pr-4 rounded-r-lg text-oasis-green-800 italic">
              <p className="text-[0.96875rem] leading-relaxed">
                I'll never forget the first time I saw a company get hacked and held hostage from the inside. Training and leadership commitment help, but they are not enough. Hackers are unpredictable, and exploitation keeps getting more advanced, especially in the age of AI. We are all human, and human error is still a common root cause of breaches.
              </p>
            </blockquote>
            <p className="mt-6 text-base text-oasis-green-700 leading-relaxed">
              That's why every product we build puts security and privacy at the core. Not as an afterthought. Not as a toggle you flip on.
            </p>
          </div>
        </div>
      </section>

      {/* ===== One Mission. Every Option. ===== */}
      <section className="bg-[#F3F8E4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-oasis-green-800 sm:text-4xl">One mission. Every option.</h2>
            <p className="mt-4 text-lg text-oasis-green-800 leading-relaxed">
              We built Oasis as a refuge from the chaos of the modern web. From that single vision, we've expanded to serve everyone: individuals who want private browsing, teams who want better UX, and organizations who need enterprise policy control.
            </p>
            <p className="mt-4 text-base text-oasis-green-700 leading-relaxed">
              Whether you're browsing personally, working with a team, or governing enterprise access, Oasis meets you where you are.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* B2C */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-oasis-green-800/10 flex flex-col">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-link mb-2">Flagship</p>
                <h3 className="text-2xl font-bold text-oasis-green-800">{productB2C.title}</h3>
                <p className="mt-2 text-sm font-medium text-oasis-green-600">{productB2C.subtitle}</p>
              </div>
              <p className="mt-5 text-oasis-green-800 leading-relaxed">{productB2C.description}</p>
              <ul className="mt-6 space-y-3">
                {productB2C.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                    <span className="text-sm text-oasis-green-800">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Link
                  href={productB2C.href}
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                >
                  {productB2C.cta}
                </Link>
              </div>
            </div>
            {/* B2B */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-oasis-green-800/10 flex flex-col">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-link mb-2">Enterprise</p>
                <h3 className="text-2xl font-bold text-oasis-green-800">{productB2B.title}</h3>
                <p className="mt-2 text-sm font-medium text-oasis-green-600">{productB2B.subtitle}</p>
              </div>
              <p className="mt-5 text-oasis-green-800 leading-relaxed">{productB2B.description}</p>
              <ul className="mt-6 space-y-3">
                {productB2B.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700" aria-hidden />
                    <span className="text-sm text-oasis-green-800">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Link
                  href={productB2B.href}
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                >
                  {productB2B.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== The Problem ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-oasis-green-800 sm:text-4xl">The problem we're solving</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 p-8">
              <h3 className="text-xl font-semibold text-oasis-green-800">{problemProductivity.title}</h3>
              <p className="mt-3 text-oasis-green-800 leading-relaxed">{problemProductivity.description}</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 p-8">
              <h3 className="text-xl font-semibold text-oasis-green-800">{problemSecurity.title}</h3>
              <p className="mt-3 text-oasis-green-800 leading-relaxed">{problemSecurity.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How Oasis Solves It ===== */}
      <section className="bg-[#F3F8E4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-oasis-green-800 sm:text-4xl">How Oasis solves it</h2>
          <p className="mt-4 text-center text-lg text-oasis-green-700 max-w-2xl mx-auto">
            Every feature we build is designed to make the browser feel effortless for individuals and governable for organizations.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-7 shadow-sm border border-oasis-green-800/10">
                <h3 className="text-lg font-semibold text-oasis-green-800">{p.title}</h3>
                <p className="mt-3 text-sm text-oasis-green-800 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Who It's For ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-oasis-green-800 sm:text-4xl">Who it's for</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-2xl bg-[#F8FAF2] p-7 border border-oasis-green-800/8">
                <h3 className="text-lg font-semibold text-oasis-green-800">{a.title}</h3>
                <p className="mt-2 text-sm text-oasis-green-800 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Founder ===== */}
      <section id="founder" className="bg-[#F3F8E4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-oasis-green-800 sm:text-4xl">Founder</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,300px)_1fr] md:items-start md:gap-12">
            <div className="flex justify-center md:justify-start">
              <Image
                src={ADAM_HEADSHOT_URL}
                alt="Adam Kershner, CEO and Founder of Kahana"
                width={1024}
                height={1024}
                className="h-auto w-full max-w-[280px] rounded-2xl border border-oasis-green-600/20 object-cover shadow-sm md:max-w-[300px]"
                sizes="(max-width: 768px) 280px, 300px"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <p className="text-lg font-semibold text-oasis-green-800">Adam Kershner</p>
                <a
                  href="https://www.linkedin.com/in/adam-kershner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-oasis-green-700/70 no-underline transition-colors hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
                  aria-label="Adam Kershner on LinkedIn (opens in a new tab)"
                >
                  <svg className="h-4 w-4 shrink-0 opacity-80" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="border-b border-oasis-green-700/25 pb-px hover:border-oasis-green-800/40">LinkedIn</span>
                </a>
              </div>
              <p className="mt-1 text-sm font-medium text-oasis-green-600">CEO & Founder</p>
              <p className="mt-5 text-base text-oasis-green-800 leading-relaxed">{founderBio}</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-base">
            <Link
              href="/team"
              className="font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
            >
              Full story
            </Link>
            <Link
              href="/careers"
              className="font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
            >
              Careers
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <SharedCTA
        title="Explore both products"
        description="Whether you want faster, more private personal browsing. Or enterprise-grade browser governance for your organization. We built Oasis for that."
        primaryLabel="Download Oasis"
        primaryHref="/oasis-pricing"
        secondaryLabel="Schedule a demo"
        secondaryHref="/schedule-demo"
      />
    </>
  );
}