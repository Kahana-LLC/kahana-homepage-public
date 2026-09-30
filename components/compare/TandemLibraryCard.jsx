/**
 * Live Library listing, not a screenshot.
 * Shows the same hub listed on Kahana and linked from another platform.
 */
export default function TandemLibraryCard({ platformName }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[#E4D9C4] bg-[#F7F3EA]">
      <div className="flex items-center justify-between border-b border-[#E4D9C4] bg-white px-4 py-3">
        <p className="text-sm font-semibold text-[#3B2F1A]">Library</p>
        <p className="text-xs font-medium text-[#8A6622]">Listed</p>
      </div>
      <div className="p-4 sm:p-5">
        <article className="overflow-hidden rounded-2xl border border-[#E4D9C4] bg-white">
          <div className="flex gap-4 p-4">
            <div
              className="flex h-24 w-16 shrink-0 items-end rounded-lg bg-[#3B2F1A] p-2 text-[10px] font-semibold uppercase tracking-wide text-[#F7F3EA]"
              aria-hidden
            >
              Hub
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#8A6622]">Health and wellness</p>
              <h3 className="mt-1 text-lg font-semibold text-[#3B2F1A]">Session notes and worksheets</h3>
              <p className="mt-1 text-sm text-[#666666]">Files, a short video, and the checklist from the live session.</p>
              <p className="mt-3 text-sm font-medium text-[#3B2F1A]">Free to open</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 border-t border-[#E4D9C4] px-4 py-3">
            <span className="rounded-full bg-[#EDE6D2] px-3 py-1 text-xs font-semibold text-[#3B2F1A]">
              On Kahana Library
            </span>
            <span className="rounded-full border border-[#E4D9C4] px-3 py-1 text-xs font-semibold text-[#5C4520]">
              Linked from {platformName}
            </span>
          </div>
        </article>
        <p className="mt-3 text-sm text-[#5C4520]">
          Same pack. People can open it from {platformName}, and anyone searching the Library can find it too.
        </p>
      </div>
    </div>
  );
}
