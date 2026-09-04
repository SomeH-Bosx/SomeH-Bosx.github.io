import type { Metadata } from "next";

import { SkillGrid } from "@/components/skill-grid";
import { StatCards } from "@/components/stat-cards";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About · ${site.name}`,
  description: site.tagline,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <p className="text-sm text-muted-foreground">{site.status}</p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
        About
      </h1>
      <p className="mt-3 text-muted-foreground">
        {site.name} · {site.role} · {site.location}
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {site.tagline}
      </p>

      <section aria-labelledby="education-heading" className="mt-16 sm:mt-20">
        <h2
          id="education-heading"
          className="text-sm font-medium tracking-wide text-muted-foreground"
        >
          Education
        </h2>
        <div className="mt-8">
          <StatCards items={site.education} className="lg:grid-cols-3" />
        </div>
      </section>

      <section aria-labelledby="contests-heading" className="mt-16 sm:mt-20">
        <h2
          id="contests-heading"
          className="text-sm font-medium tracking-wide text-muted-foreground"
        >
          Contests
        </h2>
        <div className="mt-8">
          <StatCards items={site.contests} />
        </div>
      </section>

      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="mt-16 sm:mt-20"
      >
        <SkillGrid />
      </section>
    </main>
  );
}
