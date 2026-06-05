type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionReveal({ children, className = "" }: SectionRevealProps) {
  return <div className={`section-reveal ${className}`}>{children}</div>;
}
