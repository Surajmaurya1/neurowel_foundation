"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Utensils,
  Shirt,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Users,
} from "lucide-react";

const focusAreas = [
  {
    title: "Food Security & Sustainable Growth",
    desc:
      "Empowering families through access to nutritious food and sustainable farming practices.",
    icon: Utensils,
  },
  {
    title: "Clothing Distribution",
    desc:
      "Ensuring dignity and protection through organized clothing support programs.",
    icon: Shirt,
  },
  {
    title: "Education Support",
    desc:
      "Helping children and youth access quality education for a better future.",
    icon: GraduationCap,
  },
  {
    title: "Livelihood & Skill Development",
    desc:
      "Creating pathways to employment and self-reliance through skill-building.",
    icon: Briefcase,
  },
  {
    title: "Mental Wellness & Emotional Care",
    desc:
      "Supporting emotional health and resilience within vulnerable communities.",
    icon: HeartHandshake,
  },
  {
    title: "Community Development",
    desc:
      "Strengthening communities through inclusive and sustainable initiatives.",
    icon: Users,
  },
];

export default function FocusAreasScroll() {
  return (
    <section className="bg-black mt-20 text-white">
      {/* BIG INTRO HEADING */}
      <div className="h-screen flex items-center max-w-7xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl ml-5 font-semibold leading-tight">
          Our Focus
          <br />
          <span className="text-green-400">Areas</span>
        </h1>
      </div>

      {/* SCROLL CARDS */}
      {focusAreas.map((item, index) => (
        <ScrollCard key={index} item={item} />
      ))}
    </section>
  );
}

function ScrollCard({ item }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Image motion */
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const blur = useTransform(
    scrollYProgress,
    [0.15, 0.4],
    ["blur(12px)", "blur(0px)"]
  );

  /* Text reveal */
  const opacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.45], [40, 0]);

  const Icon = item.icon;

  return (
    <section ref={ref} className="relative h-screen">
      {/* IMAGE WRAPPER WITH PADDING */}
      <div className="absolute inset-0 p-20">
        <motion.img
          src="/hero2.jpg"
          alt={item.title}
          style={{ scale, y, filter: blur }}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* CONTENT */}
      <motion.div
        style={{ opacity, y: textY }}
        className="
          absolute z-10
          bottom-6 left-6 right-6
          md:bottom-24 md:left-24 md:right-auto
          md:max-w-2xl
        "
      >

        <h2 className="text-4xl md:text-6xl text-green-400 font-semibold leading-tight">
          {item.title}
        </h2>

        <p className="mt-2 text-lg md:text-xl text-white/80 leading-relaxed">
          {item.desc}
        </p>
      </motion.div>
    </section>
  );
}
