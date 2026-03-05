import type { MatchSummary } from "../../types/sports";
import TeamInfo from "./TeamInfo";
import ScoreDisplay from "./ScoreDisplay";
import MenuDot from "./MenuDot";

interface DefaultMatchProps {
  match: MatchSummary;
}

const DefaultMatch = ({ match }: DefaultMatchProps) => (
  <div className="border-l-2 border-danger flex items-center">
    <div className="py-5">
      <span className="text-danger text-xs px-4">{match.status}</span>
    </div>

    <div className="flex flex-col p-2 space-y-2">
      <TeamInfo
        team={match.home}
        showRedCard={!!match.home.redCards}
        isAggregate={match.isAggregate}
      />
      <TeamInfo team={match.away} isPenaltyShootout={match.isPenaltyShootout} />
    </div>

    <div className="flex justify-end py-2 w-full items-center space-x-5">
      <ScoreDisplay match={match} isDefaultVariant={true} />
      <MenuDot />
    </div>
  </div>
);

export default DefaultMatch;
