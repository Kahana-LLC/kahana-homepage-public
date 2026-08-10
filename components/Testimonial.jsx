import Image from 'next/image';

import { Container } from './Container';
import { GridPattern } from './GridPattern';
import { StarRating } from './StarRating';

export function Testimonial({ id, author, children }) {
  return (
    <aside
      id={id}
      aria-label={`Testimonial from ${author.name}`}
      className="relative bg-slate-100 py-16 sm:py-32"
    >
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <Container size="xs" className="relative">
        <h1 className="py-4  bg-clip-text text-transparent bg-gradient-to-r from-[#024324] to-teal-300 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-center">
          Creators and Experts Love Kahana
        </h1>
        <figure>
          <blockquote className="mt-10 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center">
            {children}
            <div className="flex text-slate-900 sm:justify-center mt-3">
              <StarRating />
            </div>
          </blockquote>
          <figcaption className="mt-5 flex items-center sm:justify-center">
            <div className="overflow-hidden rounded-full bg-slate-200">
              <Image
                className="h-12 w-12 object-cover"
                src={author.image}
                alt={`Profile picture of ${author.name}`}
                width={48}
                height={48}
              />
            </div>
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                {author.name}
              </div>
              <div className="mt-1 text-sm text-slate-600">{author.role}</div>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  );
}
