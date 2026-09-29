'use client';

import { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const EXCHANGES = [
  {
    id: 'howto',
    query: 'How do I list a hub on the Library?',
    kind: 'steps',
    reply: 'Open hub settings, set visibility to public, then turn on Visible on Library.',
  },
  {
    id: 'create',
    query: 'Create a hub called Clear recipes.',
    kind: 'confirm',
    reply: 'Ready when you are. Nothing is saved until you confirm.',
    cardTitle: 'Create hub',
    cardDetail: 'Title: Clear recipes',
  },
  {
    id: 'good',
    query: 'That listing answer was exactly what I needed.',
    kind: 'train',
    sentiment: 'up',
    reply: 'Glad that helped. You can reinforce it so the next answer stays this clear.',
    category: 'Answer quality',
    badges: ['Helpful', 'Clear'],
    note: 'The steps named the Library switch. Keep answers this specific.',
  },
  {
    id: 'bad',
    query: 'You skipped the price when I asked about affiliate links.',
    kind: 'train',
    sentiment: 'down',
    reply: 'That reply missed the price. Mark it so the next one includes it.',
    category: 'Incorrect',
    badges: ['Incomplete'],
    note: 'Include the hub price and the affiliate percentage before the confirm card.',
  },
];

const PAUSE_MS = 3400;

function Phoenix({ size }) {
  return (
    <DotLottieReact
      src="/images/hero-phoenix.json"
      loop
      autoplay
      style={{ width: size, height: size }}
    />
  );
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EDE6D2]">
        <Phoenix size={22} />
      </span>
      <div className="rounded-2xl rounded-bl-md bg-[#F7F3EA] px-3.5 py-3">
        <span className="flex gap-1" aria-label="Thinking">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8A6622]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8A6622]" style={{ animationDelay: '0.15s' }} />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8A6622]" style={{ animationDelay: '0.3s' }} />
        </span>
      </div>
    </div>
  );
}

function TrainCard({ exchange }) {
  const good = exchange.sentiment === 'up';
  return (
    <div className="mt-3 rounded-xl bg-white p-3 ring-1 ring-[#E4D9C4]">
      <p className="text-sm font-semibold text-[#3B2F1A]">Train Kahana assistant</p>
      <div className="mt-2 grid grid-cols-2 gap-1 rounded-full bg-[#F7F3EA] p-1 text-[11px] font-semibold">
        <span className={`rounded-full px-2 py-1 text-center ${good ? 'bg-white text-[#3B2F1A] shadow-sm' : 'text-[#8A6622]'}`}>
          Good response
        </span>
        <span className={`rounded-full px-2 py-1 text-center ${!good ? 'bg-white text-[#3B2F1A] shadow-sm' : 'text-[#8A6622]'}`}>
          Bad response
        </span>
      </div>
      <p className="mt-2 text-[11px] font-semibold text-[#3B2F1A]">Category</p>
      <span className="mt-1 inline-flex rounded-full bg-[#3B2F1A] px-2 py-0.5 text-[11px] font-semibold text-[#F7F3EA]">
        {exchange.category}
      </span>
      <p className="mt-2 text-[11px] font-semibold text-[#3B2F1A]">What stood out</p>
      <div className="mt-1 flex flex-wrap gap-1">
        {exchange.badges.map((badge) => (
          <span key={badge} className="rounded-full bg-[#EDE6D2] px-2 py-0.5 text-[11px] font-semibold text-[#5C4520]">
            {badge}
          </span>
        ))}
      </div>
      <p className="mt-2 text-[11px] font-semibold text-[#3B2F1A]">In your own words</p>
      <p className="mt-1 rounded-lg bg-[#F7F3EA] px-2 py-1.5 text-[11px] leading-relaxed text-[#3B2F1A]">
        {exchange.note}
      </p>
      <span className="mt-2 inline-flex rounded-lg bg-[#C4A15A] px-2.5 py-1 text-[11px] font-semibold text-[#241C10]">
        Submit training feedback
      </span>
    </div>
  );
}

