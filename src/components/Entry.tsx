type EntryProps = {
  title: string;
  href?: string;
  subtitle?: string;
  period?: string;
  description: string;
};

export function Entry({ title, href, subtitle, period, description }: EntryProps) {
  return (
    <article className="space-y-2 border-b border-dashed border-ink/50 pb-6 last:border-b-0">
      <h3 className="font-display text-xl font-bold uppercase leading-tight text-ink md:text-2xl">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:decoration-dashed hover:underline-offset-4"
          >
            {title}
          </a>
        ) : title}
      </h3>
      {(subtitle || period) && (
        <p className="font-mono text-sm font-semibold uppercase leading-6 text-inkDark md:text-base">
          {subtitle}{subtitle && period ? ' · ' : ''}{period}
        </p>
      )}
      <p className="max-w-2xl font-experience text-base leading-7 text-ink md:text-lg md:leading-8">{description}</p>
    </article>
  );
}
