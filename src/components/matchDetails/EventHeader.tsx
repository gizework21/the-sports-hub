import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { MatchDetailsResponse } from "../../types/sports";
import EventHeaderShimmer from "../shimmer/EventHeaderShimmer";

function EventHeader({
  data,
  isLoading,
}: {
  data: MatchDetailsResponse | undefined;
  isLoading: boolean;
}) {
  const navigate = useNavigate();

  if (isLoading) {
    return <EventHeaderShimmer />;
  }

  return (
    <>
      <div className="flex space-x-4 items-center">
        <ChevronLeft
          onClick={() => navigate(-1)}
          className="text-white size-5 cursor-pointer"
        />
        <span className="text-sm text-white">{data?.league}</span>
      </div>

      <div className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img src={data?.teams.home.logo} alt="" />
          </div>
          <h6 className="text-white text-center text-sm">
            {data?.teams.home.name}
          </h6>
        </div>

        <div className="flex flex-col items-center space-y-0.5">
          <h6 className="text-sm text-[#E5E7EB]">{data?.match.date}</h6>

          <h6 className="text-2xl text-white">
            {data?.match.score.home} - {data?.match.score.away}
          </h6>

          <div className="bg-danger px-1 flex justify-center items-center rounded-sm text-white text-xs">
            {data?.match.status}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <img src={data?.teams.away.logo} alt="" />
          </div>
          <h6 className="text-white text-center text-sm">
            {data?.teams.away.name}
          </h6>
        </div>
      </div>
    </>
  );
}

export default EventHeader;
