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
            Empowering communities through clean water, quality education,
            accessible healthcare, and sustainable development. Neurowel
            Foundation works at the grassroots level to support families and
            create long-lasting improvements in health, learning, and everyday
            living conditions.
          </p>
        </section>

        {/* ================= WHO WE ARE ================= */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="bg-white dark:bg-[#121212] p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Neurowel Foundation is a community-driven nonprofit organization
              committed to improving the lives of underserved communities
              through sustainable development initiatives. Our work focuses on
              key areas such as education, healthcare awareness, access to clean
              water, and community empowerment.
              <br />
              <br />
              We believe that meaningful change begins with understanding local
              challenges and working closely with communities to address them.
              By collaborating with families, volunteers, and local leaders, we
              design programs that are practical, inclusive, and focused on
              long-term impact. Our goal is to help individuals build stable,
              independent, and dignified lives for themselves and future
              generations.
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
                  Volunteers working closely with local families to provide
                  essential support, resources, and everyday assistance.
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
                  Supporting children through education programs, learning
                  activities, and basic skill development initiatives.
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
                  Organizing healthcare camps to offer free checkups, basic
                  medical guidance, and wellness awareness for communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LEADERSHIP SECTION ================= */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <div className="bg-white dark:bg-[#121212] rounded-xl p-8 shadow">
            <h2 className="text-3xl font-semibold mb-6">Leadership</h2>
            <h3 className="text-xl font-bold">
              Nitin Mishra — Founder & Head
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
              Nitin Mishra is the Founder and Head of Neurowel Foundation, with a
              strong commitment to social development and community welfare. His
              work is guided by the belief that access to education, healthcare,
              and basic resources should be available to everyone, regardless of
              their background.
              <br />
              <br />
              Under his leadership, Neurowel Foundation has grown into a trusted
              organization that values transparency, community participation,
              and responsible action. His focus remains on building long-term
              solutions that create meaningful and lasting change across
              communities.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
