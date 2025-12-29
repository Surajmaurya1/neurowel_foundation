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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
    toast.success("Thank you for applying as a volunteer!");
  };

  return (
    <main className="pt-28">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/career.jpg"
            alt="Get Involved Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/20 flex items-center pl-12">
            <h1 className="text-3xl md:text-7xl font-bold text-white">
              Get Involved
            </h1>
          </div>
        </div>

        <p className="text-center text-xl mt-6 text-gray-700 max-w-3xl mx-auto">
          Join Neurowel Foundation and help uplift communities through
          volunteering, partnerships, and meaningful support.
        </p>
      </section>

      {/* VOLUNTEER FORM */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Volunteer Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* FIRST & LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">First Name</label>
                <input
                  {...register("firstName", {
                    onChange: (e) =>
                      (e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "")),
                  })}
                  placeholder="First name"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Last Name</label>
                <input
                  {...register("lastName", {
                    onChange: (e) =>
                      (e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "")),
                  })}
                  placeholder="Last name"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* EMAIL & MOBILE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  {...register("email")}
                  placeholder="Email address"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Mobile Number</label>
                <input
                  type="tel"
                  maxLength={10}
                  {...register("phone", {
                    onChange: (e) =>
                      (e.target.value = e.target.value.replace(/\D/g, "")),
                  })}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* ALTERNATE MOBILE & LOCATION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">
                  Alternate Mobile No
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  {...register("alternatePhone", {
                    onChange: (e) =>
                      (e.target.value = e.target.value.replace(/\D/g, "")),
                  })}
                  placeholder="Alternate mobile number"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.alternatePhone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.alternatePhone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Location</label>
                <input
                  {...register("location")}
                  placeholder="Your location"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.location && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>
            </div>

            {/* PRIOR EXPERIENCE */}
            <div>
              <label className="block font-medium mb-1">
                Prior Volunteering Experience
              </label>
              <select
                {...register("priorExperience")}
                className="w-full px-4 py-2 border rounded-md bg-gray-50"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.priorExperience && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.priorExperience.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-medium mb-1">
                Why do you want to volunteer?
              </label>
              <textarea
                rows="4"
                {...register("message")}
                placeholder="Tell us about your interest"
                className="w-full px-4 py-2 border rounded-md bg-gray-50"
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
          </form>
        </div>
      </section>
    </main>
  );
}
