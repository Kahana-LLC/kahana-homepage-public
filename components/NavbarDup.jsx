import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';
import HeaderBanner from './HeaderBanner';

const navigation = [
  { name: 'Featured Hubs', href: 'explore' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Blog', href: 'https://blog.kahana.co' },
  { name: 'Solutions', href: 'solutions' },
];

const navigation1 = [
  { name: 'Request a demo', href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=landing_page_header' },
  { name: 'Log in', href: 'https://app.kahana.co/login' },
];

const navigationAll = [
  ...navigation,
  ...navigation1,
];

export default function NavbarDup() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavOpen = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <>
      <HeaderBanner />
      <header className="backdrop-blur-sm bg-white/90 bg-white mx-auto px-2">
        <nav>
          <div className="flex items-center justify-between border-b py-2 px-10">
            <Link href="/" aria-label="Home">
              <span className="sr-only">Company</span>
              <Image
                className="h-10"
                src={whiteKahanaLogo}
                alt="navbar-logo"
              />
            </Link>

            <section className="MOBILE-MENU flex lg:hidden">
              {isNavOpen ? (
                <div className="MOBILE-MENU-OVERLAY absolute top-0 left-0 w-full h-full bg-white z-10">
                  <div className="CROSS-ICON absolute top-4 right-4 px-2 py-2" onClick={toggleNavOpen}>
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
                  <div className="MOBILE-MENU-CONTENT flex flex-col items-center justify-center h-screen">
                    <ul className="MENU-LINK-MOBILE-OPEN space-y-4 text-2xl">
                      {navigationAll.map((link) => (
                        <li key={link.name}>
                          <Link href={link.href} className="text-gray-600 hover:text-gray-800">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="HAMBURGER-ICON space-y-2" onClick={toggleNavOpen}>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>
              )}
            </section>

            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              {navigationAll.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base font-small text-gray-600 hover:text-gray-800">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <style jsx>{`
        .MOBILE-MENU-OVERLAY {
          position: fixed;
          top: 48px;
          left: 0;
          width: 100%;
          height: calc(100vh - 48px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .CROSS-ICON {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }

        .MOBILE-MENU-CONTENT {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .MENU-LINK-MOBILE-OPEN {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }

        .MENU-LINK-MOBILE-OPEN li {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}


