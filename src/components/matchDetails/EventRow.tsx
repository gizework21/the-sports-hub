import { EVENT_ICONS, type MatchEvent } from "../../types/sports";

type EventRowProps = {
  event: MatchEvent;
};

function EventRow({ event }: EventRowProps) {
  const isHome = event.team === "home";
  const icon = EVENT_ICONS[event.type];

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">
      {isHome ? (
        <div className="flex items-center space-x-2 justify-self-end">
          <div className="flex flex-col text-right">
            <span className="text-sm text-white">{event.player}</span>

            {event.assist && (
              <span className="text-sm text-gray-400">{event.assist}</span>
            )}

            {event.description && (
              <span className="text-sm text-gray-400">{event.description}</span>
            )}
          </div>

          <img src={icon} alt={event.type} className="size-4" />

          <hr className="border-[#292B41] w-4" />
        </div>
      ) : (
        <div />
      )}

      <div className="bg-[#26273B] px-4 py-0.5 rounded-2xl text-white text-sm justify-self-center">
        {event.minute}'
      </div>

      {!isHome ? (
        <div className="flex items-center space-x-2 justify-self-start">
          <hr className="border-[#292B41] w-4" />

          <img src={icon} alt={event.type} className="size-4" />

          <div className="flex flex-col">
            <span className="text-sm text-white">{event.player}</span>

            {event.assist && (
              <span className="text-sm text-gray-400">{event.assist}</span>
            )}

            {event.description && (
              <span className="text-sm text-gray-400">{event.description}</span>
            )}
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default EventRow;
