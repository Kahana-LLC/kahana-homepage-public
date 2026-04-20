import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { trackButtonClick } from "../../utils/analytics";
import SharedCTA from "../SharedCTA";

const OasisMockVoiceOverlay = dynamic(
  () =>
    import("../products/oasis/OasisUiMocks").then((m) => m.OasisMockVoiceOverlay),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full min-h-[220px] rounded-xl bg-oasis-green-50 border border-oasis-green-800/10 animate-pulse"
        aria-hidden
      />
    ),
  }
);

const OasisMockImportBrowser = dynamic(
  () =>
    import("../products/oasis/OasisUiMocks").then((m) => m.OasisMockImportBrowser),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full min-h-[260px] rounded-xl bg-oasis-green-50 border border-oasis-green-800/10 animate-pulse"
        aria-hidden
      />
    ),
  }
);

const OasisAmplifierStory = dynamic(
  () =>
    import("../products/oasis/OasisUiMocks").then((m) => m.OasisAmplifierStory),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full max-w-md min-h-[120px] rounded-xl bg-oasis-green-50 border border-oasis-green-800/10 animate-pulse"
        aria-hidden
      />
    ),
  }
);

const OasisAmplifierVisuals = dynamic(
  () =>
    import("../products/oasis/OasisUiMocks").then((m) => m.OasisAmplifierVisuals),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full min-h-[280px] rounded-xl bg-oasis-green-50 border border-oasis-green-800/10 animate-pulse"
        aria-hidden
      />
    ),
  }
);

const MainIncidentDashboardPreview = dynamic(
  () => import("../solutions/visuals/MainIncidentDashboardPreview"),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full min-h-[240px] rounded-xl bg-white border border-oasis-green-800/10 animate-pulse"
        aria-hidden
      />
    ),
  }
);

const PERSONAL_INTRO =
  "Oasis is a browser with a built-in AI assistant that can plan, search, and take action on your tabs, history, and pages rather than only chatting beside them.";

const PERSONAL_BULLETS = [
  "Real browser context: tabs, bookmarks, history, and the page you’re on",
  "Voice when you want speed, in the same assistant thread as typing",
  "Guided import so switching browsers doesn’t eat a weekend",
  "Confirmations when a command would meaningfully change your browsing state",
];

const ENTERPRISE_INTRO =
  "Enterprise work runs in the browser on corporate and third-party devices, but many controls still assume owned laptops and network perimeters. Oasis is a managed enterprise browser: governance in the session, integrated with your IdP and enterprise DLP, so you can scale SaaS access without treating hardware shipping or VDI as the only answer.";

const ENTERPRISE_SUPPORTING =
  "SaaS, internal web apps, and AI tools run in sessions beyond classic device-only assumptions. Oasis treats that session as a first-class place for policy.";

