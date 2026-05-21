# AI-in-Browser Data Protection Consortium — Problem & Evidence Summary

Organizations are adopting AI inside the browser faster than they can govern it. According to the **IBM Cost of a Data Breach Report 2025** (*Cost of a Data Breach Report 2025: The AI Oversight Gap*), published by IBM Security in partnership with the Ponemon Institute, the majority of organizations with AI-related incidents lacked proper AI access controls, a large share still have no formal AI governance, and most breaches cause operational disruption lasting more than 100 days. Meanwhile, preventable cost drivers—including skills shortages, shadow AI, and missing security fundamentals—compound breach impact. The **AI-in-Browser Data Protection Consortium** exists so security leaders can share practical, evidence-based patterns to close that oversight gap without stalling productivity.

---

## Executive summary

### The problem

- **Confidential data is leaking through browser-based AI tools**—prompts, copy/paste, uploads, and extensions—often outside the visibility of traditional DLP and SASE controls.
- IBM-derived evidence cited on the consortium page indicates organizations face **$2.9M+ in preventable costs** tied to skills shortages, shadow AI, and missing security fundamentals.
- **Shadow AI is widespread**: unauthorized tool use, bring-your-own-AI behavior, and weak discovery practices create governance blind spots and direct data-compromise risk.
- **Access and governance lag adoption**: most environments lack reliable AI access boundaries and formal governance baselines while AI usage continues to expand.

### The big relevant change

- **AI moved into the browser as a default productivity surface** while security programs remain largely reactive (documented policies, inconsistent operational execution).
- IBM’s 2025 framing centers on the **“AI Oversight Gap”**: AI adoption and AI-related incidents are outpacing formal governance, access discipline, and operational resilience.
- **Post-breach investment appetite is shrinking**: 49% of organizations plan to increase security investment after a breach, down from 63% year-over-year—so impact must come from **implementation discipline and measurable controls**, not automatic budget expansion or more disconnected tools.

### Consortium response (brief)

An operator-led, invitation-only community of security leaders, practitioners, vendors, and researchers building practical standards to prevent confidential data leakage through browser-based AI tools. Mission: make AI usage in the browser **visible, governable, and safe** through browser-layer controls, telemetry standards, and governance frameworks.

---

## Primary source

All statistics below are drawn from the consortium site’s curated IBM 2025 subset and composite “average company” reference model unless noted otherwise. They are **not** a full reproduction of the report.

