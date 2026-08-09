import SEO from '../components/SEO';
import { ABOUT_ORIGIN } from '../config/site';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Plans & billing | Aura Library"
        description="Choose the Aura Library plan that fits your hubs. Start free, upgrade to Growth for unlimited hubs and storage, or contact us for Enterprise."
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
