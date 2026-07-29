import { DecodingText } from './DecodingText';

type SectionHeadingProps = {
  children: string;
  delay?: number;
};

export function SectionHeading({ children, delay = 700 }: SectionHeadingProps) {
  return (
    <h2 className="mb-8">
      <DecodingText
        text={children}
        delay={delay}
        className="bg-ink px-1.5 py-0.5 font-body text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
      />
    </h2>
  );
}
