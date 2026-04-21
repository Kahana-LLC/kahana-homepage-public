import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ConsentContext } from '../contexts/ConsentContext';
import DownloadOasisLink from './buttons/DownloadOasisLink';

const LINK_CLASS =
  'text-base font-normal text-[#666666] no-underline transition-colors hover:text-[#617500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]';

const SUB_LINK_CLASS =
  'text-[15px] font-normal leading-snug text-[#666666] no-underline transition-colors hover:text-[#617500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]';

const LEGAL_LINK_CLASS =
  'text-base font-normal text-[#666666] no-underline transition-colors hover:text-[#617500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]';

const PRODUCT_LINKS = [
  { href: '/oasis-pricing', label: 'Pricing' },
  { href: '/products/oasis-browser', label: 'Oasis Browser' },
  { href: '/products/oasis-enterprise-browser', label: 'Oasis Enterprise Browser' },
  { href: '/features', label: 'Features' },
];

const COMPANY_LINKS = [
  { href: '/about', label: 'About', prefetch: false },
  { href: '/team', label: 'Team', prefetch: false },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
  { href: '/security', label: 'Security' },
];

const RESOURCE_LINKS = [
  { href: '/enterprise-buyer-guide', label: 'Buyers Guide' },
  { href: '/blog', label: 'Newsletter' },
  { href: '/blog', label: 'Blog' },
  { href: '/docs', label: 'Docs' },
  { href: '/support', label: 'Help Center' },
  { href: '/oasis-feedback-survey', label: 'Share Feedback!' },
];

const USE_CASE_LINKS = [
  { href: '/solutions/saas-and-web-apps', label: 'SaaS & Web Apps' },
  { href: '/solutions/remote-workforce', label: 'Remote Workforce Security' },
  { href: '/solutions/merger-integration', label: 'Merger Integration' },
  { href: '/solutions/external-workforce', label: 'External Workforce Access' },
  { href: '/solutions/vdi-reduction', label: 'VDI Reduction' },
  { href: '/solutions/zero-trust-security', label: 'Zero Trust Security' },
  { href: '/solutions/privileged-user-management', label: 'Privileged User Management' },
  { href: '/solutions/secure-browsing', label: 'Secure Web Browsing' },
  { href: '/solutions/workplace-enablement', label: 'Workplace Enablement' },
];

const LEARN_LINKS = [
  { href: '/blog', label: 'Blog' },
  { href: '/docs', label: 'Docs' },
];

const MARKET_LINKS = [
  { href: '/markets/manufacturing', label: 'Manufacturing' },
  { href: '/markets/professional', label: 'Professional Services' },
  { href: '/markets/healthcare', label: 'Healthcare' },
  { href: '/markets/finance', label: 'Finance' },
  { href: '/markets/energy-utilities', label: 'Energy & Utilities' },
  { href: '/markets/retail', label: 'Retail & E-commerce' },
  { href: '/markets/government', label: 'Government & Public Sector' },
  { href: '/markets/technology', label: 'Technology' },
  { href: '/markets/education', label: 'Education' },
  { href: '/markets/hospitality', label: 'Hospitality' },
];

function FooterColumnHeading({ children }) {
  return (
    <p role="heading" aria-level={3} className="mb-[19px] text-base font-semibold text-[#333333]">
      {children}
    </p>
  );
}

function FooterSubheading({ children }) {
  return (
    <p className="mb-2 mt-6 text-[15px] font-semibold text-[#333333] first:mt-0">{children}</p>
  );
}

