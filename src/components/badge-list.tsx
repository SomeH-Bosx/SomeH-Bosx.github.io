import { SkillBadge } from "@/components/skill-badge";

export function BadgeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <SkillBadge label={item} />
        </li>
      ))}
    </ul>
  );
}
