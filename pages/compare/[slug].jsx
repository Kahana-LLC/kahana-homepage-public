import Link from 'next/link';
import SEO from '../../components/SEO';
import FadeInSection from '../../components/FadeInSection';
import FaqAccordion from '../../components/faq/FaqAccordion';
import TandemLibraryCard from '../../components/compare/TandemLibraryCard';
import StanStoreLinkRow from '../../components/compare/StanStoreLinkRow';
import KajabiSiteBlock from '../../components/compare/KajabiSiteBlock';
import SkoolCourseRow from '../../components/compare/SkoolCourseRow';
import EveningLibraryPick from '../../components/compare/EveningLibraryPick';
import AdultSectionGate from '../../components/compare/AdultSectionGate';
import { ABOUT_ORIGIN } from '../../config/site';
import { productHref } from '../../lib/productLinks';
import {
  COMPARE_PLATFORMS,
  categoryLabel,
  comparisonKind,
  getComparePlatform,
  isPaidCreatorPeer,
} from '../../data/platform-compare';

export async function getStaticPaths() {
  return {
    paths: COMPARE_PLATFORMS.map((platform) => ({ params: { slug: platform.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const platform = getComparePlatform(params.slug);
  if (!platform) return { notFound: true };
  return { props: { slug: platform.id } };
}

function buildFaqs(platform) {
  const kind = comparisonKind(platform);
  const paid = isPaidCreatorPeer(platform.id);
  if (kind === 'evening') {
    return [
      {
        id: 'shows',
        question: `Does Kahana have the shows on ${platform.name}?`,
        answer: `No. Kahana does not carry that catalog. ${platform.withKahana}`,
      },
      {
        id: 'free',
        question: 'Is the Kahana Library free and ad-free?',
        answer:
          'Yes. You can open books, creator videos, and uploaded files without a streaming subscription and without ads. Some hubs are priced by their creators.',
      },
      {
        id: 'keep',
        question: `Can I keep ${platform.name}?`,
        answer: `Yes. Kahana sits beside the subscription. You do not have to cancel ${platform.name} to use the Library.`,
      },
    ];
  }
  if (kind === 'adult') {
    return [
      {
        id: 'upload',
        question: `Can I upload and charge on Kahana the way people do on ${platform.name}?`,
        answer: `Yes. A hub can be free or paid. ${platform.withKahana}`,
      },
      {
        id: 'adult',
        question: 'Can I mark a hub as adult?',
        answer:
          'Yes. Kahana is a general library with an adult section. The creator marks the hub adult. It stays out of the default Library and is not indexed like other listed hubs.',
      },
      {
        id: 'gate',
        question: 'How does the 18+ gate work?',
        answer:
          'Opening an adult hub requires sign-in, a date of birth that shows 18 or older, and acceptance of the adult-content terms.',
      },
    ];
  }
  return [
    {
      id: 'together',
      question: `Can I use Kahana and ${platform.name} together?`,
      answer: `Yes. Keep ${platform.name}. ${platform.withKahana}`,
    },
    {
      id: 'leave',
      question: `Do I have to leave ${platform.name}?`,
      answer: `No. Kahana sits next to ${platform.name}. The Free plan is a place to host work you already have and list it in the Library. The extra step is uploading that work.`,
    },
    {
      id: 'free',
      question: paid
        ? `Is Kahana a free alternative to ${platform.name}?`
        : `What does Kahana add next to ${platform.name}?`,
      answer: paid
        ? `${platform.name} is a paid creator business tool. Kahana's Free plan can host a hub, list it on Library, and turn on paid access later if you want. People already on ${platform.name} can still link that hub from their existing site or store, including the same course or pack, so Library search can find it too.`
        : `${platform.blurb} Kahana is the library around that: a hub people can open, list, and find. You do not replace ${platform.name} to do it.`,
    },
  ];
}

function openingCopy(platform) {
  const kind = comparisonKind(platform);
  if (kind === 'evening') {
    return `Kahana does not carry ${platform.name} shows. The Library is a free, ad-free place for books, creator videos, and uploaded files. You can keep ${platform.name}.`;
  }
  if (kind === 'adult') {
    return `Kahana is a general library where you can upload work and charge for access. Adult hubs are a gated section, not the whole product. You can keep ${platform.name}.`;
  }
  return `Keep ${platform.name}. Kahana is a free place to host work you already have and list it in the Library. The extra cost is the time to upload.`;
}

function PlatformVisual({ platform }) {
  if (platform.id === 'stan') return <StanStoreLinkRow />;
  if (platform.id === 'kajabi') return <KajabiSiteBlock />;
  if (platform.id === 'skool') return <SkoolCourseRow />;
  if (comparisonKind(platform) === 'evening') {
    return <EveningLibraryPick platformName={platform.name} />;
  }
  if (comparisonKind(platform) === 'adult') {
    return <AdultSectionGate platformName={platform.name} />;
  }
  return <TandemLibraryCard platformName={platform.name} />;
}

export default function ComparePlatformPage({ slug }) {
  const platform = getComparePlatform(slug);
  if (!platform) return null;

  const faqs = buildFaqs(platform);
  const canonical = `${ABOUT_ORIGIN}/compare/${platform.id}`;
  const title = `Kahana vs ${platform.name}`;
  const description = openingCopy(platform);
  const createUrl = productHref('/', `compare_${platform.id}_create`);

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={canonical}
        type="website"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <FadeInSection eager>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
                {categoryLabel(platform.category)}
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                {openingCopy(platform)}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={createUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center no-underline"
                >
                  List a hub
                </a>
                <Link href="/compare" className="btn-secondary inline-flex items-center justify-center no-underline">
                  All platforms
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="px-6 pb-16 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-start">
            <FadeInSection>
              <h2 className="text-2xl font-semibold">
                {comparisonKind(platform) === 'evening' ? 'Instead of another subscription' : 'Use both'}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">{platform.blurb}</p>
              <p className="mt-4 text-lg leading-relaxed text-[#5C4520]">{platform.withKahana}</p>
              <p className="mt-4 text-base leading-relaxed text-[#5C4520]">
                {comparisonKind(platform) === 'evening'
                  ? 'A streaming subscription is a catalog of shows. Kahana is a library of hubs. Both can stay.'
                  : comparisonKind(platform) === 'adult'
                    ? 'Mark a hub adult only when the work is adult. General hubs stay in the normal Library.'
                    : isPaidCreatorPeer(platform.id)
                      ? `${platform.name} covers a lot of the same creator-business jobs, and it is a paid product. Kahana's Free plan is the accessible way to host and get listed. If you already pay for ${platform.name}, link the Kahana hub from that site so the same course or pack can be found in the Library too.`
                      : `People who already use ${platform.name} can link a Kahana hub from there. Listing does not require leaving ${platform.name}.`}
              </p>
            </FadeInSection>
            <PlatformVisual platform={platform} />
          </div>
        </section>

        <section className="border-t border-[#E4D9C4] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold">Questions</h2>
            <FaqAccordion className="mt-8" items={faqs} />
            <p className="mt-8 text-base text-[#5C4520]">
              <a
                href={platform.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#8A6622] underline underline-offset-2"
              >
                {platform.name} site
              </a>
              {' · '}
              <Link href="/pricing" className="font-medium text-[#8A6622] underline underline-offset-2">
                Kahana pricing
              </Link>
              {' · '}
              <Link href="/creators" className="font-medium text-[#8A6622] underline underline-offset-2">
                Kahana for creators
              </Link>
              {comparisonKind(platform) === 'adult' ? (
                <>
                  {' · '}
                  <Link
                    href="/help/adult-content-and-age-verification"
                    className="font-medium text-[#8A6622] underline underline-offset-2"
                  >
                    Adult content and age verification
                  </Link>
                </>
              ) : null}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
