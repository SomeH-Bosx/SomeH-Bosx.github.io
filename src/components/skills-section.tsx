import { FadeIn } from "@/components/fade-in";
import { SectionFrame } from "@/components/section-frame";
import { SectionHeader } from "@/components/section-header";
import { SkillGrid } from "@/components/skill-grid";

export function SkillsSection() {
  return (
    <SectionFrame id="skills" labelledBy="skills-heading">
      <FadeIn delay={120}>
        <SectionHeader id="skills-heading" title="Skills" />
        <div className="mt-6">
          <SkillGrid />
        </div>
      </FadeIn>
    </SectionFrame>
  );
}
