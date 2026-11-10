import { projects } from "@/data/projects";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <SectionHeading title="Featured Projects" id="projects" />
      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
