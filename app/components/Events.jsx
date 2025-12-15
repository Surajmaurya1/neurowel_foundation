"use client";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Events() {
  const events = [
    { 
      title: "City Food Drive",
      date: "Jan 24, 2025",
      img: "/placeholder.jpg",
      desc: "Helping families with essential food supplies across the city."
    },
    { 
      title: "Rural Water Project",
      date: "Feb 12, 2025",
      img: "/placeholder.jpg",
      desc: "Building clean water access points in remote villages."
    },
    { 
      title: "Health Camp",
      date: "Mar 05, 2025",
      img: "/placeholder.jpg",
      desc: "Offering free checkups and basic medical support to communities."
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % events.length);
  const prev = () => setIndex((prev) => (prev - 1 + events.length) % events.length);

  const e = events[index];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* TWO COLUMN LAYOUT */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE + TITLE */}
        <div className="flex justify-center">
          <div className="
            relative 
            w-full md:w-[420px] 
            h-60 md:h-[480px] 
            rounded-2xl overflow-hidden shadow-lg
          ">
            
            <img 
              src="/hero1.jpg"
              alt="Events"
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <h2 className="
                text-2xl sm:text-3xl md:text-5xl 
                font-bold text-white drop-shadow-lg leading-tight
              ">
                Stories That Inspire <br /> Real Change
              </h2>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative pr-0 md:pr-8">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-4 md:mb-6 px-1 md:px-0">
            <h2 className="text-2xl md:text-3xl ml-5 font-semibold">Latest Events</h2>

            <a 
              href="/events" 
              className="group text-base mr-5 md:text-lg text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all relative"
            >
              View all
              <ArrowRight className="w-4 h-4" />
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* EVENT CARD WITH ARROWS */}
          <div className="relative w-full">

            <article className="
              bg-white rounded-xl overflow-hidden shadow-xl 
              flex flex-col 
              w-full max-w-full md:max-w-[95%] mx-auto
            ">
              {/* Card image */}
              <div className="relative w-full h-48 md:h-56">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 flex flex-col">
                <h3 className="font-semibold text-lg md:text-xl">{e.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{e.date}</p>

                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {e.desc}
                </p>

                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm px-5 py-2 rounded-md transition"
                  >
                    More details
                  </a>
                </div>
              </div>
            </article>

            {/* LEFT ARROW */}
            <button
              onClick={prev}
              className="
                absolute -left-2 md:-left-4 
                top-[45%] md:top-1/2 -translate-y-1/2
                bg-purple-500 text-white
                p-2 md:p-3 rounded-full shadow-lg
                hover:bg-purple-600 transition
              "
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={next}
              className="
                absolute -right-2 md:-right-4
                top-[45%] md:top-1/2 -translate-y-1/2
                bg-purple-500 text-white
                p-2 md:p-3 rounded-full shadow-lg
                hover:bg-purple-600 transition
              "
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
