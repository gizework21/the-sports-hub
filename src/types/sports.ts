export interface MatchEvent {
  idEvent: string;
  idLeague: string;
  strLeague: string;
  strSeason: string;

  strEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;

  idHomeTeam: string;
  idAwayTeam: string;

  strHomeTeamBadge: string;
  strAwayTeamBadge: string;

  intHomeScore: number | null;
  intAwayScore: number | null;

  strStatus: string;
  strTimestamp: string;
  dateEvent: string;
  strTime: string;

  strVenue: string;
  strCountry: string;

  strThumb: string | null;
}

export interface FixturesResponse {
  events: MatchEvent[] | null;
}

export interface MatchDetailsResponse {
  events: MatchEvent[] | null;
}
