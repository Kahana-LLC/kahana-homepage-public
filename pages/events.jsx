import Link from "next/link";
import SEO from "../components/SEO";
import { EVENTS } from "../data/events";

export default function EventsPage() {
  return (
    <>
      <SEO
        title="Events | Kahana"
        description="Explore upcoming Kahana events and live sessions on AI productivity, security, and data control."
        url="https://kahana.io/events"
        type="website"
      />

      <main className="min-h-screen bg-[#F7F3EA]">
        <section className="relative overflow-hidden bg-gradient-to-b from-[#EDE6D2] via-[#FAFCEE] to-white py-20 sm:py-24">
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute top-[-32%] left-[-15%] h-[520px] w-[760px] rounded-full bg-[#FCDD9F]/18 blur-[180px]" />
            <div className="absolute bottom-[-35%] right-[-15%] h-[560px] w-[760px] rounded-full bg-[#8BA500]/16 blur-[180px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#8A6622]">
              Kahana Events
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[#3B2F1A] sm:text-5xl lg:text-6xl">
              Upcoming Events
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#3B2F1A]/80 sm:text-xl">
              Join practical sessions built for leaders and operators navigating AI productivity,
              policy, and security in real business environments.
            </p>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {EVENTS.map((event) => (
                <article
                  key={event.slug}
                  className="rounded-2xl border border-[#3B2F1A]/12 bg-[#F7F3EA] p-7 shadow-[0_12px_28px_rgba(59,47,26,0.08)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#8A6622]">
                    {event.eventType} · {event.dateLabel}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-[#3B2F1A]">
                    {event.title}
                  </h2>
                  <p className="mt-2 text-lg font-medium leading-snug text-[#3B2F1A]/85">
                    {event.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#3B2F1A]/78">
                    {event.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/events/${event.slug}`}
                      className="btn-primary inline-flex items-center justify-center rounded-[27.5px] px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline"
                    >
                      View Event & Register
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-medium text-[#3B2F1A]/70">
              More events coming soon.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}