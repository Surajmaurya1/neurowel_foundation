"use client";

import ContentImageSection from "@/app/components/ContentImageSection";

const programs = [
  {
    title: "Food Security & Sustainable Growth",
    intro:
      "We empower individuals and families to grow their own food through:",
    points: [
      "Kitchen garden training",
      "Community farming initiatives",
      "Organic vegetable cultivation",
    ],
    paragraphs: [
      "These programs improve nutrition, reduce dependency, and promote self-sufficiency.",
      "Local food production helps families gain control over daily needs and build resilience.",
    ],
  },
  {
    title: "Clothing Distribution Programs",
    intro:
      "Through organised clothing drives and seasonal initiatives, we support:",
    points: [
      "Children and families in low-income communities",
      "Individuals affected by economic hardship",
      "School-going children needing uniforms and winter clothing",
      "Elderly individuals requiring basic clothing support",
      "Emergency relief during extreme weather conditions",
    ],
    paragraphs: [
      "Our goal is to ensure comfort, dignity, and protection for all.",
    ],
  },
  {
    title: "Education Support",
    intro:
      "Education is a key driver of long-term change. We support learners by:",
    points: [
      "After-school study support",
      "School and college sponsorships",
      "Learning materials and mentorship",
      "Academic guidance and exam preparation support",
      "Encouraging continued education for at-risk students",
    ],
    paragraphs: [
      "We help students stay in school and build confidence for a secure future.",
    ],
  },
  {
    title: "Livelihood & Skill Development",
    intro: "To promote financial independence, we offer:",
    points: [
      "Tailoring and sewing training",
      "Vocational skill workshops",
      "Income generation support",
      "Entrepreneurship and small business guidance",
      "Skill-based training aligned with local employment needs",
    ],
    paragraphs: [
      "These initiatives open pathways to employment and self-reliance.",
    ],
  },
  {
    title: "Mental Wellness & Emotional Support",
    intro:
      "Mental health is as important as physical well-being. Our programs include:",
    points: [
      "Emotional support groups",
      "Counselling sessions",
      "Mental health awareness workshops",
      "Stress management and coping skill sessions",
      "Community-based peer support initiatives",
    ],
    paragraphs: [
      "We create safe spaces where individuals feel supported and understood.",
    ],
  },
  {
    title: "Community Development Initiatives",
    intro: "Our community-focused programs include:",
    points: [
      "Women empowerment initiatives",
      "Early childhood development",
      "Community health and awareness programs",
      "Leadership and participation development activities",
      "Collaborative initiatives that strengthen local engagement",
    ],
    paragraphs: [
      "Each initiative strengthens participation and shared responsibility.",
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="pt-28 bg-slate-50">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="h-80 md:h-[440px]">
            <img
              src="/hero1.jpg"
              alt="What We Do"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Support that changes lives
              </h1>
              <p className="mt-4 text-white/90 text-lg">
                Helping communities grow stronger through essentials and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM SECTIONS */}
      <div className="mt-16 space-y-14 pb-20">
        {programs.map((item, index) => (
          <ContentImageSection
            key={item.title}
            {...item}
            image="/hero1.jpg"
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </main>
  );
}