function LinkList({ links, linkClass = LINK_CLASS }) {
  return (
    <ul className="flex flex-col gap-[17px]">
      {links.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <Link
            href={item.href}
            prefetch={item.prefetch}
            className={linkClass}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Soc2InProgressBadge() {
  return (
    <Link
      href="/security"
      className="group inline-flex items-center gap-2.5 rounded-sm no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
      aria-label="Security and compliance: SOC 2 in progress"
    >
      <div
        className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full border-2 border-[#999999] bg-transparent px-1 text-center leading-none"
        aria-hidden
      >
        <span className="w-full border-b border-[#999999] pb-0.5 text-[8px] font-semibold text-[#999999]">
          AICPA
        </span>
        <span className="pt-0.5 text-[8px] font-semibold text-[#999999]">SOC 2</span>
        <span className="mt-0.5 text-[7px] italic text-[#999999]">in progress</span>
      </div>
    </Link>
  );
}

function SocialIconLink({ href, label, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-[#7A9200] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500] no-underline"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      {children}
    </Link>
  );
}

function AccordionChevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-[#617500] transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CookieSettingsControl({ consentContext, openCookieModal }) {
  if (consentContext) {
    return (
      <button
        type="button"
        onClick={openCookieModal}
        className={`${LEGAL_LINK_CLASS} footer-legal-text-button w-fit cursor-pointer text-left`}
      >
        Cookie Settings
      </button>
    );
  }
  return (
    <Link href="/privacy-policy#cookie-settings" prefetch={false} className={LEGAL_LINK_CLASS}>
      Cookie Settings
    </Link>
  );
}

function FooterContent() {
  const [openSection, setOpenSection] = useState(null);

  const consentContext = useContext(ConsentContext);

  const openCookieModal = consentContext?.openModal || (() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/privacy-policy#cookie-settings';
    }
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const sectionOpen = (id) => openSection === id;

  return (
    <footer
      className="relative bg-[#F8FAF2] text-[#333333]"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto w-full max-w-[1282px] px-6 pt-[69px] pb-[97px] sm:px-10 lg:px-16 xl:px-[115px]">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="flex flex-col gap-16 md:gap-[120px]">
          {/* Top: wordmark + CTA */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <Link href="/" className="inline-flex items-center no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]">
              <span className="relative block aspect-[230/77] w-[180px] shrink-0 sm:w-[200px] lg:w-[230px]">
                <Image
                  src="/kahana_logo_transparent.svg"
                  alt="Kahana"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 230px"
                  className="object-contain object-left"
                  priority={false}
                />
              </span>
            </Link>

            <div className="flex flex-col items-stretch gap-4 lg:items-end">
              <DownloadOasisLink layout="footer" className="transition-opacity hover:opacity-95" />
              <p className="text-left text-lg text-[#666666] lg:text-right lg:text-xl lg:leading-6">
                And browse the ergonomic way.
              </p>
            </div>
          </div>

          {/* Link grid + mobile accordions */}
          <div className="flex flex-col gap-10 md:gap-0">
            {/* Mobile accordions */}
            <div className="flex flex-col gap-3 md:hidden">
              <div className="rounded-lg border border-[#E0E8D4] bg-white/40">
                <button
                  type="button"
                  className="footer-accordion-trigger flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleSection('product')}
                  aria-expanded={openSection === 'product'}
                >
                  <span className="text-base font-semibold text-oasis-green-900">Product</span>
                  <AccordionChevron open={openSection === 'product'} />
                </button>
                {sectionOpen('product') && (
                  <div className="border-t border-[#E0E8D4] px-4 py-4">
                    <LinkList links={PRODUCT_LINKS} />
                  </div>
                )}
              </div>

              <div className="rounded-lg border border-[#E0E8D4] bg-white/40">
                <button
                  type="button"
                  className="footer-accordion-trigger flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleSection('company')}
                  aria-expanded={openSection === 'company'}
                >
                  <span className="text-base font-semibold text-oasis-green-900">Company</span>
                  <AccordionChevron open={openSection === 'company'} />
                </button>
                {sectionOpen('company') && (
                  <div className="border-t border-[#E0E8D4] px-4 py-4">
                    <LinkList links={COMPANY_LINKS} />
                  </div>
                )}
              </div>

              <div className="rounded-lg border border-[#E0E8D4] bg-white/40">
                <button
                  type="button"
                  className="footer-accordion-trigger flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleSection('resources')}
                  aria-expanded={openSection === 'resources'}
                >
                  <span className="text-base font-semibold text-oasis-green-900">Resources</span>
                  <AccordionChevron open={openSection === 'resources'} />
                </button>
                {sectionOpen('resources') && (
                  <div className="border-t border-[#E0E8D4] px-4 py-4">
                    <LinkList links={RESOURCE_LINKS} />
                  </div>
                )}
              </div>

              <div className="rounded-lg border border-[#E0E8D4] bg-white/40">
                <button
                  type="button"
                  className="footer-accordion-trigger flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleSection('useCases')}
                  aria-expanded={openSection === 'useCases'}
                >
                  <span className="text-base font-semibold text-oasis-green-900">Use cases</span>
                  <AccordionChevron open={openSection === 'useCases'} />
                </button>
                {sectionOpen('useCases') && (
                  <div className="border-t border-[#E0E8D4] px-4 py-4">
                    <LinkList links={USE_CASE_LINKS} linkClass={SUB_LINK_CLASS} />
                  </div>
                )}
              </div>

              <div className="rounded-lg border border-[#E0E8D4] bg-white/40">
                <button
                  type="button"
                  className="footer-accordion-trigger flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleSection('learn')}
                  aria-expanded={openSection === 'learn'}
                >
                  <span className="text-base font-semibold text-oasis-green-900">Learn</span>
                  <AccordionChevron open={openSection === 'learn'} />
                </button>
                {sectionOpen('learn') && (
                  <div className="border-t border-[#E0E8D4] px-4 py-4">
                    <LinkList links={LEARN_LINKS} linkClass={SUB_LINK_CLASS} />
                  </div>
                )}
              </div>

              <div className="rounded-lg border border-[#E0E8D4] bg-white/40">
                <button
                  type="button"
                  className="footer-accordion-trigger flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleSection('markets')}
                  aria-expanded={openSection === 'markets'}
                >
                  <span className="text-base font-semibold text-oasis-green-900">Markets</span>
                  <AccordionChevron open={openSection === 'markets'} />
                </button>
                {sectionOpen('markets') && (
                  <div className="border-t border-[#E0E8D4] px-4 py-4">
                    <LinkList links={MARKET_LINKS} linkClass={SUB_LINK_CLASS} />
                  </div>
                )}
              </div>

              <div className="rounded-lg border border-[#E0E8D4] bg-white/40">
                <button
                  type="button"
                  className="footer-accordion-trigger flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleSection('legal')}
                  aria-expanded={openSection === 'legal'}
                >
                  <span className="text-base font-semibold text-oasis-green-900">Legal &amp; social</span>
                  <AccordionChevron open={openSection === 'legal'} />
                </button>
                {sectionOpen('legal') && (
                  <div className="border-t border-[#E0E8D4] px-4 py-4">
                    <ul className="flex flex-col gap-[17px]">
                      <li>
                        <Link href="/terms-and-conditions" prefetch={false} className={LEGAL_LINK_CLASS}>
                          Terms
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy" prefetch={false} className={LEGAL_LINK_CLASS}>
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <CookieSettingsControl consentContext={consentContext} openCookieModal={openCookieModal} />
                      </li>
                      <li>
                        <Link href="/right-to-work" className={LEGAL_LINK_CLASS}>
                          Right to Work
                        </Link>
                      </li>
                      <li>
                        <Link href="/sales" className={LEGAL_LINK_CLASS}>
                          Contact Sales
                        </Link>
                      </li>
                    </ul>
                    <p className="mb-2 mt-6 text-base font-semibold text-[#333333]">Social</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <SocialIconLink href="https://www.linkedin.com/company/kahana-co" label="Visit Kahana on LinkedIn">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </SocialIconLink>
                      <SocialIconLink href="https://x.com/KahanaHQ" label="Follow Kahana on X (Twitter)">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </SocialIconLink>
                      <SocialIconLink href="https://discord.gg/erkguEsVHa" label="Join Kahana on Discord">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                      </SocialIconLink>
                      <SocialIconLink href="https://www.youtube.com/@kahanaHQ" label="Subscribe to Kahana on YouTube">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </SocialIconLink>
                      <SocialIconLink href="https://www.instagram.com/kahanahq" label="Follow Kahana on Instagram">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </SocialIconLink>
                    </div>
                    <div className="mt-6">
                      <Soc2InProgressBadge />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop grid: md 2-col, lg 3-col, xl 6-col */}
            <div className="hidden md:grid md:grid-cols-2 md:items-start md:gap-x-8 md:gap-y-12 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-6 xl:gap-x-[137px]">
              <div>
                <FooterColumnHeading>Product</FooterColumnHeading>
                <LinkList links={PRODUCT_LINKS} />
              </div>

              <div>
                <FooterColumnHeading>Company</FooterColumnHeading>
                <LinkList links={COMPANY_LINKS} />
              </div>

              <div>
                <FooterColumnHeading>Resources</FooterColumnHeading>
                <LinkList links={RESOURCE_LINKS} />
              </div>

              <div>
                <FooterColumnHeading>Use cases</FooterColumnHeading>
                <LinkList links={USE_CASE_LINKS} />
              </div>

              <div>
                <FooterColumnHeading>Markets</FooterColumnHeading>
                <LinkList links={MARKET_LINKS} />
                <FooterSubheading>Learn</FooterSubheading>
                <LinkList links={LEARN_LINKS} linkClass={SUB_LINK_CLASS} />
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <FooterColumnHeading>Legal</FooterColumnHeading>
                  <ul className="flex flex-col gap-[17px]">
                    <li>
                      <Link href="/terms-and-conditions" prefetch={false} className={LEGAL_LINK_CLASS}>
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" prefetch={false} className={LEGAL_LINK_CLASS}>
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <CookieSettingsControl consentContext={consentContext} openCookieModal={openCookieModal} />
                    </li>
                    <li>
                      <Link href="/right-to-work" className={LEGAL_LINK_CLASS}>
                        Right to Work
                      </Link>
                    </li>
                    <li>
                      <Link href="/sales" className={LEGAL_LINK_CLASS}>
                        Contact Sales
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <FooterColumnHeading>Social</FooterColumnHeading>
                  <div className="flex flex-wrap items-center gap-4">
                    <SocialIconLink href="https://www.linkedin.com/company/kahana-co" label="Visit Kahana on LinkedIn">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </SocialIconLink>
                    <SocialIconLink href="https://x.com/KahanaHQ" label="Follow Kahana on X (Twitter)">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </SocialIconLink>
                    <SocialIconLink href="https://discord.gg/erkguEsVHa" label="Join Kahana on Discord">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.youtube.com/@kahanaHQ" label="Subscribe to Kahana on YouTube">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/kahanahq" label="Follow Kahana on Instagram">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </SocialIconLink>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-base font-semibold text-[#333333]" role="heading" aria-level={3}>
                    Certifications
                  </p>
                  <Soc2InProgressBadge />
                </div>
              </div>
            </div>
          </div>

          <p className="text-left text-base font-normal leading-6 text-[#999999]">
            © 2026 Kahana Group Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return <FooterContent />;
}
