import { generateBlogMetaTags } from "../utils/metaUtils";
import {
  generateBlogPostSchema,
  generateBreadcrumbSchema,
} from "../utils/schemaUtils";
import Meta from "./Meta";

export default function BlogMeta({ post }) {
  const metaTags = generateBlogMetaTags(post);
  const postSchema = generateBlogPostSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  // Combine schemas
  const schema = [postSchema, breadcrumbSchema];

  return (
    <Meta
      title={post.title}
      description={post.excerpt}
      image={post.featuredImage}
      url={`https://kahana.co/blog/${post.slug}`}
      type="article"
      twitterHandle={post.authorTwitter || "@kahana"}
      schema={schema}
    />
  );
}
