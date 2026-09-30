import type { Metadata } from "next";

import { ArchitectureFlow } from "@/components/architecture-flow";
import { CaseList } from "@/components/case-list";
import { CaseSection } from "@/components/case-section";
import { ProjectHero } from "@/components/project-hero";
import { ProjectVideo } from "@/components/project-video";
import { StatCards } from "@/components/stat-cards";
import { economicAnalysisCase } from "@/data/economic-analysis";
import { getProject } from "@/data/projects";

const project = getProject("economic-analysis");

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
};

export default function EconomicAnalysisProjectPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <ProjectHero
        project={project}
        quote={economicAnalysisCase.quote}
        meta={economicAnalysisCase.meta}
      />

      <div
        id="process"
        className="mt-16 space-y-16 scroll-mt-14 sm:mt-20 sm:space-y-20"
      >
        {/* 01 · 业务问题 */}
        <CaseSection index="01" title="业务问题">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {economicAnalysisCase.pain}
          </p>
        </CaseSection>

        {/* 02 · 分析对象 */}
        <CaseSection index="02" title="分析对象">
          <StatCards
            items={economicAnalysisCase.persona}
            className="lg:grid-cols-3"
          />
        </CaseSection>

        {/* 03 · 分析框架 */}
        <CaseSection index="03" title="分析框架">
          <StatCards items={economicAnalysisCase.analysisModules} />
        </CaseSection>

        {/* 04 · 数据分析流程 */}
        <CaseSection index="04" title="数据分析流程">
          <ArchitectureFlow steps={economicAnalysisCase.featureFlow} />
        </CaseSection>

        {/* 05 · 分析方法 */}
        <CaseSection index="05" title="分析方法">
          <ArchitectureFlow steps={economicAnalysisCase.analysisWorkflow} />
        </CaseSection>

        {/* 06 · Demo */}
        <CaseSection index="06" title="Demo 视频">
          <ProjectVideo src={project.video} layout="landscape" />
        </CaseSection>

        {/* 07 · 下一步 */}
        <CaseSection index="07" title="下一步">
          <CaseList items={economicAnalysisCase.next} />
        </CaseSection>
      </div>
    </main>
  );
}