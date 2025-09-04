import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type BlogOverviewProps = SliceComponentProps<Content.BlogOverviewSlice>;

/**
 * BlogOverview Slice Component
 */
const BlogOverview: FC<BlogOverviewProps> = ({ slice }) => {
  const { heading, number_to_show } = slice.primary;

  // Placeholder for actual blog fetching logic
  const posts = Array.from({ length: number_to_show ?? 3 }).map((_, i) => ({
    id: i,
    title: `Blog Post ${i + 1}`,
    excerpt: "This is a placeholder excerpt for the blog post.",
    url: "#",
  }));

  return (
    <section className="blog-overview py-16 px-4">
      {heading && <h2 className="text-3xl font-bold mb-8">{heading}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="mb-4">{post.excerpt}</p>
            <a
              href={post.url}
              className="text-blue-600 font-medium hover:underline"
            >
              Read more
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogOverview;
