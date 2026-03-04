import type { MatchDetailsResponse } from "../types/sports";
import { matchesResponse } from "./matches";

const eplMatch = matchesResponse[1].matches[0];

export const matchDetails: Record<string, MatchDetailsResponse> = {
  "epl-1": {
    match: eplMatch,
    league: matchesResponse[1].league,
    events: [
      { id: "1", minute: 3, team: "home", type: "corner", player: "Arsenal" },
      {
        id: "2",
        minute: 12,
        team: "home",
        type: "goal",
        player: "Gyokeres",
        assist: "Odegaard",
      },
      { id: "3", minute: 25, team: "away", type: "yellow", player: "Konate" },
      { id: "4", minute: 36, team: "home", type: "corner", player: "Arsenal" },
      { id: "5", minute: 44, team: "home", type: "yellow", player: "Gabriel" },
      {
        id: "6",
        minute: 45,
        extraMinute: 2,
        team: "away",
        type: "substitution",
        player: "Jones",
      },
      { id: "7", minute: 55, team: "home", type: "goal", player: "Saka" },
      { id: "8", minute: 66, team: "away", type: "red", player: "Van Dijk" },
      { id: "9", minute: 74, team: "home", type: "corner", player: "Arsenal" },
      { id: "10", minute: 88, team: "home", type: "goal", player: "Gyokeres" },
    ],
    statistics: {
      possession: { home: 61, away: 39 },
      shots: { home: 15, away: 7 },
      shotsOnTarget: { home: 8, away: 3 },
      corners: { home: 6, away: 2 },
      fouls: { home: 10, away: 14 },
    },
  },
};
