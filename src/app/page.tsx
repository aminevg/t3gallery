import Image from "next/image";
import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {IMAGE_URLS.map((image) => (
          <div key={image.id} className="h-32 w-40">
            <Image src={image.url} width="160" height="128" alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}

const IMAGE_URLS = [
  {
    id: 1,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image1.jpg",
  },
  {
    id: 2,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image2.jpg",
  },
  {
    id: 3,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image3.jpg",
  },
  {
    id: 4,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image4.jpg",
  },

  {
    id: 5,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image1.jpg",
  },
  {
    id: 6,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image2.jpg",
  },
  {
    id: 7,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image3.jpg",
  },
  {
    id: 8,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image4.jpg",
  },

  {
    id: 9,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image1.jpg",
  },
  {
    id: 10,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image2.jpg",
  },
  {
    id: 11,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image3.jpg",
  },
  {
    id: 12,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image4.jpg",
  },

  {
    id: 13,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image1.jpg",
  },
  {
    id: 14,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image2.jpg",
  },
  {
    id: 15,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image3.jpg",
  },
  {
    id: 16,
    url: "https://hkhfdilwebjcbckqizyv.supabase.co/storage/v1/object/public/t3gallery/image4.jpg",
  },
] as const;
