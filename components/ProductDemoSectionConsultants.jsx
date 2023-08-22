import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import community from '../assets/images/collaborate.webp';
import collaboration from '../assets/images/explore.webp';
import revenue from '../assets/images/revenue.png';
import { Container } from './Container';

const features = [
  {
    title: 'Monetize Your Expertise',
    description:
      'Create a central repository of your best frameworks, methodologies, and resources. Package your expertise into valuable assets.',
    image: revenue,
    link: '/product/recurring-revenue', // Add the link for Recurring Revenue
  },
  {
    title: 'Collaborate with Peers & Colleagues',
    description:
      'Work seamlessly with other consultants on joint projects and ventures. Leverage collective intelligence to tackle complex challenges.',
    image: collaboration,
    link: '/product/collaboration-tools', // Add the link for Collaboration Tools
  },
  {
    title: 'Engage Your Clients',
    description:
      'Collaborate with clients to gather feedback and create an engaging environment where clients can connect with one another.',
    image: community,
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
            Scale your coaching business with powerful features
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
          <div className="mt-16 space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-6 flex flex-col lg:flex-row lg:space-x-6">
                <div className="max-w-[70rem] mx-auto rounded-lg bg-gray-100 p-4">
                  <div className="flex items-center space-x-6">
                    <div className="w-1/3 pl-4">
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
