'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { USE_CASE_STORIES } from '../../data/use-case-stories';

const STORY_BY_ID = Object.fromEntries(USE_CASE_STORIES.map((s) => [s.id, s]));

/** Natural-language asks → creator hubs that cycle in the demo chat. */
const DEMO_EXCHANGES = [
  {
    id: 'amy',
    query: "I'm looking for internship tools and tips",
    reply: "Found a hub that matches. Here is Amy Wang's pack for internships and research.",
  },
  {
    id: 'kelsey',
    query: 'How do I grow on Pinterest for my small business?',
    reply: "Here's Kelsey Vetter's Pinterest workshop hub: session, slides, and checklists in one place.",
  },
  {
    id: 'olivia',
    query: 'I want a practical guide to manifestation',
    reply: "Olivia Mancuso's guide came up. Vision boarding and techniques people unlock when they want the full practice.",
  },
  {
    id: 'tay',
    query: 'Help me negotiate brand deals as a creator',
    reply: "Tay Ladd's brand-deal bundle matches that. Pricing, partnerships, and negotiation in one unlock.",
  },
  {
    id: 'benjamin',
    query: "What's it actually like to be an NFL player?",
    reply: "Benjamin St-Juste's hub goes behind Sunday: training, prehab, and mental prep fans only glimpse on social.",
  },
  {
    id: 'alex',
    query: 'Looking for a summer fitness and nutrition plan',
    reply: "Alex Klebasko's Summer Body Blueprint is a strong fit: training and nutrition decisions in one hub.",
  },
].map((ex) => {
  const story = STORY_BY_ID[ex.id];
  return {
    ...ex,
    hubTitle: story?.hubTitle,
    hubUrl: story?.hubUrl,
    creatorName: story?.name,
    coverSrc: story?.coverSrc,
    avatarSrc: story?.image,
    price: story?.price,
  };
});

const MAX_TURNS = 6;
const PAUSE_AFTER_REPLY_MS = 3200;

function HubResultCard({ exchange }) {
  const { hubUrl, coverSrc, price, hubTitle, creatorName, avatarSrc } = exchange;
  return (
    <a
      href={hubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 block overflow-hidden rounded-xl bg-white no-underline ring-1 ring-[#E4D9C4] transition hover:ring-[#8A6622]"
    >
      <span className="relative block aspect-[16/9] bg-[#EDE6D2]">
        <Image src={coverSrc} alt="" fill sizes="320px" className="object-cover" />
        {price ? (
          <span className="absolute right-2 top-2 rounded-full bg-[#3B2F1A]/90 px-2 py-0.5 text-[10px] font-semibold text-[#F7F3EA]">
            {price}
          </span>
        ) : null}
        {avatarSrc ? (
          <span className="absolute -bottom-4 left-3 h-10 w-10 overflow-hidden rounded-full border-[2.5px] border-white shadow-sm">
            <Image src={avatarSrc} alt="" fill sizes="40px" className="object-cover" />
          </span>
        ) : null}
      </span>
      <span className={`block px-3 pb-2.5 ${avatarSrc ? 'pt-6' : 'pt-2.5'}`}>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
          Suggested hub
        </span>
        <span className="mt-0.5 block font-semibold leading-snug text-[#3B2F1A]">{hubTitle}</span>
        <span className="mt-0.5 block text-xs text-[#666666]">{creatorName}</span>
      </span>
    </a>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDE6D2] text-[10px] font-semibold text-[#5C4520]">
        AI
      </span>
      <div className="rounded-2xl rounded-bl-md bg-[#F7F3EA] px-3.5 py-3">
        <span className="flex gap-1" aria-label="Thinking">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8A6622]" />
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8A6622]"
            style={{ animationDelay: '0.15s' }}
          />
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8A6622]"
            style={{ animationDelay: '0.3s' }}
          />
        </span>
      </div>
    </div>
  );
}

/**
 * Infinite chat demo: NL asks cycle through creator hubs (Amy first).
 * Messages stack and scroll; never wipes the thread blank. Parent owns section copy.
 */
