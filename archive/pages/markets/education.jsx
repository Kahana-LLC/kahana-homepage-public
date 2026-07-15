import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import SharedCTA from '../../components/SharedCTA';
import { blogIndex } from '../../data/blog-index';
import { normalizeBlogCategories } from '../../utils/blog-helpers';

const securityFeatures = [
  {
    title: 'Governance where teaching and administration work happens',
    description:
      'Faculty, staff, and students live in the browser: LMS and SIS, collaboration suites, financial aid and HR portals, library and research tools, and vendor-hosted services. Oasis puts policy enforcement in that session, not only on lab or one-to-one devices you fully manage.',
    details: [
      'Consistent controls across managed institutional devices and authorized personal devices where policy allows',
      'Visibility into browser-level activity tied to identity',
      'Reduce reliance on unmanaged consumer browsers for records and regulated workflows',
      'Close gaps when adjuncts, substitutes, or partners use machines outside your standard build',
    ],
  },
  {
    title: 'Secure access for adjuncts, researchers, and third parties',
    description:
      'Schools and universities rely on contractors, researchers, and service providers. Oasis helps you grant SaaS access without defaulting to shipping institution-owned hardware or standing up VDI for every engagement.',
    details: [
      'Managed browser sessions on partner- or personally owned devices where permitted',
      'Institution-grade identity, session, and data policy in the browser',
      'Faster paths to productive access with less device logistics',
      'Operational model shifts toward identity-driven access management',
    ],
  },
  {
    title: 'Unified browser policies across campus, online, and distributed programs',
    description:
      'Apply the same browser governance story for main campus, extension sites, distance learning, and administrative units. Policies follow the session, not only the lab image.',
    details: [
      'Single control plane for browser-level enforcement',
      'DLP and usage policy aligned to how SaaS is actually used in instruction and operations',
      'Consistent posture for student and education records in web applications within your legal and policy framework',
      'Less exception sprawl across departments and terms',
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
    title: 'Academic and service continuity',
    description:
      'Keep instruction, advising, and business operations moving with less time lost to device provisioning when seasonal staff and partners need SaaS access.',
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
      'Reduce the operational tax of purchasing, imaging, shipping, and recovering devices for short-term faculty, student workers, and program partners.',
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
      'Student and institutional data in web applications stay governed when work happens in the browser on managed and authorized devices, aligned to your policies and obligations.',
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
      'Support enrollment swings, grant-funded projects, and multi-campus rollouts without scaling one-off device exceptions linearly.',
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

const educationMetrics = [
  {
    label: 'Sector breach volume',
    value: '1,500+',
    insight: 'Confirmed data breaches in the education sector in one recent annual window cited in sector reporting.',
    source: { url: 'https://www.knowbe4.com/hubfs/Global-Education-Report_US_EN.pdf', label: 'KnowBe4, 2023' },
  },
  {
    label: 'Ransomware incidents',
    value: '116',
    insight: 'Ransomware attacks on U.S. education organizations in 2024, with 1.8M records affected, per sector reporting.',
    source: { url: 'https://statescoop.com/ransomware-education-sector-decline-2024/', label: 'StateScoop, 2024' },
  },
  {
    label: 'Backup compromise',
    value: '71%',
    insight: 'Share of ransomware victims in education reporting where backups were also compromised, per sector analysis.',
    source: { url: 'https://www.varonis.com/blog/education-cybersecurity-statistics', label: 'Varonis, 2024' },
  },
];

export async function getServerSideProps() {
  try {
    const educationBlogs = blogIndex
      .filter(post =>
        normalizeBlogCategories(post.category).some(
          cat => cat.toLowerCase() === 'education' || cat.toLowerCase() === 'security'
        )
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        educationBlogs: educationBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for education page:', error);

    const fallbackBlogs = blogIndex
      .filter(post =>
        normalizeBlogCategories(post.category).some(
          cat => cat.toLowerCase() === 'education' || cat.toLowerCase() === 'security'
        )
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        educationBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Education({ educationBlogs }) {
  const educationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Education: Oasis managed enterprise browser | Kahana',
    description:
      'Oasis helps schools and universities secure browser-centric work for faculty, staff, and partners, with session-level governance, unified policies, identity and DLP integration, and practical access for adjuncts and vendors without laptop shipping or VDI as the default.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description:
        'Kahana builds Oasis, a managed enterprise browser for secure SaaS access in K-12, higher education, and research environments.',
    },
  };

  return (
    <>
      <SEO
        title="Education: Secure SaaS access with Oasis | Kahana"
        description="Managed enterprise browser for education: governance in the browser for LMS, SIS, and campus SaaS, with unified policies, identity and DLP integration, and secure access for adjuncts and partners without default laptop shipping."
        image="https://kahana.io/assets/oasis-browser-preview.png"
        url="https://kahana.io/markets/education"
        type="webpage"
        schema={educationSchema}
      />
      <Head>
        <title>Education: Secure SaaS access with Oasis | Kahana</title>
        <meta
          name="description"
          content="Oasis is a managed enterprise browser for education: session-level governance, consistent browser policies across institutional and authorized devices, and integration with identity and enterprise DLP, so adjuncts, researchers, and partners get productive without hardware logistics as the default gate."
        />
      </Head>

      <section className="bg-gradient-to-b from-oasis-blue-100/20 via-oasis-blue-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">Education</h2>
            <h1 className="text-5xl font-bold text-oasis-green-800 mb-6">Secure browser governance for schools and universities</h1>
            <p className="text-xl text-oasis-green-800 max-w-3xl mx-auto mb-8 leading-relaxed">
              Instruction and administration run through web apps across faculty, adjuncts, and vendors on mixed devices. Oasis is a managed enterprise browser: identity- and DLP-backed policy follows those sessions so external collaborators are not stuck on institution hardware by default.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/schedule-demo"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Schedule a demo
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 text-center mb-12">
            Why browser governance matters in education
          </h2>
          <p className="text-oasis-green-800 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
            Sector reporting continues to highlight ransomware pressure, large breach volumes, and recovery challenges. The pattern is familiar: sensitive student and institutional work happens in web applications on a mix of managed and personal devices. Governing the session closes gaps that endpoint-only approaches often leave open.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {educationMetrics.map((metric, idx) => {
              const isLastOdd =
                educationMetrics.length % 2 === 1 && idx === educationMetrics.length - 1;
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
                  <div className="text-sm text-oasis-green-800/90 leading-relaxed mb-3">{metric.insight}</div>
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
            What Oasis delivers for education
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Oasis is a managed enterprise browser, a control layer for SaaS-centric campus and district work. Policies travel with the session, connect to your identity and DLP stack, and keep contingent and partner access practical without leaning on institution-owned devices or VDI for every program.
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
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
            Outcomes education IT and security leaders care about
          </h2>
          <p className="text-oasis-green-800/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Directional themes aligned to how institutions scale people and partners across terms and campuses. Specific timelines and savings depend on your environment, governance model, and scope.
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
                    <div className="text-sm text-oasis-green-800/85">{benefit.statLabel}</div>
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

      <FeaturedBlogSection posts={educationBlogs} />

      <SharedCTA
        title="Teaching and operations without browser blind spots"
        description="Put governance in the browser for campus and district SaaS, with secure access from authorized devices, policy enforcement, and visibility your security and IT teams can stand behind."
        primaryLabel="Schedule a demo"
        primaryHref="/schedule-demo"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
      />
    </>
  );
}
