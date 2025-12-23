"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name: allow only letters and spaces
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;

    // Phone: allow only digits
    if (name === "phone" && !/^\d*$/.test(value)) return;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    // NAME
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // EMAIL
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // PHONE
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // MESSAGE
    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const submitForm = async (e) => {
  e.preventDefault();
  setSent(false);

  if (!validate()) return;

  try {
    {/* FOR MAIL */}
    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    // if (!res.ok) throw new Error("Failed");

    setSent(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <main className="pt-28">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/contact.jpg"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/20 flex items-center justify-start">
            <h1 className="text-4xl md:text-7xl pl-16 font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>

        <p className="text-center text-xl mt-6 text-gray-700 max-w-3xl mx-auto">
          Have questions, ideas, or want to collaborate? We are here to help.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={submitForm} className="space-y-5">
            {/* NAME */}
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-md bg-gray-50"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md bg-gray-50"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
                placeholder="10-digit phone number"
                className="w-full px-4 py-2 border rounded-md bg-gray-50"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-md bg-gray-50"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
            >
              Send Message
            </button>

            {sent && (
              <p className="text-green-600 text-center font-medium mt-3">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
