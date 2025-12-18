"use client";
import DonationCard from "../components/DonationCard";
export default function DonatePage() {
  

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
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-center font-bold text-white drop-shadow-xl">
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
    </main>
  );
}
