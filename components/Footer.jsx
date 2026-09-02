import React, { useState, useContext } from 'react';
import Link from 'next/link';
import {
  BookmarkIcon,
  BookOpenIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  CubeIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  IdentificationIcon,
  LifebuoyIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShareIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { ConsentContext } from '../contexts/ConsentContext';
import { useMarketingI18n } from '../contexts/MarketingI18n';
import { APP_URL, CONTACT_URL } from './nav/navConfig';
import KahanaWordmark from './brand/KahanaWordmark';
import LanguageMenu from './brand/LanguageMenu';
import { withAppLanguageParam } from '../lib/contentLanguage';
import { APP_NAME } from '../config/brand';

const LINK_CLASS =
  'inline-flex items-center gap-2 text-base font-normal text-[#666666] no-underline transition-colors hover:text-[#8A6622] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6622]';

const LEGAL_LINK_CLASS =
  'inline-flex items-center gap-2 text-base font-normal text-[#666666] no-underline transition-colors hover:text-[#8A6622] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6622]';

const ICON_LINK = 'h-4 w-4 shrink-0 text-current';
const ICON_HEADING = 'h-4 w-4 shrink-0 text-[#8A6622]';

const PRODUCT_LINKS = [
  {
    href: 'https://kahana.io/explore',
    labelKey: 'footer.explore',
    external: true,
    icon: MagnifyingGlassIcon,
  },
  { href: '/pricing', labelKey: 'footer.pricing', icon: TagIcon },
  { href: '/features', labelKey: 'footer.features', icon: Squares2X2Icon },
  { href: '/use-cases', labelKey: 'footer.jobs', icon: BookmarkIcon },
  { href: '/success-stories', labelKey: 'footer.useCases', icon: BookOpenIcon },
];

/** About / Team / Careers hidden from footer for now (pages still exist). */
const COMPANY_LINKS = [
  { href: CONTACT_URL, labelKey: 'footer.contact', icon: EnvelopeIcon, external: true },
  {
    href: 'https://kahana.io/support',
    labelKey: 'footer.support',
    external: true,
    icon: LifebuoyIcon,
  },
];

/** Testimonials / Press kit / Press releases hidden for now. */
const RESOURCE_LINKS = [
  { href: '/blog', labelKey: 'footer.blog', icon: NewspaperIcon },
  { href: '/help', labelKey: 'footer.help', icon: QuestionMarkCircleIcon },
  { href: '/faq', labelKey: 'footer.faq', icon: ChatBubbleLeftRightIcon },
];

const SECTION_ICONS = {
  product: CubeIcon,
  company: BuildingOffice2Icon,
  resources: BookOpenIcon,
  legal: ScaleIcon,
};

function FooterColumnHeading({ icon: Icon, children }) {
  return (
    <p
      role="heading"
      aria-level={3}
      className="mb-[19px] inline-flex items-center gap-2 text-base font-semibold text-[#333333]"
    >
      {Icon ? <Icon className={ICON_HEADING} aria-hidden /> : null}
      {children}
    </p>
  );
}

function LinkList({ links, t, linkClass = LINK_CLASS }) {
  return (
    <ul className="flex flex-col gap-[17px]">
      {links.map((item) => {
        const Icon = item.icon;
        const label = item.labelKey ? t(item.labelKey) : item.label;
        const content = (
          <>
            {Icon ? <Icon className={ICON_LINK} aria-hidden /> : null}
            {label}
          </>
        );
        return (
          <li key={`${item.href}-${item.labelKey || item.label}`}>
            {item.external || item.href.startsWith('http') ? (
              <a href={item.href} className={linkClass} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <Link href={item.href} prefetch={item.prefetch} className={linkClass}>
                {content}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function SocialIconLink({ href, label, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-[#8A6622] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6622] no-underline"
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
      className={`h-5 w-5 shrink-0 text-[#8A6622] transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CookieSettingsControl({ consentContext, openCookieModal, t }) {
  const content = (
    <>
      <Cog6ToothIcon className={ICON_LINK} aria-hidden />
      {t('footer.cookieSettings')}
    </>
  );

  if (consentContext) {
    return (
      <button
        type="button"
        onClick={openCookieModal}
        className={`${LEGAL_LINK_CLASS} footer-legal-text-button w-fit cursor-pointer text-left`}
      >
        {content}
      </button>
    );
  }
  return (
    <Link href="/privacy-policy#cookie-settings" prefetch={false} className={LEGAL_LINK_CLASS}>
      {content}
    </Link>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <SocialIconLink href="https://www.linkedin.com/company/kahana-llc" label={`Visit ${APP_NAME} on LinkedIn`}>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </SocialIconLink>
      <SocialIconLink href="https://x.com/KahanaHQ" label={`Follow ${APP_NAME} on X (Twitter)`}>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </SocialIconLink>
      <SocialIconLink href="https://www.youtube.com/@kahanaHQ" label={`Subscribe to ${APP_NAME} on YouTube`}>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </SocialIconLink>
      <SocialIconLink href="https://www.instagram.com/kahanahq" label={`Follow ${APP_NAME} on Instagram`}>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </SocialIconLink>
    </div>
  );
}

function LegalLinkList({ consentContext, openCookieModal, t }) {
  return (
    <ul className="flex flex-col gap-[17px]">
      <li>
        <Link href="/terms-and-conditions" prefetch={false} className={LEGAL_LINK_CLASS}>
          <DocumentTextIcon className={ICON_LINK} aria-hidden />
          {t('footer.terms')}
        </Link>
      </li>
      <li>
        <Link href="/privacy-policy" prefetch={false} className={LEGAL_LINK_CLASS}>
          <LockClosedIcon className={ICON_LINK} aria-hidden />
          {t('footer.privacy')}
        </Link>
      </li>
      <li>
        <Link href="/security" className={LEGAL_LINK_CLASS}>
          <ShieldCheckIcon className={ICON_LINK} aria-hidden />
          {t('footer.security')}
        </Link>
      </li>
      <li>
        <a
          href="https://kahana.io/legal/content-rights"
          className={LEGAL_LINK_CLASS}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookOpenIcon className={ICON_LINK} aria-hidden />
          {t('footer.contentRights')}
        </a>
      </li>
      <li>
        <CookieSettingsControl
          consentContext={consentContext}
          openCookieModal={openCookieModal}
          t={t}
        />
      </li>
      <li>
        <Link href="/right-to-work" className={LEGAL_LINK_CLASS}>
          <IdentificationIcon className={ICON_LINK} aria-hidden />
          {t('footer.rightToWork')}
        </Link>
      </li>
    </ul>
  );
}

function FooterContent() {
  const [openSection, setOpenSection] = useState(null);
  const { preference: langPreference, t } = useMarketingI18n();

  const consentContext = useContext(ConsentContext);

  const contributeUrl = withAppLanguageParam(APP_URL, langPreference);

  const openCookieModal =
    consentContext?.openModal ||
    (() => {
      if (typeof window !== 'undefined') {
        window.location.href = '/privacy-policy#cookie-settings';
      }
    });

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const sectionOpen = (id) => openSection === id;

  const accordionSections = [
    { id: 'product', labelKey: 'footer.product', links: PRODUCT_LINKS, icon: SECTION_ICONS.product },
    { id: 'company', labelKey: 'footer.company', links: COMPANY_LINKS, icon: SECTION_ICONS.company },
    {
      id: 'resources',
      labelKey: 'footer.resources',
      links: RESOURCE_LINKS,
      icon: SECTION_ICONS.resources,
    },
  ];

  return (
    <footer className="relative bg-[#F7F3EA] text-[#333333]" aria-labelledby="footer-heading">
      <div className="mx-auto w-full max-w-[1282px] px-6 pb-[97px] pt-[69px] sm:px-10 lg:px-16 xl:px-[115px]">
        <h2 id="footer-heading" className="sr-only">
          {t('footer.label')}
        </h2>

        <div className="flex flex-col gap-16 md:gap-[120px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <KahanaWordmark size={30} />
              <LanguageMenu align="start" openUpward />
            </div>

            <div className="flex flex-col items-stretch gap-4 lg:items-end">
              <a
                href={contributeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center no-underline transition-opacity hover:opacity-95"
              >
                {t('footer.contribute')}
              </a>
              <p className="text-left text-lg text-[#666666] lg:text-right lg:text-xl lg:leading-6">
                {t('footer.tagline')}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:gap-0">
            <div className="flex flex-col gap-3 md:hidden">
              {accordionSections.map((section) => {
                const SectionIcon = section.icon;
                return (
                  <div key={section.id} className="rounded-lg border border-[#E4D9C4] bg-white/40">
                    <button
                      type="button"
                      className="footer-accordion-trigger flex w-full items-center justify-between px-4 py-3 text-left"
                      onClick={() => toggleSection(section.id)}
                      aria-expanded={openSection === section.id}
                    >
                      <span className="inline-flex items-center gap-2 text-base font-semibold text-oasis-green-900">
                        {SectionIcon ? <SectionIcon className={ICON_HEADING} aria-hidden /> : null}
                        {t(section.labelKey)}
                      </span>
                      <AccordionChevron open={openSection === section.id} />
                    </button>
                    {sectionOpen(section.id) && (
                      <div className="border-t border-[#E4D9C4] px-4 py-4">
                        <LinkList links={section.links} t={t} />
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="rounded-lg border border-[#E4D9C4] bg-white/40">
                <button
                  type="button"
                  className="footer-accordion-trigger flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleSection('legal')}
                  aria-expanded={openSection === 'legal'}
                >
                  <span className="inline-flex items-center gap-2 text-base font-semibold text-oasis-green-900">
                    <ScaleIcon className={ICON_HEADING} aria-hidden />
                    {t('footer.legalSocial')}
                  </span>
                  <AccordionChevron open={openSection === 'legal'} />
                </button>
                {sectionOpen('legal') && (
                  <div className="border-t border-[#E4D9C4] px-4 py-4">
                    <LegalLinkList
                      consentContext={consentContext}
                      openCookieModal={openCookieModal}
                      t={t}
                    />
                    <p className="mb-2 mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#333333]">
                      <ShareIcon className={ICON_HEADING} aria-hidden />
                      {t('footer.social')}
                    </p>
                    <SocialLinks />
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 md:items-start md:gap-x-8 md:gap-y-12 lg:grid-cols-4 lg:gap-x-10">
              <div>
                <FooterColumnHeading icon={CubeIcon}>{t('footer.product')}</FooterColumnHeading>
                <LinkList links={PRODUCT_LINKS} t={t} />
              </div>

              <div>
                <FooterColumnHeading icon={BuildingOffice2Icon}>
                  {t('footer.company')}
                </FooterColumnHeading>
                <LinkList links={COMPANY_LINKS} t={t} />
              </div>

              <div>
                <FooterColumnHeading icon={BookOpenIcon}>{t('footer.resources')}</FooterColumnHeading>
                <LinkList links={RESOURCE_LINKS} t={t} />
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <FooterColumnHeading icon={ScaleIcon}>{t('footer.legal')}</FooterColumnHeading>
                  <LegalLinkList
                    consentContext={consentContext}
                    openCookieModal={openCookieModal}
                    t={t}
                  />
                </div>

                <div>
                  <FooterColumnHeading icon={ShareIcon}>{t('footer.social')}</FooterColumnHeading>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          <p className="text-left text-base font-normal leading-6 text-[#999999]">
            {t('footer.copyright', { year: 2026 })}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return <FooterContent />;
}
