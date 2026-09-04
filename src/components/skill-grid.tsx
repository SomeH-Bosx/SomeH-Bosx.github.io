import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/data/site";

export function SkillGrid() {
  return (
    <div>
      <h2
        id="skills-heading"
        className="text-sm font-medium tracking-wide text-muted-foreground"
      >
        Tech Stack
      </h2>
      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {site.skillMatrix.map((group) => (
          <li key={group.category}>
            <Card size="sm" className="h-full rounded-[20px] bg-card/80">
              <CardHeader>
                <CardDescription>{group.category}</CardDescription>
                <CardTitle className="text-base font-normal leading-relaxed">
                  {group.items.join(" · ")}
                </CardTitle>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
