# The Average Company (IBM-Derived Snapshot)

**A composite operating profile built from IBM-derived evidence.**

This is an aggregated reference model, not a universal truth. Use it to pressure-test assumptions, compare your current posture, and identify where control quality and response readiness are most likely to fail.

---

## Primary source

| Field | Detail |
|-------|--------|
| **Full report name** | **IBM Cost of a Data Breach Report 2025** — *Cost of a Data Breach Report 2025: The AI Oversight Gap* |
| **Publisher** | IBM Security, in partnership with the Ponemon Institute |
| **Download** | [IBM Cost of a Data Breach Report](https://www.ibm.com/downloads/documents/us-en/131cf87b20b31c91) |
| **Report hub** | [ibm.com/reports/data-breach](https://www.ibm.com/reports/data-breach) |

Profile signals below are synthesized from IBM 2025 findings and consortium research artifacts. Unless noted, cite: *IBM Cost of a Data Breach Report 2025 (The AI Oversight Gap).*

---

## At a glance — four headline dimensions

| Dimension | Value | What it means |
|-----------|-------|----------------|
| **Security program maturity** | Level 2 (Intermediate) | Documented program, but still largely reactive in execution |
| **Expected breach cost** | **$6.68M** | Base breach cost plus commonly cited shadow AI and skills-shortage premiums |
| **Detection and containment time** | **241 days** | Extended attacker dwell time remains a core risk multiplier |
| **Recovery window** | **100+ days** | Most organizations report prolonged disruption after major incidents |

### How the $6.68M expected cost is composed

| Component | Amount | Notes |
|-----------|--------|-------|
| Base average breach cost | $4.44M | Per incident, before layered premiums |
| Shadow AI premium | +$670K | Additional cost when shadow AI is a factor |
| Skills shortage premium | +$1.57M | Cost premium per breach tied to staffing gaps |
| **Composite reference** | **~$6.68M** | Illustrative stacked model used on the consortium page |

---

## Profile signals overview

**23 profile signals** across **6 categories**. Risk levels: **4 critical**, **13 high**, **6 medium**.

| Category | Signals | Critical | High | Medium |
|----------|---------|----------|------|--------|
| Security Staffing & Skills | 3 | 0 | 2 | 1 |
| AI Governance & Shadow AI | 4 | 3 | 1 | 0 |
| Breach Likelihood & Impact | 5 | 1 | 4 | 0 |
| Attack Surface & Vulnerabilities | 5 | 1 | 3 | 1 |
| Security Investment & Maturity | 4 | 0 | 2 | 2 |
| Governance & Compliance Posture | 3 | 1 | 1 | 1 |

---

## Security staffing & skills

| Metric | Risk | Typical state | Observed impact |
|--------|------|---------------|-----------------|
| Skills shortage level | High | High shortage (**48%** of organizations) | **$1.57M** cost premium per breach |
| Internal assessment capability | High | **50%** rely solely on internal teams for AI model evasion assessments | Potential blind spots in AI security assessments |
| Security team maturity | Medium | Level 2 maturity with documented policies but reactive posture | Execution gaps between policy intent and operational reality |

### Skills shortage level

- **Typical state:** High shortage (48% of organizations)
- **Observed impact:** $1.57M cost premium per breach
- **What this means in practice:** Understaffed teams struggle to maintain implementation quality, which increases exposure during active incidents.

### Internal assessment capability

- **Typical state:** 50% rely solely on internal teams for AI model evasion assessments
- **Observed impact:** Potential blind spots in AI security assessments
- **What this means in practice:** Specialized adversarial AI risks are often evaluated without dedicated expertise or external challenge.

### Security team maturity

- **Typical state:** Level 2 maturity with documented policies but reactive posture
- **Observed impact:** Execution gaps between policy intent and operational reality
- **What this means in practice:** Policy existence does not guarantee reliable control behavior during real workflow pressure.

---

## AI governance & shadow AI

| Metric | Risk | Typical state | Observed impact |
|--------|------|---------------|-----------------|
| AI governance policies | **Critical** | **63%** have no AI governance policies in place | Uncontrolled AI proliferation and compliance risk |
| AI access controls | **Critical** | **97%** of AI breach victims lacked proper access controls | Wide-open AI systems vulnerable to unauthorized access |
| Shadow AI prevalence | **Critical** | **80–98%** have unauthorized AI tool usage | **+$670K** additional breach cost and elevated leakage risk |
| BYOAI (bring your own AI) | High | **78%** of AI users bring their own tools to work | Sensitive data exposure and governance blind spots |

### AI governance policies

- **Typical state:** 63% have no AI governance policies in place
- **Observed impact:** Uncontrolled AI proliferation and compliance risk
- **What this means in practice:** Most environments still lack baseline governance structure while AI usage continues to expand.

> **Note:** The consortium “Stats That Matter” section cites **41%** with no *formal* AI governance policies. This profile uses **63%** with no policies *in place*—likely different survey wording or cohort. Do not merge without verifying against the IBM PDF.

### AI access controls

- **Typical state:** 97% of AI breach victims lacked proper access controls
- **Observed impact:** Wide-open AI systems vulnerable to unauthorized access
- **What this means in practice:** Access discipline remains the highest-priority control gap in AI-related incidents.

### Shadow AI prevalence

- **Typical state:** 80–98% have unauthorized AI tool usage
- **Observed impact:** +$670K additional breach cost and elevated leakage risk
- **What this means in practice:** Unauthorized tool adoption is not edge-case behavior; it is widespread and expensive.

### BYOAI (bring your own AI)

- **Typical state:** 78% of AI users bring their own tools to work
- **Observed impact:** Sensitive data exposure and governance blind spots
- **What this means in practice:** Employee-led tool choice often bypasses formal risk review and control pathways.

---

## Breach likelihood & impact

| Metric | Risk | Typical state | Observed impact |
|--------|------|---------------|-----------------|
| Likelihood of breach | High | Effectively inevitable on a long timeline | Resilience quality becomes as important as prevention |
| Average breach cost | High | **$4.44M** per incident (before premiums) | Significant financial exposure for most organizations |
| Detection time | **Critical** | **241 days** to identify and contain | Extended attacker dwell time maximizes damage |
| Operational disruption | High | **86%** experience business disruption from breaches | Revenue and service impact can persist for months |
| Recovery timeline | High | **76%** require over 100 days to recover | Extended customer and organizational impact windows |

### Likelihood of breach

- **Typical state:** Effectively inevitable on a long timeline
- **Observed impact:** Resilience quality becomes as important as prevention
- **What this means in practice:** Programs must optimize for containment and recovery readiness, not prevention-only narratives.

### Average breach cost

- **Typical state:** $4.44M per incident (before premiums)
- **Observed impact:** Significant financial exposure for most organizations
- **What this means in practice:** Financial consequence is substantial even before layered effects from shadow AI and skills shortages.

### Detection time

- **Typical state:** 241 days to identify and contain
- **Observed impact:** Extended attacker dwell time maximizes damage
- **What this means in practice:** Long detection cycles allow threat actors to move laterally and deepen impact before response begins.

### Operational disruption

- **Typical state:** 86% experience business disruption from breaches
- **Observed impact:** Revenue and service impact can persist for months
- **What this means in practice:** Incident impact is operational, not only technical, requiring business-wide response ownership.

### Recovery timeline

- **Typical state:** 76% require over 100 days to recover
- **Observed impact:** Extended customer and organizational impact windows
- **What this means in practice:** Recovery planning quality is a direct determinant of business continuity under breach conditions.

---

## Attack surface & vulnerabilities

| Metric | Risk | Typical state | Observed impact |
|--------|------|---------------|-----------------|
| Primary attack vector | High | Supply chain compromise drives **~30%** of AI incidents | Vendor security posture directly affects internal risk |
| Third-party AI dependency | High | **29%** of AI incidents originate from SaaS vendors | Limited direct control over critical AI risk pathways |
| Security tool complexity | Medium | High complexity and disconnected tools remain common | Blind spots persist despite increased tool count |
| Data leakage risk | **Critical** | **44%** of shadow AI incidents result in data compromise | Persistent exfiltration risk through ungoverned AI usage |
| Identity and access management | High | Lax controls, over-permissioned accounts, and low visibility | Credential-based attacks bypass otherwise strong technical controls |

### Primary attack vector

- **Typical state:** Supply chain compromise drives ~30% of AI incidents
- **Observed impact:** Vendor security posture directly affects internal risk
- **What this means in practice:** Third-party exposure management is not optional; it is central to enterprise AI risk reduction.

### Third-party AI dependency

- **Typical state:** 29% of AI incidents originate from SaaS vendors
- **Observed impact:** Limited direct control over critical AI risk pathways
- **What this means in practice:** Organizations inherit meaningful risk from vendor AI controls they cannot fully govern themselves.

### Security tool complexity

- **Typical state:** High complexity and disconnected tools remain common
- **Observed impact:** Blind spots persist despite increased tool count
- **What this means in practice:** More tooling without integration discipline can amplify risk and operational overhead.

### Data leakage risk

- **Typical state:** 44% of shadow AI incidents result in data compromise
- **Observed impact:** Persistent exfiltration risk through ungoverned AI usage
- **What this means in practice:** Shadow AI is a direct leakage channel, not just a governance policy concern.

### Identity and access management

- **Typical state:** Lax controls, over-permissioned accounts, and low visibility
- **Observed impact:** Credential-based attacks bypass otherwise strong technical controls
- **What this means in practice:** Identity hygiene remains foundational because many attackers log in rather than exploit directly.

---

## Security investment & maturity

| Metric | Risk | Typical state | Observed impact |
|--------|------|---------------|-----------------|
| Post-breach investment appetite | Medium | **51%** will not increase spending after a breach | Known vulnerabilities can persist even after incidents |
| Security capabilities deployed | Medium | Basic defenses present; key cost reducers often missing | Programs remain exposed to preventable high-cost failure modes |
| AI security tool usage | High | Minority have deployed AI-powered defensive tooling | Defenders often lag behind attacker speed and adaptation |
| Incident response preparedness | High | Only **35%** plan post-breach investment in IR planning/testing | Insufficient rehearsal extends operational disruption |

### Post-breach investment appetite

- **Typical state:** 51% will not increase spending after a breach
- **Observed impact:** Known vulnerabilities can persist even after incidents
- **What this means in practice:** Improvement depends on disciplined prioritization, not automatic post-breach budget expansion.

> **Related stat (Stats That Matter):** 49% *plan to increase* security investment after a breach (down from 63% YoY). The 51% figure describes organizations that *will not* increase spend—complementary views of the same tightening budget environment.

### Security capabilities deployed

- **Typical state:** Basic defenses present; key cost reducers often missing
- **Observed impact:** Programs remain exposed to preventable high-cost failure modes
- **What this means in practice:** Capability maturity depends on implementation quality and integration, not checklist completion.

### AI security tool usage

- **Typical state:** Minority have deployed AI-powered defensive tooling
- **Observed impact:** Defenders often lag behind attacker speed and adaptation
- **What this means in practice:** Automation and AI-assisted workflows are increasingly required to keep pace with attack velocity.

### Incident response preparedness

- **Typical state:** Only 35% plan post-breach investment in IR planning/testing
- **Observed impact:** Insufficient rehearsal extends operational disruption
- **What this means in practice:** IR quality is a muscle developed through repetition, not static documentation.

---

## Governance & compliance posture

| Metric | Risk | Typical state | Observed impact |
|--------|------|---------------|-----------------|
| AI governance framework quality | Medium | Approval-process-heavy governance among the minority with policies | Front-end control without durable oversight |
| Cross-functional coordination | High | Security and governance teams frequently operate in silos | Policy-implementation gaps and duplicated effort |
| Shadow AI discovery practice | **Critical** | Many organizations do not actively search for shadow AI | Unknown attack surface and unenforceable policy boundaries |

### AI governance framework quality

- **Typical state:** Approval-process-heavy governance among the minority with policies
- **Observed impact:** Front-end control without durable oversight
- **What this means in practice:** Approval gates alone do not create sustained control over AI usage and risk drift.

### Cross-functional coordination

- **Typical state:** Security and governance teams frequently operate in silos
- **Observed impact:** Policy-implementation gaps and duplicated effort
- **What this means in practice:** Shared cadence between security, risk, and compliance is required for consistent implementation.

### Shadow AI discovery practice

- **Typical state:** Many organizations do not actively search for shadow AI
- **Observed impact:** Unknown attack surface and unenforceable policy boundaries
- **What this means in practice:** You cannot govern what you do not inventory; discovery discipline is foundational to control quality.

---

## Critical signals — priority checklist

Use this short list when comparing your organization to the composite profile:

1. **97%** of AI breach victims lacked proper AI access controls  
2. **63%** have no AI governance policies in place  
3. **80–98%** unauthorized AI tool usage; **44%** of shadow AI incidents → data compromise  
4. **241 days** to identify and contain; **76%** need **100+ days** to recover  
5. **86%** experience operational disruption from breaches  
6. **48%** face high skills shortage (**$1.57M** breach premium)  
7. Many orgs **do not actively search** for shadow AI  

---

## How to use this profile

| Use case | Suggested action |
|----------|------------------|
| **Benchmarking** | Map each category to your current controls and note gaps vs. typical state |
| **Board / exec brief** | Lead with the four headline dimensions and expected breach cost stack |
| **Program planning** | Start with critical signals in AI governance, shadow AI, and detection/recovery |
| **Investment cases** | Pair 51% post-breach spend stagnation with 35% IR investment intent—argue for disciplined, measurable controls over tool sprawl |

---

## Related documents

- [Data Leakage Consortium — full evidence summary](./data-leakage-consortium-summary.md) (includes “Stats That Matter” and consortium context)
- [Data Leakage Consortium page](https://kahana.co/data-leakage-consortium)

---

*Derived from `data/average-organization-profile.js` and the “Average Company” section in `pages/data-leakage-consortium.jsx`.*
