import Link from "next/link";

import { BadgeList } from "@/components/badge-list";
import { ShotGallery } from "@/components/shot-gallery";
import { StatCards, type StatItem } from "@/components/stat-cards";
import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectHero({
  project,
  quote,
  meta,
}: {
  project: Project;
  quote: string;
  meta: readonly StatItem[];
}) {
  return (
    <>
      <div className="fixed top-14 right-0 left-0 z-40 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6 py-3">
          <Link
            href="/#projects"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Featured Projects
          </Link>
        </div>
      </div>
      <p className="text-xs tracking-wide text-muted-foreground uppercase">
        {project.subtitle}
      </p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <blockquote className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {quote}
      </blockquote>
      <div className="mt-6">
        <BadgeList items={project.tags} />
      </div>
      <div className="mt-8">
        <Link
          href={project.github}
          className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
        >
          GitHub
        </Link>
      </div>
      <div className="mt-12">
        <StatCards items={meta} className="lg:grid-cols-4" />
      </div>
      <ShotGallery shots={project.shots} title={project.title} />
    </>
  );
}
