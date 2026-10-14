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

export interface UpdateItem {
  title: string;
  icon: string;
  note: string;
}

export interface LifecycleStep {
  label: string;
  icon: string;
}

export type Tone = "teal" | "violet" | "green" | "amber" | "rose";

export interface Service {
  id: string;
  name: string;
  /** Emoji shown on the tab and in the banner. */
  icon: string;
  /** Banner colour; leave out for the default KGMU navy blue. */
  tone?: Tone;
  summary: string;
  stats?: StatItem[];
  modules?: string[];
  taskGroups?: TaskGroup[];
  updatesTitle?: string;
  updates?: UpdateItem[];
  lifecycle?: LifecycleStep[];
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
