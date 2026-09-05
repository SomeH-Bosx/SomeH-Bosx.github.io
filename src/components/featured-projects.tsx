import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-14 border-t border-white/5"
    >
      <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
        <SectionHeader
          id="projects-heading"
          title="Featured Projects"
          kicker="两个能讲清楚的作品：一个工程案例，一个产品案例。"
          aside="2 selected works"
        />
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
