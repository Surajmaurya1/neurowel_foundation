"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only letters
    if (
      ["firstName", "lastName", "city", "state"].includes(name) &&
      !/^[a-zA-Z\s]*$/.test(value)
    )
      return;

    // Only digits
    if (["phone", "pincode"].includes(name) && !/^\d*$/.test(value)) return;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    else if (form.firstName.length < 2)
      newErrors.firstName = "Min 2 characters";

    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    else if (form.lastName.length < 2)
      newErrors.lastName = "Min 2 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Must be 10 digits";

    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.state.trim()) newErrors.state = "State is required";

    if (!form.pincode.trim()) newErrors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(form.pincode))
      newErrors.pincode = "Must be 6 digits";

    if (!form.message.trim()) newErrors.message = "Message required";
    else if (form.message.length < 10)
      newErrors.message = "Min 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setSent(false);

    if (!validate()) return;

    setSent(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      message: "",
    });
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
  Have a question, a suggestion, or want to support our mission? We would love to hear from you.
  Reach out and be part of the change.
</p>

      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={submitForm} className="space-y-5">
            {/* FIRST & LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* EMAIL & PHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* LOCATION */}
            <div>
              {/* <h3 className="font-medium text-base mb-2">Location Details</h3> */}

              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Address</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="House no, Street, Area"
                    className="w-full px-4 py-2 border rounded-md bg-gray-50"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-medium mb-1">City</label>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="w-full px-4 py-2 border rounded-md bg-gray-50"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium mb-1">State</label>
                    <input
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="Enter your state"
                      className="w-full px-4 py-2 border rounded-md bg-gray-50"
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm">{errors.state}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Pincode</label>
                    <input
                      name="pincode"
                      value={form.pincode}
                      onChange={handleChange}
                      maxLength={6}
                      placeholder="6-digit pincode"
                      className="w-full px-4 py-2 border rounded-md bg-gray-50"
                    />
                    {errors.pincode && (
                      <p className="text-red-500 text-sm">{errors.pincode}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-md bg-gray-50"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition">
              Send Message
            </button>

            {sent && (
              <p className="text-green-600 text-center font-medium">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
