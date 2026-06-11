import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import FeatureDeepDiveShell from '../../components/features/FeatureDeepDiveShell';
import { getFeatureRelatedDocsProps } from '../../utils/featurePageStaticProps';

const OasisAmplifierStory = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisAmplifierStory),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[100px] max-w-md rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse" aria-hidden />
    ),
  }
);

const OasisAmplifierVisuals = dynamic(
  () => import('../../components/products/oasis/OasisUiMocks').then((m) => m.OasisAmplifierVisuals),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[280px] w-full rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 animate-pulse" aria-hidden />
    ),
  }
);

const CANONICAL = 'https://kahana.io/features/oasis-amplifier';

/** Mirrors in-app copy; single source for token claims on this page. */
const QUALIFYING_TRAINING_BONUS_TOKENS = 1000;

const TRAIN_MODAL_IMAGE = {
  src: '/assets/features/oasis-amplifier/oasis-train-good-answer.png',
  width: 473,
  height: 968,
  alt:
    'Oasis AI training modal titled Train on a good answer, showing the user message, assistant reply, feedback tags such as Accurate and Helpful, a required details field, and Submit training.',
};

const DAILY_TOKENS_IMAGE = {
  src: '/assets/features/oasis-amplifier/oasis-daily-tokens-training.png',
  width: 472,
  height: 358,
  alt:
    'Oasis Daily tokens panel showing token usage bar, bonus tokens from qualifying training, and a Train latest reply button above the chat input.',
};

export async function getStaticProps() {
  return getFeatureRelatedDocsProps('oasis-amplifier');
}

