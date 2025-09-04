import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "../prismicio";

export const revalidate = 60; // ISR: rebuild every 60 seconds

export default async function HomePage() {
  const client = createClient();
  const page = await client.getByUID("homepage", "homepage");

  // Use the actual field from Prismic
  const mainTitle = page.data.title ?? page.data.heading ?? "Welcome";

  return (
    <main>
      <h1>{mainTitle}</h1>
      <SliceZone slices={page.data.slice_zone} components={components} />
    </main>
  );
}
