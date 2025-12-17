"use client";

const programs = [
  {
    title: "Food Security & Sustainable Growth",
    intro:
      "We empower individuals and families to grow their own food through:",
    bullets: [
      "Kitchen garden training",
      "Community farming initiatives",
      "Organic vegetable cultivation",
    ],
    outro:
      "These programs improve nutrition, reduce dependency, and promote self-sufficiency.",
  },
  {
    title: "Clothing Distribution Programs",
    intro:
      "Through organised clothing drives and seasonal distribution initiatives, we support:",
    bullets: [
      "Children and families in low-income communities",
      "Individuals affected by economic hardship",
      "School-going children needing uniforms and winter clothing",
    ],
    outro: "Our goal is to ensure comfort, dignity, and protection for all.",
  },
  {
    title: "Education Support",
    intro:
      "Education is a key driver of long-term change. We support children and youth by:",
    bullets: [
      "Providing after-school study support",
      "Sponsoring school and college education",
      "Offering learning materials and mentorship",
    ],
    outro: "",
  },
  {
    title: "Livelihood & Skill Development",
    intro: "To promote financial independence, we offer:",
    bullets: [
      "Tailoring and sewing training programs",
      "Vocational skill workshops",
      "Livelihood support for income generation",
    ],
    outro:
      "These initiatives help individuals build stable and sustainable livelihoods.",
  },
  {
    title: "Mental Wellness & Emotional Support",
    intro:
      "We believe mental health is as important as physical well-being. Our initiatives include:",
    bullets: [
      "Emotional support groups",
      "Counselling sessions",
      "Mental health awareness workshops",
    ],
    outro:
      "These programs foster emotional resilience and community well-being.",
  },
  {
    title: "Community Development Initiatives",
    intro: "Our community-focused programs include:",
    bullets: [
      "Women empowerment initiatives",
      "Early childhood development support",
      "Community health and awareness programs",
    ],
    outro: "Each initiative is designed to bring long-term positive change.",
  },
];

function ProgramSection({ item, index }) {
  const reverse = index % 2 === 1;

  const imageOrder = reverse ? "order-1 md:order-1" : "order-1 md:order-2";
  const textOrder = reverse ? "order-2 md:order-2" : "order-2 md:order-1";

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100 ${imageOrder}`}
        >
          <img
            src="/hero1.jpg"
            alt={item.title}
            className="h-72 md:h-[380px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/15 to-transparent" />
        </div>

        {/* TEXT  */}
        <div
          className={`rounded-2xl bg-white border border-slate-200 shadow-sm p-7 md:p-10 ${textOrder}`}
        >
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-indigo-900 leading-tight">
            {item.title}
          </h2>

          <p className="mt-5 text-slate-700 leading-relaxed">{item.intro}</p>

          <ul className="mt-5 space-y-3 text-slate-800">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {item.outro ? (
            <p className="mt-5 text-slate-700 leading-relaxed">{item.outro}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default function WhatWeDoPage() {
  return (
    <main className="pt-28 bg-slate-50">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-200">
          <div className="h-80 md:h-[440px]">
            <img
              src="/hero1.jpg"
              alt="What We Do"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-3xl">
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
                Support that changes lives
              </h1>

              <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
                Helping communities grow stronger through essentials and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <div className="mt-14 space-y-12 pb-20">
        {programs.map((item, idx) => (
          <ProgramSection key={item.title} item={item} index={idx} />
        ))}
      </div>
    </main>
  );
}
