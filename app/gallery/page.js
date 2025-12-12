"use client";

export default function GalleryPage() {
  return (
    <main className="pt-28 pb-20">

      {/* ================= HERO BANNER ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/gallery.jpg"
            alt="Gallery Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Gallery
            </h1>
          </div>
        </div>

        <p className="text-center text-xl mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our moments of impact through pictures and videos from Neurowel Foundation activities.
        </p>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Images</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Image Cards */}
          {[
            {
              img: "/placeholder.jpg",
              title: "Clean Water Drive",
              desc: "Volunteers installing water filters in rural communities."
            },
            {
              img: "/placeholder.jpg",
              title: "Education Support",
              desc: "Children receiving educational kits and learning support."
            },
            {
              img: "/placeholder.jpg",
              title: "Healthcare Awareness Camp",
              desc: "Free medical checkups and health awareness workshops."
            },
            {
              img: "/placeholder.jpg",
              title: "Women Empowerment Workshop",
              desc: "Training programs designed to empower rural women."
            },
            {
              img: "/placeholder.jpg",
              title: "Tree Plantation Drive",
              desc: "Volunteers planting saplings for environmental restoration."
            },
            {
              img: "/placeholder.jpg",
              title: "Community Engagement",
              desc: "Local families participating in development programs."
            },
          ].map((item, i) => (
            <div 
              key={i}
              className="rounded-xl bg-white dark:bg-[#121212] overflow-hidden shadow hover:shadow-lg transition"
            >
              <img 
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= VIDEO GALLERY ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Videos</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Video Cards */}
          {[
            {
              video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              title: "Impact Story",
              desc: "How clean water transformed a village community."
            },
            {
              video: "https://www.youtube.com/embed/ysz5S6PUM-U",
              title: "Volunteer Moments",
              desc: "A glimpse of our volunteers helping on the field."
            },
            {
              video: "https://www.youtube.com/embed/oHg5SJYRHA0",
              title: "Awareness Program",
              desc: "Educational sessions conducted at local schools."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white dark:bg-[#121212] shadow hover:shadow-lg transition p-4"
            >
              <iframe
                className="w-full h-48 rounded-md"
                src={item.video}
                allowFullScreen
              ></iframe>

              <h3 className="font-semibold text-lg mt-3">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
