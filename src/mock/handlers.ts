import { http, HttpResponse } from "msw";
import { matchesResponse } from "./matches";

export const handlers = [
  http.get("/api/fixtures", async () => {
    await new Promise((res) => setTimeout(res, 600));

    return HttpResponse.json({
      data: matchesResponse,
    });
  }),
];
