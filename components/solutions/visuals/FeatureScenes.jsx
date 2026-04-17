import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductVisualFrame from './ProductVisualFrame';
import { slowLoopTransition, subtleTransition, usePrefersReducedMotion } from './motion';

function useRotatingIndex(length, intervalMs, enabled) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!enabled || length < 2) return;

    const id = window.setInterval(() => {
      setIdx((current) => (current + 1) % length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [enabled, intervalMs, length]);

  return idx;
}

const pageContext = {
  'oasis-enterprise-browser': { persona: 'Enterprise user', app: 'Sanctioned SaaS workspace', policy: 'Enterprise browser baseline' },
  'privileged-user-management': { persona: 'Privileged admin', app: 'Admin console', policy: 'Elevated session policy' },
  'merger-integration': { persona: 'Integration user', app: 'Shared data room', policy: 'Transition policy set' },
  'external-workforce': { persona: 'Contractor', app: 'Corporate SaaS', policy: 'Third-party access policy' },
  'remote-workforce': { persona: 'Remote employee', app: 'Work apps', policy: 'Remote session policy' },
  'zero-trust-security': { persona: 'Verified user', app: 'Sanctioned app', policy: 'Zero trust session policy' },
  'workplace-enablement': { persona: 'Knowledge worker', app: 'Digital workplace', policy: 'Workplace policy profile' },
  'saas-and-web-apps': { persona: 'SaaS user', app: 'Business SaaS', policy: 'SaaS data policy' },
  'secure-browsing': { persona: 'Managed user', app: 'Web workflow', policy: 'Secure browsing policy' },
};

function getContext(pageKey) {
  return pageContext[pageKey] || pageContext['secure-browsing'];
}

function FeatureSceneIncidentTriaging({ pageKey }) {
  const ctx = getContext(pageKey);
  const prefersReducedMotion = usePrefersReducedMotion();
  const rows = [
    { id: '4821', title: 'Roadmap pasted to AI', severity: 'Critical', status: 'New' },
    { id: '4819', title: 'PII pasted to chatbot', severity: 'High', status: 'In progress' },
    { id: '4815', title: 'API keys exposed', severity: 'Critical', status: 'In progress' },
  ];
  const activeRow = useRotatingIndex(rows.length, 4600, !prefersReducedMotion);

  return (
    <ProductVisualFrame title="Incident triage">
      <div className="p-3">
        <div className="mb-2 text-[11px] text-oasis-green-800/65">
          Scope: {ctx.app} - Owner: {ctx.persona}
        </div>
        <div className="mb-2 grid grid-cols-[1fr_auto] border-b border-oasis-green-800/10 pb-1 text-[11px] font-semibold text-oasis-green-800/70">
          <span>Incident</span>
          <span>State</span>
        </div>
        <div className="space-y-2">
          {rows.map((row, idx) => {
            const isActive = idx === activeRow;

            return (
              <motion.div
                key={row.id}
                className="grid grid-cols-[1fr_auto] gap-2 rounded-md border border-oasis-green-800/10 p-2"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 2 }}
                animate={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : {
                        opacity: 1,
                        y: isActive ? -0.5 : 0,
                        backgroundColor: isActive ? 'rgba(217, 238, 234, 0.35)' : 'rgba(255,255,255,0)',
                        boxShadow: isActive
                          ? '0 0 0 1px rgba(102, 194, 190, 0.18)'
                          : '0 0 0 0px rgba(102, 194, 190, 0)',
                      }
                }
                transition={{
                  opacity: { ...subtleTransition, delay: idx * 0.05 },
                  y: { ...subtleTransition, delay: idx * 0.05 },
                  backgroundColor: { duration: 1.2, ease: subtleTransition.ease },
                  boxShadow: { duration: 1.2, ease: subtleTransition.ease },
                }}
              >
                <div>
                  <div className="text-xs font-medium text-oasis-green-800">{row.title}</div>
                  <div className="mt-1 text-[11px] text-oasis-green-800/70">#{row.id} - {row.severity}</div>
                </div>
                <motion.span
                  className="h-fit rounded border border-oasis-green-800/15 bg-[#f7faf9] px-2 py-0.5 text-[10px] font-medium text-oasis-green-800/80"
                  animate={
                    prefersReducedMotion || !isActive
                      ? { opacity: 1, scale: 1 }
                      : { opacity: [0.82, 1, 0.82], scale: [1, 1.03, 1] }
                  }
                  transition={
                    prefersReducedMotion || !isActive
                      ? undefined
                      : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' }
                  }
                >
                  {row.status}
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ProductVisualFrame>
  );
}

function FeatureSceneSessionGovernance({ pageKey }) {
  const ctx = getContext(pageKey);
  const prefersReducedMotion = usePrefersReducedMotion();
  const timeline = [
    'Session opened for sanctioned SaaS app',
    'Sensitive content detected in prompt field',
    'Download blocked by browser policy',
    'Event exported to SOC workflow',
  ];
  const glowStep = useRotatingIndex(timeline.length, 5000, !prefersReducedMotion);

  return (
    <ProductVisualFrame title="Session governance">
      <div className="space-y-2 p-3">
        <div className="text-[11px] text-oasis-green-800/65">Active profile: {ctx.policy}</div>
        {timeline.map((item, idx) => {
          const isGlow = idx === glowStep;

          return (
            <div key={item} className="flex items-start gap-2">
              <motion.span
                className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full border border-oasis-green-800/20 bg-[#d9eeea]"
                animate={
                  prefersReducedMotion || !isGlow
                    ? { scale: 1, boxShadow: '0 0 0 0 rgba(102, 194, 190, 0)' }
                    : {
                        scale: [1, 1.12, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(102, 194, 190, 0)',
                          '0 0 0 4px rgba(102, 194, 190, 0.16)',
                          '0 0 0 0 rgba(102, 194, 190, 0)',
                        ],
                      }
                }
                transition={
                  prefersReducedMotion || !isGlow
                    ? undefined
                    : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
                }
              />
              <motion.div
                className="flex-1 rounded-md border border-oasis-green-800/10 px-2 py-1.5"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 2 }}
                animate={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : {
                        opacity: 1,
                        y: 0,
                        backgroundColor: isGlow ? 'rgba(217, 238, 234, 0.22)' : 'rgba(255,255,255,0)',
                        boxShadow: isGlow
                          ? '0 0 0 1px rgba(102, 194, 190, 0.16)'
                          : '0 0 0 0px rgba(102, 194, 190, 0)',
                      }
                }
                transition={{
                  opacity: { ...subtleTransition, delay: idx * 0.07 },
                  y: { ...subtleTransition, delay: idx * 0.07 },
                  backgroundColor: { duration: 1.3, ease: subtleTransition.ease },
                  boxShadow: { duration: 1.3, ease: subtleTransition.ease },
                }}
              >
                <div className="text-[11px] text-oasis-green-800/60">Step {idx + 1}</div>
                <div className="text-xs text-oasis-green-800">{item}</div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </ProductVisualFrame>
  );
}

function FeatureSceneIdentityDlp({ pageKey }) {
  const ctx = getContext(pageKey);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ProductVisualFrame title="Identity + DLP">
      <div className="grid grid-cols-2 gap-2 p-3">
        <div className="rounded-md border border-oasis-green-800/10 p-2">
          <div className="text-[11px] font-semibold text-oasis-green-800/75">Identity gate</div>
          <ul className="mt-1 space-y-1 text-[11px] text-oasis-green-800/80">
            <li>Okta SSO</li>
            <li>MFA verified</li>
            <li>Role: {ctx.persona}</li>
          </ul>
        </div>
        <div className="rounded-md border border-oasis-green-800/10 p-2">
          <div className="text-[11px] font-semibold text-oasis-green-800/75">Data policy</div>
          <ul className="mt-1 space-y-1 text-[11px] text-oasis-green-800/80">
            <li>Paste: inspect</li>
            <li>Download: restricted</li>
            <li>Upload: allowed</li>
          </ul>
        </div>
        <motion.div
          className="col-span-2 rounded-md border border-oasis-green-800/10 bg-[#f8fbfa] p-2 text-[11px] text-oasis-green-800/80"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  borderColor: ['rgba(74, 87, 69, 0.10)', 'rgba(102, 194, 190, 0.35)', 'rgba(74, 87, 69, 0.10)'],
                  opacity: [0.92, 1, 0.92],
                }
          }
          transition={prefersReducedMotion ? undefined : { ...slowLoopTransition, duration: 5.5 }}
        >
          Decision engine: allow {ctx.app} session with DLP guardrails
        </motion.div>
      </div>
    </ProductVisualFrame>
  );
}

function FeatureScenePolicyAutomation({ pageKey }) {
  const ctx = getContext(pageKey);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ProductVisualFrame title="Policy automation">
      <div className="space-y-2 p-3">
        <div className="rounded-md border border-oasis-green-800/10 bg-white p-2 text-xs text-oasis-green-800">
          IF app scope = {ctx.app} AND data class = Confidential
        </div>
        <div className="rounded-md border border-oasis-green-800/10 bg-white p-2 text-xs text-oasis-green-800">
          THEN enforce {ctx.policy.toLowerCase()} + notify security
        </div>
        <motion.div
          className="rounded-md border border-[#bddfd6] bg-[#eef8f5] p-2 text-xs text-[#2c6157]"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  backgroundColor: ['rgba(238, 248, 245, 1)', 'rgba(231, 244, 240, 1)', 'rgba(238, 248, 245, 1)'],
                  boxShadow: [
                    '0 0 0 0 rgba(102, 194, 190, 0)',
                    '0 0 0 1px rgba(102, 194, 190, 0.18)',
                    '0 0 0 0 rgba(102, 194, 190, 0)',
                  ],
                }
          }
          transition={prefersReducedMotion ? undefined : { ...slowLoopTransition, duration: 4.2 }}
        >
          Last event: triggered 2m ago on {ctx.persona.toLowerCase()} session
        </motion.div>
      </div>
    </ProductVisualFrame>
  );
}

