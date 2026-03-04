export type MatchStatus = "FT" | "HT" | "LIVE" | "NS";

export interface League {
  id: string;
  name: string;
  country: string;
  logo: string;
}

export interface ScoreBreakdown {
  regular: number;
  penalties?: number;
  aggregate?: number;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  score: ScoreBreakdown;
  redCards?: number;
  yellowCards?: number;
}

export interface MatchSummary {
  id: string;
  leagueId: string;
  kickoff: string; // ISO
  status: MatchStatus;
  minute?: number; // for LIVE
  home: Team;
  away: Team;

  // UI badges
  isAggregate?: boolean;
  isPenaltyShootout?: boolean;
}

export interface LeagueGroup {
  league: League;
  matches: MatchSummary[];
}

/* ---------- DETAIL PAGE ---------- */

export type EventType =
  | "goal"
  | "yellow"
  | "red"
  | "substitution"
  | "corner"
  | "injury"
  | "penalty_goal";

export interface MatchEvent {
  id: string;
  minute: number;
  extraMinute?: number;
  team: "home" | "away";
  type: EventType;
  player: string;
  assist?: string;
  description?: string;
}

export interface MatchStatistics {
  possession: { home: number; away: number };
  shots: { home: number; away: number };
  shotsOnTarget: { home: number; away: number };
  corners: { home: number; away: number };
  fouls: { home: number; away: number };
}

export interface MatchDetailsResponse {
  match: MatchSummary;
  league: League;
  events: MatchEvent[];
  statistics: MatchStatistics;
}

export interface NavLink {
  label: string;
  active?: boolean;
  muted?: boolean;
}