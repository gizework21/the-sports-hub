import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Header from "../../components/common/Header";
import { useFixtures } from "../../hooks/useFixtures";
import FixturesHeaderSection from "../../sections/FixturesHeaderSection";
import FilterByDateSection from "../../sections/FilterByDateSection";
import MatchStatusFilter from "../../sections/MatchStatusFilter";
import { MatchRow } from "../../components/common/MatchRow";

function Fixtures() {
  const { data, isLoading, isError, error } = useFixtures();
  const [active, setActive] = useState("all");

  console.log("data ", data);
  console.log("isLoading ", isLoading);
  console.log("isError ", isError);
  console.log("error ", error);

  return (
    <div className="flex flex-col w-full ">
      <Header />
      <div className="bg-background min-h-screen p-4 lg:px-72 md:py-4 flex flex-col space-y-4 w-full">
        <FixturesHeaderSection />
        <FilterByDateSection />
        <MatchStatusFilter active={active} setActive={setActive} />
        {/* champions league */}
        <div className="flex flex-col space-y-2 p-4 bg-cardBg rounded-xl min-w-full">
          <div className="flex justify-between w-full items-center pb-2">
            <h6 className="text-white text-sm">UEFA Champions League</h6>
            <div className="flex justify-end">
              <ChevronRight className="text-white items-end size-5" />
            </div>
          </div>

          <MatchRow
            homeTeam="Arsenal"
            awayTeam="Valencia"
            homeLogo="/arsenal.svg"
            awayLogo="/valencia.svg"
            homeScore={2}
            awayScore={1}
            homeExtra="AGG"
            status="FT"
          />

          <hr className="border border-b-[#2A2B41]" />

          <MatchRow
            homeTeam="Real Madrid"
            awayTeam="Manchester city"
            homeLogo="/madrid.svg"
            awayLogo="/manCity.svg"
            homeScore={2}
            awayScore={1}
            homeExtra=""
            awayExtra="PEN"
            status="FT"
            // highlightIcon="/redCard.svg"
          />

          <hr className="border border-b-[#2A2B41]" />
        </div>
        {/* englihs premier league */}
        <div className="flex flex-col space-y-2 p-4 bg-cardBg rounded-xl min-w-full">
          <div className="flex justify-between w-full items-center pb-2">
            <h6 className="text-white text-sm">English Premier League</h6>
            <div className="flex justify-end">
              <ChevronRight className="text-white items-end size-5" />
            </div>
          </div>

          <div className="border-l-2 border-secondary flex items-center relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[calc(10%+60px)] bg-linear-to-r from-[#1B3337] to-transparent pointer-events-none" />
            <div className="py-5 relative z-10">
              <span className="text-secondary text-xs px-4 font-bold underline decoration-2 underline-offset-4">
                63'
              </span>
            </div>
            <div className="flex flex-col p-2 space-y-2 relative z-10">
              <div className="flex space-x-2 items-center">
                <img src="/arsenal.svg" alt="Arsenal Logo" className="size-4" />
                <h6 className="text-white text-sm">Arsenal</h6>
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/manCity.svg"
                  alt="Manchester City Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Manchester City
                </h6>
              </div>
            </div>
            <div className="flex justify-end py-2 w-full items-center space-x-5 relative z-10">
              <div className="flex space-x-2">
                <div className="flex flex-col text-white text-xs space-y-2">
                  <div>2</div>
                  <div>1</div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <hr className="border border-b-[#2A2B41]" />
          <div className="border-l-2 border-secondary flex items-center relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[calc(10%+60px)] bg-linear-to-r from-[#1B3337] to-transparent pointer-events-none" />
            <div className="py-5 relative z-10">
              <span className="text-secondary text-xs px-4 font-bold underline decoration-2 underline-offset-4">
                HT
              </span>
            </div>
            <div className="flex flex-col p-2 space-y-2 relative z-10">
              <div className="flex space-x-2 items-center">
                <img
                  src="/newcastle.svg"
                  alt="Newcastle United Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Newcastle United
                </h6>
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/liverpool.svg"
                  alt="Liverpool Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Liverpool
                </h6>
              </div>
            </div>
            <div className="flex justify-end py-2 w-full items-center space-x-5 relative z-10">
              <div className="flex space-x-2">
                <div className="flex flex-col text-white text-xs space-y-2">
                  <div>2</div>
                  <div>1</div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <hr className="border border-b-[#2A2B41]" />
          <div className="border-l-2 border-[#374151] flex items-center">
            <div className="py-5">
              <span className="text-white text-xs px-2">23:00</span>
            </div>
            <div className="flex flex-col p-2 space-y-2">
              <div className="flex space-x-2 items-center">
                <img src="/burnley.svg" alt="Burnley Logo" className="size-4" />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Burnley
                </h6>
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/manUnited.svg"
                  alt="Manchester United Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Manchester United
                </h6>
              </div>
            </div>
            <div className="flex justify-end py-2  w-full items-center space-x-5  ">
              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <hr className="border border-b-[#2A2B41]" />
          <div className="border-l-2 border-[#374151] flex items-center">
            <div className="py-5">
              <span className="text-white text-xs px-2">23:00</span>
            </div>
            <div className="flex flex-col p-2 space-y-2">
              <div className="flex space-x-2 items-center">
                <img src="/chealse.svg" alt="Chelsea Logo" className="size-4" />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Chelsea
                </h6>
              </div>
              <div className="flex space-x-2 items-center">
                <img
                  src="/southampton.svg"
                  alt="Southampton Logo"
                  className="size-4"
                />
                <h6 className="text-white text-sm whitespace-nowrap">
                  Southampton
                </h6>
              </div>
            </div>

            <div className="flex justify-end py-2  w-full items-center space-x-5  ">
              <div className="flex items-center">
                <img
                  src="/menuDot.svg"
                  alt="Menu Dot Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <hr className="border border-b-[#2A2B41]" />
        </div>
      </div>
    </div>
  );
}

export default Fixtures;
