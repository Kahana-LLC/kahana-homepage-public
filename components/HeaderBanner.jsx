export default function HeaderBanner() {
  return (
    <div className="relative">
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
      <div className="absolute inset-x-0 bottom-0 h-1">
        <div className="h-full bg-gradient-to-r from-green-900 to-green-300"></div>
      </div>
    </div>
  );
}

