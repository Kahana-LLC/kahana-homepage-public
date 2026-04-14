import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import { blogIndex } from '../../data/blog-index';
import { normalizeBlogCategories } from '../../utils/blog-helpers';

const securityFeatures = [
  {
    title: 'Governance where retail work happens',
    description:
      'Store, supply chain, and digital teams live in SaaS: workforce apps, vendor and franchise portals, e-commerce back office, and collaboration in the browser. Oasis puts policy enforcement in that session, not only on standard corporate devices.',
    details: [
      'Consistent controls across corporate, store, partner, and contractor devices',
      'Visibility into browser-level activity tied to identity',
      'Reduce reliance on unmanaged consumer browsers for sensitive workflows',
      'Close gaps when seasonal staff and agencies use machines you do not manage',
    ],
  },
  {
    title: 'Secure access for seasonal workers, franchises, and vendors',
    description:
      'Retail depends on surge capacity: holidays, remodels, and third-party merchandising. Oasis helps you grant SaaS access without defaulting to shipping laptops or standing up VDI for every engagement.',
    details: [
      'Managed browser sessions on their own devices',
      'Corporate-grade identity, session, and data policy in the browser',
      'Faster paths to productive access with less hardware logistics',
      'Operational model shifts toward identity-driven access management',
    ],
  },
  {
    title: 'Unified browser policies across banners, regions, and HQ',
    description:
      'Apply the same browser governance story across stores, distribution, and corporate. Policies follow the session, not only the endpoint.',
    details: [
      'Single control plane for browser-level enforcement',
      'DLP and usage policy aligned to how SaaS is actually used',
      'Consistent posture for customer and payment-adjacent data in web apps',
      'Less exception sprawl across brands and geographies',
    ],
  },
  {
    title: 'Plugs into identity and data protection you already use',
    description:
      'Oasis integrates with existing identity providers and enterprise DLP so access rules and data policies extend into SaaS workflows without asking security to rip and replace the stack.',
    details: [
      'IdP-driven authentication and access patterns',
      'Enterprise DLP and data controls in the browsing layer',
      'Builds on your security investments without duplicating them',
      'Built for adoption: modern browser experience with governance',
    ],
  },
];

