import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h4 className="text-xl font-semibold text-white">Neurowel Foundation</h4>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            A nonprofit organization dedicated to empowering communities through
            education, healthcare, clean water, and sustainable development.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Contact Us</h5>
          <ul className="text-sm text-slate-400 space-y-2">
            <li>Email: contact@neurowelfoundation.org</li>
            <li>Phone: +91 1234567890</li>
          
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Quick Links</h5>
          <ul className="text-sm text-slate-400 space-y-2">
            <li><a href="/about" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="/events" className="hover:text-purple-400 transition">Events</a></li>
            <li><a href="/gallery" className="hover:text-purple-400 transition">Gallery</a></li>
            <li><a href="/career" className="hover:text-purple-400 transition">Career</a></li>
            <li><a href="/donate" className="hover:text-purple-400 transition">Donate</a></li>
            <li><a href="/contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Follow Us</h5>
          <div className="flex gap-4 mt-3">

            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-purple-600 transition">
              <Facebook size={18} />
            </a>

            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-purple-600 transition">
              <Instagram size={18} />
            </a>

            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-purple-600 transition">
              <Linkedin size={18} />
            </a>

            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-purple-600 transition">
              <Youtube size={18} />
            </a>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Neurowel Foundation. All rights reserved.
      </div>
    </footer>
  );
}
