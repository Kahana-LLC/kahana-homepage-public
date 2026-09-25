import { useEffect, useMemo, useState } from 'react';
import { FolderPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PRODUCT_ORIGIN, productHref } from '../../lib/productLinks';
import { trackButtonClick } from '../../utils/analytics';
import {
  aliasAuraDisplayName,
  formatAuraMemberSince,
  sampleAvatarUrl,
} from '../../lib/auraTrails';

const SHEET_CAP = 3;
const GRAPH_HUB_CAP = 8;

function hubUrl(id) {
  return `${PRODUCT_ORIGIN}/hub/${id}`;
}

function uniqueHubs(currentHub, givers) {
  const map = new Map();
  map.set(currentHub.id, { hubId: currentHub.id, name: currentHub.title, coverThumbUrl: currentHub.coverSrc });
  givers.forEach((giver) => {
    (giver.hubsGiven || []).forEach((hub) => {
      if (!map.has(hub.hubId)) map.set(hub.hubId, hub);
    });
  });
  return [...map.values()].slice(0, GRAPH_HUB_CAP);
}

function layoutGraph(givers, hubs) {
  const personGap = 56;
  const hubGap = 40;
  const peopleX = 28;
  const hubX = 290;
  const top = 28;
  const people = givers.map((giver, i) => ({
    id: giver.uid,
    x: peopleX,
    y: top + i * personGap,
  }));
  const hubPos = Object.fromEntries(
    hubs.map((hub, i) => [hub.hubId, { x: hubX, y: top + i * hubGap }]),
  );
  const height = Math.max(top + givers.length * personGap, top + hubs.length * hubGap, 280) + 24;
  return { people, hubPos, height };
}

function useCountUp(target, resetKey) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const end = Math.max(0, Number(target) || 0);
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const duration = Math.min(1400, 400 + end * 40);
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(end * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    setValue(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, resetKey]);
  return value;
}

function AuraMark({ className = 'h-5 w-auto', counting = false }) {
  return (
    <svg
      viewBox="0 0 24 36"
      aria-hidden
      className={`aura-mark ${className} ${counting ? 'aura-mark-pulse' : ''}`}
    >
      <path
        fill="#489CB5"
        d="M12 1.2c.4 3.8-2.2 6.4-4.6 9.2-2.6 3-4.6 6.2-3.8 10.4 1 5.2 5.4 8.8 8.4 8.8s7.4-3.6 8.4-8.8c.8-4.2-1.2-7.4-3.8-10.4C14.2 7.6 11.6 5 12 1.2z"
      />
      <path
        fill="#6DAFC4"
        d="M12 14.2c.2 1.8-1 3-2.1 4.3-1.2 1.4-2.1 2.9-1.7 4.8.5 2.4 2.5 4 3.8 4s3.3-1.6 3.8-4c.4-1.9-.5-3.4-1.7-4.8-1.1-1.3-2.3-2.5-2.1-4.3z"
      />
    </svg>
  );
}

