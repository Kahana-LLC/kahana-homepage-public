import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { OasisSceneArticleBody, OasisSceneHistoryBody } from './OasisBrowserScenes';
import { subtleTransition, usePrefersReducedMotion } from '../../solutions/visuals/motion';

const surface = '#f8faf2';
const titleGreen = '#495800';
const primaryGreen = '#7a9200';

/** Long enough for summarize micro-steps (thinking → bullets) before advancing. */
const SCENE_INTERVAL_MS = 12500;
const ASSISTANT_MICRO_MS = 2200;

const THINKING_LABELS = ['Scanning this page…', 'Pulling out the main arguments…', 'Drafting a tight summary…'];
const SUMMARY_BULLETS = [
  'Async-first norms reduce meeting load while keeping decisions traceable.',
  'Evidence: case studies + one meta-analysis cited in the article.',
  'Takeaway: protect focus blocks and publish readable summaries.',
];

function BrowserChrome({ sceneIndex }) {
  const tabs =
    sceneIndex === 2
      ? [
          { label: 'History', active: true },
          { label: 'Article', active: false },
        ]
      : [
          { label: 'Async article', active: true, group: sceneIndex === 1 ? 'Research' : null },
          { label: 'Inbox', active: false },
          { label: 'Docs', active: false },
        ];

  const url =
    sceneIndex === 2
      ? 'oasis://history/search?q=async%20remote%20work'
      : 'https://workfutures.example/article/async-remote-work';

  return (
    <div className="border-b border-black/8 bg-[#eef1e8]">
      <div className="flex items-center gap-2 px-2 py-1.5 sm:px-3" aria-hidden>
        <span className="flex gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e07a6e]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e6c35c]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#7cbd6a]/90" />
        </span>
        <span className="text-[10px] text-[#666]">Oasis</span>
      </div>
      <div className="flex gap-0.5 overflow-x-auto px-2 pb-1 sm:px-3">
        {tabs.map((t) => (
          <div
            key={t.label}
            className={`flex min-w-0 max-w-[140px] items-center gap-1 rounded-t-md px-2 py-1 text-[10px] font-medium sm:text-[11px] ${
              t.active ? 'bg-white text-[#2f3a20] shadow-sm' : 'bg-black/[0.04] text-[#666]'
            }`}
          >
            {t.group && (
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a9200]"
                title={t.group}
                aria-hidden
              />
            )}
            <span className="truncate">{t.label}</span>
          </div>
        ))}
      </div>
      <div className="px-2 pb-2 sm:px-3">
        <div className="flex items-center gap-2 rounded-lg border border-black/6 bg-white px-2 py-1.5 shadow-sm">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#7a9200]" aria-hidden>
            <path
              d="M12 2C8.5 2 6 4.5 6 8v2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V8c0-3.5-2.5-6-6-6zm0 2c2.2 0 4 1.8 4 4v2H8V8c0-2.2 1.8-4 4-4z"
              fill="currentColor"
              opacity="0.85"
            />
          </svg>
          <span className="truncate font-mono text-[10px] text-oasis-green-800/90 sm:text-[11px]">{url}</span>
        </div>
      </div>
    </div>
  );
}

function AssistantHeader() {
  return (
    <div
      className="flex items-center justify-between gap-2 border-b border-black/5 px-2.5 py-2"
      style={{ cursor: 'default' }}
    >
      <div className="flex min-w-0 items-center gap-1.5">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#F8FAF2]" aria-hidden>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#978455]">
            <path
              d="M12 4c-2.5 0-4.5 2-4.5 4.5v1c-1 .2-1.8 1-2 2l-.5 3c-.21.2.8 2.3 2 2.3h1.2c.3 1.2 1.4 2.2 2.8 2.2h2c1.4 0 2.5-1 2.8-2.2h1.2c1.2 0 2.2-1.1 2-2.3l-.5-3c-.2-1-1-1.8-2-2v-1C16.5 6 14.5 4 12 4z"
              fill="currentColor"
              opacity="0.85"
            />
          </svg>
        </span>
        <span className="truncate text-[13px] font-semibold" style={{ color: titleGreen }}>
          Oasis AI
        </span>
        <span
          className="shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide"
          style={{ background: '#f2f4e5', color: titleGreen }}
        >
          Beta
        </span>
      </div>
    </div>
  );
}

