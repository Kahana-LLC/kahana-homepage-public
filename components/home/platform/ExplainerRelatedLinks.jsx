import Link from 'next/link';
import FadeInSection from '../../FadeInSection';

export default function ExplainerRelatedLinks({ title = 'Features and docs', lead, items }) {
  return (
    <section className="px-6 pb-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <FadeInSection>
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          {lead ? (
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#666666]">{lead}</p>
          ) : null}
        </FadeInSection>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-full flex-col rounded-[20px] bg-white px-5 py-5 no-underline transition hover:bg-[#D9DACB]"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-[#8A6622] uppercase">
                  {item.kind}
                </span>
                <span className="mt-2 text-base font-semibold text-[#3B2F1A]">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
