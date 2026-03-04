import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Header from "../../components/common/Header";
import { useFixtures } from "../../hooks/useFixtures";
import FixturesHeaderSection from "../../sections/FixturesHeaderSection";
import FilterByDateSection from "../../sections/FilterByDateSection";
import MatchStatusFilter from "../../sections/MatchStatusFilter";
import { PremierLeagueShimmer } from "../../components/shimmer/PremierLeagueShimmer";
import { ChampionsLeagueShimmer } from "../../components/shimmer/ChampionsLeagueShimmer";
import { filterByLeague, formatKickoffTime } from "../../utils/utilsFunction";
import ErrorMessage from "../../components/common/ErrorMessage";

function Fixtures() {
  const { data, isLoading, isError, error } = useFixtures();
  const [active, setActive] = useState("all");
  const championsLeagueData = filterByLeague(data ?? [], "ucl");
  const premierLeagueData = filterByLeague(data ?? [], "epl");

  return (
    <div className="flex flex-col w-full ">
      <Header />
      <div className="bg-background min-h-screen p-4 lg:px-72 md:py-4 flex flex-col space-y-4 w-full">
        <FixturesHeaderSection />
        <FilterByDateSection />
        {data && <MatchStatusFilter active={active} setActive={setActive} />}

        {isError && (
          <ErrorMessage
            message={
              (error as Error)?.message ||
              "Something went wrong while fetching fixtures."
            }
          />
        )}

        {isLoading ? (
          <ChampionsLeagueShimmer />
        ) : (
          championsLeagueData && (
            <div className="flex flex-col space-y-2 p-4 bg-cardBg rounded-xl min-w-full font-interRegular">
              <div className="flex justify-between w-full items-center pb-2">
                <h6 className="text-white text-sm">
                  {championsLeagueData.league.name}
                </h6>
                <div className="flex justify-end">
                  <ChevronRight className="text-white items-end size-5" />
                </div>
              </div>

              {championsLeagueData.matches.map((match, index) => (
                <div key={match.id} className="flex flex-col space-y-2">
                  <div className="border-l-2 border-danger flex items-center">
                    <div className="py-5">
                      <span className="text-danger text-xs px-4">
                        {match.status}
                      </span>
                    </div>

                    <div className="flex flex-col p-2 space-y-2">
                      {/* Home Team */}
                      <div className="flex space-x-2 items-center">
                        <img
                          src={match.home.logo}
                          alt={`${match.home.name} Logo`}
                          className="size-4"
                        />
                        <h6 className="text-white text-xs whitespace-nowrap">
                          {match.home.name}
                        </h6>
                        {match.home.redCards && (
                          <img
                            src="/redCard.svg"
                            alt="Red Card Icon"
                            className="size-3"
                          />
                        )}
                        {!match.home.redCards && match.isAggregate && (
                          <div className="bg-bgMuted p-1 flex space-x-0.5 items-center justify-center rounded-md">
                            <img src="/correct.svg" alt="Correct Icon" />
                            <span className="text-secondary text-[8px]">
                              AGG
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Away Team */}
                      <div className="flex space-x-2 items-center">
                        <img
                          src={match.away.logo}
                          alt={`${match.away.name} Logo`}
                          className="size-4"
                        />
                        <h6 className="text-white text-xs whitespace-nowrap">
                          {match.away.name}
                        </h6>
                        {match.isPenaltyShootout && (
                          <div className="bg-bgMuted p-1 flex space-x-0.5 items-center justify-center rounded-md">
                            <img src="/correct.svg" alt="Correct Icon" />
                            <span className="text-secondary text-[8px]">
                              PEN
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end py-2 w-full items-center space-x-5">
                      <div className="flex space-x-2">
                        <div className="flex flex-col text-[#6B7280] text-xs space-y-2">
                          <div className="text-[#6B7280]">
                            {match.isAggregate || match.isPenaltyShootout
                              ? `[${match.home.score.penalties || match.home.score.aggregate || 0}]`
                              : "[]"}
                          </div>
                          <div className="text-[#6B7280]">
                            {match.isAggregate || match.isPenaltyShootout
                              ? `[${match.away.score.penalties || match.away.score.aggregate || 0}]`
                              : "[]"}
                          </div>
                        </div>
                        <div className="flex flex-col text-white text-xs space-y-2">
                          <div>{match.home.score.regular}</div>
                          <div>{match.away.score.regular}</div>
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

                  {/* Add separator between matches except for the last one */}
                  {index < championsLeagueData?.matches.length - 1 && (
                    <hr className="border border-b-[#2A2B41]" />
                  )}
                </div>
              ))}
            </div>
          )
        )}

        {isLoading ? (
          <PremierLeagueShimmer />
        ) : (
          premierLeagueData && (
            <div className="flex flex-col space-y-2 p-4 bg-cardBg rounded-xl min-w-full">
              <div className="flex justify-between w-full items-center pb-2">
                <h6 className="text-white text-sm">
                  {premierLeagueData.league.name}
                </h6>
                <div className="flex justify-end">
                  <ChevronRight className="text-white items-end size-5" />
                </div>
              </div>

              {premierLeagueData.matches.map((match, index) => (
                <div key={match.id} className="flex flex-col space-y-1">
                  {/* LIVE match */}
                  {match.status === "LIVE" && (
                    <div className="border-l-2 border-secondary flex items-center relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 w-[calc(10%+60px)] bg-linear-to-r from-[#1B3337] to-transparent pointer-events-none" />
                      <div className="py-5 px-4 relative z-10">
                        <span className="wipe-underline text-secondary text-xs font-bold">
                          {match.minute}'
                        </span>
                      </div>
                      <div className="flex flex-col py-2 space-y-2 relative z-10">
                        <div className="flex space-x-2 items-center">
                          <img
                            src={match.home.logo}
                            alt={`${match.home.name} Logo`}
                            className="size-4"
                          />
                          <h6 className="text-white text-xs">
                            {match.home.name}
                          </h6>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <img
                            src={match.away.logo}
                            alt={`${match.away.name} Logo`}
                            className="size-4"
                          />
                          <h6 className="text-white text-xs whitespace-nowrap">
                            {match.away.name}
                          </h6>
                        </div>
                      </div>
                      <div className="flex justify-end py-2 w-full items-center space-x-5 relative z-10">
                        <div className="flex space-x-2">
                          <div className="flex flex-col text-white text-xs space-y-2">
                            <div>{match.home.score.regular}</div>
                            <div>{match.away.score.regular}</div>
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
                  )}

                  {/* HT match */}
                  {match.status === "HT" && (
                    <div className="border-l-2 border-secondary flex items-center relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 w-[calc(10%+60px)] bg-linear-to-r from-[#1B3337] to-transparent pointer-events-none" />
                      <div className="py-5 px-4 relative z-10">
                        <span className="wipe-underline text-secondary text-xs font-bold">
                          HT
                        </span>
                      </div>
                      <div className="flex flex-col py-2 space-y-2 relative z-10">
                        <div className="flex space-x-2 items-center">
                          <img
                            src={match.home.logo}
                            alt={`${match.home.name} Logo`}
                            className="size-4"
                          />
                          <h6 className="text-white text-xs whitespace-nowrap">
                            {match.home.name}
                          </h6>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <img
                            src={match.away.logo}
                            alt={`${match.away.name} Logo`}
                            className="size-4"
                          />
                          <h6 className="text-white text-xs whitespace-nowrap">
                            {match.away.name}
                          </h6>
                        </div>
                      </div>
                      <div className="flex justify-end py-2 w-full items-center space-x-5 relative z-10">
                        <div className="flex space-x-2">
                          <div className="flex flex-col text-white text-xs space-y-2">
                            <div>{match.home.score.regular}</div>
                            <div>{match.away.score.regular}</div>
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
                  )}

                  {/* Not Started matches */}
                  {match.status === "NS" && (
                    <div className="border-l-2 border-[#374151] flex items-center">
                      <div className="py-5">
                        <span className="text-white text-xs px-2">
                          {formatKickoffTime(match.kickoff)}
                        </span>
                      </div>
                      <div className="flex flex-col py-2 space-y-2">
                        <div className="flex space-x-2 items-center">
                          <img
                            src={match.home.logo}
                            alt={`${match.home.name} Logo`}
                            className="size-4"
                          />
                          <h6 className="text-white text-xs whitespace-nowrap">
                            {match.home.name}
                          </h6>
                        </div>
                        <div className="flex space-x-2 items-center">
                          <img
                            src={match.away.logo}
                            alt={`${match.away.name} Logo`}
                            className="size-4"
                          />
                          <h6 className="text-white text-xs whitespace-nowrap">
                            {match.away.name}
                          </h6>
                        </div>
                      </div>
                      <div className="flex justify-end py-2 w-full items-center space-x-5">
                        <div className="flex items-center">
                          <img
                            src="/menuDot.svg"
                            alt="Menu Dot Icon"
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Add separator between matches except for the last one */}
                  {index < premierLeagueData.matches.length - 1 && (
                    <hr className="border border-b-[#2A2B41]" />
                  )}
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Fixtures;
