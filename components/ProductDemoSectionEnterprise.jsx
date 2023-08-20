import Image from 'next/image';
import { Container } from './Container';

import collaborate from '../assets/images/collaborate.webp';
import explore from '../assets/images/explore.webp';
import monetize from '../assets/images/monetize.webp';

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
            You have years of valuable information sitting in your brain and resources gathering dust in a (digital) folder. Kahana helps you turn your collective knowledge into hubs that generate income for you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-white">
              <h2 className="text-3xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-lg mb-4">{feature.description}</p>
              <div className="w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl sm:w-auto">
                <Image
                  className="w-full"
                  src={feature.image}
                  alt=""
                  priority
                  sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