function AssistantTurn({ exchange }) {
  return (
    <div className="assistant-guide-in flex items-start gap-2">
      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EDE6D2]">
        <Phoenix size={22} />
      </span>
      <div className="min-w-0 flex-1 rounded-2xl rounded-bl-md bg-[#F7F3EA] px-3.5 py-3">
        <p className="text-sm leading-relaxed text-[#3B2F1A]">{exchange.reply}</p>
        {exchange.kind === 'confirm' ? (
          <div className="mt-3 rounded-xl bg-white p-3 ring-1 ring-[#E4D9C4]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A6622]">Confirm</p>
            <p className="mt-1 text-sm font-semibold text-[#3B2F1A]">{exchange.cardTitle}</p>
            <p className="mt-0.5 text-xs text-[#666666]">{exchange.cardDetail}</p>
            <span className="mt-2 inline-flex rounded-lg bg-[#C4A15A] px-2.5 py-1 text-xs font-semibold text-[#241C10]">
              {exchange.cardTitle}
            </span>
          </div>
        ) : null}
        {exchange.kind === 'train' ? <TrainCard exchange={exchange} /> : null}
      </div>
    </div>
  );
}

export default function AssistantGuideChat() {
  const [turns, setTurns] = useState([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const pendingRef = useRef([]);
  const turnIdRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [turns, typing]);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTurns(
        EXCHANGES.slice(0, 2).flatMap((exchange, index) => [
          { id: `u-${index}`, role: 'user', text: exchange.query },
          { id: `a-${index}`, role: 'assistant', exchange },
        ])
      );
      return undefined;
    }

    let cancelled = false;
    let nextIndex = 0;
    const schedule = (fn, ms) => {
      const id = window.setTimeout(fn, ms);
      pendingRef.current.push(id);
    };
    const trim = (list) => (list.length > 8 ? list.slice(-8) : list);

    const run = () => {
      if (cancelled) return;
      const exchange = EXCHANGES[nextIndex % EXCHANGES.length];
      nextIndex += 1;
      const userId = `u-${turnIdRef.current++}`;
      const assistantId = `a-${turnIdRef.current++}`;
      setTyping(false);
      setTurns((prev) => trim([...prev, { id: userId, role: 'user', text: exchange.query }]));
      schedule(() => {
        if (!cancelled) setTyping(true);
      }, 450);
      schedule(() => {
        if (cancelled) return;
        setTyping(false);
        setTurns((prev) => trim([...prev, { id: assistantId, role: 'assistant', exchange }]));
        schedule(run, PAUSE_MS);
      }, 1600);
    };

    schedule(run, 400);
    return () => {
      cancelled = true;
      pendingRef.current.forEach(clearTimeout);
      pendingRef.current = [];
    };
  }, []);

  return (
    <aside
      className="mx-auto my-8 w-full max-w-md overflow-hidden rounded-[20px] bg-white shadow-[0_1px_0_rgba(59,47,26,0.06)]"
      aria-label="Example chat with Kahana’s assistant, including training feedback"
    >
      <div className="flex items-center gap-3 border-b border-[#E4D9C4] px-4 py-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EDE6D2]">
          <Phoenix size={28} />
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
          <p className="truncate text-xs text-[#666666]">Ask, confirm, or train a reply</p>
        </div>
      </div>
      <div className="flex flex-col bg-[#FFFDF8]">
        <div ref={scrollRef} className="flex h-[420px] flex-col gap-3 overflow-y-auto px-4 py-4" aria-live="polite">
          {turns.map((turn) =>
            turn.role === 'user' ? (
              <div
                key={turn.id}
                className="assistant-guide-in ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#3B2F1A] px-3.5 py-2.5 text-sm leading-relaxed text-[#F7F3EA]"
              >
                {turn.text}
              </div>
            ) : (
              <AssistantTurn key={turn.id} exchange={turn.exchange} />
            )
          )}
          {typing ? <TypingBubble /> : null}
        </div>
        <div className="border-t border-[#E4D9C4]/60 px-4 py-3">
          <div className="flex items-center gap-2 rounded-full border border-[#E4D9C4] bg-[#F7F3EA] px-3 py-2">
            <p className="min-w-0 flex-1 truncate text-xs text-[#8A9378]">
              Message Kahana — @ for hubs, clubs &amp; files
            </p>
          </div>
          <p className="mt-2 text-center text-[10px] text-[#8A9378]">Illustrative demo. Not a live chat.</p>
        </div>
      </div>
      <style jsx>{`
        .assistant-guide-in {
          animation: assistant-guide-in 0.45s ease-out;
        }
        @keyframes assistant-guide-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </aside>
  );
}
