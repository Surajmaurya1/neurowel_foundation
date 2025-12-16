export default function Description() {
  return (
    <section className="max-w-6xl mt-20 mx-auto px-6 py-20 fade-in">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-4xl font-semibold leading-tight text-slate-800 tracking-tight">
            Bringing care, comfort, and hope
            <span className="block text-(--brand-600)] italic">
              to everyone in need.
            </span>
          </h2>

          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            We stand with people during their hardest moments. Together, we help
            families find support, strength, and a brighter tomorrow — one step
            at a time.
          </p>

          <div className="mt-5">
            <a
              href="about"
              className="px-8 py-3 border border-(--brand-600) text-(--brand-600) rounded-lg text-lg font-medium hover:bg-(--brand-600) hover:text-white transition-all duration-300 shadow-sm"
            >
              Learn how we make a difference
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <img
            src="/hero1.jpg"
            alt="Helping communities"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
