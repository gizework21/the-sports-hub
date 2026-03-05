import type { Team } from "../../types/sports";

export interface TeamInfoProps {
  team: Team;
  showRedCard?: boolean;
  isAggregate?: boolean;
  isPenaltyShootout?: boolean;
}

const TeamInfo = ({
  team,
  showRedCard,
  isAggregate,
  isPenaltyShootout,
}: TeamInfoProps) => (
  <div className="flex space-x-2 items-center">
    <img src={team.logo} alt={`${team.name} Logo`} className="size-4" />
    <h6 className="text-white text-xs whitespace-nowrap">{team.name}</h6>

    {showRedCard && (
      <img src="/redCard.svg" alt="Red Card Icon" className="size-3" />
    )}

    {!showRedCard && isAggregate && (
      <div className="bg-bgMuted px-1 md:px-2 py-1 flex space-x-0.5 items-center justify-center rounded-md">
        <img src="/correct.svg" alt="Correct Icon" />
        <span className="text-secondary text-[8px]">AGG</span>
      </div>
    )}

    {isPenaltyShootout && (
      <div className="bg-bgMuted px-1 md:px-2 py-1 flex space-x-0.5 items-center justify-center rounded-md">
        <img src="/correct.svg" alt="Correct Icon" />
        <span className="text-secondary text-[8px]">PEN</span>
      </div>
    )}
  </div>
);

export default TeamInfo;
