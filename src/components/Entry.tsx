type EntryProps = {
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
};

export function Entry({ title, subtitle, period, description }: EntryProps) {
  return (
    <article className="space-y-2 border-b border-dashed border-ink/30 pb-7 last:border-b-0">
      <h3 className="font-display text-xl font-bold uppercase leading-tight text-ink md:text-2xl">
        {title}
      </h3>
      {(subtitle || period) && (
        <p className="font-mono text-sm font-semibold uppercase leading-6 text-inkDark md:text-base">
          {subtitle}{subtitle && period ? ' · ' : ''}{period}
        </p>
      )}
      <p className="max-w-2xl font-body text-base leading-7 text-ink md:text-lg md:leading-8">{description}</p>
    </article>
  );
}
