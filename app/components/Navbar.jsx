"use client";
import Link from "next/link";
import { useState } from "react";
import { HandHeart } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between relative">
        {/* LOGO */}
        <Link href="/" className="flex shrink-0">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Neurowel Foundation"
              className="w-12 h-12 md:w-12 md:h-12 object-contain"
            />
          </div>

          <div className="flex flex-col pl-2 justify-center">
            <span className="text-lg md:text-xl  font-semibold leading-none">
              Neurowel
            </span>
            <span className="text-xs md:text-sm text-slate-700 leading-none">
              Foundation
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm hover:text-green-800">
            Home
          </Link>
          <Link href="/about" className="text-sm hover:text-green-800">
            About Us
          </Link>
          <Link href="/whatwedo" className="text-sm hover:text-green-800">
            What We Do
          </Link>
          <Link href="/ourimpact" className="text-sm hover:text-green-800">
            Our Impact
          </Link>
          <Link href="/getinvolved" className="text-sm hover:text-green-800">
            Get Involved
          </Link>

          <Link
            href="/contact"
            className="border border-green-900 text-green-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 hover:text-white transition"
          >
            Contact Us
          </Link>

          <Link
            href="/donate"
            className="group bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-900 transition"
          >
            <span className="inline-flex items-center gap-2">
              Donate Now
              <HandHeart
                size={18}
                className="transition-transform duration-200 group-hover:scale-125"
              />
            </span>
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md"
        >
          <svg width="22" height="22" stroke="currentColor" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white/95">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="py-2">
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2">
              About Us
            </Link>
            <Link
              href="/whatwedo"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              What We Do
            </Link>
            <Link
              href="/ourimpact"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Our Impact
            </Link>
            <Link
              href="/getinvolved"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Get Involved
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="border border-green-900 text-green-900 px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-green-800 hover:text-white transition"
            >
              Contact Us
            </Link>

            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="group bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-green-900 transition"
            >
              <span className="inline-flex items-center justify-center gap-2">
                Donate Now
                <HandHeart
                  size={18}
                  className="transition-transform duration-200 group-hover:scale-125"
                />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
