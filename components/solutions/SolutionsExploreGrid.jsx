import Link from 'next/link';

/** Shared landscape-style gradient; each tile shows a segment via background-size/position. */
const LANDSCAPE_GRADIENT =
  'linear-gradient(168deg, #8B9DAD 0%, #9CA8B2 14%, #C9A776 42%, #5A6B52 68%, #3D4F3C 88%, #2C382C 100%)';

export const SOLUTION_EXPLORE_TILES = [
  { href: '/solutions/remote-workforce', label: 'Remote & BYOD workforce' },
  { href: '/solutions/merger-integration', label: 'M&A onboarding' },
  { href: '/solutions/external-workforce', label: 'Third-party onboarding' },
  { href: '/solutions/vdi-reduction', label: 'VDI reduction' },
  { href: '/solutions/saas-and-web-apps', label: 'SaaS & web apps' },
  { href: '/solutions/privileged-user-management', label: 'Privileged user access' },
  { href: '/solutions/zero-trust-security', label: 'Zero trust' },
  { href: '/solutions/secure-browsing', label: 'Secure browsing' },
  { href: '/solutions/workplace-enablement', label: 'Workplace enablement' },
];

function normalizeHref(href) {
  if (!href) return '';
  const h = href.split('?')[0];
  return h.endsWith('/') ? h.slice(0, -1) : h;
}

export default function SolutionsExploreGrid({
  currentHref,
  heading = 'Why enterprises adopt Oasis',
  intro = 'Oasis meets teams where work happens: browser-first SaaS, external collaborators, and governance in the session. Explore how each use case fits your program.',
}) {
  const current = normalizeHref(currentHref);

  return (
    <section className="bg-[#f8faf9] py-16 md:py-20 border-y border-[#4A5745]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-3 tracking-tight">{heading}</h2>
        <p className="text-[#4A5745]/90 text-center max-w-2xl mx-auto mb-10 leading-relaxed text-sm sm:text-base">
          {intro}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SOLUTION_EXPLORE_TILES.map((tile, index) => {
            const isActive = current === normalizeHref(tile.href);
            const bgPos = `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`;

            const inner = (
              <>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: LANDSCAPE_GRADIENT,
                    backgroundSize: '300% 300%',
                    backgroundPosition: bgPos,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/28 to-black/18 transition-colors group-hover:from-black/40 group-hover:via-black/22" />
                <span className="relative z-10 flex min-h-[120px] sm:min-h-[132px] items-center justify-center px-4 text-center text-base sm:text-lg font-bold text-white leading-snug tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {tile.label}
                </span>
              </>
            );

            const shell =
              'group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-white/30 shadow-md outline-none transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#66C2BE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8faf9]';

            if (isActive) {
              return (
                <div
                  key={tile.href}
                  className={`${shell} cursor-default ring-2 ring-[#66C2BE] ring-offset-2 ring-offset-[#f8faf9]`}
                  aria-current="page"
                  title="Current page"
                >
                  {inner}
                </div>
              );
            }

            return (
              <Link
                key={tile.href}
                href={tile.href}
                className={`${shell} no-underline hover:no-underline focus:no-underline`}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
