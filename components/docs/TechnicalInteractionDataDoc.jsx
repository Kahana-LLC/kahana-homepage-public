import React from "react";
import { FIELD_REFERENCE } from "../../data/docs/interaction-payload-examples";
import InteractionDataPayloadExplorer from "../InteractionDataPayloadExplorer";

export default function TechnicalInteractionDataDoc() {

  return (
    <div className="doc-content technical-interaction-data-doc max-w-none px-0 py-0">
      <p className="text-lg text-[#3B2F1A]/85 leading-relaxed">
        Oasis sends minimal interaction data to Kahana so we can improve the product—fix bugs,
        measure latency, and understand which features help. By default, personalization is{" "}
        <strong>off</strong>: payloads are anonymized and do not include your account email or user
        ID. You can opt in from Settings if you want a more personalized experience.
      </p>

      <aside className="my-8 rounded-r-lg border-l-4 border-[#8BA500] bg-[#EDE6D2] p-6">
        <strong className="mb-2 block text-[#3B2F1A]">What sets Oasis apart</strong>
        <p className="m-0 text-[#3B2F1A]/85 leading-relaxed">
          Compared to Chromium-based browsers like Chrome—which can quietly gather broad behavioral
          signals in the background—Oasis collects only what we describe here, and we are explicit
          about it. Oasis does not build ad profiles from your location, searches, likes, purchases,
          or interests. Sensitive context is designed to stay on your device; this page shows
          exactly what leaves the browser when you use the assistant.
        </p>
      </aside>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">How the setting works</h2>
        <p className="text-[#3B2F1A]/85 leading-relaxed">
          In Oasis, open <strong>Settings → Privacy</strong> (
          <code className="rounded bg-[#EDE6D2] px-1.5 py-0.5 text-sm">about:preferences#privacy</code>
          ). The personalization / data collection checkbox controls whether Kahana receives
          identifying user fields. It maps to{" "}
          <code className="rounded bg-[#EDE6D2] px-1.5 py-0.5 text-sm">
            opt_in_data_collection_use
          </code>{" "}
          in the payload.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[#3B2F1A]/85">
          <li>
            <strong>Default (unchecked):</strong> anonymized payload—no <code>user</code> object, no
            email or account ID.
          </li>
          <li>
            <strong>Opted in (checked):</strong> includes <code>user</code> with email, user_id,
            locale, and <code>opt_in_data_collection_use: true</code>.
          </li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">
          Interactive payload explorer
        </h2>
        <p className="text-[#3B2F1A]/85 leading-relaxed">
          Toggle below to see the JSON Kahana receives for a single assistant interaction. This is
          a real-shaped example; field values are illustrative.
        </p>

        <InteractionDataPayloadExplorer
          variant="full"
          className="mt-6 rounded-xl border border-[#3B2F1A]/15 bg-[#F7F3EA] p-4 sm:p-6"
        />
        <p className="mt-6 text-[#3B2F1A]/85 leading-relaxed">
          <strong>Training feedback</strong> is separate from these default interaction telemetry
          payloads. When you submit training on a reply, you send a structured training object
          (thumbs, badges, comment, and related fields).{" "}
          <strong>Anonymous training</strong> still uploads on Submit; it does not attach your user
          ID to that training record. See{" "}
          <a
            href="/help/training#does-data-leave-device"
            className="font-semibold text-[#8A6622] no-underline hover:underline"
          >
            Training — does data leave the device?
          </a>
          .
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">Field reference</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#3B2F1A]/12">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#3B2F1A]/12 bg-[#EDE6D2]">
                <th className="px-4 py-3 font-semibold text-[#3B2F1A]">Field</th>
                <th className="px-4 py-3 font-semibold text-[#3B2F1A]">Description</th>
                <th className="px-4 py-3 font-semibold text-[#3B2F1A]">Sent when</th>
              </tr>
            </thead>
            <tbody>
              {FIELD_REFERENCE.map((row) => (
                <tr key={row.path} className="border-b border-[#3B2F1A]/8 last:border-0">
                  <td className="px-4 py-2.5 font-mono text-xs text-[#3B2F1A]">{row.path}</td>
                  <td className="px-4 py-2.5 text-[#3B2F1A]/85">{row.description}</td>
                  <td className="px-4 py-2.5 text-[#3B2F1A]/85">{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">What Oasis does not collect</h2>
        <ul className="list-disc space-y-2 pl-5 text-[#3B2F1A]/85">
          <li>Location history or precise geo tracking for advertising</li>
          <li>Search or browsing history sold to data brokers</li>
          <li>Social likes, purchase graphs, or interest profiles for third-party ads</li>
          <li>
            Your saved-password vault, imported logins, or autofill store (these stay in your local
            profile; see{" "}
            <a
              href="/help/import-from-other-browsers#imported-passwords"
              className="font-semibold text-[#8A6622] no-underline hover:underline"
            >
              imported passwords
            </a>
            )
          </li>
          <li>Bookmark and history databases as bulk exports in assistant telemetry</li>
          <li>On-device semantic embedding indexes (local pipeline when enabled)</li>
        </ul>
        <p className="mt-4 text-[#3B2F1A]/85 leading-relaxed">
          Productivity and AI features are built so sensitive information can remain local; the
          payloads above are limited to what is needed to run and improve the assistant experience.
          Anything you type into the composer—including a password you paste—may be processed like
          any other prompt.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">How Kahana uses this data</h2>
        <ul className="list-disc space-y-2 pl-5 text-[#3B2F1A]/85">
          <li>Improve assistant quality, latency, and reliability</li>
          <li>Debug issues and prioritize fixes</li>
          <li>Understand feature usage in aggregate—not to sell your data</li>
        </ul>
        <p className="mt-4 text-[#3B2F1A]/85 leading-relaxed">
          If you turn personalization off, new interactions use the anonymized shape (no{" "}
          <code>user</code> block). Contact us via the support links below if you have questions
          about retention or deletion.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">Change the setting</h2>
        <ol className="list-decimal space-y-2 pl-5 text-[#3B2F1A]/85">
          <li>Open Oasis and go to the menu, then <strong>Settings</strong></li>
          <li>Select <strong>Privacy &amp; Security</strong></li>
          <li>Find the personalization / interaction data collection option</li>
          <li>
            Check to opt in (identifying fields included) or uncheck for default anonymized payloads
          </li>
        </ol>
      </section>
    </div>
  );
}
