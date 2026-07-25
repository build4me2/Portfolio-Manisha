type MetaBlockProps = {
  label: string;
  value: string;
};

export function MetaBlock({ label, value }: MetaBlockProps) {
  return (
    <div className="font-mono text-xs uppercase leading-5 tracking-wide text-ink md:text-sm">
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
}
