// src/components/match/HTMatch.tsx
import type { MatchSummary } from "../../types/sports";
import TeamInfo from "./TeamInfo";
import ScoreDisplay from "./ScoreDisplay";
import MenuDot from "./MenuDot";

interface HTMatchProps {
  match: MatchSummary;
}

const HTMatch = ({ match }: HTMatchProps) => (
  <div className="border-l-2 border-secondary flex items-center relative overflow-hidden">
    <div className="absolute inset-y-0 left-0 w-[calc(10%+60px)] bg-linear-to-r from-[#1B3337] to-transparent pointer-events-none" />

    <div className="py-5 px-4 relative z-10">
      <span className="wipe-underline text-secondary text-xs font-bold">
        HT
      </span>
    </div>

    <div className="flex flex-col py-2 space-y-2 relative z-10">
      <TeamInfo team={match.home} />
      <TeamInfo team={match.away} />
    </div>

    <div className="flex justify-end py-2 w-full items-center space-x-5 relative z-10">
      <ScoreDisplay match={match} isDefaultVariant={false} />
      <MenuDot />
    </div>
  </div>
);

export default HTMatch;
