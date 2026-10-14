import type { Member, TeamGroup } from "../types";

// Team structure as described on https://kgmu.org/it_infrastructure.php
export const teamGroups: TeamGroup[] = [
  { name: "Network & data centre", note: "A dedicated network team manages the data centre." },
  { name: "Helpdesk & support", note: "IT personnel support is available round the clock." },
  { name: "Data entry operators", note: "About 100 or more operators handle day-to-day IT work on campus." },
  { name: "Administration", note: "A dedicated office handles the cell's administrative work." },
];

// PLACEHOLDERS: replace with the real members (name, designation, group, and optionally phone/email).
// `group` should match one of the group names above.
export const members: Member[] = [
  { name: "Team member 1", role: "Designation", group: "Network & data centre", phone: "", email: "" },
  { name: "Team member 2", role: "Designation", group: "Helpdesk & support", phone: "", email: "" },
  { name: "Team member 3", role: "Designation", group: "Data entry operators", phone: "", email: "" },
  { name: "Team member 4", role: "Designation", group: "Administration", phone: "", email: "" },
];
