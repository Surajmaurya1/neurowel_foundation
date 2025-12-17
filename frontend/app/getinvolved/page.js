"use client";

import Link from "next/link";
import { useState } from "react";
import { HandHeart } from "lucide-react";

export default function GetInvolvedPage() {
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
    <main className="pt-28">

      {/*  HERO  */}
      <section className="max-w-6xl mx-auto px-6 mb-16 hidden md:block">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/career.jpg"
            alt="Get Involved Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
              Get Involved
            </h1>
          </div>
        </div>

        <p className="text-center text-xl mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Join Neurowel Foundation and help uplift communities through
          volunteering, partnerships, and meaningful support.
        </p>
      </section>

      {/* GET INVOLVED  */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Volunteer */}
          <div className="bg-white dark:bg-[#121212] rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-900">
              Volunteer With Us
            </h2>

            <p className="text-slate-700 dark:text-gray-300 mt-4">
              Join us in making a difference by volunteering in:
            </p>

            <ul className="mt-4 space-y-3 text-slate-800 dark:text-gray-200">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Food cultivation programs</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Education and mentoring initiatives</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Clothing distribution drives</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Community outreach activities</span>
              </li>
            </ul>
          </div>

          {/* Partner */}
          <div className="bg-white dark:bg-[#121212] rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-900">
              Partner With Us
            </h2>

            <p className="text-slate-700 dark:text-gray-300 mt-4">
              We welcome partnerships with:
            </p>

            <ul className="mt-4 space-y-3 text-slate-800 dark:text-gray-200">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Corporates for CSR initiatives</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Educational institutions</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>NGOs and community organisations</span>
              </li>
            </ul>

            <p className="text-slate-700 dark:text-gray-300 mt-4">
              Together, we can create sustainable social impact.
            </p>
          </div>

          {/* Donate */}
          <div className="bg-white dark:bg-[#121212] rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-indigo-900">
              Donate &amp; Support
            </h2>

            <p className="text-slate-700 dark:text-gray-300 mt-4">
              Your contribution helps us:
            </p>

            <ul className="mt-4 space-y-3 text-slate-800 dark:text-gray-200">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Expand food and nutrition programs</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Provide clothing and essentials</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Support education and skill development</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                <span>Strengthen mental wellness initiatives</span>
              </li>
            </ul>
            
          </div>
        </div>
      </section>

      {/* VOLUNTEER FORM   */}
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
              className="w-full bg-green-800 hover:bg-green-900 text-white py-2 rounded-md transition"
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
