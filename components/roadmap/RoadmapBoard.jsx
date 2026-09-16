import { useEffect, useId, useState } from 'react';

function formatLogged(iso) {
  if (!iso) return null;
  const date = new Date(iso);
  if (!Number.isFinite(date.getTime())) return null;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function RoadmapDialog({ item, onClose }) {
  const titleId = useId();
  const logged = formatLogged(item?.createdAt);

  useEffect(() => {
    if (!item) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="roadmap-backdrop absolute inset-0"
        aria-label="Close"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[#D8CCB4] bg-[#F7F3EA] p-6 shadow-[0_24px_60px_-20px_rgba(59,47,26,0.55)] sm:p-8"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A6622]">{item.kind}</p>
        <h3 id={titleId} className="mt-2 text-2xl font-semibold leading-tight text-[#3B2F1A]">
          {item.title}
        </h3>
        {logged ? <p className="mt-2 text-sm text-[#5C4520]">Logged {logged}</p> : null}

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622]">What it is</p>
            <p className="mt-2 text-base leading-relaxed text-[#5C4520]">{item.what}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A6622]">Why it helps you</p>
            <p className="mt-2 text-base leading-relaxed text-[#5C4520]">{item.benefit}</p>
          </div>
        </div>

        <button
          type="button"
          className="btn-secondary mt-8 w-full justify-center no-underline sm:w-auto"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function RoadmapBoard({ columns, stale }) {
  const [open, setOpen] = useState(null);
  const lanes = [
    { id: 'backlog', title: 'Backlog', items: columns?.backlog || [] },
    { id: 'inProgress', title: 'In progress', items: columns?.inProgress || [] },
    { id: 'shipped', title: 'Shipped recently', items: columns?.shipped || [] },
  ];

  return (
    <div>
      {stale ? (
        <p className="mb-4 text-center text-sm text-[#8A9378]">
          Live Linear did not refresh. This board is a recent snapshot of tagged platform features.
        </p>
      ) : null}
      <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
        {lanes.map((lane) => (
          <section
            key={lane.id}
            className="flex w-[min(100%,20rem)] shrink-0 flex-col rounded-2xl border border-[#D8CCB4] bg-[#EFE8D8] p-3 sm:w-[22rem]"
            aria-labelledby={`roadmap-${lane.id}`}
          >
            <div className="mb-3 flex items-center justify-between gap-2 px-1">
              <h2 id={`roadmap-${lane.id}`} className="text-sm font-semibold text-[#3B2F1A]">
                {lane.title}
              </h2>
              <span className="rounded-full bg-[#F7F3EA] px-2 py-0.5 text-xs font-semibold tabular-nums text-[#5C4520]">
                {lane.items.length}
              </span>
            </div>
            <ul className="m-0 flex min-h-[12rem] list-none flex-col gap-2 p-0">
              {lane.items.length === 0 ? (
                <li className="rounded-xl border border-dashed border-[#D8CCB4] bg-[#F7F3EA]/70 px-3 py-6 text-center text-sm text-[#8A9378]">
                  Nothing in this column yet.
                </li>
              ) : (
                lane.items.map((item) => {
                  const logged = formatLogged(item.createdAt);
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => setOpen(item)}
                        className="roadmap-card"
                      >
                        {item.kind ? (
                          <span className="roadmap-card__kind block text-[10px] font-semibold uppercase tracking-[0.12em]">
                            {item.kind}
                          </span>
                        ) : null}
                        <span className="roadmap-card__title mt-1 block text-sm leading-snug">
                          {item.title}
                        </span>
                        {item.teaser ? (
                          <span className="roadmap-card__teaser mt-1.5 block text-xs leading-relaxed">
                            {item.teaser}
                          </span>
                        ) : null}
                        {logged ? (
                          <span className="roadmap-card__logged mt-2 block text-[11px]">
                            Logged {logged}
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </section>
        ))}
      </div>
      <RoadmapDialog item={open} onClose={() => setOpen(null)} />
    </div>
  );
}
