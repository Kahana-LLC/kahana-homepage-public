import React, { useMemo, useState } from "react";
import {
  PAYLOAD_ANONYMIZED_DEFAULT,
  PAYLOAD_OPTED_IN,
  FIELDS_ONLY_WHEN_OPTED_IN,
} from "../data/docs/interaction-payload-examples";

export default function InteractionDataPayloadExplorer({ variant = "full", className = "" }) {
  const [optedIn, setOptedIn] = useState(false);
  const payload = optedIn ? PAYLOAD_OPTED_IN : PAYLOAD_ANONYMIZED_DEFAULT;
  const formattedJson = useMemo(() => JSON.stringify(payload, null, 2), [payload]);

  const explorerClass =
    variant === "compact"
      ? "payload-explorer payload-explorer--compact"
      : "payload-explorer";

  return (
    <div className={`${explorerClass} ${className}`.trim()}>
      <div
        className="payload-toggle flex flex-wrap gap-2"
        role="tablist"
        aria-label="Payload mode"
      >
        <button
          type="button"
          role="tab"
          aria-selected={!optedIn}
          onClick={() => setOptedIn(false)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500] ${
            !optedIn
              ? "border-[#617500] bg-[#617500] text-white"
              : "border-[#30400D]/20 bg-white text-[#30400D] hover:border-[#617500]/50"
          }`}
        >
          Default — anonymized
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={optedIn}
          onClick={() => setOptedIn(true)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500] ${
            optedIn
              ? "border-[#617500] bg-[#617500] text-white"
              : "border-[#30400D]/20 bg-white text-[#30400D] hover:border-[#617500]/50"
          }`}
        >
          Personalization opted in
        </button>
      </div>

      <p className="mt-4 text-sm font-medium text-[#617500]">
        {optedIn
          ? "Includes user-identifying fields (email, user_id)."
          : "No user block — session is anonymous at the account level."}
      </p>

      <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)]">
        <pre
          className={`payload-json m-0 min-w-0 overflow-x-hidden overflow-y-auto rounded-lg border border-[#30400D]/12 bg-[#1e2410] p-4 text-xs leading-relaxed text-[#e8f0dc] sm:text-sm ${
            variant === "compact" ? "max-h-80" : "max-h-[28rem]"
          }`}
        >
          <code className="payload-json-code block whitespace-pre-wrap break-words">
            {formattedJson}
          </code>
        </pre>

        <div className="min-w-0 rounded-lg border border-[#30400D]/12 bg-white p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#617500]">
            {optedIn ? "User fields included" : "Only when opted in"}
          </p>
          {optedIn ? (
            <ul className="payload-field-list m-0 list-none space-y-1.5 p-0 text-sm text-[#30400D]/90">
              {FIELDS_ONLY_WHEN_OPTED_IN.map((field) => (
                <li key={field} className="min-w-0">
                  <code className="block w-full max-w-full break-all rounded bg-[#F2F4E5] px-1.5 py-1 text-xs leading-snug">
                    {field}
                  </code>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="payload-field-list m-0 list-none space-y-1.5 p-0 text-sm text-[#30400D]/70">
              {FIELDS_ONLY_WHEN_OPTED_IN.map((field) => (
                <li key={field} className="min-w-0 line-through opacity-60">
                  <code className="block w-full max-w-full break-all rounded bg-[#F2F4E5] px-1.5 py-1 text-xs leading-snug">
                    {field}
                  </code>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
