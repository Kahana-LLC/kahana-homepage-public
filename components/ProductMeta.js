import { generateProductMetaTags } from "../utils/metaUtils";
import { generateProductSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function ProductMeta({ product }) {
  const metaTags = generateProductMetaTags(product);
  const schema = generateProductSchema(product);

  return (
    <Meta
      title={`${product.name} | Kahana`}
      description={product.description}
      image={product.featuredImage}
      url={`https://kahana.io/products/${product.slug}`}
      type="product"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
