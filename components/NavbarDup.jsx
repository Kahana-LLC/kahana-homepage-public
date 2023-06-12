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
  {
    name: 'Request a demo',
    href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=landing_page_header',
  },
  { name: 'Log in', href: 'https://app.kahana.co/login' },
];

export default function NavbarDup() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
              <section className="MOBILE-MENU absolute top-14 lg:hidden">
                <div
                  className={`HAMBURGER-ICON ${isNavOpen ? 'open' : ''}`}
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <span className="block h-0.5 w-5 bg-gray-600 mb-1"></span>
                  <span className="block h-0.5 w-5 bg-gray-600 mb-1"></span>
                  <span className="block h-0.5 w-5 bg-gray-600"></span>
                </div>

                {isNavOpen && (
                  <div className="MENU-LINK-MOBILE absolute right-0 mt-2 w-72 bg-white rounded shadow-lg">
                    <ul className="MENU-LINKS">
                      {navigationAll.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-base font-semibold text-gray-900 py-2 px-4 block hover:bg-gray-100"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                {navigationAll.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base font-small text-gray-600 hover:text-gray-800"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <style>{`
            .HAMBURGER-ICON {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              cursor: pointer;
              height: 20px;
              width: 20px;
            }

            .HAMBURGER-ICON.open span:nth-child(1) {
              transform: rotate(-45deg) translate(-1px, 1px);
            }

            .HAMBURGER-ICON.open span:nth-child(2) {
              opacity: 0;
            }

            .HAMBURGER-ICON.open span:last-child {
              transform: rotate(45deg) translate(-1px, -1px);
            }

            .MOBILE-MENU {
              position: relative;
            }

            .MENU-LINK-MOBILE {
              display: block;
              padding: 1rem;
              max-width: calc(100vw - 2rem);
            }

            .MENU-LINKS {
              list-style-type: none;
              padding: 0;
              margin: 0;
            }

            .MENU-LINKS li:not(:last-child) {
              margin-bottom: 0.5rem;
            }

            .MENU-LINKS a {
              display: block;
              font-size: 16px;
              color: #4b5563;
              transition: color 0.2s;
            }

            .MENU-LINKS a:hover {
              color: #1f2937;
            }
          `}</style>
        </nav>
      </header>
    </>
  );
}


