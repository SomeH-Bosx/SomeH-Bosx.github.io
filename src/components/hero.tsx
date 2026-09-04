import { HashLink } from "@/components/hash-link";
import { ResumeActions } from "@/components/resume-actions";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.45_0.16_280/0.18),transparent_55%)]"
      />
      <div className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-5xl flex-col justify-center px-6 py-24">
        <Badge
          variant="outline"
          className="h-7 gap-1.5 border-white/10 bg-white/5 px-3 text-xs text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
          {site.status}
        </Badge>
        <h1 className="mt-6 text-4xl font-medium tracking-tight sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {site.role} · {site.location}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <li key={skill}>
              <Badge
                variant="secondary"
                className="h-7 rounded-full px-3 text-xs"
              >
                {skill}
              </Badge>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <HashLink
            href="/#projects"
            className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
          >
            查看项目
          </HashLink>
          <ResumeActions />
        </div>
      </div>
    </section>
  );
}