const industryBenefits = [
  {
    title: 'Peak and launch velocity',
    description:
      'Keep seasonal ramps, promos, and store programs moving with less time lost to hardware provisioning when external teams need SaaS access.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
  {
    title: 'Cost structure',
    description:
      'Reduce the operational tax of purchasing, shipping, tracking, and recovering devices for seasonal associates, franchise support, and agencies.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
  {
    title: 'Governance confidence',
    description:
      'Customer and payment-adjacent data in web applications stay governed when work happens in the browser on corporate and third-party devices.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
  {
    title: 'Operational scalability',
    description:
      'Support multi-banner retailers and contractor-heavy programs without scaling laptop logistics and one-off exceptions linearly.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stat: null,
    statLabel: null,
    source: null,
  },
];

const retailMetrics = [
  {
    label: 'Phishing Surge',
    value: '692%',
    insight: 'Increase in phishing attacks in the run-up to peak retail periods reported by security vendors.',
    source: { url: 'https://www.darktrace.com/blog/phishing-attacks-surge-in-buildup-to-black-friday', label: 'Darktrace, 2024' }
  },
  {
    label: 'Breach Cost',
    value: '$3.48M',
    insight: 'Average cost per retail data breach discussed in industry reporting.',
    source: { url: 'https://www.retailtouchpoints.com/features/executive-viewpoints/the-real-price-of-a-data-breach-in-retail', label: 'Retail Touchpoints, 2024' }
  },
  {
    label: 'Browser Risk',
    value: '44%',
    insight: 'Share of incidents where browser-related factors appear in industry incident research.',
    source: { url: 'https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report', label: 'Palo Alto Networks, 2024' }
  }
];

export async function getServerSideProps() {
  try {
    const retailBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'retail' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        retailBlogs: retailBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for retail page:', error);
    
    const fallbackBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'retail' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        retailBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Retail({ retailBlogs }) {
  const retailSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Retail & e-commerce: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis helps retailers secure SaaS and browser-centric work for employees, franchises, and partners, with governance in the browser, unified policies, identity and DLP integration, and less laptop and VDI drag.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser for secure SaaS access in retail, e-commerce, and consumer brands.',
    },
  };

  return (
    <>
      <SEO 
        title="Retail & e-commerce: Secure SaaS access with Oasis | Kahana"
        description="Managed enterprise browser for retail: governance in the browser for store and HQ SaaS, franchise and vendor portals, with unified policies, identity and DLP integration, and secure seasonal access without default laptop shipping."
        image="https://kahana.co/assets/oasis-browser-preview.png"
        url="https://kahana.co/markets/retail"
        type="webpage"
        schema={retailSchema}
      />
      <Head>
        <title>Retail & e-commerce: Secure SaaS access with Oasis | Kahana</title>
        <meta
          name="description"
          content="Oasis is a managed enterprise browser for retail teams: session-level governance, consistent browser policies across corporate and third-party devices, and integration with identity and enterprise DLP, so seasonal workers and partners get productive without hardware logistics as the default gate."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive"
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

      <section className="bg-gradient-to-b from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Retail & e-commerce</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Secure SaaS access for retail and e-commerce
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8 leading-relaxed">
              Store, e-commerce, and HQ teams use SaaS in the browser on seasonal, franchise, and partner devices. Oasis is a managed enterprise browser: the same session-level controls tie to your IdP and DLP without turning every role into a hardware project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                Schedule a demo
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Why browser governance matters in retail
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry data highlights phishing spikes around peak seasons and sustained breach cost pressure. The pattern behind it is familiar: sensitive customer and operations work happens in the browser on a mix of corporate and third-party devices. Governing the session closes gaps that endpoint-only approaches often leave open.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {retailMetrics.map((metric, idx) => {
              const isLastOdd =
                retailMetrics.length % 2 === 1 &&
                idx === retailMetrics.length - 1;
              return (
                <div
                  key={idx}
                  className={[
                    'font-sans bg-white rounded-xl border border-[#4A5745]/10 shadow-sm p-6 flex flex-col transition-colors hover:border-[#66C2BE]/35 hover:shadow-md',
                    isLastOdd ? 'md:col-span-2 md:max-w-md md:mx-auto' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="text-3xl font-bold tracking-tight text-[#4A5745] mb-2 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-[#4A5745]/85 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-[#4A5745]/90 leading-relaxed mb-3">
                    {metric.insight}
                  </div>
                  {metric.source && (
                    <a
                      href={metric.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-xs text-[#4A5745]/65 no-underline underline-offset-2 hover:text-[#66C2BE] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66C2BE]"
                    >
                      Source: {metric.source.label}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f8faf9] py-16 md:py-20 border-y border-[#4A5745]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12 tracking-tight">
            What Oasis delivers for retail and e-commerce
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Oasis is a managed enterprise browser, a control layer for SaaS-centric work. Policies travel with the session, connect to your identity and DLP stack, and keep franchise and partner access practical without leaning on laptops or VDI for every rollout.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#4A5745]/10 p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg bg-kahana-primary-800 flex items-center justify-center ring-1 ring-kahana-primary-900/20"
                    aria-hidden
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#4A5745] leading-snug tracking-tight pt-1.5">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-[#4A5745]/90 leading-relaxed mb-5 border-l-2 border-kahana-primary-800/25 pl-4">
                  {feature.description}
                </p>
                <ul className="space-y-2.5">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex gap-3 text-sm text-[#4A5745]/95 leading-relaxed">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-kahana-primary-700"
                        aria-hidden
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-10 tracking-tight">
            Outcomes security and retail IT leaders care about
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Directional themes aligned to how retailers scale people and partners without letting device logistics become the bottleneck. Specific timelines and savings depend on your environment and scope.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {industryBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#4A5745]/10 p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg bg-kahana-primary-800 flex items-center justify-center ring-1 ring-kahana-primary-900/20"
                    aria-hidden
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#4A5745] leading-snug tracking-tight pt-1.5">
                    {benefit.title}
                  </h3>
                </div>
                {benefit.stat != null && benefit.statLabel != null && (
                  <div className="mb-4">
                    <div className="text-2xl font-bold tracking-tight text-[#4A5745] tabular-nums mb-1">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-[#4A5745]/85">
                      {benefit.statLabel}
                    </div>
                  </div>
                )}
                {benefit.source && (
                  <a
                    href={benefit.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 block text-xs text-[#4A5745]/65 no-underline underline-offset-2 hover:text-kahana-primary-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kahana-primary-700"
                  >
                    Source: {benefit.source.label}
                  </a>
                )}
                <p className="text-sm text-[#4A5745]/90 leading-relaxed border-l-2 border-kahana-primary-800/25 pl-4">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedBlogSection posts={retailBlogs} />

      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Store and digital collaboration without operational drag
          </h2>
          <p className="text-xl text-[#4A5745] mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Put governance back in the browser for retail SaaS, with secure access from any device, policy enforcement, and visibility your security and IT teams can stand behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Schedule a demo
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
