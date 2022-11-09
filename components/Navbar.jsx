import Image from 'next/image';
import Link from 'next/link';

//images
import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

//navigation items
const navigation = [
  { name: 'Explore', href: 'explore' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Blog', href: ' https:/blog.kahana.co' },
];

function Navbar() {
  return (
    <header className="backdrop-blur-sm bg-white/90 bg-white  mx-auto px-2">
      <nav>
        <div className="flex w-full items-center justify-between border-b  py-2 px-10">
          <div className="flex items-center">
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
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-base font-small text-gray-600  hover:text-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {/* <div className="ml-10 space-x-4 ">
            <a
              href="/login"
              className="inline-block justify-center rounded-md border border-transparent bg-[#038270] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#024324] drop-shadow-2xl"
            >
              Log in
            </a>
          </div> */}
        </div>
        {/* mobile menu */}

        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-small text-slate-600  hover:text-slate-900"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
