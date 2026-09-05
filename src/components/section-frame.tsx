import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionFrame({
  id,
  labelledBy,
  children,
  className,
}: {
  id?: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-14 border-t border-white/5", className)}
    >
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-12">{children}</div>
    </section>
  );
}
