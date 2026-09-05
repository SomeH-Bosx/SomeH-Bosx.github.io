import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { SectionFrame } from "@/components/section-frame";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <SectionFrame id="projects" labelledBy="projects-heading">
      <FadeIn delay={80}>
        <SectionHeader
          id="projects-heading"
          title="Featured Projects"
          aside="2 selected works"
        />
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </FadeIn>
    </SectionFrame>
  );
}