function Avatar({ name, size = 32 }) {
  return (
    <img
      src={sampleAvatarUrl(name)}
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-full bg-[#EFE8D8] object-cover"
      style={{ width: size, height: size }}
    />
  );
}

export default function AuraGiversPreview({ hubs = [], omitIntro = false }) {
  const [hubId, setHubId] = useState(hubs[0]?.id || '');
  const currentRaw = hubs.find((hub) => hub.id === hubId) || hubs[0];
  const current = currentRaw
    ? {
        ...currentRaw,
        givers: (currentRaw.givers || []).map((giver) => ({
          ...giver,
          displayName: aliasAuraDisplayName(giver.uid),
        })),
      }
    : currentRaw;
  const sheetGivers = (current?.givers || []).slice(0, SHEET_CAP);
  const [activeId, setActiveId] = useState(sheetGivers[0]?.uid || '');

  const visibleGivers = sheetGivers;
  const active = visibleGivers.find((g) => g.uid === activeId) || visibleGivers[0] || null;

  const graphHubs = useMemo(
    () => (current ? uniqueHubs(current, visibleGivers) : []),
    [current, visibleGivers],
  );

  const graph = useMemo(
    () => layoutGraph(visibleGivers, graphHubs),
    [visibleGivers, graphHubs],
  );

  const activeHubIds = new Set([
    current?.id,
    ...((active?.hubsGiven || []).map((h) => h.hubId) || []),
  ]);

  const countedTotal = useCountUp(current?.count || 0, current?.id);
  const countingTotal = countedTotal < (current?.count || 0);

  if (!current) return null;

  const extraGivers = Math.max(0, (current.giverCount || current.givers.length) - sheetGivers.length);

  const Wrapper = omitIntro ? 'div' : 'section';
  const wrapperClass = omitIntro
    ? 'w-full'
    : 'border-t border-[#E4D9C4] bg-[#EFE8D8] px-6 py-16 sm:px-10 lg:px-16';

  return (
    <Wrapper className={wrapperClass}>
      <div className={omitIntro ? 'w-full' : 'mx-auto w-full max-w-6xl'}>
        {!omitIntro ? (
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[#8A6622]">In the app</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Who gave this Aura</h2>
            <p className="mt-4 text-base leading-relaxed text-[#5C4520] sm:text-lg">
              A live Who gave Aura list from a Library hub. Names and portraits here are samples.
              Member since, amounts, and packs they marked are from the real list.
            </p>
          </div>
        ) : null}

        <div className={`${omitIntro ? '' : 'mt-8 '}grid items-start gap-6 lg:grid-cols-2`}>
          <div
            className="overflow-hidden rounded-3xl border border-[#D8CCB4] bg-[#F7F3EA] shadow-[0_24px_60px_-28px_rgba(59,47,26,0.45)]"
            aria-label="Who gave Aura list"
          >
            <div className="flex items-center justify-between border-b border-[#E4D9C4] px-4 py-2">
              <p className="text-sm font-semibold text-[#3B2F1A]">Who gave Aura</p>
              <a
                href={hubUrl(current.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#8A6622] no-underline underline-offset-4 hover:underline"
              >
                Open hub
              </a>
            </div>
            <div className="flex items-center gap-3 border-b border-[#E4D9C4] px-4 py-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#EFE8D8]">
                {current.coverSrc ? (
                  <img src={current.coverSrc} alt="" className="h-full w-full object-cover" />
                ) : (
                  <AuraMark className="h-7 w-auto" counting={countingTotal} />
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#3B2F1A]">{current.title}</p>
                <p className="flex items-center gap-1.5 text-xs text-[#5C4520]">
                  <AuraMark className="h-4 w-auto" counting={countingTotal} />
                  <span className="tabular-nums font-semibold text-[#3B2F1A]">{countedTotal}</span>
                  Aura · {current.giverCount} {current.giverCount === 1 ? 'person' : 'people'}
                </p>
              </div>
            </div>
            {sheetGivers.length === 0 ? (
              <p className="p-6 text-sm text-[#5C4520]">No Aura yet.</p>
            ) : (
              <ul className="m-0 flex list-none flex-col gap-2 p-3">
                {sheetGivers.map((giver) => {
                  const selected = giver.uid === (active?.uid || '');
                  const memberSince = formatAuraMemberSince(giver.accountCreatedAt);
                  return (
                    <li key={giver.uid}>
                      <GiverRow
                        giver={giver}
                        selected={selected}
                        memberSince={memberSince}
                        resetKey={current.id}
                        onSelect={() => setActiveId(giver.uid)}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
            {extraGivers > 0 ? (
              <p className="border-t border-[#E4D9C4] px-5 py-3 text-center text-xs text-[#5C4520]">
                <a
                  href={hubUrl(current.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#8A6622] no-underline underline-offset-4 hover:underline"
                >
                  Open this hub
                </a>
                {` for ${extraGivers} more ${extraGivers === 1 ? 'person' : 'people'}.`}
              </p>
            ) : null}
          </div>

          <div className="rounded-3xl border border-[#D8CCB4] bg-[#3B2F1A] p-4 text-[#F7F3EA] sm:p-6">
            <p className="text-sm font-semibold tracking-wide text-[#E4D9C4]">The trail</p>
            {active ? (
              <>
                <h3 className="mt-1 text-xl font-semibold !text-[#F7F3EA]">
                  {active.displayName} connects this pack to{' '}
                  {activeHubIds.size === 1 ? 'one hub' : `${activeHubIds.size} hubs`}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F7F3EA]/80">
                  {formatAuraMemberSince(active.accountCreatedAt)
                    ? `Member since ${formatAuraMemberSince(active.accountCreatedAt)}. `
                    : ''}
                  Select a person in the list to see the web they leave: people on the left, packs
                  they marked noteworthy on the right.
                </p>
              </>
            ) : (
              <p className="mt-3 text-sm text-[#F7F3EA]/80">No Aura trail on this hub yet.</p>
            )}
            {visibleGivers.length > 0 ? (
              <svg
                viewBox={`0 0 520 ${graph.height}`}
                className="mt-6 h-auto w-full"
                role="img"
                aria-label={active ? `Aura web for ${active.displayName}` : 'Aura web'}
              >
                {visibleGivers.flatMap((giver) => {
                  const from = graph.people.find((p) => p.id === giver.uid);
                  if (!from) return [];
                  const targets = [current.id, ...(giver.hubsGiven || []).map((h) => h.hubId)].filter(
                    (id, i, arr) => graph.hubPos[id] && arr.indexOf(id) === i,
                  );
                  return targets.map((targetId) => {
                    const to = graph.hubPos[targetId];
                    const on = giver.uid === active?.uid;
                    return (
                      <line
                        key={`${giver.uid}-${targetId}`}
                        x1={from.x + 18}
                        y1={from.y + 14}
                        x2={to.x - 6}
                        y2={to.y + 14}
                        stroke={on ? '#E8C56A' : '#6B5A3D'}
                        strokeWidth={on ? 2.4 : 1}
                        opacity={on ? 1 : 0.4}
                      />
                    );
                  });
                })}
                {visibleGivers.map((giver) => {
                  const pos = graph.people.find((p) => p.id === giver.uid);
                  if (!pos) return null;
                  const on = giver.uid === active?.uid;
                  const since = formatAuraMemberSince(giver.accountCreatedAt);
                  const r = on ? 16 : 14;
                  return (
                    <g key={giver.uid}>
                      <defs>
                        <clipPath id={`avatar-${giver.uid}`}>
                          <circle cx={pos.x} cy={pos.y + 14} r={r} />
                        </clipPath>
                      </defs>
                      <image
                        href={sampleAvatarUrl(giver.displayName)}
                        x={pos.x - r}
                        y={pos.y + 14 - r}
                        width={r * 2}
                        height={r * 2}
                        clipPath={`url(#avatar-${giver.uid})`}
                      />
                      <circle
                        cx={pos.x}
                        cy={pos.y + 14}
                        r={r}
                        fill="none"
                        stroke={on ? '#E8C56A' : '#F7F3EA'}
                        strokeWidth={on ? 2 : 1}
                      />
                      <text x={pos.x + 24} y={pos.y + 10} fill="#F7F3EA" fontSize="11" fontWeight="600">
                        {giver.displayName.split(/\s+/)[0]}
                      </text>
                      {since ? (
                        <text x={pos.x + 24} y={pos.y + 26} fill="#E4D9C4" fontSize="9">
                          {since}
                        </text>
                      ) : null}
                    </g>
                  );
                })}
                {graphHubs.map((hub) => {
                  const pos = graph.hubPos[hub.hubId];
                  if (!pos) return null;
                  const on = activeHubIds.has(hub.hubId);
                  const isCurrent = hub.hubId === current.id;
                  const label = hub.name.length > 28 ? `${hub.name.slice(0, 26)}…` : hub.name;
                  return (
                    <a key={hub.hubId} href={hubUrl(hub.hubId)} target="_blank" rel="noopener noreferrer">
                      <title>{hub.name}</title>
                      <rect
                        x={pos.x}
                        y={pos.y}
                        width={210}
                        height={28}
                        rx="14"
                        fill={on ? '#F7F3EA' : '#4A3C26'}
                        stroke={isCurrent ? '#E8C56A' : on ? '#F7F3EA' : '#6B5A3D'}
                        strokeWidth={isCurrent ? 2 : 1}
                      />
                      <text
                        x={pos.x + 105}
                        y={pos.y + 18}
                        textAnchor="middle"
                        fill={on ? '#3B2F1A' : '#E4D9C4'}
                        fontSize="10"
                        fontWeight="700"
                      >
                        {label}
                      </text>
                    </a>
                  );
                })}
              </svg>
            ) : null}
          </div>
        </div>

        {!omitIntro ? (
          <>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={productHref('/library', 'aura_preview_library')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
                onClick={() => trackButtonClick('aura_preview_library')}
              >
                <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden />
                Library
              </a>
              <a
                href={productHref('/', 'aura_preview_signup')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                onClick={() => trackButtonClick('aura_preview_signup')}
              >
                <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden />
                Create account
              </a>
            </div>
            <p className="mt-3 text-center text-sm text-[#5C4520]">
              Open the Library to find hubs, or create an account to give Aura.
            </p>
          </>
        ) : null}
      </div>
    </Wrapper>
  );
}

function GiverRow({
  giver,
  selected,
  memberSince,
  resetKey,
  onSelect,
}) {
  const counted = useCountUp(giver.amount, `${resetKey}-${giver.uid}`);
  const counting = counted < giver.amount;
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-xl border px-3 py-2 text-left !font-normal !normal-case ${
        selected ? '!border-[#8A6622] !bg-white' : '!border-[#E4D9C4] !bg-white hover:!border-[#8A6622]'
      }`}
      aria-pressed={selected}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <Avatar name={giver.displayName} size={32} />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-[#3B2F1A]">{giver.displayName}</span>
            {memberSince ? (
              <span className="mt-0.5 block text-[11px] text-[#5C4520]">Member since {memberSince}</span>
            ) : null}
          </span>
        </div>
        <span className="flex shrink-0 items-center gap-1 text-sm font-semibold tabular-nums text-[#3B2F1A]">
          <AuraMark counting={counting} />
          {counted}
        </span>
      </div>
    </button>
  );
}