export default function OasisAmplifierFeaturePage({ relatedDocs = [] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Oasis Browser: Amplifier & Training',
    url: CANONICAL,
    description:
      'Amplifier is Oasis structured Training: tags, notes, and thumbs tied to real conversations. Qualifying training can earn bonus daily tokens (limits vary by plan). Feedback improves product quality and your experience; deeper interaction logging and training modes are evolving.',
    isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.io' },
  };

  return (
    <FeatureDeepDiveShell
      seoTitle="Oasis Browser: Amplifier & Training"
      seoDescription={`Train Oasis on replies that work for you: structured feedback helps Oasis become smarter, more accurate, and faster over time. Earn up to ${QUALIFYING_TRAINING_BONUS_TOKENS.toLocaleString()} bonus tokens per qualifying training (subject to your Oasis plan and daily limits). Illustrative trajectory chart on this page is not live metrics.`}
      url={CANONICAL}
      schema={schema}
      heroEyebrow="Oasis Browser · Amplifier & Training"
      heroTitle="Train the assistant on the answers you actually want"
      heroDescription={`When you use Training in Oasis, your signal is grounded in real messages—not generic ratings. The result, at a high level, is an assistant that can grow smarter, more accurate, and faster for you. Qualifying sessions can also earn up to ${QUALIFYING_TRAINING_BONUS_TOKENS.toLocaleString()} bonus tokens toward your daily allowance (plan rules and caps apply).`}
      primaryHref="/oasis-pricing"
      primaryLabel="Download"
      secondaryHref="/contact"
      secondaryLabel="Get in touch"
      backHref="/products/oasis-browser#amplifier"
      backLabel="← Back to Oasis Browser (Amplifier)"
      relatedDocs={relatedDocs}
    >
      <section className="border-b border-oasis-green-800/8 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 space-y-5 text-oasis-green-800/95 leading-relaxed sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">How it works today</p>
          <p>
            In the product, <span className="font-semibold text-oasis-green-800">Training</span> is the name you see
            on thumbs, tags, and flows like <span className="font-semibold text-oasis-green-800">Train on a good answer</span>.
            We still call the capability <span className="font-semibold text-oasis-green-800">Amplifier</span> when we talk
            about the broader loop: structured feedback tied to the conversation you are in, so we can learn what worked,
            what missed, and what felt slow or unclear—without treating your browsing history as an open-ended data grab.
          </p>
          <p>
            <span className="font-semibold text-oasis-green-800">Today, Training is not anonymous:</span> feedback is
            associated with your account and the interaction you rate, so we can debug, attribute issues to app version
            and context over time, and improve outcomes. On the roadmap are explicit{' '}
            <span className="font-semibold text-oasis-green-800">anonymous training</span> (rich signal without stable
            identifiers in the training payload) and{' '}
            <span className="font-semibold text-oasis-green-800">personalized training</span> (opt-in paths that attach
            identity so the assistant can adapt more directly to you or your team). Those modes are not the default UI yet;
            shipped behavior and policies will always win over marketing copy.
          </p>
          <p>
            Under the hood we are moving toward a single interaction-shaped record—prompt, reply, tools, performance, and
            feedback together—so we can answer questions like what broke, which release changed it, and whether fixes
            actually helped. That engineering direction supports both short-term quality and longer-term optimization; it
            is not a promise that every rating retrains a foundation model.
          </p>
          <p className="text-sm text-oasis-green-800/80">
            Anything cross-user stays governed by aggregation, consent, and minimization as we ship; final privacy text
            lives in product terms and in-app notices.
          </p>
        </div>
      </section>

      <section className="border-b border-oasis-green-800/8 bg-oasis-green-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200]">In the product</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-oasis-green-800 sm:text-3xl">
              Training, tokens, and specificity
            </h2>
            <p className="mt-3 text-oasis-green-800/90 leading-relaxed">
              Oasis rewards thoughtful training: be specific about what worked or missed. Bonus tokens accrue on qualifying
              training up to your plan&apos;s daily rules—not every reply qualifies.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
            <figure className="flex flex-col items-center">
              <div className="w-full max-w-sm rounded-2xl border border-oasis-green-800/12 bg-white p-2 shadow-sm">
                <Image
                  src={TRAIN_MODAL_IMAGE.src}
                  alt={TRAIN_MODAL_IMAGE.alt}
                  width={TRAIN_MODAL_IMAGE.width}
                  height={TRAIN_MODAL_IMAGE.height}
                  className="h-auto w-full rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
              </div>
              <figcaption className="mt-4 max-w-sm text-center text-sm text-oasis-green-800/85 leading-relaxed">
                Structured Training captures your message, the assistant reply, quick tags (for example Accurate, Helpful,
                Fast), and required detail before you submit—so the signal matches what actually happened in chat.
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center">
              <div className="w-full max-w-lg rounded-2xl border border-oasis-green-800/12 bg-white p-2 shadow-sm">
                <Image
                  src={DAILY_TOKENS_IMAGE.src}
                  alt={DAILY_TOKENS_IMAGE.alt}
                  width={DAILY_TOKENS_IMAGE.width}
                  height={DAILY_TOKENS_IMAGE.height}
                  className="h-auto w-full rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 512px"
                />
              </div>
              <figcaption className="mt-4 max-w-lg text-center text-sm text-oasis-green-800/85 leading-relaxed">
                Daily tokens shows how much of your allowance you have used, explains bonus tokens from qualifying training
                (up to {QUALIFYING_TRAINING_BONUS_TOKENS.toLocaleString()} per qualifying training in the product copy),
                and surfaces <span className="font-medium text-oasis-green-800">Train latest reply</span> when you want
                to keep going.
              </figcaption>
            </figure>
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-oasis-green-800/65 leading-relaxed">
            Screenshots reflect the UI at the time they were captured; layout, labels, and eligibility rules may change.
            Not every interaction earns bonus tokens.
          </p>
        </div>
      </section>

      <section className="bg-oasis-green-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <OasisAmplifierStory />
          </div>
          <OasisAmplifierVisuals />
        </div>
      </section>
    </FeatureDeepDiveShell>
  );
}
