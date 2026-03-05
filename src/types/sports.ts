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

export interface MatchDetailsResponse {
  league: string;

  match: {
    date: string;
    kickoff: string;
    status: string;
    score: {
      home: number;
      away: number;
    };
  };

  teams: {
    home: {
      name: string;
      logo: string;
      yellowCards?: number;
      redCards?: number;
    };
    away: {
      name: string;
      logo: string;
      yellowCards?: number;
      redCards?: number;
    };
  };

  events: {
    fulltime: {
      score: string;
      list: {
        id: number;
        minute: number;
        team: "home" | "away";
        type:
          | "goal"
          | "yellow"
          | "red"
          | "corner"
          | "substitution"
          | "injury"
          | "offPost";
        player: string;
        assist?: string;
        description?: string;
      }[];
    };

    halftime: {
      score: string;
      list: {
        id: number;
        minute: number;
        team: "home" | "away";
        type:
          | "goal"
          | "yellow"
          | "red"
          | "corner"
          | "substitution"
          | "injury"
          | "offPost";
        player: string;
        assist?: string;
        description?: string;
      }[];
    };
  };
}

export type MatchEvent = {
  id: number;
  minute: number;
  team: "home" | "away";
  type:
    | "goal"
    | "yellow"
    | "red"
    | "corner"
    | "substitution"
    | "injury"
    | "offPost";
  player: string;
  assist?: string;
  description?: string;
};

export const EVENT_ICONS: Record<string, string> = {
  goal: "/greenball.svg",
  yellow: "/yellow.svg",
  red: "/redCard2.svg",
  corner: "/cornaFlag.svg",
  substitution: "/exchange.svg",
  injury: "/injured.svg",
  offPost: "/offThePost.svg",
};

export interface Tab {
  label: string;
  active?: boolean;
}

export interface NavLink {
  label: string;
  active: boolean;
  muted?: boolean;
}
