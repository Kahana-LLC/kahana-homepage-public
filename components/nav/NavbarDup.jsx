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
import { APP_URL, EXPLORE_URL, desktopNavItems, mobileNavRows } from './navConfig';
import KahanaWordmark from '../brand/KahanaWordmark';
import LanguageMenu from '../brand/LanguageMenu';
import { withAppLanguageParam } from '../../lib/contentLanguage';
import { readAuthHintCookie } from '../../lib/authHint';
import { useMarketingI18n } from '../../contexts/MarketingI18n';

const MD_BREAKPOINT = 1024;

const NAV_LABEL_KEYS = {
  help: 'nav.help',
  support: 'nav.support',
  contact: 'nav.contact',
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
        if (link.href && link.prefetch !== false) hrefs.push(link.href);
      }
    }
  }
  return hrefs;
}

function NavDropdownPanelSection({ section, splitColumns, sectionIndex, onPick }) {
  const promoSrc = useMemo(() => {
    if (section.type !== 'promo' || !section.imagePath) return null;
    return getCloudinaryImageUrl(section.imagePath, {
      width: section.imageWidth,
      height: section.imageHeight,
      quality: 'auto:good',
    });
  }, [section.type, section.imagePath, section.imageWidth, section.imageHeight]);

  if (section.type === 'promo') {
    const src = promoSrc;
    return (
      <div className="dropdown-section">
        <Link
          href={section.href}
          prefetch={section.prefetch}
          className="block rounded-lg border border-brand-link/20 bg-gradient-to-r from-brand-link/5 to-oasis-blue-300/5 p-4 no-underline transition-all hover:border-brand-link/30 hover:from-brand-link/10 hover:to-oasis-blue-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-oasis-green-700 focus-visible:ring-offset-2"
          onClick={onPick}
        >
          <div className="mb-3 h-32 w-full overflow-hidden rounded-lg">
            <img
              src={src}
              alt={section.title}
              className="h-full w-full object-cover"
              width={section.imageWidth}
              height={section.imageHeight}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
          <div className="text-sm font-semibold leading-tight text-gray-900">{section.title}</div>
        </Link>
      </div>
    );
  }

  const dividerClass = splitColumns && sectionIndex === 0 ? 'nav-dropdown-section--split-first' : '';

  return (
    <div className={`dropdown-section ${dividerClass}`}>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-oasis-green-900">{section.heading}</h3>
      <div className="flex flex-col space-y-4">
        {section.links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={item.prefetch !== false}
            className="dropdown-link"
            onClick={onPick}
          >
            {item.label}
          </Link>
        ))}
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
    () => withAppLanguageParam(APP_URL, langPreference),
    [langPreference],
  );
  const exploreUrl = useMemo(
    () => withAppLanguageParam(EXPLORE_URL, langPreference),
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

      <nav className="nav-shell fixed left-0 top-0 z-50 h-16 w-full bg-white transition-all duration-300">
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
            background: #fff;
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
            background-color: white;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
            border-radius: 12px;
            padding: 24px 20px;
            margin-top: -4px;
            transition: all 0.15s ease;
            display: grid;
            gap: 40px;
            pointer-events: none;
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
            color: var(--nav-link-color, #617500) !important;
            transition: transform 0.2s ease, color 0.2s ease;
            pointer-events: auto;
          }
          .dropdown-icon-button:focus {
            outline: none;
          }
          .dropdown-icon-button:focus-visible {
            box-shadow: 0 0 0 2px #fff, 0 0 0 4px #617500;
            border-radius: 4px;
          }
          .nav-link:focus-visible,
          .dropdown-link:focus-visible {
            box-shadow: 0 0 0 2px #fff, 0 0 0 4px #617500;
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
          }
          .dropdown-link {
            display: block;
            color: var(--nav-link-color, #617500) !important;
            text-decoration: none !important;
            font-weight: 500 !important;
            font-size: 1rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            letter-spacing: -0.01em;
            line-height: 1.5;
            padding: 8px 12px;
            margin: 0 -12px;
            border-radius: 8px;
            -webkit-tap-highlight-color: transparent;
            background-color: transparent;
          }
          .dropdown-link:hover {
            background-color: rgba(97, 117, 0, 0.06);
          }
          .dropdown-link + .dropdown-link {
            margin-top: 1rem;
          }
          .nav-dropdown-section--split-first {
            position: relative;
          }
          .nav-dropdown-section--split-first::after {
            content: '';
            position: absolute;
            top: 0;
            right: -20px;
            width: 1px;
            height: 100%;
            background: #f0f0f0;
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
          .mobile-link {
            color: #617500 !important;
            box-sizing: border-box !important;
            transition: background-color 0.2s ease;
            padding: 1rem 1.25rem;
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
          .mobile-link:hover {
            background-color: #d0ede6;
            color: #617500 !important;
          }
          .mobile-link:focus-visible {
            box-shadow: 0 0 0 2px #fff, 0 0 0 4px #617500;
          }
        `}</style>

        <div className="nav-content mx-auto flex h-full max-w-[1280px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
          <div className="nav-brand flex shrink-0 items-center">
            <KahanaWordmark size={28} />
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <nav className="hidden items-center lg:flex" aria-label={t('nav.mainNav')}>
              <ul className="nav-links !mr-0 flex items-center gap-1">
                {desktopNavItems.map((item) => {
                  if (!item.dropdown) {
                    const linkClass =
                      'nav-link relative z-[2] inline-flex items-center gap-0.5 whitespace-nowrap rounded-md px-2 py-2 font-sans text-[0.9375rem] font-normal !text-oasis-green-700 no-underline focus:outline-none';
                    const label = NAV_LABEL_KEYS[item.id] ? t(NAV_LABEL_KEYS[item.id]) : item.label;
                    return (
                      <li key={item.id}>
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
                      className={`dropdown ${isOpen ? 'active' : ''}`}
                      onMouseEnter={() => prefetchDropdown(dropdown, item.id)}
                    >
                      <div
                        className="nav-link relative z-[2] inline-flex items-center gap-0.5 whitespace-nowrap rounded-md px-2 py-2 font-sans text-[0.9375rem] font-normal !text-oasis-green-700"
                        aria-haspopup="true"
                      >
                        <Link
                          href={item.href}
                          prefetch={item.prefetchTop !== false}
                          className="inline-flex items-center rounded-md no-underline !text-oasis-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-oasis-green-700 focus-visible:ring-offset-2"
                        >
                          <span className="nav-link-text">{item.label}</span>
                        </Link>
                        <button
                          type="button"
                          className="dropdown-icon-button"
                          onClick={(e) => toggleDropdown(item.id, e)}
                          aria-label={`Toggle ${item.label} menu`}
                          aria-expanded={isOpen}
                        >
                          <ChevronDownIcon />
                        </button>
                      </div>
                      <div className="dropdown-overlay" aria-hidden="true" />
                      <div
                        className="dropdown-content"
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
                className="mx-3 h-5 w-px shrink-0 bg-[#313A00]/20"
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
                {t('nav.explore')}
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

            {mobileNavRows.map((row) => {
              const labelKey =
                row.label === 'Help'
                  ? 'nav.help'
                  : row.label === 'Support'
                    ? 'nav.support'
                    : row.label === 'Contact'
                      ? 'nav.contact'
                      : null;
              const label = labelKey ? t(labelKey) : row.label;
              return row.external || row.href.startsWith('http') ? (
                <a
                  key={row.href}
                  href={row.href}
                  className="mobile-link no-underline"
                  onClick={closeMobile}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={row.href}
                  href={row.href}
                  prefetch={row.prefetch !== false}
                  className="mobile-link no-underline"
                  onClick={closeMobile}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
