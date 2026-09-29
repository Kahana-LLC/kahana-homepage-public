'use client';

import { useState } from 'react';

const CATEGORIES = ['Answer quality', 'Behavior preference', 'Incorrect', 'Unsafe / concerning', 'Other'];
const GOOD_BADGES = ['Helpful', 'Fast', 'Clear', 'Accurate', 'Actionable'];
const BAD_BADGES = ['Confusing', 'Incomplete', 'Wrong', 'Off-topic', 'Unhelpful'];

export default function AssistantTrainPreview() {
  const [sentiment, setSentiment] = useState('up');
  const good = sentiment === 'up';
  const badges = good ? GOOD_BADGES : BAD_BADGES;
  const activeBadge = good ? 'Clear' : 'Incomplete';
  const category = good ? 'Answer quality' : 'Incorrect';
  const note = good
    ? 'The steps named the Library switch. Keep answers this specific.'
    : 'The reply skipped the hub price and the affiliate percentage.';

  return (
    <figure className="mx-auto my-8 w-full max-w-md">
      <div className="overflow-hidden rounded-[20px] bg-[#FFFDF8] shadow-[0_16px_40px_rgba(59,47,26,0.12)] ring-1 ring-[#E4D9C4]">
        <div className="flex items-center justify-between border-b border-[#E4D9C4] px-4 py-3">
          <p className="font-bricolage text-lg font-semibold tracking-tight text-[#3B2F1A]">
            Train Kahana assistant
          </p>
          <span className="text-[#8A6622]" aria-hidden>×</span>
        </div>
        <div className="space-y-3 px-4 py-4">
          <div className="grid grid-cols-2 gap-1 rounded-full bg-[#F3E6C4] p-1 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setSentiment('up')}
              className={`rounded-full px-3 py-2 ${good ? 'bg-[#FFFDF8] text-[#3B2F1A] shadow-sm' : 'text-[#8A6622]'}`}
            >
              Good response
            </button>
            <button
              type="button"
              onClick={() => setSentiment('down')}
              className={`rounded-full px-3 py-2 ${!good ? 'bg-[#FFFDF8] text-[#3B2F1A] shadow-sm' : 'text-[#8A6622]'}`}
            >
              Bad response
            </button>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#3B2F1A]">Category</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {CATEGORIES.map((item) => {
                const on = item === category;
                return (
                  <span
                    key={item}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      on ? 'bg-[#3B2F1A] text-[#F7F3EA]' : 'bg-[#F7F3EA] text-[#5C4520] ring-1 ring-[#E4D9C4]'
                    }`}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#3B2F1A]">What stood out</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {badges.map((badge) => {
                const on = badge === activeBadge;
                return (
                  <span
                    key={badge}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      on ? 'bg-[#EDE6D2] text-[#3B2F1A] ring-1 ring-[#8A6622]' : 'bg-[#FFFDF8] text-[#5C4520] ring-1 ring-[#E4D9C4]'
                    }`}
                  >
                    {badge}
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#3B2F1A]">In your own words</p>
            <div className="mt-1.5 min-h-[88px] rounded-xl bg-[#F3E6C4]/70 px-3 py-2 text-sm leading-relaxed text-[#3B2F1A]">
              {note}
            </div>
            <p className="mt-1 text-[11px] text-[#8A9378]">
              At least 30 characters. What worked, what failed, or how Kahana should behave next time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1 rounded-full bg-[#F3E6C4] p-1 text-sm font-semibold">
            <span className="rounded-full bg-[#FFFDF8] px-3 py-2 text-center text-[#3B2F1A] shadow-sm">Personalized</span>
            <span className="px-3 py-2 text-center text-[#8A6622]">Anonymous</span>
          </div>
          <p className="text-[11px] leading-relaxed text-[#666666]">
            Anonymous still uploads feedback to Kahana for product improvement; your user ID is not stored on the training record.
          </p>

          <label className="flex items-center gap-2 text-sm text-[#3B2F1A]">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#3B2F1A] text-[10px] text-[#F7F3EA]">✓</span>
            Include recent chat context
          </label>
          <label className="flex items-center gap-2 text-sm text-[#3B2F1A]">
            <span className="inline-block h-4 w-4 rounded-full ring-1 ring-[#C4B48A]" />
            It’s OK to contact me about this feedback
          </label>

          <div className="rounded-xl bg-[#C4A15A] py-2.5 text-center text-sm font-semibold text-[#241C10]">
            Submit training feedback
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-xs text-[#8A9378]">
        Thumbs up opens Good response. Thumbs down opens Bad response. Switch them above.
      </figcaption>
    </figure>
  );
}
