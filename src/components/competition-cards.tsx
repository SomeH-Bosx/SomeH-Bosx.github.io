import { BadgeList } from "@/components/badge-list";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { resumeCompetitions } from "@/data/resume";
import { site } from "@/data/site";

export function CompetitionCards({
  detailed = false,
}: {
  detailed?: boolean;
}) {
  if (detailed) {
    return (
      <ul className="space-y-4">
        {resumeCompetitions.map((item) => (
          <li key={item.contest}>
            <Card className="rounded-[20px] bg-card/80">
              <CardHeader>
                <CardDescription>
                  {item.date} · {item.award}
                </CardDescription>
                <CardTitle className="text-lg leading-snug">
                  {item.contest}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{item.role}</p>
                <ul className="mt-2 max-w-3xl space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {item.highlights.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <BadgeList items={item.keywords} />
                </div>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {site.competitions.map((item) => (
        <li key={item.contest}>
          <Card className="h-full rounded-[20px] bg-card/80">
            <CardHeader>
              <CardDescription>{item.title}</CardDescription>
              <CardTitle className="text-lg leading-snug">{item.field}</CardTitle>
              <div className="pt-2">
                <BadgeList items={item.keywords} />
              </div>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  );
}
