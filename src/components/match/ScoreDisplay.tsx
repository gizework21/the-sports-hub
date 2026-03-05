import type { MatchSummary } from "../../types/sports";

export interface ScoreDisplayProps {
  match: MatchSummary;
  isDefaultVariant: boolean;
}

const ScoreDisplay = ({ match, isDefaultVariant }: ScoreDisplayProps) => (
  <div className="flex space-x-2">
    {isDefaultVariant && (
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
    )}

    <div className="flex flex-col text-white text-xs space-y-2">
      <div>{match.home.score.regular}</div>
      <div>{match.away.score.regular}</div>
    </div>
  </div>
);

export default ScoreDisplay;
