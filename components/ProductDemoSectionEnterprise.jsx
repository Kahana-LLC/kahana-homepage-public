import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

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
        )}
      </Container>
    </section>
  );
}
