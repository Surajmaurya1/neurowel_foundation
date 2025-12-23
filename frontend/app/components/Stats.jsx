import { Users, Handshake, FolderKanban } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "1,000+",
      title: "Meals Distributed",
      desc: "For families and individuals.",
      image: "/hero1.jpg",
    },
    {
      value: "50+",
      title: "Volunteers Engaged",
      desc: "Volunteers helping our cause.",
      image: "/hero1.jpg",
    },
    {
      value: "10+",
      title: "Projects",
      desc: "Projects supporting healthcare & crisis.",
      image: "/hero1.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
      {/* HEADING */}
      <h1 className="text-3xl md:text-4xl font-bold text-center tracking-tight text-slate-900">
        OUR IMPACT
      </h1>

      <h2 className="mt-3 text-lg md:text-xl text-center text-slate-700 font-medium">
        Real numbers. Real lives changed.
      </h2>

      {/* STATS CARDS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* BACKGROUND IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-6 text-left">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {item.value}
              </div>

              <div className="mt-2 text-lg font-semibold text-white">
                {item.title}
              </div>

              <div className="mt-1 text-sm text-slate-200">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
