export function CaseList({ items }: { items: readonly string[] }) {
  return (
    <ol className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3">
          <span className="text-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
