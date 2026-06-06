interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
      {text}
    </p>
  );
}

export default SectionLabel;
