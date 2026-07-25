import { Divider } from './components/Divider';
import { Entry } from './components/Entry';
import { MetaBlock } from './components/MetaBlock';
import { Nav } from './components/Nav';
import { ProjectCard } from './components/ProjectCard';
import { SectionHeading } from './components/SectionHeading';
import { email, experience, projects } from './data/portfolio';

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 lg:px-12">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h1 className="font-display text-[clamp(2.4rem,7vw,4.9rem)] font-bold uppercase leading-none tracking-tight text-ink">
              Manesha Chand
            </h1>
            <p className="mt-6 max-w-3xl font-mono text-xs uppercase leading-6 tracking-[0.28em] text-inkDark md:text-sm">
              Computer Science · Software Engineering · Creative Technology
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <MetaBlock label="STATUS" value="BUILDING" />
            <MetaBlock label="OUTPUT" value="PORTFOLIO 01" />
            <MetaBlock label="SEED" value="2026" />
          </div>
        </section>

        <Divider />

        <section className="grid gap-16 lg:grid-cols-2">
          <div id="experience" className="scroll-mt-32 md:scroll-mt-24">
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-8">
              {experience.map((item) => (
                <Entry
                  key={`${item.organization}-${item.period}`}
                  title={item.organization}
                  subtitle={item.role}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <div id="projects" className="scroll-mt-32 md:scroll-mt-24">
            <SectionHeading>Projects</SectionHeading>
            <div>
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="mx-auto max-w-7xl px-6 pb-10 md:px-10 lg:px-12">
        <div className="border-t-2 border-dashed border-ink pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-wide text-inkDark md:text-sm">
            <a href={`mailto:${email}`} className="hover:underline hover:decoration-dashed hover:underline-offset-4">
              {email}
            </a>
            <p>© 2026 Manesha Chand</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
