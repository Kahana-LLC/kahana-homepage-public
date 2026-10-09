import { useState } from 'react';
import { CheckIcon, EyeSlashIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const OPTIONS = [
  {
    id: 'allow',
    enabled: true,
    title: 'Show in AI searches',
    subtitle: 'OK for AI tools to find this hub',
    Icon: CpuChipIcon,
  },
  {
    id: 'deny',
    enabled: false,
    title: 'Keep off AI searches',
    subtitle: 'Do not list this hub for AI',
    Icon: EyeSlashIcon,
  },
];

export default function AiIndexingControlMock() {
  const [enabled, setEnabled] = useState(false);
  const [acknowledged, setAcknowledged] = useState(true);

  const ackLabel = enabled
    ? 'Confirm I want this content to appear in AI searches'
    : 'Confirm I want to keep this content off AI searches';

  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-white text-left shadow-[0_12px_40px_rgba(59,47,26,0.06)]">
      <div className="border-b border-[#E4D9C4] bg-[#EDE6D2] px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
          Hub settings · Policies · AI indexing
        </p>
        <p className="mt-1 text-sm text-[#5C4520]">
          The same control creators already have in the app. Default is off.
        </p>
      </div>

      <div className="grid gap-3 p-5 sm:grid-cols-2">
        {OPTIONS.map((option) => {
          const selected = enabled === option.enabled;
          const { Icon } = option;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setEnabled(option.enabled);
                setAcknowledged(false);
              }}
              className={`ai-indexing-tile relative ${selected ? 'ai-indexing-tile--on' : ''}`}
            >
              {selected ? (
                <span
                  className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#5C4520] text-white"
                  aria-hidden
                >
                  <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              ) : null}
              <Icon
                className={`h-6 w-6 ${selected ? 'text-[#5C4520]' : 'text-[#8A6622]'}`}
                aria-hidden
              />
              <span className="pr-6 text-sm font-semibold text-[#3B2F1A]">{option.title}</span>
              <span className="text-xs leading-snug text-[#666666]">{option.subtitle}</span>
              {selected ? (
                <span className="text-xs font-semibold text-[#5C4520]">Selected</span>
              ) : null}
            </button>
          );
        })}
      </div>

      <label className="flex cursor-pointer items-start gap-3 border-t border-[#E4D9C4] px-5 py-4">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-[#C4A574] text-[#5C4520] focus:ring-[#8A6622]"
          checked={acknowledged}
          onChange={(event) => setAcknowledged(event.target.checked)}
        />
        <span className="text-sm leading-snug text-[#3B2F1A]">{ackLabel}</span>
      </label>

      <div className="border-t border-[#E4D9C4] bg-[#F7F3EA] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
          What the hub page advertises
        </p>
        <dl className="mt-3 space-y-3">
          <div>
            <dt className="text-xs font-medium text-[#5C4520]">Ordinary search</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              <span className="ai-robots-chip">index</span>
              <span className="ai-robots-chip">follow</span>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#5C4520]">AI training crawls</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {enabled ? (
                <span className="text-sm text-[#3B2F1A]">Allowed — no extra skip signals</span>
              ) : (
                <>
                  <span className="ai-robots-chip">noai</span>
                  <span className="ai-robots-chip">noimageai</span>
                </>
              )}
            </dd>
          </div>
        </dl>
        <p className="mt-3 text-sm leading-relaxed text-[#666666]">
          {enabled
            ? 'You opted in. Reputable crawlers are not asked to skip this hub for AI use.'
            : 'Listed hubs can still appear in ordinary search. AI training scrapes are asked not to use this hub.'}
        </p>
      </div>
    </div>
  );
}
