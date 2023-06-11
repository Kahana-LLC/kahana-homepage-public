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
  const [isNavOpen, setIsNavOpen] = useState(false);

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
                w
                alt="navbar-logo"
              />
            </Link>
            <nav>
              <section className="MOBILE-MENU flex lg:hidden">
                <div
                  className={`HAMBURGER-ICON ${isNavOpen ? 'open' : ''}`}
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <span className="block h-0.5 w-5 bg-gray-600"></span>
                  <span className="block h-0.5 w-5 bg-gray-600"></span>
                  <span className="block h-0.5 w-5 bg-gray-600"></span>
                </div>

                <div className={`MENU-LINK-MOBILE ${isNavOpen ? 'open' : ''}`}>
                  {navigationAll.map((link) => (
                    <Link
                      href={link.href}
                      key={link.name}
                      className="text-base font-small text-gray-600 hover:text-gray-800"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </section>

              <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                {navigationAll.map((link) => (
                  <Link
                    href={link.href}
                    key={link.name}
                    className="text-base font-small text-gray-600 hover:text-gray-800"
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </nav>
      </header>
      <style jsx>{`
        .HAMBURGER-ICON {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          height: 18px;
        }

        .HAMBURGER-ICON.open span:first-child {
          transform: rotate(45deg) translate(1px, 1px);
        }

        .HAMBURGER-ICON.open span:nth-child(2) {
          opacity: 0;
        }

        .HAMBURGER-ICON.open span:last-child {
          transform: rotate(-45deg) translate(0, -1px);
        }

        .MOBILE-MENU {
          position: relative;
        }

        .MENU-LINK-MOBILE {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 1rem;
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }

        .MENU-LINK-MOBILE.open {
          display: block;
        }

        .DESKTOP-MENU {
          flex-grow: 1;
          justify-content: flex-end;
        }
      `}</style>
    </>
  );
}
