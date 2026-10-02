import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import { ABOUT_ORIGIN } from '../config/site';

const CANONICAL = `${ABOUT_ORIGIN}/manifesto`;

const CREATOR_LINES = [
  'Our minds never slow down.',
  'We challenge the status quo.',
  'We create in cycles.',
  'We need time to feed our souls.',
  'We need space to create.',
  'We focus intensely.',
  'We feel deeply.',
  'We battle resistance every day.',
  'We struggle to believe in ourselves.',
  'We procrastinate.',
  'We connect the dots.',
  'We never grow old.',
];

const PRINCIPLES = [
  'Eagerness to learn',
  'Accountability',
  'Problem-solving skills',
  'Strong work ethic',
];

export default function ManifestoPage() {
  return (
    <>
      <SEO
        title="Kahana Manifesto"
        description="The original Kahana manifesto, written before a single line of code. Kahana reveres creators first, and products follow that."
        url={CANONICAL}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Kahana Manifesto',
          description:
            'The original Kahana manifesto, written before a single line of code.',
          url: CANONICAL,
        }}
      />

      <div className="bg-[#F7F3EA] text-[#3B4041]">
        <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-2xl">
            <FadeInSection eager>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#3B675E]">
                A note from the founder
              </p>
              <h1 className="mt-4 font-bricolage text-4xl font-semibold leading-[1.05] tracking-tight text-[#3B4041] sm:text-5xl">
                Kahana Manifesto
              </h1>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#3B4041]">
                <p>We wrote this before we wrote a single line of code.</p>
                <p>
                  Kahana reveres creators first and foremost. Our entire premise is to remember
                  who creators are and seek to serve them first. Products and features follow that
                  mentality.
                </p>
                <p>
                  As long as we are humble and remember who people are and what makes them special,
                  and treat them as such, we have a chance to be a great company for a long time.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl">
            <FadeInSection>
              <article className="rounded-[2rem] bg-[#E9F4E9] px-6 py-10 sm:px-10 sm:py-14">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#3B675E]">
                  The original manifesto
                </p>

                <blockquote className="mt-8">
                  <p className="font-bricolage text-2xl font-medium italic leading-snug tracking-tight text-[#3B4041] sm:text-3xl">
                    “If I was imprisoned alone between four blank walls with nothing but time, I
                    would sing.”
                  </p>
                </blockquote>

                <div className="mt-10 space-y-5 text-lg leading-relaxed text-[#3B4041]">
                  <p>
                    We are designed to create and express. Cave paintings are among the first
                    examples of recorded art, as we documented our lives to communicate messages.
                    Why did we do this? We experience the complexity of life, filled with love,
                    suffering, passion, experiences, patterns, and sensations. While things change
                    around us, the act of creating continues to give us deep meaning as we face
                    life.
                  </p>
                  <p>
                    Kahana doesn’t fixate about the answer as to why people create. Kahana
                    appreciates and reveres that people create to answer the “why.”
                  </p>
                  <p>
                    The goal of Kahana is to enable people to live in a future where the creative
                    experience is seamless and immersive. Simply, we aim to unlock and encourage
                    creativity wherever it is, however it exists so that creators can find
                    meaning. In a world where all forms of creators often feel alone and
                    misunderstood, we listen with care to individuals’ problems and pain points,
                    and we build solutions with the hope of helping them.
                  </p>
                </div>

                <h2 className="mt-14 font-bricolage text-2xl font-semibold tracking-tight text-[#3B675E] sm:text-3xl">
                  Never Forget Who Creators Are
                </h2>
                <ul className="mt-6 space-y-2">
                  {CREATOR_LINES.map((line) => (
                    <li
                      key={line}
                      className="font-bricolage text-xl leading-snug tracking-tight text-[#3B4041] sm:text-2xl"
                    >
                      {line}
                    </li>
                  ))}
                </ul>

                <p className="mt-12 text-lg leading-relaxed text-[#3B4041]">
                  At our core, we aim to improve all the time and we value:
                </p>
                <ul className="mt-4 space-y-2 text-lg text-[#3B4041]">
                  {PRINCIPLES.map((principle) => (
                    <li key={principle} className="flex gap-3">
                      <span
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B675E]"
                        aria-hidden
                      />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-lg leading-relaxed text-[#3B4041]">
                  These four principles are foundational to Kahana’s philosophy.
                </p>

                <h2 className="mt-14 font-bricolage text-2xl font-semibold tracking-tight text-[#3B675E] sm:text-3xl">
                  Never Forget What Creation Is
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#3B4041]">
                  At its core, creation is a ceaseless absorption of information through experience
                  that facilitates the connecting of disparate dots. Creation is active and lasts
                  so long as willpower exists. Like light redirected within a prism, creation can
                  be understood as a process of information traversing through a medium and
                  transforming into something new.
                </p>
              </article>

              <p className="mt-10 text-base leading-relaxed text-[#3B4041]/80">
                The philosophy that grew from this is on{' '}
                <Link
                  href="/philosophy"
                  className="font-semibold text-[#3B675E] underline underline-offset-2"
                >
                  Kahana philosophy
                </Link>
                .
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
