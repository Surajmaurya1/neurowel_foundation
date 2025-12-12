"use client";
import Image from "next/image";
import { useState } from "react";
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
  const [i, setI] = useState(0);
 

  const next = () => {
    setI((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setI((prev) => (prev - 1 + slides.length) % slides.length);
  };


  const s = slides[i];

  return (
    <section className="relative select-none">
      <div className="w-full h-screen relative overflow-hidden">

        {/* Image */}
        <div className="absolute inset-0 ">
          <Image
            src={s.src}
            alt={s.title}
            fill
            priority={true}              
            className="object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center bg-linear-to-t from-black/40 via-black/10 to-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">

              <h1 className="hero-text text-white text-3xl md:text-6xl font-bold leading-tight">
                {s.title}
              </h1>

              <p className="hero-text text-slate-200 mt-3 text-base md:text-lg" >
                {s.subtitle}
              </p>

              <div className="flex gap-3 mt-6 hero-text" >
                <a
                  href="donate"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium shadow transition"
                >
                  {s.cta}
                </a>

                <a
                  href="about"
                  className="border border-white/40 text-white px-6 py-3 rounded-md hover:bg-white/10 transition"
                >
                  Learn More
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Arrow Controls */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow"
        >
          <ChevronLeft className="w-6 h-6 text-green-600" />
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow"
        >
          <ChevronRight className="w-6 h-6 text-green-600" />
        </button>

      </div>
      
    </section>
  );
}
