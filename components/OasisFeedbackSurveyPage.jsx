import React, { useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SEO from './SEO';
import {
  buildTallyEmbedUrl,
  oasisFeedbackSurveys,
  oasisZenReward,
} from '../data/oasis-feedback-surveys';

function ZenRewardCard() {
  return (
    <div className="mb-8 overflow-hidden rounded-xl border-2 border-[#4A6200] bg-[#F8FAF2]">
      <div className="bg-[#4A6200] px-5 py-4">
        <p className="text-xs font-bold uppercase tracking-wider text-[#e8ebe0]">Oasis Zen, on us</p>
        <p className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
          1 month free for completing this survey
        </p>
      </div>
      <div className="px-5 py-4">
        <p className="text-base leading-relaxed text-[#4A5745]">
          Complete this survey and get{' '}
          <strong>1 month of Oasis Zen free</strong> ({oasisZenReward.tokensPerDay.toLocaleString()}{' '}
          tokens per day). Use the same email as your Oasis account so we can activate your reward.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#6b7355]">
          One reward per survey per Oasis account. We manually verify responses and activate Zen within{' '}
          {oasisZenReward.activationDays}.
        </p>
      </div>
    </div>
  );
}

export default function OasisFeedbackSurveyPage({ surveyKey }) {
  const router = useRouter();
  const survey = oasisFeedbackSurveys[surveyKey];

  const tallySrc = useMemo(() => {
    const email = router.query.email;
    const emailValue = Array.isArray(email) ? email[0] : email;
    return buildTallyEmbedUrl(survey.tallyUrl, emailValue);
  }, [router.query.email, survey.tallyUrl]);

  return (
    <>
      <SEO
        title={survey.seoTitle}
        description={survey.description}
        url={survey.pageUrl}
        type="website"
      />
      <Head>
        <title>{survey.title} | Kahana</title>
      </Head>

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-oasis-green-900 sm:text-5xl">
            {survey.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-oasis-green-800 sm:text-lg">
            {survey.description}
          </p>

          <ZenRewardCard />

          <div className="rounded-xl bg-white p-6 shadow-xl sm:p-8">
            <iframe
              src={tallySrc}
              width="100%"
              height={survey.iframeHeight}
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title={survey.iframeTitle}
              style={{
                border: 0,
                borderRadius: 0,
                backgroundColor: 'transparent',
                display: 'block',
              }}
            />

            <div className="mt-4 border-t border-gray-200 pt-6">
              <p className="mb-3 text-center text-sm text-gray-600">
                {survey.crossLink.label}:{' '}
                <Link
                  href={survey.crossLink.href}
                  className="text-brand-link no-underline hover:text-brand-link-hover hover:no-underline"
                >
                  Take the other survey
                </Link>
              </p>
              <p className="text-center text-xs text-oasis-green-800">
                By submitting this form you consent to be contacted by Kahana, and acknowledge our{' '}
                <Link
                  href="/privacy-policy"
                  className="text-brand-link no-underline hover:text-brand-link-hover hover:no-underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
