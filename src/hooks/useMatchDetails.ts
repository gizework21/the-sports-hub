// import { useQuery } from "@tanstack/react-query";
// import { ENDPOINTS } from "../api/api";
// import type { MatchDetailsResponse, MatchEvent } from "../types/sports";

// const fetchMatchDetails = async (id: string): Promise<MatchEvent | null> => {
//   const res = await fetch(ENDPOINTS.EVENT_DETAILS(id));

//   if (!res.ok) {
//     throw new Error("Failed to fetch match details");
//   }

//   const data: MatchDetailsResponse = await res.json();

//   return data.events?.[0] ?? null;
// };

// export const useMatchDetails = (id: string) => {
//   return useQuery<MatchEvent | null>({
//     queryKey: ["match", id],
//     queryFn: () => fetchMatchDetails(id),
//     enabled: !!id,
//   });
// };
