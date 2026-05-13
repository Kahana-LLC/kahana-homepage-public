import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO';
import CopyHexButton from '../components/CopyHexButton';
import PressInquiriesTally from '../components/PressInquiriesTally';
import { brandPaletteFamilies } from '../data/brand-palette';

const LOGO_ASSETS = [
  {
    title: 'Wordmark (transparent)',
    description: 'Full Kahana wordmark on transparent background. Use on light surfaces or over imagery with sufficient contrast.',
    href: '/kahana_logo_transparent.svg',
    previewSrc: '/kahana_logo_transparent.svg',
    fileLabel: 'kahana_logo_transparent.svg',
  },
  {
    title: 'Brand mark (favicon)',
    description: 'Circular Kahana mark for app icons, favicons, and compact placements.',
    href: '/favicon.svg',
    previewSrc: '/favicon.svg',
    fileLabel: 'favicon.svg',
  },
];

export default function PressKitPage() {
  return (
    <>
      <SEO
        title="Press kit"
        description="Official Kahana logos, brand colors, leadership imagery, and a press inquiries form for journalists and partners."
        url="https://kahana.co/press-kit"
        type="website"
      />

      <div className="min-h-screen bg-white">
        <section className="border-b border-oasis-green-100 bg-gradient-to-br from-oasis-green-50 via-white to-oasis-blue-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-wide text-oasis-green-600">Media</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-oasis-green-900 sm:text-5xl">Press kit</h1>
            <p className="mt-4 max-w-2xl text-lg text-oasis-green-800">
              Logos, colors, and assets for accurate coverage of Kahana. For official announcements, see our{' '}
              <Link href="/press-releases" className="font-semibold text-oasis-green-700 underline decoration-oasis-green-300 underline-offset-2 hover:text-oasis-green-900">
                press releases
              </Link>
              .
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
          <section aria-labelledby="logos-heading">
            <h2 id="logos-heading" className="text-2xl font-bold text-oasis-green-900">
              Logo assets
            </h2>
            <p className="mt-2 text-oasis-green-800">Download SVG files. Do not stretch, skew, or alter proportions.</p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {LOGO_ASSETS.map((asset) => (
                <li
                  key={asset.href}
                  className="flex flex-col overflow-hidden rounded-xl border border-oasis-green-100 bg-oasis-green-50/40 shadow-sm"
                >
                  <div className="flex flex-1 items-center justify-center bg-white px-8 py-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset.previewSrc} alt="" className="max-h-16 w-auto max-w-full object-contain" />
                  </div>
                  <div className="border-t border-oasis-green-100 p-6">
                    <h3 className="text-lg font-semibold text-oasis-green-900">{asset.title}</h3>
                    <p className="mt-2 text-sm text-oasis-green-800">{asset.description}</p>
                    <a
                      href={asset.href}
                      download={asset.fileLabel}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-oasis-green-700 hover:text-oasis-green-900"
                    >
                      Download {asset.fileLabel}
                      <span aria-hidden className="ml-1">
                        →
                      </span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="palette-heading">
            <h2 id="palette-heading" className="text-2xl font-bold text-oasis-green-900">
              Brand color palette
            </h2>
            <p className="mt-2 text-oasis-green-800">
              Representative stops from Kahana&apos;s primary palettes. Click a swatch to copy its hex value.
            </p>
            <div className="mt-10 space-y-12">
              {brandPaletteFamilies.map((family) => (
                <div key={family.id}>
                  <h3 className="text-lg font-semibold text-oasis-green-900">{family.name}</h3>
                  <p className="mt-1 text-sm text-oasis-green-700">{family.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {family.shades.map((s) => (
                      <li key={`${family.id}-${s.token}`} className="rounded-lg border border-oasis-green-100 bg-white p-3 shadow-sm">
                        <div
                          className="h-16 w-full rounded-md border border-black/5"
                          style={{ backgroundColor: s.hex }}
                          title={s.hex}
                        />
                        <p className="mt-2 text-xs font-medium text-oasis-green-900">
                          {family.name.split(' ')[0]} {s.token}
                        </p>
                        <p className="font-mono text-xs text-oasis-green-800">{s.hex}</p>
                        <CopyHexButton hex={s.hex} label="Copy" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="leadership-heading">
            <h2 id="leadership-heading" className="text-2xl font-bold text-oasis-green-900">
              Leadership
            </h2>
            <p className="mt-2 text-oasis-green-800">Approved headshot for press use.</p>
            <div className="mt-8 flex flex-col gap-8 rounded-xl border border-oasis-green-100 bg-oasis-green-50/30 p-8 sm:flex-row sm:items-start">
              <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-lg border border-oasis-green-100 bg-white shadow-sm sm:mx-0 sm:h-56 sm:w-56">
                <Image
                  src="/images/about/adam-kershner.jpg"
                  alt="Adam Kershner, CEO and Founder of Kahana"
                  width={224}
                  height={224}
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 640px) 192px, 224px"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-oasis-green-900">Adam Kershner</h3>
                <p className="mt-1 text-oasis-green-700">CEO &amp; Founder, Kahana</p>
                <p className="mt-4 text-sm text-oasis-green-800">
                  Use this photo for articles, speaker bios, and partner announcements unless we provide an alternate asset for a
                  specific event.
                </p>
                <a
                  href="/images/about/adam-kershner.jpg"
                  download="adam-kershner-kahana.jpg"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-oasis-green-700 hover:text-oasis-green-900"
                >
                  Download headshot (JPG)
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </section>

          <section aria-labelledby="releases-cta-heading" className="rounded-xl border border-oasis-blue-100 bg-oasis-blue-50/50 p-8">
            <h2 id="releases-cta-heading" className="text-xl font-bold text-oasis-green-900">
              Press releases
            </h2>
            <p className="mt-2 text-oasis-green-800">
              Official statements and announcements from Kahana (separate from our blog).
            </p>
            <Link
              href="/press-releases"
              className="btn-primary nav-button primary mt-4 inline-flex no-underline hover:no-underline"
            >
              View press releases
            </Link>
          </section>

          <section id="press-inquiries" aria-labelledby="contact-heading" className="border-t border-oasis-green-100 pt-12">
            <h2 id="contact-heading" className="text-2xl font-bold text-oasis-green-900">
              Press inquiries
            </h2>
            <p className="mt-2 text-oasis-green-800">
              For interview requests, fact-checking, and media questions, use the form below (hosted securely by{' '}
              <a href="https://tally.so" className="font-semibold text-oasis-green-700 underline underline-offset-2 hover:text-oasis-green-900" rel="noopener noreferrer" target="_blank">
                Tally
              </a>
              ).
            </p>
            <div className="mt-6">
              <PressInquiriesTally iframeTitle="Press inquiries" minHeight={640} />
            </div>
            <p className="mt-4 text-sm text-oasis-green-700">We aim to reply within one business day.</p>
          </section>
        </div>
      </div>
    </>
  );
}
