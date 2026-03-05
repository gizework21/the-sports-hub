import type { NavLink, Tab } from "../types/sports";

export const navTabLinks: NavLink[] = [
  { label: "Live", active: false },
  { label: "Matches", active: true },
  { label: "Standings", active: false, muted: true },
  { label: "Teams", active: false },
  { label: "Comparison", active: false },
  { label: "Statistics", active: false },
  { label: "Venues", active: false },
];

export const tabs: Tab[] = [
  { label: "Details" },
  { label: "Odds" },
  { label: "Events", active: true },
  { label: "Stats" },
  { label: "Standings" },
];
