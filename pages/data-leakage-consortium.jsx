import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SEO from "../components/SEO";
import { CONSORTIUM_STATS } from "../data/consortium-stats";
import {
  AVERAGE_COMPANY_METRICS,
  AVERAGE_COMPANY_OVERVIEW,
} from "../data/average-organization-profile";
import {
  CONSORTIUM_SIGNAL_USERNAME,
  consortiumSignalContactUrl,
} from "../data/consortium-contact";
import {
  CONSORTIUM_FAQS,
  CONSORTIUM_FAQ_REFERENCES,
  FAQ_BOTTOM_LINE,
  getConsortiumFaqSearchText,
} from "../data/consortium-faqs";
const CHARTER_PRINCIPLES = [
  "Consortium-first: members prioritize shared problem-solving over organizational positioning.",
  "Evidence-first: proposals are grounded in implementation data, not assumptions.",
  "Transparency under constraints: decisions are documented with rationale and open questions.",
  "No guaranteed success: difficult work and uncertainty are expected parts of this effort.",
];
const CHARTER_NON_GOALS = [
  "A vendor marketing channel or product comparison forum.",
  "A legal certification body or compliance guarantee authority.",
  "A place to share sensitive raw production data, secrets, or regulated records.",
];
const FRAMEWORK_PILLARS = [
  {
    title: "Cost Mitigation Practices",
    body: "Develop and test practical control patterns that reduce avoidable leakage response burden without claiming fixed financial outcomes.",
  },
  {
    title: "AI Governance and Shadow AI",
    body: "Define enforceable governance baselines for prompts, uploads, and extensions so unmanaged AI usage can be identified and addressed.",
  },
  {
    title: "Supply Chain Risk Coordination",
    body: "Coordinate member learning around third-party and SaaS-linked leakage paths with common assessment and response practices.",
  },
  {
    title: "Skills and Capability Development",
    body: "Build operator depth through shared exercises, implementation reviews, and cross-functional learning loops.",
  },
  {
    title: "Operational Resilience",
    body: "Improve containment and recovery readiness through tested playbooks and repeatable workflows.",
  },
  {
    title: "Complexity Reduction and Integration",
    body: "Reduce governance fragmentation by aligning telemetry, standards, and control integration practices across member environments.",
  },
];
const STATS_PAGE_SIZE = 6;
const COMPANY_METRICS_PAGE_SIZE = 6;
const RISK_SIGNAL_STYLES = {
  critical: "border border-[#E8BCBC] bg-[#FDE8E8] text-[#5C1010]",
  high: "border border-[#E5C9A8] bg-[#FFF0E0] text-[#5C2E00]",
  medium: "border border-[#CAD399] bg-[#F2F4E5] text-[#313a00]",
  low: "border border-[#B8CCA0] bg-[#E8F0DC] text-[#3d4a00]",
};