| Field | Detail |
|-------|--------|
| **Full report name** | **IBM Cost of a Data Breach Report 2025** — *Cost of a Data Breach Report 2025: The AI Oversight Gap* |
| **Publisher** | IBM Security, in partnership with the Ponemon Institute |
| **Download (site link)** | [IBM Cost of a Data Breach Report](https://www.ibm.com/downloads/documents/us-en/131cf87b20b31c91) |
| **Report hub** | [ibm.com/reports/data-breach](https://www.ibm.com/reports/data-breach) |

*Source: IBM Cost of a Data Breach Report 2025 (The AI Oversight Gap).*

---

## Key figures (cross-cutting)

| Figure | Context |
|--------|---------|
| **$2.9M+** | Preventable costs from skills shortages, shadow AI, and missing security fundamentals (consortium page narrative) |
| **$4.44M** | Average breach cost per incident (before layered premiums) |
| **$6.68M** | Expected breach cost in composite “average company” model (base + shadow AI + skills-shortage premiums) |
| **$1.57M** | Cost premium per breach tied to skills shortage |
| **+$670K** | Additional breach cost associated with shadow AI |
| **241 days** | Typical time to identify and contain a breach |
| **100+ days** | Recovery window for most organizations after major incidents |
| **44%** | Shadow AI incidents that result in data compromise |

---

## Stats that matter

Evidence-forward metrics guiding where consortium effort should focus first.  
*Source for each: IBM Cost of a Data Breach Report 2025 (The AI Oversight Gap).*

### 97% — AI access controls gap

**Headline:** Of organizations with AI-related incidents, 97% lacked proper AI access controls.

**Summary:** Access discipline is still missing in many environments where incidents already occurred.

**Detail:** AI systems are being adopted faster than control frameworks are being implemented. Without reliable access boundaries, organizations lose confidence in who can see or move sensitive data.

**Why this matters:** The consortium should prioritize access design, identity hygiene, and control verification before scaling AI workflows.

---

### 49% — Post-breach investment (declining)

**Headline:** 49% plan to increase security investment after a breach (down from 63% year-over-year).

**Summary:** Teams are becoming more selective about where security spend produces real impact.

**Detail:** The trend suggests reduced appetite for reactive tool expansion and higher demand for evidence-backed implementation discipline.

**Why this matters:** Consortium guidance should emphasize measurable, reproducible controls and avoid adding low-signal complexity.

---

### 86% — Operational disruption

**Headline:** 86% of breaches result in operational disruption.

**Summary:** Even when a breach is contained, business operations are often disrupted for extended periods.

**Detail:** Disruption costs are not limited to direct incident response. Teams face workflow interruption, degraded trust, and prolonged recovery burdens.

**Why this matters:** Resilience practices must be treated as core work, including tested runbooks, backup restoration drills, and clear role ownership.

---

### 76% — Recovery duration

**Headline:** 76% take over 100 days to fully recover from breach impacts.

**Summary:** Recovery windows are frequently long, even in organizations with mature security tooling.

**Detail:** Slow recovery often reflects execution gaps: unclear ownership, untested restoration workflows, and fragmented decision loops across teams.

**Why this matters:** The consortium should focus on reducing recovery uncertainty through recurring exercises and post-incident learning cycles.

---

### 41% — No formal AI governance policy

**Headline:** 41% report no formal AI governance policies in place.

**Summary:** A large share of organizations still operate AI without a complete governance baseline.

**Detail:** When security and governance evolve in separate lanes, organizations accumulate policy drift, inconsistent enforcement, and preventable ambiguity.

**Why this matters:** Consortium outputs should align security, risk, and compliance workflows into one shared operating model.

> **Editor’s note:** The “average company” profile elsewhere on the site cites **63%** with no AI governance policies. Wording and survey cohort may differ (e.g. “no formal policies” vs. “no policies in place”). Verify both against the IBM PDF before consolidating into a single public figure.

---

### 22% — AI governance still in development

**Headline:** 22% are still developing AI governance policies.

**Summary:** Many teams have started governance work but have not yet operationalized it.

**Detail:** Partially implemented governance often creates false confidence: policies exist on paper while operational controls remain inconsistent.

**Why this matters:** The consortium should provide implementation-ready patterns and decision criteria that move governance from draft to durable practice.

---

## The average company (IBM-derived snapshot)

Aggregated reference model—not a universal truth. Use it to pressure-test assumptions, compare current posture, and identify where control quality and response readiness are most likely to fail.

### Overview

| Dimension | Value | Context |
|-----------|-------|---------|
| **Security Program Maturity** | Level 2 (Intermediate) | Documented program, but still largely reactive in execution |
| **Expected Breach Cost** | $6.68M | Base breach cost plus commonly cited shadow AI and skills-shortage premiums |
| **Detection and Containment Time** | 241 days | Extended attacker dwell time remains a core risk multiplier |
| **Recovery Window** | 100+ days | Most organizations report prolonged disruption after major incidents |

---

### Security staffing & skills

#### Skills shortage level

| | |
|---|---|
| **Typical state** | High shortage (48% of organizations) |
| **Observed impact** | $1.57M cost premium per breach |
| **Risk signal** | High |
| **In practice** | Understaffed teams struggle to maintain implementation quality, which increases exposure during active incidents. |

*Source: IBM Cost of a Data Breach Report 2025 (The AI Oversight Gap).*

#### Internal assessment capability

| | |
|---|---|
| **Typical state** | 50% rely solely on internal teams for AI model evasion assessments |
| **Observed impact** | Potential blind spots in AI security assessments |
| **Risk signal** | High |
| **In practice** | Specialized adversarial AI risks are often evaluated without dedicated expertise or external challenge. |

#### Security team maturity

| | |
|---|---|
| **Typical state** | Level 2 maturity with documented policies but reactive posture |
| **Observed impact** | Execution gaps between policy intent and operational reality |
| **Risk signal** | Medium |
| **In practice** | Policy existence does not guarantee reliable control behavior during real workflow pressure. |

---

### AI governance & shadow AI

#### AI governance policies

| | |
|---|---|
| **Typical state** | 63% have no AI governance policies in place |
| **Observed impact** | Uncontrolled AI proliferation and compliance risk |
| **Risk signal** | Critical |
| **In practice** | Most environments still lack baseline governance structure while AI usage continues to expand. |

*Source: IBM Cost of a Data Breach Report 2025 (The AI Oversight Gap).*

#### AI access controls

| | |
|---|---|
| **Typical state** | 97% of AI breach victims lacked proper access controls |
| **Observed impact** | Wide-open AI systems vulnerable to unauthorized access |
| **Risk signal** | Critical |
| **In practice** | Access discipline remains the highest-priority control gap in AI-related incidents. |

#### Shadow AI prevalence

| | |
|---|---|
| **Typical state** | 80–98% have unauthorized AI tool usage |
| **Observed impact** | +$670K additional breach cost and elevated leakage risk |
| **Risk signal** | Critical |
| **In practice** | Unauthorized tool adoption is not edge-case behavior; it is widespread and expensive. |

#### BYOAI (bring your own AI)

| | |
|---|---|
| **Typical state** | 78% of AI users bring their own tools to work |
| **Observed impact** | Sensitive data exposure and governance blind spots |
| **Risk signal** | High |
| **In practice** | Employee-led tool choice often bypasses formal risk review and control pathways. |

---

### Breach likelihood & impact

#### Likelihood of breach

| | |
|---|---|
| **Typical state** | Effectively inevitable on a long timeline |
| **Observed impact** | Resilience quality becomes as important as prevention |
| **Risk signal** | High |
| **In practice** | Programs must optimize for containment and recovery readiness, not prevention-only narratives. |

#### Average breach cost

| | |
|---|---|
| **Typical state** | $4.44M per incident (before premiums) |
| **Observed impact** | Significant financial exposure for most organizations |
| **Risk signal** | High |
| **In practice** | Financial consequence is substantial even before layered effects from shadow AI and skills shortages. |

#### Detection time

| | |
|---|---|
| **Typical state** | 241 days to identify and contain |
| **Observed impact** | Extended attacker dwell time maximizes damage |
| **Risk signal** | Critical |
| **In practice** | Long detection cycles allow threat actors to move laterally and deepen impact before response begins. |

#### Operational disruption

| | |
|---|---|
| **Typical state** | 86% experience business disruption from breaches |
| **Observed impact** | Revenue and service impact can persist for months |
| **Risk signal** | High |
| **In practice** | Incident impact is operational, not only technical, requiring business-wide response ownership. |

#### Recovery timeline

| | |
|---|---|
| **Typical state** | 76% require over 100 days to recover |
| **Observed impact** | Extended customer and organizational impact windows |
| **Risk signal** | High |
| **In practice** | Recovery planning quality is a direct determinant of business continuity under breach conditions. |

---

### Attack surface & vulnerabilities

#### Primary attack vector

| | |
|---|---|
| **Typical state** | Supply chain compromise drives ~30% of AI incidents |
| **Observed impact** | Vendor security posture directly affects internal risk |
| **Risk signal** | High |
| **In practice** | Third-party exposure management is not optional; it is central to enterprise AI risk reduction. |

#### Third-party AI dependency

| | |
|---|---|
| **Typical state** | 29% of AI incidents originate from SaaS vendors |
| **Observed impact** | Limited direct control over critical AI risk pathways |
| **Risk signal** | High |
| **In practice** | Organizations inherit meaningful risk from vendor AI controls they cannot fully govern themselves. |

#### Security tool complexity

| | |
|---|---|
| **Typical state** | High complexity and disconnected tools remain common |
| **Observed impact** | Blind spots persist despite increased tool count |
| **Risk signal** | Medium |
| **In practice** | More tooling without integration discipline can amplify risk and operational overhead. |

#### Data leakage risk

| | |
|---|---|
| **Typical state** | 44% of shadow AI incidents result in data compromise |
| **Observed impact** | Persistent exfiltration risk through ungoverned AI usage |
| **Risk signal** | Critical |
| **In practice** | Shadow AI is a direct leakage channel, not just a governance policy concern. |

#### Identity and access management

| | |
|---|---|
| **Typical state** | Lax controls, over-permissioned accounts, and low visibility |
| **Observed impact** | Credential-based attacks bypass otherwise strong technical controls |
| **Risk signal** | High |
| **In practice** | Identity hygiene remains foundational because many attackers log in rather than exploit directly. |

---

### Security investment & maturity

#### Post-breach investment appetite

| | |
|---|---|
| **Typical state** | 51% will not increase spending after a breach |
| **Observed impact** | Known vulnerabilities can persist even after incidents |
| **Risk signal** | Medium |
| **In practice** | Improvement depends on disciplined prioritization, not automatic post-breach budget expansion. |

#### Security capabilities deployed

| | |
|---|---|
| **Typical state** | Basic defenses present; key cost reducers often missing |
| **Observed impact** | Programs remain exposed to preventable high-cost failure modes |
| **Risk signal** | Medium |
| **In practice** | Capability maturity depends on implementation quality and integration, not checklist completion. |

#### AI security tool usage

| | |
|---|---|
| **Typical state** | Minority have deployed AI-powered defensive tooling |
| **Observed impact** | Defenders often lag behind attacker speed and adaptation |
| **Risk signal** | High |
| **In practice** | Automation and AI-assisted workflows are increasingly required to keep pace with attack velocity. |

#### Incident response preparedness

| | |
|---|---|
| **Typical state** | Only 35% plan post-breach investment in IR planning/testing |
| **Observed impact** | Insufficient rehearsal extends operational disruption |
| **Risk signal** | High |
| **In practice** | IR quality is a muscle developed through repetition, not static documentation. |

---

### Governance & compliance posture

#### AI governance framework quality

| | |
|---|---|
| **Typical state** | Approval-process-heavy governance among the minority with policies |
| **Observed impact** | Front-end control without durable oversight |
| **Risk signal** | Medium |
| **In practice** | Approval gates alone do not create sustained control over AI usage and risk drift. |

#### Cross-functional coordination

| | |
|---|---|
| **Typical state** | Security and governance teams frequently operate in silos |
| **Observed impact** | Policy-implementation gaps and duplicated effort |
| **Risk signal** | High |
| **In practice** | Shared cadence between security, risk, and compliance is required for consistent implementation. |

#### Shadow AI discovery practice

| | |
|---|---|
| **Typical state** | Many organizations do not actively search for shadow AI |
| **Observed impact** | Unknown attack surface and unenforceable policy boundaries |
| **Risk signal** | Critical |
| **In practice** | You cannot govern what you do not inventory; discovery discipline is foundational to control quality. |

---

## Framework workstreams (consortium focus areas)

1. **Cost mitigation practices** — Practical control patterns that reduce avoidable leakage response burden without claiming fixed financial outcomes.
2. **AI governance and shadow AI** — Enforceable governance baselines for prompts, uploads, and extensions so unmanaged AI usage can be identified and addressed.
3. **Supply chain risk coordination** — Member learning around third-party and SaaS-linked leakage paths with common assessment and response practices.
4. **Skills and capability development** — Operator depth through shared exercises, implementation reviews, and cross-functional learning loops.
5. **Operational resilience** — Containment and recovery readiness through tested playbooks and repeatable workflows.
6. **Complexity reduction and integration** — Align telemetry, standards, and control integration practices across member environments.

---

## References

- [The Average Company — IBM-derived snapshot (detailed)](./average-company-ibm-snapshot.md)
- [IBM Cost of a Data Breach Report 2025 (download)](https://www.ibm.com/downloads/documents/us-en/131cf87b20b31c91)
- [IBM Cost of a Data Breach — report hub](https://www.ibm.com/reports/data-breach)
- [Data Leakage Consortium page](https://kahana.co/data-leakage-consortium) (live site)

---

*Derived from `pages/data-leakage-consortium.jsx`, `data/consortium-stats.js`, and `data/average-organization-profile.js`. Generic product metrics in `components/StatsSection.jsx` are unrelated to this evidence summary.*
