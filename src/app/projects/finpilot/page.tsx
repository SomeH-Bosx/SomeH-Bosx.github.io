import type { Metadata } from "next";

import { ArchitectureFlow } from "@/components/architecture-flow";
import { CaseList } from "@/components/case-list";
import { CaseSection } from "@/components/case-section";
import { ProjectHero } from "@/components/project-hero";
import { ProjectVideo } from "@/components/project-video";
import { StatCards } from "@/components/stat-cards";
import { finpilotCase } from "@/data/finpilot";
import { getProject } from "@/data/projects";
import { site } from "@/data/site";

const project = getProject("finpilot");

export const metadata: Metadata = {
  title: `${project.title} · ${site.name}`,
  description: project.description,
};

export default function FinpilotProjectPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <ProjectHero
        project={project}
        quote={finpilotCase.quote}
        meta={finpilotCase.meta}
      />
      <div
        id="process"
        className="mt-16 space-y-16 scroll-mt-14 sm:mt-20 sm:space-y-20"
      >
        <CaseSection index="01" title="用户痛点">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {finpilotCase.pain}
          </p>
        </CaseSection>
        <CaseSection index="02" title="用户画像">
          <StatCards items={finpilotCase.persona} className="lg:grid-cols-3" />
        </CaseSection>
        <CaseSection index="03" title="PRD 摘要">
          <StatCards items={finpilotCase.prd} />
        </CaseSection>
        <CaseSection index="04" title="功能流程">
          <ArchitectureFlow steps={finpilotCase.featureFlow} />
        </CaseSection>
        <CaseSection index="05" title="AI 工作流">
          <ArchitectureFlow steps={finpilotCase.aiWorkflow} />
        </CaseSection>
        <CaseSection index="06" title="Demo 视频">
          <ProjectVideo src={project.video} layout="portrait" />
        </CaseSection>
        <CaseSection index="07" title="下一步">
          <CaseList items={finpilotCase.next} />
        </CaseSection>
      </div>
    </main>
  );
}
