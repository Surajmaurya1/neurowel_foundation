"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { donationSchema } from "../donationSchema";
import { toast } from "sonner";
import { HandHeart } from "lucide-react";

export default function DonationCard() {
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
    <section id="donate" className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm md:flex items-start gap-12">
        {/* Left */}
        <div className="flex-1 mt-[45px]">
          <div className="mb-6">
            <HandHeart className="w-22 h-22 text-green-800 " />
          </div>

          <h3 className="text-4xl font-semibold tracking-tight">
            Support Our Work
          </h3>

          <p className="text-slate-600 mt-4 text-lg leading-relaxed">
            Your donation helps provide clean water, education, and healthcare
            to communities in need. Every contribution makes a meaningful
            impact.
          </p>
        </div>

        {/* Form */}
        <div className="mt-10 md:mt-0 w-full md:w-[360px] bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                {...register("name")}
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                {...register("amount", { valueAsNumber: true })}
                placeholder="Amount"
                className="w-full border rounded-lg px-4 py-3"
              />

              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.amount.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-800 text-white rounded-lg py-3 font-medium disabled:opacity-60"
            >
              {isSubmitting ? "Processing..." : "Donate"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
