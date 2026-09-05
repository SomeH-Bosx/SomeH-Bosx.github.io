import Link from "next/link";

import { BadgeList } from "@/components/badge-list";
import { buttonVariants } from "@/components/ui/button";
import { resumeProjects } from "@/data/resume";
import { cn } from "@/lib/utils";

type ResumeProject = (typeof resumeProjects)[number];

function optionalString(project: ResumeProject, key: "href" | "github") {
  if (!(key in project)) return null;
  const value = (project as Record<string, unknown>)[key];
  return typeof value === "string" ? value : null;
}

export function ResumeProjectList() {
  return (
    <ul className="space-y-4">
      {resumeProjects.map((project) => {
        const href = optionalString(project, "href");
        const github = optionalString(project, "github");

        return (
          <li
            key={project.slug}
            className="rounded-[20px] bg-card/80 p-4 ring-1 ring-foreground/10 sm:p-5"
          >
            <p className="text-xs tracking-wide text-muted-foreground">
              {project.date} · {project.role}
            </p>
            <h3 className="mt-1 text-lg font-medium tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <ul className="mt-3 max-w-3xl space-y-2 text-sm leading-relaxed text-muted-foreground">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <BadgeList items={project.tags} />
            </div>
            {href || github ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {href ? (
                  <Link
                    href={href}
                    className={cn(buttonVariants({ size: "sm" }))}
                  >
                    Case Study
                  </Link>
                ) : null}
                {github ? (
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" })
                    )}
                  >
                    GitHub
                  </Link>
                ) : null}
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
