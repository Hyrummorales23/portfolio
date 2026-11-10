"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  id?: string;
}

export default function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12"
    >
      <h2
        id={id}
        className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary"
      >
        {title}
      </h2>
    </motion.div>
  );
}
