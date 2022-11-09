import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// import backgroundImage from '../assets/images/background-features.jpg';
import collaborate from '../assets/images/collaborate.png';
import create from '../assets/images/create.png';
import monetize from '../assets/images/monetize.png';
import { Container } from './Container';

const features = [
  {
    title: 'Create',
    description:
      'Create digital products faster than ever. Bulk upload content and files into hubs. Organize with folders, subfolders, and smart links.',
    image: create,
  },
  {
    title: 'Monetize',
    description:
      'Money appears in your bank account like magic. Create a delightfully casual subscription flow. Connect through Stripe to receive payments.',
    image: monetize,
  },
  {
    title: 'Collaborate',
    description:
      'Engage with your audience more deeply. No need to create alone - invite and collaborate with other doers, creators, and experts.',
    image: collaborate,
  },
];

export default function ProductDemoSection() {
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className=" overflow-hidden  bg-gradient-to-l from-green-200 via-[#038270] to-[#338161] pt-20 pb-28 sm:py-32 "
    >
      {/* <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container>
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h1 className="py-4  bg-clip-text text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            A Platform Built by Creators for Creators
          </h1>
          <p className="mt-6 text-xl tracking-tight text-white">
            It’s a lonely world for creators - creators work too long and hard
            without seeing results. That’s why we created Kahana.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-[#338161] lg:text-white'
                              : 'text-white hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-white group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}
