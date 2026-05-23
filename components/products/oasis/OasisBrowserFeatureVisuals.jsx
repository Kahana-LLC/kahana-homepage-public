import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { subtleTransition, usePrefersReducedMotion } from '../../solutions/visuals/motion';
import assistantThemesDoc from '../../../data/docs/assistant-themes.json';
import AssistantThemesGallery from './AssistantThemesGallery';
import {
  OasisAmplifierStory,
  OasisAmplifierVisuals,
  OasisMockConfirmModal,
  OasisMockImportBrowser,
  OasisMockOnboardingChecklist,
  OasisMockVoiceOverlay,
  OasisSkillsGallery,
} from './OasisUiMocks';

export const oasisBrowserImportItems = [
  'Bookmarks (or favorites, depending on source browser)',
  'Passwords',
  'History',
  'Form autofill data',
  'Payment methods (where supported)',
  'Extensions (where the platform can transfer them)',
];

function FeatureSplit({ id, eyebrow, title, body, children, imageFirst = false }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const copy = (
    <div className={imageFirst ? 'lg:order-2' : ''}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">{eyebrow}</p>
      )}
      <h2 id={id} className="text-2xl md:text-3xl font-bold text-oasis-green-800 mb-4 tracking-tight">
        {title}
      </h2>
      <div className="text-oasis-green-800/95 leading-relaxed space-y-4">{body}</div>
    </div>
  );
  const visual = <div className={imageFirst ? 'lg:order-1' : ''}>{children}</div>;
  return (
    <motion.div
      className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, ease: subtleTransition.ease }}
    >
      {copy}
      {visual}
    </motion.div>
  );
}

/**
 * Voice, assistant, confirmations, onboarding, import, and amplifier sections
 * with the same mocks as the Oasis Browser product page.
 */
