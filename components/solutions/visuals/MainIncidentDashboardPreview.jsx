import React, { useEffect, useMemo, useState } from 'react';
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
    policyLifecycle: {
      rolloutGroup: 'Remote Staff (pilot → org-wide)',
      templates: [
        {
          id: 'ai-guardrail',
          name: 'Remote AI data guardrail',
          file: 'policies/remote-ai-guardrail.json',
          summary:
            'Blocks risky pastes to AI tools and warns on sensitive prompts from unmanaged networks.',
        },
        {
          id: 'download-control',
          name: 'Remote download control',
          file: 'policies/remote-download-control.yaml',
          summary: 'Requires justification for downloads outside approved regions and logs export attempts.',
        },
        {
          id: 'extension-allowlist',
          name: 'Extension allowlist + review queue',
          file: 'policies/extension-allowlist.json',
          summary: 'Allows approved extensions in managed sessions and routes unknown installs to review.',
        },
      ],
    },
    incidents: [
      {
        severity: 'Critical',
        title: 'Sensitive data pasted from public Wi-Fi',
        user: 'Alex Chen',
        app: 'ChatGPT',
        status: 'New',
        policy: 'Remote AI data guardrail',
      },
      {
        severity: 'High',
        title: 'Unmanaged extension loaded in remote session',
        user: 'Taylor Swift',
        app: 'Claude',
        status: 'In progress',
        policy: 'Extension allowlist + review queue',
      },
      {
        severity: 'High',
        title: 'AI prompt included internal financial data',
        user: 'Jordan Kim',
        app: 'Gemini',
        status: 'New',
        policy: 'Remote AI data guardrail',
      },
      {
        severity: 'Medium',
        title: 'Remote browser policy bypass attempt',
        user: 'Sam Rivera',
        app: 'Grok',
        status: 'Resolved',
        policy: 'Remote AI data guardrail',
      },
      {
        severity: 'Medium',
        title: 'Session download blocked outside region',
        user: 'Casey Brown',
        app: 'Unknown AI',
        status: 'Resolved',
        policy: 'Remote download control',
      },
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
  const baseIncidents = config.incidents;
  const policyLifecycle = config.policyLifecycle;
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [enforcementMode, setEnforcementMode] = useState('Enforce');

  const selectedTemplate = policyLifecycle?.templates?.[selectedTemplateIndex] ?? null;

  const incidents = useMemo(() => {
    if (!policyLifecycle || !selectedTemplate) return baseIncidents;
    return baseIncidents.map((row) => {
      if (!row.policy) return row;
      if (row.policy === selectedTemplate.name) return row;
      return { ...row, muted: true };
    });
  }, [baseIncidents, policyLifecycle, selectedTemplate]);

  const showPolicyColumn = useMemo(() => baseIncidents.some((row) => row.policy), [baseIncidents]);

  const lifecycleSteps = policyLifecycle
    ? [
        {
          id: 'create',
          label: 'Create policy',
          caption: 'Start from a template or import your rule pack.',
        },
        {
          id: 'upload',
          label: 'Upload',
          caption: 'Drop a file or publish from the policy library.',
        },
        {
          id: 'live',
          label: 'Go live',
          caption: `Rollout: ${policyLifecycle.rolloutGroup}`,
        },
        {
          id: 'monitor',
          label: 'Monitor',
          caption: 'Incidents stream in as sessions hit the policy.',
        },
        {
          id: 'iterate',
          label: 'Change as you go',
          caption: 'Tune scope, mode, and rules without rework.',
        },
      ]
    : [];

  useEffect(() => {
    if (prefersReducedMotion || incidents.length === 0) return;

    const id = window.setInterval(() => {
      setActiveRowIndex((idx) => (idx + 1) % incidents.length);
    }, 9000);

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

            {policyLifecycle && (
              <div className="border-b border-oasis-green-800/10 px-4 py-4 bg-oasis-green-50/60">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-oasis-green-800/75">
                      Policy rollout pipeline
                    </div>
                    <div className="mt-1 text-sm font-semibold text-oasis-green-800">
                      From upload to live monitoring
                    </div>
                    <p className="mt-1 text-xs text-oasis-green-800/80 max-w-xl leading-relaxed">
                      Upload a policy, push it live to the right groups, and watch enforcement show up immediately in
                      monitoring. Iterate without rebuilding your whole stack.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-[11px] font-semibold text-oasis-green-800/70">Enforcement</div>
                    {['Monitor', 'Enforce'].map((mode) => {
                      const isActive = enforcementMode === mode;
                      return (
                        <button
                          key={mode}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => setEnforcementMode(mode)}
                          className={[
                            'rounded-full !border !px-3 !py-1 text-[11px] font-semibold transition-colors',
                            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#645839]',
                            isActive
                              ? '!border-[#978455] !bg-[#fdf1d2] !text-[#645839]'
                              : '!border-oasis-green-800/20 !bg-white !text-oasis-green-800 hover:!bg-oasis-green-50',
                          ].join(' ')}
                        >
                          {mode}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-[1fr_220px]">
                  <div className="rounded-lg border border-oasis-green-800/12 bg-white p-3">
                    <div className="text-[11px] font-semibold text-oasis-green-800/70 mb-2">Lifecycle</div>
                    <div className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-stretch">
                      {lifecycleSteps.map((step, idx) => (
                        <div key={step.id} className="flex items-stretch gap-2 md:contents">
                          <div className="flex-1 rounded-md border border-oasis-green-800/12 bg-oasis-green-50/40 p-2.5 min-w-[140px]">
                            <div className="text-[11px] font-semibold text-oasis-green-800">{step.label}</div>
                            <div className="mt-1 text-[10px] text-oasis-green-800/75 leading-relaxed">{step.caption}</div>
                          </div>
                          {idx < lifecycleSteps.length - 1 && (
                            <div
                              className="hidden md:flex items-center justify-center px-1 text-oasis-green-800/35 text-lg leading-none"
                              aria-hidden
                            >
                              →
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-dashed border-oasis-green-800/25 bg-white p-3">
                    <div className="text-[11px] font-semibold text-oasis-green-800/70 mb-2">Upload</div>
                    <div className="rounded border border-oasis-green-800/12 bg-oasis-green-50/40 px-2 py-6 text-center text-[11px] text-oasis-green-800/70">
                      Drop policy file here
                      <div className="mt-1 text-[10px] text-oasis-green-800/60">or publish from library</div>
                    </div>
                    <div
                      className="mt-2 text-[10px] text-oasis-green-800/65 truncate"
                      title={selectedTemplate?.file}
                    >
                      {selectedTemplate?.file}
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-oasis-green-800/12 bg-white p-3">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-oasis-green-800/70">Active policy template</div>
                      <div className="mt-1 text-sm font-semibold text-oasis-green-800">{selectedTemplate?.name}</div>
                      <div className="mt-1 text-xs text-oasis-green-800/80 leading-relaxed">
                        {selectedTemplate?.summary}
                      </div>
                    </div>
                    <div className="text-[11px] text-oasis-green-800/70 md:text-right">
                      <div className="font-semibold text-oasis-green-800">Live now</div>
                      <div>
                        Mode: <span className="font-semibold text-oasis-green-800">{enforcementMode}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {policyLifecycle.templates.map((template, idx) => {
                      const isActive = idx === selectedTemplateIndex;
                      return (
                        <button
                          key={template.id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => setSelectedTemplateIndex(idx)}
                          className={[
                            'rounded-full !border !px-3 !py-1 text-[11px] font-semibold transition-colors',
                            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#645839]',
                            isActive
                              ? '!border-[#978455] !bg-[#fdf1d2] !text-[#645839]'
                              : '!border-oasis-green-800/20 !bg-white !text-oasis-green-800 hover:!bg-oasis-green-50',
                          ].join(' ')}
                        >
                          {template.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-oasis-green-800/75 leading-relaxed">
                  Live policies feed this incident stream automatically. Rows that match the selected template are
                  highlighted; everything else stays visible for context.
                </p>
              </div>
            )}

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
                      {showPolicyColumn && (
                        <th className="px-3 py-2 text-[11px] font-semibold text-oasis-green-800/70">Policy</th>
                      )}
                      <th className="px-3 py-2 text-[11px] font-semibold text-oasis-green-800/70">User</th>
                      <th className="px-3 py-2 text-[11px] font-semibold text-oasis-green-800/70">App</th>
                      <th className="px-3 py-2 text-[11px] font-semibold text-oasis-green-800/70">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-oasis-green-800/10">
                    {incidents.map((incident, idx) => {
                      const rowKey = `${incident.title}-${incident.user}-${idx}`;
                      const isActive = idx === activeRowIndex;
                      const isMuted = incident.muted;
                      const isPolicyMatch =
                        Boolean(incident.policy && selectedTemplate && incident.policy === selectedTemplate.name);

                      return (
                        <motion.tr
                          key={rowKey}
                          layout={false}
                          initial={prefersReducedMotion ? false : { opacity: 0, y: 3 }}
                          animate={
                            prefersReducedMotion
                              ? { opacity: 1, y: 0 }
                              : {
                                  opacity: isMuted ? 0.45 : 1,
                                  y: 0,
                                  backgroundColor: isActive
                                    ? isPolicyMatch
                                      ? 'rgba(253, 241, 210, 0.55)'
                                      : 'rgba(217, 238, 234, 0.35)'
                                    : 'rgba(255,255,255,0)',
                                  boxShadow: isActive
                                    ? isPolicyMatch
                                      ? 'inset 0 0 0 1px rgba(151, 132, 85, 0.35)'
                                      : 'inset 0 0 0 1px rgba(102, 194, 190, 0.22)'
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
                          {showPolicyColumn && (
                            <td className="px-3 py-2.5 text-xs text-oasis-green-800/85">
                              {incident.policy ? (
                                <span
                                  className={[
                                    'inline-flex rounded border px-1.5 py-0.5 text-[10px] font-medium',
                                    isPolicyMatch
                                      ? 'border-[#c9b072] bg-[#fef8e8] text-[#645839]'
                                      : 'border-oasis-green-800/15 bg-oasis-green-50 text-oasis-green-800/80',
                                  ].join(' ')}
                                >
                                  {incident.policy}
                                </span>
                              ) : (
                                <span className="text-oasis-green-800/45">-</span>
                              )}
                            </td>
                          )}
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
