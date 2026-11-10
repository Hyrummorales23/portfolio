import { siteConfig } from "@/data/site";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"; // Changed to react-icons
import Link from "next/link"; // Imported Next.js Link

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24 px-6 md:px-12 lg:px-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          {/* Use Link instead of <a> */}
          <Link href="/">{siteConfig.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-text-primary sm:text-xl">
          Software Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-text-secondary">
          {siteConfig.tagline}
        </p>

        <nav className="hidden lg:block mt-16">
          <ul className="flex flex-col gap-4">
            {siteConfig.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group flex items-center py-1 text-sm font-bold uppercase tracking-widest text-text-secondary transition-colors hover:text-text-primary"
                >
                  <span className="mr-4 h-px w-8 bg-text-secondary transition-all group-hover:w-16 group-hover:bg-text-primary"></span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-5">
        <li>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FiGithub size={24} />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FiLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-text-secondary hover:text-accent transition-colors"
          >
            <FiMail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
