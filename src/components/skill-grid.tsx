import { BadgeList } from "@/components/badge-list";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/data/site";

type SkillGroup = {
  category: string;
  items: readonly string[];
};

export function SkillGrid({
  groups = site.skillMatrix,
}: {
  groups?: readonly SkillGroup[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {groups.map((group) => (
        <li key={group.category}>
          <Card size="sm" className="h-full rounded-[20px] bg-card/80">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {group.category}
              </CardTitle>
              <div className="pt-2">
                <BadgeList items={group.items} />
              </div>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  );
}
