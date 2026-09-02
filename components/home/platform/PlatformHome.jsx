import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useMemo } from 'react';
import {
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
  BanknotesIcon,
  BookOpenIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  EyeIcon,
  FolderPlusIcon,
  GlobeAltIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  NoSymbolIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  TagIcon,
} from '@heroicons/react/24/outline';
import FadeInSection from '../../FadeInSection';
import { APP_URL } from '../../nav/navConfig';
import { trackButtonClick } from '../../../utils/analytics';
import AuraLikeAnimation from './AuraLikeAnimation';
import CategoryMarquee from './CategoryMarquee';
import RainbowHoverCard from './RainbowHoverCard';
import FaqBrowse from '../../faq/FaqBrowse';
import UseCaseStoryCards from '../../use-cases/UseCaseStoryCards';
import { EXPLORE_CATEGORIES } from '../../../data/exploreCategories';
import { useMarketingI18n } from '../../../contexts/MarketingI18n';
import { withAppLanguageParam } from '../../../lib/contentLanguage';

const HeroOwlLottie = dynamic(() => import('./HeroOwlLottie'), { ssr: false });

/** Public Explore (marketing host) — not app.kahana.io */
const EXPLORE_URL = 'https://kahana.io/explore';

function PrimaryCta({ children, className = '', trackingId, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary inline-flex items-center justify-center gap-2 no-underline ${className}`}
      onClick={() => trackingId && trackButtonClick(trackingId)}
    >
      <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
      {children}
    </a>
  );
}

function SecondaryCta({ children, className = '', href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-secondary inline-flex items-center justify-center gap-2 no-underline ${className}`}
    >
      <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
      {children}
    </a>
  );
}

