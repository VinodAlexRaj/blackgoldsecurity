import { createClient } from '@/prismicio';
import { notFound } from 'next/navigation';

export default async function ServicePage({ params }: { params: { uid: string } }) {
  const client = createClient();
  const page = await client.getByUID('service', params.uid);

  if (!page) return notFound();

  return (
    <main>
      <h1>{page.data.title}</h1>
      <p>{page.data.description}</p>
    </main>
  );
}
