import Link from "next/link";

import { BadgeList } from "@/components/badge-list";
import { ProjectCover } from "@/components/project-cover";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <Card className="relative gap-4 rounded-[20px] bg-card/80 pt-0 ring-foreground/10 hover:ring-brand/40">
        <Link
          href={project.href}
          className="absolute inset-0 z-10 rounded-[20px]"
        >
          <span className="sr-only">查看 {project.title}</span>
        </Link>
        <ProjectCover src={project.cover} alt={`${project.title} 封面`} />
        <CardHeader className="pt-0">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">
            {project.subtitle}
          </p>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <div className="mt-2">
            <BadgeList items={project.tags} />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="relative z-20 flex flex-wrap gap-2 border-t-0 bg-transparent">
          {project.ctas.map((cta, index) => {
            const external = cta.href.startsWith("http");
            return (
              <Link
                key={cta.label}
                href={cta.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={cn(
                  buttonVariants({
                    variant: index === 0 ? "default" : "outline",
                    size: "sm",
                  })
                )}
              >
                {cta.label}
              </Link>
            );
          })}
        </CardFooter>
      </Card>
    </article>
  );
}
