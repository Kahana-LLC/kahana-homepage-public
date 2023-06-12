import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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

const navigationAll = [...navigation, ...navigation1];

export default function NavbarDup() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavOpen = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const bodyScrollLock = () => {
      if (isNavOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    bodyScrollLock();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isNavOpen]);

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
            <div className="flex items-center space-x-4 md:space-x-6">
              <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                {navigationAll.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} passHref>
                      <a className="text-base font-small text-gray-600 hover:text-gray-800">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="md:hidden focus:outline-none"
                onClick={toggleNavOpen}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isNavOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isNavOpen && (
            <div className="md:hidden bg-white absolute inset-x-0 top-16 z-20">
              <div className="px-4 py-2 space-y-4">
                {navigationAll.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a className="block text-gray-700 hover:text-gray-900">{item.name}</a>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
