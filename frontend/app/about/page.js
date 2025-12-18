"use client";
import ContentImageSection from "@/app/components/ContentImageSection";

export default function AboutPage() {
  return (
    <main className="pt-28 bg-linear-to-b from-slate-50 via-white to-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="h-80 md:h-[420px]">
            <img
              src="/about.jpg"
              alt="Neurowel Foundation"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-3xl">
              <h1 className="mt-4 text-3xl md:text-6xl font-bold text-white leading-tight">
                Neurowel Foundation
              </h1>

              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Serving communities. Empowering lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <ContentImageSection
        title="Who We Are"
        image="/hero1.jpg"
        imageAlt="Community support"
        paragraphs={[
          "Neurowel Foundation was founded with a strong commitment to serve individuals and families facing social and economic challenges.",
          "Through grassroots initiatives and community engagement, we work closely with those we serve to understand real needs and provide practical solutions.",
          "We believe empowered communities are the foundation of lasting progress.",
        ]}
      />

      {/* VISION */}
      <ContentImageSection
        title="Our Vision"
        image="/hero1.jpg"
        reverse
        paragraphs={[
          "A world where every individual has access to basic needs, equal opportunities, and dignity.",
        ]}
        points={[
          "Empowered individuals who grow and thrive",
          "Communities prioritising mental well-being",
          "An inclusive society free from inequality",
        ]}
      />

      {/* MISSION */}
      <ContentImageSection
        title="Our Mission"
        image="/hero1.jpg"
        imageAlt="Mission in action"
        paragraphs={[
          "Our mission is to create positive and lasting change by addressing everyday challenges faced by vulnerable communities.",
          "We focus on practical actions that improve quality of life and promote independence.",
        ]}
        points={[
          "Food security through sustainable programs",
          "Essential clothing and daily necessities",
          "Education and skill development",
        ]}
      />

      {/* APPROACH */}
      <ContentImageSection
        title="Our Approach"
        reverse
        image="/hero1.jpg"
        imageAlt="Our Approach"
        paragraphs={[
          "Our approach is community-driven and based on trust, participation, and transparency. We listen carefully to local voices and involve community members at every stage of our work.By building strong relationships and working collaboratively, we ensure our initiatives are relevant, sustainable, and impactful over the long term.",
        ]}
      />
    </main>
  );
}
