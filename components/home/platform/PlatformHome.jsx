import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '../../FadeInSection';
import { APP_URL } from '../../nav/navConfig';
import { platformTestimonials } from '../../../data/platform-testimonials';
import { trackButtonClick } from '../../../utils/analytics';

const APP_CTA = APP_URL;

function PrimaryCta({ children, className = '', trackingId }) {
  return (
    <a
      href={APP_CTA}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary inline-flex items-center justify-center no-underline ${className}`}
      onClick={() => trackingId && trackButtonClick(trackingId)}
    >
      {children}
    </a>
  );
}

function SecondaryCta({ href, children, className = '', external = false }) {
  const classes = `btn-secondary inline-flex items-center justify-center no-underline ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function SectionShell({ id, children, className = '' }) {
  return (
    <section id={id} className={`px-6 py-20 sm:px-10 lg:px-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export default function PlatformHome() {
  return (
    <div className="bg-[#F8FAF2] text-[#313A00]">
      {/* Hero — white ground, copy left + bonsai right */}
      <section className="relative min-h-[min(72vh,720px)] overflow-hidden bg-white">
        <div className="relative mx-auto grid min-h-[min(72vh,720px)] w-full max-w-6xl items-center gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1fr_minmax(240px,380px)] lg:gap-16 lg:px-16">
          <FadeInSection eager>
            <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#313A00] sm:text-4xl md:text-5xl">
              Put your knowledge in hubs.
              <br />
              Reach people who are looking for it.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#495800] sm:text-xl">
              Build hubs for lessons, guides, and memberships. Earn when people join or unlock what
              you know.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCta trackingId="platform_hero_create_hub">Create a hub</PrimaryCta>
              {/* Until Phase 3, kahana.io 301s to about.; product explore stays app.kahana.io */}
              <SecondaryCta href="https://kahana.io">Discover</SecondaryCta>
            </div>
          </FadeInSection>
          <FadeInSection eager delay={120} isImage>
            <div className="relative mx-auto flex w-full max-w-[320px] justify-center lg:max-w-none lg:justify-end">
              <Image
                src="/images/hero-bonsai.png"
                alt=""
                width={640}
                height={640}
                priority
                quality={100}
                sizes="(max-width: 1024px) 280px, 320px"
                className="h-auto w-full max-w-[240px] object-contain sm:max-w-[280px] lg:max-w-[320px]"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Social proof */}
      <SectionShell className="border-b border-[#E0E8D4] py-12 sm:py-14">
        <FadeInSection>
          <a
            href="#testimonials"
            className="block text-center text-2xl font-semibold text-[#495800] no-underline transition-colors hover:text-[#617500] sm:text-3xl"
          >
            Creators like Kelsey turn expertise into hubs people pay for
          </a>
          <p className="mt-3 text-center text-[#666666]">
            Aura and discovery help the right buyers find you.
          </p>
        </FadeInSection>
      </SectionShell>

      {/* How it works */}
      <SectionShell id="how-it-works">
        <FadeInSection>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-[#666666]">
            Shape your hub. Publish what you know. Get discovered.
          </p>
          <ol className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Shape your offer',
                body: 'Clarify what you teach and who it’s for—so your hub speaks to the right people.',
              },
              {
                step: '02',
                title: 'Publish to a hub',
                body: 'Lessons, downloads, and memberships in one place buyers can trust.',
              },
              {
                step: '03',
                title: 'Get discovered',
                body: 'Show up for people searching experts and products—powered by Aura.',
              },
            ].map((item) => (
              <li key={item.step} className="text-center sm:text-left">
                <p className="text-sm font-semibold tracking-widest text-[#7A9200]">{item.step}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-[#666666]">{item.body}</p>
              </li>
            ))}
          </ol>
        </FadeInSection>
      </SectionShell>

      {/* Start small */}
      <SectionShell className="bg-[#313A00] text-[#F8FAF2]">
        <FadeInSection>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            You don’t need a full course empire. Start with one hub, learn what people value, then
            expand formats—sessions, series, subscriptions.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[#C5D0A8]">
            Kahana is built for knowledge: digital products, guided learning, and experts people can
            actually find.
          </p>
        </FadeInSection>
      </SectionShell>

      {/* Get paid / Live where audience is */}
      <SectionShell>
        <FadeInSection>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Get paid your way</h2>
              <p className="mt-4 text-lg text-[#666666]">
                One-time unlocks or recurring memberships—price in ways that fit your audience.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Live where your audience is</h2>
              <p className="mt-4 text-lg text-[#666666]">
                Host on Kahana or connect your hub to your own site and tools.
              </p>
            </div>
          </div>
        </FadeInSection>
      </SectionShell>

      {/* Low barrier */}
      <SectionShell className="border-y border-[#E0E8D4] py-16">
        <FadeInSection>
          <p className="mx-auto max-w-3xl text-center text-2xl font-medium leading-snug text-[#495800] sm:text-3xl">
            No engineering degree required. If you can explain something useful, you can put it in a
            hub.
          </p>
        </FadeInSection>
      </SectionShell>

      {/* Aura */}
      <SectionShell id="aura">
        <FadeInSection>
          <p className="text-sm font-semibold tracking-widest text-[#7A9200]">DIFFERENTIATOR</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Aura</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#666666]">
            Star ratings reward noise. Aura surfaces depth and quality so buyers find real
            expertise—and great work isn’t buried under five-star spam.
          </p>
        </FadeInSection>
      </SectionShell>

      {/* Testimonials */}
      <SectionShell id="testimonials" className="bg-white/50">
        <FadeInSection>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">From people on Kahana</h2>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2">
            {platformTestimonials.map((t) => (
              <li key={t.id} className="flex flex-col gap-5">
                <blockquote className="text-lg leading-relaxed text-[#333333]">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <div className="mt-auto flex items-center gap-3">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full bg-[#E0E8D4]">
                    <Image src={t.image} alt="" fill className="object-cover" sizes="48px" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#313A00]">{t.name}</p>
                    <p className="text-sm text-[#666666]">{t.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </SectionShell>

      {/* Discover */}
      <SectionShell>
        <FadeInSection>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Find experts and hubs worth your time
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-[#666666]">
            Browse knowledge on Kahana.
          </p>
          <div className="mt-8 flex justify-center">
            <SecondaryCta href="https://kahana.io">Discover on Kahana</SecondaryCta>
          </div>
        </FadeInSection>
      </SectionShell>

      {/* Closing */}
      <SectionShell className="bg-[#313A00] pb-24 pt-20 text-[#F8FAF2]">
        <FadeInSection>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold leading-tight sm:text-4xl">
            Skip the big launch.
            <br />
            Ship one hub. Learn. Iterate.
          </h2>
          <div className="mt-10 flex justify-center">
            <PrimaryCta trackingId="platform_closing_create_hub">Create a hub</PrimaryCta>
          </div>
        </FadeInSection>
      </SectionShell>
    </div>
  );
}
