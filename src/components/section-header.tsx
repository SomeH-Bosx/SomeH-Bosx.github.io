export function SectionHeader({
  id,
  title,
  kicker,
  aside,
}: {
  id?: string;
  title: string;
  kicker: string;
  aside?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2
          id={id}
          className="text-lg font-medium tracking-tight text-foreground sm:text-xl"
        >
          {title}
        </h2>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {kicker}
        </p>
      </div>
      {aside ? (
        <p className="shrink-0 text-sm text-muted-foreground">{aside}</p>
      ) : null}
    </div>
  );
}
