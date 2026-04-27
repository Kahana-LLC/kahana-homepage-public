/**
 * Consortium FAQs for the Data Leakage Consortium page.
 * IBM report: https://www.ibm.com/downloads/documents/us-en/131cf87b20b31c91
 */

import { CONSORTIUM_SIGNAL_USERNAME } from "./consortium-contact";

export const FAQ_BOTTOM_LINE =
  "This FAQ is a public overview. The operating framework, confidentiality expectations, and member rules you accept after screening are authoritative. Default to anonymity in discussions; when in doubt, share less.";

/** Optional links shown in the References accordion on the page. */
export const CONSORTIUM_FAQ_REFERENCES = [
  {
    id: "ibm-codb-2025",
    label: "IBM Cost of a Data Breach Report (context for consortium topics)",
    href: "https://www.ibm.com/downloads/documents/us-en/131cf87b20b31c91",
  },
  {
    id: "signal-org",
    label: "Signal (official site)",
    href: "https://signal.org/",
  },
  {
    id: "signal-phone-privacy-usernames",
    label: "Signal: phone number privacy & usernames (blog)",
    href: "https://signal.org/blog/phone-number-privacy-usernames/",
  },
  {
    id: "chatham-house-rule",
    label: "Chatham House: the Chatham House Rule",
    href: "https://www.chathamhouse.org/about-us/chatham-house-rule",
  },
];

/** @typedef {{ label: string, text?: string }} ConsortiumFaqBullet */
/** @typedef {{ heading: string, bullets: ConsortiumFaqBullet[] }} ConsortiumFaqSection */

/**
 * @typedef {{
 *   id: string,
 *   category: string,
 *   question: string,
 *   lead?: string,
 *   paragraphs?: string[],
 *   plainList?: string[],
 *   bullets?: ConsortiumFaqBullet[],
 *   sections?: ConsortiumFaqSection[],
 *   closing?: string,
 *   supplementaryLinks?: { label: string; href: string }[],
 * }} ConsortiumFaqItem
 */

/** Collects searchable text for client-side FAQ filtering. */
export function getConsortiumFaqSearchText(item) {
  const chunks = [
    item.category,
    item.question,
    item.lead,
    ...(item.paragraphs ?? []),
    ...(item.plainList ?? []),
    item.closing,
  ];
  item.bullets?.forEach((b) => {
    chunks.push(b.label, b.text);
  });
  item.sections?.forEach((s) => {
    chunks.push(s.heading);
    s.bullets.forEach((b) => {
      chunks.push(b.label, b.text);
    });
  });
  item.supplementaryLinks?.forEach((l) => {
    chunks.push(l.label, l.href);
  });
  return chunks.filter(Boolean).join(" ").toLowerCase();
}

const signalHandleAt = CONSORTIUM_SIGNAL_USERNAME.startsWith("@")
  ? CONSORTIUM_SIGNAL_USERNAME
  : `@${CONSORTIUM_SIGNAL_USERNAME}`;
const signalContactLine = `Message ${signalHandleAt} on Signal`;

