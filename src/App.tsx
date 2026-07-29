import { useLayoutEffect } from 'react';
import { DecodingText } from './components/DecodingText';
import { Divider } from './components/Divider';
import { Entry } from './components/Entry';
import { Nav } from './components/Nav';
import { ProjectCard } from './components/ProjectCard';
import { SectionHeading } from './components/SectionHeading';
import { email, experience, projects } from './data/portfolio';

function App() {
  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    scrollToTop();
    const frameId = window.requestAnimationFrame(scrollToTop);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 lg:px-12">
        <section>
          <h1 className="font-title text-[clamp(2rem,6vw,4.5rem)] font-normal uppercase leading-tight tracking-tight text-ink lg:whitespace-nowrap">
            <DecodingText text="Manisha Chand" delay={100} />
          </h1>
          <p className="reveal-content mt-6 max-w-4xl font-subtitle text-xs uppercase leading-6 tracking-[0.12em] text-inkDark md:text-sm md:tracking-[0.18em]" style={{ animationDelay: '100ms' }}>
            Computer Science · Software Engineering · Creative Technology
          </p>
        </section>

        <Divider />

        <section className="grid gap-16 pt-8 lg:grid-cols-2">
          <div id="experience" className="scroll-mt-32 md:scroll-mt-24">
            <SectionHeading delay={500}>Experience</SectionHeading>
            <div className="reveal-content space-y-6" style={{ animationDelay: '500ms' }}>
              {experience.map((item) => (
                <Entry
                  key={`${item.organization}-${item.period}`}
                  title={item.organization}
                  href={item.href}
                  subtitle={item.role}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <div id="projects" className="scroll-mt-32 md:scroll-mt-24">
            <SectionHeading delay={580}>Projects</SectionHeading>
            <div className="reveal-content" style={{ animationDelay: '580ms' }}>
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="mx-auto max-w-7xl px-6 pb-12 md:px-10 lg:px-12">
        <div className="border-t-2 border-dashed border-ink pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-wide text-inkDark md:text-sm">
            <a href={`mailto:${email}`} className="hover:underline hover:decoration-dashed hover:underline-offset-4">
              {email}
            </a>
            <p>© 2026 Manisha Chand</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
