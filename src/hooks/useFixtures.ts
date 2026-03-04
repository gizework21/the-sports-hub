import { useQuery } from "@tanstack/react-query";
import type { LeagueGroup } from "../types/sports";

const fetchFixtures = async () => {
  const res = await fetch("/api/fixtures");

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data.data;
};

export const useFixtures = () => {
  return useQuery<LeagueGroup[]>({
    queryKey: ["fixtures"],
    queryFn: fetchFixtures,
    staleTime: 10 * 60 * 1000,
    refetchInterval: 20000,
  });
};
