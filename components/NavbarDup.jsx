import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

//images
import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';
import HeaderBanner from './HeaderBanner';

//navigation items
const navigation = [
  { name: 'Featured Hubs', href: 'explore' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Blog', href: ' https://blog.kahana.co' },
  { name: 'Solutions', href: 'solutions' },
];

const navigation1 = [
  { name: 'Request a demo', href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=landing_page_header' },
  { name: 'Log in', href: 'https://app.kahana.co/login' },
];

const navigationAll = [
  { name: 'Featured Hubs', href: 'explore' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Blog', href: ' https://blog.kahana.co' },
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
                alt="navbar-logo"
              />
            </Link>

            <div className="MOBILE-MENU lg:hidden">
              <button
                className="hamburger-icon"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>

              {isNavOpen && (
                <div className="mobile-menu">
                  <button
                    className="close-icon"
                    onClick={() => setIsNavOpen(false)}
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
                  </button>
                  <ul className="menu-links">
                    {navigationAll.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href}>
                          <a className="text-base font-small text-gray-600 hover:text-gray-800">
                            {link.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              {navigationAll.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <a className="text-base font-small text-gray-600 hover:text-gray-800">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <style>{`
        .hamburger-icon {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .line {
          width: 100%;
          height: 2px;
          background-color: #333;
        }

        .close-icon {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: #fff;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .menu-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 40px;
          height: 100%;
        }

        .menu-links li {
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .MOBILE-MENU {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
