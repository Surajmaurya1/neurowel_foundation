"use client";

import Link from "next/link";
import InteractiveSection from "@/app/components/InteractiveSection";

export default function OurImpactPage() {
  const impactPoints = [
    "Improved food security for families through consistent support and local participation",
    "Increased access to education through learning help, materials, and guidance",
    "Empowered women and youth with practical skills for income and independence",
    "Promoted mental and emotional well-being through awareness and community support",
  ];

  const impactItems = [
    {
      title: "What our work has helped achieve",
      content: (
        <>
          <p>
            Impact is not only about the number of people reached—it is about the
            quality and durability of change created in everyday lives. Our
            initiatives are designed to address real needs and support long-term
            progress.
          </p>

          <p>
            Through consistent engagement and community participation, our work
            has helped communities:
          </p>

          <ul className="space-y-3">
            {impactPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p>
            We continue to assess and strengthen our programs through regular
            feedback, transparent reporting, and close collaboration with the
            communities we serve.
          </p>
        </>
      ),
      images : "/hero1.jpg",
    },
  ];

  return (
    <main className="pt-28 bg-slate-50">

      {/* ================= HERO (UNCHANGED) ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-14">
        <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200">
          <div className="h-72 md:h-[420px]">
            <img
              src="/hero1.jpg"
              alt="Our Impact"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/20" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-3xl">
              <h1 className="mt-4 text-3xl md:text-7xl font-bold text-white leading-tight">
                Real impact, <br /> Real lives.
              </h1>

              <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
                Supporting communities with food, education, skills, and mental
                wellness to build stronger and more resilient futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT  ================= */}
      <InteractiveSection
        label="Our Impact"
        heading="The Difference We Create"
        items={impactItems}
      />

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <img
            src="/hero1.jpg"
            alt="Get involved with Neurowel Foundation"
            className="h-80 md:h-[360px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center">
            <div className="relative z-10 px-6 md:px-12 w-full">
              <div className="max-w-3xl">
                <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-white leading-tight">
                  Be part of the change
                </h2>

                <p className="mt-3 text-white/90 text-base md:text-lg leading-relaxed">
                  When you support Neurowel Foundation, you help strengthen
                  families, restore dignity, and create opportunities that last
                  beyond immediate relief.
                </p>

                <div className="mt-6 flex gap-3 flex-wrap">
                  <Link
                    href="/getinvolved"
                    className="px-5 py-2.5 rounded-md border border-white/70 text-white font-medium hover:bg-white hover:text-slate-900 transition"
                  >
                    Get Involved
                  </Link>

                  <Link
                    href="/donate"
                    className="px-5 py-2.5 rounded-md bg-green-800 text-white font-medium hover:bg-green-900 transition"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