export default function OasisBrowserFeatureVisuals() {
  return (
    <>
      <section className="bg-oasis-green-50 py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureSplit
            id="voice"
            eyebrow="Voice"
            title="Speak when it is faster, or go hands-free"
            imageFirst
            body={
              <>
                <p>
                  Tap the microphone in the composer to open a focused voice session: a cinematic overlay with an aura
                  visualization, capture modes (Continuous vs Precise), and whether replies are spoken or streamed into
                  chat. Voice and typing share the same assistant thread.
                </p>
                <p className="text-sm text-oasis-green-800/85">
                  Voice is available in supported builds and may require device permissions. Unavailable builds show a
                  clear in-product message.
                </p>
                <p className="text-sm text-oasis-green-800/80 italic">
                  Status hints like &quot;Listening&quot; and &quot;Pause briefly after you speak&quot; mirror what you
                  see in the product during capture.
                </p>
                <p className="pt-1">
                  <Link
                    href="/features/oasis-voice"
                    className="text-sm font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                  >
                    Read the full Voice guide →
                  </Link>
                </p>
              </>
            }
          >
            <OasisMockVoiceOverlay />
          </FeatureSplit>
        </div>
      </section>

      <section
        id="assistant"
        className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8"
        aria-labelledby="assistant-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">Assistant</p>
            <h2 id="assistant-heading" className="text-3xl font-bold text-oasis-green-800 mb-4 tracking-tight">
              Actions grounded in your browser
            </h2>
            <p className="text-oasis-green-800/95 leading-relaxed">
              The panel combines a chat timeline, a composer with &quot;Ask Oasis…&quot;, read-aloud and feedback on the
              latest AI message, and readable busy states when a tool is running (for example, summarizing a page).
              Search and filter below to explore commands and skills: illustrative prompts, not an exhaustive list.
            </p>
            <p className="mt-3">
              <Link
                href="/features/oasis-assistant"
                className="text-sm font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
              >
                Read the full Assistant guide →
              </Link>
            </p>
          </div>
          <OasisSkillsGallery />
        </div>
      </section>

      <section
        id="assistant-themes"
        className="bg-oasis-green-50 py-16 md:py-20 border-b border-oasis-green-800/8"
        aria-labelledby="assistant-themes-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">Personalization</p>
              <h2 id="assistant-themes-heading" className="text-3xl font-bold text-oasis-green-800 mb-4 tracking-tight">
                Assistant themes
              </h2>
              <p className="text-oasis-green-800/95 leading-relaxed">
                Pick light or dark schemes for the assistant panel. Themes affect assistant chrome only—not the colors
                of the web pages you browse.
              </p>
              <p className="mt-3">
                <Link
                  href="/docs/assistant-themes"
                  className="text-sm font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                >
                  Read the full Assistant themes guide →
                </Link>
              </p>
          </div>
          <AssistantThemesGallery
            items={assistantThemesDoc.gallery || []}
            edgeFadeFrom="from-oasis-green-50"
            edgeFadeVia="via-oasis-green-50/70"
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureSplit
            id="confirmations"
            eyebrow="Control"
            title="Confirmations for sensitive actions"
            body={
              <>
                <p>
                  When a command could change your browsing state in a meaningful way, Oasis can ask you to confirm. You
                  see plain-language copy plus a highlighted command line so you know exactly what will run.
                </p>
                <p className="text-sm text-oasis-green-800/85">
                  Illustrative modal below. Real copy and icons may vary slightly by version.
                </p>
                <p className="pt-1">
                  <Link
                    href="/features/oasis-confirmations"
                    className="text-sm font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                  >
                    Read the full Confirmations guide →
                  </Link>
                </p>
              </>
            }
          >
            <OasisMockConfirmModal />
          </FeatureSplit>
        </div>
      </section>

      <section className="bg-oasis-green-50 py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureSplit
            id="onboarding"
            eyebrow="Onboarding"
            title="A short checklist to get to your first win"
            imageFirst
            body={
              <>
                <p>
                  A docked checklist tracks basics like signing in, sending a first prompt, and trying voice, so you are not
                  left wondering what to do after install.
                </p>
                <p className="pt-1">
                  <Link
                    href="/features/oasis-onboarding"
                    className="text-sm font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                  >
                    Read the full Onboarding guide →
                  </Link>
                </p>
              </>
            }
          >
            <OasisMockOnboardingChecklist />
          </FeatureSplit>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-oasis-green-800/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureSplit
            id="import"
            eyebrow="Switching"
            title="Import in seconds"
            body={
              <>
                <p>
                  Oasis uses a migration-style wizard so you are not rebuilding your digital life from scratch. One
                  guided flow, clear choices, and OS permission prompts only when needed. Switching often takes seconds,
                  not minutes.
                </p>
                <ul className="space-y-2.5 pt-2">
                  {oasisBrowserImportItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-oasis-green-800/95 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2">
                  <Link
                    href="/features/oasis-import"
                    className="text-sm font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                  >
                    Read the full Import guide →
                  </Link>
                </p>
              </>
            }
          >
            <OasisMockImportBrowser />
          </FeatureSplit>
        </div>
      </section>

      <section
        id="amplifier"
        className="bg-oasis-green-50 py-16 md:py-20 border-b border-oasis-green-800/8"
        aria-labelledby="amplifier-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <div className="min-w-0 max-w-2xl lg:max-w-none">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#7a9200] mb-2">Coming soon</p>
              <h2
                id="amplifier-heading"
                className="text-3xl font-bold text-oasis-green-800 mb-3 tracking-tight max-w-3xl"
              >
                Amplifier: learn from real feedback
              </h2>
              <p className="text-oasis-green-800/95 leading-relaxed text-base">
                Planned feature: tags, notes, and thumbs become the loop that steadies the assistant over time. Preview
                below.
              </p>
              <p className="mt-2">
                <Link
                  href="/features/oasis-amplifier"
                  className="text-sm font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                >
                  Read the full Amplifier guide →
                </Link>
              </p>
              <div className="mt-4">
                <OasisAmplifierStory />
              </div>
            </div>
            <div className="min-w-0 lg:overflow-visible">
              <OasisAmplifierVisuals />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
