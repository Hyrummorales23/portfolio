"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <SectionHeading title="Experience & Education" id="experience" />

      <div className="space-y-12">
        {experience.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-surface/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]" />

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-secondary sm:col-span-2">
              {item.period}
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-text-primary">
                <div className="text-lg">{item.title}</div>
                <div className="text-text-secondary mt-1">
                  {item.organization}
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal text-text-secondary">
                {item.description}
              </p>
              {item.tags && (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-muted px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
