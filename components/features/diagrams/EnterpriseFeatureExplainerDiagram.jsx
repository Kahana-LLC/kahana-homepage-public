import React from 'react';

const VARIANT_META = {
  external: {
    title: 'Access follows the session',
    caption: 'Contractors and partners reach sanctioned SaaS through a governed browser session—not only through devices you image.',
    label: 'Concept: external access',
  },
  governance: {
    title: 'Policy travels with the session',
    caption: 'Browser expectations for extensions, data, and apps stay attached to the work session across managed and partner-owned devices.',
    label: 'Concept: governance',
  },
  identity: {
    title: 'Stack signals meet the tab',
    caption: 'Identity (who) and DLP / data rules (what may move) extend into SaaS and web workflows where integrations are supported.',
    label: 'Concept: identity and DLP',
  },
  faster: {
    title: 'Shorter path for web-first roles',
    caption: 'When the bottleneck is browser access, identity-driven sessions can reduce linear hardware logistics for the right workloads.',
    label: 'Concept: faster paths',
  },
};

const FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

function SvgText({ x, y, children, size = 10, fill = '#495800', weight = '600', anchor = 'middle', opacity = 1 }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={fill}
      fontSize={size}
      fontFamily={FONT}
      fontWeight={weight}
      opacity={opacity}
    >
      {children}
    </text>
  );
}

function ArrowMarker({ id, color }) {
  return (
    <marker id={id} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <path d="M0 0 L7 3.5 L0 7 Z" fill={color} />
    </marker>
  );
}

/**
 * Lightweight explainer illustration for enterprise feature pages (decorative SVG + copy).
 */
