import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import guide from '../content/oasis-guide.json';

// Placeholder logo import — replace with your asset and path
// import KahanaLogo from '../public/assets/logo.png';

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0] || 'overview');
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
    }, { rootMargin: '0px 0px -70% 0px', threshold: 0.1 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function Header({ anchors }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useState(0)[0];
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const delta = y - last;
      const threshold = 8;
      if (y <= 0) setHidden(false);
      else if (delta > threshold) setHidden(true);
      else if (delta < -threshold) setHidden(false);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur transition-transform duration-200 ease-in-out supports-[backdrop-filter]:bg-white/70 dark:bg-[#0f1b30]/80 dark:border-slate-800 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          {/* Swap logo here */}
          <div className="h-7 w-7 rounded-md bg-brand-primary" />
          <span className="font-bold text-brand-primary">Kahana</span>
        </Link>
        <nav className="hidden gap-4 lg:flex" aria-label="Primary">
          {anchors.map(a => (
            <a key={a.href} href={a.href} className="text-sm text-brand-primary hover:text-brand-accent hover:underline underline-offset-4 focus-visible:outline-brand-accent">
              {a.label}
            </a>
          ))}
        </nav>
        <button aria-label="Toggle Menu" onClick={() => setOpen(v => !v)} className="inline-flex flex-col gap-1 lg:hidden">
          <span className="h-0.5 w-6 bg-brand-primary" />
          <span className="h-0.5 w-6 bg-brand-primary" />
          <span className="h-0.5 w-6 bg-brand-primary" />
        </button>
      </div>
      {open && (
        <div className="border-t border-gray-200 bg-white dark:bg-[#0f1b30] lg:hidden">
          <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-2 px-4 py-2">
            {anchors.map(a => (
              <a key={a.href} href={a.href} className="rounded px-2 py-2 text-brand-primary hover:bg-brand-page">
                {a.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function CollapsibleTopHeader({ title, subtitle }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-20 border-b border-[#0d2a52] bg-brand-primary text-white">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <button aria-label={open ? 'Collapse details' : 'Expand details'} onClick={() => setOpen(v => !v)} className="rounded border border-white/30 px-2 py-0.5">{open ? '−' : '+'}</button>
          <h1 className="text-base font-bold">{title}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/schedule-demo" className="rounded-md bg-white px-3 py-1.5 font-semibold text-brand-primary">Schedule a Demo</Link>
          <Link href="/oasis-waitlist" className="rounded-md bg-brand-accent px-3 py-1.5 font-semibold text-[#083b3b]">Join the Waitlist</Link>
        </div>
      </div>
      <div className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-200 ease-in-out ${open ? 'max-h-40' : 'max-h-0'}`}>
        <div className={`mx-auto max-w-[1100px] px-4 ${open ? 'py-2' : 'py-0'}`}>
          <p className="text-white/90">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function TOC({ anchors, active }) {
  return (
    <aside className="sticky top-[76px] hidden self-start lg:block" aria-label="Table of contents">
      <nav className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:bg-[#0f1b30]">
        <div className="mb-2 font-semibold">Contents</div>
        {anchors.map(a => (
          <a key={a.href} href={a.href} className={`block rounded px-2 py-1 text-sm ${active === a.href.slice(1) ? 'text-brand-accent' : 'text-brand-muted'} hover:underline underline-offset-4`}>
            {a.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function MobileTOC({ anchors }) {
  return (
    <div className="lg:hidden">
      <label htmlFor="toc-select" className="sr-only">Navigate sections</label>
      <select id="toc-select" className="w-full rounded-md border border-gray-200 bg-white p-2" onChange={(e) => { if (e.target.value) document.querySelector(e.target.value)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
        <option value="">Jump to…</option>
        {anchors.map(a => <option key={a.href} value={a.href}>{a.label}</option>)}
      </select>
    </div>
  );
}

function Section({ id, title, children, right }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-8">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-4 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 id={`${id}-title`} className="mb-2 text-2xl font-semibold text-brand-primary">{title}</h2>
          <div className="prose prose-slate max-w-none dark:prose-invert">{children}</div>
        </div>
        {right && (
          <aside className="rounded-lg border-2 border-brand-accent bg-white p-4 shadow-sm dark:bg-[#0f1b30]">
            <h4 className="mb-1 font-semibold text-brand-primary">Key Points</h4>
            <div className="text-sm text-brand-muted">{right}</div>
          </aside>
        )}
      </div>
    </section>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  const id = useMemo(() => `acc-${Math.random().toString(36).slice(2)}`, []);
  return (
    <div className="border-t border-gray-200 py-2">
      <button className="w-full text-left font-semibold text-brand-primary" aria-expanded={open} aria-controls={id} onClick={() => setOpen(v => !v)}>{title}</button>
      {open && <div id={id} className="mt-2 text-brand-muted">{children}</div>}
    </div>
  );
}

function TableCompare({ columns, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-brand-page">
          <tr>
            {columns.map(c => <th key={c} className="px-3 py-2 text-left text-sm font-semibold text-brand-primary">{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
              {r.map((cell, j) => <td key={j} className="px-3 py-2 text-sm text-brand-muted">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        @media (max-width: 640px) {
          table { display: block; }
          thead { display: none; }
          tbody, tr, td { display: block; width: 100%; }
          tr { margin-bottom: 12px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; background: #fff; }
          td { border-bottom: 1px solid #eef2f7; }
          td:last-child { border-bottom: none; }
        }
      `}</style>
    </div>
  );
}

function Quote({ text, name, role, org }) {
  const initials = useMemo(() => name.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase(), [name]);
  return (
    <blockquote className="border-l-4 border-brand-accent pl-4">
      <p className="text-lg font-medium text-brand-primary">{text}</p>
      <div className="mt-2 flex items-center gap-2 text-sm text-brand-muted">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent font-extrabold text-[#083b3b]">{initials}</div>
        <span>{name} • {role} @ {org}</span>
      </div>
    </blockquote>
  );
}

function Callout({ children }) {
  return <div className="rounded-lg border-2 border-brand-accent bg-white p-4 text-brand-muted shadow-sm dark:bg-[#0f1b30]">{children}</div>;
}

function Markdown({ content }) {
  // Minimal markdown rendering for lists/headers/code blocks
  if (!content) return null;
  const html = content
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/\n\n/g, '<br/>');
  return <div className="prose prose-slate max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function OasisBuyerGuidePage() {
  const anchors = useMemo(() => guide.sections.map(s => ({ href: `#${s.slug}`, label: s.title })), []);
  const ids = anchors.map(a => a.href.slice(1));
  const active = useScrollSpy(ids);

  const title = guide.hero?.title || 'Oasis Buyer Guide';
  const description = guide.hero?.description || guide.hero?.subtitle || 'Oasis Buyer Guide';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={guide.hero?.image || '/public/og-placeholder.jpg'} />
        <meta property="og:url" content="/oasis-buyer-guide" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            datePublished: '2025-01-01',
            author: { '@type': 'Organization', name: 'Kahana' },
            publisher: { '@type': 'Organization', name: 'Kahana' },
            about: ['Enterprise Browser', 'Zero Trust', 'DLP', 'SSO'],
            url: '/oasis-buyer-guide'
          }) }}
        />
      </Head>
      <div className="min-h-screen bg-brand-page text-brand-primary">
        <Header anchors={anchors} />
        <CollapsibleTopHeader title={guide.hero?.title} subtitle={guide.hero?.subtitle} />

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-4 py-6 lg:grid-cols-[260px_1fr]">
          <TOC anchors={anchors} active={active} />
          <div>
            <MobileTOC anchors={anchors} />
            {guide.sections.map((s) => (
              <Section key={s.slug} id={s.slug} title={s.title}>
                {s.markdown ? <Markdown content={s.markdown} /> : <div dangerouslySetInnerHTML={{ __html: s.html }} />}
                {s.table && (
                  <div className="mt-4">
                    <TableCompare columns={s.table.columns} rows={s.table.rows} />
                  </div>
                )}
              </Section>
            ))}

            <section aria-labelledby="final-cta-title" className="scroll-mt-24 py-10">
              <div className="mx-auto max-w-[1100px] rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent px-6 py-8 text-white">
                <h2 id="final-cta-title" className="mb-2 text-2xl font-bold">Ready to evaluate Oasis?</h2>
                <p className="mb-4 text-white/90">Schedule a demo or join the waitlist to see Oasis in action.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/schedule-demo" className="rounded-md bg-white px-4 py-2 font-semibold text-brand-primary">Schedule a Demo</Link>
                  <Link href="/oasis-waitlist" className="rounded-md bg-[#083b3b] px-4 py-2 font-semibold text-white">Join the Waitlist</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}


