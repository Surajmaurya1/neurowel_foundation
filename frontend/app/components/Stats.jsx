import { Users, Handshake, FolderKanban, Wallet } from "lucide-react";

export default function Stats() {
  const stats = [
    { label: "People Helped", value: "1,000+", icon: Users },
    { label: "Volunteers", value: "50+", icon: Handshake },
    { label: "Projects", value: "10+", icon: FolderKanban },
    
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
        OUR IMPACT
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="group rounded-2xl bg-white shadow-md border border-slate-200 p-6 transition"
            >
              {/* Icon */}
              <Icon className="w-8 h-8 text-green-600 mb-3" />

              {/* Value */}
              <div className="text-3xl font-semibold text-green-600">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-sm text-slate-500 mt-1">{item.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
