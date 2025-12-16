"use client";

export default function AboutPage() {
  return (
    <main className="pt-28 bg-linear-to-b from-slate-50 via-white to-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="h-80 md:h-[420px]">
            <img
              src="/about.jpg"
              alt="Neurowel Foundation"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-3xl">
              <h1 className="mt-4 text-3xl md:text-6xl font-bold  text-white leading-tight">
                Neurowel Foundation
              </h1>

              <p className=" text-white/90 text-base md:text-lg leading-relaxed">
                Serving communities. Empowering lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE  */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-white order-1 md:order-2">
            <img
              src="/hero1.jpg"
              alt="Community support"
              className="h-72 md:h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 to-transparent" />
          </div>

          {/* TEXT */}
          <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-7 md:p-10 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900">
              Who We Are
            </h2>

            <p className="mt-5 text-slate-700 leading-relaxed">
              Neurowel Foundation was founded with a strong commitment to serve
              individuals and families facing social and economic challenges.
              Many people struggle daily with access to food, clothing,
              education, emotional support, and income opportunities. We aim to
              bridge these gaps through well-structured programs that restore
              dignity, confidence, and hope.
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
              We believe empowered communities are the foundation of lasting
              progress.
            </p>
          </div>
        </div>
      </section>

      {/* VISION  */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-white order-1 md:order-1">
            <img
              src="/hero1.jpg"
              alt="Vision and hope"
              className="h-72 md:h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-indigo-950/35 to-transparent" />
          </div>

          {/* TEXT */}
          <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-7 md:p-10 order-2 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900">
              Our Vision
            </h2>

            <p className="mt-5 text-slate-700 leading-relaxed">
              A world where everyone has access to basic needs and dignity
            </p>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Empowered individuals who can grow and thrive</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>
                  Communities that prioritise mental health and well-being
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>An inclusive society free from inequality and exclusion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-white order-1 md:order-2">
            <img
              src="/hero1.jpg"
              alt="Mission in action"
              className="h-72 md:h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 to-transparent" />
          </div>

          {/* TEXT */}
          <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-7 md:p-10 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900">
              Our Mission
            </h2>

            <p className="mt-5 text-slate-700 leading-relaxed">
              We are committed to serving with purpose and transforming lives by:
            </p>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-900 shrink-0" />
                <span>
                  Promoting food security through sustainable cultivation programs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-900 shrink-0" />
                <span>Providing essential clothing to those in need</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-900 shrink-0" />
                <span>Supporting education and skill development</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-900 shrink-0" />
                <span>Offering mental wellness and emotional support</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-900 shrink-0" />
                <span>Encouraging livelihood and income-generating activities</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-900 shrink-0" />
                <span>Partnering with communities for long-term solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* APPROACH*/}
      <section className="max-w-7xl mx-auto px-6 mt-14 mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-white order-1 md:order-1">
            <img
              src="/hero1.jpg"
              alt="Working with local communities"
              className="h-72 md:h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-indigo-950/35 to-transparent" />
          </div>

          {/* TEXT */}
          <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-7 md:p-10 order-2 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900">
              Our Approach
            </h2>

            <p className="mt-5 text-slate-700 leading-relaxed">
              Our approach is community-centric, participatory, and impact-driven.
              We work closely with local communities to understand their needs
              and design solutions that are sustainable, scalable, and respectful
              of local values.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
