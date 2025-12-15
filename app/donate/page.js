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
      {/* ================= HERO BANNER ================= */}
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

      {/* ================= DONATION CARD ================= */}
      <section id="donate" className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white dark:bg-[#121212] border border-slate-200 dark:border-slate-700 rounded-2xl p-10 shadow-sm md:flex items-start gap-12">
          {/* LEFT CONTENT */}
          <div className="flex-1 mt-[45px]">
            {/* HEART ICON */}
            <div className="mb-6">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                className="text-purple-600"
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

          {/* RIGHT: FORM CARD */}
          <div className="mt-10 md:mt-0 w-full md:w-[360px] bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* NAME */}
              <div>
                <input
                  {...register("name")}
                  className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="w-full border border-slate-300 dark:border-slate-600 dark:bg-slate-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                className="w-full bg-purple-600 text-white rounded-lg py-3 font-medium hover:bg-purple-700 transition"
              >
                Donate Now
                {isSubmitting ? "Processing..." : "Donate"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
