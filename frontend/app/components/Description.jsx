import { MoveRight } from "lucide-react";
export default function Description() {
  return (
  <section className="max-w-6xl mt-20 mx-auto px-10 py-16 bg-green-50 rounded-2xl fade-in">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* IMAGE  */}
    <div
      className="
        order-1 md:order-2
        w-full h-[260px] md:h-[480px]
        rounded-2xl overflow-hidden
        shadow-lg border border-slate-200
      "
    >
      <img
        src="/hero1.jpg"
        alt="Helping communities"
        className="w-full h-full object-cover"
      />
    </div>

    {/* CONTENT  */}
    <div className="order-2 md:order-1">
      <h2 className="text-4xl md:text-4xl font-semibold leading-tight text-slate-800 tracking-tight">
        Welcome to Neurowel Foundation
        <span className="block text-[var(--brand-600)] text-xl ">
          Helping people grow, thrive, and build a better future.
        </span>
      </h2>

      <p className="mt-3 text-lg text-slate-600 leading-relaxed text-justify">
        Neurowel foundation works at the grassroots level to address everyday
        challenges faced by vulnerable communities. From ensuring access to
        food and clothing to supporting education, livelihood skills, and
        mental wellness.<br />We take a holistic approach to social development.
        Our mission is simple yet powerful — to help people grow, thrive,
        and build a better future for themselves and their families.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/about"
          className="
            inline-flex items-center gap-2
            px-6 py-3 rounded-lg text-lg font-medium
            border border-[var(--brand-600)] text-[var(--brand-600)]
            hover:bg-[var(--brand-600)] hover:text-white
            transition-all duration-300 shadow-sm
          "
        >
          <span>Know More About Us</span>
          <MoveRight className="mt-[1px]" />
        </a>
      </div>
    </div>

  </div>
</section>

  );
}
