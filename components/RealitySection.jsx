/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const metrics = [
  {
    id: 1,
    stat: '6.5',
    emphasis: 'the average number of months',
    rest: 'it takes creators to earn their first dollar',
  },
  {
    id: 2,
    stat: '59% ',
    emphasis: 'of beginner ',
    rest: "creators haven't monetized yet.",
  },
  {
    id: 3,
    stat: '35%',
    emphasis: 'of beginner creators',
    rest: 'have monetized but earn below what can be considered "livable" income.',
  },
  {
    id: 4,
    stat: '6% ',
    emphasis: 'of beginner creators ',
    rest: 'have earned greater than $10K.',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function RealitySection() {
  return (
    <div className="bg-white">
      <main>
        <div className="relative bg-slate-600">
          <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://images.unsplash.com/photo-1517669375942-946a1f02d705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2546&q=80"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-600 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-base font-semibold">
                <span className="text-white bg-clip-text ">Reality</span>
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                Creators struggle to monetize
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Regardless of follower base size, monetization is a challenge
                for many creators. Fee events are typically tied to product
                launches that can take months to create.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{' '}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-white">
          <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent">
                Get in touch or create an account.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100"
              >
                Get started
              </a>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
