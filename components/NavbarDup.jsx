import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

//images
import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';
import HeaderBanner from './HeaderBanner';

//navigation items
const navigationAll = [
  { name: 'Featured Hubs', href: 'explore' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Blog', href: 'https://blog.kahana.co' },
  { name: 'Solutions', href: 'solutions' },
  { name: 'FAQ', href: 'faq' },
  { name: 'Request a demo', href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=landing_page_header' },
  { name: 'Log in', href: 'https://app.kahana.co/login' },
];

export default function NavbarDup() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    document.body.style.overflow = isNavOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <HeaderBanner />
      <header className="backdrop-blur-sm bg-white/90 bg-white mx-auto px-2">
        <nav>
          <div className="flex items-center justify-between border-b py-2 px-10">
            <Link href="/" aria-label="Home">
              <span className="sr-only">Company</span>
              <Image className="h-10" src={whiteKahanaLogo} alt="navbar-logo" />
            </Link>
            <nav>
              <section className="MOBILE-MENU flex lg:hidden">
                <div
                  className="HAMBURGER-ICON space-y-2"
                  onClick={toggleNav} // toggle isNavOpen state on click
                >
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>

                {isNavOpen && (
                  <div className="MOBILE-MENU-OVERLAY fixed inset-0 bg-white z-10 overflow-hidden">
                    <div className="flex items-center justify-between py-2 px-10">
                      <div
                        className="HAMBURGER-ICON cursor-pointer"
                        onClick={toggleNav} // toggle isNavOpen state on click
                      >
                        <svg
                          className="h-8 w-8 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </div>
                    </div>
                    <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-start justify-start min-h-[calc(100vh-64px)]">
                      {navigationAll.map((link) => (
                        <Link href={link.href} key={link.name}>
                          <a className="block py-4 px-8 text-base font-small text-gray-600 hover:text-gray-800">
                            {link.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                {navigationAll.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-base font-small text-gray-600 hover:text-gray-800">{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </nav>
      </header>
      <style jsx>{`
        .MOBILE-MENU-OVERLAY {
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
        }

        @media (min-width: 1024px) {
          .MOBILE-MENU-OVERLAY {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
