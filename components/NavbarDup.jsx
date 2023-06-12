import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';
import HeaderBanner from './HeaderBanner';

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavOpen = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const bodyScrollLock = () => {
      if (isNavOpen) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'auto';
      }
    };

    bodyScrollLock();

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isNavOpen]);

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

  return (
    <>
      <div className="absolute w-full z-50">
        <HeaderBanner /> {/* Import and use the HeaderBanner component */}
      </div>
      <header className="backdrop-blur-sm bg-white/90 bg-white mx-auto px-2 relative z-50">
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
            {/* Desktop Menu */}
            <ul className="hidden space-x-8 lg:flex">
              {navigationAll.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base font-small text-gray-600 hover:text-gray-800">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={toggleNavOpen}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {isNavOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu Overlay */}
          {isNavOpen && (
            <div className="fixed inset-0 bg-white z-40">
              <div className="px-8 py-4 space-y-4 mt-20">
                {navigationAll.map((link) => (
                  <Link href={link.href} key={link.name} className="block text-xl font-medium text-gray-600 hover:text-gray-800">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;


