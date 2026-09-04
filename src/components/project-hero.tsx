import Link from "next/link";

import { ShotGallery } from "@/components/shot-gallery";
import { StatCards, type StatItem } from "@/components/stat-cards";
import { Badge } from "@/components/ui/badge";
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
      <Link
        href="/#projects"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Featured Projects
      </Link>
      <p className="mt-8 text-xs tracking-wide text-muted-foreground uppercase">
        {project.subtitle}
      </p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <blockquote className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {quote}
      </blockquote>
      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Badge variant="secondary" className="h-6 rounded-full px-2.5">
              {tag}
            </Badge>
          </li>
        ))}
      </ul>
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
