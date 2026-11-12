// lib/types.ts
// This is our "schema" — the shape of all our data.
// Every component that consumes data will import types from here.

export interface Project {
  id: string;
  title: string;
  tagline: string; // Short one-liner shown under the title
  description: string; // Longer description
  problem: string; // Case study: What problem did you solve?
  solution: string; // Case study: How did you solve it?
  techStack: string[];
  imageUrl: string; // e.g. "/images/project-1.png"
  liveUrl?: string; // Optional live demo link
  linkText?: string; // <-- Add this (e.g., "Watch Demo", "Live Demo")
  linkType?: "link" | "video";
  githubUrl?: string; // Optional repo link
  featured?: boolean; // Highlight on top?
}

export interface ExperienceItem {
  id: string;
  title: string; // e.g. "Associate of Applied Science"
  organization: string; // e.g. "BYU-Pathway Worldwide"
  period: string; // e.g. "2022 — 2024"
  description: string;
  tags?: string[]; // e.g. ["Software Development", "Web Development"]
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  navigation: { label: string; href: string }[];
}
