// pages/404.js
import Link from "next/link";
import Footer from "../components/Footer";

export default function Custom404() {
  return (
    <>
      <main className="min-h-full bg-white px-6 py-24 sm:py-32 lg:px-8 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold" style={{ color: "#3B675E" }}>
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Oops! Page Not Found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We&apos;re really sorry, but it looks like we&apos;ve led you
              astray into the digital wilderness. The page you&apos;re looking
              for might have been recently removed or deleted. If you ended up
              here by typing an address into your browser, please check that the
              spelling and capitalization are correct. If you need to refresh
              with the correct spelling,{" "}
              <a
                href="#"
                onClick={() => window.location.reload()}
                className="text-[#3B675E] hover:underline"
              >
                click here to refresh
              </a>
              .
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/">
                <button className="rounded-md bg-[#3B675E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B675E]">
                  Take me home
                </button>
              </Link>
              <Link href="/sales">
                <button className="text-sm font-semibold text-gray-900">
                  Contact us <span aria-hidden="true">&rarr;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
