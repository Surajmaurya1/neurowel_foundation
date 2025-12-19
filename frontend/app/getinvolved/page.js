"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { volunteerSchema } from "@/app/involvedSchema";
import { toast } from "sonner";

export default function VolunteerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
    toast.success("Thank you for your donation!");
  };

  return (
    <main className="pt-28">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 mb-16 block">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/career.jpg"
            alt="Get Involved Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0  bg-linear-to-r from-black/90 via-black/50 to-black/20 flex items-center pl-12 justify-start">
            <h1 className="mt-4 text-3xl md:text-7xl font-bold text-white leading-tight">
               Get Involved
              </h1>
             
          </div>
        </div>

        <p className="text-center text-xl mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Join Neurowel Foundation and help uplift communities through
          volunteering, partnerships, and meaningful support.
        </p>
      </section>

      {/* VOLUNTEER FORM */}
      <section className="max-w-xl mx-auto px-6">
        <div className="bg-white dark:bg-[#121212] shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Volunteer Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                {...register("name")}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#1a1a1a]"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                {...register("email")}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#1a1a1a]"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                {...register("phone")}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#1a1a1a]"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* AADHAAR */}
            <div>
              <label className="block font-medium mb-1">
                Aadhaar Card Number
              </label>
              <input
                {...register("aadhaarNumber")}
                placeholder="Enter 12-digit Aadhaar number"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#1a1a1a]"
              />
              {errors.aadhaarNumber && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.aadhaarNumber.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-medium mb-1">
                Why do you want to volunteer?
              </label>
              <textarea
                {...register("message")}
                rows="4"
                placeholder="Tell us about your interest"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#1a1a1a]"
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-900 text-white py-2 rounded-md transition"
            >
              Submit Application
            </button>

            {/* SUCCESS */}
            {/* {isSubmitSuccessful && (
              <p className="text-green-600 text-center font-medium mt-3">
                Thank you! We will contact you soon.
              </p>
            )} */}
          </form>
        </div>
      </section>
    </main>
  );
}
