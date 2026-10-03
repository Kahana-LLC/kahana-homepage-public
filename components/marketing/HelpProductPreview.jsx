/**
 * Static product chrome for help articles. Buttons are decorative.
 */

function Stat({ value, label }) {
  return (
    <span className="inline-flex items-baseline gap-1 text-xs text-[#5C4520]">
      <span className="font-semibold text-[#3B2F1A]">{value}</span>
      {label}
    </span>
  );
}

export function ProfileHelpPreview() {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-[#E4D9C4] bg-white text-[#3B2F1A] shadow-sm">
      <figcaption className="border-b border-[#E4D9C4] bg-[#F7F3EA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#8A6622]">
        Profile in the app
      </figcaption>
      <div className="h-16 bg-[#E7D7B1]" aria-hidden />
      <div className="px-4 pb-4">
        <div className="-mt-6 flex items-end justify-between gap-3">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#3B2F1A] text-lg font-semibold text-[#F7F3EA]"
            aria-hidden
          >
            A
          </div>
          <div className="mb-1 flex gap-2" aria-hidden>
            <span className="rounded-full bg-[#3B2F1A] px-3 py-1 text-xs font-semibold text-white">Follow</span>
            <span className="rounded-full border border-[#E4D9C4] px-3 py-1 text-xs font-semibold">Share</span>
          </div>
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-lg font-semibold leading-tight">
          Ada Lerner
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#8A6622] text-[10px] text-white" title="Verified">
            ✓
          </span>
        </p>
        <p className="mt-1 text-sm text-[#5C4520]">Essays and reading notes</p>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#3B2F1A]">
          I publish journals and the books I teach from. Follow for new hubs.
        </p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          <Stat value="1.2k" label="views" />
          <Stat value="86" label="Aura" />
          <Stat value="40" label="followers" />
          <Stat value="3" label="hubs" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2" aria-hidden>
          <div className="overflow-hidden rounded-xl border border-[#E4D9C4]">
            <div className="h-16 bg-[#C9D3A4]" />
            <p className="px-2 py-2 text-xs font-semibold">Field notes</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#E4D9C4]">
            <div className="h-16 bg-[#E7C9A1]" />
            <p className="px-2 py-2 text-xs font-semibold">Reading year</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function ClubHelpPreview() {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-[#E4D9C4] bg-white text-[#3B2F1A] shadow-sm">
      <figcaption className="border-b border-[#E4D9C4] bg-[#F7F3EA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#8A6622]">
        Club in the app
      </figcaption>
      <div className="px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-semibold leading-tight">Sunday pages</p>
            <p className="mt-1 text-sm text-[#5C4520]">A book club. One focus, a wish list, a feed.</p>
          </div>
          <span className="rounded-full bg-[#EDE6D2] px-2.5 py-1 text-xs font-semibold text-[#5C4520]">
            Private
          </span>
        </div>
        <div className="mt-4 rounded-xl bg-[#F7F3EA] px-3 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A6622]">Current focus</p>
          <p className="mt-1 text-sm font-semibold">The reading year</p>
        </div>
        <ul className="mt-3 space-y-2" aria-hidden>
          <li className="flex items-center justify-between rounded-lg border border-[#E4D9C4] px-3 py-2 text-sm">
            <span>Goodreads: next novel</span>
            <span className="text-xs text-[#8A6622]">12 votes</span>
          </li>
          <li className="flex items-center justify-between rounded-lg border border-[#E4D9C4] px-3 py-2 text-sm">
            <span>Hub: Field notes</span>
            <span className="text-xs text-[#8A6622]">Request access</span>
          </li>
        </ul>
      </div>
    </figure>
  );
}
