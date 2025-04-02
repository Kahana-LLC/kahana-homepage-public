import { generateBlogMetaTags } from "../utils/metaUtils";
import { generateBlogPostSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function BlogMeta({ post }) {
  const metaTags = generateBlogMetaTags(post);
  const schema = generateBlogPostSchema(post);

  return (
    <Meta
      title={post.title}
      description={post.excerpt}
      image={post.featuredImage}
      url={`https://kahana.ai/blog/${post.slug}`}
      type="article"
      twitterHandle={post.authorTwitter || "@kahana"}
      schema={schema}
    />
  );
}
