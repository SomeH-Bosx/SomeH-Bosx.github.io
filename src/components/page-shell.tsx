import type { ReactNode } from "react";

import { FadeIn } from "@/components/fade-in";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("mx-auto max-w-5xl px-6 py-12 sm:py-16", className)}>
      <FadeIn>{children}</FadeIn>
    </main>
  );
}
