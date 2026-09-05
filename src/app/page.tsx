import { CompetitionSection } from "@/components/competition-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <CompetitionSection />
    </main>
  );
}
