# SOC 2 Controls Matrix – Kahana Oasis (CC1–CC9)

**Version:** 1.0  
**Effective Date:** March 2026  
**Source:** SOC2 Gap Analysis, policy documents  
**Status:** Aligned with Kahana's current implementation and gaps

---

## Trust Services Criteria Mapping

| TSC | Control Area | Kahana Implementation | Status | Evidence | Gap |
|-----|--------------|------------------------|--------|----------|-----|
| **CC6.1** | Logical and Physical Access Controls | Supabase Auth, AWS IAM, Google Workspace (1 user), AWS Secrets Manager | Partial | User list (manual); no access review logs | Access reviews not quarterly |
| **CC6.1** | Access Reviews | Not conducted quarterly; no documented sign-off | Gap | None | P0: Implement quarterly review + sign-off |
| **CC6.1** | Internal IdP | Google Workspace for Adam only; no org-wide IdP; Okta/Azure trialed, deferred | Partial | Documented deferral | P1: Document deferral; plan for growth |
| **CC7.1** | Monitoring | Supabase logs, Mixpanel; no dedicated SIEM | Partial | Supabase dashboard; no formal retention policy | P1: Document current state or adopt Datadog |
| **CC8.1** | Change Management | GitHub, CI/CD, Tally→Slack→Sheets→GitHub workflows | Current | PR history, workflow runs; now formally documented | P2: Policy updated |
| **CC9.x** | Risk Assessment | Not yet conducted | Gap | None | P2: Conduct and document annual risk assessment |
| **Availability** | Service Availability | Supabase, AWS; no formal SLA or DR testing | Partial | Vendor SLAs | Document RTO/RPO; test DR |
| **Confidentiality** | Data Protection | Encryption at rest (Supabase), TLS in transit | Current | Supabase documentation | — |
| **BC/DR** | Backups | Free Plan = no backups; Pro Plan = 7-day retention | Gap | None on Free Plan | P0: Upgrade to Pro or custom db dump |

---

## Control-to-Document Mapping

| Control | Policy / Procedure | Evidence |
|---------|-------------------|----------|
| CC6.1 Access Control | Access Control Policy, Password and Authentication Policy | User list, IAM configs |
| CC6.1 Access Reviews | Access Control Policy (Section 9) | Access review logs (to be created) |
| CC6.1 IdP | Access Control Policy | Google Workspace for Adam; deferral documented |
| CC7.1 Monitoring | Logging & Monitoring Policy | Supabase logs, Mixpanel |
| CC8.1 Change Management | Change Management Policy, SDLC, Code Review Procedures | GitHub PRs, workflow runs |
| CC9 Risk Assessment | Risk Assessment Report, Risk Register, Risk Treatment Plan | Risk docs (assessment to be conducted) |
| Backups | Backup and Restoration Policy | Supabase dashboard (Pro); restore test results |
| Encryption | Encryption Policy | Supabase, TLS configs |

---

## Subservice Organizations (Carve-Out)

| Vendor | Role | Controls Relied Upon |
|--------|------|----------------------|
| AWS | Infrastructure (us-east-1) | IAM, encryption, logging |
| Supabase | Database, Auth, Storage | Encryption, backups (Pro), Auth |
| Okta | Enterprise browser SSO | IdP, MFA |
| Stripe | Payments | PCI compliance |
| Mixpanel | Analytics | Data handling |
| Google Gemini, Deepgram | AI | DPA, data handling |

---

## Evidence Inventory (from Gap Analysis)

| Control Area | Evidence We Have | Evidence We Need |
|--------------|------------------|------------------|
| Access Control | User list (manual) | Access review logs, offboarding checklist |
| Change Management | GitHub history, CI logs, workflow runs | Formal change policy (done), approval evidence |
| Backups | Supabase dashboard (if Pro) | Backup verification logs, restore test |
| Logging | Supabase logs, Mixpanel | Retention policy (documented), SIEM if required |
| Vendor Management | Vendor list | DPAs, SOC2 reports from critical vendors |
| Risk Assessment | None | Risk register, assessment documentation |