export default function HomeProductLanes() {
  return (
    <>
      <section
        id="home-voice"
        className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8 overflow-x-hidden"
        aria-labelledby="home-voice-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="lg:order-1 overflow-x-auto">
              <OasisMockVoiceOverlay />
            </div>
            <div className="lg:order-2">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-0">
                  Voice
                </p>
                <span className="inline-flex items-center rounded-full border border-[#7a9200]/30 bg-[#f2f4e5] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#495800]">
                  New feature
                </span>
              </div>
              <h2
                id="home-voice-heading"
                className="text-2xl md:text-3xl font-bold text-oasis-green-800 mb-4 tracking-tight"
              >
                Speak when it is faster, or go hands-free
              </h2>
              <div className="text-oasis-green-800/95 leading-relaxed space-y-4">
                <p>
                  Tap the microphone in the composer to open a focused voice session: a cinematic
                  overlay with an aura visualization, capture modes (Continuous vs Precise), and
                  whether replies are spoken or streamed into chat. Voice and typing share the same
                  assistant thread.
                </p>
                <p className="text-sm text-oasis-green-800/85">
                  Voice is available in supported builds and may require device permissions.
                </p>
              </div>
              <p className="mt-6">
                <Link
                  href="/products/oasis-browser#voice"
                  onClick={() => trackButtonClick("home_voice_learn_more", "home_voice_section")}
                  className="text-brand-link font-semibold text-sm no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                >
                  More on Oasis Browser →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="home-personal"
        className="relative overflow-x-hidden bg-white py-16 sm:py-24 border-b border-oasis-green-800/10"
        aria-labelledby="home-personal-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-14">
            <div className="min-w-0 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">
                For individuals
              </p>
              <h2
                id="home-personal-heading"
                className="text-3xl sm:text-4xl font-bold text-oasis-green-800 tracking-tight mb-4"
              >
                Oasis Browser
              </h2>
              <p className="text-lg text-oasis-green-800/95 leading-relaxed mb-6">
                {PERSONAL_INTRO}
              </p>
              <ul className="space-y-3 text-oasis-green-800/95 mb-8">
                {PERSONAL_BULLETS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm sm:text-base leading-relaxed">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7a9200]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
                <Link
                  href="/oasis-pricing"
                  onClick={() =>
                    trackButtonClick("home_lane_personal_pricing", "home_personal_lane")
                  }
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold text-center"
                >
                  Download
                </Link>
                <Link
                  href="/products/oasis-browser"
                  onClick={() =>
                    trackButtonClick("home_lane_personal_learn_more", "home_personal_lane")
                  }
                  className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold text-center"
                >
                  Learn more about Oasis Browser
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:pt-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">
                Import from other browsers
              </p>
              <div className="overflow-x-auto rounded-xl border border-oasis-green-800/10 bg-oasis-green-50 shadow-sm p-2 sm:p-4">
                <OasisMockImportBrowser />
              </div>
              <p className="mt-3 text-center text-sm text-oasis-green-800/80 lg:text-left">
                Guided import for bookmarks, passwords, history, and more, so you are not stuck
                setting up all weekend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="home-enterprise"
        className="relative overflow-x-hidden bg-oasis-green-50 py-16 sm:py-24 border-b border-oasis-green-800/10"
        aria-labelledby="home-enterprise-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">
              For IT &amp; teams
            </p>
            <h2
              id="home-enterprise-heading"
              className="text-3xl sm:text-4xl font-bold text-oasis-green-800 tracking-tight mb-4"
            >
              Managed enterprise browser
            </h2>
            <p className="text-lg text-oasis-green-800/95 leading-relaxed mb-4">
              {ENTERPRISE_INTRO}
            </p>
            <p className="text-base text-oasis-green-800/90 leading-relaxed">
              {ENTERPRISE_SUPPORTING}
            </p>
          </div>

          <div className="mb-10 overflow-x-auto rounded-xl border border-oasis-green-800/10 bg-white shadow-sm p-2 sm:p-4">
            <MainIncidentDashboardPreview pageKey="oasis-enterprise-browser" />
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4">
            <Link
              href="/schedule-demo"
              onClick={() =>
                trackButtonClick("home_lane_enterprise_demo", "home_enterprise_lane")
              }
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold text-center"
            >
              Schedule a demo
            </Link>
            <Link
              href="/products/oasis-enterprise-browser"
              onClick={() =>
                trackButtonClick(
                  "home_lane_enterprise_learn_more",
                  "home_enterprise_lane"
                )
              }
              className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold text-center"
            >
              Learn more about Oasis Enterprise
            </Link>
          </div>
          <p className="text-center text-sm text-oasis-green-800/85 mt-6">
            Evaluating procurement? See the{" "}
            <Link
              href="/enterprise-buyer-guide"
              onClick={() =>
                trackButtonClick("home_lane_enterprise_buyer_guide", "home_enterprise_lane")
              }
              className="text-brand-link font-semibold underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
            >
              enterprise buyer guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        id="home-amplifier"
        className="bg-oasis-green-50 py-16 md:py-20 border-b border-oasis-green-800/8 overflow-x-hidden"
        aria-labelledby="home-amplifier-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <div className="min-w-0 max-w-2xl lg:max-w-none">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">
                Coming soon
              </p>
              <h2
                id="home-amplifier-heading"
                className="text-3xl font-bold text-oasis-green-800 mb-3 tracking-tight max-w-3xl"
              >
                Amplifier: learn from real feedback
              </h2>
              <p className="text-oasis-green-800/95 leading-relaxed text-base">
                Planned feature: your reactions train how the assistant improves for you. Details are in the preview below.
              </p>
              <div className="mt-4">
                <OasisAmplifierStory />
              </div>
            </div>
            <div className="min-w-0 -mx-1 overflow-x-auto lg:mx-0 lg:overflow-visible lg:pt-0">
              <OasisAmplifierVisuals />
            </div>
          </div>
        </div>
      </section>

      <SharedCTA
        sectionId="home-oasis-cta"
        title="Get in touch"
        description="Have a question, feedback, or anything you would like to send our way? We read every message."
        buttonText="Contact us"
        buttonLink="/contact"
        buttonOnClick={() =>
          trackButtonClick("home_post_amplifier_contact_us", "home_post_amplifier_cta")
        }
      />
    </>
  );
}
