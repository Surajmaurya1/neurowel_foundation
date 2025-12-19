"use client";

export default function ContentImageSection({
  title,
  paragraphs = [],
  points = [],
  image,
  imageAlt = "",
  reverse = false,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-14">
      <div className="grid md:grid-cols-2 gap-10 items-stretch">

        {/* IMAGE */}
        <div
          className={`
            relative overflow-hidden rounded-2xl shadow-sm
            border border-slate-100 bg-white h-full
            order-1
            ${reverse ? "md:order-1" : "md:order-2"}
          `}
        >
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
        </div>

        {/* CONTENT */}
        <div
          className={`
            rounded-2xl bg-white shadow-sm border border-slate-100
            p-7 md:p-10 h-full
            order-2
            ${reverse ? "md:order-2" : "md:order-1"}
          `}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900">
            {title}
          </h2>

          {/* PARAGRAPHS */}
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="mt-4 text-slate-700 leading-relaxed"
            >
              {text}
            </p>
          ))}

          {/* BULLET POINTS */}
          {points.length > 0 && (
            <ul className="mt-5 space-y-3 text-slate-700">
              {points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-lime-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </section>
  );
}



