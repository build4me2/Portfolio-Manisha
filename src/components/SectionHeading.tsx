type SectionHeadingProps = {
  children: string;
  id?: string;
};

export function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h2 id={id} className="mb-8 scroll-mt-24">
      <span className="bg-ink px-1.5 py-0.5 font-body text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
        {children}
      </span>
    </h2>
  );
}
