"use client";

import {
  Utensils,
  Shirt,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Users,
} from "lucide-react";

export default function FocusAreas() {
  const areas = [
    { text: "Food Security & Sustainable Growth", icon: Utensils },
    { text: "Clothing Distribution", icon: Shirt },
    { text: "Education Support", icon: GraduationCap },
    { text: "Livelihood & Skill Development", icon: Briefcase },
    { text: "Mental Wellness & Emotional Care", icon: HeartHandshake },
    { text: "Community Development", icon: Users },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 bg-green-50 rounded-2xl mt-10 fade-in">
      <div className="grid md:grid-cols-2 gap-12 items-stretch">

        {/* IMAGE */}
        <div className="relative order-1 md:order-1 w-full h-[260px] md:h-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <img
            src="/hero1.jpg"
            alt="Our Focus Areas"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-800 tracking-tight">
            Our Focus Areas
            <span className="block text-[var(--brand-600)] text-xl md:text-2xl mt-1">
              Creating lasting change, not temporary relief.
            </span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Each of our programs is carefully designed to create long-term
            impact within communities. We focus on empowering individuals and
            families through sustainable solutions that promote dignity,
            resilience, and growth.
          </p>

          {/* FOCUS AREA CARDS */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                    flex items-center gap-3
                    px-5 py-4 rounded-lg
                    border border-slate-200
                    text-slate-700 text-base md:text-lg
                    font-medium shadow-sm
                    hover:border-[var(--brand-600)]
                    hover:shadow-md
                    transition-all duration-300
                  "
                >
                  <Icon className="w-5 h-5 text-[var(--brand-600)]" />
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
