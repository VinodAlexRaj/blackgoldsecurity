import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "../prismicio";

export const revalidate = 60; // ISR: rebuild every 60 seconds

export default async function HomePage() {
  const client = createClient();
  const page = await client.getByUID("homepage", "homepage");

  // Type-safe fallback: check for any available text field
  const mainTitle =
    // @ts-expect-error: fallback for fields that may not exist
    page.data.title ??
    // @ts-expect-error: fallback for other possible headings
    page.data.heading ??
    "Welcome";

  return (
    <main>
      <h1>{mainTitle}</h1>
      <SliceZone slices={page.data.slice_zone} components={components} />
    </main>
  );
}
