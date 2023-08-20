import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import collaborate from '../assets/images/collaborate.webp';
import explore from '../assets/images/explore.webp';
import monetize from '../assets/images/monetize.webp';
import { Container } from './Container';

const features = [
  {
    title: 'Recurring Revenue',
    description:
      'Build dynamic hubs of all your best data, templates, insights, research, methodologies, and best practices. It\'s like charging for access to your firm\'s brain.',
    image: explore,
    link: '/product/recurring-revenue', // Add the link for Recurring Revenue
  },
  {
    title: 'Collaboration Tools',
    description:
      'Enable colleagues and experts across your organization to contribute and build hubs together.',
    image: monetize,
    link: '/product/collaboration-tools', // Add the link for Collaboration Tools
  },
  {
    title: 'Community Engagement',
    description:
      'Collaborate with customers to gather feedback and create an engaging environment where customers can connect with one another.',
    image: collaborate,
    link: '/product/community-engagement', // Add the link for Community Engagement
  },
];

export default function ProductDemoSection() {
  let [tabOrientation, setTabOrientation] = useState('vertical');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'horizontal' : 'vertical');
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
      className="overflow-hidden py-16 md:py-18"
    >
      <Container>
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none text-center">
          <h2 className="text-3xl font-bold mb-4 md:px-12 lg:px-24">
            Manage your recurring revenue streams, collaborate with your team, and gather customer feedback, all in one place.
          </h2>
        </div>
        {tabOrientation === 'vertical' ? (
          <div className="mt-16 space-y-12">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-6">
                <div className="max-w-[45rem] mx-auto">
                  <h2 className="text-2xl font-semibold text-black">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-lg text-black">
                    {feature.description}
                    <br /><br />
                    <a href={feature.link} className="underline" style={{ pointerEvents: 'auto' }}>
                      Learn more
                    </a>
                  </p>
                </div>
                <div className="max-w-[45rem] mx-auto">
                  <Image
                    className="w-full"
                    src={feature.image}
                    alt=""
                    priority
                    sizes="(min-width: 1024px) 45rem, (min-width: 640px) 100vw, 90vw"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Tab.Group
            as="div"
            className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
            vertical={tabOrientation === 'vertical'}
          >
            {({ selectedIndex }) => (
              <>
                <div className="-mx-4 flex overflow-hidden pb-4 sm:mx-0 sm:overflow-hidden sm:pb-0 lg:col-span-5">
                  <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                    {features.map((feature, featureIndex) => (
                      <div
                        key={feature.title}
                        className={clsx(
                          'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                          selectedIndex === featureIndex
                            ? 'bg-black lg:bg-black/10 lg:ring-1 lg:ring-inset lg:ring-black/10' // Change border color to black
                            : 'hover:bg-black/10 lg:hover:bg-black/5' // Change hover border color to black
                        )}
                      >
                        <h3>
                          <Tab
                            className={clsx(
                              'font-display text-lg focus:outline-none',
                              selectedIndex === featureIndex
                                ? 'text-[#338161] lg:text-black' // Change tab text color to black
                                : 'text-black hover:text-black lg:text-black' // Change tab hover text color to black
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
                              ? 'text-black' // Change description text color to black
                              : 'text-black group-hover:text-black' // Change description hover text color to black
                          )}
                        >
                          {feature.description}
                          <br /><br />
                          <a href={feature.link} className="underline" style={{ pointerEvents: 'auto' }}>
                            Learn more
                          </a>
                        </p>
                      </div>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels className="lg:col-span-7">
                  {features.map((feature) => (
                    <Tab.Panel key={feature.title} unmount={false}>
                      <div className="relative sm:px-6 lg:hidden">
                        <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-black/10 ring-1 ring-inset ring-black/10 sm:inset-x-0 sm:rounded-t-xl" />
                        <p className="relative mx-auto max-w-2xl text-base text-black sm:text-center">
                          {feature.description}
                          <br /><br />
                          <a href={feature.link} className="underline" style={{ pointerEvents: 'auto' }}>
                            Learn more
                          </a>
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
        )}
      </Container>
    </section>
  );
}
