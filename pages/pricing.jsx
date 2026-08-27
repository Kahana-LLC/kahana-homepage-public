import SEO from '../components/SEO';
import { ABOUT_ORIGIN } from '../config/site';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Plans & billing | Kahana"
        description="Compare Kahana Free and Growth. See every feature on Free, and what Growth adds for hubs, storage, file size, and live chat."
        url={`${ABOUT_ORIGIN}/pricing`}
        type="website"
      />
      <div>
        <main className="py-10 px-4">
          <Pricing />
        </main>
      </div>
    </>
  );
}
