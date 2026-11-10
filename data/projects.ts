// data/projects.ts
import { Project } from "@/lib/types";

// Add a new project, append an object here.
// The Projects view will automatically render it.
export const projects: Project[] = [
  {
    id: "project-1",
    title: "[Project Title]",
    tagline: "[Short one-liner about the project]",
    description:
      "[A short paragraph describing what the project does and who it's for.]",
    problem:
      "[Describe the problem you were solving. What was missing or broken?]",
    solution:
      "[Describe the approach you took. What was your architecture, and why?]",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/project-1.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-1",
    featured: true,
  },
  {
    id: "project-2",
    title: "[Project Title]",
    tagline: "[Short one-liner about the project]",
    description: "[Description of project 2.]",
    problem: "[Problem statement.]",
    solution: "[Solution statement.]",
    techStack: ["React", "Node.js", "PostgreSQL"],
    imageUrl: "/images/project-2.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-2",
  },
  {
    id: "project-3",
    title: "[Project Title]",
    tagline: "[Short one-liner about the project]",
    description: "[Description of project 3.]",
    problem: "[Problem statement.]",
    solution: "[Solution statement.]",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/project-3.png",
    githubUrl: "https://github.com/yourusername/project-3",
  },
];