/** @type {ConsortiumFaqItem[]} */
export const CONSORTIUM_FAQS = [
  {
    id: "what-is-consortium",
    category: "About",
    question: "What is this consortium?",
    lead: "A private community where security professionals discuss breach prevention, AI governance, supply chain security, and incident response.",
    paragraphs: [
      "Based on findings from IBM's 2025 Cost of a Data Breach Report showing organizations face $2.9M+ in preventable costs from skills shortages, shadow AI, and missing security fundamentals.",
    ],
    supplementaryLinks: [
      {
        label: "IBM Cost of a Data Breach Report (2025)",
        href: "https://www.ibm.com/downloads/documents/us-en/131cf87b20b31c91",
      },
    ],
  },
  {
    id: "why-limited-public-info",
    category: "About",
    question: "Why is there limited public information?",
    lead: "Operational security. Members discuss active vulnerabilities and breach details that require confidentiality. Publishing member lists, security frameworks, or internal processes creates attack surface.",
  },
  {
    id: "why-signal-private-messaging",
    category: "Membership",
    question: "Why Signal for private group messaging?",
    lead: "Signal is a free, nonprofit messaging app for private chats and small groups—not a public social network. The consortium uses it for intake and working discussions because it is built for confidential peer communication.",
    paragraphs: [
      "End-to-end encryption. Minimal metadata collection. No corporate infrastructure to breach. Members control their privacy and data. New to Signal? Download here and consider usernames and phone-number privacy settings before you reach out to join.",
    ],
    supplementaryLinks: [
      { label: "Download here (Signal)", href: "https://signal.org/download/" },
      {
        label: "Usernames and phone-number privacy settings (Signal)",
        href: "https://signal.org/blog/phone-number-privacy-usernames/",
      },
      { label: "What is Signal? (signal.org)", href: "https://signal.org/" },
    ],
  },
  {
    id: "how-membership-works",
    category: "Membership",
    question: "How does membership work?",
    bullets: [
      {
        label: "Stage 1",
        text: `${signalContactLine} with your security role and focus area. A brief vetting conversation follows.`,
      },
      {
        label: "Stage 2",
        text: "If approved, you receive an invitation to a private screening channel. You review the consortium framework, ask questions, and observe discussions. After you accept the framework, you're promoted to the main channel within 2–4 weeks.",
      },
    ],
  },
  {
    id: "is-there-a-cost",
    category: "Membership",
    question: "Is there a cost?",
    lead: "No. The consortium is free to join and participate in.",
  },
  {
    id: "who-can-apply",
    category: "Membership",
    question: "Who can apply?",
    lead: "Security professionals with organizational responsibility: CISOs, security directors, IT leadership, compliance officers, incident responders.",
  },
  {
    id: "how-anonymity-works",
    category: "Participation",
    question: "How does anonymity and privacy work?",
    lead: "The consortium operates on default anonymity with layered privacy:",
    sections: [
      {
        heading: "Recommended practice",
        bullets: [
          {
            label: "Signal username",
            text: "Use a pseudonymous Signal username (not your real name).",
          },
          {
            label: "Organization name",
            text: "Don't reveal your organization's name.",
          },
          {
            label: "Context without identifiers",
            text: "Share context without identifiers—for example, “I'm at a mid-size healthcare company,” not “I'm at Memorial Hospital.”",
          },
          {
            label: "Role",
            text: "Describe role generally: “security director,” not your specific title.",
          },
          {
            label: "Examples",
            text: "Anonymize examples: “An organization experienced…” not “We experienced….”",
          },
        ],
      },
      {
        heading: "Why anonymity matters",
        bullets: [
          {
            label: "Candor and risk",
            text: "Even in trusted groups, identifying information creates risks. Anonymity enables honest discussion about real vulnerabilities without personal or organizational exposure.",
          },
        ],
      },
      {
        heading: "Privacy layers",
        bullets: [
          {
            label: "Your sponsor knows",
            text: "Your real identity and background (required for vouching accountability).",
          },
          {
            label: "Admin knows",
            text: "Your Signal handle and basic professional context from vetting. This minimal information supports security monitoring.",
          },
          {
            label: "Other members see",
            text: "Only what you choose to share in discussions; your pseudonymous username; not your phone number (with Signal configured for number privacy as intended).",
          },
          {
            label: "You control",
            text: "Whether to share industry, organization size, and role type, and how much detail to provide.",
          },
        ],
      },
    ],
    closing:
      "Privacy principle: Default to anonymity. Share strategically. Protect yourself and your organization while contributing meaningfully.",
  },
  {
    id: "what-to-share-about-self",
    category: "Participation",
    question: "What should I share about myself and my organization?",
    lead: "We strongly recommend default anonymity:",
    sections: [
      {
        heading: "Share (valuable context)",
        bullets: [
          { label: "Industry", text: "For example: “Healthcare,” “Financial services,” “Technology.”" },
          {
            label: "Organization size",
            text: "For example: “Mid-size (500–2,000 employees).”",
          },
          { label: "Role type", text: "For example: “CISO,” “Security director.”" },
          {
            label: "Challenges",
            text: "For example: “Shadow AI detection,” “Supply chain security.”",
          },
        ],
      },
      {
        heading: "Don't share (unnecessary exposure)",
        bullets: [
          { label: "Real name", text: "Use a pseudonymous Signal username instead of your real name." },
          { label: "Organization's name", text: "Avoid naming your employer when it isn't necessary." },
          {
            label: "Unique identifiers",
            text: "Avoid details that could single you or your organization out.",
          },
        ],
      },
    ],
    closing:
      "Why: Even in trusted communities, anonymity protects you from competitive intelligence, vendor targeting, legal discovery, and career risks. You can contribute meaningful insights while protecting yourself and your organization.",
  },
  {
    id: "participation-confidential",
    category: "Participation",
    question: "Will my participation be confidential?",
    lead: "Yes. Chatham House Rule applies—information can be used for learning, never attributed to individuals or organizations without permission. Signal provides end-to-end encryption. Anonymous usernames are strongly recommended. Phone numbers remain private. Member lists are not disclosed publicly.",
    supplementaryLinks: [
      {
        label: "Chatham House: the Chatham House Rule",
        href: "https://www.chathamhouse.org/about-us/chatham-house-rule",
      },
      {
        label: "Signal: phone number privacy & usernames",
        href: "https://signal.org/blog/phone-number-privacy-usernames/",
      },
    ],
  },
  {
    id: "competitor-joins",
    category: "Participation",
    question: "What if my competitor joins?",
    lead: "All members agree to confidentiality requirements. Information sharing is for defensive purposes only. You control what you disclose. Default anonymity means competitors won't know which anonymous contributions are yours. Note competitor conflicts during your application if concerned.",
  },
  {
    id: "ground-rules",
    category: "Participation",
    question: "What are the ground rules?",
    lead: "General principles include:",
    plainList: [
      "Confidentiality of discussions",
      "Default to anonymity (pseudonymous usernames, don't name organizations)",
      "Anonymize and censor information you share",
      "Professional conduct",
      "Defensive collaboration, not competitive intelligence",
      "Information shared is not legal or compliance advice",
      "No obligation to share anything you're not comfortable with",
    ],
    closing: "Specific requirements are explained during the screening process.",
  },
  {
    id: "what-happens-in-consortium",
    category: "Participation",
    question: "What happens in the consortium?",
    lead: "Technical discussions on security challenges, sharing of governance frameworks and assessment templates (when members choose to share), analysis of IBM report findings, anonymous case studies, and collaborative problem-solving. Members control what they share. Participation can be as passive (listening/learning) or active (contributing) as you prefer.",
  },
  {
    id: "time-commitment",
    category: "Participation",
    question: "How much time does participation require?",
    lead: "No minimum participation requirement. Engage when you have questions, information to share, or time to contribute. Observing without posting is acceptable.",
  },
  {
    id: "colleagues-same-org",
    category: "Participation",
    question: "Can colleagues from my organization join?",
    lead: "Yes. Each person applies and is vetted individually.",
  },
  {
    id: "prevent-fake-accounts-bad-actors",
    category: "Membership",
    question: "How do you prevent fake accounts or bad actors?",
    lead: "The invitation-only vouching model provides natural protection. Members vouch for people they know professionally and remain accountable for their invitees.",
    closing:
      "We have additional vetting procedures that aren't publicly disclosed for security reasons.",
  },
  {
    id: "how-exit",
    category: "Participation",
    question: "How do I exit?",
    lead: "Leave the Signal channel at any time. No exit process required.",
  },
  {
    id: "not-approved",
    category: "Participation",
    question: "What if I'm not approved?",
    lead: "Invitations are selective to maintain trust and quality. If not approved, you'll receive brief feedback. You may reapply after addressing concerns.",
  },
];
