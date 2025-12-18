"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/gallery.jpg",
    title: "Clean Water for Every Village",
    subtitle: "Sustainable projects that restore dignity",
    cta: "Donate Now",
  },
  {
    src: "/hero2.jpg",
    title: "Education for Tomorrow",
    subtitle: "Scholarships & learning centers",
    cta: "Support Education",
  },
  {
    src: "/hero3.jpg",
    title: "Health Camps & Outreach",
    subtitle: "Free clinics and medical aid",
    cta: "Join Our Mission",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);

  const next = () =>
    setIndex((i) => (i + 1) % slides.length);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  /* TOUCH EVENTS */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    setOffsetX(currentX - startX.current);
  };

  const onTouchEnd = () => {
    setIsDragging(false);

    if (Math.abs(offsetX) > 80) {
      offsetX < 0 ? next() : prev();
    }

    setOffsetX(0);
  };

  const slide = slides[index];

  return (
    <section className="relative select-none overflow-hidden">
      <div
        className="w-full h-screen relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* IMAGE WITH DRAG */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateX(${offsetX}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* TEXT */}
        <div className="
          absolute inset-0 flex
          items-center md:items-center
          bg-linear-to-t from-black/40 via-black/10 to-transparent
        ">
          <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-0">
            <div className="max-w-2xl">
              <h1 className="text-white text-3xl md:text-6xl font-bold">
                {slide.title}
              </h1>
              <p className="text-slate-200 mt-3">
                {slide.subtitle}
              </p>

              <div className="flex gap-3 mt-6">
                <a
                  href="/donate"
                  className="bg-green-800 text-white px-6 py-3 rounded-md"
                >
                  {slide.cta}
                </a>
                <a
                  href="/getinvolved"
                  className="border border-white/40 text-white px-6 py-3 rounded-md"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ARROWS (DESKTOP) */}
        <button
          onClick={prev}
          className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-green-600" />
        </button>

        <button
          onClick={next}
          className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-green-600" />
        </button>
      </div>
    </section>
  );
}
