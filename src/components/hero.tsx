import Link from "next/link";

import { AvatarPortrait } from "@/components/avatar-portrait";
import { FadeIn } from "@/components/fade-in";
import { HashLink } from "@/components/hash-link";
import { SkillBadge } from "@/components/skill-badge";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-[65vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.48_0.16_250/0.16),transparent_55%)]"
      />
      <FadeIn className="relative mx-auto flex w-full max-w-5xl flex-col-reverse items-center justify-center gap-10 px-6 py-12 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <Badge
            variant="outline"
            className="h-7 gap-1.5 border-white/10 bg-white/5 px-3 text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            {site.status}
          </Badge>
          <h1 className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">
            {site.heroTitle}
          </h1>
          <p className="mt-2 text-xl tracking-tight text-muted-foreground sm:text-2xl">
            {site.name}
          </p>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {site.role} · {site.brand}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{site.location}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <li key={skill}>
                <SkillBadge label={skill} className="h-7 px-3 text-xs" />
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">
              {site.introZhBold}
            </strong>{" "}
            {site.introZh}
          </p>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">
              {site.introEnBold}
            </strong>{" "}
            {site.introEn}
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <HashLink
              href="/#projects"
              className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
            >
              查看项目
            </HashLink>
            <Link
              href="/resume/"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 px-4"
              )}
            >
              查看简历
            </Link>
          </div>
        </div>
        <AvatarPortrait
          src={site.avatar}
          alt={site.name}
          className="size-40 sm:size-52 md:size-64"
        />
      </FadeIn>
    </section>
  );
}
