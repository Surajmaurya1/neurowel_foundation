"use client";

import { useState } from "react";

export default function CareerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="pt-28 pb-20">

      {/* ================= HERO BANNER ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/career.jpg"
            alt="Career Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
              Be a Volunteer
            </h1>
          </div>
        </div>

        <p className="text-center text-xl mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Join Neurowel Foundation as a volunteer and help uplift communities in need.
        </p>
      </section>

      {/* ================= VOLUNTEER FORM ================= */}
      <section className="max-w-xl mx-auto px-6">
        <div className="bg-white dark:bg-[#121212] shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Volunteer Form
          </h2>

          <form onSubmit={submitForm} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#1a1a1a]
                           focus:outline-green-600"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#1a1a1a]
                           focus:outline-green-600"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#1a1a1a]
                           focus:outline-green-600"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-medium mb-1">
                Why do you want to volunteer?
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your interest"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-[#1a1a1a]
                           focus:outline-green-600"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
            >
              Submit Application
            </button>

            {/* SUCCESS MESSAGE */}
            {sent && (
              <p className="text-green-600 dark:text-green-400 text-center font-medium mt-3">
                Thank you! We will contact you soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
