import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function ResumeDownloads({
  size = "lg",
}: {
  size?: "sm" | "lg";
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
      {site.resumes.map((resume, index) => (
        <a
          key={resume.href}
          href={resume.href}
          download={resume.fileName}
          className={cn(
            buttonVariants({
              variant: index === 0 ? "default" : "outline",
              size,
            }),
            size === "lg" && "h-10 px-4"
          )}
        >
          {resume.label} (PDF)
        </a>
      ))}
    </div>
  );
}
