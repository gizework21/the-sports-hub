import { useQuery } from "@tanstack/react-query";
import type { FixturesResponse, MatchEvent } from "../types/sports";
import { ENDPOINTS } from "../api/api";

const fetchFixtures = async (): Promise<MatchEvent[]> => {
  const res = await fetch(ENDPOINTS.NEXT_EVENTS("4396"));

  if (!res.ok) {
    throw new Error("Failed to fetch fixtures");
  }

  const data: FixturesResponse = await res.json();

  return data.events ?? [];
};

export const useFixtures = () => {
  return useQuery<MatchEvent[]>({
    queryKey: ["fixtures"],
    queryFn: fetchFixtures,
    refetchInterval: 20000,
  });
};
