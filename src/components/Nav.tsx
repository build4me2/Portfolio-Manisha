import { navLinks } from '../data/portfolio';

export function Nav() {
  return (
    <header className="sticky top-0 z-10 bg-paper/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-3 font-display text-sm uppercase text-ink md:gap-x-10 md:gap-y-3 md:py-6 md:text-lg">
        {navLinks.map((link) => {
          if (!link.href) {
            return (
              <button
                key={link.label}
                type="button"
                disabled
                aria-label="Resume download coming soon"
                className="cursor-default uppercase"
              >
                {link.label}
              </button>
            );
          }

          const isExternal = link.href.startsWith('http');
          const isFile = /\.(pdf|docx?)$/i.test(link.href);
          return (
            <a
              key={link.label}
              href={link.href}
              download={isFile ? true : undefined}
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
