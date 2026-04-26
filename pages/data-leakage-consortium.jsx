import SEO from "../components/SEO";

const JOIN_URL = "https://tally.so/r/LZEvzO";

export default function DataLeakageConsortiumPage() {
  return (
    <>
      <SEO
        title="Data Leakage Consortium"
        description="Join the Data Leakage Consortium: a focused community of security leaders, operators, and experts working to reduce AI browser data leakage risks to near-zero."
        url="https://kahana.co/data-leakage-consortium"
        type="website"
      />

      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F8E4] via-[#FAFCEE] to-white py-20 sm:py-24">
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute top-[-30%] left-[-15%] h-[520px] w-[760px] rounded-full bg-[#FCDD9F]/20 blur-[180px]" />
            <div className="absolute bottom-[-35%] right-[-15%] h-[560px] w-[760px] rounded-full bg-[#8BA500]/18 blur-[180px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#617500]">
              Closed Community Initiative
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[#30400D] sm:text-5xl lg:text-6xl">
              Data Leakage Consortium
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#30400D]/80 sm:text-xl">
              A dedicated consortium of individuals, companies, and experts solving one of the
              hardest enterprise AI problems: confidential data leakage through browser-based AI
              tools.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <a
                href="#consortium-signup"
                className="btn-primary inline-flex items-center justify-center rounded-[27.5px] px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline"
              >
                Join the Consortium
              </a>
              <p className="text-sm font-medium text-[#30400D]/70">
                Apply in under two minutes. We review each submission for fit.
              </p>
            </div>
          </div>
        </section>

        <section id="consortium-signup" className="py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-gradient-to-b from-[#F8FAF2] to-white p-6 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-8">
              <h2 className="text-center text-3xl font-bold text-[#30400D] sm:text-4xl">
                Join the Data Leakage Consortium
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#30400D]/78 sm:text-lg">
                Work with peers focused on getting organizations to 0-1% data leakage risk
                confidence with stronger controls and fewer unknowns.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-medium text-[#30400D]/68">
                Complete the form below to apply. We will follow up with next steps after review so
                you can help reduce business risk and close the growing control gap.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-[#30400D]/12 bg-white">
                <iframe
                  src={JOIN_URL}
                  title="Data Leakage Consortium signup form"
                  className="h-[820px] w-full"
                  loading="lazy"
                />
              </div>

              <p className="mt-4 text-center text-sm text-[#30400D]/70">
                Having trouble with the embedded form?{" "}
                <a
                  href={JOIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                >
                  Open signup in a new tab
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-gradient-to-br from-white to-[#F8FAF2] p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
                Why This Matters Now
              </p>
              <p className="mt-4 text-3xl font-bold leading-tight text-[#30400D] sm:text-4xl">
                Only 17% of companies have controls in place to prevent employees from uploading
                and sending confidential data with an AI tool in a browser.
              </p>
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-[#30400D]/78 sm:text-lg">
                Browser-based AI adoption is outpacing governance. Security teams can estimate risk,
                but most cannot measure leakage confidence with precision across workflows, users,
                and tools.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
              Risk Signals
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <article className="rounded-2xl border border-[#30400D]/10 bg-[#F8FAF2] p-6 shadow-[0_10px_24px_rgba(48,64,13,0.07)] sm:p-7">
                <p className="text-5xl font-bold tracking-tight text-[#30400D]">75%</p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-[#30400D]">
                  of global <span className="font-bold">knowledge workers</span> now use AI tools
                  regularly
                </p>
                <p className="mt-4 text-sm font-semibold text-[#30400D]/72">(Worklytics 2025)</p>
              </article>

              <article className="rounded-2xl border border-[#30400D]/10 bg-[#F8FAF2] p-6 shadow-[0_10px_24px_rgba(48,64,13,0.07)] sm:p-7">
                <p className="text-5xl font-bold tracking-tight text-[#30400D]">57%</p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-[#30400D]">
                  of employees using shadow AI tools input{" "}
                  <span className="font-bold">sensitive data</span> into them
                </p>
                <p className="mt-4 text-sm font-semibold text-[#30400D]/72">
                  (Menlo Security 2025)
                </p>
              </article>
            </div>
            <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#30400D]/78 sm:text-lg">
              AI adoption is accelerating faster than enforceable controls. That gap is exactly why
              this consortium exists.
            </p>
          </div>
        </section>

        <section className="pb-14 sm:pb-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
            <article className="rounded-2xl border border-[#30400D]/10 bg-[#F8FAF2] p-7 shadow-[0_10px_24px_rgba(48,64,13,0.07)]">
              <h2 className="text-2xl font-bold text-[#30400D]">The Reality Gap</h2>
              <p className="mt-3 text-[#30400D]/78 leading-relaxed">
                Even growth-stage and late-stage companies implementing controls still report major
                blind spots. They often estimate their safeguards work only part of the time and
                lack dependable leakage measurement.
              </p>
            </article>

            <article className="rounded-2xl border border-[#30400D]/10 bg-[#F8FAF2] p-7 shadow-[0_10px_24px_rgba(48,64,13,0.07)]">
              <h2 className="text-2xl font-bold text-[#30400D]">Consortium Focus</h2>
              <p className="mt-3 text-[#30400D]/78 leading-relaxed">
                Build a practical, operator-led playbook that helps companies close control gaps,
                benchmark efficacy, and move toward high confidence in near-zero leakage outcomes.
              </p>
            </article>
          </div>
        </section>

        <section className="pb-14 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-white p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <h2 className="text-3xl font-bold text-[#30400D]">Who Should Join</h2>
              <p className="mt-2 text-lg font-semibold text-[#30400D]/88 sm:text-xl">
                Should I join?
              </p>
              <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#30400D]/78 sm:text-lg">
                If you&apos;re trying to reduce data leakage and help people stay safer online, this
                community is for you. Frankly, anyone can join: security experts, leaders,
                managers, students, operators, and builders.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#30400D]/10 p-5 text-[#30400D]/80">
                  If you&apos;re a security leader or IT owner, collaborate on policies and controls
                  that actually work in production.
                </div>
                <div className="rounded-xl border border-[#30400D]/10 p-5 text-[#30400D]/80">
                  If you&apos;re an operator building DLP or workflow controls, share what works and
                  pressure-test approaches with peers.
                </div>
                <div className="rounded-xl border border-[#30400D]/10 p-5 text-[#30400D]/80">
                  If you&apos;re a practitioner, researcher, or expert, help define measurable methods
                  to prevent leakage and close blind spots.
                </div>
                <div className="rounded-xl border border-[#30400D]/10 p-5 text-[#30400D]/80">
                  If you&apos;re a manager, student, or curious contributor, bring questions, learn
                  quickly, and help teams ship safer AI usage.
                </div>
              </div>
              <p className="mt-5 text-sm font-medium text-[#30400D]/70 sm:text-base">
                You do not need to be a deep technical specialist to contribute. Practical insight,
                cross-functional perspective, and commitment to safer systems are all valuable here.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-gradient-to-br from-white to-[#F8FAF2] p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
                Cost of Data Leakage
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#30400D] sm:text-4xl">
                The average cost of a data breach reached $4.88M in 2024.
              </h2>
              <p className="mt-3 text-sm font-semibold text-[#30400D]/72">
                Average global breach cost benchmark (IBM 2024).
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <article className="rounded-2xl border border-[#30400D]/10 bg-white/75 p-5">
                  <h3 className="text-lg font-bold text-[#30400D]">Significant Financial Costs</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#30400D]/78">
                    Recovery expenses include forensics, legal work, customer notification, and
                    support. Ransomware demands can exceed $1.1M, and regulatory fines can reach 4%
                    of global turnover under strict regimes.
                  </p>
                </article>

                <article className="rounded-2xl border border-[#30400D]/10 bg-white/75 p-5">
                  <h3 className="text-lg font-bold text-[#30400D]">
                    Reputational Damage and Lost Trust
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#30400D]/78">
                    Breaches trigger churn, weaken brand confidence, and can reduce long-term demand.
                    Negative experiences spread quickly and make acquiring new customers harder.
                  </p>
                </article>

                <article className="rounded-2xl border border-[#30400D]/10 bg-white/75 p-5">
                  <h3 className="text-lg font-bold text-[#30400D]">Operational Disruption</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#30400D]/78">
                    Investigations and containment can force downtime, disrupt workflows, and reduce
                    productivity for weeks as teams adapt to emergency controls.
                  </p>
                </article>

                <article className="rounded-2xl border border-[#30400D]/10 bg-white/75 p-5">
                  <h3 className="text-lg font-bold text-[#30400D]">
                    Loss of Intellectual Property
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#30400D]/78">
                    Leaked product plans, trade secrets, or proprietary data can erase years of R&D
                    advantage and create long-term revenue drag.
                  </p>
                </article>

                <article className="rounded-2xl border border-[#30400D]/10 bg-white/75 p-5 sm:col-span-2 lg:col-span-2">
                  <h3 className="text-lg font-bold text-[#30400D]">
                    Legal and Compliance Liabilities
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#30400D]/78">
                    Exposure incidents often lead to class-action claims, partner disputes, and
                    compliance penalties, creating ongoing legal and contractual obligations.
                  </p>
                </article>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#30400D]">Common Causes of Data Leaks</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl border border-[#30400D]/10 bg-white/75 px-4 py-3 text-sm font-medium text-[#30400D]/82">
                    Human Error: mis-sent files, phishing clicks, and unsafe handling.
                  </div>
                  <div className="rounded-xl border border-[#30400D]/10 bg-white/75 px-4 py-3 text-sm font-medium text-[#30400D]/82">
                    System Misconfiguration: exposed cloud storage and weak defaults.
                  </div>
                  <div className="rounded-xl border border-[#30400D]/10 bg-white/75 px-4 py-3 text-sm font-medium text-[#30400D]/82">
                    Third-Party Vulnerabilities: vendor access paths becoming weak points.
                  </div>
                  <div className="rounded-xl border border-[#30400D]/10 bg-white/75 px-4 py-3 text-sm font-medium text-[#30400D]/82">
                    Malicious Insiders: intentional exfiltration by trusted users.
                  </div>
                </div>
              </div>

              <p className="mt-7 max-w-4xl text-base font-medium leading-relaxed text-[#30400D]/78 sm:text-lg">
                Reducing these risks requires proactive controls, practical playbooks, and
                cross-team collaboration. That is the purpose of this consortium.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
