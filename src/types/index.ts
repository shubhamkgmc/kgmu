export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface ChartRow {
  label: string;
  value: number;
}

export interface TaskGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface Service {
  id: string;
  name: string;
  summary: string;
  stats?: StatItem[];
  modules?: string[];
  taskGroups?: TaskGroup[];
  /** Gives the panel a gradient banner and the richer layout. */
  featured?: boolean;
  badge?: string;
  barsTitle?: string;
  bars?: ChartRow[];
  points?: string[];
  link?: { label: string; href: string };
}

export interface Eservice {
  name: string;
  note: string;
  details: string[];
  href: string;
  linkLabel: string;
}

export interface ReportLink {
  year: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface GlanceItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface TeamGroup {
  name: string;
  note: string;
}

export interface Member {
  name: string;
  role: string;
  group: string;
  phone?: string;
  email?: string;
}
