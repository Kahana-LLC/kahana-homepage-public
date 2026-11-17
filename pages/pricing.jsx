import SEO from '../components/SEO';
import { ABOUT_ORIGIN } from '../config/site';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Plans & billing | Kahana"
        description="Compare Kahana Free and Growth. Both plans keep a 5% hub sales fee and include 1 free collaborator per hub. Growth adds hubs, file size, custom URLs, and themes."
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
