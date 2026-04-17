import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../../assets/kahana_logo_transparent.svg';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';
import { desktopNavItems, mobileNavRows } from './navConfig';

const MD_BREAKPOINT = 768;

function AppleLogoIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

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
const ctaScheduleClass =
  'btn-secondary btn-nav no-underline hover:no-underline focus:no-underline';

const ctaDownloadClass =
  'btn-primary btn-nav no-underline hover:no-underline focus:no-underline';

function NavDropdownPanelSection({ section, splitColumns, sectionIndex, onPick }) {
  if (section.type === 'promo') {
    const src = getCloudinaryImageUrl(section.imagePath, {
      width: section.imageWidth,
      height: section.imageHeight,
      quality: 'auto:good',
    });
    return (
      <div className="dropdown-section">
        <Link
          href={section.href}
          prefetch={section.prefetch}
          className="block rounded-lg border border-[#66C2BE]/20 bg-gradient-to-r from-[#66C2BE]/5 to-[#8CB7D0]/5 p-4 no-underline transition-all hover:border-[#66C2BE]/30 hover:from-[#66C2BE]/10 hover:to-[#8CB7D0]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#617500] focus-visible:ring-offset-2"
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
      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#026400]">{section.heading}</h3>
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);
  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

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
          .nav-content > a:first-child {
            margin-left: 1.45rem !important;
            padding-left: 0 !important;
            margin-right: 0;
            padding-right: 0;
            display: flex;
            align-items: center;
            line-height: 0;
            flex-shrink: 0;
          }
          @media (min-width: 640px) {
            .nav-content > a:first-child {
              margin-left: 1.45rem !important;
            }
          }
          @media (min-width: 1024px) {
            .nav-content > a:first-child {
              margin-left: 1.75rem !important;
            }
          }
          .nav-content > a:first-child img {
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
          @media (min-width: 768px) {
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
          <Link
            href="/"
            className="flex shrink-0 items-center gap-1 no-underline"
            style={{ lineHeight: 0 }}
          >
            <Image
              src={whiteKahanaLogo}
              alt="Kahana"
              width={200}
              height={56}
              className="h-14 w-auto shrink-0 object-contain object-left"
              sizes="(max-width: 768px) 160px, 200px"
              priority
            />
            <span
              className="inline-flex shrink-0 translate-y-px items-center rounded-md bg-neutral-100 px-1.5 py-px text-[0.625rem] font-medium uppercase tracking-wide text-neutral-500"
              title="Public beta"
            >
              BETA
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 justify-center md:flex" aria-label="Main navigation">
          <ul className="nav-links">
            {desktopNavItems.map((item) => {
              if (!item.dropdown) {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="nav-link relative z-[2] inline-flex items-center gap-0.5 whitespace-nowrap rounded-md px-2 py-2 font-sans text-[0.9375rem] font-normal !text-[#617500] no-underline focus:outline-none"
                    >
                      <span className="nav-link-text">{item.label}</span>
                    </Link>
                  </li>
                );
              }

              const { dropdown } = item;
              const isOpen = openDropdown === item.id;

              return (
                <li key={item.id} className={`dropdown ${isOpen ? 'active' : ''}`}>
                  <Link
                    href={item.href}
                    prefetch={item.prefetchTop !== false}
                    className="nav-link relative z-[2] inline-flex items-center gap-0.5 whitespace-nowrap rounded-md px-2 py-2 font-sans text-[0.9375rem] font-normal !text-[#617500] no-underline focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                  >
                    <span className="nav-link-text">{item.label}</span>
                    <button
                      type="button"
                      className="dropdown-icon-button"
                      onClick={(e) => toggleDropdown(item.id, e)}
                      aria-label={`Toggle ${item.label} menu`}
                      aria-expanded={isOpen}
                    >
                      <ChevronDownIcon />
                    </button>
                  </Link>
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
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <div className="nav-buttons">
              <Link href="/schedule-demo" className={ctaScheduleClass}>
                Schedule Demo
              </Link>
              <Link
                href="/oasis-pricing"
                className={ctaDownloadClass}
                aria-label="Download Oasis for Mac"
              >
                <AppleLogoIcon className="h-3.5 w-3.5 shrink-0" />
                Download for Mac
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="nav-hamburger-toggle inline-flex items-center justify-center md:hidden"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="menu-links">
            <div className="mb-4 flex flex-col gap-2">
              <Link
                href="/schedule-demo"
                className={`${ctaScheduleClass} w-full justify-center`}
                onClick={closeMobile}
              >
                Schedule Demo
              </Link>
              <Link
                href="/oasis-pricing"
                className={`${ctaDownloadClass} nav-mobile-download-cta w-full justify-center`}
                aria-label="Download Oasis for Mac"
                onClick={closeMobile}
              >
                <AppleLogoIcon className="h-3.5 w-3.5 shrink-0" />
                Download for Mac
              </Link>
            </div>

            {mobileNavRows.map((row) => {
              if (row.variant === 'buyer-guide') {
                const src = getCloudinaryImageUrl(row.imagePath, { width: 48, height: 48, quality: 'auto:good' });
                return (
                  <Link
                    key={row.href}
                    href={row.href}
                    prefetch={row.prefetch}
                    className="mobile-link flex items-center space-x-3 bg-gradient-to-r from-[#66C2BE]/5 to-[#8CB7D0]/5 p-3 no-underline hover:from-[#66C2BE]/10 hover:to-[#8CB7D0]/10"
                    onClick={closeMobile}
                  >
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={src}
                        alt=""
                        className="h-full w-full object-cover"
                        width={48}
                        height={48}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{row.label}</div>
                      <div className="mt-1 text-xs text-[#4A5745]">{row.subtitle}</div>
                    </div>
                  </Link>
                );
              }
              return (
                <Link key={row.href} href={row.href} className="mobile-link no-underline" onClick={closeMobile}>
                  {row.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
