"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  HandHeart,
  Lock,
  CreditCard,
  Smartphone,
  Landmark,
} from "lucide-react";

export default function DonationCard({title, subtitle}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log({
      ...data,
      amount: Number(data.amount),
    });

    reset();
    toast.success("Thank you for your donation!");
  };

  return (
    <section id="donate" className="max-w-4xl mx-auto px-6 py-10">

      {/* PAGE HEADING */}
      <section className="max-w-4xl mx-auto pb-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
         {title}
        </h2>

        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </section>

      {/* DONATION CARD */}
      <div className="bg-green-50/20 border border-slate-200 rounded-2xl p-10 shadow-sm md:flex items-start gap-12">

        {/* LEFT */}
        <div className="flex-1 mt-[45px]">
          <HandHeart className="w-16 h-16 text-green-800 mb-6" />

          <h3 className="text-4xl font-semibold tracking-tight text-slate-900">
            Support Our Work
          </h3>

          <p className="text-slate-600 mt-4 text-lg leading-relaxed">
            Your donation helps provide clean water, education, and healthcare
            to communities in need. Every contribution makes a meaningful
            impact.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-10 md:mt-0 w-full md:w-[360px] bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* NAME */}
            <div>
              <input
                placeholder="Full Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className="w-full border rounded-lg px-4 py-3"
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
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border rounded-lg px-4 py-3"
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
                type="number"
                min="1"
                placeholder="Amount"
                {...register("amount", {
                  required: "Amount is required",
                  validate: (value) =>
                    Number(value) >= 1 || "Amount must be at least 1",
                })}
                className="w-full border rounded-lg px-4 py-3"
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
              className="w-full bg-green-800 text-white rounded-lg py-3 font-medium disabled:opacity-60"
            >
              {isSubmitting ? "Processing..." : "Donate"}
            </button>

            {/* SECURITY MESSAGE */}
            <div className="pt-4 border-t border-slate-200 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Lock className="w-4 h-4 text-green-700" />
                <span>Secure & trusted payments</span>
              </div>

              {/* PAYMENT ICONS */}
              <div className="mt-3 flex items-center justify-center gap-4 text-slate-400">
                <Smartphone className="w-5 h-5" title="UPI" />
                <CreditCard className="w-5 h-5" title="Cards" />
                <Landmark className="w-5 h-5" title="Net Banking" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Your information is protected with industry-standard security.
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
