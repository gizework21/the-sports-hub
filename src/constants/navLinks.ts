import type { NavLink } from "../types/sports";

export const navTabLinks: NavLink[] = [
  { label: "Live", active: false },
  { label: "Matches", active: true },
  { label: "Standings", active: false, muted: true },
  { label: "Teams", active: false },
  { label: "Comparison", active: false },
  { label: "Statistics", active: false },
  { label: "Venues", active: false },
];