function FeatureSceneContractorAccess({ pageKey }) {
  const ctx = getContext(pageKey);
  const prefersReducedMotion = usePrefersReducedMotion();
  const steps = [
    `Invite ${ctx.persona.toLowerCase()}`,
    'IdP auth + MFA',
    'Managed session starts',
    `${ctx.app} access with policy`,
  ];
  const activeStep = useRotatingIndex(steps.length, 5400, !prefersReducedMotion);

  return (
    <ProductVisualFrame title="Contractor onboarding">
      <div className="grid grid-cols-2 gap-2 p-3">
        {steps.map((step, index) => {
          const isCurrent = index === activeStep;

          return (
            <motion.div
              key={step}
              className="rounded-md border border-oasis-green-800/10 bg-white p-2"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 2 }}
              animate={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : {
                      opacity: 1,
                      y: isCurrent ? -1 : 0,
                      borderColor: isCurrent ? 'rgba(102, 194, 190, 0.45)' : 'rgba(74, 87, 69, 0.10)',
                    }
              }
              transition={{
                opacity: { ...subtleTransition, delay: index * 0.06 },
                y: { ...subtleTransition, delay: index * 0.06 },
                borderColor: { duration: 1.1, ease: subtleTransition.ease },
              }}
            >
              <div className="flex items-center gap-2">
                <motion.span
                  className="inline-flex h-1.5 w-6 rounded-full bg-[#d9eeea]"
                  animate={
                    prefersReducedMotion
                      ? { opacity: 0.9, scaleX: 1 }
                      : {
                          opacity: isCurrent ? [0.65, 1, 0.65] : 0.75,
                          scaleX: isCurrent ? [0.92, 1, 0.92] : 1,
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: isCurrent ? 2.8 : 0.6, repeat: isCurrent ? Infinity : 0, ease: 'easeInOut' }
                  }
                />
                <div className="text-[10px] uppercase tracking-wide text-oasis-green-800/55">Step {index + 1}</div>
              </div>
              <div className="text-xs text-oasis-green-800">{step}</div>
            </motion.div>
          );
        })}
      </div>
    </ProductVisualFrame>
  );
}

export const sceneComponentMap = {
  incidentTriaging: FeatureSceneIncidentTriaging,
  sessionGovernance: FeatureSceneSessionGovernance,
  identityDlp: FeatureSceneIdentityDlp,
  policyAutomation: FeatureScenePolicyAutomation,
  contractorAccess: FeatureSceneContractorAccess,
};
