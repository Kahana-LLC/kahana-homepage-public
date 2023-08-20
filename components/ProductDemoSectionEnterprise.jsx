import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import collaborate from '../assets/images/collaborate.webp';
import explore from '../assets/images/explore.webp';
import monetize from '../assets/images/monetize.webp';
import { Container } from './Container';

const features = [
  {
    title: 'Share',
    description:
      'Flip a switch and get in front of viewers all over the world. Get exposure to folks who can’t wait for your stuff.',
    image: explore,
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
      'No need to create alone - build hubs together. Invite and collaborate with other creators and experts to make something special.',
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
      className="overflow-hidden bg-gradient-to-l from-green-200 via-[#038270] to-[#338161] pt-20 pb-28 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h1 className="py-4 bg-clip-text text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Built for Creators and Experts
          </h1>
          <p className="mt-6 text-xl tracking-tight text-white">
            You have years of valuable information sitting in your brain and resources gathering dust in a (digital)
            folder. Kahana helps you turn your collective knowledge into hubs that generate income for you.
          </p>
        </div>
        {tabOrientation === 'vertical' ? (
          <div className="mt-6">
            {features.map((feature, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="mt-4">
                  <Image src={feature.image} alt={feature.title} width={200} height={200} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 items-center gap-y-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={clsx(
                  'bg-white p-6 rounded-lg shadow-md',
                  index === 1 && 'md:mx-auto', // Center the middle card on medium screens
                )}
              >
                <Image src={feature.image} alt={feature.title} width={64} height={64} />
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
