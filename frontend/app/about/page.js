import InteractiveSection from "@/app/components/InteractiveSection";

export default function AboutPage() {
  const aboutItems = [
    {
      title: "Who We Are",
      content: (
        <>
          <p>
            Neurowel Foundation was founded with a strong commitment to serve
            individuals and families facing social and economic challenges.
            Many people struggle daily with access to food, clothing, education,
            emotional support, and income opportunities.
          </p>
          <p>
            We aim to bridge these gaps through well-structured programs that
            restore dignity, confidence, and hope.
          </p>
          <p>
            We believe empowered communities are the foundation of lasting
            progress.
          </p>
        </>
      ),
    },
    {
      title: "Our Vision",
      content: (
        <>
          <p>
            A world where everyone has access to basic needs and dignity.
          </p>
          <ul className="mt-4 space-y-3">
            <li>• Empowered individuals who can grow and thrive</li>
            <li>• Communities that prioritise mental health and well-being</li>
            <li>• An inclusive society free from inequality and exclusion</li>
          </ul>
        </>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <>
          <p>
            We are committed to serving with purpose and transforming lives by:
          </p>
          <ul className="mt-4 space-y-3">
            <li>• Promoting food security through sustainable cultivation programs</li>
            <li>• Providing essential clothing to those in need</li>
            <li>• Supporting education and skill development</li>
            <li>• Offering mental wellness and emotional support</li>
            <li>• Encouraging livelihood and income-generating activities</li>
            <li>• Partnering with communities for long-term solutions</li>
          </ul>
        </>
      ),
    },
    {
      title: "Our Approach",
      content: (
        <>
          <p>
            Our approach is community-centric, participatory, and impact-driven.
            We work closely with local communities to understand their needs and
            design solutions that are sustainable, scalable, and respectful of
            local values.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="pt-28 bg-linear-to-b from-slate-50 via-white to-white">
      {/* HERO SECTION  */}
      <section className="max-w-7xl mx-auto px-6 ">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="h-80 md:h-[420px]">
            <img
              src="/about.jpg"
              alt="Neurowel Foundation"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-3xl">
              <h1 className="mt-4 text-3xl md:text-7xl font-bold text-white">
                About Neurowel Foundation
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <InteractiveSection items={aboutItems} />
{/* ================= BEHIND THE FOUNDATION ================= */}
<section className="max-w-7xl mx-auto px-6 md:px-10 py-6">
  <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">

    {/* TEXT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
        Behind the Foundation
      </h2>

      <h3 className="mt-6 text-xl md:text-2xl font-medium text-slate-800">
        Nitin Mishra
        <span className="block text-base text-slate-500 mt-1">
          Founder & Head, Neurowel Foundation
        </span>
      </h3>

      <p className="mt-6 text-slate-600 text-lg leading-relaxed">
        Neurowel Foundation was founded by Nitin Mishra with a clear and
        compassionate vision — to address the everyday challenges faced by
        individuals and families who lack access to basic necessities and
        emotional support.
      </p>

      <p className="mt-4 text-slate-600 text-lg leading-relaxed">
        Through personal experiences and close observation of community
        struggles, Nitin recognised the need for an organisation that goes
        beyond short-term aid. The foundation was created to focus on dignity,
        self-reliance, and long-term transformation rather than temporary relief.
      </p>

      <p className="mt-4 text-slate-600 text-lg leading-relaxed">
        Under his leadership, Neurowel Foundation works with empathy,
        responsibility, and a deep commitment to empowering communities through
        food security, education, mental well-being, and sustainable livelihood
        initiatives.
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
      <img
        src="/hero1.jpg"
        alt="Nitin Mishra - Founder of Neurowel Foundation"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>

  </div>
</section>



    </main>
  );
}
