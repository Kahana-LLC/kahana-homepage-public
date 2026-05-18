import ProductHuntLaunchEmbed from './ProductHuntLaunchEmbed';
import { isProductHuntLaunchActive } from '../data/product-hunt-launch';

export default function ProductHuntLaunchSection({ className = '' }) {
  if (!isProductHuntLaunchActive()) return null;

  return (
    <section className={`text-center ${className}`} aria-labelledby="product-hunt-launch-heading">
      <h2 id="product-hunt-launch-heading" className="text-2xl font-bold text-oasis-green-900">
        Launching on Product Hunt
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-oasis-green-800">
        Follow our May 20 launch for updates and support.
      </p>
      <ProductHuntLaunchEmbed className="mt-6" />
    </section>
  );
}
