import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  /** Extra classes: "alt" (tinted background), "screen-only", "print-only". */
  className?: string;
  title?: string;
  children: ReactNode;
}

export function Section({ id, className = "", title, children }: SectionProps) {
  return (
    <section id={id} className={`block ${className}`.trim()}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
