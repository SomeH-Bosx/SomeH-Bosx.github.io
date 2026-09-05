import { CompetitionCards } from "@/components/competition-cards";
import { FadeIn } from "@/components/fade-in";
import { SectionFrame } from "@/components/section-frame";
import { SectionHeader } from "@/components/section-header";

export function CompetitionSection() {
  return (
    <SectionFrame id="background" labelledBy="background-heading">
      <FadeIn delay={160}>
        <SectionHeader
          id="background-heading"
          title="Data Analysis & Mathematical Modeling"
        />
        <div className="mt-6">
          <CompetitionCards />
        </div>
      </FadeIn>
    </SectionFrame>
  );
}
