import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "../prismicio";

export const revalidate = 60; // ISR: rebuild every 60 seconds

export default async function HomePage() {
  const client = createClient();
  const page = await client.getByUID("homepage", "homepage");

  // Fallback in case your Prismic document doesn't have a title
  const mainTitle = page.data.title ?? page.data.heading ?? "Welcome";

  return (
    <main>
      <h1>{mainTitle}</h1>
      <SliceZone slices={page.data.slice_zone} components={components} />
    </main>
  );
}