export default function EnterpriseFeatureExplainerDiagram({ variant }) {
  const meta = VARIANT_META[variant];
  if (!meta) return null;

  return (
    <section
      className="border-b border-oasis-green-800/8 bg-white py-10 md:py-14"
      aria-label={meta.label}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-[#7a9200]">
          At a glance
        </p>
        <figure className="mx-auto max-w-lg md:max-w-2xl">
          <div className="rounded-2xl border border-oasis-green-800/12 bg-oasis-green-50 px-3 py-5 sm:px-5 sm:py-6">
            <ExplainerSvg variant={variant} />
          </div>
          <figcaption className="mt-4 space-y-2 text-center">
            <p className="text-base font-semibold text-oasis-green-800">{meta.title}</p>
            <p className="text-sm leading-relaxed text-oasis-green-800/85">{meta.caption}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function ExplainerSvg({ variant }) {
  const stroke = '#495800';
  const accent = '#489CB5';
  const olive = '#7a9200';
  const muted = 'rgba(74, 87, 69, 0.72)';

  if (variant === 'identity') {
    return (
      <svg viewBox="0 0 440 178" className="explainer-diagram-svg h-auto w-full" aria-hidden>
        <defs>
          <filter id="explainer-shadow-idn-oasis" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#495800" floodOpacity="0.14" />
          </filter>
          <ArrowMarker id="explainer-m-idn-a" color={accent} />
        </defs>

        {/* IdP */}
        <ellipse cx="76" cy="62" rx="42" ry="27" fill="#ffffff" stroke={stroke} strokeOpacity="0.38" strokeWidth="1.2" />
        <circle cx="76" cy="54" r="6" fill="none" stroke={stroke} strokeOpacity="0.35" strokeWidth="1.2" />
        <path
          d="M76 60 v6 M70 66 h12"
          fill="none"
          stroke={stroke}
          strokeOpacity="0.4"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <SvgText x={76} y={78} size={11} weight="700">
          IdP
        </SvgText>

        {/* Oasis hub */}
        <g filter="url(#explainer-shadow-idn-oasis)">
          <rect x="144" y="36" width="96" height="58" rx="12" fill="#ffffff" stroke={olive} strokeWidth="2" />
        </g>
        <rect x="158" y="46" width="68" height="22" rx="4" fill="#f8faf9" stroke={stroke} strokeOpacity="0.2" />
        <circle cx="166" cy="57" r="2.5" fill={olive} fillOpacity="0.5" />
        <circle cx="174" cy="57" r="2.5" fill={stroke} fillOpacity="0.15" />
        <circle cx="182" cy="57" r="2.5" fill={stroke} fillOpacity="0.15" />
        <SvgText x={192} y={86} size={11} weight="700">
          Oasis
        </SvgText>

        {/* DLP */}
        <rect x="296" y="44" width="80" height="48" rx="10" fill="#ffffff" stroke={stroke} strokeOpacity="0.38" strokeWidth="1.2" />
        <path
          d="M336 52 v-4 l8 4 -8 4 -8 -4 8 -4z"
          fill="none"
          stroke={stroke}
          strokeOpacity="0.42"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M326 68 h20 M326 73 h16"
          fill="none"
          stroke={stroke}
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <SvgText x={336} y={88} size={10} weight="700">
          DLP
        </SvgText>

        {/* SaaS / tab */}
        <rect x="157" y="112" width="86" height="36" rx="8" fill="#ffffff" stroke={stroke} strokeOpacity="0.28" strokeWidth="1" />
        <SvgText x={200} y={128} size={8} weight="600" fill={muted}>
          SaaS & web
        </SvgText>
        <SvgText x={200} y={140} size={7} weight="600" opacity={0.75} fill={muted}>
          In the tab
        </SvgText>

        {/* Edges */}
        <path
          d="M118 62 H144"
          stroke={accent}
          strokeWidth="2"
          fill="none"
          markerEnd="url(#explainer-m-idn-a)"
          className="explainer-flow-line"
        />
        <path
          d="M296 68 H240"
          stroke={accent}
          strokeWidth="2"
          fill="none"
          markerEnd="url(#explainer-m-idn-a)"
          className="explainer-flow-line"
        />
        <path
          d="M192 94 V108"
          stroke={accent}
          strokeWidth="2"
          fill="none"
          markerEnd="url(#explainer-m-idn-a)"
          className="explainer-flow-line"
        />

        <SvgText x={131} y={52} size={7} weight="600" fill={muted}>
          Identity / who
        </SvgText>
        <SvgText x={268} y={56} size={7} weight="600" fill={muted}>
          Data rules
        </SvgText>
      </svg>
    );
  }

  if (variant === 'external') {
    return (
      <svg viewBox="0 0 400 148" className="explainer-diagram-svg h-auto w-full" aria-hidden>
        <defs>
          <ArrowMarker id="explainer-m-ext-a" color={accent} />
        </defs>
        <rect x="18" y="54" width="76" height="50" rx="9" fill="#ffffff" stroke={stroke} strokeOpacity="0.35" strokeWidth="1.2" />
        <SvgText x={56} y={84} size={10} weight="700">
          Partner
        </SvgText>
        <rect x="154" y="38" width="92" height="82" rx="11" fill="#ffffff" stroke={olive} strokeWidth="2" />
        <SvgText x={200} y={88} size={11} weight="700">
          Oasis
        </SvgText>
        <rect x="292" y="50" width="86" height="58" rx="9" fill="#ffffff" stroke={stroke} strokeOpacity="0.35" strokeWidth="1.2" />
        <SvgText x={335} y={88} size={10} weight="700">
          SaaS
        </SvgText>
        <path
          d="M94 78 H154"
          stroke={accent}
          strokeWidth="2"
          fill="none"
          markerEnd="url(#explainer-m-ext-a)"
          className="explainer-flow-line"
        />
        <path
          d="M246 78 H292"
          stroke={accent}
          strokeWidth="2"
          fill="none"
          markerEnd="url(#explainer-m-ext-a)"
          className="explainer-flow-line"
        />
        <SvgText x={124} y={70} size={7} weight="600" fill={muted}>
          Access
        </SvgText>
        <SvgText x={269} y={70} size={7} weight="600" fill={muted}>
          Sanctioned session
        </SvgText>
      </svg>
    );
  }

  if (variant === 'governance') {
    return (
      <svg viewBox="0 0 400 148" className="explainer-diagram-svg h-auto w-full" aria-hidden>
        <defs>
          <ArrowMarker id="explainer-m-gov-a" color={accent} />
        </defs>
        <rect
          x="22"
          y="44"
          width="132"
          height="62"
          rx="10"
          fill="#ffffff"
          stroke={stroke}
          strokeOpacity="0.28"
          strokeWidth="1.2"
          strokeDasharray="5 4"
        />
        <SvgText x={88} y={72} size={9} weight="600" fill={muted}>
          Device-only policy
        </SvgText>
        <SvgText x={88} y={88} size={7} weight="600" opacity={0.8} fill={muted}>
          (session drifts)
        </SvgText>
        <rect x="238" y="38" width="140" height="74" rx="11" fill="#ffffff" stroke={olive} strokeWidth="2" />
        <SvgText x={308} y={74} size={10} weight="700">
          Session + browser
        </SvgText>
        <SvgText x={308} y={92} size={8} weight="600" fill={muted}>
          policy follows work
        </SvgText>
        <path
          d="M154 76 H238"
          stroke={accent}
          strokeWidth="2.2"
          fill="none"
          markerEnd="url(#explainer-m-gov-a)"
          className="explainer-flow-line"
        />
        <SvgText x={196} y={68} size={7} weight="600" fill={muted}>
          Shift
        </SvgText>
      </svg>
    );
  }

  // faster
  return (
    <svg viewBox="0 0 400 152" className="explainer-diagram-svg h-auto w-full" aria-hidden>
      <SvgText x={200} y={20} size={8} weight="600" fill={muted} opacity={0.95}>
        ONBOARDING CRITICAL PATH (ILLUSTRATIVE)
      </SvgText>
      <path d="M36 98 L184 98" stroke={stroke} strokeOpacity="0.32" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="36" cy="98" r="6" fill={stroke} fillOpacity="0.38" />
      <circle cx="184" cy="98" r="6" fill={stroke} fillOpacity="0.38" />
      <SvgText x={110} y={124} size={9} weight="600" fill="#495800" opacity={0.82}>
        Image, ship, reclaim device…
      </SvgText>
      <path d="M216 98 L364 98" stroke={olive} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="216" cy="98" r="6" fill={olive} />
      <circle cx="364" cy="98" r="6" fill={olive} />
      <SvgText x={290} y={124} size={9} weight="700" fill="#495800">
        Identity + governed browser session
      </SvgText>
    </svg>
  );
}
