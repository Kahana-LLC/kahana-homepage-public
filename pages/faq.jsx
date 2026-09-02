import Link from 'next/link';
import { FolderPlusIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import FaqBrowse from '../components/faq/FaqBrowse';
import { APP_URL } from '../components/nav/navConfig';
import { getAllFaqItems } from '../data/platformFaq';
import { trackButtonClick } from '../utils/analytics';
import { generateFAQSchema } from '../utils/schemaUtils';

const CANONICAL = 'https://about.kahana.io/faq';
const SUPPORT_URL = `${APP_URL}/support`;

export default function FaqPage() {
  const schema = generateFAQSchema(
    getAllFaqItems().map(({ question, answer }) => ({ question, answer }))
  );

  return (
    <>
      <SEO
        title="FAQ | Kahana"
        description="Answers about Kahana hubs, Explore, Aura, plans, and how to learn and contribute. Paid access is optional."
        url={CANONICAL}
        type="website"
        schema={schema}
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Frequently asked questions
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Common questions for learners, contributors, and anyone exploring Kahana.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 pb-20 pt-8 sm:px-10 lg:px-16">
          <FadeInSection>
            <FaqBrowse />
          </FadeInSection>
        </section>

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Still have questions?
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Contribute what you know, or get help in the app.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('faq_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
                <a
                  href={SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                >
                  In-app Support
                </a>
              </div>
              <p className="mt-8 text-sm text-[#F7F3EA]/70">
                Company site:{' '}
                <a
                  href="https://about.kahana.io/"
                  className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
                >
                  about.kahana.io
                </a>
                {' · '}
                <Link
                  href="/privacy-policy"
                  className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
                >
                  Privacy
                </Link>
                {' · '}
                <Link
                  href="/terms-and-conditions"
                  className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
                >
                  Terms
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
