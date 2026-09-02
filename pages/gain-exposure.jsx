import Link from 'next/link';
import {
  ChatBubbleLeftRightIcon,
  EyeSlashIcon,
  FolderPlusIcon,
  MagnifyingGlassIcon,
  SignalSlashIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import ExplainerRelatedLinks from '../components/home/platform/ExplainerRelatedLinks';
import { APP_URL, EXPLORE_URL } from '../components/nav/navConfig';
import { ABOUT_ORIGIN } from '../config/site';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/gain-exposure`;

const HIDDEN = [
  {
    title: 'Work dies in private folders',
    body: 'A useful guide sits in Drive, Slack, or a DM. The people who need it never see it.',
    Icon: EyeSlashIcon,
  },
  {
    title: 'Feeds bury last week',
    body: 'A post is up for a day, then gone. You have to post the same thing again just to stay visible.',
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Hard to tell what landed',
    body: 'You might get views, or you might get none. You still do not know if anyone found it useful, or if nobody ever saw it.',
    Icon: SignalSlashIcon,
  },
];

const RELATED = [
  { kind: 'Feature', title: 'Explore', href: '/features/explore' },
  { kind: 'Feature', title: 'Aura', href: '/features/aura' },
  { kind: 'Feature', title: 'Analytics', href: '/features/analytics' },
  { kind: 'Feature', title: 'Profiles', href: '/features/profiles' },
  { kind: 'Help', title: 'List a hub on Explore', href: '/help/list-hub-on-explore' },
  { kind: 'Help', title: 'How Aura works', href: '/help/how-aura-works' },
  { kind: 'Help', title: 'Get started for creators', href: '/help/get-started-creators' },
  { kind: 'Stories', title: 'Success stories', href: '/success-stories' },
];

export default function GainExposurePage() {
  return (
    <>
      <SEO
        title="People should be able to find what you know | Kahana"
        description="Get views, saves, follows, and Aura when people discover what you share. List a hub on Explore so the right people can find it."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#8A6622] uppercase">
                The problem we are solving
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                People should be able to find what you know
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Get views, saves, follows, and Aura when people discover what you share.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Good work still gets buried</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">
                You already share what you know. A lot of it never reaches the people looking for
                it. It sits in the wrong place, or it vanishes after a day.
              </p>
            </FadeInSection>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {HIDDEN.map((item) => {
                const { Icon } = item;
                return (
                  <li key={item.title}>
                    <article className="flex h-full flex-col rounded-[28px] bg-white px-6 py-7 sm:px-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDE6D2] text-[#5C4520]">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-[#666666]">{item.body}</p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="px-6 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">List it where people search</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                Create a hub, add what you know, and list it on Explore when you are ready. People
                can find it later, not only in the hour you posted. Views, saves, and follows tell
                you it is being found.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                If someone gives Aura, a real person thought a hub or file was worth noticing. That
                is promotion, not payment.{' '}
                <Link
                  href="/aura"
                  className="font-medium text-[#8A6622] underline decoration-[#8A6622]/40 underline-offset-2 hover:decoration-[#8A6622]"
                >
                  How Aura works
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>

        <ExplainerRelatedLinks
          lead="More on Explore, Aura, and listing a hub."
          items={RELATED}
        />

        <section className="bg-[#3B2F1A] px-6 py-20 text-[#F7F3EA] sm:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <FadeInSection>
              <h2 className="text-3xl font-semibold leading-tight !text-[#F7F3EA] sm:text-4xl">
                Put it where people can find it
              </h2>
              <p className="mt-4 text-lg text-[#F7F3EA]/85">
                Create a hub, or see how others have already listed theirs on Explore.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('gain_exposure_create')}
                >
                  <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Create
                </a>
                <a
                  href={EXPLORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 !border-[#F7F3EA]/40 !bg-transparent no-underline !text-[#F7F3EA] hover:!border-[#F7F3EA] hover:!bg-white/10 hover:!text-[#F7F3EA]"
                  onClick={() => trackButtonClick('gain_exposure_explore')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Explore
                </a>
              </div>
              <p className="mt-8 text-sm text-[#F7F3EA]/70">
                <Link
                  href="/#for-creators"
                  className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
                >
                  Back to benefits for creators
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
