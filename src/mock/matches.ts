import type { LeagueGroup } from "../types/sports";

export const matchesResponse: LeagueGroup[] = [
  {
    league: {
      id: "ucl",
      name: "UEFA Champions League",
      country: "Europe",
      logo: "/logos/ucl.png",
    },
    matches: [
      {
        id: "ucl-1",
        leagueId: "ucl",
        kickoff: "2025-08-11T20:00:00Z",
        status: "FT",
        isAggregate: true,
        home: {
          id: "arsenal",
          name: "Arsenal",
          logo: "/arsenal.svg",
          score: { regular: 2, aggregate: 2 },
        },
        away: {
          id: "valencia",
          name: "Valencia",
          logo: "/valencia.svg",
          score: { regular: 1, aggregate: 0 },
        },
      },
      {
        id: "ucl-2",
        leagueId: "ucl",
        kickoff: "2025-08-11T20:00:00Z",
        status: "FT",
        isPenaltyShootout: true,
        home: {
          id: "real-madrid",
          name: "Real Madrid",
          logo: "/madrid.svg",
          redCards: 1,
          score: { regular: 2, penalties: 2 },
        },
        away: {
          id: "mancity",
          name: "Manchester City",
          logo: "/manCity.svg",
          score: { regular: 1, penalties: 1 },
        },
      },
    ],
  },
  {
    league: {
      id: "epl",
      name: "English Premier League",
      country: "England",
      logo: "/logos/epl.png",
    },
    matches: [
      {
        id: "epl-1",
        leagueId: "epl",
        kickoff: "2025-08-11T15:00:00Z",
        status: "LIVE",
        minute: 63,
        home: {
          id: "arsenal",
          name: "Arsenal",
          logo: "/arsenal.svg",
          score: { regular: 2 },
        },
        away: {
          id: "mancity",
          name: "Manchester City",
          logo: "/manCity.svg",
          score: { regular: 1 },
        },
      },
      {
        id: "epl-2",
        leagueId: "epl",
        kickoff: "2025-08-11T15:00:00Z",
        status: "HT",
        home: {
          id: "newcastle",
          name: "Newcastle United",
          logo: "/newcastle.svg",
          score: { regular: 2 },
        },
        away: {
          id: "liverpool",
          name: "Liverpool",
          logo: "/liverpool.svg",
          score: { regular: 1 },
        },
      },
      {
        id: "epl-3",
        leagueId: "epl",
        kickoff: "2025-08-11T23:00:00Z",
        status: "NS",
        home: {
          id: "burnley",
          name: "Burnley",
          logo: "/burnley.svg",
          score: { regular: 0 },
        },
        away: {
          id: "manutd",
          name: "Manchester United",
          logo: "/manUnited.svg",
          score: { regular: 0 },
        },
      },
      {
        id: "epl-4",
        leagueId: "epl",
        kickoff: "2025-08-11T23:00:00Z",
        status: "NS",
        home: {
          id: "chelsea",
          name: "Chelsea",
          logo: "/chealse.svg",
          score: { regular: 0 },
        },
        away: {
          id: "southampton",
          name: "Southampton",
          logo: "/southampton.svg",
          score: { regular: 0 },
        },
      },
    ],
  },
];
