import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const APP = 'https://app.kahana.io';

function Phoenix({ size }) {
  return (
    <DotLottieReact
      src="/images/hero-phoenix.json"
      loop
      autoplay
      style={{ width: size, height: size }}
    />
  );
}

export function AssistantLauncherPreview() {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl bg-[#141414] px-5 py-6 text-[#F1F4E8]">
      <figcaption className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#C4CE9A]">
        Where it lives
      </figcaption>
      <div className="relative h-52 rounded-xl border border-[#4A4A46] bg-[#1A1A18]">
        <p className="absolute left-4 top-3 text-sm text-[#C4CE9A]">Kahana</p>
        <a
          href={APP}
          className="absolute bottom-4 right-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#4A4A46] bg-[#141414] no-underline shadow-[0_0_18px_rgba(224,122,47,0.45)]"
          aria-label="Open Kahana"
        >
          <Phoenix size={40} />
        </a>
      </div>
      <p className="mt-3 text-sm text-[#C4CE9A]">
        Bottom-right of the app. The phoenix is the chatbot.{' '}
        <a href={APP} className="font-semibold text-[#E7B15A]">Open Kahana</a>
      </p>
    </figure>
  );
}

function IconButton({ label, children }) {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center text-[#E0E6C8]"
      aria-hidden="true"
      title={label}
    >
      {children}
    </span>
  );
}

export function AssistantChatPreview() {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-[#4A4A46] bg-[#141414] p-4 text-[#F1F4E8]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-[#2D3A1F] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#E7B15A]">
            Beta
          </span>
          <IconButton label="History">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </IconButton>
        </div>
        <Phoenix size={28} />
        <div className="flex items-center">
          <IconButton label="Feedback">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M5 6h14v9H8l-3 3V6z" />
            </svg>
          </IconButton>
          <IconButton label="Support">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <circle cx="12" cy="12" r="8" />
              <path d="M9.5 9a2.5 2.5 0 1 1 3.2 2.4c-.7.3-1.2.8-1.2 1.6V14" />
              <circle cx="12" cy="17" r="0.6" fill="currentColor" />
            </svg>
          </IconButton>
        </div>
      </div>
      <div className="ml-auto max-w-[85%] rounded-xl bg-[#2A2A28] px-3 py-2 text-sm">
        Create a hub called Clear recipes.
      </div>
      <div className="mt-3 max-w-[92%] rounded-xl border border-[#6A5A32] bg-[#1F1F1E] px-3 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#C4CE9A]">Confirm</p>
        <p className="mt-1 font-semibold">Create hub</p>
        <p className="mt-1 text-sm text-[#E0E6C8]">Title: Clear recipes</p>
        <a
          href={APP}
          className="mt-3 inline-flex rounded-lg bg-[#C4A15A] px-3 py-1.5 text-sm font-semibold text-[#241C10] no-underline"
        >
          Create hub
        </a>
        <p className="mt-2 text-xs text-[#C4CE9A]">Nothing is saved until you confirm this card.</p>
      </div>
      <div className="mt-3 rounded-xl border border-[#4A4A46] px-3 py-2.5 text-sm text-[#C4CE9A]">
        Message Kahana — @ for hubs, clubs &amp; files
      </div>
    </figure>
  );
}
