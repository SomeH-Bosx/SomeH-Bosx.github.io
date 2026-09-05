import type { Metadata } from "next";

import { ArchitectureFlow } from "@/components/architecture-flow";
import { CaseList } from "@/components/case-list";
import { CaseSection } from "@/components/case-section";
import { ProjectHero } from "@/components/project-hero";
import { ProjectVideo } from "@/components/project-video";
import { getProject } from "@/data/projects";
import { ragCase } from "@/data/rag";

const project = getProject("rag");

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function RagProjectPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <ProjectHero
        project={project}
        quote={ragCase.quote}
        meta={ragCase.meta}
      />
      <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
        <CaseSection index="01" title="Problem">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {ragCase.problem}
          </p>
        </CaseSection>
        <CaseSection index="02" title="Solution">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {ragCase.solution}
          </p>
        </CaseSection>
        <CaseSection index="03" title="Architecture">
          <ArchitectureFlow steps={ragCase.architecture} />
        </CaseSection>
        <CaseSection index="04" title="Demo Video">
          <ProjectVideo src={project.video} />
        </CaseSection>
        <CaseSection index="05" title="Reflection">
          <CaseList items={ragCase.reflections} />
        </CaseSection>
      </div>
    </main>
  );
}
