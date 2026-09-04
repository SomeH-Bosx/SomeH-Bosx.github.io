import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function ResumeActions() {
  return (
    <>
      <a
        href={site.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "h-10 px-4"
        )}
      >
        View Resume
      </a>
      <a
        href={site.resumeUrl}
        download={site.resumeFileName}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "h-10 px-4"
        )}
      >
        Download PDF
      </a>
    </>
  );
}
