// data/site.ts
import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "[Your Name]",
  tagline: "Software developer building clean, performant web experiences.",
  email: "your-email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf", // Place a resume.pdf in /public later
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
