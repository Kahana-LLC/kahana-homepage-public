import Link from 'next/link';
import FadeInSection from '../FadeInSection';
import GlobalReaderFlags from './GlobalReaderFlags';

export default function LibraryMission() {
  return (
    <section className="border-t border-[#E4D9C4] bg-[#B8B9A6]/25 px-6 py-16 text-[#3B2F1A] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <FadeInSection>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            The Library needs to be built with your help
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5C4520]">
            Everyone has something unique to upload. People already come from 110+ countries and
            speak many languages. This is a place to create, learn, and research on a global scale.
          </p>
          <GlobalReaderFlags className="mt-8" justify="start" />
          <p className="mt-6 text-base text-[#5C4520]">
            Read{' '}
            <Link href="/philosophy" className="text-[#8A6622] underline underline-offset-2">
              our philosophy
            </Link>{' '}
            and{' '}
            <Link
              href="/why-the-aura-library-matters"
              className="text-[#8A6622] underline underline-offset-2"
            >
              our mission
            </Link>
            .
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
