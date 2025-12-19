"use client";
import { useState } from "react";
import DonationCard from "../components/DonationCard";
import Link from "next/link";


export default function DonatePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is your NGO’s mission?",
      a: "Our mission is to uplift underserved communities through education, healthcare, food security, and sustainable development initiatives.",
    },
    {
      q: "How are donations used?",
      a: "Donations are transparently used for food programs, education support, healthcare initiatives, livelihood training, and community welfare projects.",
    },
    {
      q: "Can I volunteer?",
      a: "Yes, we welcome volunteers. You can contribute your time, skills, or expertise by reaching out through our contact page.",
    },
    {
      q: "Besides donating, how else can I help?",
      a: "You can help by volunteering, fundraising, spreading awareness, or partnering with us on community initiatives.",
    },
  ];

  return (
    <main className="pt-28">
      {/* HERO BANNER */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/donate.jpg"
            alt="Donate Banner"
            className="w-full h-full object-cover"
          />
         <div
  className="
    absolute inset-0
    bg-linear-to-r from-black/90 via-black/50 to-black/20
    flex items-center justify-center
    md:justify-start
    px-6 md:pl-16
  "
>
  <h1
    className="
      text-4xl md:text-7xl
      text-center md:text-left
      font-bold text-white
      drop-shadow-xl
    "
  >
    Make a Difference Today
  </h1>
</div>

        </div>

        <p className="text-center text-xl mt-6 text-gray-700 max-w-3xl mx-auto">
          Your contribution empowers communities through education, clean water,
          healthcare, and sustainable development initiatives.
        </p>
      </section>

      {/* WHY DONATE */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100 order-1 md:order-2">
            <img
              src="/hero1.jpg"
              alt="Donation impact"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/15 to-transparent" />
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900">
              Why Donate
            </h2>

            <p className="mt-5 text-slate-700 leading-relaxed">
              Your support enables us to reach underserved communities and
              deliver meaningful change. Every donation helps transform lives
              and create opportunities for growth.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-indigo-900">
              How Your Donation Is Used
            </h3>

            <ul className="mt-5 space-y-3 text-slate-800">
              {[
                "Food cultivation and nutrition support",
                "Clothing distribution",
                "Education sponsorships",
                "Livelihood training programs",
                "Mental wellness services",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DONATION CARD */}
      <DonationCard
        title="Make a Meaningful Contribution"
        subtitle="Because every contribution matters."
      />

      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div>
            <span className="flex items-center gap-2 text-green-600 font-medium mb-4">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              FAQ
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              What You’re Thinking, <br /> We’ve Answered.
            </h2>

            <p className="mt-4 text-slate-600 max-w-md">
              Find helpful answers to common questions about donating,
              volunteering, and supporting our mission.
            </p>
            {/* CONTACT CTA */}
<div className="">
  <p className="text-slate-600 mb-4">
    If you have further questions, feel free to reach out to us.
  </p>

  <Link
    href="/contact"
    className="inline-flex items-center justify-center px-6 py-3 rounded-md
               bg-green-800 text-white font-medium
               hover:bg-green-900 transition"
  >
    Contact Us
  </Link>
</div>
          </div>

          {/* FAQ ACCORDION */}
          <div className="space-y-4">
  {faqs.map((item, index) => (
    <div
      key={index}
      className="rounded-2xl border border-slate-200 bg-slate-50"
    >
      <button
        onClick={() =>
          setOpenIndex(openIndex === index ? null : index)
        }
        className="w-full flex items-center justify-between px-6 py-5 text-left font-medium"
      >
        {item.q}
        <span
          className={`text-2xl transition-transform duration-300 ${
            openIndex === index ? "rotate-180" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex === index
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-slate-600 leading-relaxed">
          {item.a}
        </div>
      </div>
    </div>
  ))}
</div>



        </div>
      </section>
    </main>
  );
}
