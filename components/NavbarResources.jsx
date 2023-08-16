import Image from 'next/image';
import Link from 'next/link';

//images
import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

function Navbar() {
  return (
    <>
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
            </div>
            <div className="ml-10 space-x-4 ">
              <a
                href="https://kahana.co?utm_source=resources"
                className="inline-block justify-center rounded-md border border-transparent bg-[#038270] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#024324] drop-shadow-2xl"
              >
                Learn more
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
