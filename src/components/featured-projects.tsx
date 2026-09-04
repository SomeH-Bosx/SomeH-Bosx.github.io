import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-14 border-t border-white/5"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="flex items-baseline justify-between gap-4">
          <h2
            id="projects-heading"
            className="text-sm font-medium tracking-wide text-muted-foreground"
          >
            Featured Projects
          </h2>
          <p className="text-sm text-muted-foreground">2 selected works</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
