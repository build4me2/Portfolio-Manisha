type ProjectCardProps = {
  title: string;
  href: string;
  description: string;
  meta: string;
};

export function ProjectCard({ title, href, description, meta }: ProjectCardProps) {
  return (
    <article className="group border-b border-dashed border-ink/30 py-5 first:pt-0">
      <a href={href} className="inline-flex items-baseline gap-3 font-display text-xl font-bold text-ink transition hover:text-inkDark md:text-2xl">
        {title}
        <span className="font-body text-lg transition group-hover:translate-x-1">→</span>
      </a>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-inkDark md:text-sm">{meta}</p>
      <p className="mt-3 max-w-2xl font-body text-base leading-7 text-ink md:text-lg md:leading-8">{description}</p>
    </article>
  );
}
