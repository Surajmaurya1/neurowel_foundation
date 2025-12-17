"use client";

import { useState } from "react";

export default function ContactPage() {
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
      {/* HERO BANNER */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/contact.jpg"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Contact Us
            </h1>
          </div>
        </div>

        <p className="text-center  text-xl mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Have questions, ideas, or want to collaborate? We are here to help.
          Reach out to Neurowel Foundation anytime.
        </p>
      </section>

      {/*  CONTACT INFO  */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-xl p-8 text-center shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            We would love to hear from you
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You can also reach us through our contact form for queries,
            partnerships, or volunteering opportunities.
          </p>

          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-medium">Address:</span> Your address
            </p>
            <p>
              <span className="font-medium">Phone:</span> Your contact number
            </p>
            <p>
              <span className="font-medium">Email:</span> Your email address
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 mb-20 mt-[100px]">
        <div className="bg-white dark:bg-[#121212] shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
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
                className="w-full px-4 py-2 border rounded-md 
                           bg-gray-50 dark:bg-[#1a1a1a] focus:outline-green-600"
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
                className="w-full px-4 py-2 border rounded-md 
                           bg-gray-50 dark:bg-[#1a1a1a] focus:outline-green-600"
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
                className="w-full px-4 py-2 border rounded-md 
                           bg-gray-50 dark:bg-[#1a1a1a] focus:outline-green-600"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-md 
                           bg-gray-50 dark:bg-[#1a1a1a] focus:outline-green-600"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
            >
              Send Message
            </button>

            {sent && (
              <p className="text-green-600 dark:text-green-400 text-center font-medium mt-3">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
