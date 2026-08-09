import React, { useMemo } from "react";
import {
  TRAINING_PAYLOAD_ANONYMOUS,
  TRAINING_PAYLOAD_FIELD_REFERENCE,
  TRAINING_PAYLOAD_WORKFLOW_COMMENT,
} from "../../data/docs/training-payload-examples";

const NOTES_MARKER = "<h2>Notes and limits</h2>";

function splitTrainingContent(html) {
  if (!html || !html.includes(NOTES_MARKER)) {
    return { mainHtml: html, notesAndRelatedHtml: "" };
  }
  const index = html.indexOf(NOTES_MARKER);
  return {
    mainHtml: html.slice(0, index),
    notesAndRelatedHtml: html.slice(index),
  };
}

export default function TrainingDoc({ doc }) {
  const { mainHtml, notesAndRelatedHtml } = useMemo(
    () => splitTrainingContent(doc?.content),
    [doc?.content]
  );

  const formattedRecipeJson = useMemo(
    () => JSON.stringify(TRAINING_PAYLOAD_ANONYMOUS, null, 2),
    []
  );

  const formattedWorkflowJson = useMemo(
    () => JSON.stringify(TRAINING_PAYLOAD_WORKFLOW_COMMENT, null, 2),
    []
  );

  return (
    <div className="doc-content training-doc max-w-none">
      <div
        className="prose prose-lg max-w-none no-underline"
        dangerouslySetInnerHTML={{ __html: mainHtml }}
        suppressHydrationWarning
      />

      <aside className="my-8 scroll-mt-24 rounded-r-lg border-l-4 border-[#8BA500] bg-[#F3F8E4] p-6 not-prose">
        <strong className="mb-2 block text-[#30400D]">At a glance</strong>
        <p className="m-0 text-[#30400D]/85 leading-relaxed">
          <strong>Anonymous training still uploads feedback to Aura Library</strong> when you submit—the
          difference is that your <strong>user ID is not attached to that training record</strong>.
          This is not on-device-only model training. Details:{" "}
          <a
            href="#does-data-leave-device"
            className="font-semibold text-[#4A6200] no-underline hover:underline"
          >
            Does data leave the device?
          </a>
        </p>
      </aside>

      <section id="example-payload" className="my-12 scroll-mt-24 not-prose">
        <h2 className="text-2xl font-bold text-oasis-green-800">
          Example training payloads (JSON)
        </h2>
        <p className="mt-4 text-[#30400D]/85 leading-relaxed">
          Real-shaped submission objects sent to Aura Library when you submit training—not stored only
          on your device. Fields include <code className="rounded bg-[#F2F4E5] px-1 text-sm">category</code>,{" "}
          <code className="rounded bg-[#F2F4E5] px-1 text-sm">badges</code>, required{" "}
          <code className="rounded bg-[#F2F4E5] px-1 text-sm">comment</code>, and{" "}
          <code className="rounded bg-[#F2F4E5] px-1 text-sm">training_mode</code> (anonymous vs
          personalized).
        </p>

        <aside className="my-6 rounded-r-lg border-l-4 border-[#8BA500] bg-[#F3F8E4] p-6">
          <strong className="mb-2 block text-[#30400D]">How this maps to the UI</strong>
          <ul className="m-0 list-disc space-y-1.5 pl-5 text-[#30400D]/85">
            <li>
              Thumbs up/down → <code className="rounded bg-white/80 px-1 text-sm">sentiment</code>
            </li>
            <li>
              Category picker → <code className="rounded bg-white/80 px-1 text-sm">category</code>
            </li>
            <li>
              Badge chips → <code className="rounded bg-white/80 px-1 text-sm">badges</code>
            </li>
            <li>
              Feedback text area → <code className="rounded bg-white/80 px-1 text-sm">comment</code>
            </li>
            <li>
              Personalized / Anonymous toggle →{" "}
              <code className="rounded bg-white/80 px-1 text-sm">training_mode</code>
            </li>
          </ul>
        </aside>

        <h3 className="mt-8 text-lg font-bold text-oasis-green-800">
          Example 1 — answer quality (anonymous)
        </h3>
        <p className="mt-2 text-sm text-[#30400D]/85">
          Helpful + Fast describe this reply. The comment states the reason in plain language.{" "}
          <code className="rounded bg-[#F2F4E5] px-1 text-sm">training_mode: &quot;anonymous&quot;</code>{" "}
          means no user ID on the training record—the payload is still uploaded on Submit.
        </p>
        <div className="payload-explorer mt-4">
          <pre className="payload-json m-0 max-h-[28rem] min-w-0 overflow-x-hidden overflow-y-auto rounded-lg border border-[#30400D]/12 bg-[#1e2410] p-4 text-xs leading-relaxed text-[#e8f0dc] sm:text-sm">
            <code className="payload-json-code block whitespace-pre-wrap break-words">
              {formattedRecipeJson}
            </code>
          </pre>
        </div>

        <h3 className="mt-10 text-lg font-bold text-oasis-green-800">
          Example 2 — behavior preference (personalized, illustrative)
        </h3>
        <p className="mt-2 text-sm text-[#30400D]/85">
          Same JSON shape. <code className="rounded bg-[#F2F4E5] px-1 text-sm">category</code> and
          a longer <code className="rounded bg-[#F2F4E5] px-1 text-sm">comment</code> carry source,
          format, and research-mode intent that badges alone do not capture.
        </p>
        <div className="payload-explorer mt-4">
          <pre className="payload-json m-0 max-h-[28rem] min-w-0 overflow-x-hidden overflow-y-auto rounded-lg border border-[#30400D]/12 bg-[#1e2410] p-4 text-xs leading-relaxed text-[#e8f0dc] sm:text-sm">
            <code className="payload-json-code block whitespace-pre-wrap break-words">
              {formattedWorkflowJson}
            </code>
          </pre>
        </div>

        <p className="mt-3 text-sm text-[#30400D]/70">
          <code className="rounded bg-[#F2F4E5] px-1">assistant_reply</code> values are truncated
          for readability; production stores the full reply text.
        </p>

        <p className="mt-4 text-sm text-[#30400D]/85">
          A dedicated <code className="rounded bg-[#F2F4E5] px-1 text-sm">preference_type</code>{" "}
          field is not in the payload yet—use{" "}
          <a href="#preference-type" className="font-semibold text-[#4A6200] no-underline hover:underline">
            Preference type and scope
          </a>{" "}
          for how to encode that in comments today. See{" "}
          <a href="#train-anonymously" className="font-semibold text-[#4A6200] no-underline hover:underline">
            Train anonymously
          </a>{" "}
          for persistence and account linkage, and{" "}
          <a
            href="#does-data-leave-device"
            className="font-semibold text-[#4A6200] no-underline hover:underline"
          >
            Does data leave the device?
          </a>{" "}
          for what is sent vs kept local.
        </p>

        <h3 className="mt-10 text-xl font-bold text-oasis-green-800">Field reference</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#30400D]/12">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#30400D]/12 bg-[#F3F8E4]">
                <th className="px-4 py-3 font-semibold text-[#30400D]">Field</th>
                <th className="px-4 py-3 font-semibold text-[#30400D]">Description</th>
                <th className="px-4 py-3 font-semibold text-[#30400D]">Sent when</th>
              </tr>
            </thead>
            <tbody>
              {TRAINING_PAYLOAD_FIELD_REFERENCE.map((row) => (
                <tr key={row.path} className="border-b border-[#30400D]/8 last:border-0">
                  <td className="px-4 py-2.5 font-mono text-xs text-[#30400D]">{row.path}</td>
                  <td className="px-4 py-2.5 text-[#30400D]/85">{row.description}</td>
                  <td className="px-4 py-2.5 text-[#30400D]/85">{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {notesAndRelatedHtml ? (
        <div
          className="prose prose-lg max-w-none no-underline"
          dangerouslySetInnerHTML={{ __html: notesAndRelatedHtml }}
          suppressHydrationWarning
        />
      ) : null}
    </div>
  );
}
