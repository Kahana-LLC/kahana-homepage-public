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
    title: 'Governance where financial work happens',
    description:
      'Banking, markets, and corporate functions live in SaaS: CRM and advisory tools, treasury and payments portals, research, and collaboration in the browser. Oasis puts policy enforcement in that session, not only on standard corporate builds.',
    details: [
      'Consistent controls across corporate, partner, and contractor devices',
      'Visibility into browser-level activity tied to identity',
      'Reduce reliance on unmanaged consumer browsers for sensitive workflows',
      'Close gaps when auditors, vendors, and temps use machines you do not manage',
    ],
  },
  {
    title: 'Secure access for contractors, BPO, and partner firms',
    description:
      'Financial services runs on external capacity: outsourcing, consulting, and affiliate relationships. Oasis helps you grant SaaS access without defaulting to shipping laptops or standing up VDI for every engagement.',
    details: [
      'Managed browser sessions on their own devices',
      'Corporate-grade identity, session, and data policy in the browser',
      'Faster paths to productive access with less hardware logistics',
      'Operational model shifts toward identity-driven access management',
    ],
  },
  {
    title: 'Unified browser policies across lines of business and regions',
    description:
      'Apply the same browser governance story across business units, branches, and remote staff. Policies follow the session, not only the endpoint.',
    details: [
      'Single control plane for browser-level enforcement',
      'DLP and usage policy aligned to how SaaS is actually used',
      'Consistent posture for regulated and high-value data flows',
      'Less exception sprawl across entities and programs',
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
    title: 'Deal and operations velocity',
    description:
      'Keep client work, processing, and change programs moving with less time lost to hardware provisioning when external teams need SaaS access.',
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
      'Reduce the operational tax of purchasing, shipping, tracking, and recovering laptops for rotations, contractors, and surge teams.',
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
      'Customer, employee, and firm-confidential data stay governed when work happens in the browser on corporate and third-party devices.',
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
      'Support multi-entity institutions and contractor-heavy programs without scaling laptop logistics and one-off exceptions linearly.',
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

const financeMetrics = [
  {
    label: 'Ransomware Attacks',
    value: '65%',
    insight: 'Of financial firms targeted by ransomware in 2024.',
    source: { url: 'https://www.arcserve.com/blog/ransomware-hit-over-two-thirds-financial-services-firms-2024-5-steps-ensure-your-firm-can', label: 'Arcserve, 2024' }
  },
  {
    label: 'Browser Exploits',
    value: '44%',
    insight: 'Of breaches involve browser-based attacks.',
    source: { url: 'https://www.verizon.com/business/resources/infographics/2025-dbir-finance-snapshot.pdf', label: 'Verizon DBIR, 2025' }
  },
  {
    label: 'Breach Cost',
    value: '$6.08M',
    insight: 'Average cost per financial services data breach.',
    source: { url: 'https://www.ibm.com/think/insights/cost-of-a-data-breach-2024-financial-industry', label: 'IBM, 2024' }
  },
  {
    label: 'Recovery Cost',
    value: '$2.58M',
    insight: 'Average ransomware recovery cost for financial firms.',
    source: { url: 'https://www.arcserve.com/blog/ransomware-hit-over-two-thirds-financial-services-firms-2024-5-steps-ensure-your-firm-can', label: 'Arcserve, 2024' }
  },
  {
    label: 'Mega-Breach Cost',
    value: '$375M',
    insight: 'Average cost for breaches with 50M+ records.',
    source: { url: 'https://www.ibm.com/think/insights/cost-of-a-data-breach-2024-financial-industry', label: 'IBM, 2024' }
  }
];

export async function getServerSideProps() {
  try {
    const financeBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'finance' || 
      cat.toLowerCase() === 'financial' ||
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        financeBlogs: financeBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for finance page:', error);
    
    const fallbackBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'finance' || 
      cat.toLowerCase() === 'financial' ||
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        financeBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Finance({ financeBlogs }) {
  const financeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Financial services: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis helps financial institutions secure SaaS and browser-centric work for employees, contractors, and partners, with governance in the browser, unified policies, identity and DLP integration, and less laptop and VDI drag.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser for secure SaaS access in banking, markets, and financial services.',
    },
  };

  return (
    <>
      <SEO 
        title="Financial services: Secure SaaS access with Oasis | Kahana"
        description="Managed enterprise browser for financial services: governance in the browser for banking and markets SaaS, client and operations tools, with unified policies, identity and DLP integration, and secure contractor access without default laptop shipping."
        image="https://kahana.co/assets/finance-preview.png"
        url="https://kahana.co/markets/finance"
        type="webpage"
        schema={financeSchema}
      />
      <Head>
        <title>Financial services: Secure SaaS access with Oasis | Kahana</title>
        <meta
          name="description"
          content="Oasis is a managed enterprise browser for financial services: session-level governance, consistent browser policies across firm and third-party devices, and integration with identity and enterprise DLP, so contractors and partners get productive without hardware logistics as the default gate."
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
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Financial services</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Secure SaaS access for financial services
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8 leading-relaxed">
              Client and back-office workflows move through SaaS in the browser on mixed endpoints. Oasis is a managed enterprise browser: session-level access and data rules align to your IdP and DLP without laptop provisioning as the only trusted pattern.
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
            Why browser governance matters in financial services
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry data highlights ransomware, browser risk, and breach cost pressure. The pattern behind it is familiar: sensitive work happens in the browser on a mix of firm-owned and third-party devices. Governing the session closes gaps that endpoint-only approaches often leave open.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {financeMetrics.map((metric, idx) => {
              const isLastOdd =
                financeMetrics.length % 2 === 1 &&
                idx === financeMetrics.length - 1;
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
            What Oasis delivers for financial services
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Oasis is a managed enterprise browser, a control layer for SaaS-centric work. Policies travel with the session, connect to your identity and DLP stack, and keep contractor and partner access practical without leaning on laptops or VDI for every rollout.
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
            Outcomes security and technology leaders care about
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Directional themes aligned to how institutions scale people and partners without letting device logistics become the bottleneck. Specific timelines and savings depend on your environment and scope.
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

      <FeaturedBlogSection posts={financeBlogs} />

      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Client and operations collaboration without operational drag
          </h2>
          <p className="text-xl text-[#4A5745] mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Put governance back in the browser for financial SaaS, with secure access from any device, policy enforcement, and visibility your security and technology teams can stand behind.
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
