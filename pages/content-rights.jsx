import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const sections = [
  {
    title: 'Overview',
    body: 'Yes, you can upload ebooks/PDFs from sites like Project Gutenberg or the Library of Congress when they are public domain or under a license that allows redistribution on platforms like Kahana. Before a hub goes public, unlisted, or monetized, you must confirm that you have the right to share (and, if monetizing, sell access to) all content in it, and include any required attribution or license information. Kahana’s default rights interpretation is based on U.S. law.',
  },
  {
    title: 'U.S. law default',
    body: 'Kahana’s default rights interpretation is based on United States law. Public domain status and open licenses can differ by country. Confirm redistribution is allowed where you and your audience are located.',
  },
  {
    title: 'When you must confirm rights',
    body: 'Private hub drafts do not require a rights checkbox. Before a hub becomes unlisted, listed on Library, or monetized — or when uploading into a hub that already is — you must confirm you have the right to share that content.',
  },
  {
    title: 'Trusted sources',
    body: 'Examples that often publish redistributable works when clearly marked: Project Gutenberg; Library of Congress Open Access / digital collections; Internet Archive items explicitly marked public domain or openly licensed. Always read each work’s rights notice.',
  },
  {
    title: 'What not to upload',
    body: 'Do not upload copyrighted works without clear permission or a redistributable license. Finding a file online is not permission.',
  },
  {
    title: 'Report infringement',
    body: 'Rights holders can report suspected copyright issues in the Kahana app (Report → Copyright) or via Support on app.kahana.io.',
  },
];

export default function ContentRightsGuide() {
  return (
    <>
      <Head>
        <title>Content rights guide | Kahana</title>
        <meta
          name="description"
          content="Public domain, open licenses, and when creators must confirm rights to share content on Kahana."
        />
      </Head>
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <p className="text-sm text-stone-500 mb-2">
            <Link href="/community-guidelines" className="underline">
              Community guidelines
            </Link>
          </p>
          <h1 className="text-3xl font-semibold tracking-tight mb-4">Content rights guide</h1>
          <p className="text-stone-600 mb-10">
            For creators uploading and publishing hubs on Kahana. Product copy also lives in-app at{' '}
            <a
              className="underline"
              href="https://app.kahana.io/legal/content-rights"
              target="_blank"
              rel="noreferrer"
            >
              app.kahana.io/legal/content-rights
            </a>
            .
          </p>
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <p className="text-stone-700 leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-12 text-sm text-stone-500">
            Related:{' '}
            <Link href="/terms-and-conditions" className="underline">
              Terms &amp; Conditions
            </Link>
            {' · '}
            <Link href="/community-guidelines" className="underline">
              Community guidelines
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
