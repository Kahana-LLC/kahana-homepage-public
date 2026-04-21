import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OasisVoiceWaveform from './OasisVoiceWaveform';
import { slowLoopTransition, subtleTransition, usePrefersReducedMotion } from '../../solutions/visuals/motion';

const surface = '#f8faf2';
const primaryGreen = '#7a9200';
const titleGreen = '#495800';
const userBubble = 'linear-gradient(180deg, #f8faf2 0%, #f2f4e5 100%)';

const ASSISTANT_STEP_MS = 3800;
const THINKING_LABELS = [
  'Scanning this page…',
  'Pulling out the main arguments…',
  'Drafting a tight summary…',
];
const SUMMARY_BULLETS = [
  'The author argues async-first norms beat meeting-heavy remote work.',
  'Evidence comes from three case studies and one meta-analysis.',
  'Takeaway: batch deep work and protect focus blocks on your calendar.',
];

/** Looped demo: welcome → user ask → thinking states → bullets stream in → hold → reset. */
export function OasisMockAssistantHero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const starterLabels = ['Summarize this page', 'List my open tabs', "Search the web for today's weather"];
  const [step, setStep] = useState(0);

  useLayoutEffect(() => {
    if (prefersReducedMotion) setStep(8);
    else setStep(0);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % 9);
    }, ASSISTANT_STEP_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  const showOnboarding = step === 0;
  const showUserBubble = step >= 1;
  const showAssistantBusy = step >= 2 && step <= 4;
  const showSummary = step >= 5;
  const thinkingIndex = Math.min(Math.max(step - 2, 0), THINKING_LABELS.length - 1);
  const visibleBulletCount = showSummary ? Math.min(step - 4, SUMMARY_BULLETS.length) : 0;

  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-[#d4d9c8] shadow-lg"
      style={{ background: surface, fontFamily: 'system-ui, sans-serif' }}
      animate={
        prefersReducedMotion ? undefined : { opacity: [0.98, 1, 0.98], boxShadow: ['0 10px 15px -3px rgba(0,0,0,0.06)', '0 12px 20px -3px rgba(74,87,69,0.08)', '0 10px 15px -3px rgba(0,0,0,0.06)'] }
      }
      transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="flex items-center justify-between gap-3 border-b border-black/5 px-3 py-2.5"
        style={{ cursor: 'default' }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#F8FAF2]" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#978455]">
              <path
                d="M12 4c-2.5 0-4.5 2-4.5 4.5v1c-1 .2-1.8 1-2 2l-.5 3c-.21.2.8 2.3 2 2.3h1.2c.3 1.2 1.4 2.2 2.8 2.2h2c1.4 0 2.5-1 2.8-2.2h1.2c1.2 0 2.2-1.1 2-2.3l-.5-3c-.2-1-1-1.8-2-2v-1C16.5 6 14.5 4 12 4z"
                fill="currentColor"
                opacity="0.85"
              />
            </svg>
          </span>
          <span className="text-[15px] font-semibold" style={{ color: titleGreen }}>
            Oasis AI
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
            style={{ background: '#f2f4e5', color: titleGreen }}
          >
            Beta
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[#7a9200]" aria-hidden>
          <span className="h-4 w-4 rounded-full border border-current opacity-70" />
          <span className="h-4 w-4 rounded-full border border-current opacity-70" />
        </div>
      </div>
      <div className="h-[320px] overflow-hidden px-3 py-3 sm:h-[340px] sm:py-4">
        <div className="relative h-full">
          <AnimatePresence>
            {showOnboarding && (
              <motion.div
                key="onboard"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={subtleTransition}
                className="absolute inset-0 space-y-3 overflow-hidden"
              >
                <p className="text-center text-[12px] text-[#666]">Welcome to Oasis AI</p>
                <div className="flex max-h-[72px] flex-wrap justify-center gap-1.5 overflow-hidden">
                  {starterLabels.map((label, i) => (
                    <motion.span
                      key={label}
                      className="rounded-full border px-2.5 py-1 text-[11px] text-[#2f3a20]"
                      style={{ borderColor: primaryGreen }}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...subtleTransition, delay: 0.12 + i * 0.07 }}
                    >
                      {label}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-end gap-3">
            <AnimatePresence>
              {showUserBubble && (
                <motion.div
                  key="user-ask"
                  className="flex justify-end"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={subtleTransition}
                >
                  <div
                    className="max-w-[85%] rounded-[18px] rounded-br-md px-3 py-2 text-[13px] leading-snug text-[#2f3a20]"
                    style={{ background: userBubble }}
                  >
                    Summarize this page in three bullets.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative min-h-[170px]">
              <AnimatePresence mode="wait">
                {showAssistantBusy && (
                  <motion.div
                    key={`busy-${thinkingIndex}`}
                    className="absolute inset-0 rounded-xl border border-black/5 bg-white px-3 py-2.5 text-left shadow-sm"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
                    transition={subtleTransition}
                  >
                    <div className="mb-2 flex items-center gap-2 text-[12px] font-medium" style={{ color: primaryGreen }}>
                      <motion.span
                        className="inline-block h-3 w-3 rounded-full bg-current"
                        aria-hidden
                        animate={prefersReducedMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.92, 1, 0.92] }}
                        transition={prefersReducedMotion ? undefined : { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <span className="tabular-nums truncate">{THINKING_LABELS[thinkingIndex]}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#666]">
                      Using the page you have open (structure, headings, and body text) so the summary stays grounded.
                    </p>
                    <motion.div
                      className="relative mt-2 h-1 overflow-hidden rounded-full bg-[#e8ead8]"
                      aria-hidden
                      initial={false}
                    >
                      <motion.div
                        className="absolute inset-y-0 left-0 w-[45%] rounded-full bg-[#7a9200]/75"
                        animate={prefersReducedMotion ? undefined : { left: ['-20%', '100%'] }}
                        transition={prefersReducedMotion ? undefined : { duration: 2.6, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>
                  </motion.div>
                )}

                {showSummary && (
                  <motion.div
                    key="summary"
                    className="absolute inset-0 rounded-xl border border-black/5 bg-white px-3 py-2.5 text-left shadow-sm"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={subtleTransition}
                  >
                    <div className="mb-1.5 flex items-center gap-2 text-[12px] font-medium text-[#333]">
                      <span className="text-[#7a9200]" aria-hidden>
                        {'\u2713'}
                      </span>
                      Key points
                    </div>
                    <ul className="list-none space-y-2 overflow-y-auto pl-0 text-[13px] leading-relaxed text-[#444] max-h-[126px]">
                      {SUMMARY_BULLETS.slice(0, visibleBulletCount).map((line, i) => (
                        <motion.li
                          key={`${line}-${i}`}
                          className="flex gap-2"
                          initial={prefersReducedMotion ? false : { opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ ...subtleTransition, delay: prefersReducedMotion ? 0 : i * 0.12 }}
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                          <span>{line}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 bg-oasis-green-50 px-3 py-2">
        <div
          className="flex items-center gap-2 rounded-[20px] border border-black/8 bg-white px-2 py-1.5 shadow-sm"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
        >
          <span className="text-[12px] text-[#999]" aria-hidden>
            ···
          </span>
          <span className="flex-1 text-[13px] text-[#999]">Ask Oasis…</span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full border text-[11px]"
            style={{ borderColor: '#94A833', background: '#F8FAF2', color: '#94A833' }}
            aria-hidden
          >
            Mic
          </span>
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-full text-white"
            style={{ background: primaryGreen }}
            aria-hidden
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.04, 1] }}
            transition={prefersReducedMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            →
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function OasisMockVoiceOverlay() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#2a3318] shadow-xl"
      style={{
        background: 'linear-gradient(165deg, #1a1f0e 0%, #0f1208 45%, #161b0d 100%)',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.35, 0.5, 0.35] }
        }
        transition={prefersReducedMotion ? undefined : { ...slowLoopTransition, duration: 7 }}
        style={{ boxShadow: 'inset 0 0 80px rgba(122,146,0,0.25)' }}
      />
      <div className="relative px-4 pb-8 pt-10 text-center sm:px-8 sm:pb-12 sm:pt-14">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Voice session</p>

        <div className="relative mx-auto mb-8 flex min-h-[100px] max-w-md flex-col items-center justify-center sm:min-h-[120px]">
          <motion.div
            className="absolute inset-x-4 top-1/2 h-32 -translate-y-1/2 rounded-full opacity-90 sm:h-36"
            aria-hidden
            style={{
              background: 'radial-gradient(ellipse at center, rgba(122,146,0,0.28) 0%, transparent 68%)',
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [0.96, 1.02, 0.96], opacity: [0.75, 0.95, 0.75] }
            }
            transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative z-10 w-full">
            <OasisVoiceWaveform />
          </div>
        </div>

        <p
          className="mb-2 inline-block rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90"
          style={{ borderColor: 'rgba(122,146,0,0.6)' }}
        >
          Listening
        </p>
        <p className="mx-auto max-w-sm text-[13px] leading-relaxed text-white/70">
          Pause briefly after you speak, or tap the orb to send now.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[11px] text-white/80">
          <span className="rounded-full bg-white/10 px-2.5 py-1">Continuous</span>
          <span className="rounded-full px-2.5 py-1 text-white/40">Precise</span>
          <span className="mx-1 text-white/30">|</span>
          <span className="rounded-full bg-white/10 px-2.5 py-1">Spoken</span>
          <span className="rounded-full px-2.5 py-1 text-white/40">Chat</span>
        </div>
        <motion.div
          className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full text-white"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #9aad3a 0%, #5a6b18 100%)',
            boxShadow: '0 0 24px rgba(122,146,0,0.45)',
          }}
          aria-hidden
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.06, 1], boxShadow: ['0 0 24px rgba(122,146,0,0.45)', '0 0 32px rgba(122,146,0,0.55)', '0 0 24px rgba(122,146,0,0.45)'] }}
          transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-2xl opacity-90">●</span>
        </motion.div>
      </div>
    </div>
  );
}

export function OasisMockConfirmModal() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative rounded-2xl border border-oasis-green-800/15 bg-black/5 p-6 sm:p-8">
      <motion.div
        className="mx-auto max-w-sm rounded-xl bg-white p-5 shadow-xl"
        style={{ fontFamily: 'system-ui, sans-serif' }}
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={subtleTransition}
      >
        <div className="mb-3 flex justify-center">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full"
            style={{ background: '#FFF8E1', border: '2px solid #7a9200' }}
            aria-hidden
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#7a9200]">
              <path
                d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <h4 className="mb-2 text-center text-base font-semibold text-[#2f3a20]">Confirm Action</h4>
        <p className="mb-3 text-center text-[13px] leading-relaxed text-[#666]">
          This will close a tab and cannot be undone from the assistant. Continue?
        </p>
        <div className="mb-4 rounded-lg px-3 py-2 text-[12px] text-[#2f3a20]" style={{ background: '#E8F5E9' }}>
          <span className="font-semibold text-[#495800]">Command:</span> close tab &quot;Quarterly report&quot;
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex-1 rounded-lg border border-black/10 py-2 text-[13px] font-medium text-[#444]"
            disabled
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg py-2 text-[13px] font-medium text-white"
            style={{ background: primaryGreen }}
            disabled
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function OasisMockOnboardingChecklist() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[#d4d9c8] shadow-md"
      style={{ background: surface, fontFamily: 'system-ui, sans-serif' }}
    >
      <div className="border-b border-black/5 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[13px] font-semibold" style={{ color: titleGreen }}>
            Get started
          </span>
          <span className="text-[11px] text-[#666]">2 of 4</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#e5e8d8]">
          {prefersReducedMotion ? (
            <div className="h-full w-1/2 rounded-full" style={{ background: primaryGreen }} />
          ) : (
            <motion.div
              className="h-full rounded-full"
              style={{ background: primaryGreen }}
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              viewport={{ once: true, margin: '-10px' }}
              transition={{ duration: 0.95, ease: subtleTransition.ease }}
            />
          )}
        </div>
      </div>
      <ul className="space-y-2 px-4 py-3 text-[12px] text-[#444]">
        <li className="flex gap-2">
          <span className="w-4 shrink-0 text-center font-semibold" style={{ color: primaryGreen }} aria-hidden>
            {'\u2713'}
          </span>
          Sign in to Oasis AI
        </li>
        <li className="flex gap-2">
          <span className="w-4 shrink-0 text-center font-semibold" style={{ color: primaryGreen }} aria-hidden>
            {'\u2713'}
          </span>
          Try your first prompt
        </li>
        <li className="flex gap-2 text-[#999]">
          <span className="w-4 shrink-0 text-center" aria-hidden>
            {'\u25CB'}
          </span>
          Try voice conversation
        </li>
        <li className="flex gap-2 text-[#999]">
          <span className="w-4 shrink-0 text-center" aria-hidden>
            {'\u25CB'}
          </span>
          Explore tab tools
        </li>
      </ul>
    </div>
  );
}

export { OasisBrowserAssistantMock } from './OasisBrowserAssistantMock';
export { OasisSkillsGallery } from './OasisSkillsGallery';
export { OasisAmplifierStory, OasisAmplifierVisuals } from './OasisAmplifierVisual';
export { OasisMockImportBrowser } from './OasisMockImportBrowser';
