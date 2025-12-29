"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

/* ================= DATA ================= */

const programs = [
  {
    id: "food",
    title: "Food Security",
    description:
      "Providing nutritious meals and sustainable food support to underserved communities.",
    images: ["/hero1.jpg", "/hero1.jpg", "/hero1.jpg"],
  },
  {
    id: "education",
    title: "Education Support",
    description:
      "Empowering children through education, learning materials, and mentorship.",
    images: ["/hero1.jpg", "/hero1.jpg", "/hero1.jpg"],
  },
  {
    id: "healthcare",
    title: "Healthcare Camps",
    description:
      "Medical outreach and health camps for communities with limited access to care.",
    images: ["/hero1.jpg", "/hero1.jpg"],
  },
  {
    id: "awareness",
    title: "Awareness Drives",
    description:
      "Spreading awareness about health, hygiene, education, and social responsibility.",
    images: ["/hero1.jpg", "/hero1.jpg"],
  },
];

const locations = [
  {
    id: "jaunpur",
    title: "Jaunpur",
    description:
      "Community outreach, food distribution, and education programs in Jaunpur.",
    images: ["/hero1.jpg", "/hero1.jpg", "/hero1.jpg"],
  },
  {
    id: "varanasi",
    title: "Varanasi",
    description:
      "Healthcare camps and volunteer-driven initiatives in Varanasi.",
    images: ["/hero1.jpg", "/hero1.jpg"],
  },
  {
    id: "lucknow",
    title: "Lucknow",
    description:
      "Awareness drives and community engagement activities in Lucknow.",
    images: ["/hero1.jpg", "/hero1.jpg", "/hero1.jpg"],
  },
];

/* ================= COMPONENT ================= */

export default function GalleryPage() {
  const [mode, setMode] = useState("programs"); 
  const [activeItem, setActiveItem] = useState(programs[0]);
  const [lightboxImage, setLightboxImage] = useState(null);

  const activeList = mode === "programs" ? programs : locations;

  return (
    <main className="pt-28 bg-linear-to-b from-slate-50 via-white to-white">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="relative h-80 md:h-[420px]">
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
              <h1 className="text-3xl md:text-7xl font-bold text-white">
                Our Gallery
              </h1>
              <p className="mt-4 text-lg text-white/90">
                Programs and locations showcasing our impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN SWITCH ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-20">
        <div className="flex justify-center gap-4">
          {["programs", "locations"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setMode(item);
                setActiveItem(
                  item === "programs" ? programs[0] : locations[0]
                );
              }}
              className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition
                ${
                  mode === item
                    ? "bg-emerald-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
            >
              {item === "programs" ? "Programs" : "Locations"}
            </button>
          ))}
        </div>
      </section>

      {/* ================= SECONDARY TABS ================= */}
      <section className="max-w-7xl mx-auto  px-6 md:px-10 mt-10">
        <div className="flex flex-wrap justify-center gap-4">
          {activeList.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`px-6 py-2 rounded-full text-sm transition
                ${
                  activeItem.id === item.id
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* TITLE & DESCRIPTION */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            {activeItem.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            {activeItem.description}
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activeItem.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxImage(img)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md group focus:outline-none"
            >
              <Image
                src={img}
                alt="Gallery image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
            </button>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full max-w-5xl h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Gallery preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
