import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

const CANONICAL = 'https://kahana.co/press-releases/oasis-open-beta-announcement';

const linkClass = 'font-semibold text-oasis-green-700 no-underline hover:text-oasis-green-900 hover:underline';

export default function OasisOpenBetaPressRelease() {
  return (
    <>
      <SEO
        title="Kahana completes Oasis closed beta; privacy-first browser opens next chapter (St. Louis)"
        description="Kahana announces Oasis browser closed beta complete: a refuge-focused, privacy-first web experience with AI in the core, plus Product Hunt on May 20, 2026 for waitlist supporters. Based in St. Louis."
        url={CANONICAL}
        type="article"
      />

      <article className="min-h-screen bg-white">
        <header className="border-b border-oasis-green-100 bg-oasis-green-50/40">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-oasis-green-600">Press release</p>
            <p className="mt-2 text-sm text-oasis-green-700">
              <Link href="/press-releases" className={linkClass}>
                ← All press releases
              </Link>
            </p>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-oasis-green-950 sm:text-4xl">
              Kahana completes Oasis closed beta; opens next chapter for a privacy-first browser with AI in the core
            </h1>
            <p className="mt-4 text-lg italic text-oasis-green-800 sm:text-xl">
              Much of what people do online produces signals they never fully see: tracking, profiling, and resale of browsing
              behavior that happens quietly in the background. Kahana built{' '}
              <Link href="/products/oasis-browser" className={linkClass}>
                Oasis
              </Link>{' '}
              as a refuge from that pattern—a sanctuary where privacy comes first, data stays closer to the user, and people can
              focus on projects, work, and life instead of constantly wondering what is leaking out. After an extended closed beta
              with waitlist users and teams, Kahana is moving toward open beta and will spotlight the launch on{' '}
              <a href="https://www.producthunt.com/" rel="noopener noreferrer" target="_blank" className={linkClass}>
                Product Hunt
              </a>{' '}
              on May 20, 2026 for supporters who want a clear moment to follow along.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-t border-oasis-green-200 pt-8">
            <p className="text-sm font-bold uppercase tracking-wide text-oasis-green-900">St. Louis, May 13, 2026</p>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-oasis-green-900">
              <p>
                <strong>Kahana</strong> today announced that <strong>Oasis</strong>, its privacy-first web browser with AI
                woven into the browsing experience—not bolted on as a disconnected chat window—has completed an extended{' '}
                <strong>closed beta</strong>. The company is now moving toward <strong>open beta</strong> distribution while
                keeping the product&apos;s north star intact: give people transparency, peace of mind, and control over their
                data so their focus can return to what actually matters.
              </p>
              <p>
                On the public web, the default experience is often noisy: ads, trackers, and opaque data flows that make it hard
                to know what is being collected, by whom, and for what purpose. Oasis is designed to push back on that status
                quo with ad-blocking controls, privacy-first defaults, and a clear posture that Kahana does not sell users&apos;
                browsing data—collecting only what people explicitly permit, in line with the promises surfaced on Kahana&apos;s
                homepage and in its policies.
              </p>
              <p>
                Once that foundation feels trustworthy, AI can do more of the repetitive work: surfacing context from real
                tabs and pages, supporting natural language and voice where it helps, and reducing the friction of jumping between
                apps. Readers can start from the{' '}
                <Link href="/products/oasis-browser" className={linkClass}>
                  Oasis Browser
                </Link>{' '}
                product overview for how Kahana positions the full consumer experience.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-oasis-green-950">Why &quot;Oasis&quot;: a refuge, not another noisy tab</h2>
              <p>
                Kahana&apos;s mission language is deliberate: an oasis is a refuge—shelter and calm in a harsh landscape. The
                modern web can feel like a gauntlet of fragmentation, spyware, data leaks, and fast-moving AI-driven threats. The
                company believes the browser itself should be a safe place to work, create, and explore, with security and privacy
                at the core—not as an afterthought, not as a toggle you flip on after the fact.
              </p>
              <p>
                That framing mirrors what visitors see in Kahana&apos;s public story:{' '}
                <strong>Your Online Refuge. Your Terms.</strong> In practice, Kahana describes Oasis as a sanctuary where
                privacy is paramount, focus is protected, and data remains yours—so browsing can stay calm, secure, and private.
              </p>
              <blockquote className="border-l-4 border-oasis-green-600/35 bg-oasis-green-50/60 py-5 pl-5 pr-4 text-oasis-green-800 italic">
                <p className="text-[0.96875rem] leading-relaxed">
                  I&apos;ll never forget the first time I saw a company get hacked and held hostage from the inside. Training and
                  leadership commitment help, but they are not enough. Hackers are unpredictable, and exploitation keeps getting
                  more advanced, especially in the age of AI. We are all human, and human error is still a common root cause of
                  breaches.
                </p>
                <p className="mt-3 text-sm not-italic text-oasis-green-700">
                  — <strong>Adam Kershner</strong>, CEO and Founder, Kahana
                </p>
              </blockquote>
              <p>
                Kershner built his career inside IT teams at a large enterprise, where he saw how quickly security gaps compound
                when everyday tools are not designed with security in mind. That experience shaped Kahana&apos;s product choices:
                privacy and trust are prerequisites for the kind of AI assistance people will actually rely on.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-oasis-green-950">AI that works where your work already lives</h2>
              <p>
                Oasis pairs privacy-first browsing with an assistant meant to meet you in the same &quot;room&quot; as your
                tabs—not a blank-slate chat that ignores the page in front of you. Deep dives on the{' '}
                <Link href="/features/oasis-assistant" className={linkClass}>
                  Oasis Assistant
                </Link>{' '}
                and{' '}
                <Link href="/features/oasis-voice" className={linkClass}>
                  voice in the assistant
                </Link>{' '}
                explain how context from real browsing informs help, while{' '}
                <Link href="/features/oasis-import" className={linkClass}>
                  guided import from other browsers
                </Link>{' '}
                covers how Kahana respects platform limits on switching. For sensitive moments when the browser acts on your
                behalf, see{' '}
                <Link href="/features/oasis-confirmations" className={linkClass}>
                  confirmations for sensitive actions
                </Link>
                —trust beats surprise.
              </p>
              <p>
                The full catalog of capability write-ups lives on the{' '}
                <Link href="/features" className={linkClass}>
                  Oasis features
                </Link>{' '}
                hub, which links to every browser and enterprise deep dive Kahana publishes for reviewers and technical readers.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-oasis-green-950">Teach Oasis to fit your workflows (Amplifier)</h2>
              <p>
                Even strong models miss tone, speed, and risk in real tabs. Kahana is developing{' '}
                <Link href="/features/oasis-amplifier" className={linkClass}>
                  Oasis Amplifier
                </Link>
                —a planned capability—so structured feedback (what felt slow, wrong, unsafe, or great) can steer the assistant
                over time, without turning browsing history into a free-for-all data grab. Until Amplifier ships, treat the
                public materials as intent and product direction, not a guarantee of shipped metrics.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-oasis-green-950">From closed beta to a broader audience</h2>
              <p>
                Kahana kept the beta intentionally limited so it could listen closely, iterate quickly, and validate reliability
                across real machines and usage patterns. Completing closed beta is not a claim that software is
                &quot;finished&quot;—it is a statement that privacy defaults, performance, and trust signals are ready for a
                wider set of people to try Oasis in daily life.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-oasis-green-950">Organizations: the same risks, inside the session</h2>
              <p>
                Enterprises face a parallel problem: work has moved into SaaS and the browser, but many access models still
                behave as if control ends at the corporate laptop. When sensitive activity happens in browser sessions—often on
                devices the company does not own—data can leak through gaps that traditional perimeter tools were not built to
                see. Kahana contributes to industry-wide learning through the{' '}
                <Link href="/data-leakage-consortium" className={linkClass}>
                  Data Leakage Consortium
                </Link>
                , a community effort focused on understanding and reducing data leakage as modern work scales.
              </p>
              <p>
                For security and IT teams, Kahana extends that philosophy into{' '}
                <Link href="/products/oasis-enterprise-browser" className={linkClass}>
                  Oasis Enterprise Browser
                </Link>
                : governance that can follow the session where SaaS work actually happens—integrating with identity and data
                protection stacks—rather than only extending legacy device-centric assumptions. As Kahana&apos;s enterprise
                narrative puts it: when work moves into SaaS, governance must move into the browser.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-oasis-green-950">What&apos;s next: Product Hunt on May 20, 2026</h2>
              <p>
                Kahana will spotlight Oasis on{' '}
                <a href="https://www.producthunt.com/" rel="noopener noreferrer" target="_blank" className={linkClass}>
                  Product Hunt
                </a>{' '}
                on <strong>May 20, 2026</strong>, aimed first at people on the waitlist and supporters who want a single calendar
                anchor for the public launch moment. Calendar desks should use that date for the Product Hunt spotlight.
              </p>
              <p>
                For launch updates and early access,{' '}
                <Link href="/oasis-waitlist" className={linkClass}>
                  join the Oasis waitlist
                </Link>
                .
              </p>

              <h2 className="mt-12 text-2xl font-bold text-oasis-green-950">Availability</h2>
              <p>
                Learn more about the consumer browser on the{' '}
                <Link href="/products/oasis-browser" className={linkClass}>
                  Oasis Browser
                </Link>{' '}
                page. For enterprise governance and secure SaaS access, see{' '}
                <Link href="/products/oasis-enterprise-browser" className={linkClass}>
                  Oasis Enterprise Browser
                </Link>
                . Explore the full feature library on{' '}
                <Link href="/features" className={linkClass}>
                  Oasis features
                </Link>
                . Join the waitlist for launch timing via the link above.
              </p>

              <h2 className="mt-12 text-2xl font-bold text-oasis-green-950">About Kahana</h2>
              <p>
                Kahana builds Oasis for individuals who want a calmer, more private web—and for organizations that need
                session-level governance without pretending every collaborator ships a managed laptop. The company is
                headquartered in <strong>St. Louis</strong>. For logos, colors, leadership photography, and press inquiries, use
                the{' '}
                <Link href="/press-kit" className={linkClass}>
                  press kit
                </Link>{' '}
                and the press inquiries form linked there.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
