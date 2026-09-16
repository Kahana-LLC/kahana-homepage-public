import Link from 'next/link';
import SEO from '../components/SEO';
import FadeInSection from '../components/FadeInSection';
import DarkLibraryCta from '../components/marketing/DarkLibraryCta';
import RoadmapBoard from '../components/roadmap/RoadmapBoard';
import { ABOUT_ORIGIN } from '../config/site';
import { fetchPublicRoadmap } from '../lib/linearRoadmap';
import { productHref } from '../lib/productLinks';
import { trackButtonClick } from '../utils/analytics';

const CANONICAL = `${ABOUT_ORIGIN}/roadmap`;

export default function RoadmapPage({ board }) {
  const columns = board?.columns || { backlog: [], inProgress: [], shipped: [] };
  const stale = !board?.live;

  return (
    <>
      <SEO
        title="Product roadmap | Kahana"
        description="What Kahana is building next: backlog, in progress, and recently shipped platform features."
        url={CANONICAL}
        type="website"
      />
      <div className="bg-[#F7F3EA] text-[#3B2F1A]">
        <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <FadeInSection eager>
              <p className="text-sm font-semibold tracking-wide text-[#8A6622]">Product</p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Product roadmap
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#5C4520] sm:text-xl">
                Open a card to learn what each item is and why it would help you. Dates are when we
                logged the idea, not when it will ship.
              </p>
            </FadeInSection>
          </div>
          <div className="mx-auto mt-12 w-full max-w-6xl">
            <FadeInSection eager>
              <RoadmapBoard columns={columns} stale={stale} />
            </FadeInSection>
          </div>
        </section>

        <DarkLibraryCta
          title="Use the library today"
          description="Open hubs that are already live, or create an account and share your own."
          libraryCampaign="roadmap_library"
          createCampaign="roadmap_create"
          libraryTrack="roadmap_page_library"
          createTrack="roadmap_page_create"
        >
          <p className="mt-8 text-sm text-[#F7F3EA]/70">
            <a
              href={productHref('/survey/improve?source=roadmap', 'roadmap_feedback')}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
              onClick={() => trackButtonClick('roadmap_send_feedback')}
            >
              Send feedback
            </a>
            {' · '}
            <Link
              href="/features"
              className="underline decoration-[#F7F3EA]/40 underline-offset-2 hover:decoration-[#F7F3EA]"
            >
              Features
            </Link>
          </p>
        </DarkLibraryCta>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const board = await fetchPublicRoadmap();
  return {
    props: { board },
    revalidate: 3600,
  };
}
