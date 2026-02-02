interface StatBlockProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

export function StatBlock({ label, value, highlight = false }: StatBlockProps) {
  if (!value || value === "") return null;

  return (
    <div
      className="rounded-lg bg-card p-4 text-center transition-all ring-1 ring-primary/40"
    >
      <p className="text-2xl font-bold text-foreground md:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
