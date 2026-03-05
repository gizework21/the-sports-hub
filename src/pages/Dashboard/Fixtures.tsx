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
import { MatchStatusFilterShimmer } from "../../components/shimmer/MatchStatusFilterShimmer";
import MatchCard from "../../components/match/MatchCard";

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

        {isLoading ? (
          <MatchStatusFilterShimmer />
        ) : (
          data && <MatchStatusFilter active={active} setActive={setActive} />
        )}

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

              {championsLeagueData.matches.map((match, idx) => (
                <MatchCard key={idx} match={match} />
              ))}
            </div>
          )
        )}

        {isLoading ? (
          <PremierLeagueShimmer />
        ) : (
          premierLeagueData && (
            <div className="flex flex-col space-y-2 p-4 bg-cardBg rounded-xl min-w-full font-interRegular">
              <div className="flex justify-between w-full items-center pb-2">
                <h6 className="text-white text-sm">
                  {premierLeagueData.league.name}
                </h6>
                <div className="flex justify-end">
                  <ChevronRight className="text-white items-end size-5" />
                </div>
              </div>

              {premierLeagueData.matches.map((match, idx) => (
                <MatchCard
                  key={idx}
                  match={match}
                  variant="premier"
                  formatKickoffTime={formatKickoffTime}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Fixtures;
