"use client";

export default function FocusAreas() {
  const areas = [
    "Food Security & Sustainable Growth",
    "Clothing Distribution",
    "Education Support",
    "Livelihood & Skill Development",
    "Mental Wellness & Emotional Care",
    "Community Development",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 fade-in">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="w-full h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <img
            src="/hero1.jpg"
            alt="Our Focus Areas"
            className="w-full h-full object-cover"
          />
        </div>
        {/* RIGHT */}
        <div className="">
          <h2 className="text-4xl md:text-4xl font-semibold leading-tight text-slate-800 tracking-tight">
            Our Focus Areas
            <span className="block text-[var(--brand-600)] text-2xl">
              Creating lasting change, not temporary relief.
            </span>
          </h2>

          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Each of our programs is carefully designed to create long-term
            impact within communities. We focus on empowering individuals and
            families through sustainable solutions that promote dignity,
            resilience, and growth.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((item, index) => (
              <div
                key={index}
                className="px-5 py-4 rounded-lg border border-slate-200 text-slate-700 text-lg font-medium shadow-sm hover:border-[var(--brand-600)] transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
