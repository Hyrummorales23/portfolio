"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" className="pt-24 lg:pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Building digital experiences that perform.
        </h2>
        <div className="text-lg text-text-secondary leading-relaxed max-w-2xl space-y-4">
          <p>
            I am a software development student at BYU-Pathway Worldwide,
            holding an Associate of Applied Science and three certificates. I am
            currently pursuing my Bachelors degree while preparing for
            entry-level software development roles.
          </p>
          <p>
            I specialize in building modern, full-stack applications using
            Next.js, React, and TypeScript. I love turning complex problems into
            clean, intuitive user experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
