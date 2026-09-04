import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ArchitectureStep = {
  title: string;
  subtitle: string;
};

export function ArchitectureFlow({ steps }: { steps: readonly ArchitectureStep[] }) {
  return (
    <ol
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2",
        steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"
      )}
    >
      {steps.map((step, index) => (
        <li key={step.title}>
          <Card size="sm" className="h-full rounded-[20px] bg-card/80">
            <CardHeader>
              <CardDescription>
                {String(index + 1).padStart(2, "0")}
              </CardDescription>
              <CardTitle className="text-base leading-snug">
                {step.title}
              </CardTitle>
              <CardDescription>{step.subtitle}</CardDescription>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ol>
  );
}
