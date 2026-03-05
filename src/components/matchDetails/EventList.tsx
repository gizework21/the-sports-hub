import type { MatchEvent } from "../../types/sports";
import EventRow from "./EventRow";

type EventListProps = {
  events: MatchEvent[];
};

export function EventList({ events }: EventListProps) {
  if (!events?.length) return null;

  return (
    <div className="flex flex-col gap-3 w-full">
      {events.map((event) => (
        <EventRow key={event.id} event={event} />
      ))}
    </div>
  );
}
