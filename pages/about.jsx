import React from 'react';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';
import SEO from '../components/SEO';

const PILLARS = [
  {
    title: 'Secure contractor access on their own devices',
    body:
      'Give external collaborators access to corporate SaaS without defaulting to shipping laptops or standing up VDI for every engagement.',
  },
  {
    title: 'Unified browser governance',
    body:
      'Apply consistent browser-level policies across corporate and third-party environments—policies follow the session, not only the device.',
  },
  {
    title: 'Works with your identity and data protection stack',
    body:
      'Integrate with existing identity providers and enterprise DLP so access rules and data policies extend naturally into SaaS workflows.',
  },
  {
    title: 'Faster paths to productive access',
    body:
      'Reduce logistics-heavy onboarding so teams can focus on identity-driven access management instead of hardware provisioning cycles.',
  },
];

const OUTCOMES = [
  {
    title: 'Project velocity',
    body:
      'Help external specialists contribute sooner by reducing dependence on long hardware and provisioning cycles.',
  },
  {
    title: 'Cost structure',
    body:
      'Lower the operational burden of purchasing, shipping, tracking, and recovering devices for short-term workers and contractors.',
  },
  {
    title: 'Governance confidence',
    body:
      'Keep sensitive systems governed when work happens outside traditional corporate endpoints—in the browser where SaaS actually runs.',
  },
  {
    title: 'Operational scalability',
    body:
      'Support contractor-heavy initiatives without scaling laptop logistics and exception management linearly.',
  },
];

const USE_CASES = [
  {
    title: 'Contractor and partner onboarding',
    body:
      'Onboard external collaborators to internal SaaS with strong policy enforcement, without making device shipping the default.',
  },
  {
    title: 'Consistent policy on third-party devices',
    body:
      'Extend the same browser governance story to unmanaged machines that you do not own or fully control.',
  },
  {
    title: 'SaaS and AI in the browser',
    body:
      'Address sprawl across web apps, extensions, and AI-assisted workflows inside the browser session.',
  },
];

