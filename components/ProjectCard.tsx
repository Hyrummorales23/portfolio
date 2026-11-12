"use client";

import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import { FiGithub, FiYoutube } from "react-icons/fi"; // Use this instead of Github
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col lg:flex-row gap-8 bg-surface p-6 md:p-8 rounded-3xl transition-all hover:bg-surface/80 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 aspect-video rounded-xl bg-background overflow-hidden relative">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
            [Screenshot goes here]
          </div>
        )}
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-accent text-sm font-medium mb-4">
          {project.tagline}
        </p>

        <div className="space-y-4 mb-6 text-sm text-text-secondary leading-relaxed">
          <p>
            <strong className="text-text-primary">Problem:</strong>{" "}
            {project.problem}
          </p>
          <p>
            <strong className="text-text-primary">Solution:</strong>{" "}
            {project.solution}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="text-xs font-semibold tracking-wider text-text-secondary uppercase"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
            >
              <FiGithub size={18} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
            >
              {/* Show Video Icon if it's a video, otherwise External Link */}
              {project.linkType === "video" ? (
                <FiYoutube size={18} />
              ) : (
                <ExternalLink size={18} />
              )}
              {project.linkText || "Live Demo"}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
