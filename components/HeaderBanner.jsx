export default function HeaderBanner() {
  return (
    <div className="relative bg-gradient-to-l from-green-200 via-[#038270] to-[#338161]">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="text-base text-white">
            {/* <span className="md:hidden">We announced a new product!</span> */}
            {/* <span>Check out today&apos;s</span> */}
            <span className="block sm:ml-2 sm:inline-block">
              <a
                href="https://app.kahana.co/signup"
                className="text-base text-white underline"
              >
                Sign up for free
                {/* <span aria-hidden="true"> &rarr;</span> */}
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