function AssistantComposer() {
  return (
    <div className="border-t border-black/5 px-2 py-2">
      <div className="flex items-center gap-1.5 rounded-xl border border-[#d4d9c8] bg-white px-2 py-1.5 shadow-inner">
        <span className="text-[10px] text-[#999]">Ask Oasis…</span>
        <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full border border-[#7a9200]/30 text-[#7a9200]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/** Scene 0: summarize (thinking → bullets) */
function AssistantPanelSummarize({ prefersReducedMotion }) {
  const [sub, setSub] = useState(0);

  useLayoutEffect(() => {
    if (prefersReducedMotion) setSub(4);
    else setSub(0);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setSub((s) => (s >= 4 ? 4 : s + 1));
    }, ASSISTANT_MICRO_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  const showBusy = sub >= 1 && sub <= 3;
  const thinkingIndex = Math.min(Math.max(sub - 1, 0), THINKING_LABELS.length - 1);
  const bulletCount = sub >= 4 ? SUMMARY_BULLETS.length : Math.max(0, sub - 3);

  return (
    <div className="absolute inset-0 flex flex-col gap-2 overflow-hidden p-2">
      <div
        className="ml-auto max-w-[95%] rounded-2xl border border-[#d4d9c8] px-2.5 py-1.5 text-[11px] text-[#2f3a20] shadow-sm"
        style={{ background: 'linear-gradient(180deg, #f8faf2 0%, #f2f4e5 100%)' }}
      >
        Summarize this page
      </div>
      {showBusy && (
        <div className="rounded-xl border border-[#d4d9c8] bg-white px-2.5 py-2 text-[11px] text-oasis-green-800 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-4 w-4" aria-hidden>
              {!prefersReducedMotion && (
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7a9200]/25"
                  style={{ animationDuration: '1.6s' }}
                />
              )}
              <span className="relative inline-flex h-4 w-4 rounded-full bg-[#7a9200]/18" />
            </span>
            <span className="font-medium text-[#495800]">{THINKING_LABELS[thinkingIndex]}</span>
          </div>
        </div>
      )}
      {sub >= 4 && (
        <div className="rounded-xl border border-[#d4d9c8] bg-white px-2.5 py-2 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#7a9200]">Summary</p>
          <ul className="mt-1.5 space-y-1">
            {SUMMARY_BULLETS.slice(0, bulletCount).map((b) => (
              <li key={b} className="flex gap-1.5 text-[11px] leading-snug text-[#2f3a20]">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#7a9200]" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/** Scene 1: tab group confirmation */
function AssistantPanelTabGroup() {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 overflow-hidden p-2">
      <div
        className="ml-auto max-w-[95%] rounded-2xl border border-[#d4d9c8] px-2.5 py-1.5 text-[11px] text-[#2f3a20] shadow-sm"
        style={{ background: 'linear-gradient(180deg, #f8faf2 0%, #f2f4e5 100%)' }}
      >
        Add this tab to my Research group
      </div>
      <div className="rounded-xl border border-[#d4d9c8] bg-white px-2.5 py-2 text-[11px] text-[#2f3a20] shadow-sm">
        <p className="font-medium text-[#495800]">Done.</p>
        <p className="mt-1 text-[#666] leading-relaxed">
          Added <span className="font-medium text-[#2f3a20]">Async article</span> to{' '}
          <span className="font-semibold text-[#7a9200]">Research</span>. Your tab strip now shows the group marker.
        </p>
      </div>
    </div>
  );
}

/** Scene 2: history hit */
function AssistantPanelHistory() {
  return (
    <div className="absolute inset-0 flex flex-col gap-2 overflow-hidden p-2">
      <div
        className="ml-auto max-w-[95%] rounded-2xl border border-[#d4d9c8] px-2.5 py-1.5 text-[11px] text-[#2f3a20] shadow-sm"
        style={{ background: 'linear-gradient(180deg, #f8faf2 0%, #f2f4e5 100%)' }}
      >
        Find that article about async remote work
      </div>
      <div className="rounded-xl border border-[#d4d9c8] bg-white px-2.5 py-2 text-[11px] text-[#2f3a20] shadow-sm">
        <p className="font-medium text-[#495800]">Found a strong match in your history.</p>
        <p className="mt-1 text-[#666] leading-relaxed">
          Top result: <span className="font-medium text-[#2f3a20]">Async-first norms…</span> (Tuesday). Want me to open
          it or add it to a tab group?
        </p>
      </div>
    </div>
  );
}

/**
 * Multi-scene browser mock: article summary → tab group → semantic history.
 * Fixed outer height to avoid layout shift; reduced motion disables scene loop.
 */
export function OasisBrowserAssistantMock() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [sceneIndex, setSceneIndex] = useState(0);

  useLayoutEffect(() => {
    if (prefersReducedMotion) setSceneIndex(0);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setSceneIndex((s) => (s + 1) % 3);
    }, SCENE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  const sceneMotion = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
  const sceneTransition = prefersReducedMotion ? { duration: 0 } : subtleTransition;

  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-[#d4d9c8] shadow-lg"
      style={{ background: surface, fontFamily: 'system-ui, sans-serif' }}
      role="img"
      aria-label="Illustration of Oasis browser with AI assistant: summarizing an article, organizing a tab group, and searching history by meaning"
    >
      <BrowserChrome sceneIndex={sceneIndex} />
      <div className="flex h-[340px] min-h-[340px] sm:h-[380px] sm:min-h-[380px]">
        <div className="relative min-w-0 flex-1 overflow-hidden border-r border-black/6 bg-white">
          <AnimatePresence mode="wait">
            {sceneIndex === 2 ? (
              <motion.div key="hist" className="absolute inset-0" {...sceneMotion} transition={sceneTransition}>
                <OasisSceneHistoryBody />
              </motion.div>
            ) : (
              <motion.div
                key={sceneIndex === 0 ? 'art0' : 'art1'}
                className="absolute inset-0"
                {...sceneMotion}
                transition={sceneTransition}
              >
                <OasisSceneArticleBody showGroupHint={sceneIndex === 1} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className="flex w-[42%] max-w-[260px] shrink-0 flex-col sm:max-w-[280px]"
          style={{ background: surface }}
        >
          <AssistantHeader />
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {sceneIndex === 0 && (
                <motion.div key="a0" className="absolute inset-0" {...sceneMotion} transition={sceneTransition}>
                  <AssistantPanelSummarize prefersReducedMotion={prefersReducedMotion} />
                </motion.div>
              )}
              {sceneIndex === 1 && (
                <motion.div key="a1" className="absolute inset-0" {...sceneMotion} transition={sceneTransition}>
                  <AssistantPanelTabGroup />
                </motion.div>
              )}
              {sceneIndex === 2 && (
                <motion.div key="a2" className="absolute inset-0" {...sceneMotion} transition={sceneTransition}>
                  <AssistantPanelHistory />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AssistantComposer />
        </div>
      </div>
      <div className="flex items-center justify-center gap-1.5 border-t border-black/5 py-2" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full transition-colors"
            style={{ background: sceneIndex === i ? primaryGreen : '#c8d0b8' }}
          />
        ))}
      </div>
    </motion.div>
  );
}
