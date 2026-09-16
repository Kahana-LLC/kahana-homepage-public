import Link from 'next/link';
import UseWithMarquee from './UseWithMarquee';

export default function ComparePageInvite({ t, href = '/compare' }) {
  return (
    <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[#3B2F1A] sm:text-4xl">
          {t('personaCompare.title')}
        </h2>
        <p className="mt-4 text-lg text-[#5C4520]">{t('personaCompare.lead')}</p>
      </div>
      <div className="mt-10">
        <UseWithMarquee href={href} label={t('compare.kicker')} />
      </div>
      <p className="mt-10 text-center">
        <Link
          href={href}
          className="btn-secondary inline-flex items-center justify-center no-underline"
        >
          {t('personaCompare.cta')}
        </Link>
      </p>
    </section>
  );
}
