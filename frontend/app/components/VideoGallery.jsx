"use client";
import { useState } from "react";
import { Play, X } from "lucide-react";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Impact Story: Clean Water" },
  { id: "ysz5S6PUM-U", title: "Volunteer Highlights" },
];

export default function VideoGallery() {
  const [open, setOpen] = useState(false);
  const [vid, setVid] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-16 py-20">
      {/* HEADER */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Media & Stories
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Real moments from our work in communities and volunteer initiatives.
        </p>
      </div>

      {/* VIDEO GRID */}
      <div className="grid gap-6 sm:grid-cols-2">
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => {
              setVid(v.id);
              setOpen(true);
            }}
            className="text-left bg-white rounded-2xl overflow-hidden
                       border border-slate-200 shadow-sm"
          >
            {/* THUMB */}
            <div className="relative h-56 overflow-hidden">
              <img
                src="/placeholder.jpg"
                alt={v.title}
                className="w-full h-full object-cover"
              />

              {/* PLAY ICON */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-green-700 ml-1" />
                </div>
              </div>
            </div>

            {/* TITLE */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-800">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Watch video
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-xl">
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9
                         bg-white/90 rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5 text-slate-900" />
            </button>

            {/* VIDEO */}
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${vid}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
