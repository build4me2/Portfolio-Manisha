export const email = 'chandmanisha00@gmail.com';

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: 'https://github.com/build4me2' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: `mailto:${email}` },
];

export const experience = [
  {
    organization: 'RJLF LLP',
    role: 'Member of Technical Staff',
    period: 'JUN 2025 – PRESENT',
    description:
      'Shipped 440+ commits to a 100K-line TypeScript/Vue legal-analytics platform in production use by attorneys — including a three-phase PDF-to-database court transcript parser, a multi-agent research pipeline on Anthropic’s API with a 56% latency cut, and a 41-item pre-deployment security audit driving 19 release blockers to closure.',
  },
  {
    organization: "PEOPLE'S SOLAR ENERGY FUND",
    role: 'Software Developer & Research Intern',
    period: 'JAN – MAY 2026',
    description:
      'Built an interactive network map (JavaScript, MapLibre GL JS) visualizing 39 member organizations across 24 states, backed by a five-stage idempotent Python geospatial pipeline over OpenStreetMap data; scoped a Next.js + Supabase architecture for the members’ portal.',
  },
  {
    organization: 'AUTONOME RESEARCH LABS',
    role: 'Co-Founder',
    period: '2025 – PRESENT',
    description:
      'Founded an open-source research group shipping MIT-licensed agent-infrastructure tooling; mentor undergraduate contributors.',
  },
  {
    organization: 'CITY COLLEGE OF SAN FRANCISCO',
    role: 'Programming Tutor & Grader',
    period: '2024',
    description:
      'Supported ~40 students in introductory Python and Java one-on-one; graded assignments on correctness, structure, and edge cases.',
  },
];

export const projects = [
  {
    title: 'Chiya Pasal',
    href: '#',
    description:
      'Automated research-librarian pipeline ingesting Semantic Scholar, OpenAlex, CrossRef, and arXiv into an interlinked knowledge base via a router → 4-scout → reviewer agent chain; added TypeScript source adapters, job-lock crash recovery, and topic dedup.',
    meta: 'TYPESCRIPT · SQLITE · LLM AGENTS',
  },
  {
    title: 'Nemotron Reasoning Harness',
    href: '#',
    description:
      'Autonomous harness training LoRA adapters on Nemotron-3-Nano-30B across multiple GPU machines for a six-category Kaggle reasoning benchmark, reaching 84.0% accuracy; built a verifier that detects poisoned synthetic training data.',
    meta: 'PYTHON · PEFT/LORA · MULTI-GPU',
  },
  {
    title: 'Basic File System',
    href: '#',
    description:
      'Owned free-space management and the directory layer of a FAT-based file system built by a four-person team (~1,700 lines): block allocation and release via chain splicing, path resolution, directory persistence, and the buffered I/O layer.',
    meta: 'C · LINUX · CSC 415',
  },
  {
    title: 'Bytecode Interpreter & Virtual Machine',
    href: '#',
    description:
      'Stack-based VM (1,400 lines, 34 classes) that loads compiled bytecode, resolves jump labels to instruction addresses, and executes programs with recursion, dynamic heap allocation, a verbose trace mode, and bounds/use-after-free/OOM exception handling.',
    meta: 'JAVA · VM · CSC 413',
  },
  {
    title: 'Multithreaded Police Dispatch Analytics',
    href: '#',
    description:
      'Processed a 342 MB fixed-length-record dataset (500,000 records, 36 fields) with a configurable pthread pool, batching 2,000 records per pread and guarding shared accumulators with per-scope mutexes; reported response-time medians and quartiles as ASCII box plots.',
    meta: 'C · POSIX THREADS · CSC 415',
  },
];
