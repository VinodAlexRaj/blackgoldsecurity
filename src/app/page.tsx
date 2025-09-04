import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { createClient } from "../prismicio";
import { HomepageDocument } from "../customtypes"; // your Prismic types

export const revalidate = 60; // ISR: rebuild every 60 seconds

export default async function HomePage() {
  const client = createClient();

  // Fetch the homepage document
  const page = await client.getByUID<HomepageDocument>("homepage", "homepage");

  // Check what fields exist
  console.log("Homepage data:", page.data);

  // Safely get the main title
  const mainTitle = page.data.heading ?? page.data.title ?? "Welcome to Black Gold Security";

  return (
    <main>
      <h1>{mainTitle}</h1>
      <SliceZone slices={page.data.slice_zone} components={components} />
    </main>
  );
}
