import { useQuery } from "@tanstack/react-query";
import type { MatchDetailsResponse } from "../types/sports";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchMatchDetails = async () => {
  await delay(2000);
  const res = await fetch("/mock/matchDetails.json");
  if (!res.ok) throw new Error("Failed to fetch matches details");
  const data = await res.json();
  return data;
};

export const useMatchDetails = () => {
  return useQuery<MatchDetailsResponse>({
    queryKey: ["matchDetails"],
    queryFn: fetchMatchDetails,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 20000,
  });
};
