export default function AboutCard() {
  return (
    <div className="bg-white">
      <main>
        {/* Testimonial/stats section */}
        <div className=" mt-20">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div className=" inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
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
                {/* Testimonial card*/}
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-2xl">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1613294326794-e7c74fe886e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                    alt="user-image"
                  />
                  <div className="absolute inset-0 bg-green-200 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-700 via-green-600 opacity-90" />
                  <div className="relative px-8">
                    {/* <div>
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                        alt="Workcation"
                      />
                    </div> */}
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
                          On average, it takes 6.5 months for creators to earn
                          their first dollar - this is WAY too long, and it
                          breaks our hearts. At Kahana, we want to lower the
                          barrier to entry for people to access the benefits of
                          the creator economy. Kahana helps you monetize faster
                          by allowing you to quickly turn your best content,
                          files, and information into a digital product.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base  text-white">
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
                  On a mission to empower creators
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                    Kahana was founded in 2019 by Jonathan Gans and Adam
                    Kershner. Jonathan and Adam operate as Chief Executive
                    Officer (CEO) and Chief Product Officer (Head of Product),
                    respectively, as of July 2019. Jonathan and Adam originally
                    met at Duke University in 2014, where they were 1st-year
                    roommates. In February 2020, Jonathan and Adam met Eugene, a
                    developer, through CoFoundersLab.com and grabbed dinner in
                    NYC. Eugene then became the technical cofounder and Chief
                    Technology Officer (CTO) of Kahana. The original inspiration
                    and idea for Kahana came, in part, from GitHub, and how it
                    allowed developers to discover and collaborate with
                    like-minded developers, fork off of each other&rsquo;s work,
                    and avoid duplication. Kahana&rsquo;s founding team wanted
                    to solve a similar problem inherent to the process of
                    collaboration and content creation across the Internet,
                    specifically for creators.
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
