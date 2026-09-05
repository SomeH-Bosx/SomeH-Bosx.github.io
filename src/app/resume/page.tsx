import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CompetitionCards } from "@/components/competition-cards";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";
import { ResumeDownloads } from "@/components/resume-downloads";
import { ResumeProjectList } from "@/components/resume-project-list";
import { SkillGrid } from "@/components/skill-grid";
import { StatCards } from "@/components/stat-cards";
import { resumeAbout, resumeSkillMatrix } from "@/data/resume";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: site.about,
};

function ResumeBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-10 sm:mt-12">
      <h2
        id={id}
        className="text-sm font-medium tracking-wide text-muted-foreground"
      >
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <PageShell>
      <PageHeader
        title="Resume"
        kicker={`${site.role} · ${site.brand} · ${site.location}`}
      />

      <ResumeBlock id="about-heading" title="About">
        <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            {site.tagline} {site.about}
          </p>
          {resumeAbout.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </ResumeBlock>

      <ResumeBlock id="education-heading" title="Education">
        <StatCards items={site.education} className="lg:grid-cols-4" />
      </ResumeBlock>

      <ResumeBlock id="skills-heading" title="Core Skills">
        <SkillGrid groups={resumeSkillMatrix} />
      </ResumeBlock>

      <ResumeBlock id="projects-heading" title="Projects">
        <ResumeProjectList />
      </ResumeBlock>

      <ResumeBlock id="competitions-heading" title="Competitions">
        <CompetitionCards detailed />
      </ResumeBlock>

      <ResumeBlock id="download-heading" title="Download Resume">
        <ResumeDownloads />
      </ResumeBlock>
    </PageShell>
  );
}
