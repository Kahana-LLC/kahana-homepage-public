# Culture Amp Contractor Access Business Case and ROI Model

## Purpose
This document captures the full business case and ROI logic behind the Culture Amp contractor-access scenario shown in the Q1 executive report. It is written so product and engineering teams can directly convert the model into interactive website components where prospects can estimate ROI for their own organizations.

## Executive Summary
- A late-stage enterprise prospect (Culture Amp) evaluated Oasis for secure contractor access to SaaS apps.
- Current approach: ship managed laptops to contractors.
- Proposed approach: provide managed browser access under BYOD, integrated with enterprise identity and DLP controls.
- Core economic insight: Oasis pricing is flat annually, while laptop-path cost scales linearly with contractor count.
- Result: breakeven around 8 contractors, then savings increase rapidly as contractor volume grows.

## Prospect Context and Problem
Culture Amp described a common enterprise constraint:
- They need secure SaaS access for short-term consultants.
- They prefer avoiding laptop shipping when possible.
- They require identity and data protection controls.

### Verbatim Requirement Summary
- Secure access to SaaS for short-term consultants.
- Managed browser instead of shipping laptops.
- Integrations: Okta (identity), Netskope (DLP).
- No local admin privileges required.
- Chromium engine compatibility preferred.

## Commercial Context
- **Oasis baseline price:** `$12,000/year` per organization (flat, not seat-based in the base model).
- **Prospect budget ceiling:** up to `$25,000/year` for this category.
- **Prospect-reported laptop path cost:** about `$1,500` per contractor (fully loaded).
- **Illustrative contractor scope:** around `20` contractors.

## ROI Model Inputs
Use these as first-class inputs in interactive components.

- `contractor_count` (`N`): Number of contractors needing access per year.
- `laptop_path_cost_per_contractor` (`C_laptop`): Fully loaded annualized cost per contractor for hardware path.
- `oasis_annual_subscription` (`C_oasis`): Annual Oasis subscription.

### Default Input Values (from case study)
- `N`: scenario variable (10, 15, 20, 25, 30 shown)
- `C_laptop`: `$1,500`
- `C_oasis`: `$12,000`

## Core Formulas
- **Avoided laptop-path spend**
  - `avoided_cost = N * C_laptop`
- **Net savings per year**
  - `net_savings = avoided_cost - C_oasis`
- **Percent saved vs. laptop path**
  - `percent_saved = net_savings / avoided_cost`
- **ROI vs. subscription**
  - `roi_vs_subscription = net_savings / C_oasis`
- **Breakeven contractor count**
  - `breakeven_N = C_oasis / C_laptop`

For default values:
- `breakeven_N = 12,000 / 1,500 = 8`

## Illustrative Scenario Table (from report)
These are directional/illustrative and should be clearly labeled as such in UI.

| Contractors (N) | Avoided (N x ~$1.5k) | Oasis (flat) | Net savings / year | % saved vs. laptop path | ROI vs. subscription |
|---|---:|---:|---:|---:|---:|
| 10 | ~$15,000 | $12,000 | ~$3,000 | ~20% | ~25% |
| 15 | ~$22,500 | $12,000 | ~$10,500 | ~47% | ~88% |
| 20 | ~$30,000 | $12,000 | ~$18,000 | ~60% | ~150% |
| 25 | ~$37,500 | $12,000 | ~$25,500 | ~68% | ~213% |
| 30 | ~$45,000 | $12,000 | ~$33,000 | ~73% | ~275% |

## Business Case Narrative You Can Reuse
When contractor access is handled via shipped managed laptops, cost and delay rise with each additional contractor. A managed enterprise browser can remove or materially reduce those hardware/logistics costs while preserving enterprise controls (identity, DLP, policy enforcement). Because Oasis is priced as a flat annual subscription, economics improve as contractor volume increases: once the organization passes breakeven (~8 contractors at the case assumptions), each additional contractor drives higher net savings and stronger ROI.

## Value Drivers Beyond Direct Cost
These are not fully quantified in the base table but are important for interactive storytelling and future model versions.

- **Faster contractor onboarding:** less waiting on shipping and device setup.
- **Reduced operational overhead:** less procurement, logistics, and IT handling.
- **Security/compliance posture:** centralized browser policy and DLP-aligned access.
- **BYOD compatibility:** supports contractors without requiring corporate hardware.
- **Predictable spend profile:** flat subscription can simplify annual planning.

## Risks, Caveats, and Disclosure Language
Include these disclaimers in UI/marketing surfaces:

- Figures are illustrative and based on case-provided assumptions.
- Actual savings vary with internal labor allocation, shipping patterns, and support burden.
- Not all laptop costs may be fully avoidable in every org or contractor segment.
- Integration and rollout effort can affect first-year economics.
- ROI estimates should be treated as directional decision support, not guaranteed outcomes.

## Suggested Interactive Calculator Structure

### 1) Required Inputs
- Number of contractors per year.
- Fully loaded per-contractor laptop-path cost.
- Oasis annual subscription.

### 2) Optional Advanced Inputs
- Average shipping delay days.
- Hourly cost of contractor wait time.
- IT setup/support cost per contractor.
- Partial adoption percentage (if only some contractors move to browser model).

### 3) Output Cards
- Total avoided laptop-path cost.
- Net annual savings.
- Percent saved vs. current approach.
- ROI vs. subscription.
- Breakeven contractor count.

### 4) Visualization Ideas
- Line chart: `net_savings` vs. contractor count.
- Breakeven marker at `breakeven_N`.
- Sensitivity sliders for laptop cost and subscription cost.
- Table view with low/base/high scenarios.

## Suggested Data Shape for Frontend Components
Use a simple, serializable object model:

```json
{
  "inputs": {
    "contractorCount": 20,
    "laptopCostPerContractor": 1500,
    "oasisAnnualSubscription": 12000
  },
  "computed": {
    "avoidedCost": 30000,
    "netSavings": 18000,
    "percentSaved": 0.6,
    "roiVsSubscription": 1.5,
    "breakevenContractors": 8
  }
}
```

## Implementation Notes for Product/Engineering
- Keep formulas centralized in one utility module to avoid drift across components.
- Show both percentage and dollar outputs side by side.
- Make rounding rules explicit (e.g., nearest whole dollar, nearest whole percent).
- Label assumptions and default values prominently.
- Include reset-to-default and share/export options.
- Preserve transparency: show formula text near outputs.

## Messaging Positioning
This business case is strongest when framed as:
- **Security + operations + economics**, not cost alone.
- **Replace hardware friction with policy-governed browser access**.
- **Start with contractor-heavy teams where breakeven is reached quickly**.

## Source Reference
Derived from the Culture Amp case-study ROI section in:
- `financial-dashboard/src/pages/Q1ExecutiveReport.jsx`
