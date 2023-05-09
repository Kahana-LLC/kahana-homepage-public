import Image from 'next/image';
import Link from 'next/link';

//images
import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';
import HeaderBanner from './HeaderBanner';

import { useState } from "react"; // import state

//navigation items
const navigation = [
  { name: 'Featured Hubs', href: 'explore' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Blog', href: ' https://blog.kahana.co' },
  { name: 'Solutions', href: 'solutions' },
];

const navigation1 = [
  { name: 'Request a demo', href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx' },
  { name: 'Log in', href: 'https://app.kahana.co/login' },
];

const navigationAll = [
  { name: 'Featured Hubs', href: 'explore' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Blog', href: ' https://blog.kahana.co' },
  { name: 'Solutions', href: 'solutions' },
  { name: 'Request a demo', href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx' },
  { name: 'Log in', href: 'https://app.kahana.co/login' },
];



export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
    <HeaderBanner />
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      {/* <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a> */}
      <Link href="/" aria-label="Home">
         <span className="sr-only"> Company</span>
         <Image
            className="h-10 "
            src={whiteKahanaLogo}
            w
            // width={10}
            // height={20} 
            alt="navbar-logo"
         />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> {/* toggle class based on isNavOpen state */}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
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
            {/* <li><a href="explore">Featured Hubs</a></li>
                <li><a href="about">About</a></li>
                <li><a href="pricing">Pricing</a></li>
                <li><a href="https://blog.kahana.co">Blog</a></li>
                <li><a href="solutions">Solutions</a></li>
                <li><a href="https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx">Request a demo</a></li>
                <li><a href="https://app.kahana.co/login">Log in</a></li>*/}
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              {navigationAll.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-xs text-slate-600  hover:text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
              {/* <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/explore">Featured Hubs</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://blog.kahana.co">Blog</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/solutions">Solutions</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx">Request a demo</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://app.kahana.co/login">Log in</a>
              </li> */}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          {navigationAll.map((link) => (
             <Link
                href={link.href}
                key={link.name}
                className="text-xs text-slate-600  hover:text-slate-900"
              >
                {link.name}
              </Link>
           ))}
          {/* <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/explore">Featured Hubs</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/about">About</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/pricing">Pricing</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="https://blog.kahana.co">Blog</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/solutions">Solutions</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx">Request a demo</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="https://app.kahana.co/login">Log in</a>
          </li> */}
        </ul>
      </nav>
      <style>{`
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
    `}</style>
    </div>
    <>
  );
}

//function Navbar() {
  //return (
    //<>
      //<HeaderBanner />
      //<header className="backdrop-blur-sm bg-white/90 bg-white  mx-auto px-2">
        //<nav>
          //<div className="flex w-full items-center justify-between border-b  py-2 px-10">
            //<div className="flex items-center">
              //<Link href="/" aria-label="Home">
                //<span className="sr-only"> Company</span>
                //<Image
                  //className="h-10 "
                  //src={whiteKahanaLogo}
                  //w
                  // width={10}
                  // height={20}
                  //alt="navbar-logo"
                ///>
              //</Link>
              //<div className="ml-10 hidden space-x-8 lg:block">
                //{navigation.map((link) => (
                  //<Link
                    //href={link.href}
                    //key={link.name}
                    //className="text-base font-small text-gray-600  hover:text-gray-800"
                  //>
                    //{link.name}
                  //</Link>
                //))}
              //</div>
            //</div>
            //<div className="ml-10 space-x-4 ">
              //<a
                //href="https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx"
                //className="inline-block justify-center rounded-md border border-transparent bg-[#038270] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#024324] drop-shadow-2xl"
              //>
                //Request a demo
              //</a>
              //<a
                //href="https://app.kahana.co/login"
                //className="inline-block justify-center rounded-md border border-transparent bg-[#038270] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#024324] drop-shadow-2xl"
              //>
                //Log in
              //</a>
            //</div>
          //</div>
          {/* mobile menu */}

        //<div className="flex flex-nowrap justify-start space-x-2 py-4 lg:hidden">
            //{navigation.map((link) => (
              //<Link
                //href={link.href}
                //key={link.name}
                //className="text-xs text-slate-600  hover:text-slate-900"
              //>
                //{link.name}
              //</Link>
            //))}
          //</div>
        //</nav>
      //</header>
    //</>
  //);
//}

// export default Navbar;
}