function SectionShell({ id, children, className = '' }) {
  return (
    <section id={id} className={`px-6 py-20 sm:px-10 lg:px-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function BenefitTiles({ items }) {
  return (
    <ul className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-stretch">
      {items.map((item) => {
        const { Icon } = item;
        return (
          <li key={item.title} className="flex flex-1">
            <RainbowHoverCard
              className="h-full w-full"
              innerClassName="flex flex-col bg-white px-6 py-7 sm:px-8"
            >
              <div className="flex items-center gap-4">
                <span className="rainbow-hover-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9DACB] text-[#4F5140]">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="mt-4 text-[#666666]">{item.body}</p>
              {item.learnMoreHref && item.learnMoreLabel ? (
                <p className="mt-3">
                  <Link
                    href={item.learnMoreHref}
                    className="text-base font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
                  >
                    {item.learnMoreLabel}
                  </Link>
                </p>
              ) : null}
            </RainbowHoverCard>
          </li>
        );
      })}
    </ul>
  );
}

export default function PlatformHome() {
  const { t, preference } = useMarketingI18n();
  const createUrl = useMemo(() => withAppLanguageParam(APP_URL, preference), [preference]);
  const exploreUrl = useMemo(() => withAppLanguageParam(EXPLORE_URL, preference), [preference]);

  const howItWorks = useMemo(
    () => [
      { title: t('home.howLearnTitle'), body: t('home.howLearnBody'), Icon: EyeIcon },
      { title: t('home.howCreateTitle'), body: t('home.howCreateBody'), Icon: FolderPlusIcon },
      { title: t('home.howGrowTitle'), body: t('home.howGrowBody'), Icon: ArrowTrendingUpIcon },
    ],
    [t],
  );

  const auraRules = useMemo(
    () => [
      {
        title: t('home.auraRuleBudgetTitle'),
        body: t('home.auraRuleBudgetBody'),
        Icon: SparklesIcon,
      },
      { title: t('home.auraRuleGiveTitle'), body: t('home.auraRuleGiveBody'), Icon: ArrowsRightLeftIcon },
      {
        title: t('home.auraRuleControlTitle'),
        body: t('home.auraRuleControlBody'),
        Icon: LockClosedIcon,
      },
      { title: t('home.auraRuleHubsTitle'), body: t('home.auraRuleHubsBody'), Icon: RectangleStackIcon },
      { title: t('home.auraRuleSelfTitle'), body: t('home.auraRuleSelfBody'), Icon: NoSymbolIcon },
      { title: t('home.auraRuleMoneyTitle'), body: t('home.auraRuleMoneyBody'), Icon: BanknotesIcon },
    ],
    [t],
  );

  const creatorBenefits = useMemo(
    () => [
      {
        title: t('home.creatorExposureTitle'),
        body: t('home.creatorExposureBody'),
        Icon: MegaphoneIcon,
        learnMoreHref: '/gain-exposure',
        learnMoreLabel: t('home.creatorExposureLearnMore'),
      },
      {
        title: t('home.creatorHelpTitle'),
        body: t('home.creatorHelpBody'),
        Icon: BookOpenIcon,
        learnMoreHref: '/help-others-learn',
        learnMoreLabel: t('home.creatorHelpLearnMore'),
      },
      {
        title: t('home.creatorEarnTitle'),
        body: t('home.creatorEarnBody'),
        Icon: CurrencyDollarIcon,
        learnMoreHref: '/earn-money',
        learnMoreLabel: t('home.creatorEarnLearnMore'),
      },
    ],
    [t],
  );

  const seekerBenefits = useMemo(
    () => [
      {
        title: t('home.seekerAccessTitle'),
        body: t('home.seekerAccessBody'),
        Icon: Squares2X2Icon,
        learnMoreHref: '/one-place',
        learnMoreLabel: t('home.seekerAccessLearnMore'),
      },
      {
        title: t('home.seekerCredibilityTitle'),
        body: t('home.seekerCredibilityBody'),
        Icon: ShieldCheckIcon,
        learnMoreHref: '/verifiable-credibility',
        learnMoreLabel: t('home.seekerCredibilityLearnMore'),
      },
      {
        title: t('home.seekerTailoredTitle'),
        body: t('home.seekerTailoredBody'),
        Icon: AdjustmentsHorizontalIcon,
        learnMoreHref: '/tailored-for-understanding',
        learnMoreLabel: t('home.seekerTailoredLearnMore'),
      },
    ],
    [t],
  );

  const optimizeSteps = useMemo(
    () => [
      {
        step: '01',
        title: t('home.optimize1Title'),
        body: t('home.optimize1Body'),
        Icon: FolderPlusIcon,
      },
      { step: '02', title: t('home.optimize2Title'), body: t('home.optimize2Body'), Icon: TagIcon },
      { step: '03', title: t('home.optimize3Title'), body: t('home.optimize3Body'), Icon: GlobeAltIcon },
      {
        step: '04',
        title: t('home.optimize4Title'),
        body: t('home.optimize4Body'),
        Icon: ChartBarIcon,
      },
      {
        step: '05',
        title: t('home.optimize5Title'),
        body: t('home.optimize5Body'),
        Icon: CurrencyDollarIcon,
      },
    ],
    [t],
  );

  return (
    <div className="bg-[#F7F3EA] text-[#3B2F1A]">
      <section className="relative overflow-x-hidden overflow-y-visible">
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_minmax(240px,360px)] lg:gap-16 lg:px-16 lg:py-24">
          <FadeInSection eager>
            <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#3B2F1A] sm:text-4xl md:text-5xl">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5C4520] sm:text-xl">
              {t('home.heroBody')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCta href={createUrl} trackingId="platform_hero_create">
                {t('home.create')}
              </PrimaryCta>
              <SecondaryCta href={exploreUrl}>{t('home.explore')}</SecondaryCta>
            </div>
          </FadeInSection>
          <FadeInSection eager delay={120} isImage>
            <HeroOwlLottie />
          </FadeInSection>
        </div>
      </section>

      <SectionShell id="aura" className="border-t border-[#E4D9C4]">
        <FadeInSection>
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">{t('home.auraTitle')}</h2>

            <RainbowHoverCard className="mt-8" innerClassName="bg-[#EDE6D2] px-6 py-5 sm:px-8">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                <AuraLikeAnimation />
                <div>
                  <p className="text-xl font-semibold text-[#3B2F1A]">{t('home.auraLead')}</p>
                  <p className="mt-2 text-base leading-relaxed text-[#5C4520] sm:text-lg">
                    {t('home.auraBody')}
                  </p>
                </div>
              </div>
            </RainbowHoverCard>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {auraRules.map((rule) => {
                const { Icon } = rule;
                return (
                  <li key={rule.title}>
                    <RainbowHoverCard className="h-full" innerClassName="flex flex-col bg-white px-5 py-5 sm:px-6">
                      <div className="flex items-center gap-3">
                        <span className="rainbow-hover-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D9DACB] text-[#4F5140]">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <h3 className="text-lg font-semibold text-[#3B2F1A]">{rule.title}</h3>
                      </div>
                      <p className="mt-3 text-[#666666]">{rule.body}</p>
                    </RainbowHoverCard>
                  </li>
                );
              })}
            </ul>

            <p className="mt-8">
              <Link
                href="/aura"
                className="text-base font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
              >
                {t('home.auraLearnMore')}
              </Link>
            </p>
          </div>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="how-it-works" className="border-t border-[#E4D9C4]">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t('home.howTitle')}</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">{t('home.howLead')}</p>
          <ul className="mt-14 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {howItWorks.map((item) => {
              const { Icon } = item;
              return (
                <li key={item.title}>
                  <RainbowHoverCard className="h-full" innerClassName="flex flex-col bg-white px-6 py-7 sm:px-8">
                    <div className="flex items-center gap-4">
                      <span className="rainbow-hover-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9DACB] text-[#4F5140]">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-[#666666]">{item.body}</p>
                  </RainbowHoverCard>
                </li>
              );
            })}
          </ul>
          <p className="mt-8">
            <Link
              href="/help"
              className="text-base font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
            >
              {t('home.browseHelp')}
            </Link>
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="for-learners" className="bg-white/60">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t('home.learnersTitle')}</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">{t('home.learnersLead')}</p>
          <BenefitTiles items={seekerBenefits} />
          <p className="mt-8">
            <SecondaryCta href={exploreUrl}>{t('home.explore')}</SecondaryCta>
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="for-creators" className="bg-[#B8B9A6]/20">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t('home.creatorsTitle')}</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">{t('home.creatorsLead')}</p>
          <BenefitTiles items={creatorBenefits} />
          <p className="mt-8">
            <PrimaryCta href={createUrl} trackingId="platform_creators_create">
              {t('home.create')}
            </PrimaryCta>
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="optimize" className="border-t border-[#E4D9C4]">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t('home.optimizeTitle')}</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">{t('home.optimizeLead')}</p>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {optimizeSteps.map((item) => {
              const { Icon } = item;
              return (
                <li key={item.step}>
                  <RainbowHoverCard className="h-full" innerClassName="flex flex-col bg-white px-6 py-7 sm:px-8">
                    <div className="flex items-center gap-4">
                      <span className="rainbow-hover-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9DACB] text-[#4F5140]">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold tracking-widest text-[#8A6622]">
                          {item.step}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-[#666666]">{item.body}</p>
                  </RainbowHoverCard>
                </li>
              );
            })}
          </ol>
          <p className="mt-8">
            <PrimaryCta href={createUrl} trackingId="platform_optimize_create">
              {t('home.create')}
            </PrimaryCta>
          </p>
        </FadeInSection>
      </SectionShell>

      <section id="categories" className="border-t border-[#E4D9C4] bg-[#B8B9A6]/20 py-20">
        <FadeInSection>
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <h2 className="text-3xl font-semibold sm:text-4xl">{t('home.topicsTitle')}</h2>
            <p className="mt-3 max-w-2xl text-lg text-[#666666]">{t('home.topicsLead')}</p>
          </div>
          <div className="mt-10 w-full overflow-hidden">
            <CategoryMarquee categories={EXPLORE_CATEGORIES} baseHref={exploreUrl} />
          </div>
          <p className="mx-auto mt-10 w-full max-w-6xl px-6 sm:px-10 lg:px-16">
            <SecondaryCta href={exploreUrl}>{t('home.explore')}</SecondaryCta>
          </p>
        </FadeInSection>
      </section>

      <SectionShell id="philosophy" className="scroll-mt-24 border-t border-[#E4D9C4]">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t('home.missionTitle')}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">
            {t('home.missionBody')}
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <article className="flex h-full flex-col rounded-[28px] bg-[#EDE6D2] px-7 py-8 sm:px-9 sm:py-10">
              <h3 className="text-sm font-semibold tracking-[0.2em] !text-[#A67C2A] uppercase">
                {t('home.missionCardTitle')}
              </h3>
              <p
                className="mt-5 font-bricolage text-3xl italic leading-none !text-[#A67C2A] sm:text-4xl"
                title={t('home.missionPhilomathEtymology')}
              >
                {t('home.missionPhilomathWord')}
              </p>
              <p className="mt-2 text-sm tracking-wide text-[#3B2F1A]/70">
                {t('home.missionPhilomathGloss')}
              </p>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#3B2F1A] sm:text-2xl">
                {t('home.missionCardBody')}
              </p>
            </article>
            <article className="flex h-full flex-col rounded-[28px] bg-[#E8DCC4] px-7 py-8 sm:px-9 sm:py-10">
              <h3 className="text-sm font-semibold tracking-[0.2em] !text-[#8A6622] uppercase">
                {t('home.visionCardTitle')}
              </h3>
              <p
                className="mt-5 font-bricolage text-3xl italic leading-none !text-[#8A6622] sm:text-4xl"
                title={t('home.visionDialecticEtymology')}
              >
                {t('home.visionDialecticWord')}
              </p>
              <p className="mt-2 text-sm tracking-wide text-[#3B2F1A]/70">
                {t('home.visionDialecticGloss')}
              </p>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#3B2F1A] sm:text-2xl">
                {t('home.visionCardBody')}
              </p>
            </article>
          </div>
          <article className="mt-6 flex flex-col rounded-[28px] bg-[#D9DACB] px-7 py-8 sm:px-9 sm:py-10">
            <h3 className="text-sm font-semibold tracking-[0.2em] !text-[#4F5140] uppercase">
              {t('home.innovationCardTitle')}
            </h3>
            <p
              className="mt-5 font-bricolage text-3xl italic leading-none !text-[#4F5140] sm:text-4xl"
              title={t('home.innovationCardEtymology')}
            >
              {t('home.innovationCardWord')}
            </p>
            <p className="mt-2 text-sm tracking-wide text-[#3B2F1A]/70">
              {t('home.innovationCardGloss')}
            </p>
            <p className="mt-6 max-w-4xl text-xl font-medium leading-relaxed text-[#3B2F1A] sm:text-2xl">
              {t('home.innovationCardBody')}
            </p>
          </article>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="success-stories" className="border-t border-[#E4D9C4] bg-white/60">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t('home.storiesTitle')}</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">{t('home.storiesLead')}</p>
          <UseCaseStoryCards t={t} compact />
          <p className="mt-8">
            <Link
              href="/success-stories"
              className="text-base font-medium text-[#8A6622] no-underline underline-offset-4 hover:underline"
            >
              {t('home.storiesSeeAll')}
            </Link>
          </p>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="faq-teaser" className="bg-[#B8B9A6]/15">
        <FadeInSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">{t('home.faqTitle')}</h2>
          <p className="mt-3 max-w-2xl text-lg text-[#666666]">{t('home.faqLead')}</p>
          <div className="mt-8">
            <FaqBrowse variant="home" />
          </div>
        </FadeInSection>
      </SectionShell>

      <SectionShell className="bg-[#3B2F1A] pb-24 pt-20 text-[#F7F3EA]">
        <FadeInSection>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
            {t('home.closingTitle')}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-[#F7F3EA]/85">
            {t('home.closingBody')}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <PrimaryCta href={createUrl} trackingId="platform_closing_create">
              {t('home.create')}
            </PrimaryCta>
            <a
              href={exploreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
            >
              {t('home.explore')}
            </a>
          </div>
        </FadeInSection>
      </SectionShell>
    </div>
  );
}
