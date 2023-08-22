import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';
import HeaderBanner from './HeaderBanner';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Examples', href: '/explore' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Resources', href: '/resources' },
  { name: 'Blog', href: 'https://blog.kahana.co' },
  { name: 'Pricing', href: '/pricing' },
];

const navigation1 = [
  { name: 'Log in', href: 'https://app.kahana.co/login', className: 'login-button' }
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
              <Image
                className="h-10"
                src={whiteKahanaLogo}
                alt="navbar-logo"
              />
            </Link>

            <section className="MOBILE-MENU relative flex lg:hidden">
              <div className="MOBILE-MENU-OVERLAY fixed top-0 left-0 w-full h-screen bg-white z-10" style={{ display: isNavOpen ? 'flex' : 'none' }}>
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
                <div className="MOBILE-MENU-CONTENT flex flex-col items-start justify-start h-full p-8">
                  <ul className="MENU-LINK-MOBILE-OPEN space-y-4 text-lg">
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

              <div className="HAMBURGER-ICON space-y-2" onClick={toggleNavOpen} style={{ display: isNavOpen ? 'none' : 'block' }}>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
            </section>

            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base font-small text-gray-600 hover:text-gray-800">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://app.kahana.co/login" className="login-button">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <style jsx>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        .MOBILE-MENU-OVERLAY {
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 2rem;
        }

        .CROSS-ICON {
          cursor: pointer;
        }

        .MOBILE-MENU-CONTENT {
          width: 100%;
        }

        .MENU-LINK-MOBILE-OPEN {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .login-button {
          background-color: #00ff00; /* Green color */
          color: white; /* Text color */
          padding: 10px 20px; /* Add padding to make it look like a button */
          border: none; /* Remove the default button border */
          border-radius: 5px; /* Add some rounded corners */
          text-decoration: none; /* Remove underline */
        }
      
        .login-button:hover {
          background-color: #00cc00; /* Change color on hover */
        }
      `}</style>
    </>
  );
}
