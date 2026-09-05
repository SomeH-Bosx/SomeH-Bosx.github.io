import { AboutStats } from "@/components/about-stats";
import { ContactSection } from "@/components/contact-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { SkillGrid } from "@/components/skill-grid";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutStats />
      <FeaturedProjects />
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="scroll-mt-14 border-t border-white/5"
      >
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <SkillGrid />
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
