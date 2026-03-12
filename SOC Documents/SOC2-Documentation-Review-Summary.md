# SOC 1 & SOC 2 Documentation Review Summary

**Date:** March 2026  
**Company:** Kahana (Oasis platform)  
**Source:** SOC Documents folder + [SOC2 Gap Analysis](https://data-room-two.vercel.app/soc2-gap-analysis) (data-room)  
**Status:** First-pass alignment complete; no assumptions—only verified facts from gap analysis and existing docs.

---

## 1. Documents Updated (Kahana-Specific Information Added)

### System Description Document
- **Status:** Partially Complete → Ready for Review
- **Changes made:**
  - Period placeholder updated with timeline (target SOC 2 Type II within 6–12 months post–SOC 1)
  - Infrastructure: AWS us-east-1, Supabase, Lambda, Terraform, CI/CD, AWS Secrets Manager
  - Integration: Supabase Auth (Google, Microsoft, Apple), Okta enterprise, Mixpanel, Google Gemini, Deepgram
  - People: CEO Adam Kershner named
  - Subservice orgs: AWS, Supabase, Okta, Stripe, Mixpanel, Google Analytics, Looker, Gemini, Deepgram
  - Note: quarterly access reviews being implemented as part of SOC readiness

### Management Assertion Letter
- **Status:** Partially Complete
- **Changes made:**
  - Period placeholder updated
  - CEO: Adam Kershner
  - CFO: Left as placeholder for second signatory (fill in when applicable)

### Change Management Policy
- **Status:** Ready for Review
- **Changes made:**
  - Change tracking: GitHub (PRs, issues), Tally.so → Slack/Sheets, Cursor/GitHub sprints, GitHub workflows/CI
  - Explicitly noted: no Jira/Linear

### Backup and Restoration Policy
- **Status:** Ready for Review
- **Changes made:**
  - Supabase-specific: Free Plan = no backups (gap), Pro = daily 7-day retention in S3 us-east-1
  - Retention by plan: Pro 7d, Team 14d, Enterprise 30d
  - Custom backup option: supabase db dump

### Logging and Monitoring Policy
- **Status:** Ready for Review
- **Changes made:**
  - Current state: Supabase tables, Mixpanel; no dedicated SIEM
  - Supabase Pro: 7-day log retention; Log Drains $60/drain
  - Datadog under consideration

### Access Control Policy
- **Status:** Ready for Review
- **Changes made:**
  - Internal IdP: Google Workspace for Adam only; no org-wide IdP; Okta/Azure trialed, deferred
  - Access reviews: Target quarterly; current gap (P0)—not yet conducted; implementation in progress

### Subservice Organization
- **Status:** Ready for Review
- **Changes made:**
  - Vendor list: AWS, Supabase, Okta, Stripe, Mixpanel, Google Analytics, Looker, Gemini, Deepgram

### Compliance Program Overview
- **Status:** Ready for Review
- **Changes made:**
  - Effective Date: March 2026
  - CEO Adam Kershner named
  - Section 9: SOC 2 Project Timeline (March 16 drafts, mock audit, 2 weeks eng fixes, SOC 1, SOC 2 in 6–12 months)
  - Reference to data-room gap analysis

---

## 2. Gaps Identified (from Gap Analysis—P0/P1/P2)

| Priority | Gap | Impact | Status |
|----------|-----|--------|--------|
| P0 | Access reviews not conducted quarterly | CC6.1 failure | Policy updated; process implementation required |
| P0 | Supabase Free Plan = no backups | BC/DR failure | Policy documents; upgrade to Pro or custom db dump required |
| P1 | No centralized IdP (Google Workspace for 1 person) | CC6.1 partial | Documented deferral in Access Control Policy |
| P1 | No dedicated logging/SIEM | CC7.1 partial | Logging Policy documents current state; Datadog under consideration |
| P2 | Change management not formally documented | CC8.1 | Change Management Policy now documents Tally→Slack→Sheets→GitHub flow |
| P2 | No risk assessment | CC9.x | Risk Assessment Report exists as draft; conduct and document required |

---

## 3. Information Added (Verified from Gap Analysis)

| Area | Kahana Reality (No Assumptions) |
|------|---------------------------------|
| **Production** | AWS us-east-1, Supabase backend, Lambda, Terraform, CI/CD |
| **Auth** | Supabase Auth (Google, MS, Apple); Okta enterprise; internal: Google Workspace (Adam only) |
| **Data** | Supabase Postgres; no secondary DB; encryption at rest + TLS |
| **Backups** | Free Plan = none; Pro = 7-day daily in S3 |
| **Logging** | Supabase tables, Mixpanel; 7-day retention on Pro |
| **Change** | GitHub PRs, Tally→Slack→Sheets→GitHub sprints, no Jira/Linear |
| **Secrets** | AWS Secrets Manager via Lambda |
| **CEO** | Adam Kershner |
| **Vendors** | Supabase, AWS, Mixpanel, Stripe, Google Analytics, Looker, Gemini, Deepgram |

---

## 4. Questions / Clarifications Still Needed

1. **CFO / second signatory** for Management Assertion—who signs if no CFO?
2. **CTO / Security Lead names**—for consistency across documents
3. **Supabase plan**—currently Free or Pro? Upgrade to Pro for backups is P0.
4. **RTO/RPO targets**—formal targets (e.g., 4–8 hours RTO, 24h RPO) to be confirmed and added to Backup Policy
5. **Risk Assessment**—conduct initial risk assessment and populate Risk Register / Risk Assessment Report

---

## 5. Next Steps (Audit Readiness)

1. **Immediate (2–4 weeks):** Upgrade Supabase to Pro (backups); implement and document access review process with sign-off logs
2. **Short-term (4–8 weeks):** Conduct risk assessment; collect DPAs and SOC2 reports from critical vendors
3. **Pre–mock audit (by March 16):** Ensure all draft policies are finalized; evidence templates populated
4. **Post–mock audit:** Address findings; engage SOC 1 auditor; plan SOC 2 Type II evidence period (6–12 months)

---

## 6. Full Document-by-Document Status (72 files)

### UPDATED with Kahana-specific info (this review)
| Document | Status | Key changes |
|----------|--------|-------------|
| System-Description-Document | Ready for Review | AWS, Supabase, vendors, CEO, timeline |
| Management-Assertion-Letter | Partially Complete | CEO Adam Kershner, period; CFO placeholder |
| Organization-Chart | Ready for Review | Adam Kershner as CEO |
| Change-Management-Policy | Ready for Review | Tally→Slack→Sheets→GitHub, no Jira |
| Backup-and-Restoration-Policy | Ready for Review | Supabase Free/Pro, 7-day retention |
| Logging-&-Monitoring-Policy | Ready for Review | Supabase, Mixpanel, 7-day; no SIEM |
| Access-Control-Policy | Ready for Review | Google Workspace (Adam only), access review gap |
| Information-Security-Policy | Ready for Review | AWS, Supabase, SaaS tools |
| Password-and-Authentication-Policy | Ready for Review | AWS, Supabase, Google Workspace, Secrets Manager |
| Encryption-Policy | Ready for Review | Supabase, AWS, Secrets Manager |
| Subservice-Organization | Ready for Review | Full vendor list |
| Compliance-Program-Overview | Ready for Review | March 2026, CEO, timeline, gap ref |
| Risk-Assessment-Report | Partially Complete | March 2026, R-02 Supabase, R-01 access reviews |
| Risk-Register | Partially Complete | Last Updated March 2026 |
| Risk-Treatment-Plan | Partially Complete | Effective Date March 2026 |
| Disaster-Recovery-Plan | Ready for Review | RTO/RPO, Supabase, AWS, no secondary DB |
| Business-Continuity-Plan | Ready for Review | RTO/RPO, AWS, Supabase |
| Incident-Response-Plan | Ready for Review | Supabase logs, Mixpanel, no SIEM |
| SDLC-Policy | Ready for Review | GitHub, Tally, no Jira |
| Code-Review-Procedures | Ready for Review | GitHub issues |
| Data-Retention-and-Destruction-Policy | Ready for Review | Supabase retention, backup periods |
| Vendor-Management-Policy | Ready for Review | Vendor list (AWS, Supabase, etc.) |
| Remote-Access-Policy | Ready for Review | AWS, Google Workspace, Tally, Sheets |
| Configuration-Management-Policy | NEW (expanded) | Terraform, GitHub, AWS, Supabase |
| Controls-Matrix-CC1-CC9 | NEW | Full TSC mapping, gaps, evidence inventory |

### STILL TEMPLATE / NEED REVIEW (placeholders may remain)
| Document | Status | Action needed |
|----------|--------|---------------|
| Corporate-Governance-Manual | Draft | Add Effective Date, review for Kahana |
| Data-Classification-Policy | Template | Add Oasis-specific data examples |
| Vulnerability-Management-Policy | Template | Add scanning cadence, tools |
| Workstation-Security-Policy | Template | Verify device requirements |
| Physical-Security-Policy | Template | Add office location if applicable |
| Acceptable-Use-Policy (Security-docs) | Template | Review scope |
| Third-Party-Service-Agreement | Template | Add vendor-specific clauses |
| Vendor-Risk-Assessment-Template | Template | Use for each critical vendor |

### STUBS (1–3 lines; need expansion)
| Document | Current | Action |
|----------|---------|--------|
| Additonal-Documentation/Phishing-Simulation-Program | 1 line | Expand with cadence, metrics |
| Additonal-Documentation/Network-Security-Policy | 2 lines | Expand with AWS/Supabase network controls |
| Additonal-Documentation/Risk-Assessment-Methods | 3 lines | Expand methodology |
| Additonal-Documentation/Acceptable-Use-Policy | 1 line | Link to main or expand |
| Additonal-Documentation/Configuration-Management-Policy | — | Replaced with full policy in Additonal-Documentation |

### EVIDENCE FOLDERS (templates for Type II)
Access-Review-Logs, Backup-Test-Results, Change-Management, Control-Testing-Documentation, Employee-Onboarding-Offboarding, Incidence-Response-Records, Penetration-Test, Security-Awareness-Training, System-Monitoring-Logs, Vendor-Review, Audit-Logs, Business-Continuity-Testing, Evidence-Collection-Templates, Vulnerability-Scan — populate during audit period.

### HR, PRIVACY, TECHNICAL, SUPPLEMENTARY
Employee-Handbook, Code-of-Conduct, NDA, Background-Check, Security-Awareness-Training, Onboarding/Offboarding checklists, Privacy-Policy, Data-Protection, Confidentiality, System-Architecture-Design, Data-Flow-Diagram, Network-Architecture, Asset-Inventory, Firewall-Rules, System-Configuration-Standards, SLAs, Customer-Data-Protection, Insurance-Certificates, Internal-Audit-Reports, Physical-Location — review for placeholders and Kahana alignment.
