// data/site.ts
import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Hyrum Morales",
  tagline:
    "Full-stack software developer building clean, performant web experiences.",
  email: "hyrummorales23@gmail.com",
  github: "https://github.com/hyrummorales23",
  linkedin: "https://www.linkedin.com/in/hyrum-morales-33ab711a0/",
  resumeUrl: "/resume.pdf", // Place a resume.pdf in /public later
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
