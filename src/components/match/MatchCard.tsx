import type { MatchSummary } from "../../types/sports";
import LiveMatch from "./LiveMatch";
import HTMatch from "./HTMatch";
import NSMatch from "./NSMatch";
import DefaultMatch from "./DefaultMatch";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../router/Paths";

export interface MatchCardProps {
  match: MatchSummary;
  formatKickoffTime?: (kickoff: string) => string;
  variant?: "default" | "premier";
}

const MatchCard = ({
  match,
  formatKickoffTime,
  variant = "default",
}: MatchCardProps) => {
  const navigate = useNavigate();

  if (variant === "premier") {
    return (
      <div
        onClick={() => navigate(Paths.matchDetails)}
        className="flex flex-col space-y-2 cursor-pointer"
      >
        {match.status === "LIVE" && <LiveMatch match={match} />}
        {match.status === "HT" && <HTMatch match={match} />}
        {match.status === "NS" && (
          <NSMatch match={match} formatKickoffTime={formatKickoffTime} />
        )}
        <hr className="border border-b-[#2A2B41]" />
      </div>
    );
  }

  return (
    <div
      onClick={() => navigate(Paths.matchDetails)}
      className="flex flex-col space-y-2 cursor-pointer"
    >
      <DefaultMatch match={match} />
      <hr className="border border-b-[#2A2B41]" />
    </div>
  );
};

export default MatchCard;
