export const API_BASE = import.meta.env.VITE_API_BASE;

export const ENDPOINTS = {
  // NEXT_EVENTS: () => `${API_BASE}/fixtures?league=39&season=2023`,  --- IGNORE --- get matches by league
  NEXT_EVENTS: () => `${API_BASE}/fixtures?id=1035037`, //fixture id for testing get single match details
  EVENT_DETAILS: (eventId: string) =>
    `${API_BASE}/fixtures?id=${eventId}`,
  // EVENT_DETAILS: (eventId: string) =>
  //   `${API_BASE}/lookupevent.php?id=${eventId}`,
};
