import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type StatItem = {
  label: string;
  value: string;
};

export function StatCards({
  items,
  className,
}: {
  items: readonly StatItem[];
  className?: string;
}) {
  return (
    <dl className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <Card
          key={item.label}
          size="sm"
          className="rounded-[20px] bg-card/80"
        >
          <CardHeader>
            <dt>
              <CardDescription>{item.label}</CardDescription>
            </dt>
            <dd className="m-0">
              <CardTitle className="text-base leading-snug">
                {item.value}
              </CardTitle>
            </dd>
          </CardHeader>
        </Card>
      ))}
    </dl>
  );
}
