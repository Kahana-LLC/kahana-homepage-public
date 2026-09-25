import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import FadeInSection from '../FadeInSection';
import { GLOBAL_READER_FLAGS } from '../../data/globalReaderFlags';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';

export default function LibraryMission() {
  const libraryHref = productHref('/library', 'library_mission');

  return (
    <section className="border-t border-[#E4D9C4] bg-[#F7F3EA] px-6 py-16 text-[#3B2F1A] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <FadeInSection>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            The Library needs to be built with your help
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5C4520]">
            Everyone has something unique to upload. People already come from 110+ countries and
            speak many languages. This is a place to create, learn, and research on a global scale.
          </p>
          <ul
            className="mt-8 flex max-w-xl flex-wrap gap-2"
            aria-label="A sample of countries readers already come from. Kahana reaches 110 or more."
          >
            {GLOBAL_READER_FLAGS.map(([name, flag]) => (
              <li key={name} title={name} aria-label={name} className="text-2xl leading-none">
                <span aria-hidden>{flag}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={libraryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
              onClick={() => trackButtonClick('library_mission_explore')}
            >
              <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
              Explore the Library
            </a>
            <Link href="/collabs" className="btn-secondary inline-flex items-center justify-center no-underline">
              Creator collabs
            </Link>
          </div>
          <p className="mt-4 text-base text-[#5C4520]">
            Read{' '}
            <Link href="/philosophy" className="text-[#8A6622] underline underline-offset-2">
              our philosophy
            </Link>{' '}
            and{' '}
            <Link
              href="/why-the-aura-library-matters"
              className="text-[#8A6622] underline underline-offset-2"
            >
              why the Aura Library matters
            </Link>
            .
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
