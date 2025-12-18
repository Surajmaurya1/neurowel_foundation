import { Users, Handshake, FolderKanban } from "lucide-react";

export default function Stats() {
  const stats = [
    { label: "People Helped", value: "1,000+", icon: Users },
    { label: "Volunteers", value: "50+", icon: Handshake },
    { label: "Projects", value: "10+", icon: FolderKanban },
  ];

  return (
    <section className="max-w-7xl mx-auto px-16 py-20">
      {/* HEADING */}
      <h1 className="text-3xl md:text-4xl font-bold text-center tracking-tight text-slate-900">
        OUR IMPACT
      </h1>

      <h2 className="mt-3 text-lg md:text-xl text-center text-slate-700 font-medium">
        Real numbers. Real lives changed.
      </h2>

      {/* STATS CARDS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* BACKGROUND IMAGE */}
              <img
                src="/hero1.jpg"
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
             <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-black/30" />


              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                <Icon className="w-10 h-10 text-white mb-3" />

                <div className="text-4xl font-bold text-white">
                  {item.value}
                </div>

                <div className="mt-1 text-base text-slate-200 tracking-wide">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
