"use client";

import { useState } from "react";

export default function InteractiveSection({ heading, items }) {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 md:items-center">

        {/* IMAGE */}
        <div className="
          relative
          w-full
          aspect-[4/3]
          md:aspect-auto
          md:h-[480px]
          rounded-3xl
          overflow-hidden
          shadow-xl
          order-1 md:order-2
        ">
          <img
            key={active}
            src="/hero1.jpg"
            alt={items[active].title}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-10 md:mb-12">
            {heading}
          </h2>

          <div className="space-y-6 md:space-y-8">
            {items.map((item, i) => {
              const isActive = active === i;

              return (
                <button
                  key={item.title}
                  onClick={() => setActive(i)}
                  className="w-full text-left focus:outline-none"
                >
                  <div
                    className={`pb-6 border-b transition-colors duration-300 ${
                      isActive
                        ? "border-slate-900"
                        : "border-slate-200"
                    }`}
                  >
                    {/* TITLE */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                          isActive
                            ? "bg-lime-500"
                            : "bg-slate-300"
                        }`}
                      />
                      <h3
                        className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-slate-900"
                            : "text-slate-500"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* BODY */}
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                        isActive
                          ? "max-h-[400px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-slate-600 leading-relaxed space-y-4">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
