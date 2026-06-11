import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import SharedCTA from '../../components/SharedCTA';
import { blogIndex } from '../../data/blog-index';
import { normalizeBlogCategories } from '../../utils/blog-helpers';

const securityFeatures = [
  {
    title: 'Governance where utility operations work happens',
    description:
      'Corporate, field, and plant-adjacent teams live in SaaS: work management, vendor and contractor portals, GIS and planning tools, and collaboration in the browser. Oasis puts policy enforcement in that session, not only on managed corporate PCs.',
    details: [
      'Consistent controls across corporate, partner, and contractor devices',
      'Visibility into browser-level activity tied to identity',
      'Reduce reliance on unmanaged consumer browsers for sensitive workflows',
      'Close gaps when integrators and field partners use machines you do not manage',
    ],
  },
  {
    title: 'Secure access for contractors, field services, and vendors',
    description:
      'Utilities depend on external capacity: EPC, maintenance, OEM support, and seasonal surge. Oasis helps you grant SaaS access without defaulting to shipping laptops or standing up VDI for every engagement.',
    details: [
      'Managed browser sessions on their own devices',
      'Corporate-grade identity, session, and data policy in the browser',
      'Faster paths to productive access with less hardware logistics',
      'Operational model shifts toward identity-driven access management',
    ],
  },
  {
    title: 'Unified browser policies across sites and regions',
    description:
      'Apply the same browser governance story at corporate, generation, transmission, and field support environments. Policies follow the session, not only the endpoint.',
    details: [
      'Single control plane for browser-level enforcement',
      'DLP and usage policy aligned to how SaaS is actually used',
      'Consistent posture for operational and customer data in web apps',
      'Less exception sprawl across programs and geographies',
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
    title: 'Program and outage velocity',
    description:
      'Keep capital projects, maintenance windows, and storm response programs moving with less time lost to hardware provisioning when external teams need SaaS access.',
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
      'Reduce the operational tax of purchasing, shipping, tracking, and recovering laptops for contractors, roaming engineers, and long-term vendors.',
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
      'Operational and customer data in web applications stay governed when work happens in the browser on utility-owned and third-party devices.',
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
      'Support multi-jurisdiction utilities and contractor-heavy programs without scaling laptop logistics and one-off exceptions linearly.',
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

const energyMetrics = [
  {
    label: 'Wiper Attacks',
    value: '31%',
    insight: 'Of global wiper cyberattacks target energy & utilities.',
    source: { url: 'https://www.statista.com/statistics/1479650/wiper-cyberattack-detections-global-industries/', label: 'Statista, 2023' }
  },
  {
    label: 'Ransomware Impact',
    value: '44%',
    insight: 'Of energy-sector breaches involve ransomware.',
    source: { url: 'https://www.statista.com/statistics/1385289/cause-ransomware-attacks-by-industry/', label: 'Statista, 2023' }
  },
  {
    label: 'Breach Cost',
    value: '$4.72M',
    insight: 'Average cost per energy-sector data breach.',
    source: { url: 'https://www.utilitydive.com/news/experts-raise-concerns-about-cybersecurity-and-energy-storage-batteries-hackers/744170/', label: 'Utility Dive, 2023' }
  }
];

export async function getServerSideProps() {
  try {
    const energyBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'energy' || 
      cat.toLowerCase() === 'utilities' ||
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        energyBlogs: energyBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for energy-utilities page:', error);
    
    const fallbackBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'energy' || 
      cat.toLowerCase() === 'utilities' ||
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        energyBlogs: fallbackBlogs,
      },
    };
  }
}

export default function EnergyUtilities({ energyBlogs }) {
  const energyUtilitiesSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Energy & utilities: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis helps energy and utility organizations secure SaaS and browser-centric work for employees, contractors, and partners, with governance in the browser, unified policies, identity and DLP integration, and less laptop and VDI drag.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser for secure SaaS access in energy, utilities, and critical infrastructure-adjacent IT.',
    },
  };

  return (
    <>
      <SEO 
        title="Energy & utilities: Secure SaaS access with Oasis | Kahana"
        description="Managed enterprise browser for energy and utilities: governance in the browser for operations SaaS, vendor portals, and field IT, with unified policies, identity and DLP integration, and secure contractor access without default laptop shipping."
        image="https://kahana.io/assets/energy-utilities-preview.png"
        url="https://kahana.io/markets/energy-utilities"
        type="webpage"
        schema={energyUtilitiesSchema}
      />
      <Head>
        <title>Energy & utilities: Secure SaaS access with Oasis | Kahana</title>
        <meta
          name="description"
          content="Oasis is a managed enterprise browser for energy and utility teams: session-level governance, consistent browser policies across corporate and third-party devices, and integration with identity and enterprise DLP, so contractors and partners get productive without hardware logistics as the default gate."
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

      <section className="bg-gradient-to-b from-oasis-blue-100/20 via-oasis-blue-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">Energy & utilities</h2>
            <h1 className="text-5xl font-bold text-oasis-green-800 mb-6">
              Secure SaaS access for energy and utilities
            </h1>
            <p className="text-xl text-oasis-green-800 max-w-3xl mx-auto mb-8 leading-relaxed">
              Field and corporate teams reach critical systems through the browser on contractor and vendor machines. Oasis is a managed enterprise browser: enterprise policy extends into those sessions through your IdP and DLP without the hardware tax.
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
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12">
            Why browser governance matters in energy and utilities
          </h2>
          <p className="text-oasis-green-800 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry data highlights destructive malware and ransomware pressure. The pattern behind it is familiar: sensitive operational and customer work happens in the browser on a mix of utility-owned and third-party devices. Governing the session closes gaps that endpoint-only approaches often leave open.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {energyMetrics.map((metric, idx) => {
              const isLastOdd =
                energyMetrics.length % 2 === 1 &&
                idx === energyMetrics.length - 1;
              return (
                <div
                  key={idx}
                  className={[
                    'font-sans bg-white rounded-xl border border-oasis-green-800/10 shadow-sm p-6 flex flex-col transition-colors hover:border-brand-link/35 hover:shadow-md',
                    isLastOdd ? 'md:col-span-2 md:max-w-md md:mx-auto' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="text-3xl font-bold tracking-tight text-oasis-green-800 mb-2 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-oasis-green-800/85 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-oasis-green-800/90 leading-relaxed mb-3">
                    {metric.insight}
                  </div>
                  {metric.source && (
                    <a
                      href={metric.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-xs text-oasis-green-800/65 no-underline underline-offset-2 hover:text-brand-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
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

      <section className="bg-oasis-green-50 py-16 md:py-20 border-y border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12 tracking-tight">
            What Oasis delivers for energy and utilities
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Oasis is a managed enterprise browser, a control layer for SaaS-centric work. Policies travel with the session, connect to your identity and DLP stack, and keep contractor and partner access practical without leaning on laptops or VDI for every rollout.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-oasis-green-800/10 p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
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
                  <h3 className="text-base md:text-lg font-semibold text-oasis-green-800 leading-snug tracking-tight pt-1.5">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-oasis-green-800/90 leading-relaxed mb-5 border-l-2 border-kahana-primary-800/25 pl-4">
                  {feature.description}
                </p>
                <ul className="space-y-2.5">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex gap-3 text-sm text-oasis-green-800/95 leading-relaxed">
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
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-10 tracking-tight">
            Outcomes security and utility IT leaders care about
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Directional themes aligned to how utilities scale people and partners without letting device logistics become the bottleneck. Specific timelines and savings depend on your environment and scope.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {industryBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-oasis-green-800/10 p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg bg-kahana-primary-800 flex items-center justify-center ring-1 ring-kahana-primary-900/20"
                    aria-hidden
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-oasis-green-800 leading-snug tracking-tight pt-1.5">
                    {benefit.title}
                  </h3>
                </div>
                {benefit.stat != null && benefit.statLabel != null && (
                  <div className="mb-4">
                    <div className="text-2xl font-bold tracking-tight text-oasis-green-800 tabular-nums mb-1">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-oasis-green-800/85">
                      {benefit.statLabel}
                    </div>
                  </div>
                )}
                {benefit.source && (
                  <a
                    href={benefit.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 block text-xs text-oasis-green-800/65 no-underline underline-offset-2 hover:text-kahana-primary-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kahana-primary-700"
                  >
                    Source: {benefit.source.label}
                  </a>
                )}
                <p className="text-sm text-oasis-green-800/90 leading-relaxed border-l-2 border-kahana-primary-800/25 pl-4">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedBlogSection posts={energyBlogs} />

      <SharedCTA
        title="Field and vendor collaboration without operational drag"
        description="Put governance back in the browser for utility SaaS, with secure access from any device, policy enforcement, and visibility your security and IT teams can stand behind."
        primaryLabel="Schedule a demo"
        primaryHref="/schedule-demo"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
      />
    </>
  );
}
