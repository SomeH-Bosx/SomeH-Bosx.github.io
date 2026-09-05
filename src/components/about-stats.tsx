import { SectionHeader } from "@/components/section-header";
import { StatCards } from "@/components/stat-cards";
import { site } from "@/data/site";

export function AboutStats() {
  return (
    <section
      aria-labelledby="about-heading"
      className="border-t border-white/5"
    >
      <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
        <SectionHeader
          id="about-heading"
          title="About"
          kicker="不是自我介绍，是 30 秒能扫完的信号。"
        />
        <div className="mt-6">
          <StatCards items={site.highlights} className="lg:grid-cols-4" />
        </div>
      </div>
    </section>
  );
}
