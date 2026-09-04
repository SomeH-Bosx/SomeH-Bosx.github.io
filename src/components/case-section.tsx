import type { ReactNode } from "react";

export function CaseSection({
  index,
  title,
  children,
  id,
}: {
  index: string;
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-14">
      <h2 className="text-sm font-medium tracking-wide text-muted-foreground">
        {index} {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
