"use client";

export default function AboutPage() {
  return (
    <>
      <main className="pt-28 ">
        {/* ================= HERO SECTION  ================= */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/about.jpg"
              alt="Neurowel Foundation Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl text-center font-bold text-white drop-shadow-lg">
                About Neurowel Foundation
              </h1>
            </div>
          </div>

          <p className="text-center text-xl mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering communities through clean water, education, healthcare,
            and sustainable development.
          </p>
        </section>

        {/* ================= WHO WE ARE ================= */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="bg-white dark:bg-[#121212] p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Neurowel Foundation is a community-driven nonprofit dedicated to
              uplifting underserved communities through sustainable development,
              education, health awareness, and empowerment programs. Our goal is
              to create opportunities for individuals so they can live a life of
              dignity, growth, and independence.
            </p>
          </div>
        </section>

        {/* ================= IMAGE GALLERY ================= */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Work in Pictures
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="rounded-xl overflow-hidden shadow bg-white dark:bg-[#121212]">
              <img
                src="/hero1.jpg"
                alt="Community Service"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Community Service</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Volunteers supporting families with essential needs.
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="rounded-xl overflow-hidden shadow bg-white dark:bg-[#121212]">
              <img
                src="/hero1.jpg"
                alt="Education Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Education Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Helping children through learning and skill programs.
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="rounded-xl overflow-hidden shadow bg-white dark:bg-[#121212]">
              <img
                src="/hero1.jpg"
                alt="Healthcare Camp"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Healthcare Camps</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Free checkups and wellness awareness drives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LEADERSHIP SECTION ================= */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="bg-white dark:bg-[#121212] rounded-xl p-8 shadow">
            <h2 className="text-3xl font-semibold mb-6">Leadership</h2>
            <h3 className="text-xl font-bold">Nitin Mishra — Founder & Head</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
              Nitin Mishra is a dedicated social visionary with a passion for
              empowering underprivileged communities. His leadership has guided
              Neurowel Foundation toward sustainable and impactful community
              upliftment across India.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
