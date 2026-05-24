import Image from 'next/image';
import SEO from '../components/SEO';
import {
  adamKershnerProfile,
  adamKershnerSocialLinks,
} from '../data/adam-kershner-links';

function SocialIcon({ id }) {
  if (id === 'x') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }

  if (id === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }

  if (id === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    );
  }

  if (id === 'producthunt') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M13.866 18V7.99a2.37 2.37 0 1 0-4.517-1.017l-5.28 8.947H2V5h5.227v5.976a2.37 2.37 0 0 0 4.517 1.017l5.28-8.947H16V18h-2.134z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

export default function AdamKershnerLinksPage() {
  const { name, role, tagline, headshot } = adamKershnerProfile;

  return (
    <>
      <SEO
        title={name}
        description="Connect with Adam Kershner, Founder of Oasis. DMs open on X, LinkedIn, Product Hunt, Instagram, and TikTok."
        url="https://kahana.co/adam-kershner"
        type="website"
      />
      <div className="min-h-screen bg-[#F8FAF2] px-4 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-[#e8ebe0] bg-white shadow-[0_4px_24px_rgba(49,58,0,0.08)]">
          <div className="h-28 bg-[#B8D4C8]" />
          <div className="-mt-16 flex flex-col items-center px-6 pb-8 pt-0 text-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
              <Image
                src={headshot}
                alt={name}
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-[#313A00]">{name}</h1>
            <p className="mt-1 text-sm font-medium text-[#6b7355]">{role}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#4A5745]">{tagline}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {adamKershnerSocialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8ebe0] bg-white text-[#313A00] transition-colors hover:border-[#4A6200] hover:text-[#4A6200]"
                >
                  <SocialIcon id={link.id} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
