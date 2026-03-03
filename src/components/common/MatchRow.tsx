export const MatchRow = ({
  homeTeam,
  awayTeam,
  homeLogo,
  awayLogo,
  homeScore,
  awayScore,
  homeExtra,
  awayExtra,
  status,
  highlightIcon,
}: {
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  homeScore: number;
  awayScore: number;
  homeExtra?: string;
  awayExtra?: string;
  status?: string;
  highlightIcon?: string;
}) => (
  <div className="border-l-2 border-danger flex items-center">
    <div className="py-5">
      {status && <span className="text-danger text-xs px-4">{status}</span>}
    </div>
    <div className="flex flex-col p-2 space-y-2">
      <div className="flex space-x-2 items-center">
        <img src={homeLogo} alt={`${homeTeam} Logo`} className="size-4" />
        <h6 className="text-white text-sm whitespace-nowrap">{homeTeam}</h6>
        {homeExtra && (
          <div className="bg-bgMuted p-1 flex space-x-0.5 items-center justify-center rounded-md">
            <img src={highlightIcon || "/correct.svg"} alt="Icon" />
            <span className="text-secondary text-[8px] md:text-xs">{homeExtra}</span>
          </div>
        )}
      </div>
      <div className="flex space-x-2 items-center">
        <img src={awayLogo} alt={`${awayTeam} Logo`} className="size-4" />
        <h6 className="text-white text-sm whitespace-nowrap">{awayTeam}</h6>
        {awayExtra && (
          <div className="bg-bgMuted p-1 flex space-x-0.5 items-center justify-center rounded-md">
            <img src={highlightIcon || "/correct.svg"} alt="Icon" />
            <span className="text-secondary text-[8px] md:text-xs">{awayExtra}</span>
          </div>
        )}
      </div>
    </div>

    <div className="flex justify-end py-2 w-full items-center space-x-5">
      <div className="flex space-x-2">
        <div className="flex flex-col text-[#6B7280] text-xs space-y-2">
          <div>[{homeScore}]</div>
          <div>[{awayScore}]</div>
        </div>
        <div className="flex flex-col text-white text-xs space-y-2">
          <div>{homeScore}</div>
          <div>{awayScore}</div>
        </div>
      </div>

      <div className="flex items-center">
        <img src="/menuDot.svg" alt="Menu Dot Icon" className="cursor-pointer" />
      </div>
    </div>
  </div>
);
