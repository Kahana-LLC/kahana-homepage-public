import Image from "next/image";

export default function AboutCard() {
  return (
    <div className="bg-white">
      <main>
        {/* Testimonial/stats section */}
        <div className="mt-20">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className="inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                {/* Testimonial card */}
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-2xl">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1613294326794-e7c74fe886e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="user-image"
                    width={1440}
                    height={1440}
                  />
                  <div className="absolute inset-0 bg-green-200 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-700 via-green-600 opacity-90" />
                  <div className="relative px-8">
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 h-12 w-12 -translate-x-3 -translate-y-2 transform text-green-900"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                        We're creating a thriving ecosystem that lowers the barrier for people to monetize their knowledge through digital products, where people can access the highest-quality knowledge on earth, curated by everyone from solopreneurs to S&P 500 companies. 
                        </p>
                      </div>
                      <footer className="mt-4">
                        <p className="text-base text-white">
                          Jonathan, Co-Founder & CEO at Kahana
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Fostering a Renaissance of Knowledge Sharing
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                  Right now, we’re in the midst of two massive global movements: an explosion of solopreneurs looking for ways to monetize their knowledge and the rise in popularity of digital products like courses and e-books. Sadly, most solopreneurs fail to capitalize. Why? 
                  </p>
                  <p className="text-lg">
                  First, building a product from scratch is time-consuming, and solopreneurs without teams behind them simply don’t have enough hours in the day. 
                  </p>
                  <p className="text-lg">
                  Second, they get screwed over by piracy: even those who manage to find time to build products end up losing revenue because people can easily steal, bootleg, and distribute their products. 
                  </p>
                  <p className="text-lg">
                  That's exactly why we built Kahana: a simple yet powerful platform that streamlines the process of monetizing knowledge through digital products.  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
