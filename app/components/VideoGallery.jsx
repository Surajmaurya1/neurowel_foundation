"use client";
import { useState } from "react";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Impact Story: Clean Water" },
  { id: "ysz5S6PUM-U", title: "Volunteer Highlights" },
];

export default function VideoGallery(){
  const [open, setOpen] = useState(false);
  const [vid, setVid] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl  font-semibold mb-4">Media</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map(v=>(
          <div key={v.id} onClick={()=>{ setVid(v.id); setOpen(true); }} className="cursor-pointer bg-white rounded-lg overflow-hidden shadow">
            <div className="h-56 bg-black/5 flex items-center justify-center">
              <img src="/placeholder.jpg" alt={v.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{v.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-3xl bg-black/90 rounded-lg p-4">
            <div className="text-right">
              <button onClick={()=>setOpen(false)} className="text-white text-xl">×</button>
            </div>
            <div className="mt-2">
              <iframe className="w-full h-96 rounded" src={`https://www.youtube.com/embed/${vid}`} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
