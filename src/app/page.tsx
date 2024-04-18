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
] as const;

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...IMAGE_URLS, ...IMAGE_URLS, ...IMAGE_URLS, ...IMAGE_URLS].map(
          (image) => (
            <div key={image.id} className="w-40">
              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img src={image.url} width="160" alt="image" />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
