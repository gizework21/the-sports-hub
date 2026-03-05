// src/components/match/NSMatch.tsx
import type { MatchSummary } from "../../types/sports";
import TeamInfo from "./TeamInfo";
import MenuDot from "./MenuDot";

interface NSMatchProps {
  match: MatchSummary;
  formatKickoffTime?: (kickoff: string) => string;
}

const NSMatch = ({ match, formatKickoffTime }: NSMatchProps) => (
  <div className="border-l-2 border-[#374151] flex items-center">
    <div className="py-5">
      <span className="text-white text-xs px-2">
        {formatKickoffTime && match.kickoff
          ? formatKickoffTime(match.kickoff)
          : match.kickoff}
      </span>
    </div>

    <div className="flex flex-col py-2 space-y-2">
      <TeamInfo team={match.home} />
      <TeamInfo team={match.away} />
    </div>

    <div className="flex justify-end py-2 w-full items-center space-x-5">
      <MenuDot />
    </div>
  </div>
);

export default NSMatch;
