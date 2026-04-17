import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { subtleTransition, usePrefersReducedMotion } from './motion';

const dashboardByPage = {
  'secure-browsing': {
    title: 'Incident Control Center',
    subtitle: '27 incidents in the last 24 hours',
    incidents: [
      { severity: 'Critical', title: 'Internal roadmap pasted into AI', user: 'Jordan Lee', app: 'Grok', status: 'New' },
      { severity: 'Critical', title: 'Source code shared to ChatGPT', user: 'Alex Chen', app: 'ChatGPT', status: 'New' },
      { severity: 'High', title: 'Customer PII pasted into Claude', user: 'Morgan Taylor', app: 'Claude', status: 'In progress' },
      { severity: 'High', title: 'Unknown AI tool detected', user: 'Sam Rivera', app: 'Unknown AI', status: 'New' },
      { severity: 'Medium', title: 'Financial data shared to assistant', user: 'Jordan Kim', app: 'Gemini', status: 'Resolved' },
    ],
  },
  'external-workforce': {
    title: 'External Access Monitoring',
    subtitle: '19 contractor-related alerts in the last 24 hours',
    incidents: [
      { severity: 'Critical', title: 'Contractor pasted confidential roadmap', user: 'Jordan Lee', app: 'Grok', status: 'New' },
      { severity: 'High', title: 'Partner uploaded client list to AI tool', user: 'Sam Rivera', app: 'Unknown AI', status: 'In progress' },
      { severity: 'High', title: 'Third-party user used unsanctioned extension', user: 'Chris Park', app: 'ChatGPT', status: 'New' },
      { severity: 'Medium', title: 'Vendor attempted restricted export', user: 'Casey Brown', app: 'Claude', status: 'Resolved' },
      { severity: 'Medium', title: 'Contractor login from unusual network', user: 'Morgan Taylor', app: 'Gemini', status: 'In progress' },
    ],
  },
  'remote-workforce': {
    title: 'Remote Session Monitoring',
    subtitle: '31 distributed-work incidents in the last 24 hours',
    incidents: [
      { severity: 'Critical', title: 'Sensitive data pasted from public Wi-Fi', user: 'Alex Chen', app: 'ChatGPT', status: 'New' },
      { severity: 'High', title: 'Unmanaged extension loaded in remote session', user: 'Taylor Swift', app: 'Claude', status: 'In progress' },
      { severity: 'High', title: 'AI prompt included internal financial data', user: 'Jordan Kim', app: 'Gemini', status: 'New' },
      { severity: 'Medium', title: 'Remote browser policy bypass attempt', user: 'Sam Rivera', app: 'Grok', status: 'Resolved' },
      { severity: 'Medium', title: 'Session download blocked outside region', user: 'Casey Brown', app: 'Unknown AI', status: 'Resolved' },
    ],
  },
  'saas-and-web-apps': {
    title: 'SaaS Governance Dashboard',
    subtitle: '24 SaaS policy events in the last 24 hours',
    incidents: [
      { severity: 'Critical', title: 'Restricted record exported from SaaS app', user: 'Jordan Lee', app: 'ChatGPT', status: 'New' },
      { severity: 'High', title: 'Unsanctioned AI app used in finance workflow', user: 'Chris Park', app: 'Unknown AI', status: 'New' },
      { severity: 'High', title: 'Sensitive content copied to browser extension', user: 'Morgan Taylor', app: 'Claude', status: 'In progress' },
      { severity: 'Medium', title: 'Policy conflict on partner SaaS tenant', user: 'Alex Chen', app: 'Grok', status: 'Resolved' },
      { severity: 'Medium', title: 'Repeated blocked uploads to AI assistant', user: 'Casey Brown', app: 'Gemini', status: 'Resolved' },
    ],
  },
  'zero-trust-security': {
    title: 'Zero Trust Session Events',
    subtitle: '22 verify-and-enforce events in the last 24 hours',
    incidents: [
      { severity: 'Critical', title: 'High-risk session failed data policy check', user: 'Privileged Admin', app: 'Admin Console', status: 'New' },
      { severity: 'High', title: 'Conditional access step-up triggered', user: 'Jordan Lee', app: 'ChatGPT', status: 'In progress' },
      { severity: 'High', title: 'Unknown AI destination blocked by policy', user: 'Sam Rivera', app: 'Unknown AI', status: 'New' },
      { severity: 'Medium', title: 'Identity context mismatch in browser session', user: 'Alex Chen', app: 'Claude', status: 'Resolved' },
      { severity: 'Medium', title: 'DLP policy enforce-only mode triggered', user: 'Morgan Taylor', app: 'Gemini', status: 'Resolved' },
    ],
  },
  'privileged-user-management': {
    title: 'Privileged Session Oversight',
    subtitle: '14 elevated-session incidents in the last 24 hours',
    incidents: [
      { severity: 'Critical', title: 'Privileged admin attempted restricted export', user: 'Admin User', app: 'Admin Console', status: 'New' },
      { severity: 'High', title: 'Role escalation action flagged for review', user: 'Jordan Lee', app: 'Identity Portal', status: 'In progress' },
      { severity: 'High', title: 'Sensitive token copied in admin session', user: 'Alex Chen', app: 'Cloud Console', status: 'New' },
      { severity: 'Medium', title: 'Privileged login from unmanaged device', user: 'Taylor Swift', app: 'SaaS Admin', status: 'Resolved' },
      { severity: 'Medium', title: 'Policy override requested by support admin', user: 'Chris Park', app: 'Support Portal', status: 'Resolved' },
    ],
  },
  'workplace-enablement': {
    title: 'Workplace Browser Operations',
    subtitle: '18 policy and support events in the last 24 hours',
    incidents: [
      { severity: 'High', title: 'User opened unsanctioned extension in managed profile', user: 'Jordan Kim', app: 'ChatGPT', status: 'New' },
      { severity: 'High', title: 'Enterprise sign-in policy mismatch detected', user: 'Casey Brown', app: 'Work Apps', status: 'In progress' },
      { severity: 'Medium', title: 'Repeated account-switching in corporate session', user: 'Sam Rivera', app: 'Google Workspace', status: 'New' },
      { severity: 'Medium', title: 'Managed browser adoption alert triggered', user: 'Morgan Taylor', app: 'Internal Portal', status: 'Resolved' },
      { severity: 'Medium', title: 'Session policy assist ticket auto-created', user: 'Alex Chen', app: 'Service Desk', status: 'Resolved' },
    ],
  },
  'merger-integration': {
    title: 'Integration Risk Dashboard',
    subtitle: '21 transition incidents in the last 24 hours',
    incidents: [
      { severity: 'Critical', title: 'Cross-tenant data copied during M&A transition', user: 'Integration User', app: 'Shared Data Room', status: 'New' },
      { severity: 'High', title: 'Legacy identity session failed policy check', user: 'Jordan Lee', app: 'Legacy SaaS', status: 'In progress' },
      { severity: 'High', title: 'Unapproved app access from acquired device', user: 'Sam Rivera', app: 'Unknown AI', status: 'New' },
      { severity: 'Medium', title: 'Interim DLP policy blocked export attempt', user: 'Chris Park', app: 'Finance SaaS', status: 'Resolved' },
      { severity: 'Medium', title: 'Transition policy warning acknowledged', user: 'Morgan Taylor', app: 'Internal Apps', status: 'Resolved' },
    ],
  },
  'vdi-reduction': {
    title: 'VDI Optimization Monitor',
    subtitle: '16 browser-first workload events in the last 24 hours',
    incidents: [
      { severity: 'High', title: 'User shifted from VDI to managed browser session', user: 'Jordan Lee', app: 'SaaS Workspace', status: 'In progress' },
      { severity: 'High', title: 'Policy blocked unmanaged browser fallback', user: 'Alex Chen', app: 'ChatGPT', status: 'New' },
      { severity: 'Medium', title: 'VDI-only app access request logged', user: 'Sam Rivera', app: 'Legacy App', status: 'New' },
      { severity: 'Medium', title: 'DLP controls verified in browser workflow', user: 'Casey Brown', app: 'Gemini', status: 'Resolved' },
      { severity: 'Medium', title: 'Session governance passed for remote contractor', user: 'Morgan Taylor', app: 'Claude', status: 'Resolved' },
    ],
  },
  'oasis-enterprise-browser': {
    title: 'Incident Control Center',
    subtitle: '27 incidents in the last 24 hours',
    incidents: [
      { severity: 'Critical', title: 'Internal roadmap pasted into AI', user: 'Jordan Lee', app: 'Grok', status: 'New' },
      { severity: 'Critical', title: 'Source code shared to ChatGPT', user: 'Alex Chen', app: 'ChatGPT', status: 'New' },
      { severity: 'High', title: 'Customer PII pasted into Claude', user: 'Morgan Taylor', app: 'Claude', status: 'In progress' },
      { severity: 'High', title: 'Unknown AI tool detected', user: 'Sam Rivera', app: 'Unknown AI', status: 'New' },
      { severity: 'Medium', title: 'Financial data shared to assistant', user: 'Jordan Kim', app: 'Gemini', status: 'Resolved' },
    ],
  },
};

