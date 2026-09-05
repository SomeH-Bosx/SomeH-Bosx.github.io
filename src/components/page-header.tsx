export function PageHeader({
  title,
  kicker,
}: {
  title: string;
  kicker: string;
}) {
  return (
    <header>
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {kicker}
      </p>
    </header>
  );
}
