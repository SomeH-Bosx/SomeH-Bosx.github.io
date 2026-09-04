import Link from "next/link";

import { CopyEmailButton } from "@/components/copy-email-button";
import { ResumeActions } from "@/components/resume-actions";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-14 border-t border-white/5"
    >
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-20 sm:py-28">
        <h2
          id="contact-heading"
          className="text-3xl font-medium tracking-tight sm:text-4xl"
        >
          Let&apos;s Build Something
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {site.contactLine}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={site.github}
            className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
          >
            GitHub
          </Link>
          <ResumeActions />
          <CopyEmailButton />
        </div>
      </div>
    </section>
  );
}
