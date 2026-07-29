type ProjectCardProps = {
  title: string;
  href: string;
  meta: string;
};

export function ProjectCard({ title, href, meta }: ProjectCardProps) {
  const hasLink = href !== '' && href !== '#';
  return (
    <article className="group border-b border-dashed border-ink/50 py-6 first:pt-0">
      {hasLink ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-baseline gap-3 font-display text-xl font-bold text-ink transition hover:text-inkDark md:text-2xl"
        >
          {title}
          <span aria-hidden="true" className="font-body text-lg transition group-hover:translate-x-1">→</span>
        </a>
      ) : (
        <span className="font-display text-xl font-bold text-ink md:text-2xl">{title}</span>
      )}
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-inkDark md:text-sm">{meta}</p>
    </article>
  );
}
