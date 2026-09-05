import { Badge } from "@/components/ui/badge";
import { getSkillLogo, logoFill } from "@/components/skill-marks";
import { cn } from "@/lib/utils";

export function SkillBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const logo = getSkillLogo(label);

  return (
    <Badge
      variant="secondary"
      className={cn("h-6 gap-1.5 rounded-full px-2.5", className)}
    >
      {logo ? (
        <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden>
          <title>{logo.title}</title>
          <path fill={logoFill(logo.hex)} d={logo.path} />
        </svg>
      ) : null}
      {label}
    </Badge>
  );
}
