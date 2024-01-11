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
                          My little sister has been a creator since she was 9 and has
                          always known she wants to be a creator full-time. As we grew up,
                          I watched her dedicate years of her life to creating content 
                          but struggle to monetize her passion. And she&apos;s not alone: 
                          millions of creators have similar experiences. We want to build 
                          a world where anyone can create a sustainable living doing what 
                          they love.
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
                  Creators, you are the future 💚
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                    Over the last several years, we have experienced a fundamental shift in society:
                    more and more people want to become creators and escape the traditional 9-5 path.
                    In fact, according to a study by Adobe, nearly 1/4th of the global population is  
                    <i> already</i> contributing to the creator economy. <br/><br/> But the sad truth is 
                    that the creator economy is broken, as the vast majority of creators struggle to earn
                    consistent living wages. In the last 12 months, 72% of creators earned 
                    less than $500, and 94% earned less than $10K. <br/><br/> You deserve to live in a world 
                    where you can make a sustainable living doing what you love. And that&apos;s exactly why
                    we are building Kahana: to power your knowledge business and help you gain the financial
                    independence you need to continue living your dreams.
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
