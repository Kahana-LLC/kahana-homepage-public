import React from 'react';
import Link from 'next/link';
import AssistantThemesGallery from '../products/oasis/AssistantThemesGallery';

export default function AssistantThemesDoc({ gallery = [] }) {
  return (
    <div className="doc-content assistant-themes-doc max-w-none px-0 py-0">
      <p className="text-lg text-[#30400D]/85 leading-relaxed">
        Multiple <strong>light</strong> and <strong>dark</strong> themes for the assistant chrome (not only
        system theme); choice syncs via prefs / bridge.
      </p>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">What this is</h2>
        <p className="text-[#30400D]/85 leading-relaxed">
          Pick among several <strong>light</strong> and <strong>dark</strong> themes for assistant chrome. Your
          choice is stored and reapplied via the assistant bridge so the panel matches your taste—not only macOS
          light/dark.
        </p>
        <p className="text-[#30400D]/85 leading-relaxed">
          Scroll through assistant chrome themes in the gallery below.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800 mb-6">Theme gallery</h2>
        <AssistantThemesGallery items={gallery} className="mt-2" />
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">How to use it</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[#30400D]/85">
          <li>
            Open the <strong>theme</strong> picker from the assistant header menu.
          </li>
          <li>Preview schemes; pick one per appearance mode if offered.</li>
          <li>Themes do not change web page content colors—only the assistant UI chrome.</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">Notes and limits</h2>
        <p className="text-[#30400D]/85 leading-relaxed">
          Some high-contrast OS settings may still influence base colors.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold text-oasis-green-800">Related topics</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[#30400D]/85">
          <li>
            <Link href="/help/header-help-menu" className="text-brand-link no-underline hover:underline">
              Header Help Menu
            </Link>
          </li>
          <li>
            <Link href="/help/reduced-motion" className="text-brand-link no-underline hover:underline">
              Reduced Motion
            </Link>
          </li>
          <li>
            <Link href="/help/docked-sidebar-vs-floating-overlay" className="text-brand-link no-underline hover:underline">
              Docked Sidebar Vs Floating Overlay
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
