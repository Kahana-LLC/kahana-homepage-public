import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import BrandMark from './BrandMark';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';
import {
  CREATOR_STACK_LINES,
  KAHANA_STACK_PLAN,
  KAHANA_STACK_PRICE_USD,
  formatUsd,
  stackOtherwiseTotal,
} from '../../data/creator-stack-compare';

function ReplacesLine({ names }) {
  return (
    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.7rem] font-medium text-[#8A9378]">
      <span>Replaces</span>
      {names.map((name, i) => (
        <span key={name} className="inline-flex items-center gap-1 normal-case tracking-normal">
          {i > 0 ? <span aria-hidden>·</span> : null}
          <BrandMark name={name} size={13} />
          {name}
        </span>
      ))}
    </p>
  );
}

export default function CreatorStackLedger({ t }) {
  const otherwise = stackOtherwiseTotal();
  const trialUrl = productHref('/billing?intent=sell&trial=growth', 'compare_stack_trial');

  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
        {t('compare.stackTitle')}
      </h2>
      <p className="mt-3 text-base text-[#5C4520] sm:text-lg">{t('compare.stackLead')}</p>

      <div className="mt-10 rounded-[1.75rem] bg-white px-5 py-6 text-left shadow-[0_24px_60px_-28px_rgba(59,47,26,0.35)] ring-1 ring-[#E4D9C4] sm:px-8 sm:py-8">
        <ul className="m-0 list-none divide-y divide-[#EDE6D2] p-0">
          {CREATOR_STACK_LINES.map((line) => (
            <li key={line.id} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0 sm:gap-4">
              <span className="mt-0.5 w-8 shrink-0 text-center text-xl leading-none" aria-hidden>
                {line.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-base font-semibold text-[#3B2F1A]">{line.title}</p>
                <ReplacesLine names={line.replaces} />
              </div>
              <p className="shrink-0 pt-0.5 text-base font-semibold tabular-nums text-[#3B2F1A]">
                {formatUsd(line.priceUsd)}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-2 border-t border-[#3B2F1A]/15 pt-4">
          <div className="flex items-center justify-between gap-3 py-1.5">
            <p className="flex items-center gap-2 text-sm font-medium text-[#B8A48A] line-through decoration-[#C4B49A]">
              <span className="text-base no-underline" aria-hidden>
                ✕
              </span>
              {t('compare.stackOtherwise')}
            </p>
            <p className="text-lg font-semibold tabular-nums text-[#B42318] line-through decoration-[#B42318]/70">
              {formatUsd(otherwise)}
              <span className="text-sm font-medium">/mo</span>
            </p>
          </div>

          <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl bg-[#F7F3EA] px-3 py-3 sm:px-4">
            <p className="flex items-center gap-2 text-base font-semibold text-[#3B2F1A]">
              <img
                src="/kahana-bonsai.svg"
                alt=""
                width={22}
                height={26}
                className="h-[1.35rem] w-auto shrink-0"
              />
              {t('compare.stackKahanaLine', { plan: KAHANA_STACK_PLAN })}
            </p>
            <p className="text-lg font-semibold tabular-nums text-[#8A6622]">
              {formatUsd(KAHANA_STACK_PRICE_USD)}
              <span className="text-sm font-medium">/mo</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={trialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
          onClick={() => trackButtonClick('compare_stack_trial')}
        >
          {t('compare.stackTrialCta')}
          <ArrowRightIcon className="h-4 w-4" aria-hidden />
        </a>
        <Link
          href="/pricing"
          className="btn-secondary inline-flex items-center justify-center no-underline"
          onClick={() => trackButtonClick('compare_stack_pricing')}
        >
          {t('compare.stackPricingCta')}
        </Link>
      </div>
    </div>
  );
}
