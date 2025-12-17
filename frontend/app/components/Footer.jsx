import { Facebook, Instagram, Linkedin, Youtube, HandHeart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#0b1f33] to-[#081522] text-slate-300 mt-16">

      {/* BACKGROUND ICON */}
      <div className="absolute inset-0 flex items-start justify-start pointer-events-none">
        <HandHeart
          className="w-[220px] h-[220px] md:w-[320px] md:h-80 text-emerald-500/25"
          strokeWidth={1}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h4 className="text-xl font-semibold">
            Neurowel Foundation
          </h4>
          <p className="text-sm mt-3 leading-relaxed">
            A nonprofit organization dedicated to empowering communities through
            education, healthcare, clean water, and sustainable development.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h5 className="text-lg font-semibold mb-3">
            Contact Us
          </h5>
          <ul className="text-sm space-y-2">
            <li>Email: contact@neurowelfoundation.org</li>
            <li>Phone: +91 1234567890</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h5 className="text-lg font-semibold mb-3">
            Quick Links
          </h5>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/" className="hover:text-emerald-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/whatwedo" className="hover:text-emerald-300 transition">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="/ourimpact" className="hover:text-emerald-300 transition">
                Our Impact
              </Link>
            </li>
            <li>
              <Link href="/getinvolved" className="hover:text-emerald-300 transition">
                Get Involved
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-300 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-emerald-300 transition">
                Donate Now
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h5 className="text-lg font-semibold mb-3">
            Follow Us
          </h5>
          <div className="flex gap-4 mt-3">
            <a className="p-2 rounded-full bg-[#0f2a44] hover:bg-emerald-500/80 transition">
              <Facebook size={18} />
            </a>
            <a className="p-2 rounded-full bg-[#0f2a44] hover:bg-emerald-500/80 transition">
              <Instagram size={18} />
            </a>
            <a className="p-2 rounded-full bg-[#0f2a44] hover:bg-emerald-500/80 transition">
              <Linkedin size={18} />
            </a>
            <a className="p-2 rounded-full bg-[#0f2a44] hover:bg-emerald-500/80 transition">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative z-10 border-t border-[#14324d] py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Neurowel Foundation. All rights reserved.
      </div>
    </footer>
  );
}
