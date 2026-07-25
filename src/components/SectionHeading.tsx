type SectionHeadingProps = {
  children: string;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8">
      <span className="bg-ink px-1.5 py-0.5 font-body text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
        {children}
      </span>
    </h2>
  );
}