export default function DataLeakageConsortiumPage() {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [selectedStat, setSelectedStat] = useState(null);
  const [companyCategory, setCompanyCategory] = useState("all");
  const [companySearch, setCompanySearch] = useState("");
  const [selectedCompanyMetricId, setSelectedCompanyMetricId] = useState(
    AVERAGE_COMPANY_METRICS[0]?.id || null,
  );
  const [companyMetricsPage, setCompanyMetricsPage] = useState(1);
  const [faqSearch, setFaqSearch] = useState("");

  const availableYears = useMemo(() => {
    const yearSet = new Set(CONSORTIUM_STATS.map((stat) => String(stat.reportYear)));
    return Array.from(yearSet).sort((a, b) => Number(b) - Number(a));
  }, []);

  const filteredStats = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return CONSORTIUM_STATS.filter((stat) => {
      const yearMatches = yearFilter === "all" || String(stat.reportYear) === yearFilter;
      if (!yearMatches) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        stat.value,
        stat.headline,
        stat.summary,
        stat.detail,
        stat.whyItMatters,
        stat.category,
        stat.reportName,
        ...(stat.tags || []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query, yearFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredStats.length / STATS_PAGE_SIZE));
  const paginatedStats = useMemo(() => {
    const start = (page - 1) * STATS_PAGE_SIZE;
    return filteredStats.slice(start, start + STATS_PAGE_SIZE);
  }, [filteredStats, page]);

  const companyCategories = useMemo(() => {
    const categories = new Set(AVERAGE_COMPANY_METRICS.map((metric) => metric.category));
    return ["all", ...Array.from(categories)];
  }, []);

  const filteredCompanyMetrics = useMemo(() => {
    const normalizedSearch = companySearch.trim().toLowerCase();
    return AVERAGE_COMPANY_METRICS.filter((metric) => {
      const categoryMatch = companyCategory === "all" || metric.category === companyCategory;
      if (!categoryMatch) return false;
      if (!normalizedSearch) return true;
      const haystack = [
        metric.category,
        metric.metric,
        metric.typicalState,
        metric.impact,
        metric.interpretation,
        ...(metric.sourceRefs || []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedSearch);
    });
  }, [companyCategory, companySearch]);

  const companyMetricsTotalPages = Math.max(
    1,
    Math.ceil(filteredCompanyMetrics.length / COMPANY_METRICS_PAGE_SIZE),
  );
  const safeCompanyMetricsPage = Math.min(companyMetricsPage, companyMetricsTotalPages);
  const paginatedCompanyMetrics = useMemo(() => {
    const start = (safeCompanyMetricsPage - 1) * COMPANY_METRICS_PAGE_SIZE;
    return filteredCompanyMetrics.slice(start, start + COMPANY_METRICS_PAGE_SIZE);
  }, [filteredCompanyMetrics, safeCompanyMetricsPage]);

  const companyMetricsRange = useMemo(() => {
    if (!filteredCompanyMetrics.length) {
      return { start: 0, end: 0 };
    }
    const start = (safeCompanyMetricsPage - 1) * COMPANY_METRICS_PAGE_SIZE + 1;
    const end = Math.min(
      safeCompanyMetricsPage * COMPANY_METRICS_PAGE_SIZE,
      filteredCompanyMetrics.length,
    );
    return { start, end };
  }, [filteredCompanyMetrics, safeCompanyMetricsPage]);

  const selectedCompanyMetric = useMemo(
    () => filteredCompanyMetrics.find((metric) => metric.id === selectedCompanyMetricId) || null,
    [filteredCompanyMetrics, selectedCompanyMetricId],
  );

  const filteredFaqs = useMemo(() => {
    const q = faqSearch.trim().toLowerCase();
    if (!q) return CONSORTIUM_FAQS;
    return CONSORTIUM_FAQS.filter((item) => getConsortiumFaqSearchText(item).includes(q));
  }, [faqSearch]);

  useEffect(() => {
    setPage(1);
  }, [query, yearFilter]);

  useEffect(() => {
    setCompanyMetricsPage(1);
  }, [companyCategory, companySearch]);

  useEffect(() => {
    if (companyMetricsPage > companyMetricsTotalPages) {
      setCompanyMetricsPage(companyMetricsTotalPages);
    }
  }, [companyMetricsPage, companyMetricsTotalPages]);

  useEffect(() => {
    if (!filteredCompanyMetrics.length) {
      setSelectedCompanyMetricId(null);
      return;
    }
    const inFiltered = filteredCompanyMetrics.some((m) => m.id === selectedCompanyMetricId);
    if (!selectedCompanyMetricId || !inFiltered) {
      setSelectedCompanyMetricId(filteredCompanyMetrics[0].id);
      return;
    }
    const inPage = paginatedCompanyMetrics.some((m) => m.id === selectedCompanyMetricId);
    if (!inPage && paginatedCompanyMetrics.length) {
      setSelectedCompanyMetricId(paginatedCompanyMetrics[0].id);
    }
  }, [
    filteredCompanyMetrics,
    paginatedCompanyMetrics,
    selectedCompanyMetricId,
  ]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  useEffect(() => {
    if (!selectedStat) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedStat(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedStat]);

  const consortiumSignalDisplay = CONSORTIUM_SIGNAL_USERNAME.startsWith("@")
    ? CONSORTIUM_SIGNAL_USERNAME
    : `@${CONSORTIUM_SIGNAL_USERNAME}`;
  const consortiumSignalOpenUrl = consortiumSignalContactUrl();

  return (
    <>
      <SEO
        title="Data Leakage Consortium"
        description="Invitation-only consortium for security leaders: trust-based membership on Signal, practical work on AI-in-browser leakage, governance, and incident response—aligned with IBM Cost of a Data Breach findings."
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
              Invitation-only · Trust-based membership
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[#30400D] sm:text-5xl lg:text-6xl">
              AI-in-Browser Data Protection Consortium
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#30400D]/80 sm:text-xl">
              An operator-led consortium of security leaders, practitioners, vendors, and
              researchers building practical standards to prevent confidential data leakage through
              browser-based AI tools.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6">
              <div className="flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
                <a
                  href="#how-to-join"
                  className="btn-primary inline-flex items-center justify-center rounded-[27.5px] px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline"
                >
                  How to Join
                </a>
                <a
                  href="#faq"
                  className="btn-secondary inline-flex items-center justify-center rounded-[27.5px] px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline"
                >
                  Consortium FAQs
                </a>
              </div>
              <aside
                aria-label="How membership and Signal work"
                className="w-full max-w-2xl rounded-2xl border border-[#30400D]/14 bg-white/85 px-5 py-5 text-left shadow-[0_8px_32px_rgba(48,64,13,0.06)] backdrop-blur-sm sm:px-6 sm:py-6"
              >
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                  <Image
                    src="/images/signal-logo.png"
                    alt="Signal — end-to-end encrypted messaging used for private consortium coordination"
                    width={280}
                    height={147}
                    className="h-10 w-auto shrink-0 object-contain sm:h-11"
                    priority
                  />
                  <p className="text-center text-sm leading-relaxed text-[#30400D]/85 sm:text-left sm:text-base">
                    Accepted members collaborate in a private Signal space (not a public channel or
                    open forum). Membership is invitation-only: current members vouch for people
                    they know, or you can request access via Signal as described in{" "}
                    <a
                      href="#how-to-join"
                      className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                    >
                      How to Join
                    </a>
                    .
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="what-we-are" className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-gradient-to-br from-white to-[#F8FAF2] p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
                About
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#30400D] sm:text-4xl">What We Are</h2>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#30400D]/82 sm:text-lg">
                A private community where security professionals discuss breach prevention, AI
                governance, supply chain security, and incident response.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#30400D]/82 sm:text-lg">
                Based on IBM&apos;s finding that organizations face $2.9M+ in preventable costs from
                skills shortages, shadow AI, and missing security fundamentals. See the{" "}
                <a
                  href="https://www.ibm.com/downloads/documents/us-en/131cf87b20b31c91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                >
                  IBM Cost of a Data Breach Report
                </a>{" "}
                for underlying research.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-[#30400D]">Core Principles</h3>
              <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-base leading-relaxed text-[#30400D]/82">
                <li>
                  <strong className="text-[#30400D]">Confidentiality:</strong> Chatham House Rule
                  applies
                </li>
                <li>
                  <strong className="text-[#30400D]">Privacy:</strong> Default anonymity and
                  pseudonymous participation supported
                </li>
                <li>
                  <strong className="text-[#30400D]">Free:</strong> No membership fees
                </li>
                <li>
                  <strong className="text-[#30400D]">Invitation-only:</strong> Growth through member
                  vouching
                </li>
                <li>
                  <strong className="text-[#30400D]">Collaboration:</strong> Defensive, not
                  competitive
                </li>
              </ul>
              <h3 className="mt-8 text-xl font-semibold text-[#30400D]">What Members Discuss</h3>
              <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-base leading-relaxed text-[#30400D]/82">
                <li>AI governance and shadow AI elimination</li>
                <li>Supply chain security and vendor risk</li>
                <li>Breach prevention and incident response</li>
                <li>Security frameworks and implementation</li>
                <li>Skills development and peer learning</li>
              </ul>
              <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#30400D]/82 sm:text-lg">
                Members share only what they&apos;re comfortable with. No obligation to disclose
                organizational vulnerabilities.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-[#30400D]">Why Signal?</h3>
              <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#30400D]/82 sm:text-lg">
                <strong className="font-semibold text-[#30400D]">Signal</strong> is a free, nonprofit
                messaging app for private chats and small groups—not a public social network. We use
                it for consortium intake and private working discussions because it is built for
                confidential peer communication.
              </p>
              <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#30400D]/82 sm:text-lg">
                End-to-end encryption. Minimal metadata collection. No corporate infrastructure to
                breach. Members control their privacy and data. New to Signal?{" "}
                <a
                  href="https://signal.org/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                >
                  Download here
                </a>{" "}
                and consider{" "}
                <a
                  href="https://signal.org/blog/phone-number-privacy-usernames/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                >
                  usernames and phone-number privacy settings
                </a>{" "}
                before you reach out to join.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-[#30400D]">Privacy-first design</h3>
              <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#30400D]/82 sm:text-lg">
                The consortium is designed for candid discussion of real security challenges. Members
                use pseudonymous usernames and share context (industry, org size, challenges) without
                revealing identifying information. That enables honest conversations about
                vulnerabilities, failures, and lessons learned without personal or organizational
                exposure. Your sponsor knows your identity for accountability, but the broader
                community doesn&apos;t need to—giving you both trust and privacy.
              </p>
            </div>
          </div>
        </section>

        <section id="how-to-join" className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-white p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
                Membership
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#30400D] sm:text-4xl">How to Join</h2>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#30400D]/82 sm:text-lg">
                This consortium operates on trust networks. Members vouch for people they know
                professionally.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-[#30400D]">Two Ways to Join</h3>
              <div className="mt-4 space-y-6 max-w-4xl text-base leading-relaxed text-[#30400D]/82">
                <div>
                  <p className="font-semibold text-[#30400D]">Option 1: Referral (Primary Path)</p>
                  <p className="mt-2">Ask a current member to vouch for you.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#30400D]">Option 2: Direct Request (Limited)</p>
                  <p className="mt-2">
                    Message{" "}
                    {consortiumSignalOpenUrl ? (
                      <a
                        href={consortiumSignalOpenUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                      >
                        {consortiumSignalDisplay}
                      </a>
                    ) : (
                      <span className="font-semibold text-[#30400D]">{consortiumSignalDisplay}</span>
                    )}{" "}
                    on Signal.
                  </p>
                  <p className="mt-3 font-semibold text-[#30400D]">Include:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Your security role</li>
                    <li>Specific challenge you&apos;re focused on</li>
                    <li>How you discovered the consortium</li>
                  </ul>
                  <p className="mt-3 text-sm text-[#30400D]/78">
                    You&apos;ll receive a response within 2–3 business days.
                  </p>
                </div>
              </div>
              <h3 className="mt-10 text-xl font-semibold text-[#30400D]">What to Expect</h3>
              <p className="mt-2 max-w-4xl text-sm font-semibold uppercase tracking-[0.08em] text-[#617500]">
                After initial vetting conversation
              </p>
              <ul className="mt-3 max-w-4xl list-disc space-y-2 pl-5 text-base leading-relaxed text-[#30400D]/82">
                <li>Invitation to private screening channel</li>
                <li>Review of consortium framework</li>
                <li>Questions answered before you commit</li>
                <li>No obligation until you accept</li>
              </ul>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#30400D]/82 sm:text-lg">
                Invitations are selective to maintain trust and quality.
              </p>
            </div>
          </div>
        </section>

        <div className="consortium-metric-surfaces">
        <section className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
              The Stats That Matter
            </p>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#30400D]/78 sm:text-lg">
              Evidence-forward metrics to guide where consortium effort should focus first.
            </p>
            <div className="mt-5 rounded-2xl border border-[#30400D]/10 bg-white p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                <label htmlFor="stats-search" className="sr-only">
                  Search metrics
                </label>
                <input
                  id="stats-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by topic, keyword, or report..."
                  className="w-full rounded-lg border border-[#30400D]/20 px-3 py-2 text-sm text-[#30400D] placeholder:text-[#30400D]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                />
                <label htmlFor="stats-year-filter" className="sr-only">
                  Filter by report year
                </label>
                <select
                  id="stats-year-filter"
                  value={yearFilter}
                  onChange={(event) => setYearFilter(event.target.value)}
                  className="rounded-lg border border-[#30400D]/20 bg-white px-3 py-2 text-sm text-[#30400D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                >
                  <option value="all">All years</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#617500] sm:text-right">
                  {filteredStats.length} metric{filteredStats.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedStats.map((stat) => (
                <button
                  key={stat.id}
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded={selectedStat?.id === stat.id}
                  onClick={() => setSelectedStat(stat)}
                  className="consortium-tile-button text-left font-sans rounded-xl border border-[#30400D]/10 shadow-sm min-h-[220px] flex flex-col transition-colors hover:border-brand-link/35 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                >
                  <div className="text-4xl font-bold tracking-tight text-[#30400D] mb-2 tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[#30400D] mb-2 leading-snug">
                    {stat.headline}
                  </div>
                  <div className="text-sm text-[#30400D]/82 leading-relaxed flex-1">{stat.summary}</div>
                  <div className="mt-3 text-xs text-[#30400D]/60">
                    {stat.reportName} · {stat.reportYear}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#617500]">
                    Click for context
                  </div>
                </button>
              ))}
            </div>
            {filteredStats.length === 0 && (
              <div className="mt-6 rounded-xl border border-dashed border-[#30400D]/20 bg-white p-6 text-sm text-[#30400D]/70">
                No metrics match your current search and filters.
              </div>
            )}
            {filteredStats.length > 0 && totalPages > 1 && (
              <nav className="mt-6 flex items-center justify-center gap-4" aria-label="Metrics pagination">
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  disabled={page <= 1}
                  className="consortium-page-button rounded-lg border border-[#30400D]/20 px-4 py-2 text-sm font-semibold text-[#30400D] shadow-sm transition-colors disabled:pointer-events-none disabled:opacity-40"
                >
                  Previous
                </button>
                <span className="text-sm tabular-nums text-[#30400D]/82">
                  Page {page} of {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                  disabled={page >= totalPages}
                  className="consortium-page-button rounded-lg border border-[#30400D]/20 px-4 py-2 text-sm font-semibold text-[#30400D] shadow-sm transition-colors disabled:pointer-events-none disabled:opacity-40"
                >
                  Next
                </button>
              </nav>
            )}
            <p className="mt-4 text-sm text-[#30400D]/70">
              Sources include:{" "}
              <a
                href="https://www.ibm.com/downloads/documents/us-en/131cf87b20b31c91"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
              >
                IBM Cost of a Data Breach Report
              </a>
            </p>
          </div>
        </section>

        <section className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
              The Average Company (IBM-Derived Snapshot)
            </p>
            <h2 className="mt-3 max-w-4xl text-2xl font-bold text-[#30400D] sm:text-3xl">
              A composite operating profile built from IBM-derived evidence.
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#30400D]/78">
              This is an aggregated reference model, not a universal truth. Use it to pressure-test
              assumptions, compare your current posture, and identify where control quality and
              response readiness are most likely to fail.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AVERAGE_COMPANY_OVERVIEW.map((card) => (
                <article
                  key={card.id}
                  className="rounded-xl border border-[#30400D]/10 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#617500]">
                    {card.label}
                  </p>
                  <p className="mt-2 text-xl font-bold text-[#30400D]">{card.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#30400D]/78">{card.context}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#30400D]/10 bg-white p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <label htmlFor="average-company-search" className="sr-only">
                  Search average company metrics
                </label>
                <input
                  id="average-company-search"
                  type="search"
                  value={companySearch}
                  onChange={(event) => setCompanySearch(event.target.value)}
                  placeholder="Search metrics, impacts, or sources..."
                  className="w-full rounded-lg border border-[#30400D]/20 px-3 py-2 text-sm text-[#30400D] placeholder:text-[#30400D]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#617500] sm:text-right">
                  {filteredCompanyMetrics.length} profile signal
                  {filteredCompanyMetrics.length === 1 ? "" : "s"}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {companyCategories.map((category) => {
                  const isActive = companyCategory === category;
                  const label = category === "all" ? "All categories" : category;
                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setCompanyCategory(category)}
                      className={`consortium-chip-button rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        isActive ? "consortium-chip-button--active" : ""
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
              <div className="rounded-2xl border border-[#30400D]/10 bg-white p-4 sm:p-5">
                {filteredCompanyMetrics.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-[#30400D]/20 bg-white p-5 text-sm text-[#30400D]/70">
                    No profile signals match the current search or category filter.
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {paginatedCompanyMetrics.map((metric) => {
                        const isActive = metric.id === selectedCompanyMetricId;
                        return (
                          <button
                            key={metric.id}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => setSelectedCompanyMetricId(metric.id)}
                            className={`consortium-tile-button flex h-full min-h-[140px] w-full flex-col rounded-xl border p-4 text-left transition-colors ${
                              isActive
                                ? "consortium-tile-button--selected border-[#30400D]"
                                : "border-[#30400D]/10 hover:border-brand-link/35"
                            }`}
                          >
                            <div className="flex flex-wrap items-start justify-between gap-2">
                              <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-[#30400D]">
                                {metric.metric}
                              </p>
                              <span
                                className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] ${
                                  RISK_SIGNAL_STYLES[metric.riskSignal] || RISK_SIGNAL_STYLES.medium
                                }`}
                              >
                                {metric.riskSignal}
                              </span>
                            </div>
                            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#30400D]/75">
                              {metric.typicalState}
                            </p>
                            <p className="mt-auto pt-2 text-xs text-[#30400D]/58">{metric.category}</p>
                          </button>
                        );
                      })}
                    </div>
                    {companyMetricsTotalPages > 1 && (
                      <nav
                        className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4"
                        aria-label="Profile signals pagination"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setCompanyMetricsPage((current) => Math.max(1, current - 1))
                          }
                          disabled={safeCompanyMetricsPage <= 1}
                          className="consortium-page-button rounded-lg border border-[#30400D]/20 px-4 py-2 text-sm font-semibold text-[#30400D] shadow-sm transition-colors disabled:pointer-events-none disabled:opacity-40"
                        >
                          Previous
                        </button>
                        <span className="text-sm tabular-nums text-[#30400D]/82">
                          Page {safeCompanyMetricsPage} of {companyMetricsTotalPages}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setCompanyMetricsPage((current) =>
                              Math.min(companyMetricsTotalPages, current + 1),
                            )
                          }
                          disabled={safeCompanyMetricsPage >= companyMetricsTotalPages}
                          className="consortium-page-button rounded-lg border border-[#30400D]/20 px-4 py-2 text-sm font-semibold text-[#30400D] shadow-sm transition-colors disabled:pointer-events-none disabled:opacity-40"
                        >
                          Next
                        </button>
                      </nav>
                    )}
                    <p className="mt-3 text-center text-xs tabular-nums text-[#30400D]/65 sm:text-left">
                      Showing {companyMetricsRange.start}–{companyMetricsRange.end} of{" "}
                      {filteredCompanyMetrics.length} signal
                      {filteredCompanyMetrics.length === 1 ? "" : "s"}
                    </p>
                  </>
                )}
              </div>

              <aside className="rounded-2xl border border-[#30400D]/10 bg-white p-5 sm:p-6">
                {selectedCompanyMetric ? (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#617500]">
                      Metric Detail
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#30400D]">
                      {selectedCompanyMetric.metric}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-[#30400D]">Typical state</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#30400D]/82">
                      {selectedCompanyMetric.typicalState}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#30400D]">Observed impact</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#30400D]/82">
                      {selectedCompanyMetric.impact}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#30400D]">
                      What this means in practice
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#30400D]/82">
                      {selectedCompanyMetric.interpretation}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#30400D]">Source references</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#30400D]/75">
                      {selectedCompanyMetric.sourceRefs.join(" · ")}
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-[#30400D]/72">
                    Select a metric to view detail and interpretation.
                  </p>
                )}
              </aside>
            </div>
          </div>
        </section>
        </div>

        <section className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-white p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
                Mission and Scope
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#30400D] sm:text-4xl">
                Make AI usage in the browser visible, governable, and safe.
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#30400D]/78 sm:text-lg">
                We define browser-layer controls, telemetry standards, and governance frameworks so
                organizations can unlock AI productivity without leaking regulated or confidential
                data.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#30400D]/10 bg-[#F8FAF2] p-5 text-[#30400D]/82">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#617500]">
                    What We Do
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    Publish practical patterns for prompt, copy/paste, and upload controls; define
                    telemetry fields that quantify risk; and ship adoption playbooks with measured
                    outcomes.
                  </p>
                </div>
                <div className="rounded-xl border border-[#30400D]/10 bg-[#F8FAF2] p-5 text-[#30400D]/82">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#617500]">
                    What We Do Not Do
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    We are not a product marketplace, legal authority, or a guarantee against
                    incidents. We focus on operator-tested guidance and implementation rigor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-gradient-to-br from-white to-[#F8FAF2] p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
                Consortium Charter
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#30400D] sm:text-4xl">
                Shared mission, explicit boundaries, serious collaboration.
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#30400D]/78 sm:text-lg">
                The consortium exists to solve a hard, unresolved security problem. We commit to
                disciplined collaboration, practical evidence, and transparent decision-making,
                while acknowledging that success is not guaranteed.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <article className="rounded-xl border border-[#30400D]/10 bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#30400D]">Principles</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#30400D]/80">
                    {CHARTER_PRINCIPLES.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-xl border border-[#30400D]/10 bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#30400D]">Non-goals</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#30400D]/80">
                    {CHARTER_NON_GOALS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
              Framework Workstreams
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#30400D] sm:text-4xl">
              Six pillars of focused consortium work
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FRAMEWORK_PILLARS.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-[#30400D]/10 bg-[#F8FAF2] p-6 shadow-[0_10px_24px_rgba(48,64,13,0.07)]"
                >
                  <h3 className="text-lg font-semibold text-[#30400D]">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#30400D]/80">{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-white p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <h2 className="text-3xl font-bold text-[#30400D]">Who Should Join</h2>
              <p className="mt-2 text-lg font-semibold text-[#30400D]/88 sm:text-xl">
                Built for security professionals with organizational responsibility.
              </p>
              <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#30400D]/78 sm:text-lg">
                Built for security professionals with organizational responsibility—CISOs, security
                directors, IT leadership, compliance officers, and incident responders. Default
                anonymity in the consortium helps you share lessons without unnecessary exposure.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#30400D]/10 p-5 text-[#30400D]/80">
                  <p className="font-semibold text-[#30400D]">Security leaders and IT owners</p>
                  <p className="mt-2 text-sm leading-relaxed">
                    Benchmark control effectiveness, compare governance approaches, and reduce
                    exposure without stalling AI adoption.
                  </p>
                </div>
                <div className="rounded-xl border border-[#30400D]/10 p-5 text-[#30400D]/80">
                  <p className="font-semibold text-[#30400D]">Operators and platform teams</p>
                  <p className="mt-2 text-sm leading-relaxed">
                    Pressure-test controls in peer environments and contribute practical
                    implementation patterns.
                  </p>
                </div>
                <div className="rounded-xl border border-[#30400D]/10 p-5 text-[#30400D]/80">
                  <p className="font-semibold text-[#30400D]">Practitioners and researchers</p>
                  <p className="mt-2 text-sm leading-relaxed">
                    Help define measurable telemetry and methods that close browser-layer blind
                    spots.
                  </p>
                </div>
                <div className="rounded-xl border border-[#30400D]/10 p-5 text-[#30400D]/80">
                  <p className="font-semibold text-[#30400D]">Vendors and ecosystem contributors</p>
                  <p className="mt-2 text-sm leading-relaxed">
                    Participate in a vendor-neutral forum to align real-world requirements with
                    practical capabilities.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm font-medium text-[#30400D]/70 sm:text-base">
                Contributions are most valuable when they are implementation-focused, anonymized
                where needed, and tied to measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-14 sm:pb-16">
          <div id="faq" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#30400D]/12 bg-gradient-to-br from-white to-[#F8FAF2] p-8 shadow-[0_14px_48px_rgba(48,64,13,0.08)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#617500]">
                Consortium FAQs
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#30400D] sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#30400D]/78 sm:text-lg">
                How membership works, default anonymity, confidentiality, and what to expect before
                you commit. Screening details and operational security measures are not spelled out
                on this public page.
              </p>
              <div className="mt-5 rounded-2xl border border-[#30400D]/10 bg-white p-4 sm:p-5">
                <label htmlFor="faq-search" className="sr-only">
                  Search frequently asked questions
                </label>
                <input
                  id="faq-search"
                  type="search"
                  value={faqSearch}
                  onChange={(event) => setFaqSearch(event.target.value)}
                  placeholder="Search questions and answers…"
                  className="w-full rounded-lg border border-[#30400D]/20 px-3 py-2 text-sm text-[#30400D] placeholder:text-[#30400D]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                  autoComplete="off"
                />
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#617500]">
                  {filteredFaqs.length === 0 && faqSearch.trim()
                    ? "No questions match your search"
                    : `${filteredFaqs.length} question${filteredFaqs.length === 1 ? "" : "s"}${
                        faqSearch.trim() ? " shown" : ""
                      }`}
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {filteredFaqs.map((item, index) => {
                  const prev = index > 0 ? filteredFaqs[index - 1] : null;
                  const showCategory = !prev || prev.category !== item.category;
                  return (
                    <div key={item.id}>
                      {showCategory && (
                        <h3
                          className={`text-sm font-bold uppercase tracking-[0.1em] text-[#617500] ${
                            index === 0 ? "mt-0 mb-2" : "mt-10 mb-2"
                          }`}
                        >
                          {item.category}
                        </h3>
                      )}
                      <details className="rounded-xl border border-[#30400D]/12 bg-white shadow-sm [&[open]_summary_.faq-chevron]:rotate-180">
                        <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-3 px-5 py-4 text-left text-base font-semibold text-[#30400D] [&::-webkit-details-marker]:hidden">
                          <span className="min-w-0 flex-1 pr-2">{item.question}</span>
                          <svg
                            className="faq-chevron mt-0.5 h-5 w-5 shrink-0 text-[#617500] transition-transform duration-200"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M7 10l5 5 5-5H7z" />
                          </svg>
                        </summary>
                        <div className="border-t border-[#30400D]/10 px-5 pb-5 pt-3 text-sm leading-relaxed text-[#30400D]/78">
                          {item.lead ? (
                            <p className="leading-relaxed text-[#30400D]/78">{item.lead}</p>
                          ) : null}
                          {item.supplementaryLinks?.length ? (
                            <p className="mt-3 flex flex-wrap gap-x-1 gap-y-1">
                              {item.supplementaryLinks.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                                >
                                  {link.label}
                                </a>
                              ))}
                            </p>
                          ) : null}
                          {item.paragraphs?.map((para, paraIndex) => (
                            <p
                              key={`${item.id}-p-${paraIndex}`}
                              className="mt-3 leading-relaxed text-[#30400D]/78"
                            >
                              {para}
                            </p>
                          ))}
                          {item.plainList?.length ? (
                            <ul className="mt-3 list-disc space-y-2 pl-5">
                              {item.plainList.map((line, lineIndex) => (
                                <li key={`${item.id}-li-${lineIndex}`}>{line}</li>
                              ))}
                            </ul>
                          ) : null}
                          {item.sections
                            ? item.sections.map((sec) => (
                                <div key={sec.heading} className="mt-4">
                                  <p className="font-semibold text-[#30400D]">{sec.heading}</p>
                                  <ul className="mt-2 list-disc space-y-2 pl-5">
                                    {sec.bullets.map((b) => (
                                      <li key={b.label}>
                                        <strong className="font-semibold text-[#30400D]">
                                          {b.label}
                                        </strong>
                                        {b.text ? (
                                          <span>
                                            {": "}
                                            {b.text}
                                          </span>
                                        ) : null}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))
                            : null}
                          {!item.sections && item.bullets?.length ? (
                            <ul className="mt-3 list-disc space-y-2 pl-5">
                              {item.bullets.map((b) => (
                                <li key={b.label}>
                                  <strong className="font-semibold text-[#30400D]">{b.label}</strong>
                                  {b.text ? (
                                    <span>
                                      {": "}
                                      {b.text}
                                    </span>
                                  ) : null}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                          {item.closing ? (
                            <p className="mt-3 leading-relaxed text-[#30400D]/78">{item.closing}</p>
                          ) : null}
                        </div>
                      </details>
                    </div>
                  );
                })}
              </div>
              {filteredFaqs.length === 0 ? (
                <div className="mt-6 rounded-xl border border-dashed border-[#30400D]/20 bg-white p-6 text-sm leading-relaxed text-[#30400D]/78">
                  <p className="font-semibold text-[#30400D]">No matching questions</p>
                  <p className="mt-2">
                    Nothing in this list matches your search. If you still need an answer, reach
                    out on the{" "}
                    <Link
                      href="/contact"
                      className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                    >
                      contact page
                    </Link>{" "}
                    and we will route it appropriately.
                  </p>
                </div>
              ) : null}
              <p className="mt-8 max-w-3xl border-t border-[#30400D]/10 pt-6 text-sm font-medium leading-relaxed text-[#30400D]/82">
                {FAQ_BOTTOM_LINE}
              </p>
              {CONSORTIUM_FAQ_REFERENCES.length > 0 ? (
                <details className="mt-6 rounded-xl border border-[#30400D]/12 bg-white px-5 py-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[#30400D] [&::-webkit-details-marker]:hidden">
                    References
                  </summary>
                  <ul className="mt-3 list-none space-y-2 pl-0 text-sm leading-relaxed">
                    {CONSORTIUM_FAQ_REFERENCES.map((ref) => (
                      <li key={ref.id}>
                        <a
                          href={ref.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                        >
                          {ref.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : null}
              <div className="mt-8 text-center">
                <a
                  href="#how-to-join"
                  className="btn-primary inline-flex items-center justify-center rounded-[27.5px] px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline"
                >
                  How to Join
                </a>
              </div>
            </div>
          </div>
        </section>

        {selectedStat && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#30400D]/55 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="stats-modal-title"
            onClick={() => setSelectedStat(null)}
          >
            <div
              className="w-full max-w-2xl rounded-2xl border border-[#30400D]/12 bg-white p-6 shadow-[0_20px_60px_rgba(48,64,13,0.22)] sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-4xl font-bold tracking-tight text-[#30400D] tabular-nums">
                    {selectedStat.value}
                  </p>
                  <h3 id="stats-modal-title" className="mt-2 text-xl font-semibold text-[#30400D]">
                    {selectedStat.headline}
                  </h3>
                  <p className="mt-2 text-sm text-[#30400D]/65">
                    {selectedStat.reportName} · {selectedStat.reportYear}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedStat(null)}
                  className="consortium-modal-dismiss inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#30400D]/15 text-[#30400D]/75 hover:bg-[#F8FAF2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
                  aria-label="Close stat details"
                >
                  ×
                </button>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#30400D]/82">{selectedStat.detail}</p>
              <p className="mt-4 rounded-lg border border-[#30400D]/10 bg-[#F8FAF2] p-4 text-sm leading-relaxed text-[#30400D]/82">
                <span className="font-semibold text-[#30400D]">Why this matters:</span>{" "}
                {selectedStat.whyItMatters}
              </p>
              <p className="mt-4 text-sm text-[#30400D]/70">
                Source:{" "}
                <a
                  href={selectedStat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-link underline decoration-2 underline-offset-2"
                >
                  {selectedStat.sourceLabel}
                </a>
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
