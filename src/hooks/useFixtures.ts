import { useQuery } from "@tanstack/react-query";
import type { LeagueGroup } from "../types/sports";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchFixtures = async () => {
  await delay(2000);
  const res = await fetch("/mock/matches.json");
  if (!res.ok) throw new Error("Failed to fetch matches");
  const data = await res.json();
  return data;
};

export const useFixtures = () => {
  return useQuery<LeagueGroup[]>({
    queryKey: ["fixtures"],
    queryFn: fetchFixtures,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 20000,
  });
};
