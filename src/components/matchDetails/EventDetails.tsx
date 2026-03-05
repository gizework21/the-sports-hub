import { EventList } from "./EventList";
import type { MatchDetailsResponse } from "../../types/sports";
import EventsDetailShimmer from "../shimmer/EventsDetailShimmer";

function EventDetails({
  data,
  isLoading,
}: {
  data: MatchDetailsResponse | undefined;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <EventsDetailShimmer />;
  }

  return (
    <div className="bg-cardBg p-4 rounded-md flex flex-col space-y-4">
      <h6 className="text-sm font-medium text-white">Events</h6>
      <div className="flex items-center space-x-4">
        <hr className="border-b border-[#292B41] w-full" />
        <div className="flex space-x-2  whitespace-nowrap text-[#E5E7EB]">
          <span>Fulltime</span>
          <span>{data?.events.fulltime.score}</span>
        </div>
        <hr className="border-b border-[#292B41] w-full" />
      </div>

      <EventList events={data?.events.fulltime.list ?? []} />

      <div className="flex items-center space-x-4">
        <hr className="border-b border-[#292B41] w-full" />
        <div className="flex space-x-2  whitespace-nowrap text-[#E5E7EB]">
          <h6>Halftime ‘</h6>
          <span>{data?.events.halftime.score}</span>
        </div>
        <hr className="border-b border-[#292B41] w-full" />
      </div>

      <EventList events={data?.events.halftime.list ?? []} />

      <div className="flex items-center space-x-4">
        <hr className="border-b border-[#292B41] w-full" />
        <div className="flex space-x-2  whitespace-nowrap text-[#E5E7EB]">
          <h6>Kick Off -</h6>
          <span>{data?.match?.kickoff}</span>
        </div>
        <hr className="border-b border-[#292B41] w-full" />
      </div>
    </div>
  );
}

export default EventDetails;