function severityClass(severity) {
  if (severity === 'Critical') return 'border-[#fecaca] bg-[#fef2f2] text-[#b91c1c]';
  if (severity === 'High') return 'border-[#fed7aa] bg-[#fff7ed] text-[#c2410c]';
  return 'border-[#fde68a] bg-[#fffbeb] text-[#b45309]';
}

export default function MainIncidentDashboardPreview({ pageKey = 'secure-browsing' }) {
  const config = dashboardByPage[pageKey] || dashboardByPage['secure-browsing'];
  const incidents = config.incidents;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeRowIndex, setActiveRowIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || incidents.length === 0) return;

    const id = window.setInterval(() => {
      setActiveRowIndex((idx) => (idx + 1) % incidents.length);
    }, 5200);

    return () => window.clearInterval(id);
  }, [incidents.length, prefersReducedMotion, pageKey]);

  return (
    <section className="bg-white py-12 md:py-16 border-b border-oasis-green-800/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-xl border border-oasis-green-800/12 bg-oasis-green-50 p-3 md:p-4 shadow-sm">
          <div className="rounded-lg border border-oasis-green-800/10 bg-white">
            <div className="border-b border-oasis-green-800/10 px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-oasis-green-800">{config.title}</div>
                <div className="text-xs text-oasis-green-800/65">{config.subtitle}</div>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex cursor-default select-none rounded-md border border-oasis-green-800/15 bg-oasis-green-50 px-2.5 py-1 text-xs text-oasis-green-800/80">
                  Export CSV
                </span>
                <span className="inline-flex cursor-default select-none rounded-md border border-oasis-green-800/15 bg-oasis-green-50 px-2.5 py-1 text-xs text-oasis-green-800/80">
                  Create automation
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
              <aside className="border-r border-oasis-green-800/10 p-3 space-y-3 bg-[#fcfdfd]">
                <div>
                  <label className="text-[11px] font-semibold text-oasis-green-800/70">Search</label>
                  <div className="mt-1 rounded border border-oasis-green-800/15 px-2 py-1.5 text-xs text-oasis-green-800/50">
                    Search incidents by user, app, policy...
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-oasis-green-800/70 mb-1">Severity</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Critical', 'High', 'Medium', 'Low'].map((chip) => (
                      <span key={chip} className="rounded border border-oasis-green-800/15 px-2 py-0.5 text-[11px] text-oasis-green-800/75">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-oasis-green-800/70 mb-1">Status</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['New', 'In progress', 'Resolved', 'Muted'].map((chip) => (
                      <span key={chip} className="rounded border border-oasis-green-800/15 px-2 py-0.5 text-[11px] text-oasis-green-800/75">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-oasis-green-50 border-b border-oasis-green-800/10">
                    <tr className="text-left">
                      <th className="px-3 py-2 text-[11px] font-semibold text-oasis-green-800/70">Severity</th>
                      <th className="px-3 py-2 text-[11px] font-semibold text-oasis-green-800/70">Title</th>
                      <th className="px-3 py-2 text-[11px] font-semibold text-oasis-green-800/70">User</th>
                      <th className="px-3 py-2 text-[11px] font-semibold text-oasis-green-800/70">App</th>
                      <th className="px-3 py-2 text-[11px] font-semibold text-oasis-green-800/70">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-oasis-green-800/10">
                    {incidents.map((incident, idx) => {
                      const rowKey = `${incident.title}-${incident.user}-${idx}`;
                      const isActive = idx === activeRowIndex;

                      return (
                        <motion.tr
                          key={rowKey}
                          layout={false}
                          initial={prefersReducedMotion ? false : { opacity: 0, y: 3 }}
                          animate={
                            prefersReducedMotion
                              ? { opacity: 1, y: 0 }
                              : {
                                  opacity: 1,
                                  y: 0,
                                  backgroundColor: isActive ? 'rgba(217, 238, 234, 0.35)' : 'rgba(255,255,255,0)',
                                  boxShadow: isActive
                                    ? 'inset 0 0 0 1px rgba(102, 194, 190, 0.22)'
                                    : 'inset 0 0 0 0px rgba(102, 194, 190, 0)',
                                }
                          }
                          transition={{
                            opacity: { ...subtleTransition, delay: idx * 0.06 },
                            y: { ...subtleTransition, delay: idx * 0.06 },
                            backgroundColor: { duration: 1.4, ease: subtleTransition.ease },
                            boxShadow: { duration: 1.4, ease: subtleTransition.ease },
                          }}
                        >
                          <td className="px-3 py-2.5">
                            <motion.span
                              className={`inline-flex rounded border px-1.5 py-0.5 text-[10px] font-medium ${severityClass(incident.severity)}`}
                              animate={
                                prefersReducedMotion || !isActive
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: [0.92, 1, 0.92], scale: [1, 1.02, 1] }
                              }
                              transition={
                                prefersReducedMotion || !isActive
                                  ? undefined
                                  : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
                              }
                            >
                              {incident.severity}
                            </motion.span>
                          </td>
                          <td className="px-3 py-2.5 text-xs text-oasis-green-800">{incident.title}</td>
                          <td className="px-3 py-2.5 text-xs text-oasis-green-800/85">{incident.user}</td>
                          <td className="px-3 py-2.5 text-xs text-oasis-green-800/85">{incident.app}</td>
                          <td className="px-3 py-2.5">
                            <motion.span
                              className="inline-flex rounded border border-oasis-green-800/15 bg-oasis-green-50 px-1.5 py-0.5 text-[10px] text-oasis-green-800/80"
                              animate={
                                prefersReducedMotion || !isActive
                                  ? { opacity: 1 }
                                  : { opacity: [0.78, 1, 0.78] }
                              }
                              transition={
                                prefersReducedMotion || !isActive
                                  ? undefined
                                  : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
                              }
                            >
                              {incident.status}
                            </motion.span>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
