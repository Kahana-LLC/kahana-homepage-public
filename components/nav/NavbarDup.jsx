import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ArrowRightOnRectangleIcon,
  FolderPlusIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';
import { desktopNavItems, mobileNavSections } from './navConfig';
import { productHref } from '../../lib/productLinks';
import KahanaWordmark from '../brand/KahanaWordmark';
import LanguageMenu from '../brand/LanguageMenu';
import { readAuthHintCookie } from '../../lib/authHint';
import { useMarketingI18n } from '../../contexts/MarketingI18n';

const MD_BREAKPOINT = 1024;

const NAV_LABEL_KEYS = {
  discover: 'nav.discover',
  help: 'nav.help',
  support: 'nav.support',
  contact: 'nav.contact',
  useCases: 'nav.useCases',
  features: 'nav.features',
  philosophy: 'nav.philosophy',
};

function ChevronDownIcon({ className }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12.09 16.1361C11.9917 16.1373 11.8942 16.1179 11.8038 16.0792C11.7134 16.0404 11.6321 15.9832 11.5652 15.9112L4.81674 9.16274C4.51681 8.86281 4.51681 8.39792 4.81674 8.09799C5.11667 7.79806 5.58156 7.79806 5.88149 8.09799L12.105 14.3215L18.3136 8.11299C18.6135 7.81306 19.0784 7.81306 19.3783 8.11299C19.6783 8.41292 19.6783 8.87781 19.3783 9.17774L12.6299 15.9262C12.4799 16.0761 12.285 16.1511 12.105 16.1511L12.09 16.1361Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

/* Compact header CTAs — see .btn-nav in globals (tighter than Figma sm; not used sitewide) */
const ctaSecondaryClass =
  'btn-secondary btn-nav inline-flex items-center gap-1.5 no-underline hover:no-underline focus:no-underline';

const ctaPrimaryClass =
  'btn-primary btn-nav inline-flex items-center gap-1.5 no-underline hover:no-underline focus:no-underline';

const ctaLoginClass =
  'nav-link relative z-[2] inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2 py-2 font-sans text-[0.9375rem] font-normal !text-oasis-green-700 no-underline focus:outline-none';

/* Full-size site CTAs for mobile drawer (match homepage pills) */
const mobileCtaSecondaryClass =
  'btn-secondary inline-flex items-center gap-2 no-underline hover:no-underline focus:no-underline';

const mobileCtaPrimaryClass =
  'btn-primary inline-flex items-center gap-2 no-underline hover:no-underline focus:no-underline';

function collectDropdownHrefs(dropdown) {
  const hrefs = [];
  for (const section of dropdown.sections) {
    if (section.type === 'promo') {
      if (section.href && section.prefetch !== false) hrefs.push(section.href);
    } else if (section.links) {
      for (const link of section.links) {
        if (
          link.href &&
          link.prefetch !== false &&
          !link.external &&
          !/^https?:\/\//.test(link.href)
        ) {
          hrefs.push(link.href);
        }
      }
    }
  }
  return hrefs;
}

function NavDropdownPanelSection({ section, splitColumns, sectionIndex, onPick }) {
  const promoSrc = useMemo(() => {
    if (section.type !== 'promo') return null;
    if (section.imageSrc) return section.imageSrc;
    if (!section.imagePath) return null;
    return getCloudinaryImageUrl(section.imagePath, {
      width: section.imageWidth,
      height: section.imageHeight,
      quality: 'auto:good',
    });
  }, [
    section.type,
    section.imageSrc,
    section.imagePath,
    section.imageWidth,
    section.imageHeight,
  ]);

  if (section.type === 'promo') {
    const src = promoSrc;
    return (
      <div className="dropdown-section dropdown-section--promo">
        <Link
          href={section.href}
          prefetch={section.prefetch}
          className="discover-promo-card"
          onClick={onPick}
        >
          {src ? (
            <div className="discover-promo-card__media">
              <img
                src={src}
                alt={section.imageAlt || section.eyebrow || section.title || ''}
                className="discover-promo-card__img"
                width={section.imageWidth || 640}
                height={section.imageHeight || 400}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          ) : null}
          {section.eyebrow ? (
            <p className="discover-promo-card__eyebrow">{section.eyebrow}</p>
          ) : null}
          <p className="discover-promo-card__title">{section.title}</p>
        </Link>
      </div>
    );
  }

  const dividerClass = splitColumns && sectionIndex === 0 ? 'nav-dropdown-section--split-first' : '';

  return (
    <div className={`dropdown-section ${dividerClass}`}>
      <h3 className="dropdown-section__heading">{section.heading}</h3>
      <div className="dropdown-section__links">
        {section.links.map((item) => {
          const isExternal = item.external || /^https?:\/\//.test(item.href);
          const className = 'dropdown-link';
          if (isExternal) {
            return (
              <a
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onPick}
              >
                {item.label}
              </a>
            );
          }
          return (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              prefetch={item.prefetch !== false}
              className={className}
              onClick={onPick}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function NavbarDup() {
  const router = useRouter();
  const { preference: langPreference, t } = useMarketingI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isAppSignedIn, setIsAppSignedIn] = useState(false);
  const prefetchedDropdowns = useRef(new Set());

  const appUrl = useMemo(
    () => productHref('/', 'nav_create', langPreference),
    [langPreference],
  );
  const exploreUrl = useMemo(
    () => productHref('/library', 'nav_explore', langPreference),
    [langPreference],
  );

  useEffect(() => {
    const syncAuthHint = () => setIsAppSignedIn(readAuthHintCookie());
    syncAuthHint();
    window.addEventListener('focus', syncAuthHint);
    document.addEventListener('visibilitychange', syncAuthHint);
    return () => {
      window.removeEventListener('focus', syncAuthHint);
      document.removeEventListener('visibilitychange', syncAuthHint);
    };
  }, []);

  const prefetchDropdown = useCallback(
    (dropdown, id) => {
      if (!dropdown || prefetchedDropdowns.current.has(id)) return;
      prefetchedDropdowns.current.add(id);
      for (const href of collectDropdownHrefs(dropdown)) {
        router.prefetch(href).catch(() => {});
      }
    },
    [router]
  );

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);
  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    if (!openDropdown) return;
    const item = desktopNavItems.find((entry) => entry.id === openDropdown);
    if (item?.dropdown) prefetchDropdown(item.dropdown, openDropdown);
  }, [openDropdown, prefetchDropdown]);

  useEffect(() => {
    const onResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= MD_BREAKPOINT) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onClickOutside = (event) => {
      const t = event.target;
      if (t && !t.closest('.dropdown')) closeDropdown();
    };
    if (openDropdown) {
      document.addEventListener('click', onClickOutside);
      return () => document.removeEventListener('click', onClickOutside);
    }
  }, [openDropdown, closeDropdown]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closeDropdown();
        closeMobile();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeDropdown, closeMobile]);

  const toggleDropdown = (id, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative">
      <div className="h-16 w-full" aria-hidden="true" />

      <nav className="nav-shell fixed left-0 top-0 z-50 h-16 w-full bg-[#F7F3EA] transition-all duration-300">
        <style jsx>{`
          .nav-shell {
            position: fixed;
          }
          .nav-shell::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            background: #E4D9C4;
            pointer-events: none;
            z-index: 2;
          }
          .nav-content > .nav-brand {
            margin-left: 1.45rem !important;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            gap: 0.5rem;
          }
          @media (min-width: 640px) {
            .nav-content > .nav-brand {
              margin-left: 1.45rem !important;
            }
          }
          @media (min-width: 1024px) {
            .nav-content > .nav-brand {
              margin-left: 1.75rem !important;
            }
          }
          .nav-content > .nav-brand a {
            margin: 0 !important;
            padding: 0 !important;
            display: flex;
            align-items: center;
            line-height: 0;
            flex-shrink: 0;
          }
          .nav-content > .nav-brand img {
            margin: 0 !important;
            padding: 0 !important;
            display: block;
            object-fit: contain;
            object-position: left center;
          }
          .nav-links {
            display: flex;
            align-items: center;
            gap: 0.125rem;
            height: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          @media (max-width: 767px) {
            .nav-links {
              display: none;
            }
          }
          .dropdown {
            position: relative;
            display: inline-flex;
            align-items: center;
            height: 100%;
            z-index: 1;
          }
          .dropdown:hover {
            z-index: 100;
          }
          .dropdown::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
          }
          .dropdown-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.05);
            z-index: 40;
            pointer-events: none;
          }
          .dropdown:hover .dropdown-overlay,
          .dropdown.active .dropdown-overlay {
            display: block;
          }
          .dropdown-content {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
            background-color: #FFFEFA;
            box-shadow: 0 8px 32px rgba(59, 47, 26, 0.1);
            border: 1px solid #E4D9C4;
            border-radius: 20px;
            padding: 28px 24px;
            margin-top: -4px;
            transition: all 0.15s ease;
            display: grid;
            gap: 0;
            pointer-events: none;
            z-index: 50;
          }
          .dropdown-content::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 0;
            right: 0;
            height: 24px;
          }
          .dropdown:hover .dropdown-content,
          .dropdown.active .dropdown-content {
            visibility: visible;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            pointer-events: auto;
          }
          .dropdown-content--discover {
            left: auto;
            right: 0;
            transform: translateY(-10px);
            padding: 32px 8px;
          }
          .dropdown:hover .dropdown-content--discover,
          .dropdown.active .dropdown-content--discover {
            transform: translateY(0);
          }
          .dropdown-content--discover .dropdown-section {
            padding: 0 28px;
            border-right: 1px solid #E4D9C4;
          }
          .dropdown-content--discover .dropdown-section:last-child {
            border-right: none;
          }
          .dropdown-section__heading {
            margin: 0 0 1.25rem;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #3B2F1A;
          }
          .dropdown-section__links {
            display: flex;
            flex-direction: column;
            gap: 0.15rem;
          }
          .dropdown-icon-button {
            background: none !important;
            border: none !important;
            padding: 0.375rem 0.3125rem 0.375rem 0.1875rem !important;
            margin: 0 !important;
            min-width: 44px !important;
            min-height: 44px !important;
            box-sizing: border-box !important;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--nav-link-color, #8A6622) !important;
            transition: transform 0.2s ease, color 0.2s ease;
            pointer-events: auto;
          }
          .dropdown-icon-button:focus {
            outline: none;
          }
          .dropdown-icon-button:focus-visible {
            box-shadow: 0 0 0 2px #fff, 0 0 0 4px #8A6622;
            border-radius: 4px;
          }
          .nav-link:focus-visible,
          .dropdown-link:focus-visible,
          .discover-promo-card:focus-visible {
            box-shadow: 0 0 0 2px #fff, 0 0 0 4px #8A6622;
            border-radius: 8px;
          }
          .nav-link:hover .dropdown-icon-button,
          .dropdown-icon-button:hover {
            color: #4a5f00 !important;
            transform: scale(1.1);
          }
          .dropdown.active .dropdown-icon-button svg {
            transform: rotate(180deg);
          }
          .dropdown-icon-button svg {
            transition: transform 0.2s ease;
            width: 12px;
            height: 12px;
            pointer-events: none;
            color: inherit;
          }
          .dropdown-section {
            padding: 0;
            min-width: 0;
          }
          .dropdown-link {
            display: block;
            color: var(--nav-link-color, #8A6622) !important;
            text-decoration: none !important;
            font-weight: 500 !important;
            font-size: 0.9375rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            letter-spacing: -0.01em;
            line-height: 1.45;
            padding: 0.55rem 0.75rem;
            margin: 0 -0.75rem;
            border-radius: 8px;
            -webkit-tap-highlight-color: transparent;
            background-color: transparent;
          }
          .dropdown-link:hover {
            background-color: rgba(138, 102, 34, 0.08);
          }
          .dropdown-link + .dropdown-link {
            margin-top: 0;
          }
          .discover-promo-card {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 100%;
            padding: 0.85rem;
            border-radius: 16px;
            background: #fff;
            border: 1px solid #E4D9C4;
            text-decoration: none !important;
            color: inherit;
            transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
          }
          .discover-promo-card:hover {
            border-color: #C4B089;
            box-shadow: 0 6px 18px rgba(59, 47, 26, 0.08);
            transform: translateY(-1px);
          }
          .discover-promo-card__media {
            position: relative;
            aspect-ratio: 16 / 10;
            width: 100%;
            overflow: hidden;
            border-radius: 12px;
            background: #EDE6D2;
          }
          .discover-promo-card__img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .discover-promo-card__eyebrow {
            margin: 0.85rem 0 0;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #8A6622;
          }
          .discover-promo-card__title {
            margin: 0.4rem 0 0;
            font-size: 0.95rem;
            font-weight: 600;
            line-height: 1.35;
            letter-spacing: -0.015em;
            color: #3B2F1A;
          }
          .nav-dropdown-section--split-first {
            position: relative;
          }
          .nav-dropdown-section--split-first::after {
            content: none;
          }
          .nav-buttons {
            display: none;
            align-items: center;
            gap: 0.5rem;
          }
          @media (min-width: 1024px) {
            .nav-buttons {
              display: flex;
            }
          }
          .mobile-menu {
            position: fixed;
            top: 64px;
            right: 0;
            width: min(300px, 100vw);
            height: calc(100vh - 64px);
            background-color: white;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            z-index: 40;
            overflow-y: auto;
            overscroll-behavior: contain;
          }
          .mobile-menu.open {
            transform: translateX(0);
          }
          .menu-links {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          /* :global so Next.js <Link> (className on inner <a>) still gets a 44px row */
          :global(.mobile-menu a.mobile-link) {
            color: #8A6622 !important;
            box-sizing: border-box !important;
            transition: background-color 0.2s ease;
            padding: 1rem 1.25rem;
            min-height: 44px;
            border-radius: 0.75rem;
            width: 100%;
            text-align: left;
            background-color: #f8f9fa;
            font-size: 1.125rem;
            font-weight: 500 !important;
            display: flex;
            align-items: center;
            border: 1px solid #edf0f2;
            text-decoration: none !important;
          }
          :global(.mobile-menu a.mobile-link:hover) {
            background-color: #d0ede6;
            color: #8A6622 !important;
          }
          :global(.mobile-menu a.mobile-link:focus-visible) {
            box-shadow: 0 0 0 2px #fff, 0 0 0 4px #8A6622;
          }
        `}</style>

        <div className="nav-content mx-auto flex h-full max-w-[1280px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
          <div className="nav-brand flex shrink-0 items-center">
            <KahanaWordmark size={36} />
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <nav className="hidden items-center lg:flex" aria-label={t('nav.mainNav')}>
              <ul className="nav-links !mr-0 flex items-center gap-1">
                {desktopNavItems.map((item, index) => {
                  const label = NAV_LABEL_KEYS[item.id] ? t(NAV_LABEL_KEYS[item.id]) : item.label;
                  const divider =
                    index > 0 ? (
                      <span
                        className="mx-1 h-5 w-px shrink-0 bg-[#3B2F1A]/20"
                        aria-hidden
                      />
                    ) : null;

                  if (!item.dropdown) {
                    const linkClass =
                      'nav-link relative z-[2] inline-flex items-center gap-0.5 whitespace-nowrap rounded-md px-2 py-2 font-sans text-[0.9375rem] font-normal !text-oasis-green-700 no-underline focus:outline-none';
                    return (
                      <li key={item.id} className="flex items-center gap-1">
                        {divider}
                        {item.external || item.href.startsWith('http') ? (
                          <a href={item.href} className={linkClass}>
                            <span className="nav-link-text">{label}</span>
                          </a>
                        ) : (
                          <Link href={item.href} className={linkClass}>
                            <span className="nav-link-text">{label}</span>
                          </Link>
                        )}
                      </li>
                    );
                  }

                  const { dropdown } = item;
                  const isOpen = openDropdown === item.id;

                  return (
                    <li
                      key={item.id}
                      className={`dropdown flex items-center gap-1 ${isOpen ? 'active' : ''}`}
                      onMouseEnter={() => prefetchDropdown(dropdown, item.id)}
                    >
                      {divider}
                      <div
                        className="nav-link relative z-[2] inline-flex items-center gap-0.5 whitespace-nowrap rounded-md px-2 py-2 font-sans text-[0.9375rem] font-normal !text-oasis-green-700"
                        aria-haspopup="true"
                      >
                        <Link
                          href={item.href}
                          prefetch={item.prefetchTop !== false}
                          className="inline-flex items-center rounded-md no-underline !text-oasis-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-oasis-green-700 focus-visible:ring-offset-2"
                        >
                          <span className="nav-link-text">{label}</span>
                        </Link>
                        <button
                          type="button"
                          className="dropdown-icon-button"
                          onClick={(e) => toggleDropdown(item.id, e)}
                          aria-label={`Toggle ${label} menu`}
                          aria-expanded={isOpen}
                        >
                          <ChevronDownIcon />
                        </button>
                      </div>
                      <div className="dropdown-overlay" aria-hidden="true" />
                      <div
                        className={`dropdown-content ${dropdown.panelClassName || ''}`.trim()}
                        style={{
                          width: dropdown.panelWidth,
                          gridTemplateColumns: dropdown.gridTemplateColumns,
                        }}
                      >
                        {dropdown.sections.map((section, idx) => (
                          <NavDropdownPanelSection
                            key={section.type === 'promo' ? `promo-${item.id}` : section.heading}
                            section={section}
                            splitColumns={dropdown.splitColumns}
                            sectionIndex={idx}
                            onPick={closeDropdown}
                          />
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <LanguageMenu align="end" className="ml-1" />
              <span
                className="mx-3 h-5 w-px shrink-0 bg-[#3B2F1A]/20"
                aria-hidden
              />
            </nav>

            <div className="nav-buttons">
              <a
                href={isAppSignedIn ? exploreUrl : appUrl}
                className={ctaLoginClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRightOnRectangleIcon className="h-4 w-4 shrink-0" aria-hidden />
                <span className="nav-link-text">
                  {isAppSignedIn ? t('nav.openApp') : t('nav.login')}
                </span>
              </a>
              <a
                href={exploreUrl}
                className={ctaSecondaryClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagnifyingGlassIcon className="h-4 w-4 shrink-0" aria-hidden />
                {t('nav.explore')}
              </a>
              <a
                href={appUrl}
                className={ctaPrimaryClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FolderPlusIcon className="h-4 w-4 shrink-0" aria-hidden />
                {t('nav.create')}
              </a>
            </div>

            <div className="nav-mobile-actions flex items-center gap-2 lg:hidden">
              <LanguageMenu align="end" />
              <a
                href={isAppSignedIn ? exploreUrl : appUrl}
                className="nav-mobile-login no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isAppSignedIn ? t('nav.openApp') : t('nav.login')}
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="nav-hamburger-toggle inline-flex items-center justify-center"
                aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="menu-links">
            <div className="mb-4 flex flex-col gap-2">
              <a
                href={exploreUrl}
                className={`${mobileCtaSecondaryClass} w-full justify-center`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
              >
                <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                {t('nav.exploreLong')}
              </a>
              <a
                href={appUrl}
                className={`${mobileCtaPrimaryClass} w-full justify-center`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
              >
                <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                {t('nav.create')}
              </a>
            </div>

            {mobileNavSections.map((section) => (
              <div key={section.heading} className="mb-4">
                <p className="mb-2 px-1 text-xs font-bold uppercase tracking-wider text-[#8A6622]">
                  {section.heading}
                </p>
                {section.links.map((row) => (
                  <a
                    key={`${section.heading}-${row.href}-${row.label}`}
                    href={row.href}
                    className="mobile-link no-underline"
                    onClick={closeMobile}
                    {...(row.external || row.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {row.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
