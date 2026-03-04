import type { LeagueGroup } from "../types/sports";

export function getDates() {
  const today = new Date();
  const tempDates = [];
  for (let i = -3; i <= 3; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);
    const day = d
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase();
    const date = d
      .toLocaleDateString("en-US", { day: "2-digit", month: "short" })
      .toUpperCase();
    tempDates.push({ day, date, offset: i });
  }
  return tempDates;
}

export const filterByLeague = (
  data: LeagueGroup[],
  leagueId: string,
): LeagueGroup | null => {
  const leagueGroup = data?.find((group) => group.league.id === leagueId);
  return leagueGroup ?? null;
};

export const formatKickoffTime = (kickoff: string) => {
  return new Date(kickoff).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
