import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import create from '../assets/images/createHubs.webp';
import collaboration from '../assets/images/collab.webp';
import curate from '../assets/images/curate.webp';
import { Container } from './Container';

const features = [
  {
    title: 'Curate',
    description: (
      <>
        Curate <strong>all</strong> the different materials you&apos;re working with - docs, sheets, links, PDFs, videos, your choice - all in one space.
      </>
    ),
    image: curate,
  },
  {
    title: 'Collaborate',
    description:
      'Add anyone from your team to a Aura Library hub, choose their permission level, and work together with the exact same view of all relevant materials in a single window.',
    image: collaboration,
  },
  {
    title: 'Create',
    description:
      'Make as many hubs as you want for any topic or project, each with its own unique permissions & controls.',
    image: create,
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
      className="overflow-hidden py-6 md:py-8"
    >
      <Container>
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none text-center">
          <h2 className="text-3xl font-bold mb-4 md:px-12 lg:px-24">
            A blissful oasis with every document and piece of information your team needs on any given topic or project - all in a single tab.
          </h2>
        </div>
        {tabOrientation === 'vertical' ? (
          <div className="mt-16 space-y-12">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-6">
                <div className="max-w-[45rem] mx-auto">
                  <h2 className="text-2xl font-semibold text-oasis-green-900">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-lg text-oasis-green-900">
                    {feature.description}
                    <br /><br />
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
          <div className="mt-16 space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-6 flex flex-col lg:flex-row lg:space-x-6">
                <div className="max-w-[70rem] mx-auto rounded-lg bg-gray-100 p-4">
                  <div className="flex items-center space-x-6">
                    <div className="w-1/3 pl-4">
                      <h2 className="text-2xl font-semibold text-oasis-green-900">
                        {feature.title}
                      </h2>
                      <p className="mt-2 text-lg text-oasis-green-900">
                        {feature.description}
                        <br /><br />
                      </p>
                    </div>
                    <div className="w-2/3">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 70rem, (min-width: 640px) 100vw, 90vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}