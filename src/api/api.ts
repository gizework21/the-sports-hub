export const API_BASE = import.meta.env.VITE_API_BASE;

export const ENDPOINTS = {
  NEXT_EVENTS: (leagueId: string) =>
    `${API_BASE}/eventsnext.php?id=${leagueId}`,
  EVENT_DETAILS: (eventId: string) =>
    `${API_BASE}/lookupevent.php?id=${eventId}`,
};