export default function SuggestionEngineChatMock() {
  const [turns, setTurns] = useState([]);
  const [typing, setTyping] = useState(false);
  const [exchangeIndex, setExchangeIndex] = useState(0);
  const scrollRef = useRef(null);
  const pendingRef = useRef([]);
  const turnIdRef = useRef(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: reducedMotion.current ? 'auto' : 'smooth' });
  }, [turns, typing]);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      reducedMotion.current = true;
      const first = DEMO_EXCHANGES[0];
      const second = DEMO_EXCHANGES[1];
      setTurns([
        { id: 'rm-u-0', role: 'user', text: first.query },
        { id: 'rm-a-0', role: 'assistant', exchange: first },
        { id: 'rm-u-1', role: 'user', text: second.query },
        { id: 'rm-a-1', role: 'assistant', exchange: second },
      ]);
      return undefined;
    }

    const clearPending = () => {
      pendingRef.current.forEach(clearTimeout);
      pendingRef.current = [];
    };

    const schedule = (fn, ms) => {
      const id = window.setTimeout(fn, ms);
      pendingRef.current.push(id);
      return id;
    };

    let cancelled = false;
    let nextIndex = 0;

    const trimTurns = (list) => {
      if (list.length <= MAX_TURNS * 2) return list;
      return list.slice(-(MAX_TURNS * 2));
    };

    const runExchange = () => {
      if (cancelled) return;
      const exchange = DEMO_EXCHANGES[nextIndex % DEMO_EXCHANGES.length];
      setExchangeIndex(nextIndex % DEMO_EXCHANGES.length);
      nextIndex += 1;

      const userId = `u-${turnIdRef.current++}`;
      const assistantId = `a-${turnIdRef.current++}`;

      setTyping(false);
      setTurns((prev) => trimTurns([...prev, { id: userId, role: 'user', text: exchange.query }]));

      schedule(() => {
        if (cancelled) return;
        setTyping(true);
      }, 500);

      schedule(() => {
        if (cancelled) return;
        setTyping(false);
        setTurns((prev) =>
          trimTurns([...prev, { id: assistantId, role: 'assistant', exchange }])
        );
        schedule(runExchange, PAUSE_AFTER_REPLY_MS);
      }, 1800);
    };

    schedule(runExchange, 400);

    return () => {
      cancelled = true;
      clearPending();
    };
  }, []);

  const activeHint = DEMO_EXCHANGES[exchangeIndex]?.creatorName;

  return (
    <aside
      className="mx-auto w-full max-w-md overflow-hidden rounded-[20px] bg-white shadow-[0_1px_0_rgba(59,47,26,0.06)]"
      aria-label="Example: natural-language search surfaces creator hubs in the Library"
    >
      <div className="flex items-center gap-3 border-b border-[#E4D9C4] px-4 py-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDE6D2] font-bricolage text-sm font-semibold text-[#5C4520]">
          AI
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-bricolage text-base font-semibold tracking-tight text-[#3B2F1A]">
              Kahana AI Agent
            </p>
            <span className="rounded-full bg-[#EDE6D2] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5C4520]">
              Demo
            </span>
          </div>
          <p className="truncate text-xs text-[#666666]">
            Library suggestion
            {activeHint ? ` · ${activeHint}` : ''}
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-[#FFFDF8]">
        <div
          ref={scrollRef}
          className="flex h-[380px] flex-col gap-3 overflow-y-auto px-4 py-4 scroll-smooth"
          aria-live="polite"
        >
          {turns.length === 0 && !typing ? (
            <div className="flex flex-1 flex-col justify-end gap-3" aria-hidden>
              <div className="ml-auto h-10 w-[70%] rounded-2xl bg-[#EDE6D2]/40" />
            </div>
          ) : null}

          {turns.map((turn) =>
            turn.role === 'user' ? (
              <div
                key={turn.id}
                className="suggestion-chat-in ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#3B2F1A] px-3.5 py-2.5 text-sm leading-relaxed text-[#F7F3EA]"
              >
                {turn.text}
              </div>
            ) : (
              <div key={turn.id} className="suggestion-chat-in flex items-start gap-2">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDE6D2] text-[10px] font-semibold text-[#5C4520]">
                  AI
                </span>
                <div className="min-w-0 flex-1 rounded-2xl rounded-bl-md bg-[#F7F3EA] px-3.5 py-3">
                  <p className="text-sm leading-relaxed text-[#3B2F1A]">{turn.exchange.reply}</p>
                  <HubResultCard exchange={turn.exchange} />
                </div>
              </div>
            )
          )}

          {typing ? <TypingBubble /> : null}
        </div>

        <div className="border-t border-[#E4D9C4]/60 px-4 py-3">
          <div className="flex items-center gap-2 rounded-full border border-[#E4D9C4] bg-[#F7F3EA] px-3 py-2">
            <p className="min-w-0 flex-1 truncate text-xs text-[#8A9378]">
              Ask anything about the Library...
            </p>
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDE6D2] text-[#5C4520]"
              aria-hidden
            >
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M2.5 10.5L16 3.5l-3.2 13.2-3.4-5.1L2.5 10.5z" />
              </svg>
            </span>
          </div>
          <p className="mt-2 text-center text-[10px] text-[#8A9378]">
            Illustrative demo. Not a live chat.
          </p>
        </div>
      </div>

      <style jsx>{`
        .suggestion-chat-in {
          animation: suggestion-chat-in 0.45s ease-out;
        }
        @keyframes suggestion-chat-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </aside>
  );
}
