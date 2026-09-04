import { StatCards } from "@/components/stat-cards";
import { site } from "@/data/site";

export function AboutStats() {
  return (
    <section
      aria-labelledby="about-heading"
      className="border-t border-white/5"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2
          id="about-heading"
          className="text-sm font-medium tracking-wide text-muted-foreground"
        >
          About
        </h2>
        <div className="mt-8">
          <StatCards
            items={site.highlights}
            className="lg:grid-cols-4"
          />
        </div>
      </div>
    </section>
  );
}
