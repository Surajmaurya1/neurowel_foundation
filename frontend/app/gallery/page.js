"use client";

import Image from "next/image";

const galleryData = [
  {
    location: "Jaunpur, Uttar Pradesh",
    description:
      "Community programs, food distribution, and education initiatives carried out in Jaunpur.",
    images: [
      "/hero1.jpg",
      "/hero1.jpg",
      "/hero1.jpg",
      "/hero1.jpg",
      "/hero1.jpg",
    ],
  },
  {
    location: "Varanasi, Uttar Pradesh",
    description:
      "Healthcare camps and volunteer-driven social impact programs in Varanasi.",
    images: [
      "/hero1.jpg",
      "/hero1.jpg",
      "/hero1.jpg",
      "/hero1.jpg",
    ],
  },
  {
    location: "Lucknow, Uttar Pradesh",
    description:
      "Awareness drives and community engagement activities across Lucknow.",
    images: [
      "/hero1.jpg",
      "/hero1.jpg",
      "/hero1.jpg",
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="pt-28 bg-linear-to-b from-slate-50 via-white to-white">

      {/* ================= HERO (SAME AS ABOUT PAGE) ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="h-80 md:h-[420px]">
            <Image
              src="/hero1.jpg"
              alt="Neurowel Foundation Gallery"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/20" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-3xl">
              <h1 className="mt-4 text-3xl md:text-7xl font-bold text-white">
                Our Gallery
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/90">
                Moments from our work across communities and locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION-WISE GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-24">

        {galleryData.map((section, index) => (
          <div key={index}>
            {/* LOCATION HEADER */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                {section.location}
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600 text-lg">
                {section.description}
              </p>
            </div>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group"
                >
                  <Image
                    src={img}
                    alt={`${section.location} image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        ))}

      </section>
    </main>
  );
}
