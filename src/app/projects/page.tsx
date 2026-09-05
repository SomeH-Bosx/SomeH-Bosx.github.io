import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured case studies in AI application engineering.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Projects"
        kicker="两个完整案例：企业知识库工程，以及个人财务 AI 产品。"
      />
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </PageShell>
  );
}
