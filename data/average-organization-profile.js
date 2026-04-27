export const AVERAGE_COMPANY_OVERVIEW = [
  {
    id: "maturity",
    label: "Security Program Maturity",
    value: "Level 2 (Intermediate)",
    context: "Documented program, but still largely reactive in execution.",
  },
  {
    id: "expected-loss",
    label: "Expected Breach Cost",
    value: "$6.68M",
    context: "Base breach cost plus commonly cited shadow AI and skills-shortage premiums.",
  },
  {
    id: "detection-time",
    label: "Detection and Containment Time",
    value: "241 days",
    context: "Extended attacker dwell time remains a core risk multiplier.",
  },
  {
    id: "recovery-time",
    label: "Recovery Window",
    value: "100+ days",
    context: "Most organizations report prolonged disruption after major incidents.",
  },
];

export const AVERAGE_COMPANY_METRICS = [
  {
    id: "skills-shortage-level",
    category: "Security Staffing & Skills",
    metric: "Skills Shortage Level",
    typicalState: "High shortage (48% of organizations)",
    impact: "$1.57M cost premium per breach",
    riskSignal: "high",
    sourceRefs: ["IBM Cost of a Data Breach Report", "average_organization_profile_summary.csv"],
    interpretation:
      "Understaffed teams struggle to maintain implementation quality, which increases exposure during active incidents.",
  },
  {
    id: "internal-assessment-capability",
    category: "Security Staffing & Skills",
    metric: "Internal Assessment Capability",
    typicalState: "50% rely solely on internal teams for AI model evasion assessments",
    impact: "Potential blind spots in AI security assessments",
    riskSignal: "high",
    sourceRefs: ["average_organization_profile_summary.csv"],
    interpretation:
      "Specialized adversarial AI risks are often evaluated without dedicated expertise or external challenge.",
  },
  {
    id: "team-maturity",
    category: "Security Staffing & Skills",
    metric: "Security Team Maturity",
    typicalState: "Level 2 maturity with documented policies but reactive posture",
    impact: "Execution gaps between policy intent and operational reality",
    riskSignal: "medium",
    sourceRefs: ["now, based on all the information in the IBM repor.md"],
    interpretation:
      "Policy existence does not guarantee reliable control behavior during real workflow pressure.",
  },
  {
    id: "ai-governance-policies",
    category: "AI Governance & Shadow AI",
    metric: "AI Governance Policies",
    typicalState: "63% have no AI governance policies in place",
    impact: "Uncontrolled AI proliferation and compliance risk",
    riskSignal: "critical",
    sourceRefs: ["organization_snapshot.csv", "average_organization_profile_summary.csv"],
    interpretation:
      "Most environments still lack baseline governance structure while AI usage continues to expand.",
  },
  {
    id: "ai-access-controls",
    category: "AI Governance & Shadow AI",
    metric: "AI Access Controls",
    typicalState: "97% of AI breach victims lacked proper access controls",
    impact: "Wide-open AI systems vulnerable to unauthorized access",
    riskSignal: "critical",
    sourceRefs: ["organization_snapshot.csv", "average_organization_profile_summary.csv"],
    interpretation:
      "Access discipline remains the highest-priority control gap in AI-related incidents.",
  },
  {
    id: "shadow-ai-prevalence",
    category: "AI Governance & Shadow AI",
    metric: "Shadow AI Prevalence",
    typicalState: "80-98% have unauthorized AI tool usage",
    impact: "+$670K additional breach cost and elevated leakage risk",
    riskSignal: "critical",
    sourceRefs: ["organization_snapshot.csv", "average_organization_profile_summary.csv"],
    interpretation:
      "Unauthorized tool adoption is not edge-case behavior; it is widespread and expensive.",
  },
  {
    id: "byoai-usage",
    category: "AI Governance & Shadow AI",
    metric: "BYOAI (Bring Your Own AI)",
    typicalState: "78% of AI users bring their own tools to work",
    impact: "Sensitive data exposure and governance blind spots",
    riskSignal: "high",
    sourceRefs: ["average_organization_profile_summary.csv", "now, based on all the information in the IBM repor.md"],
    interpretation:
      "Employee-led tool choice often bypasses formal risk review and control pathways.",
  },
  {
    id: "breach-inevitability",
    category: "Breach Likelihood & Impact",
    metric: "Likelihood of Breach",
    typicalState: "Effectively inevitable on a long timeline",
    impact: "Resilience quality becomes as important as prevention",
    riskSignal: "high",
    sourceRefs: ["average_organization_profile_summary.csv", "now, based on all the information in the IBM repor.md"],
    interpretation:
      "Programs must optimize for containment and recovery readiness, not prevention-only narratives.",
  },
  {
    id: "average-breach-cost",
    category: "Breach Likelihood & Impact",
    metric: "Average Breach Cost",
    typicalState: "$4.44M per incident (before premiums)",
    impact: "Significant financial exposure for most organizations",
    riskSignal: "high",
    sourceRefs: ["organization_snapshot.csv", "average_organization_profile_summary.csv"],
    interpretation:
      "Financial consequence is substantial even before layered effects from shadow AI and skills shortages.",
  },
  {
    id: "detection-time",
    category: "Breach Likelihood & Impact",
    metric: "Detection Time",
    typicalState: "241 days to identify and contain",
    impact: "Extended attacker dwell time maximizes damage",
    riskSignal: "critical",
    sourceRefs: ["organization_snapshot.csv", "average_organization_profile_summary.csv"],
    interpretation:
      "Long detection cycles allow threat actors to move laterally and deepen impact before response begins.",
  },
  {
    id: "operational-disruption",
    category: "Breach Likelihood & Impact",
    metric: "Operational Disruption",
    typicalState: "86% experience business disruption from breaches",
    impact: "Revenue and service impact can persist for months",
    riskSignal: "high",
    sourceRefs: ["organization_snapshot.csv", "average_organization_profile_summary.csv"],
    interpretation:
      "Incident impact is operational, not only technical, requiring business-wide response ownership.",
  },
  {
    id: "recovery-timeline",
    category: "Breach Likelihood & Impact",
    metric: "Recovery Timeline",
    typicalState: "76% require over 100 days to recover",
    impact: "Extended customer and organizational impact windows",
    riskSignal: "high",
    sourceRefs: ["organization_snapshot.csv", "average_organization_profile_summary.csv"],
    interpretation:
      "Recovery planning quality is a direct determinant of business continuity under breach conditions.",
  },
  {
    id: "primary-attack-vector",
    category: "Attack Surface & Vulnerabilities",
    metric: "Primary Attack Vector",
    typicalState: "Supply chain compromise drives ~30% of AI incidents",
    impact: "Vendor security posture directly affects internal risk",
    riskSignal: "high",
    sourceRefs: ["organization_snapshot.csv", "average_organization_profile_summary.csv"],
    interpretation:
      "Third-party exposure management is not optional; it is central to enterprise AI risk reduction.",
  },
  {
    id: "third-party-ai-dependency",
    category: "Attack Surface & Vulnerabilities",
    metric: "Third-Party AI Dependency",
    typicalState: "29% of AI incidents originate from SaaS vendors",
    impact: "Limited direct control over critical AI risk pathways",
    riskSignal: "high",
    sourceRefs: ["average_organization_profile_summary.csv", "now, based on all the information in the IBM repor.md"],
    interpretation:
      "Organizations inherit meaningful risk from vendor AI controls they cannot fully govern themselves.",
  },
  {
    id: "security-tool-complexity",
    category: "Attack Surface & Vulnerabilities",
    metric: "Security Tool Complexity",
    typicalState: "High complexity and disconnected tools remain common",
    impact: "Blind spots persist despite increased tool count",
    riskSignal: "medium",
    sourceRefs: ["average_organization_profile_summary.csv", "now, based on all the information in the IBM repor.md"],
    interpretation:
      "More tooling without integration discipline can amplify risk and operational overhead.",
  },
  {
    id: "data-leakage-risk",
    category: "Attack Surface & Vulnerabilities",
    metric: "Data Leakage Risk",
    typicalState: "44% of shadow AI incidents result in data compromise",
    impact: "Persistent exfiltration risk through ungoverned AI usage",
    riskSignal: "critical",
    sourceRefs: ["average_organization_profile_summary.csv", "now, based on all the information in the IBM repor.md"],
    interpretation:
      "Shadow AI is a direct leakage channel, not just a governance policy concern.",
  },
  {
    id: "iam-state",
    category: "Attack Surface & Vulnerabilities",
    metric: "Identity and Access Management",
    typicalState: "Lax controls, over-permissioned accounts, and low visibility",
    impact: "Credential-based attacks bypass otherwise strong technical controls",
    riskSignal: "high",
    sourceRefs: ["average_organization_profile_summary.csv", "now, based on all the information in the IBM repor.md"],
    interpretation:
      "Identity hygiene remains foundational because many attackers log in rather than exploit directly.",
  },
  {
    id: "post-breach-investment-appetite",
    category: "Security Investment & Maturity",
    metric: "Post-Breach Investment Appetite",
    typicalState: "51% will not increase spending after a breach",
    impact: "Known vulnerabilities can persist even after incidents",
    riskSignal: "medium",
    sourceRefs: ["organization_snapshot.csv", "average_organization_profile_summary.csv"],
    interpretation:
      "Improvement depends on disciplined prioritization, not automatic post-breach budget expansion.",
  },
  {
    id: "capabilities-deployed",
    category: "Security Investment & Maturity",
    metric: "Security Capabilities Deployed",
    typicalState: "Basic defenses present, key cost reducers often missing",
    impact: "Programs remain exposed to preventable high-cost failure modes",
    riskSignal: "medium",
    sourceRefs: ["average_organization_profile_summary.csv"],
    interpretation:
      "Capability maturity depends on implementation quality and integration, not checklist completion.",
  },
  {
    id: "ai-security-tool-usage",
    category: "Security Investment & Maturity",
    metric: "AI Security Tool Usage",
    typicalState: "Minority have deployed AI-powered defensive tooling",
    impact: "Defenders often lag behind attacker speed and adaptation",
    riskSignal: "high",
    sourceRefs: ["average_organization_profile_summary.csv", "now, based on all the information in the IBM repor.md"],
    interpretation:
      "Automation and AI-assisted workflows are increasingly required to keep pace with attack velocity.",
  },
  {
    id: "ir-preparedness",
    category: "Security Investment & Maturity",
    metric: "Incident Response Preparedness",
    typicalState: "Only 35% plan post-breach investment in IR planning/testing",
    impact: "Insufficient rehearsal extends operational disruption",
    riskSignal: "high",
    sourceRefs: ["average_organization_profile_summary.csv"],
    interpretation:
      "IR quality is a muscle developed through repetition, not static documentation.",
  },
  {
    id: "governance-framework-quality",
    category: "Governance & Compliance Posture",
    metric: "AI Governance Framework Quality",
    typicalState: "Approval-process-heavy governance among the minority with policies",
    impact: "Front-end control without durable oversight",
    riskSignal: "medium",
    sourceRefs: ["average_organization_profile_summary.csv"],
    interpretation:
      "Approval gates alone do not create sustained control over AI usage and risk drift.",
  },
  {
    id: "cross-functional-coordination",
    category: "Governance & Compliance Posture",
    metric: "Cross-Functional Coordination",
    typicalState: "Security and governance teams frequently operate in silos",
    impact: "Policy-implementation gaps and duplicated effort",
    riskSignal: "high",
    sourceRefs: ["average_organization_profile_summary.csv"],
    interpretation:
      "Shared cadence between security, risk, and compliance is required for consistent implementation.",
  },
  {
    id: "shadow-ai-discovery",
    category: "Governance & Compliance Posture",
    metric: "Shadow AI Discovery Practice",
    typicalState: "Many organizations do not actively search for shadow AI",
    impact: "Unknown attack surface and unenforceable policy boundaries",
    riskSignal: "critical",
    sourceRefs: ["average_organization_profile_summary.csv", "now, based on all the information in the IBM repor.md"],
    interpretation:
      "You cannot govern what you do not inventory; discovery discipline is foundational to control quality.",
  },
];

