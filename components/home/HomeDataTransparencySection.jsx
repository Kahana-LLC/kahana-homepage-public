import React from "react";
import Link from "next/link";
import InteractionDataPayloadExplorer from "../InteractionDataPayloadExplorer";
import { trackButtonClick } from "../../utils/analytics";

export default function HomeDataTransparencySection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute top-[-20%] right-[-20%] h-[500px] w-[700px] rounded-full bg-[#8BA500]/12 blur-[220px] md:blur-[360px] opacity-60" />
        <div className="absolute bottom-[-25%] left-[-15%] h-[480px] w-[680px] rounded-full bg-[#FCDD9F]/18 blur-[200px] md:blur-[340px] opacity-65" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#30400D]/12 bg-white/85 p-8 shadow-[0_18px_80px_rgba(48,64,13,0.08)] backdrop-blur-sm sm:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#617500]">
            Transparent by default
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#30400D] sm:text-4xl">
            Respectful data collection that still makes Oasis better
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#30400D]/78">
            Oasis sends minimal interaction data to Kahana so we can improve the assistant—fix
            bugs, measure latency, and understand what helps. By default, personalization is{" "}
            <strong>off</strong>: payloads are anonymized with no email or account ID. You only
            share identifying fields if you opt in from Settings.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#30400D]/72 sm:text-lg">
            Unlike Chromium browsers that can gather broad behavioral signals in the background,
            Oasis is explicit about what leaves your device. We do not build ad profiles from your
            location, searches, likes, or purchases—sensitive context stays local.
          </p>

          <p className="mt-6 text-sm text-[#30400D]/70">
            Toggle to compare the JSON Kahana receives for one assistant interaction (illustrative
            example):
          </p>
          <InteractionDataPayloadExplorer
            variant="compact"
            className="mt-4 rounded-xl border border-[#30400D]/15 bg-[#FAFCF7] p-4 sm:p-6"
          />

          <div className="mt-8">
            <Link
              href="/docs/technical-and-interaction-data"
              onClick={() =>
                trackButtonClick("home_data_transparency_full_doc", "data_transparency_section")
              }
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline rounded-[27.5px]"
            >
              Read the full breakdown
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
