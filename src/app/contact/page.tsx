import { createClient } from "../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

export default async function ContactPage() {
  const client = createClient();
  const page = await client.getSingle("contact");

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
