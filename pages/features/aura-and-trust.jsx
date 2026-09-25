import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import { ABOUT_ORIGIN } from '../../config/site';
import { productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/features/aura-and-trust`;

export default function AuraAndTrustFeaturePage() {
  return (
    <>
      <SEO
        title="Aura, trust, and information quality | Kahana"
 description="Aura is scarce, named recognition in the Library. Not a like count. See who gave it, when they joined, and what else they endorsed, so quality and access come with context."
        url={CANONICAL}
        type="website"
      />

      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">Feature</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Aura, trust, and information quality
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Kahana is a place to arrive, not another place to scroll. Aura is how people say{' '}
                <strong className="font-semibold text-[#3B2F1A]">I found something here</strong>
                , and how you can inspect that signal instead of trusting a black-box count.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={productHref('/library', 'aura_and_trust_explore')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                  onClick={() => trackButtonClick('feature_aura_and_trust_cta')}
                >
                  <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                  Browse Library
                </a>
                <Link
                  href="/help/how-aura-works"
                  className="btn-secondary inline-flex items-center justify-center no-underline"
                >
                  How Aura works
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl space-y-14">
            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Fragments travel faster than context
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  We do not lack access. We lack origin. Headlines arrive without the article.
                  Clips arrive without the rest of the conversation. Fluent AI can look finished
                  before anyone can ask who made it, what it is based on, or whether it is worth
                  anyone’s time.
                </p>
                <p>
 A hub on Kahana is a path someone made with intention. Not a pile of files. Aura
                  is the pause before carrying something forward: a scarce, named act of
                  recognition, not another anonymous heart.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Why Aura is not a like</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  Each person gets five Aura to give each day (the budget resets at midnight UTC).
                  You cannot give Aura to your own hubs or files. That limit is the point: it
                  creates a chance to ask whether you would want another person to encounter this.
                </p>
                <p>
                  A feed often decides in the dark. Aura is inspectable. It does not tell you what
                  to think. It lets you see what people chose to carry forward.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What you can actually inspect</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  On a hub with Aura, open <strong className="font-semibold text-[#3B2F1A]">who gave it</strong>.
                  You see real members: name, avatar, and how much they spent.
                </p>
                <p>
                  In that full list you can also see <strong className="font-semibold text-[#3B2F1A]">Member since</strong>
                  , which is when they created their account. That helps you tell a long-standing member from
                  a brand-new account that only showed up on one hub.
                </p>
                <p>
                  Each giver can show <strong className="font-semibold text-[#3B2F1A]">other public hubs</strong>{' '}
                  they have given Aura to. Open their profile for a fuller Aura-given history.
                  Judging a signal is then a human task: does this person’s other endorsements look
                  coherent, or does the count look empty once you look behind it?
                </p>
                <p>
                  Aura given to a file also lifts that hub’s count. Opening who gave from a file
 currently shows the hub’s givers list, people who endorsed the hub or files inside
 it. Not a separate file-only roster.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">Quality and access</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
 Quality improves when endorsement is scarce, named, and cross-checkable, unlike
                  fake stars, anonymous likes, or untraceable volume. You can still disagree with
                  a giver. You can see who they are.
                </p>
                <p>
                  Access improves when that trail is a doorway: other hubs they cared about,
                  creators they recognized, a path into more of the Library with a person attached.
                  For You can weigh Aura as one discovery signal among others. It is not a secret
                  ranking of truth, and it is not the only way something is found.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <h2 className="text-2xl font-semibold sm:text-3xl">What Aura is not</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-[#666666]">
                <p>
                  Aura is not money, crypto, or a star rating. It does not unlock a paywall. It is
                  not a fact-checker and not a guarantee that a work is correct. You still open
                  sources, read context, and follow the hub as a path.
                </p>
                <p>
                  It is also how we lean against AI slop. Scarce endorsements go to work people
                  trust. Anyone can report hubs or files they believe are low-effort generated
                  filler. That is how careful knowledge stays visible when other places fill with
                  noise. Read{' '}
                  <Link
                    href="/blog/against-ai-slop"
                    className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                  >
                    Not a home for AI slop
                  </Link>
                  .
                </p>
                <p>
 Identity on a listing, who shared the hub, and a check mark if they finished Stripe
 Identity, is a different question.{' '}
                  <Link
                    href="/verifiable-credibility"
                    className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                  >
                    Who you are learning from
                  </Link>{' '}
                  is about the contributor. Aura is about what people chose to carry forward.
                </p>
              </div>
              <p className="mt-6 text-lg">
                <Link
                  href="/aura"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Why Aura exists
                </Link>
                {' · '}
                <Link
                  href="/features/aura-pathways"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Aura pathways
                </Link>
                {' · '}
                <Link
                  href="/features/aura"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Aura feature
                </Link>
                {' · '}
                <Link
                  href="/blog/against-ai-slop"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Against AI slop
                </Link>
                {' · '}
                <Link
                  href="/ad-free-commitment"
                  className="font-medium text-[#8A6622] underline-offset-4 hover:underline"
                >
                  Ad-free library
                </Link>
              </p>
            </FadeInSection>
          </div>
        </section>
      </div>
    </>
  );
}