const OBJECTIONS = [
  {
    objection: 'We already lock down endpoints.',
    response:
      'Much of today’s work happens on non-corporate devices and inside the browser. Endpoint control alone often cannot match SaaS-centric access patterns.',
  },
  {
    objection: 'VDI or corporate laptops work for us today.',
    response:
      'They can—but cost, time-to-access, and scale (especially for contractors) are common pressure points. Browser governance can reduce that tax where it fits your architecture.',
  },
  {
    objection: 'Users will resist another browser or agent.',
    response:
      'The goal is governance with a modern browser experience teams will adopt. Pilot design, training, and success metrics matter as much as policy design.',
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Oasis — Managed enterprise browser for secure SaaS access"
        description="Oasis is a managed enterprise browser that puts governance where work happens—in the browser—so teams can secure contractor and partner SaaS access without defaulting to laptops or VDI."
        url="https://kahana.co/about"
        type="website"
      />

      {/* Hero */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 lg:px-8 lg:pt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#728552]">
              Oasis
            </p>
            <h1 className="mt-2 bg-gradient-to-r from-[#728552] to-[#788B59] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Managed enterprise browser for secure SaaS access
            </h1>
            <p className="mt-4 text-lg text-[#4A5745] sm:text-xl">
              Governance belongs in the browser—where SaaS, internal tools, and AI workflows run—not only on devices you own. Oasis helps security teams secure contractor and partner access without treating laptop shipping or VDI as the default answer.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Get in touch
              </Link>
              <Link
                href="/oasis-waitlist"
                className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Market shift + problem */}
      <section className="bg-[#F3F8E4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#4A5745] sm:text-4xl">
              Work moved into the browser. Many access models did not.
            </h2>
            <p className="mt-4 text-lg text-[#4A5745]">
              Employees, contractors, and partners increasingly work directly in SaaS—often from devices the organization does not manage. Traditional models built around corporate laptops, VPNs, and rigid network boundaries struggle to govern how SaaS is actually used.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-[#728552]/20 bg-white shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-[#728552]/15 p-6 md:border-b-0 md:border-r">
                <h3 className="text-lg font-semibold text-[#4A5745]">
                  Device-centric assumptions
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A5745]">
                  <li>Access tied heavily to corporate endpoints</li>
                  <li>Contractors often need shipped hardware or virtual desktops</li>
                  <li>Policy enforcement anchored to device ownership and network edges</li>
                </ul>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#4A5745]">
                  Browser-centric reality
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A5745]">
                  <li>SaaS accessed directly through the browser</li>
                  <li>External collaborators work from their own machines</li>
                  <li>Sensitive activity happens inside browser sessions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 p-8">
              <h3 className="text-xl font-semibold text-[#4A5745]">
                Why contractor access breaks down
              </h3>
              <p className="mt-3 text-[#4A5745]">
                Security teams face recurring trade-offs between speed, cost, and control. Onboarding stalls, gaps appear on third-party devices, and contractor-heavy programs become hard to scale.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A5745]">
                <li>Hardware and VDI paths are often slow and expensive to operate at scale</li>
                <li>Unmanaged consumer browsers struggle to enforce enterprise policy consistently</li>
                <li>SaaS sprawl—apps, extensions, and AI tools in the browser—widens the attack surface</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 p-8">
              <h3 className="text-xl font-semibold text-[#4A5745]">
                Cost of sticking with hardware-first defaults
              </h3>
              <p className="mt-3 text-[#4A5745]">
                If access stays anchored to devices alone, onboarding drag and operational load tend to grow while unmanaged SaaS activity expands in the browser.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A5745]">
                <li>Projects wait on logistics instead of policy and identity</li>
                <li>Inconsistent browser enforcement increases risk of gaps and incidents</li>
                <li>Security spends cycles managing exceptions instead of governing sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why old approaches fall short */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#4A5745] sm:text-4xl">
            Why the old trade-off persists
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#4A5745]">
            Many organizations still choose between heavy infrastructure and friction—or looser access on unmanaged browsers. Oasis is built for a third path: govern SaaS where it runs, in the browser session, with integrations that meet enterprise expectations.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#F3F8E4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#4A5745] sm:text-4xl">
              A browser designed as the enterprise control layer
            </h2>
            <p className="mt-4 text-lg text-[#4A5745]">
              Oasis is a managed enterprise browser for modern SaaS access. Instead of relying on device ownership alone, it places governance in the browser—integrating with identity and data protection systems you already use so policies extend into SaaS workflows.
            </p>
            <p className="mt-6 text-base font-medium text-[#728552]">
              No device shipping by default. No VDI sprawl as the only answer. No unmanaged sessions without an enforcement story.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars / capabilities */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#4A5745] sm:text-4xl">
            What Oasis enables
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#4A5745]">
            Policies that follow the session—not only the endpoint—so governance stays consistent when work leaves the corporate laptop.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {PILLARS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 p-8"
              >
                <h3 className="text-xl font-semibold text-[#4A5745]">{item.title}</h3>
                <p className="mt-3 text-[#4A5745]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation snippet */}
      <section className="bg-[#F3F8E4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#4A5745] sm:text-4xl">
              Session-level security, enterprise integrations
            </h2>
            <p className="mt-4 text-lg text-[#4A5745]">
              Many approaches extend legacy device-centric models. Oasis focuses on the environment where modern work happens: the browser session—pairing that focus with identity and DLP integration and a browser experience teams can adopt.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#4A5745] sm:text-4xl">
            Outcomes security and IT leaders care about
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#4A5745]/90">
            Specific timelines and savings depend on your environment; use these as directional themes, not guarantees.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#728552]/15 bg-[#F8FAF2] p-6"
              >
                <h3 className="text-lg font-semibold text-[#4A5745]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#4A5745]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases + ICP */}
      <section className="bg-[#F3F8E4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#4A5745] sm:text-4xl">
            Built for enterprise security and IT architecture leaders
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#4A5745]">
            Especially in SaaS-heavy organizations that rely on contractors, partners, and distributed teams—and need fast, governable access without defaulting to hardware logistics.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {USE_CASES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#4A5745]">{item.title}</h3>
                <p className="mt-3 text-[#4A5745]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Point of view */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] sm:text-4xl">
            Security should live where work actually happens
          </h2>
          <p className="mt-4 text-lg text-[#4A5745]">
            The browser is the workspace for SaaS-centric work. Organizations need a control layer that integrates with the existing security stack, enforces consistent policies across users and devices, and reduces the operational overhead of purely device-centric access models—without forcing a false choice between usability and control.
          </p>
        </div>
      </section>

      {/* Objections */}
      <section className="bg-[#F3F8E4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#4A5745] sm:text-4xl">
            Common questions
          </h2>
          <div className="mt-12 space-y-6">
            {OBJECTIONS.map((row) => (
              <div
                key={row.objection}
                className="rounded-2xl border border-[#728552]/20 bg-white p-6 sm:p-8"
              >
                <p className="font-semibold text-[#4A5745]">{row.objection}</p>
                <p className="mt-3 text-[#4A5745]">{row.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SharedCTA
        title="External collaboration without operational drag"
        description="If contractor access still means laptops, VDI, or unmanaged browser exceptions, it may be time to put governance back in the browser. Talk to us about secure SaaS access from any device—with policy enforcement and visibility your team can stand behind."
        buttonText="Get in touch"
        buttonLink="/contact"
      />
    </>
  );
}
