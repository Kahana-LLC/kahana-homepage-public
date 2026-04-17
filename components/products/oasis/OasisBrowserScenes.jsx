import React from 'react';

/** Left-pane content: article being summarized (scene 0 / 1). */
export function OasisSceneArticleBody({ showGroupHint }) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white px-3 py-3 sm:px-4">
      <p className="text-[10px] font-medium uppercase tracking-wide text-[#7a9200]">Article</p>
      <h1 className="mt-1 text-[15px] font-semibold leading-snug text-[#2f3a20] sm:text-base">
        Async-first norms beat meeting-heavy remote work
      </h1>
      <p className="mt-1 text-[11px] text-[#666]">Work Futures · 8 min read</p>
      {showGroupHint && (
        <div
          className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-md border border-[#7a9200]/35 bg-[#f2f4e5] px-2 py-1 text-[10px] font-semibold text-[#495800]"
          role="status"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#7a9200]" aria-hidden />
          In tab group: Research
        </div>
      )}
      <div className="mt-3 space-y-2 overflow-y-auto text-[12px] leading-relaxed text-[#444]">
        <p>
          Distributed teams default to calendars full of sync time. The author argues that most coordination should move
          to written artifacts and review cycles, so deep work stays protected.
        </p>
        <p className="line-clamp-2 sm:line-clamp-3">
          Case studies highlight teams that cut recurring meetings by half after adopting async standups and decision logs.
          The tradeoff is discipline: someone has to own clarity, deadlines, and readable summaries.
        </p>
        <p className="hidden text-[#999] sm:line-clamp-2 sm:block">
          Meta-analysis suggests outcomes depend less on time zone overlap than on predictable response windows and
          searchable context.
        </p>
      </div>
    </div>
  );
}

/** Left-pane content: semantic history search (scene 2). */
export function OasisSceneHistoryBody() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#fafbf8] px-3 py-3 sm:px-4">
      <p className="text-[10px] font-medium uppercase tracking-wide text-[#7a9200]">History</p>
      <div className="mt-2 rounded-lg border border-[#4A5745]/12 bg-white px-2.5 py-2 shadow-sm">
        <label className="text-[10px] font-semibold text-[#4A5745]/70">Semantic search</label>
        <div className="mt-1 rounded-md border border-[#4A5745]/15 bg-[#f8faf9] px-2 py-1.5 text-[11px] text-[#2f3a20]">
          that article about async remote work
        </div>
      </div>
      <p className="mt-2 text-[10px] text-[#666]">Matched by meaning, not exact title</p>
      <ul className="mt-2 flex-1 space-y-2 overflow-y-auto">
        <li className="rounded-lg border border-[#7a9200]/25 bg-white px-2.5 py-2 shadow-sm">
          <div className="text-[11px] font-semibold text-[#2f3a20]">Async-first norms beat meeting-heavy remote work</div>
          <div className="mt-0.5 text-[10px] text-[#666]">Visited Tue · workfutures.example</div>
          <div className="mt-1 text-[10px] text-[#7a9200]">Why it matched: async, remote work, meetings</div>
        </li>
        <li className="rounded-lg border border-[#4A5745]/10 bg-white/80 px-2.5 py-2">
          <div className="text-[11px] font-medium text-[#4A5745]/90">Quarterly planning: fewer syncs, clearer owners</div>
          <div className="mt-0.5 text-[10px] text-[#999]">Visited Mon</div>
        </li>
      </ul>
    </div>
  );
}
