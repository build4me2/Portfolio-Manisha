import { navLinks } from '../data/portfolio';

export function Nav() {
  return (
    <header className="sticky top-0 z-10 bg-paper/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 font-display text-base uppercase text-ink md:text-lg">
        {navLinks.map((link) => {
          const isExternal = link.href.startsWith('http');
          return (
            <a
              key={link.label}
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="hover:underline hover:decoration-dashed hover:underline-offset-4"
            >
              {link.label}
            </a>
          );
        })}
      </nav>
      <div className="mx-auto max-w-7xl border-t-2 border-dashed border-ink" />
    </header>
  );
}
