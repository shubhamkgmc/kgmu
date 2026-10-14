import type { GlanceItem, NavLink } from "../types";

// KGMU logo, a static file in /public (public/kgmu-logo.png). Replace that file to change the logo.
export const logoSrc = "/kgmu-logo.png";

export const org = { unit: "IT Cell", university: "King George's Medical University" };

export const navLinks: NavLink[] = [
  { label: "Our work", href: "#work" },
  { label: "Coverage", href: "#coverage" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const glance: GlanceItem[] = [
  { label: "Wi-Fi access points", value: "600+" },
  { label: "LAN ports", value: "5,500+" },
  { label: "IP CCTV cameras", value: "300" },
  { label: "IT support", value: "24x7", highlight: true },
];

export const contactLines: string[] = [
  "OPD appointments: 0522-2258880, 0522-3539333",
  "Emergency ambulance: +91 94530 04209",
  "Email: info@kgmcindia.edu",
  "Shah Mina Rd, Chowk, Lucknow 226003",
];
