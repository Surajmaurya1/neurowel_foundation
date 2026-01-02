import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  HandHeart,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden  bg-linear-to-b from-[#071a2f] via-[#081f35] to-[#06182a] text-slate-200 mt-20">

      {/* SOFT GREEN GLOW */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] pointer-events-none" />

      {/* BACKGROUND ICON */}
      <div className="absolute inset-0 flex items-end justify-end pr-10 pb-10 pointer-events-none">
        <HandHeart
          className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] text-emerald-500/20"
          strokeWidth={1}
        />
      </div>

      {/* MAIN CONTENT */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4 items-start">


        {/* BRAND */}
        <div>
          <h4 className="text-xl font-semibold tracking-tight text-white">
            Neurowel Foundation
          </h4>
          <p className="text-sm mt-4 leading-relaxed text-slate-300">
            Empowering communities through education, healthcare, clean water,
            and sustainable development initiatives.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-emerald-500/90 hover:text-black transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
       <div className="ml-0 md:ml-8">

          <h5 className="text-base font-semibold text-white mb-4">
            Contact
          </h5>
          <ul className="text-sm space-y-3 text-slate-300">
           <li>
  <span className="text-slate-400">Email:</span>{" "}
  <a
    href="mailto:contact@neurowelfoundation.org"
    className="hover:text-emerald-400 underline-offset-2 hover:underline transition"
  >
    contact@neurowelfoundation.org
  </a>
</li>

            <li>
              <span className="text-slate-400">Phone:</span>{" "}
            <a
    href="tel:+919999999999"
    className="hover:text-emerald-400 underline-offset-2 hover:underline transition"
  >
    +91 99999 99999
  </a>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
      <div className="ml-0 md:ml-16">

          <h5 className="text-base font-semibold text-white mb-4">
            Explore
          </h5>
          <ul className="text-sm space-y-3">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["What We Do", "/whatwedo"],
              ["Our Impact", "/ourimpact"],
              ["Get Involved", "/getinvolved"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-slate-300 hover:text-emerald-400 transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* DONATE CTA */}
        <div>
          <h5 className="text-base font-semibold text-white mb-4">
            Support Our Mission
          </h5>

          <p className="text-sm text-slate-300 leading-relaxed mb-4">

            Your contribution helps us create long-term change in communities
            that need it most.
          </p>

          <Link
            href="/donate"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl
                       bg-emerald-500 text-black font-semibold
                       hover:bg-emerald-600 transition"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="relative z-10 border-t border-white/10" />

      {/* COPYRIGHT */}
      <div className="relative z-10 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Neurowel Foundation. All rights reserved.
      </div>
    </footer>
  );
}
