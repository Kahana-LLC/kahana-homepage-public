import Link from "next/link";
import SEO from "../../components/SEO";
import { EVENTS, getEventBySlug } from "../../data/events";

export async function getStaticPaths() {
  return {
    paths: EVENTS.map((event) => ({ params: { slug: event.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return { notFound: true };
  }

  return {
    props: {
      event,
    },
  };
}

export default function EventDetailPage({ event }) {
  return (
    <>
      <SEO
        title={`${event.title} | Aura Library Events`}
        description={event.description}
        url={`https://kahana.io/events/${event.slug}`}
        type="website"
      />

      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F8E4] via-[#FAFCEE] to-white py-20 sm:py-24">
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute top-[-28%] left-[-15%] h-[520px] w-[760px] rounded-full bg-[#FCDD9F]/18 blur-[180px]" />
            <div className="absolute bottom-[-35%] right-[-15%] h-[560px] w-[760px] rounded-full bg-[#8BA500]/16 blur-[180px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/events"
              className="inline-flex items-center text-sm font-semibold text-brand-link underline decoration-2 underline-offset-2"
            >
              ← Back to Events
            </Link>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
              {event.eventType} · {event.dateLabel}
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-[#30400D] sm:text-5xl">
              {event.title}
            </h1>
            <p className="mt-4 max-w-4xl text-2xl font-semibold leading-tight text-[#30400D]/88 sm:text-3xl">
              {event.subtitle}
            </p>
            <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#30400D]/78 sm:text-lg">
              {event.presenters}
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#30400D]/78">
              {event.heroIntro}
            </p>
          </div>
        </section>

        <section className="pb-14 sm:pb-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
            <article className="rounded-2xl border border-[#30400D]/10 bg-[#F8FAF2] p-7 shadow-[0_10px_24px_rgba(48,64,13,0.07)]">
              <h2 className="text-2xl font-bold text-[#30400D]">What This Session Covers</h2>
              <p className="mt-3 text-[#30400D]/78 leading-relaxed">{event.narrative}</p>
              <p className="mt-5 text-sm font-semibold text-[#30400D]/74">
                Duration: {event.durationLabel} · Format: {event.location}
              </p>
            </article>

            <article className="rounded-2xl border border-[#30400D]/10 bg-[#F8FAF2] p-7 shadow-[0_10px_24px_rgba(48,64,13,0.07)]">
              <h2 className="text-2xl font-bold text-[#30400D]">Presenters</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {event.speakers.map((speaker) => (
                  <article
                    key={speaker.name}
                    className="rounded-xl border border-[#30400D]/10 bg-white/80 p-4"
                  >
                    <img
                      src={speaker.image}
                      alt={`${speaker.name} headshot`}
                      className="h-24 w-24 rounded-full object-cover"
                      loading="lazy"
                    />
                    <p className="mt-3 text-base font-bold text-[#30400D]">{speaker.name}</p>
                    <p className="text-sm text-[#30400D]/75">{speaker.role}</p>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex text-sm font-semibold text-brand-link underline decoration-2 underline-offset-2"
                    >
                      LinkedIn Profile
                    </a>
                    {speaker.website ? (
                      <a
                        href={speaker.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex text-sm font-semibold text-brand-link underline decoration-2 underline-offset-2"
                      >
                        Visit Website
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-white p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <h2 className="text-3xl font-bold text-[#30400D]">What You&apos;ll Walk Away With</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {event.outcomes.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#30400D]/10 bg-[#F8FAF2] p-5 text-[#30400D]/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {event.founderStory ? (
          <section className="pb-14 sm:pb-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl border border-[#30400D]/12 bg-white p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
                <h2 className="text-3xl font-bold text-[#30400D]">Adam&apos;s Founder Story</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:items-start">
                  <div className="mx-auto w-full max-w-[260px] md:mx-0">
                    <img
                      src={event.founderStory.image}
                      alt={`${event.founderStory.name} headshot`}
                      className="h-auto w-full rounded-2xl border border-[#30400D]/12 object-cover shadow-sm"
                      loading="lazy"
                    />
                    <p className="mt-4 text-base font-bold text-[#30400D]">{event.founderStory.name}</p>
                    <p className="text-sm text-[#30400D]/75">{event.founderStory.role}</p>
                    <a
                      href={event.founderStory.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex text-sm font-semibold text-brand-link underline decoration-2 underline-offset-2"
                    >
                      LinkedIn Profile
                    </a>
                  </div>

                  <div>
                    <p className="text-base leading-relaxed text-[#30400D]/80">
                      {event.founderStory.intro}
                    </p>
                    <blockquote className="mt-5 rounded-xl border-l-4 border-[#617500]/35 bg-[#F8FAF2] px-5 py-4 text-[#30400D]/82">
                      <div className="space-y-3 text-sm italic leading-relaxed sm:text-base">
                        {event.founderStory.quote.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="pb-14 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-gradient-to-br from-white to-[#F8FAF2] p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <h2 className="text-3xl font-bold text-[#30400D]">Included When You Register</h2>
              <ul className="mt-5 space-y-3 text-[#30400D]/80">
                {event.included.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {event.testimonials?.length ? (
                <div className="mt-8 rounded-2xl border border-[#30400D]/10 bg-white/80 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#617500]">
                    What Attendees Are Saying
                  </p>
                  <blockquote className="mt-3 text-[#30400D]/80 leading-relaxed italic">
                    &ldquo;{event.testimonials[0].quote}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-sm font-semibold text-[#30400D]">
                    {event.testimonials[0].name}
                  </p>
                  <p className="text-sm text-[#30400D]/70">{event.testimonials[0].role}</p>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section id="register" className="border-t border-[#30400D]/10 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-gradient-to-b from-[#F8FAF2] to-white p-6 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-8">
              <h2 className="text-center text-3xl font-bold text-[#30400D] sm:text-4xl">
                Register for the Live Masterclass
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#30400D]/78 sm:text-lg">
                Complete the form below to reserve your seat.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-[#30400D]/12 bg-white">
                <iframe
                  src={event.registrationUrl}
                  title={`${event.title} registration form`}
                  className="h-[820px] w-full"
                  loading="lazy"
                />
              </div>

              <p className="mt-4 text-center text-sm text-[#30400D]/70">
                Having trouble with the embedded form?{" "}
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                >
                  Open registration in a new tab
                </a>
                .
              </p>

              <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#30400D]/12 bg-white/80 p-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#617500]">
                  Related Opportunity
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#30400D]/78 sm:text-base">
                  Want access to more sessions like this? Join the Data Leakage Consortium to stay
                  connected with upcoming events, practical resources, and collaboration with peers.
                </p>
                <Link
                  href="/data-leakage-consortium"
                  className="btn-secondary mt-4 inline-flex items-center justify-center rounded-[27.5px] px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline"
                >
                  Join the Data Leakage Consortium
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
