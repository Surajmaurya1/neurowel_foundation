"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { donationSchema } from "../donationSchema";
import { toast } from "sonner";

export default function DonatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(donationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    toast.success("Thank you for your donation!");
  };

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

        <p className="text-center text-xl mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Your contribution empowers communities through education, clean water,
          healthcare, and sustainable development initiatives.
        </p>
      </section>

      {/*  WHY DONATE SECTION  */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 order-1 md:order-2">
            <img
              src="/hero1.jpg"
              alt="Donation impact"
              className="h-72 md:h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/15 to-transparent" />
          </div>

          {/* TEXT  */}
          <div className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-700 rounded-2xl p-8 md:p-10 shadow-sm order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900">
              Why Donate
            </h2>

            <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed">
              Your support enables us to reach underserved communities and
              deliver meaningful change. Every donation helps transform lives
              and create opportunities for growth.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-indigo-900">
              How Your Donation Is Used
            </h3>

            <ul className="mt-5 space-y-3 text-slate-800 dark:text-slate-200">
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

      {/*  DONATION CARD  */}
      <section id="donate" className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-700 rounded-2xl p-10 shadow-sm grid md:grid-cols-[1fr_360px] items-start gap-12">
          <div className="order-2 md:order-2 mt-0 md:mt-0 w-full md:w-[360px] bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* NAME */}
              <div>
                <input
                  {...register("name")}
                  className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-800"
                  placeholder="Full Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  {...register("email")}
                  className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-800"
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* AMOUNT */}
              <div>
                <input
                  {...register("amount", { valueAsNumber: true })}
                  className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-800"
                  placeholder="Donation Amount (₹)"
                />
                {errors.amount && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.amount.message}
                  </p>
                )}
              </div>

              {/* DONATE BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-800 text-white rounded-lg py-3 font-medium hover:bg-green-900 transition"
              >
                {isSubmitting ? "Processing..." : "Donate"}
              </button>
            </form>
          </div>

          {/* LEFT CONTENT  */}
          <div className="flex-1 mt-[45px] order-1 md:order-1">
            <div className="mb-6">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                className="text-green-800"
              >
                <path
                  d="M12 21s-6-4.35-9-8.5C1.5 10.2 1 7.9 2.5 6.4c2-2 5-.5 5 .5s1.5-2.5 4.5-2.5 4.5 3 4.5 3-1-2.5 1.5-3.5S23 7.4 21 10.5C18 14.65 12 21 12 21z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <h3 className="text-4xl font-semibold tracking-tight">
              Support Our Mission
            </h3>

            <p className="text-slate-600 dark:text-slate-300 mt-4 text-lg leading-relaxed">
              Your donation brings hope, education, and healthcare to families
              in need. Even the smallest contribution creates a meaningful
              impact.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
