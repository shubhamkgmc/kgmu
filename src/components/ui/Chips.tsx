import type { ReactNode } from "react";

export function ChipList({ children }: { children: ReactNode }) {
  return <ul className="chips">{children}</ul>;
}

export function Chip({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}
